import React, { useState } from "react";

export const pageMetadata = {
  title: "Conference & Event Interpreting Services | Stepes",
  description:
    "Plan successful multilingual conferences and events with professional simultaneous and consecutive interpreters for on-site, virtual, and hybrid formats.",
  canonical: "https://www.stepes.com/conference-event-interpreting/",
};

const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M4 13h3v7H5.5A1.5 1.5 0 0 1 4 18.5V13ZM20 13h-3v7h1.5a1.5 1.5 0 0 0 1.5-1.5V13Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M17 20c0 1.1-.9 2-2 2h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 21V5.7L12 3l8 2.7V21M2 21h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8h1M8 12h1M8 16h1M15 8h1M15 12h1M15 16h1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const ScreenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="m10 8 5 2.5-5 2.5V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const HybridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 13v3M5.5 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="17.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M14 17c.4-2.3 1.6-3.5 3.5-3.5S20.6 14.7 21 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const MicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M16 14.5c2.7 0 4.2 1.6 4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const DialogIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5.5h10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H9l-4 3v-3.5a3 3 0 0 1-1-2.2V8.5a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 17H17l3 2.2V16a2.7 2.7 0 0 0 1-2.1v-2.4a2.5 2.5 0 0 0-2-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 9.5h5M8 12h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const EventStageIcon = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
    <rect x="17" y="15" width="62" height="34" rx="7" stroke="currentColor" strokeWidth="2.2" />
    <path d="M27 26h26M27 34h17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="64" cy="32" r="7" stroke="currentColor" strokeWidth="2.2" />
    <path d="M61 32h6M64 29v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M48 49v11M38 60h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="31" cy="70" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="48" cy="70" r="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="65" cy="70" r="5" stroke="currentColor" strokeWidth="2.2" />
    <path d="M23 82c1-7 3.7-10 8-10s7 3 8 10M40 82c1-7 3.7-10 8-10s7 3 8 10M57 82c1-7 3.7-10 8-10s7 3 8 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M28 67v-3a3 3 0 0 1 6 0v3M45 67v-3a3 3 0 0 1 6 0v3M62 67v-3a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 12h17M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9M12 3c-2.4 2.5-3.6 5.5-3.6 9s1.2 6.5 3.6 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M7 3v4M17 3v4M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M8 14h3M8 17h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const FileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M14 3v5h5M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const StageArtwork = () => (
  <svg className="stage-art" viewBox="0 0 620 500" role="img" aria-label="Multilingual conference with a presenter, interpreting booth, and remote participants">
    <defs>
      <linearGradient id="stagePanel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#FFFFFF" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1D2433" floodOpacity="0.08" />
      </filter>
    </defs>

    <rect x="48" y="38" width="524" height="400" rx="30" fill="url(#stagePanel)" stroke="#E7EAF0" strokeWidth="2" filter="url(#softShadow)" />
    <path d="M95 333h418" stroke="#B6BECA" strokeWidth="2" />
    <rect x="110" y="92" width="270" height="166" rx="16" fill="#fff" stroke="#AEB7C5" strokeWidth="2" />
    <rect x="128" y="110" width="234" height="36" rx="7" fill="#F7F8FA" />
    <path d="M143 128h90" stroke="#C11D63" strokeWidth="5" strokeLinecap="round" />
    <path d="M143 167h166M143 192h132M143 217h182" stroke="#7D8797" strokeWidth="5" strokeLinecap="round" opacity="0.72" />
    <circle cx="325" cy="190" r="25" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
    <path d="m316 190 7 7 13-16" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    <circle cx="255" cy="280" r="21" fill="#fff" stroke="#6F7A8A" strokeWidth="2" />
    <path d="M244 274c2-8 18-8 21 0M240 327c2-31 10-46 26-46 16 0 25 15 27 46" fill="#F7F8FA" stroke="#6F7A8A" strokeWidth="2" strokeLinecap="round" />
    <path d="M251 278v-8a5 5 0 0 1 10 0v8M249 275h-4v9h4M263 275h4v9h-4" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="225" y="325" width="80" height="16" rx="5" fill="#C11D63" />

    <rect x="402" y="87" width="112" height="142" rx="14" fill="#fff" stroke="#AEB7C5" strokeWidth="2" />
    <path d="M418 111h80M418 125h52" stroke="#7D8797" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    <circle cx="437" cy="163" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
    <path d="M429 166c1-7 4-11 8-11s7 4 8 11" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
    <rect x="458" y="148" width="41" height="31" rx="6" fill="#F7F8FA" stroke="#AEB7C5" strokeWidth="1.6" />
    <path d="M467 163h23" stroke="#7D8797" strokeWidth="3" strokeLinecap="round" />
    <path d="M418 204h80" stroke="#B6BECA" strokeWidth="2" />

    <rect x="393" y="267" width="128" height="79" rx="12" fill="#fff" stroke="#AEB7C5" strokeWidth="2" />
    <path d="M409 286h52M409 299h79" stroke="#7D8797" strokeWidth="4" strokeLinecap="round" opacity="0.72" />
    <circle cx="492" cy="320" r="12" fill="#C11D63" />
    <path d="M487 320h10M492 315v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

    {[120, 180, 340, 400, 460].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy={377 + (i % 2) * 6} r="13" fill="#fff" stroke="#7D8797" strokeWidth="2" />
        <path d={`M${x - 20} 424c2-23 9-35 20-35s18 12 20 35`} fill="#F7F8FA" stroke="#7D8797" strokeWidth="2" strokeLinecap="round" />
        <path d={`M${x - 8} ${372 + (i % 2) * 6}c1-6 4-9 8-9s7 3 8 9`} fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </g>
    ))}

    <path d="M75 130c-16 20-22 45-18 73M548 269c15 18 22 39 20 64" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    <path d="M67 138l7-11 11 7M556 278l-8-10 10-8" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
  </svg>
);

const formats = [
  {
    icon: <BuildingIcon />,
    title: "In-Person Event Interpreting",
    text: "Give attendees direct access to presentations, panels, workshops, and discussions in their preferred languages. Stepes supports simultaneous and consecutive interpreting, coordinates with venues and AV providers, and helps plan booths, portable systems, headsets, microphones, and language channels where needed.",
  },
  {
    icon: <ScreenIcon />,
    title: "Virtual Event Interpreting",
    text: "Connect speakers and participants across countries and time zones through professional remote interpreters. We help coordinate interpreter access, language channels, speaker audio, moderator instructions, participant guidance, and technical checks for scheduled webinars, summits, and online conferences.",
  },
  {
    icon: <HybridIcon />,
    title: "Hybrid Event Interpreting",
    text: "Create one connected multilingual experience for attendees in the venue and those joining online. Interpreters may work on-site, remotely, or through a combined model while Stepes coordinates venue audio, online platforms, language routing, testing, and contingency planning.",
  },
];

