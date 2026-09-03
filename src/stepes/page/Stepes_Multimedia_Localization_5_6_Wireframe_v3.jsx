import React, { useState } from "react";

const URLS = {
  quote: "https://www.stepes.com/quote/",
  contactSales: "https://www.stepes.com/contact-sales/",
  video: "https://www.stepes.com/video-translation-services/",
  voiceover: "https://www.stepes.com/voice-over-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  transcription: "https://www.stepes.com/transcription-services/",
  aiTranslation: "https://www.stepes.com/ai-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
};

const iconPaths = {
  language: <><path d="M4 5h10M9 3v2c0 5-2.5 8-6 10M6 10c1.6 2.3 3.6 4 6 5"/><path d="M14 9h6l-3 9M15.2 15h3.6"/></>,
  captions: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 11h4M7 15h6M15 11h2M15 15h2"/></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/></>,
  transcript: <><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 16h5"/></>,
  graphics: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/></>,
  media: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/></>,
  interactive: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h5M8 16h3"/><path d="m15 14 4 2-2 1-1 2z"/></>,
  qa: <><path d="M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  ai: <><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h6v6H9zM12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2 2 2M19.8 19.8 22 22M19.8 4.2 22 2M4.2 19.8 2 22"/></>,
  human: <><circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-5 3.3-7 7.5-7s6.7 2 7.5 7"/></>,
  memory: <><path d="M5 5h14v14H5z"/><path d="M8 9h8M8 13h5M8 17h7"/></>,
  term: <><path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 4v4M15 10v4M11 16v4"/></>,
  style: <><path d="M4 20 9 5h6l5 15M7 14h10"/></>,
  pronunciation: <><path d="M4 10v4h4l5 4V6l-5 4z"/><path d="M16 9c1.2.8 1.8 1.8 1.8 3S17.2 14.2 16 15M18.5 6.5C20.8 8 22 9.8 22 12s-1.2 4-3.5 5.5"/></>,
  review: <><path d="M5 4h14v13H9l-4 4z"/><path d="m9 10 2 2 4-4"/></>,
  context: <><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></>,
  training: <><path d="m3 8 9-5 9 5-9 5z"/><path d="M6 10v5c3 2 9 2 12 0v-5M21 8v7"/></>,
  marketing: <><path d="M4 13V9l12-5v14L4 13z"/><path d="M7 14v5h4v-4M19 9v4"/></>,
  technical: <><path d="M12 3 9.5 6.5 5 6l1 4-3 2 3 2-1 4 4.5-.5L12 21l2.5-3.5 4.5.5-1-4 3-2-3-2 1-4-4.5.5z"/><circle cx="12" cy="12" r="3"/></>,
  corporate: <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M9 5V3h6v2M8 10h8M8 14h8"/></>,
  regulated: <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6z"/><path d="M9 12h6M12 9v6"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  minus: <path d="M5 12h14"/>,
};

function Icon({ name, size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name] || iconPaths.media}
    </svg>
  );
}

function ArrowLink({ href, children }) {
  return (
    <a className="editorial-link" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 500" role="img">
        <defs>
          <linearGradient id="softPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f6f7fa" />
          </linearGradient>
        </defs>
        <rect x="38" y="38" width="544" height="404" rx="32" fill="url(#softPanel)" stroke="#D8DEE8" />
        <rect x="86" y="84" width="318" height="204" rx="18" fill="#FFFFFF" stroke="#AEB8C8" strokeWidth="2" />
        <rect x="108" y="106" width="274" height="134" rx="12" fill="#F5F7FA" stroke="#CBD3DE" />
        <path d="M217 145l64 38-64 38z" fill="#E7EAF0" stroke="#667085" strokeWidth="2" />
        <rect x="108" y="253" width="274" height="13" rx="6.5" fill="#E9ECF2" />
        <rect x="108" y="253" width="148" height="13" rx="6.5" fill="#C11D63" opacity="0.72" />
        <circle cx="256" cy="259.5" r="7" fill="#FFFFFF" stroke="#A71954" strokeWidth="2" />

        <rect x="426" y="92" width="106" height="88" rx="15" fill="#FFFFFF" stroke="#B9C3D1" />
        <path d="M449 138v-18c0-8 5-14 13-14s13 6 13 14v18c0 8-5 14-13 14s-13-6-13-14Z" fill="none" stroke="#485568" strokeWidth="2" />
        <path d="M442 136c0 14 8 23 20 23s20-9 20-23M462 159v10" fill="none" stroke="#485568" strokeWidth="2" />

        <rect x="426" y="196" width="106" height="92" rx="15" fill="#FFFFFF" stroke="#B9C3D1" />
        <path d="M446 222h66M446 242h49M446 260h58" stroke="#667085" strokeWidth="2" />
        <rect x="446" y="218" width="32" height="8" rx="4" fill="#F3C3D8" />

        <rect x="86" y="314" width="446" height="76" rx="16" fill="#FFFFFF" stroke="#B9C3D1" />
        <path d="M109 351h18l10-18 13 36 13-27 12 18 12-27 12 24 15-13 12 18 14-25 14 29 16-19 17 10 14-22 12 18 18-9 18 16" fill="none" stroke="#556174" strokeWidth="2.4" />
        <path d="M109 373h98M222 373h74M314 373h116" stroke="#D1D7E0" strokeWidth="5" strokeLinecap="round" />

        <path d="M53 206h22M544 227h24M279 53v20" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="63" cy="122" r="7" fill="#F7DCE7" stroke="#C11D63" />
        <circle cx="555" cy="330" r="7" fill="#F7DCE7" stroke="#C11D63" />
        <path d="M546 111h18M555 102v18" stroke="#C11D63" strokeWidth="2" />

        <rect x="178" y="410" width="266" height="20" rx="10" fill="#EEF1F5" />
        <rect x="211" y="410" width="72" height="20" rx="10" fill="#F3C3D8" />
        <rect x="291" y="410" width="51" height="20" rx="10" fill="#DDE3EA" />
        <rect x="350" y="410" width="62" height="20" rx="10" fill="#DDE3EA" />
      </svg>
    </div>
  );
}

const services = [
  {
    icon: "language",
    title: "Multimedia Translation",
    body: "Translate scripts, narration, dialogue, presentations, product messaging, instructional content, and other multimedia text with professional linguists who understand audience, subject matter, tone, and context.",
  },
  {
    icon: "captions",
    title: "Subtitle Translation and Captioning",
    body: "Create translated subtitles and captions that are clear, concise, readable, and synchronized with the source media, including timing, segmentation, speaker information, and common delivery formats.",
    link: [URLS.video, "Explore Video Translation Services"],
  },
  {
    icon: "mic",
    title: "Voiceover and Dubbing",
    body: "Produce multilingual narration with professional human voice talent or AI-enabled voice options, supported by script preparation, pronunciation guidance, timing, synchronization, editing, and integration.",
    link: [URLS.voiceover, "Explore Voice Over Services"],
  },
  {
    icon: "transcript",
    title: "Transcription and Time Coding",
    body: "Convert spoken source content into accurate written scripts for translation, subtitles, voice production, review, or archival use, with speaker information and timestamps where required.",
    link: [URLS.transcription, "Explore Transcription Services"],
  },
  {
    icon: "graphics",
    title: "On-Screen Text and Graphics Localization",
    body: "Translate and reintegrate titles, lower thirds, labels, diagrams, callouts, screenshots, interface text, animation text, and other visible language inside the multimedia experience.",
  },
  {
    icon: "media",
    title: "Audio and Video Production",
    body: "Coordinate audio editing, synchronization, mixing, voice replacement, subtitle integration, visual-text replacement, timing adjustments, rendering, and production-ready multilingual output.",
  },
  {
    icon: "interactive",
    title: "Interactive and Presentation Media",
    body: "Localize presentations, product demonstrations, employee communications, webinars, screen-based training, software walkthroughs, and other experiences that combine language with visual or interactive components.",
    link: [URLS.elearning, "Explore eLearning Localization"],
  },
  {
    icon: "qa",
    title: "Multimedia Localization Engineering and QA",
    body: "Combine linguistic review with multimedia engineering and in-context QA to identify issues involving timing, synchronization, layout, audio, visual presentation, terminology, untranslated content, or final output.",
  },
];

