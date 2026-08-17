import * as React from "react";

const CANONICAL = "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/";

const styles = `
  :root {
    --sg-accent: #C11D63;
    --sg-accent-dark: #9F1D55;
    --sg-accent-deep: #7A1542;
    --sg-blush: #FDF2F7;
    --sg-blush-strong: #F8E6EE;
    --sg-light-magenta: #F2A7C6;
    --sg-text: #18141A;
    --sg-muted: #625C66;
    --sg-soft: #F8F7F8;
    --sg-line: #E7E2E6;
    --sg-line-dark: rgba(255,255,255,.14);
    --sg-dark: #1D1820;
    --sg-white: #FFFFFF;
    --sg-radius-lg: 30px;
    --sg-radius-md: 22px;
  }

  .stepes-guide-wireframe,
  .stepes-guide-wireframe * { box-sizing: border-box; }

  .stepes-guide-wireframe {
    width: 100%;
    overflow-x: hidden;
    background: var(--sg-white);
    color: var(--sg-text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .stepes-guide-wireframe a { color: inherit; text-decoration: none; }
  .stepes-guide-wireframe svg { display: block; }
  .stepes-guide-wireframe p,
  .stepes-guide-wireframe li { margin: 0; }

  .sg-shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .sg-reading {
    width: min(100%, 760px);
    margin-left: auto;
    margin-right: auto;
  }

  .sg-reading-wide {
    width: min(100%, 1040px);
    margin-left: auto;
    margin-right: auto;
  }

  .sg-eyebrow {
    margin: 0 0 18px;
    color: var(--sg-accent);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .sg-eyebrow-dark { color: var(--sg-light-magenta); }

  .sg-h1,
  .sg-h2,
  .sg-h3 {
    margin: 0;
    font-weight: 600;
    color: var(--sg-text);
  }

  .sg-h1 { font-size: 48px; line-height: 1.08; letter-spacing: -.035em; }
  .sg-h2 { font-size: 36px; line-height: 1.16; letter-spacing: -.025em; }
  .sg-h3 { font-size: 24px; line-height: 1.28; letter-spacing: -.015em; }

  .sg-lead {
    margin-top: 24px;
    max-width: 820px;
    color: var(--sg-muted);
    font-size: 19px;
    line-height: 1.68;
  }

  .sg-body {
    color: var(--sg-muted);
    font-size: 18px;
    line-height: 1.72;
  }

  .sg-body + .sg-body { margin-top: 22px; }

  .sg-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--sg-accent);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .sg-link svg { transition: transform .2s ease; }
  .sg-link:hover svg,
  .sg-link:focus-visible svg { transform: translateX(3px); }
  .sg-link:focus-visible,
  .sg-button:focus-visible,
  .sg-faq summary:focus-visible,
  .sg-mobile-toc summary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 4px; }

  .sg-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 50px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }

  .sg-button-primary,
  .sg-button-primary:link,
  .sg-button-primary:visited,
  .sg-button-primary:hover,
  .sg-button-primary:active,
  .sg-button-primary:focus-visible {
    background: var(--sg-accent);
    color: #FFFFFF !important;
  }

  .sg-button-primary:hover { background: var(--sg-accent-dark); transform: translateY(-1px); box-shadow: 0 12px 24px rgba(122,21,66,.18); }
  .sg-button-secondary { background: #FFFFFF; color: var(--sg-text); border-color: var(--sg-line); }
  .sg-button-secondary:hover { border-color: #CFC5CC; transform: translateY(-1px); }

  .sg-hero {
    position: relative;
    padding: 104px 0 88px;
    background:
      radial-gradient(circle at 90% 15%, rgba(193,29,99,.09) 0, rgba(193,29,99,0) 26%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFBFC 100%);
  }

  .sg-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(400px, .92fr);
    gap: 72px;
    align-items: center;
  }

  .sg-hero-copy { max-width: 710px; }
  .sg-hero-deck { margin-top: 26px; max-width: 700px; color: var(--sg-muted); font-size: 19px; line-height: 1.68; }
  .sg-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
  .sg-hero-meta { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 30px; padding-top: 24px; border-top: 1px solid var(--sg-line); }
  .sg-meta-item { display: inline-flex; align-items: center; gap: 8px; color: var(--sg-muted); font-size: 14px; line-height: 1.45; }
  .sg-meta-item svg { color: var(--sg-accent); }

  .sg-route-preview {
    position: relative;
    overflow: hidden;
    padding: 28px;
    border: 1px solid var(--sg-line);
    border-radius: var(--sg-radius-lg);
    background: rgba(255,255,255,.94);
    box-shadow: 0 28px 70px rgba(46,35,43,.10);
  }

  .sg-route-preview::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: -70px;
    top: -80px;
    border-radius: 50%;
    border: 38px solid rgba(193,29,99,.06);
    pointer-events: none;
  }

  .sg-preview-label { color: var(--sg-accent); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .sg-preview-title { margin-top: 10px; max-width: 390px; font-size: 22px; font-weight: 600; line-height: 1.34; }
  .sg-preview-source { display: flex; align-items: center; gap: 12px; margin-top: 24px; padding: 15px 16px; border-radius: 16px; background: var(--sg-soft); color: var(--sg-muted); font-size: 16px; line-height: 1.45; }
  .sg-preview-source-icon { display: grid; place-items: center; width: 36px; height: 36px; flex: 0 0 36px; border-radius: 11px; background: #FFFFFF; color: var(--sg-accent); }
  .sg-route-list { margin-top: 16px; border-top: 1px solid var(--sg-line); }
  .sg-route-preview-row { display: grid; grid-template-columns: 42px minmax(0,1fr) auto; gap: 14px; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--sg-line); }
  .sg-route-preview-row:last-child { border-bottom: 0; }
  .sg-route-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 14px; background: var(--sg-blush); color: var(--sg-accent); }
  .sg-route-name { font-size: 16px; font-weight: 600; line-height: 1.35; }
  .sg-route-fit { margin-top: 3px; color: var(--sg-muted); font-size: 14px; line-height: 1.45; }
  .sg-route-state { color: var(--sg-accent); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }

  .sg-section { padding: 96px 0; }
  .sg-section-dense { padding: 80px 0; }
  .sg-section-soft { background: var(--sg-soft); }
  .sg-section-blush { background: var(--sg-blush); }

  .sg-takeaway-header { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 64px; align-items: end; }
  .sg-takeaway-header .sg-lead { margin: 0; }
  .sg-takeaway-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); margin-top: 50px; border-top: 1px solid #E5CBD7; border-left: 1px solid #E5CBD7; }
  .sg-takeaway { min-height: 178px; padding: 26px 24px 28px; border-right: 1px solid #E5CBD7; border-bottom: 1px solid #E5CBD7; }
  .sg-takeaway-top { display: flex; gap: 13px; align-items: flex-start; }
  .sg-takeaway-icon { display: grid; place-items: center; width: 32px; height: 32px; flex: 0 0 32px; border-radius: 50%; background: #FFFFFF; color: var(--sg-accent); }
  .sg-takeaway h3 { margin: 2px 0 0; font-size: 18px; font-weight: 600; line-height: 1.38; }
  .sg-takeaway p { margin-top: 13px; color: var(--sg-muted); font-size: 16px; line-height: 1.62; }

  .sg-toc-wrap { border-top: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
  .sg-toc-head { display: flex; justify-content: space-between; gap: 36px; align-items: end; }
  .sg-toc-head p { max-width: 590px; color: var(--sg-muted); font-size: 17px; line-height: 1.65; }
  .sg-toc-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 34px 56px; margin-top: 42px; }
  .sg-toc-group h3 { margin: 0 0 14px; color: var(--sg-muted); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
  .sg-toc-group ul { list-style: none; margin: 0; padding: 0; }
  .sg-toc-group li + li { margin-top: 2px; }
  .sg-toc-group a { display: grid; grid-template-columns: 10px minmax(0,1fr); gap: 11px; align-items: start; min-height: 44px; padding: 10px 0; color: var(--sg-text); font-size: 16px; font-weight: 600; line-height: 1.42; }
  .sg-toc-dot { width: 7px; height: 7px; margin-top: .48em; border-radius: 50%; background: var(--sg-accent); }
  .sg-toc-group a:hover { color: var(--sg-accent); }
  .sg-mobile-toc { display: none; margin-top: 28px; border: 1px solid var(--sg-line); border-radius: 18px; background: #FFFFFF; }
  .sg-mobile-toc summary { display: flex; justify-content: space-between; align-items: center; min-height: 54px; padding: 14px 18px; cursor: pointer; font-size: 16px; font-weight: 600; list-style: none; }
  .sg-mobile-toc summary::-webkit-details-marker { display: none; }
  .sg-mobile-toc summary::after { content: "+"; color: var(--sg-accent); font-size: 22px; font-weight: 400; }
  .sg-mobile-toc[open] summary::after { content: "−"; }
  .sg-mobile-toc-content { padding: 4px 18px 16px; border-top: 1px solid var(--sg-line); }
  .sg-mobile-toc-content a { display: block; min-height: 44px; padding: 12px 0; border-bottom: 1px solid var(--sg-line); color: var(--sg-text); font-size: 16px; font-weight: 600; line-height: 1.4; }
  .sg-mobile-toc-content a:last-child { border-bottom: 0; }

  .sg-chapter-header { margin-bottom: 34px; }
  .sg-chapter-header .sg-lead { max-width: 780px; }
  .sg-copy-stack > * + * { margin-top: 22px; }
  .sg-copy-stack ul { margin: 20px 0 0; padding-left: 22px; color: var(--sg-muted); font-size: 18px; line-height: 1.68; }
  .sg-copy-stack li + li { margin-top: 10px; }

  .sg-comparison {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    margin-top: 46px;
    border: 1px solid var(--sg-line);
    border-radius: var(--sg-radius-lg);
    overflow: hidden;
  }
  .sg-comparison-column { padding: 34px; background: #FFFFFF; }
  .sg-comparison-column + .sg-comparison-column { border-left: 1px solid var(--sg-line); background: var(--sg-blush); }
  .sg-comparison-label { color: var(--sg-muted); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .sg-comparison-column h3 { margin-top: 10px; font-size: 24px; font-weight: 600; }
  .sg-quiet-list { list-style: none; margin: 24px 0 0; padding: 0; }
  .sg-quiet-list li { display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 12px; align-items: start; padding: 13px 0; border-top: 1px solid var(--sg-line); color: var(--sg-muted); font-size: 16px; line-height: 1.55; }
  .sg-quiet-list svg { margin-top: 2px; color: var(--sg-accent); }

  .sg-quality-panel { margin-top: 46px; padding: 38px; border-radius: var(--sg-radius-lg); background: var(--sg-dark); color: #FFFFFF; }
  .sg-quality-panel .sg-h3 { color: #FFFFFF; font-size: 28px; }
  .sg-quality-panel-intro { margin-top: 14px; max-width: 760px; color: rgba(255,255,255,.72); font-size: 17px; line-height: 1.65; }
  .sg-quality-layers { margin-top: 30px; border-top: 1px solid var(--sg-line-dark); }
  .sg-quality-layer { display: grid; grid-template-columns: 54px minmax(190px,.72fr) minmax(0,1.28fr); gap: 22px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--sg-line-dark); }
  .sg-quality-layer:last-child { border-bottom: 0; }
  .sg-quality-layer-index { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 14px; background: rgba(242,167,198,.12); color: var(--sg-light-magenta); font-size: 16px; font-weight: 600; }
  .sg-quality-layer h4 { margin: 0; color: #FFFFFF; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .sg-quality-layer p { color: rgba(255,255,255,.7); font-size: 16px; line-height: 1.58; }

  .sg-dimension-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 44px; border-top: 1px solid var(--sg-line); border-left: 1px solid var(--sg-line); }
  .sg-dimension { display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 16px; padding: 28px; border-right: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
  .sg-dimension:last-child:nth-child(odd) { grid-column: 1 / -1; }
  .sg-dimension-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 14px; background: var(--sg-blush); color: var(--sg-accent); }
  .sg-dimension h3 { margin: 1px 0 0; font-size: 20px; font-weight: 600; line-height: 1.4; }
  .sg-dimension p { margin-top: 10px; color: var(--sg-muted); font-size: 16px; line-height: 1.62; }
  .sg-dimension ul { margin: 14px 0 0; padding-left: 20px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-dimension li + li { margin-top: 6px; }

  .sg-classification-band { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); margin-top: 34px; border: 1px solid var(--sg-line); border-radius: 22px; overflow: hidden; }
  .sg-classification-item { padding: 24px; background: #FFFFFF; }
  .sg-classification-item + .sg-classification-item { border-left: 1px solid var(--sg-line); }
  .sg-classification-item strong { display: block; font-size: 17px; font-weight: 600; }
  .sg-classification-item span { display: block; margin-top: 8px; color: var(--sg-muted); font-size: 16px; line-height: 1.55; }

  .sg-dark-section { padding: 96px 0; background: var(--sg-dark); color: #FFFFFF; }
  .sg-dark-section .sg-h2 { color: #FFFFFF; }
  .sg-dark-section .sg-lead { color: rgba(255,255,255,.72); }
  .sg-route-framework { margin-top: 52px; border-top: 1px solid var(--sg-line-dark); }
  .sg-route-row { display: grid; grid-template-columns: minmax(230px,.78fr) minmax(0,1.22fr); gap: 48px; padding: 34px 0; border-bottom: 1px solid var(--sg-line-dark); }
  .sg-route-row:last-child { border-bottom: 0; }
  .sg-route-heading { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 16px; align-items: start; }
  .sg-route-heading-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 14px; background: rgba(242,167,198,.11); color: var(--sg-light-magenta); }
  .sg-route-kicker { color: var(--sg-light-magenta); font-size: 11px; font-weight: 600; letter-spacing: .11em; text-transform: uppercase; }
  .sg-route-heading h3 { margin-top: 8px; color: #FFFFFF; font-size: 24px; font-weight: 600; line-height: 1.32; }
  .sg-route-details { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 28px; }
  .sg-route-detail-label { color: var(--sg-light-magenta); font-size: 16px; font-weight: 600; line-height: 1.4; }
  .sg-route-detail p,
  .sg-route-detail ul { margin: 10px 0 0; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.58; }
  .sg-route-detail ul { padding-left: 19px; }
  .sg-route-detail li + li { margin-top: 5px; }
  .sg-dark-note { margin-top: 38px; padding: 22px 24px; border-left: 3px solid var(--sg-light-magenta); background: rgba(255,255,255,.05); color: rgba(255,255,255,.78); font-size: 17px; line-height: 1.62; }
  .sg-dark-links { display: flex; flex-wrap: wrap; gap: 14px 28px; margin-top: 26px; }
  .sg-dark-links .sg-link { color: var(--sg-light-magenta); }

  .sg-table-frame { margin-top: 44px; border: 1px solid var(--sg-line); border-radius: var(--sg-radius-lg); overflow: hidden; background: #FFFFFF; }
  .sg-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .sg-table th { padding: 18px 20px; background: var(--sg-soft); color: var(--sg-text); font-size: 16px; font-weight: 600; line-height: 1.45; text-align: left; vertical-align: bottom; }
  .sg-table td { padding: 20px; border-top: 1px solid var(--sg-line); color: var(--sg-muted); font-size: 16px; line-height: 1.58; vertical-align: top; }
  .sg-table td strong { color: var(--sg-text); font-weight: 600; }
  .sg-table .sg-route-tag { display: inline-flex; padding: 6px 10px; border-radius: 999px; background: var(--sg-blush); color: var(--sg-accent-deep); font-size: 16px; font-weight: 600; line-height: 1.3; }
  .sg-mobile-records { display: none; }
  .sg-record { border-bottom: 1px solid var(--sg-line); padding: 24px; }
  .sg-record:last-child { border-bottom: 0; }
  .sg-record h3 { font-size: 20px; font-weight: 600; line-height: 1.35; }
  .sg-record-field { margin-top: 18px; }
  .sg-record-label { color: var(--sg-accent-deep); font-size: 16px; font-weight: 600; line-height: 1.4; }
  .sg-record-value { margin-top: 6px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-table-note { margin-top: 20px; color: var(--sg-muted); font-size: 16px; line-height: 1.62; }

  .sg-workflow-panel { margin-top: 46px; padding: 0 26px; border: 1px solid var(--sg-line); border-radius: var(--sg-radius-lg); background: #FFFFFF; overflow: hidden; }
  .sg-workflow-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); }
  .sg-workflow-step { min-height: 248px; padding: 28px 22px; border-right: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
  .sg-workflow-step:nth-child(5n) { border-right: 0; }
  .sg-workflow-step:nth-child(n+6) { border-bottom: 0; }
  .sg-workflow-number { color: var(--sg-accent); font-size: 16px; font-weight: 600; }
  .sg-workflow-step h3 { margin-top: 14px; font-size: 18px; font-weight: 600; line-height: 1.38; }
  .sg-workflow-step p { margin-top: 12px; color: var(--sg-muted); font-size: 16px; line-height: 1.56; }
  .sg-workflow-meta { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0; margin-top: 30px; border: 1px solid var(--sg-line); border-radius: 22px; overflow: hidden; background: #FFFFFF; }
  .sg-workflow-meta-item { padding: 25px; }
  .sg-workflow-meta-item + .sg-workflow-meta-item { border-left: 1px solid var(--sg-line); }
  .sg-workflow-meta-item h3 { font-size: 18px; font-weight: 600; }
  .sg-workflow-meta-item p { margin-top: 9px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }

  .sg-review-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 44px; border-top: 1px solid var(--sg-line); border-left: 1px solid var(--sg-line); }
  .sg-review-type { padding: 30px; border-right: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
  .sg-review-type h3 { font-size: 20px; font-weight: 600; }
  .sg-review-type p { margin-top: 12px; color: var(--sg-muted); font-size: 16px; line-height: 1.62; }
  .sg-review-type ul { margin: 16px 0 0; padding-left: 20px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-review-type li + li { margin-top: 6px; }
  .sg-qualification-note { margin-top: 28px; padding: 22px 24px; border-radius: 18px; background: var(--sg-blush); color: var(--sg-text); font-size: 17px; line-height: 1.62; }

  .sg-qa-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); margin-top: 44px; border-top: 1px solid var(--sg-line); border-left: 1px solid var(--sg-line); }
  .sg-qa-item { padding: 28px; border-right: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
  .sg-qa-item-top { display: flex; gap: 13px; align-items: center; }
  .sg-qa-icon { display: grid; place-items: center; width: 40px; height: 40px; flex: 0 0 40px; border-radius: 13px; background: var(--sg-blush); color: var(--sg-accent); }
  .sg-qa-item h3 { font-size: 19px; font-weight: 600; line-height: 1.35; }
  .sg-qa-item ul { margin: 18px 0 0; padding-left: 20px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-qa-item li + li { margin-top: 6px; }

  .sg-governance-layout { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 72px; align-items: start; }
  .sg-governance-list { border-top: 1px solid var(--sg-line); }
  .sg-governance-item { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 16px; padding: 24px 0; border-bottom: 1px solid var(--sg-line); }
  .sg-governance-icon { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 13px; background: #FFFFFF; color: var(--sg-accent); }
  .sg-governance-item h3 { font-size: 19px; font-weight: 600; }
  .sg-governance-item p { margin-top: 8px; color: var(--sg-muted); font-size: 16px; line-height: 1.6; }

  .sg-roadmap { margin-top: 46px; border-top: 1px solid var(--sg-line); }
  .sg-roadmap-row { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-bottom: 1px solid var(--sg-line); }
  .sg-roadmap-step { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 17px; padding: 28px 30px; }
  .sg-roadmap-step + .sg-roadmap-step { border-left: 1px solid var(--sg-line); }
  .sg-roadmap-number { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 14px; background: var(--sg-blush); color: var(--sg-accent); font-size: 16px; font-weight: 600; }
  .sg-roadmap-step h3 { font-size: 20px; font-weight: 600; line-height: 1.38; }
  .sg-roadmap-step p { margin-top: 9px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-scenario { margin-top: 38px; padding: 30px; border-radius: 22px; background: var(--sg-blush); }
  .sg-scenario-label { color: var(--sg-accent); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .sg-scenario h3 { margin-top: 10px; font-size: 22px; font-weight: 600; }
  .sg-scenario p { margin-top: 13px; color: var(--sg-muted); font-size: 17px; line-height: 1.65; }

  .sg-failure-list { margin-top: 44px; border-top: 1px solid var(--sg-line); }
  .sg-failure-row { display: grid; grid-template-columns: minmax(210px,.78fr) minmax(0,1fr) minmax(0,1fr); gap: 30px; padding: 26px 0; border-bottom: 1px solid var(--sg-line); }
  .sg-failure-row h3 { font-size: 18px; font-weight: 600; line-height: 1.42; }
  .sg-failure-field-label { color: var(--sg-accent-deep); font-size: 16px; font-weight: 600; line-height: 1.4; }
  .sg-failure-field p { margin-top: 7px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }

  .sg-checklist-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 46px; border-top: 1px solid #E5CBD7; border-left: 1px solid #E5CBD7; }
  .sg-checklist-group { padding: 30px; border-right: 1px solid #E5CBD7; border-bottom: 1px solid #E5CBD7; }
  .sg-checklist-group h3 { font-size: 21px; font-weight: 600; }
  .sg-checklist { list-style: none; margin: 20px 0 0; padding: 0; }
  .sg-checklist li { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 11px; align-items: start; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }
  .sg-checklist li + li { margin-top: 12px; }
  .sg-checkmark { display: grid; place-items: center; width: 22px; height: 22px; margin-top: 1px; border: 1px solid #D9B5C5; border-radius: 7px; background: #FFFFFF; color: var(--sg-accent); }
  .sg-readiness-results { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 32px; border: 1px solid #E5CBD7; border-radius: 22px; overflow: hidden; background: #FFFFFF; }
  .sg-readiness-result { padding: 26px; }
  .sg-readiness-result + .sg-readiness-result { border-left: 1px solid #E5CBD7; }
  .sg-readiness-result h3 { font-size: 18px; font-weight: 600; }
  .sg-readiness-result p { margin-top: 9px; color: var(--sg-muted); font-size: 16px; line-height: 1.58; }

  .sg-faq-panel { margin-top: 42px; border: 1px solid var(--sg-line); border-radius: var(--sg-radius-lg); overflow: hidden; background: #FFFFFF; }
  .sg-faq { border-bottom: 1px solid var(--sg-line); }
  .sg-faq:last-child { border-bottom: 0; }
  .sg-faq summary { position: relative; display: flex; align-items: center; min-height: 76px; padding: 20px 66px 20px 26px; cursor: pointer; list-style: none; color: var(--sg-text); font-size: 18px; font-weight: 600; line-height: 1.45; }
  .sg-faq summary::-webkit-details-marker { display: none; }
  .sg-faq summary::after { content: "+"; position: absolute; right: 26px; color: var(--sg-accent); font-size: 24px; font-weight: 400; }
  .sg-faq[open] summary::after { content: "−"; }
  .sg-faq-answer { padding: 0 66px 24px 26px; color: var(--sg-muted); font-size: 16px; line-height: 1.68; }
  .sg-faq-answer p + p { margin-top: 14px; }
  .sg-faq-answer ul { margin: 14px 0 0; padding-left: 20px; }
  .sg-faq-answer li + li { margin-top: 6px; }

  .sg-source-list { margin-top: 38px; border-top: 1px solid var(--sg-line); }
  .sg-source { display: grid; grid-template-columns: minmax(220px,.72fr) minmax(0,1.28fr); gap: 34px; padding: 24px 0; border-bottom: 1px solid var(--sg-line); }
  .sg-source a { color: var(--sg-accent); font-size: 16px; font-weight: 600; line-height: 1.45; }
  .sg-source p { color: var(--sg-muted); font-size: 16px; line-height: 1.6; }

  .sg-related-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; margin-top: 42px; }
  .sg-resource { min-height: 240px; padding: 28px; border: 1px solid var(--sg-line); border-radius: 22px; background: #FFFFFF; }
  .sg-resource-category { color: var(--sg-accent); font-size: 11px; font-weight: 600; letter-spacing: .11em; text-transform: uppercase; }
  .sg-resource h3 { margin-top: 12px; font-size: 21px; font-weight: 600; line-height: 1.38; }
  .sg-resource h3 a { color: inherit; }
  .sg-resource h3 a:hover, .sg-resource h3 a:focus-visible { color: var(--sg-accent); }
  .sg-resource p { margin-top: 14px; color: var(--sg-muted); font-size: 16px; line-height: 1.6; }
  .sg-resource .sg-link { margin-top: 14px; }
  .sg-related-footer { display: flex; flex-wrap: wrap; gap: 14px 28px; margin-top: 26px; }

  .sg-final-cta { padding: 88px 0; background: var(--sg-blush); }
  .sg-final-cta-panel { display: grid; grid-template-columns: minmax(0,1.1fr) minmax(350px,.9fr); gap: 64px; align-items: center; padding: 52px; border: 1px solid #E7CDD8; border-radius: var(--sg-radius-lg); background: #FFFFFF; }
  .sg-final-cta .sg-h2 { max-width: 700px; }
  .sg-final-cta p { margin-top: 20px; max-width: 720px; color: var(--sg-muted); font-size: 18px; line-height: 1.68; }
  .sg-final-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
  .sg-final-actions .sg-button { width: 100%; }

  .sg-anchor-target { scroll-margin-top: 112px; }

  @media (max-width: 1180px) {
    .sg-shell { padding-left: 40px; padding-right: 40px; }
    .sg-hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.86fr); gap: 48px; }
    .sg-route-details { grid-template-columns: 1fr; gap: 18px; }
    .sg-route-detail + .sg-route-detail { padding-top: 18px; border-top: 1px solid var(--sg-line-dark); }
    .sg-workflow-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sg-workflow-step { min-height: auto; border-right: 1px solid var(--sg-line); border-bottom: 1px solid var(--sg-line); }
    .sg-workflow-step:nth-child(5n) { border-right: 1px solid var(--sg-line); }
    .sg-workflow-step:nth-child(2n) { border-right: 0; }
    .sg-workflow-step:nth-child(n+6) { border-bottom: 1px solid var(--sg-line); }
    .sg-workflow-step:nth-last-child(-n+2) { border-bottom: 0; }
  }

  @media (max-width: 900px) {
    .sg-shell { padding-left: 24px; padding-right: 24px; }
    .sg-h1 { font-size: 42px; }
    .sg-h2 { font-size: 32px; }
    .sg-h3 { font-size: 22px; }
    .sg-hero { padding: 88px 0 76px; }
    .sg-hero-grid { grid-template-columns: 1fr; gap: 48px; }
    .sg-route-preview { max-width: 680px; }
    .sg-takeaway-header { grid-template-columns: 1fr; gap: 20px; }
    .sg-takeaway-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sg-toc-desktop { display: none; }
    .sg-mobile-toc { display: block; }
    .sg-comparison { grid-template-columns: 1fr; }
    .sg-comparison-column + .sg-comparison-column { border-left: 0; border-top: 1px solid var(--sg-line); }
    .sg-quality-layer { grid-template-columns: 50px minmax(0,1fr); align-items: start; }
    .sg-quality-layer p { grid-column: 2; }
    .sg-dimension-grid { grid-template-columns: 1fr; }
    .sg-dimension:last-child:nth-child(odd) { grid-column: auto; }
    .sg-classification-band { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sg-classification-item + .sg-classification-item { border-left: 1px solid var(--sg-line); }
    .sg-classification-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--sg-line); }
    .sg-classification-item:nth-child(4) { border-top: 1px solid var(--sg-line); }
    .sg-route-row { grid-template-columns: 1fr; gap: 24px; }
    .sg-route-details { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
    .sg-route-detail + .sg-route-detail { padding-top: 0; border-top: 0; }
    .sg-table-desktop { display: none; }
    .sg-mobile-records { display: block; }
    .sg-workflow-meta { grid-template-columns: 1fr; }
    .sg-workflow-meta-item + .sg-workflow-meta-item { border-left: 0; border-top: 1px solid var(--sg-line); }
    .sg-review-grid { grid-template-columns: 1fr; }
    .sg-qa-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sg-governance-layout { grid-template-columns: 1fr; gap: 44px; }
    .sg-roadmap-row { grid-template-columns: 1fr; }
    .sg-roadmap-step + .sg-roadmap-step { border-left: 0; border-top: 1px solid var(--sg-line); }
    .sg-failure-row { grid-template-columns: minmax(190px,.72fr) minmax(0,1fr); }
    .sg-failure-field:last-child { grid-column: 2; }
    .sg-checklist-grid { grid-template-columns: 1fr; }
    .sg-readiness-results { grid-template-columns: 1fr; }
    .sg-readiness-result + .sg-readiness-result { border-left: 0; border-top: 1px solid #E5CBD7; }
    .sg-related-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sg-final-cta-panel { grid-template-columns: 1fr; gap: 36px; }
  }

  @media (max-width: 620px) {
    .sg-shell { padding-left: 20px; padding-right: 20px; }
    .sg-h1 { font-size: 38px; }
    .sg-h2 { font-size: 30px; }
    .sg-h3 { font-size: 20px; }
    .sg-body { font-size: 17px; }
    .sg-lead { font-size: 18px; }
    .sg-section { padding: 68px 0; }
    .sg-section-dense { padding: 64px 0; }
    .sg-dark-section { padding: 68px 0; }
    .sg-hero { padding: 72px 0 64px; }
    .sg-hero-deck { font-size: 18px; }
    .sg-hero-actions { flex-direction: column; }
    .sg-hero-actions .sg-button { width: 100%; }
    .sg-hero-meta { display: grid; grid-template-columns: 1fr; gap: 12px; }
    .sg-route-preview { padding: 22px; border-radius: 24px; }
    .sg-route-preview-row { grid-template-columns: 40px minmax(0,1fr); }
    .sg-route-state { grid-column: 2; }
    .sg-takeaway-grid { grid-template-columns: 1fr; }
    .sg-takeaway { min-height: auto; }
    .sg-toc-head { display: block; }
    .sg-toc-head p { margin-top: 16px; }
    .sg-comparison-column { padding: 26px 22px; }
    .sg-quality-panel { padding: 28px 22px; border-radius: 24px; }
    .sg-quality-layer { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
    .sg-quality-layer-index { width: 40px; height: 40px; }
    .sg-dimension { grid-template-columns: 40px minmax(0,1fr); padding: 24px 20px; }
    .sg-classification-band { grid-template-columns: 1fr; }
    .sg-classification-item + .sg-classification-item { border-left: 0; border-top: 1px solid var(--sg-line); }
    .sg-route-details { grid-template-columns: 1fr; }
    .sg-route-detail + .sg-route-detail { padding-top: 18px; border-top: 1px solid var(--sg-line-dark); }
    .sg-route-row { padding: 30px 0; }
    .sg-table-frame { border-radius: 22px; }
    .sg-workflow-panel { padding: 0; border-radius: 22px; }
    .sg-workflow-grid { grid-template-columns: 1fr; }
    .sg-workflow-step,
    .sg-workflow-step:nth-child(2n),
    .sg-workflow-step:nth-child(5n),
    .sg-workflow-step:nth-child(n+6),
    .sg-workflow-step:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--sg-line); }
    .sg-workflow-step:last-child { border-bottom: 0; }
    .sg-review-type { padding: 26px 22px; }
    .sg-qa-grid { grid-template-columns: 1fr; }
    .sg-roadmap-step { grid-template-columns: 42px minmax(0,1fr); padding: 26px 0; }
    .sg-roadmap-number { width: 40px; height: 40px; }
    .sg-failure-row { grid-template-columns: 1fr; gap: 16px; }
    .sg-failure-field:last-child { grid-column: auto; }
    .sg-checklist-group { padding: 26px 22px; }
    .sg-faq summary { padding: 19px 56px 19px 20px; font-size: 17px; }
    .sg-faq summary::after { right: 20px; }
    .sg-faq-answer { padding: 0 20px 22px; }
    .sg-source { grid-template-columns: 1fr; gap: 10px; }
    .sg-related-grid { grid-template-columns: 1fr; }
    .sg-resource { min-height: auto; }
    .sg-final-cta { padding: 68px 0; }
    .sg-final-cta-panel { min-width: 0; padding: 34px 22px; border-radius: 24px; }
  }
`;

