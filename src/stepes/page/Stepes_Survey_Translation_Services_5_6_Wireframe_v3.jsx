import React, { useState } from 'react';

const STEPS = {
  quote: 'https://www.stepes.com/quote/',
  contact: 'https://www.stepes.com/contact-us/',
  marketing: 'https://www.stepes.com/marketing-translation-services/',
  api: 'https://www.stepes.com/translation-api/',
  enterprise: 'https://www.stepes.com/enterprise-translation-management/',
  terminology: 'https://www.stepes.com/terminology-management/',
  memory: 'https://www.stepes.com/translation-memory/',
  qa: 'https://www.stepes.com/translation-quality-assurance/',
  linguisticValidation: 'https://www.stepes.com/linguistic-validation/',
  aiHuman: 'https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/',
};

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z"/></>,
    spark: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z"/><path d="m18.5 13 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"/><path d="m5.5 14 .8 2.7 2.7.8-2.7.8L5.5 21l-.8-2.7-2.7-.8 2.7-.8.8-2.7Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    repeat: <><path d="M17 2.5 21 6l-4 3.5"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 21.5 3 18l4-3.5"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></>,
    scale: <><path d="M12 3v18"/><path d="M5 7h14"/><path d="m7 7-3 6h6L7 7Z"/><path d="m17 7-3 6h6l-3-6Z"/><path d="M8 21h8"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    chart: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></>,
    cursor: <><path d="m4 3 15 8-7 2-2 7L4 3Z"/><path d="m13 13 5 5"/></>,
    megaphone: <><path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2Z"/><path d="M12 8c4 0 6-2 8-4v16c-2-2-4-4-8-4"/><path d="m7 15 1 5h3"/></>,
    network: <><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v4M7 17l3-4M17 17l-3-4M10 11h4"/></>,
    building: <><path d="M3 21h18"/><path d="M6 21V5l6-2v18"/><path d="M12 8h6v13"/><path d="M8 8h1M8 12h1M8 16h1M15 11h1M15 15h1"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16.5 9"/></>,
    file: <><path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h5"/><path d="M9 12h6M9 16h6"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    plug: <><path d="M12 22v-5"/><path d="M9 8V2M15 8V2"/><path d="M7 8h10v4a5 5 0 0 1-10 0V8Z"/></>,
    brain: <><path d="M9.5 4a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 3 12.8 3 3 0 0 0 6 18h1a3 3 0 0 0 2.5 2"/><path d="M14.5 4a3 3 0 0 1 5 2.2 3.5 3.5 0 0 1 1.5 6.6 3 3 0 0 1-3 5.2h-1a3 3 0 0 1-2.5 2"/><path d="M9.5 4v16M14.5 4v16M9.5 8H7M14.5 8H17M9.5 13h5"/></>,
    person: <><circle cx="12" cy="7" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    book: <><path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 3V5Z"/><path d="M20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 3V5Z"/></>,
    term: <><path d="M4 5h16M8 5v14M16 5v14M4 19h16"/><path d="M10.5 9h3M10.5 13h3"/></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></>,
    arrows: <><path d="M4 7h12"/><path d="m13 4 3 3-3 3"/><path d="M20 17H8"/><path d="m11 14-3 3 3 3"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></>,
    plane: <><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/></>,
    graduation: <><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3.5 2.5 8.5 2.5 12 0v-4.5"/><path d="M22 10v6"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"/></>,
    arrow: <><path d="M5 12h14"/><path d="m15 8 4 4-4 4"/></>,
  };
  return <svg {...common}>{icons[name] || icons.check}</svg>;
}

const useCases = [
  { icon: 'message', title: 'Customer Experience Surveys', text: 'Translate CSAT, NPS, CES, post-purchase feedback, service evaluations, loyalty research, and voice-of-customer programs while keeping recurring customer-experience language consistent across markets.' },
  { icon: 'users', title: 'Employee Engagement Surveys', text: 'Support annual engagement, pulse, onboarding, workplace culture, learning, manager feedback, exit, and other employee-experience surveys for multilingual workforces.' },
  { icon: 'chart', title: 'Market Research Questionnaires', text: 'Translate consumer research, market-entry studies, segmentation, usage and attitude research, pricing studies, concept testing, and other international market research questionnaires.' },
  { icon: 'cursor', title: 'Product & UX Research', text: 'Localize usability questionnaires, product feedback, prototype evaluations, beta-program surveys, feature preference studies, customer discovery, and in-app research.' },
  { icon: 'megaphone', title: 'Brand & Marketing Research', text: 'Measure awareness, perception, preference, campaign effectiveness, advertising response, message fit, and brand health across international markets.' },
  { icon: 'network', title: 'Partner & Supplier Surveys', text: 'Collect structured feedback from global dealers, distributors, channel partners, suppliers, franchisees, contractors, and service providers.' },
  { icon: 'building', title: 'Public & Community Research', text: 'Reach multilingual communities through public-sector research, education surveys, nonprofit programs, stakeholder consultation, and program evaluation.' },
  { icon: 'repeat', title: 'Global Tracking Studies', text: 'Preserve approved questions, terminology, response scales, and reviewer decisions across quarterly, annual, or continuous multilingual research programs.' },
];

const contentGroups = [
  {
    title: 'Survey Content',
    items: ['Titles and introductions', 'Questions and prompts', 'Answer choices and Likert scales', 'Matrix labels and instructions', 'Demographic fields', 'Consent and privacy language', 'Validation and error messages', 'Completion and thank-you pages'],
  },
  {
    title: 'Participant Communications',
    items: ['Email invitations', 'Reminder emails', 'SMS invitations', 'Participant instructions', 'Recruitment materials', 'Landing pages', 'Survey announcements', 'Follow-up communications'],
  },
  {
    title: 'Research Outputs',
    items: ['Open-ended responses', 'Verbatim comments', 'Qualitative feedback', 'Research summaries', 'Findings and reports', 'Executive summaries', 'Dashboards and labels', 'Presentation content'],
  },
];

const workflows = [
  { icon: 'spark', title: 'AI-Assisted Translation + Professional Review', text: 'A scalable option for recurring or high-volume survey content where speed, consistency, and professional validation all matter. Translation memory and approved terminology provide additional context for AI-assisted production.' },
  { icon: 'person', title: 'Professional Survey Translation', text: 'Qualified linguists translate directly with attention to question intent, response relationships, terminology, audience, and research context—well suited to strategic or high-visibility research.' },
  { icon: 'shield', title: 'Translation + Independent Linguistic Review', text: 'Add a separate review stage when multilingual comparability, visibility, or research sensitivity calls for additional assurance across accuracy, scale consistency, terminology, clarity, and completeness.' },
  { icon: 'arrows', title: 'Back Translation & Reconciliation', text: 'Available when required by your methodology, SOP, research protocol, or regulated workflow. Stepes applies it where it adds value rather than treating it as a requirement for every survey.' },
];

const qaItems = [
  ['Question Meaning', 'Confirm that the translated question communicates the intended concept and preserves important distinctions.'],
  ['Response-Scale Integrity', 'Review whether answer choices remain appropriately ordered, balanced, and connected to the question.'],
  ['Question & Answer Alignment', 'Make sure choices remain associated with the correct questions, matrices, labels, and fields.'],
  ['Variables & Placeholders', 'Protect merge codes, dynamic fields, survey variables, HTML, tokens, and other technical content.'],
  ['Text Expansion & Layout', 'Review long translations for buttons, matrices, mobile layouts, answer labels, and limited display spaces.'],
  ['RTL & Locale Conventions', 'Validate right-to-left behavior plus dates, times, currencies, percentages, punctuation, and other locale-sensitive content.'],
  ['Completeness', 'Identify missing translations, untranslated source content, blank labels, omitted questions, and respondent-facing strings.'],
  ['Terminology', 'Check survey language against approved terminology, previous translations, your guidance, and related multilingual content.'],
];

