import React, { useState } from "react";

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
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    building: <><path d="M4 21V6l8-3 8 3v15"/><path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M9 21v-4h6v4"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    spark: <><path d="m12 3-1.4 4.2a2 2 0 0 1-1.3 1.3L5 10l4.3 1.5a2 2 0 0 1 1.3 1.3L12 17l1.4-4.2a2 2 0 0 1 1.3-1.3L19 10l-4.3-1.5a2 2 0 0 1-1.3-1.3L12 3Z"/><path d="m19 16-.7 2.1a1 1 0 0 1-.6.6L15.5 19l2.2.7a1 1 0 0 1 .6.6L19 22l.7-1.7a1 1 0 0 1 .6-.6l1.7-.7-1.7-.7a1 1 0 0 1-.6-.6L19 16Z"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    video: <><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 19h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v7ZM6 19H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1v7Z"/><path d="M18 19c0 1.1-.9 2-2 2h-3"/></>,
    megaphone: <><path d="m3 11 15-5v12L3 13v-2Z"/><path d="M11.6 16.2 13 21H8l-1.8-6.3"/><path d="M18 9a3 3 0 0 1 0 6"/></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L4.9 16.1a2.1 2.1 0 1 0 3 3l7.4-7.4a4 4 0 0 0 5-5L18 9l-2.4-2.4 2.3-2.3a4 4 0 0 0-3.2 2Z"/></>,
    scale: <><path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7ZM8 21h8"/></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></>,
    cart: <><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    play: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m10 8 6 4-6 4V8Z"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4h13a3 3 0 0 1 3 3v14H6.5A2.5 2.5 0 0 1 4 18.5V4Z"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><path d="M9 9h6v6H9z"/></>,
    term: <><path d="M4 5h16M8 5v14M5 19h6M14 9h6M14 13h6M14 17h4"/></>,
    qa: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11l2 2 4-4"/></>,
    automation: <><path d="M4 7h11M4 17h16M15 7l3-3m-3 3 3 3M9 17l-3-3m3 3-3 3"/></>,
    api: <><path d="M8 4H5a2 2 0 0 0-2 2v3M16 4h3a2 2 0 0 1 2 2v3M8 20H5a2 2 0 0 1-2-2v-3M16 20h3a2 2 0 0 0 2-2v-3"/><path d="m9 9-3 3 3 3M15 9l3 3-3 3"/></>,
    quote: <><path d="M7 8H5a3 3 0 0 0-3 3v5h5v-5H4M18 8h-2a3 3 0 0 0-3 3v5h5v-5h-3"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

const businessSolutions = [
  {
    icon: "building",
    title: "Enterprise Translation Management",
    copy: "Centralize multilingual requests, workflows, language assets, review, delivery, and reporting across your organization.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    icon: "layers",
    title: "Global Content Operations",
    copy: "Turn recurring multilingual work into a connected operating model across teams, systems, markets, and channels.",
    href: "https://www.stepes.com/solutions/global-content-operations/",
  },
  {
    icon: "users",
    title: "AI Translation & Human Review",
    copy: "Combine AI efficiency with professional linguistic review based on content purpose, quality expectations, and business risk.",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    icon: "spark",
    title: "AI-Powered Translation Workflows",
    copy: "Configure AI, translation memory, terminology, human expertise, QA, approvals, and automation around each content stream.",
    href: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  },
  {
    icon: "globe",
    title: "Website Localization",
    copy: "Translate and localize websites, CMS content, digital journeys, multilingual SEO, and continuous web updates.",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    icon: "code",
    title: "Software & App Localization",
    copy: "Support UI strings, apps, SaaS products, structured resource files, release cycles, engineering, and in-context QA.",
    href: "https://www.stepes.com/software-localization-services/",
  },
  {
    icon: "video",
    title: "Multimedia Localization",
    copy: "Coordinate subtitles, captions, voiceover, on-screen text, media engineering, and multilingual production.",
    href: "https://www.stepes.com/multimedia-translation-services/",
  },
  {
    icon: "headset",
    title: "Multilingual Customer Support",
    copy: "Translate help centers, knowledge bases, support content, and recurring service communications for global customers.",
    href: "https://www.stepes.com/solutions/multilingual-customer-support/",
  },
];

const teamSolutions = [
  {
    icon: "globe",
    title: "Localization Teams",
    copy: "Manage multilingual programs, recurring releases, translation assets, reviewers, quality, and enterprise delivery with less operational overhead.",
    href: "https://www.stepes.com/solutions/localization-teams/",
  },
  {
    icon: "megaphone",
    title: "Marketing Teams",
    copy: "Localize campaigns, websites, product launches, multimedia, brand content, and multilingual search experiences without losing the message.",
    href: "https://www.stepes.com/solutions/marketing-teams/",
  },
  {
    icon: "wrench",
    title: "Product & Engineering Teams",
    copy: "Connect software strings, product content, technical documentation, release workflows, localization engineering, and QA.",
    href: "https://www.stepes.com/solutions/product-engineering-localization/",
  },
  {
    icon: "scale",
    title: "Legal Teams",
    copy: "Translate contracts, policies, compliance content, investigations, and business-critical legal material through secure, expert-led workflows.",
    href: "https://www.stepes.com/solutions/legal-teams/",
  },
  {
    icon: "heart",
    title: "Life Sciences Teams",
    copy: "Support clinical, regulatory, medical, product, quality, training, and patient-facing content with specialized linguistic expertise.",
    href: "https://www.stepes.com/life-sciences-translation-services/",
  },
  {
    icon: "cart",
    title: "Procurement Teams",
    copy: "Standardize services, pricing, supplier governance, quality expectations, reporting, and enterprise translation visibility.",
    href: "https://www.stepes.com/solutions/procurement-teams/",
  },
];

