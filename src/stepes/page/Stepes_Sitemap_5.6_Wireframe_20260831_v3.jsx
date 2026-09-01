import React from "react";

const STEPES = "https://www.stepes.com";
const absolute = (path) => (path.startsWith("http") ? path : `${STEPES}${path}`);

const jumpLinks = [
  ["Platform", "platform"],
  ["Services", "services"],
  ["Industries", "industries"],
  ["Solutions", "solutions"],
  ["Languages", "languages"],
  ["Resources", "resources"],
  ["Company", "company"],
  ["Legal & Accessibility", "legal"],
];

const platformGroups = [
  {
    title: "Stepes Platform",
    links: [
      ["AI Translation Platform", "/ai-translation-platform/"],
      ["Enterprise Translation Management", "/enterprise-translation-management/"],
      ["Customer Translation Portal", "/translation-management-portal/"],
      ["AI + Human Translation Workflow", "/ai-human-translation-workflow/"],
      ["Translation Memory", "/translation-memory/"],
      ["Terminology Management", "/terminology-management/"],
      ["Translation Quality Assurance", "/translation-quality-assurance/"],
    ],
  },
  {
    title: "Developers & Integrations",
    links: [
      ["Translation API", "/translation-api/"],
      ["Website Translation Proxy", "/website-translation-proxy/"],
      ["Software Localization API", "/developers/software-localization-api/"],
      ["Integrations", "/integrations/"],
      ["Developer Documentation", "/developers/"],
    ],
  },
  {
    title: "Enterprise Controls",
    links: [
      ["Enterprise Security", "/security/"],
      ["Workflow Automation", "/translation-workflow-automation/"],
      ["Reporting & Analytics", "/translation-reporting-analytics/"],
      ["User Roles & Approvals", "/translation-approval-workflows/"],
    ],
  },
];

const serviceGroups = [
  {
    title: "Translation",
    links: [
      ["Professional Translation Services", "/translation-services/"],
      ["Certified Translation Services", "/certified-translation-services/"],
      ["Technical Translation Services", "/technical-translation-services/"],
      ["Legal Translation Services", "/legal-translation-services/"],
      ["Medical Translation Services", "/medical-translation-services/"],
      ["Financial Translation Services", "/financial-translation-services/"],
      ["Marketing Translation Services", "/marketing-translation-services/"],
      ["Patent Translation Services", "/patent-translation-services/"],
      ["Document Translation Services", "/document-translation-services/"],
    ],
  },
  {
    title: "Specialized Translation",
    links: [
      ["Translation Review & Proofreading", "/translation-proofreading-services/"],
      ["Translation QA Services", "/translation-qa-services/"],
      ["Transcreation Services", "/transcreation-services/"],
      ["Technical Manual Translation", "/technical-manual-translation/"],
      ["Contract Translation Services", "/contract-translation-services/"],
      ["Regulatory Translation Services", "/regulatory-translation-services/"],
      ["Linguistic Validation Services", "/linguistic-validation/"],
    ],
  },
  {
    title: "Localization",
    links: [
      ["Website Translation", "/website-translation-services/"],
      ["Software Localization", "/software-localization-services/"],
      ["App Localization", "/app-localization-services/"],
      ["Game Localization", "/video-game-translation-services/"],
      ["eLearning Localization", "/elearning-training-translation-services/"],
      ["Software Internationalization", "/software-internationalization-services/"],
    ],
  },
  {
    title: "AI & Data Services",
    links: [
      ["AI Translation Services", "/ai-translation-services/"],
      ["Machine Translation Post-Editing", "/machine-translation-post-editing/"],
      ["AI Output Review", "/ai-translation-review/"],
      ["LLM Evaluation Services", "/multilingual-llm-evaluation-services/"],
      ["Multilingual AI Data Services", "/multilingual-ai-data-services/"],
      ["Multilingual Text Annotation", "/multilingual-text-annotation-services/"],
      ["Voice Data Collection", "/multilingual-voice-conversation-data-collection/"],
    ],
  },
  {
    title: "Multilingual Production",
    links: [
      ["Multilingual Desktop Publishing", "/multilingual-desktop-publishing/"],
      ["Multimedia Localization", "/multimedia-translation-services/"],
      ["Video Translation Services", "/video-translation-services/"],
      ["Voiceover Services", "/voice-over-services/"],
    ],
  },
  {
    title: "Interpreting",
    links: [
      ["Remote Interpreting", "/interpretation-services/"],
      ["On-Site Interpreting", "/on-site-interpretater-services/"],
      ["Conference & Event Interpreting", "/conference-event-interpreting/"],
    ],
  },
];

