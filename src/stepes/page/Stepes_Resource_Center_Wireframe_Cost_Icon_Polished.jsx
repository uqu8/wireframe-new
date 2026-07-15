import React, { useMemo, useRef, useState } from "react";

const wireframeStyles = String.raw`
.resource-center {
  --stepes-magenta: #c11d63;
  --stepes-magenta-dark: #9f1d55;
  --stepes-magenta-deep: #7a1542;
  --stepes-blush: #fdf2f7;
  --ink: #101828;
  --ink-soft: #344054;
  --muted: #667085;
  --border: #e4e7ec;
  --surface: #ffffff;
  --surface-soft: #f7f8fb;
  --focus: rgba(193, 29, 99, 0.22);
  --shadow-soft: 0 20px 60px rgba(16, 24, 40, 0.08);
  color: var(--ink);
  font-family:
    Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

.resource-center,
.resource-center * {
  box-sizing: border-box;
}

.resource-center a {
  color: inherit;
}

.resource-center button,
.resource-center input {
  font: inherit;
}

.resource-center button,
.resource-center a {
  -webkit-tap-highlight-color: transparent;
}

.resource-center {
  overflow: clip;
}

.resource-center .shell {
  width: min(100%, 1392px);
  margin: 0 auto;
  padding-left: 56px;
  padding-right: 56px;
}

.resource-center .eyebrow {
  margin: 0;
  color: var(--stepes-magenta-dark);
  font-size: 11px !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase;
}

.resource-center h1,
.resource-center h2,
.resource-center h3,
.resource-center p {
  margin-top: 0;
}

.resource-center h1,
.resource-center h2,
.resource-center h3 {
  color: var(--ink);
  font-weight: 600;
}

.resource-center h1 {
  max-width: 920px;
  margin: 18px auto 24px;
  font-size: 48px;
  line-height: 1.08;
  letter-spacing: -0.038em;
}

.resource-center h2 {
  font-size: 36px;
  line-height: 1.14;
  letter-spacing: -0.028em;
}

.resource-center h3 {
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.018em;
}

.resource-center .sr-only {
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

.editorial-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 44px;
  color: var(--stepes-magenta-dark);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
}

.editorial-link svg {
  width: 18px;
  height: 18px;
  transition: transform 180ms ease;
}

.editorial-link:hover,
.editorial-link:focus-visible {
  color: var(--stepes-magenta-deep);
}

.editorial-link:hover svg,
.editorial-link:focus-visible svg {
  transform: translateX(3px);
}

.editorial-link:focus-visible,
.quick-topics a:focus-visible,
.topic-cell li a:focus-visible,
.resource-search__results a:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
  border-radius: 5px;
}

/* Hero */
.resource-hero {
  position: relative;
  min-height: 760px;
  display: flex;
  align-items: center;
  padding: 104px 0 100px;
  background:
    linear-gradient(180deg, #ffffff 0%, #fbfbfd 62%, #f7f8fb 100%);
}

.resource-hero__inner {
  position: relative;
  z-index: 2;
  text-align: center;
}

.resource-hero__glow {
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(2px);
}

.resource-hero__glow--one {
  width: 520px;
  height: 520px;
  left: -260px;
  top: -220px;
  background: radial-gradient(circle, rgba(193, 29, 99, 0.08), rgba(193, 29, 99, 0));
}

.resource-hero__glow--two {
  width: 460px;
  height: 460px;
  right: -210px;
  bottom: -230px;
  background: radial-gradient(circle, rgba(167, 25, 84, 0.07), rgba(167, 25, 84, 0));
}

.hero-lead {
  max-width: 780px;
  margin: 0 auto;
  color: var(--ink-soft);
  font-size: 18px;
  line-height: 1.68;
}

.hero-support {
  max-width: 760px;
  margin: 12px auto 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.68;
}

.resource-search {
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr) 52px;
  align-items: center;
  width: min(100%, 820px);
  min-height: 72px;
  margin: 38px auto 0;
  padding: 9px 10px 9px 22px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: #ffffff;
  box-shadow: var(--shadow-soft);
}

.resource-search:focus-within {
  border-color: rgba(193, 29, 99, 0.55);
  box-shadow:
    0 0 0 5px var(--focus),
    var(--shadow-soft);
}

.resource-search__icon {
  display: flex;
  color: #98a2b3;
}

.resource-search__icon svg {
  width: 23px;
  height: 23px;
}

.resource-search input {
  width: 100%;
  min-width: 0;
  height: 52px;
  border: 0;
  outline: 0;
  padding: 0 16px;
  color: var(--ink);
  background: transparent;
  font-size: 16px;
}

.resource-search input::placeholder {
  color: #8b95a7;
  opacity: 1;
}

.resource-search > button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 999px;
  background: var(--stepes-magenta);
  color: #ffffff;
  cursor: pointer;
  transition:
    background 180ms ease,
    transform 180ms ease;
}

.resource-search > button:hover {
  background: var(--stepes-magenta-dark);
  transform: translateX(1px);
}

.resource-search > button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.resource-search > button svg {
  width: 20px;
  height: 20px;
}

.resource-search__results {
  position: absolute;
  top: calc(100% + 10px);
  left: 14px;
  right: 14px;
  z-index: 10;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(16, 24, 40, 0.16);
  text-align: left;
}

.resource-search__results a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 70px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
}

.resource-search__results a:last-child {
  border-bottom: 0;
}

.resource-search__results a:hover {
  background: #fbfbfd;
}

.resource-search__results span {
  min-width: 0;
}

.resource-search__results small {
  display: block;
  margin-bottom: 3px;
  color: var(--stepes-magenta-dark);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.resource-search__results strong {
  display: block;
  overflow: hidden;
  color: var(--ink);
  font-size: 15px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.resource-search__results svg {
  flex: 0 0 auto;
  width: 18px;
  color: var(--stepes-magenta-dark);
}

.resource-search__empty {
  padding: 20px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.quick-topics {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  max-width: 1000px;
  margin: 27px auto 0;
}

.quick-topics a {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.quick-topics a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 7px;
  height: 1px;
  background: var(--stepes-magenta);
  opacity: 0;
  transform: scaleX(0.7);
  transform-origin: left;
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.quick-topics a:hover {
  color: var(--stepes-magenta-dark);
}

.quick-topics a:hover::after,
.quick-topics a:focus-visible::after {
  opacity: 1;
  transform: scaleX(1);
}

/* Featured */
.featured-section {
  padding: 96px 0;
  background: #ffffff;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 46px;
}

.section-heading h2 {
  margin: 0 0 18px;
}

.section-heading > p:last-child {
  max-width: 760px;
  margin-bottom: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.featured-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(390px, 0.82fr);
  gap: 48px;
  align-items: stretch;
}

.flagship-feature {
  position: relative;
  min-height: 640px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 34px;
  border: 1px solid #efd7e2;
  border-radius: 30px;
  background:
    radial-gradient(circle at 94% 4%, rgba(193, 29, 99, 0.08), transparent 27%),
    linear-gradient(145deg, #ffffff 0%, #fdf5f8 100%);
}

.flagship-feature__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--stepes-magenta-deep);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.flagship-feature__visual {
  width: 100%;
  margin: 22px 0 24px;
  padding: 4px 0 2px;
}

.workflow-illustration {
  display: block;
  width: 100%;
  height: auto;
}

.workflow-illustration-mobile {
  display: none;
}

.flagship-feature__body {
  position: relative;
  z-index: 2;
  max-width: 620px;
  margin-top: auto;
}

.flagship-feature h3 {
  max-width: 600px;
  margin: 0 0 18px;
  font-size: 30px;
  line-height: 1.18;
  letter-spacing: -0.028em;
}

.flagship-feature__body > p:not(.eyebrow) {
  max-width: 590px;
  margin-bottom: 20px;
  color: var(--ink-soft);
  font-size: 18px;
  line-height: 1.66;
}

.featured-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.featured-row {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 0 24px;
  border-bottom: 1px solid var(--border);
}

.featured-row h3 {
  margin: 12px 0 12px;
  font-size: 22px;
}

.featured-row__content > p:last-child {
  margin-bottom: 15px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.62;
}

/* Topic hub */
.topic-section {
  padding: 96px 0 100px;
  background: var(--surface-soft);
}

.topic-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(480px, 1.1fr);
  gap: 88px;
  align-items: end;
  margin-bottom: 48px;
}

.topic-heading h2 {
  max-width: 520px;
  margin: 0;
}

.topic-heading > p {
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: var(--border);
}

.topic-cell {
  display: flex;
  min-height: 410px;
  flex-direction: column;
  padding: 34px;
  background: #ffffff;
}

.topic-cell--third {
  grid-column: span 2;
}

.topic-cell--half {
  grid-column: span 3;
  min-height: 370px;
}

.topic-cell h3 {
  margin: 0 0 14px;
}

.topic-cell__description {
  margin-bottom: 20px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.62;
}

.topic-cell ul {
  display: grid;
  gap: 0;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--border);
}

.topic-cell li {
  border-bottom: 1px solid var(--border);
}

.topic-cell li a {
  display: flex;
  align-items: center;
  min-height: 45px;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 180ms ease,
    padding-left 180ms ease;
}

.topic-cell li a:hover {
  padding-left: 4px;
  color: var(--stepes-magenta-dark);
}

.topic-cell > .editorial-link {
  margin-top: auto;
}

.topic-section__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  margin-top: 30px;
  padding: 0 4px;
}

.topic-section__footer p {
  max-width: 760px;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}



/* Tools and reference */
.tools-section {
  padding: 96px 0 100px;
  background: #ffffff;
}

.split-section-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(500px, 1.18fr);
  gap: 88px;
  align-items: end;
  margin-bottom: 48px;
}

.split-section-heading h2 {
  max-width: 520px;
  margin: 0;
}

.split-section-heading > p {
  max-width: 690px;
  margin: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.tools-directory {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: #ffffff;
}

.tool-group {
  min-width: 0;
  padding: 32px 32px 10px;
  border-right: 1px solid var(--border);
}

.tool-group:last-child {
  border-right: 0;
}

.tool-group__heading {
  min-height: 104px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--border);
}

.tool-group__heading h3 {
  margin: 12px 0 8px;
  font-size: 22px;
}

.tool-group__heading > p:not(.eyebrow) {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.58;
}

.tool-group__items {
  display: flex;
  flex-direction: column;
}

.tool-item {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0 16px;
  min-height: 218px;
  padding: 27px 0 25px;
  border-bottom: 1px solid var(--border);
}

.tool-item:last-child {
  border-bottom: 0;
}

.tool-icon {
  grid-column: 1;
  width: 26px;
  height: 26px;
  margin-top: 1px;
  color: var(--ink-soft);
  transition: color 180ms ease, transform 180ms ease;
}

.tool-item:hover .tool-icon {
  color: var(--stepes-magenta-dark);
  transform: translateY(-2px);
}

.tool-item__content {
  grid-column: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.tool-item h3 {
  margin: 0 0 9px;
  font-size: 20px;
  line-height: 1.28;
}

.tool-item p {
  margin-bottom: 14px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}

.tool-item .editorial-link {
  align-self: flex-start;
  margin-top: auto;
}

/* Latest insights */
.latest-section {
  padding: 96px 0 100px;
  background: #101828;
  color: #ffffff;
}

.latest-section h2,
.latest-section h3 {
  color: #ffffff;
}

.latest-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(500px, 1.12fr);
  gap: 88px;
  align-items: end;
}

.latest-heading h2 {
  max-width: 560px;
  margin: 0;
}

.latest-heading > p {
  max-width: 690px;
  margin: 0;
  color: #cbd5e1;
  font-size: 18px;
  line-height: 1.66;
}

.latest-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0 28px;
  margin: 38px 0 42px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.latest-filters button {
  position: relative;
  min-height: 48px;
  padding: 0 0 14px;
  border: 0;
  background: transparent;
  color: #98a2b3;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.latest-filters button::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--stepes-magenta);
  opacity: 0;
  transform: scaleX(0.65);
  transform-origin: left;
  transition: opacity 180ms ease, transform 180ms ease;
}

.latest-filters button:hover,
.latest-filters button[aria-pressed="true"] {
  color: #ffffff;
}

.latest-filters button[aria-pressed="true"]::after {
  opacity: 1;
  transform: scaleX(1);
}

.latest-filters button:focus-visible {
  outline: 3px solid rgba(244, 183, 208, 0.3);
  outline-offset: 4px;
  border-radius: 4px;
}

.latest-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(440px, 0.98fr);
  gap: 54px;
  align-items: stretch;
}

.latest-layout--single {
  grid-template-columns: minmax(0, 1fr);
}

.insight-feature {
  display: flex;
  min-height: 520px;
  flex-direction: column;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  background:
    radial-gradient(circle at 92% 12%, rgba(193, 29, 99, 0.13), transparent 34%),
    linear-gradient(145deg, #1b2639 0%, #172235 100%);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.16);
  color: #ffffff;
}

.latest-layout--single .insight-feature {
  min-height: 430px;
}

.insight-feature h3 {
  max-width: 690px;
  margin: 24px 0 18px;
  color: #ffffff;
  font-size: 32px;
  line-height: 1.16;
  letter-spacing: -0.03em;
}

.insight-feature__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #f4b7d0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.insight-feature > p:not(.insight-feature__topics-label) {
  max-width: 690px;
  margin-bottom: 22px;
  color: #cbd5e1;
  font-size: 18px;
  line-height: 1.66;
}

.insight-feature__topics-label {
  margin: 2px 0 0;
  color: #f4b7d0;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.insight-feature__topics {
  display: flex;
  flex-direction: column;
  margin: 12px 0 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.insight-feature__topics span {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: 11px 12px 11px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}

.insight-feature__topics span:last-child {
  border-bottom: 0;
}

.insight-feature__topics span::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 50%;
  width: 8px;
  height: 8px;
  border: 2px solid #f4b7d0;
  border-radius: 50%;
  transform: translateY(-50%);
}

.insight-feature__context {
  margin: 0 0 20px;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.055);
  color: #b8c2d1;
  font-size: 14px;
  line-height: 1.58;
}

.insight-feature .editorial-link {
  align-self: flex-start;
  margin-top: 0;
  color: #f4b7d0;
}

.latest-list {
  border-top: 1px solid rgba(255, 255, 255, 0.17);
}

.latest-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(110px, auto);
  gap: 28px;
  align-items: center;
  min-height: 116px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
}

.latest-row__content {
  min-width: 0;
}

.latest-row .eyebrow {
  color: #f4b7d0;
}

.latest-row h3 {
  margin: 9px 0 8px;
  font-size: 20px;
  line-height: 1.3;
}

.latest-row p:not(.eyebrow) {
  margin: 0;
  color: #aeb8c7;
  font-size: 14px;
  line-height: 1.55;
}

.latest-row .editorial-link,
.latest-section__footer .editorial-link {
  flex: 0 0 auto;
  justify-self: end;
  color: #f4b7d0;
}

.latest-section__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.latest-section__footer p {
  max-width: 760px;
  margin: 0;
  color: #98a2b3;
  font-size: 15px;
  line-height: 1.6;
}

/* Customer stories */
.stories-section {
  padding: 96px 0 100px;
  background: #ffffff;
}

.stories-heading {
  max-width: 830px;
  margin: 0 auto 48px;
  text-align: center;
}

.stories-heading h2 {
  margin: 0 0 18px;
}

.stories-heading > p:last-child {
  margin-bottom: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.stories-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(430px, 0.92fr);
  gap: 48px;
  align-items: start;
}

.story-feature {
  display: flex;
  min-height: 480px;
  flex-direction: column;
  padding: 40px;
  border: 1px solid #efd7e2;
  border-radius: 30px;
  background: linear-gradient(145deg, #ffffff 0%, #fdf5f8 100%);
}

.story-feature h3 {
  max-width: 650px;
  margin: 18px 0 18px;
  font-size: 30px;
  line-height: 1.18;
  letter-spacing: -0.028em;
}

.story-feature > p:not(.eyebrow):not(.story-path__label) {
  max-width: 680px;
  margin-bottom: 24px;
  color: var(--ink-soft);
  font-size: 18px;
  line-height: 1.66;
}

.story-path__label {
  margin: 3px 0 0;
  color: var(--stepes-magenta-dark);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.story-path {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 12px 0 26px;
  border-top: 1px solid rgba(193, 29, 99, 0.18);
  border-bottom: 1px solid rgba(193, 29, 99, 0.18);
}

.story-path span {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 76px;
  padding: 14px 18px;
  border-right: 1px solid rgba(193, 29, 99, 0.18);
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.story-path span:first-child {
  padding-left: 0;
}

.story-path span:last-child {
  padding-right: 0;
  border-right: 0;
}

.story-path span:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -5px;
  width: 9px;
  height: 9px;
  border-top: 2px solid var(--stepes-magenta);
  border-right: 2px solid var(--stepes-magenta);
  background: #fdf5f8;
  transform: translateY(-50%) rotate(45deg);
}

.story-feature__note {
  margin: 0 0 20px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.76);
  color: var(--muted);
  font-size: 14px;
  line-height: 1.58;
}

.story-feature .editorial-link {
  align-self: flex-start;
  margin-top: 0;
}

.story-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.story-row {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 0 24px;
  border-bottom: 1px solid var(--border);
}

.story-row h3 {
  margin: 12px 0 12px;
  font-size: 22px;
}

.story-row p:not(.eyebrow) {
  margin-bottom: 15px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.62;
}

.stories-section__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  margin-top: 30px;
  padding: 0 4px;
}

.stories-section__footer p {
  max-width: 760px;
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
}



/* Browse by format */
.formats-section {
  padding: 96px 0 100px;
  background: var(--surface-soft);
}

.formats-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 88px;
  align-items: start;
}

.formats-intro {
  max-width: 470px;
}

.formats-intro h2 {
  margin: 0 0 18px;
}

.formats-intro > p:not(.eyebrow):not(.formats-intro__note) {
  margin-bottom: 24px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.formats-intro__note {
  margin: 0;
  padding-top: 22px;
  border-top: 1px solid var(--border);
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.62;
}

.format-directory {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: var(--border);
  gap: 1px;
}

.format-row {
  display: flex;
  min-height: 260px;
  flex-direction: column;
  padding: 30px 32px 26px;
  background: #ffffff;
}

.format-row h3 {
  margin: 0 0 11px;
  font-size: 22px;
}

.format-row__body > p:not(.eyebrow) {
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.62;
}

.format-row .editorial-link {
  align-self: flex-start;
  margin-top: auto;
}

/* FAQ */
.faq-section {
  padding: 96px 0 100px;
  background: #ffffff;
}

.faq-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.74fr) minmax(0, 1.26fr);
  gap: 88px;
  align-items: start;
}

.faq-intro {
  max-width: 470px;
}

.faq-intro h2 {
  margin: 0 0 18px;
}

.faq-intro > p:not(.eyebrow) {
  margin-bottom: 24px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.66;
}

.faq-list {
  border-top: 1px solid var(--border);
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-item h3 {
  margin: 0;
}

.faq-toggle {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px;
  gap: 24px;
  align-items: center;
  width: 100%;
  min-height: 90px;
  padding: 20px 2px;
  border: 0;
  background: transparent;
  color: var(--ink);
  text-align: left;
  cursor: pointer;
}

.faq-toggle > span:first-child {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.012em;
}

.faq-toggle:hover > span:first-child,
.faq-toggle[aria-expanded="true"] > span:first-child {
  color: var(--stepes-magenta-dark);
}

.faq-toggle:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 5px;
  border-radius: 6px;
}

.faq-toggle__icon {
  position: relative;
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--stepes-magenta-dark);
  transition:
    border-color 180ms ease,
    background 180ms ease;
}

.faq-toggle__icon::before,
.faq-toggle__icon::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 1.5px;
  border-radius: 999px;
  background: currentColor;
  transition: transform 180ms ease;
}

.faq-toggle__icon::after {
  transform: rotate(90deg);
}

.faq-toggle[aria-expanded="true"] .faq-toggle__icon {
  border-color: rgba(193, 29, 99, 0.22);
  background: var(--stepes-blush);
}

.faq-toggle[aria-expanded="true"] .faq-toggle__icon::after {
  transform: rotate(0deg);
}

.faq-answer {
  max-width: 760px;
  padding: 0 58px 27px 2px;
}

.faq-answer p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
}

/* Final resource CTA */
.resource-final-cta {
  padding: 0 0 100px;
  background: #ffffff;
}

.resource-final-cta__panel {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(330px, 0.82fr);
  gap: 64px;
  overflow: hidden;
  padding: 54px 58px;
  border: 1px solid #efd7e2;
  border-radius: 30px;
  background:
    radial-gradient(circle at 90% 0%, rgba(193, 29, 99, 0.09), transparent 33%),
    linear-gradient(135deg, #fffafb 0%, #fdf2f7 100%);
}

.resource-final-cta__copy h2 {
  max-width: 720px;
  margin: 15px 0 18px;
}

.resource-final-cta__copy > p:not(.eyebrow) {
  max-width: 730px;
  margin-bottom: 28px;
  color: var(--ink-soft);
  font-size: 18px;
  line-height: 1.66;
}

.resource-final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 24px;
}

.cta-primary {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 22px;
  border-radius: 999px;
  background: var(--stepes-magenta);
  color: #ffffff !important;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(193, 29, 99, 0.18);
  transition:
    background 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.cta-primary svg {
  width: 18px;
  height: 18px;
  transition: transform 180ms ease;
}

.cta-primary:hover {
  background: var(--stepes-magenta-dark);
  transform: translateY(-1px);
  box-shadow: 0 15px 34px rgba(193, 29, 99, 0.22);
}

.cta-primary:hover svg {
  transform: translateX(3px);
}

.cta-primary:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 4px;
}

.resource-final-cta__aside {
  align-self: stretch;
  padding-left: 48px;
  border-left: 1px solid rgba(122, 21, 66, 0.16);
}

.resource-final-cta__aside > p:not(.eyebrow) {
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.62;
}

.cta-scope {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
  border-top: 1px solid rgba(122, 21, 66, 0.14);
}

.cta-scope span {
  min-height: 54px;
  display: flex;
  align-items: center;
  padding: 12px 10px 12px 0;
  border-bottom: 1px solid rgba(122, 21, 66, 0.14);
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 600;
}

.cta-scope span:nth-child(odd) {
  border-right: 1px solid rgba(122, 21, 66, 0.14);
}

.cta-scope span:nth-child(even) {
  padding-left: 18px;
}

@media (max-width: 1199px) {
  .resource-center .shell {
    padding-left: 40px;
    padding-right: 40px;
  }

  .featured-layout {
    gap: 36px;
  }

  .flagship-feature {
    padding: 30px;
  }


  .topic-cell {
    padding: 30px;
  }
}

@media (max-width: 1023px) {
  .resource-center .shell {
    padding-left: 24px;
    padding-right: 24px;
  }

  .resource-center h1 {
    font-size: 42px;
  }

  .resource-center h2 {
    font-size: 32px;
  }

  .resource-center h3 {
    font-size: 22px;
  }

  .resource-hero {
    min-height: 0;
    padding: 92px 0 86px;
  }

  .featured-layout {
    grid-template-columns: 1fr;
  }

  .flagship-feature {
    min-height: 560px;
  }

  .featured-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 0;
    border-left: 1px solid var(--border);
  }

  .featured-row {
    min-height: 360px;
    padding: 28px 24px;
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }

  .topic-heading {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .topic-heading > p {
    max-width: 760px;
  }

  .topic-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .topic-cell--third,
  .topic-cell--half {
    grid-column: span 1;
  }

  .topic-cell:last-child {
    grid-column: span 2;
    min-height: 320px;
  }
}

@media (max-width: 767px) {
  .resource-center .shell {
    padding-left: 20px;
    padding-right: 20px;
  }

  .resource-center h1 {
    font-size: 38px;
    line-height: 1.1;
  }

  .resource-center h2 {
    font-size: 30px;
  }

  .resource-center h3 {
    font-size: 20px;
  }

  .resource-hero {
    padding: 72px 0 68px;
  }

  .resource-hero h1 {
    margin-top: 15px;
    margin-bottom: 20px;
  }

  .hero-lead,
  .hero-support {
    font-size: 17px;
    line-height: 1.62;
  }

  .resource-search {
    grid-template-columns: 22px minmax(0, 1fr) 48px;
    min-height: 66px;
    margin-top: 30px;
    padding: 8px 8px 8px 18px;
  }

  .resource-search input {
    height: 48px;
    padding: 0 11px;
    font-size: 15px;
  }

  .resource-search > button {
    width: 48px;
    height: 48px;
  }

  .resource-search__results {
    left: 0;
    right: 0;
  }

  .quick-topics {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2px;
    margin-top: 22px;
  }

  .quick-topics a {
    justify-content: center;
  }

  .featured-section,
  .topic-section {
    padding: 68px 0;
  }

  .section-heading {
    margin-bottom: 34px;
  }

  .section-heading > p:last-child,
  .topic-heading > p {
    font-size: 17px;
  }

  .flagship-feature {
    min-height: 590px;
    padding: 26px 24px;
    border-radius: 24px;
  }

  .flagship-feature__meta {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }



  .flagship-feature h3 {
    font-size: 24px;
  }

  .flagship-feature__body > p:not(.eyebrow) {
    font-size: 17px;
  }

  .featured-list {
    grid-template-columns: 1fr;
    border-left: 0;
  }

  .featured-row {
    min-height: 0;
    padding: 26px 0 23px;
    border-right: 0;
  }

  .topic-heading {
    margin-bottom: 34px;
  }

  .topic-grid {
    grid-template-columns: 1fr;
    border-radius: 24px;
  }

  .topic-cell,
  .topic-cell:last-child {
    grid-column: span 1;
    min-height: 0;
    padding: 26px 24px;
  }

  .topic-cell ul {
    margin-bottom: 20px;
  }

  .topic-section__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
}

@media (max-width: 359px) {
  .resource-center h1 {
    font-size: 38px;
    letter-spacing: -0.032em;
  }

  .resource-search {
    grid-template-columns: 20px minmax(0, 1fr) 46px;
    padding-left: 14px;
  }

  .resource-search input {
    padding-left: 9px;
    padding-right: 6px;
  }

  .resource-search > button {
    width: 46px;
    height: 46px;
  }

  .flagship-feature {
    min-height: 620px;
  }


}



@media (max-width: 1199px) {
  .tool-group {
    padding-left: 28px;
    padding-right: 28px;
  }

  .latest-layout,
  .stories-layout {
    gap: 38px;
  }
}

@media (max-width: 1023px) {
  .split-section-heading,
  .latest-heading {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .split-section-heading > p,
  .latest-heading > p {
    max-width: 780px;
  }

  .tools-directory {
    grid-template-columns: 1fr;
  }

  .tool-group {
    display: grid;
    grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
    gap: 34px;
    padding: 30px;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .tool-group:last-child {
    border-bottom: 0;
  }

  .tool-group__heading {
    min-height: 0;
    padding: 0 28px 0 0;
    border-right: 1px solid var(--border);
    border-bottom: 0;
  }

  .tool-item {
    min-height: 0;
  }

  .latest-layout,
  .latest-layout--single,
  .stories-layout {
    grid-template-columns: 1fr;
  }

  .insight-feature,
  .latest-layout--single .insight-feature,
  .story-feature {
    min-height: 0;
  }

  .story-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 0;
    border-left: 1px solid var(--border);
  }

  .story-row {
    min-height: 350px;
    padding: 28px 24px;
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
}

@media (max-width: 767px) {
  .tools-section,
  .latest-section,
  .stories-section {
    padding: 68px 0;
  }

  .split-section-heading,
  .latest-heading,
  .stories-heading {
    margin-bottom: 34px;
  }

  .split-section-heading > p,
  .latest-heading > p,
  .stories-heading > p:last-child {
    font-size: 17px;
  }

  .tools-directory {
    border-radius: 24px;
  }

  .tool-group {
    display: block;
    padding: 26px 24px 8px;
  }

  .tool-group__heading {
    padding: 0 0 22px;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .tool-item {
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 0 14px;
    padding: 24px 0;
  }

  .latest-filters {
    gap: 0 22px;
    margin: 28px 0 32px;
  }

  .latest-filters button {
    min-height: 44px;
    font-size: 13px;
  }

  .insight-feature,
  .story-feature {
    padding: 28px 24px;
    border-radius: 24px;
  }

  .insight-feature h3,
  .story-feature h3 {
    font-size: 24px;
  }

  .insight-feature > p:not(.insight-feature__topics-label),
  .story-feature > p:not(.eyebrow):not(.story-path__label) {
    font-size: 17px;
  }

  .insight-feature__topics span {
    min-height: 52px;
  }

  .latest-row {
    grid-template-columns: 1fr;
    gap: 8px;
    align-items: start;
    min-height: 0;
    padding: 24px 0;
  }

  .latest-row .editorial-link,
  .latest-section__footer .editorial-link {
    justify-self: start;
  }

  .latest-section__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-top: 26px;
    padding-top: 22px;
  }

  .stories-heading {
    text-align: left;
  }

  .story-path {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .story-path span,
  .story-path span:first-child,
  .story-path span:last-child {
    min-height: 68px;
    padding: 12px 14px;
    border-right: 1px solid rgba(193, 29, 99, 0.18);
    border-bottom: 1px solid rgba(193, 29, 99, 0.18);
  }

  .story-path span:nth-child(2n) {
    border-right: 0;
  }

  .story-path span:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .story-path span::after {
    display: none;
  }

  .story-list {
    grid-template-columns: 1fr;
    border-left: 0;
  }

  .story-row {
    min-height: 0;
    padding: 26px 0 23px;
    border-right: 0;
  }

  .stories-section__footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
}

@media (max-width: 359px) {
  .latest-filters {
    gap: 0 16px;
  }

  .story-path {
    grid-template-columns: 1fr;
  }

  .story-path span,
  .story-path span:first-child,
  .story-path span:last-child,
  .story-path span:nth-child(2n),
  .story-path span:nth-last-child(-n + 2) {
    border-right: 0;
    border-bottom: 1px solid rgba(193, 29, 99, 0.2);
  }

  .story-path span:last-child {
    border-bottom: 0;
  }
}



@media (max-width: 1199px) {
  .formats-layout,
  .faq-layout {
    gap: 60px;
  }

  .resource-final-cta__panel {
    gap: 46px;
    padding: 48px;
  }

  .resource-final-cta__aside {
    padding-left: 38px;
  }
}

@media (max-width: 1023px) {
  .formats-layout,
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .formats-intro,
  .faq-intro {
    max-width: 790px;
  }

  .resource-final-cta__panel {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .resource-final-cta__aside {
    padding: 30px 0 0;
    border-top: 1px solid rgba(122, 21, 66, 0.16);
    border-left: 0;
  }
}

@media (max-width: 767px) {
  .formats-section,
  .faq-section {
    padding: 68px 0;
  }

  .formats-intro > p:not(.eyebrow):not(.formats-intro__note),
  .faq-intro > p:not(.eyebrow),
  .resource-final-cta__copy > p:not(.eyebrow) {
    font-size: 17px;
  }

  .format-directory {
    grid-template-columns: 1fr;
    border-radius: 24px;
  }

  .format-row {
    min-height: 0;
    padding: 26px 24px;
  }

  .faq-toggle {
    grid-template-columns: minmax(0, 1fr) 32px;
    gap: 18px;
    min-height: 82px;
    padding: 18px 0;
  }

  .faq-toggle > span:first-child {
    font-size: 18px;
  }

  .faq-answer {
    padding: 0 48px 24px 0;
  }

  .resource-final-cta {
    padding-bottom: 68px;
  }

  .resource-final-cta__panel {
    padding: 34px 24px;
    border-radius: 24px;
  }

  .resource-final-cta__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .cta-primary {
    width: 100%;
  }

  .resource-final-cta__actions .editorial-link {
    align-self: flex-start;
  }
}

@media (max-width: 359px) {
  .cta-scope {
    grid-template-columns: 1fr;
  }

  .cta-scope span,
  .cta-scope span:nth-child(odd),
  .cta-scope span:nth-child(even) {
    padding-left: 0;
    border-right: 0;
  }
}



@media (max-width: 899px) {
  .featured-list,
  .story-list {
    grid-template-columns: 1fr;
    border-left: 0;
  }

  .featured-row,
  .story-row {
    min-height: 0;
    padding-left: 0;
    padding-right: 0;
    border-top: 0;
    border-right: 0;
  }
}

@media (max-width: 767px) {
  .flagship-feature__visual {
    margin: 20px 0 22px;
    padding: 0;
  }

  .workflow-illustration {
    display: none;
  }

  .workflow-illustration-mobile {
    display: grid;
    border-top: 1px solid rgba(193, 29, 99, 0.18);
    border-bottom: 1px solid rgba(193, 29, 99, 0.18);
  }

  .workflow-mobile-step {
    position: relative;
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 12px;
    align-items: center;
    min-height: 61px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(193, 29, 99, 0.15);
  }

  .workflow-mobile-step:last-child {
    border-bottom: 0;
  }

  .workflow-mobile-step__marker {
    width: 10px;
    height: 10px;
    border: 2px solid var(--stepes-magenta);
    border-radius: 50%;
    background: #ffffff;
  }

  .workflow-mobile-step:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 38px;
    bottom: -13px;
    width: 1px;
    background: rgba(193, 29, 99, 0.25);
  }

  .workflow-mobile-step strong,
  .workflow-mobile-step small {
    display: block;
  }

  .workflow-mobile-step strong {
    color: var(--ink-soft);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
  }

  .workflow-mobile-step small {
    margin-top: 3px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
  }
}


@media (max-width: 767px) {
  .resource-hero__glow {
    display: none;
  }

  .resource-search__results a {
    min-height: 74px;
    padding: 14px 15px;
  }

  .resource-search__results strong {
    white-space: normal;
    line-height: 1.35;
  }

  .topic-cell li a {
    min-height: 48px;
    padding: 10px 0;
    line-height: 1.4;
  }

  .insight-feature__meta {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }

  .latest-filters {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 18px;
  }

  .latest-filters button {
    min-height: 56px;
    padding: 12px 0 13px;
    text-align: left;
    line-height: 1.35;
  }

  .latest-section__footer p,
  .stories-section__footer p,
  .topic-section__footer p {
    max-width: 100%;
  }

  .format-row .editorial-link,
  .story-row .editorial-link,
  .featured-row .editorial-link {
    align-self: flex-start;
  }
}

@media (max-width: 479px) {
  .cta-scope {
    grid-template-columns: 1fr;
  }

  .cta-scope span,
  .cta-scope span:nth-child(odd),
  .cta-scope span:nth-child(even) {
    padding-left: 0;
    border-right: 0;
  }
}


@media (max-width: 359px) {
  .latest-filters {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .resource-center {
    scroll-behavior: auto;
  }

  .resource-center *,
  .resource-center *::before,
  .resource-center *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

`;

