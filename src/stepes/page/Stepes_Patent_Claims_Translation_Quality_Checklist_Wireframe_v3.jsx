import React, { useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  blush: "#FDF2F7",
  blushStrong: "#F6DFE9",
  dark: "#121826",
  text: "#121826",
  muted: "#596579",
  line: "#E3E7EE",
  soft: "#F6F8FB",
  eyebrowDark: "#F2A7C6",
};

const canonicalUrl =
  "https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;
const patentServiceUrl = "https://www.stepes.com/patent-translation-services/";
const quoteUrl = "https://app.stepes.com/quote/";

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Translation Guides",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
  { label: "Patent Claims Translation Quality Checklist", current: true },
];

const tocItems = [
  { id: "why-claims-need-qa", label: "Why Claims Need Specialized QA" },
  { id: "what-to-review", label: "What the Checklist Covers" },
  { id: "how-to-use", label: "How to Use the Checklist" },
  { id: "checklist", label: "12-Point Quality Checklist" },
  { id: "qa-matrix", label: "Patent Claims QA Matrix" },
  { id: "findings", label: "Findings That Deserve Review" },
  { id: "automated-qa", label: "Automated QA and Human Review" },
  { id: "review-layers", label: "Three Layers of Review" },
  { id: "final-five", label: "Final Five Checks" },
  { id: "print-checklist", label: "Download or Print the Checklist" },
  { id: "faq", label: "FAQ" },
  { id: "sources", label: "Sources and References" },
];

const coverage = [
  ["01", "Completeness", "Claims, clauses, limitations, and required source content"],
  ["02", "Claim Structure", "Claim numbering, order, and independent/dependent status"],
  ["03", "Dependencies", "Parent claims, dependency chains, and multiple references"],
  ["04", "Terminology", "Defined terms, technical concepts, and controlled repetition"],
  ["05", "References", "Introduced elements, antecedents, and referential clarity"],
  ["06", "Limitations", "Modifiers, conditions, negation, and logical relationships"],
  ["07", "Numbers & Units", "Values, ranges, operators, units, formulas, and notation"],
  ["08", "Alternatives", "Enumerations, lists, conjunctions, and grouped options"],
  ["09", "Drawings", "Reference signs, figures, labels, and component alignment"],
  ["10", "Specification", "Terminology and technical consistency across sections"],
  ["11", "Technical Meaning", "Subject-matter terminology and technical relationships"],
  ["12", "Final File", "Version, formatting, numbering, symbols, and delivery integrity"],
];

const checklistGroups = [
  {
    number: "01",
    id: "completeness",
    title: "Verify Claim Completeness",
    intro:
      "A claim translation should account for all source content before stylistic refinement begins.",
    items: [
      "Every source claim has a corresponding target claim.",
      "No claim has been unintentionally omitted or duplicated.",
      "Every clause and subordinate clause is represented.",
      "Every technical limitation has corresponding target content.",
      "Enumerated elements, conditions, and exceptions are complete.",
      "No explanatory language has been added without a source basis.",
      "Claim order matches the required source version.",
      "The correct amended or approved source claims were used.",
    ],
    noteTitle: "Review at the limitation level",
    note:
      "Long claims can look complete as sentences while still losing a short phrase, modifier, alternative, or subordinate relationship. Compare claims element by element rather than only claim by claim.",
  },
  {
    number: "02",
    id: "claim-structure",
    title: "Check Claim Numbering and Structure",
    intro:
      "Claim numbering supports the relationships among claims and should be verified separately from linguistic accuracy.",
    items: [
      "Every target claim number matches its source claim.",
      "Claim numbering is sequential where expected.",
      "Independent claims remain independent.",
      "Dependent claims remain dependent.",
      "Claim references point to the intended claim numbers.",
      "Claim sequence has not shifted during file processing.",
      "Multiple-claim references are complete.",
      "Deleted, amended, or inserted claims follow project instructions.",
    ],
  },
  {
    number: "03",
    id: "dependencies",
    title: "Verify Every Claim Dependency",
    intro:
      "Dependent claims inherit subject matter through their relationship with earlier claims. The translated dependency structure should be checked explicitly.",
    items: [
      "Each dependent claim refers to the same parent claim or claims as the source.",
      "Dependency chains remain intact.",
      "A dependent claim has not accidentally been redirected to a different claim.",
      "References to multiple previous claims are complete.",
      "Added limitations remain attached to the correct parent claim.",
      "Dependency expressions have not been omitted or simplified unintentionally.",
      "Amended dependency references match the correct source version.",
    ],
    example: {
      title: "Illustrative dependency check",
      source: "Source: Claim 1 → Claim 4 → Claim 7",
      target: "Verify that Claim 7 still depends through Claim 4, not directly on Claim 1.",
    },
    sourceRef: {
      text: "European Patent Office (EPO) examination guidance describes dependent-claim relationships and dependency chains.",
      label: "EPO guidance on dependent claims",
      href: "https://www.epo.org/en/legal/guidelines-epc/2026/f_iv_3_4.html",
    },
  },
  {
    number: "04",
    id: "terminology",
    title: "Maintain Defined Terms and Patent Terminology Consistently",
    intro:
      "Patent claims frequently repeat the same technical term intentionally. Synonym variation should not be introduced simply to make the target sound more stylistically varied.",
    items: [
      "The same technical concept uses consistent terminology.",
      "Defined elements retain their intended designation across claims.",
      "Similar but distinct source concepts remain distinct in translation.",
      "One source term has not received several unexplained target equivalents.",
      "Inventor-defined or application-specific terms are preserved appropriately.",
      "Abbreviations are handled consistently.",
      "Terminology follows approved glossaries when applicable.",
      "Existing patent-family translations have been considered where relevant.",
      "Terminology changes are justified by context rather than stylistic preference.",
    ],
    noteTitle: "Consistency can matter more than stylistic variety",
    note:
      "Repeated terminology may help maintain clear relationships among elements, limitations, dependent claims, the specification, and drawings. The objective is controlled terminology that preserves the distinctions in the source.",
    link: {
      label: "Terminology Management",
      href: "https://www.stepes.com/terminology-management/",
    },
  },
  {
    number: "05",
    id: "references",
    title: "Check How Claim Elements Are Introduced and Referenced",
    intro:
      "Translation should preserve enough information for the reader to understand which previously introduced element is being referenced.",
    items: [
      "Newly introduced elements remain distinguishable from previously introduced elements.",
      "Subsequent references still point clearly to the intended element.",
      "First, second, third, and similar identifiers remain consistent.",
      "Articles, demonstratives, pronouns, or equivalent target-language devices do not create ambiguity.",
      "A previously introduced element has not been translated later as if it were new.",
      "Two different elements have not collapsed into one ambiguous term.",
      "Referential wording remains compatible with the surrounding claim structure.",
    ],
    example: {
      title: "Illustrative reference check",
      source: "a first sensor … a second sensor … the first sensor",
      target:
        "Verify that the later target reference still identifies the first sensor unambiguously.",
    },
    sourceRef: {
      text: "U.S. Patent and Trademark Office (USPTO) examination guidance illustrates how unclear references to previously introduced elements can create antecedent-basis questions.",
      label: "USPTO MPEP § 2173",
      href: "https://www.uspto.gov/web/offices/pac/mpep/s2173.html",
    },
  },
  {
    number: "06",
    id: "limitations",
    title: "Preserve Claim Limitations and Logical Relationships",
    intro:
      "A patent claim is built from relationships as well as terminology. Small connecting words and modifiers can carry important meaning.",
    items: [
      "Every source limitation is represented.",
      "Modifiers attach to the intended element.",
      "Relative clauses modify the correct noun or phrase.",
      "Negation remains intact.",
      "Conditions remain conditional.",
      "Sequence, spatial, functional, and cause-and-effect relationships are preserved.",
      "Conjunctions and alternatives match the source.",
      "Scope-sensitive constructions are not casually normalized.",
      "No additional restriction or qualification has been introduced without a source basis.",
    ],
    noteTitle: "Translation check, not legal interpretation",
    note:
      "The reviewer should verify fidelity to the source. Jurisdiction-specific interpretation of claim language belongs with the appropriate patent professional.",
  },
  {
    number: "07",
    id: "numbers-units",
    title: "Verify Every Number, Range, Unit, and Formula",
    intro:
      "Digits may remain visually unchanged while the translated relationship around them changes.",
    items: [
      "Every numerical value matches the source.",
      "Decimal placement and positive or negative values are correct.",
      "Upper and lower range boundaries match.",
      "Greater-than and less-than relationships remain correct.",
      "Boundary language such as at least, greater than, and up to is accurate.",
      "Percentages and ratios match.",
      "Units and unit symbols are correct.",
      "Superscripts and subscripts remain intact.",
      "Mathematical operators and formula variables are correct.",
      "Chemical and scientific notation is accurate.",
      "Number formatting has not introduced ambiguity.",
    ],
    noteTitle: "Check the entire numerical relationship",
    note:
      "A value of 20 can survive perfectly while ‘at least 20’ becomes ‘less than 20.’ Compare the surrounding operator, boundary language, and unit, not only the digits.",
  },
  {
    number: "08",
    id: "alternatives",
    title: "Preserve Alternatives, Enumerations, and Lists",
    intro:
      "Long technical claims may contain sets of alternatives, nested lists, or grouped combinations that need structural comparison.",
    items: [
      "Every enumerated element is present.",
      "A/B/C or equivalent identifiers match.",
      "Item order is preserved where meaningful.",
      "Parallel structures remain parallel.",
      "And, or, and equivalent logical connectors reflect the source.",
      "Alternatives have not been unintentionally merged.",
      "Combinations have not been converted into exclusive choices, or vice versa.",
      "Nested lists remain associated with the correct parent clause.",
      "Punctuation or formatting has not changed the apparent grouping of elements.",
    ],
  },
  {
    number: "09",
    id: "drawings",
    title: "Cross-Check Reference Signs, Figures, and Drawings",
    intro:
      "Reference signs and drawings can provide important cross-document context and should be reviewed as part of multilingual QA.",
    items: [
      "Reference numbers in the target match the source.",
      "Component names associated with each reference sign remain consistent.",
      "Figure numbers are correct.",
      "References to figures point to the intended drawings.",
      "Drawing labels and claim terminology correspond appropriately.",
      "Similar components have not been confused.",
      "A reference number has not been dropped during formatting.",
      "A component name has not changed between claims and drawings without justification.",
    ],
    relation: ["Claim Term", "Reference Sign", "Specification Term", "Drawing"],
    sourceRef: {
      text: "EPO examination guidance calls for consistent use of reference signs across the description, claims, and drawings.",
      label: "EPO guidance on reference signs",
      href: "https://www.epo.org/en/legal/guidelines-epc/2026/a_ix_7_5_4.html",
    },
  },
  {
    number: "10",
    id: "specification",
    title: "Compare Claims with the Specification",
    intro:
      "Claims deserve dedicated review, but important terminology and technical relationships should also be compared with the specification when that context is available.",
    items: [
      "Key claim terminology aligns appropriately with the translated specification.",
      "Defined concepts remain consistent across document sections.",
      "Abbreviations and symbols correspond.",
      "Technical relationships in the claims remain compatible with the translated specification.",
      "Reference signs remain consistent.",
      "Important inventor-defined terminology has not changed.",
      "The claim translation has not introduced an unexplained target term for a concept already translated elsewhere.",
    ],
    noteTitle: "Cross-document consistency, not stylistic rewriting",
    note:
      "The goal is to identify unexplained inconsistencies or interpretation problems, not to rewrite claims so they sound like specification prose.",
    link: {
      label: "Translation Memory",
      href: "https://www.stepes.com/translation-memory/",
    },
  },
  {
    number: "11",
    id: "technical-meaning",
    title: "Confirm Technical Meaning and Subject-Matter Accuracy",
    intro:
      "A linguistically plausible translation may still be technically wrong. Specialized terminology and technical relationships need appropriate subject-matter context.",
    items: [
      "Specialized terminology is appropriate for the technology.",
      "Functional relationships remain technically accurate.",
      "Direction, orientation, sequence, and timing relationships match.",
      "Material and component relationships remain correct.",
      "Chemical names and formulas are accurate.",
      "Biological and medical terminology is used appropriately.",
      "Software, electronics, or system relationships are preserved.",
      "General-language equivalents have not replaced more precise technical terminology.",
      "Similar technical concepts have not been conflated.",
      "The translation is technically plausible in light of the source and specification.",
    ],
    links: [
      {
        label: "Chemical Patent Translation",
        href: "https://www.stepes.com/chemical-patent-translation-services/",
      },
      {
        label: "Technology Patent Translation",
        href: "https://www.stepes.com/technology-patent-translation-services/",
      },
    ],
  },
  {
    number: "12",
    id: "final-file",
    title: "Perform a Final File and Version Check",
    intro:
      "Translation quality can be compromised after linguistic review through file handling, formatting, version control, or delivery errors.",
    items: [
      "The correct source version was translated.",
      "The reviewed target version is the version being delivered.",
      "All claims are present and claim numbering remains correct.",
      "Cross-references remain intact.",
      "No reviewed text has been replaced by an earlier version.",
      "Track changes and comments have been handled according to instructions.",
      "Special characters, superscripts, subscripts, mathematical notation, and chemical notation render correctly.",
      "Formatting has not concealed omissions or duplications.",
      "File names and version identifiers are correct.",
      "Final files open and display correctly.",
      "Certification or supporting documentation is included when required by the project.",
    ],
  },
];

