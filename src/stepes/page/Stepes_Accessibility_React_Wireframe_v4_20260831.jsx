import React from "react";

/**
 * Stepes Accessibility — Body-Only React Wireframe v4
 * Canonical URL: https://www.stepes.com/accessibility/
 *
 * Built to Stepes Wireframe Generation Spec v1.6:
 * - Body-only page scope
 * - 1280px maximum content shell
 * - Official Stepes magenta palette
 * - Editorial composition with restrained icon use
 * - 16px minimum substantive copy
 * - Full canonical Stepes.com links
 * - Responsive behavior for 320 / 390 / 768 / desktop
 */

const PAGE_URL = "https://www.stepes.com/accessibility/";

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
  };

  const paths = {
    keyboard: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10h.01M10 10h.01M13 10h.01M16 10h.01M7 13h.01M10 13h.01M13 13h4M7 16h10" />
      </>
    ),
    structure: (
      <>
        <path d="M5 4h6v5H5zM13 4h6v5h-6zM5 15h6v5H5zM13 15h6v5h-6z" />
        <path d="M8 9v3h8V9M8 12v3M16 12v3" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m5 17 4.5-4.5 3 3 2-2 4.5 3.5" />
      </>
    ),
    form: (
      <>
        <path d="M7 4h10M7 8h10M7 12h5" />
        <rect x="5" y="16" width="5" height="4" rx="1" />
        <path d="m14 18 1.5 1.5L19 16" />
      </>
    ),
    media: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
};

const tocItems = [
  ["commitment", "Our Accessibility Commitment"],
  ["standard", "Our Accessibility Standard"],
  ["experience", "How We Support an Accessible Experience"],
  ["practice", "Accessibility Is an Ongoing Practice"],
  ["third-party", "Third-Party Digital Services"],
  ["assistance", "Need Accessibility Assistance?"],
  ["statement", "About This Statement"],
];

const experienceItems = [
  {
    icon: "keyboard",
    title: "Keyboard Access",
    copy:
      "We work to make essential navigation, links, controls, and interactive functionality usable without requiring a mouse.",
  },
  {
    icon: "structure",
    title: "Clear Structure",
    copy:
      "Meaningful headings, labels, links, and page structure help make content easier to understand and navigate, including when assistive technologies are used.",
  },
  {
    icon: "eye",
    title: "Readable Visual Design",
    copy:
      "We consider contrast, typography, spacing, responsive layouts, text resizing, and other visual factors that can help make information easier to read and understand.",
  },
  {
    icon: "image",
    title: "Meaningful Visual Alternatives",
    copy:
      "Informative images are supported with appropriate text alternatives where needed. Decorative artwork is treated differently so that it does not create unnecessary repetition or distraction for people using screen readers.",
  },
  {
    icon: "form",
    title: "Accessible Forms and Interactions",
    copy:
      "We work to make form fields, instructions, controls, validation messages, and other interactions clear, understandable, and usable across different ways of navigating the website.",
  },
  {
    icon: "media",
    title: "Accessible Media",
    copy:
      "Where meaningful audio or video content is provided, we work to support appropriate alternatives such as captions, transcripts, or other accessible formats when applicable.",
  },
];

const practiceItems = [
  {
    number: "01",
    title: "Design",
    copy:
      "We consider accessibility when creating layouts, navigation, components, interactions, and responsive experiences.",
  },
  {
    number: "02",
    title: "Develop",
    copy:
      "We work to use meaningful page structure and accessible behaviors when implementing website functionality and interactive elements.",
  },
  {
    number: "03",
    title: "Publish",
    copy:
      "Accessibility considerations extend to written content, images, links, media, forms, and other information added to the website.",
  },
  {
    number: "04",
    title: "Review",
    copy:
      "We use accessibility checks, ongoing review, and user feedback to help identify barriers and opportunities for improvement as the Stepes website changes over time.",
  },
];

