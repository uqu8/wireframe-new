import React, { useMemo, useState } from "react";

const ChevronRight = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const FlowArrow = () => (
  <div className="ff-flow-arrow" aria-hidden="true">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M6 17h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M20 11l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12.5l4.25 4.25L19 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FaqToggleIcon = ({ open }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3.5 9h11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {!open && (
      <path
        d="M9 3.5v11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const StructureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5h14M5 12h14M5 19h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="3" cy="5" r="1" fill="currentColor" />
    <circle cx="3" cy="12" r="1" fill="currentColor" />
    <circle cx="3" cy="19" r="1" fill="currentColor" />
  </svg>
);

const LogicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 6h10v4H7zM4 16h6v3H4zM14 16h6v3h-6z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 10v3M7 13h10M7 13v3M17 13v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PresentationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 9h16M9 9v11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 13h5M12 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ContextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5h14v10H9l-4 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);



const LanguageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5h10v8H8l-4 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 9h10v8h-4l-4 3v-3h-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const FunctionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 7h14M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="7" r="2.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="17" r="2.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DeliveryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 7.5L12 4l7 3.5v9L12 20l-7-3.5v-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5.5 7.5L12 11l6.5-3.5M12 11v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const sourceFormats = ["DOCX", "PDF", "INDD", "JSON", "XLIFF", "SRT"];

const workflowSteps = [
  "Analyze file structure",
  "Protect technical elements",
  "Translate and review",
  "Validate multilingual output",
];

const outputItems = [
  "Editable business files",
  "Production-ready resources",
  "Formatted multilingual layouts",
  "Timed subtitle deliverables",
];

const trustItems = [
  {
    title: "100+ Languages",
    text: "Professional language support for global business, software, technical content, and regulated industries.",
  },
  {
    title: "AI + Human Workflows",
    text: "Flexible translation workflows combining automation, terminology, translation memory, and professional review.",
  },
  {
    title: "File Engineering + DTP",
    text: "Technical preparation, content extraction, file reconstruction, multilingual formatting, and visual QA.",
  },
  {
    title: "ISO-Certified Quality",
    text: "Quality processes supported by ISO 17100, ISO 9001, and ISO 13485 certifications.",
  },
];

const fileLayers = [
  {
    icon: <StructureIcon />,
    title: "Structure",
    text: "Styles, tables, sections, worksheets, slides, topics, and reusable content that organize the file.",
  },
  {
    icon: <LogicIcon />,
    title: "Logic",
    text: "Tags, keys, variables, formulas, links, timing data, and other elements that must continue to work.",
  },
  {
    icon: <PresentationIcon />,
    title: "Presentation",
    text: "Typography, spacing, page flow, text frames, diagrams, and visual hierarchy that shape the final experience.",
  },
  {
    icon: <ContextIcon />,
    title: "Context",
    text: "Comments, notes, screenshots, metadata, and surrounding content that help linguists interpret meaning correctly.",
  },
];


const formatCategories = [
  "Business Documents",
  "PDFs and Scans",
  "Design and Publishing",
  "Technical Content",
  "Software and Web",
  "Localization Exchange",
  "Engineering",
  "Multimedia",
  "eLearning",
];

const formatDirectory = [
  {
    category: "Business Documents",
    name: "Microsoft Word",
    extensions: "DOC, DOCX, DOCM, DOTX, RTF",
    handling: "Preserves headings, tables, lists, links, notes, and agreed document formatting.",
  },
  {
    category: "Business Documents",
    name: "Microsoft PowerPoint",
    extensions: "PPT, PPTX, PPTM, PPSX",
    handling: "Supports slide text, notes, charts, diagrams, labels, and multilingual layout review.",
  },
  {
    category: "Business Documents",
    name: "Microsoft Excel",
    extensions: "XLS, XLSX, XLSM, CSV, TSV",
    handling: "Separates translatable cells from formulas, identifiers, codes, and reference data.",
  },
  {
    category: "Business Documents",
    name: "OpenDocument",
    extensions: "ODT, ODS, ODP",
    handling: "Processes text, spreadsheet, and presentation content for multilingual delivery.",
  },
  {
    category: "Business Documents",
    name: "Google Workspace Exports",
    extensions: "DOCX, PPTX, XLSX, PDF",
    handling: "Uses an agreed access or export workflow for cloud-based productivity content.",
  },
  {
    category: "Business Documents",
    name: "Plain Text and Tabular Data",
    extensions: "TXT, CSV, TSV",
    handling: "Protects delimiters, identifiers, markup, and nontranslatable fields in structured exports.",
  },
  {
    category: "PDFs and Scans",
    name: "Text-Based PDF",
    extensions: "PDF",
    handling: "Extracts digital text and returns a formatted PDF or another agreed editable output.",
  },
  {
    category: "PDFs and Scans",
    name: "Scanned PDF",
    extensions: "PDF",
    handling: "Uses OCR and review to prepare image-based pages for translation and reconstruction.",
  },
  {
    category: "PDFs and Scans",
    name: "Forms and Secured PDFs",
    extensions: "PDF",
    handling: "Reviews interactive fields, restrictions, annotations, and required final functionality.",
  },
  {
    category: "PDFs and Scans",
    name: "Image Files",
    extensions: "JPG, JPEG, PNG, TIFF, BMP",
    handling: "Extracts visible text for translation and optional reintegration into localized graphics.",
  },
  {
    category: "Design and Publishing",
    name: "Adobe InDesign",
    extensions: "INDD, IDML, INX, INDB, ICML",
    handling: "Supports text extraction, reintegration, multilingual DTP, and final visual QA.",
  },
  {
    category: "Design and Publishing",
    name: "Adobe Illustrator",
    extensions: "AI, EPS, SVG",
    handling: "Localizes editable labels, diagrams, callouts, infographics, and product graphics.",
  },
  {
    category: "Design and Publishing",
    name: "Adobe Photoshop",
    extensions: "PSD",
    handling: "Replaces editable layered text and adjusts spacing within localized visual assets.",
  },
  {
    category: "Design and Publishing",
    name: "QuarkXPress",
    extensions: "QXP",
    handling: "Processes packaged publishing projects for multilingual print and digital delivery.",
  },
  {
    category: "Design and Publishing",
    name: "Publisher and Legacy DTP",
    extensions: "PUB and agreed source formats",
    handling: "Reviews application version, editability, conversion options, and required output.",
  },
  {
    category: "Technical Content",
    name: "Adobe FrameMaker",
    extensions: "FM, MIF, BOOK",
    handling: "Protects variables, conditional text, cross-references, indexes, and book structure.",
  },
  {
    category: "Technical Content",
    name: "DITA",
    extensions: "DITA, XML, DITAMAP",
    handling: "Preserves reusable topics, maps, identifiers, links, attributes, and publishing structure.",
  },
  {
    category: "Technical Content",
    name: "MadCap Flare",
    extensions: "FLPRJ and project resources",
    handling: "Supports topics, snippets, variables, conditions, glossaries, links, and output targets.",
  },
  {
    category: "Technical Content",
    name: "Markdown",
    extensions: "MD, MARKDOWN",
    handling: "Protects markup, links, code blocks, and developer-documentation structure.",
  },
  {
    category: "Technical Content",
    name: "HTML and XHTML",
    extensions: "HTML, HTM, XHTML",
    handling: "Preserves markup, links, metadata, alt text, and approved embedded elements.",
  },
  {
    category: "Software and Web",
    name: "JSON",
    extensions: "JSON",
    handling: "Protects keys, syntax, variables, and nontranslatable values while localizing approved strings.",
  },
  {
    category: "Software and Web",
    name: "XML Resources",
    extensions: "XML",
    handling: "Configures extraction around the schema, elements, attributes, and application requirements.",
  },
  {
    category: "Software and Web",
    name: "YAML",
    extensions: "YAML, YML",
    handling: "Maintains indentation and syntax while translating approved content values.",
  },
  {
    category: "Software and Web",
    name: "Microsoft .NET Resources",
    extensions: "RESX",
    handling: "Preserves resource names, placeholders, XML structure, and protected values.",
  },
  {
    category: "Software and Web",
    name: "Java Resource Bundles",
    extensions: "PROPERTIES",
    handling: "Keeps keys and syntax protected while translating customer-facing values.",
  },
  {
    category: "Software and Web",
    name: "Gettext",
    extensions: "PO, POT, MO",
    handling: "Supports source strings, context, plural forms, comments, references, and translated entries.",
  },
  {
    category: "Software and Web",
    name: "iOS Resources",
    extensions: "STRINGS and agreed exports",
    handling: "Protects variables and development structure while localizing interface content.",
  },
  {
    category: "Software and Web",
    name: "Windows Resources",
    extensions: "RC, RES",
    handling: "Localizes dialogs, menus, labels, and messages while preserving identifiers.",
  },
  {
    category: "Localization Exchange",
    name: "XLIFF",
    extensions: "XLIFF, XLF",
    handling: "Protects inline tags, segment metadata, notes, and bilingual workflow status.",
  },
  {
    category: "Localization Exchange",
    name: "SDLXLIFF",
    extensions: "SDLXLIFF",
    handling: "Supports translation, editing, review, and QA within compatible Trados-based workflows.",
  },
  {
    category: "Localization Exchange",
    name: "Translation Memory Exchange",
    extensions: "TMX",
    handling: "Supports migration, consolidation, analysis, and reuse of bilingual translation assets.",
  },
  {
    category: "Localization Exchange",
    name: "Legacy Bilingual Files",
    extensions: "TTX and agreed formats",
    handling: "Uses compatible software, conversion, or managed review based on the source package.",
  },
  {
    category: "Engineering",
    name: "AutoCAD",
    extensions: "DWG and agreed CAD exports",
    handling: "Translates drawing text and annotations with terminology and visual review controls.",
  },
  {
    category: "Engineering",
    name: "Microsoft Visio",
    extensions: "VSD, VSDX",
    handling: "Maintains the relationship between translated text, connectors, shapes, and layers.",
  },
  {
    category: "Engineering",
    name: "Diagrams and Infographics",
    extensions: "AI, PPTX, INDD, PSD and more",
    handling: "Localizes editable labels and callouts while preserving their visual associations.",
  },
  {
    category: "Multimedia",
    name: "Video Files",
    extensions: "MP4, MOV, AVI, WMV, MKV, WEBM",
    handling: "Supports transcription, translation, subtitles, voice-over, dubbing, and post-production.",
  },
  {
    category: "Multimedia",
    name: "Audio Files",
    extensions: "MP3, WAV and agreed formats",
    handling: "Supports transcription, translation, recording, editing, and final audio delivery.",
  },
  {
    category: "Multimedia",
    name: "Subtitles and Captions",
    extensions: "SRT, VTT, ASS, SBV, TTML, SUB",
    handling: "Preserves timing while controlling line length, reading speed, segmentation, and sync.",
  },
  {
    category: "Multimedia",
    name: "Time-Coded Scripts",
    extensions: "DOCX, XLSX, CSV and agreed exports",
    handling: "Protects time codes and speaker information for subtitle, voice, and review workflows.",
  },
  {
    category: "eLearning",
    name: "SCORM Packages",
    extensions: "ZIP and SCORM resources",
    handling: "Reviews package structure, localizes required assets, and prepares content for reintegration.",
  },
  {
    category: "eLearning",
    name: "Articulate Storyline",
    extensions: "STORY and published packages",
    handling: "Supports slides, states, layers, variables, quizzes, captions, and multimedia components.",
  },
  {
    category: "eLearning",
    name: "Adobe Captivate",
    extensions: "CPTX and project exports",
    handling: "Localizes slide text, interactions, assessments, narration, captions, and recordings.",
  },
  {
    category: "eLearning",
    name: "HTML5 Courseware",
    extensions: "HTML, XML, JSON and media assets",
    handling: "Processes structured course content, resources, media, and delivery components together.",
  },
];

const popularFormats = [
  "Microsoft Word",
  "Text-Based PDF",
  "Adobe InDesign",
  "Adobe FrameMaker",
  "JSON",
  "XLIFF",
  "AutoCAD",
  "Subtitles and Captions",
  "SCORM Packages",
].map((name) => formatDirectory.find((item) => item.name === name));

const businessFormats = [
  {
    title: "Microsoft Word",
    extensions: "DOC · DOCX · DOCM · DOTX · RTF",
    text: "Translate headings, paragraphs, tables, lists, headers, footers, footnotes, links, and agreed formatting while keeping the document editable.",
  },
  {
    title: "Microsoft PowerPoint",
    extensions: "PPT · PPTX · PPTM · PPSX",
    text: "Localize slide text, speaker notes, charts, diagrams, tables, and labels, with formatting support for language expansion and visual balance.",
  },
  {
    title: "Microsoft Excel",
    extensions: "XLS · XLSX · XLSM · CSV · TSV",
    text: "Separate translatable content from formulas, identifiers, codes, locked cells, and reference data across worksheets and structured exports.",
  },
  {
    title: "OpenDocument Files",
    extensions: "ODT · ODS · ODP",
    text: "Process open-standard text, spreadsheet, and presentation files using a workflow suited to the content and required multilingual output.",
  },
  {
    title: "Google Workspace Content",
    extensions: "Agreed access or export workflow",
    text: "Handle cloud-based documents, presentations, and spreadsheets through controlled access or export to an agreed production format.",
  },
  {
    title: "Plain Text and Tabular Data",
    extensions: "TXT · CSV · TSV",
    text: "Translate content migrations, product data, surveys, software strings, and database exports while protecting delimiters and nontranslatable fields.",
  },
];

const pdfTypes = [
  {
    label: "Text-Based PDF",
    text: "Digitally generated text can often be extracted for translation and returned as a formatted PDF, reconstructed editable file, or another agreed output.",
  },
  {
    label: "Scanned PDF",
    text: "OCR converts page images into editable text before linguistic review, translation, and document reconstruction begin.",
  },
  {
    label: "Forms and Locked Files",
    text: "Fillable fields, security restrictions, certificates, annotations, and interactive elements may require specialized preparation or the original source.",
  },
  {
    label: "Images Containing Text",
    text: "Screenshots, diagrams, labels, and image-based documents can be translated separately or reintegrated into a localized visual asset.",
  },
];

const publishingFormats = [
  {
    title: "Adobe InDesign",
    extensions: "INDD · IDML · INX · INDB · ICML",
    text: "Translate brochures, catalogs, reports, manuals, packaging content, and other publications with text reintegration and visual QA.",
    source: "Best input: packaged project with links, fonts, and a reference PDF.",
  },
  {
    title: "Adobe Illustrator",
    extensions: "AI · EPS · SVG",
    text: "Localize editable labels, diagrams, product graphics, callouts, and infographics while preserving the surrounding visual design.",
    source: "Best input: live text, editable layers, and required fonts.",
  },
  {
    title: "Adobe Photoshop",
    extensions: "PSD",
    text: "Replace editable layered text and adjust spacing for localized marketing, product, interface, and visual-support assets.",
    source: "Best input: layered source files with editable text rather than flattened artwork.",
  },
  {
    title: "QuarkXPress",
    extensions: "QXP and project packages",
    text: "Translate and format multilingual print or digital publications using the native package and supporting assets.",
    source: "Best input: source package with fonts, images, and reference output.",
  },
  {
    title: "Microsoft Publisher and Other DTP Files",
    extensions: "PUB and agreed legacy formats",
    text: "Review application version, source condition, editability, conversion options, and the required final delivery format.",
    source: "Best input: native editable source plus a visual reference PDF.",
  },
];

const dtpCapabilities = [
  "Text reflow and page-layout adjustment",
  "Font replacement and multilingual typography",
  "Tables, charts, diagrams, and graphic formatting",
  "Right-to-left page and visual adaptation",
  "Text-expansion, spacing, and alignment correction",
  "Print-ready, digital PDF, and editable source output",
];

const technicalFormats = [
  {
    title: "Adobe FrameMaker",
    extensions: "FM · MIF · BOOK",
    text: "Translate structured and unstructured manuals, books, variables, conditional text, cross-references, indexes, and tables of contents.",
  },
  {
    title: "DITA",
    extensions: "DITA · XML · DITAMAP",
    text: "Preserve reusable topics, maps, identifiers, links, attributes, and publishing relationships across modular documentation sets.",
  },
  {
    title: "XML and SGML",
    extensions: "Customer-defined schemas",
    text: "Configure extraction rules around translatable elements, protected attributes, embedded markup, variables, and application-specific metadata.",
  },
  {
    title: "MadCap Flare",
    extensions: "FLPRJ and project resources",
    text: "Support topics, snippets, variables, conditions, glossaries, links, and multiple output targets within one controlled localization workflow.",
  },
  {
    title: "HTML, XHTML, and Markdown",
    extensions: "HTML · HTM · XHTML · MD",
    text: "Translate web, help, knowledge-base, release-note, and developer content while protecting markup, links, code blocks, and metadata.",
  },
];

const structuredControls = [
  {
    title: "Reusable content",
    text: "Keep topics, snippets, variables, and repeated text connected across every language version.",
  },
  {
    title: "Tags and attributes",
    text: "Expose approved content to linguists while protecting structural markup and technical identifiers.",
  },
  {
    title: "References and navigation",
    text: "Maintain links, cross-references, indexes, maps, and generated navigation through reintegration.",
  },
  {
    title: "Publishing outputs",
    text: "Prepare localized content for the required help system, portal, PDF, web, or product-documentation output.",
  },
];

const softwareResourceGroups = [
  {
    title: "Microsoft .NET Resources",
    extensions: "RESX",
    text: "Preserve resource names, placeholders, XML structure, and protected values while localizing user-facing strings.",
  },
  {
    title: "Java Resource Bundles",
    extensions: "PROPERTIES",
    text: "Keep keys and syntax intact while translating labels, messages, prompts, and other approved values.",
  },
  {
    title: "Gettext",
    extensions: "PO · POT · MO",
    text: "Support source strings, context, plural forms, translator comments, references, and completed entries.",
  },
  {
    title: "JSON and YAML",
    extensions: "JSON · YAML · YML",
    text: "Protect keys, indentation, punctuation, variables, and nontranslatable data in structured application content.",
  },
  {
    title: "XML Resources",
    extensions: "XML",
    text: "Configure processing around the specific schema, translatable elements, approved attributes, and application logic.",
  },
  {
    title: "iOS and Windows Resources",
    extensions: "STRINGS · RC · RES",
    text: "Localize interface labels, dialogs, menus, messages, and pluralized content while protecting identifiers.",
  },
  {
    title: "HTML and Web Resources",
    extensions: "HTML · HTM · XHTML",
    text: "Translate visible copy, metadata, navigation, forms, alt text, and approved customer-facing attributes.",
  },
  {
    title: "Custom Resource Files",
    extensions: "Proprietary and internal formats",
    text: "Review representative samples and establish a controlled extraction, translation, reintegration, and QA process.",
  },
];

const softwareProtections = [
  "Keys and resource identifiers",
  "Variables and placeholders",
  "Tags, escapes, and syntax",
  "Character limits and plural rules",
];

const exchangeFormats = [
  {
    title: "XLIFF",
    extensions: "XLIFF · XLF",
    role: "Standard localization exchange",
    text: "Protect inline tags, segment metadata, notes, statuses, and bilingual content across compatible localization workflows.",
  },
  {
    title: "SDLXLIFF",
    extensions: "SDLXLIFF",
    role: "Trados-based bilingual workflow",
    text: "Support translation, review, editing, and quality assurance while retaining compatible project metadata.",
  },
  {
    title: "TMX",
    extensions: "TMX",
    role: "Translation memory exchange",
    text: "Migrate, consolidate, analyze, and reuse approved source-and-target segments from existing language assets.",
  },
  {
    title: "Legacy Bilingual Files",
    extensions: "TTX and agreed formats",
    role: "Managed continuity",
    text: "Use compatible software, conversion, or a managed review process to continue work from earlier tool environments.",
  },
];

const engineeringFormats = [
  {
    title: "AutoCAD Drawings",
    extensions: "DWG and agreed CAD exports",
    text: "Translate drawing text and annotations while protecting units, dimensions, technical terminology, and visual relationships.",
  },
  {
    title: "Microsoft Visio",
    extensions: "VSD · VSDX",
    text: "Maintain the connection between translated text, shapes, connectors, layers, and process or system logic.",
  },
  {
    title: "Diagrams, Infographics, and Screenshots",
    extensions: "AI · PPTX · INDD · PSD · image formats",
    text: "Localize editable labels, callouts, legends, interface text, and annotations without separating them from the visual they explain.",
  },
];

const engineeringProtections = [
  "Dimensions and units",
  "Callout-to-object relationships",
  "Layers, connectors, and labels",
  "Readable multilingual typography",
];


const mediaLayers = [
  {
    title: "Video and Motion Content",
    extensions: "MP4 · MOV · AVI · WMV · MKV · WEBM · MPEG",
    text: "Coordinate transcription, translation, subtitles, captions, voice-over, dubbing, on-screen text, and final media production.",
  },
  {
    title: "Audio Content",
    extensions: "MP3 · WAV · agreed audio formats",
    text: "Prepare narration, interviews, training audio, support content, and other spoken material for multilingual recording and delivery.",
  },
  {
    title: "Subtitles and Captions",
    extensions: "SRT · VTT · ASS · SBV · TTML · SUB",
    text: "Preserve timing while controlling segmentation, line length, reading speed, speaker information, and synchronization.",
  },
  {
    title: "Time-Coded Scripts",
    extensions: "DOCX · XLSX · CSV · agreed exports",
    text: "Protect time codes and speaker labels for subtitle, voice, review, and post-production workflows.",
  },
];

const mediaValidationItems = [
  "Time-code accuracy",
  "Reading speed and line length",
  "Speaker identification and sync",
  "Platform-ready output settings",
];

const mediaWaveform = [18, 30, 22, 42, 54, 34, 64, 48, 28, 58, 72, 44, 32, 66, 50, 38, 58, 26, 46, 34, 60, 40, 24, 52];

const learningComponents = [
  {
    title: "SCORM Packages",
    extensions: "ZIP and SCORM resources",
    text: "Review package structure, identify translatable assets, localize the required components, and prepare content for reintegration and LMS testing.",
  },
  {
    title: "Articulate Storyline",
    extensions: "STORY and published packages",
    text: "Support slides, layers, states, variables, triggers, quizzes, captions, narration scripts, and embedded media from editable source projects.",
  },
  {
    title: "Adobe Captivate",
    extensions: "CPTX and project exports",
    text: "Localize slide text, interactions, assessments, narration, captions, and screen-recorded content according to project version and output needs.",
  },
  {
    title: "HTML5 Courseware",
    extensions: "HTML · XML · JSON · media assets",
    text: "Process web-based learning content, structured resources, multimedia, and delivery components as one coordinated multilingual experience.",
  },
];

const trainingAssets = [
  "Narration and voice-over",
  "Subtitles and captions",
  "Quizzes and interactions",
  "Workbooks and job aids",
];

const fileProcessSteps = [
  {
    number: "01",
    title: "Analyze",
    text: "Review file type, structure, source quality, translatable content, embedded elements, target languages, output expectations, and technical risks.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Separate language from protected code, tags, variables, formulas, identifiers, and other elements. Preparation may also include OCR, conversion, cleanup, or parser configuration.",
  },
  {
    number: "03",
    title: "Translate",
    text: "Route content through the workflow appropriate to its subject matter, audience, risk level, and intended use, using the right combination of technology and linguistic expertise.",
  },
  {
    number: "04",
    title: "Review",
    text: "Verify meaning, terminology, fluency, consistency, context, and audience suitability, with specialist or in-context review included where required.",
  },
  {
    number: "05",
    title: "Rebuild",
    text: "Return translated content to the required file structure through reintegration, multilingual DTP, image editing, subtitle synchronization, audio production, or eLearning engineering.",
  },
  {
    number: "06",
    title: "Validate and Deliver",
    text: "Check linguistic quality and file integrity through agreed tag, placeholder, formatting, visual, functional, link, timing, and output validation before delivery.",
  },
];

const protectionDimensions = [
  {
    icon: <LanguageIcon />,
    title: "Language and Terminology",
    text: "Meaning, approved product terms, industry terminology, brand language, tone, and style conventions.",
  },
  {
    icon: <StructureIcon />,
    title: "Document Structure",
    text: "Headings, paragraphs, lists, tables, slides, worksheets, topics, references, and reusable content.",
  },
  {
    icon: <LogicIcon />,
    title: "Technical Syntax",
    text: "Tags, keys, identifiers, attributes, placeholders, variables, escape sequences, delimiters, and protected code.",
  },
  {
    icon: <FunctionIcon />,
    title: "Functional Elements",
    text: "Formulas, links, fields, conditional content, plural rules, cross-references, timing information, and application logic.",
  },
  {
    icon: <PresentationIcon />,
    title: "Visual Presentation",
    text: "Text frames, page flow, typography, charts, diagrams, spacing, alignment, graphics, and language-specific layout.",
  },
  {
    icon: <DeliveryIcon />,
    title: "Delivery Requirements",
    text: "Native source files, multilingual PDFs, localized resources, bilingual files, subtitles, final media, LMS packages, or another agreed output.",
  },
];



const preparationGuidance = [
  {
    title: "Provide the Editable Source",
    text: "Send the native Word, PowerPoint, Excel, InDesign, FrameMaker, Illustrator, Storyline, software-resource, or other editable source whenever it is available. A reference PDF can accompany the source to show the intended appearance.",
  },
  {
    title: "Include Linked Assets",
    text: "Package the fonts, images, graphics, media, scripts, and supporting files used by the source application so multilingual production can reproduce the intended output accurately.",
  },
  {
    title: "Identify What Should Be Translated",
    text: "Clarify whether the scope includes hidden text, speaker notes, comments, tracked changes, metadata, image text, worksheet tabs, subtitles, embedded files, or source-code comments.",
  },
  {
    title: "Share Context and References",
    text: "Provide screenshots, staging access, reference files, product information, existing translations, style guidance, and approved terminology—especially for short strings or content with several possible meanings.",
  },
  {
    title: "Remove Obsolete Content",
    text: "Where practical, remove superseded drafts, duplicate files, unused slides, legacy strings, and outdated assets before submission to reduce unnecessary translation and version-control risk.",
  },
  {
    title: "Define the Required Output",
    text: "Confirm whether you need editable source files, print-ready PDFs, localized software resources, bilingual review files, subtitles, final media, LMS packages, or another delivery format.",
  },
];

const sourcePackageItems = [
  "Native source files",
  "Fonts and linked assets",
  "Reference output",
  "Terminology and instructions",
];

const customFormatSteps = [
  {
    number: "01",
    title: "Sample Review",
    text: "Inspect the file structure, encoding, translatable fields, protected elements, dependencies, and expected multilingual output.",
  },
  {
    number: "02",
    title: "Extraction Rules",
    text: "Define which elements linguists should translate while keeping technical, structural, and nontranslatable data protected.",
  },
  {
    number: "03",
    title: "Pilot Processing",
    text: "Validate extraction, translation, reintegration, and output quality on a representative sample before scaling production.",
  },
  {
    number: "04",
    title: "Managed Production",
    text: "Apply the confirmed workflow across future files, languages, product releases, and recurring content updates.",
  },
  {
    number: "05",
    title: "Alternative Delivery",
    text: "When native processing is not practical, use an agreed conversion, structured export, bilingual exchange, or database workflow.",
  },
];

const qualityControls = [
  {
    icon: <LanguageIcon />,
    title: "Linguistic Quality Assurance",
    text: "Review meaning, terminology, grammar, style, consistency, and suitability for the intended audience.",
  },
  {
    icon: <LogicIcon />,
    title: "Automated File Checks",
    text: "Identify missing translations, number inconsistencies, tag problems, placeholder mismatches, and untranslated segments where the format allows.",
  },
  {
    icon: <PresentationIcon />,
    title: "Visual and Functional QA",
    text: "Check formatted documents, software interfaces, multimedia, and eLearning content for overflow, fonts, layout, timing, and functional issues.",
  },
  {
    icon: <StructureIcon />,
    title: "Translation Memory and Terminology",
    text: "Reuse approved language across files, product versions, and updates to improve consistency and reduce unnecessary retranslation.",
  },
  {
    icon: <DeliveryIcon />,
    title: "Controlled File Handling",
    text: "Support managed intake, authorized project access, confidentiality controls, professional project teams, and controlled delivery.",
  },
  {
    icon: <FunctionIcon />,
    title: "Risk-Based Workflow Selection",
    text: "Configure AI, professional translation, specialist review, QA, and validation according to the content, audience, and consequences of error.",
  },
];

const relatedResourceGroups = [
  {
    title: "Translation and Production Services",
    items: [
      {
        title: "Document Translation Services",
        text: "Translate business, legal, financial, medical, marketing, and technical documents with file-aware production.",
        href: "https://www.stepes.com/document-translation-services/",
      },
      {
        title: "Technical Translation Services",
        text: "Localize manuals, specifications, engineering content, help systems, and structured documentation.",
        href: "https://www.stepes.com/technical-translation-services/",
      },
      {
        title: "Software Localization",
        text: "Translate and test applications, SaaS platforms, websites, and software resource files for global releases.",
        href: "https://www.stepes.com/software-localization-services/",
      },
      {
        title: "Multilingual Desktop Publishing",
        text: "Format translated documents for print and digital distribution with multilingual typography and layout expertise.",
        href: "https://www.stepes.com/multilingual-desktop-publishing/",
      },
      {
        title: "Multimedia Localization",
        text: "Localize video and audio through transcription, subtitles, captioning, voice-over, dubbing, and post-production.",
        href: "https://www.stepes.com/multimedia-translation-services/",
      },
      {
        title: "eLearning Localization",
        text: "Translate courseware, narration, assessments, interactive content, subtitles, and training materials.",
        href: "https://www.stepes.com/elearning-localization-services/",
      },
    ],
  },
  {
    title: "Platform, Quality, and Planning",
    items: [
      {
        title: "Translation API",
        text: "Connect multilingual content workflows with applications, content systems, repositories, and enterprise processes.",
        href: "https://www.stepes.com/translation-api/",
      },
      {
        title: "Translation Quality Assurance",
        text: "See how linguistic review, terminology controls, automated checks, and workflow-specific validation work together.",
        href: "https://www.stepes.com/translation-quality-assurance/",
      },
      {
        title: "Security & Compliance",
        text: "Review how Stepes manages project access, confidentiality, files, translation assets, and secure multilingual workflows.",
        href: "https://www.stepes.com/security-and-compliance/",
      },
      {
        title: "Translation Cost Guide",
        text: "Understand the factors that influence translation cost, including complexity, review, engineering, and formatting.",
        href: "https://www.stepes.com/resources/translation-cost-guide/",
      },
    ],
  },
];

const fileFormatFaqs = [
  {
    question: "What File Formats Does Stepes Support?",
    answer:
      "Stepes supports a wide range of business documents, PDFs, publishing files, structured technical content, software resources, localization exchange files, engineering visuals, multimedia, subtitle files, and eLearning content. Because files with the same extension can vary greatly in complexity, Stepes reviews the actual source file and required output before confirming the final workflow.",
  },
  {
    question: "What Should I Do if My Format Is Not Listed?",
    answer:
      "Send us a representative file together with a description of how the translated output will be used. Stepes can review custom, proprietary, legacy, or mixed-content files and determine whether they can be processed natively, converted, exported, parsed, or handled through a managed engineering workflow.",
  },
  {
    question: "Can Stepes Translate PDF Files?",
    answer:
      "Yes. Stepes translates both text-based and scanned PDFs. A text-based PDF may allow direct extraction, while a scanned PDF normally requires OCR. For the best formatting and editability, provide the original Word, InDesign, FrameMaker, PowerPoint, or other source file whenever it is available.",
  },
  {
    question: "Should I Send the PDF or the Original Editable File?",
    answer:
      "Send both when possible. The editable source supports extraction, reintegration, and multilingual formatting, while the PDF provides a visual reference showing how the finished content should appear.",
  },
  {
    question: "Will I Receive the Translated File in the Original Format?",
    answer:
      "In many cases, yes. The available delivery format depends on the source file, application compatibility, project scope, and required production work. Deliverables may include an editable localized source, print-ready PDF, translated software resource, bilingual review file, subtitle file, multimedia output, eLearning package, or another agreed format.",
  },
  {
    question: "Can You Preserve Formulas, Tags, Variables, and Placeholders?",
    answer:
      "Stepes configures file-processing rules to protect technical elements that should not be translated. Depending on the format, these may include formulas, keys, tags, variables, placeholders, attributes, identifiers, delimiters, escape sequences, time codes, and code-related content. File and functional QA can be added based on project requirements.",
  },
  {
    question: "Do You Translate Hidden Text, Comments, and Speaker Notes?",
    answer:
      "These elements can be included, but they should be identified during project setup. Hidden worksheets, comments, tracked changes, notes, metadata, conditional content, and other nonvisible elements are not always intended for translation. Confirming the scope in advance helps prevent both omissions and unnecessary work.",
  },
  {
    question: "Can Stepes Translate Scanned Documents and Images?",
    answer:
      "Yes. Stepes can use OCR and manual review to extract text from scanned PDFs and image files. Accuracy depends on image quality, resolution, legibility, page condition, handwriting, and document complexity. Low-quality or heavily annotated materials may require additional preparation.",
  },
  {
    question: "Do You Support Multilingual Formatting?",
    answer:
      "Yes. Stepes provides multilingual desktop publishing and formatting for documents, presentations, technical publications, graphics, and other visually complex content. Formatting can include text reflow, font adjustment, page-layout correction, table and graphic work, language-specific typography, and right-to-left adaptation.",
  },
  {
    question: "Can You Handle Right-to-Left Languages?",
    answer:
      "Yes. Languages such as Arabic and Hebrew can require more than changing text direction. The file may also need mirrored layouts, adjusted navigation, repositioned graphics, different fonts, revised alignment, and visual QA to ensure that the localized output reads naturally.",
  },
  {
    question: "Can Stepes Translate Software and App Resource Files?",
    answer:
      "Yes. Stepes supports software resources such as RESX, properties, PO/POT, XML, JSON, YAML, iOS strings, and other common or custom file types. Software workflows can include placeholder protection, terminology management, in-context review, linguistic QA, functional testing, and continuous-localization support.",
  },
  {
    question: "Can You Process Subtitle and Video Files?",
    answer:
      "Yes. Stepes supports common video, audio, subtitle, and caption formats. Services can include transcription, time coding, subtitle translation, captioning, voice-over, dubbing, on-screen text localization, post-production, and platform-ready delivery.",
  },
  {
    question: "Can File Translation Be Automated Through an API?",
    answer:
      "Yes. Recurring or high-volume content workflows may be connected through APIs, repositories, content systems, and other enterprise integrations. The appropriate automation model depends on the file type, source system, update frequency, quality requirements, and approval process.",
  },
  {
    question: "How Do You Keep File Translation Consistent Across Updates?",
    answer:
      "Stepes uses translation memory, terminology management, style guidance, reusable workflows, and professional review to maintain consistency across file versions and future content. Previously approved language can be reused where appropriate, while new or changed content is routed for translation and validation.",
  },
  {
    question: "How Are Confidential Files Protected?",
    answer:
      "Stepes uses managed translation workflows, authorized project access, confidentiality obligations, controlled file handling, secure cloud-based processes, and project-specific delivery procedures. Enterprise clients can also discuss access, retention, deletion, AI use, and other handling requirements during onboarding or project setup.",
  },
  {
    question: "What Information Should I Provide With My Files?",
    answer:
      "Include the source and target languages, intended audience, required output, deadline, subject matter, reference materials, terminology, style guidance, and any special instructions. For complex files, also explain which content should be translated, which elements must remain unchanged, and how the final file will be published, deployed, or tested.",
  },
];

export default function StepesFileFormatSupportWireframe() {
  const [activeCategory, setActiveCategory] = useState("All Formats");
  const [formatSearch, setFormatSearch] = useState("");
  const [showAllFormats, setShowAllFormats] = useState(false);
  const [openFaq, setOpenFaq] = useState(fileFormatFaqs[0].question);

  const categoryOptions = ["All Formats", ...formatCategories];
  const normalizedSearch = formatSearch.trim().toLowerCase();

  const matchedFormats = useMemo(() => {
    if (normalizedSearch) {
      return formatDirectory.filter((item) =>
        [item.category, item.name, item.extensions, item.handling]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      );
    }

    if (activeCategory === "All Formats") {
      return formatDirectory;
    }

    return formatDirectory.filter((item) => item.category === activeCategory);
  }, [activeCategory, normalizedSearch]);

  const visibleFormats =
    !normalizedSearch && activeCategory === "All Formats" && !showAllFormats
      ? popularFormats
      : matchedFormats;

  const selectCategory = (category) => {
    setActiveCategory(category);
    setFormatSearch("");
    setShowAllFormats(false);
  };

  return (
    <main className="ff-page">
      <style>{`
        .ff-page,
        .ff-page * {
          box-sizing: border-box;
        }

        .ff-page {
          --ff-magenta: #c11d63;
          --ff-magenta-dark: #a71954;
          --ff-magenta-deep: #7a1542;
          --ff-blush: #fdf2f7;
          --ff-ink: #151826;
          --ff-body: #4f5d73;
          --ff-muted: #738096;
          --ff-line: #e3e7ee;
          --ff-soft: #f7f8fb;
          --ff-white: #ffffff;
          width: 100%;
          overflow: hidden;
          color: var(--ff-ink);
          background: var(--ff-white);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .ff-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .ff-hero {
          position: relative;
          padding: 104px 0 88px;
          background: #ffffff;
        }

        .ff-hero::before {
          content: "";
          position: absolute;
          top: -220px;
          left: 50%;
          width: 760px;
          height: 420px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(253, 242, 247, 0.95) 0%, rgba(253, 242, 247, 0) 70%);
          pointer-events: none;
        }

        .ff-hero-inner {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .ff-hero-copy {
          max-width: 920px;
          margin: 0 auto;
        }

        .ff-hero h1 {
          max-width: 900px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-hero-lead {
          max-width: 800px;
          margin: 24px auto 0;
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
          color: var(--ff-body);
        }

        .ff-hero-support {
          max-width: 770px;
          margin: 10px auto 0;
          font-size: 16px;
          line-height: 1.7;
          color: var(--ff-muted);
        }

        .ff-hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 34px;
        }

        .ff-button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .ff-button-primary,
        .ff-button-primary:link,
        .ff-button-primary:visited,
        .ff-button-primary:hover,
        .ff-button-primary:active,
        .ff-button-primary:focus-visible {
          color: #ffffff;
        }

        .ff-button-primary {
          background: var(--ff-magenta);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.18);
        }

        .ff-button-primary:hover {
          background: var(--ff-magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 13px 28px rgba(193, 29, 99, 0.22);
        }

        .ff-button-secondary,
        .ff-button-secondary:link,
        .ff-button-secondary:visited {
          color: var(--ff-magenta-deep);
          background: #ffffff;
          border-color: #dfe3ea;
        }

        .ff-button-secondary:hover {
          color: var(--ff-magenta-dark);
          border-color: #cfd5de;
          transform: translateY(-1px);
        }

        .ff-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .ff-hero-flow {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 52px minmax(260px, 1.06fr) 52px minmax(0, 1.08fr);
          align-items: center;
          gap: 18px;
          margin-top: 64px;
          padding: 34px 36px;
          text-align: left;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid var(--ff-line);
          border-radius: 30px;
          box-shadow: 0 24px 60px rgba(24, 31, 50, 0.08);
        }

        .ff-flow-group {
          min-width: 0;
        }

        .ff-flow-kicker {
          display: block;
          margin-bottom: 16px;
          font-size: 11px;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--ff-muted);
        }

        .ff-format-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
        }

        .ff-format-chip {
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border: 1px solid var(--ff-line);
          border-radius: 12px;
          background: var(--ff-white);
          color: #3e485a;
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .ff-flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #abb4c2;
        }

        .ff-workflow-panel {
          padding: 24px 26px;
          border-radius: 22px;
          background: var(--ff-blush);
          border: 1px solid #f4dbe6;
        }

        .ff-workflow-title {
          margin: 0 0 15px;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-workflow-list,
        .ff-output-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ff-workflow-list li {
          position: relative;
          padding: 10px 0 10px 20px;
          border-top: 1px solid rgba(167, 25, 84, 0.12);
          font-size: 14px;
          line-height: 1.45;
          color: #4e4350;
        }

        .ff-workflow-list li:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .ff-workflow-list li::before {
          content: "";
          position: absolute;
          top: 17px;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--ff-magenta);
        }

        .ff-workflow-list li:first-child::before {
          top: 7px;
        }

        .ff-output-list {
          display: grid;
          gap: 12px;
        }

        .ff-output-list li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          align-items: start;
          gap: 10px;
          color: #465164;
          font-size: 14px;
          line-height: 1.45;
        }

        .ff-output-list svg {
          margin-top: 1px;
          color: var(--ff-magenta);
        }

        .ff-trust {
          border-top: 1px solid var(--ff-line);
          border-bottom: 1px solid var(--ff-line);
          background: #ffffff;
        }

        .ff-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ff-trust-item {
          position: relative;
          min-width: 0;
          padding: 32px 28px;
        }

        .ff-trust-item:first-child {
          padding-left: 0;
        }

        .ff-trust-item:last-child {
          padding-right: 0;
        }

        .ff-trust-item + .ff-trust-item::before {
          content: "";
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 0;
          width: 1px;
          background: var(--ff-line);
        }

        .ff-trust-title {
          margin: 0;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-trust-text {
          margin: 9px 0 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--ff-muted);
        }

        .ff-intro {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 88px;
          align-items: start;
        }

        .ff-eyebrow {
          display: block;
          margin: 0 0 17px;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ff-magenta-deep);
        }

        .ff-intro h2 {
          max-width: 560px;
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-intro-copy {
          max-width: 680px;
          margin-top: 26px;
        }

        .ff-intro-copy p {
          margin: 0;
          font-size: 16px;
          line-height: 1.76;
          color: var(--ff-body);
        }

        .ff-intro-copy p + p {
          margin-top: 18px;
        }

        .ff-intro-summary {
          margin-top: 26px !important;
          color: var(--ff-ink) !important;
          font-weight: 600 !important;
        }

        .ff-layer-list {
          border-top: 1px solid #dfe3ea;
        }

        .ff-layer-row {
          display: grid;
          grid-template-columns: 42px 130px minmax(0, 1fr);
          gap: 20px;
          align-items: start;
          padding: 25px 0;
          border-bottom: 1px solid #dfe3ea;
        }

        .ff-layer-icon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 30px;
          color: var(--ff-magenta);
        }

        .ff-layer-title {
          margin: 2px 0 0;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-layer-text {
          margin: 0;
          font-size: 15px;
          line-height: 1.67;
          color: var(--ff-body);
        }


        .ff-directory {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-section-head {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 72px;
          align-items: end;
        }

        .ff-section-head h2,
        .ff-business-head h2,
        .ff-pdf h2,
        .ff-publishing-head h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .ff-section-head h2,
        .ff-business-head h2,
        .ff-publishing-head h2 {
          color: var(--ff-ink);
        }

        .ff-section-intro {
          max-width: 720px;
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-directory-console {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          min-height: 560px;
          margin-top: 48px;
          overflow: hidden;
          border: 1px solid var(--ff-line);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 22px 54px rgba(24, 31, 50, 0.07);
        }

        .ff-directory-sidebar {
          padding: 28px 24px;
          background: var(--ff-soft);
          border-right: 1px solid var(--ff-line);
        }

        .ff-directory-sidebar-label,
        .ff-directory-results-label {
          display: block;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ff-muted);
        }

        .ff-directory-nav {
          display: grid;
          gap: 4px;
          margin-top: 17px;
        }

        .ff-directory-nav button {
          width: 100%;
          min-height: 44px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 0;
          border-radius: 12px;
          background: transparent;
          color: #4b576a;
          font: inherit;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: color 160ms ease, background-color 160ms ease;
        }

        .ff-directory-nav button:hover {
          color: var(--ff-magenta-deep);
          background: #ffffff;
        }

        .ff-directory-nav button[aria-pressed="true"] {
          color: var(--ff-magenta-deep);
          background: var(--ff-blush);
        }

        .ff-directory-nav button:focus-visible,
        .ff-directory-select:focus-visible,
        .ff-search-input:focus-visible,
        .ff-show-all:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 2px;
        }

        .ff-category-count {
          color: var(--ff-muted);
          font-size: 12px;
          font-weight: 600;
        }

        .ff-directory-select-wrap {
          display: none;
        }

        .ff-directory-main {
          min-width: 0;
          padding: 30px 34px 34px;
        }

        .ff-search-wrap {
          position: relative;
        }

        .ff-search-icon {
          position: absolute;
          top: 50%;
          left: 17px;
          display: flex;
          color: #8b96a7;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .ff-search-input {
          width: 100%;
          min-height: 52px;
          padding: 13px 18px 13px 48px;
          border: 1px solid #dce1e9;
          border-radius: 16px;
          background: #ffffff;
          color: var(--ff-ink);
          font: inherit;
          font-size: 15px;
          line-height: 1.4;
          box-shadow: 0 8px 22px rgba(24, 31, 50, 0.04);
        }

        .ff-search-input::placeholder {
          color: #8a95a7;
        }

        .ff-directory-results-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-top: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-directory-results-title {
          margin: 7px 0 0;
          font-size: 21px;
          line-height: 1.3;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-directory-count {
          flex: 0 0 auto;
          margin: 0;
          font-size: 13px;
          line-height: 1.4;
          color: var(--ff-muted);
        }

        .ff-format-results {
          display: grid;
        }

        .ff-format-result {
          display: grid;
          grid-template-columns: minmax(150px, 0.8fr) minmax(150px, 0.75fr) minmax(260px, 1.45fr);
          gap: 26px;
          align-items: start;
          padding: 22px 0;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-result-name {
          margin: 0;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-result-category {
          display: block;
          margin-top: 5px;
          font-size: 12px;
          line-height: 1.4;
          color: var(--ff-muted);
        }

        .ff-result-extensions,
        .ff-result-handling {
          margin: 0;
          font-size: 14px;
          line-height: 1.58;
          color: var(--ff-body);
          overflow-wrap: anywhere;
        }

        .ff-result-extensions {
          color: #657186;
          font-weight: 600;
        }

        .ff-directory-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 23px;
        }

        .ff-directory-helper {
          max-width: 660px;
          margin: 0;
          font-size: 14px;
          line-height: 1.62;
          color: var(--ff-muted);
        }

        .ff-show-all {
          flex: 0 0 auto;
          min-height: 44px;
          padding: 8px 0;
          border: 0;
          background: transparent;
          color: var(--ff-magenta-deep);
          font: inherit;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
          cursor: pointer;
        }

        .ff-empty-result {
          padding: 40px 0 18px;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-empty-result h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-empty-result p {
          margin: 9px 0 0;
          font-size: 15px;
          line-height: 1.65;
          color: var(--ff-body);
        }

        .ff-empty-result .ff-editorial-link {
          margin-top: 16px;
        }

        .ff-business {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-business-head,
        .ff-publishing-head {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 76px;
          align-items: start;
        }

        .ff-business-copy,
        .ff-publishing-copy {
          max-width: 720px;
        }

        .ff-business-copy p,
        .ff-publishing-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-editorial-link,
        .ff-editorial-link:link,
        .ff-editorial-link:visited {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 44px;
          margin-top: 18px;
          color: var(--ff-magenta-deep);
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          text-decoration: none;
        }

        .ff-editorial-link:hover {
          color: var(--ff-magenta-dark);
        }

        .ff-editorial-link svg {
          transition: transform 160ms ease;
        }

        .ff-editorial-link:hover svg {
          transform: translateX(2px);
        }

        .ff-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 3px;
          border-radius: 4px;
        }

        .ff-business-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid #dce1e8;
        }

        .ff-business-item {
          min-width: 0;
          padding: 30px 30px 32px;
          border-right: 1px solid #dce1e8;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-business-item:nth-child(3n + 1) {
          padding-left: 0;
        }

        .ff-business-item:nth-child(3n) {
          padding-right: 0;
          border-right: 0;
        }

        .ff-business-item h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-extension-line {
          display: block;
          margin-top: 10px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.035em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-business-item p {
          margin: 17px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-business-note {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: 30px;
          margin-top: 34px;
          padding-top: 26px;
          border-top: 1px solid #dce1e8;
        }

        .ff-business-note strong {
          font-size: 15px;
          line-height: 1.5;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-business-note p {
          margin: 0;
          font-size: 15px;
          line-height: 1.68;
          color: var(--ff-body);
        }

        .ff-pdf {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          background: #181923;
          color: #ffffff;
        }

        .ff-pdf::after {
          content: "";
          position: absolute;
          right: -140px;
          bottom: -210px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.16), rgba(193, 29, 99, 0) 70%);
          pointer-events: none;
        }

        .ff-pdf-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 90px;
          align-items: start;
        }

        .ff-pdf .ff-eyebrow {
          color: #f2a9c7;
        }

        .ff-pdf h2 {
          max-width: 560px;
          color: #ffffff;
        }

        .ff-pdf-copy {
          max-width: 650px;
          margin-top: 25px;
        }

        .ff-pdf-copy p {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: #c8cbd5;
        }

        .ff-pdf-copy p + p {
          margin-top: 17px;
        }

        .ff-pdf-best {
          margin-top: 30px;
          padding: 2px 0 2px 20px;
          border-left: 3px solid var(--ff-magenta);
        }

        .ff-pdf-best strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-pdf-best p {
          margin-top: 7px;
          color: #c8cbd5;
        }

        .ff-pdf-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-pdf-row {
          display: grid;
          grid-template-columns: 155px minmax(0, 1fr);
          gap: 28px;
          align-items: start;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-pdf-row h3 {
          margin: 0;
          font-size: 17px;
          line-height: 1.42;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-pdf-row p {
          margin: 0;
          font-size: 15px;
          line-height: 1.68;
          color: #c8cbd5;
        }

        .ff-pdf .ff-editorial-link,
        .ff-pdf .ff-editorial-link:link,
        .ff-pdf .ff-editorial-link:visited {
          margin-top: 25px;
          color: #f2a9c7;
        }

        .ff-pdf .ff-editorial-link:hover {
          color: #ffffff;
        }

        .ff-publishing {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-publishing-table {
          margin-top: 52px;
          border-top: 1px solid var(--ff-line);
        }

        .ff-publishing-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.8fr) minmax(300px, 1.45fr) minmax(210px, 0.9fr);
          gap: 38px;
          align-items: start;
          padding: 27px 0;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-publishing-name h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-publishing-name span {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.035em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-publishing-row p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-publishing-source {
          color: #697589 !important;
        }

        .ff-dtp-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.74fr) minmax(0, 1.26fr);
          gap: 58px;
          align-items: start;
          margin-top: 52px;
          padding: 42px 44px;
          border: 1px solid #f1d7e2;
          border-radius: 28px;
          background: var(--ff-blush);
        }

        .ff-dtp-panel h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-dtp-panel p {
          margin: 15px 0 0;
          font-size: 15px;
          line-height: 1.68;
          color: var(--ff-body);
        }

        .ff-dtp-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 34px;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(167, 25, 84, 0.16);
        }

        .ff-dtp-list li {
          position: relative;
          min-height: 58px;
          padding: 17px 0 16px 18px;
          border-bottom: 1px solid rgba(167, 25, 84, 0.16);
          font-size: 14px;
          line-height: 1.55;
          color: #4d4450;
        }

        .ff-dtp-list li::before {
          content: "";
          position: absolute;
          top: 24px;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ff-magenta);
        }


        .ff-technical {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-technical-head,
        .ff-software-head,
        .ff-exchange-head {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 76px;
          align-items: start;
        }

        .ff-technical-head h2,
        .ff-software-head h2,
        .ff-exchange-head h2,
        .ff-engineering h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .ff-technical-head h2,
        .ff-software-head h2,
        .ff-exchange-head h2 {
          color: var(--ff-ink);
        }

        .ff-technical-copy,
        .ff-software-copy,
        .ff-exchange-copy {
          max-width: 720px;
        }

        .ff-technical-copy p,
        .ff-software-copy p,
        .ff-exchange-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-technical-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(300px, 0.82fr);
          gap: 54px;
          align-items: start;
          margin-top: 52px;
        }

        .ff-technical-list {
          border-top: 1px solid #dce1e8;
        }

        .ff-technical-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.72fr) minmax(0, 1.28fr);
          gap: 34px;
          align-items: start;
          padding: 27px 0;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-technical-row h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-technical-row span {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.035em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-technical-row p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-structure-panel {
          position: sticky;
          top: 28px;
          padding: 34px 34px 30px;
          border: 1px solid #f1d7e2;
          border-radius: 28px;
          background: var(--ff-blush);
        }

        .ff-structure-panel h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-structure-panel > p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.68;
          color: var(--ff-body);
        }

        .ff-structure-list {
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(167, 25, 84, 0.16);
        }

        .ff-structure-list li {
          padding: 18px 0;
          border-bottom: 1px solid rgba(167, 25, 84, 0.16);
        }

        .ff-structure-list strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-structure-list span {
          display: block;
          margin-top: 6px;
          font-size: 14px;
          line-height: 1.62;
          color: var(--ff-body);
        }

        .ff-software {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-software-workbench {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(300px, 0.96fr);
          margin-top: 52px;
          overflow: hidden;
          border: 1px solid var(--ff-line);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 22px 54px rgba(24, 31, 50, 0.07);
        }

        .ff-code-panel {
          min-width: 0;
          padding: 34px 36px 36px;
          background: #181923;
          color: #ffffff;
        }

        .ff-code-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 19px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .ff-code-toolbar strong {
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-code-toolbar span {
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
          color: #f2a9c7;
        }

        .ff-code-sample {
          display: grid;
          gap: 17px;
          margin-top: 27px;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 14px;
          line-height: 1.62;
          overflow-wrap: anywhere;
        }

        .ff-code-line {
          display: grid;
          grid-template-columns: minmax(120px, 0.9fr) minmax(0, 1.1fr);
          gap: 22px;
          align-items: start;
        }

        .ff-code-key {
          color: #aeb7c8;
        }

        .ff-code-value {
          color: #ffffff;
        }

        .ff-code-variable {
          color: #f2a9c7;
          font-weight: 600;
        }

        .ff-protection-panel {
          padding: 34px 36px;
          background: var(--ff-blush);
        }

        .ff-protection-panel h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-protection-panel > p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.68;
          color: var(--ff-body);
        }

        .ff-protection-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 24px;
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(167, 25, 84, 0.16);
        }

        .ff-protection-list li {
          position: relative;
          min-height: 60px;
          padding: 18px 0 17px 18px;
          border-bottom: 1px solid rgba(167, 25, 84, 0.16);
          font-size: 14px;
          line-height: 1.55;
          color: #4d4450;
        }

        .ff-protection-list li::before {
          content: "";
          position: absolute;
          top: 25px;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ff-magenta);
        }

        .ff-software-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--ff-line);
        }

        .ff-software-item {
          min-width: 0;
          padding: 28px 34px 30px;
          border-right: 1px solid var(--ff-line);
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-software-item:nth-child(2n + 1) {
          padding-left: 0;
        }

        .ff-software-item:nth-child(2n) {
          padding-right: 0;
          border-right: 0;
        }

        .ff-software-item h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-software-item span {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.035em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-software-item p {
          margin: 15px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-exchange {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-exchange-table {
          margin-top: 52px;
          border-top: 1px solid #dce1e8;
        }

        .ff-exchange-row {
          display: grid;
          grid-template-columns: minmax(150px, 0.62fr) minmax(190px, 0.8fr) minmax(230px, 0.88fr) minmax(0, 1.7fr);
          gap: 28px;
          align-items: start;
          padding: 27px 0;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-exchange-row h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-exchange-extensions,
        .ff-exchange-role,
        .ff-exchange-row p {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
          color: var(--ff-body);
        }

        .ff-exchange-extensions {
          font-weight: 600;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-exchange-role {
          font-weight: 600;
          color: #5d697c;
        }

        .ff-exchange-assets {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 58px;
          align-items: start;
          margin-top: 52px;
          padding: 38px 42px;
          border: 1px solid #e2e6ed;
          border-radius: 28px;
          background: #ffffff;
        }

        .ff-exchange-assets h3 {
          margin: 0;
          font-size: 25px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-exchange-assets p {
          margin: 0;
          font-size: 15px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-exchange-assets p + p {
          margin-top: 14px;
        }

        .ff-engineering {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          background: #181923;
          color: #ffffff;
        }

        .ff-engineering::after {
          content: "";
          position: absolute;
          top: -180px;
          right: -170px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.17), rgba(193, 29, 99, 0) 70%);
          pointer-events: none;
        }

        .ff-engineering-top {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(360px, 1.14fr);
          gap: 80px;
          align-items: center;
        }

        .ff-engineering .ff-eyebrow {
          color: #f2a9c7;
        }

        .ff-engineering h2 {
          max-width: 590px;
          color: #ffffff;
        }

        .ff-engineering-copy {
          max-width: 620px;
          margin-top: 25px;
        }

        .ff-engineering-copy p {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: #c8cbd5;
        }

        .ff-engineering .ff-editorial-link,
        .ff-engineering .ff-editorial-link:link,
        .ff-engineering .ff-editorial-link:visited {
          margin-top: 24px;
          color: #f2a9c7;
        }

        .ff-engineering .ff-editorial-link:hover {
          color: #ffffff;
        }

        .ff-blueprint {
          position: relative;
          min-height: 390px;
          padding: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 28px;
          background:
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            rgba(255, 255, 255, 0.03);
          background-size: 28px 28px;
        }

        .ff-blueprint svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .ff-blueprint-label {
          position: absolute;
          padding: 8px 11px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 10px;
          background: rgba(24, 25, 35, 0.92);
          font-size: 12px;
          line-height: 1.35;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-blueprint-label-one {
          top: 28px;
          right: 26px;
        }

        .ff-blueprint-label-two {
          bottom: 30px;
          left: 28px;
        }

        .ff-blueprint-label-three {
          right: 28px;
          bottom: 82px;
        }

        .ff-engineering-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-engineering-item {
          min-width: 0;
          padding: 30px 32px 4px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-engineering-item:first-child {
          padding-left: 0;
        }

        .ff-engineering-item:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .ff-engineering-item h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-engineering-item span {
          display: block;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.035em;
          color: #f2a9c7;
          overflow-wrap: anywhere;
        }

        .ff-engineering-item p {
          margin: 16px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: #c8cbd5;
        }

        .ff-engineering-protections {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin: 38px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-engineering-protections li {
          min-width: 0;
          padding: 18px 22px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
          color: #e1e4eb;
          text-align: center;
        }

        .ff-engineering-protections li:first-child {
          padding-left: 0;
        }

        .ff-engineering-protections li:last-child {
          padding-right: 0;
          border-right: 0;
        }


        .ff-media {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-media-head,
        .ff-learning-head {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 76px;
          align-items: start;
        }

        .ff-media h2,
        .ff-learning h2,
        .ff-process h2,
        .ff-preserve h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-media-copy,
        .ff-learning-copy {
          max-width: 720px;
        }

        .ff-media-copy p,
        .ff-learning-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-media-studio {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          margin-top: 52px;
          overflow: hidden;
          border: 1px solid var(--ff-line);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 22px 54px rgba(24, 31, 50, 0.07);
        }

        .ff-media-preview {
          min-width: 0;
          padding: 34px 36px 32px;
          background: #181923;
          color: #ffffff;
        }

        .ff-media-preview-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .ff-media-preview-top strong {
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-media-preview-top span {
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
          color: #f2a9c7;
        }

        .ff-video-screen {
          position: relative;
          min-height: 296px;
          margin-top: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 20px;
          background:
            radial-gradient(circle at 72% 22%, rgba(193, 29, 99, 0.2), transparent 34%),
            linear-gradient(145deg, #303342 0%, #242631 55%, #1f2029 100%);
        }

        .ff-video-scene {
          position: absolute;
          inset: 0;
        }

        .ff-video-scene::before,
        .ff-video-scene::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
        }

        .ff-video-scene::before {
          top: 52px;
          left: 54px;
          width: 44%;
          height: 112px;
          background: rgba(255, 255, 255, 0.035);
        }

        .ff-video-scene::after {
          top: 78px;
          right: 54px;
          width: 30%;
          height: 84px;
          background: rgba(253, 242, 247, 0.055);
        }

        .ff-video-badge {
          position: absolute;
          top: 22px;
          left: 22px;
          z-index: 2;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.045em;
          color: #ffffff;
        }

        .ff-video-caption {
          position: absolute;
          right: 24px;
          bottom: 24px;
          left: 24px;
          z-index: 2;
          padding: 15px 18px;
          border-radius: 14px;
          background: rgba(12, 13, 18, 0.9);
          text-align: center;
        }

        .ff-video-caption strong {
          display: block;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-video-caption span {
          display: block;
          margin-top: 5px;
          font-size: 11px;
          line-height: 1.4;
          color: #f2a9c7;
        }

        .ff-waveform {
          height: 64px;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 18px;
          padding: 0 4px;
        }

        .ff-waveform span {
          flex: 1 1 0;
          max-width: 8px;
          min-width: 3px;
          border-radius: 999px;
          background: rgba(242, 169, 199, 0.78);
        }

        .ff-media-layers {
          padding: 12px 36px;
          background: #ffffff;
        }

        .ff-media-layer {
          padding: 23px 0 24px;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-media-layer:last-child {
          border-bottom: 0;
        }

        .ff-media-layer h3 {
          margin: 0;
          font-size: 19px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-media-layer span {
          display: block;
          margin-top: 7px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-media-layer p {
          margin: 13px 0 0;
          font-size: 14px;
          line-height: 1.66;
          color: var(--ff-body);
        }

        .ff-media-validation {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin: 38px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--ff-line);
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-media-validation li {
          min-width: 0;
          padding: 18px 22px;
          border-right: 1px solid var(--ff-line);
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
          color: #596579;
          text-align: center;
        }

        .ff-media-validation li:first-child {
          padding-left: 0;
        }

        .ff-media-validation li:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .ff-learning {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-learning-system {
          display: grid;
          grid-template-columns: minmax(340px, 0.88fr) minmax(0, 1.12fr);
          margin-top: 52px;
          overflow: hidden;
          border: 1px solid #dfe4eb;
          border-radius: 30px;
          background: #ffffff;
        }

        .ff-course-preview {
          min-width: 0;
          padding: 34px;
          background: var(--ff-blush);
          border-right: 1px solid #eadce4;
        }

        .ff-course-window {
          overflow: hidden;
          border: 1px solid #e6d7df;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 16px 34px rgba(67, 37, 52, 0.08);
        }

        .ff-course-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 15px 17px;
          border-bottom: 1px solid #e8e3e6;
        }

        .ff-course-toolbar strong {
          font-size: 13px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-course-toolbar span {
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-magenta-deep);
        }

        .ff-course-body {
          display: grid;
          grid-template-columns: 112px minmax(0, 1fr);
          min-height: 302px;
        }

        .ff-course-nav {
          padding: 20px 14px;
          background: #f7f4f6;
          border-right: 1px solid #e8e3e6;
        }

        .ff-course-nav span {
          display: block;
          padding: 10px 9px;
          border-radius: 9px;
          font-size: 11px;
          line-height: 1.35;
          color: #77707a;
        }

        .ff-course-nav span + span {
          margin-top: 6px;
        }

        .ff-course-nav .is-active {
          background: #ffffff;
          color: var(--ff-magenta-deep);
          font-weight: 600;
          box-shadow: 0 5px 14px rgba(69, 39, 55, 0.07);
        }

        .ff-course-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 26px;
        }

        .ff-course-progress {
          width: 100%;
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: #eceef2;
        }

        .ff-course-progress span {
          display: block;
          width: 62%;
          height: 100%;
          border-radius: inherit;
          background: var(--ff-magenta);
        }

        .ff-course-content h3 {
          margin: 25px 0 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-course-content p {
          margin: 13px 0 0;
          font-size: 14px;
          line-height: 1.65;
          color: var(--ff-body);
        }

        .ff-course-question {
          margin-top: 22px;
          padding: 14px 16px;
          border: 1px solid #e2e5eb;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 600;
          color: #596579;
        }

        .ff-learning-components {
          padding: 12px 38px;
        }

        .ff-learning-component {
          display: grid;
          grid-template-columns: minmax(150px, 0.72fr) minmax(0, 1.28fr);
          gap: 26px;
          align-items: start;
          padding: 24px 0;
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-learning-component:last-child {
          border-bottom: 0;
        }

        .ff-learning-component h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-learning-component span {
          display: block;
          margin-top: 7px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--ff-magenta-deep);
          overflow-wrap: anywhere;
        }

        .ff-learning-component p {
          margin: 0;
          font-size: 14px;
          line-height: 1.67;
          color: var(--ff-body);
        }

        .ff-learning-sync {
          display: grid;
          grid-template-columns: minmax(220px, 0.76fr) minmax(0, 1.24fr);
          gap: 50px;
          align-items: center;
          margin-top: 42px;
          padding: 27px 0;
          border-top: 1px solid #dce1e8;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-learning-sync h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-training-assets {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .ff-training-assets li {
          min-width: 0;
          padding: 4px 18px;
          border-left: 1px solid #dce1e8;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
          color: #596579;
          text-align: center;
        }

        .ff-process {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-process-head {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .ff-process-head p {
          max-width: 760px;
          margin: 22px auto 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-process-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 56px;
          border-top: 1px solid var(--ff-line);
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-process-step {
          min-width: 0;
          padding: 31px 34px 33px;
          border-right: 1px solid var(--ff-line);
        }

        .ff-process-step:nth-child(-n + 3) {
          border-bottom: 1px solid var(--ff-line);
        }

        .ff-process-step:nth-child(3n + 1) {
          padding-left: 0;
        }

        .ff-process-step:nth-child(3n) {
          padding-right: 0;
          border-right: 0;
        }

        .ff-process-number {
          display: block;
          margin-bottom: 17px;
          font-size: 12px;
          line-height: 1.3;
          letter-spacing: 0.12em;
          font-weight: 600;
          color: var(--ff-magenta-deep);
        }

        .ff-process-step h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-process-step p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-process-note {
          max-width: 920px;
          margin: 34px auto 0;
          padding: 21px 28px;
          border: 1px solid #eadde4;
          border-radius: 20px;
          background: var(--ff-blush);
          font-size: 15px;
          line-height: 1.68;
          color: #584b53;
          text-align: center;
        }

        .ff-process-note strong {
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-preserve {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          background: #181923;
          color: #ffffff;
        }

        .ff-preserve::after {
          content: "";
          position: absolute;
          right: -170px;
          bottom: -220px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.16), rgba(193, 29, 99, 0) 70%);
          pointer-events: none;
        }

        .ff-preserve-head {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 76px;
          align-items: start;
        }

        .ff-preserve .ff-eyebrow {
          color: #f2a9c7;
        }

        .ff-preserve h2 {
          color: #ffffff;
        }

        .ff-preserve-copy {
          max-width: 720px;
        }

        .ff-preserve-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: #c8cbd5;
        }

        .ff-preserve-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-preserve-item {
          min-width: 0;
          padding: 31px 32px 34px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-preserve-item:nth-child(-n + 3) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .ff-preserve-item:nth-child(3n + 1) {
          padding-left: 0;
        }

        .ff-preserve-item:nth-child(3n) {
          padding-right: 0;
          border-right: 0;
        }

        .ff-preserve-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 19px;
          border: 1px solid rgba(242, 169, 199, 0.28);
          border-radius: 14px;
          background: rgba(193, 29, 99, 0.08);
          color: #f2a9c7;
        }

        .ff-preserve-item h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: #ffffff;
        }

        .ff-preserve-item p {
          margin: 13px 0 0;
          font-size: 15px;
          line-height: 1.68;
          color: #c8cbd5;
        }

        .ff-preserve-note {
          position: relative;
          z-index: 1;
          max-width: 880px;
          margin: 35px auto 0;
          font-size: 15px;
          line-height: 1.7;
          color: #d9dce4;
          text-align: center;
        }

        .ff-preserve-note strong {
          font-weight: 600;
          color: #ffffff;
        }


        @media (max-width: 1180px) {
          .ff-shell {
            padding-inline: 40px;
          }

          .ff-hero-flow {
            grid-template-columns: minmax(0, 0.92fr) 38px minmax(240px, 1fr) 38px minmax(0, 1fr);
            gap: 12px;
            padding-inline: 28px;
          }

          .ff-intro-grid {
            gap: 60px;
          }

          .ff-section-head,
          .ff-business-head,
          .ff-publishing-head {
            gap: 54px;
          }

          .ff-directory-console {
            grid-template-columns: 250px minmax(0, 1fr);
          }

          .ff-directory-main {
            padding-inline: 28px;
          }

          .ff-format-result {
            gap: 20px;
          }

          .ff-pdf-grid {
            gap: 62px;
          }

          .ff-publishing-row {
            gap: 28px;
          }

          .ff-dtp-panel {
            gap: 42px;
          }

        }

        @media (max-width: 920px) {
          .ff-hero {
            padding: 92px 0 80px;
          }

          .ff-hero h1 {
            font-size: 42px;
          }

          .ff-hero-flow {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 30px;
          }

          .ff-flow-arrow {
            height: 30px;
            transform: rotate(90deg);
          }

          .ff-format-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }

          .ff-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-trust-item {
            padding: 28px 30px;
          }

          .ff-trust-item:first-child,
          .ff-trust-item:nth-child(3) {
            padding-left: 0;
          }

          .ff-trust-item:nth-child(2),
          .ff-trust-item:last-child {
            padding-right: 0;
          }

          .ff-trust-item:nth-child(3),
          .ff-trust-item:nth-child(4) {
            border-top: 1px solid var(--ff-line);
          }

          .ff-trust-item:nth-child(3)::before {
            display: none;
          }

          .ff-trust-item + .ff-trust-item::before {
            top: 24px;
            bottom: 24px;
          }

          .ff-intro-grid {
            grid-template-columns: 1fr;
            gap: 54px;
          }

          .ff-intro-copy {
            max-width: 760px;
          }

          .ff-section-head,
          .ff-business-head,
          .ff-publishing-head,
          .ff-pdf-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .ff-directory-console {
            grid-template-columns: 1fr;
          }

          .ff-directory-sidebar {
            border-right: 0;
            border-bottom: 1px solid var(--ff-line);
          }

          .ff-directory-nav {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .ff-directory-nav button {
            align-content: center;
          }

          .ff-business-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-business-item,
          .ff-business-item:nth-child(3n + 1),
          .ff-business-item:nth-child(3n) {
            padding: 28px 28px 30px;
            border-right: 1px solid #dce1e8;
          }

          .ff-business-item:nth-child(2n + 1) {
            padding-left: 0;
          }

          .ff-business-item:nth-child(2n) {
            padding-right: 0;
            border-right: 0;
          }

          .ff-business-note {
            grid-template-columns: 160px minmax(0, 1fr);
          }

          .ff-pdf h2 {
            max-width: 720px;
          }

          .ff-pdf-copy {
            max-width: 760px;
          }

          .ff-publishing-row {
            grid-template-columns: minmax(160px, 0.8fr) minmax(0, 1.3fr);
          }

          .ff-publishing-source {
            grid-column: 2;
            margin-top: -12px !important;
          }

          .ff-dtp-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }

        }

        @media (max-width: 768px) {
          .ff-shell {
            padding-inline: 24px;
          }

          .ff-hero {
            padding: 82px 0 72px;
          }

          .ff-hero-flow {
            margin-top: 52px;
          }

          .ff-format-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .ff-intro {
            padding: 72px 0;
          }

          .ff-intro h2 {
            font-size: 32px;
          }

          .ff-layer-row {
            grid-template-columns: 38px 112px minmax(0, 1fr);
            gap: 16px;
          }

          .ff-directory,
          .ff-business,
          .ff-pdf,
          .ff-publishing {
            padding: 72px 0;
          }

          .ff-section-head h2,
          .ff-business-head h2,
          .ff-pdf h2,
          .ff-publishing-head h2 {
            font-size: 32px;
          }

          .ff-directory-console {
            margin-top: 42px;
            border-radius: 24px;
          }

          .ff-directory-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-format-result {
            grid-template-columns: minmax(150px, 0.8fr) minmax(140px, 0.72fr) minmax(0, 1.2fr);
          }

          .ff-pdf-row {
            grid-template-columns: 145px minmax(0, 1fr);
          }

          .ff-dtp-panel {
            padding: 36px 34px;
          }

        }

        @media (max-width: 560px) {
          .ff-shell {
            padding-inline: 20px;
          }

          .ff-hero {
            padding: 72px 0 64px;
          }

          .ff-hero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .ff-hero-lead {
            margin-top: 22px;
            font-size: 18px;
            line-height: 1.65;
          }

          .ff-hero-support {
            font-size: 16px;
          }

          .ff-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            width: 100%;
            margin-top: 30px;
          }

          .ff-button {
            width: 100%;
            min-height: 50px;
          }

          .ff-hero-flow {
            margin-top: 46px;
            padding: 24px 20px;
            border-radius: 24px;
          }

          .ff-workflow-panel {
            padding: 22px 20px;
            border-radius: 20px;
          }

          .ff-trust-grid {
            grid-template-columns: 1fr;
          }

          .ff-trust-item,
          .ff-trust-item:first-child,
          .ff-trust-item:nth-child(2),
          .ff-trust-item:nth-child(3),
          .ff-trust-item:last-child {
            padding: 24px 0;
          }

          .ff-trust-item + .ff-trust-item::before {
            display: none;
          }

          .ff-trust-item:nth-child(2),
          .ff-trust-item:nth-child(3),
          .ff-trust-item:nth-child(4) {
            border-top: 1px solid var(--ff-line);
          }

          .ff-intro {
            padding: 68px 0;
          }

          .ff-intro-grid {
            gap: 44px;
          }

          .ff-intro h2 {
            font-size: 30px;
          }

          .ff-layer-row {
            grid-template-columns: 34px minmax(0, 1fr);
            gap: 14px;
            padding: 22px 0;
          }

          .ff-layer-title {
            margin-top: 1px;
          }

          .ff-layer-text {
            grid-column: 2;
            margin-top: -4px;
          }

          .ff-directory,
          .ff-business,
          .ff-pdf,
          .ff-publishing {
            padding: 68px 0;
          }

          .ff-section-head,
          .ff-business-head,
          .ff-publishing-head,
          .ff-pdf-grid {
            gap: 28px;
          }

          .ff-section-head h2,
          .ff-business-head h2,
          .ff-pdf h2,
          .ff-publishing-head h2 {
            font-size: 30px;
          }

          .ff-section-intro,
          .ff-business-copy p,
          .ff-publishing-copy p {
            font-size: 16px;
          }

          .ff-directory-sidebar {
            padding: 20px;
          }

          .ff-directory-nav {
            display: none;
          }

          .ff-directory-sidebar-label {
            display: none;
          }

          .ff-directory-select-wrap {
            display: grid;
            gap: 9px;
            margin-top: 0;
          }

          .ff-directory-select-wrap label {
            font-size: 13px;
            line-height: 1.4;
            font-weight: 600;
            color: var(--ff-ink);
          }

          .ff-directory-select {
            width: 100%;
            min-height: 48px;
            padding: 10px 38px 10px 13px;
            border: 1px solid #d9dee7;
            border-radius: 13px;
            background: #ffffff;
            color: var(--ff-ink);
            font: inherit;
            font-size: 14px;
            font-weight: 600;
          }

          .ff-directory-main {
            padding: 22px 20px 26px;
          }

          .ff-search-input {
            min-height: 50px;
            padding-left: 45px;
          }

          .ff-directory-results-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
            margin-top: 24px;
          }

          .ff-format-result {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 20px 0;
          }

          .ff-directory-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .ff-show-all {
            min-height: 44px;
          }

          .ff-business-grid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .ff-business-item,
          .ff-business-item:nth-child(3n + 1),
          .ff-business-item:nth-child(3n),
          .ff-business-item:nth-child(2n + 1),
          .ff-business-item:nth-child(2n) {
            padding: 25px 0 27px;
            border-right: 0;
          }

          .ff-business-note {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .ff-pdf-row {
            grid-template-columns: 1fr;
            gap: 9px;
            padding: 22px 0;
          }

          .ff-publishing-table {
            margin-top: 42px;
          }

          .ff-publishing-row {
            grid-template-columns: 1fr;
            gap: 13px;
            padding: 24px 0;
          }

          .ff-publishing-source {
            grid-column: auto;
            margin-top: 0 !important;
          }

          .ff-dtp-panel {
            margin-top: 42px;
            padding: 30px 24px;
            border-radius: 24px;
          }

          .ff-dtp-panel h3 {
            font-size: 23px;
          }

          .ff-dtp-list {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 360px) {
          .ff-format-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-hero-flow {
            padding-inline: 18px;
          }
        }


        @media (max-width: 1180px) {
          .ff-technical-head,
          .ff-software-head,
          .ff-exchange-head {
            gap: 54px;
          }

          .ff-technical-layout {
            gap: 40px;
          }

          .ff-engineering-top {
            gap: 58px;
          }

          .ff-exchange-row {
            gap: 22px;
          }
        }

        @media (max-width: 920px) {
          .ff-technical-head,
          .ff-software-head,
          .ff-exchange-head,
          .ff-engineering-top {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .ff-technical-layout {
            grid-template-columns: 1fr;
          }

          .ff-structure-panel {
            position: static;
          }

          .ff-software-workbench {
            grid-template-columns: 1fr;
          }

          .ff-exchange-row {
            grid-template-columns: minmax(140px, 0.65fr) minmax(180px, 0.85fr) minmax(0, 1.5fr);
          }

          .ff-exchange-role {
            display: none;
          }

          .ff-exchange-assets {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .ff-engineering-top {
            align-items: start;
          }

          .ff-blueprint {
            min-height: 360px;
          }

          .ff-engineering-grid {
            grid-template-columns: 1fr;
          }

          .ff-engineering-item,
          .ff-engineering-item:first-child,
          .ff-engineering-item:last-child {
            padding: 26px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }

          .ff-engineering-protections {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-engineering-protections li:nth-child(2) {
            border-right: 0;
          }

          .ff-engineering-protections li:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }
        }

        @media (max-width: 768px) {
          .ff-technical,
          .ff-software,
          .ff-exchange,
          .ff-engineering {
            padding: 72px 0;
          }

          .ff-technical-head h2,
          .ff-software-head h2,
          .ff-exchange-head h2,
          .ff-engineering h2 {
            font-size: 32px;
          }

          .ff-software-grid {
            gap: 0;
          }

          .ff-exchange-row {
            grid-template-columns: minmax(130px, 0.62fr) minmax(160px, 0.8fr) minmax(0, 1.58fr);
          }

          .ff-engineering-top {
            gap: 34px;
          }
        }

        @media (max-width: 560px) {
          .ff-technical,
          .ff-software,
          .ff-exchange,
          .ff-engineering {
            padding: 68px 0;
          }

          .ff-technical-head,
          .ff-software-head,
          .ff-exchange-head,
          .ff-engineering-top {
            gap: 28px;
          }

          .ff-technical-head h2,
          .ff-software-head h2,
          .ff-exchange-head h2,
          .ff-engineering h2 {
            font-size: 30px;
          }

          .ff-technical-copy p,
          .ff-software-copy p,
          .ff-exchange-copy p {
            font-size: 16px;
          }

          .ff-technical-layout,
          .ff-software-workbench,
          .ff-software-grid,
          .ff-exchange-table {
            margin-top: 42px;
          }

          .ff-technical-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 24px 0;
          }

          .ff-structure-panel {
            padding: 30px 24px 26px;
            border-radius: 24px;
          }

          .ff-structure-panel h3,
          .ff-protection-panel h3,
          .ff-exchange-assets h3 {
            font-size: 23px;
          }

          .ff-software-workbench {
            border-radius: 24px;
          }

          .ff-code-panel,
          .ff-protection-panel {
            padding: 28px 22px 30px;
          }

          .ff-code-toolbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
          }

          .ff-code-line {
            grid-template-columns: 1fr;
            gap: 4px;
          }

          .ff-protection-list {
            grid-template-columns: 1fr;
          }

          .ff-software-grid {
            grid-template-columns: 1fr;
          }

          .ff-software-item,
          .ff-software-item:nth-child(2n + 1),
          .ff-software-item:nth-child(2n) {
            padding: 25px 0 27px;
            border-right: 0;
          }

          .ff-exchange-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 24px 0;
          }

          .ff-exchange-role {
            display: block;
            margin-top: 2px;
          }

          .ff-exchange-assets {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 42px;
            padding: 30px 24px;
            border-radius: 24px;
          }

          .ff-blueprint {
            min-height: 300px;
            padding: 20px;
            border-radius: 24px;
          }

          .ff-blueprint-label {
            font-size: 11px;
          }

          .ff-blueprint-label-one {
            top: 18px;
            right: 18px;
          }

          .ff-blueprint-label-two {
            bottom: 18px;
            left: 18px;
          }

          .ff-blueprint-label-three {
            right: 18px;
            bottom: 66px;
          }

          .ff-engineering-grid {
            margin-top: 42px;
          }

          .ff-engineering-protections {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .ff-engineering-protections li,
          .ff-engineering-protections li:first-child,
          .ff-engineering-protections li:last-child {
            padding: 16px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
            text-align: left;
          }

          .ff-engineering-protections li:last-child {
            border-bottom: 0;
          }
        }


        @media (max-width: 920px) {
          .ff-media-head,
          .ff-learning-head,
          .ff-preserve-head {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ff-media-studio,
          .ff-learning-system {
            grid-template-columns: 1fr;
          }

          .ff-course-preview {
            border-right: 0;
            border-bottom: 1px solid #eadce4;
          }

          .ff-process-grid,
          .ff-preserve-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-process-step,
          .ff-process-step:nth-child(3n + 1),
          .ff-process-step:nth-child(3n),
          .ff-preserve-item,
          .ff-preserve-item:nth-child(3n + 1),
          .ff-preserve-item:nth-child(3n) {
            padding: 29px 28px 31px;
            border-right: 1px solid var(--ff-line);
          }

          .ff-process-step:nth-child(2n),
          .ff-preserve-item:nth-child(2n) {
            padding-right: 0;
            border-right: 0;
          }

          .ff-process-step:nth-child(2n + 1),
          .ff-preserve-item:nth-child(2n + 1) {
            padding-left: 0;
          }

          .ff-process-step:nth-child(-n + 4) {
            border-bottom: 1px solid var(--ff-line);
          }

          .ff-preserve-item,
          .ff-preserve-item:nth-child(3n + 1),
          .ff-preserve-item:nth-child(3n) {
            border-right-color: rgba(255, 255, 255, 0.16);
          }

          .ff-preserve-item:nth-child(-n + 4) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }
        }

        @media (max-width: 768px) {
          .ff-media,
          .ff-learning,
          .ff-process,
          .ff-preserve {
            padding: 80px 0;
          }

          .ff-media h2,
          .ff-learning h2,
          .ff-process h2,
          .ff-preserve h2 {
            font-size: 32px;
          }

          .ff-media-studio,
          .ff-learning-system {
            margin-top: 46px;
          }

          .ff-media-validation {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-media-validation li {
            border-bottom: 1px solid var(--ff-line);
          }

          .ff-media-validation li:nth-child(2n) {
            border-right: 0;
          }

          .ff-media-validation li:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ff-learning-component {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .ff-learning-sync {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .ff-training-assets {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-training-assets li {
            min-height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #dce1e8;
          }

          .ff-training-assets li:nth-child(2n + 1) {
            border-left: 0;
          }

          .ff-training-assets li:nth-last-child(-n + 2) {
            border-bottom: 0;
          }
        }

        @media (max-width: 560px) {
          .ff-media,
          .ff-learning,
          .ff-process,
          .ff-preserve {
            padding: 68px 0;
          }

          .ff-media h2,
          .ff-learning h2,
          .ff-process h2,
          .ff-preserve h2 {
            font-size: 30px;
          }

          .ff-media-copy p,
          .ff-learning-copy p,
          .ff-process-head p,
          .ff-preserve-copy p {
            font-size: 16px;
          }

          .ff-media-studio,
          .ff-learning-system {
            margin-top: 42px;
            border-radius: 24px;
          }

          .ff-media-preview,
          .ff-media-layers,
          .ff-course-preview,
          .ff-learning-components {
            padding-left: 22px;
            padding-right: 22px;
          }

          .ff-media-preview-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .ff-video-screen {
            min-height: 252px;
          }

          .ff-video-scene::before {
            left: 28px;
            width: 48%;
          }

          .ff-video-scene::after {
            right: 28px;
            width: 28%;
          }

          .ff-waveform {
            gap: 3px;
          }

          .ff-media-validation {
            grid-template-columns: 1fr;
          }

          .ff-media-validation li,
          .ff-media-validation li:first-child,
          .ff-media-validation li:last-child,
          .ff-media-validation li:nth-child(2n) {
            padding: 16px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ff-line);
            text-align: left;
          }

          .ff-media-validation li:last-child {
            border-bottom: 0;
          }

          .ff-course-body {
            grid-template-columns: 82px minmax(0, 1fr);
            min-height: 286px;
          }

          .ff-course-nav {
            padding: 18px 9px;
          }

          .ff-course-nav span {
            padding: 9px 7px;
            font-size: 10px;
          }

          .ff-course-content {
            padding: 24px 18px;
          }

          .ff-course-content h3 {
            font-size: 21px;
          }

          .ff-training-assets {
            grid-template-columns: 1fr;
          }

          .ff-training-assets li,
          .ff-training-assets li:nth-child(2n + 1) {
            justify-content: flex-start;
            min-height: auto;
            padding: 14px 0;
            border-left: 0;
            border-bottom: 1px solid #dce1e8;
            text-align: left;
          }

          .ff-training-assets li:last-child {
            border-bottom: 0;
          }

          .ff-process-grid,
          .ff-preserve-grid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .ff-process-step,
          .ff-process-step:nth-child(3n + 1),
          .ff-process-step:nth-child(3n),
          .ff-process-step:nth-child(2n),
          .ff-process-step:nth-child(2n + 1),
          .ff-preserve-item,
          .ff-preserve-item:nth-child(3n + 1),
          .ff-preserve-item:nth-child(3n),
          .ff-preserve-item:nth-child(2n),
          .ff-preserve-item:nth-child(2n + 1) {
            padding: 27px 0 29px;
            border-right: 0;
            border-bottom: 1px solid var(--ff-line);
          }

          .ff-process-step:last-child {
            border-bottom: 0;
          }

          .ff-preserve-item,
          .ff-preserve-item:nth-child(-n + 4),
          .ff-preserve-item:nth-child(-n + 3) {
            border-bottom-color: rgba(255, 255, 255, 0.16);
          }

          .ff-preserve-item:last-child {
            border-bottom: 0;
          }

          .ff-process-note {
            padding: 20px 22px;
            border-radius: 18px;
            text-align: left;
          }
        }


        .ff-preparation {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-preparation-head,
        .ff-custom-head,
        .ff-quality-head {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 76px;
          align-items: start;
        }

        .ff-preparation h2,
        .ff-custom h2,
        .ff-quality h2,
        .ff-related h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-preparation-copy,
        .ff-custom-copy,
        .ff-quality-copy {
          max-width: 720px;
        }

        .ff-preparation-copy p,
        .ff-custom-copy p,
        .ff-quality-copy p {
          margin: 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-preparation-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.76fr) minmax(0, 1.54fr);
          gap: 72px;
          align-items: start;
          margin-top: 56px;
        }

        .ff-source-package {
          position: sticky;
          top: 28px;
          padding: 30px;
          border: 1px solid #eadce4;
          border-radius: 28px;
          background: var(--ff-blush);
        }

        .ff-source-package-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(193, 29, 99, 0.18);
          border-radius: 15px;
          background: #ffffff;
          color: var(--ff-magenta-deep);
        }

        .ff-source-package h3 {
          margin: 22px 0 0;
          font-size: 24px;
          line-height: 1.32;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-source-package > p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-source-package-list {
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid #e6cfd9;
        }

        .ff-source-package-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 0;
          border-bottom: 1px solid #e6cfd9;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-source-package-list li:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .ff-source-package-list svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--ff-magenta);
        }

        .ff-preparation-list {
          border-top: 1px solid #dce1e8;
        }

        .ff-preparation-item {
          display: grid;
          grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr);
          gap: 34px;
          align-items: start;
          padding: 25px 0 27px;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-preparation-item h3 {
          margin: 0;
          font-size: 19px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-preparation-item p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-preparation-foot {
          max-width: 950px;
          margin: 34px 0 0 auto;
          padding-left: 18px;
          border-left: 3px solid var(--ff-magenta);
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-preparation-foot strong {
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-custom {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-custom-system {
          display: grid;
          grid-template-columns: minmax(320px, 0.82fr) minmax(0, 1.18fr);
          margin-top: 54px;
          overflow: hidden;
          border: 1px solid #e1e5eb;
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 22px 52px rgba(24, 31, 50, 0.06);
        }

        .ff-custom-visual {
          min-width: 0;
          padding: 38px;
          border-right: 1px solid #e1e5eb;
          background: linear-gradient(145deg, #fff8fb 0%, #fdf2f7 100%);
        }

        .ff-custom-file-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .ff-custom-file-top strong {
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-custom-file-top span {
          padding: 6px 9px;
          border: 1px solid #e3c9d5;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.76);
          font-size: 10px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ff-magenta-deep);
        }

        .ff-custom-code {
          margin-top: 24px;
          padding: 24px;
          border: 1px solid #e4ccd7;
          border-radius: 20px;
          background: #ffffff;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 12px;
          line-height: 1.8;
          color: #596276;
          overflow-wrap: anywhere;
        }

        .ff-custom-code > span {
          display: block;
        }

        .ff-custom-code .is-key {
          color: var(--ff-magenta-deep);
        }

        .ff-custom-code .is-value {
          color: #245d79;
        }

        .ff-custom-visual h3 {
          margin: 28px 0 0;
          font-size: 24px;
          line-height: 1.34;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-custom-visual p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ff-body);
        }

        .ff-custom-steps {
          padding: 20px 36px 22px;
        }

        .ff-custom-step {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 22px 0 24px;
          border-bottom: 1px solid #e1e5eb;
        }

        .ff-custom-step:last-child {
          border-bottom: 0;
        }

        .ff-custom-number {
          padding-top: 2px;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--ff-magenta-deep);
        }

        .ff-custom-step h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-custom-step p {
          margin: 8px 0 0;
          font-size: 14px;
          line-height: 1.66;
          color: var(--ff-body);
        }

        .ff-custom-action {
          display: flex;
          justify-content: flex-start;
          margin-top: 28px;
        }

        .ff-quality {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-quality-matrix {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid #dce1e8;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-quality-item {
          min-width: 0;
          padding: 31px 32px 34px;
          border-right: 1px solid #dce1e8;
        }

        .ff-quality-item:nth-child(-n + 3) {
          border-bottom: 1px solid #dce1e8;
        }

        .ff-quality-item:nth-child(3n + 1) {
          padding-left: 0;
        }

        .ff-quality-item:nth-child(3n) {
          padding-right: 0;
          border-right: 0;
        }

        .ff-quality-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 19px;
          border: 1px solid #ead4de;
          border-radius: 14px;
          background: var(--ff-blush);
          color: var(--ff-magenta-deep);
        }

        .ff-quality-item h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-quality-item p {
          margin: 13px 0 0;
          font-size: 15px;
          line-height: 1.68;
          color: var(--ff-body);
        }

        .ff-quality-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 28px;
          margin-top: 30px;
        }

        .ff-quality-links .ff-editorial-link {
          margin-top: 0;
        }

        .ff-related {
          padding: 96px 0;
          background: var(--ff-soft);
        }

        .ff-related-head {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .ff-related-head p {
          margin: 20px auto 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-related-columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 72px;
          margin-top: 54px;
        }

        .ff-related-group {
          min-width: 0;
        }

        .ff-related-group > h3 {
          margin: 0;
          padding-bottom: 17px;
          border-bottom: 1px solid #d5dbe4;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-resource-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .ff-resource-row,
        .ff-resource-row:link,
        .ff-resource-row:visited {
          min-height: 92px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          gap: 18px;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #dce1e8;
          color: var(--ff-ink);
          text-decoration: none;
        }

        .ff-resource-row strong {
          display: block;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-resource-row small {
          display: block;
          margin-top: 6px;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 400;
          color: var(--ff-body);
        }

        .ff-resource-row svg {
          color: var(--ff-magenta-deep);
          transition: transform 160ms ease;
        }

        .ff-resource-row:hover strong {
          color: var(--ff-magenta-dark);
        }

        .ff-resource-row:hover svg {
          transform: translateX(3px);
        }

        .ff-resource-row:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .ff-faq {
          padding: 96px 0;
          background: #ffffff;
        }

        .ff-faq-head {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .ff-faq h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
          color: var(--ff-ink);
        }

        .ff-faq-head p {
          margin: 20px auto 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-faq-panel {
          max-width: 980px;
          margin: 54px auto 0;
          border-top: 1px solid #dce1e8;
          border-bottom: 1px solid #dce1e8;
        }

        .ff-faq-item + .ff-faq-item {
          border-top: 1px solid #dce1e8;
        }

        .ff-faq-item h3 {
          margin: 0;
        }

        .ff-faq-question {
          width: 100%;
          min-height: 76px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 38px;
          gap: 22px;
          align-items: center;
          padding: 22px 0;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
          color: var(--ff-ink);
          font: inherit;
        }

        .ff-faq-question > span:first-child {
          min-width: 0;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .ff-faq-toggle {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-self: end;
          border: 1px solid #dce1e8;
          border-radius: 50%;
          background: #ffffff;
          color: var(--ff-magenta-deep);
          transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
        }

        .ff-faq-question[aria-expanded="true"] .ff-faq-toggle {
          border-color: #e4bfd0;
          background: var(--ff-blush);
          color: var(--ff-magenta);
        }

        .ff-faq-question:hover {
          color: var(--ff-magenta-dark);
        }

        .ff-faq-question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 5px;
          border-radius: 4px;
        }

        .ff-faq-answer {
          max-width: 850px;
          padding: 0 72px 27px 0;
        }

        .ff-faq-answer p {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: var(--ff-body);
        }

        .ff-final-cta {
          padding: 96px 0;
          background: #f6f7fa;
          border-top: 1px solid #e3e6ec;
        }

        .ff-final-cta-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 72px 64px;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #fdf5f8 100%);
          border: 1px solid #eadde4;
          border-radius: 30px;
          box-shadow: 0 20px 52px rgba(31, 37, 48, 0.07);
        }

        .ff-final-cta .ff-eyebrow {
          margin-bottom: 18px;
          color: var(--ff-magenta-deep);
        }

        .ff-final-cta h2 {
          max-width: 820px;
          margin: 0 auto;
          font-size: 40px;
          line-height: 1.14;
          letter-spacing: -0.03em;
          font-weight: 600;
          color: var(--ff-heading);
        }

        .ff-final-cta p {
          max-width: 780px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--ff-body);
        }

        .ff-final-cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 34px;
        }

        @media (max-width: 920px) {
          .ff-preparation-head,
          .ff-custom-head,
          .ff-quality-head {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ff-preparation-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .ff-source-package {
            position: relative;
            top: auto;
          }

          .ff-custom-system {
            grid-template-columns: 1fr;
          }

          .ff-custom-visual {
            border-right: 0;
            border-bottom: 1px solid #e1e5eb;
          }

          .ff-quality-matrix {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ff-quality-item,
          .ff-quality-item:nth-child(3n + 1),
          .ff-quality-item:nth-child(3n) {
            padding: 29px 28px 31px;
            border-right: 1px solid #dce1e8;
          }

          .ff-quality-item:nth-child(2n) {
            padding-right: 0;
            border-right: 0;
          }

          .ff-quality-item:nth-child(2n + 1) {
            padding-left: 0;
          }

          .ff-quality-item:nth-child(-n + 4) {
            border-bottom: 1px solid #dce1e8;
          }

          .ff-related-columns {
            gap: 44px;
          }
        }

        @media (max-width: 768px) {
          .ff-preparation,
          .ff-custom,
          .ff-quality,
          .ff-related,
          .ff-faq {
            padding: 80px 0;
          }

          .ff-final-cta {
            padding: 80px 0;
          }

          .ff-final-cta-inner {
            padding: 64px 44px;
          }

          .ff-preparation h2,
          .ff-custom h2,
          .ff-quality h2,
          .ff-related h2,
          .ff-faq h2 {
            font-size: 32px;
          }

          .ff-final-cta h2 {
            font-size: 36px;
          }

          .ff-preparation-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .ff-preparation-foot {
            margin-left: 0;
          }

          .ff-related-columns {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 560px) {
          .ff-preparation,
          .ff-custom,
          .ff-quality,
          .ff-related,
          .ff-faq {
            padding: 68px 0;
          }

          .ff-final-cta {
            padding: 64px 0;
          }

          .ff-final-cta-inner {
            padding: 52px 22px;
            border-radius: 24px;
          }

          .ff-preparation h2,
          .ff-custom h2,
          .ff-quality h2,
          .ff-related h2,
          .ff-faq h2 {
            font-size: 30px;
          }

          .ff-final-cta h2 {
            font-size: 32px;
          }

          .ff-preparation-copy p,
          .ff-custom-copy p,
          .ff-quality-copy p,
          .ff-related-head p,
          .ff-faq-head p {
            font-size: 16px;
          }

          .ff-faq-panel {
            margin-top: 42px;
          }

          .ff-faq-question {
            grid-template-columns: minmax(0, 1fr) 36px;
            gap: 14px;
            padding: 20px 0;
          }

          .ff-faq-question > span:first-child {
            font-size: 17px;
          }

          .ff-faq-answer {
            padding: 0 0 24px;
          }

          .ff-final-cta p {
            font-size: 17px;
          }

          .ff-final-cta-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .ff-final-cta-actions .ff-button {
            width: 100%;
          }

          .ff-source-package,
          .ff-custom-visual,
          .ff-custom-steps {
            padding-left: 22px;
            padding-right: 22px;
          }

          .ff-source-package,
          .ff-custom-system {
            border-radius: 24px;
          }

          .ff-custom-code {
            padding: 19px;
            border-radius: 16px;
            font-size: 11px;
          }

          .ff-custom-step {
            grid-template-columns: 34px minmax(0, 1fr);
            gap: 12px;
          }

          .ff-custom-action .ff-button {
            width: 100%;
          }

          .ff-quality-matrix {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .ff-quality-item,
          .ff-quality-item:nth-child(3n + 1),
          .ff-quality-item:nth-child(3n),
          .ff-quality-item:nth-child(2n),
          .ff-quality-item:nth-child(2n + 1),
          .ff-quality-item:nth-child(-n + 4),
          .ff-quality-item:nth-child(-n + 3) {
            padding: 27px 0 29px;
            border-right: 0;
            border-bottom: 1px solid #dce1e8;
          }

          .ff-quality-item:last-child {
            border-bottom: 0;
          }

          .ff-quality-links {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .ff-resource-row,
          .ff-resource-row:link,
          .ff-resource-row:visited {
            min-height: 0;
            padding: 18px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ff-button,
          .ff-faq-toggle {
            transition: none;
          }
        }
      `}</style>

      <section className="ff-hero" aria-labelledby="file-format-support-title">
        <div className="ff-shell ff-hero-inner">
          <div className="ff-hero-copy">
            <h1 id="file-format-support-title">Translation File Format Support</h1>
            <p className="ff-hero-lead">
              Translate business documents, design files, software resources, structured content,
              multimedia, and eLearning materials while protecting the structure and functionality
              that make each file usable.
            </p>
            <p className="ff-hero-support">
              Stepes combines file engineering, AI-powered translation workflows, professional
              linguists, multilingual desktop publishing, and quality assurance to process both
              everyday documents and technically complex localization files.
            </p>
            <div className="ff-hero-actions">
              <a
                className="ff-button ff-button-primary"
                href="https://www.stepes.com/resources/file-format-support/#supported-formats"
              >
                Browse Supported Formats
                <ChevronRight />
              </a>
              <a
                className="ff-button ff-button-secondary"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to a File Specialist
                <ChevronRight />
              </a>
            </div>
          </div>

          <div className="ff-hero-flow" aria-label="File-aware translation workflow">
            <div className="ff-flow-group">
              <span className="ff-flow-kicker">Source files</span>
              <div className="ff-format-grid">
                {sourceFormats.map((format) => (
                  <div className="ff-format-chip" key={format}>
                    {format}
                  </div>
                ))}
              </div>
            </div>

            <FlowArrow />

            <div className="ff-workflow-panel">
              <span className="ff-flow-kicker">Stepes file workflow</span>
              <h3 className="ff-workflow-title">Content and structure move together</h3>
              <ul className="ff-workflow-list">
                {workflowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <FlowArrow />

            <div className="ff-flow-group">
              <span className="ff-flow-kicker">Multilingual delivery</span>
              <ul className="ff-output-list">
                {outputItems.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-trust" aria-label="Stepes translation capabilities">
        <div className="ff-shell">
          <div className="ff-trust-grid">
            {trustItems.map((item) => (
              <article className="ff-trust-item" key={item.title}>
                <h3 className="ff-trust-title">{item.title}</h3>
                <p className="ff-trust-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-intro" aria-labelledby="file-part-of-translation-title">
        <div className="ff-shell ff-intro-grid">
          <div>
            <span className="ff-eyebrow">File-Aware Translation</span>
            <h2 id="file-part-of-translation-title">Your File Is Part of the Translation</h2>
            <div className="ff-intro-copy">
              <p>
                A file is not simply a container for words. It may also contain styles, links,
                formulas, variables, tags, conditional content, timing information, graphics,
                interactive elements, or publishing instructions.
              </p>
              <p>
                A Word document may rely on heading styles and cross-references. An InDesign package
                may include linked graphics, fonts, layers, and carefully positioned text frames. A
                software resource file may combine translatable strings with keys, placeholders, and
                code. A subtitle file must preserve timing as well as meaning.
              </p>
              <p className="ff-intro-summary">
                Stepes evaluates both the linguistic content and the technical structure so the
                translated output remains accurate, functional, and ready for its intended audience.
              </p>
            </div>
          </div>

          <div className="ff-layer-list" aria-label="What translation files carry beyond words">
            {fileLayers.map((layer) => (
              <article className="ff-layer-row" key={layer.title}>
                <div className="ff-layer-icon">{layer.icon}</div>
                <h3 className="ff-layer-title">{layer.title}</h3>
                <p className="ff-layer-text">{layer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ff-directory"
        id="supported-formats"
        aria-labelledby="supported-formats-title"
      >
        <div className="ff-shell">
          <div className="ff-section-head">
            <div>
              <span className="ff-eyebrow">Supported Formats</span>
              <h2 id="supported-formats-title">Find the Right Workflow for Your File</h2>
            </div>
            <p className="ff-section-intro">
              Search by extension, application, or content type. Some files can move directly into
              translation, while others require preparation, OCR, conversion, multilingual desktop
              publishing, or localization engineering before final delivery.
            </p>
          </div>

          <div className="ff-directory-console">
            <aside className="ff-directory-sidebar" aria-label="File format categories">
              <span className="ff-directory-sidebar-label">Browse by category</span>
              <div className="ff-directory-nav">
                {categoryOptions.map((category) => {
                  const count =
                    category === "All Formats"
                      ? formatDirectory.length
                      : formatDirectory.filter((item) => item.category === category).length;

                  return (
                    <button
                      type="button"
                      key={category}
                      aria-pressed={activeCategory === category && !normalizedSearch}
                      onClick={() => selectCategory(category)}
                    >
                      <span>{category}</span>
                      <span className="ff-category-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="ff-directory-select-wrap">
                <label htmlFor="ff-format-category">File category</label>
                <select
                  className="ff-directory-select"
                  id="ff-format-category"
                  value={activeCategory}
                  onChange={(event) => selectCategory(event.target.value)}
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </aside>

            <div className="ff-directory-main">
              <div className="ff-search-wrap">
                <span className="ff-search-icon">
                  <SearchIcon />
                </span>
                <input
                  className="ff-search-input"
                  type="search"
                  value={formatSearch}
                  onChange={(event) => {
                    setFormatSearch(event.target.value);
                    setShowAllFormats(false);
                  }}
                  placeholder="Search file formats"
                  aria-label="Search supported file formats"
                />
              </div>

              <div className="ff-directory-results-head">
                <div>
                  <span className="ff-directory-results-label">Format directory</span>
                  <h3 className="ff-directory-results-title">
                    {normalizedSearch ? `Search results for “${formatSearch.trim()}”` : activeCategory}
                  </h3>
                </div>
                <p className="ff-directory-count" aria-live="polite">
                  Showing {visibleFormats.length} of {matchedFormats.length}
                </p>
              </div>

              {visibleFormats.length > 0 ? (
                <div className="ff-format-results">
                  {visibleFormats.map((item) => (
                    <article className="ff-format-result" key={`${item.category}-${item.name}`}>
                      <div>
                        <h3 className="ff-result-name">{item.name}</h3>
                        <span className="ff-result-category">{item.category}</span>
                      </div>
                      <p className="ff-result-extensions">{item.extensions}</p>
                      <p className="ff-result-handling">{item.handling}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="ff-empty-result">
                  <h3>No exact match found</h3>
                  <p>
                    Stepes can review custom, proprietary, legacy, and mixed-content formats through
                    a managed file-engineering workflow.
                  </p>
                  <a className="ff-editorial-link" href="https://www.stepes.com/contact-us/">
                    Ask About Your File Format
                    <ChevronRight size={16} />
                  </a>
                </div>
              )}

              <div className="ff-directory-footer">
                <p className="ff-directory-helper">
                  File complexity can vary significantly within the same extension. A representative
                  sample helps confirm extraction, protection rules, output requirements, and the
                  appropriate quality workflow.
                </p>
                {!normalizedSearch && activeCategory === "All Formats" && matchedFormats.length > popularFormats.length && (
                  <button
                    type="button"
                    className="ff-show-all"
                    onClick={() => setShowAllFormats((current) => !current)}
                  >
                    {showAllFormats ? "Show popular formats" : `View all ${matchedFormats.length} formats`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ff-business"
        id="business-documents"
        aria-labelledby="business-documents-title"
      >
        <div className="ff-shell">
          <div className="ff-business-head">
            <div>
              <span className="ff-eyebrow">Business Documents</span>
              <h2 id="business-documents-title">Translate Everyday Business Files Without Rebuilding Them</h2>
            </div>
            <div className="ff-business-copy">
              <p>
                Stepes processes common productivity files used for corporate communications, legal
                documents, financial reporting, training, marketing, technical documentation, and
                enterprise operations—while protecting the structure customers need after delivery.
              </p>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/document-translation-services/"
              >
                Explore Document Translation Services
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="ff-business-grid">
            {businessFormats.map((item) => (
              <article className="ff-business-item" key={item.title}>
                <h3>{item.title}</h3>
                <span className="ff-extension-line">{item.extensions}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="ff-business-note">
            <strong>Confirm nonvisible content</strong>
            <p>
              Tracked changes, comments, hidden worksheets, speaker notes, text boxes, macros,
              metadata, and embedded objects should be identified during project setup so the right
              content is included—and content that should remain unchanged is protected.
            </p>
          </div>
        </div>
      </section>

      <section className="ff-pdf" id="pdf-and-scans" aria-labelledby="pdf-and-scans-title">
        <div className="ff-shell ff-pdf-grid">
          <div>
            <span className="ff-eyebrow">PDF and Scanned Files</span>
            <h2 id="pdf-and-scans-title">The Right PDF Workflow Depends on the Source</h2>
            <div className="ff-pdf-copy">
              <p>
                PDF files can look identical on screen while requiring very different translation
                processes. A file may contain editable text, scanned page images, interactive forms,
                annotations, flattened graphics, or content exported from another design application.
              </p>
              <p>
                Stepes reviews the source condition and required output before confirming the best
                combination of extraction, OCR, translation, reconstruction, formatting, and quality
                assurance.
              </p>
            </div>
            <div className="ff-pdf-best">
              <strong>Best practice</strong>
              <p>
                Provide the original Word, PowerPoint, InDesign, FrameMaker, Illustrator, or other
                editable source together with the PDF whenever possible. Native source files usually
                improve extraction, editability, formatting, and final visual quality.
              </p>
            </div>
            <a className="ff-editorial-link" href="https://www.stepes.com/contact-us/">
              Discuss a PDF or Scanned Document
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="ff-pdf-list" aria-label="PDF and image translation workflows">
            {pdfTypes.map((item) => (
              <article className="ff-pdf-row" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ff-publishing"
        id="design-and-publishing"
        aria-labelledby="design-and-publishing-title"
      >
        <div className="ff-shell">
          <div className="ff-publishing-head">
            <div>
              <span className="ff-eyebrow">Design and Publishing</span>
              <h2 id="design-and-publishing-title">Multilingual Content That Still Looks Designed</h2>
            </div>
            <div className="ff-publishing-copy">
              <p>
                Translation can change line length, word density, font requirements, text direction,
                page flow, and visual balance. Stepes combines professional translation with
                multilingual publishing expertise so localized materials remain readable, coherent,
                and aligned with the original brand experience.
              </p>
            </div>
          </div>

          <div className="ff-publishing-table">
            {publishingFormats.map((item) => (
              <article className="ff-publishing-row" key={item.title}>
                <div className="ff-publishing-name">
                  <h3>{item.title}</h3>
                  <span>{item.extensions}</span>
                </div>
                <p>{item.text}</p>
                <p className="ff-publishing-source">{item.source}</p>
              </article>
            ))}
          </div>

          <div className="ff-dtp-panel">
            <div>
              <span className="ff-eyebrow">Multilingual DTP</span>
              <h3>Production Support Beyond Text Replacement</h3>
              <p>
                File-aware desktop publishing helps the translated content fit the intended medium,
                language conventions, and final delivery requirements.
              </p>
            </div>
            <ul className="ff-dtp-list">
              {dtpCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="ff-technical"
        id="technical-documentation"
        aria-labelledby="technical-documentation-title"
      >
        <div className="ff-shell">
          <div className="ff-technical-head">
            <div>
              <span className="ff-eyebrow">Technical Documentation</span>
              <h2 id="technical-documentation-title">Protect Reusable Content and Publishing Logic</h2>
            </div>
            <div className="ff-technical-copy">
              <p>
                Technical publications may rely on topic-based authoring, variables, reusable text,
                conditional content, metadata, cross-references, and automated publishing rules.
                Stepes separates translatable content from the surrounding structure so localized
                documentation remains connected, maintainable, and ready for its intended output.
              </p>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/technical-translation-services/"
              >
                Explore Technical Translation Services
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="ff-technical-layout">
            <div className="ff-technical-list">
              {technicalFormats.map((item) => (
                <article className="ff-technical-row" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <span>{item.extensions}</span>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <aside className="ff-structure-panel" aria-label="Structured content controls">
              <span className="ff-eyebrow">Structured Content Controls</span>
              <h3>Translate the Content, Preserve the System</h3>
              <p>
                File-specific rules expose the right language to translators while keeping the
                documentation architecture intact through translation, review, reintegration, and
                publishing.
              </p>
              <ul className="ff-structure-list">
                {structuredControls.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="ff-software"
        id="software-web-and-app-resources"
        aria-labelledby="software-resources-title"
      >
        <div className="ff-shell">
          <div className="ff-software-head">
            <div>
              <span className="ff-eyebrow">Software, Web, and App Resources</span>
              <h2 id="software-resources-title">Localize User-Facing Content Without Breaking the Code</h2>
            </div>
            <div className="ff-software-copy">
              <p>
                Software resource files combine translatable language with keys, variables,
                placeholders, escape sequences, and application logic. Stepes identifies the values
                that should be localized while protecting the technical elements required for builds,
                releases, and in-product functionality.
              </p>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/software-localization-services/"
              >
                Explore Software Localization
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="ff-software-workbench" aria-label="Example software resource file">
            <div className="ff-code-panel">
              <div className="ff-code-toolbar">
                <strong>Example resource file</strong>
                <span>Approved strings exposed for translation</span>
              </div>
              <div className="ff-code-sample">
                <div className="ff-code-line">
                  <span className="ff-code-key">"checkout.title"</span>
                  <span className="ff-code-value">"Complete your purchase"</span>
                </div>
                <div className="ff-code-line">
                  <span className="ff-code-key">"order.confirmation"</span>
                  <span className="ff-code-value">
                    "Order <span className="ff-code-variable">&#123;order_id&#125;</span> is confirmed"
                  </span>
                </div>
                <div className="ff-code-line">
                  <span className="ff-code-key">"delivery.days"</span>
                  <span className="ff-code-value">
                    "Arrives in <span className="ff-code-variable">&#123;count&#125;</span> days"
                  </span>
                </div>
                <div className="ff-code-line">
                  <span className="ff-code-key">"account.security"</span>
                  <span className="ff-code-value">"Review your security settings"</span>
                </div>
              </div>
            </div>

            <div className="ff-protection-panel">
              <span className="ff-eyebrow">Protected Elements</span>
              <h3>Language Changes. Application Logic Does Not.</h3>
              <p>
                The workflow protects nontranslatable syntax and validates the multilingual resource
                against the technical requirements established for the product.
              </p>
              <ul className="ff-protection-list">
                {softwareProtections.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ff-software-grid">
            {softwareResourceGroups.map((item) => (
              <article className="ff-software-item" key={item.title}>
                <h3>{item.title}</h3>
                <span>{item.extensions}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ff-exchange"
        id="localization-exchange-files"
        aria-labelledby="localization-exchange-title"
      >
        <div className="ff-shell">
          <div className="ff-exchange-head">
            <div>
              <span className="ff-eyebrow">Localization Exchange</span>
              <h2 id="localization-exchange-title">Work With Existing Translation Assets and Tool Exports</h2>
            </div>
            <div className="ff-exchange-copy">
              <p>
                Translation programs do not always begin with the original source file. Stepes can
                work with bilingual exchange files, translation memories, vendor handoff packages,
                and exports from existing localization platforms for translation, review, migration,
                quality validation, or continued program support.
              </p>
            </div>
          </div>

          <div className="ff-exchange-table" aria-label="Localization exchange file support">
            {exchangeFormats.map((item) => (
              <article className="ff-exchange-row" key={item.title}>
                <h3>{item.title}</h3>
                <p className="ff-exchange-extensions">{item.extensions}</p>
                <p className="ff-exchange-role">{item.role}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="ff-exchange-assets">
            <div>
              <span className="ff-eyebrow">Language Asset Continuity</span>
              <h3>Bring Approved Language Forward</h3>
            </div>
            <div>
              <p>
                Existing translation memories, glossaries, bilingual reference files, and approved
                terminology can be evaluated and incorporated into the new workflow. This helps
                preserve prior decisions, improve consistency, and reduce unnecessary retranslation
                across documents, products, and future updates.
              </p>
              <a className="ff-editorial-link" href="https://www.stepes.com/translation-memory/">
                Explore Translation Memory
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ff-engineering"
        id="engineering-and-visual-content"
        aria-labelledby="engineering-content-title"
      >
        <div className="ff-shell">
          <div className="ff-engineering-top">
            <div>
              <span className="ff-eyebrow">Engineering and Visual Content</span>
              <h2 id="engineering-content-title">Translate Technical Visuals Without Losing Their Meaning</h2>
              <div className="ff-engineering-copy">
                <p>
                  Drawings, process diagrams, schematics, infographics, and screenshots often contain
                  small but critical language: dimensions, warnings, legends, component names,
                  interface labels, and callouts. Stepes keeps translated text connected to the visual
                  information it describes.
                </p>
              </div>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/technical-translation-services/"
              >
                Explore Technical Translation Services
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="ff-blueprint" aria-label="Illustrative technical drawing with localized callouts">
              <svg viewBox="0 0 640 360" fill="none" aria-hidden="true" focusable="false">
                <rect x="118" y="82" width="286" height="180" rx="8" stroke="rgba(255,255,255,0.66)" strokeWidth="2" />
                <rect x="174" y="122" width="174" height="96" rx="5" stroke="#f2a9c7" strokeWidth="2" />
                <circle cx="226" cy="170" r="24" stroke="rgba(255,255,255,0.66)" strokeWidth="2" />
                <path d="M250 170h70M348 170h92M404 82V46M118 262v36M404 262v36" stroke="rgba(255,255,255,0.66)" strokeWidth="2" strokeLinecap="round" />
                <path d="M114 52h294M118 46v12M404 46v12" stroke="#f2a9c7" strokeWidth="2" strokeLinecap="round" />
                <path d="M98 82H58v180h40M52 82h12M52 262h12" stroke="rgba(255,255,255,0.66)" strokeWidth="2" strokeLinecap="round" />
                <path d="M440 170h104M320 218v76h164" stroke="#f2a9c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="548" cy="170" r="4" fill="#f2a9c7" />
                <circle cx="488" cy="294" r="4" fill="#f2a9c7" />
              </svg>
              <span className="ff-blueprint-label ff-blueprint-label-one">Dimensions and units</span>
              <span className="ff-blueprint-label ff-blueprint-label-two">Component labels</span>
              <span className="ff-blueprint-label ff-blueprint-label-three">Callout associations</span>
            </div>
          </div>

          <div className="ff-engineering-grid">
            {engineeringFormats.map((item) => (
              <article className="ff-engineering-item" key={item.title}>
                <h3>{item.title}</h3>
                <span>{item.extensions}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <ul className="ff-engineering-protections" aria-label="Technical visual elements preserved">
            {engineeringProtections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>


      <section
        className="ff-media"
        id="multimedia-subtitles-and-audio"
        aria-labelledby="multimedia-content-title"
      >
        <div className="ff-shell">
          <div className="ff-media-head">
            <div>
              <span className="ff-eyebrow">Multimedia, Subtitles, and Audio</span>
              <h2 id="multimedia-content-title">Localize the Language Viewers Hear and See</h2>
            </div>
            <div className="ff-media-copy">
              <p>
                Multimedia localization can combine spoken dialogue, narration, subtitles, captions,
                on-screen text, graphics, sound mixing, and final platform specifications. Stepes
                supports individual media components as well as coordinated end-to-end workflows.
              </p>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/multimedia-translation-services/"
              >
                Explore Multimedia Localization
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="ff-media-studio" aria-label="Illustrative multimedia localization workflow">
            <div className="ff-media-preview">
              <div className="ff-media-preview-top">
                <strong>Localized product training</strong>
                <span>Spanish subtitles + voice-over</span>
              </div>
              <div className="ff-video-screen">
                <div className="ff-video-scene" aria-hidden="true" />
                <span className="ff-video-badge">MODULE 03 · WORKSPACE SETUP</span>
                <div className="ff-video-caption">
                  <strong>Ahora puede configurar su espacio de trabajo.</strong>
                  <span>00:01:18.420 → 00:01:22.760</span>
                </div>
              </div>
              <div className="ff-waveform" aria-hidden="true">
                {mediaWaveform.map((height, index) => (
                  <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="ff-media-layers">
              {mediaLayers.map((item) => (
                <article className="ff-media-layer" key={item.title}>
                  <h3>{item.title}</h3>
                  <span>{item.extensions}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <ul className="ff-media-validation" aria-label="Multimedia validation priorities">
            {mediaValidationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="ff-learning"
        id="elearning-and-training-content"
        aria-labelledby="elearning-content-title"
      >
        <div className="ff-shell">
          <div className="ff-learning-head">
            <div>
              <span className="ff-eyebrow">eLearning and Training</span>
              <h2 id="elearning-content-title">Keep Learning Content Connected Across Every Component</h2>
            </div>
            <div className="ff-learning-copy">
              <p>
                An eLearning course may combine slide text, narration, subtitles, quizzes,
                interactions, animations, graphics, downloadable documents, and LMS metadata.
                Successful localization keeps those components synchronized in every language.
              </p>
              <a
                className="ff-editorial-link"
                href="https://www.stepes.com/elearning-localization-services/"
              >
                Explore eLearning Localization
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="ff-learning-system">
            <div className="ff-course-preview" aria-label="Illustrative localized eLearning course">
              <div className="ff-course-window">
                <div className="ff-course-toolbar">
                  <strong>Global Product Training</strong>
                  <span>French · 62% complete</span>
                </div>
                <div className="ff-course-body">
                  <nav className="ff-course-nav" aria-label="Course modules">
                    <span>Introduction</span>
                    <span className="is-active">Core Workflow</span>
                    <span>Knowledge Check</span>
                    <span>Resources</span>
                  </nav>
                  <div className="ff-course-content">
                    <div className="ff-course-progress"><span /></div>
                    <h3>Configure the Core Workflow</h3>
                    <p>
                      Localized slides, narration, captions, and interactive prompts remain aligned
                      with the same learning objective.
                    </p>
                    <div className="ff-course-question">Knowledge check · 1 of 3 questions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ff-learning-components">
              {learningComponents.map((item) => (
                <article className="ff-learning-component" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <span>{item.extensions}</span>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="ff-learning-sync">
            <h3>One Course. Coordinated Multilingual Assets.</h3>
            <ul className="ff-training-assets" aria-label="eLearning assets coordinated across languages">
              {trainingAssets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="ff-process"
        id="file-processing-workflow"
        aria-labelledby="file-processing-title"
      >
        <div className="ff-shell">
          <div className="ff-process-head">
            <span className="ff-eyebrow">File Engineering</span>
            <h2 id="file-processing-title">From Source File to Production-Ready Multilingual Content</h2>
            <p>
              The correct process depends on the file, the content, the target languages, and how the
              translated output will be used. Stepes brings those requirements into one controlled,
              file-aware workflow.
            </p>
          </div>

          <div className="ff-process-grid" aria-label="Stepes file-processing workflow">
            {fileProcessSteps.map((step) => (
              <article className="ff-process-step" key={step.number}>
                <span className="ff-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <p className="ff-process-note">
            <strong>The workflow is configured around your requirements.</strong> A business document,
            software resource, regulated file, multimedia asset, and publishing package may each need
            a different balance of automation, human review, engineering, formatting, and validation.
          </p>
        </div>
      </section>

      <section
        className="ff-preserve"
        id="content-and-file-integrity"
        aria-labelledby="content-integrity-title"
      >
        <div className="ff-shell">
          <div className="ff-preserve-head">
            <div>
              <span className="ff-eyebrow">Content and File Integrity</span>
              <h2 id="content-integrity-title">What We Protect Across the Translation Workflow</h2>
            </div>
            <div className="ff-preserve-copy">
              <p>
                The elements that need protection vary by format. Stepes defines those requirements
                during project setup so linguists, engineers, reviewers, and publishers work toward
                the same accurate, functional, and production-ready output.
              </p>
            </div>
          </div>

          <div className="ff-preserve-grid">
            {protectionDimensions.map((item) => (
              <article className="ff-preserve-item" key={item.title}>
                <div className="ff-preserve-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <p className="ff-preserve-note">
            <strong>Protection is defined by format and intended use.</strong> The final validation plan
            can include linguistic, structural, visual, functional, timing, and delivery checks based
            on the agreed project scope.
          </p>
        </div>
      </section>

      <section
        className="ff-preparation"
        id="preparing-files-for-translation"
        aria-labelledby="file-preparation-title"
      >
        <div className="ff-shell">
          <div className="ff-preparation-head">
            <div>
              <span className="ff-eyebrow">Preparation Guidance</span>
              <h2 id="file-preparation-title">Better Source Files Produce Better Multilingual Results</h2>
            </div>
            <div className="ff-preparation-copy">
              <p>
                A well-prepared source package reduces avoidable questions, protects quality, and
                helps translation, engineering, review, and publishing move forward as one connected
                workflow.
              </p>
            </div>
          </div>

          <div className="ff-preparation-layout">
            <aside className="ff-source-package" aria-label="Recommended translation source package">
              <div className="ff-source-package-icon"><DeliveryIcon /></div>
              <h3>Build a Complete Source Package</h3>
              <p>
                Give the project team the files, context, and output requirements needed to preserve
                both the language and the finished customer experience.
              </p>
              <ul className="ff-source-package-list">
                {sourcePackageItems.map((item) => (
                  <li key={item}><CheckIcon /><span>{item}</span></li>
                ))}
              </ul>
            </aside>

            <div className="ff-preparation-list">
              {preparationGuidance.map((item) => (
                <article className="ff-preparation-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="ff-preparation-foot">
            <strong>Confirm the target market as well as the language.</strong> Regional requirements can
            affect terminology, fonts, dates, currency, measurements, typography, and layout—for example,
            Canadian French, Brazilian Portuguese, European Spanish, or Traditional Chinese for Taiwan.
          </p>
        </div>
      </section>

      <section
        className="ff-custom"
        id="custom-and-proprietary-formats"
        aria-labelledby="custom-format-title"
      >
        <div className="ff-shell">
          <div className="ff-custom-head">
            <div>
              <span className="ff-eyebrow">Custom File Workflows</span>
              <h2 id="custom-format-title">Complex, Custom, and Proprietary Formats</h2>
            </div>
            <div className="ff-custom-copy">
              <p>
                A missing extension does not necessarily mean the content cannot be translated.
                Stepes can review customized schemas, database exports, legacy files, internal
                authoring packages, and mixed-content formats to define a controlled multilingual workflow.
              </p>
            </div>
          </div>

          <div className="ff-custom-system">
            <div className="ff-custom-visual">
              <div className="ff-custom-file-top">
                <strong>Representative custom resource</strong>
                <span>Schema Review</span>
              </div>
              <div className="ff-custom-code" aria-label="Illustrative structured file content">
                <span><span className="is-key">&lt;product id=</span><span className="is-value">&quot;A-104&quot;</span><span className="is-key">&gt;</span></span>
                <span>&nbsp;&nbsp;<span className="is-key">&lt;label&gt;</span><span className="is-value">Configure workspace</span><span className="is-key">&lt;/label&gt;</span></span>
                <span>&nbsp;&nbsp;<span className="is-key">&lt;variable&gt;</span>{'{user_name}'}<span className="is-key">&lt;/variable&gt;</span></span>
                <span>&nbsp;&nbsp;<span className="is-key">&lt;status translate=</span><span className="is-value">&quot;no&quot;</span><span className="is-key">&gt;ACTIVE&lt;/status&gt;</span></span>
                <span><span className="is-key">&lt;/product&gt;</span></span>
              </div>
              <h3>Translate the Right Content. Protect Everything Else.</h3>
              <p>
                The file is evaluated as a working system—not merely as visible text—so extraction,
                translation, reintegration, and delivery remain aligned.
              </p>
              <div className="ff-custom-action">
                <a className="ff-button ff-button-primary" href="https://www.stepes.com/contact-us/">
                  Ask About a Custom File Format
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>

            <div className="ff-custom-steps" aria-label="Custom file format workflow">
              {customFormatSteps.map((step) => (
                <article className="ff-custom-step" key={step.number}>
                  <span className="ff-custom-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="ff-quality"
        id="quality-and-security"
        aria-labelledby="file-quality-title"
      >
        <div className="ff-shell">
          <div className="ff-quality-head">
            <div>
              <span className="ff-eyebrow">Enterprise Controls</span>
              <h2 id="file-quality-title">Quality and Security for Enterprise Files</h2>
            </div>
            <div className="ff-quality-copy">
              <p>
                File compatibility does not replace linguistic quality, technical validation, or secure
                handling. Stepes combines the controls appropriate to the file type, content risk,
                intended audience, and required delivery environment.
              </p>
            </div>
          </div>

          <div className="ff-quality-matrix">
            {qualityControls.map((item) => (
              <article className="ff-quality-item" key={item.title}>
                <div className="ff-quality-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="ff-quality-links" aria-label="Related quality and security resources">
            <a className="ff-editorial-link" href="https://www.stepes.com/translation-quality-assurance/">
              Translation Quality Assurance
              <ChevronRight size={16} />
            </a>
            <a className="ff-editorial-link" href="https://www.stepes.com/security-and-compliance/">
              Security & Compliance
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="ff-related"
        id="related-translation-resources"
        aria-labelledby="related-resources-title"
      >
        <div className="ff-shell">
          <div className="ff-related-head">
            <span className="ff-eyebrow">Related Resources</span>
            <h2 id="related-resources-title">Go Deeper Into Your Content Workflow</h2>
            <p>
              Connect file-format guidance with the translation, localization, publishing, quality,
              security, automation, and planning resources that support your multilingual program.
            </p>
          </div>

          <div className="ff-related-columns">
            {relatedResourceGroups.map((group) => (
              <div className="ff-related-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="ff-resource-list">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <a className="ff-resource-row" href={item.href}>
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.text}</small>
                        </span>
                        <ChevronRight size={18} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ff-faq"
        id="file-format-faqs"
        aria-labelledby="file-format-faq-title"
      >
        <div className="ff-shell">
          <div className="ff-faq-head">
            <span className="ff-eyebrow">File Format FAQs</span>
            <h2 id="file-format-faq-title">Answers for Planning Your File Translation Workflow</h2>
            <p>
              Find practical guidance on source files, output formats, technical protection,
              multilingual production, automation, and secure enterprise delivery.
            </p>
          </div>

          <div className="ff-faq-panel">
            {fileFormatFaqs.map((item, index) => {
              const isOpen = openFaq === item.question;
              const answerId = `file-format-faq-answer-${index}`;
              const buttonId = `file-format-faq-button-${index}`;

              return (
                <article className="ff-faq-item" key={item.question}>
                  <h3>
                    <button
                      className="ff-faq-question"
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? null : item.question)}
                    >
                      <span>{item.question}</span>
                      <span className="ff-faq-toggle">
                        <FaqToggleIcon open={isOpen} />
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      className="ff-faq-answer"
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="ff-final-cta"
        id="file-format-review"
        aria-labelledby="file-format-review-title"
      >
        <div className="ff-shell">
          <div className="ff-final-cta-inner">
            <span className="ff-eyebrow">File Review</span>
            <h2 id="file-format-review-title">Have a File You Need to Translate?</h2>
            <p>
              From a single business document to a complex publishing package or recurring software
              resources, Stepes can help define the right translation and file-production workflow.
              Send us a representative file with your languages, intended use, and required output.
            </p>
            <div className="ff-final-cta-actions">
              <a className="ff-button ff-button-primary" href="https://www.stepes.com/contact-us/">
                Talk to a File Specialist
                <ChevronRight size={17} />
              </a>
              <a
                className="ff-button ff-button-secondary"
                href="https://www.stepes.com/professional-translation-services/"
              >
                Explore Translation Services
                <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
