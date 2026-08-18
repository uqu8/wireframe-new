import React from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/brazilian-portuguese-vs-european-portuguese/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const tocItems = [
  ["brazilian-portuguese-and-european-portuguese-at-a-glance", "Brazilian Portuguese and European Portuguese at a Glance"],
  ["are-brazilian-and-european-portuguese-the-same-language", "Are Brazilian and European Portuguese the Same Language?"],
  ["vocabulary-differences-that-affect-business-content", "Vocabulary Differences That Affect Business Content"],
  ["grammar-syntax-tone-and-forms-of-address", "Grammar, Syntax, Tone, and Forms of Address"],
  ["pronunciation-voice-over-and-speech-technology", "Pronunciation, Voice-Over, and Speech Technology"],
  ["spelling-and-the-portuguese-orthographic-agreement", "Spelling and the Portuguese Orthographic Agreement"],
  ["dates-numbers-currency-addresses-and-locale-formats", "Dates, Numbers, Currency, Addresses, and Locale Formats"],
  ["websites-multilingual-seo-and-regional-search-intent", "Websites, Multilingual SEO, and Regional Search Intent"],
  ["industry-and-regulatory-differences", "Industry and Regulatory Differences"],
  ["which-portuguese-locale-does-your-organization-need", "Which Portuguese Locale Does Your Organization Need?"],
  ["can-pt-br-content-be-adapted-into-pt-pt", "Can pt-BR Content Be Adapted Into pt-PT?"],
  ["portuguese-localization-checklist", "Portuguese Localization Checklist"],
  ["common-mistakes-to-avoid", "Common Mistakes to Avoid"],
  ["frequently-asked-questions", "Frequently Asked Questions"],
];

const takeaways = [
  {
    title: "pt-BR and pt-PT represent distinct market varieties.",
    text: "They share a common linguistic foundation but differ enough to affect clarity, tone, usability, and brand perception.",
  },
  {
    title: "One Portuguese version is rarely ideal for both public markets.",
    text: "Separate localization is usually recommended for websites, software, marketing, regulated content, customer support, and multimedia.",
  },
  {
    title: "Adaptation can be more efficient than translating twice.",
    text: "When source content and market requirements are closely aligned, an approved version can be professionally adapted for the second locale.",
  },
  {
    title: "Language assets must remain locale-specific.",
    text: "Terminology, translation memory, style guides, voice assets, software resources, and quality records should clearly distinguish pt-BR from pt-PT.",
  },
  {
    title: "The Orthographic Agreement did not create a universal Portuguese version.",
    text: "It harmonized parts of spelling while leaving many differences in usage, pronunciation, vocabulary, syntax, and market conventions.",
  },
];

const comparisonRows = [
  ["Locale code", <code className="inline-code">pt-BR</code>, <code className="inline-code">pt-PT</code>],
  ["Primary market", "Brazil", "Portugal"],
  ["Common name", "Português do Brasil / português brasileiro", "Português Europeu / português de Portugal"],
  ["Vocabulary", "Brazil-specific everyday, commercial, technical, and institutional terminology", "Portugal-specific everyday, commercial, technical, and institutional terminology"],
  ["Grammar and syntax", "Natural Brazilian constructions, pronoun patterns, verb usage, and sentence rhythm", "Natural Portuguese constructions, pronoun patterns, verb usage, and sentence rhythm"],
  ["Customer address", <><code className="inline-code">você</code>, <code className="inline-code">vocês</code>, neutral imperatives, and brand-specific forms are common</>, <><code className="inline-code">tu</code>, <code className="inline-code">vocês</code>, formal or neutral constructions, and omission of direct address are common depending on context</>],
  ["Pronunciation", "Brazilian regional pronunciation and prosody", "European Portuguese regional pronunciation and prosody"],
  ["Spelling", "Brazilian standard under the current orthographic framework", "Portuguese standard under the current orthographic framework"],
  ["Currency", <><span>Brazilian real (BRL), commonly displayed with </span><code className="inline-code">R$</code></>, <><span>Euro (EUR), commonly displayed with </span><code className="inline-code">€</code></>],
  ["Dates and numbers", "Brazilian locale conventions", "Portuguese locale conventions"],
  ["Addresses and identifiers", "Brazilian address formats, CEP, state fields, CPF/CNPJ where required", "Portuguese address formats, postal codes, districts or municipalities, NIF where required"],
  ["Regulatory language", "Brazilian authorities, laws, institutions, and ANVISA terminology", "Portuguese authorities, Portuguese law, EU institutions, and INFARMED terminology"],
  ["Software and apps", "pt-BR resource bundle, terminology, formatting, testing, and store content", "pt-PT resource bundle, terminology, formatting, testing, and store content"],
  ["Web and SEO", "Brazilian search behavior, keywords, offers, and local market content", "Portuguese search behavior, keywords, offers, and local market content"],
  ["Multimedia", "Brazilian pronunciation, voice talent, and spoken-language adaptation", "European Portuguese pronunciation, voice talent, and spoken-language adaptation"],
];

const vocabularyRows = [
  ["Mobile phone", "celular", "telemóvel"],
  ["Train", "trem", "comboio"],
  ["Bus", "ônibus", "autocarro"],
  ["Bathroom", "banheiro", "casa de banho"],
  ["Breakfast", "café da manhã", "pequeno-almoço"],
  ["Screen", "tela", "ecrã"],
  ["File", "arquivo", "ficheiro"],
  ["User", "usuário", "utilizador"],
  ["Application", "aplicativo / app", "aplicação / app"],
  ["Address", "endereço", "morada"],
  ["Order", "pedido", "encomenda"],
  ["Contact us", "entre em contato conosco", "contacte-nos"],
  ["Register / sign up", "cadastre-se", "registe-se / inscreva-se"],
  ["Shipping charge", "frete", "portes de envio"],
  ["Customer support", "atendimento ao cliente / suporte", "apoio ao cliente"],
  ["Identity card", "carteira de identidade / RG, depending on context", "cartão de cidadão, depending on context"],
];

const businessExampleRows = [
  ["We are updating your account.", "Estamos atualizando sua conta.", "Estamos a atualizar a sua conta."],
  ["Contact us for assistance.", "Entre em contato conosco para obter ajuda.", "Contacte-nos para obter ajuda."],
  ["Register to continue.", "Cadastre-se para continuar.", "Registe-se para continuar."],
  ["Your order is ready.", "Seu pedido está pronto.", "A sua encomenda está pronta."],
  ["Download the file.", "Baixe o arquivo.", "Transfira o ficheiro."],
  ["Review your shipping address.", "Revise seu endereço de entrega.", "Confirme a sua morada de entrega."],
];

const spellingRows = [
  ["recepção", "receção", "Reflects pronunciation and accepted national spelling"],
  ["contato", "contacto", "The consonant is retained in European Portuguese usage"],
  ["fato", "facto", "Different spelling and pronunciation; fato also has another meaning in Portugal"],
  ["úmido", "húmido", "National spelling difference remains"],
  ["acadêmico", "académico", "Different stress and accent convention"],
  ["Antônio", "António", "Different vowel quality and accent"],
];

const localeRows = [
  ["Locale", "pt-BR", "pt-PT"],
  ["Currency", "Brazilian real (BRL)", "Euro (EUR)"],
  ["Common currency display", "R$ 1.234,56", "1 234,56 €"],
  ["Country calling code", "+55", "+351"],
  ["Postal reference", "CEP", "Código postal"],
  ["Typical postal format", "Eight digits, commonly displayed as 00000-000", "Seven digits, commonly displayed as 0000-000"],
  ["Common tax or identity fields", "CPF, CNPJ, state or municipal fields depending on workflow", "NIF and other Portugal-specific fields depending on workflow"],
  ["Address language", "endereço, estado, município, bairro, CEP", "morada, distrito, concelho, localidade, código postal"],
  ["Time zones", "Multiple time zones", "Mainland Portugal and island time-zone considerations"],
  ["Date order", "Day-month-year is common", "Day-month-year is common"],
];

const decisionRows = [
  ["Audience is in Brazil only", "Create pt-BR content", "Aligns language, terminology, formats, institutions, and customer expectations with Brazil"],
  ["Audience is in Portugal only", "Create pt-PT content", "Aligns language, terminology, formats, institutions, and customer expectations with Portugal"],
  ["Public content targets both markets", "Create separate pt-BR and pt-PT versions", "Protects naturalness, brand credibility, SEO, usability, and conversion"],
  ["Regulated content targets both markets", "Use separate market workflows with specialist review", "Regulatory terminology, risk, institutions, and required language may differ"],
  ["Software or app launches in both markets", "Maintain distinct locale bundles and test builds", "Interfaces, formats, forms, store content, and terminology require locale control"],
  ["Audio or video targets both markets", "Produce market-specific scripts and voices", "Pronunciation and spoken-language expectations are highly visible"],
  ["Internal, low-risk content has a mixed audience", "Select an agreed variety and validate with users", "A single version may be acceptable when audience expectations and risk are controlled"],
  ["Existing pt-BR content must launch in Portugal", "Perform professional pt-BR-to-pt-PT adaptation and QA", "Reuse is possible, but language and locale differences require full review"],
  ["Existing pt-PT content must launch in Brazil", "Perform professional pt-PT-to-pt-BR adaptation and QA", "Market adaptation is more than word substitution"],
  ["The future market is not yet confirmed", "Do not start with unspecified “Portuguese”", "Market ambiguity creates rework, mixed language assets, and inconsistent approvals"],
];

