import React, { useState } from "react";

const styles = `
  :root {
    --stepes-magenta: #c11d63;
    --stepes-magenta-dark: #9f1d55;
    --stepes-magenta-deep: #7a1542;
    --stepes-pink-light: #fdf2f7;
    --stepes-pink-mid: #f2a7c6;
    --ink: #111827;
    --ink-soft: #283449;
    --muted: #5b677a;
    --line: #dfe4ec;
    --line-dark: rgba(255,255,255,.16);
    --surface: #ffffff;
    --surface-soft: #f7f8fb;
    --surface-dark: #151a25;
    --surface-dark-2: #1d2432;
    --radius-lg: 30px;
    --radius-md: 22px;
    --shadow-soft: 0 16px 42px rgba(18, 28, 45, .065);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .mfg-page {
    width: 100%;
    overflow-x: clip;
    background: var(--surface);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .mfg-page a { color: inherit; }
  .mfg-page p,
  .mfg-page li,
  .mfg-page a,
  .mfg-page span {
    overflow-wrap: break-word;
    word-break: normal;
  }
  .mfg-shell {
    width: min(100%, 1392px);
    margin: 0 auto;
    padding-inline: 56px;
  }

  .mfg-section { padding-block: 96px; }
  .mfg-section--dense { padding-block: 80px; }
  .mfg-section--soft { background: #f6f7fa; }
  .mfg-section--dark {
    background: var(--surface-dark);
    color: #fff;
  }

  .mfg-eyebrow {
    display: block;
    margin: 0 0 16px;
    color: var(--stepes-magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .mfg-section--dark .mfg-eyebrow,
  .mfg-dark-panel .mfg-eyebrow { color: var(--stepes-pink-mid); }

  .mfg-h1,
  .mfg-h2,
  .mfg-h3 {
    margin: 0;
    color: inherit;
    font-weight: 600;
    letter-spacing: -.025em;
  }

  .mfg-h1 {
    max-width: 760px;
    font-size: 48px;
    line-height: 1.08;
  }

  .mfg-h2 {
    max-width: 820px;
    font-size: 36px;
    line-height: 1.14;
  }

  .mfg-h3 {
    font-size: 24px;
    line-height: 1.24;
  }

  .mfg-lead {
    max-width: 760px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.7;
  }

  .mfg-section--dark .mfg-lead,
  .mfg-dark-panel .mfg-lead { color: #cfd6e3; }

  .mfg-copy {
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.72;
  }

  .mfg-section--dark .mfg-copy,
  .mfg-dark-panel .mfg-copy { color: #cfd6e3; }

  .mfg-header-row {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
    gap: 80px;
    align-items: end;
    margin-bottom: 56px;
  }

  .mfg-header-row .mfg-copy { max-width: 690px; }

  .mfg-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 30px;
  }

  .mfg-btn,
  .mfg-btn:link,
  .mfg-btn:visited {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background-color .2s ease;
  }

  .mfg-btn--primary,
  .mfg-btn--primary:link,
  .mfg-btn--primary:visited,
  .mfg-btn--primary:hover,
  .mfg-btn--primary:active,
  .mfg-btn--primary:focus,
  .mfg-btn--primary:focus-visible {
    background: var(--stepes-magenta);
    border: 1px solid var(--stepes-magenta);
    color: #fff !important;
  }

  .mfg-btn--primary *,
  .mfg-btn--primary:link *,
  .mfg-btn--primary:visited *,
  .mfg-btn--primary:hover *,
  .mfg-btn--primary:active *,
  .mfg-btn--primary:focus *,
  .mfg-btn--primary:focus-visible * {
    color: #fff !important;
    fill: none;
    stroke: #fff !important;
  }

  .mfg-btn--primary:hover {
    background: var(--stepes-magenta-dark);
    border-color: var(--stepes-magenta-dark);
    box-shadow: 0 12px 26px rgba(193, 29, 99, .24);
    transform: translateY(-1px);
  }

  .mfg-btn--secondary,
  .mfg-btn--secondary:link,
  .mfg-btn--secondary:visited {
    background: #fff;
    border: 1px solid #cfd6e1;
    color: var(--ink) !important;
  }

  .mfg-btn--secondary:hover {
    border-color: #9aa7b9;
    box-shadow: 0 10px 22px rgba(18, 28, 45, .08);
    transform: translateY(-1px);
  }

  .mfg-btn:focus-visible,
  .mfg-editorial-link:focus-visible,
  .mfg-faq-button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .25);
    outline-offset: 3px;
  }

  .mfg-editorial-link,
  .mfg-editorial-link:link,
  .mfg-editorial-link:visited {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--stepes-magenta);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }

  .mfg-editorial-link:hover { color: var(--stepes-magenta-deep); }
  .mfg-section--dark .mfg-editorial-link,
  .mfg-section--dark .mfg-editorial-link:link,
  .mfg-section--dark .mfg-editorial-link:visited,
  .mfg-dark-panel .mfg-editorial-link,
  .mfg-dark-panel .mfg-editorial-link:link,
  .mfg-dark-panel .mfg-editorial-link:visited { color: var(--stepes-pink-mid); }
  .mfg-section--dark .mfg-editorial-link:hover,
  .mfg-dark-panel .mfg-editorial-link:hover { color: #fff; }
  .mfg-editorial-link svg { transition: transform .2s ease; }
  .mfg-editorial-link:hover svg { transform: translateX(3px); }

  .mfg-hero {
    position: relative;
    padding-block: 104px 88px;
    background:
      radial-gradient(circle at 88% 16%, rgba(193,29,99,.08), transparent 25%),
      linear-gradient(180deg, #fff 0%, #fbfcfe 100%);
  }

  .mfg-hero::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: min(1280px, calc(100% - 80px));
    height: 1px;
    background: var(--line);
    transform: translateX(-50%);
  }

  .mfg-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, .94fr) minmax(430px, 1.06fr);
    gap: 72px;
    align-items: center;
  }

  .mfg-hero-copy { max-width: 720px; }
  .mfg-proofline {
    margin: 24px 0 0;
    color: #536076;
    font-size: 16px;
  }

  .mfg-hero-art {
    min-width: 0;
    padding: 18px;
    border: 1px solid rgba(193,29,99,.12);
    border-radius: var(--radius-lg);
    background: rgba(255,255,255,.82);
    box-shadow: 0 20px 52px rgba(18, 28, 45, .075);
  }

  .mfg-hero-art svg { display: block; width: 100%; height: auto; }

  .mfg-trust {
    padding-block: 32px;
    background: #fff;
  }

  .mfg-trust-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .mfg-trust-item {
    min-width: 0;
    padding: 28px 30px;
  }

  .mfg-trust-item + .mfg-trust-item { border-left: 1px solid var(--line); }
  .mfg-trust-title { margin: 0 0 7px; font-size: 17px; font-weight: 600; line-height: 1.3; }
  .mfg-trust-text { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.55; }

  .mfg-lifecycle {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .mfg-lifecycle-item {
    position: relative;
    min-width: 0;
    padding: 34px 24px 36px;
  }

  .mfg-lifecycle-item + .mfg-lifecycle-item { border-left: 1px solid var(--line); }
  .mfg-step-num {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    border: 1px solid rgba(193,29,99,.28);
    border-radius: 50%;
    color: var(--stepes-magenta);
    font-size: 14px;
    font-weight: 600;
  }

  .mfg-lifecycle-item .mfg-h3 { font-size: 21px; }
  .mfg-lifecycle-item .mfg-copy { margin-top: 14px; }

  .mfg-content-groups {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 64px;
    border-top: 1px solid var(--line);
  }

  .mfg-content-group {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 20px;
    padding: 34px 0 38px;
    border-bottom: 1px solid var(--line);
  }

  .mfg-icon-box {
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(193,29,99,.13);
    border-radius: 14px;
    background: #fff8fb;
    color: var(--stepes-magenta);
  }

  .mfg-icon-box svg { width: 22px; height: 22px; }
  .mfg-section--dark .mfg-icon-box,
  .mfg-dark-panel .mfg-icon-box {
    border-color: rgba(242,167,198,.18);
    background: rgba(242,167,198,.08);
    color: var(--stepes-pink-mid);
  }
  .mfg-content-group .mfg-h3 { font-size: 22px; }
  .mfg-content-group .mfg-copy { margin-top: 10px; }
  .mfg-plain-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 24px;
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  .mfg-plain-list li {
    position: relative;
    padding-left: 18px;
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.5;
  }

  .mfg-plain-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: .72em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--stepes-magenta);
    transform: translateY(-50%);
  }

  .mfg-inline-links { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 18px; }

  .mfg-workflow-shell {
    border: 1px solid var(--line-dark);
    border-radius: var(--radius-lg);
    background: #1b2230;
    overflow: hidden;
  }

  .mfg-workflow-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .mfg-workflow-step {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 18px;
    padding: 32px;
    min-height: 202px;
    border-bottom: 1px solid var(--line-dark);
  }

  .mfg-workflow-step:not(:nth-child(3n + 1)) { border-left: 1px solid var(--line-dark); }
  .mfg-workflow-step:nth-last-child(-n+3) { border-bottom: 0; }
  .mfg-workflow-step .mfg-step-num { margin: 0; color: var(--stepes-pink-mid); border-color: rgba(242,167,198,.38); }
  .mfg-workflow-step .mfg-h3 { font-size: 21px; }
  .mfg-workflow-step .mfg-copy { margin-top: 10px; }

  .mfg-ai-panel {
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: #fff;
    overflow: hidden;
    box-shadow: 0 14px 36px rgba(18, 28, 45, .05);
  }

  .mfg-ai-top {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 56px;
    padding: 46px;
    border-bottom: 1px solid var(--line);
    background: linear-gradient(110deg, #fff 0%, #fff 58%, #fdf2f7 100%);
  }

  .mfg-ai-modes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .mfg-ai-mode { padding: 36px; }
  .mfg-ai-mode + .mfg-ai-mode { border-left: 1px solid var(--line); }
  .mfg-ai-mode .mfg-h3 { font-size: 22px; }
  .mfg-ai-mode .mfg-copy { margin-top: 12px; }
  .mfg-mode-fit { margin-top: 18px; color: var(--ink-soft); font-size: 16px; font-weight: 600; }
  .mfg-mode-list { margin: 12px 0 0; padding-left: 20px; color: var(--muted); }
  .mfg-mode-list li { margin-top: 7px; font-size: 16px; line-height: 1.5; }
  .mfg-mode-flow {
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    color: var(--stepes-magenta-deep);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
  }

  .mfg-file-grid {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 76px;
    align-items: center;
  }

  .mfg-file-art {
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: #fff;
    box-shadow: 0 14px 38px rgba(18, 28, 45, .06);
  }

  .mfg-file-art svg { display: block; width: 100%; height: auto; }
  .mfg-file-rows { border-top: 1px solid var(--line); }
  .mfg-file-row {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    padding: 24px 0;
    border-bottom: 1px solid var(--line);
  }
  .mfg-file-row .mfg-h3 { font-size: 21px; }
  .mfg-file-row .mfg-copy { margin-top: 7px; }

  .mfg-smart-grid {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 72px;
    align-items: center;
  }

  .mfg-smart-list { margin-top: 34px; border-top: 1px solid var(--line-dark); }
  .mfg-smart-row {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 18px;
    padding: 22px 0;
    border-bottom: 1px solid var(--line-dark);
  }
  .mfg-smart-row .mfg-h3 { font-size: 20px; }
  .mfg-smart-row .mfg-copy { margin-top: 6px; }
  .mfg-smart-row .mfg-icon-box { width: 38px; height: 38px; border-radius: 12px; background: rgba(242,167,198,.1); color: var(--stepes-pink-mid); }
  .mfg-smart-row .mfg-icon-box svg { width: 20px; height: 20px; }

  .mfg-hmi {
    padding: 18px;
    border: 1px solid var(--line-dark);
    border-radius: var(--radius-lg);
    background: #0e131d;
    box-shadow: 0 22px 52px rgba(0,0,0,.22);
  }

  .mfg-hmi-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px 16px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--line-dark);
    color: #cfd6e3;
    font-size: 14px;
  }

  .mfg-hmi-status { display: inline-flex; align-items: center; gap: 8px; color: #fff; font-weight: 600; }
  .mfg-hmi-status::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #8ad3ad; }
  .mfg-hmi-body { display: grid; grid-template-columns: .76fr 1.24fr; min-height: 430px; }
  .mfg-hmi-nav { padding: 18px; border-right: 1px solid var(--line-dark); }
  .mfg-hmi-nav-item { padding: 12px 14px; border-radius: 12px; color: #9fabbc; font-size: 14px; }
  .mfg-hmi-nav-item.is-active { background: rgba(193,29,99,.18); color: #fff; }
  .mfg-hmi-main { padding: 24px; }
  .mfg-hmi-main h4 { margin: 0; color: #fff; font-size: 18px; font-weight: 600; }
  .mfg-hmi-main p { margin: 6px 0 0; color: #a9b4c5; font-size: 16px; }
  .mfg-hmi-metrics { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; margin-top: 24px; }
  .mfg-hmi-card { padding: 18px; border: 1px solid var(--line-dark); border-radius: 16px; background: #151c28; }
  .mfg-hmi-label { color: #9fabbc; font-size: 14px; }
  .mfg-hmi-value { margin-top: 5px; color: #fff; font-size: 22px; font-weight: 600; }
  .mfg-hmi-alert { margin-top: 18px; padding: 18px; border-left: 3px solid var(--stepes-pink-mid); border-radius: 14px; background: rgba(242,167,198,.08); }
  .mfg-hmi-alert strong { display: block; color: #fff; font-size: 16px; }
  .mfg-hmi-alert span { display: block; margin-top: 5px; color: #cfd6e3; font-size: 16px; }

  .mfg-three-columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .mfg-three-col { padding: 34px; }
  .mfg-three-col + .mfg-three-col { border-left: 1px solid var(--line); }
  .mfg-three-col .mfg-h3 { font-size: 22px; }
  .mfg-three-col .mfg-copy { margin-top: 12px; }

  .mfg-sector-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }
  .mfg-sector {
    min-width: 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: #fff;
  }
  .mfg-sector .mfg-h3 { font-size: 21px; }
  .mfg-sector .mfg-copy { margin-top: 10px; }
  .mfg-sector-links {
    display: grid;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }
  .mfg-sector-link,
  .mfg-sector-link:link,
  .mfg-sector-link:visited {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 34px;
    gap: 14px;
    align-items: center;
    min-height: 50px;
    padding: 7px 0;
    color: var(--ink-soft);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }
  .mfg-sector-link + .mfg-sector-link { border-top: 1px solid #edf0f4; }
  .mfg-sector-link-label { min-width: 0; }
  .mfg-sector-link-arrow {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    border: 1px solid #d9dee7;
    border-radius: 50%;
    color: var(--stepes-magenta);
    transition: color .2s ease, background-color .2s ease, border-color .2s ease, transform .2s ease;
  }
  .mfg-sector-link:hover { color: var(--stepes-magenta); }
  .mfg-sector-link:hover .mfg-sector-link-arrow {
    background: var(--stepes-magenta);
    border-color: var(--stepes-magenta);
    color: #fff;
    transform: translateX(3px);
  }
  .mfg-sector-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .25);
    outline-offset: 3px;
    border-radius: 8px;
  }

  .mfg-enterprise-grid {
    display: grid;
    grid-template-columns: .78fr 1.22fr;
    gap: 80px;
    align-items: start;
  }
  .mfg-enterprise-intro { position: sticky; top: 30px; }
  .mfg-enterprise-rows { border-top: 1px solid var(--line); }
  .mfg-enterprise-row {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr) minmax(180px, auto);
    gap: 20px 26px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }
  .mfg-enterprise-row .mfg-icon-box {
    width: 40px;
    height: 40px;
    margin-top: 2px;
    border-color: #eadce3;
    border-radius: 12px;
    background: #fff;
  }
  .mfg-enterprise-row .mfg-icon-box svg { width: 20px; height: 20px; }
  .mfg-enterprise-row > .mfg-editorial-link { align-self: center; }
  .mfg-enterprise-row .mfg-h3 { font-size: 21px; }
  .mfg-enterprise-row .mfg-copy { margin-top: 6px; max-width: 680px; }

  .mfg-governance {
    border: 1px solid var(--line-dark);
    border-radius: var(--radius-lg);
    background: var(--surface-dark-2);
    overflow: hidden;
  }
  .mfg-governance-top { padding: 42px; border-bottom: 1px solid var(--line-dark); }
  .mfg-governance-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .mfg-governance-item {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
  .mfg-governance-item + .mfg-governance-item { border-left: 1px solid var(--line-dark); }
  .mfg-governance-item .mfg-h3 { font-size: 20px; }
  .mfg-governance-item .mfg-copy { margin-top: 10px; }
  .mfg-governance-item .mfg-editorial-link { margin-top: auto; padding-top: 16px; }

  .mfg-case {
    display: grid;
    grid-template-columns: .84fr 1.16fr;
    gap: 56px;
    padding: 52px;
    border: 1px solid rgba(193,29,99,.16);
    border-radius: var(--radius-lg);
    background: linear-gradient(120deg, #fff 0%, #fff 56%, #fdf5f8 100%);
    box-shadow: 0 14px 38px rgba(18, 28, 45, .045);
  }
  .mfg-case .mfg-h2 { margin-top: 22px; font-size: 32px; }
  .mfg-case-points { display: grid; gap: 0; border-top: 1px solid rgba(193,29,99,.17); }
  .mfg-case-point { padding: 20px 0; border-bottom: 1px solid rgba(193,29,99,.17); }
  .mfg-case-point strong { display: block; font-size: 17px; font-weight: 600; }
  .mfg-case-point span { display: block; margin-top: 5px; color: var(--muted); font-size: 16px; }

  .mfg-related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }
  .mfg-related-item {
    display: flex;
    flex-direction: column;
    min-height: 245px;
    padding: 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    transition: background-color .2s ease;
  }
  .mfg-related-item:hover { background: #fbf6f8; }
  .mfg-related-item .mfg-h3 { font-size: 21px; }
  .mfg-related-item .mfg-copy { margin-top: 10px; }
  .mfg-related-action { display: inline-flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 22px; color: var(--stepes-magenta); font-size: 16px; font-weight: 600; }
  .mfg-related-item:focus-visible { outline: 3px solid rgba(193, 29, 99, .25); outline-offset: -3px; }

  .mfg-faq {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .mfg-faq-item + .mfg-faq-item { border-top: 1px solid var(--line); }
  .mfg-faq-button {
    width: 100%;
    min-height: 76px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 44px;
    gap: 24px;
    align-items: center;
    padding: 22px 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
  }
  .mfg-faq-question { font-size: 19px; font-weight: 600; line-height: 1.4; transition: color .2s ease; }
  .mfg-faq-icon {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    color: var(--stepes-magenta);
    transition: transform .2s ease, background-color .2s ease;
  }
  .mfg-faq-button:hover .mfg-faq-question { color: var(--stepes-magenta-deep); }
  .mfg-faq-button[aria-expanded="true"] .mfg-faq-icon { transform: rotate(45deg); background: var(--stepes-pink-light); }
  .mfg-faq-answer { max-width: 840px; padding: 0 64px 26px 0; color: var(--muted); font-size: 16px; line-height: 1.72; }

  .mfg-final {
    padding-block: 96px;
    background: #fff;
  }
  .mfg-final-panel {
    display: grid;
    grid-template-columns: 1.08fr .92fr;
    gap: 54px;
    align-items: center;
    padding: 58px;
    border: 1px solid rgba(193,29,99,.16);
    border-radius: var(--radius-lg);
    background: linear-gradient(118deg, #fff 0%, #fff 52%, #fdf2f7 100%);
    box-shadow: 0 16px 42px rgba(18, 28, 45, .06);
  }
  .mfg-final-art { width: 100%; max-width: 430px; justify-self: end; }
  .mfg-final-art svg { display: block; width: 100%; height: auto; }

  @media (max-width: 1180px) {
    .mfg-shell { padding-inline: 40px; }
    .mfg-hero-grid { grid-template-columns: minmax(0, .95fr) minmax(380px, 1.05fr); gap: 44px; }
    .mfg-h1 { font-size: 46px; }
    .mfg-lifecycle { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .mfg-lifecycle-item:nth-child(4), .mfg-lifecycle-item:nth-child(5) { border-top: 1px solid var(--line); }
    .mfg-lifecycle-item:nth-child(4) { border-left: 0; }
    .mfg-lifecycle-item:nth-child(5) { border-left: 1px solid var(--line); }
    .mfg-file-grid, .mfg-smart-grid { gap: 48px; }
    .mfg-governance-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .mfg-governance-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line-dark); }
    .mfg-governance-item:nth-child(4) { border-top: 1px solid var(--line-dark); }
  }

  @media (max-width: 980px) {
    .mfg-shell { padding-inline: 24px; }
    .mfg-section { padding-block: 80px; }
    .mfg-section--dense { padding-block: 72px; }
    .mfg-h1 { font-size: 42px; }
    .mfg-h2 { font-size: 32px; }
    .mfg-hero { padding-block: 88px 76px; }
    .mfg-hero-grid { grid-template-columns: 1fr; }
    .mfg-hero-copy { max-width: 820px; }
    .mfg-hero-art { max-width: 720px; }
    .mfg-trust-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .mfg-trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .mfg-trust-item:nth-child(4) { border-top: 1px solid var(--line); }
    .mfg-header-row { grid-template-columns: 1fr; gap: 24px; align-items: start; }
    .mfg-content-groups { grid-template-columns: 1fr; }
    .mfg-workflow-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .mfg-workflow-step:not(:nth-child(3n + 1)) { border-left: 0; }
    .mfg-workflow-step:nth-child(even) { border-left: 1px solid var(--line-dark); }
    .mfg-workflow-step:nth-last-child(-n+3) { border-bottom: 1px solid var(--line-dark); }
    .mfg-workflow-step:nth-last-child(-n+2) { border-bottom: 0; }
    .mfg-ai-top { grid-template-columns: 1fr; gap: 24px; }
    .mfg-ai-modes { grid-template-columns: 1fr; }
    .mfg-ai-mode + .mfg-ai-mode { border-left: 0; border-top: 1px solid var(--line); }
    .mfg-file-grid, .mfg-smart-grid { grid-template-columns: 1fr; }
    .mfg-file-content { order: 1; }
    .mfg-file-art { order: 2; max-width: 720px; }
    .mfg-smart-grid .mfg-hmi { max-width: 760px; }
    .mfg-sector-grid, .mfg-related-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .mfg-sector:last-child { grid-column: 1 / -1; }
    .mfg-enterprise-grid { grid-template-columns: 1fr; gap: 42px; }
    .mfg-enterprise-intro { position: static; }
    .mfg-case { grid-template-columns: 1fr; }
    .mfg-final-panel { grid-template-columns: 1fr; }
    .mfg-final-art { max-width: 460px; }
  }

  @media (max-width: 768px) {
    .mfg-shell { padding-inline: 24px; }
    .mfg-h1 { font-size: 42px; }
    .mfg-h2 { font-size: 32px; }
    .mfg-h3 { font-size: 22px; }
    .mfg-lead { font-size: 18px; }
    .mfg-hero-grid { gap: 38px; }
    .mfg-hero-art { padding: 12px; }
    .mfg-lifecycle { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .mfg-lifecycle-item,
    .mfg-lifecycle-item:nth-child(4),
    .mfg-lifecycle-item:nth-child(5) {
      display: grid;
      grid-template-columns: 44px minmax(0,1fr);
      gap: 18px;
      padding: 28px 24px;
      border-left: 0;
      border-top: 1px solid var(--line);
    }
    .mfg-lifecycle-item:nth-child(even) { border-left: 1px solid var(--line); }
    .mfg-lifecycle-item:nth-child(-n+2) { border-top: 0; }
    .mfg-lifecycle-item .mfg-step-num { margin: 0; }
    .mfg-content-group { grid-template-columns: 44px minmax(0,1fr); }
    .mfg-plain-list { grid-template-columns: 1fr; }
    .mfg-three-columns { grid-template-columns: 1fr; }
    .mfg-three-col + .mfg-three-col { border-left: 0; border-top: 1px solid var(--line); }
    .mfg-enterprise-row { grid-template-columns: 44px minmax(0,1fr); }
    .mfg-enterprise-row .mfg-editorial-link { grid-column: 2; justify-self: start; align-self: start; margin-top: 8px; }
    .mfg-final-art { justify-self: start; }
    .mfg-case, .mfg-final-panel { padding: 38px; }
    .mfg-faq-answer { padding-right: 0; }
    .mfg-hmi-body { grid-template-columns: 1fr; }
    .mfg-hmi-nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; overflow: visible; border-right: 0; border-bottom: 1px solid var(--line-dark); }
    .mfg-hmi-nav-item { min-width: 0; }
  }

  @media (max-width: 560px) {
    .mfg-shell { padding-inline: 20px; }
    .mfg-section, .mfg-final { padding-block: 68px; }
    .mfg-section--dense { padding-block: 64px; }
    .mfg-hero { padding-block: 72px 64px; }
    .mfg-h1 { font-size: 38px; line-height: 1.1; }
    .mfg-h2 { font-size: 30px; }
    .mfg-h3 { font-size: 20px; }
    .mfg-buttons { flex-direction: column; }
    .mfg-header-row { margin-bottom: 38px; }
    .mfg-inline-links { flex-direction: column; align-items: flex-start; gap: 2px; }
    .mfg-btn { width: 100%; }
    .mfg-hero::after { width: calc(100% - 40px); }
    .mfg-trust-grid { grid-template-columns: 1fr; }
    .mfg-trust-item + .mfg-trust-item, .mfg-trust-item:nth-child(3), .mfg-trust-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
    .mfg-trust-item { padding-inline: 0; }
    .mfg-lifecycle { grid-template-columns: 1fr; }
    .mfg-lifecycle-item,
    .mfg-lifecycle-item:nth-child(4),
    .mfg-lifecycle-item:nth-child(5),
    .mfg-lifecycle-item:nth-child(even) {
      padding: 26px 0;
      border-left: 0;
      border-top: 1px solid var(--line);
    }
    .mfg-lifecycle-item:first-child { border-top: 0; }
    .mfg-content-group { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
    .mfg-workflow-grid { grid-template-columns: 1fr; }
    .mfg-workflow-step,
    .mfg-workflow-step:nth-child(even),
    .mfg-workflow-step:nth-last-child(-n+2) {
      grid-template-columns: 38px minmax(0,1fr);
      padding: 26px 20px;
      border-left: 0;
      border-bottom: 1px solid var(--line-dark);
    }
    .mfg-workflow-step:last-child { border-bottom: 0; }
    .mfg-ai-top, .mfg-ai-mode { padding: 28px 22px; }
    .mfg-file-row, .mfg-smart-row { grid-template-columns: 38px minmax(0,1fr); }
    .mfg-file-row .mfg-icon-box { width: 38px; height: 38px; border-radius: 12px; }
    .mfg-hmi { padding: 10px; }
    .mfg-hmi-body { min-height: auto; }
    .mfg-hmi-main { padding: 18px; }
    .mfg-hmi-metrics { grid-template-columns: 1fr; }
    .mfg-hmi-nav { grid-template-columns: 1fr; }
    .mfg-three-col, .mfg-sector, .mfg-related-item { padding: 26px 0; }
    .mfg-sector-grid, .mfg-related-grid { grid-template-columns: 1fr; border-left: 0; }
    .mfg-sector:last-child { grid-column: auto; }
    .mfg-governance-grid { grid-template-columns: 1fr; }
    .mfg-governance-item + .mfg-governance-item { border-left: 0; border-top: 1px solid var(--line-dark); }
    .mfg-sector, .mfg-related-item { border-right: 0; }
    .mfg-related-item { min-height: auto; }
    .mfg-related-action { margin-top: 18px; }
    .mfg-governance-top, .mfg-governance-item { padding: 28px 22px; }
    .mfg-case, .mfg-final-panel { padding: 30px 22px; }
    .mfg-case .mfg-h2 { font-size: 29px; }
    .mfg-faq-button { grid-template-columns: minmax(0,1fr) 38px; gap: 16px; }
    .mfg-faq-question { font-size: 18px; }
  }

  @media (max-width: 350px) {
    .mfg-h1 { font-size: 38px; }
    .mfg-h2 { font-size: 30px; }
    .mfg-shell { padding-inline: 20px; }
    .mfg-proofline { font-size: 16px; }
    .mfg-case, .mfg-final-panel { padding: 26px 20px; }
  }
`;