const industryGroups = [
  {
    title: "Life Sciences & Healthcare",
    links: [
      ["Life Sciences", "/life-sciences-translation-services/"],
      ["Pharmaceutical", "/pharmaceutical-translation-services/"],
      ["Biotechnology", "/biotechnology-translation-services/"],
      ["Clinical Research & Clinical Studies", "/clinical-study-translation-services/"],
      ["CRO Translation", "/cro-translation-services/"],
      ["Medical Devices", "/medical-device-translation-services/"],
      ["In Vitro Diagnostics (IVD)", "/in-vitro-diagnostics-translation/"],
      ["Healthcare", "/healthcare-translation-services/"],
      ["Digital Health", "/digital-health-translation/"],
      ["Pharmacovigilance", "/pharmacovigilance-translation-services/"],
    ],
  },
  {
    title: "Technology & Manufacturing",
    links: [
      ["Software & SaaS", "/software-translation-services/"],
      ["AI & Machine Learning", "/ai-machine-learning-translation-services/"],
      ["Manufacturing", "/manufacturing-translation-services/"],
      ["Automotive", "/automotive-translation-services/"],
      ["Robotics", "/robotics-translation-services/"],
      ["Engineering", "/engineering-translation-services/"],
      ["Electronics", "/electronics-translation-services/"],
      ["Semiconductor", "/semiconductor-translation-services/"],
      ["Telecommunications", "/telecommunications-translation-services/"],
      ["Cybersecurity", "/cybersecurity-translation-services/"],
    ],
  },
  {
    title: "Energy, Industrial & Infrastructure",
    links: [
      ["Energy", "/energy-translation-services/"],
      ["Oil & Gas", "/oil-gas-translation-services/"],
      ["Renewable Energy", "/renewable-energy-translation-services/"],
      ["Construction & Infrastructure", "/construction-translation-services/"],
      ["Transportation", "/transportation-translation-services/"],
      ["Aviation", "/aviation-translation-services/"],
      ["Mining", "/mining-translation-services/"],
      ["Chemical", "/chemical-translation-services/"],
    ],
  },
  {
    title: "Consumer & Global Business",
    links: [
      ["Retail & Ecommerce", "/retail-ecommerce-translation-services/"],
      ["Food & Beverage", "/food-beverage-translation-services/"],
      ["Travel & Hospitality", "/travel-hospitality-translation-services/"],
      ["Media & Entertainment", "/media-entertainment-translation-services/"],
      ["Gaming", "/gaming-translation-services/"],
      ["Education & eLearning", "/education-translation-services/"],
      ["Professional Services", "/professional-services-translation/"],
      ["Agriculture", "/agriculture-translation-services/"],
      ["Human Resources", "/human-resource-translation-services/"],
    ],
  },
  {
    title: "Regulated & Institutional",
    links: [
      ["Legal", "/legal-translation-services/"],
      ["Financial Services", "/financial-translation-services/"],
      ["Insurance", "/insurance-translation-services/"],
      ["Government", "/government-translation-services/"],
    ],
  },
];

