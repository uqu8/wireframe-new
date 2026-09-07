import React, { useState } from "react";

const URLS = {
  contactSales: "https://www.stepes.com/contact-sales/",
  instantQuote: "https://www.stepes.com/instant-translation-quote/",
  retailEcommerce: "https://www.stepes.com/retail-ecommerce-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  catalog: "https://www.stepes.com/catalog-translation-services/",
  amazon: "https://www.stepes.com/amazon-listing-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  seoGuide: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  aiTranslation: "https://www.stepes.com/ai-translation-services/",
  aiHuman: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  translationApi: "https://www.stepes.com/developers/translation-api/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  languages: "https://www.stepes.com/translation-languages/",
};

const styles = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #A71954;
    --stepes-burgundy: #7A1542;
    --stepes-blush: #FDF2F7;
    --stepes-pink-light: #F2A7C6;
    --ink: #16181D;
    --ink-soft: #41454E;
    --muted: #6D727C;
    --line: #E5E7EB;
    --line-strong: #D7DAE0;
    --surface: #F7F8FA;
    --surface-2: #F2F4F7;
    --dark: #17191F;
    --dark-2: #22252D;
    --white: #FFFFFF;
    --radius-lg: 30px;
    --radius-md: 22px;
    --shadow: 0 18px 48px rgba(24, 27, 33, 0.08);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .ecom56 {
    color: var(--ink);
    background: var(--white);
    font-family: Inter, "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }

  .ecom56 a { color: inherit; }
  .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
  .section { padding: 96px 0; }
  .section.dense { padding: 80px 0; }
  .surface { background: var(--surface); }
  .blush { background: var(--stepes-blush); }
  .dark { background: var(--dark); color: var(--white); }

  .eyebrow {
    margin: 0 0 14px;
    color: var(--stepes-magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  .dark .eyebrow { color: var(--stepes-pink-light); }

  h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: inherit; }
  h1 { font-size: 48px; line-height: 1.08; max-width: 700px; }
  h2 { font-size: 36px; line-height: 1.14; }
  h3 { font-size: 24px; line-height: 1.22; }
  p { margin: 0; }
  .lead { font-size: 18px; line-height: 1.68; color: var(--ink-soft); }
  .dark .lead { color: #D6D9DF; }
  .intro { max-width: 790px; margin-top: 20px; }
  .body-copy { color: var(--ink-soft); }
  .dark .body-copy { color: #D6D9DF; }

  .heading-group { max-width: 820px; }
  .heading-group.center { margin-left: auto; margin-right: auto; text-align: center; }
  .heading-group.center .intro { margin-left: auto; margin-right: auto; }

  .btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .btn {
    min-height: 48px;
    padding: 12px 22px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
  .btn-primary,
  .btn-primary:link,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible {
    background: var(--stepes-magenta);
    color: #fff !important;
    border: 1px solid var(--stepes-magenta);
    box-shadow: 0 8px 24px rgba(193,29,99,.20);
  }
  .btn-primary * { color: #fff !important; stroke: #fff !important; fill: none; }
  .btn-primary:hover { background: var(--stepes-magenta-dark); border-color: var(--stepes-magenta-dark); }
  .btn-secondary { background: #fff; color: var(--ink); border: 1px solid var(--line-strong); }
  .btn-secondary:hover { border-color: #B9BDC5; box-shadow: 0 8px 22px rgba(24,27,33,.06); }
  .dark .btn-secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,.28); }
  .dark .btn-secondary:hover { border-color: rgba(255,255,255,.52); }

  .text-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    gap: 8px;
    color: var(--stepes-magenta) !important;
    text-decoration: none;
    font-weight: 600;
    margin-top: 18px;
  }
  .text-link:hover .arrow { transform: translateX(3px); }
  .text-link:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 3px; border-radius: 5px; }
  .arrow { display: inline-block; transition: transform .18s ease; }
  .dark .text-link { color: var(--stepes-pink-light) !important; }

  .hero { padding: 104px 0 88px; background: linear-gradient(180deg, #FFF 0%, #FBFBFC 100%); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(430px, .98fr); gap: 72px; align-items: center; }
  .hero .lead { max-width: 720px; margin-top: 24px; }
  .hero-kicker { margin-top: 20px; font-size: 16px; color: var(--muted); }
  .hero-art {
    min-height: 510px;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: #fff;
    box-shadow: var(--shadow);
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .hero-art svg { width: 100%; height: auto; display: block; }

  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { display: grid; grid-template-columns: repeat(6, 1fr); }
  .proof-item { padding: 24px 18px; text-align: center; font-size: 16px; font-weight: 600; line-height: 1.35; }
  .proof-item + .proof-item { border-left: 1px solid var(--line); }

  .split { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 72px; align-items: start; }
  .split.reverse { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); }
  .split > *, .product-ops-grid > *, .qa-shell > *, .adapt-grid > *, .language-band > *, .related-row > * { min-width: 0; }

  .lifecycle-panel {
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: #fff;
    overflow: hidden;
  }
  .lifecycle-row {
    display: grid;
    grid-template-columns: 54px 1fr auto;
    gap: 16px;
    align-items: center;
    min-height: 78px;
    padding: 14px 20px;
  }
  .lifecycle-row + .lifecycle-row { border-top: 1px solid var(--line); }
  .icon-box {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: var(--stepes-blush);
    border: 1px solid #F1D6E2;
    color: var(--stepes-magenta);
    flex: 0 0 auto;
  }
  .icon-box svg { width: 22px; height: 22px; }
  .icon-box.icon-store, .icon-box.icon-home, .icon-box.icon-luxury, .icon-box.icon-support { color: var(--stepes-burgundy); background:#FAF1F5; border-color:#EED9E2; }
  .icon-box.icon-data, .icon-box.icon-memory, .icon-box.icon-electronics, .icon-box.icon-api { color: var(--stepes-magenta-dark); background:#FCF3F7; border-color:#F0D6E1; }
  .icon-box.icon-search, .icon-box.icon-marketplace, .icon-box.icon-market, .icon-box.icon-scale { color: #9F1D55; background:#FDF4F8; border-color:#F0D8E2; }
  .icon-box.icon-cart, .icon-box.icon-delivery, .icon-box.icon-cycle, .icon-box.icon-subscription { color: #A71954; background:#FDF2F7; border-color:#F0D3DF; }
  .icon-box.icon-qa, .icon-box.icon-quality, .icon-box.icon-lock, .icon-box.icon-terms { color: var(--stepes-burgundy); background:#FAF1F5; border-color:#EED7E1; }
  .icon-box.icon-language, .icon-box.icon-ai, .icon-box.icon-beauty, .icon-box.icon-food, .icon-box.icon-apparel, .icon-box.icon-promo { color: var(--stepes-magenta); background:#FDF2F7; border-color:#F1D6E2; }
  .row-title { font-weight: 600; line-height: 1.3; }
  .row-meta { color: var(--muted); font-size: 16px; line-height: 1.45; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--stepes-magenta); }

  .benefit-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 34px; border-top: 1px solid var(--line); }
  .benefit-item { padding: 24px 24px 24px 0; border-bottom: 1px solid var(--line); }
  .benefit-item:nth-child(odd) { padding-right: 32px; }
  .benefit-item:nth-child(even) { padding-left: 32px; border-left: 1px solid var(--line); }
  .benefit-item h3 { font-size: 20px; margin-bottom: 8px; }

  .experience-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 48px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .experience-item { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; min-height: 260px; }
  .experience-item .icon-box { margin-bottom: 22px; }
  .experience-item h3 { margin-bottom: 12px; font-size: 22px; }

  .product-ops { background: var(--dark); color: #fff; }
  .product-ops-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(500px,1.1fr); gap: 64px; align-items: center; }
  .product-record {
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255,255,255,.12);
    background: var(--dark-2);
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,.22);
  }
  .record-top { padding: 20px 22px; border-bottom: 1px solid rgba(255,255,255,.10); display:flex; justify-content:space-between; gap:16px; align-items:center; }
  .record-title { font-size: 17px; font-weight: 600; }
  .record-status { color: var(--stepes-pink-light); font-size: 14px; }
  .record-body { display: grid; grid-template-columns: 1.05fr .95fr; }
  .record-fields, .record-flow { padding: 24px; }
  .record-flow { border-left: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.02); }
  .field { display: grid; grid-template-columns: 120px 1fr; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,.07); }
  .field:last-child { border-bottom: 0; }
  .field-key { color: #969DAA; font-size: 14px; }
  .field-value { color: #F5F6F8; font-size: 16px; line-height: 1.5; }
  .flow-step { position: relative; padding: 0 0 20px 28px; }
  .flow-step:last-child { padding-bottom: 0; }
  .flow-step:before { content:""; position:absolute; width:8px; height:8px; left:0; top:7px; border-radius:50%; background:var(--stepes-pink-light); }
  .flow-step:not(:last-child):after { content:""; position:absolute; left:3px; top:19px; bottom:2px; width:1px; background:rgba(255,255,255,.18); }
  .flow-step strong { display:block; font-size:16px; margin-bottom:2px; }
  .flow-step span { display:block; color:#AEB4BE; font-size:16px; line-height:1.45; }

  .mini-list { margin: 28px 0 0; padding: 0; list-style: none; }
  .mini-list li { position: relative; padding: 10px 0 10px 22px; color: inherit; }
  .mini-list li:before { content:""; position:absolute; left:0; top:1.1em; width:8px; height:2px; background: var(--stepes-magenta); }
  .dark .mini-list li:before { background: var(--stepes-pink-light); }

  .data-demo { border: 1px solid var(--line); border-radius: var(--radius-lg); background:#fff; box-shadow: var(--shadow); overflow:hidden; }
  .data-demo-head { padding: 18px 22px; background: #F8F9FB; border-bottom: 1px solid var(--line); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:18px; }
  .data-demo-head strong { font-size:16px; }
  .data-demo-body { padding: 8px 22px 18px; }
  .data-line { display:grid; grid-template-columns: 1fr auto; gap:16px; align-items:center; padding:16px 0; border-bottom:1px solid var(--line); }
  .data-line:last-child { border-bottom:0; }
  .code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; color:#333943; overflow-wrap:anywhere; font-size:16px; }
  .tag { font-size: 14px; font-weight: 600; padding: 5px 10px; border-radius: 999px; background:#F1F2F4; color:#59606C; white-space:nowrap; }
  .tag.translate { color:var(--stepes-magenta); background:var(--stepes-blush); }
  .tag.adapt { color:var(--stepes-burgundy); background:#FAF1F5; }
  .tag.protect { color:#4E5560; background:#F1F2F4; }

  .workflow-table { margin-top: 42px; border-top: 1px solid var(--line); }
  .workflow-row { display:grid; grid-template-columns: minmax(210px,.95fr) minmax(0,1.25fr) minmax(180px,.8fr); gap:28px; padding:24px 0; border-bottom:1px solid var(--line); align-items:start; }
  .workflow-row strong { font-size:17px; line-height:1.4; }
  .workflow-label { color:var(--stepes-magenta); font-size:16px; font-weight:600; line-height:1.45; }

  .asset-band { border: 1px solid var(--line); border-radius:var(--radius-lg); overflow:hidden; display:grid; grid-template-columns: .9fr 1.1fr; background:#fff; }
  .asset-copy { padding:46px; }
  .asset-grid { display:grid; grid-template-columns:repeat(2,1fr); border-left:1px solid var(--line); }
  .asset-item { padding:28px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }
  .asset-item:nth-child(2n) { border-right:0; }
  .asset-item:nth-last-child(-n+2) { border-bottom:0; }
  .asset-item strong { display:block; margin-bottom:5px; font-size:17px; }

  .search-demo { border:1px solid var(--line); border-radius:var(--radius-lg); background:#fff; box-shadow:var(--shadow); overflow:hidden; }
  .search-bar { margin:22px; border:1px solid var(--line-strong); border-radius:999px; padding:13px 18px; display:flex; align-items:center; gap:12px; font-size:16px; }
  .search-results { border-top:1px solid var(--line); }
  .search-result { padding:20px 22px; }
  .search-result + .search-result { border-top:1px solid var(--line); }
  .search-locale { font-size:14px; color:var(--muted); margin-bottom:4px; }
  .search-title { font-size:18px; font-weight:600; line-height:1.35; }
  .search-copy { margin-top:5px; color:var(--ink-soft); font-size:16px; line-height:1.5; }

  .market-row-grid { display:grid; grid-template-columns: repeat(4, 1fr); margin-top:42px; border-top:1px solid var(--line); }
  .market-item { padding:26px 24px 26px 0; border-bottom:1px solid var(--line); }
  .market-item:not(:nth-child(4n+1)) { padding-left:24px; border-left:1px solid var(--line); }
  .market-item h3 { font-size:20px; margin-bottom:8px; }

  .stack-diagram {
    margin-top:46px;
    display:grid;
    grid-template-columns: minmax(0,1fr) 270px minmax(0,1fr);
    gap:30px;
    align-items:center;
  }
  .stack-column { min-width:0; }
  .stack-label { margin:0 0 12px; color:#AEB4BE; font-size:14px; font-weight:600; line-height:1.3; letter-spacing:.08em; text-transform:uppercase; }
  .stack-core-column .stack-label { text-align:center; color:var(--stepes-pink-light); }
  .system-list, .output-list { display:grid; gap:10px; }
  .system-node, .output-node { display:flex; align-items:center; gap:12px; min-height:58px; padding:13px 16px; border-radius:14px; font-size:16px; overflow-wrap:anywhere; }
  .system-node { border:1px solid rgba(255,255,255,.13); background:rgba(255,255,255,.035); color:#E8EAF0; }
  .stack-node-icon { width:34px; height:34px; border-radius:11px; display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; background:rgba(193,29,99,.12); border:1px solid rgba(242,167,198,.20); color:var(--stepes-pink-light); }
  .stack-node-icon svg { width:19px; height:19px; }
  .stepes-core { border:1px solid rgba(242,167,198,.42); background:linear-gradient(180deg, rgba(193,29,99,.14), rgba(122,21,66,.16)); border-radius:var(--radius-md); padding:28px 20px; text-align:center; box-shadow:0 18px 44px rgba(0,0,0,.16); }
  .stepes-core strong { display:block; font-size:22px; margin-bottom:12px; }
  .core-chips { display:flex; flex-wrap:wrap; justify-content:center; gap:7px; }
  .core-chip { font-size:16px; padding:5px 8px; border-radius:999px; background:rgba(255,255,255,.075); border:1px solid rgba(255,255,255,.07); color:#EEF0F4; }
  .output-node { border:1px solid rgba(242,167,198,.22); background:rgba(193,29,99,.065); color:#F2F3F6; }
  .output-node .stack-node-icon { background:rgba(242,167,198,.08); border-color:rgba(242,167,198,.24); color:#F2A7C6; }

  .timeline { margin-top:46px; display:grid; grid-template-columns:repeat(6,1fr); border-top:1px solid var(--line); }
  .timeline-step { padding:26px 22px 0 0; position:relative; }
  .timeline-step:not(:first-child) { padding-left:22px; border-left:1px solid var(--line); }
  .timeline-num { color:var(--stepes-magenta); font-size:14px; font-weight:600; margin-bottom:10px; }
  .timeline-step h3 { font-size:19px; margin-bottom:8px; }

  .qa-shell { display:grid; grid-template-columns: .82fr 1.18fr; gap:64px; align-items:start; }
  .qa-issues { border:1px solid var(--line); border-radius:var(--radius-lg); overflow:hidden; background:#fff; }
  .qa-issue { display:grid; grid-template-columns: 46px 1fr; gap:14px; padding:20px; }
  .qa-issue + .qa-issue { border-top:1px solid var(--line); }
  .qa-issue strong { display:block; margin-bottom:2px; font-size:16px; }
  .qa-pipeline { margin-top:34px; display:flex; flex-wrap:wrap; align-items:center; gap:8px; }
  .qa-pill { padding:9px 12px; border:1px solid var(--line-strong); border-radius:999px; background:#fff; font-size:16px; font-weight:600; }
  .qa-arrow { color:#A5AAB3; }

  .adapt-grid { display:grid; grid-template-columns: 1fr 1fr; gap:56px; align-items:start; }
  .adapt-list { display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--line); }
  .adapt-item { padding:18px 18px 18px 0; border-bottom:1px solid var(--line); font-weight:600; }
  .adapt-item:nth-child(even) { padding-left:22px; border-left:1px solid var(--line); }

  .industry-grid { display:grid; grid-template-columns:repeat(4,1fr); margin-top:42px; border-top:1px solid var(--line); border-left:1px solid var(--line); }
  .industry-item { padding:26px; min-height:220px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); }
  .industry-item h3 { font-size:20px; margin:18px 0 8px; }

  .language-band { border-radius:var(--radius-lg); border:1px solid var(--line); background:#fff; padding:42px; display:grid; grid-template-columns:.8fr 1.2fr; gap:48px; align-items:center; }
  .languages { display:flex; flex-wrap:wrap; gap:10px; }
  .language-chip { border:1px solid var(--line); border-radius:999px; padding:9px 13px; background:#FAFAFB; font-size:16px; }

  .why-grid { display:grid; grid-template-columns:repeat(4,1fr); margin-top:42px; border-top:1px solid var(--line); border-left:1px solid var(--line); }
  .why-item { padding:28px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); min-height:210px; }
  .why-item h3 { font-size:20px; margin:18px 0 8px; }

  .related { border-top:1px solid var(--line); margin-top:42px; }
  .related-row { display:grid; grid-template-columns: minmax(220px,.7fr) minmax(0,1.5fr) auto; gap:30px; align-items:center; padding:24px 0; border-bottom:1px solid var(--line); }
  .related-row h3 { font-size:20px; }
  .related-row .text-link { margin-top:0; white-space:nowrap; }

  .faq-shell { max-width:960px; margin:42px auto 0; border-top:1px solid var(--line); }
  .faq-item { border-bottom:1px solid var(--line); }
  .faq-button {
    width:100%;
    border:0;
    background:transparent;
    padding:24px 0;
    display:grid;
    grid-template-columns:1fr 44px;
    gap:18px;
    align-items:center;
    text-align:left;
    cursor:pointer;
    color:var(--ink);
  }
  .faq-button span:first-child { font-size:19px; font-weight:600; line-height:1.4; }
  .faq-button:focus-visible { outline:3px solid rgba(193,29,99,.18); outline-offset:2px; border-radius:6px; }
  .faq-plus { width:36px; height:36px; border:1px solid var(--line-strong); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; color:var(--ink-soft); transition:transform .2s ease; }
  .faq-button[aria-expanded="true"] .faq-plus { transform:rotate(45deg); }
  .faq-answer { max-width:840px; padding:0 56px 24px 0; color:var(--ink-soft); font-size:16px; line-height:1.72; }

  .final-cta { background:var(--stepes-burgundy); color:#fff; padding:88px 0; }
  .final-grid { display:grid; grid-template-columns:1fr auto; gap:64px; align-items:end; }
  .final-cta .lead { max-width:760px; color:#F2E7EC; margin-top:20px; }
  .final-cta .eyebrow { color:var(--stepes-pink-light); }
  .final-cta .btn-primary,
  .final-cta .btn-primary:link,
  .final-cta .btn-primary:visited,
  .final-cta .btn-primary:hover,
  .final-cta .btn-primary:active,
  .final-cta .btn-primary:focus,
  .final-cta .btn-primary:focus-visible { background:var(--stepes-magenta); color:#fff !important; border-color:#D34D88; box-shadow:0 10px 28px rgba(37,5,20,.22); }
  .final-cta .btn-primary:hover { background:var(--stepes-magenta-dark); border-color:#D76A99; }
  .final-cta .btn-primary * { color:#fff !important; stroke:#fff !important; fill:none; }
  .final-cta .btn-secondary { border-color:rgba(255,255,255,.42); color:#fff; background:transparent; }

  @media (max-width: 1120px) {
    .shell { width:min(1280px, calc(100% - 80px)); }
    .hero-grid { grid-template-columns: 1fr 440px; gap:48px; }
    .proof-grid { grid-template-columns:repeat(3,1fr); }
    .proof-item:nth-child(4) { border-left:0; }
    .proof-item:nth-child(n+4) { border-top:1px solid var(--line); }
    .experience-grid { grid-template-columns:repeat(2,1fr); }
    .product-ops-grid { grid-template-columns:1fr 1fr; gap:44px; }
    .market-row-grid { grid-template-columns:repeat(2,1fr); }
    .market-item:not(:nth-child(4n+1)) { border-left:0; }
    .market-item:nth-child(even) { padding-left:24px; border-left:1px solid var(--line); }
    .industry-grid, .why-grid { grid-template-columns:repeat(2,1fr); }
    .timeline { grid-template-columns:repeat(3,1fr); row-gap:28px; }
    .timeline-step:nth-child(4) { border-left:0; padding-left:0; }
  }

  @media (max-width: 900px) {
    .shell { width:calc(100% - 48px); }
    h1 { font-size:42px; }
    h2 { font-size:32px; }
    h3 { font-size:22px; }
    .section { padding:80px 0; }
    .hero { padding:88px 0 72px; }
    .hero-grid, .split, .split.reverse, .product-ops-grid, .qa-shell, .adapt-grid, .language-band, .final-grid { grid-template-columns:1fr; gap:42px; }
    .split.reverse > div:last-child { order:-1; }
    .hero-copy { text-align:center; }
    .hero-copy h1, .hero-copy .lead { margin-left:auto; margin-right:auto; }
    .hero-copy .eyebrow { text-align:center; }
    .hero .btn-row { justify-content:center; }
    .hero-art { min-height:0; max-width:620px; width:100%; margin:0 auto; }
    .heading-group.center-tablet { margin-left:auto; margin-right:auto; text-align:center; }
    .heading-group.center-tablet .intro { margin-left:auto; margin-right:auto; }
    .asset-band { grid-template-columns:1fr; }
    .asset-grid { border-left:0; border-top:1px solid var(--line); }
    .stack-diagram { grid-template-columns:1fr; }
    .stepes-core { max-width:420px; margin:0 auto; width:100%; }
    .system-list, .output-list { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .workflow-row { grid-template-columns:minmax(190px,.8fr) minmax(0,1.2fr); gap:10px 24px; }
    .workflow-label { grid-column:2; }
    .timeline { grid-template-columns:repeat(2,1fr); row-gap:28px; }
    .timeline-step:nth-child(odd) { border-left:0; padding-left:0; }
    .timeline-step:nth-child(even) { border-left:1px solid var(--line); padding-left:22px; }
    .related-row { grid-template-columns:1fr auto; }
    .related-row .body-copy { grid-column:1 / -1; grid-row:2; }
    .final-grid .btn-row { margin-top:0; }
  }

  @media (max-width: 767px) {
    .shell { width:calc(100% - 40px); }
    .section, .section.dense { padding:68px 0; }
    .hero { padding:72px 0 64px; }
    h1 { font-size:38px; line-height:1.1; }
    h2 { font-size:30px; }
    h3 { font-size:20px; }
    .lead { font-size:18px; }

    .heading-group:not(.left-mobile), .heading-group.center-tablet { margin-left:auto; margin-right:auto; text-align:center; }
    .heading-group:not(.left-mobile) .intro, .heading-group.center-tablet .intro { margin-left:auto; margin-right:auto; }
    .left-mobile { text-align:left; }

    .btn-row { width:100%; }
    .hero .btn-row { flex-direction:column; }
    .hero .btn { width:100%; }
    .hero-art { padding:14px; border-radius:24px; }

    .proof-grid { grid-template-columns:repeat(2,1fr); }
    .proof-item:nth-child(3), .proof-item:nth-child(5) { border-left:0; }
    .proof-item:nth-child(n+3) { border-top:1px solid var(--line); }

    .benefit-grid { grid-template-columns:1fr; }
    .benefit-item, .benefit-item:nth-child(odd), .benefit-item:nth-child(even) { padding:22px 0; border-left:0; }
    .experience-grid { grid-template-columns:1fr; }
    .experience-item { min-height:0; padding:26px 22px; }

    .record-body { grid-template-columns:1fr; }
    .record-flow { border-left:0; border-top:1px solid rgba(255,255,255,.10); }
    .field { grid-template-columns:100px 1fr; }

    .workflow-row { grid-template-columns:1fr; gap:8px; }
    .workflow-label { grid-column:auto; }
    .asset-copy { padding:30px 24px; }
    .asset-grid { grid-template-columns:1fr; }
    .asset-item, .asset-item:nth-child(2n), .asset-item:nth-last-child(-n+2) { border-right:0; border-bottom:1px solid var(--line); padding:24px; }
    .asset-item:last-child { border-bottom:0; }

    .market-row-grid { grid-template-columns:1fr; }
    .market-item, .market-item:nth-child(even), .market-item:not(:nth-child(4n+1)) { padding:22px 0; border-left:0; }
    .system-list, .output-list { grid-template-columns:1fr; }

    .timeline { grid-template-columns:1fr; border-top:0; margin-top:34px; }
    .timeline-step, .timeline-step:not(:first-child), .timeline-step:nth-child(4), .timeline-step:nth-child(odd), .timeline-step:nth-child(even) { padding:0 0 26px 44px; border-left:1px solid var(--line); border-top:0; }
    .timeline-step:last-child { padding-bottom:0; }
    .timeline-num { position:absolute; left:-15px; top:0; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#fff; border:1px solid var(--line-strong); }

    .adapt-list { grid-template-columns:1fr; }
    .adapt-item, .adapt-item:nth-child(even) { padding:16px 0; border-left:0; }
    .industry-grid, .why-grid { grid-template-columns:1fr; }
    .industry-item, .why-item { min-height:0; padding:24px; }

    .language-band { padding:28px 22px; }
    .languages { justify-content:flex-start; }

    .related-row { grid-template-columns:1fr; gap:8px; align-items:start; }
    .related-row .body-copy { grid-column:auto; grid-row:auto; }
    .related-row .text-link { margin-top:6px; white-space:normal; }

    .qa-pipeline { display:grid; grid-template-columns:1fr; gap:8px; }
    .qa-pill { width:100%; }
    .qa-arrow { display:none; }

    .faq-shell { margin-top:30px; }
    .faq-button { grid-template-columns:1fr 40px; padding:20px 0; }
    .faq-button span:first-child { font-size:18px; }
    .faq-answer { padding:0 0 22px; }

    .final-cta { padding:68px 0 76px; }
    .final-grid { text-align:center; }
    .final-grid .lead { margin-left:auto; margin-right:auto; }
    .final-grid .btn-row { justify-content:center; flex-direction:column; }
    .final-grid .btn { width:100%; }
  }


  @media (max-width: 480px) {
    .hero-art { display:none; }
    .record-top { flex-direction:column; align-items:flex-start; }
    .data-demo-head { flex-direction:column; align-items:flex-start; gap:6px; }
    .search-bar { align-items:flex-start; }
    .stack-diagram { gap:24px; margin-top:34px; }
  }

  @media (max-width: 360px) {
    .hero-art { padding:10px; }
    .proof-grid { grid-template-columns:1fr; }
    .proof-item + .proof-item, .proof-item:nth-child(3), .proof-item:nth-child(5) { border-left:0; border-top:1px solid var(--line); }
    .lifecycle-row { grid-template-columns:46px 1fr; }
    .lifecycle-row .status-dot { display:none; }
    .record-fields, .record-flow { padding:18px; }
    .field { grid-template-columns:1fr; gap:2px; }
    .data-line { grid-template-columns:1fr; gap:8px; }
    .tag { width:max-content; }
  }
`;

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>;
}

function Icon({ name }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    search: <><circle cx="10.5" cy="10.5" r="6.2" {...common}/><path d="m15 15 5 5" {...common}/></>,
    product: <><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" {...common}/><path d="m4 7.5 8 4.5 8-4.5M12 12v9" {...common}/></>,
    store: <><path d="M4 9h16l-1.2-5H5.2zM5 9v11h14V9M9 20v-6h6v6" {...common}/><path d="M4 9c0 1.7 1.2 3 2.8 3S10 10.7 10 9c0 1.7 1.2 3 2.8 3S16 10.7 16 9c0 1.7 1.2 3 2.8 3S20 10.7 20 9" {...common}/></>,
    cart: <><path d="M3.5 5h2l2.1 10h9.8l2-7H7" {...common}/><circle cx="9" cy="19" r="1" {...common}/><circle cx="17" cy="19" r="1" {...common}/></>,
    delivery: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" {...common}/><circle cx="7" cy="19" r="1.5" {...common}/><circle cx="18" cy="19" r="1.5" {...common}/></>,
    support: <><path d="M5 14v-3a7 7 0 0 1 14 0v3" {...common}/><path d="M5 13H3.5v5H7v-5zM19 13h1.5v5H17v-5zM17 19c-1.2 1.2-2.7 2-5 2" {...common}/></>,
    data: <><rect x="4" y="4" width="16" height="16" rx="2" {...common}/><path d="M8 8h8M8 12h3M8 16h6" {...common}/></>,
    memory: <><ellipse cx="12" cy="6" rx="7" ry="3" {...common}/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...common}/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" {...common}/></>,
    api: <><path d="M8 5H5v14h3M16 5h3v14h-3M10 16l4-8" {...common}/></>,
    qa: <><path d="m4 12 5 5L20 6" {...common}/></>,
    quality: <><path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6z" {...common}/><path d="m8.5 12 2.2 2.2 4.8-5" {...common}/></>,
    language: <><path d="M4 5h10M9 3v2M6 5c.5 4 3 7 7 9M12 5c-.5 3-2 5.5-5 8" {...common}/><path d="m14 19 3-7 3 7M15.2 16h3.6" {...common}/></>,
    market: <><path d="M4 20V8l8-5 8 5v12M8 20v-7h8v7" {...common}/><path d="M9 9h6" {...common}/></>,
    marketplace: <><path d="M4 8h16l-1.5-4h-13zM5 8v11h14V8" {...common}/><path d="M8 12h3v3H8zM14 12h3v3h-3z" {...common}/></>,
    cycle: <><path d="M20 7v5h-5M4 17v-5h5" {...common}/><path d="M18.5 11A7 7 0 0 0 6.6 6.2L4 9M5.5 13A7 7 0 0 0 17.4 17.8L20 15" {...common}/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...common}/><path d="M8 10V7a4 4 0 0 1 8 0v3" {...common}/></>,
    promo: <><path d="M4 5h9l7 7-8 8-8-8z" {...common}/><circle cx="9" cy="10" r="1.2" {...common}/></>,
    apparel: <><path d="M8 5 5 7l-2 4 3 2 2-2v9h8v-9l2 2 3-2-2-4-3-2c-.7 1.4-2 2-4 2s-3.3-.6-4-2Z" {...common}/></>,
    electronics: <><rect x="7" y="7" width="10" height="10" rx="2" {...common}/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4M10 10h4v4h-4z" {...common}/></>,
    beauty: <><path d="M12 3c3 4 5 6.6 5 10a5 5 0 0 1-10 0c0-3.4 2-6 5-10Z" {...common}/><path d="M9.5 14.5c.8 1 1.6 1.5 2.5 1.5" {...common}/></>,
    food: <><path d="M12 20c-4.5 0-7-3.5-7-7 0-3 2.2-5 5-5 1 0 1.6.3 2 .7.4-.4 1-.7 2-.7 2.8 0 5 2 5 5 0 3.5-2.5 7-7 7Z" {...common}/><path d="M12 8c0-2.6 1.3-4.3 4-5" {...common}/></>,
    home: <><path d="m3 11 9-7 9 7" {...common}/><path d="M5 10v10h14V10M10 20v-6h4v6" {...common}/></>,
    luxury: <><path d="m7 4-4 6 9 10 9-10-4-6z" {...common}/><path d="M3 10h18M7 4l5 6 5-6M12 10v10" {...common}/></>,
    subscription: <><path d="M7 7h10v10H7z" {...common}/><path d="M4 9a8 8 0 0 1 13-4l2 2M20 15a8 8 0 0 1-13 4l-2-2" {...common}/><path d="M19 3v4h-4M5 21v-4h4" {...common}/></>,
    scale: <><path d="M5 19 19 5M11 5h8v8M5 11v8h8" {...common}/></>,
    ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...common}/><circle cx="12" cy="12" r="4" {...common}/><path d="m10.5 12 1 1 2-2" {...common}/></>,
    terms: <><path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4z" {...common}/><path d="M9 8h6M9 12h6M9 16h4" {...common}/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2" {...common}/><path d="M3 9h18M9 9v11" {...common}/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" {...common}/><circle cx="9" cy="10" r="2" {...common}/><path d="m5 18 5-5 3 3 2-2 4 4" {...common}/></>,
    launch: <><path d="M13 5c3-2 5-2 6-2 0 1 0 3-2 6l-5 5-4-4z" {...common}/><path d="m8 10-4 1-1 3 5 1M12 14l1 5-3 2-1-5M14 8l2 2" {...common}/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.product}</svg>;
}

function TextLink({ href, children }) {
  return <a className="text-link" href={href}>{children}<span className="arrow">→</span></a>;
}

function HeroArt() {
  return (
    <svg viewBox="0 0 540 460" role="img" aria-label="Connected e-commerce content moving through a multilingual localization workflow">
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FDF2F7"/><stop offset="1" stopColor="#FFFFFF"/></linearGradient>
      </defs>
      <rect x="18" y="18" width="504" height="424" rx="28" fill="url(#fade)" stroke="#E4E6EA"/>
      <path d="M88 114 C166 72, 214 74, 270 128 S390 196, 456 145" fill="none" stroke="#C6CAD1" strokeWidth="2" strokeDasharray="6 7"/>
      <path d="M80 326 C170 365, 224 349, 275 302 S378 244, 466 286" fill="none" stroke="#C6CAD1" strokeWidth="2" strokeDasharray="6 7"/>
      <rect x="197" y="158" width="146" height="144" rx="24" fill="#fff" stroke="#C11D63" strokeWidth="2"/>
      <circle cx="270" cy="204" r="30" fill="#FDF2F7" stroke="#C11D63"/>
      <path d="M250 204h40M270 184c8 9 11 18 11 20s-3 11-11 20M270 184c-8 9-11 18-11 20s3 11 11 20" fill="none" stroke="#C11D63" strokeWidth="1.7" strokeLinecap="round"/>
      <text x="270" y="257" textAnchor="middle" fontSize="17" fontWeight="600" fill="#20242A">STEPES</text>
      <text x="270" y="278" textAnchor="middle" fontSize="14" fill="#6B717C">AI + Human Localization</text>

      <g transform="translate(58 82)">
        <rect width="122" height="72" rx="17" fill="#fff" stroke="#D9DCE2"/>
        <path d="M22 22h28v26H22zM28 18h16" fill="none" stroke="#59606C" strokeWidth="1.6"/>
        <text x="61" y="59" textAnchor="middle" fontSize="14" fill="#4B515B">Product Data</text>
      </g>
      <g transform="translate(360 76)">
        <rect width="124" height="78" rx="17" fill="#fff" stroke="#D9DCE2"/>
        <path d="M22 29h80l-6-15H28zM29 29v27h66V29" fill="none" stroke="#59606C" strokeWidth="1.6"/>
        <text x="62" y="68" textAnchor="middle" fontSize="14" fill="#4B515B">Storefront</text>
      </g>
      <g transform="translate(54 294)">
        <rect width="132" height="80" rx="17" fill="#fff" stroke="#D9DCE2"/>
        <circle cx="36" cy="34" r="13" fill="none" stroke="#59606C" strokeWidth="1.6"/>
        <path d="M46 44l10 10" stroke="#59606C" strokeWidth="1.6"/>
        <text x="66" y="68" textAnchor="middle" fontSize="14" fill="#4B515B">Search</text>
      </g>
      <g transform="translate(358 294)">
        <rect width="128" height="80" rx="17" fill="#fff" stroke="#D9DCE2"/>
        <path d="M24 24h12l7 28h48l6-20H41" fill="none" stroke="#59606C" strokeWidth="1.6"/>
        <circle cx="50" cy="58" r="3" fill="#59606C"/><circle cx="85" cy="58" r="3" fill="#59606C"/>
        <text x="64" y="71" textAnchor="middle" fontSize="14" fill="#4B515B">Checkout</text>
      </g>

      <g fill="#C11D63">
        <circle cx="181" cy="120" r="4"/><circle cx="356" cy="129" r="4"/><circle cx="184" cy="331" r="4"/><circle cx="357" cy="321" r="4"/>
      </g>
      <g fontSize="14" fontWeight="600" fill="#C11D63">
        <text x="125" y="205">EN</text><text x="105" y="229">DE</text><text x="113" y="253">JA</text>
        <text x="420" y="205">FR</text><text x="438" y="229">ES</text><text x="428" y="253">ZH</text>
      </g>
      <path d="M180 119 206 164M359 128 334 164M184 331 210 293M359 321 331 294" stroke="#C11D63" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

const experienceItems = [
  ["search", "Product Discovery", "Localize category pages, taxonomy, filters, search terminology, metadata, product attributes, marketplace keywords, and landing pages."],
  ["product", "Product Information", "Translate titles, descriptions, specifications, features, materials, ingredients, dimensions, variants, compatibility, size and fit, and comparison content."],
  ["store", "Digital Storefront", "Localize navigation, merchandising content, promotional banners, recommendations, account experiences, subscriptions, mobile commerce, and storefront UI."],
  ["cart", "Cart & Checkout", "Translate cart content, checkout steps, payment messaging, taxes, shipping, address fields, validation messages, promotional codes, and account creation."],
  ["delivery", "Post-Purchase Content", "Support order confirmations, shipment notifications, tracking, returns, refunds, warranties, loyalty communications, and product-care information."],
  ["support", "Customer Content & Support", "Translate FAQs, help centers, customer questions, reviews, chatbot content, service communications, troubleshooting, and product support."],
];

const workflowRows = [
  ["Large, lower-risk product feeds", "AI Translation + Automated QA", "Speed and broad language coverage"],
  ["High-volume product attributes", "AI + Terminology Controls + Sampling", "Consistency at scale"],
  ["Product descriptions", "AI Translation + Professional Human Review", "Customer-ready language"],
  ["Premium product pages", "Professional Translation + Independent Review", "Brand and product assurance"],
  ["Campaign content", "Marketing Translation / Transcreation", "Persuasive local-market impact"],
  ["Checkout and commerce UI", "Human-Reviewed Localization + In-Context QA", "Usability and customer confidence"],
  ["Safety and use information", "Qualified Human Translation + Verification", "Accuracy and risk control"],
  ["Reviews and UGC", "AI-Assisted Translation + Sampling / Escalation", "Rapid multilingual availability"],
];

const faqItems = [
  ["What are e-commerce translation services?", "E-commerce translation services localize the content customers use to discover, evaluate, purchase, receive, and get support for products online. This can include product titles and descriptions, attributes, specifications, category taxonomy, storefront content, search terminology, marketplace listings, cart and checkout interfaces, transactional messages, reviews, FAQs, and post-purchase communications. Enterprise programs may also include structured product data, translation memory, terminology management, workflow automation, APIs, quality assurance, and continuous translation of new or changed content."],
  ["How is e-commerce translation different from website translation?", "Website translation covers many types of websites, including corporate sites, marketing sites, portals, knowledge bases, and digital experiences. E-commerce translation focuses specifically on digital commerce and commonly involves larger volumes of structured product information, product feeds, categories, attributes, marketplace data, search terminology, transactional content, checkout interfaces, customer reviews, and frequent content changes. Many global commerce programs use both website localization and specialized e-commerce translation workflows."],
  ["What types of e-commerce content can Stepes translate?", "Stepes can support product names, descriptions, specifications, attributes, variants, category taxonomy, filters, storefront UI, promotional content, marketplace listings, product feeds, cart and checkout content, transactional emails, returns information, FAQs, reviews, customer support content, and other multilingual commerce materials. The workflow can be configured around your content systems, languages, quality requirements, update frequency, and business needs."],
  ["How do you translate large product catalogs?", "Large catalogs benefit from structured workflows that identify reusable translations, apply approved terminology, protect non-translatable product data, and route new or changed content efficiently. Stepes can combine translation memory, terminology management, AI translation, professional human review, automated QA, workflow automation, and APIs to support high-volume product localization. Content can also be segmented by type or business importance so different product fields receive the appropriate level of review."],
  ["Can Stepes support continuously changing e-commerce content?", "Yes. Stepes supports continuous localization workflows for recurring product, website, application, and commerce content. New or changed information can be identified and processed while existing approved translations are reused where appropriate. Workflows can incorporate AI translation, professional linguists, terminology, translation memory, QA, review, approvals, and connected delivery based on program requirements."],
  ["Does Stepes use AI for e-commerce translation?", "Stepes supports AI translation as part of configurable e-commerce localization workflows. AI can be appropriate for suitable high-volume or rapidly changing content, while professional human translators and reviewers can be added for customer-facing, strategic, technical, premium, or higher-risk material. Translation memory, terminology management, automated QA, and human validation can be combined to create the appropriate workflow for each content type."],
  ["How do you maintain consistent product terminology?", "Stepes uses terminology management and translation memory to preserve approved multilingual language. Terminology resources can define preferred product names, categories, technical terms, materials, features, brand language, and prohibited variants. Translation memory stores previously approved content in bilingual context so established translations can be reused or adapted when similar content appears again."],
  ["Can Stepes translate structured product data and product feeds?", "Yes. Stepes can process structured product information and recurring content through supported file, portal, API, or customized enterprise workflows. Localization workflows can distinguish between translatable content and protected information such as SKUs, model numbers, product codes, variables, tags, numerical values, and other structured elements. Requirements depend on the source format and system architecture."],
  ["Can Stepes translate marketplace listings?", "Yes. Stepes supports multilingual marketplace content including product titles, descriptions, features, attributes, category information, seller content, relevant search terminology, product Q&A, and other listing fields. Marketplace-specific requirements, character limits, terminology, and workflows can be incorporated into the localization process."],
  ["How do you test localized e-commerce content?", "Quality assurance can include linguistic review, terminology checks, protected-content validation, structured-data QA, visual review, functional testing, and in-context evaluation depending on project scope. For customer-facing digital commerce, in-context QA is especially valuable because a translation can be linguistically correct but still cause issues when displayed within navigation, filters, mobile layouts, checkout interfaces, marketplace templates, or other live experiences."],
  ["How much does e-commerce translation cost?", "E-commerce translation pricing depends on language combinations, content volume, repetition, source format, translation-memory leverage, content type, AI or human workflow, review requirements, integration needs, turnaround, and quality-assurance scope. High-volume product programs can often benefit from translation reuse, terminology management, content-based workflow routing, and automation. Stepes can review your content and recommend a localization model aligned with your quality, scale, and budget requirements."],
];

function EcommerceTranslationsWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="ecom56">
      <style>{styles}</style>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">E-commerce Localization</p>
            <h1>E-commerce Translation Services for Global Digital Commerce</h1>
            <p className="lead">Localize product catalogs, digital storefronts, marketplaces, checkout experiences, customer content, and continuously changing commerce operations across languages with scalable AI + human translation workflows.</p>
            <p className="hero-kicker">Keep product terminology, structured data, brand language, and customer experiences aligned as your commerce content changes.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href={URLS.contactSales}>Talk to an Expert <ArrowIcon /></a>
              <a className="btn btn-secondary" href={URLS.instantQuote}>Get an Instant Quote <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-art"><HeroArt /></div>
        </div>
      </section>

      <div className="proof-band" aria-label="E-commerce translation capabilities">
        <div className="shell proof-grid">
          {['100+ Languages','AI + Human Workflows','Continuous Localization','Translation API','Enterprise Quality','Global Commerce'].map((item) => <div className="proof-item" key={item}>{item}</div>)}
        </div>
      </div>

      <section className="section surface" id="always-on">
        <div className="shell split">
          <div>
            <div className="heading-group center-tablet">
              <p className="eyebrow">Always-On E-commerce</p>
              <h2>Your E-commerce Business Is Always Changing</h2>
              <p className="lead intro">An online store is never truly finished. New products launch. Specifications change. Promotions go live. Inventory moves. Reviews arrive. Global e-commerce localization has to keep up with that pace.</p>
            </div>
            <div className="benefit-grid">
              {[
                ["Keep Every Market Current","Translate newly created and modified content without repeatedly processing everything that has already been approved."],
                ["Reduce Repetitive Localization Work","Reuse existing translations and approved terminology across recurring products, categories, components, campaigns, and releases."],
                ["Scale With Content Volume","Support focused collections or complex commerce environments with extensive SKUs, attributes, variants, and marketplace fields."],
                ["Maintain Global Consistency","Keep product names, specifications, category language, brand terminology, and customer-facing messaging aligned across markets."],
              ].map(([t,d]) => <div className="benefit-item" key={t}><h3>{t}</h3><p className="body-copy">{d}</p></div>)}
            </div>
          </div>
          <div className="lifecycle-panel" aria-label="Continuous e-commerce content lifecycle">
            {[
              ["product","New Products","New SKUs and collections"],
              ["data","Product Updates","Descriptions, attributes, specifications"],
              ["promo","Promotions","Seasonal and campaign changes"],
              ["marketplace","Marketplaces","Listings and structured fields"],
              ["cart","Orders","Checkout and transactional content"],
              ["support","Customer Support","Help, reviews, returns, loyalty"],
              ["globe","New Markets","More locales and regional experiences"],
            ].map(([icon,title,meta]) => <div className="lifecycle-row" key={title}><span className={`icon-box icon-${icon}`}><Icon name={icon}/></span><div><div className="row-title">{title}</div><div className="row-meta">{meta}</div></div><span className="status-dot" aria-hidden="true"/></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="shell">
          <div className="heading-group center">
            <h2>Localize the Complete E-commerce Customer Journey</h2>
            <p className="lead intro">Customers interact with localized content from their first search through product comparison, checkout, delivery, returns, support, and repeat purchases.</p>
          </div>
          <div className="experience-grid">
            {experienceItems.map(([icon,title,desc]) => <article className="experience-item" key={title}><span className={`icon-box icon-${icon}`}><Icon name={icon}/></span><h3>{title}</h3><p className="body-copy">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section product-ops dark" id="product-content">
        <div className="shell product-ops-grid">
          <div>
            <div className="heading-group center-tablet">
              <p className="eyebrow">High-Volume Product Content</p>
              <h2>Millions of Product Fields. One Multilingual Content Operation.</h2>
              <p className="lead intro">Enterprise e-commerce localization is often a data challenge as much as a language challenge. Stepes helps global commerce teams process product information systematically while keeping approved language reusable, terminology controlled, and new or changed content moving through the right workflow.</p>
            </div>
            <ul className="mini-list">
              <li>Product names and descriptions</li>
              <li>Attributes, variants, specifications, and care content</li>
              <li>Taxonomy, categories, filters, and classification</li>
              <li>Marketplace fields, metadata, and search-facing content</li>
            </ul>
          </div>
          <div className="product-record" aria-label="Example multilingual product content workflow">
            <div className="record-top"><div className="record-title">Trail Running Jacket · SKU 10823</div><div className="record-status">4 fields updated</div></div>
            <div className="record-body">
              <div className="record-fields">
                {[
                  ["Product Name","All-Weather Trail Jacket"],["Category","Women › Running › Trail"],["Material","3-layer recycled shell"],["Size","XS–XXL"],["Dimensions","Pack size 25 × 14 cm"],["Meta","Lightweight waterproof trail jacket"],
                ].map(([k,v]) => <div className="field" key={k}><div className="field-key">{k}</div><div className="field-value">{v}</div></div>)}
              </div>
              <div className="record-flow">
                {[
                  ["Translation Memory","Approved content reused"],["Terminology","Product vocabulary applied"],["AI + Human","Workflow routed by content"],["Quality Assurance","Data and language validated"],["Market Approval","Localized content ready"],
                ].map(([a,b]) => <div className="flow-step" key={a}><strong>{a}</strong><span>{b}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" id="structured-data">
        <div className="shell split reverse">
          <div className="data-demo" aria-label="Product data localization example">
            <div className="data-demo-head"><strong>Structured Product Record</strong><span className="row-meta">What should change?</span></div>
            <div className="data-demo-body">
              {[
                ["title: \"Trail Running Jacket\"","Translate","translate"],
                ["size_label: \"Women’s 8\"","Adapt","adapt"],
                ["sku: \"SKU-84732\"","Protect","protect"],
                ["voltage: \"120 V\"","Protect","protect"],
                ["dimensions: \"25 × 40 cm\"","Adapt","adapt"],
                ["cta: \"Add to Cart\"","Translate","translate"],
                ["template: \"{product_name}\"","Protect","protect"],
                ["locale: \"en-US\"","Protect","protect"],
              ].map(([code,label,cls]) => <div className="data-line" key={code}><span className="code">{code}</span><span className={`tag ${cls}`}>{label}</span></div>)}
            </div>
          </div>
          <div>
            <div className="heading-group center-tablet">
              <p className="eyebrow">Structured Product Data</p>
              <h2>Translate the Content. Protect the Product Data.</h2>
              <p className="lead intro">Commerce systems contain SKUs, model numbers, measurements, variables, placeholders, HTML, XML, JSON, product codes, technical values, brand names, and structured attributes that must remain intact during translation.</p>
            </div>
            <p className="body-copy" style={{marginTop:24}}>Stepes workflows help distinguish between content that should be translated, content that requires market adaptation, and information that must remain protected. This helps localize commerce content without compromising identifiers, formatting, or functionality.</p>
          </div>
        </div>
      </section>

      <section className="section" id="ai-human">
        <div className="shell">
          <div className="heading-group center">
            <p className="eyebrow">AI + Human E-commerce Translation</p>
            <h2>Match Translation Quality to the Content</h2>
            <p className="lead intro">A rapidly changing product attribute, a flagship product launch, customer reviews, checkout content, and premium brand copy do not carry the same business value or risk. Stepes combines AI, professional linguists, reusable language assets, automated QA, and review so each content stream can follow the right path.</p>
          </div>
          <div className="workflow-table" role="table" aria-label="Example e-commerce translation workflows">
            {workflowRows.map(([content,workflow,objective]) => <div className="workflow-row" role="row" key={content}><strong role="cell">{content}</strong><div className="body-copy" role="cell">{workflow}</div><div className="workflow-label" role="cell">{objective}</div></div>)}
          </div>
          <div style={{display:'flex', flexWrap:'wrap', gap:24}}>
            <TextLink href={URLS.aiTranslation}>AI Translation Services</TextLink>
            <TextLink href={URLS.aiHuman}>AI + Human Translation Workflows</TextLink>
          </div>
        </div>
      </section>

      <section className="section blush" id="terminology">
        <div className="shell">
          <div className="asset-band">
            <div className="asset-copy">
              <div className="heading-group center-tablet">
                <p className="eyebrow">Terminology & Consistency</p>
                <h2>One Product Vocabulary Across Every Channel and Market</h2>
                <p className="lead intro">Customers should not encounter one product name on your website, another in search filters, and a third on a marketplace listing.</p>
              </div>
              <p className="body-copy" style={{marginTop:22}}>Translation memory preserves previously approved content in context, while terminology management controls how important product concepts should be expressed going forward.</p>
              <div style={{display:'flex', flexWrap:'wrap', gap:20}}>
                <TextLink href={URLS.terminology}>Terminology Management</TextLink>
                <TextLink href={URLS.translationMemory}>Translation Memory</TextLink>
              </div>
            </div>
            <div className="asset-grid">
              {['Product & collection names','Categories & subcategories','Colors, materials & sizes','Features & functionality','Technical terminology','Marketplace terminology','Brand-specific language','Preferred & prohibited terms'].map((x) => <div className="asset-item" key={x}><strong>{x}</strong><span className="body-copy">Approved language applied consistently across teams, channels, and markets.</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="discovery">
        <div className="shell split">
          <div>
            <div className="heading-group center-tablet">
              <p className="eyebrow">Multilingual Product Discovery</p>
              <h2>Translate Search Intent, Not Just Keywords</h2>
              <p className="lead intro">The words customers use, the categories they expect, and the way they describe product attributes can vary significantly by language and market.</p>
            </div>
            <ul className="mini-list">
              <li>Local product keywords and search terminology</li>
              <li>Category taxonomy, filters, attributes, and synonyms</li>
              <li>Product metadata and search-facing copy</li>
              <li>Marketplace search terms and localized landing pages</li>
            </ul>
            <TextLink href={URLS.seoGuide}>Explore the Multilingual SEO Guide</TextLink>
          </div>
          <div className="search-demo" aria-label="Localized product search example">
            <div className="search-bar"><span className="icon-box icon-search" style={{width:34,height:34,borderRadius:999}}><Icon name="search"/></span><span>leichte wasserdichte laufjacke</span></div>
            <div className="search-results">
              <div className="search-result"><div className="search-locale">DE · Laufbekleidung</div><div className="search-title">Leichte wasserdichte Laufjacken</div><div className="search-copy">Atmungsaktive Laufjacken für wechselhaftes Wetter mit lokalen Größen- und Pflegehinweisen.</div></div>
              <div className="search-result"><div className="search-locale">DE · Trail-Kollektion</div><div className="search-title">Trail-Kollektion für jedes Wetter</div><div className="search-copy">Technische Materialien, lokale Produktbegriffe und detaillierte Informationen für eine sichere Kaufentscheidung.</div></div>
              <div className="search-result"><div className="search-locale">DE · Größenberatung</div><div className="search-title">Größenberatung und Passform</div><div className="search-copy">Lokalisierte Maße, Größen und Produktempfehlungen für Ihre Region.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface" id="marketplaces">
        <div className="shell">
          <div className="heading-group center">
            <h2>Localize Product Content for Global Marketplaces</h2>
            <p className="lead intro">Marketplace localization introduces another layer of content requirements beyond your own storefront. Stepes helps brands, manufacturers, retailers, and sellers localize product information while maintaining consistency with broader product terminology and brand language.</p>
          </div>
          <div className="market-row-grid">
            {[
              ["Product Listings","Titles, bullet points, descriptions, features, benefits, specifications, and supporting listing content."],
              ["Marketplace Attributes","Structured fields, product characteristics, category information, variants, and required marketplace data."],
              ["Search-Facing Content","Relevant keywords, product terminology, and discovery content adapted for target markets."],
              ["Seller Content","Storefront information, seller profiles, policies, FAQs, promotions, and customer communications."],
              ["Product Q&A","Customer questions and answers translated with scalable workflows appropriate to volume and visibility."],
              ["Reviews & UGC","AI-assisted availability with sampling and human escalation where customer impact requires it."],
              ["Character Constraints","Field limits and structured templates handled within the localization requirements."],
              ["Market Consistency","Marketplace terminology aligned with your storefront, product catalog, and approved language assets."],
            ].map(([t,d]) => <div className="market-item" key={t}><h3>{t}</h3><p className="body-copy">{d}</p></div>)}
          </div>
          <TextLink href={URLS.amazon}>Amazon Listing Translation Services</TextLink>
        </div>
      </section>

      <section className="section dark" id="commerce-stack">
        <div className="shell">
          <div className="heading-group center">
            <p className="eyebrow">Connected Commerce Localization</p>
            <h2>Connect Translation to the Systems That Run Your E-commerce Business</h2>
            <p className="lead intro">E-commerce content rarely lives in one place. Stepes helps enterprises connect multilingual workflows to the environments where global commerce content is created, reviewed, and managed.</p>
          </div>
          <div className="stack-diagram" aria-label="Commerce systems connected to Stepes localization workflows">
            <div className="stack-column">
              <div className="stack-label">Content Systems</div>
              <div className="system-list">
                {[
                  ["store","E-commerce Platforms"],
                  ["data","PIM / PXM Systems"],
                  ["layout","CMS / Headless CMS"],
                  ["image","DAM & Marketing Content"],
                  ["marketplace","Marketplaces & Product Feeds"],
                  ["support","Customer & Support Systems"],
                  ["api","Custom Enterprise Applications"],
                ].map(([icon,label]) => <div className="system-node" key={label}><span className="stack-node-icon"><Icon name={icon}/></span><span>{label}</span></div>)}
              </div>
            </div>
            <div className="stack-column stack-core-column">
              <div className="stack-label">Localization Workflow</div>
              <div className="stepes-core">
                <strong>STEPES</strong>
                <div className="core-chips">{['Translation API','Workflow Automation','TM','Terminology','AI + Human','QA','Review'].map(x => <span className="core-chip" key={x}>{x}</span>)}</div>
              </div>
            </div>
            <div className="stack-column">
              <div className="stack-label">Localized Outputs</div>
              <div className="output-list">
                {[
                  ["data","Localized Product Data"],
                  ["store","Localized Storefront"],
                  ["marketplace","Localized Marketplaces"],
                  ["cart","Localized Cart & Checkout"],
                  ["support","Localized Customer Support"],
                  ["launch","Market-Ready Releases"],
                ].map(([icon,label]) => <div className="output-node" key={label}><span className="stack-node-icon"><Icon name={icon}/></span><span>{label}</span></div>)}
              </div>
            </div>
          </div>
          <div style={{display:'flex', flexWrap:'wrap', gap:24, justifyContent:'center', marginTop:22}}>
            <TextLink href={URLS.translationApi}>Translation API</TextLink>
            <TextLink href={URLS.workflowAutomation}>Translation Workflow Automation</TextLink>
          </div>
        </div>
      </section>

      <section className="section" id="continuous">
        <div className="shell">
          <div className="heading-group center left-mobile">
            <p className="eyebrow">Continuous Localization</p>
            <h2>Keep Every Market Current as Commerce Content Changes</h2>
            <p className="lead intro">Identify new or modified content, reuse approved language, route work according to requirements, and return completed translations through connected processes.</p>
          </div>
          <div className="timeline" aria-label="Continuous e-commerce localization workflow">
            {[
              ["01","Detect","Identify new products, revised content, changed attributes, promotions, or recurring updates."],
              ["02","Reuse","Apply approved translation memory and terminology before creating new translations."],
              ["03","Route","Assign the appropriate AI, professional translation, review, or approval workflow."],
              ["04","Translate","Process new and changed content across the required languages and markets."],
              ["05","Validate","Apply linguistic, terminology, technical, data-integrity, and in-context quality controls."],
              ["06","Deliver","Return approved multilingual content through the required portal, file, API, repository, or workflow."],
            ].map(([n,t,d]) => <div className="timeline-step" key={n}><div className="timeline-num">{n}</div><h3>{t}</h3><p className="body-copy">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section surface" id="qa">
        <div className="shell qa-shell">
          <div>
            <div className="heading-group center-tablet">
              <p className="eyebrow">E-commerce Localization QA</p>
              <h2>A Correct Translation Can Still Break the Shopping Experience</h2>
              <p className="lead intro">Localized content must work inside product pages, search filters, mobile interfaces, checkout flows, marketplace templates, structured feeds, and customer experiences.</p>
            </div>
            <div className="qa-pipeline" aria-label="Localization quality pipeline">
              {['Linguistic QA','Terminology QA','Product Data QA','Visual QA','Functional QA','In-Context Review'].map((x,i,a) => <React.Fragment key={x}><span className="qa-pill">{x}</span>{i<a.length-1 && <span className="qa-arrow">→</span>}</React.Fragment>)}
            </div>
            <TextLink href={URLS.quality}>Translation Quality Assurance</TextLink>
          </div>
          <div className="qa-issues">
            {[
              ["layout","Interface text no longer fits","Text expansion can create wrapping, overlap, or hidden actions."],
              ["search","Search filters become inconsistent","Product names, taxonomy, and filter terminology need to stay aligned."],
              ["data","Product data changes unexpectedly","Numbers, placeholders, tags, model numbers, and technical values require protection."],
              ["globe","Locale conventions are wrong","Sizing, measurements, number formats, addresses, currencies, and RTL behavior may need validation."],
              ["marketplace","Marketplace limits are exceeded","Listings and structured fields must respect channel-specific constraints."],
              ["cart","Checkout becomes harder to use","Localized labels, validation messages, and transaction content must work in context."],
            ].map(([icon,t,d]) => <div className="qa-issue" key={t}><span className={`icon-box icon-${icon}`}><Icon name={icon}/></span><div><strong>{t}</strong><span className="body-copy">{d}</span></div></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="market-adaptation">
        <div className="shell adapt-grid">
          <div className="heading-group center-tablet">
            <h2>Build E-commerce Experiences That Feel Local</h2>
            <p className="lead intro">Global brand consistency does not mean every market should use identical language or conventions. Stepes combines centralized language governance with professional local-language expertise so customer-facing content can remain aligned while adapting appropriately for each market.</p>
          </div>
          <div className="adapt-list">
            {['Regional language variants','Product terminology','Measurement systems','Sizing conventions','Date and number formats','Currency presentation','Address conventions','Tone and customer language','Local search vocabulary','Category expectations','Cultural context','Market-specific information','Brand-language continuity'].map(x => <div className="adapt-item" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="section surface" id="industries">
        <div className="shell">
          <div className="heading-group center">
            <h2>E-commerce Localization Across Consumer Categories</h2>
            <p className="lead intro">Different product categories create different translation challenges. Stepes supports multilingual commerce programs across a wide range of consumer and product sectors.</p>
          </div>
          <div className="industry-grid">
            {[
              ["apparel","Fashion & Apparel","Product names, collections, materials, sizing, fit, care instructions, campaigns, and merchandising content."],
              ["electronics","Consumer Electronics","Specifications, features, compatibility, accessories, interface content, technical details, and marketplace listings."],
              ["beauty","Beauty & Personal Care","Descriptions, ingredients, claims, usage information, routines, category language, and commerce content."],
              ["food","Food & Beverage","Product information, ingredients, preparation content, flavors, recipes, descriptions, and digital commerce experiences."],
              ["home","Home & Appliances","Dimensions, specifications, materials, installation information, features, care instructions, and comparisons."],
              ["luxury","Luxury & Lifestyle","Premium brand language, product storytelling, transcreation, and market-sensitive review."],
              ["subscription","Direct-to-Consumer","Product launches, subscriptions, lifecycle communications, storefronts, campaigns, and recurring customer content."],
              ["marketplace","Online Marketplaces","Listings, attributes, taxonomy, seller content, search terminology, product Q&A, and marketplace-specific information."],
            ].map(([icon,t,d]) => <article className="industry-item" key={t}><span className={`icon-box icon-${icon}`}><Icon name={icon}/></span><h3>{t}</h3><p className="body-copy">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section dense" id="languages">
        <div className="shell language-band">
          <div>
            <div className="heading-group center-tablet">
              <h2>E-commerce Translation Services in 100+ Languages</h2>
            </div>
            <p className="body-copy" style={{marginTop:18}}>Build consistent multilingual commerce experiences across mature markets, emerging markets, and expanding product regions with professional language expertise and scalable translation workflows.</p>
            <TextLink href={URLS.languages}>Explore All Languages</TextLink>
          </div>
          <div className="languages" aria-label="Popular e-commerce languages">
            {['Spanish','French','German','Chinese','Japanese','Korean','Portuguese','Italian','Dutch','Arabic','Vietnamese','Thai'].map(x => <span className="language-chip" key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="why-stepes">
        <div className="shell">
          <div className="heading-group center">
            <p className="eyebrow">Why Stepes</p>
            <h2>Built for Modern Global E-commerce</h2>
            <p className="lead intro">E-commerce localization requires a multilingual operating model that can handle continuous content, large product datasets, changing requirements, multiple quality levels, connected systems, and global stakeholders.</p>
          </div>
          <div className="why-grid">
            {[
              ["scale","Built for Scale","Support large and continuously changing volumes of product, storefront, marketplace, and customer content."],
              ["ai","Flexible AI + Human Quality","Match translation technology, linguistic expertise, review depth, and approvals to each content type."],
              ["api","Connected Workflows","Move multilingual content through files, portals, APIs, repositories, and customized enterprise workflows."],
              ["memory","Translation Memory","Reuse previously approved multilingual content and focus resources on genuinely new or changed information."],
              ["terms","Terminology Governance","Keep product names, categories, features, technical terms, and brand language aligned across markets."],
              ["quality","Enterprise Quality","Combine automated checks, professional review, technical validation, in-context QA, and approved language assets."],
              ["globe","Global Language Expertise","Coordinate multilingual translation across 100+ languages for international commerce programs."],
              ["cycle","Continuous Localization","Keep product and customer experiences current as source content evolves instead of rebuilding every update."],
            ].map(([icon,t,d]) => <article className="why-item" key={t}><span className={`icon-box icon-${icon}`}><Icon name={icon}/></span><h3>{t}</h3><p className="body-copy">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section surface" id="related-services">
        <div className="shell">
          <div className="heading-group center">
            <p className="eyebrow">Related Services & Resources</p>
            <h2>Build a Connected Global Commerce Localization Program</h2>
            <p className="lead intro">E-commerce content intersects with product catalogs, websites, marketing, marketplaces, customer support, and broader retail operations. Connect the services and resources that fit your multilingual program.</p>
          </div>
          <div className="related">
            {[
              ["Retail & E-commerce Translation Services","Localize the broader retail ecosystem across digital commerce, physical retail, packaging, marketing, customer engagement, and omnichannel experiences.",URLS.retailEcommerce,"Retail & E-commerce Translation"],
              ["Website Translation Services","Translate corporate websites, digital experiences, landing pages, content platforms, and continuously changing multilingual web content.",URLS.website,"Website Translation Services"],
              ["Catalog Translation Services","Localize product catalogs, product information, structured catalog content, and customer-facing merchandising materials.",URLS.catalog,"Catalog Translation Services"],
              ["Amazon Listing Translation Services","Translate and adapt marketplace product titles, descriptions, features, search-facing content, and supporting listings.",URLS.amazon,"Amazon Listing Translation"],
              ["Marketing Translation Services","Adapt campaigns, promotional content, brand messaging, email, digital advertising, and customer communications.",URLS.marketing,"Marketing Translation Services"],
              ["Multilingual SEO Guide","Plan multilingual search around local demand, search intent, content architecture, technical signals, and continuous optimization.",URLS.seoGuide,"Multilingual SEO Guide"],
            ].map(([t,d,u,label]) => <div className="related-row" key={t}><h3>{t}</h3><p className="body-copy">{d}</p><TextLink href={u}>{label}</TextLink></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="shell">
          <div className="heading-group center left-mobile">
            <h2>Common Questions About E-commerce Translation Services</h2>
          </div>
          <div className="faq-shell">
            {faqItems.map(([q,a], i) => {
              const open = openFaq === i;
              return <div className="faq-item" key={q}>
                <button className="faq-button" type="button" aria-expanded={open} aria-controls={`faq-answer-${i}`} onClick={() => setOpenFaq(open ? -1 : i)}>
                  <span>{q}</span><span className="faq-plus" aria-hidden="true">+</span>
                </button>
                {open && <div className="faq-answer" id={`faq-answer-${i}`}>{a}</div>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="shell final-grid">
          <div>
            <p className="eyebrow">Global E-commerce, Built to Scale</p>
            <h2>Build a Multilingual Commerce Operation That Keeps Moving</h2>
            <p className="lead">Your products change. Your markets expand. Your storefront evolves. Stepes combines professional e-commerce translation, AI-powered workflows, translation memory, terminology management, continuous localization, APIs, and enterprise quality controls to help your multilingual content move with them.</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={URLS.contactSales}>Talk to an Expert <ArrowIcon /></a>
            <a className="btn btn-secondary" href={URLS.instantQuote}>Get an Instant Quote <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EcommerceTranslationsWireframe;
