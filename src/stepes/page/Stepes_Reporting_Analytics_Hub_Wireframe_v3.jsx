import React from "react";

const PAGE_URL = "https://www.stepes.com/translation-reporting-analytics/";

const valuePoints = [
  {
    icon: "overview",
    title: "Unified Program Visibility",
    description:
      "Bring translation activity, delivery performance, quality, and financial data into one connected view.",
  },
  {
    icon: "sliders",
    title: "Configurable Reporting",
    description:
      "Analyze the metrics, languages, teams, workflows, and business dimensions that matter to your organization.",
  },
  {
    icon: "users",
    title: "Role-Based Insights",
    description:
      "Give executives, localization teams, procurement, finance, and program owners reporting aligned with their responsibilities.",
  },
  {
    icon: "connect",
    title: "Connected Enterprise Data",
    description:
      "Export translation data or connect it with business intelligence, finance, procurement, and enterprise analytics systems.",
  },
];

const programMetrics = [
  ["Translation volume", "Projects, words, files, and content units"],
  ["Program activity", "Active, completed, delayed, and upcoming work"],
  ["Language coverage", "Markets, locales, and content availability"],
  ["Delivery performance", "Turnaround time, on-time delivery, and SLA attainment"],
  ["Financial performance", "Spend, budget utilization, and operational savings"],
  ["Quality performance", "Quality scores, issue trends, and review effort"],
  ["Technology utilization", "AI, machine translation, TM, and automation usage"],
  ["Human contribution", "Translation, review, approval, and post-editing activity"],
];

const spendDimensions = [
  "Business unit",
  "Department",
  "Cost center",
  "Brand or product",
  "Project or program",
  "Language and market",
  "Content type",
  "Workflow and service level",
  "Supplier",
  "Reporting period",
];

const costMeasures = [
  "Cost per word or content unit",
  "Cost per project and language",
  "Budget consumption and trends",
  "Human review and post-editing costs",
  "Translation memory savings",
  "AI and machine translation utilization",
  "Supplier and workflow comparisons",
  "Forecasting inputs",
];

const qualityMetrics = [
  ["Quality scores", "Monitor evaluation results and threshold attainment over time."],
  ["Error intelligence", "Analyze error density, severity, and issue categories."],
  ["Terminology compliance", "Track approved terminology and style-guide adherence."],
  ["Review effort", "Measure reviewer corrections, edit distance, and post-editing effort."],
  ["Rework and acceptance", "Understand rework rates, acceptance, and recurring quality patterns."],
  ["Root-cause analysis", "Connect quality outcomes with source content, workflows, languages, and resources."],
];

const tmMetrics = [
  "Overall translation memory leverage",
  "Exact, fuzzy, and repetition match rates",
  "Match distribution by content type",
  "Savings attributed to content reuse",
  "Translation memory growth",
  "Underutilized language assets",
];

const aiMetrics = [
  "AI and MT usage",
  "Output acceptance rates",
  "Post-edit rates and edit distance",
  "Human review effort",
  "Quality and turnaround performance",
  "Cost per translated unit",
  "Performance by language and content type",
  "Performance by model or engine",
];

const customDimensions = [
  "Business unit",
  "Department",
  "Brand",
  "Product",
  "Region",
  "Market",
  "Campaign",
  "Cost center",
  "Content type",
  "Request type",
  "Regulatory classification",
  "Priority",
  "Product release",
  "Internal owner",
];

const reportTypes = [
  ["Monthly Program Overview", "Volume, spend, quality, delivery, and technology utilization."],
  ["Spend and Budget Report", "Cost allocation, budget performance, savings, and trend analysis."],
  ["SLA Performance Report", "Turnaround, on-time delivery, bottlenecks, and delayed work."],
  ["Quality Trend Report", "Scores, issue categories, terminology, rework, and review effort."],
  ["AI and MT Performance", "Usage, acceptance, editing effort, quality, speed, and cost."],
  ["Translation Memory Savings", "Leverage, match distribution, reuse, and language asset growth."],
];

const dataConnections = [
  {
    icon: "api",
    title: "Reporting APIs",
    description:
      "Provide governed access to translation metrics and program data for enterprise applications and analytics workflows.",
  },
  {
    icon: "database",
    title: "Data Warehouses",
    description:
      "Bring structured translation data into enterprise data platforms for consolidated reporting and historical analysis.",
  },
  {
    icon: "dashboard",
    title: "Business Intelligence",
    description:
      "Connect language program data with executive dashboards, operational reporting, and enterprise performance views.",
  },
  {
    icon: "briefcase",
    title: "Finance and Procurement",
    description:
      "Support budget allocation, supplier reporting, cost-center analysis, and translation spend governance.",
  },
];

const stakeholders = [
  {
    role: "Localization and Language Operations",
    focus: "Volume, language coverage, workflow capacity, delivery, quality, and resource utilization.",
  },
  {
    role: "Procurement",
    focus: "Spend, supplier performance, cost comparisons, savings, and budget control.",
  },
  {
    role: "Finance",
    focus: "Cost-center allocation, budget tracking, period comparisons, and forecasting inputs.",
  },
  {
    role: "Product and Engineering",
    focus: "Release localization, language readiness, turnaround, bottlenecks, and automation adoption.",
  },
  {
    role: "Marketing and Content Teams",
    focus: "Campaign activity, market coverage, content turnaround, and regional demand.",
  },
  {
    role: "Executive Leadership",
    focus: "Program scale, spend, quality, delivery, operational risk, and performance trends.",
  },
];

const governanceItems = [
  ["Role-based dashboard access", "Give each stakeholder visibility aligned with their responsibilities."],
  ["Business-unit data separation", "Limit reporting scope by organization, program, project, or region."],
  ["Restricted financial reporting", "Protect pricing, budgets, supplier data, and cost information."],
  ["Controlled sharing and exports", "Manage who can distribute reports or download underlying data."],
  ["Audit and Retention Controls", "Maintain reporting activity records, governed access, and appropriate data retention controls."],
  ["Enterprise authentication", "Align reporting access with enterprise identity and security controls."],
];

const improvementSteps = [
  {
    number: "01",
    title: "Measure",
    description:
      "Capture activity, cost, quality, workflow, and technology-performance data across the language program.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Compare results across teams, languages, projects, content types, suppliers, and reporting periods.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Refine workflows, allocate resources, strengthen quality controls, and select the right translation approach.",
  },
  {
    number: "04",
    title: "Govern",
    description:
      "Establish targets, monitor thresholds, control access, and provide consistent stakeholder reporting.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Apply successful practices across additional teams, languages, markets, and global content programs.",
  },
];

