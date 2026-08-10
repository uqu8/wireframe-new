import React from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/automotive-ota-software-localization/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const colors = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  blush: "#FDF2F7",
  blushStrong: "#F8E4EE",
  dark: "#151922",
  text: "#121722",
  body: "#445066",
  muted: "#667085",
  line: "#E4E7EC",
  surface: "#F7F8FA",
};

const styles = String.raw`
  :root {
    color-scheme: light;
    --ota-magenta: #C11D63;
    --ota-magenta-dark: #9F1D55;
    --ota-blush: #FDF2F7;
    --ota-blush-strong: #F8E4EE;
    --ota-dark: #151922;
    --ota-text: #121722;
    --ota-body: #445066;
    --ota-muted: #667085;
    --ota-line: #E4E7EC;
    --ota-surface: #F7F8FA;
    --ota-white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .ota-guide {
    overflow-x: clip;
    background: var(--ota-white);
    color: var(--ota-text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .ota-guide a {
    color: inherit;
    text-decoration: none;
  }

  .ota-guide a:focus-visible,
  .ota-guide summary:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.28);
    outline-offset: 4px;
    border-radius: 8px;
  }

  .ota-shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .ota-breadcrumb-wrap {
    background: #FFFFFF;
    padding-top: 28px;
  }

  .ota-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 0;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #6B7280;
    font-size: 14px;
    line-height: 1.55;
  }

  .ota-breadcrumb li {
    display: inline-flex;
    min-width: 0;
    align-items: baseline;
  }

  .ota-breadcrumb li + li::before {
    content: "›";
    flex: 0 0 auto;
    margin: 0 8px;
    color: #B2B8C2;
  }

  .ota-breadcrumb a {
    transition: color 160ms ease;
  }

  .ota-breadcrumb a:hover { color: var(--ota-magenta); }
  .ota-breadcrumb-current {
    color: #344054;
    font-weight: 500;
    overflow-wrap: anywhere;
  }

  .ota-hero {
    position: relative;
    overflow: hidden;
    padding: 72px 0 92px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 980px;
  }

  .ota-guide .ota-eyebrow {
    max-width: none;
    margin: 0 0 18px;
    color: var(--ota-magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
  }

  .ota-guide .ota-eyebrow.ota-eyebrow-dark { color: #F2A7C6 !important; }

  .ota-hero h1 {
    max-width: 960px;
    margin: 0;
    color: var(--ota-text);
    font-size: 48px;
    font-weight: 600;
    line-height: 1.06;
    letter-spacing: -0.04em;
  }

  .ota-hero-deck {
    max-width: 830px;
    margin: 28px 0 0;
    color: var(--ota-body);
    font-size: 20px;
    line-height: 1.65;
  }

  .ota-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .ota-btn {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 999px;
    padding: 12px 22px;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
  }

  .ota-btn-primary,
  .ota-btn-primary:link,
  .ota-btn-primary:visited,
  .ota-btn-primary:hover,
  .ota-btn-primary:active,
  .ota-btn-primary:focus,
  .ota-btn-primary:focus-visible {
    background: var(--ota-magenta);
    color: #FFFFFF !important;
  }

  .ota-btn-primary:hover {
    background: #A71954;
    transform: translateY(-1px);
  }

  .ota-btn-primary * { color: #FFFFFF !important; }

  .ota-btn-secondary {
    background: #FFFFFF;
    color: #202735;
    border-color: #D0D5DD;
  }

  .ota-btn-secondary:hover {
    color: var(--ota-magenta-dark);
    border-color: rgba(193, 29, 99, 0.42);
  }

  .ota-arrow {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    transform: translateY(-1px);
  }

  .ota-summary-section {
    padding: 80px 0;
    background: var(--ota-blush);
  }

  .ota-summary-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 72px;
    align-items: start;
  }

  .ota-summary-lead h2,
  .ota-section-title {
    margin: 0;
    color: var(--ota-text);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.035em;
  }

  .ota-summary-lead p {
    max-width: 470px;
    margin: 22px 0 0;
    color: var(--ota-body);
    font-size: 18px;
    line-height: 1.7;
  }

  .ota-takeaways {
    border-top: 1px solid rgba(193, 29, 99, 0.22);
  }

  .ota-takeaway {
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(193, 29, 99, 0.18);
  }

  .ota-takeaway-mark {
    width: 9px;
    height: 9px;
    margin-top: 9px;
    border-radius: 50%;
    background: var(--ota-magenta);
  }

  .ota-takeaway p {
    margin: 0;
    color: #2F3A4C;
    font-size: 16px;
    line-height: 1.75;
  }

  .ota-article-section {
    padding: 88px 0 96px;
    background: #FFFFFF;
  }

  .ota-article-layout {
    display: grid;
    grid-template-columns: 264px minmax(0, 1fr);
    gap: 64px;
    align-items: start;
  }

  .ota-toc-desktop {
    position: sticky;
    top: 112px;
    max-height: calc(100vh - 144px);
    overflow-y: auto;
    padding-right: 18px;
    scrollbar-width: thin;
    scrollbar-color: #D0D5DD transparent;
  }

  .ota-toc-label {
    margin: 0 0 16px;
    color: var(--ota-text);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
  }

  .ota-toc-list {
    margin: 0;
    padding: 0 0 0 16px;
    border-left: 1px solid #D8DDE5;
    list-style: none;
  }

  .ota-toc-list li + li { margin-top: 7px; }

  .ota-toc-list a {
    display: block;
    padding: 5px 0 5px 12px;
    color: #667085;
    font-size: 15px;
    line-height: 1.45;
    border-left: 2px solid transparent;
    margin-left: -17px;
    transition: color 160ms ease, border-color 160ms ease;
  }

  .ota-toc-list a:hover {
    color: var(--ota-magenta-dark);
    border-left-color: var(--ota-magenta);
  }

  .ota-toc-mobile { display: none; }

  .ota-content {
    min-width: 0;
  }

  .ota-chapter {
    scroll-margin-top: 112px;
    padding: 0 0 84px;
  }

  .ota-chapter + .ota-chapter {
    padding-top: 84px;
    border-top: 1px solid var(--ota-line);
  }

  .ota-chapter-intro {
    max-width: 800px;
    margin: 22px 0 0;
    color: var(--ota-body);
    font-size: 19px;
    line-height: 1.7;
  }

  .ota-prose {
    max-width: 760px;
    margin-top: 28px;
  }

  .ota-prose p,
  .ota-prose li {
    color: var(--ota-body);
    font-size: 18px;
    line-height: 1.72;
  }

  .ota-prose p { margin: 0 0 22px; }
  .ota-prose p:last-child { margin-bottom: 0; }

  .ota-prose ul,
  .ota-prose ol {
    margin: 18px 0 24px;
    padding-left: 25px;
  }

  .ota-prose li + li { margin-top: 9px; }
  .ota-prose strong { color: #222B3A; font-weight: 600; }

  .ota-h3 {
    max-width: 760px;
    margin: 42px 0 0;
    color: var(--ota-text);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  .ota-inline-link {
    color: var(--ota-magenta-dark) !important;
    font-weight: 600;
  }

  .ota-inline-link:hover { color: #7A1542 !important; }

  .ota-callout {
    max-width: 860px;
    margin-top: 34px;
    padding: 26px 28px;
    border-left: 3px solid var(--ota-magenta);
    background: #FAF7F9;
  }

  .ota-guide .ota-callout p.ota-callout-label {
    margin: 0 0 8px;
    color: var(--ota-magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
  }

  .ota-callout p {
    margin: 0;
    color: #30394A;
    font-size: 18px;
    line-height: 1.68;
  }

  .ota-wide-module {
    width: 100%;
    margin-top: 38px;
  }

  .ota-table-wrap {
    overflow: hidden;
    border: 1px solid var(--ota-line);
    border-radius: 24px;
    background: #FFFFFF;
  }

  .ota-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .ota-table caption {
    padding: 18px 22px;
    color: #475467;
    font-size: 16px;
    line-height: 1.55;
    text-align: left;
    background: #F8F9FB;
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-table th,
  .ota-table td {
    padding: 18px 20px;
    vertical-align: top;
    border-bottom: 1px solid var(--ota-line);
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.62;
    text-align: left;
    overflow-wrap: anywhere;
  }

  .ota-table th {
    color: #202735;
    font-weight: 600;
    background: #FBFCFD;
  }

  .ota-table tbody tr:last-child th,
  .ota-table tbody tr:last-child td { border-bottom: 0; }

  .ota-table .ota-cell-accent {
    color: var(--ota-magenta-dark);
    font-weight: 600;
  }

  .ota-dark-framework {
    margin-top: 38px;
    overflow: hidden;
    border-radius: 30px;
    background: var(--ota-dark);
    color: #FFFFFF;
  }

  .ota-dark-framework-head {
    padding: 40px 40px 30px;
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }

  .ota-dark-framework-head h3 {
    max-width: 760px;
    margin: 0;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.03em;
  }

  .ota-dark-framework-head p {
    max-width: 720px;
    margin: 16px 0 0;
    color: #CBD1DC;
    font-size: 17px;
    line-height: 1.66;
  }

  .ota-control-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .ota-control {
    min-width: 0;
    grid-column: span 2;
    padding: 30px 26px 32px;
    border-right: 1px solid rgba(255,255,255,0.12);
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }

  .ota-control:nth-child(3) { border-right: 0; }
  .ota-control:nth-child(4),
  .ota-control:nth-child(5) {
    grid-column: span 3;
    border-bottom: 0;
  }
  .ota-control:nth-child(5) { border-right: 0; }

  .ota-control-number {
    color: #F2A7C6;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .ota-control h4 {
    margin: 16px 0 0;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .ota-control p {
    margin: 12px 0 0;
    color: #C9D0DB;
    font-size: 16px;
    line-height: 1.62;
  }

  .ota-lifecycle {
    overflow: hidden;
    border: 1px solid var(--ota-line);
    border-radius: 28px;
    background: #FFFFFF;
  }

  .ota-lifecycle-summary {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border-bottom: 1px solid var(--ota-line);
    background: #F8F9FB;
  }

  .ota-lifecycle-stage {
    position: relative;
    padding: 22px 18px;
    border-right: 1px solid var(--ota-line);
  }

  .ota-lifecycle-stage:last-child { border-right: 0; }
  .ota-lifecycle-stage span {
    display: block;
    color: var(--ota-magenta);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  .ota-lifecycle-stage strong {
    display: block;
    margin-top: 8px;
    color: #232B39;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
  }

  .ota-lifecycle-detail {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 18px;
    padding: 24px 28px;
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-lifecycle-detail:last-child { border-bottom: 0; }

  .ota-stage-index {
    display: flex;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--ota-blush);
    color: var(--ota-magenta);
    font-size: 14px;
    font-weight: 600;
  }

  .ota-lifecycle-detail h4 {
    margin: 3px 0 0;
    color: #202735;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
  }

  .ota-lifecycle-detail p {
    margin: 9px 0 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.66;
  }

  .ota-split-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 42px;
    margin-top: 32px;
    border-top: 1px solid var(--ota-line);
  }

  .ota-split-item {
    padding: 23px 0;
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-split-item h3,
  .ota-split-item h4 {
    margin: 0;
    color: #232B39;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.42;
  }

  .ota-split-item p {
    margin: 10px 0 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.66;
  }

  .ota-risk-tier {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--ota-blush);
    color: var(--ota-magenta-dark);
    font-size: 14px;
    font-weight: 600;
    white-space: normal;
  }

  .ota-validation-stack {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid var(--ota-line);
    border-radius: 26px;
    background: #FFFFFF;
  }

  .ota-validation-level {
    grid-column: span 2;
    padding: 24px 22px;
    border-right: 1px solid var(--ota-line);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-validation-level:nth-child(3) { border-right: 0; }
  .ota-validation-level:nth-child(4),
  .ota-validation-level:nth-child(5) {
    grid-column: span 3;
    border-bottom: 0;
  }
  .ota-validation-level:nth-child(5) { border-right: 0; }

  .ota-validation-level strong {
    display: block;
    color: #252D3B;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.38;
  }

  .ota-validation-level p {
    margin: 10px 0 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.6;
  }

  .ota-checklist-panel {
    overflow: hidden;
    border: 1px solid var(--ota-line);
    border-radius: 28px;
    background: #FFFFFF;
  }

  .ota-checklist-intro {
    padding: 30px 32px;
    background: var(--ota-surface);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-checklist-intro p {
    max-width: 720px;
    margin: 0;
    color: var(--ota-body);
    font-size: 17px;
    line-height: 1.68;
  }

  .ota-checklist-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ota-checklist-group {
    padding: 30px 32px;
    border-right: 1px solid var(--ota-line);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-checklist-group:nth-child(2n) { border-right: 0; }
  .ota-checklist-group:nth-last-child(-n+2) { border-bottom: 0; }

  .ota-checklist-group h3 {
    margin: 0;
    color: #202735;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
  }

  .ota-checklist-list {
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  .ota-checklist-list li {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.62;
  }

  .ota-checklist-list li + li { margin-top: 12px; }

  .ota-check-box {
    width: 16px;
    height: 16px;
    margin-top: 5px;
    border: 1.5px solid #AEB6C3;
    border-radius: 4px;
    background: #FFFFFF;
  }

  .ota-service-panel {
    overflow: hidden;
    border: 1px solid var(--ota-line);
    border-radius: 30px;
    background: #FFFFFF;
  }

  .ota-service-head {
    padding: 36px 36px 28px;
    background: #FBFCFD;
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-service-head p {
    max-width: 760px;
    margin: 0;
    color: var(--ota-body);
    font-size: 17px;
    line-height: 1.68;
  }

  .ota-service-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ota-service-item {
    padding: 28px 32px;
    border-right: 1px solid var(--ota-line);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-service-item:nth-child(2n) { border-right: 0; }
  .ota-service-item:nth-last-child(-n+2) { border-bottom: 0; }

  .ota-service-item h3 {
    margin: 0;
    color: #222A38;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.36;
  }

  .ota-service-item p {
    margin: 11px 0 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.65;
  }

  .ota-service-item a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 15px;
    color: var(--ota-magenta-dark);
    font-size: 16px;
    font-weight: 600;
  }

  .ota-service-item a:hover { color: #7A1542; }

  .ota-faq-panel {
    overflow: hidden;
    border-top: 1px solid var(--ota-line);
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-faq-item { border-bottom: 1px solid var(--ota-line); }
  .ota-faq-item:last-child { border-bottom: 0; }

  .ota-faq-item summary {
    position: relative;
    display: flex;
    min-height: 72px;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 20px 48px 20px 0;
    color: #202735;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    cursor: pointer;
    list-style: none;
  }

  .ota-faq-item summary::-webkit-details-marker { display: none; }

  .ota-faq-item summary::after {
    content: "+";
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ota-magenta);
    font-size: 26px;
    font-weight: 400;
  }

  .ota-faq-item[open] summary::after { content: "−"; }

  .ota-faq-answer {
    max-width: 820px;
    padding: 0 54px 24px 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.72;
  }

  .ota-faq-answer p { margin: 0; }

  .ota-sources {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--ota-line);
  }

  .ota-source {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid var(--ota-line);
  }

  .ota-source strong {
    display: block;
    color: #202735;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
  }

  .ota-source span {
    display: block;
    margin-top: 5px;
    color: var(--ota-muted);
    font-size: 16px;
    line-height: 1.55;
  }

  .ota-source a {
    align-self: center;
    color: var(--ota-magenta-dark);
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    overflow-wrap: anywhere;
  }

  .ota-conclusion {
    margin-top: 8px;
    padding: 38px 40px;
    border-radius: 28px;
    background: #F7F8FA;
  }

  .ota-conclusion h2 {
    margin: 0;
    color: var(--ota-text);
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.03em;
  }

  .ota-conclusion p,
  .ota-conclusion li {
    color: var(--ota-body);
    font-size: 17px;
    line-height: 1.68;
  }

  .ota-conclusion p { max-width: 760px; margin: 17px 0 0; }
  .ota-conclusion ul { margin: 18px 0 0; padding-left: 22px; }
  .ota-conclusion li + li { margin-top: 8px; }

  .ota-related-section {
    padding: 88px 0;
    background: #F7F8FA;
    border-top: 1px solid var(--ota-line);
  }

  .ota-related-head {
    max-width: 760px;
  }

  .ota-related-head p {
    margin: 18px 0 0;
    color: var(--ota-body);
    font-size: 18px;
    line-height: 1.68;
  }

  .ota-related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 36px;
    margin-top: 38px;
    border-top: 1px solid #D8DDE5;
  }

  .ota-related-item {
    min-width: 0;
    padding: 26px 0;
    border-bottom: 1px solid #D8DDE5;
  }

  .ota-related-item a {
    color: #202735;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.42;
  }

  .ota-related-item a:hover { color: var(--ota-magenta-dark); }

  .ota-related-item p {
    margin: 10px 0 0;
    color: var(--ota-body);
    font-size: 16px;
    line-height: 1.62;
  }

  .ota-final-cta-section {
    padding: 96px 0 104px;
    background: #FFFFFF;
  }

  .ota-final-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 48px;
    align-items: center;
    padding: 48px 52px;
    border: 1px solid rgba(193,29,99,0.18);
    border-radius: 30px;
    background: linear-gradient(135deg, #FFF9FC 0%, #FDF2F7 100%);
  }

  .ota-final-cta h2 {
    max-width: 690px;
    margin: 0;
    color: var(--ota-text);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  .ota-final-cta p {
    max-width: 740px;
    margin: 17px 0 0;
    color: var(--ota-body);
    font-size: 18px;
    line-height: 1.68;
  }

  .ota-final-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 252px;
  }

  @media (max-width: 1120px) {
    .ota-shell { padding-left: 40px; padding-right: 40px; }
    .ota-article-layout { grid-template-columns: 230px minmax(0, 1fr); gap: 42px; }

    .ota-lifecycle-summary { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .ota-lifecycle-stage:nth-child(3n) { border-right: 0; }
    .ota-lifecycle-stage:nth-child(-n+3) { border-bottom: 1px solid var(--ota-line); }

    .ota-final-cta { grid-template-columns: 1fr; }
    .ota-final-actions { min-width: 0; flex-direction: row; flex-wrap: wrap; }
  }

  @media (max-width: 900px) {
    .ota-shell { padding-left: 24px; padding-right: 24px; }
    .ota-hero { padding: 64px 0 76px; }
    .ota-hero h1 { font-size: 42px; }
    .ota-summary-grid { grid-template-columns: 1fr; gap: 36px; }
    .ota-summary-lead p { max-width: 720px; }
    .ota-article-section { padding-top: 64px; }
    .ota-article-layout { display: block; }
    .ota-toc-desktop { display: none; }
    .ota-toc-mobile {
      display: block;
      margin-bottom: 48px;
      border: 1px solid var(--ota-line);
      border-radius: 20px;
      background: #FFFFFF;
    }
    .ota-toc-mobile summary {
      position: relative;
      min-height: 56px;
      padding: 16px 46px 16px 18px;
      color: #202735;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      list-style: none;
    }
    .ota-toc-mobile summary::-webkit-details-marker { display: none; }
    .ota-toc-mobile summary::after {
      content: "+";
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ota-magenta);
      font-size: 24px;
      font-weight: 400;
    }
    .ota-toc-mobile[open] summary::after { content: "−"; }
    .ota-toc-mobile .ota-toc-list {
      margin: 0 18px 18px;
      padding-left: 14px;
    }
    .ota-toc-mobile .ota-toc-list a {
      min-height: 44px;
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    .ota-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 820px) {
    .ota-control-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .ota-control,
    .ota-control:nth-child(3),
    .ota-control:nth-child(4),
    .ota-control:nth-child(5) {
      grid-column: auto;
      border-right: 1px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.12);
    }
    .ota-control:nth-child(2n) { border-right: 0; }
    .ota-control:nth-child(5) {
      grid-column: 1 / -1;
      border-right: 0;
      border-bottom: 0;
    }

    .ota-validation-stack {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .ota-validation-level,
    .ota-validation-level:nth-child(3),
    .ota-validation-level:nth-child(4),
    .ota-validation-level:nth-child(5) {
      grid-column: auto;
      border-right: 1px solid var(--ota-line);
      border-bottom: 1px solid var(--ota-line);
    }
    .ota-validation-level:nth-child(2n) { border-right: 0; }
    .ota-validation-level:nth-child(5) {
      grid-column: 1 / -1;
      border-right: 0;
      border-bottom: 0;
    }

    .ota-checklist-grid,
    .ota-service-grid { display: block; }

    .ota-checklist-group,
    .ota-checklist-group:nth-child(2n),
    .ota-checklist-group:nth-last-child(-n+2),
    .ota-service-item,
    .ota-service-item:nth-child(2n),
    .ota-service-item:nth-last-child(-n+2) {
      border-right: 0;
      border-bottom: 1px solid var(--ota-line);
    }

    .ota-checklist-group:last-child,
    .ota-service-item:last-child { border-bottom: 0; }

    .ota-table-wrap {
      overflow: visible;
      border: 0;
      border-radius: 0;
      background: transparent;
    }
    .ota-table,
    .ota-table thead,
    .ota-table tbody,
    .ota-table tr,
    .ota-table th,
    .ota-table td {
      display: block;
      width: 100%;
    }
    .ota-table colgroup,
    .ota-table thead { display: none; }
    .ota-table caption {
      display: block;
      margin-bottom: 14px;
      border: 1px solid var(--ota-line);
      border-radius: 16px;
      font-size: 16px;
    }
    .ota-table tbody tr {
      margin-bottom: 16px;
      overflow: hidden;
      border: 1px solid var(--ota-line);
      border-radius: 18px;
      background: #FFFFFF;
    }
    .ota-table tbody tr:last-child { margin-bottom: 0; }
    .ota-table th,
    .ota-table td {
      padding: 15px 17px;
      border-bottom: 1px solid var(--ota-line);
      font-size: 16px;
    }
    .ota-table td::before {
      content: attr(data-label);
      display: block;
      margin-bottom: 6px;
      color: #202735;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
    }
    .ota-table tr > *:last-child { border-bottom: 0; }
  }

  @media (max-width: 720px) {
    .ota-shell { padding-left: 20px; padding-right: 20px; }
    .ota-breadcrumb-wrap { padding-top: 20px; }
    .ota-breadcrumb { font-size: 14px; gap: 6px; }
    .ota-hero { padding: 52px 0 66px; }
    .ota-hero h1 { font-size: 38px; line-height: 1.08; }
    .ota-hero-deck { margin-top: 22px; font-size: 18px; line-height: 1.66; }
    .ota-hero-actions { flex-direction: column; align-items: stretch; margin-top: 28px; }
    .ota-btn { width: 100%; min-height: 50px; }
    .ota-summary-section { padding: 64px 0; }
    .ota-summary-lead h2,
    .ota-section-title { font-size: 30px; }
    .ota-summary-lead p,
    .ota-chapter-intro { font-size: 17px; }
    .ota-article-section { padding: 56px 0 72px; }
    .ota-chapter { padding-bottom: 64px; }
    .ota-chapter + .ota-chapter { padding-top: 64px; }
    .ota-prose p,
    .ota-prose li { font-size: 17px; line-height: 1.7; }
    .ota-h3 { margin-top: 34px; font-size: 20px; }
    .ota-callout { padding: 22px 20px; }
    .ota-callout p { font-size: 17px; }
    .ota-dark-framework { border-radius: 24px; }
    .ota-dark-framework-head { padding: 30px 24px 24px; }
    .ota-dark-framework-head h3 { font-size: 26px; }
    .ota-control-grid { display: block; }
    .ota-control,
    .ota-control:nth-child(3),
    .ota-control:nth-child(4),
    .ota-control:nth-child(5) {
      grid-column: auto;
      border-right: 0;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding: 24px;
    }
    .ota-control:last-child { border-bottom: 0; }
    .ota-lifecycle-summary { display: none; }
    .ota-lifecycle-detail { grid-template-columns: 38px minmax(0, 1fr); gap: 14px; padding: 22px 20px; }
    .ota-split-list { grid-template-columns: 1fr; gap: 0; }
    .ota-validation-stack { display: block; }
    .ota-validation-level,
    .ota-validation-level:nth-child(3),
    .ota-validation-level:nth-child(4),
    .ota-validation-level:nth-child(5) {
      grid-column: auto;
      border-right: 0;
      border-bottom: 1px solid var(--ota-line);
    }
    .ota-validation-level:last-child { border-bottom: 0; }
    .ota-checklist-group { padding: 26px 22px; }
    .ota-checklist-intro { padding: 26px 22px; }
    .ota-service-item { padding: 25px 22px; }
    .ota-service-head { padding: 28px 22px 24px; }
    .ota-faq-item summary { min-height: 68px; padding-right: 42px; font-size: 17px; }
    .ota-faq-answer { padding-right: 0; font-size: 16px; }
    .ota-source { grid-template-columns: 1fr; gap: 10px; }
    .ota-source a { white-space: normal; }
    .ota-conclusion { padding: 30px 24px; }
    .ota-conclusion h2 { font-size: 28px; }
    .ota-related-section { padding: 64px 0; }
    .ota-related-grid { grid-template-columns: 1fr; gap: 0; }
    .ota-final-cta-section { padding: 72px 0 80px; }
    .ota-final-cta { padding: 34px 24px; border-radius: 24px; }
    .ota-final-cta h2 { font-size: 30px; }
    .ota-final-cta p { font-size: 17px; }
    .ota-final-actions { flex-direction: column; }
  }

  @media (max-width: 360px) {
    .ota-hero h1 { font-size: 36px; }
    .ota-breadcrumb li:last-child { flex-basis: 100%; }
    .ota-dark-framework-head h3 { font-size: 24px; }
  }
`;

