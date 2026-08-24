/*
 * Stepes French Canadian Translation Services Wireframe
 * Body-only React component. No global navigation, breadcrumbs, or footer.
 */

import { createElement } from "react";

const h = createElement;

const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-us/";

const styles = `
  :root {
    --fc-magenta: #C11D63;
    --fc-magenta-dark: #9F1D55;
    --fc-magenta-deep: #7A1542;
    --fc-blush: #FDF2F7;
    --fc-pink-light: #F2A7C6;
    --fc-ink: #17151A;
    --fc-text: #4B4650;
    --fc-muted: #6F6874;
    --fc-line: #E7E2E7;
    --fc-soft: #F7F5F7;
    --fc-white: #FFFFFF;
    --fc-dark: #211A22;
    --fc-shadow: 0 22px 60px rgba(36, 26, 34, 0.10);
  }

  * { box-sizing: border-box; }

  .fc-page {
    margin: 0;
    background: var(--fc-white);
    color: var(--fc-ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: hidden;
  }

  .fc-page a { color: inherit; }

  .fc-shell {
    width: min(100%, 1392px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .fc-section { padding: 96px 0; }
  .fc-section--dense { padding: 80px 0; }
  .fc-section--soft { background: var(--fc-soft); }
  .fc-section--blush { background: var(--fc-blush); }
  .fc-section--dark { background: var(--fc-dark); color: var(--fc-white); }

  .fc-eyebrow {
    margin: 0 0 16px;
    color: var(--fc-magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .fc-section--dark .fc-eyebrow { color: var(--fc-pink-light); }

  .fc-h1,
  .fc-h2,
  .fc-h3 {
    margin: 0;
    color: var(--fc-ink);
    font-weight: 600;
    letter-spacing: -0.035em;
  }

  .fc-section--dark .fc-h1,
  .fc-section--dark .fc-h2,
  .fc-section--dark .fc-h3 { color: var(--fc-white); }

  .fc-h1 {
    max-width: 760px;
    font-size: 48px;
    line-height: 1.08;
  }

  .fc-h2 {
    max-width: 780px;
    font-size: 36px;
    line-height: 1.14;
  }

  .fc-h3 {
    font-size: 24px;
    line-height: 1.24;
    letter-spacing: -0.025em;
  }

  .fc-lead {
    max-width: 780px;
    margin: 24px 0 0;
    color: var(--fc-text);
    font-size: 18px;
    line-height: 1.7;
  }

  .fc-section--dark .fc-lead,
  .fc-section--dark .fc-copy,
  .fc-section--dark .fc-simple-list li { color: #D9D1D9; }

  .fc-section--dark .fc-link { color: var(--fc-pink-light); }
  .fc-section--dark .fc-link:hover,
  .fc-section--dark .fc-link:focus-visible { color: #FFD2E5; }

  .fc-copy {
    margin: 16px 0 0;
    color: var(--fc-text);
    font-size: 16px;
    line-height: 1.72;
  }

  .fc-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    margin-top: 18px;
    color: var(--fc-magenta);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }

  .fc-link:hover,
  .fc-link:focus-visible { color: var(--fc-magenta-dark); }

  .fc-link svg { transition: transform 180ms ease; }
  .fc-link:hover svg,
  .fc-link:focus-visible svg { transform: translateX(3px); }

  .fc-link-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 24px;
    margin-top: 18px;
  }
  .fc-link-stack .fc-link { margin-top: 0; }

  .fc-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .fc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 52px;
    padding: 13px 24px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
  }

  .fc-button--primary,
  .fc-button--primary:link,
  .fc-button--primary:visited,
  .fc-button--primary:hover,
  .fc-button--primary:active,
  .fc-button--primary:focus,
  .fc-button--primary:focus-visible,
  .fc-button--primary span,
  .fc-button--primary svg {
    color: #FFFFFF !important;
    fill: none;
    stroke: #FFFFFF !important;
  }

  .fc-button--primary {
    background: var(--fc-magenta);
    box-shadow: 0 14px 34px rgba(193, 29, 99, 0.22);
  }

  .fc-button--primary:hover,
  .fc-button--primary:focus-visible {
    background: var(--fc-magenta-dark);
    transform: translateY(-1px);
    box-shadow: 0 18px 40px rgba(193, 29, 99, 0.27);
  }

  .fc-button--secondary {
    background: var(--fc-white);
    border-color: #D9D2D9;
    color: var(--fc-ink);
  }

  .fc-button--secondary:hover,
  .fc-button--secondary:focus-visible {
    border-color: var(--fc-magenta);
    color: var(--fc-magenta-dark);
    transform: translateY(-1px);
  }

  .fc-button:focus-visible,
  .fc-link:focus-visible,
  .fc-faq summary:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: 3px;
  }

  .fc-hero {
    position: relative;
    padding: 104px 0 88px;
    background:
      radial-gradient(circle at 88% 18%, rgba(193, 29, 99, 0.07), transparent 28%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFAFC 100%);
  }

  .fc-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
    gap: 72px;
    align-items: center;
  }

  .fc-hero__copy { max-width: 720px; }
  .fc-hero .fc-lead { max-width: 700px; }

  .fc-hero__visual {
    position: relative;
    min-height: 500px;
    border: 1px solid #DED6DE;
    border-radius: 30px;
    background:
      radial-gradient(circle at 88% 8%, rgba(193, 29, 99, 0.13), transparent 30%),
      radial-gradient(circle at 12% 92%, rgba(242, 167, 198, 0.13), transparent 33%),
      linear-gradient(145deg, #FFFFFF 0%, #FCF9FC 54%, #F8F3F7 100%);
    box-shadow:
      0 30px 80px rgba(45, 28, 40, 0.13),
      0 8px 24px rgba(45, 28, 40, 0.06);
    overflow: hidden;
    isolation: isolate;
  }

  .fc-hero__visual::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background:
      linear-gradient(rgba(193, 29, 99, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(193, 29, 99, 0.035) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,0.45) 62%, transparent 100%);
  }

  .fc-hero__visual::after {
    content: "";
    position: absolute;
    inset: 14px;
    z-index: -1;
    border: 1px solid rgba(255,255,255,0.86);
    border-radius: 22px;
    pointer-events: none;
  }

  .fc-hero-workspace {
    position: absolute;
    inset: 34px;
    display: grid;
    grid-template-rows: auto 1fr auto auto;
    gap: 22px;
    padding: 28px;
    border: 1px solid rgba(222, 214, 222, 0.96);
    border-radius: 26px;
    background: rgba(255,255,255,0.88);
    box-shadow:
      0 22px 50px rgba(43, 27, 39, 0.10),
      inset 0 1px 0 rgba(255,255,255,0.96);
    backdrop-filter: blur(12px);
  }

  .fc-hero-workspace__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .fc-hero-workspace__title {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .fc-hero-workspace__mark {
    width: 10px;
    height: 10px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--fc-magenta);
    box-shadow: 0 0 0 6px rgba(193,29,99,0.10);
  }

  .fc-hero-workspace__title span,
  .fc-hero-language__label,
  .fc-hero-audience__label {
    display: block;
    color: var(--fc-muted);
    font-size: 13px;
    line-height: 1.3;
  }

  .fc-hero-workspace__title strong {
    display: block;
    margin-top: 3px;
    color: var(--fc-ink);
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }

  .fc-hero-locale-pill {
    flex: 0 0 auto;
    padding: 8px 12px;
    border: 1px solid rgba(193,29,99,0.18);
    border-radius: 999px;
    background: var(--fc-blush);
    color: var(--fc-magenta-dark);
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  .fc-hero-language-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr);
    gap: 12px;
    align-items: stretch;
  }

  .fc-hero-language-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    padding: 20px;
    border: 1px solid var(--fc-line);
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0 12px 28px rgba(45, 28, 40, 0.06);
  }

  .fc-hero-language-card--target {
    border-color: rgba(193,29,99,0.20);
    background: linear-gradient(145deg, #FFF9FC 0%, #FDF2F7 100%);
    box-shadow: 0 14px 30px rgba(193,29,99,0.10);
  }

  .fc-hero-language-card__main {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 18px;
  }

  .fc-hero-language-code {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    flex: 0 0 auto;
    border: 1px solid #E5DFE5;
    border-radius: 15px;
    background: var(--fc-soft);
    color: var(--fc-muted);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  .fc-hero-language-card--target .fc-hero-language-code {
    border-color: transparent;
    background: var(--fc-magenta-deep);
    color: #FFFFFF;
    box-shadow: 0 10px 22px rgba(122,21,66,0.20);
  }

  .fc-hero-language-card strong {
    display: block;
    color: var(--fc-ink);
    font-size: 17px;
    font-weight: 600;
    line-height: 1.25;
  }

  .fc-hero-language-card small {
    display: block;
    margin-top: 4px;
    color: var(--fc-muted);
    font-size: 13px;
    line-height: 1.3;
  }

  .fc-hero-flow-connector {
    display: grid;
    place-items: center;
    color: var(--fc-magenta);
  }

  .fc-hero-flow-connector span {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 1px solid rgba(193,29,99,0.16);
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0 8px 18px rgba(45,28,40,0.07);
    font-size: 18px;
    line-height: 1;
  }

  .fc-hero-quality {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .fc-hero-quality__item {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    color: var(--fc-text);
    font-size: 13px;
    line-height: 1.35;
  }

  .fc-hero-quality__item svg {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    color: var(--fc-magenta);
  }

  .fc-hero-audience {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--fc-line);
  }

  .fc-hero-audience strong {
    display: block;
    margin-top: 4px;
    color: var(--fc-ink);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
  }

  .fc-hero-content-icons {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .fc-hero-content-icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    margin-left: -7px;
    border: 1px solid #E5DFE5;
    border-radius: 12px;
    background: #FFFFFF;
    color: var(--fc-magenta-dark);
    box-shadow: 0 7px 16px rgba(45,28,40,0.07);
  }

  .fc-hero-content-icon:first-child { margin-left: 0; }
  .fc-hero-content-icon svg { width: 18px; height: 18px; }

  .fc-trust {
    border-top: 1px solid var(--fc-line);
    border-bottom: 1px solid var(--fc-line);
    background: #FFFFFF;
  }

  .fc-trust__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .fc-trust__item {
    min-height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px 24px;
    color: var(--fc-ink);
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .fc-trust__item + .fc-trust__item { border-left: 1px solid var(--fc-line); }

  .fc-intro-grid,
  .fc-split {
    display: grid;
    grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
    gap: 88px;
    align-items: start;
  }

  .fc-intro-panel {
    padding: 34px;
    border: 1px solid var(--fc-line);
    border-radius: 28px;
    background: #FFFFFF;
  }

  .fc-check-list,
  .fc-simple-list {
    list-style: none;
    margin: 26px 0 0;
    padding: 0;
  }

  .fc-check-list li,
  .fc-simple-list li {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 12px;
    padding: 14px 0;
    color: var(--fc-text);
    font-size: 16px;
    line-height: 1.6;
  }

  .fc-check-list li + li,
  .fc-simple-list li + li { border-top: 1px solid var(--fc-line); }
  .fc-check-list svg { margin-top: 3px; color: var(--fc-magenta); }
  .fc-simple-list .fc-marker {
    width: 8px;
    height: 8px;
    margin-top: 9px;
    border-radius: 50%;
    background: var(--fc-magenta);
  }

  .fc-editorial-list { margin-top: 48px; border-top: 1px solid var(--fc-line); }
  .fc-editorial-row {
    display: grid;
    grid-template-columns: 48px minmax(220px, 0.72fr) minmax(0, 1.28fr);
    gap: 28px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid var(--fc-line);
  }

  .fc-editorial-row__icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: var(--fc-blush);
    color: var(--fc-magenta-dark);
  }

  .fc-editorial-row__icon svg { width: 22px; height: 22px; }
  .fc-editorial-row .fc-h3 { font-size: 21px; line-height: 1.3; }
  .fc-editorial-row .fc-copy { margin-top: 0; }

  .fc-compare {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    margin-top: 48px;
  }

  .fc-compare__panel {
    padding: 34px;
    border: 1px solid var(--fc-line);
    border-radius: 28px;
    background: #FFFFFF;
  }

  .fc-compare__panel--canada {
    border-color: #EAC5D5;
    background: linear-gradient(180deg, #FFFFFF 0%, #FEF8FB 100%);
  }

  .fc-compare__label {
    display: inline-flex;
    align-items: center;
    min-height: 31px;
    padding: 5px 11px;
    border-radius: 999px;
    background: #F0EDF0;
    color: var(--fc-muted);
    font-size: 14px;
    font-weight: 600;
  }

  .fc-compare__panel--canada .fc-compare__label {
    background: var(--fc-blush);
    color: var(--fc-magenta-dark);
  }

  .fc-compare__panel .fc-h3 { margin-top: 18px; }

  .fc-comparison-table {
    margin-top: 42px;
    border-top: 1px solid var(--fc-line);
  }

  .fc-comparison-row {
    display: grid;
    grid-template-columns: minmax(170px, 0.48fr) minmax(0, 1.52fr);
    gap: 40px;
    padding: 24px 0;
    border-bottom: 1px solid var(--fc-line);
  }

  .fc-comparison-row strong { font-size: 16px; font-weight: 600; }
  .fc-comparison-row p { margin: 0; color: var(--fc-text); font-size: 16px; }

  .fc-adapt-panel {
    display: grid;
    grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.15fr);
    gap: 68px;
    padding: 52px;
    border: 1px solid #E9CBD8;
    border-radius: 30px;
    background: #FFFFFF;
    box-shadow: 0 20px 52px rgba(67, 30, 52, 0.07);
  }

  .fc-adapt-steps { border-top: 1px solid var(--fc-line); }
  .fc-adapt-step {
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 18px;
    padding: 20px 0;
    border-bottom: 1px solid var(--fc-line);
  }

  .fc-adapt-step__number {
    color: var(--fc-magenta);
    font-size: 16px;
    font-weight: 600;
  }

  .fc-adapt-step strong { display: block; font-size: 17px; font-weight: 600; }
  .fc-adapt-step p { margin: 6px 0 0; color: var(--fc-text); font-size: 16px; }

  .fc-services-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 72px;
    margin-top: 48px;
    border-top: 1px solid var(--fc-line);
  }

  .fc-service-item {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 20px;
    padding: 30px 0;
    border-bottom: 1px solid var(--fc-line);
  }

  .fc-service-item__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border-radius: 14px;
    background: #F1EFF1;
    color: var(--fc-magenta-dark);
    line-height: 0;
  }

  .fc-service-item__icon svg {
    display: block;
    flex: 0 0 auto;
    width: 21px;
    height: 21px;
    margin: 0;
  }

  .fc-service-item .fc-h3 { font-size: 21px; }
  .fc-service-item .fc-copy { margin-top: 9px; }
  .fc-service-item .fc-link { margin-top: 10px; }

  .fc-digital-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(480px, 1.12fr);
    gap: 72px;
    align-items: center;
  }

  .fc-product {
    padding: 18px;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 30px;
    background: rgba(255,255,255,0.055);
    box-shadow: 0 24px 80px rgba(0,0,0,0.2);
  }

  .fc-product__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px 16px;
    color: #CFC6CF;
    font-size: 14px;
  }

  .fc-product__dots { display: flex; gap: 6px; }
  .fc-product__dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.24); }

  .fc-product__body {
    display: grid;
    grid-template-columns: 0.84fr 1.16fr;
    min-height: 430px;
    border-radius: 22px;
    background: #FFFFFF;
    overflow: hidden;
  }

  .fc-product__sidebar {
    padding: 26px;
    border-right: 1px solid var(--fc-line);
    background: #F8F6F8;
  }

  .fc-product__sidebar strong { display: block; font-size: 16px; font-weight: 600; }
  .fc-product__sidebar small { display: block; margin-top: 4px; color: var(--fc-muted); font-size: 14px; }
  .fc-product__nav { margin-top: 24px; }
  .fc-product__nav div {
    padding: 12px 14px;
    border-radius: 12px;
    color: var(--fc-text);
    font-size: 14px;
  }
  .fc-product__nav div + div { margin-top: 6px; }
  .fc-product__nav .is-active { background: var(--fc-blush); color: var(--fc-magenta-dark); font-weight: 600; }

  .fc-product__main { padding: 28px; }
  .fc-product__locale {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-product__locale strong { font-size: 18px; font-weight: 600; }
  .fc-product__locale span {
    padding: 6px 10px;
    border-radius: 999px;
    background: var(--fc-blush);
    color: var(--fc-magenta-dark);
    font-size: 14px;
    font-weight: 600;
  }

  .fc-string-card {
    margin-top: 20px;
    padding: 18px;
    border: 1px solid var(--fc-line);
    border-radius: 18px;
  }
  .fc-string-card__meta { display: flex; justify-content: space-between; gap: 16px; color: var(--fc-muted); font-size: 14px; }
  .fc-string-card strong { display: block; margin-top: 12px; font-size: 16px; font-weight: 600; }
  .fc-string-card p { margin: 7px 0 0; color: var(--fc-text); font-size: 16px; }
  .fc-qa-line {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 10px;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--fc-line);
    color: var(--fc-text);
    font-size: 14px;
  }
  .fc-qa-line svg { margin-top: 1px; color: #2E7A56; }

  .fc-terminology-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: 72px;
    align-items: start;
  }

  .fc-term-board {
    padding: 28px;
    border: 1px solid var(--fc-line);
    border-radius: 28px;
    background: #FFFFFF;
  }

  .fc-term-board__head {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-term-board__head strong { font-size: 17px; font-weight: 600; }
  .fc-term-board__head span { color: var(--fc-muted); font-size: 14px; }
  .fc-term-row {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 18px;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-term-row:last-child { border-bottom: 0; }
  .fc-term-row span { color: var(--fc-text); font-size: 16px; }
  .fc-term-row strong { font-size: 16px; font-weight: 600; }
  .fc-term-row em {
    padding: 5px 8px;
    border-radius: 999px;
    background: #EDF7F1;
    color: #2E6D4F;
    font-size: 14px;
    font-style: normal;
  }

  .fc-compliance {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: 68px;
    align-items: start;
  }

  .fc-notice {
    padding: 30px;
    border: 1px solid #E8C7D5;
    border-radius: 26px;
    background: #FFFFFF;
  }
  .fc-notice__title { display: flex; align-items: flex-start; gap: 10px; font-size: 17px; font-weight: 600; }
  .fc-notice__title svg { flex: 0 0 20px; width: 20px; height: 20px; margin-top: 2px; color: var(--fc-magenta); }
  .fc-notice p { margin: 14px 0 0; color: var(--fc-text); font-size: 16px; }

  .fc-expertise-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    gap: 72px;
    align-items: start;
  }
  .fc-linguist-panel {
    padding: 32px;
    border: 1px solid var(--fc-line);
    border-radius: 28px;
    background: #FFFFFF;
  }
  .fc-linguist-panel__head {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-linguist-panel__head strong { display: block; font-size: 18px; font-weight: 600; }
  .fc-linguist-panel__head span { display: block; margin-top: 6px; color: var(--fc-text); font-size: 16px; }
  .fc-linguist-list { list-style: none; margin: 0; padding: 0; }
  .fc-linguist-item {
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 14px;
    padding: 20px 0;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-linguist-item:last-child { border-bottom: 0; padding-bottom: 0; }
  .fc-linguist-item > .fc-linguist-item__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 1px 0 0;
    padding: 0;
    border-radius: 10px;
    background: var(--fc-blush);
    color: var(--fc-muted);
    line-height: 0;
  }
  .fc-linguist-item > .fc-linguist-item__icon svg {
    display: block;
    flex: 0 0 auto;
    width: 17px;
    height: 17px;
    margin: 0;
    transform: translate(0, 0);
  }
  .fc-linguist-item strong { display: block; font-size: 16px; font-weight: 600; }
  .fc-linguist-item > div > span { display: block; margin-top: 4px; color: var(--fc-text); font-size: 16px; }

  .fc-process {
    margin-top: 48px;
    border-top: 1px solid var(--fc-line);
  }
  .fc-process-step {
    display: grid;
    grid-template-columns: 56px minmax(210px, 0.65fr) minmax(0, 1.35fr);
    gap: 28px;
    align-items: start;
    padding: 28px 0;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-process-step__number {
    color: var(--fc-magenta);
    font-size: 18px;
    font-weight: 600;
  }
  .fc-process-step strong { font-size: 18px; font-weight: 600; }
  .fc-process-step p { margin: 0; color: var(--fc-text); font-size: 16px; }

  .fc-tech-panel {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: 70px;
    padding: 54px;
    border: 1px solid var(--fc-line);
    border-radius: 30px;
    background: #FFFFFF;
  }
  .fc-tech-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 34px; }
  .fc-tech-item {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid var(--fc-line);
    color: var(--fc-text);
    font-size: 16px;
  }
  .fc-tech-item svg { margin-top: 3px; color: var(--fc-magenta); }

  .fc-industries-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 32px;
    margin-top: 48px;
    border-top: 1px solid var(--fc-line);
  }
  .fc-industry {
    min-height: 198px;
    padding: 28px 0;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-industry .fc-h3 { font-size: 20px; }
  .fc-industry .fc-copy { margin-top: 10px; }

  .fc-directions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 44px;
  }
  .fc-direction {
    padding: 34px;
    border: 1px solid var(--fc-line);
    border-radius: 26px;
    background: #FFFFFF;
  }
  .fc-direction .fc-h3 { margin-top: 18px; }

  .fc-benefits {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 46px;
    border-top: 1px solid rgba(255,255,255,0.16);
    border-bottom: 1px solid rgba(255,255,255,0.16);
  }
  .fc-benefit {
    min-height: 180px;
    padding: 30px 24px;
  }
  .fc-benefit + .fc-benefit { border-left: 1px solid rgba(255,255,255,0.16); }
  .fc-benefit strong { display: block; color: #FFFFFF; font-size: 17px; font-weight: 600; }
  .fc-benefit span { display: block; margin-top: 10px; color: #CEC5CE; font-size: 16px; }

  .fc-faq {
    margin-top: 42px;
    border: 1px solid var(--fc-line);
    border-radius: 28px;
    background: #FFFFFF;
    overflow: hidden;
  }
  .fc-faq details + details { border-top: 1px solid var(--fc-line); }
  .fc-faq summary {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 76px;
    padding: 22px 28px;
    cursor: pointer;
    list-style: none;
    color: var(--fc-ink);
    font-size: 17px;
    font-weight: 600;
  }
  .fc-faq summary::-webkit-details-marker { display: none; }
  .fc-faq summary::after {
    content: "+";
    flex: 0 0 auto;
    color: var(--fc-magenta);
    font-size: 25px;
    font-weight: 400;
    line-height: 1;
  }
  .fc-faq details[open] summary::after { content: "−"; }
  .fc-faq__answer {
    max-width: 840px;
    padding: 0 28px 26px;
    color: var(--fc-text);
    font-size: 16px;
    line-height: 1.72;
  }

  .fc-related {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 36px;
    margin-top: 42px;
    border-top: 1px solid var(--fc-line);
  }
  .fc-related__item {
    padding: 24px 0;
    border-bottom: 1px solid var(--fc-line);
  }
  .fc-related__item a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--fc-magenta);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .fc-related__item p { margin: 6px 0 0; color: var(--fc-text); font-size: 16px; }

  .fc-final-cta {
    padding: 88px 0;
    background: linear-gradient(135deg, #FFF 0%, var(--fc-blush) 100%);
  }
  .fc-final-cta__panel {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 54px;
    align-items: center;
    padding: 58px;
    border: 1px solid #EAC7D6;
    border-radius: 30px;
    background: #FFFFFF;
    overflow: hidden;
    box-shadow: 0 22px 58px rgba(76, 31, 56, 0.09);
  }
  .fc-final-cta__art {
    position: relative;
    min-height: 270px;
    display: grid;
    place-items: center;
  }
  .fc-cta-visual {
    position: relative;
    width: 100%;
    max-width: 360px;
    min-height: 250px;
  }
  .fc-cta-visual__ring {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 220px;
    height: 220px;
    border: 1px solid #E4D8DE;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .fc-cta-visual__ring::before,
  .fc-cta-visual__ring::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1px solid #EEE5E9;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  .fc-cta-visual__ring::before { width: 72%; height: 72%; }
  .fc-cta-visual__ring::after { width: 44%; height: 44%; }
  .fc-cta-visual__core {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background: var(--fc-magenta-deep);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.02em;
    transform: translate(-50%, -50%);
    box-shadow: 0 16px 34px rgba(122, 21, 66, 0.24);
  }
  .fc-cta-language-card {
    position: absolute;
    z-index: 3;
    width: 170px;
    padding: 16px 18px;
    border: 1px solid #E5DDE2;
    border-radius: 18px;
    background: rgba(255,255,255,0.98);
    box-shadow: 0 14px 30px rgba(60, 35, 51, 0.10);
  }
  .fc-cta-language-card--source { left: 0; top: 26px; }
  .fc-cta-language-card--target { right: 0; bottom: 22px; }
  .fc-cta-language-card small { display: block; color: var(--fc-muted); font-size: 14px; }
  .fc-cta-language-card strong { display: block; margin-top: 5px; font-size: 16px; font-weight: 600; }
  .fc-cta-language-card--target strong { color: var(--fc-magenta-dark); }
  .fc-cta-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    color: #2E6D4F;
    font-size: 14px;
  }
  .fc-cta-status svg { width: 16px; height: 16px; }



  @media (max-width: 1199px) {
    .fc-shell { padding-left: 40px; padding-right: 40px; }
    .fc-hero__grid { grid-template-columns: minmax(0, 1fr) minmax(380px, 0.9fr); gap: 48px; }
    .fc-hero__visual { min-height: 480px; }
    .fc-industries-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .fc-benefits { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .fc-benefit:nth-child(4) { border-left: 0; border-top: 1px solid rgba(255,255,255,0.16); }
    .fc-benefit:nth-child(5) { border-top: 1px solid rgba(255,255,255,0.16); }
  }

  @media (max-width: 900px) {
    .fc-shell { padding-left: 24px; padding-right: 24px; }
    .fc-section { padding: 80px 0; }
    .fc-section--dense { padding: 72px 0; }
    .fc-h1 { font-size: 42px; }
    .fc-h2 { font-size: 32px; }
    .fc-h3 { font-size: 22px; }
    .fc-hero { padding: 88px 0 76px; }
    .fc-hero__grid,
    .fc-intro-grid,
    .fc-split,
    .fc-adapt-panel,
    .fc-digital-grid,
    .fc-terminology-grid,
    .fc-compliance,
    .fc-expertise-grid,
    .fc-tech-panel,
    .fc-final-cta__panel {
      grid-template-columns: 1fr;
      gap: 46px;
    }
    .fc-hero__copy { max-width: 780px; }
    .fc-hero__visual { min-height: 500px; max-width: 660px; width: 100%; margin: 0 auto; }
    .fc-trust__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .fc-trust__item:nth-child(3) { border-left: 0; border-top: 1px solid var(--fc-line); }
    .fc-trust__item:nth-child(4) { border-top: 1px solid var(--fc-line); }
    .fc-editorial-row { grid-template-columns: 48px minmax(0, 1fr); }
    .fc-editorial-row .fc-copy { grid-column: 2; }
    .fc-services-grid { column-gap: 42px; }
    .fc-product { max-width: 720px; width: 100%; margin: 0 auto; }
    .fc-industries-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .fc-process-step { grid-template-columns: 48px minmax(0, 1fr); }
    .fc-process-step p { grid-column: 2; }
    .fc-related { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .fc-final-cta__art { width: min(100%, 430px); margin: 0 auto; }
  }

  @media (max-width: 640px) {
    .fc-shell { padding-left: 20px; padding-right: 20px; }
    .fc-section { padding: 68px 0; }
    .fc-section--dense { padding: 64px 0; }
    .fc-h1 { font-size: 38px; line-height: 1.1; }
    .fc-h2 { font-size: 30px; line-height: 1.16; }
    .fc-h3 { font-size: 20px; }
    .fc-lead { font-size: 18px; }
    .fc-hero { padding: 72px 0 64px; }
    .fc-buttons { flex-direction: column; }
    .fc-button { width: 100%; }
    .fc-hero__visual { min-height: 442px; border-radius: 24px; }
    .fc-hero-workspace { inset: 18px; gap: 17px; padding: 20px; border-radius: 20px; }
    .fc-hero-language-flow { grid-template-columns: minmax(0, 1fr) 34px minmax(0, 1fr); gap: 8px; }
    .fc-hero-language-card { padding: 15px; border-radius: 17px; }
    .fc-hero-language-card__main { gap: 9px; margin-top: 13px; }
    .fc-hero-language-code { width: 40px; height: 40px; border-radius: 13px; font-size: 13px; }
    .fc-hero-language-card strong { font-size: 15px; }
    .fc-hero-language-card small { font-size: 12px; }
    .fc-hero-quality { gap: 7px; }
    .fc-hero-quality__item { gap: 5px; font-size: 12px; }
    .fc-hero-quality__item svg { width: 16px; height: 16px; }
    .fc-hero-audience { padding-top: 14px; }
    .fc-hero-audience strong { font-size: 15px; }
    .fc-hero-content-icon { width: 34px; height: 34px; border-radius: 11px; }
    .fc-trust__grid { grid-template-columns: 1fr; }
    .fc-trust__item { min-height: 72px; }
    .fc-trust__item + .fc-trust__item { border-left: 0; border-top: 1px solid var(--fc-line); }
    .fc-intro-panel,
    .fc-compare__panel,
    .fc-direction { padding: 26px; border-radius: 22px; }
    .fc-editorial-row { grid-template-columns: 42px minmax(0, 1fr); gap: 16px; padding: 24px 0; }
    .fc-editorial-row__icon { width: 40px; height: 40px; }
    .fc-compare,
    .fc-services-grid,
    .fc-directions,
    .fc-tech-list,
    .fc-expertise-list,
    .fc-industries-grid,
    .fc-related { grid-template-columns: 1fr; }
    .fc-comparison-row { grid-template-columns: 1fr; gap: 8px; }
    .fc-adapt-panel,
    .fc-tech-panel,
    .fc-final-cta__panel { padding: 28px; border-radius: 24px; }
    .fc-service-item { grid-template-columns: 42px minmax(0, 1fr); gap: 16px; }
    .fc-service-item__icon { width: 40px; height: 40px; }
    .fc-product { padding: 12px; border-radius: 24px; }
    .fc-product__body { grid-template-columns: 1fr; min-height: 0; }
    .fc-product__sidebar { border-right: 0; border-bottom: 1px solid var(--fc-line); }
    .fc-product__nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
    .fc-product__nav div + div { margin-top: 0; }
    .fc-term-row { grid-template-columns: 1fr; gap: 6px; }
    .fc-term-row em { justify-self: start; }
    .fc-notice { padding: 24px; border-radius: 22px; }
    .fc-linguist-panel { padding: 26px; border-radius: 22px; }
    .fc-process-step { grid-template-columns: 42px minmax(0, 1fr); gap: 14px; }
    .fc-benefits { grid-template-columns: 1fr; }
    .fc-benefit,
    .fc-benefit + .fc-benefit,
    .fc-benefit:nth-child(4),
    .fc-benefit:nth-child(5) { min-height: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,0.16); }
    .fc-benefit:first-child { border-top: 0; }
    .fc-faq summary { padding: 20px; font-size: 16px; }
    .fc-faq__answer { padding: 0 20px 24px; }
    .fc-final-cta { padding: 64px 0; }
    .fc-final-cta__art { min-height: 250px; margin-top: 2px; }
    .fc-cta-visual { transform: scale(0.9); transform-origin: center; }
  }

  @media (max-width: 360px) {
    .fc-hero__visual { min-height: 426px; }
    .fc-hero-workspace { inset: 14px; padding: 17px; gap: 14px; }
    .fc-hero-workspace__title span { display: none; }
    .fc-hero-workspace__title strong { margin-top: 0; font-size: 15px; }
    .fc-hero-locale-pill { padding: 7px 10px; font-size: 13px; }
    .fc-hero-language-card { padding: 12px; }
    .fc-hero-language-card__main { display: block; margin-top: 10px; }
    .fc-hero-language-code { width: 36px; height: 36px; margin-bottom: 9px; }
    .fc-hero-language-card small { display: none; }
    .fc-hero-quality__item { font-size: 11px; }
    .fc-hero-content-icons { display: none; }
    .fc-product__main { padding: 22px 18px; }
    .fc-string-card__meta { flex-direction: column; gap: 4px; }
    .fc-cta-visual { transform: scale(0.82); }
  }
`;

