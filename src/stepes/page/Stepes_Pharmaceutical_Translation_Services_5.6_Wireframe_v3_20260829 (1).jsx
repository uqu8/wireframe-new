import React from "react";

const Icon = ({ name, size = 22 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    flask: <><path d="M9 3h6"/><path d="M10 3v5l-5 9a2.4 2.4 0 0 0 2.1 3.5h9.8A2.4 2.4 0 0 0 19 17l-5-9V3"/><path d="M7.8 14h8.4"/></>,
    clinical: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3.5h6v3H9z"/><path d="M8.5 11h7"/><path d="M8.5 15h4.5"/></>,
    regulatory: <><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v5h5"/><path d="M10 12h6"/><path d="M10 16h6"/></>,
    label: <><path d="M4 7.5 10.5 3H20v9.5L13.5 17 4 7.5Z"/><circle cx="16" cy="7" r="1"/><path d="M10.5 13.5 5 19"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.7-2.9 8-7 10-4.1-2-7-5.3-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    factory: <><path d="M3 21V9l6 3V9l6 3V6h6v15Z"/><path d="M7 17h2"/><path d="M13 17h2"/><path d="M18 10h3"/></>,
    science: <><circle cx="8" cy="8" r="3"/><path d="m10.5 10.5 3 3"/><path d="M13 4h8"/><path d="M13 8h6"/><path d="M4 17h16"/><path d="M7 21h10"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    terms: <><path d="M4 5h8"/><path d="M4 9h6"/><path d="M4 13h8"/><path d="M15 5h5v5"/><path d="m15 10 5-5"/><path d="M15 15h5"/><path d="M15 19h5"/></>,
    versions: <><path d="M7 7h10v10H7z"/><path d="M4 4h10"/><path d="M4 4v10"/><path d="M20 10v10H10"/></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9z"/><path d="M9 2v3"/><path d="M15 2v3"/><path d="M9 19v3"/><path d="M15 19v3"/><path d="M2 9h3"/><path d="M2 15h3"/><path d="M19 9h3"/><path d="M19 15h3"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3.5 20c.5-4 2.2-6 5.5-6s5 2 5.5 6"/><circle cx="17.5" cy="9" r="2.2"/><path d="M15.3 15.4c3.2-.8 5.1.7 5.7 4.6"/></>,
    qa: <><path d="M4 5h10"/><path d="M4 10h7"/><path d="M4 15h6"/><circle cx="16.5" cy="15.5" r="4"/><path d="m19.5 18.5 2 2"/><path d="m15 15.5 1 1 2-2"/></>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></>,
    scale: <><path d="M5 19V9"/><path d="M10 19V5"/><path d="M15 19v-7"/><path d="M20 19V3"/><path d="M3 21h19"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const LinkArrow = () => <span className="ph-link-arrow" aria-hidden="true"><Icon name="arrow" size={16} /></span>;

export default function PharmaceuticalTranslationServices56() {
  return (
    <main className="pharma56">
      <style>{`
        .pharma56 {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --pink-soft: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #17181B;
          --text: #3B3D42;
          --muted: #676A70;
          --line: #E7E7E9;
          --surface: #F7F7F8;
          --surface-2: #FBFBFC;
          --dark: #17171A;
          color: var(--ink);
          background: #fff;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }
        .pharma56 *, .pharma56 *::before, .pharma56 *::after { box-sizing: border-box; }
        .pharma56 a { color: inherit; }
        .pharma56 .ph-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
        .pharma56 .ph-section { padding-block: 96px; }
        .pharma56 .ph-section-dense { padding-block: 80px; }
        .pharma56 .ph-eyebrow { margin: 0 0 14px; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--magenta); }
        .pharma56 .ph-dark .ph-eyebrow, .pharma56 .ph-cta .ph-eyebrow { color: var(--pink-light); }
        .pharma56 h1, .pharma56 h2, .pharma56 h3 { margin: 0; font-weight: 600; color: var(--ink); letter-spacing: -.025em; }
        .pharma56 h1 { font-size: 48px; line-height: 1.05; max-width: 720px; }
        .pharma56 h2 { font-size: 36px; line-height: 1.12; }
        .pharma56 h3 { font-size: 24px; line-height: 1.2; }
        .pharma56 p, .pharma56 li { font-size: 16px; line-height: 1.7; color: var(--text); }
        .pharma56 .ph-large { font-size: 18px; line-height: 1.65; }
        .pharma56 .ph-intro { max-width: 800px; margin: 20px 0 0; }
        .pharma56 .ph-heading-center { text-align: center; margin-inline: auto; }
        .pharma56 .ph-heading-center .ph-intro { margin-inline: auto; }
        .pharma56 .ph-kicker { font-weight: 600; color: var(--ink); }
        .pharma56 .ph-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
        .pharma56 .ph-btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 999px; font-size: 16px; line-height: 1; font-weight: 600; text-decoration: none; transition: .2s ease; border: 1px solid transparent; }
        .pharma56 .ph-btn-primary, .pharma56 .ph-btn-primary:visited, .pharma56 .ph-btn-primary:hover, .pharma56 .ph-btn-primary:active, .pharma56 .ph-btn-primary:focus, .pharma56 .ph-btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .pharma56 .ph-btn-primary *, .pharma56 .ph-btn-primary:visited *, .pharma56 .ph-btn-primary:hover *, .pharma56 .ph-btn-primary:active *, .pharma56 .ph-btn-primary:focus *, .pharma56 .ph-btn-primary:focus-visible * { color: #fff !important; stroke: #fff !important; }
        .pharma56 .ph-btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .pharma56 .ph-btn-secondary { background: #fff; color: var(--ink); border-color: #D5D5D8; }
        .pharma56 .ph-btn-secondary:hover { border-color: #A9AAAE; transform: translateY(-1px); }
        .pharma56 .ph-btn:focus-visible, .pharma56 .ph-link:focus-visible, .pharma56 summary:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
        .pharma56 .ph-link { display: inline-flex; align-items: center; gap: 5px; min-height: 44px; color: var(--magenta); font-weight: 600; text-decoration: none; }
        .pharma56 .ph-link:hover { color: var(--magenta-dark); }
        .pharma56 .ph-link-arrow { display: inline-flex; transition: transform .2s ease; }
        .pharma56 .ph-link:hover .ph-link-arrow { transform: translateX(3px); }

        /* HERO */
        .pharma56 .ph-hero { padding-block: 104px 88px; background: linear-gradient(180deg, #fff 0%, #FCFAFB 100%); }
        .pharma56 .ph-hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr); gap: 64px; align-items: center; }
        .pharma56 .ph-hero-copy { max-width: 720px; }
        .pharma56 .ph-hero-copy .ph-large { max-width: 680px; margin: 24px 0 0; }
        .pharma56 .ph-hero-art { position: relative; min-height: 440px; display: flex; align-items: center; justify-content: center; }
        .pharma56 .ph-hero-art::before { content: ""; position: absolute; inset: 8% 5% 5%; border-radius: 30px; background: #fff; border: 1px solid #ECECEF; box-shadow: 0 22px 60px rgba(22,22,25,.07); }
        .pharma56 .ph-hero-svg { position: relative; z-index: 1; width: 100%; height: auto; color: #4D4F55; }
        .pharma56 .ph-proof { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .pharma56 .ph-proof-row { display: grid; grid-template-columns: repeat(5, 1fr); }
        .pharma56 .ph-proof-item { padding: 23px 18px; text-align: center; border-right: 1px solid var(--line); }
        .pharma56 .ph-proof-item:last-child { border-right: 0; }
        .pharma56 .ph-proof-item strong { display: block; font-size: 16px; font-weight: 600; color: var(--ink); }
        .pharma56 .ph-proof-item span { display: block; margin-top: 4px; font-size: 14px; line-height: 1.35; color: var(--muted); }

        /* CONNECTED */
        .pharma56 .ph-connected-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 72px; align-items: start; }
        .pharma56 .ph-connected-copy { position: sticky; top: 32px; }
        .pharma56 .ph-connected-copy .ph-large { margin: 22px 0 0; max-width: 520px; }
        .pharma56 .ph-connected-copy .ph-link-row { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 10px 22px; }
        .pharma56 .ph-lifecycle { border-top: 1px solid var(--line); }
        .pharma56 .ph-lifecycle-row { display: grid; grid-template-columns: 48px 1fr auto; gap: 20px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .pharma56 .ph-lifecycle-icon { width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border-radius: 14px; background: var(--pink-soft); color: var(--magenta); }
        .pharma56 .ph-lifecycle-row p { margin: 7px 0 0; max-width: 620px; }
        .pharma56 .ph-lifecycle-tag { font-size: 14px; color: var(--muted); white-space: nowrap; }

        /* SERVICE SCOPE */
        .pharma56 .ph-scope { background: var(--surface-2); }
        .pharma56 .ph-scope-wrap { margin-top: 48px; border-top: 1px solid #DEDFE2; }
        .pharma56 .ph-scope-row { display: grid; grid-template-columns: 62px minmax(210px,.45fr) 1fr; gap: 28px; padding: 30px 0; border-bottom: 1px solid #DEDFE2; align-items: start; }
        .pharma56 .ph-scope-icon { width: 48px; height: 48px; border-radius: 16px; border: 1px solid #E0D5DA; color: var(--magenta); display: flex; align-items: center; justify-content: center; background: #fff; }
        .pharma56 .ph-scope-row > h3 { padding-top: 8px; }
        .pharma56 .ph-scope-content p { margin: 2px 0 12px; }
        .pharma56 .ph-scope-list { display: flex; flex-wrap: wrap; gap: 6px 14px; margin: 0; padding: 0; list-style: none; }
        .pharma56 .ph-scope-list li { position: relative; padding-left: 13px; color: #52545A; }
        .pharma56 .ph-scope-list li::before { content: ""; width: 4px; height: 4px; border-radius: 50%; background: var(--magenta); position: absolute; left: 0; top: .78em; }
        .pharma56 .ph-scope-links { display: flex; gap: 8px 18px; flex-wrap: wrap; margin-top: 12px; }

        /* TERMINOLOGY */
        .pharma56 .ph-terms-section { background: var(--pink-soft); }
        .pharma56 .ph-terms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .pharma56 .ph-terms-copy .ph-large { margin: 22px 0 0; }
        .pharma56 .ph-checklist { list-style: none; padding: 0; margin: 24px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 22px; }
        .pharma56 .ph-checklist li { display: flex; align-items: flex-start; gap: 9px; }
        .pharma56 .ph-checklist svg { flex: 0 0 auto; margin-top: 4px; color: var(--magenta); }
        .pharma56 .ph-terms-visual { background: #fff; border: 1px solid #E8D9DF; border-radius: 30px; padding: 26px; box-shadow: 0 20px 50px rgba(73,31,48,.08); }
        .pharma56 .ph-term-hub { display: grid; grid-template-columns: 1fr 128px 1fr; gap: 14px; align-items: center; }
        .pharma56 .ph-term-stack { display: grid; gap: 12px; }
        .pharma56 .ph-term-node { padding: 14px 15px; border: 1px solid var(--line); border-radius: 14px; background: #fff; font-size: 16px; line-height: 1.4; color: var(--ink); font-weight: 600; }
        .pharma56 .ph-term-center { height: 128px; border-radius: 50%; background: var(--magenta); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 12px; box-shadow: 0 10px 28px rgba(193,29,99,.22); }
        .pharma56 .ph-term-center span { font-size: 11px; text-transform: uppercase; letter-spacing: .09em; opacity: .9; }
        .pharma56 .ph-term-center strong { font-size: 17px; line-height: 1.15; margin-top: 4px; }
        .pharma56 .ph-term-caption { margin: 18px 0 0; padding-top: 18px; border-top: 1px solid var(--line); font-size: 16px; line-height: 1.55; color: var(--muted); text-align: center; }

        /* REVISIONS DARK */
        .pharma56 .ph-dark { background: var(--dark); color: #fff; }
        .pharma56 .ph-dark h2, .pharma56 .ph-dark h3 { color: #fff; }
        .pharma56 .ph-dark p, .pharma56 .ph-dark li { color: #D1D1D4; }
        .pharma56 .ph-revision-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 70px; align-items: center; }
        .pharma56 .ph-revision-copy .ph-large { margin: 22px 0 0; }
        .pharma56 .ph-change-board { border: 1px solid #35353A; border-radius: 30px; padding: 28px; background: #1E1E22; }
        .pharma56 .ph-source-change { padding: 18px; border-radius: 18px; border: 1px solid #4C3A43; background: #241B20; }
        .pharma56 .ph-source-change span { display: block; font-size: 11px; color: var(--pink-light); font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
        .pharma56 .ph-source-change strong { display: block; margin-top: 6px; font-size: 18px; color: #fff; }
        .pharma56 .ph-change-line { width: 2px; height: 24px; background: #6A5060; margin-left: 26px; }
        .pharma56 .ph-downstream { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .pharma56 .ph-downstream-item { min-height: 92px; border-radius: 16px; border: 1px solid #36363B; padding: 14px; background: #19191D; }
        .pharma56 .ph-downstream-item strong { display: block; color: #fff; font-size: 16px; }
        .pharma56 .ph-downstream-item span { display: block; color: #AEB0B5; font-size: 14px; margin-top: 6px; line-height: 1.35; }
        .pharma56 .ph-revision-notes { margin-top: 20px; display: grid; grid-template-columns: repeat(2,1fr); gap: 12px 22px; }
        .pharma56 .ph-revision-note { display: flex; gap: 9px; align-items: flex-start; }
        .pharma56 .ph-revision-note svg { flex: 0 0 auto; color: var(--pink-light); margin-top: 4px; }

        /* WORKFLOW */
        .pharma56 .ph-workflow { margin-top: 48px; display: grid; grid-template-columns: repeat(5,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .pharma56 .ph-step { padding: 26px 22px 28px; border-right: 1px solid var(--line); }
        .pharma56 .ph-step:last-child { border-right: 0; }
        .pharma56 .ph-step-num { font-size: 12px; letter-spacing: .1em; font-weight: 600; color: var(--magenta); }
        .pharma56 .ph-step h3 { margin-top: 15px; }
        .pharma56 .ph-step p { margin: 10px 0 0; }
        .pharma56 .ph-risk-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 34px; }
        .pharma56 .ph-risk { padding-top: 20px; border-top: 3px solid #E2E2E5; }
        .pharma56 .ph-risk:first-child { border-top-color: var(--magenta); }
        .pharma56 .ph-risk p { margin: 10px 0 0; }

        /* AI */
        .pharma56 .ph-ai-section { background: var(--surface); }
        .pharma56 .ph-ai-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 72px; align-items: center; }
        .pharma56 .ph-ai-copy .ph-large { margin: 22px 0 0; }
        .pharma56 .ph-ai-points { margin-top: 26px; border-top: 1px solid #DDDEE1; }
        .pharma56 .ph-ai-point { display: grid; grid-template-columns: 38px 1fr; gap: 12px; padding: 15px 0; border-bottom: 1px solid #DDDEE1; align-items: start; }
        .pharma56 .ph-ai-point svg { color: var(--magenta); margin-top: 1px; }
        .pharma56 .ph-ai-point strong { display: block; font-size: 16px; color: var(--ink); }
        .pharma56 .ph-ai-point span { display: block; font-size: 16px; line-height: 1.55; color: var(--text); margin-top: 2px; }
        .pharma56 .ph-ai-panel { border-radius: 30px; border: 1px solid #DFDFE2; background: #fff; overflow: hidden; box-shadow: 0 18px 48px rgba(30,30,35,.07); }
        .pharma56 .ph-panel-head { padding: 18px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); }
        .pharma56 .ph-panel-head strong { font-size: 16px; }
        .pharma56 .ph-status { font-size: 12px; font-weight: 600; color: #226B47; background: #EFF8F2; padding: 7px 9px; border-radius: 999px; }
        .pharma56 .ph-ai-flow { padding: 24px; display: grid; gap: 12px; }
        .pharma56 .ph-ai-flow-row { display: grid; grid-template-columns: 30px 1fr auto; gap: 12px; align-items: center; padding: 14px; border: 1px solid var(--line); border-radius: 14px; }
        .pharma56 .ph-ai-flow-row svg { color: var(--magenta); }
        .pharma56 .ph-ai-flow-row strong { font-size: 16px; color: var(--ink); }
        .pharma56 .ph-ai-flow-row span { font-size: 14px; color: var(--muted); }
        .pharma56 .ph-ai-output { margin: 0 24px 24px; padding: 18px; border-radius: 16px; background: var(--pink-soft); border: 1px solid #E9D5DE; }
        .pharma56 .ph-ai-output strong { font-size: 16px; }
        .pharma56 .ph-ai-output p { margin: 7px 0 0; }

        /* EXPERTISE */
        .pharma56 .ph-expertise-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; }
        .pharma56 .ph-expertise-copy .ph-large { margin: 22px 0 0; }
        .pharma56 .ph-expertise-list { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
        .pharma56 .ph-expertise-item { padding: 20px 16px 20px 0; border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 12px; }
        .pharma56 .ph-expertise-item:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 24px; }
        .pharma56 .ph-expertise-item:nth-child(even) { padding-left: 24px; }
        .pharma56 .ph-expertise-item svg { color: var(--magenta); flex: 0 0 auto; }
        .pharma56 .ph-expertise-item span { font-size: 16px; font-weight: 600; color: var(--ink); }
        .pharma56 .ph-team-note { margin-top: 26px; padding-top: 20px; border-top: 1px solid var(--line); }
        .pharma56 .ph-team-note > strong { display: block; font-size: 16px; color: var(--ink); }
        .pharma56 .ph-team-note p { margin: 7px 0 4px; }

        /* QA */
        .pharma56 .ph-qa { background: #fff; }
        .pharma56 .ph-qa-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .pharma56 .ph-qa-col { padding: 26px 24px; border-right: 1px solid var(--line); }
        .pharma56 .ph-qa-col:first-child { padding-left: 0; }
        .pharma56 .ph-qa-col:last-child { border-right: 0; padding-right: 0; }
        .pharma56 .ph-qa-icon { color: var(--magenta); margin-bottom: 15px; }
        .pharma56 .ph-qa-col ul { margin: 14px 0 0; padding: 0; list-style: none; }
        .pharma56 .ph-qa-col li { position: relative; padding: 5px 0 5px 14px; }
        .pharma56 .ph-qa-col li::before { content: ""; position: absolute; left: 0; top: .86em; width: 4px; height: 4px; border-radius: 50%; background: #A6A7AB; }
        .pharma56 .ph-cert-strip { margin-top: 34px; display: flex; gap: 10px; flex-wrap: wrap; }
        .pharma56 .ph-cert { padding: 10px 13px; border: 1px solid #DADADD; border-radius: 999px; font-size: 14px; color: var(--ink); font-weight: 600; background: #fff; }

        /* DELIVERABLE */
        .pharma56 .ph-deliverable { background: var(--surface-2); }
        .pharma56 .ph-deliver-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .pharma56 .ph-deliver-copy .ph-large { margin: 22px 0 0; }
        .pharma56 .ph-format-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        .pharma56 .ph-format { padding: 8px 11px; background: #fff; border: 1px solid #DCDDE0; border-radius: 10px; font-size: 14px; font-weight: 600; color: #4C4E54; }
        .pharma56 .ph-file-board { border: 1px solid #DFDFE2; border-radius: 30px; background: #fff; padding: 28px; box-shadow: 0 16px 44px rgba(20,20,25,.06); }
        .pharma56 .ph-file-top { display: grid; grid-template-columns: 1fr 38px 1fr; gap: 12px; align-items: center; }
        .pharma56 .ph-file-card { padding: 18px; border: 1px solid var(--line); border-radius: 16px; }
        .pharma56 .ph-file-card svg { color: var(--magenta); }
        .pharma56 .ph-file-card strong { display: block; margin-top: 12px; font-size: 16px; }
        .pharma56 .ph-file-card span { display: block; margin-top: 4px; font-size: 16px; line-height: 1.55; color: var(--muted); }
        .pharma56 .ph-file-arrow { display: flex; justify-content: center; color: #9C9EA3; }
        .pharma56 .ph-file-checks { margin-top: 18px; display: grid; grid-template-columns: repeat(2,1fr); gap: 9px 14px; }
        .pharma56 .ph-file-check { display: flex; gap: 7px; align-items: flex-start; font-size: 16px; line-height: 1.5; color: #55575C; }
        .pharma56 .ph-file-check svg { color: var(--magenta); flex: 0 0 auto; margin-top: 1px; }

        /* LANGUAGES */
        .pharma56 .ph-languages-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 26px; margin-top: 48px; }
        .pharma56 .ph-language-group { padding-top: 18px; border-top: 2px solid #E2E2E4; }
        .pharma56 .ph-language-group p { margin: 12px 0 0; }
        .pharma56 .ph-language-note { margin-top: 36px; max-width: 820px; padding-left: 16px; border-left: 3px solid var(--magenta); }

        /* SCALE */
        .pharma56 .ph-scale-section { background: var(--surface); }
        .pharma56 .ph-scale-track { margin-top: 46px; display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid #DEDFE2; border-radius: 28px; overflow: hidden; background: #fff; }
        .pharma56 .ph-scale-item { padding: 28px; border-right: 1px solid #DEDFE2; }
        .pharma56 .ph-scale-item:last-child { border-right: 0; }
        .pharma56 .ph-scale-item svg { color: var(--magenta); }
        .pharma56 .ph-scale-item h3 { margin-top: 17px; }
        .pharma56 .ph-scale-item p { margin: 10px 0 0; }
        .pharma56 .ph-enterprise-row { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 9px; }
        .pharma56 .ph-cap { padding: 9px 12px; border: 1px solid #D9DADD; border-radius: 999px; font-size: 16px; line-height: 1.4; color: #55575C; background: #fff; }

        /* AUDIENCES */
        .pharma56 .ph-audience-grid { margin-top: 46px; display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
        .pharma56 .ph-audience { display: grid; grid-template-columns: 44px 1fr; gap: 16px; padding: 25px 26px 25px 0; border-bottom: 1px solid var(--line); }
        .pharma56 .ph-audience:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 32px; }
        .pharma56 .ph-audience:nth-child(even) { padding-left: 32px; }
        .pharma56 .ph-audience svg { color: var(--magenta); margin-top: 2px; }
        .pharma56 .ph-audience p { margin: 8px 0 0; }

        /* WHY */
        .pharma56 .ph-why { background: var(--pink-soft); }
        .pharma56 .ph-why-grid { margin-top: 46px; display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .pharma56 .ph-why-card { background: #fff; border: 1px solid #E7D8DF; border-radius: 22px; padding: 24px; }
        .pharma56 .ph-why-card svg { color: var(--magenta); }
        .pharma56 .ph-why-card h3 { margin-top: 16px; }
        .pharma56 .ph-why-card p { margin: 9px 0 0; }

        /* FAQ */
        .pharma56 .ph-faq-wrap { max-width: 920px; margin: 46px auto 0; border-top: 1px solid var(--line); }
        .pharma56 details { border-bottom: 1px solid var(--line); }
        .pharma56 summary { list-style: none; cursor: pointer; min-height: 68px; display: grid; grid-template-columns: 1fr 28px; gap: 18px; align-items: center; font-size: 18px; line-height: 1.35; font-weight: 600; color: var(--ink); }
        .pharma56 summary::-webkit-details-marker { display: none; }
        .pharma56 .ph-faq-plus { width: 28px; height: 28px; border: 1px solid #DADADD; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 20px; line-height: 1; transition: transform .2s ease; }
        .pharma56 details[open] .ph-faq-plus { transform: rotate(45deg); }
        .pharma56 .ph-faq-answer { padding: 0 48px 24px 0; }
        .pharma56 .ph-faq-answer p { margin: 0; }

        /* CTA */
        .pharma56 .ph-cta { padding-block: 82px; background: var(--burgundy); color: #fff; }
        .pharma56 .ph-cta h2 { color: #fff; max-width: 760px; }
        .pharma56 .ph-cta p { color: #F2E6EB; max-width: 760px; margin: 20px 0 0; }
        .pharma56 .ph-cta .ph-btn-primary, .pharma56 .ph-cta .ph-btn-primary:visited, .pharma56 .ph-cta .ph-btn-primary:hover, .pharma56 .ph-cta .ph-btn-primary:active, .pharma56 .ph-cta .ph-btn-primary:focus, .pharma56 .ph-cta .ph-btn-primary:focus-visible { background: #fff; color: var(--burgundy) !important; }
        .pharma56 .ph-cta .ph-btn-primary *, .pharma56 .ph-cta .ph-btn-primary:visited *, .pharma56 .ph-cta .ph-btn-primary:hover *, .pharma56 .ph-cta .ph-btn-primary:active *, .pharma56 .ph-cta .ph-btn-primary:focus *, .pharma56 .ph-cta .ph-btn-primary:focus-visible * { color: var(--burgundy) !important; stroke: var(--burgundy) !important; }
        .pharma56 .ph-cta .ph-btn-secondary { background: transparent; border-color: rgba(255,255,255,.42); color: #fff; }
        .pharma56 .ph-cta .ph-btn-secondary:hover { border-color: #fff; }

        @media (max-width: 1120px) {
          .pharma56 .ph-shell { padding-inline: 40px; }
          .pharma56 .ph-hero-grid { gap: 40px; grid-template-columns: 1.03fr .97fr; }
          .pharma56 .ph-hero-art { min-height: 380px; }
          .pharma56 .ph-workflow { grid-template-columns: repeat(3,1fr); }
          .pharma56 .ph-step:nth-child(3) { border-right: 0; }
          .pharma56 .ph-step:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
          .pharma56 .ph-step:nth-child(4) { grid-column: 1 / 2; }
          .pharma56 .ph-step:nth-child(5) { grid-column: 2 / 3; }
          .pharma56 .ph-qa-grid { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-qa-col { border-bottom: 1px solid var(--line); }
          .pharma56 .ph-qa-col:nth-child(2) { border-right: 0; }
          .pharma56 .ph-qa-col:nth-child(3), .pharma56 .ph-qa-col:nth-child(4) { border-bottom: 0; }
          .pharma56 .ph-qa-col:nth-child(3) { padding-left: 0; }
          .pharma56 .ph-languages-grid { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-scale-track { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-scale-item:nth-child(2) { border-right: 0; }
          .pharma56 .ph-scale-item:nth-child(-n+2) { border-bottom: 1px solid #DEDFE2; }
        }

        @media (max-width: 820px) {
          .pharma56 .ph-shell { padding-inline: 24px; }
          .pharma56 .ph-section { padding-block: 76px; }
          .pharma56 .ph-section-dense { padding-block: 70px; }
          .pharma56 h1 { font-size: 42px; }
          .pharma56 h2 { font-size: 32px; }
          .pharma56 h3 { font-size: 22px; }
          .pharma56 .ph-hero { padding-block: 82px 72px; }
          .pharma56 .ph-hero-grid, .pharma56 .ph-connected-grid, .pharma56 .ph-terms-grid, .pharma56 .ph-revision-grid, .pharma56 .ph-ai-grid, .pharma56 .ph-expertise-grid, .pharma56 .ph-deliver-grid { grid-template-columns: 1fr; }
          .pharma56 .ph-hero-grid { gap: 44px; }
          .pharma56 .ph-hero-copy { text-align: center; margin-inline: auto; }
          .pharma56 .ph-hero-copy .ph-large { margin-inline: auto; }
          .pharma56 .ph-btns { justify-content: center; }
          .pharma56 .ph-hero-art { min-height: 360px; max-width: 620px; width: 100%; margin-inline: auto; }
          .pharma56 .ph-proof-row { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-proof-item { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
          .pharma56 .ph-proof-item:nth-child(even) { border-right: 0; }
          .pharma56 .ph-proof-item:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .pharma56 .ph-connected-copy { position: static; text-align: left; }
          .pharma56 .ph-connected-copy > .ph-eyebrow, .pharma56 .ph-connected-copy > h2, .pharma56 .ph-connected-copy > .ph-large { text-align: center; }
          .pharma56 .ph-connected-copy .ph-large { margin-inline: auto; }
          .pharma56 .ph-connected-copy .ph-link-row { justify-content: center; }
          .pharma56 .ph-scope-row { grid-template-columns: 52px minmax(180px,.42fr) 1fr; gap: 20px; }
          .pharma56 .ph-terms-grid, .pharma56 .ph-revision-grid, .pharma56 .ph-ai-grid, .pharma56 .ph-expertise-grid, .pharma56 .ph-deliver-grid { gap: 44px; }
          .pharma56 .ph-terms-copy, .pharma56 .ph-revision-copy, .pharma56 .ph-ai-copy, .pharma56 .ph-expertise-copy, .pharma56 .ph-deliver-copy { text-align: left; }
          .pharma56 .ph-terms-copy > .ph-eyebrow, .pharma56 .ph-terms-copy > h2, .pharma56 .ph-terms-copy > .ph-large,
          .pharma56 .ph-revision-copy > .ph-eyebrow, .pharma56 .ph-revision-copy > h2, .pharma56 .ph-revision-copy > .ph-large,
          .pharma56 .ph-ai-copy > .ph-eyebrow, .pharma56 .ph-ai-copy > h2, .pharma56 .ph-ai-copy > .ph-large,
          .pharma56 .ph-expertise-copy > .ph-eyebrow, .pharma56 .ph-expertise-copy > h2, .pharma56 .ph-expertise-copy > .ph-large,
          .pharma56 .ph-deliver-copy > .ph-eyebrow, .pharma56 .ph-deliver-copy > h2, .pharma56 .ph-deliver-copy > .ph-large { text-align: center; }
          .pharma56 .ph-terms-copy .ph-large, .pharma56 .ph-revision-copy .ph-large, .pharma56 .ph-ai-copy .ph-large, .pharma56 .ph-expertise-copy .ph-large, .pharma56 .ph-deliver-copy .ph-large { margin-inline: auto; }
          .pharma56 .ph-terms-copy .ph-btns, .pharma56 .ph-ai-copy .ph-btns, .pharma56 .ph-deliver-copy .ph-btns { justify-content: center; }
          .pharma56 .ph-checklist { text-align: left; }
          .pharma56 .ph-revision-notes { text-align: left; }
          .pharma56 .ph-risk-grid { grid-template-columns: 1fr; gap: 18px; }
          .pharma56 .ph-languages-grid { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-audience-grid { grid-template-columns: 1fr; }
          .pharma56 .ph-audience:nth-child(odd), .pharma56 .ph-audience:nth-child(even) { border-right: 0; padding: 22px 0; }
          .pharma56 .ph-why-grid { grid-template-columns: repeat(2,1fr); }
          .pharma56 .ph-heading-center { max-width: 760px; }
        }

        @media (max-width: 620px) {
          .pharma56 .ph-shell { padding-inline: 20px; }
          .pharma56 .ph-section { padding-block: 68px; }
          .pharma56 .ph-section-dense { padding-block: 64px; }
          .pharma56 h1 { font-size: 38px; }
          .pharma56 h2 { font-size: 30px; }
          .pharma56 h3 { font-size: 20px; }
          .pharma56 .ph-large { font-size: 18px; }
          .pharma56 .ph-hero { padding-block: 70px 62px; }
          .pharma56 .ph-hero-art { min-height: 300px; }
          .pharma56 .ph-languages-grid { grid-template-columns: 1fr; }
          .pharma56 .ph-btns { flex-direction: column; width: 100%; }
          .pharma56 .ph-btn { width: 100%; min-height: 50px; }
          .pharma56 .ph-heading-center { text-align: center; }
          .pharma56 .ph-lifecycle-row { grid-template-columns: 42px 1fr; gap: 14px; align-items: start; }
          .pharma56 .ph-lifecycle-tag { grid-column: 2; white-space: normal; }
          .pharma56 .ph-scope-row { grid-template-columns: 44px 1fr; gap: 15px; }
          .pharma56 .ph-scope-icon { width: 44px; height: 44px; border-radius: 14px; }
          .pharma56 .ph-scope-row h3 { padding-top: 8px; }
          .pharma56 .ph-scope-content { grid-column: 1 / -1; padding-left: 0; }
          .pharma56 .ph-scope-list { display: grid; gap: 6px; }
          .pharma56 .ph-checklist { grid-template-columns: 1fr; }
          .pharma56 .ph-term-hub { grid-template-columns: 1fr; }
          .pharma56 .ph-term-center { width: 124px; height: 124px; margin: 6px auto; order: -1; }
          .pharma56 .ph-term-stack { grid-template-columns: 1fr 1fr; }
          .pharma56 .ph-downstream { grid-template-columns: 1fr 1fr; }
          .pharma56 .ph-revision-notes { grid-template-columns: 1fr; }
          .pharma56 .ph-workflow { grid-template-columns: 1fr; border-bottom: 0; }
          .pharma56 .ph-step, .pharma56 .ph-step:nth-child(3), .pharma56 .ph-step:nth-child(4), .pharma56 .ph-step:nth-child(5) { grid-column: auto; border-right: 0; border-bottom: 1px solid var(--line); padding: 22px 0; display: grid; grid-template-columns: 42px 1fr; column-gap: 14px; }
          .pharma56 .ph-step-num { grid-row: 1 / span 2; padding-top: 4px; }
          .pharma56 .ph-step h3 { margin-top: 0; }
          .pharma56 .ph-step p { grid-column: 2; }
          .pharma56 .ph-ai-point { text-align: left; }
          .pharma56 .ph-panel-head { flex-direction: column; align-items: flex-start; gap: 10px; }
          .pharma56 .ph-ai-flow-row { grid-template-columns: 26px 1fr; }
          .pharma56 .ph-ai-flow-row > span { grid-column: 2; }
          .pharma56 .ph-expertise-list { grid-template-columns: 1fr; }
          .pharma56 .ph-expertise-item:nth-child(odd), .pharma56 .ph-expertise-item:nth-child(even) { border-right: 0; padding: 18px 0; }
          .pharma56 .ph-qa-grid { grid-template-columns: 1fr; border-bottom: 0; }
          .pharma56 .ph-qa-col, .pharma56 .ph-qa-col:first-child, .pharma56 .ph-qa-col:nth-child(3), .pharma56 .ph-qa-col:last-child { padding: 22px 0; border-right: 0; border-bottom: 1px solid var(--line); }
          .pharma56 .ph-file-top { grid-template-columns: 1fr; }
          .pharma56 .ph-file-arrow { transform: rotate(90deg); }
          .pharma56 .ph-file-checks { grid-template-columns: 1fr; }
          .pharma56 .ph-scale-track { grid-template-columns: 1fr; }
          .pharma56 .ph-scale-item, .pharma56 .ph-scale-item:nth-child(2) { border-right: 0; border-bottom: 1px solid #DEDFE2; }
          .pharma56 .ph-scale-item:last-child { border-bottom: 0; }
          .pharma56 .ph-audience-grid { grid-template-columns: 1fr; }
          .pharma56 .ph-audience:nth-child(odd), .pharma56 .ph-audience:nth-child(even) { border-right: 0; padding: 22px 0; }
          .pharma56 .ph-why-grid { grid-template-columns: 1fr; }
          .pharma56 summary { font-size: 17px; min-height: 72px; }
          .pharma56 .ph-faq-answer { padding-right: 0; }
          .pharma56 .ph-cta { padding-block: 68px; text-align: center; }
          .pharma56 .ph-cta h2, .pharma56 .ph-cta p { margin-inline: auto; }
        }

        @media (max-width: 360px) {
          .pharma56 .ph-hero-art { min-height: 260px; }
          .pharma56 .ph-downstream { grid-template-columns: 1fr; }
          .pharma56 .ph-term-stack { grid-template-columns: 1fr; }
          .pharma56 .ph-scope-content { padding-left: 0; }
        }
      `}</style>

      <section className="ph-hero">
        <div className="ph-shell ph-hero-grid">
          <div className="ph-hero-copy">
            <h1>Pharmaceutical Translation Services for Global Drug Development</h1>
            <p className="ph-large">Stepes provides specialized pharmaceutical translation services for clinical development, regulatory submissions, CMC, pharmacovigilance, labeling, manufacturing, medical affairs, and commercial content in 100+ languages.</p>
            <p>From an early-stage clinical program to global launch and post-approval updates, we combine pharmaceutical linguists, professional review, AI-powered workflows, terminology management, translation memory, multilingual publishing, and quality assurance to keep your content accurate, consistent, and connected.</p>
            <div className="ph-btns">
              <a className="ph-btn ph-btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Icon name="arrow" size={17} /></a>
              <a className="ph-btn ph-btn-secondary" href="https://www.stepes.com/contact-us/">Talk to a Pharmaceutical Translation Expert</a>
            </div>
          </div>

          <div className="ph-hero-art" aria-label="Pharmaceutical content lifecycle illustration">
            <svg className="ph-hero-svg" viewBox="0 0 620 500" role="img" aria-label="Connected pharmaceutical lifecycle from drug development to global patients">
              <defs>
                <marker id="ph-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7" fill="none" stroke="#8B8D92" strokeWidth="1.2"/></marker>
              </defs>
              <g fill="none" stroke="#5B5D62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M92 242 C140 135 220 90 310 96 C414 102 500 165 530 252" stroke="#C4C5C8"/>
                <path d="M530 252 C518 351 435 410 326 414 C214 418 126 352 92 242" stroke="#C4C5C8"/>
                <path d="M157 170 C200 207 225 231 263 250" stroke="#8B8D92" markerEnd="url(#ph-arrow)"/>
                <path d="M300 244 C352 222 382 204 420 174" stroke="#8B8D92" markerEnd="url(#ph-arrow)"/>
                <path d="M455 216 C472 248 474 273 466 304" stroke="#8B8D92" markerEnd="url(#ph-arrow)"/>
                <path d="M431 344 C383 365 348 372 301 370" stroke="#8B8D92" markerEnd="url(#ph-arrow)"/>
                <path d="M262 366 C211 348 184 327 160 298" stroke="#8B8D92" markerEnd="url(#ph-arrow)"/>

                <g transform="translate(92 112)">
                  <circle cx="55" cy="55" r="51" fill="#fff" stroke="#D7D7DA"/>
                  <circle cx="45" cy="49" r="9"/>
                  <circle cx="70" cy="39" r="7"/>
                  <circle cx="72" cy="70" r="8"/>
                  <path d="m52 45 12-4M51 55l14 10M70 46l2 16"/>
                  <text x="55" y="126" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Drug Development</text>
                </g>

                <g transform="translate(243 188)">
                  <rect x="0" y="0" width="112" height="118" rx="20" fill="#FDF2F7" stroke="#D9A8BC"/>
                  <path d="M32 26h48M32 43h38M32 60h48M32 77h30" stroke="#C11D63"/>
                  <circle cx="87" cy="87" r="13" stroke="#C11D63"/>
                  <path d="m82 87 4 4 7-8" stroke="#C11D63"/>
                  <text x="56" y="140" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Clinical</text>
                </g>

                <g transform="translate(405 108)">
                  <circle cx="55" cy="55" r="51" fill="#fff" stroke="#D7D7DA"/>
                  <path d="M35 31h31l13 13v37H35z"/>
                  <path d="M66 31v15h15M44 56h25M44 67h25"/>
                  <text x="55" y="126" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Regulatory</text>
                </g>

                <g transform="translate(430 280)">
                  <circle cx="55" cy="55" r="51" fill="#fff" stroke="#D7D7DA"/>
                  <path d="M28 48h54v32H28zM36 35h38l8 13H28z"/>
                  <path d="M45 57h22M45 68h14"/>
                  <text x="55" y="126" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Labeling & Safety</text>
                </g>

                <g transform="translate(242 323)">
                  <circle cx="55" cy="55" r="51" fill="#fff" stroke="#D7D7DA"/>
                  <circle cx="55" cy="51" r="25"/>
                  <path d="M30 51h50M55 26a45 45 0 0 1 0 50M55 26a45 45 0 0 0 0 50"/>
                  <text x="55" y="126" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Global Markets</text>
                </g>

                <g transform="translate(78 250)">
                  <circle cx="55" cy="55" r="51" fill="#fff" stroke="#D7D7DA"/>
                  <path d="M27 78V48l18 10V48l18 10V39h20v39z"/>
                  <path d="M35 69h8M51 69h8M70 50h13"/>
                  <text x="55" y="126" textAnchor="middle" fill="#3F4146" stroke="none" fontSize="14" fontWeight="600">Manufacturing</text>
                </g>
              </g>
              <g transform="translate(250 74)">
                <rect x="0" y="0" width="128" height="34" rx="17" fill="#C11D63"/>
                <text x="64" y="22" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">CONNECTED CONTENT</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div className="ph-proof">
        <div className="ph-shell ph-proof-row" aria-label="Pharmaceutical translation proof points">
          <div className="ph-proof-item"><strong>100+ Languages</strong><span>Global pharmaceutical coverage</span></div>
          <div className="ph-proof-item"><strong>ISO 17100</strong><span>Translation quality framework</span></div>
          <div className="ph-proof-item"><strong>ISO 9001:2015</strong><span>Quality management</span></div>
          <div className="ph-proof-item"><strong>ISO 13485:2016</strong><span>Life sciences quality system</span></div>
          <div className="ph-proof-item"><strong>AI + Human</strong><span>Risk-appropriate workflows</span></div>
        </div>
      </div>

      <section className="ph-section">
        <div className="ph-shell ph-connected-grid">
          <div className="ph-connected-copy">
            <h2>Pharmaceutical Content Is Connected Across the Drug Lifecycle</h2>
            <p className="ph-large">A clinical protocol informs investigator and site materials. Study results become part of regulatory submissions. Regulatory decisions influence product labeling. Approved terminology carries into safety, manufacturing, medical affairs, and patient communication.</p>
            <p>Stepes helps pharmaceutical teams manage these connections as one multilingual content lifecycle, combining specialized linguists, approved terminology, translation memory, professional review, automated QA, multilingual publishing, and reusable language assets.</p>
            <div className="ph-link-row">
              <a className="ph-link" href="https://www.stepes.com/life-sciences-translation-services/">Life Sciences Translation Services <LinkArrow /></a>
              <a className="ph-link" href="https://www.stepes.com/medical-translation-services/">Medical Translation Services <LinkArrow /></a>
            </div>
          </div>
          <div className="ph-lifecycle" aria-label="Pharmaceutical content lifecycle">
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="flask" /></div><div><h3>Research & Development</h3><p>Scientific documentation and terminology establish the foundation for downstream multilingual content.</p></div><span className="ph-lifecycle-tag">Discover</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="clinical" /></div><div><h3>Clinical Development</h3><p>Protocols, ICFs, site materials, COAs, reports, and participant communications move across study markets.</p></div><span className="ph-lifecycle-tag">Study</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="regulatory" /></div><div><h3>Regulatory & CMC</h3><p>Submission content requires controlled terminology, consistency across modules, and careful document handling.</p></div><span className="ph-lifecycle-tag">Submit</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="label" /></div><div><h3>Labeling & Launch</h3><p>Approved regulatory language flows into labels, packaging, product information, and launch materials.</p></div><span className="ph-lifecycle-tag">Launch</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="shield" /></div><div><h3>Pharmacovigilance & Safety</h3><p>Safety cases, periodic reports, risk plans, and new findings require accurate, time-sensitive multilingual handling.</p></div><span className="ph-lifecycle-tag">Monitor</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="factory" /></div><div><h3>Manufacturing & Quality</h3><p>SOPs, batch records, validation, training, and quality documentation support consistent global operations.</p></div><span className="ph-lifecycle-tag">Produce</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="science" /></div><div><h3>Medical Affairs & Commercial</h3><p>Scientific, HCP, patient, market-access, and commercial content extends approved product meaning to global audiences.</p></div><span className="ph-lifecycle-tag">Communicate</span></div>
            <div className="ph-lifecycle-row"><div className="ph-lifecycle-icon"><Icon name="versions" /></div><div><h3>Lifecycle Management</h3><p>Variations, labeling revisions, safety updates, and product changes propagate across related multilingual assets.</p></div><span className="ph-lifecycle-tag">Maintain</span></div>
          </div>
        </div>
      </section>

      <section className="ph-section ph-scope">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Translation Across the Pharmaceutical Lifecycle</h2>
            <p className="ph-large ph-intro">Stepes supports scientific, clinical, regulatory, safety, operational, and market-facing pharmaceutical content with workflows matched to the content's purpose, audience, and level of risk.</p>
          </div>

          <div className="ph-scope-wrap">
            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="flask" /></div>
              <h3>Research & Drug Development</h3>
              <div className="ph-scope-content"><p>Translate scientific information across international research teams while maintaining continuity as content progresses toward clinical development and regulatory documentation.</p><ul className="ph-scope-list"><li>Preclinical documentation</li><li>Drug discovery materials</li><li>Scientific reports</li><li>Study plans</li><li>Pharmacology and toxicology</li><li>Chemistry and analytical documentation</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/biotechnology-translation-services/">Biotechnology Translation Services <LinkArrow /></a></div></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="clinical" /></div>
              <h3>Clinical Development</h3>
              <div className="ph-scope-content"><p>Support global studies with specialized translation for sponsor, CRO, investigator, site, ethics, regulator, patient, and caregiver content.</p><ul className="ph-scope-list"><li>Protocols and amendments</li><li>Investigator's Brochures</li><li>Informed Consent Forms</li><li>Case Report Forms</li><li>Clinical Study Reports</li><li>COA and eCOA content</li><li>Patient materials</li><li>Site documentation</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/clinical-trial-translations/">Clinical Trial Translation <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/linguistic-validation/">Linguistic Validation Services <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/informed-consent-form-translation-services/">Informed Consent Form Translation <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/cro-translation-services/">CRO Translation Services <LinkArrow /></a></div></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="regulatory" /></div>
              <h3>Regulatory & CMC</h3>
              <div className="ph-scope-content"><p>Maintain precision and terminology consistency across structured regulatory and technical documentation used to communicate quality, safety, efficacy, and manufacturing information.</p><ul className="ph-scope-list"><li>CTD and eCTD content</li><li>CMC documentation</li><li>Regulatory dossiers</li><li>Marketing authorization content</li><li>Health authority responses</li><li>Variations and amendments</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/regulatory-translation-services/">Regulatory Translation Services <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/document-translation-services/">Document Translation Services <LinkArrow /></a></div></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="label" /></div>
              <h3>Pharmaceutical Labeling & Packaging</h3>
              <div className="ph-scope-content"><p>Protect approved meaning while adapting labels and packaging for different languages, markets, formats, typographic requirements, and space constraints.</p><ul className="ph-scope-list"><li>Prescribing information</li><li>SmPCs and PILs</li><li>Medication guides</li><li>Product labels</li><li>Package inserts</li><li>Cartons and packaging</li><li>Safety statements</li><li>Artwork</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/labeling-translation-services/">Labeling Translation Services <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual DTP Services <LinkArrow /></a></div></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="shield" /></div>
              <h3>Pharmacovigilance & Drug Safety</h3>
              <div className="ph-scope-content"><p>Process recurring safety content with pharmaceutical expertise, controlled terminology, reusable language assets, professional review, and dependable multilingual workflows.</p><ul className="ph-scope-list"><li>ICSRs</li><li>Adverse event narratives</li><li>CIOMS forms</li><li>DSURs</li><li>PSURs and PBRERs</li><li>Risk Management Plans</li><li>Safety communications</li><li>Regulatory correspondence</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services <LinkArrow /></a></div></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="factory" /></div>
              <h3>Manufacturing, Quality & GMP</h3>
              <div className="ph-scope-content"><p>Preserve procedural meaning, terminology, units, references, and document structure so multilingual teams can execute controlled manufacturing and quality processes consistently.</p><ul className="ph-scope-list"><li>SOPs</li><li>Manufacturing instructions</li><li>Batch records</li><li>Validation documentation</li><li>CAPA content</li><li>Deviation reports</li><li>Quality manuals</li><li>Training materials</li></ul></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="science" /></div>
              <h3>Medical Affairs & Scientific Communications</h3>
              <div className="ph-scope-content"><p>Combine scientific subject expertise with natural professional communication for healthcare professionals, researchers, advisory groups, and global medical teams.</p><ul className="ph-scope-list"><li>Publications and manuscripts</li><li>Abstracts and posters</li><li>Congress materials</li><li>HCP education</li><li>Medical information</li><li>Advisory board content</li><li>Scientific presentations</li></ul></div>
            </article>

            <article className="ph-scope-row">
              <div className="ph-scope-icon"><Icon name="globe" /></div>
              <h3>Commercial, Market Access & Patient Communications</h3>
              <div className="ph-scope-content"><p>Preserve approved product meaning while adapting communication naturally for local HCP, patient, payer, and commercial audiences.</p><ul className="ph-scope-list"><li>HCP marketing</li><li>Patient education</li><li>Product websites</li><li>Market access content</li><li>Value communication</li><li>Product launch materials</li><li>Training</li><li>Multimedia</li></ul><div className="ph-scope-links"><a className="ph-link" href="https://www.stepes.com/marketing-translation-services/">Marketing Translation Services <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/website-translation-services/">Website Translation Services <LinkArrow /></a></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="ph-section ph-terms-section">
        <div className="ph-shell ph-terms-grid">
          <div className="ph-terms-copy">
            <p className="ph-eyebrow">TERMINOLOGY & LANGUAGE ASSETS</p>
            <h2>One Pharmaceutical Vocabulary Across Every Product and Market</h2>
            <p className="ph-large">A pharmaceutical product can generate hundreds or thousands of multilingual assets. Critical terminology should not drift from a protocol to a submission, label, safety report, manufacturing procedure, or patient communication.</p>
            <p>Stepes combines client-approved terminology, translation memory, reference content, style guidance, and automated terminology checks to create reusable multilingual knowledge that grows with your program.</p>
            <ul className="ph-checklist">
              <li><Icon name="check" size={18}/>Product and brand names</li><li><Icon name="check" size={18}/>Active ingredients</li>
              <li><Icon name="check" size={18}/>Indications and mechanisms</li><li><Icon name="check" size={18}/>Dose, strength, and administration</li>
              <li><Icon name="check" size={18}/>Clinical and study terminology</li><li><Icon name="check" size={18}/>Adverse events and safety language</li>
              <li><Icon name="check" size={18}/>Regulatory terminology</li><li><Icon name="check" size={18}/>Manufacturing and quality terms</li>
            </ul>
            <div className="ph-btns ph-editorial-links"><a className="ph-link" href="https://www.stepes.com/terminology-management/">Terminology Management <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/translation-memory/">Translation Memory <LinkArrow /></a></div>
          </div>

          <div className="ph-terms-visual" aria-label="Central pharmaceutical terminology connected to content types">
            <div className="ph-term-hub">
              <div className="ph-term-stack"><div className="ph-term-node">Clinical Protocol</div><div className="ph-term-node">Regulatory Submission</div><div className="ph-term-node">Product Label</div></div>
              <div className="ph-term-center"><span>Controlled</span><strong>Pharma<br/>Terminology</strong></div>
              <div className="ph-term-stack"><div className="ph-term-node">Safety Report</div><div className="ph-term-node">Manufacturing SOP</div><div className="ph-term-node">Patient / HCP Content</div></div>
            </div>
            <p className="ph-term-caption">Terminology databases + translation memory + approved language + automated QA</p>
          </div>
        </div>
      </section>

      <section className="ph-section ph-dark">
        <div className="ph-shell ph-revision-grid">
          <div className="ph-revision-copy">
            <p className="ph-eyebrow">VERSION & CHANGE MANAGEMENT</p>
            <h2>Every Pharmaceutical Revision Has Downstream Impact</h2>
            <p className="ph-large">A change to a dosage, indication, contraindication, formulation, safety statement, claim, or manufacturing process may require coordinated updates across multiple documents and languages.</p>
            <p>Stepes helps teams identify what changed, reuse approved language where appropriate, focus linguistic review on affected content, and carry validated terminology forward into future releases.</p>
            <div className="ph-revision-notes">
              <div className="ph-revision-note"><Icon name="check" size={18}/><p>Identify new and modified content</p></div>
              <div className="ph-revision-note"><Icon name="check" size={18}/><p>Reuse approved translations</p></div>
              <div className="ph-revision-note"><Icon name="check" size={18}/><p>Focus expert review on changes</p></div>
              <div className="ph-revision-note"><Icon name="check" size={18}/><p>Maintain cross-document consistency</p></div>
            </div>
          </div>

          <div className="ph-change-board" aria-label="A source change propagating to downstream pharmaceutical content">
            <div className="ph-source-change"><span>Approved source revision</span><strong>Safety statement updated</strong></div>
            <div className="ph-change-line" />
            <div className="ph-downstream">
              <div className="ph-downstream-item"><strong>Regulatory</strong><span>Submission update</span></div>
              <div className="ph-downstream-item"><strong>Labeling</strong><span>Approved label text</span></div>
              <div className="ph-downstream-item"><strong>Safety</strong><span>PV communication</span></div>
              <div className="ph-downstream-item"><strong>Medical Affairs</strong><span>HCP information</span></div>
              <div className="ph-downstream-item"><strong>Patient Content</strong><span>Market materials</span></div>
              <div className="ph-downstream-item"><strong>Language Assets</strong><span>TM + terminology update</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <p className="ph-eyebrow">RISK-APPROPRIATE WORKFLOWS</p>
            <h2>The Right Translation Workflow for Every Pharmaceutical Content Type</h2>
            <p className="ph-large ph-intro">A regulatory submission, patient recruitment flyer, safety narrative, manufacturing SOP, scientific presentation, and commercial website should not automatically move through the same translation process.</p>
          </div>

          <div className="ph-workflow" aria-label="Pharmaceutical translation workflow">
            <div className="ph-step"><span className="ph-step-num">01</span><h3>Assess Content</h3><p>Confirm audience, intended use, complexity, regulatory importance, confidentiality, volume, and timing.</p></div>
            <div className="ph-step"><span className="ph-step-num">02</span><h3>Prepare Language Assets</h3><p>Apply terminology, translation memory, references, prior approvals, and style guidance.</p></div>
            <div className="ph-step"><span className="ph-step-num">03</span><h3>Match the Workflow</h3><p>Select human, AI-assisted, review, validation, and publishing steps appropriate to the content.</p></div>
            <div className="ph-step"><span className="ph-step-num">04</span><h3>Translate & Review</h3><p>Route content to pharmaceutical linguists and reviewers with the right subject and audience experience.</p></div>
            <div className="ph-step"><span className="ph-step-num">05</span><h3>QA, Deliver & Reuse</h3><p>Complete linguistic and final-format QA, then retain approved language for future updates.</p></div>
          </div>

          <div className="ph-risk-grid">
            <div className="ph-risk"><h3>High-Impact Regulated Content</h3><p>Clinical, regulatory, safety, labeling, and patient-facing content may require specialist human translation, independent review, terminology controls, structured QA, and client-defined validation.</p></div>
            <div className="ph-risk"><h3>Controlled Operational Content</h3><p>Manufacturing, SOP, validation, and quality documentation requires procedural accuracy, technical terminology, document consistency, and careful file handling.</p></div>
            <div className="ph-risk"><h3>High-Volume & Commercial Content</h3><p>Depending on risk and intended use, AI-assisted translation or professional post-editing can accelerate production while retaining appropriate human oversight.</p></div>
          </div>
        </div>
      </section>

      <section className="ph-section ph-ai-section">
        <div className="ph-shell ph-ai-grid">
          <div className="ph-ai-copy">
            <h2>AI-Powered Pharmaceutical Translation With Expert Human Oversight</h2>
            <p className="ph-large">AI can make pharmaceutical translation workflows faster and more efficient when it is used selectively, governed by language assets, and matched to the content's risk and intended use.</p>
            <p>Stepes uses DomainAI-assisted automation to reduce repetitive manual work and direct linguistic attention toward content that needs professional judgment, scientific interpretation, regulatory awareness, or patient-facing clarity.</p>
            <div className="ph-ai-points">
              <div className="ph-ai-point"><Icon name="ai"/><div><strong>Automate Where It Adds Value</strong><span>File analysis, terminology extraction, TM matching, repeated-content identification, change detection, first-pass translation where appropriate, and automated QA.</span></div></div>
              <div className="ph-ai-point"><Icon name="people"/><div><strong>Keep Experts in the Loop</strong><span>Qualified pharmaceutical linguists and reviewers protect meaning where human judgment and subject expertise matter.</span></div></div>
              <div className="ph-ai-point"><Icon name="shield"/><div><strong>Match Technology to Risk</strong><span>Do not treat every pharmaceutical content type as equally suitable for automation.</span></div></div>
            </div>
            <div className="ph-btns"><a className="ph-link" href="https://www.stepes.com/ai-translation-services/">Explore AI Translation Services <LinkArrow /></a></div>
          </div>

          <div className="ph-ai-panel" aria-label="Illustrative pharmaceutical AI and human review workflow">
            <div className="ph-panel-head"><strong>Pharmaceutical Translation Workflow</strong><span className="ph-status">Quality controls active</span></div>
            <div className="ph-ai-flow">
              <div className="ph-ai-flow-row"><Icon name="file"/><strong>Source + approved references</strong><span>Prepared</span></div>
              <div className="ph-ai-flow-row"><Icon name="terms"/><strong>Terminology + translation memory</strong><span>Applied</span></div>
              <div className="ph-ai-flow-row"><Icon name="ai"/><strong>DomainAI-assisted processing</strong><span>Risk-matched</span></div>
              <div className="ph-ai-flow-row"><Icon name="people"/><strong>Pharmaceutical linguist review</strong><span>Assigned</span></div>
              <div className="ph-ai-flow-row"><Icon name="qa"/><strong>Linguistic + automated QA</strong><span>Verified</span></div>
            </div>
            <div className="ph-ai-output"><strong>AI accelerates the workflow. Pharmaceutical experts protect the meaning.</strong><p>Final workflow depth is configured for the document type, audience, intended use, and client requirements.</p></div>
          </div>
        </div>
      </section>

      <section className="ph-section">
        <div className="ph-shell ph-expertise-grid">
          <div className="ph-expertise-copy">
            <h2>Specialized Pharmaceutical Linguists for Specialized Content</h2>
            <p className="ph-large">The word “pharmaceutical” covers many scientific disciplines and content types. Stepes matches linguists to language pair, subject area, document type, target audience, market, and client requirements.</p>
            <p>For recurring programs, preferred linguist and reviewer teams can build familiarity with your products, terminology, style, approved language, and review expectations over time.</p>
            <div className="ph-team-note"><strong>Dedicated-team continuity</strong><p>Stepes' myTranslator service helps you retain preferred subject-matter linguists across ongoing programs, reducing repeated onboarding and strengthening consistency as product knowledge accumulates.</p><a className="ph-link" href="https://www.stepes.com/mytranslator/">Explore myTranslator <LinkArrow /></a></div>
          </div>
          <div className="ph-expertise-list" aria-label="Pharmaceutical linguist expertise">
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Medicine</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Pharmacy</span></div>
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Pharmacology</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Chemistry</span></div>
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Biotechnology</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Clinical Research</span></div>
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Regulatory Affairs</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Pharmacovigilance</span></div>
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Pharmaceutical Manufacturing</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Quality Management</span></div>
            <div className="ph-expertise-item"><Icon name="check" size={19}/><span>Medical Communications</span></div><div className="ph-expertise-item"><Icon name="check" size={19}/><span>Life Sciences</span></div>
          </div>
        </div>
      </section>

      <section className="ph-section ph-qa">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Pharmaceutical Quality Built Into Every Step</h2>
            <p className="ph-large ph-intro">Quality starts with content assessment, terminology, resource selection, workflow design, references, and review criteria—not with proofreading alone after translation is complete.</p>
          </div>
          <div className="ph-qa-grid">
            <div className="ph-qa-col"><div className="ph-qa-icon"><Icon name="qa"/></div><h3>Linguistic Quality</h3><ul><li>Accuracy and completeness</li><li>Meaning and fluency</li><li>Grammar and style</li><li>Readability</li><li>Internal consistency</li><li>Audience appropriateness</li></ul></div>
            <div className="ph-qa-col"><div className="ph-qa-icon"><Icon name="terms"/></div><h3>Pharmaceutical Terminology</h3><ul><li>Product names and active ingredients</li><li>Dosage forms and strengths</li><li>Units and concentrations</li><li>Routes of administration</li><li>Clinical and safety terminology</li><li>Manufacturing terminology</li></ul></div>
            <div className="ph-qa-col"><div className="ph-qa-icon"><Icon name="clinical"/></div><h3>Structured Content</h3><ul><li>Numbers and dates</li><li>Tables and figures</li><li>Captions and footnotes</li><li>Cross-references</li><li>Section numbering</li><li>References and callouts</li></ul></div>
            <div className="ph-qa-col"><div className="ph-qa-icon"><Icon name="file"/></div><h3>Final-File QA</h3><ul><li>Layout and text expansion</li><li>Fonts and line breaks</li><li>Tables and graphics</li><li>Language typography</li><li>Artwork placement</li><li>Output validation</li></ul></div>
          </div>
          <div className="ph-cert-strip" aria-label="Quality certifications"><span className="ph-cert">ISO 17100</span><span className="ph-cert">ISO 9001:2015</span><span className="ph-cert">ISO 13485:2016</span><span className="ph-cert">Project-specific review & validation workflows</span></div>
        </div>
      </section>

      <section className="ph-section ph-deliverable">
        <div className="ph-shell ph-deliver-grid">
          <div className="ph-deliver-copy">
            <p className="ph-eyebrow">MULTILINGUAL PRODUCTION</p>
            <h2>Preserve the Pharmaceutical Deliverable, Not Just the Translation</h2>
            <p className="ph-large">Regulatory dossiers contain complex structures. Clinical documents use tables, forms, and controlled numbering. Manufacturing procedures include diagrams and callouts. Labels must fit defined artwork. Medical affairs teams work in presentations.</p>
            <p>Stepes combines translation with multilingual file engineering, desktop publishing, artwork support, and final-format QA so translated content remains practical for review, submission, publishing, training, or the next production stage.</p>
            <div className="ph-format-list"><span className="ph-format">DOCX</span><span className="ph-format">XLSX</span><span className="ph-format">PPTX</span><span className="ph-format">PDF</span><span className="ph-format">InDesign</span><span className="ph-format">Illustrator</span><span className="ph-format">XML</span><span className="ph-format">Web</span><span className="ph-format">Multimedia</span></div>
            <div className="ph-btns"><a className="ph-link" href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual DTP Services <LinkArrow /></a><a className="ph-link" href="https://www.stepes.com/document-translation-services/">Document Translation Services <LinkArrow /></a></div>
          </div>

          <div className="ph-file-board" aria-label="Source pharmaceutical file transformed into a multilingual deliverable">
            <div className="ph-file-top">
              <div className="ph-file-card"><Icon name="file" size={26}/><strong>Source Regulatory Document</strong><span>Structured tables, references, callouts, and controlled formatting</span></div>
              <div className="ph-file-arrow"><Icon name="arrow" size={22}/></div>
              <div className="ph-file-card"><Icon name="globe" size={26}/><strong>Market-Ready Deliverable</strong><span>Translated, reviewed, formatted, and final-file QA checked</span></div>
            </div>
            <div className="ph-file-checks"><div className="ph-file-check"><Icon name="check" size={17}/>Document structure preserved</div><div className="ph-file-check"><Icon name="check" size={17}/>Tables and figures checked</div><div className="ph-file-check"><Icon name="check" size={17}/>Text expansion managed</div><div className="ph-file-check"><Icon name="check" size={17}/>Typography reviewed</div><div className="ph-file-check"><Icon name="check" size={17}/>Artwork and callouts aligned</div><div className="ph-file-check"><Icon name="check" size={17}/>Final output validated</div></div>
          </div>
        </div>
      </section>

      <section className="ph-section">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Pharmaceutical Translation in 100+ Languages</h2>
            <p className="ph-large ph-intro">Stepes supports major pharmaceutical markets with native-language professionals, subject-matter expertise, client terminology, reference materials, and market-appropriate review workflows.</p>
          </div>
          <div className="ph-languages-grid">
            <div className="ph-language-group"><h3>European Languages</h3><p>French, German, Spanish, Italian, Portuguese, Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Czech, Romanian, Greek, Hungarian, and more.</p></div>
            <div className="ph-language-group"><h3>Asia-Pacific Languages</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and additional Asia-Pacific languages.</p></div>
            <div className="ph-language-group"><h3>Middle Eastern & African Languages</h3><p>Arabic, Hebrew, Turkish, Afrikaans, and additional languages for pharmaceutical programs across the Middle East and Africa.</p></div>
            <div className="ph-language-group"><h3>Regional Market Variants</h3><p>Brazilian Portuguese, Canadian French, Latin American Spanish, and other market-specific variants aligned to the intended audience and regulatory context.</p></div>
          </div>
          <p className="ph-language-note">Language coverage alone is not enough for pharmaceutical content. The translation workflow must also reflect subject matter, target-market conventions, intended use, terminology requirements, and the level of professional review the content needs.</p>
        </div>
      </section>

      <section className="ph-section ph-scale-section">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Scale From One Pharmaceutical Document to a Global Program</h2>
            <p className="ph-large ph-intro">Translation needs can begin with a single file and grow into a recurring multilingual operation. Stepes supports pharmaceutical organizations at each level while carrying terminology, language assets, and program knowledge forward.</p>
          </div>
          <div className="ph-scale-track">
            <div className="ph-scale-item"><Icon name="file"/><h3>Individual Projects</h3><p>Translate a protocol, regulatory document, SOP, safety report, label, presentation, or other standalone pharmaceutical asset.</p></div>
            <div className="ph-scale-item"><Icon name="clinical"/><h3>Clinical or Product Programs</h3><p>Coordinate related content, terminology, translation memory, language teams, and review around one study, compound, therapy, or product.</p></div>
            <div className="ph-scale-item"><Icon name="globe"/><h3>Multimarket Launches</h3><p>Manage simultaneous multilingual production across many languages and deliverables for major milestones or product launches.</p></div>
            <div className="ph-scale-item"><Icon name="scale"/><h3>Ongoing Global Operations</h3><p>Support continuous clinical, regulatory, safety, manufacturing, medical affairs, commercial, and lifecycle content.</p></div>
          </div>
          <div className="ph-enterprise-row"><span className="ph-cap">Centralized terminology</span><span className="ph-cap">Translation memory</span><span className="ph-cap">Dedicated language teams</span><span className="ph-cap">DomainAI-assisted automation</span><span className="ph-cap">Multilingual review</span><span className="ph-cap">Automated QA</span><span className="ph-cap">Version management</span><span className="ph-cap">File processing</span><span className="ph-cap">Centralized project management</span><span className="ph-cap">Multilingual publishing</span><span className="ph-cap">Secure cloud collaboration</span></div>
        </div>
      </section>

      <section className="ph-section">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <p className="ph-eyebrow">WHO WE SUPPORT</p>
            <h2>Pharmaceutical Translation for Global Life Sciences Organizations</h2>
            <p className="ph-large ph-intro">Stepes supports organizations and teams throughout the pharmaceutical ecosystem with connected multilingual workflows across content types, markets, and product lifecycles.</p>
          </div>
          <div className="ph-audience-grid">
            <div className="ph-audience"><Icon name="flask"/><div><h3>Pharmaceutical Companies</h3><p>Clinical development, regulatory affairs, safety, manufacturing, medical affairs, commercialization, and post-approval lifecycle content.</p></div></div>
            <div className="ph-audience"><Icon name="science"/><div><h3>Biopharmaceutical & Biotechnology Companies</h3><p>Innovative medicines, biologics, vaccines, advanced therapies, scientific research, regulatory documentation, and biomanufacturing.</p></div></div>
            <div className="ph-audience"><Icon name="clinical"/><div><h3>Contract Research Organizations</h3><p>Multilingual clinical content coordinated across sponsors, countries, sites, investigators, and participants.</p></div></div>
            <div className="ph-audience"><Icon name="factory"/><div><h3>CDMOs & Manufacturing Partners</h3><p>Manufacturing, quality, validation, technical, training, and operational documentation for international production environments.</p></div></div>
            <div className="ph-audience"><Icon name="shield"/><div><h3>Regulatory & Safety Teams</h3><p>Submissions, labeling, pharmacovigilance, health authority communication, safety content, and recurring product updates.</p></div></div>
            <div className="ph-audience"><Icon name="globe"/><div><h3>Medical Affairs, Market Access & Commercial Teams</h3><p>Scientific communication, HCP and patient content, market access, product launches, training, digital assets, and international commercialization.</p></div></div>
          </div>
        </div>
      </section>

      <section className="ph-section ph-why">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Why Pharmaceutical Teams Choose Stepes</h2>
            <p className="ph-large ph-intro">A strong pharmaceutical translation program combines the right people, language assets, technology, quality controls, file production, and program management—without forcing every content type through the same process.</p>
          </div>
          <div className="ph-why-grid">
            <div className="ph-why-card"><Icon name="people"/><h3>Pharmaceutical Subject Expertise</h3><p>Specialized linguists are matched to pharmaceutical subject matter, document type, target language, market, audience, and program requirements.</p></div>
            <div className="ph-why-card"><Icon name="terms"/><h3>Connected Language Assets</h3><p>Terminology, translation memory, approved translations, references, and reviewer feedback help keep related content aligned across releases.</p></div>
            <div className="ph-why-card"><Icon name="versions"/><h3>Risk-Appropriate Workflows</h3><p>Human translation, independent review, AI-assisted workflows, post-editing, QA, and validation are configured around content purpose and risk.</p></div>
            <div className="ph-why-card"><Icon name="ai"/><h3>AI-Powered Enterprise Technology</h3><p>DomainAI-assisted analysis, terminology tools, translation memory, workflow automation, and automated QA help reduce repetitive manual work.</p></div>
            <div className="ph-why-card"><Icon name="qa"/><h3>Quality + Deliverable Integrity</h3><p>ISO-supported processes, structured review, DTP, file engineering, artwork support, and final-format QA protect both meaning and output.</p></div>
            <div className="ph-why-card"><Icon name="scale"/><h3>Global Program Scale</h3><p>100+ languages, preferred language teams, centralized management, and reusable assets support growth from a single document to ongoing global operations.</p></div>
          </div>
        </div>
      </section>

      <section className="ph-section">
        <div className="ph-shell">
          <div className="ph-heading-center">
            <h2>Pharmaceutical Translation Services FAQ</h2>
            <p className="ph-large ph-intro">Answers to common questions about pharmaceutical documents, terminology consistency, review workflows, regulatory translation, revisions, AI, and global language coverage.</p>
          </div>
          <div className="ph-faq-wrap">
            <details><summary>What are pharmaceutical translation services?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Pharmaceutical translation services provide specialized translation and localization for content created throughout drug research, development, clinical trials, regulatory approval, manufacturing, pharmacovigilance, labeling, medical affairs, commercialization, and post-approval lifecycle management. The workflow should reflect the subject matter, audience, intended use, and risk associated with each content type.</p></div></details>
            <details><summary>What pharmaceutical documents can Stepes translate?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Stepes translates protocols, Investigator's Brochures, Informed Consent Forms, Clinical Study Reports, regulatory submissions, CTD/eCTD and CMC content, product labeling, SmPCs, PILs, package inserts, pharmacovigilance documents, ICSRs, DSURs, PBRERs, Risk Management Plans, SOPs, batch records, validation documentation, scientific publications, HCP content, patient materials, websites, training, and commercial communications.</p></div></details>
            <details><summary>How is pharmaceutical translation different from medical translation?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Medical translation is broader and can include healthcare, patient, medical device, pharmaceutical, clinical, and scientific content. Pharmaceutical translation focuses more specifically on the information created throughout the lifecycle of medicines, including drug development, clinical research, regulatory submissions, CMC, pharmacovigilance, manufacturing, labeling, medical affairs, commercialization, and product updates.</p></div></details>
            <details><summary>How does Stepes maintain pharmaceutical terminology consistency?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Stepes combines terminology management, translation memory, approved client references, style guidance, preferred language teams, and automated quality checks. This helps maintain continuity across product names, active ingredients, indications, dosage forms, administration routes, clinical terminology, safety language, manufacturing processes, and other client-specific vocabulary.</p></div></details>
            <details><summary>Does pharmaceutical translation require independent review?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>The appropriate review process depends on the content, audience, intended use, client quality procedures, and project requirements. High-impact clinical, regulatory, safety, labeling, or patient-facing content may require specialist translation followed by independent review and additional client-defined validation or approval steps. Other content may appropriately use a different combination of professional translation, AI assistance, post-editing, or QA.</p></div></details>
            <details><summary>Can Stepes translate pharmaceutical regulatory submissions and labeling?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Yes. Stepes supports regulatory translation for CTD/eCTD content, CMC documentation, dossiers, health authority correspondence, variations, and related submission content. We also translate pharmaceutical labeling such as prescribing information, SmPCs, PILs, medication guides, package inserts, product labels, packaging, dosage information, warnings, and related artwork.</p></div></details>
            <details><summary>How does Stepes manage pharmaceutical document revisions?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Stepes uses translation memory, terminology resources, file analysis, and language technology to identify previously translated content and support targeted processing of new or changed text. Approved translations can be reused where appropriate while linguists focus on revised content and verify consistency in context.</p></div></details>
            <details><summary>Can AI be used for pharmaceutical translation?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Yes, when it is appropriate for the content and applied within a controlled workflow. AI can assist with file analysis, terminology extraction, translation memory matching, change detection, repeated-content identification, first-pass translation, and QA. Clinical, regulatory, safety, patient-facing, and other high-impact materials may require pharmaceutical linguists and reviewers to provide professional judgment and subject expertise.</p></div></details>
            <details><summary>What languages does Stepes support for pharmaceutical translation?<span className="ph-faq-plus" aria-hidden="true">+</span></summary><div className="ph-faq-answer"><p>Stepes provides pharmaceutical translation in more than 100 languages and regional variants across Europe, Asia, the Americas, the Middle East, and Africa. Major languages include Spanish, French, German, Italian, Portuguese, Dutch, Chinese, Japanese, Korean, Arabic, Polish, Czech, Swedish, Danish, Norwegian, Vietnamese, Thai, and many others.</p></div></details>
          </div>
        </div>
      </section>

      <section className="ph-cta">
        <div className="ph-shell">
          <h2>Translate Pharmaceutical Content With Confidence Across Global Markets</h2>
          <p className="ph-large">From a clinical protocol or regulatory submission to a safety report, manufacturing SOP, pharmaceutical label, scientific presentation, or global product launch, Stepes brings specialized language expertise, AI-powered workflows, terminology control, translation memory, structured QA, and 100+ language support into one scalable multilingual program.</p>
          <div className="ph-btns">
            <a className="ph-btn ph-btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <Icon name="arrow" size={17}/></a>
            <a className="ph-btn ph-btn-secondary" href="https://www.stepes.com/contact-us/">Talk to a Pharmaceutical Translation Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}
