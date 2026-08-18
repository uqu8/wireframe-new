import React, { useState } from "react";

const channels = [
  {
    icon: "knowledge",
    title: "Help Centers and Knowledge Bases",
    text: "Localize FAQs, troubleshooting articles, onboarding guides, product instructions, release information, and reusable support documentation.",
  },
  {
    icon: "ticket",
    title: "Support Tickets and Email",
    text: "Translate incoming customer requests, agent responses, case updates, escalation messages, and follow-up communications while preserving context.",
  },
  {
    icon: "chat",
    title: "Live Chat and Messaging",
    text: "Support multilingual web chat, in-app messaging, mobile assistance, and other conversational channels through rapid, content-aware workflows.",
  },
  {
    icon: "bot",
    title: "Chatbots and AI Support Agents",
    text: "Localize chatbot scripts, automated answers, conversational intents, virtual-agent knowledge, and AI-generated support responses.",
  },
  {
    icon: "community",
    title: "Customer Communities and Forums",
    text: "Expand access to recurring solutions, moderator content, product discussions, and useful user-generated support information.",
  },
  {
    icon: "liveSupport",
    title: "Voice and Video Support",
    text: "Enable technical support calls, onboarding sessions, issue escalation, and scheduled multilingual assistance through remote interpreting.",
  },
];

const workflowRows = [
  {
    need: "High-volume, low-risk support communications",
    workflow: "AI translation with approved terminology and automated quality controls",
    fit: "Routine questions, high-frequency messages, and time-sensitive informational content",
  },
  {
    need: "Help-center articles, FAQs, and reusable support content",
    workflow: "AI-powered translation with professional linguistic review",
    fit: "Customer-facing self-service content that must be accurate, fluent, and consistent",
  },
  {
    need: "Complex technical questions",
    workflow: "Subject-matter linguist translation or expert review",
    fit: "Troubleshooting, product support, and specialized technical interactions",
  },
  {
    need: "Sensitive, regulated, or high-impact interactions",
    workflow: "Professional human translation with enhanced quality assurance",
    fit: "Medical, financial, legal, safety-related, or escalation-sensitive content",
  },
  {
    need: "Live customer conversations",
    workflow: "Rapid AI-assisted translation or remote interpreting",
    fit: "Chat, messaging, telephone, and video interactions",
  },
  {
    need: "Recurring support-platform content",
    workflow: "API-connected and automated localization workflow",
    fit: "Knowledge bases, support systems, and continuously updated digital content",
  },
];

const industries = [
  {
    title: "Software and SaaS",
    text: "Help centers, release information, product support tickets, chatbot responses, technical troubleshooting, and in-app assistance.",
    url: "https://www.stepes.com/software-translation-services/",
  },
  {
    title: "Retail and E-Commerce",
    text: "Order questions, returns, product information, delivery issues, marketplace communications, and customer-service knowledge bases.",
    url: "https://www.stepes.com/retail-ecommerce-translation-services/",
  },
  {
    title: "Travel and Hospitality",
    text: "Booking support, itinerary changes, guest communications, service information, travel updates, and urgent assistance.",
    url: "https://www.stepes.com/travel-hospitality-translation-services/",
  },
  {
    title: "Gaming",
    text: "Player support articles, account and payment issues, community discussions, technical troubleshooting, and in-game support communications.",
    url: "https://www.stepes.com/gaming-translation-services/",
  },
  {
    title: "Financial Services",
    text: "Account inquiries, application assistance, digital-service guidance, and governed customer communications.",
    url: "https://www.stepes.com/financial-translation-services/",
  },
  {
    title: "Healthcare and Life Sciences",
    text: "Patient-support resources, product questions, care-program communications, medical device information, and sensitive support interactions.",
    url: "https://www.stepes.com/life-sciences-translation-services/",
  },
  {
    title: "Manufacturing and Technical Products",
    text: "Installation questions, troubleshooting, warranty requests, parts information, maintenance guidance, and technical service documentation.",
    url: "https://www.stepes.com/manufacturing-translation-services/",
  },
  {
    title: "Telecommunications",
    text: "Service inquiries, account support, device setup, connectivity guidance, troubleshooting instructions, and customer communications.",
    url: "https://www.stepes.com/telecommunications-translation-services/",
  },
];

const faqs = [
  {
    question: "What is multilingual customer support?",
    answer:
      "Multilingual customer support enables an organization to assist customers in multiple languages across help centers, email, tickets, live chat, chatbots, telephone calls, and video interactions. Stepes provides the translation, localization, language technology, and professional linguistic expertise that helps existing support teams communicate with customers globally.",
  },
  {
    question: "How does customer support translation work?",
    answer:
      "Customer messages or support content can be submitted through the Stepes portal, structured file workflows, or an API connection. Content is identified by language and routed through the appropriate combination of AI translation, translation memory, terminology controls, professional review, quality assurance, and customer approval.",
  },
  {
    question: "Can Stepes translate help centers and knowledge bases?",
    answer:
      "Yes. Stepes translates help-center articles, FAQs, troubleshooting guides, product documentation, onboarding resources, support videos, and other self-service content. Translation memory and automated update workflows help keep multilingual knowledge bases aligned as source content changes.",
  },
  {
    question: "Can support tickets and chat messages be translated?",
    answer:
      "Yes. Incoming customer messages can be translated for support agents, and outgoing responses can be translated into the customer's language. The right workflow depends on message volume, urgency, technical complexity, sensitivity, and quality requirements.",
  },
  {
    question: "When should customer support content receive human review?",
    answer:
      "Professional review is especially valuable for reusable knowledge-base content, technical troubleshooting, regulated communications, sensitive cases, high-value customer interactions, and messages where ambiguity could affect the outcome. Routine and low-risk content may be suitable for AI-powered workflows with terminology and automated quality controls.",
  },
  {
    question: "Can Stepes connect with our existing customer support systems?",
    answer:
      "Stepes supports integration through the Translation API, structured file workflows, automation, and the translation management portal. This allows organizations to add multilingual translation to existing customer support and content operations without replacing their primary service platforms.",
  },
  {
    question: "How does Stepes maintain product terminology?",
    answer:
      "Stepes uses centralized glossaries, translation memory, do-not-translate lists, style guidance, and linguistic quality controls. These language assets help maintain consistency across support content, product interfaces, websites, technical documentation, and customer communications.",
  },
  {
    question: "Does Stepes provide multilingual call center agents?",
    answer:
      "Stepes provides translation, localization, and interpreting services that enable your existing customer service and technical support teams to communicate across languages. Stepes does not replace your organization’s customer service operation or take ownership of the underlying customer relationship.",
  },
];

const relatedSolutions = [
  {
    title: "Global Content Operations",
    text: "Coordinate recurring multilingual content across departments, markets, systems, channels, and release schedules.",
    url: "https://www.stepes.com/solutions/global-content-operations/",
  },
  {
    title: "AI Translation and Human Review",
    text: "Combine AI-powered speed with professional linguistic review for customer-facing and business-critical content.",
    url: "https://www.stepes.com/solutions/ai-translation-human-review/",
  },
  {
    title: "AI-Powered Translation Workflows",
    text: "Configure translation, review, approval, QA, and delivery around each content stream.",
    url: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  },
  {
    title: "Translation API",
    text: "Connect multilingual processing directly to applications, support platforms, and enterprise systems.",
    url: "https://www.stepes.com/developers/translation-api/",
  },
  {
    title: "Reporting and Analytics",
    text: "Measure translation volume, workflow performance, technology utilization, quality, and program trends.",
    url: "https://www.stepes.com/translation-reporting-analytics/",
  },
];

