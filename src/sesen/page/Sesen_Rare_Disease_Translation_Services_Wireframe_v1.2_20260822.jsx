import React, { useState } from "react";

const pageLinks = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  clinical: "https://www.sesen.com/clinical-trial-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  icf: "https://www.sesen.com/informed-consent-form-translation-services/",
  ib: "https://www.sesen.com/investigators-brochure-translation-services/",
  studyDocs: "https://www.sesen.com/clinical-study-document-translation-services/",
  irb: "https://www.sesen.com/irb-ethics-committee-translation-services/",
  crf: "https://www.sesen.com/clinical-trial-translation-services/crf-translations/",
  patient: "https://www.sesen.com/patient-engagement-translation-services/",
  lv: "https://www.sesen.com/linguistic-validation-services/",
  ecoa: "https://www.sesen.com/ecoa-translation-services/",
  genomics: "https://www.sesen.com/genomics-gene-therapy-translation-services/",
  mrna: "https://www.sesen.com/mrna-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  submission: "https://www.sesen.com/regulatory-submission-translation-services/",
  ctd: "https://www.sesen.com/ectd-ctd-translation-services/",
  cmc: "https://www.sesen.com/cmc-document-translation-services/",
  csr: "https://www.sesen.com/clinical-study-report-translation-services/",
  labeling: "https://www.sesen.com/labeling-translation-services/",
  pv: "https://www.sesen.com/pharmacovigilance-translation-services/",
  cro: "https://www.sesen.com/cro-translation-services/",
  ai: "https://www.sesen.com/ai/",
  hae: "https://www.sesen.com/resources/case-studies/cognitive-debriefing-hae-phase-iii-trial/",
};

