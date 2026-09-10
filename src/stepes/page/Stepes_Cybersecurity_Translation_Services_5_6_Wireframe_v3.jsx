import React, { useState } from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-sales/";


const pageStyles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .cyber-page {
    --magenta: #C11D63;
    --magenta-dark: #9F1D55;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --blush-accent: #F2A7C6;
    --ink: #17181B;
    --body: #3C3E43;
    --muted: #656970;
    --line: #E4E5E8;
    --soft: #F6F7F8;
    --dark: #17181C;
    --dark-panel: #23252B;
    --white: #FFFFFF;
    background: #fff;
    color: var(--ink);
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }
  .cyber-page h1, .cyber-page h2, .cyber-page h3, .cyber-page p { margin-top: 0; }
  .cyber-page h1, .cyber-page h2, .cyber-page h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.025em; overflow-wrap: break-word; }
  .cyber-page h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
  .cyber-page h2 { font-size: 36px; line-height: 1.14; margin-bottom: 22px; }
  .cyber-page h3 { font-size: 24px; line-height: 1.25; margin-bottom: 10px; }
  .cyber-page p { color: var(--body); font-size: 16px; line-height: 1.72; margin-bottom: 18px; }
  .cyber-page ul { margin: 0; padding: 0; list-style: none; }
  .cyber-page a { color: inherit; }
  .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
  .section { padding: 96px 0; }
  .section-dense { padding: 80px 0; }
  .section-soft { background: var(--soft); }
  .section-blush { background: var(--blush); }
  .section-dark { background: var(--dark); color: var(--white); }
  .section-dark h2, .section-dark h3 { color: var(--white); }
  .section-dark p { color: #D5D7DB; }
  .eyebrow {
    display: block;
    margin: 0 0 14px;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  .section-dark .eyebrow { color: var(--blush-accent); }
  .section-dark .editorial-link { color: var(--blush-accent) !important; }
  .intro { max-width: 800px; font-size: 18px !important; line-height: 1.68 !important; }
  .hero-copy .intro { max-width: 650px; }
  .section-heading { max-width: 820px; margin-bottom: 46px; }
  .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
  .section-heading.centered .intro { margin-left: auto; margin-right: auto; }
  .pill-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 13px 24px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    text-align: center;
    max-width: 100%;
    white-space: normal;
    transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .pill-button.primary,
  .pill-button.primary:link,
  .pill-button.primary:visited,
  .pill-button.primary:hover,
  .pill-button.primary:active,
  .pill-button.primary:focus,
  .pill-button.primary:focus-visible {
    background: var(--magenta);
    color: #fff !important;
  }
  .pill-button.primary svg { stroke: #fff !important; fill: none !important; }
  .pill-button.primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .pill-button.secondary { background: #fff; color: var(--ink); border-color: #CFD1D6; }
  .pill-button.secondary:hover { border-color: #A9ADB4; transform: translateY(-1px); }
  .pill-button:focus-visible, .editorial-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
  .button-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 44px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    max-width: 100%;
    overflow-wrap: break-word;
  }
  .editorial-link svg { transition: transform .18s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .hero {
    padding: 104px 0 92px;
    background:
      radial-gradient(circle at 88% 12%, rgba(193,29,99,.055), transparent 26%),
      linear-gradient(180deg, #fff 0%, #FCFCFD 100%);
  }
  .hero-grid { display: grid; grid-template-columns: minmax(0, .94fr) minmax(460px, 1.06fr); gap: 64px; align-items: center; }
  .hero-grid > *, .split-editorial > *, .experience-layout > *, .product-layout > *, .dual-section > *, .editorial-pair > *, .training-layout > *, .terminology-wrap > *, .security-layout > *, .risk-layout > *, .connected-layout > *, .language-layout > *, .related-row > *, .cta-box > * { min-width: 0; }
  .hero-trust { margin-top: 24px; color: #555961; font-size: 16px; line-height: 1.55; }
  .hero-art {
    position: relative;
    min-height: 500px;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: #FAFAFB;
    overflow: hidden;
    box-shadow: 0 24px 54px rgba(20,20,25,.06);
  }
  .hero-art svg { width: 100%; height: 100%; position: absolute; inset: 0; }
  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
  .proof-item { padding: 30px 26px; min-width: 0; }
  .proof-item + .proof-item { border-left: 1px solid var(--line); }
  .proof-title { display: block; color: var(--ink); font-weight: 600; margin-bottom: 5px; }
  .proof-copy { color: var(--muted); font-size: 16px; line-height: 1.5; }
  .split-editorial { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 76px; align-items: start; }
  .sticky-heading { position: sticky; top: 32px; }
  .editorial-rows { border-top: 1px solid var(--line); }
  .editorial-row { display: grid; grid-template-columns: 54px minmax(0,1fr); gap: 22px; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .icon-box { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); display: grid; place-items: center; color: var(--magenta); }
  .icon-box svg { width: 22px; height: 22px; stroke: currentColor; }
  .editorial-row h3 { margin-bottom: 8px; }
  .editorial-row p { margin-bottom: 0; }
  .experience-layout { display: grid; grid-template-columns: minmax(0,1.04fr) minmax(420px,.96fr); gap: 64px; align-items: center; }
  .experience-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--line); }
  .experience-item { padding: 24px 24px 24px 0; border-bottom: 1px solid var(--line); }
  .experience-item:nth-child(odd) { padding-right: 28px; }
  .experience-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
  .experience-item p { margin-bottom: 0; }
  .ecosystem-art { min-height: 510px; border-radius: 30px; background: #fff; border: 1px solid var(--line); overflow: hidden; position: relative; box-shadow: 0 18px 44px rgba(20,20,25,.045); }
  .ecosystem-art svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .product-layout { display: grid; grid-template-columns: minmax(0,.92fr) minmax(470px,1.08fr); gap: 64px; align-items: center; }
  .product-mockup { border-radius: 30px; background: #fff; border: 1px solid var(--line); box-shadow: 0 18px 44px rgba(20,20,25,.055); overflow: hidden; }
  .mockup-top { height: 54px; display: flex; align-items: center; gap: 8px; padding: 0 20px; border-bottom: 1px solid var(--line); background: #F8F8F9; }
  .mock-dot { width: 8px; height: 8px; border-radius: 50%; background: #C9CBD0; }
  .mockup-body { display: grid; grid-template-columns: 154px minmax(0,1fr); min-height: 448px; }
  .mock-sidebar { background: #1B1D22; padding: 24px 18px; }
  .mock-brand { width: 74px; height: 9px; border-radius: 9px; background: #F2A7C6; margin-bottom: 28px; }
  .mock-nav { height: 9px; border-radius: 8px; background: #464951; margin-bottom: 16px; }
  .mock-nav.active { width: 86%; background: #8B365E; }
  .mock-main { padding: 27px; }
  .mock-heading { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 23px; }
  .mock-line { height: 10px; border-radius: 7px; background: #D4D5D9; }
  .mock-line.strong { background: #747880; }
  .mock-line.magenta { background: #C11D63; }
  .mock-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin-bottom: 17px; }
  .mock-card { height: 86px; border: 1px solid #E3E4E6; border-radius: 16px; padding: 15px; background: #fff; }
  .mock-chart { height: 154px; border: 1px solid #E3E4E6; border-radius: 18px; padding: 18px; display: flex; align-items: end; gap: 9px; }
  .mock-bar { width: 100%; border-radius: 5px 5px 0 0; background: #D3D5D9; }
  .mock-bar.accent { background: #C11D63; }
  .bullet-list { display: grid; gap: 11px; margin: 24px 0 28px; }
  .bullet-list li { display: grid; grid-template-columns: 8px minmax(0,1fr); gap: 12px; color: var(--body); font-size: 16px; line-height: 1.6; }
  .bullet-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #A7AAB0; margin-top: .64em; }
  .dual-section { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px; }
  .editorial-pair { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .editorial-pair-column { padding: 36px 42px 36px 0; }
  .editorial-pair-column + .editorial-pair-column { padding-left: 42px; padding-right: 0; border-left: 1px solid var(--line); }
  .feature-panel { border-radius: 28px; border: 1px solid var(--line); background: #fff; padding: 38px; }
  .feature-panel.blush { background: var(--blush); border-color: #F3DDE7; }
  .mini-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px 24px; margin: 24px 0; }
  .mini-list span { color: var(--body); font-size: 16px; padding-bottom: 9px; border-bottom: 1px solid rgba(190,193,199,.72); }
  .training-layout { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 70px; align-items: start; }
  .training-matrix { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
  .training-cell { padding: 26px; min-height: 145px; }
  .training-cell:nth-child(odd) { border-right: 1px solid var(--line); }
  .training-cell:nth-child(-n+4) { border-bottom: 1px solid var(--line); }
  .terminology-wrap { display: grid; grid-template-columns: minmax(0,.9fr) minmax(460px,1.1fr); gap: 62px; align-items: center; }
  .terminology-art { min-height: 510px; border-radius: 30px; background: #fff; border: 1px solid #F0DCE5; position: relative; overflow: hidden; }
  .terminology-art svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .workflow { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-top: 44px; }
  .workflow-step { position: relative; padding: 30px 20px 30px 0; min-height: 230px; }
  .workflow-step + .workflow-step { padding-left: 22px; border-left: 1px solid var(--line); }
  .step-number { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-weight: 600; font-size: 15px; margin-bottom: 24px; }
  .workflow-label { color: var(--ink); font-size: 19px; font-weight: 600; line-height: 1.3; margin-bottom: 8px; }
  .workflow-step p { font-size: 16px; line-height: 1.55; margin-bottom: 0; }
  .security-layout { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 76px; align-items: start; }
  .security-matrix { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border: 1px solid #373A42; border-radius: 28px; overflow: hidden; background: var(--dark-panel); }
  .security-cell { padding: 28px; min-height: 194px; }
  .security-cell:nth-child(odd) { border-right: 1px solid #373A42; }
  .security-cell:nth-child(-n+4) { border-bottom: 1px solid #373A42; }
  .security-cell p { margin-bottom: 0; color: #C8CBD1; }
  .security-icon { width: 40px; height: 40px; border-radius: 13px; display: grid; place-items: center; background: rgba(242,167,198,.09); color: var(--blush-accent); margin-bottom: 18px; }
  .security-icon svg { width: 21px; height: 21px; stroke: currentColor; }
  .risk-layout { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 72px; align-items: center; }
  .risk-spectrum { background: #fff; border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
  .risk-row { display: grid; grid-template-columns: 150px minmax(0,1fr); gap: 24px; padding: 25px 28px; align-items: start; }
  .risk-row + .risk-row { border-top: 1px solid var(--line); }
  .risk-label { font-weight: 600; color: var(--ink); }
  .risk-row p { margin-bottom: 0; }
  .principle { margin-top: 25px; padding-left: 20px; border-left: 3px solid var(--magenta); color: var(--ink); font-size: 19px; line-height: 1.55; font-weight: 600; }
  .landscape-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .landscape-item { padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-height: 210px; }
  .connected-layout { display: grid; grid-template-columns: minmax(0,.95fr) minmax(440px,1.05fr); gap: 64px; align-items: center; }
  .connected-art { min-height: 460px; border-radius: 30px; border: 1px solid var(--line); background: #fff; position: relative; overflow: hidden; }
  .connected-art svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .inline-links { display: flex; flex-wrap: wrap; gap: 10px 26px; margin-top: 20px; }
  .language-layout { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 70px; align-items: start; }
  .language-chips { display: flex; flex-wrap: wrap; gap: 10px; }
  .language-chip { padding: 10px 14px; border-radius: 999px; background: #fff; border: 1px solid var(--line); color: var(--ink); font-size: 16px; }
  .why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .why-item { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-height: 188px; }
  .related-list { border-top: 1px solid var(--line); }
  .related-row { display: grid; grid-template-columns: minmax(220px,.55fr) minmax(0,1fr) auto; gap: 30px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .related-row p { margin-bottom: 0; }
  .practice-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
  .practice-card { border-radius: 26px; padding: 32px; border: 1px solid #F0DCE5; background: #fff; min-height: 310px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-button { width: 100%; min-height: 72px; padding: 21px 0; display: grid; grid-template-columns: minmax(0,1fr) 36px; gap: 20px; align-items: center; text-align: left; border: 0; background: transparent; color: var(--ink); cursor: pointer; font: inherit; font-size: 18px; font-weight: 600; }
  .faq-control { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--line); display: grid; place-items: center; color: var(--magenta); }
  .faq-answer { max-width: 840px; padding: 0 52px 25px 0; }
  .faq-answer p { margin-bottom: 0; }
  .final-cta { padding: 88px 0; background: var(--blush); }
  .cta-box { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 48px; align-items: center; padding: 50px 54px; border-radius: 30px; background: #fff; border: 1px solid #F0DCE5; }
  .cta-box h2 { max-width: 770px; margin-bottom: 15px; }
  .cta-box p { max-width: 760px; margin-bottom: 0; font-size: 18px; }
  .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
  .arrow-svg { width: 16px; height: 16px; stroke: currentColor; fill: none; }

  @media (max-width: 1100px) {
    .shell { width: min(1280px, calc(100% - 80px)); }
    .hero-grid, .product-layout, .experience-layout, .terminology-wrap, .connected-layout { grid-template-columns: minmax(0,1fr) minmax(390px,.92fr); gap: 44px; }
    .proof-grid { grid-template-columns: repeat(5, minmax(0,1fr)); }
    .proof-item { padding: 26px 18px; }
    .landscape-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  }

  @media (max-width: 900px) {
    .shell { width: calc(100% - 48px); }
    .section { padding: 80px 0; }
    .section-dense { padding: 72px 0; }
    .hero { padding: 88px 0 80px; }
    .cyber-page h1 { font-size: 42px; }
    .cyber-page h2 { font-size: 32px; }
    .cyber-page h3 { font-size: 22px; }
    .hero-grid, .experience-layout, .product-layout, .training-layout, .terminology-wrap, .security-layout, .risk-layout, .connected-layout, .language-layout { grid-template-columns: 1fr; }
    .hero-copy > .eyebrow, .hero-copy > h1,
    .experience-copy > h2,
    .training-copy > h2,
    .terminology-copy > h2,
    .connected-copy > h2,
    .language-copy > h2 { text-align: center; }
    .experience-copy > .intro, .training-copy > .intro, .terminology-copy > .intro, .connected-copy > .intro, .language-copy > .intro { text-align: center; margin-left: auto; margin-right: auto; }
    .hero-copy > .intro { text-align: left; margin-left: auto; margin-right: auto; }
    .hero-copy .button-row { justify-content: center; }
    .hero-trust { text-align: center; }
    .inline-links { justify-content: flex-start; }
    .hero-art { min-height: 440px; }
    .split-editorial { grid-template-columns: 1fr; gap: 34px; }
    .sticky-heading { position: static; text-align: center; }
    .sticky-heading .intro { margin-left: auto; margin-right: auto; }
    .section-dark .sticky-heading { text-align: left; }
    .section-dark .sticky-heading .intro { margin-left: 0; margin-right: 0; }
    .split-editorial .sticky-heading,
    .product-copy > h2, .product-copy > .intro,
    .risk-copy > h2, .risk-copy > .intro,
    section[aria-labelledby="continuous-title"] .section-heading,
    section[aria-labelledby="related-title"] .section-heading,
    section[aria-labelledby="faq-title"] .section-heading { text-align: left; }
    .split-editorial .sticky-heading .intro,
    section[aria-labelledby="continuous-title"] .section-heading .intro,
    section[aria-labelledby="related-title"] .section-heading .intro,
    section[aria-labelledby="faq-title"] .section-heading .intro { margin-left: 0; margin-right: 0; text-align: left; }
    .proof-grid { grid-template-columns: repeat(2,1fr); }
    .proof-item + .proof-item { border-left: 0; }
    .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
    .proof-item { border-bottom: 1px solid var(--line); }
    .proof-item:last-child { grid-column: 1 / -1; border-bottom: 0; }
    .dual-section { grid-template-columns: 1fr; }
    .editorial-pair { grid-template-columns: 1fr; }
    .editorial-pair-column, .editorial-pair-column + .editorial-pair-column { padding: 32px 0; border-left: 0; }
    .editorial-pair-column + .editorial-pair-column { border-top: 1px solid var(--line); }
    .workflow { grid-template-columns: repeat(2,1fr); }
    .workflow-step:nth-child(odd) { border-left: 0; padding-left: 0; }
    .workflow-step:nth-child(even) { border-left: 1px solid var(--line); padding-left: 22px; }
    .workflow-step:nth-child(-n+4) { border-bottom: 1px solid var(--line); }
    .practice-grid { grid-template-columns: 1fr; }
    .related-row { grid-template-columns: minmax(190px,.45fr) minmax(0,1fr); }
    .related-row .editorial-link { grid-column: 2; justify-self: start; }
    .cta-box { grid-template-columns: 1fr; text-align: center; }
    .cta-box p { margin-left: auto; margin-right: auto; }
    .cta-actions { justify-content: center; }
  }

  @media (max-width: 640px) {
    .shell { width: calc(100% - 40px); }
    .section, .section-dense { padding: 68px 0; }
    .hero { padding: 72px 0 68px; }
    .cyber-page h1 { font-size: 38px; line-height: 1.1; }
    .cyber-page h2 { font-size: 30px; line-height: 1.16; }
    .cyber-page h3 { font-size: 20px; }
    .cyber-page p, .bullet-list li, .proof-copy, .language-chip { font-size: 16px; }
    .intro { font-size: 17px !important; }
    .section-heading, .sticky-heading { text-align: center; margin-bottom: 34px; }
    .section-heading .intro, .sticky-heading .intro { margin-left: auto; margin-right: auto; }
    .section-dark .sticky-heading { text-align: left; }
    .section-dark .sticky-heading .intro { margin-left: 0; margin-right: 0; }
    .split-editorial .sticky-heading,
    .product-copy > h2, .product-copy > .intro,
    .risk-copy > h2, .risk-copy > .intro,
    section[aria-labelledby="continuous-title"] .section-heading,
    section[aria-labelledby="related-title"] .section-heading,
    section[aria-labelledby="faq-title"] .section-heading { text-align: left; }
    .split-editorial .sticky-heading .intro,
    section[aria-labelledby="continuous-title"] .section-heading .intro,
    section[aria-labelledby="related-title"] .section-heading .intro,
    section[aria-labelledby="faq-title"] .section-heading .intro { margin-left: 0; margin-right: 0; text-align: left; }
    .button-row { width: 100%; }
    .hero-copy .button-row { flex-direction: column; }
    .hero-copy .pill-button { width: 100%; }
    .hero-art { min-height: 350px; border-radius: 24px; }
    .proof-grid { grid-template-columns: 1fr; }
    .proof-item, .proof-item:nth-child(even), .proof-item:last-child { border-left: 0; grid-column: auto; border-bottom: 1px solid var(--line); }
    .proof-item:last-child { border-bottom: 0; }
    .editorial-row { grid-template-columns: 46px minmax(0,1fr); gap: 16px; }
    .experience-list { grid-template-columns: 1fr; }
    .experience-item, .experience-item:nth-child(odd), .experience-item:nth-child(even) { padding: 22px 0; border-left: 0; }
    .ecosystem-art, .terminology-art { min-height: 380px; border-radius: 24px; }
    .mockup-body { grid-template-columns: 94px minmax(0,1fr); min-height: 380px; }
    .mock-sidebar { padding: 22px 12px; }
    .mock-main { padding: 20px 14px; }
    .mock-cards { grid-template-columns: 1fr; }
    .mock-card:nth-child(n+2) { display: none; }
    .feature-panel { padding: 28px 22px; border-radius: 24px; }
    .mini-list { grid-template-columns: 1fr; }
    .training-matrix, .security-matrix { grid-template-columns: 1fr; }
    .training-cell, .training-cell:nth-child(odd), .security-cell, .security-cell:nth-child(odd) { border-right: 0; }
    .training-cell { border-bottom: 1px solid var(--line) !important; min-height: auto; }
    .training-cell:last-child { border-bottom: 0 !important; }
    .security-cell { border-bottom: 1px solid #373A42 !important; min-height: auto; }
    .security-cell:last-child { border-bottom: 0 !important; }
    .workflow { grid-template-columns: 1fr; border-bottom: 0; }
    .workflow-step, .workflow-step + .workflow-step, .workflow-step:nth-child(4) { padding: 24px 0; border-left: 0; border-bottom: 1px solid var(--line); min-height: auto; }
    .workflow-step { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 14px; }
    .workflow-step .step-number { margin: 0; }
    .workflow-step .step-number { grid-column: 1; grid-row: 1; }
    .workflow-step .workflow-label { grid-column: 2; grid-row: 1; margin: 4px 0 8px; }
    .workflow-step p { grid-column: 2; grid-row: 2; margin-bottom: 0; }
    .risk-row { grid-template-columns: 1fr; gap: 6px; padding: 24px 22px; }
    .landscape-grid, .why-grid { grid-template-columns: 1fr; }
    .connected-art { min-height: 350px; border-radius: 24px; }
    .inline-links { justify-content: flex-start; }
    .language-chips { justify-content: center; }
    .related-row { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
    .related-row .editorial-link { grid-column: auto; }
    .practice-card { min-height: auto; padding: 28px 24px; }
    .faq-button { font-size: 17px; grid-template-columns: minmax(0,1fr) 34px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 64px 0; }
    .cta-box { padding: 36px 24px; border-radius: 24px; }
    .cta-actions { flex-direction: column; }
    .cta-actions .pill-button { width: 100%; }
  }

  @media (min-width: 370px) and (max-width: 640px) {
    .proof-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .proof-item, .proof-item:nth-child(even), .proof-item:last-child { border-bottom: 1px solid var(--line); }
    .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
    .proof-item:last-child { grid-column: 1 / -1; border-left: 0; border-bottom: 0; }
  }
`;

function ArrowIcon() {
  return (
    <svg className="arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m14 7 5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    precision: <><circle cx="12" cy="12" r="8" {...common}/><path d="M12 7v5l3 2" {...common}/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...common}/><path d="M8 10V7a4 4 0 0 1 8 0v3" {...common}/><path d="M12 14v2" {...common}/></>,
    refresh: <><path d="M20 7v5h-5" {...common}/><path d="M4 17v-5h5" {...common}/><path d="M6.1 9a7 7 0 0 1 11.8-2L20 12" {...common}/><path d="M17.9 15a7 7 0 0 1-11.8 2L4 12" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...common}/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" {...common}/></>,
    user: <><circle cx="12" cy="8" r="3" {...common}/><path d="M6 20a6 6 0 0 1 12 0" {...common}/></>,
    file: <><path d="M7 3h7l4 4v14H7z" {...common}/><path d="M14 3v5h5M10 12h5M10 16h5" {...common}/></>,
    shield: <><path d="M12 3 19 6v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6z" {...common}/><path d="m9 12 2 2 4-4" {...common}/></>,
    database: <><ellipse cx="12" cy="5.5" rx="7" ry="3" {...common}/><path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...common}/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type] || icons.shield}</svg>;
}

function EditorialLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<ArrowIcon /></a>;
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 520">
        <defs>
          <linearGradient id="heroFade" x1="0" x2="1">
            <stop offset="0" stopColor="#F3E4EA" stopOpacity=".7"/>
            <stop offset="1" stopColor="#F8F8F9" stopOpacity=".3"/>
          </linearGradient>
        </defs>
        <circle cx="480" cy="70" r="120" fill="url(#heroFade)"/>
        <path d="M73 376C142 332 190 354 248 313c59-42 116-18 162-70 38-43 80-36 122-65" fill="none" stroke="#D5D7DB" strokeWidth="2" strokeDasharray="5 8"/>
        <path d="M74 135C132 171 173 141 225 185c42 36 82 28 122 4 53-31 95-22 150 11" fill="none" stroke="#DFE1E4" strokeWidth="2" strokeDasharray="4 8"/>
        <rect x="176" y="113" width="267" height="292" rx="24" fill="#fff" stroke="#AFB2B8" strokeWidth="2"/>
        <rect x="194" y="133" width="231" height="39" rx="12" fill="#F5F5F6"/>
        <circle cx="213" cy="152" r="5" fill="#C11D63"/>
        <rect x="228" y="147" width="82" height="9" rx="4.5" fill="#80848C"/>
        <rect x="196" y="192" width="64" height="194" rx="12" fill="#23252B"/>
        <rect x="209" y="215" width="35" height="6" rx="3" fill="#F2A7C6"/>
        <rect x="209" y="242" width="28" height="5" rx="2.5" fill="#5B5E65"/>
        <rect x="209" y="264" width="36" height="5" rx="2.5" fill="#8B365E"/>
        <rect x="209" y="286" width="29" height="5" rx="2.5" fill="#5B5E65"/>
        <rect x="209" y="308" width="33" height="5" rx="2.5" fill="#5B5E65"/>
        <rect x="278" y="193" width="128" height="54" rx="14" fill="#FAFAFB" stroke="#E0E2E5"/>
        <rect x="294" y="210" width="54" height="7" rx="3.5" fill="#6F737A"/>
        <rect x="294" y="227" width="78" height="6" rx="3" fill="#D0D2D6"/>
        <rect x="278" y="261" width="128" height="125" rx="14" fill="#FAFAFB" stroke="#E0E2E5"/>
        <path d="M296 357v-34M314 357v-61M332 357v-44M350 357v-78M368 357v-55M386 357v-92" stroke="#C9CCD1" strokeWidth="10" strokeLinecap="round"/>
        <path d="M350 357v-78" stroke="#C11D63" strokeWidth="10" strokeLinecap="round"/>
        <path d="M484 184l33 14v24c0 29-15 49-33 58-18-9-33-29-33-58v-24z" fill="#fff" stroke="#7B7F86" strokeWidth="2"/>
        <path d="m469 225 10 10 20-23" fill="none" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="102" cy="130" r="33" fill="#fff" stroke="#B8BBC0" strokeWidth="2"/>
        <rect x="88" y="117" width="28" height="23" rx="4" fill="#F6F6F7" stroke="#7D8188"/>
        <path d="M102 108v9M93 130h18" stroke="#C11D63" strokeWidth="2"/>
        <circle cx="95" cy="391" r="36" fill="#fff" stroke="#B8BBC0" strokeWidth="2"/>
        <path d="M79 394h32M85 382h20M88 406h14" stroke="#7D8188" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="516" cy="370" r="34" fill="#fff" stroke="#B8BBC0" strokeWidth="2"/>
        <path d="M502 370h28M516 356v28" stroke="#7D8188" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="102" cy="130" r="4" fill="#C11D63"/>
        <circle cx="95" cy="391" r="4" fill="#C11D63"/>
        <circle cx="516" cy="370" r="4" fill="#C11D63"/>
      </svg>
    </div>
  );
}

function EcosystemArtwork() {
  const nodes = [
    [130,105,"Product UI"], [388,92,"Documentation"], [465,250,"Training"],
    [350,405,"Compliance"], [112,385,"Incidents"], [62,235,"Developer"],
  ];
  return (
    <div className="ecosystem-art" aria-hidden="true">
      <svg viewBox="0 0 560 510">
        <circle cx="280" cy="252" r="92" fill="#FDF2F7" stroke="#E5CAD7" strokeWidth="2"/>
        <circle cx="280" cy="252" r="58" fill="#fff" stroke="#C11D63" strokeWidth="2"/>
        <path d="M280 213l26 11v19c0 22-12 38-26 45-15-7-26-23-26-45v-19z" fill="#FAFAFB" stroke="#696D74" strokeWidth="2"/>
        <path d="m269 247 8 8 15-17" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {nodes.map(([x,y,label],i)=><g key={label}>
          <path d={`M280 252 L${x} ${y}`} stroke="#D6D8DC" strokeWidth="2"/>
          <rect x={x-58} y={y-28} width="116" height="56" rx="16" fill="#fff" stroke="#BFC2C7"/>
          <circle cx={x-35} cy={y} r="5" fill={i===4?"#C11D63":"#A5A9AF"}/>
          <text x={x-23} y={y+5} fontSize="12" fill="#4C5057" fontFamily="Inter, sans-serif">{label}</text>
        </g>)}
        <text x="280" y="338" textAnchor="middle" fontSize="12" fill="#7A7E84" fontFamily="Inter, sans-serif">One connected multilingual experience</text>
      </svg>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="product-mockup" aria-hidden="true">
      <div className="mockup-top"><span className="mock-dot"/><span className="mock-dot"/><span className="mock-dot"/></div>
      <div className="mockup-body">
        <div className="mock-sidebar">
          <div className="mock-brand"/>
          <div className="mock-nav active"/><div className="mock-nav"/><div className="mock-nav"/><div className="mock-nav"/><div className="mock-nav"/>
        </div>
        <div className="mock-main">
          <div className="mock-heading"><div style={{width:"46%"}} className="mock-line strong"/><div style={{width:66}} className="mock-line magenta"/></div>
          <div className="mock-cards">
            {[1,2,3].map(i=><div className="mock-card" key={i}><div style={{width:"54%",marginBottom:13}} className="mock-line"/><div style={{width:"72%"}} className="mock-line strong"/></div>)}
          </div>
          <div className="mock-chart">
            {[34,53,41,72,48,86,63].map((h,i)=><span key={i} className={`mock-bar ${i===5?"accent":""}`} style={{height:`${h}%`}}/>)}
          </div>
          <div style={{marginTop:20,width:"83%"}} className="mock-line"/>
          <div style={{marginTop:11,width:"64%"}} className="mock-line"/>
        </div>
      </div>
    </div>
  );
}

function TerminologyArtwork() {
  return (
    <div className="terminology-art" aria-hidden="true">
      <svg viewBox="0 0 560 510">
        <rect x="176" y="175" width="208" height="160" rx="26" fill="#fff" stroke="#C11D63" strokeWidth="2"/>
        <text x="280" y="214" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#C11D63">APPROVED TERMINOLOGY</text>
        <text x="280" y="252" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="600" fill="#32353A">Cybersecurity</text>
        <text x="280" y="280" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="600" fill="#32353A">Vocabulary</text>
        <text x="280" y="310" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#777B81">glossary · TM · style rules</text>
        {[
          [86,82,"Product UI"],[278,65,"Documentation"],[472,92,"Training"],
          [492,382,"Support"],[280,438,"Governance"],[72,390,"Security Comms"]
        ].map(([x,y,label],i)=><g key={label}>
          <path d={`M280 255 L${x} ${y}`} stroke="#D5C0CA" strokeWidth="1.5"/>
          <rect x={x-58} y={y-23} width="116" height="46" rx="14" fill="#FDF9FB" stroke="#DFD3D9"/>
          <circle cx={x-38} cy={y} r="4" fill={i===0||i===5?"#C11D63":"#9A9EA5"}/>
          <text x={x-28} y={y+4} fontFamily="Inter, sans-serif" fontSize="11" fill="#555A61">{label}</text>
        </g>)}
      </svg>
    </div>
  );
}

function ConnectedArtwork() {
  return (
    <div className="connected-art" aria-hidden="true">
      <svg viewBox="0 0 560 460">
        <path d="M75 337C156 307 190 347 255 316c67-32 96-99 162-99 30 0 49 11 73 25" fill="none" stroke="#D8DADD" strokeWidth="2" strokeDasharray="5 8"/>
        <rect x="202" y="108" width="160" height="191" rx="23" fill="#fff" stroke="#81858C" strokeWidth="2"/>
        <rect x="222" y="130" width="120" height="74" rx="14" fill="#F7F7F8" stroke="#E1E2E4"/>
        <path d="M243 177h77M243 157h42" stroke="#999DA4" strokeWidth="7" strokeLinecap="round"/>
        <rect x="222" y="220" width="53" height="57" rx="12" fill="#FDF2F7"/>
        <path d="M248 231l13 6v11c0 10-5 18-13 22-8-4-13-12-13-22v-11z" fill="none" stroke="#C11D63" strokeWidth="2"/>
        <rect x="289" y="220" width="53" height="57" rx="12" fill="#F5F5F6"/>
        <path d="M302 248h27M315 235v26" stroke="#7B7F86" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="100" cy="120" r="43" fill="#fff" stroke="#B5B8BE" strokeWidth="2"/>
        <path d="M80 127h40M89 111h22M91 143h18" stroke="#747880" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="469" cy="99" r="43" fill="#fff" stroke="#B5B8BE" strokeWidth="2"/>
        <rect x="451" y="85" width="36" height="28" rx="5" fill="#F7F7F8" stroke="#747880"/>
        <path d="M469 76v9M456 121h26" stroke="#C11D63" strokeWidth="2"/>
        <circle cx="98" cy="360" r="39" fill="#fff" stroke="#B5B8BE" strokeWidth="2"/>
        <path d="M82 364c8-17 25-17 33 0M86 347h26" fill="none" stroke="#747880" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="462" cy="351" r="42" fill="#fff" stroke="#B5B8BE" strokeWidth="2"/>
        <path d="M447 361h30M450 345h24" stroke="#747880" strokeWidth="2" strokeLinecap="round"/>
        {[ [100,120],[469,99],[98,360],[462,351] ].map(([x,y],i)=><path key={i} d={`M${x} ${y} L282 203`} stroke="#D5D7DB" strokeWidth="1.7"/>)}
        {[ [100,120],[469,99],[98,360],[462,351] ].map(([x,y],i)=><circle key={`d${i}`} cx={x} cy={y} r="4" fill="#C11D63"/>)}
      </svg>
    </div>
  );
}

const proofItems = [
  ["Cybersecurity Expertise", "Security terminology, product, and technical content."],
  ["100+ Languages", "Global and regional language coverage."],
  ["Secure Workflows", "Controlled handling for sensitive content."],
  ["AI + Human Quality", "Automation with professional validation."],
  ["Continuous Localization", "Recurring workflows for fast releases."],
];

const challengeRows = [
  ["precision","Technical Precision","Cybersecurity depends on clear distinctions between threats, vulnerabilities, exploits, incidents, breaches, authentication, authorization, mitigation, and remediation. Stepes helps preserve those distinctions across languages and content types."],
  ["lock","Security and Confidentiality","Projects can include proprietary architecture, unreleased product information, internal policies, vulnerability details, and other sensitive material. Translation workflows can be configured around customer confidentiality and access requirements."],
  ["refresh","Continuous Change","Security products, threat intelligence, vulnerabilities, documentation, and user guidance change constantly. Recurring localization helps translated content stay aligned with the current source."],
  ["globe","Global Consistency","The same concepts appear across product interfaces, documentation, training, support, security communications, and governance materials. Shared terminology and translation memory keep these content streams aligned."],
];

const experienceItems = [
  ["Product Interfaces","Dashboards, administrative consoles, alerts, detection descriptions, policy settings, authentication, user roles, permissions, reports, onboarding, and system messages."],
  ["Technical Documentation","Administrator guides, configuration and hardening guides, deployment instructions, architecture documentation, knowledge bases, troubleshooting, and release notes."],
  ["Developer Content","API and SDK documentation, developer portals, integration guides, CLI documentation, authentication references, webhooks, and automation guidance."],
  ["Security Communications","Vulnerability advisories, security bulletins, patch and remediation guidance, customer notifications, incident communications, and emergency FAQs."],
  ["Training and Education","Security awareness, product training, secure development education, incident response training, partner programs, and customer certification."],
  ["Governance and Compliance","Security policies, risk-management documentation, security controls, supplier requirements, resilience procedures, audit materials, and regulatory communications."],
];

const securityCells = [
  ["user","Controlled Project Access","Restrict files, instructions, review responsibilities, and deliverables to authorized project participants."],
  ["lock","Confidential Content Handling","Configure projects around confidentiality requirements and nondisclosure obligations, including NDA-covered linguists and reviewers when required."],
  ["shield","Secure Cloud-Based Workflows","Manage translation, linguistic review, quality assurance, approval, and delivery through a controlled multilingual production environment."],
  ["file","Protected File Handling","Support secure transfer and handling practices for source content, reference materials, and multilingual deliverables."],
  ["database","Governed Language Assets","Manage translation memories, terminology, project instructions, and reusable multilingual content as controlled language assets."],
  ["precision","Customer-Specific Requirements","Configure workflows around project-specific security, access, communication, quality, and approved technology requirements."],
];

const landscape = [
  ["Cloud & Network Security","Cloud security, secure access, SASE, network protection, firewalls, network detection and response, cloud posture management, and security monitoring."],
  ["Endpoint & Security Operations","Endpoint protection, EDR, XDR, SIEM, SOAR, managed detection and response, security operations, incident investigation, and threat intelligence."],
  ["Identity & Zero Trust","Identity and access management, privileged access management, authentication, MFA, authorization, access controls, zero-trust architectures, and identity security."],
  ["Application, API & DevSecOps Security","Application security, API security, code security, software supply-chain security, secure development, CI/CD security, vulnerability scanning, and DevSecOps."],
  ["Data & AI Security","Data protection, encryption, data loss prevention, privacy-related security controls, AI security, model protection, AI governance content, and emerging security technologies."],
  ["Vulnerability & Exposure Management","Vulnerability assessment, attack-surface management, exposure management, patch management, remediation, penetration-testing content, and security risk analysis."],
  ["OT, IoT & Product Security","Industrial cybersecurity, operational technology, industrial control systems, embedded devices, IoT security, connected products, robotics, automotive systems, and product cybersecurity."],
  ["Governance, Risk & Resilience","Cybersecurity governance, third-party risk, operational resilience, security controls, business continuity, policy management, audits, and incident-response programs."],
];

const whyItems = [
  ["Cybersecurity Expertise","Language professionals and workflows designed around security products, specialized terminology, technical documentation, and enterprise cybersecurity content."],
  ["Software Localization at Scale","Coordinated localization for dashboards, applications, resource files, documentation, help content, and multilingual software builds."],
  ["Secure Workflows","Controlled access, confidentiality practices, secure workflow management, and governed language assets for sensitive cybersecurity content."],
  ["Terminology Consistency","One approved cybersecurity vocabulary across product interfaces, documentation, support, training, governance, and customer communications."],
  ["AI + Human Quality","Translation memory, terminology management, AI, automated quality controls, and professional human validation according to content requirements."],
  ["Continuous Global Delivery","Support for launches, language rollouts, major releases, urgent updates, and continuously changing cybersecurity content."],
];

const relatedServices = [
  ["Software Localization Services","Localize cybersecurity applications, SaaS platforms, dashboards, administrative consoles, resource files, and multilingual software builds.","https://www.stepes.com/software-localization-services/","Software Localization Services"],
  ["Technical Translation Services","Translate technical manuals, engineering documentation, specifications, implementation guides, and complex technology content.","https://www.stepes.com/technical-translation-services/","Technical Translation Services"],
  ["eLearning Translation Services","Localize cybersecurity awareness, technical education, compliance courses, certification, multimedia, and LMS content.","https://www.stepes.com/elearning-training-translation-services/","eLearning Translation Services"],
  ["Continuous Translation","Keep software strings, documentation, knowledge bases, support content, and recurring digital releases current across languages.","https://www.stepes.com/continuous-translation/","Continuous Translation"],
  ["AI & Machine Learning Translation Services","Support AI products, AI security solutions, technical documentation, multilingual data, and global AI experiences.","https://www.stepes.com/ai-machine-learning-translation-services/","AI & Machine Learning Translation Services"],
  ["Industrial Automation Translation Services","Translate automation, industrial software, control-system, OT, engineering, and connected manufacturing content.","https://www.stepes.com/industrial-automation-translation-services/","Industrial Automation Translation Services"],
];

const faqItems = [
  ["What is cybersecurity translation?","Cybersecurity translation is the professional translation of security-related software, technical documentation, policies, training, vulnerability communications, product content, and other information into additional languages. Because cybersecurity terminology is highly specialized and content may affect product operation or security decisions, effective cybersecurity translation requires technical expertise, terminology management, context, and appropriate quality controls."],
  ["What cybersecurity content can Stepes translate?","Stepes translates cybersecurity software interfaces, dashboards, administrator guides, user documentation, security policies, technical specifications, APIs, SDK documentation, knowledge bases, security training, vulnerability advisories, security bulletins, remediation guidance, incident communications, governance content, marketing materials, and other cybersecurity information. Projects can include individual documents or coordinated multilingual product and content programs."],
  ["Does Stepes provide cybersecurity software localization?","Yes. Stepes localizes security software, SaaS platforms, web applications, mobile applications, embedded software, dashboards, administrative consoles, and related product content. Services can include resource-file processing, interface translation, terminology management, in-context review, locale adaptation, linguistic QA, cosmetic QA, functional localization testing, and recurring product updates."],
  ["How does Stepes maintain cybersecurity terminology across languages?","Stepes uses approved glossaries, customer terminology, product references, translation memory, style guidance, do-not-translate rules, and project instructions to maintain terminology consistency. These language assets can be reused across software, documentation, training, support content, security communications, and future releases so terminology becomes more consistent over time."],
  ["Can Stepes translate urgent security advisories and vulnerability communications?","Yes. Stepes supports expedited multilingual translation for security advisories, vulnerability notices, product bulletins, remediation instructions, patch guidance, customer notifications, incident communications, status updates, and related content. Existing terminology and translation memory can help accelerate recurring security communications while professional review maintains technical accuracy."],
  ["How does Stepes protect confidential cybersecurity content?","Cybersecurity translation projects can be configured with controlled project access, confidentiality requirements, NDA-covered linguists and reviewers, secure cloud-based workflow management, protected file handling, and governed language assets. Specific security and technology requirements can be reviewed during project setup."],
  ["Can Stepes support continuous cybersecurity software releases?","Yes. Stepes supports recurring and continuous localization for cybersecurity products and digital content. New and modified content can move through translation-memory leverage, terminology management, AI or professional translation, linguistic validation, QA, approval, and delivery through repeatable workflows. APIs and other connected processes can also support frequent software and content releases."],
  ["Does Stepes translate cybersecurity compliance and regulatory content?","Yes. Stepes translates customer-approved policies, procedures, security controls, risk-management content, governance documentation, training, resilience materials, audit content, and regulatory communications associated with cybersecurity programs and frameworks. Stepes provides language services rather than legal, regulatory, certification, or cybersecurity consulting."],
  ["How does Stepes use AI for cybersecurity translation?","Stepes combines AI with professional human expertise according to the content, audience, technical complexity, risk, and customer requirements. AI can help accelerate translation, terminology application, change processing, and quality checks, while professional linguists validate terminology, technical meaning, context, and final language where human oversight is required."],
  ["Which languages does Stepes support for cybersecurity translation?","Stepes provides cybersecurity translation services in more than 100 languages, including major European, Asian, Middle Eastern, Latin American, and regional languages. Coordinated multilingual programs can support a single product launch, a selected group of priority markets, or large-scale global deployment."],
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="shell">
        <div className="section-heading">
          <h2 id="faq-title">Cybersecurity Translation FAQs</h2>
          <p className="intro">Answers to common questions about cybersecurity software localization, terminology, secure workflows, urgent communications, continuous releases, and multilingual quality.</p>
        </div>
        <div className="faq-panel">
          {faqItems.map(([q,a], index) => {
            const isOpen = openIndex === index;
            return <div className="faq-item" key={q}>
              <button className="faq-button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                <span>{q}</span>
                <span className="faq-control" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <div className="faq-answer"><p>{a}</p></div>}
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default function CybersecurityTranslationServicesWireframe() {
  return (
    <main className="cyber-page">
      <style>{pageStyles}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Cybersecurity Translation Services</span>
            <h1 id="page-title">Cybersecurity Translation &amp; Localization Services</h1>
            <p className="intro">Take cybersecurity products, platforms, documentation, training, and security communications global with translation built for technical precision, fast-moving content, and sensitive information. Stepes combines cybersecurity expertise, software localization, terminology management, secure workflows, and AI-powered translation with professional human validation to support cybersecurity companies and enterprise security teams in 100+ languages.</p>
            <div className="button-row">
              <a className="pill-button primary" href={QUOTE_URL}>Get a Quote <ArrowIcon /></a>
              <a className="pill-button secondary" href={CONTACT_URL}>Talk to a Cybersecurity Translation Expert</a>
            </div>
            <div className="hero-trust">Cybersecurity Software · Technical Documentation · Security Training · Compliance Content · Incident Communications</div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <div className="proof-band" aria-label="Cybersecurity translation capabilities">
        <div className="shell proof-grid">
          {proofItems.map(([title,copy]) => <div className="proof-item" key={title}><span className="proof-title">{title}</span><span className="proof-copy">{copy}</span></div>)}
        </div>
      </div>

      <section className="section" aria-labelledby="challenge-title">
        <div className="shell split-editorial">
          <div className="sticky-heading">
            <h2 id="challenge-title">Cybersecurity Requires More Than Accurate Translation</h2>
            <p className="intro">Cybersecurity content combines technical complexity, operational urgency, product context, and potential risk. Users need to understand exactly what a threat is, what action is required, and how a security control should be configured.</p>
            <p>Stepes provides cybersecurity translation services designed around technical accuracy, terminology consistency, secure content handling, and the realities of modern digital product delivery.</p>
          </div>
          <div className="editorial-rows">
            {challengeRows.map(([icon,title,copy]) => <div className="editorial-row" key={title}>
              <div className="icon-box"><LineIcon type={icon}/></div>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="experience-title">
        <div className="shell experience-layout">
          <div className="experience-copy">
            <h2 id="experience-title">Translate the Complete Cybersecurity Product Experience</h2>
            <p className="intro">Cybersecurity customers do not experience products through software strings alone. They move between dashboards, security alerts, documentation, onboarding, knowledge bases, APIs, support content, training, incident communications, and governance information.</p>
            <p>Stepes helps security companies localize this connected product experience so users receive consistent terminology and clear guidance wherever they interact with the product.</p>
            <div className="experience-list">
              {experienceItems.map(([title,copy]) => <div className="experience-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
          </div>
          <EcosystemArtwork />
        </div>
      </section>

      <section className="section" aria-labelledby="software-title">
        <div className="shell product-layout">
          <div className="product-copy">
            <h2 id="software-title">Cybersecurity Software Localization for Global Markets</h2>
            <p className="intro">Modern cybersecurity products are continuously evolving software platforms. Stepes combines software localization expertise with cybersecurity terminology and product context to help security companies release multilingual products without treating interface strings as isolated text.</p>
            <p>We localize dashboards, menus, policy settings, detection descriptions, system alerts, administrative consoles, reports, onboarding, permissions, configuration workflows, notifications, embedded help, and other user-facing product content.</p>
            <ul className="bullet-list">
              <li>Endpoint security, EDR/XDR, SIEM, SOAR, threat intelligence, and managed detection and response</li>
              <li>Identity and access management, privileged access, MFA, zero trust, and secure access platforms</li>
              <li>Cloud, application, API, network, email, vulnerability, data, and DevSecOps security products</li>
              <li>Structured resource-file processing with protection for keys, variables, placeholders, tags, and markup</li>
              <li>Linguistic, cosmetic, locale-specific, and functional localization QA for multilingual builds</li>
            </ul>
            <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section className="section section-blush" aria-label="Cybersecurity documentation and developer localization">
        <div className="shell dual-section">
          <article className="feature-panel">
            <h2>Cybersecurity Documentation Translation</h2>
            <p>Cybersecurity documentation is the bridge between sophisticated security technology and the people responsible for deploying, configuring, and using it. Instructions must be technically accurate, terminology must match the product, and translated guidance must remain clear even when the underlying concepts are complex.</p>
            <div className="mini-list">
              {[
                "Administrator and user guides","Security configuration and hardening guides","Installation and implementation guides","Architecture and integration documentation","Technical specifications and white papers","Knowledge bases, support articles, and FAQs","Product datasheets and release notes","Troubleshooting and update documentation"
              ].map(item=><span key={item}>{item}</span>)}
            </div>
            <p>Approved feature names, settings, menu labels, alerts, roles, and security terminology can be synchronized through shared glossaries and translation memories so users encounter the same language in the software, documentation, and support experience.</p>
            <EditorialLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</EditorialLink>
          </article>
          <article className="feature-panel blush">
            <h2>Localization for Security APIs, Developers, and DevSecOps</h2>
            <p>Cybersecurity products increasingly operate as part of connected cloud, application, identity, data, and infrastructure ecosystems. Developers need clear technical information to integrate security capabilities, automate workflows, configure authentication, and build security into software delivery.</p>
            <div className="mini-list">
              {[
                "API and SDK documentation","Developer portals and integration guides","CLI documentation","Authentication references","Webhooks and automation workflows","Secure coding guidance","DevSecOps training","Security integration documentation"
              ].map(item=><span key={item}>{item}</span>)}
            </div>
            <p>Code-aware translation workflows distinguish translatable explanatory content from syntax, commands, identifiers, variables, endpoints, code samples, and other technical elements that should remain unchanged.</p>
          </article>
        </div>
      </section>

      <section className="section" aria-label="Cybersecurity governance and incident communications">
        <div className="shell editorial-pair">
          <article className="editorial-pair-column">
            <span className="eyebrow">Governance &amp; Risk</span>
            <h2>Cybersecurity Compliance and Governance Translation</h2>
            <p>Cybersecurity has become an enterprise governance, operational resilience, product security, and supply-chain priority as well as a technical discipline. Organizations operating internationally may need multilingual versions of approved policies, procedures, controls, training, risk information, and regulatory communications.</p>
            <p>Stepes translates cybersecurity content associated with programs and frameworks such as NIST Cybersecurity Framework 2.0, ISO/IEC 27001, NIS2, DORA, the EU Cyber Resilience Act, SOC 2 programs, corporate cybersecurity governance, third-party risk management, and sector-specific security requirements.</p>
            <ul className="bullet-list">
              <li>Cybersecurity policies, security controls, and risk-management materials</li>
              <li>Third-party questionnaires and supplier security requirements</li>
              <li>Business continuity, resilience, audit, and governance documentation</li>
              <li>Cybersecurity training and customer-approved regulatory communications</li>
            </ul>
            <p>Stepes provides language services for customer-approved content. Regulatory interpretations, compliance determinations, and cybersecurity advice remain the responsibility of the customer and its qualified professionals.</p>
          </article>
          <article className="editorial-pair-column">
            <span className="eyebrow">Urgent Security Communications</span>
            <h2>Rapid Translation for Cybersecurity Incidents and Vulnerabilities</h2>
            <p>Cybersecurity incidents and newly identified vulnerabilities can create an immediate need to communicate across markets. Security teams may need to publish technical guidance, inform customers, update knowledge bases, coordinate internal response activities, or distribute remediation instructions under tight timelines.</p>
            <ul className="bullet-list">
              <li>Vulnerability advisories and security bulletins</li>
              <li>Product notices, patch instructions, and remediation guidance</li>
              <li>Incident-response communications and customer notifications</li>
              <li>Status updates, security disclosures, and emergency FAQs</li>
            </ul>
            <p>Existing translation memories and cybersecurity glossaries help teams reuse approved terminology, product names, interface labels, and previously validated language from the start. AI-enabled workflows can accelerate high-volume processing while qualified linguists review content according to its technical complexity, visibility, and risk.</p>
            <EditorialLink href={CONTACT_URL}>Discuss an Urgent Cybersecurity Translation</EditorialLink>
          </article>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="training-title">
        <div className="shell training-layout">
          <div className="training-copy">
            <h2 id="training-title">Cybersecurity Training for Global Teams</h2>
            <p className="intro">Technology alone cannot address every cybersecurity risk. Employees, administrators, developers, customers, partners, suppliers, and other stakeholders need clear security training in the languages they use every day.</p>
            <p>Stepes translates and localizes complete digital learning experiences, including course text, navigation, interactive modules, assessments, simulations, subtitles, captions, voice-over, video, graphics, screenshots, SCORM packages, and LMS-ready courseware.</p>
            <EditorialLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</EditorialLink>
          </div>
          <div className="training-matrix">
            {[
              ["Security Awareness","Phishing, social engineering, authentication, passwords, data handling, and everyday cyber hygiene."],
              ["Technical Security Training","Secure development, DevSecOps, incident response, product administration, and technical security education."],
              ["Role-Based Programs","Training tailored to employees, managers, developers, administrators, security teams, suppliers, and partners."],
              ["Product & Customer Education","Customer onboarding, security product training, certification, partner enablement, and support education."],
              ["Policy & Compliance Training","Security policies, privacy and security procedures, governance, resilience, and regulated training programs."],
              ["Multimedia Learning","Subtitles, voice-over, interactive modules, assessments, screenshots, simulations, and LMS-ready packages."],
            ].map(([title,copy])=><div className="training-cell" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush" aria-labelledby="terminology-title">
        <div className="shell terminology-wrap">
          <div className="terminology-copy">
            <h2 id="terminology-title">One Cybersecurity Vocabulary Across Every Customer Touchpoint</h2>
            <p className="intro">Cybersecurity language leaves little room for ambiguity. A vulnerability is not necessarily an exploit. Authentication is different from authorization. Detection, prevention, containment, mitigation, and remediation describe different activities.</p>
            <p>Stepes helps organizations build and maintain a single multilingual cybersecurity vocabulary across product UI, documentation, training, security communications, governance, support, and customer education.</p>
            <p>Customer glossaries, approved product terminology, translation memories, style guidance, abbreviation rules, do-not-translate terms, and project-specific instructions create reusable language assets that improve consistency with every release.</p>
            <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
          </div>
          <TerminologyArtwork />
        </div>
      </section>

      <section className="section" aria-labelledby="continuous-title">
        <div className="shell">
          <div className="section-heading centered">
            <h2 id="continuous-title">Continuous Localization for Fast-Moving Security Products</h2>
            <p className="intro">Security products do not stand still. New capabilities ship, integrations expand, vulnerabilities are identified, documentation changes, and customer guidance evolves. Localization should not become a release bottleneck.</p>
          </div>
          <div className="workflow" aria-label="Continuous cybersecurity localization workflow">
            {[
              ["Content Update","Identify new and modified software, documentation, training, support, or security communications."],
              ["Language Assets","Apply approved terminology, translation memory, style guidance, and product context."],
              ["Translation","Use AI, machine translation, or professional translation according to content requirements."],
              ["Expert Validation","Review technical meaning, cybersecurity terminology, context, consistency, and usability."],
              ["Quality Assurance","Validate completeness, terminology, technical elements, formatting, and agreed quality criteria."],
              ["Multilingual Release","Deliver approved content and retain language assets for the next update."],
            ].map(([title,copy],i)=><div className="workflow-step" key={title}><div className="step-number">{i+1}</div><div className="workflow-label">{title}</div><p>{copy}</p></div>)}
          </div>
          <div style={{marginTop:28,textAlign:"center"}}><EditorialLink href="https://www.stepes.com/continuous-translation/">Continuous Translation</EditorialLink></div>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="security-title">
        <div className="shell security-layout">
          <div className="sticky-heading">
            <span className="eyebrow">Security &amp; Confidentiality</span>
            <h2 id="security-title">Secure Translation for Security-Sensitive Content</h2>
            <p className="intro">Cybersecurity organizations often need to translate information they would not distribute outside a controlled environment, including proprietary security architecture, unreleased product features, internal procedures, vulnerability information, technical designs, and confidential product roadmaps.</p>
            <p>Stepes provides enterprise translation workflows designed to maintain control over multilingual content from submission through delivery.</p>
            <EditorialLink href="https://www.stepes.com/security/">Stepes Security</EditorialLink>
          </div>
          <div className="security-matrix">
            {securityCells.map(([icon,title,copy])=><div className="security-cell" key={title}><div className="security-icon"><LineIcon type={icon}/></div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="ai-title">
        <div className="shell risk-layout">
          <div className="risk-copy">
            <h2 id="ai-title">AI-Powered Cybersecurity Translation With Human Oversight</h2>
            <p className="intro">The opportunity is not to remove judgment from cybersecurity translation, but to apply automation where it creates value while preserving professional oversight where technical complexity, visibility, or risk requires it.</p>
            <p>Stepes tailors each translation workflow to the content, audience, and quality requirements, combining translation memory, approved terminology, AI, automated quality checks, qualified linguists, and additional review stages where needed.</p>
            <div className="principle">More automation where it adds value. More human oversight where the content demands it.</div>
          </div>
          <div className="risk-spectrum" aria-label="Translation workflow by content requirements">
            <div className="risk-row"><div className="risk-label">Frequent Updates</div><p>Translation memory, terminology, AI translation, automated checks, and targeted professional review can accelerate repetitive or lower-risk content.</p></div>
            <div className="risk-row"><div className="risk-label">Product Content</div><p>Professional linguists validate meaning, cybersecurity terminology, interface context, consistency, and customer usability before release.</p></div>
            <div className="risk-row"><div className="risk-label">High-Risk Content</div><p>Highly sensitive, regulatory, incident-related, or business-critical materials can use specialist review, independent validation, customer approval, and additional quality controls.</p></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="landscape-title">
        <div className="shell">
          <div className="section-heading centered">
            <h2 id="landscape-title">Cybersecurity Expertise Across the Security Landscape</h2>
            <p className="intro">Cybersecurity spans interconnected technologies, disciplines, and operational models. Stepes supports multilingual content for audiences ranging from SOC analysts and system administrators to developers, compliance professionals, partners, business leaders, and end users.</p>
          </div>
          <div className="landscape-grid">
            {landscape.map(([title,copy])=><div className="landscape-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="connected-title">
        <div className="shell connected-layout">
          <div className="connected-copy">
            <h2 id="connected-title">Cybersecurity Translation for Connected Products and Industrial Systems</h2>
            <p className="intro">The boundary between cybersecurity and physical products continues to narrow. Industrial equipment, vehicles, robots, smart devices, infrastructure systems, and other connected products increasingly depend on software, networks, cloud platforms, and embedded security controls.</p>
            <p>Stepes supports multilingual security configuration, product interfaces, technical documentation, secure installation instructions, firmware-related content, vulnerability notices, security updates, user guidance, product-security communications, and associated compliance and governance documentation.</p>
            <p>Regulations such as the EU Cyber Resilience Act also increase the importance of lifecycle security, vulnerability handling, and clear product information for many products with digital elements.</p>
            <div className="inline-links">
              <EditorialLink href="https://www.stepes.com/robotics-translation-services/">Robotics Translation Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/industrial-automation-translation-services/">Industrial Automation Translation Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/semiconductor-translation-services/">Semiconductor Translation Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/automotive-translation-services/">Automotive Translation Services</EditorialLink>
            </div>
          </div>
          <ConnectedArtwork />
        </div>
      </section>

      <section className="section section-blush" aria-labelledby="languages-title">
        <div className="shell language-layout">
          <div className="language-copy">
            <h2 id="languages-title">Cybersecurity Translation in 100+ Languages</h2>
            <p className="intro">A security platform may be developed in one country, operated by enterprise customers in another, monitored through regional security teams, and supported by employees, partners, and users across dozens of markets.</p>
            <p>Stepes supports major global markets as well as regional language requirements and coordinated multilingual launches.</p>
            <EditorialLink href="https://www.stepes.com/translation-languages/">Translation Languages</EditorialLink>
          </div>
          <div>
            <div className="language-chips">
              {["Simplified Chinese","Traditional Chinese","Japanese","Korean","German","French","Spanish","Portuguese","Italian","Dutch","Polish","Czech","Arabic","Hebrew","Vietnamese","Thai","Indonesian","Romanian"].map(lang=><span className="language-chip" key={lang}>{lang}</span>)}
            </div>
            <p style={{marginTop:24,marginBottom:0}}>Language-specific workflows account for terminology, text expansion, complex scripts, right-to-left display, fonts, character encoding, locale conventions, and other requirements that affect cybersecurity software, documentation, training, and digital content.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="shell">
          <div className="section-heading centered">
            <h2 id="why-title">Why Cybersecurity Companies Choose Stepes</h2>
            <p className="intro">Work with one localization partner for cybersecurity software, technical content, secure workflows, terminology governance, and continuous multilingual delivery across global markets.</p>
          </div>
          <div className="why-grid">
            {whyItems.map(([title,copy])=><div className="why-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="related-title">
        <div className="shell">
          <div className="section-heading">
            <h2 id="related-title">Related Technology Translation Services</h2>
            <p className="intro">Cybersecurity often intersects with software development, connected products, technical documentation, workforce training, AI, industrial systems, and other specialized technologies.</p>
          </div>
          <div className="related-list">
            {relatedServices.map(([title,copy,href,label])=><div className="related-row" key={title}><h3>{title}</h3><p>{copy}</p><EditorialLink href={href}>{label}</EditorialLink></div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush" aria-labelledby="practice-title">
        <div className="shell">
          <div className="section-heading centered">
            <h2 id="practice-title">Cybersecurity Translation in Practice</h2>
            <p className="intro">Different cybersecurity programs require different combinations of software localization, technical translation, terminology, speed, multimedia production, and quality control.</p>
          </div>
          <div className="practice-grid">
            <article className="practice-card"><h3>Launch a Security SaaS Platform Globally</h3><p>A cybersecurity software company preparing a multilingual launch may need to localize product strings, dashboards, onboarding, administrator documentation, knowledge bases, training, release notes, and customer-facing web content at the same time.</p><p>Stepes coordinates these content streams through shared terminology, translation memories, product context, localization QA, and release-focused workflows so the experience remains consistent across languages.</p></article>
            <article className="practice-card"><h3>Coordinate a Multilingual Security Update</h3><p>A new vulnerability or security update may require a product notice, remediation instructions, customer email, knowledge-base article, patch guidance, support information, and internal communications.</p><p>Stepes can reuse approved cybersecurity terminology and existing translations while routing new content through accelerated translation and professional validation.</p></article>
            <article className="practice-card"><h3>Standardize Cybersecurity Training Across Global Teams</h3><p>A multinational organization may need employees in many countries to understand the same security policies, controls, incident-response procedures, phishing risks, and data-handling requirements.</p><p>Stepes localizes course text, multimedia, assessments, voice-over, subtitles, job aids, and supporting documentation while maintaining terminology across the training program.</p></article>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-box">
            <div>
              <h2 id="cta-title">Take Your Cybersecurity Products Global With Confidence</h2>
              <p>From security software and technical documentation to training, vulnerability communications, governance content, and continuous product updates, Stepes brings cybersecurity expertise, secure workflows, modern localization technology, and professional language expertise together in one scalable multilingual solution.</p>
            </div>
            <div className="cta-actions">
              <a className="pill-button primary" href={QUOTE_URL}>Get a Quote <ArrowIcon /></a>
              <a className="pill-button secondary" href={CONTACT_URL}>Talk to a Cybersecurity Translation Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
