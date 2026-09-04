import React from "react";

const PAGE_URL = "https://www.stepes.com/pdf-translation-services/";

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  document: "https://www.stepes.com/document-translation-services/",
  scanned: "https://www.stepes.com/scanned-document-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  aiHuman: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  technical: "https://www.stepes.com/technical-translation-services/",
  contract: "https://www.stepes.com/contract-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  catalog: "https://www.stepes.com/catalog-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  security: "https://www.stepes.com/security/",
  languages: "https://www.stepes.com/translation-languages/",
};

const pdfTypes = [
  {
    icon: "textPdf",
    title: "Text-Based PDFs",
    text: "Digitally generated PDFs often contain selectable text that can be extracted for translation while retaining useful information about paragraphs, tables, page structure, and reading order.",
    note: "Business reports, contracts, product documentation, white papers, financial reports, policies, and procedures.",
  },
  {
    icon: "scan",
    title: "Scanned PDFs",
    text: "Scanned pages may contain no usable digital text. Stepes uses optical character recognition (OCR), verifies extracted content as appropriate, translates the text, and reconstructs the required output.",
    note: "Scan quality, orientation, tables, stamps, handwriting, annotations, and page condition can affect the workflow.",
    link: { label: "Scanned Document Translation Services", href: links.scanned },
  },
  {
    icon: "design",
    title: "Design-Exported PDFs",
    text: "Brochures, catalogs, manuals, reports, and other designed documents are often exported from InDesign, Illustrator, FrameMaker, Word, PowerPoint, or another authoring application.",
    note: "When the editable source is available, Stepes can use it as the production file while retaining the PDF as the visual reference.",
  },
  {
    icon: "layers",
    title: "Complex PDFs",
    text: "Some PDFs combine text, graphics, forms, columns, tables, annotations, embedded images, restricted content, or unusual page structures that require individual assessment.",
    note: "Stepes determines the appropriate combination of extraction, OCR, translation, image handling, reconstruction, and multilingual production.",
  },
];

const workflow = [
  {
    title: "Analyze the PDF",
    text: "Assess text accessibility, reading order, tables, fonts, graphics, scan quality, file restrictions, likely source application, and the required target format.",
    meta: "File condition determines the production path.",
  },
  {
    title: "Extract or OCR the Content",
    text: "Prepare text-based PDFs through structured extraction or use OCR for scanned and image-based pages, with verification where the source condition requires it.",
    meta: "Image-based text can be included when it is part of the agreed scope.",
  },
  {
    title: "Translate With the Right Workflow",
    text: "Apply professional human translation, AI-assisted translation, MTPE, translation memory, terminology, and subject-matter expertise according to the document’s purpose and risk.",
    meta: "Approved language assets can carry consistency forward.",
  },
  {
    title: "Review and Validate the Language",
    text: "Check meaning, completeness, terminology, numbers, units, references, product language, tone, and readability with specialist review added where project requirements call for it.",
    meta: "Higher-impact content can receive additional oversight.",
  },
  {
    title: "Reconstruct the Document",
    text: "Return translated content to the required layout while managing text expansion, tables, graphics, fonts, callouts, pagination, page flow, and right-to-left language requirements.",
    meta: "The translated page is rebuilt for its target language.",
  },
  {
    title: "Perform Final Linguistic and Visual QA",
    text: "Verify missing or clipped text, line breaks, headers, footers, page numbering, fonts, tables, image placement, numbers, language rendering, RTL presentation, and overall usability.",
    meta: "Final checks cover both language and document integrity.",
  },
];

const dtpCapabilities = [
  ["Text Expansion and Reflow", "Adjust text frames, paragraphs, line breaks, spacing, and page flow when translated content becomes longer or shorter."],
  ["Tables and Structured Content", "Resize columns, reorganize cells, and verify alignment so translated tables remain readable and structurally clear."],
  ["Multilingual Typography", "Use appropriate fonts, character support, spacing, punctuation, and typographic conventions for each target language."],
  ["Graphics and Callouts", "Translate and reposition labels, diagrams, captions, text embedded in graphics, and other visual content when required."],
  ["Right-to-Left Languages", "Adapt page direction, alignment, tables, graphics, and other layout elements for Arabic, Hebrew, and other RTL requirements."],
  ["Publication-Ready QA", "Review formatted output for clipping, missing content, font issues, alignment, readability, page integrity, and final visual consistency."],
];

const translationModels = [
  {
    title: "Professional Human Translation",
    fit: "High-value, specialized, nuanced, regulated, creative, or publication-critical content.",
    text: "Qualified linguists translate the content with appropriate terminology, context, subject expertise, and professional judgment.",
  },
  {
    title: "AI + Professional Review",
    fit: "Scalable business content that benefits from automation with professional linguistic oversight.",
    text: "AI-assisted translation can improve speed while linguists review meaning, terminology, fluency, completeness, and target-market suitability.",
  },
  {
    title: "Machine Translation Post-Editing",
    fit: "Suitable high-volume or repeatable content with defined quality requirements.",
    text: "Professional post-editors correct machine-generated output, apply approved terminology, improve readability, and align the translation with the agreed standard.",
  },
  {
    title: "High-Assurance Specialist Review",
    fit: "Legal, medical, financial, regulatory, safety, and highly technical documents.",
    text: "Specialized linguists, terminology validation, additional review, and final quality approval can be added according to document risk and use.",
  },
];

const documentTypes = [
  {
    icon: "manual",
    title: "Technical Manuals & User Guides",
    text: "Translate technical terminology, diagrams, warnings, tables, numbered procedures, measurements, and recurring product content without separating the language from the document structure.",
    link: { label: "Technical Translation Services", href: links.technical },
  },
  {
    icon: "legal",
    title: "Contracts & Legal Documents",
    text: "Translate agreements, policies, disclosures, corporate records, and other legal PDFs with attention to defined terms, references, confidentiality, and fixed page structures.",
    link: { label: "Contract Translation Services", href: links.contract },
  },
  {
    icon: "finance",
    title: "Financial Reports & Corporate Documents",
    text: "Support annual reports, financial statements, investor materials, audit documents, disclosures, and corporate communications containing tables, figures, charts, and financial terminology.",
    link: { label: "Financial Translation Services", href: links.financial },
  },
  {
    icon: "medical",
    title: "Medical & Regulatory Documents",
    text: "Translate clinical, healthcare, pharmaceutical, medical device, patient-facing, and regulatory PDFs using the linguistic expertise and terminology controls appropriate to the content.",
    link: { label: "Medical Translation Services", href: links.medical },
  },
  {
    icon: "marketing",
    title: "Brochures, Catalogs & Marketing Materials",
    text: "Localize designed PDFs where brand language, graphics, typography, text expansion, page composition, and publication requirements all have to work together.",
    links: [
      { label: "Marketing Translation Services", href: links.marketing },
      { label: "Catalog Translation Services", href: links.catalog },
    ],
  },
  {
    icon: "certificate",
    title: "Certificates & Official Documents",
    text: "Translate scanned or digital certificates, academic records, employment documents, legal records, and other official-use materials with formatting and certification where required.",
    link: { label: "Certified Translation Services", href: links.certified },
  },
];

const deliverables = [
  ["Formatted Multilingual PDF", "A professionally formatted target-language PDF for digital distribution, internal use, customer communication, or general publication."],
  ["Print-Ready PDF", "Production-ready output for brochures, catalogs, manuals, reports, and other professionally designed documents."],
  ["Editable Source File", "An editable target-language production file when the source materials and agreed workflow support it."],
  ["Editable Word Document", "A practical option when your team needs translated content in an easily editable format rather than full reproduction of the source artwork."],
  ["Review Files", "Bilingual or other review formats when customer reviewers need to validate terminology or translated content before final production."],
];

const enterpriseCapabilities = [
  ["Batch File Processing", "Process multiple PDFs through standardized intake, file analysis, translation, review, production, and delivery workflows."],
  ["Translation Memory Reuse", "Reuse previously approved translations so recurring content does not need to be translated from scratch every time."],
  ["Terminology Management", "Apply approved product names, technical terminology, legal phrases, regulated terms, and corporate language across files and languages."],
  ["Version and Update Efficiency", "Identify reusable content across document revisions and focus translation effort on new or modified material."],
  ["Multi-Language Production", "Coordinate translation, review, formatting, and QA across multiple target languages within one managed workflow."],
  ["Consistent Quality Controls", "Apply defined linguistic, terminology, completeness, number, formatting, and visual checks across document sets."],
];

const securityControls = [
  ["Controlled Project Access", "Limit access to customer content according to project roles and workflow requirements."],
  ["Confidential Translation Resources", "Professional linguists and production resources work within defined confidentiality and content-handling requirements."],
  ["Governed Technology Workflows", "Translation technology, AI-assisted processes, language assets, and production tools can be aligned with customer requirements and content sensitivity."],
  ["Secure File Handling and Delivery", "Manage customer files through controlled project workflows from intake through approved delivery."],
  ["Customer-Specific Requirements", "Support project instructions for confidentiality, reviewer access, workflow controls, technology usage, and delivery requirements."],
];

const languageRegions = [
  ["Europe", "German, French, Italian, Spanish, Portuguese, Dutch, Polish, Czech, Danish, Swedish, Norwegian, Finnish, Romanian, Greek, and additional European languages."],
  ["Asia-Pacific", "Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and additional Asian languages."],
  ["Middle East & Africa", "Arabic, Hebrew, Turkish, Persian, Amharic, Swahili, Somali, Hausa, Zulu, Yoruba, and additional regional languages, including right-to-left and complex-script requirements."],
  ["Americas & Global Markets", "Latin American Spanish, European Spanish, Brazilian Portuguese, European Portuguese, Canadian French, and other regional language variants."],
];

