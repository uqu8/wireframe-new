import React, { useState } from "react";

function ArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function Check({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Plus({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
        open ? "rotate-45" : "rotate-0"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function GlobeIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 4.6 2.7 8.1 7 10 4.3-1.9 7-5.4 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function LayersIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function SparkIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z" />
      <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
      <path d="m5.5 14 .6 1.8 1.9.7-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.7.6-1.8Z" />
    </svg>
  );
}

function TravelHospitalityLineArt() {
  return (
    <div
      className="relative mx-auto w-full max-w-[590px] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 620 520"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeFade" x1="85" y1="90" x2="540" y2="410">
            <stop stopColor="#C11D63" />
            <stop offset="1" stopColor="#9F1D55" stopOpacity="0.42" />
          </linearGradient>
          <pattern id="travelDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.25" fill="#D7DBE3" />
          </pattern>
        </defs>

        <rect x="28" y="28" width="564" height="464" rx="52" fill="url(#travelDots)" opacity="0.5" />
        <path
          d="M92 354C143 257 205 199 292 176C371 155 449 175 522 118"
          stroke="url(#routeFade)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="7 11"
        />
        <circle cx="92" cy="354" r="7" fill="#C11D63" />
        <circle cx="522" cy="118" r="7" fill="#C11D63" />

        <g transform="translate(210 92) rotate(8)">
          <path
            d="m0 21 42-9 15-9 8 1-12 14 31-1 9 4-38 9-17 23-7 2 6-21-21 5L0 31l20-10H0Z"
            stroke="#252735"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="m38 12-7-9 7-2 14 8" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        <g transform="translate(72 138)">
          <circle cx="112" cy="112" r="108" fill="#FFFFFF" stroke="#DADDE5" strokeWidth="2" />
          <circle cx="112" cy="112" r="83" stroke="#252735" strokeWidth="2.2" />
          <path d="M29 112h166" stroke="#252735" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 29c27 24 43 51 43 83s-16 59-43 83" stroke="#252735" strokeWidth="2" strokeLinecap="round" />
          <path d="M112 29c-27 24-43 51-43 83s16 59 43 83" stroke="#252735" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 68c22 14 45 21 70 21s48-7 70-21" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 156c22-14 45-21 70-21s48 7 70 21" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M148 136c0-18 14-32 32-32s32 14 32 32c0 24-32 54-32 54s-32-30-32-54Z"
            fill="#FFFFFF"
            stroke="#C11D63"
            strokeWidth="2.6"
          />
          <circle cx="180" cy="136" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
        </g>

        <g transform="translate(344 220)">
          <rect x="0" y="64" width="190" height="154" rx="22" fill="#FFFFFF" stroke="#DADDE5" strokeWidth="2" />
          <path d="M20 64V24h150v40" stroke="#252735" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M48 24V0h94v24" stroke="#252735" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M27 91h35v34H27zM78 91h35v34H78zM129 91h35v34h-35z" stroke="#C11D63" strokeWidth="2" />
          <path d="M27 143h35v34H27zM129 143h35v34h-35z" stroke="#252735" strokeWidth="2" />
          <path d="M79 218v-75h34v75" stroke="#252735" strokeWidth="2.2" />
          <path d="M8 218h174" stroke="#252735" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M71 0h48" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
          <path d="M95-18v18" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
          <path d="M80-12h30" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(239 348)">
          <rect x="0" y="0" width="108" height="142" rx="20" fill="#FFFFFF" stroke="#252735" strokeWidth="2.2" />
          <rect x="13" y="18" width="82" height="82" rx="12" fill="#FDF2F7" stroke="#E8C6D4" strokeWidth="1.5" />
          <path d="M30 48h48M30 63h32M30 78h40" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <circle cx="54" cy="119" r="6" stroke="#252735" strokeWidth="2" />
        </g>

        <path d="M331 418h29" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
        <path d="M234 407h-22" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
        <circle cx="562" cy="194" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
        <path d="M556 194h12M562 188v12" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const journeyStages = [
  {
    title: "Discover and Plan",
    text: "Destination websites, property descriptions, campaigns, travel guides, social content, and videos that inspire international audiences.",
  },
  {
    title: "Compare and Book",
    text: "Booking websites, apps, rates, fares, packages, policies, checkout content, confirmations, and reservation communications.",
  },
  {
    title: "Prepare and Travel",
    text: "Pre-arrival information, itineraries, passenger notices, entry guidance, directions, mobile alerts, and service updates.",
  },
  {
    title: "Arrive and Experience",
    text: "Check-in, welcome communications, signage, wayfinding, guest services, menus, amenities, and on-site support.",
  },
  {
    title: "Re-engage and Retain",
    text: "Loyalty programs, surveys, post-stay messages, review responses, offers, and multilingual customer-service follow-up.",
  },
];

const contentGroups = [
  {
    title: "Brand and Marketing Content",
    text: "Campaigns, destination marketing, property and experience descriptions, advertising, email, social media, brochures, loyalty promotions, and search content.",
  },
  {
    title: "Booking and Transactional Content",
    text: "Booking interfaces, room and fare descriptions, rates, packages, payment instructions, terms, cancellation policies, confirmations, receipts, and reward information.",
  },
  {
    title: "Traveler and Guest Communications",
    text: "Itineraries, pre-arrival messages, check-in instructions, notifications, service announcements, guest directories, signage, FAQs, surveys, and post-stay communications.",
  },
  {
    title: "Customer Support Content",
    text: "Knowledge bases, support emails, chat, tickets, automated responses, complaint handling, disruption notices, resolution communications, and training materials.",
  },
  {
    title: "Multimedia and Operational Content",
    text: "Videos, subtitles, captions, voice-over, audio guides, training media, policies, presentations, customer forms, event materials, and operating instructions.",
  },
];

const services = [
  {
    title: "Website Localization",
    text: "Translate and continuously update websites, destination portals, property pages, booking journeys, campaign content, and support resources.",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    title: "App and Software Localization",
    text: "Localize travel apps, reservation platforms, property systems, loyalty applications, kiosks, portals, and guest-service tools.",
    href: "https://www.stepes.com/software-localization-services/",
  },
  {
    title: "Marketing Translation and Transcreation",
    text: "Adapt brand campaigns, promotions, destination storytelling, loyalty communications, and experiential messaging for local audiences.",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Multimedia Localization",
    text: "Deliver multilingual subtitles, transcription, captions, voice-over, audio localization, and production support for digital experiences.",
    href: "https://www.stepes.com/multimedia-translation-services/",
  },
  {
    title: "Multilingual Customer Support",
    text: "Translate customer inquiries, knowledge content, chat, email, support tickets, service updates, and self-service resources.",
    href: "https://www.stepes.com/customer-support-translation-service/",
  },
  {
    title: "Document Translation",
    text: "Translate customer-facing and operational documents across common business, publishing, presentation, and design formats.",
    href: "https://www.stepes.com/document-translation-services/",
  },
  {
    title: "Interpreting",
    text: "Support conferences, events, meetings, training sessions, guest interactions, and other real-time multilingual communication needs.",
    href: "https://www.stepes.com/interpretation-services/",
  },
];

const organizations = {
  Travel: [
    "Airlines and airports",
    "Rail and public transportation",
    "Cruise lines and mobility providers",
    "Online travel agencies and booking platforms",
    "Tour operators and travel agencies",
    "Tourism boards and destination organizations",
    "Attractions and experience providers",
  ],
  Hospitality: [
    "Hotel and resort groups",
    "Boutique and independent properties",
    "Vacation rentals and property groups",
    "Restaurants and food service",
    "Convention and event venues",
    "Loyalty and membership programs",
    "Travel and hospitality technology providers",
  ],
};

const useCases = [
  {
    title: "Launch a Multilingual Booking Experience",
    text: "Localize websites, apps, search tools, booking steps, payment information, confirmations, policies, and support content within one connected program.",
  },
  {
    title: "Scale Across Properties and Destinations",
    text: "Use translation memory, terminology, automated workflows, and centralized approvals to manage recurring content across a large portfolio.",
  },
  {
    title: "Support Customers During Service Changes",
    text: "Translate alerts, schedule updates, disruption notices, FAQs, mobile notifications, help-center articles, and customer-service messages.",
  },
  {
    title: "Maintain a Consistent Global Brand",
    text: "Coordinate terminology, style guidance, linguistic teams, and approvals while adapting content for local markets and customer expectations.",
  },
  {
    title: "Expand Multilingual Customer Support",
    text: "Translate support articles, emails, chats, service scripts, automated responses, and customer inquiries across digital and assisted channels.",
  },
  {
    title: "Localize Loyalty and Retention Programs",
    text: "Adapt membership benefits, rewards, offers, account interfaces, member communications, and service resources across customer touchpoints.",
  },
];

const workflow = [
  {
    title: "Define Markets and Priorities",
    text: "Align target languages, customer journeys, channels, deadlines, business objectives, and quality expectations.",
  },
  {
    title: "Prepare Content and Language Assets",
    text: "Review source files, formats, existing translations, terminology, style guidance, and technical requirements.",
  },
  {
    title: "Select the Right Workflow",
    text: "Route content through AI-assisted translation, professional review, expert human translation, or transcreation.",
  },
  {
    title: "Translate and Review in Context",
    text: "Evaluate accuracy, fluency, terminology, brand voice, cultural suitability, and fit within the final experience.",
  },
  {
    title: "Test and Validate",
    text: "Perform linguistic, visual, functional, and stakeholder review according to the project requirements.",
  },
  {
    title: "Publish and Continuously Improve",
    text: "Update translation memory and terminology, apply feedback, report progress, and support future releases.",
  },
];

const differentiators = [
  {
    title: "Industry-Relevant Linguists",
    text: "Professional translators familiar with customer communications, booking content, destination marketing, digital experiences, and service operations.",
  },
  {
    title: "AI and Human Expertise",
    text: "Flexible workflows match translation effort and review depth to content volume, visibility, brand impact, and risk.",
  },
  {
    title: "Connected Content Operations",
    text: "Manage websites, apps, documents, multimedia, marketing, and customer-support content within one language program.",
  },
  {
    title: "Continuous Global Updates",
    text: "Automation, APIs, translation memory, and terminology management support fast-changing and recurring content.",
  },
  {
    title: "Consistent Global Branding",
    text: "Style guides, glossaries, dedicated teams, and review workflows help align language across brands, properties, and markets.",
  },
  {
    title: "Enterprise Visibility and Control",
    text: "Centralized project management, reporting, quality feedback, permissions, and approvals strengthen global governance.",
  },
];

const faqs = [
  {
    question: "What are travel and hospitality translation services?",
    answer:
      "Travel and hospitality translation services help organizations communicate with international travelers and guests across websites, apps, booking platforms, customer communications, marketing, support content, documents, and multimedia. Programs may include translation, localization, transcreation, subtitling, voice-over, interpreting, multilingual SEO, testing, and ongoing language management.",
  },
  {
    question: "What is the difference between travel translation and hospitality translation?",
    answer:
      "Travel translation primarily supports organizations that move, guide, book, or inform travelers, including airlines, transportation providers, travel agencies, tourism organizations, and booking platforms. Hospitality translation primarily supports organizations that accommodate, host, feed, or serve guests, including hotels, resorts, rentals, restaurants, event venues, and guest-service providers.",
  },
  {
    question: "Can Stepes localize travel websites and booking platforms?",
    answer:
      "Yes. Stepes localizes corporate websites, destination portals, property pages, booking engines, reservation systems, checkout interfaces, customer portals, and support content. Localization can include interface text, descriptions, metadata, policies, transactional messages, currencies, dates, regional formats, multilingual SEO, and in-context quality assurance.",
  },
  {
    question: "Can you translate travel and hospitality mobile apps?",
    answer:
      "Yes. Stepes localizes mobile applications for booking, transportation, check-in, destination discovery, loyalty programs, guest services, digital concierge experiences, and customer support. We can translate application strings, notifications, help content, app-store descriptions, release updates, images, and multimedia assets.",
  },
  {
    question: "How does Stepes handle frequently changing property or destination content?",
    answer:
      "Stepes supports continuous localization using workflow automation, APIs, translation memory, terminology management, and structured review processes. New or modified content can be identified and routed through the appropriate workflow without repeatedly processing unchanged material.",
  },
  {
    question: "When should travel content receive professional human review?",
    answer:
      "The appropriate review level depends on the purpose and visibility of the content. High-volume repetitive material may use AI-assisted translation with automated checks and selective review. Customer-facing websites, booking interfaces, and guest communications often benefit from professional post-editing and in-context review. Brand-critical, legal, safety, and high-impact content should receive enhanced professional review.",
  },
  {
    question: "Can Stepes preserve our brand voice across languages?",
    answer:
      "Yes. Stepes uses style guides, approved terminology, translation memory, dedicated linguistic teams, transcreation, and client review workflows to preserve brand voice. Linguists adapt tone, formality, calls to action, cultural references, and creative language for the intended audience while remaining aligned with the global brand.",
  },
  {
    question: "Does Stepes support multilingual customer service?",
    answer:
      "Yes. Stepes translates customer inquiries, support emails, knowledge-base articles, chat messages, support tickets, FAQs, service notices, and customer-service training materials. Workflows can support both recurring content and time-sensitive communications.",
  },
  {
    question: "Can Stepes translate menus, signage, videos, and printed materials?",
    answer:
      "Yes. Stepes supports digital, printed, visual, and multimedia content, including menus, signage, brochures, guest directories, videos, subtitles, voice-over, presentations, guides, and promotional materials. The workflow is adapted to the source format, layout, languages, and intended use.",
  },
  {
    question: "How do you maintain consistency across multiple brands or properties?",
    answer:
      "Stepes uses centralized translation memories, brand-specific glossaries, style guides, dedicated linguistic teams, approval workflows, and enterprise translation management. Organizations can share approved corporate terminology while maintaining separate language resources for individual brands, markets, properties, or business units.",
  },
  {
    question: "Which languages does Stepes support?",
    answer:
      "Stepes supports more than 100 languages, including regional variants for major global markets. Language programs can be structured around customer demand, destination coverage, regional operations, and market expansion priorities.",
  },
  {
    question: "How much do travel and hospitality translation services cost?",
    answer:
      "Pricing depends on the languages, content volume, file formats, workflow, level of professional review, technical requirements, turnaround time, and additional services such as desktop publishing, multimedia production, or localization testing. Translation memory and automation may reduce repetitive translation effort for ongoing programs.",
  },
];

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase leading-5 tracking-[0.2em] ${
        dark ? "text-[#F2A7C6]" : "text-[#9F1D55]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, text, align = "left", dark = false }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-[860px] text-center" : "max-w-[780px]"}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`${eyebrow ? "mt-4" : ""} text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[32px] lg:text-[36px] ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`${centered ? "mx-auto" : ""} mt-6 max-w-[780px] text-[17px] leading-8 sm:text-[18px] ${
            dark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function TextLink({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4 ${
        dark
          ? "text-[#F2A7C6] hover:text-white"
          : "text-[#A71954] hover:text-[#7A1542]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform" />
    </a>
  );
}

export default function TravelHospitalityTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-w-0 overflow-x-hidden bg-white font-sans text-slate-950">
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .stepes-primary,
        .stepes-primary:visited,
        .stepes-primary:hover,
        .stepes-primary:active,
        .stepes-primary:focus { color: #ffffff !important; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-[72px] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-[104px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="relative z-10 max-w-[660px]">
              <Eyebrow>Travel &amp; Hospitality</Eyebrow>
              <h1 className="mt-5 max-w-[650px] text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[48px]">
                Travel &amp; Hospitality Translation Services
              </h1>
              <p className="mt-7 max-w-[640px] text-[18px] leading-8 text-slate-600">
                Create seamless multilingual experiences across every stage of the traveler and guest journey. Stepes helps travel brands, hospitality groups, tourism organizations, and digital booking platforms translate websites, apps, customer communications, marketing, and support content into more than 100 languages.
              </p>
              <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-slate-600">
                Our AI-powered translation solutions combine speed and scalability with professional linguistic expertise, helping global organizations communicate clearly, preserve their brand voice, and serve customers wherever their journeys take them.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="stepes-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:-translate-y-0.5 hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Talk to an Expert
                  <ArrowUpRight />
                </a>
                <a
                  href="https://www.stepes.com/translation-quote/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9DEE5] bg-white px-6 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:border-[#C11D63]/40 hover:bg-[#FDF2F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Get a Translation Quote
                  <ArrowRight />
                </a>
              </div>
            </div>

            <div className="relative -mx-3 sm:mx-0 lg:pl-2">
              <TravelHospitalityLineArt />
            </div>
          </div>
        </div>

        <div className="border-y border-[#E8EAF0] bg-[#FCFCFD]">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 px-5 sm:px-6 md:px-10 lg:grid-cols-4 lg:px-14">
            {["100+ Languages", "AI + Human Workflows", "Enterprise Localization", "Secure Content Handling"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`flex min-h-[86px] items-center py-5 text-[16px] font-semibold text-slate-800 ${
                    index % 2 === 1 ? "border-l border-[#E8EAF0] pl-5 sm:pl-7" : "pr-5 sm:pr-7"
                  } ${
                    index >= 2 ? "border-t border-[#E8EAF0] lg:border-t-0" : ""
                  } ${index === 2 ? "lg:border-l lg:pl-7" : ""}`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white" id="traveler-guest-journey">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <SectionHeading
              eyebrow="The Customer Journey"
              title="Support Every Stage of the Global Experience"
            />
            <div className="lg:pt-8">
              <p className="max-w-[770px] text-[22px] leading-[1.6] tracking-[-0.02em] text-slate-900 sm:text-[24px]">
                Travel and hospitality experiences begin long before a customer boards a flight or arrives at a property. Stepes helps organizations communicate consistently from discovery and booking through arrival, service, and post-trip engagement.
              </p>
              <p className="mt-6 max-w-[750px] text-[16px] leading-8 text-slate-600">
                Connected language workflows help customers understand their options, complete transactions with confidence, navigate unfamiliar experiences, receive timely assistance, and continue engaging with the brand after the journey ends.
              </p>
            </div>
          </div>

          <div className="relative mt-14 lg:mt-16">
            <div className="absolute left-[10%] right-[10%] top-[17px] hidden h-px bg-[#DDE1E8] lg:block" />
            <div className="grid gap-0 border-y border-[#E3E6EC] lg:grid-cols-5 lg:border-y-0">
              {journeyStages.map((stage, index) => (
                <div
                  key={stage.title}
                  className={`relative border-b border-[#E3E6EC] py-7 last:border-b-0 lg:border-b-0 lg:px-6 lg:pb-0 lg:pt-0 ${
                    index > 0 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="grid grid-cols-[42px_1fr] gap-4 lg:block">
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#C11D63]/30 bg-white text-[14px] font-semibold text-[#9F1D55] lg:mx-auto">
                      {index + 1}
                    </div>
                    <div className="lg:mt-7 lg:text-center">
                      <h3 className="text-[20px] font-semibold leading-7 text-slate-950 lg:text-[21px]">
                        {stage.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-7 text-slate-600">
                        {stage.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized solutions */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Industry Pathways"
            title="Specialized Language Solutions for Travel and Hospitality"
            text="Explore focused services for organizations that move, guide, book, accommodate, host, feed, and support travelers and guests."
            align="center"
          />

          <div className="mt-12 overflow-hidden rounded-[30px] border border-[#E2E5EB] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.04)]">
            <div className="grid lg:grid-cols-2">
              <article className="p-7 sm:p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF2F7] text-[#C11D63]">
                  <GlobeIcon />
                </div>
                <h3 className="mt-6 text-[24px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                  Travel Translation Services
                </h3>
                <p className="mt-4 max-w-[520px] text-[16px] leading-8 text-slate-600">
                  Language solutions for airlines, airports, rail, cruise, ground transportation, travel agencies, booking platforms, tourism organizations, attractions, and travel technology companies.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Booking and traveler apps", "Passenger communications", "Destination marketing", "Itineraries and service updates"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8">
                  <TextLink href="https://www.stepes.com/travel-translation-services/">
                    Explore Travel Translation Services
                  </TextLink>
                </div>
              </article>

              <article className="border-t border-[#E2E5EB] p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF2F7] text-[#C11D63]">
                  <LayersIcon />
                </div>
                <h3 className="mt-6 text-[24px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                  Hospitality Translation Services
                </h3>
                <p className="mt-4 max-w-[520px] text-[16px] leading-8 text-slate-600">
                  Localization for hotels, resorts, vacation rentals, restaurants, event venues, loyalty programs, guest services, property groups, and hospitality technology providers.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Property and booking content", "Guest communications", "Menus and on-site experiences", "Loyalty and event content"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-8 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:gap-x-7">
                  <TextLink href="https://www.stepes.com/hospitality-translation-services/">
                    Explore Hospitality Translation Services
                  </TextLink>
                  <TextLink href="https://www.stepes.com/hotel-translation-services/">
                    Hotel Translation Services
                  </TextLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Digital experience */}
      <section className="bg-[#17151C] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <SectionHeading
              eyebrow="Connected Digital Experiences"
              title="Localize Every Digital Travel and Guest Touchpoint"
              text="Customers move between search, websites, apps, booking systems, customer portals, notifications, and support channels. Stepes helps keep language and experience consistent across that connected ecosystem."
              dark
            />

            <div className="grid border-y border-white/[0.14] sm:grid-cols-2 lg:mt-1">
              {[
                {
                  title: "Websites and Destination Portals",
                  text: "Corporate sites, destination pages, property content, campaigns, travel guides, and support resources.",
                },
                {
                  title: "Booking and Reservation Platforms",
                  text: "Search, availability, rates, fares, checkout, payment, policies, confirmations, and cancellations.",
                },
                {
                  title: "Travel and Hospitality Apps",
                  text: "Booking, check-in, loyalty, transportation, digital keys, concierge, messaging, and self-service support.",
                },
                {
                  title: "Customer and Loyalty Portals",
                  text: "Reservations, profiles, membership benefits, rewards, travel preferences, and support requests.",
                },
                {
                  title: "Digital Concierge and Kiosks",
                  text: "Self-service interfaces, in-room tablets, chatbots, automated messages, and on-property experiences.",
                },
                {
                  title: "Email, SMS, and Notifications",
                  text: "Pre-arrival information, service alerts, confirmations, updates, offers, and post-stay engagement.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`py-7 sm:px-7 ${index % 2 === 1 ? "sm:border-l sm:border-white/[0.14]" : ""} ${
                    index > 1 ? "border-t border-white/[0.14]" : index === 1 ? "border-t border-white/[0.14] sm:border-t-0" : ""
                  }`}
                >
                  <h3 className="text-[20px] font-semibold leading-7 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <TextLink href="https://www.stepes.com/website-translation-services/" dark>
              Website Translation Services
            </TextLink>
            <TextLink href="https://www.stepes.com/app-localization-services/" dark>
              App Localization Services
            </TextLink>
            <TextLink href="https://www.stepes.com/software-localization-services/" dark>
              Software Localization Services
            </TextLink>
          </div>
        </div>
      </section>

      {/* Content types */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Content Coverage"
                title="Travel and Hospitality Content We Translate"
                text="Stepes supports customer-facing, operational, digital, promotional, and multimedia content across the broader travel and hospitality ecosystem."
              />
              <div className="mt-7">
                <TextLink href="https://www.stepes.com/marketing-translation-services/">
                  Marketing Translation Services
                </TextLink>
              </div>
            </div>

            <div className="border-t border-[#E3E6EC]">
              {contentGroups.map((group) => (
                <article
                  key={group.title}
                  className="grid gap-3 border-b border-[#E3E6EC] py-7 sm:grid-cols-[0.72fr_1.28fr] sm:gap-8"
                >
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">
                    {group.title}
                  </h3>
                  <p className="text-[16px] leading-8 text-slate-600">{group.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Integrated Language Services"
            title="One Language Partner for Every Content Channel"
            text="Bring websites, software, marketing, customer support, multimedia, documents, and live communication into one coordinated localization program."
            align="center"
          />

          <div className="mt-12 border-y border-[#E0E4EA] lg:grid lg:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`border-b border-[#E0E4EA] py-7 last:border-b-0 lg:px-8 ${
                  index % 2 === 1 ? "lg:border-l" : ""
                } ${
                  index === services.length - 1 ? "lg:col-span-2 lg:border-b-0" : ""
                }`}
              >
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[540px] text-[16px] leading-8 text-slate-600">
                  {service.text}
                </p>
                <div className="mt-4">
                  <TextLink href={service.href}>{service.title}</TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI + human */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="overflow-hidden rounded-[30px] border border-[#E3E6EC] bg-[#FCFCFD] shadow-[0_18px_54px_rgba(15,23,42,0.045)]">
            <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
              <div className="p-7 sm:p-9 lg:p-11">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF2F7] text-[#C11D63]">
                  <SparkIcon />
                </div>
                <h2 className="mt-7 max-w-[470px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  Balance Translation Speed, Scale, and Brand Quality
                </h2>
                <p className="mt-6 max-w-[500px] text-[17px] leading-8 text-slate-600">
                  Not every piece of content requires the same translation workflow. Stepes helps you match AI translation, professional review, subject expertise, and quality assurance to the purpose and impact of each content type.
                </p>
                <div className="mt-7">
                  <TextLink href="https://www.stepes.com/ai-human-translation-workflow/">
                    AI + Human Translation Workflows
                  </TextLink>
                </div>
              </div>

              <div className="border-t border-[#E3E6EC] bg-white lg:border-l lg:border-t-0">
                {[
                  {
                    label: "High-Volume Content",
                    title: "AI-Assisted Translation with Scalable Controls",
                    text: "Property descriptions, destination inventories, user-generated content, knowledge updates, and repetitive structured material can use automation, terminology, translation memory, and selective professional review.",
                  },
                  {
                    label: "Customer-Facing Content",
                    title: "Professional Linguistic and In-Context Review",
                    text: "Websites, apps, booking journeys, loyalty communications, and guest messages benefit from review for accuracy, fluency, terminology, tone, and fit within the customer experience.",
                  },
                  {
                    label: "High-Impact Content",
                    title: "Expert Human Translation and Enhanced QA",
                    text: "Safety information, emergency communications, legal terms, customer policies, and brand-critical campaigns receive the appropriate level of expert translation, transcreation, and validation.",
                  },
                ].map((tier, index) => (
                  <article
                    key={tier.label}
                    className={`p-7 sm:p-8 lg:p-9 ${index > 0 ? "border-t border-[#E3E6EC]" : ""}`}
                  >
                    <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#9F1D55]">
                      {tier.label}
                    </p>
                    <h3 className="mt-3 text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">
                      {tier.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-8 text-slate-600">{tier.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous localization */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Continuous Localization"
                title="Keep Global Content Current Across Every Market"
                text="New destinations, properties, routes, offers, amenities, policies, app releases, and support updates create a constant stream of multilingual content. Stepes supports ongoing operations instead of treating every update as an isolated project."
              />
              <div className="mt-8 grid gap-1">
                <TextLink href="https://www.stepes.com/translation-workflow-automation/">
                  Translation Workflow Automation
                </TextLink>
                <TextLink href="https://www.stepes.com/developers/translation-api/">
                  Stepes Translation API
                </TextLink>
                <TextLink href="https://www.stepes.com/translation-memory/">
                  Translation Memory
                </TextLink>
                <TextLink href="https://www.stepes.com/terminology-management/">
                  Terminology Management
                </TextLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E0E4EA] bg-white">
              {[
                {
                  title: "Identify New and Changed Content",
                  text: "Connect systems or submit content through structured workflows so updates can be separated from unchanged material.",
                },
                {
                  title: "Route by Content Purpose",
                  text: "Apply the right combination of AI translation, professional review, expert translation, or transcreation.",
                },
                {
                  title: "Review, Approve, and Deliver",
                  text: "Coordinate linguistic review, in-context validation, stakeholder approval, and delivery through a visible workflow.",
                },
                {
                  title: "Reuse Approved Language",
                  text: "Update translation memory, terminology, and style guidance so future content benefits from prior approvals and feedback.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className={`grid grid-cols-[44px_1fr] gap-4 p-7 sm:grid-cols-[54px_1fr] sm:p-8 ${
                    index > 0 ? "border-t border-[#E0E4EA]" : ""
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDF2F7] text-[14px] font-semibold text-[#9F1D55] sm:h-10 sm:w-10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold leading-7 text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand + SEO */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
            <article className="lg:pr-14">
              <Eyebrow>Brand and Cultural Adaptation</Eyebrow>
              <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Make Every Experience Feel Local and On Brand
              </h2>
              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-slate-600">
                A luxury resort, low-cost airline, boutique hotel, destination campaign, and family attraction each communicate differently. Stepes helps protect the global brand while adapting tone, formality, terminology, creative messaging, and cultural references for local audiences.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Brand voice and style", "Creative transcreation", "Regional conventions", "Local cultural expectations", "Calls to action", "Food and amenity terminology"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-7">
                <TextLink href="https://www.stepes.com/transcreation-services/">
                  Transcreation Services
                </TextLink>
              </div>
            </article>

            <article className="border-t border-[#E1E4EA] pt-14 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <Eyebrow>International Discovery</Eyebrow>
              <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Help International Audiences Find Your Content
              </h2>
              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-slate-600">
                Multilingual SEO should reflect how customers in each market search for destinations, properties, transportation, amenities, and experiences. Stepes localizes search intent rather than translating source-language keywords literally.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Market-specific keywords", "Titles and descriptions", "Destination and property pages", "Localized URLs and hreflang", "Image alt text", "Internal linking and content checks"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-7">
                <TextLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">
                  Multilingual SEO Guide
                </TextLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-[#17151C] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Quality That Protects the Customer Experience"
            text="A translation may be accurate but still fail if it is truncated in an app, placed incorrectly in a booking flow, inconsistent with a policy, or unsuitable for the brand. Stepes evaluates language in the context where customers use it."
            align="center"
            dark
          />

          <div className="mt-12 grid border-y border-white/[0.14] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Linguistic Quality",
                text: "Accuracy, completeness, fluency, grammar, spelling, terminology, tone, style, and consistency.",
              },
              {
                title: "In-Context Quality",
                text: "Buttons, menus, line breaks, text expansion, truncation, images, captions, and untranslated strings.",
              },
              {
                title: "Functional Quality",
                text: "Language selection, navigation, forms, booking steps, links, dates, currencies, notifications, and confirmations.",
              },
              {
                title: "Continuous Improvement",
                text: "Feedback tracking, issue classification, approved corrections, terminology updates, and translation-memory maintenance.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`py-7 sm:px-7 ${index % 2 === 1 ? "sm:border-l sm:border-white/[0.14]" : ""} ${
                  index > 1 ? "border-t border-white/[0.14] lg:border-t-0" : index === 1 ? "border-t border-white/[0.14] sm:border-t-0" : ""
                } ${index > 1 ? "lg:border-l" : ""}`}
              >
                <h3 className="text-[20px] font-semibold leading-7 text-white">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-8 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <TextLink href="https://www.stepes.com/translation-quality-assurance/" dark>
              Translation Quality Assurance
            </TextLink>
          </div>
        </div>
      </section>

      {/* Enterprise governance */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Enterprise Governance"
                title="Manage Global Content Across Brands, Properties, and Markets"
                text="Coordinate headquarters, regional teams, properties, departments, reviewers, and linguistic resources through one governed translation program while preserving the flexibility local markets need."
              />
              <div className="mt-8 grid gap-1">
                <TextLink href="https://www.stepes.com/enterprise-translation-management/">
                  Enterprise Translation Management
                </TextLink>
                <TextLink href="https://www.stepes.com/customer-translation-portal/">
                  Customer Translation Portal
                </TextLink>
                <TextLink href="https://www.stepes.com/translation-reporting-analytics/">
                  Translation Reporting and Analytics
                </TextLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E0E4EA] bg-[#FCFCFD] shadow-[0_16px_44px_rgba(15,23,42,0.04)]">
              <div className="border-b border-[#E0E4EA] bg-white px-7 py-6 sm:px-8">
                <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#9F1D55]">
                  Global Program View
                </p>
                <h3 className="mt-2 text-[22px] font-semibold leading-8 text-slate-950">
                  One place to coordinate multilingual work
                </h3>
              </div>
              {[
                {
                  title: "Website and Booking Releases",
                  status: "In review",
                  text: "Route market content to assigned linguists and regional stakeholders.",
                },
                {
                  title: "Guest Communications",
                  status: "Ready for approval",
                  text: "Apply approved terminology and brand-specific language resources.",
                },
                {
                  title: "Campaign and Loyalty Content",
                  status: "In translation",
                  text: "Track work across brands, markets, languages, deadlines, and reviewers.",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="grid gap-4 border-b border-[#E0E4EA] px-7 py-6 last:border-b-0 sm:grid-cols-[1fr_auto] sm:px-8"
                >
                  <div>
                    <h4 className="text-[18px] font-semibold leading-7 text-slate-950">{row.title}</h4>
                    <p className="mt-2 text-[16px] leading-7 text-slate-600">{row.text}</p>
                  </div>
                  <div className="self-start rounded-full border border-[#E2C7D3] bg-[#FDF2F7] px-3 py-1.5 text-[14px] font-semibold text-[#8A184B]">
                    {row.status}
                  </div>
                </div>
              ))}
              <div className="grid gap-px bg-[#E0E4EA] sm:grid-cols-3">
                {["Role-based reviews", "Shared language assets", "Program reporting"].map((item) => (
                  <div key={item} className="bg-white px-6 py-5 text-[16px] font-semibold text-slate-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-[#FDF2F7]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#C11D63] shadow-sm">
                <ShieldIcon />
              </div>
              <h2 className="mt-6 max-w-[470px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Secure Language Workflows for Global Content
              </h2>
            </div>
            <div>
              <p className="max-w-[760px] text-[17px] leading-8 text-slate-700">
                Travel and hospitality organizations may need to translate unpublished campaigns, commercial terms, internal procedures, customer-service communications, technology content, and other confidential business information. Stepes supports controlled access, secure transfer, confidential project handling, approved workflows, and enterprise security review according to your content and technical requirements.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Secure file transfer", "Role-based permissions", "Controlled collaboration", "Data retention management", "Account-level access controls", "Confidential project handling"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-7">
                <TextLink href="https://www.stepes.com/security-compliance/">
                  Security and Compliance
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Industry Coverage"
            title="Language Solutions Across the Travel and Hospitality Ecosystem"
            text="Support customer experiences, digital products, marketing, service operations, and global content programs across connected travel and hospitality sectors."
            align="center"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0">
            {Object.entries(organizations).map(([category, items], categoryIndex) => (
              <article
                key={category}
                className={`rounded-[28px] border border-[#E1E4EA] bg-[#FCFCFD] p-7 sm:p-8 lg:rounded-none lg:border-y lg:bg-white lg:p-10 ${
                  categoryIndex === 0
                    ? "lg:rounded-l-[28px] lg:border-l"
                    : "lg:rounded-r-[28px] lg:border-l-0 lg:border-r"
                }`}
              >
                <h3 className="text-[24px] font-semibold leading-8 text-slate-950">{category}</h3>
                <p className="mt-3 text-[16px] leading-8 text-slate-600">
                  {category === "Travel"
                    ? "Organizations that move, guide, book, inform, and connect travelers across destinations and transportation networks."
                    : "Organizations that accommodate, host, feed, serve, and support guests across properties and experiences."}
                </p>
                <div className="mt-7 divide-y divide-[#E1E4EA] border-y border-[#E1E4EA]">
                  {items.map((item) => (
                    <div key={item} className="flex min-h-[56px] items-center justify-between gap-4 py-3 text-[16px] font-semibold text-slate-800">
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#C11D63]" />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeading
              eyebrow="Enterprise Use Cases"
              title="Built for Real-World Global Content Programs"
              text="Create a localization model around your customer journeys, channels, markets, release cycles, and operating priorities."
            />
            <div className="grid border-t border-[#E0E4EA] md:grid-cols-2">
              {useCases.map((item, index) => (
                <article
                  key={item.title}
                  className={`border-b border-[#E0E4EA] py-7 md:px-7 ${
                    index % 2 === 1 ? "md:border-l" : ""
                  }`}
                >
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="rounded-[30px] border border-[#E2D5DC] bg-[#FDF2F7] p-7 sm:p-9 lg:p-11">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <div>
                <Eyebrow>Global Language Coverage</Eyebrow>
                <h2 className="mt-4 max-w-[500px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  Travel and Hospitality Translation in 100+ Languages
                </h2>
                <p className="mt-6 max-w-[520px] text-[17px] leading-8 text-slate-700">
                  Reach established and emerging markets with professional translators and reviewers who understand regional language, customer expectations, and local terminology.
                </p>
                <div className="mt-7">
                  <TextLink href="https://www.stepes.com/translation-languages/">
                    Explore Supported Languages
                  </TextLink>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#E5CED8] bg-[#E5CED8] sm:grid-cols-3">
                {[
                  {
                    title: "Regional Variants",
                    text: "European and Latin American Spanish, Brazilian and European Portuguese, Canadian and European French, and market-specific English and Arabic.",
                  },
                  {
                    title: "Complex Scripts",
                    text: "Right-to-left languages, double-byte characters, character-based writing systems, text expansion, and regional formatting requirements.",
                  },
                  {
                    title: "Market Terminology",
                    text: "Glossaries, style guides, translation memory, and dedicated linguists align language across brands, properties, channels, and markets.",
                  },
                ].map((item) => (
                  <article key={item.title} className="bg-white p-6 sm:p-7">
                    <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Localization Workflow"
            title="A Flexible Workflow for One Project or an Ongoing Program"
            text="Stepes adapts the translation, review, testing, approval, and delivery process to your content, technology, audiences, languages, timing, and quality requirements."
            align="center"
          />

          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-[#E0E4EA] bg-[#E0E4EA] md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step, index) => (
              <article key={step.title} className="bg-white p-7 sm:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7] text-[14px] font-semibold text-[#9F1D55]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-[20px] font-semibold leading-7 text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16px] leading-8 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stepes */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow="Why Stepes"
            title="A Modern Language Partner for Global Experiences"
            text="Combine translation technology, professional expertise, continuous workflows, and enterprise governance to serve travelers and guests more effectively across markets."
            align="center"
          />

          <div className="mt-12 grid border-y border-[#E0E4EA] md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className={`py-7 md:px-7 ${index % 2 === 1 ? "md:border-l" : ""} ${
                  index > 1 ? "border-t border-[#E0E4EA]" : index === 1 ? "border-t border-[#E0E4EA] md:border-t-0" : ""
                } ${
                  index > 1 && index % 3 !== 0 ? "lg:border-l" : ""
                } ${index >= 3 ? "lg:border-t" : "lg:border-t-0"}`}
              >
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAFC]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Travel &amp; Hospitality Translation FAQs"
                text="Answers to common questions about multilingual websites, apps, booking experiences, customer communications, quality, languages, and ongoing localization."
              />
              <div className="mt-7">
                <TextLink href="https://www.stepes.com/contact-us/">Talk to Our Team</TextLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E0E4EA] bg-white">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                const panelId = `travel-hospitality-faq-${index}`;
                return (
                  <div key={faq.question} className={index > 0 ? "border-t border-[#E0E4EA]" : ""}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex min-h-[72px] w-full items-center justify-between gap-5 px-6 py-5 text-left text-[17px] font-semibold leading-7 text-slate-950 transition hover:bg-[#FCFCFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C11D63] sm:px-8"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#C11D63]">
                        <Plus open={open} />
                      </span>
                    </button>
                    {open ? (
                      <div id={panelId} className="px-6 pb-6 sm:px-8 sm:pb-7">
                        <p className="max-w-[820px] text-[16px] leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-20">
          <div className="flex flex-col gap-6 border-b border-[#E0E4EA] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Related Solutions</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Continue Exploring Stepes
              </h2>
            </div>
            <p className="max-w-[520px] text-[16px] leading-8 text-slate-600">
              Connect industry expertise with the localization services, workflow technology, and governance capabilities required for your global content program.
            </p>
          </div>

          <div className="grid gap-10 pt-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Industry Solutions",
                links: [
                  ["Travel Translation Services", "https://www.stepes.com/travel-translation-services/"],
                  ["Hospitality Translation Services", "https://www.stepes.com/hospitality-translation-services/"],
                  ["Hotel Translation Services", "https://www.stepes.com/hotel-translation-services/"],
                ],
              },
              {
                title: "Localization Services",
                links: [
                  ["Website Translation Services", "https://www.stepes.com/website-translation-services/"],
                  ["App Localization Services", "https://www.stepes.com/app-localization-services/"],
                  ["Software Localization Services", "https://www.stepes.com/software-localization-services/"],
                  ["Multimedia Translation Services", "https://www.stepes.com/multimedia-translation-services/"],
                ],
              },
              {
                title: "Global Content Operations",
                links: [
                  ["Multilingual Customer Support", "https://www.stepes.com/customer-support-translation-service/"],
                  ["Translation Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
                  ["Enterprise Translation Management", "https://www.stepes.com/enterprise-translation-management/"],
                  ["Translation Quality Assurance", "https://www.stepes.com/translation-quality-assurance/"],
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{group.title}</h3>
                <div className="mt-5 divide-y divide-[#E0E4EA] border-y border-[#E0E4EA]">
                  {group.links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="flex min-h-[54px] items-center justify-between gap-4 py-3 text-[16px] font-semibold text-slate-700 transition hover:text-[#9F1D55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-2"
                    >
                      <span>{label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#C11D63]" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-10 lg:px-14">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E8CDD9] bg-[#FDF2F7] px-7 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="relative z-10 max-w-[820px]">
              <Eyebrow>Global Customer Experiences</Eyebrow>
              <h2 className="mt-4 max-w-[760px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[38px]">
                Build a Better Multilingual Travel and Guest Experience
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                Connect with travelers and guests in their preferred languages across every website, app, booking journey, destination, property, and customer-service interaction.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="stepes-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:-translate-y-0.5 hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Talk to an Expert
                  <ArrowUpRight />
                </a>
                <a
                  href="https://www.stepes.com/translation-quote/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9C4CE] bg-white px-6 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:border-[#C11D63]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Get a Translation Quote
                  <ArrowRight />
                </a>
              </div>
            </div>

            <svg
              className="pointer-events-none absolute -bottom-12 -right-16 hidden h-[300px] w-[420px] text-[#C11D63]/10 lg:block"
              viewBox="0 0 420 300"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="250" cy="150" r="116" stroke="currentColor" strokeWidth="2" />
              <circle cx="250" cy="150" r="78" stroke="currentColor" strokeWidth="2" />
              <path d="M134 150h232M250 34c38 34 60 72 60 116s-22 82-60 116M250 34c-38 34-60 72-60 116s22 82 60 116" stroke="currentColor" strokeWidth="2" />
              <path d="M75 234c60-96 152-145 275-150" stroke="currentColor" strokeWidth="2" strokeDasharray="7 10" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