const workflowSteps = [
  ["Confirm the target market and content purpose.", "Define whether the adaptation is for Brazil or Portugal, who will use it, and what business or regulatory risk it carries."],
  ["Audit the existing translation.", "Check quality, completeness, terminology, source alignment, formatting, and whether the original version is approved for reuse."],
  ["Separate locale-specific language assets.", "Create or update pt-BR and pt-PT glossaries, style guidance, and translation memories."],
  ["Adapt with native-market linguists.", "Review the complete content for vocabulary, grammar, tone, institutional language, and market fit."],
  ["Apply specialist review where required.", "Use medical, legal, financial, technical, or other subject-matter expertise according to content risk."],
  ["Run automated and human quality assurance.", "Check completeness, terminology, numbers, tags, placeholders, consistency, locale formats, and formatting."],
  ["Validate in context.", "Test websites, software, forms, documents, subtitles, or recordings in the environment where users will see or hear them."],
  ["Approve and retain separate assets.", "Store the final pt-BR and pt-PT content with clear locale metadata for future updates."],
];

const checklistGroups = [
  ["Market and Scope", [
    "Confirm whether the audience is in Brazil, Portugal, or both.",
    "Specify pt-BR and/or pt-PT in the project brief, files, and systems.",
    "Identify content that is public, regulated, technical, transactional, or high risk.",
    "Confirm whether the source will be translated separately or adapted from an existing Portuguese version.",
  ]],
  ["Language Assets", [
    "Create separate pt-BR and pt-PT terminology resources.",
    "Define tone, formality, pronouns, capitalization, and style.",
    "Separate translation memories by locale or apply reliable locale metadata.",
    "Record approved product names, institutional terms, and prohibited variants.",
  ]],
  ["Content", [
    "Review vocabulary, grammar, syntax, and forms of address.",
    "Validate spelling under the appropriate national standard.",
    "Adapt calls to action, marketing language, and customer-support terminology.",
    "Confirm legal, regulatory, medical, financial, and technical terminology with qualified reviewers.",
  ]],
  ["Digital Experience", [
    "Use distinct pt-BR and pt-PT software resources.",
    "Validate dates, numbers, currency, units, time zones, addresses, and identity fields.",
    "Test forms, input validation, payments, notifications, and error messages.",
    "Review layouts, text expansion, line breaks, fonts, and accessibility labels.",
  ]],
  ["Websites and SEO", [
    "Research market-specific keywords and search intent.",
    "Localize titles, metadata, headings, links, FAQs, alt text, and structured content.",
    "Use separate crawlable URLs where regional versions are needed.",
    "Implement reciprocal hreflang annotations and appropriate canonicals.",
    "Ensure users can switch regions without forced redirection.",
  ]],
  ["Multimedia", [
    "Use a native-market script and voice.",
    "Approve pronunciation of names, acronyms, products, and technical terms.",
    "Check timing, subtitles, on-screen text, and synchronization.",
    "Test speech recognition or text-to-speech separately for pt-BR and pt-PT.",
  ]],
  ["Quality and Governance", [
    "Complete native-market linguistic review.",
    "Perform in-context QA in the final document, product, or website.",
    "Resolve mixed-locale terminology before approval.",
    "Store approved content and decisions for future releases.",
    "Assign ownership for ongoing updates.",
  ]],
];

const mistakes = [
  ["Requesting “Portuguese” Without Naming the Market", "An unspecified target language can result in the wrong linguists, mixed terminology, incorrect voice selection, and rework later in production."],
  ["Treating Adaptation as Vocabulary Replacement", "Changing arquivo to ficheiro does not address grammar, tone, pronouns, formats, SEO, institutions, or content purpose."],
  ["Mixing pt-BR and pt-PT in One Translation Memory", "Mixed language assets can spread the wrong regional form across future projects. Preserve locale metadata and approval status."],
  ["Assuming the Orthographic Agreement Removed the Differences", "The agreement addressed parts of spelling. It did not standardize the complete language or the customer experience."],
  ["Using One Voice for Both Markets", "A single voice may be understood, but pronunciation and market identity remain immediately noticeable."],
  ["Hard-Coding Currency, Numbers, Dates, or Addresses", "A translated interface may still fail users when data formats and validation rules are not localized."],
  ["Duplicating a Website Without Regional SEO Work", "Regional pages need local vocabulary, search research, metadata, internal links, and market information—not only language conversion."],
  ["Skipping In-Context Review", "Strings that appear correct in a spreadsheet can become unclear, truncated, or inconsistent after integration into a screen, form, document, or video."],
];

const faqs = [
  ["Is Brazilian Portuguese the same as European Portuguese?", "They are varieties of the same language, but they differ in vocabulary, grammar, pronunciation, spelling, tone, and locale conventions. They should be treated as separate market locales when content quality and user experience matter."],
  ["Can Brazilians understand European Portuguese?", "Brazilians can generally understand European Portuguese, especially in writing. Fast spoken European Portuguese may be more difficult for listeners who are not accustomed to its pronunciation and vowel reduction."],
  ["Can Portuguese people understand Brazilian Portuguese?", "Portuguese audiences can generally understand Brazilian Portuguese. However, Brazilian vocabulary, grammar, tone, and pronunciation are clearly recognizable and may feel inappropriate for content presented as locally Portuguese."],
  ["What do pt-BR and pt-PT mean?", "pt identifies Portuguese, while BR and PT identify the regional market. pt-BR means Portuguese for Brazil, and pt-PT means Portuguese for Portugal."],
  ["Can my company use Brazilian Portuguese content in Portugal?", "It may be acceptable for limited internal or low-risk use if the audience agrees. For public websites, software, marketing, regulated content, customer support, and multimedia, professional adaptation into pt-PT is normally recommended."],
  ["Can European Portuguese content be used in Brazil?", "The same principle applies. Brazilian users may understand pt-PT content, but unfamiliar terminology and structures can reduce naturalness, usability, trust, and search performance."],
  ["Did the Portuguese Orthographic Agreement make pt-BR and pt-PT interchangeable?", "No. The agreement harmonized parts of spelling. It did not eliminate differences in vocabulary, grammar, pronunciation, tone, terminology, formats, institutions, or market expectations."],
  ["Do websites need separate pt-BR and pt-PT pages?", "Separate pages are recommended when a website actively targets both Brazil and Portugal and the content differs in terminology, offers, currency, logistics, legal information, search intent, or customer experience. Use distinct URLs and appropriate hreflang implementation."],
  ["Do software applications need separate Portuguese locales?", "Software intended for both markets should normally maintain separate pt-BR and pt-PT resource bundles. This supports correct terminology, interface language, formatting, forms, store content, testing, and release management."],
  ["Can AI translate between Brazilian and European Portuguese?", "AI can assist with first-pass translation or adaptation, but output should be evaluated for regional vocabulary, grammar, tone, terminology, omissions, and locale behavior. High-visibility, technical, regulated, or customer-facing content should receive native-market human review."],
  ["Is it cheaper to adapt one Portuguese version than translate both from the source?", "It can be. Adaptation may reduce effort when the existing translation is accurate, approved, and closely aligned with the second market. Savings depend on content type, quality, terminology, formatting, regulatory requirements, and the amount of market-specific rewriting required."],
  ["Should terminology and translation memory be separated?", "Yes. Organizations should clearly distinguish pt-BR and pt-PT terminology, translation memory, style guidance, approvals, and quality records. Shared concepts may be linked, but regional forms should remain identifiable."],
  ["What about Portuguese-speaking markets outside Brazil and Portugal?", "Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, Timor-Leste, and other Portuguese-speaking communities have their own linguistic and market considerations. Do not assume pt-BR or pt-PT is automatically the right customer-facing choice without reviewing the target country, audience, regulations, and content purpose."],
];

const relatedGuides = [
  ["How to Localize a Website for Brazil", "Plan Brazilian website localization across language, multilingual SEO, content workflows, forms, commerce, testing, and continuous updates.", "https://www.stepes.com/resources/localization-guides/how-to-localize-a-website-for-brazil/"],
  ["Portuguese Medical Translation and ANVISA Requirements", "Understand Brazilian Portuguese terminology, labeling, instructions for use, quality controls, and regulatory translation considerations for life sciences.", "https://www.stepes.com/resources/localization-guides/portuguese-medical-translation-anvisa-requirements/"],
  ["Portuguese Software and App Localization", "Build pt-BR and pt-PT software experiences with correct resource files, terminology, locale behavior, in-context review, testing, and continuous delivery.", "https://www.stepes.com/resources/localization-guides/portuguese-software-app-localization/"],
  ["How to Evaluate AI Translation for Portuguese", "Assess AI translation quality across Brazilian and European Portuguese using terminology controls, error analysis, human validation, and content-risk routing.", "https://www.stepes.com/resources/ai-translation-insights/how-to-evaluate-ai-translation-for-portuguese/"],
  ["Portuguese Translation Cost Guide", "Understand how locale, content type, subject matter, translation memory, AI workflows, human review, formatting, testing, and turnaround affect Portuguese translation pricing.", "https://www.stepes.com/resources/portuguese-translation-cost-guide/"],
];