const process = [
  ['Prepare the Survey', 'Provide the questionnaire, platform export, spreadsheet, structured content, previous translations, terminology, and research references.'],
  ['Analyze the Research Content', 'Review audiences, question types, response scales, terminology, technical fields, variables, cultural considerations, and platform requirements.'],
  ['Select the Translation Workflow', 'Match AI assistance, professional translation, linguistic review, independent verification, or specialized validation to the research need.'],
  ['Translate & Review', 'Qualified linguists work with approved language assets and evaluate meaning, response equivalence, terminology, cultural clarity, consistency, and completeness.'],
  ['Validate in Context', 'Where access is available, review the localized survey in a preview or test environment for layout, labels, RTL behavior, messages, and context-dependent wording.'],
  ['Deliver & Reuse', 'Return completed multilingual content in the agreed format and carry approved translations, terminology, and reviewer decisions into future survey waves.'],
];

const industries = [
  ['Consumer, Retail & Ecommerce', 'Customer satisfaction, product feedback, purchase experience research, loyalty surveys, concept testing, and consumer insights.', 'message'],
  ['Technology & Software', 'UX research, usability surveys, beta feedback, software satisfaction, feature testing, and customer discovery.', 'monitor'],
  ['Manufacturing & Engineering', 'Customer, dealer, distributor, supplier, employee, product, service, and operational surveys.', 'building'],
  ['Financial Services', 'Customer experience, product research, employee surveys, brand studies, and service feedback.', 'briefcase'],
  ['Healthcare', 'Patient experience, customer research, employee feedback, health education, service evaluation, and non-clinical healthcare surveys.', 'heart'],
  ['Travel & Hospitality', 'Guest satisfaction, booking experience, service quality, loyalty, destination, and post-stay surveys.', 'plane'],
  ['Education', 'Student, faculty, staff, parent, alumni, training, program, and institutional research.', 'graduation'],
  ['Human Resources', 'Employee engagement, pulse, onboarding, training, workplace culture, retention, and exit surveys.', 'users'],
  ['Marketing & Market Research', 'Consumer insights, brand tracking, campaign testing, message research, concept testing, audience research, and global market studies.', 'megaphone'],
  ['Government & Public Sector', 'Community feedback, public opinion, program evaluation, service-access, stakeholder, and public-information questionnaires.', 'building'],
];

const differentiators = [
  ['Professional Linguistic Expertise', 'Qualified translators and reviewers selected according to language pair, subject matter, content type, and project requirements.'],
  ['100+ Languages', 'Support for major European, Asian, Latin American, Middle Eastern, African, and other world languages and regional variants.'],
  ['AI-Enabled Scale', 'Use AI where it creates meaningful efficiency while retaining professional human expertise for interpretation, validation, and higher-impact content.'],
  ['Translation Memory', 'Reuse approved questions and previously translated content instead of starting from zero with every survey wave.'],
  ['Terminology Governance', 'Keep research terminology, brand language, product concepts, HR vocabulary, and standardized expressions aligned across markets.'],
  ['Risk-Matched Quality', 'Apply the appropriate level of professional review and quality control according to the survey’s purpose, audience, methodology, and potential impact.'],
  ['In-Context QA', 'Evaluate translated survey content where respondents actually experience it—not only as isolated text.'],
  ['Flexible Technology', 'Support files, survey translation exports, structured content, APIs, and recurring enterprise translation workflows.'],
  ['Continuous Improvement', 'Capture approved corrections, terminology decisions, and reviewer feedback so each completed research project strengthens the next one.'],
];

const languages = ['Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Brazilian Portuguese', 'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish', 'Czech', 'Romanian', 'Greek', 'Turkish', 'Arabic', 'Hebrew', 'Chinese, Simplified', 'Chinese, Traditional', 'Japanese', 'Korean', 'Vietnamese', 'Thai', 'Indonesian', 'Malay', 'Hindi', 'Bengali', 'Urdu', 'Tagalog'];

const faqs = [
  ['What is survey translation?', 'Survey translation is the professional translation and localization of questionnaires, response options, instructions, respondent messages, and related research content so people can participate in their preferred language. It considers question intent, response scales, terminology, cultural interpretation, survey context, and the relationship between individual questions and the research objective.'],
  ['What is questionnaire translation?', 'Questionnaire translation adapts a research instrument from one language into one or more target languages while preserving the intended meaning of its questions and responses. Depending on the methodology, it can include professional translation, independent review, team-based review, reconciliation, back translation, testing, or other validation steps.'],
  ['How is survey translation different from ordinary document translation?', 'Document translation primarily communicates information accurately and naturally. Survey translation must also consider how wording affects measurement. Question stems, rating scales, response options, and repeated research concepts need to work together so respondents in different languages interpret the survey as consistently as practical.'],
  ['What types of surveys can Stepes translate?', 'Stepes supports customer satisfaction, NPS, employee engagement, pulse, market research, brand tracking, product research, UX research, concept testing, education, public-sector, partner, supplier, healthcare, and international tracking surveys, among others.'],
  ['Can Stepes translate Qualtrics surveys?', 'Yes. Stepes can translate content exported from Qualtrics and return completed multilingual content for import. The workflow can incorporate professional translation, AI-assisted translation with human review, terminology management, translation memory, and in-context QA according to the research requirements.'],
  ['Can Stepes translate SurveyMonkey surveys?', 'Yes. Stepes can support SurveyMonkey multilingual workflows using translation files exported from the platform, while protecting source text, markup, and other structural information required for re-import.'],
  ['Can Stepes translate Alchemer surveys?', 'Yes. Stepes can support translation and review of questions, answer options, survey messages, instructions, and other translatable fields exported from Alchemer for multilingual deployment.'],
  ['Can Stepes work with our proprietary survey platform?', 'Yes. Stepes can support custom survey systems using spreadsheets, business files, structured data such as XML or JSON, platform exports, or API-based workflows. The best approach depends on how your system stores, exports, and imports translatable content.'],
  ['Does Stepes support AI translation for surveys?', 'Yes. AI-assisted survey translation can provide significant efficiency for recurring, high-volume, or suitable lower-risk content, particularly when combined with translation memory and approved terminology. Professional linguists can validate the output according to the survey’s audience and research requirements.'],
  ['Do multilingual surveys require back translation?', 'Not necessarily. Back translation remains useful or required in some research protocols, organizational methodologies, and regulated workflows, but it is not the only way to assess questionnaire quality. Depending on the study, professional translation, independent review, adjudication, documentation, testing, or in-market validation may be more appropriate.'],
  ['What is response-scale equivalence?', 'Response-scale equivalence means maintaining the intended relationship among answer choices across languages. For example, a progression from “Strongly Agree” to “Strongly Disagree” should remain natural, balanced, and appropriately differentiated in the target language.'],
  ['Can Stepes translate recurring employee or customer surveys?', 'Yes. Recurring survey programs are especially well suited to translation memory and terminology management. Previously approved questions, response choices, terminology, and reviewer decisions can be reused so future waves build on validated language instead of repeatedly starting from scratch.'],
  ['Can Stepes translate open-ended survey responses?', 'Yes. Stepes can translate open-ended comments, verbatim responses, employee feedback, customer comments, product suggestions, and other qualitative survey data. The workflow can be matched to the volume and intended use of the translated responses.'],
  ['Can Stepes review a translated survey in context?', 'Yes, when an appropriate survey preview, test environment, screenshot set, or other final-context material is available. In-context QA can identify text truncation, missing strings, awkward matrix labels, inconsistent answer options, untranslated messages, RTL display issues, variable problems, and context-dependent wording.'],
  ['What survey file formats can Stepes translate?', 'Typical formats include XLSX, CSV, DOCX, XML, JSON, text-based localization files, and survey-platform translation exports. Stepes can also review proprietary formats and workflow requirements for custom survey systems.'],
  ['How many languages does Stepes support for survey translation?', 'Stepes provides professional translation services in more than 100 languages, including major European, Asian, Latin American, Middle Eastern, African, and other global languages and regional variants.'],
];

function SectionHeading({ eyebrow, title, intro, centered = true, dark = false, className = '' }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading--centered' : ''} ${dark ? 'section-heading--dark' : ''} ${className}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children, light = false }) {
  return <a className={`editorial-link ${light ? 'editorial-link--light' : ''}`} href={href}>{children}<Icon name="arrow" size={17}/></a>;
}

function SurveyIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of one survey localized into multiple languages">
      <div className="hero-art__glow hero-art__glow--one" />
      <div className="hero-art__glow hero-art__glow--two" />
      <div className="survey-card survey-card--back survey-card--de">
        <span className="language-tag">DE</span>
        <div className="survey-line survey-line--w70"/>
        <div className="survey-line survey-line--w48"/>
        <div className="survey-scale"><i/><i/><i/><i/><i/></div>
      </div>
      <div className="survey-card survey-card--back survey-card--ja">
        <span className="language-tag">日本語</span>
        <div className="survey-line survey-line--w62"/>
        <div className="survey-line survey-line--w52"/>
        <div className="survey-scale"><i/><i/><i/><i/><i/></div>
      </div>
      <div className="survey-card survey-card--main">
        <div className="survey-card__header">
          <span className="language-tag language-tag--active">EN</span>
          <span className="survey-status"><span/>Ready for localization</span>
        </div>
        <div className="survey-kicker">Customer experience</div>
        <div className="survey-question">How satisfied are you with your experience?</div>
        <div className="scale-labels"><span>Very dissatisfied</span><span>Very satisfied</span></div>
        <div className="survey-scale survey-scale--large"><i/><i/><i/><i className="selected"/><i/></div>
        <div className="survey-note"><Icon name="globe" size={16}/> Multiple target languages</div>
      </div>
      <div className="floating-chip floating-chip--one"><span>FR</span>Échelle alignée</div>
      <div className="floating-chip floating-chip--two"><span>ES</span>Terminology matched</div>
      <div className="floating-chip floating-chip--three"><Icon name="check" size={16}/> In-context QA</div>
    </div>
  );
}

function MeasurementVisual() {
  const rows = [
    ['Very satisfied', 'Très satisfait', 'Sehr zufrieden'],
    ['Satisfied', 'Satisfait', 'Zufrieden'],
    ['Neutral', 'Neutre', 'Neutral'],
    ['Dissatisfied', 'Insatisfait', 'Unzufrieden'],
    ['Very dissatisfied', 'Très insatisfait', 'Sehr unzufrieden'],
  ];
  return (
    <div className="measurement-visual">
      <div className="measurement-visual__top">
        <span>Response-scale equivalence</span>
        <span className="status-pill"><Icon name="check" size={14}/>Aligned</span>
      </div>
      <div className="measurement-languages"><span>EN</span><span>FR</span><span>DE</span></div>
      <div className="measurement-rows">
        {rows.map((r, i) => <div className="measurement-row" key={r[0]}><b>{i + 1}</b><span data-lang="EN">{r[0]}</span><span data-lang="FR">{r[1]}</span><span data-lang="DE">{r[2]}</span></div>)}
      </div>
      <div className="measurement-footer"><Icon name="scale" size={18}/>Equivalent progression preserved across languages</div>
    </div>
  );
}

function PlatformPanel() {
  return (
    <div className="platform-panel">
      <div className="platform-panel__header">
        <div>
          <div className="ui-kicker">MULTILINGUAL SURVEY WORKFLOW</div>
          <strong>Work in your survey platform</strong>
        </div>
        <span className="status-dot"><i/>Translation workflow</span>
      </div>
      <div className="platform-list">
        {['Qualtrics', 'SurveyMonkey', 'Alchemer', 'Google Forms', 'Microsoft Forms', 'Proprietary systems'].map((p, i) => (
          <div className={`platform-item ${i === 0 ? 'platform-item--active' : ''}`} key={p}>
            <span className="platform-symbol">{p.slice(0, 1)}</span><span>{p}</span><Icon name="arrow" size={16}/>
          </div>
        ))}
      </div>
      <div className="platform-formats">
        <span>XLSX</span><span>CSV</span><span>DOCX</span><span>XML</span><span>JSON</span><span>API</span>
      </div>
    </div>
  );
}

function QAPreview() {
  return (
    <div className="qa-preview">
      <div className="qa-preview__bar"><span>Survey preview</span><span className="status-pill"><Icon name="check" size={14}/>QA in progress</span></div>
      <div className="qa-preview__body">
        <div className="qa-sidebar">
          <span className="qa-sidebar__active">Question 07</span>
          <span>Question 08</span>
          <span>Question 09</span>
          <span>Thank you</span>
        </div>
        <div className="qa-canvas">
          <div className="qa-lang">AR · العربية <span>RTL</span></div>
          <div className="qa-question" dir="rtl">ما مدى رضاك عن تجربتك؟</div>
          <div className="qa-options" dir="rtl">
            <span><i/>راضٍ جدًا</span><span><i/>راضٍ</span><span><i/>محايد</span><span><i/>غير راضٍ</span><span><i/>غير راضٍ جدًا</span>
          </div>
          <div className="qa-alert"><Icon name="check" size={16}/>Response labels fit · RTL alignment verified</div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ item, open, onClick }) {
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" type="button" aria-expanded={open} onClick={onClick}>
        <span>{item[0]}</span><span className="faq-plus">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" hidden={!open}><p>{item[1]}</p></div>
    </div>
  );
}

