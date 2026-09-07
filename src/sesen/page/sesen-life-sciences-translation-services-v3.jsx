import React, { useState } from 'react';

const CONTACT_SALES = 'https://www.sesen.com/contact-sales/';
const GET_QUOTE = 'https://www.sesen.com/get-a-quote/';

const lifecycle = [
  {
    title: 'Clinical Development',
    text: 'Protocols, informed consent forms, investigator materials, patient content, clinical outcome assessments, study manuals, and site communications.',
  },
  {
    title: 'Regulatory Submission',
    text: 'Submission content, supporting technical documentation, health authority correspondence, country-specific materials, and controlled revisions.',
  },
  {
    title: 'Labeling & Product Information',
    text: 'Drug and device labeling, packaging, patient information, instructions, warnings, product information, and lifecycle updates.',
  },
  {
    title: 'Medical Device Documentation',
    text: 'IFUs, user manuals, technical documentation, software content, safety information, service materials, and training content.',
  },
  {
    title: 'Pharmacovigilance & Safety',
    text: 'Adverse-event documentation, safety narratives, risk-management materials, periodic safety content, and safety communications.',
  },
  {
    title: 'Medical & Scientific Communication',
    text: 'Medical affairs, publications, medical information, scientific presentations, education, training, and patient communication.',
  },
  {
    title: 'Digital Health & Software',
    text: 'Clinical software, eCOA platforms, patient portals, healthcare applications, EHR-related content, UI strings, and supporting documentation.',
  },
  {
    title: 'Commercialization & Market Access',
    text: 'Global launch materials, market access, patient engagement, websites, training, product content, and ongoing commercial updates.',
  },
];

const approach = [
  {
    title: 'Content & Requirements',
    text: 'Align the content type, target audience, languages, markets, references, timelines, and quality requirements before work begins.',
  },
  {
    title: 'Approved Language Assets',
    text: 'Apply relevant terminology, translation memory, style guidance, previous approvals, and client reference materials.',
  },
  {
    title: 'Best-Fit Translation Workflow',
    text: 'Select the right combination of professional translation, content reuse, automation, and controlled AI assistance for the engagement.',
  },
  {
    title: 'Professional Review',
    text: 'Review meaning, terminology, completeness, readability, style, audience fit, and document context with qualified language professionals.',
  },
  {
    title: 'Validation & Final Human QA',
    text: 'Apply automated checks where useful, then complete final human quality assurance before delivery.',
  },
];

const terminology = [
  {
    title: 'Multilingual Terminology',
    text: 'Develop and maintain approved terminology for products, therapies, devices, studies, scientific concepts, and organization-specific language.',
  },
  {
    title: 'Translation Memory & Approved Reuse',
    text: 'Reuse suitable previously translated content for recurring documentation, amendments, software releases, and related document families.',
  },
  {
    title: 'Style & Naming Conventions',
    text: 'Maintain guidance for tone, capitalization, abbreviations, units, product naming, audience considerations, and language preferences.',
  },
  {
    title: 'Cross-Document Consistency',
    text: 'Connect terminology across clinical, regulatory, labeling, device, software, medical, safety, and commercial content.',
  },
  {
    title: 'Reviewer Knowledge Capture',
    text: 'Feed validated client and in-country reviewer decisions back into future terminology, translation memory, and project guidance.',
  },
];

const quality = [
  {
    title: 'Qualified Professional Expertise',
    text: 'Projects are aligned with professional native-language resources according to subject matter, document type, language pair, market, and intended audience.',
  },
  {
    title: 'Controlled Review',
    text: 'Structured linguistic review can include terminology verification, consistency checks, formatting review, automated QA, and final quality assurance.',
  },
  {
    title: 'Content & Version Control',
    text: 'Translation memory, terminology resources, references, revisions, and reviewer decisions help preserve continuity across recurring updates.',
  },
  {
    title: 'Documented & Secure Delivery',
    text: 'Controlled access, AWS-hosted infrastructure, project documentation, and workflow visibility support enterprise multilingual operations.',
  },
];

const programStages = [
  {
    title: 'Individual Project',
    text: 'Specialized support for a defined translation, localization, validation, review, formatting, or multimedia requirement.',
  },
  {
    title: 'Multilingual Program',
    text: 'Coordinate languages, files, schedules, linguistic resources, quality requirements, reviewers, and delivery across markets.',
  },
  {
    title: 'Ongoing Lifecycle Support',
    text: 'Carry forward terminology, translation memory, client preferences, reviewer decisions, and previous project knowledge into recurring updates.',
  },
  {
    title: 'Enterprise Translation Program',
    text: 'Centralize program management, workflows, language assets, reporting, reviewer coordination, quality processes, and appropriate technology.',
  },
];

const sectors = [
  {
    title: 'Pharmaceuticals',
    text: 'Clinical, regulatory, labeling, pharmacovigilance, medical affairs, market access, and commercialization content for global drug programs.',
    links: [
      { label: 'Explore Pharmaceuticals', href: 'https://www.sesen.com/pharmaceuticals/' },
      { label: 'Pharmaceutical Translation Services', href: 'https://www.sesen.com/pharmaceutical-translation-services/' },
    ],
  },
  {
    title: 'Biotechnology',
    text: 'Research, advanced therapies, scientific communication, clinical development, regulatory content, and global product programs.',
    links: [{ label: 'Explore Biotechnology', href: 'https://www.sesen.com/biotechnology-translation-services/' }],
  },
  {
    title: 'Medical Devices',
    text: 'IFUs, labeling, technical documentation, software, safety content, training, and regulated product communication.',
    links: [{ label: 'Explore Medical Devices', href: 'https://www.sesen.com/medical-device-translation-services/' }],
  },
  {
    title: 'CROs & Clinical Research',
    text: 'Multilingual support for sponsors, CROs, sites, investigators, study teams, participants, and recurring clinical operations.',
    links: [{ label: 'Explore CROs & Clinical Research', href: 'https://www.sesen.com/cro-translation-services/' }],
  },
  {
    title: 'Healthcare & Digital Health',
    text: 'Patient communication, healthcare systems, portals, software, telehealth, applications, and connected-care experiences.',
    links: [
      { label: 'Explore Healthcare', href: 'https://www.sesen.com/healthcare-hospital-translation-services/' },
      { label: 'Explore Digital Health', href: 'https://www.sesen.com/ehealth-mhealth-localization-services/' },
    ],
  },
  {
    title: 'Regulatory & Public Health',
    text: 'Health authority, public health, policy, compliance-driven, and other regulated multilingual communication.',
    links: [{ label: 'Explore Regulatory & Public Health', href: 'https://www.sesen.com/regulatory-government-translation-services/' }],
  },
];

const serviceGroups = [
  {
    title: 'Clinical Trial & Study Translation',
    text: 'Support multilingual research programs from study startup through patient participation, site operations, data collection, and recurring clinical documentation.',
    items: ['Clinical Trial Translation', 'Informed Consent Forms', 'Protocols & Amendments', 'Clinical Study Documentation', 'Linguistic Validation', 'Patient Recruitment Content'],
    href: 'https://www.sesen.com/clinical-trial-translation-services/',
    link: 'Explore Clinical Trial Translation',
  },
  {
    title: 'Regulatory & Submission Translation',
    text: 'Specialized translation for controlled regulatory content, submission workflows, health authority communication, and recurring documentation.',
    items: ['Regulatory Translation', 'Submission Content', 'Health Authority Communication', 'Compliance Documentation', 'Regulatory Formatting', 'Controlled Updates'],
    href: 'https://www.sesen.com/regulatory-translation-services/',
    link: 'Explore Regulatory Translation',
  },
  {
    title: 'Labeling & Medical Device Translation',
    text: 'Support multilingual product information from regulated labeling and packaging to IFUs, technical documentation, software, and in-context review.',
    items: ['Drug Labeling & Packaging', 'Medical Device Labeling', 'IFU Translation', 'Technical Documentation', 'In-Context QA', 'Medical Device Translation'],
    href: 'https://www.sesen.com/labeling-translation-services/',
    link: 'Explore Labeling Translation',
  },
  {
    title: 'Medical, Scientific & Safety Translation',
    text: 'Translate specialized content for scientific, medical, safety, healthcare professional, and patient audiences.',
    items: ['Medical & Scientific Translation', 'Pharmacovigilance', 'Medical Affairs', 'Medical Information', 'Patient Communication', 'Scientific Publications'],
    href: 'https://www.sesen.com/medical-scientific-translation-services/',
    link: 'Explore Medical & Scientific Translation',
  },
  {
    title: 'Digital Health, Software & Multimedia',
    text: 'Create multilingual digital experiences across clinical software, applications, portals, training, video, and interactive formats.',
    items: ['Clinical & Medical Software', 'eHealth & mHealth', 'eCOA Localization', 'Website Localization', 'eLearning', 'Multimedia & Voice'],
    href: 'https://www.sesen.com/ehealth-mhealth-localization-services/',
    link: 'Explore Digital Health Localization',
  },
  {
    title: 'Global Commercial & Market Content',
    text: 'Support international launches, market access, training, education, patient engagement, digital communication, and ongoing commercial programs.',
    items: ['Life Sciences Marketing', 'Market Access', 'Global Launch Materials', 'Product Training', 'Patient Engagement', 'Commercial Content'],
    href: 'https://www.sesen.com/life-sciences-marketing/',
    link: 'Explore Life Sciences Marketing Translation',
  },
];