const qaRows = [
  ["Completeness", "Source claim vs. target claim", "Missing limitation or clause", "Translator / linguistic reviewer"],
  ["Claim numbering", "Source vs. target sequence", "Incorrect claim number", "Linguistic QA"],
  ["Claim dependency", "Source vs. target references", "Wrong parent claim", "Patent-specialist reviewer"],
  ["Terminology", "Repeated source and target terms", "Inconsistent equivalent", "Translator / terminology reviewer"],
  ["Antecedent relationship", "Introduced vs. referenced elements", "Ambiguous referent", "Linguistic / patent-specialist reviewer"],
  ["Logical relationship", "Conditions, alternatives, modifiers", "Changed relationship", "Linguistic / technical reviewer"],
  ["Numbers and ranges", "Values, operators, boundaries", "Changed numerical limitation", "Linguistic / technical reviewer"],
  ["Reference signs", "Claims, specification, drawings", "Wrong component number", "Linguistic / technical QA"],
  ["Technical meaning", "Source, target, supporting context", "Misinterpreted technical relationship", "Technical subject-matter expert"],
  ["Source ambiguity", "Source claim and specification", "Meaning cannot be resolved confidently", "Client IP team / patent professional"],
  ["Jurisdiction question", "Translation vs. filing requirements", "Claim-form or procedural question", "Patent counsel / filing representative"],
  ["Final file", "Approved target vs. delivery file", "Version or formatting mismatch", "Final-format QA"],
];

const findings = [
  ["Wrong Claim Dependency", "A dependent claim refers to a different parent claim than the source, or part of a multiple dependency disappears.", "Compare the complete dependency chain and source version."],
  ["Missing Limitation", "A word, clause, condition, modifier, or technical feature from the source has no corresponding target content.", "Determine whether the content was omitted, merged elsewhere, or intentionally handled under project instructions."],
  ["Terminology Drift", "The same defined concept receives multiple target translations without a contextual reason.", "Check approved terminology, specification context, related claims, and patent-family references."],
  ["Altered Numerical Relationship", "Digits may match while a comparator, unit, range boundary, ratio, or mathematical operator differs.", "Compare the complete expression, not only the numerical value."],
  ["Ambiguous Reference", "A target reference could point to more than one previously introduced element.", "Trace the element through the claim and supporting context."],
  ["Changed Logical Connector", "A conjunction, alternative, negative expression, or conditional relationship differs from the source.", "Compare the full grammatical relationship and surrounding limitations."],
  ["Reference-Sign Mismatch", "The target claim connects an element to the wrong reference number or drawing.", "Cross-check claims, specification, and figures."],
  ["Source Ambiguity", "The source itself does not clearly resolve the intended relationship.", "Do not silently guess. Flag the issue for the appropriate client, technical reviewer, or patent professional."],
];

const finalFive = [
  ["Are all claims and limitations present?", "Confirm source-to-target completeness, including subordinate clauses, alternatives, and conditions."],
  ["Are claim numbers and dependencies correct?", "Trace dependent claims through the complete claim set rather than checking numbering visually."],
  ["Is terminology controlled and consistent?", "Confirm that intentionally repeated concepts remain identifiable across claims, specification content, drawings, and related materials."],
  ["Have numbers, units, reference signs, and technical relationships been verified?", "Treat objective data and relational language as dedicated QA categories."],
  ["Has the appropriate review been completed for the intended use?", "Determine whether the project requires linguistic, technical, client, certification, or patent-professional review."],
];

