const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="m4.5 10.2 3.3 3.3 7.7-7.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6.5 3.5h7l4 4v13h-11z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13.5 3.5v4h4M9 12h6M9 15h6M9 9h2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.8 12h16.4M12 3.5c2.4 2.2 3.6 5 3.6 8.5S14.4 18.3 12 20.5M12 3.5C9.6 5.7 8.4 8.5 8.4 12s1.2 6.3 3.6 8.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 3.5 19 6v5.3c0 4.4-2.7 7.7-7 9.2-4.3-1.5-7-4.8-7-9.2V6z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m8.5 11.8 2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SesenSmPCTranslationServicesWireframeV3() {
  const smpcSections = [
    {
      number: "01",
      title: "Name of the Medicinal Product",
      text: "Control product name, strength, pharmaceutical form, and recurring references across the SmPC and connected product information.",
    },
    {
      number: "02",
      title: "Qualitative & Quantitative Composition",
      text: "Maintain active-substance terminology, quantities, concentrations, units, and relevant excipient information with focused numeric QA.",
    },
    {
      number: "03",
      title: "Pharmaceutical Form",
      text: "Apply controlled pharmaceutical terminology, including recognized reference terminology where appropriate for the project.",
    },
    {
      number: "04",
      title: "Clinical Particulars",
      text: "Translate indications, posology and method of administration, contraindications, warnings, interactions, pregnancy and lactation, effects on driving and machine use, adverse reactions, and overdose with heightened clinical and safety attention.",
      featured: true,
    },
    {
      number: "05",
      title: "Pharmacological Properties",
      text: "Support pharmacodynamic, pharmacokinetic, and preclinical safety content with consistent scientific terminology and measurement handling.",
    },
    {
      number: "06",
      title: "Pharmaceutical Particulars",
      text: "Maintain terminology across excipients, incompatibilities, shelf life, storage, container information, handling, and disposal instructions.",
    },
    {
      number: "07–10",
      title: "Authorization & Revision Information",
      text: "Support controlled multilingual maintenance of authorization holder, authorization number, authorization or renewal dates, and revision information.",
    },
  ];

  const terminologyItems = [
    ["QRD Structure", "Maintain applicable headings, ordering, standard language, document structure, and current product-information conventions."],
    ["EDQM Standard Terms", "Support recognized terminology for dosage forms, routes and methods of administration, units of presentation, containers, closures, and delivery devices where applicable."],
    ["MedDRA Terminology Where Applicable", "Use appropriate standardized medical terminology where relevant, including safety terminology associated with adverse-reaction content."],
    ["Approved Product Language", "Incorporate client-approved translations, authorized language versions, product names, strengths, terminology databases, style requirements, and prior decisions."],
    ["Translation Memory", "Reuse relevant established product language instead of recreating approved wording during every variation, update, or market expansion."],
    ["Cross-Language Consistency", "Use structured QA to help identify terminology drift, numeric discrepancies, omissions, or recurring-content differences for expert review."],
  ];

  const workflowSteps = [
    ["01", "Source & Scope Review", "Review the current SmPC, prior versions, target languages, existing approved translations, related PIL and labeling content, reference materials, and delivery requirements."],
    ["02", "Terminology Preparation", "Organize approved product terminology, QRD conventions, EDQM references, safety terminology, client glossaries, translation memory, and existing language decisions."],
    ["03", "Specialized Pharmaceutical Translation", "Assign qualified native-language linguists with pharmaceutical, medical, regulatory, and therapeutic-area experience appropriate to the project."],
    ["04", "Independent Linguistic Review", "Review accuracy, completeness, terminology, clinical meaning, numbers, structure, consistency, and source-to-target correspondence."],
    ["05", "Cross-Document Consistency", "Where related assets are in scope, reconcile terminology and product information across the SmPC, PIL, labeling, packaging, and other approved product information."],
    ["06", "Technical & AI-Assisted QA", "Use automated and AI-assisted checks to surface potential issues involving numbers, units, terminology, omissions, repetitions, version changes, formatting, and structure."],
    ["07", "Linguistic Review & Comment Resolution", "Prepare reviewer-ready files, manage tracked and clean versions, implement approved linguistic feedback, reconcile terminology, and complete multilingual QA."],
    ["08", "Finalization & Lifecycle Readiness", "Deliver controlled language versions and retain approved terminology, translation memory, reviewer decisions, and version history for subsequent updates."],
  ];

  const lifecycleItems = [
    ["Variation & Product Changes", "New indications, posology changes, strengths, pharmaceutical forms, composition changes, storage conditions, and other approved updates."],
    ["Safety Updates", "Warnings, contraindications, adverse-reaction information, interactions, pregnancy and lactation content, and other safety-driven product-information changes."],
    ["Delta Translation", "Focus linguistic work on verified changed content while preserving relevant approved wording and checking contextual dependencies."],
    ["Translation Memory Reuse", "Carry validated multilingual content forward rather than unnecessarily retranslating unchanged sections."],
    ["Connected-Asset Review", "Assess corresponding PIL, labeling, packaging, or other product-information content when the scope requires synchronized updates."],
    ["New Markets & Languages", "Use established terminology, reference content, translation memory, and product knowledge when expanding into additional markets."],
  ];

  const qualityItems = [
    ["Life Sciences Specialization", "Sesen focuses on translation and localization for pharmaceutical, biotechnology, medical device, CRO, healthcare, and related regulated organizations."],
    ["Professional Native Linguists", "SmPC work can be matched with native-language experts whose pharmaceutical, medical, regulatory, and therapeutic experience fits the content."],
    ["Independent Review", "Structured review adds a separate linguistic control layer for regulated product information."],
    ["Controlled Terminology", "Approved language, product terms, reference material, glossaries, and language decisions can be centralized and reused."],
    ["Translation Memory & Version Control", "Preserve relevant approved content, trace revisions, and maintain continuity across recurring SmPC updates."],
    ["Secure Enterprise Workflows", "Support confidential pre-approval and post-approval pharmaceutical content through controlled project delivery."],
  ];

  const audiences = [
    ["Regulatory Affairs", "Multilingual product information across authorization, linguistic review, post-authorization changes, and market expansion."],
    ["Global Labeling", "Terminology and version continuity across SmPCs, PILs, labels, packaging, and successive product-information versions."],
    ["Pharmacovigilance & Drug Safety", "Language support for safety-driven SmPC changes and connected safety content where required."],
    ["Medical Affairs", "Accurate approved medicinal-product information supporting healthcare-professional communication across markets."],
    ["Localization & Language Operations", "Centralized coordination of languages, linguists, terminology, reviewer feedback, QA, and recurring delivery."],
  ];

  const relatedServices = [
    ["Pharmaceutical Translation Services", "Broader pharmaceutical translation across development, regulatory, labeling, safety, medical, and product-lifecycle content.", "https://www.sesen.com/pharmaceutical-translation-services/", "Explore Pharmaceutical Translation"],
    ["Drug Labeling & Packaging Translation", "Broader pharmaceutical labeling for product information, cartons, labels, packaging, inserts, artwork, and global labeling updates.", "https://www.sesen.com/drug-labeling-packaging-translation-services/", "Explore Drug Labeling & Packaging"],
    ["Patient Information Leaflet Translation", "Specialized patient-facing product-information translation and review with attention to approved meaning, readability, terminology, and SmPC alignment.", "https://www.sesen.com/patient-information-leaflet-translation-services/", "Explore PIL Translation"],
    ["Regulatory Submission Translation", "Broader pharmaceutical regulatory documentation supporting authorization, health-authority review, and post-authorization programs.", "https://www.sesen.com/regulatory-submission-translation-services/", "Explore Regulatory Submission Translation"],
    ["CTD & eCTD Translation", "Multilingual support for Common Technical Document and electronic Common Technical Document content used in pharmaceutical submissions.", "https://www.sesen.com/ectd-ctd-translation-services/", "Explore CTD & eCTD Translation"],
    ["Pharmacovigilance Translation", "Drug-safety translation for adverse-event documentation, safety narratives, aggregate reporting, risk materials, and global safety communication.", "https://www.sesen.com/pharmacovigilance-translation-services/", "Explore Pharmacovigilance Translation"],
    ["Label Review & In-Context QA", "Review multilingual labeling within final or near-final layouts for linguistic, formatting, placement, truncation, and visual-context issues.", "https://www.sesen.com/label-review-in-context-qa/", "Explore In-Context QA"],
  ];

  const faqs = [
    ["What is SmPC translation?", "SmPC translation is the specialized translation of a Summary of Product Characteristics while preserving the approved medical, pharmaceutical, clinical, and safety meaning of the source. The workflow can also include terminology management, QRD alignment, independent review, linguistic-review support, version control, and lifecycle updates."],
    ["What does SmPC stand for?", "SmPC stands for Summary of Product Characteristics. It contains approved medicinal-product information for healthcare professionals, including information needed to prescribe and use the medicine safely and effectively. In the United Kingdom, SPC is also commonly used."],
    ["How is an SmPC different from a Patient Information Leaflet?", "The SmPC is primarily intended for healthcare professionals and contains detailed clinical, pharmaceutical, pharmacological, safety, and authorization information. The Package Leaflet or PIL communicates appropriate medicinal-product information to patients and medicine users. The PIL is drawn up in accordance with the SmPC, so aligned meaning is important even though wording and presentation differ by audience."],
    ["Why does SmPC translation require pharmaceutical expertise?", "SmPCs combine specialized clinical, pharmaceutical, pharmacological, safety, and regulatory product information. Translation therefore requires more than general linguistic fluency; reviewers must preserve medical meaning, terminology, numbers, units, structure, approved wording, and consistency across related product information."],
    ["Does Sesen support EMA QRD product-information formats?", "Yes. Sesen can support multilingual SmPC and related product-information workflows aligned with the current applicable EMA QRD structure and conventions, together with client-approved materials and other relevant references. Sesen works to the applicable requirements and references for each engagement rather than hard-coding a single template version."],
    ["Does Sesen use EDQM Standard Terms and MedDRA terminology?", "Sesen can incorporate EDQM Standard Terms where applicable, together with client-approved terminology and relevant medical terminology resources. MedDRA-aligned terminology can also be used where appropriate for safety-related content such as adverse-reaction information."],
    ["How does Sesen maintain consistency between the SmPC and PIL?", "Sesen can use terminology databases, translation memory, approved reference versions, cross-document comparison, change tracking, and expert review to help preserve aligned product information. The goal is not identical wording; it is consistent approved meaning adapted appropriately to each audience and format."],
    ["Can Sesen support SmPC linguistic review?", "Yes. Sesen can support the language-production workflow surrounding linguistic review, including reviewer-ready files, tracked and clean versions, comment implementation, terminology reconciliation, final linguistic QA, and controlled version management."],
    ["Can Sesen support SmPC variations and post-authorization updates?", "Yes. Sesen can support recurring SmPC changes related to variations, safety updates, new indications, revised warnings, dosage changes, new strengths or forms, terminology changes, authority comments, and other product-information revisions."],
    ["What is delta translation for SmPC updates?", "Delta translation focuses translation and review on confirmed changes between an earlier source version and a new source version while retaining relevant approved language where appropriate. Because changes can affect context or connected product-information assets, delta work should still remain inside a controlled version and QA process."],
    ["Can Sesen use previously approved translations?", "Yes. Existing approved or client-validated translations can be incorporated as reference material or translation-memory assets where appropriate. Approved terminology and reviewer decisions can also be retained for future updates and language expansion."],
    ["Does Sesen support UK SPC translation?", "Yes. Sesen supports UK SPC/SmPC translation and connected product-information workflows using applicable MHRA templates and requirements together with client-approved materials and existing product information."],
    ["What is ePI, and how does it relate to the SmPC?", "Electronic Product Information, or ePI, represents authorized medicinal-product information in structured electronic form and can include the SmPC, Package Leaflet, and labeling. As product information becomes increasingly structured and digital, terminology consistency, reusable multilingual content, version control, and structured translation workflows become even more valuable."],
    ["Does Sesen use AI for SmPC translation?", "Sesen can use AI-assisted technology for targeted checks such as terminology comparison, numerical QA, missing-content detection, repeated-content consistency, version comparison, and multilingual quality review. Qualified pharmaceutical linguists and reviewers remain responsible for meaning, terminology, context, evaluation of automated findings, and final linguistic decisions."],
    ["What languages does Sesen support for SmPC translation?", "Sesen supports 150+ languages, including the major languages required for European and international pharmaceutical programs. Resources and review workflows are matched to the target language, market, subject matter, project requirements, and intended regulatory use."],
    ["Can Sesen manage an ongoing multilingual SmPC program?", "Yes. Sesen supports both individual projects and recurring programs involving multiple products, languages, markets, versions, and review cycles. Terminology databases, translation memories, reviewer decisions, version history, automation, and centralized project management can help improve continuity over time."],
  ];

  return (
    <main className="sesen-smpc-page">
      <style>{`
        .sesen-smpc-page,
        .sesen-smpc-page * { box-sizing: border-box; }
        .sesen-smpc-page {
          --sesen-smpc-blue: #4B6FD8;
          --sesen-smpc-blue-dark: #3659BB;
          --sesen-smpc-deep-blue: #253F8F;
          --sesen-smpc-navy: #17264D;
          --sesen-smpc-ink: #111827;
          --sesen-smpc-body: #46546D;
          --sesen-smpc-muted: #68758B;
          --sesen-smpc-border: #DDE4F2;
          --sesen-smpc-divider: #E9EEF8;
          --sesen-smpc-soft: #F7F9FD;
          --sesen-smpc-pale: #F5F7FF;
          --sesen-smpc-soft-blue: #EAF0FF;
          --sesen-smpc-light-blue: #C8D6FF;
          --sesen-smpc-white: #FFFFFF;
          width: 100%;
          overflow: hidden;
          color: var(--sesen-smpc-body);
          background: var(--sesen-smpc-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .sesen-smpc-page h1,
        .sesen-smpc-page h2,
        .sesen-smpc-page h3 {
          margin: 0;
          color: var(--sesen-smpc-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-weight: 500;
        }
        .sesen-smpc-page h1 {
          max-width: 700px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .sesen-smpc-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }
        .sesen-smpc-page h3 {
          font-size: 22px;
          line-height: 1.3;
        }
        .sesen-smpc-page p { margin: 0; }
        .sesen-smpc-page a { color: inherit; }
        .sesen-smpc-page svg { display: block; }
        .sesen-smpc-page .sesen-smpc-container {
          width: min(calc(100% - 112px), 1280px);
          margin: 0 auto;
        }
        .sesen-smpc-page .sesen-smpc-section { padding: 96px 0; }
        .sesen-smpc-page .sesen-smpc-section--pale { background: var(--sesen-smpc-pale); }
        .sesen-smpc-page .sesen-smpc-section--soft { background: var(--sesen-smpc-soft); }
        .sesen-smpc-page .sesen-smpc-heading {
          max-width: 820px;
          margin-bottom: 44px;
        }
        .sesen-smpc-page .sesen-smpc-heading--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .sesen-smpc-page .sesen-smpc-heading h2 + p,
        .sesen-smpc-page .sesen-smpc-heading .sesen-smpc-eyebrow + h2,
        .sesen-smpc-page .sesen-smpc-heading .sesen-smpc-eyebrow + h2 + p { margin-top: 16px; }
        .sesen-smpc-page .sesen-smpc-lead {
          max-width: 800px;
          color: #293954;
          font-size: 19px;
          line-height: 1.65;
        }
        .sesen-smpc-page .sesen-smpc-eyebrow {
          margin-bottom: 12px;
          color: var(--sesen-smpc-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .sesen-smpc-page .sesen-smpc-button-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
        }
        .sesen-smpc-page .sesen-smpc-button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 25px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.045em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
        }
        .sesen-smpc-page .sesen-smpc-button svg { width: 18px; height: 18px; }
        .sesen-smpc-page .sesen-smpc-button--primary {
          background: var(--sesen-smpc-blue);
          color: #fff;
        }
        .sesen-smpc-page .sesen-smpc-button--primary:hover { background: var(--sesen-smpc-blue-dark); }
        .sesen-smpc-page .sesen-smpc-button--secondary {
          border-color: var(--sesen-smpc-border);
          background: #fff;
          color: var(--sesen-smpc-ink);
        }
        .sesen-smpc-page .sesen-smpc-button--secondary:hover {
          border-color: #C7D4F5;
          background: var(--sesen-smpc-soft-blue);
        }
        .sesen-smpc-page .sesen-smpc-button:focus-visible,
        .sesen-smpc-page .sesen-smpc-link:focus-visible,
        .sesen-smpc-page .sesen-smpc-faq summary:focus-visible {
          outline: 3px solid rgba(75,111,216,.28);
          outline-offset: 4px;
        }
        .sesen-smpc-page .sesen-smpc-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--sesen-smpc-blue-dark) !important;
          font-weight: 650;
          line-height: 1.45;
          text-decoration: none;
        }
        .sesen-smpc-page .sesen-smpc-link svg { width: 18px; height: 18px; transition: transform 180ms ease; }
        .sesen-smpc-page .sesen-smpc-link:hover { text-decoration: underline; text-underline-offset: 4px; }
        .sesen-smpc-page .sesen-smpc-link:hover svg { transform: translateX(3px); }

        .sesen-smpc-page .sesen-smpc-hero {
          position: relative;
          padding: 96px 0 88px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
        }
        .sesen-smpc-page .sesen-smpc-hero::after {
          position: absolute;
          right: -140px;
          top: -100px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234,240,255,.75) 0%, rgba(234,240,255,0) 70%);
          content: "";
          pointer-events: none;
        }
        .sesen-smpc-page .sesen-smpc-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.03fr) minmax(440px, .97fr);
          gap: 56px;
          align-items: center;
        }
        .sesen-smpc-page .sesen-smpc-hero-copy { max-width: 720px; }
        .sesen-smpc-page .sesen-smpc-hero-copy .sesen-smpc-lead { margin-top: 22px; }
        .sesen-smpc-page .sesen-smpc-hero-copy .sesen-smpc-hero-support {
          max-width: 690px;
          margin-top: 18px;
          color: var(--sesen-smpc-body);
          font-size: 17px;
        }
        .sesen-smpc-page .sesen-smpc-hero-art {
          position: relative;
          min-height: 500px;
          border: 1px solid var(--sesen-smpc-divider);
          border-radius: 30px;
          background: linear-gradient(145deg, #FFFFFF 5%, #F5F8FF 100%);
          box-shadow: 0 22px 60px rgba(43,67,129,.08);
          overflow: hidden;
        }
        .sesen-smpc-page .sesen-smpc-hero-art::before {
          position: absolute;
          inset: 42px;
          border: 1px dashed #C7D5F8;
          border-radius: 50%;
          content: "";
        }
        .sesen-smpc-page .sesen-smpc-doc {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 218px;
          min-height: 284px;
          padding: 27px 24px;
          transform: translate(-50%, -49%);
          border: 1px solid #AFC2F6;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 18px 40px rgba(37,63,143,.11);
        }
        .sesen-smpc-page .sesen-smpc-doc-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
        }
        .sesen-smpc-page .sesen-smpc-doc h3 { margin-top: 18px; font-size: 26px; }
        .sesen-smpc-page .sesen-smpc-doc p { margin-top: 8px; color: var(--sesen-smpc-muted); font-size: 14px; line-height: 1.5; }
        .sesen-smpc-page .sesen-smpc-doc-lines { display: grid; gap: 8px; margin-top: 22px; }
        .sesen-smpc-page .sesen-smpc-doc-lines span { height: 6px; border-radius: 999px; background: #DCE6FF; }
        .sesen-smpc-page .sesen-smpc-doc-lines span:nth-child(2) { width: 82%; }
        .sesen-smpc-page .sesen-smpc-doc-lines span:nth-child(3) { width: 90%; }
        .sesen-smpc-page .sesen-smpc-doc-lines span:nth-child(4) { width: 68%; }
        .sesen-smpc-page .sesen-smpc-node {
          position: absolute;
          display: flex;
          width: 112px;
          min-height: 82px;
          align-items: center;
          justify-content: center;
          padding: 14px 12px;
          border: 1px solid #C9D6F8;
          border-radius: 18px;
          background: rgba(255,255,255,.96);
          color: var(--sesen-smpc-navy);
          box-shadow: 0 10px 28px rgba(37,63,143,.07);
          font-size: 13px;
          font-weight: 650;
          line-height: 1.35;
          text-align: center;
        }
        .sesen-smpc-page .sesen-smpc-node--pil { left: 42px; top: 74px; }
        .sesen-smpc-page .sesen-smpc-node--label { right: 40px; top: 90px; }
        .sesen-smpc-page .sesen-smpc-node--epi { right: 54px; bottom: 64px; }
        .sesen-smpc-page .sesen-smpc-node--life { left: 44px; bottom: 74px; }
        .sesen-smpc-page .sesen-smpc-connect {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 330px;
          height: 330px;
          transform: translate(-50%, -50%);
          opacity: .82;
        }
        .sesen-smpc-page .sesen-smpc-connect path { stroke: #91ACEF; stroke-width: 1.4; stroke-dasharray: 4 6; fill: none; }
        .sesen-smpc-page .sesen-smpc-art-tag {
          position: absolute;
          left: 50%;
          bottom: 23px;
          transform: translateX(-50%);
          white-space: nowrap;
          color: var(--sesen-smpc-muted);
          font-size: 13px;
          font-weight: 600;
        }

        .sesen-smpc-page .sesen-smpc-trust {
          border-top: 1px solid var(--sesen-smpc-divider);
          border-bottom: 1px solid var(--sesen-smpc-divider);
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-trust-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .sesen-smpc-page .sesen-smpc-trust-item {
          min-height: 94px;
          padding: 22px 18px;
          border-right: 1px solid var(--sesen-smpc-divider);
          text-align: center;
        }
        .sesen-smpc-page .sesen-smpc-trust-item:last-child { border-right: 0; }
        .sesen-smpc-page .sesen-smpc-trust-item strong {
          display: block;
          color: var(--sesen-smpc-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
        }
        .sesen-smpc-page .sesen-smpc-trust-item span {
          display: block;
          margin-top: 4px;
          color: var(--sesen-smpc-muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .sesen-smpc-page .sesen-smpc-overview-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(320px, .88fr);
          gap: 72px;
          align-items: start;
        }
        .sesen-smpc-page .sesen-smpc-copy-stack { display: grid; gap: 20px; max-width: 760px; }
        .sesen-smpc-page .sesen-smpc-copy-stack ul,
        .sesen-smpc-page .sesen-smpc-program-list,
        .sesen-smpc-page .sesen-smpc-feature-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .sesen-smpc-page .sesen-smpc-copy-stack li,
        .sesen-smpc-page .sesen-smpc-program-list li,
        .sesen-smpc-page .sesen-smpc-feature-list li {
          position: relative;
          padding-left: 27px;
          color: var(--sesen-smpc-body);
        }
        .sesen-smpc-page .sesen-smpc-copy-stack li + li,
        .sesen-smpc-page .sesen-smpc-program-list li + li,
        .sesen-smpc-page .sesen-smpc-feature-list li + li { margin-top: 10px; }
        .sesen-smpc-page .sesen-smpc-copy-stack li::before,
        .sesen-smpc-page .sesen-smpc-program-list li::before,
        .sesen-smpc-page .sesen-smpc-feature-list li::before {
          position: absolute;
          left: 0;
          top: .8em;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--sesen-smpc-blue);
          content: "";
        }
        .sesen-smpc-page .sesen-smpc-callout {
          padding: 34px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: var(--sesen-smpc-soft);
        }
        .sesen-smpc-page .sesen-smpc-callout-icon {
          display: grid;
          width: 50px;
          height: 50px;
          place-items: center;
          margin-bottom: 22px;
          border-radius: 14px;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-blue-dark);
        }
        .sesen-smpc-page .sesen-smpc-callout-icon svg { width: 25px; height: 25px; }
        .sesen-smpc-page .sesen-smpc-callout p { margin-top: 14px; }
        .sesen-smpc-page .sesen-smpc-callout strong { color: var(--sesen-smpc-navy); }

        .sesen-smpc-page .sesen-smpc-ecosystem {
          display: grid;
          grid-template-columns: minmax(0, .96fr) minmax(0, 1.04fr);
          gap: 64px;
          align-items: center;
        }
        .sesen-smpc-page .sesen-smpc-ecosystem-visual {
          position: relative;
          min-height: 520px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 30px;
          background: #fff;
          overflow: hidden;
        }
        .sesen-smpc-page .sesen-smpc-ecosystem-core {
          position: absolute;
          left: 50%;
          top: 50%;
          display: grid;
          width: 170px;
          height: 170px;
          place-items: center;
          transform: translate(-50%, -50%);
          border: 1px solid #AFC2F6;
          border-radius: 50%;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-deep-blue);
          text-align: center;
          box-shadow: 0 14px 40px rgba(75,111,216,.13);
        }
        .sesen-smpc-page .sesen-smpc-ecosystem-core strong { font-size: 24px; font-family: "Inter Tight", Inter, Arial, sans-serif; font-weight: 500; }
        .sesen-smpc-page .sesen-smpc-ecosystem-core span { display: block; max-width: 100px; margin: 6px auto 0; font-size: 12px; line-height: 1.4; }
        .sesen-smpc-page .sesen-smpc-eco-node {
          position: absolute;
          display: grid;
          width: 155px;
          min-height: 92px;
          place-items: center;
          padding: 17px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 20px;
          background: #fff;
          color: var(--sesen-smpc-navy);
          font-weight: 650;
          line-height: 1.35;
          text-align: center;
        }
        .sesen-smpc-page .sesen-smpc-eco-node--1 { left: 34px; top: 42px; }
        .sesen-smpc-page .sesen-smpc-eco-node--2 { right: 34px; top: 42px; }
        .sesen-smpc-page .sesen-smpc-eco-node--3 { right: 34px; bottom: 42px; }
        .sesen-smpc-page .sesen-smpc-eco-node--4 { left: 34px; bottom: 42px; }
        .sesen-smpc-page .sesen-smpc-eco-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 365px;
          height: 365px;
          transform: translate(-50%, -50%);
          border: 1px dashed #BFD0FA;
          border-radius: 50%;
        }
        .sesen-smpc-page .sesen-smpc-governance {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .sesen-smpc-page .sesen-smpc-governance span {
          padding: 7px 11px;
          border: 1px solid #D3DDF6;
          border-radius: 999px;
          color: var(--sesen-smpc-blue-dark);
          background: #fff;
          font-size: 12px;
          font-weight: 650;
        }

        .sesen-smpc-page .sesen-smpc-structure-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-smpc-border);
          border-left: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-structure-item {
          position: relative;
          min-height: 242px;
          padding: 30px 28px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-structure-item--featured { background: var(--sesen-smpc-pale); }
        .sesen-smpc-page .sesen-smpc-structure-number {
          color: var(--sesen-smpc-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
        }
        .sesen-smpc-page .sesen-smpc-structure-item h3 { margin-top: 18px; }
        .sesen-smpc-page .sesen-smpc-structure-item p { margin-top: 13px; }
        .sesen-smpc-page .sesen-smpc-structure-item--featured::after {
          position: absolute;
          left: 28px;
          bottom: 0;
          width: 64px;
          height: 2px;
          background: var(--sesen-smpc-blue);
          content: "";
        }

        .sesen-smpc-page .sesen-smpc-term-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          overflow: hidden;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-term-item {
          min-height: 205px;
          padding: 30px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-term-item:nth-child(3n) { border-right: 0; }
        .sesen-smpc-page .sesen-smpc-term-item:nth-last-child(-n/**/+3) { border-bottom: 0; }
        .sesen-smpc-page .sesen-smpc-term-item h3 { font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-term-item p { margin-top: 12px; }
        .sesen-smpc-page .sesen-smpc-quote {
          margin-top: 34px;
          padding: 26px 30px;
          border-left: 2px solid var(--sesen-smpc-blue);
          background: #fff;
          color: var(--sesen-smpc-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.45;
        }

        .sesen-smpc-page .sesen-smpc-program-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr);
          gap: 72px;
          align-items: start;
        }
        .sesen-smpc-page .sesen-smpc-program-panel {
          padding: 34px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: var(--sesen-smpc-soft);
        }
        .sesen-smpc-page .sesen-smpc-program-panel h3 { margin-bottom: 18px; }
        .sesen-smpc-page .sesen-smpc-program-panel .sesen-smpc-link { margin-top: 24px; }
        .sesen-smpc-page .sesen-smpc-inline-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 26px;
        }

        .sesen-smpc-page .sesen-smpc-workflow-shell {
          display: grid;
          grid-template-columns: minmax(300px, .68fr) minmax(0, 1.32fr);
          gap: 72px;
          align-items: start;
        }
        .sesen-smpc-page .sesen-smpc-workflow-intro { position: sticky; top: 30px; }
        .sesen-smpc-page .sesen-smpc-workflow-intro p { margin-top: 18px; }
        .sesen-smpc-page .sesen-smpc-workflow-list {
          position: relative;
          border-top: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-workflow-step {
          display: grid;
          grid-template-columns: 72px minmax(190px, .48fr) minmax(0, 1fr);
          gap: 22px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-workflow-number {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 50%;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
        }
        .sesen-smpc-page .sesen-smpc-workflow-step h3 { padding-top: 8px; font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-workflow-step p { padding-top: 3px; }

        .sesen-smpc-page .sesen-smpc-review-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
          gap: 60px;
          align-items: center;
        }
        .sesen-smpc-page .sesen-smpc-review-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-review-item {
          min-height: 155px;
          padding: 26px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-review-item:nth-child(2n) { border-right: 0; }
        .sesen-smpc-page .sesen-smpc-review-item:nth-last-child(-n/**/+2) { border-bottom: 0; }
        .sesen-smpc-page .sesen-smpc-review-item strong { display: block; color: var(--sesen-smpc-navy); font-size: 17px; }
        .sesen-smpc-page .sesen-smpc-review-item span { display: block; margin-top: 8px; }

        .sesen-smpc-page .sesen-smpc-consistency-diagram {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
          margin-top: 44px;
        }
        .sesen-smpc-page .sesen-smpc-consistency-doc {
          position: relative;
          min-height: 260px;
          padding: 30px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 24px;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-consistency-doc::after {
          position: absolute;
          right: -21px;
          top: 50%;
          width: 24px;
          height: 1px;
          background: #AFC2F6;
          content: "";
        }
        .sesen-smpc-page .sesen-smpc-consistency-doc:last-child::after { display: none; }
        .sesen-smpc-page .sesen-smpc-consistency-doc span {
          color: var(--sesen-smpc-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .sesen-smpc-page .sesen-smpc-consistency-doc h3 { margin-top: 18px; }
        .sesen-smpc-page .sesen-smpc-consistency-doc p { margin-top: 14px; }
        .sesen-smpc-page .sesen-smpc-consistency-rule {
          margin-top: 22px;
          padding-top: 22px;
          border-top: 1px solid var(--sesen-smpc-divider);
          color: var(--sesen-smpc-navy);
          font-weight: 600;
        }

        .sesen-smpc-page .sesen-smpc-lifecycle-grid {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 68px;
          align-items: start;
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-flow {
          display: grid;
          gap: 12px;
          margin-top: 30px;
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-flow div {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border: 1px solid #D4DEF7;
          border-radius: 14px;
          background: #fff;
          color: var(--sesen-smpc-navy);
          font-weight: 600;
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-flow div:not(:last-child)::after {
          margin-left: auto;
          color: var(--sesen-smpc-blue);
          content: "→";
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-smpc-border);
          border-left: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-card {
          min-height: 186px;
          padding: 26px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-lifecycle-card h3 { font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-lifecycle-card p { margin-top: 10px; }

        .sesen-smpc-page .sesen-smpc-ai-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          margin-top: 42px;
        }
        .sesen-smpc-page .sesen-smpc-ai-panel {
          padding: 34px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-ai-panel--human { background: var(--sesen-smpc-pale); }
        .sesen-smpc-page .sesen-smpc-ai-panel h3 { margin-bottom: 18px; }
        .sesen-smpc-page .sesen-smpc-ai-list { display: grid; gap: 11px; margin: 0; padding: 0; list-style: none; }
        .sesen-smpc-page .sesen-smpc-ai-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .sesen-smpc-page .sesen-smpc-ai-list svg { flex: 0 0 auto; width: 19px; height: 19px; margin-top: 4px; color: var(--sesen-smpc-blue-dark); }
        .sesen-smpc-page .sesen-smpc-ai-statement {
          margin-top: 28px;
          padding: 22px 26px;
          border-radius: 18px;
          background: var(--sesen-smpc-navy);
          color: #fff;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
          line-height: 1.5;
          text-align: center;
        }

        .sesen-smpc-page .sesen-smpc-region-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .sesen-smpc-page .sesen-smpc-region {
          min-height: 360px;
          padding: 34px;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-region-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 15px;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-blue-dark);
        }
        .sesen-smpc-page .sesen-smpc-region-icon svg { width: 25px; height: 25px; }
        .sesen-smpc-page .sesen-smpc-region p { margin-top: 14px; }
        .sesen-smpc-page .sesen-smpc-region ul { margin-top: 20px; }

        .sesen-smpc-page .sesen-smpc-epi-grid {
          display: grid;
          grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
          gap: 64px;
          align-items: center;
        }
        .sesen-smpc-page .sesen-smpc-epi-flow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 44px;
        }
        .sesen-smpc-page .sesen-smpc-epi-step {
          position: relative;
          min-width: 0;
          min-height: 118px;
          padding: 22px 20px;
          border: 1px solid #D4DEF7;
          border-radius: 18px;
          background: #fff;
          color: var(--sesen-smpc-navy);
          font-weight: 650;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }
        .sesen-smpc-page .sesen-smpc-epi-step:not(:last-child)::after {
          position: absolute;
          right: -17px;
          top: 50%;
          z-index: 2;
          width: 18px;
          height: 18px;
          transform: translateY(-50%);
          border-radius: 50%;
          background: var(--sesen-smpc-blue);
          color: #fff;
          content: "→";
          font-size: 11px;
          line-height: 18px;
          text-align: center;
        }
        .sesen-smpc-page .sesen-smpc-epi-capabilities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-smpc-border);
          border-left: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-epi-capability {
          min-height: 148px;
          padding: 24px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-epi-capability strong { color: var(--sesen-smpc-navy); }
        .sesen-smpc-page .sesen-smpc-epi-capability span { display: block; margin-top: 7px; }

        .sesen-smpc-page .sesen-smpc-quality-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-quality-item {
          min-height: 212px;
          padding: 30px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-quality-item:nth-child(3n) { border-right: 0; }
        .sesen-smpc-page .sesen-smpc-quality-item:nth-last-child(-n/**/+3) { border-bottom: 0; }
        .sesen-smpc-page .sesen-smpc-quality-icon {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          margin-bottom: 18px;
          border-radius: 12px;
          background: var(--sesen-smpc-soft-blue);
          color: var(--sesen-smpc-blue-dark);
        }
        .sesen-smpc-page .sesen-smpc-quality-icon svg { width: 22px; height: 22px; }
        .sesen-smpc-page .sesen-smpc-quality-item h3 { font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-quality-item p { margin-top: 10px; }
        .sesen-smpc-page .sesen-smpc-quality-link { margin-top: 26px; }

        .sesen-smpc-page .sesen-smpc-audience-list {
          border-top: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-audience-row {
          display: grid;
          grid-template-columns: minmax(200px, .38fr) minmax(0, .62fr);
          gap: 44px;
          padding: 26px 0;
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-audience-row h3 { font-size: 20px; }

        .sesen-smpc-page .sesen-smpc-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          overflow: hidden;
          border: 1px solid var(--sesen-smpc-border);
          border-radius: 28px;
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-why-item {
          min-height: 210px;
          padding: 28px;
          border-right: 1px solid var(--sesen-smpc-border);
          border-bottom: 1px solid var(--sesen-smpc-border);
          background: #fff;
        }
        .sesen-smpc-page .sesen-smpc-why-item:nth-child(3n) { border-right: 0; }
        .sesen-smpc-page .sesen-smpc-why-item:nth-last-child(-n/**/+3) { border-bottom: 0; }
        .sesen-smpc-page .sesen-smpc-why-item h3 { font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-why-item p { margin-top: 10px; }

        .sesen-smpc-page .sesen-smpc-services {
          border-top: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-service-row {
          display: grid;
          grid-template-columns: minmax(220px, .32fr) minmax(0, .46fr) minmax(190px, .22fr);
          gap: 28px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-service-row h3 { font-size: 20px; }
        .sesen-smpc-page .sesen-smpc-service-row .sesen-smpc-link { justify-self: end; text-align: right; }

        .sesen-smpc-page .sesen-smpc-faq {
          max-width: 940px;
          margin: 0 auto;
          border-top: 1px solid var(--sesen-smpc-border);
        }
        .sesen-smpc-page .sesen-smpc-faq details { border-bottom: 1px solid var(--sesen-smpc-border); }
        .sesen-smpc-page .sesen-smpc-faq summary {
          position: relative;
          padding: 24px 52px 24px 0;
          color: var(--sesen-smpc-navy);
          cursor: pointer;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.45;
          list-style: none;
        }
        .sesen-smpc-page .sesen-smpc-faq summary::-webkit-details-marker { display: none; }
        .sesen-smpc-page .sesen-smpc-faq summary::before,
        .sesen-smpc-page .sesen-smpc-faq summary::after {
          position: absolute;
          right: 8px;
          top: 36px;
          width: 16px;
          height: 1.5px;
          background: var(--sesen-smpc-blue-dark);
          content: "";
          transition: transform 180ms ease;
        }
        .sesen-smpc-page .sesen-smpc-faq summary::after { transform: rotate(90deg); }
        .sesen-smpc-page .sesen-smpc-faq details[open] summary::after { transform: rotate(0deg); }
        .sesen-smpc-page .sesen-smpc-faq-answer { max-width: 840px; padding: 0 52px 24px 0; }

        .sesen-smpc-page .sesen-smpc-final {
          padding: 92px 0;
          background: var(--sesen-smpc-navy);
          color: #DDE6FF;
        }
        .sesen-smpc-page .sesen-smpc-final-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: center;
        }
        .sesen-smpc-page .sesen-smpc-final h2 { color: #fff; max-width: 820px; }
        .sesen-smpc-page .sesen-smpc-final p { max-width: 800px; margin-top: 18px; font-size: 18px; }
        .sesen-smpc-page .sesen-smpc-final .sesen-smpc-button-row { margin-top: 0; justify-content: flex-end; }
        .sesen-smpc-page .sesen-smpc-final .sesen-smpc-button--secondary { border-color: rgba(255,255,255,.45); }
        .sesen-smpc-page .sesen-smpc-final-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 24px;
          color: var(--sesen-smpc-light-blue);
          font-size: 13px;
          font-weight: 650;
        }

        @media (max-width: 1100px)  {
          .sesen-smpc-page .sesen-smpc-container { width: min(calc(100% - 80px), 1280px); }
          .sesen-smpc-page .sesen-smpc-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(380px, .9fr); gap: 36px; }
          .sesen-smpc-page .sesen-smpc-hero-art { min-height: 470px; }
          .sesen-smpc-page .sesen-smpc-trust-grid { grid-template-columns: repeat(6, 1fr); }
          .sesen-smpc-page .sesen-smpc-trust-item { grid-column: span 2; }
          .sesen-smpc-page .sesen-smpc-trust-item:nth-child(3) { border-right: 0; }
          .sesen-smpc-page .sesen-smpc-trust-item:nth-child(-n/**/+3) { border-bottom: 1px solid var(--sesen-smpc-divider); }
          .sesen-smpc-page .sesen-smpc-trust-item:nth-child(4),
        .sesen-smpc-page .sesen-smpc-trust-item:nth-child(5) { grid-column: span 3; }
          .sesen-smpc-page .sesen-smpc-trust-item:nth-child(4) { border-right: 1px solid var(--sesen-smpc-divider); }
          .sesen-smpc-page .sesen-smpc-structure-grid,
        .sesen-smpc-page .sesen-smpc-term-grid,
        .sesen-smpc-page .sesen-smpc-quality-grid,
        .sesen-smpc-page .sesen-smpc-why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-smpc-page .sesen-smpc-term-item:nth-child(3n),
        .sesen-smpc-page .sesen-smpc-quality-item:nth-child(3n) { border-right: 1px solid var(--sesen-smpc-border); }
          .sesen-smpc-page .sesen-smpc-term-item:nth-child(2n),
        .sesen-smpc-page .sesen-smpc-quality-item:nth-child(2n) { border-right: 0; }
          .sesen-smpc-page .sesen-smpc-term-item:nth-last-child(-n/**/+3),
        .sesen-smpc-page .sesen-smpc-quality-item:nth-last-child(-n/**/+3) { border-bottom: 1px solid var(--sesen-smpc-border); }
          .sesen-smpc-page .sesen-smpc-term-item:nth-last-child(-n/**/+2),
        .sesen-smpc-page .sesen-smpc-quality-item:nth-last-child(-n/**/+2) { border-bottom: 0; }
          .sesen-smpc-page .sesen-smpc-why-item:nth-child(3n) { border-right: 1px solid var(--sesen-smpc-border); }
          .sesen-smpc-page .sesen-smpc-why-item:nth-child(2n) { border-right: 0; }
          .sesen-smpc-page .sesen-smpc-why-item:nth-last-child(-n/**/+3) { border-bottom: 1px solid var(--sesen-smpc-border); }
          .sesen-smpc-page .sesen-smpc-why-item:nth-last-child(-n/**/+2) { border-bottom: 0; }
          .sesen-smpc-page .sesen-smpc-workflow-shell { grid-template-columns: 1fr; gap: 42px; }
          .sesen-smpc-page .sesen-smpc-workflow-intro { position: static; max-width: 820px; }
          .sesen-smpc-page .sesen-smpc-final-grid { grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-final .sesen-smpc-button-row { justify-content: flex-start; }
        }

        @media (max-width: 860px)  {
          .sesen-smpc-page .sesen-smpc-container { width: calc(100% - 60px); }
          .sesen-smpc-page .sesen-smpc-section { padding: 80px 0; }
          .sesen-smpc-page .sesen-smpc-hero { padding: 80px 0 72px; }
          .sesen-smpc-page h1 { font-size: 44px; }
          .sesen-smpc-page h2 { font-size: 34px; }
          .sesen-smpc-page .sesen-smpc-hero-grid,
        .sesen-smpc-page .sesen-smpc-overview-grid,
        .sesen-smpc-page .sesen-smpc-ecosystem,
        .sesen-smpc-page .sesen-smpc-program-grid,
        .sesen-smpc-page .sesen-smpc-review-grid,
        .sesen-smpc-page .sesen-smpc-lifecycle-grid,
        .sesen-smpc-page .sesen-smpc-epi-grid { grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-hero-art { min-height: 500px; }
          .sesen-smpc-page .sesen-smpc-trust-grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-smpc-page .sesen-smpc-trust-item,
        .sesen-smpc-page .sesen-smpc-trust-item:nth-child(4),
        .sesen-smpc-page .sesen-smpc-trust-item:nth-child(5) { grid-column: auto; border-right: 1px solid var(--sesen-smpc-divider); border-bottom: 1px solid var(--sesen-smpc-divider); }
          .sesen-smpc-page .sesen-smpc-trust-item:nth-child(2n) { border-right: 0; }
          .sesen-smpc-page .sesen-smpc-trust-item:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .sesen-smpc-page .sesen-smpc-callout { max-width: none; }
          .sesen-smpc-page .sesen-smpc-ecosystem-visual { order: 2; }
          .sesen-smpc-page .sesen-smpc-workflow-step { grid-template-columns: 64px minmax(175px, .45fr) minmax(0, 1fr); }
          .sesen-smpc-page .sesen-smpc-consistency-diagram { grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-consistency-doc::after { display: none; }
          .sesen-smpc-page .sesen-smpc-epi-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-smpc-page .sesen-smpc-epi-step:nth-child(2)::after {
            display: block;
            right: 50%;
            top: auto;
            bottom: -17px;
            transform: translateX(50%);
            content: "↓";
          }
          .sesen-smpc-page .sesen-smpc-service-row { grid-template-columns: minmax(190px, .38fr) minmax(0, .62fr); }
          .sesen-smpc-page .sesen-smpc-service-row .sesen-smpc-link { grid-column: 2; justify-self: start; text-align: left; }
        }

        @media (max-width: 640px)  {
          .sesen-smpc-page .sesen-smpc-container { width: calc(100% - 40px); }
          .sesen-smpc-page .sesen-smpc-section { padding: 68px 0; }
          .sesen-smpc-page .sesen-smpc-hero { padding: 68px 0 64px; }
          .sesen-smpc-page h1 { font-size: 42px; }
          .sesen-smpc-page h2 { font-size: 32px; }
          .sesen-smpc-page h3 { font-size: 21px; }
          .sesen-smpc-page .sesen-smpc-lead { font-size: 18px; }
          .sesen-smpc-page .sesen-smpc-heading { margin-bottom: 34px; }
          .sesen-smpc-page .sesen-smpc-mobile-center { text-align: center; }
          .sesen-smpc-page .sesen-smpc-mobile-center .sesen-smpc-eyebrow { text-align: center; }
          .sesen-smpc-page .sesen-smpc-mobile-center .sesen-smpc-lead,
        .sesen-smpc-page .sesen-smpc-mobile-center + .sesen-smpc-lead { text-align: left; }
          .sesen-smpc-page .sesen-smpc-mobile-left { text-align: left; }
          .sesen-smpc-page .sesen-smpc-button-row { display: grid; grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-button { width: 100%; min-height: 50px; }
          .sesen-smpc-page .sesen-smpc-hero-grid { gap: 40px; }
          .sesen-smpc-page .sesen-smpc-hero-art { min-height: 430px; border-radius: 24px; }
          .sesen-smpc-page .sesen-smpc-hero-art::before { inset: 28px; }
          .sesen-smpc-page .sesen-smpc-doc { width: 166px; min-height: 230px; padding: 22px 18px; }
          .sesen-smpc-page .sesen-smpc-doc h3 { font-size: 23px; }
          .sesen-smpc-page .sesen-smpc-node { width: 84px; min-height: 68px; padding: 10px 8px; font-size: 11px; }
          .sesen-smpc-page .sesen-smpc-node--pil { left: 16px; top: 22px; }
          .sesen-smpc-page .sesen-smpc-node--label { right: 16px; top: 28px; }
          .sesen-smpc-page .sesen-smpc-node--epi { right: 18px; bottom: 24px; }
          .sesen-smpc-page .sesen-smpc-node--life { left: 16px; bottom: 30px; }
          .sesen-smpc-page .sesen-smpc-connect { width: 280px; height: 280px; }
          .sesen-smpc-page .sesen-smpc-art-tag { bottom: 12px; width: calc(100% - 32px); white-space: normal; font-size: 11px; line-height: 1.4; text-align: center; }
          .sesen-smpc-page .sesen-smpc-trust-grid { grid-template-columns: 1fr 1fr; }
          .sesen-smpc-page .sesen-smpc-callout { padding: 28px; }
          .sesen-smpc-page .sesen-smpc-ecosystem-visual { min-height: 440px; }
          .sesen-smpc-page .sesen-smpc-ecosystem-core { width: 130px; height: 130px; }
          .sesen-smpc-page .sesen-smpc-ecosystem-core strong { font-size: 21px; }
          .sesen-smpc-page .sesen-smpc-ecosystem-core span { font-size: 10px; }
          .sesen-smpc-page .sesen-smpc-eco-node { width: 116px; min-height: 78px; padding: 12px; font-size: 12px; }
          .sesen-smpc-page .sesen-smpc-eco-node--1 { left: 18px; top: 28px; }
          .sesen-smpc-page .sesen-smpc-eco-node--2 { right: 18px; top: 28px; }
          .sesen-smpc-page .sesen-smpc-eco-node--3 { right: 18px; bottom: 28px; }
          .sesen-smpc-page .sesen-smpc-eco-node--4 { left: 18px; bottom: 28px; }
          .sesen-smpc-page .sesen-smpc-eco-ring { width: 280px; height: 280px; }
          .sesen-smpc-page .sesen-smpc-structure-grid,
        .sesen-smpc-page .sesen-smpc-term-grid,
        .sesen-smpc-page .sesen-smpc-quality-grid,
        .sesen-smpc-page .sesen-smpc-why-grid,
        .sesen-smpc-page .sesen-smpc-ai-grid,
        .sesen-smpc-page .sesen-smpc-region-grid,
        .sesen-smpc-page .sesen-smpc-lifecycle-cards,
        .sesen-smpc-page .sesen-smpc-review-list,
        .sesen-smpc-page .sesen-smpc-epi-capabilities { grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-structure-item { min-height: auto; }
          .sesen-smpc-page .sesen-smpc-term-item,
        .sesen-smpc-page .sesen-smpc-quality-item,
        .sesen-smpc-page .sesen-smpc-review-item,
        .sesen-smpc-page .sesen-smpc-epi-capability {
            min-height: auto;
            border-right: 0 !important;
            border-bottom: 1px solid var(--sesen-smpc-border) !important;
          }
          .sesen-smpc-page .sesen-smpc-term-item:last-child,
        .sesen-smpc-page .sesen-smpc-quality-item:last-child,
        .sesen-smpc-page .sesen-smpc-review-item:last-child,
        .sesen-smpc-page .sesen-smpc-epi-capability:last-child { border-bottom: 0 !important; }
          .sesen-smpc-page .sesen-smpc-why-item { min-height: auto; border-right: 0 !important; border-bottom: 1px solid var(--sesen-smpc-border) !important; }
          .sesen-smpc-page .sesen-smpc-why-item:last-child { border-bottom: 0 !important; }
          .sesen-smpc-page .sesen-smpc-quote { padding: 22px 24px; font-size: 20px; }
          .sesen-smpc-page .sesen-smpc-workflow-step { grid-template-columns: 54px minmax(0, 1fr); gap: 16px; }
          .sesen-smpc-page .sesen-smpc-workflow-step p { grid-column: 2; padding-top: 0; }
          .sesen-smpc-page .sesen-smpc-workflow-step h3 { padding-top: 8px; }
          .sesen-smpc-page .sesen-smpc-lifecycle-flow div:not(:last-child)::after { content: "↓"; }
          .sesen-smpc-page .sesen-smpc-epi-flow { grid-template-columns: 1fr; }
          .sesen-smpc-page .sesen-smpc-epi-step { min-height: auto; }
          .sesen-smpc-page .sesen-smpc-epi-step:not(:last-child)::after { display: block; right: 50%; top: auto; bottom: -14px; transform: translateX(50%); content: "↓"; }
          .sesen-smpc-page .sesen-smpc-audience-row,
        .sesen-smpc-page .sesen-smpc-service-row { grid-template-columns: 1fr; gap: 10px; }
          .sesen-smpc-page .sesen-smpc-service-row .sesen-smpc-link { grid-column: 1; margin-top: 8px; }
          .sesen-smpc-page .sesen-smpc-faq summary { padding-right: 42px; font-size: 19px; }
          .sesen-smpc-page .sesen-smpc-faq-answer { padding-right: 0; }
          .sesen-smpc-page .sesen-smpc-final { padding: 72px 0; }
          .sesen-smpc-page .sesen-smpc-final p { font-size: 17px; }
        }

        @media (max-width: 360px)  {
          .sesen-smpc-page h1 { font-size: 38px; }
          .sesen-smpc-page h2 { font-size: 30px; }
          .sesen-smpc-page .sesen-smpc-hero-art { min-height: 430px; }
          .sesen-smpc-page .sesen-smpc-art-tag { display: none; }
          .sesen-smpc-page .sesen-smpc-doc { width: 152px; min-height: 220px; }
          .sesen-smpc-page .sesen-smpc-node { width: 78px; font-size: 10px; }
          .sesen-smpc-page .sesen-smpc-ecosystem-visual { min-height: 420px; }
          .sesen-smpc-page .sesen-smpc-eco-node { width: 108px; font-size: 11px; }
        }

        @media (prefers-reduced-motion: reduce)  {
          .sesen-smpc-page *,
        .sesen-smpc-page *::before,
        .sesen-smpc-page *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>

      <section className="sesen-smpc-hero">
        <div className="sesen-smpc-container sesen-smpc-hero-grid">
          <div className="sesen-smpc-hero-copy">
            <p className="sesen-smpc-eyebrow">European Pharmaceutical Product Information</p>
            <h1>SmPC Translation Services</h1>
            <p className="sesen-smpc-lead">
              Precise multilingual translation and lifecycle support for Summary of Product Characteristics content across European pharmaceutical markets.
            </p>
            <p className="sesen-smpc-hero-support">
              From initial authorization and linguistic review through variations, safety updates, and market expansion, Sesen helps pharmaceutical and biotechnology teams maintain approved meaning, terminology, and version continuity across the SmPC, Package Leaflet, labeling, and related product information.
            </p>
            <div className="sesen-smpc-button-row">
              <a className="sesen-smpc-button sesen-smpc-button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Arrow /></a>
              <a className="sesen-smpc-button sesen-smpc-button--secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <Arrow /></a>
            </div>
          </div>

          <div className="sesen-smpc-hero-art" role="img" aria-label="SmPC connected to patient information, labeling, structured product information, and lifecycle updates">
            <svg className="sesen-smpc-connect" viewBox="0 0 330 330" aria-hidden="true" focusable="false">
              <path d="M165 55 C100 55 60 105 60 165 C60 225 105 275 165 275" />
              <path d="M165 55 C230 55 270 105 270 165 C270 225 225 275 165 275" />
            </svg>
            <div className="sesen-smpc-node sesen-smpc-node--pil">Package Leaflet / PIL</div>
            <div className="sesen-smpc-node sesen-smpc-node--label">Labeling & Packaging</div>
            <div className="sesen-smpc-node sesen-smpc-node--epi">Structured Product Information</div>
            <div className="sesen-smpc-node sesen-smpc-node--life">Lifecycle Updates</div>
            <div className="sesen-smpc-doc">
              <span className="sesen-smpc-doc-badge">PRODUCT INFORMATION</span>
              <h3>SmPC</h3>
              <p>Summary of Product Characteristics</p>
              <div className="sesen-smpc-doc-lines" aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
            <span className="sesen-smpc-art-tag">QRD · Terminology · Linguistic Review · Version Control</span>
          </div>
        </div>
      </section>

      <section className="sesen-smpc-trust" aria-label="SmPC translation capabilities">
        <div className="sesen-smpc-container sesen-smpc-trust-grid">
          <div className="sesen-smpc-trust-item"><strong>150+ Languages</strong><span>Global multilingual coverage</span></div>
          <div className="sesen-smpc-trust-item"><strong>Life Sciences Specialization</strong><span>Pharmaceutical domain expertise</span></div>
          <div className="sesen-smpc-trust-item"><strong>QRD-Aligned Workflows</strong><span>Current applicable structure</span></div>
          <div className="sesen-smpc-trust-item"><strong>Expert Human Review</strong><span>Qualified linguistic decisions</span></div>
          <div className="sesen-smpc-trust-item"><strong>Lifecycle Support</strong><span>Controlled recurring updates</span></div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container sesen-smpc-overview-grid">
          <div className="sesen-smpc-copy-stack">
            <div className="sesen-smpc-mobile-center">
              <h2>SmPC Translation Is More Than Medical Translation</h2>
            </div>
            <p className="sesen-smpc-lead">
              A Summary of Product Characteristics (SmPC) is controlled medicinal-product information for healthcare professionals. Its translation must protect the approved clinical, pharmaceutical, and safety meaning of the source across languages and successive product-information versions.
            </p>
            <p>
              The content can include indications, dosage and administration, contraindications, warnings and precautions, drug interactions, adverse reactions, pharmacological information, excipients, storage requirements, and other information that requires exacting language control.
            </p>
            <ul>
              <li>Approved product and pharmaceutical terminology</li>
              <li>Clinical and safety meaning across target languages</li>
              <li>Numbers, units, frequencies, and dosing expressions</li>
              <li>Applicable QRD structure and product-information conventions</li>
              <li>Consistency with related Package Leaflet and labeling content</li>
              <li>Traceability across review cycles and lifecycle revisions</li>
            </ul>
            <p>
              Sesen therefore approaches SmPC translation as <strong>controlled multilingual product information</strong>, not as an isolated document translation.
            </p>
          </div>
          <aside className="sesen-smpc-callout">
            <div className="sesen-smpc-callout-icon"><DocumentIcon /></div>
            <h3>Why Control Matters</h3>
            <p>
              A single terminology, numeric, or version discrepancy can affect multiple languages and connected product-information assets.
            </p>
            <p>
              <strong>The objective:</strong> keep approved meaning, terminology, and changes aligned as the product moves through review, approval, market expansion, and future updates.
            </p>
          </aside>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--pale">
        <div className="sesen-smpc-container sesen-smpc-ecosystem">
          <div className="sesen-smpc-ecosystem-visual" role="img" aria-label="SmPC connected product information ecosystem">
            <div className="sesen-smpc-eco-ring" aria-hidden="true" />
            <div className="sesen-smpc-ecosystem-core"><div><strong>SmPC</strong><span>Approved healthcare-professional product information</span></div></div>
            <div className="sesen-smpc-eco-node sesen-smpc-eco-node--1">Package Leaflet / PIL</div>
            <div className="sesen-smpc-eco-node sesen-smpc-eco-node--2">Labeling & Packaging</div>
            <div className="sesen-smpc-eco-node sesen-smpc-eco-node--3">Market-Specific Product Information</div>
            <div className="sesen-smpc-eco-node sesen-smpc-eco-node--4">Electronic Product Information</div>
          </div>
          <div>
            <div className="sesen-smpc-mobile-center">
              <p className="sesen-smpc-eyebrow">Connected Product Information</p>
              <h2>The SmPC Connects the Product Information Ecosystem</h2>
            </div>
            <p className="sesen-smpc-lead" style={{ marginTop: 18 }}>
              An SmPC does not exist in isolation. It connects closely with patient-facing content, labeling, packaging, market-specific language versions, and emerging structured product-information workflows.
            </p>
            <p style={{ marginTop: 18 }}>
              The Package Leaflet is drawn up in accordance with the SmPC, making controlled consistency particularly important. Sesen helps preserve aligned approved meaning while respecting the different audiences, structures, and readability requirements of each asset.
            </p>
            <div className="sesen-smpc-governance" aria-label="Governance controls">
              <span>Approved Terminology</span><span>QRD Structure</span><span>Translation Memory</span><span>Linguistic Review</span><span>Version Control</span><span>Lifecycle Management</span>
            </div>
            <div className="sesen-smpc-inline-links">
              <a className="sesen-smpc-link" href="https://www.sesen.com/drug-labeling-packaging-translation-services/">Drug Labeling & Packaging Translation <Arrow /></a>
              <a className="sesen-smpc-link" href="https://www.sesen.com/patient-information-leaflet-translation-services/">Patient Information Leaflet Translation <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-mobile-left">
            <h2>Precision Across Every Section of the SmPC</h2>
            <p className="sesen-smpc-lead">
              SmPC translation requires an understanding of the document's information architecture and where linguistic precision carries particular clinical, pharmaceutical, or safety significance.
            </p>
          </div>
          <div className="sesen-smpc-structure-grid">
            {smpcSections.map((item) => (
              <article className={`sesen-smpc-structure-item${item.featured ? " sesen-smpc-structure-item--featured" : ""}`} key={item.number}>
                <span className="sesen-smpc-structure-number">SECTION {item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--pale">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-mobile-left">
            <p className="sesen-smpc-eyebrow">QRD & Terminology</p>
            <h2>Structured Around European Product Information Requirements</h2>
            <p className="sesen-smpc-lead">
              Sesen supports multilingual product information using the current applicable EMA QRD structure and conventions together with recognized terminology resources, approved client language, existing authorized versions, and product-specific references.
            </p>
          </div>
          <div className="sesen-smpc-term-grid">
            {terminologyItems.map(([title, text]) => (
              <article className="sesen-smpc-term-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-smpc-quote">Terminology should become more controlled as a product matures—not less.</div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container sesen-smpc-program-grid">
          <div>
            <div className="sesen-smpc-mobile-center">
              <h2>SmPC Translation for Multilingual European Product Information</h2>
            </div>
            <p className="sesen-smpc-lead" style={{ marginTop: 18 }}>
              A single medicinal product can require coordinated product information across multiple languages, markets, review cycles, and post-authorization updates. Sesen can structure programs for a single target language or broad European language sets.
            </p>
            <p style={{ marginTop: 18 }}>
              For recurring portfolios, shared terminology, translation memories, product references, QA rules, reviewer preferences, and version controls allow each new project to benefit from language decisions already made.
            </p>
            <div className="sesen-smpc-inline-links">
              <a className="sesen-smpc-link" href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services <Arrow /></a>
              <a className="sesen-smpc-link" href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation <Arrow /></a>
              <a className="sesen-smpc-link" href="https://www.sesen.com/ectd-ctd-translation-services/">CTD & eCTD Translation <Arrow /></a>
            </div>
          </div>
          <aside className="sesen-smpc-program-panel">
            <h3>Programs We Support</h3>
            <ul className="sesen-smpc-program-list">
              <li>Initial multilingual product information</li>
              <li>Centralized European authorization workflows</li>
              <li>Decentralized and mutual-recognition environments where applicable</li>
              <li>Nationally authorized product information</li>
              <li>Multilingual linguistic review</li>
              <li>Market and language expansion</li>
              <li>New strengths or pharmaceutical forms</li>
              <li>Post-authorization variations and safety-driven updates</li>
              <li>Recurring SmPC maintenance</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--soft">
        <div className="sesen-smpc-container sesen-smpc-workflow-shell">
          <div className="sesen-smpc-workflow-intro sesen-smpc-mobile-left">
            <h2>A Controlled Workflow From Source SmPC to Final Languages</h2>
            <p className="sesen-smpc-lead">
              Successful SmPC translation depends on what happens before, during, and after the linguistic work itself.
            </p>
            <p>
              Sesen adapts the workflow to the product, authorization context, source materials, languages, existing approved translations, client requirements, and intended downstream use.
            </p>
          </div>
          <div className="sesen-smpc-workflow-list">
            {workflowSteps.map(([number, title, text]) => (
              <article className="sesen-smpc-workflow-step" key={number}>
                <div className="sesen-smpc-workflow-number">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container sesen-smpc-review-grid">
          <div>
            <div className="sesen-smpc-mobile-center">
              <h2>Support Through Linguistic Review and Finalization</h2>
            </div>
            <p className="sesen-smpc-lead" style={{ marginTop: 18 }}>
              European product information can move through structured linguistic-review cycles before final language versions are established. Sesen supports the language-production work from initial translation through comment resolution and finalization.
            </p>
            <p style={{ marginTop: 18 }}>
              For multinational programs, accepted language decisions can be captured in terminology and translation-memory resources instead of disappearing into isolated files and review threads.
            </p>
          </div>
          <div className="sesen-smpc-review-list">
            {[
              ["Reviewer-Ready Files", "Prepare translated product information for client, affiliate, in-country, or regulatory linguistic review."],
              ["Tracked & Clean Versions", "Keep proposed changes visible while preserving clean language versions for downstream use."],
              ["Comment Implementation", "Apply approved linguistic feedback consistently and check related occurrences when required."],
              ["Terminology Reconciliation", "Resolve conflicting preferences against approved terminology, references, and source meaning."],
              ["Cross-Language QA", "Review multiple language versions for systematic terminology, numeric, structural, or change-control issues."],
              ["Version Traceability", "Maintain clear relationships between source versions, language revisions, reviewer feedback, and final files."],
            ].map(([title, text]) => (
              <div className="sesen-smpc-review-item" key={title}><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--pale">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-center">
            <h2>Keep the SmPC, Package Leaflet, and Labeling Aligned</h2>
            <p className="sesen-smpc-lead">
              The SmPC, Package Leaflet, and product labeling serve different audiences and formats, but they describe the same medicinal product. Controlled consistency protects the approved product story across each language and asset.
            </p>
          </div>
          <div className="sesen-smpc-consistency-diagram">
            <article className="sesen-smpc-consistency-doc">
              <span>Healthcare Professionals</span>
              <h3>SmPC</h3>
              <p>Detailed approved clinical, pharmacological, pharmaceutical, and safe-use information.</p>
            </article>
            <article className="sesen-smpc-consistency-doc">
              <span>Patients & Medicine Users</span>
              <h3>Package Leaflet / PIL</h3>
              <p>Patient-facing product information aligned with the approved SmPC while written for its intended audience.</p>
            </article>
            <article className="sesen-smpc-consistency-doc">
              <span>Product Identification & Safe Use</span>
              <h3>Labeling & Packaging</h3>
              <p>Highly structured product information appearing on cartons, containers, labels, and other packaging components.</p>
            </article>
          </div>
          <p className="sesen-smpc-consistency-rule">The goal is not word-for-word identity. It is aligned meaning, controlled terminology, and traceable product information across every language and format.</p>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container sesen-smpc-lifecycle-grid">
          <div>
            <p className="sesen-smpc-eyebrow">Lifecycle Management</p>
            <div className="sesen-smpc-mobile-left"><h2>SmPC Translation Doesn't End at Approval</h2></div>
            <p className="sesen-smpc-lead" style={{ marginTop: 18 }}>
              As the medicinal product changes, the approved SmPC can change with it. Variations, safety findings, new indications, strengths, terminology updates, authority comments, and market expansion can all create downstream multilingual work.
            </p>
            <div className="sesen-smpc-lifecycle-flow" aria-label="SmPC lifecycle workflow">
              <div>Approved SmPC</div>
              <div>Product or Safety Change</div>
              <div>Source Version Comparison</div>
              <div>Multilingual Update</div>
              <div>PIL & Labeling Impact Check</div>
              <div>Linguistic Review</div>
              <div>Finalized Language Versions</div>
            </div>
          </div>
          <div className="sesen-smpc-lifecycle-cards">
            {lifecycleItems.map(([title, text]) => (
              <article className="sesen-smpc-lifecycle-card" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--pale">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-center">
            <h2>AI-Assisted QA. Expert Pharmaceutical Review.</h2>
            <p className="sesen-smpc-lead">
              Automation can add value to repetitive, comparison-heavy quality tasks, while regulated pharmaceutical content still requires qualified human judgment.
            </p>
          </div>
          <div className="sesen-smpc-ai-grid">
            <article className="sesen-smpc-ai-panel">
              <h3>Technology Can Help Surface</h3>
              <ul className="sesen-smpc-ai-list">
                {["Terminology inconsistencies", "Numerical and unit discrepancies", "Missing or added content", "Repeated-content mismatches", "Version changes and source-to-target anomalies", "Potential cross-document inconsistencies"].map((item) => <li key={item}><Check /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="sesen-smpc-ai-panel sesen-smpc-ai-panel--human">
              <h3>Human Experts Remain Responsible For</h3>
              <ul className="sesen-smpc-ai-list">
                {["Clinical meaning", "Pharmaceutical terminology", "Regulatory-linguistic context", "Interpretation of source ambiguity", "Evaluation of automated findings", "Reviewer comment resolution and final linguistic decisions"].map((item) => <li key={item}><Check /><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
          <div className="sesen-smpc-ai-statement">Technology identifies potential inconsistencies. Pharmaceutical language experts evaluate and resolve them.</div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-center">
            <h2>Support Across European Product Information Environments</h2>
            <p className="sesen-smpc-lead">
              SmPC requirements and workflows depend on the applicable authorization pathway and market. Sesen supports the language layer using approved source content, applicable references, existing translations, terminology, and project-specific requirements.
            </p>
          </div>
          <div className="sesen-smpc-region-grid">
            <article className="sesen-smpc-region">
              <div className="sesen-smpc-region-icon"><GlobeIcon /></div>
              <h3>European Union / EEA</h3>
              <p>Support multilingual product-information workflows involving applicable European structures and resources.</p>
              <ul className="sesen-smpc-feature-list">
                <li>EMA QRD conventions</li>
                <li>SmPC and Package Leaflet translation</li>
                <li>Multilingual linguistic review</li>
                <li>EDQM and relevant medical terminology</li>
                <li>Post-authorization updates and lifecycle maintenance</li>
              </ul>
            </article>
            <article className="sesen-smpc-region">
              <div className="sesen-smpc-region-icon"><DocumentIcon /></div>
              <h3>United Kingdom</h3>
              <p>Support UK SPC/SmPC and connected product information according to applicable MHRA templates, client-approved source materials, and current project requirements.</p>
              <ul className="sesen-smpc-feature-list">
                <li>UK SPC/SmPC translation</li>
                <li>Connected patient and labeling information</li>
                <li>Applicable MHRA templates and requirements</li>
                <li>Terminology continuity across EU and UK programs</li>
                <li>Controlled post-licensing updates</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--soft">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-epi-grid">
            <div>
              <div className="sesen-smpc-mobile-center">
                <h2>Supporting the Shift Toward Structured Product Information</h2>
              </div>
              <p className="sesen-smpc-lead" style={{ marginTop: 18 }}>
                European product-information initiatives are advancing structured electronic formats for authorized medicinal-product information. ePI can represent SmPC, Package Leaflet, and labeling content in a structured electronic form where applicable.
              </p>
              <p style={{ marginTop: 18 }}>
                This direction increases the value of multilingual content that is consistently structured, terminology controlled, reusable, version aware, and traceable across product-information components.
              </p>
            </div>
            <div className="sesen-smpc-epi-capabilities">
              {[
                ["Structured Translation Workflows", "Maintain multilingual content against defined information structures rather than treating every file as free-form text."],
                ["Terminology Governance", "Apply approved product terminology across SmPC, Package Leaflet, labeling, and related content."],
                ["Translation Memory", "Retain validated multilingual content for controlled reuse."],
                ["Version Management", "Track how product information changes across source and language versions."],
                ["Multilingual QA", "Use automation and expert review to identify inconsistencies across structured content sets."],
                ["Lifecycle Continuity", "Carry approved language forward as product information moves through future versions and delivery formats."],
              ].map(([title, text]) => <div className="sesen-smpc-epi-capability" key={title}><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
          <div className="sesen-smpc-epi-flow" aria-label="Structured product information workflow">
            <div className="sesen-smpc-epi-step">Approved Product Information</div>
            <div className="sesen-smpc-epi-step">Structured Content</div>
            <div className="sesen-smpc-epi-step">Multilingual Product Information</div>
            <div className="sesen-smpc-epi-step">Electronic Publication & Reuse</div>
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-center">
            <h2>Quality Controls Built for Regulated Product Information</h2>
            <p className="sesen-smpc-lead">
              Sesen combines qualified resources, documented processes, terminology controls, technology, and project oversight to support accurate and traceable multilingual SmPC content.
            </p>
          </div>
          <div className="sesen-smpc-quality-grid">
            {qualityItems.map(([title, text], index) => (
              <article className="sesen-smpc-quality-item" key={title}>
                <div className="sesen-smpc-quality-icon">{index % 2 === 0 ? <ShieldIcon /> : <DocumentIcon />}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-smpc-quality-link"><a className="sesen-smpc-link" href="https://www.sesen.com/quality-compliance-security/">Explore Sesen Quality, Compliance & Security <Arrow /></a></div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--pale">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-mobile-center">
            <h2>SmPC Translation for Pharmaceutical Product Teams</h2>
            <p className="sesen-smpc-lead">
              Sesen works with teams responsible for creating, approving, maintaining, and distributing multilingual medicinal-product information.
            </p>
          </div>
          <div className="sesen-smpc-audience-list">
            {audiences.map(([title, text]) => <article className="sesen-smpc-audience-row" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-center">
            <h2>Why Pharmaceutical Teams Choose Sesen</h2>
            <p className="sesen-smpc-lead">
              Specialized life sciences expertise, human linguistic judgment, and controlled technology come together to support multilingual product information from first translation through recurring lifecycle maintenance.
            </p>
          </div>
          <div className="sesen-smpc-why-grid">
            {[
              ["Specialized Life Sciences Expertise", "A regulated-content language workflow designed around pharmaceutical, medical, labeling, and safety requirements."],
              ["SmPC & Product Information Understanding", "A connected approach to the SmPC, Package Leaflet, labeling, terminology, review, and post-authorization updates."],
              ["150+ Languages", "Support individual markets, coordinated European language sets, and broader global pharmaceutical portfolios."],
              ["Human Expertise + Smarter Technology", "Professional linguistic decisions supported by translation technology, terminology systems, automation, and AI-assisted QA."],
              ["Lifecycle Continuity", "Carry approved language, terminology, memories, reviewer decisions, and product knowledge into successive updates."],
              ["Scalable Program Management", "Coordinate multi-language projects, parallel review cycles, recurring updates, and multi-product portfolios through one specialized partner."],
            ].map(([title, text]) => <article className="sesen-smpc-why-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section sesen-smpc-section--soft">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-mobile-left">
            <h2>Connected Pharmaceutical Translation Services</h2>
            <p className="sesen-smpc-lead">
              SmPC translation sits within a broader pharmaceutical content lifecycle and often intersects with labeling, regulatory submission, dossier, and drug-safety workflows. Explore the specialist service that matches the next layer of your program.
            </p>
          </div>
          <div className="sesen-smpc-services">
            {relatedServices.map(([title, text, href, link]) => (
              <article className="sesen-smpc-service-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="sesen-smpc-link" href={href}>{link} <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-section">
        <div className="sesen-smpc-container">
          <div className="sesen-smpc-heading sesen-smpc-heading--center sesen-smpc-mobile-left">
            <h2>SmPC Translation FAQs</h2>
            <p className="sesen-smpc-lead">Answers to common questions about multilingual SmPC translation, QRD-aligned workflows, linguistic review, lifecycle updates, terminology, and connected product information.</p>
          </div>
          <div className="sesen-smpc-faq">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <div className="sesen-smpc-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-smpc-final">
        <div className="sesen-smpc-container sesen-smpc-final-grid">
          <div>
            <h2>Keep Every SmPC Version Accurate, Aligned, and Ready for What Comes Next</h2>
            <p>
              Whether you are preparing initial multilingual product information, coordinating European language versions, responding to linguistic review, implementing a variation, updating safety information, adding new markets, or maintaining an established portfolio, Sesen can help manage multilingual SmPC content with greater linguistic control and lifecycle continuity.
            </p>
            <div className="sesen-smpc-final-tags"><span>SmPC Translation</span><span>QRD-Aligned Workflows</span><span>Linguistic Review</span><span>Lifecycle Updates</span><span>150+ Languages</span></div>
          </div>
          <div className="sesen-smpc-button-row">
            <a className="sesen-smpc-button sesen-smpc-button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Arrow /></a>
            <a className="sesen-smpc-button sesen-smpc-button--secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
