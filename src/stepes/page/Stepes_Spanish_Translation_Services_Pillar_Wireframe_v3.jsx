export const pageMeta = {
  title: "Spanish Translation Services for Global Business | Stepes",
  description: "Enterprise Spanish translation services for the US, Latin America, and Spain. Expert linguists, AI-enabled workflows, ISO quality, and secure delivery.",
  canonical: "https://www.stepes.com/spanish-translation-services/"
};

const styles = `
:root {
  --magenta: #C11D63;
  --magenta-dark: #9F1D55;
  --magenta-deep: #7A1542;
  --blush: #FDF2F7;
  --pink-light: #F2A7C6;
  --ink: #17181C;
  --ink-2: #2F3138;
  --muted: #656A73;
  --line: #E3E5E9;
  --line-dark: rgba(255,255,255,.16);
  --surface: #F7F8FA;
  --surface-2: #F1F3F5;
  --dark: #202129;
  --white: #FFFFFF;
  --radius-lg: 30px;
  --radius-md: 22px;
  --shadow: 0 24px 70px rgba(25, 28, 36, .10);
  --max: 1280px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--white); color: var(--ink); font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; -webkit-font-smoothing: antialiased; }
a { color: inherit; }
button, summary, a { -webkit-tap-highlight-color: transparent; }
.page { min-width: 0; }
.shell { width: min(var(--max), calc(100% - 112px)); margin: 0 auto; }
.section { padding: 96px 0; }
.section.dense { padding: 80px 0; }
.section.soft { background: var(--surface); }
.section.blush { background: var(--blush); }
.section.dark { background: var(--dark); color: var(--white); }
.eyebrow { margin: 0 0 18px; color: var(--magenta); font-size: 11px !important; line-height: 1.25 !important; letter-spacing: .14em; font-weight: 600 !important; text-transform: uppercase; }
.dark .eyebrow { color: var(--pink-light); }
h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -.025em; }
h1 { font-size: 48px; line-height: 1.08; }
h2 { font-size: 36px; line-height: 1.14; }
h3 { font-size: 24px; line-height: 1.22; }
p, li, td, th, summary { font-size: 16px; line-height: 1.68; }
p { margin: 0; }
.lead { font-size: 18px; line-height: 1.65; color: var(--ink-2); max-width: 760px; }
.dark .lead, .dark p { color: rgba(255,255,255,.78); }
.muted { color: var(--muted); }
.source-note { margin-top: 16px; color: var(--muted); font-size: 14px; line-height: 1.5; }
.section-head { max-width: 820px; margin-bottom: 48px; }
.section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
.section-head h2 + p { margin-top: 20px; }
.btns { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
.btn { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; gap: 10px; padding: 13px 22px; border-radius: 999px; font-size: 16px; line-height: 1.2; font-weight: 600; text-decoration: none; border: 1px solid var(--line); transition: transform .18s ease, box-shadow .18s ease, background .18s ease; }
.btn:hover { transform: translateY(-1px); }
.btn.primary, .btn.primary:link, .btn.primary:visited, .btn.primary:hover, .btn.primary:active, .btn.primary:focus, .btn.primary:focus-visible { background: var(--magenta); border-color: var(--magenta); color: #fff !important; }
.btn.primary *, .btn.primary svg, .btn.primary use { color: #fff !important; stroke: #fff !important; fill: none; }
.btn.primary:hover { background: var(--magenta-dark); box-shadow: 0 12px 28px rgba(193,29,99,.22); }
.btn.secondary { background: #fff; color: var(--ink); }
.btn.secondary:hover { border-color: #C8CBD1; box-shadow: 0 10px 26px rgba(25,28,36,.08); }
.btn:focus-visible, .editorial-link:focus-visible, .decision-nav a:focus-visible, .related-links a:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
.editorial-link { display: inline-flex; min-height: 44px; align-items: center; gap: 7px; margin-top: 14px; color: var(--magenta); font-size: 16px; font-weight: 600; text-decoration: none; }
.editorial-link:hover { color: var(--magenta-deep); }
.editorial-link .arrow { transition: transform .18s ease; }
.editorial-link:hover .arrow { transform: translateX(3px); }
.icon { width: 23px; height: 23px; fill: none; stroke: currentColor; stroke-width: 1.65; stroke-linecap: round; stroke-linejoin: round; flex: 0 0 auto; }
.icon-box { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 16px; background: #F2F3F5; color: var(--ink-2); flex: 0 0 auto; }
.dark .icon-box { background: rgba(255,255,255,.08); color: #fff; }

/* Hero */
.hero { padding: 104px 0 88px; background: linear-gradient(180deg, #fff 0%, #fff 64%, #fafafb 100%); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(470px, .97fr); align-items: center; gap: 72px; }
.hero-copy { max-width: 690px; }
.hero-copy .lead { margin-top: 24px; max-width: 650px; }
.hero-support { margin-top: 16px; max-width: 650px; color: var(--muted); }
.hero-points { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 22px; margin-top: 30px; }
.hero-point { display: flex; align-items: flex-start; gap: 10px; color: var(--ink-2); font-size: 16px; line-height: 1.5; }
.check { width: 20px; height: 20px; margin-top: 2px; border-radius: 50%; background: var(--blush); color: var(--magenta); display: grid; place-items: center; flex: 0 0 auto; font-weight: 600; font-size: 12px; }
.hero-art { position: relative; min-height: 510px; border-radius: var(--radius-lg); background: #F6F7F8; border: 1px solid #ECEDEF; overflow: hidden; box-shadow: var(--shadow); }
.hero-art::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(193,29,99,.08), transparent 36%), linear-gradient(rgba(47,49,56,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(47,49,56,.035) 1px, transparent 1px); background-size: auto, 40px 40px, 40px 40px; }
.hero-art .orbit { position: absolute; border: 1px solid rgba(193,29,99,.18); border-radius: 50%; left: 50%; top: 50%; transform: translate(-50%,-50%); }
.orbit.one { width: 360px; height: 360px; }
.orbit.two { width: 250px; height: 250px; border-style: dashed; }
.es-core { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 132px; height: 132px; border-radius: 50%; background: var(--magenta); color: #fff; display: grid; place-items: center; box-shadow: 0 18px 38px rgba(193,29,99,.26); z-index: 3; }
.es-core strong { font-size: 44px; font-weight: 600; letter-spacing: -.04em; }
.es-core span { display: block; font-size: 11px; letter-spacing: .13em; text-transform: uppercase; text-align: center; margin-top: -28px; opacity: .86; }
.market-node { position: absolute; z-index: 4; width: 168px; padding: 17px 18px; background: rgba(255,255,255,.96); border: 1px solid #E3E5E9; border-radius: 18px; box-shadow: 0 12px 34px rgba(30,32,39,.10); }
.market-node strong { display: block; font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.market-node span { display: block; font-size: 14px; line-height: 1.45; color: var(--muted); }
.market-node.us { left: 34px; top: 58px; }
.market-node.latam { right: 26px; top: 82px; }
.market-node.spain { right: 54px; bottom: 48px; }
.market-node.global { left: 34px; bottom: 58px; }
.connector { position: absolute; z-index: 2; height: 1px; background: rgba(193,29,99,.32); transform-origin: left center; }
.connector.c1 { width: 142px; left: 165px; top: 166px; transform: rotate(24deg); }
.connector.c2 { width: 138px; right: 140px; top: 184px; transform: rotate(-28deg); }
.connector.c3 { width: 132px; right: 142px; bottom: 154px; transform: rotate(25deg); }
.connector.c4 { width: 140px; left: 164px; bottom: 164px; transform: rotate(-24deg); }
.art-caption { position: absolute; left: 24px; right: 24px; bottom: 18px; text-align: center; font-size: 14px; color: var(--muted); }

/* Trust */
.trust { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.trust-row { display: grid; grid-template-columns: repeat(5, 1fr); }
.trust-item { min-height: 116px; padding: 25px 24px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid var(--line); }
.trust-item:last-child { border-right: 0; }
.trust-item strong { font-size: 17px; font-weight: 600; }
.trust-item span { margin-top: 5px; color: var(--muted); font-size: 14px; line-height: 1.45; }

/* Global context */
.context-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 88px; align-items: start; }
.big-stat { padding: 34px 0 26px; border-top: 2px solid var(--magenta); border-bottom: 1px solid var(--line); }
.big-stat strong { display: block; font-size: 58px; line-height: 1; font-weight: 600; letter-spacing: -.045em; }
.big-stat span { display: block; margin-top: 13px; color: var(--muted); font-size: 16px; line-height: 1.55; }
.context-copy > p + p { margin-top: 18px; }
.question-list { margin-top: 28px; border-top: 1px solid var(--line); }
.question { display: grid; grid-template-columns: 24px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid var(--line); }
.question .marker { color: var(--magenta); font-weight: 600; line-height: 1.68; }
.environments { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 56px; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
.environment { padding: 30px; background: #fff; }
.environment + .environment { border-left: 1px solid var(--line); }
.environment p { margin-top: 12px; color: var(--muted); }

/* Decision */
.decision-layout { display: grid; grid-template-columns: 330px minmax(0,1fr); gap: 38px; align-items: start; }
.decision-nav { position: sticky; top: 24px; border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: #fff; }
.decision-nav a { display: flex; align-items: center; justify-content: space-between; gap: 18px; min-height: 64px; padding: 17px 20px; border-bottom: 1px solid var(--line); text-decoration: none; font-size: 16px; font-weight: 600; }
.decision-nav a:last-child { border-bottom: 0; }
.decision-nav a:hover { background: var(--blush); color: var(--magenta); }
.variant-stack { display: grid; gap: 18px; }
.variant { scroll-margin-top: 28px; background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 30px; }
.variant-top { display: flex; justify-content: space-between; gap: 24px; align-items: flex-start; }
.variant .tag { display: inline-flex; padding: 7px 11px; border-radius: 999px; background: var(--surface-2); color: var(--muted); font-size: 14px; line-height: 1.2; white-space: nowrap; }
.variant > p { margin-top: 14px; color: var(--muted); }
.variant ul { columns: 2; column-gap: 34px; margin: 20px 0 0; padding: 0; list-style: none; }
.variant li { break-inside: avoid; position: relative; padding: 8px 0 8px 18px; color: var(--ink-2); }
.variant li::before { content: ""; position: absolute; left: 0; top: 19px; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }

/* Table */
.table-wrap { border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: #fff; }
table { width: 100%; border-collapse: collapse; }
th { background: #F4F5F7; color: var(--ink); text-align: left; font-weight: 600; padding: 18px 20px; }
td { padding: 19px 20px; vertical-align: top; border-top: 1px solid var(--line); color: var(--ink-2); }
td:first-child { font-weight: 600; color: var(--ink); width: 20%; }
.mobile-compare { display: none; }
.compare-card { padding: 22px; border: 1px solid var(--line); border-radius: 18px; background: #fff; }
.compare-card h3 { font-size: 20px; }
.compare-card dl { margin: 14px 0 0; }
.compare-card dt { margin-top: 12px; color: var(--muted); font-size: 14px; line-height: 1.45; }
.compare-card dd { margin: 4px 0 0; font-size: 16px; line-height: 1.6; color: var(--ink-2); }
.strategy-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-top: 56px; }
.strategy { padding: 30px 30px 32px 0; }
.strategy + .strategy { padding-left: 30px; border-left: 1px solid var(--line); }
.strategy p { margin-top: 12px; color: var(--muted); }

/* Service rows */
.service-list { border-top: 1px solid var(--line); }
.service-row { display: grid; grid-template-columns: 72px minmax(210px,.55fr) minmax(0,1fr) 225px; gap: 24px; align-items: start; padding: 30px 0; border-bottom: 1px solid var(--line); }
.service-row p { color: var(--muted); }
.service-row ul { margin: 0; padding-left: 18px; }
.service-row li { margin: 3px 0; color: var(--ink-2); }
.service-action { align-self: center; justify-self: end; display: grid; justify-items: end; }
.service-action .editorial-link { margin-top: 0; }
.service-action .editorial-link + .editorial-link { margin-top: 4px; }
.direction-band { margin-top: 64px; display: grid; grid-template-columns: repeat(3,1fr); border-radius: var(--radius-lg); overflow: hidden; background: var(--dark); color: #fff; }
.direction { padding: 32px; }
.direction + .direction { border-left: 1px solid var(--line-dark); }
.direction p { margin-top: 12px; color: rgba(255,255,255,.72); }

/* Industries */
.industry-grid { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line-dark); }
.industry { display: grid; grid-template-columns: 54px 1fr; gap: 18px; padding: 30px 30px 30px 0; border-bottom: 1px solid var(--line-dark); }
.industry:nth-child(even) { padding-left: 30px; border-left: 1px solid var(--line-dark); }
.industry p { margin-top: 10px; }
.industry .editorial-link { color: var(--pink-light); }

/* AI */
.ai-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; align-items: start; }
.ai-issues { border-top: 1px solid var(--line); margin-top: 28px; }
.ai-issue { display: flex; align-items: flex-start; gap: 13px; padding: 13px 0; border-bottom: 1px solid var(--line); }
.ai-issue .marker { color: var(--magenta); line-height: 1.68; }
.workflow-tier { padding: 26px 0; border-top: 1px solid var(--line); display: grid; grid-template-columns: 56px 1fr; gap: 18px; }
.workflow-tier:last-child { border-bottom: 1px solid var(--line); }
.workflow-tier > .icon-box { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); color: var(--magenta); }
.workflow-tier p { margin-top: 10px; color: var(--muted); }
.workflow-tier ul { margin: 14px 0 0; padding-left: 18px; columns: 2; }
.risk-matrix { margin-top: 56px; }
.risk-cards { display: none; }
.risk-card { padding: 20px; border: 1px solid var(--line); border-radius: 18px; background: #fff; }
.risk-card .risk-label { display: inline-flex; margin-bottom: 12px; color: var(--magenta); font-size: 11px; line-height: 1.25; letter-spacing: .12em; font-weight: 600; text-transform: uppercase; }
.risk-card h3 { font-size: 20px; }
.risk-card dl { margin: 14px 0 0; }
.risk-card dt { margin-top: 12px; color: var(--muted); font-size: 14px; line-height: 1.45; }
.risk-card dd { margin: 4px 0 0; font-size: 16px; line-height: 1.6; color: var(--ink-2); }

/* Language assets */
.asset-layout { display: grid; grid-template-columns: minmax(0,1fr) 520px; gap: 68px; align-items: center; }
.asset-list { border-top: 1px solid var(--line); margin-top: 32px; }
.asset-item { padding: 21px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 48px 1fr; gap: 16px; }
.asset-item p { margin-top: 8px; color: var(--muted); }
.asset-visual { position: relative; min-height: 500px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow); }
.asset-visual h3 { font-size: 20px; }
.asset-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
.asset-header span { font-size: 14px; color: var(--muted); }
.source-box { margin-top: 24px; padding: 18px; border-radius: 16px; background: var(--surface); }
.source-box .label, .output .label { display: block; font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--magenta); margin-bottom: 8px; }
.language-layer { margin: 22px 0; padding: 18px; border: 1px dashed rgba(193,29,99,.38); border-radius: 16px; background: var(--blush); }
.language-layer strong { font-size: 16px; font-weight: 600; }
.language-layer .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.chip { padding: 7px 10px; border-radius: 999px; background: #fff; border: 1px solid #E8D6DE; font-size: 14px; color: var(--ink-2); }
.outputs { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
.output { min-height: 126px; padding: 15px; border-radius: 15px; border: 1px solid var(--line); }
.output strong { display: block; font-size: 16px; font-weight: 600; }
.output p { margin-top: 8px; font-size: 16px; line-height: 1.5; color: var(--muted); }

/* Quality/process */
.quality-grid { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
.quality-item { display: grid; grid-template-columns: 54px 1fr; gap: 18px; padding: 27px 28px 27px 0; border-bottom: 1px solid var(--line); }
.quality-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
.quality-item p { margin-top: 8px; color: var(--muted); }
.process { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
.process-step { min-height: 240px; padding: 28px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
.process-no { display: block; color: var(--pink-light); font-size: 14px; font-weight: 600; margin-bottom: 38px; }
.process-step p { margin-top: 12px; }

/* Platform */
.platform-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 62px; align-items: start; }
.platform-list { margin-top: 30px; border-top: 1px solid var(--line); }
.platform-item { padding: 19px 0; border-bottom: 1px solid var(--line); }
.platform-item strong { display: block; font-size: 17px; font-weight: 600; }
.platform-item p { margin-top: 6px; color: var(--muted); }
.platform-panel { border-radius: var(--radius-lg); background: var(--dark); color: #fff; padding: 28px; min-height: 540px; }
.platform-toolbar { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--line-dark); }
.platform-toolbar span { font-size: 14px; color: rgba(255,255,255,.62); }
.status-pill { display: inline-flex; padding: 7px 10px; border-radius: 999px; background: rgba(242,167,198,.14); color: var(--pink-light) !important; font-size: 14px !important; }
.workflow-board { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 22px; }
.board-card { padding: 18px; border-radius: 17px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.11); }
.board-card.wide { grid-column: 1 / -1; }
.board-card .label { color: var(--pink-light); font-size: 11px; text-transform: uppercase; letter-spacing: .12em; font-weight: 600; }
.board-card strong { display: block; margin-top: 9px; font-size: 16px; font-weight: 600; }
.board-card p { margin-top: 8px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,.72); }
.progress { height: 7px; border-radius: 999px; overflow: hidden; background: rgba(255,255,255,.12); margin-top: 14px; }
.progress span { display: block; width: 72%; height: 100%; background: var(--pink-light); }

/* Why / programs / pricing */
.why-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); }
.why-item { padding: 28px 28px 28px 0; border-bottom: 1px solid var(--line); }
.why-item:nth-child(3n+2), .why-item:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid var(--line); }
.why-item p { margin-top: 10px; color: var(--muted); }
.program-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
.program { border: 1px solid var(--line); border-radius: 22px; padding: 28px; background: #fff; }
.program .label { color: var(--magenta); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; }
.program p { margin-top: 12px; color: var(--muted); }
.program ul { margin: 18px 0 0; padding-left: 18px; }
.price-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; align-items: start; }
.price-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 30px; background: #fff; }
.price-factor { display: grid; grid-template-columns: 46px 1fr; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--line); }
.price-factor:last-child { border-bottom: 0; }
.price-factor > .icon-box { width: 42px; height: 42px; border-radius: 14px; background: var(--blush); color: var(--magenta); }
.price-factor p { margin-top: 5px; color: var(--muted); }
.turnaround { margin-top: 30px; padding-top: 26px; border-top: 1px solid var(--line); }
.turnaround p { margin-top: 10px; color: var(--muted); }

/* FAQ */
.faq-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
details { border-bottom: 1px solid var(--line); }
details:last-child { border-bottom: 0; }
summary { min-height: 74px; cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 26px; font-weight: 600; color: var(--ink); }
summary::-webkit-details-marker { display: none; }
summary::after { content: "+"; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; background: var(--surface); color: var(--magenta); flex: 0 0 auto; font-size: 19px; font-weight: 400; }
details[open] summary::after { content: "−"; }
.faq-answer { padding: 0 76px 24px 26px; max-width: 900px; color: var(--muted); }
.faq-answer p + p { margin-top: 12px; }

/* Market links and related */
.market-links { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); }
.market-link { padding: 28px 28px 28px 0; border-bottom: 1px solid var(--line); }
.market-link:nth-child(3n+2), .market-link:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid var(--line); }
.market-link p { margin-top: 10px; color: var(--muted); }
.related-links { display: flex; flex-wrap: wrap; gap: 10px 24px; padding-top: 30px; border-top: 1px solid var(--line); }
.related-links a { display: inline-flex; min-height: 44px; align-items: center; color: var(--magenta); font-size: 16px; font-weight: 600; text-decoration: none; }

/* CTA */
.final { padding: 96px 0; }
.final-panel { position: relative; overflow: hidden; border-radius: var(--radius-lg); background: var(--blush); border: 1px solid #F0DCE5; padding: 64px; display: grid; grid-template-columns: 1fr 340px; gap: 50px; align-items: center; }
.final-panel::after { content: "ES"; position: absolute; right: 14px; bottom: -78px; color: rgba(193,29,99,.07); font-size: 260px; line-height: 1; font-weight: 600; letter-spacing: -.08em; pointer-events: none; }
.final-copy { position: relative; z-index: 2; max-width: 760px; }
.final-copy p { margin-top: 20px; font-size: 18px; line-height: 1.65; color: var(--ink-2); }
.final-proof { position: relative; z-index: 2; border-left: 1px solid #E8CDD9; padding-left: 34px; }
.final-proof div { padding: 12px 0; border-bottom: 1px solid #E8CDD9; font-size: 16px; color: var(--ink-2); }
.final-proof div:last-child { border-bottom: 0; }

@media (max-width: 1180px) {
  .shell { width: min(var(--max), calc(100% - 80px)); }
  .hero-grid { grid-template-columns: 1fr 440px; gap: 44px; }
  .hero-art { min-height: 470px; }
  .market-node { width: 152px; padding: 14px; }
  .asset-layout { grid-template-columns: minmax(0,1fr) 460px; gap: 44px; }
  .service-row { grid-template-columns: 62px 210px 1fr 190px; gap: 18px; }
}
@media (max-width: 900px) {
  .shell { width: calc(100% - 48px); }
  .section { padding: 80px 0; }
  .hero { padding: 88px 0 76px; }
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
  h3 { font-size: 22px; }
  .hero-grid, .context-grid, .ai-grid, .asset-layout, .platform-grid, .price-layout { grid-template-columns: 1fr; }
  .hero-copy { max-width: 760px; }
  .hero-art { width: 100%; max-width: 650px; margin: 0 auto; }
  .trust-row { grid-template-columns: repeat(6,1fr); }
  .trust-item { grid-column: span 2; }
  .trust-item:nth-child(3) { border-right: 0; }
  .trust-item:nth-child(4), .trust-item:nth-child(5) { grid-column: span 3; border-top: 1px solid var(--line); }
  .trust-item:nth-child(4) { border-right: 1px solid var(--line); }
  .environments { grid-template-columns: 1fr; }
  .environment + .environment { border-left: 0; border-top: 1px solid var(--line); }
  .decision-layout { grid-template-columns: 1fr; }
  #comparison .table-wrap, #ai-human .risk-matrix { display: none; }
  .mobile-compare, .risk-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .decision-nav { position: static; display: grid; grid-template-columns: repeat(3,1fr); }
  .decision-nav a { border-right: 1px solid var(--line); }
  .decision-nav a:nth-child(3n) { border-right: 0; }
  .variant ul { columns: 1; }
  .strategy-grid { grid-template-columns: 1fr; }
  .strategy, .strategy + .strategy { padding: 24px 0; border-left: 0; border-top: 1px solid var(--line); }
  .strategy:first-child { border-top: 0; }
  .service-row { grid-template-columns: 54px 1fr; }
  .service-row > p, .service-row > ul, .service-action { grid-column: 2; }
  .service-action { justify-self: start; justify-items: start; }
  .direction-band { grid-template-columns: 1fr; }
  .direction + .direction { border-left: 0; border-top: 1px solid var(--line-dark); }
  .workflow-tier ul { columns: 1; }
  .asset-visual { max-width: 620px; }
  .process { grid-template-columns: repeat(2,1fr); }
  .program-grid { grid-template-columns: 1fr; }
  .final-panel { grid-template-columns: 1fr; padding: 48px; }
  .final-proof { border-left: 0; border-top: 1px solid #E8CDD9; padding: 22px 0 0; }
}
@media (max-width: 640px) {
  .shell { width: calc(100% - 40px); }
  .section, .section.dense { padding: 68px 0; }
  .hero { padding: 72px 0 64px; }
  h1 { font-size: 38px; }
  h2 { font-size: 30px; }
  h3 { font-size: 20px; }
  .lead { font-size: 18px; }
  .section-head { margin-bottom: 36px; }
  .hero-grid { gap: 46px; }
  .hero-points { grid-template-columns: 1fr; }
  .btns { flex-direction: column; }
  .btn { width: 100%; }
  .hero-art { min-height: 440px; border-radius: 24px; }
  .orbit.one { width: 276px; height: 276px; }
  .orbit.two { width: 190px; height: 190px; }
  .es-core { width: 104px; height: 104px; }
  .es-core strong { font-size: 36px; }
  .market-node { width: 120px; min-height: 56px; padding: 11px 9px; text-align: center; display: grid; place-items: center; }
  .market-node strong { font-size: 15px; line-height: 1.3; }
  .market-node span { display: none; }
  .market-node.us { left: 12px; top: 40px; }
  .market-node.latam { right: 10px; top: 62px; }
  .market-node.spain { right: 16px; bottom: 42px; }
  .market-node.global { left: 12px; bottom: 54px; }
  .connector { display: none; }
  .art-caption { display: none; }
  .trust-row { grid-template-columns: 1fr 1fr; }
  .trust-item, .trust-item:nth-child(4), .trust-item:nth-child(5) { grid-column: auto; min-height: 100px; padding: 20px 14px; }
  .trust-item:nth-child(2n) { border-right: 0; }
  .trust-item:nth-child(3) { border-right: 1px solid var(--line); }
  .trust-item:nth-child(n+3) { border-top: 1px solid var(--line); }
  .trust-item:last-child { grid-column: 1 / -1; border-right: 0; }
  .big-stat strong { font-size: 48px; }
  .decision-nav { grid-template-columns: 1fr 1fr; }
  .decision-nav a:nth-child(3n) { border-right: 1px solid var(--line); }
  .decision-nav a:nth-child(2n) { border-right: 0; }
  .variant { padding: 24px 20px; }
  .variant-top { display: block; }
  .variant .tag { margin-top: 12px; }
  .mobile-compare, .risk-cards { grid-template-columns: 1fr; gap: 12px; }
  .compare-card { padding: 20px; }
  .compare-card h3 { font-size: 18px; }
  .service-row { grid-template-columns: 48px 1fr; padding: 25px 0; }
  .service-row ul { padding-left: 16px; }
  .industry-grid, .quality-grid, .why-grid, .market-links { grid-template-columns: 1fr; }
  .industry, .industry:nth-child(even), .quality-item, .quality-item:nth-child(even), .why-item, .why-item:nth-child(3n+2), .why-item:nth-child(3n+3), .market-link, .market-link:nth-child(3n+2), .market-link:nth-child(3n+3) { padding: 24px 0; border-left: 0; }
  .industry:nth-child(even), .quality-item:nth-child(even), .why-item:nth-child(3n+2), .why-item:nth-child(3n+3), .market-link:nth-child(3n+2), .market-link:nth-child(3n+3) { border-top: 0; }
  .workflow-tier { grid-template-columns: 46px 1fr; }
  .asset-visual { min-height: auto; padding: 20px; }
  .outputs { grid-template-columns: 1fr; }
  .output { min-height: 0; }
  .process { grid-template-columns: 1fr; border-left: 0; }
  .process-step { min-height: 0; border-left: 1px solid var(--line-dark); }
  .process-no { margin-bottom: 20px; }
  .workflow-board { grid-template-columns: 1fr; }
  .board-card.wide { grid-column: auto; }
  .platform-panel { padding: 20px; min-height: 0; }
  .price-panel { padding: 24px 20px; }
  summary { padding: 18px 20px; }
  .faq-answer { padding: 0 54px 22px 20px; }
  .final { padding: 68px 0; }
  .final-panel { padding: 38px 24px; border-radius: 24px; }
  .final-panel::after { display: none; }
  .related-links { display: grid; gap: 4px; }
}
@media (max-width: 360px) {
  .market-node { width: 112px; }
  .market-node.us, .market-node.global { left: 7px; }
  .market-node.latam, .market-node.spain { right: 7px; }
  .decision-nav { grid-template-columns: 1fr; }
  .decision-nav a, .decision-nav a:nth-child(3n), .decision-nav a:nth-child(2n) { border-right: 0; }
}
`;