const faqs = [
  {
    question: "Why do patent claims require a separate translation QA checklist?",
    answer:
      "Patent claims contain tightly connected terminology, limitations, dependencies, references, numerical expressions, and technical relationships. General proofreading can identify grammar or style issues but may miss structural differences between the source and translated claims. A dedicated claim QA process compares the target directly with the source and checks these relationships systematically.",
  },
  {
    question: "Should patent claims be reviewed separately from the specification?",
    answer:
      "Claims benefit from dedicated claim-level review because their structure and terminology are particularly important. Relevant terminology, reference signs, definitions, abbreviations, and technical relationships should also be cross-checked against the specification when that context is available. The objective is not to make claims stylistically identical to the specification, but to identify unexplained inconsistencies that may indicate a translation issue.",
  },
  {
    question: "Why is terminology consistency especially important in patent claim translation?",
    answer:
      "Patent claims often repeat terminology intentionally to identify the same component, process, material, relationship, or limitation. Introducing unnecessary synonyms can make those relationships less clear. Terminology should therefore be controlled according to the source context, approved glossaries, patent-family references, and client instructions.",
  },
  {
    question: "Can software automatically check translated patent claims?",
    answer:
      "Automated QA can identify many objective issues, including missing content, inconsistent terminology, claim-number mismatches, number and unit differences, duplicated segments, and reference-sign inconsistencies. Human review may still be needed to determine whether a complex technical relationship, limitation, antecedent, or domain-specific term has been translated correctly in context.",
  },
  {
    question: "Who should review a patent claim translation?",
    answer:
      "The appropriate reviewer depends on the language pair, technical field, complexity, intended use, jurisdiction, and risk profile. A workflow may include a professional patent translator, independent linguistic reviewer, terminology specialist, technical subject-matter expert, in-house IP reviewer, patent agent, or patent counsel. These roles serve different purposes and do not automatically substitute for one another.",
  },
  {
    question: "Does this checklist replace patent counsel review?",
    answer:
      "No. This checklist supports linguistic and technical translation quality assurance. Patent counsel, patent agents, filing representatives, or other authorized professionals remain responsible for jurisdiction-specific legal interpretation, claims strategy, patent-office requirements, filing decisions, and final approval where those responsibilities apply.",
  },
];

const sources = [
  {
    title: "Guidelines for Examination in the European Patent Office — Dependent Claims",
    organization: "European Patent Office (EPO)",
    href: "https://www.epo.org/en/legal/guidelines-epc/2026/f_iv_3_4.html",
  },
  {
    title: "Guidelines for Examination in the European Patent Office — Reference Signs",
    organization: "European Patent Office (EPO)",
    href: "https://www.epo.org/en/legal/guidelines-epc/2026/a_ix_7_5_4.html",
  },
  {
    title: "MPEP § 2173 — Claims Particularly Pointing Out and Distinctly Claiming the Invention",
    organization: "United States Patent and Trademark Office (USPTO)",
    href: "https://www.uspto.gov/web/offices/pac/mpep/s2173.html",
  },
  {
    title: "PCT Applicant's Guide",
    organization: "World Intellectual Property Organization (WIPO)",
    href: "https://www.wipo.int/en/web/pct-system/guide/index",
  },
  {
    title: "The First Shared Task on Patent Claims Translation",
    organization: "Workshop on Asian Translation (WAT 2025) / ACL Anthology",
    href: "https://aclanthology.org/2025.wat-1.1/",
  },
  {
    title: "Patent Claim Translation with Large Language Models",
    organization: "Machine Translation Summit 2025 / ACL Anthology",
    href: "https://aclanthology.org/2025.mtsummit-1.23/",
  },
];

const resources = [
  {
    category: "Translation Guide",
    title: "PCT Patent Translation and National Phase Guide",
    text: "Plan multilingual translations for PCT applications and national-phase entry, including source-version planning, amended materials, jurisdictions, and coordinated patent families.",
    href: "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/",
  },
  {
    category: "Service",
    title: "Patent Translation Services",
    text: "Professional translation for patent applications, claims, specifications, abstracts, drawings, prior art, prosecution materials, and related intellectual property documents.",
    href: patentServiceUrl,
  },
  {
    category: "Quality Resource",
    title: "Translation Quality and Governance",
    text: "Explore terminology, review workflows, translation quality assurance, automation, escalation, and governance across enterprise translation programs.",
    href: "https://www.stepes.com/resources/translation-quality/",
  },
  {
    category: "AI Translation Insight",
    title: "AI Patent Translation: Research Use vs. Filing-Grade Translation",
    text: "Understand where AI-assisted patent translation can accelerate research and where professional human translation, technical expertise, and controlled QA remain important.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/",
  },
];

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    document: (
      <svg {...common}>
        <path d="M6 3.5h8.5L19 8v12.5H6z" />
        <path d="M14.5 3.5V8H19M9 11h6M9 14h6M9 17h4" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
      </svg>
    ),
    branch: (
      <svg {...common}>
        <circle cx="6" cy="5" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path d="M8 5h2a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4M14 9a4 4 0 0 1 4-1" />
      </svg>
    ),
    terminology: (
      <svg {...common}>
        <path d="M4 6h10M4 10h7M4 14h9M4 18h6" />
        <path d="m16 10 4 4M20 10l-4 4" />
      </svg>
    ),
    ruler: (
      <svg {...common}>
        <path d="m5 18 13-13 3 3L8 21H5v-3Z" />
        <path d="m13 7 4 4M10 10l2 2M7 13l2 2" />
      </svg>
    ),
    draw: (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m5.5 17 4-4 3 3 2-2 4 3" />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M9 10h.01M15 10h.01M9 15c2 1.3 4 1.3 6 0M12 2v3" />
      </svg>
    ),
    print: (
      <svg {...common}>
        <path d="M7 9V4h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M7 14h10v7H7z" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M14 5h5v5M19 5l-8 8" />
        <path d="M19 13v6H5V5h6" />
      </svg>
    ),
  };
  return icons[name] || icons.check;
}

function ClaimQaArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="claim-sheet">
        <div className="sheet-meta">
          <span className="meta-dot" />
          <span className="meta-line meta-line-wide" />
          <span className="meta-line meta-line-short" />
        </div>
        <div className="sheet-columns">
          <div className="claim-lines">
            {[1, 2, 3, 4, 5].map((n) => (
              <div className={`claim-line ${n === 3 ? "active" : ""}`} key={n}>
                <span>{n}</span>
                <i />
                <b />
              </div>
            ))}
          </div>
          <div className="qa-panel">
            <div><span>01</span><i /><Icon name="check" size={14} /></div>
            <div><span>03</span><i /><Icon name="branch" size={14} /></div>
            <div><span>04</span><i /><Icon name="terminology" size={14} /></div>
            <div><span>07</span><i /><Icon name="ruler" size={14} /></div>
          </div>
        </div>
      </div>
      <div className="dependency-card">
        <strong>Dependency chain</strong>
        <div className="dependency-flow"><span>1</span><i /><span>4</span><i /><span>7</span></div>
      </div>
      <div className="reference-card">
        <div className="reference-icon"><Icon name="draw" size={18} /></div>
        <div><strong>References aligned</strong><span>Claims • specification • drawings</span></div>
      </div>
    </div>
  );
}

