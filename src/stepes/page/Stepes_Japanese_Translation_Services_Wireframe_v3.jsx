import React, { useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8E5EE",
  lightMagenta: "#F2A7C6",
  ink: "#17171A",
  text: "#34343A",
  muted: "#6D6D73",
  line: "#E6E6E9",
  soft: "#F7F7F8",
  white: "#FFFFFF",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  technical: "https://www.stepes.com/technical-translation-services/",
  japaneseTechnical: "https://www.stepes.com/japanese-technical-translation-services/",
  japaneseMedical: "https://www.stepes.com/japanese-medical-translation-services/",
  japanesePatent: "https://www.stepes.com/japanese-patent-translation-services/",
  patent: "https://www.stepes.com/patent-translation-services/",
  automotive: "https://www.stepes.com/automotive-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  electronics: "https://www.stepes.com/electronics-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  app: "https://www.stepes.com/app-localization-services/",
  website: "https://www.stepes.com/website-translation-services/",
  game: "https://www.stepes.com/video-game-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  document: "https://www.stepes.com/document-translation-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  portal: "https://www.stepes.com/translation-management-portal/",
  reporting: "https://www.stepes.com/translation-reporting-analytics/",
  ai: "https://www.stepes.com/ai-machine-learning-translation-services/",
  api: "https://www.stepes.com/developers/translation-api/",
  sop: "https://www.stepes.com/sop-translation-services/",
  workInstructions: "https://www.stepes.com/work-instruction-translation-services/",
};

function Icon({ name, size = 24 }) {
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
    focusable: false,
  };

  const glyphs = {
    exchange: (
      <>
        <path d="M4 7h13" />
        <path d="m14 4 3 3-3 3" />
        <path d="M20 17H7" />
        <path d="m10 14-3 3 3 3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21" />
        <path d="M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    heart: (
      <>
        <path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" />
        <path d="M8.5 12h2l1-2.2 1.6 4.4 1.1-2.2H16" />
      </>
    ),
    car: (
      <>
        <path d="m5 15 1.6-5A2 2 0 0 1 8.5 8.5h7A2 2 0 0 1 17.4 10l1.6 5" />
        <path d="M4 15h16v3a1 1 0 0 1-1 1h-1v-2H6v2H5a1 1 0 0 1-1-1v-3Z" />
        <path d="M7.5 14h.01M16.5 14h.01" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V10l6 3V9l6 3V6h3v15H3Z" />
        <path d="M6 17h2M11 17h2M16 17h2" />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </>
    ),
    patent: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <circle cx="11" cy="13" r="2.5" />
        <path d="m9.5 15 1.5 3 1.5-3" />
      </>
    ),
    code: (
      <>
        <path d="m9 7-5 5 5 5" />
        <path d="m15 7 5 5-5 5" />
        <path d="m13 5-2 14" />
      </>
    ),
    game: (
      <>
        <path d="M7 9h10a4 4 0 0 1 3.8 5.3l-1 3a2 2 0 0 1-3.3.8L14.8 16H9.2l-1.7 2.1a2 2 0 0 1-3.3-.8l-1-3A4 4 0 0 1 7 9Z" />
        <path d="M7 12v3M5.5 13.5h3M16.5 12.7h.01M18 14.2h.01" />
      </>
    ),
    scales: (
      <>
        <path d="M12 3v18M5 6h14M7 6l-3 7h6L7 6ZM17 6l-3 7h6l-3-7Z" />
        <path d="M8 21h8" />
      </>
    ),
    bank: (
      <>
        <path d="m3 9 9-5 9 5" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 5a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 5 14a3 3 0 0 0 4.5 3" />
        <path d="M14.5 5a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 19 14a3 3 0 0 1-4.5 3" />
        <path d="M9.5 5v14M14.5 5v14M9.5 9H7M14.5 9H17M9.5 14H7M14.5 14H17" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    term: (
      <>
        <path d="M4 5h8M8 5v14M5 19h6" />
        <path d="M14 8h6M17 8c0 5-2 8-4 10M16 13c1.1 2 2.6 3.5 4 5" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),
    media: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m15 8 4 4-4 4" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    minus: <path d="M5 12h14" />,
  };

  return <svg {...common}>{glyphs[name] || glyphs.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrowDark" : ""}`}>{children}</div>;
}

