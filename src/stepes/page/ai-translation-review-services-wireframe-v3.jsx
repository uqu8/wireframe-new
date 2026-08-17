import React from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  pinkLight: "#F2A7C6",
  ink: "#151515",
  text: "#353535",
  muted: "#6B6B6B",
  line: "#E6E3E5",
  soft: "#F7F6F7",
  dark: "#171417",
};

const icons = {
  check: (
    <><path d="m5 12 4 4L19 6" /></>
  ),
  shield: (
    <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>
  ),
  target: (
    <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>
  ),
  file: (
    <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>
  ),
  search: (
    <><circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/></>
  ),
  edit: (
    <><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/></>
  ),
  qa: (
    <><path d="M4 5h16M4 12h10M4 19h7"/><path d="m16 17 2 2 4-5"/></>
  ),
  globe: (
    <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>
  ),
  layers: (
    <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>
  ),
  scale: (
    <><path d="M12 3v18M5 6h14M6 6 3 12h6L6 6ZM18 6l-3 6h6l-3-6ZM8 21h8"/></>
  ),
  heart: (
    <><path d="M20 8c0 6-8 11-8 11S4 14 4 8a4 4 0 0 1 7-2.6A4 4 0 0 1 20 8Z"/><path d="M8 11h2l1-2 2 4 1-2h2"/></>
  ),
  code: (
    <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>
  ),
  gear: (
    <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.6a7 7 0 0 0-.7-1.7l1-1.8-2.1-2.1-1.8 1a7 7 0 0 0-1.7-.7L11 2H8l-.6 2a7 7 0 0 0-1.7.7l-1.8-1L1.8 5.8l1 1.8a7 7 0 0 0-.7 1.7L0 10v3l2 .6a7 7 0 0 0 .7 1.7l-1 1.8 2.1 2.1 1.8-1a7 7 0 0 0 1.7.7L8 22h3l.6-2a7 7 0 0 0 1.7-.7l1.8 1 2.1-2.1-1-1.8a7 7 0 0 0 .7-1.7l2.1-.7Z" transform="translate(2 0) scale(.9)"/></>
  ),
  chart: (
    <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>
  ),
  lock: (
    <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>
  ),
  arrow: (
    <><path d="M5 12h14M14 7l5 5-5 5"/></>
  ),
  briefcase: (
    <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>
  ),
  book: (
    <><path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2V5ZM20 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z"/></>
  ),
  message: (
    <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 13h5"/></>
  ),
};

function Icon({ name, size = 22 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons.check}
    </svg>
  );
}

const eyebrow = (text, dark = false) => <div className={`eyebrow${dark ? " eyebrowDark" : ""}`}>{text}</div>;

const reviewDimensions = [
  ["Accuracy", "Confirm that the translation communicates the source meaning without mistranslation or distortion."],
  ["Completeness", "Identify missing information, untranslated content, accidental additions, or improperly summarized passages."],
  ["Terminology", "Verify technical terms, product names, approved terminology, and glossary compliance."],
  ["Context", "Check whether words and expressions have been interpreted correctly within the document and business context."],
  ["Language Quality", "Correct grammar, syntax, spelling, punctuation, fluency, and natural expression."],
  ["Tone & Style", "Align language with the content type, audience, brand, and communication purpose."],
  ["Locale Fit", "Validate regional vocabulary, date formats, numbers, currencies, measurements, and local conventions."],
  ["Technical Integrity", "Check numbers, symbols, tags, variables, placeholders, references, and other non-linguistic elements."],
];

const workflow = [
  ["Submit Source + AI Translation", "Provide the original source, the existing AI-generated translation, and any terminology or reference materials."],
  ["Define Review Requirements", "Align review depth with subject matter, target audience, intended use, quality expectations, and business risk."],
  ["Expert Source-to-Target Review", "A qualified linguist compares source and target for meaning, completeness, terminology, context, language, and locale fit."],
  ["Correct and Validate", "Confirmed issues are corrected to the agreed scope, with specialist review and documented findings when appropriate."],
  ["Quality Assurance + Delivery", "Final checks verify corrections, terminology, formatting, file integrity, and requested review outputs before delivery."],
];

const errors = [
  ["Meaning Errors", "Fluent wording can still change relationships, qualifications, negation, or the intended meaning."],
  ["Missing Information", "Warnings, conditions, references, or other details can disappear without sounding obviously incomplete."],
  ["Unsupported Additions", "Generative systems may add plausible language that is not supported by the original source."],
  ["Terminology Errors", "A term can be linguistically plausible while being technically wrong for the product, industry, or context."],
  ["Contextual Errors", "Ambiguous source language may be interpreted incorrectly when the broader document context is missed."],
  ["Inconsistent Language", "The same source concept may be translated differently across pages, prompts, files, or releases."],
  ["Numbers & Units", "Dates, decimals, currencies, measurements, symbols, or quantities require deliberate verification."],
  ["Tone & Audience", "The translation may be accurate yet unsuitable for the users, brand voice, or communication setting."],
  ["Regional Language", "Vocabulary and conventions may reflect the wrong market or language variant."],
];

const industries = [
  ["heart", "Life Sciences & Healthcare", "Clinical, medical device, healthcare, pharmaceutical, patient-facing, scientific, and technical materials."],
  ["scale", "Legal & Compliance", "Contracts, policies, corporate documents, regulatory materials, legal correspondence, and litigation-related content."],
  ["chart", "Financial Services", "Financial reports, investor materials, banking communications, disclosures, insurance, and customer content."],
  ["gear", "Manufacturing & Automotive", "Technical manuals, engineering documentation, SOPs, service information, product documentation, and instructions."],
  ["code", "Software & Technology", "Software UI, apps, help content, knowledge bases, technical documentation, SaaS products, and release communications."],
  ["message", "Marketing & Customer Experience", "Websites, product content, campaigns, customer communications, eLearning, and digital experiences."],
];

const qualityMeasures = [
  ["Error Classification", "Group issues into practical categories such as accuracy, omission, addition, terminology, language, locale, and consistency."],
  ["Severity Assessment", "Differentiate minor issues from errors that materially affect meaning, usability, safety, compliance, or business impact."],
  ["Sampling", "Evaluate representative portions of large translation sets when reviewing every word is unnecessary for the decision at hand."],
  ["Quality Thresholds", "Apply project-specific acceptance criteria to determine whether AI output is suitable for a defined use case."],
  ["Comparative Evaluation", "Compare output from different models, prompts, engines, or workflows across agreed linguistic quality dimensions."],
  ["Recurring Error Analysis", "Identify patterns that can improve terminology, prompts, source preparation, model configuration, or future review instructions."],
];

