import React from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";

const audienceItems = [
  { icon: "church", title: "Churches & Congregations", text: "Support multilingual members, visitors, families, and communities with translated sermons, bulletins, devotionals, websites, announcements, videos, educational content, and other church communications." },
  { icon: "network", title: "Denominations, Dioceses & Religious Networks", text: "Coordinate multilingual content across congregations, regions, departments, ministries, and international programs while maintaining approved terminology and institutional consistency." },
  { icon: "globe", title: "Mission & Outreach Organizations", text: "Translate missionary resources, outreach materials, training, community programs, fundraising communications, field content, and resources for diverse linguistic and cultural communities." },
  { icon: "book", title: "Religious Publishers", text: "Publish books, devotionals, study guides, curricula, magazines, newsletters, and theological works in multiple languages with professional translation, editorial review, and multilingual production support." },
  { icon: "school", title: "Seminaries & Theological Institutions", text: "Translate course materials, theological resources, research, lectures, training, eLearning, student communications, and academic content for multilingual learning communities." },
  { icon: "heart", title: "Faith-Based Nonprofits", text: "Communicate with donors, program participants, volunteers, employees, partners, and communities through translated outreach, training, fundraising, program, and organizational materials." },
  { icon: "media", title: "Religious Media Organizations", text: "Localize video, podcasts, livestream content, subtitles, captions, voiceover, websites, and digital media for audiences who consume religious content across platforms." },
  { icon: "people", title: "Religious & Spiritual Communities", text: "Support religious organizations across traditions with culturally sensitive workflows tailored to their terminology, source materials, institutional preferences, and intended audiences." }
];

const ecosystemItems = [
  ["Worship & Teaching", "Sermons, sermon notes, liturgy, devotionals, prayers, Bible studies, worship resources, small-group content, and supporting ministry materials."],
  ["Religious Education", "Sunday school materials, catechetical resources, discipleship programs, curricula, theological training, presentations, and digital learning."],
  ["Websites & Digital Experiences", "Church websites, ministry websites, member portals, mobile applications, landing pages, forms, resource libraries, and continuously updated digital content."],
  ["Publications", "Religious books, magazines, newsletters, journals, study guides, devotionals, educational publications, brochures, and downloadable resources."],
  ["Ministry & Outreach", "Missionary programs, community outreach, evangelism, humanitarian initiatives, international ministries, volunteer programs, and local multilingual engagement."],
  ["Member Communications", "Pastoral messages, announcements, newsletters, email campaigns, event communications, membership information, policies, and administrative materials."],
  ["Video, Audio & Multimedia", "Sermons, teaching videos, interviews, documentaries, podcasts, recorded presentations, social video, subtitles, captions, graphics, and voice content."],
  ["Events & Conferences", "Translated materials and professional interpreting for conferences, conventions, retreats, training programs, meetings, and live or hybrid events."],
  ["Organizational Content", "HR materials, policies, training, reports, financial communications, governance documents, volunteer resources, and internal operations content."],
  ["Fundraising & Donor Communications", "Multilingual appeals, donor communications, stewardship materials, campaign content, annual reports, program updates, and impact stories."]
];

const christianTopics = [
  "Sermons and sermon notes",
  "Bible-study and discipleship resources",
  "Christian books and devotionals",
  "Religious education and curricula",
  "Church websites and digital content",
  "Mission and outreach materials",
  "Liturgical and worship content",
  "Conferences, training, video, and podcasts"
];

const terminologyItems = [
  { icon: "check", title: "Approved Terminology", text: "Establish preferred translations for important theological, institutional, and ministry terms before they are repeated across projects." },
  { icon: "memory", title: "Translation Memory", text: "Preserve previously approved translations so recurring language can be reused when appropriate and reviewed in context when content changes.", link: ["Explore Translation Memory", "https://www.stepes.com/translation-memory/"] },
  { icon: "pen", title: "Style Guidance", text: "Define tone, capitalization, punctuation, names, titles, Scripture references, abbreviations, inclusive language, and regional usage." },
  { icon: "files", title: "Reference Materials", text: "Use existing publications, approved translations, denominational materials, terminology lists, ministry resources, and previous projects as linguistic context." },
  { icon: "review", title: "Reviewer Feedback", text: "Preserve approved decisions from pastors, theologians, editors, or other authorized reviewers so future work starts with established knowledge." }
];

const channels = [
  { icon: "document", title: "Written", text: "Books, sermons, devotionals, curricula, church bulletins, newsletters, reports, training, policies, brochures, study guides, and other documents.", link: ["Professional Document Translation", "https://www.stepes.com/document-translation-services/"] },
  { icon: "browser", title: "Digital", text: "Websites, mobile content, member portals, forms, online resource libraries, digital learning, and continuously updated web content.", link: ["Website Translation Services", "https://www.stepes.com/website-translation-services/"] },
  { icon: "play", title: "Recorded", text: "Sermons, videos, podcasts, interviews, training, subtitles, captions, narration, and multilingual voice content.", link: ["Video Translation Services", "https://www.stepes.com/video-translation-services/"] },
  { icon: "mic", title: "Live", text: "Scheduled worship services, meetings, conferences, events, consultations, training, and other spoken communication with professional interpreting.", link: ["Interpreting Services", "https://www.stepes.com/interpretation-services/"] }
];

const aiItems = [
  { title: "AI-Enabled Efficiency", text: "AI-assisted translation can accelerate recurring or operational content where speed, scale, and cost efficiency are important, with professional review focused where language requires correction, adaptation, or greater nuance." },
  { title: "Professional Translation for Nuanced Content", text: "Sermons, theology, devotionals, published materials, religious education, liturgical content, and other sensitive materials can be assigned to professional linguists who understand the language, audience, and subject matter." },
  { title: "Additional Review for High-Value Content", text: "Publication-ready or especially sensitive materials can receive additional linguistic review, terminology validation, and quality controls appropriate to the project." },
  { title: "Your Reviewers Stay in the Process", text: "Pastors, theologians, editors, denominational reviewers, and other authorized stakeholders can approve terminology or content, with approved decisions carried into future work." }
];

const recurringItems = [
  ["Weekly", "Sermons, bulletins, worship resources, video, member communications"],
  ["Monthly", "Newsletters, ministry updates, donor communications, training, events"],
  ["Ongoing", "Websites, resource libraries, curricula, publishing programs, global ministry content"]
];

const mediaItems = [
  ["Sermon Translation", "Manuscripts, outlines, notes, presentation content, transcripts, discussion guides, and related teaching resources."],
  ["Transcription", "Convert recorded sermons, lectures, interviews, and teaching content into editable text for translation, review, or reuse."],
  ["Subtitles & Captions", "Create multilingual subtitles and captions for sermons, teaching videos, recorded worship content, interviews, conferences, and online ministry."],
  ["Multilingual Voice", "Produce translated voiceover and localized audio options for audiences who prefer to listen rather than read."],
  ["On-Screen Content", "Translate titles, lower thirds, slides, quotations, Scripture references, diagrams, callouts, graphics, and other visible text."],
  ["Reusable Multilingual Content", "Extend approved sermon language into study materials, articles, social content, descriptions, transcripts, podcasts, and future teaching resources."]
];

