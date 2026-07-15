import React, { useMemo, useState } from "react";

const PAGE_URL = "https://www.stepes.com/resources/translation-glossary/";

const topicGroups = [
  {
    id: "translation-language-services",
    anchor: "glossary-translation",
    title: "Translation and Language Services",
    description:
      "Foundational concepts such as translation, interpreting, transcreation, certified translation, source language, target language, and language pairs.",
    icon: "languages",
  },
  {
    id: "localization-internationalization",
    anchor: "glossary-localization",
    title: "Localization and Internationalization",
    description:
      "The processes used to adapt software, websites, products, media, and customer experiences for specific languages, countries, and cultures.",
    icon: "globe",
  },
  {
    id: "ai-machine-translation",
    anchor: "glossary-ai-translation",
    title: "AI and Machine Translation",
    description:
      "Neural machine translation, large language models, quality estimation, prompting, post-editing, and human validation.",
    icon: "spark",
  },
  {
    id: "translation-technology-automation",
    anchor: "glossary-translation-management-system",
    title: "Translation Technology and Automation",
    description:
      "The platforms, APIs, file formats, connectors, and workflow technologies used to manage multilingual content at scale.",
    icon: "workflow",
  },
  {
    id: "translation-memory-terminology",
    anchor: "glossary-translation-memory",
    title: "Translation Memory and Terminology",
    description:
      "How approved terminology, translation memories, glossaries, style guides, and reusable language assets improve consistency and efficiency.",
    icon: "database",
  },
  {
    id: "quality-human-review",
    anchor: "glossary-linguistic-quality-assurance",
    title: "Quality Assurance and Human Review",
    description:
      "Linguistic review, proofreading, validation, quality scoring, error severity, functional testing, and translation quality controls.",
    icon: "check",
  },
  {
    id: "software-websites-digital-content",
    anchor: "glossary-user-interface-localization",
    title: "Software, Websites, and Digital Content",
    description:
      "User interface localization, strings, resource files, continuous localization, multilingual SEO, and digital publishing.",
    icon: "window",
  },
  {
    id: "enterprise-governance-operations",
    anchor: "glossary-governance",
    title: "Enterprise Governance and Operations",
    description:
      "The controls, responsibilities, service levels, review models, and reporting practices required to manage multilingual content across an organization.",
    icon: "shield",
  },
];

const essentialTerms = [
  {
    id: "translation",
    term: "Translation",
    definition:
      "The process of communicating written content from one language into another while preserving its intended meaning, purpose, and tone.",
  },
  {
    id: "localization",
    term: "Localization",
    definition:
      "The broader process of adapting content, software, or products for a specific market, including language, formatting, cultural conventions, and user expectations.",
  },
  {
    id: "internationalization",
    term: "Internationalization",
    definition:
      "The technical and content preparation that enables a product or system to support multiple languages and locales efficiently.",
  },
  {
    id: "source-language",
    term: "Source Language",
    definition: "The original language in which content is written.",
  },
  {
    id: "target-language",
    term: "Target Language",
    definition: "The language into which content is translated.",
  },
  {
    id: "locale",
    term: "Locale",
    definition:
      "A specific combination of language, country, and regional conventions, such as French for Canada or Spanish for Mexico.",
  },
  {
    id: "ai-translation",
    term: "AI Translation",
    definition:
      "The use of artificial intelligence technologies to generate, improve, route, or evaluate translations.",
  },
  {
    id: "human-in-the-loop-translation",
    term: "Human-in-the-Loop Translation",
    definition:
      "A workflow in which professional linguists review, correct, validate, or approve AI-generated translations.",
  },
  {
    id: "translation-memory",
    term: "Translation Memory",
    definition:
      "A database of previously translated source and target segments that can be reused in future projects.",
  },
  {
    id: "translation-glossary",
    term: "Translation Glossary",
    definition:
      "A structured collection of approved terms, definitions, usage instructions, and multilingual equivalents.",
  },
  {
    id: "translation-management-system",
    term: "Translation Management System",
    definition:
      "A platform used to organize translation requests, language assets, workflows, vendors, reviews, quality controls, and delivery.",
  },
  {
    id: "linguistic-quality-assurance",
    term: "Linguistic Quality Assurance",
    definition:
      "The structured evaluation of translated content for accuracy, fluency, terminology, consistency, style, and locale-specific requirements.",
  },
];

const glossaryTopicOptions = [
  { value: "all", label: "All Topics" },
  { value: "translation-language-services", label: "Translation and Language Services" },
  { value: "localization-internationalization", label: "Localization and Internationalization" },
  { value: "ai-machine-translation", label: "AI and Machine Translation" },
  { value: "translation-technology-automation", label: "Translation Technology and Automation" },
  { value: "translation-memory-terminology", label: "Translation Memory and Terminology" },
  { value: "quality-human-review", label: "Quality Assurance and Human Review" },
  { value: "software-websites-digital-content", label: "Software, Websites, and Digital Content" },
  { value: "enterprise-governance-operations", label: "Enterprise Governance and Operations" },
];

const glossaryTopicByTerm = {
  "Adaptation": "translation-language-services",
  "Back Translation": "translation-language-services",
  "Certified Translation": "translation-language-services",
  "Context": "translation-language-services",
  "Dialect": "translation-language-services",
  "Human Translation": "translation-language-services",
  "Interpreting": "translation-language-services",
  "Language Pair": "translation-language-services",
  "Language Service Provider": "translation-language-services",
  "Marketing Translation": "translation-language-services",
  "Medical Translation": "translation-language-services",
  "Native Linguist": "translation-language-services",
  "Regional Variant": "translation-language-services",
  "Source Language": "translation-language-services",
  "Target Language": "translation-language-services",
  "Translation": "translation-language-services",
  "Transcreation": "translation-language-services",
  "Transcription": "translation-language-services",
  "Transliteration": "translation-language-services",
  "Word Count": "translation-language-services",
  "Bidirectional Text": "localization-internationalization",
  "Globalization": "localization-internationalization",
  "Internationalization": "localization-internationalization",
  "Language Code": "localization-internationalization",
  "Locale": "localization-internationalization",
  "Localization": "localization-internationalization",
  "Right-to-Left": "localization-internationalization",
  "AI Translation": "ai-machine-translation",
  "Automated Quality Estimation": "ai-machine-translation",
  "Human-in-the-Loop Translation": "ai-machine-translation",
  "Hybrid Translation Workflow": "ai-machine-translation",
  "Large Language Model": "ai-machine-translation",
  "Machine Translation": "ai-machine-translation",
  "Machine Translation Engine": "ai-machine-translation",
  "Machine Translation Post-Editing": "ai-machine-translation",
  "Neural Machine Translation": "ai-machine-translation",
  "Post-Editing": "ai-machine-translation",
  "Prompt": "ai-machine-translation",
  "Zero-Shot Translation": "ai-machine-translation",
  "Alignment": "translation-technology-automation",
  "Application Programming Interface": "translation-technology-automation",
  "Bilingual File": "translation-technology-automation",
  "CAT Tool": "translation-technology-automation",
  "Character Encoding": "translation-technology-automation",
  "Content Management System": "translation-technology-automation",
  "Continuous Localization": "translation-technology-automation",
  "JSON": "translation-technology-automation",
  "Optical Character Recognition": "translation-technology-automation",
  "Resource File": "translation-technology-automation",
  "Segment": "translation-technology-automation",
  "Translation API": "translation-technology-automation",
  "Translation Management System": "translation-technology-automation",
  "Workflow Automation": "translation-technology-automation",
  "XLIFF": "translation-technology-automation",
  "XML": "translation-technology-automation",
  "Controlled Language": "translation-memory-terminology",
  "Corpus": "translation-memory-terminology",
  "Do-Not-Translate Term": "translation-memory-terminology",
  "Exact Match": "translation-memory-terminology",
  "Fuzzy Match": "translation-memory-terminology",
  "Glossary": "translation-memory-terminology",
  "Language Asset": "translation-memory-terminology",
  "Non-Translatable Term": "translation-memory-terminology",
  "Repetition": "translation-memory-terminology",
  "Style Guide": "translation-memory-terminology",
  "Term Base": "translation-memory-terminology",
  "Terminology Extraction": "translation-memory-terminology",
  "Terminology Management": "translation-memory-terminology",
  "Translation Glossary": "translation-memory-terminology",
  "Translation Memory": "translation-memory-terminology",
  "Translation Unit": "translation-memory-terminology",
  "Accuracy": "quality-human-review",
  "Editing": "quality-human-review",
  "Error Severity": "quality-human-review",
  "False Friend": "quality-human-review",
  "Fluency": "quality-human-review",
  "Functional Quality Assurance": "quality-human-review",
  "In-Country Review": "quality-human-review",
  "Linguistic Quality Assurance": "quality-human-review",
  "Linguistic Validation": "quality-human-review",
  "Multidimensional Quality Metrics": "quality-human-review",
  "Proofreading": "quality-human-review",
  "Quality Assurance": "quality-human-review",
  "Quality Score": "quality-human-review",
  "Quality Threshold": "quality-human-review",
  "Subject-Matter Expert": "quality-human-review",
  "Translation Quality Assurance": "quality-human-review",
  "Validation": "quality-human-review",
  "Desktop Publishing": "software-websites-digital-content",
  "Knowledge Base Localization": "software-websites-digital-content",
  "Localization Testing": "software-websites-digital-content",
  "Multilingual SEO": "software-websites-digital-content",
  "Placeholder": "software-websites-digital-content",
  "Pseudo-Localization": "software-websites-digital-content",
  "String": "software-websites-digital-content",
  "Subtitling": "software-websites-digital-content",
  "Unicode": "software-websites-digital-content",
  "User Interface Localization": "software-websites-digital-content",
  "Website Localization": "software-websites-digital-content",
  "Brand Voice": "enterprise-governance-operations",
  "Global Content Operations": "enterprise-governance-operations",
  "Governance": "enterprise-governance-operations",
  "ISO 17100": "enterprise-governance-operations",
  "ISO 9001": "enterprise-governance-operations",
  "Review Routing": "enterprise-governance-operations",
  "Service-Level Agreement": "enterprise-governance-operations",
  "Source Content": "enterprise-governance-operations",
  "Vendor Management": "enterprise-governance-operations",
};

