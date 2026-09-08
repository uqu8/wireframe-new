const expertise = [
  {
    title: "Organic & Synthetic Chemistry",
    desc: "Novel compounds, synthesis pathways, intermediates, reagents, catalysts, reaction conditions, purification methods, derivatization, and chemical modifications.",
  },
  {
    title: "Pharmaceutical & Medicinal Chemistry",
    desc: "Active compounds, small molecules, analogs and derivatives, stereoisomers, salts, solvates, polymorphs, pharmaceutical compositions, and structure-activity terminology.",
    link: ["Pharmaceutical Translation Services", "https://www.stepes.com/pharmaceutical-translation-services/"],
  },
  {
    title: "Polymers & Advanced Materials",
    desc: "Polymers, copolymers, resins, elastomers, adhesives, coatings, composites, membranes, additives, functional materials, and specialty formulations.",
  },
  {
    title: "Industrial & Process Chemistry",
    desc: "Chemical processing, catalytic systems, separation methods, refining, reaction engineering, production methods, recovery, purification, and process improvements.",
  },
  {
    title: "Agrochemicals",
    desc: "Active ingredients, pesticide chemistry, herbicidal and fungicidal compounds, fertilizers, adjuvants, formulations, controlled-release technologies, and application compositions.",
    link: ["Agriculture Translation Services", "https://www.stepes.com/agriculture-translation-services/"],
  },
  {
    title: "Electrochemistry & Energy Materials",
    desc: "Electrode materials, electrolytes, battery chemistry, separator materials, electrochemical reactions, fuel cells, redox systems, and energy-storage compounds.",
  },
  {
    title: "Specialty & Performance Chemicals",
    desc: "Surfactants, additives, pigments, colorants, lubricants, functional coatings, specialty formulations, performance chemicals, and high-purity materials.",
  },
];

const whatMakesDifferent = [
  { title: "Chemical Nomenclature", desc: "Systematic names, common names, abbreviations, compound classes, functional groups, and applicant-approved terminology must remain consistent.", icon: "nomenclature" },
  { title: "Chemical Structures and Formulae", desc: "Formulas, labels, references, symbols, and structural relationships need controlled handling alongside translated text.", icon: "formula" },
  { title: "Variable Compounds and Markush Definitions", desc: "Variable substituents, alternatives, ranges, and repeated definitions require careful terminology and cross-reference control.", icon: "markush" },
  { title: "Reactions and Synthesis", desc: "Starting materials, intermediates, catalysts, solvents, reaction conditions, purification methods, and sequence-dependent steps must retain scientific meaning.", icon: "reaction" },
  { title: "Numerical and Compositional Precision", desc: "Concentrations, percentages, ratios, ranges, temperatures, pressures, units, and experimental conditions require systematic verification.", icon: "precision" },
  { title: "Claims, Examples, and Cross-References", desc: "Defined terms and dependencies must stay aligned across claims, specification text, experimental examples, tables, figures, and formula references.", icon: "claims" },
];

const documentGroups = [
  {
    title: "Patent Applications and Specifications",
    desc: "Technical disclosure of the invention, including applications, specifications, descriptions, abstracts, embodiments, experimental examples, technical disclosures, tables, and formula or figure references.",
    icon: "application",
  },
  {
    title: "Chemical Patent Claims",
    desc: "Independent and dependent claims, compound claims, composition claims, process claims, method claims, use claims, formulation claims, and materials-related claims.",
    icon: "claims",
  },
  {
    title: "Chemical Structures and Scientific Content",
    desc: "Chemical formulas, compound definitions, Markush definitions, reaction schemes, synthesis descriptions, compound tables, experimental results, structure references, and formulation data.",
    icon: "formula",
  },
  {
    title: "Prosecution and Related Patent Materials",
    desc: "Office actions, amendments, responses, examiner communications, search reports, attorney-selected supporting materials, and correspondence containing technical chemical content.",
    icon: "prosecution",
  },
  {
    title: "Chemical Prior Art and Research Materials",
    desc: "Published patents, patent applications, selected claims, technical publications, research papers, experimental examples, synthesis descriptions, invention disclosures, and relevant literature.",
    icon: "priorArt",
  },
];

const intendedUse = [
  {
    title: "Filing and Prosecution",
    desc: "Close control of chemical terminology, claims, formulas, numerical ranges, defined compounds, references, and claim dependencies, with workflow depth aligned to client and patent-counsel instructions.",
  },
  {
    title: "Prior Art and Patent Research",
    desc: "AI-assisted screening, research comprehension, summaries, selected-passage translation, claim translation, experimental-section translation, full professional translation, and verification for priority content.",
  },
  {
    title: "Litigation, Validity, and Technical Review",
    desc: "Greater human control for identified claims, chemically significant definitions, experimental examples, technical exhibits, cited prior art, expert-support materials, and attorney-selected passages.",
  },
  {
    title: "Patent Families and Portfolios",
    desc: "Approved terminology, translation memory, related family documents, prior translations, and client instructions help maintain consistency while focusing review on new or changed content.",
  },
];

const priorArtModes = [
  ["Document Screening", "AI-assisted or linguist-supported screening can help identify which foreign chemical patents deserve deeper review."],
  ["Summary Translation", "Focused summaries can surface the relevant invention, chemical disclosure, compound class, process, experimental findings, or selected technical content."],
  ["Selected-Passage Translation", "Translate claims, compound definitions, synthesis methods, experimental examples, formulation sections, Markush definitions, tables, or specific embodiments."],
  ["Full Professional Translation", "Translate the complete document when researchers, counsel, or technical experts need detailed access to the full disclosure."],
  ["Human-Verified Decision-Critical Content", "Add independent professional review and additional quality controls when translated passages materially support legal, technical, commercial, or IP decisions."],
];

const workflow = [
  ["Scope and Intended-Use Review", "Confirm languages, document type, chemical subject matter, intended use, jurisdiction information supplied by the client, deadline, format, certification needs, and counsel instructions."],
  ["Chemistry Expertise and Reference Preparation", "Select linguists and reviewers by language pair and technical field, then prepare related patents, previous translations, terminology, glossaries, translation memory, and reviewer instructions."],
  ["Scientific and Patent Translation", "Translate with controlled handling of chemical nomenclature, claims, definitions, formulas, compounds, numerical values, ranges, units, structure references, cross-references, and experimental content."],
  ["Independent Professional Review", "Where required, a second qualified linguist reviews the translation against the source for accuracy, completeness, terminology, technical meaning, consistency, and project instructions."],
  ["Automated Technical QA", "Systematic checks help identify omissions, inconsistent terminology, numbers, units, percentages, claim numbering, formula references, figure and table references, untranslated text, and formatting inconsistencies."],
  ["Final Review and Controlled Delivery", "Complete file-level checks and prepare the translation in the agreed format, adding certification or other review steps when requested."],
];

const whyStepes = [
  { title: "Chemistry Subject-Matter Expertise", desc: "Match linguists and reviewers to the language pair and relevant areas of chemistry, materials science, pharmaceuticals, engineering, or related technical disciplines.", icon: "flask" },
  { title: "Patent-Document Experience", desc: "Support claims, specifications, prior art, prosecution materials, patent families, and other technical IP documents through workflows aligned with their intended use.", icon: "patent" },
  { title: "Controlled Terminology", desc: "Use terminology resources, client references, previous patents, and approved language to maintain important chemical and patent terminology across documents.", icon: "terminology" },
  { title: "AI + Human Workflows", desc: "Apply automation where it improves efficiency while retaining qualified human review for complex, sensitive, filing-related, and decision-critical content.", icon: "ai" },
  { title: "Scalable Multilingual Delivery", desc: "Support one patent in one language or coordinate related documents, patent families, portfolios, and multilingual programs across global markets.", icon: "globe" },
  { title: "Secure Enterprise Workflows", desc: "Manage confidential intellectual property through controlled project intake, access, translation, review, QA, and delivery.", icon: "shield" },
];

