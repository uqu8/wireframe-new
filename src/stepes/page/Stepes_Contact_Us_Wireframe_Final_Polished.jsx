import React, { useMemo, useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  blush: "#FDF2F7",
  lightMagenta: "#F2A7C6",
  ink: "#16141A",
  text: "#3F3A43",
  muted: "#69636D",
  line: "#E6E1E7",
  lineDark: "rgba(255,255,255,0.16)",
  soft: "#F7F6F8",
  white: "#FFFFFF",
  dark: "#20151D",
};

const canonical = "https://www.stepes.com/contact-us/";

function Icon({ name, size = 23 }) {
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
    focusable: "false",
  };

  const icons = {
    message: (
      <svg {...common}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    headset: (
      <svg {...common}>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M18 19h-2a2 2 0 0 1-2-2v-3h6v1a4 4 0 0 1-4 4" />
        <path d="M4 14h6v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      </svg>
    ),
    media: (
      <svg {...common}>
        <path d="M4 11v2a2 2 0 0 0 2 2h2l3 4v-4l7-2V7L8 4v7z" />
        <path d="M18 8.5a3 3 0 0 1 0 3" />
      </svg>
    ),
    partner: (
      <svg {...common}>
        <path d="m8 12 3 3a2 2 0 0 0 3 0l5-5" />
        <path d="m15 9-2-2a2 2 0 0 0-3 0L5 12" />
        <path d="m3 10 4-4M17 6l4 4" />
        <path d="m7 15 2 2a2 2 0 0 0 3 0" />
      </svg>
    ),
    building: (
      <svg {...common}>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M9 21v-4h6v4M8 7h1M15 7h1M8 11h1M15 11h1" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    arrow: (
      <svg {...common} width="18" height="18">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 16V4M7 9l5-5 5 5" />
        <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      </svg>
    ),
  };

  return icons[name] || icons.message;
}