const whyStepes = [
  ["PDF-Specific File Expertise", "Process text-based, scanned, image-heavy, designed, and structurally complex PDF documents using the appropriate extraction, OCR, reconstruction, and translation workflow."],
  ["Professional Linguists + File Engineering", "Combine language expertise with practical document engineering and multilingual production instead of treating translation and formatting as unrelated steps."],
  ["AI + Human Translation Workflows", "Use automation where it improves efficiency while keeping professional linguistic judgment, specialist expertise, review, and approval where they add the most value."],
  ["Translation Memory + Terminology", "Reuse approved multilingual content and control important terminology across documents, languages, product families, and future versions."],
  ["Multilingual Layout Expertise", "Manage text expansion, fonts, tables, graphics, typography, pagination, and right-to-left requirements across global languages."],
  ["Enterprise Scalability", "Support everything from a single PDF to high-volume document libraries, recurring updates, multiple target languages, and long-term multilingual content programs."],
  ["Quality Beyond the Text", "Evaluate both the translation and the finished document so content remains linguistically accurate and professionally usable in its final format."],
];

const faqs = [
  [
    "Can Stepes translate a PDF if I don’t have the original source file?",
    "Yes. Stepes can translate many PDFs even when the original Word, InDesign, Illustrator, or other editable source is unavailable. We first analyze whether the PDF contains extractable text, scanned images, or a more complex structure. Depending on the file, the workflow may include extraction, OCR, translation, reconstruction, and multilingual formatting. If you do have the editable source, providing it together with the PDF can improve production efficiency and output quality.",
  ],
  [
    "Can you translate scanned PDF documents?",
    "Yes. Stepes provides professional translation for scanned PDFs using OCR to identify and extract text before translation. OCR quality can vary according to scan resolution, page orientation, typography, tables, handwriting, stamps, and other visual factors, so extracted content can be verified as part of the workflow before translation and final formatting.",
  ],
  [
    "Can you translate a PDF without losing the formatting?",
    "Stepes can preserve or professionally recreate PDF formatting according to the structure and quality of the source file and the required target deliverable. Native PDFs and editable source files generally provide more production flexibility. Scanned, flattened, image-heavy, or highly complex PDFs may require additional reconstruction and desktop publishing. Translation can also change text length, line breaks, fonts, and page flow, so multilingual formatting may be necessary to produce a polished result.",
  ],
  [
    "Should I send the original Word, InDesign, Illustrator, or FrameMaker file?",
    "Yes, when it is available. The PDF provides a useful visual reference, while the native source usually contains cleaner editable content and document structure. Providing both allows Stepes to determine the most efficient production approach. If you only have the PDF, send it anyway and we can assess the file.",
  ],
  [
    "Can Stepes translate text inside images, diagrams, charts, and screenshots?",
    "Yes. Text embedded in images, diagrams, charts, screenshots, callouts, and other visual elements can be included in the translation scope. Depending on how the graphic was created, Stepes may extract the text, recreate the graphic, edit an available source asset, or use another appropriate production method.",
  ],
  [
    "Can you translate password-protected or locked PDFs?",
    "Stepes can evaluate restricted PDFs, but appropriate access must be available before protected content can be processed. If your file is password-protected, encrypted, or otherwise restricted, provide the necessary authorized access or an unlocked project copy when submitting the document.",
  ],
  [
    "What happens when the translated text is longer than the original?",
    "Text expansion is a normal part of multilingual document production. Depending on the language pair, translated content may require wider text frames, additional lines, resized tables, page reflow, typography changes, or other layout adjustments. Stepes multilingual desktop publishing specialists can adapt the document so the translated content remains readable and professionally presented.",
  ],
  [
    "Does Stepes use AI to translate PDFs?",
    "Stepes can use AI-assisted translation as part of a managed workflow when appropriate for the content and customer requirements. The right approach depends on the document’s purpose, audience, subject matter, risk, confidentiality, quality expectations, and turnaround. Available workflows can include AI-assisted translation with professional review, MTPE, professional human translation, specialist review, translation memory, terminology management, and quality assurance.",
  ],
  [
    "What format will I receive after the PDF is translated?",
    "Deliverables depend on your requirements and the source material. Options can include a formatted multilingual PDF, print-ready PDF, editable Word file, editable production source, review files, or another agreed document format. Tell us how you plan to use the translation so we can recommend the right output.",
  ],
  [
    "Can Stepes translate large batches of PDF files?",
    "Yes. Stepes supports enterprise PDF translation programs involving multiple documents, target languages, business units, and recurring updates. Translation memory, terminology management, batch processing, reusable workflows, quality checks, professional review, and multilingual production help maintain consistency while reducing repetitive work across large document libraries.",
  ],
  [
    "How much does professional PDF translation cost?",
    "PDF translation pricing depends on the source and target languages, word count, subject matter, PDF structure, OCR requirements, formatting complexity, images and graphics, level of linguistic review, required output format, and turnaround requirements. Upload your PDF and project requirements to receive a quote based on the actual content and production scope.",
  ],
];

