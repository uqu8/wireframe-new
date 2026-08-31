const COLORS = {
  magenta: '#C11D63',
  magentaDark: '#A71954',
  burgundy: '#7A1542',
  blush: '#FDF2F7',
  lightMagenta: '#F2A7C6',
};

const workInstructionTypes = [
  {
    title: 'Assembly Work Instructions',
    text: 'Detailed instructions for component assembly, fastening, fitting, wiring, joining, soldering, installation, subassembly, and final production operations.',
  },
  {
    title: 'Machine Setup and Operation',
    text: 'Equipment preparation, startup, shutdown, tooling, fixture setup, calibration, parameter settings, operating sequences, and production changeovers.',
  },
  {
    title: 'Inspection and Quality Instructions',
    text: 'Inspection methods, measurements, sampling requirements, defect classifications, acceptance criteria, and quality checkpoints.',
  },
  {
    title: 'Maintenance Work Instructions',
    text: 'Preventive and corrective maintenance covering inspection, lubrication, cleaning, adjustment, parts replacement, servicing, and repair.',
  },
  {
    title: 'Testing Instructions',
    text: 'Laboratory, production, functional, verification, electrical, mechanical, and other testing procedures, including setup and result criteria.',
  },
  {
    title: 'Packaging and Labeling Instructions',
    text: 'Packing sequences, labeling requirements, product identification, serialization, handling, palletization, storage, and shipment preparation.',
  },
  {
    title: 'Cleaning and Sanitation Instructions',
    text: 'Equipment cleaning, sanitation, disinfection, contamination control, line clearance, facility cleaning, and hygiene-related tasks.',
  },
  {
    title: 'Warehouse and Material Handling',
    text: 'Receiving, inventory, picking, packing, storage, loading, equipment use, material movement, and distribution-center operations.',
  },
  {
    title: 'Safety-Related Work Instructions',
    text: 'Task-specific precautions, PPE requirements, hazard controls, equipment warnings, isolation steps, and safe operating instructions.',
  },
  {
    title: 'Troubleshooting and Corrective Instructions',
    text: 'Diagnostic sequences, error conditions, corrective actions, repair steps, equipment resets, and escalation requirements.',
  },
];

const industries = [
  {
    title: 'Automotive Manufacturing',
    text: 'Assembly, machining, inspection, testing, quality, maintenance, supplier, battery-production, and production-line work instructions.',
    href: 'https://www.stepes.com/automotive-translation-services/',
    link: 'Automotive Translation Services',
  },
  {
    title: 'Electronics Manufacturing',
    text: 'Assembly, testing, repair, ESD handling, inspection, component, packaging, and production instructions for electronics and technology manufacturing.',
    href: 'https://www.stepes.com/electronics-translation-services/',
    link: 'Electronics Translation Services',
  },
  {
    title: 'Industrial Equipment and Machinery',
    text: 'Equipment operation, fabrication, machining, assembly, inspection, maintenance, installation, and plant work instructions.',
  },
  {
    title: 'Medical Devices',
    text: 'Manufacturing, inspection, testing, cleaning, packaging, quality-control, and other controlled work instructions used across medical device operations.',
  },
  {
    title: 'Pharmaceutical and Life Sciences',
    text: 'Production, laboratory, cleaning, packaging, quality, material-handling, and controlled operational instructions.',
  },
  {
    title: 'Chemicals and Materials',
    text: 'Batch operations, laboratory procedures, production instructions, equipment use, material handling, quality testing, and packaging.',
  },
  {
    title: 'Aerospace and Advanced Manufacturing',
    text: 'Assembly, inspection, tooling, maintenance, fabrication, production-control, and quality work instructions with specialized technical terminology.',
  },
  {
    title: 'Logistics and Warehousing',
    text: 'Receiving, storage, inventory management, material handling, picking, packing, fulfillment, equipment use, and shipping operations.',
  },
];

const qaItems = [
  ['Meaning and Completeness', 'Confirm that steps, warnings, requirements, and important source information are accurately represented without omissions.'],
  ['Technical Terminology', 'Check terminology against approved glossaries, product language, and project-specific requirements.'],
  ['Numbers and Measurements', 'Review quantities, units, tolerances, dimensions, ranges, settings, and other task-critical values.'],
  ['Step Sequence', 'Preserve numbered operations, dependencies, and procedural relationships across the translated instruction.'],
  ['Protected Content', 'Maintain part numbers, product codes, model numbers, trademarks, variables, and other content that should remain unchanged.'],
  ['Formatting and Visual Context', 'Check tables, callouts, labels, diagrams, page structure, and the relationship between text and supporting visuals.'],
  ['Linguistic Quality', 'Review accuracy, grammar, fluency, clarity, consistency, and target-language usability.'],
  ['Language Asset Consistency', 'Apply approved translation memory and terminology so recurring content remains aligned across documents and revisions.'],
];

const workflow = [
  ['Analyze', 'Review files, languages, formats, terminology, repeated content, visual elements, quality requirements, and delivery needs.'],
  ['Prepare', 'Apply existing glossaries, translation memories, reference materials, approved translations, and project instructions.'],
  ['Translate', 'Route content through the appropriate professional, AI-assisted, or hybrid translation workflow based on complexity, risk, and scale.'],
  ['Review', 'Professional linguists review meaning, clarity, terminology, context, and consistency, with additional technical or customer review where required.'],
  ['Assure Quality', 'Use automated and human checks to identify omissions, terminology issues, numerical inconsistencies, and formatting problems.'],
  ['Deliver and Reuse', 'Deliver final multilingual work instructions and retain approved language assets for future revisions and related content.'],
];

const whyStepes = [
  ['Manufacturing and Technical Expertise', 'Support for technical and manufacturing content across engineering, automotive, electronics, industrial, medical device, life sciences, and other specialized sectors.'],
  ['AI + Human Translation', 'Modern AI-powered workflows combined with professional linguistic expertise and human validation according to quality, scale, and risk requirements.'],
  ['Translation Memory', 'Reuse approved multilingual content across recurring instructions and future revisions instead of retranslating identical material.'],
  ['Terminology Control', 'Standardize product, component, process, equipment, quality, and safety terminology across languages and documents.'],
  ['Visual and Digital Content Support', 'Translate traditional documents together with visual, structured, and digital work instruction content.'],
  ['Enterprise Quality Assurance', 'Connect linguistic review with terminology controls, translation memory, automated checks, approvals, and final-format QA.'],
];

const related = [
  ['Manufacturing Translation Services', 'https://www.stepes.com/manufacturing-translation-services/', 'Technical, production, quality, training, supplier, and operational content for global manufacturers.', 'View Manufacturing Services'],
  ['SOP Translation Services', 'https://www.stepes.com/sop-translation-services/', 'Standardized procedures for global quality, compliance, production, and operational teams.', 'View SOP Translation'],
  ['Technical Translation Services', 'https://www.stepes.com/technical-translation-services/', 'Engineering documentation, manuals, specifications, instructions, and technical content.', 'View Technical Translation'],
  ['AI-Powered Translation Workflows', 'https://www.stepes.com/solutions/ai-powered-translation-workflows/', 'Combine AI translation, approved language assets, professional review, and quality controls around content needs and risk.', 'View AI-Powered Workflows'],
  ['Translation Memory', 'https://www.stepes.com/translation-memory/', 'Reuse approved multilingual content to improve consistency and accelerate recurring translation.', 'View Translation Memory'],
  ['Terminology Management', 'https://www.stepes.com/terminology-management/', 'Govern approved multilingual technical vocabulary across AI systems, translators, and reviewers.', 'View Terminology Management'],
  ['Translation Quality Assurance', 'https://www.stepes.com/translation-quality-assurance/', 'Connect automated QA, human review, terminology controls, and multilingual quality management.', 'View Quality Assurance'],
  ['Enterprise Translation Management', 'https://www.stepes.com/enterprise-translation-management/', 'Centralize translation requests, workflows, language assets, review, approvals, and delivery visibility.', 'View Enterprise Translation Management'],
];