const styles = `
.sesen-page-rare-disease {
  --rd-blue: #4B6FD8;
  --rd-blue-dark: #3659BB;
  --rd-deep-blue: #253F8F;
  --rd-mid-blue: #6F8BE1;
  --rd-soft-blue: #EAF0FF;
  --rd-pale-blue: #F5F7FF;
  --rd-navy: #17264D;
  --rd-ink: #111827;
  --rd-body: #46546D;
  --rd-muted: #68758B;
  --rd-border: #DDE4F2;
  --rd-divider: #E9EEF8;
  --rd-surface: #F7F9FD;
  --rd-white: #FFFFFF;
  --rd-light-blue: #C8D6FF;
  color: var(--rd-body);
  background: var(--rd-white);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  overflow-x: clip;
}

.sesen-page-rare-disease *,
.sesen-page-rare-disease *::before,
.sesen-page-rare-disease *::after {
  box-sizing: border-box;
  min-width: 0;
}

.sesen-page-rare-disease a {
  color: inherit;
}

.sesen-page-rare-disease img,
.sesen-page-rare-disease svg {
  max-width: 100%;
}

.sesen-page-rare-disease .rd-shell {
  width: min(100%, 1280px);
  margin: 0 auto;
  padding-inline: 56px;
}

.sesen-page-rare-disease .rd-section {
  padding: 96px 0;
}

.sesen-page-rare-disease .rd-section--dense {
  padding: 80px 0;
}

.sesen-page-rare-disease .rd-section--soft {
  background: var(--rd-surface);
}

.sesen-page-rare-disease .rd-section--blue-soft {
  background: var(--rd-pale-blue);
}

.sesen-page-rare-disease .rd-section--navy {
  background: var(--rd-navy);
  color: var(--rd-white);
}

.sesen-page-rare-disease h1,
.sesen-page-rare-disease h2,
.sesen-page-rare-disease h3,
.sesen-page-rare-disease h4 {
  font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
  color: var(--rd-navy);
  font-style: normal;
  font-stretch: 100%;
  margin: 0;
}

.sesen-page-rare-disease h1 {
  font-size: 48px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.sesen-page-rare-disease h2 {
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: normal;
}

.sesen-page-rare-disease h3 {
  font-size: 23px;
  font-weight: 500;
  line-height: 1.3;
}

.sesen-page-rare-disease h4 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.35;
}

.sesen-page-rare-disease p {
  margin: 0;
  font-size: 16px;
  line-height: 1.72;
}

.sesen-page-rare-disease .rd-lead {
  color: #293954;
  font-size: 19px;
  line-height: 1.65;
}

.sesen-page-rare-disease .rd-muted {
  color: var(--rd-muted);
}

.sesen-page-rare-disease .rd-eyebrow {
  margin: 0 0 15px;
  color: var(--rd-blue-dark);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.sesen-page-rare-disease .rd-section--navy .rd-eyebrow {
  color: var(--rd-light-blue);
}

.sesen-page-rare-disease .rd-section--navy h2,
.sesen-page-rare-disease .rd-section--navy h3,
.sesen-page-rare-disease .rd-section--navy h4 {
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-section--navy p {
  color: #E5EBFA;
}

.sesen-page-rare-disease .rd-header {
  max-width: 820px;
  margin-bottom: 46px;
}

.sesen-page-rare-disease .rd-header--center {
  text-align: center;
  margin-inline: auto;
}

.sesen-page-rare-disease .rd-header p {
  margin-top: 18px;
}

.sesen-page-rare-disease .rd-editorial-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 16px;
  color: var(--rd-blue-dark);
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.sesen-page-rare-disease .rd-editorial-link:hover {
  text-decoration: underline;
}

.sesen-page-rare-disease .rd-inline-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 22px;
  align-items: center;
  margin-top: 16px;
}

.sesen-page-rare-disease .rd-inline-links .rd-editorial-link {
  margin-top: 0;
}

.sesen-page-rare-disease .rd-link-stack {
  display: grid;
  gap: 8px;
  margin-top: 18px;
}

.sesen-page-rare-disease .rd-link-stack .rd-editorial-link {
  margin-top: 0;
}

.sesen-page-rare-disease .rd-lifecycle-thesis {
  margin: 38px auto 0;
  max-width: 880px;
  padding-top: 28px;
  border-top: 1px solid #D5DFF3;
  text-align: center;
  color: var(--rd-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
}

.sesen-page-rare-disease .rd-patient-takeaway {
  margin-top: 24px;
  padding: 22px 24px;
  border-left: 2px solid var(--rd-blue);
  background: var(--rd-pale-blue);
  color: var(--rd-navy);
}

.sesen-page-rare-disease .rd-orphan-band {
  margin-top: 28px;
  padding: 28px 30px;
  display: grid;
  grid-template-columns: minmax(220px, .72fr) minmax(0, 1.28fr);
  gap: 34px;
  align-items: start;
  border-left: 2px solid var(--rd-blue);
  background: var(--rd-white);
}

.sesen-page-rare-disease .rd-orphan-band h3 {
  font-size: 22px;
}

.sesen-page-rare-disease .rd-orphan-band p {
  margin-top: 0;
}

.sesen-page-rare-disease .rd-orphan-band .rd-editorial-link {
  margin-top: 12px;
}

.sesen-page-rare-disease .rd-editorial-link:focus-visible,
.sesen-page-rare-disease .rd-button:focus-visible,
.sesen-page-rare-disease .rd-faq-button:focus-visible {
  outline: 3px solid rgba(75, 111, 216, .32);
  outline-offset: 4px;
}

.sesen-page-rare-disease .rd-button {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 25px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
}

.sesen-page-rare-disease .rd-button:hover {
  transform: translateY(-1px);
}

.sesen-page-rare-disease .rd-button--primary {
  background: var(--rd-blue);
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-button--primary:hover {
  background: var(--rd-blue-dark);
}

.sesen-page-rare-disease .rd-button--secondary {
  background: var(--rd-white);
  color: var(--rd-ink);
  border-color: var(--rd-border);
}

.sesen-page-rare-disease .rd-button--secondary:hover {
  background: var(--rd-soft-blue);
  border-color: #C8D4EA;
}

.sesen-page-rare-disease .rd-section--navy .rd-button--secondary {
  background: var(--rd-white);
  color: var(--rd-ink);
}

.sesen-page-rare-disease .rd-icon {
  width: 23px;
  height: 23px;
  flex: 0 0 23px;
  stroke: currentColor;
  stroke-width: 1.7;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sesen-page-rare-disease .rd-icon-box {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--rd-soft-blue);
  color: var(--rd-blue-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 46px;
}

.sesen-page-rare-disease .rd-hero {
  padding: 92px 0 84px;
  background:
    radial-gradient(circle at 86% 22%, rgba(75,111,216,.08), transparent 26%),
    linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
  border-bottom: 1px solid var(--rd-divider);
}

.sesen-page-rare-disease .rd-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.03fr) minmax(390px, .97fr);
  gap: 70px;
  align-items: center;
}

.sesen-page-rare-disease .rd-hero-copy {
  max-width: 690px;
}

.sesen-page-rare-disease .rd-hero-copy .rd-lead {
  margin-top: 22px;
}

.sesen-page-rare-disease .rd-hero-copy .rd-support {
  margin-top: 16px;
  max-width: 670px;
}

.sesen-page-rare-disease .rd-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.sesen-page-rare-disease .rd-hero-art {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sesen-page-rare-disease .rd-hero-art svg {
  width: min(100%, 520px);
  height: auto;
  display: block;
}

.sesen-page-rare-disease .rd-trust-band {
  background: var(--rd-white);
  border-bottom: 1px solid var(--rd-divider);
}

.sesen-page-rare-disease .rd-trust-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.sesen-page-rare-disease .rd-trust-item {
  padding: 24px 20px;
  text-align: center;
  border-right: 1px solid var(--rd-divider);
  color: var(--rd-navy);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
}

.sesen-page-rare-disease .rd-trust-item:last-child {
  border-right: 0;
}

.sesen-page-rare-disease .rd-challenge-intro {
  display: grid;
  grid-template-columns: .86fr 1.14fr;
  gap: 84px;
  align-items: start;
  margin-bottom: 54px;
}

.sesen-page-rare-disease .rd-challenge-intro p {
  max-width: 720px;
}

.sesen-page-rare-disease .rd-challenge-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-challenge {
  padding: 31px 30px 34px;
  border-right: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-challenge:nth-child(3n) {
  border-right: 0;
}

.sesen-page-rare-disease .rd-challenge:nth-last-child(-n+3) {
  border-bottom: 0;
}

.sesen-page-rare-disease .rd-challenge-top {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 17px;
}

.sesen-page-rare-disease .rd-challenge p {
  margin-top: 10px;
}

.sesen-page-rare-disease .rd-lifecycle {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  margin-top: 48px;
}

.sesen-page-rare-disease .rd-lifecycle::before {
  content: "";
  position: absolute;
  top: 27px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: #D5DFF3;
}

.sesen-page-rare-disease .rd-life-step {
  position: relative;
  padding: 0 14px;
  text-align: center;
}

.sesen-page-rare-disease .rd-life-dot {
  width: 54px;
  height: 54px;
  margin: 0 auto 17px;
  border-radius: 50%;
  border: 1px solid #CAD6EE;
  background: var(--rd-white);
  color: var(--rd-blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.sesen-page-rare-disease .rd-life-step h3 {
  font-size: 18px;
}

.sesen-page-rare-disease .rd-life-step p {
  margin-top: 8px;
  color: var(--rd-muted);
  font-size: 16px;
}

.sesen-page-rare-disease .rd-editorial-split {
  display: grid;
  grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
  gap: 82px;
  align-items: start;
}

.sesen-page-rare-disease .rd-editorial-split--reverse {
  grid-template-columns: minmax(0, 1.12fr) minmax(0, .88fr);
}

.sesen-page-rare-disease .rd-sticky-copy {
  position: sticky;
  top: 28px;
}

.sesen-page-rare-disease .rd-sticky-copy p {
  margin-top: 18px;
}

.sesen-page-rare-disease .rd-row-list {
  border-top: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-row {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  padding: 26px 0;
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-row p {
  margin-top: 8px;
}

.sesen-page-rare-disease .rd-chip-line {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 16px;
}

.sesen-page-rare-disease .rd-chip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 5px 11px;
  border: 1px solid var(--rd-border);
  border-radius: 999px;
  color: var(--rd-body);
  background: var(--rd-white);
  font-size: 13px;
  line-height: 1.2;
}

.sesen-page-rare-disease .rd-clinical-band {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.sesen-page-rare-disease .rd-clinical-col {
  padding: 30px 28px;
  background: var(--rd-white);
  border-top: 2px solid var(--rd-blue);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-clinical-col p {
  margin-top: 10px;
}

.sesen-page-rare-disease .rd-clinical-col ul,
.sesen-page-rare-disease .rd-simple-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
}

.sesen-page-rare-disease .rd-clinical-col li,
.sesen-page-rare-disease .rd-simple-list li {
  position: relative;
  padding-left: 17px;
  margin-top: 9px;
  color: var(--rd-body);
}

.sesen-page-rare-disease .rd-clinical-col li::before,
.sesen-page-rare-disease .rd-simple-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .72em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--rd-blue);
}

.sesen-page-rare-disease .rd-note-band {
  margin-top: 28px;
  padding: 24px 28px;
  border-left: 2px solid var(--rd-blue);
  background: var(--rd-white);
}

.sesen-page-rare-disease .rd-patient-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, .9fr);
  gap: 72px;
  align-items: center;
}

.sesen-page-rare-disease .rd-orbit-card {
  position: relative;
  min-height: 490px;
  border: 1px solid var(--rd-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at center, rgba(75,111,216,.10), transparent 30%),
    #FFFFFF;
  overflow: hidden;
}

.sesen-page-rare-disease .rd-orbit-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 148px;
  height: 148px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--rd-navy);
  color: var(--rd-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  text-align: center;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  line-height: 1.25;
  z-index: 2;
}

.sesen-page-rare-disease .rd-orbit-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 340px;
  height: 340px;
  transform: translate(-50%, -50%);
  border: 1px dashed #C8D6EE;
  border-radius: 50%;
}

.sesen-page-rare-disease .rd-orbit-node {
  position: absolute;
  width: 132px;
  min-height: 70px;
  padding: 11px 12px;
  border: 1px solid var(--rd-border);
  border-radius: 18px;
  background: var(--rd-white);
  box-shadow: 0 12px 28px rgba(23, 38, 77, .06);
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--rd-navy);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}

.sesen-page-rare-disease .rd-orbit-node--1 { top: 28px; left: calc(50% - 66px); }
.sesen-page-rare-disease .rd-orbit-node--2 { top: 135px; right: 22px; }
.sesen-page-rare-disease .rd-orbit-node--3 { bottom: 52px; right: 56px; }
.sesen-page-rare-disease .rd-orbit-node--4 { bottom: 52px; left: 56px; }
.sesen-page-rare-disease .rd-orbit-node--5 { top: 135px; left: 22px; }

.sesen-page-rare-disease .rd-assessment-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border: 1px solid var(--rd-border);
  border-radius: 24px;
  overflow: hidden;
  background: var(--rd-white);
}

.sesen-page-rare-disease .rd-assessment {
  padding: 28px 22px;
  border-right: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-assessment:last-child {
  border-right: 0;
}

.sesen-page-rare-disease .rd-assessment strong {
  display: block;
  color: var(--rd-blue-dark);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
}

.sesen-page-rare-disease .rd-assessment span {
  display: block;
  margin-top: 7px;
  color: var(--rd-body);
  font-size: 16px;
  line-height: 1.55;
}

.sesen-page-rare-disease .rd-validation-flow {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.sesen-page-rare-disease .rd-validation-step {
  padding: 22px;
  border-radius: 18px;
  background: var(--rd-soft-blue);
}

.sesen-page-rare-disease .rd-validation-step h3 {
  font-size: 18px;
}

.sesen-page-rare-disease .rd-validation-step p {
  margin-top: 7px;
  color: var(--rd-body);
}

.sesen-page-rare-disease .rd-case-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(380px, .92fr);
  gap: 52px;
  padding: 54px;
  border-radius: 30px;
  background: var(--rd-navy);
  color: var(--rd-white);
  overflow: hidden;
  position: relative;
}

.sesen-page-rare-disease .rd-case-panel::after {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  right: -130px;
  bottom: -170px;
  border: 1px solid rgba(200,214,255,.24);
  box-shadow:
    0 0 0 46px rgba(200,214,255,.045),
    0 0 0 92px rgba(200,214,255,.025);
}

.sesen-page-rare-disease .rd-case-panel h2,
.sesen-page-rare-disease .rd-case-panel h3 {
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-case-panel p {
  color: #E5EBFA;
}

.sesen-page-rare-disease .rd-case-copy {
  position: relative;
  z-index: 1;
}

.sesen-page-rare-disease .rd-case-copy p {
  margin-top: 18px;
}

.sesen-page-rare-disease .rd-case-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  position: relative;
  z-index: 1;
}

.sesen-page-rare-disease .rd-case-metric {
  padding: 24px;
  border: 1px solid rgba(200,214,255,.22);
  border-radius: 20px;
  background: rgba(255,255,255,.055);
}

.sesen-page-rare-disease .rd-case-metric strong {
  display: block;
  color: var(--rd-white);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
}

.sesen-page-rare-disease .rd-case-metric span {
  display: block;
  margin-top: 6px;
  color: #CBD7F6;
  font-size: 14px;
}

.sesen-page-rare-disease .rd-case-link {
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-therapy-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border-top: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-therapy {
  padding: 30px 25px 34px;
  border-right: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-therapy:last-child {
  border-right: 0;
}

.sesen-page-rare-disease .rd-therapy p {
  margin-top: 10px;
}

.sesen-page-rare-disease .rd-regulatory-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.sesen-page-rare-disease .rd-regulatory-item {
  padding: 28px;
  border: 1px solid var(--rd-border);
  border-radius: 20px;
  background: var(--rd-white);
}

.sesen-page-rare-disease .rd-regulatory-item p {
  margin-top: 9px;
}

.sesen-page-rare-disease .rd-regulatory-item ul {
  margin-top: 15px;
}

.sesen-page-rare-disease .rd-terminology-map {
  display: grid;
  grid-template-columns: .83fr 1.17fr;
  gap: 72px;
  align-items: center;
}

.sesen-page-rare-disease .rd-term-visual {
  min-height: 500px;
  border: 1px solid var(--rd-border);
  border-radius: 28px;
  background: var(--rd-white);
  position: relative;
  overflow: hidden;
}

.sesen-page-rare-disease .rd-term-center {
  width: 186px;
  height: 186px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--rd-soft-blue);
  border: 1px solid #C9D6F0;
  color: var(--rd-navy);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.sesen-page-rare-disease .rd-term-center strong {
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.25;
}

.sesen-page-rare-disease .rd-term-center span {
  color: var(--rd-blue-dark);
  font-size: 13px;
  margin-top: 7px;
  font-weight: 700;
}

.sesen-page-rare-disease .rd-term-node {
  position: absolute;
  min-width: 112px;
  padding: 10px 12px;
  border: 1px solid var(--rd-border);
  border-radius: 999px;
  background: #FFFFFF;
  color: var(--rd-navy);
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 10px 24px rgba(23,38,77,.04);
}

.sesen-page-rare-disease .rd-term-node--1 { top: 45px; left: 50%; transform: translateX(-50%); }
.sesen-page-rare-disease .rd-term-node--2 { top: 120px; right: 32px; }
.sesen-page-rare-disease .rd-term-node--3 { bottom: 116px; right: 28px; }
.sesen-page-rare-disease .rd-term-node--4 { bottom: 42px; left: 50%; transform: translateX(-50%); }
.sesen-page-rare-disease .rd-term-node--5 { bottom: 116px; left: 28px; }
.sesen-page-rare-disease .rd-term-node--6 { top: 120px; left: 32px; }

.sesen-page-rare-disease .rd-term-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 300px;
  background: #DBE4F4;
  transform-origin: center center;
}

.sesen-page-rare-disease .rd-term-line--1 { transform: translate(-50%, -50%) rotate(0deg); }
.sesen-page-rare-disease .rd-term-line--2 { transform: translate(-50%, -50%) rotate(60deg); }
.sesen-page-rare-disease .rd-term-line--3 { transform: translate(-50%, -50%) rotate(120deg); }

.sesen-page-rare-disease .rd-ai-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(390px, .9fr);
  gap: 74px;
  align-items: start;
}

.sesen-page-rare-disease .rd-ai-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.sesen-page-rare-disease .rd-ai-panel {
  border-top: 2px solid var(--rd-blue);
  padding-top: 22px;
}

.sesen-page-rare-disease .rd-ai-panel ul {
  margin-top: 16px;
}

.sesen-page-rare-disease .rd-human-panel {
  padding: 30px;
  border-radius: 24px;
  background: var(--rd-navy);
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-human-panel h3 {
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-human-panel p,
.sesen-page-rare-disease .rd-human-panel li {
  color: #E3EAFB;
}

.sesen-page-rare-disease .rd-human-panel .rd-simple-list li::before {
  background: var(--rd-light-blue);
}

.sesen-page-rare-disease .rd-quality-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-quality-item {
  padding: 28px 28px 31px;
  border-right: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-quality-item:nth-child(3n) {
  border-right: 0;
}

.sesen-page-rare-disease .rd-quality-item:nth-last-child(-n+3) {
  border-bottom: 0;
}

.sesen-page-rare-disease .rd-quality-item p {
  margin-top: 9px;
}

.sesen-page-rare-disease .rd-iso-band {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 42px;
  border-top: 1px solid var(--rd-border);
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-iso-item {
  padding: 22px 18px;
  text-align: center;
  border-right: 1px solid var(--rd-divider);
}

.sesen-page-rare-disease .rd-iso-item:last-child {
  border-right: 0;
}

.sesen-page-rare-disease .rd-iso-item strong {
  display: block;
  color: var(--rd-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.sesen-page-rare-disease .rd-iso-item span {
  display: block;
  color: var(--rd-muted);
  font-size: 13px;
  margin-top: 4px;
}

.sesen-page-rare-disease .rd-audience-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px 30px;
}

.sesen-page-rare-disease .rd-audience {
  padding: 22px 0 24px;
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-audience p {
  margin-top: 8px;
}

.sesen-page-rare-disease .rd-signature {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 72px;
  align-items: center;
}

.sesen-page-rare-disease .rd-signature-copy p {
  margin-top: 18px;
}

.sesen-page-rare-disease .rd-signature-network {
  position: relative;
  min-height: 430px;
}

.sesen-page-rare-disease .rd-signature-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 154px;
  height: 154px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--rd-blue);
  color: var(--rd-white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  line-height: 1.25;
  z-index: 3;
}

.sesen-page-rare-disease .rd-signature-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: 350px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(200,214,255,.28);
  border-radius: 50%;
}

.sesen-page-rare-disease .rd-signature-node {
  position: absolute;
  min-width: 132px;
  padding: 11px 14px;
  border-radius: 999px;
  border: 1px solid rgba(200,214,255,.25);
  background: rgba(255,255,255,.08);
  color: var(--rd-white);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
}

.sesen-page-rare-disease .rd-signature-node--1 { top: 18px; left: 50%; transform: translateX(-50%); }
.sesen-page-rare-disease .rd-signature-node--2 { top: 120px; right: 12px; }
.sesen-page-rare-disease .rd-signature-node--3 { bottom: 44px; right: 56px; }
.sesen-page-rare-disease .rd-signature-node--4 { bottom: 44px; left: 56px; }
.sesen-page-rare-disease .rd-signature-node--5 { top: 120px; left: 12px; }

.sesen-page-rare-disease .rd-service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.sesen-page-rare-disease .rd-service {
  min-height: 100%;
  padding: 28px;
  border: 1px solid var(--rd-border);
  border-radius: 20px;
  background: var(--rd-white);
  display: flex;
  flex-direction: column;
}

.sesen-page-rare-disease .rd-service p {
  margin-top: 9px;
}

.sesen-page-rare-disease .rd-service .rd-editorial-link {
  margin-top: auto;
  padding-top: 18px;
}

.sesen-page-rare-disease .rd-faq-wrap {
  max-width: 920px;
}

.sesen-page-rare-disease .rd-faq-item {
  border-top: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-faq-item:last-child {
  border-bottom: 1px solid var(--rd-border);
}

.sesen-page-rare-disease .rd-faq-button {
  width: 100%;
  border: 0;
  background: transparent;
  padding: 24px 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 40px;
  gap: 20px;
  align-items: center;
  text-align: left;
  color: var(--rd-navy);
  cursor: pointer;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
}

.sesen-page-rare-disease .rd-faq-plus {
  width: 34px;
  height: 34px;
  border: 1px solid var(--rd-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rd-blue-dark);
  font-family: Inter, sans-serif;
  font-size: 21px;
  font-weight: 400;
}

.sesen-page-rare-disease .rd-faq-answer {
  padding: 0 64px 26px 0;
}

.sesen-page-rare-disease .rd-faq-answer p + p {
  margin-top: 12px;
}

.sesen-page-rare-disease .rd-final-cta {
  background:
    radial-gradient(circle at 90% 20%, rgba(111,139,225,.3), transparent 30%),
    linear-gradient(135deg, var(--rd-navy), var(--rd-deep-blue));
  color: var(--rd-white);
}

.sesen-page-rare-disease .rd-final-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  gap: 54px;
  align-items: center;
}

.sesen-page-rare-disease .rd-final-grid h2 {
  color: var(--rd-white);
  max-width: 780px;
}

.sesen-page-rare-disease .rd-final-grid p {
  margin-top: 18px;
  color: #E4EBFB;
  max-width: 780px;
}

.sesen-page-rare-disease .rd-final-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 220px;
}

@media (max-width: 1100px) {
  .sesen-page-rare-disease .rd-shell { padding-inline: 40px; }
  .sesen-page-rare-disease .rd-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(330px, .78fr); gap: 42px; }
  .sesen-page-rare-disease .rd-trust-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-trust-item:nth-child(3) { border-right: 0; }
  .sesen-page-rare-disease .rd-trust-item:nth-child(-n+3) { border-bottom: 1px solid var(--rd-divider); }
  .sesen-page-rare-disease .rd-trust-item:nth-child(4) { grid-column: 1 / 2; }
  .sesen-page-rare-disease .rd-challenge-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-challenge:nth-child(3n) { border-right: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-challenge:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-challenge:nth-last-child(-n+3) { border-bottom: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-challenge:nth-last-child(-n+2) { border-bottom: 0; }
  .sesen-page-rare-disease .rd-lifecycle { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 30px 0; }
  .sesen-page-rare-disease .rd-lifecycle::before { display: none; }
  .sesen-page-rare-disease .rd-clinical-band { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-validation-flow { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-therapy-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-therapy { border-bottom: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-therapy:nth-child(3) { border-right: 0; }
  .sesen-page-rare-disease .rd-therapy:nth-child(4) { border-left: 0; }
  .sesen-page-rare-disease .rd-therapy:nth-last-child(-n+2) { border-bottom: 0; }
  .sesen-page-rare-disease .rd-audience-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 860px) {
  .sesen-page-rare-disease .rd-shell { padding-inline: 28px; }
  .sesen-page-rare-disease .rd-section { padding: 78px 0; }
  .sesen-page-rare-disease .rd-section--dense { padding: 70px 0; }
  .sesen-page-rare-disease .rd-hero { padding: 76px 0 70px; }
  .sesen-page-rare-disease .rd-hero-grid,
  .sesen-page-rare-disease .rd-challenge-intro,
  .sesen-page-rare-disease .rd-editorial-split,
  .sesen-page-rare-disease .rd-editorial-split--reverse,
  .sesen-page-rare-disease .rd-patient-layout,
  .sesen-page-rare-disease .rd-case-panel,
  .sesen-page-rare-disease .rd-terminology-map,
  .sesen-page-rare-disease .rd-ai-layout,
  .sesen-page-rare-disease .rd-signature,
  .sesen-page-rare-disease .rd-final-grid {
    grid-template-columns: 1fr;
  }
  .sesen-page-rare-disease .rd-hero-copy h1,
  .sesen-page-rare-disease .rd-hero-copy .rd-eyebrow { text-align: center; }
  .sesen-page-rare-disease .rd-hero-actions { justify-content: center; }
  .sesen-page-rare-disease .rd-hero-art { margin-top: 16px; }
  .sesen-page-rare-disease .rd-sticky-copy { position: static; }

  .sesen-page-rare-disease .rd-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-trust-item {
    border-right: 1px solid var(--rd-divider);
    border-bottom: 1px solid var(--rd-divider);
  }
  .sesen-page-rare-disease .rd-trust-item:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-trust-item:nth-child(3) { border-right: 1px solid var(--rd-divider); }
  .sesen-page-rare-disease .rd-trust-item:nth-child(4) { grid-column: auto; }
  .sesen-page-rare-disease .rd-trust-item:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-bottom: 0;
  }

  .sesen-page-rare-disease .rd-assessment-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-assessment {
    border-right: 1px solid var(--rd-border);
    border-bottom: 1px solid var(--rd-border);
  }
  .sesen-page-rare-disease .rd-assessment:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-assessment:nth-child(3) { border-right: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-assessment:nth-last-child(-n+2) { border-bottom: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-assessment:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-bottom: 0;
  }

  .sesen-page-rare-disease .rd-orbit-card {
    width: min(100%, 560px);
    justify-self: center;
  }

  .sesen-page-rare-disease .rd-term-visual,
  .sesen-page-rare-disease .rd-signature-network {
    width: min(100%, 620px);
    justify-self: center;
  }

  .sesen-page-rare-disease .rd-terminology-map > .rd-term-visual { order: 2; }
  .sesen-page-rare-disease .rd-terminology-map > .rd-left-mobile { order: 1; }

  .sesen-page-rare-disease .rd-orphan-band { grid-template-columns: 1fr; gap: 12px; }
  .sesen-page-rare-disease .rd-validation-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  .sesen-page-rare-disease .rd-therapy-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-therapy {
    border-right: 1px solid var(--rd-border);
    border-bottom: 1px solid var(--rd-border);
  }
  .sesen-page-rare-disease .rd-therapy:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-therapy:nth-child(3) { border-right: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-therapy:nth-last-child(-n+2) { border-bottom: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-therapy:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-bottom: 0;
  }

  .sesen-page-rare-disease .rd-regulatory-grid,
  .sesen-page-rare-disease .rd-service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-quality-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-quality-item:nth-child(3n) { border-right: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-quality-item:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-quality-item:nth-last-child(-n+3) { border-bottom: 1px solid var(--rd-border); }
  .sesen-page-rare-disease .rd-quality-item:nth-last-child(-n+2) { border-bottom: 0; }
  .sesen-page-rare-disease .rd-iso-band { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sesen-page-rare-disease .rd-iso-item {
    border-right: 1px solid var(--rd-divider);
    border-bottom: 1px solid var(--rd-divider);
  }
  .sesen-page-rare-disease .rd-iso-item:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-iso-item:nth-child(3) { border-right: 1px solid var(--rd-divider); }
  .sesen-page-rare-disease .rd-iso-item:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-bottom: 0;
  }
  .sesen-page-rare-disease .rd-final-actions { flex-direction: row; min-width: 0; }
}

@media (max-width: 640px) {
  .sesen-page-rare-disease .rd-shell { padding-inline: 20px; }
  .sesen-page-rare-disease .rd-section,
  .sesen-page-rare-disease .rd-section--dense { padding: 66px 0; }
  .sesen-page-rare-disease .rd-hero { padding: 66px 0 62px; }
  .sesen-page-rare-disease h1 {
    font-size: 42px;
    text-align: center;
  }
  .sesen-page-rare-disease h2 { font-size: 32px; }
  .sesen-page-rare-disease .rd-hero-copy .rd-eyebrow { text-align: center; }
  .sesen-page-rare-disease .rd-hero-copy { max-width: 100%; }
  .sesen-page-rare-disease .rd-hero-copy .rd-lead,
  .sesen-page-rare-disease .rd-hero-copy .rd-support { text-align: left; }
  .sesen-page-rare-disease .rd-hero-actions { flex-direction: column; }
  .sesen-page-rare-disease .rd-hero-actions .rd-button { width: 100%; }
  .sesen-page-rare-disease .rd-lifecycle-thesis { text-align: left; font-size: 18px; }
  .sesen-page-rare-disease .rd-orphan-band { padding: 24px; }
  .sesen-page-rare-disease .rd-hero-art { justify-content: center; }
  .sesen-page-rare-disease .rd-trust-grid { grid-template-columns: 1fr 1fr; }
  .sesen-page-rare-disease .rd-trust-item { border-right: 1px solid var(--rd-divider); border-bottom: 1px solid var(--rd-divider); }
  .sesen-page-rare-disease .rd-trust-item:nth-child(2n) { border-right: 0; }
  .sesen-page-rare-disease .rd-trust-item:nth-child(3) { border-right: 1px solid var(--rd-divider); }
  .sesen-page-rare-disease .rd-trust-item:last-child { grid-column: 1 / -1; border-bottom: 0; border-right: 0; }
  .sesen-page-rare-disease .rd-header { margin-bottom: 36px; }
  .sesen-page-rare-disease .rd-header--center,
  .sesen-page-rare-disease .rd-mobile-center-title { text-align: center; }
  .sesen-page-rare-disease .rd-left-mobile { text-align: left !important; }
  .sesen-page-rare-disease .rd-final-grid h2 { text-align: center; }
  .sesen-page-rare-disease .rd-challenge-grid,
  .sesen-page-rare-disease .rd-clinical-band,
  .sesen-page-rare-disease .rd-regulatory-grid,
  .sesen-page-rare-disease .rd-service-grid,
  .sesen-page-rare-disease .rd-quality-grid,
  .sesen-page-rare-disease .rd-audience-grid,
  .sesen-page-rare-disease .rd-ai-columns,
  .sesen-page-rare-disease .rd-validation-flow,
  .sesen-page-rare-disease .rd-case-metrics {
    grid-template-columns: 1fr;
  }
  .sesen-page-rare-disease .rd-challenge,
  .sesen-page-rare-disease .rd-quality-item {
    border-right: 0 !important;
    border-bottom: 1px solid var(--rd-border) !important;
  }
  .sesen-page-rare-disease .rd-challenge:last-child,
  .sesen-page-rare-disease .rd-quality-item:last-child {
    border-bottom: 0 !important;
  }
  .sesen-page-rare-disease .rd-lifecycle { grid-template-columns: 1fr; gap: 0; }
  .sesen-page-rare-disease .rd-life-step {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 6px 16px;
    align-items: start;
    text-align: left;
    padding: 18px 0;
    border-bottom: 1px solid var(--rd-border);
  }
  .sesen-page-rare-disease .rd-life-step:last-child { border-bottom: 0; }
  .sesen-page-rare-disease .rd-life-dot {
    grid-row: 1 / span 2;
    margin: 0;
  }
  .sesen-page-rare-disease .rd-life-step p {
    grid-column: 2;
    margin-top: 0;
  }
  .sesen-page-rare-disease .rd-row { grid-template-columns: 44px minmax(0, 1fr); }
  .sesen-page-rare-disease .rd-orbit-card { min-height: 560px; }
  .sesen-page-rare-disease .rd-orbit-ring { width: 300px; height: 300px; }
  .sesen-page-rare-disease .rd-orbit-center { width: 132px; height: 132px; font-size: 18px; }
  .sesen-page-rare-disease .rd-orbit-node { width: 118px; min-height: 66px; font-size: 13px; }
  .sesen-page-rare-disease .rd-orbit-node--1 { top: 22px; }
  .sesen-page-rare-disease .rd-orbit-node--2 { top: 150px; right: 8px; }
  .sesen-page-rare-disease .rd-orbit-node--3 { bottom: 62px; right: 28px; }
  .sesen-page-rare-disease .rd-orbit-node--4 { bottom: 62px; left: 28px; }
  .sesen-page-rare-disease .rd-orbit-node--5 { top: 150px; left: 8px; }
  .sesen-page-rare-disease .rd-assessment-strip { grid-template-columns: 1fr; border-radius: 20px; }
  .sesen-page-rare-disease .rd-assessment { border-right: 0; border-bottom: 1px solid var(--rd-border) !important; }
  .sesen-page-rare-disease .rd-assessment:last-child { border-bottom: 0 !important; }
  .sesen-page-rare-disease .rd-case-panel { padding: 32px 24px; }
  .sesen-page-rare-disease .rd-therapy-grid { grid-template-columns: 1fr; }
  .sesen-page-rare-disease .rd-therapy { border-right: 0; border-bottom: 1px solid var(--rd-border) !important; }
  .sesen-page-rare-disease .rd-therapy:last-child { border-bottom: 0 !important; }
  .sesen-page-rare-disease .rd-term-visual { min-height: 560px; }
  .sesen-page-rare-disease .rd-term-center { width: 156px; height: 156px; }
  .sesen-page-rare-disease .rd-term-node--2 { right: 8px; }
  .sesen-page-rare-disease .rd-term-node--3 { right: 8px; }
  .sesen-page-rare-disease .rd-term-node--5 { left: 8px; }
  .sesen-page-rare-disease .rd-term-node--6 { left: 8px; }
  .sesen-page-rare-disease .rd-iso-band { grid-template-columns: 1fr; }
  .sesen-page-rare-disease .rd-iso-item { border-right: 0; border-bottom: 1px solid var(--rd-divider) !important; }
  .sesen-page-rare-disease .rd-iso-item:last-child { border-bottom: 0 !important; }
  .sesen-page-rare-disease .rd-signature-network { min-height: 530px; }
  .sesen-page-rare-disease .rd-signature-ring { width: 300px; height: 300px; }
  .sesen-page-rare-disease .rd-signature-node { min-width: 116px; font-size: 13px; }
  .sesen-page-rare-disease .rd-signature-node--2 { right: 0; top: 140px; }
  .sesen-page-rare-disease .rd-signature-node--3 { right: 20px; bottom: 58px; }
  .sesen-page-rare-disease .rd-signature-node--4 { left: 20px; bottom: 58px; }
  .sesen-page-rare-disease .rd-signature-node--5 { left: 0; top: 140px; }
  .sesen-page-rare-disease .rd-faq-button { font-size: 18px; grid-template-columns: minmax(0, 1fr) 36px; }
  .sesen-page-rare-disease .rd-faq-answer { padding-right: 0; }
  .sesen-page-rare-disease .rd-final-actions { flex-direction: column; }
  .sesen-page-rare-disease .rd-final-actions .rd-button { width: 100%; }
}

@media (max-width: 360px) {
  .sesen-page-rare-disease h1 { font-size: 38px; }
  .sesen-page-rare-disease h2 { font-size: 30px; }
  .sesen-page-rare-disease .rd-orbit-card,
  .sesen-page-rare-disease .rd-term-visual,
  .sesen-page-rare-disease .rd-signature-network { min-height: 600px; }
  .sesen-page-rare-disease .rd-orbit-node { width: 104px; padding-inline: 7px; }
  .sesen-page-rare-disease .rd-term-node { min-width: 96px; padding-inline: 8px; }
  .sesen-page-rare-disease .rd-signature-node { min-width: 104px; padding-inline: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-page-rare-disease .rd-button {
    transition: none;
  }
  .sesen-page-rare-disease .rd-button:hover {
    transform: none;
  }
}
`;

