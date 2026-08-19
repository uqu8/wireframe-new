import React, { useState } from "react";

const pageUrl = "https://www.stepes.com/video-game-translation-services/";

const proofItems = [
  ["100+ Languages", "Global and regional language coverage"],
  ["Gaming-Specialized Linguists", "Teams selected for language, genre, and content"],
  ["AI + Human Workflows", "Automation with professional creative control"],
  ["In-Context Quality", "Localized builds reviewed as player experiences"],
  ["Secure Global Delivery", "Controlled access for confidential game assets"],
];

const gameContentGroups = [
  {
    icon: "interface",
    title: "User Interface and System Text",
    body: "Give players clear, natural language for navigating the game, understanding system states, configuring preferences, and making decisions.",
    items: [
      "Menus and navigation",
      "Settings and preferences",
      "Inventory and equipment",
      "Maps and navigation prompts",
      "Matchmaking and social features",
      "Account, subscription, and payment flows",
      "Accessibility settings and descriptions",
    ],
  },
  {
    icon: "controller",
    title: "Gameplay Content",
    body: "Help players understand objectives, mechanics, progression, and moment-to-moment decisions without interrupting play.",
    items: [
      "Tutorials and onboarding",
      "Missions, quests, and checkpoints",
      "Skills, abilities, items, and weapons",
      "Crafting and upgrade systems",
      "Achievements and trophies",
      "Tooltips and contextual help",
      "Combat and status information",
    ],
  },
  {
    icon: "dialogue",
    title: "Narrative and Dialogue",
    body: "Bring stories, characters, and fictional worlds to life while preserving voice, relationships, continuity, and creative intent.",
    items: [
      "Main and secondary dialogue",
      "Branching conversations",
      "Character barks and narration",
      "Lore and codex entries",
      "Journals, letters, and collectibles",
      "Faction and location descriptions",
      "Dynamic and conditional dialogue",
    ],
  },
  {
    icon: "audio",
    title: "Audio, Subtitles, and Cinematics",
    body: "Coordinate written and spoken language across performance, timing, visuals, and gameplay.",
    items: [
      "Voice-over scripts and dubbing",
      "Cinematics and cutscenes",
      "Subtitles and closed captions",
      "Speaker identification",
      "Audio-cue descriptions",
      "Trailers and gameplay videos",
      "Voice pickups and script revisions",
    ],
  },
];

const technicalChecks = [
  {
    icon: "brackets",
    title: "Variables and Placeholders",
    body: "Protect dynamic values, tags, markup, keys, control characters, and runtime logic while adapting the surrounding language naturally.",
  },
  {
    icon: "grammar",
    title: "Plural, Gender, and Grammar",
    body: "Support language-specific plural forms, grammatical gender, case, formality, and conditional sentence structures.",
  },
  {
    icon: "layout",
    title: "Text Expansion and UI Fit",
    body: "Manage truncation, overflow, line breaks, fixed controls, responsive layouts, subtitle readability, and mobile constraints.",
  },
  {
    icon: "font",
    title: "Fonts and Character Coverage",
    body: "Identify missing glyphs, broken diacritics, fallback-font problems, bidirectional text defects, and inconsistent rendering.",
  },
  {
    icon: "rtl",
    title: "Right-to-Left Experiences",
    body: "Review text direction, interface mirroring, mixed-direction content, punctuation, numerals, subtitle positioning, and navigation behavior.",
  },
  {
    icon: "files",
    title: "Production File Integrity",
    body: "Preserve IDs, structure, formatting, and import requirements across common resource files, custom exports, and proprietary formats.",
  },
];

const contextSources = [
  ["Visual Context", "Screenshots, prototypes, gameplay recordings, storyboards, interface designs, and reference builds show where a string appears."],
  ["String Metadata", "String IDs, screen names, character limits, feature names, speaker data, developer comments, and usage notes clarify function."],
  ["Narrative Context", "Story bibles, character profiles, relationship maps, quest summaries, and dialogue trees preserve continuity and voice."],
  ["Terminology Context", "Approved glossaries identify franchise terms, gameplay mechanics, protected names, and translations that must remain consistent."],
  ["Audio Context", "Pronunciation guides, casting notes, emotional direction, timing requirements, and reference performances support script adaptation."],
  ["Build Context", "Localized builds allow linguists to validate meaning, text fit, sequencing, and player comprehension after integration."],
];

const localizationKit = [
  "Game overview and target audience",
  "Supported platforms and genre",
  "Story synopsis and lore references",
  "Character profiles and relationships",
  "Style, tone, and naming guidance",
  "Existing terminology and translations",
  "Screenshots and gameplay videos",
  "String IDs, metadata, and character limits",
  "Speaker, scene, and emotional context",
  "Variable, tag, and nontranslatable instructions",
  "Pronunciation guidance",
  "Reference builds and delivery specifications",
];

const workflow = [
  ["Scope", "Review content, languages, platforms, schedules, files, audio, testing, and deliverables."],
  ["Prepare", "Assess internationalization, protect technical elements, and organize source content."],
  ["Align", "Build terminology, translation memory, style guidance, and contextual references."],
  ["Localize", "Translate and transcreate with gaming-specialized linguists and content-aware workflows."],
  ["Review", "Validate accuracy, voice, narrative continuity, terminology, culture, and technical treatment."],
  ["Integrate", "Return structured files and coordinate implementation questions with production teams."],
  ["Test", "Review localized builds for linguistic, visual, audio, functional, and contextual defects."],
  ["Release", "Correct, retest, approve, and preserve language assets for future updates."],
];

const aiLanes = [
  {
    tag: "Creative Content",
    title: "Human-Led Creative Localization",
    body: "Narrative dialogue, humor, naming, songs, character-defining moments, and culturally sensitive content receive professional human translation, transcreation, and review.",
    items: ["Character voice", "Narrative continuity", "Creative alternatives", "Market judgment"],
  },
  {
    tag: "Structured Content",
    title: "AI-Assisted Professional Localization",
    body: "Suitable interfaces, repeated systems text, item descriptions, tutorials, and operational updates can combine AI, translation memory, terminology, automated QA, and expert approval.",
    items: ["Approved terminology", "Translation-memory reuse", "Protected elements", "Professional review"],
  },
  {
    tag: "Generated Experiences",
    title: "Multilingual AI Output Evaluation",
    body: "Evaluate representative prompts and outputs for dynamic dialogue, procedural narratives, conversational characters, generated quests, and other AI-native game experiences.",
    items: ["Persona consistency", "Lore adherence", "Safety and toxicity", "Cross-language quality"],
  },
];

const liveStreams = [
  ["Seasonal Event", "New quests, dialogue, UI, and event copy", "Creative review"],
  ["Patch Release", "Changed strings, fixes, and release notes", "In localization"],
  ["Character Pack", "Narrative, items, abilities, and audio", "Voice preparation"],
  ["Hotfix", "Urgent player-facing corrections", "Priority QA"],
];

const subtitleChecks = [
  "Accurate dialogue and complete meaning",
  "Readable timing, segmentation, and line length",
  "Approved speaker names and identification",
  "Meaningful non-dialogue audio cues",
  "Fonts and scripts that support each locale",
  "Placement that avoids critical interface elements",
];

const qaDimensions = [
  {
    icon: "language",
    title: "Linguistic QA",
    body: "Review meaning, fluency, terminology, character voice, narrative continuity, grammar, subtitles, and cultural suitability.",
  },
  {
    icon: "eye",
    title: "Visual and Cosmetic QA",
    body: "Identify truncation, overflow, missing characters, poor line breaks, alignment issues, subtitle placement, and untranslated graphics.",
  },
  {
    icon: "function",
    title: "Functional Localization Testing",
    body: "Check variables, language switching, locale selection, input behavior, date and number display, navigation, and localized assets.",
  },
  {
    icon: "wave",
    title: "Audio and Subtitle QA",
    body: "Evaluate pronunciation, speaker assignment, subtitle synchronization, missing captions, reading speed, cut-off lines, and pickups.",
  },
];

const culturalizationAreas = [
  "Character and location names",
  "Symbols, icons, colors, and gestures",
  "Historical, political, and religious references",
  "Maps, flags, and territorial representations",
  "Humor, stereotypes, and social conventions",
  "Age-sensitive and region-sensitive content",
  "Monetization language and gambling-like mechanics",
  "User-generated content guidance",
];

const platforms = [
  ["PC and Mac", "Interfaces, launchers, downloadable content, achievements, storefront assets, and ongoing updates."],
  ["Console", "Platform terminology, controller references, interface conventions, language requirements, and platform-specific builds."],
  ["Mobile", "iOS and Android content across screen sizes, app-store assets, in-app purchases, notifications, and frequent releases."],
  ["Browser and Cloud", "Account experiences, responsive layouts, service communications, streaming interfaces, and continuous content."],
  ["VR, AR, and Mixed Reality", "Immersive interfaces, spatial instructions, voice interaction, subtitles, tutorials, and safety information."],
  ["Cross-Platform", "Consistent terminology across PC, console, mobile, cloud, and companion experiences with platform-specific adaptation."],
];

const gameTypes = [
  "Action and adventure",
  "Role-playing",
  "Strategy and simulation",
  "Shooters and multiplayer games",
  "Casual and puzzle games",
  "Sports, racing, and fighting games",
  "Survival, horror, and open-world games",
  "Narrative and interactive-fiction games",
  "Educational and children’s games",
  "Free-to-play and live-service titles",
  "Independent games and global franchises",
];

const languageMarkets = [
  ["Western Europe", "French, German, Italian, Spanish, Portuguese, and Dutch"],
  ["Central and Eastern Europe", "Polish, Czech, Hungarian, Romanian, Ukrainian, and other regional languages"],
  ["East Asia", "Simplified Chinese, Traditional Chinese, Japanese, and Korean"],
  ["Southeast Asia", "Thai, Vietnamese, Indonesian, and Malay"],
  ["Middle East and South Asia", "Arabic, Turkish, Hindi, and additional market-specific languages"],
];

const securityControls = [
  ["Confidential Collaboration", "Support unreleased titles, storylines, characters, roadmaps, and launch plans through controlled access and secure exchange."],
  ["Role-Based Access", "Limit content by title, role, language, workflow stage, or asset set so project teams receive only the access they need."],
  ["Language Asset Ownership", "Maintain client-specific translation memory, terminology, style guidance, and approved decisions for future releases."],
  ["Version and Review Control", "Track source changes, releases, approvals, corrections, and reviewer feedback across multilingual production."],
];

