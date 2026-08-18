import React, { useEffect, useState } from "react";

const STEPS_URL = "https://www.stepes.com";
const PAGE_URL = `${STEPS_URL}/translator-resources/`;

const icons = {
  account: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c.7-3.2 3.1-5 6.5-5s5.8 1.8 6.5 5" />
    </>
  ),
  workflow: (
    <>
      <path d="M5 6h9" />
      <path d="m12 3 3 3-3 3" />
      <path d="M19 18H10" />
      <path d="m12 15-3 3 3 3" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="6" r="2" />
    </>
  ),
  quality: (
    <>
      <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3Z" />
      <path d="m9.3 12 1.8 1.8 3.7-4" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="m4.2 4.2 2.1 2.1" />
      <path d="m17.7 17.7 2.1 2.1" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m4.2 19.8 2.1-2.1" />
      <path d="m17.7 6.3 2.1-2.1" />
      <circle cx="12" cy="12" r="4.1" />
      <path d="m10.5 12 1 1 2-2.2" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5.5 5.7v5.8c0 4 2.5 7.4 6.5 9.5 4-2.1 6.5-5.5 6.5-9.5V5.7L12 3Z" />
      <path d="m9.4 12 1.8 1.8 3.7-4" />
    </>
  ),
  support: (
    <>
      <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
      <path d="M5 14H3.8A1.8 1.8 0 0 0 2 15.8v2.4A1.8 1.8 0 0 0 3.8 20H6v-6H5Z" />
      <path d="M19 14h1.2a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8H18v-6h1Z" />
      <path d="M18 20c-.7 1-1.8 1.5-3.5 1.5" />
    </>
  ),
  context: (
    <>
      <path d="M4 5.5h16v11H8l-4 3v-14Z" />
      <path d="M8 9h8" />
      <path d="M8 12.5h5" />
    </>
  ),
  terminology: (
    <>
      <path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" />
      <path d="M8 8h7" />
      <path d="M8 12h6" />
      <path d="M8 16h4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17" />
      <path d="M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21" />
      <path d="M12 3C9.7 5.5 8.5 8.5 8.5 12s1.2 6.5 3.5 9" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
      <path d="M12 14v2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17.4h.01" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.2 2.5 2.5 5.4-5.6" />
    </>
  ),
  learn: (
    <>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4.5c2.7 2 7.3 2 10 0V12" />
      <path d="M21 9v6" />
    </>
  ),
  device: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
      <path d="M12 18h.01" />
    </>
  ),
  payment: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 15h4" />
    </>
  ),
};

function Icon({ name, size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name] || icons.check}
    </svg>
  );
}

