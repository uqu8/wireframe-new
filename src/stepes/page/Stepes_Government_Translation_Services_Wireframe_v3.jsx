import React, { useId, useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  blush: "#FDF2F7",
  dark: "#141827",
  ink: "#111827",
  body: "#475569",
  line: "#E5E7EB",
  soft: "#F7F8FB",
  eyebrowDark: "#F2A7C6",
};

const audiences = [
  {
    icon: "building",
    title: "Federal Agencies",
    text: "Translate public information, program materials, reports, regulations, digital content, training, procurement documents, and agency operations content with workflows aligned to your subject matter, audience, and review requirements.",
  },
  {
    icon: "map",
    title: "State Governments",
    text: "Support statewide programs across health, labor, transportation, education, housing, public safety, licensing, environmental services, workforce development, and other resident-facing functions.",
  },
  {
    icon: "city",
    title: "Cities, Counties, and Municipalities",
    text: "Communicate clearly with multilingual communities through translated public notices, service information, forms, websites, meeting materials, emergency updates, and outreach content.",
  },
  {
    icon: "users",
    title: "Tribal Governments and Public Authorities",
    text: "Support multilingual and culturally informed communication for tribal governments, transportation authorities, utilities, housing authorities, school districts, courts, commissions, and other public bodies.",
  },
  {
    icon: "briefcase",
    title: "Government Contractors",
    text: "Translate technical documentation, proposals, training content, program deliverables, user documentation, research, software, and public-facing materials produced in support of government contracts.",
  },
  {
    icon: "globe",
    title: "International Public Institutions",
    text: "Manage multilingual communication for ministries, public agencies, development programs, public-health campaigns, international cooperation, and cross-border administrative activities.",
  },
];

const useCases = [
  {
    title: "Public Information and Community Outreach",
    text: "Make announcements, resident guides, program explanations, surveys, consultations, town-hall materials, social media, and FAQs understandable across languages while preserving a clear and respectful tone.",
    tags: ["Public notices", "Resident guides", "Outreach campaigns"],
  },
  {
    title: "Health and Human Services",
    text: "Support public-health departments, social-service agencies, benefits administrators, behavioral-health programs, aging services, disability programs, and related community resources.",
    tags: ["Enrollment", "Eligibility", "Health education"],
  },
  {
    title: "Emergency and Public Safety",
    text: "Translate alerts, evacuation information, severe-weather notices, public-health advisories, shelter instructions, preparedness campaigns, recovery resources, and frequently changing notices.",
    tags: ["Emergency alerts", "Safety procedures", "Recovery resources"],
  },
  {
    title: "Transportation and Public Infrastructure",
    text: "Localize transit information, service alerts, rider guides, public-meeting materials, construction notices, infrastructure reports, environmental documentation, and traveler content.",
    tags: ["Transit content", "Project notices", "Public meetings"],
  },
  {
    title: "Housing, Employment, and Social Programs",
    text: "Support clear program administration through multilingual applications, tenant communications, workforce resources, unemployment information, requirements, forms, and supporting digital content.",
    tags: ["Housing", "Workforce", "Benefits"],
  },
  {
    title: "Legal, Regulatory, and Administrative Content",
    text: "Translate policies, regulations, guidance, legal notices, procurement content, ordinances, licensing materials, inspection documents, and official correspondence with specialized review where appropriate.",
    tags: ["Policies", "Procurement", "Administrative guidance"],
  },
  {
    title: "Education and Workforce Development",
    text: "Translate instructional materials, eLearning, student and family communications, workforce-development programs, professional training, assessments, handbooks, and multimedia learning resources.",
    tags: ["eLearning", "Family communications", "Training"],
  },
  {
    title: "International Development and Public Programs",
    text: "Support program documentation, research, field resources, monitoring and evaluation, grants, procurement, impact reports, stakeholder engagement, and community-facing materials.",
    tags: ["Program delivery", "Field resources", "Impact reporting"],
  },
];

const contentGroups = [
  {
    title: "Public Information",
    items: [
      "Public notices and advisories",
      "Resident and visitor guides",
      "Community announcements",
      "Public consultations and surveys",
      "Newsletters and email communications",
      "Social media and public-service campaigns",
    ],
  },
  {
    title: "Programs and Services",
    items: [
      "Applications and enrollment forms",
      "Eligibility and benefits information",
      "Letters, notices, and instructions",
      "Contact-center scripts",
      "Complaint and appeal information",
      "Community resource directories",
    ],
  },
  {
    title: "Legal and Administrative",
    items: [
      "Regulations, ordinances, and policies",
      "Contracts and agreements",
      "Procurement and RFP documents",
      "Licensing and permit materials",
      "Inspection and public records",
      "Court and hearing materials",
    ],
  },
  {
    title: "Digital Government",
    items: [
      "Government websites and portals",
      "Online forms and mobile applications",
      "Knowledge bases and help content",
      "Chatbot and virtual-assistant content",
      "Software interfaces and notifications",
      "Digital-service instructions",
    ],
  },
  {
    title: "Reports and Research",
    items: [
      "Annual and policy reports",
      "Research publications",
      "Economic and demographic studies",
      "Environmental reports",
      "Program evaluations",
      "Presentations and data-collection materials",
    ],
  },
  {
    title: "Training and Multimedia",
    items: [
      "Employee and community training",
      "eLearning modules",
      "Videos, animations, and webinars",
      "Subtitles, captions, and voice-over scripts",
      "Meeting transcripts",
      "Public briefings and presentations",
    ],
  },
];

const services = [
  {
    icon: "document",
    title: "Professional Government Translation",
    text: "Qualified linguists are selected for the language, subject matter, audience, and document type. Fully human workflows are available for public-facing, legal, technical, health, safety, policy, and other high-consequence content.",
    href: "https://www.stepes.com/translation-services/",
    link: "Professional Translation Services",
  },
  {
    icon: "spark",
    title: "AI Translation With Human Review",
    text: "Use AI to accelerate appropriate content while preserving professional accountability through terminology controls, translation memory, automated QA, post-editing, and final human approval.",
    href: "https://www.stepes.com/ai-translation-services/",
    link: "AI Translation Services",
  },
  {
    icon: "browser",
    title: "Government Website Translation",
    text: "Translate departmental websites, program portals, online guidance, knowledge bases, and frequently updated digital content through file-based, structured-content, API, or continuous-localization workflows.",
    href: "https://www.stepes.com/website-translation-services/",
    link: "Website Translation Services",
  },
  {
    icon: "code",
    title: "Software and Application Localization",
    text: "Localize resident portals, public-service applications, agency systems, mobile apps, forms, notifications, and software interfaces with attention to context, usability, and interface constraints.",
    href: "https://www.stepes.com/software-translation-services/",
    link: "Software Translation Services",
  },
  {
    icon: "layout",
    title: "Multilingual Desktop Publishing",
    text: "Preserve visual integrity across Word, PowerPoint, Excel, InDesign, Illustrator, PDF, and other publishing formats while addressing text expansion, typography, tables, graphics, and right-to-left requirements.",
    href: "https://www.stepes.com/multilingual-desktop-publishing/",
    link: "Multilingual DTP Services",
  },
  {
    icon: "video",
    title: "Multimedia Localization",
    text: "Localize public-service announcements, training programs, meetings, webinars, and digital learning content through transcription, translation, subtitling, captioning, voice-over, and multilingual production.",
    href: "https://www.stepes.com/multimedia-translation-services/",
    link: "Multimedia Localization Services",
  },
  {
    icon: "headset",
    title: "Government Interpreting Services",
    text: "Support public meetings, interviews, hearings, training, community events, consultations, and appointments through remote, on-site, simultaneous, or consecutive interpreting based on project requirements.",
    href: "https://www.stepes.com/interpretation-services/",
    link: "Interpreting Services",
  },
  {
    icon: "certificate",
    title: "Certified Translation",
    text: "Obtain certified translations for official records, administrative submissions, and supporting documentation. Certification, notarization, sworn translation, or jurisdiction-specific requirements are confirmed before work begins.",
    href: "https://www.stepes.com/certified-translation-services/",
    link: "Certified Translation Services",
  },
];

const accessibleItems = [
  "Website navigation and page content",
  "Online-form labels and instructions",
  "Error and validation messages",
  "Image descriptions and alternative text",
  "Video captions and transcripts",
  "Document headings and tables",
  "Screen-reader labels",
  "Mobile and responsive interfaces",
];

const aiTiers = [
  {
    label: "Highest control",
    title: "Professional Human Translation",
    text: "For high-consequence, sensitive, legally significant, safety-related, highly visible, or linguistically complex content. Optional independent revision, subject-matter review, agency review, and final approval can be added.",
  },
  {
    label: "Balanced speed and assurance",
    title: "AI-Assisted Translation With Human Review",
    text: "For content that benefits from greater speed or scale but still requires professional quality. Linguists edit for accuracy, completeness, terminology, fluency, audience suitability, and context.",
  },
  {
    label: "Approved lower-risk use",
    title: "Governed AI Translation",
    text: "For authorized use cases where rapid access matters more than publication-ready quality. Workflows can apply approved terminology, translation memory, QA checks, access controls, and required human approval.",
  },
  {
    label: "Independent validation",
    title: "Client-Provided Machine Translation Review",
    text: "Send your source content and AI-generated translations to Stepes. Professional linguists compare them against the source, correct errors, apply terminology, identify omissions or unsupported additions, and prepare the content for its intended use.",
  },
];