const references = [
  ["Brazilian Presidency, Decree No. 6,583 of September 29, 2008 — Portuguese Orthographic Agreement", "Brazilian Presidency", "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm"],
  ["Portuguese Orthographic Agreement", "Portal da Língua Portuguesa", "https://www.portaldalinguaportuguesa.org/acordo.php"],
  ["IANA Language Subtag Registry", "Internet Assigned Numbers Authority", "https://www.iana.org/assignments/language-subtag-registry"],
  ["Common Locale Data Repository and Locale Data Markup Language", "Unicode Consortium", "https://www.unicode.org/reports/tr35/"],
  ["Managing Multi-Regional and Multilingual Sites", "Google Search Central", "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites"],
  ["Localized Versions and hreflang", "Google Search Central", "https://developers.google.com/search/docs/specialty/international/localized-versions"],
  ["RDC No. 751/2022", "ANVISA", "https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&numeroAto=00000751&orgao=RDC%2FDC%2FANVISA%2FMS&tipo=RDC&valorAno=2022"],
  ["Manual for Registration of Healthcare Materials", "ANVISA", "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/produtos-para-a-saude/manuais/manual-para-registro-de-materiais-de-uso-em-saude.pdf"],
  ["Acquisition and Use of Medical Devices and In Vitro Diagnostic Devices", "INFARMED", "https://www.infarmed.pt/web/infarmed/aquisicao-e-utilizacao-de-dm-e-div"],
  ["From Brazilian Portuguese to European Portuguese", "Sanches, Ribeiro, and Coheur", "https://arxiv.org/abs/2408.07457"],
];