const tocItems = [
  ["what-ota-localization-includes", "What OTA Localization Includes"],
  ["continuous-localization-model", "Why OTA Requires Continuous Localization"],
  ["five-controls", "Five Controls of Release Readiness"],
  ["localization-lifecycle", "The OTA Localization Lifecycle"],
  ["change-detection", "Change Detection and Delta Translation"],
  ["version-control", "Version and Configuration Control"],
  ["context-rich-localization", "Context for Short Automotive Strings"],
  ["terminology-management", "Terminology Across Connected Experiences"],
  ["ai-human-workflow", "AI, Translation Memory, and Human Expertise"],
  ["risk-based-review", "Risk-Based Translation and Review"],
  ["rapid-validation", "Rapid Linguistic Validation"],
  ["late-changes", "Managing Late Changes and Hotfixes"],
  ["standards-governance", "Standards and Regulatory Context"],
  ["roles-responsibilities", "Roles and Responsibilities"],
  ["performance-metrics", "Performance Metrics"],
  ["failure-modes", "Common Failure Modes"],
  ["readiness-checklist", "OTA Localization Readiness Checklist"],
  ["stepes-support", "How Stepes Supports OTA Localization"],
  ["faqs", "Frequently Asked Questions"],
  ["sources", "Sources and References"],
];