const qualityItems = [
  {
    icon: "users",
    title: "Qualified Linguists",
    text: "Projects are assigned according to language pair, subject matter, content type, audience, and workflow requirements, including legal, medical, technical, financial, educational, and public-sector expertise.",
  },
  {
    icon: "book",
    title: "Terminology Management",
    text: "Centralize approved agency names, program terms, legal language, acronyms, recurring instructions, and community terminology for consistent use by linguists, reviewers, and AI workflows.",
  },
  {
    icon: "memory",
    title: "Translation Memory",
    text: "Reuse approved translations to maintain consistency, reduce repeated work, accelerate updates, and preserve established language across recurring notices, forms, policies, and digital content.",
  },
  {
    icon: "review",
    title: "Independent Review",
    text: "Add second-linguist revision, subject-matter validation, legal review, program-owner approval, accessibility review, or community input according to the content’s purpose and risk.",
  },
  {
    icon: "check",
    title: "Automated Quality Assurance",
    text: "Identify possible omissions, number mismatches, terminology inconsistencies, untranslated text, punctuation issues, and formatting problems while preserving human linguistic judgment.",
  },
  {
    icon: "message",
    title: "Plain-Language Translation",
    text: "Carry clear, audience-appropriate communication into every target language and flag source ambiguity, difficult terminology, unexplained acronyms, or instructions that may be hard to use.",
  },
];

const securityItems = [
  {
    title: "Role-Based Access",
    text: "Limit project visibility and workflow actions according to the responsibilities of requesters, project managers, linguists, reviewers, program owners, procurement teams, and final approvers.",
  },
  {
    title: "Controlled Linguist Assignment",
    text: "Restrict sensitive projects to approved resources based on language, expertise, location, confidentiality requirements, or other agreed criteria.",
  },
  {
    title: "Protected Project Workspaces",
    text: "Keep files, instructions, discussions, translated content, review activity, and deliverables within a controlled project environment.",
  },
  {
    title: "Retention and Handling Requirements",
    text: "Define project-specific expectations for access, retention, archival, and deletion during onboarding or project planning.",
  },
  {
    title: "Activity Visibility",
    text: "Maintain visibility into project status, assigned resources, review activity, decisions, versions, and delivery milestones.",
  },
  {
    title: "Enterprise Security Review Support",
    text: "Support procurement and security assessments with relevant information about workflow controls, data handling, confidentiality, quality systems, and operational practices.",
  },
];

const programFeatures = [
  {
    icon: "inbox",
    title: "Centralized Request Intake",
    text: "Give authorized teams a consistent way to submit content, languages, deadlines, service requirements, instructions, reference material, and approval needs.",
  },
  {
    icon: "folders",
    title: "Department and Program Workspaces",
    text: "Organize translation activity by agency, department, program, region, content type, or funding source.",
  },
  {
    icon: "route",
    title: "Configurable Approval Workflows",
    text: "Route content through translation, linguistic review, subject-matter validation, legal review, program approval, and final release based on content type and risk.",
  },
  {
    icon: "history",
    title: "Decision and Version History",
    text: "Maintain records of comments, requested changes, approvals, source versions, translated versions, and release decisions.",
  },
  {
    icon: "chart",
    title: "Budget and Program Visibility",
    text: "Track volume, languages, turnaround, costs, pending reviews, workflow bottlenecks, recurring content, and other operational indicators.",
  },
  {
    icon: "plug",
    title: "APIs and Content Integrations",
    text: "Connect translation to websites, content-management systems, software repositories, structured content, and other government publishing environments.",
  },
];

const readinessItems = [
  "Priority languages",
  "Approved emergency terminology",
  "Reusable message templates",
  "Named requesters and approvers",
  "Linguist availability planning",
  "Escalation procedures",
  "Review requirements by content type",
  "Publishing formats and version control",
];

const languagePlanning = [
  "Census and local demographic data",
  "Program enrollment and usage data",
  "Contact-center language requests",
  "School or health-system data",
  "Community and stakeholder input",
  "Geographic concentration",
  "Frequency and importance of interaction",
  "Consequences of misunderstanding",
  "Applicable policies, grants, and contracts",
  "Available budget and operational capacity",
];

const globalPrograms = [
  {
    title: "International Cooperation",
    text: "Translate agreements, policy exchanges, research, presentations, diplomatic support content, meeting materials, and institutional communications.",
  },
  {
    title: "Public Health and Humanitarian Programs",
    text: "Localize educational content, field resources, training, surveys, public-health information, program documentation, and community communications.",
  },
  {
    title: "Economic Development and Trade",
    text: "Translate investment information, trade documentation, infrastructure programs, business resources, economic reports, and international outreach content.",
  },
  {
    title: "Monitoring, Evaluation, and Reporting",
    text: "Support multilingual data collection, surveys, evaluation instruments, program reports, field documentation, and stakeholder feedback.",
  },
];

const processSteps = [
  {
    title: "Define the Requirements",
    text: "Confirm the audience, content type, languages, format, purpose, timeline, review expectations, accessibility considerations, security needs, and required deliverables.",
  },
  {
    title: "Assess Content and Risk",
    text: "Evaluate subject matter, public visibility, consequences of error, volume, repetitions, digital requirements, and update frequency to select the right workflow.",
  },
  {
    title: "Prepare Linguistic Assets",
    text: "Collect existing translations, terminology, style guides, reference documents, program names, acronyms, and other approved language assets.",
  },
  {
    title: "Translate and Localize",
    text: "Assign qualified resources and localize documents, digital content, software, audiovisual materials, and structured content according to the approved workflow.",
  },
  {
    title: "Review and Validate",
    text: "Complete the required linguistic, automated, subject-matter, agency, legal, accessibility, or community review stages with comments tied to the correct version.",
  },
  {
    title: "Deliver and Improve",
    text: "Produce final files in the required formats, retain approved language assets as agreed, and use feedback and recurring issues to improve future workflows.",
  },
];

const whyItems = [
  {
    title: "Government and Subject-Matter Expertise",
    text: "Linguists are selected for the language, content type, audience, and domain, including legal, healthcare, technical, financial, educational, and public-information content.",
  },
  {
    title: "More Than 100 Languages",
    text: "Support widely spoken languages, regional variants, and many lower-resource languages through one coordinated provider.",
  },
  {
    title: "AI Efficiency With Human Accountability",
    text: "Apply AI selectively while maintaining professional review and approval for public-facing and high-consequence content.",
  },
  {
    title: "Documents, Digital Content, and Multimedia",
    text: "Manage government documents, websites, software, forms, videos, training, and spoken communication through connected language services.",
  },
  {
    title: "Centralized Terminology",
    text: "Protect approved program names, agency terminology, defined terms, recurring instructions, acronyms, and public-service language across projects.",
  },
  {
    title: "Enterprise Workflow Visibility",
    text: "Manage requesters, reviewers, permissions, approvals, project status, language assets, and reporting within a coordinated multilingual environment.",
  },
  {
    title: "ISO-Supported Quality Framework",
    text: "Support procurement and supplier review through documented quality processes and relevant certification information.",
  },
  {
    title: "Scalable Delivery",
    text: "Use Stepes for one urgent document, a multilingual website, a recurring public-information program, or an agency-wide translation operation.",
  },
];

