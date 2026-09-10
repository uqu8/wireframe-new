import React from "react";

// Wireframe version: 4.0 — authority-response flow fit and responsive typography refinement.
const STYLES = `
.sesen-regulatory-wireframe {
  --sesen-blue: #4B6FD8;
  --sesen-blue-dark: #3659BB;
  --sesen-blue-deep: #253F8F;
  --sesen-blue-mid: #6F8BE1;
  --sesen-blue-soft: #EAF0FF;
  --sesen-blue-pale: #F5F7FF;
  --sesen-navy: #17264D;
  --sesen-ink: #111827;
  --sesen-lead: #293954;
  --sesen-body: #46546D;
  --sesen-muted: #68758B;
  --sesen-border: #DDE4F2;
  --sesen-divider: #E9EEF8;
  --sesen-surface: #F7F9FD;
  --sesen-white: #FFFFFF;
  --sesen-light-blue: #C8D6FF;
  --sesen-shadow: 0 18px 48px rgba(23, 38, 77, 0.08);
  width: 100%;
  overflow: hidden;
  color: var(--sesen-body);
  background: var(--sesen-white);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

.sesen-regulatory-wireframe *,
.sesen-regulatory-wireframe *::before,
.sesen-regulatory-wireframe *::after {
  box-sizing: border-box;
}

.sesen-regulatory-wireframe a {
  color: var(--sesen-blue-dark);
  text-decoration: none;
}

.sesen-regulatory-wireframe a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.sesen-regulatory-wireframe a:focus-visible,
.sesen-regulatory-wireframe button:focus-visible,
.sesen-regulatory-wireframe summary:focus-visible {
  outline: 3px solid rgba(75, 111, 216, 0.34);
  outline-offset: 4px;
}

.sesen-regulatory-wireframe img,
.sesen-regulatory-wireframe svg {
  max-width: 100%;
}

.sesen-regulatory-wireframe .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sesen-regulatory-wireframe .sesen-shell {
  width: min(1280px, calc(100% - 112px));
  margin: 0 auto;
}

.sesen-regulatory-wireframe .sesen-section {
  padding: 96px 0;
}

.sesen-regulatory-wireframe .sesen-section--dense {
  padding: 80px 0;
}

.sesen-regulatory-wireframe .sesen-section--soft {
  background: var(--sesen-surface);
}

.sesen-regulatory-wireframe .sesen-section--blue-soft {
  background: var(--sesen-blue-pale);
}

.sesen-regulatory-wireframe .sesen-section--deep {
  color: var(--sesen-white);
  background: var(--sesen-navy);
}

.sesen-regulatory-wireframe .sesen-eyebrow {
  margin: 0 0 14px;
  color: var(--sesen-blue-dark);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.sesen-regulatory-wireframe .sesen-section--deep .sesen-eyebrow {
  color: var(--sesen-light-blue);
}

.sesen-regulatory-wireframe h1,
.sesen-regulatory-wireframe h2,
.sesen-regulatory-wireframe h3,
.sesen-regulatory-wireframe h4 {
  margin: 0;
  color: var(--sesen-navy);
  font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-stretch: 100%;
  font-weight: 500;
}

.sesen-regulatory-wireframe .sesen-section--deep h2,
.sesen-regulatory-wireframe .sesen-section--deep h3,
.sesen-regulatory-wireframe .sesen-section--deep h4 {
  color: var(--sesen-white);
}

.sesen-regulatory-wireframe h1 {
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.sesen-regulatory-wireframe h2 {
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: normal;
}

.sesen-regulatory-wireframe h3 {
  font-size: 23px;
  line-height: 1.3;
}

.sesen-regulatory-wireframe h4 {
  font-size: 19px;
  line-height: 1.35;
}

.sesen-regulatory-wireframe p {
  margin: 0;
}

.sesen-regulatory-wireframe .sesen-lead {
  color: var(--sesen-lead);
  font-size: 19px;
  line-height: 1.65;
}

.sesen-regulatory-wireframe .sesen-section--deep .sesen-lead,
.sesen-regulatory-wireframe .sesen-section--deep p {
  color: #E4EAF8;
}

.sesen-regulatory-wireframe .sesen-muted {
  color: var(--sesen-muted);
}

.sesen-regulatory-wireframe .sesen-section-head {
  max-width: 820px;
  margin-bottom: 46px;
}

.sesen-regulatory-wireframe .sesen-section-head h2 + p {
  margin-top: 18px;
}

.sesen-regulatory-wireframe .sesen-section-head--center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.sesen-regulatory-wireframe .sesen-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  color: var(--sesen-blue-dark);
  font-weight: 700;
}

.sesen-regulatory-wireframe .sesen-inline-link::after {
  content: "→";
  transition: transform 160ms ease;
}

.sesen-regulatory-wireframe .sesen-inline-link:hover::after {
  transform: translateX(3px);
}

.sesen-regulatory-wireframe .sesen-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.sesen-regulatory-wireframe .sesen-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 27px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.035em;
  line-height: 1;
  text-decoration: none;
  transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.sesen-regulatory-wireframe .sesen-button:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.sesen-regulatory-wireframe .sesen-button--primary {
  color: #FFFFFF;
  background: var(--sesen-blue);
}

.sesen-regulatory-wireframe .sesen-button--primary:hover {
  color: #FFFFFF;
  background: var(--sesen-blue-dark);
}

.sesen-regulatory-wireframe .sesen-button--secondary {
  color: var(--sesen-ink);
  background: #FFFFFF;
  border-color: var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-button--secondary:hover {
  color: var(--sesen-ink);
  background: var(--sesen-blue-pale);
  border-color: #C7D4F4;
}



/* Editorial spacing utilities */
.sesen-regulatory-wireframe .sesen-copy-gap {
  margin-top: 16px;
}

.sesen-regulatory-wireframe .sesen-copy-gap-sm {
  margin-top: 10px;
}

.sesen-regulatory-wireframe .sesen-copy-gap-lg {
  margin-top: 24px;
}

.sesen-regulatory-wireframe .sesen-authority-note {
  max-width: 820px;
  margin-top: 34px;
}

.sesen-regulatory-wireframe .sesen-section-head--flush {
  margin-bottom: 0;
}

.sesen-regulatory-wireframe .sesen-flow-detail {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-link-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 18px;
}

.sesen-regulatory-wireframe .sesen-link-stack .sesen-inline-link {
  margin-top: 0;
}

/* Hero */
.sesen-regulatory-wireframe .sesen-regulatory-hero {
  position: relative;
  padding: 96px 0 90px;
  background:
    radial-gradient(circle at 88% 22%, rgba(234, 240, 255, 0.95), rgba(234, 240, 255, 0) 34%),
    linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
  border-bottom: 1px solid var(--sesen-divider);
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
  gap: 64px;
  align-items: center;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__copy {
  max-width: 690px;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__copy .sesen-lead {
  margin-top: 22px;
  max-width: 680px;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__support {
  margin-top: 14px;
  max-width: 660px;
  color: var(--sesen-body);
  font-size: 17px;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__art {
  position: relative;
  min-height: 490px;
  display: grid;
  place-items: center;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__art-frame {
  width: 100%;
  max-width: 505px;
  padding: 8px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.sesen-regulatory-wireframe .sesen-regulatory-hero__art svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Trust band */
.sesen-regulatory-wireframe .sesen-trust-band {
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-trust-band__inner {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-top: 1px solid var(--sesen-divider);
  border-bottom: 1px solid var(--sesen-divider);
}

.sesen-regulatory-wireframe .sesen-trust-item {
  position: relative;
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 18px;
  text-align: center;
  color: var(--sesen-navy);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
}

/* Intentionally no vertical divider walls: the trust band is framed by its top and bottom rules. */

/* Four-point authority */
.sesen-regulatory-wireframe .sesen-principles {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
  padding-top: 8px;
}

.sesen-regulatory-wireframe .sesen-principle {
  padding-top: 20px;
  border-top: 2px solid var(--sesen-blue);
}

.sesen-regulatory-wireframe .sesen-principle h3 {
  margin-bottom: 12px;
}

/* Lifecycle */
.sesen-regulatory-wireframe .sesen-lifecycle {
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0;
  margin-top: 10px;
}

.sesen-regulatory-wireframe .sesen-lifecycle::before {
  content: "";
  position: absolute;
  top: 31px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: #CAD6F4;
}

.sesen-regulatory-wireframe .sesen-lifecycle__step {
  position: relative;
  z-index: 1;
  padding: 0 13px;
}

.sesen-regulatory-wireframe .sesen-lifecycle__marker {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  margin-bottom: 22px;
  border: 2px solid #B9C9EF;
  border-radius: 50%;
  color: var(--sesen-blue-dark);
  background: #FFFFFF;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 15px;
  font-weight: 600;
}

.sesen-regulatory-wireframe .sesen-lifecycle__step h3 {
  margin-bottom: 9px;
  font-size: 20px;
}

.sesen-regulatory-wireframe .sesen-lifecycle__step p {
  color: var(--sesen-muted);
  font-size: 16px;
  line-height: 1.55;
}

.sesen-regulatory-wireframe .sesen-lifecycle__summary {
  margin-top: 38px;
  padding: 20px 24px;
  border: 1px solid #D5E0F8;
  border-radius: 18px;
  color: var(--sesen-navy);
  background: rgba(255,255,255,0.75);
  font-weight: 600;
  text-align: center;
}

/* Document taxonomy */
.sesen-regulatory-wireframe .sesen-taxonomy {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--sesen-border);
  border-left: 1px solid var(--sesen-border);
  border-radius: 26px;
  overflow: hidden;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-taxonomy__group {
  min-height: 330px;
  padding: 32px 30px;
  border-right: 1px solid var(--sesen-border);
  border-bottom: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-taxonomy__group h3 {
  margin-bottom: 16px;
}

.sesen-regulatory-wireframe .sesen-taxonomy__group ul,
.sesen-regulatory-wireframe .sesen-plain-list {
  margin: 0;
  padding-left: 19px;
}

.sesen-regulatory-wireframe .sesen-taxonomy__group li,
.sesen-regulatory-wireframe .sesen-plain-list li {
  margin: 8px 0;
  padding-left: 3px;
}

.sesen-regulatory-wireframe .sesen-taxonomy__group li::marker,
.sesen-regulatory-wireframe .sesen-plain-list li::marker {
  color: var(--sesen-blue);
}

/* CTD centerpiece */
.sesen-regulatory-wireframe .sesen-ctd-grid {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 56px;
  align-items: start;
}

.sesen-regulatory-wireframe .sesen-ctd-intro {
  position: sticky;
  top: 28px;
}

.sesen-regulatory-wireframe .sesen-ctd-intro .sesen-lead {
  margin-top: 20px;
}

.sesen-regulatory-wireframe .sesen-ctd-stack {
  display: grid;
  gap: 12px;
}

.sesen-regulatory-wireframe .sesen-ctd-module {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  padding: 28px;
  border: 1px solid var(--sesen-border);
  border-radius: 20px;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-ctd-module__number {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: var(--sesen-blue-deep);
  background: var(--sesen-blue-soft);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 17px;
  font-weight: 600;
}

.sesen-regulatory-wireframe .sesen-ctd-module h3 {
  margin-bottom: 8px;
}

.sesen-regulatory-wireframe .sesen-ctd-controls {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.sesen-regulatory-wireframe .sesen-ctd-control {
  padding: 18px 16px;
  border: 1px solid #D7E2FA;
  border-radius: 16px;
  color: var(--sesen-navy);
  background: #F9FBFF;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

/* Split editorial */
.sesen-regulatory-wireframe .sesen-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 64px;
  align-items: center;
}

.sesen-regulatory-wireframe .sesen-split--start {
  align-items: start;
}

.sesen-regulatory-wireframe .sesen-split__copy {
  max-width: 670px;
}

.sesen-regulatory-wireframe .sesen-split__copy h2 + p,
.sesen-regulatory-wireframe .sesen-split__copy h3 + p {
  margin-top: 18px;
}

.sesen-regulatory-wireframe .sesen-flow-panel,
.sesen-regulatory-wireframe .sesen-feature-panel {
  border: 1px solid var(--sesen-border);
  border-radius: 28px;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-flow-panel {
  padding: 28px;
}

.sesen-regulatory-wireframe .sesen-flow-track {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 16px minmax(0, 1fr) 16px minmax(0, 1fr) 16px minmax(0, 1fr);
  gap: 6px;
  align-items: center;
  width: 100%;
}

.sesen-regulatory-wireframe .sesen-flow-node {
  min-width: 0;
  min-height: 118px;
  display: grid;
  place-items: center;
  padding: 16px 8px;
  border: 1px solid #D8E3F9;
  border-radius: 18px;
  color: var(--sesen-navy);
  background: var(--sesen-blue-pale);
  font-size: clamp(12px, 1.15vw, 14px);
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
  overflow-wrap: normal;
  word-break: normal;
  hyphens: auto;
}

.sesen-regulatory-wireframe .sesen-flow-arrow {
  min-width: 0;
  color: var(--sesen-blue-dark);
  font-size: 20px;
  line-height: 1;
  text-align: center;
}

.sesen-regulatory-wireframe .sesen-bullet-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px 40px;
  margin-top: 30px;
}

.sesen-regulatory-wireframe .sesen-bullet-group {
  padding-top: 20px;
  border-top: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-bullet-group h3 {
  margin-bottom: 11px;
}

/* Operational rows */
.sesen-regulatory-wireframe .sesen-rows {
  border-top: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-row {
  display: grid;
  grid-template-columns: minmax(220px, 0.42fr) minmax(0, 1.58fr);
  gap: 44px;
  padding: 30px 0;
  border-bottom: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-row h3 {
  font-size: 21px;
}

/* PV matrix */
.sesen-regulatory-wireframe .sesen-pv-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.sesen-regulatory-wireframe .sesen-pv-block {
  padding: 30px;
  border: 1px solid var(--sesen-border);
  border-radius: 22px;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-pv-block h3 {
  margin-bottom: 12px;
}

/* Terminology visual */
.sesen-regulatory-wireframe .sesen-terminology-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
  gap: 56px;
  align-items: center;
}

.sesen-regulatory-wireframe .sesen-terminology-visual {
  position: relative;
  min-height: 510px;
  border: 1px solid var(--sesen-border);
  border-radius: 30px;
  background: #FFFFFF;
  overflow: hidden;
}

.sesen-regulatory-wireframe .sesen-term-center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  width: 190px;
  height: 190px;
  display: grid;
  place-items: center;
  padding: 25px;
  transform: translate(-50%, -50%);
  border: 1px solid #B9C9EF;
  border-radius: 50%;
  color: #FFFFFF;
  background: var(--sesen-blue);
  box-shadow: 0 14px 40px rgba(75, 111, 216, 0.20);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  text-align: center;
}

.sesen-regulatory-wireframe .sesen-term-node {
  position: absolute;
  z-index: 2;
  min-width: 118px;
  padding: 12px 15px;
  border: 1px solid #D1DDF6;
  border-radius: 999px;
  color: var(--sesen-navy);
  background: #F8FAFF;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.sesen-regulatory-wireframe .sesen-term-node--1 { left: 8%; top: 14%; }
.sesen-regulatory-wireframe .sesen-term-node--2 { right: 8%; top: 14%; }
.sesen-regulatory-wireframe .sesen-term-node--3 { left: 3%; top: 44%; }
.sesen-regulatory-wireframe .sesen-term-node--4 { right: 3%; top: 44%; }
.sesen-regulatory-wireframe .sesen-term-node--5 { left: 9%; bottom: 14%; }
.sesen-regulatory-wireframe .sesen-term-node--6 { right: 9%; bottom: 14%; }
.sesen-regulatory-wireframe .sesen-term-node--7 { left: 50%; bottom: 4%; transform: translateX(-50%); }

.sesen-regulatory-wireframe .sesen-term-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.sesen-regulatory-wireframe .sesen-asset-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 24px;
}

.sesen-regulatory-wireframe .sesen-asset-chip {
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--sesen-blue-deep);
  background: var(--sesen-blue-soft);
  font-size: 13px;
  font-weight: 600;
}

/* Workflow */
.sesen-regulatory-wireframe .sesen-workflow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--sesen-border);
  border-left: 1px solid var(--sesen-border);
  border-radius: 26px;
  overflow: hidden;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-workflow__step {
  min-height: 288px;
  padding: 30px;
  border-right: 1px solid var(--sesen-border);
  border-bottom: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-workflow__number {
  margin-bottom: 22px;
  color: var(--sesen-blue-dark);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.sesen-regulatory-wireframe .sesen-workflow__step h3 {
  margin-bottom: 12px;
}

.sesen-regulatory-wireframe .sesen-workflow__continuation {
  margin-top: 20px;
  padding: 20px 24px;
  border-radius: 18px;
  color: var(--sesen-navy);
  background: var(--sesen-blue-soft);
  font-weight: 600;
  text-align: center;
}

/* AI */
.sesen-regulatory-wireframe .sesen-ai-panel {
  padding: 38px;
  border: 1px solid #D7E2FA;
  border-radius: 28px;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-ai-stack {
  display: grid;
  gap: 10px;
}

.sesen-regulatory-wireframe .sesen-ai-layer {
  padding: 18px 20px;
  border: 1px solid #D7E2FA;
  border-radius: 16px;
  color: var(--sesen-navy);
  background: #F9FBFF;
}

.sesen-regulatory-wireframe .sesen-ai-layer strong {
  display: block;
  margin-bottom: 4px;
  font-family: "Inter Tight", Inter, sans-serif;
  font-weight: 500;
}

.sesen-regulatory-wireframe .sesen-ai-layer--human {
  color: #FFFFFF;
  background: var(--sesen-blue);
  border-color: var(--sesen-blue);
}

.sesen-regulatory-wireframe .sesen-ai-layer--human span {
  color: #EDF2FF;
}

/* Global */
.sesen-regulatory-wireframe .sesen-global-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 430px;
  gap: 64px;
  align-items: center;
}

.sesen-regulatory-wireframe .sesen-global-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 34px;
  margin-top: 32px;
}

.sesen-regulatory-wireframe .sesen-global-point {
  padding-top: 18px;
  border-top: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-global-point h3 {
  margin-bottom: 8px;
  font-size: 20px;
}

.sesen-regulatory-wireframe .sesen-global-visual {
  padding: 30px;
  border: 1px solid var(--sesen-border);
  border-radius: 50%;
  background: #FFFFFF;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

.sesen-regulatory-wireframe .sesen-global-visual svg {
  width: 100%;
  height: 100%;
}

/* Quality / security */
.sesen-regulatory-wireframe .sesen-quality-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 38px;
}

.sesen-regulatory-wireframe .sesen-quality-block {
  padding: 24px 0 28px;
  border: 0;
  border-top: 1px solid #BFD0F1;
  border-radius: 0;
  background: transparent;
}

.sesen-regulatory-wireframe .sesen-quality-block h3 {
  margin-bottom: 9px;
}

.sesen-regulatory-wireframe .sesen-quality-kicker {
  display: block;
  margin-bottom: 12px;
  color: var(--sesen-blue-dark);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* Audience */
.sesen-regulatory-wireframe .sesen-audiences {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 34px;
}

.sesen-regulatory-wireframe .sesen-audience {
  min-height: auto;
  padding: 20px 0 4px;
  border: 0;
  border-top: 1px solid #BFD0F1;
}

.sesen-regulatory-wireframe .sesen-audience h3 {
  margin-bottom: 10px;
}

/* Why Sesen */
.sesen-regulatory-wireframe .sesen-differentiators {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 34px;
}

.sesen-regulatory-wireframe .sesen-differentiator {
  padding-top: 18px;
  border-top: 1px solid #BFD0F1;
}

.sesen-regulatory-wireframe .sesen-differentiator h3 {
  margin-bottom: 10px;
}

/* Related services */
.sesen-regulatory-wireframe .sesen-service-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--sesen-border);
  border-left: 1px solid var(--sesen-border);
  border-radius: 26px;
  overflow: hidden;
  background: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-service-link {
  min-height: 220px;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-right: 1px solid var(--sesen-border);
  border-bottom: 1px solid var(--sesen-border);
  color: var(--sesen-body);
}

.sesen-regulatory-wireframe .sesen-service-link:hover {
  text-decoration: none;
  background: #FAFBFF;
}

.sesen-regulatory-wireframe .sesen-service-link h3 {
  margin-bottom: 10px;
}

.sesen-regulatory-wireframe .sesen-service-link__action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 22px;
  color: var(--sesen-blue-dark);
  font-weight: 700;
}

/* FAQ */
.sesen-regulatory-wireframe .sesen-faq-list {
  max-width: 920px;
  border-top: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-faq {
  border-bottom: 1px solid var(--sesen-border);
}

.sesen-regulatory-wireframe .sesen-faq summary {
  position: relative;
  cursor: pointer;
  list-style: none;
  padding: 24px 54px 24px 0;
  color: var(--sesen-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.4;
}

.sesen-regulatory-wireframe .sesen-faq summary::-webkit-details-marker {
  display: none;
}

.sesen-regulatory-wireframe .sesen-faq summary::before,
.sesen-regulatory-wireframe .sesen-faq summary::after {
  content: "";
  position: absolute;
  right: 6px;
  top: 50%;
  width: 18px;
  height: 2px;
  background: var(--sesen-blue-dark);
  transform: translateY(-50%);
  transition: transform 160ms ease;
}

.sesen-regulatory-wireframe .sesen-faq summary::after {
  transform: translateY(-50%) rotate(90deg);
}

.sesen-regulatory-wireframe .sesen-faq[open] summary::after {
  transform: translateY(-50%) rotate(0deg);
}

.sesen-regulatory-wireframe .sesen-faq__answer {
  max-width: 840px;
  padding: 0 54px 26px 0;
  color: var(--sesen-body);
  font-size: 16px;
}

/* CTA */
.sesen-regulatory-wireframe .sesen-final-cta {
  padding: 88px 0;
  background: linear-gradient(135deg, #17264D 0%, #253F8F 100%);
}

.sesen-regulatory-wireframe .sesen-final-cta__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 56px;
  align-items: center;
}

.sesen-regulatory-wireframe .sesen-final-cta h2 {
  color: #FFFFFF;
}

.sesen-regulatory-wireframe .sesen-final-cta p {
  max-width: 790px;
  margin-top: 18px;
  color: #DFE6F7;
  font-size: 18px;
}

.sesen-regulatory-wireframe .sesen-final-cta .sesen-button-row {
  margin-top: 0;
  justify-content: flex-end;
}

.sesen-regulatory-wireframe .sesen-final-cta .sesen-button--secondary {
  border-color: rgba(255,255,255,0.65);
}

@media (max-width: 1180px) {
  .sesen-regulatory-wireframe .sesen-shell {
    width: min(1280px, calc(100% - 80px));
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__grid {
    grid-template-columns: minmax(0, 1fr) minmax(340px, 0.8fr);
    gap: 44px;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 28px 0;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle::before {
    display: none;
  }

  .sesen-regulatory-wireframe .sesen-ctd-grid {
    grid-template-columns: minmax(270px, 0.62fr) minmax(0, 1.38fr);
    gap: 38px;
  }
}

@media (max-width: 900px) {
  .sesen-regulatory-wireframe .sesen-shell {
    width: calc(100% - 58px);
  }

  .sesen-regulatory-wireframe .sesen-section,
  .sesen-regulatory-wireframe .sesen-section--dense {
    padding: 76px 0;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero {
    padding: 82px 0;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__grid,
  .sesen-regulatory-wireframe .sesen-split,
  .sesen-regulatory-wireframe .sesen-terminology-layout,
  .sesen-regulatory-wireframe .sesen-global-layout,
  .sesen-regulatory-wireframe .sesen-final-cta__inner,
  .sesen-regulatory-wireframe .sesen-ctd-grid {
    grid-template-columns: 1fr;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__art {
    min-height: auto;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__art-frame {
    max-width: 590px;
    margin: 8px auto 0;
  }

  .sesen-regulatory-wireframe .sesen-trust-band__inner {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sesen-regulatory-wireframe .sesen-trust-item:nth-child(-n+3) {
    border-bottom: 1px solid var(--sesen-divider);
  }

  .sesen-regulatory-wireframe .sesen-principles,
  .sesen-regulatory-wireframe .sesen-taxonomy,
  .sesen-regulatory-wireframe .sesen-workflow,
  .sesen-regulatory-wireframe .sesen-audiences,
  .sesen-regulatory-wireframe .sesen-differentiators,
  .sesen-regulatory-wireframe .sesen-service-links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sesen-regulatory-wireframe .sesen-ctd-intro {
    position: static;
  }

  .sesen-regulatory-wireframe .sesen-global-visual {
    width: min(430px, 100%);
  }

  .sesen-regulatory-wireframe .sesen-final-cta .sesen-button-row {
    justify-content: flex-start;
  }


  .sesen-regulatory-wireframe .sesen-terminology-visual {
    width: min(680px, 100%);
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .sesen-regulatory-wireframe .sesen-shell {
    width: calc(100% - 40px);
  }

  .sesen-regulatory-wireframe .sesen-section,
  .sesen-regulatory-wireframe .sesen-section--dense {
    padding: 68px 0;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero {
    padding: 70px 0 66px;
  }

  .sesen-regulatory-wireframe h1 {
    font-size: 42px;
  }

  .sesen-regulatory-wireframe h2 {
    font-size: 32px;
  }

  .sesen-regulatory-wireframe h3 {
    font-size: 21px;
  }

  .sesen-regulatory-wireframe .sesen-lead {
    font-size: 18px;
  }

  .sesen-regulatory-wireframe .sesen-section-head {
    margin-bottom: 36px;
  }

  .sesen-regulatory-wireframe .sesen-button-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .sesen-regulatory-wireframe .sesen-button {
    width: 100%;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__art-frame {
    padding: 0;
  }

  .sesen-regulatory-wireframe .sesen-trust-band__inner,
  .sesen-regulatory-wireframe .sesen-principles,
  .sesen-regulatory-wireframe .sesen-taxonomy,
  .sesen-regulatory-wireframe .sesen-pv-grid,
  .sesen-regulatory-wireframe .sesen-workflow,
  .sesen-regulatory-wireframe .sesen-quality-grid,
  .sesen-regulatory-wireframe .sesen-audiences,
  .sesen-regulatory-wireframe .sesen-differentiators,
  .sesen-regulatory-wireframe .sesen-service-links,
  .sesen-regulatory-wireframe .sesen-global-points,
  .sesen-regulatory-wireframe .sesen-bullet-columns {
    grid-template-columns: 1fr;
  }

  .sesen-regulatory-wireframe .sesen-trust-item {
    min-height: 72px;
    justify-content: flex-start;
    text-align: left;
    border-bottom: 1px solid var(--sesen-divider);
  }

  .sesen-regulatory-wireframe .sesen-trust-item::after {
    display: none !important;
  }

  .sesen-regulatory-wireframe .sesen-trust-item:last-child {
    border-bottom: 0;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle {
    grid-template-columns: 1fr;
    gap: 0;
    border-left: 2px solid #CAD6F4;
    margin-left: 30px;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__step {
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr);
    column-gap: 18px;
    padding: 0 0 32px 0;
    transform: translateX(-31px);
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__marker {
    grid-column: 1;
    grid-row: 1 / span 2;
    margin-bottom: 0;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__step h3,
  .sesen-regulatory-wireframe .sesen-lifecycle__step p {
    grid-column: 2;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__step h3 {
    align-self: end;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__summary {
    margin-top: 10px;
  }

  .sesen-regulatory-wireframe .sesen-taxonomy {
    border-radius: 20px;
  }

  .sesen-regulatory-wireframe .sesen-taxonomy__group,
  .sesen-regulatory-wireframe .sesen-workflow__step,
  .sesen-regulatory-wireframe .sesen-audience,
  .sesen-regulatory-wireframe .sesen-service-link {
    min-height: auto;
  }

  .sesen-regulatory-wireframe .sesen-ctd-module {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 22px;
  }

  .sesen-regulatory-wireframe .sesen-ctd-module__number {
    min-height: 52px;
  }

  .sesen-regulatory-wireframe .sesen-ctd-controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sesen-regulatory-wireframe .sesen-flow-panel {
    padding: 22px;
  }

  .sesen-regulatory-wireframe .sesen-flow-track {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }

  .sesen-regulatory-wireframe .sesen-flow-node {
    min-height: 72px;
  }

  .sesen-regulatory-wireframe .sesen-flow-arrow {
    transform: rotate(90deg);
  }

  .sesen-regulatory-wireframe .sesen-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .sesen-regulatory-wireframe .sesen-terminology-visual {
    min-height: 570px;
  }

  .sesen-regulatory-wireframe .sesen-term-center {
    width: 160px;
    height: 160px;
    font-size: 18px;
  }

  .sesen-regulatory-wireframe .sesen-term-node {
    min-width: 105px;
    padding: 10px 11px;
    font-size: 13px;
  }

  .sesen-regulatory-wireframe .sesen-term-node--1 { left: 4%; top: 12%; }
  .sesen-regulatory-wireframe .sesen-term-node--2 { right: 4%; top: 12%; }
  .sesen-regulatory-wireframe .sesen-term-node--3 { left: 2%; top: 34%; }
  .sesen-regulatory-wireframe .sesen-term-node--4 { right: 2%; top: 34%; }
  .sesen-regulatory-wireframe .sesen-term-node--5 { left: 4%; bottom: 18%; }
  .sesen-regulatory-wireframe .sesen-term-node--6 { right: 4%; bottom: 18%; }
  .sesen-regulatory-wireframe .sesen-term-node--7 { bottom: 4%; }

  .sesen-regulatory-wireframe .sesen-global-visual {
    width: 100%;
  }

  .sesen-regulatory-wireframe .sesen-faq summary {
    padding-right: 44px;
    font-size: 20px;
  }

  .sesen-regulatory-wireframe .sesen-faq__answer {
    padding-right: 0;
  }


  .sesen-regulatory-wireframe .sesen-button {
    min-height: 50px;
    padding: 14px 20px;
    line-height: 1.25;
    text-align: center;
    white-space: normal;
  }

  .sesen-regulatory-wireframe .sesen-regulatory-hero__art-frame {
    max-width: 440px;
  }

  .sesen-regulatory-wireframe .sesen-lifecycle__step:last-child {
    padding-bottom: 0;
  }

  .sesen-regulatory-wireframe .sesen-ctd-controls {
    gap: 10px;
  }

  .sesen-regulatory-wireframe .sesen-ai-panel {
    padding: 22px;
  }

  .sesen-regulatory-wireframe .sesen-terminology-visual {
    min-height: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 20px;
    border-radius: 22px;
    overflow: visible;
  }

  .sesen-regulatory-wireframe .sesen-term-lines {
    display: none;
  }

  .sesen-regulatory-wireframe .sesen-term-center {
    position: static;
    width: auto;
    height: auto;
    grid-column: 1 / -1;
    padding: 18px;
    transform: none;
    border-radius: 18px;
    font-size: 18px;
  }

  .sesen-regulatory-wireframe .sesen-term-node,
  .sesen-regulatory-wireframe .sesen-term-node--1,
  .sesen-regulatory-wireframe .sesen-term-node--2,
  .sesen-regulatory-wireframe .sesen-term-node--3,
  .sesen-regulatory-wireframe .sesen-term-node--4,
  .sesen-regulatory-wireframe .sesen-term-node--5,
  .sesen-regulatory-wireframe .sesen-term-node--6,
  .sesen-regulatory-wireframe .sesen-term-node--7 {
    position: static;
    width: 100%;
    min-width: 0;
    padding: 12px 10px;
    transform: none;
  }

  .sesen-regulatory-wireframe .sesen-term-node--7 {
    grid-column: 1 / -1;
  }

  .sesen-regulatory-wireframe .sesen-global-visual {
    width: min(360px, 100%);
    margin: 0 auto;
    padding: 20px;
  }

  .sesen-regulatory-wireframe .sesen-final-cta {
    padding: 72px 0;
  }

  .sesen-regulatory-wireframe .sesen-final-cta p {
    font-size: 17px;
  }

}

@media (max-width: 360px) {
  .sesen-regulatory-wireframe h1 {
    font-size: 38px;
  }

  .sesen-regulatory-wireframe h2 {
    font-size: 30px;
  }

  .sesen-regulatory-wireframe .sesen-ctd-controls {
    grid-template-columns: 1fr;
  }

  .sesen-regulatory-wireframe .sesen-terminology-visual {
    min-height: 0;
  }

  .sesen-regulatory-wireframe .sesen-term-center {
    width: auto;
    height: auto;
    font-size: 16px;
  }


  .sesen-regulatory-wireframe .sesen-terminology-visual {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .sesen-regulatory-wireframe .sesen-term-center,
  .sesen-regulatory-wireframe .sesen-term-node--7 {
    grid-column: auto;
  }

}

@media (prefers-reduced-motion: reduce) {
  .sesen-regulatory-wireframe *,
  .sesen-regulatory-wireframe *::before,
  .sesen-regulatory-wireframe *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
`;

