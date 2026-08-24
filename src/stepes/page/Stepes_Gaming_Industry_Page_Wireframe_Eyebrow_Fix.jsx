import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const LineIcon = ({ name }) => {
  const paths = {
    game: <><path d="M8 9h8a5 5 0 0 1 4.7 6.7l-1 2.8a2.5 2.5 0 0 1-4.1 1l-1.5-1.4H9.9l-1.5 1.4a2.5 2.5 0 0 1-4.1-1l-1-2.8A5 5 0 0 1 8 9Z"/><path d="M7 13v4M5 15h4M16 13h.01M18.5 15.5h.01"/><path d="M9 9 10 5h4l1 4"/></>,
    story: <><path d="M6 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1Z"/><path d="M8 8h6M8 12h7M8 16h4"/></>,
    audio: <><path d="M4 13h3l5 4V7L7 11H4Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></>,
    launch: <><path d="M5 18 18 5M10 5h8v8"/><path d="M6 7H4v13h13v-2"/></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 13h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z"/><path d="M17 19c0 1.1-.9 2-2 2h-3"/></>,
    business: <><path d="M4 8h16v12H4Z"/><path d="M8 8V5h8v3M4 12h16M10 12v2h4v-2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M19 12a7 7 0 1 1-2-5"/></>,
    culture: <><path d="M4 5h8v6H7l-3 3Z"/><path d="M12 10h8v6h-3l-3 3v-3h-2Z"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="2"/><rect x="17" y="14" width="4" height="6" rx="2"/></>,
    qa: <><path d="m12 3 8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    marketing: <><path d="M4 13h4l8 5V6l-8 5H4Z"/><path d="M8 13v6H5v-6M19 9a4 4 0 0 1 0 6"/></>,
    people: <><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a7 7 0 0 1 14 0"/><path d="M16 7a3 3 0 1 1 0 6M17 15a6 6 0 0 1 5 6"/></>,
    ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="5"/><path d="M10 13.5c.8.7 3.2.7 4 0M10 10h.01M14 10h.01"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    linguist: <><path d="M4 5h9v7H8l-4 4Z"/><path d="M14 10h6v7h-3l-3 3Z"/><path d="M7 8h3M16 13h2"/></>,
    scale: <><path d="M12 3v18M5 7h14M7 7l-3 6h6ZM17 7l-3 6h6ZM8 21h8"/></>,
    context: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 15 3-3 3 3 2-2 3 3M8 8h.01"/></>,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] || paths.game}
    </svg>
  );
};