const faqs = [
  {
    question: "What are government translation services?",
    answer: "Government translation services convert public-sector documents, digital content, multimedia, and official communications from one language into another. They may include document translation, website and software localization, multilingual desktop publishing, captioning, voice-over, interpreting, certified translation, terminology management, and ongoing language-program support.",
  },
  {
    question: "What levels of government does Stepes support?",
    answer: "Stepes supports federal, state, county, municipal, tribal, and international public-sector organizations, as well as government contractors, public authorities, education systems, courts, utilities, development programs, and other publicly funded institutions. The workflow is adapted to the organization, content, language, procurement structure, and intended audience.",
  },
  {
    question: "What government documents can Stepes translate?",
    answer: "Stepes translates public notices, policies, regulations, reports, forms, applications, benefits information, health and safety materials, procurement documents, legal content, websites, portals, training, software, presentations, emergency communications, videos, and many other government content types.",
  },
  {
    question: "How many languages does Stepes support?",
    answer: "Stepes supports translation and localization in more than 100 languages and regional variants. Availability for specialized assignments depends on subject matter, required credentials, service type, location, deadline, and review requirements.",
  },
  {
    question: "How should an agency determine which languages to support?",
    answer: "Agencies often evaluate local demographics, program data, audience needs, frequency of contact, service importance, public-safety consequences, geographic concentration, communication channels, and available resources. Requirements may also vary by jurisdiction, program, funding arrangement, contract, court order, and content type. In March 2025, Executive Order 14224 designated English as the official language of the United States and revoked Executive Order 13166, while allowing agencies to continue multilingual documents, products, and services as they consider necessary to fulfill their missions, consistent with applicable law. Agencies should consult their legal and policy teams when determining formal obligations. Stepes can help operationalize the languages, workflows, and service levels an agency selects but does not provide legal advice.",
  },
  {
    question: "Does Stepes use AI for government translation?",
    answer: "Yes. Stepes can use AI translation as part of a governed workflow when it is appropriate for the content and approved by the client. AI may be combined with professional post-editing, terminology management, translation memory, automated QA, subject-matter review, and named human approval. High-consequence content can remain within a fully professional human workflow.",
  },
  {
    question: "Can Stepes review translations produced by an agency’s AI system?",
    answer: "Yes. Agencies can provide the source content and an existing translation produced by an agency AI tool, language model, or machine translation engine. Stepes linguists compare the translation against the source, correct errors, apply approved terminology, identify omissions or unsupported additions, improve fluency, and prepare the content for its intended audience and use.",
  },
  {
    question: "How does Stepes protect sensitive government information?",
    answer: "Stepes supports controlled enterprise workflows through role-based access, limited project visibility, protected project workspaces, confidentiality requirements, activity visibility, and agreed retention and handling practices. Project-specific security, resource, data-residency, screening, classification, citizenship, secure-facility, or government-authorization requirements must be evaluated and agreed to before work begins.",
  },
  {
    question: "Can Stepes translate Section 508-accessible content?",
    answer: "Stepes can translate and localize the language components of accessible websites, documents, multimedia, and software, including headings, form labels, alternative text, captions, transcripts, and assistive-technology labels. Translation by itself does not guarantee Section 508 conformance; source design, technical implementation, document structure, remediation, and testing also matter. Stepes can coordinate with your accessibility and publishing teams as part of a complete multilingual workflow.",
  },
  {
    question: "Does Stepes translate urgent government and emergency communications?",
    answer: "Yes. Stepes supports urgent public notices, safety information, emergency updates, health advisories, service interruptions, and other time-sensitive communications. Feasibility depends on the languages, volume, subject matter, file formats, required review, and deadline. Agencies with recurring urgent needs can establish terminology, templates, workflows, and resource plans in advance.",
  },
  {
    question: "Does Stepes provide government interpreting services?",
    answer: "Stepes provides remote and on-site interpreting support for meetings, interviews, hearings, public events, training, appointments, and other spoken-language requirements. Service mode, location, schedule, subject matter, language, interpreter credentials, equipment, and recording requirements are confirmed during planning.",
  },
  {
    question: "Can Stepes provide certified government document translations?",
    answer: "Yes. Stepes can provide a signed certification of translation accuracy for appropriate documents. Notarization, sworn translation, apostille support, or other formal requirements vary by jurisdiction and intended use and should be confirmed before translation begins.",
  },
  {
    question: "How does Stepes maintain consistent government terminology?",
    answer: "Stepes uses approved glossaries, translation memories, style guides, reference content, automated terminology checks, and professional review. Resolved terminology decisions can be centralized and reused across departments, languages, document versions, AI workflows, websites, and recurring public communications.",
  },
  {
    question: "Can agency employees review translations before publication?",
    answer: "Yes. Agency reviewers, program owners, legal teams, subject-matter experts, regional staff, and other authorized stakeholders can be incorporated into the review and approval process. Access can be limited by project, department, language, workflow stage, or responsibility.",
  },
  {
    question: "Can Stepes support Indigenous and lower-resource languages?",
    answer: "Stepes supports many lower-resource and Indigenous languages, subject to linguist availability, language variety, content type, location, required credentials, and deadline. These projects often benefit from additional planning for orthography, terminology, community review, font support, voice recording, and publishing requirements.",
  },
  {
    question: "Can Stepes manage an ongoing government translation contract?",
    answer: "Yes. Stepes supports recurring and enterprise government language programs with centralized intake, project management, terminology, translation memory, user roles, approval workflows, reporting, and integration options. Service-level expectations, pricing, staffing, security, quality requirements, and performance reporting can be defined during procurement and onboarding.",
  },
  {
    question: "What information is needed for a government translation quote?",
    answer: "Provide source files or estimated volume, source and target languages, intended audience and use, required delivery date, desired translation and review workflow, file formats, existing translations or terminology, accessibility needs, certification or interpreting requirements, security and handling requirements, expected update frequency, and procurement instructions. Stepes can review the materials and recommend an appropriate workflow before pricing is finalized.",
  },
];