export default function SurveyTranslationServices56() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-survey-page">
      <style>{`
        :root {
          --magenta:#C11D63; --magenta-dark:#A71954; --burgundy:#7A1542; --blush:#FDF2F7; --light-magenta:#F2A7C6;
          --ink:#17171A; --body:#404048; --muted:#6C6C75; --line:#E6E6EA; --soft:#F7F7F9; --dark:#17151A; --dark-2:#211B22;
          --radius-lg:30px; --radius-md:22px; --shadow:0 20px 60px rgba(26,18,23,.08);
        }
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0}
        .stepes-survey-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--ink);background:#fff;overflow:hidden}
        .stepes-survey-page a{color:inherit;text-decoration:none}.stepes-survey-page button{font:inherit}
        .container{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}.section--dense{padding:80px 0}.section--soft{background:var(--soft)}.section--blush{background:var(--blush)}.section--dark{background:var(--dark);color:#fff}
        .eyebrow{font-size:11px;line-height:1.2;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:var(--magenta);margin-bottom:16px}
        .section--dark .eyebrow,.section-heading--dark .eyebrow{color:var(--light-magenta)}
        h1,h2,h3,p{margin-top:0}.stepes-survey-page h1,.stepes-survey-page h2,.stepes-survey-page h3{font-weight:600;letter-spacing:-.02em;color:inherit}
        h1{font-size:48px;line-height:1.03;margin-bottom:24px;max-width:680px}.stepes-survey-page h2{font-size:36px;line-height:1.12;margin-bottom:20px}.stepes-survey-page h3{font-size:24px;line-height:1.2;margin-bottom:12px}
        p,li{font-size:16px;line-height:1.68;color:var(--body);font-weight:400}.section--dark p,.section--dark li{color:#D9D3DA}
        .body-large{font-size:18px;line-height:1.66;color:#35353B}.section-intro{font-size:18px;line-height:1.65;max-width:790px;margin:0;color:#55545C}
        .section-heading{margin-bottom:48px}.section-heading--centered{text-align:center}.section-heading--centered .section-intro{margin-left:auto;margin-right:auto}.section-heading--dark .section-intro{color:#D2CBD3}
        .btn-row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.btn{min-height:50px;padding:0 24px;border-radius:999px;font-size:16px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:9px;border:1px solid transparent;transition:.2s ease}
        .btn--primary,.btn--primary:visited,.btn--primary:hover,.btn--primary:active,.btn--primary:focus,.btn--primary:focus-visible{background:var(--magenta);color:#fff!important}.btn--primary svg{stroke:#fff!important}.btn--primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
        .btn--secondary{background:#fff;color:#1E1D21;border-color:#DADAE0}.btn--secondary:hover{border-color:#BDBCC4;transform:translateY(-1px)}
        .editorial-link{display:inline-flex;align-items:center;gap:7px;color:var(--magenta)!important;font-size:16px;font-weight:600;margin-top:14px;min-height:44px}.editorial-link svg{transition:.2s ease}.editorial-link:hover svg{transform:translateX(3px)}.editorial-link--light{color:#fff!important}
        .hero{padding:104px 0 92px;background:linear-gradient(135deg,#fff 0%,#fff 58%,#FCF5F8 100%)}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(470px,.92fr);gap:56px;align-items:center}.hero-copy{max-width:690px}.hero-copy .body-large{max-width:680px;margin-bottom:30px}.hero-note{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-top:20px;font-size:16px;line-height:1.5;color:#6B6870}.hero-note svg{color:var(--magenta);flex:0 0 auto}
        .hero-art{position:relative;min-height:475px}.hero-art__glow{position:absolute;border-radius:50%;filter:blur(2px);background:#F7DBE7}.hero-art__glow--one{width:260px;height:260px;right:15px;top:30px}.hero-art__glow--two{width:170px;height:170px;left:35px;bottom:35px;background:#EEE9ED}
        .survey-card{position:absolute;background:#fff;border:1px solid #E1DDE1;border-radius:24px;box-shadow:0 22px 60px rgba(46,26,38,.10)}.survey-card--main{width:390px;right:42px;top:80px;padding:26px;z-index:4}.survey-card--back{width:250px;height:160px;padding:20px;opacity:.92}.survey-card--de{left:5px;top:20px;transform:rotate(-4deg)}.survey-card--ja{left:20px;bottom:32px;transform:rotate(4deg)}
        .survey-card__header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:24px}.language-tag{display:inline-flex;align-items:center;justify-content:center;min-width:36px;height:26px;border-radius:99px;background:#F3F1F3;color:#4F4A50;font-size:11px;font-weight:600;padding:0 9px}.language-tag--active{background:var(--blush);color:var(--magenta)}.survey-status{font-size:12px;color:#67616A;display:flex;align-items:center;gap:6px}.survey-status span{width:7px;height:7px;border-radius:50%;background:#56A77C}.survey-kicker{font-size:12px;color:var(--magenta);font-weight:600;margin-bottom:8px}.survey-question{font-size:22px;line-height:1.28;font-weight:600;color:#232126;margin-bottom:24px}.scale-labels{display:flex;justify-content:space-between;font-size:11px;color:#77717A;margin-bottom:8px}.survey-scale{display:flex;gap:10px;align-items:center}.survey-scale i{display:block;width:14px;height:14px;border-radius:50%;border:1.5px solid #BBB5BC;background:#fff}.survey-scale--large{justify-content:space-between;margin-bottom:22px}.survey-scale--large i{width:24px;height:24px}.survey-scale i.selected{border:6px solid var(--magenta)}.survey-note{border-top:1px solid #EEE9ED;padding-top:18px;color:#5F5961;font-size:13px;display:flex;align-items:center;gap:8px}.survey-note svg{color:var(--magenta)}.survey-line{height:9px;border-radius:9px;background:#E7E3E7;margin:12px 0}.survey-line--w70{width:70%}.survey-line--w62{width:62%}.survey-line--w52{width:52%}.survey-line--w48{width:48%}.survey-card--back .survey-scale{margin-top:22px}.floating-chip{position:absolute;z-index:6;background:#fff;border:1px solid #E6E1E5;border-radius:99px;box-shadow:0 14px 35px rgba(45,27,38,.10);padding:10px 14px;font-size:12px;font-weight:600;color:#514A52;display:flex;align-items:center;gap:8px}.floating-chip span{color:var(--magenta)}.floating-chip svg{color:#56A77C}.floating-chip--one{right:5px;top:35px}.floating-chip--two{right:0;bottom:46px}.floating-chip--three{left:156px;bottom:5px}
        .proof-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-item{padding:26px 28px;display:grid;grid-template-columns:42px 1fr;gap:13px;align-items:start;border-right:1px solid var(--line)}.proof-item:first-child{padding-left:0}.proof-item:last-child{border-right:0;padding-right:0}.proof-icon{width:40px;height:40px;border-radius:13px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center}.proof-item strong{display:block;font-size:16px;font-weight:600;margin-bottom:5px}.proof-item p{font-size:16px;line-height:1.5;margin:0;color:#77727A}
        .challenge-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:72px;align-items:center}.challenge-copy .body-large{margin-bottom:24px}.challenge-points{display:grid;gap:1px;background:var(--line);border:1px solid var(--line);border-radius:22px;overflow:hidden}.challenge-point{background:#fff;padding:18px 20px;display:flex;gap:13px;align-items:flex-start}.challenge-point svg{color:var(--magenta);flex:0 0 auto;margin-top:2px}.challenge-point span{font-size:16px;line-height:1.5;color:#434047}
        .measurement-visual{background:#fff;border:1px solid #DED9DE;border-radius:28px;box-shadow:var(--shadow);overflow:hidden}.measurement-visual__top{padding:21px 24px;border-bottom:1px solid #ECE8EC;display:flex;justify-content:space-between;align-items:center;font-size:16px;font-weight:600}.status-pill{font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:5px;color:#406E56;background:#EEF8F2;border-radius:99px;padding:7px 10px}.measurement-languages{display:grid;grid-template-columns:44px 1fr 1fr 1fr;padding:14px 20px;border-bottom:1px solid #EEE9ED;color:#7A747B;font-size:11px;font-weight:600;letter-spacing:.08em}.measurement-languages:before{content:""}.measurement-rows{padding:0 20px}.measurement-row{display:grid;grid-template-columns:44px 1fr 1fr 1fr;gap:0;align-items:center;min-height:62px;border-bottom:1px solid #EEE9ED}.measurement-row b{width:26px;height:26px;border-radius:50%;background:#F4F1F3;display:flex;align-items:center;justify-content:center;font-size:11px;color:#6A646B}.measurement-row span{font-size:16px;color:#403C42;padding-right:12px}.measurement-footer{padding:18px 22px;display:flex;align-items:center;gap:8px;color:#5F5960;font-size:16px}.measurement-footer svg{color:var(--magenta)}
        .preserve-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:start}.preserve-visual{position:sticky;top:24px}.preserve-list{border-top:1px solid #DFDADF}.preserve-item{padding:24px 0;border-bottom:1px solid #DFDADF;display:grid;grid-template-columns:42px 1fr;gap:16px}.preserve-item__icon{width:38px;height:38px;border-radius:12px;background:#fff;color:var(--magenta);display:flex;align-items:center;justify-content:center}.preserve-item h3{font-size:24px;margin-bottom:6px}.preserve-item p{margin:0}.preserve-callout{margin-top:28px;padding:20px 22px;border-left:3px solid var(--magenta);background:#fff;border-radius:0 18px 18px 0;font-size:17px;font-weight:600;color:#272329}
        .usecase-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:var(--line);gap:1px}.usecase{background:#fff;padding:28px;min-height:260px}.usecase-icon{width:44px;height:44px;border-radius:14px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center;margin-bottom:24px}.usecase h3{font-size:24px}.usecase p{margin-bottom:0;color:#555159}
        .content-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.content-group{padding:34px 32px;border-right:1px solid var(--line)}.content-group:first-child{padding-left:0}.content-group:last-child{border-right:0;padding-right:0}.content-group h3{font-size:24px}.qualitative-band{margin-top:34px;border:1px solid var(--line);border-radius:22px;padding:24px 26px;display:flex;align-items:flex-start;justify-content:space-between;gap:28px;background:#fff}.qualitative-band strong{font-size:20px;font-weight:600;display:block;margin-bottom:6px}.qualitative-band p{font-size:16px;line-height:1.6;margin:0;max-width:920px}.qualitative-band>svg{color:var(--magenta);flex:0 0 auto;margin-top:2px}.clean-list{list-style:none;margin:22px 0 0;padding:0}.clean-list li{display:flex;gap:10px;align-items:flex-start;padding:8px 0;color:#4B474E}.clean-list li:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--magenta);margin-top:10px;flex:0 0 auto}
        .platform-section{background:linear-gradient(135deg,#17151A 0%,#22181F 100%)}.platform-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:72px;align-items:center}.platform-copy .section-intro{max-width:610px;margin-bottom:24px}.platform-copy p{max-width:610px}.platform-panel{background:#252127;border:1px solid #403740;border-radius:28px;overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,.22)}.platform-panel__header{padding:24px 25px;border-bottom:1px solid #423842;display:flex;align-items:center;justify-content:space-between;gap:20px}.ui-kicker{font-size:10px;letter-spacing:.12em;color:var(--light-magenta);font-weight:600;margin-bottom:7px}.platform-panel__header strong{font-size:18px}.status-dot{font-size:11px;color:#BEB6BF;display:flex;align-items:center;gap:7px}.status-dot i{width:7px;height:7px;border-radius:50%;background:#65B488}.platform-list{padding:12px}.platform-item{min-height:56px;border-radius:14px;display:grid;grid-template-columns:34px 1fr 20px;gap:10px;align-items:center;padding:0 12px;color:#CCC4CD;font-size:16px}.platform-item--active{background:#342731;color:#fff}.platform-item--active svg{color:var(--light-magenta)}.platform-symbol{width:30px;height:30px;border-radius:10px;background:#40353F;display:flex;align-items:center;justify-content:center;color:var(--light-magenta);font-weight:600}.platform-formats{border-top:1px solid #423842;padding:19px 22px;display:flex;gap:8px;flex-wrap:wrap}.platform-formats span{font-size:10px;font-weight:600;letter-spacing:.05em;border:1px solid #4A414A;color:#CBC4CB;border-radius:99px;padding:7px 9px}
        .workflow-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.workflow-item{padding:34px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.workflow-item:nth-child(odd){padding-left:0}.workflow-item:nth-child(even){padding-right:0;border-right:0}.workflow-item:nth-child(n+3){border-bottom:0}.workflow-icon{width:42px;height:42px;border-radius:13px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center;margin-bottom:24px}.workflow-item h3{font-size:24px}.workflow-item p{margin-bottom:0}.team-review-note{margin-top:30px;padding:22px 24px;border-radius:20px;background:var(--soft);border:1px solid var(--line);max-width:920px;margin-left:auto;margin-right:auto;text-align:center}.team-review-note strong{font-size:18px;font-weight:600;display:block;margin-bottom:6px}.team-review-note p{font-size:16px;line-height:1.6;margin:0 auto;max-width:780px}.workflow-footer{text-align:center;margin-top:24px}.workflow-note{font-size:17px;font-weight:600;color:#2A262B;margin-bottom:3px}
        .vocab-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center}.asset-stack{background:#fff;border:1px solid #E6E1E5;border-radius:28px;box-shadow:var(--shadow);padding:22px}.asset-card{padding:22px;border-radius:18px;background:#FAF9FA;border:1px solid #ECE8EB;margin-bottom:12px}.asset-card:last-child{margin-bottom:0}.asset-card__top{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:12px}.asset-card__top strong{font-size:16px}.asset-card__top span{font-size:11px;color:#77717A}.asset-card p{font-size:16px;line-height:1.55;margin-bottom:0}.asset-bar{height:8px;border-radius:99px;background:#EAE6E9;overflow:hidden;margin-top:14px}.asset-bar i{display:block;height:100%;border-radius:99px;background:var(--magenta)}.asset-bar--memory i{width:84%}.asset-bar--term i{width:72%}.asset-bar--review i{width:91%}.vocab-copy .body-large{margin-bottom:24px}.vocab-benefits{display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid #DDD7DB;margin-top:24px}.vocab-benefit{padding:17px 18px 17px 0;border-bottom:1px solid #DDD7DB;display:flex;align-items:flex-start;gap:10px}.vocab-benefit:nth-child(even){padding-left:18px;border-left:1px solid #DDD7DB}.vocab-benefit svg{color:var(--magenta);flex:0 0 auto;margin-top:2px}.vocab-benefit span{font-size:16px;line-height:1.45;color:#474249}
        .qa-grid{display:grid;grid-template-columns:.84fr 1.16fr;gap:62px;align-items:start}.qa-list{border-top:1px solid var(--line)}.qa-item{padding:18px 0;border-bottom:1px solid var(--line)}.qa-item strong{font-size:16px;display:block;margin-bottom:4px}.qa-item p{font-size:16px;line-height:1.55;margin:0}.qa-preview{border:1px solid #E0DCE0;border-radius:28px;box-shadow:var(--shadow);overflow:hidden;background:#fff}.qa-preview__bar{padding:17px 20px;border-bottom:1px solid #EAE5E9;display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:600}.qa-preview__body{display:grid;grid-template-columns:130px 1fr;min-height:400px}.qa-sidebar{border-right:1px solid #EAE5E9;background:#FAF9FA;padding:16px 10px;display:flex;flex-direction:column;gap:4px}.qa-sidebar span{font-size:11px;color:#7A747B;padding:10px;border-radius:9px}.qa-sidebar__active{background:#F6E6ED!important;color:var(--magenta)!important;font-weight:600}.qa-canvas{padding:38px}.qa-lang{font-size:12px;color:#716B73;margin-bottom:28px}.qa-lang span{margin-left:8px;background:#F3F0F3;padding:5px 7px;border-radius:99px;font-size:10px}.qa-question{font-size:24px;line-height:1.45;font-weight:600;text-align:right;margin-bottom:26px}.qa-options{display:grid;grid-template-columns:1fr 1fr;gap:10px}.qa-options span{border:1px solid #E3DEE2;border-radius:12px;padding:13px;display:flex;gap:9px;align-items:center;font-size:16px;justify-content:flex-start}.qa-options i{width:14px;height:14px;border:1px solid #C4BDC3;border-radius:50%}.qa-alert{margin-top:28px;background:#EEF8F2;border-radius:12px;padding:12px 14px;color:#47715A;font-size:16px;display:flex;align-items:center;gap:7px}
        .automation-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}.automation-copy .section-intro{margin-bottom:24px}.automation-paths{border:1px solid #413841;border-radius:28px;overflow:hidden}.automation-path{padding:24px 26px;border-bottom:1px solid #413841;display:grid;grid-template-columns:44px 1fr;gap:16px}.automation-path:last-child{border-bottom:0}.automation-path__icon{width:42px;height:42px;border-radius:13px;background:#332B33;color:var(--light-magenta);display:flex;align-items:center;justify-content:center}.automation-path h3{font-size:24px;margin-bottom:6px}.automation-path p{font-size:16px;margin:0}.automation-flow{margin-top:26px;display:grid;grid-template-columns:1fr 30px 1fr 30px 1fr;align-items:center;gap:8px}.automation-flow span{min-height:76px;border:1px solid #463D46;background:#201C21;border-radius:15px;padding:14px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:16px;color:#E0D9E1;font-weight:600}.automation-flow svg{color:var(--light-magenta);justify-self:center}
        .process-wrap{border-top:1px solid var(--line)}.process-step{display:grid;grid-template-columns:72px .8fr 1.2fr;gap:24px;padding:28px 0;border-bottom:1px solid var(--line);align-items:start}.process-number{font-size:14px;color:var(--magenta);font-weight:600;padding-top:5px}.process-step h3{font-size:24px;margin:0}.process-step p{margin:0}.process-cta{display:flex;justify-content:center;margin-top:34px}
        .industry-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.industry-row{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:25px 28px 25px 0;border-bottom:1px solid var(--line)}.industry-row:nth-child(even){padding-left:28px;border-left:1px solid var(--line)}.industry-icon{width:40px;height:40px;border-radius:12px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center}.industry-row h3{font-size:24px;margin-bottom:6px}.industry-row p{font-size:16px;line-height:1.55;margin:0}
        .clinical-band{display:grid;grid-template-columns:1fr .92fr;gap:60px;align-items:center;background:#fff;border:1px solid #E6DCE2;border-radius:30px;padding:48px;box-shadow:0 18px 50px rgba(60,31,47,.06)}.clinical-band h2{margin-bottom:18px}.clinical-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px}.clinical-list span{font-size:16px;color:#4E4950;display:flex;gap:8px;align-items:center}.clinical-list span:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--magenta)}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:var(--line);gap:1px}.why-item{background:#fff;padding:26px 28px;min-height:184px}.why-item strong{font-size:17px;display:block;margin-bottom:8px}.why-item p{font-size:16px;line-height:1.55;margin:0}
        .language-layout{display:grid;grid-template-columns:.68fr 1.32fr;gap:72px;align-items:start}.language-copy .body-large{margin-bottom:18px}.language-list{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid #DDD7DB}.language-list span{font-size:16px;color:#464147;padding:12px 8px 12px 0;border-bottom:1px solid #DDD7DB}.language-note{font-size:16px;margin-top:18px;color:#5D575F}
        .faq-heading{max-width:960px;margin-left:auto;margin-right:auto}.faq-panel{max-width:960px;margin:0 auto;border-top:1px solid var(--line)}.faq-item{border-bottom:1px solid var(--line)}.faq-question{width:100%;border:0;background:transparent;min-height:72px;padding:20px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;cursor:pointer;color:#201E22;font-size:18px;font-weight:600}.faq-plus{font-size:26px;font-weight:400;color:var(--magenta);line-height:1;flex:0 0 auto}.faq-answer{padding:0 54px 22px 0}.faq-answer p{margin:0;max-width:820px}
        .final-cta{background:var(--blush);padding:88px 0 92px}.cta-box{max-width:1060px;margin:0 auto;text-align:center}.cta-box h2{font-size:40px;max-width:800px;margin:0 auto 20px}.cta-box p{font-size:18px;max-width:780px;margin:0 auto 30px;color:#4E474E}.cta-box .btn-row{justify-content:center}
        @media (max-width:1180px){
          .container{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr .9fr;gap:36px}.survey-card--main{right:0}.survey-card--de{left:-15px}.survey-card--ja{left:-2px}.floating-chip--three{left:120px}.proof-item{padding:22px 18px}.usecase-grid{grid-template-columns:repeat(2,1fr)}.workflow-grid{grid-template-columns:repeat(2,1fr)}.workflow-item:nth-child(2){border-right:0}.workflow-item:nth-child(-n+2){border-bottom:1px solid var(--line)}.workflow-item:nth-child(3){padding-left:0}.workflow-item:nth-child(4){padding-right:0}.why-grid{grid-template-columns:repeat(3,1fr)}
        }
        @media (max-width:900px){
          .container{padding-left:24px;padding-right:24px}.hero h1{font-size:42px;margin-left:auto;margin-right:auto}.hero-copy{max-width:760px;margin-left:auto;margin-right:auto;text-align:center}.hero-copy .body-large{margin-left:auto;margin-right:auto}.hero .btn-row{justify-content:center}.hero-note{justify-content:center}.stepes-survey-page h2{font-size:32px}.stepes-survey-page h3{font-size:22px}.challenge-copy .section-heading,.preserve-visual .section-heading,.vocab-copy .section-heading,.language-copy .section-heading{text-align:center}.challenge-copy .section-heading .section-intro,.preserve-visual .section-heading .section-intro,.vocab-copy .section-heading .section-intro,.language-copy .section-heading .section-intro{margin-left:auto;margin-right:auto}.section{padding:80px 0}.section--dense{padding:72px 0}.hero{padding:88px 0 78px}.hero-grid{grid-template-columns:1fr;gap:50px}.hero-copy{max-width:760px}.hero-art{max-width:620px;width:100%;margin:0 auto}.proof-grid{grid-template-columns:1fr 1fr}.proof-item{border-bottom:1px solid var(--line)}.proof-item:nth-child(2){border-right:0}.proof-item:nth-child(3),.proof-item:nth-child(4){border-bottom:0}.proof-item:first-child,.proof-item:nth-child(3){padding-left:0}.proof-item:nth-child(2),.proof-item:nth-child(4){padding-right:0}.challenge-grid,.preserve-grid,.platform-grid,.vocab-grid,.qa-grid,.automation-grid,.language-layout{grid-template-columns:1fr;gap:48px}.preserve-visual{position:static}.section-heading--tablet-center{text-align:center}.section-heading--tablet-center .section-intro{margin-left:auto;margin-right:auto}.section-heading--scan{text-align:left}.section-heading--scan .section-intro{margin-left:0;margin-right:0}.clinical-band>div:first-child .eyebrow,.clinical-band>div:first-child h2{text-align:center}.content-grid{grid-template-columns:1fr}.content-group{border-right:0;border-bottom:1px solid var(--line);padding:28px 0}.content-group:last-child{border-bottom:0}.workflow-grid{grid-template-columns:1fr}.workflow-item,.workflow-item:nth-child(even),.workflow-item:nth-child(odd){padding:28px 0;border-right:0;border-bottom:1px solid var(--line)}.workflow-item:last-child{border-bottom:0}.platform-copy .section-intro{max-width:760px}.vocab-benefits{grid-template-columns:1fr 1fr}.qa-preview{max-width:760px}.process-step{grid-template-columns:58px .8fr 1.2fr}.clinical-band{grid-template-columns:1fr;gap:30px}.why-grid{grid-template-columns:1fr 1fr}.language-list{grid-template-columns:repeat(4,1fr)}
        }
        @media (max-width:640px){
          .container{padding-left:20px;padding-right:20px}.section{padding:68px 0}.section--dense{padding:64px 0}.hero{padding:72px 0 64px;text-align:center}.hero h1{font-size:38px;max-width:100%;margin-left:auto;margin-right:auto}.hero-copy .body-large{font-size:18px;margin-left:auto;margin-right:auto}.hero .eyebrow{text-align:center}.hero .btn-row{justify-content:center}.hero .btn{width:100%}.hero-note{justify-content:center;max-width:320px;margin-left:auto;margin-right:auto}.hero-art{min-height:390px;transform:scale(.92);transform-origin:center top;margin-bottom:-30px}.survey-card--main{width:330px;right:50%;transform:translateX(50%);top:74px}.survey-card--de{width:210px;left:0;top:15px}.survey-card--ja{width:210px;left:7px;bottom:15px}.floating-chip--one{right:-4px;top:26px}.floating-chip--two{right:-6px;bottom:38px}.floating-chip--three{left:50%;transform:translateX(-50%);bottom:0}.proof-grid{grid-template-columns:1fr}.proof-item{border-right:0!important;border-bottom:1px solid var(--line)!important;padding:20px 0!important}.proof-item:last-child{border-bottom:0!important}.proof-item p{font-size:16px}.section-heading{margin-bottom:36px}.section-heading--centered{text-align:center}.section-heading--scan{text-align:left}.section-heading--scan .section-intro{margin-left:0;margin-right:0}.stepes-survey-page h2{font-size:30px}.stepes-survey-page h3{font-size:20px}.section-heading h2{font-size:30px}.section-intro{font-size:17px}.challenge-copy .section-heading,.preserve-visual .section-heading,.vocab-copy .section-heading,.language-copy .section-heading{text-align:center}.challenge-copy .section-heading .section-intro,.preserve-visual .section-heading .section-intro,.vocab-copy .section-heading .section-intro,.language-copy .section-heading .section-intro{margin-left:auto;margin-right:auto}.challenge-copy .body-large,.vocab-copy .body-large,.automation-copy p,.language-copy .body-large,.language-copy p{text-align:left}.measurement-languages{display:none}.measurement-rows{padding:0 16px}.measurement-row{grid-template-columns:32px 1fr;align-items:start;min-height:0;padding:16px 0}.measurement-row b{width:22px;height:22px;margin-top:2px;grid-row:1 / span 3}.measurement-row span{grid-column:2;font-size:16px;line-height:1.4;padding:3px 0}.measurement-row span:before{content:attr(data-lang);display:inline-block;width:28px;margin-right:8px;color:#8A838A;font-size:11px;font-weight:600;letter-spacing:.06em}.measurement-visual__top{padding:17px;gap:12px;align-items:flex-start;flex-direction:column}.measurement-footer{font-size:16px;line-height:1.45}.preserve-item{grid-template-columns:38px 1fr}.usecase-grid{grid-template-columns:1fr}.usecase{min-height:0;padding:24px}.content-group{padding:24px 0}.platform-panel__header{align-items:flex-start;flex-direction:column}.asset-card__top{align-items:flex-start;flex-direction:column;gap:4px}.workflow-grid{grid-template-columns:1fr}.workflow-item,.workflow-item:nth-child(even),.workflow-item:nth-child(odd){padding:28px 0;border-right:0;border-bottom:1px solid var(--line)}.workflow-item:last-child{border-bottom:0}.team-review-note{text-align:left;padding:20px}.qualitative-band{padding:22px;gap:18px}.qualitative-band>svg{display:none}.vocab-benefits{grid-template-columns:1fr}.vocab-benefit,.vocab-benefit:nth-child(even){padding:15px 0;border-left:0}.qa-preview__body{grid-template-columns:1fr}.qa-sidebar{display:none}.qa-canvas{padding:24px 18px}.qa-question{font-size:21px}.qa-options{grid-template-columns:1fr}.automation-flow{grid-template-columns:1fr;gap:8px}.automation-flow svg{transform:rotate(90deg)}.process-step{grid-template-columns:42px 1fr;gap:12px 14px}.process-number{grid-row:1 / span 2}.process-step h3{font-size:20px}.process-step p{grid-column:2}.industry-grid{grid-template-columns:1fr}.industry-row,.industry-row:nth-child(even){padding:22px 0;border-left:0}.clinical-band{padding:30px 22px}.clinical-list{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr}.why-item{min-height:0;padding:24px}.language-list{grid-template-columns:1fr 1fr}.faq-question{font-size:17px;min-height:68px}.faq-answer{padding-right:0}.process-cta .btn{width:100%}.final-cta{padding:72px 0}.cta-box h2{font-size:30px}.cta-box .btn{width:100%}
        }
        @media (max-width:390px){.hero-art{transform:scale(.86);width:calc(100% + 24px);margin-left:-12px;margin-bottom:-52px}.floating-chip{padding:9px 11px}.survey-card--main{width:320px}}
        @media (max-width:350px){.hero-art{transform:scale(.80);margin-left:-16px;width:calc(100% + 32px);margin-bottom:-70px}.language-list{grid-template-columns:1fr}.survey-question{font-size:20px}}
      `}</style>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Survey & Questionnaire Translation</div>
              <h1>Multilingual Survey Translation Services</h1>
              <p className="body-large">Ask the same question—and preserve the same meaning—in every language. Stepes provides professional survey translation and questionnaire translation services for customer experience, employee engagement, market research, product research, brand studies, and global feedback programs.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href={STEPS.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
                <a className="btn btn--secondary" href={STEPS.contact}>Talk to Stepes</a>
              </div>
              <div className="hero-note"><Icon name="globe" size={17}/>100+ languages · AI + human workflows · Survey platform support</div>
            </div>
            <SurveyIllustration />
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Survey translation capabilities">
        <div className="container">
          <div className="proof-grid">
            {[
              ['globe','100+ Languages','Global survey and questionnaire translation'],
              ['spark','AI + Human Workflows','Match workflow depth to survey purpose and risk'],
              ['layers','Survey Platform Support','Work with the systems and formats you already use'],
              ['repeat','Enterprise Consistency','Reuse approved language across recurring waves'],
            ].map(x => <div className="proof-item" key={x[1]}><div className="proof-icon"><Icon name={x[0]}/></div><div><strong>{x[1]}</strong><p>{x[2]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="challenge-grid">
            <div className="challenge-copy">
              <SectionHeading centered={false} title="Surveys Must Measure the Same Thing in Every Language" />
              <p className="body-large">A survey does more than communicate information. It measures attitudes, preferences, experiences, behaviors, and perceptions. That makes survey translation fundamentally different from translating ordinary prose.</p>
              <p>A question can be grammatically correct in another language and still change how respondents interpret it. A response choice can become slightly stronger or weaker. A translated scale can lose its natural progression. Even small wording differences can influence the quality and comparability of the data collected.</p>
              <div className="challenge-points">
                {['Likert and agreement scales','Satisfaction, experience, and frequency ratings','NPS and recommendation questions','Matrix and forced-choice questions','Demographic questions and concept testing','Open-ended prompts and recurring tracking studies'].map(t => <div className="challenge-point" key={t}><Icon name="check" size={18}/><span>{t}</span></div>)}
              </div>
            </div>
            <MeasurementVisual />
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <div className="preserve-grid">
            <div className="preserve-visual">
              <SectionHeading centered={false} title="Preserve the Measurement, Not Just the Words" intro="Successful questionnaire translation preserves the relationship between the question, the response options, and the research objective." />
              <div className="preserve-callout">The objective is not word-for-word sameness. It is comparable meaning across languages and markets.</div>
            </div>
            <div className="preserve-list">
              {[
                ['message','Question Intent','Translate the meaning and purpose of the question rather than mechanically reproducing source-language syntax.'],
                ['scale','Response Equivalence','Keep answer choices aligned in meaning, intensity, and progression so the complete response set works naturally together.'],
                ['chart','Scale Integrity','Maintain consistency across rating, agreement, frequency, semantic differential, and other structured response scales.'],
                ['globe','Cultural Clarity','Adapt wording where a literal translation could confuse respondents or introduce unintended interpretation.'],
                ['term','Terminology Consistency','Apply the same approved research, product, HR, brand, and survey terminology across questions, markets, and study waves.'],
                ['book','Research Context','Use research notes, definitions, previous translations, screenshots, platform exports, and your guidance to understand what each item is designed to measure.'],
              ].map(x => <div className="preserve-item" key={x[1]}><div className="preserve-item__icon"><Icon name={x[0]} size={20}/></div><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Every Survey. Every Audience. Every Market." intro="From a single questionnaire in three languages to an ongoing research program across dozens of markets, Stepes adapts the translation workflow to your audience, survey platform, languages, content, and research requirements." />
          <div className="usecase-grid">
            {useCases.map(x => <article className="usecase" key={x.title}><div className="usecase-icon"><Icon name={x.icon}/></div><h3>{x.title}</h3><p>{x.text}</p>{x.title === 'Brand & Marketing Research' ? <EditorialLink href={STEPS.marketing}>Marketing Translation Services</EditorialLink> : null}</article>)}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading title="Everything Around the Question Matters" intro="Respondents interact with introductions, instructions, buttons, error messages, consent language, invitations, reminders, and completion screens. Stepes supports the complete multilingual survey content lifecycle—not only the question text." />
          <div className="content-grid">
            {contentGroups.map(g => <div className="content-group" key={g.title}><h3>{g.title}</h3><ul className="clean-list">{g.items.map(i => <li key={i}>{i}</li>)}</ul></div>)}
          </div>
          <div className="qualitative-band"><div><strong>Open-Ended Feedback</strong><p>Translate customer comments, employee feedback, product suggestions, research verbatims, and other free-text responses. For high-volume datasets, Stepes can apply scalable AI-assisted workflows with professional review matched to how the translated feedback will be used.</p></div><Icon name="message" size={22}/></div>
        </div>
      </section>

      <section className="section section--dark platform-section">
        <div className="container">
          <div className="platform-grid">
            <div className="platform-copy">
              <SectionHeading dark centered={false} title="Work With the Survey Platforms You Already Use" intro="Your organization should not need to replace its research platform simply because a survey is going global." />
              <p>Stepes supports multilingual survey workflows for Qualtrics, SurveyMonkey, Alchemer, Google Forms, Microsoft Forms, proprietary survey systems, and other enterprise research platforms. Depending on the environment, content can be exchanged through translation files, spreadsheets, structured exports, APIs, or other supported formats.</p>
              <p>Your researchers stay in the system they know. Stepes manages the multilingual language workflow around it.</p>
              <EditorialLink light href={STEPS.api}>Explore Translation API</EditorialLink>
            </div>
            <PlatformPanel />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="The Right Translation Workflow for Every Survey" intro="A weekly customer pulse survey, an annual employee engagement study, a strategic market-entry questionnaire, and a validated clinical assessment do not carry the same consequences if wording is wrong. Stepes matches the language workflow to purpose, scale, visibility, methodology, and risk." />
          <div className="workflow-grid">
            {workflows.map(x => <div className="workflow-item" key={x.title}><div className="workflow-icon"><Icon name={x.icon}/></div><h3>{x.title}</h3><p>{x.text}</p></div>)}
          </div>
          <div className="team-review-note"><strong>Need a collaborative review process?</strong><p>Complex international studies can also incorporate your stakeholders, in-market reviewers, research specialists, and structured adjudication so important translation decisions are reviewed and approved by the right people.</p></div>
          <div className="workflow-footer"><div className="workflow-note">Translate according to research purpose—not a one-size-fits-all process.</div><EditorialLink href={STEPS.aiHuman}>AI + Human Translation Workflows</EditorialLink></div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <div className="vocab-grid">
            <div className="asset-stack" aria-label="Reusable survey language assets">
              <div className="asset-card"><div className="asset-card__top"><strong>Translation Memory</strong><span>Recurring survey reuse</span></div><p>Previously approved questions and response choices matched against the next survey wave.</p><div className="asset-bar asset-bar--memory"><i/></div></div>
              <div className="asset-card"><div className="asset-card__top"><strong>Terminology Management</strong><span>Approved language</span></div><p>Research, product, HR, brand, and standardized response terminology governed across languages.</p><div className="asset-bar asset-bar--term"><i/></div></div>
              <div className="asset-card"><div className="asset-card__top"><strong>Reviewer Decisions</strong><span>Continuous improvement</span></div><p>Approved stakeholder and in-market feedback carried into future translations and review cycles.</p><div className="asset-bar asset-bar--review"><i/></div></div>
            </div>
            <div className="vocab-copy">
              <SectionHeading centered={false} title="One Survey Vocabulary. Every Market. Every Wave." />
              <p className="body-large">Global organizations frequently repeat the same or related questions across annual employee surveys, quarterly customer programs, brand trackers, product studies, and regional research. Translating those questions from scratch every time can introduce unnecessary variation.</p>
              <p>Stepes connects recurring survey translation with reusable enterprise language assets so approved questions, terminology, response scales, and reviewer decisions can strengthen future survey waves.</p>
              <div className="vocab-benefits">
                {['Reduce unnecessary retranslation','Shorten turnaround','Improve terminology consistency','Preserve research wording','Reduce repeated reviewer corrections','Maintain continuity across survey waves'].map(t => <div className="vocab-benefit" key={t}><Icon name="check" size={17}/><span>{t}</span></div>)}
              </div>
              <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:18}}><EditorialLink href={STEPS.memory}>Translation Memory</EditorialLink><EditorialLink href={STEPS.terminology}>Terminology Management</EditorialLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading className="section-heading--scan" title="Survey Translation Isn't Finished Until the Survey Works" intro="A translation can be correct in a spreadsheet and still fail once respondents see it. Linguistic and in-context QA help confirm that multilingual content works as part of the actual respondent experience." />
          <div className="qa-grid">
            <div className="qa-list">
              {qaItems.map(x => <div className="qa-item" key={x[0]}><strong>{x[0]}</strong><p>{x[1]}</p></div>)}
              <EditorialLink href={STEPS.qa}>Translation Quality Assurance</EditorialLink>
            </div>
            <QAPreview />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="automation-grid">
            <div className="automation-copy">
              <SectionHeading dark centered={false} title="Automate Recurring Multilingual Survey Programs" intro="Customer feedback arrives continuously. Employee pulse surveys run throughout the year. Brand trackers repeat across markets. Stepes helps enterprise teams move beyond one-off file translation with connected multilingual workflows." />
              <p>Use the exchange model that fits your survey operation—from common business files and platform exports to structured data and API-based workflows.</p>
              <div style={{display:'flex',gap:24,flexWrap:'wrap'}}><EditorialLink light href={STEPS.api}>Translation API</EditorialLink><EditorialLink light href={STEPS.enterprise}>Enterprise Translation Management</EditorialLink></div>
            </div>
            <div>
              <div className="automation-paths">
                {[
                  ['file','File-Based Translation','Exchange survey content through XLSX, CSV, DOCX, platform translation exports, and other supported business files.'],
                  ['code','Structured Content','Support XML, JSON, localization files, structured text, and database-driven content while protecting technical fields and variables.'],
                  ['plug','Translation API','Connect recurring multilingual requests directly with enterprise systems and configure translation, review, QA, and delivery around the content.'],
                ].map(x => <div className="automation-path" key={x[1]}><div className="automation-path__icon"><Icon name={x[0]}/></div><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}
              </div>
              <div className="automation-flow"><span>Survey or Research System</span><Icon name="arrow"/><span>AI + Human Translation & QA</span><Icon name="arrow"/><span>Completed Multilingual Content</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading centered={false} eyebrow="From Source Questionnaire to Global Respondents" title="How Stepes Translates Multilingual Surveys" intro="Successful survey translation starts before the first question is translated. Stepes connects preparation, linguistic expertise, technology, review, in-context validation, and reusable language assets in one structured workflow." />
          <div className="process-wrap">
            {process.map((x,i) => <div className="process-step" key={x[0]}><div className="process-number">0{i+1}</div><h3>{x[0]}</h3><p>{x[1]}</p></div>)}
          </div>
          <div className="process-cta"><a className="btn btn--primary" href={STEPS.quote}>Start Your Survey Translation <Icon name="arrow" size={18}/></a></div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading title="Survey Translation Across Global Industries" intro="Different industries ask different questions. Stepes combines professional language expertise, terminology management, and industry-aware workflows to support multilingual research across global sectors." />
          <div className="industry-grid">
            {industries.map(x => <div className="industry-row" key={x[0]}><div className="industry-icon"><Icon name={x[2]}/></div><div><h3>{x[0]}</h3><p>{x[1]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <div className="clinical-band">
            <div>
              <div className="eyebrow">Specialized Research Workflows</div>
              <h2>When a Questionnaire Requires More Than Translation</h2>
              <p>Clinical outcome assessments, patient-reported outcome instruments, health-related quality-of-life measures, and other regulated or validated instruments may require a documented linguistic validation methodology designed to demonstrate conceptual equivalence across languages.</p>
              <EditorialLink href={STEPS.linguisticValidation}>Explore Linguistic Validation Services</EditorialLink>
            </div>
            <div className="clinical-list">
              {['Concept definition','Dual forward translation','Reconciliation','Back translation','Instrument developer or sponsor review','Clinician review','Cognitive debriefing','Final proofreading & documentation'].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Why Global Organizations Choose Stepes" intro="Modern multilingual research requires more than access to translators. It requires the people, technology, language assets, quality controls, and workflow flexibility to support research as it expands across markets." />
          <div className="why-grid">
            {differentiators.map(x => <div className="why-item" key={x[0]}><strong>{x[0]}</strong><p>{x[1]}</p></div>)}
          </div>
          <div style={{textAlign:'center',marginTop:28}}><EditorialLink href={STEPS.enterprise}>Enterprise Translation Management</EditorialLink></div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <div className="language-layout">
            <div className="language-copy">
              <SectionHeading centered={false} title="Survey Translation Services in 100+ Languages" />
              <p className="body-large">Stepes supports multilingual surveys across major world languages and regional variants, helping organizations collect customer, employee, market, product, and stakeholder feedback internationally.</p>
              <p>Need several languages for the same study? Stepes can coordinate multilingual survey translation through one managed program so terminology, research guidance, review requirements, and delivery remain aligned across markets.</p>
            </div>
            <div>
              <div className="language-list">{languages.map(x => <span key={x}>{x}</span>)}</div>
              <div className="language-note">Plus many additional global and regional languages based on project requirements.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading className="section-heading--scan faq-heading" title="Frequently Asked Questions About Survey Translation" />
          <div className="faq-panel">
            {faqs.map((item,i) => <FAQItem key={item[0]} item={item} open={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Make Every Response Count—in Every Language</h2>
            <p>Whether you are launching a customer satisfaction survey in five markets, an employee engagement program in 30 languages, a global market research study, or an automated recurring feedback program, Stepes can build the translation workflow around your research. Send us your survey, target languages, platform, timeline, and previous translations if available.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={STEPS.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
              <a className="btn btn--secondary" href={STEPS.contact}>Talk to Stepes</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