const GamingHeroArt = () => (
  <svg className="hero-art-svg" viewBox="0 0 640 520" aria-hidden="true">
    <defs>
      <linearGradient id="gamingBlush" x1="0" x2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#FFF9FC" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#24131E" floodOpacity="0.08" />
      </filter>
    </defs>

    <path d="M96 79c65-62 170-72 245-27 49 29 79 76 118 117 51 54 111 96 95 176-14 70-78 122-149 130-69 8-126-29-190-45-63-16-137-11-165-74-31-70 6-146 46-203Z" fill="url(#gamingBlush)" />
    <circle cx="526" cy="111" r="44" fill="#fff" stroke="#E9DDE3" strokeWidth="2" />
    <circle cx="526" cy="111" r="18" fill="none" stroke="#C11D63" strokeWidth="3" />
    <path d="M526 83v10M526 129v10M498 111h10M544 111h10M506 91l7 7M539 124l7 7M546 91l-7 7M513 124l-7 7" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />

    <g filter="url(#softShadow)">
      <rect x="96" y="103" width="410" height="296" rx="30" fill="#fff" stroke="#D9DDE5" strokeWidth="2" />
      <rect x="118" y="124" width="366" height="252" rx="22" fill="#FBFCFE" stroke="#E6E8EE" />
      <path d="M118 164h366" stroke="#E4E7ED" />
      <circle cx="141" cy="144" r="4" fill="#C11D63" />
      <circle cx="156" cy="144" r="4" fill="#D9DDE5" />
      <circle cx="171" cy="144" r="4" fill="#D9DDE5" />
      <path d="M367 144h84" stroke="#B5BBC6" strokeWidth="2" strokeLinecap="round" />

      <rect x="142" y="188" width="132" height="72" rx="15" fill="#fff" stroke="#DDE1E8" />
      <path d="M159 211h74M159 227h91M159 243h53" stroke="#8B93A1" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="252" cy="211" r="8" fill="#FDF2F7" stroke="#C11D63" />

      <rect x="292" y="188" width="166" height="72" rx="15" fill="#121826" />
      <path d="M313 211h70M313 228h118M313 244h87" stroke="#C9CFD9" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m417 208 17 10-17 10Z" fill="#C11D63" />

      <rect x="142" y="279" width="316" height="73" rx="17" fill="#fff" stroke="#DDE1E8" />
      <path d="M166 329c19-38 38-38 57 0s38 38 57 0 38-38 57 0 38 38 57 0" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <path d="M166 300h90M166 315h54" stroke="#8B93A1" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    <g transform="translate(335 335)" filter="url(#softShadow)">
      <path d="M38 0h94a49 49 0 0 1 46 66l-11 31a22 22 0 0 1-36 9l-20-19H59l-20 19a22 22 0 0 1-36-9L-8 66A49 49 0 0 1 38 0Z" fill="#fff" stroke="#1C2432" strokeWidth="3" />
      <path d="M34 30v34M17 47h34" stroke="#1C2432" strokeWidth="4" strokeLinecap="round" />
      <circle cx="132" cy="36" r="6" fill="#C11D63" />
      <circle cx="153" cy="56" r="6" fill="#C11D63" />
      <path d="M68 16h36" stroke="#9BA3AF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="86" cy="52" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="3" />
    </g>

    <g>
      <path d="M63 357c29 0 29-31 58-31s29 31 58 31" fill="none" stroke="#7A8491" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 8" />
      <circle cx="63" cy="357" r="6" fill="#C11D63" />
      <circle cx="179" cy="357" r="6" fill="#C11D63" />
      <path d="M536 245c-24 0-24 26-48 26" fill="none" stroke="#7A8491" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 8" />
      <circle cx="536" cy="245" r="6" fill="#C11D63" />
    </g>

    <g transform="translate(50 202)">
      <rect width="86" height="62" rx="14" fill="#fff" stroke="#D9DDE5" strokeWidth="2" />
      <path d="M20 23h45M20 37h31" stroke="#7A8491" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M63 48 71 54V40" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(495 287)">
      <rect width="100" height="76" rx="16" fill="#fff" stroke="#D9DDE5" strokeWidth="2" />
      <circle cx="28" cy="27" r="11" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M48 22h31M48 32h22M20 53h60" stroke="#7A8491" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

const ecosystemItems = [
  {
    icon: "game",
    title: "In-Game Content",
    text: "Localize interfaces, tutorials, dialogue, narrative, quests, items, abilities, achievements, system messages, subtitles, and downloadable content with the context players need.",
    items: ["UI and menus", "Dialogue and narrative", "Quests and missions", "Items and achievements"],
  },
  {
    icon: "story",
    title: "Creative and Narrative Assets",
    text: "Adapt scripts, character profiles, lore, humor, fictional terminology, and cinematic content so stories feel authentic in every language.",
    items: ["Story bibles", "Character voice", "World-building", "Transcreation"],
  },
  {
    icon: "audio",
    title: "Audio and Multimedia",
    text: "Coordinate multilingual voice, subtitles, captions, trailers, gameplay videos, livestream assets, and script updates across markets.",
    items: ["Voice-over and dubbing", "Subtitles and captions", "Cinematics", "Promotional video"],
  },
  {
    icon: "launch",
    title: "Launch and Marketing Content",
    text: "Bring campaigns to market with localized websites, store listings, advertising, social media, press materials, email, and creator content.",
    items: ["Game websites", "Store listings", "Campaigns", "Press and creators"],
  },
  {
    icon: "support",
    title: "Player Engagement and Support",
    text: "Keep global players informed with multilingual help content, patch notes, community announcements, surveys, moderation guidance, and service communications.",
    items: ["Help centers", "Patch notes", "Community updates", "Player research"],
  },
  {
    icon: "business",
    title: "Enterprise and Business Content",
    text: "Support the business around the game with localized partner communications, legal content, policies, training, technical documentation, and corporate materials.",
    items: ["Licensing", "Privacy and terms", "Internal training", "Technical content"],
  },
];

const lifecycle = [
  ["Discover", "Advertising, social campaigns, trailers, creator content, press materials, and search-ready landing pages."],
  ["Evaluate", "Store descriptions, screenshots, ratings information, system requirements, purchase messaging, and subscription details."],
  ["Onboard", "Account registration, tutorials, controls, accessibility information, privacy content, and new-player guidance."],
  ["Play", "Interfaces, dialogue, narrative, missions, items, abilities, achievements, subtitles, and voice content."],
  ["Engage", "Seasonal events, DLC, new characters, community announcements, esports, and continuous product updates."],
  ["Support and Retain", "Help content, service communications, lifecycle campaigns, loyalty programs, and re-engagement messaging."],
];

const platformGroups = [
  {
    title: "Platforms",
    items: ["PC and Mac", "PlayStation, Xbox, and Nintendo", "iOS and Android", "Browser and cloud gaming", "VR, AR, and mixed reality", "Cross-platform experiences"],
  },
  {
    title: "Game Categories",
    items: ["Action and adventure", "Role-playing games", "Strategy and simulation", "Casual and social games", "Sports and racing", "Multiplayer and MMO games", "Educational and serious games", "Immersive experiences"],
  },
  {
    title: "Business Models",
    items: ["Premium releases", "Free-to-play games", "Subscription models", "Live-service games", "Downloadable content", "Expansion releases", "Early access", "Independent and AAA titles"],
  },
];

const qaItems = [
  {
    title: "Linguistic Quality",
    text: "Review translation accuracy, fluency, terminology, character voice, narrative continuity, grammar, cultural suitability, subtitles, and audio-script alignment.",
  },
  {
    title: "In-Context Quality",
    text: "Identify truncation, overflow, broken line breaks, untranslated strings, placeholder errors, font problems, plural behavior, and contextually incorrect terminology.",
  },
  {
    title: "Structured Issue Management",
    text: "Document findings with severity levels, screenshots, contextual notes, recommended corrections, status tracking, and regression testing.",
  },
];

const aiPaths = [
  {
    label: "Creative Content",
    title: "Human-Centered Creative Localization",
    text: "Narrative, dialogue, humor, character voice, lore, and campaign messaging receive professional translation, transcreation, editorial review, and in-context validation.",
    items: ["Gaming-specialized linguists", "Character and narrative review", "Market adaptation"],
  },
  {
    label: "High-Volume Content",
    title: "AI-Assisted Translation With Review",
    text: "Support articles, system messages, patch notes, and repetitive interfaces can combine AI translation, translation memory, terminology, automated QA, and professional post-editing.",
    items: ["Translation memory reuse", "Approved terminology", "Targeted human review"],
  },
  {
    label: "High-Risk Content",
    title: "Controlled Subject-Matter Workflows",
    text: "Privacy content, purchase terms, safety policies, and age-related materials follow documented review stages with appropriately qualified linguists and final approval.",
    items: ["Subject-matter linguists", "Version tracking", "Documented approvals"],
  },
];

const governanceItems = [
  ["Confidential Collaboration", "Support unreleased titles, roadmaps, storylines, and launch plans through confidentiality agreements, controlled access, and secure exchange."],
  ["Terminology Governance", "Maintain names, locations, items, abilities, interface labels, and narrative conventions across products, releases, languages, and teams."],
  ["Reusable Language Assets", "Preserve approved translations in client-specific translation memory with clear visibility across ongoing programs."],
  ["Structured Review", "Coordinate client reviewers, in-market stakeholders, linguists, and project teams through defined approval stages and consolidated feedback."],
  ["Version Control", "Track source changes, release-specific content, corrections, and approved decisions as games evolve over time."],
  ["Quality Records", "Maintain documented workflows, issue histories, and project records according to program requirements."],
];

const benefits = [
  ["linguist", "Gaming-Specialized Linguists", "Build teams around language, target market, gaming experience, genre, content type, and creative requirements."],
  ["globe", "Complete Content Coverage", "Manage games, audio, multimedia, marketing, player support, community, legal, and business content through one connected partner."],
  ["ai", "AI + Human Flexibility", "Apply the right balance of AI, translation memory, professional translation, transcreation, post-editing, and review."],
  ["context", "In-Context Quality", "Give linguists the screenshots, metadata, character references, story materials, and terminology needed to make informed decisions."],
  ["scale", "Scalable Global Operations", "Support a single launch, a portfolio of titles, or continuous localization across global live operations."],
  ["lock", "Enterprise Control", "Centralize terminology, translation memory, review, approvals, security, and program visibility while preserving local flexibility."],
];

const faqs = [
  ["What is gaming localization?", "Gaming localization adapts video games and related content for players in different languages and markets. It can include in-game text, narrative, audio, subtitles, marketing, store listings, support content, and legal materials, together with cultural, technical, terminology, and in-context quality considerations."],
  ["What is the difference between gaming translation and game localization?", "Gaming translation converts written or spoken content from one language into another. Game localization is broader: it adapts the complete player experience, including character voice, cultural references, interface constraints, audio, formatting, terminology, and in-context quality."],
  ["What content do gaming companies need translated?", "Gaming companies may need translation for interfaces, dialogue, narrative, tutorials, websites, app stores, advertising, social media, voice-over scripts, subtitles, cinematics, patch notes, help centers, player support, community updates, esports content, privacy notices, contracts, and internal documentation."],
  ["How does Stepes maintain character, lore, and terminology consistency?", "Stepes uses approved terminology, translation memory, character references, narrative documentation, style guidance, and reviewer feedback. Dedicated linguist teams can support long-running titles and franchises, while approved decisions are incorporated into reusable language resources for future releases."],
  ["Can Stepes support continuous localization for live-service games?", "Yes. Stepes supports frequent localization cycles for patches, seasonal events, DLC, new characters, store updates, community announcements, and other live-service content. Workflows can combine translation memory, terminology control, automation, and review stages matched to content type and release speed."],
  ["Does Stepes provide game localization testing and linguistic QA?", "Yes. Stepes provides linguistic quality assurance and in-context review to identify translation errors, truncation, overflow, untranslated strings, placeholders, terminology inconsistencies, font problems, subtitle issues, and other language-related defects. Findings can include severity, screenshots, context, and recommended corrections."],
  ["Can Stepes localize gaming voice-over, subtitles, and cinematics?", "Yes. Stepes supports script translation, voice-over, dubbing, pronunciation guidance, subtitles, closed captions, trailers, cinematics, and multimedia assets. Workflows can address character requirements, timing, emotional direction, file structure, pickups, and ongoing updates."],
  ["How is AI used in gaming localization?", "AI can increase speed and scalability for suitable content such as repetitive interfaces, support articles, patch notes, system messages, and operational updates. Stepes combines AI with translation memory, terminology, automated QA, and professional review. Creative narrative and player-facing content receive greater human involvement."],
  ["Can Stepes translate game marketing and app store content?", "Yes. Stepes localizes websites, landing pages, app store listings, platform descriptions, advertising, social media, trailers, email campaigns, press materials, and creator content. Transcreation can adapt headlines, calls to action, humor, and promotional messages while preserving the campaign objective."],
  ["Does Stepes provide multilingual player-support translation?", "Yes. Stepes supports help centers, knowledge bases, FAQs, support tickets, account communications, troubleshooting, billing information, safety policies, and service-status updates. Workflows can combine translation memory, terminology, AI-assisted translation, and human review according to content complexity."],
  ["What gaming platforms does Stepes support?", "Stepes supports content for PC, Mac, mobile, console, browser, cloud, virtual reality, augmented reality, and cross-platform gaming experiences. The workflow can be adapted to source files, development environments, interface restrictions, target languages, and testing requirements."],
  ["How do we start a gaming localization project?", "Share your source content, target languages, platforms, release schedule, file formats, reference materials, and required services. Stepes will review the scope and recommend a workflow based on volume, creative complexity, technical needs, quality expectations, and existing terminology or translation memory."],
];

const relatedServices = [
  ["Video Game Localization", "Localize interfaces, dialogue, narrative, terminology, subtitles, and complete gameplay experiences.", "https://www.stepes.com/video-game-translation-services/"],
  ["Esports Translation", "Support tournaments, broadcasts, players, teams, sponsors, and competitive-gaming communities.", "https://www.stepes.com/esports-translation-services/"],
  ["App Localization", "Adapt mobile gaming experiences, app interfaces, store listings, and player communications.", "https://www.stepes.com/app-localization-services/"],
  ["Software Localization", "Localize platforms, launchers, development tools, portals, and connected gaming software.", "https://www.stepes.com/software-localization-services/"],
  ["Multimedia Localization", "Translate and adapt videos, cinematics, trailers, animations, and interactive media.", "https://www.stepes.com/multimedia-translation-services/"],
  ["Multilingual Customer Support", "Provide consistent language support across help centers, knowledge bases, email, chat, and player communications.", "https://www.stepes.com/multilingual-customer-support/"],
];

const resources = [
  ["Complete Guide to Game Localization", "Understand how translation, cultural adaptation, terminology, audio, testing, and technical integration work together.", "Read the Game Localization Guide", "https://www.stepes.com/resources/localization-guides/game-localization-guide/"],
  ["Continuous Localization for Live-Service Games", "Learn how to manage frequent multilingual updates without losing quality or release speed.", "Explore Continuous Localization", "https://www.stepes.com/resources/localization-guides/live-service-game-localization/"],
  ["Game Localization Testing Checklist", "Review linguistic, visual, functional, and in-context issues before localized content is released.", "Use the Testing Checklist", "https://www.stepes.com/resources/localization-guides/game-localization-testing-checklist/"],
  ["AI Game Translation With Human Review", "See where AI improves localization efficiency and where professional linguists remain essential.", "Explore AI + Human Review", "https://www.stepes.com/resources/ai-translation-insights/ai-game-translation-with-human-review/"],
];

export default function StepesGamingIndustryPage() {
  return (
    <main className="gaming-page">
      <style>{`
        :root {
          --g-ink: #111522;
          --g-ink-soft: #394255;
          --g-muted: #657084;
          --g-line: #e2e6ed;
          --g-line-dark: rgba(255,255,255,.16);
          --g-bg: #ffffff;
          --g-bg-soft: #f7f8fb;
          --g-blush: #fdf2f7;
          --g-magenta: #c11d63;
          --g-magenta-dark: #9f1d55;
          --g-magenta-deep: #7a1542;
          --g-magenta-light: #f2a7c6;
          --g-dark: #121826;
          --g-radius-lg: 30px;
          --g-radius-md: 22px;
          --g-shadow: 0 24px 70px rgba(20, 27, 42, .08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .gaming-page {
          overflow-x: clip;
          overflow-y: visible;
          background: var(--g-bg);
          color: var(--g-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
        }
        .gaming-page a { color: inherit; }
        .gaming-page p,
        .gaming-page li,
        .editorial-link { overflow-wrap: anywhere; }
        .gaming-page h1,
        .gaming-page h2,
        .gaming-page h3 { overflow-wrap: break-word; }
        .gaming-page h1,
        .gaming-page h2,
        .gaming-page h3,
        .gaming-page p { margin-top: 0; }
        .gaming-page h1,
        .gaming-page h2,
        .gaming-page h3 { font-weight: 600; letter-spacing: -.025em; line-height: 1.12; }
        .gaming-page h1 { font-size: 48px; margin-bottom: 24px; }
        .gaming-page h2 { font-size: 36px; margin-bottom: 22px; }
        .gaming-page h3 { font-size: 24px; margin-bottom: 14px; }
        .gaming-page p { color: var(--g-ink-soft); font-size: 16px; margin-bottom: 20px; }
        .gaming-page ul { margin: 0; padding: 0; list-style: none; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section-soft { background: var(--g-bg-soft); }
        .section-blush { background: var(--g-blush); }
        .section-dark { background: var(--g-dark); color: #fff; }
        .section-dark p { color: #c9cfda; }
        /* Eyebrows use explicit, page-scoped colors so global paragraph styles cannot turn them gray. */
        .gaming-page p.eyebrow,
        .gaming-page .hero p.eyebrow,
        .gaming-page .section-head p.eyebrow,
        .gaming-page .split-head p.eyebrow,
        .gaming-page .program-panel p.eyebrow {
          color: #c11d63 !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .18em !important;
          text-transform: uppercase !important;
          margin-bottom: 18px !important;
          opacity: 1 !important;
        }
        .gaming-page .section-dark p.eyebrow,
        .gaming-page .audio-visual p.eyebrow {
          color: #f2a7c6 !important;
          opacity: 1 !important;
        }
        .section-intro { max-width: 810px; font-size: 18px !important; line-height: 1.68; margin-bottom: 0 !important; }
        .section-head { max-width: 820px; margin-bottom: 52px; }
        .section-head.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-head.centered .section-intro { margin-left: auto; margin-right: auto; }
        .split-head { display: grid; grid-template-columns: .78fr 1.22fr; gap: 92px; align-items: start; margin-bottom: 50px; }
        .split-head .section-intro { max-width: 720px; }
        .split-head.no-bottom { margin-bottom: 0; }
        .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .split-2.top { align-items: start; }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn {
          min-height: 50px;
          text-align: center;
          padding: 13px 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .btn-primary,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus-visible { color: #fff !important; }
        .btn-primary { background: var(--g-magenta); box-shadow: 0 14px 32px rgba(193,29,99,.20); }
        .btn-primary:hover { background: var(--g-magenta-dark); transform: translateY(-2px); }
        .btn-secondary { background: #fff; border: 1px solid #d8dde5; color: var(--g-ink); }
        .btn-secondary:hover { border-color: #bfc5cf; transform: translateY(-2px); }
        .btn:focus-visible,
        .editorial-link:focus-visible,
        details summary:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }
        .editorial-link {
          color: var(--g-magenta) !important;
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          max-width: 100%;
          min-height: 44px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
          text-decoration: none;
        }
        .editorial-link svg { width: 18px; height: 18px; margin-top: 3px; flex: 0 0 auto; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(4px); }
        .icon { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .icon-box { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; background: var(--g-blush); color: var(--g-magenta); flex: 0 0 auto; }

        .hero { padding: 96px 0 88px; position: relative; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, .96fr) minmax(470px, 1.04fr); gap: 52px; align-items: center; }
        .hero-copy { max-width: 640px; }
        .hero-copy .hero-lead { font-size: 18px; line-height: 1.7; max-width: 620px; margin-bottom: 30px; color: #465064; }
        .hero-art { min-height: 470px; display: flex; align-items: center; justify-content: center; }
        .hero-art-svg { width: 100%; height: auto; max-height: 520px; min-width: 0; display: block; }

        .trust-strip { border-top: 1px solid var(--g-line); border-bottom: 1px solid var(--g-line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .trust-item { padding: 27px 26px; text-align: center; color: var(--g-ink); font-weight: 600; font-size: 16px; }
        .trust-item + .trust-item { border-left: 1px solid var(--g-line); }

        .audience-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 32px; border-top: 1px solid var(--g-line); }
        .audience-list li { position: relative; padding: 18px 0 18px 25px; border-bottom: 1px solid var(--g-line); font-size: 16px; color: var(--g-ink-soft); }
        .audience-list li::before { content: ""; position: absolute; left: 0; top: 27px; width: 9px; height: 2px; border-radius: 2px; background: var(--g-magenta); }

        .ecosystem-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--g-line); border-left: 1px solid var(--g-line); }
        .ecosystem-item { padding: 34px; border-right: 1px solid var(--g-line); border-bottom: 1px solid var(--g-line); min-height: 100%; background: #fff; }
        .ecosystem-item .icon-box { margin-bottom: 24px; }
        .ecosystem-item p { min-height: 108px; }
        .mini-list { display: grid; gap: 10px; margin-top: 22px !important; }
        .mini-list li { display: flex; align-items: flex-start; gap: 11px; color: var(--g-ink-soft); font-size: 16px; }
        .mini-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--g-magenta); margin-top: 10px; flex: 0 0 auto; }

        .lifecycle-wrap { border: 1px solid var(--g-line); border-radius: var(--g-radius-lg); overflow: hidden; background: #fff; }
        .lifecycle-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .lifecycle-item { padding: 30px; min-height: 202px; position: relative; }
        .lifecycle-item:nth-child(-n+3) { border-bottom: 1px solid var(--g-line); }
        .lifecycle-item:not(:nth-child(3n)) { border-right: 1px solid var(--g-line); }
        .step-label { color: #c11d63 !important; font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 13px; }
        .lifecycle-item h3 { font-size: 21px; }

        .service-bridge { border: 1px solid #efd8e2; border-radius: var(--g-radius-lg); background: var(--g-blush); padding: 56px; display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: center; }
        .service-bridge h2 { margin-bottom: 0; }
        .service-capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px 25px; margin: 28px 0 24px !important; }
        .service-capabilities li { display: flex; align-items: flex-start; gap: 10px; font-size: 16px; color: var(--g-ink-soft); }
        .service-capabilities .icon { width: 20px; height: 20px; color: var(--g-magenta); margin-top: 3px; flex: 0 0 auto; }

        .live-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 74px; align-items: center; }
        .dark-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 30px; margin: 30px 0 26px !important; }
        .dark-list li { color: #d6dbe4; display: flex; gap: 10px; align-items: flex-start; font-size: 16px; }
        .dark-list li::before { content: ""; width: 7px; height: 7px; background: var(--g-magenta-light); border-radius: 50%; margin-top: 10px; flex: 0 0 auto; }
        .section-dark .editorial-link { color: var(--g-magenta-light) !important; }
        .release-board { border: 1px solid var(--g-line-dark); border-radius: var(--g-radius-lg); padding: 26px; background: rgba(255,255,255,.045); box-shadow: 0 28px 70px rgba(0,0,0,.22); }
        .board-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding-bottom: 22px; border-bottom: 1px solid var(--g-line-dark); }
        .board-title { color: #fff; font-weight: 600; font-size: 18px; }
        .status-pill { border: 1px solid rgba(242,167,198,.4); color: var(--g-magenta-light); border-radius: 999px; padding: 6px 11px; font-size: 14px; line-height: 1; }
        .release-list { display: grid; }
        .release-row { display: grid; grid-template-columns: 1.05fr .72fr .7fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--g-line-dark); align-items: center; }
        .release-row:last-child { border-bottom: 0; padding-bottom: 6px; }
        .release-name { color: #fff; font-weight: 600; font-size: 16px; }
        .release-meta { color: #aeb7c5; font-size: 14px; }
        .progress { height: 7px; border-radius: 999px; background: rgba(255,255,255,.09); overflow: hidden; }
        .progress span { display: block; height: 100%; border-radius: inherit; background: var(--g-magenta-light); }
        .row-state { color: #d6dbe4; text-align: right; font-size: 14px; }

        .narrative-panel { border-radius: var(--g-radius-lg); border: 1px solid var(--g-line); padding: 38px; background: #fff; }
        .narrative-quote { font-size: 27px; line-height: 1.35; font-weight: 600; color: var(--g-ink); margin-bottom: 30px; max-width: 500px; }
        .reference-stack { display: grid; gap: 12px; }
        .reference-row { display: grid; grid-template-columns: 132px 1fr; gap: 18px; align-items: start; padding-top: 14px; border-top: 1px solid var(--g-line); }
        .reference-row strong { font-weight: 600; color: var(--g-ink); font-size: 16px; }
        .reference-row span { color: var(--g-ink-soft); font-size: 16px; }

        .platform-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--g-line); }
        .platform-group { padding: 34px 36px 0 0; }
        .platform-group + .platform-group { border-left: 1px solid var(--g-line); padding-left: 36px; }
        .platform-group ul { display: grid; }
        .platform-group li { padding: 12px 0; border-bottom: 1px solid var(--g-line); font-size: 16px; color: var(--g-ink-soft); }

        .audio-visual { background: var(--g-dark); border-radius: var(--g-radius-lg); padding: 36px; color: #fff; min-height: 420px; display: flex; flex-direction: column; justify-content: space-between; }
        .audio-visual .eyebrow { color: #f2a7c6 !important; opacity: 1 !important; }
        .audio-wave { height: 160px; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .audio-wave span { width: 5px; border-radius: 999px; background: var(--g-magenta-light); opacity: .82; }
        .audio-wave span:nth-child(1) { height: 26px; } .audio-wave span:nth-child(2) { height: 42px; } .audio-wave span:nth-child(3) { height: 70px; } .audio-wave span:nth-child(4) { height: 102px; } .audio-wave span:nth-child(5) { height: 78px; } .audio-wave span:nth-child(6) { height: 126px; } .audio-wave span:nth-child(7) { height: 92px; } .audio-wave span:nth-child(8) { height: 56px; } .audio-wave span:nth-child(9) { height: 112px; } .audio-wave span:nth-child(10) { height: 76px; } .audio-wave span:nth-child(11) { height: 48px; } .audio-wave span:nth-child(12) { height: 30px; }
        .audio-meta { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--g-line-dark); }
        .audio-meta div { padding: 20px 18px 0 0; }
        .audio-meta div + div { border-left: 1px solid var(--g-line-dark); padding-left: 18px; }
        .audio-meta strong { display: block; color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .audio-meta span { color: #abb4c3; font-size: 14px; }

        .qa-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 74px; align-items: start; }
        .qa-list { border-top: 1px solid var(--g-line); }
        .qa-row { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 30px 0; border-bottom: 1px solid var(--g-line); }
        .qa-row .icon-box { width: 44px; height: 44px; }
        .qa-row h3 { font-size: 22px; }
        .qa-row p { margin-bottom: 0; }

        .marketing-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 56px; border-top: 1px solid var(--g-line); }
        .marketing-item { padding: 22px 0; border-bottom: 1px solid var(--g-line); display: flex; align-items: flex-start; gap: 14px; color: var(--g-ink-soft); font-size: 16px; }
        .marketing-item .icon { color: var(--g-magenta); width: 20px; height: 20px; margin-top: 3px; flex: 0 0 auto; }

        .engagement-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--g-line); border-radius: var(--g-radius-lg); overflow: hidden; background: #fff; }
        .engagement-item { padding: 36px; }
        .engagement-item + .engagement-item { border-left: 1px solid var(--g-line); }
        .engagement-item .icon-box { margin-bottom: 24px; }
        .engagement-item ul { display: grid; gap: 10px; margin-top: 20px; }
        .engagement-item li { color: var(--g-ink-soft); font-size: 16px; padding-left: 17px; position: relative; }
        .engagement-item li::before { content: ""; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: var(--g-magenta); }

        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .ai-card { border: 1px solid var(--g-line-dark); background: rgba(255,255,255,.04); border-radius: var(--g-radius-md); padding: 30px; }
        .ai-card .card-label { color: #f2a7c6 !important; font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
        .ai-card h3 { color: #fff; font-size: 22px; min-height: 50px; }
        .ai-card p { min-height: 140px; }
        .ai-card ul { display: grid; gap: 11px; border-top: 1px solid var(--g-line-dark); padding-top: 20px; }
        .ai-card li { color: #d8dde6; font-size: 16px; display: flex; align-items: flex-start; gap: 9px; }
        .ai-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--g-magenta-light); margin-top: 10px; flex: 0 0 auto; }

        .governance-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--g-line); border-left: 1px solid var(--g-line); }
        .governance-item { padding: 30px; border-right: 1px solid var(--g-line); border-bottom: 1px solid var(--g-line); }
        .governance-item h3 { font-size: 21px; }
        .governance-item p { margin-bottom: 0; }
        .trust-links { display: flex; gap: 26px; flex-wrap: wrap; margin-top: 30px; }

        .benefit-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px 36px; }
        .benefit-item { border-top: 2px solid var(--g-magenta); padding-top: 24px; }
        .benefit-top { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
        .benefit-top .icon-box { width: 42px; height: 42px; border-radius: 13px; }
        .benefit-top h3 { margin-bottom: 0; font-size: 21px; }
        .benefit-item p { margin-bottom: 0; }

        .program-panel { border: 1px solid var(--g-line); border-radius: var(--g-radius-lg); padding: 56px; background: #fff; box-shadow: var(--g-shadow); }
        .program-panel .split-2 { gap: 60px; }
        .program-items { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px 24px; }
        .program-items li { display: flex; gap: 10px; color: var(--g-ink-soft); font-size: 16px; }
        .program-items .icon { width: 20px; height: 20px; color: var(--g-magenta); margin-top: 3px; flex: 0 0 auto; }

        .faq-panel { border: 1px solid var(--g-line); border-radius: var(--g-radius-lg); overflow: hidden; background: #fff; }
        details { border-bottom: 1px solid var(--g-line); }
        details:last-child { border-bottom: 0; }
        details summary { list-style: none; cursor: pointer; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--g-ink); font-size: 18px; font-weight: 600; }
        details summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #d8dde5; position: relative; flex: 0 0 auto; }
        .faq-plus::before,
        .faq-plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 1.5px; background: var(--g-magenta); transform: translate(-50%, -50%); transition: transform .2s ease; }
        .faq-plus::after { transform: translate(-50%, -50%) rotate(90deg); }
        details[open] .faq-plus::after { transform: translate(-50%, -50%) rotate(0); }
        .faq-answer { padding: 0 72px 26px 30px; max-width: 900px; }
        .faq-answer p { margin-bottom: 0; }

        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--g-line); border-left: 1px solid var(--g-line); }
        .related-item { padding: 30px; border-right: 1px solid var(--g-line); border-bottom: 1px solid var(--g-line); background: #fff; }
        .related-item h3 { font-size: 21px; }
        .related-item p { min-height: 82px; }
        .resource-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .resource-card { border: 1px solid var(--g-line); border-radius: var(--g-radius-md); padding: 28px; background: #fff; }
        .resource-card h3 { font-size: 20px; min-height: 68px; }
        .resource-card p { min-height: 136px; }

        .final-cta { padding: 88px 0; background: #fff; }
        .cta-panel { border-radius: var(--g-radius-lg); background: var(--g-blush); border: 1px solid #efd8e2; padding: 64px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; align-items: center; position: relative; overflow: hidden; }
        .cta-panel::after { content: ""; position: absolute; width: 300px; height: 300px; border: 1px solid rgba(193,29,99,.15); border-radius: 50%; right: -112px; top: -128px; }
        .cta-panel::before { content: ""; position: absolute; width: 180px; height: 180px; border: 1px solid rgba(193,29,99,.12); border-radius: 50%; right: 16px; bottom: -110px; }
        .cta-panel > * { position: relative; z-index: 1; }
        .cta-panel h2 { max-width: 700px; }
        .cta-panel p { max-width: 720px; margin-bottom: 0; font-size: 18px; }
        .cta-panel .btn-row { justify-content: flex-end; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(420px, .95fr); gap: 32px; }
          .hero-art { min-height: 430px; }
          .ecosystem-grid { grid-template-columns: repeat(2, 1fr); }
          .resource-grid { grid-template-columns: repeat(2, 1fr); }
          .resource-card h3,
          .resource-card p { min-height: 0; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          .gaming-page h1 { font-size: 42px; }
          .gaming-page h2 { font-size: 32px; }
          .gaming-page h3 { font-size: 22px; }
          .hero { padding: 82px 0 72px; }
          .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .hero-copy { max-width: 760px; }
          .hero-art { min-height: 0; max-width: 580px; margin: 0 auto; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--g-line); }
          .trust-item:nth-child(4) { border-top: 1px solid var(--g-line); }
          .split-head,
          .split-2,
          .live-grid,
          .qa-layout,
          .service-bridge,
          .cta-panel { grid-template-columns: 1fr; gap: 42px; }
          .split-head { margin-bottom: 42px; }
          .split-head.no-bottom { margin-bottom: 0; }
          .section-head { margin-bottom: 44px; }
          .ecosystem-grid { grid-template-columns: repeat(2, 1fr); }
          .ecosystem-item p { min-height: 0; }
          .lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
          .lifecycle-item:nth-child(-n+4) { border-bottom: 1px solid var(--g-line); }
          .lifecycle-item:nth-child(3) { border-right: 1px solid var(--g-line); }
          .lifecycle-item:not(:nth-child(2n)) { border-right: 1px solid var(--g-line); }
          .lifecycle-item:nth-child(2n) { border-right: 0; }
          .service-bridge { padding: 44px; }
          .platform-grid { grid-template-columns: 1fr; }
          .platform-group { padding: 30px 0 0; }
          .platform-group + .platform-group { border-left: 0; border-top: 1px solid var(--g-line); padding-left: 0; margin-top: 30px; }
          .engagement-grid { grid-template-columns: 1fr; }
          .engagement-item + .engagement-item { border-left: 0; border-top: 1px solid var(--g-line); }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-card h3,
          .ai-card p { min-height: 0; }
          .benefit-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-panel .btn-row { justify-content: flex-start; }
        }

        @media (max-width: 620px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          .gaming-page h1 { font-size: 38px; }
          .gaming-page h2 { font-size: 30px; }
          .gaming-page h3 { font-size: 20px; }
          .hero { padding: 68px 0 62px; }
          .hero-copy .hero-lead { font-size: 18px; }
          .btn-row { width: 100%; }
          .btn { width: 100%; }
          .hero-art { max-width: 480px; margin-left: auto; margin-right: auto; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item + .trust-item,
          .trust-item:nth-child(3),
          .trust-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--g-line); }
          .audience-list { grid-template-columns: 1fr; }
          .ecosystem-grid { grid-template-columns: 1fr; }
          .ecosystem-item { padding: 28px 24px; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .lifecycle-item,
          .lifecycle-item:nth-child(-n+4),
          .lifecycle-item:nth-child(3),
          .lifecycle-item:not(:nth-child(2n)) { border-right: 0; border-bottom: 1px solid var(--g-line); }
          .lifecycle-item:last-child { border-bottom: 0; }
          .service-bridge,
          .program-panel,
          .cta-panel { padding: 32px 24px; }
          .service-capabilities,
          .dark-list,
          .program-items { grid-template-columns: 1fr; }
          .release-board { padding: 22px 20px; width: 100%; }
          .board-head { align-items: flex-start; }
          .status-pill { flex: 0 0 auto; }
          .release-row { grid-template-columns: 1fr; gap: 9px; }
          .row-state { text-align: left; }
          .narrative-panel { padding: 28px 24px; }
          .narrative-quote { font-size: 23px; }
          .reference-row { grid-template-columns: 1fr; gap: 4px; }
          .audio-visual { padding: 28px 22px; min-height: 360px; }
          .audio-meta { grid-template-columns: 1fr; }
          .audio-meta div + div { border-left: 0; border-top: 1px solid var(--g-line-dark); padding-left: 0; padding-top: 15px; margin-top: 15px; }
          .qa-row { grid-template-columns: 44px 1fr; gap: 16px; }
          .marketing-grid { grid-template-columns: 1fr; }
          .trust-links { flex-direction: column; align-items: flex-start; gap: 8px; margin-top: 24px; }
          .engagement-item { padding: 28px 24px; }
          .governance-grid { grid-template-columns: 1fr; }
          .benefit-grid { grid-template-columns: 1fr; }
          details summary { padding: 22px 20px; font-size: 18px; align-items: flex-start; }
          .faq-answer { padding: 0 20px 24px; }
          .related-grid,
          .resource-grid { grid-template-columns: 1fr; }
          .related-item,
          .resource-card { padding: 26px 24px; }
          .related-item p,
          .resource-card p,
          .resource-card h3 { min-height: 0; }
          .section-head { margin-bottom: 38px; }
          .split-head { gap: 28px; }
          .final-cta { padding: 68px 0; }
        }

        @media (max-width: 350px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .hero-art { max-width: 100%; }
          .board-head { flex-direction: column; gap: 12px; }
          .status-pill { align-self: flex-start; }
          .cta-panel,
          .program-panel,
          .service-bridge { padding-left: 22px; padding-right: 22px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Gaming Industry</p>
            <h1>Gaming Translation and Localization Services</h1>
            <p className="hero-lead">
              Create immersive player experiences for every market with gaming translation and localization solutions built for the complete game lifecycle. Stepes helps game developers, publishers, platforms, and live-service operators localize in-game content, narrative, audio, marketing, community communications, and player support in more than 100 languages.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/video-game-translation-services/">Explore Game Localization <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-art">
            <GamingHeroArt />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Gaming localization trust indicators">
        <div className="shell trust-grid">
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Gaming Workflows</div>
          <div className="trust-item">ISO-Certified Quality</div>
          <div className="trust-item">Enterprise Security</div>
        </div>
      </section>

      <section className="section" id="gaming-industry-solutions">
        <div className="shell split-head no-bottom">
          <div>
            <p className="eyebrow">Global Gaming Content</p>
            <h2>Build Global Player Experiences Across Every Language</h2>
          </div>
          <div>
            <p className="section-intro">
              Gaming companies communicate with players through far more than the game itself. A successful global release can involve large volumes of content across interfaces, dialogue, cinematics, storefronts, websites, social campaigns, live events, player support, and continuous product updates.
            </p>
            <p>
              Stepes provides connected gaming translation services for this complete multilingual ecosystem. Whether you are preparing an independent title for its first international launch, managing a global franchise, or delivering new content every week, we help keep every language accurate, consistent, current, and aligned with the player experience.
            </p>
            <ul className="audience-list">
              <li>Game developers and studios</li>
              <li>Global publishers</li>
              <li>Console, mobile, PC, and cloud platforms</li>
              <li>Live-service game teams</li>
              <li>Localization and global content teams</li>
              <li>Marketing and player-acquisition organizations</li>
              <li>Player-support and community teams</li>
              <li>Esports organizers and broadcasters</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="gaming-content">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Complete Content Coverage</p>
            <h2>One Gaming Ecosystem. Every Content Experience.</h2>
            <p className="section-intro">
              Every player interaction contributes to how a game is understood, experienced, and remembered. Stepes supports multilingual content from the first campaign that introduces a title to the support content that keeps players engaged years after launch.
            </p>
          </div>
          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => (
              <article className="ecosystem-item" key={item.title}>
                <div className="icon-box"><LineIcon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="mini-list">
                  {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="player-lifecycle">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Player Lifecycle</p>
            <h2>Support Players From Discovery Through Long-Term Engagement</h2>
            <p className="section-intro">
              The player journey begins well before a game is downloaded and continues long after the initial release. A connected localization program creates consistency across every stage while reducing duplicated work between teams and channels.
            </p>
          </div>
          <div className="lifecycle-wrap">
            <div className="lifecycle-grid">
              {lifecycle.map(([title, text], index) => (
                <article className="lifecycle-item" key={title}>
                  <div className="step-label">Stage {index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dense" id="game-localization">
        <div className="shell">
          <div className="service-bridge">
            <div>
              <h2>Specialized Localization for Immersive Gameplay</h2>
            </div>
            <div>
              <p>
                Game localization requires a careful balance of linguistic accuracy, creative adaptation, technical precision, and player context. Stepes supports in-game text, user interfaces, narrative, dialogue, audio, subtitles, cultural adaptation, and in-context quality assurance while preserving character voice, terminology, gameplay clarity, and creative identity.
              </p>
              <ul className="service-capabilities">
                {[
                  "In-game text and interface localization",
                  "Dialogue and narrative adaptation",
                  "Game transcreation and culturalization",
                  "Character and franchise terminology",
                  "Voice-over and subtitles",
                  "Localization quality assurance",
                ].map((item) => <li key={item}><CheckIcon />{item}</li>)}
              </ul>
              <a className="editorial-link" href="https://www.stepes.com/video-game-translation-services/">Explore Video Game Localization Services <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="live-service-localization">
        <div className="shell live-grid">
          <div>
            <p className="eyebrow">Continuous Localization</p>
            <h2>Keep Every Language Current With Every Release</h2>
            <p className="section-intro">
              Live-service games create a continuous stream of player-facing content. Stepes helps localization teams keep pace with agile development, seasonal events, downloadable content, urgent changes, and global release schedules.
            </p>
            <ul className="dark-list">
              {["Patches and updates", "Seasonal events", "New characters and storylines", "Additional missions and quests", "DLC and expansion packs", "Store and monetization updates", "Community announcements", "Maintenance communications"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              Translation memory reuses approved language, centralized terminology protects consistency, and source-change management helps teams focus only on new or modified content. Programs can be structured by title, release, content type, language, and review path while maintaining visibility across the wider portfolio.
            </p>
            <a className="editorial-link" href="https://www.stepes.com/resources/localization-guides/live-service-game-localization/">Learn About Live-Service Game Localization <ArrowIcon /></a>
          </div>
          <div className="release-board" aria-label="Illustrative continuous localization release board">
            <div className="board-head">
              <div className="board-title">Illustrative Release Workflow</div>
              <div className="status-pill">Sample View</div>
            </div>
            <div className="release-list">
              <div className="release-row">
                <div><div className="release-name">Seasonal Event</div><div className="release-meta">New UI and event copy</div></div>
                <div className="progress"><span style={{ width: "92%" }} /></div>
                <div className="row-state">Final review</div>
              </div>
              <div className="release-row">
                <div><div className="release-name">Patch Notes</div><div className="release-meta">Updated source strings</div></div>
                <div className="progress"><span style={{ width: "76%" }} /></div>
                <div className="row-state">In translation</div>
              </div>
              <div className="release-row">
                <div><div className="release-name">New Character Pack</div><div className="release-meta">Dialogue + UI</div></div>
                <div className="progress"><span style={{ width: "58%" }} /></div>
                <div className="row-state">Creative review</div>
              </div>
              <div className="release-row">
                <div><div className="release-name">Support Update</div><div className="release-meta">Knowledge-base refresh</div></div>
                <div className="progress"><span style={{ width: "100%" }} /></div>
                <div className="row-state">Ready for release</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="narrative-culturalization">
        <div className="shell split-2">
          <div>
            <p className="eyebrow">Narrative and Culturalization</p>
            <h2>Preserve the Story, Voice, and World Behind Every Game</h2>
            <p className="section-intro">
              Players should feel that characters are speaking naturally to them, not that the original dialogue has simply been transferred from another language.
            </p>
            <p>
              Stepes works with gaming linguists who consider personality, age, relationships, emotional tone, narrative role, and the wider game world when adapting dialogue and story content. Transcreation can preserve humor and emotional effect, while culturalization helps identify references, images, symbols, gestures, and social themes that may influence local reception.
            </p>
            <ul className="mini-list">
              {[
                "Character voice and personality",
                "Story continuity and world-building",
                "Humor, idioms, and wordplay",
                "Names, titles, items, and abilities",
                "Gender, formality, and relationships",
                "Franchise, sequel, and expansion consistency",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="narrative-panel">
            <div className="narrative-quote">Context gives translators the information to make choices that feel intentional inside the game.</div>
            <div className="reference-stack">
              <div className="reference-row"><strong>Characters</strong><span>Profiles, relationships, personality, age, role, and pronunciation.</span></div>
              <div className="reference-row"><strong>World</strong><span>Lore, locations, factions, terminology, history, and recurring conventions.</span></div>
              <div className="reference-row"><strong>Scene</strong><span>Screenshots, speaker, emotional direction, action, audience, and timing.</span></div>
              <div className="reference-row"><strong>Interface</strong><span>String metadata, character limits, variables, placeholders, and UI location.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="platforms-genres">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Gaming Coverage</p>
            <h2>Localization for Every Way Players Play</h2>
            <p className="section-intro">
              Gaming content must work across different platforms, interfaces, audiences, and commercial models. Stepes adapts workflows to the creative, technical, and release requirements of each program.
            </p>
          </div>
          <div className="platform-grid">
            {platformGroups.map((group) => (
              <div className="platform-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gaming-audio">
        <div className="shell split-2">
          <div className="audio-visual" aria-label="Illustrative gaming audio localization visualization">
            <div>
              <p className="eyebrow">Localized Character Audio</p>
              <h3>Character Voice Session</h3>
            </div>
            <div className="audio-wave">
              {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
            </div>
            <div className="audio-meta">
              <div><strong>Script</strong><span>Adapted for speech</span></div>
              <div><strong>Voice</strong><span>Character matched</span></div>
              <div><strong>Timing</strong><span>Scene synchronized</span></div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Voice, Audio, and Cinematics</p>
            <h2>Bring Characters and Stories to Life in Every Market</h2>
            <p className="section-intro">
              Successful audio localization must preserve intent, personality, timing, emotional direction, and continuity across scenes—not simply translate a script.
            </p>
            <p>
              Stepes supports script translation and adaptation, voice casting, recording coordination, pronunciation guidance, audio direction, synchronization, pickups, subtitles, captions, cinematics, and trailers. Spoken-language adaptation helps dialogue sound natural during recording while remaining aligned with character identity and scene length.
            </p>
            <ul className="mini-list">
              {["Script translation and adaptation", "Voice casting and direction", "Pronunciation and terminology guidance", "Timing, synchronization, and pickups", "Subtitles and closed captions", "Cinematics, trailers, and asset management"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="trust-links">
              <a className="editorial-link" href="https://www.stepes.com/voice-over-services/">Voice-Over Services <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/multimedia-translation-services/">Multimedia Localization <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="gaming-lqa">
        <div className="shell qa-layout">
          <div>
            <p className="eyebrow">Localization Quality Assurance</p>
            <h2>Test the Localized Experience, Not Just the Words</h2>
            <p className="section-intro">
              A translation can be linguistically correct and still fail inside the game. Text may be truncated, appear in the wrong context, break an interface, or conflict with gameplay terminology.
            </p>
            <p>
              Stepes combines linguistic review with in-context validation so the final experience feels complete and intentional to players in every target market.
            </p>
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance <ArrowIcon /></a>
          </div>
          <div className="qa-list">
            {qaItems.map((item, index) => (
              <article className="qa-row" key={item.title}>
                <div className="icon-box"><LineIcon name={index === 0 ? "linguist" : index === 1 ? "context" : "qa"} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="game-marketing">
        <div className="shell split-2 top">
          <div>
            <p className="eyebrow">Game Marketing</p>
            <h2>Turn Global Launches Into Local Market Experiences</h2>
            <p className="section-intro">
              Headlines, humor, calls to action, and promotional messages may need to change by market while preserving the original campaign strategy.
            </p>
            <p>
              Stepes provides gaming marketing translation and transcreation for websites, app stores, advertising, social media, trailers, press materials, email, creator content, launch events, search campaigns, and player acquisition. Linguists consider audience, platform, character limits, campaign objectives, and brand voice when adapting each asset.
            </p>
            <div className="trust-links">
              <a className="editorial-link" href="https://www.stepes.com/marketing-translation-services/">Marketing Translation Services <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/website-translation-services/">Website Translation Services <ArrowIcon /></a>
            </div>
          </div>
          <div className="marketing-grid">
            {["Game websites and landing pages", "App store and platform listings", "Paid search and display advertising", "Social media campaigns", "Promotional trailers", "Press releases and media kits", "Email and lifecycle marketing", "Influencer and creator content", "Launch events and regional promotions", "Multilingual SEO and ASO"].map((item) => (
              <div className="marketing-item" key={item}><CheckIcon />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="player-engagement">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Beyond the Game</p>
            <h2>Engage Global Players Through Support, Community, and Esports</h2>
            <p className="section-intro">
              The relationship between a game and its players continues through support, community interaction, livestreams, tournaments, and ongoing product communication.
            </p>
          </div>
          <div className="engagement-grid">
            <article className="engagement-item">
              <div className="icon-box"><LineIcon name="support" /></div>
              <h3>Multilingual Player Support</h3>
              <p>Keep players informed through localized help content and responsive service communications.</p>
              <ul><li>Help centers and FAQs</li><li>Account, billing, and login support</li><li>Technical troubleshooting</li><li>Safety and conduct policies</li><li>Service and maintenance updates</li></ul>
              <a className="editorial-link" href="https://www.stepes.com/multilingual-customer-support/">Multilingual Customer Support <ArrowIcon /></a>
            </article>
            <article className="engagement-item">
              <div className="icon-box"><LineIcon name="people" /></div>
              <h3>Gaming Communities</h3>
              <p>Build ongoing engagement with content tailored for global player communities.</p>
              <ul><li>Patch notes and developer updates</li><li>Release announcements</li><li>Community events and surveys</li><li>Forums and moderation guidance</li><li>Livestream and social content</li></ul>
            </article>
            <article className="engagement-item">
              <div className="icon-box"><LineIcon name="game" /></div>
              <h3>Esports</h3>
              <p>Support competitive gaming with multilingual event, broadcast, team, and sponsor content.</p>
              <ul><li>Tournament rules</li><li>Player and team communications</li><li>Broadcast subtitles and interviews</li><li>Sponsorship and venue materials</li><li>Press and event marketing</li></ul>
              <a className="editorial-link" href="https://www.stepes.com/esports-translation-services/">Explore Esports Translation <ArrowIcon /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai-human-workflows">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">AI + Human Localization</p>
            <h2>Scale Gaming Content Without Losing Creative Control</h2>
            <p className="section-intro">
              Gaming content varies widely in creative complexity, player visibility, urgency, and business risk. Stepes applies content-aware workflows so each asset receives the appropriate balance of automation, human expertise, review, and quality control.
            </p>
          </div>
          <div className="ai-grid">
            {aiPaths.map((path) => (
              <article className="ai-card" key={path.title}>
                <div className="card-label">{path.label}</div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="security-governance">
        <div className="shell split-head">
          <div>
            <p className="eyebrow">Enterprise Governance</p>
            <h2>Protect Game Assets and Control Global Quality</h2>
          </div>
          <div>
            <p className="section-intro">
              Gaming localization often involves confidential information about unreleased titles, new characters, storylines, product roadmaps, business models, and launch plans. Stepes supports secure collaboration, controlled access, reusable language assets, and structured quality governance.
            </p>
          </div>
        </div>
        <div className="shell">
          <div className="governance-grid">
            {governanceItems.map(([title, text]) => (
              <article className="governance-item" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="trust-links">
            <a className="editorial-link" href="https://www.stepes.com/security/">Explore Stepes Security <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-system/">Learn About Our Quality System <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">View ISO Certifications <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Why Stepes</p>
            <h2>A Connected Localization Partner for Global Gaming</h2>
            <p className="section-intro">
              Build a program that connects creative localization, continuous releases, multimedia, marketing, player support, and enterprise governance through one scalable operating model.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([icon, title, text]) => (
              <article className="benefit-item" key={title}>
                <div className="benefit-top"><div className="icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dense" id="gaming-programs">
        <div className="shell">
          <div className="program-panel">
            <div className="split-2">
              <div>
                <p className="eyebrow">Flexible Engagement</p>
                <h2>Structure Localization Around Your Release Model</h2>
                <p>
                  A localization program can begin with a single title or launch and expand into ongoing live-service or portfolio support. Stepes can structure linguist teams, language assets, review paths, and delivery cadence around your content streams, internal reviewers, release cycles, and target markets.
                </p>
                <p>
                  Existing translations and terminology can be assessed and incorporated where appropriate. For long-running franchises, dedicated teams and centralized reference resources help preserve continuity across sequels, expansions, remasters, events, and platform releases.
                </p>
              </div>
              <ul className="program-items">
                {["In-game localization", "Narrative and terminology management", "Voice-over and subtitling", "Store and website translation", "Launch marketing", "Player-support content", "Linguistic game testing", "Continuous release updates", "Community and esports communications", "Legal and corporate translation"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="gaming-faqs">
        <div className="shell">
          <div className="section-head">
            <h2>Gaming Translation and Localization FAQs</h2>
            <p className="section-intro">Explore common questions about gaming localization, continuous release support, multimedia, quality assurance, AI, and multilingual player engagement.</p>
          </div>
          <div className="faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span className="faq-plus" aria-hidden="true" /></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="related-services">
        <div className="shell">
          <div className="section-head">
            <h2>Explore Gaming Localization Services</h2>
            <p className="section-intro">Connect the services your gaming organization needs across product, multimedia, marketing, and player engagement.</p>
          </div>
          <div className="related-grid">
            {relatedServices.map(([title, text, href]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{title} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="gaming-resources">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Gaming Resources</p>
            <h2>Plan Better Global Gaming Experiences</h2>
            <p className="section-intro">Use practical guidance to plan game localization, continuous releases, testing, and AI-assisted workflows.</p>
          </div>
          <div className="resource-grid">
            {resources.map(([title, text, linkLabel, href]) => (
              <article className="resource-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{linkLabel} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2>Ready to Engage Players in Every Market?</h2>
              <p>
                Build a scalable gaming localization program for your next launch, live-service release, or global content operation. Tell us about your games, target markets, content types, platforms, and release requirements.
              </p>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/video-game-translation-services/">Explore Game Localization <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