const takeaways = [
  "OTA updates require a continuous localization model that remains active throughout the vehicle lifecycle.",
  "Change detection must identify contextual changes as well as changes to the source text.",
  "A correct translation can still be wrong when it is assigned to the wrong model, market, feature, software branch, or release.",
  "AI, translation memory, and automation should be matched with human review according to content risk and intended use.",
  "Rapid validation should include technical, linguistic, visual, contextual, and regression checks.",
  "Approved corrections, terminology decisions, and reviewer feedback should become reusable language assets for later releases.",
];

const controls = [
  {
    title: "Release Identity Control",
    text: "Tie every localization request to a defined release, branch, vehicle population, market scope, language set, schedule, and approval path.",
  },
  {
    title: "Change and Context Control",
    text: "Determine what changed in the text and what changed around it, including function, screen, severity, variables, and market applicability.",
  },
  {
    title: "Language Asset Control",
    text: "Maintain approved translation memories, termbases, style guidance, reviewer decisions, and known issue records with clear status and ownership.",
  },
  {
    title: "Risk and Review Control",
    text: "Route content according to intended use, potential consequence, novelty, context, and the strength of available language assets.",
  },
  {
    title: "Release Evidence Control",
    text: "Retain versions, change classifications, QA results, reviewer decisions, approvals, delivery records, and superseded content.",
  },
];

const lifecycle = [
  ["Define the Release Scope", "Confirm affected functions, vehicle systems, configurations, markets, languages, customer channels, deadlines, and risk levels."],
  ["Establish the Approved Baseline", "Identify the last approved source and target versions, active terminology, open defects, market exceptions, and superseded content."],
  ["Identify the Release Delta", "Classify content as new, modified, unchanged, moved, reintroduced, deleted, deprecated, configuration-specific, or awaiting clarification."],
  ["Enrich Content With Context", "Attach string IDs, screens, feature descriptions, vehicle states, user actions, screenshots, limits, variables, and reuse restrictions."],
  ["Prepare Language Assets", "Confirm the correct translation memory, add new terminology, restrict obsolete variants, and resolve cross-channel naming conflicts."],
  ["Route Content by Risk", "Use approved reuse, AI-assisted translation, professional automotive translation, independent review, or specialist approval as appropriate."],
  ["Perform Linguistic and Automated QA", "Review meaning, terminology, locale conventions, completeness, placeholders, numbers, protected text, and technical structure."],
  ["Validate in Context", "Review screenshots, prototypes, simulators, test applications, representative builds, and both successful and unsuccessful user pathways."],
  ["Approve and Deliver", "Confirm release, branch, configuration, market, locale, file version, approval status, open exceptions, and delivery destination."],
  ["Capture Post-Release Learning", "Record defects, update language assets, retire incorrect language, preserve reviewer decisions, and improve the next release."],
];