function Icon({ name, size = 22 }) {
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
  };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    layers: <><path d="m12 3-8 4 8 4 8-4-8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    route: <><path d="M6 3v7a2 2 0 0 0 2 2h8"/><path d="m13 9 3 3-3 3"/><path d="M6 21v-4"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    repeat: <><path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></>,
    eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
    voice: <><path d="M4 13h3l4 4V7L7 11H4v2Z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M17.5 6.5a8 8 0 0 1 0 11"/></>,
    brain: <><path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v.4A3.5 3.5 0 0 0 4 11a3.5 3.5 0 0 0 2 3.1v.4A3.5 3.5 0 0 0 9.5 18H11V4H9.5Z"/><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5v.4a3.5 3.5 0 0 1 2 3.1 3.5 3.5 0 0 1-2 3.1v.4a3.5 3.5 0 0 1-3.5 3.5H13V4h1.5Z"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></>,
    document: <><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></>,
    sparkle: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/></>,
    edit: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"/></>,
    pen: <><path d="m12 19 7-7 2 2-7 7-3 1 1-3Z"/><path d="m18 6-2-2L5 15l-1 4 4-1L18 6Z"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 5-4 14"/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 9v11"/></>,
    flag: <><path d="M5 21V4"/><path d="M5 5h10l-1.5 3L15 11H5"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/></>,
    tag: <><path d="M20 13 13 20l-9-9V4h7l9 9Z"/><circle cx="8.5" cy="8.5" r="1"/></>,
    alert: <><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5"/><path d="M12 17h.01"/></>,
    people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0"/><path d="M13 20a4 4 0 0 1 8 0"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
  };
  return <svg {...common}>{paths[name] || paths.sparkle}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return <a className={`sg-link ${className}`} href={href}>{children}<Icon name="arrow" size={18}/></a>;
}