const patentLanguages = [
  ["Chinese Patent Translation Services", "Chinese and English patent applications, claims, specifications, prior art, prosecution materials, and technical IP content.", "https://www.stepes.com/chinese-patent-translation-services/"],
  ["Japanese Patent Translation Services", "Japanese patent content for filing support, research, technical review, prior art, and multijurisdiction patent programs.", "https://www.stepes.com/japanese-patent-translation-services/"],
  ["Korean Patent Translation Services", "Korean patent documentation across technical fields, research requirements, and multilingual IP workflows.", "https://www.stepes.com/korean-patent-translation-services/"],
  ["German Patent Translation Services", "German patent applications, claims, specifications, prior art, and related intellectual property documents.", "https://www.stepes.com/german-patent-translation-services/"],
];

const related = [
  ["Patent Translation Services", "Patent applications, filing and prosecution materials, prior art, litigation content, patent families, certification, and multilingual IP workflows across technical disciplines.", "https://www.stepes.com/patent-translation-services/"],
  ["Chemical & Materials Translation Services", "Broader chemical and materials content across R&D, safety, regulatory affairs, manufacturing, engineering, product documentation, and commercialization.", "https://www.stepes.com/chemical-translation-services/"],
  ["Pharmaceutical Translation Services", "Pharmaceutical research, clinical, regulatory, manufacturing, medical, and commercial documentation across global markets.", "https://www.stepes.com/pharmaceutical-translation-services/"],
  ["Technical Translation Services", "Complex scientific, engineering, manufacturing, and technical documentation with subject-matter expertise and terminology control.", "https://www.stepes.com/technical-translation-services/"],
  ["Legal Translation Services", "Intellectual property, contracts, litigation, corporate legal, compliance, and other legal content through risk-based multilingual workflows.", "https://www.stepes.com/legal-translation-services/"],
];

const faqs = [
  ["What are chemical patent translation services?", "Chemical patent translation services provide specialized translation for patent applications, claims, specifications, prior art, prosecution materials, and related intellectual property involving chemistry, chemical engineering, materials science, pharmaceuticals, polymers, industrial processes, agrochemicals, electrochemistry, and related technologies. Because these documents can contain complex nomenclature, formulas, structures, reaction schemes, variable substituents, numerical ranges, and experimental information, they require appropriate language and scientific expertise together with controlled terminology and quality assurance."],
  ["What makes chemical patent translation different from general patent translation?", "Chemical patents contain scientific information represented through both language and structured technical elements. Translators may need to handle compound names, formulas, structures, Markush definitions, synthesis descriptions, stereochemistry, reaction conditions, formulations, numerical ranges, units, experimental examples, and patent claim relationships. This requires chemistry expertise in addition to familiarity with patent-document structures and translation workflows."],
  ["What types of chemical patents can Stepes translate?", "Stepes supports patents involving organic and synthetic chemistry, medicinal chemistry, pharmaceuticals, industrial chemistry, polymers, advanced materials, specialty chemicals, agrochemicals, electrochemistry, energy materials, formulations, catalysts, chemical processes, and related technologies. Translator and reviewer selection is based on the language pair, technical field, document type, and project requirements."],
  ["Can Stepes translate chemical formulas and molecular structures?", "Stepes translates the surrounding language and applies defined project rules to chemical formulas, structure identifiers, labels, references, symbols, numbers, and related structured scientific information. Many of these elements should not be translated as ordinary text; they may need to remain unchanged, retain established notation, or be validated for consistency with the source and surrounding translated content."],
  ["How does Stepes handle Markush structures and variable substituents?", "Chemical patents can use Markush definitions to describe groups of related compounds through a common framework and variable substituents. Stepes focuses on maintaining consistent terminology and references for variables, alternative groups, substituents, ranges, defined terms, embodiments, examples, and related claim language throughout the translation. Interpretation of legal claim scope remains the responsibility of qualified patent counsel."],
  ["How do you maintain chemical nomenclature across claims and specifications?", "Stepes can use client-approved terminology, previous patent translations, related patent-family documents, terminology resources, translation memory, scientific references, and project-specific instructions. These controls help keep compound names, substituent terminology, chemical classes, abbreviations, formulations, process terms, and defined language consistent across claims, descriptions, examples, and related patent documents."],
  ["Can Stepes translate pharmaceutical and medicinal chemistry patents?", "Yes. Stepes translates patent content involving pharmaceutical compounds, medicinal chemistry, small molecules, active ingredients, formulations, stereoisomers, salts, solvates, polymorphs, and related chemical technologies. Broader pharmaceutical content such as clinical, regulatory, manufacturing, and patient-facing documentation is supported through Pharmaceutical Translation Services."],
  ["Can Stepes translate foreign chemical patents for prior-art research?", "Yes. Options can include rapid document screening, summary translation, selected-passage translation, claim translation, translation of experimental or synthesis sections, complete professional translation, and independent review for decision-critical content. This lets patent professionals and researchers apply deeper translation resources to the documents or passages most relevant to their analysis."],
  ["Can AI be used for chemical patent translation?", "Yes, when the workflow is appropriate for the content and intended use. AI can be valuable for prior-art screening, research comprehension, document triage, terminology extraction, repetitive patent-family material, version comparison, and automated QA. Higher-risk content such as filing-grade claims, novel compound terminology, complex Markush definitions, chemically significant ranges, prosecution documents, decision-critical prior art, and evidentiary content generally benefits from qualified human translation and review."],
  ["Can Stepes support PCT and national-phase chemical patent translations?", "Yes. Stepes can provide chemical patent translation for PCT-related and national or regional phase workflows according to instructions provided by the client, patent counsel, or filing representative. Translation requirements, accepted languages, filing deadlines, certification practices, and document requirements vary by jurisdiction. Stepes provides translation support and does not provide patent filing or legal advice."],
  ["How do you maintain consistency across a chemical patent family?", "Stepes can apply related patent documents, existing translations, terminology resources, translation memory, client glossaries, patent-counsel instructions, and reviewer feedback across related projects. Translation memory identifies identical and similar content for appropriate reuse or contextual review, while terminology management helps maintain recurring chemical and patent terminology across languages, applications, and revisions."],
  ["What information should I provide for a chemical patent translation quote?", "Provide the source documents or patent publication numbers, source and target languages, intended use, target jurisdiction when relevant, preferred delivery date, required file format, certification requirements if any, related patents or family documents, previous translations, approved terminology or glossaries, technical reference materials, and any instructions from patent counsel or reviewers. For complex projects, Stepes can review the available materials and recommend a workflow based on the stated project requirements."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="arrowIcon">
      <path d="M4 10h10M10 6l4 4-4 4" />
    </svg>
  );
}