function ArrowLink({ href, children, onDark = false }) {
  return (
    <a className={`arrowLink${onDark ? " arrowLinkDark" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function CTA({ href, children, secondary = false }) {
  return (
    <a className={`cta ${secondary ? "ctaSecondary" : "ctaPrimary"}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, center = false, dark = false, keepLeft = false }) {
  return (
    <div className={`sectionHead ${center ? "sectionHeadCenter" : ""} ${keepLeft ? "keepLeftMobile" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className={dark ? "onDarkMuted" : "intro"}>{intro}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-label="Illustration of Japanese and English enterprise content translation">
      <div className="heroGlow" />
      <div className="heroDoc heroDocLeft">
        <div className="docTop">
          <span className="docTag">JA</span>
          <span className="docMeta">TECHNICAL CONTENT</span>
        </div>
        <div className="jpTitle">製品仕様書</div>
        <div className="docLine w90" />
        <div className="docLine w70" />
        <div className="docLine w82" />
        <div className="docGrid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="translationBridge">
        <div className="bridgeRing"><Icon name="exchange" size={28} /></div>
        <span>日本語 ↔ ENGLISH</span>
      </div>

      <div className="heroDoc heroDocRight">
        <div className="docTop">
          <span className="docTag">EN</span>
          <span className="docMeta">GLOBAL READY</span>
        </div>
        <div className="enTitle">Product Specification</div>
        <div className="docLine w82" />
        <div className="docLine w93" />
        <div className="docLine w68" />
        <div className="qaStrip">
          <Icon name="shield" size={18} />
          <span>Terminology + QA</span>
        </div>
      </div>

      <div className="orbit orbitOne" />
      <div className="orbit orbitTwo" />
    </div>
  );
}

const trustItems = [
  { icon: "exchange", title: "English ↔ Japanese", text: "Professional translation in both directions" },
  { icon: "globe", title: "100+ Languages", text: "Scale Japanese programs across global markets" },
  { icon: "briefcase", title: "Subject-Matter Expertise", text: "Technical, medical, IP, software, and business content" },
  { icon: "shield", title: "ISO-Certified Quality", text: "ISO 17100, ISO 9001, and ISO 13485 quality processes" },
];

const industries = [
  {
    icon: "heart",
    title: "Life Sciences & Medical Devices",
    text: "Regulated and scientific translation for medical devices, pharmaceuticals, biotechnology, clinical research, and healthcare content.",
    href: links.japaneseMedical,
    link: "Japanese Medical Translation Services",
  },
  {
    icon: "car",
    title: "Automotive & Mobility",
    text: "Engineering documentation, vehicle software, EV systems, ADAS, diagnostics, service content, training, and supplier communications.",
    href: links.automotive,
    link: "Automotive Translation Services",
  },
  {
    icon: "factory",
    title: "Advanced Manufacturing & Robotics",
    text: "Machinery, automation, work instructions, SOPs, quality documentation, safety content, and industrial technology for global operations.",
    href: links.manufacturing,
    link: "Manufacturing Translation Services",
  },
  {
    icon: "chip",
    title: "Electronics & Semiconductors",
    text: "Semiconductor, component, hardware, embedded software, technical specification, product, and compliance translation.",
    href: links.electronics,
    link: "Electronics Translation Services",
  },
  {
    icon: "patent",
    title: "Patents & Intellectual Property",
    text: "Patent applications, claims, prior art, office actions, litigation materials, licensing documents, and technical evidence.",
    href: links.japanesePatent,
    link: "Japanese Patent Translation Services",
  },
  {
    icon: "code",
    title: "Software & Digital Technology",
    text: "SaaS, enterprise software, apps, websites, knowledge bases, developer content, cloud platforms, cybersecurity, and AI interfaces.",
    href: links.software,
    link: "Software Localization Services",
  },
];

const qaSteps = [
  ["Content Analysis", "We assess language direction, subject matter, target audience, file format, existing language assets, and the required quality level."],
  ["Linguist Selection", "Japanese translators are matched to the content based on language direction and relevant subject-matter experience."],
  ["Terminology Preparation", "Glossaries, translation memories, style guidance, client references, and previous approved translations are incorporated."],
  ["Translation", "Content is translated using the appropriate combination of professional human translation, AI-assisted workflows, translation memory, and terminology support."],
  ["Review & Automated QA", "Linguistic review, subject-matter review, and automated checks address meaning, terminology, numbers, omissions, tags, and consistency."],
  ["In-Context Validation", "Websites, software, apps, PDFs, and presentations can be reviewed in their final environment to identify linguistic and layout issues."],
  ["Delivery & Reuse", "Final files are delivered in the required format while approved translations and terminology can be retained for future updates."],
];

const faqItems = [
  {
    q: "Do You Provide Both English-to-Japanese and Japanese-to-English Translation?",
    a: "Yes. Stepes provides professional translation in both directions. We help international companies translate product, technical, medical, software, website, business, and marketing content into Japanese, while helping Japanese organizations translate patents, engineering documentation, corporate materials, research, financial content, regulatory documents, and other materials into English.",
  },
  {
    q: "How Do You Select Japanese Translators?",
    a: "Japanese translators are selected according to language direction, subject matter, content type, target audience, and project requirements. A translator experienced in consumer marketing may not be the right choice for an automotive service manual or pharmaceutical document, so Stepes matches linguistic expertise with relevant domain knowledge whenever specialized content is involved.",
  },
  {
    q: "What Types of Japanese Documents Can Stepes Translate?",
    a: "Stepes translates technical manuals, contracts, financial reports, patents, IFUs, clinical documents, engineering specifications, SOPs, work instructions, product catalogs, presentations, training materials, marketing content, websites, software, apps, and many other professional content types. We also support multilingual formatting, structured files, digital content, multimedia, and recurring enterprise localization programs.",
  },
  {
    q: "How Do You Maintain Consistent Japanese Technical Terminology?",
    a: "We use client-approved glossaries, terminology databases, translation memory, style requirements, previous translations, and automated QA to help maintain consistency. For ongoing programs, these resources become reusable language assets that preserve preferred Japanese terminology across documentation, software, websites, training, and future product releases.",
  },
  {
    q: "Do You Provide Japanese Medical Translation?",
    a: "Yes. Stepes provides Japanese translation for medical devices, pharmaceuticals, biotechnology, healthcare, and clinical research. Content can include IFUs, device manuals, labeling, regulatory documentation, clinical materials, patient content, pharmaceutical documentation, medical software, training, and scientific materials.",
  },
  {
    q: "Can Stepes Translate Japanese Patents?",
    a: "Yes. Stepes provides Japanese-to-English and English-to-Japanese patent translation across technical fields including electronics, semiconductors, software, AI, automotive, engineering, pharmaceuticals, biotechnology, medical devices, chemicals, and materials. We translate patent applications, claims, specifications, abstracts, prior art, office actions, litigation materials, and other IP-related documents.",
  },
  {
    q: "Do You Provide Japanese Software, Website, and App Localization?",
    a: "Yes. Stepes localizes Japanese software interfaces, SaaS platforms, mobile apps, websites, help centers, knowledge bases, release notes, developer documentation, and other digital content. Localization workflows can incorporate translation memory, terminology management, continuous localization, APIs, in-context linguistic review, and quality assurance.",
  },
  {
    q: "Can AI Be Used for Japanese Translation?",
    a: "Yes, when it is appropriate for the content and required quality level. AI and machine translation can improve speed and scalability for suitable material, while professional Japanese linguists provide the contextual judgment and subject expertise needed for higher-impact content. Stepes matches the workflow to the intended use rather than applying the same level of automation to every project.",
  },
  {
    q: "How Do You Quality-Check Japanese Translations?",
    a: "Quality control can include translator qualification, terminology management, translation memory, linguistic review, subject-matter review, automated QA, and in-context validation. The appropriate workflow depends on the content, audience, quality expectations, and potential impact of an error.",
  },
  {
    q: "Can Stepes Support Ongoing Japanese Translation Programs?",
    a: "Yes. Stepes supports recurring and continuous translation programs for companies that regularly update software, websites, product documentation, technical content, regulatory materials, training, and other multilingual assets. Centralized translation memory, terminology, automation, APIs, project tracking, and managed services help organizations scale beyond isolated projects.",
  },
  {
    q: "How Much Does Professional Japanese Translation Cost?",
    a: "Japanese translation pricing depends on language direction, word volume, subject matter, file format, turnaround, repetition, existing translation memory, quality workflow, formatting needs, and whether specialized review is required. Upload your files for a project-specific quote, or speak with our team about pricing for an ongoing enterprise program.",
  },
  {
    q: "How Quickly Can Japanese Translation Projects Be Completed?",
    a: "Turnaround depends on project size, content complexity, language direction, workflow, formatting requirements, and required review level. Stepes uses translation technology, reusable language assets, workflow automation, and scalable linguistic resources to accelerate delivery while applying the quality controls appropriate to the content.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faqPanel">
      {faqItems.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className="faqItem" key={item.q}>
            <button
              className="faqQuestion"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faqIcon" aria-hidden="true"><Icon name={isOpen ? "minus" : "plus"} size={20} /></span>
            </button>
            <div
              className={`faqAnswer ${isOpen ? "faqAnswerOpen" : ""}`}
              id={`faq-answer-${index}`}
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function JapaneseTranslationServicesWireframe() {
  return (
    <main className="page">
      <style>{`
        :root {
          --magenta: ${BRAND.magenta};
          --magenta-dark: ${BRAND.magentaDark};
          --burgundy: ${BRAND.burgundy};
          --blush: ${BRAND.blush};
          --blush-strong: ${BRAND.blushStrong};
          --light-magenta: ${BRAND.lightMagenta};
          --ink: ${BRAND.ink};
          --text: ${BRAND.text};
          --muted: ${BRAND.muted};
          --line: ${BRAND.line};
          --soft: ${BRAND.soft};
          --white: ${BRAND.white};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .page {
          width: 100%;
          overflow-x: hidden;
          background: var(--white);
          color: var(--text);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        section { padding: 96px 0; position: relative; }
        .dense { padding-top: 80px; padding-bottom: 80px; }
        h1, h2, h3 { margin: 0; color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.06; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.14; }
        h3 { font-size: 24px; line-height: 1.25; }
        p { margin: 0; font-size: 16px; line-height: 1.72; }
        a { color: inherit; }
        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrowDark { color: var(--light-magenta); }
        .sectionHead { max-width: 820px; margin-bottom: 44px; }
        .sectionHead h2 { max-width: 760px; }
        .sectionHead .intro, .sectionHead .onDarkMuted { margin-top: 18px; max-width: 800px; font-size: 18px; line-height: 1.65; }
        .sectionHeadCenter { text-align: center; margin-left: auto; margin-right: auto; }
        .sectionHeadCenter h2, .sectionHeadCenter .intro, .sectionHeadCenter .onDarkMuted { margin-left: auto; margin-right: auto; }
        .intro { color: #56565C; }
        .onDarkMuted { color: #D7D4D6; }
        .muted { color: var(--muted); }

        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .cta {
          min-height: 48px;
          padding: 12px 21px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.2;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
          outline: none;
        }
        .ctaPrimary,
        .ctaPrimary:link,
        .ctaPrimary:visited,
        .ctaPrimary:hover,
        .ctaPrimary:active,
        .ctaPrimary:focus,
        .ctaPrimary:focus-visible {
          color: #fff !important;
        }
        .ctaPrimary *, .ctaPrimary svg { color: #fff !important; stroke: #fff !important; }
        .ctaPrimary { background: var(--magenta); border: 1px solid var(--magenta); box-shadow: 0 8px 24px rgba(193,29,99,.16); }
        .ctaPrimary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .ctaSecondary { background: #fff; border: 1px solid #D9D9DE; color: var(--ink); }
        .ctaSecondary:hover { border-color: #BFBFC5; transform: translateY(-1px); }
        .cta:focus-visible, .arrowLink:focus-visible, .faqQuestion:focus-visible { box-shadow: 0 0 0 3px rgba(193,29,99,.22); }

        .arrowLink {
          color: var(--magenta);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 600;
          width: fit-content;
          min-height: 44px;
        }
        .arrowLink svg { transition: transform .16s ease; }
        .arrowLink:hover svg { transform: translateX(3px); }
        .arrowLinkDark { color: #fff; }

        /* Hero */
        .hero { padding: 104px 0 92px; background: #fff; }
        .heroGrid { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(440px,.98fr); gap: 58px; align-items: center; }
        .heroCopy { max-width: 720px; }
        .heroCopy h1 { max-width: 680px; }
        .heroPositioning { margin-top:18px; max-width:680px; color:var(--magenta); font-size:20px; line-height:1.4; font-weight:600; letter-spacing:-.015em; }
        .heroLead { margin-top: 18px; max-width: 700px; color: #4D4D53; font-size: 18px; line-height: 1.72; }
        .hero .ctaRow { margin-top: 32px; }
        .heroMini { margin-top: 24px; display: flex; align-items: center; gap: 9px; color: #64646B; font-size: 16px; }
        .heroMini svg { color: var(--magenta); flex: 0 0 auto; }

        .heroVisual {
          min-height: 420px;
          position: relative;
          border-radius: 30px;
          background: linear-gradient(145deg, #FBFBFC 0%, #F7F7F8 72%, #FDF2F7 100%);
          border: 1px solid #E8E8EB;
          overflow: hidden;
          box-shadow: 0 22px 60px rgba(22,22,26,.08);
        }
        .heroGlow { position:absolute; right:-90px; top:-100px; width:260px; height:260px; border-radius:50%; background:rgba(193,29,99,.07); }
        .heroDoc { position:absolute; width:46%; min-width:210px; padding:24px; border-radius:22px; background:#fff; border:1px solid #DEDEE2; box-shadow:0 14px 36px rgba(20,20,24,.08); }
        .heroDocLeft { left:28px; top:66px; transform:rotate(-2deg); }
        .heroDocRight { right:28px; bottom:55px; transform:rotate(2deg); }
        .docTop { display:flex; justify-content:space-between; gap:10px; align-items:center; margin-bottom:22px; }
        .docTag { width:32px; height:32px; border-radius:10px; display:grid; place-items:center; background:var(--blush); color:var(--magenta); font-size:11px; font-weight:600; }
        .docMeta { color:#77777E; font-size:10px; font-weight:600; letter-spacing:.09em; }
        .jpTitle, .enTitle { font-weight:600; color:#29292E; margin-bottom:16px; }
        .jpTitle { font-size:22px; letter-spacing:.04em; }
        .enTitle { font-size:18px; }
        .docLine { height:8px; border-radius:99px; background:#DDDEE2; margin:10px 0; }
        .w90 { width:90%; } .w70 { width:70%; } .w82 { width:82%; } .w93 { width:93%; } .w68 { width:68%; }
        .docGrid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:20px; }
        .docGrid span { height:34px; border-radius:9px; background:#F0F0F2; }
        .qaStrip { display:flex; gap:8px; align-items:center; margin-top:20px; padding:10px 12px; background:var(--blush); border-radius:12px; color:var(--magenta); font-size:12px; font-weight:600; }
        .translationBridge { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); z-index:5; display:flex; flex-direction:column; align-items:center; gap:9px; color:#5A5A61; font-size:11px; font-weight:600; letter-spacing:.07em; white-space:nowrap; }
        .bridgeRing { width:64px; height:64px; border-radius:50%; display:grid; place-items:center; background:var(--magenta); color:#fff; border:8px solid #fff; box-shadow:0 10px 26px rgba(193,29,99,.24); }
        .bridgeRing svg { stroke:#fff; }
        .orbit { position:absolute; border:1px solid rgba(193,29,99,.19); border-radius:50%; }
        .orbitOne { width:160px; height:160px; right:-45px; bottom:-56px; }
        .orbitTwo { width:96px; height:96px; right:-15px; bottom:-22px; }

        /* Trust band */
        .trustBand { padding: 0; background:#fff; }
        .trustInner { border-top:1px solid var(--line); border-bottom:1px solid var(--line); display:grid; grid-template-columns:repeat(4,1fr); column-gap:34px; }
        .trustItem { padding:26px 0; min-height:142px; display:grid; grid-template-columns:28px 1fr; gap:13px; align-content:start; }
        .trustIcon { color:var(--magenta); padding-top:2px; }
        .trustItem h3 { font-size:17px; line-height:1.35; letter-spacing:-.01em; }
        .trustItem p { margin-top:7px; color:#6A6A70; font-size:16px; line-height:1.5; }

        /* Overview */
        .overviewGrid { display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:72px; align-items:start; }
        .overviewCopy p + p { margin-top:18px; }
        .statPanel { border-radius:28px; background:var(--soft); border:1px solid #E8E8EB; overflow:hidden; }
        .statGrid { display:grid; grid-template-columns:1fr 1fr; }
        .stat { min-height:184px; padding:30px; }
        .stat:nth-child(odd) { border-right:1px solid var(--line); }
        .stat:nth-child(-n+2) { border-bottom:1px solid var(--line); }
        .statValue { font-size:38px; font-weight:600; letter-spacing:-.035em; color:var(--ink); line-height:1; }
        .statLabel { margin-top:12px; font-size:16px; line-height:1.5; color:#5E5E65; }
        .sourceNote { margin-top:16px; color:#77777E; font-size:14px; line-height:1.5; }

        /* Direction */
        .softSection { background:var(--soft); }
        .directionGrid { display:grid; grid-template-columns:1fr 1fr; border-top:1px solid #DCDCE0; border-bottom:1px solid #DCDCE0; }
        .directionCol { padding:34px 46px 38px 0; }
        .directionCol + .directionCol { border-left:1px solid #DCDCE0; padding-left:46px; padding-right:0; }
        .directionTitle { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .directionTitle .langPill { font-size:11px; font-weight:600; color:var(--magenta); background:var(--blush); padding:6px 9px; border-radius:999px; letter-spacing:.05em; }
        .directionCol p { color:#58585E; }
        .plainList { display:grid; grid-template-columns:1fr 1fr; gap:8px 24px; list-style:none; padding:0; margin:22px 0 0; }
        .plainList li { position:relative; padding-left:17px; font-size:16px; color:#44444A; }
        .plainList li::before { content:""; position:absolute; left:0; top:.75em; width:6px; height:6px; border-radius:50%; background:var(--magenta); transform:translateY(-50%); }

        /* Japanese complexity */
        .darkSection { background:#1D1B1E; color:#fff; }
        .darkSection h2, .darkSection h3 { color:#fff; }
        .complexGrid { display:grid; grid-template-columns:.72fr 1.28fr; gap:70px; align-items:start; }
        .complexIntro { color:#D8D5D8; font-size:18px; line-height:1.7; }
        .complexRows { border-top:1px solid #464147; }
        .complexRow { display:grid; grid-template-columns:220px 1fr; gap:30px; padding:26px 0; border-bottom:1px solid #464147; }
        .complexRow h3 { font-size:19px; line-height:1.4; padding-top:2px; }
        .complexRow p { color:#D2CED2; }

        /* Industries */
        .industryGrid { display:grid; grid-template-columns:repeat(3,1fr); gap:0 38px; border-top:1px solid var(--line); }
        .industryItem { min-height:270px; padding:30px 0; border-bottom:1px solid var(--line); background:#fff; display:flex; flex-direction:column; }
        .industryIcon { color:var(--magenta); margin-bottom:22px; }
        .industryItem h3 { font-size:20px; }
        .industryItem p { margin-top:13px; color:#5E5E64; flex:1; }
        .industryItem .arrowLink { margin-top:18px; }

        /* Deep expertise sections */
        .editorialGrid { display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); gap:74px; align-items:start; }
        .editorialAside { position:sticky; top:28px; }
        .editorialAside .sectionHead { margin-bottom:24px; }
        .editorialMain { border-top:1px solid var(--line); }
        .editorialBlock { padding:28px 0; border-bottom:1px solid var(--line); }
        .editorialBlock h3 { font-size:21px; margin-bottom:12px; }
        .editorialBlock p { color:#56565D; }
        .editorialBlock .arrowLink { margin-top:14px; }
        .contentTags { display:flex; flex-wrap:wrap; gap:9px; margin-top:20px; }
        .contentTag { font-size:16px; color:#55555B; padding:8px 11px; border:1px solid #DEDEE2; border-radius:999px; background:#fff; }
        .blushPanel { background:var(--blush); }
        .accentBox { border-radius:28px; background:#fff; border:1px solid #E5D8DE; padding:34px; }
        .accentBox h3 { font-size:21px; }
        .accentBox p { margin-top:13px; color:#57575D; }
        .accentBox .arrowLink { margin-top:16px; }

        /* Digital */
        .digitalGrid { display:grid; grid-template-columns:1.03fr .97fr; gap:54px; align-items:center; }
        .digitalCopy p + p { margin-top:18px; }
        .uiMock { border:1px solid #E0E0E4; border-radius:28px; background:#fff; box-shadow:0 18px 50px rgba(20,20,24,.07); overflow:hidden; }
        .uiTop { height:48px; display:flex; align-items:center; justify-content:space-between; padding:0 18px; border-bottom:1px solid var(--line); background:#FAFAFB; }
        .uiDots { display:flex; gap:6px; }
        .uiDots span { width:8px; height:8px; border-radius:50%; background:#D0D0D5; }
        .uiTopLabel { font-size:11px; font-weight:600; letter-spacing:.08em; color:#73737A; }
        .uiBody { display:grid; grid-template-columns:118px 1fr; min-height:322px; }
        .uiSide { border-right:1px solid var(--line); padding:18px 14px; background:#FCFCFD; }
        .uiNav { height:10px; background:#E3E3E6; border-radius:99px; margin-bottom:12px; }
        .uiNav.active { background:var(--magenta); width:72%; }
        .uiWork { padding:24px; }
        .uiRow { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px; }
        .uiCell { border:1px solid #E5E5E8; border-radius:14px; padding:14px; min-height:86px; }
        .uiCellLabel { font-size:11px; font-weight:600; color:#808087; letter-spacing:.07em; margin-bottom:8px; }
        .uiText { height:9px; background:#D8D8DC; border-radius:99px; margin-bottom:8px; }
        .uiText.short { width:68%; }
        .uiCell.ja .uiText { background:#C7C7CC; }
        .uiStatus { margin-top:17px; display:flex; align-items:center; gap:8px; color:#5D5D63; font-size:14px; }
        .uiStatus svg { color:var(--magenta); }
        .digitalLinks { display:flex; flex-wrap:wrap; gap:18px 26px; margin-top:24px; }

        /* Game */
        .gameBand { padding:72px 0; }
        .gameInner { display:grid; grid-template-columns:86px 1fr auto; gap:30px; align-items:center; padding:36px 40px; border-radius:28px; border:1px solid #E2E2E6; background:#fff; }
        .gameIcon { width:72px; height:72px; border-radius:22px; display:grid; place-items:center; background:var(--blush); color:var(--magenta); }
        .gameInner p { margin-top:8px; color:#5D5D63; max-width:760px; }

        /* Corporate */
        .threeCols { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--line); }
        .proCol { padding:30px 34px 0 0; }
        .proCol + .proCol { border-left:1px solid var(--line); padding-left:34px; }
        .proIcon { color:var(--magenta); margin-bottom:20px; }
        .proCol p { margin-top:12px; color:#5D5D63; }
        .proList { list-style:none; padding:0; margin:18px 0 0; }
        .proList li { padding:8px 0; border-bottom:1px solid #EFEFF1; font-size:16px; }
        .proCol .arrowLink { margin-top:18px; }

        /* AI */
        .aiGrid { display:grid; grid-template-columns:.82fr 1.18fr; gap:66px; align-items:start; }
        .aiIntro p { color:#D6D2D6; font-size:17px; }
        .aiIntro p + p { margin-top:18px; }
        .aiStack { border-top:1px solid #49434A; }
        .aiLayer { display:grid; grid-template-columns:46px 175px 1fr; gap:18px; align-items:start; padding:20px 0; border-bottom:1px solid #49434A; }
        .aiLayerIcon { color:var(--light-magenta); padding-top:2px; }
        .aiLayer h3 { font-size:17px; letter-spacing:-.01em; }
        .aiLayer p { color:#D4D0D4; font-size:16px; }
        .aiNote { margin-top:25px; padding:18px 20px; border-left:3px solid var(--magenta); background:#282429; color:#E3DFE2; }
        .aiNote strong { color:#fff; font-weight:600; }

        /* QA process */
        .processList { counter-reset: qa; border-top:1px solid var(--line); }
        .processRow { counter-increment:qa; display:grid; grid-template-columns:74px 250px 1fr; gap:28px; padding:24px 0; border-bottom:1px solid var(--line); align-items:start; }
        .processNum { width:42px; height:42px; border-radius:50%; display:grid; place-items:center; border:1px solid #DCDCE0; color:var(--magenta); font-size:14px; font-weight:600; }
        .processNum::before { content: counter(qa, decimal-leading-zero); }
        .processRow h3 { font-size:18px; padding-top:7px; }
        .processRow p { color:#59595F; }

        /* Terminology */
        .termGrid { display:grid; grid-template-columns:.95fr 1.05fr; gap:64px; align-items:start; }
        .termCopy p + p { margin-top:18px; }
        .termPanel { border-radius:28px; border:1px solid #E7DDE2; background:#fff; overflow:hidden; }
        .termRow { display:grid; grid-template-columns:36px 170px 1fr; gap:16px; padding:20px 24px; border-bottom:1px solid #EFE6EA; align-items:start; }
        .termRow:last-child { border-bottom:0; }
        .termRow svg { color:var(--magenta); margin-top:1px; }
        .termRow strong { color:var(--ink); font-weight:600; }
        .termRow span { color:#626268; font-size:16px; }
        .termLinks { margin-top:22px; display:flex; gap:22px; flex-wrap:wrap; }

        /* Scale */
        .scaleGrid { display:grid; grid-template-columns:1fr 1fr; gap:22px 54px; }
        .scaleItem { padding:22px 0; border-top:1px solid var(--line); }
        .scaleTitle { display:flex; gap:12px; align-items:center; }
        .scaleTitle svg { color:var(--magenta); }
        .scaleItem h3 { font-size:19px; }
        .scaleItem p { margin-top:10px; color:#5D5D63; }

        /* Content types */
        .contentTypeGrid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .contentType { border-radius:24px; border:1px solid var(--line); padding:28px; background:#fff; }
        .contentTypeIcon { color:var(--magenta); margin-bottom:19px; }
        .contentType p { color:#626268; margin-top:12px; }
        .typeList { list-style:none; padding:0; margin:18px 0 0; }
        .typeList li { padding:7px 0; font-size:16px; border-bottom:1px solid #F0F0F2; }

        /* Why Stepes */
        .whyGrid { display:grid; grid-template-columns:1fr 1fr; gap:0 54px; border-top:1px solid var(--line); }
        .whyItem { display:grid; grid-template-columns:34px 1fr; gap:16px; padding:25px 0; border-bottom:1px solid var(--line); }
        .whyItem svg { color:var(--magenta); margin-top:2px; }
        .whyItem h3 { font-size:18px; }
        .whyItem p { margin-top:7px; color:#5D5D63; }

        /* Related */
        .relatedGrid { display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--line); }
        .relatedItem { padding:25px 28px 25px 0; border-bottom:1px solid var(--line); }
        .relatedItem:nth-child(even) { border-left:1px solid var(--line); padding-left:28px; }
        .relatedItem h3 { font-size:18px; }
        .relatedItem p { margin-top:7px; color:#64646A; }
        .relatedItem .arrowLink { margin-top:10px; }

        /* FAQ */
        .faqWrap { display:grid; grid-template-columns:.68fr 1.32fr; gap:66px; align-items:start; }
        .faqIntro { position:sticky; top:28px; }
        .faqIntro p { margin-top:18px; color:#606067; font-size:17px; }
        .faqPanel { border-top:1px solid var(--line); }
        .faqItem { border-bottom:1px solid var(--line); }
        .faqQuestion { width:100%; border:0; background:transparent; display:flex; justify-content:space-between; gap:24px; align-items:flex-start; text-align:left; padding:22px 0; color:var(--ink); font:inherit; font-size:18px; line-height:1.45; font-weight:600; cursor:pointer; }
        .faqIcon { color:var(--magenta); flex:0 0 auto; width:30px; height:30px; border-radius:50%; border:1px solid #E2D6DC; display:grid; place-items:center; margin-top:-2px; }
        .faqAnswer { padding:0 54px 22px 0; }
        .faqAnswer p { color:#5B5B62; }

        /* Final CTA */
        .finalCta { padding:88px 0; background:var(--blush); color:var(--text); border-top:1px solid #F0DCE5; }
        .finalCta h2 { color:var(--ink); max-width:760px; }
        .finalCtaInner { display:grid; grid-template-columns:1fr auto; gap:52px; align-items:end; }
        .finalCta p { margin-top:18px; max-width:780px; color:#58585E; font-size:18px; line-height:1.68; }
        .finalCta .ctaSecondary { background:#fff; border-color:#DCCFD5; color:var(--ink); }

        @media (max-width: 1100px) {
          .shell { padding-left:40px; padding-right:40px; }
          .heroGrid { grid-template-columns:1fr 440px; gap:38px; }
          .industryGrid { grid-template-columns:repeat(2,1fr); }
          .editorialGrid, .complexGrid, .aiGrid { gap:46px; }
          .processRow { grid-template-columns:64px 210px 1fr; }
        }

        @media (max-width: 900px) {
          .shell { padding-left:24px; padding-right:24px; }
          section { padding:80px 0; }
          .hero { padding:88px 0 76px; }
          h1 { font-size:42px; }
          h2 { font-size:32px; }
          h3 { font-size:22px; }
          .heroGrid { grid-template-columns:1fr; }
          .heroCopy { max-width:800px; }
          .heroVisual { min-height:400px; max-width:720px; width:100%; }
          .trustInner { grid-template-columns:1fr 1fr; column-gap:38px; row-gap:0; }
          .overviewGrid, .digitalGrid, .termGrid { grid-template-columns:1fr; gap:46px; }
          .overviewGrid .sectionHead { text-align:center; margin-left:auto; margin-right:auto; }
          .overviewGrid .sectionHead h2 { margin-left:auto; margin-right:auto; }
          .directionGrid { grid-template-columns:1fr; }
          .directionCol, .directionCol + .directionCol { padding:30px 0; border-left:0; }
          .directionCol + .directionCol { border-top:1px solid #DCDCE0; }
          .complexGrid, .editorialGrid, .aiGrid, .faqWrap { grid-template-columns:1fr; gap:38px; }
          .editorialAside, .faqIntro { position:static; }
          .industryGrid { grid-template-columns:1fr 1fr; }
          .threeCols { grid-template-columns:1fr; }
          .proCol, .proCol + .proCol { padding:28px 0; border-left:0; border-bottom:1px solid var(--line); }
          .proCol:last-child { border-bottom:0; }
          .aiLayer { grid-template-columns:40px 170px 1fr; }
          .processRow { grid-template-columns:60px 210px 1fr; }
          .contentTypeGrid { grid-template-columns:1fr; }
          .scaleGrid { gap:0 34px; }
          .gameInner { grid-template-columns:72px 1fr; }
          .gameInner .arrowLink { grid-column:2; }
          .finalCtaInner { grid-template-columns:1fr; align-items:start; }
          .complexRow h3, .industryItem h3, .editorialBlock h3, .accentBox h3, .gameInner h3, .proCol h3, .aiLayer h3, .processRow h3, .scaleItem h3, .contentType h3, .whyItem h3, .relatedItem h3 { font-size:22px; }
        }

        @media (max-width: 640px) {
          .shell { padding-left:20px; padding-right:20px; }
          section { padding:68px 0; }
          .dense { padding-top:64px; padding-bottom:64px; }
          .hero { padding:72px 0 64px; }
          h1 { font-size:38px; line-height:1.08; }
          h2 { font-size:30px; }
          h3 { font-size:20px; }
          .sectionHead { margin-bottom:34px; }
          .sectionHead:not(.keepLeftMobile),
          .overviewGrid .sectionHead,
          .complexGrid > div:first-child .sectionHead:not(.keepLeftMobile),
          .aiIntro .sectionHead:not(.keepLeftMobile) {
            text-align:center;
            margin-left:auto;
            margin-right:auto;
          }
          .sectionHead:not(.keepLeftMobile) h2,
          .sectionHead:not(.keepLeftMobile) .intro,
          .sectionHead:not(.keepLeftMobile) .onDarkMuted,
          .overviewGrid .sectionHead h2,
          .complexGrid > div:first-child .sectionHead:not(.keepLeftMobile) h2,
          .aiIntro .sectionHead:not(.keepLeftMobile) h2 {
            margin-left:auto;
            margin-right:auto;
          }
          .heroCopy { text-align:center; }
          .heroCopy h1, .heroPositioning, .heroLead { margin-left:auto; margin-right:auto; }
          .hero .ctaRow { justify-content:center; }
          .heroMini { justify-content:center; }
          .ctaRow { width:100%; }
          .hero .cta { flex:1 1 100%; width:100%; min-height:50px; }
          .heroVisual { min-height:340px; border-radius:24px; }
          .heroDoc { padding:18px; width:52%; min-width:170px; }
          .heroDocLeft { left:14px; top:46px; }
          .heroDocRight { right:14px; bottom:35px; }
          .translationBridge span { display:none; }
          .bridgeRing { width:54px; height:54px; border-width:6px; }
          .jpTitle { font-size:18px; }
          .enTitle { font-size:15px; }
          .docMeta { display:none; }
          .trustInner { grid-template-columns:1fr; row-gap:0; }
          .trustItem { min-height:0; padding:21px 0; }
          .overviewGrid { gap:34px; }
          .statGrid { grid-template-columns:1fr; }
          .stat { min-height:0; padding:25px; }
          .stat:nth-child(odd) { border-right:0; }
          .stat:nth-child(-n+3) { border-bottom:1px solid var(--line); }
          .statValue { font-size:34px; }
          .sourceNote { font-size:14px; }
          .directionCol { padding:28px 0; }
          .plainList { grid-template-columns:1fr; gap:8px; }
          .complexRow { grid-template-columns:1fr; gap:9px; padding:23px 0; }
          .industryGrid { grid-template-columns:1fr; gap:0; }
          .industryItem { min-height:0; padding:28px 0; }
          .industryIcon { margin-bottom:16px; }
          .editorialGrid { gap:26px; }
          .editorialAside .sectionHead { margin-bottom:10px; }
          .editorialMain { margin-top:0; }
          .accentBox { padding:26px; border-radius:24px; }
          .uiBody { grid-template-columns:86px 1fr; }
          .uiWork { padding:16px; }
          .uiRow { grid-template-columns:1fr; }
          .digitalLinks { gap:8px 20px; }
          .gameBand { padding:56px 0; }
          .gameInner { grid-template-columns:1fr; gap:18px; padding:28px; text-align:left; }
          .gameInner .arrowLink { grid-column:auto; }
          .gameIcon { width:64px; height:64px; }
          .threeCols { border-top:1px solid var(--line); }
          .aiLayer { grid-template-columns:36px 1fr; gap:14px; }
          .aiLayer h3 { grid-column:2; }
          .aiLayer p { grid-column:2; }
          .processRow { grid-template-columns:52px 1fr; gap:12px; padding:22px 0; }
          .processRow h3 { padding-top:6px; }
          .processRow p { grid-column:2; }
          .termRow { grid-template-columns:32px 1fr; gap:12px; padding:19px; }
          .termRow strong { grid-column:2; }
          .termRow span { grid-column:2; }
          .scaleGrid { grid-template-columns:1fr; }
          .scaleItem { padding:22px 0; }
          .contentType { padding:24px; }
          .whyGrid { grid-template-columns:1fr; gap:0; }
          .relatedGrid { grid-template-columns:1fr; }
          .relatedItem, .relatedItem:nth-child(even) { padding:23px 0; border-left:0; }
          .faqWrap { gap:20px; }
          .faqIntro { text-align:left; }
          .faqIntro h2 { text-align:left; }
          .faqQuestion { padding:20px 0; font-size:18px; }
          .faqAnswer { padding-right:0; }
          .finalCta { padding:72px 0; }
          .finalCtaInner { gap:30px; }
          .finalCta .ctaRow { width:100%; }
          .finalCta .cta { flex:1 1 100%; width:100%; }
          .directionTitle { align-items:flex-start; }
          .complexRow h3, .industryItem h3, .editorialBlock h3, .accentBox h3, .gameInner h3, .proCol h3, .aiLayer h3, .processRow h3, .scaleItem h3, .contentType h3, .whyItem h3, .relatedItem h3 { font-size:20px; }
          .digitalLinks, .termLinks { row-gap:8px; }
          .arrowLink { max-width:100%; }
          .arrowLink span { overflow-wrap:anywhere; }
          .faqQuestion > span:first-child { overflow-wrap:anywhere; }
        }

        @media (max-width: 440px) {
          .directionTitle { flex-direction:column; gap:9px; }
          .heroMini { align-items:flex-start; text-align:left; max-width:310px; margin-left:auto; margin-right:auto; }
          .digitalLinks, .termLinks { flex-direction:column; align-items:flex-start; gap:4px; }
          .contentTag { max-width:100%; overflow-wrap:anywhere; }
        }

        @media (max-width: 360px) {
          .heroVisual { min-height:310px; }
          .heroDoc { width:56%; min-width:150px; padding:15px; }
          .docGrid { display:none; }
          .qaStrip { font-size:11px; padding:8px; }
          .uiSide { display:none; }
          .uiBody { grid-template-columns:1fr; }
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1>Japanese Translation Services</h1>
            <p className="heroPositioning">Enterprise Translation for High-Value Global Content</p>
            <p className="heroLead">
              Stepes provides professional English-to-Japanese and Japanese-to-English translation for complex technical, regulatory, digital, and business content, combining experienced native linguists, subject-matter expertise, AI-powered workflows, and enterprise quality controls.
            </p>
            <div className="ctaRow">
              <CTA href={links.quote}>Request a Quote</CTA>
              <CTA href={links.contact} secondary>Talk to an Expert</CTA>
            </div>
            <div className="heroMini"><Icon name="shield" size={19} /> Built for specialized content and ongoing enterprise programs</div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trustBand" aria-label="Japanese translation capabilities">
        <div className="shell">
          <div className="trustInner">
            {trustItems.map((item) => (
              <div className="trustItem" key={item.title}>
                <div className="trustIcon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell overviewGrid">
          <div className="overviewCopy">
            <SectionHeading
              title="Japanese Translation for High-Value Global Content"
              intro="Japanese translation demand is concentrated in sophisticated industries where language quality depends on technical understanding, terminology control, and audience-appropriate communication."
            />
            <p>
              Japan is one of the world's largest economies and a major trade, investment, technology, manufacturing, healthcare, and intellectual-property market. Its influence is especially strong in automotive engineering, advanced manufacturing, robotics, electronics, semiconductors, medical devices, pharmaceuticals, software, finance, and emerging technologies.
            </p>
            <p>
              Stepes helps global organizations translate these high-value content streams with professional Japanese linguists supported by subject-matter specialists, translation memory, terminology management, AI-assisted workflows, automated QA, and structured human review.
            </p>
          </div>
          <div>
            <div className="statPanel">
              <div className="statGrid">
                <div className="stat"><div className="statValue">$300B+</div><div className="statLabel">Recent annual U.S.–Japan bilateral trade in goods and services</div></div>
                <div className="stat"><div className="statValue">~5%</div><div className="statLabel">Share of identifiable global website content published in Japanese</div></div>
                <div className="stat"><div className="statValue">400K+</div><div className="statLabel">Annual worldwide patent applications from Japan-based applicants</div></div>
                <div className="stat"><div className="statValue">$30B+</div><div className="statLabel">Scale of Japan's medical device market</div></div>
              </div>
            </div>
            <p className="sourceNote">Sources: U.S. Commercial Service, WIPO, and W3Techs.</p>
          </div>
        </div>
      </section>

      <section className="softSection">
        <div className="shell">
          <SectionHeading
            eyebrow="Bidirectional Expertise"
            title="English-to-Japanese and Japanese-to-English Translation"
            intro="Stepes supports international companies entering Japan as well as Japanese organizations communicating with customers, regulators, partners, investors, and teams around the world."
            center
          />
          <div className="directionGrid">
            <div className="directionCol">
              <div className="directionTitle"><span className="langPill">EN → JA</span><h3>English-to-Japanese Translation</h3></div>
              <p>Translate for Japanese audiences while preserving technical meaning, product terminology, brand voice, and the functional requirements of the source.</p>
              <ul className="plainList">
                <li>Product documentation</li><li>Websites and digital experiences</li><li>Software and SaaS</li><li>Mobile apps and UI</li><li>Medical device content</li><li>Engineering specifications</li><li>Training and eLearning</li><li>Regulatory materials</li>
              </ul>
            </div>
            <div className="directionCol">
              <div className="directionTitle"><span className="langPill">JA → EN</span><h3>Japanese-to-English Translation</h3></div>
              <p>Make contextual relationships explicit in clear professional English while preserving the precise meaning of technical, legal, medical, patent, and corporate source content.</p>
              <ul className="plainList">
                <li>Patents and IP</li><li>Engineering specifications</li><li>R&amp;D documentation</li><li>Manufacturing materials</li><li>Technical reports</li><li>Corporate communications</li><li>Financial documents</li><li>Regulatory submissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="darkSection">
        <div className="shell complexGrid">
          <div>
            <SectionHeading
              eyebrow="Japanese Language Expertise"
              title="Why Japanese Translation Requires More Than Fluency"
              dark
              keepLeft
            />
            <p className="complexIntro">Japanese and English differ substantially in how information is structured, expressed, and presented. High-quality translation depends on understanding meaning at the document and subject-matter level—not simply replacing words sentence by sentence.</p>
          </div>
          <div className="complexRows">
            <div className="complexRow"><h3>Context & Subject Omission</h3><p>Japanese frequently relies on context where English requires explicit subjects and relationships. Professional translators must understand who is acting, what a technical statement refers to, and how concepts relate throughout the document.</p></div>
            <div className="complexRow"><h3>Natural, Audience-Appropriate Language</h3><p>A translation can be grammatically correct and still sound unnatural to a Japanese engineer, clinician, software user, customer, or executive. Stepes translates for meaning and intended use while preserving technical accuracy.</p></div>
            <div className="complexRow"><h3>Register & Formality</h3><p>Japanese communication varies by audience, purpose, relationship, and degree of formality. Technical manuals, executive communications, software interfaces, clinical content, and marketing should not all sound alike.</p></div>
            <div className="complexRow"><h3>Writing Systems & Terminology</h3><p>Japanese combines kanji, hiragana, katakana, Latin characters, numbers, symbols, and technical abbreviations. Product names, loanwords, acronyms, units, transliteration, and UI labels require controlled decisions.</p></div>
            <div className="complexRow"><h3>Typography & Digital Layout</h3><p>Line breaking, punctuation, full-width and half-width characters, mixed Latin/Japanese text, interface dimensions, and document formatting can all affect the quality of the localized experience.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Japanese Translation Expertise Across Global Industries"
            intro="Stepes provides specialized Japanese translation services for industries where terminology, subject knowledge, regulatory requirements, and technical precision directly affect quality."
            center
          />
          <div className="industryGrid">
            {industries.map((item) => (
              <article className="industryItem" key={item.title}>
                <div className="industryIcon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowLink href={item.href}>{item.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="softSection">
        <div className="shell editorialGrid">
          <aside className="editorialAside">
            <SectionHeading
              title="Japanese Technical Translation for Complex Products and Documentation"
              intro="Technical translation is one of the areas where Japanese language expertise and subject-matter knowledge must work together."
              keepLeft
            />
            <ArrowLink href={links.japaneseTechnical}>Explore Japanese Technical Translation Services</ArrowLink>
          </aside>
          <div className="editorialMain">
            <div className="editorialBlock">
              <h3>Technical Documents We Translate</h3>
              <p>Stepes supports user manuals, installation instructions, service and maintenance manuals, engineering specifications, technical drawings, product data sheets, safety documentation, SOPs, work instructions, quality materials, R&amp;D documents, software documentation, and technical training.</p>
              <div className="contentTags"><span className="contentTag">User Manuals</span><span className="contentTag">Engineering Specifications</span><span className="contentTag">SOPs</span><span className="contentTag">Work Instructions</span><span className="contentTag">Safety Content</span><span className="contentTag">Technical Training</span></div>
              <ArrowLink href={links.technical}>Technical Translation Services</ArrowLink>
            </div>
            <div className="editorialBlock">
              <h3>Manufacturing and Engineering Translation</h3>
              <p>Japanese manufacturers and international companies working with Japanese suppliers exchange highly technical content throughout product development, production, quality assurance, installation, maintenance, and service. Terminology consistency is essential across products, facilities, suppliers, and documentation sets.</p>
              <div style={{display:"flex", gap:22, flexWrap:"wrap", marginTop:14}}>
                <ArrowLink href={links.manufacturing}>Manufacturing Translation Services</ArrowLink>
                <ArrowLink href={links.sop}>SOP Translation Services</ArrowLink>
                <ArrowLink href={links.workInstructions}>Work Instruction Translation Services</ArrowLink>
              </div>
            </div>
            <div className="editorialBlock">
              <h3>Reusable Language Assets</h3>
              <p>For recurring programs, approved terminology and previous translations can be maintained as reusable language assets so new product releases and documentation revisions stay aligned with established Japanese language.</p>
              <ArrowLink href={links.translationMemory}>Translation Memory</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell editorialGrid">
          <aside className="editorialAside">
            <SectionHeading
              title="Japanese Medical and Life Sciences Translation"
              intro="Medical and life sciences content requires precision across language, scientific meaning, terminology, formatting, document control, and review."
              keepLeft
            />
            <ArrowLink href={links.japaneseMedical}>Explore Japanese Medical Translation Services</ArrowLink>
          </aside>
          <div className="editorialMain">
            <div className="editorialBlock">
              <h3>Medical Device Translation</h3>
              <p>Stepes supports medical technology companies across regulated documentation, labels, software interfaces, product training, websites, and post-market communication while helping teams maintain consistent Japanese terminology across connected content types.</p>
              <div className="contentTags"><span className="contentTag">IFUs</span><span className="contentTag">Device Manuals</span><span className="contentTag">Labeling</span><span className="contentTag">Medical Software</span><span className="contentTag">Regulatory Content</span></div>
            </div>
            <div className="editorialBlock">
              <h3>Pharmaceutical and Clinical Translation</h3>
              <p>Pharmaceutical and clinical programs can combine scientific terminology, regulatory documentation, patient-facing language, study content, and global stakeholder review. Stepes tailors the workflow to the risk, audience, and intended use of each document.</p>
              <div className="contentTags"><span className="contentTag">Clinical Documentation</span><span className="contentTag">Patient Materials</span><span className="contentTag">Scientific Content</span><span className="contentTag">Training</span></div>
            </div>
            <div className="editorialBlock">
              <h3>Quality for Regulated Content</h3>
              <p>Life sciences workflows can incorporate specialized medical linguists, terminology management, translation memory, structured review, automated QA, and additional validation steps appropriate to the content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blushPanel">
        <div className="shell editorialGrid">
          <aside className="editorialAside">
            <SectionHeading
              title="Japanese Patent Translation for Global IP Protection"
              intro="Japanese patents sit at the intersection of language, law, and technology. Translation must preserve technical concepts, terminology, claim logic, and legally meaningful distinctions."
              keepLeft
            />
            <ArrowLink href={links.japanesePatent}>Explore Japanese Patent Translation Services</ArrowLink>
          </aside>
          <div style={{display:"grid", gap:18}}>
            <div className="accentBox">
              <div style={{color:"var(--magenta)", marginBottom:16}}><Icon name="patent" size={27} /></div>
              <h3>Japanese-to-English Patent Translation</h3>
              <p>Support prior-art research, competitive intelligence, global filings, technical review, litigation, and cross-border portfolio management with clear professional English that preserves the precise meaning of Japanese source documents.</p>
            </div>
            <div className="accentBox">
              <h3>English-to-Japanese Patent Translation</h3>
              <p>Experienced Japanese patent linguists combine terminology management with technical subject expertise to support accurate, internally consistent translations across applications, claims, specifications, abstracts, drawings, and related documents.</p>
            </div>
            <div className="accentBox">
              <h3>Patent Content We Support</h3>
              <p>Patent applications, claims, specifications, abstracts, prior art, office actions, patent correspondence, litigation materials, technical evidence, licensing agreements, and IP-related contracts across electronics, semiconductors, software, AI, pharmaceuticals, biotechnology, medical devices, automotive, chemicals, and advanced materials.</p>
              <ArrowLink href={links.patent}>Patent Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell digitalGrid">
          <div className="digitalCopy">
            <SectionHeading
              title="Japanese Localization for Software and Digital Experiences"
              intro="Users experience Japanese inside menus, dialogs, notifications, onboarding screens, mobile layouts, documentation, support content, email, websites, and product workflows—not inside a spreadsheet."
              keepLeft
            />
            <p>Stepes helps software and technology companies localize complete Japanese digital experiences across SaaS platforms, enterprise software, mobile applications, websites, help centers, knowledge bases, developer documentation, release notes, AI interfaces, and customer communication.</p>
            <p><strong style={{fontWeight:600, color:"var(--ink)"}}>In-context review</strong> helps linguists evaluate translated content as users actually see it, making it easier to identify terminology, truncation, line wrapping, label, layout, and contextual issues before release.</p>
            <p><strong style={{fontWeight:600, color:"var(--ink)"}}>Continuous localization</strong> allows Japanese translation to keep pace with frequent string updates, product revisions, documentation changes, and new customer-facing content.</p>
            <div className="digitalLinks">
              <ArrowLink href={links.software}>Software Localization Services</ArrowLink>
              <ArrowLink href={links.app}>App Localization Services</ArrowLink>
              <ArrowLink href={links.website}>Website Translation Services</ArrowLink>
            </div>
          </div>
          <div className="uiMock" aria-label="Japanese software localization workflow">
            <div className="uiTop"><div className="uiDots"><span/><span/><span/></div><div className="uiTopLabel">IN-CONTEXT JAPANESE LOCALIZATION</div></div>
            <div className="uiBody">
              <div className="uiSide"><div className="uiNav active"/><div className="uiNav"/><div className="uiNav"/><div className="uiNav"/><div className="uiNav"/></div>
              <div className="uiWork">
                <div className="uiRow">
                  <div className="uiCell"><div className="uiCellLabel">SOURCE · EN</div><div className="uiText"/><div className="uiText short"/></div>
                  <div className="uiCell ja"><div className="uiCellLabel">TARGET · JA</div><div className="uiText"/><div className="uiText short"/></div>
                </div>
                <div className="uiRow">
                  <div className="uiCell"><div className="uiCellLabel">TERMINOLOGY</div><div className="uiText short"/><div className="uiText"/></div>
                  <div className="uiCell"><div className="uiCellLabel">PRODUCT PREVIEW</div><div className="uiText"/><div className="uiText short"/></div>
                </div>
                <div className="uiStatus"><Icon name="shield" size={18}/><span>Terminology checked · Layout reviewed · Ready for release</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gameBand softSection">
        <div className="shell">
          <div className="gameInner">
            <div className="gameIcon"><Icon name="game" size={34}/></div>
            <div>
              <h3>Japanese Game Translation and Localization</h3>
              <p>Localize dialogue, narrative, character voice, UI, menus, tutorials, item descriptions, subtitles, store listings, player support, and marketing with attention to narrative consistency, terminology, gameplay context, cultural adaptation, and interface constraints.</p>
            </div>
            <ArrowLink href={links.game}>Game Localization Services</ArrowLink>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Japanese Translation for Corporate, Legal, and Financial Content"
            intro="Stepes helps international and Japanese organizations communicate accurately with customers, employees, investors, partners, regulators, and other stakeholders."
            center
          />
          <div className="threeCols">
            <div className="proCol">
              <div className="proIcon"><Icon name="briefcase"/></div>
              <h3>Corporate & Business Translation</h3>
              <p>Audience-appropriate Japanese for recurring global business communication and stakeholder content.</p>
              <ul className="proList"><li>Annual reports</li><li>Presentations</li><li>Policies and procedures</li><li>ESG and sustainability</li><li>Investor materials</li><li>Employee communications</li></ul>
            </div>
            <div className="proCol">
              <div className="proIcon"><Icon name="scales"/></div>
              <h3>Japanese Legal Translation</h3>
              <p>Close attention to meaning, defined terms, internal consistency, confidentiality, and the intended legal use.</p>
              <ul className="proList"><li>Contracts and agreements</li><li>Corporate legal documents</li><li>Compliance materials</li><li>Litigation content</li><li>Due diligence</li><li>Legal correspondence</li></ul>
              <ArrowLink href={links.legal}>Legal Translation Services</ArrowLink>
            </div>
            <div className="proCol">
              <div className="proIcon"><Icon name="bank"/></div>
              <h3>Japanese Financial Translation</h3>
              <p>Accurate terminology, numerical integrity, confidentiality, and consistency across reporting periods and stakeholder groups.</p>
              <ul className="proList"><li>Financial statements</li><li>Annual and quarterly reports</li><li>Banking materials</li><li>Investment documents</li><li>Audit materials</li><li>Investor relations</li></ul>
              <ArrowLink href={links.financial}>Financial Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="darkSection">
        <div className="shell aiGrid">
          <div className="aiIntro">
            <SectionHeading eyebrow="AI + Human Expertise" title="AI-Powered Japanese Translation, Expertly Reviewed" dark keepLeft />
            <p>Different Japanese content requires different levels of automation, human expertise, review, and quality control. A large internal knowledge base may benefit from a very different workflow than an IFU, patent claim, product safety warning, executive communication, or consumer campaign.</p>
            <p>Stepes combines AI-powered translation technology with professional Japanese linguists so organizations can apply the right production model to the right content.</p>
            <div className="aiNote"><strong>The goal is not AI versus human translation.</strong> It is choosing the right combination of automation and professional expertise for the content's purpose, risk, and quality expectations.</div>
          </div>
          <div className="aiStack">
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="brain"/></div><h3>AI / Machine Translation</h3><p>Accelerate suitable high-volume content and reduce repetitive effort where automation fits the use case.</p></div>
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="layers"/></div><h3>Translation Memory</h3><p>Reuse approved translations to improve consistency and focus new work on changed content.</p></div>
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="term"/></div><h3>Terminology Management</h3><p>Control product names, Japanese terms, acronyms, katakana conventions, and preferred language.</p></div>
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="shield"/></div><h3>Automated QA</h3><p>Check numbers, tags, missing content, terminology, formatting, and selected consistency issues at scale.</p></div>
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="briefcase"/></div><h3>Professional Linguists</h3><p>Provide contextual understanding, language judgment, audience awareness, and linguistic refinement.</p></div>
            <div className="aiLayer"><div className="aiLayerIcon"><Icon name="check"/></div><h3>Subject-Matter Review</h3><p>Add specialized review for technical, medical, legal, financial, scientific, and other high-impact content.</p></div>
            <div style={{marginTop:22}}><ArrowLink href={links.ai} onDark>AI & Machine Learning Translation Services</ArrowLink></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            eyebrow="Quality Management"
            title="Quality Controls Built for Japanese Content"
            intro="Translation quality is more meaningful when it can be explained as a repeatable process. Stepes combines qualified linguists, subject specialization, reusable language assets, technology-assisted QA, and structured review."
            center
          />
          <div className="processList">
            {qaSteps.map(([title, text]) => (
              <div className="processRow" key={title}>
                <div className="processNum" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blushPanel">
        <div className="shell termGrid">
          <div className="termCopy">
            <SectionHeading
              title="Consistent Japanese Terminology Across Products and Teams"
              intro="The same concept may appear in software, manuals, training, websites, regulatory documents, service bulletins, and product releases. A controlled terminology program keeps those experiences aligned."
              keepLeft
            />
            <p>Stepes helps organizations create and maintain centralized Japanese language assets that can include bilingual glossaries, approved Japanese terms, katakana conventions, technical terminology, acronyms, brand language, regulatory terms, preferred translations, and do-not-translate lists.</p>
            <p>Translation memory complements terminology by storing previously translated segments so approved language can be identified and reused when it appears again.</p>
            <div className="termLinks">
              <ArrowLink href={links.translationMemory}>Translation Memory</ArrowLink>
              <ArrowLink href={links.portal}>Translation Management Portal</ArrowLink>
            </div>
          </div>
          <div className="termPanel">
            <div className="termRow"><Icon name="term"/><strong>Product Terminology</strong><span>Approved names and preferred Japanese equivalents</span></div>
            <div className="termRow"><Icon name="term"/><strong>Katakana Conventions</strong><span>Controlled renderings for foreign-origin and technology terms</span></div>
            <div className="termRow"><Icon name="document"/><strong>Technical Language</strong><span>Consistent engineering, medical, regulatory, and product terms</span></div>
            <div className="termRow"><Icon name="layers"/><strong>Translation Memory</strong><span>Reuse previously approved translations across recurring updates</span></div>
            <div className="termRow"><Icon name="shield"/><strong>Automated QA</strong><span>Flag terminology and consistency issues before final delivery</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Scale Japanese Translation Across Ongoing Content Programs"
            intro="Enterprise translation rarely ends with one document. Stepes supports recurring Japanese content through centralized workflows that connect language assets, automation, review, project visibility, and reporting."
            center
          />
          <div className="scaleGrid">
            <div className="scaleItem"><div className="scaleTitle"><Icon name="document"/><h3>Product & Documentation Updates</h3></div><p>Identify previously translated material and focus work on new or modified manuals, specifications, SOPs, training, and other content.</p></div>
            <div className="scaleItem"><div className="scaleTitle"><Icon name="code"/><h3>Software & Agile Releases</h3></div><p>Move Japanese strings through recurring localization workflows alongside product development instead of waiting for large periodic translation cycles.</p></div>
            <div className="scaleItem"><div className="scaleTitle"><Icon name="globe"/><h3>Distributed Review</h3></div><p>Coordinate product teams, client reviewers, linguists, and localization managers through structured review while maintaining centralized language assets.</p></div>
            <div className="scaleItem"><div className="scaleTitle"><Icon name="layers"/><h3>Multilingual Expansion</h3></div><p>Extend the same content and workflow infrastructure beyond Japanese as international requirements grow across products and markets.</p></div>
          </div>
          <div style={{display:"flex", gap:24, flexWrap:"wrap", marginTop:26}}>
            <ArrowLink href={links.portal}>Translation Management Portal</ArrowLink>
            <ArrowLink href={links.reporting}>Translation Reporting & Analytics</ArrowLink>
            <ArrowLink href={links.api}>Translation API</ArrowLink>
          </div>
        </div>
      </section>

      <section className="softSection">
        <div className="shell">
          <SectionHeading
            title="Japanese Translation Across Documents, Digital Content, and Media"
            intro="Translate Japanese content without rebuilding it manually. Stepes supports professional documents, structured digital formats, software resources, and multimedia workflows."
            center
          />
          <div className="contentTypeGrid">
            <div className="contentType">
              <div className="contentTypeIcon"><Icon name="document"/></div>
              <h3>Documents & Technical Publications</h3>
              <p>Translation plus multilingual formatting for business and technical files.</p>
              <ul className="typeList"><li>Microsoft Word</li><li>PowerPoint & Excel</li><li>PDF</li><li>Adobe InDesign</li><li>Adobe Illustrator</li><li>Structured documentation</li></ul>
              <ArrowLink href={links.document}>Document Translation Services</ArrowLink>
            </div>
            <div className="contentType">
              <div className="contentTypeIcon"><Icon name="code"/></div>
              <h3>Websites, Software & Structured Content</h3>
              <p>Localization workflows that support recurring digital publishing and product releases.</p>
              <ul className="typeList"><li>HTML & XML</li><li>JSON & XLIFF</li><li>Software resource files</li><li>CMS content</li><li>Web & mobile apps</li><li>Help systems & knowledge bases</li></ul>
              <ArrowLink href={links.software}>Software Localization Services</ArrowLink>
            </div>
            <div className="contentType">
              <div className="contentTypeIcon"><Icon name="media"/></div>
              <h3>Multimedia & Learning Content</h3>
              <p>Connect text, audio, visual, and contextual review for a more consistent Japanese experience.</p>
              <ul className="typeList"><li>eLearning</li><li>Training videos</li><li>Scripts</li><li>Subtitles</li><li>Voice content</li><li>Interactive training</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Why Stepes for Japanese Translation?"
            intro="Japanese translation programs require more than language. Stepes brings specialized talent, terminology control, translation technology, quality management, and enterprise scalability together in one solution."
            center
          />
          <div className="whyGrid">
            <div className="whyItem"><Icon name="briefcase"/><div><h3>Japanese + Subject-Matter Expertise</h3><p>Professional linguists are matched to technical, medical, patent, software, financial, legal, manufacturing, and other specialized content.</p></div></div>
            <div className="whyItem"><Icon name="exchange"/><div><h3>English ↔ Japanese Capabilities</h3><p>Support international companies entering Japan and Japanese organizations communicating with global markets.</p></div></div>
            <div className="whyItem"><Icon name="brain"/><div><h3>AI-Powered Translation Workflows</h3><p>Use AI where appropriate while preserving professional linguistic judgment and subject expertise for higher-impact content.</p></div></div>
            <div className="whyItem"><Icon name="term"/><div><h3>Translation Memory & Terminology</h3><p>Preserve approved language, reduce repetitive work, and maintain consistency across recurring Japanese programs.</p></div></div>
            <div className="whyItem"><Icon name="shield"/><div><h3>Structured Quality Controls</h3><p>Combine linguistic review, subject-matter review, automated QA, and in-context validation according to content requirements.</p></div></div>
            <div className="whyItem"><Icon name="globe"/><div><h3>Enterprise Scale</h3><p>Move from a specialized document to continuous software releases and multilingual content operations with scalable workflows.</p></div></div>
          </div>
        </div>
      </section>

      <section className="softSection dense">
        <div className="shell">
          <SectionHeading
            title="Explore Related Japanese Translation Expertise"
            intro="Build the right Japanese translation program for your content, industry, and global objectives."
            center
          />
          <div className="relatedGrid">
            <div className="relatedItem"><h3>Japanese Technical Translation Services</h3><p>Engineering, manufacturing, manuals, specifications, and product documentation.</p><ArrowLink href={links.japaneseTechnical}>Japanese Technical Translation Services</ArrowLink></div>
            <div className="relatedItem"><h3>Japanese Medical Translation Services</h3><p>Medical device, pharmaceutical, clinical, healthcare, and life sciences content.</p><ArrowLink href={links.japaneseMedical}>Japanese Medical Translation Services</ArrowLink></div>
            <div className="relatedItem"><h3>Japanese Patent Translation Services</h3><p>Patents, claims, prior art, specifications, and other intellectual-property materials.</p><ArrowLink href={links.japanesePatent}>Japanese Patent Translation Services</ArrowLink></div>
            <div className="relatedItem"><h3>Automotive Translation Services</h3><p>Engineering documentation, software, diagnostics, EV systems, ADAS, and manufacturing.</p><ArrowLink href={links.automotive}>Automotive Translation Services</ArrowLink></div>
            <div className="relatedItem"><h3>Electronics Translation Services</h3><p>Semiconductors, electronics, hardware, software, technical documentation, and product content.</p><ArrowLink href={links.electronics}>Electronics Translation Services</ArrowLink></div>
            <div className="relatedItem"><h3>Software Localization Services</h3><p>Software interfaces, SaaS applications, documentation, support content, and recurring releases.</p><ArrowLink href={links.software}>Software Localization Services</ArrowLink></div>
            <div className="relatedItem"><h3>App Localization Services</h3><p>Mobile app interfaces, product content, app-store experiences, and localization testing.</p><ArrowLink href={links.app}>App Localization Services</ArrowLink></div>
            <div className="relatedItem"><h3>Patent Translation Services</h3><p>Multilingual patent filing, research, prior-art review, litigation, and international IP programs.</p><ArrowLink href={links.patent}>Patent Translation Services</ArrowLink></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell faqWrap">
          <div className="faqIntro">
            <h2>Japanese Translation Services FAQ</h2>
            <p>Answers to common questions about professional Japanese translation, localization, quality, technology, pricing, and ongoing enterprise programs.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <h2>Translate Japanese Content With Confidence</h2>
            <p>From a specialized Japanese document to a continuous global localization program, Stepes combines language expertise, industry knowledge, AI-powered technology, terminology control, and enterprise quality processes to help your organization communicate confidently across markets.</p>
          </div>
          <div className="ctaRow">
            <CTA href={links.quote}>Request a Quote</CTA>
            <CTA href={links.contact} secondary>Talk to an Expert</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