function ArrowLink({ href, children, className = "", onClick }) {
  return (
    <a className={`arrow-link ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function RouteItem({ icon, title, children, links }) {
  return (
    <article className="route-item">
      <div className="route-icon"><Icon name={icon} /></div>
      <div className="route-content">
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="route-links">
          {links.map((link) => (
            <ArrowLink key={link.label} href={link.href} onClick={link.onClick}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function StepesContactUsWireframe() {
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const salesReasons = useMemo(
    () => new Set([
      "Translation or Localization Project",
      "Pricing or Sales Inquiry",
      "Enterprise Translation Program",
      "Platform, API, or Integration",
    ]),
    []
  );

  const scrollToForm = (event, preset = "") => {
    if (event) event.preventDefault();
    if (preset) setReason(preset);
    document.getElementById("general-inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      document.getElementById("form-status")?.focus();
    }, 50);
  };

  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --blush: ${COLORS.blush};
          --light-magenta: ${COLORS.lightMagenta};
          --ink: ${COLORS.ink};
          --text: ${COLORS.text};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --soft: ${COLORS.soft};
          --white: ${COLORS.white};
          --dark: ${COLORS.dark};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          overflow-x: clip;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        section { position: relative; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3, p, address, a, label, option { overflow-wrap: anywhere; }
        .shell > *, .form-layout > *, .company-layout > *, .closing-panel > * { min-width: 0; }
        h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.18; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.28; margin-bottom: 12px; }
        p { color: var(--text); font-size: 16px; line-height: 1.72; }
        .lead { font-size: 18px; line-height: 1.68; }
        .eyebrow {
          display: block;
          margin: 0 0 14px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .section-head { max-width: 780px; margin-bottom: 46px; }
        .section-head.center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-head p { margin-bottom: 0; }

        .button-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          padding: 13px 23px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
          cursor: pointer;
          text-align: center;
          white-space: normal;
        }
        .stepes-page .btn-primary,
        .stepes-page .btn-primary:link,
        .stepes-page .btn-primary:visited,
        .stepes-page .btn-primary:hover,
        .stepes-page .btn-primary:active,
        .stepes-page .btn-primary:focus-visible,
        .stepes-page button.btn-primary {
          color: var(--white) !important;
          -webkit-text-fill-color: var(--white);
        }
        .stepes-page .btn-primary svg { color: currentColor; stroke: currentColor; }
        .btn-primary { background: var(--magenta); box-shadow: 0 10px 24px rgba(193,29,99,.16); }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .stepes-page .btn-secondary,
        .stepes-page .btn-secondary:link,
        .stepes-page .btn-secondary:visited { color: var(--ink); }
        .btn-secondary { background: var(--white); border-color: #D7D1D8; }
        .btn-secondary:hover { border-color: #B9B2BB; transform: translateY(-1px); }
        .btn:focus-visible,
        .arrow-link:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible,
        .file-control:focus-within { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }

        .arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          text-decoration: none;
        }
        .arrow-link svg { transition: transform .18s ease; }
        .arrow-link:hover { color: var(--magenta-dark); }
        .arrow-link:hover svg { transform: translateX(3px); }

        .hero {
          padding: 104px 0 96px;
          background:
            radial-gradient(circle at 13% 18%, rgba(193,29,99,.06), transparent 28%),
            radial-gradient(circle at 88% 82%, rgba(193,29,99,.045), transparent 26%),
            var(--white);
          border-bottom: 1px solid var(--line);
        }
        .hero-inner { max-width: 880px; margin: 0 auto; text-align: center; }
        .hero-inner .lead { max-width: 790px; margin: 0 auto 34px; }
        .hero .button-row { justify-content: center; }
        .help-section { padding: 96px 0; }
        .featured-route {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          padding: 32px 34px;
          margin-bottom: 28px;
          background: var(--blush);
          border: 1px solid #F1D8E4;
          border-radius: 28px;
        }
        .featured-route .route-icon { background: var(--white); }
        .featured-route h3 { margin-bottom: 8px; }
        .featured-route p { max-width: 780px; margin-bottom: 0; }
        .route-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--line);
          border-radius: 28px;
          overflow: hidden;
          background: var(--white);
        }
        .route-item {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 32px 34px;
          min-width: 0;
        }
        .route-item:nth-child(odd) { border-right: 1px solid var(--line); }
        .route-item:nth-child(n+3) { border-top: 1px solid var(--line); }
        .route-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: var(--soft);
          color: var(--magenta);
        }
        .route-content h3 { font-size: 22px; margin-bottom: 9px; }
        .route-content p { margin-bottom: 16px; }
        .route-links { display: flex; flex-wrap: wrap; gap: 10px 20px; }

        .form-section { padding: 96px 0; background: var(--soft); scroll-margin-top: 88px; }
        .form-layout {
          display: grid;
          grid-template-columns: minmax(0, .72fr) minmax(620px, 1.28fr);
          gap: 64px;
          align-items: start;
        }
        .form-intro { position: sticky; top: 28px; padding-top: 20px; }
        .form-intro .lead { margin-bottom: 28px; }
        .contact-note {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          gap: 13px;
          padding-top: 22px;
          margin-top: 26px;
          border-top: 1px solid var(--line);
        }
        .contact-note svg { color: var(--magenta); margin-top: 2px; }
        .contact-note p { margin-bottom: 0; }
        .contact-note a[href^="tel:"] { white-space: nowrap; }
        .form-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 18px 48px rgba(32,21,29,.07);
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 20px;
        }
        .field { min-width: 0; }
        .field.full { grid-column: 1 / -1; }
        label {
          display: block;
          margin-bottom: 8px;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }
        .required { color: var(--magenta); }
        input, select, textarea {
          width: 100%;
          min-height: 50px;
          border: 1px solid #D8D2D9;
          border-radius: 13px;
          background: var(--white);
          color: var(--ink);
          font: inherit;
          font-size: 16px;
          line-height: 1.4;
          padding: 13px 14px;
          transition: border-color .18s ease, box-shadow .18s ease;
        }
        input::placeholder, textarea::placeholder { color: #918A94; }
        input:hover, select:hover, textarea:hover { border-color: #BDB5BF; }
        input:focus, select:focus, textarea:focus { border-color: var(--magenta); box-shadow: 0 0 0 4px rgba(193,29,99,.08); outline: none; }
        textarea { min-height: 150px; resize: vertical; }
        .field-hint { margin: 8px 0 0; color: var(--muted); font-size: 16px; line-height: 1.6; }
        .sales-guidance {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-top: 4px;
          padding: 18px;
          border-radius: 16px;
          background: var(--blush);
          border: 1px solid #F1D8E4;
        }
        .sales-guidance svg { flex: 0 0 auto; color: var(--magenta); margin-top: 2px; }
        .sales-guidance p { margin: 0 0 9px; }
        .sales-guidance .arrow-link { font-size: 16px; }
        .file-control {
          display: flex;
          align-items: center;
          gap: 13px;
          min-height: 72px;
          padding: 15px 16px;
          border: 1px dashed #C8C0C9;
          border-radius: 16px;
          background: #FCFBFC;
        }
        .file-control svg { color: var(--magenta); flex: 0 0 auto; }
        .file-control input {
          min-width: 0;
          width: 100%;
          max-width: 100%;
          min-height: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          overflow: hidden;
        }
        .file-control input::file-selector-button {
          margin-right: 12px;
          padding: 9px 13px;
          border: 1px solid #D8D2D9;
          border-radius: 999px;
          background: var(--white);
          color: var(--ink);
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }
        .privacy-copy { margin: 20px 0 24px; color: var(--muted); font-size: 14px; line-height: 1.6; }
        .privacy-copy a { color: var(--magenta); font-weight: 600; text-decoration: none; }
        .form-submit { width: 100%; }
        .success-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 520px;
          text-align: center;
          padding: 44px;
        }
        .success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 68px;
          height: 68px;
          margin: 0 auto 24px;
          border-radius: 50%;
          background: var(--blush);
          color: var(--magenta);
        }
        .success-panel h2 { font-size: 32px; }
        .success-panel p { max-width: 540px; margin: 0 auto 28px; }
        .success-panel .button-row { justify-content: center; }

        .company-section { padding: 96px 0; background: var(--dark); }
        .company-section h2, .company-section h3 { color: var(--white); }
        .company-section p { color: rgba(255,255,255,.76); }
        .company-layout {
          display: grid;
          grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
          gap: 76px;
          align-items: center;
        }
        .company-intro p { max-width: 530px; margin-bottom: 0; }
        .company-details {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid ${COLORS.lineDark};
          border-bottom: 1px solid ${COLORS.lineDark};
        }
        .company-block { padding: 30px 26px; min-width: 0; }
        .company-block:first-child { padding-left: 0; border-right: 1px solid ${COLORS.lineDark}; }
        .company-block h3 { font-size: 21px; margin-bottom: 13px; }
        .company-block address,
        .phone-list { margin: 0; color: rgba(255,255,255,.8); font-size: 16px; line-height: 1.75; font-style: normal; }
        .phone-line { margin-bottom: 12px; }
        .phone-line:last-child { margin-bottom: 0; }
        .phone-line span { display: block; color: rgba(255,255,255,.68); }
        .phone-line a { display: inline-block; white-space: nowrap; }
        .company-block a { color: var(--white); text-decoration: none; }
        .company-block a:hover { color: var(--light-magenta); }
        .company-links { display: flex; flex-wrap: wrap; gap: 14px 24px; margin-top: 22px; }
        .company-links .arrow-link { color: var(--light-magenta); }
        .closing { padding: 80px 0; background: var(--white); }
        .closing-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 40px;
          align-items: center;
          padding: 42px 46px;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: linear-gradient(135deg, var(--white), #FFF8FB);
        }
        .closing-panel h2 { margin-bottom: 12px; }
        .closing-panel p { max-width: 720px; margin-bottom: 0; }
        .closing-panel .button-row { justify-content: flex-end; }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .form-layout { grid-template-columns: minmax(0, .65fr) minmax(560px, 1.35fr); gap: 42px; }
          .company-layout { gap: 46px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 92px 0 84px; }
          .help-section, .form-section, .company-section { padding: 80px 0; }
          .featured-route { grid-template-columns: 54px minmax(0, 1fr); }
          .featured-route > .btn { grid-column: 2; justify-self: start; }
          .route-item { padding: 28px 26px; }
          .form-layout { grid-template-columns: 1fr; gap: 38px; }
          .form-intro { position: static; padding-top: 0; max-width: 760px; }
          .company-layout { grid-template-columns: 1fr; }
          .company-intro p { max-width: 760px; }
          .closing-panel { grid-template-columns: 1fr; }
          .closing-panel .button-row { justify-content: flex-start; }
        }

        @media (max-width: 820px) {
          .route-panel { grid-template-columns: 1fr; }
          .route-item:nth-child(odd) { border-right: 0; }
          .route-item:nth-child(n+2) { border-top: 1px solid var(--line); }
        }

        @media (max-width: 680px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .lead { font-size: 18px; }
          .hero { padding: 72px 0 68px; }
          .hero-inner { text-align: center; }
          .hero .button-row { flex-direction: column; width: 100%; }
          .hero .btn { width: 100%; }
          .help-section, .form-section, .company-section { padding: 68px 0; }
          .section-head { margin-bottom: 34px; }
          .featured-route { grid-template-columns: 1fr; gap: 18px; padding: 26px 22px; }
          .featured-route > .btn { grid-column: auto; width: 100%; }
          .route-item { grid-template-columns: 48px minmax(0, 1fr); padding: 26px 22px; }
          .form-card { padding: 26px 20px; border-radius: 24px; }
          .form-grid { grid-template-columns: 1fr; gap: 20px; }
          .field.full { grid-column: auto; }
          .file-control { flex-direction: column; align-items: stretch; }
          .file-control svg { margin-bottom: 1px; }
          .file-control input::file-selector-button { display: block; margin: 0 0 10px; }
          .company-details { grid-template-columns: 1fr; }
          .company-block { padding: 26px 0; }
          .company-block:first-child { border-right: 0; border-bottom: 1px solid ${COLORS.lineDark}; }
          .closing { padding: 64px 0; }
          .closing-panel { padding: 30px 22px; border-radius: 24px; }
          .closing-panel .button-row { flex-direction: column; width: 100%; }
          .closing-panel .btn { width: 100%; }
          .success-panel { min-height: 440px; padding: 28px 8px; }
        }

        @media (max-width: 480px) {
          .route-links { flex-direction: column; align-items: flex-start; gap: 10px; }
          .company-links { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        @media (max-width: 360px) {
          .route-item { grid-template-columns: 1fr; }
          .route-icon { margin-bottom: 2px; }
          .button-row { gap: 10px; }
          .form-card { padding-left: 18px; padding-right: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>

      <section className="hero" aria-labelledby="contact-title">
        <div className="shell">
          <div className="hero-inner">
            <h1 id="contact-title">Contact Stepes</h1>
            <p className="lead">
              Whether you are planning a translation project, need customer support, or want to reach Stepes
              about media, partnerships, corporate matters, or another question, choose a contact option or
              send us a message.
            </p>
            <div className="button-row">
              <a
                className="btn btn-primary"
                href={`${canonical}#general-inquiry`}
                onClick={(event) => scrollToForm(event)}
              >
                Send Us a Message <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section" aria-labelledby="help-title">
        <div className="shell">
          <div className="section-head center">
            <span className="eyebrow">Contact Options</span>
            <h2 id="help-title">How Can We Help?</h2>
            <p className="lead">
              Choose the path that best matches your needs, or use the general inquiry form for any question,
              including a new translation or localization project.
            </p>
          </div>

          <article className="featured-route">
            <div className="route-icon"><Icon name="globe" size={25} /></div>
            <div>
              <h3>Translation and Localization Inquiries</h3>
              <p>
                Discuss a new translation or localization project, request pricing, evaluate an enterprise
                program, or ask about Stepes technology, APIs, integrations, and AI + human workflows.
              </p>
            </div>
            <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">
              Contact Sales <Icon name="arrow" size={18} />
            </a>
          </article>

          <div className="route-panel">
            <RouteItem
              icon="headset"
              title="Existing Customer Support"
              links={[{ label: "Get Customer Support", href: "https://www.stepes.com/customer-support/" }]}
            >
              Get help with an active project, account access, the Stepes platform, project files, billing, or
              another service-related question.
            </RouteItem>

            <RouteItem
              icon="media"
              title="Media and Press"
              links={[{
                label: "Contact Media Relations",
                href: `${canonical}#general-inquiry`,
                onClick: (event) => scrollToForm(event, "Media or Press"),
              }]}
            >
              Reach Stepes regarding interviews, company information, expert commentary, speaking opportunities,
              press materials, or other media requests.
            </RouteItem>

            <RouteItem
              icon="partner"
              title="Partnerships"
              links={[{
                label: "Discuss a Partnership",
                href: `${canonical}#general-inquiry`,
                onClick: (event) => scrollToForm(event, "Partnership Opportunity"),
              }]}
            >
              Tell us about technology integrations, strategic alliances, channel relationships, and other
              opportunities to create value together.
            </RouteItem>

            <RouteItem
              icon="building"
              title="Corporate and Investor Inquiries"
              links={[{
                label: "Send a Corporate Inquiry",
                href: `${canonical}#general-inquiry`,
                onClick: (event) => scrollToForm(event, "Corporate or Strategic Inquiry"),
              }]}
            >
              Reach Stepes about corporate matters, strategic opportunities, investor questions, vendor
              relationships, procurement, legal, privacy, or other business inquiries.
            </RouteItem>

            <RouteItem
              icon="people"
              title="Careers at Stepes"
              links={[{ label: "Explore Careers", href: "https://www.stepes.com/careers/" }]}
            >
              Explore current openings and learn more about working with the global Stepes team.
            </RouteItem>

            <RouteItem
              icon="message"
              title="Translators and Linguists"
              links={[
                { label: "Become a Translator", href: "https://www.stepes.com/translators/" },
                { label: "View Translation Jobs", href: "https://www.stepes.com/translation-jobs/" },
              ]}
            >
              Apply to work with Stepes as a professional translator or linguist, or browse current translation
              opportunities and related resources.
            </RouteItem>
          </div>
        </div>
      </section>

      <section className="form-section" id="general-inquiry" aria-labelledby="form-title">
        <div className="shell">
          <div className="form-layout">
            <div className="form-intro">
              <span className="eyebrow">General Inquiry</span>
              <h2 id="form-title">Send Us a Message</h2>
              <p className="lead">
                Not sure which team you need? Share a few details and we will direct your inquiry to the
                appropriate Stepes contact.
              </p>
              <p>
                Use this form for any inquiry, including a new translation or localization project. You can also
                use our Contact Sales form to share more detailed project requirements.
              </p>
              <ArrowLink href="https://www.stepes.com/contact-sales/">Use the Contact Sales Form</ArrowLink>
              <div className="contact-note">
                <Icon name="phone" size={23} />
                <p>
                  Prefer to speak with someone? Call Stepes at{" "}
                  <a href="tel:+18006115698" className="arrow-link">+1 800 611 5698</a>.
                </p>
              </div>
            </div>

            <div className="form-card">
              {submitted ? (
                <div className="success-panel" id="form-status" tabIndex="-1" role="status" aria-live="polite">
                  <div className="success-icon"><Icon name="check" size={30} /></div>
                  <h2>Thank You for Contacting Stepes</h2>
                  <p>
                    Your message has been received and will be directed to the appropriate Stepes team. A team
                    member will review the information you provided and connect you with the right Stepes contact.
                  </p>
                  <div className="button-row">
                    <a className="btn btn-primary" href="https://www.stepes.com/">Return to Stepes</a>
                    <a className="btn btn-secondary" href="https://www.stepes.com/services/">Explore Our Services</a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="firstName">First Name <span className="required">*</span></label>
                      <input id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="Your first name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                      <input id="lastName" name="lastName" type="text" autoComplete="family-name" placeholder="Your last name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work Email <span className="required">*</span></label>
                      <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
                    </div>
                    <div className="field">
                      <label htmlFor="organization">Company or Organization</label>
                      <input id="organization" name="organization" type="text" autoComplete="organization" placeholder="Company or organization name" />
                    </div>
                    <div className="field">
                      <label htmlFor="country">Country or Region</label>
                      <select id="country" name="country" autoComplete="country-name" defaultValue="">
                        <option value="" disabled>Select your country or region</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United Kingdom</option>
                        <option>Europe</option>
                        <option>Asia Pacific</option>
                        <option>Latin America and the Caribbean</option>
                        <option>Middle East and Africa</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Include country code" />
                    </div>
                    <div className="field full">
                      <label htmlFor="reason">Reason for Contact <span className="required">*</span></label>
                      <select id="reason" name="reason" value={reason} onChange={(event) => setReason(event.target.value)} required>
                        <option value="" disabled>Select the most relevant option</option>
                        <option>Translation or Localization Project</option>
                        <option>Pricing or Sales Inquiry</option>
                        <option>Enterprise Translation Program</option>
                        <option>Platform, API, or Integration</option>
                        <option>Existing Customer Support</option>
                        <option>Media or Press</option>
                        <option>Partnership Opportunity</option>
                        <option>Corporate or Strategic Inquiry</option>
                        <option>Investor Inquiry</option>
                        <option>Vendor or Supplier Inquiry</option>
                        <option>Legal or Privacy Inquiry</option>
                        <option>Careers</option>
                        <option>Translator Inquiry</option>
                        <option>Website Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {salesReasons.has(reason) && (
                      <div className="field full sales-guidance" role="note">
                        <Icon name="message" size={22} />
                        <div>
                          <p>
                            You can continue with this form, or provide additional project details through our
                            dedicated Contact Sales page for a more tailored response.
                          </p>
                          <ArrowLink href="https://www.stepes.com/contact-sales/">Go to Contact Sales</ArrowLink>
                        </div>
                      </div>
                    )}

                    <div className="field full">
                      <label htmlFor="message">How Can We Help? <span className="required">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your question, project, organization, or the Stepes team you are trying to reach."
                        required
                      />
                      <p className="field-hint">
                        For translation inquiries, helpful details may include content type, languages, volume,
                        timeline, and any quality, technology, or security requirements.
                      </p>
                    </div>
                    <div className="field full">
                      <label htmlFor="attachment">Attach a File</label>
                      <div className="file-control">
                        <Icon name="upload" size={22} />
                        <input id="attachment" name="attachment" type="file" aria-describedby="attachmentHint" />
                      </div>
                      <p className="field-hint" id="attachmentHint">
                        You may attach a relevant document or reference file. Need an NDA or confidentiality
                        discussion before sharing sensitive materials? Mention this in your message.
                      </p>
                    </div>
                  </div>
                  <p className="privacy-copy">
                    By submitting this form, you agree that Stepes may use the information you provide to respond
                    to your inquiry. Please review our{" "}
                    <a href="https://www.stepes.com/legal/privacy/">Privacy Policy</a>.
                  </p>
                  <button className="btn btn-primary form-submit" type="submit">
                    Send Inquiry <Icon name="arrow" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="company-section" aria-labelledby="company-title">
        <div className="shell">
          <div className="company-layout">
            <div className="company-intro">
              <h2 id="company-title">Global Headquarters</h2>
              <p className="lead">
                Stepes is headquartered in San Francisco and supports organizations around the world with
                professional translation, localization technology, and multilingual services.
              </p>
            </div>

            <div>
              <div className="company-details">
                <div className="company-block">
                  <h3>San Francisco</h3>
                  <address>
                    Stepes<br />
                    535 Mission Street, 15th Floor<br />
                    San Francisco, CA 94105<br />
                    United States
                  </address>
                </div>
                <div className="company-block">
                  <h3>Call Stepes</h3>
                  <div className="phone-list">
                    <div className="phone-line">
                      <span>General inquiries</span>
                      <a href="tel:+18006115698">+1 800 611 5698</a>
                    </div>
                    <div className="phone-line">
                      <span>San Francisco office</span>
                      <a href="tel:+14158898989">+1 415 889 8989</a>
                    </div>
                  </div>
                  <div className="company-links">
                    <ArrowLink href="https://www.stepes.com/global-presence/">View Our Global Offices</ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="shell">
          <div className="closing-panel">
            <div>
              <h2 id="closing-title">Not Sure Where to Start?</h2>
              <p>
                Send us a message and tell us what you need. We will help connect you with the right Stepes team.
              </p>
            </div>
            <div className="button-row">
              <a
                className="btn btn-primary"
                href={`${canonical}#general-inquiry`}
                onClick={(event) => scrollToForm(event)}
              >
                Send Us a Message
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
