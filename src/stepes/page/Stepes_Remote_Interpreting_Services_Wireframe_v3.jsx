import React, { useState } from "react";

const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8.3 3.8 10 8.1 7.9 9.6c1.2 2.6 3.3 4.7 5.9 5.9l1.5-2.1 4.3 1.7c.4.2.7.6.6 1.1l-.4 3c-.1.6-.6 1-1.2 1C10.5 19.8 4.2 13.5 3.8 5.4c0-.6.4-1.1 1-1.2l3-.4c.5-.1.9.2 1.1.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VideoIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="12" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m15 10 5-3v10l-5-3v-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M8 14h3M13 14h3M8 17h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const BoltIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m13.2 2-8 12h6l-.4 8 8-12h-6l.4-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 6v5.3c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="m8.8 12 2.1 2.1 4.5-4.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeadsetIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 13v-2a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <rect x="3" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <rect x="17" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M17 19c0 1.1-.9 2-2 2h-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 21V6l8-3v18M12 8h8v13M2 21h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 8h2M7 12h2M7 16h2M15 11h2M15 15h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const HeartIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.8 5.8c-2.1-2.1-5.5-2.1-7.6 0L12 7l-1.2-1.2c-2.1-2.1-5.5-2.1-7.6 0-2.1 2.1-2.1 5.5 0 7.6L12 22l8.8-8.6c2.1-2.1 2.1-5.5 0-7.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12h2l1-2 2 5 1-3h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ScalesIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v18M6 21h12M4 7h16M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SupportIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3a8 8 0 0 0-8 8v3a3 3 0 0 0 3 3h1v-6H5a7 7 0 0 1 14 0h-3v6h1a3 3 0 0 0 3-3v-3a8 8 0 0 0-8-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 19c0 1.1-.9 2-2 2h-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const BankIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m3 9 9-5 9 5H3ZM5 11v7M9 11v7M15 11v7M19 11v7M3 20h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UsersIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 20c.4-4 2.4-6 5.5-6s5.1 2 5.5 6M14 15c3.2 0 5.2 1.7 5.8 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const BriefcaseIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="10" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const NetworkIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m10.8 7.2-4.5 8.5M13.2 7.2l4.5 8.5M7.5 18h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={open ? "ri-chevron ri-chevron-open" : "ri-chevron"}>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeroIllustration = () => (
  <svg className="ri-hero-art" viewBox="0 0 620 510" role="img" aria-label="A remote interpreter connecting two participants through phone and video">
    <defs>
      <linearGradient id="riSoftFill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF7FA" />
        <stop offset="100%" stopColor="#F8F9FC" />
      </linearGradient>
      <filter id="riShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#263247" floodOpacity="0.10" />
      </filter>
    </defs>
    <rect x="24" y="18" width="572" height="468" rx="36" fill="url(#riSoftFill)" stroke="#E6E9EF" />
    <circle cx="310" cy="244" r="88" fill="#FFFFFF" stroke="#D6DAE3" strokeWidth="2" filter="url(#riShadow)" />
    <circle cx="310" cy="213" r="25" fill="#FDF2F7" stroke="#5F6673" strokeWidth="2.2" />
    <path d="M270 289c4-35 18-53 40-53s36 18 40 53" fill="none" stroke="#5F6673" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M279 209v-5a31 31 0 0 1 62 0v5" fill="none" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
    <rect x="273" y="207" width="12" height="28" rx="6" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
    <rect x="335" y="207" width="12" height="28" rx="6" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2.2" />
    <path d="M334 235c0 10-8 16-18 16h-8" fill="none" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="278" y="319" width="64" height="26" rx="13" fill="#C11D63" />
    <text x="310" y="337" textAnchor="middle" fontSize="12" fontWeight="600" fill="#FFFFFF" fontFamily="Arial, sans-serif">INTERPRETER</text>

    <rect x="64" y="86" width="164" height="140" rx="24" fill="#FFFFFF" stroke="#D6DAE3" strokeWidth="2" filter="url(#riShadow)" />
    <circle cx="146" cy="133" r="21" fill="#F4F5F8" stroke="#5F6673" strokeWidth="2" />
    <path d="M111 190c4-28 15-42 35-42s31 14 35 42" fill="none" stroke="#5F6673" strokeWidth="2" strokeLinecap="round" />
    <rect x="82" y="103" width="32" height="24" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" />
    <text x="98" y="119" textAnchor="middle" fontSize="12" fontWeight="600" fill="#A71954" fontFamily="Arial, sans-serif">EN</text>
    <circle cx="204" cy="110" r="5" fill="#47A86D" />

    <rect x="392" y="86" width="164" height="140" rx="24" fill="#FFFFFF" stroke="#D6DAE3" strokeWidth="2" filter="url(#riShadow)" />
    <circle cx="474" cy="133" r="21" fill="#F4F5F8" stroke="#5F6673" strokeWidth="2" />
    <path d="M439 190c4-28 15-42 35-42s31 14 35 42" fill="none" stroke="#5F6673" strokeWidth="2" strokeLinecap="round" />
    <rect x="410" y="103" width="32" height="24" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" />
    <text x="426" y="119" textAnchor="middle" fontSize="12" fontWeight="600" fill="#A71954" fontFamily="Arial, sans-serif">ES</text>
    <circle cx="532" cy="110" r="5" fill="#47A86D" />

    <path d="M228 160c31 9 50 21 68 43M392 160c-31 9-50 21-68 43" fill="none" stroke="#ABB1BC" strokeWidth="2.2" strokeDasharray="7 8" strokeLinecap="round" />
    <path d="M226 372c45-18 82-22 126-6" fill="none" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="218" cy="375" r="6" fill="#C11D63" />
    <circle cx="360" cy="368" r="6" fill="#C11D63" />

    <rect x="74" y="302" width="156" height="112" rx="22" fill="#FFFFFF" stroke="#D6DAE3" strokeWidth="2" />
    <path d="M103 356c0-22 17-39 39-39s39 17 39 39" fill="none" stroke="#5F6673" strokeWidth="2" strokeLinecap="round" />
    <rect x="95" y="351" width="18" height="35" rx="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
    <rect x="171" y="351" width="18" height="35" rx="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
    <path d="M171 386c0 8-7 13-15 13h-10" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
    <text x="152" y="334" textAnchor="middle" fontSize="12" fontWeight="600" fill="#5F6673" fontFamily="Arial, sans-serif">PHONE</text>

    <rect x="390" y="302" width="156" height="112" rx="22" fill="#FFFFFF" stroke="#D6DAE3" strokeWidth="2" />
    <rect x="416" y="326" width="75" height="52" rx="9" fill="#F4F5F8" stroke="#5F6673" strokeWidth="2" />
    <path d="m492 341 27-13v48l-27-13v-22Z" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="453" cy="349" r="9" fill="#FFFFFF" stroke="#5F6673" strokeWidth="1.7" />
    <path d="M438 370c2-10 7-15 15-15s13 5 15 15" fill="none" stroke="#5F6673" strokeWidth="1.7" strokeLinecap="round" />
    <text x="468" y="397" textAnchor="middle" fontSize="12" fontWeight="600" fill="#5F6673" fontFamily="Arial, sans-serif">VIDEO</text>

    <path d="M259 261h-18M379 261h-18" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
    <path d="M246 251v20M374 251v20" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const proofItems = [
  { value: "100+", label: "Languages" },
  { value: "Phone + Video", label: "Remote Interpreting Formats" },
  { value: "On-Demand + Scheduled", label: "Flexible Service Access" },
  { value: "Industry Expertise", label: "Specialized Interpreter Matching" },
];

const formatCards = [
  {
    id: "opi",
    icon: PhoneIcon,
    eyebrow: "OVER-THE-PHONE INTERPRETING",
    title: "Fast, Practical Language Support by Phone",
    description:
      "Over-the-phone interpreting (OPI) connects participants with a professional interpreter through a live audio call. It works especially well when the conversation is primarily verbal and visual context is not essential.",
    uses: [
      "Customer service and contact-center calls",
      "Appointment scheduling and intake",
      "Account, payment, insurance, and benefits inquiries",
      "Technical support and administrative conversations",
      "Three-way calls involving participants in different locations",
    ],
    fit: "Best suited to short, transactional, unexpected, or audio-first interactions.",
    link: "Discuss Phone Interpreting Requirements",
  },
  {
    id: "vri",
    icon: VideoIcon,
    eyebrow: "VIDEO REMOTE INTERPRETING",
    title: "Visual Context for Complex Conversations",
    description:
      "Video remote interpreting (VRI) brings the interpreter into a live video session so participants can see facial expressions, gestures, demonstrations, and other visual information that supports understanding.",
    uses: [
      "Healthcare and telehealth consultations",
      "Legal interviews and client meetings",
      "Employee, education, and parent communication",
      "Product demonstrations and technical instructions",
      "Signed-language communication, where available",
    ],
    fit: "Best suited to sensitive, relationship-focused, visual, or signed-language interactions.",
    link: "Discuss Video Interpreting Requirements",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    text: "Tell us the languages, regional preferences, interpreting format, date and time, expected duration, subject matter, participant locations, and any requested qualifications.",
  },
  {
    number: "02",
    title: "We Match the Interpreter",
    text: "Stepes considers language, dialect, subject expertise, phone or video delivery, professional background, availability, and customer-specific requirements.",
  },
  {
    number: "03",
    title: "Connect by Phone or Video",
    text: "Participants join through the agreed telephone, virtual meeting, telehealth, contact-center, or other approved remote communication environment.",
  },
  {
    number: "04",
    title: "Communicate with Confidence",
    text: "The interpreter facilitates the exchange professionally and impartially, helping each participant communicate directly and understand the conversation in real time.",
  },
];