function Arrow() {
  return <span className="pf-arrow" aria-hidden="true">→</span>;
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`pf-text-link${dark ? " pf-text-link-dark" : ""}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function Icon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    textPdf: (
      <>
        <path d="M7 3.8h7.4L18.8 8v12.2H7z" />
        <path d="M14.4 3.8V8h4.4M9.8 11.4h6.1M9.8 14.5h6.1M9.8 17.6h4.2" />
      </>
    ),
    scan: (
      <>
        <path d="M5.2 7V5.2H7M17 5.2h1.8V7M18.8 17v1.8H17M7 18.8H5.2V17" />
        <rect x="8" y="7.2" width="8" height="9.6" rx="1.2" />
        <path d="M9.8 10h4.4M9.8 12.6h4.4M9.8 15.2h2.8" />
      </>
    ),
    design: (
      <>
        <rect x="4.2" y="4.3" width="15.6" height="15.4" rx="2" />
        <path d="M7.1 8.1h6.4M7.1 11h9.7M7.1 13.9h4.2M14.4 13.8h2.5v2.6h-2.5z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4.5 7.3 4.1L12 12.7 4.7 8.6z" />
        <path d="m5.4 12 6.6 3.7 6.6-3.7M5.4 15.4l6.6 3.7 6.6-3.7" />
      </>
    ),
    manual: (
      <>
        <path d="M5 5.2c2.2-.6 4.5-.3 7 1.1v12.5c-2.5-1.4-4.8-1.7-7-1.1zM19 5.2c-2.2-.6-4.5-.3-7 1.1v12.5c2.5-1.4 4.8-1.7 7-1.1z" />
        <path d="M7.3 9h2.6M7.3 12h2.6M14.1 9h2.6M14.1 12h2.6" />
      </>
    ),
    legal: (
      <>
        <path d="M12 4.3v14.8M7 7.1h10M7.1 7.1l-2.5 4.5h5zM16.9 7.1l-2.5 4.5h5zM8.5 19.1h7" />
      </>
    ),
    finance: (
      <>
        <path d="M5 19V9M10 19V12M15 19V6M20 19V10" />
        <path d="M4 19h17M4.7 7.4l4.1-2 4.2 2.1 6-3" />
      </>
    ),
    medical: (
      <>
        <path d="M12 4.2 18.6 7v4.9c0 4.2-2.7 6.8-6.6 8-3.9-1.2-6.6-3.8-6.6-8V7z" />
        <path d="M12 8v7M8.5 11.5h7" />
      </>
    ),
    marketing: (
      <>
        <path d="M5 8.3h5.2l6.7-3v13.4l-6.7-3H5z" />
        <path d="M7.1 15.6v3.2M18.9 8.1l1.7-1.2M18.9 11.6h2" />
      </>
    ),
    certificate: (
      <>
        <path d="M7 4.5h10v10H7z" />
        <path d="M9.2 8h5.6M9.2 10.7h4" />
        <path d="m10 14.5-1 5 3-1.7 3 1.7-1-5" />
      </>
    ),
    lock: (
      <>
        <rect x="5.2" y="10" width="13.6" height="10" rx="2" />
        <path d="M8.3 10V7.5a3.7 3.7 0 0 1 7.4 0V10M12 14.1v2.4" />
      </>
    ),
    language: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.1 2.2 3.1 4.9 3.1 8s-1 5.8-3.1 8M12 4C9.9 6.2 8.9 8.9 8.9 12s1 5.8 3.1 8" />
      </>
    ),
    quality: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.4 12.2 2.3 2.3 4.9-5" />
      </>
    ),
    files: (
      <>
        <path d="M6.6 4.2h7.2l3.6 3.7v11.9H6.6zM13.8 4.2v3.7h3.6" />
        <path d="M4.2 7.2v12.6h10.2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="pf-icon" aria-hidden="true" focusable="false" {...common}>
      {icons[type] || icons.textPdf}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false, align = "center" }) {
  return (
    <div className={`pf-heading pf-heading-${align}`}>
      {eyebrow ? <p className={`pf-eyebrow${dark ? " pf-eyebrow-dark" : ""}`}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="pf-section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="pf-hero-art" aria-label="PDF translation workflow illustration">
      <div className="pf-art-glow pf-art-glow-a" />
      <div className="pf-art-glow pf-art-glow-b" />
      <div className="pf-pdf-source">
        <div className="pf-file-tab"><span>PDF</span><em>Source</em></div>
        <div className="pf-page-title" />
        <div className="pf-page-line long" />
        <div className="pf-page-line mid" />
        <div className="pf-page-grid">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="pf-page-graphic"><span /><span /><span /></div>
      </div>
      <div className="pf-process-rail">
        <div><strong>01</strong><span>Analyze</span></div>
        <div><strong>02</strong><span>Extract / OCR</span></div>
        <div><strong>03</strong><span>Translate</span></div>
        <div><strong>04</strong><span>Rebuild + QA</span></div>
      </div>
      <div className="pf-pdf-target">
        <div className="pf-file-tab target"><span>PDF</span><em>DE</em></div>
        <div className="pf-page-title target" />
        <div className="pf-page-line long target" />
        <div className="pf-page-line mid target" />
        <div className="pf-page-grid target">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="pf-page-graphic target"><span /><span /><span /></div>
      </div>
      <div className="pf-lang-badges" aria-hidden="true">
        <span>EN</span><span>DE</span><span>JA</span><span>AR</span>
      </div>
    </div>
  );
}

function StructureVisual() {
  return (
    <div className="pf-structure-visual" aria-label="PDF structure layers illustration">
      <div className="pf-structure-page">
        <span className="pf-structure-label">Visible PDF page</span>
        <div className="pf-structure-title" />
        <div className="pf-structure-text"><i /><i /><i /></div>
        <div className="pf-structure-table"><b /><b /><b /><b /><b /><b /></div>
        <div className="pf-structure-chart"><i /><i /><i /></div>
      </div>
      <div className="pf-layer-stack">
        <div><strong>Text layer</strong><span>Selectable content and reading order</span></div>
        <div><strong>Images</strong><span>Scans, screenshots, diagrams, labels</span></div>
        <div><strong>Tables</strong><span>Rows, columns, values, alignment</span></div>
        <div><strong>Document structure</strong><span>Pages, fonts, forms, annotations, restrictions</span></div>
      </div>
    </div>
  );
}

function LayoutVisual() {
  return (
    <div className="pf-layout-visual" aria-label="Multilingual PDF layout adaptation illustration">
      <div className="pf-layout-header">
        <span>Source layout</span>
        <span>Localized layout</span>
      </div>
      <div className="pf-layout-pages">
        <div className="pf-layout-page source">
          <strong>EN</strong>
          <i className="title" />
          <i /><i /><i className="short" />
          <div className="table"><span /><span /><span /><span /></div>
          <div className="callout">Safety information</div>
        </div>
        <div className="pf-layout-arrow" aria-hidden="true">→</div>
        <div className="pf-layout-page target">
          <strong>DE</strong>
          <i className="title" />
          <i /><i /><i /><i className="short" />
          <div className="table"><span /><span /><span /><span /></div>
          <div className="callout">Sicherheitsinformationen</div>
        </div>
      </div>
      <div className="pf-layout-status">
        <span>Text reflow</span>
        <span>Table fit</span>
        <span>Font support</span>
        <span>Visual QA</span>
      </div>
    </div>
  );
}

function NativeSourceVisual() {
  return (
    <div className="pf-native-visual" aria-label="PDF and editable source file illustration">
      <div className="pf-native-pdf">
        <span>PDF</span>
        <strong>Visual reference</strong>
        <i /><i /><i />
      </div>
      <div className="pf-native-plus" aria-hidden="true">+</div>
      <div className="pf-source-stack">
        <div><span>DOCX</span><strong>Word</strong></div>
        <div><span>INDD</span><strong>InDesign</strong></div>
        <div><span>AI</span><strong>Illustrator</strong></div>
        <div><span>PPTX</span><strong>PowerPoint</strong></div>
        <div><span>FM</span><strong>FrameMaker</strong></div>
        <div><span>XLSX</span><strong>Excel</strong></div>
      </div>
      <div className="pf-native-message">Provide both when available. Stepes can determine the best production path.</div>
    </div>
  );
}

function ReconstructionVisual() {
  return (
    <div className="pf-reconstruct-visual" aria-label="PDF reconstruction and editable source creation illustration">
      <div className="pf-reconstruct-file">
        <span>PDF only</span>
        <i /><i /><i />
      </div>
      <div className="pf-reconstruct-path">
        <div><span>Recover</span><strong>Text + structure</strong></div>
        <div><span>Rebuild</span><strong>Editable layout</strong></div>
        <div><span>Prepare</span><strong>Multilingual source</strong></div>
      </div>
      <div className="pf-reconstruct-output">
        <div><span>DOCX</span></div>
        <div><span>INDD</span></div>
        <div><span>AI</span></div>
        <div><span>PPTX</span></div>
      </div>
    </div>
  );
}

export default function PDFTranslationServicesWireframe() {
  return (
    <main className="pdf-wireframe" data-page-url={PAGE_URL}>
      <style>{styles}</style>

      <section className="pf-section pf-hero">
        <div className="pf-container pf-hero-grid">
          <div className="pf-hero-copy">
            <h1>Professional PDF Translation Services</h1>
            <p className="pf-hero-lede">
              Translate native, scanned, and complex PDF documents in 100+ languages with professional linguistic expertise, intelligent file processing, and multilingual formatting.
            </p>
            <p className="pf-hero-support">
              Stepes combines translation, OCR, file engineering, professional review, and multilingual production to deliver accurate, complete PDF content in the format your business needs, from a single document to enterprise-scale libraries.
            </p>
            <div className="pf-actions">
              <a className="pf-btn pf-btn-primary" href={links.quote}>Get a Quote</a>
              <a className="pf-btn pf-btn-secondary" href={links.contact}>Contact Sales</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="pf-proof-band" aria-label="PDF translation capabilities">
        <div className="pf-container pf-proof-grid">
          {[
            ["Native & Scanned PDFs", "Text-based, scanned, image-heavy, and complex files"],
            ["100+ Languages", "Global and regional language coverage"],
            ["OCR & File Engineering", "Content extraction and document preparation"],
            ["Professional Human Review", "Qualified linguists matched to your content"],
            ["Multilingual Formatting", "Layout reconstruction and desktop publishing"],
            ["Enterprise-Ready Workflows", "From individual PDFs to document libraries"],
          ].map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container pf-editorial-grid">
          <div className="pf-editorial-copy">
            <h2>A PDF Is More Than the Words You Can See</h2>
            <p className="pf-large-copy">
              PDFs are designed to preserve how documents look. They do not always preserve how the underlying content is structured.
            </p>
            <p>
              Two PDF files can appear almost identical on screen while requiring completely different translation workflows. One may contain clean, selectable text with an intact reading order. Another may consist of separate text objects, flattened graphics, scanned page images, embedded fonts, annotations, forms, tables, or no usable text layer at all.
            </p>
            <p>
              That is why professional PDF translation begins before the first sentence is translated. Stepes analyzes the source to understand how the content is stored, what can be extracted reliably, whether OCR is required, how visual elements should be handled, and what format the translated document ultimately needs to become.
            </p>
            <p>
              The result is a workflow designed around the document itself, not a one-size-fits-all file conversion.
            </p>
            <TextLink href={links.document}>Document Translation Services</TextLink>
          </div>
          <StructureVisual />
        </div>
      </section>

      <section className="pf-section pf-light">
        <div className="pf-container">
          <SectionHeading
            title="Not Every PDF Is the Same"
            intro="The right PDF translation workflow depends on how the document was created, what it contains, and how the translated version will be used."
          />
          <div className="pf-type-panel">
            {pdfTypes.map((item) => (
              <article className="pf-type-item" key={item.title}>
                <div className="pf-icon-shell"><Icon type={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p className="pf-type-note">{item.note}</p>
                  {item.link ? <TextLink href={item.link.href}>{item.link.label}</TextLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-workflow-section">
        <div className="pf-container pf-workflow-grid">
          <div className="pf-workflow-copy">
            <p className="pf-eyebrow">PDF TRANSLATION WORKFLOW</p>
            <h2>From PDF to Multilingual Delivery</h2>
            <p className="pf-large-copy">
              Reliable PDF translation connects file preparation, linguistic expertise, automation, review, formatting, and quality assurance in one managed workflow.
            </p>
            <p>
              Each stage supports the next so the final deliverable is not only translated, but also usable in the format and context your business requires.
            </p>
          </div>
          <div className="pf-workflow-list">
            {workflow.map((step, index) => (
              <article className="pf-workflow-row" key={step.title}>
                <span className="pf-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="pf-workflow-meta">{step.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-dark pf-dtp-section">
        <div className="pf-container pf-dtp-grid">
          <div className="pf-dtp-copy">
            <p className="pf-eyebrow pf-eyebrow-dark">MULTILINGUAL PRODUCTION</p>
            <h2>Translate the Content. Rebuild the Page.</h2>
            <p className="pf-large-copy">
              Accurate translation is only part of producing a professional multilingual PDF.
            </p>
            <p>
              Languages behave differently on the page. German may require more horizontal space than English. Chinese can change line density and page balance. Arabic and Hebrew require right-to-left typography and layout decisions. Fonts available for one language may not support another. Tables, captions, diagrams, numbered steps, and text boxes may all need adjustment after translation.
            </p>
            <p>
              Stepes combines professional translation with multilingual desktop publishing so the finished document remains clear, balanced, and usable in the target language.
            </p>
            <TextLink href={links.dtp} dark>Multilingual Desktop Publishing Services</TextLink>
          </div>
          <LayoutVisual />
        </div>
        <div className="pf-container">
          <div className="pf-dtp-capabilities">
            {dtpCapabilities.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container pf-native-grid">
          <NativeSourceVisual />
          <div className="pf-native-copy">
            <h2>Have the Native Source? Send It With the PDF.</h2>
            <p className="pf-large-copy">
              If your PDF was exported from an editable application, providing the original source file can improve extraction, editability, translation efficiency, formatting accuracy, and final production quality.
            </p>
            <p>
              The PDF gives Stepes a reliable visual reference for how the finished document should appear. The native source provides editable content and structure that can make multilingual production more efficient.
            </p>
            <p>
              Common native formats include Microsoft Word, Adobe InDesign, Illustrator, PowerPoint, Excel, and FrameMaker. If you have both files, simply provide both. Our team can determine the most appropriate production format.
            </p>
            <p>
              Don’t have the native source? That is not necessarily a problem. We can assess the PDF and recommend the best available workflow.
            </p>
            <TextLink href={links.fileFormats}>Translation File Format Support</TextLink>
          </div>
        </div>
      </section>

      <section className="pf-section pf-blush-section">
        <div className="pf-container">
          <SectionHeading
            title="The Right Translation Workflow for the Content Inside Your PDF"
            intro="A PDF is the container. File condition determines how content should be recovered and rebuilt; content purpose and risk determine the right translation, review, and quality workflow."
          />
          <div className="pf-model-panel">
            {translationModels.map((model) => (
              <article className="pf-model-row" key={model.title}>
                <div><h3>{model.title}</h3></div>
                <div>
                  <strong>Best suited to</strong>
                  <p>{model.fit}</p>
                </div>
                <div><p>{model.text}</p></div>
              </article>
            ))}
          </div>
          <div className="pf-centered-link">
            <TextLink href={links.aiHuman}>AI + Human Translation Workflows</TextLink>
            <TextLink href={links.mtpe}>Machine Translation Post-Editing</TextLink>
          </div>
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container">
          <SectionHeading
            title="PDF Translation for the Documents Businesses Actually Use"
            intro="Stepes translates PDFs across business, technical, regulated, operational, and customer-facing content, with the workflow adapted to the document’s subject matter and production requirements."
          />
          <div className="pf-doc-grid">
            {documentTypes.map((item) => (
              <article className="pf-doc-item" key={item.title}>
                <div className="pf-icon-shell"><Icon type={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.link ? <TextLink href={item.link.href}>{item.link.label}</TextLink> : null}
                  {item.links ? (
                    <div className="pf-inline-links">
                      {item.links.map((link) => <TextLink key={link.href} href={link.href}>{link.label}</TextLink>)}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-soft-pink">
        <div className="pf-container pf-reconstruct-grid">
          <div className="pf-reconstruct-copy">
            <h2>PDF Reconstruction and Editable Source Creation</h2>
            <p className="pf-large-copy">Sometimes the PDF is the only file that remains.</p>
            <p>
              The original Word document may have been lost. An agency may no longer have the InDesign package. A legacy manual may exist only as a finished PDF. A scanned document may predate the organization’s current content systems.
            </p>
            <p>
              When an editable source is unavailable, Stepes can assess whether the PDF can be reconstructed into a practical production format for translation and future use, including Microsoft Word, Adobe InDesign, Illustrator, PowerPoint, or another appropriate environment.
            </p>
            <p>
              Reconstruction feasibility depends on the quality and structure of the PDF, complexity of the design, embedded assets, font availability, image quality, and required deliverable.
            </p>
            <p>
              For appropriate documents, creating an editable multilingual source can also make future updates, revisions, and additional languages easier to manage.
            </p>
          </div>
          <ReconstructionVisual />
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container">
          <SectionHeading
            title="The Output You Need, Not Just Another PDF"
            intro="Stepes works backward from how your translated document will actually be reviewed, edited, distributed, published, or printed."
          />
          <div className="pf-deliverable-panel">
            {deliverables.map(([title, text]) => (
              <div className="pf-deliverable-item" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
            <div className="pf-deliverable-callout">
              <strong>Tell us how the document will be used.</strong>
              <p>We’ll help determine the most appropriate deliverable for the source file and your production requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section pf-enterprise-section">
        <div className="pf-container">
          <SectionHeading
            eyebrow="ENTERPRISE PDF TRANSLATION"
            title="From One PDF to Enterprise Document Libraries"
            intro="PDF translation requirements often grow beyond a single file. Stepes supports individual projects and scalable multilingual document programs with reusable language assets and repeatable production controls."
          />
          <div className="pf-enterprise-flow" aria-label="Enterprise PDF translation lifecycle">
            <div><Icon type="files" /><strong>PDF Library</strong><span>Single files, batches, recurring releases</span></div>
            <span className="pf-flow-arrow" aria-hidden="true">→</span>
            <div><Icon type="language" /><strong>Language Assets</strong><span>Terminology and translation memory</span></div>
            <span className="pf-flow-arrow" aria-hidden="true">→</span>
            <div><Icon type="quality" /><strong>Managed Workflow</strong><span>Translation, review, DTP, QA</span></div>
            <span className="pf-flow-arrow" aria-hidden="true">→</span>
            <div><Icon type="files" /><strong>Multilingual Releases</strong><span>Versions, languages, repeat delivery</span></div>
          </div>
          <div className="pf-enterprise-list">
            {enterpriseCapabilities.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="pf-enterprise-note">Translate one PDF today and build a repeatable multilingual document workflow for tomorrow.</p>
        </div>
      </section>

      <section className="pf-section pf-security-section pf-dark">
        <div className="pf-container">
          <SectionHeading
            title="Secure PDF Translation for Confidential Content"
            intro="Contracts, financial statements, HR documents, medical records, regulatory files, and product documentation can contain sensitive information that requires controlled handling throughout the translation lifecycle."
            dark
          />
          <div className="pf-security-grid">
            <div className="pf-security-summary">
              <div className="pf-security-icon"><Icon type="lock" /></div>
              <h3>Security Follows the Document</h3>
              <p>
                Stepes supports enterprise translation workflows with controlled content handling and appropriate safeguards from project intake through approved delivery.
              </p>
              <p>
                For sensitive or regulated content, tell us your security and handling requirements when requesting a quote so the workflow can be configured appropriately.
              </p>
              <TextLink href={links.security} dark>Security & Compliance at Stepes</TextLink>
            </div>
            <div className="pf-security-controls">
              {securityControls.map(([title, text]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container">
          <SectionHeading
            title="PDF Translation in 100+ Languages"
            intro="Stepes supports professional PDF translation across major global and regional languages, while accounting for the typographic and layout requirements each target language introduces."
          />
          <div className="pf-language-grid">
            {languageRegions.map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="pf-language-note">
            <div className="pf-icon-shell"><Icon type="language" /></div>
            <p>
              Script, font support, text direction, line density, punctuation, and text expansion can all affect the final PDF. Stepes brings linguistic translation and multilingual production together so the deliverable works in the target language, not just in the source layout.
            </p>
          </div>
          <div className="pf-centered-link"><TextLink href={links.languages}>Explore Translation Languages</TextLink></div>
        </div>
      </section>

      <section className="pf-section pf-light">
        <div className="pf-container">
          <SectionHeading
            title="Why Stepes for Professional PDF Translation?"
            intro="A professional PDF translation workflow requires language expertise, file intelligence, document production, and quality control to work together."
          />
          <div className="pf-why-list">
            {whyStepes.map(([title, text]) => (
              <article key={title}>
                <span className="pf-why-marker" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-faq-section">
        <div className="pf-container pf-faq-grid">
          <div className="pf-faq-heading">
            <h2>PDF Translation Services FAQs</h2>
            <p>
              Find answers about scanned PDFs, OCR, source files, formatting, AI translation, deliverables, large document batches, and professional PDF translation pricing.
            </p>
          </div>
          <div className="pf-faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-final-cta">
        <div className="pf-container">
          <div className="pf-final-box">
            <h2>Ready to Translate Your PDF?</h2>
            <p>
              Send Stepes your PDF along with any editable source files you have available. We’ll assess the document structure, language requirements, OCR or extraction needs, formatting complexity, and final deliverable to determine the right workflow.
            </p>
            <p>
              From clean digital PDFs to scanned records, technical manuals, designed brochures, legal documents, financial reports, and enterprise document libraries, Stepes brings professional translation, intelligent file processing, human expertise, and multilingual production together in one managed solution.
            </p>
            <div className="pf-actions pf-actions-center">
              <a className="pf-btn pf-btn-primary" href={links.quote}>Get a Quote</a>
              <a className="pf-btn pf-btn-secondary" href={links.contact}>Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.pdf-wireframe {
  --pf-magenta: #C11D63;
  --pf-magenta-dark: #A71954;
  --pf-burgundy: #7A1542;
  --pf-blush: #FDF2F7;
  --pf-pink-light: #F2A7C6;
  --pf-charcoal-dark: #1B181A;
  --pf-charcoal: #2A2528;
  --pf-ink: #181518;
  --pf-body: #514A4E;
  --pf-muted: #70686D;
  --pf-line: #E7E2E5;
  --pf-soft: #F8F8F8;
  --pf-white: #FFFFFF;
  background: #ffffff;
  color: var(--pf-body);
  font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
.pdf-wireframe * { box-sizing: border-box; }
.pdf-wireframe a,
.pdf-wireframe p,
.pdf-wireframe span,
.pdf-wireframe strong,
.pdf-wireframe h1,
.pdf-wireframe h2,
.pdf-wireframe h3,
.pdf-wireframe summary { overflow-wrap: anywhere; }
.pdf-wireframe h1,
.pdf-wireframe h2,
.pdf-wireframe h3,
.pdf-wireframe p { margin-top: 0; }
.pdf-wireframe h1,
.pdf-wireframe h2,
.pdf-wireframe h3 { color: var(--pf-ink); font-weight: 600; letter-spacing: -0.025em; }
.pdf-wireframe h1 { font-size: 48px; line-height: 1.06; max-width: 690px; margin-bottom: 24px; }
.pdf-wireframe h2 { font-size: 36px; line-height: 1.14; margin-bottom: 20px; }
.pdf-wireframe h3 { font-size: 24px; line-height: 1.24; margin-bottom: 12px; }
.pdf-wireframe p { font-size: 16px; line-height: 1.72; color: var(--pf-body); margin-bottom: 18px; }
.pdf-wireframe a { color: inherit; }
.pf-container { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
.pf-section { position: relative; padding: 96px 0; }
.pf-light { background: var(--pf-soft); }
.pf-soft-pink { background: var(--pf-blush); }
.pf-blush-section { background: var(--pf-blush); }
.pf-dark { background: var(--pf-charcoal-dark); color: #fff; }
.pf-dark h2,
.pf-dark h3 { color: #fff; }
.pf-dark p { color: rgba(255,255,255,.80); }
.pf-eyebrow {
  margin: 0 0 14px;
  font-size: 11px !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
  letter-spacing: .14em !important;
  text-transform: uppercase;
  color: var(--pf-magenta) !important;
}
.pf-eyebrow-dark { color: var(--pf-pink-light) !important; }
.pf-heading { max-width: 840px; margin-bottom: 48px; }
.pf-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
.pf-heading-left { text-align: left; }
.pf-section-intro { max-width: 800px; margin-left: auto; margin-right: auto; font-size: 18px !important; line-height: 1.62 !important; }
.pf-heading-left .pf-section-intro { margin-left: 0; }
.pf-large-copy { font-size: 18px !important; line-height: 1.65 !important; color: #342E32 !important; }
.pf-dark .pf-large-copy { color: rgba(255,255,255,.90) !important; }
.pf-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
.pf-actions-center { justify-content: center; }
.pf-btn {
  min-height: 48px;
  padding: 13px 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.35;
  font-weight: 600;
  text-decoration: none;
  transition: background .2s ease, border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}
.pf-btn-primary,
.pf-btn-primary:link,
.pf-btn-primary:visited,
.pf-btn-primary:hover,
.pf-btn-primary:active,
.pf-btn-primary:focus,
.pf-btn-primary:focus-visible {
  background: var(--pf-magenta);
  border: 1px solid var(--pf-magenta);
  color: #fff !important;
}
.pf-btn-primary:hover { background: var(--pf-magenta-dark); border-color: var(--pf-magenta-dark); transform: translateY(-1px); box-shadow: 0 14px 28px rgba(193,29,99,.18); }
.pf-btn-primary:focus-visible,
.pf-btn-secondary:focus-visible,
.pf-text-link:focus-visible,
.pdf-wireframe summary:focus-visible { outline: 3px solid rgba(193,29,99,.30); outline-offset: 3px; }
.pf-btn-secondary { background: #fff; border: 1px solid #DDD7DA; color: var(--pf-ink) !important; }
.pf-btn-secondary:hover { border-color: #C9C1C5; transform: translateY(-1px); box-shadow: 0 12px 24px rgba(30,24,27,.08); }
.pf-text-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--pf-magenta) !important; font-size: 16px; line-height: 1.45; font-weight: 600; text-decoration: none; }
.pf-text-link:hover .pf-arrow { transform: translateX(3px); }
.pf-text-link-dark { color: var(--pf-pink-light) !important; }
.pf-arrow { display: inline-block; transition: transform .2s ease; }
.pf-icon { width: 24px; height: 24px; color: var(--pf-magenta); flex: 0 0 auto; }
.pf-icon-shell { width: 46px; height: 46px; border-radius: 18px; background: var(--pf-blush); display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }

/* Hero */
.pf-hero { padding: 104px 0 88px; background: radial-gradient(circle at 82% 12%, rgba(253,242,247,.94), transparent 34%), linear-gradient(180deg, #fff 0%, #FAFAFA 100%); }
.pf-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(430px,.88fr); gap: 66px; align-items: center; }
.pf-hero-copy { min-width: 0; }
.pf-hero-lede { max-width: 710px; font-size: 21px !important; line-height: 1.5 !important; color: #342E32 !important; }
.pf-hero-support { max-width: 720px; font-size: 17px !important; line-height: 1.68 !important; }
.pf-hero-art { position: relative; min-height: 510px; border-radius: 30px; border: 1px solid #E7E1E4; background: linear-gradient(180deg, #FFFFFF 0%, #FCFAFB 100%); box-shadow: 0 28px 70px rgba(30,24,27,.10); overflow: hidden; }
.pf-art-glow { position: absolute; border-radius: 50%; filter: blur(.1px); }
.pf-art-glow-a { width: 300px; height: 300px; right: -130px; top: -120px; background: rgba(253,242,247,.96); }
.pf-art-glow-b { width: 220px; height: 220px; left: -110px; bottom: -80px; background: rgba(193,29,99,.06); }
.pf-pdf-source,
.pf-pdf-target { position: absolute; width: 205px; height: 280px; border-radius: 24px; background: #fff; border: 1px solid #E5E0E3; box-shadow: 0 18px 42px rgba(30,24,27,.09); padding: 24px 20px; }
.pf-pdf-source { left: 28px; top: 106px; transform: rotate(-3deg); }
.pf-pdf-target { right: 28px; top: 106px; transform: rotate(3deg); }
.pf-file-tab { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.pf-file-tab span { min-width: 44px; height: 28px; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; background: var(--pf-blush); color: var(--pf-magenta); font-size: 12px; font-weight: 600; }
.pf-file-tab em { font-style: normal; font-size: 13px; font-weight: 600; color: var(--pf-muted); }
.pf-file-tab.target span { background: var(--pf-blush); color: var(--pf-magenta); }
.pf-page-title { height: 12px; width: 70%; border-radius: 6px; background: #2B2629; margin-bottom: 16px; opacity: .9; }
.pf-page-title.target { width: 78%; background: var(--pf-magenta); }
.pf-page-line { height: 7px; border-radius: 7px; background: #E1DDE0; margin-bottom: 9px; }
.pf-page-line.long { width: 100%; }
.pf-page-line.mid { width: 72%; }
.pf-page-line.target { background: #E7DCE1; }
.pf-page-grid { margin-top: 18px; display: grid; grid-template-columns: repeat(2,1fr); gap: 5px; padding: 8px; border-radius: 10px; background: #F7F4F6; }
.pf-page-grid div { height: 20px; border-radius: 5px; background: #E4E0E2; }
.pf-page-grid.target div { background: #EBDDE4; }
.pf-page-graphic { margin-top: 18px; height: 62px; border-radius: 12px; background: linear-gradient(180deg,#FAF8F9,#F1EDEF); display: flex; align-items: flex-end; gap: 8px; padding: 12px; }
.pf-page-graphic span { flex: 1; background: #BDB5BA; border-radius: 5px 5px 2px 2px; }
.pf-page-graphic span:nth-child(1) { height: 42%; }
.pf-page-graphic span:nth-child(2) { height: 70%; }
.pf-page-graphic span:nth-child(3) { height: 92%; }
.pf-page-graphic.target span { background: var(--pf-magenta); opacity: .72; }
.pf-process-rail { position: absolute; left: 50%; top: 94px; transform: translateX(-50%); width: 138px; display: grid; gap: 14px; z-index: 4; }
.pf-process-rail div { border-radius: 18px; background: var(--pf-burgundy); color: #fff; padding: 12px 14px; box-shadow: 0 12px 24px rgba(122,21,66,.16); }
.pf-process-rail strong { display: block; color: var(--pf-pink-light); font-size: 12px; font-weight: 600; margin-bottom: 4px; }
.pf-process-rail span { display: block; font-size: 13px; line-height: 1.35; font-weight: 600; }
.pf-lang-badges { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; }
.pf-lang-badges span { width: 42px; height: 34px; border-radius: 999px; background: #fff; border: 1px solid #E5E0E3; color: var(--pf-magenta); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; }

/* Proof band */
.pf-proof-band { border-top: 1px solid var(--pf-line); border-bottom: 1px solid var(--pf-line); background: #fff; }
.pf-proof-grid { display: grid; grid-template-columns: repeat(3,1fr); }
.pf-proof-grid > div { padding: 24px 26px; border-left: 1px solid var(--pf-line); border-top: 1px solid var(--pf-line); }
.pf-proof-grid > div:nth-child(-n+3) { border-top: 0; }
.pf-proof-grid > div:nth-child(3n+1) { border-left: 0; }
.pf-proof-grid strong { display: block; color: var(--pf-ink); font-size: 17px; line-height: 1.35; font-weight: 600; margin-bottom: 6px; }
.pf-proof-grid span { display: block; color: var(--pf-muted); font-size: 16px; line-height: 1.5; }

/* Editorial overview */
.pf-editorial-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(470px,1.1fr); gap: 72px; align-items: center; }
.pf-editorial-copy p { max-width: 690px; }
.pf-structure-visual { position: relative; min-height: 560px; border-radius: 30px; background: #FAF8F9; border: 1px solid var(--pf-line); overflow: hidden; padding: 34px; }
.pf-structure-page { position: absolute; left: 38px; top: 56px; width: 250px; height: 340px; border-radius: 24px; background: #fff; border: 1px solid #E5E0E3; box-shadow: 0 20px 46px rgba(30,24,27,.09); padding: 26px; z-index: 3; }
.pf-structure-label { display: inline-flex; min-height: 30px; padding: 6px 10px; border-radius: 999px; background: var(--pf-blush); color: var(--pf-magenta); font-size: 13px; line-height: 1.3; font-weight: 600; }
.pf-structure-title { height: 14px; width: 64%; background: #2B2629; border-radius: 7px; margin: 24px 0 17px; }
.pf-structure-text i { display: block; height: 7px; border-radius: 7px; background: #E1DDE0; margin-bottom: 9px; }
.pf-structure-text i:nth-child(2) { width: 92%; }
.pf-structure-text i:nth-child(3) { width: 68%; }
.pf-structure-table { display: grid; grid-template-columns: repeat(3,1fr); gap: 4px; margin-top: 22px; padding: 7px; border-radius: 10px; background: #F7F4F6; }
.pf-structure-table b { height: 26px; background: #E4E0E2; border-radius: 4px; }
.pf-structure-chart { display: flex; align-items: flex-end; gap: 8px; height: 68px; margin-top: 18px; padding: 12px; border-radius: 12px; background: var(--pf-blush); }
.pf-structure-chart i { flex: 1; border-radius: 5px 5px 2px 2px; background: var(--pf-magenta); opacity: .72; }
.pf-structure-chart i:nth-child(1) { height: 48%; }
.pf-structure-chart i:nth-child(2) { height: 80%; }
.pf-structure-chart i:nth-child(3) { height: 62%; }
.pf-layer-stack { position: absolute; right: 38px; top: 78px; width: 330px; display: grid; gap: 14px; z-index: 2; }
.pf-layer-stack div { min-height: 86px; padding: 18px 18px 18px 28px; border-radius: 20px; background: #fff; border: 1px solid #E5E0E3; box-shadow: 0 12px 28px rgba(30,24,27,.05); }
.pf-layer-stack div:nth-child(2) { transform: translateX(12px); }
.pf-layer-stack div:nth-child(3) { transform: translateX(24px); }
.pf-layer-stack div:nth-child(4) { transform: translateX(36px); }
.pf-layer-stack strong { display: block; color: var(--pf-ink); font-size: 17px; line-height: 1.35; font-weight: 600; margin-bottom: 5px; }
.pf-layer-stack span { display: block; color: var(--pf-muted); font-size: 16px; line-height: 1.45; }

/* PDF types */
.pf-type-panel { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--pf-line); border-bottom: 1px solid var(--pf-line); }
.pf-type-item { display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding: 32px 30px; border-top: 1px solid var(--pf-line); }
.pf-type-item:nth-child(-n+2) { border-top: 0; }
.pf-type-item:nth-child(even) { border-left: 1px solid var(--pf-line); }
.pf-type-item h3 { margin-bottom: 10px; }
.pf-type-item p { margin-bottom: 10px; }
.pf-type-note { color: var(--pf-muted) !important; }

/* Workflow */
.pf-workflow-section { background: #fff; }
.pf-workflow-grid { display: grid; grid-template-columns: minmax(300px,.62fr) minmax(0,1.38fr); gap: 72px; align-items: start; }
.pf-workflow-copy { position: sticky; top: 32px; }
.pf-workflow-copy p { max-width: 440px; }
.pf-workflow-list { border-top: 1px solid var(--pf-line); border-bottom: 1px solid var(--pf-line); }
.pf-workflow-row { display: grid; grid-template-columns: 66px 1fr; gap: 22px; padding: 29px 0; border-top: 1px solid var(--pf-line); }
.pf-workflow-row:first-child { border-top: 0; }
.pf-step-number { color: var(--pf-magenta); font-size: 18px; line-height: 1.35; font-weight: 600; padding-top: 2px; }
.pf-workflow-row h3 { margin-bottom: 9px; }
.pf-workflow-row p { max-width: 760px; margin-bottom: 7px; }
.pf-workflow-meta { color: var(--pf-muted); font-size: 16px; line-height: 1.5; font-weight: 600; }

/* DTP */
.pf-dtp-section { padding-bottom: 88px; }
.pf-dtp-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(460px,1.1fr); gap: 64px; align-items: center; }
.pf-dtp-copy p { max-width: 690px; }
.pf-layout-visual { border-radius: 30px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); padding: 26px; box-shadow: 0 24px 56px rgba(0,0,0,.18); }
.pf-layout-header { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; padding: 0 6px 14px; color: rgba(255,255,255,.76); font-size: 16px; line-height: 1.4; font-weight: 600; }
.pf-layout-pages { display: grid; grid-template-columns: 1fr 36px 1fr; gap: 14px; align-items: center; }
.pf-layout-page { min-height: 330px; border-radius: 22px; background: #fff; padding: 24px; }
.pf-layout-page > strong { display: inline-flex; min-width: 38px; height: 30px; border-radius: 999px; align-items: center; justify-content: center; background: var(--pf-blush); color: var(--pf-magenta); font-size: 13px; font-weight: 600; }
.pf-layout-page.target > strong { background: var(--pf-blush); color: var(--pf-magenta); }
.pf-layout-page i { display: block; height: 8px; border-radius: 8px; background: #E1DCE0; margin-top: 11px; }
.pf-layout-page i.title { height: 14px; width: 72%; margin: 23px 0 16px; background: #2B2629; }
.pf-layout-page.target i.title { width: 88%; background: var(--pf-magenta); }
.pf-layout-page i.short { width: 66%; }
.pf-layout-page .table { margin-top: 20px; display: grid; grid-template-columns: repeat(2,1fr); gap: 5px; padding: 7px; border-radius: 10px; background: #F7F4F6; }
.pf-layout-page .table span { height: 28px; border-radius: 4px; background: #E4DFE2; }
.pf-layout-page .callout { margin-top: 19px; min-height: 46px; display: flex; align-items: center; padding: 10px 12px; border-left: 3px solid var(--pf-magenta); background: var(--pf-blush); color: var(--pf-ink); font-size: 16px; line-height: 1.4; font-weight: 600; }
.pf-layout-page.target .callout { border-left-color: var(--pf-magenta); background: var(--pf-blush); }
.pf-layout-arrow { color: var(--pf-pink-light); text-align: center; font-size: 28px; font-weight: 600; }
.pf-layout-status { display: grid; grid-template-columns: repeat(4,1fr); margin-top: 18px; border-top: 1px solid rgba(255,255,255,.12); }
.pf-layout-status span { padding: 17px 10px 0; color: rgba(255,255,255,.78); font-size: 15px; line-height: 1.4; text-align: center; }
.pf-dtp-capabilities { margin-top: 58px; display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid rgba(255,255,255,.14); }
.pf-dtp-capabilities > div { padding: 26px 28px 0 0; }
.pf-dtp-capabilities strong { display: block; color: #fff; font-size: 18px; line-height: 1.35; font-weight: 600; margin-bottom: 8px; }
.pf-dtp-capabilities p { font-size: 16px; line-height: 1.6; margin-bottom: 0; }

/* Native source */
.pf-native-grid { display: grid; grid-template-columns: minmax(470px,1.05fr) minmax(0,.95fr); gap: 68px; align-items: center; }
.pf-native-copy p { max-width: 690px; }
.pf-native-visual { position: relative; min-height: 500px; border-radius: 30px; border: 1px solid var(--pf-line); background: #FAFAFA; overflow: hidden; padding: 34px; }
.pf-native-pdf { position: absolute; left: 42px; top: 74px; width: 210px; height: 270px; border-radius: 24px; background: #fff; border: 1px solid #E5E0E3; box-shadow: 0 18px 40px rgba(30,24,27,.07); padding: 26px; }
.pf-native-pdf > span { display: inline-flex; min-width: 44px; height: 29px; border-radius: 999px; align-items: center; justify-content: center; background: var(--pf-blush); color: var(--pf-magenta); font-size: 12px; font-weight: 600; }
.pf-native-pdf strong { display: block; color: var(--pf-ink); font-size: 18px; line-height: 1.35; margin: 24px 0 18px; }
.pf-native-pdf i { display: block; height: 8px; background: #E1DDE0; border-radius: 8px; margin-top: 10px; }
.pf-native-pdf i:nth-of-type(2) { width: 90%; }
.pf-native-pdf i:nth-of-type(3) { width: 65%; }
.pf-native-plus { position: absolute; left: 270px; top: 182px; width: 46px; height: 46px; border-radius: 50%; background: var(--pf-burgundy); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 26px; }
.pf-source-stack { position: absolute; right: 42px; top: 54px; width: 290px; display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.pf-source-stack div { min-height: 96px; border-radius: 20px; background: #fff; border: 1px solid #E5E0E3; padding: 16px; box-shadow: 0 10px 24px rgba(30,24,27,.05); }
.pf-source-stack span { display: block; color: var(--pf-magenta); font-size: 13px; font-weight: 600; margin-bottom: 10px; }
.pf-source-stack strong { display: block; color: var(--pf-ink); font-size: 16px; line-height: 1.35; font-weight: 600; }
.pf-native-message { position: absolute; left: 44px; right: 44px; bottom: 34px; min-height: 72px; border-radius: 20px; background: #2B2629; color: #fff; padding: 18px 22px; display: flex; align-items: center; font-size: 16px; line-height: 1.5; font-weight: 600; }

/* Translation models */
.pf-model-panel { border-top: 1px solid var(--pf-line); border-bottom: 1px solid var(--pf-line); }
.pf-model-row { display: grid; grid-template-columns: .75fr .95fr 1.2fr; gap: 30px; padding: 28px 0; border-top: 1px solid var(--pf-line); align-items: start; }
.pf-model-row:first-child { border-top: 0; }
.pf-model-row h3 { margin-bottom: 0; }
.pf-model-row strong { display: block; color: var(--pf-ink); font-size: 16px; line-height: 1.4; font-weight: 600; margin-bottom: 7px; }
.pf-model-row p { margin-bottom: 0; }
.pf-centered-link { margin-top: 30px; display: flex; justify-content: center; flex-wrap: wrap; gap: 14px 28px; }

/* Document types */
.pf-doc-grid { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--pf-line); }
.pf-doc-item { display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding: 30px 30px 30px 0; border-bottom: 1px solid var(--pf-line); }
.pf-doc-item:nth-child(even) { padding-left: 30px; padding-right: 0; border-left: 1px solid var(--pf-line); }
.pf-doc-item h3 { margin-bottom: 12px; }
.pf-doc-item p { margin-bottom: 9px; }
.pf-inline-links { display: flex; flex-wrap: wrap; gap: 4px 20px; }

/* Reconstruction */
.pf-reconstruct-grid { display: grid; grid-template-columns: minmax(0,.95fr) minmax(470px,1.05fr); gap: 68px; align-items: center; }
.pf-reconstruct-copy p { max-width: 700px; }
.pf-reconstruct-visual { min-height: 490px; border-radius: 30px; background: #fff; border: 1px solid #F0DCE6; box-shadow: 0 20px 50px rgba(122,21,66,.07); position: relative; overflow: hidden; padding: 30px; }
.pf-reconstruct-file { position: absolute; left: 40px; top: 92px; width: 180px; height: 240px; border-radius: 22px; border: 1px solid #E3DCE1; background: #fff; padding: 22px; box-shadow: 0 14px 32px rgba(30,24,27,.06); }
.pf-reconstruct-file span { display: inline-flex; padding: 6px 10px; border-radius: 999px; background: var(--pf-blush); color: var(--pf-magenta); font-size: 13px; font-weight: 600; margin-bottom: 28px; }
.pf-reconstruct-file i { display: block; height: 8px; border-radius: 8px; background: #E1DDE0; margin-bottom: 11px; }
.pf-reconstruct-file i:nth-of-type(2) { width: 88%; }
.pf-reconstruct-file i:nth-of-type(3) { width: 66%; }
.pf-reconstruct-path { position: absolute; left: 240px; top: 74px; width: 200px; display: grid; gap: 14px; }
.pf-reconstruct-path div { border-radius: 18px; background: #2B2629; padding: 16px; color: #fff; }
.pf-reconstruct-path span { display: block; color: var(--pf-pink-light); font-size: 13px; font-weight: 600; margin-bottom: 4px; }
.pf-reconstruct-path strong { display: block; color: #fff; font-size: 16px; line-height: 1.4; font-weight: 600; }
.pf-reconstruct-output { position: absolute; right: 38px; top: 70px; width: 170px; display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.pf-reconstruct-output div { height: 90px; border-radius: 20px; border: 1px solid #E5E0E3; background: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 24px rgba(30,24,27,.05); }
.pf-reconstruct-output span { color: var(--pf-magenta); font-size: 14px; font-weight: 600; }
.pf-reconstruct-visual:after { content: "Editable production files can support future language updates and revisions."; position: absolute; left: 40px; right: 40px; bottom: 34px; min-height: 70px; border-radius: 18px; background: var(--pf-blush); color: var(--pf-burgundy); padding: 18px 20px; display: flex; align-items: center; font-size: 16px; line-height: 1.5; font-weight: 600; }

/* Deliverables */
.pf-deliverable-panel { display: grid; grid-template-columns: repeat(2,1fr); border-radius: 30px; border: 1px solid var(--pf-line); background: #fff; overflow: hidden; box-shadow: 0 14px 36px rgba(30,24,27,.05); }
.pf-deliverable-item { padding: 30px; border-top: 1px solid var(--pf-line); border-left: 1px solid var(--pf-line); }
.pf-deliverable-item:nth-child(-n+2) { border-top: 0; }
.pf-deliverable-item:nth-child(odd) { border-left: 0; }
.pf-deliverable-item strong,
.pf-deliverable-callout strong { display: block; color: var(--pf-ink); font-size: 20px; line-height: 1.35; font-weight: 600; margin-bottom: 10px; }
.pf-deliverable-item p,
.pf-deliverable-callout p { margin-bottom: 0; }
.pf-deliverable-callout { grid-column: 1 / -1; padding: 30px; border-top: 1px solid #EFD7E2; background: var(--pf-blush); }
.pf-deliverable-callout strong { color: var(--pf-burgundy); }

/* Enterprise */
.pf-enterprise-section { background: var(--pf-blush); }
.pf-enterprise-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 12px; align-items: center; margin-bottom: 44px; }
.pf-enterprise-flow > div { min-height: 158px; border-radius: 24px; border: 1px solid var(--pf-line); background: #fff; padding: 24px; text-align: center; }
.pf-enterprise-flow .pf-icon { width: 30px; height: 30px; margin-bottom: 14px; }
.pf-enterprise-flow strong { display: block; color: var(--pf-ink); font-size: 18px; line-height: 1.35; font-weight: 600; margin-bottom: 8px; }
.pf-enterprise-flow span:not(.pf-flow-arrow) { display: block; color: var(--pf-muted); font-size: 16px; line-height: 1.45; }
.pf-flow-arrow { color: var(--pf-magenta); font-size: 22px; font-weight: 600; }
.pf-enterprise-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 34px; border-top: 1px solid var(--pf-line); }
.pf-enterprise-list > div { padding: 25px 0; border-bottom: 1px solid var(--pf-line); }
.pf-enterprise-list strong { display: block; color: var(--pf-ink); font-size: 18px; line-height: 1.35; font-weight: 600; margin-bottom: 8px; }
.pf-enterprise-list p { margin-bottom: 0; }
.pf-enterprise-note { max-width: 760px; margin: 32px auto 0 !important; text-align: center; font-size: 18px !important; line-height: 1.6 !important; color: var(--pf-ink) !important; font-weight: 600; }

/* Security */
.pf-security-section { background: var(--pf-charcoal-dark); }
.pf-security-grid { display: grid; grid-template-columns: minmax(300px,.72fr) minmax(0,1.28fr); gap: 58px; align-items: start; }
.pf-security-summary { border-radius: 28px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.13); padding: 30px; }
.pf-security-icon { width: 52px; height: 52px; border-radius: 18px; background: rgba(242,167,198,.14); display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
.pf-security-icon .pf-icon { color: var(--pf-pink-light); width: 28px; height: 28px; }
.pf-security-summary h3 { margin-bottom: 12px; }
.pf-security-controls { border-top: 1px solid rgba(255,255,255,.14); }
.pf-security-controls > div { padding: 22px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
.pf-security-controls strong { display: block; color: #fff; font-size: 18px; line-height: 1.35; font-weight: 600; margin-bottom: 7px; }
.pf-security-controls p { margin-bottom: 0; }

/* Languages */
.pf-language-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--pf-line); border-bottom: 1px solid var(--pf-line); }
.pf-language-grid > div { padding: 30px 26px; border-left: 1px solid var(--pf-line); }
.pf-language-grid > div:first-child { border-left: 0; }
.pf-language-grid h3 { margin-bottom: 12px; }
.pf-language-grid p { margin-bottom: 0; }
.pf-language-note { max-width: 920px; margin: 36px auto 0; display: grid; grid-template-columns: 46px 1fr; gap: 18px; align-items: start; }
.pf-language-note p { margin-bottom: 0; }

/* Why Stepes */
.pf-why-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 40px; border-top: 1px solid var(--pf-line); }
.pf-why-list article { display: grid; grid-template-columns: 22px 1fr; gap: 16px; padding: 28px 0; border-bottom: 1px solid var(--pf-line); }
.pf-why-marker { width: 18px; height: 3px; border-radius: 999px; background: var(--pf-magenta); margin-top: 11px; }
.pf-why-list h3 { margin-bottom: 8px; }
.pf-why-list p { margin-bottom: 0; }

/* FAQ */
.pf-faq-grid { display: grid; grid-template-columns: minmax(280px,.48fr) minmax(0,1fr); gap: 64px; align-items: start; }
.pf-faq-heading { position: sticky; top: 32px; }
.pf-faq-heading p { max-width: 420px; font-size: 17px; }
.pf-faq-panel { border-radius: 30px; border: 1px solid var(--pf-line); background: #fff; overflow: hidden; }
.pdf-wireframe details { border-top: 1px solid var(--pf-line); }
.pdf-wireframe details:first-child { border-top: 0; }
.pdf-wireframe summary { position: relative; cursor: pointer; list-style: none; padding: 24px 62px 24px 28px; color: var(--pf-ink); font-size: 18px; line-height: 1.42; font-weight: 600; }
.pdf-wireframe summary::-webkit-details-marker { display: none; }
.pdf-wireframe summary:after { content: "+"; position: absolute; right: 28px; top: 23px; color: var(--pf-magenta); font-size: 25px; line-height: 1; font-weight: 600; }
.pdf-wireframe details[open] summary:after { content: "–"; }
.pdf-wireframe details > p { max-width: 840px; margin-bottom: 0; padding: 0 28px 26px; font-size: 16px; line-height: 1.7; }

/* Final CTA */
.pf-final-cta { padding: 96px 0 112px; background: #fff; }
.pf-final-box { border-radius: 34px; border: 1px solid #EFD7E2; background: linear-gradient(135deg,var(--pf-blush) 0%,#fff 68%); padding: 64px 56px; text-align: center; box-shadow: 0 22px 54px rgba(193,29,99,.07); }
.pf-final-box h2 { max-width: 760px; margin-left: auto; margin-right: auto; }
.pf-final-box p { max-width: 850px; margin-left: auto; margin-right: auto; font-size: 18px; line-height: 1.62; }

@media (max-width: 1180px) {
  .pf-container { padding-left: 40px; padding-right: 40px; }
  .pf-hero-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.86fr); gap: 44px; }
  .pf-pdf-source { left: 20px; }
  .pf-pdf-target { right: 20px; }
  .pf-process-rail { width: 122px; }
  .pf-structure-visual { min-height: 620px; }
  .pf-structure-page { left: 30px; top: 48px; }
  .pf-layer-stack { right: 28px; top: 246px; width: 360px; }
  .pf-layer-stack div:nth-child(n) { transform: none; }
  .pf-dtp-grid,
  .pf-native-grid,
  .pf-reconstruct-grid { gap: 48px; }
  .pf-native-pdf { left: 28px; }
  .pf-native-plus { left: 246px; }
  .pf-source-stack { right: 28px; width: 260px; }
  .pf-reconstruct-file { left: 28px; }
  .pf-reconstruct-path { left: 222px; }
  .pf-reconstruct-output { right: 28px; width: 150px; }
}

@media (max-width: 1024px) {
  .pf-container { padding-left: 40px; padding-right: 40px; }
  .pf-hero-grid,
  .pf-editorial-grid,
  .pf-dtp-grid,
  .pf-native-grid,
  .pf-reconstruct-grid,
  .pf-security-grid { grid-template-columns: 1fr; gap: 48px; }
  .pf-hero-grid { max-width: 900px; }
  .pf-hero-copy { text-align: center; }
  .pf-hero-copy h1,
  .pf-hero-copy p { margin-left: auto; margin-right: auto; }
  .pf-hero-copy .pf-actions { justify-content: center; }
  .pf-hero-art { min-height: 530px; }
  .pf-editorial-copy { text-align: left; }
  .pf-editorial-copy h2,
  .pf-editorial-copy .pf-large-copy { text-align: center; margin-left: auto; margin-right: auto; }
  .pf-editorial-copy p:not(.pf-large-copy) { margin-left: 0; margin-right: 0; }
  .pf-editorial-copy .pf-text-link { justify-content: flex-start; }
  .pf-workflow-grid { grid-template-columns: minmax(270px,.55fr) minmax(0,1fr); gap: 46px; }
  .pf-dtp-copy,
  .pf-native-copy,
  .pf-reconstruct-copy { text-align: left; }
  .pf-dtp-copy .pf-eyebrow,
  .pf-dtp-copy h2,
  .pf-dtp-copy .pf-large-copy,
  .pf-native-copy h2,
  .pf-native-copy .pf-large-copy,
  .pf-reconstruct-copy h2,
  .pf-reconstruct-copy .pf-large-copy { text-align: center; margin-left: auto; margin-right: auto; max-width: 760px; }
  .pf-dtp-copy p:not(.pf-eyebrow):not(.pf-large-copy),
  .pf-native-copy p:not(.pf-large-copy),
  .pf-reconstruct-copy p:not(.pf-large-copy) { margin-left: 0; margin-right: 0; }
  .pf-dtp-copy .pf-text-link,
  .pf-native-copy .pf-text-link { justify-content: flex-start; }
  .pf-model-row { grid-template-columns: .8fr 1fr; }
  .pf-model-row > div:last-child { grid-column: 1 / -1; }
  .pf-enterprise-flow { grid-template-columns: repeat(2,1fr); gap: 16px; }
  .pf-flow-arrow { display: none; }
  .pf-security-summary { max-width: 760px; margin: 0 auto; }
  .pf-language-grid { grid-template-columns: repeat(2,1fr); }
  .pf-language-grid > div:nth-child(odd) { border-left: 0; }
  .pf-language-grid > div:nth-child(n+3) { border-top: 1px solid var(--pf-line); }
}

@media (max-width: 768px) {
  .pf-container { padding-left: 24px; padding-right: 24px; }
  .pf-section { padding: 72px 0; }
  .pf-hero { padding: 88px 0 72px; }
  .pdf-wireframe h1 { font-size: 42px; }
  .pdf-wireframe h2 { font-size: 32px; }
  .pdf-wireframe h3 { font-size: 22px; }
  .pf-heading { margin-bottom: 38px; }
  .pf-section-intro,
  .pf-large-copy,
  .pf-hero-lede,
  .pf-final-box p { font-size: 18px !important; }
  .pf-hero-support { font-size: 17px !important; }
  .pf-proof-grid { grid-template-columns: repeat(2,1fr); }
  .pf-proof-grid > div:nth-child(-n+3) { border-top: 1px solid var(--pf-line); }
  .pf-proof-grid > div:nth-child(-n+2) { border-top: 0; }
  .pf-proof-grid > div:nth-child(3n+1) { border-left: 1px solid var(--pf-line); }
  .pf-proof-grid > div:nth-child(odd) { border-left: 0; }
  .pf-type-panel,
  .pf-doc-grid,
  .pf-deliverable-panel,
  .pf-enterprise-list,
  .pf-why-list { grid-template-columns: 1fr; }
  .pf-type-item:nth-child(2) { border-top: 1px solid var(--pf-line); }
  .pf-type-item:nth-child(even) { border-left: 0; }
  .pf-doc-item,
  .pf-doc-item:nth-child(even) { padding: 28px 0; border-left: 0; }
  .pf-deliverable-item,
  .pf-deliverable-item:nth-child(-n+2),
  .pf-deliverable-item:nth-child(odd) { border-left: 0; border-top: 1px solid var(--pf-line); }
  .pf-deliverable-item:first-child { border-top: 0; }
  .pf-workflow-grid { grid-template-columns: 1fr; gap: 34px; }
  .pf-workflow-copy { position: static; }
  .pf-workflow-copy h2,
  .pf-workflow-copy .pf-eyebrow,
  .pf-workflow-copy p { text-align: left; }
  .pf-dtp-capabilities { grid-template-columns: repeat(2,1fr); }
  .pf-model-row { grid-template-columns: 1fr; gap: 14px; }
  .pf-model-row > div:last-child { grid-column: auto; }
  .pf-native-visual { min-height: 560px; }
  .pf-native-pdf { left: 28px; top: 62px; }
  .pf-native-plus { left: 250px; top: 168px; }
  .pf-source-stack { right: 28px; top: 44px; width: 260px; }
  .pf-reconstruct-visual { min-height: 590px; }
  .pf-reconstruct-file { left: 28px; top: 62px; }
  .pf-reconstruct-path { left: 226px; top: 52px; }
  .pf-reconstruct-output { left: 28px; right: 28px; top: 330px; width: auto; grid-template-columns: repeat(4,1fr); }
  .pf-reconstruct-output div { height: 74px; }
  .pf-reconstruct-visual:after { bottom: 28px; }
  .pf-language-grid { grid-template-columns: 1fr; }
  .pf-language-grid > div { border-left: 0 !important; border-top: 1px solid var(--pf-line); }
  .pf-language-grid > div:first-child { border-top: 0; }
  .pf-faq-grid { grid-template-columns: 1fr; gap: 36px; }
  .pf-faq-heading { position: static; text-align: left; }
  .pf-final-box { padding: 48px 32px; }
}

@media (min-width: 641px) and (max-width: 820px) {
  .pf-proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pf-proof-grid > div { min-width: 0; }
  .pf-enterprise-flow > div { min-width: 0; }
  .pf-model-row > div { min-width: 0; }
  .pf-layout-page { min-width: 0; }
}

@media (max-width: 640px) {
  .pf-container { padding-left: 20px; padding-right: 20px; }
  .pf-section { padding: 68px 0; }
  .pf-hero { padding: 76px 0 64px; }
  .pdf-wireframe h1 { font-size: 38px; }
  .pdf-wireframe h2 { font-size: 30px; }
  .pdf-wireframe h3 { font-size: 20px; }
  .pdf-wireframe p,
  .pf-hero-support,
  .pf-proof-grid span,
  .pf-type-note,
  .pf-workflow-meta,
  .pf-model-row strong,
  .pf-enterprise-flow span:not(.pf-flow-arrow),
  .pf-language-grid p,
  .pdf-wireframe details > p { font-size: 16px !important; }
  .pf-heading-center { text-align: center; }
  .pf-section-intro { max-width: 100%; }
  .pf-actions,
  .pf-actions-center { width: 100%; flex-direction: column; align-items: stretch; }
  .pf-btn { width: 100%; min-height: 50px; }
  .pf-hero-art { min-height: 680px; border-radius: 24px; }
  .pf-pdf-source { left: 22px; top: 72px; width: calc(100% - 44px); max-width: none; height: 236px; transform: none; }
  .pf-process-rail { left: 22px; right: 22px; top: 326px; transform: none; width: auto; grid-template-columns: repeat(2,1fr); gap: 10px; }
  .pf-pdf-target { left: 22px; right: 22px; top: 456px; width: auto; height: 188px; transform: none; }
  .pf-pdf-target .pf-page-grid,
  .pf-pdf-target .pf-page-graphic { display: none; }
  .pf-lang-badges { display: none; }
  .pf-proof-grid { grid-template-columns: 1fr; }
  .pf-proof-grid > div { border-left: 0 !important; border-top: 1px solid var(--pf-line) !important; padding: 22px 0; }
  .pf-proof-grid > div:first-child { border-top: 0 !important; }
  .pf-editorial-copy { text-align: left; }
  .pf-editorial-copy h2,
  .pf-editorial-copy .pf-large-copy { text-align: center; }
  .pf-editorial-copy .pf-text-link { justify-content: flex-start; }
  .pf-structure-visual { min-height: auto; padding: 22px; display: grid; gap: 16px; }
  .pf-structure-page,
  .pf-layer-stack { position: static; width: auto; }
  .pf-structure-page { height: auto; min-height: 330px; }
  .pf-layer-stack { display: grid; gap: 10px; }
  .pf-layer-stack div { min-height: auto; }
  .pf-type-item { grid-template-columns: 1fr; padding: 26px 0; }
  .pf-type-item .pf-icon-shell { margin-bottom: 2px; }
  .pf-workflow-row { grid-template-columns: 1fr; gap: 8px; }
  .pf-workflow-copy { text-align: left; }
  .pf-workflow-copy p { max-width: none; }
  .pf-dtp-copy { text-align: left; }
  .pf-dtp-copy .pf-eyebrow,
  .pf-dtp-copy h2,
  .pf-dtp-copy .pf-large-copy { text-align: center; }
  .pf-layout-visual { padding: 20px; border-radius: 24px; }
  .pf-layout-header { display: none; }
  .pf-layout-pages { grid-template-columns: 1fr; }
  .pf-layout-arrow { transform: rotate(90deg); }
  .pf-layout-status { grid-template-columns: repeat(2,1fr); }
  .pf-dtp-capabilities { grid-template-columns: 1fr; }
  .pf-dtp-capabilities > div { padding-right: 0; }
  .pf-native-visual { min-height: auto; padding: 22px; display: grid; gap: 14px; }
  .pf-native-pdf,
  .pf-native-plus,
  .pf-source-stack,
  .pf-native-message { position: static; width: auto; }
  .pf-native-pdf { height: auto; min-height: 210px; }
  .pf-native-plus { width: 44px; height: 44px; margin: 0 auto; }
  .pf-source-stack { grid-template-columns: repeat(2,1fr); }
  .pf-native-message { min-height: 76px; }
  .pf-native-copy { text-align: left; }
  .pf-native-copy h2,
  .pf-native-copy .pf-large-copy { text-align: center; }
  .pf-native-copy .pf-text-link { justify-content: flex-start; }
  .pf-model-row { padding: 25px 0; }
  .pf-doc-item { grid-template-columns: 1fr; gap: 14px; }
  .pf-inline-links { display: grid; gap: 2px; }
  .pf-reconstruct-copy { text-align: left; }
  .pf-reconstruct-copy h2,
  .pf-reconstruct-copy .pf-large-copy { text-align: center; }
  .pf-reconstruct-visual { min-height: auto; padding: 22px; display: grid; gap: 14px; }
  .pf-reconstruct-file,
  .pf-reconstruct-path,
  .pf-reconstruct-output,
  .pf-reconstruct-visual:after { position: static; width: auto; }
  .pf-reconstruct-file { height: auto; min-height: 200px; }
  .pf-reconstruct-output { grid-template-columns: repeat(2,1fr); }
  .pf-reconstruct-visual:after { content: "Editable production files can support future language updates and revisions."; min-height: 76px; }
  .pf-deliverable-panel { border-radius: 24px; }
  .pf-enterprise-flow { grid-template-columns: 1fr; }
  .pf-enterprise-flow > div { min-height: auto; }
  .pf-enterprise-note { text-align: left; font-size: 18px !important; }
  .pf-security-summary { padding: 24px; border-radius: 24px; }
  .pf-security-controls > div { padding: 20px 0; }
  .pf-language-note { grid-template-columns: 1fr; text-align: left; }
  .pf-centered-link { justify-content: center; }
  .pf-why-list article { grid-template-columns: 22px 1fr; gap: 12px; }
  .pf-faq-heading { text-align: left; }
  .pdf-wireframe summary { padding: 22px 54px 22px 22px; font-size: 17px; }
  .pdf-wireframe summary:after { right: 22px; top: 21px; }
  .pdf-wireframe details > p { padding: 0 22px 24px; }
  .pf-final-box { border-radius: 26px; padding: 38px 24px; }
}

@media (max-width: 360px) {
  .pf-container { padding-left: 20px; padding-right: 20px; }
  .pf-hero-art { min-height: 700px; }
  .pf-process-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pf-pdf-target { top: 470px; }
  .pf-source-stack { grid-template-columns: 1fr; }
}
`;