const takeaways = [
  ["Do not use one workflow for the entire website", "Content varies in visibility, complexity, brand sensitivity, search value, and consequence of error."],
  ["Classify content before selecting the technology", "Choose the combination of AI and human expertise according to each content group’s purpose and risk."],
  ["Define what human review means", "Focused checking, full post-editing, creative adaptation, SEO review, specialist validation, and business approval are different tasks."],
  ["Prepare approved language assets", "Terminology, translation memory, style guidance, and previous approved translations improve consistency and reviewer efficiency."],
  ["Evaluate quality in the live website", "A linguistically correct translation may still fail because of layout, interface, SEO, variable, or component issues."],
  ["Reuse corrections and improve over time", "Approved translations, terminology decisions, and recurring error patterns should strengthen future updates."],
];

const tocGroups = [
  {
    title: "Understand the Decision",
    items: [
      ["AI Website Translation Is a Content-Routing Decision", "content-routing"],
      ["Why Human Review Still Matters", "human-review-matters"],
      ["Classify Content by Risk and Purpose", "content-risk"],
      ["Four Translation and Review Routes", "quality-routes"],
    ],
  },
  {
    title: "Build the Workflow",
    items: [
      ["Website Content Routing Matrix", "routing-matrix"],
      ["AI + Human Website Translation Workflow", "translation-workflow"],
      ["Define What Human Review Should Cover", "human-review"],
      ["Quality Assurance Before Publication", "quality-assurance"],
      ["Governance, Security, and Accountability", "governance"],
    ],
  },
  {
    title: "Plan and Apply",
    items: [
      ["A Practical Implementation Roadmap", "implementation-roadmap"],
      ["Common Failure Modes", "failure-modes"],
      ["AI Website Translation Readiness Checklist", "readiness-checklist"],
      ["Frequently Asked Questions", "frequently-asked-questions"],
      ["Sources and References", "sources"],
    ],
  },
];