const markup = `
<svg aria-hidden="true" width="0" height="0" style="position:absolute"><defs>
<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9z"/></symbol>
<symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></symbol>
<symbol id="i-screen" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></symbol>
<symbol id="i-code" viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></symbol>
<symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 3v18M5 6h14M5 6l-3 6h6zM19 6l-3 6h6zM8 21h8"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.8l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8z"/><path d="M8 13h2l1-3 2 6 1-3h2"/></symbol>
<symbol id="i-megaphone" viewBox="0 0 24 24"><path d="M4 13v-2l13-5v12zM4 11H2v4h5M7 15l2 5h3l-2-6"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></symbol>
<symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 13h5"/></symbol>
<symbol id="i-factory" viewBox="0 0 24 24"><path d="M3 21V10l6 3V8l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/></symbol>
<symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></symbol>
<symbol id="i-database" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></symbol>
<symbol id="i-flow" viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="5" rx="1"/><rect x="14" y="15" width="7" height="5" rx="1"/><path d="M10 6.5h4a4 4 0 0 1 4 4V15M14 17.5h-4a4 4 0 0 1-4-4V9"/></symbol>
<symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></symbol>
<symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6M15 15c3 0 5 1.7 5 5"/></symbol>
</defs></svg>

<main class="page">
  <section class="hero" id="top">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">Spanish for Global Markets</p>
        <h1>Enterprise Spanish Translation Services</h1>
        <p class="lead">Reach Spanish-speaking customers, patients, employees, and business partners with language created for their market, culture, and purpose.</p>
        <p class="hero-support">Stepes provides professional Spanish translation and localization for the United States, Latin America, Spain, and international audiences—combining qualified linguists, industry expertise, AI-enabled workflows, and governed enterprise quality controls.</p>
        <div class="btns">
          <a class="btn primary" href="https://app.stepes.com/quote/">Get a Spanish Translation Quote <span aria-hidden="true">→</span></a>
          <a class="btn secondary" href="https://www.stepes.com/contact-us/">Talk to a Spanish Localization Expert</a>
        </div>
        <div class="hero-points">
          <div class="hero-point"><span class="check">✓</span><span>US, Latin American, and European Spanish</span></div>
          <div class="hero-point"><span class="check">✓</span><span>Professional Human and AI-Assisted Workflows</span></div>
          <div class="hero-point"><span class="check">✓</span><span>Secure Enterprise Translation</span></div>
          <div class="hero-point"><span class="check">✓</span><span>Industry-Specialized Spanish Linguists</span></div>
        </div>
      </div>
      <div class="hero-art" role="img" aria-label="Spanish localization system connecting US, Latin American, European, and international markets">
        <div class="orbit one"></div><div class="orbit two"></div>
        <div class="connector c1"></div><div class="connector c2"></div><div class="connector c3"></div><div class="connector c4"></div>
        <div class="es-core"><strong>ES</strong><span>Shared Core</span></div>
        <div class="market-node us"><strong>US Spanish</strong><span>Healthcare, finance, government, workforce</span></div>
        <div class="market-node latam"><strong>Latin America</strong><span>Regional or country-specific localization</span></div>
        <div class="market-node spain"><strong>Spain</strong><span>European Spanish and EU-facing content</span></div>
        <div class="market-node global"><strong>International</strong><span>Broadly accessible shared content</span></div>
        <div class="art-caption">One governed Spanish language system, adapted for every audience.</div>
      </div>
    </div>
  </section>

  <section class="trust" aria-label="Stepes quality and scale">
    <div class="shell trust-row">
      <div class="trust-item"><strong>ISO 17100</strong><span>Translation services</span></div>
      <div class="trust-item"><strong>ISO 9001</strong><span>Quality management</span></div>
      <div class="trust-item"><strong>ISO 13485</strong><span>Medical device quality</span></div>
      <div class="trust-item"><strong>100+ Languages</strong><span>Global program coverage</span></div>
      <div class="trust-item"><strong>AI + Human Expertise</strong><span>Risk-matched workflows</span></div>
    </div>
  </section>

  <section class="section" id="global-opportunity">
    <div class="shell">
      <div class="context-grid">
        <div>
          <p class="eyebrow">One Language, Many Markets</p>
          <h2>Spanish Translation for a Global Business World</h2>
          <div class="big-stat"><strong>630M+</strong><span>Potential Spanish speakers worldwide, including more than 520 million native speakers.</span></div>
          <div class="big-stat"><strong>13.6%</strong><span>Of people age five and older in the United States speak Spanish at home.</span></div>
          <p class="source-note">Sources: Instituto Cervantes, 2025; US Census Bureau, 2024 American Community Survey.</p>
        </div>
        <div class="context-copy">
          <p class="lead">Spanish gives organizations extraordinary global reach. It also creates a localization challenge: Spanish is not one uniform market.</p>
          <p>A translation written for Spain may sound foreign in Mexico. A neutral Latin American translation may be understandable in the United States but fail to reflect US institutions, customer expectations, or language-access needs. Marketing that works in Colombia may require changes for Argentina, Chile, or Puerto Rico.</p>
          <p>Stepes defines the market, audience, content risk, terminology, and review model before production begins.</p>
          <div class="question-list">
            <div class="question"><span class="marker">01</span><span>Who will read, hear, or interact with the content?</span></div>
            <div class="question"><span class="marker">02</span><span>Where is the audience located?</span></div>
            <div class="question"><span class="marker">03</span><span>How will the translated content be used?</span></div>
            <div class="question"><span class="marker">04</span><span>What are the consequences of a translation error?</span></div>
          </div>
        </div>
      </div>
      <div class="environments">
        <article class="environment"><h3>United States</h3><p>US Spanish supports healthcare access, financial communication, government services, workforce engagement, education, customer experience, retail, insurance, and digital products.</p></article>
        <article class="environment"><h3>Latin America</h3><p>Organizations may use neutral regional Spanish, create country-specific translations, or build a shared core that is adapted for Mexico, Central America, the Caribbean, and South America.</p></article>
        <article class="environment"><h3>Spain and the EU</h3><p>European Spanish follows vocabulary, grammar, tone, and locale conventions expected in Spain and across Spanish-facing legal, medical, financial, technical, and consumer programs.</p></article>
      </div>
    </div>
  </section>

  <section class="section soft" id="which-spanish">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">Spanish Variant Decision Framework</p>
        <h2>Which Spanish Does Your Business Need?</h2>
        <p class="lead">Spanish variants are generally mutually intelligible, but differences in vocabulary, grammar, forms of address, tone, technical terminology, and locale conventions affect how natural and credible professional content feels.</p>
      </div>
      <div class="decision-layout">
        <nav class="decision-nav" aria-label="Spanish variants">
          <a href="https://www.stepes.com/spanish-translation-services/#us-spanish">US Spanish <span>→</span></a>
          <a href="https://www.stepes.com/spanish-translation-services/#latin-american-spanish">Latin American <span>→</span></a>
          <a href="https://www.stepes.com/spanish-translation-services/#mexican-spanish">Mexican <span>→</span></a>
          <a href="https://www.stepes.com/spanish-translation-services/#european-spanish">European <span>→</span></a>
          <a href="https://www.stepes.com/spanish-translation-services/#international-spanish">International <span>→</span></a>
          <a href="https://www.stepes.com/spanish-translation-services/#country-specific-spanish">Country-Specific <span>→</span></a>
        </nav>
        <div class="variant-stack">
          <article class="variant" id="us-spanish">
            <div class="variant-top"><h3>US Spanish</h3><span class="tag">Spanish-speaking US audiences</span></div>
            <p>US Spanish is written for the US environment rather than imported unchanged from a single Latin American market. It is especially important in healthcare, financial services, insurance, government, education, workforce communication, legal notices, retail, and public information.</p>
            <ul><li>US institutions, laws, services, and business terminology</li><li>Diverse national and cultural backgrounds</li><li>Bilingual and heritage-speaker language patterns</li><li>Clear-language and accessibility requirements</li><li>US date, currency, address, and measurement conventions</li><li>Terminology used by US healthcare and public-sector organizations</li></ul>
            <a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/us-spanish-translation/">US Spanish Translation Services <span class="arrow">→</span></a>
          </article>
          <article class="variant" id="latin-american-spanish">
            <div class="variant-top"><h3>Latin American Spanish</h3><span class="tag">Multi-country regional programs</span></div>
            <p>Latin American Spanish may refer to a neutral regional version, a market-specific translation, or a shared core that will later be adapted for individual countries.</p>
            <ul><li>Software and digital product localization</li><li>Technical documentation and training</li><li>Regional corporate communication</li><li>Neutral terminology for broad comprehension</li><li>Country adaptation for marketing and regulation</li><li>Shared linguistic assets across multiple markets</li></ul>
            <a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/latin-american-spanish-translation/">Latin American Spanish Translation Services <span class="arrow">→</span></a>
          </article>
          <article class="variant" id="mexican-spanish">
            <div class="variant-top"><h3>Mexican Spanish</h3><span class="tag">Mexico-specific communication</span></div>
            <p>Mexican Spanish is valuable for organizations with manufacturing operations, suppliers, employees, customers, or regulated products in Mexico.</p>
            <ul><li>Technical and manufacturing terminology</li><li>Product and safety information</li><li>Consumer vocabulary and market conventions</li><li>Government and regulatory references</li><li>Human resources and workforce communication</li><li>Locally appropriate marketing tone</li></ul>
            <a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/mexican-spanish-translation/">Mexican Spanish Translation Services <span class="arrow">→</span></a>
          </article>
          <article class="variant" id="european-spanish">
            <div class="variant-top"><h3>European Spanish</h3><span class="tag">Spain and Spain-facing EU content</span></div>
            <p>European Spanish, often called Spanish for Spain or Castilian Spanish, follows vocabulary, grammatical conventions, tone, and locale formats familiar to audiences in Spain.</p>
            <ul><li><strong>ordenador</strong> rather than <strong>computadora</strong></li><li><strong>móvil</strong> rather than <strong>celular</strong></li><li><strong>coche</strong> rather than <strong>carro</strong> or <strong>auto</strong></li><li><strong>vosotros</strong> in many informal plural contexts</li><li>Spain-specific legal, medical, and financial terminology</li><li>European dates, numbers, measurements, and currency</li></ul>
            <a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/european-spanish-translation/">European Spanish Translation Services <span class="arrow">→</span></a>
          </article>
          <article class="variant" id="international-spanish">
            <div class="variant-top"><h3>International Spanish</h3><span class="tag">Broad global comprehension</span></div>
            <p>International Spanish uses accessible terminology and sentence structures while limiting expressions strongly associated with one market.</p>
            <ul><li>Global corporate communication</li><li>General product documentation</li><li>International training</li><li>Central knowledge bases</li><li>Shared internal policies</li><li>Content prepared for later regional adaptation</li></ul>
          </article>
          <article class="variant" id="country-specific-spanish">
            <div class="variant-top"><h3>Country-Specific Spanish</h3><span class="tag">Maximum local relevance</span></div>
            <p>Country-specific localization is recommended when persuasion, regulation, local institutions, cultural expectations, or user trust materially affect the content’s success.</p>
            <ul><li>Legal and regulatory content</li><li>Patient and healthcare communication</li><li>Product labeling and packaging</li><li>Consumer marketing and eCommerce</li><li>Voice-over and multimedia</li><li>Financial disclosures and public information</li></ul>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="comparison">
    <div class="shell">
      <div class="section-head center">
        <h2>Compare Spanish Variants at a Glance</h2>
        <p class="lead">The most efficient approach is not always one translation for every market. Stepes helps balance global reuse with the level of local relevance each content type requires.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Spanish Variant</th><th>Primary Audience</th><th>Common Use Cases</th><th>Key Considerations</th></tr></thead>
          <tbody>
            <tr><td>US Spanish</td><td>Spanish speakers in the United States</td><td>Healthcare, finance, government, insurance, workforce, retail</td><td>US context, diverse origins, accessibility, bilingual audiences</td></tr>
            <tr><td>Neutral Latin American</td><td>Multiple Latin American countries</td><td>Technical content, software, training, shared documentation</td><td>Broad comprehension with limited local expressions</td></tr>
            <tr><td>Mexican Spanish</td><td>Mexico</td><td>Manufacturing, automotive, retail, healthcare, HR</td><td>Mexico-specific vocabulary, institutions, and market conventions</td></tr>
            <tr><td>European Spanish</td><td>Spain</td><td>EU regulatory, software, legal, medical, financial, consumer</td><td>Spain vocabulary, grammar, tone, and locale formats</td></tr>
            <tr><td>International Spanish</td><td>Global audiences</td><td>Corporate, informational, and reusable content</td><td>Neutrality, accessibility, and future adaptation</td></tr>
            <tr><td>Country-Specific Spanish</td><td>Individual national markets</td><td>Marketing, legal, regulated, and customer-facing content</td><td>Local terminology, culture, institutions, and user expectations</td></tr>
          </tbody>
        </table>
      </div>
      <div class="mobile-compare" aria-label="Spanish variant comparison">
        <article class="compare-card"><h3>US Spanish</h3><dl><dt>Audience</dt><dd>Spanish speakers in the United States</dd><dt>Use Cases</dt><dd>Healthcare, finance, government, workforce, and retail</dd><dt>Considerations</dt><dd>US context, diverse origins, accessibility, bilingual audiences</dd></dl></article>
        <article class="compare-card"><h3>Neutral Latin American</h3><dl><dt>Audience</dt><dd>Multiple Latin American countries</dd><dt>Use Cases</dt><dd>Technical content, software, training, shared documentation</dd><dt>Considerations</dt><dd>Broad comprehension with limited local expressions</dd></dl></article>
        <article class="compare-card"><h3>Mexican Spanish</h3><dl><dt>Audience</dt><dd>Mexico</dd><dt>Use Cases</dt><dd>Manufacturing, automotive, retail, healthcare, HR</dd><dt>Considerations</dt><dd>Mexico-specific vocabulary, institutions, and market conventions</dd></dl></article>
        <article class="compare-card"><h3>European Spanish</h3><dl><dt>Audience</dt><dd>Spain</dd><dt>Use Cases</dt><dd>EU regulatory, software, legal, medical, financial, consumer</dd><dt>Considerations</dt><dd>Spain vocabulary, grammar, tone, and locale formats</dd></dl></article>
        <article class="compare-card"><h3>International Spanish</h3><dl><dt>Audience</dt><dd>Global audiences</dd><dt>Use Cases</dt><dd>Corporate, informational, and reusable content</dd><dt>Considerations</dt><dd>Neutrality, accessibility, and future adaptation</dd></dl></article>
        <article class="compare-card"><h3>Country-Specific Spanish</h3><dl><dt>Audience</dt><dd>Individual national markets</dd><dt>Use Cases</dt><dd>Marketing, legal, regulated, and customer-facing content</dd><dt>Considerations</dt><dd>Local terminology, culture, institutions, and user expectations</dd></dl></article>
      </div>
      <div class="strategy-grid">
        <article class="strategy"><h3>One Shared Spanish Version</h3><p>Use neutral or international Spanish when content is informational, broadly understandable, and not highly market-specific.</p></article>
        <article class="strategy"><h3>Separate Regional Versions</h3><p>Develop US, Latin American, and European Spanish when audiences have clearly different commercial, linguistic, or regulatory expectations.</p></article>
        <article class="strategy"><h3>Core Spanish With Adaptation</h3><p>Create a shared foundation, then adapt only the terminology, formats, references, and cultural elements that vary by market.</p></article>
      </div>
      <div class="btns" style="justify-content:center"><a class="btn secondary" href="https://www.stepes.com/contact-us/">Ask Which Spanish Variant Is Right for Your Project</a></div>
    </div>
  </section>

  <section class="section soft" id="services">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">Complete Content Coverage</p>
        <h2>Professional Spanish Translation and Localization Services</h2>
        <p class="lead">Stepes supports Spanish content across the enterprise content lifecycle—from individual documents to continuously updated websites, software products, training programs, and multimedia.</p>
      </div>
      <div class="service-list">
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-doc"></use></svg></div><h3>Document Translation</h3><p>Business, legal, technical, medical, financial, regulatory, and corporate documents translated accurately while preserving structure, formatting, terminology, and intended use.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/document-translation-services/">Document Translation Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-screen"></use></svg></div><h3>Website Translation</h3><p>Corporate websites, product pages, eCommerce, help centers, knowledge bases, metadata, forms, and transactional content localized for language, market, search behavior, and customer journey.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/website-translation-services/">Website Translation Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-code"></use></svg></div><h3>Software and App Localization</h3><p>User interfaces, menus, notifications, error messages, onboarding, in-app help, release notes, app stores, support content, and conversational experiences with protected variables and in-context QA.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-factory"></use></svg></div><h3>Technical Translation</h3><p>Operating manuals, installation guides, maintenance procedures, engineering specifications, safety documentation, SOPs, product data sheets, equipment interfaces, and technical training.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/technical-translation-services/">Technical Translation Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-scale"></use></svg></div><h3>Legal and Certified Translation</h3><p>Contracts, corporate policies, litigation materials, privacy notices, employment documents, official records, academic records, certificates, and jurisdiction-specific certified or sworn translation support.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/legal-translation-services/">Legal Translation Services <span class="arrow">→</span></a><a class="editorial-link" href="https://www.stepes.com/certified-translation-services/">Certified Translation Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-heart"></use></svg></div><h3>Medical and Life Sciences Translation</h3><p>Clinical trial documentation, patient-facing materials, informed consent, eCOA, medical device IFUs, labeling, safety content, regulatory submissions, pharmacovigilance, and scientific communication.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/spanish-medical-translation/">Spanish Medical Translation <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-megaphone"></use></svg></div><h3>Marketing and eCommerce Localization</h3><p>Campaigns, product launches, brand messaging, social content, product catalogs, marketplace listings, checkout content, customer emails, search metadata, and market-specific transcreation.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/marketing-translation-services/">Marketing Translation Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-play"></use></svg></div><h3>eLearning and Multimedia</h3><p>Training courses, LMS content, assessments, simulations, narration, voice-over, subtitles, closed captions, dubbing, on-screen text, synchronization, course rebuilding, and functional QA.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services <span class="arrow">→</span></a><a class="editorial-link" href="https://www.stepes.com/voice-over-services/">Voice-Over Services <span class="arrow">→</span></a></div></article>
        <article class="service-row"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-chat"></use></svg></div><h3>Spanish Interpretation</h3><p>Video remote, over-the-phone, on-site, medical, legal, business-meeting, training, conference, and customer communication interpretation assigned by market, subject matter, and setting.</p><div class="service-action"><a class="editorial-link" href="https://www.stepes.com/interpretation-services/">Interpretation Services <span class="arrow">→</span></a></div></article>
      </div>
      <div class="direction-band">
        <article class="direction"><h3>English to Spanish</h3><p>Support US language access, expansion into Latin America, product launches in Spain, global training, websites, software, healthcare, and workforce communication.</p></article>
        <article class="direction"><h3>Spanish to English</h3><p>Translate cross-border legal, clinical, regulatory, research, business, support, due-diligence, and reporting content into clear professional English.</p></article>
        <article class="direction"><h3>Spanish to 100+ Languages</h3><p>Centralize global programs originating in Spain or Latin America with coordinated terminology, translation memory, review, reporting, and delivery.</p></article>
      </div>
    </div>
  </section>

  <section class="section dark" id="industries">
    <div class="shell">
      <div class="section-head">
        <h2>Spanish Translation Expertise by Industry</h2>
        <p class="lead">Technical accuracy, terminology, regulation, audience expectations, and risk change significantly by sector. Stepes aligns Spanish linguists and review workflows with the content’s real-world purpose.</p>
      </div>
      <div class="industry-grid">
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-heart"></use></svg></div><div><h3>Life Sciences and Medical Devices</h3><p>Clinical protocols, patient materials, outcome assessments, IFUs, labeling, safety reports, regulatory correspondence, and training with controlled terminology and review.</p><a class="editorial-link" href="https://www.stepes.com/life-sciences-translation-services/">Life Sciences Translation <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-users"></use></svg></div><div><h3>Healthcare</h3><p>Patient instructions, benefits information, enrollment, health education, digital health, public health, care management, and insurance communication in clear, accessible, market-appropriate Spanish.</p><a class="editorial-link" href="https://www.stepes.com/healthcare-translation-services/">Healthcare Translation <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-scale"></use></svg></div><div><h3>Legal and Corporate Compliance</h3><p>Contracts, privacy, employment, investigations, litigation, intellectual property, cross-border transactions, and compliance content with defined terminology and approvals.</p><a class="editorial-link" href="https://www.stepes.com/corporate-legal-translation-services/">Legal Teams <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-chart"></use></svg></div><div><h3>Financial Services and Insurance</h3><p>Banking, insurance policies, customer communication, investment materials, disclosures, claims, compliance, digital interfaces, and employee training.</p><a class="editorial-link" href="https://www.stepes.com/financial-translation-services/">Financial Translation <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-factory"></use></svg></div><div><h3>Manufacturing, Engineering, and Automotive</h3><p>Product manuals, work instructions, safety procedures, specifications, maintenance, quality documents, equipment interfaces, and supplier communication.</p><a class="editorial-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-code"></use></svg></div><div><h3>Software, SaaS, and AI</h3><p>Continuous localization for software strings, apps, help content, developer resources, product releases, conversational interfaces, and AI-enabled experiences.</p><a class="editorial-link" href="https://www.stepes.com/software-saas-translation-services/">Software &amp; SaaS <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-megaphone"></use></svg></div><div><h3>Retail and eCommerce</h3><p>Product discovery, catalogs, marketplaces, campaigns, loyalty programs, packaging, customer emails, support, and localized shopping experiences.</p><a class="editorial-link" href="https://www.stepes.com/retail-ecommerce-translation-services/">Retail &amp; E-commerce <span class="arrow">→</span></a></div></article>
        <article class="industry"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-globe"></use></svg></div><div><h3>Government, Education, and Nonprofits</h3><p>Forms, notices, public health, community outreach, educational resources, emergency information, research surveys, and language-access communication.</p><a class="editorial-link" href="https://www.stepes.com/government-translation-services/">Government Translation <span class="arrow">→</span></a></div></article>
      </div>
    </div>
  </section>

  <section class="section" id="ai-human">
    <div class="shell">
      <div class="ai-grid">
        <div>
          <p class="eyebrow">Risk-Matched Translation</p>
          <h2>AI Translation Governed by Human Expertise</h2>
          <p class="lead" style="margin-top:20px">AI can produce fluent Spanish quickly, but fluent output is not automatically accurate, market-appropriate, or ready for business use.</p>
          <div class="ai-issues">
            <div class="ai-issue"><span class="marker">—</span><span>Subtle changes in meaning or unsupported terminology</span></div>
            <div class="ai-issue"><span class="marker">—</span><span>Incorrect regional vocabulary or forms of address</span></div>
            <div class="ai-issue"><span class="marker">—</span><span>Omissions, number errors, or damaged protected content</span></div>
            <div class="ai-issue"><span class="marker">—</span><span>Language that sounds fluent but does not fit the context</span></div>
          </div>
        </div>
        <div>
          <article class="workflow-tier"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-users"></use></svg></div><div><h3>Professional Human Translation and Independent Review</h3><p>For regulated, legal, safety-related, highly technical, creative, or other high-impact content.</p><ul><li>Qualified professional translator</li><li>Independent bilingual revision</li><li>Specialist or in-country validation</li><li>Documented approval and final QA</li></ul></div></article>
          <article class="workflow-tier"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-flow"></use></svg></div><div><h3>AI Translation With Professional Human Validation</h3><p>For high-volume customer-facing and business content that benefits from AI efficiency but still requires complete professional review.</p><ul><li>Selected AI model</li><li>Terminology and translation memory</li><li>Full professional post-editing</li><li>Automated QA and final approval</li></ul></div></article>
          <article class="workflow-tier"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-chart"></use></svg></div><div><h3>AI Translation With Automated QA and Targeted Review</h3><p>For selected lower-risk, high-volume, temporary, or internal content where speed and cost efficiency are priorities.</p><ul><li>Approved terminology</li><li>Automated quality checks</li><li>Exception-based routing</li><li>Representative sampling</li></ul></div></article>
        </div>
      </div>
      <div class="risk-matrix table-wrap">
        <table>
          <thead><tr><th>Content Risk</th><th>Typical Content</th><th>Recommended Workflow</th></tr></thead>
          <tbody>
            <tr><td>Lower Risk</td><td>Temporary internal content, reference material, high-volume knowledge content</td><td>AI translation, terminology, automated QA, targeted sampling</td></tr>
            <tr><td>Standard Business</td><td>Product information, employee communication, training, support content</td><td>AI + human validation or professional translation with review</td></tr>
            <tr><td>High Impact</td><td>Customer-facing products, financial information, contracts, safety instructions</td><td>Professional translation, independent revision, specialist review</td></tr>
            <tr><td>Regulated or Critical</td><td>Medical devices, clinical content, patient materials, legal rights, critical safety content</td><td>Qualified resources, documented review, specialist validation, controlled approval</td></tr>
          </tbody>
        </table>
      </div>
      <div class="risk-cards" aria-label="Content risk and recommended Spanish translation workflows">
        <article class="risk-card"><span class="risk-label">Lower Risk</span><h3>Fast, Governed AI Translation</h3><dl><dt>Typical Content</dt><dd>Temporary internal content, reference material, and high-volume knowledge content</dd><dt>Recommended Workflow</dt><dd>AI translation, approved terminology, automated QA, and targeted sampling</dd></dl></article>
        <article class="risk-card"><span class="risk-label">Standard Business</span><h3>AI + Human Validation</h3><dl><dt>Typical Content</dt><dd>Product information, employee communication, training, and support content</dd><dt>Recommended Workflow</dt><dd>AI + human validation or professional translation with review</dd></dl></article>
        <article class="risk-card"><span class="risk-label">High Impact</span><h3>Professional Translation and Revision</h3><dl><dt>Typical Content</dt><dd>Customer-facing products, financial information, contracts, and safety instructions</dd><dt>Recommended Workflow</dt><dd>Professional translation, independent revision, and specialist review</dd></dl></article>
        <article class="risk-card"><span class="risk-label">Regulated or Critical</span><h3>Controlled Specialist Validation</h3><dl><dt>Typical Content</dt><dd>Medical devices, clinical content, patient materials, legal rights, and critical safety content</dd><dt>Recommended Workflow</dt><dd>Qualified resources, documented review, specialist validation, and controlled approval</dd></dl></article>
      </div>
      <a class="editorial-link" href="https://www.stepes.com/ai-machine-learning-translation-services/">Explore AI + Human Translation Workflows <span class="arrow">→</span></a>
    </div>
  </section>

  <section class="section blush" id="consistency">
    <div class="shell asset-layout">
      <div>
        <p class="eyebrow">Enterprise Language Governance</p>
        <h2>Consistent Spanish Across Markets and Channels</h2>
        <p class="lead" style="margin-top:20px">Websites, software, documentation, campaigns, training, support, and legal content should all draw from the same approved Spanish language system.</p>
        <div class="asset-list">
          <article class="asset-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-database"></use></svg></div><div><h3>Terminology Management</h3><p>Define preferred terms, prohibited translations, definitions, product names, acronyms, usage notes, market-specific equivalents, and ownership.</p><a class="editorial-link" href="https://www.stepes.com/terminology-management/">Terminology Management <span class="arrow">→</span></a></div></article>
          <article class="asset-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-database"></use></svg></div><div><h3>Translation Memory</h3><p>Reuse approved translations, preserve decisions, accelerate updates, identify changed content, and improve long-term consistency and efficiency.</p><a class="editorial-link" href="https://www.stepes.com/translation-memory/">Translation Memory <span class="arrow">→</span></a></div></article>
          <article class="asset-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-doc"></use></svg></div><div><h3>Spanish Style Guides</h3><p>Standardize audience, reading level, formality, brand voice, inclusive language, locale formats, product naming, English loanwords, and forms of address.</p></div></article>
          <article class="asset-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-flow"></use></svg></div><div><h3>Core Spanish With Regional Adaptation</h3><p>Create a reusable foundation, identify market differences, adapt only what changes, and retain approved regional decisions for future content.</p></div></article>
        </div>
      </div>
      <div class="asset-visual" aria-label="Spanish language asset workflow">
        <div class="asset-header"><h3>Spanish Language System</h3><span>Approved and reusable</span></div>
        <div class="source-box"><span class="label">English Source</span><strong>Product safety and onboarding content</strong></div>
        <div class="language-layer"><strong>Shared Spanish foundation</strong><div class="chips"><span class="chip">Approved terminology</span><span class="chip">Translation memory</span><span class="chip">Style guide</span><span class="chip">Quality rules</span></div></div>
        <div class="outputs">
          <div class="output"><span class="label">US</span><strong>Clear US context</strong><p>Healthcare, institutions, accessibility, bilingual audiences</p></div>
          <div class="output"><span class="label">Mexico</span><strong>Local technical usage</strong><p>Workforce, product, safety, and market terminology</p></div>
          <div class="output"><span class="label">Spain</span><strong>European conventions</strong><p>Vocabulary, grammar, regulatory and locale formats</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="quality">
    <div class="shell">
      <div class="section-head center">
        <p class="eyebrow">Quality by Design</p>
        <h2>Translation Quality Built Into Every Stage</h2>
        <p class="lead">Quality should not depend on a final proofreading step. Stepes integrates audience definition, qualified resources, terminology, review, automated checks, and final-context validation throughout the workflow.</p>
      </div>
      <div class="quality-grid">
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-globe"></use></svg></div><div><h3>Audience and Variant Definition</h3><p>Confirm the target market, audience, content purpose, tone, and Spanish variant before production.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-users"></use></svg></div><div><h3>Qualified Linguistic Resources</h3><p>Select translators and reviewers by native-language competence, market familiarity, subject matter, and content type.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-database"></use></svg></div><div><h3>Approved Language Assets</h3><p>Apply glossaries, translation memory, style guides, reference materials, and client instructions consistently.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg></div><div><h3>Independent Bilingual Review</h3><p>Compare the Spanish against the source for accuracy, completeness, terminology, fluency, and instruction compliance.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-chart"></use></svg></div><div><h3>Automated Quality Assurance</h3><p>Identify missing content, untranslated text, number inconsistencies, terminology deviations, broken tags, formatting, and locale issues.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-heart"></use></svg></div><div><h3>Specialist and In-Country Validation</h3><p>Route legal, medical, technical, financial, marketing, and market-sensitive content to appropriate experts.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-screen"></use></svg></div><div><h3>In-Context and Final-Format QA</h3><p>Review websites, applications, documents, eLearning, video, and mobile content in the final or near-final environment.</p></div></article>
        <article class="quality-item"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-flow"></use></svg></div><div><h3>Continuous Quality Improvement</h3><p>Incorporate approved corrections into terminology, translation memory, style guidance, and future quality rules.</p></div></article>
      </div>
      <a class="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <span class="arrow">→</span></a>
    </div>
  </section>

  <section class="section dark" id="process">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">A Controlled, Scalable Workflow</p>
        <h2>Our Spanish Translation Process</h2>
        <p class="lead">Each program is configured according to audience, market, content, timeline, quality requirements, and business risk.</p>
      </div>
      <div class="process">
        <article class="process-step"><span class="process-no">01</span><h3>Content and Audience Assessment</h3><p>Review intended use, target countries, file formats, volume, schedule, and quality requirements.</p></article>
        <article class="process-step"><span class="process-no">02</span><h3>Spanish Variant Selection</h3><p>Choose US, Latin American, Mexican, European, international, or country-specific Spanish.</p></article>
        <article class="process-step"><span class="process-no">03</span><h3>Workflow and Resource Planning</h3><p>Select professional translation, AI, post-editing, revision, specialist validation, and final QA.</p></article>
        <article class="process-step"><span class="process-no">04</span><h3>Language-Asset Preparation</h3><p>Prepare terminology, translation memory, style guides, previous translations, and references.</p></article>
        <article class="process-step"><span class="process-no">05</span><h3>Translation and Localization</h3><p>Apply required terminology, style, market conventions, context, and technical protections.</p></article>
        <article class="process-step"><span class="process-no">06</span><h3>Quality Review</h3><p>Complete automated QA, bilingual revision, specialist validation, evaluation, and stakeholder review.</p></article>
        <article class="process-step"><span class="process-no">07</span><h3>Final-Context Validation</h3><p>Review websites, applications, documents, multimedia, and courses in their delivered context.</p></article>
        <article class="process-step"><span class="process-no">08</span><h3>Delivery and Continuous Updates</h3><p>Deliver approved content and retain reusable language assets for future revisions and releases.</p></article>
      </div>
    </div>
  </section>

  <section class="section" id="technology">
    <div class="shell platform-grid">
      <div>
        <p class="eyebrow">Connected Enterprise Operations</p>
        <h2>Spanish Localization Technology</h2>
        <p class="lead" style="margin-top:20px">Support one-time translation projects and continuously updated Spanish content through one connected operating environment.</p>
        <div class="platform-list">
          <article class="platform-item"><strong>Centralized Translation Management</strong><p>Manage files, languages, workflows, reviewers, status, and deliverables in one place.</p></article>
          <article class="platform-item"><strong>Customer Translation Portal</strong><p>Submit content, monitor progress, review translations, exchange feedback, and retrieve completed files.</p></article>
          <article class="platform-item"><strong>APIs and Integrations</strong><p>Connect websites, repositories, CMS platforms, product systems, and support content to translation workflows.</p></article>
          <article class="platform-item"><strong>Continuous Localization</strong><p>Translate new and changed content as part of software releases, publishing, product launches, and operations.</p></article>
          <article class="platform-item"><strong>Workflow Automation</strong><p>Configure routing, assignment, QA, approvals, exceptions, delivery, and escalation rules.</p></article>
          <article class="platform-item"><strong>Reporting, Roles, and Security</strong><p>Control access and approvals while monitoring volume, delivery performance, quality findings, and workflow status.</p></article>
        </div>
        <a class="editorial-link" href="https://www.stepes.com/ai-translation-platform/">Explore the Stepes AI Translation Platform <span class="arrow">→</span></a>
      </div>
      <div class="platform-panel" aria-label="Connected enterprise Spanish localization workflow">
        <div class="platform-toolbar"><strong>Spanish Program Overview</strong><span class="status-pill">Connected workflow</span></div>
        <div class="workflow-board">
          <div class="board-card wide"><span class="label">Program</span><strong>Product, support, and training localization</strong><p>US Spanish · Mexican Spanish · European Spanish</p><div class="progress"><span></span></div></div>
          <div class="board-card"><span class="label">Terminology</span><strong>Approved market glossary</strong><p>Shared terms with controlled regional variants</p></div>
          <div class="board-card"><span class="label">Translation Memory</span><strong>Shared regional memory</strong><p>Approved content retained for future reuse</p></div>
          <div class="board-card"><span class="label">Workflow</span><strong>Risk-based routing</strong><p>High-impact content receives professional review</p></div>
          <div class="board-card"><span class="label">Quality</span><strong>Automated + bilingual QA</strong><p>Numbers, terms, tags, and locale checks</p></div>
          <div class="board-card wide"><span class="label">Release Path</span><strong>Regional adaptation and controlled approval</strong><p>Variant selection · translation · market review · final validation</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section soft" id="why-stepes">
    <div class="shell">
      <div class="section-head center">
        <h2>Why Global Organizations Choose Stepes for Spanish Translation</h2>
        <p class="lead">A strong Spanish program combines the right market decision, qualified expertise, governed language assets, scalable operations, and measurable quality.</p>
      </div>
      <div class="why-grid">
        <article class="why-item"><h3>The Right Spanish From the Start</h3><p>Define the audience, market, language variant, tone, and quality requirements before translation begins.</p></article>
        <article class="why-item"><h3>Professional Industry Expertise</h3><p>Select Spanish translators and reviewers according to variant, subject matter, content type, and intended use.</p></article>
        <article class="why-item"><h3>AI and Human Workflows Matched to Risk</h3><p>Align technology and review depth with the business impact and consequences of an error.</p></article>
        <article class="why-item"><h3>Governed Terminology and Translation Memory</h3><p>Maintain consistent language across projects, products, markets, teams, and future updates.</p></article>
        <article class="why-item"><h3>Scalable Enterprise Operations</h3><p>Support one document, a regional launch, or continuous multilingual content through one partner and platform.</p></article>
        <article class="why-item"><h3>Measurable Quality and Secure Delivery</h3><p>Combine structured review, quality evaluation, in-context testing, controlled access, and defined workflows.</p></article>
      </div>
    </div>
  </section>

  <section class="section" id="applications">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">Practical Program Models</p>
        <h2>How Enterprise Spanish Programs Come Together</h2>
        <p class="lead">Every organization has a different mix of audiences, markets, content risk, and update frequency. These common program models show how Stepes combines Spanish variants, workflow controls, and reusable language assets for different operating needs.</p>
      </div>
      <div class="program-grid">
        <article class="program"><span class="label">Regulated Content</span><h3 style="margin-top:12px">Medical Device Market Expansion</h3><p>A shared terminology system supports patient, regulatory, labeling, and training content across the US, Mexico, and Spain.</p><ul><li>Qualified medical linguists</li><li>Independent bilingual review</li><li>Market adaptation and in-country validation</li><li>Controlled final-format QA</li></ul></article>
        <article class="program"><span class="label">Digital Product</span><h3 style="margin-top:12px">Continuous Software Localization</h3><p>One Spanish core is adapted for US, Latin American, and European releases through continuous integration and reusable language assets.</p><ul><li>String context and protected variables</li><li>AI + human validation by risk</li><li>Translation memory and terminology</li><li>In-product linguistic testing</li></ul></article>
        <article class="program"><span class="label">Global Operations</span><h3 style="margin-top:12px">Workforce Training and Safety</h3><p>Technical and instructional content is localized for US and Mexico-based employees with consistent terminology across documents, eLearning, and video.</p><ul><li>Market-appropriate technical Spanish</li><li>eLearning and voice-over production</li><li>Safety terminology controls</li><li>Recurring update workflow</li></ul></article>
      </div>
    </div>
  </section>

  <section class="section blush" id="pricing">
    <div class="shell price-layout">
      <div>
        <p class="eyebrow">Project Planning</p>
        <h2>Spanish Translation Pricing and Turnaround</h2>
        <p class="lead" style="margin-top:20px">Pricing depends on the content, language direction, Spanish variant, production workflow, file format, volume, review requirements, and delivery schedule.</p>
        <div class="turnaround"><h3>Turnaround Planning</h3><p>Short editable documents may qualify for expedited delivery. Larger, technical, regulated, or multimedia projects benefit from structured schedules with planned review stages, phased delivery, dedicated teams, and translation-memory leverage.</p></div>
        <div class="btns"><a class="btn primary" href="https://app.stepes.com/quote/">Get a Spanish Translation Quote <span aria-hidden="true">→</span></a><a class="btn secondary" href="https://www.stepes.com/contact-us/">Discuss an Enterprise Program</a></div>
      </div>
      <div class="price-panel">
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-globe"></use></svg></div><div><h3>Language Direction</h3><p>English-to-Spanish, Spanish-to-English, and multilingual programs require different target-market resources.</p></div></article>
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-users"></use></svg></div><div><h3>Spanish Market Coverage</h3><p>One neutral version generally requires less adaptation than separate US, Mexican, Latin American, and European deliverables.</p></div></article>
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-doc"></use></svg></div><div><h3>Content Type and Complexity</h3><p>Legal, medical, scientific, financial, creative, and highly technical content requires specialized expertise and preparation.</p></div></article>
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-flow"></use></svg></div><div><h3>Translation and Review Workflow</h3><p>Professional translation, AI + human validation, independent revision, specialist validation, and lower-risk AI workflows have different scopes.</p></div></article>
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-code"></use></svg></div><div><h3>File Engineering and Production</h3><p>Scanned PDFs, complex layouts, websites, software files, graphics, multimedia, and eLearning may require engineering, DTP, and functional QA.</p></div></article>
        <article class="price-factor"><div class="icon-box"><svg class="icon" aria-hidden="true"><use href="#i-database"></use></svg></div><div><h3>Volume, Reuse, and Schedule</h3><p>Translation memory, repetition, ongoing cadence, stakeholder review, and urgency affect resource planning and total investment.</p></div></article>
      </div>
    </div>
  </section>

  <section class="section" id="faq">
    <div class="shell">
      <div class="section-head center">
        <h2>Answers to Common Buying Questions</h2>
        <p class="lead">Practical guidance on Spanish variants, localization, AI workflows, certification, quality, scale, and delivery.</p>
      </div>
      <div class="faq-panel">
        <details open><summary>What is the difference between Spanish translation and Spanish localization?</summary><div class="faq-answer"><p>Spanish translation transfers meaning into Spanish. Localization goes further by adapting the content for a particular market, audience, product experience, culture, and use case. This can include vocabulary, tone, forms of address, date and currency formats, legal terminology, visual content, software layout, and market-specific messaging.</p></div></details>
        <details><summary>Which Spanish variant should my company use?</summary><div class="faq-answer"><p>US Spanish is normally best for Spanish-speaking audiences in the United States. European Spanish is appropriate for Spain. Neutral Latin American Spanish can work for broadly distributed regional content, while market-specific Spanish is often better for marketing, legal, regulated, or highly customer-facing materials.</p></div></details>
        <details><summary>Can one Spanish translation be used across all of Latin America?</summary><div class="faq-answer"><p>Sometimes. Neutral Latin American Spanish can work well for general technical, corporate, software, and training content. Country-specific adaptation may still be required for marketing, legal materials, healthcare, financial information, packaging, public communication, voice-over, and local regulatory content.</p></div></details>
        <details><summary>Is US Spanish the same as Latin American Spanish?</summary><div class="faq-answer"><p>No. US Spanish is influenced by Latin American varieties, but it is written for the US environment. It may require US-specific institutional terminology, formats, cultural context, accessibility considerations, and language choices appropriate for audiences with diverse national backgrounds.</p></div></details>
        <details><summary>What is the difference between European and Latin American Spanish?</summary><div class="faq-answer"><p>They differ in vocabulary, grammar, forms of address, idiomatic usage, tone, and locale conventions. European Spanish commonly uses terms such as <strong>ordenador</strong>, <strong>móvil</strong>, and <strong>coche</strong>, while Latin American markets may use <strong>computadora</strong>, <strong>celular</strong>, and <strong>carro</strong> or <strong>auto</strong>.</p></div></details>
        <details><summary>What is neutral Spanish?</summary><div class="faq-answer"><p>Neutral Spanish is intentionally written to avoid vocabulary and expressions strongly associated with one country. It supports broad comprehension and is often used for regional documentation, training, software, corporate communication, and globally distributed content.</p></div></details>
        <details><summary>Is international Spanish the same as Latin American Spanish?</summary><div class="faq-answer"><p>Not necessarily. International Spanish is intended for broad global use and may need to work across Latin America, Spain, the United States, and other markets. Neutral Latin American Spanish is optimized primarily for audiences across the Americas.</p></div></details>
        <details><summary>Can AI translate Spanish accurately?</summary><div class="faq-answer"><p>AI can produce fluent Spanish quickly, but accuracy varies by model, content, terminology, context, and target variant. Stepes applies approved terminology, translation memory, automated QA, risk-based review, and professional human validation according to the content’s intended use.</p></div></details>
        <details><summary>Do you use professional human Spanish translators?</summary><div class="faq-answer"><p>Yes. Stepes provides professional human translation, independent bilingual review, AI translation with professional post-editing, and other risk-based workflows. The recommended model depends on content purpose, audience, volume, timeline, and potential impact of an error.</p></div></details>
        <details><summary>Do you provide English-to-Spanish and Spanish-to-English translation?</summary><div class="faq-answer"><p>Yes. Stepes translates from English into US, Latin American, Mexican, European, international, and other Spanish variants. We also translate Spanish source content into English and more than 100 additional languages.</p></div></details>
        <details><summary>Do you provide certified or sworn Spanish translations?</summary><div class="faq-answer"><p>Yes. Stepes provides certified Spanish translations for legal, immigration, academic, corporate, medical, and regulatory use. Sworn translation, notarization, legalization, and apostille requirements are jurisdiction-specific, so we confirm the intended use and receiving authority before production.</p></div></details>
        <details><summary>Can you translate Spanish content for a specific country?</summary><div class="faq-answer"><p>Yes. Stepes supports market-specific Spanish for Mexico, Argentina, Colombia, Chile, Peru, Puerto Rico, Spain, the United States, and other Spanish-speaking markets, using linguists familiar with local terminology, culture, and industry context.</p></div></details>
        <details><summary>How do you maintain consistency across Spanish projects?</summary><div class="faq-answer"><p>We use approved terminology, translation memory, style guides, qualified linguistic teams, automated QA, review workflows, and documented client feedback. Approved corrections and language decisions are incorporated into future projects.</p></div></details>
        <details><summary>Can our internal Spanish reviewers participate?</summary><div class="faq-answer"><p>Yes. Local market teams, subject-matter experts, legal teams, medical reviewers, brand owners, and other approvers can participate in controlled review workflows. Their feedback can be resolved and retained in terminology and translation memory.</p></div></details>
        <details><summary>Can Stepes handle large or ongoing Spanish translation programs?</summary><div class="faq-answer"><p>Yes. Stepes supports high-volume and continuous programs through scalable linguistic teams, cloud-based management, APIs, workflow automation, translation memory, terminology management, phased delivery, and recurring reporting.</p></div></details>
        <details><summary>Can you translate urgent Spanish documents?</summary><div class="faq-answer"><p>Expedited delivery may be available depending on file format, word count, specialization, review requirements, and resource availability. Large urgent projects can use coordinated linguists, shared terminology, translation memory, and centralized review.</p></div></details>
        <details><summary>Which file formats do you support?</summary><div class="faq-answer"><p>Stepes supports common office documents, PDFs, Adobe design files, software resource files, XML, HTML, structured content, subtitles, multimedia, eLearning formats, and many other file types. Files are evaluated for extraction, preparation, engineering, layout, and final QA requirements.</p></div></details>
        <details><summary>Do you provide Spanish voice-over, subtitling, and interpretation?</summary><div class="faq-answer"><p>Yes. Stepes provides transcription, subtitle translation, closed captions, voice-over, dubbing, script adaptation, synchronization, multimedia QA, and remote or on-site interpretation. Resources are selected according to market, audience, tone, subject matter, and setting.</p></div></details>
      </div>
    </div>
  </section>

  <section class="section soft" id="markets">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">Explore Spanish Expertise</p>
        <h2>Specialized Spanish Translation Services</h2>
        <p class="lead">Use this Spanish pillar as your starting point, then explore market-specific and specialized Spanish capabilities in greater depth.</p>
      </div>
      <div class="market-links">
        <article class="market-link"><h3>US Spanish Translation</h3><p>Language adapted for US healthcare, finance, government, education, workforce, retail, and digital environments.</p><a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/us-spanish-translation/">Explore US Spanish <span class="arrow">→</span></a></article>
        <article class="market-link"><h3>Latin American Spanish Translation</h3><p>Neutral regional Spanish, market-specific language, or a shared core with adaptation across Latin America.</p><a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/latin-american-spanish-translation/">Explore Latin American Spanish <span class="arrow">→</span></a></article>
        <article class="market-link"><h3>European Spanish Translation</h3><p>Spain-specific vocabulary, grammar, tone, terminology, and locale conventions for Spain and EU-facing content.</p><a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/european-spanish-translation/">Explore European Spanish <span class="arrow">→</span></a></article>
        <article class="market-link"><h3>Mexican Spanish Translation</h3><p>Locally appropriate Spanish for customers, employees, suppliers, regulated content, and operations in Mexico.</p><a class="editorial-link" href="https://www.stepes.com/spanish-translation-services/mexican-spanish-translation/">Explore Mexican Spanish <span class="arrow">→</span></a></article>
        <article class="market-link"><h3>Spanish Medical Translation</h3><p>Clinical, medical device, pharmaceutical, healthcare, and patient-facing content with risk-appropriate quality controls.</p><a class="editorial-link" href="https://www.stepes.com/spanish-medical-translation/">Explore Spanish Medical Translation <span class="arrow">→</span></a></article>
        <article class="market-link"><h3>Spanish Document Translation</h3><p>Accurate Spanish translations for PDFs, Microsoft Office, Adobe files, technical documents, and complex layouts.</p><a class="editorial-link" href="https://www.stepes.com/spanish-document-translation/">Explore Spanish Document Translation <span class="arrow">→</span></a></article>
      </div>
      <div class="section-head" style="margin-top:64px;margin-bottom:0"><h3>Related Translation and Localization Services</h3></div>
      <div class="related-links">
        <a href="https://www.stepes.com/translation-services/">Translation Services →</a>
        <a href="https://www.stepes.com/certified-translation-services/">Certified Translation Services →</a>
        <a href="https://www.stepes.com/legal-translation-services/">Legal Translation Services →</a>
        <a href="https://www.stepes.com/medical-translation-services/">Medical Translation Services →</a>
        <a href="https://www.stepes.com/technical-translation-services/">Technical Translation Services →</a>
        <a href="https://www.stepes.com/software-translation-services/">Software Translation Services →</a>
        <a href="https://www.stepes.com/voice-over-services/">Voice-Over Services →</a>
        <a href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing →</a>
      </div>
    </div>
  </section>

  <section class="final">
    <div class="shell">
      <div class="final-panel">
        <div class="final-copy">
          <h2>Build a Spanish Localization Program That Works Across Markets</h2>
          <p>Translate with the right Spanish variant, qualified industry expertise, governed terminology, secure technology, and a quality workflow matched to the content’s purpose and risk.</p>
          <div class="btns"><a class="btn primary" href="https://app.stepes.com/quote/">Get a Spanish Translation Quote <span aria-hidden="true">→</span></a><a class="btn secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a></div>
        </div>
        <div class="final-proof"><div>US, Latin American, and European Spanish</div><div>Professional Human and AI-Assisted Translation</div><div>Enterprise Quality and Security</div><div>More Than 100 Languages</div></div>
      </div>
    </div>
  </section>
</main>
`;

export default function SpanishTranslationServicesWireframe() {
  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}