const contentChannels = [
  ["In-Vehicle HMI", "Update prompts, menus, status messages, warnings, progress indicators, and error states.", "Character limits, driver comprehension, message severity, vehicle state, and screen context."],
  ["Companion Application", "Update availability, scheduling, permissions, progress, and troubleshooting.", "Alignment with in-vehicle terminology, mobile layouts, and locale behavior."],
  ["Owner Portal", "Release details, instructions, eligibility, and support information.", "Vehicle-specific content, version accuracy, and market applicability."],
  ["Email and Notifications", "Availability notices, reminders, completion messages, and service actions.", "Concise language, customer clarity, timing, and channel consistency."],
  ["Release Notes", "Feature changes, improvements, resolved issues, and known limitations.", "Feature-name consistency, market availability, and understandable technical language."],
  ["Dealer and Service Content", "Technical instructions, service bulletins, and escalation guidance.", "Technical accuracy, controlled terminology, and configuration specificity."],
  ["Customer Support", "Knowledge articles, call-center scripts, and troubleshooting procedures.", "Alignment with actual interface messages and released functionality."],
  ["Governance Records", "Update descriptions, controlled records, review documentation, and approvals.", "Traceability, version control, authorized terminology, and status."],
];

const changeClassifications = [
  ["New Content", "Content with no approved equivalent in the applicable language asset."],
  ["Meaningfully Modified", "The source meaning, instruction, condition, feature behavior, or user action has changed."],
  ["Minor Editorial Change", "The source is clarified or stylistically revised without an intended functional change; review is still required."],
  ["Formatting-Only Change", "A nonlinguistic change such as whitespace, markup, line break, or presentation structure."],
  ["Unchanged Approved Content", "Content remains valid in the same context, configuration, and market."],
  ["Moved Content", "A string is relocated to another screen, feature, sequence, or vehicle state."],
  ["Reintroduced Content", "Previously deleted or deprecated content returns and must be checked against its new context."],
  ["Deleted or Deprecated", "Content should no longer appear in active language packages or preferred reuse."],
  ["Late Source Change", "A change introduced after localization starts or after a language package has been approved."],
];

const configurationRows = [
  ["Vehicle Platform", "Shared strings may behave differently across architectures."],
  ["Model and Model Year", "Features, hardware, and interface behavior may vary."],
  ["Trim and Equipment", "Some functions may not be installed or enabled."],
  ["Powertrain", "EV, hybrid, and internal-combustion terminology can differ."],
  ["Hardware Generation", "Screens, controls, and update behavior may change."],
  ["ECU or Component", "Identifies the vehicle system affected by the update."],
  ["Feature Flag", "Determines whether content is visible and applicable."],
  ["Software Branch", "Prevents language from entering the wrong code line."],
  ["Release Version", "Connects the translation with the correct product baseline."],
  ["Update Campaign", "Identifies the targeted vehicle population."],
  ["Market", "Determines feature availability and market-specific requirements."],
  ["Language and Locale", "Controls linguistic and regional conventions."],
  ["Approval Status", "Distinguishes draft, reviewed, approved, and superseded content."],
];

const contextFields = [
  "Source string and string ID",
  "Functional description",
  "Screen location",
  "Feature name",
  "Vehicle state",
  "Intended user action",
  "Message severity",
  "Character or pixel constraints",
  "Screenshot or mockup",
  "Adjacent messages",
  "Placeholder definitions",
  "Singular and plural behavior",
  "Reuse restrictions",
  "Market applicability",
  "Previous approved translation",
  "Developer or product notes",
];

const terminologySteps = [
  ["Define the Concept", "Explain what the feature does and how it differs from related functions."],
  ["Identify the Official Source Name", "Confirm capitalization, abbreviation, trademark, and do-not-translate rules."],
  ["Review Existing Product Language", "Check HMI, manuals, marketing, training, and support content for related terminology."],
  ["Develop Target-Language Candidates", "Consider meaning, length, pronunciation, cultural suitability, and market conventions."],
  ["Validate With Appropriate Reviewers", "Route terminology to linguistic, product, engineering, legal, regulatory, or in-market experts as required."],
  ["Approve and Publish", "Record the preferred term, acceptable alternatives, prohibited variants, definition, context, ownership, and status."],
  ["Apply Across Channels", "Make the approved term available to translators, AI workflows, reviewers, and QA checks."],
  ["Monitor After Release", "Review customer feedback, support questions, and market comments."],
];

const riskRows = [
  ["Tier 1: High Consequence", "Driver warnings, safety instructions, installation conditions, recovery procedures, and legally significant notices.", "Automotive-specialized translation, approved terminology, independent review, contextual validation, stakeholder approval, and full traceability."],
  ["Tier 2: Functionally Important", "Update prompts, status messages, menus, feature descriptions, failure states, and companion-app instructions.", "Translation memory and suitable AI assistance, professional review, automated QA, screenshot or build validation, and regression checks."],
  ["Tier 3: Informational", "General release summaries, lower-risk help content, and routine support information.", "Scalable AI-assisted translation, terminology controls, targeted professional review, automated QA, sampling, and escalation."],
];

const validationCategories = [
  ["Language Completeness", "Missing translations, untranslated source text, fallback language, duplicates, orphaned strings, obsolete content, and missing locales."],
  ["Technical Integrity", "Placeholders, variables, tags, encoding, string IDs, numbers, units, identifiers, protected text, links, and file structure."],
  ["Terminology and Meaning", "Feature names, actions, severity, installation states, error descriptions, safety terminology, and market vocabulary."],
  ["Interface Presentation", "Truncation, text expansion, line wrapping, clipping, button fit, fonts, scripts, right-to-left behavior, and overlap."],
  ["Functional Context", "Correct vehicle state, logical sequence, success, failure, interruption, retry, recovery, and market association."],
];

const lateChangeSteps = [
  "Preserve the approved language baseline.",
  "Create a new change record.",
  "Isolate the exact source delta.",
  "Identify affected strings, channels, languages, markets, and configurations.",
  "Reassess the content risk level.",
  "Translate and review the controlled change.",
  "Run targeted automated QA.",
  "Perform linguistic regression around the affected user flow.",
  "Confirm package and release identifiers.",
  "Record approval and supersede the prior package.",
  "Update translation memories, terminology, and issue records.",
];

const standardsRows = [
  ["ISO 24089", "Software-update engineering", "Controlled multilingual information, responsibilities, versions, configuration awareness, update communication, and traceability."],
  ["UN Regulation No. 156", "Software updates and Software Update Management Systems", "User information, controlled records, market-ready instructions, and alignment between notices and the applicable release."],
  ["ISO/TR 24935:2025", "Cellular OTA update use cases and metadata", "Reinforces the importance of structured metadata connecting language content with the correct operational context."],
  ["ISO/SAE 21434", "Automotive cybersecurity engineering", "Accurate multilingual cybersecurity documentation and user communication, while cybersecurity validation remains a separate engineering responsibility."],
];

const roleRows = [
  ["Product and Software", "Define release scope, feature behavior, source content, affected configurations, schedule, and change notifications."],
  ["Localization", "Manage translation, terminology, language assets, linguistic review, QA, issues, and multilingual delivery."],
  ["Engineering", "Confirm string implementation, placeholders, branches, builds, constraints, and defect resolution."],
  ["Release Management", "Control baselines, release gates, package identity, status, and deployment readiness."],
  ["Quality", "Define evidence requirements, defect severity, approval controls, and release acceptance."],
  ["Legal and Regulatory", "Review legally significant notices, disclosures, obligations, and market requirements."],
  ["Cybersecurity", "Validate cybersecurity processes, risks, controls, update mechanisms, and related documentation."],
  ["In-Market Reviewers", "Validate terminology, customer expectations, market suitability, and authorized regional language."],
  ["Customer Support and Service", "Report user confusion, recurring issues, troubleshooting gaps, and post-release language findings."],
  ["Localization Provider", "Supply qualified linguists, technology, workflow coordination, QA, reporting, and agreed validation services."],
];

const metricGroups = [
  ["Release Performance", ["Languages ready by localization freeze", "On-time multilingual delivery rate", "Average turnaround for release deltas", "Late-change response time", "Market approval lead time", "Delays caused by unresolved source questions"]],
  ["Reuse and Efficiency", ["Translation-memory reuse", "Unchanged content preserved", "New versus modified string volume", "Avoided full-package retranslation", "Terminology reuse", "Reviewer effort per release", "Clarifications caused by missing context"]],
  ["Quality", ["Defects by severity", "Errors per thousand words or strings", "In-context defect rate", "Linguistic regression rate", "Terminology defect rate", "Market-review rejection rate", "Post-release linguistic issues", "Recurrence of resolved defects"]],
  ["Process Control", ["Strings delivered with required metadata", "Untracked source changes", "Package or version mismatches", "Approval cycles", "Terminology resolution time", "Corrections written back to language assets", "Inconsistent source baselines"]],
  ["Customer and Product Impact", ["Support cases linked to unclear update language", "Update abandonment connected with confusing instructions", "Questions about installation requirements", "Inconsistent feature naming", "Market feedback on terminology and comprehension"]],
];