const styles = `
  .stepes-guide, .stepes-guide * { box-sizing: border-box; }
  .stepes-guide {
    --magenta: #C11D63;
    --magenta-dark: #9F1D55;
    --magenta-deep: #7A1542;
    --blush: #FDF2F7;
    --blush-strong: #F8E3ED;
    --ink: #211C24;
    --ink-soft: #4F4852;
    --muted: #716A73;
    --line: #E5E0E5;
    --line-dark: rgba(255,255,255,.16);
    --paper: #FFFFFF;
    --soft: #F7F5F7;
    --dark: #19151D;
    --radius: 22px;
    --shadow: 0 18px 50px rgba(35, 19, 29, .08);
    color: var(--ink);
    background: var(--paper);
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    line-height: 1.68;
    overflow-x: clip;
  }
  .stepes-guide a { color: inherit; }
  .stepes-guide a:focus-visible,
  .stepes-guide summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 4px; border-radius: 8px; }
  .guide-shell { width: min(1280px, 100%); margin: 0 auto; padding-inline: 56px; }
  .reading-width { width: min(760px, 100%); }
  .eyebrow {
    display: inline-block;
    margin: 0 0 18px;
    color: var(--magenta-dark);
    font-size: 11px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .eyebrow-on-dark { color: #F2A7C6; }
  .hero {
    padding: 92px 0 82px;
    background:
      radial-gradient(circle at 50% -80px, rgba(193,29,99,.07), transparent 360px),
      #fff;
    border-bottom: 1px solid var(--line);
  }
  .hero-article {
    width: min(920px, 100%);
    margin: 0;
    text-align: left;
  }
  .hero h1 {
    max-width: 900px;
    margin: 18px 0 0;
    font-size: 56px;
    line-height: 1.08;
    letter-spacing: -.038em;
    font-weight: 600;
  }
  .hero-deck {
    max-width: 820px;
    margin: 24px 0 0;
    color: var(--ink-soft);
    font-size: 20px;
    line-height: 1.64;
  }
  .hero-deck + .hero-deck { margin-top: 12px; }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0;
    margin-top: 26px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.4;
  }
  .hero-meta span { display: inline-flex; align-items: center; }
  .hero-meta span + span::before { content: ""; width: 4px; height: 4px; margin: 0 12px; border-radius: 50%; background: #B5AEB6; }
  .hero-jumps {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px 28px;
    margin-top: 30px;
  }
  .hero-jump {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--magenta-dark);
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid rgba(159,29,85,.35);
    padding-bottom: 3px;
  }
  .hero-jump:hover { color: var(--magenta); border-bottom-color: var(--magenta); }
  .button {
    min-height: 52px;
    padding: 13px 20px;
    border: 1px solid transparent;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 600;
    text-decoration: none;
    transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease;
  }
  .button:hover { transform: translateY(-1px); }
  .stepes-guide a.button-primary, .stepes-guide a.button-primary:hover, .stepes-guide a.button-primary:focus-visible { background: var(--magenta); color: #fff; }
  .stepes-guide a.button-primary:hover { background: var(--magenta-dark); color: #fff; }
  .button-secondary { background: #fff; color: var(--ink); border-color: #D8D2D8; }
  .button-secondary:hover { border-color: var(--magenta); color: var(--magenta-dark); }
  .summary-band { padding: 80px 0; background: var(--blush); border-bottom: 1px solid #F1DDE6; }
  .summary-grid { display: grid; grid-template-columns: 280px minmax(0, 1fr); gap: 72px; align-items: start; }
  .summary-grid h2 { margin: 0; font-size: 32px; line-height: 1.14; letter-spacing: -.025em; font-weight: 600; }
  .summary-intro { margin: 18px 0 0; color: var(--ink-soft); font-size: 16px; line-height: 1.6; }
  .takeaway-list { border-top: 1px solid rgba(122,21,66,.2); }
  .takeaway { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 18px; padding: 20px 0; border-bottom: 1px solid rgba(122,21,66,.15); }
  .takeaway-number { color: var(--magenta-dark); font-size: 14px; line-height: 1.5; font-weight: 600; }
  .takeaway strong { display: block; font-size: 17px; line-height: 1.45; font-weight: 600; }
  .takeaway p { margin: 5px 0 0; color: var(--ink-soft); font-size: 16px; line-height: 1.62; }
  .article-region { padding: 96px 0 104px; }
  .article-layout { width: 100%; margin: 0 auto; display: grid; grid-template-columns: 240px minmax(0, 880px); gap: 48px; align-items: start; }
  .toc-rail { position: sticky; top: 104px; max-height: calc(100vh - 128px); overflow: auto; padding-right: 16px; }
  .toc-title { margin: 0 0 16px; color: var(--ink); font-size: 16px; line-height: 1.3; font-weight: 600; }
  .toc-list { margin: 0; padding: 0; list-style: none; border-left: 1px solid var(--line); }
  .toc-list li { margin: 0; }
  .toc-list a { display: block; padding: 8px 0 8px 17px; color: var(--muted); text-decoration: none; font-size: 15px; line-height: 1.38; border-left: 2px solid transparent; margin-left: -1px; }
  .toc-list a:hover { color: var(--magenta-dark); border-left-color: var(--magenta); }
  .toc-mobile { display: none; margin-bottom: 34px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
  .toc-mobile summary { min-height: 52px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; font-size: 16px; font-weight: 600; }
  .toc-mobile summary::-webkit-details-marker { display: none; }
  .toc-mobile summary::after { content: "+"; color: var(--magenta-dark); font-size: 22px; font-weight: 400; }
  .toc-mobile[open] summary::after { content: "−"; }
  .toc-mobile .toc-list { margin: 0 18px 16px; }
  .toc-mobile .toc-list a { padding-block: 10px; font-size: 16px; line-height: 1.45; overflow-wrap: anywhere; }
  .article-content { min-width: 0; width: 100%; max-width: 880px; }
  .article-section { scroll-margin-top: 120px; padding: 0 0 86px; }
  .article-section + .article-section { padding-top: 6px; }
  .article-section:last-child { padding-bottom: 0; }
  .article-section h2 { max-width: 760px; margin: 0 0 24px; font-size: 36px; line-height: 1.18; letter-spacing: -.028em; font-weight: 600; }
  .article-section h3 { max-width: 760px; margin: 42px 0 14px; font-size: 24px; line-height: 1.28; letter-spacing: -.015em; font-weight: 600; }
  .article-section > p { max-width: 760px; margin: 0 0 20px; }
  .article-section > p:last-child { margin-bottom: 0; }
  .article-section > p:first-of-type { font-size: 19px; line-height: 1.68; color: var(--ink-soft); }
  .article-section > .eyebrow { display: inline-block; }
  .article-section > ul:not(.checklist):not(.toc-list) { max-width: 760px; margin: 18px 0 24px; padding-left: 1.3em; }
  .article-section li { margin: 8px 0; }
  .article-section a:not(.button) { color: var(--magenta-dark); text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .article-section a:not(.button):hover { color: var(--magenta); }
  .no-break { white-space: nowrap; }
  .inline-code { padding: .08em .34em; border-radius: 5px; background: #F2EFF2; color: #4D3140; font-family: "SFMono-Regular", Consolas, monospace; font-size: .88em; }
  .lead-callout { margin: 30px 0; padding: 24px 26px; border-left: 3px solid var(--magenta); background: var(--blush); }
  .lead-callout strong { display: block; margin-bottom: 5px; font-size: 17px; }
  .lead-callout p { margin: 0; color: var(--ink-soft); font-size: 16px !important; line-height: 1.62; }
  .breakout { width: 100%; margin-left: 0; }
  .table-wrap { margin: 30px 0; overflow: hidden; border: 1px solid var(--line); border-radius: 20px; background: #fff; }
  .data-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .data-table caption { position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; }
  .data-table th { padding: 17px 19px; background: #F6F3F5; color: var(--ink); text-align: left; font-size: 16px; line-height: 1.35; font-weight: 600; vertical-align: bottom; }
  .data-table td { padding: 17px 19px; border-top: 1px solid var(--line); color: var(--ink-soft); font-size: 16px; line-height: 1.52; vertical-align: top; overflow-wrap: anywhere; }
  .cell-value { min-width: 0; }
  .data-table td:first-child { color: var(--ink); font-weight: 600; }
  .data-table tbody tr:nth-child(even) td { background: #FCFBFC; }
  .data-table.compact th, .data-table.compact td { padding-top: 14px; padding-bottom: 14px; }
  .pair-examples { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 28px 0; }
  .pair-example { padding: 24px; border: 1px solid var(--line); border-radius: 18px; background: #fff; }
  .pair-label { color: var(--magenta-dark); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
  .pair-example p { margin: 12px 0 0; font-size: 17px !important; color: var(--ink); }
  .feature-panel { margin: 30px 0; padding: 34px; border: 1px solid var(--line); border-radius: 22px; background: linear-gradient(145deg, #FAF8FA, #fff); }
  .feature-panel-grid { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 42px; align-items: start; }
  .sound-visual { min-height: 250px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 18px; background: var(--blush); overflow: hidden; }
  .sound-bar { width: 5px; border-radius: 99px; background: var(--magenta); opacity: .72; }
  .sound-bar:nth-child(1), .sound-bar:nth-child(11) { height: 36px; }
  .sound-bar:nth-child(2), .sound-bar:nth-child(10) { height: 74px; }
  .sound-bar:nth-child(3), .sound-bar:nth-child(9) { height: 112px; }
  .sound-bar:nth-child(4), .sound-bar:nth-child(8) { height: 58px; }
  .sound-bar:nth-child(5), .sound-bar:nth-child(7) { height: 138px; }
  .sound-bar:nth-child(6) { height: 92px; }
  .soft-panel { margin: 32px 0; padding: 30px; border-radius: 20px; background: var(--soft); }
  .soft-panel h3 { margin-top: 0; }
  .code-panel { margin: 26px 0; padding: 24px; border-radius: 16px; background: #171419; color: #F8EFF4; overflow-x: auto; }
  .code-panel code { font-family: "SFMono-Regular", Consolas, monospace; font-size: 15px; line-height: 1.7; white-space: pre; }
  .industry-list { margin: 32px 0; border-top: 1px solid var(--line); }
  .industry-row { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 34px; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .industry-row h3 { margin: 0; font-size: 20px; }
  .industry-row p { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }
  .decision-table td:nth-child(2) { color: var(--magenta-dark); font-weight: 600; }
  .dark-workflow { margin: 34px 0; padding: 48px; border-radius: 26px; background: var(--dark); color: #F7F2F5; box-shadow: var(--shadow); }
  .dark-workflow h3 { margin: 0 0 12px; color: #fff; font-size: 30px; }
  .dark-workflow > p { color: #CFC7CE; font-size: 17px !important; }
  .workflow-list { margin: 34px 0 0; padding: 0; list-style: none; counter-reset: workflow; }
  .workflow-step { position: relative; display: grid; grid-template-columns: 56px minmax(0, 1fr); gap: 22px; padding: 0 0 26px; counter-increment: workflow; }
  .workflow-step:last-child { padding-bottom: 0; }
  .workflow-step::before { content: counter(workflow, decimal-leading-zero); width: 46px; height: 46px; display: grid; place-items: center; border: 1px solid rgba(242,167,198,.5); border-radius: 50%; color: #F2A7C6; font-size: 13px; font-weight: 600; }
  .workflow-step:not(:last-child)::after { content: ""; position: absolute; left: 22px; top: 48px; bottom: 0; width: 1px; background: rgba(242,167,198,.26); }
  .workflow-step h4 { margin: 0; color: #fff; font-size: 18px; line-height: 1.4; font-weight: 600; }
  .workflow-step p { margin: 5px 0 0; color: #CFC7CE; font-size: 16px !important; line-height: 1.62; }
  .checklist-intro { display: flex; align-items: flex-end; justify-content: space-between; gap: 30px; margin-bottom: 28px; }
  .checklist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; border-top: 1px solid var(--line); }
  .checklist-group { padding: 28px 0; border-bottom: 1px solid var(--line); break-inside: avoid; }
  .checklist-group h3 { margin: 0 0 16px; font-size: 21px; }
  .checklist { margin: 0; padding: 0; list-style: none; }
  .checklist li { position: relative; margin: 0 0 12px; padding-left: 31px; color: var(--ink-soft); font-size: 16px; line-height: 1.58; }
  .checklist li:last-child { margin-bottom: 0; }
  .checklist li::before { content: ""; position: absolute; left: 0; top: .3em; width: 18px; height: 18px; border: 1.5px solid #BCAFB7; border-radius: 4px; background: #fff; }
  .mistake-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 46px; margin-top: 28px; border-top: 1px solid var(--line); }
  .mistake { padding: 24px 0; border-bottom: 1px solid var(--line); }
  .mistake h3 { margin: 0 0 8px; font-size: 19px; }
  .mistake p { margin: 0; color: var(--ink-soft); font-size: 16px !important; line-height: 1.62; }
  .faq-panel { max-width: 760px; margin-top: 30px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item:last-child { border-bottom: 0; }
  .faq-item summary { min-height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 18px 0; cursor: pointer; list-style: none; font-size: 18px; line-height: 1.42; font-weight: 600; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::after { content: "+"; flex: 0 0 auto; color: var(--magenta-dark); font-size: 26px; line-height: 1; font-weight: 300; }
  .faq-item[open] summary::after { content: "−"; }
  .faq-answer { padding: 0 48px 22px 0; color: var(--ink-soft); font-size: 16px; line-height: 1.68; }
  .sources-section { padding: 88px 0 0; }
  .sources-section h2 { margin: 0 0 22px; font-size: 30px; }
  .source-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
  .source-item { display: grid; grid-template-columns: minmax(0, 1fr) 190px; gap: 30px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .source-item a { color: var(--ink); font-size: 16px; line-height: 1.48; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .source-item a:hover { color: var(--magenta-dark); }
  .source-org { color: var(--muted); font-size: 15px; line-height: 1.48; text-align: right; }
  .related-section { padding: 92px 0; background: #FAF9FA; border-top: 1px solid var(--line); }
  .related-heading { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 70px; align-items: end; margin-bottom: 40px; }
  .related-heading h2 { margin: 0; font-size: 36px; line-height: 1.18; letter-spacing: -.028em; }
  .related-heading p { max-width: 650px; margin: 0; color: var(--ink-soft); font-size: 17px; }
  .related-all-link { display: inline-block; margin-top: 10px; color: var(--magenta-dark); font-size: 16px; font-weight: 600; text-underline-offset: 3px; }
  .related-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 44px; border-top: 1px solid var(--line); }
  .related-item { padding: 26px 0 28px; border-bottom: 1px solid var(--line); }
  .related-item a { display: inline-flex; align-items: baseline; gap: 8px; color: var(--ink); font-size: 19px; line-height: 1.4; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .related-item a::after { content: "→"; color: var(--magenta); }
  .related-item a:hover { color: var(--magenta-dark); }
  .related-item p { margin: 10px 0 0; color: var(--ink-soft); font-size: 16px; line-height: 1.62; }
  .final-cta { padding: 96px 0; background: #fff; }
  .cta-panel { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 64px; align-items: center; padding: 58px 64px; border: 1px solid #ECD9E2; border-radius: 28px; background: linear-gradient(135deg, var(--blush) 0%, #fff 100%); }
  .cta-panel h2 { max-width: 720px; margin: 0; font-size: 38px; line-height: 1.16; letter-spacing: -.028em; font-weight: 600; }
  .cta-panel p { max-width: 760px; margin: 20px 0 0; color: var(--ink-soft); font-size: 18px; line-height: 1.65; }
  .cta-actions { display: flex; flex-direction: column; gap: 12px; min-width: 290px; }
  .sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }

  @media (max-width: 1180px) {
    .guide-shell { padding-inline: 40px; }
    .article-layout { grid-template-columns: 220px minmax(0, 1fr); gap: 44px; }
    .article-content { max-width: none; }
    .breakout { width: 100%; margin-left: 0; }
  }
  @media (max-width: 1024px) {
    .guide-shell { padding-inline: 24px; }
    .hero { padding: 88px 0 80px; }
    .hero-article { width: min(900px, 100%); }
    .summary-grid { grid-template-columns: 240px minmax(0, 1fr); gap: 46px; }
    .article-region { padding-top: 80px; }
    .article-layout { display: block; width: min(820px, 100%); }
    .toc-rail { display: none; }
    .toc-mobile { display: block; }
    .article-content { width: min(820px, 100%); max-width: none; margin: 0 auto; }
    .breakout { width: 100%; margin-left: 0; }
    .related-heading { grid-template-columns: 1fr; gap: 16px; }
    .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cta-panel { grid-template-columns: 1fr; gap: 34px; }
    .cta-actions { flex-direction: row; flex-wrap: wrap; min-width: 0; }
  }
  @media (max-width: 820px) {
    .table-wrap { border-radius: 16px; }
    .data-table, .data-table thead, .data-table tbody, .data-table tr, .data-table th, .data-table td { display: block; width: 100%; }
    .data-table thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }
    .data-table tbody tr { padding: 0; border-top: 1px solid var(--line); }
    .data-table tbody tr:first-child { border-top: 0; }
    .data-table tbody tr:nth-child(even) td { background: #fff; }
    .data-table td { display: grid; grid-template-columns: minmax(132px, 34%) minmax(0, 1fr); gap: 16px; padding: 14px 18px; border-top: 1px solid #EFEAEF; }
    .data-table td:first-child { display: block; padding: 17px 18px; border-top: 0; background: #F6F3F5 !important; color: var(--ink); }
    .data-table td:not(:first-child)::before { content: attr(data-label); color: var(--muted); font-size: 16px; line-height: 1.35; font-weight: 600; }
    .data-table td .cell-value { display: block; min-width: 0; }
  }
  @media (max-width: 768px) {
    .stepes-guide { font-size: 17px; line-height: 1.68; }
    .hero { padding: 74px 0 68px; }
    .hero h1 { font-size: 44px; }
    .hero-deck { font-size: 18px; }
    .summary-band { padding: 68px 0; }
    .summary-grid { grid-template-columns: 1fr; gap: 32px; }
    .summary-grid h2 { font-size: 30px; }
    .article-region { padding: 72px 0 84px; }
    .article-section { padding-bottom: 72px; }
    .article-section h2 { font-size: 32px; }
    .article-section h3 { font-size: 22px; }
    .pair-examples { grid-template-columns: 1fr; }
    .feature-panel { padding: 26px; }
    .feature-panel-grid { grid-template-columns: 1fr; }
    .industry-row { grid-template-columns: 1fr; gap: 10px; }
    .dark-workflow { padding: 36px 28px; }
    .checklist-grid, .mistake-list { grid-template-columns: 1fr; }
    .source-item { grid-template-columns: 1fr; gap: 5px; }
    .source-org { text-align: left; }
    .related-section { padding: 72px 0; }
    .related-heading h2 { font-size: 32px; }
    .final-cta { padding: 72px 0; }
    .cta-panel { padding: 44px 38px; }
    .cta-panel h2 { font-size: 34px; }
  }
  @media (max-width: 640px) {
    .guide-shell { padding-inline: 20px; }
    .hero { padding: 62px 0 58px; }
    .hero-article { margin-inline: auto; text-align: center; }
    .hero h1 { margin-inline: auto; font-size: 38px; line-height: 1.1; }
    .hero-deck { margin-inline: auto; }
    .hero-meta, .hero-jumps { justify-content: center; }
    .hero-jumps { flex-direction: column; align-items: center; gap: 14px; margin-top: 26px; }
    .hero-meta { gap: 8px 0; }
    .hero-meta span { flex-basis: 100%; }
    .hero-meta span + span::before { display: none; }
    .summary-band { padding: 64px 0; }
    .takeaway { grid-template-columns: 30px minmax(0, 1fr); gap: 12px; }
    .article-region { padding: 64px 0 76px; }
    .article-section { padding-bottom: 64px; }
    .article-section h2 { font-size: 30px; }
    .article-section h3 { margin-top: 36px; font-size: 20px; }
    .article-section > p:first-of-type { font-size: 18px; }
    .lead-callout, .soft-panel { padding: 22px; }
    .feature-panel { padding: 20px; }
    .sound-visual { min-height: 200px; }
    .industry-row { padding: 22px 0; }
    .code-panel { margin-inline: 0; padding: 18px; }
    .dark-workflow { padding: 32px 22px; border-radius: 20px; }
    .dark-workflow h3 { font-size: 26px; }
    .workflow-step { grid-template-columns: 48px minmax(0, 1fr); gap: 15px; }
    .workflow-step::before { width: 40px; height: 40px; }
    .workflow-step:not(:last-child)::after { left: 19px; top: 42px; }
    .checklist-intro { display: block; }
    .faq-item summary { min-height: 64px; font-size: 17px; }
    .faq-answer { padding-right: 0; }
    .sources-section { padding-top: 72px; }
    .related-grid { grid-template-columns: 1fr; }
    .cta-panel { padding: 38px 24px; border-radius: 22px; }
    .cta-panel h2 { font-size: 30px; }
    .cta-panel p { font-size: 17px; }
    .cta-actions { flex-direction: column; }
    .cta-actions .button { width: 100%; white-space: normal; text-align: center; }
  }
  @media (max-width: 420px) {
    .guide-shell { padding-inline: 18px; }
    .hero h1 { font-size: 34px; }
    .hero-deck { font-size: 17px; }
    .hero-jump { font-size: 16px; }
    .data-table td { grid-template-columns: 1fr; gap: 6px; }
    .data-table td:not(:first-child)::before { margin-bottom: 2px; }
    .feature-panel, .lead-callout, .soft-panel { padding-inline: 20px; }
    .workflow-step { grid-template-columns: 42px minmax(0, 1fr); gap: 12px; }
    .workflow-step::before { width: 36px; height: 36px; }
    .workflow-step:not(:last-child)::after { left: 17px; top: 38px; }
  }
`;