const solutionGroups = [
  {
    title: "By Business Need",
    links: [
      ["Enterprise Translation Management", "/enterprise-translation-management/"],
      ["Global Content Operations", "/solutions/global-content-operations/"],
      ["AI Translation & Human Review", "/ai-human-translation-workflow/"],
      ["AI-Powered Translation Workflows", "/solutions/ai-powered-translation-workflows/"],
      ["Website Localization", "/website-translation-services/"],
      ["Software & App Localization", "/software-localization-services/"],
      ["Multimedia Localization", "/multimedia-translation-services/"],
      ["Multilingual Customer Support", "/solutions/multilingual-customer-support/"],
    ],
  },
  {
    title: "By Team",
    links: [
      ["Localization Teams", "/solutions/localization-teams/"],
      ["Marketing Teams", "/solutions/marketing-teams/"],
      ["Product & Engineering Teams", "/solutions/product-engineering-localization/"],
      ["Legal Teams", "/solutions/legal-teams/"],
      ["Life Sciences Teams", "/life-sciences-translation-services/"],
      ["Procurement Teams", "/solutions/procurement-teams/"],
    ],
  },
  {
    title: "By Content Type",
    links: [
      ["Documents", "/document-translation-services/"],
      ["Websites", "/website-translation-services/"],
      ["Software Strings", "/software-localization-services/"],
      ["Videos & Subtitles", "/video-translation-services/"],
      ["Training Content", "/elearning-training-translation-services/"],
      ["Legal & Compliance Content", "/solutions/legal-teams/"],
      ["Technical Manuals", "/technical-translation-services/"],
    ],
  },
];

const languageGroups = [
  {
    title: "Americas",
    links: [
      ["English", "/english-translation-services/"],
      ["Spanish", "/spanish-translation-services/"],
      ["Portuguese", "/portuguese-translation-services/"],
      ["Haitian Creole", "/haitian-creole-translation-services/"],
    ],
  },
  {
    title: "Europe",
    links: [
      ["French", "/french-translation-services/"],
      ["German", "/german-translation-services/"],
      ["Italian", "/italian-translation-services/"],
      ["Dutch", "/dutch-translation-services/"],
      ["Polish", "/polish-translation-services/"],
      ["Czech", "/czech-translation-services/"],
      ["Danish", "/danish-translation-services/"],
      ["Swedish", "/swedish-translation-services/"],
      ["Finnish", "/finnish-translation-services/"],
      ["Norwegian", "/norwegian-translation-services/"],
      ["Greek", "/greek-translation-services/"],
      ["Romanian", "/romanian-translation-services/"],
      ["Hungarian", "/hungarian-translation-services/"],
      ["Slovak", "/slovak-translation-services/"],
      ["Ukrainian", "/ukrainian-translation-services/"],
      ["Russian", "/russian-translation-services/"],
      ["Slovenian", "/slovenian-translation-services/"],
      ["Croatian", "/croatian-translation-services/"],
      ["Bulgarian", "/bulgarian-translation-services/"],
      ["Turkish", "/turkish-translation-services/"],
    ],
  },
  {
    title: "Asia-Pacific",
    links: [
      ["Chinese", "/chinese-translation-services/"],
      ["Japanese", "/japanese-translation-services/"],
      ["Korean", "/korean-translation-services/"],
      ["Vietnamese", "/vietnamese-translation-services/"],
      ["Thai", "/thai-translation-services/"],
      ["Indonesian", "/indonesian-translation-services/"],
      ["Malay", "/malay-translation-services/"],
      ["Hindi", "/hindi-translation-services/"],
      ["Bengali", "/bengali-translation-services/"],
      ["Tagalog", "/tagalog-translation-services/"],
      ["Burmese", "/burmese-translation-services/"],
      ["Khmer", "/khmer-translation-services/"],
      ["Urdu", "/urdu-translation-services/"],
    ],
  },
  {
    title: "Middle East & Africa",
    links: [
      ["Arabic", "/arabic-translation-services/"],
      ["Hebrew", "/hebrew-translation-services/"],
      ["Swahili", "/swahili-translation-services/"],
      ["Somali", "/somali-translation-services/"],
      ["Igbo", "/igbo-translation-services/"],
    ],
  },
];

const resourceGroups = [
  {
    title: "Explore by Topic",
    links: [
      ["Resource Center", "/resources/"],
      ["AI Translation Insights", "/resources/ai-translation-insights/"],
      ["Translation Quality & Governance", "/resources/translation-quality/"],
      ["Localization Guides", "/resources/localization-guides/"],
      ["Translation Guides", "/resources/translation-guides/"],
      ["Global Content Strategy", "/resources/global-content-strategy/"],
    ],
  },
  {
    title: "Tools & Reference",
    links: [
      ["Translation Languages", "/translation-languages/"],
      ["Translation Cost Guide", "/resources/translation-cost-guide/"],
      ["File Format Support", "/resources/file-format-support/"],
      ["Translation Glossary", "/resources/translation-glossary/"],
      ["API Documentation", "/developers/translation-api/"],
      ["Security & Compliance", "/resources/security-and-compliance/"],
    ],
  },
  {
    title: "Browse by Format",
    links: [
      ["All Guides", "/resources/guides/"],
      ["Case Studies", "/resources/case-studies/"],
      ["Research & Reports", "/resources/research-reports/"],
      ["Webinars & Events", "/resources/webinars/"],
      ["News & Press", "/news/"],
    ],
  },
];

