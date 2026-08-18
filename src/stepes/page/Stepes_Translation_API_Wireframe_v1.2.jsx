import React from "react";

export const pageMetadata = {
  canonical: "https://www.stepes.com/translation-api/",
  title: "Enterprise Translation API for AI + Human Workflows | Stepes",
  description:
    "Connect enterprise systems to AI translation, professional human review, terminology, quality assurance, webhooks, and multilingual content delivery.",
};

const Arrow = () => <span className="api-arrow" aria-hidden="true">→</span>;

const CheckIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5 9.2 17 19 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 19 6v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="10" width="14" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
  </svg>
);

const WebhookIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="7" cy="7" r="2.2" />
    <circle cx="17" cy="7" r="2.2" />
    <circle cx="12" cy="17" r="2.2" />
    <path d="M9 7h6M8.2 8.8l2.7 5.7M15.8 8.8l-2.7 5.7" />
  </svg>
);

const LayersIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
  </svg>
);

const FileIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 3h8l4 4v14H6V3Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.7 5.5 3.7 9S14.5 18.5 12 21c-2.5-2.5-3.7-5.5-3.7-9S9.5 5.5 12 3Z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

const CodeIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13.5 4 10.5 20" />
  </svg>
);

const UsersIcon = () => (
  <svg className="api-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M3.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6M14 15c3.8 0 5.8 1.7 6.5 5" />
  </svg>
);

const EnterpriseNetworkIllustration = () => (
  <svg
    className="api-enterprise-art"
    viewBox="0 0 520 420"
    role="img"
    aria-label="Enterprise systems connected to the Stepes Translation API, quality controls, webhooks, and multilingual delivery"
  >
    <defs>
      <linearGradient id="apiCoreGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FBE6EF" />
      </linearGradient>
      <linearGradient id="apiAccentGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7A1542" />
        <stop offset="100%" stopColor="#C11D63" />
      </linearGradient>
      <filter id="apiArtShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#7A1542" floodOpacity="0.12" />
      </filter>
    </defs>

    <g className="api-art-grid" aria-hidden="true">
      <path d="M48 82H472M48 142H472M48 202H472M48 262H472M48 322H472" />
      <path d="M88 46V374M168 46V374M248 46V374M328 46V374M408 46V374" />
    </g>

    <g className="api-art-routes" aria-hidden="true">
      <path className="api-art-route" d="M145 207C184 207 185 207 212 207" />
      <path className="api-art-route" d="M308 207C348 207 352 196 382 180" />
      <path className="api-art-route" d="M260 156C260 119 262 111 279 90" />
      <path className="api-art-route" d="M260 258C260 296 260 305 242 330" />
      <path className="api-art-route-soft" d="M132 176C171 129 207 94 264 81" />
      <path className="api-art-route-soft" d="M292 88C356 103 394 126 421 158" />
      <path className="api-art-route-soft" d="M397 213C364 275 321 314 266 340" />
    </g>

    <g className="api-art-pulses" aria-hidden="true">
      <circle cx="174" cy="207" r="4" />
      <circle cx="344" cy="201" r="4" />
      <circle cx="260" cy="119" r="4" />
      <circle cx="260" cy="298" r="4" />
    </g>

    <g className="api-art-source" filter="url(#apiArtShadow)">
      <rect x="58" y="151" width="88" height="112" rx="22" />
      <rect x="76" y="174" width="52" height="14" rx="7" />
      <rect x="76" y="199" width="36" height="8" rx="4" />
      <rect x="76" y="217" width="52" height="8" rx="4" />
      <rect x="76" y="235" width="43" height="8" rx="4" />
      <circle cx="126" cy="207" r="5" />
    </g>

    <g className="api-art-core" filter="url(#apiArtShadow)">
      <rect x="211" y="154" width="98" height="106" rx="26" fill="url(#apiCoreGradient)" />
      <rect x="230" y="174" width="60" height="64" rx="18" />
      <path d="m247 194-9 9 9 9M273 194l9 9-9 9M267 187l-14 32" />
      <text x="260" y="248" textAnchor="middle">STEPES API</text>
    </g>

    <g className="api-art-quality" filter="url(#apiArtShadow)">
      <circle cx="284" cy="72" r="46" />
      <path d="M284 48 303 56v13c0 15-7 25-19 31-12-6-19-16-19-31V56l19-8Z" />
      <path d="m274 71 7 7 13-15" />
    </g>

    <g className="api-art-delivery" filter="url(#apiArtShadow)">
      <circle cx="424" cy="178" r="54" />
      <circle cx="424" cy="178" r="26" />
      <path d="M398 178h52M424 152c8 8 12 17 12 26s-4 18-12 26c-8-8-12-17-12-26s4-18 12-26Z" />
      <path d="m446 141 12 3-5 11" />
    </g>

    <g className="api-art-webhook" filter="url(#apiArtShadow)">
      <rect x="188" y="326" width="112" height="62" rx="24" />
      <circle cx="220" cy="357" r="7" />
      <circle cx="268" cy="345" r="7" />
      <circle cx="268" cy="369" r="7" />
      <path d="M227 354 261 347M227 360l34 7" />
    </g>

    <g className="api-art-accent" aria-hidden="true">
      <circle cx="111" cy="126" r="7" />
      <circle cx="449" cy="265" r="6" />
      <path d="M91 126h13M118 126h13M449 245v13M449 272v13" />
    </g>
  </svg>
);

