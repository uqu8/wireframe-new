import React, { useId, useState } from "react";

export const pageMetadata = {
  title: "Professional On-Site Interpreting Services | Stepes",
  description:
    "Schedule qualified in-person interpreters for business meetings, site visits, training, healthcare, legal, and other specialized on-site assignments.",
  canonical: "https://www.stepes.com/on-site-interpreting-services/",
};

const URLS = {
  canonical: "https://www.stepes.com/on-site-interpreting-services/",
  contact: "https://www.stepes.com/contact-us/",
  interpretingHub: "https://www.stepes.com/interpretation-services/",
  remote: "https://www.stepes.com/remote-interpreting-services/",
  conference: "https://www.stepes.com/conference-event-interpreting-services/",
  languages: "https://www.stepes.com/translation-languages/",
  healthcare: "https://www.stepes.com/healthcare-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  software: "https://www.stepes.com/software-translation-services/",
  government: "https://www.stepes.com/government-translation-services/",
};

const trustItems = [
  {
    title: "100+ Languages",
    text: "Professional support for widely spoken and less common languages.",
  },
  {
    title: "Industry-Specific Matching",
    text: "Interpreters selected for the subject, setting, and purpose of the assignment.",
  },
  {
    title: "Global Coordination",
    text: "Centralized support for individual appointments and multi-location programs.",
  },
  {
    title: "On-Site + Remote Options",
    text: "Choose in-person, phone, video, or event interpreting for each interaction.",
  },
];

const physicalPresenceBenefits = [
  {
    icon: "eye",
    title: "Visual and Environmental Context",
    text: "The interpreter can follow demonstrations, equipment, documents, room dynamics, and other visual information shaping the conversation.",
  },
  {
    icon: "people",
    title: "Complex Interaction",
    text: "In-person delivery supports multiple speakers, detailed questions, changing agendas, and direct exchanges between participants.",
  },
  {
    icon: "shield",
    title: "Sensitive Communication",
    text: "Physical presence can strengthen trust during healthcare, legal, employee, negotiation, and other high-context discussions.",
  },
  {
    icon: "clock",
    title: "Longer Assignments",
    text: "Training, facility visits, audits, and multi-stage meetings benefit from an interpreter who stays with the participants throughout the session.",
  },
];

const assignmentTypes = [
  {
    icon: "briefcase",
    title: "Business Meetings and Negotiations",
    text: "Executive meetings, partnership discussions, contract negotiations, sales presentations, interviews, and international business visits.",
  },
  {
    icon: "factory",
    title: "Manufacturing and Supplier Visits",
    text: "Factory tours, supplier meetings, production reviews, equipment demonstrations, quality inspections, and operational assessments.",
  },
  {
    icon: "training",
    title: "Training and Workforce Communication",
    text: "Employee onboarding, safety training, technical instruction, workplace briefings, HR meetings, and professional development programs.",
  },
  {
    icon: "health",
    title: "Healthcare Appointments",
    text: "Clinical consultations, patient and family discussions, treatment explanations, admissions, discharge conversations, and administrative appointments.",
  },
  {
    icon: "legal",
    title: "Legal Meetings and Proceedings",
    text: "Attorney-client meetings, depositions, witness interviews, mediations, investigations, consultations, and administrative proceedings.",
  },
  {
    icon: "government",
    title: "Government and Community Services",
    text: "Public meetings, administrative interviews, community programs, social-service appointments, and public-information activities.",
  },
  {
    icon: "inspection",
    title: "Audits, Inspections, and Site Assessments",
    text: "Regulatory inspections, compliance reviews, facility walkthroughs, technical assessments, due-diligence visits, and quality audits.",
  },
  {
    icon: "globe",
    title: "International Delegations and Executive Visits",
    text: "Professional language support for visiting executives, business partners, customers, investors, suppliers, and government delegations.",
  },
];

const interpretingModes = [
  {
    title: "Consecutive Interpreting",
    text: "The speaker pauses at natural intervals while the interpreter conveys the message. This mode works well for meetings, interviews, appointments, training, demonstrations, and site visits.",
    bestFor: "Interactive discussions without specialized audio equipment",
  },
  {
    title: "Liaison Interpreting",
    text: "The interpreter facilitates a fluid exchange between individuals or small groups as the conversation develops, rather than following a formal presentation structure.",
    bestFor: "Supplier visits, facility tours, executive travel, and small-group exchanges",
  },
  {
    title: "Whispered Interpreting",
    text: "The interpreter quietly provides near-real-time support for one or two listeners while the main speaker continues, without a full simultaneous setup.",
    bestFor: "Meetings where only a small number of participants need language support",
  },
  {
    title: "Simultaneous Interpreting",
    text: "The interpreter delivers the message while the speaker continues. Selected training sessions and larger internal meetings may use this approach.",
    bestFor: "Continuous delivery when the format and equipment support it",
  },
];

const industries = [
  {
    icon: "health",
    title: "Healthcare and Life Sciences",
    text: "Patient communication, clinical consultations, pharmaceutical and biotechnology meetings, medical-device training, and healthcare administration.",
    href: URLS.healthcare,
    link: "Healthcare Translation Services",
  },
  {
    icon: "legal",
    title: "Legal and Compliance",
    text: "Depositions, attorney meetings, investigations, regulatory matters, employment discussions, and corporate legal proceedings.",
    href: URLS.legal,
    link: "Legal Translation Services",
  },
  {
    icon: "factory",
    title: "Manufacturing and Engineering",
    text: "Equipment training, production reviews, supplier meetings, factory visits, engineering discussions, safety communication, and technical inspections.",
    href: URLS.manufacturing,
    link: "Manufacturing Translation Services",
  },
  {
    icon: "finance",
    title: "Financial and Professional Services",
    text: "Banking, insurance, advisory, audit, due-diligence, investor, client, and internal corporate meetings.",
    href: URLS.financial,
    link: "Financial Translation Services",
  },
  {
    icon: "technology",
    title: "Technology and Software",
    text: "Product demonstrations, implementation meetings, technical workshops, engineering discussions, partner training, and customer engagements.",
    href: URLS.software,
    link: "Software & SaaS Translation Services",
  },
  {
    icon: "government",
    title: "Government and Public Services",
    text: "Administrative interviews, public programs, agency meetings, community communication, official visits, and government delegations.",
    href: URLS.government,
    link: "Government Translation Services",
  },
];

const matchingCriteria = [
  {
    title: "Language Pair and Regional Variation",
    text: "Matching considers the languages spoken by the participants as well as relevant regional varieties, dialects, and local usage.",
  },
  {
    title: "Subject-Matter Experience",
    text: "The interpreter’s background should reflect the assignment content, whether healthcare, legal, technical, financial, corporate, or public-sector.",
  },
  {
    title: "Interpreting Mode",
    text: "The meeting format helps determine whether consecutive, liaison, whispered, or simultaneous delivery is appropriate.",
  },
  {
    title: "Credentials and Certifications",
    text: "Stepes identifies qualified interpreters with the training and credentials appropriate for the assignment and applicable requirements.",
  },
  {
    title: "Assignment Environment",
    text: "Hospitals, legal offices, factories, laboratories, corporate workplaces, and restricted facilities each introduce different practical needs.",
  },
  {
    title: "Confidentiality and Security",
    text: "Nondisclosure, identity verification, visitor authorization, information handling, and facility access can be coordinated before confirmation.",
  },
  {
    title: "Location, Availability, and Continuity",
    text: "Local availability, travel, scheduling, lead time, and recurring interpreter continuity are considered as part of the complete request.",
  },
];

const workflow = [
  {
    title: "Share the Assignment",
    text: "Provide the date, location, languages, duration, participants, subject matter, and any special requirements.",
  },
  {
    title: "Confirm the Scope",
    text: "Stepes reviews the format, logistics, number of interpreters, travel, equipment, preparation, and any access or safety requirements.",
  },
  {
    title: "Match the Interpreter",
    text: "We identify a professional based on language, relevant experience, credentials, setting, location, and availability.",
  },
  {
    title: "Prepare the Assignment",
    text: "Approved agendas, terminology, presentations, background documents, and participant details support interpreter readiness.",
  },
  {
    title: "Coordinate On-Site Delivery",
    text: "Arrival time, meeting point, access, security, parking, PPE, room arrangements, and contacts are confirmed.",
  },
  {
    title: "Follow Up",
    text: "Stepes supports feedback, issue resolution, documentation, invoicing, and planning for recurring assignments.",
  },
];