const glossaryTerms = [
  {
    "letter": "A",
    "id": "glossary-accuracy",
    "term": "Accuracy",
    "definition": "The degree to which a translation correctly communicates the meaning of the source content without adding, omitting, or changing information. Accuracy is considered alongside fluency, terminology, style, and fitness for purpose.",
    "aliases": [
      "translation accuracy"
    ]
  },
  {
    "letter": "A",
    "id": "glossary-adaptation",
    "term": "Adaptation",
    "definition": "The modification of translated content to make it appropriate for a particular audience, culture, channel, or use case. Adaptation may involve changing examples, measurements, visuals, references, tone, or messaging rather than translating the source literally.",
    "aliases": []
  },
  {
    "letter": "A",
    "id": "glossary-alignment",
    "term": "Alignment",
    "definition": "The process of matching corresponding source and translated sentences or segments. Alignment can convert previously translated documents into a translation memory so approved content can be reused.",
    "aliases": [
      "sentence alignment"
    ]
  },
  {
    "letter": "A",
    "id": "glossary-ai-translation",
    "term": "AI Translation",
    "definition": "The use of artificial intelligence to produce or support translations. It can include neural machine translation, large language models, automated terminology application, quality estimation, content classification, and intelligent workflow routing.",
    "aliases": [
      "artificial intelligence translation"
    ],
    "link": "https://www.stepes.com/ai-translation-platform/",
    "linkLabel": "Explore AI Translation"
  },
  {
    "letter": "A",
    "id": "glossary-application-programming-interface",
    "term": "Application Programming Interface",
    "definition": "An application programming interface, or API, allows software systems to exchange information and trigger actions automatically. A translation API can submit content, retrieve completed translations, and connect translation workflows with content or product systems.",
    "aliases": [
      "API",
      "translation API"
    ]
  },
  {
    "letter": "A",
    "id": "glossary-automated-quality-estimation",
    "term": "Automated Quality Estimation",
    "definition": "Automated quality estimation, often abbreviated as AQE or QE, uses a model to predict translation quality without comparing the output with a professionally created reference. It can help identify content likely to require human review.",
    "aliases": [
      "AQE",
      "QE",
      "quality estimation"
    ]
  },
  {
    "letter": "B",
    "id": "glossary-back-translation",
    "term": "Back Translation",
    "definition": "The translation of completed target-language content back into the original source language, usually by an independent linguist. It can help identify changes in meaning in clinical research, regulated communications, surveys, and patient-facing materials.",
    "aliases": []
  },
  {
    "letter": "B",
    "id": "glossary-bidirectional-text",
    "term": "Bidirectional Text",
    "definition": "Bidirectional, or BiDi, text contains both left-to-right and right-to-left writing. Arabic or Hebrew content may include English names, numbers, URLs, or codes that require careful directional handling.",
    "aliases": [
      "BiDi"
    ]
  },
  {
    "letter": "B",
    "id": "glossary-bilingual-file",
    "term": "Bilingual File",
    "definition": "A file that displays or stores source and target content together. Bilingual formats allow translators and reviewers to work with aligned segments while preserving tags, formatting, and metadata.",
    "aliases": []
  },
  {
    "letter": "B",
    "id": "glossary-brand-voice",
    "term": "Brand Voice",
    "definition": "The consistent personality, tone, vocabulary, and communication style used by an organization. Multilingual brand voice guidance helps preserve a recognizable identity across markets.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-cat-tool",
    "term": "CAT Tool",
    "definition": "A computer-assisted translation tool is software that helps professional linguists translate and review content. It provides segmented content, translation memories, term bases, quality checks, comments, and reference materials.",
    "aliases": [
      "computer-assisted translation",
      "computer aided translation"
    ]
  },
  {
    "letter": "C",
    "id": "glossary-certified-translation",
    "term": "Certified Translation",
    "definition": "A translation accompanied by a signed statement confirming that it is complete and accurate to the best of the translator’s or language service provider’s knowledge. Requirements vary by country, institution, and document type.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-character-encoding",
    "term": "Character Encoding",
    "definition": "The system used to represent letters, symbols, punctuation, and other characters digitally. Incorrect encoding can cause multilingual text to display as boxes, question marks, or corrupted characters.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-content-management-system",
    "term": "Content Management System",
    "definition": "Software used to create, organize, publish, and update digital content. Connecting a CMS to a translation platform can reduce manual file handling and support continuous multilingual publishing.",
    "aliases": [
      "CMS"
    ]
  },
  {
    "letter": "C",
    "id": "glossary-context",
    "term": "Context",
    "definition": "The surrounding information needed to understand what a word, sentence, or string means and how it will be used. Screenshots, previous sentences, character limits, audience information, and interface location can all provide translation context.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-continuous-localization",
    "term": "Continuous Localization",
    "definition": "A process that integrates translation into ongoing content or software development. New or changed content is identified, translated, reviewed, tested, and delivered regularly rather than through occasional large releases.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-controlled-language",
    "term": "Controlled Language",
    "definition": "A restricted form of language that uses approved vocabulary, grammar, and sentence structures. It can reduce ambiguity, improve readability, and support stronger AI and machine translation performance.",
    "aliases": []
  },
  {
    "letter": "C",
    "id": "glossary-corpus",
    "term": "Corpus",
    "definition": "A structured collection of written or spoken language used for linguistic analysis, model development, terminology research, or translation reference. A parallel corpus contains corresponding content in multiple languages.",
    "aliases": [
      "parallel corpus"
    ]
  },
  {
    "letter": "D",
    "id": "glossary-desktop-publishing",
    "term": "Desktop Publishing",
    "definition": "The formatting and layout work required to produce a polished translated document. Multilingual DTP may address line breaks, tables, typography, page flow, images, text expansion, and right-to-left content.",
    "aliases": [
      "DTP"
    ]
  },
  {
    "letter": "D",
    "id": "glossary-dialect",
    "term": "Dialect",
    "definition": "A regional or social form of a language with distinctive vocabulary, grammar, or pronunciation. Translation requirements should identify the intended regional audience when dialect differences affect meaning or tone.",
    "aliases": []
  },
  {
    "letter": "D",
    "id": "glossary-do-not-translate-term",
    "term": "Do-Not-Translate Term",
    "definition": "A word, product name, code, trademark, or expression that must remain unchanged in target content. These terms should be recorded in the project glossary for consistent use by translators, reviewers, and AI systems.",
    "aliases": [
      "DNT",
      "non-translatable term"
    ]
  },
  {
    "letter": "E",
    "id": "glossary-editing",
    "term": "Editing",
    "definition": "The review of a translation against the source content to improve accuracy, terminology, completeness, style, and readability. Editing is often completed by a second linguist after the initial translation.",
    "aliases": []
  },
  {
    "letter": "E",
    "id": "glossary-error-severity",
    "term": "Error Severity",
    "definition": "A classification indicating the effect a translation issue may have on meaning, usability, compliance, safety, or brand perception. Programs commonly classify errors as minor, major, or critical.",
    "aliases": []
  },
  {
    "letter": "E",
    "id": "glossary-exact-match",
    "term": "Exact Match",
    "definition": "A translation memory result where the source segment is identical to stored content. Exact matches may still require contextual review because the same sentence can serve a different purpose in a new location.",
    "aliases": [
      "100% match"
    ]
  },
  {
    "letter": "F",
    "id": "glossary-false-friend",
    "term": "False Friend",
    "definition": "A word that looks or sounds similar in two languages but has a different meaning. False friends can create convincing errors because the incorrect choice initially appears familiar.",
    "aliases": []
  },
  {
    "letter": "F",
    "id": "glossary-functional-quality-assurance",
    "term": "Functional Quality Assurance",
    "definition": "Testing that verifies whether a localized website, application, or digital product works correctly. It may cover links, forms, buttons, navigation, data entry, language switching, and text direction.",
    "aliases": [
      "functional QA"
    ]
  },
  {
    "letter": "F",
    "id": "glossary-fluency",
    "term": "Fluency",
    "definition": "The degree to which translated content reads naturally and correctly in the target language. Fluency reflects grammar, sentence structure, word choice, punctuation, and style.",
    "aliases": []
  },
  {
    "letter": "F",
    "id": "glossary-fuzzy-match",
    "term": "Fuzzy Match",
    "definition": "A translation memory result that is similar, but not identical, to a new source segment. A linguist reviews and modifies the proposed translation to account for differences in content and context.",
    "aliases": []
  },
  {
    "letter": "G",
    "id": "glossary-global-content-operations",
    "term": "Global Content Operations",
    "definition": "The connected processes used to create, govern, translate, review, publish, and maintain content across markets and languages. A mature model connects people, technology, language assets, quality controls, and business systems.",
    "aliases": [],
    "link": "https://www.stepes.com/solutions/global-content-operations/",
    "linkLabel": "Explore Global Content Operations"
  },
  {
    "letter": "G",
    "id": "glossary-globalization",
    "term": "Globalization",
    "definition": "The overall process of preparing an organization, product, or content strategy to operate across international markets. It can include internationalization, localization, global brand management, market readiness, and regulatory planning.",
    "aliases": [
      "g11n"
    ]
  },
  {
    "letter": "G",
    "id": "glossary-glossary",
    "term": "Glossary",
    "definition": "A structured collection of important terms and their meanings. In translation, a glossary usually includes approved target-language equivalents, definitions, context, usage notes, and prohibited variants.",
    "aliases": [
      "translation glossary",
      "term base"
    ]
  },
  {
    "letter": "G",
    "id": "glossary-governance",
    "term": "Governance",
    "definition": "The framework of policies, roles, approval rules, quality standards, security controls, and reporting practices used to manage multilingual content.",
    "aliases": [
      "translation governance"
    ]
  },
  {
    "letter": "H",
    "id": "glossary-human-in-the-loop-translation",
    "term": "Human-in-the-Loop Translation",
    "definition": "A workflow that combines automated translation with professional human involvement. Linguists may verify meaning, correct terminology, improve fluency, validate high-risk content, or approve final delivery.",
    "aliases": [
      "HITL",
      "human in the loop"
    ],
    "link": "https://www.stepes.com/ai-human-translation-workflow/",
    "linkLabel": "Explore AI + Human Translation"
  },
  {
    "letter": "H",
    "id": "glossary-human-translation",
    "term": "Human Translation",
    "definition": "Translation performed by a professional linguist rather than generated automatically. Human translators interpret context, intent, tone, cultural references, and subject-specific requirements.",
    "aliases": []
  },
  {
    "letter": "H",
    "id": "glossary-hybrid-translation-workflow",
    "term": "Hybrid Translation Workflow",
    "definition": "A workflow combining methods such as AI translation, translation memory, professional human translation, post-editing, subject-matter review, and automated quality checks.",
    "aliases": []
  },
  {
    "letter": "I",
    "id": "glossary-in-country-review",
    "term": "In-Country Review",
    "definition": "Evaluation by a reviewer who works in or closely understands the target market. In-country reviewers may confirm local terminology, regulatory wording, brand preferences, product knowledge, or market appropriateness.",
    "aliases": [
      "ICR"
    ]
  },
  {
    "letter": "I",
    "id": "glossary-internationalization",
    "term": "Internationalization",
    "definition": "The design and preparation of software, content, or products so they can support multiple languages and locales without extensive redevelopment. It may include externalizing text, supporting Unicode, and enabling locale-specific formats.",
    "aliases": [
      "i18n"
    ]
  },
  {
    "letter": "I",
    "id": "glossary-iso-17100",
    "term": "ISO 17100",
    "definition": "An international standard for translation services that defines requirements for translator qualifications, project management, translation, revision, review, quality assurance, and related professional processes.",
    "aliases": []
  },
  {
    "letter": "I",
    "id": "glossary-iso-9001",
    "term": "ISO 9001",
    "definition": "An international quality management standard focused on documented processes, customer requirements, risk-based thinking, performance measurement, corrective action, and continual improvement.",
    "aliases": []
  },
  {
    "letter": "I",
    "id": "glossary-interpreting",
    "term": "Interpreting",
    "definition": "The communication of spoken or signed language from one language into another. Common forms include simultaneous, consecutive, over-the-phone, video remote, and on-site interpreting.",
    "aliases": []
  },
  {
    "letter": "J",
    "id": "glossary-json",
    "term": "JSON",
    "definition": "JavaScript Object Notation is a structured data format widely used in software, websites, applications, and APIs. Localizable JSON files may contain interface text alongside keys, variables, and syntax that must remain intact.",
    "aliases": [
      "JavaScript Object Notation"
    ]
  },
  {
    "letter": "K",
    "id": "glossary-knowledge-base-localization",
    "term": "Knowledge Base Localization",
    "definition": "The translation and adaptation of help articles, product documentation, troubleshooting instructions, and customer support content. Effective workflows keep localized versions synchronized with changing source content.",
    "aliases": []
  },
  {
    "letter": "L",
    "id": "glossary-language-asset",
    "term": "Language Asset",
    "definition": "Reusable linguistic information that supports translation quality and consistency. Translation memories, term bases, style guides, corpora, approved reference translations, and do-not-translate lists are common language assets.",
    "aliases": []
  },
  {
    "letter": "L",
    "id": "glossary-language-code",
    "term": "Language Code",
    "definition": "A standardized identifier for a language, such as en for English or fr for French. Extended codes can identify regional variations, such as en-US or pt-BR.",
    "aliases": [
      "locale code"
    ]
  },
  {
    "letter": "L",
    "id": "glossary-language-pair",
    "term": "Language Pair",
    "definition": "The source and target languages used for a translation, such as English-to-German or Japanese-to-English.",
    "aliases": []
  },
  {
    "letter": "L",
    "id": "glossary-language-service-provider",
    "term": "Language Service Provider",
    "definition": "A company that delivers translation, localization, interpreting, terminology, testing, and related language services. Enterprise LSPs may also provide technology integration, governance, security, and program management.",
    "aliases": [
      "LSP"
    ]
  },
  {
    "letter": "L",
    "id": "glossary-large-language-model",
    "term": "Large Language Model",
    "definition": "An AI model trained on extensive language data to understand and generate text. LLMs can support translation, rewriting, terminology analysis, content classification, and quality evaluation.",
    "aliases": [
      "LLM"
    ]
  },
  {
    "letter": "L",
    "id": "glossary-linguistic-quality-assurance",
    "term": "Linguistic Quality Assurance",
    "definition": "The structured evaluation of translated content for accuracy, fluency, terminology, grammar, style, consistency, locale conventions, and project requirements.",
    "aliases": [
      "LQA"
    ],
    "link": "https://www.stepes.com/translation-quality-assurance/",
    "linkLabel": "Explore Translation Quality Assurance"
  },
  {
    "letter": "L",
    "id": "glossary-linguistic-validation",
    "term": "Linguistic Validation",
    "definition": "A controlled process used to confirm that translated content communicates the intended concepts appropriately in the target language and culture. It may include forward translation, reconciliation, back translation, cognitive debriefing, and final review.",
    "aliases": []
  },
  {
    "letter": "L",
    "id": "glossary-locale",
    "term": "Locale",
    "definition": "A defined combination of language, geography, and cultural conventions. It can determine wording, date formats, currencies, numbers, addresses, units of measure, and interface behavior.",
    "aliases": []
  },
  {
    "letter": "L",
    "id": "glossary-localization",
    "term": "Localization",
    "definition": "The adaptation of content, software, or a product for a specific market. It includes translation and may also address cultural relevance, formatting, imagery, legal requirements, and interface behavior.",
    "aliases": [
      "l10n"
    ]
  },
  {
    "letter": "L",
    "id": "glossary-localization-testing",
    "term": "Localization Testing",
    "definition": "Testing that verifies whether a localized product works and appears correctly in its intended market. It may evaluate language, layout, truncated text, input fields, locale formats, character display, and cultural appropriateness.",
    "aliases": []
  },
  {
    "letter": "M",
    "id": "glossary-machine-translation",
    "term": "Machine Translation",
    "definition": "Software-generated translation from one language into another. Current systems commonly use neural networks, large language models, or other AI techniques, and quality varies by model, language, domain, context, and content type.",
    "aliases": [
      "MT"
    ]
  },
  {
    "letter": "M",
    "id": "glossary-machine-translation-engine",
    "term": "Machine Translation Engine",
    "definition": "The system or model that produces automated translations. Engines may be general-purpose, domain-adapted, customized with client data, or optimized for particular languages and content types.",
    "aliases": [
      "MT engine"
    ]
  },
  {
    "letter": "M",
    "id": "glossary-machine-translation-post-editing",
    "term": "Machine Translation Post-Editing",
    "definition": "The human review and correction of machine-generated translations. Post-editors evaluate meaning, terminology, fluency, formatting, and adherence to project requirements.",
    "aliases": [
      "MTPE"
    ]
  },
  {
    "letter": "M",
    "id": "glossary-marketing-translation",
    "term": "Marketing Translation",
    "definition": "The adaptation of promotional content for audiences in different languages and markets. It often requires attention to brand voice, persuasion, cultural relevance, search behavior, slogans, and channel requirements.",
    "aliases": []
  },
  {
    "letter": "M",
    "id": "glossary-medical-translation",
    "term": "Medical Translation",
    "definition": "Translation of clinical, pharmaceutical, healthcare, medical device, patient-facing, and scientific content. It requires qualified linguists, subject knowledge, terminology control, and appropriate review based on risk and intended use.",
    "aliases": []
  },
  {
    "letter": "M",
    "id": "glossary-multidimensional-quality-metrics",
    "term": "Multidimensional Quality Metrics",
    "definition": "A framework for categorizing and evaluating translation errors across dimensions such as accuracy, terminology, fluency, style, locale conventions, and formatting.",
    "aliases": [
      "MQM"
    ]
  },
  {
    "letter": "M",
    "id": "glossary-multilingual-seo",
    "term": "Multilingual SEO",
    "definition": "The adaptation of digital content so it can be discovered through search in different languages and markets. It may include local keyword research, translated metadata, localized URLs, internal linking, hreflang, and regional search intent.",
    "aliases": []
  },
  {
    "letter": "N",
    "id": "glossary-native-linguist",
    "term": "Native Linguist",
    "definition": "A translator, editor, or reviewer with native-level command of the target language and deep familiarity with its cultural and regional conventions. Professional work also requires subject knowledge, writing skill, research ability, and quality discipline.",
    "aliases": []
  },
  {
    "letter": "N",
    "id": "glossary-neural-machine-translation",
    "term": "Neural Machine Translation",
    "definition": "Machine translation that uses neural networks to generate output based on patterns learned from large amounts of bilingual and multilingual data. NMT can produce fluent language but may still mishandle context, terminology, names, or numbers.",
    "aliases": [
      "NMT"
    ]
  },
  {
    "letter": "N",
    "id": "glossary-non-translatable-term",
    "term": "Non-Translatable Term",
    "definition": "Content intentionally kept in the source language, such as product names, trademarks, codes, model numbers, legal names, software commands, or standardized terminology.",
    "aliases": []
  },
  {
    "letter": "O",
    "id": "glossary-optical-character-recognition",
    "term": "Optical Character Recognition",
    "definition": "Technology that converts text contained in scanned documents or images into editable, machine-readable content. OCR output should be checked carefully before translation, especially for complex layouts or regulated information.",
    "aliases": [
      "OCR"
    ]
  },
  {
    "letter": "P",
    "id": "glossary-placeholder",
    "term": "Placeholder",
    "definition": "A symbol, code, or variable that will be replaced with dynamic content when software runs. Placeholders must usually remain unchanged and in the correct position during translation.",
    "aliases": []
  },
  {
    "letter": "P",
    "id": "glossary-post-editing",
    "term": "Post-Editing",
    "definition": "The human correction of automatically generated translation. It may focus on essential meaning and usability or require a fully polished result comparable to professional human translation.",
    "aliases": []
  },
  {
    "letter": "P",
    "id": "glossary-proofreading",
    "term": "Proofreading",
    "definition": "The final review of translated content for typographical errors, punctuation, grammar, formatting, and presentation. It is usually performed after translation and editing.",
    "aliases": []
  },
  {
    "letter": "P",
    "id": "glossary-pseudo-localization",
    "term": "Pseudo-Localization",
    "definition": "The replacement of source text with simulated localized text to test whether software is technically ready for translation. It can reveal hard-coded text, character corruption, layout restrictions, and right-to-left issues.",
    "aliases": [
      "pseudolocalization"
    ]
  },
  {
    "letter": "P",
    "id": "glossary-prompt",
    "term": "Prompt",
    "definition": "An instruction or set of contextual information provided to an AI model. In translation, a prompt may specify language, audience, terminology, style, domain, formatting, or quality expectations.",
    "aliases": [
      "AI prompt"
    ]
  },
  {
    "letter": "Q",
    "id": "glossary-quality-assurance",
    "term": "Quality Assurance",
    "definition": "The system of processes used to prevent, identify, and correct problems before translated content is delivered or published. Translation QA can combine qualified linguists, independent review, automated checks, terminology controls, testing, and corrective action.",
    "aliases": [
      "QA"
    ]
  },
  {
    "letter": "Q",
    "id": "glossary-quality-score",
    "term": "Quality Score",
    "definition": "A measurable result based on the number, type, severity, or weighted impact of review findings. Scores are most useful when teams apply consistent evaluation criteria.",
    "aliases": []
  },
  {
    "letter": "Q",
    "id": "glossary-quality-threshold",
    "term": "Quality Threshold",
    "definition": "The minimum acceptable standard for a translation or workflow. Different thresholds may be established for internal reference content, customer communications, marketing, legal documents, or safety-critical materials.",
    "aliases": []
  },
  {
    "letter": "R",
    "id": "glossary-regional-variant",
    "term": "Regional Variant",
    "definition": "A form of a language used in a particular country or region. Variants can differ in spelling, vocabulary, grammar, tone, date formats, and cultural expectations.",
    "aliases": []
  },
  {
    "letter": "R",
    "id": "glossary-repetition",
    "term": "Repetition",
    "definition": "A source segment that appears more than once within a project or set of files. Translation technology can identify repetitions so approved translations are reused consistently.",
    "aliases": []
  },
  {
    "letter": "R",
    "id": "glossary-resource-file",
    "term": "Resource File",
    "definition": "A file that stores translatable software content separately from application code. Common formats include JSON, XML, YAML, properties files, and platform-specific resource formats.",
    "aliases": []
  },
  {
    "letter": "R",
    "id": "glossary-review-routing",
    "term": "Review Routing",
    "definition": "The direction of translated content to the appropriate translator, editor, subject-matter expert, in-country reviewer, or approver based on defined rules.",
    "aliases": []
  },
  {
    "letter": "R",
    "id": "glossary-right-to-left",
    "term": "Right-to-Left",
    "definition": "A writing direction used by languages such as Arabic and Hebrew. Supporting RTL content can require mirrored layouts, adjusted navigation, correct alignment, and bidirectional-text testing.",
    "aliases": [
      "RTL"
    ]
  },
  {
    "letter": "S",
    "id": "glossary-segment",
    "term": "Segment",
    "definition": "A unit of source content processed within a translation environment. It may be a sentence, heading, list item, interface string, or another defined portion of text.",
    "aliases": []
  },
  {
    "letter": "S",
    "id": "glossary-service-level-agreement",
    "term": "Service-Level Agreement",
    "definition": "A definition of measurable service commitments between a provider and client. Translation SLAs may address turnaround, response time, availability, quality, issue resolution, security, reporting, and escalation.",
    "aliases": [
      "SLA"
    ]
  },
  {
    "letter": "S",
    "id": "glossary-source-content",
    "term": "Source Content",
    "definition": "The original material submitted for translation or localization. Clear, complete, and well-structured source content generally produces better translations and reduces questions and rework.",
    "aliases": []
  },
  {
    "letter": "S",
    "id": "glossary-source-language",
    "term": "Source Language",
    "definition": "The original language from which content is translated. A project may have one source language and multiple target languages.",
    "aliases": []
  },
  {
    "letter": "S",
    "id": "glossary-string",
    "term": "String",
    "definition": "A sequence of characters used as content within software, websites, or digital products. Strings may contain visible text, placeholders, markup, variables, and character restrictions.",
    "aliases": []
  },
  {
    "letter": "S",
    "id": "glossary-style-guide",
    "term": "Style Guide",
    "definition": "A document defining writing and formatting preferences for multilingual content, including tone, voice, punctuation, capitalization, units, dates, product naming, and locale conventions.",
    "aliases": []
  },
  {
    "letter": "S",
    "id": "glossary-subject-matter-expert",
    "term": "Subject-Matter Expert",
    "definition": "A person with specialized knowledge of a product, discipline, industry, or business function. SMEs may clarify source content, approve terminology, validate technical meaning, or review high-risk translations.",
    "aliases": [
      "SME"
    ]
  },
  {
    "letter": "S",
    "id": "glossary-subtitling",
    "term": "Subtitling",
    "definition": "The presentation of translated or transcribed dialogue as timed on-screen text. Effective subtitles must communicate meaning within limits for reading speed, line length, timing, synchronization, and screen space.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-target-language",
    "term": "Target Language",
    "definition": "The language into which content is translated. The intended locale and audience should also be identified because one language may have multiple regional variants.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-term-base",
    "term": "Term Base",
    "definition": "A structured, searchable database of approved terminology. Entries may include definitions, translations, context, subject fields, usage notes, grammatical information, status, forbidden terms, and examples.",
    "aliases": [
      "termbase",
      "terminology database"
    ]
  },
  {
    "letter": "T",
    "id": "glossary-terminology-extraction",
    "term": "Terminology Extraction",
    "definition": "The identification of important or frequently occurring terms within source content. Candidate terms are reviewed, defined, translated, and approved before being added to a glossary or term base.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-terminology-management",
    "term": "Terminology Management",
    "definition": "The systematic process of identifying, defining, translating, approving, distributing, and maintaining important terms across languages and workflows.",
    "aliases": [],
    "link": "https://www.stepes.com/terminology-management/",
    "linkLabel": "Explore Terminology Management"
  },
  {
    "letter": "T",
    "id": "glossary-translation",
    "term": "Translation",
    "definition": "The communication of written meaning from a source language into a target language. Professional translation considers accuracy, context, purpose, terminology, tone, audience, cultural expectations, and delivery format.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-translation-api",
    "term": "Translation API",
    "definition": "An interface that connects translation capabilities with websites, applications, content systems, or internal business tools. It can automate content submission, project creation, status updates, delivery, and repetitive workflow steps.",
    "aliases": [
      "localization API"
    ],
    "link": "https://www.stepes.com/translation-api/",
    "linkLabel": "Explore the Translation API"
  },
  {
    "letter": "T",
    "id": "glossary-translation-glossary",
    "term": "Translation Glossary",
    "definition": "A collection of approved source terms and their target-language equivalents. It may also contain definitions, context, usage instructions, prohibited translations, grammatical information, and approval status.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-translation-management-system",
    "term": "Translation Management System",
    "definition": "A platform used to coordinate translation projects and multilingual content workflows. A TMS may manage files, users, vendors, translation memories, term bases, automation, reviews, quality checks, reporting, integrations, and delivery.",
    "aliases": [
      "TMS"
    ],
    "link": "https://www.stepes.com/enterprise-translation-management/",
    "linkLabel": "Explore Enterprise Translation Management"
  },
  {
    "letter": "T",
    "id": "glossary-translation-memory",
    "term": "Translation Memory",
    "definition": "A database that stores previously translated source and target segments so identical or similar content can be reused. Translation memory can improve consistency, shorten turnaround, and reduce repetitive work.",
    "aliases": [
      "TM"
    ],
    "link": "https://www.stepes.com/translation-memory/",
    "linkLabel": "Explore Translation Memory"
  },
  {
    "letter": "T",
    "id": "glossary-translation-quality-assurance",
    "term": "Translation Quality Assurance",
    "definition": "The combination of people, processes, technologies, and controls used to verify that translated content meets defined requirements.",
    "aliases": [
      "TQA"
    ],
    "link": "https://www.stepes.com/translation-quality-assurance/",
    "linkLabel": "Explore Translation Quality Assurance"
  },
  {
    "letter": "T",
    "id": "glossary-translation-unit",
    "term": "Translation Unit",
    "definition": "A stored pair consisting of a source segment and its corresponding translation. Translation units form the core of a translation memory and may include project, date, language, creator, and approval metadata.",
    "aliases": [
      "TU"
    ]
  },
  {
    "letter": "T",
    "id": "glossary-transcreation",
    "term": "Transcreation",
    "definition": "The creative adaptation of messaging for a new language and culture while preserving the original communication objective and emotional effect. It is commonly used for campaigns, slogans, and brand messaging.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-transcription",
    "term": "Transcription",
    "definition": "The conversion of spoken audio or video into written text. The transcript may remain in the original language or become the source for translation, subtitling, captions, voice-over, or analysis.",
    "aliases": []
  },
  {
    "letter": "T",
    "id": "glossary-transliteration",
    "term": "Transliteration",
    "definition": "The representation of words from one writing system using the characters of another. It focuses on how words are written or pronounced rather than translating their meaning.",
    "aliases": []
  },
  {
    "letter": "U",
    "id": "glossary-unicode",
    "term": "Unicode",
    "definition": "An international character-encoding standard designed to represent text from nearly all writing systems. UTF-8 is one of the most widely used Unicode encoding formats.",
    "aliases": [
      "UTF-8"
    ]
  },
  {
    "letter": "U",
    "id": "glossary-user-interface-localization",
    "term": "User Interface Localization",
    "definition": "The adaptation of visible and interactive software elements for a target market, including buttons, menus, navigation, messages, forms, notifications, help text, locale formatting, and right-to-left behavior.",
    "aliases": [
      "UI localization"
    ]
  },
  {
    "letter": "V",
    "id": "glossary-validation",
    "term": "Validation",
    "definition": "Confirmation that translated content is appropriate for its intended purpose and meets defined requirements. Validation may include linguistic review, subject-matter approval, regulatory confirmation, user testing, or source comparison.",
    "aliases": []
  },
  {
    "letter": "V",
    "id": "glossary-vendor-management",
    "term": "Vendor Management",
    "definition": "The process of selecting, qualifying, assigning, monitoring, and developing external translators, reviewers, interpreters, and language service providers.",
    "aliases": []
  },
  {
    "letter": "W",
    "id": "glossary-website-localization",
    "term": "Website Localization",
    "definition": "The adaptation of a website for users in different languages and markets. It includes content, navigation, metadata, forms, images, user journeys, dynamic content, multilingual SEO, and technical delivery.",
    "aliases": [],
    "link": "https://www.stepes.com/website-localization/",
    "linkLabel": "Explore Website Localization"
  },
  {
    "letter": "W",
    "id": "glossary-word-count",
    "term": "Word Count",
    "definition": "A method used to estimate translation volume. Counts can vary by file type, language, extraction method, and whether repetitions or previously translated content are included.",
    "aliases": []
  },
  {
    "letter": "W",
    "id": "glossary-workflow-automation",
    "term": "Workflow Automation",
    "definition": "The use of rules and system integrations to reduce manual translation tasks. Automation can identify changed content, create projects, assign resources, trigger reviews, perform checks, and return completed translations.",
    "aliases": []
  },
  {
    "letter": "X",
    "id": "glossary-xliff",
    "term": "XLIFF",
    "definition": "XML Localization Interchange File Format is an industry-standard bilingual format designed to exchange translatable content while preserving source text, translations, tags, status information, and metadata.",
    "aliases": [
      "XML Localization Interchange File Format"
    ]
  },
  {
    "letter": "X",
    "id": "glossary-xml",
    "term": "XML",
    "definition": "Extensible Markup Language is a structured format used to store and exchange data. XML files may contain translatable content alongside elements, attributes, codes, and technical instructions that must be protected.",
    "aliases": [
      "Extensible Markup Language"
    ]
  },
  {
    "letter": "Z",
    "id": "glossary-zero-shot-translation",
    "term": "Zero-Shot Translation",
    "definition": "Translation performed by an AI model for a language pair or task without task-specific training or adaptation. Results may vary significantly for lower-resource languages, specialized terminology, and high-risk content.",
    "aliases": []
  }
];

const glossaryLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const workflowSteps = [
  {
    "title": "Prepare the Source Content",
    "description": "Clear source writing, internationalization, file preparation, and contextual information reduce ambiguity before translation begins."
  },
  {
    "title": "Apply Translation Memory and Terminology",
    "description": "Approved translations and term bases guide reuse, product language, technical terminology, brand wording, and do-not-translate terms."
  },
  {
    "title": "Select the Translation Method",
    "description": "Human translation, AI translation, post-editing, transcreation, or a hybrid workflow is selected according to risk, audience, complexity, and purpose."
  },
  {
    "title": "Add Professional Human Oversight",
    "description": "Qualified linguists verify meaning, terminology, fluency, tone, and cultural suitability, with subject-matter review where required."
  },
  {
    "title": "Perform Quality Assurance and Testing",
    "description": "Automated checks, linguistic review, formatting validation, and functional testing confirm that the content is ready for use."
  },
  {
    "title": "Publish, Measure, and Reuse",
    "description": "Approved content is delivered to the required systems, while language assets and review findings support continuous improvement."
  }
];


const governanceItems = [
  {
    title: "Start With High-Value Terms",
    description:
      "Prioritize terminology that is specialized, frequently repeated, difficult to translate, legally important, or central to the customer experience.",
    icon: "target",
  },
  {
    title: "Include More Than a Translation",
    description:
      "Add definitions, contextual examples, subject fields, grammatical information, preferred variants, prohibited variants, ownership, and approval status.",
    icon: "list",
  },
  {
    title: "Define Ownership and Approval",
    description:
      "Establish who can propose, review, approve, update, and retire terminology across localization, product, marketing, legal, and subject-matter teams.",
    icon: "users",
  },
  {
    title: "Connect Terminology to Workflows",
    description:
      "Make approved terminology available during AI translation, professional translation, review, and quality assurance rather than leaving it in a disconnected file.",
    icon: "connect",
  },
  {
    title: "Maintain the Glossary Over Time",
    description:
      "Review new product terms, regulatory changes, regional differences, reviewer feedback, duplicate entries, and outdated language on a regular schedule.",
    icon: "refresh",
  },
  {
    title: "Measure Terminology Performance",
    description:
      "Use glossary compliance, recurring corrections, search behavior, stakeholder feedback, and quality findings to improve both the asset and the workflow.",
    icon: "chart",
  },
];

