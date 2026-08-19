const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const CLIENT_SUPPORT_URL = "https://www.sesen.com/client-support/";
const PARTNERSHIPS_URL = "https://www.sesen.com/partnerships/";
const CAREERS_URL = "https://www.sesen.com/careers/";
const NEWSROOM_URL = "https://www.sesen.com/news-press-releases/";
const PRIVACY_URL = "https://www.sesen.com/privacy-policy/";
const LOCATIONS_URL = "https://www.sesen.com/locations/";
const LIFE_SCIENCES_URL = "https://www.sesen.com/life-sciences-translation-services/";
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=1+Post+Office+Square%2C+Boston%2C+MA+02109";

function Icon({ name, size = 24, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const icons = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    message: (
      <>
        <path d="M21 12a8.4 8.4 0 0 1-9 8 9.4 9.4 0 0 1-3.7-.8L3 21l1.7-4.6A8 8 0 1 1 21 12Z" />
        <path d="M8.5 12h.01" />
        <path d="M12 12h.01" />
        <path d="M15.5 12h.01" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M10.2 15.2c0-1.55 1.25-2.8 2.8-2.8 1.18 0 2.2.73 2.61 1.76" />
        <path d="M15.7 15.6c0 1.55-1.25 2.8-2.8 2.8-1.18 0-2.2-.73-2.61-1.76" />
        <path d="M13 11.5v7" />
        <path d="M11.2 13.4H14.8" />
      </>
    ),
    support: (
      <>
        <path d="M5.5 14v-2.25a6.5 6.5 0 0 1 13 0V14" />
        <path d="M4.5 13.75h3.25v5H6.25a1.75 1.75 0 0 1-1.75-1.75z" />
        <path d="M19.5 13.75h-3.25v5h1.5A1.75 1.75 0 0 0 19.5 17z" />
        <path d="M7.75 18.75A4.25 4.25 0 0 0 12 22h1.75" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m9 13-1 8 4-2 4 2-1-8" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 21v-5h8v5" />
        <path d="M8 8h.01" />
        <path d="M12 8h.01" />
        <path d="M16 8h.01" />
        <path d="M8 12h.01" />
        <path d="M12 12h.01" />
        <path d="M16 12h.01" />
      </>
    ),
    partnership: (
      <>
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2.8 19a4.8 4.8 0 0 1 8.4-3.2" />
        <path d="M21.2 19a4.8 4.8 0 0 0-8.4-3.2" />
        <path d="M9.5 14.5 12 17l2.5-2.5" />
        <path d="M12 17v4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),
    press: (
      <>
        <path d="M4 5h12a2 2 0 0 1 2 2v12H6a2 2 0 0 1-2-2z" />
        <path d="M18 9h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2" />
        <path d="M7 9h8" />
        <path d="M7 13h4" />
        <path d="M7 16h4" />
        <rect x="13" y="13" width="2" height="3" rx=".5" />
      </>
    ),
    language: (
      <>
        <path d="M4 5h7" />
        <path d="M7.5 3v2" />
        <path d="M5 9c1.7 2.1 4.3 3.8 7 4.6" />
        <path d="M10 5c-.7 3.5-2.4 6.1-5 8" />
        <path d="m14 19 3.5-9 3.5 9" />
        <path d="M15.4 16h4.2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2.1Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a
      className={`scu-button${secondary ? " scu-button-secondary" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`scu-editorial-link${light ? " scu-editorial-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="scu-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" fill="none">
        <defs>
          <linearGradient id="scuHeroBlue" x1="50" y1="20" x2="560" y2="490" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAF0FF" />
            <stop offset="1" stopColor="#F8FAFF" />
          </linearGradient>
          <linearGradient id="scuHeroStroke" x1="130" y1="60" x2="510" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3659BB" />
            <stop offset="1" stopColor="#6F8BE1" />
          </linearGradient>
          <filter id="scuHeroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#253F8F" floodOpacity="0.12" />
          </filter>
        </defs>

        <path
          d="M80 252c0-126 102-228 228-228s228 102 228 228-102 228-228 228S80 378 80 252Z"
          fill="url(#scuHeroBlue)"
        />
        <path d="M110 252h396" stroke="#D8E2FA" strokeWidth="1.3" />
        <path d="M308 46c58 60 87 129 87 206s-29 146-87 206" stroke="#D8E2FA" strokeWidth="1.3" />
        <path d="M308 46c-58 60-87 129-87 206s29 146 87 206" stroke="#D8E2FA" strokeWidth="1.3" />
        <ellipse cx="308" cy="252" rx="198" ry="82" stroke="#D8E2FA" strokeWidth="1.3" />

        <path d="M170 179 248 140" stroke="url(#scuHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M370 154 451 198" stroke="url(#scuHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M179 336 251 379" stroke="url(#scuHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M368 382 449 332" stroke="url(#scuHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />

        <g filter="url(#scuHeroShadow)">
          <rect x="222" y="185" width="172" height="136" rx="26" fill="white" stroke="#CAD7F4" />
          <path d="M254 225h108" stroke="#D9E2F6" strokeWidth="2" />
          <path d="M254 246h76" stroke="#D9E2F6" strokeWidth="2" />
          <path d="M254 267h91" stroke="#D9E2F6" strokeWidth="2" />
          <rect x="254" y="287" width="70" height="12" rx="6" fill="#EAF0FF" />
          <path d="M338 288h23" stroke="#4B6FD8" strokeWidth="2" />
        </g>

        <g filter="url(#scuHeroShadow)">
          <circle cx="160" cy="173" r="41" fill="white" stroke="#CAD7F4" />
          <path d="M145 177c0-9 7-16 16-16s16 7 16 16" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="160" cy="151" r="8" stroke="#3659BB" strokeWidth="2" />
          <path d="M143 188h34" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g filter="url(#scuHeroShadow)">
          <circle cx="463" cy="205" r="41" fill="white" stroke="#CAD7F4" />
          <path d="M444 195h38v27h-38z" stroke="#3659BB" strokeWidth="2" />
          <path d="m444 198 19 13 19-13" stroke="#3659BB" strokeWidth="2" />
        </g>

        <g filter="url(#scuHeroShadow)">
          <circle cx="166" cy="344" r="41" fill="white" stroke="#CAD7F4" />
          <path d="M166 322v44" stroke="#3659BB" strokeWidth="2" />
          <path d="M144 344h44" stroke="#3659BB" strokeWidth="2" />
          <path d="M151 329c10 8 20 8 30 0" stroke="#6F8BE1" strokeWidth="2" />
          <path d="M151 359c10-8 20-8 30 0" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <g filter="url(#scuHeroShadow)">
          <circle cx="462" cy="342" r="41" fill="white" stroke="#CAD7F4" />
          <path d="m451 344 8 8 16-20" stroke="#3659BB" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="462" cy="342" r="24" stroke="#6F8BE1" strokeWidth="1.7" />
        </g>

        <circle cx="520" cy="113" r="7" fill="#4B6FD8" opacity="0.72" />
        <circle cx="101" cy="386" r="5" fill="#6F8BE1" opacity="0.55" />
        <circle cx="528" cy="391" r="4" fill="#3659BB" opacity="0.45" />
      </svg>
    </div>
  );
}

function LocationsArt() {
  return (
    <div className="scu-locations-art" aria-hidden="true">
      <svg viewBox="0 0 520 330" fill="none">
        <defs>
          <linearGradient id="scuMapLine" x1="55" y1="50" x2="462" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3659BB" />
            <stop offset="1" stopColor="#86A0E9" />
          </linearGradient>
        </defs>
        <path d="M38 186c36-29 74-40 115-36 22 3 39 17 61 20 31 5 47-21 76-22 31-1 45 27 76 25 35-2 59-31 110-19" stroke="#CFDAF3" strokeWidth="1.4" strokeDasharray="4 7" />
        <path d="M59 228c45-43 88-57 131-42 42 14 62 54 111 47 38-5 59-42 102-43 28 0 48 10 73 29" stroke="#D9E2F6" strokeWidth="1.2" strokeDasharray="3 8" />
        <ellipse cx="260" cy="165" rx="190" ry="119" stroke="#CAD7F4" strokeWidth="1.4" />
        <ellipse cx="260" cy="165" rx="102" ry="119" stroke="#D7E0F5" strokeWidth="1.2" />
        <path d="M70 165h380" stroke="#D7E0F5" strokeWidth="1.2" />
        <path d="M260 46v238" stroke="#D7E0F5" strokeWidth="1.2" />
        <path d="M100 103c52 27 104 40 160 40s108-13 160-40" stroke="#D7E0F5" strokeWidth="1.2" />
        <path d="M100 227c52-27 104-40 160-40s108 13 160 40" stroke="#D7E0F5" strokeWidth="1.2" />
        <path d="M146 143c54-44 111-62 171-53 51 8 92 35 122 72" stroke="url(#scuMapLine)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M150 146 135 151l6-14" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="380" cy="114" r="6" fill="#4B6FD8" />
        <circle cx="239" cy="92" r="5" fill="#6F8BE1" />
        <circle cx="166" cy="183" r="5" fill="#6F8BE1" />
        <circle cx="322" cy="229" r="5" fill="#6F8BE1" />
        <circle cx="414" cy="205" r="5" fill="#6F8BE1" />
        <g transform="translate(363 88)">
          <path d="M17 0C7.6 0 0 7.6 0 17c0 10.7 17 26 17 26s17-15.3 17-26C34 7.6 26.4 0 17 0Z" fill="#3659BB" />
          <circle cx="17" cy="17" r="6" fill="white" />
        </g>
      </svg>
      <div className="scu-boston-chip">
        <span>Boston Headquarters</span>
        <strong>United States</strong>
      </div>
    </div>
  );
}

const routeCards = [
  {
    icon: "message",
    eyebrow: "New Programs & Consultation",
    title: "Talk With Team Sesen",
    body:
      "Planning a clinical, regulatory, labeling, medical device, safety, healthcare, digital health, or enterprise multilingual program? Discuss your requirements, workflow, languages, terminology, quality expectations, technology needs, or global content strategy with our life sciences translation team.",
    action: "Contact Sales",
    href: CONTACT_SALES_URL,
  },
  {
    icon: "file",
    eyebrow: "Defined Projects & Pricing",
    title: "Request a Quote",
    body:
      "Have a specific project ready for review? Send us your files, target languages, timeline, and project requirements through Sesen's dedicated quote workflow to receive pricing and delivery guidance.",
    action: "Request a Quote",
    href: QUOTE_URL,
  },
  {
    icon: "support",
    eyebrow: "Existing Sesen Clients",
    title: "Get Project Support",
    body:
      "Already working with Sesen? Get help with project status, delivery questions, client portal access, terminology updates, reviewer feedback, documentation, billing, or ongoing multilingual program support.",
    action: "Client Support",
    href: CLIENT_SUPPORT_URL,
  },
];

const trustItems = [
  { icon: "globe", label: "150+ Languages" },
  { icon: "award", label: "ISO 17100 · ISO 9001 · ISO 13485" },
  { icon: "users", label: "Professional Native Medical Linguists" },
  { icon: "shield", label: "AI-Enabled Workflows With Human Review" },
  { icon: "lock", label: "Secure AWS Infrastructure" },
];

const inquiryRows = [
  {
    icon: "partnership",
    title: "Strategic Partnerships",
    body:
      "Explore translation partnerships, workflow integrations, AI-enabled language operations, and global multilingual programs for life sciences organizations, CROs, technology providers, consultants, and enterprise teams.",
    action: "Explore Partnerships",
    href: PARTNERSHIPS_URL,
  },
  {
    icon: "briefcase",
    title: "Careers at Sesen",
    body:
      "Explore opportunities at the intersection of life sciences, language, technology, and global communication across linguistics, program management, localization engineering, AI, client success, and corporate functions.",
    action: "Explore Careers",
    href: CAREERS_URL,
  },
  {
    icon: "language",
    title: "Linguists & Language Professionals",
    body:
      "Experienced translator, editor, reviewer, interpreter, or other language professional with life sciences expertise? Connect with Sesen about opportunities to support medical, clinical, regulatory, scientific, technical, and healthcare content.",
    action: "vendors@sesen.com",
    href: "mailto:vendors@sesen.com",
  },
  {
    icon: "press",
    title: "Media & Press",
    body:
      "For press inquiries, interviews, speaking opportunities, company information, or other media requests, connect with the Sesen communications team or visit our newsroom.",
    action: "Visit the Sesen Newsroom",
    href: NEWSROOM_URL,
    secondaryAction: "press@sesen.com",
    secondaryHref: "mailto:press@sesen.com",
  },
];

const faqs = [
  {
    q: "Should I contact Sales or request a quote?",
    a:
      "Contact Sales if you want to discuss a new multilingual program, complex or recurring translation needs, workflow design, terminology strategy, AI-enabled translation, linguistic validation, or broader enterprise requirements. If you already have files and a defined translation project and primarily need pricing and turnaround information, use Request a Quote.",
  },
  {
    q: "I'm already a Sesen client. Who should I contact?",
    a:
      "For an active project or ongoing Sesen program, contact your project team directly or visit Client Support. Our support team can help with project status, delivery questions, client portal access, reviewer comments, terminology changes, documentation, billing, and other account or workflow needs.",
  },
  {
    q: "Can I upload translation files through this page?",
    a:
      "For project files, use Sesen's dedicated Request a Quote workflow rather than the general Contact Us form. This helps our team receive the project information needed to evaluate scope, languages, pricing, and turnaround.",
  },
  {
    q: "What types of organizations does Sesen work with?",
    a:
      "Sesen specializes in life sciences translation and supports pharmaceutical companies, biotechnology organizations, medical device manufacturers, CROs, healthcare organizations, digital health companies, and other teams managing regulated multilingual content.",
  },
  {
    q: "What types of content can I discuss with Sesen?",
    a:
      "Sesen supports multilingual content across clinical research, regulatory affairs, drug and device labeling, pharmacovigilance and safety, medical devices, healthcare, digital health, medical and scientific communication, training, and commercial life sciences programs.",
  },
  {
    q: "Does Sesen support organizations outside the United States?",
    a:
      "Yes. Sesen supports global life sciences programs through regional teams and an international network of in-country language professionals, with multilingual services spanning 150+ languages.",
  },
];

export default function SesenContactUsWireframeV12() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="scu-page">
      <style>{styles}</style>

      <section className="scu-hero" aria-labelledby="scu-page-title">
        <div className="scu-shell scu-hero-grid">
          <div className="scu-hero-copy">
            <p className="scu-eyebrow">Life Sciences Translation &amp; Support</p>
            <h1 id="scu-page-title">Contact Sesen</h1>
            <p className="scu-hero-kicker">How can we help?</p>
            <p className="scu-hero-lead">
              Connect with Sesen for life sciences translation services, enterprise multilingual programs,
              project support, partnerships, careers, media inquiries, or general company information.
            </p>
            <p className="scu-hero-body">
              Whether you are planning a global clinical, regulatory, labeling, medical device, healthcare,
              or digital health program — or simply need help finding the right Sesen team — we'll connect
              you with the right next step.
            </p>
            <div className="scu-button-row">
              <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
              <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
            </div>
            <div className="scu-hero-proof" aria-label="Sesen capabilities">
              <span><Icon name="check" size={15} strokeWidth={2} /> Life sciences focused</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> 150+ languages</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> ISO-certified processes</span>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="scu-section scu-route-section" aria-labelledby="scu-route-title">
        <div className="scu-shell">
          <header className="scu-section-head">
            <h2 id="scu-route-title">What Can We Help You With?</h2>
            <p>
              Choose the path that best matches what you need. Whether you're evaluating a new multilingual
              program, have files ready for translation, or need support with an active Sesen project, we'll
              help you reach the right team.
            </p>
          </header>

          <div className="scu-route-grid">
            {routeCards.map((item) => (
              <article className="scu-route-item" key={item.title}>
                <div className="scu-route-icon"><Icon name={item.icon} size={25} /></div>
                <p className="scu-item-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <EditorialLink href={item.href}>{item.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scu-trust-band" aria-label="Sesen enterprise capabilities">
        <div className="scu-shell scu-trust-inner">
          <div className="scu-trust-heading">
            <span>The Life Sciences Translation Company</span>
          </div>
          <div className="scu-trust-grid">
            {trustItems.map((item) => (
              <div className="scu-trust-item" key={item.label}>
                <Icon name={item.icon} size={21} strokeWidth={1.6} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scu-section scu-inquiry-section" aria-labelledby="scu-inquiry-title">
        <div className="scu-shell">
          <header className="scu-section-head scu-section-head-split">
            <div>
              <p className="scu-eyebrow">Other Inquiries</p>
              <h2 id="scu-inquiry-title">Contact the Right Sesen Team</h2>
            </div>
            <p>
              Not every conversation begins with a translation project. Sesen also welcomes inquiries from
              prospective partners, media organizations, job candidates, professional linguists, vendors,
              and others interested in our company.
            </p>
          </header>

          <div className="scu-inquiry-grid">
            {inquiryRows.map((item) => (
              <article className="scu-inquiry-item" key={item.title}>
                <div className="scu-inquiry-icon"><Icon name={item.icon} size={23} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="scu-inquiry-actions">
                    <EditorialLink href={item.href}>{item.action}</EditorialLink>
                    {item.secondaryAction && (
                      <EditorialLink href={item.secondaryHref}>{item.secondaryAction}</EditorialLink>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scu-section scu-contact-section" aria-labelledby="scu-form-title">
        <div className="scu-shell scu-contact-grid">
          <div className="scu-form-wrap">
            <p className="scu-eyebrow">General Inquiries</p>
            <h2 id="scu-form-title">Send Sesen a Message</h2>
            <p className="scu-form-intro">
              For company information or another inquiry that does not fit one of the contact paths above,
              send us a message. Team Sesen will review your request and route it to the appropriate team.
            </p>

            <form className="scu-form" onSubmit={handleSubmit}>
              <div className="scu-form-grid">
                <label>
                  <span>First Name*</span>
                  <input type="text" name="firstName" autoComplete="given-name" placeholder="First name" required />
                </label>
                <label>
                  <span>Last Name*</span>
                  <input type="text" name="lastName" autoComplete="family-name" placeholder="Last name" required />
                </label>
                <label>
                  <span>Email Address*</span>
                  <input type="email" name="email" autoComplete="email" placeholder="name@example.com" required />
                </label>
                <label>
                  <span>Company / Organization</span>
                  <input type="text" name="company" autoComplete="organization" placeholder="Company or organization" />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="Phone number" />
                </label>
                <label>
                  <span>Country / Region*</span>
                  <input type="text" name="country" autoComplete="country-name" placeholder="Country or region" required />
                </label>
                <label className="scu-form-full">
                  <span>Inquiry Type*</span>
                  <select name="inquiryType" defaultValue="" required>
                    <option value="" disabled>Select the reason you're contacting Sesen</option>
                    <option>General Company Inquiry</option>
                    <option>Partnership / Collaboration</option>
                    <option>Media / Press</option>
                    <option>Careers</option>
                    <option>Linguist / Vendor Inquiry</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="scu-form-full">
                  <span>How Can We Help?*</span>
                  <textarea name="message" rows="6" placeholder="Tell us a little about your question or request." required />
                </label>
              </div>

              <div className="scu-form-routing">
                <div>
                  <strong>Have translation files ready for pricing?</strong>
                  <span>Use our dedicated Request a Quote workflow instead of this general contact form.</span>
                </div>
                <a href={QUOTE_URL}>Request a Quote <Icon name="arrow" size={15} /></a>
              </div>

              <div className="scu-form-routing">
                <div>
                  <strong>Need help with an existing Sesen project?</strong>
                  <span>Visit Client Support for faster routing to the right project team.</span>
                </div>
                <a href={CLIENT_SUPPORT_URL}>Client Support <Icon name="arrow" size={15} /></a>
              </div>

              <div className="scu-form-bottom">
                <p>
                  By submitting this form, you acknowledge that the information you provide will be handled in
                  accordance with Sesen's <a href={PRIVACY_URL}>Privacy Policy</a>.
                </p>
                <button type="submit" className="scu-submit">
                  <span>SEND MESSAGE</span>
                  <Icon name="arrow" size={17} strokeWidth={1.9} />
                </button>
              </div>
            </form>
          </div>

          <aside className="scu-direct-card" aria-labelledby="scu-direct-title">
            <div className="scu-direct-top">
              <span className="scu-direct-icon"><Icon name="building" size={27} /></span>
              <h3 id="scu-direct-title">Other Ways to Reach Us</h3>
              <p>Prefer to contact Sesen directly? Use the option that best matches your needs.</p>
            </div>

            <div className="scu-direct-list">
              <a href={CONTACT_SALES_URL}>
                <span><strong>Sales & New Programs</strong><small>Talk with Team Sesen</small></span>
                <Icon name="arrow" size={17} />
              </a>
              <a href={QUOTE_URL}>
                <span><strong>Project Quotes</strong><small>Files, languages, pricing & delivery</small></span>
                <Icon name="arrow" size={17} />
              </a>
              <a href={CLIENT_SUPPORT_URL}>
                <span><strong>Client Support</strong><small>Active projects & ongoing programs</small></span>
                <Icon name="arrow" size={17} />
              </a>
            </div>

            <div className="scu-direct-contact">
              <div><Icon name="mail" size={19} /><a href="mailto:info@sesen.com">info@sesen.com</a></div>
              <div><Icon name="phone" size={19} /><a href="tel:+16172638950">+1 617 263 8950</a></div>
              <div><Icon name="mail" size={19} /><a href="mailto:support@sesen.com">support@sesen.com</a></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="scu-section scu-location-section" aria-labelledby="scu-location-title">
        <div className="scu-shell scu-location-grid">
          <div className="scu-location-copy">
            <p className="scu-eyebrow">Sesen Headquarters</p>
            <h2 id="scu-location-title">Boston, Massachusetts</h2>
            <p className="scu-location-lead">
              Boston serves as Sesen's headquarters and supports life sciences project management,
              regulatory translation, multilingual production, and quality assurance operations.
            </p>

            <address className="scu-address">
              <strong>Sesen</strong>
              <span>1 Post Office Square</span>
              <span>23rd Floor</span>
              <span>Boston, MA 02109</span>
              <span>United States</span>
            </address>

            <div className="scu-location-contact">
              <a href="tel:+16172638950"><Icon name="phone" size={18} /> +1 617 263 8950</a>
              <a href="mailto:info@sesen.com"><Icon name="mail" size={18} /> info@sesen.com</a>
            </div>
            <div className="scu-location-action">
              <EditorialLink href={DIRECTIONS_URL}>Get Directions</EditorialLink>
            </div>
          </div>

          <div className="scu-location-visual">
            <LocationsArt />
          </div>
        </div>

        <div className="scu-shell scu-global-row">
          <div>
            <p className="scu-eyebrow">Global Presence</p>
            <h2>Life Sciences Translation Support Around the World</h2>
          </div>
          <div>
            <p>
              Sesen supports life sciences organizations across North America, Europe, Asia-Pacific,
              Latin America, and other global markets through regional teams and a worldwide network of
              in-country language professionals. Our operating model supports multilingual clinical trials,
              regulatory submissions, labeling programs, medical device documentation, product launches,
              healthcare communication, and other international life sciences content across languages,
              markets, and time zones.
            </p>
            <EditorialLink href={LOCATIONS_URL}>Explore Our Global Locations</EditorialLink>
          </div>
        </div>
      </section>

      <section className="scu-section scu-faq-section" aria-labelledby="scu-faq-title">
        <div className="scu-shell scu-faq-grid">
          <div className="scu-faq-intro">
            <p className="scu-eyebrow">Frequently Asked Questions</p>
            <h2 id="scu-faq-title">Finding the Right Way to Connect</h2>
            <p>
              A few quick answers can help you choose the best path for a new project, an active Sesen
              program, or a general company inquiry.
            </p>
            <EditorialLink href={LIFE_SCIENCES_URL}>Explore Life Sciences Translation Services</EditorialLink>
          </div>

          <div className="scu-faq-list">
            {faqs.map((item, index) => (
              <details className="scu-faq-item" key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="scu-faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="scu-faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="scu-final-cta" aria-labelledby="scu-final-title">
        <div className="scu-shell scu-final-grid">
          <div>
            <h2 id="scu-final-title">Ready to Discuss Your Translation Needs?</h2>
            <p>
              Whether you're preparing a specific life sciences translation project or building an ongoing
              global multilingual program, Team Sesen can help you determine the right next step.
            </p>
          </div>
          <div className="scu-final-actions">
            <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
            <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .scu-page {
    --scu-brand: #4B6FD8;
    --scu-brand-dark: #3659BB;
    --scu-brand-deep: #253F8F;
    --scu-brand-mid: #6F8BE1;
    --scu-brand-soft: #EAF0FF;
    --scu-brand-pale: #F5F7FF;
    --scu-navy: #17264D;
    --scu-ink: #111827;
    --scu-slate: #46546D;
    --scu-muted: #68758B;
    --scu-line: #DDE4F2;
    --scu-line-soft: #E9EEF8;
    --scu-white: #FFFFFF;
    --scu-soft: #F7F9FD;
    --scu-shadow: 0 22px 60px rgba(31, 53, 102, 0.08);
    --scu-radius-lg: 28px;
    --scu-radius-md: 20px;
    width: 100%;
    overflow-x: clip;
    background: var(--scu-white);
    color: var(--scu-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .scu-page, .scu-page * { box-sizing: border-box; }
  .scu-page * { min-width: 0; }

  .scu-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .scu-page h1, .scu-page h2, .scu-page h3, .scu-page p { margin-top: 0; }
  .scu-page h1,
  .scu-page h2,
  .scu-page h3 {
    color: var(--scu-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-stretch: 100%;
    font-style: normal;
  }
  .scu-page h1 {
    margin-bottom: 14px;
    font-size: 48px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }
  .scu-page h2 {
    margin-bottom: 22px;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: normal;
  }
  .scu-page h3 {
    margin-bottom: 12px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: normal;
  }
  .scu-page p { color: var(--scu-slate); font-size: 16px; line-height: 1.72; }
  .scu-page button, .scu-page input, .scu-page select, .scu-page textarea { font: inherit; }

  .scu-page a:focus-visible,
  .scu-page button:focus-visible,
  .scu-page input:focus-visible,
  .scu-page select:focus-visible,
  .scu-page textarea:focus-visible,
  .scu-page summary:focus-visible {
    outline: 3px solid rgba(75,111,216,.32);
    outline-offset: 3px;
  }

  .scu-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .scu-section { padding: 96px 0; }

  .scu-eyebrow,
  .scu-item-eyebrow {
    margin-bottom: 16px !important;
    color: var(--scu-brand-dark) !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase;
  }



  .scu-hero {
    position: relative;
    padding: 84px 0 94px;
    background:
      radial-gradient(circle at 88% 10%, rgba(75,111,216,.11), transparent 29%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%);
  }

  .scu-hero::after {
    content: "";
    position: absolute;
    right: 0;
    top: 9%;
    width: 23%;
    height: 58%;
    opacity: .4;
    background-image: radial-gradient(circle, rgba(75,111,216,.18) 1px, transparent 1.25px);
    background-size: 14px 14px;
    mask-image: linear-gradient(110deg, transparent, #000 44%, transparent 95%);
    pointer-events: none;
  }

  .scu-hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(400px, .96fr); gap: 68px; align-items: center; }
  .scu-hero-copy { position: relative; z-index: 2; max-width: 710px; }
  .scu-hero-kicker { margin: 0 0 20px !important; color: var(--scu-brand-dark) !important; font-size: 24px !important; font-weight: 600; line-height: 1.25 !important; letter-spacing: -.02em; }
  .scu-hero-lead { max-width: 670px; margin-bottom: 17px !important; color: #293954 !important; font-size: 20px !important; line-height: 1.58 !important; }
  .scu-hero-body { max-width: 690px; margin-bottom: 30px !important; }
  .scu-button-row { display: flex; flex-wrap: wrap; gap: 12px; }

  .scu-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 0 22px;
    border: 1px solid var(--scu-brand);
    border-radius: 999px;
    color: #FFFFFF !important;
    background: var(--scu-brand);
    box-shadow: 0 10px 24px rgba(75,111,216,.16);
    transition: background .18s ease, border-color .18s ease, transform .18s ease, box-shadow .18s ease;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
  }

  .scu-button:hover { background: var(--scu-brand-dark); border-color: var(--scu-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.20); }
  .scu-button-secondary { color: var(--scu-ink) !important; background: white; border-color: #C9D5EF; box-shadow: none; }
  .scu-button-secondary:hover { background: var(--scu-brand-soft); color: var(--scu-ink) !important; border-color: #B7C6E8; box-shadow: none; }
  .scu-button svg { color: currentColor; transition: transform .2s ease; }
  .scu-button:hover svg, .scu-editorial-link:hover svg, .scu-form-routing a:hover svg { transform: translateX(3px); }

  .scu-hero-proof { display: flex; flex-wrap: wrap; gap: 12px 22px; margin-top: 26px; color: #46546D; font-size: 16px; font-weight: 600; }
  .scu-hero-proof span { display: inline-flex; align-items: center; gap: 7px; }
  .scu-hero-proof svg { color: var(--scu-brand); }
  .scu-hero-art { position: relative; z-index: 1; width: 100%; max-width: 560px; justify-self: end; }
  .scu-hero-art svg { display: block; width: 100%; height: auto; }

  .scu-section-head { max-width: 820px; margin-bottom: 54px; }
  .scu-section-head > p:last-child { margin-bottom: 0; font-size: 18px; }
  .scu-route-section { background: var(--scu-white); }
  .scu-route-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 36px; }
  .scu-route-item { position: relative; min-width: 0; display: flex; flex-direction: column; padding: 30px 0 4px; border-top: 1px solid #CFD8EA; }
  .scu-route-item::before { content: ""; position: absolute; top: -1px; left: 0; width: 34px; height: 2px; background: var(--scu-brand); }
  .scu-route-icon, .scu-inquiry-icon { display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; margin-bottom: 22px; color: var(--scu-brand-dark); border-radius: 13px; background: var(--scu-brand-soft); }
  .scu-route-item h3 { color: var(--scu-navy); font-size: 25px; }
  .scu-route-item > p:not(.scu-item-eyebrow) { flex: 1 1 auto; }
  .scu-route-item > .scu-editorial-link { margin-top: 8px; }

  .scu-editorial-link { display: inline-flex; align-items: center; gap: 9px; width: fit-content; color: var(--scu-brand-dark) !important; font-size: 14px; font-weight: 700; }
  .scu-editorial-link svg { transition: transform .2s ease; }
  .scu-editorial-link-light { color: white !important; }

  .scu-trust-band { background: #FFFFFF; border-top: 1px solid var(--scu-line); border-bottom: 1px solid var(--scu-line); }
  .scu-trust-inner { display: grid; grid-template-columns: 245px minmax(0, 1fr); gap: 42px; align-items: center; padding-block: 24px; }
  .scu-trust-heading { display: flex; align-items: center; color: var(--scu-navy); font-size: 16px; font-weight: 700; line-height: 1.4; }
  .scu-trust-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; align-items: start; }
  .scu-trust-item { display: flex; align-items: flex-start; justify-content: flex-start; gap: 9px; min-height: 0; padding: 0; color: #34435F; font-size: 16px; font-weight: 600; line-height: 1.48; text-align: left; }
  .scu-trust-item svg { color: var(--scu-brand-dark); flex: 0 0 auto; margin-top: 1px; }

  .scu-inquiry-section { background: var(--scu-soft); }
  .scu-section-head-split { max-width: none; display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 80px; align-items: end; }
  .scu-section-head-split > p { margin-bottom: 4px; font-size: 17px; }
  .scu-inquiry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 72px; }
  .scu-inquiry-item { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 30px 0 32px; border-top: 1px solid #D8DFEB; }
  .scu-inquiry-icon { width: 42px; height: 42px; margin: 1px 0 0; background: white; border: 1px solid #DCE4F2; }
  .scu-inquiry-item h3 { color: var(--scu-navy); font-size: 21px; }
  .scu-inquiry-item p { margin-bottom: 14px; }
  .scu-inquiry-actions { display: flex; flex-wrap: wrap; gap: 10px 22px; align-items: center; }

  .scu-contact-section { background: linear-gradient(145deg, #F3F6FD 0%, #EEF3FF 100%); }
  .scu-contact-grid { display: grid; grid-template-columns: minmax(0,1.28fr) minmax(330px,.72fr); gap: 46px; align-items: start; }
  .scu-form-wrap { padding: 2px 0; }
  .scu-form-intro { max-width: 730px; margin-bottom: 34px !important; font-size: 17px !important; }
  .scu-form { padding: 34px; border: 1px solid #D9E2F3; border-radius: var(--scu-radius-lg); background: white; box-shadow: var(--scu-shadow); }
  .scu-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
  .scu-form label { display: grid; gap: 8px; color: #2D3C58; font-size: 14px; font-weight: 600; }
  .scu-form-full { grid-column: 1 / -1; }
  .scu-form input, .scu-form select, .scu-form textarea {
    width: 100%;
    border: 1px solid #CFD8E8;
    border-radius: 11px;
    background: #FFFFFF;
    color: var(--scu-ink);
    outline: none;
    font-size: 16px;
    font-weight: 400;
    transition: border-color .15s ease, box-shadow .15s ease;
  }
  .scu-form input, .scu-form select { min-height: 48px; padding: 0 14px; }
  .scu-form textarea { resize: vertical; min-height: 145px; padding: 13px 14px; }
  .scu-form input:focus, .scu-form select:focus, .scu-form textarea:focus { border-color: var(--scu-brand); box-shadow: 0 0 0 3px rgba(75,111,216,.11); }
  .scu-form input::placeholder, .scu-form textarea::placeholder { color: #9AA5B7; }
  .scu-form-routing { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; margin-top: 20px; padding: 18px 0 0; border-top: 1px solid var(--scu-line-soft); }
  .scu-form-routing strong { display: block; margin-bottom: 4px; color: var(--scu-navy); font-size: 16px; font-weight: 600; line-height: 1.45; }
  .scu-form-routing span { color: #5B6880; font-size: 16px; line-height: 1.58; }
  .scu-form-routing a { display: inline-flex; align-items: center; gap: 7px; color: var(--scu-brand-dark); font-size: 14px; font-weight: 700; white-space: nowrap; }
  .scu-form-bottom { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 28px; align-items: end; margin-top: 25px; padding-top: 22px; border-top: 1px solid var(--scu-line-soft); }
  .scu-form-bottom p { margin-bottom: 0; color: #66738B; font-size: 13px; line-height: 1.55; }
  .scu-form-bottom p a { color: var(--scu-brand-dark); text-decoration: underline; text-underline-offset: 2px; }
  .scu-submit { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 0 22px; border: 0; border-radius: 999px; color: #FFFFFF; background: var(--scu-brand); cursor: pointer; font-size: 13px; font-weight: 700; letter-spacing: .035em; text-transform: uppercase; box-shadow: 0 8px 20px rgba(75,111,216,.18); transition: background .18s ease, box-shadow .18s ease; }
  .scu-submit:hover { color: #FFFFFF; background: var(--scu-brand-dark); box-shadow: 0 10px 24px rgba(54,89,187,.22); }
  .scu-submit svg { color: #FFFFFF; }

  .scu-direct-card { overflow: hidden; border-radius: var(--scu-radius-lg); color: white; background: radial-gradient(circle at 82% 10%, rgba(255,255,255,.13), transparent 25%), linear-gradient(145deg, #17264D 0%, #253F8F 58%, #3659BB 100%); box-shadow: 0 24px 62px rgba(23,38,77,.18); }
  .scu-direct-top { padding: 34px 32px 30px; }
  .scu-direct-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; margin-bottom: 26px; border-radius: 14px; color: white; background: rgba(255,255,255,.11); border: 1px solid rgba(255,255,255,.18); }
  .scu-direct-card h3 { color: white; font-size: 30px; }
  .scu-direct-card p { color: #E4E9F8; }
  .scu-direct-list { border-top: 1px solid rgba(255,255,255,.16); }
  .scu-direct-list > a { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 14px; align-items: center; padding: 20px 32px; border-bottom: 1px solid rgba(255,255,255,.14); }
  .scu-direct-list strong, .scu-direct-list small { display: block; }
  .scu-direct-list strong { margin-bottom: 3px; font-size: 15px; font-weight: 600; }
  .scu-direct-list small { color: #D4DDF2; font-size: 13px; line-height: 1.45; }
  .scu-direct-list svg { color: #CAD8FF; }
  .scu-direct-contact { display: grid; gap: 13px; padding: 27px 32px 32px; }
  .scu-direct-contact div { display: flex; align-items: center; gap: 11px; color: #F0F3FC; font-size: 14px; }
  .scu-direct-contact svg { color: #AFC1F2; }

  .scu-location-section { background: white; }
  .scu-location-grid { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 72px; align-items: center; }
  .scu-location-copy { max-width: 500px; }
  .scu-location-lead { color: #3E4D67 !important; font-size: 17px !important; }
  .scu-address { display: grid; gap: 3px; margin: 28px 0 24px; padding-left: 18px; border-left: 2px solid var(--scu-brand); color: #41506B; font-style: normal; font-size: 15px; line-height: 1.6; }
  .scu-address strong { color: var(--scu-navy); font-size: 17px; }
  .scu-location-contact { display: flex; flex-wrap: wrap; gap: 10px 23px; }
  .scu-location-contact a { display: inline-flex; align-items: center; gap: 8px; color: var(--scu-brand-dark); font-size: 13px; font-weight: 650; }
  .scu-location-action { margin-top: 18px; }
  .scu-location-visual { min-height: 390px; display: grid; place-items: center; border: 1px solid #DCE5F4; border-radius: 28px; background: linear-gradient(145deg, #F8FAFF, #F1F5FD); overflow: hidden; }
  .scu-locations-art { position: relative; width: 100%; max-width: 620px; padding: 24px; }
  .scu-locations-art svg { display: block; width: 100%; height: auto; }
  .scu-boston-chip { position: absolute; right: 28px; bottom: 23px; display: grid; gap: 1px; min-width: 165px; padding: 12px 14px; border: 1px solid #D9E2F5; border-radius: 12px; background: rgba(255,255,255,.94); box-shadow: 0 12px 30px rgba(37,63,143,.09); }
  .scu-boston-chip span { color: var(--scu-brand-dark); font-size: 11px; font-weight: 700; }
  .scu-boston-chip strong { color: var(--scu-navy); font-size: 13px; }

  .scu-global-row { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 82px; align-items: start; margin-top: 78px; padding-top: 54px; border-top: 1px solid var(--scu-line); }
  .scu-global-row h2 { max-width: 520px; font-size: 34px; }
  .scu-global-row > div:last-child > p { margin-bottom: 17px; font-size: 17px; }

  .scu-faq-section { background: var(--scu-soft); }
  .scu-faq-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 78px; align-items: start; }
  .scu-faq-intro { position: sticky; top: 28px; max-width: 420px; }
  .scu-faq-intro > p:not(.scu-eyebrow) { margin-bottom: 24px; font-size: 17px; }
  .scu-faq-list { border-top: 1px solid #CCD6E8; }
  .scu-faq-item { border-bottom: 1px solid #CCD6E8; }
  .scu-faq-item summary { list-style: none; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; min-height: 80px; padding: 22px 0; cursor: pointer; color: var(--scu-navy); font-size: 18px; font-weight: 650; line-height: 1.4; }
  .scu-faq-item summary::-webkit-details-marker { display: none; }
  .scu-faq-plus { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--scu-brand-dark); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
  .scu-faq-item[open] .scu-faq-plus { transform: rotate(45deg); }
  .scu-faq-answer { padding: 0 46px 26px 0; }
  .scu-faq-answer p { margin-bottom: 0; }

  .scu-final-cta { position: relative; overflow: hidden; padding: 82px 0; color: white; background: radial-gradient(circle at 78% 22%, rgba(255,255,255,.12), transparent 23%), linear-gradient(108deg, #17264D 0%, #253F8F 58%, #2E4F9D 100%); }
  .scu-final-cta::after { content: ""; position: absolute; right: 0; top: 0; width: 32%; height: 100%; opacity: .42; background-image: radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1.2px); background-size: 13px 13px; mask-image: linear-gradient(90deg, transparent, #000); }
  .scu-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.2fr) auto; gap: 60px; align-items: center; }
  .scu-final-cta h2 { max-width: 780px; margin-bottom: 17px; color: white; }
  .scu-final-cta p { max-width: 790px; margin-bottom: 0; color: #E7ECFA; font-size: 17px; }
  .scu-final-actions { display: grid; gap: 12px; min-width: 242px; }
  .scu-final-actions .scu-button { width: 100%; }


  @media (max-width: 1120px) {
    .scu-shell { padding-inline: 40px; }
    .scu-hero-grid { grid-template-columns: minmax(0,1.05fr) minmax(330px,.95fr); gap: 38px; }
    .scu-trust-inner { grid-template-columns: 200px minmax(0,1fr); gap: 28px; }
    .scu-trust-grid { gap: 18px; }
    .scu-contact-grid { grid-template-columns: minmax(0,1.12fr) minmax(300px,.88fr); gap: 30px; }
  }

  @media (max-width: 900px) {
    .scu-section { padding: 80px 0; }
    .scu-shell { padding-inline: 30px; }
    .scu-hero { padding: 70px 0 78px; }
    .scu-hero-grid { grid-template-columns: 1fr; gap: 38px; }
    .scu-hero-copy { max-width: 760px; }
    .scu-hero-art { max-width: 520px; justify-self: center; }
    .scu-route-grid { grid-template-columns: 1fr; gap: 0; }
    .scu-route-item { display: grid; grid-template-columns: 50px minmax(0,1fr); column-gap: 18px; }
    .scu-route-icon { grid-row: 1 / span 4; }
    .scu-route-item > p:not(.scu-item-eyebrow) { flex: initial; }
    .scu-route-item .scu-item-eyebrow, .scu-route-item h3, .scu-route-item > p, .scu-route-item .scu-editorial-link { grid-column: 2; }
    .scu-trust-inner { grid-template-columns: 1fr; gap: 20px; padding-block: 24px; }
    .scu-trust-heading { padding: 0; }
    .scu-trust-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 28px; }
    .scu-trust-item { justify-content: flex-start; }
    .scu-section-head-split { grid-template-columns: 1fr; gap: 10px; }
    .scu-inquiry-grid { grid-template-columns: 1fr; }
    .scu-contact-grid { grid-template-columns: 1fr; }
    .scu-direct-card { max-width: none; }
    .scu-location-grid { grid-template-columns: 1fr; gap: 44px; }
    .scu-location-copy { max-width: 700px; }
    .scu-global-row { grid-template-columns: 1fr; gap: 16px; }
    .scu-faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .scu-faq-intro { position: static; max-width: 680px; }
    .scu-final-grid { grid-template-columns: 1fr; gap: 30px; }
    .scu-final-actions { grid-template-columns: repeat(2, minmax(0,1fr)); min-width: 0; max-width: 520px; }
  }

  @media (max-width: 640px) {
    .scu-shell { padding-inline: 20px; }
    .scu-section { padding: 66px 0; }
    .scu-hero { padding: 56px 0 62px; }
    .scu-page h1 { font-size: 42px; }
    .scu-page h2 { font-size: 32px; }
    .scu-hero-kicker { font-size: 21px !important; }
    .scu-hero-lead { font-size: 18px !important; }
    .scu-button-row { display: grid; grid-template-columns: 1fr; }
    .scu-button { width: 100%; }
    .scu-hero-proof { display: grid; gap: 8px; }
    .scu-hero-art { margin-inline: -2px; }
    .scu-route-item { grid-template-columns: 44px minmax(0,1fr); column-gap: 14px; padding-top: 25px; }
    .scu-route-icon { width: 40px; height: 40px; border-radius: 11px; }
    .scu-route-item h3 { font-size: 23px; }
    .scu-trust-grid { grid-template-columns: 1fr; gap: 14px; }
    .scu-trust-item { min-height: 0; }
    .scu-inquiry-item { grid-template-columns: 42px minmax(0,1fr); gap: 13px; }
    .scu-inquiry-icon { width: 38px; height: 38px; }
    .scu-form { padding: 22px 18px; border-radius: 20px; }
    .scu-form-grid { grid-template-columns: 1fr; gap: 17px; }
    .scu-form-full { grid-column: auto; }
    .scu-form-routing, .scu-form-bottom { grid-template-columns: 1fr; gap: 11px; }
    .scu-form-routing a { white-space: normal; }
    .scu-submit { width: 100%; }
    .scu-direct-top, .scu-direct-list > a, .scu-direct-contact { padding-left: 23px; padding-right: 23px; }
    .scu-location-visual { min-height: 300px; border-radius: 22px; }
    .scu-locations-art { padding: 10px; }
    .scu-boston-chip { right: 14px; bottom: 12px; min-width: 145px; padding: 9px 11px; }
    .scu-global-row { margin-top: 56px; padding-top: 42px; }
    .scu-global-row h2 { font-size: 30px; }
    .scu-faq-item summary { min-height: 72px; font-size: 16px; }
    .scu-faq-answer { padding-right: 0; }
    .scu-final-cta { padding: 64px 0; }
    .scu-final-actions { grid-template-columns: 1fr; }
  }

  @media (max-width: 360px) {
    .scu-page h1 { font-size: 38px; }
    .scu-page h2 { font-size: 30px; }
    .scu-hero { padding-top: 52px; }
    .scu-route-item { grid-template-columns: 40px minmax(0,1fr); column-gap: 12px; }
    .scu-route-icon { width: 38px; height: 38px; }
    .scu-inquiry-item { grid-template-columns: 38px minmax(0,1fr); gap: 12px; }
    .scu-inquiry-icon { width: 36px; height: 36px; }
    .scu-direct-top, .scu-direct-list > a, .scu-direct-contact { padding-left: 20px; padding-right: 20px; }
    .scu-boston-chip { position: static; width: fit-content; margin: 4px 10px 10px auto; }
  }

  @media (prefers-reduced-motion: reduce) {
    .scu-page *, .scu-page *::before, .scu-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
