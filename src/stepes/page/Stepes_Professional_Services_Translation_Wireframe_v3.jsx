// Stepes Professional Services Translation Wireframe v3 — 5.6 / Wireframe Spec v1.6
const styles = `
:root {
  --stepes-magenta: #C11D63;
  --stepes-magenta-dark: #A71954;
  --stepes-burgundy: #7A1542;
  --stepes-blush: #FDF2F7;
  --stepes-pink-light: #F2A7C6;
  --ink: #121826;
  --ink-2: #2A3342;
  --muted: #5E6877;
  --line: #DDE2E8;
  --line-strong: #CED5DD;
  --surface: #F6F8FA;
  --surface-2: #EEF2F5;
  --dark: #171A20;
  --dark-2: #20242C;
  --white: #FFFFFF;
  --radius-lg: 30px;
  --radius-md: 22px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }

.stepes-page {
  width: 100%;
  overflow-x: hidden;
  background: var(--white);
  color: var(--ink);
  font-family: "Inter Tight", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.stepes-page a { color: inherit; }
.stepes-shell { width: min(100%, 1392px); margin: 0 auto; padding-inline: 56px; }
.stepes-section { padding-block: 96px; }
.stepes-section.dense { padding-block: 80px; }
.stepes-section.soft { background: var(--surface); }
.stepes-section.blush { background: var(--stepes-blush); }
.stepes-section.dark { background: var(--dark); color: var(--white); }
.stepes-section.dark-2 { background: var(--dark-2); color: var(--white); }

.eyebrow {
  margin: 0 0 16px;
  color: var(--stepes-magenta) !important;
  font-size: 11px !important;
  line-height: 1.35 !important;
  font-weight: 600 !important;
  letter-spacing: .12em !important;
  text-transform: uppercase;
}
.dark .eyebrow, .dark-2 .eyebrow, .final-cta .eyebrow { color: var(--stepes-pink-light) !important; }

h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -.025em; }
h1 { font-size: 48px; line-height: 1.04; margin-bottom: 24px; max-width: 760px; }
h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
h3 { font-size: 24px; line-height: 1.18; margin-bottom: 12px; }
p { font-size: 16px; line-height: 1.72; color: var(--muted); margin-bottom: 18px; }
.dark p, .dark-2 p, .final-cta p { color: #D5DAE2; }
.body-large { font-size: 18px; line-height: 1.68; }
.section-intro { max-width: 820px; }
.section-heading.center { text-align: center; margin-inline: auto; }
.section-heading.center .section-intro { margin-inline: auto; }

.btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.btn {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible, .editorial-link:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
.btn.primary, .btn.primary:visited, .btn.primary:hover, .btn.primary:active, .btn.primary:focus, .btn.primary:focus-visible {
  background: var(--stepes-magenta);
  color: #fff !important;
}
.btn.primary svg, .btn.primary span { color: #fff !important; stroke: #fff !important; fill: none; }
.btn.primary:hover { background: var(--stepes-magenta-dark); box-shadow: 0 10px 26px rgba(122,21,66,.18); }
.btn.secondary { background: #fff; border-color: var(--line-strong); color: var(--ink); }
.dark .btn.secondary, .final-cta .btn.secondary { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.28); color: #fff; }

.editorial-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--stepes-magenta);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}
.editorial-link .arrow { transition: transform .18s ease; }
.editorial-link:hover .arrow { transform: translateX(3px); }
.dark .editorial-link, .dark-2 .editorial-link { color: var(--stepes-pink-light); }

.hero { padding-block: 104px 82px; background: linear-gradient(180deg,#FAFBFC 0%,#FFFFFF 100%); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr); gap: 72px; align-items: center; }
.hero-copy { max-width: 760px; }
.hero-copy .body-large { max-width: 700px; }
.hero-art {
  min-height: 510px;
  border-radius: var(--radius-lg);
  background: #F4F6F8;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  padding: 28px;
  overflow: hidden;
}
.hero-art svg { width: 100%; height: auto; }
.hero-note { margin-top: 18px; font-size: 14px; line-height: 1.45; color: #7A8492; text-align: center; }

.proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
.proof-grid { display: grid; grid-template-columns: repeat(5,1fr); }
.proof-item { padding: 28px 26px; min-height: 116px; }
.proof-item + .proof-item { border-left: 1px solid var(--line); }
.proof-value { font-size: 20px; line-height: 1.2; font-weight: 600; color: var(--ink); margin-bottom: 7px; }
.proof-copy { margin: 0; font-size: 16px; line-height: 1.52; }

.overview-grid { display: grid; grid-template-columns: .84fr 1.16fr; gap: 86px; align-items: start; }
.overview-grid .sticky-heading { position: sticky; top: 32px; }
.benefit-list { border-top: 1px solid var(--line); }
.benefit-row { display: grid; grid-template-columns: 48px 1fr; gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--line); }
.icon-box { width: 44px; height: 44px; border-radius: 12px; background: var(--stepes-blush); display: grid; place-items: center; color: var(--stepes-magenta); }
.icon-box svg { width: 23px; height: 23px; }
.benefit-row h3 { font-size: 24px; margin-bottom: 8px; }
.benefit-row p { margin-bottom: 0; }

.sector-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
.sector-item { padding: 30px 36px 30px 0; border-bottom: 1px solid var(--line); }
.sector-item:nth-child(odd) { padding-right: 44px; }
.sector-item:nth-child(even) { border-left: 1px solid var(--line); padding-left: 44px; padding-right: 0; }
.sector-item h3 { font-size: 24px; }
.sector-item p { margin: 0; }
.hr-route { margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line); display:flex; gap:18px; align-items:center; justify-content:space-between; }
.hr-route p { margin:0; max-width:800px; }

.engagement-wrap { margin-top: 54px; }
.timeline { display: grid; grid-template-columns: repeat(7,1fr); position: relative; gap: 0; }
.timeline::before { content:""; position:absolute; left:7%; right:7%; top:22px; height:1px; background:rgba(255,255,255,.24); }
.timeline-step { position:relative; padding:0 14px; text-align:center; }
.timeline-node { width:44px; height:44px; border-radius:50%; display:grid; place-items:center; margin:0 auto 18px; background:#2B3039; border:1px solid rgba(255,255,255,.28); color:#fff; font-size:15px; font-weight:600; position:relative; z-index:1; }
.timeline-label { font-size:16px; line-height:1.32; font-weight:600; color:#fff; }
.engagement-detail { margin-top: 52px; display:grid; grid-template-columns: repeat(4,1fr); border-top:1px solid rgba(255,255,255,.17); }
.engagement-detail .item { padding:26px 26px 8px 0; }
.engagement-detail .item:not(:nth-child(4n+1)) { padding-left:26px; border-left:1px solid rgba(255,255,255,.13); }
.engagement-detail h3 { font-size:24px; margin-bottom:9px; }
.engagement-detail p { font-size:16px; line-height:1.62; margin-bottom:14px; }
.engagement-summary { margin-top: 36px; max-width: 860px; border-left: 3px solid var(--stepes-magenta); padding-left: 22px; }
.engagement-summary p { margin:0; }

.content-grid { margin-top:46px; display:grid; grid-template-columns: repeat(2,1fr); border-top:1px solid var(--line); }
.content-item { display:grid; grid-template-columns:52px 1fr; gap:18px; padding:28px 34px 28px 0; border-bottom:1px solid var(--line); }
.content-item:nth-child(even) { border-left:1px solid var(--line); padding-left:34px; padding-right:0; }
.content-item h3 { font-size:24px; }
.content-item p { margin:0; }
.content-item .icon-box { background:#F0F2F5; color:#394556; }

.deliverable-grid { display:grid; grid-template-columns:.92fr 1.08fr; gap:74px; align-items:center; }
.document-art { border:1px solid var(--line); border-radius:var(--radius-lg); background:#fff; padding:28px; min-height:520px; display:grid; place-items:center; box-shadow:0 18px 50px rgba(27,37,51,.06); }
.document-art svg { width:100%; height:auto; }
.format-list { margin-top:32px; border-top:1px solid var(--line); }
.format-row { display:grid; grid-template-columns:44px 1fr; gap:18px; padding:24px 0; border-bottom:1px solid var(--line); }
.format-row h3 { font-size:24px; margin-bottom:7px; }
.format-row p { margin:0; }
.link-cluster { display:flex; flex-wrap:wrap; gap:8px 22px; margin-top:22px; }

.expertise-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:80px; align-items:center; }
.expertise-formula { margin-top:30px; border:1px solid var(--line); border-radius:var(--radius-md); padding:24px 28px; background:#fff; display:flex; flex-wrap:wrap; gap:10px; align-items:center; }
.formula-chip { font-size:16px; font-weight:600; padding:9px 12px; border-radius:999px; background:#F1F3F5; color:#3E4857; }
.formula-plus { color:#9AA3AE; font-weight:600; }
.domain-list { display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--line); }
.domain-item { padding:24px 28px 24px 0; border-bottom:1px solid var(--line); font-size:16px; font-weight:600; }
.domain-item:nth-child(even) { border-left:1px solid var(--line); padding-left:28px; }

.terminology-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
.term-panel { background:#fff; border:1px solid #EACAD8; border-radius:var(--radius-lg); padding:34px; }
.term-columns { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
.term-column { padding:20px; border:1px solid var(--line); border-radius:18px; }
.term-column h3 { font-size:24px; }
.term-column ul { margin:0; padding:0; list-style:none; }
.term-column li { font-size:16px; line-height:1.5; color:var(--muted); padding:7px 0; border-bottom:1px solid #EEF1F4; }
.term-column li:last-child { border-bottom:0; }
.term-flow { margin-top:24px; display:flex; gap:8px; flex-wrap:wrap; align-items:center; }
.term-flow span { font-size:16px; font-weight:600; color:#4F5966; padding:8px 10px; border-radius:999px; background:#F4F6F8; }
.term-flow b { color:var(--stepes-magenta); font-weight:600; }

.workflow-grid { margin-top:50px; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid rgba(255,255,255,.18); border-bottom:1px solid rgba(255,255,255,.18); }
.workflow-column { padding:34px 34px 34px 0; }
.workflow-column + .workflow-column { border-left:1px solid rgba(255,255,255,.14); padding-left:34px; }
.workflow-column .mode { display:inline-block; margin-bottom:18px; font-size:11px; letter-spacing:.11em; text-transform:uppercase; font-weight:600; color:var(--stepes-pink-light); }
.workflow-column h3 { font-size:24px; }
.workflow-column ul { margin:18px 0 0; padding:0; list-style:none; }
.workflow-column li { position:relative; padding:7px 0 7px 18px; color:#D5DAE2; font-size:16px; line-height:1.5; }
.workflow-column li::before { content:""; position:absolute; left:0; top:18px; width:6px; height:6px; border-radius:50%; background:#88919E; }
.workflow-principle { margin-top:34px; max-width:900px; font-size:18px; line-height:1.6; color:#fff; }

.speed-grid { display:grid; grid-template-columns:1.05fr .95fr; gap:72px; align-items:start; }
.speed-list { border-top:1px solid var(--line); margin-top:32px; }
.speed-row { padding:22px 0; border-bottom:1px solid var(--line); }
.speed-row h3 { font-size:24px; margin-bottom:6px; }
.speed-row p { margin:0; }
.deadline-panel { border:1px solid var(--line); border-radius:var(--radius-lg); padding:30px; background:#fff; position:sticky; top:32px; }
.deadline-head { display:flex; justify-content:space-between; gap:16px; align-items:center; padding-bottom:18px; border-bottom:1px solid var(--line); }
.deadline-head strong { font-size:18px; }
.deadline-status { font-size:13px; font-weight:600; color:var(--stepes-magenta); padding:7px 10px; background:var(--stepes-blush); border-radius:999px; }
.deadline-events { margin-top:20px; }
.deadline-event { display:grid; grid-template-columns:14px 1fr; gap:14px; padding:12px 0; }
.deadline-dot { width:10px; height:10px; border-radius:50%; border:2px solid #929CAA; margin-top:7px; }
.deadline-event.active .deadline-dot { border-color:var(--stepes-magenta); background:var(--stepes-magenta); }
.deadline-event h4 { margin:0 0 4px; font-size:16px; font-weight:600; }
.deadline-event p { font-size:14px; margin:0; line-height:1.5; }

.security-grid { display:grid; grid-template-columns:.85fr 1.15fr; gap:80px; align-items:start; }
.security-points { border-top:1px solid var(--line); }
.security-point { display:grid; grid-template-columns:44px 1fr; gap:18px; padding:24px 0; border-bottom:1px solid var(--line); }
.security-point h3 { font-size:24px; margin-bottom:6px; }
.security-point p { margin:0; }
.security-examples { margin-top:28px; display:flex; flex-wrap:wrap; gap:8px; }
.security-examples span { padding:8px 11px; border-radius:999px; border:1px solid var(--line); background:#fff; font-size:16px; color:#566170; }

.review-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
.review-art { border:1px solid var(--line); border-radius:var(--radius-lg); background:#fff; padding:30px; }
.review-stack { display:grid; gap:12px; }
.review-card { display:grid; grid-template-columns:42px 1fr auto; gap:14px; align-items:center; border:1px solid var(--line); border-radius:16px; padding:15px 16px; }
.avatar { width:38px; height:38px; border-radius:50%; background:#EFF2F5; display:grid; place-items:center; font-weight:600; color:#556070; font-size:13px; }
.review-card strong { font-size:16px; display:block; margin-bottom:2px; }
.review-card span { font-size:14px; color:#7A8491; }
.review-state { font-size:12px !important; font-weight:600; color:var(--stepes-magenta) !important; background:var(--stepes-blush); padding:6px 8px; border-radius:999px; white-space:nowrap; }
.review-benefits { border-top:1px solid var(--line); margin-top:28px; }
.review-benefit { padding:18px 0; border-bottom:1px solid var(--line); }
.review-benefit strong { display:block; font-size:17px; margin-bottom:5px; }
.review-benefit p { margin:0; }

.scale-grid { margin-top:46px; display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.scale-item { padding:28px; }
.scale-item + .scale-item { border-left:1px solid var(--line); }
.scale-item .scale-label { font-size:11px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--stepes-magenta); margin-bottom:14px; }
.scale-item h3 { font-size:24px; }
.scale-item p { margin:0; }

.language-list { margin:34px auto 0; max-width:900px; display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }
.language-pill { padding:10px 14px; background:#fff; border:1px solid var(--line); border-radius:999px; font-size:16px; font-weight:600; color:#4A5563; }
.language-note { margin:28px auto 0; max-width:780px; text-align:center; }

.why-grid { margin-top:46px; display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid rgba(255,255,255,.16); }
.why-item { display:grid; grid-template-columns:44px 1fr; gap:18px; padding:26px 34px 26px 0; border-bottom:1px solid rgba(255,255,255,.16); }
.why-item:nth-child(even) { border-left:1px solid rgba(255,255,255,.14); padding-left:34px; padding-right:0; }
.why-item .icon-box { background:rgba(255,255,255,.08); color:var(--stepes-pink-light); }
.why-item h3 { font-size:24px; }
.why-item p { margin:0; }

.services-grid { margin-top:44px; display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--line); }
.service-row { padding:28px 34px 28px 0; border-bottom:1px solid var(--line); }
.service-row:nth-child(even) { border-left:1px solid var(--line); padding-left:34px; padding-right:0; }
.service-row h3 { font-size:24px; margin-bottom:8px; }
.service-row p { margin-bottom:12px; }

.industry-links { margin-top:34px; display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--line); border-left:1px solid var(--line); }
.industry-link { min-height:64px; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:18px 20px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); color:var(--ink); text-decoration:none; font-size:16px; font-weight:600; background:#fff; }
.industry-link:hover { color:var(--stepes-magenta); }

.faq-panel { margin-top:44px; border-top:1px solid var(--line-strong); }
details { border-bottom:1px solid var(--line); }
summary { list-style:none; cursor:pointer; display:grid; grid-template-columns:1fr 36px; gap:24px; align-items:center; min-height:78px; padding:22px 0; font-size:18px; font-weight:600; color:var(--ink); }
summary::-webkit-details-marker { display:none; }
.summary-icon { width:30px; height:30px; border-radius:50%; border:1px solid var(--line-strong); display:grid; place-items:center; color:var(--stepes-magenta); font-size:20px; font-weight:400; }
details[open] .summary-icon { transform:rotate(45deg); }
.faq-answer { max-width:840px; padding:0 56px 24px 0; }
.faq-answer p { margin-bottom:12px; }
.faq-answer p:last-child { margin-bottom:0; }

.final-cta { padding-block:84px; background:var(--stepes-burgundy); color:#fff; }
.final-cta-grid { display:grid; grid-template-columns:1fr auto; gap:64px; align-items:center; }
.final-cta h2 { max-width:760px; margin-bottom:18px; }
.final-cta p { max-width:760px; margin-bottom:0; font-size:18px; }
.final-cta .btn-row { margin-top:0; justify-content:flex-end; }
.final-cta .btn.primary { background:#fff; color:var(--stepes-burgundy) !important; }
.final-cta .btn.primary span, .final-cta .btn.primary svg { color:var(--stepes-burgundy) !important; stroke:var(--stepes-burgundy) !important; }
.final-cta .btn.primary:hover { background:#F7F2F4; }

@media (max-width: 1100px) {
  .stepes-shell { padding-inline:40px; }
  .hero-grid { grid-template-columns:1fr 430px; gap:48px; }
  .engagement-detail { grid-template-columns:repeat(2,1fr); }
  .engagement-detail .item:nth-child(3) { border-left:0; padding-left:0; }
  .engagement-detail .item:nth-child(n+3) { border-top:1px solid rgba(255,255,255,.13); }
  .scale-grid { grid-template-columns:repeat(2,1fr); }
  .scale-item:nth-child(3) { border-left:0; border-top:1px solid var(--line); }
  .scale-item:nth-child(4) { border-top:1px solid var(--line); }
}

@media (max-width: 900px) {
  .stepes-shell { padding-inline:24px; }
  .stepes-section { padding-block:80px; }
  h1 { font-size:42px; }
  h2 { font-size:32px; }
  h3 { font-size:22px; }
  .benefit-row h3, .sector-item h3, .engagement-detail h3, .content-item h3, .format-row h3, .term-column h3, .workflow-column h3, .speed-row h3, .security-point h3, .scale-item h3, .why-item h3, .service-row h3 { font-size:22px; }
  .hero { padding-block:88px 72px; }
  .hero-grid, .overview-grid, .deliverable-grid, .expertise-grid, .terminology-grid, .speed-grid, .security-grid, .review-grid { grid-template-columns:1fr; gap:46px; }
  .hero-art { min-height:420px; }
  .overview-grid .sticky-heading, .deadline-panel { position:static; }
  .section-heading.mobile-center, .overview-grid .sticky-heading, .deliverable-grid > div:first-child, .expertise-grid > div:first-child, .terminology-grid > div:first-child, .speed-grid > div:first-child, .security-grid > div:first-child, .review-grid > div:last-child { text-align:center; }
  .section-heading.mobile-center .section-intro, .overview-grid .sticky-heading .section-intro, .deliverable-grid > div:first-child .section-intro, .expertise-grid > div:first-child .section-intro, .terminology-grid > div:first-child .section-intro, .speed-grid > div:first-child .section-intro, .security-grid > div:first-child .section-intro, .review-grid > div:last-child .section-intro { margin-inline:auto; }
  .overview-grid .sticky-heading p:not(.eyebrow), .deliverable-grid > div:first-child p:not(.eyebrow), .expertise-grid > div:first-child p:not(.eyebrow), .terminology-grid > div:first-child p:not(.eyebrow), .speed-grid > div:first-child p:not(.eyebrow), .security-grid > div:first-child p:not(.eyebrow), .review-grid > div:last-child p:not(.eyebrow) { text-align:left; }
  .speed-list, .speed-row, .review-benefits, .review-benefit { text-align:left; }
  .review-grid > div:last-child { order:-1; }
  .proof-grid { grid-template-columns:repeat(2,1fr); }
  .proof-item:nth-child(3) { border-left:0; border-top:1px solid var(--line); }
  .proof-item:nth-child(4) { border-top:1px solid var(--line); }
  .proof-item:nth-child(5) { grid-column:1 / -1; border-left:0; border-top:1px solid var(--line); }
  .timeline { grid-template-columns:1fr; gap:0; padding-left:6px; }
  .timeline::before { left:27px; right:auto; top:22px; bottom:22px; height:auto; width:1px; }
  .timeline-step { min-height:74px; display:grid; grid-template-columns:44px 1fr; gap:18px; align-items:start; text-align:left; padding:0; }
  .timeline-node { margin:0; }
  .timeline-label { padding-top:12px; font-size:16px; }
  .workflow-grid { grid-template-columns:1fr; }
  .workflow-column { padding:28px 0; }
  .workflow-column + .workflow-column { border-left:0; border-top:1px solid rgba(255,255,255,.14); padding-left:0; }
  .final-cta-grid { grid-template-columns:1fr; gap:30px; text-align:center; }
  .final-cta h2, .final-cta p { margin-inline:auto; }
  .final-cta .btn-row { justify-content:center; }
}

@media (max-width: 640px) {
  .stepes-shell { padding-inline:20px; }
  .stepes-section, .stepes-section.dense { padding-block:68px; }
  h1 { font-size:38px; line-height:1.06; }
  h2 { font-size:30px; line-height:1.14; }
  h3 { font-size:20px; }
  .benefit-row h3, .sector-item h3, .engagement-detail h3, .content-item h3, .format-row h3, .term-column h3, .workflow-column h3, .speed-row h3, .security-point h3, .scale-item h3, .why-item h3, .service-row h3 { font-size:20px; }
  p, .proof-copy, .content-item p, .benefit-row p, .sector-item p, .format-row p, .workflow-column li, .security-point p, .review-benefit p, .service-row p { font-size:16px; }
  .body-large { font-size:18px; }
  .hero { padding-block:72px 60px; }
  .hero-grid { gap:40px; }
  .hero-copy { text-align:center; }
  .hero-copy h1, .hero-copy .body-large { margin-inline:auto; }
  .hero-copy .btn-row { justify-content:center; }
  .hero-copy .btn { width:100%; }
  .hero-art { min-height:340px; padding:18px; border-radius:24px; }
  .proof-grid { grid-template-columns:1fr; }
  .proof-item { padding:22px 0; min-height:0; }
  .proof-item + .proof-item { border-left:0; border-top:1px solid var(--line); }
  .sector-grid, .content-grid, .domain-list, .why-grid, .services-grid, .industry-links { grid-template-columns:1fr; }
  .sector-item, .sector-item:nth-child(odd), .sector-item:nth-child(even), .content-item, .content-item:nth-child(even), .domain-item, .domain-item:nth-child(even), .why-item, .why-item:nth-child(even), .service-row, .service-row:nth-child(even) { padding-left:0; padding-right:0; border-left:0; }
  .industry-links { border-right:0; }
  .industry-link { border-left:0; }
  .hr-route { align-items:flex-start; flex-direction:column; }
  .engagement-detail { grid-template-columns:1fr; }
  .engagement-detail .item, .engagement-detail .item:not(:nth-child(4n+1)), .engagement-detail .item:nth-child(3) { border-left:0; padding-left:0; padding-right:0; border-top:1px solid rgba(255,255,255,.13); }
  .engagement-detail .item:first-child { border-top:0; }
  .content-item { grid-template-columns:44px 1fr; }
  .document-art { min-height:380px; padding:18px; border-radius:24px; }
  .expertise-formula { justify-content:center; }
  .term-columns { grid-template-columns:1fr; }
  .term-panel { padding:20px; }
  .scale-grid { grid-template-columns:1fr; }
  .scale-item, .scale-item:nth-child(3), .scale-item:nth-child(4) { border-left:0; border-top:1px solid var(--line); padding:24px 0; }
  .scale-item:first-child { border-top:0; }
  .language-list { justify-content:flex-start; }
  summary { font-size:17px; grid-template-columns:1fr 32px; gap:14px; padding:20px 0; }
  .faq-answer { padding-right:0; }
  .final-cta { padding-block:68px; }
  .final-cta .btn-row { width:100%; }
  .final-cta .btn { width:100%; }

  .expertise-formula { flex-direction:column; align-items:stretch; gap:8px; }
  .formula-chip { width:100%; text-align:center; }
  .formula-plus { align-self:center; line-height:1; }
  .term-flow { flex-direction:column; align-items:stretch; gap:6px; }
  .term-flow span { width:100%; text-align:center; }
  .term-flow b { align-self:center; transform:rotate(90deg); line-height:1; }
  .deadline-panel, .review-art { padding:20px; }
  .deadline-head { flex-direction:column; align-items:flex-start; }
  .review-card { grid-template-columns:42px minmax(0,1fr); align-items:start; }
  .review-state { grid-column:2; justify-self:start; white-space:normal; margin-top:4px; }
  .security-examples span { max-width:100%; white-space:normal; }
  .link-cluster { gap:6px 16px; }
}

@media (max-width: 360px) {
  .hero-art { min-height:300px; padding:14px; }
  .content-item { grid-template-columns:40px 1fr; gap:14px; }
  .icon-box { width:40px; height:40px; }
  .term-panel { padding:16px; }
  .term-column { padding:16px; }
  .deadline-panel, .review-art { padding:16px; }
  .review-card { padding:14px; gap:12px; }
  .industry-link { padding:17px 16px; }
}
`;

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name }) => {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    insight: <svg {...props}><path {...common} d="M4 19h16M6 16l3-4 3 2 5-7 2 2"/><path {...common} d="M17 7h3v3"/></svg>,
    credibility: <svg {...props}><path {...common} d="M12 3l7 3v5c0 4.6-2.8 7.7-7 10-4.2-2.3-7-5.4-7-10V6l7-3z"/><path {...common} d="M9 12l2 2 4-5"/></svg>,
    align: <svg {...props}><circle {...common} cx="6" cy="6" r="2"/><circle {...common} cx="18" cy="6" r="2"/><circle {...common} cx="12" cy="18" r="2"/><path {...common} d="M8 7.2l3 8.6M16 7.2l-3 8.6M8 6h8"/></svg>,
    file: <svg {...props}><path {...common} d="M6 3h8l4 4v14H6z"/><path {...common} d="M14 3v5h5M9 13h6M9 17h5"/></svg>,
    proposal: <svg {...props}><path {...common} d="M7 3h10v18H7zM10 7h4M10 11h4M10 15h3"/><path {...common} d="M5 5v14M19 5v14"/></svg>,
    research: <svg {...props}><circle {...common} cx="10" cy="10" r="5"/><path {...common} d="M14 14l5 5M10 7v6M7 10h6"/></svg>,
    report: <svg {...props}><path {...common} d="M5 3h14v18H5zM8 16l3-3 2 2 3-5"/><path {...common} d="M8 7h8"/></svg>,
    presentation: <svg {...props}><path {...common} d="M4 4h16v11H4zM12 15v5M8 20h8"/><path {...common} d="M8 11l3-3 2 2 3-3"/></svg>,
    message: <svg {...props}><path {...common} d="M4 5h16v11H9l-5 4z"/><path {...common} d="M8 9h8M8 12h5"/></svg>,
    training: <svg {...props}><path {...common} d="M3 8l9-5 9 5-9 5z"/><path {...common} d="M6 10v5c3 3 9 3 12 0v-5M21 8v7"/></svg>,
    thought: <svg {...props}><path {...common} d="M9 18h6M10 21h4"/><path {...common} d="M8 15c-1.5-1.3-2.5-3.2-2.5-5.3A6.5 6.5 0 0112 3a6.5 6.5 0 016.5 6.7c0 2.1-1 4-2.5 5.3-.7.6-1 1.2-1 2H9c0-.8-.3-1.4-1-2z"/></svg>,
    knowledge: <svg {...props}><path {...common} d="M4 5c3-1.5 5-1 8 1v14c-3-2-5-2.5-8-1zM20 5c-3-1.5-5-1-8 1v14c3-2 5-2.5 8-1z"/></svg>,
    powerpoint: <svg {...props}><rect {...common} x="4" y="4" width="16" height="16" rx="2"/><path {...common} d="M8 16V8h4a2.5 2.5 0 010 5H8M8 13h4"/></svg>,
    word: <svg {...props}><rect {...common} x="4" y="4" width="16" height="16" rx="2"/><path {...common} d="M7 8l2 8 3-6 3 6 2-8"/></svg>,
    excel: <svg {...props}><rect {...common} x="4" y="4" width="16" height="16" rx="2"/><path {...common} d="M8 8l4 8M12 8l-4 8M15 8h2M15 12h2M15 16h2"/></svg>,
    design: <svg {...props}><path {...common} d="M12 3l8 6-8 12L4 9z"/><path {...common} d="M4 9h16M12 3v18"/></svg>,
    shield: <svg {...props}><path {...common} d="M12 3l7 3v5c0 4.6-2.8 7.7-7 10-4.2-2.3-7-5.4-7-10V6l7-3z"/><path {...common} d="M9.5 12h5M12 9.5v5"/></svg>,
    lock: <svg {...props}><rect {...common} x="5" y="10" width="14" height="10" rx="2"/><path {...common} d="M8 10V7a4 4 0 018 0v3"/></svg>,
    users: <svg {...props}><circle {...common} cx="9" cy="8" r="3"/><circle {...common} cx="17" cy="9" r="2"/><path {...common} d="M3 20c0-4 2.5-6 6-6s6 2 6 6M14 15c3 0 5 1.6 5 4"/></svg>,
    reuse: <svg {...props}><path {...common} d="M5 8a7 7 0 0112-2l2 2M19 8V4h-4M19 16a7 7 0 01-12 2l-2-2M5 16v4h4"/></svg>,
    globe: <svg {...props}><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>,
    quality: <svg {...props}><path {...common} d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z"/></svg>,
    speed: <svg {...props}><path {...common} d="M12 3a9 9 0 109 9"/><path {...common} d="M12 7v5l3 2M16 3h5v5"/></svg>,
    terminology: <svg {...props}><path {...common} d="M5 5h14M8 5v14M6 19h4M14 9h5M14 13h5M14 17h3"/></svg>,
  };
  return icons[name] || icons.file;
};