const methods = [
  {
    icon: <HeadsetIcon />,
    title: "Simultaneous Interpreting",
    text: "Interpreters deliver the target language while the speaker continues, allowing audiences to follow through headsets, receivers, or online language channels with minimal delay.",
    fit: "Best suited to conferences, keynotes, congresses, panels, town halls, and tightly scheduled multilingual programs.",
  },
  {
    icon: <MicIcon />,
    title: "Consecutive Interpreting",
    text: "The speaker pauses at planned intervals while the interpreter communicates each segment in the target language. This format often requires less specialized equipment.",
    fit: "Best suited to executive meetings, workshops, interviews, press engagements, discussions, and question-and-answer sessions.",
  },
  {
    icon: <UsersIcon />,
    title: "Whispered Interpreting",
    text: "An interpreter provides quiet, near-real-time interpretation for one person or a very small group during a brief session or meeting.",
    fit: "Best suited to limited language-access needs where a full simultaneous setup would be unnecessary or impractical.",
  },
  {
    icon: <DialogIcon />,
    title: "Liaison and Discussion Interpreting",
    text: "The interpreter supports shorter exchanges as conversations move between individuals or small groups in different languages.",
    fit: "Best suited to networking, site visits, hosted delegations, facility tours, breakout discussions, and exhibitor meetings.",
  },
];

const eventTypes = [
  ["International Conferences and Conventions", "Keynotes, panels, breakout sessions, networking programs, and multilingual audiences across one or several event days."],
  ["Executive Summits and Leadership Meetings", "Strategic presentations, discussions, announcements, and decision-making sessions involving international leaders."],
  ["Medical and Scientific Congresses", "Clinical, scientific, pharmaceutical, medical-device, and healthcare presentations that require careful terminology preparation."],
  ["Investor and Financial Events", "Investor meetings, stakeholder presentations, financial conferences, executive briefings, and high-visibility corporate communications."],
  ["Product Launches and Press Events", "New products, technical demonstrations, announcements, and media programs for international customers, partners, and journalists."],
  ["Employee Town Halls and Company Meetings", "Leadership updates, organizational changes, company announcements, and question-and-answer sessions for multilingual workforces."],
  ["Training and Certification Events", "Instructor-led training, demonstrations, professional development, assessments, and certification programs for global audiences."],
  ["Trade Shows and Industry Forums", "Presentations, exhibitor meetings, technical demonstrations, hosted buyers, and conversations with international partners."],
  ["Government and Public-Sector Events", "International delegations, public meetings, policy forums, institutional conferences, and multilingual stakeholder programs."],
  ["Webinars and Virtual Conferences", "Scheduled online programs supported through remote interpreters, coordinated language channels, and multilingual event content."],
];

const industries = [
  {
    title: "Healthcare and Life Sciences",
    text: "Medical congresses, investigator meetings, advisory boards, clinical training, scientific presentations, and medical-device events.",
    link: "https://www.stepes.com/medical-translation-services/",
    label: "Medical Translation Services",
  },
  {
    title: "Financial and Investor Communications",
    text: "Investor meetings, financial conferences, leadership presentations, stakeholder discussions, and other time-sensitive corporate communications.",
    link: "https://www.stepes.com/financial-translation-services/",
    label: "Financial Translation Services",
  },
  {
    title: "Legal and Compliance",
    text: "Regulatory meetings, policy discussions, negotiations, legal conferences, investigations, and compliance training.",
    link: "https://www.stepes.com/legal-translation-services/",
    label: "Legal Translation Services",
  },
  {
    title: "Technology, Software, and AI",
    text: "Developer conferences, user events, product launches, demonstrations, global team meetings, and technical training.",
    link: "https://www.stepes.com/ai-machine-learning-translation-services/",
    label: "AI and Machine Learning Translation",
  },
  {
    title: "Manufacturing and Engineering",
    text: "Technical conferences, supplier meetings, plant events, engineering presentations, training programs, and product demonstrations.",
    link: "https://www.stepes.com/manufacturing-translation-services/",
    label: "Manufacturing Translation Services",
  },
  {
    title: "Government and Public Sector",
    text: "International delegations, public meetings, policy events, institutional conferences, and cross-border programs.",
    link: "https://www.stepes.com/government-translation-services/",
    label: "Government Translation Services",
  },
];

const workflow = [
  ["Define the Event", "We review dates, location or platform, languages, audience, session structure, subject matter, accessibility needs, and communication goals."],
  ["Design the Interpreting Solution", "Stepes recommends the delivery method, interpreter-team structure, language directions, equipment, channels, room coverage, and technical responsibilities."],
  ["Prepare the Language Team", "We select interpreters by language, subject, event experience, and availability, then organize schedules, materials, terminology, and technical instructions."],
  ["Rehearse and Validate", "Platform access, sound, equipment, language channels, speaker feeds, moderator instructions, backup plans, and escalation contacts are checked before the event."],
  ["Deliver and Follow Through", "Interpreters provide live language support while Stepes coordinates updates, session transitions, issue escalation, and optional post-event localization."],
];

const lifecycle = [
  {
    title: "Before the Event",
    items: ["Presentation translation", "Agenda and program translation", "Speaker biographies", "Event website localization", "Registration and invitations", "Multilingual signage and sponsor materials"],
  },
  {
    title: "During the Event",
    items: ["Live conference interpreting", "Multilingual captions", "Transcription support", "Language-channel coordination", "Updated presentation content", "Speaker and attendee communications"],
  },
  {
    title: "After the Event",
    items: ["Recorded-session transcription", "Subtitle translation and captions", "Video localization and voice-over", "Multilingual summaries", "Training-content localization", "Post-event reports and publishing"],
  },
];

const reliability = [
  ["Named Event Coordination", "A Stepes contact helps coordinate languages, schedules, interpreters, materials, technical requirements, and communication among event stakeholders."],
  ["Confidential Handling", "Presentations, financial information, scientific data, unreleased products, and participant information are handled through appropriate confidentiality practices."],
  ["Terminology Consistency", "Approved terms, product names, acronyms, speaker names, and key messaging can be shared across interpreters and related translation work."],
  ["Schedule and Change Management", "A structured update process helps the language team adapt to revised presentations, speaker changes, room moves, and agenda adjustments."],
  ["Contingency Planning", "Potential disruptions involving equipment, audio, internet connections, rooms, platform access, or interpreter coverage are considered before the event."],
  ["Scalable Language Coverage", "Stepes supports a focused meeting in one language pair or a multilingual program with multiple channels, rooms, speakers, and audience groups."],
];