const companyGroups = [
  {
    title: "About Stepes",
    links: [
      ["About Us", "/about/"],
      ["Why Stepes", "/why-us/"],
      ["Our Team", "/our-team/"],
      ["Our Linguists", "/our-linguists/"],
      ["Careers", "/careers/"],
      ["Contact Us", "/contact-us/"],
    ],
  },
  {
    title: "Quality & Customer Support",
    links: [
      ["Quality System", "/translation-quality-system/"],
      ["ISO Certifications", "/iso-certified-translation-services/"],
      ["Security", "/security/"],
      ["Enterprise Support", "/enterprise-support/"],
      ["Customer Success", "/customer-success/"],
    ],
  },
  {
    title: "For Linguists",
    links: [
      ["Become a Translator", "/become-a-translator/"],
      ["Translator Resources", "/translator-resources/"],
    ],
  },
];

const legalLinks = [
  ["Privacy Policy", "/legal/privacy/"],
  ["Terms of Use", "/legal/"],
  ["Security", "/security/"],
  ["Accessibility", "/accessibility/"],
];

function Arrow() {
  return <span className="link-arrow" aria-hidden="true">→</span>;
}

function LinkList({ links }) {
  return (
    <ul className="link-list">
      {links.map(([label, href]) => (
        <li key={`${label}-${href}`}>
          <a className="directory-link" href={absolute(href)}>
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Group({ title, links }) {
  return (
    <div className="sitemap-group">
      <h3>{title}</h3>
      <LinkList links={links} />
    </div>
  );
}

function DirectorySection({ id, title, intro, groups, tone = "white", columns = 3, children }) {
  return (
    <section id={id} className={`directory-section tone-${tone}`} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <div className="section-heading">
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{intro}</p>
        </div>
        {children || (
          <div className="group-grid" style={{ "--columns": columns }}>
            {groups.map((group) => (
              <Group key={group.title} {...group} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const css = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #A71954;
    --stepes-burgundy: #7A1542;
    --stepes-blush: #FDF2F7;
    --ink: #17191D;
    --ink-soft: #4F535B;
    --muted: #6B7078;
    --line: #E3E5E8;
    --surface: #F7F8FA;
    --surface-warm: #FCF8FA;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body { margin: 0; }

  .stepes-sitemap-wireframe {
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .stepes-sitemap-wireframe a {
    color: inherit;
    text-decoration: none;
  }

  .shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .hero {
    padding: 104px 0 42px;
    background:
      radial-gradient(circle at 50% 0%, rgba(193,29,99,0.06), transparent 33%),
      var(--white);
    text-align: center;
  }

  .hero-copy {
    max-width: 900px;
    margin: 0 auto;
  }

  .hero h1 {
    margin: 0;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -0.035em;
    font-weight: 600;
  }

  .hero p {
    max-width: 820px;
    margin: 22px auto 0;
    color: var(--ink-soft);
    font-size: 18px;
    line-height: 1.65;
    font-weight: 400;
  }

  .jump-wrap {
    padding: 0 0 80px;
    background: var(--white);
  }

  .jump-nav {
    border: 1px solid var(--line);
    border-radius: 24px;
    background: var(--white);
    padding: 10px;
    box-shadow: 0 10px 28px rgba(18, 24, 35, 0.04);
  }

  .jump-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .jump-link {
    min-height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 10px 18px;
    border-radius: 16px;
    color: #30333A;
    font-size: 16px;
    line-height: 1.35;
    font-weight: 600;
    transition: background-color 160ms ease, color 160ms ease;
  }

  .jump-link > span:first-child {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .jump-link:hover,
  .jump-link:focus-visible {
    color: var(--stepes-magenta);
    background: var(--stepes-blush);
    outline: none;
  }

  .jump-link:focus-visible {
    box-shadow: inset 0 0 0 2px rgba(193, 29, 99, 0.45);
  }

  .jump-arrow {
    color: var(--stepes-magenta);
    font-size: 18px;
    transform: translateY(-1px);
  }

  .directory-section {
    padding: 92px 0 96px;
    scroll-margin-top: 96px;
  }

  .tone-white { background: var(--white); }
  .tone-gray { background: var(--surface); }
  .tone-warm { background: var(--surface-warm); }

  .section-heading {
    max-width: 820px;
    margin-bottom: 48px;
  }

  .section-heading h2 {
    margin: 0;
    font-size: 36px;
    line-height: 1.14;
    letter-spacing: -0.025em;
    font-weight: 600;
  }

  .section-heading p {
    max-width: 760px;
    margin: 16px 0 0;
    color: var(--ink-soft);
    font-size: 17px;
    line-height: 1.65;
    font-weight: 400;
  }

  .group-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    column-gap: 48px;
    row-gap: 52px;
  }

  .sitemap-group {
    min-width: 0;
    border-top: 1px solid #D9DCE1;
    padding-top: 22px;
  }

  .sitemap-group h3 {
    margin: 0 0 12px;
    color: var(--ink);
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: -0.018em;
    font-weight: 600;
  }

  .link-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .link-list li + li {
    border-top: 1px solid rgba(218, 221, 226, 0.68);
  }

  .directory-link {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 2px;
    color: #3E4248 !important;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
    transition: color 150ms ease, padding-left 150ms ease;
  }

  .directory-link span:first-child {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .directory-link:hover,
  .directory-link:focus-visible {
    color: var(--stepes-magenta) !important;
    padding-left: 4px;
    outline: none;
  }

  .directory-link:focus-visible {
    border-radius: 6px;
    box-shadow: 0 0 0 2px rgba(193, 29, 99, 0.2);
  }

  .link-arrow {
    flex: 0 0 auto;
    color: var(--stepes-magenta);
    font-size: 16px;
    line-height: 1;
    opacity: 0.72;
    transition: transform 150ms ease, opacity 150ms ease;
  }

  .directory-link:hover .link-arrow,
  .directory-link:focus-visible .link-arrow {
    opacity: 1;
    transform: translateX(3px);
  }

  .language-feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 44px;
    padding: 26px 30px;
    border: 1px solid rgba(193, 29, 99, 0.14);
    border-radius: 22px;
    background: var(--stepes-blush);
  }

  .language-feature-copy h3 {
    margin: 0;
    font-size: 22px;
    line-height: 1.3;
    font-weight: 600;
  }

  .language-feature-copy p {
    max-width: 680px;
    margin: 7px 0 0;
    color: #565A62;
    font-size: 16px;
    line-height: 1.55;
  }

  .feature-link {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    font-weight: 600;
  }

  .feature-link:hover,
  .feature-link:focus-visible {
    color: var(--stepes-magenta-dark) !important;
    outline: none;
  }

  .legal-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .legal-list .directory-link {
    min-height: 64px;
    padding: 0 20px;
    justify-content: flex-start;
  }

  .legal-list > a + a {
    border-left: 1px solid var(--line);
  }

  .final-cta-wrap {
    padding: 88px 0 96px;
    background: var(--white);
  }

  .final-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 42px;
    padding: 48px 54px;
    border: 1px solid rgba(193, 29, 99, 0.12);
    border-radius: 30px;
    background: var(--stepes-blush);
  }

  .final-cta-copy {
    max-width: 720px;
  }

  .final-cta h2 {
    margin: 0;
    font-size: 36px;
    line-height: 1.15;
    letter-spacing: -0.025em;
    font-weight: 600;
  }

  .final-cta p {
    margin: 15px 0 0;
    color: #52565E;
    font-size: 17px;
    line-height: 1.62;
  }

  .cta-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    flex-wrap: wrap;
  }

  .cta-button {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 999px;
    padding: 0 22px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
  }

  .cta-button.primary,
  .cta-button.primary:visited,
  .cta-button.primary:hover,
  .cta-button.primary:active,
  .cta-button.primary:focus,
  .cta-button.primary:focus-visible {
    background: var(--stepes-magenta);
    border: 1px solid var(--stepes-magenta);
    color: #FFFFFF !important;
  }

  .cta-button.primary *,
  .cta-button.primary:visited *,
  .cta-button.primary:hover *,
  .cta-button.primary:active *,
  .cta-button.primary:focus *,
  .cta-button.primary:focus-visible * {
    color: #FFFFFF !important;
    fill: #FFFFFF !important;
    stroke: #FFFFFF !important;
  }

  .cta-button.primary:hover,
  .cta-button.primary:focus-visible {
    background: var(--stepes-magenta-dark);
    border-color: var(--stepes-magenta-dark);
    transform: translateY(-1px);
  }

  .cta-button.secondary {
    border: 1px solid #D7B3C3;
    background: rgba(255,255,255,0.72);
    color: #2C2F34 !important;
  }

  .cta-button.secondary:hover,
  .cta-button.secondary:focus-visible {
    border-color: var(--stepes-magenta);
    color: var(--stepes-magenta) !important;
    background: var(--white);
    transform: translateY(-1px);
  }

  .cta-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(193,29,99,0.2);
  }

  @media (max-width: 1280px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .group-grid { column-gap: 38px; }
  }

  @media (max-width: 1024px) {
    .shell { padding-left: 24px; padding-right: 24px; }

    .hero { padding-top: 92px; }
    .hero h1 { font-size: 42px; }

    .jump-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

    .directory-section { padding: 80px 0; scroll-margin-top: 84px; }
    .section-heading h2 { font-size: 32px; }
    .section-heading { margin-bottom: 40px; }

    .group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 36px;
      row-gap: 46px;
    }

    .legal-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .legal-list > a:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .legal-list > a:nth-child(4) { border-top: 1px solid var(--line); }

    .final-cta {
      grid-template-columns: 1fr;
      padding: 42px;
    }

    .cta-actions { justify-content: flex-start; }
  }

  @media (max-width: 767px) {
    .shell { padding-left: 20px; padding-right: 20px; }

    .hero {
      padding: 70px 0 34px;
      text-align: center;
    }

    .hero h1 { font-size: 38px; }
    .hero p { font-size: 18px; line-height: 1.58; }

    .jump-wrap { padding-bottom: 64px; }
    .jump-nav { border-radius: 20px; padding: 8px; }
    .jump-link { min-height: 52px; padding: 9px 13px; gap: 10px; }

    .directory-section { padding: 68px 0 72px; scroll-margin-top: 72px; }

    .section-heading {
      max-width: 690px;
      margin: 0 auto 36px;
      text-align: center;
    }

    .section-heading h2 { font-size: 30px; }
    .section-heading p { margin-left: auto; margin-right: auto; font-size: 16px; }

    .group-grid {
      grid-template-columns: 1fr;
      row-gap: 38px;
    }

    .sitemap-group h3 { font-size: 20px; }

    .directory-link {
      min-height: 44px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 16px;
    }

    .language-feature {
      display: block;
      padding: 24px;
      margin-bottom: 38px;
    }

    .feature-link {
      margin-top: 14px;
      min-height: 44px;
    }

    .legal-list { grid-template-columns: 1fr; }
    .legal-list > a + a,
    .legal-list > a:nth-child(3),
    .legal-list > a:nth-child(4) {
      border-left: 0;
      border-top: 1px solid var(--line);
    }

    .legal-list .directory-link { min-height: 56px; padding: 0 4px; }

    .final-cta-wrap { padding: 64px 0 72px; }
    .final-cta { padding: 34px 24px; border-radius: 24px; text-align: center; }
    .final-cta h2 { font-size: 30px; }
    .final-cta p { font-size: 16px; }
    .cta-actions { justify-content: center; }
    .cta-button { min-height: 48px; }
  }

  @media (max-width: 520px) {
    .jump-grid { grid-template-columns: 1fr 1fr; }
    .jump-link { font-size: 16px; }

    .cta-actions {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
    }

    .cta-button { width: 100%; }
  }

  @media (max-width: 360px) {
    .jump-grid { grid-template-columns: 1fr; }
    .jump-link { min-height: 48px; font-size: 16px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: 0.01ms !important; }
  }
`;

export default function StepesSitemap56Wireframe() {
  return (
    <main className="stepes-sitemap-wireframe">
      <style>{css}</style>

      <section className="hero" aria-labelledby="sitemap-title">
        <div className="shell">
          <div className="hero-copy">
            <h1 id="sitemap-title">Sitemap</h1>
            <p>
              Explore Stepes translation and localization services, AI-powered language technology,
              industry expertise, enterprise solutions, supported languages, resources, and company information.
            </p>
          </div>
        </div>
      </section>

      <section className="jump-wrap" aria-label="Sitemap navigation">
        <div className="shell">
          <nav className="jump-nav">
            <div className="jump-grid">
              {jumpLinks.map(([label, id]) => (
                <a key={id} className="jump-link" href={`${STEPES}/sitemap#${id}`}>
                  <span>{label}</span>
                  <span className="jump-arrow" aria-hidden="true">↓</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <DirectorySection
        id="platform"
        title="Platform"
        intro="Explore the technology, automation, terminology, quality controls, integrations, and enterprise capabilities behind scalable multilingual content operations."
        groups={platformGroups}
        columns={3}
      />

      <DirectorySection
        id="services"
        title="Translation & Localization Services"
        intro="Find professional translation, localization, AI language, multilingual production, and interpreting services for global content and communication."
        groups={serviceGroups}
        columns={3}
        tone="gray"
      />

      <DirectorySection
        id="industries"
        title="Industries"
        intro="Explore language solutions built around the terminology, documentation, workflows, and regulatory requirements of your industry."
        groups={industryGroups}
        columns={3}
      />

      <DirectorySection
        id="solutions"
        title="Enterprise Translation Solutions"
        intro="Explore multilingual solutions organized around your business needs, teams, and content types."
        groups={solutionGroups}
        columns={3}
        tone="warm"
      />

      <DirectorySection
        id="languages"
        title="Translation Languages"
        intro="Explore professional translation services for major global languages and regional markets, or use the complete Stepes language directory for additional languages and locale variants."
        groups={languageGroups}
        columns={4}
      >
        <div className="language-feature">
          <div className="language-feature-copy">
            <h3>Complete Language Directory</h3>
            <p>Browse additional supported languages, regional variants, and locale-specific translation options.</p>
          </div>
          <a className="feature-link" href={`${STEPES}/translation-languages/`}>
            <span>View All Translation Languages</span>
            <Arrow />
          </a>
        </div>
        <div className="group-grid" style={{ "--columns": 4 }}>
          {languageGroups.map((group) => <Group key={group.title} {...group} />)}
        </div>
      </DirectorySection>

      <DirectorySection
        id="resources"
        title="Resources"
        intro="Access practical guides, research, tools, and reference content for translation, localization, AI, quality management, and global content operations."
        groups={resourceGroups}
        columns={3}
        tone="gray"
      />

      <DirectorySection
        id="company"
        title="Company"
        intro="Learn about Stepes, our people, quality standards, enterprise support, and opportunities to work with us."
        groups={companyGroups}
        columns={3}
      />

      <DirectorySection
        id="legal"
        title="Legal & Accessibility"
        intro="Review Stepes privacy, terms of use, security, and accessibility information."
        tone="warm"
      >
        <div className="legal-list">
          {legalLinks.map(([label, href]) => (
            <a key={label} className="directory-link" href={absolute(href)}>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </DirectorySection>

      <section className="final-cta-wrap" aria-labelledby="sitemap-cta-title">
        <div className="shell">
          <div className="final-cta">
            <div className="final-cta-copy">
              <h2 id="sitemap-cta-title">Can’t Find What You’re Looking For?</h2>
              <p>
                Tell us what you need to translate or localize. Our team can help you find the right
                service, technology, industry expertise, or multilingual workflow.
              </p>
            </div>
            <div className="cta-actions">
              <a className="cta-button secondary" href={`${STEPES}/contact-us/`}>Contact Sales</a>
              <a className="cta-button primary" href="https://app.stepes.com/quote/">Get a Translation Quote</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