const SectionHeading = ({ eyebrow, title, intro, center = false, mobileCenter = true, id }) => (
  <div className={`section-heading ${center ? "center" : ""} ${mobileCenter ? "mobile-center" : ""}`} id={id}>
    {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro body-large">{intro}</p> : null}
  </div>
);

const EditorialLink = ({ href, children }) => (
  <a className="editorial-link" href={href}>
    <span>{children}</span><span className="arrow" aria-hidden="true">→</span>
  </a>
);

const sectors = [
  ["Management & Strategy Consulting", "Strategy reports, market-entry studies, business transformation programs, operating models, executive presentations, implementation plans, and other high-value consulting deliverables."],
  ["Technology & Digital Advisory", "Digital transformation, technology assessments, implementation programs, software-related consulting, IT advisory, cybersecurity communications, cloud initiatives, and client-facing technology content."],
  ["Research & Market Intelligence", "Market studies, research reports, questionnaires, interview materials, competitive analyses, qualitative findings, quantitative commentary, surveys, and executive research summaries."],
  ["Accounting, Audit & Advisory", "Business reports, advisory documentation, audit-related communications, governance materials, presentations, financial commentary, process documentation, and client communications."],
  ["Operations & Transformation Consulting", "Process improvement programs, operational assessments, transformation roadmaps, implementation plans, workshop materials, operating procedures, performance frameworks, and related client deliverables."],
  ["Specialized Business & Technical Advisory", "Engagements requiring both linguistic proficiency and specialized industry knowledge across life sciences, manufacturing, energy, transportation, technology, consumer markets, engineering, and financial services."],
];

const engagement = [
  ["Proposal", "Capabilities presentations, statements of work, RFP responses, project proposals, methodologies, schedules, and supporting materials establish the engagement vocabulary."],
  ["Research", "Interviews, questionnaires, market data, source documents, surveys, and background materials expand the knowledge base across languages."],
  ["Analysis", "Working documents, findings, models, summaries, assessments, and analytical commentary transform information into insight."],
  ["Workshops", "Facilitation materials, discussion guides, working presentations, handouts, and collaborative content bring multinational stakeholders into the process."],
  ["Presentation", "Executive decks, recommendations, charts, diagrams, and supporting narratives communicate complex conclusions clearly and persuasively."],
  ["Final Report", "Formal reports, research publications, assessments, recommendations, appendices, tables, and supporting evidence become the enduring client deliverable."],
  ["Implementation & Training", "Training, rollout communications, operating materials, digital content, and ongoing updates help organizations put recommendations into action and sustain change."],
];

const contentTypes = [
  ["proposal", "Proposals & RFP Responses", "Proposals, pitch decks, statements of work, tender responses, capability documents, methodologies, project plans, team biographies, and supporting materials for international opportunities."],
  ["report", "Consulting & Advisory Reports", "Strategy reports, assessments, recommendations, transformation plans, market studies, operating-model documents, implementation roadmaps, and specialized advisory reports."],
  ["presentation", "Executive Presentations", "PowerPoint decks, board-level materials, workshop presentations, client pitches, charts, diagrams, speaker notes, and presentation graphics."],
  ["research", "Research & Analysis", "Primary research, interview materials, questionnaires, surveys, analytical commentary, market intelligence, competitive research, findings, and supporting data."],
  ["message", "Client Communications", "Project updates, executive communications, stakeholder correspondence, meeting materials, announcements, implementation communications, and other client-facing content."],
  ["training", "Training & Implementation Materials", "Implementation guides, training courses, workshops, job aids, eLearning content, process documentation, and materials that turn recommendations into action."],
  ["thought", "Thought Leadership & Corporate Content", "White papers, research publications, insights, case studies, articles, websites, marketing content, corporate presentations, and other authority-building content."],
  ["knowledge", "Knowledge & Internal Content", "Methodologies, templates, knowledge-base content, internal research, reference materials, playbooks, and reusable professional-services assets."],
];

const formats = [
  ["powerpoint", "PowerPoint Presentations", "Maintain slide hierarchy, charts, callouts, diagrams, tables, headers, footers, speaker content, and visual balance as translated text expands or contracts."],
  ["word", "Word & PDF Reports", "Preserve headings, tables, captions, references, pagination, graphics, cross-references, footnotes, and document structure for polished multilingual reports."],
  ["excel", "Excel Workbooks", "Translate labels, tables, comments, analytical content, and other language elements while protecting formulas, numerical information, worksheet organization, and supporting structures."],
  ["design", "Adobe & Designed Content", "Support multilingual production for InDesign, Illustrator, graphics, charts, diagrams, and other designed source files, including different scripts and reading directions."],
];

const domains = ["Life Sciences & Healthcare", "Technology & Software", "Manufacturing", "Automotive", "Transportation", "Financial Services", "Energy", "Engineering & Infrastructure", "Consumer Markets", "Specialized Technical Fields"];

const speedItems = [
  ["Launch Projects Faster", "Digital intake and file analysis help teams move translation requests into production without unnecessary administrative delays."],
  ["Scale Across Languages", "Coordinate multilingual teams across several target languages when a client engagement expands into additional markets."],
  ["Work in Parallel", "Translation, review, formatting, and production activities can be coordinated across content streams when project requirements allow."],
  ["Reuse Approved Language", "Translation memory and terminology resources reduce unnecessary rework when content repeats or evolves across deliverables."],
  ["Manage Revisions", "Structured workflows help coordinate changing source content, reviewer feedback, and updated multilingual deliverables."],
];

const securityPoints = [
  ["lock", "Controlled Project Access", "Organize multilingual work through managed workflows and access patterns aligned to engagement requirements."],
  ["shield", "Confidentiality by Workflow", "Build project handling, linguistic resources, review, and delivery around the sensitivity of the content."],
  ["quality", "Quality and Process Discipline", "Connect secure handling with structured review, terminology control, quality checks, and documented delivery."],
  ["terminology", "Appropriate AI Use", "Match AI-enabled translation to the purpose, confidentiality, visibility, and risk of the content rather than applying it indiscriminately."],
];

const whyItems = [
  ["users", "Subject-Matter Linguists", "Match professional language expertise with the industry and business subject of each engagement."],
  ["credibility", "Professional Client-Facing Quality", "Preserve the clarity, credibility, tone, and precision expected in high-value professional deliverables."],
  ["presentation", "Presentation & Document Production", "Translate and format PowerPoint, Word, Excel, PDF, Adobe, and other files for polished multilingual delivery."],
  ["terminology", "Translation Memory & Terminology", "Keep firm language, client terminology, methodologies, and approved translations aligned across related content."],
  ["insight", "Flexible AI + Human Workflows", "Select the right combination of professional translators, AI translation, human review, automation, and linguistic QA."],
  ["globe", "Scalable Global Delivery", "Support one urgent project or coordinated programs involving multiple files, teams, reviewers, languages, and markets."],
  ["quality", "Structured Quality Processes", "Apply professional translation, review, terminology control, QA, and delivery processes according to project requirements."],
  ["reuse", "Enterprise Workflow Support", "Coordinate project intake, files, language assets, review, delivery, and multilingual program visibility through connected translation technology."],
];

const relatedServices = [
  ["Consulting Translation Services", "Specialized translation for management consulting, strategy consulting, technology consulting, advisory services, and international consulting engagements.", "https://www.stepes.com/consulting-translation-services/"],
  ["Document Translation Services", "Translate reports, proposals, presentations, research, policies, correspondence, and other professional business documents.", "https://www.stepes.com/document-translation-services/"],
  ["Multilingual Desktop Publishing", "Deliver translated reports, presentations, brochures, and designed materials with professional multilingual formatting.", "https://www.stepes.com/multilingual-desktop-publishing/"],
  ["AI Translation Services", "Use AI-enabled translation with terminology, workflow controls, and professional validation according to content requirements.", "https://www.stepes.com/ai-translation-services/"],
  ["Website Translation Services", "Translate and localize corporate websites, service pages, thought leadership, insights, case studies, and digital customer journeys.", "https://www.stepes.com/website-translation-services/"],
  ["eLearning & Training Localization", "Translate training programs, implementation learning, workshops, digital courses, and related educational materials.", "https://www.stepes.com/elearning-training-translation-services/"],
  ["Marketing Translation Services", "Translate thought leadership, insights, case studies, campaigns, corporate messaging, and other market-facing content while protecting brand voice across languages.", "https://www.stepes.com/marketing-translation-services/"],
  ["Interpreting Services", "Support multilingual meetings, interviews, workshops, conferences, client discussions, and other spoken communication requirements.", "https://www.stepes.com/interpretation-services/"],
];

const industries = [
  ["Life Sciences", "https://www.stepes.com/life-sciences-translation-services/"],
  ["Healthcare", "https://www.stepes.com/healthcare-translation-services/"],
  ["Pharmaceutical", "https://www.stepes.com/pharmaceutical-translation-services/"],
  ["Medical Devices", "https://www.stepes.com/medical-device-translation-services/"],
  ["Financial Services", "https://www.stepes.com/financial-translation-services/"],
  ["Technology & Software", "https://www.stepes.com/technology-translation-services/"],
  ["Manufacturing", "https://www.stepes.com/manufacturing-translation-services/"],
  ["Automotive", "https://www.stepes.com/automotive-translation-services/"],
  ["Transportation & Logistics", "https://www.stepes.com/transportation-translation-services/"],
  ["Construction & Infrastructure", "https://www.stepes.com/construction-infrastructure-translation-services/"],
  ["Chemicals & Materials", "https://www.stepes.com/chemical-translation-services/"],
  ["Food & Beverage", "https://www.stepes.com/food-beverage-translation-services/"],
];

const faqs = [
  ["What is professional services translation?", [
    "Professional services translation is the translation and localization of content created by consulting, advisory, research, accounting, technology services, and other knowledge-based professional organizations. Typical materials include reports, proposals, presentations, research, client communications, implementation materials, training, thought leadership, and corporate content.",
    "Unlike generic document translation, professional-services translation often requires careful preservation of specialized subject matter, client terminology, analytical reasoning, presentation quality, confidentiality, and consistency across multiple connected deliverables."
  ]],
  ["What types of professional services firms does Stepes support?", [
    "Stepes supports management and strategy consulting firms, technology and digital advisory organizations, research and market intelligence companies, accounting and advisory firms, operations and transformation consultants, and other specialized professional-services organizations.",
    "Because professional-services firms often work across many client industries, Stepes also matches linguistic resources to the subject matter of the individual engagement."
  ]],
  ["Can Stepes translate PowerPoint presentations and consulting reports?", [
    "Yes. Stepes translates PowerPoint presentations, Word documents, PDFs, Excel files, Adobe design files, and many other business formats.",
    "For presentations and professionally designed documents, multilingual production can address text expansion, layout, tables, charts, diagrams, fonts, visual hierarchy, and other formatting requirements so translated deliverables remain polished and ready for use."
  ]],
  ["How does Stepes maintain terminology across multiple deliverables?", [
    "Stepes uses translation memory, terminology management, glossaries, prior translations, reference materials, and project-specific instructions to help maintain consistent language across related content.",
    "Approved terminology from a proposal, for example, can guide subsequent research, presentations, reports, implementation materials, and training. Reviewer feedback can also be incorporated into reusable language assets for future work."
  ]],
  ["How does Stepes select translators for specialized consulting projects?", [
    "Translator selection considers the language pair together with subject matter, content type, audience, complexity, and project requirements.",
    "This is especially important for professional-services firms because client engagements can span industries such as life sciences, financial services, technology, manufacturing, energy, transportation, engineering, and consumer markets."
  ]],
  ["Does Stepes provide AI translation for professional services content?", [
    "Yes. Stepes supports AI-enabled translation as part of flexible translation workflows that can also include professional human translation, linguistic review, translation memory, terminology management, and quality assurance.",
    "The appropriate workflow depends on the purpose, audience, complexity, confidentiality, visibility, and business risk of the content. High-visibility client deliverables may require greater professional linguistic involvement than lower-risk internal or reference materials."
  ]],
  ["Can Stepes support urgent consulting and advisory projects?", [
    "Yes. Stepes supports both standard and accelerated translation workflows. Actual turnaround depends on factors such as word count, language combination, subject matter, file complexity, formatting requirements, review level, number of target languages, and available linguistic resources.",
    "For deadline-sensitive engagements, early identification of priority content and delivery requirements can help the project team design the most efficient workflow."
  ]],
  ["How much does professional services translation cost?", [
    "Translation pricing depends on the target languages, volume, subject matter, source format, required turnaround, linguistic workflow, formatting needs, and whether additional review or multilingual desktop publishing is required.",
    "Stepes can analyze your files and project requirements to provide a project-specific quotation."
  ]],
  ["How does Stepes protect confidential professional-services content?", [
    "Stepes supports professional-services translation through enterprise workflows designed to manage project access, qualified language resources, translation technology, review, and delivery in accordance with project requirements.",
    "Because confidentiality requirements can differ substantially between engagements, organizations with specific security, data-handling, or AI-use requirements can work with Stepes to establish an appropriate translation workflow."
  ]],
];

function HeroArt() {
  return (
    <svg viewBox="0 0 580 470" role="img" aria-label="Professional services engagement moving from research and analysis to multilingual client deliverables">
      <defs>
        <linearGradient id="softFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#F7F8FA"/></linearGradient>
      </defs>
      <rect x="32" y="36" width="516" height="398" rx="28" fill="url(#softFill)" stroke="#CED5DD"/>
      <rect x="58" y="68" width="160" height="116" rx="18" fill="#fff" stroke="#BFC7D1"/>
      <path d="M82 150l34-34 28 20 42-45" fill="none" stroke="#737E8D" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="82" cy="150" r="4" fill="#C11D63"/><circle cx="116" cy="116" r="4" fill="#C11D63"/><circle cx="144" cy="136" r="4" fill="#C11D63"/><circle cx="186" cy="91" r="4" fill="#C11D63"/>
      <path d="M76 86h90M76 98h62" stroke="#AAB3BE" strokeWidth="2" strokeLinecap="round"/>
      <rect x="242" y="68" width="278" height="116" rx="18" fill="#fff" stroke="#BFC7D1"/>
      <path d="M269 95h98M269 110h176M269 125h151M269 140h118" stroke="#8E98A6" strokeWidth="2" strokeLinecap="round"/>
      <rect x="434" y="91" width="58" height="58" rx="10" fill="#FDF2F7" stroke="#E5B4CA"/>
      <path d="M448 128l12-14 10 7 10-18" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
      <rect x="58" y="210" width="212" height="188" rx="20" fill="#fff" stroke="#BFC7D1"/>
      <path d="M84 242h90M84 259h144M84 276h126" stroke="#828D9B" strokeWidth="2" strokeLinecap="round"/>
      <rect x="84" y="303" width="56" height="58" rx="8" fill="#EFF2F5"/>
      <rect x="150" y="322" width="35" height="39" rx="6" fill="#E6EAEE"/>
      <rect x="195" y="288" width="47" height="73" rx="7" fill="#FDF2F7" stroke="#E5B4CA"/>
      <rect x="302" y="210" width="218" height="188" rx="20" fill="#fff" stroke="#BFC7D1"/>
      <path d="M328 242h74M328 259h148M328 276h121" stroke="#828D9B" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="352" cy="323" r="22" fill="#FDF2F7" stroke="#E5B4CA"/><text x="352" y="329" textAnchor="middle" fontSize="15" fontWeight="600" fill="#A71954">EN</text>
      <path d="M378 323h34" stroke="#9AA3AE" strokeWidth="2" strokeLinecap="round"/><path d="M402 316l10 7-10 7" fill="none" stroke="#9AA3AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="438" cy="303" r="18" fill="#F2F4F6" stroke="#C7CED7"/><text x="438" y="309" textAnchor="middle" fontSize="12" fontWeight="600" fill="#566170">DE</text>
      <circle cx="475" cy="340" r="18" fill="#F2F4F6" stroke="#C7CED7"/><text x="475" y="346" textAnchor="middle" fontSize="12" fontWeight="600" fill="#566170">JA</text>
      <circle cx="438" cy="359" r="18" fill="#F2F4F6" stroke="#C7CED7"/><text x="438" y="365" textAnchor="middle" fontSize="12" fontWeight="600" fill="#566170">FR</text>
      <path d="M218 126h24M270 304h32" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7"/>
    </svg>
  );
}

function DocumentArt() {
  return (
    <svg viewBox="0 0 520 430" role="img" aria-label="Multilingual presentation and report layouts preserved across languages">
      <rect x="42" y="42" width="330" height="230" rx="16" fill="#FAFBFC" stroke="#BBC4CE"/>
      <rect x="72" y="72" width="270" height="26" rx="7" fill="#EEF1F4"/>
      <path d="M88 85h108" stroke="#697483" strokeWidth="2" strokeLinecap="round"/>
      <rect x="72" y="116" width="124" height="126" rx="10" fill="#fff" stroke="#D0D6DE"/>
      <path d="M91 206l28-42 20 22 35-53" fill="none" stroke="#697483" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="91" cy="206" r="3.5" fill="#C11D63"/><circle cx="119" cy="164" r="3.5" fill="#C11D63"/><circle cx="139" cy="186" r="3.5" fill="#C11D63"/><circle cx="174" cy="133" r="3.5" fill="#C11D63"/>
      <path d="M216 129h94M216 147h84M216 165h102M216 183h78M216 219h67" stroke="#8A95A3" strokeWidth="2" strokeLinecap="round"/>
      <rect x="160" y="296" width="318" height="92" rx="16" fill="#fff" stroke="#BBC4CE"/>
      <path d="M188 322h86M188 341h174M188 360h132" stroke="#7A8594" strokeWidth="2" strokeLinecap="round"/>
      <rect x="386" y="315" width="62" height="56" rx="10" fill="#FDF2F7" stroke="#E5B4CA"/>
      <text x="417" y="349" textAnchor="middle" fontSize="14" fontWeight="600" fill="#A71954">PPT</text>
      <rect x="388" y="77" width="90" height="154" rx="16" fill="#fff" stroke="#BBC4CE"/>
      <path d="M410 105h46M410 123h40M410 141h46M410 177h32M410 195h45" stroke="#8994A2" strokeWidth="2" strokeLinecap="round"/>
      <rect x="410" y="151" width="46" height="8" rx="4" fill="#F3D4E1"/>
      <path d="M356 274l25 20M373 270l14 12" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function ProfessionalServicesTranslationWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero">
        <div className="stepes-shell hero-grid">
          <div className="hero-copy">
            <h1>Professional Services Translation for Consulting &amp; Advisory Firms</h1>
            <p className="body-large">Turn expertise into clear, credible multilingual communication. Stepes helps consulting, advisory, research, accounting, technology services, and specialized professional-services firms translate reports, proposals, presentations, research, training, client communications, and other high-value deliverables in 100+ languages.</p>
            <p>Our professional linguists, subject-matter expertise, AI-enabled technology, terminology management, and multilingual production workflows help global teams deliver their best work in every language—without losing the insight, precision, presentation quality, or consistency behind the original.</p>
            <div className="btn-row">
              <a className="btn primary" href="https://www.stepes.com/online-translation-services/"><span>Get a Translation Quote</span><Arrow /></a>
              <a className="btn secondary" href="https://www.stepes.com/contact-us/"><span>Talk to a Translation Expert</span></a>
            </div>
          </div>
          <div>
            <div className="hero-art"><HeroArt /></div>
            <div className="hero-note">Research → analysis → presentation → multilingual client delivery</div>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Professional services translation proof points">
        <div className="stepes-shell proof-grid">
          <div className="proof-item"><div className="proof-value">100+ Languages</div><p className="proof-copy">Global coverage for client engagements and international operations.</p></div>
          <div className="proof-item"><div className="proof-value">10,000+ Professional Linguists</div><p className="proof-copy">Language professionals matched to subject matter and project requirements.</p></div>
          <div className="proof-item"><div className="proof-value">2,000+ Enterprise Clients</div><p className="proof-copy">Multilingual support for organizations across industries and global markets.</p></div>
          <div className="proof-item"><div className="proof-value">ISO-Certified Quality Systems</div><p className="proof-copy">Structured translation quality processes backed by internationally recognized standards.</p></div>
          <div className="proof-item"><div className="proof-value">AI + Human Workflows</div><p className="proof-copy">Translation models matched to purpose, visibility, complexity, and risk.</p></div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell overview-grid">
          <div className="sticky-heading">
            <p className="eyebrow">Knowledge-Intensive Communication</p>
            <h2>When Expertise Is the Product, Every Word Matters</h2>
            <p className="section-intro body-large">Professional-services firms turn research, analysis, experience, and specialized knowledge into recommendations that help clients make important decisions. That value has to survive translation.</p>
            <p>A strategy report must preserve the reasoning behind its recommendations. A client presentation must remain concise and persuasive. Research findings must retain their intended meaning. A proposal needs to communicate capability and value with the same confidence as the original.</p>
          </div>
          <div className="benefit-list">
            {[
              ["insight", "Preserve the Insight", "Translate analysis, recommendations, methodologies, and supporting evidence without reducing complex ideas to literal wording."],
              ["credibility", "Protect Professional Credibility", "Deliver polished target-language content that reflects the quality and care invested in the original engagement."],
              ["align", "Keep Global Teams Aligned", "Maintain approved terminology, client language, and prior translations across related content, reviewers, offices, and markets."],
              ["file", "Deliver Ready-to-Use Content", "Translate and format presentations, reports, spreadsheets, PDFs, and designed materials so multilingual deliverables remain professionally usable."],
            ].map(([icon, title, copy]) => <div className="benefit-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="stepes-section soft">
        <div className="stepes-shell">
          <SectionHeading title="Multilingual Expertise Across Professional Services" intro="Stepes supports a broad range of consulting and advisory practices while matching linguistic resources to the subject matter of each engagement." center />
          <div className="sector-grid">
            {sectors.map(([title, copy]) => <div className="sector-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="hr-route"><p>For workforce policies, employee communications, benefits, talent programs, and other dedicated HR content, explore Stepes' specialized HR translation solutions.</p><EditorialLink href="https://www.stepes.com/human-resource-translation-services/">Human Resources Translation Services</EditorialLink></div>
        </div>
      </section>

      <section className="stepes-section dark">
        <div className="stepes-shell">
          <SectionHeading eyebrow="Connected Client Deliverables" title="One Engagement. Many Multilingual Deliverables." intro="A professional-services engagement rarely lives in one document. Each stage builds on the language, terminology, and decisions established before it." center />
          <div className="engagement-wrap">
            <div className="timeline" aria-label="Professional services engagement translation lifecycle">
              {engagement.map(([title], i) => <div className="timeline-step" key={title}><div className="timeline-node">{String(i+1).padStart(2,"0")}</div><div className="timeline-label">{title}</div></div>)}
            </div>
            <div className="engagement-detail">
              {engagement.map(([title, copy]) => <div className="item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
            <div className="engagement-summary"><p>Stepes connects these multilingual deliverables through reusable translation memory, approved terminology, project instructions, and managed review workflows. Instead of treating every new file as an isolated translation, teams can carry approved language forward through the engagement—improving consistency, reducing repetitive review, and helping multilingual content feel like one body of work.</p></div>
          </div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell">
          <SectionHeading title="Professional Services Content From Proposal to Delivery" intro="Stepes translates the full range of content professional-services organizations create for clients, prospects, project teams, partners, and global markets." center />
          <div className="content-grid">
            {contentTypes.map(([icon,title,copy]) => <div className="content-item" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="stepes-section soft">
        <div className="stepes-shell deliverable-grid">
          <div>
            <p className="eyebrow">Multilingual Document Production</p>
            <h2>Preserve the Deliverable, Not Just the Translation</h2>
            <p className="section-intro body-large">Professional-services content is often highly visual. The argument may depend as much on the structure of a presentation, the relationship between numbers in a table, or the hierarchy of a report as it does on the words themselves.</p>
            <p>Stepes combines professional translation with multilingual desktop publishing and file engineering to help preserve the structure, formatting, and usability of client deliverables across languages.</p>
            <div className="link-cluster"><EditorialLink href="https://www.stepes.com/document-translation-services/">Document Translation Services</EditorialLink><EditorialLink href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</EditorialLink><EditorialLink href="https://www.stepes.com/resources/file-format-support/">Supported File Formats</EditorialLink></div>
          </div>
          <div>
            <div className="document-art"><DocumentArt /></div>
            <div className="format-list">
              {formats.map(([icon,title,copy]) => <div className="format-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell expertise-grid">
          <div>
            <p className="eyebrow">Subject-Matter Alignment</p>
            <h2>The Right Linguistic Expertise for Every Client Engagement</h2>
            <p className="section-intro body-large">Professional-services firms often move across industries. The same consulting organization may support a pharmaceutical company on one engagement, an automotive manufacturer on the next, and a technology company after that.</p>
            <p>Stepes matches translation resources according to the combination of language, subject matter, content type, audience, and project requirements—rather than relying on a generic definition of a “business translator.”</p>
            <div className="expertise-formula" aria-label="Linguist matching factors"><span className="formula-chip">Language</span><span className="formula-plus">+</span><span className="formula-chip">Subject Matter</span><span className="formula-plus">+</span><span className="formula-chip">Content Type</span><span className="formula-plus">+</span><span className="formula-chip">Audience</span><span className="formula-plus">+</span><span className="formula-chip">Project Requirements</span></div>
          </div>
          <div className="domain-list">
            {domains.map(d => <div className="domain-item" key={d}>{d}</div>)}
          </div>
        </div>
      </section>

      <section className="stepes-section blush">
        <div className="stepes-shell terminology-grid">
          <div>
            <p className="eyebrow">Terminology Management</p>
            <h2>One Client Vocabulary Across Every Deliverable</h2>
            <p className="section-intro body-large">Professional-services translation often needs to manage two distinct vocabularies at once: your firm's proprietary language and your client's established terminology.</p>
            <p>Stepes uses translation memory, terminology management, approved reference materials, and project-specific language guidance to connect both layers. Reviewer corrections can become reusable language assets rather than disappearing inside individual files.</p>
            <div className="link-cluster"><EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink><EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink></div>
          </div>
          <div className="term-panel">
            <div className="term-columns">
              <div className="term-column"><h3>Your Firm's Language</h3><ul><li>Proprietary methodologies</li><li>Service names</li><li>Consulting frameworks</li><li>Corporate language</li><li>Preferred style</li></ul></div>
              <div className="term-column"><h3>Your Client's Language</h3><ul><li>Product names</li><li>Organizational structures</li><li>Internal programs</li><li>Technical vocabulary</li><li>Market terminology</li></ul></div>
            </div>
            <div className="term-flow" aria-label="Terminology reuse across deliverables"><span>Proposal</span><b>→</b><span>Research</span><b>→</b><span>Analysis</span><b>→</b><span>Workshops</span><b>→</b><span>Presentation</span><b>→</b><span>Final Report</span><b>→</b><span>Implementation &amp; Training</span></div>
          </div>
        </div>
      </section>

      <section className="stepes-section dark-2">
        <div className="stepes-shell">
          <SectionHeading eyebrow="Flexible Translation Workflows" title="The Right Translation Workflow for Every Stage of the Engagement" intro="Not every piece of professional-services content has the same audience, business value, confidentiality requirements, or quality risk. Stepes supports flexible AI and human translation workflows so the production model can match the purpose of the content." center />
          <div className="workflow-grid">
            <div className="workflow-column"><span className="mode">High-Visibility Content</span><h3>Professional Human Translation</h3><p>For nuanced, specialized, or business-critical content where professional judgment, tone, and subject expertise matter most.</p><ul><li>Executive presentations</li><li>Strategic recommendations</li><li>Final client reports</li><li>Major proposals</li><li>Thought leadership</li></ul></div>
            <div className="workflow-column"><span className="mode">Balanced Scale + Quality</span><h3>AI Translation + Professional Review</h3><p>AI-enabled translation can accelerate production while professional linguists review and refine accuracy, terminology, readability, and intended use.</p><ul><li>Recurring business content</li><li>Large project workstreams</li><li>Content moving from internal review to client use</li><li>Content with reusable language assets</li></ul></div>
            <div className="workflow-column"><span className="mode">Appropriate Lower-Risk Content</span><h3>AI Translation for Scale</h3><p>For suitable internal or reference content where rapid multilingual access is more important than publication-level writing.</p><ul><li>Preliminary research inputs</li><li>Internal reference material</li><li>Knowledge archives</li><li>Suitable high-volume reference content</li></ul></div>
          </div>
          <p className="workflow-principle">The goal is not to force every document into the same workflow. It is to apply the right level of human expertise and technology based on <strong>purpose, audience, complexity, visibility, confidentiality, and risk.</strong></p>
          <div className="link-cluster"><EditorialLink href="https://www.stepes.com/ai-translation-services/">AI Translation Services</EditorialLink><EditorialLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</EditorialLink></div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell speed-grid">
          <div>
            <p className="eyebrow">Deadline-Ready Delivery</p>
            <h2>Built for Fast-Moving Client Engagements</h2>
            <p className="section-intro body-large">Professional-services deadlines do not always wait for translation. Proposals change hours before submission, client presentations are revised after executive review, and research can continue arriving while the final report is being assembled.</p>
            <p>Stepes combines scalable linguistic resources with online translation management and reusable language assets to help teams respond to changing requirements without losing control of the multilingual process.</p>
            <div className="speed-list">{speedItems.map(([title,copy]) => <div className="speed-row" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
          </div>
          <aside className="deadline-panel" aria-label="Example fast-moving engagement workflow">
            <div className="deadline-head"><strong>Global Strategy Deck</strong><span className="deadline-status">Delivery Friday</span></div>
            <div className="deadline-events">
              {[['active','Source update received','New executive summary + 8 revised slides'],['active','Terminology synchronized','Approved client language applied'],['active','Translation in parallel','French · German · Japanese'],['','Linguistic review','High-visibility slides prioritized'],['','Multilingual formatting','Charts, tables, and layout validation'],['','Final delivery','Three client-ready presentations']].map(([state,title,copy]) => <div className={`deadline-event ${state}`} key={title}><div className="deadline-dot"/><div><h4>{title}</h4><p>{copy}</p></div></div>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="stepes-section soft">
        <div className="stepes-shell security-grid">
          <div>
            <p className="eyebrow">Confidentiality &amp; Data Handling</p>
            <h2>Protect Confidential Client Information at Every Step</h2>
            <p className="section-intro body-large">Professional-services engagements can involve some of an organization's most sensitive information. Translation workflows should reflect the confidentiality and handling requirements of the engagement.</p>
            <div className="security-examples"><span>Corporate strategy</span><span>Market-entry plans</span><span>Financial projections</span><span>Competitive intelligence</span><span>Product roadmaps</span><span>Transaction-related analysis</span><span>Proprietary research</span><span>Executive communications</span></div>
            <div className="link-cluster"><EditorialLink href="https://www.stepes.com/security/">Explore Stepes Security</EditorialLink><EditorialLink href="https://www.stepes.com/resources/security-and-compliance/">Security &amp; Compliance Resources</EditorialLink></div>
          </div>
          <div className="security-points">{securityPoints.map(([icon,title,copy]) => <div className="security-point" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell review-grid">
          <div className="review-art" aria-label="Example multilingual reviewer collaboration">
            <div className="review-stack">
              {[['ET','Engagement Team','Terminology updated','Approved'],['LO','Local Office','Regional wording reviewed','Reviewed'],['SM','Subject Expert','Industry term confirmed','Approved'],['CL','Client Reviewer','Final preference captured','In review']].map(([initials,title,sub,state]) => <div className="review-card" key={title}><div className="avatar">{initials}</div><div><strong>{title}</strong><span>{sub}</span></div><span className="review-state">{state}</span></div>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Reviewer Collaboration</p>
            <h2>Keep Global Reviewers Aligned</h2>
            <p className="section-intro body-large">Translation review becomes complicated quickly when an engagement spans multiple countries, practices, and stakeholders. Without a coordinated process, valuable feedback becomes fragmented across documents, emails, and versions.</p>
            <div className="review-benefits">
              {[["Centralize Reviewer Feedback","Coordinate linguistic and stakeholder review without relying entirely on disconnected file exchanges."],["Maintain Approved Terminology","Capture terminology decisions so reviewers do not need to resolve the same issue repeatedly."],["Preserve Client Preferences","Use accepted language and project guidance consistently across subsequent deliverables."],["Reduce Duplicate Review","Reuse approved translations and linguistic decisions where content appears again."],["Build Better Language Assets","Turn completed engagements into translation memories, glossaries, and reference resources that support future projects."]].map(([t,c]) => <div className="review-benefit" key={t}><strong>{t}</strong><p>{c}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="stepes-section soft">
        <div className="stepes-shell">
          <SectionHeading title="From One Urgent Deliverable to a Global Translation Program" intro="Professional-services translation requirements can begin with a single file and quickly become much larger. Stepes is designed to support both project-based needs and ongoing multilingual operations." center />
          <div className="scale-grid">
            {[["Project-Based","Project-Based Translation","Translate individual reports, proposals, presentations, research files, or other deliverables with professional project support."],["Engagement","Multilingual Engagement Support","Coordinate connected deliverables, terminology, reviewers, formatting, and multiple target languages throughout a client engagement."],["Enterprise","Enterprise Translation Programs","Centralize recurring translation requirements across offices, teams, practices, clients, languages, and content types."],["Continuous","Continuous Multilingual Operations","Use translation memory, terminology management, workflow automation, project visibility, and repeatable processes to support ongoing business operations."]].map(([label,title,copy]) => <div className="scale-item" key={title}><div className="scale-label">{label}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="link-cluster" style={{justifyContent:"center"}}><EditorialLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</EditorialLink><EditorialLink href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation</EditorialLink></div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell">
          <SectionHeading title="Professional Services Translation in 100+ Languages" intro="Stepes supports professional translation across major global languages and regional variants, helping firms deliver consistent client experiences across international markets." center />
          <div className="language-list">{["Spanish","French","German","Chinese","Japanese","Korean","Portuguese","Italian","Dutch","Arabic","Vietnamese","Thai"].map(l => <span className="language-pill" key={l}>{l}</span>)}</div>
          <p className="language-note">Support is also available for additional European, Asian, Middle Eastern, African, and regional language requirements.</p>
          <div style={{textAlign:'center',marginTop:14}}><EditorialLink href="https://www.stepes.com/translation-languages/">View All Translation Languages</EditorialLink></div>
        </div>
      </section>

      <section className="stepes-section dark">
        <div className="stepes-shell">
          <SectionHeading title="Why Professional Services Firms Choose Stepes" intro="Professional-services translation requires a partner that understands how expertise is created, communicated, reviewed, and delivered." center />
          <div className="why-grid">{whyItems.map(([icon,title,copy]) => <div className="why-item" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell">
          <SectionHeading title="Translation Solutions for Every Professional Services Deliverable" intro="Professional-services organizations create content across documents, digital channels, training, marketing, and live communication. Stepes provides connected language services to support the complete multilingual experience." center />
          <div className="services-grid">{relatedServices.map(([title,copy,href]) => <div className="service-row" key={title}><h3>{title}</h3><p>{copy}</p><EditorialLink href={href}>Explore {title}</EditorialLink></div>)}</div>
        </div>
      </section>

      <section className="stepes-section dense soft">
        <div className="stepes-shell">
          <SectionHeading title="Professional Services Expertise Across Client Industries" intro="Consulting and advisory organizations often work inside highly specialized client industries. Stepes combines professional-services translation experience with linguistic resources covering technical, regulated, financial, scientific, and customer-facing fields." center />
          <div className="industry-links">{industries.map(([label,href]) => <a className="industry-link" href={href} key={label}><span>{label}</span><span aria-hidden="true">→</span></a>)}</div>
        </div>
      </section>

      <section className="stepes-section">
        <div className="stepes-shell">
          <SectionHeading title="Questions About Professional Services Translation" intro="Answers to common questions about professional-services content, linguist selection, AI and human workflows, terminology, timelines, pricing, document production, and confidentiality." center />
          <div className="faq-panel">
            {faqs.map(([q, answers],i) => <details key={q} open={i===0}><summary><span>{q}</span><span className="summary-icon" aria-hidden="true">+</span></summary><div className="faq-answer">{answers.map((a,j)=><p key={j}>{a}</p>)}</div></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="stepes-shell final-cta-grid">
          <div>
            <h2>Deliver Your Best Work in Every Language</h2>
            <p>Your clients rely on your expertise. From an urgent executive presentation to a multinational consulting engagement or an ongoing global translation program, Stepes helps professional-services organizations deliver clear, consistent, professionally finished multilingual content.</p>
          </div>
          <div className="btn-row">
            <a className="btn primary" href="https://www.stepes.com/online-translation-services/"><span>Get a Translation Quote</span><Arrow /></a>
            <a className="btn secondary" href="https://www.stepes.com/contact-us/"><span>Talk to a Translation Expert</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