const quickTopics = [
  {
    label: "AI Translation Insights",
    url: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    label: "Translation Quality & Governance",
    url: "https://www.stepes.com/resources/translation-quality/",
  },
  {
    label: "Localization Guides",
    url: "https://www.stepes.com/resources/localization-guides/",
  },
  {
    label: "Translation Guides",
    url: "https://www.stepes.com/resources/translation-guides/",
  },
  {
    label: "Global Content Strategy",
    url: "https://www.stepes.com/resources/global-content-strategy/",
  },
];

const featuredResources = [
  {
    type: "Practical Guide",
    title: "How AI and Human Review Work Together in Enterprise Translation",
    description:
      "See how AI translation, translation memory, approved terminology, automated checks, and professional review can work together within a controlled multilingual workflow.",
    linkLabel: "Read the Guide",
    url: "https://www.stepes.com/resources/ai-human-review-enterprise-translation/",
  },
  {
    type: "Planning Resource",
    title: "Translation Cost Guide",
    description:
      "Understand how languages, content volume, subject-matter expertise, review, formatting, and turnaround requirements influence professional translation pricing.",
    linkLabel: "Explore Translation Costs",
    url: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    type: "Translation Guide",
    title: "Legal Translation Best Practices",
    description:
      "Learn how terminology control, confidentiality, qualified legal translators, structured review, and final quality assurance help protect meaning across legal content.",
    linkLabel: "Read the Legal Translation Guide",
    url: "https://www.stepes.com/resources/legal-translation-best-practices/",
  },
];