const dimensions = [
  { icon: "alert", title: "Consequence of Error", text: "Consider whether a mistranslation could change an instruction, claim, obligation, safety message, billing detail, or customer decision.", prompts: ["Could the error mislead a customer?", "Could it affect safety, compliance, or access?", "Could it create support or reputational problems?"] },
  { icon: "eye", title: "Customer Visibility", text: "High-traffic, high-conversion, public, or strategically important pages deserve review that reflects their potential impact.", prompts: ["Is the content prominent in the customer journey?", "Will partners, media, or regulators see it?"] },
  { icon: "voice", title: "Brand Sensitivity", text: "Persuasive, emotional, culturally dependent, or highly distinctive language often requires professional translation or transcreation.", prompts: ["Does the message depend on tone or emotional impact?", "Would literal wording weaken the positioning?"] },
  { icon: "brain", title: "Technical or Subject-Matter Complexity", text: "Specialized legal, medical, scientific, engineering, financial, or product content requires reviewers whose qualifications match the subject matter.", prompts: ["Are approved technical terms required?", "Does the reviewer need specialist knowledge?"] },
  { icon: "search", title: "Search Importance", text: "Pages intended to attract organic traffic may need target-market keyword research, search-intent analysis, and localized metadata in addition to translation.", prompts: ["Does the page target organic demand?", "Do headings, URLs, and links need localization?"] },
  { icon: "clock", title: "Update Frequency", text: "Frequently changing content may justify automation, but high-risk updates should retain required human and specialist approval.", prompts: ["How quickly must changes be published?", "Can the review process operate at this frequency?"] },
  { icon: "repeat", title: "Reuse and Standardization", text: "Approved translation memory, terminology, templates, structured fields, and validated examples make repeatable content easier to automate consistently.", prompts: ["Is approved language already available?", "Does the content follow repeatable patterns?"] },
];

const routes = [
  {
    icon: "sparkle",
    kicker: "Route 1",
    title: "AI Translation With Focused Human Review",
    fit: ["Routine informational updates", "Selected knowledge-base content", "Structured product attributes", "Standard interface labels"],
    checks: ["Major meaning errors", "Omissions and terminology", "Variables and formatting", "Obvious fluency issues"],
    escalate: "Escalate when content is persuasive, highly visible, specialized, unclear, or consequential.",
  },
  {
    icon: "edit",
    kicker: "Route 2",
    title: "AI Translation With Full Post-Editing",
    fit: ["General product pages", "Standard service descriptions", "Customer onboarding content", "Substantial help-center articles"],
    checks: ["Accuracy and completeness", "Grammar and fluency", "Terminology and consistency", "Style and publication readiness"],
    escalate: "Add SEO, creative, legal, regulatory, or subject-matter review when the page requires it.",
  },
  {
    icon: "pen",
    kicker: "Route 3",
    title: "Professional Translation or Transcreation",
    fit: ["Homepage messaging", "Campaign landing pages", "Slogans and taglines", "High-value conversion content"],
    checks: ["Brand voice", "Persuasive impact", "Cultural relevance", "Market-appropriate calls to action"],
    escalate: "Add specialist approval when claims, offers, or regulated statements carry additional risk.",
  },
  {
    icon: "shield",
    kicker: "Route 4",
    title: "Specialist Translation and Validation",
    fit: ["Privacy and consent language", "Regulated claims", "Medical or safety information", "Financial or complex technical content"],
    checks: ["Subject-matter accuracy", "Controlled terminology", "Risk and compliance meaning", "Formal approval and traceability"],
    escalate: "Publication may also require legal, regulatory, medical, engineering, or market-owner authorization.",
  },
];