const languageItems = ["Spanish", "French", "Portuguese", "Chinese (Simplified & Traditional)", "Korean", "Vietnamese", "Arabic", "Hebrew", "Persian (Farsi)", "Amharic", "Hindi", "Urdu", "Tagalog", "German", "Italian", "Polish", "Ukrainian", "Swahili", "Japanese"];

const qualityItems = [
  ["Professional Linguist Matching", "Linguists can be selected according to language, regional variety, subject matter, content type, audience, and project requirements rather than language pair alone."],
  ["Subject & Context Awareness", "Project instructions, terminology, existing publications, style guidance, Scripture preferences, and reference materials help linguists understand the context behind the words."],
  ["Independent Review", "High-value, sensitive, or publication-ready content can receive additional professional review when the project requires a higher level of linguistic validation."],
  ["Terminology Validation", "Approved terms can be managed systematically so theological and institutional language remains consistent across projects."],
  ["Translation Memory", "Previously approved translations can be reused and reviewed in context, improving continuity across recurring content."],
  ["Automated Quality Checks", "Technology can help identify omissions, inconsistent terminology, number errors, formatting problems, punctuation issues, and other potential defects for professional review."],
  ["Client Approval", "Pastors, theologians, editors, ministry leaders, or other authorized reviewers can remain part of the process when institutional or theological approval is required."]
];

const whyItems = [
  ["Religious Content Expertise", "Translation workflows designed around meaning, terminology, audience, cultural context, and institutional preferences."],
  ["Professional Human Expertise", "Experienced linguists provide the judgment needed for nuanced, theological, pastoral, educational, and publication-ready content."],
  ["AI-Enabled Efficiency", "Modern language technology improves speed, scalability, and workflow efficiency where appropriate without replacing professional judgment where it matters."],
  ["Terminology Governance", "Multilingual glossaries, translation memory, style guidance, and reviewer decisions keep approved language consistent over time."],
  ["Complete Content Support", "Coordinate documents, websites, eLearning, video, audio, multilingual publishing, and interpreting through one language partner."],
  ["100+ Languages", "Support multilingual congregations, international ministries, global publishing, and faith-based programs across major languages and regional variants."]
];

const faqs = [
  ["What types of religious content does Stepes translate?", "Stepes translates church and religious content including sermons, devotionals, religious books, Bible-study materials, curricula, church websites, ministry communications, newsletters, publications, videos, subtitles, podcasts, eLearning, outreach materials, donor communications, policies, training, and other faith-based content. We support one-time projects as well as recurring multilingual content programs."],
  ["Does Stepes provide church translation services?", "Yes. Stepes provides professional church translation services for congregations, ministries, denominations, dioceses, religious networks, Christian publishers, seminaries, mission organizations, and other faith-based organizations. Services can include written translation, website localization, multimedia translation, multilingual publishing, eLearning localization, and professional interpreting."],
  ["Do you provide Christian translation services?", "Yes. Stepes translates Christian content including sermons, books, devotionals, Bible-study resources, discipleship materials, religious education, ministry websites, outreach materials, church communications, liturgical content, videos, podcasts, and other Christian resources. We can follow your approved theological terminology, denominational language, Scripture preferences, style guidance, and existing translations."],
  ["Can Stepes translate sermons and sermon notes?", "Yes. Stepes provides sermon translation for manuscripts, outlines, notes, presentation slides, transcripts, study materials, discussion guides, and supporting resources. Recorded sermons can also be transcribed and localized with multilingual subtitles, captions, on-screen text, and voice content."],
  ["Can you translate Bible verses in sermons and religious materials?", "Yes. When a recognized target-language Bible edition is preferred, the best approach is often to use the corresponding published passage from that edition rather than independently retranslating the English quotation. Stepes can follow client-specified Bible translations, Scripture references, existing religious publications, denominational sources, and other approved reference materials."],
  ["How does Stepes handle theological and denominational terminology?", "Stepes can create or use approved multilingual terminology for theological concepts, ministry names, institutional language, titles, liturgical terms, Scripture-related language, and other important vocabulary. Translation memory, terminology databases, style guidance, reference content, and approved reviewer feedback can help maintain consistency across future projects."],
  ["Can our pastors or theological reviewers participate in the translation process?", "Yes. For content requiring organizational or theological approval, Stepes can incorporate designated reviewers into the workflow. Approved terminology and translation decisions can also be preserved for future projects, helping reduce repeated review and improve consistency over time."],
  ["Does Stepes use AI for religious translation?", "Stepes can use AI-enabled translation workflows where they provide appropriate advantages in speed, scale, or cost efficiency. Religious content varies greatly in sensitivity and complexity, so doctrinal, theological, pastoral, published, liturgical, and other nuanced content may require professional human translation, additional review, client approval, or a combination of these controls."],
  ["Can you translate church websites and mobile content?", "Yes. Stepes provides website translation and localization for churches, ministries, publishers, and other religious organizations. We can translate visible website copy as well as navigation, calls to action, forms, metadata, resource libraries, downloadable content, multimedia, and other elements of the digital experience."],
  ["Can Stepes translate religious videos, sermons, and podcasts?", "Yes. Stepes provides video and multimedia localization including transcription, translation, subtitles, captions, on-screen text, and multilingual voice solutions for recorded sermons, ministry videos, interviews, training, educational programs, conferences, social video, and other religious media."],
  ["Does Stepes provide interpreting for religious organizations?", "Yes. Stepes provides professional interpreting services for multilingual meetings, conferences, training, community programs, consultations, events, and other live communication. Remote phone and video interpreting are available for many use cases, with additional interpreting options depending on the event and project requirements."],
  ["Can Stepes support weekly or recurring church translation?", "Yes. Recurring programs can use consistent linguistic teams, translation memory, approved terminology, project instructions, and repeatable workflows to make weekly, monthly, and ongoing translation more efficient and consistent. This is especially useful for sermons, newsletters, websites, video, teaching resources, and member communications."],
  ["What languages does Stepes support?", "Stepes supports professional translation across more than 100 languages and regional variants, including Spanish, French, Portuguese, Chinese, Korean, Japanese, Vietnamese, Arabic, Hebrew, Persian, Amharic, Hindi, Urdu, Tagalog, German, Italian, Polish, Ukrainian, Russian, Swahili, and many more."],
  ["How much do religious translation services cost?", "Pricing depends on source and target languages, word count, content complexity, file format, review level, formatting, multimedia production, language assets, and turnaround requirements. Recurring or repetitive content may also benefit from translation memory and other workflow efficiencies."],
  ["How quickly can Stepes complete a church translation project?", "Turnaround depends on content volume and complexity, language combination, number of target languages, review requirements, file format, multimedia needs, and delivery schedule. Stepes can assess your project and recommend a workflow and timeline appropriate to the content."]
];

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const shapes = {
    church: <><path d="M4 21h16"/><path d="M6 21V10l6-4 6 4v11"/><path d="M9 21v-6h6v6"/><path d="M12 6V2"/><path d="M10 4h4"/></>,
    network: <><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.5 7 6.5 15.5M13.5 7l4 8.5M7.5 18h9"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"/></>,
    school: <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c2.8 2 7.2 2 10 0v-5"/><path d="M21 9v6"/></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></>,
    media: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 20"/></>,
    check: <><path d="m4 12 5 5L20 6"/></>,
    memory: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/></>,
    pen: <><path d="m4 20 4.5-1L19 8.5a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z"/><path d="m14.5 7 3 3"/></>,
    files: <><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v5h5"/><path d="M4 7v14h11"/></>,
    review: <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4M8.5 11l1.7 1.7 3.4-3.5"/></>,
    document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    browser: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"/></>,
    quote: <><path d="M7 8H4v5h4v-3c0-3 2-5 4-6M18 8h-3v5h4v-3c0-3 2-5 3-6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    headphones: <><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v5a2 2 0 0 0 2 2h2v-7H4ZM20 13v5a2 2 0 0 1-2 2h-2v-7h4Z"/></>
  };
  return <svg {...common}>{shapes[name] || shapes.check}</svg>;
}