const topicGroups = [
  {
    title: "AI Translation Insights",
    description:
      "Explore AI translation technologies, model selection, quality validation, security, human review, governance, and practical enterprise deployment.",
    links: [
      {
        label: "AI Translation Quality Evaluation",
        url: "https://www.stepes.com/resources/ai-translation-quality-evaluation/",
      },
      {
        label: "Human-in-the-Loop Translation",
        url: "https://www.stepes.com/resources/human-in-the-loop-translation/",
      },
      {
        label: "Enterprise AI Translation Security",
        url: "https://www.stepes.com/resources/enterprise-ai-translation-security/",
      },
    ],
    cta: "Explore AI Translation Insights",
    url: "https://www.stepes.com/resources/ai-translation-insights/",
    spanClass: "topic-cell--third",
  },
  {
    title: "Translation Quality & Governance",
    description:
      "Learn how terminology, review models, linguistic quality assurance, standards, validation, and governance support reliable multilingual content.",
    links: [
      {
        label: "Terminology Governance",
        url: "https://www.stepes.com/resources/terminology-governance/",
      },
      {
        label: "Translation Quality Metrics",
        url: "https://www.stepes.com/resources/translation-quality-metrics/",
      },
      {
        label: "Review and Approval Models",
        url: "https://www.stepes.com/resources/translation-review-models/",
      },
    ],
    cta: "Explore Translation Quality",
    url: "https://www.stepes.com/resources/translation-quality/",
    spanClass: "topic-cell--third",
  },
  {
    title: "Localization Guides",
    description:
      "Practical guidance for localizing software, websites, digital products, multimedia, and customer experiences across international markets.",
    links: [
      {
        label: "Software Localization",
        url: "https://www.stepes.com/resources/software-localization-guide/",
      },
      {
        label: "Website Localization",
        url: "https://www.stepes.com/resources/website-localization-guide/",
      },
      {
        label: "Continuous Localization",
        url: "https://www.stepes.com/resources/continuous-localization-guide/",
      },
    ],
    cta: "Explore Localization Guides",
    url: "https://www.stepes.com/resources/localization-guides/",
    spanClass: "topic-cell--third",
  },
  {
    title: "Translation Guides",
    description:
      "Understand how to prepare, translate, review, and deliver documents, media, and specialized content for multilingual audiences.",
    links: [
      {
        label: "Legal Translation",
        url: "https://www.stepes.com/resources/legal-translation-guides/",
      },
      {
        label: "Financial Translation",
        url: "https://www.stepes.com/resources/financial-translation-guides/",
      },
      {
        label: "Technical Translation",
        url: "https://www.stepes.com/resources/technical-translation-guides/",
      },
    ],
    cta: "Explore Translation Guides",
    url: "https://www.stepes.com/resources/translation-guides/",
    spanClass: "topic-cell--half",
  },
  {
    title: "Global Content Strategy",
    description:
      "Strategic guidance for building scalable localization programs, aligning global teams, controlling costs, and managing multilingual content across the enterprise.",
    links: [
      {
        label: "Localization Operating Models",
        url: "https://www.stepes.com/resources/localization-operating-models/",
      },
      {
        label: "Global Content Governance",
        url: "https://www.stepes.com/resources/global-content-governance/",
      },
      {
        label: "Localization ROI",
        url: "https://www.stepes.com/resources/localization-roi/",
      },
    ],
    cta: "Explore Global Content Strategy",
    url: "https://www.stepes.com/resources/global-content-strategy/",
    spanClass: "topic-cell--half",
  },
];