function DataTable({ caption, headers, rows, className = "" }) {
  return (
    <div className={`table-wrap ${className}`.trim()}>
      <table className="data-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => <th key={header} scope="col">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${caption}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${caption}-${rowIndex}-${cellIndex}`} data-label={headers[cellIndex]}><span className="cell-value">{cell}</span></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TocList() {
  return (
    <ul className="toc-list">
      {tocItems.map(([id, label]) => (
        <li key={id}><a href={sectionUrl(id)}>{label}</a></li>
      ))}
    </ul>
  );
}

export default function BrazilianPortugueseVsEuropeanPortugueseGuide() {
  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="hero" aria-labelledby="guide-title">
        <div className="guide-shell">
          <div className="hero-article">
            <span className="eyebrow">Localization Guide</span>
            <h1 id="guide-title">Brazilian Portuguese vs. European Portuguese: <span className="no-break">pt-BR</span> vs. <span className="no-break">pt-PT</span></h1>
            <p className="hero-deck">Brazilian Portuguese and European Portuguese are varieties of the same language, but they are not interchangeable in every business setting. They differ in vocabulary, grammar, tone, pronunciation, spelling, regulatory terminology, and the locale conventions used in websites, software, forms, payments, addresses, and multimedia.</p>
            <p className="hero-deck">Use this guide to determine whether your content should use Brazilian Portuguese, European Portuguese, or separate versions for both markets.</p>
            <div className="hero-meta" aria-label="Guide information">
              <span>Decision Guide</span>
              <span>24-minute read</span>
            </div>
            <nav className="hero-jumps" aria-label="Guide shortcuts">
              <a className="hero-jump" href={sectionUrl("brazilian-portuguese-and-european-portuguese-at-a-glance")}>Compare the Locales <span aria-hidden="true">↓</span></a>
              <a className="hero-jump" href={sectionUrl("which-portuguese-locale-does-your-organization-need")}>View the Decision Matrix <span aria-hidden="true">↓</span></a>
            </nav>
          </div>
        </div>
      </section>

      <section className="summary-band" aria-labelledby="key-takeaways-title">
        <div className="guide-shell summary-grid">
          <div>
            <span className="eyebrow">Executive Summary</span>
            <h2 id="key-takeaways-title">Key Takeaways</h2>
            <p className="summary-intro">The right locale decision protects clarity, usability, search visibility, regulatory fit, and brand credibility.</p>
          </div>
          <div className="takeaway-list">
            {takeaways.map((item, index) => (
              <div className="takeaway" key={item.title}>
                <div className="takeaway-number">0{index + 1}</div>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="article-region">
        <div className="guide-shell">
          <details className="toc-mobile">
            <summary>In This Guide</summary>
            <TocList />
          </details>

          <div className="article-layout">
            <aside className="toc-rail" aria-label="In this guide">
              <p className="toc-title">In This Guide</p>
              <TocList />
            </aside>

            <article className="article-content">
              <section className="article-section" id="brazilian-portuguese-and-european-portuguese-at-a-glance">
                <h2>Brazilian Portuguese and European Portuguese at a Glance</h2>
                <p>The language code <code className="inline-code">pt</code> identifies Portuguese. The regional tags <code className="inline-code">pt-BR</code> and <code className="inline-code">pt-PT</code> distinguish content intended for Brazil and Portugal. These locale identifiers help content systems, software platforms, search engines, and localization teams manage the correct regional version.</p>
                <div className="breakout">
                  <DataTable caption="Brazilian Portuguese and European Portuguese comparison" headers={["Comparison Area", "Brazilian Portuguese", "European Portuguese"]} rows={comparisonRows} />
                </div>
                <p>The comparison does not mean every sentence must be entirely different. Many terms and structures are shared. The practical question is whether the content is sufficiently important, visible, technical, or market-specific to require a version that feels native to its intended audience.</p>
                <p>For market-specific production support, explore Stepes’ <a href="https://www.stepes.com/portuguese-translation-services/">Portuguese Translation Services</a> for Brazilian Portuguese, European Portuguese, and multilingual content programs.</p>
              </section>

              <section className="article-section" id="are-brazilian-and-european-portuguese-the-same-language">
                <h2>Are Brazilian and European Portuguese the Same Language?</h2>
                <p>Yes. Brazilian Portuguese and European Portuguese are established varieties of Portuguese. They share core grammar, much of their vocabulary, and a common written tradition.</p>
                <p>They are also <strong>pluricentric</strong>: Portuguese has more than one recognized center of linguistic usage. Brazil and Portugal each maintain established conventions for education, publishing, media, government, and professional communication.</p>

                <h3>Mutual Understanding Does Not Equal Market Fit</h3>
                <p>A Brazilian reader may understand a Portuguese website that uses words such as <code className="inline-code">telemóvel</code>, <code className="inline-code">ficheiro</code>, and <code className="inline-code">utilizador</code>. A Portuguese reader may understand Brazilian content that uses <code className="inline-code">celular</code>, <code className="inline-code">arquivo</code>, and <code className="inline-code">usuário</code>. In both cases, the regional origin is immediately visible.</p>
                <p>That difference matters when the content must:</p>
                <ul>
                  <li>build trust with customers;</li>
                  <li>explain a product or service clearly;</li>
                  <li>guide users through a software interface;</li>
                  <li>support a medical or technical decision;</li>
                  <li>comply with local requirements;</li>
                  <li>rank for local search behavior;</li>
                  <li>deliver a natural voice or video experience;</li>
                  <li>maintain a consistent brand across channels.</li>
                </ul>
                <p>Written content is often easier to understand across the two markets than fast spoken content. Pronunciation, vowel reduction, speech rhythm, and regional accents can make audio more challenging than text for audiences unfamiliar with the other variety.</p>

                <h3>When One Version May Be Sufficient</h3>
                <p>A single Portuguese version may sometimes be acceptable for:</p>
                <ul>
                  <li>limited internal communication;</li>
                  <li>low-risk reference content;</li>
                  <li>material used by bilingual or highly specialized teams;</li>
                  <li>temporary working documents;</li>
                  <li>content whose audience has explicitly accepted one regional standard.</li>
                </ul>
                <p>Even in these cases, the target audience should be confirmed. “Portuguese” should not be treated as a complete localization requirement when the market is known.</p>

                <h3>When Separate Versions Are Recommended</h3>
                <p>Separate pt-BR and pt-PT versions are usually appropriate for:</p>
                <ul>
                  <li>public websites and landing pages;</li>
                  <li>software, apps, and digital products;</li>
                  <li>e-commerce and customer journeys;</li>
                  <li>advertising and marketing campaigns;</li>
                  <li>patient, consumer, or user-facing content;</li>
                  <li>medical devices, pharmaceuticals, and regulated materials;</li>
                  <li>legal agreements and official submissions;</li>
                  <li>technical manuals and safety instructions;</li>
                  <li>customer support and knowledge bases;</li>
                  <li>voice-over, dubbing, training, and conversational AI.</li>
                </ul>
              </section>

              <section className="article-section" id="vocabulary-differences-that-affect-business-content">
                <h2>Vocabulary Differences That Affect Business Content</h2>
                <p>Vocabulary is the most visible difference between pt-BR and pt-PT. Some words differ completely; others exist in both markets but carry different levels of frequency, formality, or meaning.</p>
                <div className="breakout">
                  <DataTable caption="Vocabulary differences between Brazilian and European Portuguese" headers={["English Concept", "Brazilian Portuguese", "European Portuguese"]} rows={vocabularyRows} />
                </div>
                <p>These examples are useful indicators, not automatic replacement rules. The right term depends on industry, context, product, audience, and level of formality.</p>
                <p>For example, <code className="inline-code">pedido</code> can be correct in both markets, but an e-commerce workflow in Portugal may prefer <code className="inline-code">encomenda</code>. <code className="inline-code">Aplicação</code> can appear in Brazil, but a consumer mobile product is more likely to use <code className="inline-code">aplicativo</code> or <code className="inline-code">app</code>. A terminology decision should therefore be based on the complete user experience rather than a bilingual word list.</p>

                <h3>Why Vocabulary Differences Matter</h3>
                <p>A mismatched term can:</p>
                <ul>
                  <li>make a product feel imported rather than designed for the market;</li>
                  <li>reduce comprehension in a short interface string;</li>
                  <li>conflict with terminology used in documentation or customer support;</li>
                  <li>weaken search visibility for region-specific queries;</li>
                  <li>introduce ambiguity into technical, medical, legal, or financial content;</li>
                  <li>create inconsistent language when multiple teams or providers are involved.</li>
                </ul>
                <p>For recurring programs, organizations should maintain separate pt-BR and pt-PT entries in their <a href="https://www.stepes.com/terminology-management/">terminology management resources</a>.</p>
              </section>

              <section className="article-section" id="grammar-syntax-tone-and-forms-of-address">
                <h2>Grammar, Syntax, Tone, and Forms of Address</h2>
                <p>Replacing a few regional words is not enough to convert Brazilian Portuguese into European Portuguese. Natural language also depends on sentence structure, pronoun placement, verb constructions, rhythm, and the way the reader is addressed.</p>

                <h3>Progressive Actions</h3>
                <p>Brazilian Portuguese commonly uses <strong>estar + gerund</strong>, while European Portuguese commonly uses <strong>estar a + infinitive</strong>. Both patterns are grammatical within Portuguese, but they signal different regional norms.</p>
                <div className="pair-examples">
                  <div className="pair-example"><div className="pair-label">Brazilian Portuguese</div><p><code className="inline-code">Estamos atualizando sua conta.</code><br /><code className="inline-code">O sistema está processando o pagamento.</code></p></div>
                  <div className="pair-example"><div className="pair-label">European Portuguese</div><p><code className="inline-code">Estamos a atualizar a sua conta.</code><br /><code className="inline-code">O sistema está a processar o pagamento.</code></p></div>
                </div>

                <h3>Object Pronoun Placement</h3>
                <p>Pronoun placement is another noticeable difference. Brazilian Portuguese commonly favors structures such as <code className="inline-code">Entre em contato conosco.</code>, <code className="inline-code">Me envie os documentos.</code> in everyday speech, and <code className="inline-code">Envie-nos os documentos.</code> in formal or neutral writing.</p>
                <p>European Portuguese more frequently uses enclitic structures such as <code className="inline-code">Contacte-nos.</code>, <code className="inline-code">Envie-me os documentos.</code>, and <code className="inline-code">Consulte-o antes de continuar.</code></p>
                <p>The best wording is not always a literal grammatical counterpart. A skilled localization team may restructure a sentence to make it concise, natural, and appropriate for the interface or content type.</p>

                <h3>Forms of Address</h3>
                <p>The use of <code className="inline-code">você</code>, <code className="inline-code">tu</code>, <code className="inline-code">o senhor</code>, <code className="inline-code">a senhora</code>, and neutral constructions varies by market, region, audience, and brand.</p>
                <p>In Brazil, <code className="inline-code">você</code> is widely used, although usage differs by region and context. In Portugal, <code className="inline-code">tu</code> may be appropriate in informal communication, while <code className="inline-code">você</code> can sound marked, distant, or inappropriate in some situations. Many Portuguese brands avoid the issue by using an imperative, an omitted subject, or another neutral construction.</p>
                <p>A style guide should define:</p>
                <ul>
                  <li>formal versus informal tone;</li>
                  <li>singular and plural address;</li>
                  <li>preferred pronouns;</li>
                  <li>use of possessives;</li>
                  <li>imperative style;</li>
                  <li>capitalization;</li>
                  <li>punctuation;</li>
                  <li>inclusive language;</li>
                  <li>terminology for users, customers, patients, professionals, and administrators.</li>
                </ul>

                <h3>Illustrative Business Examples</h3>
                <div className="breakout">
                  <DataTable caption="Illustrative Brazilian and European Portuguese business examples" headers={["English", "Brazilian Portuguese", "European Portuguese"]} rows={businessExampleRows} />
                </div>
                <p>These examples illustrate market differences. Final wording should always be validated in context.</p>
              </section>

              <section className="article-section" id="pronunciation-voice-over-and-speech-technology">
                <h2>Pronunciation, Voice-Over, and Speech Technology</h2>
                <p>Pronunciation is one of the most immediately recognizable differences between Brazilian and European Portuguese.</p>
                <div className="feature-panel breakout">
                  <div className="feature-panel-grid">
                    <div className="sound-visual" aria-hidden="true">
                      {Array.from({ length: 11 }).map((_, index) => <span className="sound-bar" key={index} />)}
                    </div>
                    <div>
                      <p>European Portuguese generally uses stronger reduction of unstressed vowels, which can make speech sound more compressed to listeners accustomed to Brazilian Portuguese. Brazilian Portuguese often preserves more audible vowel distinctions and has different regional patterns for sounds such as <code className="inline-code">r</code>, <code className="inline-code">s</code>, <code className="inline-code">d</code>, and <code className="inline-code">t</code>. Both countries also contain substantial internal accent variation.</p>
                      <div className="lead-callout"><strong>Use the voice your market expects.</strong><p>A Brazilian voice used for a Portugal launch—or a European Portuguese voice used for Brazil—may be understandable while still feeling out of place.</p></div>
                    </div>
                  </div>
                </div>

                <h3>Use Market-Specific Voice Talent</h3>
                <p>For public-facing audio, select voice talent from the target market. This applies to:</p>
                <ul>
                  <li>commercials and brand videos;</li>
                  <li>eLearning and training;</li>
                  <li>product demos;</li>
                  <li>medical or patient education;</li>
                  <li>technical instructions;</li>
                  <li>interactive voice response systems;</li>
                  <li>virtual assistants;</li>
                  <li>audiobooks and podcasts;</li>
                  <li>dubbing and lip-synchronization;</li>
                  <li>AI-generated speech.</li>
                </ul>

                <h3>Localize the Script for Speech</h3>
                <p>A translated script should be adapted for spoken delivery rather than read as written prose. The process should consider:</p>
                <ul>
                  <li>regional vocabulary;</li>
                  <li>sentence length;</li>
                  <li>natural contractions;</li>
                  <li>pronunciation of names and acronyms;</li>
                  <li>numbers, dates, units, and currencies;</li>
                  <li>timing and synchronization;</li>
                  <li>tone and level of formality;</li>
                  <li>audience age and professional background.</li>
                </ul>
                <p>For high-visibility productions, use a market-specific pronunciation guide and approve a voice sample before full recording.</p>

                <h3>Test Speech Technology by Locale</h3>
                <p>Automatic speech recognition, text-to-speech, conversational AI, and voice analytics should be evaluated separately for pt-BR and pt-PT. A model labeled only “Portuguese” may have uneven training data or performance across varieties.</p>
                <p>Testing should include:</p>
                <ul>
                  <li>regional speakers;</li>
                  <li>natural speaking speeds;</li>
                  <li>domain terminology;</li>
                  <li>numbers and proper names;</li>
                  <li>background noise and device conditions;</li>
                  <li>scripted and spontaneous speech;</li>
                  <li>accessibility and comprehension;</li>
                  <li>escalation when confidence is low.</li>
                </ul>
                <p>Explore <a href="https://www.stepes.com/voice-over-services/">multilingual voice-over services</a> for market-specific spoken content.</p>
              </section>

              <section className="article-section" id="spelling-and-the-portuguese-orthographic-agreement">
                <h2>Spelling and the Portuguese Orthographic Agreement</h2>
                <p>The Portuguese Orthographic Agreement of 1990 was designed to reduce differences among national spelling standards. Brazil implemented the agreement through Decree No. 6,583 of 2008, and Portugal introduced the agreement through its own legal and institutional process.</p>
                <p>The agreement harmonized many spellings, but it did <strong>not</strong> eliminate differences between Brazilian and European Portuguese. Variations remain where pronunciation, accepted forms, vocabulary, and national usage differ.</p>
                <div className="breakout">
                  <DataTable caption="Regional spelling differences under the Portuguese Orthographic Agreement" headers={["Brazilian Portuguese", "European Portuguese", "Notes"]} rows={spellingRows} />
                </div>
                <p>Some words now share the same spelling across both markets, while others continue to have accepted regional forms.</p>

                <h3>What the Agreement Does Not Standardize</h3>
                <p>The Orthographic Agreement does not standardize:</p>
                <ul>
                  <li>vocabulary;</li>
                  <li>grammar and syntax;</li>
                  <li>pronoun usage;</li>
                  <li>sentence rhythm;</li>
                  <li>forms of address;</li>
                  <li>institutional terminology;</li>
                  <li>local legal or regulatory language;</li>
                  <li>currency and number formats;</li>
                  <li>address structures;</li>
                  <li>search behavior;</li>
                  <li>pronunciation;</li>
                  <li>voice talent;</li>
                  <li>software locale behavior.</li>
                </ul>
                <p>An orthographic converter can help identify certain spelling differences, but it cannot perform complete market adaptation.</p>

                <h3>Recommended Enterprise Practice</h3>
                <p>Maintain separate pt-BR and pt-PT:</p>
                <ul>
                  <li>style guides;</li>
                  <li>glossaries and termbases;</li>
                  <li>translation memories;</li>
                  <li>approved interface strings;</li>
                  <li>regulatory terminology;</li>
                  <li>voice and pronunciation assets;</li>
                  <li>linguistic quality records.</li>
                </ul>
                <p>Do not merge the two locales into a single memory without clear market metadata. A translation that is approved for Brazil should not automatically become the preferred result for Portugal.</p>
              </section>

              <section className="article-section" id="dates-numbers-currency-addresses-and-locale-formats">
                <h2>Dates, Numbers, Currency, Addresses, and Locale Formats</h2>
                <p>Localization includes the structured data surrounding the words. Software and digital content should use locale-aware formatting rather than hard-coded assumptions.</p>

                <h3>Locale Data Comparison</h3>
                <div className="breakout">
                  <DataTable caption="Brazil and Portugal locale data comparison" headers={["Data Type", "Brazil", "Portugal"]} rows={localeRows} />
                </div>
                <p>Formatting rules may vary by application, house style, legal requirement, and locale library. Use current locale data and validate the final display in the product.</p>

                <h3>Forms and Validation</h3>
                <p>A form created for one market should not simply be translated for the other. Review:</p>
                <ul>
                  <li>required address fields;</li>
                  <li>postal-code patterns;</li>
                  <li>telephone validation;</li>
                  <li>tax and identity fields;</li>
                  <li>state, district, or municipality selectors;</li>
                  <li>name and company fields;</li>
                  <li>payment and invoice requirements;</li>
                  <li>date pickers;</li>
                  <li>currency and price display;</li>
                  <li>error messages;</li>
                  <li>privacy and consent wording.</li>
                </ul>
                <div className="lead-callout"><strong>A form that uses the right words but rejects valid local data is not localized.</strong><p>Language, data validation, payment behavior, and customer notifications must work together.</p></div>

                <h3>Software Resource Management</h3>
                <p>Create distinct locale resources, such as <code className="inline-code">pt-BR</code> and <code className="inline-code">pt-PT</code>. Keep the locale identifier attached throughout extraction, translation, review, build integration, testing, analytics, and release management.</p>
                <p>Validate text expansion, line breaks, fonts, sorting, date and number display, plural behavior, address entry, payment flows, and customer notifications in the actual product.</p>
                <p>Learn more about <a href="https://www.stepes.com/software-localization-services/">software localization services</a> and <a href="https://www.stepes.com/app-localization-services/">app localization services</a>.</p>
              </section>

              <section className="article-section" id="websites-multilingual-seo-and-regional-search-intent">
                <h2>Websites, Multilingual SEO, and Regional Search Intent</h2>
                <p>A website targeting Brazil and Portugal should normally use separate regional pages when products, offers, terminology, customer journeys, or search intent differ.</p>
                <p>Translation alone does not guarantee that the page will be discoverable in both markets. Searchers may use different words for the same product, problem, or action. A page optimized around Brazilian vocabulary may miss important Portuguese queries, even when users can understand the content.</p>

                <h3>Localize More Than the Body Copy</h3>
                <p>Review:</p>
                <ul>
                  <li>page titles and meta descriptions;</li>
                  <li>headings and navigation;</li>
                  <li>product and category names;</li>
                  <li>calls to action;</li>
                  <li>internal anchor text;</li>
                  <li>image alt text;</li>
                  <li>FAQs;</li>
                  <li>structured data;</li>
                  <li>currency and commercial terms;</li>
                  <li>delivery, returns, tax, and support information;</li>
                  <li>legal and privacy notices;</li>
                  <li>downloadable documents;</li>
                  <li>multimedia;</li>
                  <li>customer reviews and market proof.</li>
                </ul>

                <h3>Use Separate, Crawlable URLs</h3>
                <p>For regional versions, use distinct URLs that search engines can crawl. Connect equivalent pages with reciprocal <code className="inline-code">hreflang</code> annotations.</p>
                <div className="code-panel" aria-label="Illustrative hreflang implementation"><code>{`<link rel="alternate" hreflang="pt-BR" href="https://example.com/br/produto/" />\n<link rel="alternate" hreflang="pt-PT" href="https://example.com/pt/produto/" />\n<link rel="alternate" hreflang="x-default" href="https://example.com/product/" />`}</code></div>
                <p>Each page should also use an appropriate self-referencing canonical URL. Do not rely only on automatic IP or browser-language redirection, because users and search crawlers must be able to access each regional version directly.</p>

                <h3>Avoid Near-Duplicate Regional Pages</h3>
                <p>pt-BR and pt-PT pages may share the same underlying offer, but each version should provide genuine market value. Where relevant, localize terminology, search queries, examples, currency, logistics, support details, legal information, customer expectations, and market-specific calls to action.</p>
                <p>Explore <a href="https://www.stepes.com/website-translation-services/">website translation services</a> for multilingual content, SEO, workflow, testing, and ongoing updates.</p>
              </section>

              <section className="article-section" id="industry-and-regulatory-differences">
                <h2>Industry and Regulatory Differences</h2>
                <p>Locale selection becomes more important as content risk, specialization, or public visibility increases.</p>
                <div className="industry-list breakout">
                  <div className="industry-row">
                    <h3>Medical Devices, Pharmaceuticals, and Healthcare</h3>
                    <div><p>Brazilian life sciences content must align with Brazilian language usage, local clinical and regulatory terminology, and relevant ANVISA requirements. Current ANVISA guidance for medical-device instructions emphasizes Portuguese-language content that is understandable to users, and ANVISA has specifically noted that menus, instructions, and labels should use expressions commonly understood in Brazil when interpretation could affect risk.</p><p>Portuguese-market content may need to align with Portuguese requirements, INFARMED terminology, and applicable European Union frameworks. Portugal requires Portuguese-language labeling and instructions for medical devices placed on its market, subject to the applicable regulatory framework.</p><p>For regulated content, do not convert between pt-BR and pt-PT through automated terminology replacement alone. Use qualified native linguists, subject-matter review, controlled terminology, version management, and documented quality assurance.</p><p><a href="https://www.stepes.com/medical-translation-services/">Explore Medical Translation Services</a></p></div>
                  </div>
                  <div className="industry-row"><h3>Software and SaaS</h3><p>Software localization should address UI terminology, onboarding and help, notifications and error messages, locale-sensitive formats, data entry and validation, accessibility labels, app-store or marketplace content, release notes, support articles, and recurring updates. Maintain separate pt-BR and pt-PT resource files and test both localized builds.</p></div>
                  <div className="industry-row"><h3>Websites and E-Commerce</h3><p>Regionalize product taxonomy, search terms, prices and currency, shipping and delivery language, returns and customer-service content, payment and checkout fields, addresses and postal codes, legal notices, promotions, and calls to action. A Brazilian checkout copied into a Portugal site can fail even when the Portuguese text is understandable.</p></div>
                  <div className="industry-row"><h3>Legal and Financial Content</h3><p>Brazil and Portugal have different legal systems, institutions, filing practices, currencies, tax terminology, and professional conventions. Legal and financial translations should use the terminology of the intended jurisdiction and should not imply that language equivalence creates legal equivalence.</p></div>
                  <div className="industry-row"><h3>Technical and Manufacturing Content</h3><p>Technical manuals, safety information, maintenance procedures, product labels, and training materials require consistent market terminology. Review component names, units, standards references, warnings, and the language used by local technicians and customers.</p></div>
                  <div className="industry-row"><h3>Marketing and Brand Content</h3><p>Marketing often requires more than regional editing. Humor, rhythm, cultural references, emotional tone, slogans, and calls to action may need transcreation. A message that performs well in Brazil may feel overly informal, unfamiliar, or culturally distant in Portugal—and the reverse may also be true.</p></div>
                  <div className="industry-row"><h3>Customer Support and Knowledge Bases</h3><p>Support language must match the interface and documentation. Align product names, navigation labels, troubleshooting steps, account and billing terminology, shipping and order language, escalation scripts, and automated chat and email templates. When one team supports both markets, route customers to the correct locale resources rather than mixing terminology in a universal Portuguese knowledge base.</p></div>
                  <div className="industry-row"><h3>Multimedia and Training</h3><p>Use market-specific scripts, voice talent, subtitles, on-screen text, and pronunciation. For technical or regulated training, validate that spoken instructions use the same approved terminology as manuals, interfaces, and assessments.</p></div>
                </div>
              </section>

              <section className="article-section" id="which-portuguese-locale-does-your-organization-need">
                <span className="eyebrow">Decision Tool</span>
                <h2>Which Portuguese Locale Does Your Organization Need?</h2>
                <p>Use the following Stepes Portuguese Locale Decision Matrix to choose an appropriate approach.</p>
                <div className="breakout">
                  <DataTable caption="Stepes Portuguese Locale Decision Matrix" headers={["Business Scenario", "Recommended Approach", "Why"]} rows={decisionRows} className="decision-table" />
                </div>

                <h3>A Simple Decision Rule</h3>
                <p>Use separate pt-BR and pt-PT versions when any of the following is true:</p>
                <ul>
                  <li>the content is public;</li>
                  <li>the content affects safety or compliance;</li>
                  <li>the content guides a transaction or product action;</li>
                  <li>the content must rank in local search;</li>
                  <li>the content represents the brand;</li>
                  <li>the content is spoken;</li>
                  <li>the content will be reused across releases;</li>
                  <li>users may be confused by unfamiliar terminology;</li>
                  <li>local institutions, currencies, formats, or legal requirements appear.</li>
                </ul>
                <div className="lead-callout"><strong>The higher the visibility and risk, the stronger the case for market-specific localization.</strong><p>Low-risk internal content may allow an agreed single version. Public, regulated, transactional, and spoken content normally requires stronger locale control.</p></div>
              </section>

              <section className="article-section" id="can-pt-br-content-be-adapted-into-pt-pt">
                <h2>Can pt-BR Content Be Adapted Into pt-PT?</h2>
                <p>Yes. A professionally approved translation for one market can often serve as a strong starting point for the other. Adaptation can reduce duplicated effort when the source content, product, and business requirements are closely aligned.</p>
                <p>It should not be treated as a search-and-replace exercise.</p>

                <h3>What Can Often Be Reused</h3>
                <ul>
                  <li>source structure;</li>
                  <li>approved product concepts;</li>
                  <li>validated technical meaning;</li>
                  <li>existing bilingual references;</li>
                  <li>nontranslatable product names;</li>
                  <li>diagrams and visual assets after market review;</li>
                  <li>translation memory segments that are correctly labeled by locale;</li>
                  <li>approved terminology concepts, with separate regional equivalents.</li>
                </ul>

                <h3>What Must Be Reviewed</h3>
                <ul>
                  <li>every visible sentence and interface string;</li>
                  <li>vocabulary;</li>
                  <li>grammar and syntax;</li>
                  <li>pronoun placement;</li>
                  <li>tone and forms of address;</li>
                  <li>spelling;</li>
                  <li>dates, numbers, units, and currencies;</li>
                  <li>addresses and form fields;</li>
                  <li>legal and regulatory terminology;</li>
                  <li>search keywords and metadata;</li>
                  <li>calls to action;</li>
                  <li>audio scripts and pronunciation;</li>
                  <li>screenshots and in-context display;</li>
                  <li>linked documents and customer communications.</li>
                </ul>

                <div className="dark-workflow breakout">
                  <span className="eyebrow eyebrow-on-dark">Eight-Step Process</span>
                  <h3>Recommended Adaptation Workflow</h3>
                  <p>Move from an approved source locale to a production-ready regional version without losing language, terminology, quality, or market context.</p>
                  <ol className="workflow-list">
                    {workflowSteps.map(([title, text]) => (
                      <li className="workflow-step" key={title}><div><h4>{title}</h4><p>{text}</p></div></li>
                    ))}
                  </ol>
                </div>
                <p><a href="https://www.stepes.com/translation-memory-management/">Translation memory</a> can accelerate reuse, but it should preserve the distinction between Brazilian and European Portuguese.</p>
              </section>

              <section className="article-section" id="portuguese-localization-checklist">
                <div className="checklist-intro">
                  <div>
                        <h2>Portuguese Localization Checklist</h2>
                  </div>
                </div>
                <p>Use this checklist before translation begins and again before launch.</p>
                <div className="checklist-grid breakout">
                  {checklistGroups.map(([heading, items]) => (
                    <section className="checklist-group" key={heading}>
                      <h3>{heading}</h3>
                      <ul className="checklist">
                        {items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>

              <section className="article-section" id="common-mistakes-to-avoid">
                <h2>Common Mistakes to Avoid</h2>
                <p>Most pt-BR and pt-PT problems begin before translation, when the target market, language assets, or review process is not defined clearly enough.</p>
                <div className="mistake-list breakout">
                  {mistakes.map(([title, text]) => <div className="mistake" key={title}><h3>{title}</h3><p>{text}</p></div>)}
                </div>
              </section>

              <section className="article-section" id="frequently-asked-questions">
                <h2>Frequently Asked Questions</h2>
                <p>These answers summarize the most common business decisions surrounding Brazilian and European Portuguese.</p>
                <div className="faq-panel">
                  {faqs.map(([question, answer], index) => (
                    <details className="faq-item" key={question} open={index === 0 ? true : undefined}>
                      <summary>{question}</summary>
                      <div className="faq-answer">{answer}</div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="sources-section" aria-labelledby="sources-title">
                <h2 id="sources-title">Selected References</h2>
                <ol className="source-list">
                  {references.map(([title, organization, url]) => (
                    <li className="source-item" key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{title} <span aria-hidden="true">↗</span></a>
                      <span className="source-org">{organization}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="guide-shell">
          <div className="related-heading">
            <div><span className="eyebrow">Continue the Topic</span><h2 id="related-title">Related Portuguese Localization Guides</h2></div>
            <p>Continue from locale selection into website, software, medical, AI translation, and budget planning.<br /><a className="related-all-link" href="https://www.stepes.com/resources/localization-guides/">Browse All Localization Guides</a></p>
          </div>
          <div className="related-grid">
            {relatedGuides.map(([title, description, url]) => (
              <article className="related-item" key={url}>
                <a href={url}>{title}</a>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="guide-shell">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">Portuguese Localization</span>
              <h2 id="final-cta-title">Choose the Portuguese Your Audience Expects</h2>
              <p>The right Portuguese locale protects more than linguistic accuracy. It helps users understand your content, complete transactions, navigate products, find information, trust your brand, and meet market-specific expectations. Stepes helps organizations translate directly into pt-BR and pt-PT, adapt an approved version, or build an ongoing workflow that keeps both locales consistent across releases.</p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">Talk to a Portuguese Translation Expert <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="https://www.stepes.com/portuguese-translation-services/">Explore Portuguese Translation Services</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