const failureModes = [
  ["Localization Begins After the Software Freeze", "Insufficient time for clarification, review, and in-context validation.", "Include localization milestones in the release plan and expose stable content as early as practical."],
  ["Strings Arrive Without Context", "Grammatically correct but functionally incorrect translations.", "Supply screenshots, metadata, vehicle states, character limits, and developer notes."],
  ["The Entire Package Is Retranslated", "Unnecessary cost, avoidable variation, and a larger review scope.", "Use controlled change detection while revalidating content affected by contextual or system-level changes."],
  ["Source Changes Occur Outside the Workflow", "Language packages fall behind the released software.", "Connect repositories, content systems, notifications, and localization workflows."],
  ["Versions Are Tracked Only Through Filenames", "Draft, obsolete, or mismatched translations enter the build.", "Use structured release, branch, configuration, language, and approval metadata."],
  ["Feature Names Differ Across Channels", "Customers cannot connect announcements, menus, and support instructions.", "Maintain one governed termbase across HMI, apps, documentation, dealer content, and support."],
  ["Only the Successful Path Is Reviewed", "Failure, retry, interruption, and recovery messages remain untested.", "Validate every user pathway that can produce language."],
  ["Every Content Type Receives the Same Workflow", "Low-risk content consumes unnecessary effort while important messages receive inadequate control.", "Use defined risk tiers and escalation criteria."],
  ["Late Fixes Are Not Added to Language Assets", "The same defect returns in later releases.", "Update translation memories, terminology, test cases, and reviewer instructions after approval."],
  ["Translation Is Treated as Product Compliance", "Teams assume that translated content satisfies broader regulatory or engineering requirements.", "Document the boundaries among linguistic, technical, legal, cybersecurity, safety, and type-approval responsibilities."],
];

const checklistGroups = [
  ["Strategy and Ownership", ["Localization is included in the OTA release plan.", "Responsibilities are defined across product, engineering, localization, quality, legal, and market teams.", "High-risk language questions have an escalation path.", "Release and localization milestones are synchronized.", "Required approval authorities are identified."]],
  ["Source Readiness", ["All translatable strings are identified.", "Release notes and supporting customer communications are included.", "Screenshots or contextual references are available.", "Character limits are documented.", "Placeholders and variables are explained.", "Feature and message severity are identified.", "Source content has an owner."]],
  ["Change Detection", ["New and modified strings can be isolated.", "Moved and reintroduced strings are identified.", "Deleted and deprecated content is controlled.", "Contextual changes are reviewed.", "Late source changes are formally surfaced.", "The approved baseline is preserved."]],
  ["Configuration Control", ["Every language package is connected with the correct software release.", "Platform, model, market, and feature applicability are recorded.", "Locale and market distinctions are defined.", "Superseded translations are clearly marked.", "Nonapplicable content is identified.", "Branch and campaign information is retained."]],
  ["Language Assets", ["Translation memories are current and correctly scoped.", "Terminology is approved and shared.", "New feature names are validated.", "Obsolete terminology is retired or restricted.", "Market preferences are documented.", "Previous quality findings are incorporated.", "Reviewer decisions are reusable."]],
  ["AI and Human Review", ["Content is classified by intended use and risk.", "AI suitability is evaluated by content type and language.", "High-consequence messages receive qualified human review.", "Independent review is assigned where required.", "Subject-matter and in-market approval are available.", "Escalation triggers are defined."]],
  ["Quality Assurance", ["Missing and untranslated content is checked.", "Placeholders, tags, numbers, and identifiers are validated.", "Terminology checks are applied.", "Character limits and layout are reviewed.", "Failure, interruption, retry, and recovery pathways are tested.", "Linguistic regression is performed.", "Outstanding exceptions are documented."]],
  ["Release and Traceability", ["Source and target versions are traceable.", "Final approvals are recorded.", "The delivery package has a unique identifier.", "All languages use the same approved source baseline.", "Superseded packages are controlled.", "Post-release feedback has an intake process.", "Approved corrections are written back to language assets."]],
];