const referenceTools = [
  {
    icon: "languages",
    title: "Languages",
    description:
      "Explore the languages and regional variants supported by Stepes for translation, localization, multimedia, and enterprise content programs.",
    linkLabel: "View Supported Languages",
    url: "https://www.stepes.com/translation-languages/",
  },
  {
    icon: "cost",
    title: "Translation Cost Guide",
    description:
      "Understand how language, volume, complexity, reuse, review, formatting, and turnaround requirements influence professional translation pricing.",
    linkLabel: "Explore Translation Costs",
    url: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    icon: "formats",
    title: "File Format Support",
    description:
      "Review common document, design, software, website, multimedia, and publishing formats used in translation and localization projects.",
    linkLabel: "View Supported File Formats",
    url: "https://www.stepes.com/resources/file-format-support/",
  },
  {
    icon: "glossary",
    title: "Translation Glossary",
    description:
      "Find clear definitions for translation, localization, AI, terminology, technology, and multilingual quality-management concepts.",
    linkLabel: "Browse the Translation Glossary",
    url: "https://www.stepes.com/resources/translation-glossary/",
  },
  {
    icon: "api",
    title: "API Documentation",
    description:
      "Access technical guidance for connecting translation requests and multilingual workflows with enterprise systems and digital platforms.",
    linkLabel: "View API Documentation",
    url: "https://www.stepes.com/api-documentation/",
  },
  {
    icon: "security",
    title: "Security & Compliance",
    description:
      "Learn how confidentiality, controlled access, data handling, quality systems, and documented workflows support enterprise translation.",
    linkLabel: "Explore Security & Compliance",
    url: "https://www.stepes.com/security-and-compliance/",
  },
];