function ChecklistGroup({ group }) {
  return (
    <section className="check-group" id={group.id} aria-labelledby={`${group.id}-title`}>
      <div className="check-heading">
        <span className="check-number">{group.number}</span>
        <div>
          <h3 id={`${group.id}-title`}>{group.title}</h3>
          <p>{group.intro}</p>
        </div>
      </div>
      <div className="check-items">
        {group.items.map((item) => (
          <div className="check-item" key={item}>
            <span className="check-marker" aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      {group.note && (
        <div className="quality-note">
          <strong>{group.noteTitle}</strong>
          <p>{group.note}</p>
        </div>
      )}
      {group.example && (
        <div className="example-panel">
          <span className="example-label">Illustrative Example</span>
          <strong>{group.example.title}</strong>
          <p>{group.example.source}</p>
          <p>{group.example.target}</p>
        </div>
      )}
      {group.relation && (
        <div className="relation-flow" aria-label="Reference consistency path">
          {group.relation.map((item, index) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {index < group.relation.length - 1 && <i aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      )}
      {group.sourceRef && (
        <div className="evidence-note">
          <span>{group.sourceRef.text}</span>
          <a href={group.sourceRef.href} target="_blank" rel="noopener noreferrer">{group.sourceRef.label}<Icon name="external" size={14} /></a>
        </div>
      )}
      {group.link && (
        <a className="text-link" href={group.link.href}>{group.link.label}<Icon name="arrow" size={16} /></a>
      )}
      {group.links && (
        <div className="inline-links">
          {group.links.map((link) => (
            <a className="text-link" href={link.href} key={link.href}>{link.label}<Icon name="arrow" size={16} /></a>
          ))}
        </div>
      )}
    </section>
  );
}

export default function StepesPatentClaimsTranslationQualityChecklist() {
  const [openFaq, setOpenFaq] = useState(0);

  const printChecklist = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <main className="claims-guide">
      <style>{`
        :root {
          --magenta: ${BRAND.magenta};
          --magenta-dark: ${BRAND.magentaDark};
          --blush: ${BRAND.blush};
          --blush-strong: ${BRAND.blushStrong};
          --dark: ${BRAND.dark};
          --text: ${BRAND.text};
          --muted: ${BRAND.muted};
          --line: ${BRAND.line};
          --soft: ${BRAND.soft};
          --eyebrow-dark: ${BRAND.eyebrowDark};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .claims-guide {
          overflow-x: clip;
          background: #fff;
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.68;
        }
        .claims-guide a { color: var(--magenta); text-decoration: none; }
        .claims-guide a:focus-visible,
        .claims-guide button:focus-visible,
        .claims-guide summary:focus-visible {
          outline: 3px solid rgba(193,29,99,.26);
          outline-offset: 4px;
        }
        .claims-guide h1, .claims-guide h2, .claims-guide h3,
        .claims-guide p, .claims-guide li, .claims-guide a, .claims-guide td,
        .claims-guide th { overflow-wrap: break-word; }
        section[id], div[id] { scroll-margin-top: 112px; }
        .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 56px; }
        .reading { width: min(100%, 760px); }
        .reading.center { margin-left: auto; margin-right: auto; }
        .wide { width: min(100%, 1040px); margin-left: auto; margin-right: auto; }
        .section { padding: 94px 0; }
        .section.dense { padding: 78px 0; }
        .soft { background: var(--soft); }
        .blush { background: var(--blush); }
        .dark { background: var(--dark); color: #fff; }
        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: .16em !important;
          text-transform: uppercase;
        }
        .dark .eyebrow { color: var(--eyebrow-dark) !important; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; letter-spacing: -.025em; font-weight: 500; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.16; margin-bottom: 22px; }
        h3 { font-size: 24px; line-height: 1.28; margin-bottom: 13px; }
        p, li { font-size: 18px; }
        p { margin-bottom: 22px; }
        .lead { font-size: 20px; line-height: 1.62; color: var(--muted); max-width: 820px; }
        .dark p, .dark .lead { color: #CDD4DF; }
        .section-head { max-width: 820px; margin-bottom: 46px; }
        .section-head.center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-head.center .lead { margin-left: auto; margin-right: auto; }
        .btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
        .btn {
          min-height: 50px; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 13px 22px; border-radius: 999px; border: 1px solid transparent;
          font-size: 16px; line-height: 1.2; font-weight: 600; cursor: pointer;
          font-family: inherit; transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn-primary, .btn-primary:link, .btn-primary:visited, .btn-primary:hover,
        .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible {
          background: var(--magenta); color: #fff !important;
        }
        .btn-primary *, .btn-primary svg, .btn-primary svg * { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(159,29,85,.18); }
        .btn-secondary { color: var(--text) !important; background: #fff; border-color: var(--line); }
        .btn-secondary:hover { border-color: #C7CED9; transform: translateY(-1px); }
        .btn-quiet { color: var(--text) !important; background: transparent; border-color: #C9CFD8; }
        .text-link { display: inline-flex; max-width: 100%; align-items: center; gap: 8px; color: var(--magenta) !important; font-size: 16px; font-weight: 600; min-height: 44px; }
        .text-link svg { transition: transform .18s ease; flex: 0 0 auto; }
        .text-link:hover svg { transform: translateX(3px); }
        .inline-links { display: flex; flex-wrap: wrap; gap: 8px 28px; margin-top: 18px; }

        /* Breadcrumb */
        .breadcrumb-wrap { padding-top: 28px; background: #fff; }
        .breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; margin: 0; padding: 0; list-style: none; color: #737D8C; }
        .breadcrumb li { min-width: 0; display: inline-flex; align-items: center; gap: 7px; font-size: 14px; line-height: 1.45; }
        .breadcrumb li:last-child { flex: 1 1 260px; }
        .breadcrumb a { color: #697486 !important; font-size: 14px; }
        .breadcrumb a:hover { color: var(--magenta) !important; }
        .breadcrumb-current { min-width: 0; color: #3E4858; font-weight: 500; overflow-wrap: anywhere; }
        .crumb-sep { color: #A8B0BC; user-select: none; }

        /* Hero */
        .hero { padding: 38px 0 84px; background: linear-gradient(180deg, #fff 0%, #fff 82%, #FAFBFD 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0,1.06fr) minmax(420px,.94fr); gap: 66px; align-items: center; }
        .hero-grid > * { min-width: 0; }
        .hero .lead { max-width: 730px; }
        .hero-audience { margin-top: 26px; padding-top: 22px; border-top: 1px solid var(--line); color: #4A5568; font-size: 16px; }
        .hero-art { min-height: 470px; position: relative; border: 1px solid #E3E7ED; border-radius: 30px; background: #FBFCFE; overflow: hidden; }
        .art-grid { position: absolute; inset: 0; background-image: linear-gradient(#EEF1F5 1px, transparent 1px), linear-gradient(90deg,#EEF1F5 1px,transparent 1px); background-size: 34px 34px; opacity: .6; mask-image: linear-gradient(to bottom,#000,transparent 94%); }
        .claim-sheet { position: absolute; left: 70px; right: 62px; top: 70px; min-height: 302px; border-radius: 22px; background: #fff; border: 1px solid #DDE3EA; box-shadow: 0 24px 70px rgba(30,38,50,.12); transform: rotate(-1.6deg); z-index: 2; }
        .sheet-meta { min-height: 52px; display: flex; align-items: center; gap: 10px; padding: 0 20px; border-bottom: 1px solid #E7EAF0; color: #626D7E; font-size: 11px; font-weight: 600; letter-spacing: .1em; }
        .meta-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .meta-line { display: block; height: 6px; border-radius: 999px; background: #DDE2E9; }
        .meta-line-wide { width: 94px; }
        .meta-line-short { width: 56px; margin-left: auto; background: #E8EBF0; }
        .sheet-columns { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; padding: 24px; }
        .claim-lines { display: grid; gap: 14px; padding-top: 4px; }
        .claim-line { display: grid; grid-template-columns: 26px 1fr 30%; gap: 10px; align-items: center; }
        .claim-line span { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; background: #F1F3F6; color: #697486; font-size: 11px; font-weight: 600; }
        .claim-line i, .claim-line b { display: block; height: 8px; border-radius: 999px; background: #DFE3E9; }
        .claim-line b { background: #ECEFF3; }
        .claim-line.active span { color: var(--magenta); background: var(--blush-strong); }
        .claim-line.active i { background: #DFA6C0; }
        .qa-panel { display: grid; gap: 10px; }
        .qa-panel > div { display: grid; grid-template-columns: 28px 1fr 18px; gap: 8px; align-items: center; min-height: 43px; padding: 8px 10px; border: 1px solid #E2E6EC; border-radius: 12px; background: #FCFDFE; color: #778294; }
        .qa-panel span { color: var(--magenta); font-size: 11px; font-weight: 600; }
        .qa-panel i { height: 6px; border-radius: 999px; background: #DDE2E9; }
        .qa-panel svg { color: var(--magenta); }
        .dependency-card, .reference-card { position: absolute; z-index: 4; background: #fff; border: 1px solid #DEE3EA; border-radius: 18px; box-shadow: 0 16px 44px rgba(31,38,50,.11); }
        .dependency-card { left: 24px; bottom: 28px; padding: 15px 17px; }
        .dependency-card strong { display: block; margin-bottom: 9px; font-size: 14px; }
        .dependency-flow { display: flex; align-items: center; gap: 7px; }
        .dependency-flow span { width: 27px; height: 27px; display: grid; place-items: center; border-radius: 8px; background: var(--blush); color: var(--magenta); font-size: 11px; font-weight: 600; }
        .dependency-flow i { width: 20px; height: 1px; background: #D2A2B8; position: relative; }
        .dependency-flow i::after { content: ""; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-top: 1px solid #D2A2B8; border-right: 1px solid #D2A2B8; transform: rotate(45deg); }
        .reference-card { right: 20px; top: 24px; display: flex; align-items: center; gap: 11px; padding: 13px 15px; }
        .reference-icon { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 11px; background: var(--blush); color: var(--magenta); }
        .reference-card strong { display: block; font-size: 14px; }
        .reference-card span { display: block; margin-top: 3px; color: #7A8494; font-size: 13px; }

        /* Summary */
        .summary-band { padding: 42px 0; background: var(--blush); border-top: 1px solid #F0D9E2; border-bottom: 1px solid #F0D9E2; }
        .summary-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 58px; align-items: start; }
        .summary-lead h2 { font-size: 30px; margin-bottom: 12px; }
        .summary-lead p { margin: 0; color: #665563; font-size: 17px; }
        .takeaways { border-top: 1px solid #E5C8D5; }
        .takeaway { display: grid; grid-template-columns: 30px 1fr; gap: 16px; padding: 17px 0; border-bottom: 1px solid #E5C8D5; }
        .takeaway span { color: var(--magenta); font-size: 14px; font-weight: 600; }
        .takeaway p { margin: 0; color: #514A52; font-size: 16px; }

        /* Guide layout + TOC */
        .guide-region { padding: 86px 0 30px; }
        .guide-layout { display: grid; grid-template-columns: 260px minmax(0,760px); gap: 64px; justify-content: center; align-items: start; }
        .toc { position: sticky; top: 104px; align-self: start; border-top: 1px solid var(--line); padding-top: 18px; }
        .toc-label { margin: 0 0 12px; color: #798395; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .12em; }
        .toc nav { display: grid; }
        .toc a { position: relative; padding: 9px 0 9px 14px; color: #5D6879 !important; font-size: 15px; line-height: 1.42; border-left: 2px solid transparent; }
        .toc a:hover, .toc a:focus { color: var(--magenta) !important; border-left-color: #E6AFC6; }
        .toc-mobile { display: none; }
        .article > section { margin-bottom: 84px; }
        .article > section:last-child { margin-bottom: 0; }
        .article h2 { scroll-margin-top: 110px; }
        .article p { color: #394557; }
        .article .lead { color: var(--muted); }
        .quiet-boundary { margin-top: 28px; padding: 22px 24px; border: 1px solid var(--line); border-radius: 18px; background: var(--soft); color: #4A5568; font-size: 16px; }

        /* Coverage */
        .coverage-wrap { width: 100%; }
        .coverage-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; }
        .coverage-item { min-height: 142px; padding: 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .coverage-item:nth-child(3n) { border-right: 0; }
        .coverage-item:nth-last-child(-n+3) { border-bottom: 0; }
        .coverage-number { color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .08em; }
        .coverage-item strong { display: block; margin-top: 8px; font-size: 18px; }
        .coverage-item p { margin: 7px 0 0; color: var(--muted); font-size: 16px; line-height: 1.5; }

        /* How to use */
        .use-steps { border-top: 1px solid var(--line); }
        .use-step { display: grid; grid-template-columns: 44px 210px 1fr; gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .use-step > span { color: var(--magenta); font-size: 14px; font-weight: 600; padding-top: 4px; }
        .use-step strong { font-size: 18px; }
        .use-step p { margin: 0; color: var(--muted); font-size: 16px; }

        /* Checklist */
        .checklist-intro { margin-bottom: 34px; padding: 24px 26px; border-radius: 20px; background: var(--blush); border: 1px solid #EED5E0; }
        .checklist-intro p { margin: 0; color: #574C55; font-size: 16px; }
        .check-group { padding: 44px 0; border-top: 1px solid var(--line); scroll-margin-top: 110px; }
        .check-group:last-child { border-bottom: 1px solid var(--line); }
        .check-heading { display: grid; grid-template-columns: 56px 1fr; gap: 20px; align-items: start; }
        .check-number { width: 50px; height: 50px; border-radius: 15px; background: var(--blush); color: var(--magenta); display: grid; place-items: center; font-size: 14px; font-weight: 600; }
        .check-heading h3 { margin-bottom: 8px; }
        .check-heading p { margin: 0; color: var(--muted); font-size: 16px; }
        .check-items { margin: 26px 0 0 76px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px 24px; }
        .check-item { display: grid; grid-template-columns: 20px 1fr; gap: 11px; align-items: start; color: #394557; font-size: 16px; line-height: 1.55; }
        .check-marker { width: 16px; height: 16px; margin-top: 4px; border: 1.5px solid #ADB5C2; border-radius: 4px; background: #fff; }
        .quality-note, .example-panel { margin: 28px 0 0 76px; padding: 20px 22px; border-radius: 18px; }
        .quality-note { background: var(--soft); border: 1px solid var(--line); }
        .quality-note strong, .example-panel strong { display: block; font-size: 16px; margin-bottom: 6px; }
        .quality-note p, .example-panel p { margin: 0; color: #505B6D; font-size: 16px; }
        .example-panel { background: var(--blush); border: 1px solid #EDD4DF; }
        .example-panel p + p { margin-top: 6px; }
        .example-label { display: block; margin-bottom: 8px; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
        .check-group > .text-link, .check-group > .inline-links { margin-left: 76px; margin-top: 18px; }
        .evidence-note { margin: 18px 0 0 76px; padding-top: 16px; border-top: 1px dashed #D7DCE4; display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px; color: #667184; font-size: 15px; line-height: 1.55; }
        .evidence-note a { display: inline-flex; align-items: center; gap: 6px; color: var(--magenta) !important; font-size: 15px; font-weight: 600; }
        .relation-flow { margin: 28px 0 0 76px; display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }
        .relation-flow span { padding: 10px 12px; border-radius: 11px; border: 1px solid var(--line); background: #fff; color: #465166; font-size: 14px; font-weight: 600; }
        .relation-flow i { width: 26px; height: 1px; background: #C5CBD4; position: relative; }
        .relation-flow i::after { content: ""; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-top: 1px solid #C5CBD4; border-right: 1px solid #C5CBD4; transform: rotate(45deg); }

        /* QA matrix */
        .matrix-wide { width: 100%; }
        .matrix-scroll { overflow-x: auto; border: 1px solid var(--line); border-radius: 22px; background: #fff; }
        .qa-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .qa-table th:nth-child(1), .qa-table td:nth-child(1) { width: 20%; }
        .qa-table th:nth-child(2), .qa-table td:nth-child(2) { width: 25%; }
        .qa-table th:nth-child(3), .qa-table td:nth-child(3) { width: 24%; }
        .qa-table th:nth-child(4), .qa-table td:nth-child(4) { width: 31%; }
        .qa-table th, .qa-table td { padding: 17px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.5; }
        .qa-table th { background: #F8F9FB; font-weight: 600; color: #2C3748; }
        .qa-table td { color: #4E596A; }
        .qa-table tr:last-child td { border-bottom: 0; }
        .matrix-cards { display: none; }

        /* Findings */
        .findings-list { border-top: 1px solid var(--line); }
        .finding { display: grid; grid-template-columns: 210px 1fr; gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .finding h3 { margin: 0; font-size: 19px; }
        .finding p { margin: 0; color: var(--muted); font-size: 16px; }
        .finding-review { margin-top: 7px !important; color: #3F4B5E !important; }
        .finding-review strong { color: var(--text); }

        /* AI wide dark section */
        .ai-section { width: 100%; padding: 42px; border-radius: 28px; background: var(--dark); color: #fff; }
        .ai-section h2 { color: #fff; }
        .ai-section > p { color: #CDD4DF; }
        .ai-split { margin-top: 30px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1px; background: #343C4B; border: 1px solid #343C4B; border-radius: 20px; overflow: hidden; }
        .ai-split article { padding: 26px; background: #192131; }
        .ai-split h3 { color: #fff; font-size: 20px; }
        .ai-split ul { margin: 0; padding-left: 20px; color: #CED5E0; }
        .ai-split li { margin: 8px 0; font-size: 16px; }
        .ai-note { margin-top: 24px; padding-top: 20px; border-top: 1px solid #343C4B; color: #CDD4DF; font-size: 16px; }
        .ai-note a { color: var(--eyebrow-dark) !important; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }

        /* Review layers */
        .review-layers { border-top: 1px solid var(--line); }
        .review-layer { display: grid; grid-template-columns: 48px 210px 1fr; gap: 20px; align-items: start; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .layer-icon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); }
        .layer-copy h3 { margin: 1px 0 8px; font-size: 20px; }
        .layer-copy .question { margin: 0; color: #3F4B5E; font-weight: 600; font-size: 16px; }
        .layer-detail strong { display: block; font-size: 15px; }
        .layer-detail ul { margin: 8px 0 0; padding-left: 18px; }
        .layer-detail li { font-size: 16px; margin: 6px 0; color: #4C586A; }

        /* Final five */
        .final-five { counter-reset: finalcheck; border-top: 1px solid var(--line); }
        .final-question { counter-increment: finalcheck; display: grid; grid-template-columns: 46px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .final-question::before { content: counter(finalcheck); width: 36px; height: 36px; border-radius: 11px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; }
        .final-question strong { display: block; font-size: 18px; }
        .final-question p { margin: 6px 0 0; color: var(--muted); font-size: 16px; }

        /* Print */
        .print-panel { padding: 32px; border: 1px solid #EBCEDB; border-radius: 24px; background: var(--blush); }
        .print-grid { display: grid; grid-template-columns: 1fr 220px; gap: 30px; align-items: center; }
        .print-panel h2 { font-size: 30px; }
        .print-panel p { color: #5B5058; font-size: 16px; }
        .print-actions { display: grid; gap: 10px; }
        .print-actions .btn { width: 100%; }

        /* FAQ */
        .faq-wrap { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; min-height: 76px; padding: 22px 0; border: 0; background: transparent; color: var(--text); display: grid; grid-template-columns: 1fr 34px; gap: 18px; align-items: center; text-align: left; cursor: pointer; font: inherit; }
        .faq-question span:first-child { font-size: 18px; font-weight: 600; line-height: 1.4; }
        .faq-toggle { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--line); display: grid; place-items: center; color: var(--magenta); font-size: 22px; line-height: 1; }
        .faq-answer { max-width: 700px; padding: 0 48px 24px 0; color: var(--muted); font-size: 16px; }

        /* Sources */
        .sources-list { border-top: 1px solid var(--line); }
        .source-row { display: grid; grid-template-columns: 1fr 160px; gap: 24px; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--line); }
        .source-row strong { display: block; font-size: 16px; font-weight: 600; }
        .source-row span { display: block; margin-top: 4px; color: var(--muted); font-size: 15px; }
        .source-row .text-link { justify-self: end; overflow-wrap: anywhere; }

        /* Conclusion + resources */
        .conclusion { padding-top: 4px; }
        .related { padding: 78px 0; background: var(--soft); }
        .resource-list { border-top: 1px solid var(--line); }
        .resource-row { display: grid; grid-template-columns: 190px minmax(250px,.8fr) minmax(0,1.2fr); gap: 28px; align-items: start; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .resource-category { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; padding-top: 5px; }
        .resource-row h3 { margin: 0; font-size: 20px; }
        .resource-row h3 a { color: var(--text) !important; }
        .resource-row h3 a:hover { color: var(--magenta) !important; }
        .resource-row p { margin: 0; color: var(--muted); font-size: 16px; }

        /* Final CTA */
        .final-cta { padding: 88px 0; background: #FFF8FB; border-top: 1px solid #F2DEE7; }
        .final-grid { display: grid; grid-template-columns: minmax(0,1.25fr) minmax(320px,.75fr); gap: 58px; align-items: center; }
        .final-cta h2 { max-width: 720px; }
        .final-cta p { max-width: 760px; color: #596579; font-size: 18px; }
        .final-proof { padding: 28px; border: 1px solid #EACEDB; border-radius: 24px; background: #fff; }
        .final-proof strong { display: block; margin-bottom: 14px; font-size: 18px; }
        .final-proof-list { display: grid; gap: 12px; }
        .final-proof-item { display: grid; grid-template-columns: 20px 1fr; gap: 10px; color: #4A5568; font-size: 16px; }
        .final-proof-item svg { color: var(--magenta); margin-top: 3px; }
        .disclaimer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #E7D8DE; color: #6E6570; font-size: 14px; line-height: 1.6; }

        @media (max-width: 1199px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.9fr); gap: 44px; }
          .claim-sheet { left: 42px; right: 38px; }
          .guide-layout { grid-template-columns: 240px minmax(0,720px); gap: 48px; }
          .check-items { grid-template-columns: 1fr; }
        }
        @media (max-width: 960px) {
          .shell { padding-left: 28px; padding-right: 28px; }
          .section { padding: 82px 0; }
          .hero { padding-bottom: 74px; }
          .hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-copy { max-width: 820px; }
          .hero-art { max-width: 650px; width: 100%; }
          .summary-grid { grid-template-columns: 1fr; gap: 26px; }
          .guide-region { padding-top: 62px; }
          .guide-layout { grid-template-columns: 1fr; gap: 30px; }
          .toc { display: none; }
          .toc-mobile { display: block; margin-bottom: 34px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
          .toc-mobile summary { min-height: 52px; padding: 13px 16px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 16px; font-weight: 600; list-style: none; }
          .toc-mobile summary::-webkit-details-marker { display: none; }
          .toc-mobile summary::after { content: "+"; color: var(--magenta); font-size: 22px; }
          .toc-mobile[open] summary::after { content: "−"; }
          .toc-mobile nav { display: grid; padding: 0 16px 14px; border-top: 1px solid var(--line); }
          .toc-mobile a { min-height: 44px; display: flex; align-items: center; color: #536074 !important; font-size: 16px; border-bottom: 1px solid #EEF0F4; }
          .toc-mobile a:last-child { border-bottom: 0; }
          .article { width: min(100%,760px); margin: 0 auto; }
          .coverage-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .coverage-item { border-right: 1px solid var(--line) !important; border-bottom: 1px solid var(--line) !important; }
          .coverage-item:nth-child(2n) { border-right: 0 !important; }
          .coverage-item:nth-last-child(-n+2) { border-bottom: 0 !important; }
          .review-layer { grid-template-columns: 48px minmax(170px,190px) minmax(0,1fr); gap: 18px; }
          .final-grid { grid-template-columns: 1fr; gap: 34px; }
        }
        @media (max-width: 820px) {
          .matrix-scroll { display: none; }
          .matrix-cards { display: grid; border-top: 1px solid var(--line); }
          .matrix-card { padding: 22px 0; border-bottom: 1px solid var(--line); }
          .matrix-card strong { display: block; margin-bottom: 10px; font-size: 18px; }
          .matrix-card dl { margin: 0; display: grid; grid-template-columns: 130px 1fr; gap: 8px 14px; }
          .matrix-card dt { color: #788294; font-size: 15px; font-weight: 600; }
          .matrix-card dd { margin: 0; color: #4E596A; font-size: 16px; }
        }
        @media (max-width: 768px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          p, li { font-size: 17px; }
          .lead { font-size: 18px; }
          .hero-art { min-height: 430px; }
          .claim-sheet { top: 68px; left: 28px; right: 28px; }
          .coverage-grid { grid-template-columns: 1fr; }
          .coverage-item, .coverage-item:nth-child(2n), .coverage-item:nth-last-child(-n+2) { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .coverage-item:last-child { border-bottom: 0 !important; }
          .use-step { grid-template-columns: 42px 1fr; gap: 14px; }
          .use-step p { grid-column: 2; }
          .check-heading { grid-template-columns: 52px 1fr; gap: 16px; }
          .check-number { width: 46px; height: 46px; }
          .check-items, .quality-note, .example-panel, .relation-flow, .evidence-note, .check-group > .text-link, .check-group > .inline-links { margin-left: 68px; }
          .finding { grid-template-columns: 1fr; gap: 8px; }
          .ai-section { padding: 32px 26px; border-radius: 24px; }
          .ai-split { grid-template-columns: 1fr; }
          .print-grid { grid-template-columns: 1fr; }
          .source-row { grid-template-columns: 1fr; gap: 8px; }
          .source-row .text-link { justify-self: start; }
          .resource-row { grid-template-columns: 1fr; gap: 8px; }
          .resource-category { padding-top: 0; }
          .resource-row h3 a { display: inline; overflow-wrap: anywhere; }
          .print-actions { width: 100%; }
        }
        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .breadcrumb-wrap { padding-top: 20px; }
          .breadcrumb { gap: 5px 7px; align-items: flex-start; }
          .breadcrumb li, .breadcrumb a { font-size: 14px; }
          .breadcrumb li { flex: 0 1 auto; }
          .breadcrumb li:last-child { flex: 1 1 100%; width: 100%; }
          .breadcrumb-current { flex: 1 1 auto; }
          .crumb-sep { flex: 0 0 auto; margin-top: 1px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 62px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          p, li { font-size: 17px; }
          .hero { padding: 32px 0 62px; }
          .btn-row { flex-direction: column; }
          .btn { width: 100%; min-height: 52px; white-space: normal; text-align: center; }
          .hero-art { min-height: 375px; border-radius: 24px; }
          .claim-sheet { top: 58px; left: 16px; right: 16px; min-height: 250px; }
          .sheet-meta { min-height: 46px; padding: 0 13px; }
          .sheet-columns { grid-template-columns: 1fr; padding: 16px; }
          .qa-panel { display: none; }
          .dependency-card { left: 10px; bottom: 14px; padding: 11px 12px; }
          .reference-card { right: 9px; top: 13px; padding: 10px 11px; }
          .reference-card span { display: none; }
          .article > section { margin-bottom: 68px; }
          .check-group { padding: 36px 0; }
          .check-heading { grid-template-columns: 1fr; gap: 12px; }
          .check-number { width: 44px; height: 44px; }
          .check-items, .quality-note, .example-panel, .relation-flow, .evidence-note, .check-group > .text-link, .check-group > .inline-links { margin-left: 0; }
          .check-items { gap: 12px; }
          .quality-note, .example-panel { padding: 18px; }
          .relation-flow { align-items: stretch; display: grid; grid-template-columns: 1fr; gap: 7px; }
          .relation-flow span { text-align: center; }
          .relation-flow i { width: 1px; height: 16px; justify-self: center; }
          .relation-flow i::after { right: -3px; top: auto; bottom: 0; transform: rotate(135deg); }
          .ai-section { padding: 28px 20px; }
          .review-layer { grid-template-columns: 44px 1fr; gap: 14px; }
          .layer-copy { min-width: 0; }
          .layer-detail { grid-column: 2; }
          .final-question { grid-template-columns: 40px 1fr; gap: 12px; }
          .print-panel { padding: 24px 20px; }
          .faq-question { grid-template-columns: 1fr 32px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 72px 0; }
        }
        @media (max-width: 480px) {
          .hero-art { min-height: 330px; }
          .claim-sheet { top: 50px; left: 10px; right: 10px; min-height: 230px; }
          .claim-lines { gap: 11px; }
          .reference-card { display: none; }
          .dependency-card { left: 50%; bottom: 12px; transform: translateX(-50%); white-space: nowrap; }
          .hero-audience { font-size: 16px; }
          .breadcrumb li:last-child { flex-basis: 100%; }
          .matrix-card dl { grid-template-columns: 1fr; gap: 3px; }
          .matrix-card dd { margin-bottom: 8px; }
          .evidence-note { align-items: flex-start; }
          .evidence-note a { width: 100%; }
        }
        @media (max-width: 360px) {
          .shell { padding-left: 18px; padding-right: 18px; }
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          .hero-art { min-height: 315px; }
          .claim-sheet { left: 8px; right: 8px; }
          .dependency-card { padding: 10px 11px; }
        }
        @media print {
          .breadcrumb-wrap, .hero-art, .btn-row, .toc, .toc-mobile, .summary-band, .related, .final-cta,
          .article > section:not(#checklist):not(#final-five), .print-actions { display: none !important; }
          .hero { padding: 20px 0 10px; border-bottom: 1px solid #bbb; }
          .hero-audience { display: none; }
          .hero-grid { display: block; }
          .hero .lead { font-size: 14px; color: #333; }
          .guide-region { padding: 18px 0; }
          .guide-layout { display: block; }
          .article { width: 100%; }
          .article > section { margin-bottom: 24px; }
          .check-group { break-inside: avoid-page; padding: 22px 0; }
          .check-items { grid-template-columns: 1fr 1fr; }
          .quality-note, .example-panel, .evidence-note { break-inside: avoid-page; }
          .claims-guide { color: #000; }
          a { color: #000 !important; text-decoration: none !important; }
        }
      `}</style>

      <div className="breadcrumb-wrap">
        <div className="shell">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((item, index) => (
                <li key={item.label}>
                  {index > 0 && <span className="crumb-sep" aria-hidden="true">/</span>}
                  {item.current ? (
                    <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Patent Translation Guide</p>
            <h1>Patent Claims Translation Quality Checklist</h1>
            <p className="lead">
              Use this practical checklist to review translated patent claims for completeness, claim structure, dependencies, terminology, references, numerical accuracy, technical meaning, and final-file integrity.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={sectionUrl("checklist")}>
                <span>View the Checklist</span><Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-secondary" href={patentServiceUrl}>Patent Translation Services</a>
            </div>
            <div className="hero-audience">
              For patent attorneys, in-house intellectual property (IP) teams, patent administrators, translators, reviewers, and filing professionals.
            </div>
          </div>
          <ClaimQaArtwork />
        </div>
      </section>

      <section className="summary-band" aria-labelledby="summary-title">
        <div className="shell summary-grid">
          <div className="summary-lead">
            <p className="eyebrow">Quick Takeaways</p>
            <h2 id="summary-title">Review Meaning, Structure, and File Integrity Together</h2>
            <p>A fluent target claim can still contain a structural, terminology, numerical, or cross-reference problem.</p>
          </div>
          <div className="takeaways">
            {[
              "Compare authoritative source and target claims side by side rather than reviewing the target in isolation.",
              "Verify claim structure and dependencies before polishing style or fluency.",
              "Treat terminology, numbers, ranges, reference signs, and technical relationships as dedicated QA categories.",
              "Route linguistic, technical, source-ambiguity, and jurisdiction-specific questions to the appropriate reviewer.",
            ].map((item, index) => (
              <div className="takeaway" key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-region">
        <div className="shell guide-layout">
          <aside className="toc" aria-label="In this guide">
            <p className="toc-label">In This Guide</p>
            <nav>
              {tocItems.map((item) => <a href={sectionUrl(item.id)} key={item.id}>{item.label}</a>)}
            </nav>
          </aside>

          <article className="article">
            <details className="toc-mobile">
              <summary>In This Guide</summary>
              <nav aria-label="Mobile guide contents">
                {tocItems.map((item) => <a href={sectionUrl(item.id)} key={item.id}>{item.label}</a>)}
              </nav>
            </details>

            <section id="why-claims-need-qa">
              <h2>Patent Claims Require More Than a General Translation Review</h2>
              <p className="lead">
                Patent claims compress complex technical and legal relationships into highly structured language. Translation therefore involves more than producing accurate, fluent sentences.
              </p>
              <p>
                Reviewers must also preserve the relationships among claim elements, dependencies, defined terms, limitations, numerical values, alternatives, references, and supporting technical content. A translated claim can read naturally and still contain a structural problem: a parent-claim reference can change, a repeated component can receive a different translation, a numerical boundary can shift, or a modifier can attach to the wrong element.
              </p>
              <p>
                Patent claim translation quality assurance should therefore compare the target directly with the authoritative source rather than evaluate the target language in isolation. This checklist provides a systematic framework for that comparison and complements broader <a href={patentServiceUrl}>Patent Translation Services</a> by focusing specifically on claim-level linguistic and technical QA.
              </p>
            </section>

            <section id="what-to-review">
              <h2>What the Patent Claims Translation Checklist Covers</h2>
              <p className="lead">A thorough patent claim translation review should address twelve dimensions.</p>
              <div className="coverage-wrap">
                <div className="coverage-grid">
                  {coverage.map(([number, title, text]) => (
                    <div className="coverage-item" key={number}>
                      <span className="coverage-number">{number}</span>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="quiet-boundary">
                Not every project requires the same review depth. Filing jurisdiction, technical complexity, intended use, existing patent-family materials, client instructions, and the selected quality workflow should determine how findings are reviewed and escalated.
              </div>
            </section>

            <section id="how-to-use">
              <h2>How to Review Translated Patent Claims</h2>
              <p className="lead">Start with objective source-to-target structure, then move into terminology, technical meaning, and appropriate escalation.</p>
              <div className="use-steps">
                {[
                  ["01", "Compare Source and Target Side by Side", "Review the authoritative source claim and translated claim together. For amended applications, confirm which source version is authoritative before QA begins."],
                  ["02", "Review Structure Before Style", "Check claim numbers, dependencies, omissions, additions, numbers, and reference relationships before refining linguistic fluency."],
                  ["03", "Record Findings, Not Just Corrections", "Distinguish confirmed translation issues from terminology questions, technical questions, source ambiguities, and patent or filing questions."],
                  ["04", "Route Questions to the Right Reviewer", "Linguistic, technical, and jurisdiction-specific questions may require different reviewers, including translators, technical subject-matter experts, in-house IP teams, patent agents, or counsel."],
                ].map(([number, title, text]) => (
                  <div className="use-step" key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>
                ))}
              </div>
            </section>

            <section id="checklist">
              <h2>Patent Claims Translation Quality Checklist</h2>
              <p className="lead">Use each category to verify the translated claims against the authoritative source and applicable reference materials.</p>
              <div className="checklist-intro">
                <p>Work through the twelve categories systematically. Record questions that require linguistic, technical, source, or patent-professional review instead of resolving uncertain points by assumption.</p>
              </div>
              {checklistGroups.map((group) => <ChecklistGroup group={group} key={group.id} />)}
            </section>

            <section id="qa-matrix">
              <h2>A Practical QA Matrix for Patent Claim Review</h2>
              <p className="lead">Not every finding should be routed the same way. Use the issue type to determine what to compare and who may need to review it.</p>
              <div className="matrix-wide">
                <div className="matrix-scroll" role="region" aria-label="Patent claims translation QA matrix" tabIndex="0">
                  <table className="qa-table">
                    <thead><tr><th scope="col">QA Check</th><th scope="col">What to Compare</th><th scope="col">Typical Finding</th><th scope="col">Possible Review Route</th></tr></thead>
                    <tbody>
                      {qaRows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}
                    </tbody>
                  </table>
                </div>
                <div className="matrix-cards">
                  {qaRows.map(([check, compare, finding, route]) => (
                    <article className="matrix-card" key={check}>
                      <strong>{check}</strong>
                      <dl><dt>Compare</dt><dd>{compare}</dd><dt>Typical finding</dt><dd>{finding}</dd><dt>Review route</dt><dd>{route}</dd></dl>
                    </article>
                  ))}
                </div>
              </div>
              <p style={{ marginTop: 22 }}>The goal is not simply to find more issues. It is to route each meaningful finding to someone qualified to resolve it.</p>
            </section>

            <section id="findings">
              <h2>Patent Translation Findings That Deserve a Second Look</h2>
              <p className="lead">Some findings merit additional review before they are normalized as stylistic changes.</p>
              <div className="findings-list">
                {findings.map(([title, text, review]) => (
                  <article className="finding" key={title}>
                    <h3>{title}</h3>
                    <div><p>{text}</p><p className="finding-review"><strong>Review:</strong> {review}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section id="automated-qa">
              <div className="ai-section">
                <h2>What Automated QA Can Catch, and Where Human Review Still Matters</h2>
                <p>
                  Automated translation quality assurance can provide valuable coverage for patent claims, especially when checks are configured around the structure of the content. It is strongest at surfacing objective differences and patterns for review.
                </p>
                <div className="ai-split">
                  <article>
                    <h3>Good Candidates for Automated QA</h3>
                    <ul>
                      <li>Missing or duplicated claims</li>
                      <li>Claim-number mismatches</li>
                      <li>Source and target number differences</li>
                      <li>Inconsistent repeated terminology</li>
                      <li>Missing units or reference signs</li>
                      <li>Segment, formatting, or version anomalies</li>
                    </ul>
                  </article>
                  <article>
                    <h3>Checks That Often Need Human Judgment</h3>
                    <ul>
                      <li>Whether a technical relationship is preserved</li>
                      <li>Whether terminology is correct in context</li>
                      <li>Whether an antecedent remains unambiguous</li>
                      <li>Whether a modifier attaches to the intended element</li>
                      <li>Whether an apparent inconsistency is intentional</li>
                      <li>Whether a source ambiguity was interpreted appropriately</li>
                    </ul>
                  </article>
                </div>
                <p className="ai-note">
                  The strongest workflow uses automation to increase review coverage and surface potential issues, while qualified human reviewers make context-sensitive linguistic and technical decisions. Recent patent-claim translation research has also identified domain-specific errors and limitations that are not captured reliably by a single automated quality score. See the <a href="https://aclanthology.org/2025.wat-1.1/" target="_blank" rel="noopener noreferrer">2025 patent claims translation shared task</a> and <a href="https://aclanthology.org/2025.mtsummit-1.23/" target="_blank" rel="noopener noreferrer">2025 large language model patent claim translation study</a>.
                </p>
              </div>
            </section>

            <section id="review-layers">
              <h2>Translation QA, Technical Review, and Patent Review Serve Different Purposes</h2>
              <p className="lead">A reliable patent translation workflow distinguishes among different types of review rather than treating every issue as a language problem.</p>
              <div className="review-layers">
                <article className="review-layer">
                  <div className="layer-icon"><Icon name="document" /></div>
                  <div className="layer-copy"><h3>Translation Quality Review</h3><p className="question">Does the target accurately and completely represent the source?</p></div>
                  <div className="layer-detail"><strong>Typical checks</strong><ul><li>Completeness</li><li>Terminology</li><li>Numbers and units</li><li>Dependencies and references</li><li>Target-language accuracy</li></ul></div>
                </article>
                <article className="review-layer">
                  <div className="layer-icon"><Icon name="layers" /></div>
                  <div className="layer-copy"><h3>Technical Review</h3><p className="question">Has the specialized technical meaning been understood and expressed correctly?</p></div>
                  <div className="layer-detail"><strong>Typical checks</strong><ul><li>Domain terminology</li><li>Scientific relationships</li><li>Formulas and notation</li><li>Component functions</li><li>Technical distinctions</li></ul></div>
                </article>
                <article className="review-layer">
                  <div className="layer-icon"><Icon name="branch" /></div>
                  <div className="layer-copy"><h3>Patent and Filing Review</h3><p className="question">Does the material meet legal, procedural, drafting, and filing requirements for its intended use?</p></div>
                  <div className="layer-detail"><strong>Typical reviewers</strong><ul><li>Patent counsel</li><li>Patent agents</li><li>Authorized filing professionals</li><li>Responsible in-house IP teams</li></ul></div>
                </article>
              </div>
              <div className="quiet-boundary">
                Patent-office requirements vary by jurisdiction and filing route. A translation QA checklist supports multilingual quality, but it does not replace jurisdiction-specific patent advice or filing review. For international applications and national-phase planning, consult the relevant office requirements and the <a href="https://www.wipo.int/en/web/pct-system/guide/index" target="_blank" rel="noopener noreferrer">WIPO Patent Cooperation Treaty (PCT) Applicant&apos;s Guide</a>.
              </div>
            </section>

            <section id="final-five">
              <h2>Final Five Checks Before Translated Claims Move Forward</h2>
              <div className="final-five">
                {finalFive.map(([question, text]) => <div className="final-question" key={question}><div><strong>{question}</strong><p>{text}</p></div></div>)}
              </div>
            </section>

            <section id="print-checklist">
              <div className="print-panel">
                <div className="print-grid">
                  <div>
                    <h2>Download or Print the Patent Claims Translation Quality Checklist</h2>
                    <p>
                      Create a working PDF copy for translator self-review, independent linguistic QA, technical review, in-house IP review, or final pre-delivery verification. The complete checklist also remains available on this page for online reference.
                    </p>
                  </div>
                  <div className="print-actions">
                    <button className="btn btn-secondary" type="button" onClick={printChecklist}><Icon name="print" size={18} />Save as PDF or Print</button>
                    <a className="btn btn-quiet" href={sectionUrl("checklist")}>Return to Checklist</a>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2>Patent Claims Translation Quality FAQ</h2>
              <div className="faq-wrap">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  const answerId = `claims-faq-answer-${index}`;
                  return (
                    <div className="faq-item" key={faq.question}>
                      <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                        <span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && <div className="faq-answer" id={answerId}>{faq.answer}</div>}
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="sources">
              <h2>Sources and References</h2>
              <p className="lead">Authoritative patent-office guidance and recent patent-translation research informed the claim-structure, reference, jurisdiction, and automation guidance in this checklist.</p>
              <div className="sources-list">
                {sources.map((source) => (
                  <div className="source-row" key={source.href}>
                    <div><strong>{source.title}</strong><span>{source.organization}</span></div>
                    <a className="text-link" href={source.href} target="_blank" rel="noopener noreferrer">View Source<Icon name="external" size={15} /></a>
                  </div>
                ))}
              </div>
            </section>

            <section className="conclusion">
              <h2>Use the Checklist as a Review Framework, Not a Substitute for Professional Judgment</h2>
              <p>
                Strong patent claims translation QA combines systematic source-to-target comparison with the right level of linguistic, technical, and patent-professional review for the intended use. The checklist helps teams make those checks visible, repeatable, and easier to route across multilingual patent workflows.
              </p>
              <p>
                For broader filing, prosecution, prior-art, portfolio, and multilingual patent support, explore <a href={patentServiceUrl}>Stepes Patent Translation Services</a>.
              </p>
            </section>
          </article>
        </div>
      </section>

      <section className="related" aria-labelledby="related-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Related Patent Resources</p>
            <h2 id="related-title">Continue Your Patent Translation Review</h2>
          </div>
          <div className="resource-list">
            {resources.map((resource) => (
              <article className="resource-row" key={resource.href}>
                <span className="resource-category">{resource.category}</span>
                <h3><a href={resource.href}>{resource.title}</a></h3>
                <p>{resource.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-grid">
          <div>
            <p className="eyebrow">Patent Translation Support</p>
            <h2>Need Help Reviewing Multilingual Patent Claims?</h2>
            <p>
              Stepes provides professional patent translation and multilingual quality review across complex technical fields, with workflows that can combine professional linguists, subject-matter expertise, terminology management, translation memory, automated quality checks, independent human review, and final-format QA.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={quoteUrl}><span>Get a Patent Translation Quote</span><Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href={patentServiceUrl}>Explore Patent Translation Services</a>
            </div>
            <p className="disclaimer">
              This guide provides general translation-quality guidance and is not legal advice. Patent requirements and filing practices vary by jurisdiction and circumstance. Consult qualified patent counsel or the appropriate filing professional regarding legal, drafting, procedural, and jurisdiction-specific requirements.
            </p>
          </div>
          <aside className="final-proof" aria-label="Patent translation workflow capabilities">
            <strong>Patent translation workflows can include:</strong>
            <div className="final-proof-list">
              {["Patent-specialist translators and reviewers", "Subject-matter expertise for technical content", "Terminology management and translation memory", "Automated QA plus human review", "Final-format and file-integrity checks"].map((item) => (
                <div className="final-proof-item" key={item}><Icon name="check" size={17} /><span>{item}</span></div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