const layers = [
  ["Language", "Scripts · dialogue · descriptions · interface text"],
  ["Voice", "Narration · human voice · AI voice · dubbing"],
  ["Text", "Subtitles · captions · lower thirds · titles"],
  ["Visuals", "Graphics · diagrams · screenshots · animation"],
  ["Interactive", "Presentations · demonstrations · learning media"],
  ["Production", "Timing · engineering · reintegration · rendering"],
];

const workflow = [
  ["Source Asset Review", "Review files, languages, editable assets, duration, technical requirements, channels, and delivery expectations."],
  ["Content and Media Inventory", "Identify scripts, voice tracks, subtitles, graphics, screenshots, presentations, UI text, animations, and supporting assets."],
  ["Localization Preparation", "Prepare translation memory, terminology, style guidance, pronunciation lists, references, reviewer instructions, and production specifications."],
  ["Translation and Review", "Translate with the appropriate linguistic workflow, adapting spoken, subtitle, and visual text for its media context."],
  ["Multimedia Production", "Create multilingual voice, subtitles, captions, localized graphics, screenshots, and other production assets."],
  ["Reintegration and Engineering", "Synchronize, replace, edit, reintegrate, adjust timing, render, and prepare the required outputs."],
  ["In-Context Quality Assurance", "Review linguistic accuracy, terminology, timing, pronunciation, alignment, visual fit, RTL display, and final output."],
  ["Final Multilingual Delivery", "Deliver agreed source assets, subtitles, audio, localized graphics, production files, rendered media, and final outputs."],
];

const useCases = [
  {
    icon: "training",
    title: "Training and Learning",
    body: "Employee onboarding, compliance training, product education, technical instruction, customer academies, and recorded learning content.",
    link: [URLS.elearning, "eLearning Localization"],
  },
  {
    icon: "marketing",
    title: "Marketing and Brand",
    body: "Campaign videos, product launches, branded presentations, social content, promotional media, explainers, customer stories, and event media.",
  },
  {
    icon: "technical",
    title: "Product and Technical Content",
    body: "Product demonstrations, software walkthroughs, tutorials, installation media, maintenance instruction, troubleshooting content, and feature demonstrations.",
  },
  {
    icon: "corporate",
    title: "Corporate Communications",
    body: "Executive communications, company presentations, webinars, employee messages, town halls, recorded events, and internal campaigns.",
  },
  {
    icon: "regulated",
    title: "Regulated and Specialized Content",
    body: "Healthcare, life sciences, financial, legal, manufacturing, technology, and other specialized media requiring disciplined terminology, expertise, and QA.",
  },
];