const deliverables = [
  ["Clean Corrected Translation", "A reviewed version incorporating approved corrections and ready for downstream use."],
  ["Tracked Changes", "A visible record of what professional reviewers changed from the original AI output."],
  ["Reviewer Comments", "Contextual notes for selected issues, ambiguities, terminology decisions, or source-language concerns."],
  ["Error Findings", "Structured identification of translation issues for quality analysis, vendor feedback, or AI evaluation."],
  ["Terminology Feedback", "Identification of incorrect, inconsistent, or unapproved terminology to strengthen future linguistic resources."],
  ["Quality Evaluation", "A review configured around defined categories, severity levels, sampling rules, and acceptance criteria."],
];

const scenarios = [
  ["Your AI output sounds good—but you need confidence", "Professional bilingual review verifies source fidelity before the translation is published, submitted, deployed, or relied upon."],
  ["Your team used ChatGPT or another LLM", "Validate content created outside a traditional localization workflow before customer-facing, operational, or external use."],
  ["Your company is deploying an enterprise LLM", "Review representative output across languages and content types before expanding deployment."],
  ["Another provider delivered AI translations", "Obtain an independent source-to-target assessment before accepting, publishing, or deploying the content."],
  ["Employees use different AI tools", "Create a centralized professional review layer for content that exceeds defined business-risk thresholds."],
  ["You are comparing AI translation systems", "Evaluate outputs from different models, prompts, engines, or workflows using agreed linguistic criteria."],
];

const faqs = [
  ["What is AI translation review?", "AI translation review is the professional evaluation of an existing AI-generated translation against its original source content. A qualified linguist verifies whether the translation preserves the source meaning and meets agreed requirements for terminology, completeness, language quality, consistency, locale, and intended use. Depending on the project, the reviewer may correct the translation, document errors, provide comments, or perform a structured quality evaluation."],
  ["Can Stepes review translations generated by ChatGPT, Gemini, Claude, or DeepL?", "Yes. Stepes can review translations generated by general-purpose LLMs, commercial translation engines, enterprise AI systems, TMS platforms, custom language models, internal tools, and output supplied by other providers. For bilingual accuracy review, both the original source and corresponding translated content should normally be available."],
  ["Do I need to provide the original source content?", "For a true translation accuracy review, yes. Source text allows reviewers to detect mistranslations, omissions, additions, and contextual errors that target-language proofreading alone cannot reliably identify."],
  ["Can you review AI translations created by our internal systems?", "Yes. Stepes can review output from private LLMs, enterprise translation engines, internal AI applications, TMS integrations, and other client-controlled systems without requiring you to replace the technology that generated the translation."],
  ["What is the difference between AI translation review and MTPE?", "AI Translation Review is centered on validation: determining whether an existing AI translation is accurate, trustworthy, and appropriate for its intended use. Machine Translation Post-Editing is centered on production: systematically editing machine- or AI-generated output to reach an agreed final translation quality level."],
  ["What is the difference between AI translation review and AI Translation & Human Review?", "AI Translation Review begins with a translation that already exists. AI Translation & Human Review is the broader managed workflow in which Stepes can manage translation generation, professional review, terminology, QA, and final delivery."],
  ["Is AI translation review the same as proofreading?", "No. Proofreading generally focuses on target-language grammar, spelling, punctuation, style, and readability. AI translation review compares the target against the source and can identify mistranslations, omissions, additions, terminology errors, and other bilingual quality issues."],
  ["Can Stepes review legal, medical, financial, or technical AI translations?", "Yes. Stepes supports specialized review across life sciences, healthcare, legal, financial services, manufacturing, automotive, software, technology, and other technical domains. Reviewer qualifications and project controls can be aligned with the content and required quality level."],
  ["Can you provide tracked changes or reviewer comments?", "Yes, depending on file format and project requirements. Deliverables can include clean corrected translations, tracked changes, reviewer comments, terminology feedback, structured error findings, or other review documentation."],
  ["Can Stepes evaluate AI translation quality without correcting every error?", "Yes. When the objective is evaluation rather than production, Stepes can review representative content and document quality findings without necessarily performing full correction of every translated sentence."],
  ["Can you review only the highest-risk content?", "Yes. Review can be segmented based on intended use, visibility, subject matter, quality requirements, and the consequences of an unresolved error. Stronger professional validation can then be applied where it adds the greatest business value."],
  ["Can Stepes compare translation output from different AI models?", "Yes. With representative source content and outputs from different models or workflows, Stepes can configure comparative linguistic evaluation around accuracy, terminology, completeness, language quality, consistency, and locale appropriateness."],
  ["Can AI automatically review another AI translation?", "Automated evaluation and AI-assisted QA can help screen large volumes, detect patterns, and prioritize content for closer review. When accuracy, specialized terminology, nuanced meaning, market appropriateness, or high-impact decisions are involved, qualified bilingual human review provides an important independent layer of judgment."],
  ["How many languages does Stepes support for AI translation review?", "Stepes supports professional translation and localization services across more than 100 languages. Availability for highly specialized subject matter can vary by language, so share your target locales and content requirements with our team."],
  ["How do I get started with an AI translation review?", "Send the original source content, existing AI-generated translations, target languages, intended use, and any terminology or reference materials. Stepes can recommend the appropriate review scope, deliverables, and project workflow."],
];