function Arrow({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

function LinkArrow({ href, children, className = "" }) {
  return (
    <a className={`textLink ${className}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`sectionHeading sectionHeading--${align}`}>
      {eyebrow ? (
        <div className={`eyebrow${dark ? " eyebrow--dark" : ""}`}>{eyebrow}</div>
      ) : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

const quickAccess = [
  {
    icon: "account",
    title: "Getting Started and Account",
    text: "Manage your professional profile, language pairs, subject expertise, availability, and account information.",
    label: "Explore Account Guidance",
    href: `${PAGE_URL}#account-support`,
  },
  {
    icon: "workflow",
    title: "Projects and Workflow",
    text: "Review project requirements, manage assignments, raise questions, complete quality checks, and deliver through the approved workflow.",
    label: "Explore Project Guidance",
    href: `${PAGE_URL}#project-workflow`,
  },
  {
    icon: "quality",
    title: "Translation Quality",
    text: "Evaluate accuracy, completeness, terminology, linguistic quality, locale suitability, technical integrity, and requirement compliance.",
    label: "Explore Quality Guidance",
    href: `${PAGE_URL}#translation-quality`,
  },
  {
    icon: "ai",
    title: "AI and Translation Technology",
    text: "Use approved AI, machine translation, translation memory, terminology, and automation tools with appropriate human oversight.",
    label: "Explore AI Guidance",
    href: `${PAGE_URL}#responsible-ai`,
  },
  {
    icon: "security",
    title: "Security and Confidentiality",
    text: "Protect client content, project information, credentials, communications, and governed language assets throughout the workflow.",
    label: "Explore Security Guidance",
    href: `${PAGE_URL}#security`,
  },
  {
    icon: "support",
    title: "Payments and Support",
    text: "Find general guidance for account access, project support, technical issues, payment questions, and linguist assistance.",
    label: "Get Linguist Support",
    href: `${STEPS_URL}/translator-support/`,
  },
];

const modernRoles = [
  "Translator and editor",
  "Subject-matter specialist",
  "AI-output evaluator",
  "Machine translation post-editor",
  "Terminology contributor",
  "Cultural and market advisor",
  "Quality risk identifier",
  "Multilingual UX specialist",
];

const workflowSteps = [
  {
    title: "Understand the Assignment",
    text: "Review the language pair, locale, audience, content type, subject matter, purpose, deadline, references, technology requirements, and security instructions before beginning.",
  },
  {
    title: "Confirm You Are the Right Linguist",
    text: "Accept work only when your language competence, subject expertise, availability, tools, and understanding of the requirements are appropriate for the assignment.",
  },
  {
    title: "Review the Source Content",
    text: "Look for ambiguity, missing information, inconsistent terminology, broken references, formatting issues, and content that may require clarification.",
  },
  {
    title: "Use Approved Language Assets",
    text: "Apply translation memories, termbases, glossaries, style guides, reference translations, product terminology, and do-not-translate lists carefully and in context.",
  },
  {
    title: "Translate or Review in Context",
    text: "Consider surrounding content, user actions, visual layout, product functionality, placeholders, audience expectations, and the environment in which the translation will be used.",
  },
  {
    title: "Perform Linguistic and Technical QA",
    text: "Check accuracy, completeness, terminology, fluency, names, numbers, dates, units, locale conventions, tags, placeholders, links, formatting, and consistency.",
  },
  {
    title: "Deliver and Respond Professionally",
    text: "Submit through the approved channel, include all required files, flag unresolved issues clearly, protect project content, and respond constructively to follow-up questions.",
  },
];

const qualityDimensions = [
  {
    title: "Accuracy",
    text: "Preserve the intended meaning without distortion, unsupported additions, omissions, or changes to conditions, limitations, warnings, and levels of certainty.",
  },
  {
    title: "Completeness",
    text: "Address all required headings, labels, tables, footnotes, captions, metadata, interface strings, embedded text, and other translatable elements.",
  },
  {
    title: "Terminology",
    text: "Use approved product, regulatory, legal, technical, and market-specific terminology accurately and consistently.",
  },
  {
    title: "Linguistic Quality",
    text: "Apply appropriate grammar, syntax, spelling, punctuation, tone, register, fluency, and readability for the target language and audience.",
  },
  {
    title: "Locale and Cultural Suitability",
    text: "Follow required conventions for dates, numbers, units, currency, regional terminology, names, examples, and cultural references.",
  },
  {
    title: "Functional and Requirement Compliance",
    text: "Preserve tags, variables, links, file structure, character limits, and project-specific instructions so the translated content remains usable and compliant.",
  },
];

const reviewModels = [
  "Professional human translation",
  "Human translation with independent review",
  "AI-assisted translation with human review",
  "Machine translation post-editing",
  "Specialist or in-country review",
  "Linguistic validation and functional testing",
];

const aiPrinciples = [
  {
    title: "Follow the Assigned Workflow",
    text: "Use only the AI, machine translation, terminology, quality, and automation systems approved for the project. Project instructions determine whether technology may be used and what level of review is required.",
  },
  {
    title: "Protect Client Content",
    text: "Never copy confidential or restricted files, excerpts, screenshots, prompts, language assets, or project communications into unauthorized public tools or services.",
  },
  {
    title: "Evaluate Rather Than Assume",
    text: "Treat AI-generated translation as output requiring verification. Check for misinterpretation, omissions, invented information, terminology errors, altered certainty, incorrect numbers, locale issues, and broken formatting.",
  },
  {
    title: "Maintain Human Accountability",
    text: "Do not approve output because it sounds fluent or appears confident. Compare it with the source, intended use, approved terminology, and project requirements before submission.",
  },
  {
    title: "Apply Proportionate Oversight",
    text: "The level of human review should reflect the audience, subject matter, confidentiality, regulatory significance, potential consequences of error, and client instructions.",
  },
  {
    title: "Report Systematic Problems",
    text: "Raise recurring errors, unsuitable terminology, source ambiguity, formatting failures, biased language, or workflow risks through the approved project channel.",
  },
];

const aiChecks = [
  "Misinterpretation or incorrect context",
  "Omitted, added, or invented information",
  "Incorrect names, dates, numbers, or units",
  "Terminology and consistency failures",
  "Changed tone, certainty, or negation",
  "Locale, formatting, tag, or placeholder errors",
];

const languageAssets = [
  {
    icon: "workflow",
    title: "Translation Memory",
    text: "Reuse approved translations to improve consistency and efficiency, but review every match in context. A high match percentage does not guarantee that the wording is correct for the current audience, product, locale, or use case.",
    link: "Explore Translation Memory",
    href: `${STEPS_URL}/translation-memory/`,
  },
  {
    icon: "terminology",
    title: "Terminology Management",
    text: "Apply required, preferred, and prohibited terms consistently. Report missing, conflicting, outdated, or contextually unsuitable entries rather than making undocumented changes to governed terminology.",
    link: "Explore Terminology Management",
    href: `${STEPS_URL}/terminology-management/`,
  },
  {
    icon: "context",
    title: "Style and Reference Guidance",
    text: "Follow project-specific direction for tone, formality, capitalization, punctuation, units, product naming, inclusive language, interface conventions, and market requirements.",
    link: "Explore Enterprise Translation Management",
    href: `${STEPS_URL}/enterprise-translation-management/`,
  },
];

const securityPrinciples = [
  {
    icon: "lock",
    title: "Use Authorized Access",
    text: "Access only the projects, files, systems, and communications assigned to you. Keep credentials secure and never allow another person to work through your account.",
  },
  {
    icon: "device",
    title: "Use Approved Systems",
    text: "Work through the designated Stepes platform, communication channel, and approved technology environment. Do not move content to another system for convenience.",
  },
  {
    icon: "security",
    title: "Protect Local Files",
    text: "Avoid unnecessary downloads. When local processing is authorized, use a secure device, restrict access, protect files, and follow retention and deletion requirements.",
  },
  {
    icon: "context",
    title: "Keep Communications Secure",
    text: "Do not send client files or project details through personal messaging, social media, public links, personal cloud storage, or other unapproved channels.",
  },
  {
    icon: "globe",
    title: "Protect Project Information",
    text: "Do not disclose client names, screenshots, source or translated content, terminology, instructions, schedules, or reviewer feedback without authorization.",
  },
  {
    icon: "alert",
    title: "Report Concerns Promptly",
    text: "Immediately report possible unauthorized access, misdirected files, accidental disclosure, suspicious activity, lost devices, or use of an unapproved system.",
  },
];

const specialistAreas = [
  {
    title: "Life Sciences and Clinical Content",
    text: "Preserve clinical meaning, study procedures, patient-facing language, safety information, controlled terminology, and levels of certainty without unauthorized simplification or interpretation.",
    href: `${STEPS_URL}/life-sciences-translation-services/`,
  },
  {
    title: "Healthcare and Medical Devices",
    text: "Apply particular care to warnings, contraindications, instructions, measurements, anatomy, device components, user actions, and safety-critical distinctions.",
    href: `${STEPS_URL}/medical-device-translation-services/`,
  },
  {
    title: "Legal Content",
    text: "Handle defined terms, rights, obligations, conditions, exceptions, jurisdiction-specific language, and levels of commitment with precision.",
    href: `${STEPS_URL}/legal-translation-services/`,
  },
  {
    title: "Financial and Insurance Content",
    text: "Verify monetary amounts, rates, dates, risk statements, disclosure language, conditions, exclusions, and market-specific conventions.",
    href: `${STEPS_URL}/financial-translation-services/`,
  },
  {
    title: "Technical and Manufacturing Content",
    text: "Use precise terminology for components, processes, equipment, materials, measurements, maintenance procedures, diagrams, and safety instructions.",
    href: `${STEPS_URL}/technical-translation-services/`,
  },
  {
    title: "Software and User Interfaces",
    text: "Consider character limits, variables, placeholders, menu structures, reusable strings, user actions, visual context, and consistency across platforms.",
    href: `${STEPS_URL}/software-localization-services/`,
  },
  {
    title: "Marketing and Brand Content",
    text: "Adapt tone, calls to action, cultural relevance, claims, search terminology, and brand voice within the approved creative scope.",
    href: `${STEPS_URL}/marketing-translation-services/`,
  },
];

const communicationRows = [
  {
    title: "Ask Focused Questions",
    text: "Identify the exact file, page, segment, or string; explain the ambiguity; include relevant context; and state the clarification needed.",
  },
  {
    title: "Raise Risks Early",
    text: "Report missing instructions, unusable source content, access problems, volume changes, technical issues, expertise concerns, or deadline risks as soon as they become known.",
  },
  {
    title: "Use the Approved Channel",
    text: "Keep questions and decisions within the designated platform, email thread, or project-management channel so they remain secure, traceable, and available to the right participants.",
  },
  {
    title: "Respond Constructively to Feedback",
    text: "Distinguish objective corrections, client preferences, terminology updates, style decisions, source issues, and reviewer interpretations. Explain disagreements professionally and with evidence.",
  },
];

const accountSupport = [
  {
    icon: "account",
    title: "Profile and Qualifications",
    text: "Keep your contact details, native language, professional language pairs, target locales, subject expertise, credentials, education, tool experience, and availability accurate and current.",
    link: "Translator Login",
    href: `${STEPS_URL}/translator-login/`,
  },
  {
    icon: "device",
    title: "Project and Technical Access",
    text: "Use your translator workspace to review available project information, access files and instructions, monitor status, submit deliverables, and resolve platform or file-access issues.",
    link: "Get Technical Support",
    href: `${STEPS_URL}/translator-support/`,
  },
  {
    icon: "payment",
    title: "Payments and Account Support",
    text: "Manage required payment, tax, and account information through authorized processes. Never send sensitive banking or identification information through an unapproved channel.",
    link: "Contact Linguist Support",
    href: `${STEPS_URL}/translator-support/`,
  },
];

const futureSkills = [
  {
    title: "AI Literacy",
    text: "Understand AI capabilities, limitations, security requirements, hallucination risks, appropriate review, and when a human-only or specialist workflow is required.",
  },
  {
    title: "Quality Evaluation",
    text: "Identify, categorize, explain, and prioritize issues across accuracy, completeness, terminology, language, locale, functionality, requirements, and severity.",
  },
  {
    title: "Terminology Management",
    text: "Work with concepts, definitions, preferred and prohibited terms, context, locale variants, product naming, acronyms, and controlled approval processes.",
  },
  {
    title: "Source-Content Analysis",
    text: "Recognize ambiguity, inconsistency, undefined terms, missing information, unclear references, complex structures, and content that is difficult to translate reliably.",
  },
  {
    title: "Data Security",
    text: "Protect files, translations, language assets, prompts, references, project communications, and client information throughout the workflow.",
  },
  {
    title: "Localization and User Experience",
    text: "Evaluate how language works within websites, software, documents, forms, multimedia, training, customer journeys, and product releases.",
  },
  {
    title: "Accessibility and Inclusive Communication",
    text: "Consider readability, audience comprehension, clear structure, respectful terminology, captions, transcripts, and accessible language where the project allows.",
  },
  {
    title: "Domain Expertise and Collaboration",
    text: "Continue building subject knowledge and the communication skills required to work with project managers, reviewers, specialists, engineers, designers, and client teams.",
  },
];

const relatedResources = [
  {
    eyebrow: "WORKFLOW",
    title: "AI + Human Translation Workflow",
    text: "See how AI, automation, professional linguists, and fit-for-purpose review work together across modern translation programs.",
    href: `${STEPS_URL}/ai-human-translation-workflow/`,
  },
  {
    eyebrow: "QUALITY",
    title: "Translation Quality System",
    text: "Explore the requirements, linguist qualification, terminology, review, QA, and continuous-improvement framework behind reliable multilingual content.",
    href: `${STEPS_URL}/translation-quality-system/`,
  },
  {
    eyebrow: "ASSURANCE",
    title: "Translation Quality Assurance",
    text: "Learn how linguistic, technical, automated, and human quality controls support accurate, consistent, and functional translations.",
    href: `${STEPS_URL}/translation-quality-assurance/`,
  },
  {
    eyebrow: "SECURITY",
    title: "Translation Security and Compliance",
    text: "Understand how governed access, approved technology, protected language assets, and secure workflows help safeguard multilingual content.",
    href: `${STEPS_URL}/resources/security-and-compliance/`,
  },
  {
    eyebrow: "LANGUAGE ASSETS",
    title: "Translation Memory",
    text: "Discover how approved translations can be reused to strengthen consistency, efficiency, and continuity across content and releases.",
    href: `${STEPS_URL}/translation-memory/`,
  },
  {
    eyebrow: "TERMINOLOGY",
    title: "Terminology Management",
    text: "Learn how enterprise terminology programs support clearer, more consistent, and more accurate communication across languages.",
    href: `${STEPS_URL}/terminology-management/`,
  },
];

const faqs = [
  {
    q: "Who can use Stepes Translator Resources?",
    a: "These public resources are designed for current Stepes translators, editors, reviewers, and language professionals interested in understanding Stepes workflows and professional expectations. Account-specific project, payment, quality, and personal information remains available only through authorized systems and support channels.",
  },
  {
    q: "How do I apply to become a Stepes translator?",
    a: "Visit the Become a Translator page to learn about professional qualifications, areas of expertise, the application process, and opportunities to work with Stepes.",
  },
  {
    q: "Where do I log in to my translator account?",
    a: "Use the official Translator Login link to access your Stepes translator workspace. Confirm that you are using the authorized Stepes destination before entering account credentials.",
  },
  {
    q: "How are Stepes translation projects assigned?",
    a: "Project opportunities depend on factors such as language pair, target locale, subject expertise, qualifications, availability, project requirements, technology needs, security considerations, and prior professional performance. Maintaining a complete and accurate profile helps Stepes evaluate your suitability for relevant assignments.",
  },
  {
    q: "What should I review before accepting a project?",
    a: "Review the language pair, locale, content type, subject matter, deadline, service requirements, reference materials, technology requirements, and project instructions. Accept the assignment only when you have the required competence, capacity, access, and understanding.",
  },
  {
    q: "Can Stepes translators use AI or machine translation?",
    a: "AI or machine translation may be used only when permitted by the project instructions and through approved systems. Never upload client content to an unauthorized public AI, chatbot, machine translation, rewriting, grammar, or file-processing tool. When AI-generated translation is part of the workflow, apply the required human review and remain accountable for submitted work.",
  },
  {
    q: "What should I do when the source content is unclear?",
    a: "Do not guess when ambiguity could affect meaning or quality. Submit a focused question through the approved project channel, identify the exact location, explain the uncertainty, provide relevant context, and state the clarification needed.",
  },
  {
    q: "How is translation quality evaluated?",
    a: "Quality may be evaluated according to accuracy, completeness, terminology, linguistic quality, tone, locale suitability, technical integrity, consistency, project requirements, and the potential impact of an error. The evaluation method and required level of review may differ by project and content type.",
  },
  {
    q: "How should I use translation memory and approved terminology?",
    a: "Apply approved translation-memory matches and terminology carefully, but always evaluate them in context. Do not change required terminology without following the project's query or approval process. Report conflicting, missing, outdated, or contextually inappropriate entries.",
  },
  {
    q: "What should I do if I may miss a deadline?",
    a: "Contact the project team as soon as the risk becomes known. Explain the issue clearly, provide an accurate progress update, and avoid waiting until the deadline. Early communication gives the team more time to protect delivery and quality.",
  },
  {
    q: "How do I report a confidentiality or security concern?",
    a: "Report suspected unauthorized access, accidental disclosure, misdirected files, use of an unapproved system, lost devices, suspicious communication, or other potential security issues immediately through the designated support or project channel.",
  },
  {
    q: "How do I update my profile, qualifications, or payment information?",
    a: "Sign in to your translator account to review available profile and account settings. Keep your languages, subject expertise, credentials, experience, contact details, technology skills, availability, and required payment information current. Contact Linguist Support when information cannot be updated through your account.",
  },
  {
    q: "Where can I get technical or project support?",
    a: "Contact Linguist Support for login, account, platform, file-access, technical, payment, or general workflow questions. For active assignments, use the project-specific communication channel whenever one has been provided.",
  },
  {
    q: "How can I improve my chances of being considered for suitable projects?",
    a: "Maintain an accurate professional profile, list only verified capabilities, develop relevant subject expertise, keep your availability current, communicate promptly, follow project instructions, deliver reliably, protect confidential information, and consistently submit high-quality work.",
  },
];

export default function TranslatorResourcesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Translator Resources for Professional Linguists | Stepes";

    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    const previousContent = meta ? meta.getAttribute("content") : null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Access professional guidance on translation workflows, AI-assisted translation, quality assurance, terminology, security, project delivery, accounts, and support for Stepes linguists."
    );

    return () => {
      document.title = previousTitle;
      if (createdMeta && meta?.parentNode) {
        meta.parentNode.removeChild(meta);
      } else if (meta && previousContent !== null) {
        meta.setAttribute("content", previousContent);
      }
    };
  }, []);

  return (
    <main className="translatorResources">
      <style>{`
        :root {
          --tr-magenta: #c11d63;
          --tr-magenta-dark: #9f1d55;
          --tr-magenta-deep: #7a1542;
          --tr-blush: #fdf2f7;
          --tr-pink-light: #f2a7c6;
          --tr-ink: #121423;
          --tr-body: #454b5f;
          --tr-muted: #677086;
          --tr-border: #e4e7ee;
          --tr-soft: #f7f8fb;
          --tr-dark: #171523;
          --tr-white: #ffffff;
          --tr-radius-lg: 30px;
          --tr-radius-md: 22px;
          --tr-shadow: 0 20px 54px rgba(27, 20, 42, 0.08);
        }

        * { box-sizing: border-box; }

        .translatorResources {
          width: 100%;
          overflow: hidden;
          background: var(--tr-white);
          color: var(--tr-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .translatorResources a {
          color: inherit;
          text-decoration: none;
        }

        .translatorResources button,
        .translatorResources a {
          -webkit-tap-highlight-color: transparent;
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .section {
          padding: 96px 0;
        }

        .section--dense { padding: 80px 0; }
        .section--soft { background: var(--tr-soft); }
        .section--blush { background: var(--tr-blush); }
        .section--dark { background: var(--tr-dark); color: var(--tr-white); }

        .eyebrow {
          margin: 0 0 16px;
          color: var(--tr-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .eyebrow--dark { color: var(--tr-pink-light); }

        h1, h2, h3, p { margin-top: 0; }

        h1, h2, h3 {
          color: var(--tr-ink);
          font-weight: 600;
          letter-spacing: -.026em;
        }

        .section--dark h1,
        .section--dark h2,
        .section--dark h3 { color: var(--tr-white); }

        h1 {
          max-width: 940px;
          margin: 0 auto 24px;
          font-size: 48px;
          line-height: 1.08;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.15;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
        }

        p, li { color: var(--tr-body); font-size: 16px; }
        .section--dark p,
        .section--dark li { color: #cdd0db; }

        .bodyLarge {
          font-size: 18px;
          line-height: 1.7;
        }

        .hero {
          position: relative;
          padding: 108px 0 86px;
          background:
            radial-gradient(circle at 50% 0%, rgba(193,29,99,.07), transparent 34%),
            linear-gradient(180deg, #fff 0%, #fff 72%, #fcfafc 100%);
          text-align: center;
        }

        .hero::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: min(calc(100% - 112px), 1168px);
          height: 1px;
          transform: translateX(-50%);
          background: var(--tr-border);
        }

        .heroIntro {
          max-width: 790px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.72;
        }

        .heroActions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .buttonPrimary,
        .buttonSecondary {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }

        .buttonPrimary,
        .buttonPrimary:visited,
        .buttonPrimary:hover,
        .buttonPrimary:active,
        .buttonPrimary:focus-visible {
          color: #fff !important;
        }

        .buttonPrimary {
          background: var(--tr-magenta);
          border: 1px solid var(--tr-magenta);
          box-shadow: 0 12px 26px rgba(193,29,99,.19);
        }

        .buttonPrimary:hover {
          background: var(--tr-magenta-dark);
          border-color: var(--tr-magenta-dark);
          box-shadow: 0 15px 30px rgba(193,29,99,.24);
          transform: translateY(-1px);
        }

        .buttonSecondary {
          color: var(--tr-ink);
          background: #fff;
          border: 1px solid var(--tr-border);
        }

        .buttonSecondary:visited { color: var(--tr-ink); }
        .buttonSecondary:hover {
          border-color: #cdd2dc;
          box-shadow: 0 10px 24px rgba(30,30,46,.08);
          transform: translateY(-1px);
        }

        .buttonPrimary:focus-visible,
        .buttonSecondary:focus-visible,
        .textLink:focus-visible,
        .faqButton:focus-visible {
          outline: 3px solid rgba(193,29,99,.28);
          outline-offset: 4px;
        }

        .heroSupport {
          margin-top: 22px;
          color: var(--tr-muted);
          font-size: 16px;
        }

        .heroSupport a {
          color: var(--tr-magenta-dark);
          font-weight: 600;
        }

        .heroSupport a:hover { text-decoration: underline; text-underline-offset: 4px; }

        .heroSignals {
          display: flex;
          justify-content: center;
          gap: 0;
          max-width: 840px;
          margin: 54px auto 0;
          padding-top: 24px;
          border-top: 1px solid var(--tr-border);
        }

        .heroSignal {
          flex: 1 1 0;
          padding: 0 22px;
          color: var(--tr-body);
          font-size: 16px;
          font-weight: 600;
        }

        .heroSignal + .heroSignal { border-left: 1px solid var(--tr-border); }

        .sectionHeading { margin-bottom: 50px; }
        .sectionHeading h2 { max-width: 820px; }
        .sectionHeading p {
          max-width: 790px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.72;
        }
        .sectionHeading--center { text-align: center; }
        .sectionHeading--center h2,
        .sectionHeading--center p { margin-left: auto; margin-right: auto; }

        .quickGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--tr-border);
          border-left: 1px solid var(--tr-border);
          background: #fff;
        }

        .quickItem {
          min-width: 0;
          padding: 34px 32px 32px;
          border-right: 1px solid var(--tr-border);
          border-bottom: 1px solid var(--tr-border);
        }

        .iconBox {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border-radius: 14px;
          color: var(--tr-magenta-dark);
          background: var(--tr-blush);
        }

        .quickItem h3 { font-size: 21px; }
        .quickItem p { margin-bottom: 22px; }

        .textLink {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          color: var(--tr-magenta-dark) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .textLink svg { transition: transform .2s ease; }
        .textLink:hover svg { transform: translateX(3px); }
        .textLink:hover span { text-decoration: underline; text-underline-offset: 4px; }

        .modernLayout {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: start;
        }

        .modernIntro {
          max-width: 600px;
          font-size: 18px;
          line-height: 1.72;
        }

        .modernQuote {
          margin-top: 34px;
          padding: 24px 0 0 24px;
          border-left: 3px solid var(--tr-magenta);
        }

        .modernQuote p {
          margin: 0;
          color: #f4f2f7;
          font-size: 19px;
          line-height: 1.65;
        }

        .roleList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.13);
        }

        .roleItem {
          position: relative;
          min-height: 74px;
          display: flex;
          align-items: center;
          padding: 18px 18px 18px 28px;
          border-bottom: 1px solid rgba(255,255,255,.13);
          color: #f0eef4;
          font-size: 16px;
          font-weight: 600;
        }

        .roleItem:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.13); }
        .roleItem::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 29px;
          width: 8px;
          height: 8px;
          border: 2px solid var(--tr-pink-light);
          border-radius: 50%;
        }

        .relatedInline {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          margin-top: 32px;
        }

        .section--dark .textLink,
        .section--dark .textLink:visited { color: var(--tr-pink-light) !important; }

        .workflowPanel {
          border-top: 1px solid var(--tr-border);
        }

        .workflowRow {
          display: grid;
          grid-template-columns: 72px minmax(220px, .75fr) minmax(0, 1.6fr);
          gap: 28px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid var(--tr-border);
        }

        .workflowNumber {
          color: var(--tr-magenta-dark);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: .06em;
        }

        .workflowRow h3 { margin: 0; font-size: 21px; }
        .workflowRow p { margin: 0; }

        .sectionFooterLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 28px;
          margin-top: 34px;
        }

        .qualityGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--tr-border);
          border-left: 1px solid var(--tr-border);
          background: #fff;
        }

        .qualityItem {
          padding: 32px;
          border-right: 1px solid var(--tr-border);
          border-bottom: 1px solid var(--tr-border);
        }

        .qualityItem h3 { font-size: 21px; }
        .qualityItem p { margin-bottom: 0; }

        .fitPanel {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 62px;
          margin-top: 48px;
          padding: 42px 44px;
          border-radius: var(--tr-radius-lg);
          background: var(--tr-soft);
        }

        .fitPanel h3 { margin: 0; font-size: 26px; }
        .fitPanel p { margin-bottom: 22px; }

        .checkGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 24px;
        }

        .checkItem {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          color: var(--tr-body);
          font-size: 16px;
        }

        .checkItem svg {
          margin-top: 3px;
          color: var(--tr-magenta-dark);
        }

        .aiLayout {
          display: grid;
          grid-template-columns: minmax(280px, .75fr) minmax(0, 1.25fr);
          gap: 76px;
          align-items: start;
        }

        .aiLead {
          position: sticky;
          top: 28px;
        }

        .aiLead p { font-size: 18px; line-height: 1.72; }

        .aiCallout {
          margin-top: 28px;
          padding: 22px 24px;
          border-left: 3px solid var(--tr-magenta);
          background: rgba(255,255,255,.72);
        }

        .aiCallout p { margin: 0; font-size: 17px; }

        .aiPrinciples {
          border-top: 1px solid #e4dce1;
        }

        .aiPrinciple {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 20px;
          padding: 26px 0;
          border-bottom: 1px solid #e4dce1;
        }

        .aiPrincipleNumber {
          color: var(--tr-magenta-dark);
          font-size: 16px;
          font-weight: 600;
        }

        .aiPrinciple h3 { margin-bottom: 8px; font-size: 21px; }
        .aiPrinciple p { margin-bottom: 0; }

        .aiChecklist {
          margin-top: 38px;
          padding: 30px;
          border-radius: var(--tr-radius-md);
          background: #fff;
          box-shadow: 0 14px 36px rgba(86, 36, 58, .07);
        }

        .aiChecklist h3 { font-size: 21px; }

        .assetsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--tr-border);
          border-bottom: 1px solid var(--tr-border);
        }

        .assetColumn {
          min-width: 0;
          padding: 36px 34px 34px;
        }

        .assetColumn + .assetColumn { border-left: 1px solid var(--tr-border); }
        .assetColumn h3 { font-size: 22px; }
        .assetColumn p { margin-bottom: 24px; }

        .securityGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.13);
          border-left: 1px solid rgba(255,255,255,.13);
        }

        .securityItem {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 20px;
          padding: 30px;
          border-right: 1px solid rgba(255,255,255,.13);
          border-bottom: 1px solid rgba(255,255,255,.13);
        }

        .securityIcon {
          display: flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--tr-pink-light);
          background: rgba(242,167,198,.09);
        }

        .securityItem h3 { margin-bottom: 8px; font-size: 21px; }
        .securityItem p { margin-bottom: 0; }

        .expertiseList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--tr-border);
        }

        .expertiseItem {
          min-width: 0;
          padding: 30px 34px 30px 0;
          border-bottom: 1px solid var(--tr-border);
        }

        .expertiseItem:nth-child(odd) {
          padding-right: 42px;
          border-right: 1px solid var(--tr-border);
        }

        .expertiseItem:nth-child(even) { padding-left: 42px; }
        .expertiseItem h3 { font-size: 21px; }
        .expertiseItem p { margin-bottom: 18px; }

        .competenceNote {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 52px;
          align-items: start;
          margin-top: 48px;
          padding: 38px 42px;
          border-radius: var(--tr-radius-lg);
          background: var(--tr-blush);
        }

        .competenceNote h3 { margin: 0; font-size: 25px; }
        .competenceNote p { margin-bottom: 0; }

        .communicationLayout {
          display: grid;
          grid-template-columns: .72fr 1.28fr;
          gap: 76px;
          align-items: start;
        }

        .communicationIntro p { font-size: 18px; line-height: 1.72; }

        .communicationRows { border-top: 1px solid var(--tr-border); }
        .communicationRow {
          padding: 27px 0;
          border-bottom: 1px solid var(--tr-border);
        }
        .communicationRow h3 { margin-bottom: 8px; font-size: 21px; }
        .communicationRow p { margin-bottom: 0; }

        .professionalStandards {
          margin-top: 32px;
          padding: 26px 28px;
          border-radius: var(--tr-radius-md);
          background: #fff;
          border: 1px solid var(--tr-border);
        }
        .professionalStandards h3 { font-size: 20px; }
        .professionalStandards .checkGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

        .accountGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .accountCard {
          display: flex;
          min-width: 0;
          min-height: 100%;
          flex-direction: column;
          padding: 32px;
          border: 1px solid var(--tr-border);
          border-radius: var(--tr-radius-md);
          background: #fff;
        }

        .accountCard h3 { font-size: 21px; }
        .accountCard p { margin-bottom: 24px; }
        .accountCard .textLink { margin-top: auto; align-self: flex-start; }

        .skillsList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--tr-border);
        }

        .skillItem {
          min-width: 0;
          padding: 28px 34px 28px 0;
          border-bottom: 1px solid var(--tr-border);
        }
        .skillItem:nth-child(odd) {
          padding-right: 42px;
          border-right: 1px solid var(--tr-border);
        }
        .skillItem:nth-child(even) { padding-left: 42px; }
        .skillItem h3 { font-size: 21px; }
        .skillItem p { margin-bottom: 0; }

        .resourceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .resourceCard {
          display: flex;
          min-width: 0;
          min-height: 100%;
          flex-direction: column;
          padding: 28px;
          border: 1px solid var(--tr-border);
          border-radius: var(--tr-radius-md);
          background: #fff;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .resourceCard:hover {
          transform: translateY(-2px);
          border-color: #d9bdca;
          box-shadow: var(--tr-shadow);
        }

        .resourceCard h3 { font-size: 21px; }
        .resourceCard p { margin-bottom: 22px; }
        .resourceCard .textLink { margin-top: auto; align-self: flex-start; }

        .reviewNote {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid var(--tr-border);
          color: var(--tr-muted);
          font-size: 16px;
        }
        .reviewNote strong { color: var(--tr-ink); font-weight: 600; }

        .faqPanel {
          max-width: 980px;
          margin: 0 auto;
          border-top: 1px solid var(--tr-border);
          background: #fff;
        }

        .faqItem { border-bottom: 1px solid var(--tr-border); }

        .faqButton {
          width: 100%;
          min-height: 72px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 36px;
          gap: 24px;
          align-items: center;
          padding: 22px 0;
          border: 0;
          background: transparent;
          color: var(--tr-ink);
          text-align: left;
          cursor: pointer;
        }

        .faqQuestion {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .faqToggle {
          position: relative;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--tr-blush);
        }

        .faqToggle::before,
        .faqToggle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 2px;
          border-radius: 2px;
          background: var(--tr-magenta-dark);
          transform: translate(-50%, -50%);
          transition: transform .2s ease;
        }
        .faqToggle::after { transform: translate(-50%, -50%) rotate(90deg); }
        .faqButton[aria-expanded="true"] .faqToggle::after { transform: translate(-50%, -50%) rotate(0); }

        .faqAnswer {
          max-width: 840px;
          padding: 0 72px 25px 0;
        }
        .faqAnswer p { margin: 0; font-size: 16px; line-height: 1.72; }

        .finalSection {
          padding: 82px 0 96px;
          background: #fff;
        }

        .finalCta {
          position: relative;
          overflow: hidden;
          padding: 64px 54px;
          border: 1px solid #efd5e0;
          border-radius: var(--tr-radius-lg);
          background: var(--tr-blush);
          text-align: center;
        }

        .finalCta::before,
        .finalCta::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .finalCta::before {
          width: 220px;
          height: 220px;
          right: -120px;
          top: -130px;
          background: rgba(193,29,99,.06);
        }
        .finalCta::after {
          width: 160px;
          height: 160px;
          left: -90px;
          bottom: -100px;
          background: rgba(193,29,99,.045);
        }

        .finalCta h2 {
          position: relative;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .finalCta p {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.7;
        }

        .finalCta .heroActions { position: relative; margin-top: 30px; }
        .finalSupport {
          position: relative;
          margin-top: 20px !important;
          font-size: 16px !important;
        }
        .finalSupport a { color: var(--tr-magenta-dark); font-weight: 600; }
        .finalSupport a:hover { text-decoration: underline; text-underline-offset: 4px; }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero::after { width: calc(100% - 80px); }
          .modernLayout,
          .aiLayout,
          .communicationLayout { gap: 52px; }
          .quickItem,
          .qualityItem { padding: 28px; }
          .fitPanel { gap: 42px; }
          .resourceGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .hero::after { width: calc(100% - 48px); }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .section { padding: 84px 0; }
          .section--dense { padding: 72px 0; }

          .quickGrid,
          .qualityGrid,
          .assetsGrid,
          .accountGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .assetColumn + .assetColumn { border-left: 0; }
          .assetColumn:nth-child(even) { border-left: 1px solid var(--tr-border); }
          .assetColumn:last-child { border-top: 1px solid var(--tr-border); }

          .modernLayout,
          .aiLayout,
          .communicationLayout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .aiLead { position: static; }

          .workflowRow {
            grid-template-columns: 56px minmax(190px, .72fr) minmax(0, 1.28fr);
            gap: 20px;
          }

          .fitPanel,
          .competenceNote {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .securityGrid { grid-template-columns: 1fr; }
          .expertiseList,
          .skillsList { grid-template-columns: 1fr; }
          .expertiseItem:nth-child(odd),
          .skillItem:nth-child(odd) {
            padding-right: 0;
            border-right: 0;
          }
          .expertiseItem:nth-child(even),
          .skillItem:nth-child(even) { padding-left: 0; }
        }

        @media (max-width: 767px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .hero {
            padding: 76px 0 64px;
          }
          .hero::after { width: calc(100% - 40px); }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .section { padding: 68px 0; }
          .section--dense { padding: 64px 0; }
          .sectionHeading { margin-bottom: 36px; }
          .sectionHeading p,
          .heroIntro,
          .modernIntro,
          .aiLead p,
          .communicationIntro p,
          .finalCta p { font-size: 18px; }

          .heroActions {
            flex-direction: column;
            align-items: stretch;
          }
          .buttonPrimary,
          .buttonSecondary { width: 100%; }

          .heroSignals {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            margin-top: 40px;
          }
          .heroSignal { width: 100%; padding: 0; }
          .heroSignal + .heroSignal { border-left: 0; }

          .quickGrid,
          .qualityGrid,
          .assetsGrid,
          .accountGrid,
          .resourceGrid {
            grid-template-columns: 1fr;
          }

          .quickItem,
          .qualityItem,
          .assetColumn,
          .accountCard,
          .resourceCard { padding: 26px 24px; }

          .assetColumn:nth-child(even) { border-left: 0; }
          .assetColumn + .assetColumn { border-top: 1px solid var(--tr-border); }

          .roleList { grid-template-columns: 1fr; }
          .roleItem:nth-child(odd) { border-right: 0; }

          .workflowRow {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
            align-items: start;
            padding: 26px 0;
          }
          .workflowNumber { padding-top: 2px; }
          .workflowRow p {
            grid-column: 2;
            margin-top: 8px;
          }

          .checkGrid,
          .professionalStandards .checkGrid { grid-template-columns: 1fr; }

          .fitPanel,
          .competenceNote {
            padding: 30px 24px;
            border-radius: 24px;
          }

          .aiPrinciple {
            grid-template-columns: 34px minmax(0, 1fr);
            gap: 14px;
          }
          .aiChecklist { padding: 24px; }

          .securityItem {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 16px;
            padding: 24px;
          }

          .expertiseItem,
          .skillItem,
          .expertiseItem:nth-child(odd),
          .expertiseItem:nth-child(even),
          .skillItem:nth-child(odd),
          .skillItem:nth-child(even) { padding: 25px 0; }

          .professionalStandards { padding: 24px; }
          .reviewNote {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .faqButton {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 14px;
            padding: 20px 0;
          }
          .faqQuestion { font-size: 17px; }
          .faqAnswer { padding: 0 0 22px; }

          .finalSection { padding: 64px 0 72px; }
          .finalCta { padding: 48px 22px; border-radius: 24px; }
        }

        @media (max-width: 359px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          h1 { font-size: 36px; }
          .hero { padding-top: 70px; }
          .quickItem,
          .qualityItem,
          .assetColumn,
          .accountCard,
          .resourceCard,
          .securityItem { padding-left: 20px; padding-right: 20px; }
          .workflowRow { grid-template-columns: 36px minmax(0, 1fr); gap: 10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="translator-resources-title">
        <div className="shell">
          <div className="eyebrow">Translator Resources</div>
          <h1 id="translator-resources-title">Translator Resources for Professional Linguists</h1>
          <p className="heroIntro">
            Access practical guidance for working with Stepes, delivering high-quality multilingual content, using translation technology responsibly, protecting client information, and developing the skills required for modern professional translation.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href={`${STEPS_URL}/translator-login/`}>
              Translator Login <Arrow />
            </a>
            <a className="buttonSecondary" href={`${STEPS_URL}/become-a-translator/`}>
              Become a Translator <Arrow />
            </a>
          </div>
          <p className="heroSupport">
            Need help accessing your account? <a href={`${STEPS_URL}/translator-support/`}>Contact Linguist Support</a>
          </p>
          <div className="heroSignals" aria-label="Resource focus areas">
            <div className="heroSignal">Professional Workflows</div>
            <div className="heroSignal">Responsible AI Use</div>
            <div className="heroSignal">Quality and Security</div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="quick-access-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Quick Access"
            title="Find the Resources You Need"
            intro="Explore guidance for every stage of working with Stepes, from maintaining your professional profile to delivering secure, high-quality multilingual content."
            align="center"
          />
          <div className="quickGrid">
            {quickAccess.map((item) => (
              <article className="quickItem" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <LinkArrow href={item.href}>{item.label}</LinkArrow>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="modern-translator" aria-labelledby="modern-translator-title">
        <div className="shell">
          <div className="modernLayout">
            <div>
              <div className="eyebrow eyebrow--dark">The Modern Linguist</div>
              <h2 id="modern-translator-title">Professional Translation in an AI-Enabled World</h2>
              <p className="modernIntro">
                Translators increasingly work alongside artificial intelligence, machine translation, translation memory, terminology systems, automated quality checks, and connected localization workflows. These technologies can accelerate repetitive tasks and retrieve approved language, but they do not remove the need for professional judgment.
              </p>
              <div className="modernQuote">
                <p>
                  Professional linguists create value by applying language judgment, subject expertise, contextual understanding, cultural insight, and accountable human review where those capabilities matter most.
                </p>
              </div>
            </div>
            <div>
              <h3>The Expanding Role of Professional Linguists</h3>
              <p>
                Depending on the project, modern language professionals may contribute across translation, review, terminology, quality, cultural adaptation, and multilingual user experience.
              </p>
              <div className="roleList">
                {modernRoles.map((role) => <div className="roleItem" key={role}>{role}</div>)}
              </div>
              <div className="relatedInline">
                <LinkArrow href={`${STEPS_URL}/ai-human-translation-workflow/`}>AI + Human Translation Workflow</LinkArrow>
                <LinkArrow href={`${STEPS_URL}/machine-translation-post-editing/`}>Machine Translation Post-Editing</LinkArrow>
                <LinkArrow href={`${STEPS_URL}/translation-quality-assurance/`}>Translation Quality Assurance</LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="project-workflow" aria-labelledby="workflow-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Project Workflow"
            title="From Project Brief to Final Delivery"
            intro="High-quality translation begins before the first sentence is translated. Understand the assignment, confirm that it matches your qualifications, identify potential issues, and follow the specified workflow from start to finish."
          />
          <div className="workflowPanel">
            {workflowSteps.map((step, index) => (
              <article className="workflowRow" key={step.title}>
                <div className="workflowNumber">{String(index + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="sectionFooterLinks">
            <LinkArrow href={`${STEPS_URL}/translation-quality-assurance/`}>Translation Quality Assurance</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/translation-memory/`}>Translation Memory</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/terminology-management/`}>Terminology Management</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/translation-workflow-automation/`}>Workflow Automation</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="translation-quality" aria-labelledby="quality-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Translation Quality"
            title="Quality Begins With Purpose, Requirements, and Risk"
            intro="Translation quality is not defined by fluency alone. A high-quality translation must be accurate, complete, consistent, functional, and appropriate for its audience, content type, use environment, and level of risk."
            align="center"
          />
          <div className="qualityGrid">
            {qualityDimensions.map((item) => (
              <article className="qualityItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="fitPanel">
            <h3>Fit-for-Purpose Quality</h3>
            <div>
              <p>
                Different content types may require different translation and review models. The appropriate workflow depends on the purpose of the content, the audience, subject matter, confidentiality, client requirements, and the potential impact of an error.
              </p>
              <div className="checkGrid">
                {reviewModels.map((item) => (
                  <div className="checkItem" key={item}>
                    <Icon name="check" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sectionFooterLinks">
            <LinkArrow href={`${STEPS_URL}/translation-quality-system/`}>Translation Quality System</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/translation-quality-assurance/`}>Translation Quality Assurance</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/iso-certifications/`}>ISO Certifications</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section section--blush" id="responsible-ai" aria-labelledby="responsible-ai-title">
        <div className="shell">
          <div className="aiLayout">
            <div className="aiLead">
              <div className="eyebrow">Responsible AI</div>
              <h2 id="responsible-ai-title">Use AI to Support Expertise, Not Replace Judgment</h2>
              <p>
                AI can support multilingual workflows, but it must be used through approved systems, with the required level of human review, and with full protection of client content.
              </p>
              <div className="aiCallout">
                <p><strong>Fluency is not evidence of accuracy.</strong> Always compare AI-generated output with the source, intended use, approved terminology, and project requirements.</p>
              </div>
              <div className="sectionFooterLinks">
                <LinkArrow href={`${STEPS_URL}/ai-human-translation-workflow/`}>AI + Human Workflow</LinkArrow>
                <LinkArrow href={`${STEPS_URL}/machine-translation-post-editing/`}>Machine Translation Post-Editing</LinkArrow>
              </div>
            </div>
            <div>
              <div className="aiPrinciples">
                {aiPrinciples.map((item, index) => (
                  <article className="aiPrinciple" key={item.title}>
                    <div className="aiPrincipleNumber">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="aiChecklist">
                <h3>Review AI-Generated Translation For</h3>
                <div className="checkGrid">
                  {aiChecks.map((item) => (
                    <div className="checkItem" key={item}>
                      <Icon name="check" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="language-assets" aria-labelledby="language-assets-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Language Assets"
            title="Work Consistently With Approved Language Assets"
            intro="Translation memories, terminology databases, style guides, and reference materials preserve approved language, reduce unnecessary retranslation, and support consistency across content, markets, products, and releases."
            align="center"
          />
          <div className="assetsGrid">
            {languageAssets.map((item) => (
              <article className="assetColumn" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <LinkArrow href={item.href}>{item.link}</LinkArrow>
              </article>
            ))}
          </div>
          <div className="fitPanel">
            <h3>Protect Governed Language Assets</h3>
            <div>
              <p>
                Translation memories, glossaries, reference translations, and style guides may contain proprietary or confidential information. Do not share them, reuse them for another client, upload them to public systems, retain them beyond authorized requirements, or incorporate them into personal databases.
              </p>
              <LinkArrow href={`${STEPS_URL}/resources/translation-glossary/`}>Explore the Translation Glossary</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="security" aria-labelledby="security-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Security and Confidentiality"
            title="Protect Every File, Message, and Language Asset"
            intro="Security is part of professional translation quality. Linguists may handle unreleased products, regulated information, personal data, legal documents, research content, financial information, software, and other sensitive materials."
            dark
          />
          <div className="securityGrid">
            {securityPrinciples.map((item) => (
              <article className="securityItem" key={item.title}>
                <div className="securityIcon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sectionFooterLinks">
            <LinkArrow href={`${STEPS_URL}/security/`}>Stepes Security</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/resources/security-and-compliance/`}>Security and Compliance Resources</LinkArrow>
            <LinkArrow href={`${STEPS_URL}/enterprise-support/`}>Enterprise Support</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section" id="specialized-translation" aria-labelledby="specialized-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Specialized Translation"
            title="Know When Subject Expertise and Additional Review Are Required"
            intro="Language fluency alone does not qualify a linguist for every assignment. Specialized content may require subject knowledge, controlled terminology, industry conventions, client-specific training, additional review, and careful risk management."
          />
          <div className="expertiseList">
            {specialistAreas.map((item) => (
              <article className="expertiseItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <LinkArrow href={item.href}>Explore {item.title}</LinkArrow>
              </article>
            ))}
          </div>
          <div className="competenceNote">
            <h3>Accept Work Within Your Professional Competence</h3>
            <p>
              Represent qualifications accurately, avoid guessing, raise unfamiliar or ambiguous terminology, distinguish objective errors from preferences, follow specialist review requirements, and escalate potentially consequential issues through the approved project channel.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="professional-communication" aria-labelledby="communication-title">
        <div className="shell">
          <div className="communicationLayout">
            <div className="communicationIntro">
              <div className="eyebrow">Professional Collaboration</div>
              <h2 id="communication-title">Clear Communication Is Part of Translation Quality</h2>
              <p>
                Translation projects depend on effective collaboration among linguists, project teams, reviewers, subject-matter experts, engineers, designers, and client stakeholders. Clear and timely communication prevents avoidable errors and keeps multilingual workflows moving.
              </p>
              <div className="professionalStandards">
                <h3>Professional Standards</h3>
                <div className="checkGrid">
                  {["Responsiveness", "Accurate qualifications", "On-time delivery", "Confidentiality", "Respectful communication", "Constructive review"].map((item) => (
                    <div className="checkItem" key={item}>
                      <Icon name="check" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="communicationRows">
              {communicationRows.map((item) => (
                <article className="communicationRow" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="account-support" aria-labelledby="account-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Account and Support"
            title="Manage Your Stepes Translator Account"
            intro="Keep your account accurate and current so Stepes can evaluate your profile for suitable opportunities, communicate with you effectively, and support your work through authorized channels."
            align="center"
          />
          <div className="accountGrid">
            {accountSupport.map((item) => (
              <article className="accountCard" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <LinkArrow href={item.href}>{item.link}</LinkArrow>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blush" id="future-skills" aria-labelledby="skills-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Professional Development"
            title="Build Future-Ready Translation Skills"
            intro="The most successful professional linguists continue developing their language, subject-matter, technology, quality, security, localization, and collaboration skills as multilingual workflows evolve."
          />
          <div className="skillsList">
            {futureSkills.map((item) => (
              <article className="skillItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="related-resources" aria-labelledby="related-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Continue Learning"
            title="Explore More Professional Translation Resources"
            intro="Build your knowledge of modern translation workflows, language technology, quality governance, secure multilingual content operations, and responsible AI-assisted delivery."
            align="center"
          />
          <div className="resourceGrid">
            {relatedResources.map((item) => (
              <article className="resourceCard" key={item.title}>
                <div className="eyebrow">{item.eyebrow}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <LinkArrow href={item.href}>Explore {item.title}</LinkArrow>
              </article>
            ))}
          </div>
          <div className="reviewNote">
            <span><strong>Reviewed by Stepes Quality and Linguist Operations</strong></span>
            <span>Guidance is updated as translation workflows, technology, and professional practices evolve.</span>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="frequently-asked-questions" aria-labelledby="faq-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Translator FAQ"
            title="Frequently Asked Questions for Stepes Linguists"
            intro="Find practical answers about applying to Stepes, accessing your account, evaluating projects, using AI, protecting client content, maintaining quality, and getting support."
            align="center"
          />
          <div className="faqPanel">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `translator-faq-answer-${index}`;
              return (
                <article className="faqItem" key={item.q}>
                  <button
                    className="faqButton"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="faqQuestion">{item.q}</span>
                    <span className="faqToggle" aria-hidden="true" />
                  </button>
                  {isOpen ? (
                    <div className="faqAnswer" id={answerId}>
                      <p>{item.a}</p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="finalSection" aria-labelledby="final-cta-title">
        <div className="shell">
          <div className="finalCta">
            <div className="eyebrow">Your Translator Workspace</div>
            <h2 id="final-cta-title">Access Your Stepes Translator Workspace</h2>
            <p>
              Sign in to review your account and available project information, or learn how to join the Stepes network of professional linguists.
            </p>
            <div className="heroActions">
              <a className="buttonPrimary" href={`${STEPS_URL}/translator-login/`}>
                Translator Login <Arrow />
              </a>
              <a className="buttonSecondary" href={`${STEPS_URL}/become-a-translator/`}>
                Become a Translator <Arrow />
              </a>
            </div>
            <p className="finalSupport">
              Need assistance? <a href={`${STEPS_URL}/translator-support/`}>Contact Linguist Support</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