const customerPreparation = [
  "Meeting agenda and expected outcomes",
  "Names and roles of participants",
  "Presentations, handouts, or talking points",
  "Product, equipment, or process information",
  "Approved terminology, glossaries, and acronyms",
  "Relevant background or previous-session materials",
  "Confidentiality and information-handling requirements",
  "Known schedule, room, or location changes",
];

const stepesCoordination = [
  "Interpreter briefing and assignment confirmation",
  "Arrival, meeting-point, and on-site contact instructions",
  "Building access, visitor registration, and security procedures",
  "Dress, safety orientation, and PPE requirements",
  "Room, seating, mobility, and equipment considerations",
  "Schedule updates and contingency communication",
  "Recurring-assignment preferences and continuity requests",
  "Post-assignment feedback and administrative follow-up",
];

const professionalControls = [
  {
    title: "Accurate and Complete Communication",
    text: "Interpreters are expected to communicate each speaker’s meaning faithfully and as completely as the interaction allows.",
  },
  {
    title: "Impartiality and Role Clarity",
    text: "The interpreter facilitates communication without replacing decision-makers, providing independent advice, or negotiating on a participant’s behalf.",
  },
  {
    title: "Confidentiality",
    text: "Nondisclosure agreements, restricted preparation materials, and client-specific information-handling instructions can be coordinated where required.",
  },
  {
    title: "Professional Conduct",
    text: "Preparation, timely arrival, appropriate attire, respectful interaction, and adherence to site procedures support a reliable assignment.",
  },
  {
    title: "Client Feedback",
    text: "Feedback informs future interpreter selection, approved pools, terminology preparation, and continuity for recurring programs.",
  },
];

const enterpriseCapabilities = [
  {
    title: "Centralized Scheduling",
    text: "Coordinate requests from multiple business units, offices, clinics, facilities, or teams through one consistent process.",
  },
  {
    title: "Approved Interpreter Pools",
    text: "Maintain preferred professionals based on language, expertise, credentials, facility familiarity, feedback, and availability.",
  },
  {
    title: "Interpreter Continuity",
    text: "Support recurring appointments, ongoing legal matters, employee programs, training series, and repeated supplier visits.",
  },
  {
    title: "Multi-Location Coordination",
    text: "Manage interpreting across regions while matching each assignment locally for language, specialization, and setting.",
  },
  {
    title: "Consolidated Administration",
    text: "Use central contacts, assignment records, department references, consolidated invoicing, and program reporting.",
  },
  {
    title: "Remote Backup",
    text: "Phone or video interpreting can support delays, unexpected languages, rare-language needs, or changes in meeting format.",
  },
];

const serviceOptions = [
  {
    eyebrow: "IN PERSON",
    title: "On-Site Interpreting",
    text: "The interpreter is physically present with the participants and can respond to the room, people, and environment.",
    bestFor: [
      "Complex or sensitive communication",
      "Business, legal, and healthcare meetings",
      "Facility visits, training, and demonstrations",
      "Extended and highly interactive sessions",
    ],
    href: URLS.contact,
    link: "Request an On-Site Interpreter",
    featured: true,
  },
  {
    eyebrow: "PHONE OR VIDEO",
    title: "Remote Interpreting",
    text: "The interpreter joins by phone or secure video for rapid access, virtual meetings, and geographically distributed participants.",
    bestFor: [
      "Short or urgent interactions",
      "Phone calls and video meetings",
      "Locations where travel is impractical",
      "Languages with limited local availability",
    ],
    href: URLS.remote,
    link: "Remote Interpreting Services",
  },
  {
    eyebrow: "MULTILINGUAL EVENTS",
    title: "Conference & Event Interpreting",
    text: "Interpreter teams and technical delivery are coordinated as part of a conference, summit, or large multilingual event.",
    bestFor: [
      "Large audiences and multiple languages",
      "Simultaneous interpreter teams",
      "Hybrid and in-person conferences",
      "Booths, receivers, and audio distribution",
    ],
    href: URLS.conference,
    link: "Conference & Event Interpreting Services",
  },
];

const pricingFactors = [
  "Language pair and regional variety",
  "Assignment location and travel requirements",
  "Session length and minimum booking period",
  "Interpreter qualifications and credentials",
  "Subject-matter specialization",
  "Number of interpreters and delivery mode",
  "Scheduling lead time",
  "Evening, weekend, or holiday coverage",
  "Multi-day assignments",
  "Security, access, and facility procedures",
  "Equipment when required",
  "Cancellation and schedule-change terms",
];

const faqs = [
  {
    question: "What is on-site interpreting?",
    answer:
      "On-site interpreting is live language support provided by an interpreter who is physically present with the participants. The interpreter facilitates spoken communication during meetings, appointments, training sessions, site visits, consultations, inspections, and other in-person interactions.",
  },
  {
    question: "What is the difference between interpreting and translation?",
    answer:
      "Interpreting supports live spoken communication between people who use different languages. Translation primarily concerns written, recorded, or digital content. An interpreter may support a multilingual business meeting, while a translator may translate the agenda, presentation, contract, or follow-up documentation.",
  },
  {
    question: "How far in advance should I schedule an on-site interpreter?",
    answer:
      "Lead time depends on the languages, location, specialization, credentials, duration, and interpreter availability. Common-language assignments in major locations may be easier to arrange on shorter notice. Rare languages, remote locations, multi-day sessions, and highly specialized or credentialed assignments generally require more advance planning.",
  },
  {
    question: "What information does Stepes need to arrange an interpreter?",
    answer:
      "Please provide the date, time, full location, languages and regional varieties, expected duration, purpose of the interaction, participant count, subject matter, preferred interpreting mode when known, required credentials, and any confidentiality, access, security, or safety requirements.",
  },
  {
    question: "How does Stepes select an interpreter?",
    answer:
      "Stepes considers the language pair, regional language requirements, interpreting experience, subject-matter background, credentials, assignment setting, location, availability, and client-specific requirements. The objective is to identify a professional suited to the complete assignment, not simply someone who speaks both languages.",
  },
  {
    question: "Can Stepes provide interpreters with specialized industry experience?",
    answer:
      "Stepes coordinates interpreting for healthcare, legal, manufacturing, engineering, financial, technology, government, human resources, and other professional settings. Availability depends on the language, location, required specialization, schedule, and credentials.",
  },
  {
    question: "Can I request a certified interpreter?",
    answer:
      "Yes. Stepes can search for certified or credentialed interpreters when a court, healthcare organization, government agency, jurisdiction, receiving organization, or client policy requires specific qualifications. Certification systems and acceptance requirements vary by country, jurisdiction, field, and language.",
  },
  {
    question: "What is the difference between consecutive and simultaneous interpreting?",
    answer:
      "During consecutive interpreting, the speaker pauses while the interpreter communicates each portion of the message. During simultaneous interpreting, the interpreter communicates while the speaker continues. Simultaneous assignments may require multiple interpreters, audio equipment, and additional planning.",
  },
  {
    question: "Are travel expenses included in the interpreting rate?",
    answer:
      "Travel requirements depend on the assignment location and the availability of an appropriate interpreter nearby. Travel time, mileage, airfare, lodging, parking, local transportation, or other expenses may apply and should be identified in the proposal before confirmation.",
  },
  {
    question: "Can the same interpreter support recurring assignments?",
    answer:
      "Interpreter continuity can be requested for recurring appointments, training programs, legal matters, employee meetings, and other ongoing needs. The same individual cannot always be guaranteed, but Stepes can seek continuity or maintain an approved pool familiar with the client and assignment.",
  },
  {
    question: "How does Stepes protect confidential information?",
    answer:
      "Stepes can coordinate confidentiality measures such as nondisclosure agreements, restricted access to preparation materials, and client-specific information-handling procedures. Special privacy, security, data-handling, privilege, or retention requirements should be disclosed before the assignment.",
  },
  {
    question: "When should I choose remote interpreting instead?",
    answer:
      "Remote interpreting is often well suited to brief interactions, urgent requests, virtual meetings, distributed participants, and situations where an appropriate interpreter is not locally available. On-site delivery may be preferable when participants need to interact with a physical environment, discuss sensitive or complex matters, follow demonstrations, or communicate over an extended period.",
  },
];

