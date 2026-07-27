import React from "react";

const ArrowIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <span className="faq-plus" aria-hidden="true">
    <span />
    <span />
  </span>
);

const Icon = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    film: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" {...strokeProps} />
        <path d="M7 5v14M17 5v14M3.5 9h3.5M3.5 15h3.5M17 9h3.5M17 15h3.5" {...strokeProps} />
      </>
    ),
    stream: (
      <>
        <rect x="3.5" y="4" width="17" height="12.5" rx="2" {...strokeProps} />
        <path d="m10 8 5 2.25L10 12.5V8Z" {...strokeProps} />
        <path d="M8 20h8M12 16.5V20" {...strokeProps} />
      </>
    ),
    broadcast: (
      <>
        <path d="M5.5 9a9 9 0 0 1 13 0M8.5 12a5 5 0 0 1 7 0" {...strokeProps} />
        <circle cx="12" cy="15" r="1.6" {...strokeProps} />
        <path d="M12 16.6V21" {...strokeProps} />
      </>
    ),
    production: (
      <>
        <path d="M4 8h16v11H4zM4 8l4-4 3 4 4-4 3 4" {...strokeProps} />
        <path d="M8 13h8M8 16h5" {...strokeProps} />
      </>
    ),
    publish: (
      <>
        <rect x="4" y="3.5" width="16" height="17" rx="2" {...strokeProps} />
        <path d="M7.5 8h9M7.5 12h9M7.5 16h5" {...strokeProps} />
      </>
    ),
    campaign: (
      <>
        <path d="m4 13 9-4v10l-9-4v-2Z" {...strokeProps} />
        <path d="M13 11h3.5a3.5 3.5 0 0 0 0-7H15" {...strokeProps} />
        <path d="m6.5 15.5 1.2 4" {...strokeProps} />
      </>
    ),
    platform: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" {...strokeProps} />
        <path d="M4 9h16M9 9v11" {...strokeProps} />
        <path d="M12.5 13h4M12.5 16h3" {...strokeProps} />
      </>
    ),
    subtitles: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" {...strokeProps} />
        <path d="M6.5 13.5h4M13.5 13.5h4M6.5 16.5h6M14.5 16.5h3" {...strokeProps} />
      </>
    ),
    audio: (
      <>
        <path d="M4 13h3l4 4V7l-4 4H4v2Z" {...strokeProps} />
        <path d="M15 9.5a4 4 0 0 1 0 5M17.5 7a7.5 7.5 0 0 1 0 10" {...strokeProps} />
      </>
    ),
    metadata: (
      <>
        <path d="M4 6.5h8l8 8-5.5 5.5-8-8V6.5Z" {...strokeProps} />
        <circle cx="8.5" cy="9" r="1.2" {...strokeProps} />
      </>
    ),
    translate: (
      <>
        <path d="M4 5h8M8 5v2M5.5 9.5c1.2 2.2 3.1 3.9 5.5 5M10.5 8.5c-1.2 3.1-3.3 5.5-6 7" {...strokeProps} />
        <path d="m14 18 3-8 3 8M15.2 15h3.6" {...strokeProps} />
      </>
    ),
    screen: (
      <>
        <rect x="3.5" y="4.5" width="17" height="12" rx="2" {...strokeProps} />
        <path d="M8 20h8M12 16.5V20" {...strokeProps} />
      </>
    ),
    ai: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" {...strokeProps} />
        <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" {...strokeProps} />
      </>
    ),
    human: (
      <>
        <circle cx="12" cy="8" r="3" {...strokeProps} />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" {...strokeProps} />
      </>
    ),
    quality: (
      <>
        <path d="m12 3 7 3v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" {...strokeProps} />
        <path d="m8.5 12 2.2 2.2 4.8-5" {...strokeProps} />
      </>
    ),
    secure: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" {...strokeProps} />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" {...strokeProps} />
      </>
    ),
    workflow: (
      <>
        <circle cx="5" cy="7" r="2" {...strokeProps} />
        <circle cx="19" cy="7" r="2" {...strokeProps} />
        <circle cx="12" cy="18" r="2" {...strokeProps} />
        <path d="M7 7h10M6.2 8.6l4.6 7.8M17.8 8.6l-4.6 7.8" {...strokeProps} />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" {...strokeProps} />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" {...strokeProps} />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.globe}</svg>;
};