const toolGroups = [
  {
    eyebrow: "Plan",
    label: "Project Planning",
    description:
      "Define languages, scope, budget, and delivery requirements before work begins.",
    items: [referenceTools[0], referenceTools[1]],
  },
  {
    eyebrow: "Prepare",
    label: "Content Preparation",
    description:
      "Prepare files and clarify terminology for smoother multilingual production.",
    items: [referenceTools[2], referenceTools[3]],
  },
  {
    eyebrow: "Connect & Protect",
    label: "Systems & Governance",
    description:
      "Connect workflows while protecting content, access, and quality requirements.",
    items: [referenceTools[4], referenceTools[5]],
  },
];

const latestFilters = [
  "All Resources",
  "AI & Automation",
  "Quality & Terminology",
  "Localization",
  "Translation",
  "Global Content Strategy",
];

const latestInsights = [
  {
    category: "AI & Automation",
    type: "Practical Guide",
    title: "How AI and Human Review Work Together in Enterprise Translation",
    description:
      "Learn how AI translation, translation memory, terminology management, automated checks, and professional review can work together according to content risk.",
    topics: ["AI workflow design", "Expert human review", "Enterprise quality"],
    linkLabel: "Read the Guide",
    url: "https://www.stepes.com/resources/ai-human-review-enterprise-translation/",
  },
  {
    category: "Translation",
    type: "Legal Translation Guide",
    title: "Legal Translation Best Practices",
    description:
      "Explore quality, confidentiality, terminology, formatting, review, and certification considerations for legal content.",
    topics: ["Legal terminology", "Confidentiality", "Structured review"],
    linkLabel: "Read the Guide",
    url: "https://www.stepes.com/resources/legal-translation-best-practices/",
  },
  {
    category: "Global Content Strategy",
    type: "Financial Reporting Guide",
    title: "CSRD and ESG Reporting Across Languages",
    description:
      "See how terminology governance, data consistency, cross-functional review, and multilingual controls support sustainability disclosures.",
    topics: ["ESG terminology", "Reporting consistency", "Global governance"],
    linkLabel: "Explore the Guide",
    url: "https://www.stepes.com/resources/csrd-esg-reporting-across-languages/",
  },
  {
    category: "Quality & Terminology",
    type: "Translation Quality Guide",
    title: "Ensuring Numeric Accuracy in Financial Translation",
    description:
      "Learn how automated validation and expert review help protect numbers, currencies, percentages, tables, and cross-references.",
    topics: ["Numeric validation", "Financial content", "Automated QA"],
    linkLabel: "Read the Guide",
    url: "https://www.stepes.com/resources/numeric-accuracy-financial-translation/",
  },
  {
    category: "Localization",
    type: "Case Study Collection",
    title: "Software Localization Case Studies and Success Stories",
    description:
      "Discover how continuous localization, in-context review, multilingual testing, and connected workflows support global digital products.",
    topics: ["Software localization", "In-context review", "Global releases"],
    linkLabel: "Explore Case Studies",
    url: "https://www.stepes.com/resources/software-localization-case-studies/",
  },
  {
    category: "Translation",
    type: "Planning Resource",
    title: "Translation Cost Guide",
    description:
      "Understand the pricing factors behind professional translation and compare workflows by content purpose, quality, and business risk.",
    topics: ["Project scope", "Workflow options", "Budget planning"],
    linkLabel: "Explore Translation Costs",
    url: "https://www.stepes.com/resources/translation-cost-guide/",
  },
];