const faqItems = [
  [
    "What is multimedia localization?",
    "Multimedia localization adapts the complete combination of language, voice, audio, subtitles, captions, visuals, graphics, timing, and production elements for audiences in another language or market. Unlike text-only translation, it considers how translated language behaves inside the finished experience and can include transcription, voiceover, dubbing, subtitle production, visual-text localization, engineering, reintegration, and in-context QA.",
  ],
  [
    "What is the difference between multimedia localization and video translation?",
    "Video translation focuses specifically on the language and production components of video, such as scripts, narration, subtitles, captions, dubbing, graphics, and final video output. Multimedia localization is broader and can coordinate video with audio, presentations, graphics, interactive media, product demonstrations, training assets, and other media components as part of one multilingual experience.",
  ],
  [
    "What types of multimedia content can Stepes localize?",
    "Stepes supports corporate, marketing, training, product, technical, educational, and specialized multimedia, including product demonstrations, presentations, webinars, training content, tutorials, corporate communications, software walkthroughs, marketing media, recorded events, instructional content, audio programs, subtitles, and mixed-media production packages.",
  ],
  [
    "Can Stepes provide both subtitles and multilingual voiceover?",
    "Yes. Projects can use subtitles, human voiceover, AI voice, dubbing, or a combination based on audience, budget, production requirements, intended channel, and quality expectations. Stepes can coordinate translation, script preparation, timing, voice production, subtitle creation, engineering, and QA in the same workflow.",
  ],
  [
    "Does Stepes provide AI voice and AI dubbing?",
    "Stepes supports AI-enabled voice production for appropriate multimedia workflows as well as professional human voice talent. AI voice can be effective for scalable and frequently updated content, while human voice remains valuable when natural performance, brand expression, specialized pronunciation, emotional delivery, or higher-stakes communication is important.",
  ],
  [
    "Can Stepes localize text embedded in graphics and videos?",
    "Yes. Multimedia localization can include titles, lower thirds, diagrams, screenshots, callouts, labels, interface text, presentation graphics, animation text, and other visual language. Editable source files are recommended because they make it easier to adjust translated text for language-specific length, fonts, direction, and layout.",
  ],
  [
    "Can Stepes work with translations we already have?",
    "Yes. Existing translations, translation memory, glossaries, terminology, prior subtitles, approved scripts, and other multilingual assets can often be incorporated into a new workflow. Stepes can review these resources to determine what can be reused and where new translation, review, or production work is required.",
  ],
  [
    "Can you update only the portions of a multimedia file that changed?",
    "Yes, when the source files and production structure allow it. Stepes can compare versions, identify affected language and media components, reuse approved content, update changed translations or production assets, and focus QA on the revised areas and surrounding context.",
  ],
  [
    "How does Stepes keep terminology consistent between narration, subtitles, and graphics?",
    "Stepes can use shared translation memory, approved terminology, style guidance, pronunciation instructions, previous translations, and reviewer feedback across the project. This helps keep product names, technical terms, brand language, and specialized concepts consistent across voice, captions, graphics, presentations, and product screens.",
  ],
  [
    "How is multimedia localization quality checked?",
    "Quality assurance can combine linguistic review with technical and in-context multimedia checks. Depending on scope, Stepes can review translation accuracy, terminology, pronunciation, subtitle timing, caption synchronization, audio alignment, visual text, layout, missing translations, graphics, right-to-left presentation, media output, and final production specifications.",
  ],
  [
    "Can localized captions support accessibility requirements?",
    "Yes. Captions and transcripts can be incorporated into multimedia localization to support accessibility objectives. Specific requirements depend on the content, publishing environment, audience, jurisdiction, and standards applicable to the project, so Stepes prepares caption and subtitle assets according to the agreed timing, format, linguistic, and production requirements.",
  ],
  [
    "What multimedia file formats does Stepes support?",
    "Stepes works with common video, audio, subtitle, caption, script, graphic, presentation, and production formats. Examples include MP4, MOV, AVI, WMV, MKV, WEBM, MPEG, MP3, WAV, SRT, VTT, ASS, SBV, TTML, SUB, DOCX, XLSX, and CSV. Custom, proprietary, and mixed production environments can be reviewed before the final workflow is confirmed.",
  ],
  [
    "Should we provide editable source files?",
    "Yes, whenever available. Editable production files make it easier to identify translatable components, replace visual text, adjust layouts, update animation, manage audio tracks, reuse existing content, and deliver maintainable multilingual versions. A rendered reference file is also valuable for visual and timing context.",
  ],
  [
    "How long does multimedia localization take?",
    "Turnaround depends on source duration and complexity, target languages, translation and review requirements, voice-production method, subtitle scope, graphic work, source-file condition, engineering requirements, and final delivery specifications. Stepes reviews the source assets and requested deliverables before confirming the project schedule.",
  ],
  [
    "How is multimedia localization priced?",
    "Pricing depends on the services required rather than media duration alone. Common factors include translatable word volume, transcription, languages, subtitle timing, human or AI voice production, voice casting, graphics localization, engineering, media editing, file preparation, review requirements, and final QA. Existing translations and reusable assets can also affect cost.",
  ],
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-panel">
      {faqItems.map(([question, answer], index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={question}>
            <button
              className="faq-button"
              type="button"
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{question}</span>
              <span className="faq-icon"><Icon name={open ? "minus" : "plus"} size={21} /></span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className={`faq-answer ${open ? "is-open" : ""}`}
              hidden={!open}
            >
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StepesMultimediaLocalization56() {
  return (
    <div className="mm56">
      <style>{`
        .mm56 {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --blush-strong: #F7DFE9;
          --pink-light: #F2A7C6;
          --ink: #111827;
          --body: #475569;
          --muted: #64748B;
          --line: #DDE3EA;
          --line-dark: #344054;
          --soft: #F7F8FA;
          --soft-2: #F2F4F7;
          --navy: #111827;
          --panel: #FFFFFF;
          color: var(--ink);
          background: #fff;
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }
        .mm56, .mm56 * { box-sizing: border-box; }
        .mm56 .hero-grid > *, .mm56 .overview-grid > *, .mm56 .governance-grid > *,
        .mm56 .update-grid > *, .mm56 .quote-grid > *, .mm56 .services-grid > *,
        .mm56 .related-row > *, .mm56 .format-col, .mm56 .enterprise-item { min-width: 0; }
        .mm56 h1, .mm56 h2, .mm56 h3, .mm56 p, .mm56 li,
        .mm56 .format-tags, .mm56 .editorial-link span { overflow-wrap: break-word; }
        .mm56 a { color: inherit; }
        .mm56 .shell { max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .mm56 .section { padding: 96px 0; }
        .mm56 .section-dense { padding: 80px 0; }
        .mm56 .soft { background: var(--soft); }
        .mm56 .blush { background: var(--blush); }
        .mm56 .dark { background: var(--navy); color: #fff; }
        .mm56 h1, .mm56 h2, .mm56 h3 { margin: 0; font-family: "Inter Tight", Inter, "Helvetica Neue", Arial, sans-serif; font-weight: 600; color: inherit; letter-spacing: -0.025em; }
        .mm56 h1 { font-size: 48px; line-height: 1.06; max-width: 680px; }
        .mm56 h2 { font-size: 36px; line-height: 1.12; }
        .mm56 h3 { font-size: 24px; line-height: 1.2; }
        .mm56 p { margin: 0; font-size: 16px; line-height: 1.7; color: var(--body); }
        .mm56 .body-lg { font-size: 18px; line-height: 1.65; }
        .mm56 .dark p { color: #CDD5DF; }
        .mm56 .eyebrow {
          display: block;
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .mm56 .dark .eyebrow { color: var(--pink-light); }
        .mm56 .section-head { max-width: 820px; margin-bottom: 48px; }
        .mm56 .section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
        .mm56 .section-head p { max-width: 800px; margin-top: 18px; }
        .mm56 .section-head.center p { margin-left: auto; margin-right: auto; }
        .mm56 .btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
        .mm56 .btn {
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .mm56 .btn:hover { transform: translateY(-1px); }
        .mm56 .btn:focus-visible, .mm56 .editorial-link:focus-visible, .mm56 .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .mm56 .btn-primary,
        .mm56 .btn-primary:link,
        .mm56 .btn-primary:visited,
        .mm56 .btn-primary:hover,
        .mm56 .btn-primary:active,
        .mm56 .btn-primary:focus,
        .mm56 .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .mm56 .btn-primary * { color: #fff !important; stroke: #fff !important; }
        .mm56 .btn-primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 26px rgba(193,29,99,.18); }
        .mm56 .btn-secondary { background: #fff; border-color: #D4DAE3; color: #1F2937; }
        .mm56 .btn-secondary:hover { border-color: #AAB4C2; background: #FAFBFC; }
        .mm56 .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 14px;
          min-height: 44px;
          color: var(--magenta);
          font-weight: 600;
          text-decoration: none;
        }
        .mm56 .editorial-link svg { transition: transform .18s ease; }
        .mm56 .editorial-link:hover svg { transform: translateX(3px); }
        .mm56 .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #FCFCFD 100%); }
        .mm56 .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 64px; align-items: center; }
        .mm56 .hero-copy p { max-width: 690px; margin-top: 24px; }
        .mm56 .hero-art { width: 100%; max-width: 590px; margin-left: auto; }
        .mm56 .hero-art svg { width: 100%; height: auto; display: block; }
        .mm56 .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .mm56 .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .mm56 .proof-item { padding: 26px 22px; min-height: 110px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid var(--line); }
        .mm56 .proof-item:first-child { padding-left: 0; }
        .mm56 .proof-item:last-child { border-right: 0; padding-right: 0; }
        .mm56 .proof-title { font-size: 18px; line-height: 1.25; font-weight: 600; color: var(--ink); }
        .mm56 .proof-copy { margin-top: 6px; font-size: 16px; line-height: 1.5; color: var(--body); }
        .mm56 .overview-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 78px; align-items: start; }
        .mm56 .overview-copy p { margin-top: 22px; max-width: 590px; }
        .mm56 .overview-points { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .mm56 .overview-point { padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-height: 205px; }
        .mm56 .overview-point h3 { font-size: 21px; }
        .mm56 .overview-point p { margin-top: 12px; }
        .mm56 .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; border-top: 1px solid var(--line); }
        .mm56 .service-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 30px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .mm56 .service-icon { width: 44px; height: 44px; border-radius: 14px; background: #F4F5F7; display: inline-flex; align-items: center; justify-content: center; color: #4B5565; }
        .mm56 .service-row h3 { font-size: 21px; }
        .mm56 .service-row p { margin-top: 10px; }
        .mm56 .layers-panel { border: 1px solid #2B3648; border-radius: 30px; padding: 44px; background: #151D2A; box-shadow: 0 22px 60px rgba(0,0,0,.16); }
        .mm56 .layers-map { display: grid; grid-template-columns: 1fr 1.1fr 1fr; gap: 24px; align-items: stretch; }
        .mm56 .layer-col { display: flex; flex-direction: column; justify-content: space-between; gap: 22px; }
        .mm56 .layer-item { padding: 22px 0; border-top: 1px solid #344054; }
        .mm56 .layer-item:first-child { border-top: 0; }
        .mm56 .layer-name { color: #fff; font-size: 19px; font-weight: 600; }
        .mm56 .layer-desc { margin-top: 7px; color: #AAB4C2 !important; }
        .mm56 .layer-hub { min-height: 360px; border-radius: 26px; background: #fff; color: var(--ink); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 36px; position: relative; overflow: hidden; }
        .mm56 .layer-hub::before, .mm56 .layer-hub::after { content:""; position:absolute; border:1px solid #E1E6ED; border-radius:50%; width:290px; height:290px; }
        .mm56 .layer-hub::after { width:210px; height:210px; }
        .mm56 .hub-screen { width: 180px; height: 118px; border-radius: 16px; border: 2px solid #7A8699; background: #F7F8FA; display:flex; align-items:center; justify-content:center; position:relative; z-index:1; }
        .mm56 .hub-screen::before { content:""; width:0; height:0; border-top:16px solid transparent; border-bottom:16px solid transparent; border-left:25px solid #C11D63; margin-left:6px; opacity:.78; }
        .mm56 .hub-wave { width: 205px; height: 36px; margin-top: 18px; position:relative; z-index:1; }
        .mm56 .hub-wave svg { width:100%; height:100%; }
        .mm56 .hub-title { margin-top: 16px; position:relative; z-index:1; font-weight:600; font-size:22px; }
        .mm56 .hub-sub { margin-top: 6px; position:relative; z-index:1; color:#667085 !important; max-width:260px; }
        .mm56 .layers-note { max-width: 900px; margin: 34px auto 0; text-align: center; }
        .mm56 .ai-panel { border: 1px solid #E7CAD6; border-radius: 30px; overflow: hidden; background: #fff; display: grid; grid-template-columns: 1fr 1fr; }
        .mm56 .ai-side { padding: 42px; }
        .mm56 .ai-side + .ai-side { border-left: 1px solid #E7CAD6; }
        .mm56 .ai-label { display:flex; align-items:center; gap:12px; margin-bottom:22px; }
        .mm56 .ai-label .icon-wrap { width:46px; height:46px; border-radius:14px; background:#FDF2F7; color:var(--magenta); display:flex; align-items:center; justify-content:center; }
        .mm56 .ai-side ul, .mm56 .check-grid, .mm56 .quote-lists { list-style:none; margin:0; padding:0; }
        .mm56 .ai-side ul { margin-top:22px; display:grid; gap:12px; }
        .mm56 .check-line { display:grid; grid-template-columns:22px 1fr; gap:10px; align-items:start; color:var(--body); font-size:16px; }
        .mm56 .check-line svg { color:var(--magenta); margin-top:2px; }
        .mm56 .ai-foot { padding: 26px 42px 34px; border: 1px solid #E7CAD6; border-top:0; border-radius: 0 0 30px 30px; background:#fff; }
        .mm56 .ai-foot p { max-width: 950px; }
        .mm56 .governance-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 70px; align-items: center; }
        .mm56 .governance-copy p { margin-top: 20px; max-width: 600px; }
        .mm56 .gov-map { display:grid; grid-template-columns:1fr 70px 1fr; align-items:stretch; border:1px solid var(--line); border-radius:28px; overflow:hidden; background:#fff; }
        .mm56 .gov-col { padding: 30px; display:flex; flex-direction:column; gap:0; }
        .mm56 .gov-item { padding:17px 0; border-bottom:1px solid var(--line); }
        .mm56 .gov-item:last-child { border-bottom:0; }
        .mm56 .gov-item strong { display:block; font-weight:600; color:var(--ink); }
        .mm56 .gov-item span { display:block; color:var(--body); margin-top:4px; font-size:16px; line-height:1.5; }
        .mm56 .gov-bridge { border-left:1px solid var(--line); border-right:1px solid var(--line); background:#FAFBFC; display:flex; align-items:center; justify-content:center; color:var(--magenta); }
        .mm56 .workflow-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; border-top:1px solid #CFD6DF; border-left:1px solid #CFD6DF; }
        .mm56 .workflow-step { padding:28px 26px 30px; border-right:1px solid #CFD6DF; border-bottom:1px solid #CFD6DF; min-height:250px; background:rgba(255,255,255,.45); }
        .mm56 .step-number { font-size:15px; letter-spacing:.09em; font-weight:600; color:var(--magenta); }
        .mm56 .workflow-step h3 { font-size:20px; margin-top:12px; }
        .mm56 .workflow-step p { margin-top:12px; }
        .mm56 .workflow-note { margin-top:32px; padding:24px 0 0; border-top:1px solid #CFD6DF; display:grid; grid-template-columns:220px 1fr; gap:28px; }
        .mm56 .workflow-note strong { font-size:18px; font-weight:600; color:var(--ink); }
        .mm56 .update-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:72px; align-items:center; }
        .mm56 .update-copy p { margin-top:20px; max-width:620px; }
        .mm56 .update-list { margin-top:28px; display:grid; gap:15px; }
        .mm56 .update-flow { border:1px solid var(--line); border-radius:30px; padding:34px; background:#FBFCFD; }
        .mm56 .flow-stage { display:grid; grid-template-columns:128px 46px 1fr; gap:14px; align-items:center; padding:17px 0; border-bottom:1px solid var(--line); }
        .mm56 .flow-stage:last-child { border-bottom:0; }
        .mm56 .flow-stage-title { font-weight:600; color:var(--ink); }
        .mm56 .flow-arrow { color:var(--magenta); display:flex; justify-content:center; }
        .mm56 .flow-copy { color:var(--body); font-size:16px; line-height:1.5; }
        .mm56 .use-case-grid { display:grid; grid-template-columns:1fr 1fr; column-gap:58px; border-top:1px solid var(--line); }
        .mm56 .use-row { display:grid; grid-template-columns:46px 1fr; gap:18px; padding:30px 0; border-bottom:1px solid var(--line); }
        .mm56 .use-row:last-child:nth-child(odd) { grid-column:1 / -1; width:calc(50% - 29px); max-width:none; margin-left:auto; margin-right:auto; }
        .mm56 .use-icon { width:42px; height:42px; border-radius:13px; background:#fff; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; color:#4B5565; }
        .mm56 .use-row h3 { font-size:21px; }
        .mm56 .use-row p { margin-top:9px; }
        .mm56 .formats-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .mm56 .format-col { padding:28px 26px; border-right:1px solid var(--line); }
        .mm56 .format-col:first-child { padding-left:0; }
        .mm56 .format-col:last-child { border-right:0; padding-right:0; }
        .mm56 .format-col h3 { font-size:20px; }
        .mm56 .format-tags { margin-top:12px; color:var(--magenta); font-weight:600; line-height:1.55; }
        .mm56 .format-col p { margin-top:12px; }
        .mm56 .quote-grid { display:grid; grid-template-columns:.78fr 1.22fr; gap:70px; align-items:start; }
        .mm56 .quote-copy p { margin-top:20px; max-width:560px; }
        .mm56 .quote-lists { display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid #E8CCD7; border-left:1px solid #E8CCD7; background:#fff; }
        .mm56 .quote-list { padding:26px; border-right:1px solid #E8CCD7; border-bottom:1px solid #E8CCD7; }
        .mm56 .quote-list h3 { font-size:19px; margin-bottom:14px; }
        .mm56 .quote-list ul { list-style:none; margin:0; padding:0; display:grid; gap:9px; }
        .mm56 .quote-list li { font-size:16px; color:var(--body); position:relative; padding-left:17px; }
        .mm56 .quote-list li::before { content:""; width:5px; height:5px; border-radius:50%; background:var(--magenta); position:absolute; left:0; top:.72em; }
        .mm56 .enterprise-grid { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--line); border-left:1px solid var(--line); }
        .mm56 .enterprise-item { padding:30px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); min-height:210px; }
        .mm56 .enterprise-item h3 { font-size:20px; }
        .mm56 .enterprise-item p { margin-top:10px; }
        .mm56 .related-list { border-top:1px solid var(--line); }
        .mm56 .related-row { display:grid; grid-template-columns:290px 1fr 210px; gap:34px; align-items:center; padding:26px 0; border-bottom:1px solid var(--line); }
        .mm56 .related-row h3 { font-size:20px; }
        .mm56 .related-row .editorial-link { justify-self:end; margin-top:0; }
        .mm56 .faq-panel { border:1px solid var(--line); border-radius:28px; overflow:hidden; background:#fff; }
        .mm56 .faq-item + .faq-item { border-top:1px solid var(--line); }
        .mm56 .faq-button { width:100%; min-height:74px; border:0; background:transparent; padding:20px 26px; text-align:left; display:flex; align-items:center; justify-content:space-between; gap:24px; font:inherit; font-size:18px; line-height:1.4; font-weight:600; color:var(--ink); cursor:pointer; }
        .mm56 .faq-icon { width:36px; height:36px; border-radius:50%; background:#F6F7F9; color:var(--magenta); display:flex; align-items:center; justify-content:center; flex:0 0 auto; }
        .mm56 .faq-answer { padding:0 80px 24px 26px; max-width:900px; }
        .mm56 .faq-answer p { font-size:16px; }
        .mm56 .final-cta { padding:84px 0; background:var(--blush); color:var(--ink); border-top:1px solid #EED6E0; }
        .mm56 .cta-grid { display:grid; grid-template-columns:minmax(0,1fr) 360px; gap:64px; align-items:center; }
        .mm56 .final-cta .eyebrow { margin-bottom:14px; }
        .mm56 .final-cta h2 { max-width:760px; }
        .mm56 .final-cta .cta-copy > p { color:var(--body); max-width:760px; margin-top:18px; font-size:18px; }
        .mm56 .cta-action { padding:30px; background:#fff; border:1px solid #E8CCD7; border-radius:24px; box-shadow:0 16px 40px rgba(122,21,66,.07); }
        .mm56 .cta-action h3 { font-size:20px; }
        .mm56 .cta-action p { margin-top:10px; color:var(--body); }
        .mm56 .cta-action .btn-row { margin-top:22px; display:block; }
        .mm56 .cta-action .btn-primary { width:100%; }
        .mm56 .cta-action .editorial-link { margin-top:14px; justify-content:center; width:100%; }

        @media (max-width: 1399px) {
          .mm56 .shell { padding-left:40px; padding-right:40px; }
          .mm56 .hero-grid { gap:46px; }
          .mm56 .overview-grid, .mm56 .governance-grid, .mm56 .update-grid, .mm56 .quote-grid { gap:50px; }
          .mm56 .services-grid { gap:0 42px; }
        }
        @media (max-width: 980px) {
          .mm56 .shell { padding-left:24px; padding-right:24px; }
          .mm56 .section { padding:84px 0; }
          .mm56 .section-dense { padding:72px 0; }
          .mm56 .hero { padding:88px 0 78px; }
          .mm56 h1 { font-size:42px; }
          .mm56 h2 { font-size:32px; }
          .mm56 h3 { font-size:22px; }
          .mm56 .hero-grid { grid-template-columns:1fr; gap:46px; }
          .mm56 .hero-copy { text-align:center; }
          .mm56 .hero-copy h1, .mm56 .hero-copy p { margin-left:auto; margin-right:auto; }
          .mm56 .hero-copy .btn-row { justify-content:center; }
          .mm56 .hero-art { margin:0 auto; max-width:620px; }
          .mm56 .proof-grid { grid-template-columns:repeat(2,1fr); }
          .mm56 .proof-item { border-bottom:1px solid var(--line); padding:24px; }
          .mm56 .proof-item:first-child { padding-left:24px; }
          .mm56 .proof-item:nth-child(2n) { border-right:0; }
          .mm56 .proof-item:last-child { grid-column:1 / -1; border-bottom:0; padding-right:24px; }
          .mm56 .overview-grid, .mm56 .governance-grid, .mm56 .update-grid, .mm56 .quote-grid { grid-template-columns:1fr; gap:40px; }
          .mm56 .overview-copy, .mm56 .governance-copy, .mm56 .update-copy, .mm56 .quote-copy { max-width:820px; margin:0 auto; }
          .mm56 .overview-copy .eyebrow, .mm56 .overview-copy h2, .mm56 .governance-copy .eyebrow, .mm56 .governance-copy h2, .mm56 .update-copy .eyebrow, .mm56 .update-copy h2, .mm56 .quote-copy .eyebrow, .mm56 .quote-copy h2 { text-align:center; }
          .mm56 .overview-copy > p, .mm56 .governance-copy > p, .mm56 .update-copy > p, .mm56 .quote-copy > p { margin-left:auto; margin-right:auto; }
          .mm56 .overview-copy > .body-lg, .mm56 .governance-copy > .body-lg, .mm56 .update-copy > .body-lg, .mm56 .quote-copy > .body-lg { text-align:center; }
          .mm56 .quote-copy > .editorial-link { width:max-content; max-width:100%; margin-left:auto; margin-right:auto; }
          .mm56 .services-grid { grid-template-columns:1fr; gap:0; }
          .mm56 .layers-panel { padding:34px; }
          .mm56 .layers-map { grid-template-columns:1fr; }
          .mm56 .layer-hub { order:-1; min-height:320px; }
          .mm56 .layer-col { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0 24px; }
          .mm56 .layer-item { border-top:1px solid #344054 !important; padding:22px 0; }
          .mm56 .ai-panel { grid-template-columns:1fr; }
          .mm56 .ai-side + .ai-side { border-left:0; border-top:1px solid #E7CAD6; }
          .mm56 .gov-map { grid-template-columns:1fr 56px 1fr; }
          .mm56 .workflow-grid { grid-template-columns:repeat(2,1fr); }
          .mm56 .workflow-note { grid-template-columns:1fr; gap:8px; }
          .mm56 .use-case-grid { grid-template-columns:1fr; }
          .mm56 .use-row:last-child:nth-child(odd) { grid-column:auto; width:auto; max-width:none; margin-left:0; margin-right:0; }
          .mm56 .formats-grid { grid-template-columns:1fr 1fr; }
          .mm56 .format-col { border-bottom:1px solid var(--line); }
          .mm56 .format-col:nth-child(2) { border-right:0; }
          .mm56 .format-col:nth-child(3), .mm56 .format-col:nth-child(4) { border-bottom:0; }
          .mm56 .format-col:first-child { padding-left:26px; }
          .mm56 .format-col:last-child { padding-right:26px; }
          .mm56 .quote-lists { grid-template-columns:1fr 1fr; }
          .mm56 .quote-list:last-child { grid-column:1 / -1; }
          .mm56 .enterprise-grid { grid-template-columns:1fr 1fr; }
          .mm56 .related-row { grid-template-columns:220px 1fr; }
          .mm56 .related-row .editorial-link { grid-column:2; justify-self:start; margin-top:0; }
          .mm56 .cta-grid { grid-template-columns:1fr; text-align:center; gap:34px; }
          .mm56 .final-cta h2, .mm56 .final-cta .cta-copy > p { margin-left:auto; margin-right:auto; }
          .mm56 .cta-action { width:100%; max-width:560px; margin:0 auto; text-align:left; }
          .mm56 .cta-action .editorial-link { justify-content:center; }
        }
        @media (max-width: 640px) {
          .mm56 .shell { padding-left:20px; padding-right:20px; }
          .mm56 .section { padding:68px 0; }
          .mm56 .section-dense { padding:64px 0; }
          .mm56 .hero { padding:72px 0 64px; }
          .mm56 h1 { font-size:38px; }
          .mm56 h2 { font-size:30px; }
          .mm56 h3 { font-size:20px; }
          .mm56 .body-lg { font-size:18px; }
          .mm56 .section-head { margin-bottom:34px; }
          .mm56 .section-head.center, .mm56 .section-head.center p { text-align:center; }
          .mm56 .btn-row { flex-direction:column; width:100%; }
          .mm56 .btn { width:100%; min-height:50px; }
          .mm56 .proof-grid { grid-template-columns:1fr; }
          .mm56 .proof-item, .mm56 .proof-item:first-child, .mm56 .proof-item:last-child { grid-column:auto; border-right:0; border-bottom:1px solid var(--line); padding:22px 0; min-height:0; }
          .mm56 .proof-item:last-child { border-bottom:0; }
          .mm56 .overview-copy .eyebrow, .mm56 .overview-copy h2,
          .mm56 .governance-copy .eyebrow, .mm56 .governance-copy h2,
          .mm56 .update-copy .eyebrow, .mm56 .update-copy h2,
          .mm56 .quote-copy .eyebrow, .mm56 .quote-copy h2 { text-align:center; }
          .mm56 .overview-points { grid-template-columns:1fr; border-left:0; }
          .mm56 .overview-point { border-left:0; border-right:0; padding:24px 0; min-height:0; }
          .mm56 .service-row { grid-template-columns:42px minmax(0,1fr); gap:15px; padding:26px 0; }
          .mm56 .service-icon { width:40px; height:40px; border-radius:12px; }
          .mm56 .layers-panel { padding:26px 20px; border-radius:24px; }
          .mm56 .layer-hub { min-height:280px; padding:24px; }
          .mm56 .layer-col { grid-template-columns:1fr; gap:0; }
          .mm56 .layers-note { text-align:left; }
          .mm56 .ai-side { padding:28px 22px; }
          .mm56 .ai-foot { padding:22px; }
          .mm56 .gov-map { grid-template-columns:1fr; border-radius:22px; }
          .mm56 .gov-bridge { min-height:54px; border-left:0; border-right:0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
          .mm56 .gov-bridge svg { transform:rotate(90deg); }
          .mm56 .gov-col { padding:24px; }
          .mm56 .workflow-grid { grid-template-columns:1fr; border-left:0; }
          .mm56 .workflow-step { min-height:0; border-left:0; border-right:0; padding:26px 0; }
          .mm56 .workflow-note { padding-top:24px; }
          .mm56 .update-list { margin-top:24px; }
          .mm56 .update-flow { padding:22px; border-radius:24px; }
          .mm56 .flow-stage { grid-template-columns:1fr; gap:8px; padding:18px 0; }
          .mm56 .flow-arrow { justify-content:flex-start; }
          .mm56 .flow-arrow svg { transform:rotate(90deg); }
          .mm56 .use-row { grid-template-columns:42px minmax(0,1fr); gap:15px; padding:26px 0; }
          .mm56 .use-row:last-child:nth-child(odd) { width:auto; margin-left:0; margin-right:0; }
          .mm56 .editorial-link { max-width:100%; }
          .mm56 .formats-grid { grid-template-columns:1fr; }
          .mm56 .format-col, .mm56 .format-col:first-child, .mm56 .format-col:last-child { border-right:0; border-bottom:1px solid var(--line); padding:24px 0; }
          .mm56 .format-col:last-child { border-bottom:0; }
          .mm56 .quote-lists { grid-template-columns:1fr; border-left:0; }
          .mm56 .quote-list, .mm56 .quote-list:last-child { grid-column:auto; border-left:0; border-right:0; padding:24px 0; }
          .mm56 .enterprise-grid { grid-template-columns:1fr; border-left:0; }
          .mm56 .enterprise-item { min-height:0; border-left:0; border-right:0; padding:26px 0; }
          .mm56 .related-row { grid-template-columns:1fr; gap:9px; align-items:start; padding:24px 0; }
          .mm56 .related-row .editorial-link { grid-column:auto; justify-self:start; width:auto; max-width:100%; margin-top:3px; }
          .mm56 .faq-panel { border-radius:22px; }
          .mm56 .faq-button { min-height:68px; padding:18px 18px; font-size:17px; align-items:flex-start; }
          .mm56 .faq-answer { padding:0 18px 20px; }
          .mm56 .final-cta { padding:68px 0; }
          .mm56 .cta-action { padding:24px 20px; border-radius:22px; }
          .mm56 .cta-action .btn-row { width:100%; }
        }
        @media (max-width: 360px) {
          .mm56 .shell { padding-left:20px; padding-right:20px; }
          .mm56 h1 { font-size:36px; }
          .mm56 .layers-panel, .mm56 .update-flow { padding-left:18px; padding-right:18px; }
          .mm56 .faq-button { gap:14px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Multilingual Production</span>
              <h1>Multimedia Localization Services</h1>
              <p className="body-lg">
                Localize every layer of your global media. Stepes combines professional multimedia translation with voiceover, subtitles, captions, graphics localization, audio-video production, engineering, and in-context quality assurance to deliver complete multilingual media experiences.
              </p>
              <p className="body-lg">
                From product demonstrations and corporate communications to training, presentations, webinars, and interactive content, we keep language, voice, visuals, timing, and production working together across every target market.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href={URLS.quote}>Get a Quote <Icon name="arrow" size={18} /></a>
                <a className="btn btn-secondary" href={URLS.contactSales}>Talk to an Expert</a>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className="proof-band" aria-label="Multimedia localization capabilities">
          <div className="shell proof-grid">
            <div className="proof-item"><div className="proof-title">100+ Languages</div><div className="proof-copy">Professional support for major global languages and regional variants.</div></div>
            <div className="proof-item"><div className="proof-title">Human + AI</div><div className="proof-copy">Apply the right balance of AI-enabled production and professional expertise.</div></div>
            <div className="proof-item"><div className="proof-title">Voice + Text + Visuals</div><div className="proof-copy">Localize the interconnected content audiences hear, read, and see.</div></div>
            <div className="proof-item"><div className="proof-title">In-Context QA</div><div className="proof-copy">Review multilingual content within the finished media experience.</div></div>
            <div className="proof-item"><div className="proof-title">Continuous Updates</div><div className="proof-copy">Reuse approved content as multimedia assets evolve.</div></div>
          </div>
        </section>

        <section className="section">
          <div className="shell overview-grid">
            <div className="overview-copy">
              <h2>Multimedia Content Is Made of Connected Parts</h2>
              <p className="body-lg">
                Multimedia localization adapts the complete combination of language, audio, visuals, timing, graphics, and media production for audiences in different languages and markets.
              </p>
              <p>
                A single multimedia asset can contain far more translatable content than its spoken script. Narration may need to match subtitles. Product terminology shown in a graphic must agree with what the audience hears. Longer translations can affect animation timing, while updated software screens may require corresponding changes to voice, captions, callouts, and demonstrations.
              </p>
              <p>
                Stepes brings language and multimedia production into one coordinated workflow so the components your audience sees and hears remain accurate, consistent, synchronized, and ready for global delivery.
              </p>
            </div>
            <div className="overview-points">
              <div className="overview-point"><h3>Spoken Content</h3><p>Narration, dialogue, interviews, presentations, product explanations, and other recorded speech.</p></div>
              <div className="overview-point"><h3>Visible Language</h3><p>Subtitles, captions, titles, labels, lower thirds, interface text, callouts, and animated copy.</p></div>
              <div className="overview-point"><h3>Visual Assets</h3><p>Graphics, diagrams, screenshots, illustrations, presentation content, and motion elements.</p></div>
              <div className="overview-point"><h3>Media Production</h3><p>Timing, synchronization, audio editing, video engineering, reintegration, rendering, and multilingual output.</p></div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <div className="section-head center">
              <h2>Complete Multimedia Localization Services</h2>
              <p className="body-lg">Choose individual capabilities or bring the full project into one connected multilingual production workflow.</p>
            </div>
            <div className="services-grid">
              {services.map((item) => (
                <article className="service-row" key={item.title}>
                  <div className="service-icon"><Icon name={item.icon} size={23} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.link ? <ArrowLink href={item.link[0]}>{item.link[1]}</ArrowLink> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="shell">
            <div className="section-head center">
              <h2>One Experience. Multiple Media Layers.</h2>
              <p className="body-lg">Each media layer has its own localization requirements, but audiences experience them together. Stepes coordinates them so every language version communicates as one coherent experience.</p>
            </div>
            <div className="layers-panel">
              <div className="layers-map">
                <div className="layer-col">
                  {layers.slice(0,3).map(([name, desc]) => <div className="layer-item" key={name}><div className="layer-name">{name}</div><p className="layer-desc">{desc}</p></div>)}
                </div>
                <div className="layer-hub">
                  <div className="hub-screen" />
                  <div className="hub-wave">
                    <svg viewBox="0 0 205 36" fill="none"><path d="M2 18h12l6-10 9 20 9-16 9 12 8-19 9 27 10-17 8 6 10-13 8 19 10-12 11 7 9-10 10 8 12-5 10 3h12" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round"/></svg>
                  </div>
                  <div className="hub-title">Multilingual Media Experience</div>
                  <p className="hub-sub">Language, voice, visuals, interaction, and production stay connected.</p>
                </div>
                <div className="layer-col">
                  {layers.slice(3).map(([name, desc]) => <div className="layer-item" key={name}><div className="layer-name">{name}</div><p className="layer-desc">{desc}</p></div>)}
                </div>
              </div>
              <p className="layers-note body-lg">A revised product term can appear in narration, subtitles, an interface screenshot, an animated callout, and a training slide. Managing these components together helps reduce conflicting translations, production rework, and inconsistent audience experiences.</p>
            </div>
          </div>
        </section>

        <section className="section blush">
          <div className="shell">
            <div className="section-head center">
              <h2>Use AI for Speed. Keep Experts in Control.</h2>
              <p className="body-lg">AI is transforming multimedia production—from transcription and translation to subtitle generation and synthetic voice. The greatest value comes from using these technologies selectively, with the right quality controls for the content and audience.</p>
            </div>
            <div className="ai-panel">
              <div className="ai-side">
                <div className="ai-label"><span className="icon-wrap"><Icon name="ai" /></span><h3>AI-Enabled Production</h3></div>
                <p>AI and automation can accelerate high-volume and repetitive production steps while preserving a structured path to professional review.</p>
                <ul>
                  {['Transcription','Initial translation','Terminology extraction','Subtitle generation and alignment','Content analysis','Synthetic voice production','Change detection','Automated quality checks'].map((x)=><li className="check-line" key={x}><Icon name="check" size={19}/><span>{x}</span></li>)}
                </ul>
              </div>
              <div className="ai-side">
                <div className="ai-label"><span className="icon-wrap"><Icon name="human" /></span><h3>Professional Human Expertise</h3></div>
                <p>Experts remain essential where meaning, audience expectations, production judgment, and release quality matter.</p>
                <ul>
                  {['Linguistic meaning and nuance','Brand voice and cultural fit','Technical terminology','Specialized subject matter','Pronunciation and spoken fluency','Timing and pacing decisions','Visual and contextual judgment','Final release quality'].map((x)=><li className="check-line" key={x}><Icon name="check" size={19}/><span>{x}</span></li>)}
                </ul>
              </div>
            </div>
            <div className="ai-foot">
              <p className="body-lg">There is no single production model that is right for every multimedia asset. Stepes configures the workflow around your quality requirements, audience, risk, volume, update frequency, and production goals.</p>
              <ArrowLink href={URLS.aiTranslation}>Explore AI Translation Services</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell governance-grid">
            <div className="governance-copy">
              <span className="eyebrow">Language Governance</span>
              <h2>One Vocabulary Across Every Media Layer</h2>
              <p className="body-lg">Product names, technical terms, brand language, feature names, and specialized terminology should not change simply because the audience encounters them in a different medium.</p>
              <p>Stepes helps keep multilingual terminology connected across narration, subtitles, graphics, software screens, presentations, video, and interactive content so approved language decisions can carry forward as your media library grows.</p>
            </div>
            <div className="gov-map" aria-label="Language governance flows into multimedia channels">
              <div className="gov-col">
                <div className="gov-item"><strong>Translation Memory</strong><span>Reuse approved translations across related assets and versions.</span></div>
                <div className="gov-item"><strong>Terminology Management</strong><span>Apply approved product, technical, regulatory, and brand language.</span></div>
                <div className="gov-item"><strong>Style Guidance</strong><span>Maintain tone, capitalization, naming conventions, and language preferences.</span></div>
                <div className="gov-item"><strong>Pronunciation Guidance</strong><span>Define preferred pronunciation for products, names, abbreviations, and specialized terms.</span></div>
                <div className="gov-item"><strong>Reviewer Feedback</strong><span>Capture approved linguistic decisions for consistent future reuse.</span></div>
              </div>
              <div className="gov-bridge"><Icon name="arrow" size={26}/></div>
              <div className="gov-col">
                <div className="gov-item"><strong>Voice</strong><span>Narration and dubbing</span></div>
                <div className="gov-item"><strong>Captions</strong><span>Subtitles and accessible media text</span></div>
                <div className="gov-item"><strong>Graphics</strong><span>Labels, callouts, diagrams, and animation</span></div>
                <div className="gov-item"><strong>Video</strong><span>Product, marketing, corporate, and training media</span></div>
                <div className="gov-item"><strong>Presentations & Interactive Media</strong><span>Slides, demonstrations, training, and digital experiences</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <div className="section-head">
              <span className="eyebrow">Connected Production Workflow</span>
              <h2>From Source Assets to Production-Ready Multilingual Media</h2>
              <p className="body-lg">Stepes connects translation, multimedia production, engineering, and quality assurance through a workflow designed around the actual source files and final deliverables.</p>
            </div>
            <div className="workflow-grid">
              {workflow.map(([title, body], index) => (
                <article className="workflow-step" key={title}>
                  <div className="step-number">{String(index + 1).padStart(2,'0')}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="workflow-note">
              <strong>Test the experience, not just the translation.</strong>
              <p>A translation can be correct in a spreadsheet and still fail after production. In-context QA helps identify subtitle timing, text overflow, pronunciation, audio alignment, outdated screenshots, missing translations, right-to-left presentation, and other issues before localized content reaches the audience.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell update-grid">
            <div className="update-copy">
              <span className="eyebrow">Continuous Multimedia Localization</span>
              <h2>When the Source Changes, Update What Changed</h2>
              <p className="body-lg">Multimedia localization does not end after the first international release. Product demonstrations evolve, training is revised, interfaces change, campaigns receive new messaging, and new languages are added.</p>
              <p>Stepes supports continuous multimedia localization by identifying what changed, reusing what remains approved, and updating the affected language and media components instead of recreating an entire multilingual asset from the beginning.</p>
              <div className="update-list">
                {[
                  'Reuse approved translation memory, terminology, scripts, subtitles, and prior multilingual content.',
                  'Preserve existing audio, graphics, captions, and media components when the source remains unchanged and reuse is technically appropriate.',
                  'Update only the affected narration, subtitles, screenshots, animation text, presentations, product demonstrations, or regulated language.',
                  'Focus version-level QA on revised content and its surrounding context.'
                ].map((x)=><div className="check-line" key={x}><Icon name="check" size={19}/><span>{x}</span></div>)}
              </div>
            </div>
            <div className="update-flow" aria-label="Continuous multimedia update workflow">
              <div className="flow-stage"><div className="flow-stage-title">Source V1</div><div className="flow-arrow"><Icon name="arrow" size={21}/></div><div className="flow-copy">Original multilingual media release and approved language assets</div></div>
              <div className="flow-stage"><div className="flow-stage-title">Change Detection</div><div className="flow-arrow"><Icon name="arrow" size={21}/></div><div className="flow-copy">Identify revised language and every media component affected by the change</div></div>
              <div className="flow-stage"><div className="flow-stage-title">Reuse + Update</div><div className="flow-arrow"><Icon name="arrow" size={21}/></div><div className="flow-copy">Preserve approved content and produce only the changed language and media assets</div></div>
              <div className="flow-stage"><div className="flow-stage-title">Version QA</div><div className="flow-arrow"><Icon name="arrow" size={21}/></div><div className="flow-copy">Review revised components in context and confirm surrounding continuity</div></div>
              <div className="flow-stage"><div className="flow-stage-title">Multilingual V2</div><div className="flow-arrow"><Icon name="check" size={21}/></div><div className="flow-copy">Current language versions ready for release without rebuilding unchanged work</div></div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <div className="section-head center">
              <span className="eyebrow">Global Communication</span>
              <h2>Localize Multimedia Across the Customer and Employee Journey</h2>
              <p className="body-lg">Support multilingual media across customer engagement, product adoption, workforce training, corporate communication, and specialized industry needs.</p>
            </div>
            <div className="use-case-grid">
              {useCases.map((item)=>(
                <article className="use-row" key={item.title}>
                  <div className="use-icon"><Icon name={item.icon} size={22}/></div>
                  <div><h3>{item.title}</h3><p>{item.body}</p>{item.link ? <ArrowLink href={item.link[0]}>{item.link[1]}</ArrowLink> : null}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dense">
          <div className="shell">
            <div className="section-head">
              <span className="eyebrow">Multimedia File Support</span>
              <h2>Work With the Multimedia Assets You Already Use</h2>
              <p className="body-lg">Multimedia projects often arrive as packages rather than individual files. Stepes works with common video, audio, subtitle, script, graphic, presentation, and production formats and can review custom or mixed-content environments when required.</p>
            </div>
            <div className="formats-grid">
              <div className="format-col"><h3>Video and Motion</h3><div className="format-tags">MP4 · MOV · AVI · WMV · MKV · WEBM · MPEG</div><p>Coordinate transcription, translation, subtitles, captions, voiceover, on-screen text, and final media production.</p></div>
              <div className="format-col"><h3>Audio Content</h3><div className="format-tags">MP3 · WAV · agreed audio formats</div><p>Support narration, interviews, presentations, training audio, recorded instruction, and other spoken content.</p></div>
              <div className="format-col"><h3>Subtitles and Captions</h3><div className="format-tags">SRT · VTT · ASS · SBV · TTML · SUB</div><p>Preserve timing, segmentation, reading considerations, speaker information, and synchronization.</p></div>
              <div className="format-col"><h3>Time-Coded Scripts</h3><div className="format-tags">DOCX · XLSX · CSV · agreed structured exports</div><p>Protect time codes and speaker information through translation, review, subtitle, and voice-production workflows.</p></div>
            </div>
            <ArrowLink href={URLS.fileFormats}>Explore File Format Support</ArrowLink>
          </div>
        </section>

        <section className="section blush">
          <div className="shell quote-grid">
            <div className="quote-copy">
              <span className="eyebrow">Project Planning</span>
              <h2>What to Send Us for an Accurate Multimedia Quote</h2>
              <p className="body-lg">The right source materials help Stepes determine the translatable content, production requirements, linguistic workflow, engineering scope, schedule, and final deliverables.</p>
              <p>Do not worry if every source component is not available. Send the representative assets you have, and Stepes can review the package to determine the most practical localization approach.</p>
              <ArrowLink href={URLS.contactSales}>Discuss Your Multimedia Project</ArrowLink>
            </div>
            <div className="quote-lists">
              <div className="quote-list"><h3>Source Media</h3><ul><li>Source multimedia files</li><li>Editable video or production assets</li><li>Scripts or transcripts</li><li>Subtitle or caption files</li><li>Separate audio tracks</li><li>Editable graphics and presentations</li><li>Fonts and linked assets</li></ul></div>
              <div className="quote-list"><h3>Language Assets</h3><ul><li>Existing translations</li><li>Translation memory</li><li>Terminology and glossaries</li><li>Pronunciation guidance</li><li>Style or brand guidance</li><li>Reviewer requirements</li></ul></div>
              <div className="quote-list"><h3>Delivery Requirements</h3><ul><li>Target languages and locales</li><li>Human or AI voice requirements</li><li>Subtitle or caption requirements</li><li>Final delivery formats</li><li>Publishing channels</li><li>Expected launch date</li></ul></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center">
              <h2>Multimedia Localization Built for Enterprise Content</h2>
              <p className="body-lg">Global multimedia programs need a repeatable way to coordinate language, production, quality, reuse, and updates as content expands across markets.</p>
            </div>
            <div className="enterprise-grid">
              <div className="enterprise-item"><h3>Complete Multimedia Production Expertise</h3><p>Bring translation, voice, subtitles, graphics localization, multimedia engineering, and QA into one coordinated workflow.</p></div>
              <div className="enterprise-item"><h3>Human + AI Flexibility</h3><p>Apply professional translation, AI-assisted production, synthetic or human voice, automation, and targeted review according to content and risk.</p></div>
              <div className="enterprise-item"><h3>Consistent Language Governance</h3><p>Use translation memory, terminology, style guidance, pronunciation preferences, and previous approvals across media.</p></div>
              <div className="enterprise-item"><h3>In-Context Quality Assurance</h3><p>Review language inside the audio, visual, interactive, or rendered experience—not only within extracted text.</p></div>
              <div className="enterprise-item"><h3>Specialized Linguistic Expertise</h3><p>Match language professionals to technical, medical, legal, financial, marketing, software, training, and other specialized multimedia.</p></div>
              <div className="enterprise-item"><h3>Scalable Global Workflows</h3><p>Support a single asset, coordinated multilingual launch, recurring content stream, or evolving global media library in 100+ languages.</p></div>
            </div>
          </div>
        </section>

        <section className="section-dense soft">
          <div className="shell">
            <div className="section-head">
              <h2>Explore Specialized Multimedia Services</h2>
              <p className="body-lg">Use Multimedia Localization as the connected production layer, then go deeper with specialized Stepes services when a project centers on a specific media type.</p>
            </div>
            <div className="related-list">
              <div className="related-row"><h3>Video Translation Services</h3><p>Complete video localization including scripts, subtitles, captions, human and AI voice, on-screen graphics, engineering, and in-context video QA.</p><ArrowLink href={URLS.video}>Explore Video Translation</ArrowLink></div>
              <div className="related-row"><h3>Voice Over Services</h3><p>Multilingual narration with professional human voice talent or scalable AI voice options, supported by pronunciation, timing, editing, and QA.</p><ArrowLink href={URLS.voiceover}>Explore Voice Over Services</ArrowLink></div>
              <div className="related-row"><h3>eLearning Translation & Localization</h3><p>Complete course localization across content, narration, video, graphics, interactions, assessments, authoring environments, SCORM packages, and LMS-ready delivery.</p><ArrowLink href={URLS.elearning}>Explore eLearning Localization</ArrowLink></div>
              <div className="related-row"><h3>Multilingual Desktop Publishing</h3><p>Translate and format presentation, publishing, graphic, and visually complex content with language-aware typography, reflow, visual adjustment, and production.</p><ArrowLink href={URLS.dtp}>Explore Desktop Publishing</ArrowLink></div>
              <div className="related-row"><h3>Transcription Services</h3><p>Turn audio and video content into accurate transcripts and production-ready source scripts for translation, subtitling, voiceover, review, and documentation.</p><ArrowLink href={URLS.transcription}>Explore Transcription Services</ArrowLink></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head center">
              <h2>Multimedia Localization Services FAQs</h2>
              <p className="body-lg">Practical answers about multimedia scope, subtitles, voice, AI, terminology, files, quality, accessibility, updates, timelines, and pricing.</p>
            </div>
            <FAQ />
          </div>
        </section>

        <section className="final-cta">
          <div className="shell cta-grid">
            <div className="cta-copy">
              <span className="eyebrow">Start Your Multimedia Project</span>
              <h2>Bring Your Global Multimedia Together</h2>
              <p>Your audience experiences voice, language, visuals, timing, and message as one piece of content. Stepes brings translation, AI-enabled workflows, multilingual voice, subtitles, graphics localization, engineering, terminology management, and in-context QA together so every language version works as one coherent experience.</p>
            </div>
            <div className="cta-action">
              <h3>Start with the assets you have.</h3>
              <p>Share representative files, target languages, and production requirements. We’ll help define the right multimedia localization workflow.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={URLS.quote}>Get a Quote <Icon name="arrow" size={18}/></a>
              </div>
              <ArrowLink href={URLS.contactSales}>Talk to an Expert</ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