const HeroArtwork = () => (
  <div className="hero-art" aria-hidden="true">
    <svg viewBox="0 0 600 520" focusable="false">
      <defs>
        <linearGradient id="softBlush" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FDF2F7" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      <circle cx="325" cy="250" r="218" fill="url(#softBlush)" />
      <circle cx="325" cy="250" r="174" fill="none" stroke="#E5B9CB" strokeWidth="1.6" strokeDasharray="4 10" />

      <g fill="none" stroke="#6B7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="118" y="102" width="360" height="248" rx="24" fill="#FFFFFF" stroke="#4B5563" />
        <path d="M118 154h360" stroke="#CBD0D8" />
        <circle cx="145" cy="128" r="5" fill="#C11D63" stroke="none" />
        <circle cx="165" cy="128" r="5" fill="#D7DCE3" stroke="none" />
        <circle cx="185" cy="128" r="5" fill="#D7DCE3" stroke="none" />

        <rect x="146" y="179" width="181" height="115" rx="14" fill="#FAFAFB" stroke="#7B8491" />
        <path d="m219 215 37 21-37 21v-42Z" stroke="#C11D63" strokeWidth="2.6" />
        <path d="M161 311h149" stroke="#AAB2BE" />
        <path d="M161 323h108" stroke="#AAB2BE" />

        <path d="M353 187h91" stroke="#515A68" />
        <path d="M353 204h68" stroke="#AAB2BE" />
        <path d="M353 232h42l9-14 10 29 11-19 8 8h20" stroke="#C11D63" strokeWidth="2.4" />
        <path d="M353 267h91" stroke="#AAB2BE" />
        <path d="M353 283h74" stroke="#AAB2BE" />
        <rect x="353" y="307" width="92" height="22" rx="11" fill="#FDF2F7" stroke="#E7B6CA" />
        <path d="M370 318h58" stroke="#9F1D55" />

        <path d="M98 376h400" stroke="#D5DAE1" />
        <path d="M188 377v47M408 377v47" stroke="#D5DAE1" />

        <rect x="132" y="399" width="112" height="76" rx="16" fill="#FFFFFF" stroke="#7B8491" />
        <path d="M153 423h69M153 440h47M153 457h58" stroke="#9BA3AE" />

        <rect x="268" y="399" width="112" height="76" rx="16" fill="#FFFFFF" stroke="#7B8491" />
        <path d="M291 441h10l8-17 11 35 10-27 9 9h18" stroke="#C11D63" strokeWidth="2.2" />

        <rect x="404" y="399" width="112" height="76" rx="16" fill="#FFFFFF" stroke="#7B8491" />
        <path d="M432 421h56M432 438h56M432 455h38" stroke="#9BA3AE" />

        <path d="M74 195c-25 19-38 46-38 80 0 46 25 82 71 103" stroke="#C11D63" strokeWidth="2" />
        <path d="m98 365 12 14-18 4" stroke="#C11D63" strokeWidth="2" />

        <path d="M493 151c37 18 61 51 68 98 6 43-7 79-40 108" stroke="#7B8491" />
        <path d="m524 337-3 20 19-5" stroke="#7B8491" />
      </g>

      <g fill="#FFFFFF" stroke="#C11D63" strokeWidth="2">
        <circle cx="79" cy="175" r="23" />
        <circle cx="516" cy="130" r="23" />
        <circle cx="548" cy="375" r="23" />
      </g>
      <g fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M69 175h20M75 168h8M75 182h12" />
        <path d="m509 123 14 7-14 7v-14Z" />
        <path d="M538 376h5l4-9 5 18 5-14 5 5h4" />
      </g>
    </svg>
  </div>
);

const trustItems = [
  ["100+ Languages", "Global and regional market coverage"],
  ["AI + Human Workflows", "Efficiency with professional creative review"],
  ["Multimedia Production", "Subtitles, audio, graphics, and engineering"],
  ["Secure Delivery", "Structured handling for sensitive media content"],
];

const ecosystemItems = [
  ["film", "Film & Television Studios", "Feature films, episodic television, animation, documentaries, trailers, scripts, and promotional content."],
  ["stream", "Streaming & OTT Platforms", "Subtitles, dubbing, content metadata, platform interfaces, help content, and continuous catalog releases."],
  ["broadcast", "Broadcasters & Media Networks", "Programs, interviews, factual content, schedules, digital channels, and audience communications."],
  ["production", "Production & Post-Production", "Dialogue lists, subtitle templates, recording scripts, production notes, and multilingual delivery packages."],
  ["publish", "Digital Publishers & Content Platforms", "Editorial video, podcasts, creator content, web series, multimedia articles, and audience experiences."],
  ["campaign", "Advertising & Creative Agencies", "Campaign concepts, branded entertainment, video advertising, social content, and creative transcreation."],
  ["platform", "Media Technology Companies", "Streaming apps, media platforms, content discovery systems, interfaces, and customer support content."],
];

const lifecycle = [
  {
    title: "Development & Pre-Production",
    copy: "Scripts, treatments, story bibles, character profiles, pitch materials, terminology, and pronunciation guidance.",
  },
  {
    title: "Production & Post-Production",
    copy: "Dialogue lists, transcripts, subtitle templates, voice scripts, on-screen text, graphics, credits, and production notes.",
  },
  {
    title: "Distribution & Platform Delivery",
    copy: "Subtitles, captions, localized audio, titles, synopses, catalog metadata, platform interfaces, and accessibility content.",
  },
  {
    title: "Marketing & Audience Engagement",
    copy: "Trailers, teasers, key-art copy, websites, social campaigns, press kits, email, and subscriber communications.",
  },
  {
    title: "Ongoing Content Operations",
    copy: "New episodes, catalog additions, metadata updates, regional variations, reviewer feedback, and reusable language assets.",
  },
];

const services = [
  {
    icon: "subtitles",
    title: "Subtitle Translation & Timed Text",
    copy: "Create accurate, natural, readable subtitles with spotting, synchronization, reading-speed review, segmentation checks, linguistic QA, and platform-ready delivery.",
    links: [
      ["Video Subtitling Services", "https://www.stepes.com/video-subtitle-services/"],
      ["Video Translation Services", "https://www.stepes.com/video-translation-services/"],
    ],
  },
  {
    icon: "subtitles",
    title: "Closed Captioning & Accessible Media",
    copy: "Localize captions, translated transcripts, speaker identification, relevant sound information, and other content that helps audiences understand the complete audio experience.",
  },
  {
    icon: "audio",
    title: "Dubbing & Voice-Over",
    copy: "Coordinate script adaptation, voice casting, pronunciation guidance, time-sync or lip-sync options, recording, editing, mixing, and final linguistic and technical review.",
    links: [["Multimedia Localization", "https://www.stepes.com/multimedia-translation-services/"]],
  },
  {
    icon: "translate",
    title: "Transcription & Time-Coding",
    copy: "Prepare verbatim or edited transcripts, speaker-identified dialogue, time-coded scripts, subtitle templates, and translation-ready source assets.",
  },
  {
    icon: "screen",
    title: "On-Screen Text & Graphics",
    copy: "Localize titles, lower thirds, labels, signs, maps, credits, interfaces, animated text, motion graphics, and promotional overlays with visual-context review.",
  },
  {
    icon: "metadata",
    title: "Media Metadata Translation",
    copy: "Translate program and episode titles, synopses, descriptions, genres, categories, content warnings, search terms, catalog copy, and storefront language.",
  },
  {
    icon: "campaign",
    title: "Marketing Translation & Transcreation",
    copy: "Adapt trailers, campaign concepts, taglines, social content, press materials, and promotional assets to preserve brand voice and audience impact.",
    links: [["Marketing Translation Services", "https://www.stepes.com/marketing-translation-services/"]],
  },
  {
    icon: "platform",
    title: "Website, App & Platform Localization",
    copy: "Localize streaming interfaces, subscription journeys, content navigation, account experiences, notifications, viewer help, and promotional websites.",
    links: [
      ["Website Translation", "https://www.stepes.com/website-translation-services/"],
      ["Software Localization", "https://www.stepes.com/software-localization-services/"],
      ["App Localization", "https://www.stepes.com/app-localization-services/"],
    ],
  },
];

const creativePrinciples = [
  ["Natural Dialogue", "Language should sound like something the character would genuinely say, with the right rhythm, register, relationship, and narrative purpose."],
  ["Humor & Wordplay", "Jokes, idioms, and cultural references may require adaptation so the intended audience reaction survives the move between languages."],
  ["Character Voice", "Age, personality, social context, speech patterns, and relationships should remain recognizable across markets."],
  ["Tone & Emotion", "Suspense, warmth, authority, vulnerability, humor, and excitement depend on contextual understanding and editorial judgment."],
  ["Cultural Relevance", "Market-specific review helps identify references, symbols, sensitivities, and audience conventions that may require thoughtful adaptation."],
  ["Franchise Consistency", "Approved names, catchphrases, fictional places, terminology, and style decisions remain coordinated across content and campaigns."],
];

const aiItems = [
  "Speech transcription and speaker segmentation",
  "Time-code generation and content analysis",
  "Translation-memory matching and initial translation",
  "Terminology checks and subtitle QA",
  "Workflow routing and file preparation",
  "Synthetic voice options for suitable content",
];

const humanItems = [
  "Creative adaptation and natural dialogue",
  "Humor, wordplay, and cultural nuance",
  "Character voice and emotional tone",
  "Pronunciation and voice selection",
  "Subtitle readability and audience suitability",
  "Final audio, visual, and release review",
];

const workflow = [
  ["Content Intake & Analysis", "Review source assets, languages, reference materials, schedules, delivery formats, platform requirements, and production dependencies."],
  ["Asset Preparation", "Prepare transcripts, dialogue segmentation, time codes, subtitle templates, scripts, terminology, and other translation-ready materials."],
  ["Workflow Design", "Select the right combination of subtitles, captions, dubbing, voice-over, metadata, transcreation, graphics, review, and engineering."],
  ["Translation & Adaptation", "Assign media-specialized linguists who understand the genre, audience, market, creative purpose, and technical format."],
  ["Linguistic & Creative Review", "Review accuracy, fluency, tone, cultural relevance, continuity, timing, terminology, and audience suitability."],
  ["Multimedia Production", "Perform subtitle synchronization, recording, dubbing, audio editing, graphic localization, and related engineering where required."],
  ["Technical Quality Assurance", "Validate timing, display, audio, file structure, encoding, completeness, naming, format, and platform readiness."],
  ["Delivery & Ongoing Updates", "Deliver approved assets and preserve translation memories, terminology, style guidance, and reviewer decisions for future releases."],
];

const qualityGroups = [
  {
    title: "Linguistic QA",
    icon: "translate",
    items: ["Accuracy and completeness", "Grammar and fluency", "Terminology consistency", "Character and brand language", "Locale appropriateness"],
  },
  {
    title: "Creative QA",
    icon: "campaign",
    items: ["Natural dialogue", "Tone and emotion", "Humor and wordplay", "Cultural resonance", "Audience suitability"],
  },
  {
    title: "Subtitle & Caption QA",
    icon: "subtitles",
    items: ["Timing and synchronization", "Reading speed", "Line length and segmentation", "Speaker changes", "Positioning and completeness"],
  },
  {
    title: "Audio QA",
    icon: "audio",
    items: ["Pronunciation", "Voice suitability", "Performance consistency", "Timing and synchronization", "Editing, mixing, and clarity"],
  },
  {
    title: "Technical QA",
    icon: "quality",
    items: ["File naming and format", "Encoding and character display", "Asset completeness", "Audio and video alignment", "Platform requirements and rendering"],
  },
];

const operationsItems = [
  ["Centralized Content Intake", "Coordinate multilingual requests through one structured process instead of disconnected regional workflows."],
  ["Reusable Language Assets", "Preserve approved language through translation memories, glossaries, character references, pronunciation guides, and style instructions."],
  ["Terminology & Franchise Governance", "Maintain consistency for names, titles, fictional locations, brands, features, and recurring content across releases."],
  ["Workflow Automation", "Automate repeatable steps such as intake, assignment, translation-memory matching, notifications, review routing, and delivery."],
  ["Regional Review Coordination", "Bring local stakeholders into a controlled review process with clear responsibilities, consolidated feedback, and version consistency."],
  ["Multi-Market Visibility", "Track languages, milestones, reviewer status, deadlines, and delivery requirements across simultaneous programs."],
];

const reasons = [
  ["human", "Media-Specialized Linguists", "Native-language professionals with experience in scripts, dialogue, subtitles, creative content, marketing, and audience-facing media."],
  ["ai", "AI + Human Workflows", "Technology accelerates preparation, translation, quality checks, and coordination while human experts retain creative control."],
  ["audio", "Connected Multimedia Capabilities", "Translation, subtitles, captions, transcription, voice-over, dubbing, graphics, and engineering through one coordinated provider."],
  ["globe", "Global Language Coverage", "Support for more than 100 languages and regional variants through a scalable multilingual operating model."],
  ["metadata", "Terminology & Franchise Consistency", "Translation memories, glossaries, character references, and style guidance preserve approved language across releases."],
  ["workflow", "Flexible Production Models", "Choose efficient AI-assisted workflows or comprehensive creative localization based on the content, audience, and release value."],
  ["secure", "Secure Enterprise Delivery", "Use controlled access, structured review, and client-specific requirements for confidential and unreleased content."],
  ["workflow", "Ongoing Program Support", "Scale from individual media assets to episodic releases, catalog programs, and continuous multilingual content operations."],
];

const relatedServices = [
  ["Multimedia Translation & Localization", "Audio, video, subtitles, voice-over, dubbing, and on-screen content through connected production workflows.", "https://www.stepes.com/multimedia-translation-services/"],
  ["Video Translation", "Transcription, translation, subtitles, captions, multilingual audio, metadata, and platform-ready delivery.", "https://www.stepes.com/video-translation-services/"],
  ["Video Subtitling", "Translated, synchronized subtitles and captions for entertainment, digital media, training, and marketing.", "https://www.stepes.com/video-subtitle-services/"],
  ["Marketing Translation", "Creative adaptation for trailers, campaigns, taglines, social content, press materials, and audience communications.", "https://www.stepes.com/marketing-translation-services/"],
  ["Website Translation", "Multilingual entertainment websites, campaign pages, content hubs, and regional digital experiences.", "https://www.stepes.com/website-translation-services/"],
  ["Software Localization", "Streaming platforms, media-management tools, viewer interfaces, and digital media systems.", "https://www.stepes.com/software-localization-services/"],
  ["App Localization", "Entertainment applications, account experiences, notifications, content discovery, and mobile viewer journeys.", "https://www.stepes.com/app-localization-services/"],
  ["Gaming Translation", "Narrative content, dialogue, player interfaces, marketing, support content, and localized gaming experiences.", "https://www.stepes.com/gaming-translation-services/"],
];

const faqs = [
  [
    "What is media and entertainment localization?",
    "Media and entertainment localization adapts spoken, written, visual, creative, and technical content for audiences in another language or market. It can include translation, subtitles, captions, dubbing, voice-over, transcription, metadata, transcreation, on-screen text, platform interfaces, marketing, and multimedia production.",
  ],
  [
    "What types of media content does Stepes translate?",
    "Stepes translates and localizes films, television programs, streaming content, documentaries, animation, interviews, trailers, advertisements, social video, podcasts, creator content, scripts, subtitles, captions, metadata, websites, applications, platform interfaces, campaigns, and supporting production materials.",
  ],
  [
    "What is the difference between subtitles and closed captions?",
    "Subtitles generally present spoken dialogue as on-screen text, either in the source language or as a translation. Closed captions are designed to communicate the wider audio experience and may include speaker identification, music cues, sound effects, and other relevant non-dialogue information.",
  ],
  [
    "What is the difference between voice-over and dubbing?",
    "Voice-over adds translated speech over or in place of the original audio and is common for interviews, documentaries, educational media, and informational content. Dubbing replaces the original spoken performance and may require script adaptation, casting, timing adjustments, performance direction, recording, editing, and mixing.",
  ],
  [
    "Can Stepes support episodic and continuously released content?",
    "Yes. Stepes can establish recurring workflows for series, streaming programs, digital channels, media catalogs, and other continuously released content. Translation memories, character glossaries, terminology, pronunciation guidance, style instructions, and approved references help maintain continuity across episodes, seasons, platforms, and campaigns.",
  ],
  [
    "How does Stepes preserve character voice and creative intent?",
    "Our linguists work with available scripts, video, audio, character information, story context, terminology, style guidance, and previously approved translations. They consider personality, relationships, register, humor, emotion, setting, and narrative purpose, followed by creative and linguistic review.",
  ],
  [
    "Does Stepes use AI for media localization?",
    "Yes. AI can support transcription, time-code generation, content analysis, translation-memory matching, initial translation, terminology checks, QA, and workflow coordination. Human linguists, editors, voice specialists, and multimedia professionals remain responsible for creative adaptation, cultural nuance, character voice, pronunciation, readability, and final quality.",
  ],
  [
    "How does Stepes protect unreleased media content?",
    "Stepes can support confidential projects through secure file exchange, controlled project access, carefully selected resources, structured review and delivery, and project-specific confidentiality requirements. The workflow can be aligned with each client’s internal content-handling policies.",
  ],
  [
    "Can Stepes translate media metadata and streaming-platform content?",
    "Yes. Stepes localizes program and episode titles, synopses, descriptions, categories, genres, content warnings, catalog copy, search metadata, promotional language, user interfaces, subscription journeys, notifications, and viewer support content.",
  ],
  [
    "How are media localization projects priced and scheduled?",
    "Pricing and turnaround depend on the content, duration, word count, source quality, language, available scripts, subtitle preparation, timing, creative adaptation, voice talent, synchronization, production, review stages, and delivery formats. Stepes reviews the source assets and requirements before recommending the workflow, quotation, and schedule.",
  ],
];

const Button = ({ href, children, secondary = false }) => (
  <a className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href}>
    <span>{children}</span>
    {!secondary && <ArrowIcon />}
  </a>
);