export default function RegulatoryTranslationServicesWireframeV3() {
  return (
    <>
      <style>{STYLES}</style>
      <main className="sesen-regulatory-wireframe">
      <section aria-labelledby="regulatory-hero-title" className="sesen-regulatory-hero">
        <div className="sesen-shell sesen-regulatory-hero__grid">
          <div className="sesen-regulatory-hero__copy">
            <h1 id="regulatory-hero-title">Regulatory Translation Services for Life Sciences</h1>
            <p className="sesen-lead">Support global submissions, health authority communication, labeling, quality systems, safety programs, and regulatory lifecycle updates with specialized life sciences translation across 150+ languages.</p>
            <p className="sesen-regulatory-hero__support">Sesen combines professional native life sciences linguists, controlled terminology, structured quality review, secure workflows, and AI-assisted technologies to help pharmaceutical, biotechnology, medical device, CRO, and healthcare organizations manage regulated multilingual content with greater consistency and control.</p>
            <div className="sesen-button-row">
              <a className="sesen-button sesen-button--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
              <a className="sesen-button sesen-button--secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            </div>
          </div>
          <div aria-hidden="true" className="sesen-regulatory-hero__art">
            <div className="sesen-regulatory-hero__art-frame">
              <svg viewBox="0 0 520 470">
                <defs>
                  <linearGradient id="heroPaper" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#F5F7FF" />
                  </linearGradient>
                </defs>
                <circle cx="260" cy="228" fill="#F5F7FF" r="178" />
                <circle cx="260" cy="228" fill="none" r="128" stroke="#DDE4F2" strokeDasharray="5 9" strokeWidth="2" />
                <path d="M112 114 C145 80 181 62 225 54" fill="none" stroke="#C7D4F4" strokeWidth="2" />
                <path d="M410 120 C385 83 349 61 305 51" fill="none" stroke="#C7D4F4" strokeWidth="2" />
                <path d="M423 333 C391 374 351 397 307 405" fill="none" stroke="#C7D4F4" strokeWidth="2" />
                <path d="M98 329 C126 371 166 396 211 407" fill="none" stroke="#C7D4F4" strokeWidth="2" />
                <g transform="translate(150 91)">
                  <rect fill="#EAF0FF" height="250" rx="18" stroke="#B7C8EE" strokeWidth="2" width="195" x="50" y="30" />
                  <rect fill="#F9FBFF" height="250" rx="18" stroke="#AFC1EA" strokeWidth="2" width="195" x="34" y="18" />
                  <rect fill="url(#heroPaper)" height="250" rx="18" stroke="#3659BB" strokeWidth="2.4" width="195" x="18" y="6" />
                  <rect fill="#4B6FD8" height="22" rx="11" width="62" x="42" y="33" />
                  <text fill="#FFFFFF" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" x="73" y="48">eCTD</text>
                  <rect fill="#293954" height="7" opacity="0.86" rx="3.5" width="112" x="42" y="77" />
                  <rect fill="#AAB7CC" height="5" rx="2.5" width="143" x="42" y="95" />
                  <rect fill="#CBD4E3" height="5" rx="2.5" width="130" x="42" y="108" />
                  <g transform="translate(42 137)">
                    <rect fill="#F5F7FF" height="25" rx="7" stroke="#DDE4F2" width="144" x="0" y="0" />
                    <circle cx="14" cy="12.5" fill="#4B6FD8" r="4" />
                    <rect fill="#68758B" height="6" rx="3" width="81" x="26" y="9" />
                  </g>
                  <g transform="translate(42 170)">
                    <rect fill="#F5F7FF" height="25" rx="7" stroke="#DDE4F2" width="144" x="0" y="0" />
                    <circle cx="14" cy="12.5" fill="#4B6FD8" r="4" />
                    <rect fill="#68758B" height="6" rx="3" width="95" x="26" y="9" />
                  </g>
                  <g transform="translate(42 203)">
                    <rect fill="#F5F7FF" height="25" rx="7" stroke="#DDE4F2" width="144" x="0" y="0" />
                    <circle cx="14" cy="12.5" fill="#4B6FD8" r="4" />
                    <rect fill="#68758B" height="6" rx="3" width="72" x="26" y="9" />
                  </g>
                  <circle cx="188" cy="206" fill="#FFFFFF" r="35" stroke="#4B6FD8" strokeWidth="2.3" />
                  <path d="M174 206 l9 9 19-23" fill="none" stroke="#4B6FD8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </g>
                <g>
                  <circle cx="89" cy="150" fill="#FFFFFF" r="28" stroke="#B8C8EB" strokeWidth="2" />
                  <path d="M76 151 h26 M89 138 v26" stroke="#3659BB" strokeLinecap="round" strokeWidth="2" />
                  <circle cx="430" cy="154" fill="#FFFFFF" r="28" stroke="#B8C8EB" strokeWidth="2" />
                  <path d="M418 154 c8-15 17-15 25 0 c-8 15-17 15-25 0Z" fill="none" stroke="#3659BB" strokeWidth="2" />
                  <circle cx="421" cy="154" fill="#3659BB" r="3" />
                  <circle cx="96" cy="326" fill="#FFFFFF" r="28" stroke="#B8C8EB" strokeWidth="2" />
                  <path d="M85 331 h22 v-14 h-22 z M89 317 v-8 h14 v8" fill="none" stroke="#3659BB" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="425" cy="328" fill="#FFFFFF" r="28" stroke="#B8C8EB" strokeWidth="2" />
                  <path d="M414 330 c6-10 16-14 23-8 M418 319 l4-7 M430 317 l5-6" fill="none" stroke="#3659BB" strokeLinecap="round" strokeWidth="2" />
                </g>
                <g fill="#4B6FD8">
                  <circle cx="130" cy="116" r="4" />
                  <circle cx="385" cy="119" r="4" />
                  <circle cx="386" cy="354" r="4" />
                  <circle cx="135" cy="357" r="4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Regulatory translation credentials" className="sesen-trust-band">
        <div className="sesen-shell sesen-trust-band__inner">
          <div className="sesen-trust-item">ISO 17100 Certified</div>
          <div className="sesen-trust-item">ISO 9001:2015 Certified</div>
          <div className="sesen-trust-item">ISO 13485:2016 Certified</div>
          <div className="sesen-trust-item">150+ Languages</div>
          <div className="sesen-trust-item">Professional Native Life Sciences Linguists</div>
          <div className="sesen-trust-item">Secure AWS Infrastructure</div>
        </div>
      </section>
      <section aria-labelledby="control-heading" className="sesen-section">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="control-heading">Regulatory Content Must Stay Controlled Across Languages</h2>
            <p className="sesen-lead">Regulatory content rarely exists as a single document. The same product, study, claim, safety statement, manufacturing term, or approved phrase can appear across submission modules, labeling, clinical documentation, quality systems, safety reports, and market-specific updates.</p>
            <p className="sesen-copy-gap">As that content moves across languages and regulatory cycles, translation quality depends on more than sentence-level accuracy. It requires control over terminology, references, versions, document relationships, and review decisions.</p>
          </div>
          <div className="sesen-principles">
            <article className="sesen-principle">
              <h3>Regulatory Accuracy</h3>
              <p>Scientific, medical, technical, and regulatory meaning must remain precise across languages. Numerical content, dosage information, references, claims, and safety-critical language require particular attention.</p>
            </article>
            <article className="sesen-principle">
              <h3>Terminology Consistency</h3>
              <p>Product terminology, study language, CMC terms, adverse event terminology, approved labeling language, and recurring regulatory phrases should remain aligned across connected documents.</p>
            </article>
            <article className="sesen-principle">
              <h3>Document Control</h3>
              <p>Drafts, revisions, amendments, reviewer comments, and country-specific adaptations need clear version awareness so multilingual content remains connected to the correct source.</p>
            </article>
            <article className="sesen-principle">
              <h3>Delivery Readiness</h3>
              <p>Translation, review, QA, and formatting should reflect how the content will actually be used—whether for submission, authority response, labeling, inspection, quality operations, or post-approval maintenance.</p>
            </article>
          </div>
          <p className="sesen-authority-note">Sesen applies terminology governance, translation memory, structured review, version-aware workflows, and quality controls to help regulated multilingual content remain coherent across complex document sets.</p>
        </div>
      </section>
      <section aria-labelledby="lifecycle-heading" className="sesen-section sesen-section--blue-soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <p className="sesen-eyebrow">REGULATORY LIFECYCLE</p>
            <h2 id="lifecycle-heading">Regulatory Translation Across the Product Lifecycle</h2>
            <p className="sesen-lead">Global regulatory translation does not end when an application is submitted. Multilingual content evolves throughout development, authority review, approval, commercialization, safety monitoring, and ongoing product maintenance.</p>
          </div>
          <div aria-label="Seven-stage regulatory translation lifecycle" className="sesen-lifecycle">
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">01</div>
              <h3>Prepare</h3>
              <p>Build multilingual readiness with regulatory documentation, terminology resources, reference materials, target-language and market requirements, and review requirements.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">02</div>
              <h3>Submit</h3>
              <p>Translate dossiers, CTD and eCTD content, applications, technical documentation, labeling components, and supporting materials.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">03</div>
              <h3>Respond</h3>
              <p>Support health authority questions, requests for information, deficiency responses, attachments, meeting materials, and regulatory correspondence.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">04</div>
              <h3>Approve & Launch</h3>
              <p>Prepare prescribing information, SmPCs, patient information, packaging, labels, IFUs, and country-specific approved product content.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">05</div>
              <h3>Operate</h3>
              <p>Maintain SOPs, QMS documentation, validation materials, CAPA content, audits, training, and other controlled operational content.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">06</div>
              <h3>Monitor</h3>
              <p>Support pharmacovigilance, adverse event content, periodic safety reports, risk-management materials, and post-market safety communication.</p>
            </article>
            <article className="sesen-lifecycle__step">
              <div className="sesen-lifecycle__marker">07</div>
              <h3>Maintain</h3>
              <p>Manage variations, amendments, labeling revisions, manufacturing changes, safety updates, product extensions, and recurring lifecycle content.</p>
            </article>
          </div>
          <div className="sesen-lifecycle__summary">One regulatory lifecycle. Many interconnected documents. A controlled multilingual workflow.</div>
        </div>
      </section>
      <section aria-labelledby="documents-heading" className="sesen-section">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="documents-heading">Regulatory Documents and Content We Translate</h2>
            <p className="sesen-lead">Sesen supports regulatory translation across pharmaceutical, biotechnology, medical device, clinical research, quality, and post-market environments. Workflows are adapted to the content type, target market, intended use, file format, risk level, and review requirements.</p>
          </div>
          <div className="sesen-taxonomy">
            <article className="sesen-taxonomy__group">
              <h3>Submissions & Dossiers</h3>
              <ul>
                <li>IND, NDA, BLA, ANDA, and MAA documentation</li>
                <li>CTD and eCTD content</li>
                <li>IMPDs and supporting materials</li>
                <li>Regional and administrative documentation</li>
                <li>Amendments, variations, and supplements</li>
                <li>Medical device 510(k), PMA, technical, and market-specific regulatory content</li>
              </ul>
            </article>
            <article className="sesen-taxonomy__group">
              <h3>Clinical & Scientific Regulatory Content</h3>
              <ul>
                <li>Clinical study reports</li>
                <li>Clinical trial protocols</li>
                <li>Investigator brochures</li>
                <li>Clinical summaries and overviews</li>
                <li>Nonclinical documentation</li>
                <li>Scientific and statistical supporting documentation</li>
              </ul>
            </article>
            <article className="sesen-taxonomy__group">
              <h3>CMC & Manufacturing</h3>
              <ul>
                <li>Quality and CMC modules</li>
                <li>Manufacturing-process documentation</li>
                <li>Specifications and analytical methods</li>
                <li>Stability documentation</li>
                <li>Validation materials</li>
                <li>Control strategies and supporting technical documentation</li>
              </ul>
              <a className="sesen-inline-link" href="https://www.sesen.com/cmc-document-translation-services/">CMC Document Translation Services</a>
            </article>
            <article className="sesen-taxonomy__group">
              <h3>Labeling & Product Information</h3>
              <ul>
                <li>Prescribing information</li>
                <li>Summaries of Product Characteristics</li>
                <li>Patient information leaflets</li>
                <li>Package inserts and medication guides</li>
                <li>Labels, packaging, warnings, and precautions</li>
                <li>IFUs and post-approval product-information updates</li>
              </ul>
            </article>
            <article className="sesen-taxonomy__group">
              <h3>Quality & Compliance Documentation</h3>
              <ul>
                <li>Standard operating procedures</li>
                <li>Work instructions and QMS documentation</li>
                <li>CAPA documentation</li>
                <li>Deviations and change controls</li>
                <li>Validation records</li>
                <li>Audit, inspection, training, and compliance content</li>
              </ul>
            </article>
            <article className="sesen-taxonomy__group">
              <h3>Pharmacovigilance & Safety</h3>
              <ul>
                <li>AE and SAE documentation</li>
                <li>ICSRs and SUSAR-related content</li>
                <li>Case narratives</li>
                <li>DSURs, PSURs, and PBRERs</li>
                <li>Risk management plans</li>
                <li>Safety communications and post-market surveillance documentation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="ctd-heading" className="sesen-section sesen-section--soft">
        <div className="sesen-shell sesen-ctd-grid">
          <div className="sesen-ctd-intro">
            <h2 id="ctd-heading">CTD and eCTD Translation for Global Regulatory Submissions</h2>
            <p className="sesen-lead">Regulatory submissions bring together scientific, clinical, quality, administrative, and product information that must remain aligned as one body of evidence.</p>
            <p className="sesen-copy-gap">For multilingual CTD and eCTD programs, quality depends not only on translating each document correctly, but also on maintaining terminology, references, study identifiers, product information, formatting, and prior translation decisions across interconnected modules and subsequent updates.</p>
            <div className="sesen-button-row">
              <a className="sesen-button sesen-button--primary" href="https://www.sesen.com/ectd-ctd-translation-services/">EXPLORE CTD & ECTD TRANSLATION</a>
            </div>
            <div className="sesen-link-stack">
              <a className="sesen-inline-link" href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation</a>
              <a className="sesen-inline-link" href="https://www.sesen.com/regulatory-submission-formatting/">Regulatory Submission Formatting</a>
            </div>
          </div>
          <div>
            <div className="sesen-ctd-stack">
              <article className="sesen-ctd-module">
                <div className="sesen-ctd-module__number">MODULE 1</div>
                <div>
                  <h3>Regional & Administrative Information</h3>
                  <p>Region-specific administrative content, application materials, product information, forms, labeling, correspondence, and supporting documents.</p>
                </div>
              </article>
              <article className="sesen-ctd-module">
                <div className="sesen-ctd-module__number">MODULE 2</div>
                <div>
                  <h3>CTD Summaries</h3>
                  <p>Quality, nonclinical, and clinical overviews and summaries with terminology aligned to the detailed evidence presented elsewhere in the dossier.</p>
                </div>
              </article>
              <article className="sesen-ctd-module">
                <div className="sesen-ctd-module__number">MODULE 3</div>
                <div>
                  <h3>Quality / CMC</h3>
                  <p>Drug substance and drug product information, manufacturing processes, specifications, analytical procedures, validation, stability, and related quality documentation.</p>
                </div>
              </article>
              <article className="sesen-ctd-module">
                <div className="sesen-ctd-module__number">MODULE 4</div>
                <div>
                  <h3>Nonclinical Study Reports</h3>
                  <p>Pharmacology, pharmacokinetic, toxicology, and other nonclinical documentation used within the submission package.</p>
                </div>
              </article>
              <article className="sesen-ctd-module">
                <div className="sesen-ctd-module__number">MODULE 5</div>
                <div>
                  <h3>Clinical Study Reports</h3>
                  <p>Clinical study documentation and supporting evidence with attention to study terminology, endpoints, safety language, references, and cross-document consistency.</p>
                </div>
              </article>
            </div>
            <div aria-label="Cross-module controls" className="sesen-ctd-controls">
              <div className="sesen-ctd-control">Terminology Governance</div>
              <div className="sesen-ctd-control">Reference Alignment</div>
              <div className="sesen-ctd-control">Version Management</div>
              <div className="sesen-ctd-control">Formatting & Structure</div>
              <div className="sesen-ctd-control">Translation Memory</div>
              <div className="sesen-ctd-control">Expert Review & QA</div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="authority-heading" className="sesen-section">
        <div className="sesen-shell sesen-split">
          <div className="sesen-split__copy">
            <h2 id="authority-heading">Health Authority Communication and Regulatory Responses</h2>
            <p className="sesen-lead">Submission is often the beginning of an ongoing review process. Regulatory affairs teams may need to respond to questions, requests for additional information, deficiencies, clarification requests, labeling comments, or other authority communication—sometimes under demanding timelines and across multiple internal and regional stakeholders.</p>
            <div className="sesen-bullet-columns">
              <div className="sesen-bullet-group">
                <h3>Response Content</h3>
                <ul className="sesen-plain-list">
                  <li>Health authority questions</li>
                  <li>Requests for information</li>
                  <li>Deficiency letters and sponsor responses</li>
                  <li>Clarification packages and attachments</li>
                </ul>
              </div>
              <div className="sesen-bullet-group">
                <h3>Review Coordination</h3>
                <ul className="sesen-plain-list">
                  <li>Meeting materials and correspondence</li>
                  <li>Local affiliate communication</li>
                  <li>Updated supporting documentation</li>
                  <li>Urgent and rolling response packages</li>
                </ul>
              </div>
            </div>
            <p className="sesen-copy-gap-lg">Using established glossaries, translation memory, prior submission content, product references, and reviewer decisions helps responses remain aligned with the multilingual documentation that preceded them.</p>
            <a className="sesen-inline-link" href="https://www.sesen.com/regulatory-affairs-translation-services/">Regulatory Affairs Translation Services</a>
          </div>
          <div aria-label="Health authority response workflow" className="sesen-flow-panel">
            <div className="sesen-flow-track">
              <div className="sesen-flow-node">Authority Question</div>
              <div aria-hidden="true" className="sesen-flow-arrow">→</div>
              <div className="sesen-flow-node">Response Content</div>
              <div aria-hidden="true" className="sesen-flow-arrow">→</div>
              <div className="sesen-flow-node">Multilingual Review</div>
              <div aria-hidden="true" className="sesen-flow-arrow">→</div>
              <div className="sesen-flow-node">Final Delivery</div>
            </div>
            <div className="sesen-flow-detail">
              <h3>Maintain continuity with the original submission</h3>
              <p className="sesen-copy-gap-sm">Terminology, references, study identifiers, product language, and reviewer decisions should remain consistent as authority interactions create new multilingual content.</p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="labeling-heading" className="sesen-section sesen-section--blue-soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="labeling-heading">Regulatory Labeling and Product Information Across Global Markets</h2>
            <p className="sesen-lead">Product information must communicate approved content accurately while meeting the linguistic and operational requirements of each target market. Sesen helps life sciences organizations maintain consistency across interconnected labeling components while supporting review, formatting, and recurring updates.</p>
          </div>
          <div className="sesen-rows">
            <article className="sesen-row">
              <h3>Drug Labeling & Product Information</h3>
              <p>Prescribing information, SmPCs, patient information leaflets, package inserts, medication guides, warnings, contraindications, approved safety statements, and product-information updates.</p>
            </article>
            <article className="sesen-row">
              <h3>Packaging & Artwork Content</h3>
              <p>Carton and container text, package labels, artwork text, symbols and accompanying language, layout-sensitive content, and market variants. In-context review can help identify truncation, misplaced text, formatting inconsistencies, and other layout issues.</p>
            </article>
            <article className="sesen-row">
              <h3>Medical Device Labeling & IFUs</h3>
              <p>Instructions for use, device labels, warnings and precautions, technical documentation, packaging content, software-related user content, and recurring product updates.</p>
            </article>
            <article className="sesen-row">
              <h3>Lifecycle Labeling Updates</h3>
              <p>Multilingual revisions supported through translation memory, terminology assets, reference materials, version-aware workflows, and review processes that distinguish new content from previously approved language.</p>
            </article>
          </div>
          <div className="sesen-button-row">
            <a className="sesen-button sesen-button--primary" href="https://www.sesen.com/drug-labeling-packaging-translation-services/">DRUG LABELING & PACKAGING TRANSLATION</a>
            <a className="sesen-button sesen-button--secondary" href="https://www.sesen.com/ifu-translation-services/">IFU TRANSLATION SERVICES</a>
          </div>
        </div>
      </section>
      <section aria-labelledby="quality-ops-heading" className="sesen-section">
        <div className="sesen-shell sesen-split sesen-split--start">
          <div className="sesen-split__copy">
            <h2 id="quality-ops-heading">Translation for Quality Systems and Regulated Operations</h2>
            <p className="sesen-lead">Regulatory translation extends beyond submissions and product labeling. Life sciences organizations rely on controlled documentation every day to manage processes, training, manufacturing, quality events, audits, inspections, and continuous improvement.</p>
            <p className="sesen-copy-gap">When those operations span countries and languages, internal documentation needs the same discipline applied to external regulatory content.</p>
            <div className="sesen-link-stack">
              <a className="sesen-inline-link" href="https://www.sesen.com/regulatory-compliance-translation-services/">Regulatory Compliance Translation Services</a>
              <a className="sesen-inline-link" href="https://www.sesen.com/sop-translation-services/">SOP Translation Services</a>
            </div>
          </div>
          <div className="sesen-rows">
            <article className="sesen-row">
              <h3>Controlled Procedures</h3>
              <p>SOPs, work instructions, process documents, policies, manuals, and related controlled materials with consistent procedural terminology.</p>
            </article>
            <article className="sesen-row">
              <h3>Quality Management Documentation</h3>
              <p>Quality manuals, QMS procedures, CAPAs, deviations, investigations, change controls, and corrective or preventive actions.</p>
            </article>
            <article className="sesen-row">
              <h3>Validation & Manufacturing</h3>
              <p>Validation protocols and reports, manufacturing documentation, specifications, process instructions, and controlled technical content.</p>
            </article>
            <article className="sesen-row">
              <h3>Audit & Inspection Readiness</h3>
              <p>Audit materials, inspection-related documents, findings, responses, evidence packages, and quality records requiring accurate multilingual communication.</p>
            </article>
            <article className="sesen-row">
              <h3>Training & Implementation</h3>
              <p>Regulated training materials aligned with the underlying procedures, terminology, and operational instructions used by employees and partners.</p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="pv-heading" className="sesen-section sesen-section--soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="pv-heading">Pharmacovigilance and Safety Translation</h2>
            <p className="sesen-lead">Drug safety content presents a distinct set of multilingual challenges. Case narratives may be time-sensitive. Periodic safety reports recur across the product lifecycle. Medical terminology must remain consistent, and new information may need to be incorporated without changing the meaning of prior safety language.</p>
          </div>
          <div className="sesen-pv-grid">
            <article className="sesen-pv-block">
              <h3>Case Intake & Safety Reporting</h3>
              <p>Adverse event reports, serious adverse event reports, individual case safety reports, SUSAR-related documentation, CIOMS forms, case narratives, follow-up information, and case updates.</p>
            </article>
            <article className="sesen-pv-block">
              <h3>Aggregate & Periodic Safety Reporting</h3>
              <p>DSURs, PSURs, PBRERs, annual safety reports, line listings, safety summaries, and benefit-risk updates.</p>
            </article>
            <article className="sesen-pv-block">
              <h3>Risk Management & Post-Market Safety</h3>
              <p>Risk management plans, risk-minimization materials, safety variations, signal-related documentation, post-marketing surveillance content, and safety data exchange documentation.</p>
            </article>
            <article className="sesen-pv-block">
              <h3>Safety Communication</h3>
              <p>Safety information for health authorities, healthcare professionals, affiliates, investigators, partners, and other stakeholders with controlled terminology and narrative accuracy.</p>
            </article>
          </div>
          <a className="sesen-inline-link" href="https://www.sesen.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services</a>
        </div>
      </section>
      <section aria-labelledby="terminology-heading" className="sesen-section">
        <div className="sesen-shell sesen-terminology-layout">
          <div className="sesen-split__copy">
            <h2 id="terminology-heading">Terminology Governance Across the Regulatory Lifecycle</h2>
            <p className="sesen-lead">Keep product, clinical, CMC, labeling, safety, and quality terminology consistent as regulated content moves across documents, languages, markets, and revisions. A regulatory program may involve hundreds or thousands of interconnected content elements, with the same approved terms recurring across submissions, clinical documents, labeling, safety reports, quality systems, and post-approval updates.</p>
            <p className="sesen-copy-gap">Sesen treats terminology as a managed regulatory asset rather than a project-by-project afterthought.</p>
            <div aria-label="Terminology assets" className="sesen-asset-strip">
              <span className="sesen-asset-chip">Glossaries</span>
              <span className="sesen-asset-chip">Termbases</span>
              <span className="sesen-asset-chip">Translation Memory</span>
              <span className="sesen-asset-chip">Style Guides</span>
              <span className="sesen-asset-chip">Client References</span>
              <span className="sesen-asset-chip">Reviewer Feedback</span>
            </div>
            <div className="sesen-link-stack">
              <a className="sesen-inline-link" href="https://www.sesen.com/terminology-management-harmonization/">Terminology Management & Harmonization</a>
              <a className="sesen-inline-link" href="https://www.sesen.com/ai-terminology-management/">AI for Terminology Management</a>
            </div>
          </div>
          <div aria-label="Approved regulatory terminology connected across submissions, clinical content, CMC, labeling, safety, quality, and lifecycle updates" className="sesen-terminology-visual" role="img">
            <svg aria-hidden="true" className="sesen-term-lines" viewBox="0 0 600 510">
              <g stroke="#C4D2F1" strokeWidth="2">
                <line x1="300" x2="110" y1="255" y2="85" />
                <line x1="300" x2="490" y1="255" y2="85" />
                <line x1="300" x2="70" y1="255" y2="225" />
                <line x1="300" x2="530" y1="255" y2="225" />
                <line x1="300" x2="120" y1="255" y2="418" />
                <line x1="300" x2="480" y1="255" y2="418" />
                <line x1="300" x2="300" y1="255" y2="488" />
              </g>
            </svg>
            <div className="sesen-term-center">Approved Regulatory Terminology</div>
            <div className="sesen-term-node sesen-term-node--1">Submissions</div>
            <div className="sesen-term-node sesen-term-node--2">Clinical</div>
            <div className="sesen-term-node sesen-term-node--3">CMC</div>
            <div className="sesen-term-node sesen-term-node--4">Labeling</div>
            <div className="sesen-term-node sesen-term-node--5">Safety</div>
            <div className="sesen-term-node sesen-term-node--6">Quality</div>
            <div className="sesen-term-node sesen-term-node--7">Lifecycle Updates</div>
          </div>
        </div>
      </section>
      <section aria-labelledby="workflow-heading" className="sesen-section sesen-section--blue-soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="workflow-heading">A Controlled Workflow for Regulatory Translation</h2>
            <p className="sesen-lead">Every regulatory translation program is different, but disciplined execution follows a common principle: quality controls should begin before translation and continue through final delivery.</p>
          </div>
          <div className="sesen-workflow">
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">01</div>
              <h3>Project & Content Assessment</h3>
              <p>Review content types, intended use, target languages and markets, regulatory context, source files, references, timelines, expected updates, and review requirements.</p>
            </article>
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">02</div>
              <h3>Terminology & Reference Alignment</h3>
              <p>Integrate client glossaries, prior approved translations, product terminology, translation memory, style guides, submission references, labeling references, and market-specific preferences.</p>
            </article>
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">03</div>
              <h3>Specialized Translation</h3>
              <p>Professional native linguists are selected according to language, subject-matter experience, document type, and intended use, with approved terminology and translation memory integrated into the workflow.</p>
            </article>
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">04</div>
              <h3>Independent Linguistic Review</h3>
              <p>Translated content is reviewed for accuracy, completeness, terminology, grammar, consistency, context, references, and adherence to project instructions.</p>
            </article>
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">05</div>
              <h3>Regulatory & Technical QA</h3>
              <p>Technology-assisted checks help identify potential issues involving terminology, numbers, units, dates, tags, formatting, repeated content, omissions, and cross-document inconsistencies.</p>
            </article>
            <article className="sesen-workflow__step">
              <div className="sesen-workflow__number">06</div>
              <h3>Formatting & Final Delivery</h3>
              <p>Files are prepared for the required delivery environment, including layout-sensitive content where applicable, followed by final QA against the approved content and project requirements.</p>
            </article>
          </div>
          <div className="sesen-workflow__continuation">For ongoing programs: Client / Affiliate Review → Feedback Reconciliation → Terminology Update → Translation Memory Update</div>
        </div>
      </section>
      <section aria-labelledby="ai-heading" className="sesen-section">
        <div className="sesen-shell sesen-split">
          <div className="sesen-split__copy">
            <p className="sesen-eyebrow">HUMAN EXPERTISE + TECHNOLOGY</p>
            <h2 id="ai-heading">Professional Regulatory Expertise Enhanced by AI</h2>
            <p className="sesen-lead">AI can accelerate how multilingual content is processed, checked, reused, and managed at scale. For regulated life sciences content, however, speed alone is not the objective.</p>
            <p className="sesen-copy-gap">Scientific meaning, regulatory context, approved terminology, document relationships, patient and product safety, and final quality still require professional judgment. Sesen combines professional life sciences expertise with SesenGPT-enabled workflows, translation memory, terminology intelligence, automated QA, and structured human review.</p>
            <a className="sesen-inline-link" href="https://www.sesen.com/sesengpt/">Explore SesenGPT</a>
          </div>
          <div aria-label="Human-reviewed AI-assisted regulatory translation workflow" className="sesen-ai-panel">
            <div className="sesen-ai-stack">
              <div className="sesen-ai-layer">
                <strong>Translation Memory</strong>
                <span>Reuse previously reviewed content where appropriate across revisions and related documents.</span>
              </div>
              <div className="sesen-ai-layer">
                <strong>Terminology Intelligence</strong>
                <span>Identify and apply approved scientific, clinical, product, safety, and regulatory terminology.</span>
              </div>
              <div className="sesen-ai-layer">
                <strong>SesenGPT-Assisted Workflows</strong>
                <span>Support suitable drafting and workflow efficiency within controlled translation processes.</span>
              </div>
              <div className="sesen-ai-layer">
                <strong>AI-Assisted Quality Assurance</strong>
                <span>Help identify potential issues involving terminology, numbers, units, dates, formatting, and consistency.</span>
              </div>
              <div className="sesen-ai-layer sesen-ai-layer--human">
                <strong>Professional Human Review</strong>
                <span>Qualified linguists and reviewers remain responsible for evaluating meaning, context, terminology, and final linguistic quality.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="global-heading" className="sesen-section sesen-section--soft">
        <div className="sesen-shell sesen-global-layout">
          <div>
            <div className="sesen-section-head sesen-section-head--flush">
              <p className="sesen-eyebrow">150+ LANGUAGES</p>
              <h2 id="global-heading">Multilingual Support for Global Regulatory Programs</h2>
              <p className="sesen-lead">Global regulatory programs rarely follow a single-language, single-market path. Sesen provides translation and localization support across 150+ languages for regulatory submissions, product information, authority communication, quality documentation, safety content, and lifecycle updates.</p>
            </div>
            <div className="sesen-global-points">
              <article className="sesen-global-point">
                <h3>Multi-Market Programs</h3>
                <p>Coordinate multiple target languages through centralized project management and shared quality controls.</p>
              </article>
              <article className="sesen-global-point">
                <h3>Country & Language Variants</h3>
                <p>Manage market-specific language preferences without losing alignment with core approved content.</p>
              </article>
              <article className="sesen-global-point">
                <h3>Asian-Language Workflows</h3>
                <p>Support Chinese, Japanese, Korean, and other Asian languages with appropriate linguistic and formatting expertise.</p>
              </article>
              <article className="sesen-global-point">
                <h3>Right-to-Left Languages</h3>
                <p>Manage Arabic, Hebrew, and other right-to-left content with attention to document presentation and layout.</p>
              </article>
              <article className="sesen-global-point">
                <h3>Multilingual Formatting</h3>
                <p>Support translated tables, graphics, structured files, publishing formats, and layout-sensitive regulated documentation.</p>
              </article>
              <article className="sesen-global-point">
                <h3>Local Review Coordination</h3>
                <p>Incorporate affiliate, in-country, or client reviewer feedback into controlled workflows and reusable linguistic assets.</p>
              </article>
            </div>
          </div>
          <div aria-hidden="true" className="sesen-global-visual">
            <svg viewBox="0 0 360 360">
              <circle cx="180" cy="180" fill="#F5F7FF" r="150" stroke="#D2DDF4" strokeWidth="2" />
              <ellipse cx="180" cy="180" fill="none" rx="94" ry="150" stroke="#C6D3F1" strokeWidth="1.6" />
              <ellipse cx="180" cy="180" fill="none" rx="34" ry="150" stroke="#D8E1F4" strokeWidth="1.6" />
              <ellipse cx="180" cy="180" fill="none" rx="150" ry="76" stroke="#C6D3F1" strokeWidth="1.6" />
              <ellipse cx="180" cy="180" fill="none" rx="150" ry="124" stroke="#D8E1F4" strokeWidth="1.6" />
              <line stroke="#C6D3F1" strokeWidth="1.6" x1="30" x2="330" y1="180" y2="180" />
              <g fill="#4B6FD8" stroke="#FFFFFF" strokeWidth="3">
                <circle cx="110" cy="106" r="9" />
                <circle cx="238" cy="95" r="9" />
                <circle cx="270" cy="178" r="9" />
                <circle cx="207" cy="246" r="9" />
                <circle cx="103" cy="231" r="9" />
                <circle cx="155" cy="161" r="9" />
              </g>
              <g fill="none" stroke="#6F8BE1" strokeDasharray="4 5" strokeWidth="2">
                <path d="M110 106 Q165 124 155 161 Q208 142 238 95" />
                <path d="M155 161 Q220 164 270 178 Q238 214 207 246" />
                <path d="M155 161 Q120 192 103 231" />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section aria-labelledby="security-heading" className="sesen-section">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="security-heading">Quality and Security for Regulated Multilingual Content</h2>
            <p className="sesen-lead">Regulatory teams need confidence not only in the translated words, but also in the process surrounding them. Sesen combines ISO-certified quality processes, regulated-content controls, professional native life sciences linguists, secure project handling, terminology governance, and documented QA workflows.</p>
          </div>
          <div className="sesen-quality-grid">
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">ISO 17100</span>
              <h3>Translation Services Quality</h3>
              <p>Structured translation-service processes incorporating qualified linguists, translation, independent review, project management oversight, and quality control.</p>
            </article>
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">ISO 9001:2015</span>
              <h3>Quality Management</h3>
              <p>Quality management principles applied across project intake, resource management, workflow control, issue management, communication, and continuous improvement.</p>
            </article>
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">ISO 13485:2016</span>
              <h3>Medical Device Quality Management</h3>
              <p>Quality practices relevant to multilingual medical device documentation including IFUs, labeling, packaging, software, safety content, and regulated product documentation.</p>
            </article>
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">SECURE WORKFLOWS</span>
              <h3>Controlled Content Handling</h3>
              <p>Sesen uses controlled access and secure handling for sensitive life sciences documents, references, and project materials, supported by AWS-hosted infrastructure.</p>
            </article>
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">PROCESS VISIBILITY</span>
              <h3>Documented Review & Delivery</h3>
              <p>Defined QA stages, reviewer accountability, version control, and delivery records give organizations visibility into how regulated multilingual content was produced and reviewed.</p>
            </article>
            <article className="sesen-quality-block">
              <span className="sesen-quality-kicker">PROGRAM GOVERNANCE</span>
              <h3>Terminology & Version Control</h3>
              <p>Shared language assets, approved terminology, reference materials, and version-aware workflows help maintain continuity across recurring regulatory content.</p>
            </article>
          </div>
          <a className="sesen-inline-link" href="https://www.sesen.com/quality-compliance-security/">Quality, Compliance & Security</a>
        </div>
      </section>
      <section aria-labelledby="audiences-heading" className="sesen-section sesen-section--blue-soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="audiences-heading">Regulatory Translation for Life Sciences Organizations</h2>
            <p className="sesen-lead">Sesen supports organizations across the life sciences ecosystem with translation workflows aligned to the content they create and the markets they serve.</p>
          </div>
          <div className="sesen-audiences">
            <article className="sesen-audience">
              <h3>Pharmaceutical Companies</h3>
              <p>Translation across drug development, submissions, CMC, labeling, pharmacovigilance, quality operations, and lifecycle maintenance.</p>
            </article>
            <article className="sesen-audience">
              <h3>Biotechnology Companies</h3>
              <p>Specialized support for complex scientific, clinical, regulatory, and product content involving novel therapies and evolving development programs.</p>
            </article>
            <article className="sesen-audience">
              <h3>Medical Device & IVD Manufacturers</h3>
              <p>Translation for regulatory documentation, technical files, labeling, IFUs, quality systems, software, safety information, and product updates.</p>
            </article>
            <article className="sesen-audience">
              <h3>Contract Research Organizations</h3>
              <p>Scalable multilingual support across sponsor programs, clinical documentation, regulatory activity, safety content, site communication, and submission workflows.</p>
            </article>
            <article className="sesen-audience">
              <h3>Healthcare & Digital Health Organizations</h3>
              <p>Translation and localization for regulated healthcare, clinical, software, and compliance-related content across global environments.</p>
            </article>
            <article className="sesen-audience">
              <h3>Regulatory & Public Health Organizations</h3>
              <p>Specialized multilingual support for regulatory, scientific, healthcare, and public-health communication where precision and controlled terminology matter.</p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="why-heading" className="sesen-section">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="why-heading">Why Life Sciences Teams Choose Sesen for Regulatory Translation</h2>
            <p className="sesen-lead">Regulated multilingual programs require subject-matter expertise, repeatable controls, and the ability to maintain language decisions across documents and over time.</p>
          </div>
          <div className="sesen-differentiators">
            <article className="sesen-differentiator">
              <h3>Life Sciences Specialization</h3>
              <p>Sesen is built around pharmaceutical, biotechnology, medical device, CRO, healthcare, and other regulated life sciences content—not general-purpose translation alone.</p>
            </article>
            <article className="sesen-differentiator">
              <h3>Professional Native Life Sciences Linguists</h3>
              <p>Linguists are selected according to target language, subject expertise, document type, and project requirements.</p>
            </article>
            <article className="sesen-differentiator">
              <h3>Cross-Document Terminology Control</h3>
              <p>Glossaries, translation memory, product references, style guides, and client-specific linguistic rules help maintain consistency across connected regulatory content.</p>
            </article>
            <article className="sesen-differentiator">
              <h3>Structured Quality Workflows</h3>
              <p>Translation, independent review, QA, project oversight, and final delivery are managed through defined quality processes appropriate for regulated content.</p>
            </article>
            <article className="sesen-differentiator">
              <h3>Scalable Multilingual Operations</h3>
              <p>Sesen supports projects ranging from individual regulatory documents to complex, recurring programs involving multiple content streams, countries, and languages.</p>
            </article>
            <article className="sesen-differentiator">
              <h3>Human Expertise + Intelligent Technology</h3>
              <p>Professional linguistic expertise is supported by SesenGPT, terminology intelligence, translation memory, automation, and AI-assisted QA—not displaced by them.</p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="services-heading" className="sesen-section sesen-section--soft">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="services-heading">Explore Specialized Regulatory Translation Services</h2>
            <p className="sesen-lead">When your program requires deeper support in a particular regulatory workflow, Sesen provides specialized services across the regulatory content lifecycle.</p>
          </div>
          <div className="sesen-service-links">
            <a className="sesen-service-link" href="https://www.sesen.com/regulatory-submission-translation-services/">
              <h3>Regulatory Submission Translation Services</h3>
              <p>Dossiers, applications, supporting documentation, amendments, response packages, and global regulatory filings.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/ectd-ctd-translation-services/">
              <h3>CTD & eCTD Translation Services</h3>
              <p>Translation across CTD modules, structured submission content, terminology, references, revisions, and lifecycle updates.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/regulatory-affairs-translation-services/">
              <h3>Regulatory Affairs Translation Services</h3>
              <p>Support for regulatory affairs teams managing submissions, authority communication, labeling updates, safety documentation, and lifecycle activity.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/regulatory-compliance-translation-services/">
              <h3>Regulatory Compliance Translation Services</h3>
              <p>Translation for controlled compliance, quality, audit, inspection, and regulated operational content.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/regulatory-submission-formatting/">
              <h3>Regulatory Submission Formatting</h3>
              <p>Technical formatting and document preparation to support multilingual regulatory submission workflows.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/cmc-document-translation-services/">
              <h3>CMC Document Translation Services</h3>
              <p>Specialized translation for Chemistry, Manufacturing, and Controls documentation used across pharmaceutical regulatory programs.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/drug-labeling-packaging-translation-services/">
              <h3>Drug Labeling & Packaging Translation</h3>
              <p>Prescribing information, SmPCs, PILs, package inserts, packaging, and regulated product information.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/pharmacovigilance-translation-services/">
              <h3>Pharmacovigilance Translation Services</h3>
              <p>Adverse event content, safety narratives, periodic reports, risk-management materials, and global safety communication.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
            <a className="sesen-service-link" href="https://www.sesen.com/ifu-translation-services/">
              <h3>IFU Translation Services</h3>
              <p>Medical device instructions for use, safety information, product documentation, and multilingual market requirements.</p>
              <span className="sesen-service-link__action">Explore service →</span>
            </a>
          </div>
        </div>
      </section>
      <section aria-labelledby="faq-heading" className="sesen-section">
        <div className="sesen-shell">
          <div className="sesen-section-head">
            <h2 id="faq-heading">Regulatory Translation Services FAQs</h2>
            <p className="sesen-lead">Answers to common questions about regulatory translation workflows, document coverage, quality controls, terminology, AI-assisted processes, and global language support.</p>
          </div>
          <div className="sesen-faq-list">
            <details className="sesen-faq">
              <summary>What are regulatory translation services?</summary>
              <div className="sesen-faq__answer">
                <p>Regulatory translation services support the multilingual translation, review, and management of content used in regulatory submissions, product approvals, health authority communication, labeling, quality systems, inspections, safety reporting, and ongoing product lifecycle activities. Because related regulatory documents frequently reuse scientific, medical, product, and safety terminology, effective regulatory translation also requires terminology governance, version awareness, cross-document consistency, and structured quality review.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>What types of regulatory documents does Sesen translate?</summary>
              <div className="sesen-faq__answer">
                <p>Sesen supports CTD/eCTD content, regulatory applications and dossiers, IND/NDA/BLA/ANDA/MAA materials, clinical and nonclinical documentation, CMC content, health authority correspondence, drug labeling, IFUs, SOPs, QMS documentation, validation materials, audit and inspection content, pharmacovigilance documentation, and other regulated life sciences materials.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Does Sesen translate CTD and eCTD submissions?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen supports translation across CTD and eCTD content, including regional and administrative materials, summaries, CMC documentation, nonclinical reports, clinical documentation, labeling, and related submission-support content. Workflows can incorporate terminology management, translation memory, reference alignment, version control, formatting support, linguistic review, and QA across interconnected submission documents.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Can Sesen support regulatory submissions and health authority responses?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen supports both planned submission content and subsequent multilingual regulatory communication, including authority questions, requests for information, deficiency responses, clarification packages, supporting attachments, and related correspondence. Prior approved translation, terminology, and reference materials can help maintain continuity between the original submission and later responses.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>How does Sesen maintain terminology consistency across regulatory documents?</summary>
              <div className="sesen-faq__answer">
                <p>Sesen uses client-approved glossaries, terminology databases, translation memory, style guides, product references, legacy translations, reviewer feedback, and project-specific linguistic rules. These resources can be applied across submissions, CMC content, clinical documents, labeling, quality documentation, safety content, and subsequent updates so recurring terminology remains controlled throughout the program.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Does Sesen translate SOPs and quality-system documentation?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen supports SOPs, work instructions, quality manuals, QMS documentation, CAPAs, deviations, change controls, validation materials, audits, inspections, training, and other controlled quality and compliance content. Version-aware workflows and translation memory can also support recurring revisions.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Can Sesen translate drug labeling, packaging, and IFUs?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen translates prescribing information, SmPCs, patient information leaflets, package inserts, medication guides, labels, packaging, warnings, device labeling, IFUs, and other regulated product information. Sesen can also support layout-sensitive review and recurring multilingual updates.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Does Sesen provide pharmacovigilance translation?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen supports pharmacovigilance and drug safety content including AE and SAE documentation, ICSRs, SUSAR-related content, case narratives, DSURs, PSURs, PBRERs, RMPs, safety communications, and post-marketing materials.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>How does Sesen use AI for regulatory translation?</summary>
              <div className="sesen-faq__answer">
                <p>Sesen uses AI-assisted technologies to support appropriate translation workflows, terminology identification, content reuse, and quality checks. For regulated content, AI operates within a controlled workflow that includes professional human expertise. Qualified linguists and reviewers remain responsible for evaluating context, meaning, terminology, and final linguistic quality.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Can Sesen support urgent or rolling regulatory translation projects?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen can structure project management, translation, review, and QA around urgent, rolling, and recurring regulatory requirements. The appropriate workflow depends on document type, volume, language combination, intended use, deadline, and required quality controls.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>What languages does Sesen support for regulatory translation?</summary>
              <div className="sesen-faq__answer">
                <p>Sesen supports regulatory translation in more than 150 languages, including major European, Asian, Latin American, Middle Eastern, and other global market languages.</p>
              </div>
            </details>
            <details className="sesen-faq">
              <summary>Can Sesen format translated regulatory documents for submission or review?</summary>
              <div className="sesen-faq__answer">
                <p>Yes. Sesen supports multilingual document formatting and technical preparation for regulatory content, including layout-sensitive files, structured documents, tables, graphics, and other formats where translated content must remain usable within the intended regulatory workflow.</p>
                <a className="sesen-inline-link" href="https://www.sesen.com/regulatory-submission-formatting/">Regulatory Submission Formatting</a>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section aria-labelledby="final-cta-heading" className="sesen-final-cta">
        <div className="sesen-shell sesen-final-cta__inner">
          <div>
            <h2 id="final-cta-heading">Move Global Regulatory Content Forward With Confidence</h2>
            <p>Whether you are preparing a submission, responding to health authority questions, updating product labeling, managing quality documentation, supporting drug safety operations, or maintaining multilingual content across the product lifecycle, Sesen can help you build the right regulatory translation workflow.</p>
            <p>Bring together professional life sciences linguists, controlled terminology, translation memory, structured review, secure workflows, and AI-assisted quality technologies in one multilingual program designed around your content, markets, and regulatory needs.</p>
          </div>
          <div className="sesen-button-row">
            <a className="sesen-button sesen-button--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            <a className="sesen-button sesen-button--secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
