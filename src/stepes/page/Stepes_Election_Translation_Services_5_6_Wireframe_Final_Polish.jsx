import React, { useState } from 'react';

const S = {
  magenta: '#C11D63',
  magentaDark: '#A71954',
  burgundy: '#7A1542',
  blush: '#FDF2F7',
  blushText: '#F2A7C6',
  ink: '#17171B',
  body: '#3B3B43',
  muted: '#666873',
  line: '#E6E6EA',
  soft: '#F6F6F8',
  white: '#FFFFFF',
};

const links = {
  quote: 'https://www.stepes.com/quote/',
  contact: 'https://www.stepes.com/contact-us/',
  government: 'https://www.stepes.com/government-translation-services/',
  terminology: 'https://www.stepes.com/terminology-management/',
  dtp: 'https://www.stepes.com/multilingual-desktop-publishing/',
  website: 'https://www.stepes.com/website-translation-services/',
  interpreting: 'https://www.stepes.com/interpretation-services/',
  marketing: 'https://www.stepes.com/marketing-translation-services/',
  portal: 'https://www.stepes.com/translation-management-portal/',
  languages: 'https://www.stepes.com/translation-languages/',
  accessibility: 'https://www.stepes.com/accessibility-translation-services/',
};

const Icon = ({ name, size = 22 }) => {
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
    ballot: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h5M8 16h7"/><path d="m14.5 11.5 1.4 1.4 2.6-3"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    building: <><path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    type: <><path d="M4 7V4h16v3M9 20h6M12 4v16"/></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4z"/><path d="M7 9h10M7 13h6"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    repeat: <><path d="m17 1 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 23-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></>,
    headset: <><path d="M4 14a8 8 0 0 1 16 0"/><path d="M4 14v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1ZM20 14v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1Z"/><path d="M16 20c0 1.1-.9 2-2 2h-2"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    speaker: <><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    expand: <><path d="M12 5v14M5 12h14"/></>,
    collapse: <><path d="M5 12h14"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    workflow: <><rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M9 7h6M18 10v2a2 2 0 0 1-2 2h-1M6 10v2a2 2 0 0 0 2 2h1"/></>,
  };
  return <svg {...common}>{icons[name] || icons.file}</svg>;
};

const SectionHeading = ({ eyebrow, title, intro, align = 'center', dark = false, id }) => (
  <div className={`headingGroup ${align === 'left' ? 'headingLeft' : 'headingCenter'} ${dark ? 'onDark' : ''}`} id={id}>
    {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p className="sectionIntro">{intro}</p> : null}
  </div>
);

const TextLink = ({ href, children, inverse = false }) => (
  <a className={`textLink ${inverse ? 'inverse' : ''}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={17} />
  </a>
);

const Pill = ({ href, children, secondary = false, light = false }) => (
  <a className={`pill ${secondary ? 'secondary' : ''} ${light ? 'light' : ''}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={17} />
  </a>
);

const journey = [
  { label: 'Register', icon: 'file', copy: 'Registration information, eligibility requirements, forms, deadlines, notices, and voter assistance information.' },
  { label: 'Prepare', icon: 'search', copy: 'Voter guides, sample ballots, candidate information, ballot measures, election websites, polling details, and FAQs.' },
  { label: 'Vote', icon: 'ballot', copy: 'Official ballots, voting instructions, mail voting materials, provisional voting information, signage, and voter assistance.' },
  { label: 'Understand', icon: 'message', copy: 'Results information, certification notices, post-election FAQs, process explanations, reports, and public updates.' },
];

const ecosystem = [
  {
    title: 'Election Authorities',
    icon: 'building',
    copy: 'Support official multilingual election communication at the state, county, municipal, and local level.',
    bullets: ['State election agencies', 'Secretaries of state', 'County election offices', 'Boards of elections', 'Registrars and clerks', 'Government contractors'],
  },
  {
    title: 'Civic & Community Organizations',
    icon: 'users',
    copy: 'Expand access to voter education and public-interest information across multilingual communities.',
    bullets: ['Voter education', 'Community outreach', 'Research and surveys', 'Public information', 'Events and multimedia', 'Community resources'],
  },
  {
    title: 'Campaigns & Political Organizations',
    icon: 'speaker',
    copy: 'Communicate approved campaign content accurately across languages and channels.',
    bullets: ['Candidate statements', 'Campaign websites', 'Policy materials', 'Mailers and advertising', 'Social media', 'Video and press content'],
  },
];

const contentGroups = [
  {
    title: 'Ballots & Voting Materials',
    icon: 'ballot',
    items: ['Official and sample ballots', 'Ballot titles and summaries', 'Ballot measures and referenda', 'Candidate statements', 'Vote-by-mail instructions', 'Provisional voting materials', 'Voting-system instructions', 'Polling-place instructions'],
  },
  {
    title: 'Voter Information & Outreach',
    icon: 'users',
    items: ['Voter information guides', 'Registration and eligibility materials', 'Election notices', 'Polling-place information', 'Voting options', 'FAQs', 'Public mailers', 'Community outreach materials'],
  },
  {
    title: 'Digital Election Content',
    icon: 'monitor',
    items: ['Election websites', 'Voter portals', 'Online forms', 'Mobile content', 'Email and SMS', 'Social media', 'Digital help content', 'Videos and captions'],
  },
  {
    title: 'Administrative & Public-Sector Content',
    icon: 'file',
    items: ['Election policies and procedures', 'Election regulations', 'Election-worker training', 'Candidate filing information', 'Petitions', 'Campaign-finance information', 'Public reports', 'Certification materials'],
  },
];

const qualitySteps = [
  ['Professional Translation', 'Qualified linguists translate with approved terminology, references, and available context.'],
  ['Independent Linguistic Review', 'A second professional linguist can review accuracy, completeness, clarity, and consistency.'],
  ['Terminology Validation', 'Names, office titles, ballot language, recurring instructions, and jurisdiction-specific phrases are checked.'],
  ['Layout & In-Context Review', 'Translated content is evaluated in its final or near-final presentation for readability and context.'],
  ['Final QA & Approval', 'Final checks support terminology, numbers, names, punctuation, formatting, completeness, and delivery readiness.'],
];

const channels = ['Ballots', 'Voter Guides', 'Election Websites', 'Registration', 'Polling Signage', 'Training', 'FAQs', 'Voter Assistance'];

const workflowChanges = [
  ['Source Update', 'A source file, page, notice, or election instruction changes.'],
  ['Changed Content Identified', 'Previously approved content is separated from new or revised material.'],
  ['Approved Translation Reused', 'Translation memory carries forward established multilingual content.'],
  ['New Content Translated', 'Qualified linguists translate only the content that requires new work.'],
  ['Review & QA', 'Terminology, linguistic review, formatting, and required approvals are applied.'],
  ['Updated Release', 'Revised multilingual content is prepared for the required publication channel.'],
];

const process = [
  ['Define Requirements', 'Confirm target languages, content types, source formats, program and jurisdiction requirements, accessibility considerations, review workflow, publication format, and schedule.'],
  ['Prepare Language Assets', 'Collect previous translations, approved glossaries, election terminology, style guidance, translation memories, jurisdiction references, and other useful materials.'],
  ['Translate', 'Qualified linguists translate the content using approved terminology, context, references, and the agreed quality workflow.'],
  ['Review & Validate', 'Apply independent linguistic review, customer review, terminology validation, in-context review, linguistic QA, and automated QA as required.'],
  ['Produce & Localize', 'Complete multilingual desktop publishing, website or portal localization, multimedia production, subtitling, captioning, or voice-over when included.'],
  ['QA & Deliver', 'Complete final quality checks and provide the approved multilingual deliverables in the agreed formats.'],
];

const FAQs = [
  ['What are election translation services?', 'Election translation services convert voter information, ballots, registration materials, election websites, public notices, voting instructions, outreach content, and other election-related information into additional languages. A complete program can also include linguistic review, terminology management, multilingual desktop publishing, digital localization, multimedia localization, accessibility-related content translation, and interpreting.'],
  ['What election materials can Stepes translate?', 'Stepes translates official and sample ballots, ballot measures, voter guides, registration materials, polling-place information, voting instructions, vote-by-mail materials, election notices, election-worker training, websites, portals, public outreach, FAQs, campaign content, multimedia, and administrative materials.'],
  ['Does Stepes provide ballot translation services?', 'Yes. Stepes provides professional ballot translation services for official ballots, sample ballots, ballot titles and summaries, ballot measures, referenda, candidate statements, voting instructions, and related materials. High-consequence workflows can include professional human translation, independent linguistic review, terminology validation, in-context review, and final QA.'],
  ['Can Stepes provide independent review of election translations?', 'Yes. Independent linguistic review can be added when a second professional linguist should verify accuracy, completeness, terminology, clarity, consistency, and overall linguistic quality. Customer reviewers and approved jurisdiction-specific terminology can also be incorporated.'],
  ['Can Stepes support Section 203 language-access programs?', 'Yes. Stepes can provide translation, linguistic review, terminology management, multilingual publishing, digital localization, and interpreting for election programs designed around Section 203 language-access requirements. Election authorities remain responsible for identifying the legal and policy requirements and covered languages applicable to their programs.'],
  ['Can Stepes translate election websites and voter portals?', 'Yes. Stepes localizes public information pages, voter resources, FAQs, polling information, online forms, voter portals, help content, notifications, and other digital election experiences. Frequently updated environments can use repeatable workflows that reuse approved terminology and previous translations.'],
  ['Can Stepes format translated voter guides and election materials?', 'Yes. Multilingual desktop publishing can support voter guides, ballots, notices, brochures, mailers, signage, and other designed election materials in formats such as Adobe InDesign, Illustrator, Microsoft Word, PowerPoint, PDF, and web-ready content.'],
  ['Can Stepes support urgent election translation updates?', 'Yes, depending on the languages, volume, formats, review requirements, and deadline. Translation memory, terminology management, parallel language production, workflow automation, and centralized review can reduce repetitive work and help accelerate controlled updates.'],
  ['Does Stepes provide election-day interpreting?', 'Yes. Stepes provides over-the-phone, video remote, and on-site interpreting that can support voter assistance, public information, community outreach, meetings, help lines, and other election-related communication. Availability depends on language, modality, location, schedule, and project requirements.'],
  ['Does Stepes use AI for election translation?', 'Stepes matches translation technology to content risk and intended use. Professional human translation and independent linguistic review are available for official ballots, voting instructions, legal information, and other high-consequence content. Translation memory, terminology management, automated QA, and workflow automation can improve efficiency, while AI-assisted translation with human review may be used for suitable lower-risk content when approved by the customer.'],
  ['What languages does Stepes support for election translation?', 'Stepes provides professional translation services in 100+ languages, including Spanish, Chinese, Vietnamese, Korean, Tagalog / Filipino, Arabic, Haitian Creole, Hindi, Bengali, Punjabi, Japanese, Portuguese, Russian, and many others. Support for Indigenous, Native American, Alaska Native, historically oral, and other less commonly requested languages depends on the language, content, location, available resources, and service model.'],
  ['Can Stepes reuse our previous election translations?', 'Yes. Existing translations, glossaries, voter guides, ballot terminology, and other approved language assets can be reviewed and incorporated into translation memory and terminology resources to improve consistency and reduce unnecessary retranslation.'],
  ['Can Stepes support both print and digital election content?', 'Yes. A single program can include voter guides, ballots, PDFs, websites, portals, email, SMS, video, signage, desktop publishing, and interpreting while using shared terminology and translation memory to improve consistency across channels.'],
];

function ElectionHeroArt() {
  return (
    <div className="heroArt" aria-hidden="true">
      <div className="heroHalo haloOne" />
      <div className="heroHalo haloTwo" />
      <div className="visualTag tagA">VOTER GUIDE</div>
      <div className="visualTag tagB">WEB</div>
      <div className="visualTag tagC">BALLOT</div>
      <div className="visualTag tagD">LANGUAGE SUPPORT</div>
      <div className="ballotSheet">
        <div className="sheetHeader"><span>Official Election Information</span><span className="sheetLang">ES</span></div>
        <div className="sheetTitle">Voter Information Guide</div>
        {[0,1,2,3].map(i => <div className="sheetLine" key={i}><span></span><span></span></div>)}
        <div className="sheetChoice"><span className="choiceDot"></span><span></span></div>
        <div className="sheetChoice"><span className="choiceDot"></span><span></span></div>
      </div>
      <div className="phoneMock">
        <div className="phoneTop"></div>
        <div className="phoneLabel">ELECTION INFO</div>
        <div className="phoneHeadline">Dónde votar</div>
        <div className="phoneLine wide"></div>
        <div className="phoneLine"></div>
        <div className="phoneButton">Ver información</div>
      </div>
      <div className="signMock">
        <Icon name="ballot" size={27}/>
        <span>VOTE HERE</span>
        <small>Información disponible en varios idiomas</small>
      </div>
      <div className="languageChip lang1">中文</div>
      <div className="languageChip lang2">VI</div>
      <div className="languageChip lang3">한국어</div>
    </div>
  );
}

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={`faqItem ${open ? 'open' : ''}`}>
      <button className="faqQuestion" onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <span className="faqIcon"><Icon name={open ? 'collapse' : 'expand'} size={20}/></span>
      </button>
      <div className="faqAnswer" hidden={!open}><p>{a}</p></div>
    </div>
  );
}