const industries = [
  {
    icon: HeartIcon,
    title: "Healthcare and Telehealth",
    text: "Support patient intake, consultations, treatment discussions, appointment coordination, discharge communication, behavioral health, and patient follow-up with interpreters matched to the setting.",
    link: "Explore Medical Translation Services",
    href: "https://www.stepes.com/medical-translation-services/",
  },
  {
    icon: ScalesIcon,
    title: "Legal Communication",
    text: "Facilitate attorney-client consultations, witness interviews, case preparation, remote depositions, compliance discussions, immigration matters, and internal investigations.",
    link: "Explore Legal Translation Services",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    icon: SupportIcon,
    title: "Customer Service and Contact Centers",
    text: "Bring interpreters into live customer calls for account assistance, product questions, technical support, complaint resolution, onboarding, billing, and other service interactions.",
    link: "Explore Multilingual Customer Support",
    href: "https://www.stepes.com/solutions/multilingual-customer-support/",
  },
  {
    icon: BankIcon,
    title: "Financial Services and Insurance",
    text: "Support account-service calls, claims, policyholder assistance, benefits explanations, loan discussions, fraud-related interviews, and other conversations involving financial terminology.",
    link: "Explore Financial Translation Services",
    href: "https://www.stepes.com/financial-translation-services/",
  },
  {
    icon: BuildingIcon,
    title: "Government and Community Services",
    text: "Improve language access for public benefits, housing, social services, community health, constituent services, licensing, administrative interviews, and public information programs.",
  },
  {
    icon: BriefcaseIcon,
    title: "Global Business and Workforce Communication",
    text: "Connect employees, candidates, suppliers, executives, and distributed project teams for HR conversations, recruitment interviews, training, negotiations, and technical meetings.",
  },
];

const qualifications = [
  {
    title: "Language and Regional Expertise",
    text: "Match the interpreter to the language pair, country or region, dialect, participant preferences, and terminology used by the people in the conversation.",
  },
  {
    title: "Subject-Matter Experience",
    text: "Consider the communication environment and terminology expected in medical, legal, financial, insurance, technical, government, or customer-facing interactions.",
  },
  {
    title: "Professional Interpreting Skills",
    text: "Look for active listening, accurate meaning transfer, clear delivery, turn management, impartiality, cultural awareness, confidentiality, and appropriate requests for clarification.",
  },
  {
    title: "Credentials and Assignment Requirements",
    text: "Tell us about requested training, certification, screening, or professional experience so we can confirm an appropriate resource based on the assignment and availability.",
  },
];

const enterpriseCapabilities = [
  "Centralized service coordination across teams and locations",
  "On-demand and scheduled interpreting requests",
  "Preferred interpreter profiles and recurring-session continuity",
  "Department, project, matter, or cost-center references",
  "Customer-specific instructions and terminology preparation",
  "Usage visibility, service feedback, and program review",
];

const securityItems = [
  {
    icon: LockIcon,
    title: "Confidentiality",
    text: "Interpreters are expected to handle customer information professionally and limit its use to the interpreting engagement.",
  },
  {
    icon: ShieldIcon,
    title: "Appropriate Communication Environments",
    text: "Use private locations, approved devices and platforms, protected access details, and only the participants who need to attend.",
  },
  {
    icon: NetworkIcon,
    title: "Customer-Specific Procedures",
    text: "Share requirements involving access controls, confidentiality agreements, data handling, recording, interpreter screening, or regulated information before the session.",
  },
];

const serviceOptions = [
  {
    icon: VideoIcon,
    title: "Remote Interpreting",
    text: "For phone calls, telehealth, virtual consultations, distributed teams, legal interviews, customer service, and scheduled online conversations.",
    link: "Compare Phone and Video",
    href: "https://www.stepes.com/interpretation-services/#interpreting-formats",
    current: true,
  },
  {
    icon: UsersIcon,
    title: "On-Site Interpreting",
    text: "For in-person medical appointments, site visits, facility tours, hands-on demonstrations, sensitive meetings, and complex physical environments.",
    link: "On-Site Interpreting Services",
    href: "https://www.stepes.com/on-site-interpreting-services/",
  },
  {
    icon: HeadsetIcon,
    title: "Conference and Event Interpreting",
    text: "For conferences, webinars, town halls, executive meetings, training events, hybrid programs, and simultaneous multilingual audience delivery.",
    link: "Conference and Event Interpreting",
    href: "https://www.stepes.com/conference-event-interpreting-services/",
  },
];

const differentiators = [
  {
    title: "Interpreter Matching That Reflects the Engagement",
    text: "We consider language, regional variety, industry, delivery format, requested qualifications, and availability instead of assigning solely on the language pair.",
  },
  {
    title: "Phone and Video Flexibility",
    text: "Choose the format that fits the participants, equipment, complexity, and communication goal rather than forcing every conversation into the same workflow.",
  },
  {
    title: "Immediate and Scheduled Support",
    text: "Use on-demand service for frontline communication and schedule specialized, sensitive, longer, or credential-specific sessions in advance.",
  },
  {
    title: "Translation and Interpreting Through One Provider",
    text: "Coordinate live conversations with document translation, localization, terminology, customer support content, training materials, and global digital experiences.",
  },
];

const scenarios = [
  {
    label: "TELEHEALTH",
    title: "Supporting a Patient Consultation",
    text: "A healthcare organization schedules a video interpreter for a remote appointment and shares the patient’s language, regional preference, clinical subject, expected duration, and approved video environment.",
  },
  {
    label: "CUSTOMER SUPPORT",
    title: "Resolving a Multilingual Service Call",
    text: "A service representative adds a phone interpreter to an existing call, allowing the representative and customer to communicate directly without transferring the issue to a separate language-specific team.",
  },
  {
    label: "GLOBAL WORKFORCE",
    title: "Facilitating a Sensitive Employee Meeting",
    text: "A global employer schedules a video interpreter for an HR conversation involving managers and an employee in different countries, with participants joining from private locations.",
  },
];