const relatedCapabilities = [
  {
    title: "Workflow Automation",
    description:
      "Measure stage duration, throughput, SLA performance, and bottlenecks, then improve routing, review, and approvals.",
    href: "https://www.stepes.com/translation-workflow-automation/",
  },
  {
    title: "Translation Quality Assurance",
    description:
      "Convert linguistic evaluations, terminology compliance, and reviewer activity into measurable quality trends.",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
  {
    title: "Enterprise Translation Management",
    description:
      "Coordinate programs, projects, teams, languages, content, and suppliers across the organization.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    title: "Translation Memory",
    description:
      "Track content reuse, leverage, language asset growth, and savings generated through existing translations.",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    title: "AI + Human Translation Workflow",
    description:
      "Compare AI output, human review, edit effort, quality, speed, and cost across blended workflows.",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    title: "User Roles & Approvals",
    description:
      "Control who can access, review, approve, manage, and share translation reporting data.",
    href: "https://www.stepes.com/user-roles-approvals/",
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
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    overview: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><path d="M14 17h7" /><path d="M17.5 13.5v7" /></>,
    sliders: <><path d="M4 7h10" /><path d="M18 7h2" /><circle cx="16" cy="7" r="2" /><path d="M4 17h2" /><path d="M10 17h10" /><circle cx="8" cy="17" r="2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    connect: <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="m8.6 10.5 6.8-3" /><path d="m8.6 13.5 6.8 3" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    money: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M7 9h.01" /><path d="M17 15h.01" /><circle cx="12" cy="12" r="3" /></>,
    workflow: <><rect x="3" y="4" width="6" height="5" rx="1.5" /><rect x="15" y="15" width="6" height="5" rx="1.5" /><path d="M9 6.5h3a3 3 0 0 1 3 3v5.5" /><path d="m12 12 3 3 3-3" /></>,
    quality: <><path d="m12 3 2.2 4.45 4.91.71-3.55 3.46.84 4.88L12 14.2 7.6 16.5l.84-4.88-3.55-3.46 4.91-.71L12 3Z" /><path d="m9.5 12 1.7 1.7 3.5-3.7" /></>,
    sparkles: <><path d="m12 3 1.1 3.1L16 7.2l-2.9 1.1L12 11l-1.1-2.7L8 7.2l2.9-1.1L12 3Z" /><path d="m18 13 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z" /><path d="m6 14 .8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14Z" /></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 1v4" /><path d="M15 1v4" /><path d="M9 19v4" /><path d="M15 19v4" /><path d="M1 9h4" /><path d="M19 9h4" /><path d="M1 15h4" /><path d="M19 15h4" /><rect x="9" y="9" width="6" height="6" rx="1" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 10h18" /><path d="M8 14h3" /><path d="M13 14h3" /><path d="M8 17h3" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    api: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    dashboard: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /><path d="M9 21V9" /><path d="m13 16 2-2 2 1 2-3" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="3" /><path d="M9 7V4h6v3" /><path d="M3 12h18" /><path d="M10 12v2h4v-2" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8.3 7 10 4.2-1.7 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    trend: <><path d="m3 17 5-5 4 3 7-8" /><path d="M14 7h5v5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    filter: <><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  };

  return <svg {...common}>{paths[name] || paths.overview}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function SectionIntro({ eyebrow, title, description, align = "left", dark = false }) {
  return (
    <div className={`section-intro section-intro-${align} ${dark ? "section-intro-dark" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function StepesReportingAnalyticsWireframe() {
  return (
    <main className="reporting-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --pink-soft: #FDF2F7;
          --ink: #101827;
          --body: #526076;
          --muted: #718096;
          --line: #E4E8EE;
          --soft: #F7F8FA;
          --dark: #151624;
          --dark-2: #1C1D2D;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .reporting-page {
          overflow: hidden;
          background: #FFFFFF;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .reporting-page a { color: inherit; text-decoration: none; }
        .reporting-page h1, .reporting-page h2, .reporting-page h3, .reporting-page p, .reporting-page a, .reporting-page span, .reporting-page strong { overflow-wrap: break-word; }
        .reporting-page button, .reporting-page a { -webkit-tap-highlight-color: transparent; }
        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        section { position: relative; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.035em; }
        h1 { font-size: 48px; line-height: 1.04; }
        h2 { font-size: 36px; line-height: 1.08; }
        h3 { font-size: 24px; line-height: 1.18; }
        p { color: var(--body); }
        .eyebrow {
          margin-bottom: 17px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 11px 22px;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.2;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button-primary {
          background: var(--magenta);
          color: #FFFFFF !important;
          box-shadow: 0 12px 28px rgba(193, 29, 99, .18);
        }
        .button-primary:hover { background: var(--magenta-dark); }
        .button-secondary {
          border-color: #D9DEE6;
          background: #FFFFFF;
          color: #1E293B !important;
        }
        .button-secondary:hover { border-color: rgba(193, 29, 99, .35); }
        .arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--magenta) !important;
          font-weight: 650;
          line-height: 1.4;
        }
        .arrow-link svg { transition: transform .2s ease; }
        .arrow-link:hover svg { transform: translateX(3px); }
        .section-intro { max-width: 800px; }
        .section-intro-center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-intro h2 { margin-bottom: 22px; }
        .section-intro > p:last-child {
          max-width: 780px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.75;
        }
        .section-intro-center > p:last-child { margin-left: auto; margin-right: auto; }
        .section-intro-dark h2, .section-intro-dark > p:last-child { color: #FFFFFF; }
        .section-intro-dark > p:last-child { color: #C7C9D6; }
        .section-intro-dark .eyebrow { color: #F39AC1; }

        /* Hero */
        .hero {
          background:
            radial-gradient(circle at 86% 10%, rgba(193, 29, 99, .07), transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
          border-bottom: 1px solid var(--line);
        }
        .hero .shell { padding-top: 104px; padding-bottom: 88px; }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(520px, 1.1fr);
          gap: 64px;
          align-items: center;
        }
        .hero-copy { max-width: 620px; }
        .hero h1 { max-width: 650px; margin-bottom: 26px; }
        .hero-lead {
          max-width: 610px;
          margin-bottom: 0;
          color: #4E5D73;
          font-size: 18px;
          line-height: 1.75;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
        .hero-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          max-width: 575px;
          margin-top: 28px;
          color: #67758B;
          font-size: 14px;
          line-height: 1.65;
        }
        .hero-note svg { flex: 0 0 auto; margin-top: 2px; color: var(--magenta); }
        .hero-product {
          position: relative;
          border: 1px solid #E2E6ED;
          border-radius: 30px;
          background: #FFFFFF;
          padding: 14px;
          box-shadow: 0 28px 70px rgba(16, 24, 39, .11);
        }
        .hero-product::before {
          content: "";
          position: absolute;
          inset: auto 8% -34px 8%;
          height: 62px;
          border-radius: 50%;
          background: rgba(193, 29, 99, .1);
          filter: blur(32px);
          z-index: -1;
        }
        .dashboard {
          overflow: hidden;
          border: 1px solid #E7EAF0;
          border-radius: 22px;
          background: #F9FAFB;
        }
        .dashboard-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #E5E8EE;
          background: #FFFFFF;
          padding: 18px 20px;
        }
        .dashboard-title { display: flex; align-items: center; gap: 11px; }
        .dashboard-title-mark {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 11px;
          background: var(--pink-soft);
          color: var(--magenta);
        }
        .dashboard-title strong { display: block; font-size: 14px; line-height: 1.3; }
        .dashboard-title small { color: #8390A3; font-size: 11px; }
        .dashboard-period {
          display: flex;
          align-items: center;
          gap: 7px;
          border: 1px solid #E3E6EC;
          border-radius: 999px;
          background: #FFFFFF;
          padding: 7px 10px;
          color: #5E6C80;
          font-size: 11px;
          font-weight: 650;
        }
        .dashboard-body { padding: 16px; }
        .metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .metric-card {
          min-width: 0;
          border: 1px solid #E7EAF0;
          border-radius: 14px;
          background: #FFFFFF;
          padding: 13px;
        }
        .metric-card span { display: block; color: #778599; font-size: 10px; line-height: 1.35; }
        .metric-card strong { display: block; margin-top: 4px; font-size: 18px; line-height: 1.2; letter-spacing: -.03em; }
        .metric-card small { display: flex; align-items: center; gap: 4px; margin-top: 6px; color: #6D7A8E; font-size: 9px; }
        .metric-card small svg { color: #2C8B65; }
        .dashboard-main { display: grid; grid-template-columns: 1.12fr .88fr; gap: 10px; margin-top: 10px; }
        .chart-panel, .language-panel {
          border: 1px solid #E7EAF0;
          border-radius: 14px;
          background: #FFFFFF;
          padding: 15px;
        }
        .chart-heading, .language-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .chart-heading strong, .language-heading strong { font-size: 12px; }
        .chart-heading span, .language-heading span { color: #8390A3; font-size: 9px; }
        .chart-area { position: relative; height: 150px; margin-top: 16px; }
        .chart-gridline {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: #EEF0F4;
        }
        .chart-gridline:nth-child(1) { top: 5%; }
        .chart-gridline:nth-child(2) { top: 35%; }
        .chart-gridline:nth-child(3) { top: 65%; }
        .chart-gridline:nth-child(4) { top: 95%; }
        .chart-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .language-list { display: grid; gap: 14px; margin-top: 16px; }
        .language-row { display: grid; grid-template-columns: 50px 1fr 30px; align-items: center; gap: 8px; }
        .language-row span { color: #5D6A7E; font-size: 10px; }
        .language-track { height: 6px; overflow: hidden; border-radius: 99px; background: #EEF0F4; }
        .language-track i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--magenta), #E45B96); }
        .language-row strong { color: #556277; font-size: 9px; text-align: right; }
        .dashboard-footer {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 10px;
          border: 1px solid #E7EAF0;
          border-radius: 14px;
          background: #FFFFFF;
          padding: 12px 14px;
        }
        .dashboard-footer span { color: #7D8A9D; font-size: 9px; }
        .dashboard-footer strong { color: #536176; font-size: 9px; }

        /* Local navigation */
        .local-nav-wrap { border-bottom: 1px solid var(--line); background: rgba(255,255,255,.97); }
        .local-nav {
          display: flex;
          min-height: 60px;
          align-items: center;
          gap: 24px;
        }
        .local-nav-label { margin-right: 4px; color: #7C899B; font-size: 11px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
        .local-nav a { color: #4F5D70; font-size: 14px; font-weight: 600; }
        .local-nav a:hover { color: var(--magenta); }

        /* Value strip */
        .value-section { padding: 80px 0; background: #FFFFFF; }
        .value-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: var(--line);
          gap: 1px;
        }
        .value-item { min-width: 0; background: #FFFFFF; padding: 30px 27px; }
        .value-icon {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 14px;
          background: var(--pink-soft);
          color: var(--magenta);
        }
        .value-item h3 { margin: 20px 0 10px; font-size: 18px; letter-spacing: -.025em; }
        .value-item p { margin-bottom: 0; font-size: 14px; line-height: 1.7; }

        /* Program overview */
        .program-section { padding: 96px 0; background: #F8F9FB; }
        .program-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
        .program-copy { position: sticky; top: 28px; }
        .program-copy p:last-of-type { max-width: 430px; margin-bottom: 30px; font-size: 18px; line-height: 1.75; }
        .program-panel {
          overflow: hidden;
          border: 1px solid #E1E5EB;
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 48px rgba(16,24,39,.05);
        }
        .program-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid var(--line);
          padding: 24px 26px;
        }
        .program-panel-top strong { font-size: 18px; }
        .filter-set { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
        .filter-chip { display: inline-flex; align-items: center; gap: 6px; border: 1px solid #E0E4EA; border-radius: 999px; padding: 6px 10px; color: #667489; font-size: 11px; font-weight: 650; }
        .program-metrics { display: grid; grid-template-columns: repeat(2, 1fr); }
        .program-metric {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 15px;
          min-width: 0;
          border-bottom: 1px solid var(--line);
          padding: 24px 26px;
        }
        .program-metric:nth-child(odd) { border-right: 1px solid var(--line); }
        .program-metric:nth-last-child(-n+2) { border-bottom: 0; }
        .metric-index {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 12px;
          background: #F7F8FA;
          color: var(--magenta);
          font-size: 12px;
          font-weight: 750;
        }
        .program-metric strong { display: block; font-size: 15px; }
        .program-metric p { margin: 5px 0 0; font-size: 14px; line-height: 1.6; }
        .program-panel-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid var(--line);
          background: #FCFCFD;
          padding: 20px 26px;
        }
        .program-panel-footer p { max-width: 560px; margin: 0; color: #657388; font-size: 13px; }

        /* Spend */
        .spend-section { padding: 96px 0; background: #FFFFFF; }
        .spend-layout { display: grid; grid-template-columns: 1.08fr .92fr; gap: 72px; align-items: center; margin-top: 54px; }
        .finance-board {
          border: 1px solid #E1E5EB;
          border-radius: 30px;
          background: #FFFFFF;
          padding: 26px;
          box-shadow: 0 22px 58px rgba(16,24,39,.07);
        }
        .finance-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; }
        .finance-head strong { display: block; font-size: 17px; }
        .finance-head span { display: block; margin-top: 4px; color: #7E8B9E; font-size: 12px; }
        .finance-badge { border-radius: 999px; background: var(--pink-soft); padding: 7px 11px; color: var(--magenta); font-size: 10px; font-weight: 750; }
        .finance-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 22px; }
        .finance-kpi { border: 1px solid var(--line); border-radius: 16px; background: #FCFCFD; padding: 16px; }
        .finance-kpi span { display: block; color: #7A8799; font-size: 11px; }
        .finance-kpi strong { display: block; margin-top: 7px; font-size: 22px; line-height: 1.15; }
        .finance-kpi small { display: block; margin-top: 6px; color: #6E7B8D; font-size: 10px; }
        .finance-chart-wrap { display: grid; grid-template-columns: 1.15fr .85fr; gap: 18px; margin-top: 22px; }
        .bar-chart, .savings-list { border-top: 1px solid var(--line); padding-top: 20px; }
        .bar-chart-title, .savings-title { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #657287; font-size: 11px; font-weight: 700; }
        .bars { display: flex; height: 156px; align-items: flex-end; gap: 12px; margin-top: 16px; padding-bottom: 23px; border-bottom: 1px solid #E9ECF1; }
        .bar { position: relative; flex: 1; min-width: 14px; border-radius: 7px 7px 2px 2px; background: linear-gradient(180deg, #C11D63, #DF78A7); }
        .bar::after { content: attr(data-label); position: absolute; left: 50%; top: calc(100% + 6px); transform: translateX(-50%); color: #8490A1; font-size: 8px; }
        .savings-list { display: grid; gap: 15px; align-content: start; }
        .saving-row { display: grid; gap: 7px; }
        .saving-row-top { display: flex; justify-content: space-between; gap: 12px; color: #647186; font-size: 10px; }
        .saving-row-top strong { color: #445267; font-size: 10px; }
        .saving-track { height: 7px; overflow: hidden; border-radius: 999px; background: #EEF1F4; }
        .saving-track i { display: block; height: 100%; border-radius: inherit; background: #C11D63; }
        .spend-copy h3 { margin-bottom: 17px; }
        .spend-copy > p { margin-bottom: 26px; font-size: 17px; line-height: 1.75; }
        .dimension-cloud { display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 30px; }
        .dimension-cloud span { border: 1px solid #E1E5EA; border-radius: 999px; background: #FFFFFF; padding: 7px 11px; color: #5E6B7F; font-size: 12px; }
        .cost-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 13px 22px; margin: 0; padding: 0; list-style: none; }
        .cost-list li { display: flex; gap: 9px; color: #536176; font-size: 14px; line-height: 1.55; }
        .cost-list svg { flex: 0 0 auto; margin-top: 3px; color: var(--magenta); }

        /* Workflow dark */
        .workflow-section { padding: 96px 0; background: var(--dark); }
        .workflow-section::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 78% 18%, rgba(193,29,99,.15), transparent 31%); pointer-events: none; }
        .workflow-section .shell { position: relative; }
        .workflow-intro-row { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; align-items: end; }
        .workflow-intro-row .section-intro { max-width: 500px; }
        .workflow-summary { max-width: 660px; margin-left: auto; color: #C7C9D6; font-size: 18px; line-height: 1.75; }
        .workflow-board {
          margin-top: 52px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 30px;
          background: rgba(255,255,255,.045);
          padding: 28px;
          box-shadow: 0 26px 70px rgba(0,0,0,.2);
        }
        .workflow-board-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,.1); }
        .workflow-board-head > div > strong { display: block; color: #FFFFFF; font-size: 17px; }
        .workflow-board-head > div > span { display: block; margin-top: 4px; color: #AEB4C5; font-size: 11px; }
        .sla-chip { display: inline-flex; align-items: center; gap: 7px; border-radius: 999px; background: rgba(193,29,99,.18); padding: 8px 11px; color: #F6A7C9 !important; font-size: 11px; font-weight: 700; }
        .workflow-stage-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; margin-top: 24px; }
        .stage-card { min-width: 0; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; background: rgba(255,255,255,.04); padding: 17px 14px; }
        .stage-card span { display: block; color: #9FA6B8; font-size: 10px; }
        .stage-card strong { display: block; overflow-wrap: anywhere; margin-top: 7px; color: #FFFFFF; font-size: 13px; line-height: 1.35; }
        .stage-card i { display: block; height: 5px; margin-top: 14px; border-radius: 99px; background: rgba(255,255,255,.1); }
        .stage-card i::after { content: ""; display: block; width: var(--stage, 50%); height: 100%; border-radius: inherit; background: #E15A96; }
        .workflow-detail-grid { display: grid; grid-template-columns: 1.07fr .93fr; gap: 22px; margin-top: 22px; }
        .workflow-plot, .workflow-alerts { border: 1px solid rgba(255,255,255,.1); border-radius: 20px; background: rgba(255,255,255,.035); padding: 22px; }
        .dark-panel-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .dark-panel-head strong { color: #FFFFFF; font-size: 14px; }
        .dark-panel-head span { color: #9FA6B8; font-size: 10px; }
        .velocity-bars { display: grid; gap: 13px; margin-top: 21px; }
        .velocity-row { display: grid; grid-template-columns: 72px 1fr 38px; align-items: center; gap: 12px; }
        .velocity-row span, .velocity-row strong { color: #B8BDCC; font-size: 10px; }
        .velocity-row strong { text-align: right; }
        .velocity-track { height: 9px; overflow: hidden; border-radius: 99px; background: rgba(255,255,255,.08); }
        .velocity-track i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #C11D63, #F09CC1); }
        .workflow-alert-list { display: grid; gap: 13px; margin-top: 18px; }
        .workflow-alert { display: grid; grid-template-columns: 34px 1fr auto; gap: 11px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.08); padding-bottom: 13px; }
        .workflow-alert:last-child { border-bottom: 0; padding-bottom: 0; }
        .workflow-alert-icon { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 11px; background: rgba(193,29,99,.16); color: #F09AC0; }
        .workflow-alert strong { display: block; color: #FFFFFF; font-size: 11px; }
        .workflow-alert span { display: block; margin-top: 2px; color: #9FA6B8; font-size: 9px; }
        .workflow-alert em { color: #F5A5C8; font-size: 9px; font-style: normal; font-weight: 700; }
        .workflow-link-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.1); }
        .workflow-link-row p { max-width: 720px; margin: 0; color: #B6BBCA; font-size: 14px; }
        .workflow-link-row .arrow-link { flex: 0 0 auto; color: #F3A3C5 !important; }

        /* Quality */
        .quality-section { padding: 96px 0; background: #FFFFFF; }
        .quality-layout { display: grid; grid-template-columns: .88fr 1.12fr; gap: 72px; align-items: start; margin-top: 52px; }
        .quality-copy > p { margin-bottom: 29px; font-size: 17px; line-height: 1.75; }
        .quality-list { border-top: 1px solid var(--line); }
        .quality-list article { display: grid; grid-template-columns: 44px 1fr; gap: 14px; border-bottom: 1px solid var(--line); padding: 18px 0; }
        .quality-list-icon { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 12px; background: var(--pink-soft); color: var(--magenta); }
        .quality-list h3 { margin-bottom: 5px; font-size: 16px; }
        .quality-list p { margin: 0; font-size: 14px; line-height: 1.6; }
        .quality-dashboard { border: 1px solid #E0E5EB; border-radius: 30px; background: #F9FAFB; padding: 18px; box-shadow: 0 22px 58px rgba(16,24,39,.08); }
        .quality-dashboard-inner { border: 1px solid #E5E8EE; border-radius: 22px; background: #FFFFFF; padding: 22px; }
        .quality-head { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; }
        .quality-head strong { font-size: 16px; }
        .quality-head span { display: block; margin-top: 4px; color: #7D899C; font-size: 11px; }
        .quality-score { display: flex; align-items: baseline; gap: 5px; }
        .quality-score strong { color: var(--magenta); font-size: 31px; }
        .quality-score span { color: #8490A2; font-size: 11px; }
        .quality-graph { position: relative; height: 172px; margin-top: 24px; border-bottom: 1px solid #E6E9EE; }
        .quality-graph .chart-gridline { background: #EDF0F3; }
        .quality-legend { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 15px; }
        .quality-legend span { display: inline-flex; align-items: center; gap: 7px; color: #6A778B; font-size: 10px; }
        .quality-legend i { width: 9px; height: 9px; border-radius: 50%; background: var(--magenta); }
        .quality-legend span:nth-child(2) i { background: #717D91; }
        .quality-legend span:nth-child(3) i { background: #D9A238; }
        .quality-breakdown { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 22px; }
        .quality-breakdown article { border: 1px solid var(--line); border-radius: 15px; padding: 15px; }
        .quality-breakdown span { color: #7C899B; font-size: 10px; }
        .quality-breakdown strong { display: block; margin-top: 6px; font-size: 17px; }
        .quality-breakdown small { display: block; margin-top: 5px; color: #6A778B; font-size: 9px; }

        /* AI / TM comparison */
        .technology-section { padding: 96px 0; background: #F7F8FA; }
        .technology-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 52px; }
        .tech-panel { overflow: hidden; border: 1px solid #E0E4EA; border-radius: 30px; background: #FFFFFF; }
        .tech-panel-head { display: grid; grid-template-columns: 46px 1fr; gap: 15px; align-items: start; border-bottom: 1px solid var(--line); padding: 27px 28px; }
        .tech-icon { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 14px; background: var(--pink-soft); color: var(--magenta); }
        .tech-panel h3 { margin: 0 0 8px; }
        .tech-panel-head p { margin: 0; font-size: 14px; line-height: 1.65; }
        .tech-list { display: grid; grid-template-columns: repeat(2, 1fr); }
        .tech-list li { display: flex; gap: 9px; min-width: 0; border-bottom: 1px solid var(--line); padding: 16px 22px; color: #526075; font-size: 13px; line-height: 1.55; list-style: none; }
        .tech-list li:nth-child(odd) { border-right: 1px solid var(--line); }
        .tech-list li:nth-last-child(-n+2) { border-bottom: 0; }
        .tech-list svg { flex: 0 0 auto; margin-top: 3px; color: var(--magenta); }
        .method-board { margin-top: 24px; border: 1px solid #E0E4EA; border-radius: 30px; background: #FFFFFF; padding: 28px; }
        .method-board-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
        .method-board-head h3 { margin-bottom: 8px; }
        .method-board-head p { max-width: 690px; margin: 0; font-size: 14px; }
        .method-grid { display: grid; grid-template-columns: 1.3fr repeat(4, 1fr); margin-top: 25px; overflow: hidden; border: 1px solid var(--line); border-radius: 18px; }
        .method-cell { min-width: 0; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 14px 15px; color: #59677B; font-size: 12px; }
        .method-cell:nth-child(5n) { border-right: 0; }
        .method-cell:nth-last-child(-n+5) { border-bottom: 0; }
        .method-cell.header { background: #F8F9FB; color: #273247; font-weight: 700; }
        .method-cell.label { color: #273247; font-weight: 650; }
        .method-mobile { display: none; }

        /* Custom dashboards */
        .custom-section { padding: 96px 0; background: #FFFFFF; }
        .custom-layout { display: grid; grid-template-columns: .92fr 1.08fr; gap: 72px; align-items: center; margin-top: 52px; }
        .custom-copy > p { font-size: 17px; line-height: 1.75; }
        .custom-capabilities { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px 20px; margin-top: 26px; }
        .custom-capability { display: flex; gap: 10px; color: #536176; font-size: 14px; }
        .custom-capability svg { flex: 0 0 auto; margin-top: 3px; color: var(--magenta); }
        .dimension-title { margin: 30px 0 13px; color: #273247; font-size: 13px; font-weight: 700; }
        .dimension-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .dimension-tags span { border: 1px solid #E1E5EA; border-radius: 999px; background: #FBFBFC; padding: 7px 10px; color: #647186; font-size: 11px; }
        .builder {
          border: 1px solid #DFE4EA;
          border-radius: 30px;
          background: #F8F9FB;
          padding: 16px;
          box-shadow: 0 22px 58px rgba(16,24,39,.08);
        }
        .builder-inner { overflow: hidden; border: 1px solid #E4E8ED; border-radius: 22px; background: #FFFFFF; }
        .builder-top { display: flex; justify-content: space-between; align-items: center; gap: 18px; border-bottom: 1px solid var(--line); padding: 18px 20px; }
        .builder-top > div > strong { display: block; font-size: 14px; }
        .builder-top > div > span { display: block; margin-top: 3px; color: #7A879A; font-size: 10px; }
        .builder-top > span { color: #7A879A; font-size: 10px; }
        .builder-layout { display: grid; grid-template-columns: 160px 1fr; min-height: 365px; }
        .builder-sidebar { border-right: 1px solid var(--line); background: #FCFCFD; padding: 17px 14px; }
        .builder-sidebar-label { color: #8994A5; font-size: 9px; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
        .builder-menu { display: grid; gap: 6px; margin-top: 12px; }
        .builder-menu span { display: flex; align-items: center; gap: 8px; border-radius: 9px; padding: 8px; color: #637085; font-size: 10px; }
        .builder-menu span.active { background: var(--pink-soft); color: var(--magenta); font-weight: 700; }
        .builder-main { padding: 18px; }
        .builder-controls { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .builder-control { border: 1px solid var(--line); border-radius: 11px; padding: 9px 10px; }
        .builder-control span { display: block; color: #8A95A6; font-size: 8px; }
        .builder-control strong { display: block; margin-top: 3px; color: #4E5C71; font-size: 9px; }
        .builder-widgets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 12px; }
        .builder-widget { min-height: 112px; border: 1px solid var(--line); border-radius: 13px; padding: 12px; }
        .builder-widget.wide { grid-column: span 2; }
        .builder-widget strong { display: block; font-size: 10px; }
        .mini-line { position: relative; height: 62px; margin-top: 10px; border-bottom: 1px solid #E8EBEF; }
        .mini-line svg { width: 100%; height: 100%; }
        .mini-bars { display: flex; height: 65px; align-items: end; gap: 6px; margin-top: 10px; }
        .mini-bars i { flex: 1; border-radius: 4px 4px 1px 1px; background: #C11D63; opacity: .72; }

        /* Reports */
        .reports-section { padding: 96px 0; background: #F8F9FB; }
        .reports-grid { display: grid; grid-template-columns: repeat(3, 1fr); overflow: hidden; margin-top: 50px; border: 1px solid var(--line); border-radius: 28px; background: var(--line); gap: 1px; }
        .report-item { min-width: 0; background: #FFFFFF; padding: 26px; }
        .report-item h3 { margin-bottom: 10px; font-size: 18px; }
        .report-item p { margin-bottom: 22px; font-size: 14px; line-height: 1.65; }
        .report-meta { display: flex; flex-wrap: wrap; gap: 8px; }
        .report-meta span { display: inline-flex; align-items: center; gap: 5px; border-radius: 999px; background: #F7F8FA; padding: 6px 8px; color: #667388; font-size: 9px; }
        .delivery-strip { display: grid; grid-template-columns: .82fr 1.18fr; gap: 56px; align-items: center; margin-top: 30px; border: 1px solid #E0E4EA; border-radius: 26px; background: #FFFFFF; padding: 30px; }
        .delivery-copy h3 { margin-bottom: 12px; }
        .delivery-copy p { margin-bottom: 0; font-size: 15px; }
        .delivery-options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .delivery-option { display: grid; min-height: 88px; place-items: center; border: 1px solid var(--line); border-radius: 15px; padding: 13px 8px; text-align: center; }
        .delivery-option svg { color: var(--magenta); }
        .delivery-option span { display: block; margin-top: 7px; color: #536176; font-size: 10px; font-weight: 700; }

        /* Connections */
        .connections-section { padding: 96px 0; background: #FFFFFF; }
        .connection-map { display: grid; grid-template-columns: 1fr 90px 1.2fr; align-items: center; margin-top: 54px; }
        .stepes-data {
          border: 1px solid #DFE4EA;
          border-radius: 28px;
          background: linear-gradient(145deg, #FFFFFF, #FCF6F9);
          padding: 30px;
          box-shadow: 0 20px 52px rgba(16,24,39,.06);
        }
        .stepes-data-icon { display: grid; width: 48px; height: 48px; place-items: center; border-radius: 15px; background: var(--magenta); color: #FFFFFF; }
        .stepes-data h3 { margin: 22px 0 12px; }
        .stepes-data p { margin-bottom: 21px; font-size: 14px; }
        .data-signals { display: flex; flex-wrap: wrap; gap: 8px; }
        .data-signals span { border-radius: 999px; background: #FFFFFF; border: 1px solid #E5E7EC; padding: 6px 9px; color: #687589; font-size: 10px; }
        .connection-arrow { display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .connection-arrow::before, .connection-arrow::after { content: ""; height: 1px; width: 20px; background: rgba(193,29,99,.35); }
        .connection-destinations { display: grid; grid-template-columns: repeat(2, 1fr); overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: var(--line); gap: 1px; }
        .connection-item { min-width: 0; background: #FFFFFF; padding: 24px; }
        .connection-item-icon { display: grid; width: 39px; height: 39px; place-items: center; border-radius: 12px; background: var(--pink-soft); color: var(--magenta); }
        .connection-item h3 { margin: 17px 0 9px; font-size: 17px; }
        .connection-item p { margin: 0; font-size: 13px; line-height: 1.65; }
        .connection-note { max-width: 900px; margin: 36px auto 0; text-align: center; }
        .connection-note p { margin-bottom: 20px; font-size: 15px; }
        .connection-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; }

        /* Stakeholders */
        .stakeholders-section { padding: 96px 0; background: #F8F9FB; }
        .stakeholder-table { overflow: hidden; margin-top: 50px; border: 1px solid #DEE3E9; border-radius: 28px; background: #FFFFFF; }
        .stakeholder-header, .stakeholder-row { display: grid; grid-template-columns: .8fr 1.2fr; }
        .stakeholder-header { background: #171825; }
        .stakeholder-header span { padding: 17px 24px; color: #FFFFFF; font-size: 12px; font-weight: 700; }
        .stakeholder-header span:first-child { border-right: 1px solid rgba(255,255,255,.1); }
        .stakeholder-row { border-bottom: 1px solid var(--line); }
        .stakeholder-row:last-child { border-bottom: 0; }
        .stakeholder-role, .stakeholder-focus { padding: 21px 24px; }
        .stakeholder-role { display: flex; align-items: center; gap: 12px; border-right: 1px solid var(--line); color: #253047; font-weight: 650; }
        .stakeholder-role i { display: block; width: 8px; height: 8px; flex: 0 0 auto; border-radius: 50%; background: var(--magenta); }
        .stakeholder-focus { color: #5D6A7E; }

        /* Governance */
        .governance-section { padding: 96px 0; background: #FFFFFF; }
        .governance-layout { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; }
        .governance-copy p { max-width: 430px; font-size: 18px; line-height: 1.75; }
        .governance-visual {
          margin-top: 34px;
          border: 1px solid #E0E4EA;
          border-radius: 24px;
          background: #FAFAFB;
          padding: 22px;
        }
        .access-scope { display: grid; gap: 10px; }
        .access-row { display: grid; grid-template-columns: 120px 1fr; gap: 10px; align-items: center; }
        .access-row strong { color: #465469; font-size: 11px; }
        .scope-track { display: flex; gap: 5px; }
        .scope-track i { flex: 1; height: 9px; border-radius: 99px; background: #E9ECF0; }
        .scope-track i.active { background: var(--magenta); }
        .governance-panel { overflow: hidden; border: 1px solid #DFE4EA; border-radius: 28px; }
        .governance-item { display: grid; grid-template-columns: 48px 1fr; gap: 15px; border-bottom: 1px solid var(--line); padding: 24px 26px; }
        .governance-item:last-child { border-bottom: 0; }
        .governance-icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: 14px; background: var(--pink-soft); color: var(--magenta); }
        .governance-item h3 { margin-bottom: 6px; font-size: 17px; }
        .governance-item p { margin: 0; font-size: 14px; line-height: 1.65; }
        .governance-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 28px; }

        /* Improvement */
        .improvement-section { padding: 96px 0; background: #171825; }
        .improvement-section::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 20% 0%, rgba(193,29,99,.15), transparent 30%); }
        .improvement-section .shell { position: relative; }
        .improvement-track { display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 54px; }
        .improvement-step { position: relative; min-width: 0; padding: 0 22px; }
        .improvement-step:first-child { padding-left: 0; }
        .improvement-step:last-child { padding-right: 0; }
        .improvement-step:not(:last-child)::after { content: ""; position: absolute; top: 23px; right: -9px; width: 18px; height: 1px; background: rgba(255,255,255,.24); }
        .improvement-number { display: grid; width: 46px; height: 46px; place-items: center; border: 1px solid rgba(255,255,255,.17); border-radius: 15px; color: #F19CC1; font-size: 11px; font-weight: 750; }
        .improvement-step h3 { margin: 21px 0 11px; color: #FFFFFF; font-size: 19px; }
        .improvement-step p { margin: 0; color: #B7BDCC; font-size: 13px; line-height: 1.7; }
        .improvement-actions { display: grid; grid-template-columns: .82fr 1.18fr; gap: 52px; align-items: start; margin-top: 54px; border-top: 1px solid rgba(255,255,255,.12); padding-top: 36px; }
        .improvement-actions h3 { color: #FFFFFF; }
        .action-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 13px 22px; }
        .action-list div { display: flex; gap: 9px; color: #BDC2CF; font-size: 13px; }
        .action-list svg { flex: 0 0 auto; margin-top: 3px; color: #F09CC1; }

        /* Related */
        .related-section { padding: 96px 0; background: #FFFFFF; }
        .related-directory { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 48px; overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: var(--line); gap: 1px; }
        .related-item { min-width: 0; background: #FFFFFF; padding: 28px; }
        .related-item h3 { margin-bottom: 11px; font-size: 19px; }
        .related-item p { min-height: 92px; margin-bottom: 21px; font-size: 14px; line-height: 1.65; }

        /* Final CTA */
        .final-cta { padding: 40px 0 96px; background: #FFFFFF; }
        .final-cta-panel {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 50px;
          align-items: center;
          border: 1px solid #E4CDD7;
          border-radius: 30px;
          background: linear-gradient(135deg, #FFF9FC, #FDF2F7);
          padding: 52px 54px;
        }
        .final-cta h2 { margin-bottom: 16px; }
        .final-cta p { max-width: 760px; margin: 0; font-size: 18px; line-height: 1.7; }
        .final-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 11px; }

        @media (max-width: 1279px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, .88fr) minmax(470px, 1.12fr); gap: 44px; }
          .workflow-stage-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1023px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero .shell { padding-top: 88px; padding-bottom: 72px; }
          .hero-grid, .program-layout, .spend-layout, .workflow-intro-row, .quality-layout, .custom-layout, .governance-layout { grid-template-columns: 1fr; gap: 46px; }
          .hero-copy { max-width: 760px; }
          .hero-product { max-width: 720px; width: 100%; }
          .local-nav { flex-wrap: wrap; gap: 12px 20px; padding-top: 14px; padding-bottom: 14px; }
          .local-nav-label { width: 100%; }
          .value-grid { grid-template-columns: repeat(2, 1fr); }
          .program-copy { position: static; }
          .program-copy p:last-of-type { max-width: 720px; }
          .finance-board { order: 2; }
          .spend-copy { order: 1; }
          .workflow-summary { max-width: 760px; margin-left: 0; }
          .technology-compare { grid-template-columns: 1fr; }
          .delivery-strip, .connection-map, .improvement-actions { grid-template-columns: 1fr; }
          .connection-map { gap: 24px; }
          .connection-arrow { transform: rotate(90deg); }
          .reports-grid, .related-directory { grid-template-columns: repeat(2, 1fr); }
          .improvement-track { grid-template-columns: repeat(5, minmax(0, 1fr)); overflow: visible; padding-bottom: 0; }
          .improvement-step { min-width: 0; padding-left: 14px; padding-right: 14px; }
          .final-cta-panel { grid-template-columns: 1fr; }
          .final-actions { justify-content: flex-start; }
        }

        @media (max-width: 900px) and (min-width: 768px) {
          .improvement-track { grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 34px 0; }
          .improvement-step { grid-column: span 2; padding-left: 18px; padding-right: 18px; }
          .improvement-step:nth-child(4) { grid-column: 2 / span 2; }
          .improvement-step:nth-child(5) { grid-column: 4 / span 2; }
          .improvement-step:not(:last-child)::after { display: none; }
        }

        @media (max-width: 767px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          section { scroll-margin-top: 20px; }
          .local-nav {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            min-height: 0;
            gap: 10px 16px;
            padding-top: 16px;
            padding-bottom: 16px;
          }
          .local-nav-label { grid-column: 1 / -1; width: auto; margin: 0 0 2px; }
          .local-nav a { font-size: 13px; }
          h1 { font-size: 38px; line-height: 1.07; }
          h2 { font-size: 30px; line-height: 1.1; }
          h3 { font-size: 20px; }
          .hero .shell { padding-top: 72px; padding-bottom: 64px; }
          .hero-grid { gap: 40px; }
          .hero-lead, .section-intro > p:last-child, .program-copy p:last-of-type, .workflow-summary, .governance-copy p, .final-cta p { font-size: 17px; }
          .hero-actions, .final-actions { flex-direction: column; align-items: stretch; }
          .button { width: 100%; }
          .hero-product { padding: 8px; border-radius: 24px; }
          .dashboard { border-radius: 18px; }
          .dashboard-topbar { align-items: flex-start; padding: 15px; }
          .dashboard-period { display: none; }
          .dashboard-body { padding: 10px; }
          .metric-grid { grid-template-columns: repeat(2, 1fr); }
          .metric-card:nth-child(3) { grid-column: span 2; }
          .dashboard-main { grid-template-columns: 1fr; }
          .language-panel { display: none; }
          .dashboard-footer { flex-direction: column; }
          .dashboard-footer strong { display: none; }
          .value-section, .program-section, .spend-section, .workflow-section, .quality-section, .technology-section, .custom-section, .reports-section, .connections-section, .stakeholders-section, .governance-section, .improvement-section, .related-section { padding-top: 68px; padding-bottom: 68px; }
          .value-grid, .program-metrics, .finance-kpis, .finance-chart-wrap, .quality-breakdown, .tech-list, .custom-capabilities, .reports-grid, .delivery-options, .connection-destinations, .related-directory, .action-list { grid-template-columns: 1fr; }
          .value-item { padding: 25px 23px; }
          .program-panel-top, .program-panel-footer, .workflow-board-head, .workflow-link-row, .method-board-head { align-items: flex-start; flex-direction: column; }
          .filter-set { justify-content: flex-start; }
          .program-metric { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; padding: 21px 22px; }
          .program-metric:last-child { border-bottom: 0 !important; }
          .program-panel-footer { padding: 20px 22px; }
          .cost-list { grid-template-columns: 1fr; }
          .workflow-board { padding: 18px; border-radius: 24px; }
          .workflow-stage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .workflow-detail-grid { grid-template-columns: 1fr; }
          .workflow-link-row .arrow-link { flex: auto; }
          .quality-layout, .custom-layout { margin-top: 40px; }
          .quality-dashboard { padding: 9px; border-radius: 24px; }
          .quality-dashboard-inner { padding: 17px; border-radius: 18px; }
          .quality-head { align-items: flex-start; }
          .quality-breakdown article { padding: 14px; }
          .tech-panel, .method-board { border-radius: 24px; }
          .tech-list li { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .tech-list li:last-child { border-bottom: 0 !important; }
          .method-board { padding: 21px; }
          .method-grid { display: none; }
          .method-mobile { display: grid; gap: 12px; margin-top: 22px; }
          .method-mobile article { border: 1px solid var(--line); border-radius: 16px; padding: 17px; }
          .method-mobile h4 { margin: 0 0 12px; color: var(--ink); font-size: 16px; letter-spacing: -.02em; }
          .method-mobile dl { display: grid; grid-template-columns: 88px 1fr; gap: 8px 12px; margin: 0; }
          .method-mobile dt { color: #7A879A; font-size: 11px; }
          .method-mobile dd { margin: 0; color: #526075; font-size: 12px; font-weight: 600; }
          .builder { padding: 8px; border-radius: 24px; }
          .builder-top { align-items: flex-start; flex-wrap: wrap; }
          .builder-layout { grid-template-columns: 1fr; }
          .builder-sidebar { border-right: 0; border-bottom: 1px solid var(--line); }
          .builder-menu { grid-template-columns: repeat(2, 1fr); }
          .builder-controls, .builder-widgets { grid-template-columns: 1fr; }
          .builder-widget.wide { grid-column: auto; }
          .delivery-strip { padding: 23px; }
          .connection-map { margin-top: 40px; }
          .stakeholder-header { display: none; }
          .stakeholder-row { grid-template-columns: 1fr; }
          .stakeholder-role { border-right: 0; border-bottom: 1px solid var(--line); padding-bottom: 13px; }
          .stakeholder-focus { padding-top: 13px; }
          .governance-item { padding: 21px; }
          .connection-links, .governance-links { flex-direction: column; align-items: flex-start; gap: 14px; }
          .improvement-track { display: grid; grid-template-columns: 1fr; overflow: visible; gap: 28px; }
          .improvement-step { grid-column: auto; min-width: 0; padding: 0 0 0 64px; }
          .improvement-step:first-child, .improvement-step:last-child { padding-left: 64px; padding-right: 0; }
          .improvement-number { position: absolute; left: 0; top: 0; }
          .improvement-step h3 { margin-top: 0; }
          .improvement-step:not(:last-child)::after { left: 23px; top: 52px; right: auto; width: 1px; height: calc(100% - 30px); }
          .related-item p { min-height: 0; }
          .final-cta { padding: 24px 0 72px; }
          .final-cta-panel { gap: 30px; padding: 36px 24px; border-radius: 24px; }
        }

        @media (max-width: 359px) {
          .local-nav { grid-template-columns: 1fr; }
          .metric-grid, .workflow-stage-grid { grid-template-columns: 1fr; }
          .metric-card:nth-child(3) { grid-column: auto; }
          .quality-score strong { font-size: 27px; }
        }
      `}</style>

      <section className="hero" id="top">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Translation Reporting and Analytics for Enterprise Language Operations</h1>
              <p className="hero-lead">
                Gain a complete view of translation volume, spend, quality, workflow performance,
                and technology utilization across your organization. Stepes brings language
                program data together in configurable dashboards so teams can measure results,
                identify opportunities, and continuously improve global content operations.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert <Icon name="arrow" size={18} />
                </a>
                <a className="button button-secondary" href="https://www.stepes.com/ai-translation-platform/">
                  Explore the Stepes Platform
                </a>
              </div>
              <div className="hero-note">
                <Icon name="eye" size={18} />
                <span>
                  See what is being translated, how efficiently it moves, what it costs, how well
                  it performs, and where your language program can improve.
                </span>
              </div>
            </div>

            <div className="hero-product" aria-label="Enterprise translation analytics dashboard">
              <div className="dashboard">
                <div className="dashboard-topbar">
                  <div className="dashboard-title">
                    <div className="dashboard-title-mark"><Icon name="dashboard" size={18} /></div>
                    <div>
                      <strong>Enterprise Program Overview</strong>
                      <small>Unified performance view</small>
                    </div>
                  </div>
                  <div className="dashboard-period"><Icon name="calendar" size={13} /> Current Quarter</div>
                </div>
                <div className="dashboard-body">
                  <div className="metric-grid">
                    <div className="metric-card">
                      <span>Translation Volume</span>
                      <strong>1.24M</strong>
                      <small><Icon name="trend" size={11} /> Words processed</small>
                    </div>
                    <div className="metric-card">
                      <span>On-Time Delivery</span>
                      <strong>96.8%</strong>
                      <small><Icon name="check" size={11} /> SLA performance</small>
                    </div>
                    <div className="metric-card">
                      <span>TM Leverage</span>
                      <strong>42%</strong>
                      <small><Icon name="memory" size={11} /> Reused content</small>
                    </div>
                  </div>

                  <div className="dashboard-main">
                    <div className="chart-panel">
                      <div className="chart-heading">
                        <strong>Program Activity</strong>
                        <span>Volume by month</span>
                      </div>
                      <div className="chart-area">
                        <span className="chart-gridline" />
                        <span className="chart-gridline" />
                        <span className="chart-gridline" />
                        <span className="chart-gridline" />
                        <svg className="chart-svg" viewBox="0 0 360 150" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#C11D63" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#C11D63" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0 122 C42 112 48 83 88 92 C128 102 143 53 184 67 C224 80 244 38 281 49 C319 60 334 20 360 28 L360 150 L0 150 Z" fill="url(#heroArea)" />
                          <path d="M0 122 C42 112 48 83 88 92 C128 102 143 53 184 67 C224 80 244 38 281 49 C319 60 334 20 360 28" fill="none" stroke="#C11D63" strokeWidth="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="language-panel">
                      <div className="language-heading">
                        <strong>Top Languages</strong>
                        <span>By volume</span>
                      </div>
                      <div className="language-list">
                        {[
                          ["Spanish", "84%", "32%"],
                          ["French", "68%", "24%"],
                          ["German", "55%", "18%"],
                          ["Japanese", "41%", "14%"],
                          ["Chinese", "35%", "12%"],
                        ].map(([label, width, value]) => (
                          <div className="language-row" key={label}>
                            <span>{label}</span>
                            <div className="language-track"><i style={{ width }} /></div>
                            <strong>{value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-footer">
                    <span>Filters: Global · All business units · 18 languages</span>
                    <strong>Unified current program view</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="local-nav-wrap">
        <nav className="shell local-nav" aria-label="On this page">
          <span className="local-nav-label">On This Page</span>
          <a href={`${PAGE_URL}#overview`}>Overview</a>
          <a href={`${PAGE_URL}#spend`}>Spend</a>
          <a href={`${PAGE_URL}#workflow`}>Workflow</a>
          <a href={`${PAGE_URL}#quality`}>Quality</a>
          <a href={`${PAGE_URL}#technology`}>AI &amp; TM</a>
          <a href={`${PAGE_URL}#dashboards`}>Dashboards</a>
          <a href={`${PAGE_URL}#connections`}>Connections</a>
          <a href={`${PAGE_URL}#governance`}>Governance</a>
        </nav>
      </div>

      <section className="value-section">
        <div className="shell">
          <div className="value-grid">
            {valuePoints.map((item) => (
              <article className="value-item" key={item.title}>
                <div className="value-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program-section" id="overview">
        <div className="shell program-layout">
          <div className="program-copy">
            <p className="eyebrow">Enterprise Program Visibility</p>
            <h2>See Your Complete Translation Program in One View</h2>
            <p>
              Enterprise translation programs often span multiple departments, regions, brands,
              languages, content types, and technology systems. Stepes brings those activities into
              one enterprise analytics environment for planning, governance, performance reviews,
              and continuous improvement.
            </p>
            <ArrowLink href="https://www.stepes.com/enterprise-translation-management/">
              Explore Enterprise Translation Management
            </ArrowLink>
          </div>

          <div className="program-panel">
            <div className="program-panel-top">
              <strong>Program Intelligence</strong>
              <div className="filter-set">
                <span className="filter-chip"><Icon name="filter" size={12} /> Global</span>
                <span className="filter-chip">All Business Units</span>
                <span className="filter-chip">Current Quarter</span>
              </div>
            </div>
            <div className="program-metrics">
              {programMetrics.map(([title, description], index) => (
                <article className="program-metric" key={title}>
                  <span className="metric-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="program-panel-footer">
              <p>
                Start with an enterprise overview, then drill down by business unit, program,
                language, workflow, project, content type, supplier, or reporting period.
              </p>
              <Icon name="trend" size={23} />
            </div>
          </div>
        </div>
      </section>

      <section className="spend-section" id="spend">
        <div className="shell">
          <SectionIntro
            eyebrow="Financial Intelligence"
            title="Understand Translation Spend and Where Value Is Created"
            description="Centralize translation cost reporting so procurement, finance, localization leaders, and program owners can see where budgets are used and how language technology, content reuse, and workflow improvements affect overall spend."
          />

          <div className="spend-layout">
            <div className="finance-board" aria-label="Translation spend and savings dashboard">
              <div className="finance-head">
                <div>
                  <strong>Spend and Savings Overview</strong>
                  <span>Spend, savings, and budget utilization</span>
                </div>
                <span className="finance-badge">Current Quarter</span>
              </div>
              <div className="finance-kpis">
                <article className="finance-kpi">
                  <span>Program Spend</span>
                  <strong>$186K</strong>
                  <small>Across all business units</small>
                </article>
                <article className="finance-kpi">
                  <span>TM Savings</span>
                  <strong>$52K</strong>
                  <small>Content reuse value</small>
                </article>
                <article className="finance-kpi">
                  <span>Budget Used</span>
                  <strong>71%</strong>
                  <small>Against current allocation</small>
                </article>
              </div>
              <div className="finance-chart-wrap">
                <div className="bar-chart">
                  <div className="bar-chart-title"><span>Spend by business unit</span><span>USD</span></div>
                  <div className="bars">
                    <i className="bar" data-label="Product" style={{ height: "82%" }} />
                    <i className="bar" data-label="Marketing" style={{ height: "64%" }} />
                    <i className="bar" data-label="Support" style={{ height: "46%" }} />
                    <i className="bar" data-label="Legal" style={{ height: "58%" }} />
                    <i className="bar" data-label="Life Sci." style={{ height: "73%" }} />
                  </div>
                </div>
                <div className="savings-list">
                  <div className="savings-title"><span>Operational savings</span><span>Share</span></div>
                  {[
                    ["TM reuse", "78%", "42%"],
                    ["Repetitions", "55%", "24%"],
                    ["AI-assisted", "47%", "19%"],
                    ["Automation", "33%", "15%"],
                  ].map(([label, width, value]) => (
                    <div className="saving-row" key={label}>
                      <div className="saving-row-top"><span>{label}</span><strong>{value}</strong></div>
                      <div className="saving-track"><i style={{ width }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="spend-copy">
              <h3>Analyze Spend Around Your Operating Model</h3>
              <p>
                Compare planned budgets with actual activity, review period-over-period changes,
                and identify the programs, markets, or content categories creating the greatest demand.
              </p>
              <div className="dimension-cloud">
                {spendDimensions.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ul className="cost-list">
                {costMeasures.map((item) => (
                  <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="shell">
          <div className="workflow-intro-row">
            <SectionIntro
              eyebrow="Workflow Analytics"
              title="Measure Workflow Velocity and SLA Performance"
              dark
            />
            <p className="workflow-summary">
              Understand how work moves through intake, preparation, translation, editing,
              linguistic review, approval, validation, and publishing. Identify where delays
              begin before they affect releases, campaigns, submissions, or customer communications.
            </p>
          </div>

          <div className="workflow-board">
            <div className="workflow-board-head">
              <div>
                <strong>Translation Workflow Performance</strong>
                <span>Stage duration, capacity, work in progress, and delivery risk</span>
              </div>
              <span className="sla-chip"><Icon name="clock" size={13} /> SLA Monitoring Active</span>
            </div>

            <div className="workflow-stage-grid">
              {[
                ["01", "Intake", "0.4 day", "38%"],
                ["02", "Preparation", "0.6 day", "47%"],
                ["03", "Translation", "1.8 days", "68%"],
                ["04", "Review", "2.3 days", "82%"],
                ["05", "Approval", "1.5 days", "73%"],
                ["06", "Delivery", "0.3 day", "52%"],
              ].map(([number, label, duration, width]) => (
                <article className="stage-card" key={label}>
                  <span>{number} · {duration}</span>
                  <strong>{label}</strong>
                  <i style={{ "--stage": width }} />
                </article>
              ))}
            </div>

            <div className="workflow-detail-grid">
              <div className="workflow-plot">
                <div className="dark-panel-head"><strong>Throughput by Language</strong><span>Completed tasks</span></div>
                <div className="velocity-bars">
                  {[
                    ["Spanish", "88%", "284"],
                    ["French", "71%", "229"],
                    ["German", "62%", "201"],
                    ["Japanese", "48%", "156"],
                    ["Chinese", "43%", "139"],
                  ].map(([label, width, value]) => (
                    <div className="velocity-row" key={label}>
                      <span>{label}</span>
                      <div className="velocity-track"><i style={{ width }} /></div>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="workflow-alerts">
                <div className="dark-panel-head"><strong>Operational Attention</strong><span>Current signals</span></div>
                <div className="workflow-alert-list">
                  {[
                    ["Review Queue", "German product content", "High"],
                    ["Approval Delay", "APAC marketing workflow", "Watch"],
                    ["Capacity", "Japanese technical review", "Plan"],
                  ].map(([title, detail, status]) => (
                    <div className="workflow-alert" key={title}>
                      <span className="workflow-alert-icon"><Icon name="trend" size={15} /></span>
                      <div><strong>{title}</strong><span>{detail}</span></div>
                      <em>{status}</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="workflow-link-row">
              <p>
                Compare cycle time, queue depth, rework, throughput, and automated versus manual
                processing by language, team, project type, workflow, service level, or supplier.
              </p>
              <ArrowLink href="https://www.stepes.com/translation-workflow-automation/">
                Explore Workflow Automation
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section" id="quality">
        <div className="shell">
          <SectionIntro
            title="Turn Translation Quality Into Actionable Intelligence"
            description="Measure quality consistently, compare performance across programs, and connect evaluation results with corrective action. Stepes helps teams see where quality is strong, where risks are emerging, and what may be causing recurring issues."
          />

          <div className="quality-layout">
            <div className="quality-copy">
              <p>
                Review quality by language, project, content type, workflow, business unit,
                supplier, linguist, reviewer, AI model, or machine translation engine. This
                multidimensional view helps teams identify patterns that are difficult to detect
                within individual projects.
              </p>
              <div className="quality-list">
                {qualityMetrics.map(([title, description]) => (
                  <article key={title}>
                    <span className="quality-list-icon"><Icon name="quality" size={18} /></span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </article>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">
                  Explore Translation Quality Assurance
                </ArrowLink>
              </div>
            </div>

            <div className="quality-dashboard" aria-label="Translation quality analytics dashboard">
              <div className="quality-dashboard-inner">
                <div className="quality-head">
                  <div>
                    <strong>Quality Performance</strong>
                    <span>Quality trends and issue analysis</span>
                  </div>
                  <div className="quality-score"><strong>94.2</strong><span>Quality index</span></div>
                </div>
                <div className="quality-graph">
                  <span className="chart-gridline" />
                  <span className="chart-gridline" />
                  <span className="chart-gridline" />
                  <span className="chart-gridline" />
                  <svg className="chart-svg" viewBox="0 0 520 170" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 118 C58 105 81 118 128 91 C177 63 211 92 259 70 C310 46 348 68 399 42 C445 20 478 40 520 25" fill="none" stroke="#C11D63" strokeWidth="3" />
                    <path d="M0 139 C61 130 91 138 132 118 C182 94 215 121 263 96 C313 73 350 104 401 75 C449 49 482 69 520 55" fill="none" stroke="#7A8799" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                </div>
                <div className="quality-legend">
                  <span><i /> Overall quality</span>
                  <span><i /> Review effort</span>
                  <span><i /> Threshold</span>
                </div>
                <div className="quality-breakdown">
                  <article><span>Terminology Compliance</span><strong>97%</strong><small>Approved terms applied</small></article>
                  <article><span>Average Edit Distance</span><strong>8.4%</strong><small>Across reviewed content</small></article>
                  <article><span>Quality Threshold</span><strong>92%</strong><small>Work meeting target</small></article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section" id="technology">
        <div className="shell">
          <SectionIntro
            title="Compare AI, Human, and Translation Memory Performance"
            description="Understand how translation memory, AI translation, machine translation, professional linguists, and human review perform individually and together across your enterprise language workflows."
            align="center"
          />

          <div className="technology-compare">
            <article className="tech-panel">
              <div className="tech-panel-head">
                <span className="tech-icon"><Icon name="memory" /></span>
                <div>
                  <h3>Translation Memory Analytics</h3>
                  <p>Measure the value and utilization of existing language assets and content reuse.</p>
                </div>
              </div>
              <ul className="tech-list">
                {tmMetrics.map((item) => <li key={item}><Icon name="check" size={15} /><span>{item}</span></li>)}
              </ul>
            </article>

            <article className="tech-panel">
              <div className="tech-panel-head">
                <span className="tech-icon"><Icon name="sparkles" /></span>
                <div>
                  <h3>AI and Machine Translation Analytics</h3>
                  <p>Evaluate output using quality, editing effort, acceptance, speed, cost, and content context.</p>
                </div>
              </div>
              <ul className="tech-list">
                {aiMetrics.map((item) => <li key={item}><Icon name="check" size={15} /><span>{item}</span></li>)}
              </ul>
            </article>
          </div>

          <div className="method-board">
            <div className="method-board-head">
              <div>
                <h3>Compare Translation Methods in Context</h3>
                <p>
                  A single metric cannot determine whether a workflow is successful. Compare quality,
                  cost, speed, edit effort, acceptance, and risk to choose the right approach for each
                  content type, language, audience, and business requirement.
                </p>
              </div>
              <ArrowLink href="https://www.stepes.com/ai-human-translation-workflow/">
                Explore AI + Human Workflows
              </ArrowLink>
            </div>
            <div className="method-grid" role="table" aria-label="Translation method comparison">
              {[
                ["Measure", "AI Only", "AI + Review", "TM + Human", "Human Translation"],
                ["Relative Speed", "Fastest", "Fast", "Moderate", "Project-dependent"],
                ["Human Effort", "Minimal", "Targeted", "Moderate", "Full"],
                ["Quality Control", "Automated safeguards", "Human verification", "Human-led review", "Human-led"],
                ["Best Fit", "Low-risk, high-volume", "Enterprise content", "Reusable content", "High-impact content"],
              ].flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                  <div className={`method-cell ${rowIndex === 0 ? "header" : ""} ${cellIndex === 0 && rowIndex > 0 ? "label" : ""}`} key={`${rowIndex}-${cellIndex}`}>
                    {cell}
                  </div>
                ))
              )}
            </div>
            <div className="method-mobile" aria-label="Translation method comparison for mobile">
              {[
                ["AI Only", "Fastest", "Minimal", "Automated safeguards", "Low-risk, high-volume"],
                ["AI + Review", "Fast", "Targeted", "Human verification", "Enterprise content"],
                ["TM + Human", "Moderate", "Moderate", "Human-led review", "Reusable content"],
                ["Human Translation", "Project-dependent", "Full", "Human-led", "High-impact content"],
              ].map(([method, speed, effort, control, fit]) => (
                <article key={method}>
                  <h4>{method}</h4>
                  <dl>
                    <dt>Relative Speed</dt><dd>{speed}</dd>
                    <dt>Human Effort</dt><dd>{effort}</dd>
                    <dt>Quality Control</dt><dd>{control}</dd>
                    <dt>Best Fit</dt><dd>{fit}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="custom-section" id="dashboards">
        <div className="shell">
          <SectionIntro
            eyebrow="Configurable Analytics"
            title="Analyze the Data That Matters to Your Organization"
            description="Configure translation analytics around your operating model instead of forcing teams into fixed, generic reports. Build views for business units, regions, products, content programs, workflows, and executive priorities."
          />

          <div className="custom-layout">
            <div className="custom-copy">
              <p>
                Choose the key performance indicators that matter to each team, apply custom
                date ranges, compare reporting periods, and drill down from summary metrics to
                the projects and activities behind them.
              </p>
              <div className="custom-capabilities">
                {[
                  "Configurable dashboards",
                  "Custom KPI selection",
                  "Global filters and drill-downs",
                  "Saved views",
                  "Custom date ranges",
                  "Comparative periods",
                  "Targets, thresholds, and alerts",
                  "Personalized layouts",
                ].map((item) => (
                  <div className="custom-capability" key={item}><Icon name="check" size={16} /><span>{item}</span></div>
                ))}
              </div>
              <p className="dimension-title">Customer-defined reporting dimensions</p>
              <div className="dimension-tags">
                {customDimensions.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="builder" aria-label="Configurable translation analytics dashboard">
              <div className="builder-inner">
                <div className="builder-top">
                  <div><strong>Executive Language Program</strong><span>Custom dashboard view</span></div>
                  <span className="finance-badge">Saved View</span>
                </div>
                <div className="builder-layout">
                  <aside className="builder-sidebar">
                    <span className="builder-sidebar-label">Dashboard</span>
                    <div className="builder-menu">
                      <span className="active"><Icon name="dashboard" size={13} /> Overview</span>
                      <span><Icon name="money" size={13} /> Spend</span>
                      <span><Icon name="workflow" size={13} /> Delivery</span>
                      <span><Icon name="quality" size={13} /> Quality</span>
                      <span><Icon name="sparkles" size={13} /> AI Usage</span>
                      <span><Icon name="memory" size={13} /> TM Value</span>
                    </div>
                  </aside>
                  <div className="builder-main">
                    <div className="builder-controls">
                      <div className="builder-control"><span>Period</span><strong>Current Quarter</strong></div>
                      <div className="builder-control"><span>Business Unit</span><strong>All Units</strong></div>
                      <div className="builder-control"><span>Region</span><strong>Global</strong></div>
                    </div>
                    <div className="builder-widgets">
                      <div className="builder-widget">
                        <strong>Volume Trend</strong>
                        <div className="mini-line">
                          <svg viewBox="0 0 200 65" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M0 55 C30 46 43 54 68 35 C92 17 107 42 134 25 C160 8 177 20 200 7" fill="none" stroke="#C11D63" strokeWidth="3" />
                          </svg>
                        </div>
                      </div>
                      <div className="builder-widget">
                        <strong>Spend by Region</strong>
                        <div className="mini-bars">
                          <i style={{ height: "50%" }} /><i style={{ height: "75%" }} /><i style={{ height: "62%" }} /><i style={{ height: "88%" }} /><i style={{ height: "68%" }} />
                        </div>
                      </div>
                      <div className="builder-widget wide">
                        <strong>Quality and Delivery Overview</strong>
                        <div className="quality-legend" style={{ marginTop: 18 }}>
                          <span><i /> Quality score</span>
                          <span><i /> On-time delivery</span>
                          <span><i /> SLA target</span>
                        </div>
                        <div className="saving-row" style={{ marginTop: 18 }}>
                          <div className="saving-row-top"><span>Program performance</span><strong>94%</strong></div>
                          <div className="saving-track"><i style={{ width: "94%" }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reports-section">
        <div className="shell">
          <SectionIntro
            title="Deliver the Right Reports to the Right Stakeholders"
            description="Distribute relevant insights to program owners, procurement teams, finance stakeholders, executives, and other authorized users without manually rebuilding reports for every review cycle."
            align="center"
          />

          <div className="reports-grid">
            {reportTypes.map(([title, description], index) => (
              <article className="report-item" key={title}>
                <div className="value-icon"><Icon name={index === 1 ? "money" : index === 2 ? "clock" : index === 3 ? "quality" : index === 4 ? "sparkles" : index === 5 ? "memory" : "overview"} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="report-meta">
                  <span><Icon name="calendar" size={11} /> Scheduled</span>
                  <span><Icon name="download" size={11} /> Exportable</span>
                  <span><Icon name="lock" size={11} /> Controlled</span>
                </div>
              </article>
            ))}
          </div>

          <div className="delivery-strip">
            <div className="delivery-copy">
              <h3>Flexible Report Delivery</h3>
              <p>
                Give operational teams detailed dashboards while providing executives with
                concise summaries of program volume, spend, quality, delivery, and technology utilization.
              </p>
            </div>
            <div className="delivery-options">
              <div className="delivery-option"><Icon name="calendar" /><span>Scheduled Reports</span></div>
              <div className="delivery-option"><Icon name="dashboard" /><span>Shared Dashboards</span></div>
              <div className="delivery-option"><Icon name="download" /><span>CSV &amp; Excel</span></div>
              <div className="delivery-option"><Icon name="briefcase" /><span>Executive Summaries</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="connections-section" id="connections">
        <div className="shell">
          <SectionIntro
            title="Bring Translation Data Into Your Enterprise Analytics Environment"
            description="Connect Stepes reporting with the systems your organization uses to manage finance, procurement, product development, global content, and business intelligence."
            align="center"
          />

          <div className="connection-map">
            <div className="stepes-data">
              <span className="stepes-data-icon"><Icon name="trend" /></span>
              <h3>Stepes Translation Data</h3>
              <p>
                Structured program signals from translation activity, spend, quality,
                workflows, linguistic assets, AI utilization, and human review.
              </p>
              <div className="data-signals">
                <span>Volume</span><span>Cost</span><span>Quality</span><span>Delivery</span><span>AI</span><span>TM</span>
              </div>
            </div>

            <div className="connection-arrow" aria-hidden="true"><Icon name="arrow" size={24} /></div>

            <div className="connection-destinations">
              {dataConnections.map((item) => (
                <article className="connection-item" key={item.title}>
                  <span className="connection-item-icon"><Icon name={item.icon} size={19} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="connection-note">
            <p>
              Metrics calculated in Stepes provide direct visibility into translation activity and
              operational performance. Broader business outcomes can be evaluated by combining
              Stepes data with your organization&apos;s product, marketing, finance, or customer analytics.
            </p>
            <div className="connection-links">
              <ArrowLink href="https://www.stepes.com/integrations/">Explore Integrations</ArrowLink>
              <ArrowLink href="https://www.stepes.com/developers/translation-api/">Translation API</ArrowLink>
              <ArrowLink href="https://www.stepes.com/developers/">Developer Documentation</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="stakeholders-section">
        <div className="shell">
          <SectionIntro
            title="Give Every Stakeholder the Visibility They Need"
            description="Provide role-relevant reporting from one consistent source of translation data, without overwhelming stakeholders with information outside their responsibilities."
          />

          <div className="stakeholder-table">
            <div className="stakeholder-header"><span>Stakeholder</span><span>Primary Visibility</span></div>
            {stakeholders.map((item) => (
              <div className="stakeholder-row" key={item.role}>
                <div className="stakeholder-role"><i /><span>{item.role}</span></div>
                <div className="stakeholder-focus">{item.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="governance-section" id="governance">
        <div className="shell governance-layout">
          <div className="governance-copy">
            <h2>Control Access to Enterprise Reporting Data</h2>
            <p>
              Protect confidential project information, financial data, supplier performance,
              quality results, and business-unit activity with role-based reporting access and
              governed data sharing.
            </p>
            <div className="governance-visual" aria-label="Role-based reporting access scope">
              <div className="access-scope">
                {[
                  ["Executives", 5],
                  ["Procurement", 4],
                  ["Business Units", 3],
                  ["Project Teams", 2],
                  ["External Users", 1],
                ].map(([label, active]) => (
                  <div className="access-row" key={label}>
                    <strong>{label}</strong>
                    <div className="scope-track">
                      {[1,2,3,4,5].map((n) => <i className={n <= active ? "active" : ""} key={n} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="governance-links">
              <ArrowLink href="https://www.stepes.com/enterprise-security/">Enterprise Security</ArrowLink>
              <ArrowLink href="https://www.stepes.com/user-roles-approvals/">User Roles &amp; Approvals</ArrowLink>
              <ArrowLink href="https://www.stepes.com/security-compliance/">Security &amp; Compliance</ArrowLink>
            </div>
          </div>

          <div className="governance-panel">
            {governanceItems.map(([title, description], index) => (
              <article className="governance-item" key={title}>
                <span className="governance-icon"><Icon name={index === 0 ? "users" : index === 1 ? "overview" : index === 2 ? "money" : index === 3 ? "download" : index === 4 ? "shield" : "lock"} size={20} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="improvement-section">
        <div className="shell">
          <SectionIntro
            title="Turn Reporting Into Continuous Program Improvement"
            description="Use translation data to move from isolated optimization projects to a repeatable, evidence-based language operations strategy."
            align="center"
            dark
          />

          <div className="improvement-track">
            {improvementSteps.map((step) => (
              <article className="improvement-step" key={step.title}>
                <span className="improvement-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="improvement-actions">
            <div>
              <h3>Use Analytics to Guide Operational Action</h3>
              <p style={{ color: "#B7BDCC", marginBottom: 0 }}>
                Measure the results of each change and apply successful practices across more teams,
                languages, markets, and content programs.
              </p>
            </div>
            <div className="action-list">
              {[
                "Redesign workflows with recurring delays",
                "Add review for high-risk content",
                "Expand AI where quality and acceptance are strong",
                "Adjust workflows with excessive editing effort",
                "Improve translation memory reuse",
                "Update terminology resources",
                "Rebalance team or supplier capacity",
                "Improve source content that creates recurring issues",
              ].map((item) => <div key={item}><Icon name="check" size={15} /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="related-section">
        <div className="shell">
          <SectionIntro
            title="Connect Reporting Across the Stepes Platform"
            description="Reporting and analytics transform data from across the Stepes enterprise translation ecosystem into a connected view of language operations."
          />

          <div className="related-directory">
            {relatedCapabilities.map((item) => (
              <article className="related-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="final-cta-panel">
            <div>
              <h2>Bring Greater Visibility to Your Translation Program</h2>
              <p>
                See how Stepes can help your organization consolidate translation data, control
                spend, measure quality, improve workflow performance, and connect language
                operations with enterprise reporting systems.
              </p>
            </div>
            <div className="final-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert <Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/ai-translation-platform/">
                Explore the Stepes Platform
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