const featuredStory = {
  type: "Featured Case Study Collection",
  title: "Software Localization for Global Product Growth",
  description:
    "Explore how continuous localization, in-context review, terminology management, functional testing, and connected development workflows can help global product teams reduce release friction and improve multilingual usability.",
  stages: [
    "Product content",
    "Localization workflow",
    "In-context review",
    "Global release",
  ],
  linkLabel: "Explore Software Localization Case Studies",
  url: "https://www.stepes.com/resources/software-localization-case-studies/",
};

const successStories = [
  {
    type: "Enterprise Software & SaaS",
    title: "Scalable Localization for Product and Engineering Teams",
    description:
      "See how multilingual workflows support interface strings, documentation, release updates, support content, and international user experiences.",
    linkLabel: "Explore Software and SaaS Stories",
    url: "https://www.stepes.com/resources/case-studies/software-saas/",
  },
  {
    type: "Regulated & Technical Products",
    title: "Quality-Controlled Content for Complex Global Products",
    description:
      "Explore approaches for technical documentation, software interfaces, labeling, training, and market-specific content where terminology and quality controls matter.",
    linkLabel: "Explore Regulated Content Stories",
    url: "https://www.stepes.com/resources/case-studies/regulated-technical-content/",
  },
  {
    type: "Global Digital Experiences",
    title: "Localization Across Websites, Apps, and Multimedia",
    description:
      "Learn how organizations adapt digital content and customer experiences for users in different languages, regions, and markets.",
    linkLabel: "Explore Digital Localization Stories",
    url: "https://www.stepes.com/resources/case-studies/global-digital-experiences/",
  },
];



const resourceFormats = [
  {
    title: "Guides",
    description:
      "Access detailed guidance for translation, localization, AI-enabled workflows, quality assurance, terminology, and global content operations.",
    linkLabel: "Browse Guides",
    url: "https://www.stepes.com/resources/guides/",
  },
  {
    title: "Case Studies",
    description:
      "Explore real-world multilingual challenges, project approaches, workflows, and business outcomes across industries and content types.",
    linkLabel: "Explore Case Studies",
    url: "https://www.stepes.com/resources/case-studies/",
  },
  {
    title: "White Papers",
    description:
      "Read deeper analysis of enterprise translation technology, multilingual quality, AI governance, and global content strategy.",
    linkLabel: "View White Papers",
    url: "https://www.stepes.com/resources/white-papers/",
  },
  {
    title: "Webinars",
    description:
      "Watch expert perspectives, practical discussions, and demonstrations covering translation, localization, AI, and multilingual operations.",
    linkLabel: "View Webinars",
    url: "https://www.stepes.com/resources/webinars/",
  },
  {
    title: "Customer Stories",
    description:
      "Learn how organizations approach multilingual growth, improve quality, and manage translation and localization programs with Stepes.",
    linkLabel: "Read Customer Stories",
    url: "https://www.stepes.com/resources/customer-stories/",
  },
  {
    title: "News & Press",
    description:
      "Follow Stepes announcements, technology updates, company news, media coverage, and developments across the localization industry.",
    linkLabel: "View News & Press",
    url: "https://www.stepes.com/news/",
  },
];

const resourceFaqs = [
  {
    question: "What can I find in the Stepes Resource Center?",
    answer:
      "The Resource Center brings together translation guides, localization guidance, AI translation insights, quality and terminology resources, global content strategy, case studies, white papers, webinars, customer stories, and practical reference tools. It is designed to help teams plan multilingual projects, compare workflows, and build stronger global content programs.",
  },
  {
    question: "What is the difference between translation and localization?",
    answer:
      "Translation primarily transfers written or spoken meaning from one language into another. Localization goes further by adapting software, websites, digital products, multimedia, and customer experiences for the linguistic, cultural, technical, and functional expectations of a specific market.",
  },
  {
    question: "What is AI-powered translation?",
    answer:
      "AI-powered translation uses artificial intelligence to support multilingual content production. Depending on the workflow, AI may generate a first-pass translation, apply approved terminology, reuse translation memory, automate routing, or help identify quality issues for professional translators and reviewers.",
  },
  {
    question: "When does AI translation need human review?",
    answer:
      "Professional human review is especially important for customer-facing, technical, legal, financial, regulated, safety-related, or brand-sensitive content. Reviewers validate meaning, terminology, tone, context, formatting, and final readiness according to the content's purpose and risk.",
  },
  {
    question: "How can translation quality be measured?",
    answer:
      "Translation quality can be evaluated through linguistic review, terminology compliance, automated checks, error classification, quality scoring, in-context review, functional testing, and stakeholder approval. The right framework should reflect the intended use and potential impact of the content.",
  },
  {
    question: "How do translation memory and terminology management improve quality?",
    answer:
      "Translation memory reuses previously approved language, while terminology management defines preferred translations for important product, technical, brand, and regulated terms. Together, they improve consistency, reduce repetitive work, and strengthen both AI-assisted and professional human translation workflows.",
  },
  {
    question: "How should we choose a translation or localization workflow?",
    answer:
      "The right workflow depends on the content type, audience, language combination, publication channel, confidentiality requirements, deadline, and potential impact of an error. Lower-risk content may use greater automation, while specialized or high-impact content generally requires stronger professional review and quality assurance.",
  },
  {
    question: "Does Stepes provide resources for specialized and regulated content?",
    answer:
      "Yes. Stepes resources address legal, financial, technical, medical, life sciences, software, manufacturing, sustainability, and other specialized content. The guidance covers terminology, confidentiality, numeric accuracy, document structure, quality assurance, and expert review.",
  },
];