const faqs = [
  {
    question: "What is remote interpreting?",
    answer:
      "Remote interpreting is live spoken- or signed-language communication in which the interpreter participates by phone or video instead of being physically present with all participants. The interpreter conveys each speaker’s meaning in another language in real time.",
  },
  {
    question: "What is the difference between interpreting and translation?",
    answer:
      "Interpreting supports spoken or signed communication as it happens. Translation primarily involves written content such as documents, websites, software, training materials, and marketing communications. Some engagements require both services.",
  },
  {
    question: "What is over-the-phone interpreting?",
    answer:
      "Over-the-phone interpreting, or OPI, connects participants and an interpreter through a live audio call. It is commonly used for customer service, appointment scheduling, technical support, account inquiries, insurance communication, and short conversations where visual context is not required.",
  },
  {
    question: "What is video remote interpreting?",
    answer:
      "Video remote interpreting, or VRI, connects participants through live audio and video. It preserves facial expressions, gestures, demonstrations, and signed communication, making it useful for healthcare, legal, education, employee, and other conversations where visual information improves understanding.",
  },
  {
    question: "Should I choose phone or video interpreting?",
    answer:
      "Choose phone interpreting when the interaction is primarily verbal, short, transactional, or already taking place by telephone. Choose video when visual cues, rapport, demonstrations, signed language, or complex interaction are important.",
  },
  {
    question: "Can I request a remote interpreter on demand?",
    answer:
      "On-demand support may be available depending on the requested language, regional variety, interpreting mode, specialization, credentials, time of the request, and interpreter availability. Contact Stepes to confirm the languages and formats your teams expect to use.",
  },
  {
    question: "Can I schedule an interpreter in advance?",
    answer:
      "Yes. Advance scheduling is recommended for longer sessions, specialized subject matter, less commonly requested languages, credential-specific assignments, sensitive conversations, multi-participant video meetings, and sessions requiring preparation materials.",
  },
  {
    question: "What information should I provide when requesting an interpreter?",
    answer:
      "Provide the language and regional preference, phone or video format, date, time and time zone, expected duration, subject matter, participant locations, communication platform, requested qualifications, accessibility needs, preparation materials, and any customer-specific security procedures.",
  },
  {
    question: "How does Stepes select interpreters?",
    answer:
      "Stepes considers the language, dialect, subject matter, interpreting format, professional experience, requested qualifications, customer preferences, and availability. The precise selection criteria depend on the engagement.",
  },
  {
    question: "Does Stepes provide healthcare and legal interpreters?",
    answer:
      "Stepes supports specialized healthcare, telehealth, and legal interpreting requirements. Tell us about the setting, language, format, expected duration, requested credentials, and organizational procedures so we can confirm appropriate resources based on availability.",
  },
  {
    question: "Can the interpreter review materials before the session?",
    answer:
      "Preparation materials can often be provided for scheduled assignments through an approved process. Helpful materials include agendas, participant roles, glossaries, names, acronyms, presentations, technical terms, and relevant background documents.",
  },
  {
    question: "What equipment is needed for remote interpreting?",
    answer:
      "Phone interpreting can generally use a standard phone, mobile phone, speakerphone, or compatible calling environment. Video interpreting typically requires a camera-enabled device, microphone and speakers or headset, reliable internet access, and an approved video or meeting environment.",
  },
  {
    question: "Can Stepes support customer-service and contact-center calls?",
    answer:
      "Yes. Remote interpreters can support customer inquiries, account assistance, technical support, complaint resolution, billing questions, onboarding, and other multilingual service interactions. Phone interpreting is commonly used for live customer calls, while video may be appropriate for virtual consultations or visually guided support.",
  },
  {
    question: "What happens if the phone or video connection is interrupted?",
    answer:
      "Participants should follow the agreed reconnection procedure, which may involve redialing, rejoining the meeting, contacting the coordinator, or using a documented backup connection. For scheduled or high-priority sessions, a backup contact method is recommended whenever practical.",
  },
  {
    question: "Is remote interpreting confidential?",
    answer:
      "Remote interpreters are expected to handle customer information professionally and confidentially. The overall security of a session also depends on the selected platform, devices, participant environment, access controls, recording practices, and customer procedures.",
  },
  {
    question: "How much does remote interpreting cost?",
    answer:
      "Pricing may depend on the language, regional variety, phone or video delivery, session duration, on-demand or scheduled service, interpreter qualifications, subject specialization, timing, preparation needs, program volume, and technical or coordination requirements.",
  },
  {
    question: "Does Stepes provide remote simultaneous interpreting?",
    answer:
      "Stepes supports multilingual conference, webinar, meeting, and event requirements. Remote simultaneous interpreting involves specialized event technology and coordination and is handled through our Conference and Event Interpreting services.",
  },
];