const differentiators = [
  ["Connected Creative and Technical Expertise", "Coordinate narrative adaptation, interface localization, engineering, audio, subtitles, terminology, and testing through one program."],
  ["Gaming-Specialized Language Teams", "Select native linguists according to locale, genre, content type, creative requirements, and project needs."],
  ["Context-First Localization", "Give teams access to screenshots, metadata, character references, story materials, terminology, and representative builds."],
  ["AI + Human Flexibility", "Match automation and human expertise to the creative complexity, risk, visibility, and release speed of each content stream."],
  ["Continuous Release Support", "Support a defined launch, ongoing DLC, live operations, or a portfolio of titles through reusable language assets."],
  ["In-Context Quality Assurance", "Identify linguistic, visual, audio, functional, and cultural issues inside the actual player experience."],
];

const faqs = [
  ["What is game localization?", "Video game localization adapts a game for players in another language or market. It can include translation, creative adaptation, culturalization, user-interface localization, technical file processing, voice-over, subtitles, terminology management, and linguistic game testing. The goal is to make every localized version feel natural, understandable, technically correct, and true to the original game."],
  ["What is the difference between game translation and game localization?", "Game translation focuses on converting written or spoken content from one language into another. Game localization adapts the wider player experience, including character voice, humor, cultural references, interface constraints, variables, plural rules, fonts, writing direction, audio timing, platform terminology, and in-context quality."],
  ["What game content can Stepes localize?", "Stepes localizes interfaces, tutorials, dialogue, quests, missions, items, abilities, achievements, lore, cinematics, subtitles, captions, voice scripts, DLC, seasonal events, patch content, monetization text, and other player-facing game assets. Broader marketing, community, player-support, esports, and business content is covered through our Gaming Translation and Localization Services."],
  ["When should game localization begin?", "Localization planning should begin as early as practical, ideally while the game is still being internationalized and interface or content structures can be adjusted. Translation can begin when source content is sufficiently stable, while terminology, localization-kit preparation, and internationalization review can start earlier."],
  ["What is internationalization?", "Internationalization is the process of designing and developing a game so it can support different languages and locales without major engineering changes for each one. It includes separating text from code, supporting Unicode, flexible layouts, plural forms, right-to-left scripts, externalized assets, and localizable sentence structures."],
  ["What files do you need for game localization?", "Stepes can work with common resource formats, spreadsheets, structured files, subtitle formats, voice scripts, and custom exports. Useful supporting assets include string IDs, screenshots, character limits, speaker information, story summaries, glossaries, character profiles, gameplay videos, and test builds."],
  ["What is a game localization kit?", "A game localization kit is the collection of source files, instructions, references, and contextual assets supplied to the localization team. It may include the game overview, story bible, character profiles, glossary, screenshots, speaker information, string metadata, character limits, variables, style guidance, pronunciation references, and technical specifications."],
  ["How do you preserve character voice?", "Stepes uses character profiles, reference dialogue, relationship information, style guidance, narrative context, and dedicated language teams. Language-specific character guidance can document formality, speech patterns, humor, emotional range, preferred terminology, and relationships with other characters."],
  ["How do you maintain lore and terminology?", "We maintain multilingual terminology for character names, locations, factions, items, abilities, ranks, mechanics, and recurring concepts. Approved terms are available to translators and reviewers and are checked throughout production. Translation memory, style guides, query history, and reviewer feedback provide additional continuity."],
  ["Can Stepes use our existing translations?", "Yes. Existing translation memories, glossaries, style guides, localized games, scripts, and approved references can be reviewed and incorporated. Legacy translations may also be assessed for quality, consistency, technical formatting, and continued relevance before reuse."],
  ["How does Stepes handle variables and placeholders?", "Variables, tags, placeholders, keys, markup, and other protected elements are identified during preparation. Automated QA and professional review help confirm that they remain complete and correctly positioned, while linguists adapt the surrounding sentence to the target language."],
  ["Can Stepes localize games developed in Unity or Unreal Engine?", "Stepes can localize content exported from Unity, Unreal Engine, proprietary engines, and other development environments. The workflow depends on how strings, assets, metadata, and builds are managed. File compatibility, import and export requirements, and integration needs are confirmed during assessment."],
  ["What is linguistic game testing?", "Linguistic game testing reviews localized content inside the game or a test build. Testers identify mistranslations, contextual errors, terminology problems, truncated text, missing characters, subtitle defects, incorrect assets, broken variables, and other issues that may not be visible in source files."],
  ["What is the difference between linguistic QA and functional QA?", "Linguistic QA focuses on language, context, terminology, tone, readability, and cultural suitability. Functional QA evaluates whether the game operates correctly. The areas can overlap when a language or locale issue affects functionality, such as a broken variable, unusable button, or text-entry defect."],
  ["Can Stepes support a simultaneous global release?", "Yes. Stepes can structure multilingual teams, terminology, review workflows, production schedules, and testing around a coordinated release. Feasibility depends on content volume, language count, source stability, audio requirements, testing access, approvals, and available parallel production."],
  ["Can you support live-service game localization?", "Yes. Stepes supports recurring localization for patches, events, downloadable content, new characters, dialogue, missions, monetization content, store updates, and maintenance communications. Translation memory, terminology, automation, recurring teams, and release-specific workflows help keep every language aligned."],
  ["How is AI used in game localization?", "AI can assist with suitable high-volume content, translation-memory retrieval, terminology, automated quality checks, consistency analysis, and workflow routing. Creative dialogue, humor, naming, sensitive content, and character-defining material generally require professional human leadership."],
  ["Does Stepes provide game voice-over?", "Yes. Stepes supports multilingual voice-over and dubbing, including script adaptation, casting coordination, recording, synchronization, pickups, file organization, subtitles, and linguistic review. The production model depends on characters, volume, performance needs, languages, synchronization, and schedule."],
  ["Can you localize subtitles and closed captions?", "Yes. Stepes translates and adapts subtitles and captions while accounting for meaning, timing, line breaks, reading speed, speaker identification, sound descriptions, and screen space. Localized subtitles can also be reviewed in context for timing, readability, synchronization, and display."],
  ["Do you support accessibility content?", "Stepes localizes accessibility menus, feature descriptions, instructions, subtitle settings, screen-narration content, input guidance, help materials, and related documentation. We can also review localized text and captions for linguistic clarity and consistency with the accessibility experience designed by the development team."],
  ["Can you review a game localized by another provider?", "Yes. Stepes can provide independent linguistic review, terminology evaluation, sample testing, translation quality assessment, or in-build localization QA for content translated by another provider or your own team."],
  ["Which languages should we localize first?", "The right language priorities depend on platform, genre, audience, community, regional demand, budget, support readiness, and update schedule. Useful indicators include wishlists, store traffic, player data, regional revenue, community activity, competitor coverage, and planned marketing investment."],
  ["How much does game localization cost?", "Pricing depends on source and target languages, word or string volume, content type, creative complexity, translation-memory reuse, engineering, voice-over, subtitles, review stages, testing, platforms, release schedule, turnaround, and ongoing update volume. Stepes provides a detailed quote after reviewing the actual scope."],
  ["How long does game localization take?", "The schedule depends on content volume, language count, creative complexity, voice production, source stability, testing requirements, and the availability of parallel linguists and reviewers. Stepes can develop a phased schedule aligned with development milestones and release dates."],
];