function ArrowLink({ href, children, light = false }) {
  return <a className={`text-link${light ? " text-link-light" : ""}`} href={href}><span className="text-link-label">{children}</span><span className="text-link-arrow" aria-hidden="true">→</span></a>;
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`section-heading ${align === "left" ? "heading-left" : ""} ${dark ? "heading-dark" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" role="img" aria-label="Multilingual church and ministry content across documents, digital experiences, video, and audio">
      <svg viewBox="0 0 620 510" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="paperBg" x1="0" x2="1"><stop stopColor="#ffffff"/><stop offset="1" stopColor="#f8f8fa"/></linearGradient>
          <linearGradient id="blushBg" x1="0" x2="1"><stop stopColor="#fff6fa"/><stop offset="1" stopColor="#f7d7e5"/></linearGradient>
        </defs>
        <rect x="28" y="34" width="564" height="432" rx="34" fill="#f5f5f7"/>
        <circle cx="493" cy="95" r="54" fill="#f3dce6"/>
        <circle cx="112" cy="386" r="72" fill="#f9eaf1"/>
        <path d="M110 334c75-68 163-104 259-103 73 1 127 17 170 46" fill="none" stroke="#d5d5da" strokeWidth="2" strokeDasharray="7 10"/>
        <rect x="83" y="84" width="228" height="294" rx="22" fill="url(#paperBg)" stroke="#c9c9cf" strokeWidth="2"/>
        <rect x="108" y="111" width="84" height="8" rx="4" fill="#c11d63"/>
        <rect x="108" y="139" width="154" height="9" rx="4.5" fill="#4f4f56"/>
        <rect x="108" y="160" width="127" height="9" rx="4.5" fill="#808087"/>
        <rect x="108" y="201" width="153" height="6" rx="3" fill="#cfcfd4"/>
        <rect x="108" y="220" width="167" height="6" rx="3" fill="#cfcfd4"/>
        <rect x="108" y="239" width="143" height="6" rx="3" fill="#cfcfd4"/>
        <rect x="108" y="279" width="82" height="7" rx="3.5" fill="#9f1d55" opacity=".75"/>
        <rect x="108" y="301" width="156" height="6" rx="3" fill="#d4d4d8"/>
        <rect x="108" y="320" width="121" height="6" rx="3" fill="#d4d4d8"/>
        <rect x="338" y="127" width="201" height="128" rx="20" fill="#202126"/>
        <rect x="352" y="141" width="173" height="82" rx="12" fill="url(#blushBg)"/>
        <circle cx="438" cy="177" r="19" fill="#fff" stroke="#c11d63" strokeWidth="2"/>
        <path d="m432 167 17 10-17 10v-20Z" fill="#c11d63"/>
        <rect x="369" y="232" width="86" height="6" rx="3" fill="#fff" opacity=".92"/>
        <rect x="463" y="232" width="48" height="6" rx="3" fill="#9b9ba3"/>
        <rect x="356" y="285" width="180" height="130" rx="23" fill="#fff" stroke="#c9c9cf" strokeWidth="2"/>
        <rect x="374" y="306" width="55" height="7" rx="3.5" fill="#c11d63"/>
        <rect x="374" y="330" width="129" height="7" rx="3.5" fill="#55555c"/>
        <rect x="374" y="351" width="108" height="6" rx="3" fill="#cfcfd4"/>
        <path d="M374 387c9-18 20-18 29 0 9-31 19-31 28 0 9-13 18-13 27 0 9-24 18-24 27 0 9-15 18-15 27 0" fill="none" stroke="#9f1d55" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="318" cy="112" r="24" fill="#fff" stroke="#c11d63" strokeWidth="2"/>
        <path d="M308 111h20M318 101c4 4 6 7 6 10s-2 7-6 11c-4-4-6-8-6-11s2-6 6-10Z" fill="none" stroke="#c11d63" strokeWidth="1.8"/>
        <circle cx="325" cy="348" r="20" fill="#7a1542"/>
        <path d="M316 349c2-7 4-7 6 0 2-11 4-11 6 0 2-6 4-6 6 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function App() {
  return (
    <main className="page-shell">
      <style>{styles}</style>

      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Church & Religious Translation Services</h1>
            <p className="hero-kicker">Preserve Meaning, Doctrine, and Voice Across Languages</p>
            <p className="hero-body">Religious communication carries meaning beyond the words themselves. Stepes combines professional linguists, terminology management, translation memory, AI-enabled workflows, and structured review to help churches, ministries, publishers, and faith-based organizations communicate clearly and consistently across languages.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={QUOTE_URL}>Get a Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/services/">Explore Translation Services</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="trust-strip" aria-label="Religious translation capabilities">
        <div className="container trust-grid">
          <div className="trust-lead">Built for faith-based content where meaning, terminology, and audience matter.</div>
          <div>Professional Linguists</div>
          <div>Approved Terminology</div>
          <div>AI + Human Workflows</div>
          <div>100+ Languages</div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container editorial-split">
          <div className="sticky-heading">
            <div className="eyebrow">WHY RELIGIOUS TRANSLATION IS DIFFERENT</div>
            <h2>Religious Language Carries Meaning Beyond the Words</h2>
          </div>
          <div className="editorial-copy">
            <p className="lede">A translation can be grammatically correct and still communicate the wrong idea.</p>
            <p>Religious language is shaped by theology, Scripture, history, worship traditions, institutional usage, and the expectations of the people receiving the message. A familiar word may have an everyday meaning in one context and a much more specific theological meaning in another. Different denominations may intentionally use different terms for the same concept.</p>
            <p>Stepes helps preserve intended meaning by combining professional linguistic expertise with client-approved terminology, reference materials, style guidance, translation memory, and structured review.</p>
            <div className="principle-callout"><Icon name="quote"/><p><strong>The goal is not simply to translate the words.</strong> It is to help the message remain clear, consistent, and appropriate for the people receiving it.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft section-pad">
        <div className="container">
          <SectionHeading title="Translation for Churches, Ministries, and Faith-Based Organizations" intro="Stepes adapts the translation workflow to your organization, communication goals, theological requirements, and publishing environment." />
          <div className="audience-grid">
            {audienceItems.map((item) => <article className="audience-item" key={item.title}><div className="icon-box"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-dark section-pad">
        <div className="container">
          <SectionHeading dark eyebrow="ONE MINISTRY, MANY CONTENT TYPES" title="Translate the Complete Church and Ministry Content Ecosystem" intro="Church and religious communication no longer lives in one document or one channel. Stepes connects translation across the broader content ecosystem so approved language, terminology, and reviewer decisions can support future projects." />
          <div className="ecosystem-grid">
            {ecosystemItems.map(([title, text]) => <div className="ecosystem-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <div className="dark-links">
            <ArrowLink light href="https://www.stepes.com/document-translation-services/">Document Translation</ArrowLink>
            <ArrowLink light href="https://www.stepes.com/website-translation-services/">Website Translation</ArrowLink>
            <ArrowLink light href="https://www.stepes.com/video-translation-services/">Video Translation</ArrowLink>
            <ArrowLink light href="https://www.stepes.com/interpretation-services/">Interpreting Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container christian-grid">
          <div>
            <h2>Christian & Church Translation Expertise</h2>
            <p className="section-kicker">Respect the distinct language of your tradition.</p>
            <p className="section-copy">Christian communication draws from Scripture, theology, tradition, teaching, worship, and the distinctive language of individual churches and denominations. Professional Christian translation must account for those differences rather than treating all church content as interchangeable.</p>
            <p className="section-copy">Across Catholic, Orthodox, Anglican, Protestant, Evangelical, Pentecostal, independent, and other Christian traditions, terminology and conventions can differ. Stepes adapts the workflow to your organization’s approved terminology, Scripture preferences, style guidance, historical translations, and audience expectations.</p>
          </div>
          <div className="topic-list">
            {christianTopics.map((topic) => <div className="topic-row" key={topic}><span className="topic-dot" aria-hidden="true"></span><span>{topic}</span></div>)}
            <div className="topic-note">Your terminology should reflect how your organization speaks. Your translation should preserve how your organization teaches.</div>
          </div>
        </div>
      </section>

      <section className="section section-blush section-pad">
        <div className="container">
          <SectionHeading title="Protect Theological Meaning With Consistent Terminology" intro="The right translation depends on more than a bilingual dictionary. Stepes helps organizations build and maintain multilingual language assets for theological concepts, Scripture-related language, titles, liturgical terms, program names, and institutional vocabulary." />
          <div className="terminology-layout">
            <div className="language-system" role="img" aria-label="Connected multilingual terminology system">
              <div className="system-center">Approved<br/>Language</div>
              <div className="system-node node-a">Terminology</div>
              <div className="system-node node-b">Translation<br/>Memory</div>
              <div className="system-node node-c">Style<br/>Guidance</div>
              <div className="system-node node-d">Reviewer<br/>Decisions</div>
              <span className="system-line line-a"></span><span className="system-line line-b"></span><span className="system-line line-c"></span><span className="system-line line-d"></span>
            </div>
            <div className="terminology-list">
              {terminologyItems.map((item) => <div className="term-row" key={item.title}><div className="icon-box small"><Icon name={item.icon}/></div><div><h3>{item.title}</h3><p>{item.text}</p>{item.link && <ArrowLink href={item.link[1]}>{item.link[0]}</ArrowLink>}</div></div>)}
              <ArrowLink href="https://www.stepes.com/terminology-management/">Explore Terminology Management</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container scripture-grid">
          <div>
            <h2>Respecting Scripture, References, and Approved Source Texts</h2>
            <p className="section-copy">Scripture quotations require special attention. When a sermon, devotional, curriculum, publication, or church website quotes Scripture, the preferred target-language wording may already exist in an established Bible translation used by the organization or its audience.</p>
            <p className="section-copy">When your organization specifies an approved Bible edition, Stepes can use the corresponding published passage rather than independently retranslating the English quotation. We can also follow published Scripture references, denominational resources, existing translations, citation conventions, and other approved source materials.</p>
            <p className="section-copy">The same principle can apply to catechisms, creeds, prayers, hymns, liturgical texts, doctrinal statements, institutional names, and other content with established translations.</p>
          </div>
          <div className="scripture-example">
            <div className="example-label">A Practical Example</div>
            <div className="source-card"><span>Source sermon</span><strong>Scripture quotation in English</strong><div className="mini-lines"><i></i><i></i><i></i></div></div>
            <div className="example-arrow" aria-hidden="true">↓</div>
            <div className="target-card"><span>Localized sermon</span><strong>Corresponding passage from the approved target-language Bible edition</strong><div className="mini-lines"><i></i><i></i><i></i></div></div>
            <p>This helps preserve continuity between translated content and the religious resources your audience already knows and uses.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft section-pad">
        <div className="container">
          <SectionHeading eyebrow="EVERY WAY YOU COMMUNICATE" title="One Multilingual Experience Across Written, Digital, Recorded, and Live Content" intro="Connect the same approved terminology and voice across every format your organization uses to communicate." />
          <div className="channel-grid">
            {channels.map((item) => <article className="channel-item" key={item.title}><div className="icon-box"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.text}</p><ArrowLink href={item.link[1]}>{item.link[0]}</ArrowLink></article>)}
          </div>
        </div>
      </section>

      <section className="section section-dark section-pad">
        <div className="container ai-grid">
          <div className="ai-heading">
            <div className="eyebrow">SMARTER TRANSLATION WORKFLOWS</div>
            <h2>Use AI Where It Helps. Keep Professional Judgment Where It Matters.</h2>
            <p>AI can improve speed, scale, transcription, subtitling, and translation efficiency. But a routine event announcement is different from a doctrinal statement, and an internal scheduling message is different from a published theological work.</p>
            <div className="ai-principle">AI can accelerate language work.<br/><strong>Professional judgment protects meaning.</strong></div>
          </div>
          <div className="ai-list">
            {aiItems.map((item) => <div className="ai-row" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container recurring-grid">
          <div>
            <h2>Built for Weekly, Monthly, and Ongoing Translation</h2>
            <p className="section-copy">Churches communicate continuously. A typical ministry may publish a sermon every week, update its website throughout the month, distribute newsletters and event information, release videos and podcasts, and communicate with members, volunteers, donors, staff, and ministry partners.</p>
            <p className="section-copy">Stepes supports recurring programs with reusable translation memory, approved terminology, consistent linguistic teams, coordinated project management, structured review, and repeatable workflows.</p>
          </div>
          <div className="recurring-panel">
            <div className="calendar-icon"><Icon name="calendar"/></div>
            {recurringItems.map(([period, text]) => <div className="recurring-row" key={period}><strong>{period}</strong><p>{text}</p></div>)}
            <div className="recurring-foot">As approved content accumulates, terminology becomes more consistent, review becomes more focused, and recurring content becomes easier to manage.</div>
          </div>
        </div>
      </section>

      <section className="section section-blush section-pad">
        <div className="container media-grid">
          <div className="media-visual" role="img" aria-label="Sermon content adapted into multiple multilingual media formats">
            <div className="media-main"><div className="media-screen"><span className="play-ring"><Icon name="play"/></span></div><div className="media-caption">SERMON / TEACHING VIDEO</div></div>
            <div className="media-chip chip-1"><Icon name="document"/> Transcript</div>
            <div className="media-chip chip-2"><Icon name="layers"/> Subtitles</div>
            <div className="media-chip chip-3"><Icon name="headphones"/> Voice</div>
            <div className="media-chip chip-4"><Icon name="book"/> Study Guide</div>
          </div>
          <div>
            <div className="eyebrow">BEYOND THE WRITTEN WORD</div>
            <h2>Bring Sermons, Teaching, and Worship Content to Multilingual Audiences</h2>
            <p className="section-copy">A sermon may begin in the sanctuary, but its reach no longer ends there. Churches now publish through websites, livestreams, video platforms, podcasts, mobile applications, social media, and online teaching libraries.</p>
            <div className="media-list">{mediaItems.map(([title, text]) => <div className="media-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
            <div className="paired-links"><ArrowLink href="https://www.stepes.com/video-translation-services/">Explore Video Translation Services</ArrowLink><ArrowLink href="https://www.stepes.com/voice-over-services/">Voice Over Services</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container interpreting-grid">
          <div>
            <h2>Professional Interpreting for Religious Events and Communities</h2>
            <p className="section-copy">Some religious communication happens in real time. Stepes provides professional interpreting for scheduled worship services, multilingual meetings, conferences, training, community programs, consultations, events, and other live interactions.</p>
            <p className="section-copy">Advance preparation can be especially valuable for religious assignments. Agendas, speaker materials, Scripture references, terminology, program names, presentation slides, and other relevant content help interpreters prepare for the language they are likely to encounter.</p>
            <ArrowLink href="https://www.stepes.com/interpretation-services/">Explore Professional Interpreting Services</ArrowLink>
          </div>
          <div className="interpretation-modes">
            <div><Icon name="people"/><h3>On-Site</h3><p>Scheduled professional interpreting for events, meetings, and in-person programs.</p></div>
            <div><Icon name="browser"/><h3>Video</h3><p>Remote visual interpreting for multilingual conversations and distributed teams.</p></div>
            <div><Icon name="headphones"/><h3>Phone</h3><p>Remote spoken-language support for meetings and other suitable use cases.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft section-pad">
        <div className="container">
          <SectionHeading title="Translation for Religious Publishing and Education" intro="Religious organizations create content intended not only to be understood, but to be studied, taught, discussed, and preserved." />
          <div className="publishing-grid">
            <article><div className="icon-box"><Icon name="book"/></div><h3>Religious Publishing</h3><p>Translate books, devotionals, theological publications, magazines, journals, study guides, ministry resources, brochures, and other published materials with professional translation, editorial review, terminology management, multilingual typesetting, layout adaptation, and final QA.</p><ArrowLink href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</ArrowLink></article>
            <article><div className="icon-box"><Icon name="school"/></div><h3>Religious Education & eLearning</h3><p>Localize curricula, Bible studies, discipleship resources, instructor materials, learner content, presentations, assessments, online courses, audio, video, narration, and interactive learning for multilingual education programs.</p><ArrowLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</ArrowLink></article>
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container web-section">
          <div className="web-copy">
            <div className="eyebrow">MULTILINGUAL DIGITAL EXPERIENCE</div>
            <h2>Church & Religious Website Translation</h2>
            <p className="section-copy">Your website is often the first place a multilingual visitor encounters your organization. A translated church or ministry website should do more than convert paragraphs from one language into another.</p>
            <p className="section-copy">Navigation, calls to action, event information, forms, ministry descriptions, staff pages, resource libraries, video, downloadable files, metadata, and continuously updated content all contribute to the experience.</p>
            <p className="section-copy">When multilingual search visibility matters, localization can also account for target-language search terminology, metadata, page structure, and other content elements that help users discover the right information naturally in their own language.</p>
            <ArrowLink href="https://www.stepes.com/website-translation-services/">Explore Website Translation Services</ArrowLink>
          </div>
          <div className="web-mockup" role="img" aria-label="Illustrative multilingual church website localization preview">
            <div className="browser-bar"><span></span><span></span><span></span><div>Website Preview • Español</div></div>
            <div className="web-hero"><div className="web-kicker">BIENVENIDOS</div><div className="web-title">Una comunidad para cada persona</div><div className="web-lines"><i></i><i></i></div><div className="web-btn">Explorar</div></div>
            <div className="web-cards"><span></span><span></span><span></span></div>
          </div>
        </div>
      </section>

      <section className="section section-dark section-pad">
        <div className="container language-layout">
          <div>
            <div className="eyebrow">REACH MULTILINGUAL COMMUNITIES</div>
            <h2>Church & Religious Translation in 100+ Languages</h2>
            <p>Stepes helps religious organizations communicate with multilingual audiences locally and internationally across 100+ languages and regional variants.</p>
            <p>Locale choice matters. Spanish for a congregation in the United States may require different language decisions from Spanish for Spain or a specific Latin American audience. The same principle applies across French, Portuguese, Chinese, Arabic, and many other languages.</p>
            <ArrowLink light href="https://www.stepes.com/translation-languages/">Explore All Translation Languages</ArrowLink>
          </div>
          <div className="language-cloud">
            {languageItems.map((language) => <span key={language}>{language}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="container quality-layout">
          <div className="sticky-heading">
            <h2>Professional Linguists, Structured Review, Consistent Results</h2>
            <p className="section-copy">Strong religious translation depends on both the people doing the work and the process supporting them.</p>
          </div>
          <div>
            <div className="quality-list">
              {qualityItems.map(([title, text]) => <div className="quality-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-soft section-pad">
        <div className="container">
          <SectionHeading title="Why Faith-Based Organizations Choose Stepes" intro="One language partner for professional expertise, modern translation technology, connected linguistic assets, multimedia, and recurring multilingual operations." />
          <div className="why-grid">{whyItems.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section section-pad faq-section">
        <div className="container faq-layout">
          <div className="faq-heading">
            <h2>Religious Translation Services FAQs</h2>
            <p className="section-copy">Practical answers about church translation, sermons, Scripture references, terminology, AI workflows, recurring content, languages, cost, and timing.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><div className="faq-answer"><p>{answer}</p>{question.includes("languages") && <ArrowLink href="https://www.stepes.com/translation-languages/">Explore All Languages</ArrowLink>}{question.includes("cost") && <ArrowLink href={QUOTE_URL}>Get a Translation Quote</ArrowLink>}</div></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="container cta-inner">
          <div>
            <h2>Share Your Message Across Languages With Confidence</h2>
            <p>Whether you need to translate a sermon series, church website, devotional, theological publication, religious education program, ministry video, outreach campaign, or ongoing multilingual content operation, Stepes brings professional linguists, AI-enabled workflows, terminology management, translation memory, multimedia expertise, and structured quality review together in one scalable language solution.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={QUOTE_URL}>Get a Quote <span aria-hidden="true">→</span></a>
            <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Contact Stepes</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
:root{--magenta:#C11D63;--magenta2:#A71954;--burgundy:#7A1542;--blush:#FDF2F7;--blush-2:#F8E5ED;--pink-light:#F2A7C6;--ink:#17181c;--ink2:#313238;--muted:#66676f;--line:#dedee3;--soft:#f6f6f8;--dark:#1d1e23;--white:#fff}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0}
.page-shell{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--ink);background:#fff;overflow-x:hidden}
.page-shell a{text-decoration:none}
.container{width:min(1280px,calc(100% - 112px));margin:0 auto}
.section-pad{padding:96px 0}
.section-soft{background:var(--soft)}
.section-blush{background:var(--blush)}
.section-dark{background:var(--dark);color:#fff}
.eyebrow{font-size:11px;font-weight:600;line-height:1.3;letter-spacing:.13em;text-transform:uppercase;color:var(--magenta);margin-bottom:18px}
.section-dark .eyebrow{color:var(--pink-light)}
h1,h2,h3{margin:0;font-weight:600;letter-spacing:-.025em}
h1{font-size:48px;line-height:1.03;max-width:670px}
h2{font-size:36px;line-height:1.12}
h3{font-size:24px;line-height:1.2}
p{font-size:16px;line-height:1.67;margin:0;color:var(--muted)}
.section-dark p{color:#c9c9cf}
.section-heading{text-align:center;max-width:880px;margin:0 auto 54px}
.section-heading.heading-left{text-align:left;margin-left:0}
.section-heading h2{max-width:820px;margin:0 auto}
.section-heading.heading-left h2{margin:0}
.section-intro{font-size:18px;max-width:810px;margin:18px auto 0;color:var(--muted)}
.heading-left .section-intro{margin-left:0}
.heading-dark .section-intro{color:#c9c9cf}
.section-copy{font-size:17px;margin-top:20px;max-width:720px}.section-kicker{font-size:20px;line-height:1.45;color:var(--ink2);font-weight:600;margin-top:18px;max-width:700px}
.lede{font-size:22px;line-height:1.45;color:var(--ink);margin-bottom:22px}
.btn{min-height:50px;padding:0 24px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent}
.btn-primary,.btn-primary:visited{background:var(--magenta);color:#fff!important}
.btn-primary span,.btn-primary svg{color:#fff!important;fill:none;stroke:#fff}
.btn-primary:hover,.btn-primary:focus-visible{background:var(--magenta2);color:#fff!important;transform:translateY(-1px)}
.btn-secondary,.btn-secondary:visited{background:#fff;color:var(--ink);border-color:#cacbd1}
.btn-secondary:hover,.btn-secondary:focus-visible{border-color:#8d8e95;transform:translateY(-1px)}
.btn:focus-visible,.text-link:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
.text-link{display:inline-flex;align-items:center;gap:7px;color:var(--magenta);font-size:16px;font-weight:600;margin-top:16px;min-height:44px;max-width:100%;line-height:1.45}
.text-link-label{min-width:0;overflow-wrap:anywhere}.text-link-arrow{flex:0 0 auto;transition:transform .2s ease}
.text-link:hover .text-link-arrow{transform:translateX(3px)}
.text-link-light{color:var(--pink-light)}
.paired-links{display:flex;gap:24px;flex-wrap:wrap}
.icon-box{width:48px;height:48px;border:1px solid #dadbe0;background:#fff;border-radius:16px;display:grid;place-items:center;color:var(--magenta)}
.icon-box.small{width:42px;height:42px;border-radius:13px;flex:0 0 auto}
.hero{padding-top:104px;padding-bottom:104px;background:linear-gradient(180deg,#fff 0%,#fdfbfc 100%)}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(440px,.98fr);gap:62px;align-items:center}
.hero-kicker{font-size:23px;line-height:1.4;color:var(--ink2);font-weight:600;margin-top:22px;max-width:650px}
.hero-body{font-size:18px;line-height:1.65;margin-top:18px;max-width:670px}
.hero-actions{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap}
.hero-art{width:100%;max-width:610px;justify-self:end}
.hero-art svg{width:100%;display:block}
.trust-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
.trust-grid{display:grid;grid-template-columns:1.55fr repeat(4,1fr);align-items:stretch}
.trust-grid>div{padding:25px 22px;border-left:1px solid var(--line);font-size:16px;font-weight:600;color:#45464c;display:flex;align-items:center}
.trust-grid>div:first-child{border-left:0;padding-left:0}
.trust-lead{font-size:16px!important;color:var(--ink)!important}
.editorial-split,.quality-layout{display:grid;grid-template-columns:minmax(300px,.8fr) minmax(0,1.2fr);gap:90px;align-items:start}
.sticky-heading{position:sticky;top:28px}
.editorial-copy{max-width:760px}
.editorial-copy>p+p{margin-top:18px}
.principle-callout{margin-top:32px;padding:26px 28px;border:1px solid var(--line);border-radius:24px;display:flex;gap:18px;align-items:flex-start;background:#fff}
.principle-callout svg{flex:0 0 auto;color:var(--magenta);margin-top:2px}
.principle-callout p{font-size:17px;color:var(--ink2)}
.audience-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.audience-item{padding:30px 27px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(255,255,255,.62);min-height:286px}
.audience-item h3{font-size:21px;margin-top:20px}
.audience-item p{margin-top:13px}
.ecosystem-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #3f4047;margin-top:12px}
.ecosystem-row{display:grid;grid-template-columns:210px 1fr;gap:24px;padding:26px 28px 26px 0;border-bottom:1px solid #3f4047}
.ecosystem-row:nth-child(odd){border-right:1px solid #3f4047;padding-right:36px}
.ecosystem-row:nth-child(even){padding-left:36px}
.ecosystem-row h3{font-size:20px;color:#fff}
.dark-links{display:flex;gap:28px;flex-wrap:wrap;margin-top:30px}
.christian-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:86px;align-items:start}
.topic-list{border-top:1px solid var(--line)}
.topic-row{display:flex;gap:14px;align-items:flex-start;padding:18px 0;border-bottom:1px solid var(--line);font-size:17px;font-weight:600;color:var(--ink2)}
.topic-dot{width:7px;height:7px;border-radius:50%;background:var(--magenta);flex:0 0 auto;margin-top:8px}
.topic-note{margin-top:24px;padding:22px 24px;background:var(--blush);border-radius:20px;font-size:18px;line-height:1.5;font-weight:600;color:var(--burgundy)}
.terminology-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:90px;align-items:center}
.language-system{position:relative;min-height:470px;max-width:490px;margin:auto;width:100%}
.system-center,.system-node{position:absolute;border-radius:50%;display:grid;place-items:center;text-align:center;font-weight:600;z-index:2}
.system-center{width:160px;height:160px;left:50%;top:50%;transform:translate(-50%,-50%);background:var(--burgundy);color:#fff;font-size:22px;line-height:1.2;box-shadow:0 18px 42px rgba(122,21,66,.18)}
.system-node{width:112px;height:112px;background:#fff;border:1px solid #d8c4cd;color:var(--ink2);font-size:16px;line-height:1.25}
.node-a{left:0;top:38px}.node-b{right:0;top:38px}.node-c{left:20px;bottom:24px}.node-d{right:20px;bottom:24px}
.system-line{position:absolute;height:1px;background:#cda9b9;transform-origin:left center;z-index:1}
.line-a{width:128px;left:96px;top:143px;transform:rotate(31deg)}.line-b{width:128px;right:96px;top:143px;transform:rotate(149deg);transform-origin:right center}.line-c{width:124px;left:105px;bottom:128px;transform:rotate(-30deg)}.line-d{width:124px;right:105px;bottom:128px;transform:rotate(210deg);transform-origin:right center}
.terminology-list{border-top:1px solid #dcc8d0}
.term-row{display:flex;gap:18px;padding:22px 0;border-bottom:1px solid #dcc8d0}
.term-row h3{font-size:20px}
.term-row p{margin-top:7px}
.scripture-grid{display:grid;grid-template-columns:1fr .9fr;gap:88px;align-items:center}
.scripture-example{border:1px solid var(--line);border-radius:28px;padding:30px;background:#fafafa}
.example-label{font-size:14px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--magenta);margin-bottom:18px}
.source-card,.target-card{padding:23px;background:#fff;border:1px solid var(--line);border-radius:18px}
.source-card span,.target-card span{display:block;font-size:14px;color:#777880;margin-bottom:8px}
.source-card strong,.target-card strong{font-size:17px;line-height:1.45;display:block}
.target-card{border-color:#d8a9bd;background:#fff8fb}
.example-arrow{text-align:center;color:var(--magenta);font-size:26px;padding:8px}
.mini-lines{margin-top:17px;display:grid;gap:7px}.mini-lines i{height:5px;border-radius:3px;background:#e1e1e4;display:block}.mini-lines i:nth-child(2){width:86%}.mini-lines i:nth-child(3){width:66%}
.scripture-example>p{margin-top:18px;font-size:16px}
.channel-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.channel-item{padding:30px 28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:320px;background:#fff}
.channel-item h3{margin-top:20px}.channel-item p{margin-top:12px}
.ai-grid{display:grid;grid-template-columns:.87fr 1.13fr;gap:88px;align-items:start}
.ai-heading p{font-size:17px;margin-top:22px;max-width:590px}
.ai-principle{margin-top:32px;padding:24px 0;border-top:1px solid #44454c;border-bottom:1px solid #44454c;font-size:19px;line-height:1.55;color:#d8d8de}.ai-principle strong{color:#fff}
.ai-list{border-top:1px solid #44454c}
.ai-row{padding:24px 0;border-bottom:1px solid #44454c;display:grid;grid-template-columns:250px 1fr;gap:30px}.ai-row h3{font-size:20px}.ai-row p{font-size:16px}
.recurring-grid{display:grid;grid-template-columns:1fr .9fr;gap:88px;align-items:center}
.recurring-panel{border:1px solid var(--line);border-radius:28px;padding:32px;background:#fff;position:relative}
.calendar-icon{width:54px;height:54px;border-radius:17px;background:var(--blush);display:grid;place-items:center;color:var(--magenta);margin-bottom:8px}
.recurring-row{display:grid;grid-template-columns:92px 1fr;gap:18px;padding:20px 0;border-bottom:1px solid var(--line)}.recurring-row strong{font-size:18px}.recurring-row p{font-size:16px}
.recurring-foot{font-size:16px;line-height:1.6;color:var(--ink2);padding-top:22px;font-weight:600}
.media-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:92px;align-items:center}
.media-visual{position:relative;min-height:520px}
.media-main{position:absolute;width:360px;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;border:1px solid #decbd3;border-radius:28px;padding:16px;box-shadow:0 18px 48px rgba(122,21,66,.10)}
.media-screen{height:220px;border-radius:18px;background:linear-gradient(135deg,#25262c,#55565d);display:grid;place-items:center}.play-ring{width:60px;height:60px;border-radius:50%;display:grid;place-items:center;background:#fff;color:var(--magenta)}
.media-caption{font-size:14px;font-weight:600;letter-spacing:.09em;color:#62636a;margin:15px 4px 3px}
.media-chip{position:absolute;background:#fff;border:1px solid #dbc8d0;border-radius:999px;padding:10px 14px;display:flex;align-items:center;gap:8px;font-size:16px;font-weight:600;color:var(--ink2);box-shadow:0 12px 28px rgba(50,40,45,.08)}.media-chip svg{color:var(--magenta);width:19px}.chip-1{top:64px;left:0}.chip-2{top:145px;right:0}.chip-3{bottom:125px;left:7px}.chip-4{bottom:48px;right:10px}
.media-list{margin:28px 0 0;border-top:1px solid #dfcbd4}.media-row{display:grid;grid-template-columns:170px 1fr;gap:22px;padding:17px 0;border-bottom:1px solid #dfcbd4}.media-row h3{font-size:18px}.media-row p{font-size:16px}
.interpreting-grid{display:grid;grid-template-columns:1fr .95fr;gap:90px;align-items:center}
.interpretation-modes{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}.interpretation-modes>div{padding:28px 22px;border-left:1px solid var(--line)}.interpretation-modes>div:first-child{border-left:0}.interpretation-modes svg{color:var(--magenta)}.interpretation-modes h3{font-size:20px;margin-top:18px}.interpretation-modes p{margin-top:10px}
.publishing-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}.publishing-grid article{padding:36px 38px}.publishing-grid article+article{border-left:1px solid var(--line)}.publishing-grid h3{margin-top:20px}.publishing-grid p{margin-top:14px;font-size:17px}
.web-section{display:grid;grid-template-columns:1fr .95fr;gap:86px;align-items:center}
.web-mockup{border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 16px 40px rgba(23,24,28,.08)}
.browser-bar{height:48px;background:#f1f1f3;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:7px;padding:0 14px}.browser-bar>span{width:9px;height:9px;border-radius:50%;background:#c8c8cd}.browser-bar>div{margin-left:12px;background:#fff;border:1px solid #dedee2;border-radius:7px;padding:6px 12px;font-size:14px;color:#73747a;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.web-hero{padding:48px 40px;background:linear-gradient(135deg,#fff4f8,#f7dce7)}.web-kicker{font-size:14px;letter-spacing:.09em;font-weight:600;color:var(--magenta)}.web-title{font-size:29px;font-weight:600;line-height:1.1;max-width:340px;margin-top:12px}.web-lines{display:grid;gap:8px;margin-top:19px}.web-lines i{height:6px;border-radius:3px;background:#c9b8bf;width:78%}.web-lines i+ i{width:58%}.web-btn{display:inline-flex;margin-top:22px;background:var(--magenta);color:#fff;padding:10px 18px;border-radius:999px;font-size:14px;font-weight:600}.web-cards{padding:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.web-cards span{height:76px;background:#f5f5f7;border:1px solid #e0e0e4;border-radius:12px}
.language-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:90px;align-items:center}.language-layout>div:first-child p{font-size:17px;margin-top:20px}.language-cloud{display:flex;gap:10px;flex-wrap:wrap;align-content:center}.language-cloud span{font-size:16px;font-weight:600;color:#ececf0;border:1px solid #474850;border-radius:999px;padding:11px 15px;background:#27282e;max-width:100%;white-space:normal;overflow-wrap:anywhere}
.quality-list{border-top:1px solid var(--line)}.quality-row{display:grid;grid-template-columns:235px 1fr;gap:34px;padding:25px 0;border-bottom:1px solid var(--line)}.quality-row h3{font-size:20px}.quality-row p{font-size:16px}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.why-grid article{padding:30px 28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;min-height:190px}.why-grid h3{font-size:20px}.why-grid p{margin-top:12px}
.faq-layout{display:grid;grid-template-columns:340px 1fr;gap:84px;align-items:start}.faq-heading{position:sticky;top:28px}.faq-list{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line)}summary{list-style:none;cursor:pointer;min-height:72px;padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:18px;font-weight:600;color:var(--ink);line-height:1.35}summary::-webkit-details-marker{display:none}summary span{width:34px;height:34px;border-radius:50%;border:1px solid #d6d6db;display:grid;place-items:center;color:var(--magenta);flex:0 0 auto;font-size:20px;transition:transform .2s ease}details[open] summary span{transform:rotate(45deg)}.faq-answer{padding:0 56px 24px 0;max-width:840px}.faq-answer p{font-size:16px}
.final-cta{background:var(--blush);border-top:1px solid #ecd5df}.cta-inner{display:grid;grid-template-columns:1fr auto;gap:70px;align-items:center}.cta-inner h2{max-width:760px}.cta-inner p{font-size:18px;margin-top:18px;max-width:840px}.cta-actions{display:flex;gap:12px;flex-direction:column;min-width:190px}.cta-actions .btn{width:100%}
@media(max-width:1100px){
  .container{width:min(1280px,calc(100% - 80px))}.hero-grid{grid-template-columns:1fr .9fr;gap:40px}.audience-grid{grid-template-columns:repeat(2,1fr)}.ecosystem-row{grid-template-columns:170px 1fr}.terminology-layout,.media-grid{gap:52px}.interpretation-modes{grid-template-columns:1fr}.interpretation-modes>div{border-left:0;border-top:1px solid var(--line)}.interpretation-modes>div:first-child{border-top:0}.faq-layout{grid-template-columns:300px 1fr;gap:54px}
}
@media(max-width:820px){
  .container{width:calc(100% - 48px)}.section-pad{padding:72px 0}h1{font-size:42px}h2{font-size:32px}.hero{padding:84px 0}.hero-grid,.editorial-split,.christian-grid,.terminology-layout,.scripture-grid,.ai-grid,.recurring-grid,.media-grid,.interpreting-grid,.web-section,.language-layout,.quality-layout,.faq-layout{grid-template-columns:1fr;gap:48px}.hero-copy{text-align:center}.hero-kicker,.hero-body{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-art{max-width:590px;justify-self:center}.sticky-heading,.faq-heading{position:static}.editorial-split .sticky-heading,.christian-grid>div:first-child,.scripture-grid>div:first-child,.recurring-grid>div:first-child,.interpreting-grid>div:first-child,.media-grid>div:last-child,.web-copy,.language-layout>div:first-child,.quality-layout .sticky-heading{text-align:center}.editorial-split .sticky-heading .eyebrow,.media-grid>div:last-child>.eyebrow,.web-copy .eyebrow,.language-layout>div:first-child .eyebrow{text-align:center}.editorial-split .sticky-heading h2,.christian-grid>div:first-child h2,.scripture-grid>div:first-child h2,.recurring-grid>div:first-child h2,.interpreting-grid>div:first-child h2,.media-grid>div:last-child>h2,.web-copy h2,.language-layout>div:first-child h2,.quality-layout .sticky-heading h2{max-width:720px;margin-left:auto;margin-right:auto}.christian-grid .section-kicker{margin-left:auto;margin-right:auto;text-align:center}.christian-grid .section-copy,.scripture-grid .section-copy,.recurring-grid .section-copy,.interpreting-grid .section-copy,.media-grid>div:last-child>.section-copy,.web-copy .section-copy,.quality-layout .section-copy{margin-left:auto;margin-right:auto;text-align:left}.editorial-copy,.topic-list,.terminology-list,.media-list,.quality-list,.faq-list{text-align:left}.trust-grid{grid-template-columns:repeat(2,1fr)}.trust-grid>div{border-top:1px solid var(--line);justify-content:center;text-align:center}.trust-grid>div:nth-child(odd){border-left:0}.trust-grid>div:first-child{grid-column:1/-1;border-top:0;padding-left:0}.audience-item{min-height:250px}.ecosystem-grid{grid-template-columns:1fr}.ecosystem-row,.ecosystem-row:nth-child(odd),.ecosystem-row:nth-child(even){border-right:0;padding:24px 0;grid-template-columns:190px 1fr}.language-system{min-height:430px}.channel-grid{grid-template-columns:repeat(2,1fr)}.ai-heading{text-align:center}.ai-heading p{margin-left:auto;margin-right:auto;text-align:left}.ai-row{grid-template-columns:220px 1fr}.media-visual{min-height:500px;max-width:580px;width:100%;margin:0 auto}.publishing-grid{grid-template-columns:1fr}.publishing-grid article+article{border-left:0;border-top:1px solid var(--line)}.language-layout>div:first-child p{text-align:left}
  .language-cloud{justify-content:center}.why-grid{grid-template-columns:repeat(2,1fr)}.faq-heading p{margin-left:0;margin-right:0}.cta-inner{grid-template-columns:1fr;gap:30px;text-align:center}.cta-inner p{margin-left:auto;margin-right:auto}.cta-actions{flex-direction:row;justify-content:center}
}
@media(max-width:560px){
  .container{width:calc(100% - 40px)}.section-pad{padding:68px 0}h1{font-size:38px;line-height:1.04}h2{font-size:30px}h3{font-size:20px}.hero{padding:72px 0}.hero-kicker{font-size:20px}.hero-body{font-size:17px}.hero-actions{display:grid}.hero-actions .btn{width:100%}.hero-art{margin-top:4px}.section-heading{margin-bottom:40px}.section-intro{font-size:17px}.trust-grid{grid-template-columns:1fr}.trust-grid>div,.trust-grid>div:nth-child(odd){border-left:0;border-top:1px solid var(--line);padding:17px 0}.trust-grid>div:first-child{padding:20px 0}.audience-grid,.channel-grid,.why-grid{grid-template-columns:1fr;border-left:0}.audience-item,.channel-item,.why-grid article{border-left:0;border-right:0;padding-left:0;padding-right:0;background:transparent;min-height:auto}.ecosystem-row,.ecosystem-row:nth-child(odd),.ecosystem-row:nth-child(even){grid-template-columns:1fr;gap:8px}.ecosystem-row h3{font-size:19px}.principle-callout{padding:22px 20px}.language-system{min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:none;margin:0}.system-center,.system-node{position:static;transform:none;width:auto;height:auto;min-height:96px;border-radius:20px;padding:18px 12px}.system-center{grid-column:1/-1;min-height:112px;font-size:20px}.system-node{font-size:16px}.system-line{display:none}.scripture-example{padding:22px 18px}.ai-row,.quality-row,.media-row{grid-template-columns:1fr;gap:8px}.ai-heading{text-align:center}.recurring-panel{padding:24px 20px}.recurring-row{grid-template-columns:78px 1fr}.media-visual{min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:12px}.media-main{position:static;width:100%;transform:none;grid-column:1/-1}.media-screen{height:190px}.media-chip{position:static;font-size:16px;padding:11px 13px;justify-content:center;box-shadow:none}.chip-1,.chip-2,.chip-3,.chip-4{inset:auto}.interpretation-modes{grid-template-columns:1fr;border-radius:22px}.interpretation-modes>div{border-left:0;border-top:1px solid var(--line)}.interpretation-modes>div:first-child{border-top:0}.publishing-grid article{padding:28px 22px}.web-hero{padding:34px 24px}.web-title{font-size:25px}.web-cards{grid-template-columns:1fr}.web-cards span{height:58px}.language-cloud{justify-content:flex-start}.paired-links{gap:10px 18px}.faq-answer{padding-right:0}.cta-actions{display:grid;grid-template-columns:1fr;width:100%}.cta-actions .btn{width:100%}
}
@media(max-width:340px){.container{width:calc(100% - 40px)}.language-system,.media-visual{grid-template-columns:1fr}.system-center{grid-column:1}.media-main{grid-column:1}.hero-kicker{font-size:19px}.text-link{align-items:flex-start}.btn{padding-left:18px;padding-right:18px;text-align:center}}
`;

export default App;