const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LineIcon = ({ name }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.55, strokeLinecap: "round", strokeLinejoin: "round" };
  const fine = { ...common, strokeWidth: 1.3 };
  const paths = {
    document: <><path d="M7 3h7l4 4v14H7z" {...common}/><path d="M14 3v5h5M10 12h5M10 16h5" {...common}/></>,
    quality: <><path d="M12 3l7 3v5c0 5-3.2 8.3-7 10-3.8-1.7-7-5-7-10V6z" {...common}/><path d="M9 12l2 2 4-4" {...common}/></>,
    safety: <><path d="M12 3l9 16H3z" {...common}/><path d="M12 9v4M12 17h.01" {...common}/></>,
    software: <><rect x="3" y="5" width="18" height="14" rx="2" {...common}/><path d="M7 9h4M7 13h7M16 9h1M16 13h1" {...common}/></>,
    terminology: <><path d="M12 6.5C10.2 5.1 7.7 4.5 4.5 5v13.2c3.2-.5 5.7.1 7.5 1.5" {...fine}/><path d="M12 6.5c1.8-1.4 4.3-2 7.5-1.5v13.2c-3.2-.5-5.7.1-7.5 1.5" {...fine}/><path d="M12 6.5v13.2M7 9h2.6M7 12h2.6M14.4 9H17M14.4 12H17" {...fine}/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" {...common}/><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M19 9h3M2 15h3M19 15h3" {...common}/></>,
    file: <><path d="M7 3h7l4 4v14H7z" {...common}/><path d="M14 3v5h5M10 12h5M10 16h3" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...common}/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" {...common}/></>,
    interface: <><rect x="3" y="4" width="18" height="16" rx="2" {...common}/><path d="M3 9h18M8 4v5M7 13h4M14 13h3M7 17h10" {...common}/></>,
    network: <><circle cx="5" cy="12" r="2" {...common}/><circle cx="19" cy="6" r="2" {...common}/><circle cx="19" cy="18" r="2" {...common}/><path d="M7 12l10-5M7 12l10 5" {...common}/></>,
    training: <><path d="M3 7l9-4 9 4-9 4z" {...common}/><path d="M6 9v6c3 2 9 2 12 0V9M21 7v7" {...common}/></>,
    plant: <><path d="M3 21V9l6 3V9l6 3V5h6v16z" {...common}/><path d="M7 17h2M12 17h2M17 17h2" {...common}/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" {...common}/><path d="M8 10V7a4 4 0 018 0v3M12 14v3" {...common}/></>,
    analytics: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" {...common}/></>,
    approvals: <><circle cx="8" cy="7.5" r="2.5" {...fine}/><path d="M3.8 17.5c.5-3.1 2.1-4.7 4.2-4.7 1.5 0 2.8.7 3.6 2" {...fine}/><circle cx="16.8" cy="15.8" r="4.2" {...fine}/><path d="M14.8 15.8l1.3 1.3 2.6-2.9" {...fine}/></>,
    integration: <><circle cx="4.5" cy="7" r="1.7" {...fine}/><circle cx="4.5" cy="17" r="1.7" {...fine}/><path d="M6.2 7h1.1A1.7 1.7 0 0 1 9 8.7V10M6.2 17h1.1A1.7 1.7 0 0 0 9 15.3V14" {...fine}/><rect x="9" y="9" width="6" height="6" rx="1.5" {...fine}/><path d="M15 12h5.2M18.1 9.9l2.1 2.1-2.1 2.1" {...fine}/></>,
    memory: <><ellipse cx="12" cy="6.5" rx="6.5" ry="2.3" {...fine}/><path d="M5.5 6.5v4c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-4" {...fine}/><path d="M5.5 10.5v4c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-4" {...fine}/><path d="M5.5 14.5v3c0 1.3 2.9 2.3 6.5 2.3s6.5-1 6.5-2.3v-3" {...fine}/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.document}</svg>;
};