const searchEntries = [
  ...quickTopics.map((item) => ({ ...item, type: "Topic Hub" })),
  {
    label: "AI Translation Insights: Quality, Governance, and Expert Human Validation",
    url: "https://www.stepes.com/resources/ai-translation-insights/",
    type: "Featured Resource",
  },
  ...featuredResources.map((item) => ({
    label: item.title,
    url: item.url,
    type: item.type,
  })),
  ...topicGroups.flatMap((topic) =>
    topic.links.map((item) => ({
      label: item.label,
      url: item.url,
      type: topic.title,
    }))
  ),
  ...referenceTools.map((item) => ({
    label: item.title,
    url: item.url,
    type: "Tool & Reference",
  })),
  ...latestInsights.map((item) => ({
    label: item.title,
    url: item.url,
    type: item.type,
  })),
  {
    label: featuredStory.title,
    url: featuredStory.url,
    type: featuredStory.type,
  },
  ...successStories.map((item) => ({
    label: item.title,
    url: item.url,
    type: item.type,
  })),
  ...resourceFormats.map((item) => ({
    label: item.title,
    url: item.url,
    type: "Resource Format",
  })),
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M11.5 5.5L16 10L11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="10.75" cy="10.75" r="6.75" stroke="currentColor" strokeWidth="1.7" />
      <path d="M15.75 15.75L20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}



function ToolIcon({ name }) {
  const common = {
    "aria-hidden": "true",
    className: "tool-icon",
    viewBox: "0 0 24 24",
    fill: "none",
  };

  if (name === "languages") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.8 12H20.2M12 3.5C14.2 5.8 15.3 8.6 15.3 12C15.3 15.4 14.2 18.2 12 20.5C9.8 18.2 8.7 15.4 8.7 12C8.7 8.6 9.8 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "cost") {
    return (
      <svg {...common}>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="7.2" y="6.2" width="9.6" height="4.2" rx="1" stroke="currentColor" strokeWidth="1.45" />
        <path d="M9.2 8.3H14.8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M7.8 13.7H9.4M12 13.7H13.6M16.2 13.7H16.3M7.8 17.2H9.4M12 17.2H13.6M16.2 17.2H16.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "formats") {
    return (
      <svg {...common}>
        <path d="M6 3.5H14L18 7.5V20.5H6V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 3.8V7.8H17.8M8.8 11H15.2M8.8 14H15.2M8.8 17H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "glossary") {
    return (
      <svg {...common}>
        <path d="M4.5 5.2C6.8 4.2 9 4.4 12 6V19C9 17.4 6.8 17.2 4.5 18.2V5.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M19.5 5.2C17.2 4.2 15 4.4 12 6V19C15 17.4 17.2 17.2 19.5 18.2V5.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 8H9.5M14.5 8H17M7 11H9.5M14.5 11H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "api") {
    return (
      <svg {...common}>
        <path d="M8.5 6L4.5 12L8.5 18M15.5 6L19.5 12L15.5 18M13.5 4L10.5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3.5L19 6.2V11.8C19 16.2 16.2 19.4 12 21C7.8 19.4 5 16.2 5 11.8V6.2L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.8 12L11 14.2L15.5 9.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



const flagshipWorkflowStages = [
  { title: "Source Content", detail: "Documents and files" },
  { title: "AI Translation", detail: "Context-aware first pass" },
  { title: "Quality Checks", detail: "Terminology and QA" },
  { title: "Expert Review", detail: "Professional validation" },
  { title: "Approved Output", detail: "Ready for delivery" },
];

function WorkflowIllustration() {
  return (
    <div className="flagship-feature__visual">
      <svg
        className="workflow-illustration"
        viewBox="0 0 1200 520"
        fill="none"
        role="img"
        aria-labelledby="workflow-illustration-title workflow-illustration-description"
      >
        <title id="workflow-illustration-title">
          AI Translation and Expert Human Validation Workflow
        </title>
        <desc id="workflow-illustration-description">
          Source content moves through AI translation, quality checks, expert review,
          and approved multilingual delivery.
        </desc>
        <defs>
          <filter id="resourceWorkflowShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="20"
              floodColor="#101828"
              floodOpacity="0.08"
            />
          </filter>
          <filter id="resourceWorkflowGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
        </defs>

        <ellipse
          cx="600"
          cy="250"
          rx="380"
          ry="178"
          fill="#FDF2F7"
          opacity="0.72"
          filter="url(#resourceWorkflowGlow)"
        />

        {[
          [232, 270],
          [464, 502],
          [696, 734],
          [928, 966],
        ].map(([start, end]) => (
          <g key={`${start}-${end}`} opacity="0.82">
            <path
              d={`M${start} 260H${end}`}
              stroke="#C11D63"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d={`M${end - 12} 251L${end} 260L${end - 12} 269`}
              stroke="#C11D63"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}

        <g filter="url(#resourceWorkflowShadow)">
          <rect x="40" y="110" width="192" height="300" rx="28" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
          <rect x="272" y="110" width="192" height="300" rx="28" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
          <rect x="504" y="110" width="192" height="300" rx="28" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
          <rect x="736" y="110" width="192" height="300" rx="28" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
          <rect x="968" y="110" width="192" height="300" rx="28" fill="#FFFFFF" stroke="#E4E7EC" strokeWidth="2" />
        </g>

        <g transform="translate(88 156)">
          <rect x="24" y="22" width="74" height="96" rx="14" fill="#FFFFFF" stroke="#344054" strokeWidth="2.2" />
          <rect x="14" y="12" width="74" height="96" rx="14" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
          <path d="M31 40H72" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" />
          <path d="M31 61H77M31 82H69" stroke="#D0D5DD" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(314 150)">
          <circle cx="54" cy="62" r="48" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.2" />
          <circle cx="54" cy="62" r="13" fill="#C11D63" />
          <circle cx="19" cy="39" r="6.5" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
          <circle cx="89" cy="39" r="6.5" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
          <circle cx="19" cy="85" r="6.5" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
          <circle cx="89" cy="85" r="6.5" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
          <path d="M25 43L43 55M83 43L65 55M25 81L43 69M83 81L65 69" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        <g transform="translate(548 150)">
          <path d="M52 12L94 28V68C94 99 75 122 52 134C29 122 10 99 10 68V28L52 12Z" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.2" />
          <path d="M31 70L46 85L75 52" stroke="#C11D63" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(774 150)">
          <circle cx="52" cy="48" r="28" fill="#FFFFFF" stroke="#344054" strokeWidth="2.2" />
          <path d="M16 117C20 82 35 67 57 67C79 67 94 82 98 117" stroke="#344054" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="96" cy="83" r="26" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.2" />
          <path d="M84 83L94 93L110 75" stroke="#C11D63" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(1010 154)">
          <rect x="10" y="24" width="86" height="94" rx="14" fill="#FFFFFF" stroke="#344054" strokeWidth="2.2" />
          <path d="M27 50H79" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" />
          <path d="M27 72H68M27 94H76" stroke="#D0D5DD" strokeWidth="4" strokeLinecap="round" />
          <circle cx="28" cy="134" r="8" fill="#C11D63" />
          <circle cx="54" cy="134" r="8" fill="#F4B7D0" />
          <circle cx="80" cy="134" r="8" fill="#D0D5DD" />
          <path d="M80 13L88 21L102 6" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {[136, 368, 600, 832, 1064].map((x) => (
          <path key={x} d={`M${x - 48} 320H${x + 48}`} stroke="#E4E7EC" strokeWidth="1.5" />
        ))}

        {flagshipWorkflowStages.map((stage, index) => {
          const x = 136 + index * 232;
          return (
            <g key={stage.title}>
              <text
                x={x}
                y="354"
                textAnchor="middle"
                fontFamily="Inter, Arial, sans-serif"
                fontSize="13"
                fontWeight="600"
                letterSpacing="1.6"
                fill="#475467"
              >
                {stage.title.toUpperCase()}
              </text>
              <text
                x={x}
                y="381"
                textAnchor="middle"
                fontFamily="Inter, Arial, sans-serif"
                fontSize="12"
                fontWeight="400"
                fill="#98A2B3"
              >
                {stage.detail}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="workflow-illustration-mobile" aria-label="AI translation workflow">
        {flagshipWorkflowStages.map((stage) => (
          <div className="workflow-mobile-step" key={stage.title}>
            <span className="workflow-mobile-step__marker" aria-hidden="true" />
            <span>
              <strong>{stage.title}</strong>
              <small>{stage.detail}</small>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function ResourceCenterWireframe() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [latestFilter, setLatestFilter] = useState("All Resources");
  const [openFaq, setOpenFaq] = useState(0);
  const searchRef = useRef(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return searchEntries
      .filter((entry) => entry.label.toLowerCase().includes(normalized))
      .slice(0, 6);
  }, [query]);

  const visibleInsights = useMemo(
    () =>
      latestFilter === "All Resources"
        ? latestInsights
        : latestInsights.filter((item) => item.category === latestFilter),
    [latestFilter]
  );

  const featuredInsight = visibleInsights[0];
  const secondaryInsights = visibleInsights.slice(1);

  const handleSearch = (event) => {
    event.preventDefault();
    if (results[0]) {
      window.location.assign(results[0].url);
      return;
    }
    window.location.assign(
      `https://www.stepes.com/resources/?search=${encodeURIComponent(query.trim())}`
    );
  };

  const handleBlur = (event) => {
    if (!searchRef.current?.contains(event.relatedTarget)) {
      setSearchOpen(false);
    }
  };

  return (
    <>
      <style>{wireframeStyles}</style>
      <main className="resource-center">
      <section className="resource-hero" aria-labelledby="resource-center-title">
        <div className="resource-hero__glow resource-hero__glow--one" aria-hidden="true" />
        <div className="resource-hero__glow resource-hero__glow--two" aria-hidden="true" />

        <div className="shell resource-hero__inner">
          <p className="eyebrow">Resources</p>
          <h1 id="resource-center-title">Translation and Localization Resource Center</h1>
          <p className="hero-lead">
            Explore practical guides, enterprise insights, case studies, and reference tools
            for translating, localizing, and managing multilingual content across global markets.
          </p>
          <p className="hero-support">
            Learn how AI-powered translation, expert human review, terminology management,
            quality assurance, and connected localization workflows can help your organization
            communicate more effectively across languages.
          </p>

          <form
            className="resource-search"
            onSubmit={handleSearch}
            onBlur={handleBlur}
            ref={searchRef}
            role="search"
          >
            <label className="sr-only" htmlFor="resource-search-input">
              Search Translation and Localization Resources
            </label>
            <span className="resource-search__icon">
              <SearchIcon />
            </span>
            <input
              id="resource-search-input"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setSearchOpen(false);
              }}
              placeholder="Search resources…"
              autoComplete="off"
            />
            <button type="submit" aria-label="Search resources">
              <ArrowIcon />
            </button>

            {searchOpen && query.trim() && (
              <div className="resource-search__results" aria-live="polite">
                {results.length ? (
                  results.map((result) => (
                    <a key={`${result.type}-${result.label}`} href={result.url}>
                      <span>
                        <small>{result.type}</small>
                        <strong>{result.label}</strong>
                      </span>
                      <ArrowIcon />
                    </a>
                  ))
                ) : (
                  <div className="resource-search__empty">
                    No direct match. Press Enter to search all Stepes resources.
                  </div>
                )}
              </div>
            )}
          </form>

          <nav className="quick-topics" aria-label="Popular resource topics">
            {quickTopics.map((topic) => (
              <a key={topic.label} href={topic.url}>
                {topic.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-resources-title">
        <div className="shell">
          <header className="section-heading">
            <h2 id="featured-resources-title">Featured Translation and Localization Resources</h2>
            <p>
              Explore selected guidance, practical tools, and expert perspectives addressing
              the quality, technology, and operational questions shaping multilingual content today.
            </p>
          </header>

          <div className="featured-layout">
            <article className="flagship-feature">
              <div className="flagship-feature__meta">
                <span>AI Translation Insights</span>
                <span>Enterprise Guide</span>
              </div>
              <WorkflowIllustration />
              <div className="flagship-feature__body">
                <h3>AI Translation Insights: Quality, Governance, and Expert Human Validation</h3>
                <p>
                  Understand where AI translation creates meaningful business value, where
                  professional judgment remains essential, and how enterprise teams can design
                  secure, quality-controlled workflows for different content risks.
                </p>
                <EditorialLink href="https://www.stepes.com/resources/ai-translation-insights/">
                  Explore AI Translation Insights
                </EditorialLink>
              </div>
            </article>

            <div className="featured-list">
              {featuredResources.map((resource) => (
                <article className="featured-row" key={resource.title}>
                  <div className="featured-row__content">
                    <p className="eyebrow">{resource.type}</p>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <EditorialLink href={resource.url}>{resource.linkLabel}</EditorialLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resource-topics" className="topic-section" aria-labelledby="resource-topics-title">
        <div className="shell">
          <header className="topic-heading">
            <div>
              <h2 id="resource-topics-title">Explore Resources by Topic</h2>
            </div>
            <p>
              Find practical guidance and expert perspectives organized around the technologies,
              processes, quality requirements, and strategies shaping translation and global
              content operations.
            </p>
          </header>

          <div className="topic-grid">
            {topicGroups.map((topic) => (
              <article
                className={`topic-cell ${topic.spanClass}`}
                key={topic.title}
              >
                <h3>{topic.title}</h3>
                <p className="topic-cell__description">{topic.description}</p>
                <ul>
                  {topic.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
                <EditorialLink href={topic.url}>{topic.cta}</EditorialLink>
              </article>
            ))}
          </div>

          <div className="topic-section__footer">
            <p>
              Continue with practical tools for defining languages, planning budgets, preparing
              content, connecting systems, and protecting multilingual workflows.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/#translation-tools">
              Explore Tools and Reference
            </EditorialLink>
          </div>
        </div>
      </section>

      <section id="translation-tools" className="tools-section" aria-labelledby="translation-tools-title">
        <div className="shell">
          <header className="split-section-heading">
            <div>
              <h2 id="translation-tools-title">Translation Tools and Reference</h2>
            </div>
            <p>
              Access practical information for planning translation projects, understanding
              terminology, evaluating file requirements, and integrating multilingual workflows.
            </p>
          </header>

          <div className="tools-directory">
            {toolGroups.map((group) => (
              <section className="tool-group" key={group.label}>
                <header className="tool-group__heading">
                  <p className="eyebrow">{group.eyebrow}</p>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                </header>
                <div className="tool-group__items">
                  {group.items.map((tool) => (
                    <article className="tool-item" key={tool.title}>
                      <ToolIcon name={tool.icon} />
                      <div className="tool-item__content">
                        <h3>{tool.title}</h3>
                        <p>{tool.description}</p>
                        <EditorialLink href={tool.url}>{tool.linkLabel}</EditorialLink>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="latest-insights" className="latest-section" aria-labelledby="latest-insights-title">
        <div className="shell">
          <header className="latest-heading">
            <div>
              <h2 id="latest-insights-title">Latest Translation and Localization Insights</h2>
            </div>
            <p>
              Read the latest Stepes perspectives on AI translation, multilingual quality,
              localization operations, terminology, technology, and global content strategy.
            </p>
          </header>

          <div className="latest-filters" role="group" aria-label="Filter latest resources">
            {latestFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                aria-pressed={latestFilter === filter}
                onClick={() => setLatestFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div
            className={`latest-layout ${
              secondaryInsights.length === 0 ? "latest-layout--single" : ""
            }`}
          >
            <article className="insight-feature">
              <div className="insight-feature__meta">
                <span>{featuredInsight.type}</span>
                <span>{featuredInsight.category}</span>
              </div>
              <h3>{featuredInsight.title}</h3>
              <p>{featuredInsight.description}</p>
              <p className="insight-feature__topics-label">Key Topics</p>
              <div className="insight-feature__topics" aria-label="Topics covered">
                {featuredInsight.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <p className="insight-feature__context">
                Use this resource to compare approaches, clarify review requirements, and plan
                a workflow that fits your content, audience, and business risk.
              </p>
              <EditorialLink href={featuredInsight.url}>
                {featuredInsight.linkLabel}
              </EditorialLink>
            </article>

            {secondaryInsights.length > 0 && (
              <div className="latest-list">
                {secondaryInsights.map((insight) => (
                  <article className="latest-row" key={insight.title}>
                    <div className="latest-row__content">
                      <p className="eyebrow">{insight.type}</p>
                      <h3>{insight.title}</h3>
                      <p>{insight.description}</p>
                    </div>
                    <EditorialLink href={insight.url}>{insight.linkLabel}</EditorialLink>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="latest-section__footer">
            <p>
              Continue your research through guides, case studies, white papers, webinars,
              customer stories, and company updates.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/#resource-formats">
              Browse Resources by Format
            </EditorialLink>
          </div>
        </div>
      </section>

      <section id="customer-stories" className="stories-section" aria-labelledby="success-stories-title">
        <div className="shell">
          <header className="stories-heading">
            <h2 id="success-stories-title">Translation and Localization Success Stories</h2>
            <p>
              See how organizations use Stepes to improve multilingual quality, accelerate
              delivery, support international growth, and manage complex global content workflows.
            </p>
          </header>

          <div className="stories-layout">
            <article className="story-feature">
              <p className="eyebrow">{featuredStory.type}</p>
              <h3>{featuredStory.title}</h3>
              <p>{featuredStory.description}</p>
              <p className="story-path__label">Localization Workflow Themes</p>
              <div className="story-path" aria-label="Localization workflow themes">
                {featuredStory.stages.map((stage) => (
                  <span key={stage}>{stage}</span>
                ))}
              </div>
              <p className="story-feature__note">
                Follow the localization journey from source content and connected workflows
                through in-context validation and multilingual release.
              </p>
              <EditorialLink href={featuredStory.url}>
                {featuredStory.linkLabel}
              </EditorialLink>
            </article>

            <div className="story-list">
              {successStories.map((story) => (
                <article className="story-row" key={story.title}>
                  <div>
                    <p className="eyebrow">{story.type}</p>
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                  </div>
                  <EditorialLink href={story.url}>{story.linkLabel}</EditorialLink>
                </article>
              ))}
            </div>
          </div>

          <div className="stories-section__footer">
            <p>
              Explore additional examples across industries, content types, and multilingual
              workflows.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/case-studies/">
              Explore All Case Studies
            </EditorialLink>
          </div>
        </div>
      </section>


      <section id="resource-formats" className="formats-section" aria-labelledby="resource-formats-title">
        <div className="shell formats-layout">
          <header className="formats-intro">
            <h2 id="resource-formats-title">Browse Resources by Format</h2>
            <p>
              Choose the resource format that best supports your research, planning, learning,
              or evaluation process.
            </p>
            <p className="formats-intro__note">
              Explore by topic when you are researching a specific challenge, or browse by
              format when you need a guide, customer example, deeper analysis, or expert discussion.
            </p>
          </header>

          <div className="format-directory">
            {resourceFormats.map((format) => (
              <article className="format-row" key={format.title}>
                <div className="format-row__body">
                  <h3>{format.title}</h3>
                  <p>{format.description}</p>
                </div>
                <EditorialLink href={format.url}>{format.linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resource-faqs" className="faq-section" aria-labelledby="resource-faq-title">
        <div className="shell faq-layout">
          <header className="faq-intro">
            <h2 id="resource-faq-title">Common Translation and Localization Questions</h2>
            <p>
              Find clear answers to common questions about translation, localization,
              AI-powered workflows, multilingual quality, and project planning.
            </p>
            <EditorialLink href="https://www.stepes.com/contact-us/">
              Ask Stepes a Question
            </EditorialLink>
          </header>

          <div className="faq-list">
            {resourceFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `resource-faq-answer-${index}`;

              return (
                <article className="faq-item" key={faq.question}>
                  <h3>
                    <button
                      className="faq-toggle"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={answerId}
                    role="region"
                    hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="resource-final-cta" aria-labelledby="resource-final-cta-title">
        <div className="shell">
          <div className="resource-final-cta__panel">
            <div className="resource-final-cta__copy">
              <p className="eyebrow">Plan Your Next Multilingual Program</p>
              <h2 id="resource-final-cta-title">Build a More Effective Global Content Program</h2>
              <p>
                Connect with Stepes to explore how AI-powered translation, expert human
                validation, terminology management, and enterprise workflow technology can
                support your multilingual content goals.
              </p>
              <div className="resource-final-cta__actions">
                <a className="cta-primary" href="https://www.stepes.com/contact-us/">
                  <span>Talk to Stepes</span>
                  <ArrowIcon />
                </a>
                <EditorialLink href="https://www.stepes.com/translation-services/">
                  Explore Translation Solutions
                </EditorialLink>
              </div>
            </div>

            <aside className="resource-final-cta__aside">
              <p className="eyebrow">Built Around Your Content</p>
              <div className="cta-scope" aria-label="Supported content programs">
                <span>Documents</span>
                <span>Software</span>
                <span>Websites</span>
                <span>Multimedia</span>
                <span>Specialized Content</span>
                <span>Ongoing Programs</span>
              </div>
              <p>
                Choose the right combination of automation, professional review, language
                assets, and quality controls for each content type and level of business risk.
              </p>
            </aside>
          </div>
        </div>
      </section>

      </main>
    </>
  );
}
