const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const MEDICAL_AFFAIRS_URL = "https://www.sesen.com/medical-affairs-translation-services/";
const CLINICAL_TRIAL_URL = "https://www.sesen.com/clinical-trial-translation-services/";
const REGULATORY_URL = "https://www.sesen.com/regulatory-translation-services/";
const PHARMA_URL = "https://www.sesen.com/pharmaceutical-translation-services/";
const MEDICAL_DEVICE_URL = "https://www.sesen.com/medical-device-translation-services/";
const PV_URL = "https://www.sesen.com/pharmacovigilance-translation-services/";
const LINGUISTIC_VALIDATION_URL = "https://www.sesen.com/linguistic-validation-services/";
const TERMINOLOGY_URL = "https://www.sesen.com/terminology-management-harmonization/";
const ELEARNING_URL = "https://www.sesen.com/elearning-training-translation-services/";
const INDUSTRIES_URL = "https://www.sesen.com/industries/";
const BIOTECH_URL = "https://www.sesen.com/biotechnology-translation-services/";
const CRO_URL = "https://www.sesen.com/cro-translation-services/";
const HEALTHCARE_URL = "https://www.sesen.com/healthcare-hospital-translation-services/";
const RESOURCES_URL = "https://www.sesen.com/resources/";
const KNOWLEDGE_BASE_URL = "https://www.sesen.com/resources/knowledge-base/";

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
    arrow: <><path d="M5 12h13"/><path d="m14 7 5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></>,
    research: <><circle cx="9" cy="8" r="4"/><path d="m12 11 7 7"/><path d="M15.5 14.5 13 17l-2-2"/><path d="M4 21h16"/></>,
    presentation: <><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="m7 12 3-3 2 2 4-4"/></>,
    lab: <><path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 16h9"/></>,
    education: <><path d="m3 10 9-5 9 5-9 5z"/><path d="M7 12v4.5c2.9 2 7.1 2 10 0V12"/><path d="M21 10v6"/></>,
    data: <><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20V8"/></>,
    institution: <><path d="M3 9h18"/><path d="m4 8 8-5 8 5"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/><path d="M3 21h18"/></>,
    meaning: <><path d="M4 5h16v12H8l-4 4z"/><path d="M8 9h8"/><path d="M8 13h5"/></>,
    terminology: <><path d="M4 5h7"/><path d="M7.5 3v2"/><path d="M5 9c1.8 2.3 4.2 3.8 7 4.7"/><path d="M10 5c-.7 3.6-2.4 6.2-5 8"/><path d="m14 19 3.5-9 3.5 9"/><path d="M15.4 16h4.2"/></>,
    audience: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0"/><path d="M13.5 19a4.5 4.5 0 0 1 8 0"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z"/><path d="m9 12 2 2 4-5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    award: <><circle cx="12" cy="8" r="5"/><path d="m9 13-1 8 4-2 4 2-1-8"/></>,
    workflow: <><path d="M5 6h14"/><path d="m16 3 3 3-3 3"/><path d="M19 18H5"/><path d="m8 15-3 3 3 3"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    science: <><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/></>,
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`msw-button${secondary ? " msw-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8}/>
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`msw-editorial-link${light ? " msw-editorial-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8}/>
    </a>
  );
}