export default function StepesAccessibilityWireframe() {
  return (
    <div className="stepes-accessibility">
      <style>{`
        :root {
          --stepes-magenta: #C11D63;
          --stepes-magenta-dark: #A71954;
          --stepes-blush: #FDF2F7;

          --ink: #18181B;
          --ink-soft: #3E3E46;
          --muted: #686872;
          --line: #E1E1E6;
          --line-strong: #CCCCD3;
          --white: #FFFFFF;

          --radius-primary: 30px;
          --radius-secondary: 22px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .stepes-accessibility {
          width: 100%;
          overflow-x: clip;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .stepes-accessibility a {
          color: inherit;
        }

        .stepes-accessibility p,
        .stepes-accessibility li,
        .stepes-accessibility dd,
        .stepes-accessibility a,
        .support-email-label {
          overflow-wrap: anywhere;
        }

        .stepes-accessibility a:focus-visible {
          outline: 3px solid var(--stepes-magenta);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .shell {
          width: 100%;
          max-width: 1392px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .hero {
          padding: 104px 0 96px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FDFBFC 100%);
          border-bottom: 1px solid var(--line);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 820px) minmax(240px, 1fr);
          gap: 80px;
          align-items: end;
        }

        .hero h1 {
          margin: 0 0 26px;
          max-width: 760px;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -1.7px;
          font-weight: 600;
        }

        .hero-copy {
          margin: 0;
          max-width: 800px;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.68;
          font-weight: 400;
        }

        .standard-rail {
          border-left: 3px solid var(--stepes-magenta);
          padding: 6px 0 6px 22px;
          max-width: 330px;
        }

        .standard-rail-label {
          margin: 0 0 5px;
          color: var(--stepes-magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .standard-rail strong {
          display: block;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .editorial-shell {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 88px;
          align-items: start;
          padding-top: 80px;
          padding-bottom: 96px;
        }

        .toc {
          position: sticky;
          top: 28px;
          align-self: start;
        }

        .toc-label {
          margin: 0 0 16px;
          color: var(--stepes-magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .toc-nav {
          display: grid;
          border-left: 1px solid var(--line);
        }

        .toc-link {
          position: relative;
          padding: 8px 0 8px 18px;
          color: var(--muted) !important;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 600;
        }

        .toc-link::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: transparent;
        }

        .toc-link:hover,
        .toc-link:focus-visible {
          color: var(--ink) !important;
        }

        .toc-link:hover::before,
        .toc-link:focus-visible::before {
          background: var(--stepes-magenta);
        }

        .article {
          min-width: 0;
          max-width: 900px;
        }

        .section {
          scroll-margin-top: 32px;
          padding: 0 0 96px;
          margin: 0 0 96px;
          border-bottom: 1px solid var(--line);
        }

        .section:last-child {
          margin-bottom: 0;
        }

        .section-heading-group {
          max-width: 820px;
          margin-bottom: 30px;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: var(--stepes-magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .section h2,
        .support-panel h2 {
          margin: 0;
          max-width: 780px;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -1.15px;
          font-weight: 600;
        }

        .section h3 {
          margin: 0 0 8px;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.35px;
          font-weight: 600;
        }

        .section p,
        .support-panel p,
        .experience-item p,
        .practice-item p {
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .section > p {
          max-width: 760px;
          margin: 0 0 20px;
        }

        .section > p:last-child {
          margin-bottom: 0;
        }

        .lede {
          max-width: 800px !important;
          margin-bottom: 24px !important;
          color: var(--ink) !important;
          font-size: 18px !important;
          line-height: 1.68 !important;
        }

        .principles {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 28px 0 24px;
        }

        .principle {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 7px 14px;
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          background: var(--white);
          color: var(--ink);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 600;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 46px;
          margin-top: 34px;
          border-top: 1px solid var(--line);
        }

        .experience-item {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 18px;
          padding: 30px 0 32px;
          border-bottom: 1px solid var(--line);
        }

        .experience-item:nth-child(odd) {
          padding-right: 16px;
        }

        .icon-box {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #E9C6D6;
          border-radius: 14px;
          background: var(--stepes-blush);
          color: var(--stepes-magenta-dark);
        }

        .experience-item h3 {
          margin-top: 1px;
          font-size: 20px;
        }

        .experience-item p {
          margin: 0;
          color: var(--muted);
        }

        .practice-list {
          margin-top: 34px;
          border-top: 1px solid var(--line);
        }

        .practice-item {
          display: grid;
          grid-template-columns: 62px minmax(0, 1fr);
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .practice-number {
          padding-top: 2px;
          color: var(--stepes-magenta);
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .practice-item h3 {
          margin-bottom: 7px;
          font-size: 22px;
        }

        .practice-item p {
          margin: 0;
          max-width: 720px;
          color: var(--muted);
        }

        .third-party-panel {
          padding: 38px 40px;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: #FAFAFB;
        }

        .third-party-panel h2 {
          margin-bottom: 24px;
        }

        .third-party-panel p {
          max-width: 760px;
          margin: 0 0 18px;
        }

        .third-party-panel p:last-child {
          margin-bottom: 0;
        }

        .support-section {
          scroll-margin-top: 32px;
          margin: 0 0 96px;
        }

        .support-panel {
          padding: 52px 54px;
          border: 1px solid #E9C6D6;
          border-radius: var(--radius-primary);
          background: var(--stepes-blush);
          color: var(--ink);
        }

        .support-panel .eyebrow {
          color: var(--stepes-magenta);
        }

        .support-panel h2 {
          margin-bottom: 24px;
          color: var(--ink);
        }

        .support-panel p {
          max-width: 760px;
          margin: 0 0 18px;
          color: var(--ink-soft);
        }

        .support-list {
          display: grid;
          gap: 11px;
          max-width: 760px;
          margin: 26px 0 20px;
          padding: 0;
          list-style: none;
        }

        .support-list li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.58;
          font-weight: 400;
        }

        .support-list svg {
          margin-top: 3px;
          color: var(--stepes-magenta);
        }

        .support-contact {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 22px;
          margin-top: 28px;
        }

        .support-email-label {
          color: var(--ink);
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
        }

        .primary-cta,
        .primary-cta:link,
        .primary-cta:visited,
        .primary-cta:hover,
        .primary-cta:active,
        .primary-cta:focus,
        .primary-cta:focus-visible {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          background: var(--stepes-magenta);
          color: #FFFFFF !important;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
        }

        .primary-cta svg,
        .primary-cta:link svg,
        .primary-cta:visited svg,
        .primary-cta:hover svg,
        .primary-cta:active svg,
        .primary-cta:focus svg,
        .primary-cta:focus-visible svg {
          color: #FFFFFF !important;
          stroke: #FFFFFF !important;
        }

        .primary-cta:hover {
          background: var(--stepes-magenta-dark);
        }

        .primary-cta:focus-visible {
          outline-color: var(--ink) !important;
        }

        .statement-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin: 30px 0 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .statement-item {
          padding: 24px 26px 24px 0;
        }

        .statement-item + .statement-item {
          padding-left: 26px;
          border-left: 1px solid var(--line);
        }

        .statement-item dt {
          margin: 0 0 6px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
        }

        .statement-item dd {
          margin: 0;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
        }

        .related-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 24px;
          margin-top: 34px;
        }

        .related-label {
          margin-right: 2px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
        }

        .editorial-link,
        .editorial-link:link,
        .editorial-link:visited {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--stepes-magenta) !important;
          text-decoration: none;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }

        .editorial-link:hover {
          color: var(--stepes-magenta-dark) !important;
        }

        .editorial-link svg {
          transition: transform 150ms ease;
        }

        .editorial-link:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 1439px) {
          .shell {
            max-width: 1360px;
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 1000px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1fr) 250px;
            gap: 48px;
          }

          .editorial-shell {
            grid-template-columns: 210px minmax(0, 1fr);
            gap: 48px;
          }

          .experience-grid {
            column-gap: 34px;
          }
        }

        @media (max-width: 899px) {
          .shell {
            max-width: none;
            padding-left: 24px;
            padding-right: 24px;
          }

          .hero {
            padding: 88px 0 80px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .standard-rail {
            max-width: 420px;
          }

          .editorial-shell {
            display: block;
            padding-top: 56px;
            padding-bottom: 80px;
          }

          .toc {
            position: static;
            margin-bottom: 72px;
            padding-bottom: 32px;
            border-bottom: 1px solid var(--line);
          }

          .toc-nav {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 28px;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .toc-link {
            min-height: 48px;
            display: flex;
            align-items: center;
            padding: 11px 0;
            border-bottom: 1px solid var(--line);
            color: var(--ink-soft) !important;
            font-size: 14px;
          }

          .toc-link::before {
            display: none;
          }

          .article {
            width: 100%;
          }

          .section {
            padding-bottom: 80px;
            margin-bottom: 80px;
          }

          .section h2,
          .support-panel h2 {
            font-size: 32px;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }

          .experience-item:nth-child(odd) {
            padding-right: 0;
          }

          .statement-grid {
            grid-template-columns: 1fr;
          }

          .statement-item {
            padding: 22px 0;
          }

          .statement-item + .statement-item {
            padding-left: 0;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .support-panel {
            padding: 48px 40px;
          }
        }

        @media (max-width: 599px) {
          .shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero {
            padding: 72px 0 68px;
            text-align: center;
          }

          .hero-grid {
            justify-items: center;
          }

          .hero h1 {
            margin-bottom: 22px;
            font-size: 38px;
            line-height: 1.1;
            letter-spacing: -1.25px;
          }

          .hero-copy {
            font-size: 18px;
          }

          .standard-rail {
            width: min(100%, 360px);
            margin: 2px auto 0;
            padding: 14px 0 0;
            border-left: 0;
            border-top: 3px solid var(--stepes-magenta);
            text-align: center;
          }

          .editorial-shell {
            padding-top: 48px;
            padding-bottom: 72px;
          }

          .toc {
            margin-bottom: 64px;
            padding-bottom: 28px;
          }

          .toc-nav {
            grid-template-columns: 1fr;
            column-gap: 0;
          }

          .toc-link {
            padding: 12px 0;
          }

          .section {
            padding-bottom: 72px;
            margin-bottom: 72px;
          }

          .section-heading-group {
            margin-bottom: 26px;
          }

          .section h2,
          .support-panel h2 {
            font-size: 30px;
            line-height: 1.2;
            letter-spacing: -0.8px;
          }

          .section h3 {
            font-size: 20px;
          }

          .lede {
            font-size: 18px !important;
          }

          .principles {
            gap: 8px;
          }

          .experience-item {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 15px;
            padding: 27px 0 29px;
          }

          .icon-box {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .experience-item h3 {
            font-size: 20px;
          }

          .practice-item {
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 18px;
            padding: 27px 0;
          }

          .practice-item h3 {
            font-size: 20px;
          }

          .third-party-panel {
            padding: 30px 24px;
            border-radius: var(--radius-secondary);
          }

          .support-section {
            margin-bottom: 72px;
          }

          .support-panel {
            padding: 38px 26px;
            border-radius: var(--radius-secondary);
          }

          .support-contact {
            align-items: stretch;
            flex-direction: column;
          }

          .primary-cta {
            width: 100%;
            min-height: 50px;
            padding-top: 12px;
            padding-bottom: 12px;
            line-height: 1.3;
            text-align: center;
          }

          .related-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .editorial-link {
            width: fit-content;
          }
        }

        @media (max-width: 340px) {
          .shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .experience-item {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .icon-box {
            margin-bottom: 2px;
          }

          .support-panel {
            padding-left: 22px;
            padding-right: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main id="main-content">
        <section className="hero" aria-labelledby="accessibility-title">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <h1 id="accessibility-title">Accessibility at Stepes</h1>
                <p className="hero-copy">
                  Stepes is committed to providing a digital experience that is accessible
                  and usable for people of different abilities. We work to make accessibility
                  part of how our website is designed, developed, maintained, and improved.
                </p>
              </div>

              <div className="standard-rail" aria-label="Accessibility standard">
                <p className="standard-rail-label">Accessibility Standard</p>
                <strong>WCAG 2.2 Level AA target</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="shell">
          <div className="editorial-shell">
            <aside className="toc" aria-label="Page contents">
              <p className="toc-label">On This Page</p>
              <nav className="toc-nav">
                {tocItems.map(([id, label]) => (
                  <a
                    className="toc-link"
                    href={`${PAGE_URL}#${id}`}
                    key={id}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="article">
              <section className="section" id="commitment">
                <div className="section-heading-group">
                  <h2>Our Accessibility Commitment</h2>
                </div>

                <p className="lede">
                  We believe digital experiences should be designed so that as many people
                  as possible can perceive, understand, navigate, and interact with them.
                </p>

                <p>
                  Stepes works to improve accessibility across the public website at{" "}
                  <strong>www.stepes.com</strong>, including its content, navigation, forms,
                  interactive elements, and responsive experiences.
                </p>

                <p>
                  Accessibility is an ongoing effort. As our website evolves and new content
                  and functionality are introduced, we continue to evaluate opportunities to
                  improve usability and remove accessibility barriers.
                </p>

                <p>
                  This accessibility statement applies to the public Stepes website at{" "}
                  <strong>www.stepes.com</strong>. Separately hosted Stepes applications and
                  third-party services may have different accessibility characteristics and
                  are addressed as part of our ongoing accessibility work.
                </p>
              </section>

              <section className="section" id="standard">
                <div className="section-heading-group">
                  <h2>Our Accessibility Standard</h2>
                </div>

                <p className="lede">
                  Stepes uses the <strong>Web Content Accessibility Guidelines (WCAG) 2.2
                  Level AA</strong> as our accessibility standard and works continually to
                  improve the accessibility and usability of our digital experiences.
                </p>

                <p>
                  WCAG is developed by the World Wide Web Consortium (W3C) and provides
                  internationally recognized guidance for making digital content more
                  accessible to people with disabilities.
                </p>

                <div className="principles" aria-label="Four WCAG principles">
                  <span className="principle">Perceivable</span>
                  <span className="principle">Operable</span>
                  <span className="principle">Understandable</span>
                  <span className="principle">Robust</span>
                </div>

                <p>
                  We use these principles to help guide decisions about website design,
                  content, navigation, forms, media, and interactive functionality.
                </p>
              </section>

              <section className="section" id="experience">
                <div className="section-heading-group">
                  <p className="eyebrow">Accessible by Design</p>
                  <h2>How We Support an Accessible Experience</h2>
                </div>

                <p className="lede">
                  Accessibility involves more than a single feature or technical check. We
                  consider how people access and interact with the Stepes website across
                  different devices, input methods, browsers, and assistive technologies.
                </p>

                <div className="experience-grid">
                  {experienceItems.map((item) => (
                    <div className="experience-item" key={item.title}>
                      <span className="icon-box">
                        <Icon name={item.icon} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section" id="practice">
                <div className="section-heading-group">
                  <h2>Accessibility Is an Ongoing Practice</h2>
                </div>

                <p className="lede">
                  Accessibility is not a one-time website project. New pages, content,
                  functionality, technology, and user needs continue to evolve, and our
                  accessibility practices evolve with them.
                </p>

                <div className="practice-list">
                  {practiceItems.map((item) => (
                    <div className="practice-item" key={item.number}>
                      <div className="practice-number" aria-hidden="true">{item.number}</div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section" id="third-party">
                <div className="third-party-panel">
                  <h2>Third-Party Content and Digital Services</h2>
                  <p>
                    Some Stepes experiences may include or connect to content, tools,
                    applications, or services that operate separately from the main Stepes
                    website or are provided by third parties.
                  </p>
                  <p>
                    Accessibility characteristics can vary across these experiences. We
                    continue to evaluate opportunities to improve accessibility across the
                    broader Stepes digital experience and encourage users to let us know when
                    a barrier affects their ability to access information or complete a task.
                  </p>
                  <p>
                    Your feedback helps us identify issues that may not otherwise be apparent
                    and supports our ongoing accessibility improvements.
                  </p>
                </div>
              </section>

              <section className="support-section" id="assistance">
                <div className="support-panel">
                  <p className="eyebrow">Accessibility Support</p>
                  <h2>Need Accessibility Assistance?</h2>

                  <p>
                    If you experience difficulty accessing any part of the Stepes website,
                    please let us know. We welcome accessibility feedback and will use it to
                    investigate issues and improve the experience.
                  </p>

                  <p>When possible, it can be helpful to include:</p>

                  <ul className="support-list">
                    <li>
                      <Icon name="check" size={18} />
                      <span>The page or URL where you encountered the issue</span>
                    </li>
                    <li>
                      <Icon name="check" size={18} />
                      <span>A brief description of what happened</span>
                    </li>
                    <li>
                      <Icon name="check" size={18} />
                      <span>What you were trying to accomplish</span>
                    </li>
                    <li>
                      <Icon name="check" size={18} />
                      <span>
                        Your browser, device, or assistive technology, if you would like to
                        provide that information
                      </span>
                    </li>
                  </ul>

                  <p>
                    You do not need to provide technical details in order to contact us.
                  </p>

                  <div className="support-contact">
                    <span className="support-email-label">
                      Email: support@stepes.com
                    </span>

                    <a
                      className="primary-cta"
                      href="https://www.stepes.com/contact-us/"
                      aria-label="Contact Stepes about accessibility"
                    >
                      Contact Stepes About Accessibility
                      <Icon name="arrow" size={18} />
                    </a>
                  </div>

                  <p>
                    We will make reasonable efforts to understand the issue and help provide
                    access to the information, functionality, or service you need.
                  </p>
                </div>
              </section>

              <section className="section" id="statement">
                <div className="section-heading-group">
                  <h2>About This Statement</h2>
                </div>

                <p>
                  As Stepes continues to improve its website and digital experiences, this
                  statement may be updated to reflect changes in our accessibility practices,
                  technology, and website functionality.
                </p>

                <dl className="statement-grid">
                  <div className="statement-item">
                    <dt>Website covered</dt>
                    <dd>www.stepes.com</dd>
                  </div>
                  <div className="statement-item">
                    <dt>Accessibility standard</dt>
                    <dd>WCAG 2.2 Level AA target</dd>
                  </div>
                  <div className="statement-item">
                    <dt>Last reviewed</dt>
                    <dd>August 2026</dd>
                  </div>
                </dl>

                <div className="related-row" aria-label="Related information">
                  <span className="related-label">Related information</span>

                  <a
                    className="editorial-link"
                    href="https://www.stepes.com/legal/privacy/"
                  >
                    Privacy Policy <Icon name="arrow" size={17} />
                  </a>

                  <a
                    className="editorial-link"
                    href="https://www.stepes.com/security/"
                  >
                    Security <Icon name="arrow" size={17} />
                  </a>

                  <a
                    className="editorial-link"
                    href="https://www.stepes.com/legal/"
                  >
                    Terms of Use <Icon name="arrow" size={17} />
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
