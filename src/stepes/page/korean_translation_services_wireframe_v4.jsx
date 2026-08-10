import React from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8E3EC",
  dark: "#17151A",
  ink: "#211F24",
  text: "#4E4952",
  muted: "#716B75",
  border: "#E7E3E8",
  surface: "#F7F6F8",
  white: "#FFFFFF",
  darkEyebrow: "#F2A7C6",
};

function Icon({ name, size = 24, stroke = "currentColor" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const icons = {
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    chip: (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        <path d="M10 10h4v4h-4z" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 3-1.4 4.2a4.7 4.7 0 0 1-3 3L3.5 11.6l4.1 1.4a4.7 4.7 0 0 1 3 3L12 20.2l1.4-4.2a4.7 4.7 0 0 1 3-3l4.1-1.4-4.1-1.4a4.7 4.7 0 0 1-3-3L12 3Z" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    megaphone: (
      <svg {...common}>
        <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2Z" />
        <path d="M16 9a3 3 0 0 1 0 6M19 6a7 7 0 0 1 0 12" />
      </svg>
    ),
    play: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
    factory: (
      <svg {...common}>
        <path d="M3 21h18V9l-6 3V9l-6 3V5H3v16Z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </svg>
    ),
    car: (
      <svg {...common}>
        <path d="m5 11 2-5h10l2 5" />
        <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3v-5Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    heart: (
      <svg {...common}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        <path d="M8 12h2l1-2 2 4 1-2h2" />
      </svg>
    ),
    face: (
      <svg {...common}>
        <path d="M7 3.8c4.2-2 9.5.2 10.4 4.6.5 2.2-.5 3.8-.8 5.5-.5 2.6.7 4.8 3 6.3" />
        <path d="M10.1 5.4c2.2 2.4 2.6 4.8 1.6 7-.7 1.7-.5 3.5.8 5" />
        <path d="M7.2 8.1c-1 1.5-1.2 3.4-.6 5.1.7 2.2 2.3 3.8 4.5 4.6" />
      </svg>
    ),
    shopping: (
      <svg {...common}>
        <path d="M6 7h12l-1 14H7L6 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
    scale: (
      <svg {...common}>
        <path d="M12 3v18M5 7h14M7 7 3 14h8L7 7ZM17 7l-4 7h8l-4-7Z" />
      </svg>
    ),
    brain: (
      <svg {...common}>
        <path d="M9.5 4.5A3 3 0 0 0 4 6.2 3.2 3.2 0 0 0 4.7 12 3.6 3.6 0 0 0 8 18.5 3 3 0 0 0 12 20V4a3 3 0 0 0-2.5.5Z" />
        <path d="M14.5 4.5A3 3 0 0 1 20 6.2a3.2 3.2 0 0 1-.7 5.8 3.6 3.6 0 0 1-3.3 6.5A3 3 0 0 1 12 20V4a3 3 0 0 1 2.5.5Z" />
        <path d="M8 9h4M12 14h4" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.6 2.6L16.5 9" />
      </svg>
    ),
    monitor: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    network: (
      <svg {...common}>
        <rect x="2" y="3" width="6" height="5" rx="1" />
        <rect x="16" y="3" width="6" height="5" rx="1" />
        <rect x="9" y="16" width="6" height="5" rx="1" />
        <path d="M5 8v3h14V8M12 11v5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

const serviceItems = [
  ["file", "Korean Document Translation", "Business documents, reports, presentations, training materials, product information, policies, manuals, and other corporate content with formatting and multilingual publishing support."],
  ["factory", "Korean Technical Translation", "Engineering specifications, technical manuals, manufacturing documentation, procedures, data sheets, and specialized product content translated with terminology and subject-matter controls."],
  ["globe", "Korean Website Translation", "Corporate sites, product pages, ecommerce experiences, landing pages, support centers, portals, metadata, and web content localized for Korean audiences."],
  ["code", "Korean Software and App Localization", "UI strings, SaaS platforms, mobile applications, cloud products, help content, resource files, terminology management, and continuous release workflows."],
  ["megaphone", "Korean Marketing Translation", "Campaigns, product launches, advertising, sales materials, brand communications, social content, and transcreation designed to preserve intent and voice."],
  ["play", "Korean Multimedia Translation", "Video, subtitles, elearning, training, audio, and voice-over projects supported by transcription, linguistic review, and multimedia QA."],
];

const industryItems = [
  {
    icon: "chip",
    title: "Semiconductors and Electronics",
    text: "Korean translation for semiconductor manufacturing, chips and components, electronics, displays, testing procedures, engineering specifications, firmware, technical training, and product documentation.",
    link: ["Electronics Translation Services", "https://www.stepes.com/electronics-translation-services/"],
  },
  {
    icon: "car",
    title: "Automotive and Mobility",
    text: "Vehicle engineering, EV technologies, service manuals, parts catalogs, manufacturing procedures, work instructions, automotive software, training, warranty, and customer-facing content.",
    link: ["Automotive Translation Services", "https://www.stepes.com/automotive-translation-services/"],
  },
  {
    icon: "factory",
    title: "Advanced Manufacturing and Engineering",
    text: "Machinery, industrial automation, robotics, production documentation, SOPs, work instructions, equipment manuals, maintenance procedures, safety content, and supplier communications.",
    links: [
      ["SOP Translation Services", "https://www.stepes.com/sop-translation-services/"],
      ["Work Instruction Translation Services", "https://www.stepes.com/work-instruction-translation-services/"],
      ["User Manual Translation Services", "https://www.stepes.com/user-manual-translation-services/"],
    ],
  },
  {
    icon: "heart",
    title: "Medical Devices, Pharmaceutical, and Life Sciences",
    text: "Medical device documentation, IFUs, product labels, clinical and regulatory content, quality documentation, training, patient information, pharmaceutical content, and digital health interfaces.",
  },
  {
    icon: "face",
    title: "Beauty and Cosmetics",
    text: "Product labels, packaging, ingredient-related content, ecommerce listings, product instructions, websites, campaigns, training materials, brand content, and regulatory documentation.",
    link: ["Product Label Translation Services", "https://www.stepes.com/product-label-translation-services/"],
  },
  {
    icon: "code",
    title: "Software, AI, and Digital Products",
    text: "Enterprise software, SaaS, cloud applications, AI products, mobile apps, support centers, knowledge bases, onboarding, structured files, and continuously updated release content.",
    link: ["App Localization Services", "https://www.stepes.com/app-localization-services/"],
  },
  {
    icon: "shopping",
    title: "Ecommerce and Consumer Brands",
    text: "Product catalogs, marketplace listings, landing pages, mobile commerce, customer service content, loyalty programs, campaigns, product launches, and localized digital buying journeys.",
  },
  {
    icon: "scale",
    title: "Legal, Financial, and Corporate",
    text: "Contracts, corporate records, compliance documentation, intellectual property, patent-related materials, financial reports, investor communications, due diligence, and M&A content.",
  },
];

const workflowItems = [
  ["01", "Analyze", "Review the source content, formats, subject matter, language direction, audience, existing translations, terminology, and quality requirements."],
  ["02", "Prepare", "Set up translation memories, terminology, style guidance, references, and project-specific localization instructions."],
  ["03", "Translate", "Use the appropriate professional, AI-assisted, or hybrid workflow based on content complexity, risk, purpose, and turnaround."],
  ["04", "Review and QA", "Validate Korean accuracy, terminology, fluency, consistency, formatting, and required quality criteria with human and technology-assisted checks."],
  ["05", "Deliver and Improve", "Deliver localized content in the required format while preserving approved translations and terminology for future updates."],
];

const formatGroups = [
  ["Business Documents", "Word, Excel, PowerPoint, PDF, presentations, reports"],
  ["Technical and Publishing", "Adobe InDesign, Illustrator, XML, structured documentation, technical publishing files"],
  ["Software and Applications", "JSON, XML, YAML, resource files, localization strings, structured software content"],
  ["Web Content", "HTML, CMS exports, ecommerce content, web applications, help centers, knowledge bases"],
  ["Multimedia", "Video, audio, subtitles, elearning, training programs, voice-over projects"],
];

const faqs = [
  ["How Do You Ensure Korean Translation Quality?", "Stepes combines qualified Korean linguists, industry specialization, terminology management, translation memory, linguistic review, and automated QA. The workflow is adapted to the content, with additional review or in-context validation for highly technical, regulated, or customer-facing material."],
  ["Do You Provide Both English-to-Korean and Korean-to-English Translation?", "Yes. Stepes supports both directions, as well as Korean within larger multilingual programs. English-to-Korean projects often focus on market localization, while Korean-to-English projects frequently include technical, manufacturing, corporate, legal, and product content originating from Korean organizations."],
  ["What Is the Difference Between Korean Translation and Korean Localization?", "Translation primarily transfers meaning between languages. Localization additionally adapts content to the linguistic, technical, visual, and functional expectations of Korean users. For websites, software, apps, ecommerce, and multimedia, this can include UI context, file engineering, metadata, graphics, layout review, and in-context QA."],
  ["Do You Use Native Korean Translators?", "Stepes works with professional Korean linguists and assigns translators according to language direction, subject-matter expertise, project requirements, and intended audience. Native-language expertise is especially important for customer-facing Korean content where naturalness, tone, and market-appropriate language matter."],
  ["Can AI Be Used for Korean Translation?", "Yes. Modern AI translation can be highly effective for appropriate Korean content when combined with translation memory, terminology controls, professional review, and automated QA. The best workflow depends on the content's purpose, audience, complexity, and risk rather than applying one translation method to every project."],
  ["Can Stepes Translate Technical Korean Content?", "Yes. We support Korean translation for semiconductors, electronics, automotive, manufacturing, machinery, software, medical devices, life sciences, chemicals, and other specialized fields. Technical projects are matched with relevant subject knowledge and terminology controls."],
  ["Do You Provide Korean Website and Software Localization?", "Yes. Stepes localizes websites, web applications, enterprise software, SaaS platforms, mobile apps, help systems, and other digital products. Workflows can include structured-file processing, contextual translation, translation memory, terminology management, linguistic QA, and continuous localization."],
  ["How Much Do Korean Translation Services Cost?", "Pricing depends on language direction, word volume, subject complexity, file format, workflow, review requirements, turnaround, and the amount of reusable content available from translation memory. Software engineering, desktop publishing, multimedia, or specialized regulatory review can add production requirements."],
  ["How Quickly Can Korean Translation Projects Be Completed?", "Turnaround depends on volume, technical complexity, file preparation, review requirements, and how efficiently the work can be distributed. For larger projects, coordinated teams, shared terminology, translation memory, and workflow technology can increase throughput while maintaining consistency."],
];

const resources = [
  ["English-to-Korean Translation: What Global Businesses Need to Know", "Terminology, tone, register, technical English usage, and practical considerations for adapting English content for Korean audiences.", "https://www.stepes.com/resources/korean-translation-guides/english-to-korean-translation-guide/"],
  ["Korean Website and Software Localization Guide", "Korean UI content, terminology, digital typography, structured files, contextual review, and continuous localization.", "https://www.stepes.com/resources/korean-translation-guides/korean-website-software-localization-guide/"],
  ["How to Localize a Mobile App for Korea", "Mobile UX, interface translation, testing, screenshots, release workflows, and in-context linguistic QA.", "https://www.stepes.com/resources/korean-translation-guides/korean-app-localization-guide/"],
  ["Korean Technical Translation Guide", "How terminology, subject-matter expertise, translation memory, and document relationships affect engineering and manufacturing content.", "https://www.stepes.com/resources/korean-translation-guides/korean-technical-translation-guide/"],
  ["Korean Ecommerce Localization Guide", "Product terminology, search intent, customer journeys, marketing language, and digital commerce localization for Korean consumers.", "https://www.stepes.com/resources/korean-translation-guides/korean-ecommerce-localization-guide/"],
  ["Korean Translation Quality and Terminology Management", "How terminology databases, style guides, translation memory, professional review, and QA improve enterprise consistency.", "https://www.stepes.com/resources/korean-translation-guides/korean-translation-quality-guide/"],
  ["AI Translation for Korean: When Human Review Matters", "Where AI improves speed and scalability, where expert Korean review adds value, and how hybrid workflows can be matched to different content types.", "https://www.stepes.com/resources/korean-translation-guides/ai-korean-translation-human-review/"],
];

function Eyebrow({ children, dark = false }) {
  return <div className={`wf-eyebrow${dark ? " wf-eyebrow--dark" : ""}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, centered = true, dark = false }) {
  return (
    <div className={`wf-section-heading${centered ? " wf-section-heading--centered" : ""}${dark ? " wf-section-heading--dark" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children, dark = false }) {
  return (
    <a className={`wf-editorial-link${dark ? " wf-editorial-link--dark" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function KoreanHeroVisual() {
  return (
    <div className="wf-hero-visual" aria-label="Korean language, semiconductor, and digital localization illustration">
      <div className="wf-hero-orbit wf-hero-orbit--one" />
      <div className="wf-hero-orbit wf-hero-orbit--two" />
      <div className="wf-hero-hangul" aria-hidden="true">한</div>
      <div className="wf-hero-chip" aria-hidden="true">
        <Icon name="chip" size={62} />
      </div>
      <div className="wf-hero-ui" aria-hidden="true">
        <div className="wf-hero-ui-top"><span /> <span /></div>
        <div className="wf-hero-ui-title">Korean</div>
        <div className="wf-hero-ui-line wf-hero-ui-line--wide" />
        <div className="wf-hero-ui-line" />
        <div className="wf-hero-ui-pill">한국어</div>
      </div>
      <div className="wf-hero-node wf-hero-node--a" aria-hidden="true" />
      <div className="wf-hero-node wf-hero-node--b" aria-hidden="true" />
      <div className="wf-hero-node wf-hero-node--c" aria-hidden="true" />
    </div>
  );
}

export default function KoreanTranslationServicesWireframe() {
  return (
    <>
      <style>{`
        :root {
          --wf-magenta: ${BRAND.magenta};
          --wf-magenta-dark: ${BRAND.magentaDark};
          --wf-burgundy: ${BRAND.burgundy};
          --wf-blush: ${BRAND.blush};
          --wf-blush-strong: ${BRAND.blushStrong};
          --wf-dark: ${BRAND.dark};
          --wf-ink: ${BRAND.ink};
          --wf-text: ${BRAND.text};
          --wf-muted: ${BRAND.muted};
          --wf-border: ${BRAND.border};
          --wf-surface: ${BRAND.surface};
          --wf-white: ${BRAND.white};
          --wf-dark-eyebrow: ${BRAND.darkEyebrow};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .korean-wf {
          width: 100%;
          overflow: hidden;
          background: var(--wf-white);
          color: var(--wf-ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .korean-wf a { color: inherit; text-decoration: none; }
        .korean-wf h1, .korean-wf h2, .korean-wf h3, .korean-wf p { margin-top: 0; }

        .wf-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .wf-section { padding: 96px 0; }
        .wf-section--dense { padding: 80px 0; }
        .wf-section--surface { background: var(--wf-surface); }
        .wf-section--blush { background: var(--wf-blush); }
        .wf-section--dark { background: var(--wf-dark); color: var(--wf-white); }

        .wf-eyebrow {
          margin: 0 0 14px;
          color: var(--wf-magenta);
          font-size: 11px;
          line-height: 1.25;
          font-weight: 600;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .wf-eyebrow--dark { color: var(--wf-dark-eyebrow); }

        .wf-section-heading {
          width: min(100%, 820px);
          margin-bottom: 44px;
        }

        .wf-section-heading--centered { margin-left: auto; margin-right: auto; text-align: center; }
        .wf-section-heading h2 {
          margin-bottom: 18px;
          font-size: 36px;
          line-height: 1.15;
          letter-spacing: -.028em;
          font-weight: 600;
        }
        .wf-section-heading p {
          max-width: 790px;
          margin-bottom: 0;
          color: var(--wf-text);
          font-size: 18px;
          line-height: 1.7;
          font-weight: 400;
        }
        .wf-section-heading--centered p { margin-left: auto; margin-right: auto; }
        .wf-section-heading--dark p { color: #D9D4DC; }

        .wf-body-lg { font-size: 18px; line-height: 1.75; color: var(--wf-text); }
        .wf-body { font-size: 16px; line-height: 1.72; color: var(--wf-text); }

        .wf-btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .wf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 13px 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .wf-btn:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .wf-btn--primary,
        .wf-btn--primary:link,
        .wf-btn--primary:visited,
        .wf-btn--primary:hover,
        .wf-btn--primary:active,
        .wf-btn--primary:focus,
        .wf-btn--primary:focus-visible {
          background: var(--wf-magenta);
          color: #fff !important;
        }
        .wf-btn--primary *, .wf-btn--primary svg { color: #fff !important; stroke: #fff !important; }
        .wf-btn--primary:hover { background: var(--wf-magenta-dark); transform: translateY(-1px); }
        .wf-btn--secondary { background: #fff; border-color: #D8D3DA; color: var(--wf-ink); }
        .wf-btn--secondary:hover { border-color: #BFB8C2; transform: translateY(-1px); }

        .wf-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--wf-magenta) !important;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }
        .wf-editorial-link svg { stroke: currentColor; transition: transform .2s ease; }
        .wf-editorial-link:hover svg { transform: translateX(3px); }
        .wf-editorial-link:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; border-radius: 5px; }
        .wf-editorial-link--dark { color: var(--wf-dark-eyebrow) !important; }

        /* Hero */
        .wf-hero { padding: 96px 0 92px; background: #fff; }
        .wf-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(380px, .88fr);
          gap: 72px;
          align-items: center;
        }
        .wf-hero-copy { max-width: 720px; }
        .wf-hero h1 {
          margin-bottom: 22px;
          font-size: 48px;
          line-height: 1.04;
          letter-spacing: -.04em;
          font-weight: 600;
        }
        .wf-hero-copy > p {
          max-width: 700px;
          margin-bottom: 30px;
          font-size: 18px;
          line-height: 1.72;
          color: var(--wf-text);
        }
        .wf-hero-visual {
          position: relative;
          width: 100%;
          min-height: 430px;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid #E5E0E6;
          background: linear-gradient(145deg, #FBFAFB 0%, #F5F2F5 100%);
        }
        .wf-hero-orbit { position: absolute; border: 1.5px solid #B6B0B8; border-radius: 50%; opacity: .8; }
        .wf-hero-orbit--one { width: 310px; height: 310px; left: -75px; top: 62px; }
        .wf-hero-orbit--two { width: 255px; height: 255px; right: -74px; top: 24px; border-color: rgba(193,29,99,.55); }
        .wf-hero-hangul {
          position: absolute;
          left: 54px;
          top: 92px;
          width: 138px;
          height: 138px;
          display: grid;
          place-items: center;
          border-radius: 30px;
          border: 1.5px solid #8B858E;
          background: rgba(255,255,255,.9);
          font-size: 72px;
          line-height: 1;
          font-weight: 600;
          color: #4A454D;
          box-shadow: 0 18px 45px rgba(34,26,36,.07);
        }
        .wf-hero-chip {
          position: absolute;
          left: 104px;
          bottom: 54px;
          width: 110px;
          height: 110px;
          display: grid;
          place-items: center;
          color: #5B555E;
        }
        .wf-hero-ui {
          position: absolute;
          width: 235px;
          right: 30px;
          bottom: 46px;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid #D9D3DB;
          background: rgba(255,255,255,.94);
          box-shadow: 0 20px 50px rgba(34,26,36,.09);
        }
        .wf-hero-ui-top { display: flex; gap: 6px; margin-bottom: 21px; }
        .wf-hero-ui-top span { width: 7px; height: 7px; border-radius: 50%; background: #C6C0C8; }
        .wf-hero-ui-top span:last-child { background: var(--wf-magenta); }
        .wf-hero-ui-title { font-size: 16px; line-height: 1.3; font-weight: 600; color: #3E3941; margin-bottom: 13px; }
        .wf-hero-ui-line { width: 72%; height: 5px; margin: 8px 0; border-radius: 99px; background: #D9D4DB; }
        .wf-hero-ui-line--wide { width: 100%; }
        .wf-hero-ui-pill { display: inline-flex; margin-top: 15px; padding: 7px 11px; border-radius: 99px; background: var(--wf-blush); color: var(--wf-magenta); font-size: 16px; font-weight: 600; }
        .wf-hero-node { position: absolute; width: 14px; height: 14px; border: 2px solid var(--wf-magenta); border-radius: 50%; background: #fff; }
        .wf-hero-node--a { right: 90px; top: 70px; }
        .wf-hero-node--b { right: 176px; top: 164px; border-color: #807A83; }
        .wf-hero-node--c { left: 258px; top: 64px; }

        /* Trust */
        .wf-trust { border-top: 1px solid var(--wf-border); border-bottom: 1px solid var(--wf-border); background: #fff; }
        .wf-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .wf-trust-item { display: flex; gap: 13px; padding: 25px 18px; align-items: flex-start; }
        .wf-trust-icon { flex: 0 0 auto; color: var(--wf-magenta); margin-top: 1px; }
        .wf-trust-item h3 { margin: 0 0 5px; font-size: 16px; line-height: 1.35; font-weight: 600; }
        .wf-trust-item p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.55; }

        /* Business context */
        .wf-context-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 84px; align-items: start; }
        .wf-context-grid h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 0; }
        .wf-context-copy p { font-size: 17px; line-height: 1.75; color: var(--wf-text); margin-bottom: 20px; }
        .wf-context-copy p:last-child { margin-bottom: 0; }

        /* Services */
        .wf-service-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--wf-border); border-left: 1px solid var(--wf-border); border-radius: 28px; overflow: hidden; background: #fff; }
        .wf-service-item { min-height: 250px; padding: 30px; border-right: 1px solid var(--wf-border); border-bottom: 1px solid var(--wf-border); }
        .wf-service-icon { color: var(--wf-magenta); margin-bottom: 24px; }
        .wf-service-item h3 { font-size: 22px; line-height: 1.25; font-weight: 600; margin-bottom: 12px; }
        .wf-service-item p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.68; }

        /* Direction */
        .wf-direction-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .wf-direction-panel { padding: 38px; border-radius: 28px; border: 1px solid var(--wf-border); background: #fff; }
        .wf-direction-panel--accent { background: var(--wf-blush); border-color: #EFD6E2; }
        .wf-direction-panel h3 { font-size: 24px; line-height: 1.25; font-weight: 600; margin-bottom: 15px; }
        .wf-direction-panel p { font-size: 16px; line-height: 1.7; color: var(--wf-text); margin-bottom: 20px; }
        .wf-list { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
        .wf-list li { position: relative; padding-left: 18px; color: var(--wf-text); font-size: 16px; line-height: 1.55; }
        .wf-list li::before { content: ""; position: absolute; left: 0; top: .67em; width: 6px; height: 6px; border-radius: 50%; background: var(--wf-magenta); transform: translateY(-50%); }

        /* Korean expertise */
        .wf-expertise-layout { display: grid; grid-template-columns: 320px minmax(0, 1fr); gap: 56px; }
        .wf-expertise-sticky { align-self: start; position: sticky; top: 24px; }
        .wf-expertise-sticky h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 18px; }
        .wf-expertise-sticky p { color: var(--wf-text); font-size: 17px; line-height: 1.7; margin-bottom: 0; }
        .wf-expertise-rows { border-top: 1px solid var(--wf-border); }
        .wf-expertise-row { padding: 28px 0 30px; border-bottom: 1px solid var(--wf-border); }
        .wf-expertise-row h3 { font-size: 22px; line-height: 1.3; font-weight: 600; margin-bottom: 10px; }
        .wf-expertise-row p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.72; }

        /* Industries */
        .wf-industry-list { border-top: 1px solid #343038; }
        .wf-industry-row { display: grid; grid-template-columns: 64px 300px 1fr; gap: 24px; padding: 30px 0; border-bottom: 1px solid #343038; align-items: start; }
        .wf-industry-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 15px; background: #262229; color: var(--wf-dark-eyebrow); }
        .wf-industry-row h3 { margin: 4px 0 0; font-size: 22px; line-height: 1.3; font-weight: 600; }
        .wf-industry-copy p { margin: 0; color: #D9D4DC; font-size: 16px; line-height: 1.72; }
        .wf-industry-links { display: flex; flex-wrap: wrap; gap: 4px 16px; margin-top: 9px; }

        /* AI */
        .wf-ai-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(420px, 1.05fr); gap: 58px; align-items: center; }
        .wf-ai-copy h2 { font-size: 36px; line-height: 1.14; letter-spacing: -.028em; font-weight: 600; margin-bottom: 18px; }
        .wf-ai-copy > p { color: var(--wf-text); font-size: 17px; line-height: 1.72; margin-bottom: 20px; }
        .wf-inline-links { display: flex; flex-wrap: wrap; gap: 4px 16px; align-items: center; }
        .wf-ai-copy .wf-inline-links { margin-top: 2px; }
        .wf-ai-stack { padding: 12px 0; }
        .wf-ai-step { display: grid; grid-template-columns: 48px 1fr; gap: 18px; position: relative; padding: 0 0 26px; }
        .wf-ai-step:not(:last-child)::after { content: ""; position: absolute; left: 23px; top: 48px; bottom: 0; width: 1px; background: #D8D2D9; }
        .wf-ai-marker { position: relative; z-index: 1; width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #D8D2D9; background: #fff; color: var(--wf-magenta); }
        .wf-ai-step h3 { font-size: 19px; line-height: 1.35; font-weight: 600; margin: 3px 0 5px; }
        .wf-ai-step p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.62; }

        /* Quality */
        .wf-quality-grid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 50px; align-items: start; }
        .wf-quality-lead h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 18px; }
        .wf-quality-lead > p { color: var(--wf-text); font-size: 17px; line-height: 1.72; margin-bottom: 22px; }
        .wf-quality-list { display: grid; gap: 0; border-top: 1px solid var(--wf-border); }
        .wf-quality-item { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--wf-border); }
        .wf-quality-item-icon { color: var(--wf-magenta); margin-top: 2px; }
        .wf-quality-item h3 { font-size: 20px; line-height: 1.3; font-weight: 600; margin-bottom: 7px; }
        .wf-quality-item p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.65; }
        .wf-quality-panel { padding: 32px; border-radius: 28px; background: #fff; border: 1px solid #E5E0E6; box-shadow: 0 20px 54px rgba(40,32,41,.06); }
        .wf-quality-panel-head { display: flex; justify-content: space-between; gap: 18px; padding-bottom: 20px; border-bottom: 1px solid var(--wf-border); margin-bottom: 22px; }
        .wf-quality-panel-head strong { font-size: 18px; font-weight: 600; }
        .wf-status { display: inline-flex; align-items: center; gap: 7px; color: #4D4850; font-size: 14px; }
        .wf-status::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--wf-magenta); }
        .wf-term-table { display: grid; gap: 14px; }
        .wf-term-row { display: grid; grid-template-columns: .9fr 1.1fr; gap: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--wf-border); }
        .wf-term-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .wf-term-row span { font-size: 14px; color: var(--wf-muted); line-height: 1.45; }
        .wf-term-row strong { font-size: 16px; color: var(--wf-ink); line-height: 1.45; font-weight: 600; }

        /* Digital */
        .wf-digital-tabs { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--wf-border); border-radius: 28px; overflow: hidden; background: #fff; }
        .wf-digital-panel { padding: 32px; }
        .wf-digital-panel + .wf-digital-panel { border-left: 1px solid var(--wf-border); }
        .wf-digital-panel h3 { font-size: 22px; line-height: 1.3; font-weight: 600; margin-bottom: 12px; }
        .wf-digital-panel p { color: var(--wf-text); font-size: 16px; line-height: 1.68; margin-bottom: 0; }
        .wf-digital-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
        .wf-chip { display: inline-flex; align-items: center; min-height: 31px; padding: 6px 10px; border-radius: 999px; background: var(--wf-blush); color: #615961; font-size: 14px; line-height: 1.2; }
        .wf-commerce-heading { max-width: 820px; margin: 64px auto 0; padding-top: 56px; border-top: 1px solid var(--wf-border); text-align: center; }
        .wf-commerce-heading h2 { margin-bottom: 16px; font-size: 32px; line-height: 1.17; letter-spacing: -.026em; font-weight: 600; }
        .wf-commerce-heading p { max-width: 760px; margin: 0 auto; color: var(--wf-text); font-size: 17px; line-height: 1.7; }
        .wf-seo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 34px; }
        .wf-seo-item { padding-top: 22px; border-top: 2px solid var(--wf-magenta); }
        .wf-seo-item h3 { font-size: 20px; line-height: 1.3; font-weight: 600; margin-bottom: 10px; }
        .wf-seo-item p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.68; }

        /* Enterprise */
        .wf-enterprise-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 64px; align-items: start; }
        .wf-enterprise-copy h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 18px; }
        .wf-enterprise-copy p { color: #D9D4DC; font-size: 17px; line-height: 1.72; margin-bottom: 22px; }
        .wf-enterprise-links { display: flex; flex-direction: column; align-items: flex-start; }
        .wf-enterprise-rows { border-top: 1px solid #343038; }
        .wf-enterprise-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid #343038; }
        .wf-enterprise-row-icon { color: var(--wf-dark-eyebrow); }
        .wf-enterprise-row h3 { font-size: 20px; line-height: 1.3; font-weight: 600; margin-bottom: 7px; }
        .wf-enterprise-row p { margin: 0; color: #D9D4DC; font-size: 16px; line-height: 1.65; }

        /* Formats */
        .wf-format-list { border-top: 1px solid var(--wf-border); }
        .wf-format-row { display: grid; grid-template-columns: 300px 1fr; gap: 38px; padding: 24px 0; border-bottom: 1px solid var(--wf-border); align-items: center; }
        .wf-format-row h3 { margin: 0; font-size: 20px; line-height: 1.3; font-weight: 600; }
        .wf-format-row p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.65; }
        .wf-format-note { max-width: 820px; margin: 24px auto 0; text-align: center; }

        /* Public access */
        .wf-access-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: start; }
        .wf-access-grid h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 18px; }
        .wf-access-grid p { color: var(--wf-text); font-size: 17px; line-height: 1.72; margin-bottom: 0; }
        .wf-access-panel { padding: 32px; border-radius: 28px; background: #fff; border: 1px solid #EADDE3; }
        .wf-access-panel h3 { font-size: 21px; font-weight: 600; margin-bottom: 18px; }
        .wf-access-columns { columns: 2; column-gap: 26px; margin: 0; padding: 0; list-style: none; }
        .wf-access-columns li { break-inside: avoid; position: relative; padding: 0 0 11px 17px; font-size: 16px; line-height: 1.5; color: var(--wf-text); }
        .wf-access-columns li::before { content: ""; position: absolute; left: 0; top: .67em; width: 6px; height: 6px; border-radius: 50%; background: var(--wf-magenta); transform: translateY(-50%); }

        /* Why Stepes */
        .wf-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--wf-border); border-left: 1px solid var(--wf-border); border-radius: 28px; overflow: hidden; }
        .wf-why-item { min-height: 245px; padding: 30px; border-right: 1px solid var(--wf-border); border-bottom: 1px solid var(--wf-border); background: #fff; }
        .wf-why-item h3 { font-size: 21px; line-height: 1.3; font-weight: 600; margin: 16px 0 10px; }
        .wf-why-item p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.67; }
        .wf-why-icon { color: var(--wf-magenta); }

        /* Workflow */
        .wf-workflow { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--wf-border); }
        .wf-workflow-step { position: relative; padding: 30px 24px 0 0; }
        .wf-workflow-step:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 30px; width: 1px; height: calc(100% - 30px); background: var(--wf-border); }
        .wf-workflow-step + .wf-workflow-step { padding-left: 24px; }
        .wf-workflow-num { margin-bottom: 20px; color: var(--wf-magenta); font-size: 14px; line-height: 1; font-weight: 600; letter-spacing: .08em; }
        .wf-workflow-step h3 { font-size: 20px; line-height: 1.3; font-weight: 600; margin-bottom: 9px; }
        .wf-workflow-step p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.65; }

        /* FAQ */
        .wf-faq-layout { display: grid; grid-template-columns: 310px 1fr; gap: 60px; align-items: start; }
        .wf-faq-intro h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; margin-bottom: 16px; }
        .wf-faq-intro p { color: var(--wf-text); font-size: 17px; line-height: 1.7; }
        .wf-faq-panel { border-top: 1px solid var(--wf-border); }
        .wf-faq-item { border-bottom: 1px solid var(--wf-border); }
        .wf-faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 74px;
          padding: 20px 0;
          cursor: pointer;
          list-style: none;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }
        .wf-faq-item summary::-webkit-details-marker { display: none; }
        .wf-faq-plus { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; border: 1px solid #D6D0D7; display: grid; place-items: center; color: var(--wf-magenta); font-size: 20px; font-weight: 400; transition: transform .2s ease; }
        .wf-faq-item[open] .wf-faq-plus { transform: rotate(45deg); }
        .wf-faq-answer { max-width: 820px; padding: 0 48px 24px 0; color: var(--wf-text); font-size: 16px; line-height: 1.72; }
        .wf-faq-item summary:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 4px; border-radius: 4px; }

        /* Resources */
        .wf-resource-list { border-top: 1px solid var(--wf-border); }
        .wf-resource-row { display: grid; grid-template-columns: 1.05fr 1.15fr 190px; gap: 34px; padding: 24px 0; border-bottom: 1px solid var(--wf-border); align-items: center; }
        .wf-resource-row h3 { margin: 0; font-size: 20px; line-height: 1.35; font-weight: 600; }
        .wf-resource-row p { margin: 0; color: var(--wf-text); font-size: 16px; line-height: 1.62; }
        .wf-resource-row .wf-editorial-link { justify-self: end; }

        /* CTA */
        .wf-final-wrap { padding: 72px 0 80px; background: #fff; }
        .wf-final-cta { padding: 58px 64px; border-radius: 30px; background: var(--wf-blush); color: var(--wf-ink); border: 1px solid #EFD9E3; }
        .wf-final-cta-grid { display: grid; grid-template-columns: 1.25fr .75fr; gap: 48px; align-items: center; }
        .wf-final-cta h2 { max-width: 720px; margin-bottom: 16px; font-size: 36px; line-height: 1.15; letter-spacing: -.028em; font-weight: 600; }
        .wf-final-cta p { max-width: 760px; margin-bottom: 0; color: var(--wf-text); font-size: 17px; line-height: 1.7; }
        .wf-final-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
        .wf-final-actions .wf-btn { width: 100%; }
        .wf-final-actions .wf-btn--primary,
        .wf-final-actions .wf-btn--primary:link,
        .wf-final-actions .wf-btn--primary:visited,
        .wf-final-actions .wf-btn--primary:hover,
        .wf-final-actions .wf-btn--primary:active,
        .wf-final-actions .wf-btn--primary:focus,
        .wf-final-actions .wf-btn--primary:focus-visible { background: var(--wf-magenta); color: #fff !important; }
        .wf-final-actions .wf-btn--secondary { background: #fff; border-color: #DCCBD3; }

        @media (max-width: 1100px) {
          .wf-shell { padding-left: 40px; padding-right: 40px; }
          .wf-hero-grid { grid-template-columns: 1.08fr .92fr; gap: 46px; }
          .wf-hero-visual { min-height: 400px; }
          .wf-service-grid, .wf-why-grid { grid-template-columns: repeat(2, 1fr); }
          .wf-industry-row { grid-template-columns: 60px 245px 1fr; gap: 18px; }
          .wf-ai-grid { grid-template-columns: .95fr 1.05fr; gap: 42px; }
          .wf-workflow { grid-template-columns: repeat(3, 1fr); }
          .wf-workflow-step:nth-child(3)::after { display: none; }
          .wf-workflow-step:nth-child(n+4) { margin-top: 30px; border-top: 1px solid var(--wf-border); padding-top: 30px; }
          .wf-resource-row { grid-template-columns: 1fr 1.2fr 160px; gap: 24px; }
        }

        @media (max-width: 900px) {
          .wf-shell { padding-left: 24px; padding-right: 24px; }
          .wf-section { padding: 80px 0; }
          .wf-section--dense { padding: 72px 0; }
          .wf-section-heading h2, .wf-context-grid h2, .wf-expertise-sticky h2, .wf-ai-copy h2, .wf-quality-lead h2, .wf-enterprise-copy h2, .wf-access-grid h2, .wf-faq-intro h2, .wf-final-cta h2 { font-size: 32px; }
          .wf-hero { padding: 84px 0 80px; }
          .wf-hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .wf-hero-copy { max-width: 760px; }
          .wf-hero h1 { font-size: 42px; max-width: 690px; }
          .wf-hero-visual { min-height: 390px; max-width: 670px; }
          .wf-trust-grid { grid-template-columns: repeat(2, 1fr); }
          .wf-trust-item:nth-child(3), .wf-trust-item:nth-child(4) { border-top: 1px solid var(--wf-border); }
          .wf-context-grid { grid-template-columns: 1fr; gap: 28px; }
          .wf-context-grid > div:first-child { text-align: center; }
          .wf-context-grid h2 { max-width: 720px; margin-left: auto; margin-right: auto; }
          .wf-service-grid { grid-template-columns: repeat(2, 1fr); }
          .wf-direction-grid { grid-template-columns: 1fr; }
          .wf-expertise-layout { grid-template-columns: 1fr; gap: 30px; }
          .wf-expertise-sticky { position: static; max-width: 760px; margin-left: auto; margin-right: auto; text-align: center; }
          .wf-expertise-sticky p { margin-left: auto; margin-right: auto; }
          .wf-industry-row { grid-template-columns: 56px 1fr; }
          .wf-industry-copy { grid-column: 2; }
          .wf-ai-grid, .wf-quality-grid, .wf-enterprise-grid, .wf-access-grid { grid-template-columns: 1fr; gap: 42px; }
          .wf-ai-copy { max-width: 760px; }
          .wf-enterprise-copy h2 { text-align: center; }
          .wf-access-grid > div:first-child .wf-eyebrow, .wf-access-grid > div:first-child h2 { text-align: center; }
          .wf-digital-tabs { grid-template-columns: 1fr; }
          .wf-digital-panel + .wf-digital-panel { border-left: 0; border-top: 1px solid var(--wf-border); }
          .wf-commerce-heading { margin-top: 52px; padding-top: 48px; }
          .wf-seo-grid { grid-template-columns: 1fr; gap: 24px; }
          .wf-format-row { grid-template-columns: 230px 1fr; }
          .wf-workflow { grid-template-columns: 1fr; border-top: 0; }
          .wf-workflow-step, .wf-workflow-step + .wf-workflow-step, .wf-workflow-step:nth-child(n+4) { margin: 0; padding: 24px 0 24px 58px; border-top: 1px solid var(--wf-border); }
          .wf-workflow-step::after, .wf-workflow-step:nth-child(3)::after { display: none !important; }
          .wf-workflow-num { position: absolute; left: 0; top: 28px; }
          .wf-quality-panel-head { flex-wrap: wrap; }
          .wf-faq-layout { grid-template-columns: 1fr; gap: 20px; }
          .wf-faq-intro { max-width: 760px; }
          .wf-resource-row { grid-template-columns: 1fr; gap: 10px; }
          .wf-resource-row .wf-editorial-link { justify-self: start; }
          .wf-final-cta { padding: 52px 46px; }
          .wf-final-cta-grid { grid-template-columns: 1fr; gap: 30px; }
          .wf-final-actions { flex-direction: row; }
          .wf-final-actions .wf-btn { width: auto; }
        }

        @media (max-width: 640px) {
          .wf-shell { padding-left: 20px; padding-right: 20px; }
          .wf-section, .wf-section--dense { padding: 68px 0; }
          .wf-hero { padding: 68px 0 64px; }
          .wf-hero-grid { gap: 34px; }
          .wf-hero-copy { text-align: center; }
          .wf-hero .wf-eyebrow { text-align: center; }
          .wf-hero h1 { margin-left: auto; margin-right: auto; font-size: 38px; line-height: 1.06; }
          .wf-hero-copy > p { font-size: 18px; text-align: center; }
          .wf-btn-row { justify-content: center; }
          .wf-hero .wf-btn { width: 100%; }
          .wf-hero-visual { min-height: 340px; border-radius: 24px; }
          .wf-hero-hangul { left: 28px; top: 55px; width: 112px; height: 112px; font-size: 58px; border-radius: 25px; }
          .wf-hero-chip { left: 60px; bottom: 36px; width: 86px; height: 86px; }
          .wf-hero-ui { width: 188px; right: 18px; bottom: 31px; padding: 17px; border-radius: 20px; }
          .wf-hero-orbit--one { width: 245px; height: 245px; left: -86px; }
          .wf-hero-orbit--two { width: 210px; height: 210px; right: -86px; }
          .wf-hero-node--c { left: 170px; top: 46px; }

          .wf-section-heading { margin-bottom: 34px; }
          .wf-section-heading h2, .wf-context-grid h2, .wf-expertise-sticky h2, .wf-ai-copy h2, .wf-quality-lead h2, .wf-enterprise-copy h2, .wf-access-grid h2, .wf-faq-intro h2, .wf-final-cta h2 { font-size: 30px; line-height: 1.17; }
          .wf-section-heading p { font-size: 17px; }

          .wf-trust-grid { grid-template-columns: 1fr; }
          .wf-trust-item { padding: 22px 0; }
          .wf-trust-item + .wf-trust-item { border-top: 1px solid var(--wf-border); }

          .wf-context-grid h2 { max-width: 500px; }

          .wf-service-grid, .wf-why-grid { grid-template-columns: 1fr; border-radius: 24px; }
          .wf-service-item, .wf-why-item { min-height: auto; padding: 26px 24px; }
          .wf-service-item h3 { font-size: 20px; }

          .wf-direction-panel { padding: 28px 24px; border-radius: 24px; }
          .wf-direction-panel h3 { font-size: 22px; }

          .wf-expertise-layout { gap: 24px; }
          .wf-expertise-sticky p { max-width: 620px; }
          .wf-expertise-rows { text-align: left; }
          .wf-expertise-row { padding: 24px 0 25px; }
          .wf-expertise-row h3 { font-size: 20px; }

          .wf-industry-row { grid-template-columns: 46px 1fr; gap: 14px; padding: 25px 0; }
          .wf-industry-icon { width: 42px; height: 42px; border-radius: 13px; }
          .wf-industry-row h3 { font-size: 20px; margin-top: 2px; }
          .wf-industry-copy { grid-column: 1 / -1; padding-left: 60px; }
          .wf-industry-links { margin-top: 7px; }

          .wf-ai-copy { text-align: left; }
          .wf-ai-copy > p { text-align: left; }
          .wf-ai-copy .wf-inline-links { justify-content: flex-start; gap: 0 14px; }
          .wf-ai-copy .wf-editorial-link { width: auto; }
          .wf-ai-step { grid-template-columns: 44px 1fr; gap: 14px; }
          .wf-ai-marker { width: 44px; height: 44px; }
          .wf-ai-step:not(:last-child)::after { left: 21px; top: 44px; }

          .wf-quality-lead, .wf-enterprise-copy, .wf-faq-intro { text-align: left; }
          .wf-access-grid > div:first-child { text-align: center; }
          .wf-quality-lead > p, .wf-enterprise-copy p, .wf-access-grid p, .wf-faq-intro p { text-align: left; }
          .wf-quality-lead .wf-editorial-link { align-self: flex-start; }
          .wf-enterprise-links { align-items: flex-start; }
          .wf-quality-panel { padding: 26px 22px; border-radius: 24px; }
          .wf-term-row { grid-template-columns: 1fr; gap: 3px; }

          .wf-digital-tabs { border-radius: 24px; }
          .wf-digital-panel { padding: 26px 24px; }
          .wf-digital-panel h3 { font-size: 20px; }
          .wf-commerce-heading { margin-top: 44px; padding-top: 40px; }
          .wf-commerce-heading h2 { font-size: 30px; line-height: 1.17; }
          .wf-commerce-heading p { font-size: 16px; text-align: left; }

          .wf-enterprise-row { grid-template-columns: 42px 1fr; gap: 14px; }

          .wf-format-row { grid-template-columns: 1fr; gap: 8px; padding: 21px 0; }
          .wf-format-row h3 { font-size: 19px; }
          .wf-format-note { text-align: left; }

          .wf-access-panel { padding: 26px 22px; border-radius: 24px; }
          .wf-access-columns { columns: 1; }

          .wf-workflow-step, .wf-workflow-step + .wf-workflow-step, .wf-workflow-step:nth-child(n+4) { padding-left: 50px; }

          .wf-faq-layout { gap: 10px; }
          .wf-faq-item summary { font-size: 17px; min-height: 68px; padding: 18px 0; }
          .wf-faq-answer { padding-right: 0; }

          .wf-resource-row h3 { font-size: 19px; }

          .wf-final-wrap { padding: 56px 0 64px; }
          .wf-final-cta { padding: 42px 24px; border-radius: 24px; text-align: center; }
          .wf-final-cta p { font-size: 16px; text-align: left; }
          .wf-final-actions { flex-direction: column; }
          .wf-final-actions .wf-btn { width: 100%; }
          .wf-editorial-link, .wf-resource-row h3, .wf-format-row p, .wf-industry-copy p, .wf-faq-item summary span:first-child { overflow-wrap: anywhere; }
        }

        @media (max-width: 360px) {
          .wf-hero-visual { min-height: 310px; }
          .wf-hero-hangul { left: 18px; top: 48px; width: 92px; height: 92px; font-size: 46px; border-radius: 22px; }
          .wf-hero-ui { right: 10px; bottom: 24px; width: 160px; padding: 15px; }
          .wf-hero-chip { left: 34px; bottom: 30px; width: 76px; height: 76px; }
          .wf-hero-node--b, .wf-hero-node--c { display: none; }
          .wf-industry-copy { padding-left: 0; }
          .wf-industry-row { grid-template-columns: 42px 1fr; }
          .wf-ai-step { grid-template-columns: 40px 1fr; }
          .wf-ai-marker { width: 40px; height: 40px; }
          .wf-ai-step:not(:last-child)::after { left: 19px; top: 40px; }
        }
      `}</style>

      <main className="korean-wf">
        <section className="wf-hero">
          <div className="wf-shell wf-hero-grid">
            <div className="wf-hero-copy">
              <Eyebrow>Enterprise Korean Localization</Eyebrow>
              <h1>Korean Translation Services</h1>
              <p>
                Reach Korean customers, partners, employees, and markets with professional Korean translation services built for complex enterprise content. Stepes combines native Korean linguistic expertise, industry-specialized translators, advanced localization technology, and flexible AI-powered workflows to translate technical, regulated, commercial, and digital content with accuracy and consistency.
              </p>
              <div className="wf-btn-row">
                <a className="wf-btn wf-btn--primary" href="https://app.stepes.com/quote/">Get a Free Quote</a>
                <a className="wf-btn wf-btn--secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
              </div>
            </div>
            <KoreanHeroVisual />
          </div>
        </section>

        <section className="wf-trust" aria-label="Korean translation service strengths">
          <div className="wf-shell wf-trust-grid">
            {[
              ["users", "Native Korean Linguists", "Korean language and market expertise."],
              ["chip", "Industry-Specialized Expertise", "Technical, regulated, digital, and commercial content."],
              ["layers", "Enterprise Localization Technology", "Translation memory, terminology, workflow automation, and QA."],
              ["spark", "AI + Human Translation", "Flexible workflows with professional Korean review."],
            ].map(([icon, title, text]) => (
              <div className="wf-trust-item" key={title}>
                <div className="wf-trust-icon"><Icon name={icon} size={22} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell wf-context-grid">
            <div>
              <h2>Korean Translation for Global Technology and Business</h2>
            </div>
            <div className="wf-context-copy">
              <p>Korea plays an outsized role in global semiconductors, electronics, automobiles, advanced manufacturing, machinery, biotechnology, consumer technology, beauty products, and digital commerce. Korean companies operate extensive international supply chains, while global businesses increasingly need to serve Korean customers, work with Korean partners, and localize products for one of the world's most digitally sophisticated markets.</p>
              <p>These connections create translation requirements far beyond basic business communications. Engineering teams exchange specifications and manufacturing documentation. Software companies localize interfaces and support content. Medical and life sciences organizations translate regulated information. Consumer brands adapt ecommerce experiences, product labels, and marketing campaigns. Corporate teams manage contracts, compliance documents, financial communications, and intellectual property across Korean and international operations.</p>
              <p>Stepes provides Korean translation and localization services designed for these complex enterprise requirements. Whether you are bringing a product into Korea, supporting Korean customers abroad, collaborating with Korean suppliers, or translating Korean content for global markets, we help make multilingual communication accurate, scalable, and easier to manage.</p>
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--surface">
          <div className="wf-shell">
            <SectionHeading
              title="Professional Korean Translation Services for Every Content Type"
              intro="Enterprise translation spans products, departments, platforms, and customer journeys. Stepes supports the complete range of Korean business content with workflows tailored to format, subject matter, audience, and quality requirements."
            />
            <div className="wf-service-grid">
              {serviceItems.map(([icon, title, text]) => (
                <article className="wf-service-item" key={title}>
                  <div className="wf-service-icon"><Icon name={icon} size={25} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell">
            <SectionHeading
              title="English-to-Korean and Korean-to-English Translation"
              intro="Support organizations entering the Korean market as well as Korean companies and international teams bringing Korean-origin content to global audiences."
            />
            <div className="wf-direction-grid">
              <article className="wf-direction-panel wf-direction-panel--accent">
                <h3>English-to-Korean Translation</h3>
                <p>For companies introducing products, technologies, services, and information to Korean-speaking audiences. Effective localization requires careful decisions about terminology, register, tone, sentence structure, and when established English-derived terminology should remain visible.</p>
                <ul className="wf-list">
                  {[
                    "Product and technical documentation",
                    "Websites and ecommerce content",
                    "Software and mobile apps",
                    "Marketing campaigns",
                    "Medical and regulatory content",
                    "Training and elearning",
                    "Product labels and packaging",
                    "Customer support content",
                  ].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className="wf-direction-panel">
                <h3>Korean-to-English Translation</h3>
                <p>For global organizations working with Korean manufacturers, suppliers, research organizations, subsidiaries, customers, and business partners. The goal is precise meaning in clear, natural English while preserving specialized terminology and business context.</p>
                <ul className="wf-list">
                  {[
                    "Engineering and product specifications",
                    "Supplier and quality documentation",
                    "Research and technical reports",
                    "Patents and intellectual property",
                    "Contracts and corporate records",
                    "Regulatory materials",
                    "Financial communications",
                    "Marketing and product information",
                  ].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--blush">
          <div className="wf-shell wf-expertise-layout">
            <div className="wf-expertise-sticky">
              <Eyebrow>Korean Language Expertise</Eyebrow>
              <h2>Korean Localization Requires More Than Word-for-Word Translation</h2>
              <p>Korean and English differ in grammar, syntax, tone, information structure, and communication conventions. Professional localization considers how the language functions in the actual context where customers, employees, or users will see it.</p>
            </div>
            <div className="wf-expertise-rows">
              {[
                ["Formality, Register, and Audience", "Korean uses different writing styles depending on audience, relationship, context, and degree of formality. Technical manuals, ecommerce campaigns, mobile applications, corporate announcements, and customer support messages require different linguistic choices."],
                ["Technical Terminology and English-Derived Terms", "Korean technology, engineering, business, and consumer content frequently incorporates terms originating from English. Translating every term can make content less natural, while other terms require standardized Korean equivalents, approved corporate terminology, or controlled transliteration."],
                ["Sentence Structure and Context", "English and Korean organize information differently. Literal reproduction of English sentence structures can create awkward Korean, particularly in instructions, marketing copy, UI messages, and complex technical content."],
                ["Korean Spacing, Orthography, and Typography", "Hangul spelling, spacing, punctuation, foreign-word conventions, numbers, units, and typographic presentation require careful attention—especially in user interfaces, product labels, graphics, packaging, and technical publications."],
                ["Consistent Language Across the Customer Experience", "A product may appear across a website, application, help center, manual, ecommerce listing, training program, support system, and campaign. Translation memory, terminology management, style guidance, and QA help maintain one coherent Korean experience."],
              ].map(([title, text]) => (
                <article className="wf-expertise-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--dark">
          <div className="wf-shell">
            <SectionHeading
              title="Korean Translation Expertise for High-Value Industries"
              intro="Different industries require different terminology, regulatory knowledge, content workflows, and quality controls. Stepes matches Korean translators and reviewers with subject-matter expertise appropriate to each project."
              dark
            />
            <div className="wf-industry-list">
              {industryItems.map((item) => (
                <article className="wf-industry-row" key={item.title}>
                  <div className="wf-industry-icon"><Icon name={item.icon} size={23} /></div>
                  <h3>{item.title}</h3>
                  <div className="wf-industry-copy">
                    <p>{item.text}</p>
                    {item.link ? (
                      <div className="wf-industry-links">
                        <EditorialLink dark href={item.link[1]}>{item.link[0]}</EditorialLink>
                      </div>
                    ) : null}
                    {item.links ? (
                      <div className="wf-industry-links">
                        {item.links.map(([label, href]) => <EditorialLink dark href={href} key={label}>{label}</EditorialLink>)}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell wf-ai-grid">
            <div className="wf-ai-copy">
              <h2>AI-Powered Korean Translation With Expert Human Review</h2>
              <p>Artificial intelligence is transforming translation, but enterprise organizations need more than raw AI output. Different content carries different levels of linguistic, technical, regulatory, brand, and reputational risk.</p>
              <p>Stepes combines AI, professional Korean linguists, translation memory, terminology management, and automated quality controls according to each project's content, audience, visibility, complexity, and intended use.</p>
              <div className="wf-inline-links">
                <EditorialLink href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflow</EditorialLink>
                <EditorialLink href="https://www.stepes.com/ai-translation-review/">AI Translation Review Services</EditorialLink>
              </div>
            </div>
            <div className="wf-ai-stack">
              {[
                ["database", "Start With Existing Korean Assets", "Analyze approved translations, terminology, product names, style guidance, and translation memories so established language can be reused appropriately."],
                ["brain", "Apply AI Where It Adds Value", "Use AI translation for suitable content when speed, scale, or frequent updates matter, while matching workflow intensity to risk and business purpose."],
                ["users", "Review With Korean Language Experts", "Validate accuracy, completeness, terminology, fluency, grammar, register, context, naturalness, and audience appropriateness."],
                ["check", "Run Automated Quality Checks", "Identify potential issues involving terminology, numbers, tags, formatting, omissions, and consistency."],
                ["monitor", "Validate High-Visibility Content in Context", "Review websites, software, apps, graphics, and visual content as users see them to catch truncation, layout, navigation, or context issues."],
              ].map(([icon, title, text]) => (
                <div className="wf-ai-step" key={title}>
                  <div className="wf-ai-marker"><Icon name={icon} size={21} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--surface">
          <div className="wf-shell wf-quality-grid">
            <div className="wf-quality-lead">
              <Eyebrow>Quality and Terminology</Eyebrow>
              <h2>Consistent Korean Translation Across Every Product and Content Channel</h2>
              <p>Enterprise translation quality is not simply the quality of individual sentences. It also depends on whether terminology, style, product names, and recurring content remain consistent across thousands of strings, documents, projects, and releases.</p>
              <div className="wf-quality-list">
                {[
                  ["database", "Korean Terminology Management", "Establish approved translations for product features, components, technical concepts, regulatory language, abbreviations, and recurring corporate terminology."],
                  ["layers", "Translation Memory", "Reuse approved Korean content to improve consistency, reduce repetitive work, accelerate updates, and preserve linguistic knowledge across long-term programs."],
                  ["check", "Linguistic Quality Assurance", "Combine review with technology-assisted checks for terminology, numbers, punctuation, missing content, tags, units, formatting, and repeated content."],
                  ["monitor", "In-Context Review", "Evaluate translations in buttons, product screens, packaging panels, graphics, and web pages where context and layout directly affect the user experience."],
                ].map(([icon, title, text]) => (
                  <div className="wf-quality-item" key={title}>
                    <div className="wf-quality-item-icon"><Icon name={icon} size={23} /></div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory Solutions</EditorialLink>
            </div>
            <div className="wf-quality-panel" aria-label="Example Korean terminology management panel">
              <div className="wf-quality-panel-head">
                <strong>Korean Terminology</strong>
                <span className="wf-status">Approved</span>
              </div>
              <div className="wf-term-table">
                <div className="wf-term-row"><span>Source term</span><strong>Cloud workspace</strong></div>
                <div className="wf-term-row"><span>Approved Korean</span><strong>클라우드 워크스페이스</strong></div>
                <div className="wf-term-row"><span>Product term</span><strong>Smart Sensor</strong></div>
                <div className="wf-term-row"><span>Approved Korean</span><strong>스마트 센서</strong></div>
                <div className="wf-term-row"><span>QA check</span><strong>Terminology consistent across UI + help</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell">
            <SectionHeading
              title="Korean Website, Software, and Mobile App Localization"
              intro="Digital products create localization challenges that traditional document translation does not. Stepes supports interface context, structured files, terminology, ongoing releases, and visual QA across Korean digital experiences."
            />
            <div className="wf-digital-tabs">
              <article className="wf-digital-panel">
                <h3>Korean Website Localization</h3>
                <p>Localize corporate sites, ecommerce platforms, product websites, customer portals, help centers, landing pages, navigation, metadata, forms, images, and support content for Korean visitors.</p>
                <div className="wf-digital-meta"><span className="wf-chip">Web content</span><span className="wf-chip">Metadata</span><span className="wf-chip">Help centers</span></div>
              </article>
              <article className="wf-digital-panel">
                <h3>Korean Software Localization</h3>
                <p>Process enterprise applications, cloud platforms, SaaS products, resource files, strings, variables, placeholders, tags, and release content while keeping interface terminology aligned.</p>
                <div className="wf-digital-meta"><span className="wf-chip">UI strings</span><span className="wf-chip">JSON / XML</span><span className="wf-chip">Continuous releases</span></div>
              </article>
              <article className="wf-digital-panel">
                <h3>Korean Mobile App Localization</h3>
                <p>Handle short strings, ambiguous context, screen constraints, navigation, device layouts, screenshots, and in-context linguistic QA for Korean mobile experiences.</p>
                <div className="wf-digital-meta"><span className="wf-chip">iOS / Android</span><span className="wf-chip">In-context QA</span><span className="wf-chip">UX copy</span></div>
              </article>
            </div>
            <div style={{ marginTop: 22, textAlign: "center" }}>
              <EditorialLink href="https://www.stepes.com/app-localization-services/">App Localization Services</EditorialLink>
            </div>

            <div className="wf-commerce-heading">
              <Eyebrow>Digital Commerce</Eyebrow>
              <h2>Reach Korean Customers With Localized Digital Experiences</h2>
              <p>Translation converts language; localization makes the complete experience work for Korean customers. Search behavior, ecommerce terminology, product discovery, customer journeys, and campaign language all benefit from market-aware localization.</p>
            </div>
            <div className="wf-seo-grid">
              <article className="wf-seo-item"><h3>Localize for Search Intent</h3><p>Korean multilingual SEO should consider how users actually search, including terminology, page intent, titles, headings, metadata, and localized content—not direct keyword substitution.</p></article>
              <article className="wf-seo-item"><h3>Build Consistent Ecommerce Experiences</h3><p>Product names, categories, descriptions, specifications, promotional language, and support information should use consistent terminology throughout the buying journey.</p></article>
              <article className="wf-seo-item"><h3>Adapt Marketing, Not Just Language</h3><p>Campaigns may require different wording, emphasis, calls to action, or cultural framing. High-value content can combine translation with transcreation and market-focused linguistic review.</p></article>
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--dark">
          <div className="wf-shell wf-enterprise-grid">
            <div className="wf-enterprise-copy">
              <h2>Scale Korean Translation Across Teams, Markets, and Content Systems</h2>
              <p>As organizations grow, Korean translation changes from a sequence of individual projects into an ongoing content operation. Websites, software, technical documentation, training, marketing, legal content, and product information all need shared linguistic assets and coordinated workflows.</p>
              <div className="wf-enterprise-links">
                <EditorialLink dark href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</EditorialLink>
                <EditorialLink dark href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting and Analytics</EditorialLink>
                <EditorialLink dark href="https://www.stepes.com/translation-languages/">Explore Translation Languages</EditorialLink>
              </div>
            </div>
            <div className="wf-enterprise-rows">
              {[
                ["network", "Centralized Project Management", "Coordinate Korean alongside additional languages, content types, business units, and recurring localization programs."],
                ["database", "Shared Linguistic Assets", "Maintain translation memories, terminology databases, style guidance, and references so teams build on approved language instead of starting again."],
                ["spark", "Continuous Localization", "Support websites, software, apps, and digital platforms that change continuously with workflows designed around frequent updates and releases."],
                ["layers", "Localization Reporting and Visibility", "Create greater visibility into project status, language activity, translation volumes, and workflow performance across enterprise programs."],
                ["globe", "Expand Beyond Korean", "Manage Korean as part of broader Asian, European, Middle Eastern, and global localization strategies through one multilingual approach."],
              ].map(([icon, title, text]) => (
                <div className="wf-enterprise-row" key={title}>
                  <div className="wf-enterprise-row-icon"><Icon name={icon} size={24} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell">
            <SectionHeading
              title="Korean Translation for Enterprise Content Formats"
              intro="Localization workflows should work with the files and technologies your teams already use. Stepes supports common business, technical, publishing, software, web, and multimedia formats."
            />
            <div className="wf-format-list">
              {formatGroups.map(([title, text]) => (
                <div className="wf-format-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <p className="wf-body wf-format-note">
              For complex files, translation can be combined with localization engineering, formatting, and multilingual desktop publishing to deliver production-ready content.
            </p>
          </div>
        </section>

        <section className="wf-section wf-section--blush">
          <div className="wf-shell wf-access-grid">
            <div>
              <Eyebrow>Language Access</Eyebrow>
              <h2>Korean Translation for Healthcare, Legal, and Public-Facing Communications</h2>
              <p>Korean translation is also important for organizations serving Korean-speaking communities outside Korea, particularly across healthcare, legal services, education, government programs, customer support, and other public-facing environments. For content affecting health, legal rights, safety, or access to important services, translation workflows can incorporate specialized translators and additional linguistic review appropriate to the material.</p>
            </div>
            <div className="wf-access-panel">
              <h3>Common Korean Language-Access Content</h3>
              <ul className="wf-access-columns">
                {[
                  "Healthcare information",
                  "Patient communications",
                  "Benefits information",
                  "Legal notices",
                  "Public information",
                  "Educational materials",
                  "Forms and policies",
                  "Community communications",
                  "Digital services",
                  "Customer support information",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell">
            <SectionHeading
              title="Why Global Companies Choose Stepes for Korean Translation"
              intro="Successful enterprise localization requires language expertise, specialized subject knowledge, technology, quality management, and the ability to support continuously changing content."
            />
            <div className="wf-why-grid">
              {[
                ["users", "Native Korean Linguistic Expertise", "Professional Korean linguists who understand the language as it is used across technical, business, digital, regulated, and consumer environments."],
                ["chip", "Industry-Specialized Translators", "Project assignments aligned with subject matter so complex terminology and concepts can be translated appropriately."],
                ["layers", "Enterprise Localization Technology", "Translation memory, terminology management, workflow automation, file engineering, and technology-assisted QA for scalable programs."],
                ["spark", "Flexible AI + Human Workflows", "Professional human translation, AI translation, expert review, or hybrid workflows matched to content purpose and risk profile."],
                ["monitor", "Digital Localization Expertise", "Websites, software, mobile apps, ecommerce, structured files, and continuously changing digital content—not just conventional documents."],
                ["globe", "Multilingual Scalability", "Manage Korean as part of larger global localization programs with translation, review, engineering, multimedia, and publishing support."],
              ].map(([icon, title, text]) => (
                <article className="wf-why-item" key={title}>
                  <div className="wf-why-icon"><Icon name={icon} size={25} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--surface">
          <div className="wf-shell">
            <SectionHeading
              title="A Korean Translation Workflow Built Around Your Content"
              intro="Every localization program is different. Stepes adapts the process according to content, audience, technology, industry, turnaround, and quality objectives."
              centered={false}
            />
            <div className="wf-workflow">
              {workflowItems.map(([num, title, text]) => (
                <article className="wf-workflow-step" key={num}>
                  <div className="wf-workflow-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="wf-shell wf-faq-layout">
            <div className="wf-faq-intro">
              <h2>Frequently Asked Questions</h2>
              <p>Answers to common questions about Korean translation quality, localization, AI workflows, technical content, timelines, and pricing.</p>
            </div>
            <div className="wf-faq-panel">
              {faqs.map(([q, a], index) => (
                <details className="wf-faq-item" key={q} open={index === 0}>
                  <summary><span>{q}</span><span className="wf-faq-plus" aria-hidden="true">+</span></summary>
                  <div className="wf-faq-answer">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-section wf-section--surface">
          <div className="wf-shell">
            <SectionHeading
              eyebrow="Korean Translation Resources"
              title="Build a Stronger Korean Localization Program"
              intro="Explore practical guidance for Korean language, digital localization, technical content, ecommerce, terminology, quality, and AI-assisted translation."
            />
            <div className="wf-resource-list">
              {resources.map(([title, text, href]) => (
                <article className="wf-resource-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <EditorialLink href={href}>View Resource</EditorialLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wf-final-wrap">
          <div className="wf-shell">
            <div className="wf-final-cta">
              <div className="wf-final-cta-grid">
                <div>
                  <h2>Translate Your Content for Korean Audiences</h2>
                  <p>Whether you are entering the Korean market, collaborating with Korean manufacturers, localizing software, translating regulated documentation, expanding ecommerce, or supporting Korean-speaking customers, Stepes combines Korean linguistic expertise, industry specialization, and localization technology to help you communicate accurately and at scale.</p>
                </div>
                <div className="wf-final-actions">
                  <a className="wf-btn wf-btn--primary" href="https://app.stepes.com/quote/">Get a Free Quote</a>
                  <a className="wf-btn wf-btn--secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