const routingRows = [
  ["Navigation and interface labels", "Route 1 or 2", "Clarity, consistency, available space, and the action the label controls.", "Escalate when labels are ambiguous, space is constrained, or the action is critical."],
  ["General informational pages", "Route 2", "Accuracy, fluency, terminology, and readability.", "Escalate for high visibility, specialized subject matter, or important claims."],
  ["Homepage messaging", "Route 3", "Brand voice, positioning, persuasion, and customer response.", "Add specialist validation when the page contains consequential claims."],
  ["Product and service pages", "Route 2", "Features, benefits, terminology, conversion value, and customer expectations.", "Escalate when content is technical, regulated, safety-related, or strategically critical."],
  ["Ecommerce catalogs", "Route 1 or 2", "Volume, structured attributes, consistency, and search terminology.", "Escalate for persuasive copy, specialist terminology, or risk disclosures."],
  ["Campaign landing pages", "Route 3", "Market relevance, conversion, emotional impact, and brand consistency.", "Add legal or specialist review for qualified offers or regulated claims."],
  ["Knowledge-base articles", "Route 1 or 2", "Clarity, completeness, repeatability, and customer task success.", "Escalate when instructions affect billing, access, safety, or compliance."],
  ["Technical content", "Route 2 or 4", "Technical accuracy, terminology, procedures, and operating context.", "Use specialist validation when an error could affect operation, safety, or compliance."],
  ["Blogs and thought leadership", "Route 2 or 3", "Voice, credibility, audience engagement, and cultural relevance.", "Escalate for executive voice, sensitive positioning, or high-profile publication."],
  ["SEO landing pages", "Route 2 plus SEO review", "Keywords, search intent, metadata, headings, URLs, and internal links.", "Increase localization when target-market intent differs substantially from the source market."],
  ["Legal and privacy content", "Route 4", "Legal meaning, local requirements, terminology, and formal approval.", "Add local counsel or designated legal authorization when required."],
  ["Medical or regulated content", "Route 4", "Controlled terminology, claims, safety meaning, and compliance requirements.", "Add market-specific regulatory validation where required."],
  ["User-generated content", "Separate operating policy", "Volume, moderation, privacy, immediacy, and customer risk.", "Escalate when content affects safety, reputation, or legal obligations."],
];

const workflowSteps = [
  ["Inventory the Content", "Identify pages, navigation, metadata, forms, interface strings, media, downloads, structured data, and dynamic content."],
  ["Prepare the Source", "Remove outdated content, resolve ambiguity, standardize product language, and identify reusable components."],
  ["Classify and Route", "Record the translation route, reviewer, quality standard, escalation criteria, and approval authority."],
  ["Prepare Language Assets", "Provide terminology, translation memory, style guidance, market instructions, and approved reference content."],
  ["Translate", "Process content through focused review, full post-editing, professional translation, transcreation, or specialist validation."],
  ["Perform Human Review", "Give reviewers page context, quality expectations, language assets, instructions, and a clear escalation path."],
  ["Run Quality Assurance", "Check completeness, terminology, variables, numbers, formatting, repeated strings, and metadata."],
  ["Test in Website Context", "Validate navigation, forms, links, responsive behavior, text expansion, right-to-left presentation, and user journeys."],
  ["Approve and Publish", "Confirm required linguistic, specialist, business, and market approvals before releasing the correct version."],
  ["Reuse and Improve", "Store approved language, analyze recurring errors, refine routing, and improve future multilingual updates."],
];

const reviewTypes = [
  ["Focused Human Review", "Identify significant translation problems in structured or lower-risk content.", ["Incorrect meaning or omissions", "Key terminology", "Obvious fluency issues", "Variables and formatting"]],
  ["Full Post-Editing", "Bring AI or machine translation output to the required publication standard.", ["Complete accuracy and readability", "Grammar and syntax", "Terminology and consistency", "Style and completeness"]],
  ["Independent Linguistic Review", "Provide a second evaluation when the workflow requires independent review.", ["Source-to-target accuracy", "Style and terminology compliance", "Unresolved ambiguity", "Release suitability"]],
  ["Creative Review", "Ensure persuasive and brand-sensitive content achieves the intended effect in the target market.", ["Tone and emotional impact", "Cultural fit", "Brand personality", "Calls to action"]],
  ["SEO Review", "Align the localized page with target-market search behavior and international site strategy.", ["Keyword selection", "Search intent", "Metadata and headings", "URLs and internal links"]],
  ["Specialist or Business Review", "Validate domain meaning, risk, local suitability, and final organizational approval.", ["Subject-matter accuracy", "Regulated or safety meaning", "Commercial details", "Authorization to publish"]],
];

const responsibilityRows = [
  ["Focused review", "Catch significant errors", "Linguist or post-editor", "Localization owner"],
  ["Full post-editing", "Achieve publication quality", "Professional post-editor", "Localization or content owner"],
  ["Creative review", "Preserve impact and brand voice", "Transcreator or market copywriter", "Marketing or brand owner"],
  ["SEO review", "Match target-market search behavior", "Multilingual SEO specialist", "SEO or digital owner"],
  ["Specialist review", "Validate domain meaning", "Qualified subject-matter expert", "Legal, medical, technical, financial, or regulatory owner"],
  ["Website QA", "Validate the live-page experience", "Linguistic and web QA specialists", "Web or localization owner"],
  ["Market approval", "Authorize the local release", "In-country business stakeholder", "Designated market owner"],
];

const qaItems = [
  ["document", "Linguistic Quality", ["Accuracy and completeness", "Fluency and grammar", "Terminology and consistency", "Style, tone, and audience fit"]],
  ["sparkle", "Automated Quality Checks", ["Missing or untranslated content", "Numbers and placeholders", "Terminology deviations", "Tags and formatting"]],
  ["layout", "Interface and Functional Quality", ["Navigation and menus", "Forms and messages", "Search, links, and filters", "Critical customer journeys"]],
  ["mobile", "Visual and Responsive Quality", ["Text expansion and wrapping", "Buttons and headings", "Mobile and tablet layouts", "Font and right-to-left support"]],
  ["globe", "Market-Specific Details", ["Dates, times, currencies, and units", "Addresses and telephone formats", "Offers and product availability", "Imagery and cultural references"]],
  ["search", "Multilingual SEO Quality", ["Search intent and keywords", "Titles, descriptions, and headings", "URLs and internal anchor text", "Indexability, canonical, and hreflang planning"]],
];

const governanceItems = [
  ["lock", "Approved Technology", "Define which AI and translation systems may be used, which content they may process, who may initiate work, and how system changes are evaluated."],
  ["shield", "Content Sensitivity", "Identify personal data, confidential business information, unreleased products, legal strategy, regulated content, and security-sensitive instructions."],
  ["people", "Role Ownership", "Assign responsibility for source quality, classification, terminology, translation, review, specialist approval, testing, publication, and correction."],
  ["document", "Traceability", "Maintain appropriate records of source versions, routes, language assets, reviewers, approvals, terminology decisions, and exceptions."],
  ["route", "Escalation and Monitoring", "Define when content must be clarified, retranslated, moved to a higher route, reviewed by a specialist, withheld, or corrected after release."],
];

const roadmap = [
  ["Define the Business Goals", "Clarify target markets, launch priorities, customer journeys, update frequency, expected quality, approval needs, and operating constraints."],
  ["Inventory the Website", "Map page types, content volume, metadata, interface strings, dynamic content, forms, media, downloads, integrations, and exclusions."],
  ["Segment the Content", "Group pages and components by purpose, audience, visibility, risk, complexity, search importance, and update frequency."],
  ["Assign Quality Routes", "Document the translation method, human-review level, reviewer qualifications, escalation criteria, and final approval owner."],
  ["Prepare Language Assets", "Collect approved terminology, translation memory, previous translations, brand guidance, product naming rules, and market instructions."],
  ["Select Representative Pilot Content", "Test structured, general, brand-sensitive, technical, search-focused, high-risk, and recurring content rather than only easy pages."],
  ["Define Acceptance Criteria", "Agree on accuracy, terminology, fluency, style, completeness, website fit, specialist accuracy, reviewer effort, and escalation."],
  ["Run and Evaluate the Pilot", "Review results by language, content type, quality route, error category, reviewer role, source quality, and business suitability."],
  ["Refine the Workflow", "Adjust source-writing practices, language assets, instructions, reviewer guidance, routing rules, approvals, escalation, and website QA."],
  ["Scale Gradually", "Automate repeatable routing, retain escalation paths, reuse approved language, monitor quality, and revisit classifications as requirements change."],
];

const failures = [
  ["Translating the entire website with one method", "Content purpose and risk vary too widely.", "Segment the website and assign routes by content group."],
  ["Treating human review as a checkbox", "Reviewers do not know whether to check major errors, rewrite for publication, adapt the brand, or approve specialist meaning.", "Define the task, criteria, qualifications, and decision authority."],
  ["Using the same reviewer for every content type", "General linguistic expertise does not automatically include SEO, legal, medical, technical, regulatory, or creative expertise.", "Match reviewer competence to the content and required approval."],
  ["Ignoring source-content quality", "Ambiguous, inconsistent, and outdated source language creates downstream inconsistency in every target language.", "Improve the source and route unresolved questions back to the owner."],
  ["Translating without terminology controls", "Products, features, and technical concepts may be translated differently across pages and updates.", "Establish approved terminology and make it available to systems and reviewers."],
  ["Reviewing content only in a translation file", "Layout, interaction, responsive, and component issues remain hidden.", "Perform linguistic and functional QA in the actual website experience."],
  ["Translating keywords literally", "Target-market customers may search with different language, phrasing, or intent.", "Add multilingual keyword research and SEO review to search-important pages."],
  ["Failing to reuse approved corrections", "The same errors recur and review effort remains unnecessarily high.", "Update translation memory, terminology, instructions, and routing rules."],
  ["Allowing urgent updates to bypass governance", "High-risk changes may be published without mandatory approval.", "Create an expedited route that preserves required review and escalation."],
  ["Measuring only speed or cost", "The workflow may look efficient while creating corrections, inconsistency, customer confusion, or reputational risk.", "Measure suitability, reviewer effort, corrections, and operational reliability as well."],
];

const checklistGroups = [
  ["Content Readiness", ["The source website has a clear content owner.", "Outdated and duplicate pages have been identified.", "Content is grouped by purpose and type.", "High-visibility and high-risk pages are known.", "Dynamic content, forms, metadata, and interface strings are included.", "Content that should remain untranslated is documented."]],
  ["Language Assets", ["Product and industry terminology is approved.", "Translation memory is available or planned.", "Brand and style guidance is documented.", "Target-language and regional variants are defined.", "Previous approved translations have been collected.", "Product names and prohibited translations are documented."]],
  ["Routing and Human Review", ["Each content group has an assigned translation route.", "The scope of human review is defined.", "Reviewers have appropriate language and subject expertise.", "Specialist escalation criteria are documented.", "Final approval responsibilities are clear.", "High-risk pages cannot bypass required approval."]],
  ["Technology and Security", ["Approved AI and translation systems are identified.", "Sensitive-content rules are documented.", "Access and user roles are established.", "Content transfer and storage requirements are understood.", "Integration ownership is assigned.", "System or model changes can be evaluated."]],
  ["Quality Assurance", ["Linguistic acceptance criteria are defined.", "Terminology and automated checks are planned.", "In-context website testing is included.", "Responsive and mobile testing is included.", "SEO review is assigned to search-important pages.", "Specialist content has an appropriate approval route."]],
  ["Ongoing Operations", ["New and changed source content can be identified.", "Approved corrections will be reused.", "Translation memory and terminology will be maintained.", "Exceptions and recurring errors will be tracked.", "Localized releases can be synchronized.", "The workflow has an owner and review cadence."]],
];