function HeroArt() {
  return (
    <div className="msw-hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 520" fill="none">
        <circle cx="322" cy="257" r="208" fill="#F5F7FF"/>
        <circle cx="322" cy="257" r="166" stroke="#DCE5F7" strokeWidth="1.4"/>
        <path d="M202 118c74 22 160 29 238 11" stroke="#D7E1F4" strokeWidth="1.3" strokeDasharray="5 8"/>
        <path d="M160 357c87-23 200-20 294 7" stroke="#D7E1F4" strokeWidth="1.3" strokeDasharray="5 8"/>

        <g transform="translate(165 105)">
          <rect x="0" y="0" width="236" height="304" rx="26" fill="white" stroke="#C8D5EF"/>
          <rect x="28" y="30" width="91" height="10" rx="5" fill="#EAF0FF"/>
          <path d="M28 65h172" stroke="#CED9ED" strokeWidth="2"/>
          <path d="M28 87h142" stroke="#D8E1F1" strokeWidth="2"/>
          <path d="M28 109h158" stroke="#D8E1F1" strokeWidth="2"/>
          <rect x="28" y="138" width="180" height="78" rx="12" fill="#F7F9FD" stroke="#E2E8F3"/>
          <path d="M47 194v-26" stroke="#6F8BE1" strokeWidth="4" strokeLinecap="round"/>
          <path d="M72 194v-42" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round"/>
          <path d="M97 194v-20" stroke="#6F8BE1" strokeWidth="4" strokeLinecap="round"/>
          <path d="M122 194v-55" stroke="#3659BB" strokeWidth="4" strokeLinecap="round"/>
          <path d="M147 194v-34" stroke="#6F8BE1" strokeWidth="4" strokeLinecap="round"/>
          <path d="M172 194v-48" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round"/>
          <path d="M28 245h168" stroke="#D8E1F1" strokeWidth="2"/>
          <path d="M28 267h128" stroke="#D8E1F1" strokeWidth="2"/>
        </g>

        <g transform="translate(390 82)">
          <circle cx="62" cy="62" r="62" fill="white" stroke="#CBD8F0"/>
          <ellipse cx="62" cy="62" rx="40" ry="15" stroke="#3659BB" strokeWidth="1.8"/>
          <ellipse cx="62" cy="62" rx="40" ry="15" transform="rotate(60 62 62)" stroke="#6F8BE1" strokeWidth="1.8"/>
          <ellipse cx="62" cy="62" rx="40" ry="15" transform="rotate(120 62 62)" stroke="#6F8BE1" strokeWidth="1.8"/>
          <circle cx="62" cy="62" r="4" fill="#4B6FD8"/>
        </g>

        <g transform="translate(390 300)">
          <rect x="0" y="0" width="151" height="92" rx="18" fill="white" stroke="#CBD8F0"/>
          <path d="M24 28h102" stroke="#D7E0F1" strokeWidth="2"/>
          <path d="M24 49h70" stroke="#D7E0F1" strokeWidth="2"/>
          <path d="M24 70h88" stroke="#D7E0F1" strokeWidth="2"/>
          <circle cx="127" cy="49" r="12" fill="#EAF0FF"/>
          <path d="m122 49 4 4 7-9" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        <path d="M395 183c26 23 35 56 24 87" stroke="#4B6FD8" strokeWidth="2" strokeDasharray="5 7"/>
        <path d="m414 262 6 11 11-6" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function PublicationArt() {
  return (
    <div className="msw-publication-art" aria-hidden="true">
      <svg viewBox="0 0 620 410" fill="none">
        <rect x="46" y="50" width="180" height="248" rx="20" fill="#FFFFFF" stroke="#C9D6EF"/>
        <rect x="72" y="78" width="86" height="9" rx="4.5" fill="#EAF0FF"/>
        <path d="M72 111h128" stroke="#D3DDED" strokeWidth="2"/>
        <path d="M72 133h108" stroke="#D3DDED" strokeWidth="2"/>
        <path d="M72 155h118" stroke="#D3DDED" strokeWidth="2"/>
        <rect x="72" y="184" width="128" height="64" rx="10" fill="#F7F9FD"/>
        <path d="M91 230v-19" stroke="#6F8BE1" strokeWidth="4"/>
        <path d="M117 230v-32" stroke="#4B6FD8" strokeWidth="4"/>
        <path d="M143 230v-14" stroke="#6F8BE1" strokeWidth="4"/>
        <path d="M169 230v-42" stroke="#3659BB" strokeWidth="4"/>
        <text x="81" y="278" fill="#3659BB" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="700">MANUSCRIPT</text>

        <path d="M240 174h54" stroke="#AFC1E8" strokeWidth="2"/>
        <path d="m286 168 8 6-8 6" stroke="#3659BB" strokeWidth="2"/>

        <rect x="307" y="73" width="120" height="92" rx="17" fill="#FFFFFF" stroke="#C9D6EF"/>
        <path d="M328 100h76" stroke="#D3DDED" strokeWidth="2"/>
        <path d="M328 121h56" stroke="#D3DDED" strokeWidth="2"/>
        <text x="328" y="147" fill="#3659BB" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">ABSTRACT</text>

        <rect x="307" y="199" width="120" height="126" rx="17" fill="#FFFFFF" stroke="#C9D6EF"/>
        <rect x="327" y="219" width="80" height="48" rx="8" fill="#F5F7FF"/>
        <path d="M341 252v-13" stroke="#6F8BE1" strokeWidth="3"/>
        <path d="M360 252v-24" stroke="#4B6FD8" strokeWidth="3"/>
        <path d="M379 252v-18" stroke="#3659BB" strokeWidth="3"/>
        <text x="328" y="300" fill="#3659BB" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700">POSTER</text>

        <path d="M442 130h46" stroke="#AFC1E8" strokeWidth="2"/>
        <path d="m480 124 8 6-8 6" stroke="#3659BB" strokeWidth="2"/>
        <path d="M442 260h46" stroke="#AFC1E8" strokeWidth="2"/>
        <path d="m480 254 8 6-8 6" stroke="#3659BB" strokeWidth="2"/>

        <rect x="501" y="82" width="91" height="77" rx="16" fill="#EAF0FF"/>
        <path d="M520 105h53" stroke="#6F8BE1" strokeWidth="2"/>
        <path d="M520 124h38" stroke="#6F8BE1" strokeWidth="2"/>
        <text x="520" y="145" fill="#253F8F" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700">SLIDES</text>

        <rect x="501" y="216" width="91" height="77" rx="16" fill="#F5F7FF" stroke="#DCE5F6"/>
        <path d="M520 239h53" stroke="#6F8BE1" strokeWidth="2"/>
        <path d="M520 258h38" stroke="#6F8BE1" strokeWidth="2"/>
        <text x="520" y="279" fill="#253F8F" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700">EDUCATION</text>
      </svg>
    </div>
  );
}

const contentDomains = [
  {
    icon: "document",
    title: "Scientific Publications & Research",
    body: "Manuscripts, journal articles, abstracts, research papers, literature reviews, research summaries, scientific reports, investigator-authored materials, and publication-support content.",
    note: "Preserve scientific reasoning, terminology, findings, references, and publication context across languages.",
  },
  {
    icon: "presentation",
    title: "Congresses, Posters & Scientific Presentations",
    body: "Congress abstracts, scientific posters, oral presentation materials, slide decks, symposium content, visual abstracts, conference handouts, and scientific summaries.",
    note: "Maintain alignment between underlying research and the multilingual assets used to present it.",
    href: MEDICAL_AFFAIRS_URL,
    link: "Explore Medical Affairs Translation Services",
  },
  {
    icon: "lab",
    title: "Research, R&D & Scientific Documentation",
    body: "Preclinical research materials, R&D documentation, laboratory documentation, research reports, development summaries, scientific methodologies, product-science content, and knowledge-transfer materials.",
    note: "Support specialized scientific communication long before content becomes a regulatory or commercial asset.",
  },
  {
    icon: "education",
    title: "Medical Education & HCP Scientific Content",
    body: "Disease-state education, treatment education, HCP learning materials, professional training, medical reference content, scientific educational modules, and presentation materials.",
    note: "Balance scientific accuracy with the level of clarity required for the intended professional audience.",
    href: ELEARNING_URL,
    link: "Explore eLearning & Training Localization",
  },
  {
    icon: "data",
    title: "Scientific & Technical Life Sciences Communication",
    body: "Scientific technical reports, product-science documentation, laboratory materials, scientific specifications, technical presentations, data-oriented documentation, and specialized knowledge resources.",
    note: "Provide an appropriate workflow for complex scientific content that is not inherently a regulatory submission or controlled product document.",
  },
  {
    icon: "institution",
    title: "Academic, Healthcare & Institutional Research Communication",
    body: "Academic research, investigator publications, research-center materials, institutional scientific reports, healthcare research, public health research communication, and collaborative research materials.",
    note: "Extend specialized scientific communication across research institutions and healthcare knowledge organizations.",
  },
];

const precisionItems = [
  {
    icon: "meaning",
    title: "Preserve Scientific Meaning",
    body: "Mechanisms, methods, findings, comparisons, limitations, qualifications, interpretations, and conclusions must retain the same scientific relationships across languages.",
  },
  {
    icon: "terminology",
    title: "Control Terminology & Nomenclature",
    body: "Medical terminology, scientific vocabulary, product and compound names, abbreviations, acronyms, approved terminology, and organization-specific language need disciplined handling.",
  },
  {
    icon: "data",
    title: "Protect Data Integrity",
    body: "Numbers, measurements, units, percentages, statistical expressions, symbols, tables, figure labels, captions, references, and cross-references require structured QA.",
  },
  {
    icon: "audience",
    title: "Write for the Intended Audience",
    body: "Researchers, physicians, HCPs, technical teams, educators, collaborators, and selected patient audiences require different levels of terminology, explanation, and readability.",
  },
];

const lifecycle = [
  { title: "Research", body: "Findings, laboratory documentation, R&D materials, methodologies, and technical reports." },
  { title: "Interpret", body: "Scientific analyses, summaries, narratives, and knowledge resources." },
  { title: "Publish", body: "Manuscripts, journal articles, abstracts, and publication materials." },
  { title: "Present", body: "Posters, congress materials, scientific decks, and visual summaries." },
  { title: "Educate", body: "HCP education, professional training, and scientific learning content." },
  { title: "Reuse", body: "Approved terminology, prior translations, reviewer decisions, and multilingual assets." },
];

const expertiseFactors = [
  ["Language Pair", "Professional language expertise appropriate to the source and target languages."],
  ["Scientific Domain", "Relevant understanding of the medical, scientific, therapeutic, or technical subject."],
  ["Content Type", "Experience suited to publications, reports, education, research documentation, presentations, or other specialized assets."],
  ["Audience", "Awareness of the terminology and communication level expected by specialist readers."],
  ["Intended Use", "Workflow and review requirements appropriate for how the translated content will be used."],
];

const workflow = [
  ["Content & Context Review", "Review the source content, scientific field, audience, languages, intended use, formatting needs, existing terminology, and reference materials."],
  ["Subject-Matter Resource Assignment", "Select professional linguists based on the language combination and the medical, scientific, or technical requirements of the project."],
  ["Terminology & Reference Preparation", "Prepare relevant glossaries, prior translations, publications, style guidance, references, and approved terminology."],
  ["Professional Translation", "Translate with attention to scientific meaning, terminology, quantitative information, audience, style, and context."],
  ["Independent Review", "When required by the workflow, a qualified second professional reviews linguistic accuracy, consistency, completeness, and appropriate scientific communication."],
  ["Technology-Assisted Quality Assurance", "Use structured QA to support terminology, number, unit, formatting, consistency, and completeness checks."],
  ["Format & Visual Review", "For publications, posters, slide decks, and structured documents, review tables, figures, captions, labels, and multilingual presentation."],
  ["Final Quality Control", "Review the completed content against project specifications and prepare it for delivery."],
];

const fieldGroups = [
  {
    title: "Therapeutic Areas",
    items: ["Oncology", "Immunology", "Neurology", "Cardiovascular", "Infectious Disease", "Endocrinology & Metabolic Disease", "Respiratory Medicine", "Rare Disease"],
  },
  {
    title: "Advanced Life Sciences",
    items: ["Genomics & Molecular Biology", "Biologics", "Cell & Gene Therapy"],
  },
  {
    title: "Diagnostics & Medical Technology",
    items: ["Diagnostics", "Medical Technology"],
  },
];

const organizationGroups = [
  ["Life Sciences Companies", "Pharmaceuticals · Biotechnology · Medical Technology · Diagnostics"],
  ["Research Organizations", "CROs · Research Institutions · Scientific Organizations"],
  ["Medical & Scientific Teams", "R&D · Scientific Communications · Medical Affairs · Medical Education"],
  ["Healthcare & Knowledge Organizations", "Healthcare Organizations · Scientific Publishers · Medical Communications Organizations"],
];

const serviceRoutes = [
  {
    title: "Clinical Trial Translation Services",
    body: "For protocols, informed consent forms, investigator materials, clinical study documents, patient-facing content, and multilingual trial operations.",
    href: CLINICAL_TRIAL_URL,
    link: "Explore Clinical Trial Translation",
  },
  {
    title: "Regulatory Translation Services",
    body: "For regulatory submissions, health authority correspondence, registration documentation, regulated dossiers, and other approval-related content.",
    href: REGULATORY_URL,
    link: "Explore Regulatory Translation",
  },
  {
    title: "Pharmaceutical Translation Services",
    body: "For pharmaceutical programs spanning clinical development, regulatory submissions, labeling, safety, Medical Affairs, and commercialization.",
    href: PHARMA_URL,
    link: "Explore Pharmaceutical Translation",
  },
  {
    title: "Medical Device Translation Services",
    body: "For IFUs, labeling, software, technical documentation, regulated device content, training, and post-market communication.",
    href: MEDICAL_DEVICE_URL,
    link: "Explore Medical Device Translation",
  },
  {
    title: "Pharmacovigilance Translation Services",
    body: "For adverse-event content, safety narratives, ICSRs, SUSARs, DSURs, PSURs/PBRERs, risk-management materials, and drug-safety communication.",
    href: PV_URL,
    link: "Explore Pharmacovigilance Translation",
  },
  {
    title: "Medical Affairs Translation Services",
    body: "For organized Medical Affairs programs involving scientific exchange, publications, congresses, MSL enablement, advisory boards, KOL engagement, medical information, and HEOR/RWE.",
    href: MEDICAL_AFFAIRS_URL,
    link: "Explore Medical Affairs Translation",
  },
  {
    title: "Linguistic Validation Services",
    body: "For clinical outcome assessments, eCOA/ePRO instruments, patient questionnaires, symptom scales, and content requiring a structured validation workflow beyond standard translation.",
    href: LINGUISTIC_VALIDATION_URL,
    link: "Explore Linguistic Validation",
  },
];

const whySesen = [
  ["Life Sciences Focus", "Specialized multilingual communication for pharmaceutical, biotechnology, medical device, CRO, healthcare, clinical, regulatory, and scientific environments."],
  ["Scientific Subject-Matter Expertise", "Resources can be matched according to language combination, scientific domain, content type, audience, and intended use."],
  ["Terminology & Quality Control", "Terminology resources, translation memory, professional review, structured QA, and reviewer feedback support consistency across languages and related content."],
  ["Scalable Multilingual Workflows", "Support can extend from an individual scientific document to recurring multi-language programs and reusable enterprise language assets."],
];

const faqs = [
  {
    q: "What is medical and scientific translation?",
    a: "Medical and scientific translation is the specialized translation of content involving medicine, healthcare, research, life sciences, scientific knowledge, and technical subject matter. It can include scientific manuscripts, research reports, abstracts, posters, presentations, laboratory documentation, medical education, technical scientific content, and related materials. Unlike general translation, these projects often require subject-matter understanding, specialized terminology, careful handling of quantitative information, and awareness of the intended scientific or professional audience.",
  },
  {
    q: "What types of medical and scientific content does Sesen translate?",
    a: "Sesen translates research manuscripts, journal articles, abstracts, scientific posters, presentations, research reports, laboratory documentation, R&D materials, technical scientific content, disease-state education, HCP materials, training resources, and other specialized life sciences communication. When content belongs to a more specialized clinical, regulatory, safety, medical-device, Medical Affairs, or linguistic-validation workflow, Sesen can route the project through the appropriate dedicated service.",
  },
  {
    q: "How is scientific translation different from general translation?",
    a: "Scientific translation requires more than linguistic fluency. Translators may need to understand specialized terminology, scientific concepts, mechanisms, methodology, quantitative information, abbreviations, nomenclature, data presentation, and the conventions of the target audience. The objective is to preserve the meaning and relationships within the underlying science, not simply produce fluent target-language text.",
  },
  {
    q: "How does Sesen select translators for specialized scientific content?",
    a: "Sesen can match professional language resources according to the source and target languages, scientific subject, therapeutic or technical domain, document type, intended audience, intended use, and project requirements. This helps align translator and reviewer expertise with the actual content rather than relying on a one-size-fits-all definition of medical translation.",
  },
  {
    q: "Can Sesen translate scientific manuscripts, abstracts, posters, and presentations?",
    a: "Yes. Sesen supports manuscripts, journal articles, abstracts, posters, slide decks, visual scientific materials, research summaries, and related assets. Where multiple materials are based on the same research, terminology resources, reference content, translation memory, and approved language can help maintain consistency between related multilingual documents.",
  },
  {
    q: "How does Sesen maintain scientific terminology across related content?",
    a: "Terminology management can incorporate client glossaries, previously approved translations, scientific publications, existing reference materials, product terminology, style guidance, and reviewer feedback. Approved terminology and translation memory can then be reused across related documents, languages, and future revisions where appropriate.",
  },
  {
    q: "Does Sesen use AI for medical and scientific translation?",
    a: "Sesen uses advanced translation technology and AI-assisted tools where appropriate to support terminology, content reuse, consistency checking, numerical QA, completeness, and workflow efficiency. Professional human expertise remains central to decisions involving scientific meaning, context, terminology, ambiguity, audience appropriateness, and final linguistic quality. The workflow can be adapted according to content complexity, intended use, confidentiality, risk, and client requirements.",
  },
  {
    q: "What is the difference between Medical & Scientific Translation and Medical Affairs Translation?",
    a: "Medical & Scientific Translation is the broader service for specialized scientific, research, technical, publication, and educational content across the life sciences. Medical Affairs Translation is designed specifically for organized Medical Affairs workflows such as scientific exchange, field medical communication, MSL materials, advisory boards, KOL engagement, medical information, publications programs, congress support, HEOR/RWE, and related global activities.",
  },
  {
    q: "When should content use a specialized clinical, regulatory, device, safety, or validation workflow instead?",
    a: "The translation workflow should reflect the content's primary use. Clinical trial documents are best handled through Clinical Trial Translation Services; regulatory submissions and health authority documentation through Regulatory Translation Services; device IFUs and labeling through Medical Device Translation Services; drug-safety content through Pharmacovigilance Translation Services; and patient-reported instruments requiring formal validation through Linguistic Validation Services.",
  },
];

export default function SesenMedicalScientificTranslationWireframeV3() {
  return (
    <main className="msw-page">
      <style>{styles}</style>

      <section className="msw-hero" aria-labelledby="msw-page-title">
        <div className="msw-shell msw-hero-grid">
          <div className="msw-hero-copy">
            <p className="msw-eyebrow">Specialized Life Sciences Translation</p>
            <h1 id="msw-page-title">Medical &amp; Scientific Translation Services</h1>
            <p className="msw-hero-lead">
              Translate complex medical and scientific content with the subject-matter expertise, terminology control, and quality oversight required to preserve meaning across languages.
            </p>
            <p className="msw-hero-body">
              Sesen supports pharmaceutical, biotechnology, medical device, CRO, healthcare, research, and scientific organizations across research, publications, technical communication, medical education, and global scientific exchange.
            </p>
            <div className="msw-button-row">
              <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
              <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
            </div>
          </div>
          <HeroArt/>
        </div>

        <div className="msw-shell msw-hero-proof" aria-label="Sesen medical and scientific translation capabilities">
          <div><Icon name="science" size={20}/><span><strong>Scientific subject-matter expertise</strong><small>Resources aligned to content and audience</small></span></div>
          <div><Icon name="globe" size={20}/><span><strong>150+ languages</strong><small>Global multilingual program support</small></span></div>
          <div><Icon name="award" size={20}/><span><strong>ISO-certified processes</strong><small>ISO 17100 · ISO 9001 · ISO 13485</small></span></div>
          <div><Icon name="workflow" size={20}/><span><strong>Human review + assisted QA</strong><small>Terminology, reuse, consistency, and quality checks</small></span></div>
        </div>
      </section>

      <section className="msw-section msw-authority" aria-labelledby="msw-authority-title">
        <div className="msw-shell msw-authority-grid">
          <div className="msw-authority-copy">
            <h2 id="msw-authority-title">Scientific Communication Requires More Than Accurate Words</h2>
            <p className="msw-lead">
              Scientific meaning is built through relationships between evidence, methods, mechanisms, measurements, findings, qualifications, and conclusions. Those relationships must remain intact when content moves across languages.
            </p>
            <p>
              A research manuscript, laboratory report, scientific presentation, HCP educational resource, and technical scientific document can address very different audiences and purposes. Sesen adapts multilingual workflows according to the scientific field, content type, audience, intended use, language combination, and project requirements.
            </p>
          </div>
          <div className="msw-authority-points">
            {[
              ["Scientific Accuracy", "Preserve the meaning of technical concepts, research findings, mechanisms, methodologies, and scientific conclusions."],
              ["Terminology Consistency", "Maintain medical and scientific terminology across documents, languages, versions, and related content."],
              ["Data Integrity", "Protect numbers, measurements, units, statistical expressions, tables, figures, captions, and other structured scientific information."],
              ["Audience Precision", "Adapt language appropriately for researchers, healthcare professionals, technical teams, educators, and other specialized audiences."],
            ].map(([title, body]) => (
              <article className="msw-authority-point" key={title}>
                <span className="msw-point-mark" aria-hidden="true"></span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msw-section msw-scope" aria-labelledby="msw-scope-title">
        <div className="msw-shell">
          <header className="msw-section-head msw-section-head-split">
            <div>
              <h2 id="msw-scope-title">Medical &amp; Scientific Content Across the Knowledge Lifecycle</h2>
            </div>
            <p>
              Scientific information moves through many formats before it reaches global audiences. Sesen supports specialized medical, scientific, research, educational, and technical content throughout that journey.
            </p>
          </header>

          <div className="msw-domain-grid">
            {contentDomains.map((item) => (
              <article className="msw-domain-item" key={item.title}>
                <div className="msw-icon-surface"><Icon name={item.icon} size={23}/></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="msw-domain-note">{item.note}</p>
                {item.href && <EditorialLink href={item.href}>{item.link}</EditorialLink>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msw-precision" aria-labelledby="msw-precision-title">
        <div className="msw-shell">
          <header className="msw-dark-head">
            <div>
              <h2 id="msw-precision-title">Precision Extends Beyond Terminology</h2>
            </div>
            <p>High-quality scientific translation requires control over the complete meaning, structure, data, and audience context of the source—not simply individual terms.</p>
          </header>
          <div className="msw-precision-grid">
            {precisionItems.map((item) => (
              <article className="msw-precision-item" key={item.title}>
                <Icon name={item.icon} size={25}/>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="msw-cross-doc">
            <div>
              <Icon name="link" size={24}/>
              <h3>Maintain Cross-Document Consistency</h3>
            </div>
            <p>The same evidence may appear in a manuscript, abstract, poster, presentation, scientific summary, and educational resource. Terminology and scientific statements should remain aligned as content is reused.</p>
          </div>
        </div>
      </section>

      <section className="msw-section msw-lifecycle" aria-labelledby="msw-lifecycle-title">
        <div className="msw-shell">
          <header className="msw-section-head">
            <h2 id="msw-lifecycle-title">From Research to Global Scientific Communication</h2>
            <p>Scientific knowledge evolves across a connected content lifecycle. Translation should support that continuity rather than treating every document as an isolated project.</p>
          </header>
          <div className="msw-lifecycle-track">
            {lifecycle.map((item, index) => (
              <article className="msw-life-step" key={item.title}>
                <div className="msw-step-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="msw-lifecycle-summary">
            <strong>One Evidence Base. Many Global Assets.</strong>
            <span>Sesen helps teams maintain multilingual consistency as scientific knowledge moves across formats, teams, audiences, markets, and versions.</span>
          </div>
        </div>
      </section>

      <section className="msw-section msw-publications" aria-labelledby="msw-publication-title">
        <div className="msw-shell msw-publication-grid">
          <div className="msw-publication-copy">
            <h2 id="msw-publication-title">Scientific Publication Translation From Manuscript to Global Audience</h2>
            <p className="msw-lead">
              Research findings are often expressed through carefully qualified language, technical terminology, quantitative data, references, and visual evidence. Those elements need to remain aligned as scientific content moves into new languages and formats.
            </p>
            <div className="msw-publication-points">
              <div><strong>Manuscripts &amp; Journal Content</strong><span>Preserve terminology, methods, findings, qualifications, and conclusions.</span></div>
              <div><strong>Abstracts &amp; Scientific Summaries</strong><span>Maintain accuracy when complex research is communicated in condensed formats.</span></div>
              <div><strong>Posters &amp; Visual Scientific Content</strong><span>Coordinate text, figures, tables, captions, labels, and references.</span></div>
              <div><strong>Scientific Presentations &amp; Education</strong><span>Keep slide decks and downstream educational content aligned with the source evidence.</span></div>
            </div>
            <p>
              Approved reference materials, terminology resources, translation memory, previous translations, and reviewer decisions can help maintain continuity across related publications and future versions.
            </p>
          </div>
          <PublicationArt/>
        </div>
      </section>

      <section className="msw-section msw-expertise" aria-labelledby="msw-expertise-title">
        <div className="msw-shell">
          <header className="msw-section-head msw-section-head-split">
            <div><h2 id="msw-expertise-title">Scientific Expertise Matched to the Content</h2></div>
            <p>There is no single category of translator that is equally suited to every type of medical and scientific content. Sesen can build project teams around the actual science and communication requirements of the content.</p>
          </header>
          <div className="msw-factor-strip">
            {expertiseFactors.map(([title, body]) => (
              <article className="msw-factor" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="msw-expertise-note">
            <strong>Subject-matter expertise where it matters.</strong>
            <span>An HCP educational resource, oncology manuscript, molecular biology research report, laboratory methodology, diagnostics document, and technical product-science presentation can require different knowledge profiles.</span>
          </div>
        </div>
      </section>

      <section className="msw-section msw-consistency" aria-labelledby="msw-consistency-title">
        <div className="msw-shell msw-consistency-grid">
          <div className="msw-consistency-copy">
            <p className="msw-eyebrow">Terminology &amp; Reuse</p>
            <h2 id="msw-consistency-title">Scientific Consistency Across Languages, Assets &amp; Versions</h2>
            <p className="msw-lead">A single program may generate publications, technical reports, slide decks, educational materials, research summaries, internal documentation, and repeated revisions across multiple languages. Structured terminology and content reuse help prevent those assets from drifting apart.</p>
            <EditorialLink href={TERMINOLOGY_URL}>Explore Terminology Management &amp; Harmonization</EditorialLink>
          </div>
          <div className="msw-consistency-list">
            <article><h3>Terminology Management</h3><p>Use client glossaries, existing translations, scientific publications, product terminology, reference documents, style guidance, and reviewer feedback to build reusable language resources.</p></article>
            <article><h3>Translation Memory &amp; Content Reuse</h3><p>Identify and reuse previously translated and approved language where appropriate to improve continuity and reduce unnecessary retranslation.</p></article>
            <article><h3>Reviewer Alignment</h3><p>Incorporate approved scientific, medical, or in-country reviewer feedback so decisions can be carried into subsequent content.</p></article>
            <article><h3>Version-Aware Translation</h3><p>Leverage approved language as documents evolve while focusing review attention on changed or newly added content.</p></article>
            <article><h3>Structured Quality Checks</h3><p>Evaluate terminology, numbers, units, formatting, consistency, omissions, and other potential issues through professional review and technology-assisted QA.</p></article>
          </div>
        </div>
      </section>

      <section className="msw-section msw-workflow" aria-labelledby="msw-workflow-title">
        <div className="msw-shell">
          <header className="msw-section-head">
            <h2 id="msw-workflow-title">A Quality Workflow Built Around Scientific Content</h2>
            <p>Different scientific documents carry different requirements. Sesen adapts translation and review according to content type, subject matter, intended audience, intended use, risk, and client requirements.</p>
          </header>
          <div className="msw-workflow-grid">
            {workflow.map(([title, body], index) => (
              <article className="msw-workflow-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
          <div className="msw-workflow-note">
            <strong>Built around the content—not a one-size-fits-all process.</strong>
            <p>A research summary and a complex scientific manuscript do not necessarily require identical workflows. Sesen helps apply the right combination of expertise, review, technology, and quality control for each project.</p>
          </div>
        </div>
      </section>

      <section className="msw-section msw-human-tech" aria-labelledby="msw-human-tech-title">
        <div className="msw-shell">
          <div className="msw-human-tech-panel">
            <div className="msw-human-tech-head">
              <h2 id="msw-human-tech-title">Human Scientific Expertise, Supported by Smarter Workflows</h2>
              <p>Advanced translation technology can improve consistency, reuse, quality control, and workflow efficiency. Scientific judgment still requires qualified people.</p>
            </div>
            <div className="msw-human-tech-columns">
              <div className="msw-human-column">
                <div className="msw-human-icon"><Icon name="users" size={25}/></div>
                <h3>Professional Expertise</h3>
                <p>Human linguists and reviewers remain responsible for scientific meaning, context, ambiguity, terminology decisions, nuance, audience appropriateness, readability, linguistic quality, and final professional judgment.</p>
              </div>
              <div className="msw-tech-column">
                <div className="msw-human-icon"><Icon name="workflow" size={25}/></div>
                <h3>Technology-Assisted Workflow</h3>
                <p>Technology can support terminology extraction, translation memory leverage, content reuse, consistency checks, numerical QA, completeness checks, formatting review, issue detection, and workflow efficiency.</p>
              </div>
            </div>
            <p className="msw-human-tech-foot">The appropriate workflow depends on the scientific complexity, intended use, confidentiality requirements, quality expectations, and client preferences. Human oversight remains central for sensitive scientific content.</p>
          </div>
        </div>
      </section>

      <section className="msw-section msw-fields" aria-labelledby="msw-fields-title">
        <div className="msw-shell">
          <header className="msw-section-head msw-section-head-split">
            <div><h2 id="msw-fields-title">Specialized Medical &amp; Scientific Fields</h2></div>
            <p>Sesen supports multilingual projects across a broad range of medical, scientific, therapeutic, and technical fields, with professional resources matched to project requirements.</p>
          </header>
          <div className="msw-field-groups">
            {fieldGroups.map((group) => (
              <article className="msw-field-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="msw-field-items">
                  {group.items.map((field) => <span key={field}>{field}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="msw-fields-note">Need support in another scientific field? <a href={CONTACT_SALES_URL}>Talk with Team Sesen</a> about your content, terminology, audience, and language requirements.</p>

          <div className="msw-org-band">
            <div className="msw-org-title">
              <p className="msw-eyebrow">Life Sciences Ecosystem</p>
              <h2>Scientific Communication Across the Organizations That Advance Life Sciences</h2>
            </div>
            <div className="msw-org-grid">
              {organizationGroups.map(([title, body]) => (
                <article key={title}><h3>{title}</h3><p>{body}</p></article>
              ))}
            </div>
            <div className="msw-org-links">
              <EditorialLink href={INDUSTRIES_URL}>Explore Life Sciences Industries</EditorialLink>
              <EditorialLink href={BIOTECH_URL}>Biotechnology Translation Services</EditorialLink>
              <EditorialLink href={CRO_URL}>CRO Translation Services</EditorialLink>
              <EditorialLink href={HEALTHCARE_URL}>Healthcare Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="msw-programs" aria-labelledby="msw-programs-title">
        <div className="msw-shell msw-program-grid">
          <div className="msw-program-intro">
            <p className="msw-eyebrow msw-eyebrow-light">Enterprise Scientific Programs</p>
            <h2 id="msw-programs-title">Protect Confidential Scientific Knowledge and Scale With Control</h2>
            <p>Scientific translation often begins before information is public. Programs may involve unpublished findings, proprietary research, pre-publication manuscripts, product-development information, internal scientific reports, and collaboration materials.</p>
            <div className="msw-program-proof">
              <span><Icon name="lock" size={19}/> Confidential project handling</span>
              <span><Icon name="shield" size={19}/> Defined translation and review teams</span>
              <span><Icon name="layers" size={19}/> Reusable terminology and language assets</span>
              <span><Icon name="globe" size={19}/> Multi-language program coordination</span>
            </div>
          </div>
          <div className="msw-program-scale">
            <h3>From One Scientific Document to an Ongoing Global Program</h3>
            <div>
              <strong>Individual Scientific Projects</strong>
              <p>Focused translation and review for manuscripts, research reports, presentations, and specialized content.</p>
            </div>
            <div>
              <strong>Multi-Language Initiatives</strong>
              <p>Coordinated translation across global languages, markets, and related content sets.</p>
            </div>
            <div>
              <strong>Recurring Scientific Communication</strong>
              <p>Ongoing support for publications, research, education, presentations, and related assets.</p>
            </div>
            <div>
              <strong>Enterprise Multilingual Programs</strong>
              <p>Terminology governance, reusable language assets, structured workflows, quality oversight, and scalable translation management.</p>
            </div>
          </div>
        </div>

        <div className="msw-shell msw-why-wrap">
          <div className="msw-why-head"><h2>Why Life Sciences Organizations Choose Sesen</h2></div>
          <div className="msw-why-grid">
            {whySesen.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="msw-section msw-routing" aria-labelledby="msw-routing-title">
        <div className="msw-shell">
          <header className="msw-section-head msw-section-head-split">
            <div>
              <p className="msw-eyebrow">Choose the Right Sesen Service</p>
              <h2 id="msw-routing-title">Specialized Life Sciences Content Requires the Right Workflow</h2>
            </div>
            <p>Some medical and scientific content moves into regulated or highly specialized workflows because of its submission context, patient impact, safety use, device labeling role, or validation requirements. Sesen provides dedicated services for those needs.</p>
          </header>
          <div className="msw-route-grid">
            {serviceRoutes.map((item) => (
              <article className="msw-route-row" key={item.title}>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
                <EditorialLink href={item.href}>{item.link}</EditorialLink>
              </article>
            ))}
          </div>

          <div className="msw-resource-band">
            <div>
              <h2>Insights for Global Medical &amp; Scientific Communication</h2>
              <p>Explore Sesen resources on life sciences translation, terminology governance, professional review, multilingual quality, content reuse, and responsible technology-enabled workflows.</p>
            </div>
            <div className="msw-resource-links">
              <EditorialLink href={RESOURCES_URL}>Explore the Sesen Resource Center</EditorialLink>
              <EditorialLink href={KNOWLEDGE_BASE_URL}>Explore the Life Sciences Knowledge Base</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="msw-section msw-faq" aria-labelledby="msw-faq-title">
        <div className="msw-shell msw-faq-grid">
          <div className="msw-faq-intro">
            <h2 id="msw-faq-title">Medical &amp; Scientific Translation FAQ</h2>
            <p>These questions explain how specialized scientific translation differs from general translation and when a dedicated regulated Sesen workflow may be more appropriate.</p>
            <EditorialLink href={CONTACT_SALES_URL}>Discuss Your Scientific Translation Needs</EditorialLink>
          </div>
          <div className="msw-faq-list">
            {faqs.map((item, index) => (
              <details className="msw-faq-item" key={item.q} open={index === 0}>
                <summary><span>{item.q}</span><span className="msw-faq-plus" aria-hidden="true">+</span></summary>
                <div className="msw-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="msw-final-cta" aria-labelledby="msw-final-title">
        <div className="msw-shell msw-final-grid">
          <div>
            <h2 id="msw-final-title">Translate Scientific Knowledge With Confidence</h2>
            <p>Your scientific content represents research, expertise, evidence, and investment. Sesen combines specialized medical and scientific language expertise with terminology management, structured quality control, scalable multilingual workflows, and technology-assisted QA to help you communicate that knowledge clearly across languages.</p>
          </div>
          <div className="msw-final-actions">
            <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
            <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
            <small>Tell us about your content, scientific field, target languages, intended audience, and timeline.</small>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .msw-page {
    --msw-brand: #4B6FD8;
    --msw-brand-dark: #3659BB;
    --msw-brand-deep: #253F8F;
    --msw-brand-mid: #6F8BE1;
    --msw-brand-soft: #EAF0FF;
    --msw-brand-pale: #F5F7FF;
    --msw-navy: #17264D;
    --msw-ink: #111827;
    --msw-lead: #293954;
    --msw-slate: #46546D;
    --msw-muted: #68758B;
    --msw-line: #DDE4F2;
    --msw-line-soft: #E9EEF8;
    --msw-soft: #F7F9FD;
    --msw-white: #FFFFFF;
    --msw-radius-lg: 28px;
    --msw-radius-md: 20px;
    --msw-shadow: 0 24px 64px rgba(31,53,102,.08);
    width: 100%;
    overflow-x: hidden;
    overflow-x: clip;
    background: var(--msw-white);
    color: var(--msw-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .msw-page, .msw-page * { box-sizing: border-box; }
  .msw-page * { min-width: 0; }
  .msw-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .msw-page p, .msw-page h1, .msw-page h2, .msw-page h3 { margin-top: 0; }
  .msw-page h1, .msw-page h2, .msw-page h3 {
    color: var(--msw-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-stretch: 100%;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
  }
  .msw-page h1 { margin-bottom: 19px; font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
  .msw-page h2 { margin-bottom: 22px; font-size: 36px; line-height: 1.3; }
  .msw-page h3 { margin-bottom: 11px; font-size: 22px; line-height: 1.3; }
  .msw-page p { color: var(--msw-slate); font-size: 16px; line-height: 1.72; }
  .msw-page a:focus-visible, .msw-page summary:focus-visible { outline: 3px solid rgba(75,111,216,.34); outline-offset: 3px; }

  .msw-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .msw-section { padding: 96px 0; }
  .msw-lead { color: var(--msw-lead) !important; font-size: 18px !important; line-height: 1.65 !important; }

  .msw-eyebrow {
    margin-bottom: 15px !important;
    color: var(--msw-brand-dark) !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: .15em !important;
    text-transform: uppercase;
  }
  .msw-eyebrow-light { color: #C8D6FF !important; }

  .msw-button-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .msw-button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 24px;
    border: 1px solid var(--msw-brand);
    border-radius: 999px;
    background: var(--msw-brand);
    color: #FFFFFF !important;
    box-shadow: 0 10px 24px rgba(75,111,216,.16);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: background .18s ease, border-color .18s ease, transform .18s ease, box-shadow .18s ease;
  }
  .msw-button:hover { background: var(--msw-brand-dark); border-color: var(--msw-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.20); }
  .msw-button-secondary { color: var(--msw-ink) !important; background: #FFFFFF; border-color: #C9D5EF; box-shadow: none; }
  .msw-button-secondary:hover { color: var(--msw-ink) !important; background: var(--msw-brand-soft); border-color: #B7C6E8; box-shadow: none; }
  .msw-button svg, .msw-editorial-link svg { transition: transform .2s ease; }
  .msw-button:hover svg, .msw-editorial-link:hover svg { transform: translateX(3px); }

  .msw-editorial-link { display: inline-flex; width: fit-content; min-height: 32px; align-items: center; gap: 8px; color: var(--msw-brand-dark) !important; font-size: 14px; font-weight: 700; line-height: 1.45; }
  .msw-editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
  .msw-editorial-link-light { color: #FFFFFF !important; }

  .msw-section-head { max-width: 820px; margin-bottom: 54px; }
  .msw-section-head > p:last-child { margin-bottom: 0; font-size: 18px; }
  .msw-section-head-split { max-width: none; display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 86px; align-items: end; }
  .msw-section-head-split > p { margin-bottom: 3px; font-size: 17px; }

  .msw-hero {
    position: relative;
    overflow: hidden;
    padding: 94px 0 0;
    background: radial-gradient(circle at 88% 12%, rgba(75,111,216,.09), transparent 26%), linear-gradient(180deg,#FFFFFF 0%,#FCFDFF 100%);
  }
  .msw-hero::after {
    content: "";
    position: absolute;
    right: -4%;
    top: 5%;
    width: 30%;
    height: 52%;
    opacity: .35;
    background-image: radial-gradient(circle, rgba(75,111,216,.18) 1px, transparent 1.25px);
    background-size: 14px 14px;
    mask-image: linear-gradient(110deg, transparent, #000 45%, transparent 96%);
    pointer-events: none;
  }
  .msw-hero-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.04fr) minmax(390px,.96fr); gap: 64px; align-items: center; padding-bottom: 72px; }
  .msw-hero-copy { max-width: 710px; }
  .msw-hero-lead { max-width: 700px; margin-bottom: 17px !important; color: var(--msw-lead) !important; font-size: 20px !important; line-height: 1.58 !important; }
  .msw-hero-body { max-width: 700px; margin-bottom: 30px !important; font-size: 17px !important; }
  .msw-hero-art { width: 100%; max-width: 560px; justify-self: end; }
  .msw-hero-art svg { display: block; width: 100%; height: auto; }
  .msw-hero-proof { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--msw-line); border-bottom: 1px solid var(--msw-line); background: rgba(255,255,255,.9); }
  .msw-hero-proof > div { display: flex; gap: 11px; align-items: flex-start; padding: 24px 20px; border-right: 1px solid var(--msw-line-soft); }
  .msw-hero-proof > div:first-child { padding-left: 0; }
  .msw-hero-proof > div:last-child { border-right: 0; padding-right: 0; }
  .msw-hero-proof svg { flex: 0 0 auto; margin-top: 2px; color: var(--msw-brand-dark); }
  .msw-hero-proof span { display: grid; gap: 2px; }
  .msw-hero-proof strong { color: var(--msw-navy); font-size: 15px; line-height: 1.35; }
  .msw-hero-proof small { color: var(--msw-muted); font-size: 13px; line-height: 1.45; }

  .msw-authority { background: #FFFFFF; }
  .msw-authority-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 94px; align-items: start; }
  .msw-authority-copy { max-width: 590px; }
  .msw-authority-copy p:last-child { margin-bottom: 0; }
  .msw-authority-points { border-top: 1px solid var(--msw-line); }
  .msw-authority-point { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 16px; padding: 24px 0; border-bottom: 1px solid var(--msw-line-soft); }
  .msw-point-mark { width: 9px; height: 9px; margin-top: 9px; border: 2px solid var(--msw-brand); border-radius: 50%; }
  .msw-authority-point h3 { margin-bottom: 7px; font-size: 20px; }
  .msw-authority-point p { margin-bottom: 0; }

  .msw-scope { background: var(--msw-soft); }
  .msw-domain-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); column-gap: 46px; row-gap: 0; border-top: 1px solid #D6DEED; }
  .msw-domain-item { position: relative; padding: 30px 0 34px; border-bottom: 1px solid #D6DEED; }
  .msw-domain-item::before { content: ""; position: absolute; top: -1px; left: 0; width: 34px; height: 2px; background: var(--msw-brand); }
  .msw-icon-surface { display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 21px; border: 1px solid #D9E2F1; border-radius: 13px; background: #FFFFFF; color: var(--msw-brand-dark); }
  .msw-domain-item h3 { font-size: 23px; }
  .msw-domain-note { color: #58657A !important; font-weight: 500; }
  .msw-domain-item .msw-editorial-link { margin-top: 3px; }

  .msw-precision { padding: 94px 0; background: radial-gradient(circle at 84% 8%, rgba(255,255,255,.08), transparent 25%), linear-gradient(128deg,#17264D 0%,#253F8F 65%,#2E4E9A 100%); }
  .msw-dark-head { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 88px; align-items: end; margin-bottom: 52px; }
  .msw-dark-head h2 { color: #FFFFFF; }
  .msw-dark-head > p { margin-bottom: 4px; color: #E3E9F8; font-size: 17px; }
  .msw-precision-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); }
  .msw-precision-item { min-height: 250px; padding: 30px 28px 31px; border-right: 1px solid rgba(255,255,255,.15); }
  .msw-precision-item:first-child { padding-left: 0; }
  .msw-precision-item:last-child { border-right: 0; padding-right: 0; }
  .msw-precision-item svg { margin-bottom: 23px; color: #C8D6FF; }
  .msw-precision-item h3 { color: #FFFFFF; font-size: 21px; }
  .msw-precision-item p { margin-bottom: 0; color: #DCE4F6; }
  .msw-cross-doc { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 70px; align-items: center; margin-top: 44px; padding-top: 38px; }
  .msw-cross-doc > div { display: flex; gap: 15px; align-items: flex-start; }
  .msw-cross-doc svg { flex: 0 0 auto; margin-top: 3px; color: #C8D6FF; }
  .msw-cross-doc h3 { margin-bottom: 0; color: #FFFFFF; font-size: 24px; }
  .msw-cross-doc p { margin-bottom: 0; color: #DCE4F6; font-size: 17px; }

  .msw-lifecycle { background: #FFFFFF; }
  .msw-lifecycle-track { position: relative; display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); gap: 0; margin-top: 8px; }
  .msw-life-step { position: relative; z-index: 1; padding: 0 22px 10px; }
  .msw-life-step:first-child { padding-left: 0; }
  .msw-life-step:last-child { padding-right: 0; }
  .msw-step-number { width: 50px; height: 50px; display: grid; place-items: center; margin-bottom: 22px; border: 1px solid #C9D6ED; border-radius: 50%; color: var(--msw-brand-dark); background: #FFFFFF; font-size: 12px; font-weight: 700; letter-spacing: .06em; }
  .msw-life-step h3 { font-size: 19px; }
  .msw-life-step p { margin-bottom: 0; color: #5B687D; }
  .msw-lifecycle-summary { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 34px; align-items: center; margin-top: 46px; padding: 25px 30px; border: 1px solid #D9E2F2; border-radius: 18px; background: var(--msw-brand-pale); }
  .msw-lifecycle-summary strong { color: var(--msw-navy); font-size: 18px; }
  .msw-lifecycle-summary span { color: var(--msw-slate); font-size: 16px; }

  .msw-publications { background: linear-gradient(180deg,#F9FBFF 0%,#F5F7FF 100%); }
  .msw-publication-grid { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(420px,.98fr); gap: 72px; align-items: center; }
  .msw-publication-copy { max-width: 660px; }
  .msw-publication-points { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; margin: 32px 0; border-top: 1px solid #D5DFEF; }
  .msw-publication-points > div { padding: 20px 0; border-bottom: 1px solid #D5DFEF; }
  .msw-publication-points strong, .msw-publication-points span { display: block; }
  .msw-publication-points strong { margin-bottom: 5px; color: var(--msw-navy); font-size: 16px; }
  .msw-publication-points span { color: #59667C; font-size: 16px; line-height: 1.55; }
  .msw-publication-copy > p:last-child { margin-bottom: 0; }
  .msw-publication-art { display: grid; place-items: center; min-height: 440px; border: 1px solid #DCE4F3; border-radius: var(--msw-radius-lg); background: #FFFFFF; box-shadow: var(--msw-shadow); }
  .msw-publication-art svg { display: block; width: 100%; height: auto; }

  .msw-expertise { background: #FFFFFF; }
  .msw-factor-strip { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); border-top: 1px solid var(--msw-line); border-bottom: 1px solid var(--msw-line); }
  .msw-factor { position: relative; padding: 28px 22px 30px; border-right: 1px solid var(--msw-line-soft); }
  .msw-factor:first-child { padding-left: 0; }
  .msw-factor:last-child { border-right: 0; padding-right: 0; }
  .msw-factor:not(:last-child)::after { content: "+"; position: absolute; z-index: 2; top: 26px; right: -14px; display: grid; place-items: center; width: 28px; height: 28px; border: 1px solid #D7E1F1; border-radius: 50%; background: #FFFFFF; color: var(--msw-brand-dark); font-size: 17px; font-weight: 700; line-height: 1; }
  .msw-factor h3 { margin-top: 2px; font-size: 19px; }
  .msw-factor p { margin-bottom: 0; color: #5A677C; }
  .msw-expertise-note { display: grid; grid-template-columns: minmax(230px,.48fr) minmax(0,1.52fr); gap: 48px; align-items: start; margin-top: 38px; }
  .msw-expertise-note strong { color: var(--msw-navy); font-size: 18px; }
  .msw-expertise-note span { color: var(--msw-slate); font-size: 16px; line-height: 1.65; }

  .msw-consistency { background: var(--msw-soft); }
  .msw-consistency-grid { display: grid; grid-template-columns: minmax(0,.84fr) minmax(0,1.16fr); gap: 88px; align-items: start; }
  .msw-consistency-copy { position: sticky; top: 32px; max-width: 530px; }
  .msw-consistency-list { border-top: 1px solid #D3DDEC; }
  .msw-consistency-list article { display: grid; grid-template-columns: minmax(190px,.46fr) minmax(0,1fr); gap: 34px; padding: 24px 0; border-bottom: 1px solid #D3DDEC; }
  .msw-consistency-list h3 { margin-bottom: 0; font-size: 19px; }
  .msw-consistency-list p { margin-bottom: 0; }

  .msw-workflow { background: #FFFFFF; }
  .msw-workflow-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 64px; border-top: 1px solid var(--msw-line); }
  .msw-workflow-step { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 27px 0 30px; border-bottom: 1px solid var(--msw-line-soft); }
  .msw-workflow-step > span { color: var(--msw-brand-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; }
  .msw-workflow-step h3 { font-size: 20px; }
  .msw-workflow-step p { margin-bottom: 0; }
  .msw-workflow-note { display: grid; grid-template-columns: minmax(280px,.5fr) minmax(0,1.5fr); gap: 48px; margin-top: 42px; padding: 26px 30px; border-left: 2px solid var(--msw-brand); background: var(--msw-brand-pale); }
  .msw-workflow-note strong { color: var(--msw-navy); font-size: 17px; }
  .msw-workflow-note p { margin-bottom: 0; }

  .msw-human-tech { background: linear-gradient(180deg,#FAFBFE 0%,#F4F7FD 100%); }
  .msw-human-tech-panel { overflow: hidden; border: 1px solid #DCE4F2; border-radius: var(--msw-radius-lg); background: #FFFFFF; box-shadow: 0 18px 54px rgba(31,53,102,.06); }
  .msw-human-tech-head { display: grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 74px; align-items: end; padding: 42px 44px 34px; }
  .msw-human-tech-head > p { margin-bottom: 4px; font-size: 17px; }
  .msw-human-tech-columns { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--msw-line); border-bottom: 1px solid var(--msw-line); }
  .msw-human-column, .msw-tech-column { padding: 38px 44px; }
  .msw-human-column { border-right: 1px solid var(--msw-line); }
  .msw-human-icon { display: grid; place-items: center; width: 46px; height: 46px; margin-bottom: 22px; border-radius: 13px; background: var(--msw-brand-soft); color: var(--msw-brand-dark); }
  .msw-human-column h3, .msw-tech-column h3 { font-size: 24px; }
  .msw-human-column p, .msw-tech-column p { margin-bottom: 0; }
  .msw-human-tech-foot { margin: 0 !important; padding: 24px 44px 28px; color: #59667D !important; }

  .msw-fields { background: #FFFFFF; }
  .msw-field-groups { display: grid; grid-template-columns: 1.35fr .9fr .9fr; gap: 44px; }
  .msw-field-group { padding-top: 22px; border-top: 1px solid #D3DDEC; }
  .msw-field-group h3 { margin-bottom: 17px; font-size: 20px; }
  .msw-field-items { display: grid; gap: 9px; }
  .msw-field-items span { position: relative; padding-left: 16px; color: #46546D; font-size: 16px; line-height: 1.55; }
  .msw-field-items span::before { content: ""; position: absolute; left: 0; top: .7em; width: 5px; height: 5px; border-radius: 50%; background: var(--msw-brand); }
  .msw-fields-note { margin: 28px 0 0 !important; }
  .msw-fields-note a { color: var(--msw-brand-dark); font-weight: 700; }
  .msw-org-band { margin-top: 72px; padding-top: 62px; border-top: 1px solid var(--msw-line); }
  .msw-org-title { max-width: 730px; margin-bottom: 36px; }
  .msw-org-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 32px; }
  .msw-org-grid article { padding-top: 20px; border-top: 1px solid #D3DDEC; }
  .msw-org-grid h3 { font-size: 19px; }
  .msw-org-grid p { margin-bottom: 0; color: #5A677C; }
  .msw-org-links { display: flex; flex-wrap: wrap; gap: 12px 28px; margin-top: 34px; }

  .msw-programs { padding: 94px 0; background: radial-gradient(circle at 88% 10%,rgba(255,255,255,.08),transparent 24%), linear-gradient(128deg,#17264D 0%,#253F8F 67%,#304F9A 100%); }
  .msw-program-grid { display: grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 88px; align-items: start; }
  .msw-program-intro h2 { color: #FFFFFF; }
  .msw-program-intro > p:not(.msw-eyebrow) { color: #DDE5F7; font-size: 17px; }
  .msw-program-proof { display: grid; gap: 13px; margin-top: 30px; }
  .msw-program-proof span { display: flex; gap: 11px; align-items: center; color: #F3F6FD; font-size: 16px; font-weight: 600; }
  .msw-program-proof svg { color: #C8D6FF; }
  .msw-program-scale { padding: 34px 36px; border: 1px solid rgba(255,255,255,.18); border-radius: 24px; background: rgba(255,255,255,.07); }
  .msw-program-scale > h3 { margin-bottom: 24px; color: #FFFFFF; font-size: 25px; }
  .msw-program-scale > div { padding: 17px 0; border-top: 1px solid rgba(255,255,255,.15); }
  .msw-program-scale strong { color: #FFFFFF; font-size: 16px; }
  .msw-program-scale p { margin: 5px 0 0; color: #DCE4F5; }
  .msw-why-wrap { margin-top: 74px; padding-top: 52px; border-top: 1px solid rgba(255,255,255,.18); }
  .msw-why-head h2 { max-width: 710px; color: #FFFFFF; }
  .msw-why-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 28px; margin-top: 38px; }
  .msw-why-grid article { padding-top: 20px; border-top: 1px solid rgba(255,255,255,.18); }
  .msw-why-grid h3 { color: #FFFFFF; font-size: 19px; }
  .msw-why-grid p { margin-bottom: 0; color: #DDE5F7; }

  .msw-routing { background: var(--msw-soft); }
  .msw-route-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 62px; border-top: 1px solid #D2DCEC; }
  .msw-route-row { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 22px; align-items: end; padding: 27px 0 30px; border-bottom: 1px solid #D2DCEC; }
  .msw-route-row h3 { font-size: 20px; }
  .msw-route-row p { margin-bottom: 0; color: #58657B; }
  .msw-route-row .msw-editorial-link { margin-bottom: 2px; white-space: nowrap; }
  .msw-resource-band { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr); gap: 82px; align-items: start; margin-top: 72px; padding: 44px; border: 1px solid #D9E2F1; border-radius: 24px; background: #FFFFFF; }
  .msw-resource-band p { margin-bottom: 0; }
  .msw-resource-band h2 { margin-bottom: 18px; }
  .msw-resource-links { display: grid; gap: 18px; padding-top: 3px; }

  .msw-faq { background: #FFFFFF; }
  .msw-faq-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 82px; align-items: start; }
  .msw-faq-intro { position: sticky; top: 28px; max-width: 430px; }
  .msw-faq-intro > p:not(.msw-eyebrow) { font-size: 17px; }
  .msw-faq-list { border-top: 1px solid #CCD6E8; }
  .msw-faq-item { border-bottom: 1px solid #CCD6E8; }
  .msw-faq-item summary { list-style: none; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; min-height: 80px; padding: 22px 0; cursor: pointer; color: var(--msw-navy); font-size: 18px; font-weight: 600; line-height: 1.4; }
  .msw-faq-item summary::-webkit-details-marker { display: none; }
  .msw-faq-plus { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--msw-brand-dark); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
  .msw-faq-item[open] .msw-faq-plus { transform: rotate(45deg); }
  .msw-faq-answer { padding: 0 48px 28px 0; }
  .msw-faq-answer p { margin-bottom: 0; }

  .msw-final-cta { position: relative; overflow: hidden; padding: 82px 0; background: linear-gradient(112deg,#F5F7FF 0%,#EAF0FF 100%); }
  .msw-final-cta::after { content: ""; position: absolute; right: -2%; top: 0; width: 30%; height: 100%; opacity: .5; background-image: radial-gradient(circle,rgba(54,89,187,.16) 1px,transparent 1.2px); background-size: 14px 14px; mask-image: linear-gradient(90deg,transparent,#000); }
  .msw-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.18fr) minmax(280px,.82fr); gap: 70px; align-items: center; }
  .msw-final-cta h2 { max-width: 780px; }
  .msw-final-cta p { max-width: 790px; margin-bottom: 0; font-size: 17px; }
  .msw-final-actions { display: grid; grid-template-columns: 1fr; gap: 12px; justify-self: end; width: min(100%,330px); }
  .msw-final-actions .msw-button { width: 100%; }
  .msw-final-actions small { margin-top: 4px; color: #5A677C; font-size: 13px; line-height: 1.5; }

  @media (max-width: 1120px) {
    .msw-shell { padding-inline: 40px; }
    .msw-hero-grid { grid-template-columns: minmax(0,1.02fr) minmax(330px,.98fr); gap: 40px; }
    .msw-hero-proof { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .msw-hero-proof > div { border-bottom: 1px solid var(--msw-line-soft); }
    .msw-hero-proof > div:nth-child(2) { border-right: 0; }
    .msw-hero-proof > div:nth-child(3) { padding-left: 0; }
    .msw-hero-proof > div:nth-child(n+3) { border-bottom: 0; }
    .msw-domain-grid { column-gap: 34px; }
    .msw-precision-item { padding-inline: 20px; }
    .msw-publication-grid { gap: 46px; }
    .msw-factor { padding-inline: 16px; }
    .msw-program-grid { gap: 50px; }
  }

  @media (max-width: 900px) {
    .msw-shell { padding-inline: 30px; }
    .msw-section { padding: 80px 0; }
    .msw-section-head-split, .msw-dark-head, .msw-authority-grid, .msw-publication-grid, .msw-consistency-grid, .msw-human-tech-head, .msw-program-grid, .msw-resource-band, .msw-faq-grid, .msw-final-grid { grid-template-columns: 1fr; gap: 34px; }
    .msw-section-head { margin-bottom: 48px; }
    .msw-precision, .msw-programs { padding: 80px 0; }
    .msw-hero { padding-top: 74px; }
    .msw-hero-grid { grid-template-columns: 1fr; gap: 38px; padding-bottom: 58px; }
    .msw-hero-art { max-width: 520px; justify-self: center; }
    .msw-domain-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .msw-precision-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .msw-precision-item:nth-child(2) { border-right: 0; }
    .msw-precision-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.15); }
    .msw-precision-item:first-child { padding-left: 0; }
    .msw-precision-item:nth-child(3) { padding-left: 0; }
    .msw-cross-doc { grid-template-columns: 1fr; gap: 16px; }
    .msw-lifecycle-track { grid-template-columns: repeat(3,minmax(0,1fr)); row-gap: 36px; }
    .msw-life-step, .msw-life-step:first-child, .msw-life-step:last-child { padding-inline: 0 24px; }
    .msw-life-step:nth-child(3n) { padding-right: 0; }
    .msw-publication-copy { max-width: 760px; }
    .msw-publication-art { min-height: 0; max-width: 650px; }
    .msw-factor-strip { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .msw-factor::after { display: none !important; }
    .msw-factor { border-bottom: 1px solid var(--msw-line-soft); }
    .msw-factor:nth-child(2n) { border-right: 0; }
    .msw-factor:nth-child(odd) { padding-left: 0; }
    .msw-factor:last-child { grid-column: 1 / -1; padding-left: 0; padding-right: 0; border-bottom: 0; }
    .msw-expertise-note { grid-template-columns: 1fr; gap: 10px; }
    .msw-consistency-copy, .msw-faq-intro { position: static; max-width: 760px; }
    .msw-workflow-grid { grid-template-columns: 1fr; }
    .msw-human-tech-columns { grid-template-columns: 1fr; }
    .msw-human-column { border-right: 0; border-bottom: 1px solid var(--msw-line); }
    .msw-field-groups { grid-template-columns: 1fr; gap: 28px; }
    .msw-org-grid, .msw-why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .msw-route-grid { grid-template-columns: 1fr; }
    .msw-route-row { grid-template-columns: 1fr; gap: 10px; align-items: start; }
    .msw-route-row .msw-editorial-link { margin: 0; white-space: normal; }
    .msw-final-actions { justify-self: start; }
  }

  @media (max-width: 640px) {
    .msw-shell { padding-inline: 20px; }
    .msw-section { padding: 68px 0; }
    .msw-section-head { margin-bottom: 42px; }
    .msw-dark-head { margin-bottom: 40px; }
    .msw-editorial-link { min-height: 44px; }
    .msw-page h1 { font-size: 42px; }
    .msw-page h2 { font-size: 32px; }
    .msw-hero { padding-top: 58px; }
    .msw-hero-lead { font-size: 18px !important; }
    .msw-button-row { display: grid; grid-template-columns: 1fr; }
    .msw-button { width: 100%; }
    .msw-hero-proof { grid-template-columns: 1fr; }
    .msw-hero-proof > div, .msw-hero-proof > div:first-child, .msw-hero-proof > div:last-child { padding: 18px 0; border-right: 0; border-bottom: 1px solid var(--msw-line-soft); }
    .msw-hero-proof > div:nth-child(3) { border-bottom: 1px solid var(--msw-line-soft); }
    .msw-hero-proof > div:last-child { border-bottom: 0; }
    .msw-authority-grid { gap: 42px; }
    .msw-domain-grid { grid-template-columns: 1fr; }
    .msw-domain-item { padding: 26px 0 30px; }
    .msw-precision { padding: 68px 0; }
    .msw-precision-grid { grid-template-columns: 1fr; }
    .msw-precision-item, .msw-precision-item:first-child, .msw-precision-item:nth-child(3), .msw-precision-item:last-child { min-height: 0; padding: 26px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.15); }
    .msw-precision-item:last-child { border-bottom: 0; }
    .msw-lifecycle-track { grid-template-columns: 1fr; row-gap: 0; }
    .msw-life-step, .msw-life-step:first-child, .msw-life-step:last-child, .msw-life-step:nth-child(3n) { display: grid; grid-template-columns: 50px minmax(0,1fr); gap: 0 17px; padding: 0 0 28px; }
    .msw-life-step .msw-step-number { grid-row: 1 / span 2; margin: 0; }
    .msw-life-step h3, .msw-life-step p { grid-column: 2; }
    .msw-lifecycle-summary { grid-template-columns: 1fr; gap: 7px; padding: 22px; }
    .msw-publication-points { grid-template-columns: 1fr; }
    .msw-publication-art { border-radius: 22px; }
    .msw-factor-strip { grid-template-columns: 1fr; }
    .msw-factor, .msw-factor:first-child, .msw-factor:last-child, .msw-factor:nth-child(odd) { grid-column: auto; padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--msw-line-soft); }
    .msw-factor:last-child { border-bottom: 0; }
    .msw-consistency-list article { grid-template-columns: 1fr; gap: 8px; }
    .msw-workflow-step { grid-template-columns: 40px minmax(0,1fr); gap: 13px; }
    .msw-workflow-note { grid-template-columns: 1fr; gap: 8px; padding: 22px; }
    .msw-human-tech-head, .msw-human-column, .msw-tech-column, .msw-human-tech-foot { padding-left: 22px; padding-right: 22px; }
    .msw-human-tech-head { padding-top: 30px; }
    .msw-org-grid, .msw-why-grid { grid-template-columns: 1fr; }
    .msw-org-links { display: grid; gap: 4px; }
    .msw-programs { padding: 68px 0; }
    .msw-program-scale { padding: 26px 22px; border-radius: 20px; }
    .msw-route-row { grid-template-columns: 1fr; gap: 12px; }
    .msw-resource-band { padding: 26px 22px; border-radius: 20px; }
    .msw-faq-item summary { min-height: 72px; font-size: 16px; }
    .msw-faq-answer { padding-right: 0; }
    .msw-final-cta { padding: 66px 0; }
    .msw-final-actions { width: 100%; }
  }

  @media (max-width: 360px) {
    .msw-page h1 { font-size: 38px; }
    .msw-page h2 { font-size: 30px; }
    .msw-hero { padding-top: 54px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .msw-page *, .msw-page *::before, .msw-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