function Icon({ name, size = 23 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const shapes = {
    interface: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 14h3M14 14h3"/></>,
    controller: <><path d="M8 9h8a5 5 0 0 1 4.7 6.7l-.7 2a2 2 0 0 1-3.4.7L15 17H9l-1.6 1.4a2 2 0 0 1-3.4-.7l-.7-2A5 5 0 0 1 8 9Z"/><path d="M8 13v4M6 15h4"/><path d="M16 14h.01M18 16h.01"/></>,
    dialogue: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/></>,
    audio: <><path d="M11 5 6.5 9H3v6h3.5l4.5 4V5Z"/><path d="M15 9a4 4 0 0 1 0 6M17.8 6.5a8 8 0 0 1 0 11"/></>,
    brackets: <><path d="M8 4H5v16h3M16 4h3v16h-3"/><path d="m10 15 4-6"/></>,
    grammar: <><path d="M5 19 10 5l5 14M7 14h6"/><path d="M16 8h3M17.5 6.5v3"/></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M8 10h13"/></>,
    font: <><path d="M4 6V4h10v2M9 4v16M6 20h6"/><path d="m15 17 2-6 2 6M16 15h2"/></>,
    rtl: <><path d="M20 6H8a4 4 0 0 0 0 8h9"/><path d="m14 11 3 3-3 3"/><path d="M4 19h8"/></>,
    files: <><path d="M14 2H6a2 2 0 0 0-2 2v16h12V4l-2-2Z"/><path d="M14 2v4h4"/><path d="M9 11h4M9 15h4"/><path d="M16 8h4v14H8v-2"/></>,
    language: <><path d="M4 5h10M9 3v2M6 9c2 3 5 5 8 6M13 5c-1 5-4 9-9 11"/><path d="m15 20 3-8 3 8M16.2 17h3.6"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    function: <><path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4"/><path d="m8 12 2.5 2.5L16 9"/></>,
    wave: <><path d="M3 12h2l2-5 3 10 3-12 3 14 2-7h3"/></>,
    shield: <><path d="M12 3 4.5 6v5c0 5 3.2 8.2 7.5 10 4.3-1.8 7.5-5 7.5-10V6L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
    memory: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/><path d="M3 8h2M3 12h2M3 16h2M19 8h2M19 12h2M19 16h2"/></>,
    dashboard: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/><path d="M13 14h4M13 17h3"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
  };

  return <svg {...common}>{shapes[name] || shapes.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a className={dark ? "arrowLink arrowLinkDark" : "arrowLink"} href={href}>
      <span>{children}</span><Icon name="arrow" size={17} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, body, align = "left", dark = false }) {
  return (
    <div className={`sectionHeader ${align === "center" ? "sectionHeaderCenter" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {body ? <p className="sectionIntro">{body}</p> : null}
    </div>
  );
}

function GameLocalizationVisual() {
  return (
    <div className="heroVisual" aria-label="Illustrative game localization production workflow">
      <svg viewBox="0 0 620 520" role="img" aria-labelledby="heroVisualTitle heroVisualDesc">
        <title id="heroVisualTitle">Game localization production workflow</title>
        <desc id="heroVisualDesc">A game dialogue string moves through context, terminology, translation, voice, and localization quality assurance.</desc>
        <defs>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#faf7f9" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#3f1f2d" floodOpacity="0.10" />
          </filter>
        </defs>

        <circle cx="504" cy="96" r="78" fill="#FDF2F7" />
        <circle cx="88" cy="430" r="62" fill="#F7F7F8" />
        <path d="M80 143c82-88 192-112 301-74 82 28 132 83 164 158" fill="none" stroke="#E7DDE2" strokeWidth="2" strokeDasharray="7 9" />

        <g filter="url(#softShadow)">
          <rect x="58" y="57" width="504" height="392" rx="28" fill="url(#heroPanel)" stroke="#DDD6DA" />
        </g>
        <rect x="58" y="57" width="504" height="50" rx="28" fill="#251F22" />
        <path d="M58 86h504v21H58z" fill="#251F22" />
        <circle cx="88" cy="82" r="5" fill="#F2A7C6" />
        <circle cx="106" cy="82" r="5" fill="#7C7176" />
        <circle cx="124" cy="82" r="5" fill="#7C7176" />
        <text x="148" y="87" fontSize="13" fontWeight="600" fill="#F6F2F4" fontFamily="Arial, sans-serif">Localized Build · Quest Dialogue</text>
        <rect x="444" y="70" width="94" height="24" rx="12" fill="#C11D63" />
        <text x="491" y="86" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#FFFFFF" fontFamily="Arial, sans-serif">READY FOR QA</text>

        <rect x="82" y="130" width="294" height="116" rx="18" fill="#FFFFFF" stroke="#E4DEE1" />
        <text x="102" y="155" fontSize="11" fontWeight="600" letterSpacing="1.1" fill="#C11D63" fontFamily="Arial, sans-serif">SOURCE + CONTEXT</text>
        <text x="102" y="184" fontSize="17" fontWeight="600" fill="#231F21" fontFamily="Arial, sans-serif">“Hold the gate until dawn.”</text>
        <text x="102" y="210" fontSize="13" fill="#71686D" fontFamily="Arial, sans-serif">Captain Mira · urgent command · final battle</text>
        <rect x="102" y="222" width="98" height="8" rx="4" fill="#E8E4E6" />
        <rect x="208" y="222" width="64" height="8" rx="4" fill="#F2D5E1" />

        <rect x="395" y="130" width="143" height="116" rx="18" fill="#FDF2F7" stroke="#F0D5E0" />
        <text x="415" y="155" fontSize="11" fontWeight="600" letterSpacing="1.1" fill="#C11D63" fontFamily="Arial, sans-serif">LANGUAGE ASSETS</text>
        <circle cx="422" cy="179" r="5" fill="#C11D63" />
        <text x="436" y="184" fontSize="13" fill="#4B4347" fontFamily="Arial, sans-serif">Term approved</text>
        <circle cx="422" cy="205" r="5" fill="#C11D63" />
        <text x="436" y="210" fontSize="13" fill="#4B4347" fontFamily="Arial, sans-serif">Voice aligned</text>
        <circle cx="422" cy="231" r="5" fill="#C11D63" />
        <text x="436" y="236" fontSize="13" fill="#4B4347" fontFamily="Arial, sans-serif">Variable safe</text>

        <rect x="82" y="266" width="456" height="105" rx="18" fill="#251F22" />
        <text x="102" y="291" fontSize="11" fontWeight="600" letterSpacing="1.1" fill="#F2A7C6" fontFamily="Arial, sans-serif">LOCALIZED PLAYER EXPERIENCE</text>
        <text x="102" y="323" fontSize="18" fontWeight="600" fill="#FFFFFF" fontFamily="Arial, sans-serif">« Défendez la porte jusqu’à l’aube. »</text>
        <text x="102" y="348" fontSize="13" fill="#CFC7CB" fontFamily="Arial, sans-serif">Natural command · character voice preserved · UI fit confirmed</text>
        <path d="M477 308h25l8 10-8 10h-25z" fill="none" stroke="#F2A7C6" strokeWidth="1.8" />
        <path d="M485 313v10M480 318h10" stroke="#F2A7C6" strokeWidth="1.8" strokeLinecap="round" />

        <g>
          <rect x="82" y="390" width="137" height="34" rx="17" fill="#FFFFFF" stroke="#DDD6DA" />
          <circle cx="101" cy="407" r="5" fill="#C11D63" />
          <text x="115" y="412" fontSize="12" fontWeight="600" fill="#4B4347" fontFamily="Arial, sans-serif">Context checked</text>
          <rect x="229" y="390" width="137" height="34" rx="17" fill="#FFFFFF" stroke="#DDD6DA" />
          <circle cx="248" cy="407" r="5" fill="#C11D63" />
          <text x="262" y="412" fontSize="12" fontWeight="600" fill="#4B4347" fontFamily="Arial, sans-serif">Voice approved</text>
          <rect x="376" y="390" width="162" height="34" rx="17" fill="#FFFFFF" stroke="#DDD6DA" />
          <circle cx="395" cy="407" r="5" fill="#C11D63" />
          <text x="409" y="412" fontSize="12" fontWeight="600" fill="#4B4347" fontFamily="Arial, sans-serif">Build QA passed</text>
        </g>
      </svg>
      <div className="mobileHeroCard" aria-label="Localized game dialogue example">
        <span className="mobileHeroLabel">LOCALIZED PLAYER EXPERIENCE</span>
        <div className="mobileHeroString">
          <span>Source</span>
          <strong>“Hold the gate until dawn.”</strong>
        </div>
        <div className="mobileHeroArrow"><Icon name="arrow" size={18} /></div>
        <div className="mobileHeroString mobileHeroTarget">
          <span>French</span>
          <strong>« Défendez la porte jusqu’à l’aube. »</strong>
        </div>
        <div className="mobileHeroChecks">
          <span><Icon name="check" size={14} /> Context</span>
          <span><Icon name="check" size={14} /> Voice</span>
          <span><Icon name="check" size={14} /> Build QA</span>
        </div>
      </div>
    </div>
  );
}

function LocalizationWorkbench() {
  return (
    <div className="workbench" aria-label="Illustrative game localization workbench">
      <div className="workbenchTop">
        <div>
          <span className="metaLabel">STRING ID</span>
          <strong>quest_gate_041</strong>
        </div>
        <span className="statusPill">Protected</span>
      </div>
      <div className="sourceBox">
        <span className="metaLabel">SOURCE</span>
        <p>Defend {"{locationName}"} for {"{minutes}"} minutes.</p>
      </div>
      <div className="targetBox">
        <span className="metaLabel">TARGET · GERMAN</span>
        <p>Verteidige {"{locationName}"} {"{minutes}"} Minuten lang.</p>
      </div>
      <div className="workbenchGrid">
        <div>
          <span className="metaLabel">CONTEXT</span>
          <p>Timed objective · HUD</p>
        </div>
        <div>
          <span className="metaLabel">LIMIT</span>
          <p>56 characters</p>
        </div>
        <div>
          <span className="metaLabel">TERM</span>
          <p>Defend · Verteidigen</p>
        </div>
        <div>
          <span className="metaLabel">QA</span>
          <p className="qaPass"><Icon name="check" size={15} /> 8 checks passed</p>
        </div>
      </div>
    </div>
  );
}

function QaReportMockup() {
  return (
    <div className="qaReport" aria-label="Illustrative localization QA issue report">
      <div className="qaHeader">
        <div>
          <span className="metaLabel">LOCALIZATION QA</span>
          <strong>Build 1.8.24 · Japanese</strong>
        </div>
        <span className="statusPill statusReview">In Review</span>
      </div>
      <div className="qaIssue">
        <div className="issueSeverity">HIGH</div>
        <div className="issueContent">
          <strong>Objective text is truncated</strong>
          <p>Quest HUD · Harbor Gate · String quest_gate_041</p>
        </div>
      </div>
      <div className="qaPreview">
        <div className="screenFrame">
          <span>OBJECTIVE</span>
          <strong>港の門を夜明けまで守…</strong>
        </div>
        <div className="recommendation">
          <span className="metaLabel">RECOMMENDED CORRECTION</span>
          <p>夜明けまで港の門を守れ</p>
        </div>
      </div>
      <div className="qaFooter">
        <span>Screenshot attached</span>
        <span>Retest required</span>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className={`faqItem ${open ? "faqOpen" : ""}`}>
      <button
        id={buttonId}
        className="faqButton"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className="faqIcon"><Icon name={open ? "minus" : "plus"} size={19} /></span>
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faqPanel" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function StepesGameLocalizationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepesGamePage">
      <style>{styles}</style>

      <section className="heroSection">
        <div className="container heroGrid">
          <div className="heroCopy">
            <h1>Game Localization Services</h1>
            <p className="heroLead">Create immersive gaming experiences for players in every market with professional video game localization services built around creative intent, technical precision, and real production workflows.</p>
            <p className="heroBody">Stepes helps developers, publishers, and localization teams adapt user interfaces, gameplay content, narrative, voice, cinematics, downloadable content, and multilingual builds. Our AI-enabled workflow connects gaming-specialized linguists, localization engineering, terminology, creative review, and linguistic game testing from source content through release.</p>
            <div className="heroActions">
              <a className="primaryCta" href="https://www.stepes.com/contact-us/">Talk to an Expert <Icon name="arrow" size={18} /></a>
              <a className="secondaryCta" href="https://app.stepes.com/quote/">Request a Quote</a>
            </div>
          </div>
          <GameLocalizationVisual />
        </div>
      </section>

      <section className="proofSection" aria-label="Game localization service highlights">
        <div className="container proofGrid">
          {proofItems.map(([title, body]) => (
            <div className="proofItem" key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section overviewSection" id="localize-the-game">
        <div className="container overviewGrid">
          <div>
            <Eyebrow>COMPLETE PLAYER EXPERIENCE</Eyebrow>
            <h2>Localize the Game, Not Just the Words</h2>
          </div>
          <div className="overviewCopy">
            <p className="largeBody">Game translation converts text or spoken dialogue from one language into another. Game localization goes further. It adapts the complete experience so players can understand the rules, connect with the story, navigate the interface, recognize cultural cues, and remain immersed in the world of the game.</p>
            <p>A technically correct translation can still fail if it does not fit the interface, preserve a character’s personality, reflect established lore, account for variables, or make sense within the moment of play. Successful localization therefore requires creative language expertise, production context, technical controls, and testing after content is integrated into the game.</p>
            <div className="overviewPrinciples">
              <div><strong>Preserve Creative Intent</strong><span>Adapt voice, humor, emotion, lore, and narrative choices without losing what makes the original distinctive.</span></div>
              <div><strong>Protect Game Logic</strong><span>Keep variables, placeholders, tags, string IDs, markup, and conditional text intact.</span></div>
              <div><strong>Design for Each Locale</strong><span>Account for text expansion, writing direction, fonts, grammar, formality, numbers, and dates.</span></div>
              <div><strong>Validate the Experience</strong><span>Review localized content in context before release.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section softSection" id="game-content">
        <div className="container">
          <SectionHeader
            eyebrow="IN-GAME CONTENT"
            title="Localize Every Part of the Player Experience"
            body="Game language appears throughout menus, worlds, characters, tutorials, systems, cinematics, and live content. Stepes supports the complete in-game content environment while maintaining consistency across connected assets and releases."
            align="center"
          />
          <div className="contentGroupGrid">
            {gameContentGroups.map((group) => (
              <article className="contentGroup" key={group.title}>
                <div className="iconSurface"><Icon name={group.icon} /></div>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
                <ul className="cleanList">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="releaseBand">
            <div>
              <strong>Launches, DLC, and Live Content</strong>
              <p>Keep launch-day content, patches, hotfixes, downloadable content, expansion packs, seasonal events, battle passes, store content, and in-game announcements aligned across languages.</p>
            </div>
            <ArrowLink href={`${pageUrl}#continuous-localization`}>Explore Continuous Localization</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section darkSection" id="creative-localization">
        <div className="container">
          <div className="darkIntroGrid">
            <div>
              <Eyebrow dark>CREATIVE AND NARRATIVE LOCALIZATION</Eyebrow>
              <h2>Protect the Story, Voice, and World Behind Your Game</h2>
            </div>
            <div>
              <p className="largeBody lightBody">Players experience a game through tone, personality, rhythm, humor, relationships, and cultural references—not only through literal meaning. Creative localization preserves these elements while allowing the target language to feel naturally written for its audience.</p>
              <p>Stepes assigns professional native linguists with relevant gaming, genre, narrative, and cultural experience. Depending on the title, this may involve teams familiar with role-playing systems, military terminology, fantasy world-building, sports language, casual mobile experiences, science fiction, historical settings, or youth-oriented content.</p>
            </div>
          </div>
          <div className="narrativeRows">
            <article>
              <span className="darkIcon"><Icon name="dialogue" /></span>
              <div>
                <h3>Character Voice</h3>
                <p>Maintain personality, emotional range, age, social background, formality, relationships, verbal habits, humor, pronouns, and development over time.</p>
              </div>
            </article>
            <article>
              <span className="darkIcon"><Icon name="link" /></span>
              <div>
                <h3>Narrative Continuity</h3>
                <p>Track plot dependencies, branching dialogue, player state, hidden information, relationships, optional quests, prior events, and future revelations.</p>
              </div>
            </article>
            <article>
              <span className="darkIcon"><Icon name="language" /></span>
              <div>
                <h3>Humor and Transcreation</h3>
                <p>Reconstruct jokes, wordplay, idioms, rhymes, catchphrases, clues, names, and emotional effects when literal translation cannot preserve the experience.</p>
              </div>
            </article>
            <article>
              <span className="darkIcon"><Icon name="memory" /></span>
              <div>
                <h3>Lore and Fictional Terminology</h3>
                <p>Maintain approved language for characters, locations, factions, ranks, items, abilities, creatures, technologies, currencies, histories, and franchise conventions.</p>
              </div>
            </article>
          </div>
          <ArrowLink href="https://www.stepes.com/terminology-management/" dark>Explore Terminology Management</ArrowLink>
        </div>
      </section>

      <section className="section" id="technical-localization">
        <div className="container technicalGrid">
          <div className="technicalCopy">
            <Eyebrow>LOCALIZATION ENGINEERING</Eyebrow>
            <h2>Production-Ready Content Without Compromising Game Logic</h2>
            <p className="sectionIntro">Game files contain more than translatable words. They may include IDs, variables, placeholders, markup, escape sequences, conditional logic, formatting instructions, and protected code. Stepes localization engineering helps prepare, process, and return multilingual content without damaging the underlying structure.</p>
            <div className="technicalList">
              {technicalChecks.map((item) => (
                <div className="technicalRow" key={item.title}>
                  <span className="lineIcon"><Icon name={item.icon} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <ArrowLink href="https://www.stepes.com/software-localization-services/">Explore Software Localization Services</ArrowLink>
          </div>
          <div className="stickyMockup">
            <LocalizationWorkbench />
            <div className="formatPanel">
              <span className="metaLabel">COMMON INPUTS</span>
              <div className="formatChips">
                {["JSON", "XML", "XLIFF", "CSV", "XLSX", "YAML", "PO/POT", "RESX", "Strings", "Subtitles", "Custom"].map((format) => <span key={format}>{format}</span>)}
              </div>
              <p>Compatibility, technical rules, integrations, and expected outputs are confirmed during project assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section softSection" id="localization-context">
        <div className="container">
          <SectionHeader
            eyebrow="CONTEXT-FIRST WORKFLOWS"
            title="Give Linguists the Information Behind Every String"
            body="A short string can have several valid translations depending on who says it, where it appears, what action it performs, and what the player already knows. Stepes connects source content with the production context needed to make the right decision."
          />
          <div className="contextGrid">
            {contextSources.map(([title, body]) => (
              <article className="contextRow" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="kitPanel">
            <div className="kitIntro">
              <Eyebrow>LOCALIZATION KIT</Eyebrow>
              <h2>Build a Strong Foundation Before Production Scales</h2>
              <p>A well-prepared localization kit improves quality, reduces questions, and helps language teams make better decisions earlier. A title does not need perfect documentation before localization can begin, but the most important ambiguities and constraints should be addressed before they affect thousands of strings.</p>
            </div>
            <ul className="kitList">
              {localizationKit.map((item) => <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section workflowSection" id="workflow">
        <div className="container">
          <SectionHeader
            title="From Source Content to a Release-Ready Build"
            body="Every title has a different content architecture, development schedule, quality target, and release model. Stepes configures the workflow around your platforms, languages, production environment, review responsibilities, and launch requirements."
            align="center"
          />
          <ol className="workflowGrid">
            {workflow.map(([title, body], index) => (
              <li key={title}>
                <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section blushSection" id="ai-human-localization">
        <div className="container">
          <SectionHeader
            eyebrow="AI + HUMAN GAME LOCALIZATION"
            title="Apply the Right Workflow to Every Content Type"
            body="AI can improve speed, consistency, routing, and scalability, but narrative dialogue, repeated system text, urgent updates, and dynamically generated content do not present the same creative or commercial risk. Stepes uses a content-aware model rather than applying one process to the entire game."
          />
          <div className="aiLaneGrid">
            {aiLanes.map((lane) => (
              <article className="aiLane" key={lane.title}>
                <span className="laneTag">{lane.tag}</span>
                <h3>{lane.title}</h3>
                <p>{lane.body}</p>
                <ul className="quietList">
                  {lane.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="inlineLinks">
            <ArrowLink href="https://www.stepes.com/ai-machine-learning-translation-services/">AI and Machine Learning Translation Services</ArrowLink>
            <ArrowLink href="https://www.stepes.com/multilingual-llm-evaluation-services/">Multilingual LLM Evaluation</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section" id="continuous-localization">
        <div className="container liveGrid">
          <div className="liveCopy">
            <Eyebrow>CONTINUOUS LOCALIZATION</Eyebrow>
            <h2>Keep Every Language Current With Every Release</h2>
            <p className="sectionIntro">For live-service titles, localization does not end at launch. New content may be released weekly, daily, or in response to urgent gameplay and service needs. Stepes helps teams establish a continuous localization workflow that keeps languages current without rebuilding the process for every update.</p>
            <div className="liveFeatures">
              <div><strong>Separate New and Changed Content</strong><span>Use translation memory and source-change analysis to focus effort on what genuinely requires work.</span></div>
              <div><strong>Match Review to Release Risk</strong><span>Route narrative, monetization, safety, and routine system content through appropriate approval paths.</span></div>
              <div><strong>Support Branches and Versions</strong><span>Organize production by title, branch, release, platform, content stream, language, and status.</span></div>
              <div><strong>Connect Localization to Development</strong><span>Use structured exports, APIs, automation, and recurring delivery processes where appropriate.</span></div>
            </div>
            <ArrowLink href="https://www.stepes.com/developers/software-localization-api/">Explore the Software Localization API</ArrowLink>
          </div>
          <div className="releaseBoard" aria-label="Illustrative live-service localization board">
            <div className="releaseBoardHeader">
              <div>
                <span className="metaLabel">LIVE RELEASE STREAM</span>
                <strong>Global Content Queue</strong>
              </div>
              <span className="statusPill">Multilingual</span>
            </div>
            <div className="streamRows">
              {liveStreams.map(([name, content, status], index) => (
                <div className="streamRow" key={name}>
                  <span className={`streamDot dot${index + 1}`} />
                  <div><strong>{name}</strong><p>{content}</p></div>
                  <span>{status}</span>
                </div>
              ))}
            </div>
            <div className="releaseBoardFooter">
              <span>Translation memory synced</span>
              <span>Terminology current</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section darkSection mediaSection" id="voice-subtitles">
        <div className="container">
          <div className="mediaGrid">
            <div>
              <Eyebrow dark>VOICE, SUBTITLES, AND ACCESSIBILITY</Eyebrow>
              <h2>Bring Characters and Critical Audio Information to Every Player</h2>
              <p className="largeBody lightBody">Voice performance shapes character identity, emotion, humor, tension, and immersion. Subtitles and captions must communicate dialogue and meaningful audio within limited time and screen space.</p>
              <p>Stepes can connect script adaptation, voice production, subtitles, captions, pronunciation, synchronization, pickups, and final linguistic review while preserving consistency with the game’s terminology and narrative.</p>
              <div className="inlineLinks darkLinks">
                <ArrowLink href="https://www.stepes.com/voice-over-services/" dark>Voice-Over Services</ArrowLink>
                <ArrowLink href="https://www.stepes.com/multimedia-translation-services/" dark>Multimedia Localization</ArrowLink>
              </div>
            </div>
            <div className="mediaPanels">
              <article>
                <h3>Performance-Aware Voice Localization</h3>
                <p>Adapt scripts for natural speech, character voice, emotional intent, timing, synchronization, breath, combat efforts, pronunciation, and regional audience expectations.</p>
                <ul className="darkList">
                  <li>Casting and voice direction</li>
                  <li>Studio or remote recording</li>
                  <li>Editing, segmentation, and asset organization</li>
                  <li>Pickups, retakes, and linguistic review</li>
                </ul>
              </article>
              <article>
                <h3>Accessibility-Aware Subtitles and Captions</h3>
                <p>Support players who rely on text by preserving dialogue, speaker information, significant audio cues, readability, timing, and locale-appropriate display.</p>
                <ul className="darkList">
                  {subtitleChecks.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
          <div className="voiceGovernance">
            <span className="darkIcon"><Icon name="shield" /></span>
            <div>
              <h3>Responsible AI Voice Governance</h3>
              <p>When AI-supported voice is part of the production model, the workflow should clearly document performer consent, permitted uses, covered languages and assets, derivative rights, access controls, retention, disclosure, human review, and final approval.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="localization-testing">
        <div className="container qaGrid">
          <div className="qaCopy">
            <Eyebrow>LINGUISTIC GAME TESTING</Eyebrow>
            <h2>Test the Localized Experience, Not Just the Translation File</h2>
            <p className="sectionIntro">Linguistic game testing and localization QA (LQA) reveal problems that translation files alone cannot show. Content can be linguistically accurate and still fail after integration. Context, layout, audio, gameplay, and runtime behavior may reveal issues that were impossible to identify in a spreadsheet or resource file.</p>
            <div className="qaDimensionGrid">
              {qaDimensions.map((item) => (
                <article key={item.title}>
                  <span className="lineIcon"><Icon name={item.icon} /></span>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </article>
              ))}
            </div>
            <p>Defects can be documented with language, build, platform, location, string ID, category, severity, reproduction steps, screenshots or video, recommended correction, resolution status, and retest results.</p>
            <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</ArrowLink>
          </div>
          <QaReportMockup />
        </div>
      </section>

      <section className="section softSection" id="culturalization">
        <div className="container culturalGrid">
          <div>
            <Eyebrow>MARKET READINESS</Eyebrow>
            <h2>Culturalization That Supports Informed Creative Decisions</h2>
            <p className="sectionIntro">Language is only one part of how players interpret a game. Images, symbols, character designs, gestures, stories, historical references, political concepts, and social norms may carry different meanings across markets.</p>
            <p>Stepes can review content that could distract, confuse, offend, or create avoidable market risk. Findings are provided as categorized observations and recommendations, while final creative and publishing decisions remain with your team.</p>
          </div>
          <div className="culturalList">
            {culturalizationAreas.map((item) => <div key={item}><span /><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="platforms">
        <div className="container">
          <SectionHeader
            title="Adapt Localization to Each Platform Environment"
            body="Stepes aligns file handling, interface constraints, terminology, testing, and release workflows with the way each game is developed, distributed, and played."
            align="center"
          />
          <div className="platformGrid">
            {platforms.map(([title, body]) => (
              <article key={title}><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <div className="gameTypeBand">
            <h3>Adaptable Across Genres and Release Models</h3>
            <div className="tagCloud">
              {gameTypes.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section blushSection" id="languages">
        <div className="container languageGrid">
          <div>
            <Eyebrow>GLOBAL LANGUAGE STRATEGY</Eyebrow>
            <h2>Prioritize Languages Around Players and Release Capacity</h2>
            <p className="sectionIntro">A game does not necessarily need to launch in every possible language at once. The right strategy considers player demand, genre, platform, regional opportunity, community signals, production cost, support readiness, and the content that must remain current after launch.</p>
            <p>Your language plan can be informed by player and website traffic, wishlists, regional revenue, community activity, genre performance, competitor coverage, platform availability, marketing plans, support readiness, content volume, audio requirements, and expected update frequency.</p>
            <ArrowLink href="https://www.stepes.com/translation-languages/">Explore 100+ Translation Languages</ArrowLink>
          </div>
          <div className="languagePanel">
            <span className="metaLabel">GLOBAL GAME LANGUAGE COVERAGE</span>
            <div className="languageMarketList">
              {languageMarkets.map(([region, coverage]) => (
                <div key={region}>
                  <strong>{region}</strong>
                  <span>{coverage}</span>
                </div>
              ))}
            </div>
            <p>Regional variants matter. Latin American Spanish is not interchangeable with Spanish for Spain, just as Brazilian Portuguese differs from European Portuguese and Traditional Chinese requirements vary by market.</p>
          </div>
        </div>
      </section>

      <section className="section" id="security-language-assets">
        <div className="container">
          <SectionHeader
            eyebrow="SECURITY AND CONTINUITY"
            title="Protect Prerelease Assets and Build Language Value Over Time"
            body="Unreleased games may contain valuable intellectual property, confidential storylines, proprietary mechanics, product roadmaps, and launch plans. A strong program protects that content while preserving approved language decisions for every future release."
          />
          <div className="securityGrid">
            {securityControls.map(([title, body], index) => (
              <article key={title}>
                <span className="securityIcon"><Icon name={index < 2 ? "shield" : index === 2 ? "memory" : "files"} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="assetBand">
            <div>
              <h3>Reusable Language Assets</h3>
              <p>Translation memory, approved terminology, language-specific style guides, query history, reviewer decisions, and defect records help each release become more consistent and efficient.</p>
            </div>
            <div className="inlineLinks">
              <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
              <ArrowLink href="https://www.stepes.com/security/">Enterprise Security</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section softSection" id="program-visibility">
        <div className="container visibilityGrid">
          <div>
            <Eyebrow>PROGRAM VISIBILITY</Eyebrow>
            <h2>Coordinate Languages, Releases, Reviews, and Delivery</h2>
            <p className="sectionIntro">Localization managers need visibility into content, deadlines, approvals, language assets, costs, and outstanding issues. Stepes provides centralized tools for managing multilingual work across titles and releases.</p>
          </div>
          <div className="visibilityRows">
            <article>
              <span className="lineIcon"><Icon name="dashboard" /></span>
              <div><h3>Customer Translation Portal</h3><p>Submit projects, organize files, manage users, track status, review deliverables, and maintain visibility across ongoing work.</p><ArrowLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</ArrowLink></div>
            </article>
            <article>
              <span className="lineIcon"><Icon name="link" /></span>
              <div><h3>Workflow Automation</h3><p>Configure repeatable intake, localization, review, approval, quality-control, and delivery processes.</p><ArrowLink href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation</ArrowLink></div>
            </article>
            <article>
              <span className="lineIcon"><Icon name="function" /></span>
              <div><h3>Reporting and Analytics</h3><p>Track multilingual program performance across titles, languages, content types, turnaround, volume, and operational dimensions.</p><ArrowLink href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics</ArrowLink></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="why-stepes">
        <div className="container">
          <SectionHeader
            title="A Connected Production Partner for Game Localization"
            body="Build a localization program that combines creative language, technical discipline, contextual workflows, reusable assets, and in-build quality assurance."
            align="center"
          />
          <div className="whyGrid">
            {differentiators.map(([title, body]) => (
              <article key={title}><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystemSection" id="gaming-ecosystem">
        <div className="container ecosystemGrid">
          <div className="ecosystemCopy">
            <Eyebrow dark>BEYOND THE GAME</Eyebrow>
            <h2>Connect the Localized Game to the Wider Gaming Content Ecosystem</h2>
            <p>This page focuses on the specialized production workflow for localizing the game itself. Gaming companies also need multilingual marketing, store pages, websites, community communications, player support, esports, legal content, and enterprise materials.</p>
            <ArrowLink href="https://www.stepes.com/gaming-translation-services/" dark>Explore Gaming Translation and Localization Services</ArrowLink>
          </div>
          <div className="ecosystemVisual" aria-hidden="true">
            <div className="ecosystemCenter">GAME</div>
            <span className="node node1">Marketing</span>
            <span className="node node2">Community</span>
            <span className="node node3">Player Support</span>
            <span className="node node4">Esports</span>
            <span className="node node5">Business Content</span>
          </div>
        </div>
      </section>

      <section className="section faqSection" id="faqs">
        <div className="container faqGrid">
          <div className="faqIntro">
            <Eyebrow>GAME LOCALIZATION FAQS</Eyebrow>
            <h2>Plan Your Game Localization Program With Confidence</h2>
            <p>Explore common questions about production planning, creative adaptation, engineering, AI, voice, testing, language strategy, cost, and timing.</p>
            <a className="secondaryCta faqContact" href="https://www.stepes.com/contact-us/">Ask Our Game Localization Team</a>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer], index) => (
              <FAQItem
                key={question}
                question={question}
                answer={answer}
                index={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="finalCtaSection">
        <div className="container finalCtaGrid">
          <div>
            <h2>Bring Your Game to Global Players</h2>
            <p>Build a localization program that protects creative intent, supports your development workflow, and delivers a polished player experience in every language. Share your platforms, target markets, content volume, release model, audio requirements, and testing needs.</p>
          </div>
          <div className="finalActions">
            <a className="primaryCta" href="https://www.stepes.com/contact-us/">Talk to a Game Localization Expert <Icon name="arrow" size={18} /></a>
            <a className="darkSecondaryCta" href="https://app.stepes.com/quote/">Request a Localization Quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --magenta-deep: #7A1542;
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #231F21;
    --ink-2: #4B4347;
    --muted: #71686D;
    --line: #E1DCDF;
    --line-dark: #4B4246;
    --soft: #F7F7F8;
    --dark: #251F22;
    --dark-2: #30292D;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .stepesGamePage {
    width: 100%;
    overflow-x: hidden;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
  }

  .stepesGamePage h1,
  .stepesGamePage h2,
  .stepesGamePage h3,
  .stepesGamePage p { margin-top: 0; }

  .stepesGamePage h1,
  .stepesGamePage h2,
  .stepesGamePage h3 { color: inherit; font-weight: 600; letter-spacing: -0.025em; }
  .stepesGamePage h1 { margin-bottom: 24px; font-size: 48px; line-height: 1.08; }
  .stepesGamePage h2 { margin-bottom: 24px; font-size: 36px; line-height: 1.16; }
  .stepesGamePage h3 { margin-bottom: 12px; font-size: 24px; line-height: 1.28; }
  .stepesGamePage p { margin-bottom: 20px; color: var(--ink-2); font-size: 16px; }
  .stepesGamePage a { color: inherit; text-decoration: none; }
  .stepesGamePage img,
  .stepesGamePage svg { max-width: 100%; }
  .stepesGamePage section,
  .stepesGamePage .container,
  .stepesGamePage [class*="Grid"],
  .stepesGamePage article,
  .stepesGamePage article > div,
  .stepesGamePage li,
  .stepesGamePage li > div { min-width: 0; }
  .stepesGamePage ul, .stepesGamePage ol { margin: 0; padding: 0; }

  .container { width: min(100%, 1392px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding: 96px 0; }
  .softSection { background: var(--soft); }
  .blushSection { background: var(--blush); }
  .darkSection { background: var(--dark); color: var(--white); }
  .darkSection p { color: #D7D0D3; }

  .eyebrow {
    margin-bottom: 18px;
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase;
  }
  .eyebrowDark { color: var(--pink-light) !important; }

  .sectionHeader { max-width: 820px; margin-bottom: 52px; }
  .sectionHeaderCenter { margin-left: auto; margin-right: auto; text-align: center; }
  .sectionHeader h2 { max-width: 780px; }
  .sectionHeaderCenter h2, .sectionHeaderCenter .sectionIntro { margin-left: auto; margin-right: auto; }
  .sectionIntro { max-width: 820px; font-size: 18px !important; line-height: 1.7; }
  .largeBody { font-size: 18px !important; line-height: 1.7; }
  .lightBody { color: #F2EDEF !important; }

  .primaryCta,
  .primaryCta:link,
  .primaryCta:visited,
  .primaryCta:hover,
  .primaryCta:active,
  .primaryCta:focus,
  .primaryCta:focus-visible {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 24px;
    border: 1px solid var(--magenta);
    border-radius: 999px;
    background: var(--magenta);
    color: #FFFFFF !important;
    font-size: 16px;
    font-weight: 600;
    max-width: 100%;
    line-height: 1.3;
    text-align: center;
    white-space: normal;
    transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
  }
  .primaryCta *,
  .primaryCta:link *,
  .primaryCta:visited *,
  .primaryCta:hover *,
  .primaryCta:active *,
  .primaryCta:focus *,
  .primaryCta:focus-visible * { color: #FFFFFF !important; fill: none; stroke: #FFFFFF !important; }
  .primaryCta:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 26px rgba(122,21,66,.18); }
  .primaryCta:focus-visible, .secondaryCta:focus-visible, .darkSecondaryCta:focus-visible, .arrowLink:focus-visible, .faqButton:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }

  .secondaryCta,
  .secondaryCta:link,
  .secondaryCta:visited {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    padding: 13px 24px;
    border: 1px solid #CFC7CB;
    border-radius: 999px;
    background: #FFFFFF;
    color: var(--ink) !important;
    font-size: 16px;
    max-width: 100%;
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
    white-space: normal;
    transition: border-color .2s ease, transform .2s ease;
  }
  .secondaryCta:hover { border-color: var(--magenta); transform: translateY(-1px); }

  .darkSecondaryCta,
  .darkSecondaryCta:link,
  .darkSecondaryCta:visited {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    padding: 13px 24px;
    border: 1px solid #665B60;
    border-radius: 999px;
    background: transparent;
    max-width: 100%;
    color: #FFFFFF !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
    white-space: normal;
  }
  .darkSecondaryCta:hover { border-color: var(--pink-light); }

  .arrowLink {
    display: inline-flex;
    max-width: 100%;
    min-height: 44px;
    align-items: center;
    gap: 8px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }
  .arrowLink span { min-width: 0; }
  .arrowLink svg { flex: 0 0 auto; }
  .arrowLink svg { transition: transform .2s ease; }
  .arrowLink:hover svg { transform: translateX(4px); }
  .arrowLinkDark { color: var(--pink-light) !important; }
  .inlineLinks { display: flex; flex-wrap: wrap; gap: 16px 32px; margin-top: 30px; }

  .heroSection { padding: 102px 0 94px; background: #FFFFFF; }
  .heroGrid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(480px, 1fr); align-items: center; gap: 56px; }
  .heroCopy { max-width: 650px; }
  .heroLead { max-width: 630px; margin-bottom: 18px !important; color: var(--ink) !important; font-size: 20px !important; line-height: 1.55; }
  .heroBody { max-width: 640px; font-size: 17px !important; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
  .heroVisual { width: 100%; min-width: 0; }
  .heroVisual > svg { display: block; width: 100%; height: auto; }
  .mobileHeroCard { display: none; }

  .proofSection { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
  .proofGrid { display: grid; grid-template-columns: repeat(5, 1fr); }
  .proofItem { min-height: 126px; padding: 28px 22px; border-right: 1px solid var(--line); }
  .proofItem:first-child { padding-left: 0; }
  .proofItem:last-child { padding-right: 0; border-right: 0; }
  .proofItem strong { display: block; margin-bottom: 6px; font-size: 16px; font-weight: 600; line-height: 1.35; }
  .proofItem span { display: block; color: var(--muted); font-size: 16px; line-height: 1.5; }

  .overviewGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 86px; align-items: start; }
  .overviewGrid > div:first-child { position: sticky; top: 32px; }
  .overviewCopy { max-width: 800px; }
  .overviewPrinciples { display: grid; grid-template-columns: 1fr 1fr; margin-top: 36px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .overviewPrinciples > div { padding: 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .overviewPrinciples strong { display: block; margin-bottom: 7px; font-size: 17px; font-weight: 600; }
  .overviewPrinciples span { display: block; color: var(--muted); font-size: 16px; line-height: 1.58; }

  .contentGroupGrid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .contentGroup { padding: 38px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,255,255,.66); }
  .iconSurface { display: inline-flex; width: 48px; height: 48px; align-items: center; justify-content: center; margin-bottom: 22px; border-radius: 15px; background: #FFFFFF; color: var(--magenta); border: 1px solid #E7DFE3; }
  .contentGroup p { max-width: 530px; }
  .cleanList { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 24px; list-style: none; margin-top: 22px !important; }
  .cleanList li { position: relative; padding-left: 16px; color: var(--ink-2); font-size: 16px; }
  .cleanList li::before { content: ""; position: absolute; left: 0; top: .7em; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); }
  .releaseBand { display: flex; align-items: center; justify-content: space-between; gap: 36px; margin-top: 36px; padding: 28px 32px; border: 1px solid var(--line); border-radius: 22px; background: #FFFFFF; }
  .releaseBand > div { max-width: 760px; }
  .releaseBand strong { display: block; margin-bottom: 6px; font-size: 18px; }
  .releaseBand p { margin-bottom: 0; }

  .darkIntroGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 84px; align-items: start; }
  .darkIntroGrid h2 { max-width: 520px; }
  .narrativeRows { display: grid; grid-template-columns: 1fr 1fr; margin: 56px 0 26px; border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
  .narrativeRows article { display: grid; grid-template-columns: 50px 1fr; gap: 20px; padding: 34px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
  .darkIcon { display: inline-flex; width: 44px; height: 44px; align-items: center; justify-content: center; border-radius: 14px; background: #382F34; color: var(--pink-light); }
  .narrativeRows h3 { font-size: 22px; }
  .narrativeRows p { margin-bottom: 0; }

  .technicalGrid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); gap: 76px; align-items: start; }
  .technicalCopy > h2 { max-width: 680px; }
  .technicalList { margin: 42px 0 28px; border-top: 1px solid var(--line); }
  .technicalRow { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .technicalRow h3 { margin-bottom: 6px; font-size: 20px; }
  .technicalRow p { margin-bottom: 0; }
  .lineIcon { display: inline-flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 12px; background: var(--soft); color: var(--magenta); border: 1px solid #E9E4E6; }
  .stickyMockup { position: sticky; top: 30px; }
  .workbench { overflow: hidden; border: 1px solid #DCD4D8; border-radius: 28px; background: #FFFFFF; box-shadow: 0 24px 54px rgba(55,37,45,.10); }
  .workbenchTop, .qaHeader { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 22px 24px; border-bottom: 1px solid var(--line); background: #FBFAFA; }
  .workbenchTop strong, .qaHeader strong { display: block; color: var(--ink); font-size: 16px; font-weight: 600; }
  .metaLabel { display: block; margin-bottom: 5px; color: var(--magenta); font-size: 11px; font-weight: 600; line-height: 1.3; letter-spacing: .12em; text-transform: uppercase; }
  .statusPill { display: inline-flex; min-height: 28px; align-items: center; padding: 5px 11px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 12px; font-weight: 600; white-space: nowrap; }
  .sourceBox, .targetBox { padding: 22px 24px; border-bottom: 1px solid var(--line); }
  .targetBox { background: #2A2427; }
  .sourceBox p, .targetBox p { margin-bottom: 0; font-size: 17px; line-height: 1.5; overflow-wrap: anywhere; }
  .targetBox p { color: #FFFFFF; }
  .targetBox .metaLabel { color: var(--pink-light); }
  .workbenchGrid { display: grid; grid-template-columns: 1fr 1fr; }
  .workbenchGrid > div { min-height: 95px; padding: 18px 20px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .workbenchGrid > div:nth-child(2n) { border-right: 0; }
  .workbenchGrid > div:nth-last-child(-n+2) { border-bottom: 0; }
  .workbenchGrid p { margin-bottom: 0; color: var(--ink-2); font-size: 14px; line-height: 1.45; overflow-wrap: anywhere; }
  .qaPass { display: flex; align-items: center; gap: 5px; color: #286746 !important; font-weight: 600; }
  .formatPanel { margin-top: 22px; padding: 24px; border: 1px solid var(--line); border-radius: 22px; background: var(--soft); }
  .formatChips { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 16px; }
  .formatChips span { padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; background: #FFFFFF; color: var(--ink-2); font-size: 13px; font-weight: 600; }
  .formatPanel p { margin-bottom: 0; font-size: 16px; }

  .contextGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .contextRow { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,255,255,.62); }
  .contextRow h3 { font-size: 20px; }
  .contextRow p { margin-bottom: 0; }
  .kitPanel { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; margin-top: 48px; padding: 44px; border-radius: 28px; background: #FFFFFF; border: 1px solid var(--line); }
  .kitIntro h2 { font-size: 30px; }
  .kitList { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 24px; list-style: none; }
  .kitList li { display: grid; grid-template-columns: 21px 1fr; gap: 10px; align-items: start; color: var(--ink-2); font-size: 16px; }
  .kitList svg { margin-top: 4px; color: var(--magenta); }

  .workflowSection { background: #FFFFFF; }
  .workflowGrid { display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .workflowGrid li { min-height: 250px; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .stepNumber { display: block; margin-bottom: 36px; color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .1em; }
  .workflowGrid h3 { font-size: 21px; }
  .workflowGrid p { margin-bottom: 0; }

  .aiLaneGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #E6CFD9; border-left: 1px solid #E6CFD9; }
  .aiLane { padding: 34px; border-right: 1px solid #E6CFD9; border-bottom: 1px solid #E6CFD9; background: rgba(255,255,255,.58); }
  .laneTag { display: inline-block; margin-bottom: 24px; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .aiLane h3 { min-height: 62px; font-size: 22px; }
  .quietList { list-style: none; margin-top: 22px !important; padding-top: 18px !important; border-top: 1px solid #E6CFD9; }
  .quietList li { padding: 7px 0; color: var(--ink-2); font-size: 16px; }

  .liveGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 78px; align-items: center; }
  .liveFeatures { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 30px; margin: 36px 0 26px; }
  .liveFeatures strong { display: block; margin-bottom: 6px; font-size: 17px; }
  .liveFeatures span { display: block; color: var(--muted); font-size: 16px; line-height: 1.58; }
  .releaseBoard { overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: #FFFFFF; box-shadow: 0 22px 50px rgba(55,37,45,.09); }
  .releaseBoardHeader { display: flex; align-items: center; justify-content: space-between; padding: 24px 26px; border-bottom: 1px solid var(--line); background: var(--soft); }
  .releaseBoardHeader strong { display: block; font-size: 17px; }
  .streamRows { padding: 6px 26px; }
  .streamRow { display: grid; grid-template-columns: 12px 1fr auto; gap: 14px; align-items: center; padding: 19px 0; border-bottom: 1px solid var(--line); }
  .streamRow:last-child { border-bottom: 0; }
  .streamDot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
  .dot2 { background: #8E6678; }.dot3 { background: #B890A1; }.dot4 { background: #51464B; }
  .streamRow strong { display: block; font-size: 16px; }
  .streamRow p { margin-bottom: 0; color: var(--muted); font-size: 16px; line-height: 1.5; }
  .streamRow > span:last-child { color: var(--ink-2); font-size: 13px; font-weight: 600; text-align: right; }
  .releaseBoardFooter { display: flex; justify-content: space-between; gap: 12px; padding: 18px 26px; border-top: 1px solid var(--line); background: #FBFAFA; color: var(--muted); font-size: 13px; }

  .mediaSection { padding-bottom: 86px; }
  .mediaGrid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 74px; }
  .mediaPanels { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
  .mediaPanels article { padding: 32px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
  .mediaPanels h3 { font-size: 21px; }
  .darkList { list-style: none; margin-top: 22px !important; }
  .darkList li { position: relative; padding: 7px 0 7px 16px; color: #D7D0D3; font-size: 16px; }
  .darkList li::before { content: ""; position: absolute; top: .82em; left: 0; width: 5px; height: 5px; border-radius: 50%; background: var(--pink-light); }
  .voiceGovernance { display: grid; grid-template-columns: 48px 1fr; gap: 20px; align-items: start; margin-top: 42px; padding: 28px 30px; border: 1px solid var(--line-dark); border-radius: 22px; background: var(--dark-2); }
  .voiceGovernance h3 { margin-bottom: 7px; font-size: 20px; }
  .voiceGovernance p { margin-bottom: 0; }

  .qaGrid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 76px; align-items: center; }
  .qaDimensionGrid { display: grid; grid-template-columns: 1fr 1fr; margin: 38px 0 28px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .qaDimensionGrid article { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .qaDimensionGrid h3 { margin-bottom: 6px; font-size: 19px; }
  .qaDimensionGrid p { margin-bottom: 0; }
  .qaReport { overflow: hidden; border: 1px solid #DCD4D8; border-radius: 28px; background: #FFFFFF; box-shadow: 0 24px 54px rgba(55,37,45,.10); }
  .statusReview { background: #F3ECEF; color: #6D4A5A; }
  .qaIssue { display: grid; grid-template-columns: 54px 1fr; gap: 18px; padding: 22px 24px; border-bottom: 1px solid var(--line); }
  .issueSeverity { display: flex; height: 28px; align-items: center; justify-content: center; border-radius: 6px; background: #3B3136; color: #FFFFFF; font-size: 10px; font-weight: 600; letter-spacing: .08em; }
  .issueContent strong { display: block; margin-bottom: 4px; font-size: 16px; }
  .issueContent p { margin-bottom: 0; color: var(--muted); font-size: 16px; line-height: 1.5; }
  .qaPreview { display: grid; grid-template-columns: 1.1fr .9fr; gap: 16px; padding: 22px 24px; background: var(--soft); }
  .screenFrame { min-height: 160px; padding: 28px 22px; border: 7px solid #322A2E; border-radius: 18px; background: linear-gradient(140deg,#86757d,#41373c); }
  .screenFrame span { display: block; margin-bottom: 10px; color: #F2A7C6; font-size: 10px; font-weight: 600; letter-spacing: .12em; }
  .screenFrame strong { color: #FFFFFF; font-size: 17px; }
  .recommendation { padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: #FFFFFF; }
  .recommendation p { margin-bottom: 0; color: var(--ink); font-size: 16px; font-weight: 600; }
  .qaFooter { display: flex; justify-content: space-between; gap: 12px; padding: 17px 24px; border-top: 1px solid var(--line); color: var(--muted); font-size: 13px; }

  .culturalGrid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 82px; align-items: start; }
  .culturalList { border-top: 1px solid var(--line); }
  .culturalList > div { display: grid; grid-template-columns: 10px 1fr; gap: 16px; align-items: start; padding: 17px 0; border-bottom: 1px solid var(--line); }
  .culturalList span { width: 6px; height: 6px; margin-top: 11px; border-radius: 50%; background: var(--magenta); }
  .culturalList p { margin-bottom: 0; }

  .platformGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .platformGrid article { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .platformGrid h3 { font-size: 20px; }
  .platformGrid p { margin-bottom: 0; }
  .gameTypeBand { margin-top: 44px; padding: 34px; border-radius: 24px; background: var(--soft); }
  .gameTypeBand h3 { font-size: 20px; }
  .tagCloud { display: flex; flex-wrap: wrap; gap: 10px; }
  .tagCloud span { max-width: 100%; padding: 8px 13px; border: 1px solid var(--line); border-radius: 999px; background: #FFFFFF; color: var(--ink-2); font-size: 16px; overflow-wrap: anywhere; }

  .languageGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 76px; align-items: center; }
  .languagePanel { padding: 34px; border: 1px solid #E5CAD6; border-radius: 28px; background: rgba(255,255,255,.7); }
  .languageMarketList { margin: 20px 0 24px; border-top: 1px solid #E5CAD6; }
  .languageMarketList > div { display: grid; grid-template-columns: minmax(150px,.72fr) minmax(0,1.28fr); gap: 20px; padding: 16px 0; border-bottom: 1px solid #E5CAD6; }
  .languageMarketList strong { font-size: 16px; font-weight: 600; }
  .languageMarketList span { color: var(--ink-2); font-size: 16px; line-height: 1.55; }
  .languagePanel p { margin-bottom: 0; }

  .securityGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .securityGrid article { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .securityIcon { display: inline-flex; width: 44px; height: 44px; align-items: center; justify-content: center; margin-bottom: 22px; border-radius: 14px; background: var(--soft); color: var(--magenta); }
  .securityGrid h3 { font-size: 20px; }
  .securityGrid p { margin-bottom: 0; }
  .assetBand { display: flex; align-items: center; justify-content: space-between; gap: 42px; margin-top: 36px; padding: 30px 34px; border-radius: 24px; background: var(--dark); color: #FFFFFF; }
  .assetBand > div:first-child { max-width: 720px; }
  .assetBand h3 { margin-bottom: 7px; font-size: 21px; }
  .assetBand p { margin-bottom: 0; color: #D7D0D3; }
  .assetBand .arrowLink { color: var(--pink-light) !important; }

  .visibilityGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 84px; align-items: start; }
  .visibilityRows { border-top: 1px solid var(--line); }
  .visibilityRows article { display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .visibilityRows h3 { margin-bottom: 6px; font-size: 21px; }
  .visibilityRows p { margin-bottom: 4px; }

  .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .whyGrid article { padding: 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .whyGrid h3 { font-size: 21px; }
  .whyGrid p { margin-bottom: 0; }

  .ecosystemSection { padding: 88px 0; background: #30292D; color: #FFFFFF; }
  .ecosystemSection p { color: #D7D0D3; }
  .ecosystemGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 74px; align-items: center; }
  .ecosystemCopy { max-width: 650px; }
  .ecosystemVisual { position: relative; width: 100%; min-height: 360px; }
  .ecosystemCenter { position: absolute; left: 50%; top: 50%; display: flex; width: 126px; height: 126px; align-items: center; justify-content: center; transform: translate(-50%,-50%); border: 1px solid #6E5F66; border-radius: 50%; background: #251F22; color: #FFFFFF; font-size: 18px; font-weight: 600; letter-spacing: .12em; }
  .ecosystemCenter::before, .ecosystemCenter::after { content: ""; position: absolute; left: 50%; top: 50%; width: 250px; height: 250px; transform: translate(-50%,-50%); border: 1px solid #50454A; border-radius: 50%; }
  .ecosystemCenter::after { width: 332px; height: 332px; border-style: dashed; }
  .node { position: absolute; z-index: 2; padding: 8px 13px; border: 1px solid #665A60; border-radius: 999px; background: #3A3236; color: #EEE8EB; font-size: 14px; font-weight: 600; }
  .node1 { left: 15%; top: 16%; }.node2 { right: 10%; top: 23%; }.node3 { right: 5%; bottom: 20%; }.node4 { left: 11%; bottom: 17%; }.node5 { left: 42%; bottom: 3%; }

  .faqSection { background: #FFFFFF; }
  .faqGrid { display: grid; grid-template-columns: 360px 1fr; gap: 82px; align-items: start; }
  .faqIntro { position: sticky; top: 30px; }
  .faqIntro p { margin-bottom: 28px; }
  .faqContact { width: fit-content; }
  .faqList { border-top: 1px solid var(--line); }
  .faqItem { border-bottom: 1px solid var(--line); }
  .faqButton { width: 100%; min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 0; border: 0; background: transparent; color: var(--ink); text-align: left; cursor: pointer; font: inherit; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .faqButton > span:first-child { min-width: 0; overflow-wrap: anywhere; }
  .faqIcon { display: inline-flex; width: 34px; height: 34px; flex: 0 0 34px; align-items: center; justify-content: center; border: 1px solid var(--line); border-radius: 50%; color: var(--magenta); }
  .faqPanel { padding: 0 54px 22px 0; }
  .faqPanel p { max-width: 820px; margin-bottom: 0; font-size: 16px; }

  .finalCtaSection { padding: 86px 0; background: var(--dark); color: #FFFFFF; }
  .finalCtaGrid { display: grid; grid-template-columns: 1fr auto; gap: 70px; align-items: center; }
  .finalCtaGrid > div:first-child { max-width: 790px; }
  .finalCtaGrid h2 { margin-bottom: 16px; }
  .finalCtaGrid p { margin-bottom: 0; color: #D7D0D3; font-size: 18px; }
  .finalActions { display: flex; min-width: 320px; flex-direction: column; align-items: stretch; gap: 12px; }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .heroGrid { grid-template-columns: 1fr 1fr; gap: 38px; }
    .proofGrid { grid-template-columns: repeat(5, 1fr); }
    .proofItem { padding: 24px 14px; }
    .technicalGrid { gap: 48px; }
    .mediaGrid { gap: 48px; }
    .faqGrid { grid-template-columns: 320px 1fr; gap: 56px; }
  }

  @media (max-width: 960px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .stepesGamePage h1 { font-size: 42px; }
    .stepesGamePage h2 { font-size: 32px; }
    .stepesGamePage h3 { font-size: 22px; }
    .heroSection { padding: 88px 0 80px; }
    .heroGrid { grid-template-columns: 1fr; }
    .heroCopy { max-width: 760px; }
    .heroVisual { max-width: 700px; margin: 0 auto; }
    .proofGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .proofItem,
    .proofItem:first-child,
    .proofItem:last-child { padding: 24px 20px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .proofItem:nth-child(even) { border-right: 0; }
    .proofItem:nth-child(5) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
    .overviewGrid, .darkIntroGrid, .technicalGrid, .liveGrid, .mediaGrid, .qaGrid, .culturalGrid, .languageGrid, .visibilityGrid, .ecosystemGrid { grid-template-columns: 1fr; gap: 48px; }
    .overviewGrid > div:first-child, .stickyMockup, .faqIntro { position: static; }
    .contentGroupGrid, .narrativeRows { grid-template-columns: 1fr 1fr; }
    .contextGrid { grid-template-columns: 1fr 1fr; }
    .kitPanel { grid-template-columns: 1fr; gap: 34px; }
    .workflowGrid { grid-template-columns: repeat(2, 1fr); }
    .aiLaneGrid { grid-template-columns: 1fr; }
    .aiLane h3 { min-height: 0; }
    .mediaPanels { grid-template-columns: 1fr 1fr; }
    .platformGrid { grid-template-columns: 1fr 1fr; }
    .securityGrid, .whyGrid { grid-template-columns: 1fr 1fr; }
    .faqGrid { grid-template-columns: 1fr; gap: 44px; }
    .faqIntro { max-width: 700px; }
    .finalCtaGrid { grid-template-columns: 1fr; }
    .finalActions { min-width: 0; max-width: 390px; }
  }

  @media (max-width: 680px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .stepesGamePage h1 { font-size: 38px; }
    .stepesGamePage h2 { font-size: 30px; }
    .stepesGamePage h3 { font-size: 20px; }
    .heroSection { padding: 72px 0 66px; }
    .heroGrid { gap: 38px; }
    .heroCopy { text-align: center; }
    .sectionHeader { margin-bottom: 42px; }
    .heroCopy .eyebrow { text-align: center; }
    .heroLead { font-size: 18px !important; }
    .heroBody { font-size: 16px !important; }
    .heroActions { flex-direction: column; }
    .heroActions .primaryCta, .heroActions .secondaryCta { width: 100%; }
    .heroVisual > svg { display: none; }
    .mobileHeroCard { display: block; padding: 24px 20px; border: 1px solid var(--line); border-radius: 24px; background: linear-gradient(145deg,#FFFFFF,#FBF7F9); box-shadow: 0 18px 42px rgba(55,37,45,.09); text-align: left; }
    .mobileHeroLabel { display: block; margin-bottom: 18px; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; }
    .mobileHeroString { padding: 16px; border: 1px solid var(--line); border-radius: 16px; background: #FFFFFF; }
    .mobileHeroString span { display: block; margin-bottom: 5px; color: var(--muted); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
    .mobileHeroString strong { display: block; color: var(--ink); font-size: 17px; line-height: 1.45; }
    .mobileHeroTarget { border-color: #4B4246; background: var(--dark); }
    .mobileHeroTarget span { color: var(--pink-light); }
    .mobileHeroTarget strong { color: #FFFFFF; }
    .mobileHeroArrow { display: flex; justify-content: center; padding: 10px 0; color: var(--magenta); }
    .mobileHeroChecks { display: grid; grid-template-columns: repeat(3,1fr); gap: 7px; margin-top: 14px; }
    .mobileHeroChecks span { display: flex; min-height: 42px; align-items: center; justify-content: center; gap: 5px; border: 1px solid var(--line); border-radius: 999px; background: #FFFFFF; color: var(--ink-2); font-size: 14px; font-weight: 600; }
    .mobileHeroChecks svg { display: block; color: var(--magenta); }
    .proofGrid { grid-template-columns: 1fr; }
    .proofItem, .proofItem:first-child, .proofItem:last-child { min-height: 0; padding: 20px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .proofItem:last-child { border-bottom: 0; }
    .overviewPrinciples, .contentGroupGrid, .narrativeRows, .contextGrid, .workflowGrid, .mediaPanels, .qaDimensionGrid, .platformGrid, .securityGrid, .whyGrid { grid-template-columns: 1fr; }
    .overviewPrinciples { border-left: 0; }
    .overviewPrinciples > div { padding: 22px 0; border-right: 0; }
    .contentGroupGrid, .narrativeRows, .contextGrid, .workflowGrid, .mediaPanels, .qaDimensionGrid, .platformGrid, .securityGrid, .whyGrid { border-left: 0; }
    .contentGroup, .narrativeRows article, .contextRow, .workflowGrid li, .mediaPanels article, .qaDimensionGrid article, .platformGrid article, .securityGrid article, .whyGrid article { padding: 26px 0; border-right: 0; }
    .cleanList { grid-template-columns: 1fr; }
    .releaseBand, .assetBand { align-items: flex-start; flex-direction: column; padding: 24px; }
    .narrativeRows article { grid-template-columns: 44px 1fr; }
    .technicalRow { grid-template-columns: 40px 1fr; }
    .workbenchTop, .qaHeader, .releaseBoardHeader { padding-left: 20px; padding-right: 20px; }
    .sourceBox, .targetBox, .formatPanel, .qaPreview { padding-left: 20px; padding-right: 20px; }
    .workbenchGrid { grid-template-columns: 1fr; }
    .workbenchGrid > div, .workbenchGrid > div:nth-child(2n), .workbenchGrid > div:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--line); }
    .workbenchGrid > div:last-child { border-bottom: 0; }
    .kitPanel { padding: 28px 22px; }
    .kitList { grid-template-columns: 1fr; }
    .workflowGrid li { min-height: 0; }
    .stepNumber { margin-bottom: 16px; }
    .liveFeatures { grid-template-columns: 1fr; }
    .streamRow { grid-template-columns: 10px 1fr; }
    .streamRow > span:last-child { grid-column: 2; text-align: left; }
    .releaseBoardFooter { flex-direction: column; }
    .voiceGovernance { grid-template-columns: 44px 1fr; padding: 24px; }
    .qaIssue { grid-template-columns: 1fr; gap: 10px; }
    .issueSeverity { width: fit-content; min-width: 54px; padding: 0 10px; }
    .qaPreview { grid-template-columns: 1fr; }
    .qaFooter { flex-direction: column; }
    .gameTypeBand { padding: 26px 22px; }
    .languagePanel { padding: 24px; }
    .languageMarketList > div { grid-template-columns: 1fr; gap: 5px; }
    .assetBand .inlineLinks { margin-top: 0; }
    .ecosystemVisual { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; min-height: 0; }
    .ecosystemCenter { position: relative; left: auto; top: auto; grid-column: 1 / -1; width: 100%; height: auto; padding: 18px; transform: none; border-radius: 18px; }
    .ecosystemCenter::before, .ecosystemCenter::after { display: none; }
    .node { position: static; display: flex; min-height: 48px; align-items: center; justify-content: center; text-align: center; }
    .node5 { grid-column: 1 / -1; }
    .faqButton { min-height: 68px; padding: 18px 0; font-size: 17px; }
    .faqPanel { padding-right: 0; }
    .faqContact { width: 100%; }
    .finalCtaSection { padding: 68px 0; text-align: center; }
    .finalActions { max-width: none; width: 100%; }
    .inlineLinks { flex-direction: column; align-items: flex-start; gap: 4px; }
    .inlineLinks .arrowLink { width: 100%; justify-content: space-between; }
    .releaseBand .arrowLink, .assetBand .arrowLink { width: 100%; justify-content: space-between; }
    .finalActions .primaryCta, .finalActions .darkSecondaryCta { width: 100%; }
    .darkLinks { align-items: flex-start; }
  }

  @media (max-width: 390px) {
    .stepesGamePage h1 { font-size: 38px; }
    .workbenchTop, .qaHeader { align-items: flex-start; flex-direction: column; }
    .releaseBoardHeader { align-items: flex-start; flex-direction: column; gap: 12px; }
  }

  @media (max-width: 320px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .primaryCta, .secondaryCta, .darkSecondaryCta { padding-left: 16px; padding-right: 16px; }
    .workbenchTop, .qaHeader, .releaseBoardHeader { padding-left: 16px; padding-right: 16px; }
    .sourceBox, .targetBox, .formatPanel, .qaIssue, .qaPreview, .qaFooter { padding-left: 16px; padding-right: 16px; }
    .mobileHeroChecks { grid-template-columns: 1fr; }
  }
`;