const faqs = [
  ["Can AI translate an entire website?", "AI can process a large share of website content, but the ability to generate a translation does not mean every page is ready for unreviewed publication. Classify content and assign review according to visibility, risk, brand sensitivity, search importance, technical complexity, and consequence of error."],
  ["Does every AI translation need human review?", "The depth of review can vary. Structured, lower-risk content may need focused review. General customer-facing content may need full post-editing. Brand-sensitive pages may require professional translation or transcreation. Legal, regulated, technical, medical, and safety-related content may require specialist validation and organizational approval."],
  ["What is the difference between human review and post-editing?", "Human review is a broad term. Post-editing specifically involves editing non-human translation output. Full post-editing addresses accuracy, completeness, grammar, fluency, terminology, style, and suitability for the intended quality level. Other review types may focus on major errors, brand voice, SEO, specialist meaning, or business approval."],
  ["Which website pages need professional human translation?", "Professional translation or transcreation is especially valuable for homepages, campaign landing pages, slogans, high-value product positioning, executive communications, culturally sensitive messages, and pages where voice and persuasion strongly influence customer response."],
  ["When is specialist review required?", "Consider specialist review when an error could affect legal meaning, patient or user safety, regulated claims, financial decisions, product operation, compliance, or contractual obligations. The reviewer may be a subject-matter linguist, lawyer, medical reviewer, engineer, regulatory professional, or other qualified expert."],
  ["Can AI translation support multilingual SEO?", "Yes. AI can assist with first-pass language production, but multilingual SEO also requires target-market keyword research, search-intent analysis, localized headings, metadata, anchor text, URLs, and internal links. Search-important pages should provide genuine value to the target audience rather than functioning as mechanically translated copies."],
  ["How do translation memory and terminology improve AI translation?", "Translation memory stores approved translations for reuse, while terminology management controls preferred words and phrases. Together they improve consistency, reduce repetitive work, preserve approved product language, support updates, and give reviewers stronger reference material. They do not remove the need to validate new context."],
  ["How should frequently updated content be handled?", "Detect the change, classify its risk, route it through the appropriate translation and review process, test it where necessary, publish it in coordination with the source release, and store the approved language for future reuse. Lower-risk changes may use streamlined review, while high-risk changes should retain specialist approval."],
  ["How can AI website translation quality be evaluated?", "Use representative content and evaluate results by target language, content type, assigned route, error category, terminology adherence, reviewer effort, website context, and business suitability. Avoid relying only on one overall score because performance can vary across languages and page types."],
  ["Can one workflow be used for every target language?", "The governance model can remain consistent, but individual languages may require adjustments for linguistic structure, text expansion, script and font support, right-to-left presentation, market terminology, reviewer availability, AI output quality, and regional requirements."],
  ["Is AI-translated website content acceptable for search engines?", "Search-engine guidance focuses on whether content is helpful, reliable, and created for people, not simply whether AI was involved. AI-translated pages should be reviewed for audience value, accuracy, search intent, differentiation, and complete localization. Large volumes of low-value content created mainly to manipulate rankings can violate search spam policies."],
];

const resources = [
  ["Localization Guide", "How to Translate a Website", "Plan the complete website translation journey, from content assessment and workflow selection through SEO, testing, launch, and ongoing updates.", "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/"],
  ["Technology Planning", "Website Translation Workflows", "Compare CMS connectors, translation APIs, website translation proxy technology, and file-based workflows.", "https://www.stepes.com/resources/localization-guides/website-translation-workflows/"],
  ["Testing Checklist", "Website Localization Testing Checklist", "Review linguistic, visual, responsive, functional, right-to-left, and market-specific requirements before launch.", "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/"],
  ["International Search", "Multilingual SEO Guide", "Connect localized content with target-market keywords, search intent, metadata, URLs, and international site architecture.", "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/"],
  ["Ongoing Operations", "Continuous Website Localization", "Create a repeatable process for detecting, translating, reviewing, and publishing new and changed website content.", "https://www.stepes.com/resources/localization-guides/continuous-website-localization/"],
];

