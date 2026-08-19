import React from "react";

const Icon = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    script: (
      <svg {...common}>
        <path d="M7 3h7l3 3v15H7z" />
        <path d="M14 3v4h4" />
        <path d="M9.5 11h5M9.5 14h5M9.5 17h3.5" />
      </svg>
    ),
    sound: (
      <svg {...common}>
        <path d="M5 10v4M9 7v10M13 4v16M17 8v8M21 10v4" />
      </svg>
    ),
    mic: (
      <svg {...common}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6.5 11.5A5.5 5.5 0 0 0 17.5 11.5M12 17v4M9 21h6" />
      </svg>
    ),
    wave: (
      <svg {...common}>
        <path d="M3 12h2l1.5-4 3 8 3-11 3 14 2.5-7H21" />
      </svg>
    ),
    sync: (
      <svg {...common}>
        <path d="M20 7h-5V2" />
        <path d="M4 17h5v5" />
        <path d="M18.2 18.2A8.7 8.7 0 0 1 4.8 16M5.8 5.8A8.7 8.7 0 0 1 19.2 8" />
      </svg>
    ),
    qa: (
      <svg {...common}>
        <path d="M12 3 4.5 6v5.5c0 4.7 3 7.8 7.5 9.5 4.5-1.7 7.5-4.8 7.5-9.5V6z" />
        <path d="m8.7 12.1 2 2 4.4-4.5" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21M12 3c-2.3 2.5-3.4 5.5-3.4 9S9.7 18.5 12 21" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M3.5 20v-2.3c0-3 2.4-5.4 5.5-5.4s5.5 2.4 5.5 5.4V20M14.5 14.2c.7-.5 1.5-.7 2.5-.7 2.2 0 4 1.8 4 4V20" />
      </svg>
    ),
    robot: (
      <svg {...common}>
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6M3 11v4M21 11v4" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    ),
    play: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </svg>
    ),
    captions: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 11h3M14 11h3M7 14h4M13 14h4" />
      </svg>
    ),
    learn: (
      <svg {...common}>
        <path d="M4 5h16v12H4z" />
        <path d="M8 21h8M12 17v4" />
        <path d="m10 9 5 2-5 2z" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    patient: (
      <svg {...common}>
        <path d="M12 21s-7-4.4-7-10.1A3.9 3.9 0 0 1 12 8.5a3.9 3.9 0 0 1 7 2.4C19 16.6 12 21 12 21Z" />
        <path d="M12 7V3M10 5h4" />
      </svg>
    ),
    device: (
      <svg {...common}>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3M10 18h4" />
      </svg>
    ),
    flask: (
      <svg {...common}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 4.5 6v5.5c0 4.7 3 7.8 7.5 9.5 4.5-1.7 7.5-4.8 7.5-9.5V6z" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
};

const Button = ({ href, children, secondary = false }) => (
  <a className={`vo-btn ${secondary ? "vo-btn-secondary" : "vo-btn-primary"}`} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={18} />
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, align = "center", mobileCenter = true }) => (
  <div className={`vo-section-heading vo-align-${align} ${mobileCenter ? "vo-mobile-center" : ""}`}>
    {eyebrow ? <div className="vo-eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const ArrowLink = ({ href, children }) => (
  <a className="vo-arrow-link" href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

const HeroArtwork = () => (
  <div className="vo-hero-art" aria-hidden="true">
    <svg viewBox="0 0 560 430">
      <defs>
        <linearGradient id="voiceFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7F9FD" />
          <stop offset="100%" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>
      <rect x="32" y="32" width="496" height="366" rx="34" fill="url(#voiceFade)" />
      <circle cx="435" cy="91" r="45" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M418 91c0-15 9-25 18-25s18 10 18 25v19c0 15-9 25-18 25s-18-10-18-25Z" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
      <path d="M407 105c0 19 13 33 29 33s29-14 29-33M436 138v21M421 159h30" fill="none" stroke="#17264D" strokeWidth="3" strokeLinecap="round" />
      <rect x="82" y="82" width="190" height="235" rx="20" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M118 126h102M118 157h116M118 188h85M118 219h108M118 250h75" stroke="#68758B" strokeWidth="5" strokeLinecap="round" opacity=".58" />
      <circle cx="119" cy="283" r="12" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
      <path d="M145 282h72" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
      <path d="M289 144c20-30 40 30 60 0s40 30 60 0" fill="none" stroke="#4B6FD8" strokeWidth="5" strokeLinecap="round" />
      <path d="M288 197h184" stroke="#DDE4F2" strokeWidth="2" strokeLinecap="round" />
      <path d="M303 217v35M320 206v57M337 225v19M354 198v73M371 214v41M388 202v65M405 222v23M422 210v47M439 225v19M456 216v37" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
      <rect x="279" y="289" width="206" height="63" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <circle cx="309" cy="320" r="11" fill="#4B6FD8" />
      <path d="m306 314 9 6-9 6z" fill="#FFFFFF" />
      <path d="M338 311h107M338 329h74" stroke="#68758B" strokeWidth="4" strokeLinecap="round" opacity=".55" />
      <path d="M252 320h26M486 320h20" stroke="#6F8BE1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="54" cy="352" r="7" fill="#4B6FD8" opacity=".7" />
      <circle cx="508" cy="372" r="8" fill="#6F8BE1" opacity=".55" />
      <path d="M59 371h54M468 58h28" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

const workflow = [
  {
    title: "Script Preparation & Localization",
    text: "Review, transcription where required, translation, localization, timing-aware adaptation, segmentation, and approved-language preparation.",
    icon: "script",
  },
  {
    title: "Terminology & Pronunciation Planning",
    text: "Identify product names, drug names, device terminology, acronyms, and scientific vocabulary that require controlled spoken guidance.",
    icon: "sound",
  },
  {
    title: "Voice Talent / Voice Model Selection",
    text: "Match language, locale, accent, audience, tone, delivery style, continuity needs, and the appropriate human or AI-enabled production model.",
    icon: "people",
  },
  {
    title: "Recording & Direction",
    text: "Record or generate approved scripts with pronunciation, pacing, timing, performance, and correction requirements built into production.",
    icon: "mic",
  },
  {
    title: "Audio Engineering",
    text: "Edit, clean, level, assemble, refine pacing, mix, and prepare multilingual speech for its final media environment.",
    icon: "wave",
  },
  {
    title: "Synchronization & Integration",
    text: "Align audio with video scenes, demonstrations, slides, eLearning sequences, visual cues, and visible speakers where required.",
    icon: "sync",
  },
  {
    title: "Linguistic & Audio QA",
    text: "Review meaning, terminology, pronunciation, completeness, clarity, pacing, synchronization, technical integrity, and playback.",
    icon: "qa",
  },
  {
    title: "Final Mastering & Delivery",
    text: "Prepare approved standalone audio, localized media, multilingual tracks, platform-ready outputs, and organized delivery packages.",
    icon: "layers",
  },
];

const applications = [
  {
    title: "Clinical Trials & Site Training",
    icon: "flask",
    copy: "Support investigator meetings, protocol and site training, study procedures, recruitment, participant education, clinical systems, and study support content.",
    link: "https://www.sesen.com/clinical-trial-translation-services/",
    linkLabel: "Clinical Trial Translation Services",
  },
  {
    title: "Patient & Healthcare Communication",
    icon: "patient",
    copy: "Create multilingual patient education, disease education, procedure explanations, treatment information, care instructions, caregiver communication, and healthcare media.",
    link: "https://www.sesen.com/healthcare-hospital-translation-services/",
    linkLabel: "Healthcare & Hospital Translation Services",
  },
  {
    title: "Medical Device Training & Education",
    icon: "device",
    copy: "Localize product demonstrations, setup and operation guidance, HCP training, patient and user education, service content, and technical instruction.",
    link: "https://www.sesen.com/medical-device-translation-services/",
    linkLabel: "Medical Device Translation Services",
  },
  {
    title: "Medical Affairs & HCP Education",
    icon: "sound",
    copy: "Support scientific presentations, disease-state education, HCP programs, medical affairs content, congress materials, recorded education, and continuing medical education.",
    link: "https://www.sesen.com/medical-scientific-translation-services/",
    linkLabel: "Medical & Scientific Translation Services",
  },
  {
    title: "Quality, Compliance & Workforce Training",
    icon: "shield",
    copy: "Produce spoken content for SOP training, GxP education, safety, onboarding, quality systems, ethics, information security, compliance, and enterprise learning.",
    link: "https://www.sesen.com/elearning-training-translation-services/",
    linkLabel: "eLearning Translation Services",
  },
  {
    title: "Product & Commercial Education",
    icon: "play",
    copy: "Support product education, launch training, sales enablement, distributor education, customer learning, demonstrations, and market-facing audiovisual content.",
  },
];

const faqs = [
  {
    q: "What is the difference between voiceover, dubbing, and lip-sync?",
    a: "Voiceover is a broad term for replacing or adding spoken audio in another language. Narration voiceover may follow the content without matching a visible speaker exactly, while synchronized voiceover is timed more closely to existing scenes or visual sequences. Dubbing generally replaces original dialogue with target-language speech. Lip-sync dubbing adds a closer match to visible mouth movements through more intensive script adaptation, timing, and performance control.",
  },
  {
    q: "Does Sesen provide medical and life sciences voiceover services?",
    a: "Yes. Sesen supports pharmaceutical, biotechnology, medical device, clinical research, healthcare, and related life sciences organizations. Voiceover applications can include clinical training, patient education, medical device demonstrations, HCP education, medical affairs content, eLearning, compliance training, product education, and other scientific or healthcare communication.",
  },
  {
    q: "How does Sesen manage medical terminology and pronunciation?",
    a: "Terminology and pronunciation can be addressed before recording begins. Sesen can use approved terminology, project glossaries, customer references, linguistic review, pronunciation instructions, and other available resources to identify specialized terms requiring attention. Pronunciation can then be reviewed as part of the linguistic QA process.",
  },
  {
    q: "Can Sesen provide both human and AI-generated voiceovers?",
    a: "Yes. Sesen can support professional human voice talent, AI-enabled voice production, and hybrid workflows depending on project requirements. The right model can vary based on audience, content sensitivity, terminology, performance requirements, update frequency, scale, timing, and quality expectations.",
  },
  {
    q: "Can you synchronize translated voiceover with an existing video?",
    a: "Yes. Sesen supports time-synchronized voiceover and dubbing workflows. Because translated speech can expand or contract relative to the source language, script adaptation, pacing, recording direction, editing, and audio engineering may be used to fit target-language speech naturally within available timing. Closer lip synchronization can also be supported when required.",
  },
  {
    q: "Can you provide the same voice talent for future updates?",
    a: "Where practical, Sesen can help clients maintain voice continuity by identifying and rebooking previously used professional talent for recurring modules or content updates. Availability cannot always be guaranteed, so long-term programs may also benefit from documented voice requirements, pronunciation references, terminology resources, and approved alternatives.",
  },
  {
    q: "What languages does Sesen support for voiceover?",
    a: "Sesen supports multilingual translation and localization programs across 150+ languages. Voice talent and production requirements vary by language, locale, content type, and project scope, and Sesen coordinates the necessary linguistic and production resources for each program.",
  },
  {
    q: "Can Sesen deliver standalone audio as well as fully localized video?",
    a: "Yes. Depending on the project, Sesen can deliver standalone voice tracks, multilingual audio masters, integrated video, eLearning packages, or other customer-specified multimedia outputs. Sesen also provides complete multimedia localization, video translation, subtitling, and eLearning localization services when the project extends beyond the spoken track.",
  },
  {
    q: "Do you provide subtitles and captions together with voiceover?",
    a: "Yes. Voiceover, subtitles, captions, on-screen text, graphics, and other audiovisual elements can be coordinated as part of a complete multimedia localization program. For projects focused specifically on timed text, Sesen also provides dedicated subtitling services.",
  },
];

export default function SesenVoiceoverServicesWireframe() {
  return (
    <main className="sesen-voiceover-page">
      <style>{`
        .sesen-voiceover-page {
          --vo-blue: #4B6FD8;
          --vo-blue-dark: #3659BB;
          --vo-blue-deep: #253F8F;
          --vo-blue-mid: #6F8BE1;
          --vo-blue-soft: #EAF0FF;
          --vo-blue-pale: #F5F7FF;
          --vo-navy: #17264D;
          --vo-ink: #111827;
          --vo-body: #46546D;
          --vo-muted: #68758B;
          --vo-border: #DDE4F2;
          --vo-divider: #E9EEF8;
          --vo-surface: #F7F9FD;
          --vo-white: #FFFFFF;
          --vo-light-accent: #C8D6FF;
          width: 100%;
          overflow: hidden;
          background: var(--vo-white);
          color: var(--vo-body);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .sesen-voiceover-page * { box-sizing: border-box; }
        .sesen-voiceover-page a { color: inherit; }
        .sesen-voiceover-page svg { display: block; }

        .sesen-voiceover-page .vo-container {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .sesen-voiceover-page .vo-section {
          padding: 96px 0;
        }

        .sesen-voiceover-page .vo-section-compact {
          padding: 82px 0;
        }

        .sesen-voiceover-page .vo-bg-soft { background: var(--vo-surface); }
        .sesen-voiceover-page .vo-bg-pale { background: var(--vo-blue-pale); }

        .sesen-voiceover-page .vo-eyebrow {
          color: var(--vo-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .sesen-voiceover-page h1,
        .sesen-voiceover-page h2,
        .sesen-voiceover-page h3 {
          margin: 0;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          color: var(--vo-navy);
          font-weight: 500;
        }

        .sesen-voiceover-page h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .sesen-voiceover-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-voiceover-page h3 {
          font-size: 23px;
          line-height: 1.3;
        }

        .sesen-voiceover-page p {
          margin: 0;
          font-size: 16px;
          line-height: 1.72;
          color: var(--vo-body);
        }

        .sesen-voiceover-page .vo-lead {
          font-size: 19px;
          line-height: 1.7;
          color: #293954;
        }

        .sesen-voiceover-page .vo-section-heading {
          max-width: 820px;
          margin-bottom: 50px;
        }

        .sesen-voiceover-page .vo-section-heading.vo-align-center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-voiceover-page .vo-section-heading.vo-align-left {
          margin-left: 0;
          margin-right: 0;
          text-align: left;
        }

        .sesen-voiceover-page .vo-section-heading p {
          max-width: 790px;
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.7;
        }

        .sesen-voiceover-page .vo-section-heading.vo-align-center p {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-voiceover-page .vo-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .sesen-voiceover-page .vo-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border-radius: 999px;
          font-size: 13px;
          line-height: 1;
          letter-spacing: .045em;
          font-weight: 700;
          text-decoration: none;
          transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
        }

        .sesen-voiceover-page .vo-btn:hover { transform: translateY(-1px); }
        .sesen-voiceover-page .vo-btn:focus-visible,
        .sesen-voiceover-page .vo-arrow-link:focus-visible,
        .sesen-voiceover-page summary:focus-visible {
          outline: 3px solid rgba(75,111,216,.35);
          outline-offset: 4px;
        }

        .sesen-voiceover-page .vo-btn-primary {
          background: var(--vo-blue);
          color: var(--vo-white);
          border: 1px solid var(--vo-blue);
        }

        .sesen-voiceover-page .vo-btn-primary:hover {
          background: var(--vo-blue-dark);
          border-color: var(--vo-blue-dark);
        }

        .sesen-voiceover-page .vo-btn-secondary {
          background: var(--vo-white);
          color: var(--vo-ink);
          border: 1px solid var(--vo-border);
        }

        .sesen-voiceover-page .vo-btn-secondary:hover {
          background: var(--vo-blue-pale);
          border-color: #C7D2EB;
        }

        .sesen-voiceover-page .vo-arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          color: var(--vo-blue-dark);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
          text-decoration: none;
        }

        .sesen-voiceover-page .vo-arrow-link:hover span { text-decoration: underline; text-underline-offset: 3px; }

        /* Hero */
        .sesen-voiceover-page .vo-hero {
          padding: 94px 0 88px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
        }

        .sesen-voiceover-page .vo-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(430px, .94fr);
          gap: 72px;
          align-items: center;
        }

        .sesen-voiceover-page .vo-hero-copy { max-width: 690px; }
        .sesen-voiceover-page .vo-hero-copy .vo-lead { margin-top: 22px; }
        .sesen-voiceover-page .vo-hero-copy .vo-support {
          margin-top: 16px;
          max-width: 660px;
          font-size: 17px;
          line-height: 1.7;
        }

        .sesen-voiceover-page .vo-hero-art {
          width: 100%;
          max-width: 560px;
          justify-self: end;
        }

        .sesen-voiceover-page .vo-hero-art svg { width: 100%; height: auto; }

        .sesen-voiceover-page .vo-proof-strip {
          border-top: 1px solid var(--vo-divider);
          border-bottom: 1px solid var(--vo-divider);
          background: var(--vo-white);
        }

        .sesen-voiceover-page .vo-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .sesen-voiceover-page .vo-proof-item {
          display: flex;
          gap: 13px;
          align-items: center;
          min-height: 84px;
          padding: 18px 24px;
          color: var(--vo-navy);
          border-right: 1px solid var(--vo-divider);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }
        .sesen-voiceover-page .vo-proof-item:first-child { padding-left: 0; }
        .sesen-voiceover-page .vo-proof-item:last-child { border-right: 0; padding-right: 0; }
        .sesen-voiceover-page .vo-proof-icon { color: var(--vo-blue-dark); }

        /* Authority band */
        .sesen-voiceover-page .vo-authority-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid var(--vo-border);
          border-bottom: 1px solid var(--vo-border);
        }

        .sesen-voiceover-page .vo-authority-item {
          position: relative;
          padding: 34px 30px 36px 0;
        }

        .sesen-voiceover-page .vo-authority-item:not(:last-child) { border-right: 1px solid var(--vo-border); }
        .sesen-voiceover-page .vo-authority-item:not(:first-child) { padding-left: 30px; }
        .sesen-voiceover-page .vo-authority-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          color: var(--vo-blue-dark);
          background: var(--vo-blue-pale);
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .sesen-voiceover-page .vo-authority-item h3 { font-size: 21px; margin-bottom: 10px; }
        .sesen-voiceover-page .vo-authority-item p { color: var(--vo-muted); }

        /* Voiceover types */
        .sesen-voiceover-page .vo-solution-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--vo-border);
          border-left: 1px solid var(--vo-border);
          border-radius: 28px;
          overflow: hidden;
        }

        .sesen-voiceover-page .vo-solution {
          min-height: 310px;
          padding: 36px;
          border-right: 1px solid var(--vo-border);
          border-bottom: 1px solid var(--vo-border);
          background: var(--vo-white);
        }

        .sesen-voiceover-page .vo-solution:nth-child(3),
        .sesen-voiceover-page .vo-solution:nth-child(4) { background: #FBFCFF; }
        .sesen-voiceover-page .vo-solution-top { display: flex; gap: 16px; align-items: flex-start; }
        .sesen-voiceover-page .vo-solution-icon {
          flex: 0 0 46px;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--vo-blue-pale);
          color: var(--vo-blue-dark);
        }
        .sesen-voiceover-page .vo-solution h3 { margin-top: 3px; }
        .sesen-voiceover-page .vo-solution p { margin-top: 17px; }
        .sesen-voiceover-page .vo-inline-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 18px;
          padding: 0;
          margin: 22px 0 0;
          list-style: none;
        }
        .sesen-voiceover-page .vo-inline-list li {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          color: var(--vo-body);
          font-size: 16px;
          line-height: 1.45;
        }
        .sesen-voiceover-page .vo-inline-list li svg { color: var(--vo-blue-dark); flex: 0 0 auto; margin-top: 2px; }

        /* Workflow */
        .sesen-voiceover-page .vo-workflow-wrap {
          margin-top: 44px;
        }

        .sesen-voiceover-page .vo-workflow {
          position: relative;
          max-width: 1080px;
          border-top: 1px solid var(--vo-border);
        }

        .sesen-voiceover-page .vo-workflow::before {
          content: "";
          position: absolute;
          left: 25px;
          top: 30px;
          bottom: 30px;
          width: 2px;
          background: linear-gradient(180deg, var(--vo-blue) 0%, var(--vo-light-accent) 100%);
        }

        .sesen-voiceover-page .vo-workflow-step {
          position: relative;
          display: grid;
          grid-template-columns: 52px minmax(220px, .72fr) minmax(0, 1.28fr);
          gap: 22px 28px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--vo-border);
        }

        .sesen-voiceover-page .vo-step-marker {
          position: relative;
          z-index: 2;
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--vo-white);
          border: 2px solid var(--vo-blue);
          color: var(--vo-blue-dark);
        }

        .sesen-voiceover-page .vo-step-copy { padding-top: 2px; }
        .sesen-voiceover-page .vo-step-description { padding-top: 1px; }
        .sesen-voiceover-page .vo-step-description p { color: var(--vo-muted); }
        .sesen-voiceover-page .vo-step-num {
          color: var(--vo-blue-dark);
          font-size: 11px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .sesen-voiceover-page .vo-step-copy h3 { font-size: 21px; }

        /* Pronunciation */
        .sesen-voiceover-page .vo-pronunciation-grid {
          display: grid;
          grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
          gap: 70px;
          align-items: center;
        }
        .sesen-voiceover-page .vo-pronunciation-copy h2 { margin-bottom: 20px; }
        .sesen-voiceover-page .vo-pronunciation-copy .vo-lead { margin-bottom: 18px; }
        .sesen-voiceover-page .vo-term-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px 22px;
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
        }
        .sesen-voiceover-page .vo-term-list li {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.45;
          color: var(--vo-body);
        }
        .sesen-voiceover-page .vo-term-list svg { flex: 0 0 auto; color: var(--vo-blue-dark); margin-top: 2px; }

        .sesen-voiceover-page .vo-pronunciation-visual {
          position: relative;
          border: 1px solid var(--vo-border);
          border-radius: 30px;
          background: var(--vo-white);
          padding: 34px;
          box-shadow: 0 18px 50px rgba(41,57,84,.07);
        }
        .sesen-voiceover-page .vo-pronunciation-track {
          display: grid;
          gap: 14px;
        }
        .sesen-voiceover-page .vo-pronunciation-stage {
          position: relative;
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 17px;
          align-items: center;
          min-height: 72px;
          padding: 14px 18px;
          background: #FBFCFF;
          border: 1px solid var(--vo-divider);
          border-radius: 18px;
        }
        .sesen-voiceover-page .vo-pronunciation-stage:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -15px;
          width: 2px;
          height: 14px;
          background: var(--vo-light-accent);
        }
        .sesen-voiceover-page .vo-pronunciation-stage-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--vo-blue-pale);
          color: var(--vo-blue-dark);
        }
        .sesen-voiceover-page .vo-pronunciation-stage strong {
          display: block;
          color: var(--vo-navy);
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .sesen-voiceover-page .vo-pronunciation-stage span {
          display: block;
          color: var(--vo-muted);
          font-size: 16px;
          line-height: 1.55;
        }

        /* Audience */
        .sesen-voiceover-page .vo-audience-layout {
          display: grid;
          grid-template-columns: .72fr 1.28fr;
          gap: 72px;
          align-items: start;
        }
        .sesen-voiceover-page .vo-audience-intro {
          position: sticky;
          top: 28px;
        }
        .sesen-voiceover-page .vo-audience-intro h2 { margin-bottom: 18px; }
        .sesen-voiceover-page .vo-audience-intro p + p { margin-top: 14px; }
        .sesen-voiceover-page .vo-audience-list { border-top: 1px solid var(--vo-border); }
        .sesen-voiceover-page .vo-audience-row {
          display: grid;
          grid-template-columns: 52px 200px minmax(0, 1fr);
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid var(--vo-border);
          align-items: start;
        }
        .sesen-voiceover-page .vo-audience-row-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--vo-blue-pale);
          color: var(--vo-blue-dark);
        }
        .sesen-voiceover-page .vo-audience-row h3 { font-size: 19px; }
        .sesen-voiceover-page .vo-audience-row p { color: var(--vo-muted); }

        /* Human / AI / hybrid */
        .sesen-voiceover-page .vo-model-panel {
          border: 1px solid var(--vo-border);
          border-radius: 30px;
          overflow: hidden;
          background: var(--vo-white);
        }
        .sesen-voiceover-page .vo-model-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .sesen-voiceover-page .vo-model {
          padding: 36px 34px 38px;
          min-height: 390px;
          border-right: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-model:last-child { border-right: 0; }
        .sesen-voiceover-page .vo-model-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          color: var(--vo-blue-dark);
          background: var(--vo-blue-pale);
          border-radius: 14px;
          margin-bottom: 22px;
        }
        .sesen-voiceover-page .vo-model p { margin-top: 13px; }
        .sesen-voiceover-page .vo-model ul {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
          display: grid;
          gap: 9px;
        }
        .sesen-voiceover-page .vo-model li {
          display: flex;
          gap: 8px;
          font-size: 16px;
          line-height: 1.45;
          color: var(--vo-body);
        }
        .sesen-voiceover-page .vo-model li svg { color: var(--vo-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .sesen-voiceover-page .vo-decision-band {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: center;
          padding: 24px 30px;
          border-top: 1px solid var(--vo-border);
          background: var(--vo-blue-pale);
        }
        .sesen-voiceover-page .vo-decision-label {
          color: var(--vo-navy);
          font-weight: 700;
          margin-right: 5px;
        }
        .sesen-voiceover-page .vo-decision-chip {
          padding: 7px 11px;
          border-radius: 999px;
          background: var(--vo-white);
          border: 1px solid var(--vo-border);
          color: var(--vo-body);
          font-size: 13px;
          line-height: 1.2;
          font-weight: 600;
        }

        /* Applications */
        .sesen-voiceover-page .vo-application-list { border-top: 1px solid var(--vo-border); }
        .sesen-voiceover-page .vo-application-row {
          display: grid;
          grid-template-columns: 58px 300px minmax(0, 1fr) 220px;
          gap: 24px;
          align-items: start;
          padding: 31px 0;
          border-bottom: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-application-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: var(--vo-blue-dark);
          background: var(--vo-blue-pale);
        }
        .sesen-voiceover-page .vo-application-row h3 { font-size: 20px; padding-top: 4px; }
        .sesen-voiceover-page .vo-application-row p { color: var(--vo-muted); }
        .sesen-voiceover-page .vo-application-row .vo-arrow-link { justify-self: end; padding-top: 4px; }

        /* Engineering */
        .sesen-voiceover-page .vo-engineering {
          background: var(--vo-navy);
          color: var(--vo-white);
        }
        .sesen-voiceover-page .vo-engineering .vo-eyebrow { color: var(--vo-light-accent); }
        .sesen-voiceover-page .vo-engineering h2,
        .sesen-voiceover-page .vo-engineering h3 { color: var(--vo-white); }
        .sesen-voiceover-page .vo-engineering p { color: #D6DFF2; }
        .sesen-voiceover-page .vo-engineering-grid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 72px;
          align-items: start;
        }
        .sesen-voiceover-page .vo-engineering-intro { max-width: 500px; }
        .sesen-voiceover-page .vo-engineering-intro h2 { margin-bottom: 18px; }
        .sesen-voiceover-page .vo-engineering-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.18);
          border-left: 1px solid rgba(255,255,255,.18);
        }
        .sesen-voiceover-page .vo-engineering-item {
          padding: 26px 26px 28px;
          border-right: 1px solid rgba(255,255,255,.18);
          border-bottom: 1px solid rgba(255,255,255,.18);
        }
        .sesen-voiceover-page .vo-engineering-item h3 { font-size: 18px; margin-bottom: 8px; }
        .sesen-voiceover-page .vo-engineering-item p { font-size: 16px; }

        /* QA */
        .sesen-voiceover-page .vo-qa-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        .sesen-voiceover-page .vo-qa-panel {
          border: 1px solid var(--vo-border);
          border-radius: 28px;
          padding: 36px;
          background: var(--vo-white);
        }
        .sesen-voiceover-page .vo-qa-panel:nth-child(2) { background: var(--vo-blue-pale); }
        .sesen-voiceover-page .vo-qa-panel-top { display: flex; gap: 16px; align-items: center; }
        .sesen-voiceover-page .vo-qa-panel-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--vo-white);
          color: var(--vo-blue-dark);
          border: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-qa-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 20px;
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
        }
        .sesen-voiceover-page .vo-qa-list li {
          display: flex;
          gap: 8px;
          color: var(--vo-body);
          font-size: 16px;
          line-height: 1.45;
        }
        .sesen-voiceover-page .vo-qa-list svg { color: var(--vo-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .sesen-voiceover-page .vo-master-band {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1.25fr;
          gap: 14px;
          align-items: center;
          margin-top: 24px;
          padding: 22px 26px;
          border-radius: 20px;
          background: var(--vo-navy);
          color: var(--vo-white);
          text-align: center;
          font-weight: 700;
        }
        .sesen-voiceover-page .vo-master-plus { color: var(--vo-light-accent); font-size: 22px; }
        .sesen-voiceover-page .vo-master-result {
          padding: 11px 14px;
          border-radius: 999px;
          color: var(--vo-navy);
          background: var(--vo-white);
        }

        /* Scale */
        .sesen-voiceover-page .vo-scale-grid {
          display: grid;
          grid-template-columns: .78fr 1.22fr;
          gap: 72px;
          align-items: center;
        }
        .sesen-voiceover-page .vo-scale-stat {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 26px 0 18px;
        }
        .sesen-voiceover-page .vo-scale-stat strong {
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 56px;
          font-weight: 500;
          color: var(--vo-blue-dark);
          line-height: 1;
        }
        .sesen-voiceover-page .vo-scale-stat span {
          color: var(--vo-navy);
          font-size: 17px;
          font-weight: 700;
        }
        .sesen-voiceover-page .vo-scale-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--vo-border);
          border-left: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-scale-item {
          padding: 28px;
          border-right: 1px solid var(--vo-border);
          border-bottom: 1px solid var(--vo-border);
          background: var(--vo-white);
        }
        .sesen-voiceover-page .vo-scale-item h3 { font-size: 18px; margin-bottom: 9px; }
        .sesen-voiceover-page .vo-scale-item p { font-size: 16px; color: var(--vo-muted); }

        /* Related */
        .sesen-voiceover-page .vo-related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--vo-border);
          border-bottom: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-related-item {
          min-height: 276px;
          padding: 34px 26px;
          border-right: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-related-item:last-child { border-right: 0; }
        .sesen-voiceover-page .vo-related-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          color: var(--vo-blue-dark);
          background: var(--vo-blue-pale);
          border-radius: 14px;
          margin-bottom: 21px;
        }
        .sesen-voiceover-page .vo-related-item h3 { font-size: 20px; }
        .sesen-voiceover-page .vo-related-item p { margin: 12px 0 20px; color: var(--vo-muted); }

        /* Why Sesen */
        .sesen-voiceover-page .vo-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 46px;
          border-top: 1px solid var(--vo-border);
          border-left: 1px solid var(--vo-border);
        }
        .sesen-voiceover-page .vo-why-item {
          padding: 30px 28px;
          border-right: 1px solid var(--vo-border);
          border-bottom: 1px solid var(--vo-border);
          background: var(--vo-white);
        }
        .sesen-voiceover-page .vo-why-item h3 { font-size: 17px; margin-bottom: 9px; }
        .sesen-voiceover-page .vo-why-item p { font-size: 16px; color: var(--vo-muted); }
        .sesen-voiceover-page .vo-cert-strip {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 26px;
          margin-top: 32px;
          padding: 20px 0;
          border-top: 1px solid var(--vo-divider);
          border-bottom: 1px solid var(--vo-divider);
          color: var(--vo-navy);
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: .035em;
          text-transform: uppercase;
        }
        .sesen-voiceover-page .vo-cert-strip span { position: relative; }
        .sesen-voiceover-page .vo-cert-strip span:not(:last-child)::after {
          content: "";
          position: absolute;
          right: -14px;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--vo-blue-mid);
        }

        /* FAQ */
        .sesen-voiceover-page .vo-faq-layout {
          display: grid;
          grid-template-columns: .68fr 1.32fr;
          gap: 72px;
          align-items: start;
        }
        .sesen-voiceover-page .vo-faq-intro h2 { margin-bottom: 18px; }
        .sesen-voiceover-page .vo-faq-list { border-top: 1px solid var(--vo-border); }
        .sesen-voiceover-page .vo-faq-item { border-bottom: 1px solid var(--vo-border); }
        .sesen-voiceover-page .vo-faq-item summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 18px;
          align-items: center;
          cursor: pointer;
          list-style: none;
          min-height: 78px;
          padding: 20px 0;
          color: var(--vo-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
        }
        .sesen-voiceover-page .vo-faq-item summary::-webkit-details-marker { display: none; }
        .sesen-voiceover-page .vo-faq-toggle {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border: 1px solid var(--vo-border);
          border-radius: 50%;
          color: var(--vo-blue-dark);
          font-family: Inter, sans-serif;
          font-size: 20px;
          line-height: 1;
          transition: transform .18s ease;
        }
        .sesen-voiceover-page details[open] .vo-faq-toggle { transform: rotate(45deg); }
        .sesen-voiceover-page .vo-faq-answer { padding: 0 52px 26px 0; }
        .sesen-voiceover-page .vo-faq-answer p { max-width: 820px; }

        /* CTA */
        .sesen-voiceover-page .vo-final-wrap { padding: 96px 0; background: var(--vo-white); }
        .sesen-voiceover-page .vo-final-cta {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) auto;
          gap: 54px;
          align-items: center;
          border-radius: 30px;
          padding: 58px 60px;
          background: linear-gradient(135deg, var(--vo-blue-deep) 0%, var(--vo-blue) 100%);
          color: var(--vo-white);
        }
        .sesen-voiceover-page .vo-final-cta::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          right: -100px;
          top: -130px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.22);
        }
        .sesen-voiceover-page .vo-final-cta h2 { color: var(--vo-white); }
        .sesen-voiceover-page .vo-final-cta p { color: #EEF3FF; margin-top: 16px; max-width: 760px; font-size: 17px; }
        .sesen-voiceover-page .vo-final-actions { display: flex; gap: 12px; position: relative; z-index: 2; }
        .sesen-voiceover-page .vo-final-cta .vo-btn-primary {
          background: var(--vo-white);
          border-color: var(--vo-white);
          color: var(--vo-ink);
        }
        .sesen-voiceover-page .vo-final-cta .vo-btn-primary:hover { background: #F2F5FB; border-color: #F2F5FB; }
        .sesen-voiceover-page .vo-final-cta .vo-btn-secondary {
          background: var(--vo-blue-soft);
          border-color: var(--vo-light-accent);
          color: var(--vo-ink);
        }
        .sesen-voiceover-page .vo-final-cta .vo-btn-secondary:hover {
          background: var(--vo-white);
          border-color: var(--vo-white);
        }

        @media (max-width: 1120px) {
          .sesen-voiceover-page .vo-container { width: min(1280px, calc(100% - 80px)); }
          .sesen-voiceover-page .vo-hero-grid { grid-template-columns: 1fr .9fr; gap: 48px; }
          .sesen-voiceover-page .vo-application-row { grid-template-columns: 58px 250px minmax(0, 1fr); }
          .sesen-voiceover-page .vo-application-row .vo-arrow-link { grid-column: 3; justify-self: start; margin-top: -6px; }
          .sesen-voiceover-page .vo-why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 900px) {
          .sesen-voiceover-page .vo-container { width: min(1280px, calc(100% - 58px)); }
          .sesen-voiceover-page .vo-section { padding: 78px 0; }
          .sesen-voiceover-page .vo-section-compact { padding: 72px 0; }
          .sesen-voiceover-page .vo-hero { padding: 74px 0 70px; }
          .sesen-voiceover-page .vo-hero-grid,
          .sesen-voiceover-page .vo-pronunciation-grid,
          .sesen-voiceover-page .vo-audience-layout,
          .sesen-voiceover-page .vo-engineering-grid,
          .sesen-voiceover-page .vo-scale-grid,
          .sesen-voiceover-page .vo-faq-layout { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-hero-art { justify-self: start; max-width: 620px; margin-top: 10px; }
          .sesen-voiceover-page .vo-proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-voiceover-page .vo-proof-item { border-bottom: 1px solid var(--vo-divider); }
          .sesen-voiceover-page .vo-proof-item:nth-child(2) { border-right: 0; }
          .sesen-voiceover-page .vo-proof-item:nth-child(3),
          .sesen-voiceover-page .vo-proof-item:nth-child(4) { border-bottom: 0; }
          .sesen-voiceover-page .vo-proof-item:nth-child(3) { padding-left: 0; }
          .sesen-voiceover-page .vo-authority-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-voiceover-page .vo-authority-item:nth-child(2) { border-right: 0; }
          .sesen-voiceover-page .vo-authority-item:nth-child(3) { padding-left: 0; border-top: 1px solid var(--vo-border); }
          .sesen-voiceover-page .vo-authority-item:nth-child(4) { border-top: 1px solid var(--vo-border); }
          .sesen-voiceover-page .vo-model-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-model { min-height: auto; border-right: 0; border-bottom: 1px solid var(--vo-border); }
          .sesen-voiceover-page .vo-model:last-child { border-bottom: 0; }
          .sesen-voiceover-page .vo-audience-intro { position: static; max-width: 760px; }
          .sesen-voiceover-page .vo-engineering-list { margin-top: 12px; }
          .sesen-voiceover-page .vo-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-voiceover-page .vo-related-item:nth-child(2) { border-right: 0; }
          .sesen-voiceover-page .vo-related-item:nth-child(1),
          .sesen-voiceover-page .vo-related-item:nth-child(2) { border-bottom: 1px solid var(--vo-border); }
          .sesen-voiceover-page .vo-final-cta { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-final-actions { justify-content: flex-start; }
        }

        @media (max-width: 680px) {
          .sesen-voiceover-page .vo-container { width: calc(100% - 40px); }
          .sesen-voiceover-page .vo-section,
          .sesen-voiceover-page .vo-section-compact { padding: 68px 0; }
          .sesen-voiceover-page .vo-hero { padding: 66px 0 62px; }
          .sesen-voiceover-page h1 { font-size: 42px; }
          .sesen-voiceover-page h2 { font-size: 32px; }
          .sesen-voiceover-page h3 { font-size: 21px; }
          .sesen-voiceover-page .vo-lead { font-size: 18px; }
          .sesen-voiceover-page .vo-section-heading { margin-bottom: 38px; }
          .sesen-voiceover-page .vo-section-heading p { font-size: 17px; }

          .sesen-voiceover-page .vo-mobile-center { text-align: center; }
          .sesen-voiceover-page .vo-mobile-center p { text-align: left; }
          .sesen-voiceover-page .vo-mobile-center .vo-eyebrow { text-align: center; }
          .sesen-voiceover-page .vo-section-heading.vo-align-center p { margin-left: 0; margin-right: 0; }
          .sesen-voiceover-page .vo-mobile-heading-center h2,
          .sesen-voiceover-page .vo-mobile-heading-center .vo-eyebrow { text-align: center; }
          .sesen-voiceover-page .vo-mobile-heading-center p { text-align: left; }

          .sesen-voiceover-page .vo-btn-row { display: grid; grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-btn { width: 100%; min-height: 50px; }
          .sesen-voiceover-page .vo-hero-grid { gap: 42px; }
          .sesen-voiceover-page .vo-hero-art { margin: 0; }

          .sesen-voiceover-page .vo-proof-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-proof-item,
          .sesen-voiceover-page .vo-proof-item:first-child,
          .sesen-voiceover-page .vo-proof-item:nth-child(3),
          .sesen-voiceover-page .vo-proof-item:last-child {
            padding: 18px 0;
            border-right: 0;
            border-bottom: 1px solid var(--vo-divider);
          }
          .sesen-voiceover-page .vo-proof-item:last-child { border-bottom: 0; }

          .sesen-voiceover-page .vo-authority-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-authority-item,
          .sesen-voiceover-page .vo-authority-item:not(:first-child),
          .sesen-voiceover-page .vo-authority-item:nth-child(3) {
            padding: 28px 0;
            border-right: 0;
            border-top: 0;
            border-bottom: 1px solid var(--vo-border);
          }
          .sesen-voiceover-page .vo-authority-item:last-child { border-bottom: 0; }

          .sesen-voiceover-page .vo-solution-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-solution { min-height: auto; padding: 28px 24px; }
          .sesen-voiceover-page .vo-inline-list,
          .sesen-voiceover-page .vo-term-list,
          .sesen-voiceover-page .vo-qa-list,
          .sesen-voiceover-page .vo-engineering-list,
          .sesen-voiceover-page .vo-scale-list { grid-template-columns: 1fr; }

          .sesen-voiceover-page .vo-workflow::before { left: 23px; top: 28px; bottom: 28px; }
          .sesen-voiceover-page .vo-workflow-step {
            grid-template-columns: 48px minmax(0,1fr);
            gap: 10px 17px;
            padding: 26px 0 30px;
          }
          .sesen-voiceover-page .vo-step-marker { width: 48px; height: 48px; }
          .sesen-voiceover-page .vo-step-copy h3 { font-size: 20px; }
          .sesen-voiceover-page .vo-step-description { grid-column: 2; padding-top: 0; }

          .sesen-voiceover-page .vo-pronunciation-grid { gap: 42px; }
          .sesen-voiceover-page .vo-pronunciation-visual { padding: 22px; border-radius: 24px; }
          .sesen-voiceover-page .vo-pronunciation-stage { grid-template-columns: 44px minmax(0,1fr); padding: 13px; }
          .sesen-voiceover-page .vo-pronunciation-stage-icon { width: 42px; height: 42px; }
          .sesen-voiceover-page .vo-pronunciation-stage:not(:last-child)::after { left: 34px; }

          .sesen-voiceover-page .vo-audience-layout { gap: 40px; }
          .sesen-voiceover-page .vo-audience-row { grid-template-columns: 48px minmax(0,1fr); gap: 16px; }
          .sesen-voiceover-page .vo-audience-row p { grid-column: 2; }

          .sesen-voiceover-page .vo-model { padding: 28px 24px 30px; }
          .sesen-voiceover-page .vo-decision-band { justify-content: flex-start; padding: 22px; }
          .sesen-voiceover-page .vo-decision-label { width: 100%; }

          .sesen-voiceover-page .vo-application-row {
            grid-template-columns: 48px minmax(0,1fr);
            gap: 16px;
            padding: 27px 0;
          }
          .sesen-voiceover-page .vo-application-row p,
          .sesen-voiceover-page .vo-application-row .vo-arrow-link { grid-column: 2; }
          .sesen-voiceover-page .vo-application-row .vo-arrow-link { justify-self: start; margin-top: 0; }

          .sesen-voiceover-page .vo-engineering-grid { gap: 38px; }
          .sesen-voiceover-page .vo-engineering-item { padding: 22px; }
          .sesen-voiceover-page .vo-qa-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-qa-panel { padding: 28px 24px; }
          .sesen-voiceover-page .vo-master-band { grid-template-columns: 1fr; gap: 8px; text-align: left; }
          .sesen-voiceover-page .vo-master-plus { display: none; }
          .sesen-voiceover-page .vo-master-result { border-radius: 14px; text-align: center; margin-top: 8px; }

          .sesen-voiceover-page .vo-scale-grid { gap: 40px; }
          .sesen-voiceover-page .vo-scale-copy .vo-scale-stat { justify-content: center; }
          .sesen-voiceover-page .vo-scale-stat strong { font-size: 50px; }
          .sesen-voiceover-page .vo-related-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-related-item,
          .sesen-voiceover-page .vo-related-item:nth-child(1),
          .sesen-voiceover-page .vo-related-item:nth-child(2) {
            min-height: auto;
            padding: 28px 0;
            border-right: 0;
            border-bottom: 1px solid var(--vo-border);
          }
          .sesen-voiceover-page .vo-related-item:last-child { border-bottom: 0; }

          .sesen-voiceover-page .vo-why-grid { grid-template-columns: 1fr; }
          .sesen-voiceover-page .vo-why-item,
          .sesen-voiceover-page .vo-why-item:first-child,
          .sesen-voiceover-page .vo-why-item:nth-child(4),
          .sesen-voiceover-page .vo-why-item:last-child {
            padding: 25px 22px;
            border-right: 1px solid var(--vo-border);
            border-bottom: 1px solid var(--vo-border);
          }
          .sesen-voiceover-page .vo-cert-strip { justify-content: flex-start; gap: 10px; }
          .sesen-voiceover-page .vo-cert-strip span { width: 100%; }
          .sesen-voiceover-page .vo-cert-strip span:not(:last-child)::after { display: none; }

          .sesen-voiceover-page .vo-faq-layout { gap: 35px; }
          .sesen-voiceover-page .vo-faq-item summary { font-size: 19px; min-height: 72px; }
          .sesen-voiceover-page .vo-faq-answer { padding-right: 0; }

          .sesen-voiceover-page .vo-final-wrap { padding: 68px 0; }
          .sesen-voiceover-page .vo-final-cta { padding: 40px 24px; border-radius: 24px; gap: 30px; }
          .sesen-voiceover-page .vo-final-copy h2 { text-align: center; }
          .sesen-voiceover-page .vo-final-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
          .sesen-voiceover-page .vo-final-cta .vo-btn-secondary { color: var(--vo-ink); }
        }

        @media (max-width: 350px) {
          .sesen-voiceover-page h1 { font-size: 38px; }
          .sesen-voiceover-page h2 { font-size: 30px; }
          .sesen-voiceover-page .vo-solution { padding-left: 20px; padding-right: 20px; }
          .sesen-voiceover-page .vo-pronunciation-visual { padding: 18px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-voiceover-page .vo-btn,
          .sesen-voiceover-page .vo-faq-toggle { transition: none; }
          .sesen-voiceover-page .vo-btn:hover { transform: none; }
        }
      `}</style>

      <section className="vo-hero">
        <div className="vo-container vo-hero-grid">
          <div className="vo-hero-copy">
            <h1>Professional Voiceover Services for Life Sciences</h1>
            <p className="vo-lead">
              Multilingual voice production for pharmaceutical, biotechnology, medical device, clinical research, healthcare, and other life sciences content.
            </p>
            <p className="vo-support">
              From localized scripts and medical pronunciation planning to professional voice talent, recording, synchronization, audio engineering, and final quality assurance, Sesen manages specialist spoken-audio production from start to finish across 150+ languages.
            </p>
            <div className="vo-btn-row">
              <Button href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</Button>
              <Button href="https://www.sesen.com/contact-sales/" secondary>TALK WITH TEAM SESEN</Button>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <div className="vo-proof-strip">
        <div className="vo-container vo-proof-grid">
          <div className="vo-proof-item"><span className="vo-proof-icon"><Icon name="globe" /></span><span>150+ Languages</span></div>
          <div className="vo-proof-item"><span className="vo-proof-icon"><Icon name="people" /></span><span>Professional Voice Talent</span></div>
          <div className="vo-proof-item"><span className="vo-proof-icon"><Icon name="sound" /></span><span>Terminology & Pronunciation Control</span></div>
          <div className="vo-proof-item"><span className="vo-proof-icon"><Icon name="flask" /></span><span>Life Sciences Specialization</span></div>
        </div>
      </div>

      <section className="vo-section">
        <div className="vo-container">
          <SectionHeading
            eyebrow="CONNECTED VOICE PRODUCTION"
            title="Voiceover Quality Starts Before the Microphone"
            intro="Voiceover is the specialist spoken-audio layer of multimedia localization. A translated script is only the beginning: terminology, pronunciation, voice selection, timing, synchronization, and audio quality all become part of the multilingual experience."
          />
          <div className="vo-authority-grid">
            {[
              ["script", "Linguistic Accuracy", "Preserve meaning, terminology, audience intent, and context as source scripts are localized for spoken delivery."],
              ["sound", "Pronunciation Control", "Identify drug names, product names, device terminology, acronyms, and scientific vocabulary that require spoken-language guidance."],
              ["people", "Voice & Performance", "Match the target language, locale, audience, tone, delivery style, and production requirements—not simply native fluency."],
              ["wave", "Production Quality", "Coordinate recording, editing, synchronization, mixing, mastering, and final audio QA as one connected workflow."],
            ].map(([icon, title, copy]) => (
              <div className="vo-authority-item" key={title}>
                <div className="vo-authority-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vo-section vo-bg-soft">
        <div className="vo-container">
          <SectionHeading
            title="Voiceover Solutions Matched to Your Content"
            intro="Different types of multimedia require different approaches to spoken localization. Sesen helps determine the right production method based on source content, audience, timing, visual context, and intended use."
          />
          <div className="vo-solution-grid">
            <article className="vo-solution">
              <div className="vo-solution-top"><div className="vo-solution-icon"><Icon name="mic" /></div><h3>Narration Voiceover</h3></div>
              <p>Professional multilingual narration for content where the localized voice supports the program without needing to reproduce the exact movements of an on-screen speaker.</p>
              <ul className="vo-inline-list">
                {["eLearning & training", "Patient education", "Medical presentations", "Explainer videos", "Product education", "Animated media"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="vo-solution">
              <div className="vo-solution-top"><div className="vo-solution-icon"><Icon name="sync" /></div><h3>Time-Synchronized Voiceover</h3></div>
              <p>For demonstrations, presentations, and instructional content where translated speech must fit existing scene or segment durations while remaining natural.</p>
              <ul className="vo-inline-list">
                {["Scene-level timing", "Segment duration control", "Visual cue alignment", "Demonstration sequencing", "Presentation timing", "On-screen coordination"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="vo-solution">
              <div className="vo-solution-top"><div className="vo-solution-icon"><Icon name="play" /></div><h3>Dubbing & Lip-Sync</h3></div>
              <p>For content featuring visible speakers, Sesen supports multilingual dubbing workflows requiring closer alignment between translated speech and the original performance.</p>
              <ul className="vo-inline-list">
                {["Script adaptation", "Performance matching", "Timing control", "Lip movement alignment", "Audio replacement", "Integrated viewing experience"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="vo-solution">
              <div className="vo-solution-top"><div className="vo-solution-icon"><Icon name="sound" /></div><h3>Standalone Multilingual Audio</h3></div>
              <p>Sesen also produces localized audio that does not need to be embedded in video, prepared according to customer-specified formats and technical requirements.</p>
              <ul className="vo-inline-list">
                {["Audio instructions", "Podcasts", "IVR prompts", "Narration tracks", "Embedded audio", "Audio-first communication"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container">
          <SectionHeading
            eyebrow="END-TO-END WORKFLOW"
            title="From Approved Script to Mastered Multilingual Audio"
            intro="Voiceover quality is built throughout production—not added during final QA. Sesen coordinates the linguistic, vocal, and technical stages through one structured multilingual workflow."
            align="left"
            mobileCenter={false}
          />
          <div className="vo-workflow-wrap">
            <div className="vo-workflow">
              {workflow.map((step, index) => (
                <article className="vo-workflow-step" key={step.title}>
                  <div className="vo-step-marker"><Icon name={step.icon} /></div>
                  <div className="vo-step-copy">
                    <div className="vo-step-num">STEP {String(index + 1).padStart(2, "0")}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="vo-step-description"><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vo-section vo-bg-pale">
        <div className="vo-container vo-pronunciation-grid">
          <div className="vo-pronunciation-copy">
            <div className="vo-eyebrow">MEDICAL PRONUNCIATION</div>
            <h2>When Terminology Is Spoken, Pronunciation Becomes Part of Quality</h2>
            <p className="vo-lead">Medical and scientific terminology can be perfectly translated on the page and still create problems when spoken incorrectly.</p>
            <p>Sesen helps move terminology from approved written language to controlled spoken delivery by identifying terms that require special attention before recording begins.</p>
            <ul className="vo-term-list">
              {["Brand & generic drug names", "Active ingredients", "Diseases & conditions", "Anatomical terminology", "Clinical trial terminology", "Study acronyms", "Device names & components", "Scientific vocabulary"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="vo-pronunciation-visual">
            <div className="vo-pronunciation-track">
              {[
                ["script", "Approved Terminology", "Customer references, glossaries, project context, and approved target-language terms."],
                ["sound", "Pronunciation Guidance", "Identify specialized terms, acronyms, product names, and vocabulary requiring direction."],
                ["people", "Voice Direction", "Provide the linguistic context needed for consistent natural delivery."],
                ["mic", "Recorded Audio", "Capture terminology within the complete sentence and communication context."],
                ["qa", "Linguistic Verification", "Review pronunciation and spoken content as part of the quality process."],
              ].map(([icon, title, copy]) => (
                <div className="vo-pronunciation-stage" key={title}>
                  <div className="vo-pronunciation-stage-icon"><Icon name={icon} /></div>
                  <div><strong>{title}</strong><span>{copy}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container vo-audience-layout">
          <div className="vo-audience-intro">
            <div className="vo-eyebrow">VOICE SELECTION</div>
            <h2>The Right Voice Depends on Who Is Listening</h2>
            <p className="vo-lead">There is no single “medical voice.” A patient education video, investigator training module, device demonstration, and scientific presentation can require different approaches to tone, pacing, authority, warmth, and performance.</p>
            <p>Sesen can also help clients evaluate voice continuity for recurring programs, including reuse of the same professional talent where availability and project requirements permit.</p>
          </div>
          <div className="vo-audience-list">
            {[
              ["patient", "Patients & Caregivers", "Clear, approachable delivery and audience-appropriate pacing for patient education, study information, care instructions, and health communication."],
              ["people", "Healthcare Professionals", "Professional delivery suited to technical, scientific, and information-dense content while remaining clear and natural."],
              ["flask", "Clinical Trial Sites", "Consistent instructional delivery for procedures, site operations, study requirements, investigator meetings, and recurring training."],
              ["device", "Medical Device Users", "Voice characteristics matched to healthcare professionals, technicians, distributors, patients, caregivers, or other intended users."],
              ["learn", "Employees & Internal Teams", "Consistent, clear, and engaging production for quality, compliance, safety, onboarding, and enterprise learning."],
              ["globe", "External & Market-Facing Audiences", "Greater attention to performance, polish, brand fit, and audience expectations for high-visibility communication."],
            ].map(([icon, title, copy]) => (
              <div className="vo-audience-row" key={title}>
                <div className="vo-audience-row-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vo-section vo-bg-soft">
        <div className="vo-container">
          <SectionHeading
            title="Human Voice, AI-Generated Voice, or Hybrid Production?"
            intro="There is no single production model that is right for every life sciences application. Sesen supports professional human voiceover, AI-enabled voice production, and hybrid workflows so teams can choose an approach based on the content—not simply the technology available."
          />
          <div className="vo-model-panel">
            <div className="vo-model-grid">
              <article className="vo-model">
                <div className="vo-model-icon"><Icon name="people" /></div>
                <h3>Professional Human Voice</h3>
                <p>Well suited when content benefits from nuanced performance, emotional sensitivity, complex vocal direction, or a highly polished audience experience.</p>
                <ul>
                  {["Sensitive patient communication", "High-visibility external content", "Complex medical narration", "Visible-speaker dubbing", "Brand-sensitive communication", "Scientific presentations"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
                </ul>
              </article>
              <article className="vo-model">
                <div className="vo-model-icon"><Icon name="robot" /></div>
                <h3>AI-Enabled Voice Production</h3>
                <p>Can be effective for appropriate content where scale, update frequency, repeatability, or rapid multilingual production are important. Generated audio still requires controlled review of terminology, pronunciation, pacing, segmentation, and final quality.</p>
                <ul>
                  {["Frequently updated training", "High-volume instructional content", "Internal learning", "Recurring modules", "Standardized information", "Repeated revisions"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
                </ul>
              </article>
              <article className="vo-model">
                <div className="vo-model-icon"><Icon name="layers" /></div>
                <h3>Hybrid Voice Workflows</h3>
                <p>Combine technology and professional expertise when different parts of a program benefit from different production methods.</p>
                <ul>
                  {["AI voice + linguistic review", "Pronunciation verification", "Technology-enabled production + validation", "Human voice for sensitive modules", "AI voice for appropriate scalable content", "Professional pre-release review"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
                </ul>
              </article>
            </div>
            <div className="vo-decision-band">
              <span className="vo-decision-label">Choose based on:</span>
              {["Audience", "Content sensitivity", "Visibility", "Performance", "Terminology", "Update frequency", "Scale", "Timing", "Quality expectations"].map(item => <span className="vo-decision-chip" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container">
          <SectionHeading
            title="Voiceover Across Life Sciences Communication"
            intro="Life sciences organizations use spoken content throughout clinical development, patient engagement, product education, workforce training, healthcare communication, and commercialization."
            align="left"
            mobileCenter={false}
          />
          <div className="vo-application-list">
            {applications.map(item => (
              <article className="vo-application-row" key={item.title}>
                <div className="vo-application-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                {item.link ? <ArrowLink href={item.link}>{item.linkLabel}</ArrowLink> : <span />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vo-section vo-engineering">
        <div className="vo-container vo-engineering-grid">
          <div className="vo-engineering-intro">
            <h2>Audio Production Engineered for the Final Experience</h2>
            <p className="vo-lead">A voice track should not only sound good by itself. It needs to perform correctly wherever the audience ultimately experiences it.</p>
            <p>That may be a video, eLearning course, device demonstration, presentation, LMS, application, digital training environment, or standalone audio channel.</p>
          </div>
          <div className="vo-engineering-list">
            {[
              ["Recording", "Professional voice production with applicable timing, terminology, pronunciation, and performance guidance."],
              ["Editing & Cleanup", "Remove unusable takes, unwanted noise, pauses, and recording artifacts while preserving natural delivery."],
              ["Pacing & Leveling", "Refine speech pacing and audio levels to support consistent listening and alignment with surrounding media."],
              ["Mixing & Mastering", "Balance voice tracks and prepare outputs for the final production environment and technical requirements."],
              ["Time Synchronization", "Align target-language speech with scenes, demonstrations, slides, animations, or source segments."],
              ["Lip Synchronization", "Adapt scripts and performance when closer visual alignment with an on-screen speaker is required."],
              ["Multimedia Integration", "Insert localized audio into video, presentations, eLearning, and other supported media."],
              ["Output Preparation", "Prepare standalone audio, multilingual tracks, localized media, and customer-specified delivery formats."],
            ].map(([title, copy]) => <div className="vo-engineering-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container">
          <SectionHeading
            eyebrow="DUAL-LAYER QUALITY"
            title="Every Voice Track Has Two Quality Dimensions"
            intro="A recording can sound excellent while containing a terminology error. A linguistically accurate recording can still fail because of poor synchronization, an incorrect audio segment, or a technical playback problem. Sesen evaluates both dimensions together."
          />
          <div className="vo-qa-grid">
            <div className="vo-qa-panel">
              <div className="vo-qa-panel-top"><div className="vo-qa-panel-icon"><Icon name="script" /></div><h3>Linguistic Quality</h3></div>
              <ul className="vo-qa-list">
                {["Meaning", "Translation completeness", "Terminology", "Pronunciation", "Names", "Numbers", "Measurements", "Acronyms", "Additions & omissions", "Audience appropriateness"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="vo-qa-panel">
              <div className="vo-qa-panel-top"><div className="vo-qa-panel-icon"><Icon name="wave" /></div><h3>Audio & Multimedia Quality</h3></div>
              <ul className="vo-qa-list">
                {["Recording clarity", "Pacing", "Performance consistency", "Synchronization", "Clipping", "Distortion", "Audio levels", "Segment order", "Track placement", "Playback"].map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="vo-master-band">
            <span>LINGUISTIC QUALITY</span><span className="vo-master-plus">+</span><span>AUDIO QUALITY</span><span className="vo-master-plus">=</span><span className="vo-master-result">APPROVED MULTILINGUAL MASTER</span>
          </div>
        </div>
      </section>

      <section className="vo-section vo-bg-pale">
        <div className="vo-container vo-scale-grid">
          <div className="vo-scale-copy vo-mobile-heading-center">
            <div className="vo-eyebrow">GLOBAL PROGRAM DELIVERY</div>
            <h2>One Voiceover Program. Many Languages. Controlled Consistency.</h2>
            <div className="vo-scale-stat"><strong>150+</strong><span>Languages Supported</span></div>
            <p>Producing one localized voice track is different from coordinating dozens of languages across a global program. Sesen helps life sciences organizations manage multilingual audio through one experienced localization partner.</p>
          </div>
          <div className="vo-scale-list">
            {[
              ["Centralized Coordination", "Align schedules, production specifications, language teams, quality requirements, and deliverables across markets."],
              ["Terminology Consistency", "Reuse approved terminology, glossaries, pronunciation guidance, and project references across related content."],
              ["Talent Management", "Coordinate voice requirements across languages and support continuity for recurring programs where appropriate."],
              ["Parallel Production", "Move multiple languages through translation, voice production, engineering, and QA in parallel."],
              ["Technical Consistency", "Standardize file naming, output specifications, audio requirements, packaging, and delivery structures."],
              ["Version & Update Management", "Use established linguistic assets and production references to support multilingual updates."],
            ].map(([title, copy]) => <div className="vo-scale-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container">
          <SectionHeading
            eyebrow="CONNECTED MULTIMEDIA SERVICES"
            title="Voiceover Is One Layer of Global Multimedia"
            intro="Sometimes you need a voice track. Sometimes you need every layer of the experience localized together. Sesen connects specialist voice production with the broader multimedia services required for global communication."
          />
          <div className="vo-related-grid">
            {[
              ["layers", "Multimedia Localization Services", "Localize video, audio, subtitles, graphics, animation, eLearning, and other audiovisual elements through one coordinated workflow.", "https://www.sesen.com/multimedia-translation-services/"],
              ["play", "Video Translation Services", "Localize complete video experiences including scripts, voiceover, subtitles, on-screen content, audiovisual engineering, and final multilingual production.", "https://www.sesen.com/video-translation-services/"],
              ["captions", "Subtitling Services", "Support multilingual subtitles, captions, timed text, and accessible on-screen language alongside—or instead of—localized audio.", "https://www.sesen.com/subtitling-services/"],
              ["learn", "eLearning Translation Services", "Localize complete digital courses including voiceover, subtitles, on-screen text, interactions, graphics, assessments, and course reintegration.", "https://www.sesen.com/elearning-training-translation-services/"],
            ].map(([icon, title, copy, href]) => (
              <div className="vo-related-item" key={title}>
                <div className="vo-related-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowLink href={href}>Explore {title}</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vo-section vo-bg-soft">
        <div className="vo-container">
          <SectionHeading
            title="Why Life Sciences Teams Choose Sesen for Voiceover"
            intro="Voiceover sits at the intersection of language, subject matter, human communication, and technical production. Sesen brings those disciplines together for organizations that need multilingual audio delivered with quality, consistency, and scale."
          />
          <div className="vo-why-grid">
            {[
              ["Life Sciences Specialization", "Specialized multilingual workflows for pharmaceutical, biotech, medical device, clinical, healthcare, and scientific content."],
              ["Terminology & Pronunciation Control", "Carry approved written terminology accurately into spoken delivery using project-specific linguistic resources and review."],
              ["Professional Voice & Audio Production", "Coordinate talent, recording, engineering, synchronization, integration, and audio QA through one workflow."],
              ["Human + AI-Enabled Options", "Select a production model appropriate for the content, audience, scale, update frequency, and quality requirements."],
              ["Global Program Management", "Manage multilingual voiceover across languages, markets, recurring programs, and production updates."],
              ["Quality-Controlled Workflows", "Support multilingual production with structured review, terminology management, project controls, and final QA."],
            ].map(([title, copy]) => <div className="vo-why-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="vo-cert-strip" aria-label="Sesen quality and delivery credentials">
            <span>ISO 17100 Certified</span>
            <span>ISO 9001:2015 Certified</span>
            <span>ISO 13485:2016 Certified</span>
            <span>GDPR & HIPAA Aligned</span>
            <span>Secure AWS Infrastructure</span>
            <span>150+ Languages</span>
          </div>
        </div>
      </section>

      <section className="vo-section">
        <div className="vo-container vo-faq-layout">
          <div className="vo-faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about multilingual voice production, medical pronunciation, dubbing, synchronization, human and AI voice workflows, and delivery.</p>
          </div>
          <div className="vo-faq-list">
            {faqs.map((faq, index) => (
              <details className="vo-faq-item" key={faq.q} open={index === 0}>
                <summary><span>{faq.q}</span><span className="vo-faq-toggle" aria-hidden="true">+</span></summary>
                <div className="vo-faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="vo-final-wrap">
        <div className="vo-container">
          <div className="vo-final-cta">
            <div className="vo-final-copy vo-mobile-heading-center">
              <h2>Give Your Multilingual Content the Right Voice</h2>
              <p>Bring us your source media, scripts, target languages, timing requirements, or existing production package. Sesen can help define the right combination of localization, pronunciation control, professional voice talent, AI-enabled production, synchronization, engineering, and quality assurance for your program.</p>
            </div>
            <div className="vo-final-actions">
              <Button href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</Button>
              <Button href="https://www.sesen.com/contact-sales/" secondary>TALK WITH TEAM SESEN</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