const faqs = [
  {
    q: "What is conference interpreting?",
    a: "Conference interpreting is the live conversion of spoken communication from one language into another during conferences, meetings, presentations, panels, workshops, and other organized events. Unlike written translation, interpreting happens as people speak and requires real-time listening, analysis, subject preparation, and professional delivery.",
  },
  {
    q: "What is the difference between simultaneous and consecutive interpreting?",
    a: "In simultaneous interpreting, the interpreter delivers the target language while the speaker continues speaking, and attendees usually listen through headsets, receivers, or online language channels. In consecutive interpreting, the speaker pauses at intervals while the interpreter delivers each segment. Simultaneous interpreting preserves the pace of larger events, while consecutive interpreting often works well for smaller, more interactive sessions.",
  },
  {
    q: "Which interpreting method is best for our event?",
    a: "The right method depends on audience size, number of languages, session format, participation, available time, venue or platform, equipment, subject complexity, and event objectives. Stepes reviews the agenda and recommends an approach that supports communication quality and the intended participant experience.",
  },
  {
    q: "How many interpreters will our conference require?",
    a: "Interpreter requirements depend on the languages, interpreting method, event duration, number of rooms, overlapping sessions, technical environment, and subject matter. Longer simultaneous sessions generally require coordinated interpreter teams, while additional coverage may be needed for parallel tracks, breaks, specialized sessions, or multiple language channels.",
  },
  {
    q: "How far in advance should conference interpreters be booked?",
    a: "Begin planning as early as practical, especially when the event involves several languages, specialized terminology, multiple rooms, technical equipment, interpreter travel, or limited interpreter availability. Early planning also provides more time for materials, terminology, rehearsals, and coordination. Shorter timelines may still be possible depending on the event.",
  },
  {
    q: "Does Stepes provide conference interpreting equipment?",
    a: "Stepes can help determine, arrange, or coordinate the interpreting technology required for the event. Depending on the location and format, this may include booths, consoles, microphones, transmitters, headsets, receivers, portable systems, or virtual language channels. We can also coordinate with the venue, AV provider, event producer, or your technical team.",
  },
  {
    q: "Can Stepes support virtual and hybrid conferences?",
    a: "Yes. Stepes supports scheduled virtual and hybrid events with professional remote interpreters and coordinated language-channel workflows. We help review interpreter access, speaker audio, participant language selection, platform requirements, technical testing, and the connection between in-person and remote audiences.",
  },
  {
    q: "What materials should we provide to the interpreters?",
    a: "Useful preparation materials include agendas, presentations, scripts, speaker information, session descriptions, panel questions, product names, approved terminology, acronyms, participant lists, previous recordings, and relevant technical or regulatory documents. Providing materials early gives interpreters more time to prepare for the subject and speakers.",
  },
  {
    q: "Can Stepes support multiple languages, rooms, and parallel sessions?",
    a: "Yes. Stepes can organize multilingual events involving multiple language channels, rooms, tracks, speakers, and overlapping sessions. Planning may include interpreter assignments, room coverage, language routing, equipment requirements, relay configurations, session schedules, and coordination with event and technical teams.",
  },
  {
    q: "What determines the cost of conference interpreting?",
    a: "Pricing depends on the language combinations, language directions, event duration, interpreting method, number of interpreters, rooms and sessions, equipment, venue location, travel, technical support, preparation needs, virtual platform requirements, and any recording or post-event services. Stepes reviews the complete event configuration before preparing a clear proposal.",
  },
  {
    q: "Can Stepes translate our presentations and event recordings?",
    a: "Yes. Stepes can support presentation translation, agenda and event-website localization, registration content, multilingual captions, transcription, subtitle translation, voice-over, recorded-session localization, and multilingual publishing before and after the live event.",
  },
  {
    q: "What is the difference between conference, remote, and on-site interpreting?",
    a: "Conference and event interpreting is designed for planned programs that may require interpreter teams, technology, speaker preparation, multiple sessions, and broader event coordination. Remote interpreting connects participants and interpreters through phone or video for scheduled or on-demand conversations. On-site interpreting places an interpreter physically at a meeting, appointment, site visit, tour, or other in-person engagement.",
  },
];

