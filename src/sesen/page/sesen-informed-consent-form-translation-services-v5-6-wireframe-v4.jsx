import React, { useState } from "react";

const COLORS = {
  blue: "#4B6FD8",
  blueDark: "#3659BB",
  blueDeep: "#253F8F",
  blueMid: "#6F8BE1",
  blueSoft: "#EAF0FF",
  bluePale: "#F5F7FF",
  navy: "#17264D",
  ink: "#111827",
  body: "#46546D",
  muted: "#68758B",
  border: "#DDE4F2",
  divider: "#E9EEF8",
  soft: "#F7F9FD",
  white: "#FFFFFF",
  blueLight: "#C8D6FF",
};

const trustItems = [
  "150+ Languages",
  "ISO 17100 · ISO 9001 · ISO 13485",
  "Expert Human Quality Review",
  "Terminology & Version Control",
];

const participantMaterials = [
  {
    title: "Informed Consent Forms",
    text: "Translation of master ICFs, country-specific consent forms, site-specific versions, and other informed consent documentation for multilingual clinical trials.",
  },
  {
    title: "Assent Forms",
    text: "Age-appropriate translation of assent materials used with pediatric and adolescent study participants, based on the source content and study requirements.",
  },
  {
    title: "Re-Consent Materials",
    text: "Translation and controlled updates when protocol amendments, new safety information, study changes, or other revisions require participants to receive updated consent information.",
  },
  {
    title: "Patient Information Sheets",
    text: "Clear translation of participant-facing information describing study purpose, procedures, expectations, visits, possible risks, and other study information.",
  },
  {
    title: "Short-Form Consent Materials",
    text: "Translation of short-form consent documents when they are part of the applicable institutional, IRB, ethics committee, or study-specific consent process.",
  },
  {
    title: "Privacy and Authorization Materials",
    text: "Translation of privacy notices, HIPAA authorization materials, data-use language, confidentiality provisions, and related participant documentation.",
  },
  {
    title: "Electronic Consent Content",
    text: "Localization of eConsent screens, participant instructions, interface text, prompts, help content, and supporting digital materials used in electronic consent workflows.",
  },
  {
    title: "Caregiver and Legally Authorized Representative Materials",
    text: "Translation of consent and explanatory materials intended for parents, guardians, caregivers, or legally authorized representatives where applicable.",
  },
];

const workflow = [
  {
    title: "Study and Source Review",
    text: "We review the source ICF together with available study references, protocol terminology, previous translations, sponsor glossaries, formatting requirements, requested locales, reviewer instructions, and other relevant materials.",
  },
  {
    title: "Terminology Alignment",
    text: "Study-specific language is aligned with protocol terminology, approved glossaries, investigational product terminology, prior translations, and related participant-facing content.",
  },
  {
    title: "Professional Translation",
    text: "Qualified native-language linguists with relevant medical, clinical research, or life sciences expertise translate for meaning rather than mechanically reproducing source-language structure.",
  },
  {
    title: "Independent Linguistic Review",
    text: "A second qualified linguist reviews the translation against the source for accuracy, completeness, terminology, consistency, tone, and participant-facing clarity.",
  },
  {
    title: "Quality and Readability Review",
    text: "Document-level QA evaluates clinical meaning, completeness, numbers, dates, terminology, study identifiers, version references, formatting, and participant-facing readability.",
  },
  {
    title: "Reviewer Coordination and Finalization",
    text: "Authorized sponsor, CRO, site, IRB or ethics committee, medical, legal, and in-country feedback can be reconciled and incorporated into the appropriate language version.",
  },
];

const readabilityItems = [
  {
    title: "Medical and Clinical Terminology",
    text: "Technical terminology needs to remain accurate, but direct word-for-word translation is not always the clearest way to communicate a concept to participants.",
  },
  {
    title: "Risks and Potential Benefits",
    text: "Qualifiers, probability language, severity, uncertainty, and distinctions in risk and benefit statements require careful linguistic review.",
  },
  {
    title: "Procedures, Visits, and Participant Responsibilities",
    text: "Study procedures, treatment schedules, visit timing, randomization language, required activities, and participant obligations should remain aligned with the approved source.",
  },
  {
    title: "Participant Rights and Choice",
    text: "Language related to voluntary participation, withdrawal, confidentiality, alternatives, compensation, injury, data use, and study contacts needs to preserve the participant-facing meaning of the source.",
  },
  {
    title: "Plain Language Without Meaning Loss",
    text: "Readable translation is not the same as oversimplification. Sesen avoids unnecessarily complex or literal phrasing while maintaining clinical, ethical, and study-specific meaning.",
  },
  {
    title: "Local Language Conventions",
    text: "Sentence structure, terminology, forms of address, punctuation, register, and other language conventions can be adapted for the target population and project requirements.",
  },
];

const studyControls = [
  {
    title: "Translation Memory",
    text: "Previously translated and approved content can be reused where appropriate to support consistency across versions and reduce unnecessary retranslation.",
  },
  {
    title: "Terminology Governance",
    text: "Study titles, product names, procedures, visits, participant groups, and other recurring concepts can be managed through study-specific glossaries and approved terminology.",
  },
  {
    title: "Change Analysis",
    text: "When the source changes, affected text can be identified so teams can determine which translated documents and language versions require attention.",
  },
  {
    title: "Reviewer Decision Tracking",
    text: "Approved terminology and linguistic decisions can be incorporated into project resources so the same issue does not need to be resolved repeatedly.",
  },
  {
    title: "Cross-Document Consistency",
    text: "Language can remain aligned across the ICF, protocol, patient information, recruitment materials, safety communication, eConsent, and other related study content.",
  },
];

const timelines = [
  {
    title: "Study Startup",
    text: "Coordinate translation across multiple target languages from an approved master source while establishing terminology and reusable language assets for the study.",
  },
  {
    title: "Country and Site Expansion",
    text: "Add new languages, locales, countries, or site-specific versions while maintaining consistency with translations already reviewed and approved.",
  },
  {
    title: "Protocol and ICF Amendments",
    text: "Identify changed content, update affected language versions, reuse approved terminology, and maintain clear connections to the applicable source version.",
  },
  {
    title: "Safety-Related Updates",
    text: "Support priority workflows when revised risks, safety information, participant instructions, or other time-sensitive content needs multilingual updates.",
  },
  {
    title: "Re-Consent",
    text: "Coordinate multilingual updates when participants need revised consent materials following study changes.",
  },
  {
    title: "Reviewer-Driven Revisions",
    text: "Incorporate authorized sponsor, CRO, site, IRB, ethics committee, or in-country feedback while keeping approved terminology and version history controlled.",
  },
];