const faqItems = [
  {
    question: "What is a translation glossary?",
    answer:
      "A translation glossary is a structured collection of important source-language terms and their approved equivalents in one or more target languages. It may also include definitions, context, usage notes, grammatical information, prohibited variants, and approval status.",
  },
  {
    question: "Is a translation glossary the same as a dictionary?",
    answer:
      "No. A dictionary explains general word meanings and may offer several possible translations. A translation glossary identifies the approved terminology for a particular organization, product, industry, or project context.",
  },
  {
    question: "Is a glossary the same as a term base?",
    answer:
      "The terms are often used interchangeably. A glossary may be a simple approved term list, while a term base usually refers to a structured database with definitions, metadata, status, context, and multilingual equivalents.",
  },
  {
    question: "How is a translation glossary different from translation memory?",
    answer:
      "A glossary stores approved terms and short expressions. A translation memory stores previously translated segments, often complete sentences. A glossary controls terminology, while a translation memory supports the reuse of approved translated content.",
  },
  {
    question: "Why is terminology important for AI translation?",
    answer:
      "AI systems can generate fluent translations while selecting terminology that is inconsistent, imprecise, or unsuitable for the organization. Approved terminology gives the workflow clearer linguistic direction, while human validation confirms that terms are applied correctly in context.",
  },
  {
    question: "How many terms should an enterprise glossary include?",
    answer:
      "There is no universal target. A useful glossary may contain a few hundred carefully governed terms or many thousands across products, industries, and languages. Quality and relevance matter more than volume.",
  },
  {
    question: "Who should approve glossary terms?",
    answer:
      "Approval depends on the subject. Product owners may approve product terminology, legal teams may approve legal wording, clinical experts may validate medical terminology, and marketing teams may approve brand language. A localization or terminology owner can coordinate the process.",
  },
  {
    question: "What information should a glossary entry contain?",
    answer:
      "At minimum, an entry should include the source term, approved translation, and enough context to explain its use. More developed entries may include a definition, subject area, grammatical information, examples, prohibited variants, owner, approval status, and review history.",
  },
  {
    question: "Can one glossary support multiple languages?",
    answer:
      "Yes. A multilingual glossary can connect one approved source concept with equivalents across many target languages. Each language should still be reviewed independently for grammar, regional usage, and conceptual differences.",
  },
  {
    question: "Should every word be added to a translation glossary?",
    answer:
      "No. Glossaries should focus on terminology where consistency and correct interpretation matter. Common words that can be translated naturally without special instructions generally do not need to be included.",
  },
  {
    question: "How often should a translation glossary be updated?",
    answer:
      "A glossary should be updated whenever important terminology changes and reviewed on a regular schedule. Product launches, regulatory updates, brand changes, market expansion, and recurring reviewer corrections are common triggers.",
  },
  {
    question: "Can a translation glossary improve translation quality?",
    answer:
      "Yes. A well-maintained glossary reduces inconsistent terminology, prevents repeated decision-making, supports faster review, and gives translators clearer instructions. Its effectiveness depends on sound entries, stakeholder approval, workflow integration, and ongoing maintenance.",
  },
  {
    question: "Does a glossary eliminate the need for human review?",
    answer:
      "No. A glossary improves consistency but cannot resolve every contextual, grammatical, cultural, or stylistic decision. Human review remains important for specialized, high-risk, customer-facing, regulated, or highly visible content.",
  },
  {
    question: "Can Stepes create and manage a translation glossary?",
    answer:
      "Yes. Stepes can help identify candidate terminology, develop definitions, translate and validate entries, establish approval workflows, and apply approved terminology across AI-powered and professional human translation processes.",
  },
];