export default function AIWebsiteTranslationWithHumanReviewWireframe() {
  const allTocItems = tocGroups.flatMap(group => group.items);
  return (
    <main className="stepes-guide-wireframe">
      <style>{styles}</style>

      <section className="sg-hero">
        <div className="sg-shell sg-hero-grid">
          <div className="sg-hero-copy">
            <div className="sg-eyebrow">AI + Human Quality</div>
            <h1 className="sg-h1">AI Website Translation With Human Review</h1>
            <p className="sg-hero-deck">
              Learn how to classify website content by risk, route each page through the right combination of AI translation and human expertise, and establish the quality controls needed for multilingual publishing.
            </p>
            <div className="sg-hero-actions">
              <a className="sg-button sg-button-primary" href={`${CANONICAL}#quality-routes`}>Explore the Four Routes <Icon name="arrow" size={18}/></a>
              <a className="sg-button sg-button-secondary" href={`${CANONICAL}#readiness-checklist`}>Jump to the Checklist</a>
            </div>
            <div className="sg-hero-meta" aria-label="Guide features">
              <span className="sg-meta-item"><Icon name="route" size={17}/>Quality-routing framework</span>
              <span className="sg-meta-item"><Icon name="layout" size={17}/>Website content matrix</span>
              <span className="sg-meta-item"><Icon name="target" size={17}/>10-step roadmap</span>
              <span className="sg-meta-item"><Icon name="check" size={17}/>Readiness checklist</span>
            </div>
          </div>

          <div className="sg-route-preview" aria-label="Preview of the AI and human review routing framework">
            <div className="sg-preview-label">Quality-Routing Preview</div>
            <div className="sg-preview-title">Match the review route to the purpose and risk of each content type.</div>
            <div className="sg-preview-source">
              <span className="sg-preview-source-icon"><Icon name="globe" size={20}/></span>
              <span>Website content classified by visibility, brand sensitivity, search value, subject matter, and consequence of error</span>
            </div>
            <div className="sg-route-list">
              {routes.map((route) => (
                <div className="sg-route-preview-row" key={route.kicker}>
                  <span className="sg-route-icon"><Icon name={route.icon} size={20}/></span>
                  <div>
                    <div className="sg-route-name">{route.title}</div>
                    <div className="sg-route-fit">{route.fit[0]}</div>
                  </div>
                  <span className="sg-route-state">Matched</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section-dense sg-section-blush" id="key-takeaways">
        <div className="sg-shell">
          <div className="sg-takeaway-header">
            <div>
              <div className="sg-eyebrow">Key Takeaways</div>
              <h2 className="sg-h2">Use AI Where It Helps and Human Expertise Where It Matters</h2>
            </div>
            <p className="sg-lead">The strongest website translation programs do not choose one method for every page. They define a practical quality route for each content group.</p>
          </div>
          <div className="sg-takeaway-grid">
            {takeaways.map(([title, text]) => (
              <div className="sg-takeaway" key={title}>
                <div className="sg-takeaway-top">
                  <span className="sg-takeaway-icon"><Icon name="check" size={17}/></span>
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section-dense sg-toc-wrap" aria-labelledby="in-this-guide-heading">
        <div className="sg-shell">
          <div className="sg-toc-head">
            <h2 className="sg-h2" id="in-this-guide-heading">In This Guide</h2>
            <p>Move from content classification and review routing to workflow design, governance, implementation, and readiness planning.</p>
          </div>
          <div className="sg-toc-grid sg-toc-desktop">
            {tocGroups.map((group) => (
              <nav className="sg-toc-group" aria-label={group.title} key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([label, id]) => (
                    <li key={id}><a href={`${CANONICAL}#${id}`}><span className="sg-toc-dot"/><span>{label}</span></a></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <details className="sg-mobile-toc">
            <summary>Explore Guide Sections</summary>
            <nav className="sg-mobile-toc-content" aria-label="Guide sections">
              {allTocItems.map(([label, id]) => <a href={`${CANONICAL}#${id}`} key={id} onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>{label}</a>)}
            </nav>
          </details>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="content-routing">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">AI Website Translation Is a Content-Routing Decision</h2>
            <p className="sg-lead">The practical decision is not simply whether to use AI or a professional linguist. It is what combination of automation and human expertise each content type requires.</p>
          </div>
          <div className="sg-reading sg-copy-stack">
            <p className="sg-body">A single website may contain navigation labels, product descriptions, ecommerce catalogs, campaign pages, technical instructions, support articles, search-optimized content, legal notices, and regulated information. These content types do not serve the same purpose or create the same risk when translated poorly.</p>
            <p className="sg-body">Applying a specialist workflow to every sentence can slow publishing and consume review resources where they add little value. Applying lightly reviewed AI translation to every page can expose important brand, legal, technical, and customer-facing content to avoidable risk.</p>
            <p className="sg-body">A better model assigns each content group to a translation and review route based on its purpose, audience, complexity, visibility, and potential impact.</p>
          </div>
          <div className="sg-reading-wide sg-comparison">
            <div className="sg-comparison-column">
              <div className="sg-comparison-label">Uniform Workflow</div>
              <h3>One Method for Every Page</h3>
              <ul className="sg-quiet-list">
                <li><Icon name="alert" size={19}/><span>Uses the same translation and review level across unrelated content types.</span></li>
                <li><Icon name="alert" size={19}/><span>May over-review repetitive, structured, and lower-risk content.</span></li>
                <li><Icon name="alert" size={19}/><span>May under-review high-visibility, specialist, or consequential content.</span></li>
                <li><Icon name="alert" size={19}/><span>Treats “human review” as one generic step with unclear responsibility.</span></li>
              </ul>
            </div>
            <div className="sg-comparison-column">
              <div className="sg-comparison-label">Risk-Based Workflow</div>
              <h3>Review Matched to Content Purpose</h3>
              <ul className="sg-quiet-list">
                <li><Icon name="check" size={19}/><span>Matches the translation method to the value and risk of each content group.</span></li>
                <li><Icon name="check" size={19}/><span>Uses focused review where it is sufficient and efficient.</span></li>
                <li><Icon name="check" size={19}/><span>Escalates high-impact content to qualified creative or specialist experts.</span></li>
                <li><Icon name="check" size={19}/><span>Balances quality, speed, accountability, and business value.</span></li>
              </ul>
            </div>
          </div>
          <div className="sg-reading" style={{marginTop: 24}}>
            <ArrowLink href="https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/">See the Complete Website Translation Process</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section-soft sg-anchor-target" id="human-review-matters">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Why Human Review Still Matters</h2>
            <p className="sg-lead">AI can generate fluent and useful first-pass content, but fluency alone does not establish that a translation is suitable for publication.</p>
          </div>
          <div className="sg-reading sg-copy-stack">
            <p className="sg-body">Human review adds value when meaning depends on page context, customer expectations, brand intent, specialized knowledge, target-market search behavior, or the consequences of an error.</p>
            <h3 className="sg-h3">Context Beyond Individual Sentences</h3>
            <p className="sg-body">A short phrase may be a heading, button, product filter, form instruction, error message, legal qualification, or link in a larger customer journey. A translation that appears correct in a file may become confusing when placed beside an image, control, form field, or related paragraph.</p>
            <h3 className="sg-h3">Brand, Search, and Subject-Matter Judgment</h3>
            <p className="sg-body">Homepage headlines, campaign concepts, calls to action, product positioning, market-specific keywords, legal statements, technical instructions, and regulated claims require different kinds of human judgment. The right reviewer may be a linguist, transcreator, SEO specialist, engineer, medical reviewer, legal professional, or designated market owner.</p>
            <h3 className="sg-h3">The Live Website Experience</h3>
            <p className="sg-body">Quality also depends on whether translated content fits components, preserves links and variables, works in forms, displays correctly on mobile, supports right-to-left presentation where applicable, and maintains the intended hierarchy.</p>
          </div>
          <div className="sg-reading-wide sg-quality-panel">
            <div className="sg-eyebrow sg-eyebrow-dark">Five-Layer Quality Model</div>
            <h3 className="sg-h3">Language Quality Is Only One Layer of Website Quality</h3>
            <p className="sg-quality-panel-intro">A reliable release validates the translation itself, the intended customer response, the subject matter, the website experience, and the final business approval.</p>
            <div className="sg-quality-layers">
              {[
                ["01", "Linguistic Accuracy", "The translation communicates the source meaning correctly and completely."],
                ["02", "Audience and Brand Fit", "The wording is appropriate for the customer, market, purpose, and brand voice."],
                ["03", "Terminology and Subject-Matter Accuracy", "Specialized concepts and approved language are used correctly."],
                ["04", "Functional Website Quality", "The content works inside the page, interface, responsive layout, and user journey."],
                ["05", "Business and Compliance Approval", "The correct organizational owner has authorized the content for publication."],
              ].map(([n,title,text]) => (
                <div className="sg-quality-layer" key={n}>
                  <span className="sg-quality-layer-index">{n}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="content-risk">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Classify Website Content by Risk and Purpose</h2>
            <p className="sg-lead">The required level of review should be based on business purpose and consequence of error, not simply word count or page type.</p>
          </div>
          <div className="sg-reading sg-copy-stack">
            <p className="sg-body">A frequently updated support article may contain thousands of words but carry moderate business risk. A short medical warning may contain only two sentences but have serious consequences if translated incorrectly. A homepage headline may be factually simple yet highly important to brand perception and conversion.</p>
            <p className="sg-body">Evaluate each content group across seven dimensions before assigning a translation route.</p>
          </div>
          <div className="sg-reading-wide sg-dimension-grid">
            {dimensions.map((item) => (
              <div className="sg-dimension" key={item.title}>
                <span className="sg-dimension-icon"><Icon name={item.icon} size={20}/></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>{item.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
          <div className="sg-reading-wide sg-classification-band" aria-label="Recommended content classification levels">
            {[
              ["Lower", "Repetitive, structured, and low-consequence content."],
              ["Moderate", "General customer-facing content requiring publication quality."],
              ["Higher", "High-visibility, persuasive, technical, or business-critical content."],
              ["Specialist", "Legal, regulated, safety-related, medical, financial, or similarly sensitive content."],
            ].map(([title,text]) => <div className="sg-classification-item" key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
          <div className="sg-reading" style={{marginTop: 24}}><p className="sg-body">These levels guide judgment. They should not be treated as an exact numerical risk score or a substitute for professional review.</p></div>
        </div>
      </section>

      <section className="sg-dark-section sg-anchor-target" id="quality-routes">
        <div className="sg-shell">
          <div className="sg-reading-wide">
            <div className="sg-eyebrow sg-eyebrow-dark">Quality-Routing Framework</div>
            <h2 className="sg-h2">Four Translation and Review Routes</h2>
            <p className="sg-lead">Most website content can begin with one of four routes. Individual pages or components should be escalated when their risk, complexity, or business importance is higher than the surrounding content.</p>
            <div className="sg-route-framework">
              {routes.map((route) => (
                <div className="sg-route-row" key={route.kicker}>
                  <div className="sg-route-heading">
                    <span className="sg-route-heading-icon"><Icon name={route.icon} size={22}/></span>
                    <div>
                      <div className="sg-route-kicker">{route.kicker}</div>
                      <h3>{route.title}</h3>
                    </div>
                  </div>
                  <div className="sg-route-details">
                    <div className="sg-route-detail"><div className="sg-route-detail-label">Typical Fit</div><ul>{route.fit.map(x => <li key={x}>{x}</li>)}</ul></div>
                    <div className="sg-route-detail"><div className="sg-route-detail-label">Human Review Focus</div><ul>{route.checks.map(x => <li key={x}>{x}</li>)}</ul></div>
                    <div className="sg-route-detail"><div className="sg-route-detail-label">Escalation</div><p>{route.escalate}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sg-dark-note"><strong>The routes are not a quality ranking.</strong> Route 4 is not automatically better than Route 1. Each route represents a different type of control for a different content need.</div>
            <div className="sg-dark-links">
              <ArrowLink href="https://www.stepes.com/machine-translation-post-editing/">Machine Translation Post-Editing</ArrowLink>
              <ArrowLink href="https://www.stepes.com/professional-translation-services/">Professional Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="routing-matrix">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Website Content Routing Matrix</h2>
            <p className="sg-lead">Content categories provide a useful starting point, but the final route should reflect the target market, language, industry, source quality, customer journey, and available language assets.</p>
          </div>
          <div className="sg-reading-wide sg-table-frame">
            <div className="sg-table-desktop">
              <table className="sg-table">
                <thead><tr><th style={{width:"22%"}}>Website Content Type</th><th style={{width:"18%"}}>Typical Starting Route</th><th style={{width:"29%"}}>Primary Considerations</th><th style={{width:"31%"}}>Escalate When</th></tr></thead>
                <tbody>{routingRows.map(([type,route,considerations,escalation]) => <tr key={type}><td><strong>{type}</strong></td><td><span className="sg-route-tag">{route}</span></td><td>{considerations}</td><td>{escalation}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="sg-mobile-records">
              {routingRows.map(([type,route,considerations,escalation]) => (
                <article className="sg-record" key={type}>
                  <h3>{type}</h3>
                  <div className="sg-record-field"><div className="sg-record-label">Recommended Starting Route</div><div className="sg-record-value">{route}</div></div>
                  <div className="sg-record-field"><div className="sg-record-label">Primary Considerations</div><div className="sg-record-value">{considerations}</div></div>
                  <div className="sg-record-field"><div className="sg-record-label">Escalate When</div><div className="sg-record-value">{escalation}</div></div>
                </article>
              ))}
            </div>
          </div>
          <div className="sg-reading-wide"><p className="sg-table-note">A single page may combine several content types. Structured specifications, persuasive copy, safety information, and legal qualifications on one product page may require different routes within the same page.</p></div>
        </div>
      </section>

      <section className="sg-section sg-section-soft sg-anchor-target" id="translation-workflow">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">The AI + Human Website Translation Workflow</h2>
            <p className="sg-lead">Reliable AI website translation begins before content reaches an AI system and continues after the translation is linguistically approved.</p>
          </div>
          <div className="sg-reading-wide sg-workflow-panel">
            <div className="sg-workflow-grid">
              {workflowSteps.map(([title,text], index) => (
                <div className="sg-workflow-step" key={title}>
                  <div className="sg-workflow-number">{String(index + 1).padStart(2,"0")}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sg-reading-wide sg-workflow-meta">
            <div className="sg-workflow-meta-item"><h3>Required Inputs</h3><p>Source content, page context, languages and markets, terminology, translation memory, style guidance, review criteria, reviewer assignments, and publication rules.</p></div>
            <div className="sg-workflow-meta-item"><h3>Controlled Outputs</h3><p>Approved translated content, updated translation memory, resolved terminology, QA results, tracked exceptions, and publication approval.</p></div>
            <div className="sg-workflow-meta-item"><h3>Exception Handling</h3><p>Return ambiguous source text, escalate unsuitable output, add specialist review, and separate mixed-risk components when one route is not sufficient.</p></div>
          </div>
          <div className="sg-reading" style={{marginTop: 28}}>
            <p className="sg-body">The technical method used to move content between the website and translation environment is a separate architecture decision.</p>
            <ArrowLink href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">Compare Website Translation Workflows</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="human-review">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Define What Human Review Should Cover</h2>
            <p className="sg-lead">Human review is effective only when the reviewer’s role, scope, qualifications, inputs, and acceptance criteria are clearly defined.</p>
          </div>
          <div className="sg-reading-wide sg-review-grid">
            {reviewTypes.map(([title,text,checks]) => (
              <article className="sg-review-type" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{checks.map(check => <li key={check}>{check}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="sg-reading-wide sg-table-frame">
            <div className="sg-table-desktop">
              <table className="sg-table">
                <thead><tr><th>Review Type</th><th>Main Objective</th><th>Typical Reviewer</th><th>Final Authority</th></tr></thead>
                <tbody>{responsibilityRows.map(row => <tr key={row[0]}>{row.map((value,i) => <td key={i}>{i===0?<strong>{value}</strong>:value}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <div className="sg-mobile-records">
              {responsibilityRows.map(([type,objective,reviewer,authority]) => <article className="sg-record" key={type}><h3>{type}</h3><div className="sg-record-field"><div className="sg-record-label">Main Objective</div><div className="sg-record-value">{objective}</div></div><div className="sg-record-field"><div className="sg-record-label">Typical Reviewer</div><div className="sg-record-value">{reviewer}</div></div><div className="sg-record-field"><div className="sg-record-label">Final Authority</div><div className="sg-record-value">{authority}</div></div></article>)}
            </div>
          </div>
          <div className="sg-reading-wide sg-qualification-note"><strong>Reviewer qualification must match the task.</strong> Speaking the target language does not by itself qualify someone to perform SEO, legal, medical, technical, regulatory, creative, or final business review.</div>
        </div>
      </section>

      <section className="sg-section sg-section-soft sg-anchor-target" id="quality-assurance">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Quality Assurance Before Publication</h2>
            <p className="sg-lead">A translation can read well and still fail in production. Final quality requires linguistic, technical, visual, search, market, and approval checks.</p>
          </div>
          <div className="sg-reading-wide sg-qa-grid">
            {qaItems.map(([icon,title,items]) => (
              <article className="sg-qa-item" key={title}>
                <div className="sg-qa-item-top"><span className="sg-qa-icon"><Icon name={icon} size={20}/></span><h3>{title}</h3></div>
                <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="sg-reading sg-copy-stack" style={{marginTop: 34}}>
            <p className="sg-body">Search-important localized pages should be useful and relevant in their own right. Review target-market intent, metadata, headings, internal anchor text, localized URL strategy, canonical configuration, indexability, and reciprocal hreflang planning.</p>
            <p className="sg-body">Before publication, confirm that the assigned route was followed, required reviewers completed their work, high-risk issues were escalated, open questions were resolved, and the correct language and market version is being released.</p>
            <div style={{display:"flex", flexWrap:"wrap", gap:"10px 28px"}}>
              <ArrowLink href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">Website Localization Testing Checklist</ArrowLink>
              <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">Multilingual SEO Guide</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="governance">
        <div className="sg-shell sg-governance-layout">
          <div>
            <div className="sg-eyebrow">Enterprise Controls</div>
            <h2 className="sg-h2">Governance, Security, and Accountability</h2>
            <p className="sg-lead">A scalable program needs clear rules for technology, content access, approval, risk, and ownership across the entire multilingual content lifecycle.</p>
            <div style={{marginTop: 26, display:"flex", flexWrap:"wrap", gap:"10px 28px"}}>
              <ArrowLink href="https://www.stepes.com/security-and-compliance/">Security and Compliance</ArrowLink>
              <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</ArrowLink>
            </div>
          </div>
          <div className="sg-governance-list">
            {governanceItems.map(([icon,title,text]) => (
              <div className="sg-governance-item" key={title}>
                <span className="sg-governance-icon"><Icon name={icon} size={20}/></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section-soft sg-anchor-target" id="implementation-roadmap">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">A Practical Implementation Roadmap</h2>
            <p className="sg-lead">Start with a controlled pilot, validate quality by route and language, and expand only after review criteria, responsibilities, and escalation paths are proven.</p>
          </div>
          <div className="sg-reading-wide sg-roadmap">
            {[0,2,4,6,8].map((start) => (
              <div className="sg-roadmap-row" key={start}>
                {[start, start+1].map((index) => {
                  const [title,text] = roadmap[index];
                  return <article className="sg-roadmap-step" key={title}><span className="sg-roadmap-number">{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>;
                })}
              </div>
            ))}
          </div>
          <div className="sg-reading-wide sg-scenario">
            <div className="sg-scenario-label">Illustrative Scenario</div>
            <h3>A Coordinated Workflow With Different Quality Controls</h3>
            <p>A software company might route recurring interface labels through focused review, standard product pages through full post-editing, launch headlines through transcreation, technical security documentation through a subject-matter linguist, and privacy language through linguistic and legal review.</p>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="failure-modes">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Common Failure Modes</h2>
            <p className="sg-lead">Most failures result from weak routing, unclear reviewer responsibility, poor source preparation, or missing in-context QA rather than one isolated translation error.</p>
          </div>
          <div className="sg-reading-wide sg-failure-list">
            {failures.map(([failure,why,better]) => (
              <article className="sg-failure-row" key={failure}>
                <h3>{failure}</h3>
                <div className="sg-failure-field"><div className="sg-failure-field-label">Why It Fails</div><p>{why}</p></div>
                <div className="sg-failure-field"><div className="sg-failure-field-label">Better Approach</div><p>{better}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section-blush sg-anchor-target" id="readiness-checklist">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <div className="sg-eyebrow">Planning Tool</div>
            <h2 className="sg-h2">AI Website Translation Readiness Checklist</h2>
            <p className="sg-lead">Use this checklist before launching a pilot or expanding an existing AI + Human Translation Workflow.</p>
          </div>
          <div className="sg-reading-wide sg-checklist-grid">
            {checklistGroups.map(([title,items]) => (
              <section className="sg-checklist-group" key={title}>
                <h3>{title}</h3>
                <ul className="sg-checklist">{items.map(item => <li key={item}><span className="sg-checkmark"><Icon name="check" size={15}/></span><span>{item}</span></li>)}</ul>
              </section>
            ))}
          </div>
          <div className="sg-reading-wide sg-readiness-results">
            <div className="sg-readiness-result"><h3>Ready to Pilot</h3><p>Representative content, approved tools, language assets, reviewers, routing rules, and quality controls are in place.</p></div>
            <div className="sg-readiness-result"><h3>Preparation Needed</h3><p>The workflow is feasible, but source content, terminology, reviewer roles, or acceptance criteria require further definition.</p></div>
            <div className="sg-readiness-result"><h3>Specialist Planning Required</h3><p>Substantial regulated, legal, safety-related, medical, financial, or sensitive content requires additional governance and expert involvement.</p></div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-anchor-target" id="frequently-asked-questions">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Frequently Asked Questions</h2>
            <p className="sg-lead">Practical answers to common questions about AI translation, human review, multilingual SEO, specialist validation, and scaling across languages.</p>
          </div>
          <div className="sg-reading-wide sg-faq-panel">
            {faqs.map(([q,a],index) => (
              <details className="sg-faq" key={q} open={index===0}>
                <summary>{q}</summary>
                <div className="sg-faq-answer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section-dense sg-section-soft sg-anchor-target" id="sources">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Sources and References</h2>
            <p className="sg-lead">Authoritative standards and official guidance supporting the guide’s quality, search, language-declaration, and AI-governance recommendations.</p>
          </div>
          <div className="sg-reading-wide sg-source-list">
            <div className="sg-source"><a href="https://www.iso.org/standard/62970.html">ISO 18587: Post-Editing of Machine Translation Output</a><p>Defines requirements for full human post-editing of machine translation output and post-editor competencies.</p></div>
            <div className="sg-source"><a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">Google Search: Creating Helpful, Reliable, People-First Content</a><p>Explains the importance of useful, trustworthy content created for people rather than primarily to manipulate search rankings.</p></div>
            <div className="sg-source"><a href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites">Google Search: Managing Multi-Regional and Multilingual Sites</a><p>Provides official guidance on distinct language URLs, localized versions, and hreflang implementation.</p></div>
            <div className="sg-source"><a href="https://www.w3.org/International/questions/qa-html-language-declarations">W3C: Declaring Language in HTML</a><p>Explains how to declare the default page language and identify content that changes language within a document.</p></div>
            <div className="sg-source"><a href="https://airc.nist.gov/airmf-resources/airmf/5-sec-core/">NIST AI Risk Management Framework Core</a><p>Organizes AI risk-management activities around govern, map, measure, and manage across the AI lifecycle.</p></div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-shell">
          <div className="sg-reading">
            <h2 className="sg-h2">Build a Workflow That Uses AI Where It Helps and Human Expertise Where It Matters</h2>
            <div className="sg-copy-stack" style={{marginTop: 24}}>
              <p className="sg-body">The most effective website translation strategy is not based on choosing AI instead of people or people instead of AI. It is based on deliberate decisions about what each content type needs to achieve, what could happen if it is wrong, which language assets can support it, what expertise is required, who can approve it, and how quality will be verified in the website experience.</p>
              <p className="sg-body">Begin with a content inventory, classify representative pages, assign the four quality routes, define reviewer responsibilities, and run a controlled pilot. This creates a foundation for faster multilingual publishing without treating every page as equally simple or equally risky.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section-dense sg-section-soft">
        <div className="sg-shell">
          <div className="sg-reading sg-chapter-header">
            <h2 className="sg-h2">Related Website Translation Resources</h2>
            <p className="sg-lead">Continue with the guide that supports your next planning, technology, testing, search, or operating decision.</p>
          </div>
          <div className="sg-related-grid">
            {resources.map(([category,title,text,href]) => (
              <article className="sg-resource" key={title}>
                <div className="sg-resource-category">{category}</div>
                <h3><a href={href}>{title}</a></h3>
                <p>{text}</p>
                <ArrowLink href={href}>Read the Guide</ArrowLink>
              </article>
            ))}
          </div>
          <div className="sg-related-footer">
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/">Explore AI Translation Insights</ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/guides/">View All Guides</ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/">Visit the Resource Center</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sg-final-cta">
        <div className="sg-shell">
          <div className="sg-final-cta-panel">
            <div>
              <h2 className="sg-h2">Plan an AI + Human Website Translation Workflow</h2>
              <p>Discuss your website architecture, languages, content mix, quality requirements, integration needs, and update frequency with the Stepes team.</p>
            </div>
            <div className="sg-final-actions">
              <a className="sg-button sg-button-primary" href="https://www.stepes.com/contact-us/">Talk to an Expert <Icon name="arrow" size={18}/></a>
              <a className="sg-button sg-button-secondary" href="https://www.stepes.com/website-translation-services/">Website Translation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