function ArrowIcon() {
  return h("svg", { viewBox: "0 0 20 20", width: 18, height: 18, "aria-hidden": "true", fill: "none" },
    h("path", { d: "M4 10h11M11 6l4 4-4 4", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" })
  );
}

function CheckIcon() {
  return h("svg", { viewBox: "0 0 20 20", width: 20, height: 20, "aria-hidden": "true", fill: "none" },
    h("circle", { cx: 10, cy: 10, r: 8, stroke: "currentColor", strokeWidth: 1.5 }),
    h("path", { d: "m6.5 10 2.2 2.2 4.8-5", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" })
  );
}

function Icon({ name }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": "true", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const shapes = {
    globe: [h("circle", { key: 1, cx: 12, cy: 12, r: 9 }), h("path", { key: 2, d: "M3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21M12 3C9.5 5.4 8.2 8.4 8.2 12S9.5 18.6 12 21" })],
    document: [h("path", { key: 1, d: "M6 3h8l4 4v14H6z" }), h("path", { key: 2, d: "M14 3v5h5M9 12h6M9 16h6" })],
    app: [h("rect", { key: 1, x: 4, y: 3, width: 16, height: 18, rx: 3 }), h("path", { key: 2, d: "M8 7h8M8 11h3M8 15h8" })],
    cart: [h("path", { key: 1, d: "M3 4h2l2.2 10.2h9.8L20 7H7" }), h("circle", { key: 2, cx: 9, cy: 19, r: 1.2 }), h("circle", { key: 3, cx: 17, cy: 19, r: 1.2 })],
    megaphone: [h("path", { key: 1, d: "M4 13V9l13-5v14L4 13zM8 14l1 6h4l-2-5" }), h("path", { key: 2, d: "M19 9c1 1 1 3 0 4" })],
    users: [h("circle", { key: 1, cx: 9, cy: 8, r: 3 }), h("path", { key: 2, d: "M3 20c.5-4 2.5-6 6-6s5.5 2 6 6" }), h("path", { key: 3, d: "M16 6.5a2.5 2.5 0 0 1 0 5M17 14c2.4.7 3.6 2.6 4 5" })],
    cap: [h("path", { key: 1, d: "m3 9 9-5 9 5-9 5-9-5z" }), h("path", { key: 2, d: "M7 12v4c3 2 7 2 10 0v-4M21 9v6" })],
    scale: [h("path", { key: 1, d: "M12 3v18M6 6h12M6 6l-4 7h8L6 6zM18 6l-4 7h8l-4-7zM8 21h8" })],
    heart: [h("path", { key: 1, d: "M20.8 5.8c-2-2-5.2-1.9-7 .2L12 8l-1.8-2c-1.8-2.1-5-2.2-7-.2-2 2-1.7 5.2.3 7.2L12 21l8.5-8c2-2 2.3-5.2.3-7.2z" }), h("path", { key: 2, d: "M7 12h3l1.4-3 2.2 6 1.4-3h2" })],
    bank: [h("path", { key: 1, d: "m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M2 18h20" })],
    shield: [h("path", { key: 1, d: "M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" }), h("path", { key: 2, d: "m8.5 12 2.2 2.2 4.8-5" })],
    code: [h("path", { key: 1, d: "m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" })],
    package: [h("path", { key: 1, d: "m4 7 8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10" })],
    chat: [h("path", { key: 1, d: "M4 5h16v11H9l-5 4V5z" }), h("path", { key: 2, d: "M8 9h8M8 12h5" })],
    map: [h("path", { key: 1, d: "m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15" })],
    term: [h("path", { key: 1, d: "M4 5h9M4 9h7M4 13h5M15 9l5 5M20 9l-5 5M12 18h8" })],
    qa: [h("circle", { key: 1, cx: 10, cy: 10, r: 6 }), h("path", { key: 2, d: "m14.5 14.5 5 5M7.5 10l1.8 1.8 3.5-4" })],
    lock: [h("rect", { key: 1, x: 5, y: 10, width: 14, height: 11, rx: 2 }), h("path", { key: 2, d: "M8 10V7a4 4 0 0 1 8 0v3M12 14v3" })],
    api: [h("path", { key: 1, d: "M8 4H5a2 2 0 0 0-2 2v3M16 4h3a2 2 0 0 1 2 2v3M8 20H5a2 2 0 0 1-2-2v-3M16 20h3a2 2 0 0 0 2-2v-3" }), h("path", { key: 2, d: "m9 9-3 3 3 3M15 9l3 3-3 3M13 7l-2 10" })],
    alert: [h("path", { key: 1, d: "M12 3 2.5 20h19L12 3z" }), h("path", { key: 2, d: "M12 9v5M12 17h.01" })]
  };
  return h("svg", common, ...(shapes[name] || shapes.document));
}

function Button({ href, primary, children }) {
  return h("a", { className: `fc-button ${primary ? "fc-button--primary" : "fc-button--secondary"}`, href },
    h("span", null, children),
    h(ArrowIcon)
  );
}

function TextLink({ href, children }) {
  return h("a", { className: "fc-link", href }, h("span", null, children), h(ArrowIcon));
}

function SectionHeading({ eyebrow, title, lead }) {
  return h("div", null,
    eyebrow ? h("p", { className: "fc-eyebrow" }, eyebrow) : null,
    h("h2", { className: "fc-h2" }, title),
    lead ? h("p", { className: "fc-lead" }, lead) : null
  );
}

function HeroIllustration() {
  const qualitySignals = ["Terminology aligned", "Locale QA complete", "Market-ready"];
  return h("div", { className: "fc-hero__visual", role: "img", "aria-label": "English content localized into Canadian French with terminology alignment, locale quality assurance, and Canadian market review" },
    h("div", { className: "fc-hero-workspace" },
      h("div", { className: "fc-hero-workspace__header" },
        h("div", { className: "fc-hero-workspace__title" },
          h("span", { className: "fc-hero-workspace__mark", "aria-hidden": "true" }),
          h("div", null,
            h("span", null, "Canadian market localization"),
            h("strong", null, "French · Canada")
          )
        ),
        h("span", { className: "fc-hero-locale-pill" }, "fr-CA")
      ),
      h("div", { className: "fc-hero-language-flow" },
        h("div", { className: "fc-hero-language-card" },
          h("span", { className: "fc-hero-language__label" }, "Source content"),
          h("div", { className: "fc-hero-language-card__main" },
            h("span", { className: "fc-hero-language-code" }, "EN"),
            h("div", null, h("strong", null, "English"), h("small", null, "Original content"))
          )
        ),
        h("div", { className: "fc-hero-flow-connector", "aria-hidden": "true" }, h("span", null, "→")),
        h("div", { className: "fc-hero-language-card fc-hero-language-card--target" },
          h("span", { className: "fc-hero-language__label" }, "Localized content"),
          h("div", { className: "fc-hero-language-card__main" },
            h("span", { className: "fc-hero-language-code" }, "FR"),
            h("div", null, h("strong", null, "Canadian French"), h("small", null, "Quebec + Canada"))
          )
        )
      ),
      h("div", { className: "fc-hero-quality" },
        ...qualitySignals.map((label) => h("div", { className: "fc-hero-quality__item", key: label }, h(CheckIcon), h("span", null, label)))
      ),
      h("div", { className: "fc-hero-audience" },
        h("div", null,
          h("span", { className: "fc-hero-audience__label" }, "Localized for"),
          h("strong", null, "Quebec and Francophone Canada")
        ),
        h("div", { className: "fc-hero-content-icons", "aria-hidden": "true" },
          ...["document", "app", "cart", "chat"].map((name) => h("span", { className: "fc-hero-content-icon", key: name }, h(Icon, { name })))
        )
      )
    )
  );
}

const trustItems = ["ISO 17100 Certified", "Native Canadian French Linguists", "100+ Languages", "AI + Human Translation"];

const localExpertise = [
  { icon: "term", title: "Market-Appropriate Terminology", text: "Use Canadian business, technology, retail, institutional, and professional language rather than automatically reusing terminology created for France." },
  { icon: "chat", title: "Professional Tone and Register", text: "Match the right level of formality for customer marketing, workplace communication, legal documents, healthcare content, and public information." },
  { icon: "map", title: "Canadian Formatting Conventions", text: "Localize dates, times, currency, measurements, addresses, telephone numbers, punctuation, spacing, forms, and interface layouts." },
  { icon: "shield", title: "Industry and Institutional Language", text: "Apply established Canadian and Quebec terminology for healthcare, finance, insurance, government, law, education, technology, and employment." }
];

const comparisonRows = [
  ["Business communication", "Corporate, workplace, and administrative terminology may differ from common European usage."],
  ["Websites and e-commerce", "Navigation, product language, promotional messaging, and checkout terminology should feel natural to Canadian users."],
  ["Software and technology", "Interface language may follow Canadian preferences and established Quebec technology terminology."],
  ["Marketing", "Headlines, calls to action, humor, idioms, and persuasive language may require market-specific adaptation."],
  ["Government and public sector", "Canadian and Quebec institutions use established names, administrative language, and public-service terminology."],
  ["Formatting", "Dates, currency, numbers, measurements, and contact information should follow the intended Canadian locale."],
  ["Legal and regulated content", "Terminology must reflect the applicable jurisdiction, document purpose, and instructions from your legal or compliance teams."]
];

const adaptationSteps = [
  ["Review reusable content", "Evaluate the European French assets together with the source content and identify language that can remain unchanged."],
  ["Identify market-sensitive language", "Flag terminology, product language, interface text, calls to action, institutional references, and formatting that require adaptation."],
  ["Localize for Canada", "Apply Canadian French vocabulary, style, tone, locale conventions, and approved brand terminology."],
  ["Validate in context", "Review the adapted content in the final document, website, application, campaign, or product layout."],
  ["Preserve approved language", "Save Canadian French terminology and translations for future updates, releases, and related content."]
];

const services = [
  { icon: "globe", title: "Websites and E-Commerce", text: "Localize corporate sites, product pages, catalogs, checkout journeys, account portals, help centers, SEO content, banners, and email campaigns for Canadian audiences.", link: ["Website Translation Services", "https://www.stepes.com/website-translation-services/"] },
  { icon: "app", title: "Software and Mobile Applications", text: "Translate user interfaces, onboarding, notifications, subscription flows, online help, release notes, app-store content, and customer-support resources for the fr-CA locale.", link: ["Software Localization Services", "https://www.stepes.com/software-localization-services/"] },
  { icon: "package", title: "Product Packaging and Labeling", text: "Translate product descriptions, packaging panels, directions, warnings, inserts, warranty materials, retail displays, and quick-start guides with coordinated bilingual layout support." },
  { icon: "megaphone", title: "Marketing and Advertising", text: "Adapt campaigns, brand messaging, brochures, social content, video, search advertising, landing pages, and calls to action for Quebec and Francophone Canada.", link: ["Marketing Translation Services", "https://www.stepes.com/marketing-translation-services/"] },
  { icon: "users", title: "Employee and Workplace Communications", text: "Support bilingual operations with translated handbooks, policies, benefits, onboarding, job descriptions, safety procedures, portals, surveys, and internal announcements." },
  { icon: "cap", title: "Training and eLearning", text: "Localize courses, compliance training, product training, assessments, interactive modules, presentations, videos, subtitles, captions, voice-over, and reference materials.", link: ["eLearning Translation Services", "https://www.stepes.com/elearning-training-translation-services/"] },
  { icon: "scale", title: "Legal and Corporate Documents", text: "Translate contracts, policies, terms, privacy materials, employment agreements, legal notices, corporate records, regulatory correspondence, and governance documents.", link: ["Legal Translation Services", "https://www.stepes.com/legal-translation-services/"] },
  { icon: "heart", title: "Healthcare and Life Sciences", text: "Translate patient information, medical-device content, clinical materials, healthcare websites, training, product labeling, and provider or patient portals.", link: ["Healthcare Translation Services", "https://www.stepes.com/healthcare-translation-services/"] },
  { icon: "bank", title: "Financial and Insurance Content", text: "Localize banking interfaces, policies, claims communication, investment content, customer notices, disclosures, benefits information, forms, and support content.", link: ["Financial Translation Services", "https://www.stepes.com/financial-translation-services/"] },
  { icon: "document", title: "Government and Public-Sector Communication", text: "Translate public-information campaigns, service websites, forms, community communications, reports, procurement content, policies, educational resources, and stakeholder materials." }
];

const terminologyRows = [
  ["Email", "courriel"],
  ["Online chat", "clavardage"],
  ["Shopping", "magasinage"],
  ["Weekend", "fin de semaine"]
];

const complianceAreas = [
  "Websites, e-commerce, and public-facing communications",
  "Product packaging, labels, and supporting information",
  "Employment materials, workplace policies, and training",
  "Contracts, notices, terms, and customer documents",
  "Signage, customer support, and regulated content"
];

const linguistCriteria = [
  ["globe", "Native Canadian French proficiency", "Professional written French tailored to Quebec or broader Francophone Canadian audiences."],
  ["term", "Subject-matter expertise", "Relevant experience with your industry, terminology, content type, and communication risk."],
  ["users", "Audience and register fit", "The right tone for customers, employees, patients, professionals, or public-sector users."],
  ["document", "Client language alignment", "Careful use of your approved glossary, style guide, product names, and brand voice."],
  ["qa", "Independent linguistic review", "A second Canadian French linguist can review accuracy, fluency, terminology, and consistency."],
  ["shield", "Final-format quality assurance", "Validation in the finished document, website, software interface, video, or designed layout."]
];

const processSteps = [
  ["Define the audience", "Confirm the province or region, customer group, industry, content purpose, tone, channel, and any legal or regulatory considerations."],
  ["Review existing French assets", "Evaluate European French translations, Canadian French content, glossaries, style guides, and previously approved bilingual materials."],
  ["Establish Canadian terminology", "Create or validate the glossary, product language, brand expressions, technical terms, and institutional terminology."],
  ["Assign qualified linguists", "Match the content with native Canadian French translators and editors who understand the industry and intended audience."],
  ["Translate or adapt for fr-CA", "Apply Canadian terminology, tone, formatting, and locale conventions while preserving the purpose of the source content."],
  ["Perform linguistic and technical QA", "Review accuracy, fluency, terminology, formatting, context, layout, variables, links, and functional localization behavior."],
  ["Capture approved language", "Store approved translations, terminology, and reviewer feedback for future projects, updates, and software releases."]
];

const techItems = [
  "Maintain dedicated fr-CA terminology and translation memories",
  "Reuse approved translations across products and business units",
  "Connect websites, applications, and content repositories",
  "Support frequent software and content releases",
  "Route specialized content to qualified human linguists",
  "Review translations online and capture stakeholder feedback",
  "Apply automated quality checks consistently",
  "Track translation activity across ongoing programs"
];

const industries = [
  ["Healthcare and Life Sciences", "Patient materials, medical-device content, clinical documentation, healthcare websites, training, and regulated product information."],
  ["Legal", "Contracts, policies, notices, employment documents, intellectual property, and corporate legal content."],
  ["Financial Services", "Banking platforms, customer communication, investment content, financial reports, and disclosures."],
  ["Insurance", "Policies, claims communication, portals, forms, benefits information, and marketing content."],
  ["Software and SaaS", "fr-CA interfaces, mobile apps, onboarding, documentation, release notes, and support experiences."],
  ["Manufacturing", "Technical manuals, safety content, procedures, product catalogs, packaging, and engineering documentation."],
  ["Retail and E-Commerce", "Product catalogs, promotions, checkout journeys, packaging, loyalty programs, and support."],
  ["Travel and Hospitality", "Booking experiences, destination content, guest communication, tourism campaigns, and service materials."],
  ["Energy and Utilities", "Technical, safety, environmental, training, field-service, and public-information content."],
  ["Government and Public Sector", "Public services, forms, websites, community communications, research, and procurement content."],
  ["Media and Entertainment", "Subtitles, captions, voice-over, streaming interfaces, campaigns, and audience engagement."],
  ["Education and eLearning", "Courses, assessments, educational websites, student resources, videos, and interactive content."]
];

const benefits = [
  ["Native Canadian French", "Professional written language tailored to the intended Canadian audience."],
  ["European French Adaptation", "Reuse strong existing content while correcting market-sensitive language."],
  ["fr-CA Digital Localization", "Support software, mobile, web, and structured content for Canada."],
  ["Industry Expertise", "Match linguists and reviewers to the content’s subject and risk level."],
  ["Scalable Workflows", "Combine translation memory, terminology, APIs, AI, and human review."]
];

const faqs = [
  ["Is Canadian French different from French used in France?", "Yes. Canadian and European French share the same core language, but they can differ in terminology, tone, idiomatic usage, institutional language, and formatting conventions. These differences are especially important for websites, software, marketing, workplace communication, public-sector content, and regulated materials."],
  ["Should I say French Canadian or Canadian French?", "Both expressions are widely understood. “French Canadian translation services” is commonly used as a commercial service phrase, while “Canadian French” is often more precise when referring to the language variety, terminology, or locale. Stepes uses both naturally while distinguishing this service from broader worldwide French translation."],
  ["Can I use an existing European French translation in Canada?", "Sometimes, but it should first be reviewed by a Canadian French linguist. Neutral passages may require few changes, while marketing, product language, software terminology, institutional references, and customer-facing content may need more substantial adaptation."],
  ["What does fr-CA mean?", "fr-CA is the locale identifier for French as used in Canada. It helps software, websites, applications, and localization systems distinguish Canadian French from French intended for France or other markets. Supporting the locale can include terminology, dates, currency, numbers, measurements, forms, and interface behavior."],
  ["Do you provide Quebec French translation services?", "Yes. Stepes provides Canadian French translation for Quebec as well as broader Francophone Canadian audiences. We tailor terminology and tone according to the target audience, industry, content type, and communication channel."],
  ["Is French translation required for businesses operating in Quebec?", "French-language requirements depend on the organization, content, industry, audience, and circumstances. Customers should consult qualified legal or regulatory advisers to determine their obligations. Stepes can then translate and localize the required content according to those instructions."],
  ["Can Stepes adapt France-French content for Quebec?", "Yes. Our European French-to-Canadian French adaptation service reviews existing content for terminology, tone, formatting, institutional references, cultural relevance, and customer expectations. This can be more efficient than translating the source again when the existing French version is accurate and reusable."],
  ["Do you translate Canadian French into English?", "Yes. Stepes supports both English-to-Canadian French and Canadian French-to-English translation across legal, medical, technical, financial, corporate, and customer-facing content."],
  ["Can you translate product packaging for Canada?", "Yes. We translate packaging, labels, instructions, warnings, inserts, and product information into Canadian French. Our multilingual desktop publishing teams can also place translations into design files and support bilingual layouts. Customers remain responsible for determining applicable legal and regulatory requirements."],
  ["Do you provide Canadian French software localization?", "Yes. We localize interfaces, mobile applications, SaaS platforms, help content, notifications, onboarding flows, app-store descriptions, and software documentation for the fr-CA locale. We also provide linguistic testing, terminology management, translation APIs, and continuous localization."],
  ["How do you maintain consistency across ongoing projects?", "Stepes uses Canadian French glossaries, style guides, translation memory, automated quality checks, and stored client feedback. Approved language can then be applied consistently across documents, websites, applications, campaigns, and future updates."],
  ["Can Stepes support both France and Canada in one project?", "Yes. Stepes can manage separate European French and Canadian French versions within one localization program. Shared source content and reusable translations improve efficiency, while locale-specific terminology and review preserve the distinctions required for each audience."]
];

const related = [
  ["French Translation Services", "Translate for France and other French-speaking markets worldwide.", "https://www.stepes.com/french-translation-services/"],
  ["Website Translation Services", "Build localized websites and digital customer experiences.", "https://www.stepes.com/website-translation-services/"],
  ["Software Localization Services", "Localize software, SaaS platforms, mobile apps, and connected products.", "https://www.stepes.com/software-localization-services/"],
  ["Marketing Translation Services", "Adapt campaigns, brand messaging, and customer communication.", "https://www.stepes.com/marketing-translation-services/"],
  ["Legal Translation Services", "Translate contracts, policies, notices, and corporate legal materials.", "https://www.stepes.com/legal-translation-services/"],
  ["Healthcare Translation Services", "Support patients and healthcare professionals with specialized translation.", "https://www.stepes.com/healthcare-translation-services/"],
  ["Translation API", "Connect websites, applications, and content systems to translation workflows.", "https://www.stepes.com/translation-api/"],
  ["Terminology Management", "Create and maintain approved Canadian French terminology.", "https://www.stepes.com/terminology-management/"],
  ["Translation Memory", "Reuse approved translations to improve consistency and turnaround.", "https://www.stepes.com/translation-memory-management/"]
];

export default function StepesFrenchCanadianTranslationServicesWireframe() {
  return h("main", { className: "fc-page" },
    h("style", null, styles),

    h("section", { className: "fc-hero" },
      h("div", { className: "fc-shell fc-hero__grid" },
        h("div", { className: "fc-hero__copy" },
          h("h1", { className: "fc-h1" }, "French Canadian Translation Services"),
          h("p", { className: "fc-lead" }, "Connect with customers, employees, and users across Quebec and Francophone Canada with translations that sound natural, professional, and locally appropriate."),
          h("p", { className: "fc-copy" }, "Stepes provides expert Canadian French translation for documents, websites, software, mobile applications, marketing, training, product content, and regulated communications. Our native Canadian French linguists combine local language expertise with industry knowledge, terminology management, and scalable technology."),
          h("div", { className: "fc-buttons" },
            h(Button, { href: QUOTE_URL, primary: true }, "Get a Translation Quote"),
            h(Button, { href: CONTACT_URL }, "Talk to an Expert")
          )
        ),
        h(HeroIllustration)
      )
    ),

    h("section", { className: "fc-trust", "aria-label": "Service credentials" },
      h("div", { className: "fc-shell fc-trust__grid" },
        ...trustItems.map((item) => h("div", { className: "fc-trust__item", key: item }, item))
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell fc-intro-grid" },
        h(SectionHeading, {
          title: "Reach Customers Across Quebec and Francophone Canada",
          lead: "Canadian French translation helps your organization communicate clearly with customers, employees, patients, users, partners, and public-sector audiences throughout Canada."
        }),
        h("div", { className: "fc-intro-panel" },
          h("h3", { className: "fc-h3" }, "Translation Built for the Canadian Market"),
          h("p", { className: "fc-copy" }, "Translating for Canada requires more than producing generic French. Canadian audiences expect terminology, messaging, and digital experiences that reflect how French is professionally used in Quebec and other Francophone communities."),
          h("ul", { className: "fc-check-list" },
            ...[
              "Native Canadian French linguists selected by subject and audience",
              "Quebec-focused or Canada-wide terminology and style",
              "English-to-Canadian French and Canadian French-to-English support",
              "European French-to-Canadian French adaptation",
              "Documents, digital products, multimedia, and designed files"
            ].map((item) => h("li", { key: item }, h(CheckIcon), h("span", null, item)))
          )
        )
      )
    ),

    h("section", { className: "fc-section fc-section--soft" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "Why Canadian French Requires Local Expertise",
          lead: "Content created for France may be understandable in Canada while still sounding unfamiliar, overly European, or poorly adapted to the intended customer, employee, or user experience."
        }),
        h("div", { className: "fc-editorial-list" },
          ...localExpertise.map((item) => h("div", { className: "fc-editorial-row", key: item.title },
            h("div", { className: "fc-editorial-row__icon" }, h(Icon, { name: item.icon })),
            h("h3", { className: "fc-h3" }, item.title),
            h("p", { className: "fc-copy" }, item.text)
          ))
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "Canadian French Versus European French",
          lead: "Neither variety is inherently more correct. The right choice depends on the market, audience, industry, content type, and communication setting."
        }),
        h("div", { className: "fc-compare" },
          h("article", { className: "fc-compare__panel" },
            h("span", { className: "fc-compare__label" }, "France and International Markets"),
            h("h3", { className: "fc-h3" }, "European French"),
            h("p", { className: "fc-copy" }, "Appropriate for audiences in France and often used as a base for broader international French content. Terminology, consumer language, digital conventions, and institutional references reflect European usage."),
            h(TextLink, { href: "https://www.stepes.com/french-translation-services/" }, "Explore French Translation Services")
          ),
          h("article", { className: "fc-compare__panel fc-compare__panel--canada" },
            h("span", { className: "fc-compare__label" }, "Quebec and Francophone Canada"),
            h("h3", { className: "fc-h3" }, "Canadian French"),
            h("p", { className: "fc-copy" }, "Designed for Canadian audiences using locally expected terminology, professional tone, government and institutional language, digital conventions, and Canadian market formatting."),
            h("p", { className: "fc-copy" }, "Stepes can support Quebec-specific programs or broader Canadian French content based on your audience and business objectives.")
          )
        ),
        h("div", { className: "fc-comparison-table" },
          ...comparisonRows.map(([title, text]) => h("div", { className: "fc-comparison-row", key: title },
            h("strong", null, title),
            h("p", null, text)
          ))
        )
      )
    ),

    h("section", { className: "fc-section fc-section--blush" },
      h("div", { className: "fc-shell" },
        h("div", { className: "fc-adapt-panel" },
          h("div", null,
            h("h2", { className: "fc-h2" }, "Adapt European French Content for Canadian Audiences"),
            h("p", { className: "fc-lead" }, "When your existing France-French content is accurate and well written, targeted adaptation can be more efficient than translating the English source again."),
            h("p", { className: "fc-copy" }, "Our linguists preserve reusable content while revising terminology, product language, user-interface text, brand voice, formatting, institutional references, and market-sensitive messaging for Canada.")
          ),
          h("div", { className: "fc-adapt-steps" },
            ...adaptationSteps.map(([title, text], index) => h("div", { className: "fc-adapt-step", key: title },
              h("span", { className: "fc-adapt-step__number" }, String(index + 1).padStart(2, "0")),
              h("div", null, h("strong", null, title), h("p", null, text))
            ))
          )
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "Translate Every Customer and Business Touchpoint",
          lead: "Stepes localizes the content customers use to discover, evaluate, purchase, operate, and receive support for your products and services in Canada."
        }),
        h("div", { className: "fc-services-grid" },
          ...services.map((item) => h("article", { className: "fc-service-item", key: item.title },
            h("div", { className: "fc-service-item__icon" }, h(Icon, { name: item.icon })),
            h("div", null,
              h("h3", { className: "fc-h3" }, item.title),
              h("p", { className: "fc-copy" }, item.text),
              item.link ? h(TextLink, { href: item.link[1] }, item.link[0]) : null
            )
          ))
        )
      )
    ),

    h("section", { className: "fc-section fc-section--dark" },
      h("div", { className: "fc-shell fc-digital-grid" },
        h("div", null,
          h("h2", { className: "fc-h2" }, "Build Digital Experiences for the fr-CA Locale"),
          h("p", { className: "fc-lead" }, "The fr-CA locale distinguishes French content designed for Canada across software, websites, applications, databases, and localization platforms."),
          h("p", { className: "fc-copy" }, "Stepes localizes interface language together with dates, currency, numbers, measurements, addresses, telephone formats, forms, consent notices, and other locale-dependent behavior."),
          h("ul", { className: "fc-simple-list" },
            ...[
              "User interfaces, onboarding, navigation, and system messages",
              "Character limits, text expansion, mobile layouts, and responsive screens",
              "In-context linguistic QA and functional localization testing",
              "Translation APIs and continuous localization for frequent releases"
            ].map((item) => h("li", { key: item }, h("span", { className: "fc-marker" }), h("span", null, item)))
          ),
          h(TextLink, { href: "https://www.stepes.com/translation-api/" }, "Explore the Translation API")
        ),
        h("div", { className: "fc-product", "aria-label": "Illustrative Canadian French localization workspace" },
          h("div", { className: "fc-product__bar" },
            h("div", { className: "fc-product__dots" }, h("span"), h("span"), h("span")),
            h("span", null, "Canadian French Localization")
          ),
          h("div", { className: "fc-product__body" },
            h("aside", { className: "fc-product__sidebar" },
              h("strong", null, "Spring Product Release"),
              h("small", null, "English → French (Canada)"),
              h("div", { className: "fc-product__nav" },
                h("div", null, "Overview"),
                h("div", { className: "is-active" }, "Interface strings"),
                h("div", null, "Terminology"),
                h("div", null, "Quality review")
              )
            ),
            h("div", { className: "fc-product__main" },
              h("div", { className: "fc-product__locale" }, h("strong", null, "Checkout experience"), h("span", null, "fr-CA")),
              h("div", { className: "fc-string-card" },
                h("div", { className: "fc-string-card__meta" }, h("span", null, "BUTTON_CHECKOUT"), h("span", null, "Customer-facing")),
                h("strong", null, "Proceed to checkout"),
                h("p", null, "Passer à la caisse"),
                h("div", { className: "fc-qa-line" }, h(CheckIcon), h("span", null, "Approved Canadian French terminology applied"))
              ),
              h("div", { className: "fc-string-card" },
                h("div", { className: "fc-string-card__meta" }, h("span", null, "SUPPORT_CHAT"), h("span", null, "Help center")),
                h("strong", null, "Start a chat"),
                h("p", null, "Démarrer un clavardage"),
                h("div", { className: "fc-qa-line" }, h(CheckIcon), h("span", null, "In-context review complete"))
              )
            )
          )
        )
      )
    ),

    h("section", { className: "fc-section fc-section--soft" },
      h("div", { className: "fc-shell fc-terminology-grid" },
        h("div", null,
          h(SectionHeading, {
              title: "Keep Canadian French Terminology Consistent",
            lead: "Approved Canadian terminology should remain consistent across marketing, product, legal, support, training, documentation, and future content updates."
          }),
          h("p", { className: "fc-copy" }, "Stepes creates Canadian French glossaries, style guides, do-not-translate lists, product naming guidance, and locale-specific translation memories. Client edits and reviewer decisions are captured so the program improves over time."),
          h("div", { className: "fc-link-stack" },
            h(TextLink, { href: "https://www.stepes.com/terminology-management/" }, "Terminology Management"),
            h(TextLink, { href: "https://www.stepes.com/translation-memory-management/" }, "Translation Memory")
          )
        ),
        h("div", { className: "fc-term-board" },
          h("div", { className: "fc-term-board__head" }, h("strong", null, "Canadian French Termbase"), h("span", null, "Illustrative entries")),
          ...terminologyRows.map(([english, french]) => h("div", { className: "fc-term-row", key: english },
            h("span", null, english),
            h("strong", null, french),
            h("em", null, "Approved")
          ))
        )
      )
    ),

    h("section", { className: "fc-section fc-section--blush" },
      h("div", { className: "fc-shell fc-compliance" },
        h(SectionHeading, {
          title: "Support for Quebec and Canadian French-Language Content",
          lead: "French-language requirements vary by jurisdiction, organization, industry, content type, audience, and intended use."
        }),
        h("div", null,
          h("p", { className: "fc-copy" }, "Organizations operating in Quebec may encounter French-language requirements affecting commerce, workplace communication, websites, product information, contracts, public-facing content, and other business materials. Federal obligations also apply in defined governmental and regulated contexts."),
          h("ul", { className: "fc-check-list" },
            ...complianceAreas.map((item) => h("li", { key: item }, h(CheckIcon), h("span", null, item)))
          ),
          h("div", { className: "fc-notice" },
            h("div", { className: "fc-notice__title" }, h(Icon, { name: "alert" }), h("span", null, "Translation support, not legal advice")),
            h("p", null, "Stepes provides professional translation and localization services. Customers should consult qualified legal or regulatory advisers to determine the requirements applicable to their organization and content. We then translate and localize according to those approved instructions.")
          )
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell fc-expertise-grid" },
        h("div", null,
          h(SectionHeading, {
              title: "Native Canadian French Linguists With Industry Expertise",
            lead: "Strong translation depends on both linguistic fluency and subject-matter knowledge."
          }),
          h("p", { className: "fc-copy" }, "Stepes builds each project team around the market, subject matter, content purpose, and quality requirements—not simply the language pair."),
          h("p", { className: "fc-copy" }, "For high-impact, technical, or regulated content, an independent Canadian French editor can provide a second evaluation before final-format quality assurance.")
        ),
        h("div", { className: "fc-linguist-panel" },
          h("div", { className: "fc-linguist-panel__head" },
            h("strong", null, "How We Select Your Canadian French Team"),
            h("span", null, "Every assignment is matched to the audience, subject, content risk, and final format.")
          ),
          h("ul", { className: "fc-linguist-list" },
            ...linguistCriteria.map(([icon, title, text]) => h("li", { className: "fc-linguist-item", key: title },
              h("span", { className: "fc-linguist-item__icon" }, h(Icon, { name: icon })),
              h("div", null, h("strong", null, title), h("span", null, text))
            ))
          )
        )
      )
    ),

    h("section", { className: "fc-section fc-section--soft" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "A Quality Process Designed for the Canadian Market",
          lead: "Our workflow begins with the audience and business purpose, not with a generic language selection."
        }),
        h("div", { className: "fc-process" },
          ...processSteps.map(([title, text], index) => h("div", { className: "fc-process-step", key: title },
            h("span", { className: "fc-process-step__number" }, String(index + 1).padStart(2, "0")),
            h("strong", null, title),
            h("p", null, text)
          ))
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell" },
        h("div", { className: "fc-tech-panel" },
          h("div", null,
            h("h2", { className: "fc-h2" }, "Scale Canadian French Translation Across Your Organization"),
            h("p", { className: "fc-lead" }, "Stepes combines professional linguists with modern translation technology to support individual projects and ongoing enterprise programs."),
            h("p", { className: "fc-copy" }, "Workflows can combine secure AI translation, professional translation, editing, and review based on content visibility, linguistic complexity, industry risk, brand sensitivity, turnaround, and regulatory considerations."),
            h(TextLink, { href: "https://www.stepes.com/ai-machine-learning-translation-services/" }, "AI and Machine Learning Translation")
          ),
          h("div", { className: "fc-tech-list" },
            ...techItems.map((item) => h("div", { className: "fc-tech-item", key: item }, h(CheckIcon), h("span", null, item)))
          )
        )
      )
    ),

    h("section", { className: "fc-section fc-section--soft" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "Canadian French Translation Across Industries",
          lead: "Stepes combines native Canadian French language skills with the subject expertise required for technical, customer-facing, and regulated content."
        }),
        h("div", { className: "fc-industries-grid" },
          ...industries.map(([title, text]) => h("article", { className: "fc-industry", key: title },
            h("h3", { className: "fc-h3" }, title),
            h("p", { className: "fc-copy" }, text)
          ))
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "English and Canadian French Translation",
          lead: "Stepes provides professional translation in both directions and can coordinate Canadian French with European French and more than 100 additional languages."
        }),
        h("div", { className: "fc-directions" },
          h("article", { className: "fc-direction" },
            h("div", { className: "fc-editorial-row__icon" }, h(Icon, { name: "globe" })),
            h("h3", { className: "fc-h3" }, "English-to-Canadian French"),
            h("p", { className: "fc-copy" }, "Support Quebec market entry, bilingual Canadian websites, software, mobile apps, packaging, employee communication, training, marketing, legal materials, and technical documentation.")
          ),
          h("article", { className: "fc-direction" },
            h("div", { className: "fc-editorial-row__icon" }, h(Icon, { name: "document" })),
            h("h3", { className: "fc-h3" }, "Canadian French-to-English"),
            h("p", { className: "fc-copy" }, "Translate contracts, government communication, corporate records, healthcare content, research, customer correspondence, financial reports, and technical documents originating in Quebec or elsewhere in Canada.")
          )
        ),
        h(TextLink, { href: "https://www.stepes.com/translation-languages/" }, "Explore All Translation Languages")
      )
    ),

    h("section", { className: "fc-section fc-section--dark" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          eyebrow: "Why Stepes",
          title: "Canadian Market Expertise With Enterprise Scale",
          lead: "Build a consistent Canadian French experience across documents, digital products, campaigns, training, multimedia, and ongoing content updates."
        }),
        h("div", { className: "fc-benefits" },
          ...benefits.map(([title, text]) => h("div", { className: "fc-benefit", key: title }, h("strong", null, title), h("span", null, text)))
        )
      )
    ),

    h("section", { className: "fc-section" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "French Canadian Translation Services FAQs",
          lead: "Answers to common questions about Canadian French, Quebec localization, fr-CA, and multilingual Canadian programs."
        }),
        h("div", { className: "fc-faq" },
          ...faqs.map(([question, answer], index) => h("details", { key: question, open: index === 0 },
            h("summary", null, question),
            h("div", { className: "fc-faq__answer" }, answer)
          ))
        )
      )
    ),

    h("section", { className: "fc-section fc-section--dense fc-section--soft" },
      h("div", { className: "fc-shell" },
        h(SectionHeading, {
          title: "Related Translation and Localization Services",
          lead: "Connect Canadian French translation with the broader Stepes services your global content program may require."
        }),
        h("div", { className: "fc-related" },
          ...related.map(([title, text, href]) => h("div", { className: "fc-related__item", key: title },
            h("a", { href }, h("span", null, title), h(ArrowIcon)),
            h("p", null, text)
          ))
        )
      )
    ),

    h("section", { className: "fc-final-cta" },
      h("div", { className: "fc-shell" },
        h("div", { className: "fc-final-cta__panel" },
          h("div", null,
            h("h2", { className: "fc-h2" }, "Translate Your Content for French-Speaking Canada"),
            h("p", { className: "fc-lead" }, "Reach customers, employees, and users across Quebec and Francophone Canada with native Canadian French expertise, industry-specialized linguists, terminology management, fr-CA localization, and scalable translation technology."),
            h("div", { className: "fc-buttons" },
              h(Button, { href: QUOTE_URL, primary: true }, "Get a Translation Quote"),
              h(Button, { href: CONTACT_URL }, "Talk to an Expert")
            )
          ),
          h("div", { className: "fc-final-cta__art", "aria-hidden": "true" },
            h("div", { className: "fc-cta-visual" },
              h("div", { className: "fc-cta-visual__ring" }),
              h("div", { className: "fc-cta-visual__core" }, "fr-CA"),
              h("div", { className: "fc-cta-language-card fc-cta-language-card--source" },
                h("small", null, "Source content"),
                h("strong", null, "English")
              ),
              h("div", { className: "fc-cta-language-card fc-cta-language-card--target" },
                h("small", null, "Localized for Canada"),
                h("strong", null, "Français canadien"),
                h("span", { className: "fc-cta-status" }, h(CheckIcon), "Ready for review")
              )
            )
          )
        )
      )
    )
  );
}