const contentSolutions = [
  {
    icon: "file",
    title: "Documents",
    copy: "Reports, presentations, brochures, policies, contracts, PDFs, Office files, and business documents.",
    href: "https://www.stepes.com/document-translation-services/",
  },
  {
    icon: "globe",
    title: "Websites",
    copy: "Corporate sites, ecommerce, landing pages, CMS content, forms, metadata, SEO, and continuous updates.",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    icon: "screen",
    title: "Software Strings",
    copy: "Applications, SaaS, interfaces, menus, notifications, resource files, and recurring product releases.",
    href: "https://www.stepes.com/software-localization-services/",
  },
  {
    icon: "play",
    title: "Videos & Subtitles",
    copy: "Marketing video, training media, subtitles, captions, voiceover, scripts, and on-screen content.",
    href: "https://www.stepes.com/video-translation-services/",
  },
  {
    icon: "book",
    title: "Training Content",
    copy: "eLearning, LMS materials, onboarding, compliance training, product education, assessments, and multimedia learning.",
    href: "https://www.stepes.com/elearning-training-translation-services/",
  },
  {
    icon: "scale",
    title: "Legal & Compliance Content",
    copy: "Contracts, policies, legal notices, regulatory materials, corporate governance, and compliance communications.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    icon: "wrench",
    title: "Technical Manuals",
    copy: "User manuals, installation guides, operating instructions, engineering documentation, safety content, and specifications.",
    href: "https://www.stepes.com/technical-translation-services/",
  },
];

const workflowOptions = [
  {
    label: "AI Translation + Automated Controls",
    fit: "High-volume, lower-risk, informational, internal, or time-sensitive content",
    copy: "Accelerate multilingual production with AI, translation memory, approved terminology, file validation, and automated quality checks. Add targeted professional review when the content or risk requires it.",
  },
  {
    label: "AI Translation + Professional Human Review",
    fit: "Websites, product content, training, support, knowledge bases, and customer-facing communications",
    copy: "Use AI and reusable language assets to accelerate the first stage, then have qualified linguists review meaning, fluency, terminology, tone, context, and audience fit.",
  },
  {
    label: "Professional Translation + Independent Review",
    fit: "Legal, medical, regulated, financial, technical, safety-related, and publication-critical content",
    copy: "Assign qualified subject-matter linguists and add independent review, specialist validation, terminology control, structured QA, and stakeholder approval as the content requires.",
  },
  {
    label: "Continuous Localization + Workflow Automation",
    fit: "Software, websites, product platforms, knowledge bases, help centers, and frequently updated digital content",
    copy: "Connect recurring content through APIs, structured files, repositories, or automated intake so new and modified content follows the right translation, review, QA, and approval path.",
  },
];

const workflowStages = [
  { title: "Content", copy: "Bring files, recurring content, or connected digital content into the translation workflow." },
  { title: "Language Intelligence", copy: "Apply approved translation memory, terminology, style guidance, reference content, and AI-assisted language technology." },
  { title: "Translation & Review", copy: "Route content through the appropriate AI, professional translation, and human review model." },
  { title: "Quality & Approval", copy: "Validate completeness, terminology, language, formatting, technical elements, context, and stakeholder requirements." },
  { title: "Global Delivery", copy: "Return approved multilingual content to the required files, systems, repositories, or publishing workflows." },
  { title: "Improve", copy: "Capture approved translations, terminology decisions, reviewer feedback, and project learnings for future reuse." },
];

const faqs = [
  {
    q: "What are enterprise translation solutions?",
    a: "Enterprise translation solutions combine professional language services, translation technology, reusable language assets, workflow automation, quality controls, project management, and delivery processes to support multilingual content across an organization. Unlike a one-time translation service, an enterprise solution can coordinate multiple teams, content types, languages, review requirements, and recurring workflows through a more consistent operating model.",
  },
  {
    q: "How does Stepes use AI for translation?",
    a: "Stepes uses AI as part of a managed translation workflow rather than treating AI output as the same solution for every content type. Depending on the content, AI can support translation, automation, terminology application, quality checks, routing, and other workflow activities. Professional linguists can review or validate translations when the audience, complexity, business risk, or quality requirements call for human expertise.",
  },
  {
    q: "Can Stepes combine AI translation with human review?",
    a: "Yes. Stepes supports AI translation with professional human review as well as expert-led professional translation and independent review. The appropriate workflow can be selected according to the content's purpose, audience, subject matter, visibility, business impact, quality expectations, timeline, and budget.",
  },
  {
    q: "Does every translation need human review?",
    a: "No. The appropriate level of human review depends on how the translated content will be used. Routine or lower-risk informational content may be suitable for more automated workflows, while customer-facing, brand-sensitive, legal, regulated, technical, safety-related, or business-critical content may require professional linguistic review or additional specialist validation.",
  },
  {
    q: "What types of content can Stepes translate and localize?",
    a: "Stepes supports multilingual content across documents, websites, software and apps, marketing materials, video and multimedia, training and eLearning, legal and compliance documentation, technical manuals, customer-support content, and other enterprise communications. Different content formats can share translation memory, terminology, quality standards, and workflow infrastructure while still following the translation path appropriate to their purpose.",
  },
  {
    q: "Can Stepes support continuous localization?",
    a: "Yes. Stepes can support recurring translation workflows for software, websites, product content, knowledge bases, customer-support systems, and other frequently updated digital content. APIs, structured files, repositories, and automated workflows can help reduce manual handoffs while translation memory, terminology, review, QA, and approval processes maintain continuity across releases.",
  },
  {
    q: "How does Stepes maintain translation consistency?",
    a: "Stepes combines translation memory, approved terminology, glossaries, style guidance, qualified language professionals, automated quality checks, professional review, and structured feedback processes. Approved translations and terminology can be reused across projects and updates, helping organizations maintain greater consistency as multilingual content grows.",
  },
  {
    q: "Can different departments use different translation workflows?",
    a: "Yes. Marketing content may need brand and creative review. Product teams may require continuous software localization and in-context QA. Legal teams may need specialist linguists and additional review. Internal content may benefit from greater AI automation. Stepes can maintain shared enterprise governance while allowing the workflow to change according to the content and business requirement.",
  },
];

