import React from "react";

const SesenCertifiedMedicalDeviceTranslationServicesWireframeV3 = () => {
  const certificationConcepts = [
    {
      title: "Certified Translation",
      text: "A translation delivered with an agreed certification or accuracy statement identifying the work and providing documented assurance appropriate to the project requirements.",
    },
    {
      title: "ISO-Certified Translation Process",
      text: "Translation performed through structured processes supported by Sesen’s ISO-certified quality infrastructure. ISO certification applies to relevant systems and processes—not as a blanket designation applied to an individual translated document.",
    },
    {
      title: "Qualified Translator & Reviewer",
      text: "Professional language specialists selected according to language, subject matter, content type, and project requirements, with independent review incorporated when required by the workflow.",
    },
    {
      title: "Sworn or Notarized Translation",
      text: "A separate, jurisdiction-specific concept that may involve authorized translators, notaries, or prescribed legal formalities. These requirements should be evaluated for the specific country and intended use.",
    },
  ];

  const certificationScenarios = [
    {
      title: "Regulatory Submission Support",
      text: "A submission team may need supporting information concerning the accuracy, preparation, or review of translated documents included in a regulatory package.",
    },
    {
      title: "Notified Body or Auditor Requests",
      text: "Regulatory or quality reviews may generate requests for documentation showing how translations were produced, reviewed, controlled, or approved.",
    },
    {
      title: "Internal Quality-System Requirements",
      text: "Manufacturers may establish SOPs governing translation, independent review, certification, supplier qualifications, document control, or retention of translation records.",
    },
    {
      title: "Supplier Qualification & Documentation",
      text: "Quality, regulatory, procurement, or vendor-management teams may require evidence of linguist qualifications, review procedures, ISO certifications, security controls, or documented quality processes.",
    },
    {
      title: "High-Risk or Controlled Content",
      text: "Organizations may apply additional review and certification requirements to critical documents where accuracy, consistency, version integrity, or traceability is especially important.",
    },
  ];

  const packageItems = [
    {
      title: "Certificate of Accuracy",
      icon: "certificate",
      text: "A signed certification statement associated with the translated material and prepared according to the agreed certification format.",
      detail: "Project, document, source/target language, and other identifiers can be included where appropriate.",
    },
    {
      title: "Source & Target Identification",
      icon: "files",
      text: "Clear linkage between the certification documentation and the specific source content and translated deliverable it supports.",
      detail: "For controlled documentation, revision information can be incorporated into the project record.",
    },
    {
      title: "Translator & Reviewer Qualifications",
      icon: "people",
      text: "Supporting information regarding professional qualifications or relevant experience when included in the agreed documentation requirements.",
      detail: "The required level of documentation should be defined during project intake.",
    },
    {
      title: "Independent Professional Review",
      icon: "review",
      text: "Structured review by a separate qualified professional as part of the approved quality workflow.",
      detail: "Review focuses on accuracy, completeness, terminology, meaning, language quality, and project specifications.",
    },
    {
      title: "Version & Revision Traceability",
      icon: "version",
      text: "Controls that help identify which source revision, translated revision, and certification documentation belong together.",
      detail: "This becomes especially important when regulated documents undergo repeated updates.",
    },
    {
      title: "Supporting Project Documentation",
      icon: "records",
      text: "Additional documentation can be configured according to the engagement and customer requirements.",
      detail: "This may include review records, language/revision information, optional back translation, reconciliation, and other agreed quality records.",
    },
  ];

  const evidenceSteps = [
    {
      title: "Controlled Source",
      text: "Identify the approved source file, revision, language, and project requirements before translation begins.",
    },
    {
      title: "Qualified Translation",
      text: "Assign medical-device language specialists and apply relevant terminology, references, and project instructions.",
    },
    {
      title: "Independent Review",
      text: "Verify accuracy, completeness, terminology, and language quality through professional review.",
    },
    {
      title: "Quality Verification",
      text: "Check numbers, terminology, formatting, consistency, completeness, and file integrity.",
    },
    {
      title: "Certification Documentation",
      text: "Prepare the agreed certificate or supporting documentation against the finalized translation.",
    },
    {
      title: "Version-Controlled Delivery",
      text: "Deliver the translation and supporting documentation as a clearly associated set.",
    },
  ];

  const contentTypes = [
    {
      title: "Regulatory & Submission Materials",
      text: "Selected submission documents, supporting records, authority correspondence, technical materials, and other translated documentation used in regulatory processes.",
      href: "https://www.sesen.com/regulatory-submission-translation-services/",
      link: "Regulatory Submission Translation Services",
    },
    {
      title: "IFUs & User Documentation",
      text: "Instructions for use, eIFUs, user manuals, safety instructions, and related controlled user documentation when certification evidence is requested.",
      href: "https://www.sesen.com/ifu-translation-services/",
      link: "IFU Translation Services",
    },
    {
      title: "Medical Device Labeling",
      text: "Device labels, packaging content, warnings, symbols-related text, safety information, and other controlled labeling materials.",
      href: "https://www.sesen.com/medical-device-labeling-translation-services/",
      link: "Medical Device Labeling Translation",
    },
    {
      title: "Technical Documentation",
      text: "Selected engineering, design, manufacturing, verification, validation, testing, risk, and product documentation that forms part of a controlled device record.",
    },
    {
      title: "Clinical & Safety Documentation",
      text: "Clinical evaluation, performance, safety, risk, and supporting evidence used within regulated medical device programs.",
    },
    {
      title: "Quality & Supplier Documentation",
      text: "SOPs, work instructions, quality records, CAPAs, audit documentation, supplier records, and other controlled QMS content.",
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Define Certification Requirements",
      text: "We begin by identifying the intended use of the translation and any documentation requirements supplied by the client.",
      points: [
        "Certification wording",
        "Certificate of Accuracy requirements",
        "Source and target document identification",
        "Translator or reviewer qualification requirements",
        "Revision information",
        "Back translation or reconciliation requirements",
        "File-format and delivery requirements",
      ],
    },
    {
      number: "02",
      title: "Confirm the Controlled Source",
      text: "The approved source file and applicable revision are identified before translation begins, establishing the reference point for the translation, review, QA, and certification activities that follow.",
    },
    {
      number: "03",
      title: "Assign Qualified Medical Linguists",
      text: "Sesen selects professional linguists based on the target language, medical-device subject matter, document type, market, and project specifications. Existing terminology, translation memory, reference materials, and prior approved translations can be incorporated where applicable.",
    },
    {
      number: "04",
      title: "Translate & Independently Review",
      text: "The source content is translated according to the approved requirements and reviewed by a separate qualified professional when included in the workflow. Review addresses meaning, terminology, omissions, additions, consistency, language quality, and source alignment.",
    },
    {
      number: "05",
      title: "Perform Final Linguistic & Technical QA",
      text: "Final verification can address numbers, measurements, terminology, completeness, formatting, cross-references, repeated content, inconsistencies, file integrity, and required document identifiers.",
      note: "AI-assisted and automated QA can support targeted checks for terminology, numbers, consistency, and formatting while professional human review remains central to regulated medical-device translation.",
    },
    {
      number: "06",
      title: "Prepare the Certification Package",
      text: "Once the translated deliverable has completed the approved review and QA process, Sesen prepares the agreed certification documentation and associates it with the finalized translation.",
    },
    {
      number: "07",
      title: "Deliver Controlled Files",
      text: "The translation and supporting documentation are delivered as an organized set so regulatory, quality, or project teams can identify the applicable source, target, revision, and certification materials.",
    },
  ];

  const traceabilityItems = [
    {
      title: "Source-to-Target Traceability",
      text: "Connect the approved source document with the corresponding target-language deliverable and relevant project documentation.",
    },
    {
      title: "Documented Responsibilities",
      text: "Maintain appropriate records surrounding translation, professional review, quality control, and project delivery.",
    },
    {
      title: "Controlled Revisions",
      text: "Identify source and translated revisions so updated content does not become unintentionally associated with outdated certification documentation.",
    },
    {
      title: "Audit-Friendly Project Records",
      text: "Support quality and regulatory teams with documented workflow information appropriate to the agreed project scope.",
    },
    {
      title: "Consistent Multilingual Governance",
      text: "For recurring programs, established terminology, reference materials, translation memory, project instructions, and document controls can be maintained across future revisions and languages.",
    },
  ];

  const standards = [
    {
      name: "ISO 17100",
      label: "Translation Services",
      text: "Supports a structured translation workflow incorporating qualified resources, translation, professional review, project management, and quality control.",
    },
    {
      name: "ISO 13485:2016",
      label: "Medical Device Quality Management",
      text: "Supports the controlled quality environment expected by medical device organizations managing regulated multilingual documentation.",
    },
    {
      name: "ISO 9001:2015",
      label: "Quality Management",
      text: "Provides a broader quality-management framework supporting consistent processes, accountability, corrective action, continuous improvement, and customer-focused service delivery.",
    },
  ];

  const whyItems = [
    {
      title: "Medical Device Specialization",
      text: "Sesen specializes in regulated life sciences translation, including medical-device, regulatory, clinical, labeling, safety, and technical content.",
    },
    {
      title: "Professional Medical Linguists",
      text: "Language resources are selected according to language, subject matter, content type, market, and project requirements.",
    },
    {
      title: "Independent Human Review",
      text: "Professional review helps verify accuracy, completeness, terminology, meaning, and language quality for regulated multilingual content.",
    },
    {
      title: "Certification & Documentation Support",
      text: "Certificates of Accuracy, supporting qualifications, review documentation, revision information, and other agreed records can be incorporated into the delivery model.",
    },
    {
      title: "ISO-Certified Quality Processes",
      text: "Sesen maintains ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications as part of its quality infrastructure for multilingual life sciences services.",
    },
    {
      title: "Controlled AI-Enabled QA",
      text: "Technology can help identify terminology, numeric, consistency, and formatting issues while professional linguistic oversight remains central.",
    },
    {
      title: "Secure Project Handling",
      text: "Secure workflows and AWS-hosted infrastructure support confidential regulated documentation and enterprise multilingual programs.",
    },
    {
      title: "150+ Languages",
      text: "Global language coverage helps manufacturers centralize certification and translation workflows across markets.",
    },
  ];

  const faqs = [
    {
      q: "What is a certified medical device translation?",
      a: "A certified medical device translation is a translated document accompanied by an agreed certification statement or supporting documentation concerning the translation. The exact format and documentation requirements can vary by client, authority, jurisdiction, submission, or intended use. For regulated projects, certification should be connected to a controlled translation and review process rather than treated simply as a stamp added to a document.",
    },
    {
      q: "Does every medical device translation require certification?",
      a: "No. Certification requirements vary according to the intended use of the translation, jurisdiction, regulatory pathway, authority, notified body, customer requirements, and the manufacturer’s own quality procedures. Some situations may require accurate translated documentation without prescribing a specific certification model, while a manufacturer’s internal SOP may require additional evidence such as a Certificate of Accuracy or translator qualifications.",
    },
    {
      q: "Does the FDA require every medical device translation to be certified?",
      a: "There is no single blanket certification rule that applies to every medical device translation or every FDA context. Requirements should be evaluated according to the specific submission, document, and applicable FDA instructions. Sesen can work with the certification and documentation requirements established for the specific project.",
    },
    {
      q: "What is included in a Certificate of Accuracy?",
      a: "The exact format depends on the project requirements. A Certificate of Accuracy may identify the translated material, applicable languages, project or document information, and an accuracy or completeness statement, together with the appropriate authorized signature or certification details. Where revisions are important, document or version identifiers can also help establish which translated deliverable the certificate supports.",
    },
    {
      q: "What is the difference between a certified translation and an ISO-certified translation provider?",
      a: "A certified translation generally refers to a translated deliverable accompanied by a certification or accuracy statement appropriate to its intended use. ISO certification, by contrast, concerns a provider’s applicable management systems, translation processes, or quality framework. Sesen maintains ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications. These certifications support the processes surrounding multilingual work; they should not be interpreted as ISO individually certifying a particular translated document.",
    },
    {
      q: "Can Sesen provide translator or reviewer qualification information?",
      a: "Qualification information can be incorporated when it forms part of the agreed project documentation requirements. The appropriate level of documentation should be defined during project intake so that resource selection and supporting records can be managed accordingly.",
    },
    {
      q: "Can Sesen provide certified translations for IFUs and medical device labeling?",
      a: "Yes. Certification documentation can be incorporated into IFU, labeling, and other medical-device translation projects when required or requested. The translation itself should still follow the appropriate document-specific workflow for terminology, professional review, formatting, usability, version control, and quality verification.",
    },
    {
      q: "Is back translation required for certified medical device translation?",
      a: "Not universally. Back translation may be useful or required for particular validation strategies, customer SOPs, documents, or project requirements, but it should not automatically be assumed to be necessary for every certified translation. Where back translation or reconciliation is required, Sesen can incorporate it into the agreed workflow.",
    },
    {
      q: "Can Sesen certify an existing translation produced elsewhere?",
      a: "Existing translations require appropriate evaluation before an accuracy certification can be considered. The necessary review or validation process depends on the source file, translation, document history, language, intended use, and certification requirements. Sesen can first assess the materials and determine an appropriate verification workflow rather than issuing certification without adequate review.",
    },
    {
      q: "What happens when the source document changes after certification?",
      a: "A source revision can affect the validity or applicability of the existing translated file and associated certification documentation. Sesen can identify the changed content, update the translation through an appropriate review workflow, verify the revised deliverable, and update the applicable certification documentation according to the project requirements.",
    },
  ];

  const Arrow = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="sesen-cert-arrow">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Check = () => (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="sesen-cert-check">
      <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="m6.1 10.1 2.5 2.5 5.5-5.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const PackageIcon = ({ type }) => {
    const common = {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    if (type === "certificate") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
          <path d="M6 3h9l3 3v10.5H6z" {...common} />
          <path d="M15 3v3h3M9 9h6M9 12h4" {...common} />
          <circle cx="14.8" cy="17.2" r="2.8" {...common} />
          <path d="m13.3 19.5-.6 2 2.1-1 2.1 1-.6-2" {...common} />
        </svg>
      );
    }

    if (type === "files") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
          <path d="M4.5 5.5h8v11h-8zM11.5 7.5h8v11h-8" {...common} />
          <path d="M7 9h3M14 11h3M14 14h3" {...common} />
        </svg>
      );
    }

    if (type === "people") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
          <circle cx="9" cy="8" r="2.5" {...common} />
          <path d="M4.5 17c.5-2.8 2.1-4.2 4.5-4.2s4 1.4 4.5 4.2" {...common} />
          <path d="m15.2 10.5 1.5 1.5 3-3.4" {...common} />
        </svg>
      );
    }

    if (type === "review") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
          <path d="M6 4h10l2 2v13H6zM9 9h6M9 12h4" {...common} />
          <path d="m10.4 16 1.7 1.7 3.7-4.1" {...common} />
        </svg>
      );
    }

    if (type === "version") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
          <path d="M6.1 8.2A7 7 0 1 1 5 14" {...common} />
          <path d="M6.1 4.8v3.4H9.5M12 8v4l2.8 1.8" {...common} />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="sesen-cert-icon">
        <path d="M5 5.5h14v13H5zM8 9h8M8 12h8M8 15h5" {...common} />
        <path d="M8 3.5v4M16 3.5v4" {...common} />
      </svg>
    );
  };

  const HeroArtwork = () => (
    <div className="sesen-cert-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="img">
        <circle cx="312" cy="258" r="215" fill="#F5F7FF" />
        <circle cx="312" cy="258" r="168" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />

        <g transform="translate(92 118)">
          <rect x="0" y="0" width="142" height="184" rx="18" fill="#FFFFFF" stroke="#C9D4EA" strokeWidth="2" />
          <rect x="24" y="28" width="68" height="9" rx="4.5" fill="#17264D" opacity="0.92" />
          <rect x="24" y="53" width="92" height="7" rx="3.5" fill="#AAB8D4" />
          <rect x="24" y="70" width="76" height="7" rx="3.5" fill="#C6D0E3" />
          <rect x="24" y="99" width="90" height="46" rx="8" fill="#F7F9FD" stroke="#DDE4F2" />
          <rect x="38" y="113" width="60" height="6" rx="3" fill="#6F8BE1" />
          <rect x="38" y="128" width="45" height="6" rx="3" fill="#C6D0E3" />
          <text x="24" y="165" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#68758B">SOURCE / REV 04</text>
        </g>

        <g transform="translate(386 118)">
          <rect x="0" y="0" width="142" height="184" rx="18" fill="#FFFFFF" stroke="#C9D4EA" strokeWidth="2" />
          <rect x="24" y="28" width="78" height="9" rx="4.5" fill="#17264D" opacity="0.92" />
          <rect x="24" y="53" width="90" height="7" rx="3.5" fill="#AAB8D4" />
          <rect x="24" y="70" width="69" height="7" rx="3.5" fill="#C6D0E3" />
          <rect x="24" y="99" width="90" height="46" rx="8" fill="#F7F9FD" stroke="#DDE4F2" />
          <rect x="38" y="113" width="51" height="6" rx="3" fill="#6F8BE1" />
          <rect x="38" y="128" width="58" height="6" rx="3" fill="#C6D0E3" />
          <text x="24" y="165" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#68758B">TARGET / REV 04</text>
        </g>

        <path d="M235 208h46M339 208h46" fill="none" stroke="#6F8BE1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 7" />
        <circle cx="270" cy="208" r="5" fill="#4B6FD8" />
        <circle cx="350" cy="208" r="5" fill="#4B6FD8" />

        <g transform="translate(224 162)">
          <rect x="0" y="0" width="172" height="212" rx="22" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
          <circle cx="86" cy="67" r="34" fill="#EAF0FF" />
          <circle cx="86" cy="67" r="23" fill="#4B6FD8" opacity="0.14" />
          <path d="m72 68 9 9 19-20" fill="none" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="36" y="116" width="100" height="9" rx="4.5" fill="#17264D" opacity="0.9" />
          <rect x="50" y="139" width="72" height="6" rx="3" fill="#AAB8D4" />
          <rect x="42" y="156" width="88" height="6" rx="3" fill="#C6D0E3" />
          <rect x="57" y="173" width="58" height="6" rx="3" fill="#C6D0E3" />
        </g>

        <g transform="translate(72 344)">
          <rect x="0" y="0" width="150" height="72" rx="14" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <circle cx="30" cy="36" r="12" fill="#EAF0FF" />
          <path d="m24 36 4 4 8-9" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="52" y="24" width="74" height="6" rx="3" fill="#68758B" />
          <rect x="52" y="40" width="54" height="6" rx="3" fill="#C6D0E3" />
        </g>

        <g transform="translate(398 344)">
          <rect x="0" y="0" width="150" height="72" rx="14" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <circle cx="30" cy="36" r="12" fill="#EAF0FF" />
          <path d="M25 32h10M25 36h10M25 40h7" fill="none" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="52" y="24" width="74" height="6" rx="3" fill="#68758B" />
          <rect x="52" y="40" width="61" height="6" rx="3" fill="#C6D0E3" />
        </g>

        <path d="M217 353c27-16 41-19 64-23M402 353c-27-16-41-19-64-23" fill="none" stroke="#9FB2DE" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
      </svg>
    </div>
  );

  return (
    <main className="sesen-certified-device-page">
      <style>{`
        .sesen-certified-device-page {
          --sesen-cert-primary: #4B6FD8;
          --sesen-cert-primary-dark: #3659BB;
          --sesen-cert-deep-blue: #253F8F;
          --sesen-cert-mid-blue: #6F8BE1;
          --sesen-cert-soft-blue: #EAF0FF;
          --sesen-cert-pale-blue: #F5F7FF;
          --sesen-cert-navy: #17264D;
          --sesen-cert-ink: #111827;
          --sesen-cert-body: #46546D;
          --sesen-cert-muted: #68758B;
          --sesen-cert-border: #DDE4F2;
          --sesen-cert-divider: #E9EEF8;
          --sesen-cert-soft-bg: #F7F9FD;
          --sesen-cert-white: #FFFFFF;
          --sesen-cert-light-blue: #C8D6FF;
          --sesen-cert-heading-font: "Inter Tight", Inter, Arial, sans-serif;
          color: var(--sesen-cert-body);
          background: var(--sesen-cert-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .sesen-certified-device-page *,
        .sesen-certified-device-page *::before,
        .sesen-certified-device-page *::after {
          box-sizing: border-box;
        }

        .sesen-certified-device-page div,
        .sesen-certified-device-page article,
        .sesen-certified-device-page section {
          min-width: 0;
        }

        .sesen-certified-device-page h1,
        .sesen-certified-device-page h2,
        .sesen-certified-device-page h3,
        .sesen-certified-device-page p,
        .sesen-certified-device-page a,
        .sesen-certified-device-page li,
        .sesen-certified-device-page span {
          overflow-wrap: break-word;
        }

        .sesen-certified-device-page .sesen-cert-container {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .sesen-certified-device-page .sesen-cert-section {
          padding: 96px 0;
          position: relative;
        }

        .sesen-certified-device-page .sesen-cert-section--dense {
          padding: 80px 0;
        }

        .sesen-certified-device-page .sesen-cert-soft {
          background: var(--sesen-cert-soft-bg);
        }

        .sesen-certified-device-page .sesen-cert-pale {
          background: var(--sesen-cert-pale-blue);
        }

        .sesen-certified-device-page .sesen-cert-dark {
          background: var(--sesen-cert-navy);
          color: #FFFFFF;
        }

        .sesen-certified-device-page h1,
        .sesen-certified-device-page h2,
        .sesen-certified-device-page h3 {
          margin-top: 0;
          color: var(--sesen-cert-navy);
          font-family: var(--sesen-cert-heading-font);
          font-style: normal;
          font-stretch: 100%;
          font-synthesis: none;
          font-weight: 500;
        }

        .sesen-certified-device-page h1 {
          margin-bottom: 22px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-certified-device-page h2 {
          margin-bottom: 18px;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-certified-device-page h3 {
          margin-bottom: 9px;
          font-size: 22px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-certified-device-page p {
          margin: 0 0 18px;
          color: var(--sesen-cert-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-certified-device-page ul {
          margin-top: 0;
        }

        .sesen-certified-device-page .sesen-cert-dark h2,
        .sesen-certified-device-page .sesen-cert-dark h3 {
          color: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-dark p {
          color: #DDE6FA;
        }

        .sesen-certified-device-page .sesen-cert-lead {
          max-width: 790px;
          color: #293954;
          font-size: 19px;
          line-height: 1.7;
        }

        .sesen-certified-device-page .sesen-cert-dark .sesen-cert-lead {
          color: #E7EDFC;
        }

        .sesen-certified-device-page .sesen-cert-eyebrow {
          margin: 0 0 14px;
          color: var(--sesen-cert-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .sesen-certified-device-page .sesen-cert-dark .sesen-cert-eyebrow {
          color: var(--sesen-cert-light-blue);
        }

        .sesen-certified-device-page .sesen-cert-heading-wrap {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sesen-certified-device-page .sesen-cert-heading-wrap--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-certified-device-page .sesen-cert-heading-wrap--center .sesen-cert-lead {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-certified-device-page .sesen-cert-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .sesen-certified-device-page .sesen-cert-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.035em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .sesen-certified-device-page .sesen-cert-btn:hover {
          transform: translateY(-1px);
        }

        .sesen-certified-device-page .sesen-cert-btn--primary {
          background: var(--sesen-cert-primary);
          color: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-btn--primary:hover {
          background: var(--sesen-cert-primary-dark);
          color: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-btn--secondary {
          background: #FFFFFF;
          color: var(--sesen-cert-ink);
          border-color: #C9D4EA;
        }

        .sesen-certified-device-page .sesen-cert-btn--secondary:hover {
          background: var(--sesen-cert-pale-blue);
          color: var(--sesen-cert-ink);
          border-color: #AEBDE0;
        }

        .sesen-certified-device-page .sesen-cert-btn:focus-visible,
        .sesen-certified-device-page .sesen-cert-link:focus-visible,
        .sesen-certified-device-page .sesen-cert-parent-link:focus-visible,
        .sesen-certified-device-page summary:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.34);
          outline-offset: 3px;
        }

        .sesen-certified-device-page .sesen-cert-link,
        .sesen-certified-device-page .sesen-cert-parent-link {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          color: var(--sesen-cert-primary-dark);
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .sesen-certified-device-page .sesen-cert-link:hover,
        .sesen-certified-device-page .sesen-cert-parent-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-certified-device-page .sesen-cert-arrow {
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
        }

        .sesen-certified-device-page .sesen-cert-check {
          width: 20px;
          height: 20px;
          color: var(--sesen-cert-primary-dark);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .sesen-certified-device-page .sesen-cert-icon {
          width: 24px;
          height: 24px;
        }

        /* Hero */
        .sesen-certified-device-page .sesen-cert-hero {
          padding: 94px 0 90px;
          background:
            radial-gradient(circle at 88% 16%, rgba(75, 111, 216, 0.08), transparent 29%),
            #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
          gap: 68px;
          align-items: center;
        }

        .sesen-certified-device-page .sesen-cert-hero-copy {
          max-width: 710px;
        }

        .sesen-certified-device-page .sesen-cert-hero-copy .sesen-cert-lead {
          margin-bottom: 14px;
          font-size: 20px;
          line-height: 1.66;
        }

        .sesen-certified-device-page .sesen-cert-hero-support {
          max-width: 670px;
          margin-bottom: 30px;
        }

        .sesen-certified-device-page .sesen-cert-hero-parent {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid var(--sesen-cert-divider);
        }

        .sesen-certified-device-page .sesen-cert-hero-parent span {
          display: block;
          margin-bottom: 7px;
          color: var(--sesen-cert-muted);
          font-size: 14px;
        }

        .sesen-certified-device-page .sesen-cert-hero-art {
          width: min(100%, 570px);
          margin-left: auto;
        }

        .sesen-certified-device-page .sesen-cert-hero-art svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Trust */
        .sesen-certified-device-page .sesen-cert-trust {
          background: #FFFFFF;
          border-top: 1px solid var(--sesen-cert-divider);
          border-bottom: 1px solid var(--sesen-cert-divider);
        }

        .sesen-certified-device-page .sesen-cert-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .sesen-certified-device-page .sesen-cert-trust-item {
          position: relative;
          padding: 25px 24px;
          text-align: center;
          color: var(--sesen-cert-navy);
          font-size: 16px;
          font-weight: 600;
        }

        .sesen-certified-device-page .sesen-cert-trust-item + .sesen-cert-trust-item::before {
          content: "";
          width: 1px;
          height: 28px;
          position: absolute;
          left: 0;
          top: 50%;
          background: var(--sesen-cert-divider);
          transform: translateY(-50%);
        }

        /* Meaning */
        .sesen-certified-device-page .sesen-cert-meaning-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.74fr) minmax(0, 1.26fr);
          gap: 76px;
          align-items: start;
        }

        .sesen-certified-device-page .sesen-cert-meaning-intro {
          max-width: 520px;
        }

        .sesen-certified-device-page .sesen-cert-concepts {
          border-top: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-concept {
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 30px;
          padding: 27px 0;
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-concept h3 {
          margin: 0;
          font-size: 20px;
        }

        .sesen-certified-device-page .sesen-cert-concept p {
          margin: 0;
        }

        /* Scenarios */
        .sesen-certified-device-page .sesen-cert-scenarios {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-cert-border);
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-scenario {
          position: relative;
          padding: 30px 25px 32px;
        }

        .sesen-certified-device-page .sesen-cert-scenario + .sesen-cert-scenario::before {
          content: "";
          position: absolute;
          left: 0;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: var(--sesen-cert-divider);
        }

        .sesen-certified-device-page .sesen-cert-scenario h3 {
          font-size: 18px;
        }

        .sesen-certified-device-page .sesen-cert-scenario p {
          margin-bottom: 0;
          color: var(--sesen-cert-muted);
        }

        .sesen-certified-device-page .sesen-cert-scenario-callout {
          margin-top: 32px;
          padding: 20px 24px;
          border-left: 2px solid var(--sesen-cert-primary);
          background: #FFFFFF;
          color: var(--sesen-cert-body);
        }

        .sesen-certified-device-page .sesen-cert-scenario-callout strong {
          color: var(--sesen-cert-navy);
          font-weight: 600;
        }

        /* Package */
        .sesen-certified-device-page .sesen-cert-package-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-cert-border);
          border-left: 1px solid var(--sesen-cert-border);
          background: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-package-item {
          padding: 32px 30px;
          border-right: 1px solid var(--sesen-cert-border);
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-package-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 20px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--sesen-cert-soft-blue);
          color: var(--sesen-cert-primary-dark);
        }

        .sesen-certified-device-page .sesen-cert-package-item h3 {
          font-size: 20px;
        }

        .sesen-certified-device-page .sesen-cert-package-item p {
          margin-bottom: 9px;
        }

        .sesen-certified-device-page .sesen-cert-package-detail {
          margin-bottom: 0 !important;
          color: var(--sesen-cert-muted) !important;
          font-size: 16px !important;
        }

        .sesen-certified-device-page .sesen-cert-package-note {
          max-width: 890px;
          margin-top: 28px;
          padding: 22px 26px;
          border: 1px solid #CDD8EE;
          border-radius: 20px;
          background: var(--sesen-cert-pale-blue);
          color: var(--sesen-cert-body);
        }

        /* Evidence chain */
        .sesen-certified-device-page .sesen-cert-evidence-head {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 70px;
          align-items: end;
          margin-bottom: 50px;
        }

        .sesen-certified-device-page .sesen-cert-evidence-head p:last-child {
          margin-bottom: 0;
        }

        .sesen-certified-device-page .sesen-cert-evidence-chain {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          position: relative;
          padding-top: 18px;
        }

        .sesen-certified-device-page .sesen-cert-evidence-chain::before {
          content: "";
          position: absolute;
          left: 7%;
          right: 7%;
          top: 42px;
          height: 1px;
          background: rgba(200,214,255,0.34);
        }

        .sesen-certified-device-page .sesen-cert-evidence-step {
          position: relative;
          padding: 0 16px;
          text-align: center;
        }

        .sesen-certified-device-page .sesen-cert-evidence-node {
          width: 48px;
          height: 48px;
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          border: 1px solid rgba(200,214,255,0.5);
          border-radius: 50%;
          background: var(--sesen-cert-navy);
          color: var(--sesen-cert-light-blue);
          font-size: 12px;
          font-weight: 700;
        }

        .sesen-certified-device-page .sesen-cert-evidence-step h3 {
          min-height: 55px;
          font-size: 18px;
        }

        .sesen-certified-device-page .sesen-cert-evidence-step p {
          margin-bottom: 0;
          color: #C9D4ED;
          font-size: 16px;
          line-height: 1.65;
        }

        /* Content types */
        .sesen-certified-device-page .sesen-cert-content-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 60px;
          border-top: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-content-item {
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-content-item h3 {
          font-size: 21px;
        }

        .sesen-certified-device-page .sesen-cert-content-item p {
          margin-bottom: 13px;
        }

        .sesen-certified-device-page .sesen-cert-content-handoff {
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid var(--sesen-cert-divider);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 20px;
        }

        .sesen-certified-device-page .sesen-cert-content-handoff span {
          color: var(--sesen-cert-muted);
          font-size: 16px;
        }

        /* Workflow */
        .sesen-certified-device-page .sesen-cert-workflow-grid {
          display: grid;
          grid-template-columns: minmax(290px, 0.7fr) minmax(0, 1.3fr);
          gap: 74px;
          align-items: start;
        }

        .sesen-certified-device-page .sesen-cert-workflow-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-certified-device-page .sesen-cert-workflow-list {
          margin-left: 24px;
          border-left: 1px solid #C9D5ED;
        }

        .sesen-certified-device-page .sesen-cert-workflow-step {
          position: relative;
          padding: 0 0 42px 58px;
        }

        .sesen-certified-device-page .sesen-cert-workflow-step:last-child {
          padding-bottom: 0;
        }

        .sesen-certified-device-page .sesen-cert-workflow-number {
          width: 50px;
          height: 50px;
          position: absolute;
          left: -25px;
          top: 0;
          display: grid;
          place-items: center;
          border: 1px solid #B9C7E7;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--sesen-cert-primary-dark);
          font-size: 12px;
          font-weight: 700;
        }

        .sesen-certified-device-page .sesen-cert-workflow-step h3 {
          margin-bottom: 8px;
        }

        .sesen-certified-device-page .sesen-cert-workflow-step p {
          max-width: 735px;
          margin-bottom: 9px;
        }

        .sesen-certified-device-page .sesen-cert-workflow-points {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px 20px;
          max-width: 720px;
          margin: 15px 0 8px;
          padding: 0;
        }

        .sesen-certified-device-page .sesen-cert-workflow-points li {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          color: var(--sesen-cert-body);
          font-size: 16px;
        }

        .sesen-certified-device-page .sesen-cert-workflow-points li::before {
          content: "";
          width: 5px;
          height: 5px;
          margin-top: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--sesen-cert-primary);
        }

        .sesen-certified-device-page .sesen-cert-workflow-note {
          color: var(--sesen-cert-muted) !important;
        }

        /* Traceability */
        .sesen-certified-device-page .sesen-cert-trace-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-certified-device-page .sesen-cert-trace-list {
          border-top: 1px solid #C9D5ED;
        }

        .sesen-certified-device-page .sesen-cert-trace-item {
          display: grid;
          grid-template-columns: minmax(170px, 0.72fr) minmax(0, 1.28fr);
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid #C9D5ED;
        }

        .sesen-certified-device-page .sesen-cert-trace-item h3 {
          margin: 0;
          font-size: 19px;
        }

        .sesen-certified-device-page .sesen-cert-trace-item p {
          margin: 0;
        }

        .sesen-certified-device-page .sesen-cert-signature {
          margin-top: 34px;
          padding: 24px 27px;
          border-left: 2px solid var(--sesen-cert-primary);
          background: #FFFFFF;
          color: var(--sesen-cert-navy);
          font-family: var(--sesen-cert-heading-font);
          font-size: 21px;
          font-weight: 500;
          line-height: 1.5;
        }

        /* Standards */
        .sesen-certified-device-page .sesen-cert-standards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid var(--sesen-cert-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-standard {
          padding: 38px 36px;
        }

        .sesen-certified-device-page .sesen-cert-standard + .sesen-cert-standard {
          border-left: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-standard-name {
          margin-bottom: 9px;
          color: var(--sesen-cert-primary-dark);
          font-family: var(--sesen-cert-heading-font);
          font-size: 24px;
          font-weight: 500;
        }

        .sesen-certified-device-page .sesen-cert-standard-label {
          margin-bottom: 16px;
          color: var(--sesen-cert-navy);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .sesen-certified-device-page .sesen-cert-standard p {
          margin-bottom: 0;
        }

        .sesen-certified-device-page .sesen-cert-iso-clarity {
          max-width: 900px;
          margin: 28px auto 0;
          padding: 20px 24px;
          text-align: center;
          border-top: 1px solid #C9D5ED;
          border-bottom: 1px solid #C9D5ED;
          color: var(--sesen-cert-navy);
          font-size: 16px;
        }

        .sesen-certified-device-page .sesen-cert-quality-link {
          margin-top: 26px;
          text-align: center;
        }

        /* Requirements callout */
        .sesen-certified-device-page .sesen-cert-requirements-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 70px;
          align-items: center;
        }

        .sesen-certified-device-page .sesen-cert-requirements-panel {
          padding: 34px 36px;
          border: 1px solid var(--sesen-cert-border);
          border-radius: 24px;
          background: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-requirements-panel ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sesen-certified-device-page .sesen-cert-requirements-panel li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          padding: 10px 0;
          color: var(--sesen-cert-body);
        }

        /* Why */
        .sesen-certified-device-page .sesen-cert-why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          border-top: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-why-item {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 16px;
          padding: 27px 0 29px;
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-why-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--sesen-cert-soft-blue);
          color: var(--sesen-cert-primary-dark);
        }

        .sesen-certified-device-page .sesen-cert-why-icon .sesen-cert-check {
          margin-top: 0;
        }

        .sesen-certified-device-page .sesen-cert-why-item h3 {
          margin-bottom: 6px;
          font-size: 19px;
        }

        .sesen-certified-device-page .sesen-cert-why-item p {
          margin: 0;
          color: var(--sesen-cert-muted);
          font-size: 16px;
        }

        /* FAQ */
        .sesen-certified-device-page .sesen-cert-faq-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-certified-device-page .sesen-cert-faq-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-certified-device-page .sesen-cert-faq-list {
          border-top: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-faq-item {
          border-bottom: 1px solid var(--sesen-cert-border);
        }

        .sesen-certified-device-page .sesen-cert-faq-item summary {
          cursor: pointer;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 34px;
          gap: 22px;
          align-items: center;
          padding: 24px 0;
          color: var(--sesen-cert-navy);
          font-family: var(--sesen-cert-heading-font);
          font-size: 19px;
          font-weight: 500;
          line-height: 1.4;
        }

        .sesen-certified-device-page .sesen-cert-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .sesen-certified-device-page .sesen-cert-faq-icon {
          width: 30px;
          height: 30px;
          position: relative;
          border: 1px solid #C5D0E6;
          border-radius: 50%;
        }

        .sesen-certified-device-page .sesen-cert-faq-icon::before,
        .sesen-certified-device-page .sesen-cert-faq-icon::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          background: var(--sesen-cert-primary-dark);
          transform: translate(-50%, -50%);
        }

        .sesen-certified-device-page .sesen-cert-faq-icon::before {
          width: 10px;
          height: 1.5px;
        }

        .sesen-certified-device-page .sesen-cert-faq-icon::after {
          width: 1.5px;
          height: 10px;
          transition: transform 160ms ease;
        }

        .sesen-certified-device-page .sesen-cert-faq-item[open] .sesen-cert-faq-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .sesen-certified-device-page .sesen-cert-faq-answer {
          max-width: 840px;
          padding: 0 48px 24px 0;
        }

        .sesen-certified-device-page .sesen-cert-faq-answer p {
          margin: 0;
          font-size: 16px;
        }

        /* Broader medical-device service handoff */
        .sesen-certified-device-page .sesen-cert-pillar-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .sesen-certified-device-page .sesen-cert-program-map {
          padding: 30px;
          border: 1px solid #C9D5ED;
          border-radius: 26px;
          background: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-program-map-title {
          margin-bottom: 18px;
          color: var(--sesen-cert-navy);
          font-family: var(--sesen-cert-heading-font);
          font-size: 22px;
          font-weight: 500;
          line-height: 1.35;
        }

        .sesen-certified-device-page .sesen-cert-program-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .sesen-certified-device-page .sesen-cert-program-item {
          min-height: 62px;
          display: flex;
          align-items: center;
          padding: 13px 15px;
          border: 1px solid var(--sesen-cert-border);
          border-radius: 14px;
          color: var(--sesen-cert-body);
          font-size: 16px;
          line-height: 1.45;
        }

        .sesen-certified-device-page .sesen-cert-program-focus {
          margin-top: 14px;
          padding: 18px 20px;
          border-left: 3px solid var(--sesen-cert-primary);
          border-radius: 0 14px 14px 0;
          background: var(--sesen-cert-pale-blue);
          color: var(--sesen-cert-navy);
          font-weight: 600;
        }

        .sesen-certified-device-page .sesen-cert-program-focus span {
          display: block;
          margin-top: 4px;
          color: var(--sesen-cert-muted);
          font-size: 16px;
          font-weight: 400;
        }

        /* Final CTA */
        .sesen-certified-device-page .sesen-cert-final {
          padding: 88px 0;
          background:
            radial-gradient(circle at 84% 30%, rgba(111,139,225,0.24), transparent 32%),
            var(--sesen-cert-deep-blue);
        }

        .sesen-certified-device-page .sesen-cert-final-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 58px;
          align-items: center;
        }

        .sesen-certified-device-page .sesen-cert-final h2 {
          max-width: 820px;
          margin-bottom: 14px;
          color: #FFFFFF;
        }

        .sesen-certified-device-page .sesen-cert-final p {
          max-width: 780px;
          margin-bottom: 0;
          color: #E1E9FC;
          font-size: 18px;
        }

        .sesen-certified-device-page .sesen-cert-final .sesen-cert-btn-row {
          justify-content: flex-end;
        }

        /* Responsive */
        @media (max-width: 1360px) {
          .sesen-certified-device-page .sesen-cert-container {
            width: min(1280px, calc(100% - 80px));
          }

          .sesen-certified-device-page .sesen-cert-hero-grid {
            gap: 48px;
          }

          .sesen-certified-device-page .sesen-cert-scenarios {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sesen-certified-device-page .sesen-cert-scenario:nth-child(4),
          .sesen-certified-device-page .sesen-cert-scenario:nth-child(5) {
            border-top: 1px solid var(--sesen-cert-divider);
          }

          .sesen-certified-device-page .sesen-cert-scenario:nth-child(4)::before {
            display: none;
          }
        }

        @media (max-width: 1080px) {
          .sesen-certified-device-page .sesen-cert-hero-grid {
            grid-template-columns: 1fr 0.9fr;
          }

          .sesen-certified-device-page .sesen-cert-package-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-certified-device-page .sesen-cert-evidence-chain {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 36px 0;
          }

          .sesen-certified-device-page .sesen-cert-evidence-chain::before {
            display: none;
          }

          .sesen-certified-device-page .sesen-cert-standards-grid {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-standard + .sesen-cert-standard {
            border-left: 0;
            border-top: 1px solid var(--sesen-cert-border);
          }

          .sesen-certified-device-page .sesen-cert-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .sesen-certified-device-page .sesen-cert-section {
            padding: 76px 0;
          }

          .sesen-certified-device-page .sesen-cert-section--dense {
            padding: 70px 0;
          }

          .sesen-certified-device-page .sesen-cert-hero {
            padding: 76px 0;
          }

          .sesen-certified-device-page .sesen-cert-hero-grid,
          .sesen-certified-device-page .sesen-cert-meaning-grid,
          .sesen-certified-device-page .sesen-cert-evidence-head,
          .sesen-certified-device-page .sesen-cert-workflow-grid,
          .sesen-certified-device-page .sesen-cert-trace-grid,
          .sesen-certified-device-page .sesen-cert-requirements-grid,
          .sesen-certified-device-page .sesen-cert-faq-grid,
          .sesen-certified-device-page .sesen-cert-pillar-grid,
          .sesen-certified-device-page .sesen-cert-final-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .sesen-certified-device-page .sesen-cert-final-grid {
            gap: 32px;
          }

          .sesen-certified-device-page .sesen-cert-hero-art {
            width: min(100%, 520px);
            margin: 10px auto 0;
          }

          .sesen-certified-device-page .sesen-cert-meaning-intro {
            max-width: 760px;
          }

          .sesen-certified-device-page .sesen-cert-workflow-intro,
          .sesen-certified-device-page .sesen-cert-faq-intro {
            position: static;
          }

          .sesen-certified-device-page .sesen-cert-final .sesen-cert-btn-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .sesen-certified-device-page .sesen-cert-container {
            width: calc(100% - 56px);
          }

          .sesen-certified-device-page h1 {
            font-size: 42px;
          }

          .sesen-certified-device-page h2 {
            font-size: 32px;
          }

          .sesen-certified-device-page h3 {
            font-size: 21px;
          }

          .sesen-certified-device-page .sesen-cert-lead,
          .sesen-certified-device-page .sesen-cert-hero-copy .sesen-cert-lead {
            font-size: 18px;
          }

          .sesen-certified-device-page .sesen-cert-trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sesen-certified-device-page .sesen-cert-trust-item:nth-child(3),
          .sesen-certified-device-page .sesen-cert-trust-item:nth-child(4) {
            border-top: 1px solid var(--sesen-cert-divider);
          }

          .sesen-certified-device-page .sesen-cert-trust-item:nth-child(3)::before {
            display: none;
          }

          .sesen-certified-device-page .sesen-cert-concept {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sesen-certified-device-page .sesen-cert-scenarios {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-scenario {
            border-bottom: 1px solid var(--sesen-cert-divider);
          }

          .sesen-certified-device-page .sesen-cert-scenario:last-child {
            border-bottom: 0;
          }

          .sesen-certified-device-page .sesen-cert-scenario::before {
            display: none !important;
          }

          .sesen-certified-device-page .sesen-cert-content-list,
          .sesen-certified-device-page .sesen-cert-why-grid {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-evidence-chain {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .sesen-certified-device-page .sesen-cert-evidence-step {
            display: grid;
            grid-template-columns: 52px 1fr;
            gap: 16px;
            text-align: left;
            padding: 0 0 28px;
          }

          .sesen-certified-device-page .sesen-cert-evidence-node {
            margin: 0;
          }

          .sesen-certified-device-page .sesen-cert-evidence-copy {
            grid-column: 2;
          }

          .sesen-certified-device-page .sesen-cert-evidence-step h3 {
            min-height: 0;
            margin-bottom: 5px;
          }

          .sesen-certified-device-page .sesen-cert-evidence-step p {
            margin: 0;
          }

          .sesen-certified-device-page .sesen-cert-workflow-points {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-trace-item {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          /* v1.2: center major standalone section titles without forcing substantive body copy to center */
          .sesen-certified-device-page .sesen-cert-mobile-center {
            margin-left: auto;
            margin-right: auto;
          }

          .sesen-certified-device-page .sesen-cert-mobile-center > .sesen-cert-eyebrow,
          .sesen-certified-device-page .sesen-cert-mobile-center > h2 {
            text-align: center;
          }

          /* Technical, workflow, FAQ, and regulated sections intentionally retain a strong left reading axis */
          .sesen-certified-device-page .sesen-cert-mobile-left,
          .sesen-certified-device-page .sesen-cert-mobile-left > .sesen-cert-eyebrow,
          .sesen-certified-device-page .sesen-cert-mobile-left > h2 {
            text-align: left;
          }
        }

        @media (max-width: 560px) {
          .sesen-certified-device-page .sesen-cert-container {
            width: calc(100% - 40px);
          }

          .sesen-certified-device-page .sesen-cert-section {
            padding: 68px 0;
          }

          .sesen-certified-device-page .sesen-cert-section--dense {
            padding: 64px 0;
          }

          .sesen-certified-device-page .sesen-cert-hero {
            padding: 68px 0 64px;
          }

          .sesen-certified-device-page .sesen-cert-heading-wrap {
            margin-bottom: 36px;
          }

          .sesen-certified-device-page .sesen-cert-btn-row {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .sesen-certified-device-page .sesen-cert-btn {
            width: 100%;
          }

          .sesen-certified-device-page .sesen-cert-package-grid {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-meaning-grid,
          .sesen-certified-device-page .sesen-cert-evidence-head,
          .sesen-certified-device-page .sesen-cert-workflow-grid,
          .sesen-certified-device-page .sesen-cert-trace-grid,
          .sesen-certified-device-page .sesen-cert-requirements-grid,
          .sesen-certified-device-page .sesen-cert-faq-grid,
          .sesen-certified-device-page .sesen-cert-pillar-grid {
            gap: 36px;
          }

          .sesen-certified-device-page .sesen-cert-trust-grid {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-trust-item {
            padding: 17px 20px;
          }

          .sesen-certified-device-page .sesen-cert-trust-item + .sesen-cert-trust-item {
            border-top: 1px solid var(--sesen-cert-divider);
          }

          .sesen-certified-device-page .sesen-cert-trust-item::before {
            display: none !important;
          }

          .sesen-certified-device-page .sesen-cert-package-item,
          .sesen-certified-device-page .sesen-cert-standard,
          .sesen-certified-device-page .sesen-cert-requirements-panel,
          .sesen-certified-device-page .sesen-cert-program-map {
            padding: 26px 22px;
          }

          .sesen-certified-device-page .sesen-cert-program-list {
            grid-template-columns: 1fr;
          }

          .sesen-certified-device-page .sesen-cert-workflow-list {
            margin-left: 19px;
          }

          .sesen-certified-device-page .sesen-cert-workflow-step {
            padding-left: 46px;
          }

          .sesen-certified-device-page .sesen-cert-workflow-number {
            left: -20px;
            width: 40px;
            height: 40px;
          }

          .sesen-certified-device-page .sesen-cert-faq-item summary {
            grid-template-columns: 1fr 30px;
            gap: 14px;
            padding: 22px 0;
            font-size: 18px;
          }

          .sesen-certified-device-page .sesen-cert-faq-answer {
            padding-right: 0;
          }

          .sesen-certified-device-page .sesen-cert-final {
            padding: 68px 0;
          }
        }

        @media (max-width: 360px) {
          .sesen-certified-device-page h1 {
            font-size: 38px;
          }

          .sesen-certified-device-page h2 {
            font-size: 30px;
          }

          .sesen-certified-device-page .sesen-cert-hero-art {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-certified-device-page .sesen-cert-btn,
          .sesen-certified-device-page .sesen-cert-faq-icon::after {
            transition: none;
          }
        }
      `}</style>

      <section className="sesen-cert-hero">
        <div className="sesen-cert-container sesen-cert-hero-grid">
          <div className="sesen-cert-hero-copy">
            <p className="sesen-cert-eyebrow">Certification & Traceability</p>
            <h1>Certified Medical Device Translation Services</h1>
            <p className="sesen-cert-lead">
              Certified translations with documented professional review, Certificates of Accuracy, and traceable supporting documentation for regulated medical device content.
            </p>
            <p className="sesen-cert-hero-support">
              Sesen helps medical device, diagnostics, and life sciences teams prepare translations that can be supported by the documentation their regulatory, quality, audit, or internal processes require. From qualified linguist assignment and independent review to source-version control and final certification, our workflows are designed to make translation quality easier to document, verify, and manage.
            </p>
            <div className="sesen-cert-btn-row">
              <a className="sesen-cert-btn sesen-cert-btn--primary" href="https://www.sesen.com/get-a-quote/">
                REQUEST A CERTIFIED TRANSLATION <Arrow />
              </a>
              <a className="sesen-cert-btn sesen-cert-btn--secondary" href="https://www.sesen.com/contact-sales/">
                TALK WITH TEAM SESEN
              </a>
            </div>
            <div className="sesen-cert-hero-parent">
              <span>Need end-to-end device localization?</span>
              <a className="sesen-cert-parent-link" href="https://www.sesen.com/medical-device-translation-services/">
                Explore Medical Device Translation Services <Arrow />
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-cert-trust" aria-label="Certified medical device translation capabilities">
        <div className="sesen-cert-container sesen-cert-trust-grid">
          <div className="sesen-cert-trust-item">Certificate of Accuracy</div>
          <div className="sesen-cert-trust-item">Qualified Medical Linguists</div>
          <div className="sesen-cert-trust-item">Documented Review & Traceability</div>
          <div className="sesen-cert-trust-item">ISO 17100 · ISO 9001 · ISO 13485</div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-soft">
        <div className="sesen-cert-container sesen-cert-meaning-grid">
          <div className="sesen-cert-meaning-intro sesen-cert-mobile-left">
            <h2>What Does Certified Medical Device Translation Mean?</h2>
            <p className="sesen-cert-lead">
              “Certified translation” can mean different things depending on the document, jurisdiction, authority, customer quality system, and intended use.
            </p>
            <p>
              In a medical device environment, certification often concerns the evidence surrounding the translation—who performed and reviewed the work, which source document was translated, which target-language file was produced, and what statement or supporting documentation accompanies the final deliverable.
            </p>
            <p>
              Sesen can build those requirements into the workflow from the beginning so the final documentation remains connected to the translation it supports.
            </p>
          </div>

          <div className="sesen-cert-concepts">
            {certificationConcepts.map((item) => (
              <article className="sesen-cert-concept" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section">
        <div className="sesen-cert-container">
          <div className="sesen-cert-heading-wrap sesen-cert-mobile-center">
            <p className="sesen-cert-eyebrow">Project-Specific Requirements</p>
            <h2>When Might Medical Device Translation Certification Be Requested?</h2>
            <p className="sesen-cert-lead">
              There is no single certification requirement that applies to every medical device translation. Requirements can vary according to the jurisdiction, authority, notified body, submission type, document purpose, contractual requirements, and the manufacturer’s own quality procedures.
            </p>
          </div>

          <div className="sesen-cert-scenarios">
            {certificationScenarios.map((item) => (
              <article className="sesen-cert-scenario" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sesen-cert-scenario-callout">
            <strong>Sesen works with clients to define the required translation evidence before translation begins.</strong> Medical device teams may also choose to require documentation beyond a regulator’s minimum requirements to support internal controls, supplier qualification, or audit readiness.
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-pale">
        <div className="sesen-cert-container">
          <div className="sesen-cert-heading-wrap sesen-cert-mobile-center">
            <h2>What Can Be Included in a Certified Translation Package?</h2>
            <p className="sesen-cert-lead">
              A certificate should not exist in isolation from the translation it supports. Sesen can structure translation, review, QA, and certification as a connected workflow, with the final documentation configured according to agreed project requirements.
            </p>
          </div>

          <div className="sesen-cert-package-grid">
            {packageItems.map((item) => (
              <article className="sesen-cert-package-item" key={item.title}>
                <div className="sesen-cert-package-icon"><PackageIcon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="sesen-cert-package-detail">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="sesen-cert-package-note">
            Depending on the engagement, supporting documentation can include certification or accuracy statements, project and document identifiers, language and revision information, translator or reviewer qualification information, documented review records, controlled delivery records, optional back translation, optional reconciliation, and other agreed quality documentation.
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-dark">
        <div className="sesen-cert-container">
          <div className="sesen-cert-evidence-head">
            <div className="sesen-cert-mobile-left">
              <h2>One Translation. One Controlled Evidence Chain.</h2>
            </div>
            <div>
              <p className="sesen-cert-lead">
                A strong certification process connects the approved source, professional translation, independent review, quality verification, certification documentation, and final controlled delivery.
              </p>
            </div>
          </div>

          <div className="sesen-cert-evidence-chain" aria-label="Certified translation evidence chain">
            {evidenceSteps.map((item, index) => (
              <article className="sesen-cert-evidence-step" key={item.title}>
                <div className="sesen-cert-evidence-node">{String(index + 1).padStart(2, "0")}</div>
                <div className="sesen-cert-evidence-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section">
        <div className="sesen-cert-container">
          <div className="sesen-cert-heading-wrap sesen-cert-mobile-left">
            <p className="sesen-cert-eyebrow">Document Scope</p>
            <h2>Medical Device Content That May Need Certification Documentation</h2>
            <p className="sesen-cert-lead">
              Certification requirements should be determined for the individual project rather than assumed from the document type alone. Sesen can provide certification support when the customer, authority, audit process, contractual requirement, or quality system calls for it.
            </p>
          </div>

          <div className="sesen-cert-content-list">
            {contentTypes.map((item) => (
              <article className="sesen-cert-content-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.href && (
                  <a className="sesen-cert-link" href={item.href}>
                    {item.link} <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="sesen-cert-content-handoff">
            <span>For complete coverage of device documentation, software, labeling, training, and lifecycle content:</span>
            <a className="sesen-cert-link" href="https://www.sesen.com/medical-device-translation-services/">
              Explore Medical Device Translation Services <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-pale">
        <div className="sesen-cert-container sesen-cert-workflow-grid">
          <div className="sesen-cert-workflow-intro sesen-cert-mobile-left">
            <h2>A Traceable Workflow From Source Document to Certification</h2>
            <p className="sesen-cert-lead">
              Certified translation is strongest when certification requirements are incorporated before production begins.
            </p>
            <p>
              Sesen uses a structured workflow designed to connect source control, professional translation, independent review, QA, documentation, and final delivery.
            </p>
          </div>

          <div className="sesen-cert-workflow-list">
            {workflowSteps.map((step) => (
              <article className="sesen-cert-workflow-step" key={step.number}>
                <div className="sesen-cert-workflow-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.points && (
                  <ul className="sesen-cert-workflow-points">
                    {step.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
                {step.note && <p className="sesen-cert-workflow-note">{step.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-soft">
        <div className="sesen-cert-container sesen-cert-trace-grid">
          <div className="sesen-cert-mobile-left">
            <p className="sesen-cert-eyebrow">Regulatory & Quality Teams</p>
            <h2>Translation Documentation Built for Regulatory and Quality Review</h2>
            <p className="sesen-cert-lead">
              For regulated teams, translation quality is not only about the final words on the page. It is also about understanding how the deliverable was created and which controlled content it represents.
            </p>
            <p>
              Sesen builds traceability into the workflow so multilingual documentation can be managed more confidently across review cycles, revisions, and long-running programs.
            </p>
            <div className="sesen-cert-signature">
              Certification is most useful when it is connected to a controlled translation process—not added as an isolated document after the fact.
            </div>
          </div>

          <div className="sesen-cert-trace-list">
            {traceabilityItems.map((item) => (
              <article className="sesen-cert-trace-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section">
        <div className="sesen-cert-container">
          <div className="sesen-cert-heading-wrap sesen-cert-heading-wrap--center sesen-cert-mobile-left">
            <h2>ISO-Certified Quality Infrastructure for Medical Device Translation</h2>
            <p className="sesen-cert-lead">
              Sesen combines translation-specific quality processes with a quality framework designed for regulated life sciences content.
            </p>
          </div>

          <div className="sesen-cert-standards-grid">
            {standards.map((item) => (
              <article className="sesen-cert-standard" key={item.name}>
                <div className="sesen-cert-standard-name">{item.name}</div>
                <div className="sesen-cert-standard-label">{item.label}</div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sesen-cert-iso-clarity">
            These certifications describe Sesen’s applicable quality systems and translation processes; they should not be interpreted as ISO individually certifying a particular translated document.
          </div>
          <div className="sesen-cert-quality-link">
            <a className="sesen-cert-link" href="https://www.sesen.com/quality-compliance-security/">
              Explore Sesen Quality, Compliance & Security <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-pale">
        <div className="sesen-cert-container sesen-cert-requirements-grid">
          <div className="sesen-cert-mobile-left">
            <h2>Certification Requirements Depend on the Intended Use</h2>
            <p className="sesen-cert-lead">
              A “certified translation” should not be treated as a universal regulatory category.
            </p>
            <p>
              Requirements can vary by authority, jurisdiction, document, submission pathway, intended use, notified body, customer quality system, and contractual requirement. Some contexts specify the need for an accurate translation without prescribing a universal certification model, while manufacturers may separately require Certificates of Accuracy or additional documentation through their own quality procedures.
            </p>
            <p>
              For that reason, Sesen begins certification projects by understanding the required deliverable rather than assuming that one certificate format applies everywhere.
            </p>
          </div>

          <div className="sesen-cert-requirements-panel">
            <h3>Share Requirements During Project Intake</h3>
            <p>If available, provide the documentation that defines how the translation and certification package should be prepared.</p>
            <ul>
              {[
                "Authority or submission instructions",
                "Customer SOPs or quality requirements",
                "Certification wording or template",
                "Notified-body or auditor feedback",
                "Required translator or reviewer qualifications",
                "Source and revision-control requirements",
                "Back translation or reconciliation requirements",
              ].map((item) => (
                <li key={item}><Check /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-section--dense">
        <div className="sesen-cert-container">
          <div className="sesen-cert-heading-wrap sesen-cert-heading-wrap--center sesen-cert-mobile-center">
            <h2>Certified Translation Support Built for Regulated Device Teams</h2>
            <p className="sesen-cert-lead">
              Sesen combines specialized medical-device language expertise, documented review, certification support, and controlled quality processes for projects that require formal translation evidence.
            </p>
          </div>

          <div className="sesen-cert-why-grid">
            {whyItems.map((item) => (
              <article className="sesen-cert-why-item" key={item.title}>
                <div className="sesen-cert-why-icon"><Check /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-soft">
        <div className="sesen-cert-container sesen-cert-faq-grid">
          <div className="sesen-cert-faq-intro sesen-cert-mobile-left">
            <h2>Certified Medical Device Translation FAQs</h2>
            <p className="sesen-cert-lead">
              Common questions about Certificates of Accuracy, certification requirements, ISO quality processes, existing translations, and document revisions.
            </p>
          </div>

          <div className="sesen-cert-faq-list">
            {faqs.map((faq, index) => (
              <details className="sesen-cert-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="sesen-cert-faq-icon" aria-hidden="true" />
                </summary>
                <div className="sesen-cert-faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cert-section sesen-cert-pale">
        <div className="sesen-cert-container sesen-cert-pillar-grid">
          <div className="sesen-cert-program-map" aria-label="Broader medical device translation capabilities and certified translation focus">
            <div className="sesen-cert-program-map-title">End-to-End Medical Device Translation</div>
            <div className="sesen-cert-program-list">
              <div className="sesen-cert-program-item">IFUs & Labeling</div>
              <div className="sesen-cert-program-item">Regulatory & Technical Documentation</div>
              <div className="sesen-cert-program-item">Clinical & Human-Factors Content</div>
              <div className="sesen-cert-program-item">Software, SaMD & Connected Devices</div>
              <div className="sesen-cert-program-item">Training & Product Communications</div>
              <div className="sesen-cert-program-item">Post-Market & Lifecycle Updates</div>
            </div>
            <div className="sesen-cert-program-focus">
              Certified Translation Documentation
              <span>Certificates of Accuracy, qualifications, evidence, and traceability for projects that require them.</span>
            </div>
          </div>

          <div className="sesen-cert-mobile-center">
            <h2>Need Complete Medical Device Translation Support?</h2>
            <p className="sesen-cert-lead">
              Certified translation is one specialized part of a larger regulated multilingual content program.
            </p>
            <p>
              For end-to-end support across IFUs, labeling, regulatory documentation, technical files, clinical and human-factors content, medical software and SaMD, training, terminology management, product updates, and post-market communications, explore Sesen’s comprehensive medical device translation capabilities.
            </p>
            <a className="sesen-cert-link" href="https://www.sesen.com/medical-device-translation-services/">
              Explore Medical Device Translation Services <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-cert-final">
        <div className="sesen-cert-container sesen-cert-final-grid">
          <div className="sesen-cert-mobile-center">
            <h2>Need a Certified Translation Package for Medical Device Documentation?</h2>
            <p>
              Share your source document, target languages, intended use, submission or review context, certification requirements, source revision, and timeline. Team Sesen can help define a translation, review, QA, and certification workflow aligned with your project requirements.
            </p>
          </div>
          <div className="sesen-cert-btn-row">
            <a className="sesen-cert-btn sesen-cert-btn--primary" href="https://www.sesen.com/get-a-quote/">
              REQUEST A CERTIFIED TRANSLATION <Arrow />
            </a>
            <a className="sesen-cert-btn sesen-cert-btn--secondary" href="https://www.sesen.com/contact-sales/">
              TALK WITH TEAM SESEN
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SesenCertifiedMedicalDeviceTranslationServicesWireframeV3;