function Icon({ name, size = 24, decorative = true }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": decorative ? "true" : undefined,
    focusable: "false",
  };

  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    building: <><path d="M4 21h16"/><path d="M6 21V8l6-4 6 4v13"/><path d="M9 10h1"/><path d="M14 10h1"/><path d="M9 14h1"/><path d="M14 14h1"/><path d="M11 21v-3h2v3"/></>,
    map: <><path d="m3 6 5-2 8 3 5-2v13l-5 2-8-3-5 2Z"/><path d="M8 4v13"/><path d="M16 7v13"/></>,
    city: <><path d="M3 21h18"/><path d="M5 21V9h6v12"/><path d="M11 21V4h8v17"/><path d="M8 12h.01"/><path d="M8 16h.01"/><path d="M14 8h2"/><path d="M14 12h2"/><path d="M14 16h2"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></>,
    spark: <><path d="m12 3 1.3 4.2L17.5 8.5l-4.2 1.3L12 14l-1.3-4.2-4.2-1.3 4.2-1.3Z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8Z"/><path d="M5 15v4"/><path d="M3 17h4"/></>,
    browser: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><path d="M7 6h.01"/><path d="M10 6h.01"/><path d="M8 12h8"/><path d="M8 16h5"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 5-4 14"/></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></>,
    video: <><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2Z"/><path d="m8 9 4 3-4 3Z"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2Z"/><path d="M20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/><path d="M17 20c0 1-2 2-4 2"/></>,
    certificate: <><circle cx="12" cy="9" r="6"/><path d="m8 14-1 8 5-3 5 3-1-8"/><path d="m10 9 1.3 1.3L14 7.7"/></>,
    book: <><path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 3Z"/><path d="M20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 3Z"/></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3"/><path d="M15 2v3"/><path d="M9 19v3"/><path d="M15 19v3"/><path d="M2 9h3"/><path d="M2 15h3"/><path d="M19 9h3"/><path d="M19 15h3"/><path d="M9 9h6v6H9z"/></>,
    review: <><path d="M5 3h10l4 4v14H5z"/><path d="M15 3v5h5"/><path d="m8 14 2 2 5-5"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8"/><path d="M8 13h5"/></>,
    inbox: <><path d="M4 4h16v16H4z"/><path d="M4 14h4l2 3h4l2-3h4"/></>,
    folders: <><path d="M3 7h7l2 2h9v10H3z"/><path d="M3 7V5h7l2 2"/></>,
    route: <><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v4a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4"/><path d="m15 9 3-3 3 3"/><path d="M18 6v5"/></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/></>,
    chart: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></>,
    plug: <><path d="m9 7 8 8"/><path d="m12 4 2 2"/><path d="m16 8 2 2"/><path d="M7 9 4 12a4 4 0 0 0 6 6l3-3"/><path d="m14 6 3-3"/><path d="m18 10 3-3"/></>,
    shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></>,
    languages: <><path d="M4 5h9"/><path d="M8 3v2"/><path d="M6 5c0 4 3 7 7 8"/><path d="M11 5c-.5 3-3 6-7 8"/><path d="m14 21 4-9 4 9"/><path d="M15.5 18h5"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`gov-arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function Checklist({ items, columns = 1, light = false }) {
  return (
    <ul className={`gov-checklist gov-checklist--${columns} ${light ? "is-light" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="gov-checklist__icon"><Icon name="check" size={18} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`gov-section-heading gov-section-heading--${align} ${dark ? "is-dark" : ""}`}>
      {eyebrow ? <p className={`gov-eyebrow ${dark ? "gov-eyebrow--dark" : ""}`}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="gov-section-intro">{intro}</p> : null}
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className={`gov-faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className="gov-faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div id={`${id}-panel`} className="gov-faq-panel" hidden={!open}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function GovernmentTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gov-page">
      <style>{`
        :root {
          --gov-magenta: ${BRAND.magenta};
          --gov-magenta-dark: ${BRAND.magentaDark};
          --gov-blush: ${BRAND.blush};
          --gov-dark: ${BRAND.dark};
          --gov-ink: ${BRAND.ink};
          --gov-body: ${BRAND.body};
          --gov-line: ${BRAND.line};
          --gov-soft: ${BRAND.soft};
          --gov-eyebrow-dark: ${BRAND.eyebrowDark};
          --gov-shell: 1280px;
          --gov-pad: 56px;
        }

        .gov-page,
        .gov-page * {
          box-sizing: border-box;
        }

        .gov-page {
          margin: 0;
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--gov-ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .gov-page a {
          color: var(--gov-magenta);
          text-decoration: none;
        }

        .gov-page button,
        .gov-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .gov-page h1,
        .gov-page h2,
        .gov-page h3,
        .gov-page p,
        .gov-page li,
        .gov-page a,
        .gov-page span,
        .gov-page strong {
          overflow-wrap: anywhere;
        }

        .gov-hero__grid > *,
        .gov-stat-layout > *,
        .gov-split > *,
        .gov-ai-layout > *,
        .gov-security-layout > *,
        .gov-language-layout > *,
        .gov-service-row > *,
        .gov-program-item > *,
        .gov-procurement-band > * {
          min-width: 0;
        }

        .gov-container {
          width: min(100%, calc(var(--gov-shell) + (var(--gov-pad) * 2)));
          margin: 0 auto;
          padding-left: var(--gov-pad);
          padding-right: var(--gov-pad);
        }

        .gov-section {
          padding: 96px 0;
        }

        .gov-section--dense {
          padding: 80px 0;
        }

        .gov-section--soft {
          background: var(--gov-soft);
        }

        .gov-section--blush {
          background: linear-gradient(180deg, #fff 0%, var(--gov-blush) 100%);
        }

        .gov-section--dark {
          position: relative;
          overflow: hidden;
          background: var(--gov-dark);
          color: #fff;
        }

        .gov-section--dark::before {
          content: "";
          position: absolute;
          top: -260px;
          right: -220px;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, .18), rgba(193, 29, 99, 0) 68%);
          pointer-events: none;
        }

        .gov-eyebrow {
          margin: 0 0 14px;
          color: var(--gov-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .18em !important;
          text-transform: uppercase;
          opacity: 1 !important;
        }

        .gov-eyebrow--dark {
          color: var(--gov-eyebrow-dark) !important;
        }

        .gov-section-heading {
          max-width: 820px;
          margin-bottom: 50px;
        }

        .gov-section-heading--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .gov-section-heading h2,
        .gov-split-copy h2,
        .gov-stat-copy h2,
        .gov-final-cta h2 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -.025em;
        }

        .gov-section-heading.is-dark h2,
        .gov-section-heading.is-dark .gov-section-intro,
        .gov-section--dark h2,
        .gov-section--dark h3,
        .gov-section--dark p {
          color: #fff;
        }

        .gov-section-intro,
        .gov-lead {
          max-width: 800px;
          margin: 20px 0 0;
          color: var(--gov-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .gov-section-heading--center .gov-section-intro {
          margin-left: auto;
          margin-right: auto;
        }

        .gov-hero {
          position: relative;
          min-height: 700px;
          padding: 104px 0 96px;
          background:
            radial-gradient(circle at 83% 18%, rgba(193, 29, 99, .09), transparent 27%),
            linear-gradient(180deg, #fff 0%, #FBFBFD 100%);
          border-bottom: 0;
        }

        .gov-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(193,29,99,.22), transparent);
        }

        .gov-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(470px, .98fr);
          gap: 72px;
          align-items: center;
        }

        .gov-hero h1 {
          max-width: 760px;
          margin: 0;
          color: var(--gov-ink);
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .gov-hero__copy {
          max-width: 720px;
          margin: 24px 0 0;
          color: var(--gov-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .gov-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .gov-btn {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 23px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }

        .gov-btn--primary,
        .gov-btn--primary:link,
        .gov-btn--primary:visited,
        .gov-btn--primary:hover,
        .gov-btn--primary:active,
        .gov-btn--primary:focus,
        .gov-btn--primary:focus-visible {
          background: var(--gov-magenta);
          color: #fff !important;
        }

        .gov-btn--primary *,
        .gov-btn--primary svg,
        .gov-btn--primary svg * {
          color: #fff !important;
          stroke: #fff !important;
          fill: none;
        }

        .gov-btn--primary:hover {
          background: var(--gov-magenta-dark);
          box-shadow: 0 12px 26px rgba(193, 29, 99, .2);
          transform: translateY(-1px);
        }

        .gov-btn--secondary {
          background: #fff;
          border-color: #D9DEE8;
          color: var(--gov-ink) !important;
        }

        .gov-btn--secondary:hover {
          border-color: #BBC2CF;
          box-shadow: 0 10px 24px rgba(15,23,42,.08);
          transform: translateY(-1px);
        }

        .gov-btn:focus-visible,
        .gov-arrow-link:focus-visible,
        .gov-faq-item button:focus-visible {
          outline: 3px solid rgba(193,29,99,.28);
          outline-offset: 3px;
        }

        .gov-hero__visual {
          position: relative;
          min-height: 488px;
        }

        .gov-hero__visual::before,
        .gov-hero__visual::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .gov-hero__visual::before {
          width: 380px;
          height: 380px;
          top: 12px;
          right: 12px;
          border: 1px solid rgba(193,29,99,.16);
        }

        .gov-hero__visual::after {
          width: 250px;
          height: 250px;
          top: 78px;
          right: 78px;
          border: 1px dashed rgba(193,29,99,.2);
        }

        .gov-portal-card {
          position: absolute;
          z-index: 2;
          top: 40px;
          right: 0;
          width: min(100%, 470px);
          overflow: hidden;
          border: 1px solid #E2E5EC;
          border-radius: 30px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 30px 70px rgba(15,23,42,.12);
          backdrop-filter: blur(12px);
        }

        .gov-portal-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid #E8EAF0;
        }

        .gov-portal-card__brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--gov-ink);
          font-size: 14px;
          font-weight: 600;
        }

        .gov-portal-card__seal {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border-radius: 50%;
          background: var(--gov-blush);
          color: var(--gov-magenta);
        }

        .gov-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #16704B;
          font-size: 14px;
          font-weight: 600;
        }

        .gov-status::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22A06B;
        }

        .gov-portal-card__body {
          padding: 24px;
        }

        .gov-portal-kicker {
          margin: 0 0 7px;
          color: #7C8798;
          font-size: 14px;
          line-height: 1.4;
        }

        .gov-portal-title {
          margin: 0;
          color: var(--gov-ink);
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .gov-language-route {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
          margin: 22px 0;
          padding: 16px;
          border: 1px solid #E6E9EF;
          border-radius: 18px;
          background: #FAFBFC;
        }

        .gov-language-route__item span {
          display: block;
          color: #7C8798;
          font-size: 14px;
        }

        .gov-language-route__item strong {
          display: block;
          margin-top: 2px;
          color: var(--gov-ink);
          font-size: 16px;
          font-weight: 600;
        }

        .gov-language-route__arrow {
          color: var(--gov-magenta);
        }

        .gov-progress {
          display: grid;
          gap: 12px;
        }

        .gov-progress__row {
          display: grid;
          grid-template-columns: 32px minmax(0,1fr) auto;
          gap: 12px;
          align-items: center;
        }

        .gov-progress__icon {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border-radius: 10px;
          background: #F1F3F7;
          color: #667085;
        }

        .gov-progress__copy strong {
          display: block;
          color: var(--gov-ink);
          font-size: 16px;
          font-weight: 600;
        }

        .gov-progress__copy span,
        .gov-progress__state {
          color: #7C8798;
          font-size: 14px;
        }

        .gov-progress__state.is-complete {
          color: #16704B;
          font-weight: 600;
        }

        .gov-hero-chip {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 242px;
          padding: 14px 16px;
          border: 1px solid #E4E7ED;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 18px 42px rgba(15,23,42,.1);
          color: var(--gov-ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .gov-hero-chip svg {
          flex: 0 0 auto;
          color: var(--gov-magenta);
        }

        .gov-hero-chip--one {
          left: 0;
          bottom: 0;
        }

        .gov-hero-chip--two {
          right: 0;
          bottom: 0;
        }

        .gov-trust-strip {
          background: #fff;
          border-top: 1px solid var(--gov-line);
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-trust-strip__inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid transparent;
        }

        .gov-trust-item {
          position: relative;
          padding: 25px 24px;
          text-align: center;
        }

        .gov-trust-item + .gov-trust-item::before {
          display: none;
        }

        .gov-trust-item strong {
          display: block;
          color: var(--gov-ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
        }

        .gov-trust-item span {
          display: block;
          margin-top: 3px;
          color: #697386;
          font-size: 14px;
          line-height: 1.4;
        }

        .gov-stat-layout {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 80px;
          align-items: start;
        }

        .gov-stat-card {
          position: sticky;
          top: 28px;
          padding: 36px;
          border-radius: 28px;
          background: var(--gov-dark);
          color: #fff;
          overflow: hidden;
        }

        .gov-stat-card::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -80px;
          bottom: -80px;
          border-radius: 50%;
          border: 1px solid rgba(242,167,198,.28);
        }

        .gov-stat-card__number {
          display: block;
          color: #fff;
          font-size: 64px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -.04em;
        }

        .gov-stat-card__label {
          max-width: 330px;
          margin: 20px 0 0;
          color: #E8EBF1;
          font-size: 18px;
          line-height: 1.55;
        }

        .gov-stat-card__source {
          margin: 28px 0 0;
          color: #ABB3C2;
          font-size: 14px;
        }

        .gov-stat-copy h2 {
          max-width: 660px;
        }

        .gov-stat-copy p {
          max-width: 760px;
          margin: 22px 0 0;
          color: var(--gov-body);
          font-size: 18px;
        }

        .gov-purpose-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 0 28px;
          margin-top: 34px;
          border-top: 1px solid var(--gov-line);
        }

        .gov-purpose-list div {
          padding: 20px 0;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-purpose-list strong {
          display: block;
          color: var(--gov-ink);
          font-size: 17px;
          font-weight: 600;
        }

        .gov-purpose-list span {
          display: block;
          margin-top: 5px;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-audience-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          border-top: 1px solid var(--gov-line);
          border-left: 1px solid var(--gov-line);
        }

        .gov-audience-item {
          min-height: 290px;
          padding: 30px;
          border-right: 1px solid var(--gov-line);
          border-bottom: 1px solid var(--gov-line);
          background: #fff;
        }

        .gov-icon-box {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 15px;
          background: #F3F4F7;
          color: var(--gov-magenta);
        }

        .gov-audience-item h3,
        .gov-quality-item h3,
        .gov-program-item h3,
        .gov-global-item h3,
        .gov-content-group h3,
        .gov-service-row h3,
        .gov-use-case h3,
        .gov-security-item h3,
        .gov-why-item h3,
        .gov-ai-tier h3 {
          margin: 20px 0 0;
          color: var(--gov-ink);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -.015em;
        }

        .gov-audience-item p,
        .gov-quality-item p,
        .gov-program-item p,
        .gov-global-item p,
        .gov-service-row p,
        .gov-use-case p,
        .gov-security-item p,
        .gov-why-item p,
        .gov-ai-tier p,
        .gov-content-group li {
          color: var(--gov-body);
          font-size: 16px;
          line-height: 1.68;
        }

        .gov-audience-item p,
        .gov-quality-item p,
        .gov-program-item p,
        .gov-global-item p,
        .gov-use-case p,
        .gov-security-item p,
        .gov-why-item p,
        .gov-ai-tier p {
          margin: 12px 0 0;
        }

        .gov-use-cases {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 0 48px;
          border-top: 1px solid var(--gov-line);
        }

        .gov-use-case {
          padding: 32px 0;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-use-case h3 {
          margin-top: 0;
        }

        .gov-use-case__examples {
          margin: 16px 0 0 !important;
          color: #697386 !important;
          font-size: 16px !important;
          line-height: 1.55 !important;
        }

        .gov-use-case__examples strong {
          color: var(--gov-ink);
          font-weight: 600;
        }

        .gov-content-layout {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          overflow: hidden;
          border: 1px solid var(--gov-line);
          border-radius: 28px;
          background: #fff;
        }

        .gov-content-group {
          padding: 30px;
        }

        .gov-content-group:nth-child(3n+2),
        .gov-content-group:nth-child(3n+3) {
          border-left: 1px solid var(--gov-line);
        }

        .gov-content-group:nth-child(n+4) {
          border-top: 1px solid var(--gov-line);
        }

        .gov-content-group h3 {
          margin-top: 0;
          font-size: 22px;
        }

        .gov-content-group ul {
          display: grid;
          gap: 10px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .gov-content-group li {
          position: relative;
          padding-left: 17px;
        }

        .gov-content-group li::before {
          content: "";
          position: absolute;
          top: .72em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gov-magenta);
          transform: translateY(-50%);
        }

        .gov-services {
          border-top: 1px solid var(--gov-line);
        }

        .gov-service-row {
          display: grid;
          grid-template-columns: 72px minmax(220px,.72fr) minmax(0,1.28fr) 220px;
          gap: 28px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-service-row .gov-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 18px;
        }

        .gov-service-row h3 {
          margin: 0;
          font-size: 22px;
        }

        .gov-service-row p {
          margin: 0;
        }

        .gov-arrow-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          color: var(--gov-magenta) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
        }

        .gov-arrow-link svg {
          transition: transform .2s ease;
        }

        .gov-arrow-link:hover svg {
          transform: translateX(3px);
        }

        .gov-split {
          display: grid;
          grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr);
          gap: 80px;
          align-items: center;
        }

        .gov-split-copy h2 {
          max-width: 620px;
        }

        .gov-split-copy > p:not(.gov-eyebrow) {
          max-width: 700px;
          margin: 22px 0 0;
          color: var(--gov-body);
          font-size: 18px;
        }

        .gov-accessibility-visual {
          position: relative;
          padding: 28px;
          border: 1px solid #E1E4EA;
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 26px 64px rgba(15,23,42,.1);
        }

        .gov-accessibility-visual__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-accessibility-visual__title {
          color: var(--gov-ink);
          font-size: 18px;
          font-weight: 600;
        }

        .gov-accessibility-visual__status {
          padding: 6px 10px;
          border-radius: 999px;
          background: #ECF8F2;
          color: #16704B;
          font-size: 14px;
          font-weight: 600;
        }

        .gov-accessibility-list {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          margin-top: 20px;
          border-top: 1px solid var(--gov-line);
          border-left: 1px solid var(--gov-line);
        }

        .gov-accessibility-item {
          display: grid;
          min-height: 88px;
          grid-template-columns: 34px minmax(0,1fr);
          gap: 12px;
          align-items: center;
          padding: 16px;
          border-right: 1px solid var(--gov-line);
          border-bottom: 1px solid var(--gov-line);
          background: #FAFBFC;
        }

        .gov-accessibility-item__icon {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border-radius: 10px;
          background: var(--gov-blush);
          color: var(--gov-magenta);
        }

        .gov-accessibility-item strong {
          color: var(--gov-ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .gov-note {
          margin-top: 28px;
          padding: 20px 22px;
          border-left: 3px solid var(--gov-magenta);
          background: #fff;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-ai-layout {
          display: grid;
          grid-template-columns: 360px minmax(0,1fr);
          gap: 70px;
          align-items: start;
        }

        .gov-ai-intro {
          position: sticky;
          top: 28px;
        }

        .gov-ai-intro h2 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -.025em;
        }

        .gov-ai-intro p:not(.gov-eyebrow) {
          margin: 20px 0 0;
          color: var(--gov-body);
          font-size: 18px;
        }

        .gov-ai-tiers {
          border-top: 1px solid var(--gov-line);
        }

        .gov-ai-tier {
          display: grid;
          grid-template-columns: 170px minmax(220px,.68fr) minmax(0,1.32fr);
          gap: 28px;
          align-items: start;
          padding: 30px 0;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-ai-tier__label {
          color: var(--gov-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .gov-ai-tier h3 {
          margin: 0;
          font-size: 22px;
        }

        .gov-ai-tier p {
          margin: 0;
        }

        .gov-risk-band {
          margin-top: 40px;
          padding: 28px;
          border-radius: 24px;
          background: var(--gov-blush);
        }

        .gov-risk-band h3 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 22px;
          font-weight: 600;
        }

        .gov-risk-band p {
          margin: 10px 0 0;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-risk-factors {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .gov-risk-factors span {
          padding: 8px 11px;
          border: 1px solid #F0D5E1;
          border-radius: 999px;
          background: #fff;
          color: #596274;
          font-size: 16px;
          line-height: 1.35;
        }

        .gov-quality-grid,
        .gov-program-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 26px;
        }

        .gov-quality-item,
        .gov-program-item {
          padding: 28px;
          border: 1px solid var(--gov-line);
          border-radius: 22px;
          background: #fff;
        }

        .gov-quality-item h3,
        .gov-program-item h3 {
          font-size: 22px;
        }

        .gov-security-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr);
          gap: 78px;
          align-items: start;
        }

        .gov-security-summary {
          position: sticky;
          top: 28px;
        }

        .gov-security-summary h2 {
          max-width: 560px;
          margin: 0;
          color: #fff;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -.025em;
        }

        .gov-security-summary p:not(.gov-eyebrow) {
          max-width: 590px;
          margin: 22px 0 0;
          color: #C9CFDA;
          font-size: 18px;
        }

        .gov-security-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 20px;
          background: rgba(255,255,255,.05);
        }

        .gov-security-badge__icon {
          display: grid;
          width: 46px;
          height: 46px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 14px;
          background: rgba(242,167,198,.12);
          color: var(--gov-eyebrow-dark);
        }

        .gov-security-badge strong {
          display: block;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }

        .gov-security-badge > span:last-child {
          display: block;
          min-width: 0;
        }

        .gov-security-badge > span:last-child > span {
          display: block;
          margin-top: 3px;
          color: #C9CFDA;
          font-size: 16px;
          line-height: 1.5;
        }

        .gov-security-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          border-top: 1px solid rgba(255,255,255,.14);
          border-left: 1px solid rgba(255,255,255,.14);
        }

        .gov-security-item {
          min-height: 242px;
          padding: 26px;
          border-right: 1px solid rgba(255,255,255,.14);
          border-bottom: 1px solid rgba(255,255,255,.14);
        }

        .gov-security-item h3 {
          margin-top: 0;
          color: #fff;
          font-size: 21px;
        }

        .gov-security-item p {
          color: #C9CFDA;
        }

        .gov-dark-note {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 48px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,.14);
          color: #ABB3C2;
          font-size: 16px;
        }

        .gov-program-grid {
          grid-template-columns: repeat(2,minmax(0,1fr));
        }

        .gov-program-item {
          display: grid;
          grid-template-columns: 54px minmax(0,1fr);
          gap: 18px;
          align-items: start;
        }

        .gov-program-item .gov-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 14px;
        }

        .gov-program-item h3 {
          margin-top: 0;
        }

        .gov-integration-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 36px;
          padding: 24px 28px;
          border-radius: 22px;
          background: var(--gov-dark);
          color: #fff;
        }

        .gov-integration-band strong {
          display: block;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
        }

        .gov-integration-band span {
          display: block;
          margin-top: 4px;
          color: #C9CFDA;
          font-size: 16px;
        }

        .gov-integration-band .gov-arrow-link {
          flex: 0 0 auto;
          color: var(--gov-eyebrow-dark) !important;
        }

        .gov-readiness-panel {
          padding: 38px;
          border: 1px solid #F0D8E2;
          border-radius: 28px;
          background: var(--gov-blush);
        }

        .gov-readiness-panel h3 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 24px;
          font-weight: 600;
        }

        .gov-readiness-panel > p {
          margin: 14px 0 0;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-checklist {
          display: grid;
          gap: 13px;
          margin: 26px 0 0;
          padding: 0;
          list-style: none;
        }

        .gov-checklist--2 {
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 14px 28px;
        }

        .gov-checklist li {
          display: grid;
          grid-template-columns: 22px minmax(0,1fr);
          gap: 10px;
          align-items: start;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-checklist__icon {
          display: grid;
          place-items: center;
          margin-top: .18em;
          color: var(--gov-magenta);
        }

        .gov-checklist.is-light li {
          color: #D9DEE7;
        }

        .gov-checklist.is-light .gov-checklist__icon {
          color: var(--gov-eyebrow-dark);
        }

        .gov-language-layout {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr);
          gap: 80px;
          align-items: start;
        }

        .gov-language-copy h2 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -.025em;
        }

        .gov-language-copy p:not(.gov-eyebrow) {
          margin: 22px 0 0;
          color: var(--gov-body);
          font-size: 18px;
        }

        .gov-language-card {
          padding: 32px;
          border: 1px solid var(--gov-line);
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 20px 50px rgba(15,23,42,.07);
        }

        .gov-language-card h3 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 24px;
          font-weight: 600;
        }

        .gov-language-card > p {
          margin: 12px 0 0;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-global-grid {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          border-top: 1px solid rgba(255,255,255,.14);
          border-left: 1px solid rgba(255,255,255,.14);
        }

        .gov-global-item {
          min-height: 285px;
          padding: 28px;
          border-right: 1px solid rgba(255,255,255,.14);
          border-bottom: 1px solid rgba(255,255,255,.14);
        }

        .gov-global-item h3 {
          margin-top: 0;
          color: #fff;
          font-size: 22px;
        }

        .gov-global-item p {
          color: #C9CFDA;
        }

        .gov-process {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 0;
          counter-reset: process;
          border-top: 1px solid var(--gov-line);
          border-left: 1px solid var(--gov-line);
        }

        .gov-process-step {
          position: relative;
          min-height: 280px;
          padding: 30px;
          border-right: 1px solid var(--gov-line);
          border-bottom: 1px solid var(--gov-line);
          background: #fff;
          counter-increment: process;
        }

        .gov-process-step::before {
          content: counter(process, decimal-leading-zero);
          display: block;
          color: var(--gov-magenta);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .08em;
        }

        .gov-process-step h3 {
          margin: 20px 0 0;
          color: var(--gov-ink);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
        }

        .gov-process-step p {
          margin: 12px 0 0;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-why-grid {
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 0 48px;
          border-top: 1px solid var(--gov-line);
        }

        .gov-why-item {
          display: grid;
          grid-template-columns: 18px minmax(0,1fr);
          gap: 15px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--gov-line);
        }

        .gov-why-item__marker {
          width: 8px;
          height: 8px;
          margin-top: .72em;
          border-radius: 50%;
          background: var(--gov-magenta);
          transform: translateY(-50%);
        }

        .gov-why-item h3 {
          margin: 0;
          font-size: 21px;
        }

        .gov-why-item p {
          margin-top: 8px;
        }

        .gov-procurement-band {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: 30px;
          align-items: center;
          margin-top: 42px;
          padding: 30px 34px;
          border-radius: 24px;
          background: var(--gov-blush);
        }

        .gov-procurement-band h3 {
          margin: 0;
          color: var(--gov-ink);
          font-size: 22px;
          font-weight: 600;
        }

        .gov-procurement-band p {
          max-width: 850px;
          margin: 8px 0 0;
          color: var(--gov-body);
          font-size: 16px;
        }

        .gov-faq-shell {
          overflow: hidden;
          border: 1px solid var(--gov-line);
          border-radius: 28px;
          background: #fff;
        }

        .gov-faq-item + .gov-faq-item {
          border-top: 1px solid var(--gov-line);
        }

        .gov-faq-item h3 {
          margin: 0;
        }

        .gov-faq-item button {
          display: grid;
          width: 100%;
          min-height: 76px;
          grid-template-columns: minmax(0,1fr) 36px;
          gap: 24px;
          align-items: center;
          padding: 23px 28px;
          border: 0;
          background: transparent;
          color: var(--gov-ink);
          cursor: pointer;
          text-align: left;
          font: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
        }

        .gov-faq-item button:hover {
          background: #FAFBFC;
        }

        .gov-faq-toggle {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 50%;
          background: #F2F4F7;
          color: var(--gov-magenta);
          font-size: 22px;
          font-weight: 400;
        }

        .gov-faq-item.is-open .gov-faq-toggle {
          background: var(--gov-blush);
        }

        .gov-faq-panel {
          padding: 0 80px 26px 28px;
        }

        .gov-faq-panel p {
          max-width: 840px;
          margin: 0;
          color: var(--gov-body);
          font-size: 16px;
          line-height: 1.75;
        }

        .gov-final-wrap {
          padding: 0 var(--gov-pad) 96px;
          background: #fff;
        }

        .gov-final-cta {
          position: relative;
          width: min(100%, var(--gov-shell));
          margin: 0 auto;
          overflow: hidden;
          padding: 74px 80px;
          border-radius: 30px;
          background:
            radial-gradient(circle at 90% 30%, rgba(193,29,99,.16), transparent 30%),
            #F8F8FB;
          border: 1px solid var(--gov-line);
        }

        .gov-final-cta::after {
          content: "";
          position: absolute;
          top: -80px;
          right: -60px;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          border: 1px solid rgba(193,29,99,.18);
          pointer-events: none;
        }

        .gov-final-cta__content {
          position: relative;
          z-index: 1;
          max-width: 780px;
        }

        .gov-final-cta h2 {
          max-width: 720px;
        }

        .gov-final-cta p:not(.gov-eyebrow) {
          max-width: 760px;
          margin: 20px 0 0;
          color: var(--gov-body);
          font-size: 18px;
        }

        @media (max-width: 1180px) {
          :root { --gov-pad: 40px; }
          .gov-hero__grid { grid-template-columns: minmax(0,1fr) minmax(430px,.92fr); gap: 48px; }
          .gov-service-row { grid-template-columns: 64px minmax(190px,.65fr) minmax(0,1.35fr) 190px; gap: 22px; }
          .gov-global-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .gov-global-item { min-height: 235px; }
        }

        @media (max-width: 980px) {
          :root { --gov-pad: 24px; }
          .gov-section { padding: 80px 0; }
          .gov-section--dense { padding: 72px 0; }
          .gov-hero { min-height: auto; padding: 88px 0 82px; }
          .gov-hero__grid { grid-template-columns: 1fr; gap: 54px; }
          .gov-hero h1 { max-width: 820px; font-size: 42px; }
          .gov-hero__copy { max-width: 780px; }
          .gov-hero__visual { width: min(100%, 650px); margin: 0 auto; }
          .gov-portal-card { max-width: 100%; }
          .gov-section-heading { max-width: 760px; }
          .gov-integration-band,
          .gov-procurement-band { max-width: 100%; }
          .gov-trust-strip__inner { grid-template-columns: repeat(2,1fr); }
          .gov-trust-item:nth-child(3) { border-top: 1px solid var(--gov-line); }
          .gov-trust-item:nth-child(4) { border-top: 1px solid var(--gov-line); }
          .gov-trust-item:nth-child(3)::before { display: none; }
          .gov-stat-layout,
          .gov-split,
          .gov-ai-layout,
          .gov-security-layout,
          .gov-language-layout { grid-template-columns: 1fr; gap: 48px; }
          .gov-stat-card,
          .gov-ai-intro,
          .gov-security-summary { position: static; }
          .gov-audience-grid,
          .gov-quality-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .gov-content-layout { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .gov-content-group:nth-child(3n+2),
          .gov-content-group:nth-child(3n+3) { border-left: 0; }
          .gov-content-group:nth-child(2n+2) { border-left: 1px solid var(--gov-line); }
          .gov-content-group:nth-child(n+3) { border-top: 1px solid var(--gov-line); }
          .gov-service-row { grid-template-columns: 58px minmax(0,1fr); gap: 18px 22px; }
          .gov-service-row p,
          .gov-service-row .gov-arrow-link { grid-column: 2; }
          .gov-service-row .gov-arrow-link { justify-content: flex-start; width: fit-content; }
          .gov-ai-tier { grid-template-columns: 150px minmax(0,1fr); }
          .gov-ai-tier p { grid-column: 2; }
          .gov-program-grid { grid-template-columns: 1fr; }
          .gov-process { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .gov-final-cta { padding: 64px 56px; }
        }

        @media (max-width: 720px) {
          :root { --gov-pad: 20px; }
          .gov-section { padding: 68px 0; }
          .gov-section--dense { padding: 64px 0; }
          .gov-section-heading { margin-bottom: 36px; }
          .gov-section-heading h2,
          .gov-split-copy h2,
          .gov-stat-copy h2,
          .gov-ai-intro h2,
          .gov-security-summary h2,
          .gov-language-copy h2,
          .gov-final-cta h2 { font-size: 30px; }
          .gov-section-intro,
          .gov-lead,
          .gov-hero__copy,
          .gov-stat-copy p,
          .gov-split-copy > p:not(.gov-eyebrow),
          .gov-ai-intro p:not(.gov-eyebrow),
          .gov-security-summary p:not(.gov-eyebrow),
          .gov-language-copy p:not(.gov-eyebrow),
          .gov-final-cta p:not(.gov-eyebrow) { font-size: 17px; }
          .gov-hero { padding: 72px 0 68px; }
          .gov-hero h1 { font-size: 38px; }
          .gov-actions { display: grid; grid-template-columns: 1fr; }
          .gov-btn { width: 100%; min-height: 54px; }
          .gov-hero__visual { min-height: 0; display: grid; gap: 12px; }
          .gov-hero__visual::before,
          .gov-hero__visual::after { display: none; }
          .gov-portal-card { position: relative; top: auto; right: auto; width: 100%; border-radius: 24px; }
          .gov-portal-card__body { padding: 20px; }
          .gov-portal-card__top { gap: 12px; }
          .gov-portal-card__brand { min-width: 0; }
          .gov-status { flex: 0 0 auto; }
          .gov-hero-chip { position: relative; inset: auto; max-width: none; width: 100%; }
          .gov-hero-chip--one,
          .gov-hero-chip--two { left: auto; right: auto; bottom: auto; }
          .gov-trust-strip__inner { grid-template-columns: 1fr; }
          .gov-trust-item { padding: 20px; }
          .gov-trust-item + .gov-trust-item { border-top: 1px solid var(--gov-line); }
          .gov-trust-item + .gov-trust-item::before { display: none; }
          .gov-stat-card { padding: 30px; }
          .gov-stat-card__number { font-size: 54px; }
          .gov-purpose-list { grid-template-columns: 1fr; }
          .gov-audience-grid,
          .gov-use-cases,
          .gov-content-layout,
          .gov-quality-grid,
          .gov-security-grid,
          .gov-global-grid,
          .gov-process,
          .gov-why-grid { grid-template-columns: 1fr; }
          .gov-audience-grid,
          .gov-content-layout,
          .gov-security-grid,
          .gov-global-grid,
          .gov-process { border-left: 0; }
          .gov-audience-item,
          .gov-content-group,
          .gov-security-item,
          .gov-global-item,
          .gov-process-step { border-left: 1px solid var(--gov-line); }
          .gov-security-item,
          .gov-global-item { border-left-color: rgba(255,255,255,.14); }
          .gov-audience-item { min-height: auto; padding: 26px; }
          .gov-audience-item h3,
          .gov-quality-item h3,
          .gov-program-item h3,
          .gov-global-item h3,
          .gov-content-group h3,
          .gov-service-row h3,
          .gov-use-case h3,
          .gov-security-item h3,
          .gov-why-item h3,
          .gov-ai-tier h3 { font-size: 20px; }
          .gov-use-cases { gap: 0; }
          .gov-content-group:nth-child(2n+2) { border-left: 1px solid var(--gov-line); }
          .gov-content-group:nth-child(n+2) { border-top: 1px solid var(--gov-line); }
          .gov-service-row { grid-template-columns: 50px minmax(0,1fr); padding: 26px 0; }
          .gov-service-row .gov-icon-box { width: 48px; height: 48px; border-radius: 15px; }
          .gov-service-row p,
          .gov-service-row .gov-arrow-link { grid-column: 1 / -1; }
          .gov-accessibility-visual { padding: 20px; border-radius: 24px; }
          .gov-accessibility-visual__top { align-items: flex-start; flex-direction: column; gap: 10px; }
          .gov-accessibility-visual__status { align-self: flex-start; }
          .gov-accessibility-list { grid-template-columns: 1fr; border-left: 0; }
          .gov-accessibility-item { border-left: 1px solid var(--gov-line); }
          .gov-ai-tier { grid-template-columns: 1fr; gap: 10px; }
          .gov-ai-tier p { grid-column: 1; }
          .gov-risk-band { padding: 24px; }
          .gov-quality-item { padding: 24px; }
          .gov-security-item { min-height: auto; padding: 24px; }
          .gov-program-item { grid-template-columns: 46px minmax(0,1fr); padding: 24px; }
          .gov-integration-band { align-items: flex-start; flex-direction: column; padding: 24px; }
          .gov-integration-band .gov-arrow-link,
          .gov-procurement-band .gov-arrow-link { justify-content: flex-start; width: 100%; }
          .gov-readiness-panel { padding: 28px 24px; }
          .gov-checklist--2 { grid-template-columns: 1fr; }
          .gov-language-card { padding: 26px 22px; }
          .gov-global-item { min-height: auto; }
          .gov-process-step { min-height: auto; padding: 26px; }
          .gov-why-grid { gap: 0; }
          .gov-procurement-band { grid-template-columns: 1fr; padding: 26px 24px; }
          .gov-procurement-band .gov-btn { width: 100%; }
          .gov-faq-item button { min-height: 70px; padding: 20px; font-size: 17px; }
          .gov-faq-panel { padding: 0 20px 24px; }
          .gov-final-wrap { padding: 0 var(--gov-pad) 68px; }
          .gov-final-cta { padding: 52px 24px; border-radius: 26px; }
          .gov-final-cta__content { max-width: none; }
        }

        @media (max-width: 390px) {
          .gov-hero h1 { font-size: 38px; letter-spacing: -.03em; }
          .gov-portal-card__top {
            grid-template-columns: minmax(0,1fr);
            align-items: start;
            padding: 15px;
          }
          .gov-status { margin-left: 42px; }
          .gov-portal-card__body { padding: 17px; }
          .gov-language-route { grid-template-columns: 1fr; gap: 8px; }
          .gov-language-route__arrow { transform: rotate(90deg); justify-self: start; }
          .gov-progress__row { grid-template-columns: 30px minmax(0,1fr); }
          .gov-progress__state { grid-column: 2; }
          .gov-hero-chip { max-width: none; padding: 12px 14px; }
          .gov-stat-card { padding: 26px 22px; }
          .gov-stat-card__number { font-size: 50px; }
          .gov-content-group,
          .gov-audience-item,
          .gov-quality-item,
          .gov-program-item { padding: 22px; }
          .gov-faq-item button { grid-template-columns: minmax(0,1fr) 32px; gap: 15px; padding: 18px; }
          .gov-faq-toggle { width: 32px; height: 32px; }
        }

        @media (max-width: 340px) {
          .gov-hero { padding-top: 66px; }
          .gov-portal-card__brand { font-size: 13px; }
          .gov-portal-card__seal { width: 30px; height: 30px; }
          .gov-status { margin-left: 40px; font-size: 13px; }
          .gov-language-route { padding: 14px; }
          .gov-progress__row { gap: 10px; }
          .gov-progress__copy strong { font-size: 15px; }
          .gov-final-cta { padding-left: 20px; padding-right: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gov-page *, .gov-page *::before, .gov-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="gov-hero">
        <div className="gov-container gov-hero__grid">
          <div>
            <p className="gov-eyebrow">Public-Sector Language Services</p>
            <h1>Government Translation Services for Clear, Secure Public Communication</h1>
            <p className="gov-hero__copy">
              Help people understand public information, access essential services, and engage with government through professional translation, localization, and interpreting support for federal, state, local, tribal, and international public-sector organizations.
            </p>
            <div className="gov-actions">
              <a className="gov-btn gov-btn--primary" href="https://app.stepes.com/quote/">
                <span>Get a Translation Quote</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="gov-btn gov-btn--secondary" href="https://www.stepes.com/contact-us/">
                Talk to a Government Translation Expert
              </a>
            </div>
          </div>

          <div className="gov-hero__visual" role="img" aria-label="Illustration of a controlled multilingual government content workflow">
            <div className="gov-portal-card">
              <div className="gov-portal-card__top">
                <div className="gov-portal-card__brand">
                  <span className="gov-portal-card__seal"><Icon name="building" size={18} /></span>
                  Public Information Workflow
                </div>
                <span className="gov-status">On track</span>
              </div>
              <div className="gov-portal-card__body">
                <p className="gov-portal-kicker">Emergency preparedness update</p>
                <p className="gov-portal-title">Multilingual public notice release</p>
                <div className="gov-language-route">
                  <div className="gov-language-route__item">
                    <span>Source</span>
                    <strong>English</strong>
                  </div>
                  <span className="gov-language-route__arrow"><Icon name="arrow" size={19} /></span>
                  <div className="gov-language-route__item">
                    <span>Target</span>
                    <strong>6 languages</strong>
                  </div>
                </div>
                <div className="gov-progress">
                  <div className="gov-progress__row">
                    <span className="gov-progress__icon"><Icon name="languages" size={17} /></span>
                    <span className="gov-progress__copy"><strong>Professional translation</strong><span>Subject-matter linguists</span></span>
                    <span className="gov-progress__state is-complete">Complete</span>
                  </div>
                  <div className="gov-progress__row">
                    <span className="gov-progress__icon"><Icon name="review" size={17} /></span>
                    <span className="gov-progress__copy"><strong>Agency review</strong><span>Program and legal reviewers</span></span>
                    <span className="gov-progress__state">In review</span>
                  </div>
                  <div className="gov-progress__row">
                    <span className="gov-progress__icon"><Icon name="browser" size={17} /></span>
                    <span className="gov-progress__copy"><strong>Accessible publishing</strong><span>Web, PDF, and captions</span></span>
                    <span className="gov-progress__state">Next</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gov-hero-chip gov-hero-chip--one"><Icon name="shield" size={21} />Controlled access and review</div>
            <div className="gov-hero-chip gov-hero-chip--two"><Icon name="languages" size={21} />100+ languages</div>
          </div>
        </div>
      </section>

      <div className="gov-trust-strip">
        <div className="gov-container gov-trust-strip__inner">
          <div className="gov-trust-item"><strong>100+ Languages</strong><span>Global and regional coverage</span></div>
          <div className="gov-trust-item"><strong>AI + Human Expertise</strong><span>Risk-based translation workflows</span></div>
          <div className="gov-trust-item"><strong>ISO-Certified Processes</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span></div>
          <div className="gov-trust-item"><strong>Enterprise Workflows</strong><span>Permissions, approvals, and visibility</span></div>
        </div>
      </div>

      <section className="gov-section">
        <div className="gov-container gov-stat-layout">
          <aside className="gov-stat-card">
            <p className="gov-eyebrow gov-eyebrow--dark">The Communication Need</p>
            <span className="gov-stat-card__number">1 in 5</span>
            <p className="gov-stat-card__label">More than one in five U.S. residents age five and older speaks a language other than English at home.</p>
            <p className="gov-stat-card__source">U.S. Census Bureau language-use data</p>
          </aside>
          <div className="gov-stat-copy">
            <h2>Make Public Information Easier to Understand and Use</h2>
            <p>
              Government communication has to do more than convey words accurately. It must help people understand what is happening, what is required, which services are available, and what action to take next.
            </p>
            <p>
              Stepes connects official documents, digital services, multimedia, training, and live communication within coordinated multilingual workflows. Your teams gain consistent terminology, appropriate human review, controlled approvals, and visibility from intake through publication.
            </p>
            <div className="gov-purpose-list">
              <div><strong>Public understanding</strong><span>Explain services and decisions clearly.</span></div>
              <div><strong>Program participation</strong><span>Help people complete the next step.</span></div>
              <div><strong>Emergency preparedness</strong><span>Publish urgent information across channels.</span></div>
              <div><strong>Community trust</strong><span>Use accurate, respectful, audience-aware language.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--soft">
        <div className="gov-container">
          <SectionHeading
            eyebrow="Public-Sector Coverage"
            title="Language Services at Every Level of Government"
            intro="Stepes supports one-time government translation projects and ongoing multilingual communication programs across diverse public-sector environments."
          />
          <div className="gov-audience-grid">
            {audiences.map((item) => (
              <article className="gov-audience-item" key={item.title}>
                <span className="gov-icon-box"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <SectionHeading
            title="Government Communication Use Cases"
            intro="Public-sector language needs extend across programs, departments, and communication channels. Stepes applies the appropriate linguistic expertise, technology, and review model to each use case."
          />
          <div className="gov-use-cases">
            {useCases.map((item) => (
              <article className="gov-use-case" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="gov-use-case__examples"><strong>Examples:</strong> {item.tags.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--blush">
        <div className="gov-container">
          <SectionHeading
            title="Government Documents and Content We Translate"
            intro="Support the full range of content required for public communication, program delivery, digital government, and agency operations."
            align="center"
          />
          <div className="gov-content-layout">
            {contentGroups.map((group) => (
              <section className="gov-content-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <SectionHeading
            title="One Language Partner for Documents, Digital Services, and Live Communication"
            intro="Bring translation, localization, multilingual production, and interpreting into a connected service model instead of coordinating a different vendor for every content type."
          />
          <div className="gov-services">
            {services.map((service) => (
              <article className="gov-service-row" key={service.title}>
                <span className="gov-icon-box"><Icon name={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowLink href={service.href}>{service.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--soft">
        <div className="gov-container gov-split">
          <div className="gov-split-copy">
            <p className="gov-eyebrow">Digital Government</p>
            <h2>Accessible Multilingual Content Across the Complete User Journey</h2>
            <p>
              Translating visible page text is only part of making digital government content usable. Navigation, form instructions, validation messages, alternative text, captions, transcripts, metadata, and assistive-technology labels also shape the localized experience.
            </p>
            <p>
              Stepes supports the translation and multilingual production of accessible content while coordinating with your accessibility, design, development, and publishing teams. Translation alone does not establish Section 508 conformance; accessible source design, technical implementation, remediation, and testing remain essential.
            </p>
            <div className="gov-note">
              Multilingual accessibility works best when translation is planned alongside content design, document structure, development, and final validation—not added after publication.
            </div>
          </div>
          <div className="gov-accessibility-visual">
            <div className="gov-accessibility-visual__top">
              <span className="gov-accessibility-visual__title">Multilingual Accessibility Review</span>
              <span className="gov-accessibility-visual__status">8 content elements</span>
            </div>
            <div className="gov-accessibility-list">
              {accessibleItems.map((item) => (
                <div className="gov-accessibility-item" key={item}>
                  <span className="gov-accessibility-item__icon"><Icon name="check" size={18} /></span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container gov-ai-layout">
          <div className="gov-ai-intro">
            <p className="gov-eyebrow">AI + Human Oversight</p>
            <h2>Match the Translation Workflow to the Content Risk</h2>
            <p>
              A high-volume administrative report does not carry the same risk as an emergency warning, legal notice, health instruction, benefits determination, or public-safety communication. Stepes helps agencies apply automation where it adds value and professional judgment where it is essential.
            </p>
          </div>
          <div>
            <div className="gov-ai-tiers">
              {aiTiers.map((tier) => (
                <article className="gov-ai-tier" key={tier.title}>
                  <span className="gov-ai-tier__label">{tier.label}</span>
                  <h3>{tier.title}</h3>
                  <p>{tier.text}</p>
                </article>
              ))}
            </div>
            <div className="gov-risk-band">
              <h3>Risk-Based Workflow Design</h3>
              <p>Define translation tiers around the factors that matter to your agency and audience.</p>
              <div className="gov-risk-factors">
                {["Public visibility", "Legal significance", "Health and safety", "Audience vulnerability", "Update frequency", "Security sensitivity", "Turnaround", "Required approvals"].map((factor) => <span key={factor}>{factor}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--soft">
        <div className="gov-container">
          <SectionHeading
            eyebrow="Quality Framework"
            title="Quality That Protects Meaning"
            intro="Government translation must remain faithful to the source while being clear, appropriate, consistent, and usable for the intended audience."
            align="center"
          />
          <div className="gov-quality-grid">
            {qualityItems.map((item) => (
              <article className="gov-quality-item" key={item.title}>
                <span className="gov-icon-box"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="gov-procurement-band">
            <div>
              <h3>Regional and Community Review</h3>
              <p>Account for regional language requirements such as Brazilian and European Portuguese, Latin American and European Spanish, Simplified and Traditional Chinese, and Canadian and European French. Agency reviewers or community stakeholders can validate terminology, program names, tone, and local comprehension before publication.</p>
            </div>
            <ArrowLink href="https://www.stepes.com/translation-languages/">Explore Translation Languages</ArrowLink>
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--dark">
        <div className="gov-container">
          <div className="gov-security-layout">
            <div className="gov-security-summary">
              <p className="gov-eyebrow gov-eyebrow--dark">Sensitive Content Governance</p>
              <h2>Controlled Workflows for Sensitive Government Content</h2>
              <p>
                Government translation may involve nonpublic records, personal information, program data, legal materials, procurement documents, unpublished policies, or other sensitive content. Stepes supports controlled project handling through access, workflow, confidentiality, and operational safeguards.
              </p>
              <div className="gov-security-badge">
                <span className="gov-security-badge__icon"><Icon name="lock" size={22} /></span>
                <span><strong>Enterprise workflow controls</strong><span>Permissions, project visibility, and review accountability</span></span>
              </div>
            </div>
            <div className="gov-security-grid">
              {securityItems.map((item) => (
                <article className="gov-security-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="gov-dark-note">
            Requirements involving classified information, specific government authorization programs, data residency, background screening, citizenship restrictions, secure facilities, export controls, or cleared personnel must be evaluated and agreed to before content is submitted.
          </p>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <SectionHeading
            eyebrow="Enterprise Program Management"
            title="Coordinate Translation Across Agencies, Departments, and Programs"
            intro="Replace fragmented email requests, separate vendor processes, and disconnected terminology files with a governed environment for multilingual requests, linguistic assets, participants, approvals, and reporting."
          />
          <div className="gov-program-grid">
            {programFeatures.map((item) => (
              <article className="gov-program-item" key={item.title}>
                <span className="gov-icon-box"><Icon name={item.icon} size={21} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="gov-integration-band">
            <div>
              <strong>One multilingual operating view</strong>
              <span>Track requests, workflows, terminology, approvals, costs, and delivery progress.</span>
            </div>
            <ArrowLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</ArrowLink>
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--blush">
        <div className="gov-container gov-split">
          <div className="gov-split-copy">
            <h2>Be Ready Before an Urgent Communication Is Needed</h2>
            <p>
              Emergency translation is faster and more reliable when the language program is prepared in advance. Stepes can help establish a multilingual readiness framework before an incident occurs.
            </p>
            <p>
              During an active event, content can be prioritized by public impact, language, format, and release sequence. Parallel teams can support larger multilingual releases, while controlled updates help translators and reviewers work from the correct source version.
            </p>
          </div>
          <div className="gov-readiness-panel">
            <h3>Emergency Communication Readiness</h3>
            <p>Prepare the language assets, people, and approvals needed for faster response.</p>
            <Checklist items={readinessItems} columns={2} />
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container gov-language-layout">
          <div className="gov-language-copy">
            <h2>Plan Languages Around the Audience and the Mission</h2>
            <p>
              The right language plan depends on the population, geography, program, communication channel, service risk, and purpose—not only the most widely spoken languages nationally.
            </p>
            <p>
              Stepes helps agencies operationalize the language plan they establish through content inventories, workflow planning, cost modeling, terminology development, and scalable delivery. The agency remains responsible for determining its applicable legal and policy obligations.
            </p>
          </div>
          <div className="gov-language-card">
            <h3>Inputs for Language Prioritization</h3>
            <p>Combine public data with program-level evidence and the consequences of misunderstanding.</p>
            <Checklist items={languagePlanning} columns={2} />
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--dark">
        <div className="gov-container">
          <SectionHeading
            eyebrow="Global Public Institutions"
            title="Support for Programs That Cross Borders"
            intro="Stepes supports ministries, embassies, public authorities, development organizations, government contractors, research institutions, and international programs that communicate with multilingual stakeholders."
            dark
          />
          <div className="gov-global-grid">
            {globalPrograms.map((item) => (
              <article className="gov-global-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="gov-dark-note">
            Global programs can be coordinated across major commercial languages, regional language varieties, and lower-resource languages, subject to linguist availability and project requirements.
          </p>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <SectionHeading
            title="A Clear Government Translation Process"
            intro="Define the appropriate workflow once, then carry it consistently across languages, formats, departments, and recurring content."
            align="center"
          />
          <div className="gov-process">
            {processSteps.map((step) => (
              <article className="gov-process-step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section gov-section--soft">
        <div className="gov-container">
          <SectionHeading
            title="Why Government Organizations Choose Stepes"
            intro="Combine specialized human expertise, AI-powered efficiency, digital content support, terminology consistency, and enterprise workflow visibility through one language partner."
          />
          <div className="gov-why-grid">
            {whyItems.map((item) => (
              <article className="gov-why-item" key={item.title}>
                <span className="gov-why-item__marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="gov-procurement-band">
            <div>
              <h3>Procurement and Onboarding Support</h3>
              <p>Support vendor evaluations with relevant company information, quality documentation, security information, workflow descriptions, pricing models, sample projects, and supplier-review materials.</p>
            </div>
            <ArrowLink href="https://www.stepes.com/iso-certified-translation-services/">ISO-Certified Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <SectionHeading
            title="Government Translation Services FAQ"
            intro="Answers to common questions about languages, workflows, AI, accessibility, security, interpreting, and ongoing public-sector translation programs."
          />
          <div className="gov-faq-shell">
            {faqs.map((item, index) => (
              <FAQItem
                item={item}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                key={item.question}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="gov-final-wrap">
        <div className="gov-final-cta">
          <div className="gov-final-cta__content">
            <h2>Make Every Public Message Clear Across Languages</h2>
            <p>
              Translate one government document, launch a multilingual public-service website, prepare urgent communications, or coordinate an agency-wide language program. Share your files, languages, and deadline to receive a workflow and quote tailored to your requirements.
            </p>
            <div className="gov-actions">
              <a className="gov-btn gov-btn--primary" href="https://app.stepes.com/quote/">
                <span>Get a Government Translation Quote</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="gov-btn gov-btn--secondary" href="https://www.stepes.com/contact-us/">
                Contact Our Government Translation Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