const ButtonLink = ({ href, primary = false, children }) => (
  <a className={`mfg-btn ${primary ? "mfg-btn--primary" : "mfg-btn--secondary"}`} href={href}>
    <span>{children}</span><ArrowIcon />
  </a>
);

const EditorialLink = ({ href, children }) => (
  <a className="mfg-editorial-link" href={href}><span>{children}</span><ArrowIcon size={16} /></a>
);

const SectorLink = ({ href, children }) => (
  <a className="mfg-sector-link" href={href}>
    <span className="mfg-sector-link-label">{children}</span>
    <span className="mfg-sector-link-arrow" aria-hidden="true"><ArrowIcon size={16} /></span>
  </a>
);

const HeroIllustration = () => (
  <svg viewBox="0 0 720 530" role="img" aria-label="Manufacturing documentation, factory systems, and multilingual content connected across global operations">
    <defs>
      <linearGradient id="heroPanel" x1="0" x2="1">
        <stop offset="0" stopColor="#ffffff"/>
        <stop offset="1" stopColor="#f8edf2"/>
      </linearGradient>
      <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#1a2332" floodOpacity=".10"/>
      </filter>
    </defs>
    <rect x="22" y="18" width="676" height="494" rx="28" fill="url(#heroPanel)" stroke="#e2e6ed"/>
    <circle cx="588" cy="94" r="46" fill="#fdf2f7" stroke="#c11d63" strokeOpacity=".28"/>
    <path d="M560 94h56M588 66c16 16 16 40 0 56M588 66c-16 16-16 40 0 56" fill="none" stroke="#9f1d55" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="588" cy="94" r="28" fill="none" stroke="#9f1d55" strokeWidth="2"/>

    <g filter="url(#heroShadow)">
      <rect x="70" y="78" width="214" height="276" rx="20" fill="#fff" stroke="#dce2ea"/>
      <rect x="90" y="102" width="84" height="10" rx="5" fill="#c11d63" fillOpacity=".16"/>
      <rect x="90" y="130" width="154" height="8" rx="4" fill="#cdd4df"/>
      <rect x="90" y="148" width="130" height="8" rx="4" fill="#dde2e9"/>
      <rect x="90" y="184" width="174" height="118" rx="14" fill="#f6f8fb" stroke="#e1e5eb"/>
      <path d="M112 272v-48l30 14v-22l30 14v-34h34v76z" fill="none" stroke="#3b4557" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M124 252h10M151 252h10M181 252h10" stroke="#c11d63" strokeWidth="3" strokeLinecap="round"/>
      <rect x="90" y="320" width="108" height="8" rx="4" fill="#d2d8e2"/>
    </g>

    <g filter="url(#heroShadow)">
      <rect x="352" y="160" width="286" height="216" rx="22" fill="#171d29" stroke="#343c4d"/>
      <rect x="372" y="182" width="118" height="10" rx="5" fill="#f2a7c6" fillOpacity=".35"/>
      <rect x="372" y="210" width="112" height="68" rx="14" fill="#202838" stroke="#394255"/>
      <rect x="498" y="210" width="120" height="68" rx="14" fill="#202838" stroke="#394255"/>
      <path d="M392 252l16-16 14 10 22-25 20 16" fill="none" stroke="#f2a7c6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="516" cy="244" r="18" fill="none" stroke="#8ad3ad" strokeWidth="7" strokeDasharray="70 44" transform="rotate(-80 516 244)"/>
      <rect x="372" y="294" width="246" height="52" rx="14" fill="#202838" stroke="#394255"/>
      <path d="M392 318h154" stroke="#a9b4c5" strokeWidth="7" strokeLinecap="round"/>
      <path d="M392 330h94" stroke="#606b7e" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="594" cy="320" r="11" fill="#c11d63"/>
    </g>

    <path d="M285 210c31-27 48-37 74-39M284 276c32 18 54 30 74 31M513 377c2 42-15 70-63 86M560 139c-26 12-43 23-58 39" fill="none" stroke="#9f1d55" strokeOpacity=".46" strokeWidth="2" strokeDasharray="6 8"/>
    <circle cx="358" cy="171" r="6" fill="#c11d63"/>
    <circle cx="358" cy="307" r="6" fill="#c11d63"/>
    <circle cx="450" cy="463" r="6" fill="#c11d63"/>
    <circle cx="502" cy="178" r="6" fill="#c11d63"/>

    <g filter="url(#heroShadow)">
      <rect x="168" y="398" width="304" height="74" rx="18" fill="#fff" stroke="#dce2ea"/>
      <circle cx="204" cy="435" r="18" fill="#fdf2f7"/>
      <path d="M198 435l4 4 8-9" fill="none" stroke="#c11d63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="234" y="419" width="116" height="8" rx="4" fill="#c8d0dc"/>
      <rect x="234" y="438" width="188" height="8" rx="4" fill="#e0e4ea"/>
    </g>
  </svg>
);