const solutions = [
  {
    title: 'SesenGPT & AI-Enabled Translation',
    text: 'Controlled AI-assisted workflows supported by professional life sciences linguists, terminology, translation memory, validation, and human review.',
    href: 'https://www.sesen.com/sesengpt/',
  },
  {
    title: 'AI Translation Validation',
    text: 'Review AI-translated content across source meaning, terminology, numbers, formatting, consistency, and final human approval.',
    href: 'https://www.sesen.com/ai-translation-validation/',
  },
  {
    title: 'Terminology Intelligence',
    text: 'Extract, organize, harmonize, and maintain terminology across multilingual life sciences content.',
    href: 'https://www.sesen.com/ai-terminology-intelligence/',
  },
  {
    title: 'Labeling Workspace',
    text: 'Connect multilingual labeling translation, expert review, terminology management, validation workflows, and traceability.',
    href: 'https://www.sesen.com/life-sciences-labeling-workspace/',
  },
  {
    title: 'Modular Submission & Content Reuse',
    text: 'Support structured content, recurring updates, and reusable multilingual components across regulated submission and content workflows.',
    href: 'https://www.sesen.com/modular-submission-translation-content-reuse/',
  },
  {
    title: 'Quality, Compliance & Security',
    text: 'Explore the quality systems, professional review, documentation, infrastructure, and multilingual controls supporting Sesen delivery.',
    href: 'https://www.sesen.com/quality-compliance-security/',
  },
];

const resources = [
  {
    kicker: 'Clinical & Regulatory',
    title: 'Clinical & Regulatory Knowledge',
    text: 'Practical guidance for clinical trial translation, regulatory content, labeling, patient communication, terminology, and multilingual quality.',
    href: 'https://www.sesen.com/resources/clinical-regulatory-knowledge/',
  },
  {
    kicker: 'AI & Quality',
    title: 'AI & Regulatory Insights',
    text: 'Perspectives on responsible AI-assisted translation, professional human review, validation, terminology intelligence, and multilingual governance.',
    href: 'https://www.sesen.com/resources/ai-regulatory-insights/',
  },
  {
    kicker: 'Practical Examples',
    title: 'Case Studies & Success Stories',
    text: 'Examples of multilingual clinical, regulatory, labeling, device, digital, and enterprise content programs.',
    href: 'https://www.sesen.com/resources/case-studies/',
  },
  {
    kicker: 'Strategic Guidance',
    title: 'White Papers & E-Books',
    text: 'In-depth guidance on translation strategy, AI-enabled workflows, terminology governance, quality systems, and global content operations.',
    href: 'https://www.sesen.com/resources/white-papers-ebooks/',
  },
];