const serviceItems = [
  ["Continuous Localization Workflows", "Connect recurring release content, repositories, APIs, content systems, reviewers, and language assets within a coordinated multilingual process.", "Explore Software Localization Services", "https://www.stepes.com/software-localization-services/"],
  ["Source Comparison and Delta Translation", "Identify meaningful changes while preserving approved content and controlling deleted, superseded, or configuration-specific language.", "Explore Translation Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
  ["Translation Memory and Automotive Terminology", "Reuse approved translations and maintain consistent feature, software, technical, safety, and customer terminology across releases and channels.", "Explore Translation Memory", "https://www.stepes.com/translation-memory/"],
  ["Risk-Based AI + Human Translation", "Combine DomainAI, translation memory, approved terminology, automated checks, professional linguists, and specialist review according to content risk.", "Explore AI Translation Services", "https://www.stepes.com/ai-translation-services/"],
  ["Automated and In-Context QA", "Validate completeness, terminology, variables, character limits, rendering, interface context, and multilingual presentation according to the agreed scope.", "Explore Translation Quality Assurance", "https://www.stepes.com/translation-quality-assurance/"],
  ["Versioned Language Assets", "Organize translations by platform, model, market, configuration, product family, content type, and release to support controlled reuse.", "Explore Terminology Management", "https://www.stepes.com/terminology-management/"],
  ["Enterprise Workflow Visibility", "Centralize project intake, reviewer feedback, terminology questions, approvals, delivery records, and performance reporting.", "Explore the Translation Management Portal", "https://www.stepes.com/translation-management-portal/"],
  ["Automotive Localization at Scale", "Support recurring automotive translation and localization programs across 100+ languages with professional native linguists and structured quality processes.", "Explore Automotive Translation Services", "https://www.stepes.com/automotive-translation-services/"],
];

const faqs = [
  ["What is automotive OTA software localization?", "Automotive OTA software localization is the translation, adaptation, management, and validation of multilingual content associated with over-the-air vehicle software updates. It can include in-vehicle interface strings, installation prompts, warnings, release notes, companion-app content, owner communications, dealer instructions, and customer-support information."],
  ["How is OTA localization different from ordinary software localization?", "Automotive OTA localization must account for vehicle platforms, models, hardware and software configurations, safety-related messages, market variants, long product lifecycles, controlled update processes, and multiple customer and operational channels. The same string may not be valid for every vehicle or release."],
  ["What content usually needs localization for an OTA update?", "Typical content includes update availability messages, scheduling options, installation requirements, progress and status messages, error and recovery instructions, feature descriptions, release notes, companion-app notifications, owner-portal content, dealer materials, and support articles."],
  ["Why is change detection important?", "Change detection helps teams isolate new and modified content, preserve approved translations, reduce unnecessary retranslation, and focus review on the parts of a release that have changed. Effective change detection also evaluates changes in context, configuration, and function."],
  ["Can automotive OTA content be translated with AI?", "Suitable content can benefit from AI-assisted translation when supported by approved terminology, translation memory, clear context, automated QA, and professional review. Safety-related, ambiguous, legal, regulatory, or high-consequence content normally requires stronger human validation."],
  ["Which OTA messages need the strongest review?", "Driver warnings, installation conditions, safety-related instructions, failure and recovery messages, legally significant notices, new feature terminology, and messages that influence driver action generally require stronger linguistic and contextual review."],
  ["How should OTA translations be version-controlled?", "Each approved translation should be associated with its source version, string ID, software branch, release, vehicle configuration, market, language, locale, approval status, and revision history. Superseded language should remain controlled and should not return through uncontrolled reuse."],
  ["What is linguistic regression testing?", "Linguistic regression testing checks whether a new software build or source change has unintentionally removed, replaced, damaged, or misapplied previously approved translations."],
  ["Does localization ensure compliance with ISO 24089 or UN Regulation No. 156?", "No. Localization can support clear multilingual information, controlled records, consistent terminology, and traceable approvals. Standards conformity, SUMS assessment, cybersecurity engineering, product safety, legal compliance, and type approval require broader specialist processes."],
  ["When should localization begin in the OTA release cycle?", "Localization should begin as soon as sufficiently stable source content, context, release metadata, and configuration information are available. Waiting until the end of development reduces the time available for clarification, review, and in-context validation."],
  ["How can automotive teams reduce OTA localization turnaround?", "Turnaround can be improved through reliable source-change detection, reusable translation memories, governed terminology, structured context, workflow integration, parallel language processing, risk-based review, automated QA, and clearly defined approval paths."],
  ["Can Stepes support recurring OTA releases in multiple languages?", "Yes. Stepes supports incremental translation, change detection, translation-memory reuse, terminology management, versioned language assets, automotive-specialized review, rapid validation, and integration with recurring product workflows across 100+ languages."],
];

const sources = [
  ["ISO 24089:2023 — Road Vehicles — Software Update Engineering", "International Organization for Standardization; includes Amendment 1:2024.", "https://www.iso.org/standard/77796.html"],
  ["UN Regulation No. 156 — Software Update and Software Update Management System", "United Nations Economic Commission for Europe.", "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update"],
  ["ISO/TR 24935:2025 — Software Update Over the Air Using Mobile Cellular Network", "International Organization for Standardization.", "https://www.iso.org/standard/88541.html"],
  ["ISO/SAE 21434:2021 — Road Vehicles — Cybersecurity Engineering", "International Organization for Standardization and SAE International.", "https://www.iso.org/standard/70918.html"],
  ["ISO/DPAS 25090 — Software Update Engineering — Vehicle Configuration Information", "International Organization for Standardization.", "https://www.iso.org/standard/88953.html"],
  ["Cybersecurity Best Practices for the Safety of Modern Vehicles", "National Highway Traffic Safety Administration.", "https://www.nhtsa.gov/sites/nhtsa.gov/files/2022-09/cybersecurity-best-practices-safety-modern-vehicles-2022-pre-final-tag_0_0.pdf"],
];

const relatedResources = [
  ["Automotive Translation Services", "Explore Stepes automotive translation workflows for software, technical documentation, quality, terminology, and connected vehicle content.", "https://www.stepes.com/automotive-translation-services/"],
  ["Automotive HMI and Infotainment Localization Guide", "Learn how context, interface constraints, scripts, voice, and in-context testing affect multilingual vehicle software.", "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/"],
  ["Automotive Technical Manual Translation and DITA/XML Workflows", "Plan structured automotive content, translation reuse, model-year updates, terminology control, and multilingual publishing.", "https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/"],
  ["EV Battery and Charging Content Localization", "Manage multilingual terminology, safety, software, customer experience, and lifecycle content for EV and charging ecosystems.", "https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization/"],
  ["Automotive Terminology Management Across Models and Markets", "Build consistent language across vehicle platforms, models, suppliers, departments, markets, and customer touchpoints.", "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/"],
  ["ADAS, Voice, and In-Vehicle Linguistic Testing", "Validate driver warnings, voice commands, interface messages, and multilingual speech experiences in context.", "https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing/"],
];

function Arrow() {
  return <span className="ota-arrow" aria-hidden="true">→</span>;
}

function Breadcrumbs() {
  const items = [
    ["Resources", "https://www.stepes.com/resources/"],
    ["Localization Guides", "https://www.stepes.com/resources/localization-guides/"],
    ["Automotive OTA Software Localization Guide", null],
  ];

  return (
    <nav className="ota-breadcrumb-wrap" aria-label="Breadcrumb">
      <div className="ota-shell">
        <ol className="ota-breadcrumb">
          {items.map(([label, href]) => (
            <li key={label}>
              {href ? (
                <a href={href}>{label}</a>
              ) : (
                <span className="ota-breadcrumb-current" aria-current="page">{label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function TocList() {
  return (
    <ul className="ota-toc-list">
      {tocItems.map(([id, label]) => (
        <li key={id}><a href={sectionUrl(id)}>{label}</a></li>
      ))}
    </ul>
  );
}

function Prose({ children }) {
  return <div className="ota-prose">{children}</div>;
}

function Chapter({ id, title, intro, children }) {
  return (
    <section className="ota-chapter" id={id}>
      <h2 className="ota-section-title">{title}</h2>
      {intro && <p className="ota-chapter-intro">{intro}</p>}
      {children}
    </section>
  );
}

function EditorialTable({ caption, headers, rows, widths }) {
  return (
    <div className="ota-wide-module ota-table-wrap">
      <table className="ota-table">
        {caption && <caption>{caption}</caption>}
        {widths && (
          <colgroup>
            {widths.map((width, index) => <col key={index} style={{ width }} />)}
          </colgroup>
        )}
        <thead>
          <tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row[0]}`}>
              {row.map((cell, cellIndex) => {
                const Tag = cellIndex === 0 ? "th" : "td";
                return (
                  <Tag
                    key={cellIndex}
                    scope={cellIndex === 0 ? "row" : undefined}
                    data-label={cellIndex === 0 ? undefined : headers[cellIndex]}
                  >
                    {cell}
                  </Tag>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <section className="ota-checklist-group">
      <h3>{title}</h3>
      <ul className="ota-checklist-list">
        {items.map((item) => (
          <li key={item}>
            <span className="ota-check-box" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AutomotiveOtaSoftwareLocalizationGuideWireframe() {
  return (
    <main className="ota-guide" id="top">
      <style>{styles}</style>

      <Breadcrumbs />

      <header className="ota-hero">
        <div className="ota-shell">
          <div className="ota-hero-inner">
            <p className="ota-eyebrow">Automotive Localization Guide</p>
            <h1>Automotive OTA Software Localization Guide</h1>
            <p className="ota-hero-deck">
              Continuous localization, change detection, version control, and rapid linguistic
              validation for recurring multilingual vehicle software releases.
            </p>
            <div className="ota-hero-actions">
              <a className="ota-btn ota-btn-primary" href={sectionUrl("what-ota-localization-includes")}>
                Explore the Guide <Arrow />
              </a>
              <a className="ota-btn ota-btn-secondary" href={sectionUrl("readiness-checklist")}>
                Jump to the Checklist <Arrow />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="ota-summary-section" aria-labelledby="key-takeaways-title">
        <div className="ota-shell ota-summary-grid">
          <div className="ota-summary-lead">
            <h2 id="key-takeaways-title">Controlled Multilingual Release Management</h2>
            <p>
              Over-the-air delivery turns automotive localization into an ongoing product
              operation. Every language must remain aligned with the correct software release,
              vehicle configuration, market, and user experience.
            </p>
          </div>
          <div className="ota-takeaways">
            {takeaways.map((takeaway) => (
              <div className="ota-takeaway" key={takeaway}>
                <span className="ota-takeaway-mark" aria-hidden="true" />
                <p>{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ota-article-section">
        <div className="ota-shell ota-article-layout">
          <aside className="ota-toc-desktop" aria-label="In This Guide">
            <p className="ota-toc-label">In This Guide</p>
            <TocList />
          </aside>

          <div className="ota-content">
            <details className="ota-toc-mobile">
              <summary>In This Guide</summary>
              <TocList />
            </details>

            <Chapter
              id="what-ota-localization-includes"
              title="What Automotive OTA Localization Includes"
              intro="Automotive OTA software localization covers the language-bearing content associated with an over-the-air vehicle software update—not the engineering or deployment of the update package itself."
            >
              <Prose>
                <p>
                  Over-the-air updates can improve vehicle functions, introduce new features,
                  resolve software issues, and update customer experiences after a vehicle enters
                  service. The multilingual content surrounding each release may appear inside the
                  vehicle and across several connected customer, dealer, support, and governance
                  channels.
                </p>
                <p>The localization scope may include:</p>
                <ul>
                  <li>Update availability and scheduling messages</li>
                  <li>Preconditions for installation</li>
                  <li>Battery, connectivity, parking, and vehicle-state requirements</li>
                  <li>Download, installation, progress, and status messages</li>
                  <li>Driver acknowledgments, consent language, and safety information</li>
                  <li>Failure, interruption, retry, restart, rollback, and recovery guidance</li>
                  <li>Updated HMI strings, release notes, companion-app content, and owner communications</li>
                  <li>Dealer, service, customer-support, and market-specific update information</li>
                </ul>
              </Prose>

              <EditorialTable
                caption="A single vehicle software release may create multilingual content across the complete connected customer experience."
                headers={["Channel", "Typical Content", "Localization Considerations"]}
                widths={["24%", "35%", "41%"]}
                rows={contentChannels}
              />

              <div className="ota-callout">
                <p className="ota-callout-label">Scope Boundary</p>
                <p>
                  Localization supports accurate multilingual communication and controlled language
                  delivery. It does not develop firmware, assemble or transmit update packages,
                  verify cybersecurity, validate product safety, certify a Software Update
                  Management System, or grant regulatory approval.
                </p>
              </div>
            </Chapter>

            <Chapter
              id="continuous-localization-model"
              title="Why OTA Updates Require a Continuous Localization Model"
              intro="OTA delivery replaces a one-time launch model with recurring multilingual updates throughout the period in which a vehicle remains in operation."
            >
              <Prose>
                <p>
                  Traditional automotive localization programs often revolve around vehicle
                  launches, model-year documentation, scheduled product updates, or major software
                  releases. OTA programs create smaller and more frequent content changes, multiple
                  active branches, and language assets that must be maintained continuously.
                </p>
              </Prose>

              <EditorialTable
                headers={["Traditional Model", "Continuous OTA Model"]}
                widths={["50%", "50%"]}
                rows={[
                  ["One major localization cycle", "Recurring release deltas"],
                  ["Large source packages", "Smaller, frequently changing content sets"],
                  ["Final language delivery", "Continuously maintained language assets"],
                  ["Document-level versioning", "String-, feature-, configuration-, and release-level control"],
                  ["End-stage proofreading", "Quality controls throughout the release workflow"],
                  ["One launch baseline", "Multiple active branches, campaigns, and vehicle populations"],
                ]}
              />

              <Prose>
                <p>
                  A translation can be linguistically accurate but operationally wrong when it is
                  delivered to an obsolete branch, assigned to the wrong feature, reused despite a
                  change in interface context, or published in a market where the feature is not
                  available.
                </p>
                <p>
                  The central challenge is therefore not simply translating quickly. It is keeping
                  every language synchronized with the correct product state.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="five-controls"
              title="The Five Controls of Multilingual OTA Release Readiness"
              intro="A scalable automotive OTA localization program can be organized around five connected controls that protect speed, accuracy, traceability, and reuse."
            >
              <div className="ota-dark-framework">
                <div className="ota-dark-framework-head">
                  <p className="ota-eyebrow ota-eyebrow-dark">Stepes Framework</p>
                  <h3>Five Controls for Every Multilingual Software Release</h3>
                  <p>
                    These controls connect product identity, source changes, reusable language,
                    risk-based review, and release evidence within one multilingual operating model.
                  </p>
                </div>
                <div className="ota-control-grid">
                  {controls.map((control, index) => (
                    <div className="ota-control" key={control.title}>
                      <span className="ota-control-number">0{index + 1}</span>
                      <h4>{control.title}</h4>
                      <p>{control.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Prose>
                <p>
                  Release identity determines where the language belongs. Change and context control
                  determine what requires attention. Language assets protect approved reuse. Risk
                  and review control determine the appropriate quality path. Release evidence shows
                  what was approved, delivered, superseded, and learned.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="localization-lifecycle"
              title="The Automotive OTA Localization Lifecycle"
              intro="Localization should be connected with the product-release workflow instead of waiting for a final collection of strings."
            >
              <div className="ota-wide-module ota-lifecycle">
                <div className="ota-lifecycle-summary" aria-hidden="true">
                  {[
                    ["Scope", "Define the release"],
                    ["Baseline", "Confirm approved content"],
                    ["Delta", "Identify changes"],
                    ["Localization", "Translate and review"],
                    ["Validation", "Test in context"],
                    ["Release", "Approve and learn"],
                  ].map(([number, label]) => (
                    <div className="ota-lifecycle-stage" key={number}>
                      <span>{number}</span>
                      <strong>{label}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  {lifecycle.map(([title, text], index) => (
                    <div className="ota-lifecycle-detail" key={title}>
                      <span className="ota-stage-index">{index + 1}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Prose>
                <p>
                  Continuous localization becomes more efficient when every release improves the
                  assets used by the next one. Post-release corrections, terminology decisions,
                  reviewer feedback, and recurring defects should feed directly into future language
                  assets and validation plans.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="change-detection"
              title="Detecting What Changed Before Translation Begins"
              intro="A controlled delta workflow protects approved language while isolating content that genuinely needs translation, review, or renewed validation."
            >
              <div className="ota-split-list">
                {changeClassifications.map(([title, text]) => (
                  <div className="ota-split-item" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <h3 className="ota-h3">Textual Delta Versus Contextual Delta</h3>
              <Prose>
                <p>
                  A source comparison can show that the words have not changed. It cannot always
                  show that the translation remains suitable. A string may move to a new screen,
                  refer to a different system, gain a stricter character limit, carry greater safety
                  significance, or become applicable to a different vehicle state.
                </p>
                <p>
                  Consider <strong>“Restart required.”</strong> The correct translation depends on
                  whether the user must restart an application, the update process, the display, or
                  the complete vehicle system. Context is part of the translatable input.
                </p>
              </Prose>

              <h3 className="ota-h3">When Broader Revalidation Is Appropriate</h3>
              <Prose>
                <ul>
                  <li>The complete user flow has changed.</li>
                  <li>A feature has moved to another vehicle system.</li>
                  <li>A warning has become more consequential.</li>
                  <li>Terminology has been replaced across the product.</li>
                  <li>Existing translations came from an uncontrolled legacy source.</li>
                  <li>Prior quality findings reduce confidence in the language memory.</li>
                  <li>Character limits or interface layouts have changed substantially.</li>
                  <li>The release introduces a new market or locale.</li>
                </ul>
                <p>Delta translation is an efficiency method, not a reason to overlook system-level change.</p>
              </Prose>
            </Chapter>

            <Chapter
              id="version-control"
              title="Matching Every Translation to the Correct Vehicle and Release"
              intro="Language is only one dimension of an OTA deliverable. Every approved translation should be associated with enough metadata to determine where and when it is valid."
            >
              <EditorialTable
                headers={["Configuration Dimension", "Why It Matters"]}
                widths={["34%", "66%"]}
                rows={configurationRows}
              />

              <h3 className="ota-h3">Language, Locale, Market, and Configuration</h3>
              <Prose>
                <p><strong>Language</strong> identifies the linguistic system, such as German or Japanese.</p>
                <p><strong>Locale</strong> combines language with regional conventions, such as French for France or French for Canada.</p>
                <p><strong>Market</strong> identifies the commercial and regulatory environment in which the vehicle and update are offered.</p>
                <p><strong>Configuration</strong> identifies the specific platform, model, hardware, software, features, and equipment to which the content applies.</p>
                <p>One French translation may not be valid for every French-speaking market, vehicle configuration, or software release.</p>
              </Prose>

              <h3 className="ota-h3">Recommended Version-Control Rules</h3>
              <Prose>
                <ul>
                  <li>Assign a unique release identifier to every localization package.</li>
                  <li>Preserve the source version associated with each target version.</li>
                  <li>Prevent obsolete content from appearing as preferred reuse.</li>
                  <li>Record whether a translation is global, market-specific, or configuration-specific.</li>
                  <li>Maintain separate draft, reviewed, approved, and superseded statuses.</li>
                  <li>Avoid overwriting approved packages without revision history.</li>
                  <li>Retain a record of late changes and their approvals.</li>
                  <li>Confirm that every language uses the same final source baseline.</li>
                </ul>
              </Prose>
            </Chapter>

            <Chapter
              id="context-rich-localization"
              title="Why Automotive OTA Strings Need More Than Source Text"
              intro="Short software strings are difficult to translate accurately because the source often omits the object, state, user action, or functional context the linguist needs."
            >
              <Prose>
                <p>
                  Strings such as <strong>Ready</strong>, <strong>Continue</strong>,
                  <strong> Unavailable</strong>, <strong>Update later</strong>,
                  <strong> Install now</strong>, <strong>Connection lost</strong>, and
                  <strong> Restart required</strong> may require different translations depending
                  on the feature, screen, vehicle state, intended action, and consequences of delay.
                </p>
              </Prose>

              <div className="ota-callout">
                <p className="ota-callout-label">Practical Recommendation</p>
                <p>
                  A context package reduces clarification cycles and helps prevent fluent but
                  functionally incorrect translations. Treat screenshots and metadata as core localization
                  inputs, not optional extras.
                </p>
              </div>

              <div className="ota-split-list">
                {contextFields.map((field) => (
                  <div className="ota-split-item" key={field}>
                    <h3>{field}</h3>
                  </div>
                ))}
              </div>

              <Prose>
                <p>
                  For detailed interface design, character limits, scripts, voice, and visual
                  validation guidance, continue to the
                  {" "}<a className="ota-inline-link" href="https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/">Automotive HMI and Infotainment Localization Guide</a>.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="terminology-management"
              title="Keeping Terminology Consistent Across Connected Vehicle Experiences"
              intro="A single OTA feature may appear in the vehicle HMI, companion app, owner portal, release notes, dealer instructions, support content, marketing, and regulatory documentation."
            >
              <Prose>
                <p>
                  When channels are translated independently, the same feature can acquire several
                  names. Customers may then struggle to connect an email announcement with the
                  corresponding vehicle menu or support article.
                </p>
                <p>Terminology should control:</p>
                <ul>
                  <li>Product and feature names</li>
                  <li>Vehicle modes and driver-assistance functions</li>
                  <li>Battery, charging, and connectivity terms</li>
                  <li>Installation states and error conditions</li>
                  <li>Safety expressions, actions, and component names</li>
                  <li>Brand language, legal phrases, abbreviations, and market-preferred terms</li>
                </ul>
              </Prose>

              <h3 className="ota-h3">Terminology Workflow for a New Feature</h3>
              <div className="ota-wide-module ota-lifecycle">
                {terminologySteps.map(([title, text], index) => (
                  <div className="ota-lifecycle-detail" key={title}>
                    <span className="ota-stage-index">{index + 1}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Prose>
                <p>
                  Translation memory preserves approved segments. Terminology management controls
                  the concepts and names used inside new or modified content. Style guides govern
                  tone, punctuation, capitalization, units, and locale conventions. Together, these
                  assets create a controlled language system for recurring releases.
                </p>
                <p>
                  Explore Stepes <a className="ota-inline-link" href="https://www.stepes.com/terminology-management/">Terminology Management</a> and
                  {" "}<a className="ota-inline-link" href="https://www.stepes.com/translation-memory/">Translation Memory</a> capabilities.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="ai-human-workflow"
              title="Designing the Right AI and Human Workflow"
              intro="The relevant decision is not whether an automotive program should use AI or humans. It is how automation and professional expertise should be combined for each content type."
            >
              <Prose>
                <p>AI suitability depends on:</p>
                <ul>
                  <li>Intended use and potential consequence of an error</li>
                  <li>Source clarity and string ambiguity</li>
                  <li>Context availability and translation-memory coverage</li>
                  <li>Terminology maturity and language-pair performance</li>
                  <li>Content novelty, technical structure, and market significance</li>
                  <li>Required turnaround and available validation environment</li>
                </ul>
              </Prose>

              <div className="ota-split-list">
                <div className="ota-split-item">
                  <h3>Content That May Support Greater Automation</h3>
                  <p>Repeated release-note structures, previously approved interface patterns, lower-risk informational updates, support collections, and minor revisions with strong translation-memory matches.</p>
                </div>
                <div className="ota-split-item">
                  <h3>Content That Requires Stronger Human Control</h3>
                  <p>Driver warnings, installation conditions, safety messages, failure and recovery instructions, new feature terminology, legal notices, ambiguous short strings, and high-visibility owner communications.</p>
                </div>
              </div>

              <div className="ota-callout">
                <p className="ota-callout-label">Quality Principle</p>
                <p>
                  AI output is not release-ready simply because it sounds fluent. Review must
                  consider functional meaning, automotive terminology, user action, message
                  severity, interface context, market suitability, and configuration validity.
                </p>
              </div>
            </Chapter>

            <Chapter
              id="risk-based-review"
              title="Matching Quality Controls to Content Risk"
              intro="Risk should be determined by intended use and consequence—not by word count. A three-word warning may require more control than a long informational article."
            >
              <EditorialTable
                caption="A practical starting model for routing automotive OTA content. Program-specific requirements may require stronger controls."
                headers={["Risk Tier", "Typical Content", "Recommended Workflow"]}
                widths={["24%", "34%", "42%"]}
                rows={riskRows.map(([tier, content, workflow]) => [<span className="ota-risk-tier">{tier}</span>, content, workflow])}
              />

              <h3 className="ota-h3">Escalation Triggers</h3>
              <Prose>
                <ul>
                  <li>The source is ambiguous or the intended action is unclear.</li>
                  <li>The translation conflicts with approved terminology.</li>
                  <li>A feature is new, technically complex, or may affect driver behavior.</li>
                  <li>The string appears in an unexpected screen or vehicle state.</li>
                  <li>A market reviewer disputes the meaning.</li>
                  <li>The content differs from release notes or support guidance.</li>
                  <li>The software build does not match the supplied screenshots.</li>
                  <li>The applicable vehicle configuration cannot be determined.</li>
                </ul>
                <p>
                  For a focused discussion of automotive translation error categories and their
                  practical limits, see the <a className="ota-inline-link" href="https://www.stepes.com/resources/translation-guides/sae-j2450-automotive-translation-quality/">SAE J2450 Automotive Translation Quality Guide</a>.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="rapid-validation"
              title="What Rapid OTA Localization Validation Should Check"
              intro="Rapid validation does not mean removing controls. It means designing linguistic, technical, visual, contextual, and regression checks that can operate efficiently within the release cadence."
            >
              <div className="ota-wide-module ota-validation-stack">
                {validationCategories.map(([title, text]) => (
                  <div className="ota-validation-level" key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <h3 className="ota-h3">Linguistic Regression</h3>
              <Prose>
                <p>
                  Linguistic regression testing checks whether a new build or source update has
                  unintentionally damaged previously approved content. It should identify approved
                  translations replaced by older language, late changes omitted from one or more
                  locales, updated terminology applied inconsistently, strings reassigned to the
                  wrong context, fallback content reintroduced, and language packages built from
                  different source baselines.
                </p>
              </Prose>

              <EditorialTable
                caption="Different validation activities answer different questions and should not be treated as interchangeable."
                headers={["Activity", "Primary Purpose"]}
                widths={["32%", "68%"]}
                rows={[
                  ["Automated Localization QA", "Detect repeatable structural, terminology, numerical, and completeness issues."],
                  ["Linguistic Review", "Evaluate meaning, fluency, accuracy, terminology, and audience fit."],
                  ["Screenshot Review", "Evaluate language within a visual interface context."],
                  ["In-Context Linguistic Testing", "Evaluate translation, presentation, sequence, and usability in a working environment."],
                  ["Functional Software Testing", "Confirm that the software behaves according to technical requirements."],
                  ["Safety Validation", "Confirm that the product satisfies applicable safety requirements."],
                  ["Cybersecurity Validation", "Confirm that systems and update processes meet cybersecurity requirements."],
                ]}
              />
            </Chapter>

            <Chapter
              id="late-changes"
              title="Managing Late-Breaking Changes Without Losing Control"
              intro="Late changes are common in software delivery. The risk is not the existence of a late change; it is allowing that change to bypass the established multilingual workflow."
            >
              <Prose>
                <p>
                  Common scenarios include emergency patches, source edits after localization
                  freeze, new errors discovered during testing, market-specific release delays,
                  legal wording changes, feature removal from selected configurations, revised
                  installation conditions, hotfixes, and localization defects found close to
                  deployment.
                </p>
              </Prose>

              <div className="ota-wide-module ota-lifecycle">
                {lateChangeSteps.map((step, index) => (
                  <div className="ota-lifecycle-detail" key={step}>
                    <span className="ota-stage-index">{index + 1}</span>
                    <div><h4>{step}</h4></div>
                  </div>
                ))}
              </div>

              <div className="ota-callout">
                <p className="ota-callout-label">Speed With Control</p>
                <p>
                  Speed should come from prepared assets, automation, reliable context, and defined
                  escalation paths—not from silently skipping essential quality checks.
                </p>
              </div>
            </Chapter>

            <Chapter
              id="standards-governance"
              title="How Localization Supports Software-Update Governance"
              intro="Automotive OTA programs operate within broader software-update, cybersecurity, product-safety, documentation, and regulatory frameworks. Localization supports clear multilingual information but represents only one part of the complete governance system."
            >
              <EditorialTable
                headers={["Framework", "Primary Subject", "Localization Relevance"]}
                widths={["24%", "31%", "45%"]}
                rows={standardsRows}
              />

              <Prose>
                <p>
                  ISO 24089 addresses software-update engineering at organizational and project
                  levels. UN Regulation No. 156 addresses software updates and Software Update
                  Management Systems. ISO/TR 24935:2025 covers cellular OTA use cases and metadata.
                  ISO/SAE 21434 addresses automotive cybersecurity engineering.
                </p>
                <p>
                  Localization can support controlled multilingual update information, consistent
                  terminology, configuration-aware content, version traceability, market-ready
                  instructions, and documented review. It does not establish SUMS compliance,
                  standards conformity, cybersecurity assurance, product safety, legal sufficiency,
                  or type approval.
                </p>
              </Prose>

              <div className="ota-callout">
                <p className="ota-callout-label">Important Consideration</p>
                <p>
                  Requirements vary by jurisdiction, vehicle program, content type, and release.
                  Manufacturers and suppliers should obtain appropriate legal, regulatory,
                  cybersecurity, safety, engineering, and type-approval guidance.
                </p>
              </div>
            </Chapter>

            <Chapter
              id="roles-responsibilities"
              title="Who Owns What in an OTA Localization Program?"
              intro="Successful localization depends on clear cross-functional ownership and defined escalation paths."
            >
              <EditorialTable
                headers={["Team", "Core Responsibilities"]}
                widths={["28%", "72%"]}
                rows={roleRows}
              />

              <Prose>
                <p>
                  The localization provider should not be expected to infer missing product behavior
                  from isolated strings. Product questions need defined owners, realistic response
                  deadlines, and a documented path for resolving high-risk ambiguity.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="performance-metrics"
              title="Metrics for a Scalable Multilingual OTA Program"
              intro="A mature program measures more than word volume and delivery speed. Metrics should reveal release readiness, reuse, quality, process control, and customer impact."
            >
              <div className="ota-split-list">
                {metricGroups.map(([title, items]) => (
                  <div className="ota-split-item" key={title}>
                    <h3>{title}</h3>
                    <ul style={{ margin: "13px 0 0", paddingLeft: "20px" }}>
                      {items.map((item) => (
                        <li key={item} style={{ color: colors.body, fontSize: "16px", lineHeight: 1.62, marginTop: "7px" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Prose>
                <p>
                  Metrics should support improvement. They should not encourage teams to hide
                  meaningful defects merely to meet volume or turnaround targets. Reporting should
                  connect operational efficiency with quality and customer outcomes.
                </p>
                <p>
                  Explore <a className="ota-inline-link" href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting and Analytics</a> for enterprise program visibility.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="failure-modes"
              title="Common Failure Modes—and How to Prevent Them"
              intro="The most persistent OTA localization problems usually come from late engagement, missing context, weak version control, disconnected terminology, or unclear ownership."
            >
              <EditorialTable
                headers={["Failure Mode", "Risk", "Prevention"]}
                widths={["30%", "31%", "39%"]}
                rows={failureModes}
              />
            </Chapter>

            <Chapter
              id="readiness-checklist"
              title="Automotive OTA Localization Readiness Checklist"
              intro="Use this checklist to assess whether your multilingual release process has the source, context, assets, controls, quality gates, and evidence needed for recurring OTA updates."
            >
              <div className="ota-wide-module ota-checklist-panel">
                <div className="ota-checklist-intro">
                  <p>
                    Review these eight workstreams together so product, engineering, localization,
                    quality, and market teams can confirm release readiness before deployment.
                  </p>
                </div>
                <div className="ota-checklist-grid">
                  {checklistGroups.map(([title, items]) => (
                    <ChecklistGroup title={title} items={items} key={title} />
                  ))}
                </div>
              </div>
            </Chapter>

            <Chapter
              id="stepes-support"
              title="Scalable Localization for Recurring Automotive Software Releases"
              intro="Stepes supports automotive organizations with multilingual workflows designed around content purpose, risk, format, market, and release cadence."
            >
              <div className="ota-wide-module ota-service-panel">
                <div className="ota-service-head">
                  <p>
                    Connect change detection, translation memory, terminology, AI + human review,
                    automated QA, in-context validation, versioned language assets, and enterprise
                    visibility within one recurring release process.
                  </p>
                </div>
                <div className="ota-service-grid">
                  {serviceItems.map(([title, text, label, href]) => (
                    <div className="ota-service-item" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <a href={href}>{label} <Arrow /></a>
                    </div>
                  ))}
                </div>
              </div>

              <Prose>
                <p>
                  Stepes supports automotive translation and localization across 100+ languages
                  with professional native linguists and structured quality processes. The final
                  workflow can be tailored to the vehicle system, content risk, language set,
                  release frequency, reviewer model, and validation environment.
                </p>
              </Prose>
            </Chapter>

            <Chapter
              id="faqs"
              title="Automotive OTA Localization FAQs"
              intro="Answers to common planning, workflow, quality, AI, version-control, and governance questions."
            >
              <div className="ota-wide-module ota-faq-panel">
                {faqs.map(([question, answer], index) => (
                  <details className="ota-faq-item" key={question} open={index === 0}>
                    <summary>{question}</summary>
                    <div className="ota-faq-answer"><p>{answer}</p></div>
                  </details>
                ))}
              </div>
            </Chapter>

            <Chapter
              id="sources"
              title="Sources and References"
              intro="This guide draws on primary standards, regulatory materials, and official automotive cybersecurity guidance."
            >
              <ul className="ota-sources">
                {sources.map(([title, publisher, href]) => (
                  <li className="ota-source" key={title}>
                    <div>
                      <strong>{title}</strong>
                      <span>{publisher}</span>
                    </div>
                    <a href={href}>View Source <Arrow /></a>
                  </li>
                ))}
              </ul>
            </Chapter>

            <section className="ota-conclusion" aria-labelledby="conclusion-title">
              <h2 id="conclusion-title">Keep Every Language Aligned With Every Release</h2>
              <p>
                Automotive OTA localization works best when language is treated as part of release
                engineering rather than a final handoff. A controlled program should:
              </p>
              <ul>
                <li>Identify exactly what changed.</li>
                <li>Preserve the applicable approved language.</li>
                <li>Connect every translation with the correct vehicle and software state.</li>
                <li>Route content according to risk.</li>
                <li>Validate language in context.</li>
                <li>Record approvals and exceptions.</li>
                <li>Turn every resolved issue into a reusable improvement.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="ota-related-section" aria-labelledby="related-title">
        <div className="ota-shell">
          <div className="ota-related-head">
            <p className="ota-eyebrow">Continue Exploring</p>
            <h2 className="ota-section-title" id="related-title">Related Automotive Localization Resources</h2>
            <p>
              Continue from recurring multilingual release operations into interface localization,
              technical documentation, terminology, EV content, and in-vehicle linguistic testing.
            </p>
          </div>
          <div className="ota-related-grid">
            {relatedResources.map(([title, text, href]) => (
              <article className="ota-related-item" key={title}>
                <a href={href}>{title} <Arrow /></a>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ota-final-cta-section">
        <div className="ota-shell">
          <div className="ota-final-cta">
            <div>
              <p className="ota-eyebrow">Plan Your OTA Localization Workflow</p>
              <h2>Build a Controlled Multilingual Release Process</h2>
              <p>
                Talk with Stepes about continuous localization, release deltas, automotive
                terminology, risk-based review, rapid linguistic validation, and version-controlled
                language delivery.
              </p>
            </div>
            <div className="ota-final-actions">
              <a className="ota-btn ota-btn-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert <Arrow />
              </a>
              <a className="ota-btn ota-btn-secondary" href="https://app.stepes.com/quote/">
                Request a Quote <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
