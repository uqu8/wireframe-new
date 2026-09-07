import React from "react";

const MAGENTA = "#C11D63";
const MAGENTA_DARK = "#A71954";
const BURGUNDY = "#7A1542";
const BLUSH = "#FDF2F7";
const LIGHT_MAGENTA = "#F2A7C6";
const INK = "#171719";
const MUTED = "#616169";
const BORDER = "#E7E7EA";
const SOFT = "#F7F7F8";

const Arrow = ({ size = 17 }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M10 9.2l5 2.8-5 2.8V9.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const MicIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="3.5" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M6.5 11.5a5.5 5.5 0 0011 0M12 17v3M9 20h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const CaptionsIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M7 10.5h4M7 14h6M14 10.5h3M15 14h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const LayersIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ScreenIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 21h6M12 17v4M7 9h4M7 12h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 13v-1a8 8 0 0116 0v1M4 13v4a2 2 0 002 2h2v-7H6a2 2 0 00-2 1zM20 13v4a2 2 0 01-2 2h-2v-7h2a2 2 0 012 1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l7 3v5c0 4.7-2.8 8.2-7 10-4.2-1.8-7-5.3-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8.5 12l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VersionIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="7" width="10" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 10.5h2.5M9 13.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M13 5h4a2 2 0 012 2v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10l2-2 2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RefreshIcon = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 8V4l-3 3A8 8 0 104 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 9l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBadge = ({ children }) => <div className="iconBadge">{children}</div>;

const Eyebrow = ({ children, dark = false }) => (
  <div className={`eyebrow${dark ? " eyebrowDark" : ""}`}>{children}</div>
);

const PrimaryCTA = ({ href, children }) => (
  <a className="ctaPrimary" href={href}>{children}<Arrow /></a>
);

const SecondaryCTA = ({ href, children, dark = false }) => (
  <a className={`ctaSecondary${dark ? " ctaSecondaryDark" : ""}`} href={href}>{children}<Arrow /></a>
);

const EditorialLink = ({ href, children }) => (
  <a className="editorialLink" href={href}>{children}<Arrow size={16} /></a>
);

const SectionHeading = ({ eyebrow, title, intro, align = "center", dark = false }) => (
  <div className={`sectionHeading sectionHeading-${align}${dark ? " sectionHeadingDark" : ""}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const services = [
  ["Professional Video Translation", "Native linguists translate video content for meaning, audience, context, timing, and spoken delivery, with subject-matter expertise for specialized content."],
  ["Subtitle Translation Services", "Professional subtitle translation with time synchronization, segmentation, reading-speed control, line-length management, formatting, and playback QA."],
  ["Closed Caption Localization", "Localized captions can communicate dialogue, speaker identification, and meaningful non-speech audio information for viewers who need a text alternative to the soundtrack."],
  ["Human Voiceover", "Native-speaking voice talent for corporate, technical, training, product, healthcare, marketing, and other content where performance and delivery matter."],
  ["AI Voiceover & AI Dubbing", "Scalable multilingual voice production for large libraries and rapid releases, supported by professional language review, terminology, pronunciation, and in-context QA."],
  ["Dubbing & Lip-Sync Localization", "Target-language dialogue can be synchronized to scene timing and visible speakers for higher-production, audience-facing video experiences."],
  ["Transcription & Time-Coding", "AI-assisted and professional transcription workflows can create speaker-aware, time-coded source scripts for translation, subtitles, voiceover, and dubbing."],
  ["On-Screen Text & Graphics", "Translate titles, lower thirds, charts, diagrams, animations, screenshots, software interfaces, safety text, end cards, and other visual content."],
  ["Multimedia Engineering", "Integrate translated audio, subtitles, graphics, and video assets; adjust timing and synchronization; render and prepare the final multilingual deliverables."],
  ["Video Metadata Localization", "Localize titles, descriptions, chapters, thumbnail text, tags, supporting captions, and platform-facing metadata for global distribution."],
];

const localizationModels = [
  {
    icon: <CaptionsIcon />,
    title: "Subtitles & Captions",
    best: "Webinars, training, internal communications, accessibility, and high-volume localization",
    body: "Efficient multilingual access that preserves the original speaker and makes future updates comparatively easy."
  },
  {
    icon: <MicIcon />,
    title: "AI Voiceover & AI Dubbing",
    best: "Training libraries, tutorials, product education, software demonstrations, and frequently updated content",
    body: "Rapid, scalable multilingual audio with professional control over translation, terminology, pronunciation, timing, and context."
  },
  {
    icon: <HeadphonesIcon />,
    title: "Professional Human Voiceover",
    best: "Customer-facing, technical, regulated, brand-sensitive, and high-value corporate content",
    body: "Greater control over tone, pacing, emphasis, regional authenticity, and the natural performance of the localized script."
  },
  {
    icon: <PlayIcon />,
    title: "Premium Dubbing & Lip Sync",
    best: "Marketing campaigns, executive communications, product launches, and branded storytelling",
    body: "A more tightly synchronized production designed to feel natural to the target-language viewer."
  }
];

const workflow = [
  ["Source Review & Project Setup", "Review video, scripts, audio, editable graphics, target languages, audience, delivery platforms, localization method, and production requirements."],
  ["Transcription & Content Preparation", "Create or prepare the source script, identify speakers where required, and segment and time-code dialogue for localization."],
  ["Translation & Spoken-Language Adaptation", "Translate for meaning, terminology, audience, tone, timing, and natural spoken delivery."],
  ["Terminology & Language Control", "Apply translation memory, approved terminology, style preferences, pronunciation guidance, and reference material."],
  ["Subtitle or Voice Production", "Produce subtitles, captions, human voiceover, AI voice, dubbing, lip-sync, or the project-specific combination."],
  ["Visual Localization", "Translate and adapt on-screen text, graphics, animations, screenshots, interfaces, and other visual content included in scope."],
  ["Multimedia Engineering", "Integrate audio, subtitles, and visuals; refine timing and synchronization; and prepare final language versions."],
  ["In-Context Linguistic QA", "Review translation, terminology, pronunciation, subtitle readability, visual text, and synchronization in the actual video experience."],
  ["Technical QA", "Validate playback, audio, subtitle behavior, rendering, graphics, file integrity, encoding, and agreed platform requirements."],
  ["Final Delivery", "Deliver the required localized video, audio, subtitle, script, metadata, or production assets for publishing."],
];

const businessTypes = [
  [<PlayIcon />, "Learning & Workforce Training", "Employee onboarding, compliance, safety, SOP instruction, technical training, cybersecurity, professional development, LMS video, and recorded instructor content."],
  [<ScreenIcon />, "Product & Customer Education", "Product tutorials, feature demonstrations, how-to videos, software walkthroughs, customer onboarding, installation guidance, troubleshooting, and support content."],
  [<GlobeIcon />, "Marketing & Brand Video", "Product launches, explainers, campaigns, corporate storytelling, testimonials, case studies, social video, thought leadership, and event content."],
  [<MicIcon />, "Executive & Corporate Communications", "CEO messages, town halls, investor communications, corporate announcements, executive interviews, recorded events, internal communications, and webinars."],
  [<ShieldIcon />, "Technical & Regulated Video", "Life sciences, healthcare, medical devices, manufacturing, engineering, automotive, financial services, legal services, government, software, and technology content."],
];

const whyChoose = [
  ["Professional Language Expertise", "Native professional linguists support accurate, audience-appropriate translation with subject-matter expertise for specialized content."],
  ["Human + AI Flexibility", "Choose the right production model for each content type rather than forcing every video into a single workflow."],
  ["Complete Multimedia Production", "Coordinate translation, transcription, subtitles, captions, voiceover, AI dubbing, graphics localization, engineering, and QA through one partner."],
  ["Terminology & Brand Control", "Use translation memory, terminology management, pronunciation guidance, approved translations, and reviewer feedback across related videos."],
  ["In-Context Quality Assurance", "Review language as audiences experience it—in voice, subtitles, visuals, timing, and final playback."],
  ["Enterprise Scalability", "Support one high-value video, hundreds of training assets, or continuously updated multilingual video libraries."],
  ["Specialized Industry Expertise", "Apply appropriate language expertise and review controls for complex technical and professional subject matter."],
  ["Platform-Ready Delivery", "Prepare localized content for agreed video, subtitle, audio, LMS, web, social, and enterprise publishing environments."],
];

const faqs = [
  ["What is video translation?", "Video translation converts the language within a video for audiences who speak another language. A complete professional workflow can include transcription, script translation, subtitles, captions, voiceover, dubbing, AI voice, on-screen text, graphics, and video metadata. Enterprise localization often also adapts timing, pronunciation, visual layouts, terminology, and other elements that affect how the finished video works in the target language."],
  ["What is the difference between video translation and video localization?", "Video translation focuses primarily on converting spoken or written language from one language into another. Video localization takes a broader approach by adapting the complete audiovisual experience for the target audience, potentially including voice, subtitles, graphics, on-screen text, interfaces, timing, formatting, metadata, and final production."],
  ["What is the difference between subtitles, captions, voiceover, and dubbing?", "Subtitles display spoken dialogue as text and are commonly used to provide translation while preserving the original audio. Captions provide a text alternative to relevant audio and can include dialogue, speaker identification, and meaningful non-speech sounds. Voiceover adds translated target-language narration or dialogue. Dubbing replaces or recreates the spoken experience in the target language, often with greater attention to synchronization, speaker performance, and visual timing."],
  ["What is AI video dubbing?", "AI video dubbing uses technologies such as speech recognition, machine translation, synthetic speech, voice preservation, and synchronization to create target-language audio more efficiently. For professional enterprise applications, Stepes can combine AI-enabled dubbing with linguistic review, terminology control, pronunciation management, timing adaptation, and audiovisual QA."],
  ["Does Stepes offer AI voice cloning?", "Where technically appropriate and properly authorized, Stepes can support AI voice workflows designed to preserve characteristics of an original speaker across languages. Requirements depend on the platform, voice, source material, consent or authorization, intended use, and project specifications. Translation, pronunciation, timing, and contextual review remain important parts of a professional multilingual workflow."],
  ["Should I use AI dubbing or professional human voiceover?", "It depends on the video. AI dubbing can be effective for large content libraries, training, tutorials, product education, recurring updates, and projects where rapid multilingual scale matters. Human voiceover is often preferred for premium customer-facing content, regulated or sensitive material, brand-critical communication, emotional storytelling, and projects requiring detailed performance control. Many enterprise programs use both."],
  ["Can Stepes translate text that appears inside a video?", "Yes. Stepes can localize titles, lower thirds, charts, diagrams, callouts, product information, presentation slides, screenshots, software interfaces, animation, safety information, disclaimers, and calls to action when the necessary source assets are available. Layouts and timing can also be adapted for target-language expansion, contraction, fonts, and writing systems."],
  ["Can Stepes localize YouTube and social media videos?", "Yes. Stepes localizes video for YouTube, LinkedIn, Vimeo, websites, social platforms, and other digital channels based on client-authorized source files or appropriate hosted-video workflows. Services can include subtitles, captions, voiceover, dubbing, on-screen localization, titles, descriptions, thumbnail text, and other metadata."],
  ["Can Stepes translate subtitles and closed captions?", "Yes. Stepes supports professional subtitle and caption translation across 100+ languages and common formats such as SRT and WebVTT/VTT. Workflows can include transcription, timing, segmentation, translation, readability editing, format conversion, synchronization, and final QA."],
  ["Does Stepes provide multilingual video accessibility services?", "Stepes can support multilingual subtitles, closed captions, SDH, transcripts, and audio-description-related localization depending on project requirements. Accessibility requirements vary by content, audience, jurisdiction, and publishing environment, so the appropriate language deliverables should be selected for the specific use case."],
  ["How does Stepes maintain terminology across multiple videos?", "Stepes can apply translation memory, terminology databases, style guidance, approved translations, pronunciation guidance, and customer reviewer feedback across related projects. This helps keep product names, technical terminology, brand language, UI strings, and recurring phrases consistent across subtitles, human voiceover, AI dubbing, on-screen text, and metadata."],
  ["Can Stepes update translated videos when the original changes?", "Yes. For recurring video programs, Stepes can support version-based localization workflows that identify changed content, reuse approved translation where appropriate, update affected language assets, and produce revised multilingual versions. This is particularly valuable for product training, software demonstrations, compliance content, and customer education libraries."],
  ["What video and subtitle formats does Stepes support?", "Stepes supports a broad range of common video, audio, subtitle, document, and production formats. Subtitle support includes widely used formats such as SRT and VTT, with additional formats available depending on the project. Source and delivery requirements vary across production environments, so customers can also review the Stepes File Format Support resource or confirm a specific format with the project team."],
  ["How many languages does Stepes support for video translation?", "Stepes provides professional video translation and localization in 100+ languages, supporting major global markets as well as many regional languages. Available combinations can include subtitles, captions, transcription, human voiceover, AI voice, dubbing, visual localization, and multimedia production depending on the language and project requirements."],
  ["How long does video translation take?", "Turnaround depends on video length and complexity, target languages, source assets, translation volume, localization method, voice requirements, graphics, lip synchronization, review level, and production specifications. Subtitle projects are typically faster than full voiceover or lip-sync dubbing, while suitable AI-enabled workflows can further accelerate voice production."],
  ["How much does video translation cost?", "Pricing depends on video duration, source word count, number of languages, transcription, subtitle or caption production, human or AI voice, voice casting, dubbing or lip-sync requirements, on-screen text and graphics, multimedia engineering, quality and review requirements, delivery formats, and schedule. A project-specific quote is the most accurate way to price the actual scope."],
];

function HeroVisual() {
  return (
    <div className="heroVisual" role="img" aria-label="Illustration of one source video becoming multiple localized video experiences">
      <div className="sourceVideo">
        <div className="sourceTop"><span>Source Video</span><span>EN</span></div>
        <div className="videoStage">
          <div className="presenter"><div className="presenterHead"/><div className="presenterBody"/></div>
          <div className="waveform">{Array.from({length: 16}).map((_, i)=><i key={i} style={{height: `${10 + ((i*7)%24)}px`}} />)}</div>
          <div className="subtitleLine">Introducing the next generation of global product training.</div>
        </div>
      </div>
      <div className="translationCore">
        <div className="coreIcon">文<span>A</span></div>
        <div>Translate · Voice · QA</div>
      </div>
      <div className="languageRail">
        {[
          ["ES", "Subtitles"], ["DE", "AI Voice"], ["JA", "Human Voice"], ["FR", "Lip Sync"]
        ].map(([lang, mode]) => (
          <div className="langOutput" key={lang}>
            <b>{lang}</b><span>{mode}</span><div className="miniWave"><i/><i/><i/><i/><i/></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LayerVisual() {
  const layers = [
    [<MicIcon />, "Voice", "Narration, dialogue, presenters"],
    [<CaptionsIcon />, "Subtitles", "Translated and synchronized text"],
    [<ScreenIcon />, "On-Screen Text", "Titles, UI, callouts, labels"],
    [<LayersIcon />, "Graphics", "Charts, slides, animation"],
    [<GlobeIcon />, "Metadata", "Titles, descriptions, chapters"],
  ];
  return (
    <div className="layerVisual">
      <div className="layerScreen">
        <div className="layerScreenHead"><span>Localized Video Experience</span><span>100+ Languages</span></div>
        <div className="layerScreenBody">
          <div className="mockSlide"><div className="mockTitle"/><div className="mockChart"><i/><i/><i/><i/></div></div>
          <div className="mockPresenter"><div/><span/></div>
          <div className="mockCaption">Consistent language across every layer of the video.</div>
        </div>
      </div>
      <div className="layerList">
        {layers.map(([icon, title, body]) => (
          <div className="layerItem" key={title}><IconBadge>{icon}</IconBadge><div><strong>{title}</strong><span>{body}</span></div></div>
        ))}
      </div>
    </div>
  );
}

function TerminologyVisual() {
  return (
    <div className="termVisual">
      <div className="termHub">
        <span>Enterprise Language Assets</span>
        <strong>One Video Vocabulary</strong>
        <div className="termTags"><i>Product terms</i><i>Brand style</i><i>Pronunciation</i><i>Approved translations</i></div>
      </div>
      <div className="termOutputs">
        {["Subtitles", "Human Voice", "AI Dubbing", "On-Screen Text", "Graphics", "Metadata"].map((x)=><div key={x}><span className="termDot" aria-hidden="true" />{x}</div>)}
      </div>
      <div className="termLanguages"><b>ES</b><b>DE</b><b>JA</b><b>FR</b><b>PT</b></div>
    </div>
  );
}

function WholeVideoVisual() {
  return (
    <div className="wholeVideoVisual">
      <div className="wholeFrame">
        <div className="wholeHeader"><span>Product Training · DE</span><span>02:14</span></div>
        <div className="wholeBody">
          <div className="uiDemo">
            <div className="uiSidebar"><i/><i/><i/><i/></div>
            <div className="uiPanel"><b>Geräteeinstellungen</b><span>Sprache</span><div className="uiButton">Änderungen speichern</div></div>
          </div>
          <div className="lowerThird"><b>Anna Keller</b><span>Product Specialist</span></div>
          <div className="wholeCaption">Wählen Sie die Sprache und speichern Sie anschließend Ihre Änderungen.</div>
        </div>
      </div>
      <div className="wholeLegend">
        {["Interface", "Lower third", "Subtitle", "Voice", "Graphics"].map((x)=><span key={x}><i/>{x}</span>)}
      </div>
    </div>
  );
}

function ExampleVisual({ label, mode, accent }) {
  return (
    <div className="exampleVisual">
      <div className="exampleTop"><span>{label}</span><b>{mode}</b></div>
      <div className="exampleFrame">
        <div className="examplePerson"><i/><span/></div>
        <div className="exampleWave" style={{"--accent": accent}}>{Array.from({length: 14}).map((_,i)=><i key={i} style={{height:`${8+((i*9)%28)}px`}}/>)}</div>
        <div className="exampleCaption">Localized video content that sounds natural and stays on message.</div>
      </div>
    </div>
  );
}

export default function StepesVideoTranslationServicesWireframe() {
  return (
    <main className="stepesPage">
      <style>{`
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepesPage { font-family: "Inter Tight", "Inter", Arial, sans-serif; color: ${INK}; background: #fff; font-size: 16px; line-height: 1.65; overflow-x: hidden; }
        .stepesPage a { text-decoration: none; }
        .shell { max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding-top: 96px; padding-bottom: 96px; }
        .sectionDense { padding-top: 80px; padding-bottom: 80px; }
        .bgSoft { background: ${SOFT}; }
        .bgBlush { background: ${BLUSH}; }
        .bgDark { background: #21191E; color: #fff; }
        .eyebrow { color: ${MAGENTA}; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 16px; }
        .eyebrowDark { color: ${LIGHT_MAGENTA}; }
        h1,h2,h3,p { margin-top: 0; }
        h1,h2,h3 { font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.04; margin-bottom: 24px; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 10px; }
        p { font-size: 16px; line-height: 1.72; color: ${MUTED}; margin-bottom: 20px; }
        .bodyLarge { font-size: 18px; line-height: 1.65; }
        .sectionHeading { max-width: 820px; margin-bottom: 52px; }
        .sectionHeading-center { margin-left: auto; margin-right: auto; text-align: center; }
        .sectionHeading-left, .sectionHeading-scan { text-align: left; }
        .sectionHeading p { font-size: 18px; max-width: 790px; margin-left: auto; margin-right: auto; margin-bottom: 0; }
        .sectionHeading-left p, .sectionHeading-scan p { margin-left: 0; }
        .sectionHeadingDark h2 { color: #fff; }
        .sectionHeadingDark p { color: #D7D3D6; }
        .hero { padding-top: 104px; padding-bottom: 104px; }
        .heroGrid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(460px, .98fr); gap: 72px; align-items: center; }
        .heroCopy p { max-width: 720px; }
        .heroActions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; }
        .ctaPrimary, .ctaPrimary:link, .ctaPrimary:visited, .ctaPrimary:hover, .ctaPrimary:active, .ctaPrimary:focus, .ctaPrimary:focus-visible {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; padding: 13px 22px; border-radius: 999px; background: ${MAGENTA}; color: #fff !important; font-size: 16px; font-weight: 600; border: 1px solid ${MAGENTA}; transition: transform .18s ease, background .18s ease, box-shadow .18s ease; }
        .ctaPrimary * { color: #fff !important; stroke: currentColor; }
        .ctaPrimary:hover { background: ${MAGENTA_DARK}; border-color: ${MAGENTA_DARK}; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193,29,99,.16); }
        .ctaPrimary:focus-visible, .ctaSecondary:focus-visible, .editorialLink:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .ctaSecondary, .ctaSecondary:visited { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; padding: 13px 22px; border-radius: 999px; background: #fff; color: ${INK}; font-size: 16px; font-weight: 600; border: 1px solid #D8D8DD; transition: transform .18s ease, border-color .18s ease; }
        .ctaSecondary:hover { border-color: #B5B5BC; transform: translateY(-1px); }
        .ctaSecondaryDark, .ctaSecondaryDark:link, .ctaSecondaryDark:visited, .ctaSecondaryDark:hover, .ctaSecondaryDark:active, .ctaSecondaryDark:focus, .ctaSecondaryDark:focus-visible { background: transparent; border-color: rgba(255,255,255,.35); color: #fff; }
        .editorialLink, .editorialLink:visited { display: inline-flex; align-items: center; gap: 6px; color: ${MAGENTA}; font-size: 16px; font-weight: 600; }
        .editorialLink:hover { color: ${MAGENTA_DARK}; }
        .heroVisual { position: relative; min-height: 470px; border: 1px solid ${BORDER}; border-radius: 30px; background: linear-gradient(145deg,#fff 0%,#FBF8FA 55%,#FDF2F7 100%); padding: 28px; box-shadow: 0 24px 60px rgba(19,15,18,.08); overflow: hidden; }
        .sourceVideo { width: 72%; background: #fff; border: 1px solid #DDDDE1; border-radius: 20px; overflow: hidden; box-shadow: 0 16px 38px rgba(0,0,0,.08); }
        .sourceTop, .exampleTop, .wholeHeader { min-height: 42px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 14px; border-bottom: 1px solid ${BORDER}; font-size: 14px; color: #6E6E74; }
        .sourceTop span:last-child { color: ${MAGENTA}; font-weight: 600; }
        .videoStage { position: relative; height: 230px; background: #F3F3F5; padding: 22px; }
        .presenter { width: 122px; height: 156px; position: absolute; right: 20px; bottom: 44px; }
        .presenterHead { width: 50px; height: 50px; border-radius: 50%; background: #C9C9CE; margin: auto; }
        .presenterBody { width: 106px; height: 94px; border-radius: 48px 48px 16px 16px; background: #B6B6BC; margin: -2px auto 0; }
        .waveform { position: absolute; left: 20px; top: 42px; height: 54px; display: flex; align-items: center; gap: 4px; }
        .waveform i { width: 4px; border-radius: 4px; background: ${MAGENTA}; opacity: .7; }
        .subtitleLine { position: absolute; left: 18px; right: 18px; bottom: 15px; border-radius: 8px; background: rgba(21,21,24,.88); color: #fff; padding: 8px 12px; text-align: center; font-size: 14px; line-height: 1.35; }
        .translationCore { position: absolute; left: 50%; top: 55%; transform: translate(-50%,-50%); width: 144px; min-height: 116px; border-radius: 24px; background: #20181D; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; z-index: 4; box-shadow: 0 16px 36px rgba(0,0,0,.18); text-align: center; font-size: 14px; }
        .coreIcon { display: flex; align-items: center; gap: 8px; color: ${LIGHT_MAGENTA}; font-size: 23px; font-weight: 600; }
        .coreIcon span { color: #fff; }
        .languageRail { position: absolute; width: 60%; right: 22px; bottom: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .langOutput { background: #fff; border: 1px solid ${BORDER}; border-radius: 14px; padding: 12px; display: grid; grid-template-columns: 30px 1fr; align-items: center; gap: 2px 8px; font-size: 14px; box-shadow: 0 8px 18px rgba(0,0,0,.05); }
        .langOutput b { color: ${MAGENTA}; font-size: 14px; }
        .langOutput span { color: #58585E; font-size: 14px; }
        .miniWave { grid-column: 2; display:flex; gap:2px; align-items:end; height:12px; }
        .miniWave i { width: 3px; height: 6px; background: #A8A8AE; border-radius: 2px; }
        .miniWave i:nth-child(2){height:10px}.miniWave i:nth-child(3){height:7px}.miniWave i:nth-child(4){height:12px}
        .proofBand { border-top: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; background: #fff; }
        .proofGrid { display: grid; grid-template-columns: repeat(5,1fr); }
        .proofItem { padding: 26px 18px; text-align: center; border-right: 1px solid ${BORDER}; font-size: 16px; font-weight: 600; }
        .proofItem:last-child { border-right: 0; }
        .overviewGrid, .splitGrid { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 76px; align-items: center; }
        .overviewCopy h2, .splitCopy h2 { max-width: 650px; }
        .overviewCopy p, .splitCopy p { max-width: 700px; }
        .layerVisual { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; border: 1px solid ${BORDER}; border-radius: 28px; padding: 20px; background: #fff; box-shadow: 0 18px 50px rgba(0,0,0,.06); }
        .layerScreen { border: 1px solid ${BORDER}; border-radius: 19px; overflow: hidden; background: #F4F4F6; }
        .layerScreenHead { height: 45px; display:flex; align-items:center; justify-content:space-between; padding:0 14px; font-size:14px; background:#fff; border-bottom:1px solid ${BORDER}; color:#65656C; }
        .layerScreenHead span:last-child { color:${MAGENTA}; font-weight:600; }
        .layerScreenBody { position:relative; min-height:330px; padding:22px; }
        .mockSlide { width: 58%; height: 145px; background:#fff; border:1px solid #D6D6DB; border-radius:12px; padding:18px; }
        .mockTitle { width:68%; height:10px; border-radius:5px; background:#97979E; margin-bottom:22px; }
        .mockChart { height:70px; display:flex; align-items:end; gap:10px; border-bottom:1px solid #D9D9DE; }
        .mockChart i { width:18px; background:${MAGENTA}; opacity:.68; border-radius:4px 4px 0 0; height:35px; }.mockChart i:nth-child(2){height:54px}.mockChart i:nth-child(3){height:42px}.mockChart i:nth-child(4){height:66px}
        .mockPresenter { position:absolute; right:26px; top:34px; width:92px; }
        .mockPresenter div { width:42px;height:42px;border-radius:50%;background:#B7B7BE;margin:auto;}.mockPresenter span{display:block;width:86px;height:98px;border-radius:40px 40px 14px 14px;background:#A6A6AD;margin:-2px auto 0}
        .mockCaption { position:absolute; left:20px; right:20px; bottom:18px; background:#1D1D21; color:#fff; padding:9px 12px; border-radius:8px; font-size:14px; text-align:center; }
        .layerList { display:flex; flex-direction:column; justify-content:center; }
        .layerItem { display:grid; grid-template-columns:44px 1fr; gap:12px; align-items:start; padding:15px 4px; border-bottom:1px solid ${BORDER}; }
        .layerItem:last-child{border-bottom:0}.layerItem strong{display:block;font-size:16px;margin-bottom:2px}.layerItem span{display:block;color:${MUTED};font-size:16px;line-height:1.5}
        .iconBadge { width:42px; height:42px; border-radius:13px; background:${BLUSH}; color:${MAGENTA}; display:flex; align-items:center; justify-content:center; }
        .serviceGrid { display:grid; grid-template-columns:1fr 1fr; border-top:1px solid ${BORDER}; }
        .serviceItem { padding:28px 28px 28px 0; border-bottom:1px solid ${BORDER}; min-height:175px; }
        .serviceItem:nth-child(odd){padding-right:44px;border-right:1px solid ${BORDER};}.serviceItem:nth-child(even){padding-left:44px}.serviceItem p{margin-bottom:0}
        .serviceLinks { margin-top:34px; display:flex; flex-wrap:wrap; gap:22px; }
        .modelGrid { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid ${BORDER}; border-radius:28px; overflow:hidden; background:#fff; }
        .modelItem { padding:28px 24px 30px; border-right:1px solid ${BORDER}; }
        .modelItem:last-child{border-right:0}.modelItem .iconBadge{margin-bottom:22px}.modelItem h3{min-height:60px}.modelBest{font-size:16px;color:${INK};font-weight:400;line-height:1.55;margin-bottom:16px}.modelBestLabel{display:block;color:${MAGENTA};font-weight:600;margin-bottom:4px}.modelItem p{margin-bottom:0}.modelNote{max-width:900px;margin:34px auto 0;text-align:center;font-size:18px;color:${INK};}
        .aiGrid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:70px; align-items:start; }
        .aiIntro p { color:#D7D3D6; max-width:680px; }
        .aiQuote { margin-top:30px; padding:24px 0 0; border-top:2px solid ${MAGENTA}; font-size:22px; line-height:1.45; color:#fff; font-weight:600; }
        .aiCapabilities { border-top:1px solid rgba(255,255,255,.16); }
        .aiCapability { display:grid; grid-template-columns:44px 1fr; gap:16px; padding:22px 0; border-bottom:1px solid rgba(255,255,255,.16); }
        .aiCapability .iconBadge { background:rgba(242,167,198,.10); color:${LIGHT_MAGENTA}; }
        .aiCapability h3 { color:#fff; margin-bottom:6px; }.aiCapability p{color:#CFCACE;margin-bottom:0}
        .termVisual { position:relative; min-height:420px; display:grid; place-items:center; padding:26px; border-radius:28px; background:linear-gradient(145deg,#fff,#FDF4F8); border:1px solid ${BORDER}; overflow:hidden; }
        .termHub { width:58%; min-height:190px; border-radius:24px; background:#21191E; color:#fff; display:flex; flex-direction:column; justify-content:center; padding:28px; box-shadow:0 20px 48px rgba(0,0,0,.16); z-index:2; }
        .termHub span{font-size:14px;color:${LIGHT_MAGENTA};margin-bottom:8px}.termHub strong{font-size:24px;line-height:1.2;margin-bottom:18px}.termTags{display:flex;flex-wrap:wrap;gap:8px}.termTags i{font-style:normal;font-size:14px;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.09);color:#E8E5E7}
        .termOutputs { position:absolute; inset:24px; display:grid; grid-template-columns:1fr 1fr; align-content:space-between; justify-content:space-between; pointer-events:none; }
        .termOutputs div{width:160px; min-height:52px; background:#fff; border:1px solid ${BORDER}; border-radius:14px; padding:11px 12px; display:flex;align-items:center;gap:9px;font-size:16px;font-weight:600;box-shadow:0 8px 18px rgba(0,0,0,.04)}
        .termOutputs div:nth-child(even){justify-self:end}.termOutputs .termDot{width:7px;height:7px;border-radius:50%;background:${MAGENTA};display:block;flex:0 0 auto}.termLanguages{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:7px;z-index:3}.termLanguages b{width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid ${BORDER};display:flex;align-items:center;justify-content:center;color:${MAGENTA};font-size:14px}
        .termLinks { display:flex; gap:20px; flex-wrap:wrap; margin-top:26px; }
        .wholeVideoVisual { border:1px solid ${BORDER}; border-radius:28px; padding:20px; background:#fff; box-shadow:0 18px 45px rgba(0,0,0,.05); }
        .wholeFrame{border:1px solid ${BORDER};border-radius:20px;overflow:hidden}.wholeBody{position:relative;min-height:320px;background:#ECECEF;padding:24px}.uiDemo{display:grid;grid-template-columns:52px 1fr;width:72%;height:190px;background:#fff;border:1px solid #D5D5DA;border-radius:12px;overflow:hidden}.uiSidebar{background:#232327;padding:18px 12px;display:flex;flex-direction:column;gap:14px}.uiSidebar i{height:8px;border-radius:4px;background:#83838A}.uiPanel{padding:20px;display:flex;flex-direction:column;gap:11px}.uiPanel b{font-size:16px}.uiPanel span{font-size:14px;color:#707077}.uiButton{margin-top:auto;width:max-content;padding:8px 12px;border-radius:8px;background:${MAGENTA};color:#fff;font-size:14px;font-weight:600}.lowerThird{position:absolute;right:18px;bottom:62px;width:180px;background:#fff;padding:10px 12px;border-left:3px solid ${MAGENTA};box-shadow:0 8px 18px rgba(0,0,0,.08)}.lowerThird b,.lowerThird span{display:block}.lowerThird b{font-size:14px}.lowerThird span{font-size:14px;color:#717178}.wholeCaption{position:absolute;left:18px;right:18px;bottom:16px;background:#1E1E22;color:#fff;text-align:center;padding:8px 12px;border-radius:8px;font-size:14px}.wholeLegend{display:flex;flex-wrap:wrap;gap:14px;margin-top:14px}.wholeLegend span{font-size:14px;color:#5E5E65;display:flex;align-items:center;gap:6px}.wholeLegend i{width:8px;height:8px;border-radius:50%;background:${MAGENTA}}
        .workflowList { border-top:1px solid ${BORDER}; }
        .workflowRow { display:grid; grid-template-columns:72px minmax(210px,.7fr) minmax(0,1.3fr); gap:24px; padding:25px 0; border-bottom:1px solid ${BORDER}; align-items:start; }
        .workflowNumber { font-size:16px; font-weight:600; color:${MAGENTA}; padding-top:2px; }
        .workflowRow h3 { margin-bottom:0; }
        .workflowRow p { margin-bottom:0; }
        .workflowFooter { margin-top:32px; border-left:3px solid ${MAGENTA}; padding-left:20px; font-size:20px; line-height:1.5; color:${INK}; font-weight:600; }
        .libraryGrid { display:grid; grid-template-columns:.83fr 1.17fr; gap:70px; align-items:start; }
        .libraryIntro p{max-width:620px}.libraryPanel{background:#fff;border:1px solid #F1D9E4;border-radius:28px;padding:12px 28px}.libraryRow{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:20px 0;border-bottom:1px solid #F0DFE7}.libraryRow:last-child{border-bottom:0}.libraryRow .iconBadge{width:40px;height:40px}.libraryRow h3{margin-bottom:5px}.libraryRow p{margin-bottom:0}.libraryQuote{margin-top:28px;font-size:20px;font-weight:600;color:${BURGUNDY};line-height:1.45}
        .businessList{border-top:1px solid ${BORDER}}.businessRow{display:grid;grid-template-columns:58px minmax(220px,.58fr) minmax(0,1.42fr);gap:22px;padding:27px 0;border-bottom:1px solid ${BORDER};align-items:start}.businessRow h3{margin-bottom:0}.businessRow p{margin-bottom:0}.businessRow .iconBadge{background:#fff;border:1px solid ${BORDER}}
        .platformGrid{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:start}.platformPills{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}.platformPills span{padding:9px 13px;border-radius:999px;background:#fff;border:1px solid ${BORDER};font-size:16px;color:#4E4E54}.deliverables{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;border-top:1px solid ${BORDER}}.deliverable{display:flex;gap:10px;padding:14px 0;border-bottom:1px solid ${BORDER};font-size:16px;align-items:flex-start}.deliverable svg{color:${MAGENTA};flex:0 0 auto;margin-top:3px}.platformLinks{display:flex;flex-wrap:wrap;gap:20px;margin-top:26px}
        .accessGrid{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border-top:1px solid ${BORDER}}.accessItem{padding:26px 0;border-bottom:1px solid ${BORDER}}.accessItem p{margin-bottom:0}
        .examplesGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.exampleVisual{border:1px solid ${BORDER};border-radius:20px;overflow:hidden;background:#fff}.exampleTop b{color:${MAGENTA};font-size:14px}.exampleFrame{position:relative;height:215px;background:#EFEFF1;padding:16px}.examplePerson{position:absolute;right:16px;top:22px;width:64px}.examplePerson i{display:block;width:34px;height:34px;border-radius:50%;background:#B7B7BD;margin:auto}.examplePerson span{display:block;width:62px;height:70px;border-radius:30px 30px 12px 12px;background:#A6A6AC}.exampleWave{display:flex;align-items:center;gap:3px;height:50px;margin-top:30px}.exampleWave i{width:4px;background:var(--accent);border-radius:4px}.exampleCaption{position:absolute;left:12px;right:12px;bottom:12px;background:#202024;color:#fff;border-radius:7px;padding:7px 9px;font-size:14px;line-height:1.35;text-align:center}
        .whyGrid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid ${BORDER}}.whyItem{padding:26px 28px 26px 0;border-bottom:1px solid ${BORDER};display:grid;grid-template-columns:42px 1fr;gap:14px}.whyItem:nth-child(odd){border-right:1px solid ${BORDER};padding-right:44px}.whyItem:nth-child(even){padding-left:44px}.whyItem .whyMarker{width:34px;height:34px;border-radius:50%;border:1px solid #E9C9D7;color:${MAGENTA};display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px}.whyItem h3{margin-bottom:6px}.whyItem p{margin-bottom:0}
        .relatedBand{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid ${BORDER};border-radius:28px;overflow:hidden;background:#fff}.relatedItem{padding:26px 24px;border-right:1px solid ${BORDER};min-height:220px}.relatedItem:last-child{border-right:0}.relatedItem p{margin-bottom:18px}
        .faqPanel{max-width:940px;margin:0 auto;border-top:1px solid ${BORDER}}.faqItem{border-bottom:1px solid ${BORDER}}.faqItem summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:1fr 34px;gap:24px;align-items:center;padding:22px 0;font-size:18px;font-weight:600}.faqItem summary::-webkit-details-marker{display:none}.faqItem summary:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:4px;border-radius:8px}.faqPlus{width:30px;height:30px;border-radius:50%;border:1px solid #DCDCE1;display:flex;align-items:center;justify-content:center;color:${MAGENTA};font-size:20px;transition:transform .2s ease}.faqItem[open] .faqPlus{transform:rotate(45deg)}.faqAnswer{max-width:840px;padding:0 42px 22px 0}.faqAnswer p{margin-bottom:0}
        .finalSection{padding:88px 0 96px;background:#fff}.finalCta{border-radius:30px;background:${BLUSH};color:${INK};padding:62px 56px;border:1px solid #F0D9E4;display:grid;grid-template-columns:minmax(0,1.25fr) auto;gap:40px;align-items:center}.finalCta h2{color:${INK};margin-bottom:16px;max-width:720px}.finalCta p{color:${MUTED};max-width:760px;margin-bottom:0;font-size:18px}.finalActions{display:flex;flex-direction:column;gap:12px;min-width:250px}        @media (max-width: 1100px) {
          .shell{padding-left:40px;padding-right:40px}.heroGrid{grid-template-columns:1fr 1fr;gap:44px}.heroVisual{min-height:430px}.modelGrid{grid-template-columns:1fr 1fr}.modelItem:nth-child(2){border-right:0}.modelItem:nth-child(-n+2){border-bottom:1px solid ${BORDER}}.examplesGrid{grid-template-columns:1fr 1fr}.relatedBand{grid-template-columns:1fr 1fr}.relatedItem:nth-child(2){border-right:0}.relatedItem:nth-child(-n+2){border-bottom:1px solid ${BORDER}}
        }
        @media (max-width: 820px) {
          .shell{padding-left:24px;padding-right:24px}.section{padding-top:80px;padding-bottom:80px}.sectionDense{padding-top:72px;padding-bottom:72px}.hero{padding-top:88px;padding-bottom:88px}.heroGrid,.overviewGrid,.splitGrid,.aiGrid,.libraryGrid,.platformGrid{grid-template-columns:1fr;gap:48px}.wholeVideoGrid .splitCopy{order:1}.wholeVideoGrid .wholeVideoVisual{order:2}h1{font-size:42px;line-height:1.05}h2{font-size:32px;line-height:1.14}h3{font-size:22px}.overviewCopy,.splitCopy,.aiIntro,.libraryIntro,.platformGrid>div{text-align:left}.overviewCopy h2,.splitCopy h2,.aiIntro h2,.libraryIntro h2,.platformGrid h2{text-align:center}.overviewCopy .eyebrow,.splitCopy .eyebrow,.aiIntro .eyebrow,.libraryIntro .eyebrow,.platformGrid .eyebrow{text-align:center}.overviewCopy>p:first-of-type,.splitCopy>p:first-of-type,.aiIntro>p:first-of-type,.libraryIntro>p:first-of-type,.platformGrid>div:first-child>p:first-of-type{max-width:620px;margin-left:auto;margin-right:auto;text-align:center}.heroCopy{text-align:center}.heroCopy h1,.heroCopy p{margin-left:auto;margin-right:auto}.heroActions{justify-content:center}.heroVisual{max-width:650px;width:100%;margin:0 auto}.proofGrid{grid-template-columns:1fr 1fr}.proofItem{font-size:16px;padding:22px 12px;border-bottom:1px solid ${BORDER}}.proofItem:nth-child(even){border-right:0}.proofItem:last-child{grid-column:1 / -1;border-bottom:0}.sectionHeading{margin-bottom:44px}.layerVisual{grid-template-columns:1fr}.serviceGrid{grid-template-columns:1fr}.serviceItem,.serviceItem:nth-child(odd),.serviceItem:nth-child(even){padding:24px 0;border-right:0}.workflowRow{grid-template-columns:60px 1fr}.workflowRow p{grid-column:2}.businessRow{grid-template-columns:48px 1fr}.businessRow p{grid-column:2}.whyGrid{grid-template-columns:1fr}.whyItem,.whyItem:nth-child(odd),.whyItem:nth-child(even){border-right:0;padding:24px 0}.accessGrid{grid-template-columns:1fr}.finalCta{grid-template-columns:1fr;padding:48px 40px}.finalActions{flex-direction:row;min-width:0;flex-wrap:wrap}.termVisual{min-height:460px}.termHub{width:64%}
        }
        @media (max-width: 600px) {
          .shell{padding-left:20px;padding-right:20px}.section{padding-top:68px;padding-bottom:68px}.sectionDense{padding-top:64px;padding-bottom:64px}.hero{padding-top:72px;padding-bottom:72px}h1{font-size:38px;line-height:1.06}h2{font-size:30px;line-height:1.16}h3{font-size:20px}.sectionHeading{margin-bottom:36px}.sectionHeading-center,.sectionHeading-left{text-align:center}.sectionHeading-left p{margin-left:auto;margin-right:auto}.sectionHeading-scan{text-align:left}.sectionHeading-scan p{margin-left:0;margin-right:0}.overviewCopy,.splitCopy,.aiIntro,.libraryIntro,.platformGrid>div{text-align:left}.overviewCopy h2,.splitCopy h2,.aiIntro h2,.libraryIntro h2,.platformGrid h2{text-align:center}.overviewCopy .eyebrow,.splitCopy .eyebrow,.aiIntro .eyebrow,.libraryIntro .eyebrow,.platformGrid .eyebrow{text-align:center}.overviewCopy>p:first-of-type,.splitCopy>p:first-of-type,.aiIntro>p:first-of-type,.libraryIntro>p:first-of-type,.platformGrid>div:first-child>p:first-of-type{max-width:520px;margin-left:auto;margin-right:auto;text-align:center}.heroActions{flex-direction:column}.heroActions a{width:100%}.heroVisual{min-height:520px;padding:16px}.sourceVideo{width:100%}.videoStage{height:210px}.translationCore{width:118px;min-height:100px;left:50%;top:58%}.languageRail{width:calc(100% - 32px);right:16px;bottom:16px}.proofGrid{grid-template-columns:1fr 1fr}.proofItem{font-size:16px;border-bottom:1px solid ${BORDER}}.proofItem:nth-child(even){border-right:0}.proofItem:last-child{grid-column:1 / -1;border-bottom:0}.layerVisual{padding:14px}.layerScreenHead{height:auto;min-height:45px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px}.layerScreenBody{min-height:290px}.layerItem span{font-size:16px;line-height:1.55}.modelGrid{grid-template-columns:1fr}.modelItem{border-right:0;border-bottom:1px solid ${BORDER}!important}.modelItem:last-child{border-bottom:0!important}.modelItem h3{min-height:0}.aiQuote{font-size:20px}.termVisual{min-height:0;padding:18px;display:flex;flex-direction:column;align-items:stretch;gap:14px}.termHub{width:100%;min-height:0;padding:22px;order:1}.termOutputs{position:static;inset:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;order:2}.termOutputs div,.termOutputs div:nth-child(even){width:auto;min-height:48px;justify-self:stretch;justify-content:flex-start;font-size:16px;padding:10px}.termLanguages{position:static;left:auto;bottom:auto;transform:none;display:flex;justify-content:center;flex-wrap:wrap;order:3}.wholeVideoVisual{padding:12px}.wholeBody{min-height:360px;padding:16px}.uiDemo{width:100%;height:190px}.lowerThird{right:12px;bottom:76px;width:165px}.wholeCaption{left:12px;right:12px}.workflowRow{grid-template-columns:42px 1fr;gap:14px;padding:22px 0}.workflowNumber{font-size:14px}.workflowFooter{font-size:18px}.libraryPanel{padding:8px 20px}.businessRow{gap:14px}.businessRow p{grid-column:1 / -1}.platformPills span{font-size:16px}.deliverables{grid-template-columns:1fr}.examplesGrid{grid-template-columns:1fr}.whyItem{grid-template-columns:36px 1fr;gap:12px}.relatedBand{grid-template-columns:1fr}.relatedItem{border-right:0;border-bottom:1px solid ${BORDER};min-height:0}.relatedItem:last-child{border-bottom:0}.faqItem summary{font-size:17px;gap:16px}.faqAnswer{padding-right:0}.finalSection{padding:68px 0 76px}.finalCta{padding:40px 24px;text-align:center}.finalCta p{text-align:left}.finalActions{flex-direction:column}.finalActions a{width:100%}.bodyLarge,.sectionHeading p,.finalCta p{font-size:18px}
        }
        @media (max-width: 360px) {
          .heroVisual{min-height:540px}.sourceVideo{width:100%}.languageRail{width:calc(100% - 24px);right:12px}.langOutput{grid-template-columns:26px 1fr;padding:10px}.translationCore{left:50%;top:56%}.termOutputs{grid-template-columns:1fr}.wholeHeader{font-size:14px}.uiDemo{width:100%}.lowerThird{width:150px}.wholeCaption{font-size:14px}.proofItem{padding:20px 8px}
        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <Eyebrow>Enterprise Video Localization</Eyebrow>
            <h1>Video Translation Services for Every Voice, Screen, and Market</h1>
            <p className="bodyLarge">Turn videos into complete multilingual experiences with professional video translation services from Stepes. We localize spoken audio, subtitles, captions, on-screen text, graphics, and video metadata in <strong>100+ languages</strong>, combining expert linguists, human and AI voice production, multimedia engineering, and professional quality assurance.</p>
            <p>From a single product video to a continuously updated global training library, Stepes gives enterprises the flexibility to choose the right localization model for every project—professional subtitles, human voiceover, AI dubbing, lip-sync production, or a combination of approaches.</p>
            <div className="heroActions">
              <PrimaryCTA href="https://www.stepes.com/contact-sales/">Get a Video Translation Quote</PrimaryCTA>
              <SecondaryCTA href="https://www.stepes.com/contact-us/">Talk to a Video Localization Expert</SecondaryCTA>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="proofBand" aria-label="Video translation capabilities">
        <div className="shell proofGrid">
          {['100+ Languages','Human + AI Voice','Subtitles & Captions','Multimedia Engineering','In-Context Video QA'].map(x=><div className="proofItem" key={x}>{x}</div>)}
        </div>
      </section>

      <section className="section">
        <div className="shell overviewGrid">
          <div className="overviewCopy">
            <Eyebrow>Complete Video Experience</Eyebrow>
            <h2>Your Video Communicates in More Than One Way</h2>
            <p className="bodyLarge">A video is more than a spoken script. It is a connected experience in which voice, text, visuals, timing, and design work together to communicate meaning.</p>
            <p>Professional video localization needs to address every content layer your audience sees and hears—from narration and subtitles to embedded interface text, graphics, and platform metadata.</p>
            <p><strong>Stepes localizes the entire viewing experience—not just the audio track.</strong></p>
          </div>
          <LayerVisual />
        </div>
      </section>

      <section className="section bgSoft">
        <div className="shell">
          <SectionHeading
            title="Complete Video Translation and Localization Services"
            intro="Stepes brings professional language expertise and production-ready multilingual media together so enterprises do not need separate vendors for translation, subtitles, voice, engineering, and QA."
          />
          <div className="serviceGrid">
            {services.map(([title,body])=><article className="serviceItem" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="serviceLinks">
            <EditorialLink href="https://www.stepes.com/voiceover-services/">Voiceover Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/multimedia-translation-services/">Multimedia Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/transcription-services/">Transcription Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Choose the Right Localization Experience for Every Video"
            intro="A frequently updated internal training module has different requirements from a global product launch featuring an executive on camera. The right approach depends on audience, content value, production expectations, update frequency, turnaround, and budget."
          />
          <div className="modelGrid">
            {localizationModels.map((item)=><article className="modelItem" key={item.title}><IconBadge>{item.icon}</IconBadge><h3>{item.title}</h3><div className="modelBest"><span className="modelBestLabel">Best for</span><span>{item.best}</span></div><p>{item.body}</p></article>)}
          </div>
          <div className="modelNote">The right video localization strategy is not human versus AI. It is choosing the right level of human expertise, technology, and production for the content in front of you.</div>
        </div>
      </section>

      <section className="section bgDark">
        <div className="shell aiGrid">
          <div className="aiIntro">
            <h2>AI Dubbing at Enterprise Scale—With Professional Human Control</h2>
            <p className="bodyLarge">AI has changed the economics of multilingual video. Speech recognition, translation, synthetic voice, voice preservation, and synchronization can automate production steps that once required extensive manual effort.</p>
            <p>But generating a translated voice track is not the same as delivering an enterprise-ready localized video. Product names must be pronounced correctly, technical language must retain meaning, translated speech must fit scene timing, and the finished video needs to work after voice, subtitles, text, and visuals come together.</p>
            <div className="aiQuote">AI creates speed and scale. Professional localization turns that speed into reliable multilingual content.</div>
          </div>
          <div className="aiCapabilities">
            {[
              [<MicIcon />,"AI Voice Synthesis","Generate multilingual narration efficiently across a broad range of enterprise video types."],
              [<HeadphonesIcon />,"Authorized Voice Preservation","Where appropriate, technically supported, and properly authorized, AI voice technology can help preserve characteristics of the original speaker across languages."],
              [<GlobeIcon />,"Pronunciation Control","Manage product and brand names, executive names, acronyms, technical vocabulary, pharmaceutical and medical terminology, model numbers, and industry-specific terms."],
              [<Check />,"Professional Linguistic Review","Native linguists can validate translated scripts for accuracy, fluency, terminology, audience, and natural spoken delivery."],
              [<RefreshIcon />,"Timing, Pacing & In-Context QA","Adapt translated speech to available time and review pronunciation, synchronization, subtitles, visual text, timing, and overall viewing quality in the finished video."],
            ].map(([icon,title,body])=><article className="aiCapability" key={title}><IconBadge>{icon}</IconBadge><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell splitGrid">
          <div className="splitCopy">
            <Eyebrow>Language Governance</Eyebrow>
            <h2>One Video Vocabulary Across Every Language and Channel</h2>
            <p className="bodyLarge">Global video programs create a consistency challenge that standalone voice generation cannot solve. The same product name, UI string, technical term, or approved phrase may appear across training, software demonstrations, marketing, support, and corporate video.</p>
            <p>Stepes connects video localization with reusable enterprise language assets—translation memory, terminology, brand style, pronunciation guidance, approved translations, and reviewer feedback—so the same controlled language flows across subtitles, human voiceover, AI dubbing, on-screen text, graphics, and metadata.</p>
            <p><strong>The result is one multilingual vocabulary across the complete video ecosystem.</strong></p>
            <div className="termLinks">
              <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
              <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
            </div>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className="section bgSoft">
        <div className="shell splitGrid wholeVideoGrid">
          <WholeVideoVisual />
          <div className="splitCopy">
            <h2>Localize the Whole Video, Not Just the Voice</h2>
            <p className="bodyLarge">Modern video communicates visually as much as it does through narration. Software demonstrations show instructions inside the interface. Technical training contains diagrams and warnings. Marketing depends on animated typography, graphics, and calls to action.</p>
            <p>Stepes can localize titles, lower thirds, animated text, callouts, product specifications, slides, charts, diagrams, software UI, screenshots, safety messages, legal statements, end cards, and other visual content where the necessary source assets are available.</p>
            <p>Because translated text expands, contracts, and behaves differently across writing systems, multimedia engineers can adapt layout, timing, font sizing, positioning, and animation so the localized content remains clear and professional.</p>
            <p><strong>A translated voice over an untranslated screen is not a fully localized video.</strong></p>
            <div className="termLinks">
              <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="A Connected Workflow From Source Video to Global Delivery"
            intro="Successful video localization requires language and production teams to work from the same content, terminology, timing, and quality requirements. Stepes connects those activities through one end-to-end workflow."
            align="scan"
          />
          <div className="workflowList">
            {workflow.map(([title,body],i)=><div className="workflowRow" key={title}><div className="workflowNumber">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <div className="workflowFooter">AI where it accelerates. Human expertise where it matters. One connected workflow throughout.</div>
        </div>
      </section>

      <section className="section bgBlush">
        <div className="shell libraryGrid">
          <div className="libraryIntro">
            <Eyebrow>Continuous Localization</Eyebrow>
            <h2>Localize One Video—or Manage an Entire Global Video Library</h2>
            <p className="bodyLarge">Enterprise video rarely stays finished. Products change. Software interfaces evolve. Training requirements are revised. New languages are added. A launch becomes an ongoing customer-education program.</p>
            <p>Stepes supports video as a continuously evolving multilingual content operation rather than a series of disconnected translation projects.</p>
            <div className="libraryQuote">Your multilingual videos should evolve with the source—not start over every time something changes.</div>
          </div>
          <div className="libraryPanel">
            {[
              [<VersionIcon />,"Version-Based Localization","Keep translated versions aligned as the original video changes."],
              [<LayersIcon />,"Translation Reuse","Reuse approved translations and terminology instead of retranslating unchanged content."],
              [<Check />,"Incremental Updates","When practical, focus translation and production effort on the content that actually changed."],
              [<GlobeIcon />,"New Language Expansion","Add target languages using established terminology, translation memory, and production guidance."],
              [<ShieldIcon />,"Series-Level Consistency","Maintain terminology, tone, voice direction, subtitle conventions, and visual standards across related videos."],
              [<MicIcon />,"Continuing Reviewer Feedback","Carry validated customer feedback into future releases and reduce repeated language decisions."],
            ].map(([icon,title,body])=><div className="libraryRow" key={title}><IconBadge>{icon}</IconBadge><div><h3>{title}</h3><p>{body}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Video Localization for Every Enterprise Content Type"
            intro="Different business videos have different audiences, risks, and production requirements. Stepes adapts the localization workflow accordingly."
          />
          <div className="businessList">
            {businessTypes.map(([icon,title,body])=><div className="businessRow" key={title}><IconBadge>{icon}</IconBadge><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <div className="serviceLinks">
            <EditorialLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/engineering-translation-services/">Engineering Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section bgSoft">
        <div className="shell platformGrid">
          <div>
            <h2>Ready for the Platforms Your Audiences Use</h2>
            <p className="bodyLarge">A video localization project is complete when translated content can be delivered where people will actually use it.</p>
            <p>Stepes prepares multilingual video for digital, learning, corporate, and social distribution environments based on project requirements and client-authorized source assets. For public-facing video, localized titles, descriptions, chapters, thumbnail text, tags, and other metadata can also support multilingual discoverability and a more consistent global publishing experience.</p>
            <div className="platformPills">
              {['YouTube','Vimeo','LinkedIn','TikTok','Instagram','Learning Management Systems','Corporate Portals','Product Support Centers','Customer Education Platforms','Websites'].map(x=><span key={x}>{x}</span>)}
            </div>
            <div className="platformLinks">
              <EditorialLink href="https://www.stepes.com/youtube-translation-services/">YouTube Translation Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/multimedia-translation-services/">Multimedia Translation Services</EditorialLink>
            </div>
          </div>
          <div>
            <h3>Project Deliverables Can Include</h3>
            <div className="deliverables">
              {['Final localized video','Separate multilingual audio tracks','SRT subtitle files','VTT caption files','Other supported subtitle formats','Translated scripts','Voice recordings','Localized graphics','Platform metadata','Project-specific source or production assets'].map(x=><div className="deliverable" key={x}><Check/><span>{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Make Global Video More Accessible"
            intro="Multilingual reach and accessibility often intersect. Stepes supports several forms of video language access, each designed for a different audience need."
          />
          <div className="accessGrid">
            <article className="accessItem"><h3>Subtitles</h3><p>Subtitles generally present spoken dialogue as text and are commonly used when viewers can hear the original audio but do not understand the language being spoken. Translated subtitles help international audiences follow the original speakers without replacing the source audio.</p></article>
            <article className="accessItem"><h3>Captions</h3><p>Captions provide a text representation of relevant audio information. In addition to dialogue, they can identify speakers and communicate meaningful sounds necessary to understand the content. Closed captions can be turned on or off when the player supports them, while open captions are part of the video image.</p></article>
            <article className="accessItem"><h3>SDH</h3><p>Subtitles for Deaf and Hard-of-Hearing audiences can combine translated dialogue with relevant speaker and sound information for viewers who require both language translation and auditory access.</p></article>
            <article className="accessItem"><h3>Audio Description</h3><p>Audio description is different from captions. It provides spoken narration describing important visual information that may not be available from the original soundtrack, such as actions, scene changes, charts, or essential on-screen information.</p></article>
            <article className="accessItem"><h3>Transcripts</h3><p>Transcripts provide a text version of video or audio content and can support accessibility, content reuse, search, translation, review, and reference needs.</p></article>
            <article className="accessItem"><h3>The Right Accessibility Model</h3><p>The appropriate accessibility solution depends on the audience, platform, content, and applicable organizational or regulatory requirements. Stepes can help define the language deliverables needed for the project.</p></article>
          </div>
        </div>
      </section>

      <section className="section bgSoft">
        <div className="shell">
          <SectionHeading
            eyebrow="Video Localization in Action"
            title="Hear and See the Difference"
            intro="Video localization is something audiences experience—not something that can be judged from a translated document alone. Compare how different localization models change the same viewing experience."
          />
          <div className="examplesGrid">
            <ExampleVisual label="Original" mode="Source Video" accent="#8C8C93" />
            <ExampleVisual label="Localized" mode="Subtitles" accent={MAGENTA} />
            <ExampleVisual label="Localized" mode="Human Voice" accent={MAGENTA_DARK} />
            <ExampleVisual label="Localized" mode="AI Dubbing + Human QA" accent={BURGUNDY} />
          </div>
          <p style={{maxWidth:'840px',margin:'30px auto 0',textAlign:'center'}}>Across every workflow, the goal is the same: a localized video that communicates naturally, accurately, and professionally to the people watching it.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Enterprise Video Localization Built for Quality and Scale"
            intro="Global organizations need more than disconnected translation, voice, and editing services. They need a partner that understands how language, technology, production, terminology, and quality work together."
          />
          <div className="whyGrid">
            {whyChoose.map(([title,body])=><article className="whyItem" key={title}><div className="whyMarker"><Check /></div><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section bgSoft">
        <div className="shell">
          <SectionHeading
            title="Connected Localization for Every Multimedia Experience"
            intro="Video rarely exists by itself. It is often connected to training, websites, software, presentations, documentation, marketing assets, and other multilingual content."
          />
          <div className="relatedBand">
            <article className="relatedItem"><h3>Voiceover Services</h3><p>Professional multilingual voice production for corporate, technical, training, product, marketing, and other media.</p><EditorialLink href="https://www.stepes.com/voiceover-services/">Voiceover Services</EditorialLink></article>
            <article className="relatedItem"><h3>Multimedia Translation Services</h3><p>Translate and produce content across video, audio, graphics, animation, presentations, and other multimedia formats.</p><EditorialLink href="https://www.stepes.com/multimedia-translation-services/">Multimedia Translation Services</EditorialLink></article>
            <article className="relatedItem"><h3>eLearning Translation Services</h3><p>Localize learning content, video, narration, subtitles, graphics, interactions, assessments, and LMS-ready course experiences.</p><EditorialLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</EditorialLink></article>
            <article className="relatedItem"><h3>File Format Support</h3><p>Review the document, multimedia, subtitle, and localization file formats supported by Stepes.</p><EditorialLink href="https://www.stepes.com/resources/file-format-support/">File Format Support</EditorialLink></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Video Translation Services FAQ" intro="Answers to common questions about professional video translation, dubbing, subtitles, accessibility, AI voice, workflow, and delivery." />
          <div className="faqPanel">
            {faqs.map(([q,a])=><details className="faqItem" key={q}><summary><span>{q}</span><span className="faqPlus" aria-hidden="true">+</span></summary><div className="faqAnswer"><p>{a}</p>{q.includes('YouTube')?<div style={{marginTop:'14px'}}><EditorialLink href="https://www.stepes.com/youtube-translation-services/">YouTube Translation Services</EditorialLink></div>:null}{q.includes('formats')?<div style={{marginTop:'14px'}}><EditorialLink href="https://www.stepes.com/resources/file-format-support/">File Format Support</EditorialLink></div>:null}</div></details>)}
          </div>
        </div>
      </section>

      <section className="finalSection">
        <div className="shell">
          <div className="finalCta">
            <div>
              <h2>Take Your Videos Global</h2>
              <p>Whether you are translating one product video or managing an evolving library of training, marketing, technical, and corporate content, Stepes brings professional translation, multilingual voice, subtitles, visual localization, multimedia engineering, and quality control together in one scalable workflow.</p>
            </div>
            <div className="finalActions">
              <PrimaryCTA href="https://www.stepes.com/contact-sales/">Get a Video Translation Quote</PrimaryCTA>
              <SecondaryCTA href="https://www.stepes.com/contact-us/">Talk to a Video Localization Expert</SecondaryCTA>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
