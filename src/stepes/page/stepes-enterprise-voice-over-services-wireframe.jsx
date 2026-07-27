const LINKS = {
  contact: "https://www.stepes.com/contact-us/",
  quote: "https://app.stepes.com/quote/",
  aiVoice: "https://www.stepes.com/ai-voice-over-services/",
  video: "https://www.stepes.com/video-translation-services/",
  multimedia: "https://www.stepes.com/multimedia-translation-services/",
  elearning: "https://www.stepes.com/elearning-translation-services/",
  software: "https://www.stepes.com/software-translation-services/",
  healthcare: "https://www.stepes.com/healthcare-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  media: "https://www.stepes.com/media-entertainment-translation-services/",
  gaming: "https://www.stepes.com/gaming-translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
  portal: "https://www.stepes.com/translation-management-portal/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  terminology: "https://www.stepes.com/terminology-management/",
};

function Icon({ name, size = 24, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const paths = {
    microphone: (
      <>
        <rect x="8" y="2.5" width="8" height="12" rx="4" />
        <path d="M5.5 10.5v.8a6.5 6.5 0 0 0 13 0v-.8" />
        <path d="M12 17.8v3.2M8.5 21h7" />
      </>
    ),
    waveform: (
      <>
        <path d="M3 12h2l1.2-4 2.3 8 2.2-11 2.5 14 2.1-9 1.4 4H21" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.8 19c.5-3.2 2.2-5 5.2-5s4.7 1.8 5.2 5" />
        <path d="M15.5 6.2a2.8 2.8 0 0 1 0 5.5M16.3 14.2c2.3.4 3.6 2 3.9 4.8" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.4 5.2L18 9l-4.6 1.8L12 16l-1.4-5.2L6 9l4.6-1.8L12 2Z" />
        <path d="m18.5 14 .8 2.7 2.2.8-2.2.8-.8 2.7-.7-2.7-2.3-.8 2.3-.8.7-2.7Z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    script: (
      <>
        <path d="M6 3h9l3 3v15H6V3Z" />
        <path d="M15 3v4h4M9 11h6M9 15h6M9 19h4" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <path d="M4 13h3v7H5.5A1.5 1.5 0 0 1 4 18.5V13ZM20 13h-3v7h1.5a1.5 1.5 0 0 0 1.5-1.5V13Z" />
      </>
    ),
    timer: (
      <>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 13V8M9 2h6M16.5 5.5 18 4" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h7M15 6h5M4 12h3M11 12h9M4 18h10M18 18h2" />
        <circle cx="13" cy="6" r="2" />
        <circle cx="9" cy="12" r="2" />
        <circle cx="16" cy="18" r="2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.6 2.6L16.5 8.8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.7-2.5 8-7 10-4.5-2-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="5" width="13" height="14" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4V8Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 4.5h6.5A2.5 2.5 0 0 1 13 7v13a3 3 0 0 0-3-3H4V4.5Z" />
        <path d="M20 4.5h-4.5A2.5 2.5 0 0 0 13 7v13a3 3 0 0 1 3-3h4V4.5Z" />
      </>
    ),
    software: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M13 6.5h.01" />
        <path d="m9 13-2 2 2 2M15 13l2 2-2 2" />
      </>
    ),
    heart: (
      <>
        <path d="M12 20s-8-4.8-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.2-8 10-8 10Z" />
        <path d="M8 12h2l1-2 2 4 1-2h2" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      </>
    ),
    film: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" />
      </>
    ),
    folder: (
      <>
        <path d="M3 6h7l2 2h9v11H3V6Z" />
        <path d="M3 10h18" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    arrows: (
      <>
        <path d="M7 7h11l-3-3M17 17H6l3 3M18 7l-3 3M6 17l3-3" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    chevron: <path d="m8 10 4 4 4-4" />,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function SectionHeading({ eyebrow = "", title, intro = "", align = "left", dark = false }) {
  return (
    <div className={`sectionHeading ${align === "center" ? "sectionHeadingCenter" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className={dark ? "sectionIntro sectionIntroDark" : "sectionIntro"}>{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children, light = false }) {
  return (
    <a className={light ? "textLink textLinkLight" : "textLink"} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function CheckList({ items, compact = false, light = false }) {
  return (
    <ul className={`checkList ${compact ? "checkListCompact" : ""} ${light ? "checkListLight" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="checkMarker"><Icon name="check" size={19} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const productionModels = [
  {
    icon: "users",
    title: "Professional Human Voice-Over",
    summary: "Natural performance and emotional range for highly visible, nuanced, or sensitive content.",
    best: "Best suited to brand campaigns, executive communications, character performances, premium video, and patient-facing content.",
    points: ["Authentic emotional delivery", "Directorial and creative control", "Regional and cultural nuance"],
  },
  {
    icon: "spark",
    title: "AI Voice Production",
    summary: "Fast, consistent multilingual narration for high-volume content and programs that change frequently.",
    best: "Best suited to employee training, software tutorials, product demonstrations, knowledge libraries, and rapid global releases.",
    points: ["Scalable multilingual output", "Faster revisions and updates", "Consistent voices across assets"],
  },
  {
    icon: "layers",
    title: "Hybrid Voice Production",
    summary: "AI production efficiency combined with professional translation, pronunciation control, and native review.",
    best: "Best suited to enterprise programs that need speed and flexibility without giving up linguistic oversight.",
    points: ["Human-reviewed AI audio", "Flexible quality tiers", "Selective human recording"],
  },
];

const capabilityGroups = [
  {
    icon: "script",
    title: "Script and Language Preparation",
    text: "Prepare every script for natural spoken delivery, accurate timing, and the expectations of each target market.",
    items: ["Transcription and source-script extraction", "Translation and spoken-language adaptation", "Terminology, pronunciation, and time-code preparation"],
  },
  {
    icon: "microphone",
    title: "Voice Casting and Recording",
    text: "Select and manage native professional voices that match your audience, content, brand, and production style.",
    items: ["Voice samples and project auditions", "Regional accent, age, tone, and style matching", "Studio, remote-directed, and multi-speaker recording"],
  },
  {
    icon: "spark",
    title: "AI Voice Production",
    text: "Create scalable multilingual audio within a professionally managed translation and quality workflow.",
    items: ["AI text-to-speech narration", "Authorized voice cloning and voice preservation", "Tone, pace, pronunciation, and rapid regeneration controls"],
  },
  {
    icon: "video",
    title: "Dubbing and Synchronization",
    text: "Align localized narration and dialogue with source timing, on-screen action, or visible speaker movements.",
    items: ["Voice-over replacement and multilingual dubbing", "Timed narration and phrase-level adaptation", "Lip-sync and voice-preserving AI dubbing"],
  },
  {
    icon: "sliders",
    title: "Audio Post-Production",
    text: "Deliver clean, balanced, production-ready files for video, learning, product, and multimedia environments.",
    items: ["Audio cleanup, editing, mixing, and mastering", "Music, sound-effect, and dialogue balancing", "Final rendering and platform-specific output"],
  },
];

const workflowSteps = [
  ["01", "Content Assessment", "Review source assets, audiences, languages, formats, and release requirements."],
  ["02", "Script Preparation", "Extract, transcribe, segment, and organize content with speaker and timing details."],
  ["03", "Translation and Adaptation", "Translate for natural spoken delivery, timing, terminology, and cultural fit."],
  ["04", "Voice Selection", "Cast professional talent or select approved AI voices for each target market."],
  ["05", "Recording or Generation", "Produce the approved delivery with controlled pace, tone, emphasis, and pronunciation."],
  ["06", "Linguistic and Audio QA", "Verify accuracy, completeness, pronunciation, timing, delivery, and audio quality."],
  ["07", "Synchronization and Mixing", "Align audio with video and balance dialogue, music, sound effects, and source audio."],
  ["08", "Delivery and Integration", "Provide production-ready files or integrate localized audio into multimedia assets."],
];

const useCases = [
  {
    icon: "book",
    title: "Learning and Development",
    text: "Employee onboarding, compliance, safety, certification, leadership, product training, and LMS course libraries.",
    href: LINKS.elearning,
    link: "eLearning Translation Services",
  },
  {
    icon: "software",
    title: "Product and Software Content",
    text: "Product demonstrations, user onboarding, help videos, feature walkthroughs, tutorials, and release communications.",
    href: LINKS.software,
    link: "Software & SaaS Translation Services",
  },
  {
    icon: "waveform",
    title: "Marketing and Corporate Communications",
    text: "Brand videos, advertising, corporate presentations, executive messages, webinars, and global campaigns.",
  },
  {
    icon: "heart",
    title: "Healthcare and Life Sciences",
    text: "Patient education, medical device training, clinical-study materials, pharmaceutical communications, and medical learning.",
    href: LINKS.healthcare,
    link: "Healthcare Translation Services",
  },
  {
    icon: "gear",
    title: "Manufacturing and Industrial Content",
    text: "Equipment training, safety instructions, maintenance procedures, operational videos, and dealer education.",
    href: LINKS.manufacturing,
    link: "Manufacturing Translation Services",
  },
  {
    icon: "film",
    title: "Media, Entertainment, and Gaming",
    text: "Documentaries, streaming content, podcasts, animation, character dialogue, games, trailers, and promotional media.",
    href: LINKS.media,
    link: "Media & Entertainment Translation Services",
  },
];

const whyStepes = [
  ["layers", "One Integrated Localization Partner", "Translation, adaptation, voice production, QA, audio engineering, multimedia integration, and delivery are managed together."],
  ["arrows", "Human, AI, and Hybrid Flexibility", "Use the right production method for each audience, content category, update cycle, and quality requirement."],
  ["globe", "Native Linguistic Expertise", "Native-language professionals review scripts and audio for accuracy, fluency, pronunciation, terminology, and cultural fit."],
  ["users", "Enterprise-Scale Language Coverage", "Coordinate voice-over and dubbing across more than 100 languages and regional markets."],
  ["sliders", "Technology-Enabled Workflows", "Accelerate production, maintain consistency, and update multilingual content more efficiently."],
  ["folder", "Industry-Specific Experience", "Support technical, medical, manufacturing, software, corporate, learning, marketing, media, and entertainment content."],
  ["shield", "Professional Quality Management", "Combine customer review controls with Stepes’ established ISO-certified quality framework."],
];

const faqItems = [
  ["What is multilingual voice-over?", "Multilingual voice-over is the process of translating, adapting, recording or generating, reviewing, and producing spoken content in one or more target languages. It may use professional human talent, AI voices, or a hybrid production workflow."],
  ["What is the difference between voice-over and dubbing?", "Voice-over generally adds translated narration and may retain some original audio. Dubbing replaces the original dialogue with target-language speech and can be time synchronized or adapted for visible lip movements."],
  ["Should we use human or AI voice-over?", "The right choice depends on the audience, emotional requirements, production volume, update frequency, timeline, and budget. Human talent is often preferred for nuanced or highly visible content, while AI voice can be effective for structured, frequently updated, or high-volume narration."],
  ["Can Stepes provide voice samples or auditions?", "Yes. Stepes can provide available voice samples and arrange project-specific auditions based on language, locale, content type, audience, and desired voice style."],
  ["How do you ensure names and technical terms are pronounced correctly?", "Stepes prepares pronunciation guidance, phonetic notes, approved terminology, and project-specific pronunciation dictionaries. Native linguists review names, product terms, acronyms, measurements, and specialized terminology in the final audio."],
  ["Can Stepes match our existing brand voice?", "Yes. Depending on project requirements and authorization, Stepes can maintain approved professional talent, work from voice references, use consistent AI voices, or support authorized voice-preserving and voice-cloning workflows."],
  ["Do you support lip-sync dubbing?", "Yes. Stepes supports lip-sync dubbing through script adaptation, timing control, professional performance, audio engineering, and synchronization with visible speaker movements."],
  ["Can Stepes translate and prepare the script?", "Yes. Services include transcription, source-script extraction, translation, localization, spoken-language adaptation, terminology preparation, pronunciation guidance, speaker labeling, and time coding."],
  ["How many languages does Stepes support?", "Stepes supports multilingual voice-over and dubbing in more than 100 languages. Specific voice options, accents, and regional variants depend on the language and project requirements."],
  ["What audio and video formats can you deliver?", "Stepes supports common audio and video formats such as WAV, MP3, AAC, MP4, and MOV, along with subtitle files, transcripts, bilingual scripts, separate audio tracks, and customer-specific multimedia formats."],
  ["Can Stepes update audio when source content changes?", "Yes. Stepes can identify affected content and update audio through human rerecording, AI regeneration, editing, mixing, and reintegration while reusing approved scripts, terminology, pronunciation resources, and voices where appropriate."],
  ["How is AI-generated voice content reviewed?", "Native linguists review AI-generated speech for accuracy, pronunciation, terminology, fluency, completeness, timing, and cultural appropriateness. Audio QA also checks for unnatural pauses, distortion, clipping, or synthetic voice artifacts."],
  ["Can Stepes provide separate audio tracks for each speaker?", "Yes. Audio can be delivered as separate speaker tracks, mixed masters, language-specific tracks, or another structure based on the customer’s production environment."],
  ["How much do multilingual voice-over services cost?", "Pricing depends on language, script length, finished duration, number of speakers, voice type, production model, synchronization, auditions, post-production, and delivery formats. Stepes provides a tailored quotation after reviewing the source content and production requirements."],
];

function HeroConsole() {
  return (
    <div className="heroConsole" aria-label="Illustrative multilingual voice production workspace">
      <div className="consoleTop">
        <div>
          <span className="consoleMeta">MULTILINGUAL VOICE PRODUCTION</span>
          <strong>Global Product Training</strong>
        </div>
        <span className="statusPill"><span />In production</span>
      </div>
      <div className="consoleBody">
        <div className="scriptPanel">
          <div className="panelLabel"><Icon name="script" size={18} /> Approved script</div>
          <p>Welcome to the new product training series. This module explains the core safety and operating procedures.</p>
          <div className="termRow">
            <span>Pronunciation</span>
            <strong>Stepes /steps/</strong>
          </div>
        </div>
        <div className="trackPanel">
          <div className="trackHead">
            <span>Voice tracks</span>
            <span>3 languages</span>
          </div>
          {[
            ["English (US)", "Human", 78],
            ["Spanish (LATAM)", "Hybrid", 66],
            ["Japanese", "AI + QA", 84],
          ].map(([language, type, width]) => (
            <div className="voiceTrack" key={language}>
              <div className="trackMeta"><strong>{language}</strong><span>{type}</span></div>
              <div className="waveLine" aria-hidden="true">
                {Array.from({ length: 22 }).map((_, index) => (
                  <span key={index} style={{ height: `${8 + ((index * 7 + width) % 24)}px` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="consoleFooter">
        <div className="qualityState"><Icon name="check" size={18} /><span>Translation approved</span></div>
        <div className="qualityState"><Icon name="headphones" size={18} /><span>Native audio QA</span></div>
        <div className="qualityState"><Icon name="video" size={18} /><span>Video integration</span></div>
      </div>
    </div>
  );
}

function AudioSample({ language, type, label, duration, variant }) {
  return (
    <details className={`audioSample ${variant || ""}`}>
      <summary>
        <span className="samplePlay"><Icon name="play" size={24} /></span>
        <span className="sampleInfo">
          <strong>{label}</strong>
          <span>{language} · {type}</span>
        </span>
        <span className="sampleWave" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} style={{ height: `${8 + ((index * 9 + duration) % 22)}px` }} />)}
        </span>
        <span className="sampleDuration">0:{duration}</span>
      </summary>
      <div className="sampleTranscript">
        <span>Sample transcript</span>
        <p>“Welcome to the new product training series. This module explains the core safety and operating procedures.”</p>
      </div>
    </details>
  );
}

export default function StepesEnterpriseVoiceOverServicesWireframe() {
  return (
    <main className="voicePage">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #9F1D55;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #24252A;
          --ink-2: #3E4048;
          --muted: #676A74;
          --line: #E4E5E9;
          --line-dark: rgba(255,255,255,.16);
          --surface: #F7F7F9;
          --dark: #202128;
          --dark-2: #2A2B33;
          --white: #FFFFFF;
          --shadow: 0 24px 70px rgba(30,31,37,.10);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .voicePage {
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }
        .voicePage a { color: inherit; }
        .shell { width: min(100%, 1392px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding-top: 96px; padding-bottom: 96px; }
        .sectionDense { padding-top: 80px; padding-bottom: 80px; }
        .surface { background: var(--surface); }
        .blush { background: var(--blush); }
        .darkSection { background: var(--dark); color: var(--white); }
        .darkSectionAlt { background: var(--dark-2); color: var(--white); }

        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -.025em; }
        h1 { margin-bottom: 24px; font-size: 48px; line-height: 1.08; max-width: 690px; }
        h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.16; }
        h3 { margin-bottom: 12px; font-size: 24px; line-height: 1.25; }
        p { margin-bottom: 20px; color: var(--ink-2); font-size: 16px; }
        .darkSection p, .darkSectionAlt p { color: rgba(255,255,255,.78); }
        .largeCopy { font-size: 18px; line-height: 1.65; }
        .eyebrow {
          margin-bottom: 18px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.2 !important;
          letter-spacing: .16em !important;
          text-transform: uppercase;
        }
        .eyebrowDark { color: var(--pink-light) !important; }
        .sectionHeading { max-width: 790px; margin-bottom: 52px; }
        .sectionHeadingCenter { margin-left: auto; margin-right: auto; text-align: center; }
        .sectionIntro { max-width: 800px; margin-bottom: 0; font-size: 18px; line-height: 1.65; color: var(--muted); }
        .sectionIntroDark { color: rgba(255,255,255,.76); }

        .primaryButton,
        .primaryButton:link,
        .primaryButton:visited,
        .primaryButton:hover,
        .primaryButton:active,
        .primaryButton:focus,
        .primaryButton:focus-visible {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 23px;
          border: 1px solid var(--magenta);
          border-radius: 999px;
          background: var(--magenta);
          color: #FFFFFF !important;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          box-shadow: 0 10px 24px rgba(193,29,99,.18);
          transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
        }
        .primaryButton *,
        .primaryButton:link *,
        .primaryButton:visited *,
        .primaryButton:hover *,
        .primaryButton:active *,
        .primaryButton:focus *,
        .primaryButton:focus-visible * {
          color: #FFFFFF !important;
          stroke: #FFFFFF !important;
          fill: none;
        }
        .primaryButton:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 14px 30px rgba(159,29,85,.24); }
        .secondaryButton {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 23px;
          border: 1px solid #D6D7DC;
          border-radius: 999px;
          background: var(--white);
          color: var(--ink) !important;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: border-color .2s ease, transform .2s ease;
        }
        .secondaryButton:hover { border-color: #A6A8B0; transform: translateY(-1px); }
        .primaryButton:focus-visible, .secondaryButton:focus-visible, .textLink:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .buttonRow { display: flex; flex-wrap: wrap; gap: 14px; }
        .textLink {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .textLink svg { transition: transform .2s ease; }
        .textLink:hover svg { transform: translateX(4px); }
        .textLinkLight { color: var(--pink-light) !important; }

        .hero { position: relative; padding-top: 104px; padding-bottom: 104px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFBFC 100%); }
        .hero::after { content: ""; position: absolute; right: -160px; top: -190px; width: 460px; height: 460px; border-radius: 50%; background: radial-gradient(circle, rgba(193,29,99,.055), rgba(193,29,99,0) 68%); pointer-events: none; }
        .heroGrid { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, .94fr) minmax(520px, 1.06fr); gap: 62px; align-items: center; }
        .heroCopy { max-width: 690px; }
        .heroCopy .largeCopy { max-width: 680px; margin-bottom: 30px; color: var(--muted); }
        .heroNote { display: flex; gap: 12px; align-items: flex-start; margin-top: 28px; max-width: 620px; color: var(--muted); font-size: 16px; }
        .heroNote svg { flex: 0 0 auto; margin-top: 2px; color: var(--magenta); }

        .heroConsole { position: relative; overflow: hidden; border: 1px solid #DCDDE2; border-radius: 30px; background: #FFFFFF; box-shadow: var(--shadow); }
        .consoleTop { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 24px 26px; border-bottom: 1px solid var(--line); }
        .consoleTop strong { display: block; margin-top: 4px; font-size: 18px; line-height: 1.35; }
        .consoleMeta { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; }
        .statusPill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 11px; border-radius: 999px; background: #F3F4F6; color: var(--ink-2); font-size: 14px; white-space: nowrap; }
        .statusPill span { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .consoleBody { display: grid; grid-template-columns: .82fr 1.18fr; min-height: 360px; }
        .scriptPanel { padding: 28px; border-right: 1px solid var(--line); background: #FAFAFB; }
        .panelLabel { display: flex; align-items: center; gap: 9px; margin-bottom: 22px; color: var(--ink); font-size: 14px; font-weight: 600; }
        .panelLabel svg { color: var(--magenta); }
        .scriptPanel p { margin-bottom: 28px; font-size: 16px; line-height: 1.7; }
        .termRow { padding-top: 20px; border-top: 1px solid var(--line); }
        .termRow span { display: block; margin-bottom: 5px; color: var(--muted); font-size: 14px; }
        .termRow strong { font-size: 16px; }
        .trackPanel { padding: 28px; }
        .trackHead { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 18px; color: var(--muted); font-size: 14px; }
        .voiceTrack { padding: 16px 0; border-top: 1px solid var(--line); }
        .voiceTrack:first-of-type { border-top: 0; }
        .trackMeta { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 12px; }
        .trackMeta strong { font-size: 16px; }
        .trackMeta span { color: var(--muted); font-size: 14px; }
        .waveLine { height: 34px; display: flex; align-items: center; gap: 4px; overflow: hidden; }
        .waveLine span { width: 3px; flex: 0 0 3px; border-radius: 3px; background: #B8BAC2; }
        .voiceTrack:nth-child(3) .waveLine span { background: #D486A7; }
        .voiceTrack:nth-child(4) .waveLine span { background: #9497A0; }
        .consoleFooter { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); background: #FCFCFD; }
        .qualityState { display: flex; min-height: 64px; align-items: center; justify-content: center; gap: 8px; padding: 14px; border-right: 1px solid var(--line); color: var(--ink-2); font-size: 14px; text-align: center; }
        .qualityState:last-child { border-right: 0; }
        .qualityState svg { color: var(--magenta); flex: 0 0 auto; }

        .trustBand { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .trustGrid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .trustItem { padding: 30px 28px; border-right: 1px solid var(--line); }
        .trustItem:first-child { padding-left: 0; }
        .trustItem:last-child { border-right: 0; padding-right: 0; }
        .trustItem strong { display: block; margin-bottom: 4px; font-size: 18px; line-height: 1.35; }
        .trustItem span { color: var(--muted); font-size: 16px; }

        .overviewGrid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 84px; align-items: start; }
        .overviewCopy { max-width: 550px; }
        .evaluationPanel { border-top: 3px solid var(--magenta); padding-top: 26px; }
        .evaluationPanel h3 { font-size: 22px; }
        .factorGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 18px; border-top: 1px solid var(--line); }
        .factorItem { display: flex; gap: 12px; padding: 18px 18px 18px 0; border-bottom: 1px solid var(--line); color: var(--ink-2); font-size: 16px; }
        .factorItem:nth-child(odd) { border-right: 1px solid var(--line); }
        .factorItem:nth-child(even) { padding-left: 18px; }
        .factorItem svg { flex: 0 0 auto; margin-top: 2px; color: var(--magenta); }

        .modelGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line-dark); }
        .modelCard { padding: 38px 34px 30px; border-right: 1px solid var(--line-dark); }
        .modelCard:last-child { border-right: 0; }
        .modelIcon { display: grid; width: 50px; height: 50px; place-items: center; margin-bottom: 26px; border: 1px solid rgba(242,167,198,.36); border-radius: 18px; color: var(--pink-light); }
        .modelCard h3 { margin-bottom: 16px; font-size: 24px; }
        .modelSummary { min-height: 84px; color: rgba(255,255,255,.82) !important; }
        .bestFor { min-height: 112px; padding-top: 22px; margin-top: 22px; border-top: 1px solid var(--line-dark); color: rgba(255,255,255,.66) !important; }
        .bestFor strong { display: block; margin-bottom: 7px; color: #FFFFFF; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
        .modelPoints { margin: 22px 0 0; padding: 0; list-style: none; }
        .modelPoints li { display: flex; gap: 10px; margin-top: 10px; color: rgba(255,255,255,.78); font-size: 16px; }
        .modelPoints svg { flex: 0 0 auto; margin-top: 3px; color: var(--pink-light); }
        .modelLink { margin-top: 32px; }

        .capabilityPanel { overflow: hidden; border: 1px solid var(--line); border-radius: 30px; background: #FFFFFF; box-shadow: 0 18px 50px rgba(30,31,37,.055); }
        .capabilityRow { display: grid; grid-template-columns: 72px .74fr 1.26fr; gap: 28px; align-items: start; padding: 34px 38px; border-bottom: 1px solid var(--line); }
        .capabilityRow:last-child { border-bottom: 0; }
        .capabilityIcon { display: grid; width: 54px; height: 54px; place-items: center; border-radius: 18px; background: var(--blush); color: var(--magenta); }
        .capabilityTitle p { margin-bottom: 0; color: var(--muted); }
        .checkList { display: grid; gap: 13px; margin: 0; padding: 0; list-style: none; }
        .checkList li { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 11px; align-items: start; color: var(--ink-2); font-size: 16px; }
        .checkMarker { display: inline-flex; margin-top: 2px; color: var(--magenta); }
        .checkListCompact { gap: 10px; }
        .checkListLight li { color: rgba(255,255,255,.78); }
        .checkListLight .checkMarker { color: var(--pink-light); }

        .castingGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 78px; align-items: center; }
        .voiceAttributes { display: flex; flex-wrap: wrap; gap: 10px; margin: 28px 0 24px; }
        .voiceAttributes span { padding: 8px 13px; border: 1px solid #D9DAE0; border-radius: 999px; background: #FFFFFF; color: var(--ink-2); font-size: 14px; }
        .castingConsole { padding: 28px; border: 1px solid var(--line); border-radius: 30px; background: #FFFFFF; box-shadow: var(--shadow); }
        .castingTop { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 22px; }
        .castingTop h3 { margin-bottom: 0; }
        .languageSelect { padding: 9px 12px; border-radius: 12px; background: var(--surface); color: var(--muted); font-size: 14px; }
        .talentRow { display: grid; grid-template-columns: 52px minmax(0, .8fr) minmax(160px, 1.2fr); gap: 16px; align-items: center; padding: 18px 0; border-top: 1px solid var(--line); }
        .talentAvatar { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); }
        .talentInfo strong { display: block; font-size: 16px; }
        .talentInfo span { color: var(--muted); font-size: 14px; }
        .miniWave { display: flex; height: 30px; align-items: center; gap: 4px; }
        .miniWave i { width: 3px; border-radius: 2px; background: #B7B9C2; }

        .scriptGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 64px; align-items: center; }
        .adaptationPanel { overflow: hidden; border: 1px solid #E7CBD7; border-radius: 30px; background: #FFFFFF; box-shadow: 0 18px 42px rgba(122,21,66,.08); }
        .adaptationHead { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 20px 24px; border-bottom: 1px solid #E9D3DD; }
        .adaptationHead strong { font-size: 16px; }
        .timingState { padding: 6px 10px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 14px; font-weight: 600; }
        .scriptCompare { display: grid; grid-template-columns: 1fr 1fr; }
        .scriptColumn { padding: 28px; }
        .scriptColumn:first-child { border-right: 1px solid var(--line); background: #FAFAFB; }
        .scriptColumn span { display: block; margin-bottom: 13px; color: var(--muted); font-size: 14px; }
        .scriptColumn p { margin-bottom: 18px; }
        .timingBar { height: 8px; overflow: hidden; border-radius: 8px; background: #ECECF0; }
        .timingBar i { display: block; width: 100%; height: 100%; border-radius: inherit; background: #9EA0A8; }
        .scriptColumn:last-child .timingBar i { width: 86%; background: var(--magenta); }
        .timingMeta { display: flex; justify-content: space-between; gap: 12px; margin-top: 8px; color: var(--muted); font-size: 14px; }

        .workflowGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .workflowStep { min-height: 250px; padding: 28px 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .stepNumber { display: block; margin-bottom: 24px; color: var(--magenta); font-size: 15px; font-weight: 600; letter-spacing: .08em; }
        .workflowStep h3 { font-size: 21px; }
        .workflowStep p { margin-bottom: 0; color: var(--muted); }

        .qaGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        .qaColumn { padding-top: 28px; border-top: 2px solid rgba(242,167,198,.52); }
        .qaColumn h3 { margin-bottom: 22px; }
        .controlBand { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 56px; border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
        .controlItem { padding: 24px 22px; border-right: 1px solid var(--line-dark); }
        .controlItem:last-child { border-right: 0; }
        .controlItem svg { margin-bottom: 14px; color: var(--pink-light); }
        .controlItem strong { display: block; margin-bottom: 5px; font-size: 16px; }
        .controlItem span { color: rgba(255,255,255,.66); font-size: 16px; }

        .dubbingGrid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 78px; align-items: start; }
        .dubbingList { border-top: 1px solid var(--line); }
        .dubbingRow { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .dubbingRow h3 { margin-bottom: 0; font-size: 19px; }
        .dubbingRow p { margin-bottom: 0; color: var(--muted); }

        .useCaseGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .useCase { display: flex; min-height: 310px; flex-direction: column; padding: 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .useCaseIcon { display: grid; width: 48px; height: 48px; place-items: center; margin-bottom: 24px; border-radius: 17px; background: var(--blush); color: var(--magenta); }
        .useCase h3 { font-size: 21px; }
        .useCase p { color: var(--muted); }
        .useCase .textLink { margin-top: auto; padding-top: 12px; }
        .dualLink { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: auto; padding-top: 12px; }

        .sampleShell { padding: 34px; border: 1px solid var(--line); border-radius: 30px; background: #FFFFFF; box-shadow: var(--shadow); }
        .sampleHeader { display: flex; align-items: flex-start; justify-content: space-between; gap: 28px; margin-bottom: 24px; }
        .sampleHeader h3 { margin-bottom: 8px; }
        .sampleHeader p { margin-bottom: 0; color: var(--muted); }
        .sampleLegend { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        .sampleLegend span { padding: 7px 10px; border-radius: 999px; background: var(--surface); color: var(--muted); font-size: 14px; white-space: nowrap; }
        .audioSample { border-top: 1px solid var(--line); }
        .audioSample summary { display: grid; grid-template-columns: 44px minmax(180px, .65fr) minmax(180px, 1fr) 44px; gap: 16px; align-items: center; min-height: 88px; padding: 12px 0; cursor: pointer; list-style: none; }
        .audioSample summary::-webkit-details-marker { display: none; }
        .samplePlay { display: grid; place-items: center; color: var(--magenta); }
        .sampleInfo strong { display: block; font-size: 16px; }
        .sampleInfo span { color: var(--muted); font-size: 14px; }
        .sampleWave { display: flex; height: 34px; align-items: center; gap: 5px; overflow: hidden; }
        .sampleWave i { width: 4px; border-radius: 3px; background: #B5B7BF; }
        .audioSample.hybrid .sampleWave i { background: #D28BAC; }
        .audioSample.ai .sampleWave i { background: #9799A2; }
        .sampleDuration { color: var(--muted); font-size: 14px; text-align: right; }
        .sampleTranscript { margin: 0 0 20px 60px; padding: 18px 20px; border-left: 2px solid var(--magenta); background: var(--blush); }
        .sampleTranscript span { color: var(--magenta); font-size: 14px; font-weight: 600; }
        .sampleTranscript p { margin: 6px 0 0; font-size: 16px; }
        .sampleFoot { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 26px; padding-top: 24px; border-top: 1px solid var(--line); }
        .sampleFoot p { margin-bottom: 0; color: var(--muted); }

        .globalGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .globalPanel { padding: 38px; border: 1px solid var(--line); border-radius: 28px; background: #FFFFFF; }
        .globalPanel h3 { margin-bottom: 16px; }
        .regionList { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin: 28px 0 18px; padding-top: 24px; border-top: 1px solid var(--line); }
        .regionList span { display: flex; gap: 10px; align-items: center; color: var(--ink-2); font-size: 16px; }
        .regionList svg { color: var(--magenta); }
        .deliverableColumns { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 26px; }
        .deliverableColumns h4 { margin: 0 0 10px; font-size: 16px; font-weight: 600; }
        .plainList { margin: 0; padding-left: 18px; color: var(--ink-2); }
        .plainList li { margin: 7px 0; font-size: 16px; }

        .enterpriseGrid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 80px; align-items: start; }
        .enterpriseMatrix { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
        .enterpriseItem { min-height: 150px; padding: 24px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
        .enterpriseItem svg { margin-bottom: 14px; color: var(--pink-light); }
        .enterpriseItem strong { display: block; margin-bottom: 6px; font-size: 17px; }
        .enterpriseItem span { color: rgba(255,255,255,.68); font-size: 16px; }

        .governanceGrid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 78px; align-items: center; }
        .governancePanel { padding: 34px; border: 1px solid var(--line); border-radius: 30px; background: #FFFFFF; box-shadow: var(--shadow); }
        .governanceRow { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 22px 0; border-top: 1px solid var(--line); }
        .governanceRow:first-child { border-top: 0; padding-top: 0; }
        .governanceRow:last-child { padding-bottom: 0; }
        .governanceIcon { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 15px; background: var(--blush); color: var(--magenta); }
        .governanceRow h3 { margin-bottom: 5px; font-size: 18px; }
        .governanceRow p { margin-bottom: 0; color: var(--muted); }

        .whyGrid { border-top: 1px solid var(--line); }
        .whyRow { display: grid; grid-template-columns: 52px .8fr 1.2fr; gap: 26px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .whyIcon { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 15px; background: var(--blush); color: var(--magenta); }
        .whyRow h3 { margin-bottom: 0; font-size: 19px; }
        .whyRow p { margin-bottom: 0; color: var(--muted); }
        .certBand { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 38px; }
        .certItem { padding: 22px 20px; border: 1px solid var(--line); border-radius: 20px; background: #FFFFFF; text-align: center; }
        .certItem strong { display: block; font-size: 18px; }
        .certItem span { color: var(--muted); font-size: 14px; }

        .relatedGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .relatedItem { display: flex; min-height: 255px; flex-direction: column; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; text-decoration: none; }
        .relatedItem svg:first-child { margin-bottom: 22px; color: var(--magenta); }
        .relatedItem h3 { font-size: 20px; }
        .relatedItem p { color: var(--muted); }
        .relatedAction { display: flex; align-items: center; gap: 8px; margin-top: auto; color: var(--magenta); font-size: 16px; font-weight: 600; }
        .relatedItem:hover .relatedAction svg { transform: translateX(4px); }
        .relatedItem:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .relatedAction svg { transition: transform .2s ease; }

        .faqPanel { overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: #FFFFFF; }
        .faqItem { border-bottom: 1px solid var(--line); }
        .faqItem:last-child { border-bottom: 0; }
        .faqItem summary { display: grid; grid-template-columns: minmax(0, 1fr) 34px; gap: 18px; align-items: center; min-height: 76px; padding: 19px 28px; cursor: pointer; list-style: none; font-size: 17px; font-weight: 600; }
        .faqItem summary::-webkit-details-marker { display: none; }
        .faqChevron { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--surface); color: var(--magenta); transition: transform .2s ease; }
        .faqItem[open] .faqChevron { transform: rotate(180deg); }
        .faqAnswer { max-width: 840px; padding: 0 72px 24px 28px; }
        .faqAnswer p { margin-bottom: 0; color: var(--muted); font-size: 16px; }

        .finalCta { position: relative; overflow: hidden; padding-top: 96px; padding-bottom: 96px; background: var(--blush); }
        .finalCta::before { content: ""; position: absolute; left: -130px; bottom: -230px; width: 460px; height: 460px; border-radius: 50%; border: 1px solid rgba(193,29,99,.12); }
        .finalCta::after { content: ""; position: absolute; right: -120px; top: -190px; width: 390px; height: 390px; border-radius: 50%; border: 1px solid rgba(193,29,99,.10); }
        .ctaGrid { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: center; }
        .ctaCopy { max-width: 760px; }
        .ctaCopy h2 { margin-bottom: 18px; }
        .ctaCopy p { margin-bottom: 0; font-size: 18px; color: var(--muted); }
        .ctaActions { display: flex; flex-direction: column; gap: 12px; min-width: 210px; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: .92fr 1.08fr; gap: 40px; }
          .heroConsole { border-radius: 26px; }
          .consoleBody { grid-template-columns: 1fr; }
          .scriptPanel { border-right: 0; border-bottom: 1px solid var(--line); }
          .scriptPanel p { margin-bottom: 20px; }
          .capabilityRow { grid-template-columns: 62px .8fr 1.2fr; gap: 22px; padding: 30px; }
          .workflowGrid { grid-template-columns: repeat(2, 1fr); }
          .useCaseGrid { grid-template-columns: repeat(2, 1fr); }
          .relatedGrid { grid-template-columns: repeat(2, 1fr); }
          .certBand { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .sectionDense { padding-top: 72px; padding-bottom: 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding-top: 88px; padding-bottom: 88px; }
          .heroGrid, .overviewGrid, .castingGrid, .scriptGrid, .dubbingGrid, .enterpriseGrid, .governanceGrid { grid-template-columns: 1fr; gap: 52px; }
          .heroCopy { max-width: 760px; }
          .heroConsole { max-width: 760px; }
          .trustGrid { grid-template-columns: repeat(2, 1fr); }
          .trustItem { padding: 24px; border-bottom: 1px solid var(--line); }
          .trustItem:first-child { padding-left: 0; }
          .trustItem:nth-child(2) { border-right: 0; padding-right: 0; }
          .trustItem:nth-child(3) { padding-left: 0; border-bottom: 0; }
          .trustItem:nth-child(4) { padding-right: 0; border-bottom: 0; }
          .modelGrid { grid-template-columns: 1fr; }
          .modelCard { border-right: 0; border-bottom: 1px solid var(--line-dark); }
          .modelCard:last-child { border-bottom: 0; }
          .modelSummary, .bestFor { min-height: 0; }
          .capabilityRow { grid-template-columns: 58px minmax(0, 1fr); }
          .capabilityList { grid-column: 2; }
          .qaGrid { grid-template-columns: 1fr; gap: 42px; }
          .controlBand { grid-template-columns: repeat(2, 1fr); }
          .controlItem:nth-child(2) { border-right: 0; }
          .controlItem:nth-child(-n+2) { border-bottom: 1px solid var(--line-dark); }
          .sampleHeader, .sampleFoot { flex-direction: column; align-items: flex-start; }
          .sampleLegend { justify-content: flex-start; }
          .globalGrid { grid-template-columns: 1fr; }
          .whyRow { grid-template-columns: 52px minmax(0, 1fr); align-items: start; }
          .whyRow p { grid-column: 2; }
          .ctaGrid { grid-template-columns: 1fr; }
          .ctaActions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section, .sectionDense { padding-top: 68px; padding-bottom: 68px; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .sectionHeading { margin-bottom: 38px; }
          .sectionIntro, .largeCopy { font-size: 18px; }
          .hero { padding-top: 72px; padding-bottom: 72px; }
          .heroGrid { gap: 42px; }
          .buttonRow, .ctaActions { flex-direction: column; }
          .primaryButton, .secondaryButton { width: 100%; }
          .heroNote { font-size: 16px; }
          .consoleTop { align-items: flex-start; padding: 20px; }
          .statusPill { padding: 6px 9px; }
          .scriptPanel, .trackPanel { padding: 22px 20px; }
          .consoleFooter { grid-template-columns: 1fr; }
          .qualityState { justify-content: flex-start; border-right: 0; border-bottom: 1px solid var(--line); padding-left: 20px; }
          .qualityState:last-child { border-bottom: 0; }
          .trustGrid { grid-template-columns: 1fr; }
          .trustItem, .trustItem:first-child, .trustItem:nth-child(2), .trustItem:nth-child(3), .trustItem:nth-child(4) { padding: 22px 0; border-right: 0; border-bottom: 1px solid var(--line); }
          .trustItem:last-child { border-bottom: 0; }
          .factorGrid { grid-template-columns: 1fr; }
          .factorItem, .factorItem:nth-child(even) { padding: 16px 0; border-right: 0; }
          .modelCard { padding: 32px 0; }
          .capabilityPanel { border-radius: 24px; }
          .capabilityRow { grid-template-columns: 48px minmax(0, 1fr); gap: 16px; padding: 26px 20px; }
          .capabilityIcon { width: 44px; height: 44px; border-radius: 15px; }
          .capabilityTitle p, .capabilityList { grid-column: 1 / -1; }
          .castingConsole, .sampleShell, .governancePanel, .globalPanel { padding: 24px 20px; border-radius: 24px; }
          .castingTop { align-items: flex-start; }
          .talentRow { grid-template-columns: 46px minmax(0, 1fr); }
          .miniWave { grid-column: 1 / -1; }
          .scriptCompare { grid-template-columns: 1fr; }
          .scriptColumn:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .workflowGrid { grid-template-columns: 1fr; }
          .workflowStep { min-height: 0; padding: 26px 22px; }
          .controlBand { grid-template-columns: 1fr; }
          .controlItem, .controlItem:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--line-dark); }
          .controlItem:last-child { border-bottom: 0; }
          .dubbingRow { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .useCaseGrid, .relatedGrid { grid-template-columns: 1fr; }
          .useCase { min-height: 0; padding: 28px 22px; }
          .audioSample summary { grid-template-columns: 40px minmax(0, 1fr) 42px; gap: 12px; }
          .sampleWave { grid-column: 2 / -1; }
          .sampleDuration { grid-column: 3; grid-row: 1; }
          .sampleTranscript { margin-left: 0; }
          .regionList, .deliverableColumns, .enterpriseMatrix { grid-template-columns: 1fr; }
          .enterpriseItem { min-height: 0; }
          .whyRow { grid-template-columns: 44px minmax(0, 1fr); gap: 16px; }
          .whyIcon { width: 42px; height: 42px; }
          .certBand { grid-template-columns: 1fr 1fr; gap: 12px; }
          .faqItem summary { min-height: 72px; padding: 17px 20px; font-size: 16px; }
          .faqAnswer { padding: 0 20px 22px; }
          .finalCta { padding-top: 72px; padding-bottom: 72px; }
        }

        @media (max-width: 390px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          h1 { font-size: 38px; }
          .consoleTop { flex-direction: column; }
          .trackMeta { align-items: flex-start; }
          .certBand { grid-template-columns: 1fr; }
          .audioSample summary { grid-template-columns: 38px minmax(0, 1fr); }
          .sampleDuration { grid-column: 2; grid-row: 2; text-align: left; }
          .sampleWave { grid-column: 1 / -1; }
        }

        @media (max-width: 330px) {
          .heroConsole, .capabilityPanel, .castingConsole, .sampleShell, .governancePanel, .globalPanel, .faqPanel { border-radius: 20px; }
          .voiceAttributes span { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1>Enterprise Voice-Over Services in 100+ Languages</h1>
            <p className="largeCopy">Bring global content to life with professional human voices, natural AI narration, and expertly managed multilingual dubbing. Stepes provides end-to-end support from script translation and voice casting through recording, linguistic quality assurance, audio post-production, and final multimedia delivery.</p>
            <div className="buttonRow">
              <a className="primaryButton" href={LINKS.contact}><span>Talk to an Expert</span><Icon name="arrow" size={18} /></a>
              <a className="secondaryButton" href={LINKS.quote}><span>Request a Quote</span><Icon name="arrow" size={18} /></a>
            </div>
            <div className="heroNote"><Icon name="check" size={21} /><span>One coordinated production partner for a single corporate video or a continuously updated global content library.</span></div>
          </div>
          <HeroConsole />
        </div>
      </section>

      <section className="trustBand" aria-label="Voice-over service highlights">
        <div className="shell trustGrid">
          {[
            ["100+ Languages", "Global and regional voice coverage"],
            ["Human, AI, and Hybrid", "Flexible production by content type"],
            ["Native Linguistic QA", "Accuracy, pronunciation, tone, and timing"],
            ["End-to-End Production", "Scripts, audio, video, and multimedia delivery"],
          ].map(([title, text]) => <div className="trustItem" key={title}><strong>{title}</strong><span>{text}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="shell overviewGrid">
          <div className="overviewCopy">
            <Eyebrow>Enterprise Voice Production</Eyebrow>
            <h2>One Partner for Every Multilingual Voice Production Need</h2>
            <p className="largeCopy">A premium brand video may require a directed professional voice actor, while a large training library may benefit from scalable AI narration and faster content updates. Other programs work best with a hybrid model.</p>
            <p>Stepes supports the full range of multilingual voice production and can recommend a different approach by project, language, content category, or individual asset.</p>
          </div>
          <div className="evaluationPanel">
            <h3>We evaluate the complete production context</h3>
            <p>Customers do not need to select a voice technology before engaging Stepes. Our specialists assess the factors that determine the most effective workflow.</p>
            <div className="factorGrid">
              {[
                ["script", "Content type and complexity"],
                ["users", "Audience and emotional expectations"],
                ["timer", "Release schedule and update frequency"],
                ["globe", "Languages, locales, and accents"],
                ["video", "Timing and synchronization needs"],
                ["shield", "Brand, regulatory, and security sensitivity"],
                ["sliders", "Required production quality"],
                ["layers", "Scale, reuse, and delivery environment"],
              ].map(([icon, label]) => <div className="factorItem" key={label}><Icon name={icon} size={20} /><span>{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell">
          <SectionHeading eyebrow="Choose the Right Production Model" title="Human, AI, or Hybrid Voice-Over" intro="The best voice-over method depends on what the content needs to accomplish. Stepes helps customers balance audience expectations, creative requirements, production volume, update frequency, timeline, and budget." dark />
          <div className="modelGrid">
            {productionModels.map((model) => (
              <article className="modelCard" key={model.title}>
                <div className="modelIcon"><Icon name={model.icon} size={25} /></div>
                <h3>{model.title}</h3>
                <p className="modelSummary">{model.summary}</p>
                <p className="bestFor"><strong>Best suited to</strong>{model.best}</p>
                <ul className="modelPoints">
                  {model.points.map((point) => <li key={point}><Icon name="check" size={18} /><span>{point}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="modelLink"><TextLink href={LINKS.aiVoice} light>Explore Enterprise AI Voice-Over Services</TextLink></div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <SectionHeading eyebrow="End-to-End Capabilities" title="Complete Voice-Over and Dubbing Services" intro="Stepes can support an individual production stage or manage the complete multilingual voice-over lifecycle from source content through final delivery." />
          <div className="capabilityPanel">
            {capabilityGroups.map((group) => (
              <article className="capabilityRow" key={group.title}>
                <div className="capabilityIcon"><Icon name={group.icon} size={25} /></div>
                <div className="capabilityTitle"><h3>{group.title}</h3><p>{group.text}</p></div>
                <div className="capabilityList"><CheckList items={group.items} compact /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell castingGrid">
          <div>
            <Eyebrow>Professional Voice Talent</Eyebrow>
            <h2>The Right Voice for Every Market</h2>
            <p className="largeCopy">Professional voice-over is more than reading translated words aloud. The speaker must sound natural, credible, and appropriate for the intended audience.</p>
            <p>Stepes helps customers select experienced native voice professionals by language, locale, accent, age, tone, pace, personality, and production style. Voice samples and project-specific auditions can be included in the approval workflow.</p>
            <div className="voiceAttributes" aria-label="Representative voice styles">
              {['Authoritative','Warm','Conversational','Energetic','Technical','Reassuring','Educational','Corporate','Character-driven','Cinematic'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>For recurring programs, approved talent can be maintained across a series of videos, training modules, or product releases, with backup planning for long-term continuity.</p>
          </div>
          <div className="castingConsole" aria-label="Illustrative professional voice casting panel">
            <div className="castingTop"><div><Eyebrow>Voice Shortlist</Eyebrow><h3>Spanish (Latin America)</h3></div><span className="languageSelect">Conversational · Professional</span></div>
            {[
              ["users", "Voice A", "Warm · Clear · Mid pace", 14],
              ["users", "Voice B", "Confident · Technical", 20],
              ["users", "Voice C", "Friendly · Energetic", 26],
            ].map(([icon, name, style, seed]) => (
              <div className="talentRow" key={name}>
                <div className="talentAvatar"><Icon name={icon} size={21} /></div>
                <div className="talentInfo"><strong>{name}</strong><span>{style}</span></div>
                <div className="miniWave" aria-hidden="true">{Array.from({ length: 24 }).map((_, i) => <i key={i} style={{ height: `${7 + ((i * 8 + seed) % 22)}px` }} />)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell scriptGrid">
          <div>
            <Eyebrow>Spoken-Language Adaptation</Eyebrow>
            <h2>Scripts Written to Be Heard, Not Just Read</h2>
            <p className="largeCopy">A sentence that reads naturally on a page may sound awkward, overly formal, or too long when spoken.</p>
            <p>Stepes adapts translated scripts for rhythm, sentence structure, timing, emphasis, cultural expectations, and the relationship between the audio and the screen.</p>
            <CheckList items={[
              "Restructure sentences for natural speech",
              "Adjust wording to fit available timing",
              "Prepare names, acronyms, numbers, and measurements",
              "Provide phonetic and pronunciation guidance",
              "Segment content by speaker and time code",
              "Match dialogue to on-screen action",
            ]} compact />
            <div style={{ marginTop: 26 }}><TextLink href={LINKS.terminology}>Terminology Management</TextLink></div>
          </div>
          <div className="adaptationPanel" aria-label="Illustrative script timing adaptation">
            <div className="adaptationHead"><strong>Voice-over script adaptation</strong><span className="timingState">Timing aligned</span></div>
            <div className="scriptCompare">
              <div className="scriptColumn">
                <span>Direct translation · 11.8 seconds</span>
                <p>Before beginning operation of this equipment, please ensure that all safety procedures described in the following instructions have been carefully reviewed.</p>
                <div className="timingBar"><i /></div>
                <div className="timingMeta"><span>Source window</span><span>10.2 sec</span></div>
              </div>
              <div className="scriptColumn">
                <span>Adapted narration · 10.1 seconds</span>
                <p>Before operating the equipment, review all safety procedures in the instructions that follow.</p>
                <div className="timingBar"><i /></div>
                <div className="timingMeta"><span>Localized delivery</span><span>10.1 sec</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Managed Production" title="A Complete Multilingual Voice-Over Workflow" intro="Each stage connects the approved script, voice, linguistic review, audio production, and final customer delivery within one coordinated process." />
          <div className="workflowGrid">
            {workflowSteps.map(([number, title, text]) => <article className="workflowStep" key={number}><span className="stepNumber">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section darkSectionAlt">
        <div className="shell">
          <SectionHeading eyebrow="Linguistic and Audio Quality Assurance" title="Quality You Can Hear in Every Language" intro="A recording can sound polished and still contain a mistranslation, incorrect number, or product-name error. Stepes evaluates both the language and the listening experience." dark />
          <div className="qaGrid">
            <div className="qaColumn">
              <h3>Linguistic Quality Checks</h3>
              <CheckList light items={[
                "Translation accuracy and completeness",
                "Terminology, grammar, and natural spoken expression",
                "Cultural appropriateness and audience fit",
                "Names, brand terminology, acronyms, dates, and measurements",
                "Alignment with the approved script",
              ]} />
            </div>
            <div className="qaColumn">
              <h3>Voice and Audio Quality Checks</h3>
              <CheckList light items={[
                "Pronunciation, pace, tone, emphasis, and emotional delivery",
                "Speaker consistency and audio clarity",
                "Background noise, distortion, clipping, and unnatural pauses",
                "AI-generated audio artifacts",
                "Timing, synchronization, segmentation, and sound balance",
              ]} />
            </div>
          </div>
          <div className="controlBand">
            {[
              ["book", "Pronunciation Resources", "Approved terminology, phonetic guidance, and reference audio"],
              ["users", "Review Checkpoints", "Voice, script, and final-production customer approvals"],
              ["folder", "Version Control", "Tracked content changes and reusable production assets"],
              ["check", "Final Signoff", "Corrective rerecording or regeneration before delivery"],
            ].map(([icon, title, text]) => <div className="controlItem" key={title}><Icon name={icon} size={23} /><strong>{title}</strong><span>{text}</span></div>)}
          </div>
          <div style={{ marginTop: 30 }}><TextLink href={LINKS.qa} light>Explore Stepes Translation Quality Assurance</TextLink></div>
        </div>
      </section>

      <section className="section">
        <div className="shell dubbingGrid">
          <div>
            <Eyebrow>Video and Multimedia Localization</Eyebrow>
            <h2>Dubbing That Fits the Message and the Screen</h2>
            <p className="largeCopy">Stepes localizes narration and dialogue for videos, animations, training courses, demonstrations, interviews, and other multimedia content.</p>
            <p>Voice-over and dubbing can be combined with subtitle translation, captioning, on-screen-text localization, and final video production.</p>
            <TextLink href={LINKS.video}>Video Translation and Localization Services</TextLink>
          </div>
          <div className="dubbingList">
            {[
              ["Narration Over Original Audio", "Translated narration is placed over reduced source audio for interviews, documentaries, testimonials, and informational content."],
              ["Synchronized Voice-Over", "Target-language narration is adapted and recorded to align closely with the timing of the source speaker or visual sequence."],
              ["Full Dubbing", "Original dialogue is replaced while preserving character relationships, speaker intent, tone, and scene timing."],
              ["Lip-Sync Dubbing", "Translated dialogue is adapted to align with visible mouth movements through coordinated linguistic and production work."],
              ["AI Voice-Preserving Dubbing", "With appropriate authorization, translated audio can retain recognizable characteristics of the source speaker, supported by human translation and QA."],
            ].map(([title, text]) => <div className="dubbingRow" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <SectionHeading eyebrow="Enterprise Applications" title="Voice-Over Services for Every Type of Global Content" intro="Stepes adapts the production model, voice selection, linguistic expertise, and delivery format to the purpose of each content program." />
          <div className="useCaseGrid">
            {useCases.map((item) => (
              <article className="useCase" key={item.title}>
                <div className="useCaseIcon"><Icon name={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <TextLink href={item.href}>{item.link}</TextLink> : null}
                {item.title === "Media, Entertainment, and Gaming" ? <div className="dualLink"><TextLink href={LINKS.gaming}>Gaming Translation Services</TextLink></div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Voice Samples" title="Hear the Difference" intro="Voice-over is an audio experience. Compare representative production models and evaluate how the same message can sound across voices, languages, and workflows." />
          <div className="sampleShell">
            <div className="sampleHeader">
              <div><h3>Sample Product Training Narration</h3><p>Select a track to view its sample transcript and production profile.</p></div>
              <div className="sampleLegend"><span>Human</span><span>AI</span><span>Hybrid</span></div>
            </div>
            <AudioSample language="English (US)" type="Professional human voice" label="Premium Corporate Narration" duration={24} />
            <AudioSample language="Spanish (Latin America)" type="AI + native linguistic QA" label="Scalable Training Voice" duration={22} variant="hybrid" />
            <AudioSample language="Japanese" type="Managed AI voice" label="Technical Product Narration" duration={26} variant="ai" />
            <AudioSample language="German" type="Professional human voice" label="Safety and Compliance Voice" duration={25} />
            <div className="sampleFoot"><p>Project-specific auditions can use a representative portion of your actual source script.</p><TextLink href={LINKS.contact}>Discuss Voice Samples</TextLink></div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell globalGrid">
          <div className="globalPanel">
            <Eyebrow>Languages and Regional Coverage</Eyebrow>
            <h2>Global Languages with Local Voices</h2>
            <p>Stepes supports multilingual voice-over and dubbing in more than 100 languages, including major global languages and regional market variants.</p>
            <div className="regionList">
              {[
                ["globe", "North and South America"],
                ["globe", "Europe"],
                ["globe", "Asia-Pacific"],
                ["globe", "Middle East and Africa"],
              ].map(([icon, text]) => <span key={text}><Icon name={icon} size={19} />{text}</span>)}
            </div>
            <p>For large global programs, Stepes centralizes production management while working with native linguists and voices for each target market.</p>
            <TextLink href={LINKS.languages}>Explore Our Supported Languages</TextLink>
          </div>
          <div className="globalPanel">
            <Eyebrow>Production-Ready Delivery</Eyebrow>
            <h2>Audio and Multimedia Files Ready for Use</h2>
            <p>Deliverables are prepared for your technical environment, production workflow, and publishing platform.</p>
            <div className="deliverableColumns">
              <div><h4>Audio and Video</h4><ul className="plainList"><li>WAV, MP3, AAC, M4A, and FLAC</li><li>MP4, MOV, AVI, and WebM</li><li>Separate speaker tracks and mixed masters</li><li>Final localized video files</li></ul></div>
              <div><h4>Supporting Assets</h4><ul className="plainList"><li>Time-coded and bilingual scripts</li><li>SRT and VTT subtitle files</li><li>Pronunciation guides and QA records</li><li>Storyline, Captivate, SCORM, and LMS-ready assets</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell enterpriseGrid">
          <div>
            <Eyebrow dark>Enterprise Scalability</Eyebrow>
            <h2>Built for Ongoing Global Content Programs</h2>
            <p className="largeCopy">Training libraries change, software interfaces evolve, product videos are updated, and new languages are introduced over time.</p>
            <p>Stepes helps organizations manage voice production as a scalable, repeatable localization program rather than a series of disconnected recordings.</p>
            <TextLink href={LINKS.portal} light>Stepes Translation Management Portal</TextLink>
          </div>
          <div className="enterpriseMatrix">
            {[
              ["globe", "Parallel Language Production", "Coordinate many languages and regional markets through one program."],
              ["book", "Reusable Language Assets", "Maintain approved terminology, scripts, and pronunciation resources."],
              ["users", "Consistent Voices", "Reuse approved human or AI voices across content libraries."],
              ["folder", "Version Control", "Track content changes and update only affected audio."],
              ["arrows", "Flexible Production Models", "Combine human, AI, and hybrid workflows in the same program."],
              ["chart", "Review and Visibility", "Support customer approvals, recurring releases, and delivery reporting."],
            ].map(([icon, title, text]) => <div className="enterpriseItem" key={title}><Icon name={icon} size={23} /><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell governanceGrid">
          <div>
            <Eyebrow>Responsible Voice Technology</Eyebrow>
            <h2>Secure, Authorized, and Professionally Managed AI Voice Production</h2>
            <p className="largeCopy">AI voice technology creates valuable new production options, but it also introduces responsibilities related to voice rights, consent, security, transparency, and appropriate use.</p>
            <p>Stepes approaches AI voice as a managed localization workflow rather than an unreviewed self-service process. Our specialists also help determine when professional human talent is the better choice for sensitive, emotionally demanding, regulated, or highly visible content.</p>
            <TextLink href={LINKS.aiVoice}>Learn About Stepes AI Voice-Over Services</TextLink>
          </div>
          <div className="governancePanel">
            {[
              ["shield", "Authorized Voice Use", "Use voice cloning and voice preservation only with appropriate customer authorization and defined production purposes."],
              ["lock", "Secure Asset Handling", "Manage source audio, scripts, and voice assets within controlled project workflows."],
              ["users", "Human Oversight", "Apply native linguistic review, pronunciation controls, customer approvals, and production QA."],
              ["folder", "Traceable Production", "Maintain approved voices, intended uses, versions, and content updates across the program."],
            ].map(([icon, title, text]) => <div className="governanceRow" key={title}><div className="governanceIcon"><Icon name={icon} size={22} /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <SectionHeading eyebrow="Why Stepes" title="Why Enterprises Choose Stepes for Multilingual Voice-Over" intro="Stepes combines the language expertise, production flexibility, quality controls, and operational scale required for global enterprise content." />
          <div className="whyGrid">
            {whyStepes.map(([icon, title, text]) => <div className="whyRow" key={title}><div className="whyIcon"><Icon name={icon} size={22} /></div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <div className="certBand" aria-label="Stepes quality and service highlights">
            <div className="certItem"><strong>ISO 17100</strong><span>Translation services</span></div>
            <div className="certItem"><strong>ISO 9001</strong><span>Quality management</span></div>
            <div className="certItem"><strong>ISO 13485</strong><span>Medical device quality</span></div>
            <div className="certItem"><strong>100+ Languages</strong><span>Global voice production</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Connected Localization Services" title="Complete Multimedia Localization from One Partner" intro="Connect multilingual voice production with the surrounding video, learning, graphics, subtitle, and interactive-content workflow." />
          <div className="relatedGrid">
            {[
              ["spark", "AI Voice-Over Services", "Managed multilingual AI narration, AI dubbing, authorized voice cloning, and human-reviewed synthetic voice production.", LINKS.aiVoice],
              ["video", "Video Translation Services", "Translate and localize dialogue, narration, subtitles, captions, graphics, on-screen text, and complete video assets.", LINKS.video],
              ["film", "Multimedia Translation Services", "End-to-end localization for audio, video, graphics, animation, presentations, and interactive media.", LINKS.multimedia],
              ["book", "eLearning Translation Services", "Localize training courses, narration, subtitles, interfaces, assessments, and LMS content.", LINKS.elearning],
            ].map(([icon, title, text, href]) => (
              <a className="relatedItem" href={href} key={title}>
                <Icon name={icon} size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="relatedAction">Explore Service <Icon name="arrow" size={18} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="shell">
          <SectionHeading title="Multilingual Voice-Over FAQs" intro="Answers to common questions about production models, voice selection, script preparation, dubbing, quality review, formats, updates, and pricing." />
          <div className="faqPanel">
            {faqItems.map(([question, answer], index) => (
              <details className="faqItem" key={question} open={index === 0}>
                <summary><span>{question}</span><span className="faqChevron"><Icon name="chevron" size={19} /></span></summary>
                <div className="faqAnswer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell ctaGrid">
          <div className="ctaCopy">
            <h2>Give Your Global Content the Right Voice</h2>
            <p>Share your source content, target languages, audience, production requirements, and schedule. Stepes will help determine the right combination of professional human voices, AI narration, dubbing, linguistic review, and audio production.</p>
          </div>
          <div className="ctaActions">
            <a className="primaryButton" href={LINKS.contact}><span>Talk to an Expert</span><Icon name="arrow" size={18} /></a>
            <a className="secondaryButton" href={LINKS.quote}><span>Request a Quote</span><Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