const styles = `
  .ri-page {
    --ri-magenta: #C11D63;
    --ri-magenta-dark: #A71954;
    --ri-magenta-deep: #7A1542;
    --ri-blush: #FDF2F7;
    --ri-blush-strong: #F9E4ED;
    --ri-pink-light: #F2A7C6;
    --ri-ink: #121826;
    --ri-copy: #4A5261;
    --ri-muted: #6B7380;
    --ri-line: #E4E7EC;
    --ri-soft: #F7F8FA;
    --ri-panel: #FFFFFF;
    --ri-dark: #151B28;
    --ri-dark-copy: #CBD1DB;
    --ri-shadow: 0 18px 50px rgba(27, 34, 48, 0.08);
  }

  .ri-page,
  .ri-page * { box-sizing: border-box; }

  .ri-h1, .ri-h2, .ri-h3,
  .ri-body, .ri-body-lg,
  .ri-link, .ri-button,
  .ri-faq-button, .ri-metric-value, .ri-session-name { overflow-wrap: anywhere; }

  .ri-page {
    width: 100%;
    overflow-x: hidden;
    background: #FFFFFF;
    color: var(--ri-ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .ri-page a { color: inherit; }
  .ri-shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .ri-section { padding-top: 96px; padding-bottom: 96px; }
  .ri-section-dense { padding-top: 80px; padding-bottom: 80px; }
  .ri-soft-section { background: var(--ri-soft); }
  .ri-blush-section { background: var(--ri-blush); }
  .ri-dark-section { background: var(--ri-dark); color: #FFFFFF; }

  .ri-eyebrow {
    margin: 0 0 16px;
    color: var(--ri-magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase;
  }
  .ri-dark-section .ri-eyebrow { color: var(--ri-pink-light) !important; }

  .ri-h1, .ri-h2, .ri-h3 {
    margin: 0;
    color: inherit;
    font-weight: 600;
    letter-spacing: -0.035em;
  }
  .ri-h1 { max-width: 690px; font-size: 48px; line-height: 1.08; }
  .ri-h2 { font-size: 36px; line-height: 1.15; }
  .ri-h3 { font-size: 24px; line-height: 1.24; }
  .ri-body-lg { margin: 0; color: var(--ri-copy); font-size: 18px; line-height: 1.72; }
  .ri-body { margin: 0; color: var(--ri-copy); font-size: 16px; line-height: 1.72; }
  .ri-dark-section .ri-body,
  .ri-dark-section .ri-body-lg { color: var(--ri-dark-copy); }

  .ri-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--ri-magenta) !important;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
    transition: color 180ms ease, gap 180ms ease;
  }
  .ri-link:hover,
  .ri-link:focus-visible { color: var(--ri-magenta-dark) !important; gap: 11px; }
  .ri-link:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.22); outline-offset: 4px; border-radius: 8px; }

  .ri-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 52px;
    padding: 13px 24px;
    border-radius: 999px;
    border: 1px solid transparent;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
  }
  .ri-button-primary,
  .ri-button-primary:link,
  .ri-button-primary:visited,
  .ri-button-primary:hover,
  .ri-button-primary:active,
  .ri-button-primary:focus,
  .ri-button-primary:focus-visible {
    background: var(--ri-magenta);
    color: #FFFFFF !important;
  }
  .ri-button-primary * { color: #FFFFFF !important; stroke: currentColor; }
  .ri-button-primary:hover { background: var(--ri-magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 30px rgba(193, 29, 99, 0.22); }
  .ri-button-primary:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.25); outline-offset: 4px; }
  .ri-button-secondary { background: #FFFFFF; color: var(--ri-ink) !important; border-color: #D9DDE5; }
  .ri-button-secondary:hover { border-color: #BFC5D0; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(24, 31, 44, 0.08); }
  .ri-button-secondary:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.2); outline-offset: 4px; }

  .ri-hero { padding-top: 104px; padding-bottom: 96px; position: relative; }
  .ri-hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr); gap: 56px; align-items: center; }
  .ri-hero-grid > *,
  .ri-overview-grid > *,
  .ri-formats-grid > *,
  .ri-support-grid > *,
  .ri-qualification-grid > *,
  .ri-enterprise-panel > *,
  .ri-tech-grid > *,
  .ri-security-grid > *,
  .ri-language-grid > *,
  .ri-diff-grid > *,
  .ri-faq-shell > * { min-width: 0; }
  .ri-hero-copy { max-width: 710px; }
  .ri-hero-copy .ri-body-lg { max-width: 680px; margin-top: 24px; }
  .ri-hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
  .ri-hero-note { display: flex; align-items: flex-start; gap: 10px; margin-top: 24px; max-width: 610px; color: var(--ri-muted); font-size: 16px; line-height: 1.6; }
  .ri-hero-note svg { flex: 0 0 auto; margin-top: 3px; color: var(--ri-magenta); }
  .ri-hero-art-wrap { min-width: 0; }
  .ri-hero-art { display: block; width: 100%; height: auto; }

  .ri-proof { border-top: 1px solid var(--ri-line); border-bottom: 1px solid var(--ri-line); background: #FFFFFF; }
  .ri-proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .ri-proof-item { padding: 30px 28px; border-right: 1px solid var(--ri-line); }
  .ri-proof-item:first-child { padding-left: 0; }
  .ri-proof-item:last-child { border-right: 0; padding-right: 0; }
  .ri-proof-value { margin: 0; color: var(--ri-ink); font-size: 18px; font-weight: 600; line-height: 1.35; }
  .ri-proof-label { margin: 7px 0 0; color: var(--ri-muted); font-size: 16px; line-height: 1.45; }

  .ri-overview-grid { display: grid; grid-template-columns: minmax(270px, 0.72fr) minmax(0, 1.28fr); gap: 88px; align-items: start; }
  .ri-overview-content { max-width: 790px; }
  .ri-overview-content .ri-body-lg + .ri-body { margin-top: 22px; }
  .ri-overview-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 32px; margin-top: 34px; border-top: 1px solid var(--ri-line); }
  .ri-overview-point { display: flex; align-items: flex-start; gap: 12px; padding: 20px 0; border-bottom: 1px solid var(--ri-line); color: var(--ri-copy); font-size: 16px; line-height: 1.55; }
  .ri-overview-point svg { flex: 0 0 auto; margin-top: 2px; color: var(--ri-magenta); }

  .ri-section-heading { max-width: 800px; }
  .ri-section-heading-center { max-width: 840px; margin: 0 auto; text-align: center; }
  .ri-section-heading .ri-body-lg,
  .ri-section-heading-center .ri-body-lg { margin-top: 20px; }

  .ri-formats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 48px; }
  .ri-format-card { display: flex; flex-direction: column; min-height: 100%; padding: 40px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 28px; }
  .ri-format-icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; background: var(--ri-blush); color: var(--ri-magenta); margin-bottom: 28px; }
  .ri-format-card .ri-h3 { max-width: 460px; }
  .ri-format-card > .ri-body { margin-top: 18px; }
  .ri-format-list { display: grid; gap: 12px; margin: 26px 0 0; padding: 0; list-style: none; }
  .ri-format-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--ri-copy); font-size: 16px; line-height: 1.5; }
  .ri-format-list svg { flex: 0 0 auto; margin-top: 2px; color: var(--ri-magenta); }
  .ri-format-fit { margin: 28px 0 0; padding-top: 22px; border-top: 1px solid var(--ri-line); color: var(--ri-ink); font-size: 16px; font-weight: 600; line-height: 1.55; }
  .ri-format-card .ri-link { margin-top: auto; padding-top: 22px; align-self: flex-start; }

  .ri-decision-table { margin-top: 28px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 24px; overflow: hidden; }
  .ri-decision-row { display: grid; grid-template-columns: 1.05fr 1fr 1fr; }
  .ri-decision-row + .ri-decision-row { border-top: 1px solid var(--ri-line); }
  .ri-decision-cell { padding: 20px 24px; color: var(--ri-copy); font-size: 16px; line-height: 1.5; border-right: 1px solid var(--ri-line); }
  .ri-decision-cell:last-child { border-right: 0; }
  .ri-decision-head .ri-decision-cell { color: var(--ri-ink); font-weight: 600; background: #FAFAFB; }

  .ri-process { position: relative; }
  .ri-process-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 52px; border-top: 1px solid rgba(255,255,255,0.16); }
  .ri-process-step { padding: 34px 28px 0 0; position: relative; }
  .ri-process-step::before { content: ""; position: absolute; top: -5px; left: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ri-pink-light); }
  .ri-process-step + .ri-process-step { padding-left: 28px; border-left: 1px solid rgba(255,255,255,0.12); }
  .ri-process-number { margin: 0 0 18px; color: var(--ri-pink-light); font-size: 14px; font-weight: 600; letter-spacing: 0.12em; }
  .ri-process-step .ri-h3 { color: #FFFFFF; }
  .ri-process-step .ri-body { margin-top: 16px; }

  .ri-support-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; margin-top: 46px; }
  .ri-support-panel { padding: 38px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 26px; }
  .ri-support-top { display: flex; align-items: center; gap: 16px; }
  .ri-support-icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 15px; background: var(--ri-blush); color: var(--ri-magenta); flex: 0 0 auto; }
  .ri-support-panel > .ri-body { margin-top: 18px; }
  .ri-support-panel ul { margin: 22px 0 0; padding: 0; list-style: none; display: grid; gap: 12px; }
  .ri-support-panel li { display: flex; align-items: flex-start; gap: 10px; color: var(--ri-copy); font-size: 16px; line-height: 1.5; }
  .ri-support-panel li svg { color: var(--ri-magenta); flex: 0 0 auto; margin-top: 2px; }
  .ri-support-guidance { margin-top: 28px; padding: 26px 30px; border-left: 3px solid var(--ri-magenta); background: #FFFFFF; color: var(--ri-copy); font-size: 17px; line-height: 1.65; }
  .ri-support-guidance strong { color: var(--ri-ink); font-weight: 600; }

  .ri-industry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0 34px; margin-top: 48px; border-top: 1px solid var(--ri-line); }
  .ri-industry-item { padding: 32px 0 34px; border-bottom: 1px solid var(--ri-line); }
  .ri-industry-icon { width: 44px; height: 44px; display: grid; place-items: center; color: var(--ri-magenta); margin-bottom: 20px; }
  .ri-industry-item .ri-body { margin-top: 15px; }
  .ri-industry-item .ri-link { margin-top: 14px; }

  .ri-qualification-grid { display: grid; grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr); gap: 76px; align-items: start; }
  .ri-qualification-intro .ri-body-lg { margin-top: 20px; }
  .ri-prep-box { margin-top: 32px; padding: 28px; border: 1px solid rgba(255,255,255,0.16); border-radius: 22px; }
  .ri-prep-box h3 { margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 600; line-height: 1.35; }
  .ri-prep-box p { margin: 12px 0 0; color: var(--ri-dark-copy); font-size: 16px; line-height: 1.65; }
  .ri-qualification-list { border-top: 1px solid rgba(255,255,255,0.16); }
  .ri-qualification-row { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 18px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,0.16); }
  .ri-qualification-marker { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: rgba(242,167,198,0.12); color: var(--ri-pink-light); }
  .ri-qualification-row h3 { margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 600; line-height: 1.35; }
  .ri-qualification-row p { margin: 9px 0 0; color: var(--ri-dark-copy); font-size: 16px; line-height: 1.65; }

  .ri-enterprise-panel { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(430px, 1.08fr); gap: 50px; padding: 54px; background: #FFFFFF; border: 1px solid #ECDDE4; border-radius: 30px; box-shadow: var(--ri-shadow); }
  .ri-enterprise-copy .ri-body-lg { margin-top: 20px; }
  .ri-enterprise-list { display: grid; gap: 12px; margin: 28px 0 0; padding: 0; list-style: none; }
  .ri-enterprise-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--ri-copy); font-size: 16px; line-height: 1.55; }
  .ri-enterprise-list svg { flex: 0 0 auto; margin-top: 3px; color: var(--ri-magenta); }
  .ri-enterprise-copy .ri-button { margin-top: 30px; }

  .ri-dashboard { padding: 24px; background: #F7F8FA; border: 1px solid var(--ri-line); border-radius: 24px; }
  .ri-dashboard-top { display: flex; justify-content: space-between; gap: 16px; align-items: center; padding-bottom: 18px; border-bottom: 1px solid var(--ri-line); }
  .ri-dashboard-title { margin: 0; color: var(--ri-ink); font-size: 16px; font-weight: 600; }
  .ri-dashboard-status { display: inline-flex; align-items: center; gap: 7px; color: #397B54; font-size: 14px; line-height: 1.3; }
  .ri-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #47A86D; }
  .ri-dashboard-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 18px; }
  .ri-metric { padding: 18px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 16px; }
  .ri-metric-label { margin: 0; color: var(--ri-muted); font-size: 14px; line-height: 1.35; }
  .ri-metric-value { margin: 8px 0 0; color: var(--ri-ink); font-size: 20px; font-weight: 600; line-height: 1.2; }
  .ri-session-list { margin-top: 16px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 18px; overflow: hidden; }
  .ri-session-head, .ri-session-row { display: grid; grid-template-columns: 1.25fr .9fr .8fr; gap: 10px; align-items: center; padding: 14px 16px; }
  .ri-session-head { background: #FAFAFB; color: var(--ri-muted); font-size: 14px; line-height: 1.3; }
  .ri-session-row { color: var(--ri-copy); font-size: 14px; line-height: 1.4; border-top: 1px solid var(--ri-line); }
  .ri-session-name { color: var(--ri-ink); font-weight: 600; }
  .ri-mode-chip { display: inline-flex; justify-content: center; padding: 5px 9px; border-radius: 999px; background: var(--ri-blush); color: var(--ri-magenta); font-size: 12px; font-weight: 600; }
  .ri-dashboard-note { margin: 16px 0 0; color: var(--ri-copy); font-size: 16px; line-height: 1.55; }

  .ri-tech-grid { display: grid; grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr); gap: 72px; align-items: start; }
  .ri-tech-copy .ri-body-lg { margin-top: 20px; }
  .ri-tech-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 28px; margin: 28px 0 0; padding: 0; list-style: none; }
  .ri-tech-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--ri-copy); font-size: 16px; line-height: 1.5; }
  .ri-tech-list svg { color: var(--ri-magenta); flex: 0 0 auto; margin-top: 2px; }
  .ri-ai-panel { padding: 38px; background: var(--ri-blush); border-radius: 28px; }
  .ri-ai-panel .ri-h3 { max-width: 500px; }
  .ri-ai-panel > .ri-body { margin-top: 18px; }
  .ri-ai-columns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; margin-top: 26px; }
  .ri-ai-column { padding-top: 20px; border-top: 1px solid #E8CBD8; }
  .ri-ai-column h4 { margin: 0; color: var(--ri-ink); font-size: 17px; font-weight: 600; line-height: 1.4; }
  .ri-ai-column ul { margin: 14px 0 0; padding-left: 18px; color: var(--ri-copy); font-size: 16px; line-height: 1.65; }

  .ri-security-grid { display: grid; grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr); gap: 82px; align-items: start; }
  .ri-security-copy .ri-body-lg { margin-top: 20px; }
  .ri-security-copy .ri-link { margin-top: 18px; }
  .ri-security-list { border-top: 1px solid var(--ri-line); }
  .ri-security-item { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 26px 0; border-bottom: 1px solid var(--ri-line); }
  .ri-security-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 14px; background: var(--ri-blush); color: var(--ri-magenta); }
  .ri-security-item h3 { margin: 0; color: var(--ri-ink); font-size: 20px; font-weight: 600; line-height: 1.35; }
  .ri-security-item p { margin: 8px 0 0; color: var(--ri-copy); font-size: 16px; line-height: 1.65; }
  .ri-security-note { margin-top: 28px; padding: 26px 28px; border-radius: 20px; background: var(--ri-soft); color: var(--ri-copy); font-size: 16px; line-height: 1.65; }
  .ri-security-note strong { color: var(--ri-ink); font-weight: 600; }

  .ri-language-grid { display: grid; grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr); gap: 76px; align-items: center; }
  .ri-language-copy .ri-body-lg { margin-top: 20px; }
  .ri-language-copy .ri-link { margin-top: 22px; }
  .ri-language-panel { padding: 34px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 28px; }
  .ri-language-panel h3 { margin: 0; font-size: 20px; font-weight: 600; line-height: 1.4; }
  .ri-language-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .ri-language-chip { padding: 9px 13px; border: 1px solid var(--ri-line); border-radius: 999px; color: var(--ri-copy); background: #FFFFFF; font-size: 14px; line-height: 1.25; }
  .ri-language-note { margin: 24px 0 0; padding-top: 22px; border-top: 1px solid var(--ri-line); color: var(--ri-copy); font-size: 16px; line-height: 1.65; }

  .ri-service-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 46px; }
  .ri-service-card { display: flex; flex-direction: column; min-height: 100%; padding: 34px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 24px; }
  .ri-service-card-current { border-color: #E4A8C0; box-shadow: inset 0 3px 0 var(--ri-magenta); background: #FFFBFD; }
  .ri-service-icon { display: grid; place-items: center; width: 48px; height: 48px; color: var(--ri-magenta); margin-bottom: 22px; }
  .ri-service-card .ri-body { margin-top: 15px; }
  .ri-service-card .ri-link { margin-top: auto; padding-top: 22px; align-self: flex-start; }

  .ri-diff-grid { display: grid; grid-template-columns: minmax(280px, 0.74fr) minmax(0, 1.26fr); gap: 82px; align-items: start; }
  .ri-diff-heading .ri-body-lg { margin-top: 20px; }
  .ri-diff-list { border-top: 1px solid var(--ri-line); }
  .ri-diff-row { display: grid; grid-template-columns: minmax(210px, .76fr) minmax(0, 1.24fr); gap: 32px; padding: 27px 0; border-bottom: 1px solid var(--ri-line); }
  .ri-diff-row h3 { margin: 0; color: var(--ri-ink); font-size: 20px; font-weight: 600; line-height: 1.4; }
  .ri-diff-row p { margin: 0; color: var(--ri-copy); font-size: 16px; line-height: 1.65; }

  .ri-scenarios-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 46px; }
  .ri-scenario { padding: 34px; background: #FFFFFF; border: 1px solid var(--ri-line); border-radius: 24px; }
  .ri-scenario-label { margin: 0 0 16px; color: var(--ri-magenta); font-size: 11px; font-weight: 600; letter-spacing: .14em; line-height: 1.25; }
  .ri-scenario .ri-body { margin-top: 14px; }

  .ri-faq-shell { display: grid; grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr); gap: 80px; align-items: start; }
  .ri-faq-heading { position: sticky; top: 24px; }
  .ri-faq-heading .ri-body-lg { margin-top: 20px; }
  .ri-faq-list { border-top: 1px solid var(--ri-line); }
  .ri-faq-item { border-bottom: 1px solid var(--ri-line); }
  .ri-faq-button { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr) 24px; gap: 22px; align-items: center; padding: 23px 0; background: transparent; border: 0; color: var(--ri-ink); text-align: left; cursor: pointer; font-family: inherit; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .ri-faq-button:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.2); outline-offset: 6px; border-radius: 6px; }
  .ri-faq-button svg { color: var(--ri-magenta); }
  .ri-chevron { transition: transform 180ms ease; }
  .ri-chevron-open { transform: rotate(180deg); }
  .ri-faq-answer { padding: 0 44px 24px 0; color: var(--ri-copy); font-size: 16px; line-height: 1.72; }

  .ri-final { padding-top: 88px; padding-bottom: 88px; }
  .ri-final-panel { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 48px; align-items: center; padding: 54px 58px; border: 1px solid #F0CEDD; border-radius: 30px; background: linear-gradient(135deg, #FDF2F7 0%, #FFF9FC 100%); color: var(--ri-ink); overflow: hidden; position: relative; box-shadow: 0 18px 46px rgba(122, 21, 66, 0.07); }
  .ri-final-panel::after { content: ""; position: absolute; right: -70px; top: -90px; width: 260px; height: 260px; border-radius: 50%; border: 1px solid rgba(193,29,99,.12); }
  .ri-final-panel::before { content: ""; position: absolute; right: 86px; bottom: -114px; width: 210px; height: 210px; border-radius: 50%; background: rgba(193,29,99,.035); }
  .ri-final-copy { max-width: 760px; position: relative; z-index: 1; }
  .ri-final-copy .ri-body-lg { margin-top: 18px; color: var(--ri-copy); }
  .ri-final-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; position: relative; z-index: 1; }
  .ri-final-actions .ri-button { min-width: 230px; }

  @media (max-width: 1180px) {
    .ri-shell { padding-left: 40px; padding-right: 40px; }
    .ri-hero-grid { grid-template-columns: minmax(0, 1.08fr) minmax(370px, .92fr); gap: 36px; }
    .ri-enterprise-panel { grid-template-columns: minmax(0, .92fr) minmax(390px, 1.08fr); padding: 44px; }
    .ri-overview-grid,
    .ri-security-grid,
    .ri-diff-grid { gap: 58px; }
  }

  @media (max-width: 960px) {
    .ri-shell { padding-left: 24px; padding-right: 24px; }
    .ri-section { padding-top: 80px; padding-bottom: 80px; }
    .ri-section-dense { padding-top: 72px; padding-bottom: 72px; }
    .ri-h1 { font-size: 42px; }
    .ri-h2 { font-size: 32px; }
    .ri-h3 { font-size: 22px; }
    .ri-hero { padding-top: 88px; padding-bottom: 78px; }
    .ri-hero-grid { grid-template-columns: 1fr; gap: 48px; }
    .ri-hero-copy { max-width: 760px; }
    .ri-hero-art-wrap { max-width: 650px; margin: 0 auto; }
    .ri-proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ri-proof-item:nth-child(2) { border-right: 0; }
    .ri-proof-item:nth-child(3), .ri-proof-item:nth-child(4) { border-top: 1px solid var(--ri-line); }
    .ri-proof-item:nth-child(3) { padding-left: 0; }
    .ri-proof-item:nth-child(2) { padding-right: 0; }
    .ri-overview-grid,
    .ri-qualification-grid,
    .ri-tech-grid,
    .ri-security-grid,
    .ri-language-grid,
    .ri-diff-grid,
    .ri-faq-shell { grid-template-columns: 1fr; gap: 42px; }
    .ri-overview-grid > div:first-child,
    .ri-security-copy,
    .ri-diff-heading,
    .ri-faq-heading { max-width: 760px; }
    .ri-faq-heading { position: static; }
    .ri-process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ri-process-step:nth-child(3) { border-left: 0; padding-left: 0; border-top: 1px solid rgba(255,255,255,.12); margin-top: 30px; padding-top: 34px; }
    .ri-process-step:nth-child(3)::before,
    .ri-process-step:nth-child(4)::before { top: 29px; }
    .ri-process-step:nth-child(4) { border-top: 1px solid rgba(255,255,255,.12); margin-top: 30px; padding-top: 34px; }
    .ri-industry-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ri-enterprise-panel { grid-template-columns: 1fr; }
    .ri-dashboard { max-width: 720px; }
    .ri-service-grid,
    .ri-scenarios-grid { grid-template-columns: 1fr; }
    .ri-service-card,
    .ri-scenario { max-width: none; }
    .ri-final-panel { grid-template-columns: 1fr; }
    .ri-final-actions { flex-direction: row; flex-wrap: wrap; }
  }

  @media (max-width: 820px) {
    .ri-formats-grid,
    .ri-support-grid { grid-template-columns: 1fr; }
    .ri-format-card,
    .ri-support-panel { padding: 34px; }
    .ri-decision-table { overflow: visible; border: 0; background: transparent; }
    .ri-decision-head { display: none; }
    .ri-decision-row { grid-template-columns: 1fr; margin-top: 14px; border: 1px solid var(--ri-line); border-radius: 18px; overflow: hidden; background: #FFFFFF; }
    .ri-decision-row + .ri-decision-row { border-top: 1px solid var(--ri-line); }
    .ri-decision-cell { border-right: 0; padding: 14px 18px; }
    .ri-decision-cell:first-child { background: #FAFAFB; color: var(--ri-ink); font-weight: 600; }
    .ri-decision-cell:nth-child(2)::before { content: "Phone: "; color: var(--ri-ink); font-weight: 600; }
    .ri-decision-cell:nth-child(3)::before { content: "Video: "; color: var(--ri-ink); font-weight: 600; }
  }

  @media (max-width: 720px) {
    .ri-shell { padding-left: 20px; padding-right: 20px; }
    .ri-section { padding-top: 68px; padding-bottom: 68px; }
    .ri-section-dense { padding-top: 64px; padding-bottom: 64px; }
    .ri-hero { padding-top: 72px; padding-bottom: 64px; }
    .ri-h1 { font-size: 38px; line-height: 1.1; }
    .ri-h2 { font-size: 30px; line-height: 1.18; }
    .ri-h3 { font-size: 20px; }
    .ri-body-lg { font-size: 18px; line-height: 1.68; }
    .ri-hero-actions { flex-direction: column; }
    .ri-hero-actions .ri-button { width: 100%; }
    .ri-hero-art-wrap { margin-left: -6px; margin-right: -6px; }
    .ri-proof-grid { grid-template-columns: 1fr; }
    .ri-proof-item,
    .ri-proof-item:first-child,
    .ri-proof-item:nth-child(2),
    .ri-proof-item:nth-child(3),
    .ri-proof-item:last-child { padding: 22px 0; border-right: 0; border-top: 0; border-bottom: 1px solid var(--ri-line); }
    .ri-proof-item:last-child { border-bottom: 0; }
    .ri-overview-list { grid-template-columns: 1fr; }
    .ri-industry-grid,
    .ri-tech-list,
    .ri-ai-columns { grid-template-columns: 1fr; }
    .ri-format-card,
    .ri-support-panel,
    .ri-scenario,
    .ri-service-card { padding: 28px 24px; }
    .ri-process-grid { grid-template-columns: 1fr; border-top: 0; margin-top: 34px; }
    .ri-process-step,
    .ri-process-step + .ri-process-step,
    .ri-process-step:nth-child(3),
    .ri-process-step:nth-child(4) { padding: 0 0 28px 42px; margin: 0 0 28px; border-left: 1px solid rgba(255,255,255,.18); border-top: 0; border-bottom: 1px solid rgba(255,255,255,.12); }
    .ri-process-step:last-child { border-bottom: 0; margin-bottom: 0; }
    .ri-process-step::before,
    .ri-process-step:nth-child(3)::before,
    .ri-process-step:nth-child(4)::before { top: 2px; left: -5px; }
    .ri-enterprise-panel { padding: 30px 24px; }
    .ri-dashboard { padding: 18px; }
    .ri-ai-panel { padding: 28px 24px; }
    .ri-security-note { padding: 24px 22px; }
    .ri-support-top { align-items: flex-start; }
    .ri-dashboard-metrics { grid-template-columns: 1fr; }
    .ri-session-head { display: none; }
    .ri-session-row { grid-template-columns: 1fr auto; gap: 8px; }
    .ri-session-row > span:nth-child(2) { grid-column: 1 / -1; }
    .ri-language-panel { padding: 26px 22px; }
    .ri-diff-row { grid-template-columns: 1fr; gap: 10px; }
    .ri-faq-button { font-size: 17px; padding: 21px 0; }
    .ri-faq-answer { padding-right: 0; }
    .ri-final { padding-top: 64px; padding-bottom: 64px; }
    .ri-final-panel { padding: 38px 24px; }
    .ri-final-actions { flex-direction: column; }
    .ri-final-actions .ri-button { width: 100%; min-width: 0; }
  }

  @media (max-width: 390px) {
    .ri-h1 { font-size: 38px; }
    .ri-hero-copy .ri-body-lg { font-size: 17px; }
    .ri-format-card,
    .ri-support-panel,
    .ri-service-card,
    .ri-scenario { padding-left: 22px; padding-right: 22px; }
    .ri-enterprise-panel { padding-left: 20px; padding-right: 20px; }
    .ri-dashboard { padding-left: 16px; padding-right: 16px; }
    .ri-dashboard-top { flex-direction: column; align-items: flex-start; }
    .ri-support-top { flex-direction: column; gap: 12px; }
    .ri-qualification-row { grid-template-columns: 34px minmax(0, 1fr); gap: 14px; }
    .ri-session-row { grid-template-columns: 1fr; }
    .ri-session-row > span:nth-child(2) { grid-column: auto; }
    .ri-mode-chip { justify-self: start; }
  }
`;

export default function StepesRemoteInterpretingServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="ri-page">
      <style>{styles}</style>

      <main>
        <section className="ri-hero" aria-labelledby="ri-page-title">
          <div className="ri-shell ri-hero-grid">
            <div className="ri-hero-copy">
              <p className="ri-eyebrow">Phone + Video Interpreting</p>
              <h1 className="ri-h1" id="ri-page-title">Professional Remote Interpreting Services</h1>
              <p className="ri-body-lg">
                Connect with professional interpreters by phone or video for clear multilingual communication across locations, channels, and time zones.
              </p>
              <p className="ri-body" style={{ marginTop: 18, maxWidth: 670 }}>
                Stepes supports healthcare, legal, government, customer service, financial, technical, and international business conversations—from unexpected calls to scheduled consultations requiring specialized language expertise.
              </p>
              <div className="ri-hero-actions">
                <a className="ri-button ri-button-primary" href="https://www.stepes.com/contact-us/">
                  <span>Request Remote Interpreting</span>
                  <ArrowIcon />
                </a>
                <a className="ri-button ri-button-secondary" href="https://www.stepes.com/interpretation-services/#interpreting-formats">
                  <span>Compare Phone and Video</span>
                  <ArrowIcon />
                </a>
              </div>
              <div className="ri-hero-note">
                <CheckIcon />
                <span>Available on demand or by appointment, subject to language, specialization, interpreter, and scheduling availability.</span>
              </div>
            </div>
            <div className="ri-hero-art-wrap">
              <HeroIllustration />
            </div>
          </div>
        </section>

        <section className="ri-proof" aria-label="Remote interpreting service highlights">
          <div className="ri-shell ri-proof-grid">
            {proofItems.map((item) => (
              <div className="ri-proof-item" key={item.value}>
                <p className="ri-proof-value">{item.value}</p>
                <p className="ri-proof-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ri-section">
          <div className="ri-shell ri-overview-grid">
            <div>
              <h2 className="ri-h2">Language Access Wherever Conversations Happen</h2>
            </div>
            <div className="ri-overview-content">
              <p className="ri-body-lg">
                Global communication no longer takes place only in conference rooms. Customers call from different countries, patients meet clinicians through telehealth, employees collaborate across locations, and legal or financial consultations increasingly include remote participants.
              </p>
              <p className="ri-body">
                Remote interpreting brings a professional interpreter into these conversations through a live phone or video connection. It expands access to multilingual support without requiring the interpreter to be physically present with every participant.
              </p>
              <div className="ri-overview-list">
                {[
                  "Unexpected language needs",
                  "Scheduled multilingual appointments",
                  "Distributed teams and service locations",
                  "Virtual consultations and meetings",
                  "Customer and constituent communication",
                  "Specialized or less commonly requested languages",
                ].map((item) => (
                  <div className="ri-overview-point" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="ri-body" style={{ marginTop: 26 }}>
                Interpreting is distinct from written translation. A translator works primarily with written content, while an interpreter facilitates spoken or signed communication as it happens. The right remote format depends on the complexity, visual context, sensitivity, duration, and communication environment.
              </p>
            </div>
          </div>
        </section>

        <section className="ri-section ri-soft-section" id="interpreting-formats">
          <div className="ri-shell">
            <div className="ri-section-heading-center">
              <p className="ri-eyebrow">Remote Interpreting Options</p>
              <h2 className="ri-h2">Choose the Right Interpreting Format</h2>
              <p className="ri-body-lg">
                Phone and video interpreting both provide live access to a human interpreter. The right option depends on whether the conversation requires visual information in addition to spoken communication.
              </p>
            </div>

            <div className="ri-formats-grid">
              {formatCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="ri-format-card" key={item.id}>
                    <div className="ri-format-icon"><Icon /></div>
                    <p className="ri-eyebrow">{item.eyebrow}</p>
                    <h3 className="ri-h3">{item.title}</h3>
                    <p className="ri-body">{item.description}</p>
                    <ul className="ri-format-list">
                      {item.uses.map((use) => (
                        <li key={use}><CheckIcon /><span>{use}</span></li>
                      ))}
                    </ul>
                    <p className="ri-format-fit">{item.fit}</p>
                    <a className="ri-link" href="https://www.stepes.com/contact-us/">
                      <span>{item.link}</span><ArrowIcon />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="ri-decision-table" role="table" aria-label="Phone and video interpreting comparison">
              <div className="ri-decision-row ri-decision-head" role="row">
                <div className="ri-decision-cell" role="columnheader">Decision Factor</div>
                <div className="ri-decision-cell" role="columnheader">Phone Interpreting</div>
                <div className="ri-decision-cell" role="columnheader">Video Interpreting</div>
              </div>
              {[
                ["Visual context", "Not required", "Important or helpful"],
                ["Typical equipment", "Telephone or compatible calling environment", "Camera-enabled device and reliable internet"],
                ["Common use", "Calls, intake, service, and short interactions", "Consultations, demonstrations, and visual conversations"],
                ["Signed languages", "Not applicable", "Appropriate, subject to availability"],
                ["Scheduling", "On-demand or scheduled", "On-demand or scheduled, subject to availability"],
              ].map((row) => (
                <div className="ri-decision-row" role="row" key={row[0]}>
                  {row.map((cell, index) => (
                    <div className="ri-decision-cell" role={index === 0 ? "rowheader" : "cell"} key={cell + index}>{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ri-section ri-dark-section ri-process">
          <div className="ri-shell">
            <div className="ri-section-heading">
              <h2 className="ri-h2">How Stepes Remote Interpreting Works</h2>
              <p className="ri-body-lg">
                Stepes coordinates the language, interpreting format, subject expertise, and session requirements so participants can focus on the conversation itself.
              </p>
            </div>
            <div className="ri-process-grid">
              {steps.map((step) => (
                <article className="ri-process-step" key={step.number}>
                  <p className="ri-process-number">{step.number}</p>
                  <h3 className="ri-h3">{step.title}</h3>
                  <p className="ri-body">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ri-section ri-blush-section">
          <div className="ri-shell">
            <div className="ri-section-heading-center">
              <h2 className="ri-h2">Flexible Support for Immediate and Planned Conversations</h2>
              <p className="ri-body-lg">
                Some language needs arise without warning. Others can be anticipated days or weeks in advance. Stepes supports both on-demand and scheduled remote interpreting.
              </p>
            </div>
            <div className="ri-support-grid">
              <article className="ri-support-panel">
                <div className="ri-support-top">
                  <div className="ri-support-icon"><BoltIcon /></div>
                  <h3 className="ri-h3">On-Demand Remote Interpreting</h3>
                </div>
                <p className="ri-body">
                  Help frontline teams respond when a customer, patient, employee, or community member needs language assistance that was not arranged beforehand.
                </p>
                <ul>
                  {[
                    "Unexpected customer-service or technical-support calls",
                    "Walk-in visitors and unplanned patient interactions",
                    "Account, benefits, public-service, or intake inquiries",
                    "Situations where the preferred language was not known in advance",
                  ].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
                </ul>
              </article>
              <article className="ri-support-panel">
                <div className="ri-support-top">
                  <div className="ri-support-icon"><CalendarIcon /></div>
                  <h3 className="ri-h3">Scheduled Remote Interpreting</h3>
                </div>
                <p className="ri-body">
                  Plan in advance when the conversation is longer, sensitive, highly technical, or dependent on a particular interpreter profile or preparation.
                </p>
                <ul>
                  {[
                    "Medical, legal, financial, and employee consultations",
                    "Training, interviews, negotiations, and technical meetings",
                    "Less commonly requested languages or regional variants",
                    "Sessions requiring preparation materials or requested credentials",
                  ].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
                </ul>
              </article>
            </div>
            <div className="ri-support-guidance">
              <strong>Practical guidance:</strong> Use on-demand interpreting for short, recurring, or unexpected interactions. Schedule in advance for complex, confidential, credential-specific, longer, or high-priority conversations.
            </div>
          </div>
        </section>

        <section className="ri-section">
          <div className="ri-shell">
            <div className="ri-section-heading">
              <p className="ri-eyebrow">Industry Expertise</p>
              <h2 className="ri-h2">Professional Interpreters for Specialized Conversations</h2>
              <p className="ri-body-lg">
                Language fluency alone may not be enough for complex communication. Stepes considers the setting, terminology, interpreter experience, requested qualifications, confidentiality needs, and customer-specific procedures.
              </p>
            </div>
            <div className="ri-industry-grid">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="ri-industry-item" key={item.title}>
                    <div className="ri-industry-icon"><Icon /></div>
                    <h3 className="ri-h3">{item.title}</h3>
                    <p className="ri-body">{item.text}</p>
                    {item.link && (
                      <a className="ri-link" href={item.href}><span>{item.link}</span><ArrowIcon /></a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ri-section ri-dark-section">
          <div className="ri-shell ri-qualification-grid">
            <div className="ri-qualification-intro">
              <p className="ri-eyebrow">Interpreter Quality</p>
              <h2 className="ri-h2">The Right Interpreter for Every Engagement</h2>
              <p className="ri-body-lg">
                Strong remote interpreting begins before the phone or video session starts. We evaluate the language, participants, subject matter, delivery format, and professional requirements of the engagement.
              </p>
              <div className="ri-prep-box">
                <h3>Help the Interpreter Prepare</h3>
                <p>
                  Share relevant agendas, participant roles, product names, acronyms, glossaries, presentation materials, approved terminology, and background information through an agreed channel.
                </p>
              </div>
            </div>
            <div className="ri-qualification-list">
              {qualifications.map((item) => (
                <div className="ri-qualification-row" key={item.title}>
                  <div className="ri-qualification-marker"><CheckIcon /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ri-section ri-blush-section">
          <div className="ri-shell">
            <div className="ri-enterprise-panel">
              <div className="ri-enterprise-copy">
                <p className="ri-eyebrow">Enterprise Language Access</p>
                <h2 className="ri-h2">Remote Interpreting for Distributed Organizations</h2>
                <p className="ri-body-lg">
                  Organizations with multiple locations or recurring multilingual interactions need a consistent way to request, coordinate, and evaluate language support across teams.
                </p>
                <ul className="ri-enterprise-list">
                  {enterpriseCapabilities.map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
                </ul>
                <a className="ri-button ri-button-primary" href="https://www.stepes.com/contact-us/">
                  <span>Plan an Enterprise Interpreting Program</span><ArrowIcon />
                </a>
              </div>
              <div className="ri-dashboard" aria-label="Enterprise remote interpreting program framework">
                <div className="ri-dashboard-top">
                  <p className="ri-dashboard-title">Enterprise Program Framework</p>
                  <span className="ri-dashboard-status"><span className="ri-status-dot" />Flexible configuration</span>
                </div>
                <div className="ri-dashboard-metrics">
                  <div className="ri-metric"><p className="ri-metric-label">Service Modes</p><p className="ri-metric-value">Phone + Video</p></div>
                  <div className="ri-metric"><p className="ri-metric-label">Organization Scope</p><p className="ri-metric-value">Multiple Teams</p></div>
                  <div className="ri-metric"><p className="ri-metric-label">Access Model</p><p className="ri-metric-value">On-Demand + Scheduled</p></div>
                </div>
                <div className="ri-session-list">
                  <div className="ri-session-head"><span>Common Workflow</span><span>Team</span><span>Mode</span></div>
                  <div className="ri-session-row"><span className="ri-session-name">Customer support</span><span>Customer Care</span><span className="ri-mode-chip">Phone</span></div>
                  <div className="ri-session-row"><span className="ri-session-name">Patient communication</span><span>Clinical Services</span><span className="ri-mode-chip">Video</span></div>
                  <div className="ri-session-row"><span className="ri-session-name">Employee meetings</span><span>Human Resources</span><span className="ri-mode-chip">Video</span></div>
                </div>
                <p className="ri-dashboard-note">Your program can be structured around the teams, service modes, interpreter profiles, and coordination needs most relevant to your organization.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ri-section">
          <div className="ri-shell ri-tech-grid">
            <div className="ri-tech-copy">
              <p className="ri-eyebrow">Human Expertise, Digital Delivery</p>
              <h2 className="ri-h2">Technology-Enabled, Professionally Interpreted</h2>
              <p className="ri-body-lg">
                Technology makes remote language access easier to request, coordinate, deliver, and manage. The quality of consequential multilingual communication still depends on choosing the right format and applying professional judgment.
              </p>
              <ul className="ri-tech-list">
                {[
                  "Interpreter matching",
                  "Scheduling and request administration",
                  "Remote participant connection",
                  "Terminology preparation",
                  "Program coordination",
                  "Usage visibility and feedback",
                ].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
              </ul>
            </div>
            <aside className="ri-ai-panel">
              <p className="ri-eyebrow">Responsible Use of AI</p>
              <h3 className="ri-h3">Use Automation Where It Helps—and Human Interpreters Where Judgment Matters</h3>
              <p className="ri-body">
                AI speech and language tools may support selected routine interactions and operational tasks. They should not be treated as a universal replacement for professional interpreters.
              </p>
              <div className="ri-ai-columns">
                <div className="ri-ai-column">
                  <h4>Technology Can Support</h4>
                  <ul>
                    <li>Language identification</li>
                    <li>Scheduling and routing</li>
                    <li>Interpreter matching</li>
                    <li>Terminology preparation</li>
                    <li>Administrative analysis</li>
                  </ul>
                </div>
                <div className="ri-ai-column">
                  <h4>Human Interpreters Remain Essential For</h4>
                  <ul>
                    <li>Medical and legal communication</li>
                    <li>Financial and sensitive conversations</li>
                    <li>Cultural nuance and ambiguity</li>
                    <li>Complex technical discussions</li>
                    <li>High-consequence decisions</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="ri-section ri-soft-section">
          <div className="ri-shell ri-security-grid">
            <div className="ri-security-copy">
              <p className="ri-eyebrow">Privacy and Confidentiality</p>
              <h2 className="ri-h2">Protecting Sensitive Multilingual Conversations</h2>
              <p className="ri-body-lg">
                Remote sessions may involve personal, medical, legal, financial, commercial, or employment information. The interpreting setup should reflect the sensitivity of the engagement.
              </p>
              <a className="ri-link" href="https://www.stepes.com/contact-us/"><span>Discuss Your Security Requirements</span><ArrowIcon /></a>
            </div>
            <div>
              <div className="ri-security-list">
                {securityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="ri-security-item" key={item.title}>
                      <div className="ri-security-icon"><Icon /></div>
                      <div><h3>{item.title}</h3><p>{item.text}</p></div>
                    </div>
                  );
                })}
              </div>
              <div className="ri-security-note">
                <strong>Recording and session materials:</strong> Remote interpreting sessions should only be recorded when recording has been expressly authorized and all relevant legal, organizational, interpreter, and participant requirements have been addressed. Share only the preparation materials necessary for the engagement.
              </div>
            </div>
          </div>
        </section>

        <section className="ri-section">
          <div className="ri-shell ri-language-grid">
            <div className="ri-language-copy">
              <h2 className="ri-h2">Remote Interpreting Across Global Languages</h2>
              <p className="ri-body-lg">
                Stepes supports remote interpreting across more than 100 languages, including major international languages, regional variants, specialized dialects, and less commonly requested combinations, subject to interpreter availability.
              </p>
              <p className="ri-body" style={{ marginTop: 18 }}>
                Availability depends on the language, dialect, phone or video format, signed or spoken communication, subject specialization, requested credentials, time of day, session length, and advance notice.
              </p>
              <a className="ri-link" href="https://www.stepes.com/translation-languages/"><span>Explore Our Languages</span><ArrowIcon /></a>
            </div>
            <div className="ri-language-panel">
              <h3>Regional Language Expertise Matters</h3>
              <div className="ri-language-chips" aria-label="Examples of commonly requested languages">
                {[
                  "Spanish", "Portuguese", "French", "German", "Mandarin", "Cantonese", "Japanese", "Korean", "Arabic", "Vietnamese", "Russian", "Italian", "Dutch", "Hindi", "Polish", "Ukrainian",
                ].map((language) => <span className="ri-language-chip" key={language}>{language}</span>)}
              </div>
              <p className="ri-language-note">
                Country, region, dialect, professional terminology, and participant preferences can affect interpreter selection. Advance scheduling is strongly recommended for less common language combinations, specialized dialects, signed languages, or credential-specific requests.
              </p>
            </div>
          </div>
        </section>

        <section className="ri-section ri-soft-section">
          <div className="ri-shell">
            <div className="ri-section-heading-center">
              <h2 className="ri-h2">Remote, On-Site, or Conference Interpreting?</h2>
              <p className="ri-body-lg">
                The right solution depends on where participants are, how the conversation will take place, and whether visual, physical, or event-production requirements are involved.
              </p>
            </div>
            <div className="ri-service-grid">
              {serviceOptions.map((item) => {
                const Icon = item.icon;
                return (
                  <article className={`ri-service-card ${item.current ? "ri-service-card-current" : ""}`} key={item.title}>
                    <div className="ri-service-icon"><Icon /></div>
                    <h3 className="ri-h3">{item.title}</h3>
                    <p className="ri-body">{item.text}</p>
                    <a className="ri-link" href={item.href}><span>{item.link}</span><ArrowIcon /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ri-section">
          <div className="ri-shell ri-diff-grid">
            <div className="ri-diff-heading">
              <p className="ri-eyebrow">Why Stepes</p>
              <h2 className="ri-h2">A Modern Approach to Professional Interpreting</h2>
              <p className="ri-body-lg">
                Stepes combines professional language expertise with efficient digital service delivery to help organizations communicate across languages and locations.
              </p>
            </div>
            <div className="ri-diff-list">
              {differentiators.map((item) => (
                <div className="ri-diff-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ri-section ri-blush-section">
          <div className="ri-shell">
            <div className="ri-section-heading-center">
              <h2 className="ri-h2">Remote Interpreting in Practice</h2>
              <p className="ri-body-lg">
                See how phone and video interpreting can support realistic multilingual communication needs across different organizations.
              </p>
            </div>
            <div className="ri-scenarios-grid">
              {scenarios.map((item) => (
                <article className="ri-scenario" key={item.title}>
                  <p className="ri-scenario-label">{item.label}</p>
                  <h3 className="ri-h3">{item.title}</h3>
                  <p className="ri-body">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ri-section" id="remote-interpreting-faq">
          <div className="ri-shell ri-faq-shell">
            <div className="ri-faq-heading">
              <h2 className="ri-h2">Remote Interpreting Questions</h2>
              <p className="ri-body-lg">
                Find practical guidance on formats, scheduling, interpreter selection, equipment, confidentiality, pricing, and specialized communication.
              </p>
            </div>
            <div className="ri-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `ri-faq-answer-${index}`;
                const questionId = `ri-faq-question-${index}`;
                return (
                  <div className="ri-faq-item" key={faq.question}>
                    <button
                      type="button"
                      className="ri-faq-button"
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronIcon open={isOpen} />
                    </button>
                    {isOpen && (
                      <div className="ri-faq-answer" id={answerId} role="region" aria-labelledby={questionId}>{faq.answer}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ri-final">
          <div className="ri-shell">
            <div className="ri-final-panel">
              <div className="ri-final-copy">
                <h2 className="ri-h2">Need an Interpreter for an Upcoming Conversation?</h2>
                <p className="ri-body-lg">
                  Tell us the languages, interpreting format, subject matter, participants, and preferred schedule. Stepes will help you identify the right phone or video interpreting solution.
                </p>
              </div>
              <div className="ri-final-actions">
                <a className="ri-button ri-button-primary" href="https://www.stepes.com/contact-us/">
                  <span>Request Remote Interpreting</span><ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