export default function StepesTranslationAPIWireframe() {
  return (
    <main className="translation-api-page">
      <style>{`
        :root {
          --api-magenta: #C11D63;
          --api-magenta-dark: #9F1D55;
          --api-magenta-deep: #7A1542;
          --api-blush: #FDF2F7;
          --api-blush-strong: #FBE6EF;
          --api-pink-light: #F2A7C6;
          --api-ink: #111827;
          --api-body: #3F4B5E;
          --api-muted: #6B778C;
          --api-line: #E2E7EF;
          --api-line-strong: #D3DAE5;
          --api-surface: #F7F9FC;
          --api-white: #FFFFFF;
          --api-dark: #151B27;
          --api-dark-soft: #202838;
          --api-radius-lg: 30px;
          --api-radius-md: 22px;
          --api-shadow: 0 20px 54px rgba(20, 27, 42, 0.08);
        }

        .translation-api-page,
        .translation-api-page * {
          box-sizing: border-box;
        }

        .translation-api-page {
          margin: 0;
          color: var(--api-ink);
          background: var(--api-white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .translation-api-page a {
          color: inherit;
          text-decoration: none;
        }

        .translation-api-page h1,
        .translation-api-page h2,
        .translation-api-page h3,
        .translation-api-page p,
        .translation-api-page a,
        .translation-api-page strong,
        .translation-api-page span {
          overflow-wrap: anywhere;
        }

        .api-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .api-section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .api-section-dense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .api-eyebrow {
          margin: 0 0 16px;
          color: var(--api-magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .api-eyebrow-dark {
          color: var(--api-pink-light);
        }

        .translation-api-page h1,
        .translation-api-page h2,
        .translation-api-page h3,
        .translation-api-page p {
          margin-top: 0;
        }

        .translation-api-page h1,
        .translation-api-page h2,
        .translation-api-page h3 {
          color: var(--api-ink);
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .translation-api-page h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
        }

        .translation-api-page h2 {
          margin-bottom: 24px;
          font-size: 36px;
          line-height: 1.16;
        }

        .translation-api-page h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
        }

        .api-body-large {
          color: var(--api-body);
          font-size: 18px;
          line-height: 1.7;
        }

        .api-body {
          color: var(--api-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .api-section-heading {
          max-width: 820px;
          margin-bottom: 56px;
        }

        .api-section-heading-center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .api-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .api-btn {
          display: inline-flex;
          min-height: 48px;
          padding: 12px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .api-btn-primary,
        .api-btn-primary:link,
        .api-btn-primary:visited,
        .api-btn-primary:hover,
        .api-btn-primary:active,
        .api-btn-primary:focus,
        .api-btn-primary:focus-visible,
        .api-btn-primary span,
        .api-btn-primary svg,
        .api-btn-primary svg path {
          color: #FFFFFF !important;
          fill: none;
          stroke: #FFFFFF !important;
        }

        .api-btn-primary {
          background: var(--api-magenta);
          box-shadow: 0 12px 26px rgba(193, 29, 99, 0.2);
        }

        .api-btn-primary:hover,
        .api-btn-primary:focus-visible {
          background: var(--api-magenta-dark);
          box-shadow: 0 16px 32px rgba(159, 29, 85, 0.24);
          transform: translateY(-1px);
        }

        .api-btn-secondary {
          color: var(--api-ink);
          background: var(--api-white);
          border-color: var(--api-line-strong);
        }

        .api-btn-secondary:hover,
        .api-btn-secondary:focus-visible {
          border-color: var(--api-magenta);
          color: var(--api-magenta-dark);
          transform: translateY(-1px);
        }

        .api-btn:focus-visible,
        .api-text-link:focus-visible,
        .api-faq summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        .api-arrow {
          display: inline-block;
          font-size: 18px;
          line-height: 1;
          transition: transform 180ms ease;
        }

        .api-btn:hover .api-arrow,
        .api-text-link:hover .api-arrow {
          transform: translateX(3px);
        }

        .api-text-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--api-magenta-dark) !important;
          font-size: 16px;
          font-weight: 600;
        }

        .api-text-link:hover {
          color: var(--api-magenta) !important;
        }

        .api-hero {
          position: relative;
          padding-top: 104px;
          padding-bottom: 88px;
          background:
            radial-gradient(circle at 10% 5%, rgba(193, 29, 99, 0.07), transparent 30%),
            radial-gradient(circle at 88% 20%, rgba(159, 29, 85, 0.05), transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #FCFDFE 100%);
        }

        .api-hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--api-line);
        }

        .api-hero-content {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }

        .api-hero h1 {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .api-hero .api-body-large {
          max-width: 820px;
          margin: 0 auto 32px;
        }

        .api-hero .api-btn-row {
          justify-content: center;
        }

        .api-hero-flow {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.25fr 44px 1.1fr 44px 1.3fr 44px 1.1fr;
          align-items: stretch;
          gap: 0;
          max-width: 1168px;
          margin: 64px auto 0;
          padding: 24px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          box-shadow: var(--api-shadow);
        }

        .api-flow-panel {
          min-width: 0;
          padding: 24px;
          background: var(--api-surface);
          border: 1px solid var(--api-line);
          border-radius: 20px;
        }

        .api-flow-panel-accent {
          background: var(--api-blush);
          border-color: #F1CDDC;
        }

        .api-flow-label {
          margin: 0 0 10px;
          color: var(--api-magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .api-flow-title {
          margin: 0 0 12px;
          color: var(--api-ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .api-flow-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .api-flow-chip {
          display: inline-flex;
          min-height: 30px;
          padding: 5px 10px;
          border-radius: 999px;
          align-items: center;
          background: var(--api-white);
          border: 1px solid var(--api-line);
          color: var(--api-body);
          font-size: 14px;
          line-height: 1.3;
        }

        .api-flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--api-magenta);
          font-size: 24px;
          font-weight: 600;
        }

        .api-proof {
          border-bottom: 1px solid var(--api-line);
          background: var(--api-white);
        }

        .api-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .api-proof-item {
          min-width: 0;
          padding: 28px 30px;
          border-right: 1px solid var(--api-line);
        }

        .api-proof-item:last-child {
          border-right: 0;
        }

        .api-proof-item strong {
          display: block;
          margin-bottom: 4px;
          color: var(--api-ink);
          font-size: 17px;
          font-weight: 600;
        }

        .api-proof-item span {
          color: var(--api-body);
          font-size: 16px;
          line-height: 1.5;
        }

        .api-overview-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 80px;
          align-items: start;
        }

        .api-editorial-grid {
          border-top: 1px solid var(--api-line);
        }

        .api-editorial-row {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 20px;
          padding: 26px 0;
          border-bottom: 1px solid var(--api-line);
          align-items: start;
        }

        .api-icon-box {
          display: flex;
          width: 44px;
          height: 44px;
          border: 1px solid #F0D3DF;
          border-radius: 14px;
          align-items: center;
          justify-content: center;
          background: var(--api-blush);
          color: var(--api-magenta-dark);
        }

        .api-icon {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .api-editorial-row h3 {
          margin-bottom: 8px;
          font-size: 20px;
        }

        .api-editorial-row p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .api-quality-section {
          background: var(--api-surface);
        }

        .api-quality-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .api-quality-intro {
          position: sticky;
          top: 32px;
        }

        .api-quality-list {
          background: var(--api-white);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          box-shadow: 0 12px 34px rgba(20, 27, 42, 0.05);
          overflow: hidden;
        }

        .api-quality-row {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 20px;
          padding: 28px 30px;
          border-bottom: 1px solid var(--api-line);
          align-items: start;
        }

        .api-quality-row:last-child {
          border-bottom: 0;
        }

        .api-quality-row h3 {
          margin-bottom: 8px;
          font-size: 20px;
        }

        .api-quality-row p {
          margin-bottom: 12px;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-workflow-section {
          color: var(--api-white);
          background: var(--api-dark);
        }

        .api-workflow-section h2,
        .api-workflow-section h3 {
          color: var(--api-white);
        }

        .api-workflow-section .api-body-large,
        .api-workflow-section .api-body {
          color: #CCD3DF;
        }

        .api-workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 56px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-left: 1px solid rgba(255, 255, 255, 0.16);
        }

        .api-workflow-step {
          position: relative;
          min-width: 0;
          padding: 34px 30px 36px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .api-workflow-step:nth-child(3n) {
          border-right: 0;
        }

        .api-workflow-step:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .api-step-number {
          display: inline-flex;
          width: 36px;
          height: 36px;
          margin-bottom: 24px;
          border: 1px solid rgba(242, 167, 198, 0.45);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: var(--api-pink-light);
          font-size: 14px;
          font-weight: 600;
        }

        .api-workflow-step h3 {
          min-height: 0;
          margin-bottom: 12px;
          font-size: 19px;
          line-height: 1.35;
        }

        .api-workflow-step p {
          margin-bottom: 0;
          color: #BCC6D5;
          font-size: 16px;
          line-height: 1.65;
        }

        .api-content-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--api-line);
          border-left: 1px solid var(--api-line);
        }

        .api-content-item {
          min-width: 0;
          min-height: 270px;
          padding: 32px;
          border-right: 1px solid var(--api-line);
          border-bottom: 1px solid var(--api-line);
        }

        .api-content-item .api-icon-box {
          margin-bottom: 24px;
        }

        .api-content-item h3 {
          margin-bottom: 12px;
          font-size: 21px;
        }

        .api-content-item p {
          margin-bottom: 18px;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-benefits-band {
          background: var(--api-blush);
        }

        .api-benefits-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 72px;
          align-items: start;
        }

        .api-benefits-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: #EACFDA;
          border: 1px solid #EACFDA;
          border-radius: var(--api-radius-lg);
          overflow: hidden;
        }

        .api-benefit-item {
          min-width: 0;
          padding: 30px;
          background: rgba(255, 255, 255, 0.86);
        }

        .api-benefit-item h3 {
          margin-bottom: 8px;
          font-size: 20px;
        }

        .api-benefit-item p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-use-cases {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 36px;
          border-top: 1px solid var(--api-line);
        }

        .api-use-case {
          padding: 30px 0;
          border-bottom: 1px solid var(--api-line);
        }

        .api-use-case h3 {
          margin-bottom: 10px;
          font-size: 21px;
        }

        .api-use-case p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-security-section {
          background: var(--api-dark-soft);
        }

        .api-security-section h2,
        .api-security-section h3 {
          color: var(--api-white);
        }

        .api-security-section .api-body-large,
        .api-security-section .api-body {
          color: #C7CFDC;
        }

        .api-security-link {
          margin-top: 34px;
        }

        .api-security-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .api-security-item {
          min-width: 0;
          padding: 30px;
          border-right: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .api-security-item .api-icon-box {
          margin-bottom: 22px;
          border-color: rgba(242, 167, 198, 0.28);
          background: rgba(193, 29, 99, 0.12);
          color: var(--api-pink-light);
        }

        .api-security-item h3 {
          margin-bottom: 10px;
          font-size: 19px;
        }

        .api-security-item p {
          margin-bottom: 0;
          color: #BAC4D3;
          font-size: 16px;
        }

        .api-webhook-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 72px;
          align-items: center;
        }

        .api-event-panel {
          position: relative;
          padding: 30px;
          background: var(--api-white);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          box-shadow: var(--api-shadow);
          overflow: hidden;
        }

        .api-event-panel::before {
          content: "";
          position: absolute;
          width: 128px;
          height: 128px;
          right: 18px;
          top: 18px;
          border-radius: 50%;
          background: rgba(193, 29, 99, 0.06);
          pointer-events: none;
        }

        .api-event-header {
          display: flex;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--api-line);
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .api-event-header strong {
          font-size: 18px;
          font-weight: 600;
        }

        .api-status {
          display: inline-flex;
          min-height: 30px;
          padding: 5px 11px;
          border-radius: 999px;
          align-items: center;
          background: #EDF8F1;
          color: #24724A;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .api-event-header,
        .api-event-list {
          position: relative;
          z-index: 1;
        }

        .api-event-list {
          display: grid;
          gap: 0;
        }

        .api-event {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr) auto;
          gap: 14px;
          padding: 18px 0;
          border-bottom: 1px solid var(--api-line);
          align-items: center;
        }

        .api-event:last-child {
          border-bottom: 0;
        }

        .api-event-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--api-magenta);
        }

        .api-event strong {
          display: block;
          color: var(--api-ink);
          font-size: 16px;
          font-weight: 600;
        }

        .api-event span {
          color: var(--api-muted);
          font-size: 14px;
        }

        .api-integration-section {
          background: var(--api-surface);
        }

        .api-integration-table {
          background: var(--api-white);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          overflow: hidden;
        }

        .api-integration-row {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr) minmax(180px, 0.6fr);
          gap: 32px;
          padding: 30px 34px;
          border-bottom: 1px solid var(--api-line);
          align-items: center;
        }

        .api-integration-row:last-child {
          border-bottom: 0;
        }

        .api-integration-name {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .api-integration-name h3 {
          margin-bottom: 0;
          font-size: 20px;
        }

        .api-integration-row p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-integration-action {
          justify-self: end;
        }

        .api-platform-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--api-line);
          border-left: 1px solid var(--api-line);
        }

        .api-platform-link {
          display: flex;
          min-width: 0;
          min-height: 154px;
          padding: 28px;
          border-right: 1px solid var(--api-line);
          border-bottom: 1px solid var(--api-line);
          flex-direction: column;
          justify-content: space-between;
          transition: background 180ms ease, color 180ms ease;
        }

        .api-platform-link:hover,
        .api-platform-link:focus-visible {
          background: var(--api-blush);
        }

        .api-platform-link strong {
          color: var(--api-ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .api-platform-link span {
          color: var(--api-magenta-dark);
          font-size: 16px;
          font-weight: 600;
        }

        .api-support-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.74fr) minmax(0, 1.26fr);
          gap: 72px;
          align-items: start;
        }

        .api-support-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          background: var(--api-white);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          box-shadow: 0 12px 34px rgba(20, 27, 42, 0.05);
          overflow: hidden;
        }

        .api-support-item {
          min-width: 0;
          padding: 28px;
          border-right: 1px solid var(--api-line);
          border-bottom: 1px solid var(--api-line);
        }

        .api-support-item:nth-child(2n) {
          border-right: 0;
        }

        .api-support-item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .api-support-item h3 {
          margin-bottom: 8px;
          font-size: 19px;
        }

        .api-support-item p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
        }

        .api-faq-wrap {
          max-width: 980px;
          margin: 0 auto;
          background: var(--api-white);
          border: 1px solid var(--api-line);
          border-radius: var(--api-radius-lg);
          overflow: hidden;
        }

        .api-faq {
          border-bottom: 1px solid var(--api-line);
        }

        .api-faq:last-child {
          border-bottom: 0;
        }

        .api-faq summary {
          position: relative;
          display: flex;
          min-height: 72px;
          padding: 22px 68px 22px 28px;
          align-items: center;
          color: var(--api-ink);
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          list-style: none;
        }

        .api-faq summary::-webkit-details-marker {
          display: none;
        }

        .api-faq summary::after {
          content: "+";
          position: absolute;
          right: 28px;
          top: 50%;
          width: 28px;
          height: 28px;
          margin-top: -14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--api-magenta-dark);
          background: var(--api-blush);
          font-size: 20px;
          font-weight: 400;
        }

        .api-faq[open] summary::after {
          content: "−";
        }

        .api-faq-answer {
          max-width: 840px;
          padding: 0 68px 26px 28px;
        }

        .api-faq-answer p {
          margin-bottom: 0;
          color: var(--api-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .api-final-cta {
          padding: 0 0 96px;
          background: var(--api-white);
        }

        .api-final-panel {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.24fr) minmax(380px, 0.76fr);
          min-height: 410px;
          border: 1px solid #EBC6D5;
          border-radius: var(--api-radius-lg);
          background: linear-gradient(120deg, #FDF2F7 0%, #FFF9FB 56%, #FFFFFF 100%);
          box-shadow: 0 24px 62px rgba(122, 21, 66, 0.08);
          overflow: hidden;
        }

        .api-final-panel::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--api-magenta) 0%, var(--api-magenta-deep) 100%);
        }

        .api-final-copy {
          position: relative;
          z-index: 2;
          padding: 68px 56px 68px 68px;
          align-self: center;
        }

        .api-final-copy h2 {
          max-width: 680px;
        }

        .api-final-copy .api-body-large {
          max-width: 700px;
          margin-bottom: 30px;
        }

        .api-final-visual {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 410px;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 75% 28%, rgba(193, 29, 99, 0.12), transparent 34%),
            linear-gradient(145deg, rgba(247, 216, 229, 0.68) 0%, rgba(252, 238, 244, 0.72) 52%, rgba(255, 255, 255, 0.96) 100%);
          border-left: 1px solid rgba(193, 29, 99, 0.12);
          isolation: isolate;
          overflow: hidden;
        }

        .api-final-visual::before {
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(159, 29, 85, 0.12);
          border-radius: 24px;
          pointer-events: none;
        }

        .api-enterprise-art {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: auto;
          max-height: 410px;
          padding: 24px 18px;
        }

        .api-art-grid {
          fill: none;
          stroke: rgba(122, 21, 66, 0.07);
          stroke-width: 1;
        }

        .api-art-route,
        .api-art-route-soft {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .api-art-route {
          stroke: url(#apiAccentGradient);
          stroke-width: 2.4;
        }

        .api-art-route-soft {
          stroke: rgba(122, 21, 66, 0.22);
          stroke-width: 1.4;
          stroke-dasharray: 4 8;
        }

        .api-art-pulses circle {
          fill: var(--api-magenta);
          stroke: #FFFFFF;
          stroke-width: 2;
        }

        .api-art-source rect:first-child,
        .api-art-quality circle,
        .api-art-delivery > circle:first-child,
        .api-art-webhook rect {
          fill: rgba(255, 255, 255, 0.92);
          stroke: #DDB5C6;
          stroke-width: 1.6;
        }

        .api-art-source rect:not(:first-child) {
          fill: #F4DCE6;
          stroke: none;
        }

        .api-art-source circle,
        .api-art-accent circle {
          fill: var(--api-magenta);
          stroke: #FFFFFF;
          stroke-width: 2;
        }

        .api-art-core > rect:first-of-type {
          stroke: #D8AFC0;
          stroke-width: 1.8;
        }

        .api-art-core > rect:nth-of-type(2) {
          fill: rgba(255, 255, 255, 0.86);
          stroke: #D9B5C4;
          stroke-width: 1.4;
        }

        .api-art-core path,
        .api-art-quality path,
        .api-art-delivery path,
        .api-art-webhook path,
        .api-art-accent path {
          fill: none;
          stroke: var(--api-magenta-dark);
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .api-art-core text {
          fill: var(--api-magenta-deep);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
        }

        .api-art-delivery > circle:nth-child(2) {
          fill: none;
          stroke: var(--api-magenta-dark);
          stroke-width: 1.8;
        }

        .api-art-webhook circle {
          fill: #FFFFFF;
          stroke: var(--api-magenta-dark);
          stroke-width: 2;
        }

        .api-integration-name,
        .api-integration-name h3,
        .api-platform-link,
        .api-support-item,
        .api-content-item,
        .api-security-item {
          min-width: 0;
        }

        .api-event strong {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        @media (max-width: 1199px) {
          .api-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .api-hero-flow {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
          }

          .api-flow-arrow {
            display: none;
          }

          .api-proof-item {
            padding-left: 22px;
            padding-right: 22px;
          }

          .api-security-grid,
          .api-platform-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .api-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .translation-api-page h1 {
            font-size: 42px;
          }

          .translation-api-page h2 {
            font-size: 32px;
          }

          .translation-api-page h3 {
            font-size: 22px;
          }

          .api-section,
          .api-section-dense {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .api-hero {
            padding-top: 88px;
            padding-bottom: 72px;
          }

          .api-hero-flow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .api-proof-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .api-proof-item:nth-child(2) {
            border-right: 0;
          }

          .api-proof-item:nth-child(-n + 2) {
            border-bottom: 1px solid var(--api-line);
          }

          .api-overview-grid,
          .api-quality-layout,
          .api-benefits-layout,
          .api-webhook-layout,
          .api-support-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .api-quality-intro {
            position: static;
          }

          .api-workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .api-workflow-step:nth-child(3n) {
            border-right: 1px solid rgba(255, 255, 255, 0.16);
          }

          .api-workflow-step:nth-child(2n) {
            border-right: 0;
          }

          .api-workflow-step:nth-last-child(-n + 3) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }

          .api-workflow-step:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .api-content-grid,
          .api-use-cases {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .api-integration-row {
            grid-template-columns: minmax(200px, 0.8fr) minmax(0, 1.2fr);
          }

          .api-integration-action {
            grid-column: 1 / -1;
            justify-self: start;
          }

          .api-final-panel {
            grid-template-columns: 1fr;
          }

          .api-final-copy {
            padding: 52px;
          }

          .api-final-visual {
            min-height: 300px;
            border-left: 0;
            border-top: 1px solid rgba(193, 29, 99, 0.12);
          }

          .api-enterprise-art {
            max-height: 300px;
            padding: 14px 24px;
          }
        }

        @media (max-width: 640px) {
          .api-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .translation-api-page h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .translation-api-page h2 {
            font-size: 30px;
          }

          .translation-api-page h3 {
            font-size: 20px;
          }

          .api-body-large {
            font-size: 17px;
          }

          .api-section,
          .api-section-dense {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .api-section-heading {
            margin-bottom: 40px;
          }

          .api-hero {
            padding-top: 72px;
            padding-bottom: 64px;
          }

          .api-hero h1 {
            max-width: 100%;
          }

          .api-hero .api-btn-row,
          .api-final-copy .api-btn-row {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .api-hero .api-btn,
          .api-final-copy .api-btn {
            width: 100%;
          }

          .api-hero-flow {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 48px;
            padding: 14px;
            border-radius: 24px;
          }

          .api-flow-panel {
            padding: 20px;
          }

          .api-proof-grid {
            grid-template-columns: 1fr;
          }

          .api-proof-item,
          .api-proof-item:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--api-line);
          }

          .api-proof-item:last-child {
            border-bottom: 0;
          }

          .api-editorial-row,
          .api-quality-row {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 16px;
          }

          .api-icon-box {
            width: 40px;
            height: 40px;
          }

          .api-workflow-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .api-workflow-step,
          .api-workflow-step:nth-child(2n),
          .api-workflow-step:nth-child(3n) {
            display: grid;
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 16px;
            padding: 26px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }

          .api-step-number {
            margin-bottom: 0;
            align-self: start;
          }

          .api-workflow-step h3 {
            min-height: 0;
            margin-bottom: 8px;
          }

          .api-workflow-step p {
            grid-column: 2;
          }

          .api-workflow-step:last-child {
            border-bottom: 0;
          }

          .api-content-grid,
          .api-use-cases,
          .api-benefits-list,
          .api-security-grid,
          .api-platform-grid,
          .api-support-panel {
            grid-template-columns: 1fr;
          }

          .api-content-item {
            min-height: 0;
            padding: 28px;
          }

          .api-benefit-item,
          .api-security-item,
          .api-platform-link,
          .api-support-item {
            border-right: 0;
          }

          .api-support-item:nth-last-child(-n + 2) {
            border-bottom: 1px solid var(--api-line);
          }

          .api-support-item:last-child {
            border-bottom: 0;
          }

          .api-event-panel {
            padding: 22px;
          }

          .api-event-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .api-event {
            grid-template-columns: 12px minmax(0, 1fr);
          }

          .api-event strong {
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          .api-event > span:last-child {
            grid-column: 2;
          }

          .api-integration-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 26px 24px;
          }

          .api-integration-action {
            grid-column: auto;
          }

          .api-faq summary {
            min-height: 68px;
            padding: 20px 58px 20px 22px;
            font-size: 17px;
          }

          .api-faq summary::after {
            right: 20px;
          }

          .api-faq-answer {
            padding: 0 22px 24px;
          }

          .api-final-cta {
            padding-bottom: 68px;
          }

          .api-final-copy {
            padding: 40px 24px;
          }

          .api-final-visual {
            min-height: 250px;
          }

          .api-final-visual::before {
            inset: 14px;
            border-radius: 20px;
          }

          .api-enterprise-art {
            max-height: 250px;
            padding: 10px 8px;
          }
        }

        @media (max-width: 340px) {
          .api-flow-chip {
            width: 100%;
            justify-content: center;
          }

          .api-editorial-row,
          .api-quality-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="api-hero">
        <div className="api-shell">
          <div className="api-hero-content">
            <p className="api-eyebrow">Translation API</p>
            <h1>Enterprise Translation API for AI + Human Workflows</h1>
            <p className="api-body-large">
              Connect applications, content platforms, and enterprise systems to configurable translation workflows combining AI translation, professional human review, terminology, translation memory, quality assurance, approvals, and secure multilingual delivery.
            </p>
            <div className="api-btn-row">
              <a className="api-btn api-btn-primary" href="https://www.stepes.com/contact-us/">
                <span>Request API Access</span><Arrow />
              </a>
              <a className="api-btn api-btn-secondary" href="https://www.stepes.com/developers/translation-api/">
                Explore Developer Documentation <Arrow />
              </a>
            </div>
          </div>

          <div className="api-hero-flow" aria-label="Translation API workflow overview">
            <div className="api-flow-panel">
              <p className="api-flow-label">Content Systems</p>
              <p className="api-flow-title">Connect the platforms where content begins.</p>
              <div className="api-flow-list">
                <span className="api-flow-chip">CMS</span>
                <span className="api-flow-chip">PIM</span>
                <span className="api-flow-chip">Support</span>
                <span className="api-flow-chip">Applications</span>
              </div>
            </div>
            <div className="api-flow-arrow" aria-hidden="true">→</div>
            <div className="api-flow-panel api-flow-panel-accent">
              <p className="api-flow-label">Stepes API</p>
              <p className="api-flow-title">Submit content and configure each workflow.</p>
              <div className="api-flow-list">
                <span className="api-flow-chip">REST API</span>
                <span className="api-flow-chip">Projects</span>
                <span className="api-flow-chip">Languages</span>
              </div>
            </div>
            <div className="api-flow-arrow" aria-hidden="true">→</div>
            <div className="api-flow-panel">
              <p className="api-flow-label">Quality Path</p>
              <p className="api-flow-title">Match translation quality to the content.</p>
              <div className="api-flow-list">
                <span className="api-flow-chip">AI</span>
                <span className="api-flow-chip">AI + Human</span>
                <span className="api-flow-chip">Professional Human</span>
              </div>
            </div>
            <div className="api-flow-arrow" aria-hidden="true">→</div>
            <div className="api-flow-panel">
              <p className="api-flow-label">Delivery</p>
              <p className="api-flow-title">Return approved multilingual content.</p>
              <div className="api-flow-list">
                <span className="api-flow-chip">Webhooks</span>
                <span className="api-flow-chip">Status</span>
                <span className="api-flow-chip">Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-proof" aria-label="Translation API highlights">
        <div className="api-shell api-proof-grid">
          <div className="api-proof-item">
            <strong>100+ Languages</strong>
            <span>Global language and regional-market coverage</span>
          </div>
          <div className="api-proof-item">
            <strong>AI + Human Quality</strong>
            <span>Automation with professional linguistic expertise</span>
          </div>
          <div className="api-proof-item">
            <strong>Asynchronous Workflows</strong>
            <span>Reliable processing for complex multilingual jobs</span>
          </div>
          <div className="api-proof-item">
            <strong>Signed Webhooks</strong>
            <span>Secure event-driven workflow updates</span>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell api-overview-grid">
          <div>
            <p className="api-eyebrow">Connected Language Operations</p>
            <h2>Build Translation Into the Systems Your Teams Already Use</h2>
            <p className="api-body-large">
              Enterprise content is created across content management systems, product databases, support platforms, applications, repositories, and business workflows. The Stepes Translation API connects translation directly to those systems so multilingual content can move without disconnected handoffs.
            </p>
          </div>
          <div className="api-editorial-grid">
            <div className="api-editorial-row">
              <span className="api-icon-box"><LayersIcon /></span>
              <div>
                <h3>Automate Content Handoffs</h3>
                <p>Send translation requests from your existing applications and return approved results to the correct source system.</p>
              </div>
            </div>
            <div className="api-editorial-row">
              <span className="api-icon-box"><CheckIcon /></span>
              <div>
                <h3>Match Quality to Each Use Case</h3>
                <p>Apply AI translation, professional review, specialized human translation, quality assurance, and approval according to content visibility and risk.</p>
              </div>
            </div>
            <div className="api-editorial-row">
              <span className="api-icon-box"><WebhookIcon /></span>
              <div>
                <h3>Keep Multilingual Content Moving</h3>
                <p>Use job status, workflow events, and delivery notifications to coordinate translation across teams, markets, and content platforms.</p>
              </div>
            </div>
            <div className="api-editorial-row">
              <span className="api-icon-box"><GlobeIcon /></span>
              <div>
                <h3>Standardize Global Operations</h3>
                <p>Create repeatable processes across business units while maintaining the context, terminology, quality controls, and governance each workflow requires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section api-quality-section">
        <div className="api-shell api-quality-layout">
          <div className="api-quality-intro">
            <p className="api-eyebrow">Configurable Quality</p>
            <h2>One Translation API, Multiple Quality Workflows</h2>
            <p className="api-body-large">
              Not every piece of content needs the same translation process. Stepes lets you select the right quality path for each content type while maintaining one connected API framework.
            </p>
          </div>
          <div className="api-quality-list">
            <div className="api-quality-row">
              <span className="api-icon-box"><CodeIcon /></span>
              <div>
                <h3>AI Translation</h3>
                <p>Use AI-powered translation for high-volume, frequently updated, internal, time-sensitive, or review-bound content.</p>
                <p><strong>Best suited for:</strong> recurring updates, searchable knowledge, initial drafts, internal communications, and lower-risk content.</p>
              </div>
            </div>
            <div className="api-quality-row">
              <span className="api-icon-box"><UsersIcon /></span>
              <div>
                <h3>AI Translation + Professional Review</h3>
                <p>Combine AI speed with review by professional linguists who refine accuracy, terminology, fluency, tone, context, and audience fit.</p>
                <p><strong>Best suited for:</strong> websites, product information, technical content, customer support, training, and customer-facing communications.</p>
              </div>
            </div>
            <div className="api-quality-row">
              <span className="api-icon-box"><GlobeIcon /></span>
              <div>
                <h3>Professional Human Translation</h3>
                <p>Route specialized, sensitive, regulated, or high-impact content through professional translators with the appropriate subject-matter expertise.</p>
                <p><strong>Best suited for:</strong> legal, medical, financial, regulatory, clinical, technical, and corporate content.</p>
              </div>
            </div>
            <div className="api-quality-row">
              <span className="api-icon-box"><CheckIcon /></span>
              <div>
                <h3>Quality Assurance and Approval</h3>
                <p>Add automated checks, linguistic quality assurance, subject-matter review, stakeholder approval, or controlled publishing stages to the workflow.</p>
                <p><strong>Best suited for:</strong> regulated communications, product releases, brand-sensitive content, and controlled publishing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section api-workflow-section">
        <div className="api-shell">
          <div className="api-section-heading">
            <p className="api-eyebrow api-eyebrow-dark">How It Works</p>
            <h2>Connect Translation to Your Content Architecture</h2>
            <p className="api-body-large">
              Use a repeatable workflow to submit content, configure languages and quality, track progress, and return approved multilingual results to the right system.
            </p>
          </div>
          <div className="api-workflow-grid">
            <div className="api-workflow-step">
              <span className="api-step-number">01</span>
              <h3>Connect Your Application</h3>
              <p>Configure approved server-side access for development, testing, or production.</p>
            </div>
            <div className="api-workflow-step">
              <span className="api-step-number">02</span>
              <h3>Submit Content</h3>
              <p>Send text, structured content, business documents, localization resources, or supported files.</p>
            </div>
            <div className="api-workflow-step">
              <span className="api-step-number">03</span>
              <h3>Configure the Workflow</h3>
              <p>Define languages, quality paths, terminology, translation memory, review, and approval requirements.</p>
            </div>
            <div className="api-workflow-step">
              <span className="api-step-number">04</span>
              <h3>Translate and Review</h3>
              <p>Route content through the selected AI, professional translation, and quality workflow.</p>
            </div>
            <div className="api-workflow-step">
              <span className="api-step-number">05</span>
              <h3>Track Progress</h3>
              <p>Monitor projects and language jobs through status resources and signed webhook events.</p>
            </div>
            <div className="api-workflow-step">
              <span className="api-step-number">06</span>
              <h3>Retrieve Results</h3>
              <p>Return completed multilingual content to the originating application, repository, or business system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell">
          <div className="api-section-heading api-section-heading-center">
            <p className="api-eyebrow">Enterprise Content Coverage</p>
            <h2>Translate the Content Your Business Depends On</h2>
            <p className="api-body-large">
              Support broad enterprise translation automation across content formats, business functions, and global operations.
            </p>
          </div>
          <div className="api-content-grid">
            <article className="api-content-item">
              <span className="api-icon-box"><CodeIcon /></span>
              <h3>Text and Structured Data</h3>
              <p>Translate interface text, database content, field values, JSON-based content, customer communications, and other structured language assets.</p>
            </article>
            <article className="api-content-item">
              <span className="api-icon-box"><FileIcon /></span>
              <h3>Business Documents</h3>
              <p>Submit documents used by marketing, legal, finance, HR, operations, training, product, support, and executive teams.</p>
            </article>
            <article className="api-content-item">
              <span className="api-icon-box"><DatabaseIcon /></span>
              <h3>Product and E-commerce Content</h3>
              <p>Translate product descriptions, catalogs, attributes, specifications, marketplace content, and recurring commercial updates.</p>
            </article>
            <article className="api-content-item">
              <span className="api-icon-box"><UsersIcon /></span>
              <h3>Customer Support Content</h3>
              <p>Connect help centers, knowledge bases, service documentation, chatbot content, customer emails, and support communications.</p>
            </article>
            <article className="api-content-item">
              <span className="api-icon-box"><GlobeIcon /></span>
              <h3>Marketing and Digital Content</h3>
              <p>Translate campaigns, landing pages, emails, product launches, brand messaging, and other digital experiences.</p>
            </article>
            <article className="api-content-item">
              <span className="api-icon-box"><LayersIcon /></span>
              <h3>Technical Documentation and Product Content</h3>
              <p>Process manuals, specifications, service documentation, application content, release communications, and technical updates.</p>
              <a className="api-text-link" href="https://www.stepes.com/developers/software-localization-api/">Explore the Software Localization API <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="api-section api-benefits-band">
        <div className="api-shell api-benefits-layout">
          <div>
            <p className="api-eyebrow">Language Assets and Governance</p>
            <h2>Control More Than Translation</h2>
            <p className="api-body-large">
              Connect context, approved terminology, translation memory, quality controls, review responsibilities, and publishing requirements to each workflow.
            </p>
          </div>
          <div className="api-benefits-list">
            <div className="api-benefit-item">
              <h3>Translation Memory</h3>
              <p>Reuse previously approved translations to improve consistency and reduce unnecessary retranslation.</p>
              <a className="api-text-link" href="https://www.stepes.com/translation-memory/">Explore Translation Memory <Arrow /></a>
            </div>
            <div className="api-benefit-item">
              <h3>Terminology Management</h3>
              <p>Apply approved product names, technical terms, regulated wording, and brand language across markets.</p>
              <a className="api-text-link" href="https://www.stepes.com/terminology-management/">Explore Terminology Management <Arrow /></a>
            </div>
            <div className="api-benefit-item">
              <h3>Context and Guidance</h3>
              <p>Provide audience, purpose, subject matter, tone, interface location, formatting, and intended-use instructions.</p>
            </div>
            <div className="api-benefit-item">
              <h3>Configurable Review</h3>
              <p>Determine which content uses AI, professional post-editing, full human translation, subject-matter review, or approval.</p>
            </div>
            <div className="api-benefit-item">
              <h3>Translation Quality Assurance</h3>
              <p>Apply automated and human controls for terminology, completeness, consistency, formatting, and acceptance criteria.</p>
              <a className="api-text-link" href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance <Arrow /></a>
            </div>
            <div className="api-benefit-item">
              <h3>Traceability</h3>
              <p>Associate activity with source systems, project records, target languages, reviews, approvals, and deliveries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell">
          <div className="api-section-heading">
            <h2>Translation API Use Cases</h2>
            <p className="api-body-large">Integrate multilingual workflows wherever enterprise content is created, updated, reviewed, and delivered.</p>
          </div>
          <div className="api-use-cases">
            <article className="api-use-case">
              <h3>CMS and Digital Publishing</h3>
              <p>Submit new and updated pages, articles, campaigns, and structured content for translation and return approved versions for publishing.</p>
            </article>
            <article className="api-use-case">
              <h3>Product Information Management</h3>
              <p>Translate product descriptions, specifications, attributes, categories, support content, and commercial data across markets.</p>
            </article>
            <article className="api-use-case">
              <h3>Multilingual Customer Support</h3>
              <p>Connect support portals, knowledge bases, ticketing systems, service documentation, and customer communications.</p>
            </article>
            <article className="api-use-case">
              <h3>Technical Content Operations</h3>
              <p>Integrate document repositories, authoring environments, knowledge systems, and technical publishing workflows.</p>
            </article>
            <article className="api-use-case">
              <h3>Enterprise Document Workflows</h3>
              <p>Standardize translation requests across legal, HR, finance, marketing, procurement, operations, and compliance.</p>
            </article>
            <article className="api-use-case">
              <h3>AI-Generated Content</h3>
              <p>Route enterprise AI content through terminology, contextual guidance, professional review, quality assurance, and approval before external use.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="api-section api-security-section">
        <div className="api-shell">
          <div className="api-section-heading">
            <p className="api-eyebrow api-eyebrow-dark">Enterprise Reliability</p>
            <h2>Designed for Secure, Predictable Integrations</h2>
            <p className="api-body-large">
              Production translation workflows often process files, coordinate multiple target languages, involve reviewers, and deliver results over time. Stepes supports these operational requirements with secure access, durable processing, and traceable delivery.
            </p>
          </div>
          <div className="api-security-grid">
            <article className="api-security-item">
              <span className="api-icon-box"><ShieldIcon /></span>
              <h3>Server-Side Authentication</h3>
              <p>Keep credentials in approved server-side environments rather than browser code, public repositories, or client-side configuration.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><UsersIcon /></span>
              <h3>Controlled Access</h3>
              <p>Align credentials, permissions, environments, and integration responsibilities with enterprise governance.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><LayersIcon /></span>
              <h3>Environment Separation</h3>
              <p>Maintain appropriate separation between development, testing, and production activity.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><WebhookIcon /></span>
              <h3>Asynchronous Processing</h3>
              <p>Monitor translation, review, quality assurance, and approval workflows without holding application requests open.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><CheckIcon /></span>
              <h3>Safe Retries</h3>
              <p>Recover from temporary interruptions while reducing unintended duplicate translation requests.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><CodeIcon /></span>
              <h3>Structured Errors</h3>
              <p>Use consistent error information and request identifiers to troubleshoot failed requests.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><LockIcon /></span>
              <h3>Encrypted Communication</h3>
              <p>Protect content and request data while it moves between your enterprise systems and Stepes.</p>
            </article>
            <article className="api-security-item">
              <span className="api-icon-box"><FileIcon /></span>
              <h3>Traceable Delivery</h3>
              <p>Connect completed deliverables to the correct project, language, workflow state, and source-system record.</p>
            </article>
          </div>
          <div className="api-security-link">
            <a className="api-text-link" href="https://www.stepes.com/security/">Explore Enterprise Security <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell api-webhook-layout">
          <div>
            <p className="api-eyebrow">Event-Driven Automation</p>
            <h2>Secure Webhooks for Translation Workflows</h2>
            <p className="api-body-large">
              Receive signed events when projects, target-language jobs, reviews, approvals, exceptions, and deliveries change. Your systems can update records, notify stakeholders, retrieve results, and resume downstream workflows.
            </p>
            <a className="api-text-link" href="https://www.stepes.com/developers/webhooks/">Explore Webhooks Documentation <Arrow /></a>
          </div>
          <div className="api-event-panel" aria-label="Illustrative webhook event activity">
            <div className="api-event-header">
              <strong>Example Webhook Activity</strong>
              <span className="api-status">Endpoint Configured</span>
            </div>
            <div className="api-event-list">
              <div className="api-event">
                <span className="api-event-dot" aria-hidden="true"></span>
                <div><strong>Project Accepted</strong><span>Project created and validated</span></div>
                <span>09:12</span>
              </div>
              <div className="api-event">
                <span className="api-event-dot" aria-hidden="true"></span>
                <div><strong>French Review Ready</strong><span>Professional review is available</span></div>
                <span>10:46</span>
              </div>
              <div className="api-event">
                <span className="api-event-dot" aria-hidden="true"></span>
                <div><strong>German Content Approved</strong><span>Target-language content approved</span></div>
                <span>11:08</span>
              </div>
              <div className="api-event">
                <span className="api-event-dot" aria-hidden="true"></span>
                <div><strong>Delivery Completed</strong><span>Approved results are available</span></div>
                <span>11:22</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section api-integration-section">
        <div className="api-shell">
          <div className="api-section-heading">
            <h2>Choose the Right Stepes Integration</h2>
            <p className="api-body-large">Select the integration model that best matches where your content lives and how translated results must be delivered.</p>
          </div>
          <div className="api-integration-table">
            <div className="api-integration-row">
              <div className="api-integration-name"><span className="api-icon-box"><CodeIcon /></span><h3>Translation API</h3></div>
              <p>For text, structured data, business documents, content files, product information, customer communications, and general enterprise translation workflows.</p>
              <a className="api-text-link api-integration-action" href="https://www.stepes.com/developers/translation-api/">View Documentation <Arrow /></a>
            </div>
            <div className="api-integration-row">
              <div className="api-integration-name"><span className="api-icon-box"><LayersIcon /></span><h3>Software Localization API</h3></div>
              <p>For resource files, translation keys, branches, placeholders, plural rules, repositories, CI/CD workflows, and localized release builds.</p>
              <a className="api-text-link api-integration-action" href="https://www.stepes.com/developers/software-localization-api/">Explore the API <Arrow /></a>
            </div>
            <div className="api-integration-row">
              <div className="api-integration-name"><span className="api-icon-box"><GlobeIcon /></span><h3>Website Translation Proxy</h3></div>
              <p>For managed multilingual website delivery without building a conventional content exchange integration.</p>
              <a className="api-text-link api-integration-action" href="https://www.stepes.com/website-translation-proxy/">Explore the Proxy <Arrow /></a>
            </div>
            <div className="api-integration-row">
              <div className="api-integration-name"><span className="api-icon-box"><DatabaseIcon /></span><h3>Platform Integrations</h3></div>
              <p>For prebuilt or configurable connections to enterprise content, product, support, marketing, collaboration, and repository systems.</p>
              <a className="api-text-link api-integration-action" href="https://www.stepes.com/integrations/">Explore Integrations <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell">
          <div className="api-section-heading api-section-heading-center">
            <p className="api-eyebrow">Connected Platform</p>
            <h2>Extend Your API Workflow With the Stepes Platform</h2>
            <p className="api-body-large">Connect your integration to the broader controls, language assets, automation, and visibility used across enterprise translation operations.</p>
          </div>
          <div className="api-platform-grid">
            <a className="api-platform-link" href="https://www.stepes.com/ai-translation-platform/"><strong>AI Translation Platform</strong><span>Explore Platform <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/enterprise-translation-management/"><strong>Enterprise Translation Management</strong><span>Explore Management <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/translation-memory/"><strong>Translation Memory</strong><span>Explore Translation Memory <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/terminology-management/"><strong>Terminology Management</strong><span>Explore Terminology <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/workflow-automation/"><strong>Workflow Automation</strong><span>Explore Automation <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/translation-reporting-analytics/"><strong>Reporting and Analytics</strong><span>Explore Analytics <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/user-roles-approvals/"><strong>User Roles and Approvals</strong><span>Explore Governance <Arrow /></span></a>
            <a className="api-platform-link" href="https://www.stepes.com/security/"><strong>Enterprise Security</strong><span>Explore Security <Arrow /></span></a>
          </div>
        </div>
      </section>

      <section className="api-section api-quality-section">
        <div className="api-shell api-support-layout">
          <div>
            <p className="api-eyebrow">Implementation Support</p>
            <h2>Move From Integration Design to Production</h2>
            <p className="api-body-large">
              Align content models, quality requirements, security expectations, review responsibilities, delivery logic, and exception handling with your operating environment.
            </p>
            <a className="api-btn api-btn-primary" href="https://www.stepes.com/contact-us/"><span>Talk to a Translation API Expert</span><Arrow /></a>
          </div>
          <div className="api-support-panel">
            <article className="api-support-item"><h3>Use-Case and Architecture Review</h3><p>Evaluate content systems, request patterns, languages, quality levels, data flow, and delivery models.</p></article>
            <article className="api-support-item"><h3>Workflow Design</h3><p>Determine how AI, professional translation, post-editing, review, quality assurance, and approvals should be applied.</p></article>
            <article className="api-support-item"><h3>Language Asset Configuration</h3><p>Connect translation memory, terminology, contextual instructions, and other approved language resources.</p></article>
            <article className="api-support-item"><h3>Security and Access Planning</h3><p>Review credential handling, permissions, environment separation, webhook verification, and content requirements.</p></article>
            <article className="api-support-item"><h3>Integration Testing</h3><p>Validate authentication, submissions, workflow behavior, event handling, exception recovery, and result delivery.</p></article>
            <article className="api-support-item"><h3>Production Readiness</h3><p>Confirm monitoring, traceability, retries, duplicate prevention, webhook failures, and technical support procedures.</p></article>
          </div>
        </div>
      </section>

      <section className="api-section">
        <div className="api-shell">
          <div className="api-section-heading api-section-heading-center">
            <h2>Translation API FAQ</h2>
            <p className="api-body-large">Answers to common questions about enterprise translation automation, workflow quality, security, content support, and implementation.</p>
          </div>
          <div className="api-faq-wrap">
            <details className="api-faq" open>
              <summary>What is a translation API?</summary>
              <div className="api-faq-answer"><p>A translation API connects applications and content systems to translation workflows. It allows a system to submit content, specify languages and requirements, monitor progress, and retrieve completed translations through structured requests rather than manual file transfers.</p></div>
            </details>
            <details className="api-faq">
              <summary>How is the Stepes Translation API different from a machine translation API?</summary>
              <div className="api-faq-answer"><p>A conventional machine translation API primarily returns an automated translation. Stepes connects applications to broader workflows that can include AI translation, translation memory, terminology, professional post-editing, human translation, linguistic review, quality assurance, and approval.</p></div>
            </details>
            <details className="api-faq">
              <summary>Can the API support both AI and human translation?</summary>
              <div className="api-faq-answer"><p>Yes. Workflows can support AI translation, AI translation with professional review, professional human translation, post-editing, linguistic review, quality assurance, subject-matter validation, and stakeholder approval.</p></div>
            </details>
            <details className="api-faq">
              <summary>What types of content can be submitted?</summary>
              <div className="api-faq-answer"><p>The API supports workflows for text, structured content, business documents, localization resources, product information, customer communications, technical content, and other supported files and inputs. Current formats and limits are provided in the developer documentation.</p></div>
            </details>
            <details className="api-faq">
              <summary>Does the API support multiple target languages?</summary>
              <div className="api-faq-answer"><p>Yes. A translation project can define a source locale and multiple target locales. Each target language can progress through its configured translation, review, approval, and delivery stages.</p></div>
            </details>
            <details className="api-faq">
              <summary>Is the Translation API synchronous or asynchronous?</summary>
              <div className="api-faq-answer"><p>Eligible requests may complete synchronously. Larger submissions, files, multiple languages, professional review, approvals, and other workflows that continue over time use asynchronous jobs that can be monitored through status resources and webhooks.</p></div>
            </details>
            <details className="api-faq">
              <summary>How does our application know when translation is complete?</summary>
              <div className="api-faq-answer"><p>Applications can retrieve project and language-job status or subscribe to signed webhook events. Events can indicate processing updates, review milestones, approvals, exceptions, and completed deliveries.</p></div>
            </details>
            <details className="api-faq">
              <summary>Can we use our translation memory and terminology?</summary>
              <div className="api-faq-answer"><p>Yes. Workflows can apply approved translation memory, product names, technical terms, regulated language, brand wording, contextual instructions, and other linguistic guidance.</p></div>
            </details>
            <details className="api-faq">
              <summary>What is the difference between the Translation API and Software Localization API?</summary>
              <div className="api-faq-answer"><p>The Translation API supports general text, documents, files, structured data, and business content. The Software Localization API is designed around software resource files, translation keys, strings, locales, branches, placeholders, review states, repositories, and localized release builds.</p></div>
            </details>
            <details className="api-faq">
              <summary>How does the API protect credentials?</summary>
              <div className="api-faq-answer"><p>Credentials should be stored in secure server-side environments and restricted to approved applications. They should not be exposed in browser code, public mobile applications, client-side configuration, or public source repositories.</p></div>
            </details>
            <details className="api-faq">
              <summary>How is Translation API pricing determined?</summary>
              <div className="api-faq-answer"><p>Pricing depends on content type, source and target languages, volume, translation method, professional review, subject-matter specialization, file processing, quality assurance, turnaround expectations, and implementation needs.</p></div>
            </details>
            <details className="api-faq">
              <summary>How do we get Translation API access?</summary>
              <div className="api-faq-answer"><p>Contact Stepes with information about your application, content types, languages, expected volume, translation workflows, security requirements, and implementation plans. The Stepes team will review the use case and coordinate approved API access and environment setup.</p></div>
            </details>
          </div>
        </div>
      </section>

      <section className="api-final-cta">
        <div className="api-shell">
          <div className="api-final-panel">
            <div className="api-final-copy">
              <h2>Build Translation Into Your Enterprise Workflow</h2>
              <p className="api-body-large">
                Connect your applications and content systems to configurable AI translation, professional human review, terminology, quality assurance, approvals, and multilingual delivery.
              </p>
              <div className="api-btn-row">
                <a className="api-btn api-btn-primary" href="https://www.stepes.com/contact-us/"><span>Request API Access</span><Arrow /></a>
                <a className="api-btn api-btn-secondary" href="https://www.stepes.com/developers/translation-api/">Explore Developer Documentation <Arrow /></a>
              </div>
            </div>
            <div className="api-final-visual">
              <EnterpriseNetworkIllustration />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
