import React, { useEffect, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/electronic-ifu-translation-version-control/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const tocItems = [
  { id: "what-is-an-electronic-ifu", label: "What Is an Electronic IFU?" },
  {
    id: "why-version-control-is-difficult",
    label: "Why Multilingual Version Control Is Difficult",
  },
  {
    id: "regulatory-and-quality-context",
    label: "The Regulatory and Quality Context",
  },
  {
    id: "multilingual-eifu-control-framework",
    label: "The Multilingual eIFU Control Framework",
  },
  {
    id: "controlled-source-of-truth",
    label: "Create a Controlled Source of Truth",
  },
  {
    id: "product-market-language-matrix",
    label: "Build a Product–Market–Language Matrix",
  },
  {
    id: "assess-source-changes",
    label: "Assess Every Source Change",
  },
  {
    id: "translate-and-review",
    label: "Translate and Review Changed Content",
  },
  {
    id: "synchronize-electronic-and-paper",
    label: "Synchronize Electronic and Paper Editions",
  },
  {
    id: "validate-digital-delivery",
    label: "Validate Websites, Software, and Downloads",
  },
  { id: "use-ai-with-control", label: "Use AI Without Losing Control" },
  { id: "roles-and-release-authority", label: "Define Roles and Release Authority" },
  { id: "common-version-control-failures", label: "Avoid Common Version-Control Failures" },
  { id: "multilingual-eifu-release-checklist", label: "Multilingual eIFU Release Checklist" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
  { id: "sources-and-references", label: "Sources and References" },
  { id: "plan-a-controlled-eifu-program", label: "Plan a More Controlled eIFU Program" },
];

const keyTakeaways = [
  {
    title: "One Governed Content Baseline",
    text: "Every language and delivery format should trace back to an approved source revision.",
  },
  {
    title: "Explicit Applicability",
    text: "Product, market, language, intended user, revision, and channel relationships should be recorded rather than inferred.",
  },
  {
    title: "Change-Based Localization",
    text: "Each source revision should be assessed for linguistic, regulatory, functional, and publishing impact before translation begins.",
  },
  {
    title: "Synchronized Release Channels",
    text: "Website files, software-delivered instructions, device displays, downloads, and paper editions should be released from the same approved content state.",
  },
  {
    title: "Visible Current and Historical Status",
    text: "Users and responsible teams should be able to identify the current edition without confusing it with a superseded version.",
  },
  {
    title: "Risk-Based Automation",
    text: "Translation memory, terminology, AI, and automated QA can improve efficiency, while accountable human review remains essential for regulated content.",
  },
];

const frameworkStages = [
  {
    number: "01",
    title: "Govern",
    text: "Establish the approved source, document identity, revision, owner, and authoring environment.",
  },
  {
    number: "02",
    title: "Map",
    text: "Connect each revision to the applicable products, models, markets, users, languages, and channels.",
  },
  {
    number: "03",
    title: "Assess",
    text: "Classify every change by safety, regulatory, functional, linguistic, software, layout, and publishing impact.",
  },
  {
    number: "04",
    title: "Localize",
    text: "Translate the approved delta while preserving validated content, terminology, and traceability.",
  },
  {
    number: "05",
    title: "Verify",
    text: "Review changed segments in the complete IFU and validate the final formatted or integrated edition.",
  },
  {
    number: "06",
    title: "Release",
    text: "Publish every applicable language and format through one coordinated release decision.",
  },
  {
    number: "07",
    title: "Archive and Monitor",
    text: "Retain prior editions, protect retrieval, monitor access and feedback, and route future changes through the same controls.",
  },
];

const controlledObjects = [
  ["Device identity", "Product family, catalog number, model, UDI-DI"],
  ["Content identity", "IFU number, source revision, document status"],
  ["Language identity", "Language, locale, and market-approved variant"],
  ["Format", "HTML, PDF, XML, application content, device display, paper"],
  ["Delivery channel", "Website, software, download repository, print workflow"],
  ["Approval state", "Draft, in review, approved, published, superseded"],
  ["Time state", "Approval, effective, publication, and retirement dates"],
  ["Market applicability", "Country, jurisdiction, intended user, regulatory route"],
];

const euControlRows = [
  [
    "Professional-use eligibility",
    "Under the current EU framework, covered devices intended for professional users may use electronic IFUs instead of paper. Where lay use is reasonably foreseeable, instructions intended for lay users must be supplied in paper form.",
  ],
  [
    "Paper-copy fulfillment",
    "A paper IFU must be available at no extra cost within the period defined by the risk assessment and, at the latest, within seven calendar days after a request—or with device delivery when requested at order.",
  ],
  [
    "Revision communication",
    "Manufacturers need a system that clearly indicates revisions and informs users when a revision is necessary for safety reasons.",
  ],
  [
    "Retention periods",
    "For expiry-dated, non-implantable devices: 10 years after the last device is placed on the market and at least two years after the final device expiry. For devices without an expiry date and implantable devices: 15 years after the last device is placed on the market.",
  ],
  [
    "Issued and obsolete versions",
    "Issued electronic versions and publication dates must remain available during the applicable retention period; obsolete editions may be supplied upon request.",
  ],
  [
    "Website controls",
    "The eIFU website must use a stable, directly accessible address, a commonly usable format readable with freely available software, content-tampering safeguards, and controls that reduce downtime and display errors.",
  ],
];

const matrixRows = [
  ["Product family", "Groups related devices while preserving model-level control"],
  ["Device or model", "Identifies the exact applicable configuration"],
  ["Catalog or product number", "Connects the IFU to commercial identification"],
  ["Basic UDI-DI or UDI-DI", "Supports controlled device identification where applicable"],
  ["Jurisdiction", "Identifies the governing market"],
  ["Intended user", "Distinguishes professional and lay-user requirements"],
  ["Source document ID", "Connects the target edition to its controlled source"],
  ["Source revision", "Identifies the approved content baseline"],
  ["Language and locale", "Distinguishes market-appropriate language variants"],
  ["Target edition ID", "Identifies the exact translated deliverable and its relationship to the source"],
  ["Delivery format", "PDF, HTML, software, device display, or paper"],
  ["Approval status", "Draft, in review, approved, released, or superseded"],
  ["Publication and effective dates", "Records when the edition became available and applicable"],
  ["Paper-copy status", "Identifies supplied, on-request, or not-applicable paper delivery"],
  ["Archive location", "Identifies where the prior edition can be retrieved"],
  ["Release owner", "Identifies the accountable approval authority"],
];

const changePriorities = [
  {
    priority: "Safety-Sensitive",
    examples: "Warnings, contraindications, emergency instructions, critical operating steps",
    response:
      "Professional medical translation, independent review, full contextual validation, and documented quality and regulatory approval.",
  },
  {
    priority: "Regulatory or Clinical",
    examples: "Intended use, indications, limitations, performance claims, symbols, manufacturer information",
    response:
      "Specialist translation, terminology review, market-specific regulatory review, and documented approval.",
  },
  {
    priority: "Functional or Technical",
    examples: "Setup, operation, maintenance, troubleshooting, software procedures",
    response:
      "Technical translation, in-context review, graphic or UI verification, and functional consistency checks.",
  },
  {
    priority: "Administrative",
    examples: "Contact details, URLs, identifiers, addresses, document references",
    response:
      "Targeted update, identifier verification, link testing, and controlled approval.",
  },
  {
    priority: "Editorial",
    examples: "Typographical, stylistic, or formatting changes that do not alter meaning",
    response:
      "Documented impact decision, with translation only where the target edition is genuinely affected.",
  },
];

const aiRoutes = [
  [
    "Previously approved unchanged content",
    "Translation memory reuse",
    "Applicability and context confirmation",
  ],
  ["Administrative updates", "AI or automated draft", "Identifier and target-language verification"],
  [
    "Technical procedures",
    "AI-assisted translation",
    "Medical technical linguist review and in-context QA",
  ],
  [
    "Warnings and contraindications",
    "Terminology-assisted drafting",
    "Specialist translation, independent review, and quality approval",
  ],
  [
    "Regulatory statements",
    "Controlled-language support",
    "Regulatory and linguistic approval",
  ],
  ["Layout and metadata", "Automated checks", "Final technical validation"],
];

const roleRows = [
  ["Regulatory Affairs", "Market requirements, regulatory impact, approved claims, and jurisdictional applicability"],
  ["Quality Assurance", "Controlled process, approval evidence, release controls, records, and deviation handling"],
  ["Labeling or Technical Publications", "Source authoring, document structure, graphics, and revision history"],
  ["Localization", "Translation, terminology, language QA, and target-edition traceability"],
  ["Product and Engineering", "Product configuration, software version, and technical accuracy"],
  ["Digital or Web Operations", "Publication, access, stability, redirects, and website verification"],
  ["Regional Reviewers", "Market-appropriate language, local terminology, and assigned regulatory review"],
  ["Customer Support or Fulfillment", "Correct paper edition, request records, and delivery routing"],
];

const commonFailures = [
  {
    title: "The Source Changes During Translation",
    risk: "Different languages are translated from different source states.",
    control: "Freeze the approved source for the release and process later edits through a documented change order.",
  },
  {
    title: "Filenames Become the Only Version Record",
    risk: "Files are renamed, copied, or overwritten without preserving authoritative status.",
    control: "Maintain version data in a controlled system or release register in addition to the filename.",
  },
  {
    title: "Languages Are Released Independently Without a Defined Model",
    risk: "Users receive inconsistent information across markets or channels.",
    control: "Define a synchronized global release, approved language waves, or another documented release model.",
  },
  {
    title: "Translation Memory Matches Are Automatically Accepted",
    risk: "Correct legacy language is reused in the wrong product, market, or procedural context.",
    control: "Confirm product, audience, market, and contextual applicability before approval.",
  },
  {
    title: "Old PDFs Remain Easy to Mistake for Current Editions",
    risk: "Users download a superseded IFU believing it is current.",
    control: "Display status clearly, direct users to the current version, and govern archive discoverability.",
  },
  {
    title: "Paper Copies Come From Local Storage",
    risk: "A regional office or fulfillment provider prints an obsolete file.",
    control: "Provide one controlled paper-production source and retire obsolete editions.",
  },
  {
    title: "The Website Is Tested Only in the Source Language",
    risk: "Other languages contain broken downloads, truncated labels, or incorrect product mappings.",
    control: "Test every target-language pathway and validate a risk-based sample of full downloads.",
  },
  {
    title: "Safety Revisions Follow the Standard Publishing Queue",
    risk: "Important changes are delayed or users are not appropriately informed.",
    control: "Define a separate escalation, approval, notification, and verification pathway.",
  },
  {
    title: "Software and Documentation Releases Are Managed Separately",
    risk: "The eIFU describes controls or functions that do not match the localized software build.",
    control: "Connect software version, resource-file release, screenshot approval, and IFU release records.",
  },
  {
    title: "Version Control Ends at Publication",
    risk: "Access failures, user confusion, paper requests, and post-market findings are not incorporated.",
    control: "Include eIFU delivery and usability in post-release monitoring and change management.",
  },
];

const checklistGroups = [
  {
    title: "Source and Scope",
    items: [
      "Identify the approved source document and revision.",
      "Retain the prior approved revision for comparison.",
      "Document and classify source changes.",
      "Confirm affected products, models, and intended users.",
      "Confirm affected markets and languages.",
      "Identify every required electronic and paper channel.",
      "Assess the regulatory or safety significance of the change.",
    ],
  },
  {
    title: "Translation and Language Assets",
    items: [
      "Apply approved terminology consistently.",
      "Review translation memory matches for context.",
      "Complete the required professional review for changed content.",
      "Verify numbers, units, warnings, and product identifiers.",
      "Apply the correct market-specific language variants.",
      "Localize graphics and screenshots where required.",
      "Resolve reviewer comments and document final linguistic approval.",
    ],
  },
  {
    title: "Formatting and Technical Production",
    items: [
      "Review text expansion, page flow, fonts, and right-to-left presentation.",
      "Confirm tables, callouts, and graphics remain readable.",
      "Test bookmarks, the table of contents, and cross-references.",
      "Verify URLs and QR destinations.",
      "Confirm revision and publication metadata.",
      "Review accessible document properties.",
      "Compare the final output with the approved source.",
    ],
  },
  {
    title: "Website and Software",
    items: [
      "Associate the correct file with each product and language.",
      "Use clear language labels and visible current or archived status.",
      "Test direct downloads, mobile presentation, and browser behavior.",
      "Confirm the publication address is stable.",
      "Verify security, content integrity, backup, and downtime controls.",
      "Confirm software-integrated instructions match the applicable build.",
    ],
  },
  {
    title: "Paper and Archival Controls",
    items: [
      "Confirm the paper edition matches the approved electronic content.",
      "Verify paper-copy request instructions and the controlled print source.",
      "Retire obsolete print files.",
      "Archive the prior electronic edition with a clear superseded status.",
      "Assign retention dates and retain release evidence.",
    ],
  },
  {
    title: "Final Release",
    items: [
      "Complete regulatory, quality, and target-language approvals.",
      "Include every release channel in the release record.",
      "Independently verify publication.",
      "Complete any required safety-related communication.",
      "Assign post-release monitoring ownership.",
    ],
  },
];

const faqs = [
  {
    question: "What Is the Difference Between an IFU and an eIFU?",
    answer:
      "An IFU is the information supplied by a manufacturer to explain a medical device’s intended purpose, proper use, precautions, and other relevant information. An eIFU is an IFU delivered electronically through a website, software application, device display, storage medium, or another approved electronic channel. Content requirements and electronic-delivery requirements should be evaluated separately.",
  },
  {
    question: "Can Every Medical Device Use an eIFU Instead of Paper Instructions?",
    answer:
      "No universal rule applies across all products and markets. Eligibility depends on the jurisdiction, device, intended user, delivery method, and applicable risk assessment. Under the current EU framework, covered devices intended for professional users may use electronic IFUs instead of paper, while instructions intended for reasonably foreseeable lay use must be supplied in paper form.",
  },
  {
    question: "How Should Multilingual eIFU Versions Be Numbered?",
    answer:
      "There is no single numbering model for every manufacturer. A practical target-edition record should identify the controlled document, source revision, language or locale, applicable product, status, and publication or effective date. The relationship to the approved source must remain unambiguous.",
  },
  {
    question: "Should Every Translation Have a Different Revision Number?",
    answer:
      "Not necessarily. Some organizations use the source revision across every language and distinguish editions with locale codes. Others use separate target-edition identifiers. Either approach can work when the source-to-target relationship is controlled and easy to reconstruct.",
  },
  {
    question: "What Happens When Only One Paragraph Changes?",
    answer:
      "The changed paragraph can often be processed as a translation delta, but the complete target IFU should still be reviewed for contextual and technical integrity. A small edit may affect terminology, cross-references, pagination, screenshots, warnings, or related procedural steps.",
  },
  {
    question: "Can One Multilingual PDF Serve Several Markets?",
    answer:
      "It may be possible when the included languages are accepted for the applicable markets, the content and device configuration are the same, navigation remains usable, and market-specific requirements are addressed. A multilingual PDF should not be used merely to simplify file management when it creates usability or applicability problems.",
  },
  {
    question: "Must Obsolete eIFUs Remain Available?",
    answer:
      "Requirements depend on the jurisdiction. Under the current EU framework, issued electronic versions and their publication dates must remain available during the applicable retention period, while obsolete editions may be made available upon request. Archived editions should always be clearly distinguished from the current edition.",
  },
  {
    question: "How Long Must an EU eIFU Remain Available?",
    answer:
      "For expiry-dated devices other than implantable devices, the current EU framework requires electronic IFUs to remain available for 10 years after the last device is placed on the market and at least two years after the expiry date of the final produced device. For devices without a defined expiry date and for implantable devices, the period is 15 years after the last device is placed on the market.",
  },
  {
    question: "Can AI Translate Medical Device eIFUs?",
    answer:
      "AI can support comparison, terminology assistance, first-pass translation, and automated QA. The process should be routed according to content risk. Safety-sensitive instructions, intended use, warnings, contraindications, and regulated statements should receive qualified human translation or review and accountable approval.",
  },
  {
    question: "Does Translation Memory Eliminate the Need for Review?",
    answer:
      "No. Translation memory retrieves previously translated content, but it does not independently determine whether that language remains correct for a new product, user, market, or surrounding context.",
  },
  {
    question: "Who Should Approve a Translated eIFU?",
    answer:
      "Approval responsibilities depend on the manufacturer’s quality system. A typical pathway may involve a qualified medical translator or reviewer, labeling or technical publications, regulatory affairs, quality assurance, a local-market reviewer, and product or engineering specialists.",
  },
  {
    question: "How Are eIFU Websites Validated?",
    answer:
      "Validation should cover both the controlled content and the delivery experience. Testing may include product and language mapping, download behavior, links, revision information, mobile presentation, browser compatibility, content integrity, archive status, security controls, and paper-request instructions.",
  },
];

const relatedResources = [
  {
    title: "Medical Device IFU Translation Guide",
    text: "Plan professional and patient-use IFU translation, terminology, review, layout, and final-format quality assurance.",
    href: "https://www.stepes.com/resources/localization-guides/medical-device-ifu-translation-guide/",
    action: "Read the IFU Translation Guide",
  },
  {
    title: "Medical Device Software Localization Checklist",
    text: "Review interface context, variables, text expansion, character rendering, right-to-left behavior, and multilingual testing.",
    href: "https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/",
    action: "Use the Software Localization Checklist",
  },
  {
    title: "AI Translation for Medical Devices",
    text: "Understand where AI can improve translation efficiency and where professional human validation remains essential.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-medical-devices/",
    action: "Explore AI Translation Guidance",
  },
  {
    title: "Medical Device Translation Services",
    text: "Explore professional translation support for IFUs, software, labeling, technical documentation, and global device content.",
    href: "https://www.stepes.com/medical-device-translation-services/",
    action: "Explore Medical Device Translation Services",
  },
];

const sources = [
  {
    title: "Commission Implementing Regulation (EU) 2021/2226 — Consolidated Version",
    organization: "EUR-Lex",
    text: "Electronic IFU eligibility, risk assessment, paper-copy availability, version management, retention, access, and website operation.",
    href: "https://eur-lex.europa.eu/eli/reg_impl/2021/2226/2025-07-16/eng",
    action: "Open the Consolidated EU Regulation",
  },
  {
    title: "Commission Implementing Regulation (EU) 2025/1234",
    organization: "EUR-Lex",
    text: "Amendment expanding electronic IFU eligibility for covered professional-use medical devices and addressing foreseeable lay use.",
    href: "https://eur-lex.europa.eu/eli/reg_impl/2025/1234/oj/eng",
    action: "Open the 2025 EU Amendment",
  },
  {
    title: "Principles of Labeling for Medical Devices and IVD Medical Devices — Edition 2",
    organization: "International Medical Device Regulators Forum",
    text: "International principles for paper and electronic medical device labeling.",
    href: "https://www.imdrf.org/sites/default/files/2024-04/IMDRF%20GRRP%20WG%20N52%20%28Edition%202%29.pdf",
    action: "Open the IMDRF Labeling Principles",
  },
  {
    title: "ISO 20417:2026 — Information to Be Supplied by the Manufacturer",
    organization: "International Organization for Standardization",
    text: "International requirements and general principles for manufacturer-supplied medical device information.",
    href: "https://www.iso.org/standard/20417",
    action: "Open the ISO 20417 Overview",
  },
  {
    title: "Quality Management System Regulation",
    organization: "U.S. Food and Drug Administration",
    text: "Current U.S. device quality-system framework and its incorporation of ISO 13485:2016 by reference.",
    href: "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr",
    action: "Open the FDA QMSR Overview",
  },
  {
    title: "21 CFR 820.45 — Device Labeling and Packaging Controls",
    organization: "Electronic Code of Federal Regulations",
    text: "Current U.S. requirements for labeling accuracy, release, and controls intended to prevent mix-ups.",
    href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820/subpart-B/section-820.45",
    action: "Open 21 CFR 820.45",
  },
  {
    title: "Acceptable Media for Electronic Product User Manuals",
    organization: "U.S. Food and Drug Administration",
    text: "FDA guidance on paper and electronic delivery options for the specifically covered electronic products.",
    href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/acceptable-media-electronic-product-user-manuals",
    action: "Open the FDA Guidance",
  },
];
function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 10h11" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      className={open ? "chevron is-open" : "chevron"}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="check-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m4 10 3.5 3.5L16 5.5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <path d="M10 4h11l6 6v22H10z" />
      <path d="M21 4v7h6" />
      <path d="M14 17h9M14 22h9M14 27h6" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="One controlled IFU source connected to multilingual digital and paper editions">
      <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
      <div className="source-document">
        <span className="source-icon"><DocumentIcon /></span>
        <span className="source-kicker">CONTROLLED SOURCE</span>
        <strong>IFU Rev 06</strong>
        <small>Approved content baseline</small>
      </div>
      <div className="output-node node-web">
        <span>Website</span>
        <small>Current PDF</small>
      </div>
      <div className="output-node node-software">
        <span>Software</span>
        <small>Integrated help</small>
      </div>
      <div className="output-node node-paper">
        <span>Paper</span>
        <small>On-request edition</small>
      </div>
      <div className="output-node node-archive">
        <span>Archive</span>
        <small>Superseded revision</small>
      </div>
      <div className="language-strip">
        <span>de-DE</span>
        <span>fr-FR</span>
        <span>es-ES</span>
        <span>it-IT</span>
      </div>
    </div>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SourceNote({ children }) {
  return (
    <div className="source-note">
      <strong>Source note</strong>
      <span>{children}</span>
    </div>
  );
}

function ResponsiveTable({ headings, rows, className = "" }) {
  return (
    <div className={`table-wrap ${className}`.trim()}>
      <table>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading} scope="col">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} data-label={headings[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GuideSection({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`guide-section ${className}`.trim()}>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  );
}

export default function ElectronicIFUVersionControlGuide() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState(tocItems[0].id);

  useEffect(() => {
    if (typeof document === "undefined" || typeof IntersectionObserver === "undefined") return undefined;

    const targets = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.1, 0.5] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (event, id) => {
    if (typeof document === "undefined") return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setTocOpen(false);
  };

  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="guide-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.stepes.com/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="https://www.stepes.com/resources/">Resources</a>
            <span aria-hidden="true">/</span>
            <a href="https://www.stepes.com/resources/localization-guides/">Localization Guides</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Electronic IFUs and Version Control</span>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">MEDICAL DEVICE LOCALIZATION GUIDE</p>
              <h1>Electronic IFUs (eIFUs): Multilingual Translation and Version Control</h1>
              <p className="hero-deck">
                Coordinate multilingual electronic instructions for use across websites, software,
                downloadable files, product revisions, archived editions, and paper-copy workflows.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={sectionUrl("multilingual-eifu-control-framework")}
                  onClick={(event) => handleAnchorClick(event, "multilingual-eifu-control-framework")}
                >
                  <span>Explore the Control Framework</span>
                  <ArrowIcon />
                </a>
                <a
                  className="button button-secondary"
                  href={sectionUrl("multilingual-eifu-release-checklist")}
                  onClick={(event) => handleAnchorClick(event, "multilingual-eifu-release-checklist")}
                >
                  Jump to the Release Checklist
                </a>
              </div>
              <div className="guide-meta" aria-label="Guide overview">
                <div>
                  <span>What You’ll Learn</span>
                  <strong>How to control multilingual eIFU revisions, releases, and archives</strong>
                </div>
                <div>
                  <span>Who It’s For</span>
                  <strong>Regulatory, quality, labeling, localization, product, and digital teams</strong>
                </div>
                <div>
                  <span>Included Tools</span>
                  <strong>Seven-stage framework, release matrix, quality-routing model, and checklist</strong>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="opening-section">
        <div className="shell reading-shell">
          <p className="opening-lead">
            An electronic instruction for use is not simply a paper manual saved as a PDF.
          </p>
          <p>
            Once an IFU is delivered through a website, software application, device display,
            downloadable document, or electronic storage medium, manufacturers must control a
            connected set of content relationships. Which IFU applies to each device and model?
            Which revision is approved in each market? Which languages are current? Do the website,
            software, downloadable file, and paper copy contain the same approved information? Can the
            complete release history be reconstructed when quality or regulatory teams need it?
          </p>
          <p>
            For multilingual medical device programs, every approved source revision can affect
            multiple languages, markets, product configurations, delivery channels, and publication
            states. Without disciplined version control, a correct translation can still be attached
            to the wrong device, published under the wrong revision, left active after replacement,
            or allowed to diverge from the printed edition.
          </p>
          <p>
            This guide complements broader{" "}
            <a href="https://www.stepes.com/medical-device-translation-services/">
              Medical Device Translation Services
            </a>{" "}
            planning by focusing specifically on multilingual release governance across the full eIFU lifecycle.
          </p>
          <div className="guidance-callout">
            <strong>Important</strong>
            <p>
              This guide provides practical localization and content-governance guidance. It does
              not replace market-specific regulatory, legal, quality-system, or product-safety advice.
            </p>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell">
          <div className="summary-heading">
            <p className="eyebrow">KEY TAKEAWAYS</p>
            <h2 id="key-takeaways-title">Six Principles for a More Controlled Multilingual eIFU Program</h2>
          </div>
          <div className="takeaway-list">
            {keyTakeaways.map((item) => (
              <article className="takeaway-row" key={item.title}>
                <span className="takeaway-marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-region">
        <div className="shell article-layout">
          <aside className="toc-rail" aria-label="In this guide">
            <div className="toc-inner">
              <p className="toc-label">IN THIS GUIDE</p>
              <nav>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={sectionUrl(item.id)}
                    className={activeSection === item.id ? "is-active" : undefined}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={(event) => handleAnchorClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="article-main">
            <div className="mobile-toc">
              <button
                type="button"
                aria-expanded={tocOpen}
                aria-controls="mobile-toc-list"
                onClick={() => setTocOpen((value) => !value)}
              >
                <span>In This Guide</span>
                <ChevronIcon open={tocOpen} />
              </button>
              <div id="mobile-toc-list" hidden={!tocOpen} className={tocOpen ? "mobile-toc-list is-open" : "mobile-toc-list"}>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={sectionUrl(item.id)}
                    className={activeSection === item.id ? "is-active" : undefined}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={(event) => handleAnchorClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <GuideSection
              id="what-is-an-electronic-ifu"
              title="What Is an Electronic IFU?"
              intro="An electronic instruction for use, commonly called an eIFU, is an IFU made available through an electronic delivery method rather than—or, in some cases, in addition to—a paper document."
            >
              <div className="prose">
                <p>Depending on the device, jurisdiction, intended user, and approved delivery model, an eIFU may be:</p>
                <ul>
                  <li>displayed by the medical device;</li>
                  <li>embedded in device software;</li>
                  <li>included in a mobile, desktop, or web application;</li>
                  <li>supplied on electronic storage media;</li>
                  <li>published as a downloadable PDF;</li>
                  <li>delivered through a dedicated e-labeling portal; or</li>
                  <li>accessed through a stable URL, QR code, or product-support page.</li>
                </ul>
                <p>
                  Under the current EU framework, an eIFU remains complete textual information; symbols
                  and graphics may be included, while video or audio may supplement rather than replace
                  the required text. Electronic delivery does not reduce the need for content control.
                  It introduces additional objects that must remain connected throughout the device lifecycle.
                </p>
              </div>
              <ResponsiveTable headings={["Controlled Object", "Examples"]} rows={controlledObjects} />
              <div className="prose">
                <p>
                  A multilingual eIFU program succeeds when every target edition can be traced to
                  the correct device, market, source revision, approved language, delivery format,
                  and publication state.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="why-version-control-is-difficult"
              title="Why Multilingual eIFU Version Control Is Difficult"
              intro="A source-language IFU may appear to be one document, but a global release can create dozens or hundreds of controlled outputs."
            >
              <div className="prose">
                <p>
                  Consider an IFU that supports four related device models, 18 European markets,
                  14 language editions, a downloadable PDF, device-integrated help, a paper-on-request
                  file, and one archived prior revision. That program is not simply a set of 14
                  translations. It is a network of product, language, market, revision, channel, and
                  status relationships.
                </p>
                <h3>One Source Change Can Create Unequal Language Impact</h3>
                <p>A revision may require different actions in different languages and markets:</p>
                <ul>
                  <li>a new translation in every affected language;</li>
                  <li>a terminology decision in only selected locales;</li>
                  <li>layout reflow where translated text expands;</li>
                  <li>right-to-left interface changes for Arabic;</li>
                  <li>new screenshots for localized software;</li>
                  <li>an updated paper file in markets where paper remains necessary; or</li>
                  <li>no change where the affected device configuration is unavailable.</li>
                </ul>
                <h3>Digital and Paper Releases Can Drift Apart</h3>
                <p>
                  The website may receive a new PDF before the print file is approved. A regional
                  team may continue using a locally saved obsolete edition. Software help can be
                  updated in one release while the downloadable manual remains unchanged. The
                  solution is not merely better naming; it is a controlled release process that treats
                  all formats as manifestations of the same approved information.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="regulatory-and-quality-context"
              title="The Regulatory and Quality Context"
              intro="Electronic delivery requirements differ by jurisdiction, device type, intended user, and product-specific regulation. A global program needs a common operating model with documented market-specific controls."
            >
              <div className="prose">
                <h3>Electronic IFUs in the European Union</h3>
                <p>
                  Commission Implementing Regulation (EU) 2021/2226, as amended by Regulation
                  (EU) 2025/1234, establishes conditions for supplying electronic IFUs under the EU
                  Medical Device Regulation. The 2025 amendment broadened eligibility for covered
                  devices intended for professional users while retaining paper instructions for lay
                  users where lay use is reasonably foreseeable.
                </p>
                <p>A documented eIFU risk assessment may need to consider:</p>
                <ul>
                  <li>intended-user knowledge and experience;</li>
                  <li>the use environment;</li>
                  <li>access to required hardware, software, and internet resources;</li>
                  <li>protection against content tampering;</li>
                  <li>backup mechanisms and temporary service unavailability;</li>
                  <li>emergency situations;</li>
                  <li>website compatibility;</li>
                  <li>paper-copy fulfillment; and</li>
                  <li>management of different IFU versions.</li>
                </ul>
              </div>

              <div className="regulatory-snapshot">
                <p className="callout-label">EU CONTROL SNAPSHOT</p>
                <h3>Current eIFU Requirements With Direct Version-Control Impact</h3>
                <p>
                  The following summarizes selected requirements in the consolidated EU framework.
                  Confirm the exact application for the device, intended user, and target market.
                </p>
                <ResponsiveTable headings={["Control Area", "Current EU Framework"]} rows={euControlRows} />
              </div>

              <div className="prose">
                <SourceNote>
                  Review the{" "}
                  <a href="https://eur-lex.europa.eu/eli/reg_impl/2021/2226/2025-07-16/eng" target="_blank" rel="noopener noreferrer">
                    consolidated EU regulation on EUR-Lex
                  </a>{" "}
                  for the official consolidated wording and current applicability.
                </SourceNote>

                <h3>International Labeling Principles</h3>
                <p>
                  The International Medical Device Regulators Forum’s 2024 labeling principles cover
                  paper and electronic labeling while recognizing that individual authorities may
                  impose additional requirements. A global eIFU program should distinguish the
                  organization’s global content standard from product-specific, jurisdictional,
                  language, and manufacturer-defined risk controls.
                </p>

                <h3>United States Quality-System Considerations</h3>
                <p>
                  The FDA Quality Management System Regulation became effective on February 2, 2026
                  and incorporates ISO 13485:2016 by reference. Current 21 CFR 820.45 includes controls
                  for labeling accuracy, documented release, and prevention of labeling and packaging
                  mix-ups. FDA guidance also permits paper or electronic user manuals for specifically
                  covered electronic products, but that guidance should not be generalized to every
                  medical device. Electronic-delivery permissions remain product- and regulation-specific
                  and should not be treated as a universal equivalent of the EU eIFU framework.
                </p>

                <h3>Content and Delivery Are Different Control Layers</h3>
                <p>
                  ISO 20417:2026 addresses information supplied by medical device manufacturers but
                  does not prescribe one universal delivery medium. Manufacturer-supplied information
                  requirements and delivery-channel requirements are related, but they are not
                  interchangeable. A valid digital channel does not correct incomplete content, and
                  approved content can still fail when it is published under the wrong device,
                  language, revision, or access path.
                </p>
              </div>
            </GuideSection>

            <section id="multilingual-eifu-control-framework" className="framework-section">
              <p className="eyebrow eyebrow-dark">STEPES CONTROL FRAMEWORK</p>
              <h2>The Multilingual eIFU Control Framework</h2>
              <p className="framework-intro">
                Manage multilingual eIFUs as a seven-stage content lifecycle in which each stage
                produces the evidence needed by the next.
              </p>
              <div className="framework-grid">
                {frameworkStages.map((stage) => (
                  <article className="framework-stage" key={stage.number}>
                    <span className="stage-number">{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </article>
                ))}
              </div>
              <div className="framework-principle">
                <strong>The Control Principle</strong>
                <p>
                  Source approval produces the controlled revision. Applicability mapping produces
                  the release matrix. Change assessment produces the localization scope. Translation
                  and validation produce release evidence. Publication and archival preserve the
                  complete history.
                </p>
              </div>
            </section>

            <GuideSection
              id="controlled-source-of-truth"
              title="Create a Controlled Source of Truth"
              intro="The source of truth is the approved content state from which every target-language edition is produced."
            >
              <div className="prose">
                <p>
                  The source may reside in a controlled document management system, component content
                  management system, XML or DITA repository, product lifecycle management environment,
                  validated labeling platform, approved technical-publications workflow, or another
                  governed system. The technology matters less than the controls around it.
                </p>
                <h3>Minimum Source-Control Information</h3>
                <ul>
                  <li>a unique document identifier and unambiguous revision;</li>
                  <li>approval status, approval date, and effective date;</li>
                  <li>identified product and intended-user scope;</li>
                  <li>a documented content owner and change history;</li>
                  <li>approved editable source files;</li>
                  <li>controlled graphics and screenshots; and</li>
                  <li>links to applicable terminology and reference materials.</li>
                </ul>

                <div className="editorial-callout">
                  <p className="callout-label">PRACTICAL DISTINCTION</p>
                  <h3>A PDF Can Be an Approved Output Without Being an Adequate Multilingual Source</h3>
                  <p>
                    Translation teams may also need editable authoring files, linked images, embedded
                    fonts, conditional-text rules, product variables, structured XML, software strings,
                    cross-reference definitions, and a reliable comparison against the prior revision.
                  </p>
                </div>

                <h3>Control Reusable Content at the Component Level</h3>
                <p>
                  Reusing approved warnings, procedures, and maintenance instructions can reduce
                  inconsistent updates. Reuse should still be confirmed for meaning, device context,
                  intended user, market, related graphics, cross-references, and language approval.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="product-market-language-matrix"
              title="Build a Product–Market–Language Matrix"
              intro="A controlled release matrix should answer one essential question: Which exact IFU edition is approved for each product, market, language, and delivery channel?"
            >
              <ResponsiveTable headings={["Recommended Field", "Control Purpose"]} rows={matrixRows} />
              <div className="example-panel">
                <p className="callout-label">ILLUSTRATIVE RECORD</p>
                <h3>One Product Family, Several Controlled Editions</h3>
                <ResponsiveTable
                  headings={["Product", "Market", "Language", "Source → Target Edition", "Channel", "Status"]}
                  rows={[
                    ["Imaging Console X4", "Germany", "German—Germany", "IFU-4821 Rev 06 → IFU-4821 Rev 06 de-DE", "Website PDF + paper on request", "Current"],
                    ["Imaging Console X4", "France", "French—France", "IFU-4821 Rev 06 → IFU-4821 Rev 06 fr-FR", "Website PDF + paper on request", "Current"],
                    ["Imaging Console X3", "Germany", "German—Germany", "IFU-4821 Rev 05 → IFU-4821 Rev 05 de-DE", "Archived PDF", "Superseded"],
                  ]}
                />
              </div>
              <div className="prose">
                <p>
                  The matrix should be controlled data, not a manually recreated spreadsheet attached
                  to each release. Where spreadsheets are used, access, ownership, approval, and version
                  history should be defined.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="assess-source-changes"
              title="Assess Every Source Change Before Translation"
              intro="Localization should begin with an approved change assessment—not merely a new file."
            >
              <div className="prose">
                <p>A complete change package should include:</p>
                <ul>
                  <li>the newly approved source and prior approved source;</li>
                  <li>a reliable redline or structured comparison;</li>
                  <li>the change rationale and affected products or markets;</li>
                  <li>safety or regulatory significance;</li>
                  <li>the required release date;</li>
                  <li>approved terminology changes;</li>
                  <li>updated images, UI references, or software builds; and</li>
                  <li>instructions for handling unchanged content.</li>
                </ul>
              </div>
              <div className="priority-note">
                <strong>Workflow note</strong>
                <p>
                  These categories guide localization routing and review depth. They are not medical-device risk classifications.
                </p>
              </div>
              <div className="matrix-stack" aria-label="Change-priority model">
                {changePriorities.map((item) => (
                  <article className="matrix-row" key={item.priority}>
                    <div className="matrix-priority"><span>{item.priority}</span></div>
                    <div>
                      <h3>Typical Content</h3>
                      <p>{item.examples}</p>
                    </div>
                    <div>
                      <h3>Recommended Localization Response</h3>
                      <p>{item.response}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="prose">
                <h3>Do Not Translate a Redline in Isolation</h3>
                <p>
                  A changed sentence may depend on a warning immediately above it, a defined term
                  introduced earlier, a numbered illustration, localized UI text, or a procedural
                  sequence spread across several pages. Review the changed content in the complete IFU.
                </p>
                <h3>Distinguish Content Change From Format Change</h3>
                <p>
                  A new source file may contain no meaningful linguistic change. A small source edit
                  may require substantial target-language work. Separate semantic, terminology,
                  numerical, identifier, layout, cross-reference, image, software-interface, metadata,
                  and publication changes before assigning the localization scope.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="translate-and-review"
              title="Translate and Review Changed Content"
              intro="A controlled multilingual workflow preserves approved legacy content while applying the right level of review to each new or changed element."
            >
              <div className="prose">
                <h3>Prepare a Complete Localization Package</h3>
                <p>Provide the language team with:</p>
                <ul>
                  <li>the approved source revision and marked comparison;</li>
                  <li>product, intended-use, language, and market context;</li>
                  <li>approved terminology and previous approved translations;</li>
                  <li>reference graphics, screenshots, and software context;</li>
                  <li>style, formatting, and restricted-terminology requirements; and</li>
                  <li>the required review and approval pathway.</li>
                </ul>
                <p>
                  For broader planning, see the{" "}
                  <a href="https://www.stepes.com/resources/localization-guides/medical-device-ifu-translation-guide/">
                    Medical Device IFU Translation Guide
                  </a>.
                </p>

                <h3>Use Translation Memory as Controlled Evidence, Not Automatic Approval</h3>
                <p>
                  <a href="https://www.stepes.com/translation-memory/">Translation Memory</a> can
                  identify content that has already been translated and approved. A previous
                  translation should still be reconsidered when the device context, intended user,
                  market, language variant, neighboring content, warning sequence, or quality history
                  has changed. A 100% text match is not always a 100% context match.
                </p>

                <h3>Maintain Medical Device Terminology Centrally</h3>
                <p>
                  A governed <a href="https://www.stepes.com/terminology-management/">Terminology Management</a>{" "}
                  program should record source terms, approved translations, definitions, context,
                  product and market applicability, preferred and prohibited terms, abbreviations,
                  approval status, and change history.
                </p>

                <h3>Apply Risk-Appropriate Human Review</h3>
                <p>
                  Review depth should reflect content risk, intended audience, regulatory significance,
                  novelty, product complexity, language complexity, software or layout dependency, and
                  prior quality history. Back translation may be appropriate when required by a defined
                  process or risk decision, but it should not automatically replace direct expert review.
                </p>

                <h3>Validate the Complete Deliverable</h3>
                <p>Final review should cover:</p>
                <ul>
                  <li>linguistic accuracy and medical technical terminology;</li>
                  <li>warnings, precautions, numbers, values, and units;</li>
                  <li>product identifiers, image callouts, tables, and cross-references;</li>
                  <li>bookmarks, navigation, URLs, QR destinations, and metadata;</li>
                  <li>fonts, text expansion, right-to-left presentation, and accessibility; and</li>
                  <li>comparison with the approved source.</li>
                </ul>
                <p>
                  <a href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</a>{" "}
                  should be integrated with linguistic and technical QA rather than treated as a purely
                  cosmetic final step.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="synchronize-electronic-and-paper"
              title="Synchronize Electronic and Paper Editions"
              intro="Digital and paper delivery should be treated as two outputs of the same approved content state."
            >
              <div className="prose">
                <p>
                  Under the current EU framework, an electronic IFU supplied in addition to a complete
                  paper IFU must remain consistent with the paper content. The same operational principle
                  is useful more broadly: each delivery format should be generated from one approved content state.
                </p>
              </div>
              <div className="sync-diagram" role="img" aria-label="One approved source connected to controlled electronic and paper outputs">
                <div className="sync-source">
                  <span className="sync-label">APPROVED CONTENT STATE</span>
                  <strong>IFU Rev 06</strong>
                  <small>Source + target-language approvals</small>
                </div>
                <div className="sync-line" aria-hidden="true" />
                <div className="sync-outputs">
                  <div><strong>Website</strong><span>Current downloadable edition</span></div>
                  <div><strong>Software</strong><span>Integrated instructions and help</span></div>
                  <div><strong>Device Display</strong><span>On-device content</span></div>
                  <div><strong>Paper Workflow</strong><span>Supplied or on-request edition</span></div>
                  <div><strong>Archive</strong><span>Protected superseded edition</span></div>
                </div>
              </div>
              <div className="prose">
                <h3>Recommended Synchronization Rules</h3>
                <ol>
                  <li><strong>Use the same approved baseline.</strong> Do not maintain independent digital and print masters.</li>
                  <li><strong>Generate outputs through controlled production paths.</strong> Avoid manually recreating content in each channel.</li>
                  <li><strong>Apply one release decision.</strong> Record every applicable channel and language.</li>
                  <li><strong>Verify packaging and access instructions.</strong> Test printed URLs, QR codes, software links, and paper-request instructions.</li>
                  <li><strong>Control paper-on-request production.</strong> Print from an approved repository rather than local folders or email attachments.</li>
                  <li><strong>Record fulfillment where required.</strong> Preserve the requested language, device, edition, dates, and delivery method.</li>
                  <li><strong>Retire superseded print files.</strong> A new electronic release should trigger review of every paper-production repository.</li>
                </ol>
                <h3>Manage Page Numbers and References Carefully</h3>
                <p>
                  Translation can change pagination. Section-based references, controlled heading
                  identifiers, dynamically generated links, language-specific tables of contents,
                  automated bookmarks, and final cross-reference validation are generally more robust
                  than hard-coded page references.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="validate-digital-delivery"
              title="Validate eIFU Websites, Software, and Downloads"
              intro="A linguistically accurate file is not fully controlled if users cannot locate, identify, open, or navigate it reliably."
            >
              <div className="prose">
                <h3>Make Product Identification Unambiguous</h3>
                <p>Users should be able to locate the correct IFU through suitable identifiers such as:</p>
                <ul>
                  <li>device name, product family, and model;</li>
                  <li>catalog number and software version;</li>
                  <li>Basic UDI-DI or UDI-DI, where applicable;</li>
                  <li>market and language; and</li>
                  <li>document number, revision, date, and current or archived status.</li>
                </ul>

                <h3>Use Clear Language and Locale Labels</h3>
                <p>
                  Use language names and locale distinctions where necessary, such as French—France,
                  French—Canada, Portuguese—Brazil, Portuguese—Portugal, Chinese—Simplified, and
                  Chinese—Traditional. Flags alone should not be used as language labels.
                </p>

                <h3>Test Stable Access and File Integrity</h3>
                <p>Operational testing should include:</p>
                <ul>
                  <li>direct links, redirects, QR codes, and download behavior;</li>
                  <li>browser compatibility, mobile presentation, and language-selector behavior;</li>
                  <li>search results, authentication barriers, and error pages;</li>
                  <li>content-delivery caching, backup, and recovery procedures; and</li>
                  <li>protection against unauthorized content changes.</li>
                </ul>

                <h3>Validate Software-Integrated Instructions</h3>
                <p>Confirm that:</p>
                <ul>
                  <li>the correct language package loads;</li>
                  <li>the eIFU matches the software and device version;</li>
                  <li>navigation labels match the localized interface;</li>
                  <li>embedded links open the correct language edition;</li>
                  <li>text is not truncated and warnings remain prominent;</li>
                  <li>keyboard, touch, and right-to-left behavior remain usable; and</li>
                  <li>offline or backup access behaves as intended.</li>
                </ul>
                <p>
                  Use the{" "}
                  <a href="https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/">
                    Medical Device Software Localization Checklist
                  </a>{" "}
                  for a deeper software-focused validation workflow.
                </p>

                <h3>Control Archived Editions</h3>
                <p>
                  Archived eIFUs should remain retrievable where required without appearing to be the
                  current edition. Use a visible archived or superseded label, provide a route to the
                  current edition, preserve publication dates, protect file integrity, apply documented
                  retention rules, and prevent accidental overwriting.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="use-ai-with-control"
              title="Use AI Without Losing Control"
              intro="AI can improve multilingual eIFU operations when it is assigned well-defined tasks inside a governed workflow."
            >
              <div className="prose">
                <h3>Productive Uses of AI and Automation</h3>
                <ul>
                  <li>compare source revisions and identify changed segments;</li>
                  <li>classify possible change impact for human confirmation;</li>
                  <li>detect terminology candidates and inconsistent usage;</li>
                  <li>pretranslate suitable new content;</li>
                  <li>flag numbers, units, product names, and missing translations;</li>
                  <li>compare warnings across languages;</li>
                  <li>find broken links and incorrect metadata; and</li>
                  <li>route higher-risk content to specialist review.</li>
                </ul>
                <h3>Keep Accountable Human Judgment Where It Matters Most</h3>
                <p>
                  Professional human review remains particularly important for intended use,
                  indications, contraindications, warnings, emergency instructions, procedural steps,
                  clinical or performance statements, nuanced risk communication, and market-specific
                  regulatory language. Fluency is not approval.
                </p>
              </div>
              <ResponsiveTable
                headings={["Content Type", "Possible Automation", "Required Control"]}
                rows={aiRoutes}
              />
              <div className="prose">
                <h3>Establish AI Governance</h3>
                <p>
                  Define approved tools, data-handling requirements, confidentiality controls,
                  permitted content categories, human-review thresholds, audit-log expectations,
                  terminology sources, output-retention rules, exception handling, and final approval
                  authority. Automation should accelerate a controlled process, not create a parallel one.
                </p>
                <EditorialLink href="https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-medical-devices/">
                  Explore AI Translation for Medical Devices
                </EditorialLink>
              </div>
            </GuideSection>

            <GuideSection
              id="roles-and-release-authority"
              title="Define Roles and Release Authority"
              intro="Multilingual version control often fails at organizational handoffs rather than during translation."
            >
              <div className="prose">
                <p>A responsibility model should identify who may:</p>
                <ul>
                  <li>approve the source and determine market applicability;</li>
                  <li>classify a change and approve terminology;</li>
                  <li>approve each language edition;</li>
                  <li>release a digital file or software-integrated edition;</li>
                  <li>authorize a safety notification;</li>
                  <li>retire an obsolete version; and</li>
                  <li>provide an archived or paper copy.</li>
                </ul>
              </div>
              <ResponsiveTable headings={["Function", "Primary Responsibility"]} rows={roleRows} />
              <div className="prose">
                <h3>Separate Preparation From Approval</h3>
                <p>
                  The person publishing a file should not have to infer whether it is approved. A
                  release package should state what is being released, for which product, in which
                  market and language, through which channel, under which revision, on which date, and
                  with whose approval.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              id="common-version-control-failures"
              title="Avoid Common Multilingual Version-Control Failures"
              intro="The most damaging failures are often ordinary operational shortcuts that break traceability or allow channels to drift apart."
            >
              <div className="failure-list">
                {commonFailures.map((item) => (
                  <article className="failure-row" key={item.title}>
                    <h3>{item.title}</h3>
                    <div className="failure-detail">
                      <div>
                        <strong>Risk</strong>
                        <p>{item.risk}</p>
                      </div>
                      <div>
                        <strong>Control</strong>
                        <p>{item.control}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </GuideSection>

            <GuideSection
              id="multilingual-eifu-release-checklist"
              title="Multilingual eIFU Release Checklist"
              intro="Use this checklist to verify the source, language, technical production, delivery channels, archive, and final release before publication."
            >
              <div className="checklist-grid">
                {checklistGroups.map((group) => (
                  <section className="checklist-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </GuideSection>

            <GuideSection
              id="frequently-asked-questions"
              title="Frequently Asked Questions"
              intro="Practical answers to common questions about electronic IFUs, multilingual editions, revision control, AI, and digital delivery."
            >
              <div className="faq-panel">
                {faqs.map((item, index) => {
                  const isOpen = openFaq === index;
                  const answerId = `faq-answer-${index}`;
                  return (
                    <article className="faq-item" key={item.question}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        >
                          <span>{item.question}</span>
                          <ChevronIcon open={isOpen} />
                        </button>
                      </h3>
                      <div id={answerId} hidden={!isOpen} className={isOpen ? "faq-answer is-open" : "faq-answer"}>
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </GuideSection>

            <GuideSection
              id="sources-and-references"
              title="Sources and References"
              intro="The guide draws on official regulatory, standards, and quality-system sources. Product- and market-specific requirements should be confirmed before implementation."
            >
              <div className="source-list">
                {sources.map((source) => (
                  <article className="source-row" key={source.title}>
                    <div>
                      <h3>{source.title}</h3>
                      <p className="source-organization">{source.organization}</p>
                      <p>{source.text}</p>
                    </div>
                    <EditorialLink href={source.href} external>
                      {source.action}
                    </EditorialLink>
                  </article>
                ))}
              </div>
            </GuideSection>

            <section id="plan-a-controlled-eifu-program" className="conclusion-section">
              <h2>Plan a More Controlled eIFU Program</h2>
              <p>
                Multilingual eIFU management is most reliable when translation, labeling, software,
                quality, regulatory, and publishing activities operate as one connected lifecycle.
                Begin with the approved source, product–market–language matrix, change-assessment
                method, review pathway, delivery channels, release authority, and archive process.
              </p>
              <blockquote>
                Is the correct approved information available to the correct user, for the correct
                device, in the correct language and format—and can your team demonstrate how it got there?
              </blockquote>
            </section>
          </div>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-heading">
            <h2 id="related-title">Related Medical Device Translation Resources</h2>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <EditorialLink href={resource.href}>{resource.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Coordinate Translation, Review, Production, and Release Across Every eIFU Edition</h2>
            <p>
              Stepes helps medical device teams manage professional translation, terminology,
              multilingual production, software localization, quality review, and controlled delivery
              across global content programs.
            </p>
          </div>
          <div className="final-actions">
            <a className="button button-primary" href="https://www.stepes.com/contact-us/">
              <span>Discuss Your eIFU Program</span>
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="https://app.stepes.com/quote/">
              Request a Translation Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #c11d63;
    --magenta-dark: #9f1d55;
    --magenta-deep: #7a1542;
    --blush: #fdf2f7;
    --pink-light: #f2a7c6;
    --ink: #121826;
    --text: #354056;
    --muted: #687286;
    --line: #dde2ea;
    --line-dark: rgba(255, 255, 255, 0.18);
    --surface: #f6f7fa;
    --dark: #171421;
    --white: #ffffff;
    --shadow: 0 24px 70px rgba(21, 24, 37, 0.08);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .stepes-guide {
    color: var(--text);
    background: var(--white);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    line-height: 1.7;
    overflow-x: clip;
  }

  .stepes-guide a { color: var(--magenta); text-decoration: none; overflow-wrap: anywhere; }
  .stepes-guide a:hover { color: var(--magenta-dark); }
  .stepes-guide a:focus-visible,
  .stepes-guide button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.28);
    outline-offset: 4px;
  }

  .shell {
    width: min(1280px, 100%);
    margin: 0 auto;
    padding-inline: 56px;
  }

  .reading-shell { max-width: 900px; }

  .eyebrow,
  .toc-label,
  .callout-label,
  .source-kicker,
  .sync-label {
    margin: 0 0 16px;
    color: var(--magenta);
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .eyebrow-dark { color: var(--pink-light) !important; }

  h1, h2, h3, p, ul, ol, blockquote { margin-top: 0; }
  h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
  h1 { margin-bottom: 24px; font-size: 48px; line-height: 1.08; }
  h2 { margin-bottom: 24px; font-size: 36px; line-height: 1.18; }
  h3 { margin-bottom: 10px; font-size: 24px; line-height: 1.28; }
  p { margin-bottom: 24px; }

  .guide-hero {
    background:
      radial-gradient(circle at 88% 16%, rgba(193, 29, 99, 0.08), transparent 24%),
      linear-gradient(180deg, #fafbfe 0%, #ffffff 100%);
    border-bottom: 1px solid var(--line);
  }

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding-top: 24px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }

  .breadcrumb a { color: #555f73; }
  .breadcrumb a,
  .breadcrumb span { overflow-wrap: anywhere; }
  .breadcrumb a:hover { color: var(--magenta); }
  .breadcrumb span[aria-current="page"] { color: var(--ink); }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
    gap: 72px;
    align-items: center;
    padding-block: 76px 100px;
  }

  .hero-copy { max-width: 710px; }
  .hero-deck { max-width: 690px; color: #465168; font-size: 20px; line-height: 1.58; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin: 34px 0 24px; }
  .guide-meta {
    display: grid;
    grid-template-columns: 0.8fr 1.35fr 1.25fr;
    gap: 0;
    margin-top: 34px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .guide-meta > div { padding: 18px 18px 18px 0; }
  .guide-meta > div + div { padding-left: 20px; border-left: 1px solid var(--line); }
  .guide-meta span { display: block; margin-bottom: 5px; color: var(--muted); font-size: 14px; font-weight: 400; line-height: 1.4; }
  .guide-meta strong { display: block; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.45; }

  .button {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease;
  }

  .button svg,
  .editorial-link svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: 0 0 auto;
  }

  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible {
    color: #ffffff !important;
  }

  .button-primary,
  .button-primary:link,
  .button-primary:visited { background: var(--magenta); }
  .button-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .button-primary svg,
  .button-primary svg * { stroke: #ffffff !important; color: #ffffff !important; }

  .button-secondary,
  .button-secondary:link,
  .button-secondary:visited {
    color: var(--ink);
    background: var(--white);
    border-color: #cfd5df;
  }
  .button-secondary:hover { color: var(--magenta); border-color: rgba(193, 29, 99, 0.48); }

  .hero-visual {
    position: relative;
    min-height: 490px;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: rgba(255,255,255,0.9);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .visual-orbit {
    position: absolute;
    border: 1px solid rgba(193, 29, 99, 0.18);
    border-radius: 50%;
  }
  .visual-orbit-one { width: 360px; height: 360px; left: 50%; top: 52%; transform: translate(-50%, -50%); }
  .visual-orbit-two { width: 260px; height: 260px; left: 50%; top: 52%; transform: translate(-50%, -50%); border-color: rgba(46, 54, 72, 0.15); }

  .source-document {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: 190px;
    min-height: 190px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border: 1px solid rgba(193, 29, 99, 0.24);
    border-radius: 26px;
    background: var(--white);
    text-align: center;
    box-shadow: 0 18px 40px rgba(30, 31, 47, 0.1);
  }
  .source-icon { width: 44px; height: 44px; margin-bottom: 12px; color: var(--magenta); }
  .source-icon svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
  .source-document strong { color: var(--ink); font-size: 22px; font-weight: 600; }
  .source-document small { margin-top: 4px; color: var(--muted); font-size: 14px; line-height: 1.4; }
  .source-kicker { margin-bottom: 8px; }

  .output-node {
    position: absolute;
    z-index: 2;
    width: 136px;
    min-height: 78px;
    padding: 14px 16px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #fbfcfe;
    box-shadow: 0 12px 28px rgba(30, 31, 47, 0.06);
  }
  .output-node span { display: block; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.25; }
  .output-node small { display: block; margin-top: 4px; color: var(--muted); font-size: 14px; line-height: 1.35; }
  .node-web { left: 24px; top: 54px; }
  .node-software { right: 24px; top: 54px; }
  .node-paper { left: 24px; bottom: 54px; }
  .node-archive { right: 24px; bottom: 54px; }

  .language-strip {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 22px;
    transform: translateX(-50%);
    display: flex;
    gap: 7px;
  }
  .language-strip span {
    padding: 5px 9px;
    border-radius: 999px;
    background: var(--blush);
    color: var(--magenta-deep);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
  }

  .opening-section { padding-block: 88px 80px; }
  .opening-section p { font-size: 18px; }
  .opening-lead { color: var(--ink); font-size: 27px !important; line-height: 1.45; letter-spacing: -0.015em; }

  .guidance-callout {
    margin-top: 36px;
    padding: 26px 28px;
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 24px;
    border-left: 3px solid var(--magenta);
    background: #f8f9fc;
  }
  .guidance-callout strong { color: var(--ink); font-size: 16px; font-weight: 600; }
  .guidance-callout p { margin: 0; font-size: 16px; line-height: 1.65; }

  .summary-section { padding-block: 88px; background: var(--surface); }
  .summary-section .shell { display: grid; grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr); gap: 80px; }
  .summary-heading { position: sticky; top: 110px; align-self: start; }
  .summary-heading h2 { max-width: 470px; }
  .takeaway-list { border-top: 1px solid var(--line); }
  .takeaway-row {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 20px;
    padding: 26px 0;
    border-bottom: 1px solid var(--line);
  }
  .takeaway-marker { width: 8px; height: 8px; margin-top: 10px; border-radius: 50%; background: var(--magenta); }
  .takeaway-row h3 { margin-bottom: 6px; font-size: 21px; }
  .takeaway-row p { margin: 0; font-size: 16px; line-height: 1.65; }

  .article-region { padding-block: 96px; }
  .article-layout {
    display: grid;
    grid-template-columns: 252px minmax(0, 1fr);
    gap: 64px;
    max-width: 1220px;
  }
  .toc-rail { align-self: start; }
  .toc-inner { position: sticky; top: 104px; padding-right: 10px; }
  .toc-label { margin-bottom: 14px; }
  .toc-inner nav {
    max-height: calc(100vh - 150px);
    overflow-y: auto;
    overscroll-behavior: contain;
    border-left: 1px solid var(--line);
    scrollbar-width: thin;
  }
  .toc-inner a {
    display: block;
    padding: 7px 0 7px 18px;
    color: #5b6578;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.42;
    border-left: 2px solid transparent;
    transform: translateX(-1px);
  }
  .toc-inner a:hover,
  .toc-inner a:focus-visible,
  .toc-inner a.is-active {
    color: var(--magenta);
    border-left-color: var(--magenta);
  }
  .toc-inner a.is-active { font-weight: 600; }

  .mobile-toc { display: none; }
  .article-main { min-width: 0; }
  .guide-section { scroll-margin-top: 116px; margin-bottom: 96px; }
  .guide-section > h2,
  .guide-section > .section-intro,
  .guide-section > .prose,
  .conclusion-section > * { max-width: 760px; }
  .section-intro { margin-bottom: 34px; color: #465168; font-size: 19px; line-height: 1.65; }
  .prose { font-size: 18px; }
  .prose p,
  .prose li { font-size: 18px; }
  .prose h3 { margin-top: 42px; }
  .prose ul,
  .prose ol { margin: 0 0 28px; padding-left: 26px; }
  .prose li { margin-bottom: 10px; padding-left: 5px; line-height: 1.65; }
  .prose a { font-weight: 600; }

  .table-wrap { width: 100%; margin: 34px 0 40px; overflow: hidden; border: 1px solid var(--line); border-radius: 22px; }
  .table-wrap table { width: 100%; border-collapse: collapse; table-layout: fixed; background: var(--white); }
  .table-wrap th,
  .table-wrap td { padding: 18px 20px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; font-size: 16px; line-height: 1.55; }
  .table-wrap th { color: var(--ink); background: #f6f7fa; font-weight: 600; }
  .table-wrap tbody tr:last-child td { border-bottom: 0; }
  .table-wrap td:first-child { color: var(--ink); font-weight: 600; }

  .source-note {
    margin: 30px 0 38px;
    padding: 20px 22px;
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 18px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    font-size: 16px;
    line-height: 1.6;
  }
  .source-note strong { color: var(--ink); font-size: 16px; font-weight: 600; }

  .framework-section {
    scroll-margin-top: 116px;
    width: 100%;
    margin: 8px 0 96px;
    padding: 54px;
    border-radius: 30px;
    background: var(--dark);
    color: rgba(255,255,255,0.78);
    overflow: hidden;
  }
  .framework-section h2,
  .framework-section h3 { color: var(--white); }
  .framework-section h2 { max-width: 700px; }
  .framework-intro { max-width: 760px; margin-bottom: 38px; color: rgba(255,255,255,0.78); font-size: 18px; }
  .framework-grid { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
  .framework-stage { grid-column: span 2; min-height: 230px; padding: 25px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
  .framework-stage:nth-child(7) { grid-column: span 4; }
  .stage-number { display: inline-block; margin-bottom: 30px; color: var(--pink-light); font-size: 16px; font-weight: 600; letter-spacing: 0.08em; }
  .framework-stage h3 { margin-bottom: 10px; font-size: 21px; }
  .framework-stage p { margin: 0; font-size: 16px; line-height: 1.58; }
  .framework-principle { margin-top: 36px; padding-top: 28px; display: grid; grid-template-columns: 180px 1fr; gap: 28px; border-top: 1px solid var(--line-dark); }
  .framework-principle strong { color: var(--white); font-size: 16px; font-weight: 600; }
  .framework-principle p { margin: 0; font-size: 16px; line-height: 1.65; }

  .editorial-callout,
  .example-panel,
  .regulatory-snapshot {
    margin: 42px 0;
    padding: 34px 36px;
    border-radius: 24px;
    background: var(--blush);
  }
  .regulatory-snapshot > h3 { max-width: 720px; }
  .regulatory-snapshot > p:not(.callout-label) { max-width: 760px; font-size: 16px; line-height: 1.65; }
  .regulatory-snapshot .table-wrap { margin-bottom: 0; }
  .editorial-callout h3,
  .example-panel h3 { max-width: 660px; }
  .editorial-callout p:last-child { margin-bottom: 0; font-size: 16px; }
  .example-panel .table-wrap { margin-bottom: 0; background: var(--white); }

  .priority-note {
    margin: 30px 0 0;
    padding: 20px 22px;
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 20px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .priority-note strong { color: var(--ink); font-size: 16px; font-weight: 600; }
  .priority-note p { margin: 0; font-size: 16px; line-height: 1.6; }
  .matrix-stack { margin: 0 0 42px; }
  .matrix-row {
    display: grid;
    grid-template-columns: 170px 1fr 1.22fr;
    gap: 28px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }
  .matrix-row h3 { margin-bottom: 6px; color: #5d6678; font-size: 16px; letter-spacing: 0; }
  .matrix-row p { margin: 0; font-size: 16px; line-height: 1.6; }
  .matrix-priority span { color: var(--ink); font-size: 18px; font-weight: 600; line-height: 1.4; }

  .sync-diagram { margin: 36px 0 44px; padding: 38px; border: 1px solid var(--line); border-radius: 28px; background: #fbfcfe; }
  .sync-source { max-width: 410px; margin: 0 auto; padding: 26px; border: 1px solid rgba(193,29,99,0.24); border-radius: 22px; background: var(--white); text-align: center; box-shadow: 0 14px 34px rgba(30,31,47,0.06); }
  .sync-source strong { display: block; color: var(--ink); font-size: 24px; font-weight: 600; }
  .sync-source small { color: var(--muted); font-size: 14px; }
  .sync-line { width: 1px; height: 34px; margin: 0 auto; background: rgba(193,29,99,0.45); }
  .sync-outputs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
  .sync-outputs div { min-height: 118px; padding: 18px; border: 1px solid var(--line); border-radius: 18px; background: var(--white); }
  .sync-outputs strong { display: block; margin-bottom: 8px; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.35; }
  .sync-outputs span { display: block; color: var(--muted); font-size: 16px; line-height: 1.45; }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 40px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
  }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link svg { transition: transform 160ms ease; }

  .failure-list { border-top: 1px solid var(--line); }
  .failure-row { padding: 30px 0; border-bottom: 1px solid var(--line); }
  .failure-row > h3 { max-width: 760px; margin-bottom: 18px; font-size: 21px; }
  .failure-detail { display: grid; grid-template-columns: 1fr 1.35fr; gap: 42px; }
  .failure-detail strong { display: block; margin-bottom: 6px; color: var(--ink); font-size: 16px; font-weight: 600; }
  .failure-detail p { margin: 0; font-size: 16px; line-height: 1.6; }

  .checklist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; }
  .checklist-group { padding: 28px; border: 1px solid var(--line); border-radius: 22px; background: var(--white); }
  .checklist-group h3 { margin-bottom: 20px; font-size: 21px; }
  .checklist-group ul { margin: 0; padding: 0; list-style: none; }
  .checklist-group li { display: grid; grid-template-columns: 22px 1fr; gap: 12px; margin-bottom: 14px; font-size: 16px; line-height: 1.55; }
  .checklist-group li:last-child { margin-bottom: 0; }
  .check-icon { width: 20px; height: 20px; margin-top: 2px; fill: none; stroke: var(--magenta); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item h3 { margin: 0; }
  .faq-item button { width: 100%; min-height: 74px; display: grid; grid-template-columns: 1fr 24px; gap: 20px; align-items: center; padding: 19px 0; border: 0; background: transparent; color: var(--ink); text-align: left; font: inherit; font-size: 18px; font-weight: 600; cursor: pointer; }
  .chevron { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform 180ms ease; }
  .chevron.is-open { transform: rotate(180deg); }
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 220ms ease; }
  .faq-answer > p { overflow: hidden; margin: 0; max-width: 790px; font-size: 16px; line-height: 1.7; }
  .faq-answer.is-open { grid-template-rows: 1fr; }
  .faq-answer.is-open > p { padding-bottom: 24px; }

  .source-list { border-top: 1px solid var(--line); }
  .source-row { display: grid; grid-template-columns: 1fr auto; gap: 36px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .source-row h3 { margin-bottom: 4px; font-size: 19px; overflow-wrap: anywhere; }
  .source-row p { margin-bottom: 7px; font-size: 16px; line-height: 1.55; }
  .source-row p:last-child { margin-bottom: 0; }
  .source-organization { color: var(--muted); }

  .conclusion-section { scroll-margin-top: 116px; margin-top: 20px; padding: 54px 0 8px; border-top: 2px solid var(--ink); }
  .conclusion-section p { font-size: 18px; }
  .conclusion-section blockquote { max-width: 820px; margin: 38px 0 0; padding: 28px 32px; border-left: 3px solid var(--magenta); background: var(--blush); color: var(--ink); font-size: 24px; line-height: 1.5; font-weight: 600; }

  .related-section { padding-block: 88px; background: #f7f8fb; border-top: 1px solid var(--line); }
  .related-heading { max-width: 760px; margin-bottom: 42px; }
  .related-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .related-item { min-height: 280px; display: flex; flex-direction: column; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.64); }
  .related-item h3 { font-size: 22px; }
  .related-item p { flex: 1; font-size: 16px; line-height: 1.65; }

  .final-cta { padding-block: 88px; background: var(--white); }
  .final-cta-inner { display: grid; grid-template-columns: minmax(0, 1.3fr) auto; gap: 64px; align-items: center; padding-block: 58px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: linear-gradient(90deg, var(--blush), #ffffff 75%); }
  .final-cta h2 { max-width: 760px; }
  .final-cta p:not(.eyebrow) { max-width: 730px; margin-bottom: 0; font-size: 18px; }
  .final-actions { min-width: 280px; display: flex; flex-direction: column; align-items: stretch; gap: 12px; }

  @media (max-width: 1180px) {
    .shell { padding-inline: 40px; }
    .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(380px, 0.82fr); gap: 48px; }
    .article-layout { grid-template-columns: 232px minmax(0, 1fr); gap: 48px; }
    .framework-section { padding: 46px; }
    .framework-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .framework-stage,
    .framework-stage:nth-child(7) { grid-column: auto; }
    .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .sync-outputs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 960px) {
    .shell { padding-inline: 24px; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero-grid { grid-template-columns: 1fr; padding-block: 64px 80px; }
    .hero-copy { max-width: 800px; }
    .guide-meta { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .hero-visual { min-height: 440px; max-width: 680px; width: 100%; margin-inline: auto; }
    .node-web, .node-software { top: 24px; }
    .node-paper, .node-archive { bottom: 24px; }
    .language-strip { display: none; }
    .opening-section, .summary-section, .related-section, .final-cta { padding-block: 80px; }
    .article-region { padding-block: 80px; }
    .guide-section { margin-bottom: 80px; }
    .summary-section .shell { grid-template-columns: 1fr; gap: 32px; }
    .summary-heading { position: static; }
    .summary-heading h2 { max-width: 760px; }
    .article-layout { display: block; max-width: 900px; }
    .toc-rail { display: none; }
    .mobile-toc { display: block; margin-bottom: 56px; border: 1px solid var(--line); border-radius: 20px; background: #fbfcfe; overflow: hidden; }
    .mobile-toc > button { width: 100%; min-height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; border: 0; background: transparent; color: var(--ink); font: inherit; font-size: 17px; font-weight: 600; cursor: pointer; }
    .mobile-toc-list { display: grid; grid-template-rows: 0fr; border-top: 0 solid var(--line); transition: grid-template-rows 180ms ease; }
    .mobile-toc-list.is-open { grid-template-rows: 1fr; border-top-width: 1px; }
    .mobile-toc-list > a { overflow: hidden; }
    .mobile-toc-list.is-open > a { min-height: 46px; display: flex; align-items: center; padding: 10px 20px; color: #525d71; font-size: 16px; line-height: 1.45; border-bottom: 1px solid var(--line); }
    .mobile-toc-list.is-open > a:last-child { border-bottom: 0; }
    .mobile-toc-list.is-open > a.is-active { color: var(--magenta); font-weight: 600; }
    .article-main { max-width: 840px; margin: 0 auto; }
    .framework-section { margin-bottom: 80px; }
    .framework-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .matrix-row { grid-template-columns: 150px 1fr; }
    .matrix-row > div:last-child { grid-column: 2; }
    .sync-outputs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .final-cta-inner { grid-template-columns: 1fr; }
    .final-actions { min-width: 0; max-width: 420px; }
  }

  @media (max-width: 820px) {
    .guide-meta { grid-template-columns: 1fr; }
    .guide-meta > div { padding: 15px 0; }
    .guide-meta > div + div { padding-left: 0; border-left: 0; border-top: 1px solid var(--line); }
    .guide-meta strong { overflow-wrap: anywhere; }
    .checklist-grid { grid-template-columns: 1fr; }
    .failure-detail { grid-template-columns: 1fr; gap: 18px; }
    .source-row { grid-template-columns: 1fr; gap: 12px; align-items: start; }
    .source-row .editorial-link { justify-self: start; }
    .final-actions { width: 100%; }

    .table-wrap { border-radius: 18px; overflow: visible; border: 0; }
    .table-wrap table,
    .table-wrap tbody,
    .table-wrap tr,
    .table-wrap td { display: block; width: 100%; }
    .table-wrap thead {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .table-wrap tr { margin-bottom: 16px; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: var(--white); }
    .table-wrap td { display: grid; grid-template-columns: minmax(132px, 0.38fr) minmax(0, 0.62fr); gap: 18px; padding: 15px 17px; border-bottom: 1px solid var(--line); font-size: 16px; overflow-wrap: anywhere; }
    .table-wrap td::before { content: attr(data-label); color: var(--muted); font-size: 14px; font-weight: 600; line-height: 1.45; }
    .table-wrap td:first-child { background: #f7f8fb; }
    .table-wrap td:last-child { border-bottom: 0; }
  }

  @media (max-width: 720px) {
    .stepes-guide { font-size: 17px; }
    .shell { padding-inline: 20px; }
    h1 { font-size: 38px; line-height: 1.1; }
    h2 { font-size: 30px; }
    h3 { font-size: 20px; }
    .breadcrumb { padding-top: 18px; font-size: 14px; gap: 6px; }
    .hero-grid { gap: 44px; padding-block: 54px 68px; }
    .hero-deck { font-size: 18px; }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .hero-actions .button { white-space: normal; }
    .guide-meta { grid-template-columns: 1fr; }
    .guide-meta > div { padding: 14px 0; }
    .guide-meta > div + div { padding-left: 0; border-left: 0; border-top: 1px solid var(--line); }
    .button { width: 100%; min-height: 54px; padding-inline: 18px; }
    .hero-visual { min-height: 380px; }
    .source-document { width: 150px; min-height: 150px; }
    .visual-orbit-one { width: 310px; height: 310px; }
    .visual-orbit-two { width: 220px; height: 220px; }
    .source-document strong { font-size: 20px; }
    .output-node { width: 116px; min-height: 70px; padding: 12px; }
    .output-node span { font-size: 15px; }
    .output-node small { font-size: 13px; }
    .node-web, .node-paper { left: 12px; }
    .node-software, .node-archive { right: 12px; }
    .language-strip { bottom: 14px; gap: 4px; }
    .language-strip span { padding: 4px 7px; font-size: 12px; }
    .opening-section, .summary-section, .related-section, .final-cta { padding-block: 68px; }
    .opening-section p,
    .prose,
    .prose p,
    .prose li,
    .section-intro,
    .conclusion-section p { font-size: 17px; }
    .opening-lead { font-size: 23px !important; }
    .guidance-callout { grid-template-columns: 1fr; gap: 8px; padding: 22px; }
    .takeaway-row { grid-template-columns: 16px 1fr; gap: 14px; }
    .article-region { padding-block: 68px; }
    .guide-section { margin-bottom: 72px; scroll-margin-top: 96px; }
    .mobile-toc { margin-bottom: 52px; }
    .source-note { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
    .framework-section { margin-bottom: 72px; padding: 32px 24px; border-radius: 24px; scroll-margin-top: 96px; }
    .framework-grid { grid-template-columns: 1fr; }
    .framework-stage { min-height: 0; padding: 24px 0; border-right: 0; border-left: 0; }
    .framework-stage:nth-child(5) { grid-column: auto; }
    .stage-number { margin-bottom: 10px; }
    .framework-principle { grid-template-columns: 1fr; gap: 8px; }
    .editorial-callout, .example-panel, .regulatory-snapshot { padding: 26px 22px; }
    .priority-note { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
    .matrix-row { grid-template-columns: 1fr; gap: 18px; }
    .matrix-row > div:last-child { grid-column: auto; }
    .matrix-row h3 { margin-top: 0; }
    .sync-diagram { padding: 24px 18px; }
    .sync-outputs { grid-template-columns: 1fr; }
    .sync-outputs div { min-height: 0; }
    .failure-detail { grid-template-columns: 1fr; gap: 18px; }
    .checklist-grid { grid-template-columns: 1fr; }
    .checklist-group { padding: 24px 20px; }
    .source-row { grid-template-columns: 1fr; gap: 12px; }
    .source-row .editorial-link { justify-self: start; }
    .conclusion-section blockquote { padding: 24px 22px; font-size: 21px; }
    .related-grid { grid-template-columns: 1fr; }
    .related-item { min-height: 0; padding: 28px 24px; }
    .final-cta-inner { padding-block: 42px; }
    .final-actions { max-width: none; }

  }

  @media (max-width: 390px) {
    .hero-visual { min-height: 350px; }
    .source-document { top: 49%; width: 150px; min-height: 150px; padding: 18px; }
    .source-icon { width: 38px; height: 38px; }
    .output-node { width: 104px; padding: 10px; }
    .node-web, .node-software { top: 20px; }
    .node-paper, .node-archive { bottom: 20px; }
    .output-node small { display: none; }
    .language-strip span:nth-child(n+4) { display: none; }
    .table-wrap td { grid-template-columns: 1fr; gap: 5px; padding: 14px 15px; }
  }

  @media (max-width: 320px) {
    .shell { padding-inline: 20px; }
    .hero-visual { min-height: 330px; }
    .visual-orbit-one { width: 260px; height: 260px; }
    .visual-orbit-two { width: 185px; height: 185px; }
    .source-document { width: 138px; min-height: 138px; }
    .source-document strong { font-size: 18px; }
    .source-document small { display: none; }
    .output-node { width: 92px; min-height: 52px; }
    .output-node span { font-size: 14px; }
    .language-strip { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