function ArrowIcon({ className = "", direction = "right" }) {
  const rotation = direction === "down" ? "rotate(90 12 12)" : undefined;
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g transform={rotation}>
        <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="m14 7 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineIcon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  const paths = {
    eye: (
      <>
        <path d="M2.8 12s3.4-5.2 9.2-5.2S21.2 12 21.2 12 17.8 17.2 12 17.2 2.8 12 2.8 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    people: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M2.8 19c.4-3.8 2.3-5.7 5.3-5.7s5 1.9 5.4 5.7" />
        <path d="M13.6 14.1c.8-.6 1.8-.9 2.9-.9 2.7 0 4.2 1.8 4.6 5.2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.1 19 6v5.1c0 4.5-2.4 7.8-7 9.8-4.6-2-7-5.3-7-9.8V6l7-2.9Z" />
        <path d="m8.8 12.1 2 2 4.4-4.4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.7" />
        <path d="M12 7.2v5.2l3.5 2" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8.5 7V5.7c0-1 .8-1.7 1.7-1.7h3.6c.9 0 1.7.7 1.7 1.7V7" />
        <path d="M3 11.2c5.9 2.2 12.1 2.2 18 0" />
      </>
    ),
    factory: (
      <>
        <path d="M3 20V9.5l6 3V8.8l6 3V5l6 3.2V20H3Z" />
        <path d="M7 16h2M12 16h2M17 16h2" />
      </>
    ),
    training: (
      <>
        <rect x="4" y="4" width="16" height="11" rx="2" />
        <path d="M8 20h8M12 15v5" />
        <path d="M8.2 10.8 10.5 8l2.1 2 3.2-3.4" />
      </>
    ),
    health: (
      <>
        <path d="M12 20.5s-8-4.9-8-10.7C4 6.8 5.9 5 8.4 5c1.6 0 2.9.8 3.6 2 0 0 1.3-2 3.6-2C18.1 5 20 6.8 20 9.8c0 5.8-8 10.7-8 10.7Z" />
        <path d="M8.5 12h2l1-2.4 1.7 4.5 1-2.1h1.5" />
      </>
    ),
    legal: (
      <>
        <path d="M12 3v17M6 6h12M4 20h16" />
        <path d="m6 6-3 6h6L6 6ZM18 6l-3 6h6l-3-6Z" />
      </>
    ),
    government: (
      <>
        <path d="m12 3 9 4H3l9-4Z" />
        <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8M3 20h18M4 17h16" />
      </>
    ),
    inspection: (
      <>
        <rect x="4" y="3" width="12" height="18" rx="2" />
        <path d="M8 7h4M8 11h4M8 15h3" />
        <circle cx="17.5" cy="15.5" r="3.2" />
        <path d="m20 18 2 2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
      </>
    ),
    finance: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 15v-3M12 15V9M17 15v-6M6 8h12" />
      </>
    ),
    technology: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="m9 9-2 3 2 3M15 9l2 3-2 3M13 8l-2 8" />
      </>
    ),
  };

  return (
    <svg {...common} className="lineIcon" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.globe}
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg
      className="heroIllustration"
      viewBox="0 0 620 540"
      role="img"
      aria-label="An interpreter facilitating communication during an in-person professional meeting"
    >
      <defs>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDF2F7" />
          <stop offset="1" stopColor="#F7F9FC" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#111827" floodOpacity="0.08" />
        </filter>
      </defs>

      <rect x="38" y="38" width="544" height="454" rx="42" fill="url(#heroWash)" />
      <path d="M82 126h145" stroke="#D9E0E9" strokeWidth="2" strokeLinecap="round" />
      <path d="M392 430h120" stroke="#D9E0E9" strokeWidth="2" strokeLinecap="round" />
      <circle cx="92" cy="410" r="18" fill="#FFFFFF" stroke="#D9E0E9" strokeWidth="2" />
      <path d="M84 410h16M92 402v16" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />

      <g filter="url(#softShadow)">
        <rect x="94" y="98" width="432" height="306" rx="32" fill="#FFFFFF" stroke="#DCE2EA" strokeWidth="2" />
      </g>

      <g stroke="#596579" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M170 319c19-47 57-72 114-75 58-3 105 18 140 62" />
        <path d="M177 320h246" />
        <path d="M214 320l-15 57M382 320l17 57" />

        <circle cx="205" cy="203" r="28" />
        <path d="M163 300c4-43 19-68 42-68s39 24 43 68" />
        <path d="M198 232c2 12 15 12 17 0" />
        <path d="M173 277c16 8 31 12 46 13" />

        <circle cx="308" cy="180" r="30" />
        <path d="M263 296c4-47 20-76 45-76s41 29 45 76" />
        <path d="M300 212c3 12 15 12 18 0" />
        <path d="M279 267c20 13 40 13 60 0" />

        <circle cx="416" cy="205" r="28" />
        <path d="M373 300c4-43 20-68 43-68s38 25 42 68" />
        <path d="M408 234c3 11 15 11 18 0" />
        <path d="M395 289c15-1 31-6 47-14" />

        <path d="M245 301c24-11 45-15 63-13 19 1 38 5 57 13" />
        <path d="M264 333h84l-8 31h-68l-8-31Z" />
        <path d="M305 333v31" />
      </g>

      <g>
        <path d="M141 150c0-24 20-43 44-43h54c24 0 44 19 44 43v18c0 24-20 43-44 43h-22l-24 20v-20h-8c-24 0-44-19-44-43v-18Z" fill="#FFFFFF" stroke="#D7DEE8" strokeWidth="2" />
        <text x="172" y="164" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill="#596579">EN</text>
        <path d="M205 155h43M205 169h31" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      <g>
        <path d="M355 119c0-23 19-42 42-42h55c23 0 42 19 42 42v20c0 23-19 42-42 42h-7v20l-24-20h-24c-23 0-42-19-42-42v-20Z" fill="#FFFFFF" stroke="#D7DEE8" strokeWidth="2" />
        <text x="384" y="143" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#596579">文</text>
        <path d="M420 130h42M420 145h28" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      <g>
        <circle cx="307" cy="181" r="39" fill="none" stroke="#C11D63" strokeWidth="3" opacity="0.22" />
        <path d="M301 174c4-4 11-4 15 0M301 188c4 4 11 4 15 0" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(429 334)">
        <rect width="112" height="104" rx="22" fill="#111827" />
        <path d="M28 31h56M28 47h44M28 63h52" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="82" cy="78" r="12" fill="#C11D63" />
        <path d="m77 78 3 3 6-7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function SectionIntro({ eyebrow, title, text, align = "left", inverse = false, id }) {
  return (
    <div className={`sectionIntro ${align === "center" ? "sectionIntroCenter" : ""}`}>
      {eyebrow ? <p className={`eyebrow ${inverse ? "eyebrowInverse" : ""}`}>{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p className={`sectionLead ${inverse ? "inverseBody" : ""}`}>{text}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={`editorialLink ${inverse ? "editorialLinkInverse" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function FaqItem({ item, isOpen, onToggle, panelId, buttonId }) {
  return (
    <div className={`faqItem ${isOpen ? "faqItemOpen" : ""}`}>
      <h3>
        <button
          id={buttonId}
          className="faqButton"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className="faqIcon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        className="faqPanel"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function StepesOnSiteInterpretingWireframe() {
  const [openFaq, setOpenFaq] = useState(0);
  const faqBaseId = useId();

  return (
    <main className="stepesOnsitePage">
      <style>{styles}</style>

      <section className="heroSection" aria-labelledby="page-title">
        <div className="pageShell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">ON-SITE INTERPRETING</p>
            <h1 id="page-title">Professional On-Site Interpreting Services</h1>
            <p className="heroLead">
              Bring qualified interpreters directly to your meetings, appointments, facilities, and workplaces for clear communication where physical presence matters.
            </p>
            <p className="heroSupport">
              Stepes coordinates professional in-person interpreters based on your languages, industry, location, schedule, and assignment requirements—from executive meetings and technical site visits to healthcare appointments and workforce training.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href={URLS.contact}>
                <span>Request an On-Site Interpreter</span>
                <ArrowIcon />
              </a>
              <a className="secondaryButton" href={`${URLS.canonical}#service-options`}>
                <span>Compare Interpreting Options</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="heroVisual">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="trustSection" aria-label="On-site interpreting service highlights">
        <div className="pageShell trustBar">
          {trustItems.map((item) => (
            <div className="trustItem" key={item.title}>
              <p className="trustTitle">{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionWhite">
        <div className="pageShell splitOverview">
          <div className="overviewHeading">
            <p className="eyebrow">WHY IN PERSON</p>
            <h2>Clearer Communication When Physical Presence Matters</h2>
            <p className="sectionLead">
              Some conversations require more than a phone or video connection. When participants need to discuss complex subjects, interact with a physical environment, build trust, or respond to visual and nonverbal information, an interpreter in the room can provide valuable context and continuity.
            </p>
            <EditorialLink href={`${URLS.canonical}#service-options`}>
              Choose the right interpreting service
            </EditorialLink>
          </div>
          <div className="benefitGrid">
            {physicalPresenceBenefits.map((item) => (
              <article className="benefitItem" key={item.title}>
                <div className="iconSurface">
                  <LineIcon name={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" aria-labelledby="assignments-title">
        <div className="pageShell">
          <SectionIntro
            title="On-Site Interpreting for Meetings, Appointments, and Workplaces"
            text="Stepes supports one-time assignments, recurring appointments, multi-day engagements, and enterprise interpreting programs across a wide range of professional settings."
            align="center"
            id="assignments-title"
          />
          <div className="assignmentGrid">
            {assignmentTypes.map((item) => (
              <article className="assignmentItem" key={item.title}>
                <div className="assignmentIcon">
                  <LineIcon name={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark" aria-labelledby="modes-title">
        <div className="pageShell">
          <div className="darkHeader">
            <SectionIntro
              title="Interpreting Modes for Different On-Site Assignments"
              text="“On-site” describes where the interpreter works. The interpreting mode describes how communication is delivered. Stepes helps determine the right approach based on the participants, meeting format, timing, and level of interaction."
              inverse
              id="modes-title"
            />
            <EditorialLink href={URLS.conference} inverse>
              Conference & Event Interpreting
            </EditorialLink>
          </div>
          <div className="modeGrid">
            {interpretingModes.map((mode) => (
              <article className="modeItem" key={mode.title}>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
                <div className="modeFit">
                  <span>Best suited to</span>
                  <p>{mode.bestFor}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="darkNote">
            <p>
              Assignments involving multilingual audiences, interpreter teams, booths, receivers, or audio distribution are generally better supported through Stepes’ dedicated event interpreting service.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionWhite" aria-labelledby="industry-title">
        <div className="pageShell industryLayout">
          <div className="industryIntro">
            <p className="eyebrow">SUBJECT-MATTER EXPERTISE</p>
            <h2 id="industry-title">Interpreters Matched to Your Industry and Setting</h2>
            <p className="sectionLead">
              Effective interpreting requires more than fluency in two languages. Interpreters must understand the purpose of the interaction, recognize specialized terminology, manage the selected mode, and work professionally within the assignment environment.
            </p>
            <a className="textPill" href={URLS.languages}>
              <span>Explore Supported Languages</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="industryRows">
            {industries.map((industry) => (
              <article className="industryRow" key={industry.title}>
                <div className="industryIcon">
                  <LineIcon name={industry.icon} />
                </div>
                <div className="industryText">
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </div>
                {industry.href ? (
                  <EditorialLink href={industry.href}>{industry.link}</EditorialLink>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" aria-labelledby="matching-title">
        <div className="pageShell">
          <SectionIntro
            title="The Right Interpreter for the Language, Subject, and Situation"
            text="Every assignment has its own communication goals, subject-matter needs, and logistical requirements. Stepes reviews the complete request rather than matching an interpreter based on language alone."
            align="center"
            id="matching-title"
          />
          <div className="matchingPanel">
            <div className="matchingCallout">
              <p className="calloutLabel">A COMPLETE MATCH</p>
              <blockquote>
                Language fluency is the starting point. Subject expertise, credentials, setting, availability, and preparation determine whether the interpreter is right for the assignment.
              </blockquote>
              <a className="primaryButton compactButton" href={URLS.contact}>
                <span>Discuss Your Requirements</span>
                <ArrowIcon />
              </a>
            </div>
            <div className="matchingRows">
              {matchingCriteria.map((item) => (
                <article className="matchingRow" key={item.title}>
                  <span className="criteriaMark" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionWhite" aria-labelledby="workflow-title">
        <div className="pageShell">
          <SectionIntro
            eyebrow="MANAGED DELIVERY"
            title="How On-Site Interpreting Works"
            text="A successful assignment begins well before the interpreter arrives. Stepes coordinates the language, interpreter selection, preparation, and logistical details required for reliable on-site delivery."
            align="center"
            id="workflow-title"
          />
          <ol className="workflowGrid">
            {workflow.map((step, index) => (
              <li className="workflowStep" key={step.title}>
                <div className="workflowNumber">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section sectionSoft" aria-labelledby="preparation-title">
        <div className="pageShell">
          <SectionIntro
            title="Preparation That Supports Better On-Site Communication"
            text="Interpreters perform best when they understand the context, objectives, and terminology of the assignment. Even a short briefing can improve readiness and reduce avoidable uncertainty during the meeting."
            align="center"
            id="preparation-title"
          />
          <div className="preparationPanel">
            <article className="preparationColumn preparationCustomer">
              <h3>What Your Team Can Share</h3>
              <p className="preparationIntro">
                Provide authorized materials as early as practical so the interpreter can prepare for the content and participants.
              </p>
              <ul className="checkList">
                {customerPreparation.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="preparationColumn">
              <h3>What Stepes Can Coordinate</h3>
              <p className="preparationIntro">
                We help connect the assignment brief with the practical details the interpreter needs to arrive prepared.
              </p>
              <ul className="checkList">
                {stepesCoordination.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="preparationNote">
            Preparation is especially important for specialized terminology, multiple speakers, technical demonstrations, sensitive information, restricted-access facilities, and long or multi-day sessions.
          </p>
        </div>
      </section>

      <section className="section sectionWhite" aria-labelledby="quality-title">
        <div className="pageShell qualityLayout">
          <div className="qualityIntro">
            <p className="eyebrow">PROFESSIONAL PRACTICE</p>
            <h2 id="quality-title">Professional Interpreting for Sensitive and Business-Critical Communication</h2>
            <p className="sectionLead">
              On-site interpreters often work in situations where accuracy, discretion, impartiality, and professional conduct are essential. Clear role expectations help every participant communicate more effectively.
            </p>
          </div>
          <div className="qualityRows">
            {professionalControls.map((item) => (
              <article className="qualityRow" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section enterpriseSection" aria-labelledby="enterprise-title">
        <div className="pageShell enterpriseLayout">
          <div className="enterpriseSummary">
            <p className="eyebrow eyebrowInverse">ENTERPRISE PROGRAMS</p>
            <h2 id="enterprise-title">On-Site Interpreting for Recurring and Multi-Location Programs</h2>
            <p>
              Organizations with recurring language needs require more than individual bookings. Stepes helps coordinate structured interpreting programs across departments, facilities, cities, and countries.
            </p>
            <a className="lightButton" href={URLS.contact}>
              <span>Discuss an Enterprise Program</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="enterpriseGrid">
            {enterpriseCapabilities.map((item) => (
              <article className="enterpriseItem" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionWhite" id="service-options" aria-labelledby="service-options-title">
        <div className="pageShell">
          <SectionIntro
            eyebrow="DELIVERY OPTIONS"
            title="Choose the Right Interpreting Service"
            text="Stepes offers on-site, remote, and event interpreting so organizations can select the delivery model that best fits each interaction."
            align="center"
            id="service-options-title"
          />
          <div className="comparisonGrid">
            {serviceOptions.map((option) => (
              <article className={`comparisonCard ${option.featured ? "comparisonFeatured" : ""}`} key={option.title}>
                <p className="eyebrow">{option.eyebrow}</p>
                <h3>{option.title}</h3>
                <p className="comparisonText">{option.text}</p>
                <p className="comparisonLabel">Best for</p>
                <ul>
                  {option.bestFor.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <EditorialLink href={option.href}>{option.link}</EditorialLink>
              </article>
            ))}
          </div>
          <div className="comparisonHelp">
            <p>
              Not sure which service you need? Stepes can recommend an approach based on the location, participants, languages, interaction format, complexity, timing, and communication goals.
            </p>
            <EditorialLink href={URLS.interpretingHub}>Explore All Interpreting Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionSoft" aria-labelledby="cost-title">
        <div className="pageShell costLayout">
          <div className="costIntro">
            <p className="eyebrow">PRICING AND AVAILABILITY</p>
            <h2 id="cost-title">What Determines the Cost of On-Site Interpreting?</h2>
            <p className="sectionLead">
              On-site interpreting is scoped according to the requirements of the individual assignment. Reviewing the complete request allows Stepes to confirm availability, identify travel or logistical considerations, and prepare realistic pricing.
            </p>
            <p className="costGuidance">
              More lead time generally provides greater scheduling flexibility, especially for rare languages, specialized subjects, credentialed interpreters, remote locations, multi-day assignments, and requests requiring multiple professionals.
            </p>
            <a className="primaryButton" href={URLS.contact}>
              <span>Request Pricing and Availability</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="factorPanel">
            <h3>Common Pricing Factors</h3>
            <div className="factorGrid">
              {pricingFactors.map((factor) => (
                <div className="factorItem" key={factor}>
                  <span className="factorMark" aria-hidden="true" />
                  <p>{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionWhite" aria-labelledby="faq-title">
        <div className="pageShell faqLayout">
          <div className="faqIntro">
            <h2 id="faq-title">Planning an On-Site Interpreting Assignment</h2>
            <p className="sectionLead">
              Find practical answers about scheduling, interpreter qualifications, delivery modes, travel, confidentiality, and recurring service.
            </p>
            <a className="textPill" href={URLS.contact}>
              <span>Ask an Interpreting Specialist</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="faqPanelWrap">
            {faqs.map((item, index) => {
              const panelId = `${faqBaseId}-panel-${index}`;
              const buttonId = `${faqBaseId}-button-${index}`;
              return (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  panelId={panelId}
                  buttonId={buttonId}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="finalCtaSection" aria-labelledby="final-cta-title">
        <div className="pageShell">
          <div className="finalCtaPanel">
            <div className="finalCtaCopy">
              <h2 id="final-cta-title">Plan Your Next On-Site Interpreting Assignment</h2>
              <p>
                Tell us where, when, and how you need to communicate. Stepes will coordinate an interpreter based on your languages, industry, location, schedule, and assignment requirements.
              </p>
              <p>
                Whether you are planning one meeting, a multi-day site visit, or an ongoing enterprise program, our team will help you select the right interpreting mode and prepare for effective on-site communication.
              </p>
              <div className="finalActions">
                <a className="primaryButton" href={URLS.contact}>
                  <span>Request an On-Site Interpreter</span>
                  <ArrowIcon />
                </a>
                <EditorialLink href={URLS.interpretingHub}>Explore All Interpreting Services</EditorialLink>
              </div>
            </div>
            <div className="finalCtaVisual" aria-hidden="true">
              <div className="finalLanguageBubble bubbleOne">EN</div>
              <div className="finalConnector" />
              <div className="finalInterpreter">
                <span />
                <span />
              </div>
              <div className="finalConnector finalConnectorRight" />
              <div className="finalLanguageBubble bubbleTwo">文</div>
              <div className="finalMeetingLine" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .stepesOnsitePage {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --magenta-deep: #7A1542;
    --magenta-soft: #FDF2F7;
    --magenta-light: #F2A7C6;
    --ink: #101828;
    --ink-soft: #334155;
    --body: #475467;
    --muted: #667085;
    --line: #E2E8F0;
    --line-strong: #D3DBE6;
    --soft: #F6F8FB;
    --white: #FFFFFF;
    color: var(--ink);
    background: var(--white);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    overflow-x: clip;
    overflow-y: visible;
  }

  .stepesOnsitePage,
  .stepesOnsitePage * {
    box-sizing: border-box;
  }

  .stepesOnsitePage h1,
  .stepesOnsitePage h2,
  .stepesOnsitePage h3,
  .stepesOnsitePage p,
  .stepesOnsitePage ul,
  .stepesOnsitePage ol,
  .stepesOnsitePage blockquote {
    margin: 0;
  }

  .stepesOnsitePage h1,
  .stepesOnsitePage h2,
  .stepesOnsitePage h3 {
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.025em;
  }

  .stepesOnsitePage h1 {
    max-width: 690px;
    font-size: 48px;
    line-height: 1.08;
  }

  .stepesOnsitePage h2 {
    font-size: 36px;
    line-height: 1.14;
  }

  .stepesOnsitePage h3 {
    font-size: 24px;
    line-height: 1.25;
  }

  .stepesOnsitePage p,
  .stepesOnsitePage li {
    color: var(--body);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.72;
  }

  .stepesOnsitePage a {
    color: inherit;
    text-decoration: none;
  }

  .pageShell {
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .sectionWhite {
    background: var(--white);
  }

  .sectionSoft {
    background: var(--soft);
  }

  .eyebrow {
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase;
  }

  .eyebrowInverse {
    color: var(--magenta-light) !important;
  }

  .sectionIntro {
    max-width: 820px;
  }

  .sectionIntro .eyebrow,
  .overviewHeading .eyebrow,
  .industryIntro .eyebrow,
  .qualityIntro .eyebrow,
  .costIntro .eyebrow,
  .faqIntro .eyebrow,
  .enterpriseSummary .eyebrow {
    margin-bottom: 16px;
  }

  .sectionIntro h2,
  .overviewHeading h2,
  .industryIntro h2,
  .qualityIntro h2,
  .costIntro h2,
  .faqIntro h2,
  .enterpriseSummary h2 {
    max-width: 780px;
  }

  .sectionIntroCenter {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .sectionIntroCenter h2,
  .sectionIntroCenter .sectionLead {
    margin-left: auto;
    margin-right: auto;
  }

  .sectionLead {
    max-width: 820px;
    margin-top: 22px !important;
    font-size: 18px !important;
    line-height: 1.67 !important;
  }

  .inverseBody {
    color: #CBD5E1 !important;
  }

  .primaryButton,
  .secondaryButton,
  .lightButton,
  .textPill {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    padding: 13px 22px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .primaryButton,
  .primaryButton:link,
  .primaryButton:visited,
  .primaryButton:hover,
  .primaryButton:active,
  .primaryButton:focus,
  .primaryButton:focus-visible {
    background: var(--magenta);
    color: #FFFFFF !important;
    border: 1px solid var(--magenta);
  }

  .primaryButton *,
  .primaryButton:link *,
  .primaryButton:visited *,
  .primaryButton:hover *,
  .primaryButton:active *,
  .primaryButton:focus *,
  .primaryButton:focus-visible * {
    color: #FFFFFF !important;
    stroke: currentColor;
  }

  .primaryButton:hover {
    background: var(--magenta-dark);
    border-color: var(--magenta-dark);
    transform: translateY(-1px);
    box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
  }

  .secondaryButton {
    color: var(--ink);
    background: var(--white);
    border: 1px solid var(--line-strong);
  }

  .secondaryButton:hover {
    border-color: #AAB5C4;
    transform: translateY(-1px);
  }

  .primaryButton:focus-visible,
  .secondaryButton:focus-visible,
  .lightButton:focus-visible,
  .textPill:focus-visible,
  .editorialLink:focus-visible,
  .faqButton:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: 3px;
  }

  .compactButton {
    min-height: 48px;
    padding: 12px 19px;
  }

  .editorialLink {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
  }

  .editorialLink svg {
    transition: transform 180ms ease;
  }

  .editorialLink:hover svg {
    transform: translateX(3px);
  }

  .editorialLinkInverse {
    color: #FFFFFF !important;
  }

  .textPill {
    color: var(--magenta);
    background: var(--magenta-soft);
    border: 1px solid #F2D7E3;
  }

  .textPill:hover {
    background: #FAE8F0;
    border-color: #E9BED0;
  }

  .heroSection {
    position: relative;
    overflow: clip;
    background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFE 100%);
    padding-top: 100px;
    padding-bottom: 88px;
  }

  .heroSection::after {
    content: "";
    position: absolute;
    right: -150px;
    top: -150px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: rgba(193, 29, 99, 0.035);
    pointer-events: none;
  }

  .heroGrid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(430px, 0.98fr);
    gap: 62px;
    align-items: center;
  }

  .heroCopy {
    position: relative;
    z-index: 2;
  }

  .heroCopy .eyebrow {
    margin-bottom: 18px;
  }

  .heroLead {
    max-width: 680px;
    margin-top: 26px !important;
    color: var(--ink-soft) !important;
    font-size: 20px !important;
    line-height: 1.55 !important;
  }

  .heroSupport {
    max-width: 680px;
    margin-top: 18px !important;
    font-size: 17px !important;
    line-height: 1.68 !important;
  }

  .heroActions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }

  .heroVisual {
    min-width: 0;
  }

  .heroIllustration {
    display: block;
    width: 100%;
    height: auto;
    max-height: 548px;
  }

  .trustSection {
    background: #FFFFFF;
  }

  .trustBar {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .trustItem {
    padding: 30px 28px;
  }

  .trustItem + .trustItem {
    border-left: 1px solid var(--line);
  }

  .trustTitle {
    color: var(--ink) !important;
    font-size: 17px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: -0.01em;
  }

  .trustItem p {
    margin-top: 7px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.55;
  }

  .splitOverview {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 76px;
    align-items: start;
  }

  .overviewHeading {
    position: sticky;
    top: 28px;
  }

  .overviewHeading .sectionLead {
    max-width: 610px;
  }

  .overviewHeading .editorialLink {
    margin-top: 28px;
  }

  .benefitGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  .benefitItem {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    min-height: 260px;
    padding: 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .iconSurface,
  .assignmentIcon,
  .industryIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--magenta);
    background: var(--magenta-soft);
    border-radius: 14px;
  }

  .iconSurface {
    width: 48px;
    height: 48px;
  }

  .benefitItem h3 {
    font-size: 21px;
    line-height: 1.3;
  }

  .benefitItem p {
    margin-top: 12px;
  }

  .assignmentGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 72px;
    margin-top: 54px;
    border-top: 1px solid var(--line-strong);
  }

  .assignmentItem {
    display: grid;
    grid-template-columns: 54px minmax(0, 1fr);
    gap: 20px;
    min-height: 190px;
    padding: 30px 0;
    border-bottom: 1px solid var(--line-strong);
  }

  .assignmentIcon {
    width: 52px;
    height: 52px;
  }

  .assignmentItem h3 {
    font-size: 21px;
  }

  .assignmentItem p {
    margin-top: 10px;
  }

  .sectionDark {
    position: relative;
    overflow: clip;
    background: #111827;
  }

  .sectionDark::after {
    content: "";
    position: absolute;
    width: 420px;
    height: 420px;
    right: -170px;
    bottom: -270px;
    border-radius: 50%;
    border: 1px solid rgba(242, 167, 198, 0.12);
    box-shadow: 0 0 0 62px rgba(242, 167, 198, 0.025), 0 0 0 124px rgba(242, 167, 198, 0.02);
    pointer-events: none;
  }

  .sectionDark h2,
  .sectionDark h3 {
    color: #FFFFFF;
  }

  .darkHeader {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
  }

  .darkHeader .sectionIntro {
    max-width: 790px;
  }

  .modeGrid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 56px;
    border-top: 1px solid rgba(255, 255, 255, 0.17);
    border-bottom: 1px solid rgba(255, 255, 255, 0.17);
  }

  .modeItem {
    padding: 32px 28px 34px;
  }

  .modeItem + .modeItem {
    border-left: 1px solid rgba(255, 255, 255, 0.17);
  }

  .modeItem h3 {
    min-height: 60px;
    font-size: 22px;
  }

  .modeItem > p {
    margin-top: 16px;
    color: #CBD5E1;
  }

  .modeFit {
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.13);
  }

  .modeFit span {
    color: var(--magenta-light);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .modeFit p {
    margin-top: 8px;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.55;
  }

  .darkNote {
    position: relative;
    z-index: 1;
    max-width: 950px;
    margin-top: 32px;
    padding-left: 20px;
    border-left: 3px solid var(--magenta);
  }

  .darkNote p {
    color: #CBD5E1;
  }

  .industryLayout {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
    gap: 80px;
    align-items: start;
  }

  .industryIntro {
    position: sticky;
    top: 28px;
  }

  .industryIntro .textPill {
    margin-top: 30px;
  }

  .industryRows {
    border-top: 1px solid var(--line);
  }

  .industryRow {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) auto;
    gap: 20px;
    align-items: center;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .industryIcon {
    width: 50px;
    height: 50px;
  }

  .industryText h3 {
    font-size: 21px;
  }

  .industryText p {
    margin-top: 8px;
  }

  .industryRow .editorialLink {
    max-width: 170px;
    justify-content: flex-end;
    text-align: right;
  }

  .matchingPanel {
    display: grid;
    grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
    margin-top: 54px;
    background: #FFFFFF;
    border: 1px solid var(--line-strong);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 18px 42px rgba(16, 24, 40, 0.06);
  }

  .matchingCallout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 42px;
    background: var(--magenta-soft);
  }

  .calloutLabel {
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.15em;
  }

  .matchingCallout blockquote {
    margin-top: 20px;
    color: var(--ink);
    font-size: 27px;
    font-weight: 600;
    line-height: 1.34;
    letter-spacing: -0.025em;
  }

  .matchingCallout .primaryButton {
    margin-top: 30px;
  }

  .matchingRows {
    padding: 12px 40px;
  }

  .matchingRow {
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 16px;
    padding: 23px 0;
    border-bottom: 1px solid var(--line);
  }

  .matchingRow:last-child {
    border-bottom: 0;
  }

  .criteriaMark {
    align-self: start;
    width: 12px;
    height: 3px;
    margin-top: 10px;
    background: var(--magenta);
    border-radius: 999px;
  }

  .matchingRow h3 {
    font-size: 20px;
  }

  .matchingRow p {
    margin-top: 7px;
  }

  .workflowGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 54px;
    padding: 0;
    overflow: hidden;
    list-style: none;
    background: #FFFFFF;
    border: 1px solid var(--line-strong);
    border-radius: 28px;
  }

  .workflowStep {
    position: relative;
    min-height: 270px;
    padding: 32px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .workflowStep:nth-child(3n) {
    border-right: 0;
  }

  .workflowStep:nth-last-child(-n + 3) {
    border-bottom: 0;
  }

  .workflowNumber {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    color: #FFFFFF;
    background: var(--magenta);
    border-radius: 50%;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  .workflowStep h3 {
    font-size: 20px;
  }

  .workflowStep p {
    margin-top: 12px;
  }

  .preparationPanel {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 54px;
    border: 1px solid var(--line-strong);
    border-radius: 30px;
    overflow: hidden;
    background: #FFFFFF;
  }

  .preparationColumn {
    padding: 42px;
  }

  .preparationColumn + .preparationColumn {
    border-left: 1px solid var(--line-strong);
  }

  .preparationCustomer {
    background: var(--magenta-soft);
  }

  .preparationIntro {
    margin-top: 14px !important;
  }

  .checkList {
    display: grid;
    gap: 13px;
    margin-top: 28px !important;
    padding: 0;
    list-style: none;
  }

  .checkList li,
  .comparisonCard li {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
  }

  .checkList svg,
  .comparisonCard li svg {
    margin-top: 4px;
    color: var(--magenta);
  }

  .preparationNote {
    max-width: 920px;
    margin: 30px auto 0 !important;
    text-align: center;
    color: var(--ink-soft) !important;
    font-size: 17px !important;
  }

  .qualityLayout {
    display: grid;
    grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
    gap: 82px;
    align-items: start;
  }

  .qualityIntro {
    position: sticky;
    top: 28px;
  }

  .qualityRows {
    border-top: 1px solid var(--line);
  }

  .qualityRow {
    display: grid;
    grid-template-columns: minmax(190px, 0.44fr) minmax(0, 0.56fr);
    gap: 32px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }

  .qualityRow h3 {
    font-size: 21px;
  }

  .enterpriseSection {
    background: #7A1542;
  }

  .enterpriseLayout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 70px;
    align-items: center;
  }

  .enterpriseSummary h2,
  .enterpriseSummary p,
  .enterpriseItem h3,
  .enterpriseItem p {
    color: #FFFFFF;
  }

  .enterpriseSummary > p:not(.eyebrow) {
    max-width: 650px;
    margin-top: 22px;
    color: #FCE7F0;
    font-size: 18px;
    line-height: 1.68;
  }

  .lightButton,
  .lightButton:link,
  .lightButton:visited {
    margin-top: 30px;
    color: var(--magenta-deep) !important;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

  .lightButton:hover {
    color: var(--magenta-deep) !important;
    background: #FDF2F7;
    transform: translateY(-1px);
  }

  .enterpriseGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    border-left: 1px solid rgba(255, 255, 255, 0.22);
  }

  .enterpriseItem {
    min-height: 210px;
    padding: 28px;
    border-right: 1px solid rgba(255, 255, 255, 0.22);
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  }

  .enterpriseItem h3 {
    font-size: 21px;
  }

  .enterpriseItem p {
    margin-top: 12px;
    color: #FCE7F0;
  }

  .comparisonGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    margin-top: 54px;
  }

  .comparisonCard {
    display: flex;
    flex-direction: column;
    min-height: 570px;
    padding: 32px;
    background: #FFFFFF;
    border: 1px solid var(--line-strong);
    border-radius: 24px;
  }

  .comparisonFeatured {
    border-top: 3px solid var(--magenta);
    box-shadow: 0 18px 44px rgba(16, 24, 40, 0.08);
  }

  .comparisonCard h3 {
    margin-top: 15px;
  }

  .comparisonText {
    margin-top: 16px !important;
  }

  .comparisonLabel {
    margin-top: 28px !important;
    color: var(--ink) !important;
    font-size: 16px !important;
    font-weight: 600 !important;
  }

  .comparisonCard ul {
    display: grid;
    gap: 11px;
    margin: 14px 0 30px !important;
    padding: 0;
    list-style: none;
  }

  .comparisonCard .editorialLink {
    margin-top: auto !important;
    align-self: flex-start;
  }

  .comparisonHelp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-top: 28px;
    padding: 24px 28px;
    background: var(--soft);
    border-radius: 20px;
  }

  .comparisonHelp p {
    max-width: 820px;
  }

  .costLayout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 72px;
    align-items: start;
  }

  .costGuidance {
    max-width: 680px;
    margin-top: 22px !important;
  }

  .costIntro .primaryButton {
    margin-top: 30px;
  }

  .factorPanel {
    padding: 38px;
    background: #FFFFFF;
    border: 1px solid var(--line-strong);
    border-radius: 28px;
  }

  .factorGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 34px;
    margin-top: 24px;
    border-top: 1px solid var(--line);
  }

  .factorItem {
    display: grid;
    grid-template-columns: 11px minmax(0, 1fr);
    gap: 13px;
    align-items: start;
    min-height: 74px;
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
  }

  .factorMark {
    width: 8px;
    height: 2px;
    margin-top: 12px;
    background: var(--magenta);
    border-radius: 2px;
  }

  .factorItem p {
    color: var(--ink-soft);
  }

  .faqLayout {
    display: grid;
    grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
    gap: 72px;
    align-items: start;
  }

  .faqIntro {
    position: sticky;
    top: 28px;
  }

  .faqIntro .textPill {
    margin-top: 28px;
  }

  .faqPanelWrap {
    border-top: 1px solid var(--line-strong);
  }

  .faqItem {
    border-bottom: 1px solid var(--line-strong);
  }

  .faqItem h3 {
    font-size: inherit;
  }

  .faqButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 82px;
    padding: 22px 0;
    color: var(--ink);
    background: transparent;
    border: 0;
    cursor: pointer;
    text-align: left;
    font: inherit;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
  }

  .faqIcon {
    position: relative;
    flex: 0 0 34px;
    width: 34px;
    height: 34px;
    border: 1px solid var(--line-strong);
    border-radius: 50%;
  }

  .faqIcon span {
    position: absolute;
    left: 9px;
    top: 15px;
    width: 14px;
    height: 1.5px;
    background: var(--magenta);
    border-radius: 2px;
    transition: transform 180ms ease;
  }

  .faqIcon span:last-child {
    transform: rotate(90deg);
  }

  .faqItemOpen .faqIcon span:last-child {
    transform: rotate(0deg);
  }

  .faqPanel {
    max-width: 840px;
    padding: 0 54px 26px 0;
  }

  .faqPanel p {
    font-size: 16px;
    line-height: 1.72;
  }

  .finalCtaSection {
    padding: 0 0 96px;
    background: #FFFFFF;
  }

  .finalCtaPanel {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
    gap: 50px;
    align-items: center;
    min-height: 450px;
    padding: 60px 64px;
    background: var(--magenta-soft);
    border: 1px solid #F0D7E2;
    border-radius: 30px;
    overflow: hidden;
  }

  .finalCtaCopy h2 {
    max-width: 700px;
  }

  .finalCtaCopy > p {
    max-width: 740px;
    margin-top: 18px;
    font-size: 17px;
  }

  .finalActions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 30px;
  }

  .finalCtaVisual {
    position: relative;
    width: 100%;
    height: 310px;
  }

  .finalLanguageBubble {
    position: absolute;
    top: 48px;
    width: 104px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink-soft);
    background: #FFFFFF;
    border: 2px solid #D8DEE7;
    border-radius: 24px;
    font-size: 27px;
    font-weight: 600;
    box-shadow: 0 14px 28px rgba(16, 24, 40, 0.07);
  }

  .bubbleOne {
    left: 8%;
  }

  .bubbleTwo {
    right: 8%;
  }

  .finalInterpreter {
    position: absolute;
    left: 50%;
    top: 85px;
    width: 112px;
    height: 144px;
    transform: translateX(-50%);
  }

  .finalInterpreter span:first-child {
    position: absolute;
    left: 34px;
    top: 0;
    width: 44px;
    height: 44px;
    border: 2px solid #596579;
    border-radius: 50%;
    background: #FFFFFF;
  }

  .finalInterpreter span:last-child {
    position: absolute;
    left: 8px;
    bottom: 0;
    width: 96px;
    height: 88px;
    border: 2px solid #596579;
    border-bottom: 0;
    border-radius: 48px 48px 0 0;
    background: #FFFFFF;
  }

  .finalConnector {
    position: absolute;
    left: 29%;
    top: 89px;
    width: 22%;
    height: 2px;
    background: var(--magenta);
  }

  .finalConnectorRight {
    left: auto;
    right: 29%;
  }

  .finalMeetingLine {
    position: absolute;
    left: 12%;
    right: 12%;
    bottom: 42px;
    height: 2px;
    background: #D8DEE7;
  }

  @media (max-width: 1180px) {
    .pageShell {
      padding-left: 40px;
      padding-right: 40px;
    }

    .heroGrid {
      grid-template-columns: minmax(0, 1fr) minmax(390px, 0.86fr);
      gap: 42px;
    }

    .splitOverview {
      grid-template-columns: minmax(0, 1fr);
      gap: 48px;
    }

    .overviewHeading {
      position: static;
      max-width: 820px;
    }

    .benefitItem {
      min-height: 220px;
    }

    .industryRow {
      grid-template-columns: 52px minmax(0, 1fr);
    }

    .industryRow .editorialLink {
      grid-column: 2;
      justify-content: flex-start;
      max-width: none;
      margin-top: 2px;
      text-align: left;
    }

    .modeGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .modeItem:nth-child(3) {
      border-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.17);
    }

    .modeItem:nth-child(4) {
      border-top: 1px solid rgba(255, 255, 255, 0.17);
    }

  }

  @media (max-width: 960px) {
    .pageShell {
      padding-left: 24px;
      padding-right: 24px;
    }

    .section {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .stepesOnsitePage h1 {
      font-size: 42px;
    }

    .stepesOnsitePage h2 {
      font-size: 32px;
    }

    .stepesOnsitePage h3 {
      font-size: 22px;
    }

    .heroSection {
      padding-top: 88px;
      padding-bottom: 76px;
    }

    .heroGrid {
      grid-template-columns: minmax(0, 1fr);
      gap: 54px;
    }

    .heroCopy {
      max-width: 780px;
    }

    .heroVisual {
      max-width: 650px;
      margin: 0 auto;
    }

    .trustBar {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .trustItem:nth-child(3) {
      border-left: 0;
      border-top: 1px solid var(--line);
    }

    .trustItem:nth-child(4) {
      border-top: 1px solid var(--line);
    }

    .splitOverview,
    .industryLayout,
    .qualityLayout,
    .enterpriseLayout,
    .costLayout,
    .faqLayout {
      grid-template-columns: minmax(0, 1fr);
      gap: 50px;
    }

    .overviewHeading,
    .industryIntro,
    .qualityIntro,
    .faqIntro {
      position: static;
    }

    .benefitItem {
      min-height: 230px;
    }

    .industryRow {
      grid-template-columns: 52px minmax(0, 1fr);
    }

    .industryRow .editorialLink {
      grid-column: 2;
      justify-content: flex-start;
      max-width: none;
      text-align: left;
      margin-top: 2px;
    }

    .matchingPanel {
      grid-template-columns: minmax(0, 1fr);
    }

    .matchingCallout {
      min-height: 330px;
    }

    .workflowGrid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .workflowStep,
    .workflowStep:nth-child(3n) {
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .workflowStep:nth-child(2n) {
      border-right: 0;
    }

    .workflowStep:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .preparationPanel {
      grid-template-columns: minmax(0, 1fr);
    }

    .preparationColumn + .preparationColumn {
      border-left: 0;
      border-top: 1px solid var(--line-strong);
    }

    .enterpriseSummary {
      max-width: 800px;
    }

    .comparisonGrid {
      grid-template-columns: minmax(0, 1fr);
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }

    .comparisonCard {
      min-height: 0;
    }

    .comparisonHelp {
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
    }

    .finalCtaPanel {
      grid-template-columns: minmax(0, 1fr);
    }

    .finalCtaVisual {
      max-width: 560px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .heroSection {
      padding-top: 76px;
      padding-bottom: 68px;
    }

    .heroLead {
      font-size: 18px !important;
    }

    .sectionLead {
      font-size: 18px !important;
    }

    .benefitGrid,
    .assignmentGrid,
    .enterpriseGrid,
    .factorGrid {
      grid-template-columns: minmax(0, 1fr);
    }

    .benefitItem,
    .enterpriseItem {
      min-height: 0;
    }

    .benefitItem:nth-child(n),
    .enterpriseItem:nth-child(n) {
      border-left: 0;
    }

    .assignmentGrid {
      column-gap: 0;
    }

    .darkHeader {
      align-items: flex-start;
      flex-direction: column;
    }

    .modeGrid {
      grid-template-columns: minmax(0, 1fr);
    }

    .modeItem,
    .modeItem:nth-child(3),
    .modeItem:nth-child(4) {
      border-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.17);
    }

    .modeItem:first-child {
      border-top: 0;
    }

    .modeItem h3 {
      min-height: 0;
    }

    .workflowGrid {
      grid-template-columns: minmax(0, 1fr);
      margin-top: 42px;
      border-radius: 24px;
    }

    .workflowStep,
    .workflowStep:nth-child(n),
    .workflowStep:nth-last-child(-n + 2) {
      display: grid;
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 18px;
      min-height: 0;
      padding: 26px 24px;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .workflowStep:last-child {
      border-bottom: 0;
    }

    .workflowNumber {
      width: 42px;
      height: 42px;
      margin-bottom: 0;
    }

    .qualityRow {
      grid-template-columns: minmax(0, 1fr);
      gap: 10px;
    }

    .comparisonHelp {
      align-items: flex-start;
      flex-direction: column;
    }

    .editorialLink {
      min-height: 44px;
    }

    .faqPanel {
      padding-right: 0;
    }

    .finalCtaPanel {
      padding: 48px 34px;
    }
  }

  @media (max-width: 640px) {
    .pageShell {
      padding-left: 20px;
      padding-right: 20px;
    }

    .section {
      padding-top: 68px;
      padding-bottom: 68px;
    }

    .stepesOnsitePage h1 {
      font-size: 38px;
      line-height: 1.1;
    }

    .stepesOnsitePage h2 {
      font-size: 30px;
      line-height: 1.17;
    }

    .stepesOnsitePage h3 {
      font-size: 20px;
    }

    .heroActions {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
    }

    .heroActions .primaryButton,
    .heroActions .secondaryButton,
    .costIntro .primaryButton,
    .finalActions .primaryButton {
      width: 100%;
    }

    .heroIllustration {
      width: 100%;
      max-width: none;
      margin-left: 0;
    }

    .trustBar {
      grid-template-columns: minmax(0, 1fr);
    }

    .trustItem + .trustItem,
    .trustItem:nth-child(3),
    .trustItem:nth-child(4) {
      border-left: 0;
      border-top: 1px solid var(--line);
    }

    .trustItem {
      padding: 24px 0;
    }

    .benefitGrid {
      border-left: 0;
    }

    .benefitItem {
      grid-template-columns: 46px minmax(0, 1fr);
      padding: 26px 0;
      border-right: 0;
    }

    .assignmentItem {
      grid-template-columns: 48px minmax(0, 1fr);
      min-height: 0;
      padding: 26px 0;
    }

    .assignmentIcon {
      width: 46px;
      height: 46px;
    }

    .modeItem {
      padding-left: 0;
      padding-right: 0;
    }

    .industryRow {
      grid-template-columns: 46px minmax(0, 1fr);
      gap: 16px;
    }

    .industryIcon {
      width: 44px;
      height: 44px;
    }

    .industryRow .editorialLink {
      grid-column: 2;
      margin-left: 0;
    }

    .matchingPanel,
    .preparationPanel,
    .factorPanel,
    .comparisonCard {
      border-radius: 22px;
    }

    .matchingCallout,
    .preparationColumn,
    .factorPanel,
    .comparisonCard {
      padding: 28px 24px;
    }

    .matchingCallout blockquote {
      font-size: 23px;
    }

    .matchingRows {
      padding: 6px 22px;
    }

    .matchingRow {
      grid-template-columns: 18px minmax(0, 1fr);
    }

    .enterpriseItem {
      padding: 24px 0;
      border-right: 0;
    }

    .enterpriseGrid {
      border-left: 0;
    }

    .comparisonGrid {
      gap: 16px;
    }

    .comparisonHelp {
      padding: 22px;
    }

    .factorGrid {
      gap: 0;
    }

    .faqButton {
      min-height: 76px;
      gap: 18px;
      font-size: 18px;
    }

    .faqIcon {
      flex-basis: 32px;
      width: 32px;
      height: 32px;
    }

    .faqIcon span {
      left: 8px;
      top: 14px;
    }

    .finalCtaSection {
      padding-bottom: 68px;
    }

    .finalCtaPanel {
      min-height: 0;
      padding: 40px 24px;
      border-radius: 24px;
    }

    .finalActions {
      align-items: stretch;
      flex-direction: column;
      gap: 18px;
    }

    .finalCtaVisual {
      height: 250px;
    }

    .finalLanguageBubble {
      width: 82px;
      height: 70px;
      font-size: 22px;
    }

    .finalInterpreter {
      top: 75px;
      transform: translateX(-50%) scale(0.86);
    }

    .finalConnector {
      top: 80px;
    }
  }

  @media (max-width: 480px) {
    .finalCtaVisual {
      display: none;
    }
  }

  @media (max-width: 390px) {
    .heroSection {
      padding-top: 68px;
    }

    .stepesOnsitePage h1 {
      font-size: 38px;
    }

    .heroLead,
    .heroSupport,
    .sectionLead {
      font-size: 17px !important;
    }

    .primaryButton,
    .secondaryButton,
    .lightButton,
    .textPill {
      padding-left: 18px;
      padding-right: 18px;
    }

    .benefitItem,
    .assignmentItem,
    .industryRow {
      gap: 14px;
    }

    .matchingRow {
      grid-template-columns: 16px minmax(0, 1fr);
      gap: 13px;
    }

    .finalCtaVisual {
      height: 225px;
    }
  }
`;
