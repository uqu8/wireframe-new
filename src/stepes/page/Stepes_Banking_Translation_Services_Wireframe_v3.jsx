function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    bank: <><path d="M3 9h18"/><path d="M5 9v9"/><path d="M9 9v9"/><path d="M15 9v9"/><path d="M19 9v9"/><path d="M3 18h18"/><path d="M2 21h20"/><path d="M12 3 3 7h18L12 3Z"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9.5 12 1.6 1.6 3.6-3.8"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><path d="M9.5 14.5 12 9l2.5 5.5M10.4 12.5h3.2"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/></>,
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    arrows: <><path d="M7 7h11l-3-3"/><path d="m18 7-3 3"/><path d="M17 17H6l3 3"/><path d="m6 17 3-3"/></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-5 3 3 5-7"/></>,
    document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.7V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z"/><path d="M7 9h10M7 13h7"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    terms: <><path d="M4 5h8M8 3v4M5 9c2.8 0 5-1.8 6-4"/><path d="m14 20 3-8 3 8M15 17h4"/></>,
    workflow: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.4 7.5l3.5 8M16.6 7.5l-3.5 8"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    alert: <><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/><path d="M17 20c0 1-1 2-3 2"/></>,
    fileCheck: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="m9 14 2 2 4-4"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function SectionHeader({ eyebrow, title, intro, centered = false, dark = false, className = "" }) {
  return (
    <div className={`sectionHeader ${centered ? "sectionHeader--centered" : ""} ${className}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
    </div>
  );
}

function BankingHeroGraphic() {
  return (
    <div className="heroGraphic" aria-label="Illustration representing multilingual digital banking and cross-border payments">
      <svg viewBox="0 0 560 470" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="bankFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDF2F7"/>
            <stop offset="100%" stopColor="#FFFFFF"/>
          </linearGradient>
        </defs>
        <circle cx="282" cy="226" r="188" fill="url(#bankFade)"/>
        <circle cx="282" cy="226" r="145" fill="none" stroke="#D9D9DF" strokeWidth="1.5" strokeDasharray="5 8"/>
        <path d="M128 153 280 86l151 67" fill="none" stroke="#595963" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M151 171h258M169 171v133M223 171v133M337 171v133M391 171v133M143 304h274M128 329h304" fill="none" stroke="#595963" strokeWidth="3" strokeLinecap="round"/>
        <rect x="246" y="193" width="69" height="111" rx="5" fill="#FFFFFF" stroke="#595963" strokeWidth="3"/>
        <circle cx="281" cy="140" r="13" fill="#C11D63" opacity=".12"/>
        <path d="M275 140h12M281 134v12" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round"/>

        <rect x="55" y="227" width="122" height="166" rx="23" fill="#FFFFFF" stroke="#595963" strokeWidth="3"/>
        <rect x="69" y="253" width="94" height="112" rx="8" fill="#F7F7F9"/>
        <rect x="84" y="271" width="64" height="12" rx="6" fill="#D4D4DA"/>
        <rect x="84" y="295" width="46" height="8" rx="4" fill="#E1E1E5"/>
        <rect x="84" y="313" width="59" height="8" rx="4" fill="#E1E1E5"/>
        <rect x="84" y="339" width="50" height="14" rx="7" fill="#C11D63"/>
        <circle cx="116" cy="378" r="5" fill="#595963"/>

        <rect x="393" y="215" width="121" height="76" rx="13" fill="#FFFFFF" stroke="#595963" strokeWidth="3"/>
        <rect x="409" y="235" width="89" height="11" rx="5.5" fill="#C11D63" opacity=".13"/>
        <path d="M409 260h41M409 274h62" stroke="#A9A9B1" strokeWidth="4" strokeLinecap="round"/>

        <circle cx="448" cy="117" r="49" fill="#FFFFFF" stroke="#595963" strokeWidth="3"/>
        <ellipse cx="448" cy="117" rx="21" ry="49" fill="none" stroke="#8A8A93" strokeWidth="2"/>
        <path d="M399 117h98M407 96h82M407 138h82" fill="none" stroke="#8A8A93" strokeWidth="2"/>
        <path d="M361 87c24-30 51-43 76-45" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
        <path d="m429 36 10 6-12 3" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M478 170c22 20 34 42 35 66" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
        <path d="m507 227 6 10 4-12" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

        <g>
          <rect x="346" y="354" width="76" height="34" rx="17" fill="#FFFFFF" stroke="#D8D8DE" strokeWidth="1.5"/>
          <text x="384" y="376" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600" fill="#595963">EN ↔ ES</text>
        </g>
        <g>
          <rect x="427" y="326" width="76" height="34" rx="17" fill="#FFFFFF" stroke="#D8D8DE" strokeWidth="1.5"/>
          <text x="465" y="348" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600" fill="#595963">EN ↔ 日</text>
        </g>
        <g>
          <rect x="385" y="398" width="84" height="34" rx="17" fill="#FFFFFF" stroke="#D8D8DE" strokeWidth="1.5"/>
          <text x="427" y="420" textAnchor="middle" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600" fill="#595963">EN ↔ العربية</text>
        </g>
      </svg>
    </div>
  );
}

function CrossBorderGraphic() {
  return (
    <div className="network" aria-label="Diagram showing multilingual cross-border banking communications across major functions">
      <svg className="networkSvg" viewBox="0 0 520 420" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="crossGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FCFAFB" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="504" height="404" rx="28" fill="url(#crossGlow)" stroke="#E9DCE2" />
        <circle cx="260" cy="210" r="126" fill="none" stroke="#E0D1D8" strokeWidth="1.5" strokeDasharray="5 7" />
        <circle cx="260" cy="210" r="82" fill="#FDF2F7" stroke="#E8D6DE" />

        <path d="M260 110 L260 145" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" />
        <path d="M157 142 C190 160 210 172 225 185" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M362 142 C330 160 310 172 295 185" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M160 278 C195 262 214 248 226 234" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M360 278 C327 263 307 248 294 234" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M260 273 L260 307" stroke="#D7C8CF" strokeWidth="2" strokeLinecap="round" />

        <g>
          <rect x="198" y="32" width="124" height="46" rx="23" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="260" y="60" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Global Payments</text>
        </g>
        <g>
          <rect x="38" y="78" width="162" height="48" rx="24" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="119" y="107" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Correspondent Bank</text>
        </g>
        <g>
          <rect x="322" y="78" width="160" height="48" rx="24" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="402" y="107" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Corporate Treasury</text>
        </g>
        <g>
          <rect x="52" y="294" width="122" height="48" rx="24" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="113" y="323" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Trade Finance</text>
        </g>
        <g>
          <rect x="334" y="294" width="144" height="48" rx="24" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="406" y="323" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Customer Support</text>
        </g>
        <g>
          <rect x="208" y="342" width="104" height="46" rx="23" fill="#FFFFFF" stroke="#DDCFD6" />
          <text x="260" y="370" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="Inter, Arial, sans-serif" fill="#23232A">Compliance</text>
        </g>

        <circle cx="260" cy="210" r="60" fill="#C11D63" />
        <text x="260" y="194" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, Arial, sans-serif" fill="#FFFFFF">Multilingual</text>
        <text x="260" y="214" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, Arial, sans-serif" fill="#FFFFFF">Banking</text>
        <text x="260" y="234" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, Arial, sans-serif" fill="#FFFFFF">Communication</text>
      </svg>
    </div>
  );
}


const trustItems = [
  { icon: "users", title: "Banking-Experienced Linguists", text: "Financial language expertise" },
  { icon: "fileCheck", title: "ISO-Certified Quality", text: "ISO 17100 & ISO 9001" },
  { icon: "shield", title: "Secure Translation Workflows", text: "Controlled content handling" },
  { icon: "ai", title: "AI + Human Review", text: "Risk-based translation methods" },
  { icon: "globe", title: "100+ Languages", text: "Global banking coverage" },
];

const sectors = [
  {
    icon: "users",
    title: "Retail & Consumer Banking",
    text: "Checking and savings products, account opening, customer disclosures, statements, fee information, branch communications, service updates, FAQs, and customer support content.",
  },
  {
    icon: "building",
    title: "Commercial & Corporate Banking",
    text: "Commercial accounts, client onboarding, business lending, credit facilities, treasury products, cash management, corporate banking portals, and client communications.",
  },
  {
    icon: "home",
    title: "Lending, Credit & Mortgage Banking",
    text: "Loan applications and agreements, mortgages, consumer credit, borrower disclosures, servicing communications, payment notices, and collections content.",
  },
  {
    icon: "arrows",
    title: "Transaction Banking & Treasury Services",
    text: "Cash management, liquidity services, treasury management, receivables, trade finance, international payments, transaction portals, and corporate treasury communications.",
  },
  {
    icon: "card",
    title: "Cards & Payments",
    text: "Cardholder agreements, payment instructions, rewards programs, merchant communications, chargebacks, disputes, fraud alerts, security notices, and transaction notifications.",
  },
  {
    icon: "phone",
    title: "Digital & Mobile Banking",
    text: "Online banking, mobile apps, digital wallets, account onboarding, authentication, transaction notifications, self-service portals, help centers, and chatbots.",
  },
  {
    icon: "briefcase",
    title: "Private Banking",
    text: "High-net-worth client communications, account servicing, private banking portals, product information, onboarding content, and international private banking materials.",
  },
  {
    icon: "chart",
    title: "Investment Banking",
    text: "Corporate finance communications, financing transactions, M&A materials, deal-related documentation, internal content, and international client communications.",
  },
];

const documentGroups = [
  {
    title: "Customer & Product Communications",
    items: ["Account agreements and opening materials", "Terms, conditions, and customer disclosures", "Product descriptions and fee schedules", "Statements, notices, letters, and service updates", "Branch, FAQ, and contact-center content"],
  },
  {
    title: "Lending & Credit Documents",
    items: ["Loan applications and agreements", "Mortgage and consumer credit documentation", "Borrower disclosures and notices", "Servicing and payment communications", "Collections and borrower-support content"],
  },
  {
    title: "Compliance & Regulatory Content",
    items: ["Banking policies and procedures", "Regulatory and compliance communications", "Internal controls and risk documentation", "Audit, governance, and regulatory-response materials", "Financial crime and compliance training"],
  },
  {
    title: "Digital Banking Content",
    items: ["Banking websites and customer portals", "Mobile banking apps and digital wallets", "UI strings and onboarding flows", "Authentication, alerts, and push notifications", "Help centers, chatbots, and support interfaces"],
  },
  {
    title: "Internal Banking Operations",
    items: ["Standard operating procedures", "Work instructions and process documentation", "Employee and product training", "Internal policies and risk documentation", "Corporate communications and eLearning"],
  },
];

const whyItems = [
  { icon: "bank", title: "Banking Subject-Matter Expertise", text: "Professional native linguists experienced in retail banking, corporate banking, lending, payments, compliance, digital banking, and related financial services." },
  { icon: "shield", title: "Risk-Based Translation Quality", text: "Human translation, AI-assisted workflows, editing, independent review, and QA can be matched to content risk, audience, and quality requirements." },
  { icon: "globe", title: "Enterprise-Scale Localization", text: "Support for both individual projects and ongoing multilingual banking programs across languages, departments, products, and channels." },
  { icon: "workflow", title: "Digital-First Translation Technology", text: "Translation management, AI, terminology, translation memory, workflow automation, and linguistic QA support modern banking content at scale." },
  { icon: "terms", title: "Consistent Multilingual Content", text: "Centralized terminology, translation memory, and style guidance keep language aligned across apps, disclosures, support content, and internal materials." },
  { icon: "lock", title: "Secure, Controlled Workflows", text: "Banking customers can define confidentiality, access, AI usage, review, and delivery requirements according to project needs." },
];

const faqItems = [
  {
    q: "What types of banking documents does Stepes translate?",
    a: "Stepes translates account agreements, disclosures, lending and mortgage documents, customer communications, regulatory content, AML and KYC materials, banking policies, training materials, payment communications, websites, online banking portals, mobile apps, help centers, and internal operational documentation. Our services cover both customer-facing and internal content across retail, commercial, corporate, private, transaction, and digital banking.",
  },
  {
    q: "Do you provide AML and KYC translation services?",
    a: "Yes. Stepes translates AML and KYC content including policies and procedures, customer onboarding materials, customer due diligence documentation, enhanced due diligence content, risk assessments, financial crime procedures, compliance training, identity-verification instructions, and related communications. Human-led translation and additional review can be applied to high-risk compliance content according to project requirements.",
  },
  {
    q: "Can Stepes localize mobile banking apps and online banking platforms?",
    a: "Yes. We provide banking app localization and online banking translation for UI strings, onboarding flows, account dashboards, authentication, payments, card management, transaction alerts, security messaging, help content, and customer support interfaces. We also support terminology management, translation memory, continuous localization, and linguistic QA for recurring product updates.",
  },
  {
    q: "How does Stepes maintain consistent banking terminology?",
    a: "Stepes combines multilingual terminology databases, translation memory, style guides, and professional review to maintain approved banking language across documents and digital channels. Once terminology and translations are validated, they can be reused across future projects for stronger consistency.",
  },
  {
    q: "Can AI translation be used for banking content?",
    a: "Yes, when the content and customer requirements make AI translation appropriate. Stepes uses a risk-based approach: high-risk content such as regulatory communications, contracts, major customer disclosures, and sensitive compliance materials can use human-led workflows, while appropriate high-volume or recurring content can use AI translation with professional human review. AI use can be aligned with customer-defined security, governance, and data-handling requirements.",
  },
  {
    q: "How does Stepes protect confidential banking information?",
    a: "Stepes supports controlled translation workflows for confidential banking content, including secure file-exchange options, restricted project access, NDAs, dedicated linguist teams, customer-defined data-handling requirements, and controlled use of AI where required. Specific security and workflow requirements can be established for each organization and project.",
  },
  {
    q: "Do you translate banking content into Spanish for the United States?",
    a: "Yes. Stepes provides Spanish banking translation for U.S. financial institutions across customer agreements, disclosures, notices, account materials, digital banking, lending content, mobile apps, statements, customer support, and other banking communications. Terminology and language can be tailored to the intended audience and banking context.",
  },
  {
    q: "Do you provide French Canadian banking translation?",
    a: "Yes. Stepes provides French Canadian translation for banks and financial institutions serving Canadian customers, including customer communications, account documentation, lending content, digital banking, compliance materials, websites, mobile apps, and customer support. Language conventions and terminology can be localized specifically for Canadian French.",
  },
  {
    q: "Can Stepes support an ongoing global banking translation program?",
    a: "Yes. Stepes supports recurring enterprise translation programs across multiple languages, departments, content types, and delivery channels. We can establish dedicated linguist teams, terminology databases, translation memory, style guides, quality workflows, automated processes, and project-specific instructions to help banks scale multilingual content consistently over time.",
  },
];

export default function BankingTranslationServicesWireframe() {
  return (
    <main className="stepesPage">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepesPage {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --light-pink: #F2A7C6;
          --ink: #16161A;
          --body: #4B4B55;
          --muted: #6E6E78;
          --line: #E5E5EA;
          --soft: #F7F7F9;
          --dark: #17171C;
          background: #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: hidden;
        }
        .stepesPage a { color: inherit; }
        .shell { width: min(100%, 1392px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section--dense { padding: 80px 0; }
        .section--soft { background: var(--soft); }
        .section--blush { background: var(--blush); }
        .section--dark { background: var(--dark); color: #fff; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.16; margin-bottom: 24px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        p, li { color: var(--body); font-size: 16px; }
        .section--dark p, .section--dark li { color: #D8D8DE; }
        .bodyLarge { font-size: 18px; line-height: 1.7; }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
          font-weight: 600 !important;
          letter-spacing: .15em !important;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow--dark { color: var(--light-pink) !important; }
        .sectionHeader { max-width: 820px; margin-bottom: 50px; }
        .sectionHeader--centered { text-align: center; margin-left: auto; margin-right: auto; }
        .sectionIntro { max-width: 800px; font-size: 18px; line-height: 1.7; margin-bottom: 0; }
        .sectionHeader--centered .sectionIntro { margin-left: auto; margin-right: auto; }

        .hero { padding: 104px 0 96px; background: #fff; }
        .heroGrid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr); gap: 64px; align-items: center; }
        .heroCopy { max-width: 700px; }
        .heroCopy .bodyLarge { max-width: 660px; margin-bottom: 32px; }
        .heroActions { display: flex; align-items: center; flex-wrap: wrap; gap: 14px; }
        .btn {
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .btn:focus-visible, .editorialLink:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .btnPrimary, .btnPrimary:link, .btnPrimary:visited, .btnPrimary:hover, .btnPrimary:active, .btnPrimary:focus, .btnPrimary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
          border: 1px solid var(--magenta);
        }
        .btnPrimary *, .btnPrimary:visited *, .btnPrimary:hover *, .btnPrimary:active *, .btnPrimary:focus * { color: #fff !important; fill: currentColor; stroke: currentColor; }
        .btnPrimary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 8px 22px rgba(193,29,99,.18); }
        .btnSecondary { background: #fff; color: var(--ink); border: 1px solid #D6D6DC; }
        .btnSecondary:hover { border-color: #ADADB6; transform: translateY(-1px); }
        .heroGraphic { max-width: 540px; justify-self: end; width: 100%; }
        .heroGraphic svg { display: block; width: 100%; height: auto; }

        .trustBand { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trustGrid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .trustItem { padding: 27px 22px; min-width: 0; display: flex; gap: 13px; align-items: flex-start; }
        .trustItem + .trustItem { border-left: 1px solid var(--line); }
        .trustIcon { color: var(--magenta); flex: 0 0 auto; margin-top: 2px; }
        .trustItem strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; margin-bottom: 4px; }
        .trustItem span { display: block; color: var(--muted); font-size: 14px; line-height: 1.4; }

        .overviewGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 92px; align-items: start; }
        .overviewLead { position: sticky; top: 32px; }
        .overviewCopy { max-width: 760px; }
        .overviewCopy p { font-size: 17px; margin-bottom: 22px; }
        .editorialLink { color: var(--magenta) !important; text-decoration: none; font-weight: 600; display: inline-flex; gap: 7px; align-items: center; min-height: 44px; }
        .editorialLink:hover .arrow { transform: translateX(3px); }
        .arrow { display: inline-block; transition: transform .2s ease; }

        .sectorGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .sectorItem { display: grid; grid-template-columns: 44px 1fr; column-gap: 18px; padding: 34px 34px 34px 0; border-bottom: 1px solid var(--line); }
        .sectorItem:nth-child(even) { padding-left: 34px; padding-right: 0; border-left: 1px solid var(--line); }
        .sectorItem:nth-last-child(-n+2) { border-bottom: 0; }
        .iconBox { width: 44px; height: 44px; border-radius: 14px; background: #fff; border: 1px solid #E3E3E8; color: var(--magenta); display: grid; place-items: center; }
        .sectorItem h3 { margin-bottom: 9px; }
        .sectorItem p { margin: 0; max-width: 500px; }

        .documentsGrid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 80px; align-items: start; }
        .documentsLead { position: sticky; top: 32px; }
        .documentsLead p { font-size: 18px; max-width: 520px; }
        .documentGroups { border-top: 1px solid var(--line); }
        .documentGroup { display: grid; grid-template-columns: 230px 1fr; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .documentGroup h3 { font-size: 20px; margin: 0; }
        .cleanList { list-style: none; margin: 0; padding: 0; display: grid; gap: 9px; }
        .cleanList li { position: relative; padding-left: 18px; }
        .cleanList li::before { content: ""; position: absolute; left: 0; top: .76em; width: 6px; height: 1.5px; background: var(--magenta); }

        .complianceIntroGrid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 70px; align-items: end; margin-bottom: 50px; }
        .complianceIntroGrid p { max-width: 720px; font-size: 18px; margin: 0; }
        .complianceMatrix { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid #36363E; border-radius: 28px; overflow: hidden; }
        .complianceCol { padding: 34px 28px; min-width: 0; }
        .complianceCol + .complianceCol { border-left: 1px solid #36363E; }
        .complianceCol .iconBox { background: #232329; border-color: #3A3A42; color: var(--light-pink); margin-bottom: 22px; }
        .complianceCol h3 { color: #fff; font-size: 21px; }
        .complianceCol p { margin-bottom: 18px; }
        .complianceCol ul { padding-left: 20px; margin: 0; }
        .complianceCol li { margin-bottom: 7px; }
        .darkNote { margin-top: 28px; max-width: 900px; padding-left: 18px; border-left: 3px solid var(--magenta); font-size: 16px; color: #E2E2E7; }

        .digitalGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
        .digitalCopy p { font-size: 17px; max-width: 630px; }
        .digitalMockup { position: relative; min-height: 520px; }
        .browserMock { position: absolute; left: 0; top: 24px; width: 82%; border: 1px solid #DCDCE2; background: #fff; border-radius: 24px; box-shadow: 0 24px 60px rgba(25,25,35,.08); overflow: hidden; }
        .browserBar { height: 42px; background: #F4F4F6; display: flex; align-items: center; gap: 7px; padding: 0 16px; }
        .dot { width: 7px; height: 7px; border-radius: 50%; background: #C8C8CF; }
        .browserBody { padding: 26px; }
        .uiEyebrow { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 8px; }
        .uiTitle { font-size: 20px; font-weight: 600; margin-bottom: 20px; }
        .balanceCard { background: #F8F8FA; border: 1px solid #E7E7EB; border-radius: 18px; padding: 18px; margin-bottom: 16px; }
        .balanceLabel { color: var(--muted); font-size: 14px; }
        .balanceValue { font-size: 25px; font-weight: 600; margin-top: 4px; }
        .uiRow { display: flex; justify-content: space-between; gap: 20px; padding: 13px 0; border-top: 1px solid #ECECF0; font-size: 15px; }
        .uiRow strong { font-weight: 600; }
        .phoneMock { position: absolute; right: 0; bottom: 0; width: 43%; min-width: 210px; border: 1px solid #D4D4DA; border-radius: 32px; background: #fff; box-shadow: 0 24px 60px rgba(25,25,35,.12); padding: 14px; }
        .phoneScreen { background: #F8F8FA; border-radius: 23px; padding: 22px 16px; min-height: 362px; }
        .phoneTop { font-size: 14px; color: var(--muted); margin-bottom: 28px; }
        .phoneAction { border: 1px solid #E2E2E7; background: #fff; border-radius: 15px; padding: 14px; margin-bottom: 10px; font-size: 15px; }
        .phoneAction strong { display: block; margin-bottom: 2px; }
        .phonePrimary { background: var(--magenta); color: #fff; border-color: var(--magenta); }
        .digitalFeatureRows { margin-top: 58px; display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .digitalFeature { padding: 28px 30px; }
        .digitalFeature + .digitalFeature { border-left: 1px solid var(--line); }
        .digitalFeature h3 { font-size: 20px; }
        .digitalFeature p { margin: 0; }

        .crossGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .crossCopy p { font-size: 17px; max-width: 620px; }
        .crossList { margin: 26px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 11px 24px; }
        .crossList div { display: flex; gap: 10px; align-items: flex-start; color: var(--body); font-size: 16px; }
        .crossList svg { color: var(--magenta); flex: 0 0 auto; margin-top: 3px; }
        .network { border-radius: 30px; border: 1px solid #E9DCE2; background: linear-gradient(180deg, #FFFFFF 0%, #FCFAFB 100%); box-shadow: 0 18px 44px rgba(65,30,46,.05); padding: 16px; }
        .networkSvg { display: block; width: 100%; height: auto; }

        .aiHeaderGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: end; margin-bottom: 46px; }
        .aiHeaderGrid p { font-size: 18px; margin: 0; max-width: 730px; }
        .aiLanes { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .aiLane { background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 30px; }
        .aiLane:first-child { border-top: 3px solid var(--burgundy); }
        .aiLane:nth-child(2) { border-top: 3px solid var(--magenta); }
        .aiLane:nth-child(3) { border-top: 3px solid #B8B8C0; }
        .aiLane h3 { font-size: 21px; }
        .aiLane p { margin-bottom: 18px; }
        .aiLane ul { margin: 0; padding-left: 20px; }
        .aiLane li { margin-bottom: 7px; }
        .aiControl { margin-top: 24px; padding: 22px 24px; border-radius: 20px; background: var(--blush); display: grid; grid-template-columns: 44px 1fr auto; gap: 18px; align-items: center; }
        .aiControl .iconBox { border: none; background: #fff; }
        .aiControl h3 { font-size: 18px; margin: 0 0 4px; }
        .aiControl p { margin: 0; }

        .termsGrid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 90px; align-items: start; }
        .termsLead { position: sticky; top: 32px; }
        .termsLead p { font-size: 18px; max-width: 520px; }
        .termRows { border-top: 1px solid var(--line); }
        .termRow { display: grid; grid-template-columns: 46px 190px 1fr; gap: 20px; padding: 27px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .termRow h3 { font-size: 20px; margin: 5px 0 0; }
        .termRow p { margin: 2px 0 0; }
        .termRow .iconBox { width: 42px; height: 42px; border-radius: 13px; }

        .securityGrid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 82px; align-items: start; }
        .securityCopy p { font-size: 17px; max-width: 610px; }
        .securityPanel { border: 1px solid var(--line); border-radius: 28px; padding: 10px 30px; background: #fff; }
        .securityRow { display: grid; grid-template-columns: 42px 1fr; gap: 17px; padding: 22px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .securityRow:last-child { border-bottom: 0; }
        .securityRow h3 { font-size: 19px; margin: 2px 0 4px; }
        .securityRow p { margin: 0; }

        .marketsTop { display: grid; grid-template-columns: .82fr 1.18fr; gap: 80px; align-items: end; margin-bottom: 46px; }
        .marketsTop p { font-size: 18px; max-width: 760px; margin: 0; }
        .marketFeatures { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .marketFeature { padding: 30px 36px 30px 0; }
        .marketFeature + .marketFeature { border-left: 1px solid var(--line); padding-left: 36px; padding-right: 0; }
        .marketFeature p { margin-bottom: 0; }
        .languageCloud { display: flex; flex-wrap: wrap; gap: 10px; margin: 34px 0 20px; }
        .languageTag { background: #fff; border: 1px solid #E2E2E7; border-radius: 999px; padding: 9px 14px; font-size: 16px; color: var(--ink); }

        .whyGrid { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
        .whyItem { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 30px 34px 30px 0; border-bottom: 1px solid var(--line); }
        .whyItem:nth-child(even) { border-left: 1px solid var(--line); padding-left: 34px; padding-right: 0; }
        .whyItem h3 { font-size: 20px; margin-bottom: 7px; }
        .whyItem p { margin: 0; }

        .faqWrap { max-width: 920px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faqItem { border-bottom: 1px solid var(--line); }
        .faqItem summary { list-style: none; cursor: pointer; min-height: 68px; padding: 22px 4px; display: grid; grid-template-columns: 1fr 28px; gap: 24px; align-items: center; font-size: 18px; font-weight: 600; line-height: 1.4; }
        .faqItem summary::-webkit-details-marker { display: none; }
        .faqPlus { width: 28px; height: 28px; border-radius: 50%; border: 1px solid #DADAE0; display: grid; place-items: center; color: var(--magenta); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
        .faqItem[open] .faqPlus { transform: rotate(45deg); }
        .faqAnswer { max-width: 820px; padding: 0 52px 24px 4px; }
        .faqAnswer p { margin: 0; font-size: 16px; }

        .finalCta { padding: 88px 0; background: var(--blush); }
        .ctaPanel { display: grid; grid-template-columns: 1.2fr auto; gap: 44px; align-items: center; border: 1px solid #E6D7DE; background: #fff; border-radius: 30px; padding: 48px 52px; }
        .ctaPanel h2 { margin-bottom: 16px; }
        .ctaPanel p { font-size: 18px; max-width: 760px; margin-bottom: 0; }
        .ctaActions { display: flex; flex-direction: column; gap: 12px; min-width: 180px; }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: 1fr .82fr; gap: 38px; }
          .trustGrid { grid-template-columns: repeat(3,1fr); }
          .trustItem:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
          .trustItem:nth-child(5) { border-top: 1px solid var(--line); }
          .overviewGrid, .documentsGrid, .termsGrid { gap: 54px; }
          .complianceMatrix { grid-template-columns: repeat(2,1fr); }
          .complianceCol:nth-child(3) { border-left: 0; border-top: 1px solid #36363E; }
          .complianceCol:nth-child(4) { border-top: 1px solid #36363E; }
          .digitalGrid { gap: 46px; }
          .digitalMockup { min-height: 480px; }
          .crossGrid { gap: 50px; }
          .termsGrid { grid-template-columns: .7fr 1.3fr; }
          .termRow { grid-template-columns: 46px 160px 1fr; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section--dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .heroGrid { grid-template-columns: 1fr; }
          .heroCopy { max-width: 780px; }
          .heroGraphic { justify-self: center; max-width: 500px; }
          .trustGrid { grid-template-columns: repeat(2,1fr); }
          .trustItem:nth-child(3), .trustItem:nth-child(5) { border-left: 0; }
          .trustItem:nth-child(3) { border-top: 1px solid var(--line); }
          .trustItem:nth-child(5) { grid-column: 1 / -1; }
          .overviewGrid, .documentsGrid, .termsGrid, .securityGrid, .marketsTop { grid-template-columns: 1fr; gap: 36px; }
          .overviewLead, .documentsLead, .termsLead { position: static; }
          .overviewLead .sectionHeader, .documentsLead .sectionHeader, .termsLead .sectionHeader, .securityCopy .sectionHeader, .marketsTop .sectionHeader { text-align: center; margin-left: auto; margin-right: auto; }
          .overviewLead .sectionIntro, .documentsLead .sectionIntro, .termsLead .sectionIntro { margin-left: auto; margin-right: auto; }
          .sectorGrid { grid-template-columns: 1fr; }
          .sectorItem, .sectorItem:nth-child(even) { padding: 28px 0; border-left: 0; border-bottom: 1px solid var(--line); }
          .sectorItem:nth-last-child(-n+2) { border-bottom: 1px solid var(--line); }
          .sectorItem:last-child { border-bottom: 0; }
          .documentGroup { grid-template-columns: 220px 1fr; }
          .complianceIntroGrid, .aiHeaderGrid { grid-template-columns: 1fr; gap: 20px; }
          .complianceIntroGrid .sectionHeader, .aiHeaderGrid .sectionHeader { text-align: center; margin-left: auto; margin-right: auto; margin-bottom: 0; }
          .complianceIntroGrid p, .aiHeaderGrid p { max-width: 800px; margin-left: auto; margin-right: auto; text-align: center; }
          .digitalGrid, .crossGrid { grid-template-columns: 1fr; }
          .digitalCopy .sectionHeader, .crossCopy .sectionHeader { text-align: center; margin-left: auto; margin-right: auto; }
          .digitalCopy > p, .crossCopy > p { max-width: 760px; }
          .digitalMockup { max-width: 690px; width: 100%; margin: 0 auto; min-height: 530px; }
          .digitalFeatureRows { grid-template-columns: 1fr; }
          .digitalFeature + .digitalFeature { border-left: 0; border-top: 1px solid var(--line); }
          .network { max-width: 650px; width: 100%; margin: 0 auto; }
          .aiLanes { grid-template-columns: 1fr; }
          .aiControl { grid-template-columns: 44px 1fr; }
          .aiControl .editorialLink { grid-column: 2; justify-self: start; }
          .termRow { grid-template-columns: 46px 175px 1fr; }
          .marketFeatures { grid-template-columns: 1fr; }
          .whyGrid { grid-template-columns: 1fr; }
          .whyItem, .whyItem:nth-child(even) { border-left: 0; padding: 28px 0; }
          .marketFeature, .marketFeature + .marketFeature { padding: 28px 0; border-left: 0; }
          .marketFeature + .marketFeature { border-top: 1px solid var(--line); }
          .ctaPanel { grid-template-columns: 1fr; text-align: center; padding: 42px 36px; }
          .ctaPanel p { margin-left: auto; margin-right: auto; }
          .ctaActions { flex-direction: row; justify-content: center; min-width: 0; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section--dense { padding: 64px 0; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .hero { padding: 72px 0 68px; }
          .heroGrid { gap: 42px; }
          .heroCopy { text-align: center; }
          .heroCopy .bodyLarge { font-size: 18px; margin-left: auto; margin-right: auto; }
          .heroActions { flex-direction: column; align-items: stretch; }
          .heroActions .btn { width: 100%; min-height: 50px; }
          .heroGraphic { max-width: 430px; }
          .trustGrid { grid-template-columns: 1fr; }
          .trustItem, .trustItem + .trustItem, .trustItem:nth-child(3), .trustItem:nth-child(4), .trustItem:nth-child(5) { border-left: 0; border-top: 1px solid var(--line); }
          .trustItem:first-child { border-top: 0; }
          .trustItem { padding: 20px 0; }
          .trustItem span { font-size: 14px; }
          .sectionHeader { margin-bottom: 34px; }
          .sectionHeader, .overviewLead .sectionHeader, .documentsLead .sectionHeader, .termsLead .sectionHeader, .securityCopy .sectionHeader, .marketsTop .sectionHeader, .digitalCopy .sectionHeader, .crossCopy .sectionHeader, .complianceIntroGrid .sectionHeader, .aiHeaderGrid .sectionHeader { text-align: center; margin-left: auto; margin-right: auto; }
          .sectionIntro, .complianceIntroGrid p, .aiHeaderGrid p { font-size: 17px; }
          .overviewCopy p, .documentsLead p, .digitalCopy p, .crossCopy p, .termsLead p, .securityCopy p, .complianceIntroGrid > p, .aiHeaderGrid > p { font-size: 16px; text-align: left; }
          .sectorItem { grid-template-columns: 42px 1fr; column-gap: 15px; }
          .sectorItem p { grid-column: 1 / -1; padding-left: 0; margin-top: 10px; }
          .documentGroup { grid-template-columns: 1fr; gap: 14px; padding: 24px 0; }
          .documentGroup h3 { font-size: 20px; }
          .complianceMatrix { grid-template-columns: 1fr; border-radius: 24px; }
          .complianceCol + .complianceCol, .complianceCol:nth-child(3), .complianceCol:nth-child(4) { border-left: 0; border-top: 1px solid #36363E; }
          .complianceCol { padding: 28px 24px; }
          .digitalMockup { min-height: 0; display: grid; gap: 20px; }
          .browserMock { position: relative; left: auto; top: auto; width: 100%; }
          .phoneMock { position: relative; right: auto; bottom: auto; width: min(100%, 270px); min-width: 0; justify-self: center; }
          .browserBody { padding: 20px; }
          .uiRow { font-size: 14px; gap: 12px; flex-wrap: wrap; }
          .uiRow strong { text-align: right; }
          .phoneScreen { padding: 18px 13px; min-height: 0; }
          .digitalFeature { padding: 24px 0; }
          .crossList { grid-template-columns: 1fr; }
          .network { display: none; }
          .aiLane { padding: 25px 22px; }
          .aiControl { grid-template-columns: 1fr; text-align: left; }
          .aiControl .editorialLink { grid-column: 1; }
          .termRow { grid-template-columns: 44px 1fr; gap: 14px; }
          .termRow h3 { margin-top: 5px; }
          .termRow p { grid-column: 1 / -1; }
          .securityPanel { padding: 5px 22px; border-radius: 24px; }
          .securityRow { grid-template-columns: 40px 1fr; }
          .marketFeatures { border-bottom: 1px solid var(--line); }
          .whyGrid { grid-template-columns: 1fr; }
          .whyItem, .whyItem:nth-child(even) { border-left: 0; padding: 25px 0; }
          .faqWrap { margin-top: 8px; }
          .faqItem summary { font-size: 17px; grid-template-columns: 1fr 26px; gap: 14px; padding: 20px 0; }
          .faqAnswer { padding: 0 0 22px; }
          .finalCta { padding: 64px 0; }
          .ctaPanel { padding: 34px 22px; border-radius: 24px; }
          .ctaActions { flex-direction: column; }
          .ctaActions .btn { width: 100%; }
        }

        @media (max-width: 360px) {
          .phoneAction { padding: 11px; font-size: 14px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Banking & Financial Services</div>
            <h1>Banking Translation Services</h1>
            <p className="bodyLarge">
              Deliver accurate, secure, and consistent multilingual banking communications across global markets. Stepes provides professional banking translation services for retail and commercial banks, lenders, payment providers, digital banking platforms, and other financial institutions in 100+ languages.
            </p>
            <p className="bodyLarge">
              From customer disclosures and loan documentation to AML and KYC content, mobile banking apps, cross-border payments, and internal banking operations, we combine experienced financial linguists, terminology management, translation technology, and rigorous quality assurance for today's fast-moving banking industry.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="https://www.stepes.com/contact-sales/">Get a Quote <Arrow /></a>
              <a className="btn btnSecondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
            </div>
          </div>
          <BankingHeroGraphic />
        </div>
      </section>

      <section className="trustBand" aria-label="Banking translation service highlights">
        <div className="shell trustGrid">
          {trustItems.map((item) => (
            <div className="trustItem" key={item.title}>
              <div className="trustIcon"><Icon name={item.icon} /></div>
              <div><strong>{item.title}</strong><span>{item.text}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="modern-banking">
        <div className="shell overviewGrid">
          <div className="overviewLead">
            <SectionHeader title="Translation Solutions for Modern Banking" />
          </div>
          <div className="overviewCopy">
            <p>Banking communications are increasingly global, digital, and interconnected. Customers move between branches, websites, mobile apps, payment platforms, contact centers, and automated service channels, while banking teams manage regulatory requirements, financial crime controls, product updates, and internal operations across multiple markets.</p>
            <p>For banks operating in more than one language, translation must do more than convey words accurately. Product terminology needs to remain consistent across channels. Customer disclosures must be clear. Digital content must work within the user experience. Compliance materials require precise language. Recurring content must be updated efficiently without introducing inconsistencies from one version to the next.</p>
            <p>Stepes provides end-to-end banking translation and localization services designed around these requirements. Our professional linguists, terminology resources, translation memory, quality controls, and AI-enabled workflows help banks communicate reliably with customers, employees, regulators, and business partners around the world.</p>
            <a className="editorialLink" href="https://www.stepes.com/financial-translation-services/">Explore Financial Translation Services <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="banking-sectors">
        <div className="shell">
          <SectionHeader
            eyebrow="Industry Expertise"
            title="Translation Expertise Across the Banking Industry"
            intro="Different banking businesses create different language requirements. Stepes supports specialized multilingual content across the major branches of modern banking."
            centered
          />
          <div className="sectorGrid">
            {sectors.map((sector) => (
              <article className="sectorItem" key={sector.title}>
                <div className="iconBox"><Icon name={sector.icon} /></div>
                <div><h3>{sector.title}</h3><p>{sector.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="banking-content">
        <div className="shell documentsGrid">
          <div className="documentsLead">
            <SectionHeader title="Banking Documents and Multilingual Content" />
            <p>Banks create multilingual content throughout the entire customer, product, compliance, and operational lifecycle. Stepes translates both traditional banking documents and continuously updated digital content.</p>
          </div>
          <div className="documentGroups">
            {documentGroups.map((group) => (
              <div className="documentGroup" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="cleanList">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
            <p style={{ marginTop: 28, marginBottom: 0 }}>Whether a project involves one high-risk banking document or thousands of continuously updated digital strings, Stepes can tailor the translation workflow to the content, audience, turnaround requirements, and required level of review.</p>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="banking-compliance">
        <div className="shell">
          <div className="complianceIntroGrid">
            <SectionHeader eyebrow="Compliance & Financial Crime" title="Banking Compliance, AML and KYC Translation" dark />
            <p>Banking compliance content requires precise terminology, careful review, and clear communication across languages. Stepes supports multilingual AML, KYC, customer due diligence, sanctions, financial crime, fraud prevention, and regulatory content.</p>
          </div>
          <div className="complianceMatrix">
            <article className="complianceCol">
              <div className="iconBox"><Icon name="search" /></div>
              <h3>Anti-Money Laundering</h3>
              <p>AML programs generate multilingual content across policies, controls, investigations, training, customer communications, and operational procedures.</p>
              <ul><li>AML policies and procedures</li><li>Risk assessments</li><li>Transaction monitoring documentation</li><li>Employee training and eLearning</li><li>Compliance communications</li></ul>
            </article>
            <article className="complianceCol">
              <div className="iconBox"><Icon name="users" /></div>
              <h3>KYC & Customer Due Diligence</h3>
              <p>Support multilingual customer onboarding and compliance operations across jurisdictions and customer populations.</p>
              <ul><li>KYC questionnaires</li><li>Customer Due Diligence</li><li>Enhanced Due Diligence</li><li>Identity verification instructions</li><li>Beneficial ownership communications</li></ul>
            </article>
            <article className="complianceCol">
              <div className="iconBox"><Icon name="alert" /></div>
              <h3>Sanctions, Fraud & Financial Crime</h3>
              <p>Help banking teams communicate consistently as financial crime risks, fraud patterns, and customer-security needs evolve.</p>
              <ul><li>Sanctions compliance</li><li>Fraud prevention content</li><li>Scam awareness</li><li>Security notifications</li><li>Internal financial crime guidance</li></ul>
            </article>
            <article className="complianceCol">
              <div className="iconBox"><Icon name="document" /></div>
              <h3>Regulatory & Governance Communications</h3>
              <p>Translate high-impact banking content where terminology, context, and careful review are especially important.</p>
              <ul><li>Regulatory correspondence</li><li>Examination materials</li><li>Governance documentation</li><li>Risk-management materials</li><li>Internal controls and policy updates</li></ul>
            </article>
          </div>
          <div className="darkNote">For compliance-sensitive banking content, Stepes can apply human-led translation and additional linguistic review according to the required quality and risk profile.</div>
        </div>
      </section>

      <section className="section" id="digital-banking">
        <div className="shell">
          <div className="digitalGrid">
            <div className="digitalCopy">
              <SectionHeader title="Digital Banking and Mobile App Localization" />
              <p>Banking has become an always-on digital experience. Customers expect to open accounts, transfer money, make payments, manage cards, verify identity, receive alerts, contact support, and complete many other financial activities through websites and mobile applications.</p>
              <p>Stepes provides end-to-end localization for online and mobile banking platforms, helping financial institutions deliver consistent multilingual experiences across web, mobile, and connected customer channels.</p>
              <ul className="cleanList" style={{ marginTop: 24 }}>
                <li>Registration and account onboarding</li>
                <li>Login, authentication, and identity verification</li>
                <li>Account dashboards, transfers, and payments</li>
                <li>Card management, transaction histories, and alerts</li>
                <li>Customer support, settings, and help content</li>
              </ul>
            </div>
            <div className="digitalMockup" aria-label="Illustrative multilingual online and mobile banking interface">
              <div className="browserMock">
                <div className="browserBar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                <div className="browserBody">
                  <div className="uiEyebrow">Online Banking</div>
                  <div className="uiTitle">Good morning, Maria</div>
                  <div className="balanceCard"><div className="balanceLabel">Available balance</div><div className="balanceValue">$12,480.25</div></div>
                  <div className="uiRow"><span>Transfer funds</span><strong>Transferir fondos</strong></div>
                  <div className="uiRow"><span>Pay a bill</span><strong>Pagar una factura</strong></div>
                  <div className="uiRow"><span>Security center</span><strong>Centro de seguridad</strong></div>
                </div>
              </div>
              <div className="phoneMock">
                <div className="phoneScreen">
                  <div className="phoneTop">Mobile Banking • 日本語</div>
                  <div className="phoneAction"><strong>口座残高</strong><span>Account balance</span></div>
                  <div className="phoneAction"><strong>振込・送金</strong><span>Transfers & payments</span></div>
                  <div className="phoneAction"><strong>カード管理</strong><span>Card management</span></div>
                  <div className="phoneAction phonePrimary"><strong>安全に続ける</strong><span>Continue securely</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="digitalFeatureRows">
            <div className="digitalFeature"><h3>UI/UX Localization</h3><p>Translations are developed with product context, screen constraints, customer workflows, and banking terminology in mind.</p></div>
            <div className="digitalFeature"><h3>Continuous Localization</h3><p>Support recurring releases, security updates, product changes, and other frequent digital banking content.</p></div>
            <div className="digitalFeature"><h3>In-Context Linguistic QA</h3><p>Review truncation, context, terminology, navigation language, locale formatting, and RTL requirements before release.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--blush" id="cross-border-banking">
        <div className="shell crossGrid">
          <div className="crossCopy">
            <SectionHeader title="Cross-Border Banking Translation" />
            <p>International banking depends on information moving accurately between customers, banks, corporate treasury teams, payment providers, and financial institutions across jurisdictions.</p>
            <p>Stepes provides cross-border banking translation services that help global banks communicate consistently throughout international transactions and customer relationships while preserving payment instructions, transaction details, beneficiary and originator information, and compliance-related terminology.</p>
            <div className="crossList">
              {["Correspondent banking", "International corporate banking", "Cross-border payments", "Treasury operations", "Global cash management", "Trade finance", "International account servicing", "Payment instructions", "Beneficiary and originator communications", "International onboarding", "Multijurisdictional compliance", "Cross-border customer support"].map((item) => <div key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
            </div>
          </div>
          <CrossBorderGraphic />
        </div>
      </section>

      <section className="section section--soft" id="ai-banking-translation">
        <div className="shell">
          <div className="aiHeaderGrid">
            <SectionHeader eyebrow="Risk-Based Workflows" title="AI-Powered Banking Translation With Human Accountability" />
            <p>AI is transforming how enterprises create, process, and translate content. For banking organizations, the right translation workflow depends on what the content is, who will read it, and what could happen if the translation is wrong.</p>
          </div>
          <div className="aiLanes">
            <article className="aiLane">
              <h3>Human-Led Translation</h3>
              <p>For banking content where regulatory sensitivity, legal meaning, customer impact, or precision requires a higher level of linguistic control.</p>
              <ul><li>Regulatory communications</li><li>Customer disclosures</li><li>Contracts and agreements</li><li>AML and KYC materials</li><li>High-risk external communications</li></ul>
            </article>
            <article className="aiLane">
              <h3>AI Translation + Expert Review</h3>
              <p>For appropriate higher-volume content where speed and scalability matter while professional linguistic validation remains necessary.</p>
              <ul><li>Knowledge bases</li><li>Customer support content</li><li>Internal banking materials</li><li>Product information</li><li>Recurring digital updates</li></ul>
            </article>
            <article className="aiLane">
              <h3>Translation Workflow Automation</h3>
              <p>For recurring banking content suited to automated processing, with efficient intake, language-asset reuse, routing, review, QA, and delivery.</p>
              <ul><li>Content intake</li><li>Translation-memory leverage</li><li>Terminology application</li><li>Human-review routing</li><li>Quality assurance and delivery</li></ul>
            </article>
          </div>
          <div className="aiControl">
            <div className="iconBox"><Icon name="shield" /></div>
            <div><h3>Customer-Controlled AI Use</h3><p>Stepes can align translation workflows with customer-defined requirements so banking organizations retain control over when and how AI is used.</p></div>
            <a className="editorialLink" href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflows <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section" id="banking-terminology">
        <div className="shell termsGrid">
          <div className="termsLead">
            <SectionHeader eyebrow="Language Assets" title="Consistent Banking Terminology Across Every Customer Touchpoint" />
            <p>When teams translate independently, small terminology differences can multiply across websites, disclosures, mobile apps, customer support, and internal content. Stepes helps banks centralize approved language for scalable localization.</p>
            <a className="editorialLink" href="https://www.stepes.com/translation-memory/">Translation Memory <Arrow /></a>
          </div>
          <div className="termRows">
            <div className="termRow"><div className="iconBox"><Icon name="terms" /></div><h3>Banking Glossaries</h3><p>Maintain approved terminology for product and service names, account types, lending concepts, compliance language, payments, digital banking, and organization-specific vocabulary.</p></div>
            <div className="termRow"><div className="iconBox"><Icon name="layers" /></div><h3>Translation Memory</h3><p>Reuse validated previous translations for recurring disclosures, customer notices, product updates, applications, policies, and digital strings to improve consistency and reduce unnecessary retranslation.</p></div>
            <div className="termRow"><div className="iconBox"><Icon name="document" /></div><h3>Multilingual Style Guides</h3><p>Standardize tone, capitalization, customer-facing language, numbers, currencies, punctuation, and other language-specific conventions across banking channels.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="secure-banking-translation">
        <div className="shell securityGrid">
          <div className="securityCopy">
            <SectionHeader eyebrow="Security & Governance" title="Secure Translation Workflows for Banking Content" />
            <p>Banking translation projects can contain customer information, internal operational data, regulatory correspondence, product information, risk documentation, transaction-related information, and other sensitive material.</p>
            <p>Stepes provides controlled translation processes for sensitive financial content and can align confidentiality, technology, access, and data-handling requirements with each banking program.</p>
          </div>
          <div className="securityPanel">
            <div className="securityRow"><div className="iconBox"><Icon name="lock" /></div><div><h3>Controlled Project Access</h3><p>Restrict project participation and content access according to the agreed banking workflow.</p></div></div>
            <div className="securityRow"><div className="iconBox"><Icon name="shield" /></div><div><h3>Customer-Defined Security Requirements</h3><p>Support confidentiality agreements, NDAs, secure file exchange, dedicated teams, and customer-specific handling instructions.</p></div></div>
            <div className="securityRow"><div className="iconBox"><Icon name="ai" /></div><div><h3>Controlled AI Usage</h3><p>Align AI-enabled translation with customer-approved policies, governance requirements, and content-risk decisions.</p></div></div>
            <div className="securityRow"><div className="iconBox"><Icon name="workflow" /></div><div><h3>Consistent Review & Delivery</h3><p>Apply defined review, retention, delivery, and linguistic QA requirements across ongoing multilingual banking programs.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" id="global-markets">
        <div className="shell">
          <div className="marketsTop">
            <SectionHeader title="Multilingual Banking for Global Markets" />
            <p>Banking language requirements vary by country, customer population, regulatory environment, product, and channel. Stepes provides banking translations across 100+ languages, with professional native linguists who adapt terminology and customer communications for the target market.</p>
          </div>
          <div className="marketFeatures">
            <article className="marketFeature">
              <h3>Spanish Banking Translation</h3>
              <p>Support U.S., Latin American, and international Spanish-speaking banking customers across account agreements, disclosures, notices, online banking, mobile apps, statements, lending materials, customer support, and payments. Language can be tailored to the intended market rather than treating all Spanish-speaking audiences as identical.</p>
            </article>
            <article className="marketFeature">
              <h3>French & French Canadian Banking Translation</h3>
              <p>Localize account materials, customer notices, lending content, digital banking, compliance communications, websites, apps, and customer support using terminology and language conventions appropriate to Canadian French or other French-speaking markets.</p>
            </article>
          </div>
          <div className="languageCloud" aria-label="Representative banking translation languages">
            {["Chinese", "Japanese", "Korean", "German", "Portuguese", "Arabic", "Vietnamese", "Italian", "Dutch", "Polish", "Nordic Languages", "Southeast Asian Languages", "Central & Eastern European Languages"].map((language) => <span className="languageTag" key={language}>{language}</span>)}
          </div>
          <a className="editorialLink" href="https://www.stepes.com/translation-languages/">Explore Translation Languages <Arrow /></a>
        </div>
      </section>

      <section className="section section--soft" id="why-stepes">
        <div className="shell">
          <SectionHeader
            title="Why Banks Choose Stepes"
            intro="Banking organizations need multilingual content that is accurate enough for sensitive communications, scalable enough for digital operations, and flexible enough to support different content types across global markets."
            centered
          />
          <div className="whyGrid">
            {whyItems.map((item) => (
              <article className="whyItem" key={item.title}>
                <div className="iconBox"><Icon name={item.icon} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="banking-faq">
        <div className="shell">
          <SectionHeader title="Banking Translation Services FAQs" intro="Answers to common questions about multilingual banking content, compliance, digital localization, risk-based AI translation, security, and enterprise-scale programs." centered />
          <div className="faqWrap">
            {faqItems.map((item, index) => (
              <details className="faqItem" key={item.q} open={index === 0}>
                <summary><span>{item.q}</span><span className="faqPlus" aria-hidden="true">+</span></summary>
                <div className="faqAnswer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell">
          <div className="ctaPanel">
            <div>
              <h2>Translate Banking Content With Confidence</h2>
              <p>From customer disclosures and compliance documentation to mobile banking apps, cross-border payments, lending communications, and global banking operations, Stepes helps financial institutions communicate accurately across languages and markets.</p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href="https://www.stepes.com/contact-sales/">Get a Quote <Arrow /></a>
              <a className="btn btnSecondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