function FAQItem({ item, index, open, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="faq-item">
      <h3>
        <button
          id={buttonId}
          className="faq-button"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className="faq-control" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div
        id={panelId}
        className="faq-panel"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function StepesConferenceEventInterpretingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #9F1D55;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #171B27;
          --ink-soft: #434B5D;
          --muted: #687286;
          --line: #E3E7ED;
          --surface: #F7F8FA;
          --dark: #161923;
          --white: #FFFFFF;
        }

        .stepes-page, .stepes-page * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
          overflow-x: clip;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }
        .stepes-page a { color: inherit; }
        .stepes-page svg { max-width: 100%; }
        .stepes-page h1,
        .stepes-page h2,
        .stepes-page h3,
        .stepes-page p,
        .stepes-page li,
        .stepes-page a,
        .stepes-page span { overflow-wrap: break-word; }
        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
          min-width: 0;
        }
        .section { padding: 96px 0; }
        .section[id] { scroll-margin-top: 24px; }
        .surface { background: var(--surface); }
        .dark { background: var(--dark); color: var(--white); }
        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
        }
        .dark .eyebrow { color: var(--pink-light) !important; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.16; margin-bottom: 24px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        p { color: var(--ink-soft); font-size: 16px; line-height: 1.72; }
        .dark p { color: #D9DDE5; }
        .body-large { font-size: 18px; line-height: 1.68; }
        .intro { max-width: 800px; }
        .section-head { margin-bottom: 48px; }
        .section-head.center { text-align: center; margin-left: auto; margin-right: auto; }
        .section-head.center .intro { margin-left: auto; margin-right: auto; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s ease, gap .2s ease;
          max-width: 100%;
        }
        .editorial-link:hover,
        .editorial-link:focus-visible { color: var(--magenta-deep) !important; gap: 11px; }
        .button-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
        .btn {
          min-height: 52px;
          padding: 13px 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }
        .btn-primary *, .btn-primary svg, .btn-primary path { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193,29,99,.18); }
        .btn-secondary { background: #fff; color: var(--ink) !important; border-color: #D8DDE5; }
        .btn-secondary:hover { border-color: #B8C0CC; transform: translateY(-1px); }
        .btn:focus-visible,
        .editorial-link:focus-visible,
        .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }

        .hero { padding: 104px 0 88px; position: relative; }
        .hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--line);
        }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr); gap: 56px; align-items: center; }
        .hero-copy { max-width: 650px; min-width: 0; }
        .hero-copy .body-large { max-width: 635px; margin-bottom: 0; }
        .hero-secondary { max-width: 610px; margin: 18px 0 0; color: var(--ink-soft); font-size: 16px; line-height: 1.72; }
        .hero .button-row { gap: 12px; }
        .hero .btn { padding-left: 20px; padding-right: 20px; }
        .hero-art { min-width: 0; display: flex; justify-content: flex-end; }
        .stage-art { width: 100%; max-width: 580px; height: auto; display: block; }

        .trust-band { border-bottom: 1px solid var(--line); }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .trust-item { padding: 26px 26px 26px 0; min-width: 0; }
        .trust-item + .trust-item { padding-left: 26px; border-left: 1px solid var(--line); }
        .trust-item strong { display: block; font-size: 17px; line-height: 1.35; font-weight: 600; }
        .trust-item span { display: block; margin-top: 5px; color: var(--muted); font-size: 16px; line-height: 1.55; }

        .overview-grid { display: grid; grid-template-columns: minmax(290px, .78fr) minmax(0, 1.22fr); gap: 72px; align-items: start; }
        .overview-copy { position: sticky; top: 32px; }
        .value-list { border-top: 1px solid var(--line); }
        .value-row { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .value-icon { width: 48px; height: 48px; border-radius: 16px; background: var(--blush); color: var(--magenta); display: grid; place-items: center; }
        .value-row p { margin-bottom: 0; }
        .sibling-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 30px; }

        .format-list { border-top: 1px solid var(--line); }
        .format-row { display: grid; grid-template-columns: 70px minmax(220px, .42fr) minmax(0, 1fr); gap: 26px; align-items: start; padding: 32px 0; border-bottom: 1px solid var(--line); }
        .icon-ring { width: 52px; height: 52px; border-radius: 18px; border: 1px solid #DDE2E9; background: #fff; color: var(--magenta); display: grid; place-items: center; }
        .format-row h3 { margin: 8px 0 0; }
        .format-row p { margin-bottom: 0; }
        .format-note { margin-top: 28px; max-width: 760px; }
        .format-note .editorial-link { min-height: 0; vertical-align: baseline; }

        .methods-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.16); border-left: 1px solid rgba(255,255,255,.16); }
        .method-item { padding: 34px; border-right: 1px solid rgba(255,255,255,.16); border-bottom: 1px solid rgba(255,255,255,.16); min-width: 0; }
        .method-title { display: flex; align-items: center; gap: 14px; color: #fff; }
        .method-title .method-icon { color: var(--pink-light); }
        .method-item p { margin-bottom: 15px; }
        .method-fit { color: #fff !important; padding-left: 16px; border-left: 2px solid var(--pink-light); }
        .methods-note { margin-top: 34px; padding: 28px 30px; border: 1px solid rgba(242,167,198,.28); border-radius: 22px; background: rgba(255,255,255,.035); }
        .methods-note h3 { color: #fff; margin-bottom: 8px; }
        .methods-note p { max-width: 900px; margin-bottom: 0; }

        .event-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 64px; border-top: 1px solid var(--line); }
        .event-row { padding: 27px 0; border-bottom: 1px solid var(--line); min-width: 0; }
        .event-row h3 { font-size: 20px; margin-bottom: 8px; }
        .event-row p { margin-bottom: 0; }

        .interpreter-grid { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 70px; align-items: start; }
        .interpreter-summary { padding: 36px; border-radius: 28px; background: var(--blush); }
        .summary-statement { margin: 0; color: var(--ink) !important; font-size: 25px !important; line-height: 1.42 !important; font-weight: 600 !important; letter-spacing: -.02em; }
        .interpreter-summary p { margin: 22px 0 0; }
        .criteria-list { border-top: 1px solid var(--line); }
        .criteria-row { display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 18px; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .criteria-marker { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--surface); color: var(--magenta); margin-top: 2px; }
        .criteria-row p { margin-bottom: 0; }

        .industry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .industry-card { border: 1px solid var(--line); border-radius: 24px; background: #fff; padding: 28px; min-width: 0; display: flex; flex-direction: column; }
        .industry-card p { margin-bottom: 18px; }
        .industry-card .editorial-link { margin-top: auto; }

        .technology-panel { border: 1px solid var(--line); border-radius: 30px; overflow: hidden; background: #fff; display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .78fr); }
        .technology-visual { padding: 48px; background: linear-gradient(145deg, #F7F8FA 0%, #FDF2F7 100%); min-width: 0; }
        .tech-diagram { display: grid; grid-template-columns: minmax(0,1fr) 46px minmax(0,1fr) 46px minmax(0,1fr); gap: 12px; align-items: center; margin-top: 34px; }
        .tech-node { min-height: 160px; border: 1px solid #D9DFE7; border-radius: 22px; background: #fff; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; }
        .tech-node svg { color: var(--magenta); }
        .tech-node h3 { font-size: 20px; margin-top: 22px; margin-bottom: 0; }
        .tech-bridge { display: grid; place-items: center; color: var(--magenta); }
        .tech-bridge-line { width: 100%; height: 2px; background: var(--magenta); position: relative; }
        .tech-bridge-line::after { content: ""; position: absolute; right: -1px; top: 50%; width: 9px; height: 9px; border-top: 2px solid var(--magenta); border-right: 2px solid var(--magenta); transform: translateY(-50%) rotate(45deg); }
        .technology-content { padding: 48px; min-width: 0; }
        .tech-list { margin: 28px 0 0; padding: 0; list-style: none; }
        .tech-list li { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 16px; color: var(--ink-soft); }
        .tech-list li svg { color: var(--magenta); margin-top: 3px; }

        .prep-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .72fr); gap: 56px; align-items: start; }
        .material-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 28px; margin-top: 32px; border-top: 1px solid var(--line); }
        .material-item { display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 10px; padding: 14px 0; border-bottom: 1px solid var(--line); color: var(--ink-soft); font-size: 16px; }
        .material-item svg { color: var(--magenta); margin-top: 3px; }
        .brief-panel { border-radius: 28px; background: var(--blush); padding: 36px; }
        .brief-panel ul { list-style: none; margin: 24px 0 0; padding: 0; }
        .brief-panel li { padding: 12px 0 12px 18px; position: relative; border-bottom: 1px solid rgba(193,29,99,.14); font-size: 16px; color: var(--ink-soft); }
        .brief-panel li::before { content: ""; position: absolute; left: 0; top: 22px; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }

        .workflow { position: relative; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0; margin-top: 50px; }
        .workflow::before { content: ""; position: absolute; left: 5%; right: 5%; top: 24px; height: 1px; background: #CCD2DB; }
        .workflow-step { position: relative; padding: 0 22px; min-width: 0; }
        .step-number { width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 2px solid var(--magenta); color: var(--magenta); display: grid; place-items: center; font-weight: 600; line-height: 1; position: relative; z-index: 1; margin-bottom: 24px; }
        .workflow-step h3 { font-size: 20px; }
        .workflow-step p { margin-bottom: 0; }

        .lifecycle-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
        .lifecycle-column { padding: 34px; min-width: 0; }
        .lifecycle-column + .lifecycle-column { border-left: 1px solid var(--line); }
        .lifecycle-column ul { list-style: none; margin: 24px 0 0; padding: 0; }
        .lifecycle-column li { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 10px; padding: 11px 0; color: var(--ink-soft); font-size: 16px; }
        .lifecycle-column li svg { color: var(--magenta); margin-top: 3px; }
        .related-links { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 28px; }

        .reliability-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.15); }
        .reliability-item { padding: 30px 0; border-bottom: 1px solid rgba(255,255,255,.15); min-width: 0; }
        .reliability-item:nth-child(odd) { padding-right: 44px; }
        .reliability-item:nth-child(even) { padding-left: 44px; border-left: 1px solid rgba(255,255,255,.15); }
        .reliability-title { display: flex; align-items: center; gap: 12px; }
        .reliability-title svg { color: var(--pink-light); flex: 0 0 auto; }
        .ai-callout { margin-top: 42px; border: 1px solid rgba(242,167,198,.34); border-radius: 24px; padding: 30px; background: rgba(255,255,255,.035); }
        .ai-callout h3 { color: #fff; }
        .ai-callout p { margin-bottom: 0; }

        .planning-panel { display: grid; grid-template-columns: minmax(0, .9fr) minmax(360px, 1.1fr); border: 1px solid var(--line); border-radius: 30px; overflow: hidden; }
        .planning-copy { padding: 52px; background: #fff; }
        .planning-list { padding: 52px; background: var(--surface); }
        .planning-list-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 26px; margin-top: 22px; }
        .planning-item { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 10px; padding: 10px 0; font-size: 16px; color: var(--ink-soft); }
        .planning-item svg { color: var(--magenta); margin-top: 3px; }

        .faq-wrap { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item h3 { margin: 0; }
        .faq-button { width: 100%; min-height: 72px; padding: 22px 0; border: 0; background: transparent; color: var(--ink); display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; font: inherit; font-size: 20px; line-height: 1.35; font-weight: 600; cursor: pointer; }
        .faq-control { width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D6DCE4; display: grid; place-items: center; color: var(--magenta); font-size: 22px; flex: 0 0 auto; }
        .faq-panel { padding: 0 72px 24px 0; }
        .faq-panel p { max-width: 840px; margin-bottom: 0; }

        .final-cta { padding: 80px 0; }
        .cta-panel { border-radius: 30px; background: var(--blush); padding: 60px; display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, .52fr); gap: 52px; align-items: center; overflow: hidden; }
        .cta-panel h2 { max-width: 720px; }
        .cta-panel p { max-width: 720px; }
        .cta-visual { min-height: 230px; position: relative; display: grid; place-items: center; }
        .cta-circle { width: 205px; height: 205px; border-radius: 50%; background: #fff; border: 1px solid rgba(193,29,99,.16); display: grid; place-items: center; color: var(--magenta); }
        .cta-circle svg { width: 92px; height: 92px; }
        .cta-pulse { position: absolute; width: 250px; height: 250px; border-radius: 50%; border: 1px solid rgba(193,29,99,.12); }
        .cta-pulse::before { content: ""; position: absolute; inset: 24px; border-radius: 50%; border: 1px solid rgba(193,29,99,.1); }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(360px, .86fr); gap: 38px; }
          .industry-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .technology-panel { grid-template-columns: 1fr; }
          .planning-panel { grid-template-columns: 1fr; }
        }

        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-copy { max-width: 760px; }
          .hero-art { justify-content: center; }
          .stage-art { max-width: 620px; }
        }

        @media (max-width: 920px) {
          .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
          .trust-item:nth-child(4) { border-top: 1px solid var(--line); }
          .overview-grid, .interpreter-grid, .prep-grid { grid-template-columns: 1fr; gap: 44px; }
          .overview-copy { position: static; }
          .format-row { grid-template-columns: 60px minmax(0, 1fr); }
          .format-row p { grid-column: 2; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .lifecycle-column + .lifecycle-column { border-left: 0; border-top: 1px solid var(--line); }
          .cta-panel { grid-template-columns: 1fr; padding: 52px; }
          .cta-visual { min-height: 210px; }
          .workflow { grid-template-columns: 1fr; gap: 0; margin-top: 40px; }
          .workflow::before { display: none; }
          .workflow-step { display: grid; grid-template-columns: 58px minmax(0,1fr); column-gap: 18px; padding: 0 0 30px; }
          .workflow-step:not(:last-child)::after { content: ""; position: absolute; left: 23px; top: 48px; bottom: 0; width: 1px; background: #CCD2DB; }
          .step-number { grid-row: 1 / span 2; margin-bottom: 0; }
          .workflow-step h3 { margin-top: 8px; }
          .workflow-step p { grid-column: 2; }
        }

        @media (max-width: 768px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 82px 0 70px; }
          .hero-grid { grid-template-columns: 1fr; gap: 42px; }
          .hero-copy { max-width: 720px; }
          .hero-art { justify-content: center; }
          .stage-art { max-width: 580px; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
          .trust-item:nth-child(4) { border-top: 1px solid var(--line); }
          .overview-grid, .interpreter-grid, .prep-grid { grid-template-columns: 1fr; gap: 42px; }
          .overview-copy { position: static; }
          .format-row { grid-template-columns: 60px minmax(0,1fr); }
          .format-row p { grid-column: 2; }
          .methods-grid, .event-grid, .reliability-grid { grid-template-columns: 1fr; }
          .method-item { padding: 30px; }
          .reliability-item:nth-child(odd), .reliability-item:nth-child(even) { padding: 28px 0; border-left: 0; }
          .industry-grid { grid-template-columns: 1fr; }
          .technology-visual, .technology-content { padding: 36px; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .lifecycle-column + .lifecycle-column { border-left: 0; border-top: 1px solid var(--line); }
          .planning-copy, .planning-list { padding: 40px; }
          .cta-panel { grid-template-columns: 1fr; padding: 48px; }
          .cta-visual { min-height: 210px; }
        }

        @media (max-width: 680px) {
          .tech-diagram { grid-template-columns: 1fr; }
          .tech-bridge { height: 42px; transform: rotate(90deg); }
          .tech-bridge-line { width: 42px; }
        }

        @media (max-width: 560px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section-head { margin-bottom: 36px; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large { font-size: 18px; }
          .hero { padding: 70px 0 62px; }
          .hero-grid { gap: 32px; }
          .button-row { flex-direction: column; }
          .btn { width: 100%; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item, .trust-item + .trust-item, .trust-item:nth-child(3), .trust-item:nth-child(4) { padding: 20px 0; border-left: 0; border-top: 1px solid var(--line); }
          .trust-item:first-child { border-top: 0; }
          .value-row { grid-template-columns: 52px minmax(0,1fr); gap: 14px; }
          .value-icon { width: 44px; height: 44px; border-radius: 14px; }
          .sibling-links, .related-links { flex-direction: column; align-items: flex-start; gap: 2px; }
          .format-row { grid-template-columns: 48px minmax(0,1fr); gap: 16px; }
          .icon-ring { width: 44px; height: 44px; border-radius: 15px; }
          .format-row h3 { margin-top: 4px; }
          .methods-grid { border-left: 0; }
          .method-title, .reliability-title { align-items: flex-start; }
          .method-item { padding: 26px 0; border-right: 0; }
          .methods-note { padding: 24px; }
          .event-grid { column-gap: 0; }
          .interpreter-summary, .brief-panel { padding: 28px; }
          .summary-statement { font-size: 22px !important; }
          .criteria-row { grid-template-columns: 38px minmax(0,1fr); gap: 14px; }
          .industry-card { padding: 24px; }
          .technology-panel { border-radius: 24px; }
          .technology-visual, .technology-content { padding: 28px 22px; }
          .material-grid { grid-template-columns: 1fr; }
          .lifecycle-column { padding: 28px; }
          .planning-copy, .planning-list { padding: 30px 24px; }
          .planning-list-grid { grid-template-columns: 1fr; }
          .faq-button { font-size: 20px; padding: 20px 0; align-items: flex-start; gap: 16px; }
          .faq-panel { padding-right: 0; }
          .final-cta { padding: 64px 0; }
          .cta-panel { padding: 34px 24px; border-radius: 24px; }
          .cta-visual { min-height: 190px; }
          .cta-circle { width: 170px; height: 170px; }
          .cta-pulse { width: 205px; height: 205px; }
          .stage-art { min-width: 0; }
        }

        @media (max-width: 340px) {
          .hero h1 { font-size: 38px; }
          .technology-visual, .technology-content { padding-left: 18px; padding-right: 18px; }
          .method-fit { padding-left: 12px; }
          .faq-control { width: 34px; height: 34px; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .btn, .editorial-link { transition: none; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">On-Site • Virtual • Hybrid</p>
              <h1>Conference &amp; Event Interpreting Services</h1>
              <p className="body-large">
                Bring every participant into the conversation with professional interpreters, coordinated event technology, and end-to-end multilingual support. Stepes helps organizations deliver conferences, meetings, summits, and live events across on-site, virtual, and hybrid environments.
              </p>
              <p className="hero-secondary">
                From a focused executive session to a multilingual conference with parallel tracks, we bring the right interpreters, preparation, technology, and live coordination together in one managed event solution.
              </p>
              <div className="button-row">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                  <span>Plan Your Multilingual Event</span><ArrowIcon />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/conference-event-interpreting/#event-formats">
                  <span>Explore Event Solutions</span><ArrowIcon />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <StageArtwork />
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Service highlights">
          <div className="shell trust-grid">
            <div className="trust-item"><strong>100+ Languages</strong><span>Language coverage for global audiences.</span></div>
            <div className="trust-item"><strong>On-Site, Virtual &amp; Hybrid</strong><span>Delivery designed around your event.</span></div>
            <div className="trust-item"><strong>Specialized Professional Interpreters</strong><span>Matched by language, subject, and format.</span></div>
            <div className="trust-item"><strong>Event Technology Coordination</strong><span>Audio, channels, testing, and AV alignment.</span></div>
          </div>
        </section>

        <section className="section" id="multilingual-event-partner">
          <div className="shell overview-grid">
            <div className="overview-copy">
              <h2>One Language Partner for Every Multilingual Event</h2>
              <p className="body-large">
                Successful multilingual events require more than finding interpreters who speak the right languages. Event schedules, session formats, speaker materials, technology, audience access, terminology, and contingency planning must all work together.
              </p>
              <p>
                Stepes provides a coordinated conference and event interpreting solution built around your program—from one executive meeting to a complex conference with several languages, rooms, speakers, and audience channels.
              </p>
              <div className="sibling-links">
                <a className="editorial-link" href="https://www.stepes.com/remote-interpreting/">Remote Interpreting Services <ArrowIcon size={16} /></a>
                <a className="editorial-link" href="https://www.stepes.com/on-site-interpreting-services/">On-Site Interpreting Services <ArrowIcon size={16} /></a>
              </div>
            </div>

            <div className="value-list">
              <div className="value-row">
                <div className="value-icon"><UsersIcon /></div>
                <div><h3>Professional Interpreters</h3><p>Interpreters are matched by language combination, regional fluency, subject-matter knowledge, interpreting method, and event experience.</p></div>
              </div>
              <div className="value-row">
                <div className="value-icon"><CalendarIcon /></div>
                <div><h3>Event Coordination</h3><p>Our team organizes interpreter schedules, session assignments, materials, language channels, and operating requirements across rooms, speakers, and time zones.</p></div>
              </div>
              <div className="value-row">
                <div className="value-icon"><HeadsetIcon /></div>
                <div><h3>Technology Planning</h3><p>Stepes helps define and coordinate interpreting equipment, audio setup, virtual platform features, participant access, and technical testing.</p></div>
              </div>
              <div className="value-row">
                <div className="value-icon"><FileIcon /></div>
                <div><h3>Multilingual Content Support</h3><p>Presentations, programs, event websites, captions, recordings, learning materials, and attendee communications can be localized before and after the event.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface" id="event-formats">
          <div className="shell">
            <div className="section-head">
              <h2>Interpreting for In-Person, Virtual, and Hybrid Events</h2>
              <p className="intro body-large">
                Every event is different. Stepes designs the interpreting solution around where participants are located, how sessions are structured, how audiences interact, and which technology is already in place.
              </p>
            </div>
            <div className="format-list">
              {formats.map((item) => (
                <article className="format-row" key={item.title}>
                  <div className="icon-ring">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <p className="format-note">
              For routine virtual conversations, scheduled calls, and on-demand language access, visit our <a className="editorial-link" href="https://www.stepes.com/remote-interpreting/">Remote Interpreting Services <ArrowIcon size={16} /></a> page.
            </p>
          </div>
        </section>

        <section className="section dark" id="interpreting-methods">
          <div className="shell">
            <div className="section-head">
              <h2>Choose the Right Interpreting Format for Every Session</h2>
              <p className="intro body-large">
                The right method depends on audience size, number of languages, participation, available time, session length, subject matter, venue, and technical environment. Stepes reviews the complete program and recommends the format that supports both communication quality and the intended event experience.
              </p>
            </div>
            <div className="methods-grid">
              {methods.map((item) => (
                <article className="method-item" key={item.title}>
                  <div className="method-title"><span className="method-icon">{item.icon}</span><h3>{item.title}</h3></div>
                  <p>{item.text}</p>
                  <p className="method-fit">{item.fit}</p>
                </article>
              ))}
            </div>
            <div className="methods-note">
              <h3>Planning Longer or Multilingual Sessions?</h3>
              <p>Sustained simultaneous interpreting may require rotating interpreter teams, while events with several languages may use direct or relay configurations. Stepes designs the team around the schedule, language directions, subject matter, and technical setup.</p>
            </div>
          </div>
        </section>

        <section className="section" id="events-supported">
          <div className="shell">
            <div className="section-head">
              <h2>Conference and Event Interpreting for Every Global Audience</h2>
              <p className="intro body-large">Stepes adapts interpreter teams, technology, preparation, and live support to the purpose and requirements of your event.</p>
            </div>
            <div className="event-grid">
              {eventTypes.map(([title, text]) => (
                <article className="event-row" key={title}><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="professional-interpreters">
          <div className="shell">
            <div className="section-head">
              <h2>Professional Interpreters Matched by Language, Subject, and Event</h2>
              <p className="intro body-large">
                Conference interpreters must do more than understand two languages. They listen, analyze, communicate clearly, manage specialized terminology, follow fast-moving speakers, and deliver the intended meaning in real time.
              </p>
            </div>
            <div className="interpreter-grid">
              <aside className="interpreter-summary">
                <p className="summary-statement">The right interpreter is selected for the complete event—not simply for a language pair.</p>
                <p>Stepes evaluates the delivery method, audience, subject matter, schedule, technical environment, and team requirements before confirming an interpreting solution.</p>
              </aside>
              <div className="criteria-list">
                <div className="criteria-row"><div className="criteria-marker"><GlobeIcon /></div><div><h3>Language and Regional Fluency</h3><p>We consider working languages, language directions, regional usage, audience expectations, pronunciation, and whether direct or relay interpreting may be required.</p></div></div>
                <div className="criteria-row"><div className="criteria-marker"><MicIcon /></div><div><h3>Conference Delivery Experience</h3><p>Relevant experience may include booth interpreting, consecutive business interpreting, virtual and hybrid delivery, panels, question-and-answer sessions, technical presentations, executive communication, and recorded events.</p></div></div>
                <div className="criteria-row"><div className="criteria-marker"><FileIcon /></div><div><h3>Subject-Matter Knowledge</h3><p>Specialized programs often include terminology, data, acronyms, product names, regulatory concepts, and technical explanations that require preparation and domain familiarity.</p></div></div>
                <div className="criteria-row"><div className="criteria-marker"><UsersIcon /></div><div><h3>Team Configuration and Continuity</h3><p>Longer simultaneous sessions, parallel rooms, connected sessions, breaks, schedule changes, and specialized tracks may require rotating teams, additional coverage, or a central language coordinator.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="industry-expertise">
          <div className="shell">
            <div className="section-head center">
              <h2>Subject-Matter Expertise for High-Stakes Communication</h2>
              <p className="intro body-large">The more specialized the discussion, the more important it is to match interpreters with relevant professional knowledge and prepare them with the right event context.</p>
            </div>
            <div className="industry-grid">
              {industries.map((item) => (
                <article className="industry-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="editorial-link" href={item.link}>{item.label} <ArrowIcon size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="event-technology">
          <div className="shell">
            <div className="section-head">
              <h2>Interpreting Technology Built Around Your Event</h2>
              <p className="intro body-large">
                Clear audio and reliable language access are essential to successful conference interpreting. Stepes treats interpreters, sound, equipment, language channels, participant access, and technical readiness as one connected environment.
              </p>
            </div>
            <div className="technology-panel">
              <div className="technology-visual">
                <h3>One Connected Language Experience</h3>
                <p>Technical planning connects the speaker feed, interpreter environment, and participant language channel before the event goes live.</p>
                <div className="tech-diagram" role="img" aria-label="Speaker and floor audio flows into the interpreter environment and then to audience language channels.">
                  <div className="tech-node"><MicIcon /><h3>Speaker &amp; Floor Audio</h3></div>
                  <div className="tech-bridge"><div className="tech-bridge-line" /></div>
                  <div className="tech-node"><HeadsetIcon /><h3>Interpreter Environment</h3></div>
                  <div className="tech-bridge"><div className="tech-bridge-line" /></div>
                  <div className="tech-node"><UsersIcon /><h3>Audience Language Channels</h3></div>
                </div>
              </div>
              <div className="technology-content">
                <h3>Technology and Coordination May Include</h3>
                <ul className="tech-list">
                  {["Interpreter booths and consoles", "Headsets, receivers, and portable systems", "Microphones and floor audio feeds", "Dedicated virtual language channels", "Venue, event platform, and AV coordination", "Multiple-room and parallel-track routing", "Technical rehearsals and language-channel validation", "Backup connections, equipment, and escalation contacts"].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="event-preparation">
          <div className="shell prep-grid">
            <div>
              <h2>Preparation That Protects Every Word</h2>
              <p className="body-large">
                Professional interpreters bring language expertise and real-time communication skills. Your event materials give them the context needed to prepare for the speakers, terminology, organization, and objectives.
              </p>
              <p>Advance preparation helps interpreters identify specialized terms, confirm names and pronunciations, anticipate session flow, and understand the intended audience.</p>
              <div className="material-grid">
                {["Event agendas and run of show", "Session descriptions and schedules", "Speaker presentations", "Speeches and scripts", "Panel questions", "Speaker names and titles", "Participant lists", "Product and company names", "Approved terminology", "Acronyms and abbreviations", "Previous event recordings", "Technical and regulatory references", "Pronunciation guidance", "Updated presentation files"].map((item) => <div className="material-item" key={item}><CheckIcon /><span>{item}</span></div>)}
              </div>
            </div>
            <aside className="brief-panel">
              <h3>Your Event Language Brief</h3>
              <p>For complex programs, Stepes can organize the information needed to connect people, sessions, terminology, materials, and technology through one coordinated reference.</p>
              <ul>
                <li>Event overview and objectives</li>
                <li>Language configuration and directions</li>
                <li>Session and interpreter assignments</li>
                <li>Approved terminology and pronunciations</li>
                <li>Speaker and presentation references</li>
                <li>Technical access and language channels</li>
                <li>Update and escalation contacts</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section surface" id="event-workflow">
          <div className="shell">
            <div className="section-head center">
              <h2>A Coordinated Workflow from Planning to Live Delivery</h2>
              <p className="intro body-large">A structured process keeps interpreter selection, event preparation, technology, rehearsals, and live delivery aligned from the beginning.</p>
            </div>
            <div className="workflow">
              {workflow.map(([title, text], index) => (
                <article className="workflow-step" key={title}>
                  <div className="step-number">{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="multilingual-event-content">
          <div className="shell">
            <div className="section-head">
              <h2>Extend Your Event Across Every Language and Channel</h2>
              <p className="intro body-large">A live event often begins long before the first session and continues after the final speaker. Stepes can support the complete multilingual content lifecycle so international participants receive a consistent experience.</p>
            </div>
            <div className="lifecycle-grid">
              {lifecycle.map((phase) => (
                <article className="lifecycle-column" key={phase.title}>
                  <h3>{phase.title}</h3>
                  <ul>{phase.items.map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}</ul>
                </article>
              ))}
            </div>
            <div className="related-links" aria-label="Related multilingual event services">
              <a className="editorial-link" href="https://www.stepes.com/translation-services/">Professional Translation Services <ArrowIcon size={16} /></a>
              <a className="editorial-link" href="https://www.stepes.com/multimedia-translation-services/">Multimedia Localization <ArrowIcon size={16} /></a>
              <a className="editorial-link" href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing <ArrowIcon size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section dark" id="enterprise-reliability">
          <div className="shell">
            <div className="section-head">
              <h2>Enterprise Reliability When the Event Is Live</h2>
              <p className="intro body-large">Live events leave little room for fragmented responsibility. Stepes brings language planning, interpreter coordination, technical preparation, and multilingual content support together through one managed workflow.</p>
            </div>
            <div className="reliability-grid">
              {reliability.map(([title, text], index) => (
                <article className="reliability-item" key={title}>
                  <div className="reliability-title">{index === 1 ? <LockIcon /> : index === 2 ? <FileIcon /> : index === 3 ? <CalendarIcon /> : index === 4 ? <HeadsetIcon /> : index === 5 ? <GlobeIcon /> : <UsersIcon />}<h3>{title}</h3></div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="ai-callout">
              <h3>Professional Human Interpreting Supported by Intelligent Workflows</h3>
              <p>Professional interpreters remain at the center of high-stakes live communication. Stepes uses modern language technology and structured workflows to support interpreter matching, content organization, terminology preparation, scheduling, transcription, and related multilingual production—strengthening the process without replacing human judgment and adaptability.</p>
            </div>
          </div>
        </section>

        <section className="section" id="plan-your-event">
          <div className="shell">
            <div className="planning-panel">
              <div className="planning-copy">
                <h2>Tell Us About Your Event</h2>
                <p className="body-large">You do not need to know which interpreting method, equipment, or team structure your event requires. Share the information you already have, and Stepes will help recommend an appropriate solution.</p>
                <p>We review the event as a connected program so the language experience supports your speakers, participants, schedule, venue, and technology.</p>
                <div className="button-row">
                  <a className="btn btn-primary" href="https://www.stepes.com/contact-us/"><span>Plan Your Multilingual Event</span><ArrowIcon /></a>
                </div>
              </div>
              <div className="planning-list">
                <h3>Helpful Planning Details</h3>
                <div className="planning-list-grid">
                  {["Event dates and times", "Venue, city, or virtual platform", "In-person, virtual, or hybrid format", "Languages and interpreting directions", "Estimated attendee count", "Number of rooms or tracks", "Session lengths and schedule", "Preferred interpreting method, if known", "Existing AV provider or equipment", "Captioning or accessibility needs", "Event subject matter", "Available presentations and materials", "Recording requirements", "Post-event localization needs"].map((item) => <div className="planning-item" key={item}><CheckIcon /><span>{item}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface" id="frequently-asked-questions">
          <div className="shell">
            <div className="section-head center">
              <h2>Conference and Event Interpreting FAQs</h2>
              <p className="intro body-large">Answers to common questions about event formats, interpreter teams, technology, preparation, scheduling, and pricing.</p>
            </div>
            <div className="faq-wrap">
              {faqs.map((item, index) => (
                <FAQItem key={item.q} item={item} index={index} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <div className="cta-panel">
              <div>
                <h2>Plan a Multilingual Event That Works for Every Audience</h2>
                <p className="body-large">Bring professional interpreters, event technology, language preparation, and live coordination together through one global language partner.</p>
                <p>Tell us about your languages, speakers, schedule, audience, venue, or virtual platform. Stepes will review your event and recommend a multilingual solution built around the experience you want to deliver.</p>
                <div className="button-row">
                  <a className="btn btn-primary" href="https://www.stepes.com/contact-us/"><span>Discuss Your Event</span><ArrowIcon /></a>
                  <a className="btn btn-secondary" href="https://www.stepes.com/interpretation-services/"><span>Explore Interpreting Services</span><ArrowIcon /></a>
                </div>
              </div>
              <div className="cta-visual" aria-hidden="true">
                <div className="cta-pulse" />
                <div className="cta-circle"><EventStageIcon /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