const faqs = [
  {
    q: 'What are life sciences translation services?',
    a: 'Life sciences translation services provide specialized multilingual support for pharmaceutical, biotechnology, medical device, clinical research, healthcare, digital health, scientific, and related organizations. The scope can include clinical trial documentation, regulatory submissions, product labeling, IFUs, medical and scientific content, pharmacovigilance, patient communication, software, training, multimedia, market access, and commercial content.',
  },
  {
    q: 'How is life sciences translation different from general translation?',
    a: 'Life sciences translation involves specialized scientific, medical, technical, clinical, and regulatory content whose meaning can depend heavily on context. Effective workflows consider subject expertise, intended audience, terminology consistency, reference content, version history, review requirements, and the way translated content will ultimately be used.',
  },
  {
    q: 'What types of life sciences content can Sesen translate?',
    a: 'Sesen supports multilingual content across the life sciences lifecycle, including clinical trial materials, regulatory documentation, drug and medical device labeling, IFUs, technical documentation, pharmacovigilance and safety content, medical and scientific communications, patient-facing materials, healthcare content, digital health software, eCOA, training, multimedia, websites, market access, and commercial communications.',
  },
  {
    q: 'How does Sesen maintain terminology consistency across documents and languages?',
    a: 'Sesen can use multilingual glossaries, translation memory, style guides, product references, previous approved translations, client instructions, and validated reviewer feedback to establish a reusable language foundation. These resources help professional linguists apply approved terminology consistently and allow validated language decisions to inform related documents and future revisions.',
  },
  {
    q: 'Does Sesen use AI for life sciences translation?',
    a: 'Yes. Sesen can use SesenGPT and other AI-assisted technologies within controlled workflows where they add appropriate value. AI may support translation assistance, terminology extraction, consistency checking, comparison, automated QA, and workflow efficiency. The specific approach depends on the content and project requirements, while professional life sciences linguists and reviewers remain central to meaning, terminology, context, readability, and final quality decisions.',
  },
  {
    q: 'Can Sesen support ongoing updates and multilingual versions?',
    a: 'Yes. Life sciences content often evolves through amendments, labeling revisions, software releases, safety updates, market expansion, and reviewer feedback. Sesen can maintain translation memories, terminology resources, references, project instructions, and validated language decisions so recurring work builds on previous translations instead of starting over.',
  },
  {
    q: 'Can Sesen coordinate client and in-country reviewers?',
    a: 'Yes. Sesen can support structured client and in-country review workflows, including comment collection, terminology clarification, feedback reconciliation, and implementation of approved revisions. Validated reviewer preferences can also be incorporated into terminology resources, translation memory, style guidance, or future project instructions where appropriate.',
  },
  {
    q: 'Can Sesen support both individual projects and enterprise translation programs?',
    a: 'Yes. Sesen supports work ranging from individual documents and defined multilingual requirements to recurring programs spanning multiple content types, languages, markets, reviewers, and internal teams. Larger programs can centralize project management, terminology governance, translation memory, workflow planning, quality processes, reviewer coordination, reporting, and language technology.',
  },
  {
    q: 'How many languages does Sesen support?',
    a: 'Sesen provides translation and localization support across 150+ languages. Linguistic resources and workflows are matched to factors such as the language pair, target market, content type, subject matter, intended audience, and project requirements.',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M3.5 9h10M9.5 5l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m5.1 10.2 3 3 6.8-6.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MiniIcon({ type }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const shapes = {
    science: <><path d="M8 3v5l-3.3 5.6A2 2 0 0 0 6.4 16h7.2a2 2 0 0 0 1.7-2.4L12 8V3" {...common}/><path d="M6.6 11h6.8M7 3h6" {...common}/></>,
    quality: <><path d="M10 2.8 15 5v4.3c0 3.3-2 5.8-5 7.8-3-2-5-4.5-5-7.8V5l5-2.2Z" {...common}/><path d="m7.5 10 1.7 1.7 3.4-3.4" {...common}/></>,
    people: <><circle cx="10" cy="7" r="3" {...common}/><path d="M4.5 16c.6-3.1 2.5-4.8 5.5-4.8s4.9 1.7 5.5 4.8" {...common}/></>,
    globe: <><circle cx="10" cy="10" r="7" {...common}/><path d="M3 10h14M10 3c2.3 2.2 3.3 4.5 3.3 7S12.3 14.8 10 17M10 3C7.7 5.2 6.7 7.5 6.7 10s1 4.8 3.3 7" {...common}/></>,
  };
  return <svg className="slst-mini-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">{shapes[type] || shapes.science}</svg>;
}

function HeroArtwork() {
  return (
    <svg className="slst-hero-art" viewBox="0 0 620 520" role="img" aria-label="Connected multilingual life sciences content across a global workflow">
      <defs>
        <linearGradient id="slstSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8FAFF" />
          <stop offset="100%" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>
      <rect x="45" y="42" width="530" height="428" rx="34" fill="url(#slstSoft)" stroke="#DDE4F2" />
      <circle cx="310" cy="252" r="105" fill="#FFFFFF" stroke="#A8B8DF" strokeWidth="1.6" />
      <circle cx="310" cy="252" r="76" fill="#F7F9FD" stroke="#D7E0F4" />
      <path d="M235 252h150M310 177c28 24 43 49 43 75s-15 51-43 75M310 177c-28 24-43 49-43 75s15 51 43 75" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
      <path d="M253 201c17 12 36 18 57 18s40-6 57-18M253 303c17-12 36-18 57-18s40 6 57 18" fill="none" stroke="#AAB8D8" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="310" cy="252" r="11" fill="#4B6FD8" />
      <path d="M310 241v22M299 252h22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

      <path d="M205 188 142 142M415 188l63-46M205 316l-63 47M415 316l63 47" fill="none" stroke="#9CACC9" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="205" cy="188" r="5" fill="#3659BB" /><circle cx="415" cy="188" r="5" fill="#3659BB" />
      <circle cx="205" cy="316" r="5" fill="#3659BB" /><circle cx="415" cy="316" r="5" fill="#3659BB" />

      <g transform="translate(78 92)">
        <rect width="134" height="102" rx="18" fill="#FFFFFF" stroke="#CAD5EA" />
        <path d="M26 28h50M26 43h72M26 58h59" stroke="#6D7D98" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="103" cy="76" r="12" fill="#EAF0FF" stroke="#6F8BE1" />
        <path d="m98 76 4 4 7-8" fill="none" stroke="#3659BB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(408 91)">
        <rect width="134" height="102" rx="18" fill="#FFFFFF" stroke="#CAD5EA" />
        <path d="M28 67c12-24 25-36 39-36s26 12 39 36" fill="none" stroke="#6F8BE1" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="47" cy="48" r="7" fill="#EAF0FF" stroke="#3659BB" />
        <circle cx="87" cy="48" r="7" fill="#EAF0FF" stroke="#3659BB" />
        <path d="M36 77h62" stroke="#8C9BB4" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(78 326)">
        <rect width="134" height="102" rx="18" fill="#FFFFFF" stroke="#CAD5EA" />
        <path d="M31 32h72M31 48h52M31 64h65" stroke="#6D7D98" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M100 81H34" stroke="#B4C0D5" strokeWidth="1.6" strokeLinecap="round" />
      </g>

      <g transform="translate(408 326)">
        <rect width="134" height="102" rx="18" fill="#FFFFFF" stroke="#CAD5EA" />
        <rect x="28" y="24" width="78" height="54" rx="10" fill="#F7F9FD" stroke="#AAB9D5" />
        <path d="M42 38h30M42 50h50M42 62h38" stroke="#6D7D98" strokeWidth="2" strokeLinecap="round" />
        <circle cx="103" cy="27" r="9" fill="#4B6FD8" />
      </g>

      <g opacity=".9">
        <circle cx="91" cy="250" r="6" fill="#4B6FD8" />
        <circle cx="529" cy="250" r="6" fill="#4B6FD8" />
        <path d="M97 250h80M443 250h80" stroke="#A7B5CF" strokeWidth="1.5" strokeDasharray="4 5" />
      </g>
    </svg>
  );
}

function TerminologyArtwork() {
  const nodes = [
    { x: 70, y: 48, label: 'Clinical' },
    { x: 300, y: 48, label: 'Regulatory' },
    { x: 315, y: 180, label: 'Labeling' },
    { x: 300, y: 316, label: 'Digital' },
    { x: 70, y: 316, label: 'Medical' },
    { x: 22, y: 180, label: 'Safety' },
  ];
  return (
    <svg className="slst-term-art" viewBox="0 0 420 365" role="img" aria-label="Approved terminology connected across life sciences content areas">
      <circle cx="210" cy="182" r="88" fill="#F7F9FD" stroke="#D8E1F2" />
      <circle cx="210" cy="182" r="58" fill="#FFFFFF" stroke="#AEBDE0" strokeWidth="1.5" />
      <path d="M188 171h44M188 184h36M188 197h29" stroke="#536785" strokeWidth="2" strokeLinecap="round" />
      <circle cx="244" cy="155" r="11" fill="#4B6FD8" />
      <path d="m239.5 155 3.2 3.2 6.2-7" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="210" y="225" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#17264D">APPROVED LANGUAGE</text>
      {nodes.map((n, i) => {
        const cx = n.x + 26;
        const cy = n.y + 18;
        return (
          <g key={n.label}>
            <path d={`M210 182 L${cx} ${cy}`} stroke="#B4C0D8" strokeWidth="1.4" strokeDasharray="4 5" />
            <rect x={n.x} y={n.y} width="96" height="36" rx="18" fill="#FFFFFF" stroke="#C7D2E8" />
            <circle cx={n.x + 18} cy={n.y + 18} r="5" fill={i % 2 === 0 ? '#4B6FD8' : '#6F8BE1'} />
            <text x={n.x + 32} y={n.y + 22} fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#46546D">{n.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function SectionHead({ eyebrow, title, intro, align = 'center', mobileLeft = false, className = '' }) {
  return (
    <div className={`slst-section-head slst-section-head--${align} ${mobileLeft ? 'slst-mobile-left' : ''} ${className}`}>
      {eyebrow ? <div className="slst-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`slst-text-link ${dark ? 'slst-text-link--dark' : ''}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function FAQItem({ item, index, open, onToggle }) {
  const panelId = `slst-faq-panel-${index}`;
  const buttonId = `slst-faq-button-${index}`;
  return (
    <div className={`slst-faq-item ${open ? 'is-open' : ''}`}>
      <button
        id={buttonId}
        className="slst-faq-button"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="slst-faq-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="slst-faq-panel" hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function SesenLifeSciencesTranslationServicesV3() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-life-sciences-page-v3">
      <style>{`
        .sesen-life-sciences-page-v3 {
          --slst-blue: #4B6FD8;
          --slst-blue-dark: #3659BB;
          --slst-blue-deep: #253F8F;
          --slst-blue-mid: #6F8BE1;
          --slst-blue-soft: #EAF0FF;
          --slst-blue-pale: #F5F7FF;
          --slst-navy: #17264D;
          --slst-ink: #111827;
          --slst-body: #46546D;
          --slst-muted: #68758B;
          --slst-border: #DDE4F2;
          --slst-divider: #E9EEF8;
          --slst-surface: #F7F9FD;
          --slst-white: #FFFFFF;
          --slst-light-blue: #C8D6FF;
          color: var(--slst-body);
          background: var(--slst-white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
          overflow: hidden;
        }
        .sesen-life-sciences-page-v3 * { box-sizing: border-box; }
        .sesen-life-sciences-page-v3 a { color: inherit; }
        .sesen-life-sciences-page-v3 button,
        .sesen-life-sciences-page-v3 a { -webkit-tap-highlight-color: transparent; }
        .sesen-life-sciences-page-v3 a:focus-visible,
        .sesen-life-sciences-page-v3 button:focus-visible {
          outline: 3px solid rgba(75,111,216,.32);
          outline-offset: 4px;
          border-radius: 8px;
        }
        .sesen-life-sciences-page-v3 .slst-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .sesen-life-sciences-page-v3 .slst-section { padding: 96px 0; }
        .sesen-life-sciences-page-v3 .slst-section--compact { padding: 80px 0; }
        .sesen-life-sciences-page-v3 .slst-section--pale { background: var(--slst-blue-pale); }
        .sesen-life-sciences-page-v3 .slst-section--soft { background: var(--slst-surface); }
        .sesen-life-sciences-page-v3 h1,
        .sesen-life-sciences-page-v3 h2,
        .sesen-life-sciences-page-v3 h3,
        .sesen-life-sciences-page-v3 p { margin: 0; }
        .sesen-life-sciences-page-v3 h1,
        .sesen-life-sciences-page-v3 h2,
        .sesen-life-sciences-page-v3 h3 {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          color: var(--slst-navy);
          font-weight: 500;
        }
        .sesen-life-sciences-page-v3 h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }
        .sesen-life-sciences-page-v3 h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }
        .sesen-life-sciences-page-v3 h3 {
          font-size: 23px;
          line-height: 1.3;
        }
        .sesen-life-sciences-page-v3 .slst-eyebrow {
          margin-bottom: 14px;
          color: var(--slst-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .sesen-life-sciences-page-v3 .slst-section-head {
          margin-bottom: 50px;
        }
        .sesen-life-sciences-page-v3 .slst-section-head--center {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .sesen-life-sciences-page-v3 .slst-section-head--left {
          max-width: 780px;
          text-align: left;
        }
        .sesen-life-sciences-page-v3 .slst-section-head p {
          margin-top: 18px;
          max-width: 790px;
          color: var(--slst-body);
          font-size: 18px;
          line-height: 1.72;
        }
        .sesen-life-sciences-page-v3 .slst-section-head--center p { margin-left: auto; margin-right: auto; }
        .sesen-life-sciences-page-v3 .slst-btn-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .sesen-life-sciences-page-v3 .slst-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 26px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .035em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }
        .sesen-life-sciences-page-v3 .slst-btn svg { width: 17px; height: 17px; }
        .sesen-life-sciences-page-v3 .slst-btn--primary {
          background: var(--slst-blue);
          color: #fff;
        }
        .sesen-life-sciences-page-v3 .slst-btn--primary:hover { background: var(--slst-blue-dark); transform: translateY(-1px); }
        .sesen-life-sciences-page-v3 .slst-btn--secondary {
          background: #fff;
          color: var(--slst-ink);
          border-color: #CBD6EA;
        }
        .sesen-life-sciences-page-v3 .slst-btn--secondary:hover { background: var(--slst-blue-pale); border-color: #AFC0E2; transform: translateY(-1px); }
        .sesen-life-sciences-page-v3 .slst-text-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--slst-blue-dark);
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4;
        }
        .sesen-life-sciences-page-v3 .slst-text-link svg { width: 17px; height: 17px; flex: 0 0 auto; transition: transform .2s ease; }
        .sesen-life-sciences-page-v3 .slst-text-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .sesen-life-sciences-page-v3 .slst-text-link:hover svg { transform: translateX(3px); }
        .sesen-life-sciences-page-v3 .slst-text-link--dark { color: #E5ECFF; }

        /* Hero */
        .sesen-life-sciences-page-v3 .slst-hero {
          padding: 92px 0 88px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
          border-bottom: 1px solid var(--slst-divider);
        }
        .sesen-life-sciences-page-v3 .slst-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr);
          align-items: center;
          gap: 64px;
        }
        .sesen-life-sciences-page-v3 .slst-hero-copy { max-width: 680px; }
        .sesen-life-sciences-page-v3 .slst-hero-lead {
          margin-top: 25px;
          max-width: 670px;
          color: #293954;
          font-size: 19px;
          line-height: 1.72;
        }
        .sesen-life-sciences-page-v3 .slst-hero-support {
          margin-top: 14px;
          max-width: 655px;
          color: var(--slst-body);
          font-size: 16px;
          line-height: 1.7;
        }
        .sesen-life-sciences-page-v3 .slst-hero .slst-btn-row { margin-top: 30px; }
        .sesen-life-sciences-page-v3 .slst-hero-tags {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 7px 18px;
          color: var(--slst-muted);
          font-size: 13px;
          font-weight: 600;
        }
        .sesen-life-sciences-page-v3 .slst-hero-visual {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 0;
        }
        .sesen-life-sciences-page-v3 .slst-hero-art { width: min(100%, 590px); height: auto; display: block; }

        /* Trust */
        .sesen-life-sciences-page-v3 .slst-trust { background: #fff; }
        .sesen-life-sciences-page-v3 .slst-trust-inner {
          border-top: 1px solid var(--slst-border);
          border-bottom: 1px solid var(--slst-border);
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 32px;
          padding: 30px 0;
        }
        .sesen-life-sciences-page-v3 .slst-trust-item { display: grid; grid-template-columns: 36px minmax(0,1fr); gap: 13px; align-items: start; }
        .sesen-life-sciences-page-v3 .slst-mini-icon { width: 22px; height: 22px; color: var(--slst-blue-dark); margin-top: 2px; }
        .sesen-life-sciences-page-v3 .slst-trust-item strong { display: block; color: var(--slst-navy); font-size: 16px; line-height: 1.35; font-weight: 700; }
        .sesen-life-sciences-page-v3 .slst-trust-item p { margin-top: 5px; color: var(--slst-muted); font-size: 16px; line-height: 1.55; }

        /* Why */
        .sesen-life-sciences-page-v3 .slst-why-grid {
          display: grid;
          grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr);
          gap: 78px;
          align-items: start;
        }
        .sesen-life-sciences-page-v3 .slst-why-main { position: sticky; top: 28px; }
        .sesen-life-sciences-page-v3 .slst-why-main h2 { max-width: 600px; }
        .sesen-life-sciences-page-v3 .slst-why-main > p { margin-top: 20px; font-size: 18px; max-width: 630px; }
        .sesen-life-sciences-page-v3 .slst-why-callout {
          margin-top: 28px;
          border-left: 2px solid var(--slst-blue);
          padding: 4px 0 4px 22px;
          color: var(--slst-navy);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.58;
          max-width: 620px;
        }
        .sesen-life-sciences-page-v3 .slst-why-list { border-top: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-why-row {
          display: grid;
          grid-template-columns: 36px minmax(0,1fr);
          gap: 20px;
          padding: 27px 0;
          border-bottom: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-why-row-marker {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
        }
        .sesen-life-sciences-page-v3 .slst-why-row-marker::before {
          content: '';
          width: 24px;
          height: 2px;
          border-radius: 2px;
          background: var(--slst-blue);
        }
        .sesen-life-sciences-page-v3 .slst-why-row h3 { font-size: 21px; }
        .sesen-life-sciences-page-v3 .slst-why-row p { margin-top: 8px; font-size: 16px; }

        /* Lifecycle */
        .sesen-life-sciences-page-v3 .slst-lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          border-top: 1px solid var(--slst-border);
          border-left: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-lifecycle-item {
          min-height: 272px;
          padding: 30px 28px 28px;
          border-right: 1px solid var(--slst-border);
          border-bottom: 1px solid var(--slst-border);
          background: #fff;
          position: relative;
        }
        .sesen-life-sciences-page-v3 .slst-lifecycle-number { color: var(--slst-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; }
        .sesen-life-sciences-page-v3 .slst-lifecycle-item h3 { margin-top: 24px; font-size: 21px; }
        .sesen-life-sciences-page-v3 .slst-lifecycle-item p { margin-top: 10px; font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-lifecycle-item::after {
          content: '';
          width: 38px; height: 2px; background: var(--slst-blue); position: absolute; left: 28px; bottom: 28px;
        }
        .sesen-life-sciences-page-v3 .slst-language-callout {
          margin-top: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-radius: 22px;
          padding: 24px 28px;
          background: #fff;
          border: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-language-callout strong { color: var(--slst-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 21px; font-weight: 500; }
        .sesen-life-sciences-page-v3 .slst-language-callout p { margin-top: 4px; color: var(--slst-muted); font-size: 16px; }

        /* Approach */
        .sesen-life-sciences-page-v3 .slst-approach { background: var(--slst-blue-deep); color: #DCE5FF; }
        .sesen-life-sciences-page-v3 .slst-approach .slst-eyebrow { color: var(--slst-light-blue); }
        .sesen-life-sciences-page-v3 .slst-approach h2,
        .sesen-life-sciences-page-v3 .slst-approach h3 { color: #fff; }
        .sesen-life-sciences-page-v3 .slst-approach .slst-section-head p { color: #D8E1FA; }
        .sesen-life-sciences-page-v3 .slst-approach-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          gap: 0;
          position: relative;
        }
        .sesen-life-sciences-page-v3 .slst-approach-grid::before {
          content: '';
          position: absolute;
          left: 7%; right: 7%; top: 23px;
          height: 1px; background: rgba(200,214,255,.33);
        }
        .sesen-life-sciences-page-v3 .slst-approach-step { padding: 0 20px 0 0; position: relative; z-index: 1; }
        .sesen-life-sciences-page-v3 .slst-step-num {
          width: 46px; height: 46px; display: grid; place-items: center; border-radius: 50%;
          background: #fff; color: var(--slst-blue-deep); border: 5px solid var(--slst-blue-deep);
          font-size: 12px; font-weight: 700;
        }
        .sesen-life-sciences-page-v3 .slst-approach-step h3 { margin-top: 22px; font-size: 19px; }
        .sesen-life-sciences-page-v3 .slst-approach-step p { margin-top: 10px; color: #D1DCF5; font-size: 16px; line-height: 1.65; }
        .sesen-life-sciences-page-v3 .slst-approach-footer {
          margin-top: 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding-top: 30px;
          border-top: 1px solid rgba(200,214,255,.25);
        }
        .sesen-life-sciences-page-v3 .slst-approach-footer p { max-width: 760px; color: #DCE5FF; font-size: 16px; }

        /* Terminology */
        .sesen-life-sciences-page-v3 .slst-term-grid {
          display: grid;
          grid-template-columns: minmax(360px,.9fr) minmax(0,1.1fr);
          gap: 78px;
          align-items: center;
        }
        .sesen-life-sciences-page-v3 .slst-term-visual {
          border-radius: 30px;
          background: var(--slst-blue-pale);
          border: 1px solid var(--slst-border);
          padding: 34px;
          display: grid;
          place-items: center;
          min-height: 485px;
        }
        .sesen-life-sciences-page-v3 .slst-term-art { width: min(100%, 440px); height: auto; }
        .sesen-life-sciences-page-v3 .slst-term-copy > p { margin-top: 20px; font-size: 18px; max-width: 670px; }
        .sesen-life-sciences-page-v3 .slst-term-list { margin-top: 32px; border-top: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-term-row { padding: 20px 0; border-bottom: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-term-row h3 { font-size: 18px; }
        .sesen-life-sciences-page-v3 .slst-term-row p { margin-top: 5px; color: var(--slst-muted); font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-term-note { margin-top: 26px; color: var(--slst-blue-dark); font-weight: 700; }

        /* Quality */
        .sesen-life-sciences-page-v3 .slst-quality-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 0 52px;
          border-top: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-quality-row {
          padding: 26px 0 28px;
          border-bottom: 1px solid var(--slst-border);
          display: grid;
          grid-template-columns: 42px minmax(0,1fr);
          gap: 16px;
        }
        .sesen-life-sciences-page-v3 .slst-quality-icon {
          width: 38px; height: 38px; border-radius: 12px; background: var(--slst-blue-soft); color: var(--slst-blue-dark); display: grid; place-items: center;
        }
        .sesen-life-sciences-page-v3 .slst-quality-icon svg { width: 20px; height: 20px; }
        .sesen-life-sciences-page-v3 .slst-quality-row h3 { font-size: 20px; }
        .sesen-life-sciences-page-v3 .slst-quality-row p { margin-top: 7px; font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-iso-band {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          background: var(--slst-blue-pale);
          border: 1px solid var(--slst-border);
          border-radius: 26px;
          padding: 28px 32px;
        }
        .sesen-life-sciences-page-v3 .slst-iso-item { padding: 0 28px; }
        .sesen-life-sciences-page-v3 .slst-iso-item + .slst-iso-item { border-left: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-iso-item strong { display: block; color: var(--slst-navy); font-size: 18px; font-weight: 700; }
        .sesen-life-sciences-page-v3 .slst-iso-item span { display: block; margin-top: 3px; color: var(--slst-muted); font-size: 16px; }

        /* Programs */
        .sesen-life-sciences-page-v3 .slst-program-track {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 20px;
        }
        .sesen-life-sciences-page-v3 .slst-program-stage {
          position: relative;
          padding: 30px 28px;
          min-height: 282px;
          border: 1px solid var(--slst-border);
          border-radius: 24px;
          background: #fff;
        }
        .sesen-life-sciences-page-v3 .slst-program-num { color: var(--slst-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; }
        .sesen-life-sciences-page-v3 .slst-program-stage h3 { margin-top: 26px; font-size: 21px; }
        .sesen-life-sciences-page-v3 .slst-program-stage p { margin-top: 10px; font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-program-capabilities {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 28px;
          padding-top: 32px;
          border-top: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-program-capability strong { color: var(--slst-navy); font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-program-capability p { margin-top: 6px; color: var(--slst-muted); font-size: 16px; line-height: 1.65; }

        /* Sectors */
        .sesen-life-sciences-page-v3 .slst-sector-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          border-top: 1px solid var(--slst-border);
          border-left: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-sector-item {
          min-height: 258px;
          padding: 28px;
          border-right: 1px solid var(--slst-border);
          border-bottom: 1px solid var(--slst-border);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #fff;
        }
        .sesen-life-sciences-page-v3 .slst-sector-marker { width: 34px; height: 3px; border-radius: 3px; background: var(--slst-blue); }
        .sesen-life-sciences-page-v3 .slst-sector-item h3 { margin-top: 22px; font-size: 21px; }
        .sesen-life-sciences-page-v3 .slst-sector-item p { margin-top: 9px; font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-sector-links {
          margin-top: auto;
          padding-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
        }
        .sesen-life-sciences-page-v3 .slst-sector-item .slst-text-link { font-size: 14px; }
        .sesen-life-sciences-page-v3 .slst-section-action { margin-top: 32px; text-align: center; }

        /* Services */
        .sesen-life-sciences-page-v3 .slst-services-list { border-top: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-service-row {
          display: grid;
          grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr);
          gap: 64px;
          padding: 36px 0;
          border-bottom: 1px solid var(--slst-border);
        }
        .sesen-life-sciences-page-v3 .slst-service-row h3 { font-size: 24px; }
        .sesen-life-sciences-page-v3 .slst-service-row .slst-service-description { margin-top: 10px; max-width: 530px; font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-service-row .slst-text-link { margin-top: 18px; font-size: 14px; }
        .sesen-life-sciences-page-v3 .slst-service-items {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 11px 22px;
          align-content: start;
        }
        .sesen-life-sciences-page-v3 .slst-service-item { display: flex; gap: 9px; color: var(--slst-body); font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-service-item svg { width: 17px; height: 17px; flex: 0 0 auto; color: var(--slst-blue-dark); margin-top: 4px; }
        .sesen-life-sciences-page-v3 .slst-services-footer { margin-top: 32px; display: flex; justify-content: space-between; gap: 22px; align-items: center; }
        .sesen-life-sciences-page-v3 .slst-services-footer p { max-width: 720px; color: var(--slst-muted); }

        /* Solutions */
        .sesen-life-sciences-page-v3 .slst-solution-list {
          background: #fff;
          border: 1px solid var(--slst-border);
          border-radius: 28px;
          overflow: hidden;
        }
        .sesen-life-sciences-page-v3 .slst-solution-row {
          display: grid;
          grid-template-columns: minmax(220px,.65fr) minmax(0,1fr) 34px;
          align-items: center;
          gap: 34px;
          padding: 24px 28px;
          text-decoration: none;
          transition: background-color .2s ease;
        }
        .sesen-life-sciences-page-v3 .slst-solution-row + .slst-solution-row { border-top: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-solution-row:hover { background: var(--slst-blue-pale); }
        .sesen-life-sciences-page-v3 .slst-solution-row strong { color: var(--slst-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; font-weight: 500; }
        .sesen-life-sciences-page-v3 .slst-solution-row p { color: var(--slst-muted); font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-solution-arrow { width: 32px; height: 32px; border-radius: 50%; background: var(--slst-blue-soft); color: var(--slst-blue-dark); display: grid; place-items: center; }
        .sesen-life-sciences-page-v3 .slst-solution-arrow svg { width: 17px; height: 17px; }

        /* Resources */
        .sesen-life-sciences-page-v3 .slst-resource-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 18px;
        }
        .sesen-life-sciences-page-v3 .slst-resource-card {
          min-height: 305px;
          padding: 28px 25px;
          border: 1px solid var(--slst-border);
          border-radius: 22px;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .sesen-life-sciences-page-v3 .slst-resource-kicker { color: var(--slst-blue-dark); font-size: 11px; line-height: 1.35; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .sesen-life-sciences-page-v3 .slst-resource-card h3 { margin-top: 18px; font-size: 20px; }
        .sesen-life-sciences-page-v3 .slst-resource-card p { margin-top: 10px; color: var(--slst-muted); font-size: 16px; }
        .sesen-life-sciences-page-v3 .slst-resource-card .slst-text-link { margin-top: auto; padding-top: 20px; font-size: 14px; }

        /* FAQ */
        .sesen-life-sciences-page-v3 .slst-faq-wrap { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-faq-item { border-bottom: 1px solid var(--slst-border); }
        .sesen-life-sciences-page-v3 .slst-faq-button {
          width: 100%;
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 22px 0;
          border: 0;
          background: transparent;
          color: var(--slst-navy);
          text-align: left;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
          cursor: pointer;
        }
        .sesen-life-sciences-page-v3 .slst-faq-toggle {
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          border: 1px solid #C5D1E5;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--slst-blue-dark);
          font-family: Inter, sans-serif;
          font-size: 21px;
          font-weight: 400;
        }
        .sesen-life-sciences-page-v3 .slst-faq-panel { padding: 0 70px 25px 0; }
        .sesen-life-sciences-page-v3 .slst-faq-panel p { color: var(--slst-body); font-size: 16px; line-height: 1.75; }

        /* CTA */
        .sesen-life-sciences-page-v3 .slst-final { padding: 88px 0; background: linear-gradient(135deg, #253F8F 0%, #3659BB 100%); }
        .sesen-life-sciences-page-v3 .slst-final-inner {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: 64px;
          align-items: center;
        }
        .sesen-life-sciences-page-v3 .slst-final h2 { color: #fff; max-width: 700px; }
        .sesen-life-sciences-page-v3 .slst-final p { margin-top: 18px; max-width: 780px; color: #E1E8FA; font-size: 17px; }
        .sesen-life-sciences-page-v3 .slst-final .slst-btn--primary { background: var(--slst-blue); color: #fff; border-color: rgba(255,255,255,.2); }
        .sesen-life-sciences-page-v3 .slst-final .slst-btn--primary:hover { background: var(--slst-blue-dark); color: #fff; }
        .sesen-life-sciences-page-v3 .slst-final .slst-btn--secondary { background: #fff; color: var(--slst-ink); border-color: #fff; }
        .sesen-life-sciences-page-v3 .slst-final .slst-btn--secondary:hover { background: #F3F6FF; color: var(--slst-ink); border-color: #F3F6FF; }
        .sesen-life-sciences-page-v3 .slst-final-proof { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 8px 20px; color: #CFD9F5; font-size: 13px; font-weight: 600; }

        @media (max-width: 1100px) {
          .sesen-life-sciences-page-v3 .slst-shell { padding-left: 40px; padding-right: 40px; }
          .sesen-life-sciences-page-v3 .slst-hero-grid { grid-template-columns: minmax(0,1fr) minmax(350px,.82fr); gap: 38px; }
          .sesen-life-sciences-page-v3 .slst-trust-inner { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-life-sciences-page-v3 .slst-lifecycle-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-life-sciences-page-v3 .slst-approach-grid { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 32px 20px; }
          .sesen-life-sciences-page-v3 .slst-approach-grid::before { display: none; }
          .sesen-life-sciences-page-v3 .slst-program-track { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-life-sciences-page-v3 .slst-resource-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-life-sciences-page-v3 .slst-final-inner { grid-template-columns: 1fr; gap: 34px; }
        }

        @media (max-width: 820px) {
          .sesen-life-sciences-page-v3 .slst-shell { padding-left: 29px; padding-right: 29px; }
          .sesen-life-sciences-page-v3 .slst-section { padding: 78px 0; }
          .sesen-life-sciences-page-v3 .slst-section--compact { padding: 70px 0; }
          .sesen-life-sciences-page-v3 .slst-hero { padding: 76px 0 70px; }
          .sesen-life-sciences-page-v3 h1 { font-size: 44px; }
          .sesen-life-sciences-page-v3 h2 { font-size: 34px; }
          .sesen-life-sciences-page-v3 .slst-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .sesen-life-sciences-page-v3 .slst-hero-copy { max-width: 760px; }
          .sesen-life-sciences-page-v3 .slst-hero-visual { justify-content: center; }
          .sesen-life-sciences-page-v3 .slst-hero-art { width: min(100%, 560px); }
          .sesen-life-sciences-page-v3 .slst-why-grid { grid-template-columns: 1fr; gap: 44px; }
          .sesen-life-sciences-page-v3 .slst-approach-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 24px; }
          .sesen-life-sciences-page-v3 .slst-approach-footer { align-items: flex-start; flex-direction: column; }
          .sesen-life-sciences-page-v3 .slst-why-main { position: static; }
          .sesen-life-sciences-page-v3 .slst-term-grid { grid-template-columns: 1fr; gap: 42px; }
          .sesen-life-sciences-page-v3 .slst-term-copy { order: 1; }
          .sesen-life-sciences-page-v3 .slst-term-visual { order: 2; min-height: auto; }
          .sesen-life-sciences-page-v3 .slst-sector-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-life-sciences-page-v3 .slst-service-row { grid-template-columns: 1fr; gap: 26px; }
          .sesen-life-sciences-page-v3 .slst-solution-row { grid-template-columns: minmax(190px,.65fr) minmax(0,1fr) 34px; gap: 24px; }
          .sesen-life-sciences-page-v3 .slst-iso-band { padding: 25px 20px; }
          .sesen-life-sciences-page-v3 .slst-iso-item { padding: 0 18px; }
        }

        @media (max-width: 620px) {
          .sesen-life-sciences-page-v3 .slst-shell { padding-left: 20px; padding-right: 20px; }
          .sesen-life-sciences-page-v3 .slst-section { padding: 68px 0; }
          .sesen-life-sciences-page-v3 .slst-section--compact { padding: 64px 0; }
          .sesen-life-sciences-page-v3 .slst-hero { padding: 66px 0 62px; }
          .sesen-life-sciences-page-v3 h1 { font-size: 42px; line-height: 1.24; }
          .sesen-life-sciences-page-v3 h2 { font-size: 32px; line-height: 1.3; }
          .sesen-life-sciences-page-v3 h3 { font-size: 21px; }
          .sesen-life-sciences-page-v3 .slst-section-head { margin-bottom: 38px; }
          .sesen-life-sciences-page-v3 .slst-section-head--center:not(.slst-mobile-left) { text-align: center; }
          .sesen-life-sciences-page-v3 .slst-section-head--center:not(.slst-mobile-left) p { text-align: left; margin-left: 0; margin-right: 0; }
          .sesen-life-sciences-page-v3 .slst-section-head.slst-mobile-left { text-align: left; }
          .sesen-life-sciences-page-v3 .slst-section-head p { font-size: 17px; }
          .sesen-life-sciences-page-v3 .slst-why-main h2 { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-life-sciences-page-v3 .slst-term-copy > .slst-eyebrow,
          .sesen-life-sciences-page-v3 .slst-term-copy > h2 { text-align: center; }
          .sesen-life-sciences-page-v3 .slst-final h2 { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-life-sciences-page-v3 .slst-final-proof { justify-content: center; }
          .sesen-life-sciences-page-v3 .slst-hero-lead { font-size: 18px; }
          .sesen-life-sciences-page-v3 .slst-hero-support { font-size: 16px; }
          .sesen-life-sciences-page-v3 .slst-hero .slst-btn-row { display: grid; grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-hero .slst-btn { width: 100%; }
          .sesen-life-sciences-page-v3 .slst-hero-tags { gap: 8px 14px; }
          .sesen-life-sciences-page-v3 .slst-trust-inner { grid-template-columns: 1fr; gap: 24px; padding: 28px 0; }
          .sesen-life-sciences-page-v3 .slst-why-main > p { font-size: 17px; }
          .sesen-life-sciences-page-v3 .slst-why-callout { font-size: 17px; padding-left: 18px; }
          .sesen-life-sciences-page-v3 .slst-lifecycle-grid { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-lifecycle-item { min-height: 235px; }
          .sesen-life-sciences-page-v3 .slst-language-callout { align-items: flex-start; flex-direction: column; }
          .sesen-life-sciences-page-v3 .slst-approach-grid { grid-template-columns: 1fr; gap: 0; }
          .sesen-life-sciences-page-v3 .slst-approach-step { padding: 0 0 26px 62px; min-height: 148px; border-left: 1px solid rgba(200,214,255,.32); margin-left: 22px; }
          .sesen-life-sciences-page-v3 .slst-approach-step:last-child { border-left-color: transparent; padding-bottom: 0; min-height: 0; }
          .sesen-life-sciences-page-v3 .slst-step-num { position: absolute; left: -23px; top: 0; }
          .sesen-life-sciences-page-v3 .slst-approach-step h3 { margin-top: 0; }
          .sesen-life-sciences-page-v3 .slst-approach-footer { align-items: flex-start; flex-direction: column; }
          .sesen-life-sciences-page-v3 .slst-term-visual { padding: 22px 8px; border-radius: 22px; }
          .sesen-life-sciences-page-v3 .slst-quality-grid { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-iso-band { grid-template-columns: 1fr; padding: 7px 24px; }
          .sesen-life-sciences-page-v3 .slst-iso-item { padding: 20px 0; }
          .sesen-life-sciences-page-v3 .slst-iso-item + .slst-iso-item { border-left: 0; border-top: 1px solid var(--slst-border); }
          .sesen-life-sciences-page-v3 .slst-program-track { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-program-stage { min-height: auto; }
          .sesen-life-sciences-page-v3 .slst-program-capabilities { grid-template-columns: 1fr; gap: 22px; }
          .sesen-life-sciences-page-v3 .slst-sector-grid { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-sector-item { min-height: 220px; }
          .sesen-life-sciences-page-v3 .slst-sector-links { gap: 9px 16px; }
          .sesen-life-sciences-page-v3 .slst-service-items { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-services-footer { align-items: flex-start; flex-direction: column; }
          .sesen-life-sciences-page-v3 .slst-solution-row { grid-template-columns: 1fr 34px; gap: 10px 18px; padding: 22px 20px; }
          .sesen-life-sciences-page-v3 .slst-solution-row p { grid-column: 1 / -1; padding-right: 6px; }
          .sesen-life-sciences-page-v3 .slst-solution-row strong,
          .sesen-life-sciences-page-v3 .slst-text-link span,
          .sesen-life-sciences-page-v3 .slst-service-item span { overflow-wrap: anywhere; }
          .sesen-life-sciences-page-v3 .slst-solution-arrow { grid-column: 2; grid-row: 1; }
          .sesen-life-sciences-page-v3 .slst-resource-grid { grid-template-columns: 1fr; }
          .sesen-life-sciences-page-v3 .slst-resource-card { min-height: 245px; }
          .sesen-life-sciences-page-v3 .slst-faq-button { font-size: 18px; min-height: 70px; gap: 16px; }
          .sesen-life-sciences-page-v3 .slst-faq-panel { padding-right: 0; }
          .sesen-life-sciences-page-v3 .slst-final { padding: 68px 0; }
          .sesen-life-sciences-page-v3 .slst-final .slst-btn-row { display: grid; grid-template-columns: 1fr; width: 100%; }
          .sesen-life-sciences-page-v3 .slst-final .slst-btn { width: 100%; }
        }

        @media (max-width: 350px) {
          .sesen-life-sciences-page-v3 h1 { font-size: 38px; }
          .sesen-life-sciences-page-v3 h2 { font-size: 30px; }
          .sesen-life-sciences-page-v3 .slst-hero-lead { font-size: 17px; }
          .sesen-life-sciences-page-v3 .slst-why-row { grid-template-columns: 1fr; gap: 12px; }
          .sesen-life-sciences-page-v3 .slst-lifecycle-item { padding-left: 24px; padding-right: 24px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-life-sciences-page-v3 .slst-btn,
          .sesen-life-sciences-page-v3 .slst-text-link svg,
          .sesen-life-sciences-page-v3 .slst-solution-row { transition: none; }
        }
      `}</style>

      <section className="slst-hero">
        <div className="slst-shell slst-hero-grid">
          <div className="slst-hero-copy">
            <h1>Specialized Life Sciences Translation Services for Regulated Global Content</h1>
            <p className="slst-hero-lead">
              Sesen helps pharmaceutical, biotechnology, medical device, CRO, healthcare, digital health, and other life sciences organizations translate, localize, validate, and manage multilingual content across the product lifecycle and global markets.
            </p>
            <p className="slst-hero-support">
              From clinical trial documentation and regulatory submissions to labeling, IFUs, medical communications, software, training, and global launch content, Sesen combines professional life sciences linguists with terminology governance, translation memory, structured review, controlled AI assistance, and final human quality assurance.
            </p>
            <div className="slst-btn-row">
              <a className="slst-btn slst-btn--primary" href={CONTACT_SALES}>TALK WITH TEAM SESEN <ArrowIcon /></a>
              <a className="slst-btn slst-btn--secondary" href={GET_QUOTE}>REQUEST A QUOTE <ArrowIcon /></a>
            </div>
            <div className="slst-hero-tags" aria-label="Life sciences translation focus areas">
              <span>Clinical</span><span>Regulatory</span><span>Labeling</span><span>Medical Devices</span><span>Digital Health</span><span>Global Programs</span>
            </div>
          </div>
          <div className="slst-hero-visual"><HeroArtwork /></div>
        </div>
      </section>

      <section className="slst-trust slst-section--compact" aria-label="Sesen life sciences translation credentials">
        <div className="slst-shell">
          <div className="slst-trust-inner">
            <div className="slst-trust-item"><MiniIcon type="science" /><div><strong>Life Sciences Specialization</strong><p>Professional native life sciences linguists and reviewers matched to specialized content and intended use.</p></div></div>
            <div className="slst-trust-item"><MiniIcon type="quality" /><div><strong>ISO-Certified Quality</strong><p>ISO 17100, ISO 9001, and ISO 13485 certifications supporting quality-controlled multilingual delivery.</p></div></div>
            <div className="slst-trust-item"><MiniIcon type="people" /><div><strong>Professional Expertise</strong><p>Terminology, translation memory, controlled technology, structured review, and human validation.</p></div></div>
            <div className="slst-trust-item"><MiniIcon type="globe" /><div><strong>150+ Languages</strong><p>Scalable translation and localization support for multilingual programs worldwide.</p></div></div>
          </div>
        </div>
      </section>

      <section className="slst-section">
        <div className="slst-shell slst-why-grid">
          <div className="slst-why-main">
            <h2>Why Life Sciences Translation Requires Specialized Expertise</h2>
            <p>
              Life sciences translation carries scientific meaning, product terminology, regulatory context, patient information, technical instructions, and approved language across documents, systems, markets, and revisions. Clinical terminology may later appear in submissions, labeling, IFUs, patient content, software, or medical communications, so a translation decision made in one place can affect consistency throughout the broader content lifecycle.
            </p>
            <div className="slst-why-callout">
              The strongest life sciences translation programs treat multilingual content as a connected system—not as a series of unrelated translation requests.
            </div>
          </div>
          <div className="slst-why-list">
            {[
              ['Scientific and Medical Meaning', 'Specialized terminology and concepts must be understood in context and communicated accurately across languages and content types.'],
              ['Regulatory and Document Context', 'The appropriate translation depends on document type, intended use, target market, surrounding content, and the review process.'],
              ['Different Audiences', 'Health authorities, investigators, healthcare professionals, patients, caregivers, internal teams, and consumers require different levels of technicality and readability.'],
              ['Content Continuity', 'Product names, approved terminology, safety language, claims, abbreviations, reviewer decisions, and previous translations often reappear across related content.'],
            ].map(item => (
              <div className="slst-why-row" key={item[0]}>
                <div className="slst-why-row-marker" aria-hidden="true" />
                <div><h3>{item[0]}</h3><p>{item[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slst-section slst-section--soft">
        <div className="slst-shell">
          <SectionHead
            title="Multilingual Support Across the Life Sciences Content Lifecycle"
            intro="Life sciences content evolves alongside studies, therapies, products, devices, markets, and regulatory requirements. Sesen helps teams preserve terminology, context, approved language, and translation knowledge as content moves from development to global use."
            mobileLeft
          />
          <div className="slst-lifecycle-grid">
            {lifecycle.map((item, i) => (
              <article className="slst-lifecycle-item" key={item.title}>
                <div className="slst-lifecycle-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="slst-language-callout">
            <div><strong>Approved Language Should Travel With the Content</strong><p>Reusable terminology, translation memory, reviewer decisions, and client preferences can inform future work instead of being rediscovered with every project.</p></div>
            <TextLink href="https://www.sesen.com/ai-terminology-intelligence/">Explore Terminology Intelligence</TextLink>
          </div>
        </div>
      </section>

      <section className="slst-section slst-approach">
        <div className="slst-shell">
          <SectionHead
            eyebrow="Human-Led Delivery Model"
            title="Professional Expertise Supported by Smarter Translation Workflows"
            intro="No single workflow is appropriate for every life sciences document. Sesen aligns the approach with the content, intended audience, languages, markets, available reference material, terminology requirements, quality requirements, timeline, and scale."
            align="left"
            mobileLeft
          />
          <div className="slst-approach-grid">
            {approach.map((item, i) => (
              <article className="slst-approach-step" key={item.title}>
                <div className="slst-step-num">{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="slst-approach-footer">
            <p>Technology can support content reuse, terminology identification, draft assistance, comparison, consistency checks, and quality validation where appropriate. Professional human judgment remains central to meaning, terminology, readability, nuance, document context, and final quality decisions.</p>
            <TextLink href="https://www.sesen.com/ai/" dark>Explore AI-Enabled Life Sciences Translation</TextLink>
          </div>
        </div>
      </section>

      <section className="slst-section">
        <div className="slst-shell slst-term-grid">
          <div className="slst-term-visual"><TerminologyArtwork /></div>
          <div className="slst-term-copy">
            <div className="slst-eyebrow">Terminology Governance</div>
            <h2>Keep Terminology Consistent Across the Product Lifecycle</h2>
            <p>
              The same active ingredient, device component, endpoint, procedure, warning, product feature, clinical term, or approved phrase may appear in many documents over time. Sesen helps organizations develop and maintain multilingual language assets that support greater consistency across the lifecycle.
            </p>
            <div className="slst-term-list">
              {terminology.map(item => <div className="slst-term-row" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}
            </div>
            <p className="slst-term-note">Build multilingual knowledge once. Reuse it intelligently across the lifecycle.</p>
          </div>
        </div>
      </section>

      <section className="slst-section slst-section--pale">
        <div className="slst-shell">
          <SectionHead
            eyebrow="ISO-Certified Quality"
            title="Quality Built Into Regulated Multilingual Workflows"
            intro="Quality should not depend on a final proofreading step. Sesen builds quality into project requirements, linguistic resource selection, terminology, review, version management, validation, and delivery."
            mobileLeft
          />
          <div className="slst-quality-grid">
            {quality.map((item, i) => (
              <article className="slst-quality-row" key={item.title}>
                <div className="slst-quality-icon"><MiniIcon type={i === 0 ? 'people' : i === 3 ? 'quality' : 'science'} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <div className="slst-iso-band" aria-label="Sesen ISO certifications">
            <div className="slst-iso-item"><strong>ISO 17100</strong><span>Translation Services</span></div>
            <div className="slst-iso-item"><strong>ISO 9001</strong><span>Quality Management</span></div>
            <div className="slst-iso-item"><strong>ISO 13485</strong><span>Medical Devices Quality Management</span></div>
          </div>
        </div>
      </section>

      <section className="slst-section">
        <div className="slst-shell">
          <SectionHead
            title="From Individual Projects to Global Life Sciences Translation Programs"
            intro="Sesen supports both defined translation requirements and ongoing multilingual programs involving multiple languages, recurring content, reviewers, interconnected workstreams, and enterprise delivery needs."
            mobileLeft
          />
          <div className="slst-program-track">
            {programStages.map((item, i) => (
              <article className="slst-program-stage" key={item.title}>
                <div className="slst-program-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="slst-program-capabilities">
            {[
              ['Centralized Program Management', 'Coordinate languages, workflows, deadlines, content streams, and stakeholders through an accountable operating structure.'],
              ['Client & In-Country Review', 'Support structured comments, terminology clarification, feedback reconciliation, and approved reviewer decisions.'],
              ['Reusable Language Assets', 'Build terminology, translation memory, style guidance, and references that become more valuable over time.'],
              ['Scalable Delivery', 'Adapt workflows to changing languages, volumes, timelines, content types, formats, and quality requirements.'],
            ].map(item => <div className="slst-program-capability" key={item[0]}><strong>{item[0]}</strong><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="slst-section slst-section--soft">
        <div className="slst-shell">
          <SectionHead
            eyebrow="Sector Expertise"
            title="Specialized Support Across the Life Sciences Ecosystem"
            intro="Sesen focuses on life sciences translation and localization, supporting organizations whose multilingual content spans research, regulated product development, healthcare, technology, and global commercialization."
            mobileLeft
          />
          <div className="slst-sector-grid">
            {sectors.map(item => (
              <article className="slst-sector-item" key={item.title}>
                <div className="slst-sector-marker" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="slst-sector-links">
                  {item.links.map(link => <TextLink href={link.href} key={link.href}>{link.label}</TextLink>)}
                </div>
              </article>
            ))}
          </div>
          <div className="slst-section-action"><TextLink href="https://www.sesen.com/industries/">Explore All Life Sciences Sectors</TextLink></div>
        </div>
      </section>

      <section className="slst-section">
        <div className="slst-shell">
          <SectionHead
            title="Specialized Translation Services for Life Sciences Content"
            intro="Explore Sesen services by the type of content or workflow your team needs, with deeper service pages available for clinical, regulatory, labeling, medical device, scientific, safety, digital, and commercial requirements."
            align="left"
            mobileLeft
          />
          <div className="slst-services-list">
            {serviceGroups.map(group => (
              <article className="slst-service-row" key={group.title}>
                <div>
                  <h3>{group.title}</h3>
                  <p className="slst-service-description">{group.text}</p>
                  <TextLink href={group.href}>{group.link}</TextLink>
                </div>
                <div className="slst-service-items">
                  {group.items.map(item => <div className="slst-service-item" key={item}><CheckIcon /><span>{item}</span></div>)}
                </div>
              </article>
            ))}
          </div>
          <div className="slst-services-footer">
            <p>Need a different translation, localization, interpreting, multimedia, or multilingual content service? Browse the complete Sesen service directory.</p>
            <TextLink href="https://www.sesen.com/services/">Explore All Life Sciences Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="slst-section slst-section--pale">
        <div className="slst-shell">
          <SectionHead
            title="Connected Solutions for Global Multilingual Content"
            intro="Translation services are often one part of a larger multilingual content operation. Sesen connects language expertise with technology, terminology, validation, labeling workflows, and quality controls."
            mobileLeft
          />
          <div className="slst-solution-list">
            {solutions.map(item => (
              <a className="slst-solution-row" href={item.href} key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                <span className="slst-solution-arrow" aria-hidden="true"><ArrowIcon /></span>
              </a>
            ))}
          </div>
          <div className="slst-section-action"><TextLink href="https://www.sesen.com/solutions/">Explore Sesen Solutions</TextLink></div>
        </div>
      </section>

      <section className="slst-section">
        <div className="slst-shell">
          <SectionHead
            title="Life Sciences Translation Resources & Insights"
            intro="Explore practical guidance for teams responsible for clinical, regulatory, labeling, AI-enabled, terminology, quality, and multilingual content operations."
          />
          <div className="slst-resource-grid">
            {resources.map(item => (
              <article className="slst-resource-card" key={item.title}>
                <div className="slst-resource-kicker">{item.kicker}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <TextLink href={item.href}>Explore {item.title}</TextLink>
              </article>
            ))}
          </div>
          <div className="slst-section-action"><TextLink href="https://www.sesen.com/resources/">Explore All Sesen Resources</TextLink></div>
        </div>
      </section>

      <section className="slst-section slst-section--soft">
        <div className="slst-shell">
          <SectionHead
            title="Life Sciences Translation Services FAQs"
            intro="Answers to common questions about specialized life sciences translation, terminology governance, AI-assisted workflows, review, recurring updates, and global program support."
            mobileLeft
          />
          <div className="slst-faq-wrap">
            {faqs.map((item, i) => <FAQItem key={item.q} item={item} index={i} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section className="slst-final">
        <div className="slst-shell slst-final-inner">
          <div>
            <h2>Discuss Your Life Sciences Translation Program</h2>
            <p>
              Whether you are preparing a clinical study, translating a regulatory submission, updating global labeling, localizing medical device documentation, expanding a digital health platform, or building an ongoing enterprise translation program, Sesen can help establish the right multilingual workflow.
            </p>
            <div className="slst-final-proof" aria-label="Sesen program capabilities">
              <span>150+ Languages</span><span>ISO-Certified Quality</span><span>Professional Native Medical Linguists</span><span>Controlled AI-Assisted Workflows</span><span>Global Life Sciences Focus</span>
            </div>
          </div>
          <div className="slst-btn-row">
            <a className="slst-btn slst-btn--primary" href={CONTACT_SALES}>TALK WITH TEAM SESEN <ArrowIcon /></a>
            <a className="slst-btn slst-btn--secondary" href={GET_QUOTE}>REQUEST A QUOTE <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