const faqs = [
  {
    q: 'What is work instruction translation?',
    a: 'Work instruction translation is the translation of detailed, task-specific instructions used to perform manufacturing, inspection, maintenance, testing, cleaning, packaging, warehouse, laboratory, and other operational activities. Because these documents frequently contain technical terminology, measurements, numbered steps, warnings, visual references, equipment settings, and acceptance criteria, the translation must preserve both linguistic meaning and operational clarity.',
  },
  {
    q: 'What is the difference between an SOP and a work instruction?',
    a: 'An SOP generally defines a broader process, including what needs to happen, who is responsible, and which requirements or controls apply. A work instruction typically provides more detailed guidance for performing an individual task, including exact steps, tools, settings, measurements, visuals, and checkpoints. Organizations often use SOPs and work instructions together.',
  },
  {
    q: 'What types of work instructions can Stepes translate?',
    a: 'Stepes translates assembly instructions, machine operating instructions, inspection procedures, maintenance instructions, testing methods, cleaning instructions, packaging procedures, warehouse instructions, troubleshooting procedures, safety-related instructions, laboratory instructions, and many other forms of task-level operational documentation.',
  },
  {
    q: 'Can Stepes translate visual work instructions?',
    a: 'Yes. Stepes supports work instructions containing photographs, diagrams, screenshots, tables, arrows, callouts, part labels, inspection images, safety symbols, and other visual elements. Translation and formatting workflows help keep localized text connected to the correct visual reference.',
  },
  {
    q: 'Can you translate digital or electronic work instructions?',
    a: 'Yes. Stepes supports multilingual content for digital work instruction systems, manufacturing applications, operator terminals, tablets, portals, connected-worker environments, quality systems, and structured content platforms. Depending on the system and project requirements, workflows can use files, structured exports, APIs, or other localization methods.',
  },
  {
    q: 'How do you maintain terminology consistency across hundreds of work instructions?',
    a: 'Stepes uses terminology management and translation memory to maintain approved multilingual language across recurring documents. Terminology resources define preferred translations for important components, tools, equipment, materials, processes, quality terms, and product names, while translation memory preserves previously approved bilingual content for appropriate reuse.',
  },
  {
    q: 'Can Stepes translate only the changes in a revised work instruction?',
    a: 'Translation memory can identify exact and similar content from previously translated versions so linguists can focus on new or modified material rather than retranslating all unchanged content. The workflow depends on the source format, revision method, translation memory availability, and project requirements.',
  },
  {
    q: 'What languages does Stepes support for manufacturing workforces?',
    a: 'Stepes supports professional translation across more than 100 languages and regional variants, including Spanish, Chinese, Vietnamese, Portuguese, Polish, French, German, Japanese, Korean, Thai, Romanian, Czech, Arabic, and many others used across global manufacturing and operations.',
  },
  {
    q: 'Can Stepes handle thousands of work instructions?',
    a: 'Yes. Stepes supports enterprise translation programs involving large file volumes, multiple languages, recurring revisions, distributed teams, translation memory, terminology management, AI-assisted workflows, professional human review, and centralized project management. Programs can begin with a pilot and scale to plants, multi-site manufacturing networks, or ongoing global content operations.',
  },
  {
    q: 'How does Stepes check numbers, measurements, and technical data?',
    a: 'Work instruction quality workflows can include checks for numbers, measurements, units, tolerances, part numbers, protected content, machine settings, terminology, missing content, and formatting. Professional reviewers also evaluate translated meaning and context according to project requirements.',
  },
  {
    q: 'Can AI be used for work instruction translation?',
    a: 'Yes. AI can be valuable for high-volume, repetitive, and frequently updated manufacturing content. Stepes combines AI translation with approved terminology, translation memory, automated QA, and professional human review according to content complexity and risk. For task-critical instructions, human validation helps confirm that steps, terminology, warnings, measurements, and technical meaning remain appropriate for their intended use.',
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5c.8 4 2.5 5.7 6.5 6.5-4 .8-5.7 2.5-6.5 6.5-.8-4-2.5-5.7-6.5-6.5 4-.8 5.7-2.5 6.5-6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18.5 15.5c.4 1.9 1.2 2.7 3 3-1.8.4-2.6 1.2-3 3-.4-1.8-1.2-2.6-3-3 1.8-.3 2.6-1.1 3-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.7 19 6v5.1c0 4.5-2.8 7.6-7 9.2-4.2-1.6-7-4.7-7-9.2V6l7-2.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.8 12.1 2 2 4.5-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 480" role="presentation">
        <rect x="54" y="40" width="360" height="396" rx="26" fill="#fff" stroke="#AAB2BD" strokeWidth="2" />
        <rect x="84" y="74" width="182" height="16" rx="8" fill="#D8DCE2" />
        <rect x="84" y="102" width="244" height="10" rx="5" fill="#ECEEF1" />
        <rect x="84" y="124" width="214" height="10" rx="5" fill="#ECEEF1" />
        <line x1="84" y1="156" x2="384" y2="156" stroke="#D6DAE0" strokeWidth="1.5" />

        <circle cx="103" cy="193" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" />
        <path d="m96.5 193 4.2 4.2 8.3-9" fill="none" stroke="#C11D63" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="132" y="178" width="154" height="12" rx="6" fill="#B7BDC6" />
        <rect x="132" y="201" width="224" height="9" rx="4.5" fill="#E4E7EB" />
        <rect x="132" y="219" width="188" height="9" rx="4.5" fill="#E4E7EB" />

        <circle cx="103" cy="268" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" />
        <path d="M98 268h10M103 263v10" stroke="#C11D63" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="132" y="253" width="128" height="12" rx="6" fill="#B7BDC6" />
        <rect x="132" y="276" width="218" height="9" rx="4.5" fill="#E4E7EB" />
        <rect x="132" y="294" width="164" height="9" rx="4.5" fill="#E4E7EB" />

        <circle cx="103" cy="343" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" />
        <path d="M96 343h14" stroke="#C11D63" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="132" y="328" width="176" height="12" rx="6" fill="#B7BDC6" />
        <rect x="132" y="351" width="222" height="9" rx="4.5" fill="#E4E7EB" />
        <rect x="132" y="369" width="196" height="9" rx="4.5" fill="#E4E7EB" />

        <rect x="390" y="92" width="176" height="86" rx="20" fill="#fff" stroke="#AAB2BD" strokeWidth="2" />
        <circle cx="430" cy="135" r="20" fill="#FDF2F7" />
        <path d="M416 135h28M430 121c3.8 4.1 5.7 8.8 5.7 14s-1.9 9.9-5.7 14M430 121c-3.8 4.1-5.7 8.8-5.7 14s1.9 9.9 5.7 14" stroke="#C11D63" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="461" y="121" width="72" height="10" rx="5" fill="#B7BDC6" />
        <rect x="461" y="141" width="54" height="9" rx="4.5" fill="#E4E7EB" />

        <rect x="390" y="206" width="176" height="176" rx="22" fill="#111827" />
        <rect x="414" y="232" width="66" height="9" rx="4.5" fill="#F2A7C6" />
        <rect x="414" y="257" width="112" height="11" rx="5.5" fill="#fff" opacity=".92" />
        <rect x="414" y="279" width="128" height="8" rx="4" fill="#838B98" />
        <rect x="414" y="296" width="102" height="8" rx="4" fill="#838B98" />
        <rect x="414" y="325" width="126" height="31" rx="15.5" fill="#C11D63" />
        <path d="M455 340h42M489 333l8 7-8 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M414 178c-16 0-28 13-28 29" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
        <path d="m380 200 6 8 7-7" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  return (
    <div className={`heading-group ${align === 'left' ? 'heading-left' : 'heading-center'}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children }) {
  return (
    <a className="text-link" href={href}>
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

export default function WorkInstructionTranslationServicesWireframe() {
  return (
    <main className="stepes-wireframe">
      <style>{`
        .stepes-wireframe,
        .stepes-wireframe * { box-sizing: border-box; }
        .stepes-wireframe {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --light-magenta: ${COLORS.lightMagenta};
          --ink: #111827;
          --body: #4B5563;
          --muted: #687281;
          --line: #E4E7EC;
          --soft: #F7F8FA;
          --soft-2: #FCFCFD;
          margin: 0;
          min-width: 0;
          overflow-x: clip;
          background: #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-wireframe a { color: inherit; }
        .page-shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }
        .section { padding: 68px 0; }
        .section-dense { padding: 64px 0; }
        .section-soft { background: var(--soft-2); }
        .section-blush { background: var(--blush); }
        .section-dark { background: #111827; color: #fff; }
        .section-burgundy { background: var(--burgundy); color: #fff; }
        .eyebrow {
          margin: 0 0 14px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.35 !important;
          font-weight: 600 !important;
          letter-spacing: .14em !important;
          text-transform: uppercase;
          opacity: 1 !important;
        }
        .section-dark .eyebrow,
        .section-burgundy .eyebrow { color: var(--light-magenta) !important; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; color: var(--ink); letter-spacing: -.032em; }
        .section-dark h2, .section-dark h3,
        .section-burgundy h2, .section-burgundy h3 { color: #fff; }
        h1 { margin-bottom: 24px; font-size: 38px; line-height: 1.04; }
        h2 { margin-bottom: 0; font-size: 30px; line-height: 1.08; }
        h3 { margin-bottom: 0; font-size: 20px; line-height: 1.2; }
        p, li { font-size: 16px; line-height: 1.78; color: var(--body); }
        .lead { font-size: 18px; line-height: 1.72; color: #46505E; }
        .heading-group { margin-bottom: 42px; }
        .heading-center { max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
        .heading-left { max-width: 760px; text-align: left; }
        .section-intro { margin: 18px auto 0; max-width: 800px; font-size: 18px; line-height: 1.72; color: #5A6574; }
        .heading-left .section-intro { margin-left: 0; }
        .section-dark .section-intro,
        .section-burgundy .section-intro { color: #D5DAE2; }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 12px 21px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible,
        .btn-primary *,
        .btn-primary svg { color: #fff !important; fill: none; }
        .btn-primary { background: var(--magenta); color: #fff !important; box-shadow: 0 12px 32px rgba(193,29,99,.16); }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .btn-secondary { background: #fff; border: 1px solid #D8DDE4; color: #202735 !important; }
        .btn-secondary:hover { border-color: #C9CED7; transform: translateY(-1px); }
        .btn-on-dark { background: #fff; color: #42102A !important; }
        .btn-on-dark:hover { background: #FFF7FA; }
        .btn:focus-visible, .text-link:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
        .text-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          text-decoration: none;
        }
        .text-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .hero { background: #fff; padding: 88px 0 64px; }
        .hero-grid { display: grid; gap: 46px; align-items: center; }
        .hero-copy { max-width: 680px; }
        .hero-copy .lead { max-width: 660px; margin-bottom: 0; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .hero-note {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
          display: grid;
          gap: 12px;
        }
        .hero-note-item { display: flex; gap: 10px; align-items: flex-start; }
        .hero-note-item svg { margin-top: 5px; flex: 0 0 auto; color: var(--magenta); }
        .hero-note-item span { font-size: 16px; line-height: 1.6; color: #5A6472; }
        .hero-art { width: 100%; max-width: 590px; margin: 0 auto; }
        .hero-art svg { width: 100%; height: auto; display: block; }
        .proof-band { border-top: 1px solid #D9DDE3; border-bottom: 1px solid #D9DDE3; background: #fff; }
        .proof-grid { display: grid; }
        .proof-item { padding: 22px 0; }
        .proof-item + .proof-item { border-top: 1px solid var(--line); }
        .proof-item strong { display: block; font-size: 16px; font-weight: 600; color: var(--ink); }
        .proof-item span { display: block; margin-top: 3px; font-size: 16px; line-height: 1.5; color: #657080; }
        .overview-grid { display: grid; gap: 42px; }
        .overview-copy { max-width: 720px; }
        .overview-copy p { font-size: 18px; line-height: 1.76; }
        .preserve-list { margin-top: 28px; border-top: 1px solid var(--line); }
        .preserve-row { display: grid; grid-template-columns: 22px 1fr; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--line); }
        .preserve-row svg { color: var(--magenta); margin-top: 3px; }
        .preserve-row span { font-size: 16px; line-height: 1.55; color: #3E4856; }
        .document-panel { border-radius: 30px; border: 1px solid #DDE1E6; background: #fff; padding: 22px; box-shadow: 0 18px 50px rgba(17,24,39,.06); }
        .doc-window { border-radius: 22px; border: 1px solid #DDE1E6; overflow: hidden; background: #FBFCFD; }
        .doc-bar { display: flex; align-items: center; justify-content: space-between; padding: 13px 16px; background: #F4F5F7; border-bottom: 1px solid #E0E3E8; }
        .doc-bar strong { font-size: 14px; color: #3A4350; font-weight: 600; }
        .doc-bar span { font-size: 14px; color: #7B8491; }
        .doc-body { padding: 22px 18px; }
        .doc-title { font-size: 17px; font-weight: 600; color: #1A2230; }
        .doc-meta { margin-top: 6px; font-size: 14px; color: #7B8491; }
        .doc-step { display: grid; grid-template-columns: 30px 1fr; gap: 12px; padding: 18px 0; border-top: 1px solid #E5E8EC; }
        .doc-step:first-of-type { margin-top: 18px; }
        .step-dot { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; }
        .doc-lines { display: grid; gap: 7px; align-content: start; padding-top: 2px; }
        .doc-line { height: 8px; border-radius: 4px; background: #D8DCE2; }
        .doc-line.soft { background: #EBEDF0; }
        .compare-wrap { overflow: hidden; border-radius: 30px; border: 1px solid #DDE1E6; background: #fff; box-shadow: 0 16px 44px rgba(17,24,39,.045); }
        .compare-grid { display: grid; }
        .compare-pane { padding: 28px; }
        .compare-pane + .compare-pane { border-top: 1px solid var(--line); }
        .compare-kicker { display: inline-block; margin-bottom: 16px; color: var(--magenta); font-size: 14px; line-height: 1.4; font-weight: 600; }
        .compare-pane p { margin: 15px 0 0; }
        .compare-list { margin: 20px 0 0; padding: 0; list-style: none; }
        .compare-list li { position: relative; padding-left: 18px; margin-top: 8px; }
        .compare-list li::before { content: ''; position: absolute; left: 0; top: .73em; width: 6px; height: 6px; border-radius: 50%; background: #B8BEC8; }
        .compare-example { padding: 22px 28px; background: var(--blush); border-top: 1px solid #F0DEE6; }
        .compare-example strong { display: block; font-size: 16px; font-weight: 600; color: #3A2630; }
        .compare-example p { margin: 7px 0 0; color: #66535D; }
        .compare-footer { padding: 22px 28px; background: #F8F9FB; border-top: 1px solid var(--line); }
        .compare-footer p { margin: 0 0 8px; }
        .type-list { display: grid; border-top: 1px solid var(--line); }
        .type-item { padding: 24px 0; border-bottom: 1px solid var(--line); }
        .type-item p { margin: 10px 0 0; max-width: 520px; }
        .industry-grid { display: grid; border-top: 1px solid var(--line); }
        .industry-item { padding: 26px 0; border-bottom: 1px solid var(--line); }
        .industry-item p { margin: 10px 0 8px; max-width: 560px; }
        .industry-lead { display: grid; gap: 26px; margin-bottom: 38px; }
        .industry-lead p { margin: 0; font-size: 18px; line-height: 1.76; max-width: 760px; }
        .industry-stat { padding: 22px; border-radius: 24px; background: var(--blush); border: 1px solid #F2DDE7; }
        .industry-stat strong { display: block; font-size: 20px; font-weight: 600; color: #2A1B24; }
        .industry-stat span { display: block; margin-top: 8px; font-size: 16px; line-height: 1.6; color: #6A5661; }
        .workforce-grid { display: grid; gap: 42px; align-items: start; }
        .workforce-copy p { color: #D3D8E0; font-size: 18px; line-height: 1.76; }
        .workforce-benefits { display: grid; border-top: 1px solid rgba(255,255,255,.15); }
        .workforce-benefit { padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,.15); }
        .workforce-benefit strong { display: block; font-size: 18px; font-weight: 600; color: #fff; }
        .workforce-benefit p { margin: 7px 0 0; color: #B9C1CC; }
        .language-row { margin-top: 28px; }
        .language-row p { margin: 0 0 7px; color: #D3D8E0; }
        .language-row .text-link { color: var(--light-magenta) !important; }
        .media-grid { display: grid; gap: 24px; }
        .media-panel { border-radius: 30px; border: 1px solid #DDE1E6; background: #fff; overflow: hidden; }
        .media-panel-copy { padding: 28px; }
        .media-panel-copy p { margin: 14px 0 0; }
        .visual-workflow { padding: 24px; background: #F7F8FA; border-top: 1px solid var(--line); }
        .visual-screen { background: #fff; border: 1px solid #D8DDE4; border-radius: 20px; padding: 20px; }
        .visual-screen-top { display: flex; justify-content: space-between; align-items: center; gap: 8px 12px; flex-wrap: wrap; margin-bottom: 18px; }
        .visual-screen-top strong { font-size: 14px; color: #3C4653; }
        .visual-screen-top span { font-size: 14px; color: #7A8491; }
        .visual-step { display: grid; grid-template-columns: 74px 1fr; gap: 14px; align-items: center; padding: 13px 0; border-top: 1px solid #E7E9ED; }
        .visual-step:first-of-type { border-top: 0; }
        .visual-thumb { aspect-ratio: 1.2; border-radius: 12px; background: linear-gradient(135deg,#E6E9ED,#C9CED5); position: relative; }
        .visual-thumb::after { content: ''; position: absolute; width: 22px; height: 22px; border: 2px solid #9099A5; border-radius: 50%; left: 14px; top: 13px; }
        .visual-step strong { display: block; font-size: 16px; font-weight: 600; color: #25303D; }
        .visual-step span { display: block; margin-top: 5px; font-size: 16px; line-height: 1.5; color: #697482; }
        .digital-screen { padding: 24px; background: #111827; border-top: 1px solid #263142; }
        .digital-ui { border: 1px solid #374151; border-radius: 20px; overflow: hidden; background: #182131; }
        .digital-top { display: flex; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid #344050; }
        .digital-top strong { color: #fff; font-size: 14px; }
        .digital-top span { color: #AAB2BE; font-size: 14px; }
        .digital-body { padding: 18px; }
        .digital-chip { display: inline-flex; padding: 6px 10px; border-radius: 999px; background: rgba(242,167,198,.13); color: var(--light-magenta); font-size: 14px; }
        .digital-line { height: 9px; margin-top: 12px; border-radius: 5px; background: #657080; }
        .digital-line.short { width: 67%; }
        .digital-action { margin-top: 20px; display: flex; justify-content: space-between; align-items: center; gap: 8px 12px; flex-wrap: wrap; padding-top: 18px; border-top: 1px solid #344050; }
        .digital-action span { font-size: 14px; color: #BAC2CC; }
        .digital-action strong { font-size: 14px; color: #fff; }
        .ai-grid { display: grid; gap: 34px; align-items: center; }
        .ai-copy p { margin: 18px 0 0; font-size: 18px; line-height: 1.76; }
        .ai-list { margin-top: 26px; display: grid; gap: 15px; }
        .ai-item { display: grid; grid-template-columns: 42px 1fr; gap: 14px; align-items: start; }
        .ai-icon { width: 42px; height: 42px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: #fff; border: 1px solid #ECDCE4; color: var(--magenta); }
        .ai-icon svg { width: 22px; height: 22px; }
        .ai-item strong { display: block; font-size: 17px; font-weight: 600; color: var(--ink); }
        .ai-item p { margin: 4px 0 0; font-size: 16px; line-height: 1.6; }
        .ai-pipeline { border-radius: 30px; background: #fff; border: 1px solid #E6DDE2; padding: 24px; box-shadow: 0 18px 48px rgba(76,32,53,.08); }
        .pipeline-head { display: flex; gap: 12px; align-items: center; padding-bottom: 18px; border-bottom: 1px solid #E6E8EC; }
        .pipeline-head .ai-icon { background: var(--blush); }
        .pipeline-head strong { font-size: 17px; font-weight: 600; }
        .pipeline-row { padding: 17px 0; display: grid; grid-template-columns: 112px 1fr; gap: 16px; border-bottom: 1px solid #EAECF0; }
        .pipeline-row:last-child { border-bottom: 0; }
        .pipeline-row strong { font-size: 16px; color: #293341; font-weight: 600; }
        .pipeline-row span { font-size: 16px; line-height: 1.55; color: #697482; }
        .language-assets-grid { display: grid; border-radius: 30px; border: 1px solid #DDE1E6; overflow: hidden; background: #fff; }
        .asset-pane { padding: 28px; }
        .asset-pane + .asset-pane { border-top: 1px solid var(--line); }
        .asset-pane p { margin: 14px 0 0; }
        .asset-pane .text-link { margin-top: 10px; }
        .revision-band { margin-top: 28px; display: grid; gap: 12px; }
        .revision-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .revision-chip { padding: 9px 12px; border-radius: 999px; background: #F4F5F7; border: 1px solid #E2E5E9; font-size: 16px; line-height: 1.35; color: #515C6A; }
        .revision-arrow { color: var(--magenta); }
        .qa-grid { display: grid; border-top: 1px solid var(--line); }
        .qa-item { display: grid; grid-template-columns: 24px 1fr; gap: 12px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .qa-item svg { color: var(--magenta); margin-top: 4px; }
        .qa-item strong { display: block; font-size: 17px; font-weight: 600; color: var(--ink); }
        .qa-item p { margin: 7px 0 0; }
        .control-grid { display: grid; gap: 40px; }
        .control-copy p { color: #D1D6DE; font-size: 18px; line-height: 1.76; }
        .control-matrix { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.16); border-left: 1px solid rgba(255,255,255,.16); }
        .control-cell { padding: 18px; border-right: 1px solid rgba(255,255,255,.16); border-bottom: 1px solid rgba(255,255,255,.16); }
        .control-cell strong { display: block; font-size: 16px; font-weight: 600; color: #fff; }
        .control-cell span { display: block; margin-top: 5px; color: #AEB7C3; font-size: 16px; line-height: 1.55; }
        .scale-track { display: grid; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .scale-stage { padding: 24px 0; }
        .scale-stage + .scale-stage { border-top: 1px solid var(--line); }
        .scale-stage strong { display: block; font-size: 20px; font-weight: 600; color: var(--ink); }
        .scale-stage p { margin: 9px 0 0; max-width: 500px; }
        .scale-note { max-width: 780px; margin: 26px auto 0; font-size: 17px; text-align: left; }
        .workflow-wrap { display: grid; gap: 36px; }
        .workflow-list { border-top: 1px solid var(--line); }
        .workflow-step { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .workflow-num { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--blush); color: var(--magenta); font-size: 14px; font-weight: 600; }
        .workflow-step p { margin: 8px 0 0; }
        .workflow-aside { border-radius: 28px; background: #F8F9FB; border: 1px solid #E1E4E9; padding: 26px; align-self: start; }
        .workflow-aside strong { display: block; font-size: 19px; font-weight: 600; color: var(--ink); }
        .workflow-aside p { margin: 12px 0 0; }
        .workflow-aside .text-link { margin-top: 10px; }
        .why-grid { display: grid; border-top: 1px solid var(--line); }
        .why-item { padding: 24px 0; border-bottom: 1px solid var(--line); }
        .why-item p { margin: 10px 0 0; }
        .related-list { border-top: 1px solid var(--line); }
        .related-row { display: grid; gap: 10px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .related-row p { margin: 0; }
        .faq-wrap { max-width: 960px; margin: 0 auto; border-top: 1px solid var(--line); }
        details { border-bottom: 1px solid var(--line); }
        summary { min-height: 68px; display: grid; grid-template-columns: 1fr 28px; gap: 18px; align-items: center; cursor: pointer; list-style: none; padding: 18px 0; }
        summary::-webkit-details-marker { display: none; }
        summary span:first-child { font-size: 18px; line-height: 1.45; font-weight: 600; color: var(--ink); }
        .faq-plus { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #F5F6F8; color: var(--magenta); font-size: 20px; line-height: 1; transition: transform .18s ease; }
        details[open] .faq-plus { transform: rotate(45deg); }
        .faq-answer { max-width: 840px; padding: 0 48px 22px 0; }
        .faq-answer p { margin: 0; }
        .cta-box { border-radius: 30px; padding: 34px 26px; background: var(--burgundy); }
        .cta-grid { display: grid; gap: 28px; align-items: center; }
        .cta-box h2 { color: #fff; }
        .cta-box p { margin: 16px 0 0; max-width: 760px; color: #F5DCE7; font-size: 18px; line-height: 1.72; }
        .cta-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .cta-actions .btn-secondary { background: transparent; border-color: rgba(255,255,255,.42); color: #fff !important; }
        .cta-actions .btn-secondary:hover { background: rgba(255,255,255,.08); }

        @media (min-width: 768px) {
          .page-shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          .hero { padding: 96px 0 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .proof-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .proof-item { padding: 22px 20px; }
          .proof-item:nth-child(odd) { padding-left: 0; }
          .proof-item:nth-child(even) { padding-right: 0; border-left: 1px solid var(--line); }
          .proof-item:nth-child(-n+2) { border-top: 0; }
          .proof-item:nth-child(n+3) { border-top: 1px solid var(--line); }
          .compare-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .compare-pane { padding: 34px; }
          .compare-pane + .compare-pane { border-top: 0; border-left: 1px solid var(--line); }
          .type-list { grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 48px; }
          .industry-grid { grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 48px; }
          .language-assets-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .asset-pane + .asset-pane { border-top: 0; border-left: 1px solid var(--line); }
          .asset-pane:nth-child(3) { grid-column: 1 / -1; border-left: 0; border-top: 1px solid var(--line); }
          .qa-grid { grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 44px; }
          .scale-track { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .scale-stage { padding: 24px 22px; }
          .scale-stage:nth-child(odd) { padding-left: 0; }
          .scale-stage:nth-child(even) { padding-right: 0; border-left: 1px solid var(--line); }
          .scale-stage:nth-child(-n+2) { border-top: 0; }
          .scale-stage:nth-child(n+3) { border-top: 1px solid var(--line); }
          .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 48px; }
          .related-row { grid-template-columns: 1fr; gap: 8px; }
          .cta-box { padding: 44px; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-copy { max-width: 760px; margin: 0 auto; text-align: center; }
          .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-note { max-width: 700px; margin-left: auto; margin-right: auto; text-align: left; }
          .hero-art { max-width: 560px; }
        }

        @media (min-width: 1024px) {
          .page-shell { padding-left: 40px; padding-right: 40px; }
          .section { padding: 96px 0; }
          .section-dense { padding: 80px 0; }
          .hero { padding: 104px 0 82px; }
          h1 { font-size: 48px; }
          h2 { font-size: 36px; }
          h3 { font-size: 24px; }
          .hero-grid { grid-template-columns: minmax(0,1.06fr) minmax(420px,.94fr); gap: 54px; }
          .proof-grid { grid-template-columns: repeat(4,minmax(0,1fr)); }
          .proof-item { border-top: 0 !important; }
          .proof-item:nth-child(n) { padding-left: 20px; padding-right: 20px; }
          .proof-item:first-child { padding-left: 0; }
          .proof-item:last-child { padding-right: 0; }
          .proof-item + .proof-item { border-left: 1px solid var(--line); }
          .language-assets-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
          .asset-pane:nth-child(3) { grid-column: auto; border-top: 0; border-left: 1px solid var(--line); }
          .scale-track { grid-template-columns: repeat(4,minmax(0,1fr)); }
          .scale-stage { border-top: 0 !important; padding: 24px 22px; }
          .scale-stage:nth-child(n) { padding-left: 22px; padding-right: 22px; }
          .scale-stage:first-child { padding-left: 0; }
          .scale-stage:last-child { padding-right: 0; }
          .scale-stage + .scale-stage { border-left: 1px solid var(--line); }
          .related-row { grid-template-columns: minmax(230px,.9fr) 1.45fr auto; align-items: center; gap: 24px; }
          .hero-note { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .overview-grid { grid-template-columns: minmax(0,1.05fr) minmax(390px,.95fr); align-items: center; gap: 64px; }
          .media-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .industry-lead { grid-template-columns: minmax(0,1.4fr) minmax(300px,.6fr); align-items: center; gap: 54px; }
          .workforce-grid { grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 72px; }
          .ai-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.82fr); gap: 64px; }
          .control-grid { grid-template-columns: minmax(0,.9fr) minmax(440px,1.1fr); gap: 72px; align-items: start; }
          .workflow-wrap { grid-template-columns: minmax(0,1.25fr) minmax(300px,.55fr); gap: 58px; align-items: start; }
          .why-grid { grid-template-columns: repeat(3,minmax(0,1fr)); column-gap: 38px; }
          .cta-grid { grid-template-columns: minmax(0,1.35fr) auto; gap: 48px; }
        }

        @media (min-width: 1440px) {
          .page-shell { padding-left: 56px; padding-right: 56px; }
        }

        @media (max-width: 767px) {
          .heading-center { text-align: center; }
          .heading-center .section-intro { text-align: center; }
          .heading-left { text-align: left; }
          .hero-copy { text-align: center; margin: 0 auto; }
          .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-actions .btn { width: 100%; }
          .hero-note { text-align: left; }
          .hero-art { max-width: 520px; }
          .compare-footer { padding: 20px 24px; }
          .pipeline-row { grid-template-columns: 1fr; gap: 5px; }
          .control-matrix { grid-template-columns: 1fr; border-left: 0; }
          .control-cell { border-left: 1px solid rgba(255,255,255,.16); }
          .revision-flow { display: grid; grid-template-columns: 1fr; gap: 8px; align-items: start; }
          .revision-chip { width: 100%; text-align: center; }
          .revision-arrow { display: flex; justify-content: center; transform: rotate(90deg); }
          .workflow-aside { margin-top: 4px; }
          .related-row .text-link { margin-top: 2px; }
          .faq-answer { padding-right: 0; }
          .cta-box { text-align: center; }
          .cta-actions { justify-content: center; }
          .cta-actions .btn { width: 100%; }
        }

        @media (max-width: 390px) {
          .hero-art { width: calc(100% + 8px); margin-left: -4px; }
          .document-panel, .media-panel-copy, .visual-workflow, .digital-screen, .ai-pipeline, .asset-pane, .workflow-aside { padding-left: 20px; padding-right: 20px; }
          .doc-bar { flex-wrap: wrap; gap: 6px 12px; }
          .visual-step { grid-template-columns: 62px 1fr; }
          .digital-top { flex-wrap: wrap; gap: 6px 10px; }
          .cta-box { padding-left: 22px; padding-right: 22px; }
        }
      `}</style>

      <section className="hero">
        <div className="page-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Manufacturing & Operations</p>
              <h1>Work Instruction Translation Services</h1>
              <p className="lead">
                Translate detailed production and operational instructions with the accuracy,
                consistency, and speed global teams need to perform every task correctly. Stepes
                combines AI-powered workflows with professional linguists, approved terminology,
                translation memory, and systematic quality assurance for multilingual work
                instructions across plants, production lines, warehouses, laboratories, and
                regulated operations.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-sales/">
                  Request a Translation Quote <ArrowIcon />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                </a>
              </div>
              <div className="hero-note">
                <div className="hero-note-item"><CheckIcon /><span>From one instruction to thousands of recurring revisions</span></div>
                <div className="hero-note-item"><CheckIcon /><span>Static documents, visual instructions, and digital work content</span></div>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Service highlights">
        <div className="page-shell">
          <div className="proof-grid">
            <div className="proof-item"><strong>Manufacturing Expertise</strong><span>Task-level technical content</span></div>
            <div className="proof-item"><strong>AI + Human Workflows</strong><span>Scale with professional review</span></div>
            <div className="proof-item"><strong>Terminology + Translation Memory</strong><span>Approved language for recurring updates</span></div>
            <div className="proof-item"><strong>100+ Languages</strong><span>Global plants and workforces</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <div className="overview-grid">
            <div className="overview-copy">
              <p className="eyebrow">Point-of-Work Clarity</p>
              <h2>Work Instructions That Work in Every Language</h2>
              <p style={{ marginTop: 22 }}>
                Work instructions sit close to the actual work. They tell operators, technicians,
                inspectors, maintenance teams, laboratory personnel, warehouse employees, and other
                frontline teams how to complete a specific task accurately and consistently.
              </p>
              <p>
                A work instruction may specify an exact operating sequence, machine setting,
                measurement, tool, material, inspection criterion, warning, diagram, photograph, or
                acceptance threshold. Translation therefore has to preserve more than the words—it
                has to preserve the logic of the task.
              </p>
              <div className="preserve-list" aria-label="Work instruction elements Stepes preserves">
                {[
                  'Step sequences and procedural logic',
                  'Technical terminology and equipment names',
                  'Measurements, units, settings, and operating parameters',
                  'Warnings, cautions, and task-specific safety information',
                  'Inspection criteria, tables, diagrams, screenshots, and callouts',
                  'Part numbers, product references, structure, and formatting',
                ].map((item) => (
                  <div className="preserve-row" key={item}><CheckIcon /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <div className="document-panel">
              <div className="doc-window">
                <div className="doc-bar"><strong>Work Instruction</strong><span>Revision 08</span></div>
                <div className="doc-body">
                  <div className="doc-title">Assembly & Inspection Procedure</div>
                  <div className="doc-meta">Production Cell 4 · English → Spanish</div>
                  {[1,2,3].map((step) => (
                    <div className="doc-step" key={step}>
                      <div className="step-dot">{step}</div>
                      <div className="doc-lines">
                        <div className="doc-line" style={{ width: step === 1 ? '74%' : step === 2 ? '58%' : '68%' }} />
                        <div className="doc-line soft" style={{ width: step === 1 ? '92%' : step === 2 ? '84%' : '88%' }} />
                        <div className="doc-line soft" style={{ width: step === 1 ? '66%' : step === 2 ? '76%' : '61%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ margin: '18px 2px 0', fontSize: 16, lineHeight: 1.65, color: '#66717F' }}>
                The goal is simple: employees working in different languages should receive the same
                clear guidance for performing the same task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Document Hierarchy"
            title="SOPs and Work Instructions: Different Levels of Operational Detail"
            intro="Organizations often use both together: SOPs establish the required process, while work instructions provide the detailed guidance employees need to carry it out correctly."
          />
          <div className="compare-wrap">
            <div className="compare-grid">
              <div className="compare-pane">
                <span className="compare-kicker">SOPs</span>
                <h3>Define the Process</h3>
                <p>Standard operating procedures typically describe the broader process that must be followed.</p>
                <ul className="compare-list">
                  <li>What must happen</li>
                  <li>Roles and responsibilities</li>
                  <li>Required procedures</li>
                  <li>Quality requirements</li>
                  <li>Governance and controls</li>
                </ul>
              </div>
              <div className="compare-pane">
                <span className="compare-kicker">Work Instructions</span>
                <h3>Explain the Task</h3>
                <p>Work instructions go deeper into the activity performed at a workstation, machine, inspection point, laboratory, or facility.</p>
                <ul className="compare-list">
                  <li>Exact steps and sequence</li>
                  <li>Tools and materials</li>
                  <li>Machine settings</li>
                  <li>Measurements and visual references</li>
                  <li>Inspection and acceptance criteria</li>
                </ul>
              </div>
            </div>
            <div className="compare-example">
              <strong>How they work together</strong>
              <p>
                An SOP may require torque verification before final assembly. The related work
                instruction can identify the torque wrench, specify the required setting and
                fastening sequence, show the relevant component, and explain how the result is recorded.
              </p>
            </div>
            <div className="compare-footer">
              <p>Need translation for higher-level procedures?</p>
              <TextLink href="https://www.stepes.com/sop-translation-services/">SOP Translation Services</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            title="Work Instructions for Every Stage of Operations"
            intro="Stepes supports manufacturing work instruction translation across production, quality, engineering, maintenance, logistics, laboratory, and other operational functions."
          />
          <div className="type-list">
            {workInstructionTypes.map((item) => (
              <article className="type-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-shell">
          <SectionHeading
            title="Work Instruction Translation for Global Manufacturing"
            intro="A process designed in one location may need to be performed consistently across plants, suppliers, contract manufacturers, departments, and languages."
          />
          <div className="industry-lead">
            <p>
              One manufacturing organization may maintain hundreds or thousands of work instructions
              across production cells, engineering teams, quality departments, maintenance groups,
              laboratories, warehouses, and global facilities. Those instructions continue to evolve
              as products, equipment, materials, quality requirements, and processes change.
            </p>
            <div className="industry-stat">
              <strong>Built for recurring content</strong>
              <span>Translate, review, reuse, revise, and scale approved language across your operating network.</span>
            </div>
          </div>
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href ? <TextLink href={item.href}>{item.link}</TextLink> : null}
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <TextLink href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services</TextLink>
            <TextLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell">
          <div className="workforce-grid">
            <div className="workforce-copy">
              <h2>Clear Work Instructions for Multilingual Workforces</h2>
              <p style={{ marginTop: 22 }}>
                Global operations increasingly depend on teams that work across languages, countries,
                facilities, suppliers, and cultural backgrounds. Translating task-level instructions
                into the languages employees use can strengthen comprehension, training, quality,
                safety communication, and consistent execution.
              </p>
              <div className="language-row">
                <p>Support Spanish, Chinese, Vietnamese, Polish, Portuguese, French, German, Japanese, Korean, Thai, Czech, Romanian, and many other languages.</p>
                <TextLink href="https://www.stepes.com/translation-languages/">Explore 100+ Translation Languages</TextLink>
              </div>
            </div>
            <div className="workforce-benefits">
              {[
                ['Task Comprehension', 'Give employees detailed instructions they can readily understand and apply.'],
                ['Operational Consistency', 'Reduce the chance that different facilities or language groups interpret the same procedure differently.'],
                ['Training Effectiveness', 'Reinforce onboarding and hands-on training with clear instructions employees can reference while working.'],
                ['Quality Execution', 'Keep process steps, measurements, inspection criteria, and acceptance requirements aligned across teams.'],
                ['Safety Communication', 'Make task-specific precautions, warnings, and safe operating instructions easier to understand and follow.'],
                ['Global Standardization', 'Deploy common processes across plants while giving local teams instructions in the appropriate languages.'],
              ].map(([title, text]) => (
                <div className="workforce-benefit" key={title}>
                  <strong>{title}</strong><p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Visual + Digital Content"
            title="Translate the Instruction Without Losing the Workflow"
            intro="Work instructions increasingly combine text, images, diagrams, structured steps, and digital interfaces. Stepes supports both document-based and connected work instruction content."
          />
          <div className="media-grid">
            <article className="media-panel">
              <div className="media-panel-copy">
                <h3>Visual Work Instruction Translation</h3>
                <p>
                  Keep translated text aligned with photographs, diagrams, arrows, callouts,
                  screenshots, part labels, tables, symbols, numbered steps, and embedded graphics.
                </p>
                <p>
                  Stepes supports Word, Excel, PowerPoint, PDF, Adobe InDesign, Illustrator, XML,
                  HTML, and other document and structured content formats.
                </p>
              </div>
              <div className="visual-workflow">
                <div className="visual-screen">
                  <div className="visual-screen-top"><strong>Assembly Instruction</strong><span>Visual sequence</span></div>
                  {[['Position component','Confirm orientation before fastening'],['Torque fastener','Apply specified torque value'],['Inspect result','Verify fit against acceptance criteria']].map(([title, meta]) => (
                    <div className="visual-step" key={title}>
                      <div className="visual-thumb" />
                      <div><strong>{title}</strong><span>{meta}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="media-panel">
              <div className="media-panel-copy">
                <h3>Digital Work Instruction Translation</h3>
                <p>
                  Support electronic work instruction systems, operator tablets, manufacturing
                  applications, connected-worker tools, quality platforms, portals, and structured
                  content repositories.
                </p>
                <p>
                  Digital workflows can include reusable steps, linked visuals, product-specific
                  content, and frequent updates—making terminology, translation memory, and structured
                  delivery especially valuable.
                </p>
              </div>
              <div className="digital-screen">
                <div className="digital-ui">
                  <div className="digital-top"><strong>Operator Guidance</strong><span>ES-MX</span></div>
                  <div className="digital-body">
                    <span className="digital-chip">Step 04 · Inspection</span>
                    <div className="digital-line" />
                    <div className="digital-line short" />
                    <div className="digital-action"><span>Visual reference linked</span><strong>Ready for review</strong></div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="page-shell">
          <div className="ai-grid">
            <div className="ai-copy">
              <h2>AI-Powered Work Instruction Translation With Human Quality Control</h2>
              <p>
                High-volume work instruction programs are well suited to intelligent automation,
                but production content also requires control. Stepes applies an appropriate combination
                of AI translation, translation memory, approved terminology, professional review,
                and automated quality checks based on content requirements and business risk.
              </p>
              <div className="ai-list">
                {[
                  [<SparkIcon key="s" />, 'AI for Speed and Scale', 'Accelerate large and recurring multilingual work instruction programs.'],
                  [<LayersIcon key="l" />, 'Approved Language Assets', 'Use translation memory and terminology to anchor recurring content in trusted language.'],
                  [<ShieldIcon key="h" />, 'Professional Human Review', 'Apply linguistic and subject-aware judgment where accuracy, context, and risk require it.'],
                ].map(([icon, title, text]) => (
                  <div className="ai-item" key={title}>
                    <div className="ai-icon">{icon}</div>
                    <div><strong>{title}</strong><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}><TextLink href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflow</TextLink></div>
            </div>
            <div className="ai-pipeline">
              <div className="pipeline-head"><div className="ai-icon"><ShieldIcon /></div><strong>Quality Controls Around AI Translation</strong></div>
              {[
                ['Language Assets', 'Apply approved terminology and translation memory before new translation begins.'],
                ['AI-Assisted Translation', 'Accelerate suitable high-volume and repetitive content without treating every instruction the same.'],
                ['Professional Review', 'Validate task-critical meaning, terminology, context, clarity, and target-language usability.'],
                ['Automated QA', 'Check omissions, numbers, protected content, consistency, and formatting before delivery.'],
              ].map(([label, text]) => <div className="pipeline-row" key={label}><strong>{label}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Recurring Translation Operations"
            title="Keep Terminology, Translations, and Revisions Aligned"
            intro="Work instructions change as products, equipment, quality requirements, and processes evolve. Reusable language assets help every new revision move faster without losing consistency."
          />
          <div className="language-assets-grid">
            <article className="asset-pane">
              <h3>One Term. One Meaning.</h3>
              <p>
                Standardize approved translations for components, tools, equipment, materials,
                process steps, defect classifications, safety terminology, product names, and
                internal abbreviations across documents and languages.
              </p>
              <TextLink href="https://www.stepes.com/terminology-management/">Terminology Management</TextLink>
            </article>
            <article className="asset-pane">
              <h3>Translate Updates Without Starting Over</h3>
              <p>
                Translation memory identifies previously approved content so unchanged language can
                be reused where appropriate while linguists focus on the new or modified material in
                each revision.
              </p>
              <TextLink href="https://www.stepes.com/translation-memory/">Translation Memory</TextLink>
            </article>
            <article className="asset-pane">
              <h3>Keep Every Language on the Latest Revision</h3>
              <p>
                Support recurring updates triggered by engineering changes, process improvements,
                equipment updates, corrective actions, quality findings, and new product
                introductions.
              </p>
              <TextLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</TextLink>
            </article>
          </div>
          <div className="revision-band">
            <p style={{ margin: 0, fontWeight: 600, color: '#2B3441' }}>Typical Revision Flow</p>
            <div className="revision-flow" aria-label="Revision workflow">
              {['Source revision received','Changes identified','Approved language reused','Changed content translated','Review + QA','Updated languages delivered'].map((label, i, arr) => (
                <span key={label} style={{ display: 'contents' }}>
                  <span className="revision-chip">{label}</span>
                  {i < arr.length - 1 ? <span className="revision-arrow"><ArrowIcon size={16} /></span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Task-Critical Quality"
            title="Quality Checks Beyond Translation"
            intro="A sentence can be grammatically correct and still be wrong for the task. Work instruction QA therefore needs to examine the technical, procedural, and visual context of the translated content."
          />
          <div className="qa-grid">
            {qaItems.map(([title, text]) => (
              <div className="qa-item" key={title}>
                <CheckIcon />
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}><TextLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</TextLink></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell">
          <div className="control-grid">
            <div className="control-copy">
              <h2>Built for Controlled Work Instruction Environments</h2>
              <p style={{ marginTop: 22 }}>
                Work instructions frequently form part of a larger quality or controlled-document
                environment. Stepes supports translation workflows designed to preserve important
                document structure and metadata while maintaining clear stages for source content,
                translation, review, approval, and final delivery.
              </p>
              <p>
                Stepes complements your document-control process by helping multilingual content move
                through translation, review, quality assurance, and recurring updates systematically.
              </p>
            </div>
            <div className="control-matrix">
              {[
                ['Document identifiers','Document numbers, codes, and controlled references'],
                ['Revision information','Revision levels, dates, and updated content'],
                ['Approved terminology','Consistent multilingual technical vocabulary'],
                ['Standard templates','Preserved structure and repeatable layouts'],
                ['Defined review stages','Linguistic, technical, and customer review paths'],
                ['Customer approvals','Support for stakeholder validation and signoff'],
                ['Language asset governance','Translation memory and terminology reuse'],
                ['Secure content handling','Controlled collaboration and delivery workflows'],
              ].map(([title,text]) => <div className="control-cell" key={title}><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            title="From One Work Instruction to an Entire Global Plant Network"
            intro="Stepes supports one-time translation needs and recurring enterprise programs that grow across departments, facilities, countries, and languages."
          />
          <div className="scale-track">
            {[
              ['Individual Instructions','Translate a specific procedure, assembly instruction, inspection method, maintenance task, or test instruction.'],
              ['Departments and Production Lines','Standardize multilingual instructions across manufacturing cells, quality groups, maintenance teams, laboratories, or warehouses.'],
              ['Entire Facilities','Translate large collections of operational content for a multilingual plant, production site, or distribution center.'],
              ['Global Operations','Maintain recurring instructions across multi-site manufacturing networks, suppliers, contract manufacturers, and languages.'],
            ].map(([title,text]) => <div className="scale-stage" key={title}><strong>{title}</strong><p>{text}</p></div>)}
          </div>
          <p className="scale-note">
            As volume grows, approved terminology and translation memory become increasingly valuable
            because trusted language can be carried forward instead of recreated project by project.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-shell">
          <div className="workflow-wrap">
            <div>
              <div className="heading-group heading-left">
                <h2>A Smarter Work Instruction Translation Workflow</h2>
                <p className="section-intro">A structured process connects content analysis, language assets, the right translation method, professional review, QA, and future reuse.</p>
              </div>
              <div className="workflow-list">
                {workflow.map(([title,text], index) => (
                  <div className="workflow-step" key={title}>
                    <div className="workflow-num">{String(index + 1).padStart(2,'0')}</div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="workflow-aside">
              <strong>Designed for the way operational content changes</strong>
              <p>
                Work instructions may arrive as individual files, revision batches, large plant
                migrations, or continuous updates. The workflow can scale without abandoning the
                terminology, translation memory, and quality controls built along the way.
              </p>
              <TextLink href="https://www.stepes.com/enterprise-translation-management/">Explore Enterprise Translation Management</TextLink>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            title="Why Global Manufacturers Choose Stepes"
            intro="Combine language expertise, manufacturing context, AI-powered translation technology, reusable language assets, and enterprise quality controls in one scalable operating model."
          />
          <div className="why-grid">
            {whyStepes.map(([title,text]) => <article className="why-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-dense section-soft">
        <div className="page-shell">
          <SectionHeading
            title="Related Translation Solutions"
            intro="Connect work instruction translation with the broader services and enterprise language technologies used across manufacturing content operations."
          />
          <div className="related-list">
            {related.map(([title, href, text, action]) => (
              <div className="related-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <TextLink href={href}>{action}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell">
          <SectionHeading
            title="Work Instruction Translation FAQs"
            intro="Answers to common questions about task-level manufacturing translation, visual and digital instructions, revisions, terminology, quality, and enterprise scale."
          />
          <div className="faq-wrap">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary aria-label={item.q}>
                  <span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dense" aria-label="Contact Stepes">
        <div className="page-shell">
          <div className="cta-box">
            <div className="cta-grid">
              <div>
                <h2>Make Every Work Instruction Clear in Every Language</h2>
                <p>
                  Whether you are translating one production procedure or maintaining thousands of
                  multilingual work instructions across global manufacturing sites, Stepes provides
                  the language expertise, AI-powered technology, terminology control, translation
                  memory, and scalable quality workflows to keep operational content clear and consistent.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-on-dark" href="https://www.stepes.com/contact-sales/">Request a Translation Quote <ArrowIcon /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