const FileIllustration = () => (
  <svg viewBox="0 0 560 520" role="img" aria-label="Structured technical files, drawings, software resources, and multilingual publishing workflow">
    <defs>
      <filter id="fileShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#182235" floodOpacity=".10"/>
      </filter>
    </defs>
    <rect x="20" y="18" width="520" height="484" rx="28" fill="#f8f9fb" stroke="#dfe4ec"/>
    <g filter="url(#fileShadow)">
      <rect x="62" y="72" width="250" height="322" rx="20" fill="#fff" stroke="#dce2ea"/>
      <path d="M238 72h54l20 20v302H62V72z" fill="#fff"/>
      <path d="M238 72v42h74" fill="none" stroke="#dce2ea" strokeWidth="2"/>
      <rect x="88" y="104" width="86" height="10" rx="5" fill="#c11d63" fillOpacity=".17"/>
      <rect x="88" y="136" width="166" height="8" rx="4" fill="#cbd3de"/>
      <rect x="88" y="154" width="132" height="8" rx="4" fill="#e0e4ea"/>
      <rect x="88" y="190" width="198" height="126" rx="14" fill="#f7f8fb" stroke="#e1e5eb"/>
      <path d="M114 282v-54l34 16v-26l36 18v-38h42v84z" fill="none" stroke="#465165" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M126 260h12M158 260h12M193 260h12" stroke="#c11d63" strokeWidth="3" strokeLinecap="round"/>
      <rect x="88" y="344" width="126" height="8" rx="4" fill="#d1d7e1"/>
      <rect x="88" y="364" width="170" height="8" rx="4" fill="#e0e4ea"/>
    </g>
    <g filter="url(#fileShadow)">
      <rect x="330" y="112" width="164" height="112" rx="18" fill="#171d29" stroke="#343c4d"/>
      <path d="M356 142h108M356 166h76M356 190h94" stroke="#a9b4c5" strokeWidth="7" strokeLinecap="round"/>
      <path d="M360 140l-8 8 8 8M460 184l8 8-8 8" fill="none" stroke="#f2a7c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <g filter="url(#fileShadow)">
      <rect x="344" y="252" width="144" height="104" rx="18" fill="#fff" stroke="#dce2ea"/>
      <path d="M370 326v-42l24 12v-18l24 12v-28h28v64z" fill="none" stroke="#465165" strokeWidth="2"/>
      <circle cx="454" cy="278" r="10" fill="#fdf2f7" stroke="#c11d63"/>
    </g>
    <path d="M312 176h28M312 310h32M214 394c26 42 58 54 108 30" fill="none" stroke="#c11d63" strokeWidth="2" strokeDasharray="6 7"/>
    <circle cx="335" cy="176" r="5" fill="#c11d63"/>
    <circle cx="339" cy="310" r="5" fill="#c11d63"/>
    <circle cx="320" cy="424" r="5" fill="#c11d63"/>
    <rect x="112" y="430" width="338" height="42" rx="21" fill="#fff" stroke="#dce2ea"/>
    <circle cx="142" cy="451" r="9" fill="#c11d63"/>
    <rect x="164" y="446" width="116" height="8" rx="4" fill="#cbd3de"/>
    <rect x="296" y="446" width="118" height="8" rx="4" fill="#e0e4ea"/>
  </svg>
);

const CtaIllustration = () => (
  <svg viewBox="0 0 520 290" role="img" aria-label="Global manufacturing teams connected through multilingual content">
    <rect x="12" y="12" width="496" height="266" rx="28" fill="#fff" stroke="#ead6df"/>
    <circle cx="348" cy="143" r="74" fill="#fdf2f7" stroke="#c11d63" strokeOpacity=".28"/>
    <circle cx="348" cy="143" r="50" fill="none" stroke="#9f1d55" strokeWidth="2"/>
    <path d="M298 143h100M348 93c28 28 28 72 0 100M348 93c-28 28-28 72 0 100" fill="none" stroke="#9f1d55" strokeWidth="2"/>
    <rect x="66" y="77" width="176" height="132" rx="18" fill="#fff" stroke="#dfe4ec"/>
    <path d="M94 178v-44l28 14v-22l28 14v-34h34v72z" fill="none" stroke="#3f4a5d" strokeWidth="2.2"/>
    <path d="M106 160h10M134 160h10M164 160h10" stroke="#c11d63" strokeWidth="3" strokeLinecap="round"/>
    <path d="M242 124c22-18 42-24 58-24M242 166c24 10 42 18 60 24" fill="none" stroke="#c11d63" strokeOpacity=".48" strokeWidth="2" strokeDasharray="6 7"/>
    <circle cx="299" cy="100" r="5" fill="#c11d63"/>
    <circle cx="301" cy="190" r="5" fill="#c11d63"/>
  </svg>
);

const trustItems = [
  ["ISO-Certified Quality", "ISO 17100 and ISO 9001 processes support consistent translation, professional review, and accountable delivery."],
  ["100+ Languages", "Reach manufacturing locations, suppliers, service teams, distributors, employees, and customers worldwide."],
  ["AI + Human Workflows", "Match translation technology and technical review to the purpose, risk, and complexity of each content stream."],
  ["Technical File Engineering", "Preserve structured content, technical drawings, software resources, multimedia, and publication layouts."],
];

const lifecycle = [
  ["Engineering and Product Development", "Translate product requirements, engineering specifications, drawings, bills of materials, test content, and design-change records."],
  ["Suppliers and Global Sourcing", "Improve collaboration through multilingual supplier specifications, RFQs, quality requirements, onboarding, logistics, and packaging instructions."],
  ["Production and Quality Operations", "Support consistent manufacturing with translated SOPs, work instructions, inspection procedures, quality manuals, and validation content."],
  ["Product Launch and Market Readiness", "Prepare manuals, labels, packaging, warnings, software, technical files, and distributor materials for international release."],
  ["Service and Product Support", "Keep maintenance manuals, troubleshooting guides, parts catalogs, service bulletins, knowledge bases, and technician training current."],
];

const contentGroups = [
  {
    icon: "document",
    title: "Engineering and Product Documentation",
    copy: "Translate the information used to design, build, install, operate, maintain, and service manufactured products.",
    items: ["Engineering specifications", "Technical datasheets", "Product and user manuals", "Installation instructions", "Bills of materials", "Drawings and CAD annotations", "Parts catalogs", "Test methods and reports"],
    links: [
      ["Product Manual Translation", "https://www.stepes.com/manufacturing-translation-services/product-manual-translation/"],
      ["Technical Translation Services", "https://www.stepes.com/technical-translation-services/"]
    ]
  },
  {
    icon: "quality",
    title: "Production, Quality, and Supplier Content",
    copy: "Standardize multilingual processes across plants, production partners, supplier networks, and quality organizations.",
    items: ["Standard operating procedures", "Work instructions", "Process documentation", "Quality manuals", "Inspection procedures", "Audit materials", "Supplier requirements", "Logistics instructions"]
  },
  {
    icon: "safety",
    title: "Safety and Workforce Content",
    copy: "Give employees, operators, contractors, and service teams clear multilingual safety and training information.",
    items: ["Safety procedures", "Equipment warnings", "Safety Data Sheets", "Emergency materials", "Employee onboarding", "Operator training", "Technical eLearning", "Video and subtitles"]
  },
  {
    icon: "software",
    title: "Digital Product and Customer Content",
    copy: "Localize the software, interfaces, websites, and connected experiences that support modern products and operations.",
    items: ["HMI and SCADA content", "Equipment software", "Connected-product apps", "Product websites", "Digital work instructions", "IIoT dashboards", "Knowledge bases", "Labels and packaging"]
  }
];

const workflowSteps = [
  ["Content and Risk Assessment", "Evaluate audience, intended use, technical subject, safety significance, file complexity, available language assets, and approval requirements."],
  ["Subject-Matter Resource Selection", "Assign translators and reviewers with relevant experience in engineering, automation, chemicals, energy, quality systems, safety, or technical publishing."],
  ["Terminology Preparation", "Extract recurring terms, import approved glossaries, resolve acronyms, and establish product, component, warning, and engineering terminology."],
  ["Translation and Localization", "Apply the appropriate combination of expert translation, translation memory, AI, technical post-editing, software localization, and file engineering."],
  ["Quality Assurance", "Check completeness, terminology, numbers, units, codes, warnings, tags, variables, cross-references, linguistic quality, and multilingual formatting."],
  ["Customer Review and Finalization", "Support engineering, quality, in-country, and business review while carrying approved decisions into terminology and translation memory."],
];

const aiModes = [
  {
    title: "Expert-Led Translation",
    copy: "For novel, technically complex, market-facing, or business-critical content that requires the highest level of professional linguistic control.",
    fit: "Often used for",
    items: ["Safety-sensitive instructions", "Product manuals", "Installation documentation", "Novel engineering content"],
    flow: "Technical translator → Independent review → QA → Customer approval"
  },
  {
    title: "AI + Expert Review",
    copy: "For large, repetitive, or frequently updated technical content where approved language assets and professional technical post-editing can increase efficiency.",
    fit: "Often used for",
    items: ["Recurring manual updates", "Standard operating procedures", "Maintenance content", "Established product families"],
    flow: "AI + translation memory → Technical post-editing → QA → Approval"
  },
  {
    title: "High-Volume Operational Translation",
    copy: "For rapidly changing internal content that benefits from faster multilingual access and a review level aligned with audience and operational risk.",
    fit: "Often used for",
    items: ["Internal knowledge content", "Supplier communications", "Operational updates", "Internal support information"],
    flow: "Controlled AI workflow → Automated checks → Targeted human review"
  }
];

const fileRows = [
  ["file", "Technical Authoring and Publishing", "Microsoft Office, Adobe InDesign, Illustrator, FrameMaker, PDF, tables, graphics, and technical callouts."],
  ["terminology", "Structured Documentation", "XML, DITA XML, HTML, structured templates, reusable topics, and content exported from component content management systems."],
  ["plant", "Engineering and Design Content", "DWG and DXF drawings, CAD annotations, schematics, layered technical graphics, legends, and exported engineering content."],
  ["training", "Training and Digital Formats", "SCORM packages, eLearning content, video, audio, subtitles, software resource files, web content, and interface strings."],
];

const smartItems = [
  ["interface", "Human-Machine Interfaces", "Localize menus, controls, operating states, alarms, warnings, error messages, setup guidance, and maintenance prompts."],
  ["network", "SCADA and Industrial Control Content", "Translate language-bearing monitoring displays, system notifications, process descriptions, operator guidance, and equipment status content."],
  ["analytics", "IIoT and Predictive Maintenance", "Support equipment dashboards, sensor labels, diagnostic messages, maintenance notifications, performance reports, and remote-service content."],
  ["training", "Digital Work Instructions", "Localize operator and service instructions delivered through tablets, production terminals, wearables, internal applications, and augmented work environments."],
  ["software", "Connected Products", "Support embedded interfaces, companion applications, customer portals, remote diagnostics, product-update content, and digital support documentation."],
];

const sectors = [
  {
    title: "Industrial Equipment and Heavy Machinery",
    text: "Operating manuals, installation content, service documentation, safety instructions, parts catalogs, HMI interfaces, and field-service materials.",
    links: [["Industrial Equipment Translation", "https://www.stepes.com/industrial-translation-services/"]]
  },
  {
    title: "Automotive and Mobility",
    text: "Engineering content, supplier documentation, service information, diagnostics, training, software, and customer-facing product materials.",
    links: [["Automotive Translation", "https://www.stepes.com/manufacturing-translation-services/automotive-manufacturing-translation/"]]
  },
  {
    title: "Electronics and Semiconductors",
    text: "Technical specifications, component documentation, software interfaces, manufacturing procedures, datasheets, quality content, and product information.",
    links: [
      ["Electronics Translation", "https://www.stepes.com/electronics-translation-services/"],
      ["Semiconductor Translation", "https://www.stepes.com/semiconductor-translation-services/"]
    ]
  },
  {
    title: "Robotics and Industrial Automation",
    text: "Control interfaces, installation documentation, operating instructions, maintenance procedures, training, and safety content.",
    links: [
      ["Robotics Translation", "https://www.stepes.com/robotics-translation-services/"],
      ["Industrial Automation Translation", "https://www.stepes.com/industrial-automation-translation/"]
    ]
  },
  {
    title: "Aerospace Manufacturing",
    text: "Engineering specifications, production documentation, quality materials, supplier communications, technical training, and maintenance information.",
    links: [["Aerospace Translation", "https://www.stepes.com/aerospace-translation-services/"]]
  },
  {
    title: "Chemicals and Advanced Materials",
    text: "Safety Data Sheets, product specifications, processing instructions, labels, laboratory information, technical datasheets, and quality documentation.",
    links: [["Chemical Translation", "https://www.stepes.com/chemical-translation-services/"]]
  },
  {
    title: "Energy and Renewable-Energy Equipment",
    text: "Documentation for power systems, solar and wind equipment, batteries, inverters, grid technologies, and field-service operations.",
    links: [
      ["Energy Translation", "https://www.stepes.com/energy-translation-services/"],
      ["Renewable Energy Translation", "https://www.stepes.com/renewable-energy-translation-services/"]
    ]
  },
  {
    title: "Consumer Products and Appliances",
    text: "Product manuals, packaging, labels, connected-product interfaces, websites, warranty information, training, and customer support materials.",
    links: [["Appliance Translation", "https://www.stepes.com/appliance-translation-services/"]]
  },
  {
    title: "Packaging and Logistics Equipment",
    text: "Operating manuals, automation interfaces, equipment specifications, installation information, maintenance content, and service documentation.",
    links: [
      ["Packaging Translation", "https://www.stepes.com/packaging-translation-services/"],
      ["Logistics Translation", "https://www.stepes.com/logistics-translation-services/"]
    ]
  },
];

const enterpriseRows = [
  ["plant", "Centralized Program Management", "Coordinate multilingual requests, files, languages, workflows, schedules, and business-unit requirements through one program.", "Enterprise Translation Management", "https://www.stepes.com/enterprise-translation-management/"],
  ["memory", "Translation Memory and Content Reuse", "Reuse approved language, preserve consistency, reduce repeated translation effort, and support updates across manuals, SOPs, and product generations.", "Translation Memory", "https://www.stepes.com/translation-memory/"],
  ["terminology", "Enterprise Terminology", "Align product names, components, warnings, engineering vocabulary, acronyms, and preferred translations across products and markets.", "Terminology Management", "https://www.stepes.com/terminology-management/"],
  ["approvals", "Roles and Approvals", "Configure engineering, quality, in-country, and business-unit review with role-based access and consolidated feedback.", "Translation Approval Workflows", "https://www.stepes.com/translation-approval-workflows/"],
  ["integration", "Workflow Automation and Integrations", "Connect translation with technical authoring, content management, product repositories, software environments, enterprise workflows, and APIs.", "Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
  ["analytics", "Reporting and Visibility", "Track project status, language volume, turnaround, review activity, quality activity, translation memory leverage, and program trends.", "Reporting and Analytics", "https://www.stepes.com/translation-reporting-analytics/"],
];

const related = [
  ["Product Manual Translation", "Translate user, installation, operation, maintenance, and service manuals for international products.", "https://www.stepes.com/manufacturing-translation-services/product-manual-translation/"],
  ["Technical Translation Services", "Support complex engineering, scientific, and technical documentation across industries and file formats.", "https://www.stepes.com/technical-translation-services/"],
  ["Software Localization Services", "Localize equipment software, interfaces, mobile applications, and connected-product experiences.", "https://www.stepes.com/software-localization-services/"],
  ["eLearning Localization Services", "Translate workforce training, operator instruction, safety courses, videos, and technical learning programs.", "https://www.stepes.com/elearning-localization-services/"],
  ["Terminology Management", "Control product names, component terminology, engineering vocabulary, warnings, and approved multilingual language.", "https://www.stepes.com/terminology-management/"],
  ["Translation Quality Assurance", "Apply automated and linguistic checks across documents, software, multimedia, and structured content.", "https://www.stepes.com/translation-quality-assurance/"],
];

const faqs = [
  ["What are manufacturing translation services?", "Manufacturing translation services cover the translation and localization of technical, operational, safety, software, training, quality, supplier, and product content used throughout global manufacturing operations. This may include engineering specifications, manuals, SOPs, work instructions, drawings, equipment interfaces, training materials, Safety Data Sheets, quality documentation, labels, service content, and customer support information. Manufacturing translation can also include the technical processing needed to preserve structured files, diagrams, tables, tags, software variables, and multilingual layouts."],
  ["What types of manufacturing documents can Stepes translate?", "Stepes translates engineering documentation, technical manuals, product specifications, SOPs, work instructions, quality manuals, inspection procedures, supplier documentation, safety materials, Safety Data Sheets, installation instructions, service documentation, parts catalogs, training content, product labels, packaging, and customer support materials. We also localize HMI interfaces, equipment software, connected-product applications, IIoT dashboards, SCADA displays, digital work instructions, technical eLearning, video, and multimedia content."],
  ["How does Stepes maintain technical terminology across products and languages?", "Stepes combines terminology databases, translation memory, project instructions, subject-matter resource selection, and quality checks to maintain consistent technical language. Existing glossaries can be imported and expanded, while new terminology can be extracted from source content and reviewed by customer specialists. Approved product names, component terms, warnings, acronyms, and preferred translations are then made available to translators and reviewers and checked during production."],
  ["Can Stepes translate CAD drawings and engineering annotations?", "Yes. Stepes supports multilingual workflows for CAD annotations, drawing callouts, schematics, layered technical graphics, legends, and related engineering content. The production method depends on the native file type, design environment, content structure, and required output. Stepes reviews the source files to determine whether text should be processed within the native file, extracted into a controlled translation format, or localized through an associated publishing workflow."],
  ["How does Stepes use AI for manufacturing translation?", "Stepes applies AI according to the content’s purpose, risk, complexity, repetition, and quality requirements. High-risk or novel technical content may follow an expert-led translation and independent-review workflow. Repetitive manuals, established specifications, or recurring documentation may use AI and translation memory followed by technical post-editing and QA. Lower-risk operational content may use controlled AI workflows with targeted human review."],
  ["Can Stepes localize HMI, SCADA, and equipment software?", "Stepes localizes language-bearing content for human-machine interfaces, SCADA displays, equipment software, industrial applications, and connected products. This may include menus, controls, alarms, warnings, error messages, operating modes, status information, maintenance prompts, and troubleshooting content. Localization workflows can address terminology, character limits, abbreviations, placeholders, variables, interface context, text expansion, and in-context review."],
  ["How does Stepes support frequently updated manuals and SOPs?", "Stepes uses translation memory, version-controlled workflows, structured-content processing, terminology management, and changed-content analysis to support recurring documentation updates. Approved translations can be reused when the source remains unchanged. New or modified content is routed for translation and review, while customer feedback is incorporated into the relevant terminology and translation memory assets."],
  ["Can Stepes translate Safety Data Sheets and safety documentation?", "Yes. Stepes translates Safety Data Sheets, equipment warnings, workplace safety procedures, emergency content, hazard communication materials, operator instructions, and employee safety training. Quality controls may address terminology, numbers, symbols, hazard language, completeness, and formatting. Stepes provides linguistic and technical translation support, while the manufacturer remains responsible for market-specific legal, regulatory, classification, and final approval requirements."],
  ["Which manufacturing file formats does Stepes support?", "Stepes supports a broad range of documentation, publishing, structured-content, engineering, software, and multimedia formats. Representative formats include Microsoft Office files, Adobe InDesign, Illustrator, FrameMaker, PDF, XML, DITA XML, HTML, software resource files, subtitle formats, audio, video, SCORM packages, and selected engineering drawing formats. Source files are reviewed before the final production workflow is confirmed."],
  ["How are manufacturing translation costs and turnaround times determined?", "Pricing and schedules depend on source word count, language combination, technical complexity, file type, repetition, available translation memory, review level, formatting requirements, software or engineering work, and requested delivery schedule. Projects involving multilingual desktop publishing, CAD processing, software localization, multimedia production, or extensive customer review may require additional technical services."],
];

export default function ManufacturingTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="mfg-page">
      <style>{styles}</style>

      <section className="mfg-hero">
        <div className="mfg-shell mfg-hero-grid">
          <div className="mfg-hero-copy">
            <h1 className="mfg-h1">Manufacturing Translation Services for Global Operations</h1>
            <p className="mfg-lead">Translate technical, operational, safety, software, training, and product content with specialized linguists, controlled terminology, and secure AI-powered workflows. Stepes helps manufacturers deliver accurate multilingual information across engineering, production, product launch, maintenance, and customer support.</p>
            <div className="mfg-buttons">
              <ButtonLink href="https://app.stepes.com/quote/" primary>Get a Quote</ButtonLink>
              <ButtonLink href="https://www.stepes.com/contact-us/">Talk to an Expert</ButtonLink>
            </div>
            <p className="mfg-proofline">100+ Languages · ISO-Certified Quality Processes · AI + Human Expertise</p>
          </div>
          <div className="mfg-hero-art"><HeroIllustration /></div>
        </div>
      </section>

      <section className="mfg-trust" aria-label="Manufacturing translation proof points">
        <div className="mfg-shell">
          <div className="mfg-trust-grid">
            {trustItems.map(([title, text]) => (
              <div className="mfg-trust-item" key={title}>
                <h3 className="mfg-trust-title">{title}</h3>
                <p className="mfg-trust-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div>
              <h2 className="mfg-h2">Translate Content Across the Manufacturing Lifecycle</h2>
            </div>
            <p className="mfg-copy">Manufacturing content begins during product development and continues throughout sourcing, production, launch, operation, service, and product updates. Stepes connects these content streams through one coordinated translation environment, helping global teams maintain accuracy and consistency at every stage.</p>
          </div>
          <div className="mfg-lifecycle">
            {lifecycle.map(([title, text], index) => (
              <article className="mfg-lifecycle-item" key={title}>
                <span className="mfg-step-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="mfg-h3">{title}</h3>
                  <p className="mfg-copy">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--soft">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div>
              <h2 className="mfg-h2">Manufacturing Documents, Software, and Training Content</h2>
            </div>
            <p className="mfg-copy">Global manufacturers manage a wide range of technical and operational information. Stepes provides one solution for translating the documents, applications, interfaces, training programs, and customer content that support international manufacturing operations.</p>
          </div>
          <div className="mfg-content-groups">
            {contentGroups.map((group) => (
              <article className="mfg-content-group" key={group.title}>
                <span className="mfg-icon-box"><LineIcon name={group.icon} /></span>
                <div>
                  <h3 className="mfg-h3">{group.title}</h3>
                  <p className="mfg-copy">{group.copy}</p>
                  <ul className="mfg-plain-list">
                    {group.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  {group.links && (
                    <div className="mfg-inline-links">
                      {group.links.map(([label, href]) => <EditorialLink key={label} href={href}>{label}</EditorialLink>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--dark">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div>
              <h2 className="mfg-h2">Technical Accuracy Built Into Every Translation</h2>
            </div>
            <p className="mfg-copy">Product terminology, measurements, part numbers, warnings, interface constraints, diagrams, and procedural relationships must remain accurate across languages, documents, and product revisions. Stepes builds technical quality into the workflow from initial content assessment through final delivery.</p>
          </div>
          <div className="mfg-workflow-shell">
            <div className="mfg-workflow-grid">
              {workflowSteps.map(([title, text], index) => (
                <article className="mfg-workflow-step" key={title}>
                  <span className="mfg-step-num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="mfg-h3">{title}</h3>
                    <p className="mfg-copy">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mfg-inline-links" style={{ marginTop: 26 }}>
            <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
            <EditorialLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</EditorialLink>
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell">
          <div className="mfg-ai-panel">
            <div className="mfg-ai-top">
              <div>
                <span className="mfg-eyebrow">AI + Human Workflows</span>
                <h2 className="mfg-h2">Apply the Right Translation Workflow to Every Content Type</h2>
              </div>
              <p className="mfg-copy">Manufacturing content varies widely in risk, complexity, repetition, audience, and release frequency. Stepes applies AI, translation memory, specialized linguists, independent review, automated quality checks, and customer approval according to the needs of each content stream.</p>
            </div>
            <div className="mfg-ai-modes">
              {aiModes.map(mode => (
                <article className="mfg-ai-mode" key={mode.title}>
                  <h3 className="mfg-h3">{mode.title}</h3>
                  <p className="mfg-copy">{mode.copy}</p>
                  <div className="mfg-mode-fit">{mode.fit}</div>
                  <ul className="mfg-mode-list">{mode.items.map(item => <li key={item}>{item}</li>)}</ul>
                  <div className="mfg-mode-flow">{mode.flow}</div>
                </article>
              ))}
            </div>
          </div>
          <div className="mfg-inline-links" style={{ marginTop: 26 }}>
            <EditorialLink href="https://www.stepes.com/ai-translation-platform/">AI Translation Platform</EditorialLink>
            <EditorialLink href="https://www.stepes.com/machine-translation-post-editing/">Machine Translation Post-Editing</EditorialLink>
            <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--soft">
        <div className="mfg-shell mfg-file-grid">
          <div className="mfg-file-art"><FileIllustration /></div>
          <div className="mfg-file-content">
            <span className="mfg-eyebrow">Technical File Engineering</span>
            <h2 className="mfg-h2">Translate Complex Manufacturing Files Without Breaking Their Structure</h2>
            <p className="mfg-lead">Manufacturing documentation may contain reusable topics, XML tags, drawings, diagrams, tables, software variables, layered graphics, warnings, callouts, and cross-references. Stepes protects these elements throughout multilingual production.</p>
            <div className="mfg-file-rows" style={{ marginTop: 34 }}>
              {fileRows.map(([icon, title, text]) => (
                <article className="mfg-file-row" key={title}>
                  <span className="mfg-icon-box"><LineIcon name={icon} /></span>
                  <div><h3 className="mfg-h3">{title}</h3><p className="mfg-copy">{text}</p></div>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 20 }}><EditorialLink href="https://www.stepes.com/file-formats/">Explore Supported File Formats</EditorialLink></div>
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--dark">
        <div className="mfg-shell mfg-smart-grid">
          <div>
            <span className="mfg-eyebrow">Smart Manufacturing</span>
            <h2 className="mfg-h2">Localize the Digital Systems That Power Modern Manufacturing</h2>
            <p className="mfg-lead">Modern manufacturing combines machinery, software, connected equipment, digital work instructions, analytics, and remote service. Stepes localizes the language-bearing content within these systems so global employees and customers can use them effectively.</p>
            <div className="mfg-smart-list">
              {smartItems.map(([icon, title, text]) => (
                <article className="mfg-smart-row" key={title}>
                  <span className="mfg-icon-box"><LineIcon name={icon} /></span>
                  <div><h3 className="mfg-h3">{title}</h3><p className="mfg-copy">{text}</p></div>
                </article>
              ))}
            </div>
            <div className="mfg-inline-links" style={{ marginTop: 24 }}>
              <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/developers/software-localization-api/">Software Localization API</EditorialLink>
              <EditorialLink href="https://www.stepes.com/integrations/">Enterprise Integrations</EditorialLink>
              <EditorialLink href="https://www.stepes.com/developers/translation-api/">Translation API</EditorialLink>
            </div>
          </div>
          <div className="mfg-hmi" aria-label="Example localized manufacturing interface">
            <div className="mfg-hmi-bar"><span>Línea de producción 04 · Español</span><span className="mfg-hmi-status">En operación</span></div>
            <div className="mfg-hmi-body" lang="es">
              <div className="mfg-hmi-nav">
                <div className="mfg-hmi-nav-item is-active">Resumen</div>
                <div className="mfg-hmi-nav-item">Alarmas</div>
                <div className="mfg-hmi-nav-item">Mantenimiento</div>
                <div className="mfg-hmi-nav-item">Instrucciones</div>
              </div>
              <div className="mfg-hmi-main">
                <h4>Estado de producción</h4>
                <p>Vista del operador localizada con terminología de fabricación aprobada.</p>
                <div className="mfg-hmi-metrics">
                  <div className="mfg-hmi-card"><div className="mfg-hmi-label">Velocidad de línea</div><div className="mfg-hmi-value">96%</div></div>
                  <div className="mfg-hmi-card"><div className="mfg-hmi-label">Temperatura</div><div className="mfg-hmi-value">72 °C</div></div>
                  <div className="mfg-hmi-card"><div className="mfg-hmi-label">Unidades completadas</div><div className="mfg-hmi-value">1,248</div></div>
                  <div className="mfg-hmi-card"><div className="mfg-hmi-label">Próximo servicio</div><div className="mfg-hmi-value">18 h</div></div>
                </div>
                <div className="mfg-hmi-alert"><strong>Revisión programada</strong><span>Verifique la presión del sistema antes del siguiente ciclo.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div><h2 className="mfg-h2">Support Safe Operations and Global Product Readiness</h2></div>
            <p className="mfg-copy">Manufacturers must communicate complex information clearly across languages while addressing applicable safety, labeling, quality, and market requirements. Stepes translates the documentation that supports safe equipment use, consistent quality processes, multilingual workforce communication, and international product distribution.</p>
          </div>
          <div className="mfg-three-columns">
            <article className="mfg-three-col"><span className="mfg-icon-box"><LineIcon name="safety" /></span><h3 className="mfg-h3" style={{marginTop: 20}}>Safety and Workforce Communication</h3><p className="mfg-copy">Translate operating instructions, equipment warnings, hazard communication, lockout procedures, Safety Data Sheets, emergency materials, employee safety training, and operator qualification content.</p></article>
            <article className="mfg-three-col"><span className="mfg-icon-box"><LineIcon name="quality" /></span><h3 className="mfg-h3" style={{marginTop: 20}}>Quality Documentation</h3><p className="mfg-copy">Support quality manuals, inspection procedures, test protocols and reports, audits, supplier quality materials, corrective and preventive action records, validation content, and certification support documentation.</p></article>
            <article className="mfg-three-col"><span className="mfg-icon-box"><LineIcon name="globe" /></span><h3 className="mfg-h3" style={{marginTop: 20}}>Product and Market Documentation</h3><p className="mfg-copy">Prepare instructions, manuals, labels, warnings, declarations, technical files, product registration support materials, distributor documentation, and recurring market updates for international use.</p></article>
          </div>
          <p className="mfg-copy" style={{ marginTop: 24, maxWidth: 980 }}>Stepes provides linguistic and technical translation support. Manufacturers remain responsible for determining the legal, regulatory, classification, and final approval requirements applicable to their products, workplaces, and markets.</p>
        </div>
      </section>

      <section className="mfg-section mfg-section--soft">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div>
              <h2 className="mfg-h2">Specialized Translation Across Manufacturing Sectors</h2>
            </div>
            <p className="mfg-copy">Terminology, documentation practices, software environments, and market requirements vary across manufacturing sectors. Stepes aligns specialized linguists, terminology, quality controls, and production workflows with each client’s products and global operations.</p>
          </div>
          <div className="mfg-sector-grid">
            {sectors.map((sector) => (
              <article className="mfg-sector" key={sector.title}>
                <h3 className="mfg-h3">{sector.title}</h3>
                <p className="mfg-copy">{sector.text}</p>
                {sector.links?.length > 0 && (
                  <div className="mfg-sector-links">
                    {sector.links.map(([label, href]) => <SectorLink key={label} href={href}>{label}</SectorLink>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell mfg-enterprise-grid">
          <div className="mfg-enterprise-intro">
            <span className="mfg-eyebrow">Enterprise Language Operations</span>
            <h2 className="mfg-h2">Scale Translation Across Products, Plants, Teams, and Markets</h2>
            <p className="mfg-lead">Global manufacturing programs may involve many products, facilities, departments, suppliers, content systems, and languages. Stepes provides the technology and program controls needed to manage these activities through one coordinated environment.</p>
            <div style={{ marginTop: 20 }}><EditorialLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</EditorialLink></div>
          </div>
          <div className="mfg-enterprise-rows">
            {enterpriseRows.map(([icon, title, text, linkLabel, href]) => (
              <article className="mfg-enterprise-row" key={title}>
                <span className="mfg-icon-box"><LineIcon name={icon} /></span>
                <div><h3 className="mfg-h3">{title}</h3><p className="mfg-copy">{text}</p></div>
                <EditorialLink href={href}>{linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--dark">
        <div className="mfg-shell">
          <div className="mfg-governance">
            <div className="mfg-governance-top">
              <span className="mfg-eyebrow">Quality, Security, and Governance</span>
              <h2 className="mfg-h2">Enterprise Controls for Business-Critical Manufacturing Content</h2>
              <p className="mfg-lead">Technical manufacturing information may contain confidential product knowledge, unreleased designs, operational procedures, supplier information, software content, and safety-sensitive instructions. Stepes combines defined quality processes, secure technology, and customer-specific program governance.</p>
            </div>
            <div className="mfg-governance-grid">
              <article className="mfg-governance-item"><span className="mfg-icon-box"><LineIcon name="quality" /></span><h3 className="mfg-h3" style={{marginTop:18}}>Certified Quality Processes</h3><p className="mfg-copy">ISO 17100 translation processes, ISO 9001 quality management, qualified resources, defined review workflows, quality checks, and continuous improvement.</p><EditorialLink href="https://www.stepes.com/translation-quality-system/">Translation Quality System</EditorialLink></article>
              <article className="mfg-governance-item"><span className="mfg-icon-box"><LineIcon name="lock" /></span><h3 className="mfg-h3" style={{marginTop:18}}>Information Security</h3><p className="mfg-copy">Secure file transfer, controlled access, role-based permissions, confidentiality requirements, version management, and program auditability.</p><EditorialLink href="https://www.stepes.com/enterprise-security/">Enterprise Security</EditorialLink></article>
              <article className="mfg-governance-item"><span className="mfg-icon-box"><LineIcon name="approvals" /></span><h3 className="mfg-h3" style={{marginTop:18}}>Customer Governance</h3><p className="mfg-copy">Project instructions, approved terminology, quality criteria, reviewer responsibilities, escalation procedures, approval stages, and feedback processes.</p><EditorialLink href="https://www.stepes.com/translation-approval-workflows/">User Roles and Approvals</EditorialLink></article>
              <article className="mfg-governance-item"><span className="mfg-icon-box"><LineIcon name="globe" /></span><h3 className="mfg-h3" style={{marginTop:18}}>Global Language Coverage</h3><p className="mfg-copy">More than 100 languages for manufacturing markets, production locations, supplier regions, service networks, and multilingual workforces.</p><EditorialLink href="https://www.stepes.com/translation-languages/">Translation Languages</EditorialLink></article>
            </div>
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell">
          <div className="mfg-case">
            <div>
              <span className="mfg-eyebrow">Representative Manufacturing Program</span>
              <h2 className="mfg-h2">Global Technical Documentation Across Product Families</h2>
              <p className="mfg-lead">A representative global industrial equipment program shows how product manuals, service documentation, engineering updates, software interfaces, and technician training can be managed through one consistent multilingual workflow.</p>
            </div>
            <div className="mfg-case-points">
              <div className="mfg-case-point"><strong>Centralized language operations</strong><span>One coordinated process brought terminology, translation memory, technical review, file engineering, and customer approval together.</span></div>
              <div className="mfg-case-point"><strong>Content-appropriate quality</strong><span>Recurring approved content was reused, while new and changed technical information received the review level required for its purpose.</span></div>
              <div className="mfg-case-point"><strong>Reusable language assets</strong><span>Consolidated feedback was incorporated into terminology and translation memory to improve consistency across future releases.</span></div>
              <div className="mfg-case-point"><strong>One program across teams</strong><span>Engineering, documentation, localization, and product teams gained a shared process from source update through multilingual delivery.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mfg-section mfg-section--soft">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div><h2 className="mfg-h2">Build a Connected Manufacturing Localization Program</h2></div>
            <p className="mfg-copy">Manufacturing translation works best when documents, software, training, terminology, quality, and enterprise workflows are managed as parts of one multilingual content strategy.</p>
          </div>
          <div className="mfg-related-grid">
            {related.map(([title, text, href]) => (
              <a className="mfg-related-item" href={href} key={title}>
                <h3 className="mfg-h3">{title}</h3>
                <p className="mfg-copy">{text}</p>
                <span className="mfg-related-action">Explore {title} <ArrowIcon size={16} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mfg-section">
        <div className="mfg-shell">
          <div className="mfg-header-row">
            <div><h2 className="mfg-h2">Manufacturing Translation Services FAQs</h2></div>
            <p className="mfg-copy">Answers to common questions about technical content, terminology, AI workflows, engineering files, software localization, safety documentation, pricing, and delivery.</p>
          </div>
          <div className="mfg-faq">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div className="mfg-faq-item" key={question}>
                  <button className="mfg-faq-button" type="button" aria-expanded={isOpen} aria-controls={`mfg-faq-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span className="mfg-faq-question">{question}</span>
                    <span className="mfg-faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="mfg-faq-answer" id={`mfg-faq-${index}`} hidden={!isOpen}>{answer}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mfg-final">
        <div className="mfg-shell">
          <div className="mfg-final-panel">
            <div>
              <h2 className="mfg-h2">Make Your Manufacturing Content Ready for Every Market</h2>
              <p className="mfg-lead">From engineering documentation and production procedures to product software, safety content, and workforce training, Stepes helps manufacturers deliver accurate multilingual information with the right combination of technology, technical expertise, and enterprise control.</p>
              <div className="mfg-buttons">
                <ButtonLink href="https://app.stepes.com/quote/" primary>Get a Quote</ButtonLink>
                <ButtonLink href="https://www.stepes.com/contact-us/">Talk to an Expert</ButtonLink>
              </div>
            </div>
            <div className="mfg-final-art"><CtaIllustration /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