const relatedServices = [
  {
    title: "Clinical Trial Translation Services",
    linkLabel: "Explore Clinical Trial Translation",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    text: "Multilingual support for patient-facing content, study documents, clinical operations, and global study communication.",
  },
  {
    title: "IRB & Ethics Committee Translation Services",
    linkLabel: "Explore IRB & Ethics Translation",
    href: "https://www.sesen.com/irb-ethics-committee-translation-services/",
    text: "Translation support for consent materials, submissions, correspondence, responses, and supporting documents used in IRB and ethics committee review.",
  },
  {
    title: "CRO Translation Services",
    linkLabel: "Explore CRO Translation",
    href: "https://www.sesen.com/cro-translation-services/",
    text: "Scalable multilingual workflows for CRO teams coordinating sponsors, countries, sites, reviewers, and recurring study updates.",
  },
  {
    title: "Back Translation Services",
    linkLabel: "Explore Back Translation",
    href: "https://www.sesen.com/linguistic-validation-services/back-translation/",
    text: "Independent back translation and reconciliation when additional meaning verification is required by the study or review process.",
  },
  {
    title: "eCOA Translation Services",
    linkLabel: "Explore eCOA Translation",
    href: "https://www.sesen.com/ecoa-translation-services/",
    text: "Translation and localization for electronic clinical outcome assessment content, interfaces, and multilingual digital assessment workflows.",
  },
  {
    title: "ePRO Translation Services",
    linkLabel: "Explore ePRO Translation",
    href: "https://www.sesen.com/epro-translation-services/",
    text: "Specialized translation and linguistic validation support for electronic patient-reported outcome instruments used across languages and study sites.",
  },
  {
    title: "Clinical Development Translation Services",
    linkLabel: "Explore Clinical Development Translation",
    href: "https://www.sesen.com/clinical-development-translation-services/",
    text: "Language support across study startup, patient materials, clinical operations, ethics review, assessments, amendments, and global reviewer coordination.",
  },
];

const resources = [
  {
    type: "Clinical & Regulatory Knowledge",
    title: "Informed Consent Form Translation Best Practices for Sponsors and CROs",
    href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/informed-consent-form-translation-best-practices/",
    text: "Practical guidance on participant readability, clinical meaning, local language conventions, reviewer coordination, terminology consistency, and version control.",
  },
  {
    type: "White Paper & Guide",
    title: "Practical Implementation Guide to ICF Translation for Global Clinical Trials",
    href: "https://www.sesen.com/resources/white-papers-ebooks/informed-consent-form-translation-guide/",
    text: "A deeper guide to planning and managing informed consent translation across languages, countries, review workflows, and amendment cycles.",
  },
  {
    type: "Clinical & Regulatory Knowledge",
    title: "Preparing Multilingual Materials for IRB and Ethics Committee Review",
    href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/preparing-irb-and-ethics-committee-materials-for-translation/",
    text: "Source preparation, translation documentation, locale planning, participant readability, and multilingual version control for ethics review.",
  },
];

const faqs = [
  {
    q: "What is informed consent form translation?",
    a: "Informed consent form translation is the translation of clinical trial consent documentation into languages participants can use to review study information and take part in the applicable consent process. It requires careful preservation of study procedures, potential risks and benefits, participant rights, privacy information, medical terminology, and other source content while producing clear, natural target-language communication.",
  },
  {
    q: "When are translated informed consent forms needed?",
    a: "Translated consent materials may be needed when a clinical study includes participants who require study information in another language or when the applicable sponsor, institution, IRB, ethics committee, site, or local study process calls for translated participant documentation. Requirements can vary by study, institution, market, participant population, and review pathway.",
  },
  {
    q: "Who translates Sesen informed consent forms?",
    a: "Sesen assigns qualified native-language linguists with relevant life sciences, medical, or clinical research expertise based on the language pair and project requirements. ICF workflows can also include independent linguistic review, document QA, terminology management, reviewer coordination, and final human quality control.",
  },
  {
    q: "Does every ICF require back translation?",
    a: "No. Back translation is an additional verification method rather than an automatic requirement for every informed consent translation. It may be requested by a sponsor, CRO, institution, IRB, ethics committee, local requirement, or study quality process.",
  },
  {
    q: "Is linguistic validation required for informed consent forms?",
    a: "Formal linguistic validation is generally associated with instruments such as clinical outcome assessments, patient-reported outcome measures, eCOAs, and ePROs where cross-language conceptual equivalence may need to be demonstrated through a defined validation methodology. ICF translation typically focuses on accurate translation, participant-appropriate readability, linguistic review, terminology consistency, document control, and the verification steps required by the specific study or review process.",
  },
  {
    q: "How does Sesen handle ICF amendments?",
    a: "Sesen can compare the updated source against the previous version, identify affected content, update the relevant language versions, reuse approved terminology and translation memory where appropriate, perform linguistic and document QA, and coordinate reviewer feedback.",
  },
  {
    q: "Can Sesen incorporate IRB, ethics committee, site, or in-country reviewer comments?",
    a: "Yes. Sesen can coordinate authorized multilingual reviewer feedback and help reconcile comments against the source, existing approved translations, and study terminology. Approved terminology and language decisions can then be incorporated into project linguistic assets for future versions.",
  },
  {
    q: "Can Sesen translate assent forms and eConsent materials?",
    a: "Yes. Sesen supports assent forms, re-consent materials, patient information sheets, privacy and authorization content, caregiver or legally authorized representative materials, and eConsent interfaces and supporting content.",
  },
  {
    q: "How does Sesen maintain consistency between the ICF and other study documents?",
    a: "Sesen can use protocols, sponsor glossaries, previous approved translations, study-specific terminology, translation memories, style guidance, and reviewer feedback as reference materials. Key concepts can then be managed consistently across the ICF and related participant-facing or clinical trial documentation.",
  },
  {
    q: "How many languages does Sesen support for informed consent translation?",
    a: "Sesen supports informed consent form translation across 150+ languages, including country- and region-specific language variants where appropriate for the study and participant population.",
  },
  {
    q: "How quickly can Sesen translate an informed consent form?",
    a: "Timelines depend on source length and complexity, language count and locales, file format, required review methodology, back translation or other verification requirements, formatting needs, reviewer cycles, and the study schedule. For multilingual study startup or time-sensitive amendments, Sesen can evaluate parallel production and priority workflows based on the required delivery sequence.",
  },
];

