import React, { useState } from "react";

/**
 * Sesen — Patient Information Leaflet Translation Services
 * Wireframe v3 — mobile/tablet refinement, customer-facing content audit, internal-link QA, and eyebrow cleanup.
 * Body-only page wireframe. Global navigation/footer intentionally omitted.
 */
export default function PatientInformationLeafletTranslationServices() {
  const [openFaq, setOpenFaq] = useState(0);

  const trustItems = [
    "Life Sciences Specialization",
    "ISO-Certified Language Services",
    "150+ Languages",
    "Patient-Focused Translation",
    "In-Context QA",
  ];

  const patientNeeds = [
    "What the medicine is and what it is used for",
    "What to know before taking or using it",
    "How and when to take or administer it",
    "Important warnings and precautions",
    "Possible side effects",
    "What to do if a dose is missed or too much is taken",
    "How the medicine should be stored",
    "Where to find additional product information",
  ];

  const sourceInfo = [
    "SmPC / approved product information",
    "Reference labeling",
    "Approved safety language",
    "Indications and therapeutic use",
    "Dosage and administration",
    "Contraindications",
    "Warnings and precautions",
    "Adverse reactions and storage requirements",
  ];

  const workflow = [
    {
      title: "Source & Version Review",
      copy:
        "We begin with the current controlled source and review available product information, prior leaflet versions, reference labeling, existing translations, approved terminology, target markets, languages, file formats, and delivery requirements.",
    },
    {
      title: "Terminology & Reference Alignment",
      copy:
        "Client glossaries, SmPC terminology, approved product names, active ingredient terminology, translation memories, style guides, and regulatory references are aligned before translation begins.",
    },
    {
      title: "Patient-Readable Translation",
      copy:
        "Professional life sciences linguists preserve approved meaning while using clear, natural language appropriate for the intended patient population.",
    },
    {
      title: "Regional & Market Alignment",
      copy:
        "Terminology, language variants, reference templates, regulatory conventions, and presentation requirements are aligned to the target market and authorization pathway.",
    },
    {
      title: "Specialist Linguistic Review",
      copy:
        "Review focuses on medical meaning, completeness, terminology, warnings, dosage information, numbers and units, side-effect information, and patient-facing clarity.",
    },
    {
      title: "Multilingual Layout & Artwork",
      copy:
        "Translated content is integrated into the required leaflet format with attention to text expansion, hierarchy, typography, tables, lists, symbols, page flow, and language-specific typesetting.",
    },
    {
      title: "In-Context Linguistic QA",
      copy:
        "Final or near-final files are checked for missing or duplicated text, truncation, incorrect headings, numeric discrepancies, formatting shifts, and other issues that only become visible in layout.",
    },
    {
      title: "Controlled Delivery & Lifecycle Updates",
      copy:
        "Established terminology, translation memories, approved references, and previous translations can be carried forward when product information changes.",
    },
  ];

  const patientContentGroups = [
    {
      title: "Product & Medicine Information",
      items: [
        "Product and medicine names",
        "Active substances",
        "Strengths and dosage forms",
        "Therapeutic purpose",
        "Pack contents",
        "Manufacturer and marketing authorization holder information",
      ],
    },
    {
      title: "Before Taking or Using the Medicine",
      items: [
        "Contraindications",
        "Warnings and precautions",
        "Drug and food interactions",
        "Allergies and excipient information",
        "Pregnancy and breastfeeding information",
        "Fertility, driving, and machine-use precautions",
      ],
    },
    {
      title: "Dosage & Administration",
      items: [
        "How much medicine to take",
        "How and when to take or use it",
        "Duration of treatment",
        "Administration methods",
        "Missed-dose instructions",
        "Overdose and discontinuation guidance",
      ],
    },
    {
      title: "Side Effects, Storage & Safety",
      items: [
        "Possible adverse effects",
        "Serious reactions requiring attention",
        "Frequency information",
        "Safety warnings and reporting instructions",
        "Storage and handling precautions",
        "Disposal and child-safety statements",
      ],
    },
  ];

  const readabilityTopics = [
    {
      title: "Warnings",
      copy:
        "Warnings need to remain appropriately prominent and preserve the intended level of risk.",
    },
    {
      title: "Dosage Instructions",
      copy:
        "Quantities, frequencies, timing, routes of administration, and conditional instructions require exact handling.",
    },
    {
      title: "Side Effects",
      copy:
        "Adverse-effect terminology should remain medically accurate while being understandable in the intended patient context.",
    },
    {
      title: "Actions for Patients",
      copy:
        "Instructions to stop treatment, seek care, contact a healthcare professional, or take another action must stay clear and unambiguous.",
    },
    {
      title: "Recurring Terms",
      copy:
        "The same product, condition, ingredient, or medical concept should not drift from one section to another.",
    },
    {
      title: "Numbers & Units",
      copy:
        "Strengths, concentrations, frequencies, measurements, ages, temperatures, and other numerical information require controlled review.",
    },
  ];

  const relatedAssets = [
    "SmPC",
    "Patient Information Leaflet (PIL)",
    "Carton & Product Label",
    "Packaging & Artwork",
    "Safety Communications",
    "Digital Product Information",
  ];

  const qaChecks = [
    "Source-to-target completeness",
    "Headings and section order",
    "Warnings and precautions",
    "Dosage information",
    "Numbers and units",
    "Product and ingredient names",
    "Cross-references",
    "Missing or duplicated text",
    "Text overflow and truncation",
    "Language display and typography",
    "Formatting consistency",
    "Final PDF / artwork context",
  ];

  const lifecycle = [
    "Safety information changes",
    "New warnings or precautions",
    "Dosage or indication updates",
    "Contraindication changes",
    "Adverse-event information",
    "Regulatory decisions",
    "Product or manufacturer changes",
    "Packaging or market-specific updates",
  ];

  const qualityItems = [
    {
      title: "Professional Native Linguists",
      copy:
        "Projects can be matched with professional native-language linguists whose pharmaceutical, medical, scientific, regulatory, and patient-communication experience fits the content.",
    },
    {
      title: "ISO-Certified Language Services",
      copy:
        "Sesen maintains ISO 17100, ISO 9001, and ISO 13485 certified language-service capabilities as part of its broader quality framework.",
    },
    {
      title: "Terminology Management",
      copy:
        "Glossaries, translation memories, reference materials, style guidance, and client-approved language help maintain continuity across products, documents, and versions.",
    },
    {
      title: "Structured Quality Assurance",
      copy:
        "Human review can be supported by automated checks for terminology, numbers, units, completeness, formatting, and recurring content.",
    },
    {
      title: "Version & Change Control",
      copy:
        "Version-aware workflows help teams manage ongoing labeling revisions and product-information updates.",
    },
    {
      title: "Secure Enterprise Workflows",
      copy:
        "Controlled project workflows support confidential regulatory materials, proprietary terminology, product information, and pre-launch content.",
    },
  ];

  const reasons = [
    {
      title: "Specialized Life Sciences Expertise",
      copy:
        "PIL content is handled as regulated pharmaceutical product information—not as general-purpose translation.",
    },
    {
      title: "Regulatory and Patient Perspective",
      copy:
        "Our workflows preserve controlled medical meaning while producing language appropriate to the people who will read and use the leaflet.",
    },
    {
      title: "Connected Labeling Expertise",
      copy:
        "Sesen can support the related product-information environment surrounding the PIL, including SmPCs, labels, packaging, safety content, and digital product information.",
    },
    {
      title: "Global Program Coordination",
      copy:
        "Centralized terminology, reference materials, and project management support coordinated multilingual launches, regional rollouts, and market updates.",
    },
    {
      title: "Lifecycle Continuity",
      copy:
        "Established terminology, translation memories, approved references, and previous translations can be carried forward as product information changes.",
    },
    {
      title: "Human Expertise + Technology",
      copy:
        "Professional linguists and reviewers work with terminology tools, translation memory, automation, and AI-assisted QA to combine expert judgment with efficient multilingual workflows.",
    },
  ];

  const relatedServices = [
    {
      title: "SmPC Translation Services",
      href: "https://www.sesen.com/smpc-translation-services/",
      copy:
        "Specialized translation of Summary of Product Characteristics content for multilingual regulatory and product-information workflows.",
    },
    {
      title: "Drug Labeling & Packaging Translation Services",
      href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
      copy:
        "Translation of regulated drug labels, package inserts, patient leaflets, cartons, artwork, and other pharmaceutical labeling assets.",
    },
    {
      title: "Labeling Translation Services",
      href: "https://www.sesen.com/labeling-translation-services/",
      copy:
        "Connected multilingual labeling support across pharmaceutical, medical device, diagnostic, packaging, patient, professional, and digital product information.",
    },
    {
      title: "Regulatory Translation Services",
      href: "https://www.sesen.com/regulatory-translation-services/",
      copy:
        "Specialized multilingual support for regulated submissions, health authority communication, product information, quality documentation, and other regulatory content.",
    },
    {
      title: "Pharmaceutical Translation Services",
      href: "https://www.sesen.com/pharmaceutical-translation-services/",
      copy:
        "Translation and localization support across pharmaceutical development, clinical programs, regulatory affairs, labeling, safety, and product lifecycle activities.",
    },
    {
      title: "Medical Packaging Design Translation & Formatting",
      href: "https://www.sesen.com/medical-packaging-design-translation-formatting/",
      copy:
        "Multilingual formatting and production support for pharmaceutical labels, cartons, leaflets, packaging, and other design-sensitive product content.",
    },
    {
      title: "Label Review & In-Context QA",
      href: "https://www.sesen.com/label-review-in-context-qa/",
      copy:
        "Review translated labeling within final or near-final layouts to identify linguistic, formatting, terminology, and presentation issues.",
    },
  ];

  const faqs = [
    {
      q: "What is Patient Information Leaflet translation?",
      a:
        "Patient Information Leaflet translation is the specialized translation of regulated medicine information intended for patients into one or more target languages. A PIL can contain information about what a medicine is used for, precautions, contraindications, dosage and administration, possible side effects, storage, pack contents, and other information patients need for safe and appropriate use. Within European product information, the term package leaflet is commonly used, while Patient Information Leaflet (PIL) is established terminology in the UK.",
    },
    {
      q: "What is the difference between a PIL and an SmPC?",
      a:
        "A Summary of Product Characteristics (SmPC) provides approved professional product information and is primarily intended for healthcare professionals and regulatory use. A Patient Information Leaflet communicates relevant product information to patients in a form intended for the medicine user. The two are closely connected and need consistent medical, product, and safety terminology.",
    },
    {
      q: "Is a Patient Information Leaflet the same as a package leaflet?",
      a:
        "Terminology varies by market. Package leaflet is commonly used in European medicinal product information, while the UK commonly uses Patient Information Leaflet (PIL). Other markets may use different document names, so the intended document type, market, and regulatory references should be confirmed during project scoping.",
    },
    {
      q: "Does Sesen translate EU package leaflets?",
      a:
        "Yes. Sesen supports multilingual pharmaceutical product information for European markets, including package-leaflet content. Workflows can incorporate applicable approved source information, client references, QRD terminology and templates where relevant, target-market requirements, multilingual formatting, and linguistic QA.",
    },
    {
      q: "Can Sesen maintain consistency between an SmPC and its Patient Information Leaflet?",
      a:
        "Yes. Shared terminology resources, approved references, translation memory, existing translations, and structured cross-document review can help keep recurring product, medical, dosage, and safety terminology aligned.",
    },
    {
      q: "Does Sesen perform PIL readability testing?",
      a:
        "Formal regulatory readability testing or user consultation is separate from linguistic translation and review. Sesen's core PIL workflow can support patient-focused translation, linguistic review, terminology control, multilingual formatting, and in-context QA, helping prepare high-quality multilingual leaflet content for the client's applicable regulatory and downstream review process.",
    },
    {
      q: "Can Sesen format translated Patient Information Leaflets?",
      a:
        "Yes. Sesen supports multilingual desktop publishing and formatting for PILs, including text expansion, typography, tables, lists, multi-column layouts, right-to-left languages, page flow, and other language-specific production requirements. Sesen can also perform in-context linguistic QA after translated content has been placed into final or near-final artwork.",
    },
    {
      q: "How does Sesen handle an update to an existing PIL?",
      a:
        "Sesen can compare the revised source with previous versions, identify changed content, reuse appropriate established translations, apply approved terminology, translate and review the revisions, update the layout, and perform final-context QA. This version-aware approach helps maintain continuity while avoiding unnecessary retranslation of unchanged content.",
    },
    {
      q: "Can Sesen translate PILs into multiple languages at the same time?",
      a:
        "Yes. Sesen supports multilingual PIL programs across 150+ languages, including simultaneous global launches, regional programs, single-market updates, and ongoing labeling maintenance. Centralized terminology, translation memory, reference materials, and project management help keep language versions aligned.",
    },
    {
      q: "Does Sesen use AI for Patient Information Leaflet translation?",
      a:
        "Sesen can use AI-enabled technology selectively to support tasks such as terminology comparison, missing-content detection, numeric checks, repeated-content consistency, version analysis, and multilingual QA. For regulated patient-facing content, professional human expertise remains central to meaning, context, terminology, clarity, and final linguistic decisions.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? -1 : index));
  };

  return (
    <main className="sesen-page-pil">
      <style>{`
        .sesen-page-pil {
          --pil-blue: #4B6FD8;
          --pil-blue-dark: #3659BB;
          --pil-blue-deep: #253F8F;
          --pil-blue-mid: #6F8BE1;
          --pil-blue-soft: #EAF0FF;
          --pil-blue-pale: #F5F7FF;
          --pil-navy: #17264D;
          --pil-ink: #111827;
          --pil-body: #46546D;
          --pil-muted: #68758B;
          --pil-border: #DDE4F2;
          --pil-divider: #E9EEF8;
          --pil-surface: #F7F9FD;
          --pil-white: #FFFFFF;
          --pil-light-accent: #C8D6FF;
          color: var(--pil-body);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: var(--pil-white);
          overflow-x: clip;
        }

        .sesen-page-pil * {
          box-sizing: border-box;
        }

        .sesen-page-pil a {
          color: inherit;
        }

        .sesen-page-pil img,
        .sesen-page-pil svg {
          max-width: 100%;
        }

        .sesen-page-pil .pil-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .sesen-page-pil .pil-section {
          padding-block: 96px;
        }

        .sesen-page-pil .pil-section--dense {
          padding-block: 80px;
        }

        .sesen-page-pil .pil-section--soft {
          background: var(--pil-surface);
        }

        .sesen-page-pil .pil-section--blue-soft {
          background: var(--pil-blue-pale);
        }

        .sesen-page-pil .pil-section--deep {
          background: var(--pil-navy);
          color: var(--pil-white);
        }

        .sesen-page-pil .pil-eyebrow {
          margin: 0 0 14px;
          color: var(--pil-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sesen-page-pil .pil-section--deep .pil-eyebrow {
          color: var(--pil-light-accent);
        }

        .sesen-page-pil h1,
        .sesen-page-pil h2,
        .sesen-page-pil h3 {
          margin: 0;
          color: var(--pil-navy);
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 500;
        }

        .sesen-page-pil h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-page-pil h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .sesen-page-pil h3 {
          font-size: 23px;
          line-height: 1.3;
        }

        .sesen-page-pil .pil-section--deep h2,
        .sesen-page-pil .pil-section--deep h3 {
          color: var(--pil-white);
        }

        .sesen-page-pil p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
        }

        .sesen-page-pil .pil-lead {
          color: #293954;
          font-size: 19px;
          line-height: 1.65;
        }

        .sesen-page-pil .pil-section--deep .pil-lead,
        .sesen-page-pil .pil-section--deep p {
          color: #DCE5FF;
        }

        .sesen-page-pil .pil-intro {
          max-width: 800px;
          margin-top: 18px;
          color: var(--pil-body);
          font-size: 18px;
          line-height: 1.7;
        }

        .sesen-page-pil .pil-section--deep .pil-intro {
          color: #DCE5FF;
        }

        .sesen-page-pil .pil-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          color: var(--pil-blue-dark);
          font-size: 16px;
          font-weight: 650;
          line-height: 1.45;
          text-decoration: none;
        }

        .sesen-page-pil .pil-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-page-pil .pil-link:focus-visible,
        .sesen-page-pil .pil-btn:focus-visible,
        .sesen-page-pil .pil-faq__button:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.35);
          outline-offset: 4px;
        }

        .sesen-page-pil .pil-btn {
          min-height: 50px;
          padding: 0 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .sesen-page-pil .pil-btn:hover {
          transform: translateY(-1px);
        }

        .sesen-page-pil .pil-btn--primary {
          border: 1px solid var(--pil-blue);
          background: var(--pil-blue);
          color: var(--pil-white);
        }

        .sesen-page-pil .pil-btn--primary:hover {
          border-color: var(--pil-blue-dark);
          background: var(--pil-blue-dark);
        }

        .sesen-page-pil .pil-btn--secondary {
          border: 1px solid var(--pil-border);
          background: var(--pil-white);
          color: var(--pil-ink);
        }

        .sesen-page-pil .pil-btn--secondary:hover {
          border-color: #BAC7E4;
          background: var(--pil-blue-pale);
        }

        .sesen-page-pil .pil-hero {
          position: relative;
          padding-block: 92px 88px;
          background:
            radial-gradient(circle at 89% 18%, rgba(234, 240, 255, 0.95) 0, rgba(234, 240, 255, 0) 34%),
            var(--pil-white);
        }

        .sesen-page-pil .pil-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: 64px;
          align-items: center;
        }

        .sesen-page-pil .pil-hero__copy {
          max-width: 700px;
        }

        .sesen-page-pil .pil-hero__lead {
          max-width: 680px;
          margin-top: 24px;
          color: #293954;
          font-size: 19px;
          line-height: 1.7;
        }

        .sesen-page-pil .pil-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .sesen-page-pil .pil-hero__visual {
          position: relative;
          min-height: 450px;
          display: grid;
          place-items: center;
        }

        .sesen-page-pil .pil-hero__halo {
          position: absolute;
          inset: 9% 4% 5%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(234,240,255,0.96) 0, rgba(245,247,255,0.55) 46%, rgba(255,255,255,0) 73%);
        }

        .sesen-page-pil .pil-hero-art {
          position: relative;
          width: 100%;
          max-width: 480px;
          filter: drop-shadow(0 20px 30px rgba(23, 38, 77, 0.06));
        }

        .sesen-page-pil .pil-trust {
          border-top: 1px solid var(--pil-divider);
          border-bottom: 1px solid var(--pil-divider);
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-trust__inner {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          align-items: center;
        }

        .sesen-page-pil .pil-trust__item {
          min-height: 74px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--pil-navy);
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
          text-align: center;
        }


        .sesen-page-pil .pil-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--pil-blue);
        }

        .sesen-page-pil .pil-two-col {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 76px;
          align-items: start;
        }

        .sesen-page-pil .pil-two-col--reverse {
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        }

        .sesen-page-pil .pil-editorial-list {
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-editorial-list li {
          position: relative;
          min-height: 54px;
          padding: 15px 12px 15px 34px;
          border-bottom: 1px solid var(--pil-divider);
          color: var(--pil-body);
          font-size: 16px;
          line-height: 1.5;
        }

        .sesen-page-pil .pil-editorial-list li::before {
          content: "";
          position: absolute;
          top: 23px;
          left: 4px;
          width: 9px;
          height: 9px;
          border: 2px solid var(--pil-blue);
          border-radius: 50%;
        }

        .sesen-page-pil .pil-callout {
          margin-top: 30px;
          padding: 24px 26px;
          border-left: 2px solid var(--pil-blue);
          background: var(--pil-blue-pale);
          color: var(--pil-navy);
          font-size: 19px;
          line-height: 1.55;
          font-weight: 500;
        }

        .sesen-page-pil .pil-transform {
          margin-top: 48px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.9fr) minmax(0, 1fr);
          align-items: stretch;
          border: 1px solid var(--pil-border);
          border-radius: 28px;
          overflow: hidden;
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-transform__side {
          padding: 34px 34px 32px;
        }

        .sesen-page-pil .pil-transform__side h3 {
          margin-bottom: 20px;
        }

        .sesen-page-pil .pil-transform__list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sesen-page-pil .pil-transform__list li {
          padding: 9px 0;
          border-bottom: 1px solid var(--pil-divider);
          font-size: 16px;
          line-height: 1.45;
        }

        .sesen-page-pil .pil-transform__list li:last-child {
          border-bottom: 0;
        }

        .sesen-page-pil .pil-transform__center {
          padding: 34px 26px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--pil-blue-pale);
          border-left: 1px solid var(--pil-border);
          border-right: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-transform__center h3 {
          margin-bottom: 22px;
          color: var(--pil-blue-deep);
        }

        .sesen-page-pil .pil-transform__step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: var(--pil-navy);
          font-size: 16px;
          line-height: 1.35;
          font-weight: 600;
        }

        .sesen-page-pil .pil-transform__step::before {
          content: "";
          width: 10px;
          height: 10px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--pil-blue);
          box-shadow: 0 0 0 5px rgba(75, 111, 216, 0.12);
        }

        .sesen-page-pil .pil-patient-prompts {
          margin-top: 22px;
          display: grid;
          gap: 12px;
        }

        .sesen-page-pil .pil-prompt {
          padding: 13px 0;
          border-bottom: 1px solid var(--pil-divider);
          color: var(--pil-navy);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .sesen-page-pil .pil-prompt:last-child {
          border-bottom: 0;
        }

        .sesen-page-pil .pil-scope-grid {
          margin-top: 46px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--pil-border);
          border-bottom: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-scope {
          padding: 30px 26px 28px;
        }

        .sesen-page-pil .pil-scope + .pil-scope {
          border-left: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-scope h3 {
          min-height: 60px;
          margin-bottom: 18px;
          font-size: 21px;
        }

        .sesen-page-pil .pil-scope ul {
          margin: 0;
          padding-left: 19px;
        }

        .sesen-page-pil .pil-scope li {
          margin: 9px 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .sesen-page-pil .pil-note {
          max-width: 880px;
          margin-top: 30px;
          color: var(--pil-muted);
          font-size: 16px;
          line-height: 1.65;
        }

        .sesen-page-pil .pil-workflow {
          margin-top: 46px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 56px;
        }

        .sesen-page-pil .pil-workflow__item {
          position: relative;
          min-height: 218px;
          padding: 26px 14px 28px 74px;
          border-top: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-workflow__num {
          position: absolute;
          left: 0;
          top: 24px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--pil-blue-soft);
          color: var(--pil-blue-dark);
          font-size: 14px;
          font-weight: 700;
        }

        .sesen-page-pil .pil-workflow__item h3 {
          margin-bottom: 12px;
          font-size: 22px;
        }

        .sesen-page-pil .pil-regions {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .sesen-page-pil .pil-region {
          padding: 30px;
          border: 1px solid var(--pil-border);
          border-radius: 22px;
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-region h3 {
          margin-bottom: 14px;
        }

        .sesen-page-pil .pil-region p + p {
          margin-top: 12px;
        }

        .sesen-page-pil .pil-readability {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 54px;
          border-top: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-readability__row {
          padding: 26px 0;
          border-bottom: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-readability__row h3 {
          margin-bottom: 9px;
          font-size: 20px;
        }

        .sesen-page-pil .pil-scope-guard {
          margin-top: 34px;
          padding: 26px 28px;
          border: 1px solid var(--pil-border);
          border-radius: 18px;
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-scope-guard strong {
          color: var(--pil-navy);
          font-weight: 650;
        }

        .sesen-page-pil .pil-connected {
          margin-top: 46px;
          padding: 36px;
          border: 1px solid var(--pil-border);
          border-radius: 28px;
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-connected__map {
          display: grid;
          grid-template-columns: minmax(210px, 0.72fr) minmax(0, 1.28fr);
          gap: 26px;
          align-items: stretch;
        }

        .sesen-page-pil .pil-connected__hub {
          min-height: 210px;
          padding: 28px;
          border-radius: 20px;
          background: var(--pil-navy);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sesen-page-pil .pil-connected__hub span {
          margin-bottom: 9px;
          color: var(--pil-light-accent);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sesen-page-pil .pil-connected__hub strong {
          color: var(--pil-white);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 27px;
          line-height: 1.3;
          font-weight: 500;
        }

        .sesen-page-pil .pil-connected__assets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .sesen-page-pil .pil-connected__node {
          min-height: 96px;
          padding: 20px;
          border: 1px solid var(--pil-border);
          border-radius: 16px;
          background: var(--pil-blue-pale);
          color: var(--pil-navy);
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 650;
        }

        .sesen-page-pil .pil-governance {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid var(--pil-divider);
          border-bottom: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-governance__item {
          padding: 24px 18px;
        }

        .sesen-page-pil .pil-governance__item + .pil-governance__item {
          border-left: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-governance__item strong {
          display: block;
          margin-bottom: 8px;
          color: var(--pil-navy);
          font-size: 16px;
          line-height: 1.35;
        }

        .sesen-page-pil .pil-governance__item p {
          color: var(--pil-muted);
        }

        .sesen-page-pil .pil-leaflet-mock {
          position: relative;
          min-height: 480px;
          display: grid;
          place-items: center;
        }

        .sesen-page-pil .pil-leaflet-mock__sheet {
          position: relative;
          width: min(100%, 430px);
          min-height: 390px;
          padding: 28px;
          border: 1px solid #CBD6EA;
          border-radius: 18px;
          background: var(--pil-white);
          box-shadow: 0 24px 50px rgba(23, 38, 77, 0.10);
          transform: rotate(-2deg);
        }

        .sesen-page-pil .pil-leaflet-mock__bar {
          height: 14px;
          border-radius: 999px;
          background: var(--pil-blue-soft);
        }

        .sesen-page-pil .pil-leaflet-mock__bar--title {
          width: 62%;
          height: 17px;
          background: rgba(75, 111, 216, 0.30);
        }

        .sesen-page-pil .pil-leaflet-mock__bar + .pil-leaflet-mock__bar {
          margin-top: 10px;
        }

        .sesen-page-pil .pil-leaflet-mock__cols {
          margin-top: 25px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .sesen-page-pil .pil-leaflet-mock__block {
          padding-top: 14px;
          border-top: 2px solid var(--pil-blue);
        }

        .sesen-page-pil .pil-leaflet-mock__block .pil-leaflet-mock__bar:nth-child(2n) {
          width: 84%;
        }

        .sesen-page-pil .pil-leaflet-mock__block .pil-leaflet-mock__bar:nth-child(3n) {
          width: 68%;
        }

        .sesen-page-pil .pil-leaflet-mock__stamp {
          position: absolute;
          right: -18px;
          bottom: 26px;
          width: 86px;
          height: 86px;
          display: grid;
          place-items: center;
          border: 1px solid var(--pil-border);
          border-radius: 50%;
          background: var(--pil-white);
          color: var(--pil-blue-dark);
          font-size: 12px;
          line-height: 1.2;
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          box-shadow: 0 10px 24px rgba(23, 38, 77, 0.09);
        }

        .sesen-page-pil .pil-qa-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--pil-border);
          border-left: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-qa-grid__item {
          min-height: 92px;
          padding: 22px 22px 20px 50px;
          position: relative;
          border-right: 1px solid var(--pil-border);
          border-bottom: 1px solid var(--pil-border);
          background: var(--pil-white);
          color: var(--pil-navy);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .sesen-page-pil .pil-qa-grid__item::before {
          content: "✓";
          position: absolute;
          left: 20px;
          top: 21px;
          color: var(--pil-blue-dark);
          font-weight: 700;
        }

        .sesen-page-pil .pil-lifecycle {
          margin-top: 42px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 64px;
          align-items: start;
        }

        .sesen-page-pil .pil-change-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-change-list__item {
          padding: 17px 16px 17px 0;
          border-bottom: 1px solid var(--pil-divider);
          color: var(--pil-navy);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .sesen-page-pil .pil-change-list__item:nth-child(odd) {
          margin-right: 24px;
        }

        .sesen-page-pil .pil-update-stack {
          border: 1px solid var(--pil-border);
          border-radius: 24px;
          overflow: hidden;
          background: var(--pil-white);
        }

        .sesen-page-pil .pil-update-stack__row {
          padding: 22px 24px;
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          align-items: start;
        }

        .sesen-page-pil .pil-update-stack__row + .pil-update-stack__row {
          border-top: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-update-stack__icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--pil-blue-soft);
          color: var(--pil-blue-dark);
          font-size: 18px;
          font-weight: 700;
        }

        .sesen-page-pil .pil-update-stack__row strong {
          display: block;
          margin-bottom: 6px;
          color: var(--pil-navy);
          font-size: 16px;
        }

        .sesen-page-pil .pil-digital {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(350px, 0.8fr);
          gap: 70px;
          align-items: center;
        }

        .sesen-page-pil .pil-channel-visual {
          min-height: 360px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .sesen-page-pil .pil-channel-visual__ring {
          width: 270px;
          height: 270px;
          position: relative;
          display: grid;
          place-items: center;
          border: 1px solid #C9D5EC;
          border-radius: 50%;
        }

        .sesen-page-pil .pil-channel-visual__ring::before,
        .sesen-page-pil .pil-channel-visual__ring::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          border: 1px dashed #D8E2F3;
        }

        .sesen-page-pil .pil-channel-visual__ring::before {
          width: 210px;
          height: 210px;
        }

        .sesen-page-pil .pil-channel-visual__ring::after {
          width: 145px;
          height: 145px;
        }

        .sesen-page-pil .pil-channel-visual__core {
          width: 94px;
          height: 94px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--pil-blue);
          color: var(--pil-white);
          font-size: 14px;
          line-height: 1.25;
          font-weight: 700;
          text-align: center;
        }

        .sesen-page-pil .pil-channel-visual__label {
          position: absolute;
          padding: 9px 12px;
          border: 1px solid var(--pil-border);
          border-radius: 999px;
          background: var(--pil-white);
          color: var(--pil-navy);
          font-size: 13px;
          font-weight: 650;
          white-space: nowrap;
        }

        .sesen-page-pil .pil-channel-visual__label--one { top: 9%; left: 2%; }
        .sesen-page-pil .pil-channel-visual__label--two { top: 12%; right: -2%; }
        .sesen-page-pil .pil-channel-visual__label--three { bottom: 11%; left: -2%; }
        .sesen-page-pil .pil-channel-visual__label--four { bottom: 8%; right: 0; }

        .sesen-page-pil .pil-ai-grid {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 54px;
        }

        .sesen-page-pil .pil-ai-col {
          padding-top: 22px;
          border-top: 1px solid rgba(200, 214, 255, 0.25);
        }

        .sesen-page-pil .pil-ai-col h3 {
          margin-bottom: 16px;
        }

        .sesen-page-pil .pil-ai-col ul {
          margin: 0;
          padding-left: 20px;
        }

        .sesen-page-pil .pil-ai-col li {
          margin: 10px 0;
          color: #DCE5FF;
          font-size: 16px;
          line-height: 1.5;
        }

        .sesen-page-pil .pil-ai-statement {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(200, 214, 255, 0.25);
          color: var(--pil-white);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 24px;
          line-height: 1.45;
          font-weight: 500;
        }

        .sesen-page-pil .pil-quality {
          margin-top: 46px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--pil-divider);
          border-left: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-quality__item {
          padding: 28px 26px 30px;
          border-right: 1px solid var(--pil-divider);
          border-bottom: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-quality__item h3 {
          margin-bottom: 12px;
          font-size: 20px;
        }

        .sesen-page-pil .pil-global {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 72px;
          align-items: center;
        }

        .sesen-page-pil .pil-global__capabilities {
          border-top: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-global-capability {
          display: grid;
          grid-template-columns: minmax(150px, 0.55fr) minmax(0, 1fr);
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-global-capability strong {
          color: var(--pil-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 500;
        }

        .sesen-page-pil .pil-global-capability span {
          color: var(--pil-body);
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-page-pil .pil-reasons {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 58px;
          border-top: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-reason {
          padding: 26px 0 28px;
          border-bottom: 1px solid var(--pil-divider);
        }

        .sesen-page-pil .pil-reason h3 {
          margin-bottom: 9px;
          font-size: 20px;
        }

        .sesen-page-pil .pil-related {
          margin-top: 42px;
          border-top: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-related__item {
          display: grid;
          grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1fr);
          gap: 34px;
          align-items: start;
          padding: 24px 0;
          border-bottom: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-related__item h3 {
          font-size: 19px;
        }

        .sesen-page-pil .pil-related__title-link {
          color: var(--pil-navy);
          text-decoration: none;
        }

        .sesen-page-pil .pil-related__title-link span {
          color: var(--pil-blue-dark);
        }

        .sesen-page-pil .pil-related__title-link:hover {
          color: var(--pil-blue-dark);
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-page-pil .pil-related__title-link:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.35);
          outline-offset: 4px;
        }

        .sesen-page-pil .pil-related__item p {
          color: var(--pil-muted);
        }

        .sesen-page-pil .pil-faq {
          margin-top: 40px;
          border-top: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-faq__item {
          border-bottom: 1px solid var(--pil-border);
        }

        .sesen-page-pil .pil-faq__button {
          width: 100%;
          min-height: 74px;
          padding: 22px 4px;
          border: 0;
          background: transparent;
          color: var(--pil-navy);
          display: grid;
          grid-template-columns: 1fr 36px;
          gap: 20px;
          align-items: center;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
        }

        .sesen-page-pil .pil-faq__icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border: 1px solid var(--pil-border);
          border-radius: 50%;
          color: var(--pil-blue-dark);
          font-family: Inter, sans-serif;
          font-size: 20px;
          line-height: 1;
          transition: transform 160ms ease;
        }

        .sesen-page-pil .pil-faq__button[aria-expanded="true"] .pil-faq__icon {
          transform: rotate(45deg);
        }

        .sesen-page-pil .pil-faq__answer {
          max-width: 850px;
          padding: 0 52px 26px 4px;
          color: var(--pil-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .sesen-page-pil .pil-final {
          padding-block: 88px;
          background:
            radial-gradient(circle at 92% 12%, rgba(111,139,225,0.32), transparent 34%),
            linear-gradient(135deg, #17264D 0%, #253F8F 100%);
          color: var(--pil-white);
        }

        .sesen-page-pil .pil-final__inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 56px;
          align-items: center;
        }

        .sesen-page-pil .pil-final h2 {
          color: var(--pil-white);
          max-width: 760px;
        }

        .sesen-page-pil .pil-final p {
          max-width: 760px;
          margin-top: 18px;
          color: #DCE5FF;
          font-size: 18px;
          line-height: 1.7;
        }

        .sesen-page-pil .pil-final__actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 250px;
        }

        .sesen-page-pil .pil-final .pil-btn--secondary {
          border-color: rgba(255,255,255,0.5);
          background: var(--pil-white);
          color: var(--pil-ink);
        }

        .sesen-page-pil .pil-final .pil-btn--secondary:hover {
          background: var(--pil-blue-pale);
        }

        .sesen-page-pil .pil-final__proof {
          margin-top: 26px;
          color: var(--pil-light-accent);
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .sesen-page-pil .pil-shell {
            padding-inline: 40px;
          }

          .sesen-page-pil .pil-hero__grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
            gap: 42px;
          }

          .sesen-page-pil .pil-scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-page-pil .pil-scope:nth-child(3) {
            border-left: 0;
            border-top: 1px solid var(--pil-border);
          }

          .sesen-page-pil .pil-scope:nth-child(4) {
            border-top: 1px solid var(--pil-border);
          }

          .sesen-page-pil .pil-governance {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sesen-page-pil .pil-governance__item:nth-child(4) {
            border-left: 0;
            border-top: 1px solid var(--pil-divider);
          }

          .sesen-page-pil .pil-governance__item:nth-child(5) {
            border-top: 1px solid var(--pil-divider);
          }
        }

        @media (max-width: 820px) {
          .sesen-page-pil .pil-shell {
            padding-inline: 29px;
          }

          .sesen-page-pil .pil-section {
            padding-block: 76px;
          }

          .sesen-page-pil .pil-section--dense {
            padding-block: 70px;
          }

          .sesen-page-pil h1 {
            font-size: 42px;
          }

          .sesen-page-pil h2 {
            font-size: 32px;
          }

          .sesen-page-pil .pil-hero {
            padding-block: 76px 72px;
          }

          .sesen-page-pil .pil-hero__grid,
          .sesen-page-pil .pil-two-col,
          .sesen-page-pil .pil-two-col--reverse,
          .sesen-page-pil .pil-lifecycle,
          .sesen-page-pil .pil-digital,
          .sesen-page-pil .pil-global {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .sesen-page-pil .pil-hero__copy {
            max-width: 760px;
          }

          .sesen-page-pil .pil-hero__visual {
            min-height: 360px;
          }

          .sesen-page-pil .pil-leaflet-mock {
            min-height: 430px;
          }

          .sesen-page-pil .pil-trust__inner {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }


          .sesen-page-pil .pil-transform {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-connected__map {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-connected__hub {
            min-height: 160px;
          }

          .sesen-page-pil .pil-transform__center {
            border-left: 0;
            border-right: 0;
            border-top: 1px solid var(--pil-border);
            border-bottom: 1px solid var(--pil-border);
          }

          .sesen-page-pil .pil-regions {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-workflow {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-workflow__item {
            min-height: unset;
          }

          .sesen-page-pil .pil-qa-grid,
          .sesen-page-pil .pil-quality {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-page-pil .pil-related__item {
            grid-template-columns: minmax(220px, 0.75fr) 1fr;
          }


          .sesen-page-pil .pil-final__inner {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-final__actions {
            min-width: 0;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 640px) {
          .sesen-page-pil .pil-shell {
            padding-inline: 20px;
          }

          .sesen-page-pil .pil-section,
          .sesen-page-pil .pil-section--dense {
            padding-block: 68px;
          }

          .sesen-page-pil .pil-hero {
            padding-block: 64px 62px;
          }

          .sesen-page-pil h1 {
            font-size: 42px;
            line-height: 1.24;
          }

          .sesen-page-pil h2 {
            font-size: 32px;
            line-height: 1.28;
          }

          .sesen-page-pil .pil-hero__lead,
          .sesen-page-pil .pil-lead,
          .sesen-page-pil .pil-intro,
          .sesen-page-pil .pil-final p {
            font-size: 17px;
          }

          .sesen-page-pil .pil-hero__actions,
          .sesen-page-pil .pil-final__actions {
            width: 100%;
            flex-direction: column;
          }

          .sesen-page-pil .pil-btn {
            width: 100%;
          }

          .sesen-page-pil .pil-hero__visual {
            min-height: 330px;
          }

          .sesen-page-pil .pil-trust__inner {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-trust__item,
          .sesen-page-pil .pil-trust__item:nth-child(n) {
            border: 0;
            min-height: 58px;
            padding-block: 12px;
          }

          .sesen-page-pil .pil-scope-grid,
          .sesen-page-pil .pil-readability,
          .sesen-page-pil .pil-ai-grid,
          .sesen-page-pil .pil-quality,
          .sesen-page-pil .pil-reasons,
          .sesen-page-pil .pil-qa-grid {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-connected__assets {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-region,
          .sesen-page-pil .pil-connected {
            padding: 24px;
          }

          .sesen-page-pil .pil-transform__side,
          .sesen-page-pil .pil-transform__center {
            padding-inline: 24px;
          }

          .sesen-page-pil .pil-workflow__item {
            padding-right: 0;
          }

          .sesen-page-pil .pil-global-capability {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .sesen-page-pil .pil-scope,
          .sesen-page-pil .pil-scope:nth-child(n) {
            border-left: 0;
            border-top: 1px solid var(--pil-border);
          }

          .sesen-page-pil .pil-scope:first-child {
            border-top: 0;
          }

          .sesen-page-pil .pil-scope h3 {
            min-height: 0;
          }

          .sesen-page-pil .pil-change-list {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-change-list__item:nth-child(odd) {
            margin-right: 0;
          }

          .sesen-page-pil .pil-governance {
            grid-template-columns: 1fr;
          }

          .sesen-page-pil .pil-governance__item:nth-child(n) {
            border-left: 0;
            border-top: 1px solid var(--pil-divider);
          }

          .sesen-page-pil .pil-governance__item:first-child {
            border-top: 0;
          }

          .sesen-page-pil .pil-related__item {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 22px 0;
          }


          .sesen-page-pil .pil-leaflet-mock {
            min-height: 410px;
          }

          .sesen-page-pil .pil-leaflet-mock__sheet {
            min-height: 340px;
            transform: none;
          }

          .sesen-page-pil .pil-leaflet-mock__stamp {
            right: 10px;
            bottom: -20px;
          }

          .sesen-page-pil .pil-channel-visual {
            min-height: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .sesen-page-pil .pil-channel-visual__ring {
            grid-column: 1 / -1;
            width: 230px;
            height: 230px;
            margin: 0 auto 14px;
          }

          .sesen-page-pil .pil-channel-visual__label,
          .sesen-page-pil .pil-channel-visual__label--one,
          .sesen-page-pil .pil-channel-visual__label--two,
          .sesen-page-pil .pil-channel-visual__label--three,
          .sesen-page-pil .pil-channel-visual__label--four {
            position: static;
            padding: 10px;
            white-space: normal;
            text-align: center;
          }

          .sesen-page-pil .pil-faq__button {
            grid-template-columns: minmax(0, 1fr) 34px;
            gap: 14px;
            font-size: 19px;
          }

          .sesen-page-pil .pil-faq__answer {
            padding-right: 4px;
          }

          .sesen-page-pil .pil-final {
            padding-block: 72px;
          }

          /* Standalone mobile heading groups generally center. */
          .sesen-page-pil .pil-mobile-center {
            text-align: center;
          }

          .sesen-page-pil .pil-mobile-center .pil-intro {
            margin-inline: auto;
            text-align: left;
          }

          .sesen-page-pil .pil-mobile-center .pil-callout,
          .sesen-page-pil .pil-mobile-center .pil-editorial-list,
          .sesen-page-pil .pil-mobile-center .pil-scope-guard {
            text-align: left;
          }

          .sesen-page-pil .pil-final h2 {
            text-align: center;
          }

          .sesen-page-pil .pil-final__proof {
            text-align: center;
          }

          /* Dense / sequential / technical sections keep a left reading axis. */
          .sesen-page-pil .pil-workflow-heading,
          .sesen-page-pil .pil-regulated-heading,
          .sesen-page-pil .pil-faq-heading,
          .sesen-page-pil .pil-directory-heading,
          .sesen-page-pil .pil-technical-heading {
            text-align: left;
          }
        }

        @media (max-width: 360px) {
          .sesen-page-pil h1 {
            font-size: 38px;
          }

          .sesen-page-pil h2 {
            font-size: 30px;
          }

          .sesen-page-pil .pil-transform__side,
          .sesen-page-pil .pil-transform__center,
          .sesen-page-pil .pil-connected {
            padding-inline: 22px;
          }

          .sesen-page-pil .pil-channel-visual__ring {
            width: 205px;
            height: 205px;
          }

          .sesen-page-pil .pil-channel-visual__label {
            font-size: 12px;
          }

          .sesen-page-pil .pil-workflow__item {
            padding-left: 64px;
          }

          .sesen-page-pil .pil-workflow__num {
            width: 44px;
            height: 44px;
          }

          .sesen-page-pil .pil-update-stack__row {
            grid-template-columns: 38px minmax(0, 1fr);
            gap: 13px;
            padding-inline: 18px;
          }

          .sesen-page-pil .pil-update-stack__icon {
            width: 38px;
            height: 38px;
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-page-pil .pil-btn,
          .sesen-page-pil .pil-faq__icon {
            transition: none;
          }

          .sesen-page-pil .pil-btn:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="pil-hero">
        <div className="pil-shell pil-hero__grid">
          <div className="pil-hero__copy">
            <p className="pil-eyebrow">Patient-Facing Product Information</p>
            <h1>Patient Information Leaflet (PIL) Translation Services</h1>
            <p className="pil-hero__lead">
              Translate approved medicine information with the regulatory accuracy it requires and
              the clarity patients depend on. Sesen helps pharmaceutical and biopharmaceutical teams
              translate Patient Information Leaflets (PILs)—often called package leaflets in European
              product information—across languages, markets, formats, and lifecycle updates.
            </p>
            <div className="pil-hero__actions">
              <a className="pil-btn pil-btn--primary" href="https://www.sesen.com/get-a-quote/">
                GET A QUOTE <span aria-hidden="true">→</span>
              </a>
              <a className="pil-btn pil-btn--secondary" href="https://www.sesen.com/contact-sales/">
                TALK TO A LIFE SCIENCES EXPERT
              </a>
            </div>
          </div>

          <div className="pil-hero__visual">
            <div className="pil-hero__halo" />
            <svg className="pil-hero-art" viewBox="0 0 520 470" role="img" aria-labelledby="pil-hero-art-title">
              <title id="pil-hero-art-title">Approved product information transformed into a multilingual patient information leaflet</title>
              <defs>
                <linearGradient id="pilPaper" x1="0" x2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#F5F7FF" />
                </linearGradient>
              </defs>
              <rect x="52" y="70" width="170" height="236" rx="18" fill="url(#pilPaper)" stroke="#BFCBE2" strokeWidth="2"/>
              <rect x="76" y="96" width="108" height="12" rx="6" fill="#D7E2F7"/>
              <rect x="76" y="125" width="118" height="7" rx="3.5" fill="#CBD6EA"/>
              <rect x="76" y="144" width="98" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="76" y="163" width="124" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="76" y="192" width="82" height="10" rx="5" fill="#4B6FD8" opacity="0.22"/>
              <rect x="76" y="217" width="120" height="7" rx="3.5" fill="#D9E2F0"/>
              <rect x="76" y="236" width="107" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="76" y="255" width="91" height="7" rx="3.5" fill="#E0E7F3"/>
              <circle cx="196" cy="91" r="22" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2"/>
              <path d="M188 91l6 6 11-14" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

              <path d="M235 181 C270 153 294 153 326 178" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round"/>
              <path d="M317 167l13 12-16 6" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="272" cy="143" r="23" fill="#FFFFFF" stroke="#D7E0F0" strokeWidth="2"/>
              <path d="M260 143h24M272 131v24" stroke="#3659BB" strokeWidth="2.4" strokeLinecap="round"/>
              <circle cx="316" cy="117" r="18" fill="#F5F7FF" stroke="#C7D3E7" strokeWidth="2"/>
              <text x="316" y="122" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#3659BB">A</text>
              <circle cx="235" cy="113" r="18" fill="#F5F7FF" stroke="#C7D3E7" strokeWidth="2"/>
              <text x="235" y="118" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#3659BB">文</text>

              <path d="M333 88h117a18 18 0 0 1 18 18v249a18 18 0 0 1-18 18H333a18 18 0 0 1-18-18V106a18 18 0 0 1 18-18z" fill="#FFFFFF" stroke="#AEBBD6" strokeWidth="2"/>
              <rect x="340" y="116" width="104" height="15" rx="7.5" fill="#4B6FD8" opacity="0.25"/>
              <rect x="340" y="148" width="72" height="8" rx="4" fill="#CBD6EA"/>
              <rect x="340" y="168" width="98" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="340" y="186" width="89" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="340" y="213" width="84" height="9" rx="4.5" fill="#D7E2F7"/>
              <rect x="340" y="238" width="98" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="340" y="256" width="80" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="340" y="274" width="94" height="7" rx="3.5" fill="#E0E7F3"/>
              <rect x="340" y="302" width="54" height="9" rx="4.5" fill="#4B6FD8" opacity="0.22"/>
              <rect x="340" y="326" width="91" height="7" rx="3.5" fill="#E0E7F3"/>
              <circle cx="450" cy="354" r="33" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2"/>
              <path d="M435 355c5 7 10 11 15 11 9 0 17-10 18-23-7-6-13-8-18-8-7 0-14 3-20 9 0 4 2 8 5 11z" fill="none" stroke="#3659BB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>

              <path d="M110 333c42 28 88 42 140 42 35 0 66-6 94-19" fill="none" stroke="#D1DBEC" strokeWidth="2" strokeDasharray="7 8"/>
              <circle cx="104" cy="331" r="8" fill="#4B6FD8"/>
              <circle cx="352" cy="353" r="8" fill="#4B6FD8"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="pil-trust" aria-label="Sesen patient information translation credentials">
        <div className="pil-shell pil-trust__inner">
          {trustItems.map((item) => (
            <div className="pil-trust__item" key={item}>
              <span className="pil-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell pil-two-col">
          <div className="pil-mobile-center">
            <h2>Patient Information Must Be Accurate—and Understandable</h2>
            <p className="pil-intro">
              A Patient Information Leaflet sits at a unique point in pharmaceutical communication.
              The underlying information is regulated and safety-critical, but the leaflet is written
              for the people who will actually take or use the medicine.
            </p>
            <div className="pil-callout">
              The regulatory meaning cannot change—but the language still has to work for the patient.
            </div>
          </div>
          <div>
            <ul className="pil-editorial-list">
              {patientNeeds.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="pil-intro">
              Sesen brings these requirements together through specialized pharmaceutical linguists,
              terminology control, structured review, multilingual production, and final-context
              quality assurance.
            </p>
          </div>
        </div>
      </section>

      <section className="pil-section pil-section--blue-soft">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <p className="pil-eyebrow">Source-to-Patient Alignment</p>
            <h2>One Source of Truth. A Different Audience.</h2>
            <p className="pil-intro">
              Approved product information and patient information are closely connected, but they
              serve different readers. Sesen helps carry approved meaning accurately into another
              language while making the communication appropriate for its patient audience.
            </p>
          </div>

          <div className="pil-transform">
            <div className="pil-transform__side">
              <h3>Approved Product Information</h3>
              <ul className="pil-transform__list">
                {sourceInfo.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="pil-transform__center">
              <h3>Controlled Multilingual Transformation</h3>
              {[
                "Source and version review",
                "Terminology alignment",
                "Patient-readable translation",
                "Specialist linguistic review",
                "Market and language adaptation",
                "Multilingual formatting",
                "In-context QA",
                "Controlled update management",
              ].map((item) => (
                <div className="pil-transform__step" key={item}>{item}</div>
              ))}
            </div>
            <div className="pil-transform__side">
              <h3>Patient-Facing Information</h3>
              <div className="pil-patient-prompts">
                <div className="pil-prompt">What is this medicine?</div>
                <div className="pil-prompt">What should I know before using it?</div>
                <div className="pil-prompt">How should I take or use it?</div>
                <div className="pil-prompt">What side effects may occur?</div>
                <div className="pil-prompt">How should it be stored?</div>
                <div className="pil-prompt">Where can I find more information?</div>
              </div>
              <a className="pil-link" href="https://www.sesen.com/smpc-translation-services/">
                Explore SmPC Translation Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <h2>Complete Translation Support for Patient-Facing Medicine Information</h2>
            <p className="pil-intro">
              Patient leaflets can contain a dense combination of medical, regulatory, instructional,
              and safety information. Sesen supports the patient-facing content required for
              pharmaceutical products across global markets.
            </p>
          </div>
          <div className="pil-scope-grid">
            {patientContentGroups.map((group) => (
              <div className="pil-scope" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="pil-note">
            Exact leaflet structure and required information vary according to the product, market,
            authorization pathway, and applicable regulatory requirements. Sesen adapts each workflow
            to the approved source materials and market requirements for the engagement.
          </p>
        </div>
      </section>

      <section className="pil-section pil-section--soft">
        <div className="pil-shell">
          <div className="pil-workflow-heading">
            <h2>From Approved Source Labeling to Market-Ready Patient Information</h2>
            <p className="pil-intro">
              Patient Information Leaflet translation requires control across the complete workflow—not
              only the translation step.
            </p>
          </div>
          <div className="pil-workflow">
            {workflow.map((step, index) => (
              <article className="pil-workflow__item" key={step.title}>
                <span className="pil-workflow__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-regulated-heading">
            <h2>Patient Leaflets Across Markets and Regulatory Frameworks</h2>
            <p className="pil-intro">
              Patient information requirements differ by jurisdiction, product, authorization route,
              and intended use. Sesen structures multilingual workflows around the applicable source
              materials, client requirements, and regulatory references for each market.
            </p>
          </div>
          <div className="pil-regions">
            <article className="pil-region">
              <h3>European Product Information</h3>
              <p>
                For European medicinal products, package leaflets sit within the broader product-information
                set alongside the SmPC and labeling. Workflows may need to reflect applicable QRD templates
                and terminology, approved language, national language versions, readability or user-consultation
                requirements, and post-authorization updates.
              </p>
              <p>
                Sesen aligns multilingual work with the approved source and the regulatory references
                applicable to the product, market, and engagement.
              </p>
            </article>
            <article className="pil-region">
              <h3>United Kingdom PILs</h3>
              <p>
                In the UK, Patient Information Leaflet (PIL) is established terminology for patient-facing
                medicine information. Sesen can align translation with the approved source, applicable
                MHRA product-information references, and the patient-readability requirements defined for
                the engagement.
              </p>
            </article>
            <article className="pil-region">
              <h3>Global Product Information</h3>
              <p>
                Other markets may use different document names, content structures, labeling conventions,
                review processes, and language requirements.
              </p>
              <p>
                Sesen works from the applicable approved source rather than applying a single template
                across countries.
              </p>
            </article>
          </div>
          <a className="pil-link" href="https://www.sesen.com/regulatory-translation-services/">
            Explore Regulatory Translation Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="pil-section pil-section--blue-soft">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <p className="pil-eyebrow">Patient Readability</p>
            <h2>Clear Language. Controlled Meaning.</h2>
            <p className="pil-intro">
              Patient-facing language needs to be understandable without drifting from the information
              that has been approved. Sesen combines patient-focused linguistic judgment with
              pharmaceutical terminology control so translated information can remain both accurate
              and usable.
            </p>
          </div>
          <div className="pil-readability">
            {readabilityTopics.map((item) => (
              <article className="pil-readability__row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="pil-scope-guard">
            <p>
              <strong>Supporting readability-focused workflows.</strong> Sesen provides patient-focused
              translation, linguistic review, terminology control, multilingual formatting, and in-context
              QA to help prepare high-quality multilingual leaflet content for the client's applicable
              regulatory review process. Where formal readability testing or user consultation is required,
              that activity can be managed as a distinct downstream regulatory step.
            </p>
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <p className="pil-eyebrow">Connected Labeling</p>
            <h2>Keep SmPCs, PILs, Labels, and Packaging Aligned</h2>
            <p className="pil-intro">
              A Patient Information Leaflet rarely exists as an isolated document. The same approved
              product concepts may appear across professional, patient, packaging, safety, and digital
              product information.
            </p>
          </div>

          <div className="pil-connected">
            <div className="pil-connected__map" aria-label="Related pharmaceutical product information aligned to approved content">
              <div className="pil-connected__hub">
                <span>Controlled Source</span>
                <strong>Approved Product Information</strong>
              </div>
              <div className="pil-connected__assets">
                {relatedAssets.map((item) => (
                  <div className="pil-connected__node" key={item}>{item}</div>
                ))}
              </div>
            </div>

            <div className="pil-governance">
              <div className="pil-governance__item">
                <strong>Terminology Governance</strong>
                <p>Maintain consistent product, medical, dosage, and safety terminology.</p>
              </div>
              <div className="pil-governance__item">
                <strong>Translation Memory</strong>
                <p>Reuse relevant established translations across recurring content and revisions.</p>
              </div>
              <div className="pil-governance__item">
                <strong>Cross-Document Alignment</strong>
                <p>Use approved references to support continuity between professional and patient information.</p>
              </div>
              <div className="pil-governance__item">
                <strong>Reviewer Feedback</strong>
                <p>Carry client and in-market language decisions into future work.</p>
              </div>
              <div className="pil-governance__item">
                <strong>Version Awareness</strong>
                <p>Identify what changed and which multilingual assets may require attention.</p>
              </div>
            </div>
          </div>

          <a className="pil-link" href="https://www.sesen.com/labeling-translation-services/">
            Explore Labeling Translation Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="pil-section pil-section--soft">
        <div className="pil-shell pil-two-col pil-two-col--reverse">
          <div className="pil-leaflet-mock" aria-hidden="true">
            <div className="pil-leaflet-mock__sheet">
              <div className="pil-leaflet-mock__bar pil-leaflet-mock__bar--title" />
              <div className="pil-leaflet-mock__bar" />
              <div className="pil-leaflet-mock__cols">
                {[0,1,2,3].map((block) => (
                  <div className="pil-leaflet-mock__block" key={block}>
                    {[0,1,2,3,4,5].map((line) => (
                      <div className="pil-leaflet-mock__bar" key={line} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="pil-leaflet-mock__stamp">In-Context<br/>QA</div>
            </div>
          </div>
          <div className="pil-technical-heading">
            <p className="pil-eyebrow">Multilingual Production</p>
            <h2>Translation Quality Continues Through the Final Leaflet</h2>
            <p className="pil-intro">
              Patient information needs to remain usable after translation enters production.
              Even modest differences in language length can change page flow, hierarchy, tables,
              lists, line breaks, and typography.
            </p>
            <ul className="pil-editorial-list" style={{ marginTop: 28 }}>
              {[
                "Text expansion and contraction",
                "Multilingual typography and right-to-left scripts",
                "Multi-column layouts, tables, and lists",
                "Headings, symbols, references, and page breaks",
                "Artwork-linked text and professional publishing formats",
                "Print-ready PDF workflows",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="pil-intro">
              The objective is not simply to make the translated text fit. It is to preserve
              information hierarchy, readability, content relationships, and production integrity
              in the target language.
            </p>
            <a className="pil-link" href="https://www.sesen.com/medical-packaging-design-translation-formatting/">
              Medical Packaging Design Translation & Formatting <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-technical-heading">
            <p className="pil-eyebrow">Final-Context Review</p>
            <h2>Review the Leaflet Patients Will Actually See</h2>
            <p className="pil-intro">
              Bilingual translation files do not reveal every issue that can occur in final artwork.
              Sesen can review final or near-final PIL files so quality assurance extends into the
              context patients will encounter.
            </p>
          </div>
          <div className="pil-qa-grid">
            {qaChecks.map((item) => <div className="pil-qa-grid__item" key={item}>{item}</div>)}
          </div>
          <div className="pil-callout">
            For safety-sensitive patient content, translation quality should not stop at the bilingual file.
          </div>
          <a className="pil-link" href="https://www.sesen.com/label-review-in-context-qa/">
            Explore Label Review & In-Context QA <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="pil-section pil-section--blue-soft">
        <div className="pil-shell">
          <div className="pil-workflow-heading">
            <p className="pil-eyebrow">Lifecycle Control</p>
            <h2>Patient Information Changes as Medicines Evolve</h2>
            <p className="pil-intro">
              A PIL is not a one-time translation asset. New safety information, regulatory decisions,
              dosing updates, product changes, packaging revisions, and new markets can all trigger
              multilingual updates.
            </p>
          </div>
          <div className="pil-lifecycle">
            <div className="pil-change-list">
              {lifecycle.map((item) => <div className="pil-change-list__item" key={item}>{item}</div>)}
            </div>
            <div className="pil-update-stack">
              {[
                ["Δ", "Version-Aware Updates", "Compare new source versions with existing content so changed material can receive focused attention."],
                ["TM", "Approved Translation Reuse", "Reuse relevant established translations while reviewing modified content in context."],
                ["T", "Terminology Continuity", "Carry product names, safety language, and approved terminology forward across versions."],
                ["GL", "Multi-Language Coordination", "Coordinate revisions across multiple languages and markets through one structured workflow."],
                ["QA", "Final-Format Review", "Review changed content after it has been integrated into the finished leaflet layout."],
              ].map(([icon, title, copy]) => (
                <div className="pil-update-stack__row" key={title}>
                  <div className="pil-update-stack__icon" aria-hidden="true">{icon}</div>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell pil-digital">
          <div className="pil-mobile-center">
            <p className="pil-eyebrow">Print + Digital Continuity</p>
            <h2>Print and Digital Product Information Are Becoming More Connected</h2>
            <p className="pil-intro">
              Patient product information increasingly exists across more than one delivery channel.
              Alongside traditional printed leaflets, pharmaceutical organizations are navigating
              electronic product information, web-based access, QR-enabled experiences, PDFs, and
              other digital pathways.
            </p>
            <p className="pil-intro">
              As product information moves across print and digital formats, terminology and version
              control become even more important. Sesen helps maintain multilingual continuity so
              patient information used in one channel does not unnecessarily diverge from related
              approved content in another.
            </p>
          </div>
          <div className="pil-channel-visual" aria-hidden="true">
            <div className="pil-channel-visual__ring">
              <div className="pil-channel-visual__core">Approved<br/>Content</div>
            </div>
            <div className="pil-channel-visual__label pil-channel-visual__label--one">Printed Leaflet</div>
            <div className="pil-channel-visual__label pil-channel-visual__label--two">Electronic PI (ePI)</div>
            <div className="pil-channel-visual__label pil-channel-visual__label--three">Web Access</div>
            <div className="pil-channel-visual__label pil-channel-visual__label--four">QR-Enabled</div>
          </div>
        </div>
      </section>

      <section className="pil-section pil-section--deep">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <h2>AI-Assisted Quality Checks. Expert Human Decisions.</h2>
            <p className="pil-intro">
              Technology can strengthen PIL translation when it is applied to the right tasks and
              kept within a controlled professional workflow. Sesen combines professional life sciences
              linguists with translation technology, terminology resources, automation, and AI-assisted
              quality checks.
            </p>
          </div>
          <div className="pil-ai-grid">
            <div className="pil-ai-col">
              <h3>AI-Assisted QA Can Help Surface</h3>
              <ul>
                <li>Terminology inconsistencies</li>
                <li>Missing or added content</li>
                <li>Numeric and unit discrepancies</li>
                <li>Repeated-content mismatches</li>
                <li>Version differences</li>
                <li>Formatting anomalies</li>
              </ul>
            </div>
            <div className="pil-ai-col">
              <h3>Human Experts Remain Responsible For</h3>
              <ul>
                <li>Medical meaning</li>
                <li>Patient-facing clarity</li>
                <li>Linguistic nuance</li>
                <li>Product-specific terminology</li>
                <li>Safety-language interpretation</li>
                <li>Final linguistic decisions</li>
              </ul>
            </div>
          </div>
          <div className="pil-ai-statement">
            Technology helps reviewers find potential issues faster. Life sciences professionals
            evaluate those issues in context and determine the appropriate translation.
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <h2>Quality Built Around Regulated Patient Information</h2>
            <p className="pil-intro">
              Patient information can directly influence how people understand and use medicines.
              Sesen applies a quality model designed for regulated life sciences content.
            </p>
          </div>
          <div className="pil-quality">
            {qualityItems.map((item) => (
              <article className="pil-quality__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pil-section pil-section--soft">
        <div className="pil-shell pil-global">
          <div className="pil-mobile-center">
            <p className="pil-eyebrow">Global Program Support</p>
            <h2>One PIL Program. Many Languages and Markets.</h2>
            <p className="pil-intro">
              Sesen supports multilingual PIL programs for individual language requests, country-specific
              updates, simultaneous launches, regional rollouts, new market introductions, and ongoing
              labeling maintenance.
            </p>
            <p className="pil-intro">
              For global programs, centralized terminology and established translation assets become
              increasingly valuable as the number of languages, products, and revisions grows.
            </p>
          </div>
          <div className="pil-global__capabilities">
            <div className="pil-global-capability">
              <strong>150+ Languages</strong>
              <span>Global language coverage for pharmaceutical and life sciences programs.</span>
            </div>
            <div className="pil-global-capability">
              <strong>Centralized Terminology</strong>
              <span>Shared terminology and reference assets help keep related language versions aligned.</span>
            </div>
            <div className="pil-global-capability">
              <strong>Coordinated Rollouts</strong>
              <span>Structured project management supports simultaneous launches, regional programs, and market updates.</span>
            </div>
            <div className="pil-global-capability">
              <strong>Lifecycle Continuity</strong>
              <span>Established translations and linguistic assets can support recurring product-information changes.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-mobile-center">
            <h2>Why Pharmaceutical Teams Choose Sesen</h2>
          </div>
          <div className="pil-reasons">
            {reasons.map((item) => (
              <article className="pil-reason" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pil-section pil-section--blue-soft">
        <div className="pil-shell">
          <div className="pil-directory-heading">
            <h2>Connected Services Across Pharmaceutical Labeling</h2>
            <p className="pil-intro">
              Patient Information Leaflet translation often forms one part of a larger product-information
              program. Connect PIL work with the related regulatory, labeling, packaging, and quality
              services your program requires.
            </p>
          </div>
          <div className="pil-related">
            {relatedServices.map((service) => (
              <article className="pil-related__item" key={service.title}>
                <h3>
                  <a className="pil-related__title-link" href={service.href}>
                    {service.title} <span aria-hidden="true">→</span>
                  </a>
                </h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pil-section">
        <div className="pil-shell">
          <div className="pil-faq-heading">
            <h2>Patient Information Leaflet Translation FAQs</h2>
          </div>
          <div className="pil-faq">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `pil-faq-answer-${index}`;
              const questionId = `pil-faq-question-${index}`;
              return (
                <div className="pil-faq__item" key={faq.q}>
                  <button
                    className="pil-faq__button"
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    <span className="pil-faq__icon" aria-hidden="true">+</span>
                  </button>
                  {isOpen && (
                    <div
                      className="pil-faq__answer"
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pil-final">
        <div className="pil-shell pil-final__inner">
          <div>
            <h2>Translate Patient Information With Confidence</h2>
            <p>
              Patients depend on medicine information they can understand. Pharmaceutical teams depend
              on that same information remaining aligned with approved product content across languages,
              markets, formats, and future updates. Sesen brings those requirements together through
              specialized pharmaceutical linguists, terminology governance, patient-focused translation,
              multilingual formatting, in-context QA, AI-assisted quality checks, and controlled
              lifecycle workflows.
            </p>
            <div className="pil-final__proof">
              Patient-Focused Translation · Controlled Terminology · In-Context QA · Lifecycle Support · 150+ Languages
            </div>
          </div>
          <div className="pil-final__actions">
            <a className="pil-btn pil-btn--primary" href="https://www.sesen.com/get-a-quote/">
              GET A QUOTE <span aria-hidden="true">→</span>
            </a>
            <a className="pil-btn pil-btn--secondary" href="https://www.sesen.com/contact-sales/">
              TALK TO A LIFE SCIENCES EXPERT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