export default function AITranslationReviewServicesWireframe() {
  return (
    <div className="page">
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}.page{font-family:Inter,Arial,sans-serif;color:${C.ink};background:#fff;min-width:0;overflow-x:hidden}.page a{color:inherit;text-decoration:none}.shell{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.sectionDense{padding:80px 0}.soft{background:${C.soft}}.blush{background:${C.blush}}.dark{background:${C.dark};color:#fff}.eyebrow{font-size:11px!important;line-height:1.35!important;font-weight:600!important;letter-spacing:.12em!important;text-transform:uppercase!important;color:${C.magenta}!important;margin:0 0 16px!important}.eyebrowDark{color:${C.pinkLight}!important}.h1,.h2,.h3{font-weight:600;margin:0;color:${C.ink}}.h1{font-size:48px;line-height:1.07;letter-spacing:-.035em;max-width:720px}.h2{font-size:36px;line-height:1.14;letter-spacing:-.025em}.h3{font-size:24px;line-height:1.24;letter-spacing:-.015em}.dark .h2,.dark .h3{color:#fff}.lead{font-size:18px;line-height:1.68;color:${C.text};margin:24px 0 0;max-width:790px}.dark .lead{color:#D7D2D5}.body{font-size:16px;line-height:1.72;color:${C.text};margin:0}.dark .body{color:#D7D2D5}.muted{color:${C.muted}}.headingGroup{max-width:820px}.headingCenter{text-align:center;margin-left:auto;margin-right:auto}.headingCenter .lead{margin-left:auto;margin-right:auto}.btnRow{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:12px 23px;border-radius:999px;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent;outline:none}.btnPrimary,.btnPrimary:link,.btnPrimary:visited,.btnPrimary:hover,.btnPrimary:active,.btnPrimary:focus,.btnPrimary:focus-visible{background:${C.magenta};color:#fff!important}.btnPrimary svg,.btnPrimary *{color:#fff!important;stroke:#fff!important}.btnPrimary:hover{background:${C.magentaDark};transform:translateY(-1px)}.btnSecondary{background:#fff;border-color:#CFCACD;color:${C.ink}}.btnSecondary:hover{border-color:#AAA3A7;background:#FAF9FA}.btn:focus-visible,.editorialLink:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}.editorialLink{display:inline-flex;align-items:center;gap:7px;color:${C.magenta}!important;font-size:16px;font-weight:600;min-height:44px}.editorialLink svg{transition:.2s ease}.editorialLink:hover svg{transform:translateX(3px)}.whiteLink,.whiteLink:link,.whiteLink:visited,.whiteLink:hover,.whiteLink:active,.whiteLink:focus,.whiteLink:focus-visible{color:#fff!important}.whiteLink svg{stroke:#fff!important}.hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#fff 72%,#FAF8F9 100%)}.heroGrid{display:grid;grid-template-columns:minmax(0,1.03fr) minmax(440px,.97fr);gap:72px;align-items:center}.heroCopy .lead{max-width:700px}.heroPanel{border:1px solid ${C.line};border-radius:30px;background:#fff;box-shadow:0 24px 60px rgba(32,20,26,.09);padding:28px;position:relative;overflow:hidden}.heroPanel:before{content:"";position:absolute;right:-55px;top:-55px;width:180px;height:180px;border-radius:50%;background:${C.blush}}.panelTop{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-bottom:20px;border-bottom:1px solid ${C.line};position:relative}.panelTitle{font-size:18px;font-weight:600}.status{font-size:14px;line-height:1.3;color:${C.magenta};font-weight:600;background:${C.blush};padding:7px 10px;border-radius:999px}.reviewStack{display:grid;gap:14px;padding-top:18px;position:relative}.reviewItem{border:1px solid ${C.line};border-radius:20px;padding:18px;background:#fff}.reviewItem.highlight{border-color:#D79AB5;background:#FFF9FC}.reviewMeta{display:flex;justify-content:space-between;gap:12px;color:${C.muted};font-size:14px;margin-bottom:9px}.reviewLabel{font-weight:600;color:${C.ink}}.reviewText{font-size:16px;line-height:1.55;color:${C.text}}.reviewText .issue{text-decoration:underline;text-decoration-color:${C.magenta};text-decoration-thickness:2px;text-underline-offset:3px}.reviewFix{display:flex;gap:10px;align-items:flex-start;margin-top:12px;padding-top:12px;border-top:1px solid ${C.line};font-size:16px;line-height:1.5;color:${C.text}}.reviewFix svg{color:${C.magenta};flex:none;margin-top:1px}.proof{background:#fff;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.proofGrid{display:grid;grid-template-columns:repeat(4,1fr)}.proofItem{padding:23px 26px;border-right:1px solid ${C.line};text-align:center;font-size:16px;font-weight:600;line-height:1.4}.proofItem:last-child{border-right:0}.split{display:grid;grid-template-columns:minmax(300px,.76fr) minmax(0,1.24fr);gap:84px;align-items:start}.statement{font-size:27px;line-height:1.36;letter-spacing:-.012em;font-weight:600;margin:26px 0 0;max-width:450px}.pointList{display:grid;gap:0;border-top:1px solid ${C.line}}.point{display:grid;grid-template-columns:26px 1fr;gap:16px;padding:19px 0;border-bottom:1px solid ${C.line};font-size:16px;line-height:1.65;color:${C.text}}.point svg{color:${C.magenta};margin-top:2px}.definitionGrid{display:grid;grid-template-columns:repeat(2,1fr);border:1px solid ${C.line};border-radius:28px;overflow:hidden;background:#fff}.definition{padding:28px 30px;min-height:160px;border-bottom:1px solid ${C.line};border-right:1px solid ${C.line}}.definition:nth-child(2n){border-right:0}.definition:nth-last-child(-n+2){border-bottom:0}.defTitle{font-size:19px;font-weight:600;margin-bottom:9px}.platformBand{display:grid;grid-template-columns:.88fr 1.12fr;gap:76px;align-items:center}.platformList{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid #393238;border-bottom:1px solid #393238}.platform{font-size:16px;line-height:1.45;padding:15px 0;color:#EFEAED;border-bottom:1px solid #393238}.platform:nth-child(odd){padding-right:26px}.platform:nth-child(even){padding-left:26px;border-left:1px solid #393238}.platform:nth-last-child(-n+2){border-bottom:0}.workflowGrid{display:grid;grid-template-columns:repeat(5,1fr);margin-top:50px;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.workflowStep{padding:28px 24px 32px 0;position:relative}.workflowStep:not(:last-child){border-right:1px solid ${C.line};padding-right:24px;margin-right:24px}.stepNo{font-size:13px;font-weight:600;color:${C.magenta};letter-spacing:.08em;margin-bottom:16px}.stepTitle{font-size:19px;line-height:1.35;font-weight:600;margin-bottom:10px}.scopePanel{border:1px solid ${C.line};border-radius:30px;overflow:hidden;margin-top:48px;background:#fff}.scopeGrid{display:grid;grid-template-columns:repeat(3,1fr)}.scope{padding:34px 32px}.scope:not(:last-child){border-right:1px solid ${C.line}}.scopeLabel{font-size:14px;font-weight:600;color:${C.magenta};margin-bottom:14px}.scopeTitle{font-size:23px;font-weight:600;margin-bottom:12px}.scope ul{margin:20px 0 0;padding:0;list-style:none}.scope li{display:flex;gap:10px;font-size:16px;line-height:1.55;color:${C.text};margin-top:10px}.scope li:before{content:"";width:5px;height:5px;background:${C.magenta};border-radius:50%;margin-top:.58em;flex:none}.errorGrid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #3B3439;margin-top:50px}.errorItem{padding:28px 30px 30px 0;border-bottom:1px solid #3B3439}.errorItem:not(:nth-child(3n)){border-right:1px solid #3B3439;margin-right:30px}.errorTitle{font-size:19px;font-weight:600;margin-bottom:9px;color:#fff}.industryGrid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${C.line};margin-top:46px}.industry{display:grid;grid-template-columns:48px 1fr;gap:18px;padding:28px 32px 28px 0;border-bottom:1px solid ${C.line}}.industry:nth-child(odd){border-right:1px solid ${C.line};margin-right:32px}.industry:nth-child(even){padding-left:32px}.iconBox{width:48px;height:48px;border-radius:16px;background:${C.blush};display:flex;align-items:center;justify-content:center;color:${C.magenta}}.industryTitle{font-size:19px;font-weight:600;margin-bottom:7px}.enterpriseGrid{display:grid;grid-template-columns:.95fr 1.05fr;gap:76px;align-items:start}.enterprisePanel{border:1px solid ${C.line};border-radius:28px;background:#fff;padding:34px}.enterpriseItems{display:grid;gap:0}.enterpriseItem{display:grid;grid-template-columns:24px 1fr;gap:15px;padding:16px 0;border-bottom:1px solid ${C.line}}.enterpriseItem:last-child{border-bottom:0}.enterpriseItem svg{color:${C.magenta};margin-top:2px}.measureGrid,.deliverGrid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid ${C.line};margin-top:46px}.measure,.deliver{padding:25px 28px 27px 0;border-bottom:1px solid ${C.line}}.measure:not(:nth-child(3n)),.deliver:not(:nth-child(3n)){border-right:1px solid ${C.line};margin-right:28px}.measureTitle,.deliverTitle{font-size:18px;font-weight:600;margin-bottom:8px}.ecosystem{display:grid;grid-template-columns:.86fr 1.14fr;gap:72px;align-items:start}.formatRows{border-top:1px solid ${C.line}}.formatRow{display:grid;grid-template-columns:1fr 1.8fr;gap:28px;padding:19px 0;border-bottom:1px solid ${C.line}}.formatTitle{font-size:17px;font-weight:600}.languageBand{border-radius:30px;background:${C.burgundy};padding:56px;display:grid;grid-template-columns:.86fr 1.14fr;gap:64px;color:#fff}.languageBand .h2{color:#fff}.languageBand .body{color:#F1E9ED}.languageMeta{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid rgba(255,255,255,.24)}.languageMeta div{padding:16px 18px 16px 0;border-bottom:1px solid rgba(255,255,255,.24);font-size:16px;line-height:1.45}.languageMeta div:nth-child(odd){border-right:1px solid rgba(255,255,255,.24);margin-right:18px}.comparePanel{border:1px solid ${C.line};border-radius:30px;overflow:hidden;margin-top:46px}.compareRow{display:grid;grid-template-columns:1fr .92fr 1.18fr;gap:32px;padding:30px 32px;background:#fff}.compareRow:not(:last-child){border-bottom:1px solid ${C.line}}.compareRow.featured{background:${C.blush}}.compareName{font-size:20px;font-weight:600}.compareQuestion{font-size:16px;line-height:1.55;font-weight:600}.comparePurpose{font-size:16px;line-height:1.6;color:${C.text}}.compareLink{margin-top:10px}.scenarioGrid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${C.line};margin-top:48px}.scenario{padding:25px 30px 27px 0;border-bottom:1px solid ${C.line}}.scenario:nth-child(odd){border-right:1px solid ${C.line};margin-right:30px}.scenario:nth-child(even){padding-left:30px}.scenarioTitle{font-size:18px;font-weight:600;margin-bottom:8px}.whyGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid ${C.line};margin-top:44px}.why{display:grid;grid-template-columns:26px 1fr;gap:15px;padding:23px 30px 23px 0;border-bottom:1px solid ${C.line}}.why:nth-child(odd){border-right:1px solid ${C.line};margin-right:30px}.why:nth-child(even){padding-left:30px}.why svg{color:${C.magenta};margin-top:2px}.whyTitle{font-size:18px;font-weight:600;margin-bottom:6px}.security{display:grid;grid-template-columns:.8fr 1.2fr;gap:74px;align-items:start}.securityPanel{border:1px solid #3C353A;border-radius:28px;padding:32px;background:#1D191C}.securityRow{display:grid;grid-template-columns:24px 1fr;gap:15px;padding:15px 0;border-bottom:1px solid #3C353A}.securityRow:last-child{border-bottom:0}.securityRow svg{color:${C.pinkLight};margin-top:2px}.faqPanel{border:1px solid ${C.line};border-radius:28px;overflow:hidden;margin-top:46px;background:#fff}.faq{border-bottom:1px solid ${C.line}}.faq:last-child{border-bottom:0}.faq summary{list-style:none;cursor:pointer;padding:24px 28px;display:flex;justify-content:space-between;align-items:center;gap:24px;font-size:18px;line-height:1.45;font-weight:600}.faq summary::-webkit-details-marker{display:none}.faq summary:after{content:"+";width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:1px solid ${C.line};border-radius:50%;color:${C.magenta};font-size:19px;flex:none}.faq[open] summary:after{content:"–"}.faqAnswer{padding:0 72px 25px 28px;max-width:860px;font-size:16px;line-height:1.72;color:${C.text}}.relatedGrid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid ${C.line};margin-top:46px}.related{padding:27px 28px 8px 0;min-height:220px}.related:not(:last-child){border-right:1px solid ${C.line};margin-right:28px}.relatedTitle{font-size:19px;font-weight:600;margin-bottom:9px}.related .editorialLink{margin-top:14px}.finalCta{padding:86px 0;background:${C.burgundy};color:#fff}.finalGrid{display:grid;grid-template-columns:1fr auto;gap:52px;align-items:center}.finalCta .h2{color:#fff;max-width:760px}.finalCta .lead{color:#F5EDF1;max-width:760px}.finalCta .btnSecondary{border-color:rgba(255,255,255,.45);background:transparent;color:#fff}.finalCta .btnSecondary:hover{background:rgba(255,255,255,.08);border-color:#fff}.finalActions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}.note{margin-top:18px;font-size:16px;line-height:1.65;color:${C.text};padding-left:16px;border-left:3px solid ${C.magenta};max-width:780px}.dark .note{color:#D7D2D5}.anchor{scroll-margin-top:24px}
        @media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.heroGrid{grid-template-columns:1fr .9fr;gap:44px}.h1{font-size:46px}.split{gap:56px}.workflowGrid{grid-template-columns:repeat(3,1fr)}.workflowStep:nth-child(3){border-right:0;margin-right:0}.workflowStep:nth-child(-n+3){border-bottom:1px solid ${C.line}}.workflowStep:nth-child(4),.workflowStep:nth-child(5){padding-top:30px}.measureGrid,.deliverGrid{grid-template-columns:repeat(2,1fr)}.measure:not(:nth-child(3n)),.deliver:not(:nth-child(3n)){border-right:0;margin-right:0}.measure:nth-child(odd),.deliver:nth-child(odd){border-right:1px solid ${C.line};margin-right:28px}.relatedGrid{grid-template-columns:repeat(2,1fr)}.related{border-bottom:1px solid ${C.line};min-height:190px}.related:nth-child(2){border-right:0;margin-right:0}.languageBand{padding:48px}.finalGrid{grid-template-columns:1fr}.finalActions{justify-content:flex-start}}
        @media(max-width:820px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}.sectionDense{padding:72px 0}.hero{padding:88px 0 80px}.heroGrid{grid-template-columns:1fr;gap:48px}.heroCopy{text-align:center}.heroCopy .h1,.heroCopy .lead{margin-left:auto;margin-right:auto}.heroCopy .btnRow{justify-content:center}.h1{font-size:42px}.h2{font-size:32px}.h3{font-size:22px}.proofGrid{grid-template-columns:repeat(2,1fr)}.proofItem:nth-child(2){border-right:0}.proofItem:nth-child(-n+2){border-bottom:1px solid ${C.line}}.split,.platformBand,.enterpriseGrid,.ecosystem,.security{grid-template-columns:1fr;gap:44px}.mobileCenter{text-align:center;margin-left:auto;margin-right:auto}.mobileCenter .lead{margin-left:auto;margin-right:auto}.mobileCenter .body{text-align:left}.platformBand .headingGroup .body{text-align:left}.definitionGrid{grid-template-columns:1fr}.definition{border-right:0!important;border-bottom:1px solid ${C.line}!important}.definition:last-child{border-bottom:0!important}.platformBand .headingGroup{text-align:center;margin-left:auto;margin-right:auto}.platformBand .lead{margin-left:auto;margin-right:auto}.workflowGrid{grid-template-columns:repeat(2,1fr)}.workflowStep,.workflowStep:not(:last-child){padding:27px 24px 29px 0;margin-right:24px;border-right:1px solid ${C.line}}.workflowStep:nth-child(even){border-right:0;margin-right:0}.workflowStep:nth-child(-n+4){border-bottom:1px solid ${C.line}}.workflowStep:nth-child(3){border-right:1px solid ${C.line};margin-right:24px}.workflowStep:nth-child(4){border-right:0;margin-right:0;padding-top:27px}.workflowStep:nth-child(5){grid-column:1/-1;border-right:0!important;margin-right:0!important;padding-top:27px}.scopeGrid{grid-template-columns:1fr}.scope:not(:last-child){border-right:0;border-bottom:1px solid ${C.line}}.errorGrid{grid-template-columns:repeat(2,1fr)}.errorItem:not(:nth-child(3n)){border-right:0;margin-right:0}.errorItem:nth-child(odd){border-right:1px solid #3B3439;margin-right:26px}.industryGrid{grid-template-columns:1fr}.industry:nth-child(odd){border-right:0;margin-right:0}.industry:nth-child(even){padding-left:0}.measureGrid,.deliverGrid{grid-template-columns:repeat(2,1fr)}.languageBand{grid-template-columns:1fr;gap:36px}.compareRow{grid-template-columns:1fr;gap:10px}.scenarioGrid,.whyGrid{grid-template-columns:1fr}.scenario:nth-child(odd),.why:nth-child(odd){border-right:0;margin-right:0}.scenario:nth-child(even),.why:nth-child(even){padding-left:0}.formatRow{grid-template-columns:1fr;gap:7px}.relatedGrid{grid-template-columns:1fr}.related,.related:not(:last-child){border-right:0;margin-right:0;border-bottom:1px solid ${C.line};min-height:0;padding-bottom:25px}.related:last-child{border-bottom:0}.faqPanel{margin-top:38px}.finalCta{padding:72px 0}.finalGrid{text-align:center}.finalGrid .lead{margin-left:auto;margin-right:auto}.finalActions{justify-content:center}}
        @media(max-width:600px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.sectionDense{padding:64px 0}.hero{padding:72px 0 68px}.h1{font-size:38px;line-height:1.09}.h2{font-size:30px}.h3{font-size:20px}.lead{font-size:18px}.heroCopy .btnRow{flex-direction:column}.heroCopy .btn{width:100%}.heroPanel{padding:20px;border-radius:24px}.panelTop{align-items:flex-start;flex-direction:column}.status{align-self:flex-start}.reviewMeta{flex-direction:column;gap:4px}.proofGrid{grid-template-columns:1fr}.proofItem{border-right:0!important;border-bottom:1px solid ${C.line}!important;padding:17px 20px}.proofItem:last-child{border-bottom:0!important}.headingGroup:not(.keepLeft){text-align:center;margin-left:auto;margin-right:auto}.headingGroup:not(.keepLeft) .lead{margin-left:auto;margin-right:auto}.headingGroup:not(.keepLeft) .body{text-align:left}.split .headingGroup.keepLeft{text-align:left}.statement{font-size:24px}.point{grid-template-columns:24px 1fr}.definition{padding:24px 22px}.platformList{grid-template-columns:1fr}.platform,.platform:nth-child(odd),.platform:nth-child(even){padding:14px 0;border-left:0;border-bottom:1px solid #393238}.platform:last-child{border-bottom:0}.workflowGrid{grid-template-columns:1fr;margin-top:38px;border-bottom:0}.workflowStep,.workflowStep:not(:last-child){border-right:0;margin-right:0;padding:23px 0;border-bottom:1px solid ${C.line}!important}.workflowStep:last-child{border-bottom:0!important}.scopePanel{border-radius:24px}.scope{padding:27px 23px}.errorGrid{grid-template-columns:1fr;margin-top:38px}.errorItem,.errorItem:nth-child(odd){border-right:0;margin-right:0;padding:22px 0;border-bottom:1px solid #3B3439}.industry{grid-template-columns:44px 1fr;gap:15px;padding:23px 0}.industry:nth-child(even){padding-left:0}.iconBox{width:44px;height:44px;border-radius:14px}.enterprisePanel{padding:25px 22px}.measureGrid,.deliverGrid{grid-template-columns:1fr;margin-top:38px}.measure,.deliver,.measure:nth-child(odd),.deliver:nth-child(odd){border-right:0;margin-right:0;padding:21px 0;border-bottom:1px solid ${C.line}}.languageBand{padding:34px 24px;border-radius:24px}.languageMeta{grid-template-columns:1fr}.languageMeta div,.languageMeta div:nth-child(odd){border-right:0;margin-right:0;padding:13px 0}.comparePanel{border-radius:24px}.compareRow{padding:24px 22px}.scenario,.scenario:nth-child(even){padding:21px 0}.why,.why:nth-child(even){padding:20px 0}.securityPanel{padding:24px 21px}.faq summary{padding:21px 20px;font-size:17px;align-items:flex-start}.faqAnswer{padding:0 20px 22px}.faqPanel{border-radius:24px}.finalCta{padding:64px 0}.finalActions{width:100%;flex-direction:column}.finalActions .btn{width:100%}}
        @media(max-width:340px){.reviewItem{padding:15px}.reviewText,.reviewFix{font-size:16px}.compareRow{padding:21px 18px}.faq summary{padding-left:18px;padding-right:18px}.faqAnswer{padding-left:18px;padding-right:18px}}
      `}</style>

      <header className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1 className="h1">AI Translation Review Services</h1>
            <p className="lead">Already have content translated by AI? Stepes provides professional source-to-target review to verify accuracy, correct errors, validate terminology, and prepare multilingual content for its intended use.</p>
            <p className="body" style={{marginTop:18,maxWidth:700}}>Whether your translations came from ChatGPT, Gemini, Claude, DeepL, an enterprise LLM, a TMS, or your own AI system, Stepes adds independent human linguistic judgment across 100+ languages.</p>
            <div className="btnRow">
              <a className="btn btnPrimary" href="https://www.stepes.com/contact-us/">Request a Review Quote <Icon name="arrow" size={18}/></a>
              <a className="btn btnSecondary" href="https://www.stepes.com/ai-translation-review/#review-process">See How Review Works</a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Illustrative AI translation review workflow">
            <div className="panelTop">
              <div>
                <div className="reviewLabel">Existing AI Translation Review</div>
                <div className="body muted" style={{marginTop:4}}>Source + AI output submitted by customer</div>
              </div>
              <div className="status">Human validation</div>
            </div>
            <div className="reviewStack">
              <div className="reviewItem">
                <div className="reviewMeta"><span className="reviewLabel">Source</span><span>English</span></div>
                <div className="reviewText">Select the account you want to link.</div>
              </div>
              <div className="reviewItem">
                <div className="reviewMeta"><span className="reviewLabel">Submitted AI Translation</span><span>Spanish</span></div>
                <div className="reviewText">Seleccione la cuenta que desea <span className="issue">conectar</span>.</div>
              </div>
              <div className="reviewItem highlight">
                <div className="reviewMeta"><span className="reviewLabel">Expert Review</span><span>Validated</span></div>
                <div className="reviewText">Seleccione la cuenta que desea vincular.</div>
                <div className="reviewFix"><Icon name="check" size={20}/><span>Approved product terminology restored; source meaning and interface context verified.</span></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="proof" aria-label="Service proof points">
        <div className="shell proofGrid">
          <div className="proofItem">100+ Languages</div>
          <div className="proofItem">Professional Native Linguists</div>
          <div className="proofItem">Subject-Matter Reviewers</div>
          <div className="proofItem">Source-to-Target Validation</div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="headingGroup keepLeft">
            <h2 className="h2">When AI Translation Needs Professional Human Review</h2>
            <div className="statement">Fluent output is not necessarily accurate output.</div>
          </div>
          <div>
            <p className="body">AI-generated translations can read naturally while still changing the source meaning, selecting the wrong technical term, dropping a qualification, misinterpreting an ambiguous phrase, altering a number or unit, or adding content that was never present in the original. These issues can be difficult to detect when someone reads only the translated text.</p>
            <div className="pointList" style={{marginTop:26}}>
              {["Customer-facing or publicly published content","Technical, terminology-intensive, legal, financial, medical, or regulatory content","Product, software, operational, or decision-support content","Content that must follow approved terminology, brand language, or regional conventions","High-volume multilingual output produced by employees, departments, vendors, or enterprise AI systems"].map((x,i)=><div className="point" key={i}><Icon name="check" size={20}/><span>{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">What Is AI Translation Review?</h2>
            <p className="lead">AI translation review is the professional evaluation of an existing AI-generated translation against its original source to determine whether it accurately preserves meaning and meets the requirements established for the project.</p>
          </div>
          <div className="definitionGrid" style={{marginTop:48}}>
            {reviewDimensions.map(([t,d])=><div className="definition" key={t}><div className="defTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
          <p className="note"><strong>Need the complete workflow?</strong> AI Translation Review starts with an existing AI translation. If you want Stepes to manage translation generation, professional review, terminology, QA, and delivery, explore <a className="editorialLink" href="https://www.stepes.com/ai-human-translation-workflow/">AI Translation &amp; Human Review <Icon name="arrow" size={17}/></a>.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="shell platformBand">
          <div className="headingGroup">
            {eyebrow("Platform-Agnostic Review", true)}
            <h2 className="h2">Review AI Translations From Any Platform</h2>
            <p className="lead">Keep the AI technology that already works for your organization. Stepes can provide an independent multilingual quality layer around translations created by your teams, systems, vendors, or preferred AI platforms.</p>
            <p className="body" style={{marginTop:18}}>You do not need to generate translations with Stepes to use our review services.</p>
          </div>
          <div className="platformList" aria-label="Examples of supported AI translation sources">
            {["ChatGPT / OpenAI","Google Gemini","Anthropic Claude","DeepL","Google Translate","Microsoft translation technologies","Amazon Translate","Commercial neural MT engines","Enterprise LLMs","Private or fine-tuned models","Translation management systems","Internally developed AI solutions"].map(x=><div className="platform" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section id="review-process" className="section anchor">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">How AI Translation Review Works</h2>
            <p className="lead">The review process is structured around the content you already translated, the quality level you need, and how the content will ultimately be used.</p>
          </div>
          <div className="workflowGrid">
            {workflow.map(([t,d],i)=><div className="workflowStep" key={t}><div className="stepNo">0{i+1}</div><div className="stepTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">AI Translation Review, MTPE, or a Complete AI + Human Workflow?</h2>
            <p className="lead">Choose the service based on where your project starts and what you need next. AI Translation Review is designed for translations that already exist.</p>
          </div>
          <div className="comparePanel">
            <div className="compareRow featured"><div className="compareName">AI Translation Review Services</div><div className="compareQuestion">“Can we trust this AI translation?”</div><div className="comparePurpose">Starts with an existing AI translation. Primary objective: independent validation, error identification, correction, and quality assurance.</div></div>
            <div className="compareRow"><div><div className="compareName">Machine Translation Post-Editing</div><div className="compareLink"><a className="editorialLink" href="https://www.stepes.com/machine-translation-post-editing/">Explore MTPE <Icon name="arrow" size={17}/></a></div></div><div className="compareQuestion">“Can you turn this machine translation into the finished translation we need?”</div><div className="comparePurpose">Starts with machine- or AI-generated translation. Primary objective: systematic production editing to an agreed final quality level.</div></div>
            <div className="compareRow"><div><div className="compareName">AI Translation &amp; Human Review</div><div className="compareLink"><a className="editorialLink" href="https://www.stepes.com/ai-human-translation-workflow/">Explore the Complete Workflow <Icon name="arrow" size={17}/></a></div></div><div className="compareQuestion">“Can Stepes manage the complete AI + human translation process?”</div><div className="comparePurpose">Starts before the translation exists. Primary objective: a managed workflow covering AI translation generation, professional human review, terminology, QA, and delivery.</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="headingGroup headingCenter">
            {eyebrow("Fit-for-Purpose Review")}
            <h2 className="h2">Match the Review Scope to the Content</h2>
            <p className="lead">Once an AI translation already exists, the appropriate depth of review depends on its intended use, audience, subject matter, visibility, and the consequences of an unresolved error.</p>
          </div>
          <div className="scopePanel">
            <div className="scopeGrid">
              <div className="scope"><div className="scopeLabel">LOWER-RISK CONTENT</div><div className="scopeTitle">Focused Quality Review</div><p className="body">Focused review to identify material translation problems without fully refining every stylistic detail.</p><ul><li>Clear mistranslations</li><li>Significant omissions or additions</li><li>Critical terminology</li><li>Numbers and units</li><li>Major readability problems</li></ul></div>
              <div className="scope"><div className="scopeLabel">BUSINESS-CRITICAL CONTENT</div><div className="scopeTitle">Full Source-to-Target Review</div><p className="body">Comprehensive bilingual review for content that must be accurate, consistent, natural, and suitable for its audience.</p><ul><li>Accuracy and completeness</li><li>Terminology and context</li><li>Grammar and fluency</li><li>Style, tone, and locale</li><li>Technical and formatting integrity</li></ul></div>
              <div className="scope"><div className="scopeLabel">HIGH-IMPACT CONTENT</div><div className="scopeTitle">Specialist Validation</div><p className="body">Additional controls for specialized content where errors can create safety, regulatory, legal, financial, technical, or reputational consequences.</p><ul><li>Domain-qualified reviewers</li><li>Approved terminology</li><li>Additional QA controls</li><li>Documented review outputs</li><li>Project-specific acceptance criteria</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell">
          <div className="headingGroup headingCenter">
            {eyebrow("Accuracy Beyond Fluency", true)}
            <h2 className="h2">AI Translation Errors That Require Human Judgment</h2>
            <p className="lead">Modern AI can produce polished translations that still contain consequential errors. Professional bilingual review helps distinguish content that merely looks correct from content that is genuinely fit for use.</p>
          </div>
          <div className="errorGrid">
            {errors.map(([t,d])=><div className="errorItem" key={t}><div className="errorTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Expert Review for High-Stakes AI Translations</h2>
            <p className="lead">The reviewer should be matched not only to the language pair, but also to the subject matter, audience, terminology, and practical consequences of a translation error.</p>
          </div>
          <div className="industryGrid">
            {industries.map(([ic,t,d])=><div className="industry" key={t}><div className="iconBox"><Icon name={ic}/></div><div><div className="industryTitle">{t}</div><p className="body">{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell enterpriseGrid">
          <div className="headingGroup mobileCenter">
            {eyebrow("Enterprise AI Quality")}
            <h2 className="h2">An Independent Quality Layer for Enterprise AI Translation</h2>
            <p className="lead">Organizations may have growing capacity to generate multilingual content without equivalent capacity to independently validate it.</p>
            <p className="body" style={{marginTop:18}}>Stepes helps separate translation generation from translation validation, allowing enterprises to retain their preferred AI technology while adding professional native linguists, specialist reviewers, multilingual QA, and structured quality evaluation where needed.</p>
          </div>
          <div className="enterprisePanel">
            <div className="enterpriseItems">
              {["Validate translations generated by internal teams","Review output from enterprise AI systems","Independently assess a vendor's AI translations","Establish quality controls before expanding AI adoption","Compare models, prompts, or workflows across languages","Apply professional review to high-risk content only","Centralize multilingual quality without centralizing AI generation"].map(x=><div className="enterpriseItem" key={x}><Icon name="shield" size={21}/><p className="body">{x}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Make AI Translation Quality Measurable</h2>
            <p className="lead">When the objective is to understand how well an AI system performs—not simply correct one translation—review findings can be structured into evidence that supports technology and workflow decisions.</p>
          </div>
          <div className="measureGrid">
            {qualityMeasures.map(([t,d])=><div className="measure" key={t}><div className="measureTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Choose the Review Deliverables You Need</h2>
            <p className="lead">AI translation review can support different business decisions. Stepes can configure the output around whether your team needs a finalized translation, visible reviewer intervention, quality evidence, or a combination of these.</p>
          </div>
          <div className="deliverGrid">
            {deliverables.map(([t,d])=><div className="deliver" key={t}><div className="deliverTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell ecosystem">
          <div className="headingGroup keepLeft">
            <h2 className="h2">Review AI Translations Across Your Content Ecosystem</h2>
            <p className="lead">AI translation now appears across documents, structured content, websites, software, product data, and continuously updated enterprise systems. Review workflows should preserve the context reviewers need.</p>
          </div>
          <div className="formatRows">
            {[
              ["Business Documents","Word files, presentations, spreadsheets, PDFs, reports, correspondence, policies, and everyday business materials."],
              ["Technical & Structured Content","Manuals, specifications, XML, HTML, JSON, localization files, and structured documentation."],
              ["Websites & Digital Content","Web pages, landing pages, knowledge content, product information, and multilingual digital experiences."],
              ["Software & App Content","UI strings, menus, messages, prompts, help content, release text, and localization assets."],
              ["Publishing Files","InDesign and other formatted publishing environments, with desktop publishing support where required."],
              ["High-Volume Content","Catalogs, knowledge bases, support content, product data, training materials, and continuously updated content."],
            ].map(([t,d])=><div className="formatRow" key={t}><div className="formatTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sectionDense">
        <div className="shell">
          <div className="languageBand">
            <div className="headingGroup mobileCenter">
              <h2 className="h2">Scale AI Translation Review Across 100+ Languages</h2>
              <p className="body" style={{marginTop:18}}>AI translation performance is not uniform across languages. Stepes enables enterprises to establish one coordinated quality framework while still applying native-language and market expertise in each locale.</p>
              <a className="editorialLink whiteLink" style={{marginTop:18}} href="https://www.stepes.com/translation-languages/">Explore Translation Languages <Icon name="arrow" size={17}/></a>
            </div>
            <div className="languageMeta">
              <div>Major international business languages</div><div>Regional language variants</div><div>Asian and European languages</div><div>Middle Eastern and African languages</div><div>Specialized language-domain combinations</div><div>Coordinated multilingual review programs</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Common AI Translation Review Scenarios</h2>
            <p className="lead">Professional review is especially useful when AI translation already exists but the organization needs stronger confidence, independent verification, or a repeatable multilingual quality process.</p>
          </div>
          <div className="scenarioGrid">
            {scenarios.map(([t,d])=><div className="scenario" key={t}><div className="scenarioTitle">{t}</div><p className="body">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Why Choose Stepes for AI Translation Review?</h2>
            <p className="lead">Stepes combines professional language expertise, subject-matter review, modern translation technology, and multilingual scale without requiring customers to replace the AI systems they already use.</p>
          </div>
          <div className="whyGrid">
            {[
              ["globe","Professional Native Linguists","Evaluate meaning, context, terminology, naturalness, and target-market expectations."],
              ["target","Source-to-Target Validation","Identify bilingual accuracy issues that target-language proofreading alone may miss."],
              ["book","Subject-Matter Expertise","Align reviewers with technical, legal, financial, life sciences, software, and other specialized content."],
              ["layers","AI-Agnostic Review","Review output from your preferred AI model, engine, TMS, enterprise platform, or external provider."],
              ["shield","Flexible Review Models","Configure focused review, full bilingual review, specialist validation, or structured quality evaluation."],
              ["briefcase","Enterprise Translation Expertise","Coordinate multilingual review across 100+ languages, content types, and ongoing global programs."],
            ].map(([ic,t,d])=><div className="why" key={t}><Icon name={ic}/><div><div className="whyTitle">{t}</div><p className="body">{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell security">
          <div className="headingGroup keepLeft">
            <h2 className="h2">Secure Review for Confidential and Business-Critical Content</h2>
            <p className="lead">AI-translated materials may contain confidential, proprietary, regulated, or otherwise sensitive information. Review workflows can be configured around the security, access, reviewer qualification, terminology, and approval requirements of the engagement.</p>
          </div>
          <div className="securityPanel">
            {["Confidential content handling","Controlled reviewer access","Project-specific instructions and approvals","Approved terminology and linguistic resources","Enterprise file exchange and delivery workflows","Quality review and documented outputs when required"].map(x=><div className="securityRow" key={x}><Icon name="lock" size={21}/><p className="body">{x}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">AI Translation Review FAQs</h2>
            <p className="lead">Answers to common questions about source-to-target review, AI platforms, MTPE, review scope, deliverables, specialized content, and multilingual quality evaluation.</p>
          </div>
          <div className="faqPanel">
            {faqs.map(([q,a],i)=><details className="faq" key={q} open={i===0}><summary>{q}</summary><div className="faqAnswer">{a}</div></details>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="headingGroup headingCenter">
            <h2 className="h2">Related AI Translation Solutions</h2>
            <p className="lead">Choose the adjacent service based on whether you need a complete translation workflow, production post-editing, broader AI output evaluation, or AI-enabled translation capabilities.</p>
          </div>
          <div className="relatedGrid">
            <div className="related"><div className="relatedTitle">AI Translation &amp; Human Review</div><p className="body">A complete managed workflow combining AI translation generation, professional human review, terminology, QA, and delivery.</p><a className="editorialLink" href="https://www.stepes.com/ai-human-translation-workflow/">Explore the Workflow <Icon name="arrow" size={17}/></a></div>
            <div className="related"><div className="relatedTitle">Machine Translation Post-Editing</div><p className="body">Professional editing of existing machine- or AI-generated translations to an agreed production quality level.</p><a className="editorialLink" href="https://www.stepes.com/machine-translation-post-editing/">Explore MTPE <Icon name="arrow" size={17}/></a></div>
            <div className="related"><div className="relatedTitle">AI Translation Services</div><p className="body">Broader AI-enabled translation capabilities for scalable multilingual content production and enterprise language workflows.</p><a className="editorialLink" href="https://www.stepes.com/ai-machine-learning-translation-services/">Explore AI Translation <Icon name="arrow" size={17}/></a></div>
            <div className="related"><div className="relatedTitle">Multilingual AI Output Review</div><p className="body">Evaluate multilingual output from LLMs, chatbots, conversational AI, RAG systems, and other generative AI applications.</p><a className="editorialLink" href="https://www.stepes.com/multilingual-ai-output-review/">Explore AI Output Review <Icon name="arrow" size={17}/></a></div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalGrid">
          <div>
            <h2 className="h2">Need Expert Review of Your AI Translations?</h2>
            <p className="lead">Send Stepes your source content and existing AI-generated translations. We’ll help define the right review scope based on your languages, subject matter, intended use, quality requirements, and business risk.</p>
          </div>
          <div className="finalActions">
            <a className="btn btnPrimary" href="https://www.stepes.com/contact-us/">Request a Review Quote <Icon name="arrow" size={18}/></a>
            <a className="btn btnSecondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
          </div>
        </div>
      </section>
    </div>
  );
}