const relatedResources = [
  {
    title: "Terminology Management",
    description:
      "Create, approve, maintain, and apply multilingual terminology across translators, reviewers, departments, and AI-powered workflows.",
    href: "https://www.stepes.com/terminology-management/",
    action: "Explore Terminology Management",
    icon: "list",
  },
  {
    title: "Translation Memory",
    description:
      "See how approved translations can be stored, governed, and reused to improve consistency and reduce repetitive work.",
    href: "https://www.stepes.com/translation-memory/",
    action: "Explore Translation Memory",
    icon: "database",
  },
  {
    title: "AI Translation Insights",
    description:
      "Explore practical guidance on AI translation quality, model selection, security, governance, terminology, and human validation.",
    href: "https://www.stepes.com/ai-translation-insights/",
    action: "Explore AI Translation Insights",
    icon: "spark",
  },
  {
    title: "Translation Quality & Governance",
    description:
      "Learn how enterprise teams define quality requirements, manage reviews, measure performance, and maintain multilingual consistency.",
    href: "https://www.stepes.com/translation-quality-governance/",
    action: "Explore Quality & Governance",
    icon: "check",
  },
  {
    title: "Translation Guides",
    description:
      "Find practical guidance for translating documents, specialized content, media, file formats, and business communications.",
    href: "https://www.stepes.com/translation-guides/",
    action: "Browse Translation Guides",
    icon: "book",
  },
  {
    title: "Localization Guides",
    description:
      "Explore software, website, product, multimedia, and continuous localization best practices.",
    href: "https://www.stepes.com/localization-guides/",
    action: "Browse Localization Guides",
    icon: "globe",
  },
  {
    title: "AI + Human Translation Workflows",
    description:
      "See how AI translation, professional linguists, terminology, quality assurance, and risk-based review work together.",
    href: "https://www.stepes.com/resources/ai-human-translation-workflows/",
    action: "Explore AI + Human Workflows",
    icon: "workflow",
  },
  {
    title: "Translation Cost Guide",
    description:
      "Understand how language assets, source quality, technology, content type, and workflow design influence translation pricing.",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
    action: "View the Translation Cost Guide",
    icon: "chart",
  },
];

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
    arrow: (
      <svg {...common} width="18" height="18">
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),
    languages: (
      <svg {...common}>
        <path d="M4 5h7" />
        <path d="M7.5 3v2" />
        <path d="M5.5 9c1.8 2.7 4.2 4.6 7.5 5.8" />
        <path d="M10.5 5c-.8 3.2-2.7 5.8-5.5 7.5" />
        <path d="m14 19 3.2-8 3.3 8" />
        <path d="M15.4 16h3.5" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21" />
        <path d="M12 3c-2.2 2.5-3.3 5.5-3.3 9s1.1 6.5 3.3 9" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 3 1.1 3.3L16 8l-2.9 1.7L12 13l-1.1-3.3L8 8l2.9-1.7L12 3Z" />
        <path d="m6 14 .8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14Z" />
        <path d="m18 13 .7 1.8 1.8.7-1.8.7L18 18l-.7-1.8-1.8-.7 1.8-.7L18 13Z" />
      </svg>
    ),
    workflow: (
      <svg {...common}>
        <rect x="3" y="4" width="6" height="5" rx="1.5" />
        <rect x="15" y="15" width="6" height="5" rx="1.5" />
        <path d="M9 6.5h3a4 4 0 0 1 4 4V15" />
        <path d="m13 12 3 3 3-3" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    window: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01" />
        <path d="M10 6.5h.01" />
        <path d="m8 14 2 2 4-4" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" />
        <path d="M9 10h6" />
        <path d="M9 14h4" />
      </svg>
    ),
    target: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 5-5" />
        <path d="M16 4h4v4" />
      </svg>
    ),
    list: (
      <svg {...common}>
        <path d="M9 6h11" />
        <path d="M9 12h11" />
        <path d="M9 18h11" />
        <path d="M4 6h.01" />
        <path d="M4 12h.01" />
        <path d="M4 18h.01" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    connect: (
      <svg {...common}>
        <path d="M8 12h8" />
        <path d="m13 9 3 3-3 3" />
        <rect x="3" y="5" width="5" height="14" rx="2" />
        <rect x="16" y="5" width="5" height="14" rx="2" />
      </svg>
    ),
    refresh: (
      <svg {...common}>
        <path d="M20 6v5h-5" />
        <path d="M4 18v-5h5" />
        <path d="M6.1 9a7 7 0 0 1 11.4-2.3L20 11" />
        <path d="M17.9 15a7 7 0 0 1-11.4 2.3L4 13" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    ),
    book: (
      <svg {...common}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
    plus: (
      <svg {...common} width="18" height="18">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
    minus: (
      <svg {...common} width="18" height="18">
        <path d="M5 12h14" />
      </svg>
    ),
    clear: (
      <svg {...common} width="18" height="18">
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function StepesTranslationGlossaryWireframe() {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);
  const normalizedQuery = query.trim().toLowerCase();

  const topicFilteredTerms = useMemo(() => {
    if (selectedTopic === "all") return glossaryTerms;
    return glossaryTerms.filter(
      ({ term }) => glossaryTopicByTerm[term] === selectedTopic
    );
  }, [selectedTopic]);

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    return topicFilteredTerms
      .filter(({ term, definition, aliases }) =>
        [term, definition, ...(aliases || [])]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      )
      .slice(0, 6);
  }, [normalizedQuery, topicFilteredTerms]);

  const filteredGlossaryTerms = useMemo(() => {
    if (!normalizedQuery) return topicFilteredTerms;
    return topicFilteredTerms.filter(({ term, definition, aliases }) =>
      [term, definition, ...(aliases || [])]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [normalizedQuery, topicFilteredTerms]);

  const selectedTopicLabel =
    glossaryTopicOptions.find(({ value }) => value === selectedTopic)?.label ||
    "All Topics";

  const glossaryGroups = useMemo(
    () =>
      glossaryLetters
        .map((letter) => ({
          letter,
          terms: filteredGlossaryTerms.filter((item) => item.letter === letter),
        }))
        .filter((group) => group.terms.length > 0),
    [filteredGlossaryTerms]
  );

  const visibleLetters = useMemo(
    () => new Set(glossaryGroups.map((group) => group.letter)),
    [glossaryGroups]
  );

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchResults.length) {
      document.getElementById(searchResults[0].id)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      document.getElementById("complete-translation-glossary")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="glossary-page">
      <style>{`
        :root {
          --stepes-magenta: #c11d63;
          --stepes-magenta-dark: #9f1d55;
          --stepes-magenta-deep: #7a1542;
          --stepes-blush: #fdf2f7;
          --ink: #111827;
          --ink-soft: #43506a;
          --muted: #6b778d;
          --line: #dfe4ec;
          --line-soft: #edf0f5;
          --surface: #f7f8fb;
          --white: #ffffff;
          --shadow: 0 22px 60px rgba(17, 24, 39, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .glossary-page {
          min-width: 0;
          overflow-x: hidden;
          overflow-x: clip;
          overflow-wrap: break-word;
          color: var(--ink);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .glossary-page a,
        .glossary-page button,
        .glossary-page input {
          font: inherit;
        }

        .glossary-page a {
          color: inherit;
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .eyebrow {
          margin: 0 0 18px;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          font-weight: 600;
          letter-spacing: -0.025em;
          color: var(--ink);
        }

        h1 {
          max-width: 980px;
          margin: 0 auto 26px;
          font-size: 48px;
          line-height: 1.08;
          text-align: center;
        }

        h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.16;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 24px;
          line-height: 1.28;
        }

        .hero {
          position: relative;
          padding: 104px 0 96px;
          isolation: isolate;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image:
            linear-gradient(rgba(17, 24, 39, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 24, 39, 0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 86%);
        }

        .hero-copy {
          max-width: 790px;
          margin: 0 auto 40px;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.7;
          text-align: center;
        }

        .search-wrap {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }

        .search-shell {
          padding: 12px;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: var(--shadow);
        }

        .search-form {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
        }

        .search-input-wrap {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 12px;
          padding: 0 8px 0 14px;
          color: var(--muted);
        }

        .search-input-wrap > svg {
          flex: 0 0 auto;
        }

        .search-input {
          width: 100%;
          min-width: 0;
          height: 54px;
          padding: 0;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--ink);
          font-size: 17px;
        }

        .search-input::placeholder {
          color: #8490a4;
        }

        .clear-search {
          display: inline-flex;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
        }

        .search-button {
          min-width: 132px;
          height: 54px;
          padding: 0 24px;
          border: 1px solid var(--stepes-magenta);
          border-radius: 999px;
          background: var(--stepes-magenta);
          color: var(--white);
          font-weight: 600;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .search-button:hover {
          border-color: var(--stepes-magenta-dark);
          background: var(--stepes-magenta-dark);
          transform: translateY(-1px);
        }

        .search-input:focus-visible,
        .search-button:focus-visible,
        .clear-search:focus-visible,
        .clear-results:focus-visible,
        .editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .topic-link:focus-visible {
          position: relative;
          z-index: 1;
          outline: 0;
          box-shadow: inset 0 0 0 3px rgba(193, 29, 99, 0.22);
        }

        .search-suggestions {
          position: absolute;
          z-index: 4;
          top: calc(100% + 12px);
          left: 20px;
          right: 20px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--white);
          box-shadow: 0 24px 60px rgba(17, 24, 39, 0.13);
        }

        .suggestion-link {
          display: grid;
          grid-template-columns: minmax(170px, 0.55fr) 1fr auto;
          align-items: center;
          gap: 22px;
          min-height: 72px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--line-soft);
          text-decoration: none;
        }

        .suggestion-link:last-child {
          border-bottom: 0;
        }

        .suggestion-term {
          font-weight: 600;
        }

        .suggestion-definition {
          overflow: hidden;
          color: var(--muted);
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .suggestion-link:hover .suggestion-term,
        .suggestion-link:hover .suggestion-arrow {
          color: var(--stepes-magenta);
        }

        .search-support {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 18px;
          margin: 22px auto 0;
          color: var(--muted);
          font-size: 14px;
        }

        .search-support strong {
          color: var(--ink-soft);
          font-weight: 600;
        }

        .search-support a {
          color: var(--ink-soft);
          font-weight: 600;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .search-support a:hover {
          color: var(--stepes-magenta);
        }

        .browse-section {
          padding: 96px 0;
          border-top: 1px solid var(--line-soft);
          background: var(--surface);
        }

        .browse-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.55fr);
          gap: 72px;
          align-items: start;
        }

        .section-intro {
          position: sticky;
          top: 28px;
        }

        .section-intro p:not(.eyebrow) {
          max-width: 420px;
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.7;
        }

        .topic-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          overflow: hidden;
          border-radius: 0;
          background: var(--line);
        }

        .topic-link {
          display: grid;
          min-height: 198px;
          grid-template-columns: 44px minmax(0, 1fr) 20px;
          align-content: start;
          gap: 18px;
          padding: 28px 28px 30px;
          border: 0;
          background: var(--white);
          text-decoration: none;
          transition: background 180ms ease;
        }

        .topic-link:hover {
          background: #fffafd;
        }

        .topic-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--stepes-blush);
          color: var(--stepes-magenta-dark);
        }

        .topic-content {
          display: block;
          min-width: 0;
        }

        .topic-title {
          display: block;
          margin: 1px 0 8px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        .topic-description {
          display: block;
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .topic-arrow,
        .suggestion-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #a5afbd;
          transition: color 180ms ease, transform 180ms ease;
        }

        .topic-arrow {
          align-self: center;
        }

        .topic-link:hover .topic-arrow {
          color: var(--stepes-magenta);
          transform: translateX(3px);
        }

        .essential-section {
          padding: 96px 0 104px;
          background: var(--white);
        }

        .essential-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 0.72fr);
          gap: 70px;
          align-items: end;
          margin-bottom: 52px;
        }

        .essential-header h2 {
          max-width: 700px;
          margin-bottom: 0;
        }

        .essential-summary {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.7;
        }

        .term-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          overflow: hidden;
          border-radius: 0;
          background: var(--line);
        }

        .term-item {
          position: relative;
          min-height: 212px;
          padding: 30px 30px 32px;
          border: 0;
          background: var(--white);
          scroll-margin-top: 28px;
        }

        .term-item::before {
          position: absolute;
          top: -1px;
          left: 30px;
          width: 36px;
          height: 3px;
          border-radius: 99px;
          background: var(--stepes-magenta);
          content: "";
          opacity: 0;
          transition: opacity 180ms ease;
        }

        .term-item:target,
        .term-item:hover {
          background: #fffafd;
        }

        .term-item:target::before,
        .term-item:hover::before {
          opacity: 1;
        }

        .term-name {
          margin-bottom: 12px;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.02em;
        }

        .term-name-link {
          color: inherit;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .term-name-link:hover {
          color: var(--stepes-magenta-dark);
        }

        .term-name-link:focus-visible {
          border-radius: 4px;
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
        }

        .term-definition {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.68;
        }

        .empty-state {
          grid-column: 1 / -1;
          padding: 42px;
          background: var(--white);
          text-align: center;
        }

        .empty-state strong {
          display: block;
          margin-bottom: 6px;
          font-size: 18px;
          font-weight: 600;
        }

        .empty-state p {
          margin-bottom: 16px;
          color: var(--muted);
        }

        .editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--stepes-magenta-dark);
          font-weight: 600;
          text-decoration: none;
        }

        .editorial-link svg {
          transition: transform 180ms ease;
        }

        .editorial-link:hover {
          color: var(--stepes-magenta);
        }

        .editorial-link:hover svg {
          transform: translateX(3px);
        }

        .essential-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 28px;
        }

        .glossary-section {
          padding: 96px 0 104px;
          border-top: 1px solid var(--line-soft);
          background: var(--surface);
        }

        .glossary-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 42px;
        }

        .glossary-header h2 {
          max-width: 720px;
          margin-bottom: 0;
        }

        .glossary-summary {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.7;
        }

        .glossary-tools {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.45fr) auto;
          gap: 16px;
          align-items: end;
          margin-bottom: 30px;
          padding: 22px;
          border: 1px solid var(--line);
          background: var(--white);
        }

        .glossary-control {
          min-width: 0;
        }

        .glossary-control-label {
          display: block;
          margin-bottom: 8px;
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .directory-search {
          display: flex;
          min-width: 0;
          height: 52px;
          align-items: center;
          gap: 10px;
          padding: 0 14px;
          border: 1px solid var(--line);
          background: var(--white);
          color: var(--muted);
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .directory-search:focus-within,
        .topic-select:focus-visible {
          border-color: rgba(193, 29, 99, 0.55);
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.12);
          outline: 0;
        }

        .directory-search input {
          width: 100%;
          min-width: 0;
          height: 48px;
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--ink);
          font-size: 16px;
        }

        .directory-search input::placeholder {
          color: #8490a4;
        }

        .directory-clear {
          display: inline-flex;
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
        }

        .directory-clear:hover {
          color: var(--stepes-magenta-dark);
        }

        .directory-clear:focus-visible,
        .filters-reset:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 2px;
        }

        .topic-select {
          width: 100%;
          height: 52px;
          padding: 0 42px 0 14px;
          border: 1px solid var(--line);
          border-radius: 0;
          outline: 0;
          background:
            linear-gradient(45deg, transparent 50%, var(--muted) 50%) calc(100% - 19px) 22px / 6px 6px no-repeat,
            linear-gradient(135deg, var(--muted) 50%, transparent 50%) calc(100% - 13px) 22px / 6px 6px no-repeat,
            var(--white);
          color: var(--ink);
          font-weight: 400;
          appearance: none;
          cursor: pointer;
        }

        .filters-reset {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0 4px;
          border: 0;
          background: transparent;
          color: var(--stepes-magenta-dark);
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
        }

        .glossary-browser {
          display: grid;
          grid-template-columns: 132px minmax(0, 1fr);
          gap: 28px;
          align-items: start;
        }

        .glossary-rail {
          position: sticky;
          top: 24px;
          min-width: 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--white);
        }

        .glossary-rail-title {
          margin: 0;
          padding: 14px 12px;
          border-bottom: 1px solid var(--line-soft);
          color: var(--ink-soft);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-align: center;
          text-transform: uppercase;
        }

        .alphabet-nav {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .alphabet-link,
        .alphabet-disabled {
          display: inline-flex;
          min-width: 0;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .alphabet-link:nth-child(2n),
        .alphabet-disabled:nth-child(2n) {
          border-right: 0;
        }

        .alphabet-link:nth-last-child(-n + 2),
        .alphabet-disabled:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .alphabet-link {
          color: var(--ink-soft);
          transition: color 160ms ease, background 160ms ease;
        }

        .alphabet-link:hover {
          background: var(--stepes-blush);
          color: var(--stepes-magenta-dark);
        }

        .alphabet-link:focus-visible,
        .glossary-term-link:focus-visible,
        .workflow-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: -3px;
        }

        .alphabet-disabled {
          color: #b7bfcb;
          background: #fafbfc;
        }

        .glossary-main {
          min-width: 0;
        }

        .glossary-status {
          display: flex;
          min-height: 50px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 2px 12px;
          color: var(--muted);
          font-size: 14px;
        }

        .glossary-status strong {
          color: var(--ink-soft);
          font-weight: 600;
        }

        .clear-results {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: var(--stepes-magenta-dark);
          font-weight: 600;
          cursor: pointer;
        }

        .glossary-directory {
          border: 1px solid var(--line);
          background: var(--white);
        }

        .letter-group {
          border-bottom: 1px solid var(--line);
          scroll-margin-top: 28px;
        }

        .letter-group:last-child {
          border-bottom: 0;
        }

        .letter-marker {
          margin: 0;
          padding: 22px 32px 16px;
          border-bottom: 1px solid var(--line-soft);
          background: #fcfcfd;
          color: var(--stepes-magenta-dark);
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .letter-terms {
          min-width: 0;
        }

        .glossary-term-row {
          display: grid;
          grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr);
          gap: 42px;
          padding: 27px 32px 29px;
          border-bottom: 1px solid var(--line-soft);
          background: transparent;
          scroll-margin-top: 28px;
        }

        .glossary-term-row:last-child {
          border-bottom: 0;
        }

        .glossary-term-name {
          margin: 0;
          color: var(--ink);
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .glossary-term-copy {
          max-width: 780px;
        }

        .glossary-term-copy p {
          margin-bottom: 0;
          color: var(--ink-soft);
          line-height: 1.72;
        }

        .glossary-term-link {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          gap: 7px;
          margin-top: 10px;
          color: var(--stepes-magenta-dark);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .glossary-term-link svg {
          width: 16px;
          height: 16px;
          transition: transform 180ms ease;
        }

        .glossary-term-link:hover svg {
          transform: translateX(3px);
        }

        .glossary-empty {
          padding: 52px 24px;
          border: 1px solid var(--line);
          background: var(--white);
          text-align: center;
        }

        .glossary-empty strong {
          display: block;
          margin-bottom: 8px;
          font-size: 20px;
          font-weight: 600;
        }

        .glossary-empty p {
          margin-bottom: 18px;
          color: var(--muted);
        }

        .workflow-section {
          padding: 96px 0 104px;
          background: #161a24;
          color: var(--white);
        }

        .workflow-section .eyebrow {
          color: #f1a5c6;
        }

        .workflow-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.74fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 58px;
        }

        .workflow-header h2 {
          max-width: 720px;
          margin-bottom: 0;
          color: var(--white);
        }

        .workflow-summary {
          margin-bottom: 0;
          color: #cbd1dc;
          font-size: 18px;
          line-height: 1.7;
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          background: rgba(255, 255, 255, 0.16);
        }

        .workflow-step {
          display: grid;
          min-width: 0;
          grid-template-columns: 46px minmax(0, 1fr);
          align-content: start;
          gap: 0 18px;
          padding: 30px 28px 32px;
          background: #161a24;
        }

        .workflow-number {
          display: inline-flex;
          width: 46px;
          height: 46px;
          grid-row: 1 / span 2;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(241, 165, 198, 0.58);
          border-radius: 50%;
          background: #161a24;
          color: #f1a5c6;
          font-size: 13px;
          font-weight: 600;
        }

        .workflow-step h3 {
          margin: 2px 0 10px;
          color: var(--white);
          font-size: 18px;
          line-height: 1.38;
        }

        .workflow-step p {
          margin-bottom: 0;
          color: #aeb7c7;
          font-size: 15px;
          line-height: 1.68;
        }

        .workflow-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 38px;
        }

        .workflow-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: #f1a5c6;
          font-weight: 600;
          text-decoration: none;
        }

        .workflow-link svg {
          transition: transform 180ms ease;
        }

        .workflow-link:hover svg {
          transform: translateX(3px);
        }

        .practice-section {
          padding: 96px 0 104px;
          background: var(--white);
        }

        .practice-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.45fr);
          gap: 78px;
          align-items: start;
        }

        .practice-intro {
          position: sticky;
          top: 28px;
        }

        .practice-intro p:not(.eyebrow) {
          max-width: 410px;
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .practice-panel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: var(--white);
        }

        .practice-comparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          background: var(--surface);
        }

        .practice-column {
          padding: 30px 30px 32px;
        }

        .practice-column + .practice-column {
          border-left: 1px solid var(--line);
        }

        .practice-label {
          display: block;
          margin-bottom: 10px;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .practice-column h3 {
          margin-bottom: 12px;
          font-size: 22px;
        }

        .practice-column p {
          margin-bottom: 0;
          color: var(--ink-soft);
        }

        .practice-row {
          display: grid;
          grid-template-columns: minmax(210px, 0.42fr) minmax(0, 1fr);
          gap: 34px;
          padding: 28px 30px;
          border-top: 1px solid var(--line);
        }

        .practice-row h3 {
          margin-bottom: 0;
          font-size: 20px;
        }

        .practice-row p {
          margin-bottom: 0;
          color: var(--ink-soft);
        }

        .practice-footnote {
          padding: 26px 30px 28px;
          border-top: 1px solid var(--line);
          background: #fffafd;
        }

        .practice-footnote p {
          margin-bottom: 8px;
          color: var(--ink-soft);
        }


        .governance-section {
          padding: 96px 0 104px;
          border-top: 1px solid var(--line-soft);
          background: var(--surface);
        }

        .governance-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 54px;
        }

        .governance-header h2 {
          max-width: 760px;
          margin-bottom: 0;
        }

        .governance-summary {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .governance-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .governance-item {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 20px;
          padding: 30px 32px 32px 0;
          border-top: 1px solid var(--line-soft);
        }

        .governance-item:nth-child(-n + 2) {
          border-top: 0;
        }

        .governance-item:nth-child(even) {
          padding-left: 32px;
          border-left: 1px solid var(--line);
        }

        .governance-icon,
        .resource-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--stepes-blush);
          color: var(--stepes-magenta-dark);
        }

        .governance-item h3 {
          margin: 1px 0 9px;
          font-size: 20px;
        }

        .governance-item p {
          max-width: 520px;
          margin-bottom: 0;
          color: var(--ink-soft);
          line-height: 1.7;
        }

        .faq-section {
          padding: 96px 0 104px;
          background: var(--white);
        }

        .faq-header {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(360px, 0.58fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 46px;
        }

        .faq-header h2 {
          max-width: 690px;
          margin-bottom: 0;
        }

        .faq-summary {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .faq-panel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: var(--white);
        }

        .faq-item + .faq-item {
          border-top: 1px solid var(--line);
        }

        .faq-question {
          display: grid;
          width: 100%;
          min-height: 78px;
          grid-template-columns: minmax(0, 1fr) 42px;
          align-items: center;
          gap: 24px;
          padding: 20px 26px 20px 30px;
          border: 0;
          background: transparent;
          color: var(--ink);
          text-align: left;
          cursor: pointer;
        }

        .faq-question span:first-child {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .faq-control {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--surface);
          color: var(--stepes-magenta-dark);
          transition: background 180ms ease, color 180ms ease;
        }

        .faq-question:hover .faq-control {
          background: var(--stepes-blush);
          color: var(--stepes-magenta);
        }

        .faq-question:focus-visible {
          position: relative;
          z-index: 1;
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: -4px;
        }

        .faq-answer {
          padding: 0 88px 26px 30px;
        }

        .faq-answer p {
          max-width: 840px;
          margin-bottom: 0;
          color: var(--ink-soft);
          line-height: 1.74;
        }

        .resources-section {
          padding: 96px 0 104px;
          border-top: 1px solid var(--line-soft);
          background: var(--surface);
        }

        .resources-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 0.68fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 48px;
        }

        .resources-header h2 {
          max-width: 720px;
          margin-bottom: 0;
        }

        .resources-summary {
          margin-bottom: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          background: var(--line);
        }

        .resource-card {
          display: flex;
          min-height: 254px;
          flex-direction: column;
          align-items: flex-start;
          padding: 28px 26px 25px;
          background: var(--white);
          text-decoration: none;
          transition: background 180ms ease;
        }

        .resource-card:hover {
          background: #fffafd;
        }

        .resource-card:focus-visible {
          position: relative;
          z-index: 1;
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: -3px;
        }

        .resource-icon {
          margin-bottom: 22px;
        }

        .resource-card h3 {
          margin-bottom: 10px;
          font-size: 20px;
          line-height: 1.36;
        }

        .resource-card p {
          margin-bottom: 20px;
          color: var(--ink-soft);
          font-size: 15px;
          line-height: 1.68;
        }

        .resource-action {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          color: var(--stepes-magenta-dark);
          font-size: 14px;
          font-weight: 600;
        }

        .resource-action svg {
          width: 16px;
          height: 16px;
          transition: transform 180ms ease;
        }

        .resource-card:hover .resource-action svg {
          transform: translateX(3px);
        }

        .cta-section {
          padding: 96px 0 104px;
          background: var(--white);
        }

        .cta-panel {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.62fr);
          gap: 72px;
          overflow: hidden;
          padding: 58px 60px;
          border: 1px solid #f0cfdd;
          border-radius: 30px;
          background: linear-gradient(135deg, #fff8fb 0%, #fdf2f7 100%);
        }

        .cta-copy {
          position: relative;
          z-index: 1;
        }

        .cta-copy h2 {
          max-width: 720px;
          margin-bottom: 18px;
        }

        .cta-copy > p:not(.eyebrow) {
          max-width: 720px;
          margin-bottom: 28px;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cta-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .cta-button-primary {
          border: 1px solid var(--stepes-magenta);
          background: var(--stepes-magenta);
          color: var(--white) !important;
        }

        .cta-button-secondary {
          border: 1px solid #dfb5c8;
          background: rgba(255, 255, 255, 0.78);
          color: var(--stepes-magenta-dark) !important;
        }

        .cta-button:hover {
          transform: translateY(-1px);
        }

        .cta-button-primary:hover {
          border-color: var(--stepes-magenta-dark);
          background: var(--stepes-magenta-dark);
        }

        .cta-button-secondary:hover {
          border-color: var(--stepes-magenta);
          background: var(--white);
        }

        .cta-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        .cta-support {
          position: relative;
          z-index: 1;
          display: grid;
          align-content: center;
          border-left: 1px solid rgba(193, 29, 99, 0.18);
          padding-left: 42px;
        }

        .cta-support-item {
          padding: 18px 0;
          border-top: 1px solid rgba(193, 29, 99, 0.14);
        }

        .cta-support-item:first-child {
          border-top: 0;
        }

        .cta-support-item strong {
          display: block;
          margin-bottom: 4px;
          font-size: 17px;
          font-weight: 600;
        }

        .cta-support-item span {
          color: var(--ink-soft);
          font-size: 14px;
        }

        @media (max-width: 1279px) {
          .shell {
            padding-inline: 40px;
          }

          .browse-layout,
          .practice-layout {
            gap: 52px;
          }

          .workflow-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .topic-link {
            min-height: 210px;
          }

          .resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 980px) {
          .shell {
            padding-inline: 24px;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 32px;
          }

          h3 {
            font-size: 22px;
          }

          .hero {
            padding: 92px 0 84px;
          }

          .browse-section,
          .essential-section,
          .glossary-section,
          .workflow-section,
          .practice-section,
          .governance-section,
          .faq-section,
          .resources-section,
          .cta-section {
            padding: 80px 0;
          }

          .browse-layout,
          .essential-header,
          .glossary-header,
          .workflow-header,
          .practice-layout,
          .governance-header,
          .faq-header,
          .resources-header,
          .cta-panel {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .practice-intro {
            position: static;
          }

          .practice-intro p:not(.eyebrow) {
            max-width: 760px;
          }

          .section-intro {
            position: static;
          }

          .section-intro p:not(.eyebrow),
          .essential-summary {
            max-width: 760px;
          }

          .topic-link {
            min-height: 196px;
            padding: 24px;
          }

          .term-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .term-item {
            min-height: 198px;
          }

          .term-name {
            font-size: 22px;
          }

          .workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .glossary-tools {
            grid-template-columns: minmax(0, 1fr) minmax(260px, 0.7fr);
          }

          .filters-reset {
            grid-column: 1 / -1;
            min-height: 44px;
            justify-content: flex-start;
          }

          .glossary-browser {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .glossary-rail {
            position: static;
          }

          .glossary-rail-title {
            display: none;
          }

          .alphabet-nav {
            grid-template-columns: repeat(26, 44px);
            overflow-x: auto;
            overscroll-behavior-inline: contain;
            scrollbar-width: thin;
            -webkit-overflow-scrolling: touch;
          }

          .alphabet-link,
          .alphabet-disabled,
          .alphabet-link:nth-child(2n),
          .alphabet-disabled:nth-child(2n) {
            border-right: 1px solid var(--line-soft);
            border-bottom: 0;
          }

          .alphabet-link:last-child,
          .alphabet-disabled:last-child {
            border-right: 0;
          }

          .glossary-term-row {
            grid-template-columns: minmax(190px, 0.4fr) minmax(0, 1fr);
            gap: 28px;
            padding-inline: 28px;
          }

          .practice-comparison {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .governance-grid {
            grid-template-columns: 1fr;
          }

          .governance-item,
          .governance-item:nth-child(even) {
            padding: 28px 0;
            border-top: 1px solid var(--line-soft);
            border-left: 0;
          }

          .governance-item:first-child {
            border-top: 0;
          }

          .faq-panel {
            border-radius: 24px;
          }

          .cta-panel {
            padding: 48px;
          }

          .cta-support {
            border-top: 1px solid rgba(193, 29, 99, 0.18);
            border-left: 0;
            padding-top: 14px;
            padding-left: 0;
          }
        }

        @media (max-width: 720px) {
          .shell {
            padding-inline: 20px;
          }

          h1 {
            max-width: 100%;
            font-size: 38px;
            line-height: 1.1;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          .hero {
            padding: 72px 0 68px;
          }

          .hero-copy {
            margin-bottom: 30px;
            font-size: 18px;
          }

          .search-shell {
            padding: 10px;
            border-radius: 24px;
          }

          .search-form {
            grid-template-columns: 1fr;
          }

          .search-input-wrap {
            min-height: 54px;
            padding-inline: 12px;
          }

          .search-button {
            width: 100%;
          }

          .search-suggestions {
            left: 0;
            right: 0;
            max-height: min(360px, 55vh);
            overflow-y: auto;
          }

          .suggestion-link {
            grid-template-columns: 1fr auto;
            gap: 12px;
          }

          .suggestion-definition {
            display: none;
          }

          .search-support {
            display: block;
            text-align: center;
          }

          .search-support strong {
            display: block;
            margin-bottom: 6px;
          }

          .search-support a {
            display: inline-flex;
            min-height: 44px;
            align-items: center;
            margin: 0 6px;
          }

          .browse-section,
          .essential-section,
          .glossary-section,
          .workflow-section,
          .practice-section,
          .governance-section,
          .faq-section,
          .resources-section,
          .cta-section {
            padding: 68px 0;
          }

          .topic-grid,
          .term-grid {
            grid-template-columns: 1fr;
          }

          .topic-link {
            min-height: 0;
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 16px;
            padding: 24px 20px;
          }

          .topic-arrow {
            grid-column: 2;
            align-self: start;
            justify-content: flex-start;
            min-height: 30px;
            margin-top: -4px;
          }

          .topic-icon {
            width: 42px;
            height: 42px;
          }

          .essential-header {
            margin-bottom: 34px;
          }

          .term-item {
            min-height: 0;
            padding: 26px 20px 28px;
          }

          .term-item::before {
            left: 20px;
          }

          .term-name {
            font-size: 20px;
          }

          .essential-footer,
          .workflow-footer {
            justify-content: flex-start;
          }

          .glossary-header,
          .workflow-header {
            margin-bottom: 34px;
          }

          .glossary-tools {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 18px;
          }

          .filters-reset {
            grid-column: auto;
            width: fit-content;
          }

          .alphabet-nav {
            grid-template-columns: repeat(26, 44px);
          }

          .glossary-status {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
            padding: 10px 0 14px;
          }

          .letter-marker {
            padding: 22px 20px 15px;
            font-size: 32px;
          }

          .glossary-term-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 24px 20px 26px;
          }

          .workflow-grid {
            grid-template-columns: 1fr;
            gap: 1px;
          }

          .workflow-step {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 0 16px;
            padding: 24px 20px 26px;
          }

          .workflow-number {
            width: 42px;
            height: 42px;
            grid-row: auto;
          }

          .workflow-step h3 {
            align-self: center;
            margin: 0;
          }

          .workflow-step p {
            grid-column: 1 / -1;
            margin-top: 14px;
          }

          .practice-panel {
            border-radius: 22px;
          }

          .practice-comparison {
            grid-template-columns: 1fr;
          }

          .practice-column + .practice-column {
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .practice-column,
          .practice-row,
          .practice-footnote {
            padding-inline: 22px;
          }

          .practice-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .governance-header,
          .faq-header,
          .resources-header {
            margin-bottom: 34px;
          }

          .governance-item {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 16px;
            padding: 24px 0;
          }

          .governance-icon,
          .resource-icon {
            width: 42px;
            height: 42px;
          }

          .faq-panel {
            border-radius: 22px;
          }

          .faq-question {
            min-height: 72px;
            grid-template-columns: minmax(0, 1fr) 38px;
            gap: 14px;
            padding: 18px 18px 18px 20px;
          }

          .faq-question span:first-child {
            font-size: 17px;
          }

          .faq-control {
            width: 36px;
            height: 36px;
          }

          .faq-answer {
            padding: 0 20px 24px;
          }

          .resource-grid {
            grid-template-columns: 1fr;
          }

          .resource-card {
            min-height: 0;
            padding: 24px 22px;
          }

          .resource-icon {
            margin-bottom: 18px;
          }

          .cta-panel {
            gap: 30px;
            padding: 34px 24px;
            border-radius: 24px;
          }

          .cta-copy > p:not(.eyebrow) {
            font-size: 17px;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
            min-height: 52px;
            padding: 12px 16px;
            font-size: 15px;
          }

          .cta-support-item {
            padding: 14px 0;
          }
        }

        @media (max-width: 360px) {
          .hero-copy,
          .section-intro p:not(.eyebrow),
          .essential-summary {
            font-size: 17px;
          }

          .topic-link {
            grid-template-columns: 38px minmax(0, 1fr);
            gap: 14px;
          }

          .topic-icon {
            width: 38px;
            height: 38px;
            border-radius: 12px;
          }

          .cta-panel {
            padding: 30px 20px;
          }

          .cta-button {
            padding-inline: 12px;
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="glossary-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell">
          <h1 id="glossary-title">
            Translation Glossary: Translation, Localization, and AI Terms Explained
          </h1>
          <p className="hero-copy">
            Explore clear, practical definitions for the terminology used across translation,
            localization, artificial intelligence, terminology management, quality assurance,
            and multilingual content operations.
          </p>

          <div className="search-wrap">
            <div className="search-shell">
              <form className="search-form" role="search" onSubmit={submitSearch}>
                <div className="search-input-wrap">
                  <Icon name="search" />
                  <input
                    className="search-input"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search translation and localization terms"
                    aria-label="Search translation and localization terms"
                    aria-controls="complete-translation-glossary"
                  />
                  {query && (
                    <button
                      type="button"
                      className="clear-search"
                      onClick={() => setQuery("")}
                      aria-label="Clear glossary search"
                    >
                      <Icon name="clear" />
                    </button>
                  )}
                </div>
                <button className="search-button" type="submit">
                  Search Glossary
                </button>
              </form>
            </div>

            {normalizedQuery && searchResults.length > 0 && (
              <div className="search-suggestions" aria-label="Glossary search suggestions">
                {searchResults.map((item) => (
                  <a
                    className="suggestion-link"
                    href={`${PAGE_URL}#${item.id}`}
                    key={item.id}
                  >
                    <span className="suggestion-term">{item.term}</span>
                    <span className="suggestion-definition">{item.definition}</span>
                    <span className="suggestion-arrow">
                      <Icon name="arrow" />
                    </span>
                  </a>
                ))}
              </div>
            )}

            <div className="search-support" aria-label="Glossary coverage and popular searches">
              <strong>{glossaryTerms.length} terms</strong>
              <span>Popular searches</span>
              <a href={`${PAGE_URL}#glossary-translation-memory`}>Translation Memory</a>
              <a href={`${PAGE_URL}#glossary-localization`}>Localization</a>
              <a href={`${PAGE_URL}#glossary-ai-translation`}>AI Translation</a>
              <a href={`${PAGE_URL}#glossary-linguistic-quality-assurance`}>Linguistic Quality Assurance</a>
            </div>
          </div>
        </div>
      </section>

      <section className="browse-section" aria-labelledby="browse-topic-title">
        <div className="shell browse-layout">
          <div className="section-intro">
            <p className="eyebrow">Browse by Topic</p>
            <h2 id="browse-topic-title">Explore the Language of Modern Translation</h2>
            <p>
              Translation terminology now spans language services, artificial intelligence,
              software development, content systems, quality measurement, regulatory
              requirements, and enterprise governance. Browse by subject to understand how the
              concepts connect.
            </p>
          </div>

          <div className="topic-grid">
            {topicGroups.map((topic) => (
              <a
                className="topic-link"
                href={`${PAGE_URL}#${topic.anchor}`}
                key={topic.id}
                onClick={() => {
                  setQuery("");
                  setSelectedTopic(topic.id);
                }}
              >
                <span className="topic-icon">
                  <Icon name={topic.icon} />
                </span>
                <span className="topic-content">
                  <span className="topic-title">{topic.title}</span>
                  <span className="topic-description">{topic.description}</span>
                </span>
                <span className="topic-arrow">
                  <Icon name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="essential-section"
        id="essential-translation-terms"
        aria-labelledby="essential-title"
      >
        <div className="shell">
          <div className="essential-header">
            <div>
              <p className="eyebrow">Essential Terms</p>
              <h2 id="essential-title">Essential Concepts for Global Content Teams</h2>
            </div>
            <p className="essential-summary">
              New to translation and localization? These foundational terms explain how
              multilingual content moves from a source language to a complete, market-ready
              experience.
            </p>
          </div>

          <div className="term-grid">
            {essentialTerms.map((item) => (
              <article className="term-item" id={`essential-${item.id}`} key={item.id}>
                <h3 className="term-name">
                  <a
                    className="term-name-link"
                    href={`${PAGE_URL}#glossary-${item.id}`}
                    aria-label={`View the ${item.term} definition in the complete glossary`}
                  >
                    {item.term}
                  </a>
                </h3>
                <p className="term-definition">{item.definition}</p>
              </article>
            ))}
          </div>

          <div className="essential-footer">
            <a className="editorial-link" href={`${PAGE_URL}#complete-translation-glossary`}>
              Browse the Complete A–Z Glossary <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="glossary-section"
        id="complete-translation-glossary"
        aria-labelledby="complete-glossary-title"
      >
        <div className="shell">
          <div className="glossary-header">
            <div>
              <p className="eyebrow">A–Z Reference</p>
              <h2 id="complete-glossary-title">Translation, Localization, and AI Terminology</h2>
            </div>
            <p className="glossary-summary">
              Browse clear definitions for the language used across translation services,
              localization technology, artificial intelligence, linguistic quality, and global
              content operations.
            </p>
          </div>

          <div className="glossary-tools" aria-label="Glossary search and filters">
            <div className="glossary-control">
              <label className="glossary-control-label" htmlFor="directory-search">
                Search the Glossary
              </label>
              <div className="directory-search">
                <Icon name="search" />
                <input
                  id="directory-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search a term, abbreviation, or concept"
                  aria-controls="glossary-directory-results"
                />
                {query && (
                  <button
                    className="directory-clear"
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear glossary search"
                  >
                    <Icon name="clear" />
                  </button>
                )}
              </div>
            </div>

            <div className="glossary-control">
              <label className="glossary-control-label" htmlFor="topic-filter">
                Filter by Topic
              </label>
              <select
                className="topic-select"
                id="topic-filter"
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value)}
                aria-controls="glossary-directory-results"
              >
                {glossaryTopicOptions.map((topic) => (
                  <option value={topic.value} key={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </div>

            {(normalizedQuery || selectedTopic !== "all") && (
              <button
                className="filters-reset"
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedTopic("all");
                }}
              >
                Reset Filters <Icon name="clear" />
              </button>
            )}
          </div>

          <div className="glossary-browser">
            <aside className="glossary-rail" aria-label="Glossary alphabetical navigation">
              <p className="glossary-rail-title">Browse A–Z</p>
              <nav className="alphabet-nav" aria-label="Browse glossary alphabetically">
                {glossaryLetters.map((letter) =>
                  visibleLetters.has(letter) ? (
                    <a
                      className="alphabet-link"
                      href={`${PAGE_URL}#glossary-letter-${letter.toLowerCase()}`}
                      key={letter}
                    >
                      {letter}
                    </a>
                  ) : (
                    <span className="alphabet-disabled" aria-disabled="true" key={letter}>
                      {letter}
                    </span>
                  )
                )}
              </nav>
            </aside>

            <div className="glossary-main" id="glossary-directory-results">
              <div className="glossary-status" aria-live="polite">
                <span>
                  {normalizedQuery ? (
                    <>
                      Showing <strong>{filteredGlossaryTerms.length}</strong> matching terms for
                      {" "}“{query.trim()}”
                      {selectedTopic !== "all" && (
                        <>
                          {" "}in <strong>{selectedTopicLabel}</strong>
                        </>
                      )}
                    </>
                  ) : selectedTopic !== "all" ? (
                    <>
                      Showing <strong>{filteredGlossaryTerms.length}</strong> terms in{" "}
                      <strong>{selectedTopicLabel}</strong>
                    </>
                  ) : (
                    <>
                      Browse <strong>{glossaryTerms.length}</strong> glossary terms by letter
                    </>
                  )}
                </span>
                {(normalizedQuery || selectedTopic !== "all") && (
                  <button
                    className="clear-results"
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setSelectedTopic("all");
                    }}
                  >
                    Reset Filters <Icon name="clear" />
                  </button>
                )}
              </div>

              {glossaryGroups.length > 0 ? (
                <div className="glossary-directory">
                  {glossaryGroups.map((group) => (
                    <section
                      className="letter-group"
                      id={`glossary-letter-${group.letter.toLowerCase()}`}
                      aria-labelledby={`glossary-heading-${group.letter.toLowerCase()}`}
                      key={group.letter}
                    >
                      <h3
                        className="letter-marker"
                        id={`glossary-heading-${group.letter.toLowerCase()}`}
                      >
                        {group.letter}
                      </h3>
                      <div className="letter-terms">
                        {group.terms.map((item) => (
                          <article className="glossary-term-row" id={item.id} key={item.id}>
                            <h4 className="glossary-term-name">{item.term}</h4>
                            <div className="glossary-term-copy">
                              <p>{item.definition}</p>
                              {item.link && (
                                <a className="glossary-term-link" href={item.link}>
                                  {item.linkLabel} <Icon name="arrow" />
                                </a>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="glossary-empty">
                  <strong>No glossary terms match the selected filters.</strong>
                  <p>Try a broader search, a different topic, or reset the glossary.</p>
                  <button
                    className="editorial-link"
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setSelectedTopic("all");
                    }}
                  >
                    Reset Filters <Icon name="arrow" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="workflow-section"
        id="how-translation-concepts-work-together"
        aria-labelledby="workflow-title"
      >
        <div className="shell">
          <div className="workflow-header">
            <div>
              <p className="eyebrow">Connected Workflows</p>
              <h2 id="workflow-title">From Source Content to Global Delivery</h2>
            </div>
            <p className="workflow-summary">
              Translation quality is shaped by the way content preparation, language assets,
              technology, professional expertise, and measurable controls work together.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <span className="workflow-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="workflow-footer">
            <a
              className="workflow-link"
              href="https://www.stepes.com/ai-human-translation-workflow/"
            >
              Explore the AI + Human Translation Workflow <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="practice-section"
        id="translation-glossaries-in-practice"
        aria-labelledby="practice-title"
      >
        <div className="shell practice-layout">
          <div className="practice-intro">
            <p className="eyebrow">Terminology in Practice</p>
            <h2 id="practice-title">Public Glossary vs. Enterprise Term Base</h2>
            <p>
              This page explains common industry terminology. An enterprise glossary goes
              further by controlling the language that is specific to an organization, product,
              brand, industry, or multilingual content program.
            </p>
          </div>

          <div className="practice-panel">
            <div className="practice-comparison">
              <article className="practice-column">
                <span className="practice-label">Public Reference</span>
                <h3>Translation Glossary</h3>
                <p>
                  Explains industry concepts so business teams, language professionals, and
                  technology stakeholders can work from a shared understanding.
                </p>
              </article>
              <article className="practice-column">
                <span className="practice-label">Organization-Specific Asset</span>
                <h3>Enterprise Term Base</h3>
                <p>
                  Records approved product names, technical terms, regulated wording, brand
                  language, regional variants, and translations that should not be used.
                </p>
              </article>
            </div>

            <article className="practice-row">
              <h3>Glossary vs. Translation Memory</h3>
              <p>
                A glossary manages important words and expressions. A translation memory stores
                complete translated segments, often full sentences. The two assets work together
                to control terminology and reuse approved content.
              </p>
            </article>

            <article className="practice-row">
              <h3>Glossary vs. Style Guide</h3>
              <p>
                A glossary identifies which term to use. A style guide defines how the content
                should sound and appear, including tone, capitalization, punctuation, dates,
                numbers, and locale-specific writing conventions.
              </p>
            </article>

            <article className="practice-row">
              <h3>Translation Glossaries and AI</h3>
              <p>
                Approved terminology can improve AI translation consistency, but terms must still
                be applied correctly within the grammatical and business context. Professional
                validation remains important for high-risk or high-visibility content.
              </p>
            </article>

            <div className="practice-footnote">
              <p>
                Stepes helps organizations extract, translate, approve, maintain, and apply
                terminology across AI-powered and professional human translation workflows.
              </p>
              <a
                className="editorial-link"
                href="https://www.stepes.com/terminology-management/"
              >
                Explore Terminology Management <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="governance-section"
        id="building-enterprise-translation-glossary"
        aria-labelledby="governance-title"
      >
        <div className="shell">
          <div className="governance-header">
            <div>
              <p className="eyebrow">Glossary Governance</p>
              <h2 id="governance-title">Turn Important Terminology Into a Reusable Business Asset</h2>
            </div>
            <p className="governance-summary">
              A useful enterprise glossary is not a list of every word an organization uses. It
              is a governed language asset focused on terminology that affects meaning,
              consistency, compliance, usability, or brand identity.
            </p>
          </div>

          <div className="governance-grid">
            {governanceItems.map((item) => (
              <article className="governance-item" key={item.title}>
                <span className="governance-icon">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="faq-section"
        id="translation-glossary-faq"
        aria-labelledby="faq-title"
      >
        <div className="shell">
          <div className="faq-header">
            <div>
              <h2 id="faq-title">Translation Glossary Frequently Asked Questions</h2>
            </div>
            <p className="faq-summary">
              Understand how glossaries, term bases, translation memories, AI translation, and
              human review work together in multilingual content programs.
            </p>
          </div>

          <div className="faq-panel">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;
              return (
                <article className="faq-item" key={item.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-control">
                      <Icon name={isOpen ? "minus" : "plus"} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer" id={answerId}>
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
        className="resources-section"
        id="related-translation-resources"
        aria-labelledby="resources-title"
      >
        <div className="shell">
          <div className="resources-header">
            <div>
              <p className="eyebrow">Related Resources</p>
              <h2 id="resources-title">Continue Exploring Translation and Localization</h2>
            </div>
            <p className="resources-summary">
              Go deeper into terminology, translation memory, AI translation, quality
              governance, localization workflows, and the factors that shape translation cost.
            </p>
          </div>

          <div className="resource-grid">
            {relatedResources.map((resource) => (
              <a className="resource-card" href={resource.href} key={resource.title}>
                <span className="resource-icon">
                  <Icon name={resource.icon} />
                </span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="resource-action">
                  {resource.action} <Icon name="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div className="cta-copy">
              <p className="eyebrow">Enterprise Translation Support</p>
              <h2 id="cta-title">Turn Translation Terminology Into Consistent Global Content</h2>
              <p>
                Build stronger multilingual workflows with approved terminology, reusable
                translation memories, AI-powered automation, and professional human expertise.
                Stepes helps global organizations translate and localize content across markets
                while maintaining the quality and governance required for enterprise use.
              </p>
              <div className="cta-actions">
                <a className="cta-button cta-button-primary" href="https://www.stepes.com/contact-us/">
                  Talk to a Translation Expert <Icon name="arrow" />
                </a>
                <a
                  className="cta-button cta-button-secondary"
                  href="https://www.stepes.com/terminology-management/"
                >
                  Explore Terminology Management <Icon name="arrow" />
                </a>
              </div>
            </div>

            <div className="cta-support" aria-label="Stepes enterprise translation capabilities">
              <div className="cta-support-item">
                <strong>100+ Languages</strong>
                <span>Support global programs across major and emerging markets.</span>
              </div>
              <div className="cta-support-item">
                <strong>AI + Human Workflows</strong>
                <span>Match automation and professional review to content risk and purpose.</span>
              </div>
              <div className="cta-support-item">
                <strong>Governed Language Assets</strong>
                <span>Apply approved terminology and translation memory across teams and content.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StepesTranslationGlossaryWireframe;