export default function StepesElectionTranslationServices56() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="page">
      <style>{css}</style>

      <main>
        <section className="hero section">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <h1>Election Translation &amp; Language Access Services</h1>
              <p className="heroLead">Professional translation, multilingual publishing, digital localization, and interpreting for ballots, voter information, election websites, outreach, and election-day communication.</p>
              <p className="heroSub">Stepes helps election authorities, civic organizations, and campaigns communicate accurately across languages with professional linguists, controlled review, terminology management, and scalable multilingual workflows in 100+ languages.</p>
              <div className="heroActions">
                <Pill href={links.quote}>Get a Quote</Pill>
                <Pill href={links.contact} secondary>Talk to an Election Translation Expert</Pill>
              </div>
            </div>
            <ElectionHeroArt />
          </div>
        </section>

        <section className="proofBand">
          <div className="shell proofGrid">
            {[
              ['100+ Languages', 'Global and community language coverage'],
              ['Human-Led Quality', 'Professional translation and independent review'],
              ['Multilingual Production', 'Print, digital, web, and formatted deliverables'],
              ['Controlled Workflows', 'Terminology, versions, approvals, and QA'],
            ].map(([title, copy]) => <div className="proofItem" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </section>

        <section className="section lightSection">
          <div className="shell">
            <SectionHeading
              title="Language Access Across Every Stage of an Election"
              intro="Multilingual election communication extends far beyond the ballot. Stepes helps keep voter-facing content connected before registration, while voters prepare, at the point of voting, and throughout post-election communication."
            />
            <div className="journeyWrap">
              <div className="journeyLine" />
              {journey.map((item, idx) => (
                <div className="journeyItem" key={item.label}>
                  <div className="journeyIcon"><Icon name={item.icon}/></div>
                  <div className="journeyStage">{String(idx + 1).padStart(2, '0')}</div>
                  <h3>{item.label}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="centerNote">One election may generate hundreds of interconnected content assets. A coordinated language workflow helps approved terminology, instructions, names, dates, and recurring content remain aligned wherever voters encounter them.</div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              title="Language Services Across the Election Ecosystem"
              intro="Election communication involves government agencies, community organizations, campaigns, and other stakeholders. Stepes adapts each workflow to the content, audience, risk level, and publication requirements."
            />
            <div className="ecosystemGrid">
              {ecosystem.map((group, index) => (
                <article className={`ecosystemPanel ${index === 0 ? 'primaryPanel' : ''}`} key={group.title}>
                  <div className="iconBox"><Icon name={group.icon}/></div>
                  <h3>{group.title}</h3>
                  <p>{group.copy}</p>
                  <ul>{group.bullets.map(b => <li key={b}><span className="miniCheck"><Icon name="check" size={15}/></span><span>{b}</span></li>)}</ul>
                </article>
              ))}
            </div>
            <div className="editorialCallout">
              <div><strong>Politically neutral language services.</strong> Stepes provides accurate multilingual communication for your approved content; our role is translation, localization, production, and language access—not political strategy or electoral persuasion.</div>
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="shell">
            <SectionHeading
              title="Election Content in Every Format and Channel"
              intro="Modern election programs publish information across documents, websites, portals, mobile channels, video, signage, and live voter services. Stepes supports the complete multilingual content environment."
            />
            <div className="contentMatrix">
              {contentGroups.map(group => (
                <div className="contentGroup" key={group.title}>
                  <div className="contentGroupHead"><span className="lineIcon"><Icon name={group.icon}/></span><h3>{group.title}</h3></div>
                  <div className="twoColList">{group.items.map(item => <div className="plainListItem" key={item}>{item}</div>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section accessSection">
          <div className="shell accessGrid">
            <div className="accessCopy">
              <div className="eyebrow">U.S. LANGUAGE ACCESS</div>
              <h2>Support Multilingual Voter Access Across Jurisdictions</h2>
              <p className="bodyLarge">Election language access in the United States can involve federal, state, local, and jurisdiction-specific requirements.</p>
              <p>Section 203 of the Voting Rights Act requires covered jurisdictions to provide applicable registration and voting notices, forms, instructions, assistance, ballots, and other election information in designated minority languages as well as English. Other federal provisions, state and local requirements, election policies, and community needs may also shape a language access program.</p>
              <p>Stepes helps election organizations operationalize their defined requirements through professional translation, linguistic review, terminology management, multilingual production, digital localization, and interpreting.</p>
              <div className="complianceNote"><Icon name="shield"/><span>Election authorities remain responsible for determining the laws, policies, covered languages, and other requirements applicable to their programs.</span></div>
              <TextLink href={links.government}>Government Translation Services</TextLink>
            </div>
            <div className="accessFlow">
              {[
                ['Your Requirements', 'Languages, content, review, accessibility, formats, and deadlines.'],
                ['Your Language Program', 'Approved terminology, references, previous translations, and publication standards.'],
                ['Stepes Multilingual Workflow', 'Translate, review, produce, localize, QA, and deliver.'],
                ['Voter-Facing Delivery', 'Ballots, guides, websites, notices, signage, outreach, and assistance.'],
              ].map((item, idx) => <div className="accessStep" key={item[0]}><span>{String(idx+1).padStart(2,'0')}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section darkSection">
          <div className="shell">
            <SectionHeading
              eyebrow="HIGH-CONSEQUENCE ELECTION CONTENT"
              title="Accuracy Where Every Word Matters"
              intro="Ballots and official voting materials are not ordinary translation projects. Stepes supports high-consequence election content with professional human linguists, independent review options, controlled terminology, in-context validation, and final quality assurance."
              dark
            />
            <div className="qualityFlow">
              {qualitySteps.map(([title, copy], idx) => (
                <div className="qualityStep" key={title}>
                  <div className="qualityNum">{String(idx + 1).padStart(2, '0')}</div>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <div className="darkCallout">For official ballots, voting instructions, legal information, and other high-consequence election materials, Stepes can provide fully professional human translation and independent linguistic review workflows.</div>
          </div>
        </section>

        <section className="section">
          <div className="shell splitEditorial terminologySplit">
            <div>
              <SectionHeading
                title="One Election Vocabulary Across Every Voter Touchpoint"
                intro="Election terminology appears repeatedly across ballots, voter guides, registration materials, websites, signage, training, FAQs, and voter support channels. The words may be repeated. The translations should not be reinvented every time."
                align="left"
              />
              <p>Stepes uses terminology management to centralize approved multilingual election vocabulary so linguists and reviewers can apply consistent language across projects, channels, and election cycles.</p>
              <div className="termExamples">
                {['Office and agency names', 'Jurisdiction names', 'Ballot terminology', 'Voting methods', 'Recurring instructions', 'Legal and procedural phrases', 'Abbreviations', 'Established community terminology'].map(x => <span key={x}>{x}</span>)}
              </div>
              <TextLink href={links.terminology}>Explore Terminology Management</TextLink>
            </div>
            <div className="termVisual" aria-label="Illustrative terminology workflow">
              <div className="termCore">
                <span className="termCoreLabel">APPROVED LANGUAGE FOUNDATION</span>
                <strong>Election Terminology</strong>
                <small>Validated terms · Reusable translations · Jurisdiction preferences</small>
              </div>
              <div className="termSpokes">
                {channels.map((c, idx) => <div className={`termNode node${idx+1}`} key={c}>{c}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="shell publishingGrid">
            <div className="publishingVisual" aria-label="Illustrative multilingual publishing workflow">
              <div className="pubCanvas">
                <div className="pubToolbar"><span></span><span></span><span></span><b>Voter Information Guide.indd</b></div>
                <div className="pubWorkarea">
                  <div className="pubPages">
                    {['EN', 'ES', '中文'].map((lang, i) => <div className={`pubPage p${i+1}`} key={lang}><span>{lang}</span><b>Voter Information Guide</b><i></i><i></i><i></i><small>Publication-ready layout</small></div>)}
                  </div>
                  <div className="pubSide"><b>QUALITY CHECKS</b><span><Icon name="check" size={14}/> Text fit</span><span><Icon name="check" size={14}/> Typography</span><span><Icon name="check" size={14}/> Artwork</span><span><Icon name="check" size={14}/> PDF output</span></div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="From Translation to Publication-Ready Election Materials"
                intro="Election organizations rarely need translated text alone. They need finished voter guides, ballots, mailers, signs, PDFs, websites, and other materials that are ready to publish."
                align="left"
              />
              <p>Stepes combines professional translation with multilingual desktop publishing and in-context QA to help preserve the intent of the source design while giving each language the space, typography, and formatting it needs.</p>
              <div className="compactRows">
                {[
                  ['Source Formats', 'Adobe InDesign, Illustrator, Word, PowerPoint, PDF, HTML, XML, and structured content.'],
                  ['Layout Adaptation', 'Text expansion, tables, page flow, multilingual typography, right-to-left languages, and translated artwork.'],
                  ['Final Delivery', 'Publication-ready source files and agreed print, web, digital, or PDF outputs.'],
                ].map(([t,c]) => <div className="compactRow" key={t}><h3>{t}</h3><p>{c}</p></div>)}
              </div>
              <TextLink href={links.dtp}>Explore Multilingual Desktop Publishing</TextLink>
            </div>
          </div>
        </section>

        <section className="section updatesSection">
          <div className="shell">
            <SectionHeading
              title="When Election Content Changes, Every Language Has to Keep Up"
              intro="Polling information may change. Source documents may be revised. Websites may receive new instructions. Stepes helps election organizations update multilingual content through controlled reuse and review instead of restarting every language from the beginning."
            />
            <div className="updateFlow">
              {workflowChanges.map(([title, copy], idx) => <div className="updateStep" key={title}><div className="updateMarker">{String(idx+1).padStart(2,'0')}</div><div><h3>{title}</h3><p>{copy}</p></div>{idx < workflowChanges.length - 1 && <div className="updateArrow"><Icon name="arrow" size={18}/></div>}</div>)}
            </div>
            <div className="updateBenefits">
              {[
                ['Translation Memory', 'Reuse previously approved multilingual content.'],
                ['Terminology Control', 'Preserve established language across new and revised assets.'],
                ['Parallel Languages', 'Coordinate translation, review, production, and QA simultaneously.'],
                ['Version Visibility', 'Keep current files, reviewer status, and updated deliveries easier to track.'],
              ].map(([t,c]) => <div key={t}><h3>{t}</h3><p>{c}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section digitalSection">
          <div className="shell digitalGrid">
            <div className="deviceVisual" aria-hidden="true">
              <div className="desktopDevice"><div className="browserBar"><i></i><i></i><i></i></div><div className="siteHeader">CITY ELECTIONS <span>ES</span></div><div className="siteHero">Información para votantes</div><div className="siteGrid"><span></span><span></span><span></span></div></div>
              <div className="mobileDevice"><div className="mobileHeader">VOTE</div><b>Find your polling place</b><span className="mobileField">ZIP code</span><span className="mobileAction">Search</span></div>
              <div className="accessBadge"><Icon name="eye" size={20}/><span>Accessible content layers</span></div>
            </div>
            <div>
              <SectionHeading
                title="Make Digital Election Information Usable Across Languages"
                intro="Voters increasingly interact with election information through websites, portals, mobile devices, email, social media, video, and other digital channels."
                align="left"
              />
              <div className="digitalRows">
                {[
                  ['Election Websites', 'Public election information, voter resources, FAQs, polling details, voting options, deadlines, and results information.'],
                  ['Voter Portals & Online Forms', 'Interface text, field labels, instructions, validation messages, error messages, navigation, and help content.'],
                  ['Mobile, SMS & Email', 'Essential voter communication across mobile content, notifications, alerts, and digital outreach.'],
                  ['Multimedia', 'Subtitles, captions, transcripts, voice-over, on-screen text, and audio localization.'],
                  ['Multilingual Accessibility', 'Accessible digital documents, alternative text, captions, transcripts, form labels, screen-reader labels, navigation instructions, and status messages.'],
                ].map(([t,c], idx) => <div className="digitalRow" key={t}><span className="digitalIcon"><Icon name={['monitor','file','message','speaker','eye'][idx]}/></span><div><h3>{t}</h3><p>{c}</p></div></div>)}
              </div>
              <p className="fineBoundary">Translation is one part of creating an accessible multilingual experience. Technical accessibility requirements must also be addressed through the design, development, document, or publishing environment.</p>
              <div className="inlineLinks"><TextLink href={links.website}>Website Translation Services</TextLink><TextLink href={links.accessibility}>Accessibility Services</TextLink></div>
            </div>
          </div>
        </section>

        <section className="section interpretingSection">
          <div className="shell">
            <SectionHeading
              title="Language Support When Voters Need It in Real Time"
              intro="Not every voter interaction happens through documents or websites. Stepes provides interpreting services for voter information lines, planned outreach, public meetings, and election-day language support across remote and in-person settings."
            />
            <div className="interpretModes">
              {[
                ['Over-the-Phone Interpreting', 'Voter information lines, help desks, scheduled services, and other voice interactions.', 'headset'],
                ['Video Remote Interpreting', 'Real-time video support when visual interaction improves communication or remote access is preferred.', 'monitor'],
                ['On-Site Interpreting', 'Planned meetings, public sessions, voter education activities, and other in-person settings, subject to language, location, and availability.', 'users'],
              ].map(([t,c,icon]) => (
                <article className="interpretMode" key={t}>
                  <div className="interpretIcon"><Icon name={icon}/></div>
                  <div className="interpretModeCopy"><h3>{t}</h3><p>{c}</p></div>
                </article>
              ))}
            </div>
            <div className="interpretUseBand">
              <div className="interpretUse">
                <div className="interpretUseIcon"><Icon name="message"/></div>
                <div>
                  <h3>Community &amp; Voter Outreach</h3>
                  <p>Support voter education sessions, community meetings, public presentations, training, and outreach events with planned language assistance.</p>
                </div>
              </div>
              <div className="interpretUse electionDayUse">
                <div className="interpretUseIcon"><Icon name="ballot"/></div>
                <div>
                  <h3>Election-Day Support</h3>
                  <p>Align interpreting resources with the election organization’s defined languages, service model, locations, schedules, and operational requirements.</p>
                </div>
              </div>
            </div>
            <div className="interpretFooter">
              <p className="interpretNote">Availability varies by language, interpreting modality, location, schedule, and project requirements.</p>
              <TextLink href={links.interpreting}>Explore Interpreting Services</TextLink>
            </div>
          </div>
        </section>

        <section className="section campaignSection">
          <div className="shell campaignGrid">
            <div>
              <h2>Multilingual Campaign Translation Services</h2>
              <p className="bodyLarge">Campaigns communicate across websites, advertising, mail, social media, video, public appearances, and policy content. Stepes helps translate approved communications accurately and consistently for multilingual audiences.</p>
              <p>Our role is to provide professional language services for your approved content—preserving the intended source message across languages and media without providing political strategy or targeting guidance.</p>
              <TextLink href={links.marketing}>Marketing Translation Services</TextLink>
            </div>
            <div className="campaignList">
              {[
                ['Campaign Websites', 'Candidate biographies, issue pages, event information, FAQs, and digital updates.'],
                ['Candidate Statements & Policy Content', 'Candidate statements, policy positions, issue briefs, platforms, speeches, and public communications.'],
                ['Advertising & Outreach', 'Digital and print advertising, flyers, direct mail, brochures, email, and SMS content.'],
                ['Social Media', 'Approved social content localized while maintaining terminology, tone, and message consistency.'],
                ['Video & Multimedia', 'Subtitles, captions, transcripts, voice-over, and translated on-screen text.'],
                ['Press & Public Communications', 'Press releases, media materials, announcements, speeches, and event information.'],
              ].map(([t,c]) => <div className="campaignRow" key={t}><h3>{t}</h3><p>{c}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section workflowModelSection">
          <div className="shell">
            <SectionHeading
              title="Match the Translation Workflow to the Election Content"
              intro="Not every piece of election content carries the same level of risk. Stepes helps organizations match human expertise, review, automation, and AI to the intended use instead of forcing every project through the same translation model."
            />
            <div className="riskGrid">
              <div className="riskPanel riskHigh"><span className="riskLabel">HIGHEST CONTROL</span><h3>Professional Human Translation + Independent Review</h3><p>For official ballots, ballot measures, voting instructions, registration information, legal or procedural content, and other high-consequence voter communication.</p><ul><li>Professional linguists</li><li>Independent linguistic review</li><li>Terminology and translation memory</li><li>Automated QA and controlled approvals</li></ul></div>
              <div className="riskPanel"><span className="riskLabel">CONTROLLED EFFICIENCY</span><h3>Human Translation With Translation Technology</h3><p>For recurring or high-volume election content where professional linguists can work efficiently with reusable language assets and automation.</p><ul><li>Translation memory</li><li>Approved terminology</li><li>Automated quality checks</li><li>Workflow and version management</li></ul></div>
              <div className="riskPanel"><span className="riskLabel">APPROVED LOWER-RISK CONTENT</span><h3>AI-Assisted Translation With Human Review</h3><p>For suitable lower-risk content, AI-assisted translation may be incorporated when approved by your organization and matched to the intended use.</p><ul><li>Human review</li><li>Terminology and translation memory</li><li>Project-specific controls</li><li>Governed use by content risk</li></ul></div>
            </div>
            <div className="modelPrinciple">The goal is not to apply the newest technology everywhere. It is to use the right combination of human expertise and technology for each type of election content.</div>
          </div>
        </section>

        <section className="section qualitySection">
          <div className="shell qualityGrid">
            <div>
              <SectionHeading
                title="Quality, Review, and Visibility From Intake to Publication"
                intro="Election translation programs often involve multiple files, languages, reviewers, deadlines, and publication formats. Stepes brings these elements into coordinated workflows that support consistency and control."
                align="left"
              />
              <div className="qualityCapabilities">
                {[
                  ['Qualified Linguists', 'Professional translators matched by language pair, subject matter, and content complexity.'],
                  ['Independent Linguistic Review', 'Second-linguist review options for content requiring additional linguistic assurance.'],
                  ['Translation Memory', 'Reuse previously approved translations instead of retranslating recurring election content.'],
                  ['Terminology Management', 'Keep approved names, terms, instructions, and jurisdiction-specific language consistent.'],
                  ['Automated QA', 'Identify potential issues involving numbers, omissions, terminology, punctuation, tags, and formatting.'],
                  ['Controlled Review & Approvals', 'Coordinate files, comments, reviewers, versions, status, and delivery in organized workflows.'],
                ].map(([t,c]) => <div className="qualityCapability" key={t}><span><Icon name="check" size={18}/></span><div><h3>{t}</h3><p>{c}</p></div></div>)}
              </div>
            </div>
            <div className="portalMock">
              <div className="portalHead"><div><span>STEPES WORKFLOW</span><b>Election Language Program</b></div><span className="statusPill">In progress</span></div>
              <div className="portalMeta"><span>8 languages</span><span>12 files</span><span>3 reviewers</span></div>
              {[
                ['Voter Guide', 'Spanish', 'Review', 74],
                ['Sample Ballot', 'Chinese', 'Quality check', 88],
                ['Election Website', 'Vietnamese', 'Translation', 51],
                ['Polling Signage', 'Korean', 'Approved', 100],
              ].map(([file, lang, status, progress]) => <div className="portalRow" key={file + lang}><div className="portalTop"><span><b>{file}</b><small>{lang}</small></span><em>{status}</em></div><div className="progressTrack"><i style={{width: `${progress}%`}}></i></div></div>)}
              <div className="portalFooter"><Icon name="lock" size={16}/><span>Controlled files · reviewers · versions · delivery</span></div>
            </div>
          </div>
          <div className="shell portalLink"><TextLink href={links.portal}>Customer Translation Portal</TextLink></div>
        </section>

        <section className="section processSection">
          <div className="shell">
            <SectionHeading
              title="A Clear Workflow for Multilingual Election Content"
              intro="Every election program is different. Stepes builds the workflow around your languages, content, publication process, review requirements, deadlines, reviewers, and stakeholders."
            />
            <div className="processList">
              {process.map(([title, copy], idx) => <div className="processRow" key={title}><div className="processNum">{String(idx+1).padStart(2,'0')}</div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
            </div>
            <div className="processFooter">For recurring programs, approved translations and terminology can become reusable language assets for future updates and election cycles.</div>
          </div>
        </section>

        <section className="section languageSection">
          <div className="shell languageGrid">
            <div>
              <SectionHeading
                title="Election Translation in 100+ Languages"
                intro="The right election language program depends on the jurisdiction, community, audience, applicable requirements, and communication needs."
                align="left"
              />
              <p>Stepes supports widely used global languages as well as many regional and community languages. Support for Indigenous, Native American, Alaska Native, historically oral, and other less commonly requested languages depends on the language, content type, location, available qualified resources, and required service model.</p>
              <p>For less commonly written or historically oral languages, language-access programs may require specialized approaches that combine community knowledge, oral communication, interpreting, review, and other methods appropriate to the language and audience.</p>
              <TextLink href={links.languages}>View All Translation Languages</TextLink>
            </div>
            <div className="languageCloud">
              {['Spanish', 'Simplified Chinese', 'Traditional Chinese', 'Vietnamese', 'Korean', 'Tagalog / Filipino', 'Arabic', 'Haitian Creole', 'Hindi', 'Bengali', 'Punjabi', 'Gujarati', 'Japanese', 'Khmer', 'Hmong', 'Russian', 'Portuguese', 'Somali'].map((l,i) => <span className={i < 6 ? 'featuredLang' : ''} key={l}>{l}</span>)}
            </div>
          </div>
        </section>

        <section className="section whySection">
          <div className="shell">
            <SectionHeading
              title="Why Election Organizations Choose Stepes"
              intro="Election translation requires more than multilingual word replacement. Organizations need a language partner that can coordinate quality, terminology, production, digital localization, updates, and live communication across languages."
            />
            <div className="whyGrid">
              {[
                ['Election & Government Expertise', 'Support official, legal, administrative, public-facing, digital, and community election content.','building'],
                ['Human-Led Quality', 'Professional linguists and independent review for high-consequence content where linguistic accountability matters most.','users'],
                ['Multilingual Production', 'Move from source content to publication-ready documents, websites, multimedia, and voter-facing deliverables.','type'],
                ['Connected Language Assets', 'Use translation memory and terminology across ballots, guides, websites, forms, signage, training, and support.','layers'],
                ['Scalable Delivery', 'Coordinate multiple languages and content streams in parallel to support fixed schedules and time-sensitive updates.','clock'],
                ['Digital + Print + Live Support', 'Manage documents, publishing, websites, multimedia, and interpreting through one language-services partner.','globe'],
                ['Modern Translation Technology', 'Combine linguists with translation memory, terminology, QA automation, workflows, and governed AI-assisted models.','workflow'],
                ['Enterprise Project Visibility', 'Centralize multilingual projects, reviews, language assets, status, and delivery across stakeholders.','eye'],
              ].map(([t,c,icon]) => <div className="whyItem" key={t}><span><Icon name={icon}/></span><div><h3>{t}</h3><p>{c}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="relatedSection">
          <div className="shell">
            <SectionHeading title="Related Government & Language Services" />
            <div className="relatedList">
              {[
                ['Government Translation Services', 'Professional translation and multilingual content operations for federal, state, county, municipal, and other public-sector organizations.', links.government, 'Government Translation Services'],
                ['Multilingual Desktop Publishing', 'Publication-ready multilingual documents and professionally formatted files across design and office formats.', links.dtp, 'Multilingual Desktop Publishing'],
                ['Website Translation Services', 'Election websites, public information, digital services, portals, and continuously updated web content.', links.website, 'Website Translation Services'],
                ['Interpreting Services', 'Real-time multilingual communication through remote and on-site interpreting.', links.interpreting, 'Interpreting Services'],
                ['Accessibility Services', 'Multilingual content within broader accessible document, digital, multimedia, and user-experience workflows.', links.accessibility, 'Accessibility Services'],
              ].map(([t,c,href,label]) => <div className="relatedRow" key={t}><div><h3>{t}</h3><p>{c}</p></div><TextLink href={href}>{label}</TextLink></div>)}
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="shell faqShell">
            <SectionHeading
              align="left"
              title="Election Translation Services FAQ"
              intro="Practical answers about ballots, Section 203 support, multilingual publishing, websites, urgent updates, interpreting, AI, and language coverage."
            />
            <div className="faqPanel">
              {FAQs.map(([q,a], idx) => <FAQItem key={q} q={q} a={a} open={openFaq === idx} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}/>)}
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="shell ctaInner">
            <div>
              <h2>Prepare Your Multilingual Election Content</h2>
              <p>From ballots and voter guides to election websites, multilingual publishing, rapid content updates, and live language support, Stepes helps election organizations build reliable workflows around their content, languages, deadlines, and review requirements.</p>
            </div>
            <div className="ctaActions">
              <Pill href={links.quote}>Get a Quote</Pill>
              <a className="ctaSecondary" href={links.contact}>Talk to Stepes <Icon name="arrow" size={17}/></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const css = `
  *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0} a{color:inherit}
  .page{font-family:'Inter Tight','Inter',Arial,sans-serif;color:${S.ink};background:${S.white};font-size:16px;line-height:1.58;overflow-x:hidden}
  .shell{width:min(1280px,calc(100% - 112px));margin:0 auto}.section{padding:96px 0}.lightSection{background:#fff}.softSection{background:${S.soft}}
  h1,h2,h3{margin:0;color:${S.ink};font-weight:600;letter-spacing:-.025em} h1{font-size:48px;line-height:1.03;max-width:680px} h2{font-size:36px;line-height:1.12} h3{font-size:24px;line-height:1.22}
  p{font-size:16px;color:${S.body};margin:0 0 18px}.bodyLarge{font-size:18px;line-height:1.58}.eyebrow{font-size:11px!important;line-height:1.2!important;font-weight:600!important;letter-spacing:.16em!important;text-transform:uppercase;color:${S.magenta}!important;margin:0 0 16px!important}
  .headingGroup{margin-bottom:48px}.headingCenter{text-align:center;margin-left:auto;margin-right:auto}.headingCenter h2{max-width:900px;margin-left:auto;margin-right:auto}.sectionIntro{font-size:18px;line-height:1.58;max-width:810px;margin:18px auto 0;color:${S.body}}.headingLeft{text-align:left;margin-left:0}.headingLeft h2{max-width:720px}.headingLeft .sectionIntro{margin:18px 0 0;max-width:720px}.onDark h2{color:white}.onDark .sectionIntro{color:#D7D7DD}.onDark .eyebrow{color:${S.blushText}!important}
  .hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#fff 72%,#FBFBFC 100%)}.heroGrid{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(430px,.94fr);gap:68px;align-items:center}.heroLead{font-size:20px;line-height:1.5;max-width:720px;margin:24px 0 14px}.heroSub{font-size:17px;max-width:690px;color:${S.muted};margin-bottom:30px}.heroActions{display:flex;gap:12px;flex-wrap:wrap}.pill{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 24px;border-radius:999px;background:${S.magenta};border:1px solid ${S.magenta};color:#fff!important;text-decoration:none;font-size:16px;font-weight:600;transition:.2s ease}.pill span,.pill svg{color:#fff!important;stroke:#fff!important}.pill:hover{background:${S.magentaDark};border-color:${S.magentaDark};transform:translateY(-1px)}.pill:focus-visible,.textLink:focus-visible,.ctaSecondary:focus-visible,.faqQuestion:focus-visible{outline:3px solid #F3B6D1;outline-offset:3px}.pill.secondary{background:white;border-color:#D8D8DE;color:${S.ink}!important}.pill.secondary span,.pill.secondary svg{color:${S.ink}!important;stroke:${S.ink}!important}.pill.secondary:hover{border-color:#B7B7BF;background:#FAFAFB}
  .heroArt{height:500px;position:relative}.heroHalo{position:absolute;border-radius:50%;background:${S.blush};filter:none}.haloOne{width:360px;height:360px;right:20px;top:60px}.haloTwo{width:180px;height:180px;left:35px;bottom:20px;background:#F4F4F6}.ballotSheet{position:absolute;z-index:3;right:35px;top:52px;width:300px;height:365px;border:1px solid #D9D9DE;border-radius:22px;background:#fff;box-shadow:0 18px 50px rgba(30,30,40,.10);padding:26px;transform:rotate(2deg)}.sheetHeader{display:flex;justify-content:space-between;gap:10px;font-size:12px;color:${S.muted};font-weight:600}.sheetLang{color:${S.magenta};border:1px solid #E9B7CC;border-radius:999px;padding:2px 8px}.sheetTitle{font-size:21px;font-weight:600;margin:32px 0 25px}.sheetLine{display:grid;grid-template-columns:1fr 56px;gap:12px;margin:15px 0}.sheetLine span{display:block;height:7px;border-radius:10px;background:#E4E4E8}.sheetLine span:last-child{background:#F2D9E5}.sheetChoice{display:flex;gap:9px;align-items:center;margin:19px 0}.sheetChoice>span:last-child{height:8px;width:72%;border-radius:10px;background:#DADAE0}.choiceDot{width:16px!important;height:16px!important;border:2px solid #9A9AA3!important;border-radius:50%;background:transparent!important}.phoneMock{position:absolute;z-index:4;left:22px;top:116px;width:172px;height:310px;border:8px solid #2A2A31;border-radius:29px;background:#fff;box-shadow:0 15px 40px rgba(20,20,30,.15);padding:25px 16px}.phoneTop{position:absolute;top:8px;left:58px;width:40px;height:5px;border-radius:6px;background:#60606A}.phoneLabel{font-size:9px;letter-spacing:.1em;color:${S.magenta};font-weight:600;margin-top:17px}.phoneHeadline{font-size:19px;line-height:1.1;font-weight:600;margin:16px 0}.phoneLine{height:7px;width:72%;background:#E2E2E7;border-radius:5px;margin:11px 0}.phoneLine.wide{width:95%}.phoneButton{font-size:11px;color:#fff;background:${S.magenta};border-radius:999px;padding:8px 10px;text-align:center;margin-top:26px;font-weight:600}.signMock{position:absolute;z-index:5;right:0;bottom:19px;width:208px;padding:17px 17px 15px;border-radius:18px;background:${S.ink};color:#fff;display:grid;grid-template-columns:34px 1fr;align-items:center;box-shadow:0 14px 34px rgba(15,15,20,.17)}.signMock>span{font-weight:600;font-size:16px}.signMock small{grid-column:1/-1;font-size:11px;line-height:1.35;color:#D9D9DF;margin-top:8px}.visualTag{position:absolute;z-index:2;font-size:10px;letter-spacing:.09em;font-weight:600;color:#62626C;background:white;border:1px solid ${S.line};border-radius:999px;padding:7px 11px;box-shadow:0 7px 22px rgba(20,20,30,.06)}.tagA{top:25px;left:120px}.tagB{top:78px;right:1px}.tagC{bottom:62px;left:0}.tagD{top:6px;right:78px}.languageChip{position:absolute;z-index:6;font-weight:600;font-size:12px;background:#fff;border:1px solid #E8C4D4;color:${S.magenta};border-radius:999px;padding:7px 10px;box-shadow:0 8px 18px rgba(30,30,40,.07)}.lang1{right:8px;top:165px}.lang2{left:175px;bottom:9px}.lang3{right:116px;top:31px}
  .proofBand{border-top:1px solid ${S.line};border-bottom:1px solid ${S.line};background:#fff}.proofGrid{display:grid;grid-template-columns:repeat(4,1fr)}.proofItem{padding:28px 28px 30px;border-right:1px solid ${S.line}}.proofItem:first-child{padding-left:0}.proofItem:last-child{border-right:0;padding-right:0}.proofItem h3{font-size:19px;margin-bottom:7px}.proofItem p{font-size:16px;margin:0;color:${S.muted}}
  .journeyWrap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;margin-top:16px}.journeyLine{position:absolute;top:27px;left:12.5%;right:12.5%;height:1px;background:#D7D7DD}.journeyItem{position:relative;padding:0 26px;text-align:center}.journeyIcon{width:54px;height:54px;margin:0 auto 18px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:white;border:1px solid #DCDCE2;color:${S.magenta};position:relative;z-index:2}.journeyStage{font-size:11px;font-weight:600;letter-spacing:.11em;color:${S.magenta};margin-bottom:10px}.journeyItem h3{font-size:23px;margin-bottom:12px}.journeyItem p{margin:0;color:${S.muted}}.centerNote{max-width:850px;margin:46px auto 0;text-align:center;padding-top:26px;border-top:1px solid ${S.line};font-size:17px;color:${S.body}}
  .ecosystemGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.ecosystemPanel{border:1px solid ${S.line};border-radius:26px;padding:34px;background:white}.ecosystemPanel.primaryPanel{background:${S.blush};border-color:#F0CBDD}.iconBox{width:46px;height:46px;border-radius:15px;display:flex;align-items:center;justify-content:center;background:#F4F4F6;color:${S.magenta};margin-bottom:24px}.primaryPanel .iconBox{background:white}.ecosystemPanel h3{font-size:24px;margin-bottom:12px}.ecosystemPanel>p{min-height:76px}.ecosystemPanel ul{list-style:none;margin:24px 0 0;padding:21px 0 0;border-top:1px solid rgba(110,110,120,.18)}.ecosystemPanel li{display:flex;gap:10px;align-items:flex-start;margin:10px 0;color:${S.body};font-size:16px}.miniCheck{display:inline-flex;color:${S.magenta};margin-top:4px}.editorialCallout{margin-top:24px;border-left:3px solid ${S.magenta};padding:17px 22px;background:#FAFAFB;color:${S.body};font-size:16px}
  .contentMatrix{display:grid;grid-template-columns:1fr 1fr;border:1px solid ${S.line};border-radius:28px;overflow:hidden;background:#fff}.contentGroup{padding:38px}.contentGroup:nth-child(odd){border-right:1px solid ${S.line}}.contentGroup:nth-child(-n+2){border-bottom:1px solid ${S.line}}.contentGroupHead{display:flex;gap:14px;align-items:center;margin-bottom:22px}.contentGroupHead h3{font-size:23px}.lineIcon{display:flex;color:${S.magenta}}.twoColList{display:grid;grid-template-columns:1fr 1fr;gap:10px 24px}.plainListItem{font-size:16px;color:${S.body};padding-left:15px;position:relative}.plainListItem:before{content:'';position:absolute;left:0;top:.68em;width:5px;height:5px;border-radius:50%;background:#B6B6BE}
  .accessSection{background:${S.blush}}.accessGrid{display:grid;grid-template-columns:1.02fr .98fr;gap:70px;align-items:center}.accessCopy h2{font-size:36px;margin-bottom:22px;max-width:650px}.accessCopy p{max-width:700px}.complianceNote{display:flex;gap:13px;align-items:flex-start;padding:17px 0;margin:24px 0;border-top:1px solid #E9C6D6;border-bottom:1px solid #E9C6D6;color:${S.burgundy};font-size:16px}.complianceNote svg{flex:0 0 auto;margin-top:3px}.accessFlow{border:1px solid #E9C5D5;background:#fff;border-radius:28px;padding:12px 34px}.accessStep{display:grid;grid-template-columns:48px 1fr;gap:17px;padding:27px 0;border-bottom:1px solid ${S.line}}.accessStep:last-child{border-bottom:0}.accessStep>span{font-size:12px;font-weight:600;color:${S.magenta};letter-spacing:.08em;padding-top:6px}.accessStep h3{font-size:21px;margin-bottom:6px}.accessStep p{margin:0}
  .textLink{display:inline-flex;align-items:center;gap:8px;color:${S.magenta};font-weight:600;text-decoration:none;font-size:16px;min-height:44px}.textLink:hover span{text-decoration:underline;text-underline-offset:3px}.textLink:hover svg{transform:translateX(2px)}.textLink svg{transition:.2s ease}.textLink.inverse{color:#fff}.textLink.inverse svg{stroke:#fff}
  .darkSection{background:#1B1B21}.qualityFlow{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #3C3C45;border-bottom:1px solid #3C3C45}.qualityStep{padding:30px 23px;border-right:1px solid #3C3C45}.qualityStep:last-child{border-right:0}.qualityNum{font-size:11px;letter-spacing:.1em;color:${S.blushText};font-weight:600;margin-bottom:15px}.qualityStep h3{color:#fff;font-size:20px;margin-bottom:11px}.qualityStep p{color:#C8C8D0;margin:0}.darkCallout{max-width:900px;margin:36px auto 0;text-align:center;color:#E6E6EC;font-size:17px}
  .splitEditorial{display:grid;grid-template-columns:.94fr 1.06fr;gap:82px;align-items:center}.termExamples{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;margin:26px 0 18px}.termExamples span{font-size:16px;color:${S.body};padding-left:15px;position:relative}.termExamples span:before{content:'';position:absolute;left:0;top:.69em;width:5px;height:5px;background:${S.magenta};border-radius:50%}.termVisual{height:500px;border:1px solid ${S.line};border-radius:28px;background:radial-gradient(circle at center,${S.blush} 0,${S.blush} 25%,#fff 25.2%,#fff 100%);position:relative;overflow:hidden}.termCore{position:absolute;z-index:4;left:50%;top:50%;transform:translate(-50%,-50%);width:250px;height:170px;border-radius:25px;background:#fff;border:1px solid #E5BCD0;box-shadow:0 14px 36px rgba(30,30,40,.09);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px}.termCoreLabel{font-size:9px;letter-spacing:.11em;color:${S.magenta};font-weight:600}.termCore strong{font-size:23px;margin:7px 0}.termCore small{font-size:12px;line-height:1.4;color:${S.muted}}.termSpokes:before,.termSpokes:after{content:'';position:absolute;background:#D9D9DE}.termSpokes:before{width:70%;height:1px;left:15%;top:50%}.termSpokes:after{width:1px;height:70%;left:50%;top:15%}.termNode{position:absolute;z-index:3;background:#fff;border:1px solid #DDDDE3;border-radius:999px;padding:10px 15px;font-size:13px;font-weight:600;color:#4A4A53;box-shadow:0 8px 20px rgba(20,20,30,.05)}.node1{left:7%;top:13%}.node2{right:6%;top:13%}.node3{left:4%;top:44%}.node4{right:4%;top:44%}.node5{left:7%;bottom:13%}.node6{right:7%;bottom:13%}.node7{left:38%;top:7%}.node8{left:39%;bottom:7%}
  .publishingGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:74px;align-items:center}.publishingVisual{min-width:0}.pubCanvas{border:1px solid #D7D7DE;border-radius:24px;background:#2E2E35;padding:0 0 16px;overflow:hidden;box-shadow:0 18px 45px rgba(25,25,35,.10)}.pubToolbar{height:42px;background:#24242A;display:flex;align-items:center;gap:7px;padding:0 14px;color:#BCBCC3;font-size:12px}.pubToolbar span{width:9px;height:9px;border-radius:50%;background:#686873}.pubToolbar b{font-weight:400;margin-left:9px}.pubWorkarea{display:grid;grid-template-columns:1fr 145px;gap:12px;padding:17px}.pubPages{display:flex;align-items:center;gap:10px;overflow:hidden;min-height:340px;padding-left:8px}.pubPage{width:190px;min-width:190px;height:270px;background:white;padding:23px 19px;box-shadow:0 9px 25px rgba(0,0,0,.24);transform:rotate(-2deg);position:relative}.pubPage.p2{transform:translateY(-9px);z-index:2}.pubPage.p3{transform:rotate(2deg)}.pubPage>span{font-size:10px;font-weight:600;color:${S.magenta};border:1px solid #E8BED0;border-radius:999px;padding:3px 7px}.pubPage>b{display:block;font-size:16px;margin:27px 0 20px}.pubPage>i{display:block;height:6px;border-radius:5px;background:#DCDCE1;margin:11px 0}.pubPage>small{position:absolute;bottom:18px;left:19px;font-size:9px;color:#85858E}.pubSide{background:#393940;border-radius:12px;padding:17px;color:#fff}.pubSide>b{display:block;font-size:12px;margin-bottom:18px}.pubSide>span{display:flex;gap:7px;align-items:center;font-size:11px;color:#D0D0D6;margin:12px 0}.pubSide svg{color:${S.blushText}}.compactRows{margin:27px 0 9px;border-top:1px solid ${S.line}}.compactRow{padding:18px 0;border-bottom:1px solid ${S.line}}.compactRow h3{font-size:19px;margin-bottom:5px}.compactRow p{margin:0}
  .updatesSection{background:#fff}.updateFlow{display:grid;grid-template-columns:repeat(6,1fr);border:1px solid ${S.line};border-radius:26px;padding:0 14px}.updateStep{padding:31px 17px;position:relative}.updateMarker{font-size:11px;color:${S.magenta};font-weight:600;letter-spacing:.1em;margin-bottom:13px}.updateStep h3{font-size:18px;margin-bottom:8px}.updateStep p{font-size:16px;margin:0;color:${S.muted}}.updateArrow{position:absolute;right:-10px;top:32px;color:#A3A3AB;z-index:2}.updateBenefits{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:30px;border-top:1px solid ${S.line};border-bottom:1px solid ${S.line}}.updateBenefits>div{padding:23px 24px;border-right:1px solid ${S.line}}.updateBenefits>div:last-child{border-right:0}.updateBenefits h3{font-size:18px;margin-bottom:6px}.updateBenefits p{margin:0}
  .digitalSection{background:${S.soft}}.digitalGrid{display:grid;grid-template-columns:.92fr 1.08fr;gap:78px;align-items:center}.deviceVisual{height:510px;position:relative}.desktopDevice{position:absolute;left:0;top:35px;width:470px;height:332px;border:8px solid #24242A;border-radius:19px;background:#fff;box-shadow:0 18px 46px rgba(20,20,30,.12);overflow:hidden}.browserBar{height:25px;background:#24242A;padding:7px 9px;display:flex;gap:5px}.browserBar i{width:7px;height:7px;border-radius:50%;background:#6D6D76}.siteHeader{height:57px;padding:19px 22px;font-size:12px;font-weight:600;border-bottom:1px solid ${S.line}}.siteHeader span{float:right;color:${S.magenta}}.siteHero{font-size:29px;font-weight:600;line-height:1.05;padding:42px 28px 29px;width:75%}.siteGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 28px}.siteGrid span{height:58px;border-radius:10px;background:#F1F1F4;border:1px solid #E3E3E8}.mobileDevice{position:absolute;right:8px;bottom:16px;width:178px;height:318px;border:8px solid #24242A;border-radius:30px;background:white;box-shadow:0 15px 40px rgba(20,20,30,.14);padding:31px 14px}.mobileHeader{font-size:10px;color:${S.magenta};font-weight:600;margin-bottom:22px}.mobileDevice b{display:block;font-size:18px;line-height:1.15;margin-bottom:24px}.mobileField{display:block;border:1px solid #DADAE0;border-radius:8px;color:#8B8B94;padding:9px 8px;font-size:11px}.mobileAction{display:block;background:${S.magenta};color:#fff;border-radius:999px;padding:8px;text-align:center;font-size:11px;font-weight:600;margin-top:11px}.accessBadge{position:absolute;left:26px;bottom:52px;background:white;border:1px solid ${S.line};border-radius:999px;padding:10px 15px;display:flex;gap:8px;align-items:center;font-size:12px;font-weight:600;color:#51515A;box-shadow:0 9px 23px rgba(20,20,30,.08)}.accessBadge svg{color:${S.magenta}}.digitalRows{border-top:1px solid ${S.line};margin-top:28px}.digitalRow{display:grid;grid-template-columns:40px 1fr;gap:12px;padding:18px 0;border-bottom:1px solid ${S.line}}.digitalIcon{color:${S.magenta};padding-top:3px}.digitalRow h3{font-size:19px;margin-bottom:5px}.digitalRow p{margin:0}.fineBoundary{font-size:16px;color:${S.muted};padding:17px 0 3px}.inlineLinks{display:flex;gap:24px;flex-wrap:wrap}
  .interpretingSection{background:#fff}.interpretModes{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid ${S.line};border-bottom:1px solid ${S.line}}.interpretMode{display:grid;grid-template-columns:50px 1fr;gap:16px;align-items:start;padding:30px 32px;border-right:1px solid ${S.line}}.interpretMode:first-child{padding-left:0}.interpretMode:last-child{border-right:0;padding-right:0}.interpretIcon{width:44px;height:44px;border-radius:14px;background:${S.blush};color:${S.magenta};display:flex;align-items:center;justify-content:center}.interpretMode h3{font-size:20px;margin-bottom:7px}.interpretMode p{margin:0;color:${S.muted}}.interpretUseBand{display:grid;grid-template-columns:1fr 1fr;margin-top:30px;border:1px solid #EBC8D8;border-radius:24px;overflow:hidden;background:#fff}.interpretUse{display:grid;grid-template-columns:50px 1fr;gap:16px;padding:28px 30px;align-items:start}.interpretUse:first-child{border-right:1px solid #EBC8D8}.interpretUse.electionDayUse{background:${S.blush}}.interpretUseIcon{width:44px;height:44px;border-radius:14px;background:#fff;border:1px solid #ECD0DC;color:${S.magenta};display:flex;align-items:center;justify-content:center}.interpretUse h3{font-size:20px;margin-bottom:7px}.interpretUse p{margin:0;max-width:500px}.interpretFooter{display:flex;justify-content:space-between;align-items:center;gap:32px;margin-top:22px}.interpretNote{margin:0;max-width:760px;color:${S.muted}}.interpretFooter .textLink{flex:0 0 auto}
  .campaignSection{background:#FFFAFC}.campaignGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:82px;align-items:start}.campaignGrid h2{margin-bottom:22px}.campaignList{border-top:1px solid #E9DCE2}.campaignRow{display:grid;grid-template-columns:250px 1fr;gap:24px;padding:20px 0;border-bottom:1px solid #E9DCE2}.campaignRow h3{font-size:19px}.campaignRow p{margin:0}
  .workflowModelSection{background:#fff}.riskGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.riskPanel{border:1px solid ${S.line};border-radius:26px;padding:32px;background:#fff}.riskPanel.riskHigh{border-color:#E7B7CC;background:${S.blush}}.riskLabel{display:block;font-size:10px;letter-spacing:.12em;color:${S.magenta};font-weight:600;margin-bottom:15px}.riskPanel h3{font-size:22px;margin-bottom:13px}.riskPanel p{min-height:126px}.riskPanel ul{margin:22px 0 0;padding:19px 0 0 19px;border-top:1px solid rgba(100,100,110,.17)}.riskPanel li{font-size:16px;color:${S.body};margin:8px 0}.modelPrinciple{max-width:900px;margin:32px auto 0;text-align:center;font-size:18px;color:${S.ink};font-weight:600}
  .qualitySection{background:${S.soft}}.qualityGrid{display:grid;grid-template-columns:1fr .9fr;gap:76px;align-items:center}.qualityCapabilities{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;border-top:1px solid ${S.line}}.qualityCapability{display:grid;grid-template-columns:30px 1fr;gap:10px;padding:18px 0;border-bottom:1px solid ${S.line}}.qualityCapability>span{color:${S.magenta};padding-top:3px}.qualityCapability h3{font-size:18px;margin-bottom:5px}.qualityCapability p{margin:0}.portalMock{border:1px solid #D9D9E0;border-radius:25px;background:white;box-shadow:0 16px 38px rgba(25,25,35,.08);overflow:hidden}.portalHead{padding:24px;display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid ${S.line}}.portalHead>div span{display:block;font-size:9px;letter-spacing:.11em;color:${S.magenta};font-weight:600}.portalHead>div b{display:block;font-size:20px;margin-top:5px}.statusPill{align-self:center;font-size:11px;font-weight:600;background:#F4F4F6;border-radius:999px;padding:6px 10px}.portalMeta{display:flex;gap:24px;padding:14px 24px;border-bottom:1px solid ${S.line};color:${S.muted};font-size:12px}.portalRow{padding:17px 24px;border-bottom:1px solid ${S.line}}.portalTop{display:flex;justify-content:space-between;gap:15px;margin-bottom:12px}.portalTop span{display:flex;gap:8px;align-items:center}.portalTop b{font-size:13px}.portalTop small{font-size:11px;color:${S.muted}}.portalTop em{font-size:10px;font-style:normal;color:${S.magenta};font-weight:600}.progressTrack{height:5px;border-radius:9px;background:#EFEFF2;overflow:hidden}.progressTrack i{display:block;height:100%;background:${S.magenta};border-radius:9px}.portalFooter{display:flex;gap:8px;align-items:center;padding:16px 24px;color:${S.muted};font-size:11px}.portalFooter svg{color:${S.magenta}}.portalLink{margin-top:20px;text-align:right}
  .processSection{background:#fff}.processList{max-width:980px;margin:0 auto;border-top:1px solid ${S.line}}.processRow{display:grid;grid-template-columns:88px 1fr;gap:26px;padding:23px 0;border-bottom:1px solid ${S.line};align-items:start}.processNum{font-size:12px;letter-spacing:.1em;color:${S.magenta};font-weight:600;padding-top:4px}.processRow h3{font-size:20px;margin-bottom:6px}.processRow p{margin:0;max-width:820px}.processFooter{max-width:850px;margin:32px auto 0;text-align:center;font-size:17px;color:${S.body}}
  .languageSection{background:${S.blush}}.languageGrid{display:grid;grid-template-columns:.92fr 1.08fr;gap:70px;align-items:center}.languageCloud{display:flex;gap:10px;flex-wrap:wrap;align-content:center;padding:32px;background:white;border:1px solid #EBC8D8;border-radius:28px}.languageCloud span{font-size:16px;border:1px solid ${S.line};border-radius:999px;padding:9px 13px;color:#4A4A52;background:#FAFAFB}.languageCloud span.featuredLang{border-color:#E8B9CD;background:${S.blush};color:${S.burgundy};font-weight:600}
  .whySection{background:#fff}.whyGrid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${S.line}}.whyItem{display:grid;grid-template-columns:48px 1fr;gap:14px;padding:24px 28px 24px 0;border-bottom:1px solid ${S.line}}.whyItem:nth-child(odd){border-right:1px solid ${S.line};padding-right:38px}.whyItem:nth-child(even){padding-left:38px}.whyItem>span{color:${S.magenta};padding-top:2px}.whyItem h3{font-size:20px;margin-bottom:6px}.whyItem p{margin:0}
  .relatedSection{padding:82px 0;background:#F8F8FA}.relatedList{max-width:1040px;margin:0 auto;border-top:1px solid ${S.line}}.relatedRow{display:grid;grid-template-columns:1fr 260px;gap:36px;align-items:center;padding:24px 0;border-bottom:1px solid ${S.line}}.relatedRow h3{font-size:20px;margin-bottom:5px}.relatedRow p{margin:0;max-width:720px}.relatedRow .textLink{justify-content:flex-end}
  .faqSection{background:#fff}.faqShell{max-width:1120px}.faqPanel{border:1px solid ${S.line};border-radius:28px;overflow:hidden}.faqItem{border-bottom:1px solid ${S.line}}.faqItem:last-child{border-bottom:0}.faqQuestion{width:100%;border:0;background:#fff;padding:23px 26px;display:flex;justify-content:space-between;gap:24px;align-items:center;text-align:left;font-family:inherit;font-size:18px;font-weight:600;color:${S.ink};cursor:pointer}.faqQuestion:hover{background:#FBFBFC}.faqIcon{display:flex;color:${S.magenta};flex:0 0 auto}.faqAnswer{padding:0 26px 23px;background:#fff}.faqAnswer p{margin:0;max-width:840px;font-size:16px}
  .finalCta{padding:78px 0;background:${S.blush};color:${S.ink};border-top:1px solid #EBC8D8}.ctaInner{display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center}.finalCta h2{color:${S.ink};max-width:700px}.finalCta p{color:${S.body};max-width:780px;margin:16px 0 0;font-size:18px}.ctaActions{display:flex;gap:12px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.ctaSecondary{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:0 10px;color:${S.ink};text-decoration:none;font-weight:600}.ctaSecondary svg{stroke:${S.magenta}}.ctaSecondary:hover{color:${S.magenta}}
  @media (max-width:1100px){.shell{width:min(1280px,calc(100% - 80px))}.heroGrid{grid-template-columns:1fr .9fr;gap:36px}.heroArt{transform:scale(.91);transform-origin:center right}.qualityFlow{grid-template-columns:repeat(2,1fr)}.qualityStep{border-bottom:1px solid #3C3C45}.qualityStep:nth-child(2n){border-right:0}.qualityStep:last-child{grid-column:1/-1;border-right:0;border-bottom:0}.updateFlow{grid-template-columns:repeat(3,1fr)}.updateStep{border-bottom:1px solid ${S.line}}.updateStep:nth-child(n+4){border-bottom:0}.updateArrow{display:none}.qualityGrid,.publishingGrid,.digitalGrid{gap:44px}.desktopDevice{width:410px}.campaignGrid{gap:50px}}
  @media (max-width:900px){.shell{width:calc(100% - 48px)}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}.hero{padding:88px 0}.heroGrid{grid-template-columns:1fr}.heroCopy{text-align:center}.heroCopy h1,.heroLead,.heroSub{margin-left:auto;margin-right:auto}.heroActions{justify-content:center}.heroArt{transform:none;max-width:600px;width:100%;margin:0 auto;height:470px}.proofGrid{grid-template-columns:1fr 1fr}.proofItem{padding:23px!important;border-right:1px solid ${S.line};border-bottom:1px solid ${S.line}}.proofItem:nth-child(2){border-right:0}.proofItem:nth-child(n+3){border-bottom:0}.journeyWrap{grid-template-columns:1fr 1fr;gap:40px 0}.journeyLine{display:none}.ecosystemGrid{grid-template-columns:1fr}.ecosystemPanel>p{min-height:0}.contentMatrix{grid-template-columns:1fr}.contentGroup:nth-child(odd){border-right:0}.contentGroup{border-bottom:1px solid ${S.line}!important}.contentGroup:last-child{border-bottom:0!important}.accessGrid,.splitEditorial,.publishingGrid,.digitalGrid,.qualityGrid,.languageGrid,.campaignGrid{grid-template-columns:1fr}.accessGrid,.splitEditorial,.publishingGrid,.digitalGrid,.qualityGrid,.languageGrid,.campaignGrid{gap:52px}.accessCopy{text-align:center}.accessCopy h2,.accessCopy p{margin-left:auto;margin-right:auto}.accessCopy p:not(.bodyLarge){text-align:left}.accessCopy .complianceNote{text-align:left}.accessCopy .textLink{justify-content:center}.headingLeft.stackCenter,.headingLeft{ }.terminologySplit>.termVisual{order:2}.publishingGrid>.publishingVisual{order:2}.digitalGrid>.deviceVisual{order:2}.qualityGrid>.portalMock{order:2}.qualityGrid>.portalLink{order:3}.campaignGrid>div:first-child{text-align:center}.campaignGrid>div:first-child p{max-width:760px;margin-left:auto;margin-right:auto}.campaignGrid>div:first-child p:not(.bodyLarge){text-align:left}.campaignGrid>div:first-child .textLink{justify-content:center}.qualityFlow{grid-template-columns:1fr}.qualityStep,.qualityStep:nth-child(3),.qualityStep:nth-child(4){border-right:0;border-bottom:1px solid #3C3C45;grid-column:auto}.qualityStep:last-child{border-bottom:0}.updateBenefits{grid-template-columns:1fr 1fr}.updateBenefits>div:nth-child(2){border-right:0}.updateBenefits>div:nth-child(-n+2){border-bottom:1px solid ${S.line}}.interpretMode{padding:26px 24px}.interpretMode:first-child{padding-left:0}.interpretMode:last-child{padding-right:0}.interpretUse{padding:25px 24px}.interpretFooter{align-items:flex-start}.riskGrid{grid-template-columns:1fr}.riskPanel p{min-height:0}.processRow{grid-template-columns:70px 1fr}.whyGrid{grid-template-columns:1fr}.whyItem,.whyItem:nth-child(odd),.whyItem:nth-child(even){border-right:0;padding-left:0;padding-right:0}.ctaInner{grid-template-columns:1fr;text-align:center}.finalCta p{margin-left:auto;margin-right:auto}.ctaActions{justify-content:center}.portalLink{text-align:center}.terminologySplit .headingLeft,.publishingGrid .headingLeft,.digitalGrid .headingLeft,.languageGrid .headingLeft{text-align:center;margin-left:auto;margin-right:auto}.terminologySplit .headingLeft h2,.terminologySplit .headingLeft .sectionIntro,.publishingGrid .headingLeft h2,.publishingGrid .headingLeft .sectionIntro,.digitalGrid .headingLeft h2,.digitalGrid .headingLeft .sectionIntro,.languageGrid .headingLeft h2,.languageGrid .headingLeft .sectionIntro{margin-left:auto;margin-right:auto}.terminologySplit>.headingLeft~p,.publishingGrid .headingLeft~p,.digitalGrid .headingLeft~p,.languageGrid .headingLeft~p{text-align:left}}
  @media (max-width:820px){.interpretModes{grid-template-columns:1fr}.interpretMode{grid-template-columns:50px 1fr;gap:14px;padding:24px 0!important;border-right:0;border-bottom:1px solid ${S.line}}.interpretMode:last-child{border-bottom:0}.interpretUseBand{grid-template-columns:1fr}.interpretUse:first-child{border-right:0;border-bottom:1px solid #EBC8D8}}
  @media (max-width:767px){.shell{width:calc(100% - 40px)}.section{padding:68px 0}.hero{padding:72px 0 64px}h1{font-size:38px;line-height:1.06}h2{font-size:30px}.heroLead{font-size:18px}.heroSub{font-size:16px}.heroActions{flex-direction:column}.heroActions .pill{width:100%}.heroArt{height:430px;transform:scale(.88);transform-origin:top center;margin-bottom:-45px}.headingGroup{margin-bottom:38px}.headingCenter{text-align:center}.headingLeft{text-align:center}.headingLeft h2,.headingLeft .sectionIntro{margin-left:auto;margin-right:auto}.headingLeft .sectionIntro{margin-top:16px}.headingLeft + p,.headingLeft~p{text-align:left}.updatesSection .headingGroup,.processSection .headingGroup,.qualitySection .headingLeft,.faqSection .headingLeft,.darkSection .headingGroup{text-align:left}.updatesSection .headingGroup h2,.updatesSection .headingGroup .sectionIntro,.processSection .headingGroup h2,.processSection .headingGroup .sectionIntro,.qualitySection .headingLeft h2,.qualitySection .headingLeft .sectionIntro,.faqSection .headingLeft h2,.faqSection .headingLeft .sectionIntro,.darkSection .headingGroup h2,.darkSection .headingGroup .sectionIntro{margin-left:0;margin-right:0}.proofGrid{grid-template-columns:1fr}.proofItem{border-right:0!important;border-bottom:1px solid ${S.line}!important;text-align:center}.proofItem:last-child{border-bottom:0!important}.journeyWrap{grid-template-columns:1fr;gap:34px}.journeyItem{padding:0 8px}.centerNote{text-align:left}.twoColList{grid-template-columns:1fr}.contentGroup{padding:27px 22px}.accessCopy{text-align:center}.accessCopy p:not(.bodyLarge){text-align:left}.accessCopy .bodyLarge{text-align:center}.accessFlow{padding:8px 21px}.accessStep{grid-template-columns:42px 1fr}.qualityFlow{margin-left:-20px;margin-right:-20px;border-left:0;border-right:0}.qualityStep{padding:24px 20px}.darkCallout{text-align:left}.termExamples{grid-template-columns:1fr}.termVisual{height:auto;padding:22px;background:${S.blush};overflow:visible}.termCore{position:relative;left:auto;top:auto;transform:none;width:100%;height:auto;min-height:150px;margin:0 0 16px}.termSpokes{display:grid;grid-template-columns:1fr 1fr;gap:9px}.termSpokes:before,.termSpokes:after{display:none}.termNode,.node1,.node2,.node3,.node4,.node5,.node6,.node7,.node8{position:static;font-size:16px;padding:9px 10px;text-align:center;box-shadow:none}.pubWorkarea{grid-template-columns:1fr}.pubSide{display:grid;grid-template-columns:repeat(2,1fr);gap:4px 10px}.pubPages{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;min-height:250px;overflow:hidden;padding-left:0}.pubPage{width:auto;min-width:0;height:225px;padding:18px 12px}.pubPage>b{font-size:14px;margin:22px 0 16px}.pubPage>small{left:12px;bottom:14px}.updateFlow{grid-template-columns:1fr;padding:0}.updateStep{padding:24px 22px;border-bottom:1px solid ${S.line}!important}.updateStep:last-child{border-bottom:0!important}.updateBenefits{grid-template-columns:1fr}.updateBenefits>div{border-right:0!important;border-bottom:1px solid ${S.line}}.updateBenefits>div:last-child{border-bottom:0}.deviceVisual{height:430px;transform:scale(.84);transform-origin:top left;width:118%;margin-bottom:-50px}.digitalRow{grid-template-columns:34px 1fr}.inlineLinks{display:block}.inlineLinks .textLink{display:flex}.interpretModes{grid-template-columns:1fr}.interpretMode{grid-template-columns:48px 1fr;gap:12px;padding:22px 0!important;border-right:0;border-bottom:1px solid ${S.line}}.interpretMode:last-child{border-bottom:0}.interpretIcon{width:40px;height:40px}.interpretUseBand{grid-template-columns:1fr}.interpretUse{grid-template-columns:48px 1fr;gap:12px;padding:23px 20px}.interpretUse:first-child{border-right:0;border-bottom:1px solid #EBC8D8}.interpretUseIcon{width:40px;height:40px}.interpretFooter{display:block}.interpretFooter .textLink{margin-top:12px}.campaignRow{grid-template-columns:1fr;gap:6px}.campaignList{margin-top:0}.riskPanel{padding:26px 22px}.qualityCapabilities{grid-template-columns:1fr}.portalMock{border-radius:20px}.portalHead{padding:20px}.portalMeta{gap:14px;padding:12px 20px}.portalRow{padding:16px 20px}.processRow{grid-template-columns:48px 1fr;gap:12px;padding:20px 0}.languageCloud{padding:22px}.languageCloud span{font-size:16px}.whyItem{grid-template-columns:40px 1fr}.relatedRow{grid-template-columns:1fr;gap:8px}.relatedRow .textLink{justify-content:flex-start}.faqQuestion{padding:21px 20px;font-size:17px}.faqAnswer{padding:0 20px 22px}.finalCta{padding:66px 0}.ctaActions{flex-direction:column}.ctaActions .pill,.ctaSecondary{width:100%;justify-content:center}.finalCta p{font-size:17px}}
  @media (max-width:390px){.heroArt{height:355px;transform:none;width:100%;margin:0}.heroHalo,.visualTag,.languageChip,.signMock{display:none}.ballotSheet{right:0;top:22px;width:245px;height:305px;padding:21px}.sheetTitle{font-size:18px;margin:24px 0 18px}.sheetLine{margin:11px 0}.sheetChoice{margin:14px 0}.phoneMock{left:0;top:66px;width:145px;height:262px;padding:22px 13px}.phoneTop{left:47px}.phoneHeadline{font-size:17px}.deviceVisual{height:330px;transform:none;width:100%;margin:0}.desktopDevice,.accessBadge{display:none}.mobileDevice{position:relative;right:auto;bottom:auto;top:0;margin:0 auto}.pubPages{grid-template-columns:1fr 1fr}.pubPage.p3{display:none}.contentGroupHead{align-items:flex-start}.contentGroupHead h3{font-size:21px}.portalMeta{flex-wrap:wrap}.faqQuestion{font-size:16px}}
  @media (max-width:320px){.shell{width:calc(100% - 40px)}h1{font-size:36px}.ballotSheet{width:225px;height:292px;padding:18px}.phoneMock{width:132px;height:248px;top:72px;padding:21px 11px}.phoneTop{left:41px}.phoneHeadline{font-size:16px}.termSpokes{grid-template-columns:1fr}.languageCloud span{font-size:16px;padding:8px 10px}.portalHead{display:block}.statusPill{display:inline-block;margin-top:12px}.processRow{grid-template-columns:38px 1fr;gap:10px}.pubSide{grid-template-columns:1fr}}
`;