const styles = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #A71954;
    --stepes-burgundy: #7A1542;
    --stepes-blush: #FDF2F7;
    --stepes-pink-light: #F2A7C6;
    --ink: #172033;
    --body: #465266;
    --muted: #687487;
    --line: #E2E7ED;
    --soft: #F5F7F9;
    --dark: #141A26;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .solutions-page {
    width: 100%;
    overflow-x: hidden;
    color: var(--ink);
    background: #fff;
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .solutions-page a { color: inherit; }
  .solutions-page button { font: inherit; }
  .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  .section-dense { padding-top: 80px; padding-bottom: 80px; }
  .section-soft { background: var(--soft); }
  .section-dark { background: var(--dark); color: #fff; }

  .eyebrow {
    margin: 0 0 16px;
    color: var(--stepes-magenta);
    font-size: 11px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
  }
  .section-dark .eyebrow { color: var(--stepes-pink-light); }

  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3 { color: var(--ink); font-weight: 600; }
  .section-dark h1, .section-dark h2, .section-dark h3 { color: #fff; }
  h1 { font-size: 48px; line-height: 1.04; letter-spacing: -0.045em; margin-bottom: 24px; }
  h2 { font-size: 36px; line-height: 1.08; letter-spacing: -0.035em; margin-bottom: 22px; }
  h3 { font-size: 24px; line-height: 1.18; letter-spacing: -0.025em; margin-bottom: 12px; }
  p { color: var(--body); font-size: 16px; line-height: 1.75; }
  .section-dark p { color: #C8D0DC; }
  .body-lg { font-size: 18px; line-height: 1.72; }
  .heading-center { text-align: center; }
  .heading-center .eyebrow, .heading-center h2, .heading-center p { margin-left: auto; margin-right: auto; }
  .intro-max { max-width: 810px; }
  .body-max { max-width: 740px; }
  .position-copy, .solution-row > div, .team-row > div, .content-row > div, .workflow-option > *, .pillar, .bridge-panel, .cta-panel > * { min-width: 0; }

  .btn {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 12px 22px;
    border-radius: 999px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    transition: background-color .2s ease, border-color .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease;
  }
  .btn-primary,
  .btn-primary:link,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible {
    color: #fff !important;
  }
  .btn-primary svg, .btn-primary svg * { stroke: #fff !important; }
  .btn-primary { background: var(--stepes-magenta); border: 1px solid var(--stepes-magenta); box-shadow: 0 10px 26px rgba(193,29,99,.16); }
  .btn-primary:hover { background: var(--stepes-magenta-dark); border-color: var(--stepes-magenta-dark); transform: translateY(-1px); }
  .btn-secondary { background: #fff; border: 1px solid #D8DEE6; color: #273143; }
  .btn-secondary:hover { border-color: #B9C1CC; transform: translateY(-1px); }
  .btn:focus-visible, .editorial-link:focus-visible, .tab-button:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 44px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link, .finder-link { overflow-wrap: anywhere; }
  .editorial-link:hover svg { transform: translateX(3px); }

  .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #FCF8FA 100%); }
  .hero-copy { text-align: center; max-width: 960px; margin: 0 auto; }
  .hero-copy h1 { max-width: 920px; margin-left: auto; margin-right: auto; }
  .hero-copy .body-lg { max-width: 805px; margin-left: auto; margin-right: auto; }
  .hero-actions { margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .hero-visual { margin: 64px auto 0; max-width: 1100px; position: relative; }
  .hero-visual-panel { border: 1px solid #DEE4EA; border-radius: 30px; background: rgba(255,255,255,.92); padding: 38px 40px; box-shadow: 0 20px 56px rgba(22,32,51,.07); }
  .hero-flow { display: grid; grid-template-columns: 1fr 68px 1.2fr 68px 1fr; align-items: center; gap: 0; }
  .hero-stack { display: grid; gap: 10px; }
  .hero-content-token { display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 12px 14px; border: 1px solid #E2E6EC; border-radius: 16px; background: #fff; color: #3E4858; font-size: 16px; }
  .hero-content-token svg { color: #5C6676; flex: 0 0 auto; }
  .hero-engine { border-radius: 24px; background: #171E2B; color: #fff; padding: 28px; min-height: 248px; display: flex; flex-direction: column; justify-content: center; }
  .hero-engine-kicker { color: var(--stepes-pink-light); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 15px; }
  .hero-engine-title { color: #fff; font-size: 24px; font-weight: 600; line-height: 1.2; margin-bottom: 20px; }
  .hero-engine-list { display: grid; gap: 10px; }
  .hero-engine-row { display: flex; gap: 10px; align-items: center; color: #D7DDE6; font-size: 16px; }
  .hero-engine-row svg { color: var(--stepes-pink-light); flex: 0 0 auto; }
  .flow-arrow { display: flex; align-items: center; justify-content: center; color: #9AA5B3; }
  .hero-market-stack { display: grid; gap: 12px; }
  .market-output { border: 1px solid #E0E5EB; border-radius: 18px; padding: 14px 15px; background: #fff; }
  .market-output strong { display: block; color: #253044; font-size: 16px; font-weight: 600; margin-bottom: 4px; }
  .market-output span { color: #687487; font-size: 14px; line-height: 1.5; }

  .position-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 76px; align-items: start; }
  .position-copy { max-width: 690px; }
  .feature-lines { border-top: 1px solid var(--line); }
  .feature-line { display: grid; grid-template-columns: 150px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .feature-line strong { font-size: 18px; line-height: 1.35; font-weight: 600; color: #202A3B; }
  .feature-line p { margin-bottom: 0; }

  .finder-panel { margin-top: 42px; border: 1px solid #DEE4EA; border-radius: 30px; background: #fff; overflow: hidden; box-shadow: 0 16px 44px rgba(22,32,51,.05); }
  .finder-tabs { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--line); background: #FAFBFC; }
  .tab-button { border: 0; border-right: 1px solid var(--line); background: transparent; min-height: 68px; padding: 16px 20px; color: #4C586A; font-size: 16px; font-weight: 600; cursor: pointer; position: relative; }
  .tab-button:last-child { border-right: 0; }
  .tab-button[aria-selected="true"] { color: #1F293A; background: #fff; }
  .tab-button[aria-selected="true"]::after { content: ""; position: absolute; left: 28px; right: 28px; bottom: -1px; height: 3px; background: var(--stepes-magenta); border-radius: 3px 3px 0 0; }
  .finder-content { padding: 28px 32px 32px; }
  .finder-intro { max-width: 780px; margin-bottom: 22px; }
  .finder-links { display: flex; flex-wrap: wrap; gap: 10px 18px; }
  .finder-link { min-height: 44px; display: inline-flex; align-items: center; gap: 7px; color: var(--stepes-magenta) !important; font-size: 16px; font-weight: 600; text-decoration: none; }

  .solution-list-panel { margin-top: 48px; border-top: 1px solid var(--line); }
  .solution-list-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 58px; }
  .solution-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .solution-icon { width: 48px; height: 48px; border-radius: 16px; background: #F8EEF3; color: var(--stepes-magenta); display: flex; align-items: center; justify-content: center; }
  .solution-row h3 { font-size: 20px; margin-bottom: 8px; }
  .solution-row p { margin-bottom: 7px; }

  .team-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 78px; align-items: start; }
  .team-heading { position: sticky; top: 32px; }
  .team-list { border-top: 1px solid var(--line); }
  .team-row { display: grid; grid-template-columns: 44px minmax(0,1fr) auto; gap: 18px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .team-row-icon { width: 44px; height: 44px; border-radius: 14px; border: 1px solid #E0E5EB; background: #fff; color: #556173; display: flex; align-items: center; justify-content: center; }
  .team-row h3 { font-size: 20px; margin-bottom: 7px; }
  .team-row p { margin-bottom: 0; }
  .team-row .editorial-link { white-space: nowrap; margin-left: 14px; }

  .content-layout { display: grid; grid-template-columns: .92fr 1.08fr; gap: 74px; align-items: center; }
  .content-visual { border: 1px solid rgba(255,255,255,.12); border-radius: 30px; background: rgba(255,255,255,.035); padding: 34px; min-height: 500px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
  .content-stream-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .content-stream-token { min-height: 54px; display: flex; align-items: center; gap: 10px; padding: 12px 14px; border: 1px solid rgba(255,255,255,.14); border-radius: 15px; background: rgba(255,255,255,.065); color: #F4F6F8; font-size: 16px; line-height: 1.35; }
  .content-stream-token svg { color: var(--stepes-pink-light); flex: 0 0 auto; }
  .content-flow-line { width: 1px; height: 26px; margin: 0 auto; background: rgba(242,167,198,.34); }
  .content-core { display: flex; align-items: center; gap: 15px; border-radius: 22px; background: #fff; color: #1F293A; padding: 22px 24px; box-shadow: 0 18px 44px rgba(0,0,0,.16); }
  .content-core svg { color: var(--stepes-magenta); flex: 0 0 auto; }
  .content-core strong { display: block; font-size: 18px; line-height: 1.3; font-weight: 600; margin-bottom: 4px; }
  .content-core span { display: block; color: #687487; font-size: 16px; line-height: 1.5; }
  .content-output-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .content-output-token { min-height: 50px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.14); border-radius: 15px; background: rgba(255,255,255,.065); color: #F4F6F8; font-size: 16px; line-height: 1.35; font-weight: 600; text-align: center; }
  .content-list { border-top: 1px solid rgba(255,255,255,.14); }
  .content-row { display: grid; grid-template-columns: 42px 1fr auto; gap: 16px; align-items: center; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
  .content-row-icon { color: var(--stepes-pink-light); display: flex; align-items: center; justify-content: center; }
  .content-row h3 { color: #fff; font-size: 18px; margin-bottom: 5px; }
  .content-row p { margin-bottom: 0; font-size: 16px; line-height: 1.62; }
  .content-row .editorial-link { color: var(--stepes-pink-light) !important; white-space: nowrap; }

  .workflow-context { max-width: 840px; margin: 30px auto 0; text-align: left; }
  .workflow-options { margin-top: 34px; border-top: 1px solid var(--line); }
  .workflow-option { display: grid; grid-template-columns: .75fr .95fr 1.3fr; gap: 34px; align-items: start; padding: 30px 0; border-bottom: 1px solid var(--line); }
  .workflow-option h3 { font-size: 20px; margin-bottom: 0; }
  .workflow-fit { color: #273143; font-size: 16px; line-height: 1.6; font-weight: 600; }
  .workflow-option p { margin-bottom: 0; }

  .three-pillars { border: 1px solid #E0E5EB; border-radius: 30px; overflow: hidden; display: grid; grid-template-columns: repeat(3,1fr); box-shadow: 0 16px 44px rgba(22,32,51,.05); }
  .pillar { padding: 34px 34px 36px; border-right: 1px solid #E0E5EB; background: #fff; }
  .pillar:last-child { border-right: 0; }
  .pillar-icon { width: 50px; height: 50px; border-radius: 16px; background: var(--stepes-blush); color: var(--stepes-magenta); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
  .pillar h3 { font-size: 24px; }
  .pillar ul { list-style: none; padding: 0; margin: 20px 0 0; display: grid; gap: 10px; }
  .pillar li { display: flex; gap: 10px; color: #4C586A; font-size: 16px; line-height: 1.55; }
  .pillar li svg { color: var(--stepes-magenta); margin-top: 2px; flex: 0 0 auto; }

  .workflow-roadmap { margin-top: 46px; display: grid; grid-template-columns: repeat(6, 1fr); position: relative; }
  .workflow-roadmap::before { content: ""; position: absolute; top: 23px; left: 5%; right: 5%; height: 1px; background: #D8DEE6; }
  .workflow-stage { position: relative; padding-right: 22px; }
  .workflow-number { position: relative; z-index: 1; width: 46px; height: 46px; border-radius: 50%; border: 1px solid #D8DEE6; background: #fff; display: flex; align-items: center; justify-content: center; color: var(--stepes-magenta); font-size: 14px; font-weight: 600; margin-bottom: 20px; }
  .workflow-stage h3 { font-size: 18px; margin-bottom: 8px; }
  .workflow-stage p { font-size: 16px; line-height: 1.58; margin-bottom: 0; }
  .platform-links { margin-top: 40px; display: flex; flex-wrap: wrap; gap: 10px 22px; }

  .proof-grid { margin-top: 42px; display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .proof-item { padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-item strong { display: block; color: #1F293A; font-size: 20px; line-height: 1.35; font-weight: 600; margin-bottom: 8px; }
  .proof-item p { margin-bottom: 0; }
  .proof-item.prominent { background: var(--stepes-blush); }
  .proof-item.prominent strong { color: #7A1542; }
  .proof-links { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 8px 22px; }

  .bridge-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; margin-top: 42px; }
  .bridge-panel { border: 1px solid #E0E5EB; border-radius: 24px; padding: 30px; background: #fff; }
  .bridge-label { color: var(--stepes-magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 15px; }
  .bridge-panel h3 { margin-bottom: 12px; }
  .bridge-panel p { margin-bottom: 16px; }

  .faq-section-heading { text-align: left; }
  .faq-section-heading .eyebrow, .faq-section-heading h2, .faq-section-heading p { margin-left: 0; margin-right: 0; }
  .faq-panel { margin-top: 42px; border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-button { width: 100%; display: grid; grid-template-columns: 1fr 40px; gap: 20px; align-items: center; background: transparent; border: 0; padding: 24px 0; text-align: left; cursor: pointer; color: #202A3B; font-size: 18px; line-height: 1.45; font-weight: 600; }
  .faq-control { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #D8DEE6; display: flex; align-items: center; justify-content: center; color: var(--stepes-magenta); font-size: 22px; font-weight: 400; transition: transform .2s ease, background .2s ease; }
  .faq-button[aria-expanded="true"] .faq-control { transform: rotate(45deg); background: var(--stepes-blush); }
  .faq-answer { max-width: 840px; padding: 0 54px 24px 0; }
  .faq-answer p { margin-bottom: 0; }

  .final-cta { background: var(--stepes-blush); padding: 88px 0; }
  .cta-panel { border: 1px solid #EAD5DF; border-radius: 30px; background: #fff; padding: 58px 62px; display: grid; grid-template-columns: 1.18fr .82fr; gap: 64px; align-items: center; box-shadow: 0 18px 48px rgba(71,27,48,.06); }
  .cta-panel h2 { margin-bottom: 18px; }
  .cta-panel p { margin-bottom: 0; max-width: 720px; }
  .cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
  .cta-actions .btn { width: 100%; }

  @media (max-width: 1100px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-flow { grid-template-columns: 1fr 48px 1.15fr 48px 1fr; }
    .team-layout, .position-grid, .content-layout { gap: 54px; }
    .workflow-roadmap { grid-template-columns: repeat(3,1fr); gap: 36px 0; }
    .workflow-roadmap::before { display: none; }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding-top: 80px; padding-bottom: 80px; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero { padding: 92px 0 80px; }
    .hero-flow { grid-template-columns: 1fr; gap: 18px; }
    .flow-arrow { transform: rotate(90deg); min-height: 30px; }
    .hero-stack, .hero-market-stack { grid-template-columns: repeat(2,1fr); }
    .hero-engine { min-height: 0; }
    .position-grid, .team-layout, .content-layout { grid-template-columns: 1fr; }
    .position-grid > .heading-center-tablet, .team-heading { text-align: center; max-width: 760px; margin-left: auto; margin-right: auto; position: static; }
    .content-heading-tablet { text-align: left; max-width: 760px; position: static; }
    .workflow-section-heading { text-align: left; }
    .position-grid > .heading-center-tablet .eyebrow,
    .position-grid > .heading-center-tablet h2,
    .team-heading .eyebrow,
    .team-heading h2 { margin-left: auto; margin-right: auto; }
    .workflow-section-heading .eyebrow,
    .workflow-section-heading h2,
    .workflow-section-heading p { margin-left: 0; margin-right: 0; }
    .team-heading .body-lg, .team-heading .team-support, .content-heading-tablet .body-lg, .content-heading-tablet .content-support { text-align: left; }
    .solution-list-grid { column-gap: 38px; }
    .team-row { grid-template-columns: 44px 1fr; }
    .team-row .editorial-link { grid-column: 2; margin-left: 0; justify-self: start; }
    .content-layout { align-items: start; }
    .content-visual { min-height: 480px; max-width: 660px; width: 100%; margin: 0 auto; }
    .workflow-option { grid-template-columns: 1fr 1fr; }
    .workflow-option > p { grid-column: 1 / -1; }
    .three-pillars { grid-template-columns: 1fr; }
    .pillar { border-right: 0; border-bottom: 1px solid #E0E5EB; }
    .pillar:last-child { border-bottom: 0; }
    .proof-grid { grid-template-columns: repeat(2,1fr); }
    .bridge-grid { grid-template-columns: 1fr; }
    .cta-panel { grid-template-columns: 1fr; gap: 32px; }
    .cta-actions { flex-direction: row; }
  }

  @media (max-width: 800px) {
    .solution-list-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section, .section-dense { padding-top: 68px; padding-bottom: 68px; }
    .hero { padding: 76px 0 68px; }
    h1 { font-size: 38px; line-height: 1.06; }
    h2 { font-size: 30px; line-height: 1.1; }
    h3 { font-size: 20px; }
    .body-lg { font-size: 18px; }
    .heading-center-mobile { text-align: center; }
    .heading-center-mobile .eyebrow,
    .heading-center-mobile h2,
    .heading-center-mobile > .section-intro { margin-left: auto; margin-right: auto; }
    .heading-center-mobile.workflow-section-heading,
    .heading-center-mobile.faq-section-heading { text-align: left; }
    .heading-center-mobile.workflow-section-heading .eyebrow,
    .heading-center-mobile.workflow-section-heading h2,
    .heading-center-mobile.workflow-section-heading > .section-intro,
    .heading-center-mobile.faq-section-heading .eyebrow,
    .heading-center-mobile.faq-section-heading h2,
    .heading-center-mobile.faq-section-heading > .section-intro { margin-left: 0; margin-right: 0; }
    .team-heading .body-lg, .team-heading .team-support, .content-heading-tablet .body-lg, .content-heading-tablet .content-support { text-align: left; }
    .hero-actions { flex-direction: column; }
    .hero-actions .btn { width: 100%; }
    .hero-visual { margin-top: 44px; }
    .hero-visual-panel { padding: 22px; border-radius: 24px; }
    .hero-engine { padding: 24px; }
    .feature-line { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
    .finder-panel { border-radius: 24px; margin-top: 32px; }
    .finder-tabs { grid-template-columns: 1fr; }
    .tab-button { min-height: 54px; border-right: 0; border-bottom: 1px solid var(--line); text-align: left; }
    .tab-button:last-child { border-bottom: 0; }
    .tab-button[aria-selected="true"]::after { top: 12px; bottom: 12px; left: 0; right: auto; width: 3px; height: auto; border-radius: 0 3px 3px 0; }
    .finder-content { padding: 24px 20px 26px; }
    .finder-links { display: grid; gap: 4px; }
    .solution-list-grid { grid-template-columns: 1fr; }
    .solution-row { grid-template-columns: 44px 1fr; gap: 15px; }
    .solution-icon { width: 44px; height: 44px; }
    .team-row { padding: 23px 0; }
    .team-row p { line-height: 1.67; }
    .content-visual { min-height: 0; padding: 24px; }
    .content-stream-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .content-core { padding: 20px; }
    .content-output-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .content-row { grid-template-columns: 36px 1fr; gap: 12px; align-items: start; }
    .content-row .editorial-link { grid-column: 2; justify-self: start; }
    .workflow-option { grid-template-columns: 1fr; gap: 10px; padding: 25px 0; }
    .workflow-option > p { grid-column: auto; }
    .workflow-fit { margin-top: 2px; }
    .pillar { padding: 28px 24px 30px; }
    .workflow-roadmap { grid-template-columns: 1fr; gap: 0; margin-top: 34px; }
    .workflow-stage { display: grid; grid-template-columns: 46px 1fr; gap: 16px; padding: 0 0 28px; }
    .workflow-number { margin-bottom: 0; }
    .workflow-stage::before { content: ""; position: absolute; left: 22px; top: 46px; bottom: 0; width: 1px; background: #D8DEE6; }
    .workflow-stage:last-child::before { display: none; }
    .workflow-stage h3 { margin-top: 2px; }
    .workflow-stage p { grid-column: 2; margin-top: 0; }
    .proof-grid { grid-template-columns: 1fr; }
    .bridge-panel { padding: 26px 24px; }
    .faq-button { font-size: 17px; padding: 22px 0; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 68px 0; }
    .cta-panel { padding: 36px 24px; border-radius: 24px; }
    .cta-actions { flex-direction: column; }
  }

  @media (max-width: 360px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    h1 { font-size: 38px; }
    .hero-visual-panel { padding: 18px; }
    .hero-stack, .hero-market-stack { grid-template-columns: 1fr; }
    .content-visual { padding: 20px; }
    .content-stream-grid, .content-output-grid { grid-template-columns: 1fr; }
    .content-stream-token { min-height: 72px; padding: 10px; flex-direction: column; justify-content: center; gap: 6px; text-align: center; }
    .content-core { align-items: flex-start; }
    .cta-panel { padding: 30px 20px; }
  }
`;

function SectionHeading({ eyebrow = null, title, intro = null, className = "" }) {
  return (
    <div className={`heading-center heading-center-mobile ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="body-lg intro-max section-intro">{intro}</p> : null}
    </div>
  );
}

export default function StepesSolutions56Wireframe() {
  const [finderTab, setFinderTab] = useState("business");
  const [openFaq, setOpenFaq] = useState(0);

  const finderData = {
    business: {
      intro: "Start with the business or operational challenge you need to solve.",
      items: businessSolutions,
    },
    team: {
      intro: "Start with the team responsible for the content, workflow, or global program.",
      items: teamSolutions,
    },
    content: {
      intro: "Start with the content experience you need to translate, localize, review, and deliver.",
      items: contentSolutions,
    },
  };

  return (
    <main className="solutions-page">
      <style>{styles}</style>

      <section className="hero" id="top">
        <div className="shell">
          <div className="hero-copy">
            <p className="eyebrow">Translation Solutions</p>
            <h1>AI-Powered Translation Solutions for Global Business</h1>
            <p className="body-lg">
              Turn global content into the right multilingual experience with translation solutions built around your business, your content, and your quality requirements. Stepes combines AI-powered translation, professional human expertise, translation memory, terminology, automation, and quality assurance in connected workflows that help global teams move faster while maintaining the control their content requires.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">
                Talk to an Expert <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/solutions/#solution-finder">
                Explore Solutions
              </a>
            </div>
          </div>

          <div className="hero-visual" role="img" aria-label="Illustrative Stepes global content workflow">
            <div className="hero-visual-panel">
              <div className="hero-flow">
                <div className="hero-stack">
                  <div className="hero-content-token"><Icon name="globe" /> Website & Digital</div>
                  <div className="hero-content-token"><Icon name="code" /> Software & Apps</div>
                  <div className="hero-content-token"><Icon name="file" /> Documents</div>
                  <div className="hero-content-token"><Icon name="video" /> Video & Media</div>
                </div>
                <div className="flow-arrow"><Icon name="arrow" size={26} /></div>
                <div className="hero-engine">
                  <div className="hero-engine-kicker">Stepes Translation Workflow</div>
                  <div className="hero-engine-title">The right workflow for every content stream</div>
                  <div className="hero-engine-list">
                    <div className="hero-engine-row"><Icon name="spark" size={18} /> AI Translation</div>
                    <div className="hero-engine-row"><Icon name="memory" size={18} /> Translation Memory</div>
                    <div className="hero-engine-row"><Icon name="term" size={18} /> Terminology Control</div>
                    <div className="hero-engine-row"><Icon name="users" size={18} /> Professional Review</div>
                    <div className="hero-engine-row"><Icon name="qa" size={18} /> Quality Assurance</div>
                  </div>
                </div>
                <div className="flow-arrow"><Icon name="arrow" size={26} /></div>
                <div className="hero-market-stack">
                  <div className="market-output"><strong>Europe</strong><span>Localized · QA Checked · Ready</span></div>
                  <div className="market-output"><strong>Asia-Pacific</strong><span>Localized · QA Checked · Ready</span></div>
                  <div className="market-output"><strong>Americas</strong><span>Localized · QA Checked · Ready</span></div>
                  <div className="market-output"><strong>Middle East</strong><span>Localized · QA Checked · Ready</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell position-grid">
          <div className="heading-center-tablet heading-center-mobile">
            <h2>One Translation Partner. Different Content. The Right Workflow.</h2>
          </div>
          <div className="position-copy">
            <p className="body-lg">
              A marketing campaign, software release, legal agreement, technical manual, training course, and internal knowledge article do not serve the same purpose—or carry the same business risk. They should not automatically follow the same translation process.
            </p>
            <p>
              Stepes builds translation and localization solutions around how your content will actually be used. High-volume informational content can benefit from greater AI automation. Customer-facing content may require professional linguistic review. Legal, regulated, safety-related, and other business-critical materials may call for specialized translators, independent review, and additional quality controls.
            </p>
            <p>
              Whatever the content, Stepes brings the technology, professional expertise, language assets, workflow automation, and project management together in one coordinated solution.
            </p>
            <div className="feature-lines">
              <div className="feature-line"><strong>Content-Aware</strong><p>Match the workflow to the content's audience, purpose, complexity, visibility, and business impact.</p></div>
              <div className="feature-line"><strong>AI + Human</strong><p>Use AI where it improves efficiency and professional expertise where linguistic judgment matters.</p></div>
              <div className="feature-line"><strong>Connected</strong><p>Coordinate translation, review, approval, QA, and delivery through one managed workflow.</p></div>
              <div className="feature-line"><strong>Scalable</strong><p>Support individual projects, recurring content streams, and enterprise-wide multilingual operations.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="solution-finder">
        <div className="shell">
          <SectionHeading
            title="Find the Right Translation Solution"
            intro="Different organizations come to translation with different starting points. Explore Stepes solutions by what you need to accomplish, who manages the content, or what type of content you need to translate."
          />
          <div className="finder-panel">
            <div className="finder-tabs" role="tablist" aria-label="Solution pathways">
              <button id="finder-tab-business" type="button" className="tab-button" role="tab" aria-controls="finder-panel" aria-selected={finderTab === "business"} onClick={() => setFinderTab("business")}>By Business Need</button>
              <button id="finder-tab-team" type="button" className="tab-button" role="tab" aria-controls="finder-panel" aria-selected={finderTab === "team"} onClick={() => setFinderTab("team")}>By Team</button>
              <button id="finder-tab-content" type="button" className="tab-button" role="tab" aria-controls="finder-panel" aria-selected={finderTab === "content"} onClick={() => setFinderTab("content")}>By Content Type</button>
            </div>
            <div className="finder-content" id="finder-panel" role="tabpanel" aria-labelledby={`finder-tab-${finderTab}`}>
              <p className="finder-intro">{finderData[finderTab].intro}</p>
              <div className="finder-links">
                {finderData[finderTab].items.map((item) => (
                  <a key={item.title} className="finder-link" href={item.href}>
                    {item.title} <Icon name="arrow" size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="business-need">
        <div className="shell">
          <SectionHeading
            title="Solutions for Every Global Content Challenge"
            intro="Global companies are producing multilingual content across more channels, systems, markets, and business functions. Stepes helps turn that complexity into a coordinated operating model so you can solve today's challenge and scale as your global content needs grow."
          />
          <div className="solution-list-panel">
            <div className="solution-list-grid">
              {businessSolutions.map((item) => (
                <div className="solution-row" key={item.title}>
                  <div className="solution-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <a className="editorial-link" href={item.href}>Explore {item.title} <Icon name="arrow" size={15} /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="teams">
        <div className="shell team-layout">
          <div className="team-heading heading-center-mobile">
            <h2>Built for the Teams Driving Global Business</h2>
            <p className="body-lg">
              Global content crosses organizational boundaries. Stepes gives each team the translation solution it needs while keeping language assets, quality standards, workflows, and multilingual operations better connected across the enterprise.
            </p>
            <p className="team-support">
              Marketing teams prioritize brand and launch timing. Product and engineering teams work around releases and context. Legal and life sciences teams require disciplined terminology and risk-appropriate review. Procurement teams need commercial control, governance, and visibility.
            </p>
          </div>
          <div className="team-list">
            {teamSolutions.map((item) => (
              <div className="team-row" key={item.title}>
                <div className="team-row-icon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <a className="editorial-link" href={item.href}>Explore <Icon name="arrow" size={15} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="content-types">
        <div className="shell">
          <div className="content-layout">
            <div>
              <div className="content-heading-tablet">
                <h2>Every Content Type Has Its Own Localization Requirements</h2>
                <p className="body-lg">
                  Global content now moves through websites, software products, video platforms, learning systems, customer-support environments, publishing workflows, and specialized enterprise applications.
                </p>
                <p className="content-support">
                  Stepes combines the right linguistic expertise, technology, engineering, and quality controls for each content type while allowing shared terminology and approved translations to remain reusable across the business.
                </p>
              </div>
              <div className="content-visual" role="img" aria-label="Connected multilingual content ecosystem using shared language assets">
                <div className="content-stream-grid">
                  <div className="content-stream-token"><Icon name="file" size={19} /> Documents</div>
                  <div className="content-stream-token"><Icon name="globe" size={19} /> Websites</div>
                  <div className="content-stream-token"><Icon name="screen" size={19} /> Software</div>
                  <div className="content-stream-token"><Icon name="play" size={19} /> Video</div>
                  <div className="content-stream-token"><Icon name="book" size={19} /> Training</div>
                  <div className="content-stream-token"><Icon name="wrench" size={19} /> Technical</div>
                </div>
                <div className="content-flow-line" aria-hidden="true"></div>
                <div className="content-core">
                  <Icon name="layers" size={30} />
                  <div>
                    <strong>Shared Language Layer</strong>
                    <span>Translation memory · Terminology · Quality rules</span>
                  </div>
                </div>
                <div className="content-flow-line" aria-hidden="true"></div>
                <div className="content-output-grid">
                  <div className="content-output-token">Translate</div>
                  <div className="content-output-token">Review</div>
                  <div className="content-output-token">Reuse</div>
                </div>
              </div>
            </div>
            <div className="content-list">
              {contentSolutions.map((item) => (
                <div className="content-row" key={item.title}>
                  <div className="content-row-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <a className="editorial-link" href={item.href}>Explore <Icon name="arrow" size={15} /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="workflow-fit">
        <div className="shell">
          <SectionHeading
            title="Match the Translation Workflow to the Content"
            intro="Translation quality is not about applying the maximum amount of human effort to every sentence. It is about applying the right controls to the right content."
          />
          <p className="workflow-context">
            Stepes considers content purpose, audience, subject matter, visibility, business impact, quality expectations, volume, timing, and lifecycle when shaping the appropriate translation path.
          </p>
          <div className="workflow-options">
            {workflowOptions.map((item) => (
              <div className="workflow-option" key={item.label}>
                <h3>{item.label}</h3>
                <div className="workflow-fit">Best for: {item.fit}</div>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a className="editorial-link" href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">Explore AI-Powered Translation Workflows <Icon name="arrow" size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading
            title="AI Speed. Human Expertise. Enterprise Control."
            intro="Enterprise translation is not a choice between technology and people. It is the ability to use each where it creates the greatest value."
          />
          <div className="three-pillars">
            <article className="pillar">
              <div className="pillar-icon"><Icon name="spark" size={24} /></div>
              <h3>AI Speed</h3>
              <p>Accelerate multilingual content with technology that reduces repetitive work and keeps projects moving.</p>
              <ul>
                {["AI-powered translation", "Translation memory reuse", "Approved terminology", "Automated project routing", "Quality checks", "APIs and connected workflows"].map((x) => <li key={x}><Icon name="check" size={17} />{x}</li>)}
              </ul>
            </article>
            <article className="pillar">
              <div className="pillar-icon"><Icon name="users" size={24} /></div>
              <h3>Human Expertise</h3>
              <p>Keep professional judgment where language, context, subject matter, brand, culture, or risk demands it.</p>
              <ul>
                {["Professional translators", "Specialist linguists", "Human linguistic review", "Independent review", "Transcreation", "Linguistic quality assurance"].map((x) => <li key={x}><Icon name="check" size={17} />{x}</li>)}
              </ul>
            </article>
            <article className="pillar">
              <div className="pillar-icon"><Icon name="shield" size={24} /></div>
              <h3>Enterprise Control</h3>
              <p>Give global teams a more structured way to manage quality, assets, responsibilities, and delivery.</p>
              <ul>
                {["Centralized workflows", "Terminology governance", "Defined review roles", "Quality requirements", "Approval stages", "Project visibility and reporting"].map((x) => <li key={x}><Icon name="check" size={17} />{x}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="connected-workflow">
        <div className="shell">
          <SectionHeading
            className="workflow-section-heading"
            title="One Connected Workflow for Global Content"
            intro="Global content should not have to move between disconnected tools, language assets, translators, reviewers, and project teams. Stepes connects the complete translation lifecycle while allowing each content stream to follow the workflow it actually requires."
          />
          <div className="workflow-roadmap">
            {workflowStages.map((stage, index) => (
              <div className="workflow-stage" key={stage.title}>
                <div className="workflow-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </div>
            ))}
          </div>
          <div className="platform-links">
            <a className="editorial-link" href="https://www.stepes.com/ai-translation-platform/">AI Translation Platform <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/translation-memory/">Translation Memory <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/terminology-management/">Terminology Management <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/translation-api/">Translation API <Icon name="arrow" size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="enterprise-scale">
        <div className="shell">
          <SectionHeading
            title="Built for Global Scale"
            intro="From a single translation project to an enterprise-wide localization program, Stepes provides the professional resources, technology, and quality infrastructure organizations need to operate across languages and markets."
          />
          <div className="proof-grid">
            <div className="proof-item prominent"><strong>100+ Languages</strong><p>Support global and regional language requirements across major international markets.</p></div>
            <div className="proof-item"><strong>Professional Language Expertise</strong><p>Work with translators, editors, reviewers, and subject-matter linguists matched to the content and project requirements.</p></div>
            <div className="proof-item"><strong>ISO-Certified Quality Processes</strong><p>Structured translation and quality processes are supported by Stepes' ISO 9001, ISO 17100, and ISO 13485 certifications.</p></div>
            <div className="proof-item"><strong>Translation Memory + Terminology</strong><p>Reuse approved language and manage terminology across projects, products, departments, and recurring content.</p></div>
            <div className="proof-item"><strong>AI + Human Workflows</strong><p>Match automation and professional oversight to the content instead of relying on one fixed translation method.</p></div>
            <div className="proof-item"><strong>Enterprise Project Visibility</strong><p>Coordinate requests, files, workflows, reviews, approvals, status, and delivery through connected digital processes.</p></div>
          </div>
          <div className="proof-links">
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-system/">Translation Quality System <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">ISO Certifications <Icon name="arrow" size={15} /></a>
            <a className="editorial-link" href="https://www.stepes.com/security/">Enterprise Security <Icon name="arrow" size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section" id="stepes-ecosystem">
        <div className="shell">
          <SectionHeading
            title="Everything You Need to Take Content Global"
            intro="Explore the wider Stepes ecosystem to find the technology, professional services, and industry expertise behind each translation solution."
          />
          <div className="bridge-grid">
            <article className="bridge-panel">
              <div className="bridge-label">Platform</div>
              <h3>Translation Platform</h3>
              <p>Centralize projects, automate workflows, manage translation memory and terminology, connect content systems, apply AI translation, and maintain multilingual quality control.</p>
              <a className="editorial-link" href="https://www.stepes.com/ai-translation-platform/">Explore the Stepes Platform <Icon name="arrow" size={15} /></a>
            </article>
            <article className="bridge-panel">
              <div className="bridge-label">Services</div>
              <h3>Professional Services</h3>
              <p>Access professional translation, localization, interpreting, multimedia production, desktop publishing, AI translation review, and multilingual data services.</p>
              <a className="editorial-link" href="https://www.stepes.com/services/">Explore Stepes Services <Icon name="arrow" size={15} /></a>
            </article>
            <article className="bridge-panel">
              <div className="bridge-label">Industries</div>
              <h3>Industry Expertise</h3>
              <p>Work with language professionals and workflows designed for the terminology, quality expectations, content formats, and business requirements of your industry.</p>
              <a className="editorial-link" href="https://www.stepes.com/industries/">Explore Industries <Icon name="arrow" size={15} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="faqs">
        <div className="shell">
          <SectionHeading
            className="faq-section-heading"
            title="Translation Solutions FAQs"
            intro="Answers to common questions about enterprise translation solutions, AI translation, human review, continuous localization, consistency, and workflow design."
          />
          <div className="faq-panel">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="faq-item" key={item.q}>
                  <button
                    className="faq-button"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-control" aria-hidden="true">+</span>
                  </button>
                  {isOpen ? (
                    <div className="faq-answer" id={`faq-answer-${index}`}>
                      <p>{item.a}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2>Build the Right Translation Workflow for Your Business</h2>
              <p className="body-lg">
                Tell us what you need to translate, how your content is created, where it needs to go, and what quality, timing, workflow, or scale requirements matter to your organization. Stepes will help you configure the right combination of AI technology, professional expertise, language assets, quality controls, and delivery workflow.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">Talk to an Expert <Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href="https://app.stepes.com/quote/">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