function ArrowIcon() {
  return (
    <svg className="sesen-icf-icon-inline" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 12.4 10.3 15.5 17.2 8.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MeaningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h8.5L19 8v11.5H7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15.5 4.5V8H19M10 12h6M10 15h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ParticipantIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.8 19c.8-4 3-6 6.2-6s5.4 2 6.2 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4.5h9l3 3V19.5H6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M15 4.5v3h3M9 13l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <svg
      className="sesen-icf-hero-art"
      viewBox="0 0 560 440"
      role="img"
      aria-label="Illustration of a multilingual informed consent document moving through participant and review stages"
    >
      <defs>
        <linearGradient id="docFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F7FF" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="220" r="183" fill="#F5F7FF" />
      <circle cx="280" cy="220" r="144" fill="none" stroke="#E1E8F7" strokeWidth="2" strokeDasharray="7 10" />

      <g transform="translate(175 68)">
        <rect x="0" y="0" width="210" height="282" rx="24" fill="url(#docFill)" stroke="#DDE4F2" strokeWidth="2" />
        <rect x="30" y="34" width="92" height="10" rx="5" fill="#3659BB" opacity="0.9" />
        <rect x="30" y="60" width="148" height="7" rx="3.5" fill="#CBD5E7" />
        <rect x="30" y="79" width="132" height="7" rx="3.5" fill="#D9E0ED" />
        <rect x="30" y="111" width="150" height="7" rx="3.5" fill="#CBD5E7" />
        <rect x="30" y="130" width="118" height="7" rx="3.5" fill="#D9E0ED" />
        <rect x="30" y="149" width="141" height="7" rx="3.5" fill="#D9E0ED" />
        <rect x="30" y="182" width="58" height="58" rx="15" fill="#EAF0FF" />
        <path d="M47 212l12 11 18-24" fill="none" stroke="#4B6FD8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="105" y="190" width="76" height="7" rx="3.5" fill="#CBD5E7" />
        <rect x="105" y="209" width="61" height="7" rx="3.5" fill="#D9E0ED" />
        <rect x="105" y="228" width="70" height="7" rx="3.5" fill="#D9E0ED" />
      </g>

      <g transform="translate(62 150)">
        <circle cx="49" cy="49" r="47" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="49" cy="37" r="13" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2" />
        <path d="M26 77c4-16 14-24 23-24s19 8 23 24" fill="#F5F7FF" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(422 116)">
        <circle cx="44" cy="44" r="42" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M22 44h44M44 22c11 12 11 32 0 44M44 22c-11 12-11 32 0 44M28 29c10 7 22 7 32 0M28 59c10-7 22-7 32 0" fill="none" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g transform="translate(405 275)">
        <circle cx="48" cy="48" r="46" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M26 50l12 12 26-29" fill="none" stroke="#3659BB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 28h21" stroke="#B8C4DA" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 75h45" stroke="#D0D8E7" strokeWidth="3" strokeLinecap="round" />
      </g>

      <path d="M159 198c25-9 35-11 50-12" fill="none" stroke="#6F8BE1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M386 156c14-3 25-2 37 2" fill="none" stroke="#6F8BE1" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M384 302c13 5 22 9 28 14" fill="none" stroke="#6F8BE1" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="159" cy="198" r="4" fill="#4B6FD8" />
      <circle cx="423" cy="158" r="4" fill="#4B6FD8" />
      <circle cx="412" cy="316" r="4" fill="#4B6FD8" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, children, align = "center", className = "" }) {
  return (
    <div className={`sesen-icf-section-intro sesen-icf-section-intro--${align} ${className}`}>
      {eyebrow ? <div className="sesen-icf-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {children ? <div className="sesen-icf-section-lead">{children}</div> : null}
    </div>
  );
}

function FAQItem({ item, index, open, onToggle }) {
  const buttonId = `sesen-icf-faq-button-${index}`;
  const panelId = `sesen-icf-faq-panel-${index}`;
  return (
    <div className={`sesen-icf-faq-item ${open ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="sesen-icf-faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="sesen-icf-faq-control" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        className="sesen-icf-faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function SesenInformedConsentFormTranslationServices() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-icf-page">
      <style>{`
        .sesen-icf-page {
          --sesen-blue: ${COLORS.blue};
          --sesen-blue-dark: ${COLORS.blueDark};
          --sesen-blue-deep: ${COLORS.blueDeep};
          --sesen-blue-mid: ${COLORS.blueMid};
          --sesen-blue-soft: ${COLORS.blueSoft};
          --sesen-blue-pale: ${COLORS.bluePale};
          --sesen-navy: ${COLORS.navy};
          --sesen-ink: ${COLORS.ink};
          --sesen-body: ${COLORS.body};
          --sesen-muted: ${COLORS.muted};
          --sesen-border: ${COLORS.border};
          --sesen-divider: ${COLORS.divider};
          --sesen-soft: ${COLORS.soft};
          --sesen-white: ${COLORS.white};
          --sesen-blue-light: ${COLORS.blueLight};
          color: var(--sesen-body);
          background: var(--sesen-white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          overflow-x: clip;
        }

        .sesen-icf-page *,
        .sesen-icf-page *::before,
        .sesen-icf-page *::after {
          box-sizing: border-box;
        }

        .sesen-icf-page a {
          color: inherit;
        }

        .sesen-icf-page img,
        .sesen-icf-page svg {
          display: block;
          max-width: 100%;
        }

        .sesen-icf-page h1,
        .sesen-icf-page h2,
        .sesen-icf-page h3,
        .sesen-icf-page p {
          margin-top: 0;
        }

        .sesen-icf-page h1,
        .sesen-icf-page h2,
        .sesen-icf-page h3 {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          color: var(--sesen-navy);
        }

        .sesen-icf-container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .sesen-icf-section {
          padding: 96px 0;
        }

        .sesen-icf-section--compact {
          padding: 80px 0;
        }

        .sesen-icf-section--soft {
          background: var(--sesen-soft);
        }

        .sesen-icf-section--pale {
          background: var(--sesen-blue-pale);
        }

        .sesen-icf-eyebrow {
          margin-bottom: 13px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sesen-icf-section-intro {
          margin-bottom: 52px;
        }

        .sesen-icf-section-intro--center {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-icf-section-intro--left {
          max-width: 820px;
          text-align: left;
        }

        .sesen-icf-section-intro h2 {
          margin-bottom: 18px;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .sesen-icf-section-lead,
        .sesen-icf-section-lead p {
          margin-bottom: 0;
          color: var(--sesen-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-icf-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--sesen-blue-dark) !important;
          font-weight: 650;
          text-decoration: none;
          transition: color 160ms ease, gap 160ms ease;
        }

        .sesen-icf-link:hover {
          color: var(--sesen-blue-deep) !important;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-icf-link:focus-visible,
        .sesen-icf-button:focus-visible,
        .sesen-icf-faq-question:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.3);
          outline-offset: 4px;
        }

        .sesen-icf-icon-inline {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
        }

        /* Hero */
        .sesen-icf-hero {
          padding: 94px 0 88px;
          background:
            radial-gradient(circle at 88% 14%, rgba(234, 240, 255, 0.9), transparent 30%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 72%, #FBFCFF 100%);
        }

        .sesen-icf-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(400px, 0.92fr);
          gap: 64px;
          align-items: center;
        }

        .sesen-icf-hero-copy {
          max-width: 720px;
        }

        .sesen-icf-hero h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-icf-hero-lead {
          margin-bottom: 17px;
          max-width: 700px;
          color: #293954;
          font-size: 20px;
          line-height: 1.65;
        }

        .sesen-icf-hero-support {
          margin-bottom: 31px;
          max-width: 700px;
          color: var(--sesen-body);
          font-size: 17px;
          line-height: 1.74;
        }

        .sesen-icf-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .sesen-icf-button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .sesen-icf-button:hover {
          transform: translateY(-1px);
        }

        .sesen-icf-button--primary {
          background: var(--sesen-blue);
          color: #FFFFFF !important;
        }

        .sesen-icf-button--primary:hover {
          background: var(--sesen-blue-dark);
          color: #FFFFFF !important;
        }

        .sesen-icf-button--secondary {
          background: #FFFFFF;
          color: var(--sesen-ink) !important;
          border-color: #C9D3E5;
        }

        .sesen-icf-button--secondary:hover {
          background: var(--sesen-blue-soft);
          border-color: #AEBDE0;
          color: var(--sesen-ink) !important;
        }

        .sesen-icf-hero-visual {
          position: relative;
          display: flex;
          justify-content: flex-end;
        }

        .sesen-icf-hero-art {
          width: min(100%, 540px);
          filter: drop-shadow(0 24px 40px rgba(23, 38, 77, 0.05));
        }

        /* Trust band */
        .sesen-icf-trust {
          border-top: 1px solid var(--sesen-divider);
          border-bottom: 1px solid var(--sesen-divider);
          background: #FFFFFF;
        }

        .sesen-icf-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .sesen-icf-trust-item {
          min-height: 84px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 20px 22px;
          color: var(--sesen-navy);
          font-size: 14px;
          line-height: 1.45;
          font-weight: 650;
        }

        .sesen-icf-trust-item + .sesen-icf-trust-item {
          border-left: 1px solid var(--sesen-divider);
        }

        .sesen-icf-trust-check {
          width: 25px;
          height: 25px;
          flex: 0 0 25px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--sesen-blue-soft);
          color: var(--sesen-blue-dark);
        }

        .sesen-icf-trust-check svg {
          width: 18px;
          height: 18px;
        }

        /* Challenge */
        .sesen-icf-challenge-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
          gap: 76px;
          align-items: start;
        }

        .sesen-icf-challenge-sticky {
          position: sticky;
          top: 36px;
        }

        .sesen-icf-challenge-sticky h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.3;
        }

        .sesen-icf-challenge-sticky p {
          max-width: 510px;
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-icf-challenge-points {
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-challenge-row {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 20px;
          padding: 30px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-challenge-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--sesen-blue-soft);
          color: var(--sesen-blue-dark);
        }

        .sesen-icf-challenge-icon svg {
          width: 24px;
          height: 24px;
        }

        .sesen-icf-challenge-row h3 {
          margin-bottom: 8px;
          font-size: 24px;
          line-height: 1.3;
        }

        .sesen-icf-challenge-row p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.72;
        }

        /* Materials */
        .sesen-icf-editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-editorial-item {
          padding: 28px 28px 30px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-editorial-item:nth-child(even) {
          padding-left: 34px;
          border-left: 1px solid var(--sesen-divider);
        }

        .sesen-icf-editorial-item h3 {
          margin-bottom: 9px;
          font-size: 22px;
          line-height: 1.32;
        }

        .sesen-icf-editorial-item p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-icf-section-footer-link {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 28px;
        }

        /* Workflow */
        .sesen-icf-workflow-shell {
          position: relative;
        }

        .sesen-icf-workflow-line {
          position: absolute;
          left: 5.5%;
          right: 5.5%;
          top: 34px;
          height: 1px;
          background: #C9D4EA;
        }

        .sesen-icf-workflow-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
        }

        .sesen-icf-workflow-step {
          position: relative;
          padding-top: 0;
        }

        .sesen-icf-step-number {
          position: relative;
          z-index: 2;
          width: 68px;
          height: 68px;
          margin-bottom: 22px;
          display: grid;
          place-items: center;
          border: 1px solid #C9D4EA;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--sesen-blue-dark);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .sesen-icf-workflow-step h3 {
          margin-bottom: 9px;
          font-size: 19px;
          line-height: 1.35;
        }

        .sesen-icf-workflow-step p {
          margin-bottom: 0;
          color: var(--sesen-body);
          font-size: 16px;
          line-height: 1.66;
        }

        /* Readability */
        .sesen-icf-readability-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
          gap: 70px;
          align-items: start;
        }

        .sesen-icf-readability-copy h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.3;
        }

        .sesen-icf-readability-copy > p {
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-icf-note {
          margin-top: 30px;
          padding: 23px 24px;
          border: 1px solid #CCD8EF;
          border-radius: 20px;
          background: #FFFFFF;
        }

        .sesen-icf-note strong {
          display: block;
          margin-bottom: 6px;
          color: var(--sesen-navy);
          font-weight: 700;
        }

        .sesen-icf-note p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.68;
        }

        .sesen-icf-note .sesen-icf-note-secondary {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-readability-list {
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-readability-item {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 16px;
          padding: 23px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-readability-mark {
          width: 22px;
          height: 22px;
          margin-top: 3px;
          border-radius: 50%;
          background: var(--sesen-blue-soft);
          color: var(--sesen-blue-dark);
          display: grid;
          place-items: center;
        }

        .sesen-icf-readability-mark svg {
          width: 16px;
          height: 16px;
        }

        .sesen-icf-readability-item h3 {
          margin-bottom: 7px;
          font-size: 20px;
          line-height: 1.34;
        }

        .sesen-icf-readability-item p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.68;
        }

        /* Study control signature */
        .sesen-icf-control-section {
          position: relative;
          overflow: hidden;
          background: var(--sesen-navy);
          color: #E8EEFA;
        }

        .sesen-icf-control-section::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          right: -240px;
          top: -240px;
          border-radius: 50%;
          border: 1px solid rgba(200, 214, 255, 0.12);
          box-shadow:
            0 0 0 90px rgba(200, 214, 255, 0.025),
            0 0 0 180px rgba(200, 214, 255, 0.018);
          pointer-events: none;
        }

        .sesen-icf-control-section .sesen-icf-eyebrow {
          color: var(--sesen-blue-light);
        }

        .sesen-icf-control-section .sesen-icf-section-intro h2 {
          color: #FFFFFF;
        }

        .sesen-icf-control-section .sesen-icf-section-lead,
        .sesen-icf-control-section .sesen-icf-section-lead p {
          color: #D7E0F3;
        }

        .sesen-icf-control-diagram {
          position: relative;
          z-index: 1;
          padding: 30px;
          border: 1px solid rgba(200, 214, 255, 0.18);
          border-radius: 28px;
          background: rgba(255,255,255,0.045);
        }

        .sesen-icf-control-flow {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }

        .sesen-icf-control-stage {
          position: relative;
          min-height: 185px;
          padding: 20px 18px;
          border: 1px solid rgba(200, 214, 255, 0.18);
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
        }

        .sesen-icf-control-stage:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          color: #9FB4EA;
          font-size: 18px;
          text-align: center;
        }

        .sesen-icf-control-stage-label {
          margin-bottom: 13px;
          color: var(--sesen-blue-light);
          font-size: 10px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .sesen-icf-control-stage h3 {
          margin-bottom: 11px;
          color: #FFFFFF;
          font-size: 19px;
          line-height: 1.34;
        }

        .sesen-icf-control-stage p {
          margin-bottom: 0;
          color: #D7E0F3;
          font-size: 15px;
          line-height: 1.62;
        }

        .sesen-icf-control-support {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 34px;
          border-top: 1px solid rgba(200, 214, 255, 0.18);
        }

        .sesen-icf-control-support-item {
          padding: 24px 20px 0 0;
        }

        .sesen-icf-control-support-item + .sesen-icf-control-support-item {
          padding-left: 20px;
          border-left: 1px solid rgba(200, 214, 255, 0.16);
        }

        .sesen-icf-control-support-item h3 {
          margin-bottom: 8px;
          color: #FFFFFF;
          font-size: 18px;
          line-height: 1.35;
        }

        .sesen-icf-control-support-item p {
          margin-bottom: 0;
          color: #CAD5EC;
          font-size: 15px;
          line-height: 1.64;
        }

        /* Human + technology */
        .sesen-icf-human-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }

        .sesen-icf-human-panel {
          padding: 34px 34px 36px;
          border: 1px solid var(--sesen-border);
          border-radius: 26px;
          background: #FFFFFF;
        }

        .sesen-icf-human-panel--technology {
          background: var(--sesen-blue-pale);
        }

        .sesen-icf-panel-label {
          margin-bottom: 13px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sesen-icf-human-panel h3 {
          margin-bottom: 18px;
          font-size: 27px;
          line-height: 1.3;
        }

        .sesen-icf-bullet-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sesen-icf-bullet-list li {
          position: relative;
          padding-left: 24px;
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-icf-bullet-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.68em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sesen-blue);
        }

        .sesen-icf-human-statement {
          margin-top: 25px;
          padding: 17px 20px;
          border-left: 2px solid var(--sesen-blue);
          background: var(--sesen-soft);
          color: var(--sesen-navy);
          font-weight: 650;
        }

        /* Timeline support */
        .sesen-icf-timeline-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 34px;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-timeline-item {
          padding: 25px 0 27px;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-timeline-item h3 {
          margin-bottom: 8px;
          font-size: 21px;
          line-height: 1.34;
        }

        .sesen-icf-timeline-item p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.68;
        }

        .sesen-icf-timeline-note {
          max-width: 900px;
          margin: 34px auto 0;
          text-align: center;
          color: var(--sesen-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-icf-mini-cta {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }

        /* Languages */
        .sesen-icf-language-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 70px;
          align-items: center;
        }

        .sesen-icf-language-copy h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.3;
        }

        .sesen-icf-language-copy p {
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-icf-language-visual {
          padding: 34px;
          border: 1px solid var(--sesen-border);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .sesen-icf-language-metric {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-language-number {
          color: var(--sesen-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 58px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: -1px;
        }

        .sesen-icf-language-label {
          max-width: 330px;
          color: var(--sesen-navy);
          font-size: 16px;
          line-height: 1.5;
          font-weight: 650;
        }

        .sesen-icf-language-regions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px 26px;
          margin-top: 24px;
        }

        .sesen-icf-language-regions span {
          padding-left: 18px;
          position: relative;
          color: var(--sesen-body);
          font-size: 15px;
        }

        .sesen-icf-language-regions span::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.68em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sesen-blue);
        }

        /* Related services */
        .sesen-icf-related-list {
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-related-row {
          display: grid;
          grid-template-columns: minmax(230px, 0.75fr) minmax(0, 1.25fr) auto;
          gap: 34px;
          align-items: center;
          padding: 25px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-related-row h3 {
          margin-bottom: 0;
          font-size: 21px;
          line-height: 1.35;
        }

        .sesen-icf-related-row p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.65;
        }

        /* Resources */
        .sesen-icf-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .sesen-icf-resource {
          min-height: 100%;
          padding: 28px 27px;
          border: 1px solid var(--sesen-border);
          border-radius: 22px;
          background: #FFFFFF;
        }

        .sesen-icf-resource-type {
          margin-bottom: 12px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sesen-icf-resource h3 {
          margin-bottom: 12px;
          font-size: 21px;
          line-height: 1.38;
        }

        .sesen-icf-resource p {
          margin-bottom: 17px;
          font-size: 16px;
          line-height: 1.66;
        }

        /* FAQ */
        .sesen-icf-faq-wrap {
          max-width: 920px;
          margin: 0 auto;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-icf-faq-item {
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-icf-faq-question {
          width: 100%;
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
        }

        .sesen-icf-faq-control {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border: 1px solid #CAD4E8;
          border-radius: 50%;
          color: var(--sesen-blue-dark);
          font-family: Inter, sans-serif;
          font-size: 22px;
          font-weight: 400;
        }

        .sesen-icf-faq-answer {
          padding: 0 58px 24px 0;
        }

        .sesen-icf-faq-answer p {
          margin-bottom: 0;
          color: var(--sesen-body);
          font-size: 16px;
          line-height: 1.75;
        }

        /* Final CTA */
        .sesen-icf-final {
          padding: 92px 0;
          background:
            radial-gradient(circle at 82% 30%, rgba(111, 139, 225, 0.25), transparent 29%),
            linear-gradient(135deg, #17264D 0%, #253F8F 100%);
        }

        .sesen-icf-final-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 54px;
          align-items: center;
        }

        .sesen-icf-final h2 {
          margin-bottom: 15px;
          max-width: 720px;
          color: #FFFFFF;
          font-size: 36px;
          line-height: 1.3;
        }

        .sesen-icf-final p {
          max-width: 760px;
          margin-bottom: 0;
          color: #DCE5F7;
          font-size: 17px;
          line-height: 1.72;
        }

        .sesen-icf-final-actions {
          min-width: 230px;
          display: grid;
          gap: 11px;
        }

        .sesen-icf-final .sesen-icf-button--secondary {
          background: #FFFFFF;
          color: var(--sesen-ink) !important;
          border-color: #FFFFFF;
        }

        .sesen-icf-final .sesen-icf-button--secondary:hover {
          background: var(--sesen-blue-soft);
          color: var(--sesen-ink) !important;
        }

        .sesen-icf-final-note {
          margin-top: 18px !important;
          color: #BFCBE5 !important;
          font-size: 14px !important;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .sesen-icf-container {
            padding-left: 30px;
            padding-right: 30px;
          }

          .sesen-icf-hero {
            padding-top: 84px;
          }

          .sesen-icf-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
            gap: 36px;
          }

          .sesen-icf-hero h1 {
            font-size: 44px;
          }

          .sesen-icf-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-icf-trust-item:nth-child(3) {
            border-left: 0;
            border-top: 1px solid var(--sesen-divider);
          }

          .sesen-icf-trust-item:nth-child(4) {
            border-top: 1px solid var(--sesen-divider);
          }

          .sesen-icf-challenge-grid,
          .sesen-icf-readability-grid,
          .sesen-icf-language-shell {
            gap: 44px;
          }

          .sesen-icf-workflow-line {
            display: none;
          }

          .sesen-icf-workflow-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 30px 24px;
          }

          .sesen-icf-step-number {
            width: 56px;
            height: 56px;
            margin-bottom: 17px;
          }

          .sesen-icf-control-flow {
            grid-template-columns: repeat(5, minmax(145px, 1fr));
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .sesen-icf-control-support {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sesen-icf-control-support-item:nth-child(4) {
            padding-left: 0;
            border-left: 0;
          }

          .sesen-icf-control-support-item:nth-child(n+4) {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(200, 214, 255, 0.16);
          }

          .sesen-icf-timeline-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-icf-resource-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mid-tablet: protect readable split layouts and sequence diagrams */
        @media (max-width: 900px) {
          .sesen-icf-hero-grid,
          .sesen-icf-challenge-grid,
          .sesen-icf-readability-grid,
          .sesen-icf-language-shell,
          .sesen-icf-final-grid {
            grid-template-columns: 1fr;
          }

          .sesen-icf-hero-grid {
            gap: 42px;
          }

          .sesen-icf-hero-copy {
            max-width: 760px;
          }

          .sesen-icf-hero-visual {
            justify-content: center;
          }

          .sesen-icf-hero-art {
            width: min(76%, 500px);
          }

          .sesen-icf-challenge-grid,
          .sesen-icf-readability-grid,
          .sesen-icf-language-shell {
            gap: 36px;
          }

          .sesen-icf-challenge-sticky {
            position: static;
          }

          .sesen-icf-workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 30px 26px;
          }

          .sesen-icf-control-flow {
            grid-template-columns: 1fr;
            overflow: visible;
          }

          .sesen-icf-control-stage {
            min-height: 0;
          }

          .sesen-icf-control-stage:not(:last-child)::after {
            content: "↓";
            left: 50%;
            right: auto;
            top: auto;
            bottom: -19px;
            transform: translateX(-50%);
          }

          .sesen-icf-control-support {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-icf-control-support-item:nth-child(3),
          .sesen-icf-control-support-item:nth-child(5) {
            padding-left: 0;
            border-left: 0;
          }

          .sesen-icf-control-support-item:nth-child(4) {
            padding-left: 20px;
            border-left: 1px solid rgba(200, 214, 255, 0.16);
          }

          .sesen-icf-control-support-item:nth-child(n+3) {
            margin-top: 18px;
            padding-top: 20px;
            border-top: 1px solid rgba(200, 214, 255, 0.16);
          }

          .sesen-icf-related-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sesen-icf-related-row .sesen-icf-link {
            margin-top: 5px;
          }

          .sesen-icf-final-grid {
            gap: 30px;
          }

          .sesen-icf-final-actions {
            min-width: 0;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .sesen-icf-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .sesen-icf-section,
          .sesen-icf-section--compact {
            padding: 68px 0;
          }

          .sesen-icf-section-intro {
            margin-bottom: 38px;
          }

          .sesen-icf-section-intro h2,
          .sesen-icf-challenge-sticky h2,
          .sesen-icf-readability-copy h2,
          .sesen-icf-language-copy h2,
          .sesen-icf-final h2 {
            font-size: 32px;
          }

          /* v1.2: center standalone section heading groups on mobile */
          .sesen-icf-section-intro--center {
            text-align: center;
          }

          .sesen-icf-section-intro--center .sesen-icf-section-lead {
            text-align: left;
          }

          .sesen-icf-hero {
            padding: 70px 0 64px;
          }

          .sesen-icf-hero-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .sesen-icf-hero-copy {
            max-width: none;
          }

          .sesen-icf-hero h1 {
            font-size: 42px;
          }

          .sesen-icf-hero-lead {
            font-size: 18px;
          }

          .sesen-icf-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .sesen-icf-button {
            width: 100%;
            min-height: 50px;
          }

          .sesen-icf-hero-visual {
            justify-content: center;
          }

          .sesen-icf-hero-art {
            width: min(100%, 470px);
          }

          .sesen-icf-trust-grid {
            grid-template-columns: 1fr;
          }

          .sesen-icf-trust-item,
          .sesen-icf-trust-item:nth-child(3),
          .sesen-icf-trust-item:nth-child(4) {
            min-height: 68px;
            padding: 16px 0;
            border-left: 0;
            border-top: 1px solid var(--sesen-divider);
          }

          .sesen-icf-trust-item:first-child {
            border-top: 0;
          }

          .sesen-icf-challenge-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .sesen-icf-challenge-sticky {
            position: static;
            text-align: center;
          }

          .sesen-icf-challenge-sticky p {
            text-align: left;
          }

          .sesen-icf-challenge-row {
            grid-template-columns: 48px 1fr;
            gap: 16px;
            padding: 24px 0;
          }

          .sesen-icf-challenge-icon {
            width: 42px;
            height: 42px;
          }

          .sesen-icf-editorial-grid {
            grid-template-columns: 1fr;
          }

          .sesen-icf-editorial-item,
          .sesen-icf-editorial-item:nth-child(even) {
            padding: 24px 0 26px;
            border-left: 0;
          }

          .sesen-icf-section-footer-link {
            flex-direction: column;
            align-items: flex-start;
            gap: 11px;
          }

          /* Workflow remains left-aligned because sequence scanning matters */
          .sesen-icf-workflow-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding-left: 0;
          }

          .sesen-icf-workflow-step {
            display: grid;
            grid-template-columns: 56px minmax(0, 1fr);
            column-gap: 18px;
            padding: 0 0 30px;
          }

          .sesen-icf-workflow-step:not(:last-child)::before {
            content: "";
            position: absolute;
            left: 27px;
            top: 56px;
            bottom: 0;
            width: 1px;
            background: #CAD4E8;
          }

          .sesen-icf-step-number {
            width: 56px;
            height: 56px;
            margin: 0;
            grid-row: 1 / span 2;
          }

          .sesen-icf-workflow-step h3 {
            margin-top: 3px;
            font-size: 20px;
          }

          .sesen-icf-workflow-step p {
            grid-column: 2;
          }

          .sesen-icf-readability-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .sesen-icf-readability-copy {
            text-align: center;
          }

          .sesen-icf-readability-copy > p,
          .sesen-icf-note,
          .sesen-icf-note p {
            text-align: left;
          }

          .sesen-icf-control-diagram {
            padding: 22px;
          }

          /* Technical sequence stays left-aligned on mobile */
          .sesen-icf-control-flow {
            grid-template-columns: 1fr;
            overflow: visible;
          }

          .sesen-icf-control-stage {
            min-height: 0;
          }

          .sesen-icf-control-stage:not(:last-child)::after {
            content: "↓";
            left: 50%;
            right: auto;
            top: auto;
            bottom: -19px;
            transform: translateX(-50%);
          }

          .sesen-icf-control-support {
            grid-template-columns: 1fr;
          }

          .sesen-icf-control-support-item,
          .sesen-icf-control-support-item + .sesen-icf-control-support-item,
          .sesen-icf-control-support-item:nth-child(4),
          .sesen-icf-control-support-item:nth-child(n+4) {
            margin: 0;
            padding: 21px 0;
            border-left: 0;
            border-top: 1px solid rgba(200, 214, 255, 0.16);
          }

          .sesen-icf-human-grid {
            grid-template-columns: 1fr;
          }

          .sesen-icf-human-panel {
            padding: 28px 24px 30px;
          }

          .sesen-icf-timeline-list {
            grid-template-columns: 1fr;
          }

          .sesen-icf-timeline-note {
            text-align: left;
          }

          .sesen-icf-mini-cta {
            display: block;
          }

          .sesen-icf-language-shell {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .sesen-icf-language-copy {
            text-align: center;
          }

          .sesen-icf-language-copy p {
            text-align: left;
          }

          .sesen-icf-language-visual {
            padding: 27px 24px;
          }

          .sesen-icf-language-number {
            font-size: 52px;
          }

          .sesen-icf-related-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 23px 0;
          }

          .sesen-icf-related-row .sesen-icf-link {
            margin-top: 6px;
          }

          .sesen-icf-resource-grid {
            grid-template-columns: 1fr;
          }

          .sesen-icf-faq-wrap {
            max-width: none;
          }

          .sesen-icf-faq-question {
            min-height: 70px;
            font-size: 19px;
          }

          .sesen-icf-faq-answer {
            padding-right: 0;
          }

          .sesen-icf-final {
            padding: 72px 0;
          }

          .sesen-icf-final-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .sesen-icf-final h2 {
            text-align: center;
          }

          .sesen-icf-final p {
            text-align: left;
          }

          .sesen-icf-final-actions {
            min-width: 0;
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .sesen-icf-language-metric {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 360px) {
          .sesen-icf-hero h1 {
            font-size: 38px;
          }

          .sesen-icf-section-intro h2,
          .sesen-icf-challenge-sticky h2,
          .sesen-icf-readability-copy h2,
          .sesen-icf-language-copy h2,
          .sesen-icf-final h2 {
            font-size: 30px;
          }

          .sesen-icf-language-regions {
            grid-template-columns: 1fr;
          }

          .sesen-icf-language-number {
            font-size: 46px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-icf-page *,
          .sesen-icf-page *::before,
          .sesen-icf-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="sesen-icf-hero" aria-labelledby="sesen-icf-page-title">
        <div className="sesen-icf-container">
          <div className="sesen-icf-hero-grid">
            <div className="sesen-icf-hero-copy">
              <div className="sesen-icf-eyebrow">Clinical Trial Translation</div>
              <h1 id="sesen-icf-page-title">Informed Consent Form Translation Services for Global Clinical Trials</h1>
              <p className="sesen-icf-hero-lead">
                Support clear participant communication with informed consent form translation designed for multinational clinical research.
              </p>
              <p className="sesen-icf-hero-support">
                Sesen helps pharmaceutical, biotechnology, medical device, and CRO teams translate informed consent forms and related participant materials with careful attention to clinical meaning, patient readability, study terminology, reviewer feedback, and version control.
              </p>
              <div className="sesen-icf-actions">
                <a className="sesen-icf-button sesen-icf-button--primary" href="https://www.sesen.com/contact-sales/">
                  Talk With Team Sesen <ArrowIcon />
                </a>
                <a className="sesen-icf-button sesen-icf-button--secondary" href="https://www.sesen.com/get-a-quote/">
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="sesen-icf-hero-visual">
              <HeroArtwork />
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-icf-trust" aria-label="Sesen informed consent translation proof points">
        <div className="sesen-icf-container">
          <div className="sesen-icf-trust-grid">
            {trustItems.map((item) => (
              <div className="sesen-icf-trust-item" key={item}>
                <span className="sesen-icf-trust-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-icf-section">
        <div className="sesen-icf-container">
          <div className="sesen-icf-challenge-grid">
            <div className="sesen-icf-challenge-sticky">
              <h2>Consent Translation Has to Work for the Study—and for the Participant</h2>
              <p>
                An informed consent form is both an essential clinical trial document and a direct communication with prospective participants. Translation must preserve the meaning of the approved source while communicating naturally and clearly to the intended participant population.
              </p>
            </div>
            <div className="sesen-icf-challenge-points">
              <div className="sesen-icf-challenge-row">
                <div className="sesen-icf-challenge-icon" aria-hidden="true"><MeaningIcon /></div>
                <div>
                  <h3>Preserve Clinical Meaning</h3>
                  <p>Risk descriptions, procedures, investigational treatments, visit schedules, medical terminology, randomization, participant responsibilities, and other study concepts need to retain the intent and distinctions established in the source ICF.</p>
                </div>
              </div>
              <div className="sesen-icf-challenge-row">
                <div className="sesen-icf-challenge-icon" aria-hidden="true"><ParticipantIcon /></div>
                <div>
                  <h3>Support Participant Understanding</h3>
                  <p>Clinical accuracy should not result in unnecessarily technical or unnatural language. Readability, sentence structure, terminology, local language conventions, and the intended audience all matter.</p>
                </div>
              </div>
              <div className="sesen-icf-challenge-row">
                <div className="sesen-icf-challenge-icon" aria-hidden="true"><ReviewIcon /></div>
                <div>
                  <h3>Prepare for Multilingual Review</h3>
                  <p>Translated consent materials may move through sponsors, CROs, clinical sites, investigators, IRBs, ethics committees, legal or medical reviewers, and in-country teams. A controlled process helps keep comments, terminology decisions, and document versions organized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-section--soft">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Informed Consent and Related Participant Materials"
            align="left"
          >
            <p>
              Global consent workflows often involve more than a single master ICF. Sesen supports informed consent forms and related participant-facing materials that need to remain linguistically and operationally aligned throughout a clinical study.
            </p>
          </SectionIntro>

          <div className="sesen-icf-editorial-grid">
            {participantMaterials.map((item) => (
              <article className="sesen-icf-editorial-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sesen-icf-section-footer-link">
            <a className="sesen-icf-link" href="https://www.sesen.com/clinical-trial-translation-services/">
              Explore Clinical Trial Translation Services <ArrowIcon />
            </a>
            <a className="sesen-icf-link" href="https://www.sesen.com/econsent-translation-services/">
              Explore eConsent Translation Services <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section">
        <div className="sesen-icf-container">
          <SectionIntro
            title="A Controlled Workflow for Multilingual Informed Consent"
            align="left"
          >
            <p>
              Each study has its own language coverage, terminology, source-document history, review pathway, and delivery requirements. Sesen builds the ICF translation workflow around those study-specific needs while maintaining structured linguistic and quality controls.
            </p>
          </SectionIntro>

          <div className="sesen-icf-workflow-shell">
            <div className="sesen-icf-workflow-line" aria-hidden="true" />
            <div className="sesen-icf-workflow-grid">
              {workflow.map((step, index) => (
                <article className="sesen-icf-workflow-step" key={step.title}>
                  <div className="sesen-icf-step-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-section--pale">
        <div className="sesen-icf-container">
          <div className="sesen-icf-readability-grid">
            <div className="sesen-icf-readability-copy">
              <h2>Patient-Appropriate Language Without Changing the Meaning</h2>
              <p>
                ICFs frequently need to communicate sophisticated medical and clinical concepts to people who do not have a medical background. The goal is not to simplify important information away. It is to communicate the same information as clearly and naturally as the target language allows.
              </p>

              <div className="sesen-icf-note">
                <strong>Additional verification when the study requires it</strong>
                <p>
                  When requested by the sponsor, CRO, IRB, ethics committee, institution, or study quality plan, Sesen can incorporate independent <a className="sesen-icf-link" href="https://www.sesen.com/linguistic-validation-services/back-translation/">back translation</a>, reconciliation, in-country review, certificates of translation accuracy, or other defined QA steps.
                </p>
                <p className="sesen-icf-note-secondary">
                  When content is a COA, PRO, eCOA, or related clinical outcome instrument that requires formal validation, Sesen uses a separate <a className="sesen-icf-link" href="https://www.sesen.com/linguistic-validation-services/">linguistic validation workflow</a> rather than treating linguistic validation as a routine ICF translation step.
                </p>
              </div>
            </div>

            <div className="sesen-icf-readability-list">
              {readabilityItems.map((item) => (
                <article className="sesen-icf-readability-item" key={item.title}>
                  <span className="sesen-icf-readability-mark"><CheckIcon /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-control-section">
        <div className="sesen-icf-container">
          <SectionIntro
            eyebrow="Multilingual Study Control"
            title="Keep Every Consent Version Aligned as the Study Changes"
            align="left"
          >
            <p>
              The first translation is only one part of the ICF lifecycle. A multinational study may involve a master source ICF, country adaptations, site versions, multiple languages, reviewer feedback, protocol amendments, new safety information, and re-consent. Sesen treats these changes as a controlled multilingual content workflow.
            </p>
          </SectionIntro>

          <div className="sesen-icf-control-diagram">
            <div className="sesen-icf-control-flow">
              <article className="sesen-icf-control-stage">
                <div className="sesen-icf-control-stage-label">Approved Study Content</div>
                <h3>Source and Terminology</h3>
                <p>Protocol, master ICF, approved terminology, study references, and the approved source version.</p>
              </article>
              <article className="sesen-icf-control-stage">
                <div className="sesen-icf-control-stage-label">Multilingual Consent</div>
                <h3>Language Versions</h3>
                <p>Controlled target-language versions built from approved terminology and reusable study language assets.</p>
              </article>
              <article className="sesen-icf-control-stage">
                <div className="sesen-icf-control-stage-label">Review Environment</div>
                <h3>Review and Feedback</h3>
                <p>Sponsor, CRO, site, investigator, IRB or ethics committee, medical, legal, and in-country review.</p>
              </article>
              <article className="sesen-icf-control-stage">
                <div className="sesen-icf-control-stage-label">Change or Amendment</div>
                <h3>Identify What Changed</h3>
                <p>Analyze source changes and determine which content, documents, and language versions are affected.</p>
              </article>
              <article className="sesen-icf-control-stage">
                <div className="sesen-icf-control-stage-label">Controlled Update</div>
                <h3>Update and Finalize</h3>
                <p>Translation update, review, QA, reviewer reconciliation, and clearly controlled final versions.</p>
              </article>
            </div>
          </div>

          <div className="sesen-icf-control-support">
            {studyControls.map((item) => (
              <article className="sesen-icf-control-support-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-icf-section">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Human Expertise at the Center of ICF Quality"
          >
            <p>
              Informed consent is patient-facing clinical content. The final interpretation of meaning, readability, tone, and appropriateness requires professional judgment. Sesen combines expert human translation and review with controlled language technology so each can do the work it is best suited to perform.
            </p>
          </SectionIntro>

          <div className="sesen-icf-human-grid">
            <article className="sesen-icf-human-panel">
              <div className="sesen-icf-panel-label">Professional Expertise</div>
              <h3>Life Sciences Linguists and Human Review</h3>
              <ul className="sesen-icf-bullet-list">
                <li>Qualified native-language translators</li>
                <li>Clinical and medical subject-matter experience</li>
                <li>Independent bilingual review</li>
                <li>Terminology research and management</li>
                <li>Patient-facing language judgment</li>
                <li>Reviewer coordination and final human QA</li>
              </ul>
            </article>

            <article className="sesen-icf-human-panel sesen-icf-human-panel--technology">
              <div className="sesen-icf-panel-label">Technology-Enabled Quality Control</div>
              <h3>Tools That Help Reviewers Focus Attention</h3>
              <ul className="sesen-icf-bullet-list">
                <li>Terminology consistency checks</li>
                <li>Missing-content flags</li>
                <li>Number, date, and unit comparisons</li>
                <li>Repeated-text inconsistency detection</li>
                <li>Formatting and version-difference checks</li>
                <li>Cross-file consistency support</li>
              </ul>
            </article>
          </div>

          <div className="sesen-icf-human-statement">
            AI-assisted QA supports expert review. Final linguistic quality decisions remain under human oversight.
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-section--soft">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Support for Study Startup, Amendments, and Ongoing Consent Updates"
          >
            <p>
              Clinical study language needs do not always arrive on a predictable schedule. Sesen supports both planned multilingual study launches and the ongoing changes that arise as trials progress.
            </p>
          </SectionIntro>

          <div className="sesen-icf-timeline-list">
            {timelines.map((item) => (
              <article className="sesen-icf-timeline-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="sesen-icf-timeline-note">
            Project schedules are based on source length, number of languages, required locales, review methodology, file format, documentation requirements, and study timeline. Parallel language production and priority workflows can be coordinated when the study schedule requires them.
          </p>

          <div className="sesen-icf-mini-cta">
            <a className="sesen-icf-button sesen-icf-button--primary" href="https://www.sesen.com/contact-sales/">
              Talk With Team Sesen <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section">
        <div className="sesen-icf-container">
          <div className="sesen-icf-language-shell">
            <div className="sesen-icf-language-copy">
              <h2>Informed Consent Form Translation Across 150+ Languages</h2>
              <p>
                Sesen supports multilingual informed consent programs across major global research markets, including country- and region-specific language variants based on study requirements.
              </p>
              <p>
                Language planning can account for participant population, study requirements, language and locale, regional terminology, existing approved translations, sponsor terminology, and reviewer preferences supplied for the project.
              </p>
              <p>
                Centralized terminology, translation memory, reviewer feedback, and version control help multilingual programs stay aligned as countries and language coverage expand.
              </p>
            </div>

            <div className="sesen-icf-language-visual">
              <div className="sesen-icf-language-metric">
                <div className="sesen-icf-language-number">150+</div>
                <div className="sesen-icf-language-label">languages supported for global life sciences programs</div>
              </div>
              <div className="sesen-icf-language-regions" aria-label="Global language coverage regions">
                <span>Europe</span>
                <span>Asia-Pacific</span>
                <span>Latin America</span>
                <span>Middle East & Africa</span>
                <span>North America</span>
                <span>Country & regional variants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-section--soft">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Support Beyond the Consent Form"
            align="left"
          >
            <p>
              Informed consent sits within a larger clinical content ecosystem. Sesen helps study teams maintain consistency across patient-facing materials, clinical documentation, review content, and digital study experiences.
            </p>
          </SectionIntro>

          <div className="sesen-icf-related-list">
            {relatedServices.map((service) => (
              <article className="sesen-icf-related-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="sesen-icf-link" href={service.href}>
                  {service.linkLabel} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-icf-section">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Practical Guidance for Multilingual ICF Programs"
          >
            <p>
              Sesen's clinical and regulatory knowledge resources help sponsors, CROs, and study teams plan translation, review, and quality-control decisions before they become downstream study issues.
            </p>
          </SectionIntro>

          <div className="sesen-icf-resource-grid">
            {resources.map((resource) => (
              <article className="sesen-icf-resource" key={resource.title}>
                <div className="sesen-icf-resource-type">{resource.type}</div>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <a className="sesen-icf-link" href={resource.href}>
                  Explore Resource <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-icf-section sesen-icf-section--pale">
        <div className="sesen-icf-container">
          <SectionIntro
            title="Informed Consent Form Translation FAQs"
            align="left"
          >
            <p>
              Answers to common questions about multilingual informed consent translation, review, back translation, amendments, and global study support.
            </p>
          </SectionIntro>

          <div className="sesen-icf-faq-wrap">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-icf-final">
        <div className="sesen-icf-container">
          <div className="sesen-icf-final-grid">
            <div>
              <h2>Planning Multilingual Consent for a Clinical Study?</h2>
              <p>
                Whether you are preparing a new global study, adding countries and languages, coordinating reviewer feedback, or managing an ICF amendment, Sesen can help build a controlled multilingual workflow around your study requirements.
              </p>
              <p className="sesen-icf-final-note">
                Have final files and a defined language list? Request a quote. Planning a larger or recurring clinical program? Talk with Team Sesen.
              </p>
            </div>

            <div className="sesen-icf-final-actions">
              <a className="sesen-icf-button sesen-icf-button--primary" href="https://www.sesen.com/contact-sales/">
                Talk With Team Sesen <ArrowIcon />
              </a>
              <a className="sesen-icf-button sesen-icf-button--secondary" href="https://www.sesen.com/get-a-quote/">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