function Icon({ name, size = 24, className = "" }) {
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
    "aria-hidden": "true",
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),
    knowledge: (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </svg>
    ),
    ticket: (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="m5 7 7 5 7-5" />
        <path d="M7 16h5" />
        <path d="M15 16h2" />
      </svg>
    ),
    chat: (
      <svg {...common}>
        <path d="M4 5h16v11H9l-5 4z" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    ),
    bot: (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="13" rx="3" />
        <path d="M12 2v4" />
        <path d="M9 11h.01" />
        <path d="M15 11h.01" />
        <path d="M9 15h6" />
      </svg>
    ),
    community: (
      <svg {...common}>
        <circle cx="8" cy="8.5" r="2.5" />
        <path d="M3.5 17a4.5 4.5 0 0 1 9 0" />
        <path d="M13 5h7.5v7H17l-3 2v-2h-1z" />
        <path d="M16 8h1.5" />
      </svg>
    ),
    liveSupport: (
      <svg {...common}>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <path d="M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2z" />
        <path d="M20 13h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2z" />
        <path d="M17 19c0 1.7-1.6 3-4.5 3H11" />
        <circle cx="10" cy="22" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4 10-10" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    api: (
      <svg {...common}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    portal: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 14h3" />
        <path d="M14 14h3" />
      </svg>
    ),
    route: (
      <svg {...common}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 6h8" />
        <path d="m7 8 4 8" />
        <path d="m17 8-4 8" />
      </svg>
    ),
    approve: (
      <svg {...common}>
        <rect x="5" y="4" width="14" height="17" rx="2.5" />
        <path d="M9 4.5V3h6v1.5" />
        <path d="M8.5 9h7" />
        <path d="M8.5 12.5h4" />
        <path d="m11 17 2 2 3.5-4" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    ),
    glossary: (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
        <path d="M6.5 8h2.5M6.5 11h2" />
        <path d="M15 8h2.5M15 11h2" />
      </svg>
    ),
    memory: (
      <svg {...common}>
        <path d="M7 4h10a2 2 0 0 1 2 2v10" />
        <rect x="4" y="7" width="13" height="13" rx="2.5" />
        <path d="M8 12h5" />
        <path d="M8 16h3" />
        <path d="M17 17a4 4 0 0 0 3-3" />
        <path d="m18 11 2 3 2-3" />
      </svg>
    ),
    style: (
      <svg {...common}>
        <path d="M4 20h16" />
        <path d="m7 16 8-12 2 2-8 12-3 1z" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 4a3 3 0 0 1 0 6" />
        <path d="M17 14a5 5 0 0 1 4 5" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
    automation: (
      <svg {...common}>
        <path d="M7 7h7a4 4 0 0 1 4 4" />
        <path d="m15 8 3 3 3-3" />
        <path d="M17 17h-7a4 4 0 0 1-4-4" />
        <path d="m9 16-3-3-3 3" />
      </svg>
    ),
    translate: (
      <svg {...common}>
        <path d="M4 5h8" />
        <path d="M8 3v2" />
        <path d="M5 9c2 3 5 5 9 6" />
        <path d="M11 5c-1 4-3 7-7 10" />
        <path d="m14 19 3-8 3 8" />
        <path d="M15 16h4" />
      </svg>
    ),
    human: (
      <svg {...common}>
        <circle cx="9" cy="7.5" r="3.5" />
        <path d="M3.5 20a6 6 0 0 1 11-3.4" />
        <circle cx="17" cy="16.5" r="4" />
        <path d="m15.2 16.5 1.2 1.2 2.4-2.6" />
      </svg>
    ),
    send: (
      <svg {...common}>
        <path d="m3 11 18-8-7 18-3-7z" />
        <path d="m11 14 10-11" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorialLink ${className}`.trim()} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="button buttonPrimary" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a className="button buttonSecondary" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, center = false, dark = false }) {
  return (
    <div className={`sectionHeader ${center ? "sectionHeaderCenter" : ""}`.trim()}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2 className={dark ? "darkText" : ""}>{title}</h2>
      {intro ? <p className={dark ? "sectionIntro darkMuted" : "sectionIntro"}>{intro}</p> : null}
    </div>
  );
}

function SupportIllustration() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="presentation">
        <rect x="84" y="85" width="360" height="294" rx="28" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" />
        <rect x="106" y="112" width="316" height="44" rx="13" fill="#F7F8FB" stroke="#D8DDE6" />
        <circle cx="132" cy="134" r="7" fill="#C11D63" />
        <rect x="151" y="127" width="92" height="14" rx="7" fill="#AEB7C4" />
        <rect x="262" y="127" width="62" height="14" rx="7" fill="#D8DDE6" />
        <rect x="106" y="176" width="106" height="181" rx="16" fill="#FAFAFC" stroke="#D8DDE6" />
        <rect x="127" y="200" width="64" height="10" rx="5" fill="#9DA7B4" />
        <rect x="127" y="227" width="48" height="8" rx="4" fill="#D3D8E0" />
        <rect x="127" y="251" width="58" height="8" rx="4" fill="#D3D8E0" />
        <rect x="127" y="275" width="42" height="8" rx="4" fill="#D3D8E0" />
        <rect x="127" y="312" width="54" height="22" rx="11" fill="#FDF2F7" />
        <rect x="231" y="176" width="191" height="181" rx="16" fill="#FFFFFF" stroke="#D8DDE6" />
        <rect x="252" y="197" width="111" height="34" rx="16" fill="#FDF2F7" stroke="#E8B9CD" />
        <rect x="269" y="210" width="77" height="8" rx="4" fill="#C11D63" opacity="0.72" />
        <rect x="292" y="245" width="109" height="46" rx="18" fill="#F1F3F6" />
        <rect x="309" y="260" width="75" height="8" rx="4" fill="#9DA7B4" />
        <rect x="252" y="305" width="128" height="34" rx="16" fill="#FDF2F7" stroke="#E8B9CD" />
        <rect x="269" y="318" width="94" height="8" rx="4" fill="#C11D63" opacity="0.72" />
        <path d="M220 266h31" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 6" />
        <path d="m244 258 9 8-9 8" stroke="#C11D63" strokeWidth="2" fill="none" />

        <rect x="418" y="182" width="136" height="118" rx="24" fill="#152238" />
        <circle cx="455" cy="222" r="17" fill="#F2A7C6" opacity="0.18" stroke="#F2A7C6" />
        <path d="M447 222h16M455 214v16" stroke="#F2A7C6" strokeWidth="2" strokeLinecap="round" />
        <rect x="482" y="211" width="50" height="8" rx="4" fill="#E9EDF3" opacity="0.85" />
        <rect x="482" y="229" width="37" height="7" rx="3.5" fill="#AEB7C4" />
        <path d="M440 267h94" stroke="#617087" strokeWidth="2" />
        <circle cx="455" cy="267" r="6" fill="#C11D63" />
        <circle cx="486" cy="267" r="6" fill="#617087" />
        <circle cx="517" cy="267" r="6" fill="#617087" />

        <circle cx="147" cy="415" r="48" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" />
        <path d="M116 415h62M147 384c17 18 17 44 0 62M147 384c-17 18-17 44 0 62" stroke="#8E99A8" strokeWidth="2" fill="none" />
        <path d="M126 392c12 8 30 8 42 0M126 438c12-8 30-8 42 0" stroke="#8E99A8" strokeWidth="2" fill="none" />
        <circle cx="147" cy="415" r="5" fill="#C11D63" />

        <rect x="234" y="401" width="230" height="72" rx="22" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" />
        <circle cx="267" cy="437" r="17" fill="#FDF2F7" />
        <path d="m259 437 5 5 10-11" stroke="#C11D63" strokeWidth="2.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="296" y="420" width="104" height="10" rx="5" fill="#9DA7B4" />
        <rect x="296" y="441" width="132" height="8" rx="4" fill="#D3D8E0" />

        <path d="M151 379v-28" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 6" />
        <path d="M444 378v24" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 6" />
        <path d="M445 300v80" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 6" />
        <circle cx="520" cy="130" r="54" fill="#FDF2F7" />
        <path d="M487 130h66M520 97c18 19 18 47 0 66M520 97c-18 19-18 47 0 66" stroke="#9A6A80" strokeWidth="2" fill="none" />
        <path d="M496 108c14 8 34 8 48 0M496 152c14-8 34-8 48 0" stroke="#9A6A80" strokeWidth="2" fill="none" />
        <circle cx="520" cy="130" r="5" fill="#C11D63" />
      </svg>
    </div>
  );
}

function FAQItem({ item, index, open, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div className={`faqItem ${open ? "faqItemOpen" : ""}`.trim()}>
      <button
        id={buttonId}
        className="faqButton"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span className="faqToggle" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        id={panelId}
        className="faqPanel"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function MultilingualCustomerSupportWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepesPage">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --blush-strong: #F9E5EE;
          --dark: #121B2C;
          --dark-2: #19263A;
          --text: #172033;
          --muted: #58657A;
          --border: #E1E5EC;
          --border-dark: rgba(255,255,255,.14);
          --surface: #F7F8FA;
          --white: #FFFFFF;
          --eyebrow-dark: #F2A7C6;
          --shadow: 0 24px 70px rgba(18,27,44,.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .stepesPage {
          width: 100%;
          overflow-x: hidden;
          background: var(--white);
          color: var(--text);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .stepesPage a { color: inherit; }
        .stepesPage svg { display: block; }
        .stepesPage h1,
        .stepesPage h2,
        .stepesPage h3,
        .stepesPage p { margin-top: 0; }

        .shell {
          width: min(1280px, 100%);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .sectionDense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .surfaceSection { background: var(--surface); }
        .blushSection { background: var(--blush); }
        .darkSection { background: var(--dark); color: var(--white); }

        .hero {
          position: relative;
          padding-top: 100px;
          padding-bottom: 96px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFE 100%);
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: var(--border);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr);
          gap: 72px;
          align-items: center;
        }

        .heroCopy { max-width: 690px; }

        .hero h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 600;
          max-width: 670px;
        }

        .heroLead {
          margin-bottom: 34px;
          max-width: 660px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .buttonRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease;
        }

        .buttonPrimary,
        .buttonPrimary:link,
        .buttonPrimary:visited,
        .buttonPrimary:hover,
        .buttonPrimary:active,
        .buttonPrimary:focus,
        .buttonPrimary:focus-visible,
        .buttonPrimary * {
          color: #FFFFFF !important;
        }

        .buttonPrimary svg,
        .buttonPrimary svg * {
          stroke: #FFFFFF !important;
          fill: none;
        }

        .buttonPrimary {
          background: var(--magenta);
          border: 1px solid var(--magenta);
          box-shadow: 0 12px 28px rgba(193,29,99,.22);
        }

        .buttonPrimary:hover {
          background: var(--magenta-dark);
          border-color: var(--magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 15px 34px rgba(193,29,99,.28);
        }

        .buttonSecondary,
        .buttonSecondary:link,
        .buttonSecondary:visited,
        .buttonSecondary:hover,
        .buttonSecondary:active,
        .buttonSecondary:focus,
        .buttonSecondary:focus-visible {
          background: var(--white);
          border: 1px solid #CCD3DE;
          color: var(--text);
        }

        .buttonSecondary:hover {
          border-color: #AEB8C7;
          transform: translateY(-1px);
        }

        .button:focus-visible,
        .editorialLink:focus-visible,
        .faqButton:focus-visible {
          outline: 3px solid rgba(193,29,99,.28);
          outline-offset: 3px;
        }

        .heroVisual {
          min-width: 0;
          position: relative;
          border-radius: 30px;
          background: radial-gradient(circle at 75% 18%, rgba(193,29,99,.10), transparent 34%), #F7F8FB;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .heroVisual svg { width: 100%; height: auto; }

        .trustStrip {
          background: var(--white);
          border-bottom: 1px solid var(--border);
        }

        .trustGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: stretch;
        }

        .trustItem {
          min-height: 112px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 26px 28px;
          border-right: 1px solid var(--border);
        }

        .trustItem:first-child { padding-left: 0; }
        .trustItem:last-child { border-right: 0; padding-right: 0; }
        .trustIcon { color: var(--magenta); flex: 0 0 auto; }
        .trustItem strong { display: block; font-size: 17px; font-weight: 600; line-height: 1.3; }
        .trustItem span { display: block; margin-top: 3px; color: var(--muted); font-size: 14px; line-height: 1.45; }

        .eyebrow,
        .eyebrowDark {
          margin-bottom: 15px;
          font-size: 11px !important;
          line-height: 1.35 !important;
          letter-spacing: .17em;
          text-transform: uppercase;
          font-weight: 600 !important;
          color: var(--magenta) !important;
          opacity: 1 !important;
        }

        .eyebrowDark { color: var(--eyebrow-dark) !important; }

        .sectionHeader { max-width: 820px; margin-bottom: 50px; }
        .sectionHeaderCenter { text-align: center; margin-left: auto; margin-right: auto; }

        .sectionHeader h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -.8px;
          font-weight: 600;
        }

        .sectionIntro {
          max-width: 790px;
          margin-bottom: 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .sectionHeaderCenter .sectionIntro { margin-left: auto; margin-right: auto; }
        .darkText { color: var(--white); }
        .darkMuted { color: #C7D0DD; }

        .channelGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .channelItem {
          padding: 34px 32px 36px;
          min-height: 265px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--white);
        }

        .iconSurface {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 15px;
          border: 1px solid #F0D7E2;
          background: var(--blush);
          color: var(--magenta);
        }

        .iconSurface svg { width: 23px; height: 23px; }

        .channelItem h3,
        .featureRow h3,
        .knowledgeFeature h3,
        .industryItem h3,
        .whyItem h3,
        .relatedItem h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -.3px;
          font-weight: 600;
        }

        .channelItem p,
        .featureRow p,
        .knowledgeFeature p,
        .industryItem p,
        .whyItem p,
        .relatedItem p,
        .faqPanel p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .workflowPanel {
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 16px 46px rgba(18,27,44,.05);
        }

        .workflowRow {
          display: grid;
          grid-template-columns: 1.05fr 1.12fr .93fr;
          align-items: stretch;
          border-bottom: 1px solid var(--border);
        }

        .workflowRow:last-child { border-bottom: 0; }
        .workflowHeader { background: var(--dark); color: var(--white); }

        .workflowCell {
          min-width: 0;
          padding: 24px 26px;
          border-right: 1px solid var(--border);
          font-size: 16px;
          line-height: 1.6;
        }

        .workflowCell:last-child { border-right: 0; }
        .workflowHeader .workflowCell { border-right-color: var(--border-dark); font-size: 14px; font-weight: 600; letter-spacing: .03em; }
        .workflowCell strong { font-weight: 600; color: var(--text); }
        .workflowFit { color: var(--muted); }

        .sectionAction { margin-top: 30px; }
        .sectionLinks { display: flex; flex-wrap: wrap; gap: 10px 28px; align-items: center; }

        .editorialLink {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          text-decoration: none;
        }

        .editorialLink svg { flex: 0 0 auto; transition: transform .2s ease; }
        .editorialLink:hover { color: var(--magenta-dark); }
        .editorialLink:hover svg { transform: translateX(3px); }
        .darkEditorialLink,
        .darkEditorialLink:link,
        .darkEditorialLink:visited,
        .darkEditorialLink:hover,
        .darkEditorialLink:active,
        .darkEditorialLink:focus { color: var(--eyebrow-dark); }

        .splitGrid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 72px;
          align-items: center;
        }

        .splitCopy h2,
        .darkCopy h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -.8px;
          font-weight: 600;
        }

        .splitCopy > p,
        .darkCopy > p {
          margin-bottom: 28px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .knowledgeList { border-top: 1px solid var(--border); }

        .knowledgeFeature {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 26px 0;
          border-bottom: 1px solid var(--border);
        }

        .knowledgeFeature .iconSurface { margin-bottom: 0; align-self: start; }
        .knowledgeFeature h3 { font-size: 20px; margin-bottom: 7px; }

        .knowledgeMockup {
          border-radius: 30px;
          border: 1px solid var(--border);
          background: var(--white);
          box-shadow: var(--shadow);
          padding: 30px;
        }

        .mockupTop {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .mockupTitle { font-size: 17px; font-weight: 600; line-height: 1.35; }
        .mockupStatus { padding: 6px 11px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 14px; font-weight: 600; }

        .articlePreview {
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: #FAFBFC;
        }

        .articleLabel { margin-bottom: 10px; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
        .articlePreview h3 { margin-bottom: 12px; font-size: 22px; line-height: 1.25; font-weight: 600; }
        .articleLine { height: 9px; margin-top: 10px; border-radius: 999px; background: #D7DCE4; }
        .articleLine.short { width: 66%; }

        .publishFlow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          align-items: center;
          margin-top: 22px;
        }

        .publishStep {
          position: relative;
          min-height: 96px;
          padding: 18px 13px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--white);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }

        .publishStep:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 18px;
          color: var(--magenta);
          background: var(--white);
          font-size: 16px;
          line-height: 1;
        }

        .darkPanel {
          position: relative;
          padding: 72px;
          border-radius: 30px;
          background: var(--dark-2);
          overflow: hidden;
        }

        .darkPanel::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -180px;
          bottom: -220px;
          border-radius: 50%;
          border: 1px solid rgba(242,167,198,.18);
        }

        .darkPanelGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 70px;
          align-items: start;
        }

        .darkCopy h2 { color: var(--white); }
        .darkCopy > p { color: #C8D1DE; }

        .contextQuote {
          margin-top: 32px;
          padding: 24px 26px;
          border-left: 3px solid var(--magenta);
          background: rgba(255,255,255,.04);
          color: #E7ECF3;
          font-size: 17px;
          line-height: 1.65;
        }

        .featureRows { border-top: 1px solid var(--border-dark); }
        .featureRow {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border-dark);
        }
        .featureRow > svg { margin-top: 2px; color: var(--eyebrow-dark); }
        .featureRow h3 { margin-bottom: 7px; color: var(--white); font-size: 20px; }
        .featureRow p { color: #C8D1DE; }

        .aiHumanGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .aiHumanPanel {
          min-height: 100%;
          padding: 38px;
          border-radius: 26px;
          border: 1px solid var(--border);
          background: var(--white);
        }

        .aiHumanPanel:first-child { background: #F9FAFC; }
        .aiHumanPanel h3 { margin-bottom: 16px; font-size: 26px; line-height: 1.25; font-weight: 600; }
        .aiHumanPanel > p { margin-bottom: 24px; color: var(--muted); font-size: 16px; }
        .checkList { list-style: none; margin: 0; padding: 0; }
        .checkList li { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 11px; margin-top: 14px; font-size: 16px; line-height: 1.55; }
        .checkList li svg { margin-top: 2px; color: var(--magenta); }

        .connectionPanel {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          border: 1px solid var(--border);
          border-radius: 30px;
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 18px 50px rgba(18,27,44,.05);
        }

        .connectionCopy { padding: 54px 52px; }
        .connectionCopy h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.18; letter-spacing: -.8px; font-weight: 600; }
        .connectionCopy p { margin-bottom: 26px; color: var(--muted); font-size: 18px; }

        .connectionFeatures { background: var(--surface); border-left: 1px solid var(--border); }
        .connectionItem { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 29px 34px; border-bottom: 1px solid var(--border); }
        .connectionItem:last-child { border-bottom: 0; }
        .connectionItem .iconSurface { margin-bottom: 0; }
        .connectionItem h3 { margin-bottom: 6px; font-size: 20px; line-height: 1.3; font-weight: 600; }
        .connectionItem p { margin-bottom: 9px; color: var(--muted); font-size: 16px; }

        .processFlow {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          align-items: stretch;
          margin-top: 42px;
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          background: var(--white);
        }

        .processStep {
          position: relative;
          min-height: 150px;
          padding: 24px 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 14px;
          text-align: center;
          border-right: 1px solid var(--border);
          color: var(--text);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .processStep:last-child { border-right: 0; }
        .processStep svg { color: var(--magenta); }

        .terminologyGrid {
          display: grid;
          grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr);
          gap: 72px;
          align-items: start;
        }

        .terminologyIntro h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.18; letter-spacing: -.8px; font-weight: 600; }
        .terminologyIntro p { margin-bottom: 28px; color: var(--muted); font-size: 18px; }
        .terminologyRows { border-top: 1px solid var(--border); }
        .terminologyRow { display: grid; grid-template-columns: 46px 190px minmax(0, 1fr); gap: 18px; padding: 25px 0; border-bottom: 1px solid var(--border); align-items: start; }
        .terminologyRow svg { margin-top: 2px; color: var(--magenta); }
        .terminologyRow h3 { margin: 0; font-size: 19px; line-height: 1.4; font-weight: 600; }
        .terminologyRow p { margin: 0; color: var(--muted); font-size: 16px; }

        .liveSupportBand {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 64px;
          align-items: center;
          padding: 58px 62px;
          border-radius: 30px;
          background: var(--blush);
          border: 1px solid #EFC9D9;
        }

        .liveSupportBand h2 { margin-bottom: 18px; font-size: 34px; line-height: 1.2; letter-spacing: -.7px; font-weight: 600; }
        .liveSupportBand p { margin-bottom: 0; color: var(--muted); font-size: 17px; }
        .liveList { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px 28px; }
        .liveListItem { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: start; font-size: 16px; line-height: 1.5; }
        .liveListItem svg { margin-top: 2px; color: var(--magenta); }

        .governanceGrid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 70px;
          align-items: start;
        }

        .governanceCopy h2 { margin-bottom: 20px; color: var(--white); font-size: 36px; line-height: 1.18; letter-spacing: -.8px; font-weight: 600; }
        .governanceCopy > p { margin-bottom: 28px; color: #C8D1DE; font-size: 18px; }

        .isoStrip { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .isoChip { padding: 8px 13px; border-radius: 999px; border: 1px solid var(--border-dark); color: #E8EDF5; font-size: 14px; line-height: 1.3; }

        .governanceMatrix { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--border-dark); border-left: 1px solid var(--border-dark); }
        .governanceItem { min-height: 188px; padding: 28px; border-right: 1px solid var(--border-dark); border-bottom: 1px solid var(--border-dark); }
        .governanceItem svg { margin-bottom: 18px; color: var(--eyebrow-dark); }
        .governanceItem h3 { margin-bottom: 9px; color: var(--white); font-size: 20px; line-height: 1.3; font-weight: 600; }
        .governanceItem p { margin-bottom: 0; color: #C8D1DE; font-size: 16px; }

        .reportingGrid {
          display: grid;
          grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: center;
        }

        .reportingCopy h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.18; letter-spacing: -.8px; font-weight: 600; }
        .reportingCopy p { margin-bottom: 28px; color: var(--muted); font-size: 18px; }

        .reportingPanel { border: 1px solid var(--border); border-radius: 28px; background: var(--white); box-shadow: var(--shadow); padding: 30px; }
        .reportingHeader { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px 18px; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .reportingHeader strong { font-size: 18px; font-weight: 600; }
        .reportingHeader span { color: var(--muted); font-size: 14px; }
        .reportingStats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 22px 0; }
        .reportingStat { padding: 18px; border-radius: 16px; background: var(--surface); }
        .reportingStat strong { display: block; font-size: 18px; line-height: 1.2; font-weight: 600; }
        .reportingStat span { display: block; margin-top: 7px; color: var(--muted); font-size: 14px; line-height: 1.4; }
        .reportingChartLabel { padding-top: 18px; border-top: 1px solid var(--border); color: var(--text); font-size: 14px; font-weight: 600; }
        .barChart { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; align-items: end; min-height: 170px; padding: 14px 0 4px; }
        .barGroup { height: 155px; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 8px; }
        .bar { width: 100%; max-width: 34px; border-radius: 8px 8px 3px 3px; background: #D7DCE5; }
        .bar.magenta { background: var(--magenta); }
        .barLabel { color: var(--muted); font-size: 12px; }

        .industryGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .industryItem { min-height: 235px; padding: 34px 34px 32px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--white); }
        .industryItem h3 { font-size: 22px; }
        .industryItem p { margin-bottom: 20px; }

        .whyGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; border-top: 1px solid var(--border); }
        .whyItem { padding: 34px 28px 0; border-right: 1px solid var(--border); }
        .whyItem:first-child { padding-left: 0; }
        .whyItem:last-child { border-right: 0; padding-right: 0; }
        .whyItem svg { margin-bottom: 20px; color: var(--magenta); }
        .whyItem h3 { font-size: 21px; }

        .faqPanelWrap { border: 1px solid var(--border); border-radius: 28px; overflow: hidden; background: var(--white); }
        .faqItem { border-bottom: 1px solid var(--border); }
        .faqItem:last-child { border-bottom: 0; }
        .faqButton { width: 100%; min-height: 76px; padding: 23px 28px; display: flex; justify-content: space-between; gap: 24px; align-items: center; border: 0; background: transparent; color: var(--text); text-align: left; cursor: pointer; font: inherit; font-size: 18px; font-weight: 600; line-height: 1.45; }
        .faqToggle { width: 36px; height: 36px; flex: 0 0 36px; display: inline-flex; justify-content: center; align-items: center; border-radius: 50%; border: 1px solid var(--border); color: var(--magenta); font-size: 24px; font-weight: 400; line-height: 1; }
        .faqItemOpen .faqToggle { background: var(--blush); border-color: #E9C3D3; }
        .faqPanel { padding: 0 84px 26px 28px; }
        .faqPanel p { max-width: 840px; }

        .relatedGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .relatedItem { min-height: 250px; padding: 32px 30px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); display: flex; flex-direction: column; }
        .relatedItem h3 { font-size: 20px; }
        .relatedItem p { margin-bottom: 20px; }
        .relatedItem .editorialLink { margin-top: auto; }

        .finalCta { padding-top: 72px; padding-bottom: 96px; background: var(--white); }
        .finalCtaPanel { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr) 270px; gap: 50px; align-items: center; padding: 70px 74px; border-radius: 30px; border: 1px solid #ECC8D7; background: var(--blush); }
        .finalCtaPanel::after { content: ""; position: absolute; width: 320px; height: 320px; right: -90px; top: -120px; border-radius: 50%; border: 1px solid rgba(193,29,99,.15); }
        .finalCtaCopy { position: relative; z-index: 1; }
        .finalCtaCopy h2 { max-width: 760px; margin-bottom: 18px; font-size: 40px; line-height: 1.15; letter-spacing: -.9px; font-weight: 600; }
        .finalCtaCopy p { max-width: 760px; margin-bottom: 30px; color: var(--muted); font-size: 18px; }
        .finalCtaVisual { position: relative; z-index: 1; color: var(--magenta); }
        .finalCtaVisual svg { width: 100%; height: auto; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: minmax(0, 1fr) 430px; gap: 44px; }
          .trustItem { padding: 24px 20px; }
          .darkPanel { padding: 58px; }
          .connectionCopy { padding: 46px 42px; }
          .relatedGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .sectionDense { padding-top: 72px; padding-bottom: 72px; }
          .hero { padding-top: 88px; padding-bottom: 82px; }
          .heroGrid,
          .splitGrid,
          .darkPanelGrid,
          .connectionPanel,
          .terminologyGrid,
          .governanceGrid,
          .reportingGrid,
          .liveSupportBand { grid-template-columns: 1fr; }
          .heroGrid { gap: 54px; }
          .heroCopy { max-width: 760px; }
          .hero h1 { font-size: 42px; }
          .heroVisual { width: 100%; max-width: 620px; margin-left: auto; margin-right: auto; }
          .trustGrid { grid-template-columns: repeat(2, 1fr); }
          .trustItem:nth-child(2) { border-right: 0; padding-right: 0; }
          .trustItem:nth-child(3) { border-top: 1px solid var(--border); padding-left: 0; }
          .trustItem:nth-child(4) { border-top: 1px solid var(--border); }
          .channelGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sectionHeader h2,
          .splitCopy h2,
          .darkCopy h2,
          .connectionCopy h2,
          .terminologyIntro h2,
          .governanceCopy h2,
          .reportingCopy h2 { font-size: 32px; }
          .workflowPanel {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            border: 0;
            border-radius: 0;
            overflow: visible;
            background: transparent;
            box-shadow: none;
          }
          .workflowRow { display: block; border: 1px solid var(--border); border-radius: 20px; background: var(--white); overflow: hidden; }
          .workflowRow.workflowHeader { display: none; }
          .workflowRow:last-child { border-bottom: 1px solid var(--border); }
          .workflowCell { position: relative; min-height: 0; padding: 48px 22px 20px; border-right: 0; border-bottom: 1px solid var(--border); }
          .workflowCell:last-child { border-bottom: 0; }
          .workflowCell::before {
            position: absolute;
            left: 22px;
            top: 18px;
            color: var(--magenta);
            font-size: 11px;
            line-height: 1.35;
            letter-spacing: .12em;
            text-transform: uppercase;
            font-weight: 600;
          }
          .workflowCell:nth-child(1)::before { content: "Support Need"; }
          .workflowCell:nth-child(2)::before { content: "Workflow"; }
          .workflowCell:nth-child(3)::before { content: "Best Fit"; }
          .darkPanel { padding: 50px 42px; }
          .aiHumanGrid { gap: 20px; }
          .connectionFeatures { border-left: 0; border-top: 1px solid var(--border); }
          .processFlow { grid-template-columns: repeat(3, 1fr); }
          .processStep:nth-child(3) { border-right: 0; }
          .processStep:nth-child(-n+3) { border-bottom: 1px solid var(--border); }
          .terminologyGrid { gap: 48px; }
          .liveSupportBand { gap: 42px; padding: 50px 46px; }
          .governanceGrid { gap: 50px; }
          .industryGrid { grid-template-columns: 1fr; }
          .whyGrid { grid-template-columns: repeat(2, 1fr); }
          .whyItem:nth-child(2) { border-right: 0; padding-right: 0; }
          .whyItem:nth-child(3), .whyItem:nth-child(4) { margin-top: 38px; padding-top: 34px; border-top: 1px solid var(--border); }
          .whyItem:nth-child(3) { padding-left: 0; }
          .relatedGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .finalCtaPanel { grid-template-columns: 1fr; gap: 30px; padding: 58px 52px; }
          .finalCtaCopy h2 { font-size: 36px; }
          .finalCtaVisual { width: 190px; justify-self: end; }
        }

        @media (max-width: 680px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding-top: 68px; padding-bottom: 68px; }
          .sectionDense { padding-top: 64px; padding-bottom: 64px; }
          .hero { padding-top: 72px; padding-bottom: 66px; }
          .hero h1 { font-size: 38px; letter-spacing: -1px; }
          .heroLead { font-size: 18px; }
          .buttonRow { align-items: stretch; }
          .button { width: 100%; min-height: 52px; }
          .sectionLinks { flex-direction: column; align-items: flex-start; gap: 4px; }
          .sectionLinks .editorialLink { width: 100%; }
          .trustGrid { grid-template-columns: 1fr; }
          .trustItem,
          .trustItem:first-child,
          .trustItem:nth-child(2),
          .trustItem:nth-child(3),
          .trustItem:nth-child(4),
          .trustItem:last-child { min-height: 92px; padding: 22px 0; border-right: 0; border-top: 1px solid var(--border); }
          .trustItem:first-child { border-top: 0; }
          .trustItem span { font-size: 16px; }
          .sectionHeader { margin-bottom: 38px; }
          .sectionHeader h2,
          .splitCopy h2,
          .darkCopy h2,
          .connectionCopy h2,
          .terminologyIntro h2,
          .governanceCopy h2,
          .reportingCopy h2 { font-size: 30px; }
          .channelGrid,
          .aiHumanGrid,
          .governanceMatrix,
          .industryGrid,
          .whyGrid,
          .relatedGrid { grid-template-columns: 1fr; }
          .channelItem { min-height: 0; padding: 30px 26px; }
          .channelItem h3 { font-size: 21px; }
          .workflowPanel { grid-template-columns: 1fr; }
          .splitGrid { gap: 46px; }
          .knowledgeMockup { padding: 22px; border-radius: 24px; }
          .mockupTop,
          .reportingHeader { flex-direction: column; align-items: flex-start; }
          .mockupStatus { white-space: normal; }
          .publishFlow { grid-template-columns: 1fr; }
          .publishStep { min-height: 70px; }
          .publishStep:not(:last-child)::after { content: "↓"; right: auto; left: 50%; top: auto; bottom: -15px; transform: translateX(-50%); }
          .darkPanel { margin-left: -20px; margin-right: -20px; padding: 58px 20px; border-radius: 0; }
          .darkPanelGrid { gap: 42px; }
          .aiHumanPanel { padding: 30px 24px; }
          .aiHumanPanel h3 { font-size: 23px; }
          .connectionPanel { border-radius: 24px; }
          .connectionCopy { padding: 36px 24px; }
          .connectionItem { padding: 26px 24px; grid-template-columns: 44px minmax(0, 1fr); }
          .processFlow { display: block; border-radius: 20px; }
          .processStep { min-height: 92px; display: grid; grid-template-columns: 42px minmax(0, 1fr); justify-items: start; text-align: left; border-right: 0; border-bottom: 1px solid var(--border); padding: 22px 24px; }
          .processStep:last-child { border-bottom: 0; }
          .terminologyRow { grid-template-columns: 42px minmax(0, 1fr); column-gap: 16px; row-gap: 6px; }
          .terminologyRow h3 { grid-column: 2; }
          .terminologyRow p { grid-column: 2; }
          .liveSupportBand { margin-left: -20px; margin-right: -20px; padding: 56px 20px; border-radius: 0; }
          .liveSupportBand h2 { font-size: 30px; }
          .liveList { grid-template-columns: 1fr; }
          .governanceMatrix { border-left: 1px solid var(--border-dark); }
          .governanceItem { min-height: 0; }
          .reportingPanel { padding: 22px; border-radius: 24px; }
          .reportingStats { grid-template-columns: 1fr; }
          .barChart { gap: 6px; }
          .industryItem { min-height: 0; padding: 30px 26px; }
          .whyItem,
          .whyItem:first-child,
          .whyItem:nth-child(2),
          .whyItem:nth-child(3),
          .whyItem:nth-child(4),
          .whyItem:last-child { margin-top: 0; padding: 30px 0; border-right: 0; border-top: 1px solid var(--border); }
          .whyItem:first-child { border-top: 0; }
          .faqButton { min-height: 72px; padding: 22px 20px; font-size: 17px; }
          .faqPanel { padding: 0 20px 24px; }
          .relatedItem { min-height: 0; padding: 28px 24px; }
          .finalCta { padding-top: 56px; padding-bottom: 72px; }
          .finalCtaPanel { grid-template-columns: 1fr; padding: 52px 24px; border-radius: 24px; }
          .finalCtaCopy h2 { font-size: 32px; }
          .finalCtaVisual { width: 170px; justify-self: center; }
        }

        @media (max-width: 360px) {
          .hero h1 { font-size: 38px; }
          .workflowCell { padding-left: 18px; padding-right: 18px; }
          .workflowCell::before { left: 18px; }
          .articlePreview { padding: 20px; }
          .reportingPanel { padding: 18px; }
          .knowledgeFeature { grid-template-columns: 42px minmax(0, 1fr); }
          .iconSurface { width: 44px; height: 44px; }
          .connectionItem { grid-template-columns: 40px minmax(0, 1fr); }
          .finalCtaCopy h2 { font-size: 30px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <h1>Multilingual Customer Support That Scales With Your Business</h1>
              <p className="heroLead">
                Support customers in the languages they understand best. Stepes combines AI-powered translation, professional human expertise, terminology management, and connected workflows to translate customer conversations, self-service resources, and support content quickly and consistently.
              </p>
              <div className="buttonRow">
                <PrimaryButton href="https://www.stepes.com/contact-us/">Talk to an Expert</PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">
                  Explore Translation Workflows
                </SecondaryButton>
              </div>
            </div>
            <SupportIllustration />
          </div>
        </section>

        <section className="trustStrip" aria-label="Multilingual customer support capabilities">
          <div className="shell trustGrid">
            <div className="trustItem">
              <Icon name="globe" size={25} className="trustIcon" />
              <div><strong>100+ Languages</strong><span>Broad global language coverage</span></div>
            </div>
            <div className="trustItem">
              <Icon name="translate" size={25} className="trustIcon" />
              <div><strong>AI + Human Expertise</strong><span>Flexible quality models</span></div>
            </div>
            <div className="trustItem">
              <Icon name="route" size={25} className="trustIcon" />
              <div><strong>Enterprise Workflows</strong><span>Connected and governed delivery</span></div>
            </div>
            <div className="trustItem">
              <Icon name="shield" size={25} className="trustIcon" />
              <div><strong>ISO-Certified Quality</strong><span>Governed translation processes</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="support-channels">
          <div className="shell">
            <SectionHeader
              eyebrow="Omnichannel Support"
              title="One Multilingual Experience Across Every Support Channel"
              intro="Customers may begin with a help-center article, continue through a chatbot, submit a support ticket, and eventually speak with an agent. Stepes helps maintain clear, consistent language throughout the complete customer journey."
              center
            />
            <div className="channelGrid">
              {channels.map((channel) => (
                <article className="channelItem" key={channel.title}>
                  <div className="iconSurface"><Icon name={channel.icon} /></div>
                  <h3>{channel.title}</h3>
                  <p>{channel.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surfaceSection" id="translation-workflows">
          <div className="shell">
            <SectionHeader
              eyebrow="Flexible Translation Workflows"
              title="The Right Balance of Speed, Quality, and Human Expertise"
              intro="Not every customer interaction requires the same translation process. Stepes helps you apply the appropriate level of AI automation, professional review, subject-matter expertise, and quality control according to urgency, complexity, business impact, and risk."
            />
            <div className="workflowPanel" role="table" aria-label="Recommended multilingual support workflows">
              <div className="workflowRow workflowHeader" role="row">
                <div className="workflowCell" role="columnheader">Support Requirement</div>
                <div className="workflowCell" role="columnheader">Recommended Workflow</div>
                <div className="workflowCell" role="columnheader">Best Fit</div>
              </div>
              {workflowRows.map((row) => (
                <div className="workflowRow" role="row" key={row.need}>
                  <div className="workflowCell" role="cell"><strong>{row.need}</strong></div>
                  <div className="workflowCell" role="cell">{row.workflow}</div>
                  <div className="workflowCell workflowFit" role="cell">{row.fit}</div>
                </div>
              ))}
            </div>
            <div className="sectionAction">
              <ArrowLink href="https://www.stepes.com/solutions/ai-translation-human-review/">
                Explore AI Translation and Human Review
              </ArrowLink>
            </div>
          </div>
        </section>

        <section className="section" id="knowledge-bases">
          <div className="shell splitGrid">
            <div className="splitCopy">
              <Eyebrow>Self-Service Content</Eyebrow>
              <h2>Help Customers Find Answers in Their Own Language</h2>
              <p>
                Well-localized self-service content helps customers resolve issues independently, reduces avoidable support requests, and gives service teams more time to focus on complex cases.
              </p>
              <div className="knowledgeList">
                <div className="knowledgeFeature">
                  <div className="iconSurface"><Icon name="memory" /></div>
                  <div><h3>Reuse Approved Translations</h3><p>Translation memory applies previously approved language across related articles, product updates, and recurring support instructions.</p></div>
                </div>
                <div className="knowledgeFeature">
                  <div className="iconSurface"><Icon name="glossary" /></div>
                  <div><h3>Protect Product Terminology</h3><p>Approved terminology keeps product names, interface labels, error messages, and troubleshooting steps consistent.</p></div>
                </div>
                <div className="knowledgeFeature">
                  <div className="iconSurface"><Icon name="automation" /></div>
                  <div><h3>Localize Updates Efficiently</h3><p>Connected workflows identify new or modified content so unchanged material does not need to be processed again.</p></div>
                </div>
                <div className="knowledgeFeature">
                  <div className="iconSurface"><Icon name="globe" /></div>
                  <div><h3>Improve Multilingual Search</h3><p>Localized titles, metadata, keywords, and article structures help customers find the right answers in each language.</p></div>
                </div>
              </div>
            </div>
            <div className="knowledgeMockup" role="group" aria-label="Illustrative multilingual knowledge-base workflow">
              <div className="mockupTop">
                <div className="mockupTitle">Global Support Knowledge Base</div>
                <div className="mockupStatus">Ready for Localization</div>
              </div>
              <div className="articlePreview">
                <div className="articleLabel">Troubleshooting Article</div>
                <h3>Restore access after a password reset</h3>
                <div className="articleLine" />
                <div className="articleLine" />
                <div className="articleLine short" />
              </div>
              <div className="publishFlow">
                <div className="publishStep">Source Update</div>
                <div className="publishStep">Translation</div>
                <div className="publishStep">Review</div>
                <div className="publishStep">Publish</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionDense darkSection" id="customer-conversations">
          <div className="shell">
            <div className="darkPanel">
              <div className="darkPanelGrid">
                <div className="darkCopy">
                  <Eyebrow dark>Customer Communications</Eyebrow>
                  <h2>Communicate Clearly Throughout the Entire Support Conversation</h2>
                  <p>
                    Customer messages are rarely isolated sentences. Their meaning may depend on previous questions, product details, troubleshooting steps, attached files, and earlier agent responses.
                  </p>
                  <div className="contextQuote">
                    Context matters. Stepes workflows help preserve the surrounding linguistic and operational information needed for clearer multilingual communication.
                  </div>
                </div>
                <div className="featureRows">
                  <div className="featureRow"><Icon name="chat" /><div><h3>Translate Both Sides of the Conversation</h3><p>Translate incoming customer requests for support agents and outgoing responses into the customer’s preferred language.</p></div></div>
                  <div className="featureRow"><Icon name="route" /><div><h3>Maintain Context Across Ticket Threads</h3><p>Keep terminology and meaning consistent as an issue moves across messages, channels, agents, and teams.</p></div></div>
                  <div className="featureRow"><Icon name="translate" /><div><h3>Understand Real Customer Language</h3><p>Handle abbreviations, typing errors, informal wording, incomplete sentences, and product-specific expressions more effectively.</p></div></div>
                  <div className="featureRow"><Icon name="human" /><div><h3>Preserve Tone and Escalate Risk</h3><p>Route ambiguous, technical, regulated, or emotionally sensitive interactions for qualified human review when needed.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="ai-human-support">
          <div className="shell">
            <SectionHeader
              eyebrow="AI + Human"
              title="Scale Support Translation Without Sacrificing Quality"
              intro="High-volume customer support requires speed, but customer trust depends on accuracy and clarity. Stepes combines AI translation with professional human expertise so organizations can scale multilingual service without applying the same process to every interaction."
              center
            />
            <div className="aiHumanGrid">
              <article className="aiHumanPanel">
                <div className="iconSurface"><Icon name="translate" /></div>
                <h3>AI-Powered Speed and Automation</h3>
                <p>Use AI and language technology to accelerate suitable support content and automate repeatable workflow steps.</p>
                <ul className="checkList">
                  {[
                    "Automatic language detection",
                    "Rapid first-pass translation",
                    "Translation memory matching",
                    "Approved terminology enforcement",
                    "Content classification and routing",
                    "Automated linguistic quality checks",
                  ].map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}
                </ul>
              </article>
              <article className="aiHumanPanel">
                <div className="iconSurface"><Icon name="human" /></div>
                <h3>Professional Human Expertise</h3>
                <p>Apply native linguists and subject-matter professionals where accuracy, nuance, tone, and judgment matter most.</p>
                <ul className="checkList">
                  {[
                    "Machine translation post-editing",
                    "Customer-facing language refinement",
                    "Technical terminology validation",
                    "Tone and style adaptation",
                    "Market-specific localization",
                    "Linguistic quality assurance",
                  ].map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}
                </ul>
              </article>
            </div>
            <div className="sectionAction sectionLinks">
              <ArrowLink href="https://www.stepes.com/machine-translation-post-editing/">Machine Translation Post-Editing</ArrowLink>
              <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section surfaceSection" id="connected-workflows">
          <div className="shell">
            <div className="connectionPanel">
              <div className="connectionCopy">
                <Eyebrow>Connected Operations</Eyebrow>
                <h2>Bring Multilingual Translation Into the Tools Your Teams Already Use</h2>
                <p>
                  Add multilingual processing to your existing customer support platforms, enterprise applications, content repositories, and internal workflows through APIs, automation, structured files, and the Stepes translation management portal.
                </p>
                <ArrowLink href="https://www.stepes.com/integrations/">Explore Enterprise Integrations</ArrowLink>
              </div>
              <div className="connectionFeatures">
                <div className="connectionItem">
                  <div className="iconSurface"><Icon name="api" /></div>
                  <div><h3>Translation API</h3><p>Submit content, retrieve translations, automate status updates, and connect recurring support workflows.</p><ArrowLink href="https://www.stepes.com/developers/translation-api/">Translation API</ArrowLink></div>
                </div>
                <div className="connectionItem">
                  <div className="iconSurface"><Icon name="portal" /></div>
                  <div><h3>Translation Management Portal</h3><p>Submit, review, approve, track, and deliver multilingual support projects through one secure workspace.</p><ArrowLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</ArrowLink></div>
                </div>
                <div className="connectionItem">
                  <div className="iconSurface"><Icon name="route" /></div>
                  <div><h3>Workflow Automation</h3><p>Configure routing by language, channel, urgency, content type, and review requirements.</p><ArrowLink href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation</ArrowLink></div>
                </div>
                <div className="connectionItem">
                  <div className="iconSurface"><Icon name="approve" /></div>
                  <div><h3>Reviewer and Approval Workflows</h3><p>Coordinate product experts, regional teams, support managers, and designated approvers.</p><ArrowLink href="https://www.stepes.com/translation-approval-workflows/">User Roles and Approvals</ArrowLink></div>
                </div>
              </div>
            </div>

            <div className="processFlow" aria-label="Connected multilingual customer support workflow">
              <div className="processStep"><Icon name="portal" /><span>Support Platform</span></div>
              <div className="processStep"><Icon name="globe" /><span>Language Detection</span></div>
              <div className="processStep"><Icon name="translate" /><span>AI Translation</span></div>
              <div className="processStep"><Icon name="glossary" /><span>Terminology and Context</span></div>
              <div className="processStep"><Icon name="human" /><span>Human Review When Needed</span></div>
              <div className="processStep"><Icon name="send" /><span>Customer or Agent Delivery</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="terminology-consistency">
          <div className="shell terminologyGrid">
            <div className="terminologyIntro">
              <h2>Use the Right Product Language in Every Market</h2>
              <p>
                Customers should encounter the same product concepts whether they are reading a help article, using an application, reviewing technical documentation, or speaking with a support agent.
              </p>
              <div className="sectionLinks">
                <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
                <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
              </div>
            </div>
            <div className="terminologyRows">
              <div className="terminologyRow"><Icon name="glossary" /><h3>Product Glossaries</h3><p>Define preferred translations for product names, features, services, processes, and technical concepts.</p></div>
              <div className="terminologyRow"><Icon name="lock" /><h3>Do-Not-Translate Lists</h3><p>Protect trademarks, model numbers, commands, code elements, and branded terminology that must remain unchanged.</p></div>
              <div className="terminologyRow"><Icon name="memory" /><h3>Translation Memory</h3><p>Reuse approved language across knowledge bases, product documentation, interfaces, tickets, and recurring communications.</p></div>
              <div className="terminologyRow"><Icon name="style" /><h3>Brand and Style Guidance</h3><p>Apply tone, voice, formality, punctuation, and market-specific language preferences consistently across channels.</p></div>
            </div>
          </div>
        </section>

        <section className="sectionDense">
          <div className="shell">
            <div className="liveSupportBand">
              <div>
                <Eyebrow>Live Language Support</Eyebrow>
                <h2>Support Real-Time Conversations Across Languages</h2>
                <p>Provide language assistance for live customer interactions while your organization retains ownership of the customer relationship, support process, and final resolution.</p>
              </div>
              <div className="liveList">
                {[
                  "Customer service calls",
                  "Product onboarding",
                  "Technical troubleshooting",
                  "Warranty and service discussions",
                  "Account assistance",
                  "Escalated issue resolution",
                  "Scheduled video meetings",
                  "Remote product demonstrations",
                ].map((item) => <div className="liveListItem" key={item}><Icon name="check" size={19} /><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section darkSection" id="quality-security">
          <div className="shell governanceGrid">
            <div className="governanceCopy">
              <Eyebrow dark>Enterprise Control</Eyebrow>
              <h2>Protect Customer Information and Translation Quality</h2>
              <p>
                Customer support conversations may contain personal information, account details, technical data, financial content, medical information, or other confidential material. Stepes supports secure handling, controlled access, professional quality, and operational visibility.
              </p>
              <ArrowLink href="https://www.stepes.com/security/" className="darkEditorialLink">Enterprise Security</ArrowLink>
              <div className="isoStrip" aria-label="Relevant quality certifications">
                <span className="isoChip">ISO 17100</span>
                <span className="isoChip">ISO 9001</span>
                <span className="isoChip">ISO 13485</span>
              </div>
            </div>
            <div className="governanceMatrix">
              <div className="governanceItem"><Icon name="lock" /><h3>Secure Content Handling</h3><p>Manage support content through controlled workflows with access aligned to project roles and operational requirements.</p></div>
              <div className="governanceItem"><Icon name="users" /><h3>Qualified Language Professionals</h3><p>Select linguists according to language, subject matter, content type, and quality requirements.</p></div>
              <div className="governanceItem"><Icon name="check" /><h3>Terminology and Quality Controls</h3><p>Combine translation memory, glossaries, automated checks, professional review, and customer approvals.</p></div>
              <div className="governanceItem"><Icon name="approve" /><h3>Workflow Governance</h3><p>Define who may submit, translate, review, approve, access, and release multilingual support content.</p></div>
            </div>
          </div>
        </section>

        <section className="section surfaceSection" id="reporting-analytics">
          <div className="shell reportingGrid">
            <div className="reportingCopy">
              <Eyebrow>Performance Visibility</Eyebrow>
              <h2>Understand and Improve Your Multilingual Support Program</h2>
              <p>
                Manage multilingual customer support as an ongoing business operation with visibility into translation activity, workflow performance, language demand, technology utilization, quality, and program trends.
              </p>
              <ArrowLink href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics</ArrowLink>
            </div>
            <div className="reportingPanel" role="group" aria-label="Illustrative multilingual support reporting dashboard">
              <div className="reportingHeader">
                <strong>Customer Support Language Program</strong>
                <span>Multilingual program view</span>
              </div>
              <div className="reportingStats">
                <div className="reportingStat"><strong>By Language</strong><span>Translation volume visibility</span></div>
                <div className="reportingStat"><strong>Workflow Status</strong><span>Turnaround and delivery tracking</span></div>
                <div className="reportingStat"><strong>Language Assets</strong><span>Translation memory insights</span></div>
              </div>
              <div className="reportingChartLabel">Translation volume by language</div>
              <div className="barChart" aria-hidden="true">
                {[58, 82, 69, 104, 92, 124, 108].map((height, index) => (
                  <div className="barGroup" key={height + index}>
                    <div className={`bar ${index === 5 ? "magenta" : ""}`} style={{ height }} />
                    <span className="barLabel">{["ES", "FR", "DE", "JA", "PT", "ZH", "KO"][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="industry-use-cases">
          <div className="shell">
            <SectionHeader
              title="Multilingual Support for Every Customer Experience"
              intro="Stepes supports customer service operations across regulated industries, technical sectors, consumer businesses, and digital products with workflows adapted to the content and business context."
            />
            <div className="industryGrid">
              {industries.map((industry) => (
                <article className="industryItem" key={industry.title}>
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                  <ArrowLink href={industry.url}>Explore {industry.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionDense blushSection">
          <div className="shell">
            <SectionHeader title="Why Global Teams Choose Stepes" />
            <div className="whyGrid">
              <article className="whyItem"><Icon name="route" /><h3>Flexible Quality Models</h3><p>Choose AI translation, AI with professional review, or specialist human translation according to the interaction.</p></article>
              <article className="whyItem"><Icon name="api" /><h3>Enterprise Language Technology</h3><p>Use APIs, translation memory, terminology, automation, and reporting to scale recurring support operations.</p></article>
              <article className="whyItem"><Icon name="human" /><h3>Professional Linguistic Expertise</h3><p>Access native linguists and subject-matter professionals for technical, sensitive, and high-impact content.</p></article>
              <article className="whyItem"><Icon name="globe" /><h3>Omnichannel Global Coverage</h3><p>Support help centers, tickets, chat, chatbots, applications, documents, multimedia, voice, and video in 100+ languages.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="shell">
            <SectionHeader
              title="Multilingual Customer Support FAQs"
              intro="Answers to common questions about customer support translation, knowledge-base localization, AI workflows, human review, terminology, and system connectivity."
            />
            <div className="faqPanelWrap">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  index={index}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section surfaceSection" id="related-solutions">
          <div className="shell">
            <SectionHeader
              title="Build a Connected Multilingual Content Operation"
              intro="Connect customer support with the enterprise workflows, language assets, technology, governance, and reporting that support multilingual content at scale."
            />
            <div className="relatedGrid">
              {relatedSolutions.map((item) => (
                <article className="relatedItem" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowLink href={item.url}>Explore {item.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="shell">
            <div className="finalCtaPanel">
              <div className="finalCtaCopy">
                <h2>Deliver Better Support to Customers Everywhere</h2>
                <p>
                  Talk with Stepes about your support channels, content volumes, target languages, response requirements, quality expectations, and integration needs.
                </p>
                <div className="buttonRow">
                  <PrimaryButton href="https://www.stepes.com/contact-us/">Talk to an Expert</PrimaryButton>
                  <SecondaryButton href="https://www.stepes.com/contact-sales/">Request a Translation Quote</SecondaryButton>
                </div>
              </div>
              <div className="finalCtaVisual" aria-hidden="true">
                <svg viewBox="0 0 260 210" role="presentation">
                  <rect x="18" y="24" width="174" height="124" rx="25" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" />
                  <path d="M54 148 32 178l49-30" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" strokeLinejoin="round" />
                  <rect x="47" y="53" width="111" height="13" rx="6.5" fill="#C11D63" opacity=".72" />
                  <rect x="47" y="82" width="126" height="10" rx="5" fill="#C8CFDA" />
                  <rect x="47" y="106" width="92" height="10" rx="5" fill="#D8DDE6" />
                  <circle cx="199" cy="134" r="48" fill="#FFFFFF" stroke="#C8CFDA" strokeWidth="2" />
                  <circle cx="199" cy="134" r="31" fill="none" stroke="#9A6A80" strokeWidth="2" />
                  <path d="M168 134h62M174 118c15 7 35 7 50 0M174 150c15-7 35-7 50 0" fill="none" stroke="#9A6A80" strokeWidth="2" strokeLinecap="round" />
                  <path d="M199 103c10 9 16 19 16 31s-6 22-16 31M199 103c-10 9-16 19-16 31s6 22 16 31" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