function ScienceIcon({ type = "molecule" }) {
  const icons = {
    nomenclature: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5v14M19 5v14M8.5 7.5h7M8.5 12h5M8.5 16.5h7" />
        <circle cx="7" cy="7.5" r="1" /><circle cx="7" cy="12" r="1" /><circle cx="7" cy="16.5" r="1" />
      </svg>
    ),
    formula: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12,3.5 18.5,7.25 18.5,14.75 12,18.5 5.5,14.75 5.5,7.25" />
        <path d="M18.5 7.25l3-1.75M5.5 14.75l-3 1.75M12 18.5v3" />
        <circle cx="21.5" cy="5.5" r="1.2" /><circle cx="2.5" cy="16.5" r="1.2" /><circle cx="12" cy="22" r="1.2" />
      </svg>
    ),
    markush: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="9,6 13,8.3 13,12.9 9,15.2 5,12.9 5,8.3" />
        <path d="M13 8.3l4-2.3M13 12.9l4 2.3M5 8.3L2 6.6" />
        <circle cx="18.5" cy="5.2" r="1.7" /><circle cx="18.5" cy="16" r="1.7" /><circle cx="1.8" cy="6.5" r="1.2" />
      </svg>
    ),
    reaction: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8h14M14 5l3 3-3 3M21 16H7M10 13l-3 3 3 3" />
      </svg>
    ),
    precision: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 2.5V6M12 18v3.5M2.5 12H6M18 12h3.5" />
      </svg>
    ),
    claims: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l3 3v15H6zM15 3v4h4" />
        <path d="M9 11h6M9 15h4" />
        <path d="M14.5 17.5l1.5 1.5 3-3" />
      </svg>
    ),
    application: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 12h6M9 16h6" />
      </svg>
    ),
    prosecution: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h8l4 4v8M14 3v5h5M9 12h5" />
        <path d="M8 19h9M14 16l3 3-3 3" />
      </svg>
    ),
    priorArt: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3h8l3 3v8H5zM13 3v4h4M8 10h5" />
        <circle cx="15.5" cy="16.5" r="3.5" />
        <path d="M18 19l3 3" />
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
    patent: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3.5h8l3 3v14h-11z" />
        <path d="M14.5 3.5v4h4" />
        <path d="M9.5 10.5h5.5M9.5 14h5.5M9.5 17.5h4" />
      </svg>
    ),
    terminology: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14v16H5zM8 8h8M8 12h5M8 16h7" />
        <path d="M3 7h2M3 12h2M3 17h2" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="12" r="2" /><circle cx="17" cy="7" r="2" /><circle cx="17" cy="17" r="2" />
        <path d="M9 11l6-3M9 13l6 3" />
        <path d="M12 3v2M12 19v2M3 6l1.5 1M20 11h2" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
    molecule: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="8" r="2.2" />
        <circle cx="16.5" cy="6" r="2.2" />
        <circle cx="17" cy="16" r="2.2" />
        <circle cx="8" cy="17" r="2.2" />
        <path d="M9 8l5.3-1.4M8.5 10l-.3 4.8M10 16.7l4.8-.5M17 8.2v5.5" />
      </svg>
    ),
  };

  return icons[type] || icons.molecule;
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={`editorialLink ${inverse ? "inverse" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function Button({ href, children, primary = false }) {
  return (
    <a className={`button ${primary ? "buttonPrimary" : "buttonSecondary"}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = true, dark = false, className = "" }) {
  return (
    <div className={`sectionHeading ${centered ? "sectionHeadingCentered" : ""} ${dark ? "darkText" : ""} ${className}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrowDark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
    </div>
  );
}

function HeroArt() {
  return (
    <div className="heroArt" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="img">
        <rect x="108" y="44" width="354" height="430" rx="28" className="paper" />
        <path d="M375 44v86h87" className="lineDark" />
        <path d="M146 118h168M146 154h204M146 190h130" className="lineSoft" />
        <path d="M147 345h258M147 380h228M147 415h174" className="lineSoft" />

        <g transform="translate(162 228)">
          <polygon points="40,0 80,23 80,69 40,92 0,69 0,23" className="hex" />
          <path d="M80 23l43-25M80 69l46 24M0 23l-42-26M0 69l-40 23" className="lineDark" />
          <circle cx="127" cy="-1" r="11" className="nodeAccent" />
          <circle cx="130" cy="95" r="11" className="nodeGray" />
          <circle cx="-45" cy="-5" r="11" className="nodeGray" />
          <circle cx="-45" cy="95" r="11" className="nodeAccent" />
        </g>

        <g transform="translate(382 203)">
          <path d="M0 22h88" className="reaction" />
          <path d="M73 10l15 12-15 12" className="reaction" />
          <text x="10" y="2" className="svgLabel">R¹</text>
          <text x="105" y="29" className="svgLabelStrong">R²</text>
        </g>

        <g transform="translate(438 294)">
          <rect x="0" y="0" width="142" height="148" rx="24" className="miniPanel" />
          <text x="24" y="34" className="miniTitle">CLAIM 12</text>
          <path d="M24 57h92M24 80h72M24 103h85" className="lineSoft" />
          <rect x="24" y="119" width="64" height="8" rx="4" className="miniAccent" />
        </g>
      </svg>
    </div>
  );
}

function MarkushVisual() {
  return (
    <div className="markushVisual" aria-hidden="true">
      <div className="markushTop">Markush Structure Relationships</div>
      <svg viewBox="0 0 520 300">
        <polygon points="190,78 245,110 245,174 190,206 135,174 135,110" className="markushHex" />
        <path d="M245 110l72-42M245 174l72 42M135 110L63 68M135 174l-72 42" className="markushLine" />
        <circle cx="331" cy="60" r="31" className="markushNode" />
        <circle cx="334" cy="224" r="31" className="markushNodeAlt" />
        <circle cx="48" cy="60" r="31" className="markushNodeAlt" />
        <circle cx="48" cy="224" r="31" className="markushNode" />
        <text x="318" y="67" className="markushText">R¹</text>
        <text x="320" y="231" className="markushText">R²</text>
        <text x="35" y="67" className="markushText">R³</text>
        <text x="35" y="231" className="markushText">X</text>
        <path d="M378 143h92M450 130l20 13-20 13" className="markushAccent" />
      </svg>
      <div className="markushLegend">
        <span>Core structure</span>
        <span>Variable substituents</span>
        <span>Defined alternatives</span>
      </div>
    </div>
  );
}

export default function ChemicalPatentTranslationWireframe() {
  return (
    <div className="stepesPage">
      <style>{styles}</style>

      <main>
        <section className="hero section">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <h1>Chemical Patent Translation Services</h1>
              <p className="heroLead">
                Translate chemically complex inventions with the scientific expertise, patent-language precision, terminology control, and quality assurance required for high-value intellectual property.
              </p>
              <p className="heroBody">
                Stepes provides specialized chemical patent translation services for patent applications, claims, specifications, prior art, prosecution materials, and related IP content involving compounds, formulations, chemical processes, molecular structures, advanced materials, reaction chemistry, and other technically demanding inventions.
              </p>
              <div className="heroActions">
                <Button href="https://app.stepes.com/quote/" primary>Request a Chemical Patent Translation Quote</Button>
                <Button href="https://www.stepes.com/contact-sales/">Talk to a Patent Translation Specialist</Button>
              </div>
              <div className="heroAudience">
                <span>For patent counsel</span><span>IP teams</span><span>Chemical & materials companies</span><span>Pharmaceutical innovators</span><span>R&D organizations</span>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="section overviewSection">
          <div className="shell overviewGrid">
            <div className="stickyHeading">
              <h2>Chemical Patent Translation Requires Scientific and Patent-Language Precision</h2>
            </div>
            <div className="overviewBody">
              <p className="bodyLarge">
                Chemical patents operate at the intersection of chemistry, technical disclosure, and patent language. Translating them requires more than general language fluency or familiarity with legal documents. The translator must understand how chemical terminology, structures, formulas, experimental information, defined terms, and patent claims work together to describe an invention.
              </p>
              <p>
                A chemical patent may contain systematic and common chemical names, molecular formulas, variable substituents, reaction schemes, synthesis routes, catalysts, process conditions, stereochemical distinctions, concentration ranges, formulation data, experimental examples, and highly structured claim language. These elements often reference one another throughout the specification, claims, tables, figures, and examples.
              </p>
              <p>
                Stepes helps preserve these relationships across languages while maintaining terminology consistency and following project instructions provided by the client, patent counsel, or filing representative.
              </p>
              <div className="linkPair">
                <EditorialLink href="https://www.stepes.com/patent-translation-services/">Patent Translation Services</EditorialLink>
                <EditorialLink href="https://www.stepes.com/chemical-translation-services/">Chemical & Materials Translation Services</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="shell">
            <SectionHeading
              title="What Makes Chemical Patents Different"
              intro="Chemical inventions can encode important technical distinctions through terminology, formulas, structures, quantities, relationships, and experimental conditions. Effective translation must control both the language and the scientific information surrounding it."
            />
            <div className="differenceGrid">
              {whatMakesDifferent.map((item) => (
                <div className="differenceItem" key={item.title}>
                  <div className="iconBox"><ScienceIcon type={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section darkSection markushSection">
          <div className="shell splitFeature">
            <div className="darkCopy">
              <div className="eyebrow eyebrowDark">CHEMICAL CLAIM STRUCTURE</div>
              <h2>Preserve Meaning Across Chemical Claims, Structures, and Markush Definitions</h2>
              <p className="bodyLarge">
                Chemical patent claims can describe not only individual compounds but entire classes of related chemical structures. A Markush definition can use a common structural framework together with variable groups and alternative substituents to represent many possible compounds within a patent disclosure.
              </p>
              <p>
                The linguistic challenge is not simply translating isolated chemical terms. It is maintaining the relationships among the technical elements that define the invention, from core structures and variable substituents to ranges, embodiments, examples, and patent claims.
              </p>
              <div className="darkList">
                {["Core structures and formula references", "Variable substituents and defined alternatives", "Ranges, conditions, embodiments, and examples", "Defined terms, claim dependencies, and source-document relationships"].map(x => <div className="darkListRow" key={x}><span className="dash" />{x}</div>)}
              </div>
              <p className="legalNote darkLegal">
                Stepes provides translation and technical-linguistic support. Interpretation of legal claim scope, patentability, validity, enforceability, and filing strategy remains the responsibility of the client and its qualified patent counsel.
              </p>
            </div>
            <MarkushVisual />
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              title="Control Chemical Nomenclature and Structured Scientific Information"
              intro="Some information requires professional translation. Other information may need to remain unchanged, follow an established scientific convention, or be validated against the source and project instructions."
            />
            <div className="threePanel">
              <article>
                <div className="panelLabel">TRANSLATE WITH SCIENTIFIC CONTEXT</div>
                <h3>Language That Carries Technical Meaning</h3>
                <ul>
                  <li>Compound descriptions and chemical properties</li>
                  <li>Functional-group and process terminology</li>
                  <li>Synthesis methods and reaction descriptions</li>
                  <li>Formulations and experimental procedures</li>
                  <li>Embodiments, definitions, and patent claims</li>
                </ul>
              </article>
              <article>
                <div className="panelLabel">PRESERVE OR VALIDATE</div>
                <h3>Structured Scientific Information</h3>
                <ul>
                  <li>Molecular formulas and structure identifiers</li>
                  <li>CAS identifiers, InChI, InChIKey, and SMILES</li>
                  <li>Compound labels, symbols, and formula numbering</li>
                  <li>Units, concentrations, ratios, and numerical values</li>
                  <li>Figure, table, and cross-reference identifiers</li>
                </ul>
              </article>
              <article>
                <div className="panelLabel">MAINTAIN CONSISTENTLY</div>
                <h3>Terminology Across the Patent</h3>
                <ul>
                  <li>Defined compounds and substituent names</li>
                  <li>Chemical classes and process terminology</li>
                  <li>Formulation terminology and abbreviations</li>
                  <li>Applicant-preferred terminology</li>
                  <li>Patent-family and previously approved language</li>
                </ul>
              </article>
            </div>
            <div className="centerLinks">
              <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
              <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section blushSection">
          <div className="shell">
            <SectionHeading title="Chemical Patent Expertise Across Specialized Fields" intro="A patent describing a novel pharmaceutical compound presents different linguistic and scientific challenges from one covering an industrial catalyst, battery electrolyte, polymer formulation, or specialty coating." />
            <div className="expertiseGrid">
              {expertise.map((item) => (
                <article className="expertiseItem" key={item.title}>
                  <div className="expertiseRule" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.link ? <EditorialLink href={item.link[1]}>{item.link[0]}</EditorialLink> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell editorialSection">
            <div className="editorialIntro">
              <h2>Chemical Patent Documents and Technical Content We Translate</h2>
              <p>Chemical intellectual property can appear across patent applications, prosecution records, research materials, technical publications, and related legal documents. Stepes supports individual documents as well as coordinated multilingual patent families and ongoing IP translation programs.</p>
              <EditorialLink href="https://www.stepes.com/patent-translation-services/">Explore Broader Patent Translation Services</EditorialLink>
            </div>
            <div className="editorialRows">
              {documentGroups.map((item) => (
                <div className="editorialRow" key={item.title}>
                  <div className="iconBox small"><ScienceIcon type={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="shell">
            <SectionHeading title="Match Chemical Patent Translation to Its Intended Use" intro="A chemical patent translation should be designed around how the translated content will be used. Stepes aligns translation technology, human expertise, review depth, terminology controls, and QA with the project's intended use." />
            <div className="useGrid">
              {intendedUse.map((item) => (
                <article className="useItem" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="centerAction"><Button href="https://app.stepes.com/quote/" primary>Discuss a Chemical Patent Project</Button></div>
          </div>
        </section>

        <section className="section priorArtSection">
          <div className="shell priorArtGrid">
            <div className="priorArtIntro">
              <h2>Chemical Prior-Art Translation for Research and IP Decisions</h2>
              <p className="bodyLarge">Chemical prior art can be particularly challenging to evaluate across languages because relevant information may not appear only as ordinary keywords.</p>
              <p>A foreign patent may disclose an important compound through a systematic name, synonym, molecular structure, variable definition, synthesis example, formulation, Markush group, technical description, or patent claim.</p>
              <p>Stepes supports chemical prior-art translation from rapid screening through complete professional translation, allowing researchers, patent professionals, and R&D teams to apply deeper resources where the information matters most.</p>
              <EditorialLink href="https://www.stepes.com/patent-translation-services/">Patent Translation Services</EditorialLink>
            </div>
            <div className="priorArtRows">
              {priorArtModes.map(([title, desc]) => (
                <div className="priorArtRow" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section familySection">
          <div className="shell familyGrid">
            <div className="familyFlow" aria-hidden="true">
              <div className="panelLabel familyLabel">PATENT-FAMILY LANGUAGE REUSE</div>
              <div className="familyNode primaryNode">Source / Priority Filing</div>
              <div className="flowLine" />
              <div className="familyNode">PCT or Related Filing</div>
              <div className="flowLine" />
              <div className="familyBranches">
                <div className="familyNode compact">National / Regional Filings</div>
                <div className="familyNode compact">Continuations / Related Applications</div>
              </div>
              <div className="familyAsset">Shared terminology + translation memory + approved references</div>
            </div>
            <div className="familyCopy">
              <h2>Maintain Chemical Terminology Across Patent Families</h2>
              <p className="bodyLarge">Patent families can extend the same invention across multiple applications, jurisdictions, languages, amendments, and stages of prosecution. For chemically complex inventions, inconsistent terminology across related documents can make review more difficult and create unnecessary rework.</p>
              <div className="quietRows">
                <div><h3>Preserve Established Chemical Terminology</h3><p>Maintain compound names, substituent terminology, reaction terminology, defined chemical groups, material names, process terms, formulations, abbreviations, and recurring claim language.</p></div>
                <div><h3>Reuse Validated Patent Content</h3><p>Translation memory can identify identical or similar content from previously translated family documents for appropriate reuse or contextual professional review.</p></div>
                <div><h3>Apply Client and Counsel References</h3><p>Incorporate existing translations, glossaries, related applications, inventor terminology, attorney instructions, and reviewer feedback.</p></div>
                <div><h3>Focus Review on What Changed</h3><p>Language technology can help identify reusable material so translators and reviewers focus greater attention on new, changed, or chemically significant content.</p></div>
              </div>
              <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section darkSection aiSection">
          <div className="shell">
            <SectionHeading eyebrow="AI + HUMAN" title="AI-Assisted Chemical Patent Translation With Human Scientific Review" intro="The right question is not whether to use AI or human translation. It is where automation creates useful efficiency and where scientific and linguistic judgment require professional human control." dark />
            <div className="aiSplit">
              <article>
                <div className="aiTag">AI-SUPPORTED USES</div>
                <h3>Accelerate Suitable Research and Repetitive Work</h3>
                <ul>
                  <li>Foreign patent screening and research comprehension</li>
                  <li>Large-document triage and terminology extraction</li>
                  <li>Repetitive patent-family content and version comparison</li>
                  <li>Recurring technical descriptions</li>
                  <li>Automated completeness and terminology checks</li>
                </ul>
              </article>
              <article>
                <div className="aiTag">HUMAN SCIENTIFIC CONTROL</div>
                <h3>Increase Review Where Chemistry and Risk Demand It</h3>
                <ul>
                  <li>Filing-grade chemical claims and prosecution materials</li>
                  <li>Novel compound terminology and Markush definitions</li>
                  <li>Stereochemical distinctions and substituent relationships</li>
                  <li>Critical numerical ranges and synthesis descriptions</li>
                  <li>Decision-critical prior art and evidentiary content</li>
                </ul>
              </article>
            </div>
            <div className="aiFooter">
              <p><strong>Controlled AI, not raw output.</strong> Stepes can combine approved terminology, translation memory, protected technical elements, qualified human review, and automated QA according to project requirements.</p>
              <EditorialLink inverse href="https://www.stepes.com/ai-enabled-legal-translation-services/">AI-Enabled Legal Translation Services</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section workflowSection">
          <div className="shell">
            <SectionHeading centered={false} title="A Quality Workflow for Chemically Complex Patent Content" intro="Stepes configures each workflow according to the document, languages, subject matter, intended use, deadline, reference materials, and review requirements." />
            <div className="workflow">
              {workflow.map(([title, desc], i) => (
                <div className="workflowStep" key={title}>
                  <div className="stepNumber">{String(i + 1).padStart(2, "0")}</div>
                  <div className="stepContent"><h3>{title}</h3><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="legalNote">
              <strong>Important:</strong> Patent-office requirements, filing practices, deadlines, and legal requirements vary by jurisdiction. Stepes provides translation and linguistic/technical quality support and does not provide patent filing or legal advice. Jurisdiction-specific legal review, claim strategy, filing requirements, and final submission decisions remain with the client and its patent counsel or filing representative.
            </div>
          </div>
        </section>

        <section className="section securitySection">
          <div className="shell securityPanel">
            <div className="securityIntro">
              <div className="iconBox securityIcon"><ScienceIcon type="shield" /></div>
              <h2>Protect Confidential Chemical Inventions Before Publication</h2>
              <p>Unpublished patent applications, invention disclosures, novel compounds, formulations, synthesis routes, experimental results, process parameters, and materials research can represent substantial intellectual property and commercial value.</p>
              <EditorialLink href="https://www.stepes.com/security/">Translation Security</EditorialLink>
            </div>
            <div className="securityMatrix">
              <div><h3>Controlled Project Access</h3><p>Limit project files and instructions to authorized participants involved in the approved workflow.</p></div>
              <div><h3>Confidential Professional Linguists</h3><p>Translation and review resources work within managed project environments and applicable confidentiality requirements.</p></div>
              <div><h3>Secure File Handling</h3><p>Source files, translated content, references, review materials, and final deliverables move through controlled project workflows.</p></div>
              <div><h3>Governed AI Use</h3><p>Configure translation technology and human review according to project confidentiality, content sensitivity, quality requirements, and client instructions.</p></div>
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="shell">
            <SectionHeading title="Global Chemical Patent Translation Across Key Filing Languages" intro="Chemical innovation is global. Stepes supports chemical patent translation across more than 100 languages, with coordinated terminology, translation memory, project instructions, and quality workflows for multilingual patent programs." />
            <div className="languageGrid">
              {patentLanguages.map(([title, desc, href]) => (
                <article className="languageItem" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <EditorialLink href={href}>Explore {title.replace(" Services", "")}</EditorialLink>
                </article>
              ))}
            </div>
            <div className="guideBand">
              <div>
                <h3>PCT Patent Translation and National Phase Guide</h3>
                <p>Review broader guidance on international patent translation and national-phase considerations. Patent-office translation requirements vary by jurisdiction, so clients should confirm applicable filing requirements and deadlines with qualified patent counsel or their filing representative.</p>
              </div>
              <EditorialLink href="https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/">PCT Patent Translation and National Phase Guide</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading title="Why Chemical and IP Teams Choose Stepes" intro="Chemical patent translation demands more than accurate sentences. Organizations need a translation partner that can connect scientific expertise, patent-document experience, terminology control, modern language technology, quality assurance, and secure multilingual operations." />
            <div className="whyGrid">
              {whyStepes.map((item) => (
                <div className="whyItem" key={item.title}>
                  <div className="whyIcon"><ScienceIcon type={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section relatedSection">
          <div className="shell">
            <SectionHeading eyebrow="RELATED EXPERTISE" title="One Translation Partner Across Patent, Chemical, and Technical Content" intro="The same innovation can generate R&D reports, technical specifications, regulatory documentation, manufacturing content, legal agreements, product information, and additional patent-family materials." />
            <div className="relatedRows">
              {related.map(([title, desc, href]) => (
                <div className="relatedRow" key={title}>
                  <div><h3>{title}</h3><p>{desc}</p></div>
                  <EditorialLink href={href}>Explore {title}</EditorialLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="shell faqShell">
            <div className="faqIntro">
              <h2>Chemical Patent Translation Services FAQs</h2>
              <p>Answers to common questions about chemical patent documents, scientific terminology, prior art, AI-assisted workflows, PCT-related translation, and patent-family consistency.</p>
            </div>
            <div className="faqPanel">
              {faqs.map(([q, a], i) => (
                <details key={q} open={i === 0}>
                  <summary><span>{q}</span><span className="plus" aria-hidden="true">+</span></summary>
                  <div className="faqAnswer"><p>{a}</p>{q.includes("pharmaceutical") ? <EditorialLink href="https://www.stepes.com/pharmaceutical-translation-services/">Pharmaceutical Translation Services</EditorialLink> : null}{q.includes("PCT") ? <EditorialLink href="https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/">PCT Patent Translation and National Phase Guide</EditorialLink> : null}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section finalCtaSection">
          <div className="shell finalCta">
            <div>
              <h2>Translate Complex Chemical Patents With Scientific Precision</h2>
              <p>From novel compounds and Markush definitions to synthesis processes, formulations, advanced materials, chemical claims, and foreign prior art, Stepes combines chemistry expertise, patent translation experience, terminology control, modern language technology, and professional human review to support complex multilingual intellectual property.</p>
            </div>
            <div className="finalActions">
              <Button href="https://app.stepes.com/quote/" primary>Request a Chemical Patent Translation Quote</Button>
              <Button href="https://www.stepes.com/contact-sales/">Talk to a Patent Translation Specialist</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-deep: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #17161A;
    --body: #3C3940;
    --muted: #68646D;
    --line: #E4E0E5;
    --soft: #F7F6F8;
    --dark: #18171B;
    --dark-soft: #252329;
    --white: #FFFFFF;
    --radius-lg: 30px;
    --radius-md: 22px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepesPage {
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--body);
    background: #fff;
    overflow-x: hidden;
  }
  .stepesPage a { color: inherit; }
  .stepesPage h1, .stepesPage h2, .stepesPage h3, .stepesPage p { margin-top: 0; }
  .stepesPage h1, .stepesPage h2, .stepesPage h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
  .stepesPage h1 { font-size: 48px; line-height: 1.06; margin-bottom: 24px; max-width: 690px; }
  .stepesPage h2 { font-size: 36px; line-height: 1.12; margin-bottom: 22px; }
  .stepesPage h3 { font-size: 24px; line-height: 1.22; margin-bottom: 12px; }
  .stepesPage p, .stepesPage li { font-size: 16px; line-height: 1.68; font-weight: 400; overflow-wrap: break-word; }
  .stepesPage p { margin-bottom: 18px; }
  .bodyLarge { font-size: 18px !important; line-height: 1.65 !important; color: #2E2B31; }

  .shell { width: 100%; max-width: 1280px; padding-left: 40px; padding-right: 40px; margin: 0 auto; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  .softSection { background: var(--soft); }
  .blushSection { background: var(--blush); }
  .darkSection { background: var(--dark); color: #E9E6EB; }
  .darkSection h2, .darkSection h3, .darkSection p { color: inherit; }

  .eyebrow { color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; }
  .eyebrowDark { color: var(--pink-light) !important; }

  .sectionHeading { max-width: 820px; margin-bottom: 54px; }
  .sectionHeadingCentered { text-align: center; margin-left: auto; margin-right: auto; }
  .sectionHeading h2 { margin-bottom: 18px; }
  .sectionIntro { font-size: 18px !important; line-height: 1.65 !important; color: #55515A; max-width: 810px; margin: 0 auto; }
  .darkText .sectionIntro { color: #CFCAD3; }

  .hero { padding-top: 104px; padding-bottom: 104px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFAFB 100%); }
  .heroGrid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(390px, .96fr); gap: 68px; align-items: center; }
  .heroLead { font-size: 20px !important; line-height: 1.55 !important; color: #302D33; max-width: 690px; margin-bottom: 18px !important; }
  .heroBody { font-size: 17px !important; line-height: 1.68 !important; max-width: 700px; color: #55515A; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .button { min-height: 48px; padding: 13px 21px; border-radius: 999px; display: inline-flex; gap: 8px; align-items: center; justify-content: center; font-size: 16px; line-height: 1.2; font-weight: 600; text-decoration: none; border: 1px solid #D9D4DA; transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease; }
  .button:hover { transform: translateY(-1px); border-color: #BEB8C0; }
  .button:focus-visible, .editorialLink:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
  .buttonPrimary, .buttonPrimary:visited, .buttonPrimary:hover, .buttonPrimary:active, .buttonPrimary:focus, .buttonPrimary:focus-visible { background: var(--magenta); color: #fff !important; border-color: var(--magenta); }
  .buttonPrimary:hover { background: var(--magenta-deep); box-shadow: 0 10px 22px rgba(167,25,84,.16); }
  .buttonPrimary *, .buttonPrimary svg, .buttonPrimary svg path { color: #fff !important; stroke: #fff !important; }
  .buttonSecondary { background: #fff; color: #201D22; }
  .arrowIcon { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: 0 0 auto; }
  .heroAudience { margin-top: 32px; padding-top: 22px; border-top: 1px solid var(--line); display: flex; gap: 10px 18px; flex-wrap: wrap; color: #625E66; }
  .heroAudience span { font-size: 16px; line-height: 1.45; }
  .heroAudience span:not(:last-child)::after { content: ""; display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: #C7C1C8; margin-left: 18px; vertical-align: middle; }

  .heroArt { min-height: 500px; display: flex; align-items: center; justify-content: center; }
  .heroArt svg { width: 100%; height: auto; max-width: 610px; overflow: visible; }
  .paper { fill: #fff; stroke: #BEB9C1; stroke-width: 2; }
  .lineDark { fill: none; stroke: #5D5961; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  .lineSoft { fill: none; stroke: #AAA5AD; stroke-width: 2; stroke-linecap: round; }
  .hex { fill: #F7F5F7; stroke: #5C5860; stroke-width: 2.2; }
  .nodeAccent { fill: var(--magenta); }
  .nodeGray { fill: #77727B; }
  .reaction { fill: none; stroke: var(--magenta); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
  .svgLabel { font: 600 17px Inter, sans-serif; fill: #66616A; }
  .svgLabelStrong { font: 600 18px Inter, sans-serif; fill: var(--magenta); }
  .miniPanel { fill: #F9F7F9; stroke: #D2CDD4; stroke-width: 1.5; }
  .miniTitle { font: 600 11px Inter, sans-serif; fill: var(--magenta); letter-spacing: .12em; }
  .miniAccent { fill: var(--magenta); }

  .overviewSection { padding-top: 104px; padding-bottom: 104px; }
  .overviewGrid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 88px; align-items: start; }
  .stickyHeading h2 { max-width: 500px; }
  .overviewBody { max-width: 760px; }
  .linkPair, .centerLinks { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 28px; }
  .editorialLink { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; color: var(--magenta) !important; font-size: 16px; line-height: 1.4; font-weight: 600; text-decoration: none; }
  .editorialLink:hover span { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }
  .editorialLink:hover .arrowIcon { transform: translateX(2px); }
  .editorialLink .arrowIcon { transition: transform .18s ease; }
  .editorialLink.inverse { color: #F6C6DA !important; }

  .differenceGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); background: #fff; border-radius: var(--radius-lg); overflow: hidden; }
  .differenceItem { padding: 32px 30px 34px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: flex; gap: 18px; align-items: flex-start; min-height: 230px; }
  .differenceItem h3 { margin-top: 1px; }
  .differenceItem p { margin-bottom: 0; }
  .iconBox { width: 46px; height: 46px; border-radius: 16px; background: var(--blush); display: grid; place-items: center; flex: 0 0 auto; }
  .iconBox svg { width: 23px; height: 23px; fill: none; stroke: var(--magenta); stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
  .iconBox.small { width: 42px; height: 42px; border-radius: 14px; }

  .markushSection { padding-top: 104px; padding-bottom: 104px; }
  .splitFeature { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(400px, .95fr); gap: 72px; align-items: center; }
  .darkCopy h2 { max-width: 660px; }
  .darkCopy p { max-width: 690px; color: #CEC9D1; }
  .darkList { margin: 28px 0 28px; display: grid; gap: 10px; }
  .darkListRow { display: flex; gap: 12px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: #E7E3E9; }
  .dash { width: 16px; height: 2px; background: var(--pink-light); margin-top: .72em; flex: 0 0 auto; }
  .legalNote { font-size: 16px; line-height: 1.6; padding: 22px 24px; background: #F7F5F7; border-radius: 18px; border: 1px solid var(--line); color: #4F4B53; margin-top: 34px; }
  .darkLegal { background: #232126; border-color: #39363D; color: #C7C2C9 !important; }
  .markushVisual { background: #222126; border: 1px solid #38353B; border-radius: var(--radius-lg); padding: 28px 26px; box-shadow: 0 22px 48px rgba(0,0,0,.18); }
  .markushTop { color: var(--pink-light); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 16px; }
  .markushVisual svg { width: 100%; height: auto; }
  .markushHex { fill: #2F2C32; stroke: #D7D1D9; stroke-width: 2; }
  .markushLine { fill: none; stroke: #A9A3AD; stroke-width: 2; stroke-linecap: round; }
  .markushNode { fill: var(--magenta); }
  .markushNodeAlt { fill: #5A5660; }
  .markushText { font: 600 18px Inter, sans-serif; fill: #fff; text-anchor: middle; }
  .markushAccent { fill: none; stroke: var(--pink-light); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
  .markushLegend { display: flex; flex-wrap: wrap; gap: 10px; }
  .markushLegend span { font-size: 16px; line-height: 1.35; color: #C9C4CC; padding: 7px 10px; border: 1px solid #3B3840; border-radius: 999px; }

  .threePanel { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
  .threePanel article { padding: 34px; background: #fff; }
  .threePanel article + article { border-left: 1px solid var(--line); }
  .panelLabel, .aiTag { color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 16px; }

  .threePanel ul, .aiSplit ul { padding-left: 0; margin: 22px 0 0; list-style: none; }
  .threePanel li, .aiSplit li { position: relative; padding: 11px 0 11px 22px; border-top: 1px solid #EEEAEF; }
  .threePanel li::before, .aiSplit li::before { content: ""; position: absolute; left: 0; top: 1.15em; width: 10px; height: 2px; background: var(--magenta); }
  .centerLinks { justify-content: center; margin-top: 34px; }

  .expertiseGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 54px; }
  .expertiseItem { padding: 30px 0 34px; border-top: 1px solid #E6DCE1; position: relative; }
  .expertiseRule { width: 34px; height: 3px; background: var(--magenta); margin-bottom: 19px; }

  .expertiseItem p { max-width: 520px; }
  .expertiseItem:last-child { grid-column: 1 / -1; }
  .expertiseItem:last-child p { max-width: 820px; }

  .editorialSection { display: grid; grid-template-columns: .72fr 1.28fr; gap: 84px; align-items: start; }
  .editorialIntro p { max-width: 470px; }
  .editorialRows { border-top: 1px solid var(--line); }
  .editorialRow { display: grid; grid-template-columns: 46px 1fr; gap: 18px; padding: 27px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .editorialRow h3 { margin-bottom: 8px; }
  .editorialRow p { margin-bottom: 0; }

  .useGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .useItem { padding: 30px 28px 32px; }
  .useItem + .useItem { border-left: 1px solid var(--line); }

  .centerAction { display: flex; justify-content: center; margin-top: 40px; }

  .priorArtGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 84px; }
  .priorArtIntro { max-width: 530px; }
  .priorArtRows { border-top: 1px solid var(--line); }
  .priorArtRow { padding: 24px 0 26px; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 220px 1fr; gap: 28px; }
  .priorArtRow h3 { margin-bottom: 0; }
  .priorArtRow p { margin-bottom: 0; }

  .familySection { background: #FBFAFB; }
  .familyGrid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 84px; align-items: center; }
  .familyFlow { padding: 38px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); }
  .familyLabel { text-align: center; margin-bottom: 20px; }
  .familyNode { padding: 18px 20px; border: 1px solid #D8D2DA; border-radius: 16px; background: #fff; color: #363239; font-size: 16px; font-weight: 600; text-align: center; }
  .primaryNode { background: var(--blush); border-color: #EEC8D8; color: #6C173D; }
  .flowLine { height: 30px; width: 1px; background: #CAC4CC; margin: 0 auto; }
  .familyBranches { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; position: relative; }
  .familyNode.compact { min-height: 76px; display: grid; place-items: center; }
  .familyAsset { margin-top: 26px; background: #242127; color: #F1EDF2; padding: 18px 20px; border-radius: 16px; font-size: 16px; line-height: 1.5; text-align: center; }
  .familyCopy { max-width: 650px; }
  .quietRows { border-top: 1px solid var(--line); margin-top: 26px; }
  .quietRows > div { padding: 20px 0; border-bottom: 1px solid var(--line); }
  .quietRows h3 { margin-bottom: 6px; }
  .quietRows p { margin-bottom: 0; }

  .aiSection { padding-top: 104px; padding-bottom: 104px; }
  .aiSplit { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #3A373D; border-radius: var(--radius-lg); overflow: hidden; margin-top: 12px; }
  .aiSplit article { padding: 38px; background: #201E23; }
  .aiSplit article + article { border-left: 1px solid #3A373D; }
  .aiTag { color: var(--pink-light); }
  .aiSplit h3 { color: #fff; }
  .aiSplit li { color: #D7D2DA; border-top-color: #39363D; }
  .aiSplit li::before { background: var(--pink-light); }
  .aiFooter { margin-top: 28px; display: flex; justify-content: space-between; gap: 32px; align-items: center; }
  .aiFooter p { color: #CFCAD3; max-width: 780px; margin-bottom: 0; }

  .workflow { border-top: 1px solid var(--line); }
  .workflowStep { display: grid; grid-template-columns: 80px 1fr; gap: 34px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .stepNumber { font-size: 18px; line-height: 1.4; font-weight: 600; color: var(--magenta); padding-top: 3px; }

  .stepContent p { max-width: 890px; margin-bottom: 0; }

  .securitySection { padding-top: 88px; padding-bottom: 88px; background: #fff; }
  .securityPanel { display: grid; grid-template-columns: .82fr 1.18fr; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; padding-left: 0; padding-right: 0; }
  .securityIntro { padding: 46px; background: var(--blush); }

  .securityIcon { margin-bottom: 24px; background: #fff; }
  .securityMatrix { display: grid; grid-template-columns: 1fr 1fr; }
  .securityMatrix > div { padding: 34px; border-left: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .securityMatrix > div:nth-last-child(-n+2) { border-bottom: 0; }

  .securityMatrix p { margin-bottom: 0; }

  .languageGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 48px; border-top: 1px solid var(--line); }
  .languageItem { padding: 28px 0 30px; border-bottom: 1px solid var(--line); }

  .guideBand { margin-top: 40px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 30px 32px; display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center; }

  .guideBand p { margin-bottom: 0; max-width: 820px; }

  .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .whyItem { padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-md); background: #fff; }
  .whyIcon { width: 32px; height: 32px; margin-bottom: 20px; }
  .whyIcon svg { width: 100%; height: 100%; fill: none; stroke: var(--magenta); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

  .whyItem p { margin-bottom: 0; }

  .relatedSection { background: #FAF9FA; }
  .relatedRows { border-top: 1px solid var(--line); }
  .relatedRow { display: grid; grid-template-columns: minmax(0, 1fr) 290px; gap: 46px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--line); }
  .relatedRow h3 { margin-bottom: 6px; }
  .relatedRow p { max-width: 820px; margin-bottom: 0; }
  .relatedRow .editorialLink { justify-self: end; text-align: right; }

  .faqShell { display: grid; grid-template-columns: .65fr 1.35fr; gap: 76px; align-items: start; }
  .faqIntro p { max-width: 390px; }
  .faqPanel { border-top: 1px solid var(--line); }
  .faqPanel details { border-bottom: 1px solid var(--line); }
  .faqPanel summary { list-style: none; cursor: pointer; min-height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 21px 0; color: var(--ink); font-size: 18px; line-height: 1.4; font-weight: 600; }
  .faqPanel summary::-webkit-details-marker { display: none; }
  .plus { color: var(--magenta); font-size: 28px; line-height: 1; font-weight: 400; transition: transform .18s ease; }
  .faqPanel details[open] .plus { transform: rotate(45deg); }
  .faqAnswer { padding: 0 48px 24px 0; max-width: 840px; }
  .faqAnswer p { font-size: 16px; line-height: 1.68; }

  .finalCtaSection { padding-top: 88px; padding-bottom: 88px; background: #fff; }
  .finalCta { background: var(--blush); border: 1px solid #ECD6E0; border-radius: var(--radius-lg); padding-top: 54px; padding-bottom: 54px; display: grid; grid-template-columns: 1.22fr .78fr; gap: 56px; align-items: center; }
  .finalCta h2 { max-width: 670px; margin-bottom: 16px; }
  .finalCta p { max-width: 720px; margin-bottom: 0; font-size: 17px; }
  .finalActions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
  .finalActions .button { width: 100%; }

  @media (min-width: 1440px) {
    .shell { padding-left: 56px; padding-right: 56px; }
  }

  @media (max-width: 1020px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding-top: 82px; padding-bottom: 82px; }
    .hero { padding-top: 88px; padding-bottom: 88px; }
    .stepesPage h1 { font-size: 42px; }
    .stepesPage h2 { font-size: 32px; }
    .stepesPage h3 { font-size: 22px; }
    .heroGrid { grid-template-columns: 1fr 1fr; gap: 36px; }
    .heroArt { min-height: 420px; }
    .overviewGrid, .priorArtGrid, .familyGrid, .securityPanel, .faqShell { gap: 44px; }
    .differenceGrid { grid-template-columns: repeat(2, 1fr); }
    .splitFeature { grid-template-columns: 1fr 1fr; gap: 36px; }
    .threePanel article { padding: 28px; }
    .expertiseGrid { gap: 0 36px; }
    .editorialSection { gap: 48px; }
    .useGrid { grid-template-columns: repeat(2, 1fr); }
    .useItem:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .useItem:nth-child(4) { border-top: 1px solid var(--line); }
    .priorArtRow { grid-template-columns: 180px 1fr; }
    .whyGrid { grid-template-columns: repeat(2, 1fr); }
    .finalCta { grid-template-columns: 1fr; gap: 32px; }
    .finalActions { flex-direction: row; }
  }

  @media (max-width: 820px) {
    .section { padding-top: 72px; padding-bottom: 72px; }
    .heroGrid, .overviewGrid, .splitFeature, .editorialSection, .priorArtGrid, .familyGrid, .securityPanel, .faqShell { grid-template-columns: 1fr; }
    .heroGrid { gap: 38px; }
    .heroCopy { text-align: center; }
    .heroCopy h1, .heroLead, .heroBody { margin-left: auto; margin-right: auto; }
    .heroActions, .heroAudience { justify-content: center; }
    .heroArt { min-height: 0; max-width: 580px; margin: 0 auto; }
    .overviewGrid { gap: 28px; }
    .stickyHeading { text-align: left; }
    .stickyHeading h2 { margin-left: 0; margin-right: 0; max-width: 700px; }
    .overviewBody { max-width: 760px; }
    .sectionHeadingCentered { text-align: center; }
    .differenceGrid { grid-template-columns: 1fr 1fr; }
    .splitFeature { gap: 42px; }
    .markushVisual { max-width: 650px; width: 100%; margin: 0 auto; }
    .threePanel { grid-template-columns: 1fr; }
    .threePanel article + article { border-left: 0; border-top: 1px solid var(--line); }
    .expertiseGrid { grid-template-columns: 1fr; }
    .expertiseItem:last-child { grid-column: auto; }
    .editorialIntro { text-align: left; max-width: 760px; margin: 0; }
    .editorialIntro p { margin-left: 0; margin-right: 0; max-width: 700px; }
    .editorialIntro .editorialLink { margin-bottom: 18px; }
    .useGrid { grid-template-columns: 1fr 1fr; }
    .priorArtIntro { max-width: 760px; margin: 0 0 10px; }
    .priorArtIntro h2 { text-align: left; }
    .familyFlow { max-width: 650px; width: 100%; margin: 0 auto; }
    .familyCopy h2 { text-align: left; }
    .familyCopy { max-width: 760px; margin: 0; }
    .aiSplit { grid-template-columns: 1fr; }
    .aiSplit article + article { border-left: 0; border-top: 1px solid #3A373D; }
    .aiFooter { align-items: flex-start; flex-direction: column; }
    .securityPanel { padding-left: 0; padding-right: 0; }
    .securityIntro { text-align: left; }
    .securityIntro .iconBox { margin-left: 0; margin-right: 0; }
    .securityMatrix > div:first-child, .securityMatrix > div:nth-child(3) { border-left: 0; }
    .languageGrid, .whyGrid { grid-template-columns: 1fr 1fr; }
    .guideBand { grid-template-columns: 1fr; gap: 14px; }
    .guideBand .editorialLink { justify-self: start; text-align: left; }
    .relatedRow { grid-template-columns: 1fr; gap: 12px; }
    .relatedRow .editorialLink { justify-self: start; text-align: left; }
    .faqIntro { text-align: left; max-width: 700px; }
    .faqIntro p { max-width: 700px; }
    .finalCta { text-align: center; }
    .finalCta p { margin-left: auto; margin-right: auto; }
  }

  @media (max-width: 560px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding-top: 68px; padding-bottom: 68px; }
    .hero { padding-top: 72px; padding-bottom: 72px; }
    .stepesPage h1 { font-size: 38px; line-height: 1.08; }
    .stepesPage h2 { font-size: 30px; line-height: 1.15; }
    .stepesPage h3 { font-size: 20px; }
    .heroLead { font-size: 18px !important; }
    .heroBody { font-size: 16px !important; }
    .heroActions { flex-direction: column; width: 100%; }
    .heroActions .button { width: 100%; }
    .heroAudience { display: grid; gap: 8px; text-align: center; }
    .heroAudience span::after { display: none !important; }
    .heroArt { width: calc(100% + 8px); margin-left: -4px; }
    .sectionHeading { margin-bottom: 38px; }
    .sectionIntro { font-size: 17px !important; }
    .differenceGrid { grid-template-columns: 1fr; }
    .differenceItem { min-height: 0; padding: 27px 24px; }
    .darkCopy .eyebrow, .darkCopy h2 { text-align: left; }
    .markushVisual { padding: 22px 18px; }
    .markushLegend { display: grid; grid-template-columns: 1fr; }
    .threePanel article { padding: 26px 24px; }
    .centerLinks { justify-content: flex-start; flex-direction: column; gap: 4px; }
    .expertiseItem { padding: 26px 0 30px; }
    .editorialIntro { text-align: left; }
    .editorialRow { grid-template-columns: 42px 1fr; gap: 14px; }
    .useGrid { grid-template-columns: 1fr; }
    .useItem { padding: 26px 0; }
    .useItem + .useItem, .useItem:nth-child(3), .useItem:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
    .centerAction .button { width: 100%; }
    .priorArtIntro h2 { text-align: left; }
    .priorArtRow { grid-template-columns: 1fr; gap: 6px; padding: 22px 0; }
    .familyFlow { padding: 24px 20px; }
    .familyBranches { grid-template-columns: 1fr; }
    .familyCopy h2 { text-align: left; }
    .aiSplit article { padding: 28px 24px; }
    .workflowStep { grid-template-columns: 48px 1fr; gap: 18px; padding: 25px 0; }
    .stepNumber { font-size: 16px; }
    .legalNote { padding: 20px; }
    .securityIntro { padding: 32px 24px; }
    .securityIntro h2 { font-size: 30px; }
    .securityMatrix { grid-template-columns: 1fr; }
    .securityMatrix > div { border-left: 0; border-bottom: 1px solid var(--line) !important; padding: 26px 24px; }
    .securityMatrix > div:last-child { border-bottom: 0 !important; }
    .languageGrid, .whyGrid { grid-template-columns: 1fr; }
    .guideBand { grid-template-columns: 1fr; gap: 12px; padding: 26px 22px; }
    .whyItem { padding: 26px 24px; }
    .relatedRow { padding: 24px 0; }
    .faqPanel summary { font-size: 17px; align-items: flex-start; padding: 20px 0; }
    .faqAnswer { padding-right: 0; }
    .finalCtaSection { padding-top: 64px; padding-bottom: 64px; }
    .finalCta { padding: 40px 22px; }
    .finalActions { flex-direction: column; }
    .finalActions .button { width: 100%; }
  }

  @media (max-width: 340px) {
    .stepesPage h2 { font-size: 30px; }
    .button { padding-left: 16px; padding-right: 16px; }
    .differenceItem { gap: 14px; }
    .editorialRow { grid-template-columns: 1fr; }
    .editorialRow .iconBox { margin-bottom: 4px; }
    .workflowStep { grid-template-columns: 1fr; gap: 8px; }
  }
`;