export default function MediaEntertainmentTranslationServicesWireframe() {
  return (
    <main className="me-page">
      <style>{`
        :root {
          --me-magenta: #C11D63;
          --me-magenta-dark: #9F1D55;
          --me-magenta-deep: #7A1542;
          --me-blush: #FDF2F7;
          --me-light-magenta: #F2A7C6;
          --me-text: #111827;
          --me-muted: #566176;
          --me-soft: #F7F8FA;
          --me-border: #E4E7EC;
          --me-dark: #171521;
          --me-dark-soft: #24212F;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .me-page {
          width: 100%;
          overflow-x: clip;
          background: #fff;
          color: var(--me-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .me-page h1,
        .me-page h2,
        .me-page h3,
        .me-page p,
        .me-page ul,
        .me-page ol {
          margin: 0;
          min-width: 0;
        }

        .me-page h1,
        .me-page h2,
        .me-page h3,
        .me-page p,
        .me-page li,
        .me-page a {
          overflow-wrap: break-word;
        }

        .shell {
          width: min(100%, 1280px);
          min-width: 0;
          margin: 0 auto;
          padding-inline: 56px;
        }

        .section { padding-block: 96px; }
        .section-dense { padding-block: 80px; }
        .section-soft { background: var(--me-soft); }
        .section-blush { background: linear-gradient(180deg, #FFF 0%, var(--me-blush) 100%); }

        .eyebrow {
          margin: 0;
          color: var(--me-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: .17em;
          text-transform: uppercase;
        }

        .eyebrow-dark { color: var(--me-light-magenta); }

        h1,
        h2,
        h3 { font-weight: 600; }

        h1 {
          max-width: 700px;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -.038em;
        }

        h2 {
          font-size: 36px;
          line-height: 1.14;
          letter-spacing: -.03em;
        }

        h3 {
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -.018em;
        }

        .section-head {
          max-width: 820px;
        }

        .section-head.center {
          margin-inline: auto;
          text-align: center;
        }

        .section-head .eyebrow + h2 { margin-top: 14px; }
        .section-head h2 + p { margin-top: 20px; }

        .section-intro {
          max-width: 790px;
          color: var(--me-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .hero {
          position: relative;
          padding-block: 104px 96px;
          background: #fff;
        }

        .hero::after {
          content: "";
          position: absolute;
          right: -140px;
          bottom: -160px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          border: 1px solid #F1DDE6;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(420px, .98fr);
          gap: 58px;
          align-items: center;
        }

        .hero-copy { position: relative; z-index: 2; }

        .hero-deck {
          max-width: 690px;
          margin-top: 26px;
          color: var(--me-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease, color .2s ease;
        }

        .me-page a.button-primary,
        .me-page a.button-primary:link,
        .me-page a.button-primary:visited,
        .me-page a.button-primary:hover,
        .me-page a.button-primary:active,
        .me-page a.button-primary:focus-visible {
          color: #fff !important;
          -webkit-text-fill-color: #fff;
        }

        .me-page a.button-primary > span,
        .me-page a.button-primary svg,
        .me-page a.button-primary svg path {
          color: inherit !important;
          stroke: currentColor;
        }

        .button-primary {
          border: 1px solid var(--me-magenta);
          background: var(--me-magenta);
          box-shadow: 0 10px 25px rgba(193, 29, 99, .16);
        }

        .button-primary:hover {
          transform: translateY(-1px);
          background: var(--me-magenta-dark);
          border-color: var(--me-magenta-dark);
          box-shadow: 0 14px 30px rgba(193, 29, 99, .21);
        }

        .button-secondary {
          border: 1px solid #D9DEE6;
          background: #fff;
          color: #2B3444;
        }

        .button-secondary:visited { color: #2B3444; }
        .button-secondary:hover {
          transform: translateY(-1px);
          border-color: #C8CDD6;
          color: var(--me-text);
          box-shadow: 0 10px 24px rgba(17, 24, 39, .06);
        }

        .button:focus-visible,
        .editorial-link:focus-visible,
        .related-link:focus-visible,
        .faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, .22);
          outline-offset: 3px;
        }

        .hero-art {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 575px;
          margin-left: auto;
        }

        .hero-art svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .trust-band {
          border-top: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
          background: #fff;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .trust-item {
          min-height: 104px;
          padding: 24px 28px;
          border-left: 1px solid var(--me-border);
        }

        .trust-item:first-child { border-left: 0; }
        .trust-item strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }
        .trust-item span {
          display: block;
          margin-top: 5px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.5;
        }

        .overview-layout {
          display: grid;
          grid-template-columns: minmax(300px, .78fr) minmax(0, 1.22fr);
          gap: 84px;
          align-items: start;
        }

        .overview-copy {
          padding-left: 38px;
          border-left: 2px solid var(--me-magenta);
        }

        .overview-copy p {
          max-width: 760px;
          color: var(--me-muted);
          font-size: 18px;
          line-height: 1.75;
        }

        .overview-copy p + p { margin-top: 22px; }

        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
          background: #fff;
        }

        .ecosystem-item {
          min-height: 248px;
          padding: 30px 28px 32px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .ecosystem-item:last-child {
          grid-column: span 2;
        }

        .icon-wrap {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--me-blush);
          color: var(--me-magenta-dark);
        }

        .ecosystem-item h3 {
          margin-top: 22px;
          font-size: 20px;
          line-height: 1.32;
        }

        .ecosystem-item p {
          margin-top: 12px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.66;
        }

        .lifecycle-section {
          position: relative;
          background: var(--me-dark);
          color: #fff;
        }

        .lifecycle-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 85% 15%, rgba(193,29,99,.15), transparent 28%);
          pointer-events: none;
        }

        .lifecycle-section .shell { position: relative; z-index: 1; }
        .lifecycle-section .section-intro { color: #C8C4D2; }

        .lifecycle-track {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(255,255,255,.16);
        }

        .lifecycle-step {
          position: relative;
          padding: 34px 26px 0 0;
        }

        .lifecycle-step:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,.13);
          padding-right: 26px;
          margin-right: 26px;
        }

        .lifecycle-number {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(242,167,198,.54);
          border-radius: 50%;
          color: var(--me-light-magenta);
          font-size: 14px;
          font-weight: 600;
        }

        .lifecycle-step h3 {
          margin-top: 22px;
          font-size: 19px;
          color: #fff;
        }

        .lifecycle-step p {
          margin-top: 12px;
          color: #C8C4D2;
          font-size: 16px;
          line-height: 1.65;
        }

        .services-layout {
          display: grid;
          grid-template-columns: minmax(280px, .66fr) minmax(0, 1.34fr);
          gap: 72px;
          align-items: start;
        }

        .services-intro {
          position: sticky;
          top: 28px;
        }

        .services-intro .section-intro { margin-top: 20px; }

        .service-list { border-top: 1px solid var(--me-border); }
        .service-row {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 22px;
          padding: 30px 0;
          border-bottom: 1px solid var(--me-border);
        }

        .service-row .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 15px;
        }

        .service-row h3 { font-size: 21px; }
        .service-row p {
          max-width: 760px;
          margin-top: 10px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.68;
        }

        .service-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
          margin-top: 14px;
        }

        .editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          color: var(--me-magenta-dark);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .editorial-link:visited { color: var(--me-magenta-dark); }
        .editorial-link:hover { color: var(--me-magenta); }
        .editorial-link svg { transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }

        .content-pair {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          margin-top: 52px;
        }

        .feature-panel {
          padding: 42px 40px;
          border: 1px solid var(--me-border);
          border-radius: 28px;
          background: #fff;
        }

        .feature-panel h3 { font-size: 27px; }
        .feature-panel > p {
          margin-top: 16px;
          color: var(--me-muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 20px;
          margin-top: 26px;
          padding: 0;
          list-style: none;
        }

        .feature-list li {
          position: relative;
          padding-left: 18px;
          color: #30394A;
          font-size: 16px;
          line-height: 1.55;
        }

        .feature-list li::before {
          content: "";
          position: absolute;
          top: .65em;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--me-magenta);
        }

        .viewer-journey {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          margin-top: 30px;
          padding: 20px 0;
          border-top: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .viewer-journey span {
          position: relative;
          display: flex;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          color: #30394A;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }

        .viewer-journey span:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -6px;
          color: #B0B7C2;
        }

        .digital-layout {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 74px;
          align-items: center;
        }

        .digital-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .digital-tags span {
          padding: 10px 14px;
          border: 1px solid #E2D7DD;
          border-radius: 999px;
          background: #fff;
          color: #3D4554;
          font-size: 16px;
          font-weight: 600;
        }

        .creative-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
          background: #fff;
        }

        .creative-item {
          min-height: 195px;
          padding: 28px 26px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .creative-item h3 { font-size: 19px; }
        .creative-item p {
          margin-top: 10px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.62;
        }

        .ai-section {
          background: var(--me-dark);
          color: #fff;
        }

        .ai-section .section-intro { color: #C8C4D2; }

        .ai-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          margin-top: 54px;
        }

        .ai-panel {
          padding: 38px 36px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 28px;
          background: var(--me-dark-soft);
        }

        .ai-panel-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ai-panel .icon-wrap {
          background: rgba(193,29,99,.16);
          color: var(--me-light-magenta);
        }

        .ai-panel h3 { color: #fff; }
        .ai-panel ul {
          display: grid;
          gap: 13px;
          margin-top: 28px;
          padding: 0;
          list-style: none;
        }

        .ai-panel li {
          position: relative;
          padding-left: 20px;
          color: #D7D3DF;
          font-size: 16px;
          line-height: 1.55;
        }

        .ai-panel li::before {
          content: "";
          position: absolute;
          top: .67em;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--me-light-magenta);
        }

        .decision-bar {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
          margin-top: 28px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 22px;
          overflow: hidden;
        }

        .decision-bar span {
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border-left: 1px solid rgba(255,255,255,.12);
          color: #D7D3DF;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }

        .decision-bar span:first-child { border-left: 0; }

        .workflow-wrap {
          margin-top: 54px;
          border-top: 1px solid var(--me-border);
        }

        .workflow-step {
          display: grid;
          grid-template-columns: 64px minmax(240px, .52fr) minmax(0, 1fr);
          gap: 32px;
          align-items: center;
          padding: 26px 0;
          border-bottom: 1px solid var(--me-border);
        }

        .workflow-number {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid #E4B8CB;
          border-radius: 50%;
          color: var(--me-magenta-dark);
          font-size: 14px;
          font-weight: 600;
        }

        .workflow-step h3 { font-size: 20px; }
        .workflow-step p {
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.66;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
          background: #fff;
        }

        .quality-group {
          padding: 30px 24px 32px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .quality-group h3 {
          margin-top: 18px;
          font-size: 19px;
        }

        .quality-group ul {
          display: grid;
          gap: 10px;
          margin-top: 20px;
          padding: 0;
          list-style: none;
        }

        .quality-group li {
          position: relative;
          padding-left: 16px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.48;
        }

        .quality-group li::before {
          content: "";
          position: absolute;
          top: .62em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--me-magenta);
        }

        .security-ops-grid {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 34px;
          align-items: stretch;
        }

        .security-panel {
          padding: 42px 38px;
          border: 1px solid #E7CFDA;
          border-radius: 28px;
          background: var(--me-blush);
        }

        .security-panel h2 { margin-top: 18px; }
        .security-panel > p {
          margin-top: 18px;
          color: var(--me-muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .security-list {
          display: grid;
          gap: 12px;
          margin-top: 26px;
          padding: 0;
          list-style: none;
        }

        .security-list li {
          position: relative;
          padding-left: 20px;
          color: #343D4D;
          font-size: 16px;
          line-height: 1.55;
        }

        .security-list li::before {
          content: "";
          position: absolute;
          top: .67em;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--me-magenta);
        }

        .ops-panel {
          padding: 42px 38px;
          border: 1px solid var(--me-border);
          border-radius: 28px;
          background: #fff;
        }

        .ops-panel > p {
          margin-top: 18px;
          color: var(--me-muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .ops-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 30px;
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
        }

        .ops-item {
          padding: 24px 22px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .ops-item h3 { font-size: 17px; }
        .ops-item p {
          margin-top: 8px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.58;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
          background: #fff;
        }

        .reason-item {
          min-height: 248px;
          padding: 30px 28px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .reason-item h3 { margin-top: 20px; font-size: 20px; }
        .reason-item p {
          margin-top: 11px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.64;
        }

        .languages-panel {
          display: grid;
          grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: center;
          padding: 52px 50px;
          border: 1px solid var(--me-border);
          border-radius: 30px;
          background: #fff;
        }

        .languages-panel .section-intro { margin-top: 18px; }
        .language-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .language-cloud span {
          padding: 11px 14px;
          border: 1px solid #DEE2E8;
          border-radius: 999px;
          background: var(--me-soft);
          color: #364052;
          font-size: 16px;
          font-weight: 600;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--me-border);
          border-left: 1px solid var(--me-border);
          background: #fff;
        }

        .related-item {
          display: flex;
          min-height: 260px;
          flex-direction: column;
          padding: 30px 26px;
          border-right: 1px solid var(--me-border);
          border-bottom: 1px solid var(--me-border);
        }

        .related-item h3 { font-size: 19px; }
        .related-item p {
          margin-top: 11px;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.62;
        }

        .related-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 22px;
          color: var(--me-magenta-dark);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .related-link:visited { color: var(--me-magenta-dark); }
        .related-link:hover { color: var(--me-magenta); }
        .related-link svg { transition: transform .2s ease; }
        .related-link:hover svg { transform: translateX(3px); }

        .faq-panel {
          max-width: 980px;
          margin: 50px auto 0;
          border-top: 1px solid var(--me-border);
        }

        .faq-item { border-bottom: 1px solid var(--me-border); }
        .faq-item summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 38px;
          gap: 20px;
          align-items: center;
          min-height: 82px;
          padding: 20px 0;
          color: var(--me-text);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          cursor: pointer;
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-plus {
          position: relative;
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border: 1px solid #DDE1E7;
          border-radius: 50%;
          background: #fff;
        }
        .faq-plus span {
          position: absolute;
          width: 13px;
          height: 1.5px;
          background: var(--me-magenta-dark);
          transition: transform .2s ease;
        }
        .faq-plus span:last-child { transform: rotate(90deg); }
        .faq-item[open] .faq-plus span:last-child { transform: rotate(0deg); }

        .faq-answer {
          max-width: 840px;
          padding: 0 58px 26px 0;
          color: var(--me-muted);
          font-size: 16px;
          line-height: 1.72;
        }

        .final-cta { padding-block: 88px; background: #fff; }
        .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 50px;
          align-items: center;
          padding: 54px 56px;
          border: 1px solid #E8CFDA;
          border-radius: 30px;
          background: linear-gradient(135deg, #FDF2F7 0%, #FFF 68%);
        }
        .cta-panel .eyebrow + h2 { margin-top: 14px; }
        .cta-panel p {
          max-width: 720px;
          margin-top: 18px;
          color: var(--me-muted);
          font-size: 18px;
          line-height: 1.68;
        }
        .cta-actions {
          display: flex;
          min-width: 250px;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 1180px) {
          .shell { padding-inline: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(370px, .86fr); gap: 36px; }
          .ecosystem-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .ecosystem-item:last-child {
            grid-column: 1 / -1;
            min-height: 0;
            display: grid;
            grid-template-columns: 44px minmax(220px, .55fr) minmax(0, 1fr);
            gap: 22px;
            align-items: center;
          }
          .ecosystem-item:last-child h3,
          .ecosystem-item:last-child p { margin-top: 0; }
          .lifecycle-track { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 34px 0; }
          .lifecycle-step:nth-child(3) { border-right: 0; margin-right: 0; }
          .quality-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .related-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (max-width: 960px) {
          .shell { padding-inline: 24px; }
          .section { padding-block: 80px; }
          .section-dense { padding-block: 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }

          .hero { padding-block: 88px 80px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-copy { max-width: 780px; }
          .hero-art { max-width: 640px; margin: 0 auto; }

          .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--me-border); }
          .trust-item:nth-child(4) { border-top: 1px solid var(--me-border); }

          .overview-layout,
          .services-layout,
          .digital-layout,
          .security-ops-grid,
          .languages-panel { grid-template-columns: 1fr; gap: 38px; }
          .services-intro { position: static; }

          .ecosystem-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ecosystem-item:last-child {
            grid-column: span 2;
            grid-template-columns: 44px minmax(190px, .48fr) minmax(0, 1fr);
          }
          .lifecycle-track { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lifecycle-step:nth-child(3) { border-right: 1px solid rgba(255,255,255,.13); margin-right: 26px; }
          .lifecycle-step:nth-child(2n) { border-right: 0; margin-right: 0; }

          .content-pair { grid-template-columns: 1fr; }
          .feature-panel { padding: 36px 32px; }
          .quality-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .quality-group:last-child { grid-column: 1 / -1; }
          .decision-bar { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .decision-bar span {
            border-top: 1px solid rgba(255,255,255,.12);
          }
          .decision-bar span:nth-child(odd) { border-left: 0; }
          .decision-bar span:nth-child(-n+2) { border-top: 0; }
          .decision-bar span:last-child {
            grid-column: 1 / -1;
            border-left: 0;
          }
          .reasons-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cta-panel { grid-template-columns: 1fr; gap: 32px; }
          .cta-actions { min-width: 0; flex-direction: row; }
        }

        @media (max-width: 700px) {
          .shell { padding-inline: 20px; }
          .section { padding-block: 68px; }
          .section-dense { padding-block: 64px; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          .section-intro { font-size: 18px; line-height: 1.64; }

          .hero { padding-block: 72px 64px; }
          .hero::after { display: none; }
          .hero-grid { gap: 36px; }
          .hero-deck { margin-top: 22px; font-size: 18px; line-height: 1.62; }
          .hero-actions { display: grid; grid-template-columns: 1fr; margin-top: 28px; }
          .button { width: 100%; min-height: 52px; }
          .hero-art { max-width: 520px; }

          .trust-grid { grid-template-columns: 1fr; }
          .trust-item,
          .trust-item:nth-child(3),
          .trust-item:nth-child(4) { min-height: 0; border-left: 0; border-top: 1px solid var(--me-border); padding: 20px 0; }
          .trust-item:first-child { border-top: 0; }

          .overview-layout { gap: 30px; }
          .overview-copy { padding-left: 22px; }
          .overview-copy p { font-size: 17px; line-height: 1.7; }

          .ecosystem-grid,
          .creative-list,
          .ai-grid,
          .ops-list,
          .reasons-grid,
          .quality-grid,
          .related-grid { grid-template-columns: 1fr; }
          .ecosystem-item,
          .creative-item,
          .reason-item,
          .quality-group,
          .related-item { min-height: 0; }
          .ecosystem-item:last-child {
            grid-column: span 1;
            display: block;
          }
          .ecosystem-item:last-child h3 { margin-top: 22px; }
          .ecosystem-item:last-child p { margin-top: 12px; }
          .quality-group:last-child { grid-column: auto; }

          .lifecycle-track { grid-template-columns: 1fr; margin-top: 42px; }
          .lifecycle-step,
          .lifecycle-step:not(:last-child),
          .lifecycle-step:nth-child(3),
          .lifecycle-step:nth-child(2n) {
            display: grid;
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 18px;
            padding: 26px 0;
            margin: 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.13);
          }
          .lifecycle-step:last-child { border-bottom: 0; }
          .lifecycle-number { grid-row: 1 / span 2; }
          .lifecycle-step h3 { margin-top: 4px; }
          .lifecycle-step p { margin-top: 8px; }

          .service-row { grid-template-columns: 44px minmax(0, 1fr); gap: 16px; padding: 26px 0; }
          .service-row .icon-wrap { width: 42px; height: 42px; }
          .service-links { flex-direction: column; align-items: flex-start; gap: 2px; }

          .content-pair { margin-top: 40px; }
          .feature-panel { padding: 30px 22px; border-radius: 24px; }
          .feature-panel h3 { font-size: 23px; }
          .feature-list { grid-template-columns: 1fr; }
          .viewer-journey { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .viewer-journey span:nth-child(2n)::after { display: none; }
          .viewer-journey span { border-bottom: 1px solid var(--me-border); }
          .viewer-journey span:nth-last-child(-n+2) { border-bottom: 0; }

          .decision-bar { grid-template-columns: 1fr; }
          .decision-bar span,
          .decision-bar span:nth-child(odd),
          .decision-bar span:last-child {
            grid-column: auto;
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,.12);
          }
          .decision-bar span:first-child { border-top: 0; }
          .ai-panel { padding: 30px 24px; }

          .workflow-step {
            grid-template-columns: 50px minmax(0, 1fr);
            gap: 16px;
            align-items: start;
          }
          .workflow-step p { grid-column: 2; }

          .security-panel,
          .ops-panel { padding: 32px 24px; border-radius: 24px; }
          .languages-panel { padding: 34px 24px; border-radius: 24px; }

          .faq-panel { margin-top: 40px; }
          .faq-item summary { grid-template-columns: minmax(0, 1fr) 34px; min-height: 74px; padding: 18px 0; font-size: 17px; }
          .faq-plus { width: 32px; height: 32px; }
          .faq-answer { padding: 0 44px 24px 0; }

          .final-cta { padding-block: 68px; }
          .cta-panel { padding: 38px 24px; border-radius: 24px; }
          .cta-actions { flex-direction: column; }
        }

        @media (max-width: 390px) {
          .hero-art { width: 100%; margin: 0 auto; }
          .ecosystem-item,
          .creative-item,
          .quality-group,
          .reason-item,
          .related-item { padding-inline: 22px; }
          .feature-panel { padding-inline: 20px; }
          .language-cloud span { width: 100%; text-align: center; }
          .faq-answer { padding-right: 0; }
        }

        @media (max-width: 340px) {
          .shell { padding-inline: 20px; }
          h1 { font-size: 36px; }
          .workflow-step { grid-template-columns: 44px minmax(0, 1fr); }
          .workflow-number { width: 42px; height: 42px; }
          .faq-answer { padding-right: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 id="page-title">Media &amp; Entertainment Translation Services</h1>
            <p className="hero-deck">
              Bring films, television, streaming content, digital media, and entertainment
              experiences to audiences worldwide. Stepes combines media-specialized linguists,
              AI-powered workflows, and multimedia production expertise to preserve every
              story’s voice, emotion, and creative impact in more than 100 languages.
            </p>
            <div className="hero-actions">
              <Button href="https://www.stepes.com/contact-us/">Talk to an Expert</Button>
              <Button href="https://www.stepes.com/multimedia-translation-services/" secondary>
                Explore Multimedia Localization
              </Button>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="trust-band" aria-label="Media localization capabilities">
        <div className="shell trust-grid">
          {trustItems.map(([title, copy]) => (
            <div className="trust-item" key={title}>
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="global-content">
        <div className="shell overview-layout">
          <div>
            <p className="eyebrow">Creative Localization</p>
            <h2 style={{ marginTop: 14 }}>Global Content Should Feel Local, Not Translated</h2>
          </div>
          <div className="overview-copy">
            <p>
              Great media connects with audiences through more than words. It depends on timing,
              emotion, humor, character voice, visual context, cultural references, and the
              expectations viewers bring to every story.
            </p>
            <p>
              Stepes localizes dialogue, subtitles, captions, voice recordings, metadata,
              marketing campaigns, websites, applications, and other audience-facing content.
              Our workflows combine linguistic expertise, cultural adaptation, intelligent
              automation, and technical production so content can move efficiently across
              languages without sacrificing creativity, consistency, or quality.
            </p>
            <p>
              From a single promotional video to continuous multilingual releases across
              platforms, Stepes helps entertainment companies deliver content that is natural,
              engaging, and ready for global distribution.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="media-ecosystem">
        <div className="shell">
          <div className="section-head center">
            <h2>Localization Expertise Across the Media and Entertainment Ecosystem</h2>
            <p className="section-intro">
              Support multilingual content from early development and production through global
              distribution, promotion, and ongoing audience engagement.
            </p>
          </div>
          <div className="ecosystem-grid">
            {ecosystemItems.map(([icon, title, copy]) => (
              <article className="ecosystem-item" key={title}>
                <span className="icon-wrap"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lifecycle-section" id="content-lifecycle">
        <div className="shell">
          <div className="section-head">
            <h2>Localize Content From Development Through Global Distribution</h2>
            <p className="section-intro">
              Build one connected localization program across the materials used to develop,
              produce, distribute, promote, and continuously update global media.
            </p>
          </div>
          <div className="lifecycle-track">
            {lifecycle.map((item, index) => (
              <article className="lifecycle-step" key={item.title}>
                <span className="lifecycle-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="localization-services">
        <div className="shell services-layout">
          <div className="services-intro">
            <h2>End-to-End Media and Entertainment Localization Services</h2>
            <p className="section-intro">
              Coordinate language, creative adaptation, multimedia production, and platform
              delivery through workflows designed for each content type and audience.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <span className="icon-wrap"><Icon name={service.icon} /></span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  {service.links && (
                    <div className="service-links">
                      {service.links.map(([label, href]) => (
                        <a className="editorial-link" href={href} key={label}>
                          {label}<ArrowIcon size={16} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="film-streaming">
        <div className="shell">
          <div className="section-head center">
            <h2>Build Consistent Experiences Across Stories, Seasons, and Platforms</h2>
            <p className="section-intro">
              Coordinate narrative continuity, release speed, content discovery, and the viewer
              experience across film, television, episodic programming, streaming, and OTT.
            </p>
          </div>

          <div className="content-pair">
            <article className="feature-panel">
              <h3>Film, Television &amp; Episodic Content</h3>
              <p>
                Localize feature films, television series, animation, documentaries, reality and
                unscripted programs, interviews, factual entertainment, trailers, and promotional clips.
              </p>
              <ul className="feature-list">
                <li>Character and franchise glossaries</li>
                <li>Approved names and terminology</li>
                <li>Pronunciation guidance</li>
                <li>Translation memories</li>
                <li>Language-specific style guides</li>
                <li>Previously approved subtitles</li>
                <li>Story and episode references</li>
                <li>Reviewer feedback</li>
              </ul>
            </article>

            <article className="feature-panel">
              <h3>Streaming &amp; OTT Localization at Release Speed</h3>
              <p>
                Support films, episodes, subtitles, localized audio, metadata, search and content
                discovery, interfaces, subscriptions, notifications, help content, and ongoing catalog updates.
              </p>
              <div className="viewer-journey" aria-label="Connected viewer journey">
                {['Discover', 'Select', 'Watch', 'Understand', 'Engage', 'Return'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p>
                A successful multilingual streaming experience connects everything audiences use
                to find, choose, understand, and return to content, not only the media asset itself.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-blush" id="digital-creative">
        <div className="shell digital-layout">
          <div>
            <h2>Adapt Digital Media Without Losing the Creative Experience</h2>
            <p className="section-intro" style={{ marginTop: 20 }}>
              Localize fast-moving digital formats for mobile viewing, regional platform conventions,
              search and discovery, and short production cycles while preserving voice, emotion,
              cultural relevance, and brand consistency.
            </p>
            <div className="digital-tags" aria-label="Digital media formats">
              {[
                "Long-Form Video", "Short-Form Video", "Social Media", "Creator Content",
                "Podcasts", "Web Series", "Interviews", "Branded Entertainment",
                "Editorial Multimedia", "Digital Campaigns", "Livestreams", "Audio Programs",
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="creative-list">
            {creativePrinciples.map(([title, copy]) => (
              <article className="creative-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-section" id="ai-human-workflows">
        <div className="shell">
          <div className="section-head center">
            <p className="eyebrow eyebrow-dark">Responsible Automation</p>
            <h2>AI-Powered Media Localization. Human-Governed Quality.</h2>
            <p className="section-intro">
              Use intelligent technology to accelerate suitable tasks while keeping creative,
              cultural, linguistic, and release decisions under professional human control.
            </p>
          </div>
          <div className="ai-grid">
            <article className="ai-panel">
              <div className="ai-panel-heading">
                <span className="icon-wrap"><Icon name="ai" /></span>
                <h3>AI-Supported Efficiency</h3>
              </div>
              <ul>{aiItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="ai-panel">
              <div className="ai-panel-heading">
                <span className="icon-wrap"><Icon name="human" /></span>
                <h3>Human Creative Control</h3>
              </div>
              <ul>{humanItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <div className="decision-bar" aria-label="Workflow decision factors">
            {['Content Visibility', 'Creative Sensitivity', 'Audience Expectations', 'Release Schedule', 'Confidentiality & Risk'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Flexible Production Model</p>
            <h2>From Source Asset to Platform-Ready Delivery</h2>
            <p className="section-intro">
              Stepes designs each media localization workflow around the content, audience,
              languages, formats, schedule, security needs, and required level of creative review.
            </p>
          </div>
          <div className="workflow-wrap">
            {workflow.map(([title, copy], index) => (
              <article className="workflow-step" key={title}>
                <span className="workflow-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="quality-assurance">
        <div className="shell">
          <div className="section-head center">
            <h2>Quality Across Every Language and Media Layer</h2>
            <p className="section-intro">
              Media quality includes linguistic accuracy, creative performance, readability,
              synchronization, production, display, and consistency across the entire audience experience.
            </p>
          </div>
          <div className="quality-grid">
            {qualityGroups.map((group) => (
              <article className="quality-group" key={group.title}>
                <span className="icon-wrap"><Icon name={group.icon} /></span>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 26, textAlign: 'center' }}>
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">
              Explore Translation Quality Assurance <ArrowIcon size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="security-operations">
        <div className="shell security-ops-grid">
          <article className="security-panel">
            <span className="icon-wrap"><Icon name="secure" /></span>
            <p className="eyebrow" style={{ marginTop: 24 }}>High-Value Content</p>
            <h2>Secure Localization for Unreleased Media</h2>
            <p>
              Protect scripts, episodes, trailers, campaign plans, production schedules, rights
              materials, casting information, and other commercially sensitive assets through a
              structured localization process.
            </p>
            <ul className="security-list">
              <li>Controlled access to project materials</li>
              <li>Secure file exchange and delivery</li>
              <li>Carefully assigned linguistic resources</li>
              <li>Project-specific confidentiality requirements</li>
              <li>Traceable review and approval</li>
              <li>Client-aligned content-handling procedures</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="editorial-link" href="https://www.stepes.com/security/">
                Explore Stepes Security <ArrowIcon size={16} />
              </a>
            </div>
          </article>

          <article className="ops-panel">
            <p className="eyebrow">Enterprise Scale</p>
            <h2 style={{ marginTop: 14 }}>Built for Continuous Multilingual Content Operations</h2>
            <p>
              Connect production, localization, marketing, product, legal, customer experience,
              and regional teams through reusable language assets, workflow automation, structured
              reviews, and clear multi-market visibility across ongoing releases.
            </p>
            <div className="ops-list">
              {operationsItems.map(([title, copy]) => (
                <div className="ops-item" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
            <div className="service-links" style={{ marginTop: 24 }}>
              <a className="editorial-link" href="https://www.stepes.com/solutions/global-content-operations/">
                Global Content Operations <ArrowIcon size={16} />
              </a>
              <a className="editorial-link" href="https://www.stepes.com/enterprise-translation-management/">
                Enterprise Translation Management <ArrowIcon size={16} />
              </a>
              <a className="editorial-link" href="https://www.stepes.com/translation-workflow-automation/">
                Workflow Automation <ArrowIcon size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="shell">
          <div className="section-head center">
            <p className="eyebrow">Why Stepes</p>
            <h2>A Connected Partner for Global Media Localization</h2>
            <p className="section-intro">
              Combine specialized language expertise, multimedia production, intelligent workflows,
              and enterprise controls through one scalable localization partner.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map(([icon, title, copy]) => (
              <article className="reason-item" key={title}>
                <span className="icon-wrap"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="languages">
        <div className="shell languages-panel">
          <div>
            <h2>Reach Audiences in 100+ Languages</h2>
            <p className="section-intro">
              Choose market-neutral, regional, or country-specific language approaches based on
              audience expectations, voice requirements, terminology, and cultural conventions.
            </p>
            <div style={{ marginTop: 24 }}>
              <a className="editorial-link" href="https://www.stepes.com/languages/">
                Explore Language Coverage <ArrowIcon size={16} />
              </a>
            </div>
          </div>
          <div className="language-cloud" aria-label="Representative language coverage">
            {[
              "Latin American Spanish", "Spanish for Spain", "French", "Canadian French",
              "German", "Italian", "Brazilian Portuguese", "European Portuguese",
              "Simplified Chinese", "Traditional Chinese", "Japanese", "Korean", "Arabic",
              "Hindi", "Dutch", "Nordic Languages", "Central & Eastern European Languages",
              "Southeast Asian Languages",
            ].map((language) => <span key={language}>{language}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="related-services">
        <div className="shell">
          <div className="section-head center">
            <h2>Explore Related Media Localization Services</h2>
            <p className="section-intro">
              Extend the industry program with specialized production, digital experience,
              marketing, and adjacent entertainment capabilities.
            </p>
          </div>
          <div className="related-grid">
            {relatedServices.map(([title, copy, href]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a className="related-link" href={href}>
                  Explore {title}<ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="shell">
          <div className="section-head center">
            <h2>Media and Entertainment Localization FAQs</h2>
            <p className="section-intro">
              Answers to common questions about content types, localization methods, AI,
              security, production requirements, pricing, and scheduling.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map(([question, answer], index) => (
              <details className="faq-item" key={question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <PlusIcon />
                </summary>
                <p className="faq-answer">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2 id="cta-title">Bring Your Content to Audiences Everywhere</h2>
              <p>
                From a single video to a continuous global media program, Stepes helps you
                translate, adapt, produce, and manage multilingual content with the speed,
                creativity, and quality international audiences expect.
              </p>
            </div>
            <div className="cta-actions">
              <Button href="https://www.stepes.com/contact-us/">Talk to an Expert</Button>
              <Button href="https://www.stepes.com/multimedia-translation-services/" secondary>
                Multimedia Localization
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