function Icon({ name }) {
  const common = { className: "rd-icon", viewBox: "0 0 24 24", "aria-hidden": "true" };
  const icons = {
    globe: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 4 5.4 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.4-4-9s1.4-6.6 4-9Z"/></svg>,
    dna: <svg {...common}><path d="M7 3c7 3 3 15 10 18M17 3C10 6 14 18 7 21M8 7h8M7 12h10M8 17h8"/></svg>,
    patient: <svg {...common}><circle cx="12" cy="8" r="3"/><path d="M5.5 20c.9-4.1 3.1-6.2 6.5-6.2s5.6 2.1 6.5 6.2"/><path d="M12 17.2v2.8M10.6 18.6h2.8"/></svg>,
    child: <svg {...common}><circle cx="9" cy="8" r="2.4"/><circle cx="16.2" cy="9.2" r="1.8"/><path d="M4.8 19c.7-3.3 2.1-5.1 4.2-5.1 2.2 0 3.6 1.8 4.2 5.1M13.1 19c.4-2.6 1.4-4 3-4 1.5 0 2.6 1.4 3.1 4"/></svg>,
    research: <svg {...common}><path d="M9 3h6M10 3v5l-5 9.2A2.5 2.5 0 0 0 7.2 21h9.6a2.5 2.5 0 0 0 2.2-3.8L14 8V3"/><path d="M7.8 15h8.4"/></svg>,
    trial: <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>,
    coa: <svg {...common}><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h5M8 16h7"/><path d="m15 12 1 1 2-2"/></svg>,
    regulatory: <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></svg>,
    therapy: <svg {...common}><path d="M8 3h8v4l3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8l3-3z"/><path d="M8 7h8M9 13h6M12 10v6"/></svg>,
    terms: <svg {...common}><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="3"/><path d="M9.5 8.5 11 14M14.5 8.5 13 14M10 7h4"/></svg>,
    ai: <svg {...common}><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 10h.01M15 10h.01M9 15c2 1.4 4 1.4 6 0M12 2v3M2 12h3M19 12h3"/></svg>,
    shield: <svg {...common}><path d="M12 3 19 6v5c0 4.8-2.7 8.1-7 10-4.3-1.9-7-5.2-7-10V6z"/><path d="m9.5 12 1.7 1.7 3.7-4"/></svg>,
    team: <svg {...common}><circle cx="9" cy="8" r="2.5"/><circle cx="16" cy="9" r="2"/><path d="M4.5 19c.7-3.5 2.2-5.4 4.5-5.4s3.8 1.9 4.5 5.4M13 19c.4-2.5 1.4-4 3.2-4 1.6 0 2.7 1.3 3.3 4"/></svg>,
    arrow: <svg {...common}><path d="M5 12h13M14 8l4 4-4 4"/></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16.5 9"/></svg>,
  };
  return icons[name] || icons.check;
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`rd-editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, centered = false, leftMobile = false }) {
  return (
    <div className={`rd-header ${centered ? "rd-header--center" : ""} ${leftMobile ? "rd-left-mobile" : "rd-mobile-center-title"}`}>
      {eyebrow ? <div className="rd-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="rd-lead">{intro}</p> : null}
    </div>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 560 500" role="img" aria-label="Illustration of a rare-disease patient connected to clinical, scientific, patient, endpoint, and regulatory information across a global network">
      <defs>
        <linearGradient id="rdHeroGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F7FF"/>
          <stop offset="100%" stopColor="#EAF0FF"/>
        </linearGradient>
      </defs>
      <circle cx="294" cy="247" r="188" fill="url(#rdHeroGlow)" stroke="#E0E7F5"/>
      <circle cx="294" cy="247" r="127" fill="#FFFFFF" stroke="#D6E0F2" strokeDasharray="5 8"/>
      <path d="M120 246C158 163 221 111 294 93M120 246c40 89 103 142 174 160M468 246c-40-89-103-142-174-153M468 246c-40 89-103 142-174 160" stroke="#D7E0F0" strokeWidth="1.5" fill="none"/>
      <ellipse cx="294" cy="247" rx="188" ry="72" fill="none" stroke="#D7E0F0" strokeWidth="1.4"/>
      <ellipse cx="294" cy="247" rx="72" ry="188" fill="none" stroke="#D7E0F0" strokeWidth="1.4"/>
      <g transform="translate(238 179)">
        <circle cx="56" cy="36" r="24" fill="#FFFFFF" stroke="#17264D" strokeWidth="2.3"/>
        <path d="M17 118c7-34 20-52 39-52s32 18 39 52" fill="#FFFFFF" stroke="#17264D" strokeWidth="2.3" strokeLinecap="round"/>
        <path d="M56 77v28M47 91h18" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(73 70)">
        <rect width="132" height="72" rx="18" fill="#FFFFFF" stroke="#D5DFF1"/>
        <path d="M22 23h30M22 35h50M22 47h39" stroke="#3659BB" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="103" cy="35" r="11" fill="#EAF0FF" stroke="#4B6FD8"/>
      </g>
      <g transform="translate(361 68)">
        <rect width="132" height="72" rx="18" fill="#FFFFFF" stroke="#D5DFF1"/>
        <path d="M28 20c26 10 11 34 36 43M75 20C49 30 64 54 39 63" stroke="#17264D" strokeWidth="1.7" fill="none"/>
        <path d="M44 27h26M41 39h32M44 51h26" stroke="#4B6FD8" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="103" cy="35" r="11" fill="#F5F7FF" stroke="#3659BB"/>
      </g>
      <g transform="translate(62 343)">
        <rect width="144" height="74" rx="18" fill="#FFFFFF" stroke="#D5DFF1"/>
        <circle cx="34" cy="28" r="9" fill="none" stroke="#17264D" strokeWidth="1.8"/>
        <path d="M19 58c3-13 8-20 15-20s12 7 15 20M65 24h55M65 38h43M65 52h50" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      <g transform="translate(358 348)">
        <rect width="146" height="74" rx="18" fill="#FFFFFF" stroke="#D5DFF1"/>
        <path d="M29 18h48v40H29zM39 29h28M39 39h21M39 49h25" stroke="#17264D" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        <path d="m94 39 8 8 17-20" stroke="#4B6FD8" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g transform="translate(455 216)">
        <circle cx="28" cy="28" r="27" fill="#FFFFFF" stroke="#D5DFF1"/>
        <path d="M13 28h30M28 13c6 5 9 10 9 15s-3 10-9 15c-6-5-9-10-9-15s3-10 9-15Z" stroke="#3659BB" strokeWidth="1.5" fill="none"/>
      </g>
      <g transform="translate(46 212)">
        <circle cx="28" cy="28" r="27" fill="#FFFFFF" stroke="#D5DFF1"/>
        <path d="M15 23h26M15 31h21M15 39h16" stroke="#17264D" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="39" cy="15" r="5" fill="#4B6FD8"/>
      </g>
      <g fill="#4B6FD8">
        <circle cx="294" cy="93" r="5"/>
        <circle cx="468" cy="246" r="5"/>
        <circle cx="294" cy="406" r="5"/>
        <circle cx="120" cy="246" r="5"/>
      </g>
    </svg>
  );
}

const challenges = [
  ["globe", "Small, Geographically Dispersed Populations", "A multinational rare-disease study may need many languages even when relatively few participants speak each one. Sesen helps keep terminology, versions, and study materials aligned across markets."],
  ["dna", "Specialized and Evolving Terminology", "Genetic variants, biomarkers, molecular mechanisms, assays, endpoints, and investigational therapies require disciplined terminology management across scientific, clinical, regulatory, and patient-facing content."],
  ["research", "Natural History and Emerging Evidence", "Natural-history studies, registries, observational research, patient interviews, and related evidence may play an unusually important role in understanding disease progression and meaningful outcomes."],
  ["patient", "Patient and Caregiver Perspectives", "Patient, parent, caregiver, and advocacy perspectives can be central to understanding symptoms, functioning, disease burden, treatment experience, and outcomes that matter."],
  ["child", "Pediatric and Age-Specific Communication", "Assent, caregiver communication, observer-reported measures, and age-appropriate materials require language that is understandable to the intended respondent while remaining clinically aligned."],
  ["therapy", "Advanced Therapeutic Modalities", "Gene therapy, genome editing, RNA therapeutics, antisense oligonucleotides, precision medicine, and other advanced approaches introduce specialized terminology across the development lifecycle."],
];

const lifecycle = [
  ["research", "Natural History & Research", "Disease understanding, registries, patient research, scientific evidence."],
  ["trial", "Clinical Development", "Protocols, consent, site content, data collection, amendments."],
  ["patient", "Patient & Caregiver Engagement", "Recruitment, education, participation, retention, digital communication."],
  ["coa", "Endpoints & Linguistic Validation", "COA, eCOA, PRO, ObsRO, ClinRO, PerfO, patient diaries."],
  ["regulatory", "Regulatory Submission", "Dossiers, CTD/eCTD, CMC, authority responses, country content."],
  ["therapy", "Treatment Access & Lifecycle", "Labeling, safety, product information, training, ongoing updates."],
];

const researchRows = [
  ["research", "Natural-History Studies", "Protocols, study materials, investigator content, participant communication, questionnaires, data-collection tools, study reports, and supporting documentation."],
  ["trial", "Disease Registries", "Patient enrollment, registry questionnaires, longitudinal follow-up, digital interfaces, patient communication, and recurring data-collection content."],
  ["dna", "Scientific, Genomic & Biomarker Content", "Research reports, manuscripts, presentations, genetics, molecular diagnostics, genomic sequencing, biomarkers, assays, variants, and related scientific terminology."],
  ["patient", "Patient & Caregiver Research", "Interview guides, qualitative materials, transcripts, caregiver research, patient research, discussion guides, and multilingual research summaries."],
];

const assessments = [
  ["PRO / ePRO", "Patient-reported outcomes and digital patient measures"],
  ["ObsRO", "Observer-reported outcomes for caregivers and other observers"],
  ["ClinRO", "Clinician-reported assessments and rating instruments"],
  ["PerfO", "Performance outcome instructions, tasks, and scoring content"],
  ["eCOA", "Electronic clinical outcome assessments across digital environments"],
];

const therapies = [
  ["dna", "Gene Therapy", "Vectors, mechanisms, preclinical content, clinical documentation, CMC, long-term follow-up, patient communication, and regulatory content.", pageLinks.genomics, "Genomics & Gene Therapy Translation Services"],
  ["dna", "Genome Editing", "Target genes, editing mechanisms, delivery systems, assays, off-target analysis, manufacturing, nonclinical evaluation, and clinical monitoring.", pageLinks.genomics, "Genomics & Gene Therapy Translation Services"],
  ["therapy", "RNA Therapeutics", "Antisense oligonucleotides and other RNA-based approaches with specialized scientific, CMC, clinical, patient, and regulatory terminology.", pageLinks.mrna, "mRNA Translation Services"],
  ["research", "Precision Medicine", "Genomic testing, biomarkers, molecular diagnostics, patient selection, molecular subtypes, and related clinical research content.", pageLinks.genomics, "Genomics & Gene Therapy Translation Services"],
  ["therapy", "Cell-Based Therapies", "Scientific, manufacturing, clinical, training, patient-facing, and regulatory documentation appropriate to the therapy and development stage.", null, null],
];

const regulatoryItems = [
  ["regulatory", "Regulatory Submissions", "Investigational applications, clinical trial applications, marketing applications, CTD/eCTD content, clinical, nonclinical, CMC, scientific, and country-specific documentation.", pageLinks.submission, "Regulatory Submission Translation Services"],
  ["regulatory", "CTD & eCTD Documentation", "Multilingual content across Modules 1–5 with terminology management, reference alignment, translation memory, controlled revisions, and professional QA.", pageLinks.ctd, "CTD & eCTD Translation Services"],
  ["research", "CMC Documentation", "Drug substance, drug product, manufacturing processes, specifications, analytical methods, validation, stability, control strategies, and related quality content.", pageLinks.cmc, "CMC Document Translation Services"],
  ["trial", "Clinical Study Reports & Results", "CSRs, narratives, tables, listings, figures, appendices, summaries, and related clinical evidence aligned with study terminology and endpoints.", pageLinks.csr, "Clinical Study Report Translation Services"],
  ["regulatory", "Health Authority Communication", "Agency questions, information requests, sponsor responses, meeting materials, supporting evidence, updated documents, and country-specific correspondence.", pageLinks.regulatory, "Regulatory Translation Services"],
  ["therapy", "Labeling, Safety & Lifecycle", "Prescribing information, patient information, package leaflets, labels, safety statements, pharmacovigilance content, variations, and post-approval updates.", pageLinks.labeling, null],
];

const qualityItems = [
  ["team", "Professional Native Life Sciences Linguists", "Projects are assigned to linguists with the language proficiency and subject-matter experience appropriate to the content, audience, therapeutic area, and workflow."],
  ["check", "Independent Review", "Where required, translations undergo independent linguistic review and additional subject-matter or in-country review according to project specifications."],
  ["terms", "Terminology Governance", "Project glossaries, reference material, sponsor preferences, and approved terminology help keep related multilingual content consistent."],
  ["shield", "Linguistic Quality Assurance", "Quality checks can cover terminology, completeness, numbers, measurements, identifiers, cross-references, formatting, tags, and language-specific conventions."],
  ["trial", "Version Control & Traceability", "Controlled updates, translation-memory records, reviewer feedback, issue tracking, and project documentation support content that changes through development."],
  ["shield", "Secure Workflows", "Secure cloud infrastructure and controlled workflows support the handling of sensitive clinical, scientific, patient, and regulated content."],
];

const audiences = [
  ["Pharmaceutical & Biotechnology Sponsors", "Coordinate clinical, regulatory, scientific, patient-facing, safety, and lifecycle translation through one specialized life sciences partner."],
  ["Emerging Biotech Companies", "Scale multilingual programs without building separate language workflows for every market, study, document type, or therapeutic modality."],
  ["Clinical Development & Operations", "Manage protocols, consent, site content, patient materials, study updates, amendments, and operational documentation across global studies."],
  ["Regulatory Affairs", "Maintain terminology and content continuity across dossiers, authority responses, CMC, country submissions, labeling, and lifecycle updates."],
  ["COA & Outcomes Research Teams", "Support translation, cultural adaptation, linguistic validation, cognitive debriefing, harmonization, eCOA implementation, and documentation."],
  ["Patient Engagement Teams", "Communicate clearly across recruitment, education, consent, participation, retention, patient support, and caregiver engagement."],
  ["CROs", "Coordinate multilingual content across sponsors, countries, investigators, sites, patients, reviewers, and technology providers."],
  ["eCOA & Digital Clinical Providers", "Support multilingual assessments, interfaces, patient instructions, screenshots, device environments, and validation workflows."],
];

const relatedServices = [
  ["Clinical Trial Translation Services", "Multilingual support for protocols, study documentation, ICFs, site materials, patient communication, amendments, and global study operations.", pageLinks.clinical],
  ["Linguistic Validation Services", "Structured translation and validation for COAs, PROs, ePROs, ObsROs, ClinROs, PerfOs, questionnaires, and patient-facing instruments.", pageLinks.lv],
  ["Patient Engagement Translation Services", "Patient-centered translation for recruitment, education, consent, participation, digital communication, retention, and caregiver engagement.", pageLinks.patient],
  ["Regulatory Translation Services", "Controlled multilingual support for submissions, authority communication, CTD/eCTD, CMC, labeling, safety, and regulatory lifecycle content.", pageLinks.regulatory],
  ["Genomics & Gene Therapy Translation Services", "Specialized scientific, clinical, regulatory, and patient-facing translation for genomic medicine, genetic research, gene therapy, and gene-editing programs.", pageLinks.genomics],
  ["mRNA Translation Services", "Specialized multilingual support for scientific, CMC, clinical, regulatory, and patient content surrounding emerging mRNA technologies and therapeutics.", pageLinks.mrna],
];

const faqs = [
  ["What are rare disease translation services?", "Rare disease translation services provide specialized multilingual support for the clinical, scientific, regulatory, patient-facing, endpoint, and digital content used in rare and ultra-rare disease research and therapeutic development. Sesen supports interconnected content such as natural-history studies, clinical trial documents, informed consent, COAs and eCOAs, regulatory submissions, CMC, safety, labeling, and advanced-therapy documentation."],
  ["How is rare disease translation different from general medical translation?", "Rare-disease programs can involve small and geographically dispersed patient populations, highly specialized or evolving terminology, limited natural-history information, disease-specific endpoints, significant patient and caregiver involvement, pediatric populations, and novel therapeutic modalities. Sesen approaches these requirements as a connected multilingual program rather than a collection of unrelated files."],
  ["Does Sesen support orphan-drug development programs?", "Yes. Sesen provides language services for clinical, scientific, patient-facing, regulatory, CMC, safety, labeling, and other documentation associated with orphan-drug and rare-disease development. Sesen's role is focused on multilingual content and communication; development strategy, designation decisions, and regulatory pathways remain the responsibility of sponsors and their regulatory experts."],
  ["Can Sesen translate rare-disease clinical trial documents?", "Yes. Sesen supports protocols, amendments, investigator's brochures, informed consent forms, assent forms, IRB and ethics committee materials, CRFs/eCRFs, site manuals, laboratory and pharmacy manuals, training content, patient materials, study reports, safety communication, and other study documentation."],
  ["Does Sesen provide linguistic validation for rare-disease COAs and eCOAs?", "Yes. Sesen supports linguistic validation for PRO, ePRO, ClinRO, ObsRO, PerfO, eCOA, patient diaries, symptom scales, questionnaires, and other clinical outcome instruments. Depending on project requirements, services can include forward translation, reconciliation, back translation, harmonization, cognitive debriefing, in-country review, screenshot review, proofreading, and validation documentation."],
  ["Can Sesen support pediatric rare-disease studies?", "Yes. Sesen translates pediatric assent forms, parent and guardian consent, patient information, caregiver materials, observer-reported assessments, questionnaires, and other age-sensitive content. Language can be adapted for the intended respondent while remaining aligned with the underlying clinical concepts."],
  ["Does Sesen support gene therapy and RNA-based rare-disease programs?", "Yes. Sesen supports multilingual scientific, clinical, CMC, patient-facing, regulatory, and related documentation for genomics, gene therapy, genome editing, RNA-based therapeutics, mRNA technologies, and other advanced treatment programs."],
  ["How does Sesen maintain terminology consistency across a rare-disease program?", "Sesen can create program-specific terminology resources and translation memories covering disease terminology, genetic variants, biomarkers, mechanisms of action, endpoints, procedures, treatment language, and sponsor-approved wording. These assets can be reused and updated across clinical, regulatory, safety, labeling, and patient-facing content."],
  ["Can AI be used for rare disease translation?", "AI can support selected translation and quality-assurance tasks such as terminology checking, completeness review, reference comparison, repeated-content analysis, translation-memory leverage, and identification of potential inconsistencies. For specialized life sciences content, Sesen combines these technologies with qualified human linguists and reviewers who evaluate scientific meaning, clinical context, patient comprehension, cultural appropriateness, and final linguistic quality."],
  ["How many languages does Sesen support?", "Sesen supports life sciences translation and localization in 150+ languages, including country-specific language variants required for multinational clinical trials, regulatory programs, patient communication, and global product deployment."],
];

function RareDiseaseTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-page-rare-disease">
      <style>{styles}</style>

      <section className="rd-hero" aria-labelledby="rare-disease-title">
        <div className="rd-shell rd-hero-grid">
          <div className="rd-hero-copy">
            <div className="rd-eyebrow">RARE DISEASE &amp; ORPHAN DRUG DEVELOPMENT</div>
            <h1 id="rare-disease-title">Rare Disease Translation Services</h1>
            <p className="rd-lead">
              Rare-disease development can span small global patient populations, highly specialized science,
              evolving endpoints, patient and caregiver input, complex clinical programs, and increasingly advanced
              therapeutic modalities.
            </p>
            <p className="rd-support">
              Sesen provides specialized multilingual support across natural-history research, clinical trials,
              patient engagement, COA and eCOA linguistic validation, regulatory submissions, gene and RNA-based
              therapies, safety, labeling, and the broader product lifecycle.
            </p>
            <div className="rd-hero-actions">
              <a className="rd-button rd-button--primary" href={pageLinks.quote}>REQUEST A QUOTE <Icon name="arrow" /></a>
              <a className="rd-button rd-button--secondary" href={pageLinks.sales}>TALK WITH TEAM SESEN</a>
            </div>
          </div>
          <div className="rd-hero-art">
            <HeroArt />
          </div>
        </div>
      </section>

      <div className="rd-trust-band" aria-label="Sesen rare disease capabilities">
        <div className="rd-shell rd-trust-grid">
          {[
            "150+ Languages",
            "Professional Life Sciences Linguists",
            "Clinical, Regulatory & Patient-Facing Expertise",
            "COA, eCOA & Linguistic Validation",
            "ISO-Certified Quality Processes",
          ].map((item) => <div className="rd-trust-item" key={item}>{item}</div>)}
        </div>
      </div>

      <section className="rd-section">
        <div className="rd-shell">
          <div className="rd-challenge-intro">
            <div className="rd-mobile-center-title">
              <div className="rd-eyebrow">WHY RARE DISEASE IS DIFFERENT</div>
              <h2>When Patient Populations Are Small, Every Language Matters</h2>
            </div>
            <p className="rd-lead">
              Rare-disease development is not simply conventional drug development involving fewer patients.
              Eligible participants may be distributed across many countries, disease terminology may still be
              evolving, endpoints may depend heavily on patient or caregiver reporting, and novel modalities can
              introduce new scientific concepts throughout the program. Every patient, endpoint, term, document,
              and language can carry greater importance within the overall evidence base.
            </p>
          </div>
          <div className="rd-challenge-grid">
            {challenges.map(([icon, title, copy]) => (
              <article className="rd-challenge" key={title}>
                <div className="rd-challenge-top">
                  <span className="rd-icon-box"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                </div>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--blue-soft">
        <div className="rd-shell">
          <SectionHeader
            title="Multilingual Support Across the Rare-Disease Development Lifecycle"
            intro="Rare-disease content does not exist in isolation. Sesen helps connect terminology, patient language, endpoint concepts, study references, and regulatory content as the program advances."
            centered
          />
          <div className="rd-lifecycle">
            {lifecycle.map(([icon, title, copy]) => (
              <div className="rd-life-step" key={title}>
                <div className="rd-life-dot"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="rd-lifecycle-thesis">
            One development program. Multiple audiences. Many languages. Controlled multilingual continuity.
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell rd-editorial-split">
          <div className="rd-sticky-copy rd-left-mobile">
            <div className="rd-eyebrow">NATURAL HISTORY &amp; RESEARCH</div>
            <h2>Translating Rare-Disease Research Into Global Evidence</h2>
            <p className="rd-lead">
              Rare-disease development often begins with understanding the disease itself. Natural-history studies,
              registries, observational research, genomic studies, qualitative interviews, and other evidence sources
              can help characterize progression, meaningful outcomes, and patient subpopulations.
            </p>
            <EditorialLink href={pageLinks.genomics}>Genomics &amp; Gene Therapy Translation Services</EditorialLink>
          </div>
          <div className="rd-row-list">
            {researchRows.map(([icon, title, copy]) => (
              <article className="rd-row" key={title}>
                <span className="rd-icon-box"><Icon name={icon} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--soft">
        <div className="rd-shell">
          <SectionHeader
            title="Rare Disease Clinical Trial Translation Services"
            intro="A rare-disease study may enroll relatively few patients yet require complex coordination across specialist sites, countries, language variants, patient populations, outcome instruments, and recurring study updates."
            leftMobile
          />
          <div className="rd-inline-links" style={{marginBottom:28}}>
            <EditorialLink href={pageLinks.clinical}>Clinical Trial Translation Services</EditorialLink>
          </div>
          <div className="rd-clinical-band">
            <article className="rd-clinical-col">
              <h3>Study Design &amp; Scientific Documentation</h3>
              <ul>
                <li>Clinical trial protocols and synopses</li>
                <li>Protocol amendments</li>
                <li>Investigator's brochures</li>
                <li>Study plans and study manuals</li>
              </ul>
              <div className="rd-link-stack">
                <EditorialLink href={pageLinks.protocol}>Protocol Translation Services</EditorialLink>
                <EditorialLink href={pageLinks.ib}>Investigator's Brochure Translation Services</EditorialLink>
              </div>
            </article>
            <article className="rd-clinical-col">
              <h3>Study Startup &amp; Ethics</h3>
              <ul>
                <li>Informed consent forms</li>
                <li>Pediatric assent and caregiver consent</li>
                <li>IRB and ethics committee submissions</li>
                <li>Recruitment and country materials</li>
              </ul>
              <div className="rd-link-stack">
                <EditorialLink href={pageLinks.icf}>Informed Consent Form Translation Services</EditorialLink>
                <EditorialLink href={pageLinks.irb}>IRB &amp; Ethics Committee Translation Services</EditorialLink>
              </div>
            </article>
            <article className="rd-clinical-col">
              <h3>Study Operations &amp; Data Collection</h3>
              <ul>
                <li>Site, laboratory and pharmacy manuals</li>
                <li>Investigator and site communications</li>
                <li>CRFs, eCRFs and study worksheets</li>
                <li>Patient diaries and clinical interfaces</li>
              </ul>
              <div className="rd-link-stack">
                <EditorialLink href={pageLinks.crf}>CRF Translation Services</EditorialLink>
                <EditorialLink href={pageLinks.studyDocs}>Clinical Study Document Translation Services</EditorialLink>
              </div>
            </article>
            <article className="rd-clinical-col">
              <h3>Amendments &amp; Controlled Updates</h3>
              <ul>
                <li>Delta translation and revision tracking</li>
                <li>Updated consent and site content</li>
                <li>Translation-memory reuse</li>
                <li>Coordinated multilingual rollout</li>
              </ul>
              <div className="rd-link-stack">
                <EditorialLink href={pageLinks.studyDocs}>Clinical Study Document Translation Services</EditorialLink>
                <EditorialLink href={pageLinks.clinical}>Clinical Trial Translation Services</EditorialLink>
              </div>
            </article>
          </div>
          <div className="rd-note-band">
            <strong style={{color:"#17264D"}}>Connected study support:</strong>{" "}
            Sesen can align terminology and references across protocols, investigator materials, ICFs, ethics content,
            CRFs/eCRFs, patient materials, and recurring amendments so related multilingual study content remains
            connected rather than being managed as isolated files.
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell rd-patient-layout">
          <div>
            <div className="rd-mobile-center-title">
              <div className="rd-eyebrow">PATIENT &amp; CAREGIVER COMMUNICATION</div>
              <h2>Communication That Preserves Clarity and Patient Understanding</h2>
            </div>
            <p className="rd-lead" style={{marginTop:18}}>
              Rare-disease patients and caregivers often develop deep knowledge of their condition through lived
              experience. Effective multilingual communication should respect that expertise while making complex
              clinical and scientific information understandable for the intended audience.
            </p>
            <div className="rd-chip-line">
              {["Recruitment", "Consent & Assent", "Patient Education", "Caregiver Communication", "Retention", "Digital Patient Experiences"].map((item) => (
                <span className="rd-chip" key={item}>{item}</span>
              ))}
            </div>
            <p style={{marginTop:22}}>
              Sesen supports recruitment websites and materials, study explanations, informed consent and assent,
              visit instructions, treatment and procedure education, caregiver guides, observer instructions, study
              updates, reminders, patient portals, eConsent environments, eCOA/ePRO systems, and other patient-facing
              content used throughout site-based, hybrid, and decentralized studies.
            </p>
            <div className="rd-patient-takeaway">
              The objective is not simply to translate the words. It is to preserve meaning, usability, and patient
              understanding in context while keeping the content aligned with the underlying clinical concepts.
            </div>
            <EditorialLink href={pageLinks.patient}>Patient Engagement Translation Services</EditorialLink>
          </div>
          <div className="rd-orbit-card" role="img" aria-label="Patient-centered rare disease communication model">
            <div className="rd-orbit-ring" aria-hidden="true" />
            <div className="rd-orbit-node rd-orbit-node--1"><Icon name="patient" /> Patient Voice</div>
            <div className="rd-orbit-node rd-orbit-node--2"><Icon name="trial" /> Study Participation</div>
            <div className="rd-orbit-node rd-orbit-node--3"><Icon name="coa" /> Outcomes</div>
            <div className="rd-orbit-node rd-orbit-node--4"><Icon name="child" /> Caregiver Input</div>
            <div className="rd-orbit-node rd-orbit-node--5"><Icon name="globe" /> Global Access</div>
            <div className="rd-orbit-center">Rare-Disease Patient</div>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--blue-soft">
        <div className="rd-shell">
          <SectionHeader
            eyebrow="COA, eCOA & LINGUISTIC VALIDATION"
            title="Protecting Endpoint Meaning Across Languages"
            intro="In a rare-disease study, every participant can contribute materially to a relatively small evidence base. For clinical outcome assessments, linguistic accuracy alone is not enough: symptoms, response scales, recall periods, instructions, functional concepts, and digital implementation must preserve the intended meaning for each target population."
            centered
          />
          <div className="rd-assessment-strip">
            {assessments.map(([label, copy]) => (
              <div className="rd-assessment" key={label}>
                <strong>{label}</strong>
                <span>{copy}</span>
              </div>
            ))}
          </div>
          <div className="rd-validation-flow">
            {[
              ["Concept & Translatability Review", "Identify concepts, instructions, response structures, cultural considerations, and multilingual risks before translation."],
              ["Translation & Reconciliation", "Develop and reconcile target-language versions that preserve intended meaning and appropriate respondent language."],
              ["Back Translation & Harmonization", "Review concept shifts, resolve queries, and align key terminology across languages where the methodology requires it."],
              ["Cognitive Debriefing", "Evaluate comprehension and conceptual equivalence with representative patients or caregivers when required by the validation plan."],
              ["Digital Review & Final QA", "Support in-country review, screenshot and in-context QA, proofreading, version control, and validation documentation."],
            ].map(([title, copy]) => (
              <article className="rd-validation-step" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="rd-inline-links">
            <EditorialLink href={pageLinks.lv}>Linguistic Validation Services</EditorialLink>
            <EditorialLink href={pageLinks.ecoa}>eCOA Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell">
          <div className="rd-case-panel">
            <div className="rd-case-copy">
              <div className="rd-mobile-center-title">
                <div className="rd-eyebrow">RARE DISEASE IN PRACTICE</div>
                <h2>Cognitive Debriefing Across 22 Languages for a Phase III HAE Trial</h2>
              </div>
              <p className="rd-lead">
                A global biopharmaceutical sponsor engaged Sesen to support cognitive debriefing and linguistic
                validation of a patient-reported outcome instrument for a Phase III hereditary angioedema study.
              </p>
              <p>
                The program included adolescent and adult populations across 22 languages. Sesen supported
                age-appropriate cognitive interviewing, cross-cultural review, reconciliation, documentation, and
                finalization of multilingual instrument versions using native-language resources and a flexible mix
                of virtual and in-person patient interviews.
              </p>
              <EditorialLink href={pageLinks.hae} className="rd-case-link">View the HAE Case Study</EditorialLink>
            </div>
            <div className="rd-case-metrics">
              {[
                ["22", "Languages"],
                ["Phase III", "Clinical Trial"],
                ["PRO", "Linguistic Validation"],
                ["Adolescent + Adult", "Patient Populations"],
              ].map(([metric, label]) => (
                <div className="rd-case-metric" key={label}>
                  <strong>{metric}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell">
          <SectionHeader
            eyebrow="ADVANCED & INDIVIDUALIZED THERAPIES"
            title="Multilingual Support for the New Generation of Rare-Disease Therapies"
            intro="Gene replacement, genome editing, RNA-targeted medicines, precision approaches, and other advanced therapies are creating new opportunities—and new language challenges across scientific, CMC, clinical, regulatory, and patient-facing content."
            centered
          />
          <div className="rd-therapy-grid">
            {therapies.map(([icon, title, copy, href, linkLabel]) => (
              <article className="rd-therapy" key={title}>
                <span className="rd-icon-box"><Icon name={icon} /></span>
                <h3 style={{marginTop:18}}>{title}</h3>
                <p>{copy}</p>
                {href ? <EditorialLink href={href}>{linkLabel}</EditorialLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--soft">
        <div className="rd-shell">
          <SectionHeader
            eyebrow="REGULATORY & ORPHAN-DRUG DOCUMENTATION"
            title="Rare-Disease Regulatory Translation From Submission Through Lifecycle"
            intro="Sesen translates and manages multilingual documentation supporting rare-disease and orphan-drug programs while sponsors and their regulatory experts determine development strategy, designations, submission pathways, and approval plans."
            leftMobile
          />
          <div className="rd-regulatory-grid">
            {regulatoryItems.map(([icon, title, copy, href, linkLabel]) => (
              <article className="rd-regulatory-item" key={title}>
                <span className="rd-icon-box"><Icon name={icon} /></span>
                <h3 style={{marginTop:17}}>{title}</h3>
                <p>{copy}</p>
                {title === "Labeling, Safety & Lifecycle" ? (
                  <div className="rd-link-stack">
                    <EditorialLink href={pageLinks.labeling}>Labeling Translation Services</EditorialLink>
                    <EditorialLink href={pageLinks.pv}>Pharmacovigilance Translation Services</EditorialLink>
                  </div>
                ) : (
                  <EditorialLink href={href}>{linkLabel}</EditorialLink>
                )}
              </article>
            ))}
          </div>
          <div className="rd-orphan-band">
            <div>
              <h3>Orphan-Drug Development Content</h3>
            </div>
            <div>
              <p>
                Sesen supports multilingual clinical, scientific, regulatory, patient-facing, CMC, safety, labeling,
                and lifecycle documentation associated with orphan-drug programs. Our language-focused workflows help
                development teams communicate specialized content accurately and consistently across markets while
                integrating with sponsor-led regulatory and development processes.
              </p>
              <EditorialLink href={pageLinks.regulatory}>Regulatory Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell rd-terminology-map">
          <div className="rd-term-visual" role="img" aria-label="Program terminology connecting clinical, patient, endpoint, regulatory, safety and labeling content">
            <div className="rd-term-line rd-term-line--1" aria-hidden="true" />
            <div className="rd-term-line rd-term-line--2" aria-hidden="true" />
            <div className="rd-term-line rd-term-line--3" aria-hidden="true" />
            <div className="rd-term-node rd-term-node--1">Clinical</div>
            <div className="rd-term-node rd-term-node--2">Patient</div>
            <div className="rd-term-node rd-term-node--3">COA / eCOA</div>
            <div className="rd-term-node rd-term-node--4">Regulatory</div>
            <div className="rd-term-node rd-term-node--5">Safety</div>
            <div className="rd-term-node rd-term-node--6">Labeling</div>
            <div className="rd-term-center">
              <strong>One Rare-Disease Vocabulary</strong>
              <span>Controlled Across the Program</span>
            </div>
          </div>
          <div className="rd-left-mobile">
            <div className="rd-eyebrow">TERMINOLOGY GOVERNANCE</div>
            <h2>One Rare-Disease Vocabulary Across Every Document</h2>
            <p className="rd-lead" style={{marginTop:18}}>
              A disease name, genotype, biomarker, symptom, endpoint, investigational product term, procedure, or
              safety concept may appear across dozens of documents and audiences. Sesen establishes multilingual
              terminology assets that can evolve with the program.
            </p>
            <ul className="rd-simple-list">
              <li>Program-specific terminology for genes, variants, biomarkers, assays, mechanisms, endpoints, symptoms, procedures, and treatments</li>
              <li>Translation memory for approved recurring content when context permits</li>
              <li>Cross-document alignment across protocols, ICFs, COAs, CRFs, submissions, safety content, labeling, and patient communication</li>
              <li>Audience-appropriate wording without losing scientific alignment</li>
              <li>Incorporation of approved sponsor and in-country reviewer feedback</li>
              <li>Version management as studies, endpoints, and regulatory content evolve</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--blue-soft">
        <div className="rd-shell rd-ai-layout">
          <div>
            <div className="rd-mobile-center-title">
              <h2>AI-Enabled Workflows With Human Clinical Judgment</h2>
            </div>
            <p className="rd-lead" style={{marginTop:18}}>
              Artificial intelligence can help rare-disease translation teams identify inconsistencies, reuse approved
              language, and manage multilingual information more efficiently. It does not remove the need for expert
              human judgment.
            </p>
            <div className="rd-ai-columns" style={{marginTop:32}}>
              <div className="rd-ai-panel">
                <h3>Where AI-Assisted QA Adds Value</h3>
                <ul className="rd-simple-list">
                  <li>Terminology consistency checks</li>
                  <li>Missing-content detection</li>
                  <li>Numbers and measurement checks</li>
                  <li>Reference and repeated-content analysis</li>
                  <li>Translation-memory leverage</li>
                  <li>Potential inconsistency identification</li>
                </ul>
              </div>
              <div className="rd-ai-panel">
                <h3>Human-Led Final Evaluation</h3>
                <ul className="rd-simple-list">
                  <li>Scientific meaning</li>
                  <li>Clinical context</li>
                  <li>Patient comprehension</li>
                  <li>Cultural appropriateness</li>
                  <li>Endpoint concepts</li>
                  <li>Regulatory nuance and final linguistic quality</li>
                </ul>
              </div>
            </div>
            <EditorialLink href={pageLinks.ai}>Sesen AI-Enabled Translation Approach</EditorialLink>
          </div>
          <div className="rd-human-panel">
            <span className="rd-icon-box" style={{background:"rgba(255,255,255,.10)", color:"#C8D6FF"}}><Icon name="ai" /></span>
            <h3 style={{marginTop:18, fontSize:26}}>Controlled Assistance, Not Unsupervised Translation</h3>
            <p style={{marginTop:14}}>
              For specialized rare-disease content, technology is most valuable when it supports qualified linguists
              and reviewers who understand the scientific, clinical, patient, and regulatory context.
            </p>
            <ul className="rd-simple-list">
              <li>Professional expertise remains central</li>
              <li>Terminology and references stay governed</li>
              <li>AI assists review and consistency workflows</li>
              <li>Human reviewers retain final linguistic judgment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell">
          <SectionHeader
            eyebrow="QUALITY, SECURITY & TRACEABILITY"
            title="Quality Controls for Regulated Rare-Disease Content"
            intro="Rare-disease programs may involve sensitive patient information, proprietary scientific research, confidential development plans, and regulated documentation. Sesen applies structured quality and information-management controls appropriate for life sciences translation."
            centered
          />
          <div className="rd-quality-grid">
            {qualityItems.map(([icon, title, copy]) => (
              <article className="rd-quality-item" key={title}>
                <span className="rd-icon-box"><Icon name={icon} /></span>
                <h3 style={{marginTop:17}}>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="rd-iso-band" aria-label="Sesen quality and global delivery credentials">
            <div className="rd-iso-item"><strong>ISO 17100</strong><span>Translation Services</span></div>
            <div className="rd-iso-item"><strong>ISO 9001:2015</strong><span>Quality Management</span></div>
            <div className="rd-iso-item"><strong>ISO 13485:2016</strong><span>Medical Device Quality Management</span></div>
            <div className="rd-iso-item"><strong>150+</strong><span>Languages</span></div>
            <div className="rd-iso-item"><strong>Life Sciences</strong><span>Professional Linguists</span></div>
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--soft">
        <div className="rd-shell">
          <SectionHeader
            title="Built for Rare-Disease Development Teams"
            intro="Different functions encounter different multilingual challenges during development. Sesen can support individual projects or broader programs across the rare-disease ecosystem."
            centered
          />
          <div className="rd-audience-grid">
            {audiences.map(([title, copy]) => (
              <article className="rd-audience" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                {title === "CROs" ? <EditorialLink href={pageLinks.cro}>CRO Translation Services</EditorialLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--navy">
        <div className="rd-shell rd-signature">
          <div className="rd-signature-copy">
            <div className="rd-mobile-center-title">
              <h2>Keep the Entire Multilingual Rare-Disease Program Connected</h2>
            </div>
            <p className="rd-lead">
              A rare-disease program may involve fewer patients than a large therapeutic-area study, but each
              participant can sit within a complex network of patient voice, clinical evidence, endpoints, scientific
              knowledge, and regulatory documentation.
            </p>
            <p>
              Sesen helps connect those information streams through professional linguistic expertise, controlled
              terminology, reusable language assets, structured QA, responsible technology, and centralized
              multilingual program management.
            </p>
          </div>
          <div className="rd-signature-network" role="img" aria-label="Connected rare disease multilingual program">
            <div className="rd-signature-ring" aria-hidden="true" />
            <div className="rd-signature-node rd-signature-node--1">Patient Voice</div>
            <div className="rd-signature-node rd-signature-node--2">Clinical Evidence</div>
            <div className="rd-signature-node rd-signature-node--3">Endpoints</div>
            <div className="rd-signature-node rd-signature-node--4">Scientific Knowledge</div>
            <div className="rd-signature-node rd-signature-node--5">Regulatory Content</div>
            <div className="rd-signature-core">One Controlled Multilingual Program</div>
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-shell">
          <SectionHeader
            title="Explore Related Life Sciences Translation Services"
            intro="Rare-disease development connects multiple clinical, scientific, patient, technology, and regulatory disciplines. These Sesen services provide deeper support for the most closely related workflows."
            centered
          />
          <div className="rd-service-grid">
            {relatedServices.map(([title, copy, href]) => (
              <article className="rd-service" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <EditorialLink href={href}>Explore {title}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--soft">
        <div className="rd-shell">
          <div className="rd-faq-wrap">
            <SectionHeader
              title="Rare Disease Translation Services FAQ"
              intro="Answers to common questions about multilingual rare-disease research, clinical trials, linguistic validation, advanced therapies, terminology, and global delivery."
              leftMobile
            />
            <div>
              {faqs.map(([question, answer], index) => {
                const open = openFaq === index;
                return (
                  <div className="rd-faq-item" key={question}>
                    <button
                      className="rd-faq-button"
                      type="button"
                      aria-expanded={open}
                      aria-controls={`rd-faq-answer-${index}`}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      <span>{question}</span>
                      <span className="rd-faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
                    </button>
                    {open ? (
                      <div className="rd-faq-answer" id={`rd-faq-answer-${index}`}>
                        <p>{answer}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="rd-section rd-final-cta">
        <div className="rd-shell rd-final-grid">
          <div>
            <h2>Support Your Rare-Disease Program With Specialized Multilingual Expertise</h2>
            <p>
              Whether you are preparing a natural-history study, launching a multinational clinical trial, validating
              a rare-disease COA, advancing a gene or RNA-based therapy, responding to a health authority, or managing
              multilingual content across the product lifecycle, Team Sesen is ready to help.
            </p>
          </div>
          <div className="rd-final-actions">
            <a className="rd-button rd-button--primary" href={pageLinks.quote}>REQUEST A QUOTE <Icon name="arrow" /></a>
            <a className="rd-button rd-button--secondary" href={pageLinks.sales}>TALK WITH TEAM SESEN</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RareDiseaseTranslationServicesWireframe;
