export default function TranslationCostGuideSections() {
  const costDrivers = [
    {
      title: "Language Pair",
      body:
        "Common language pairs usually have broader translator availability, while specialized or lower-resource languages may require more specialized resources and longer planning.",
    },
    {
      title: "Word Count and Repetition",
      body:
        "Total word count matters, but repeated segments, exact matches, and translation memory leverage can reduce effort and improve long-term efficiency.",
    },
    {
      title: "Subject Matter Complexity",
      body:
        "Legal, medical, technical, financial, and regulated content often requires specialist linguists, terminology control, and more rigorous review.",
    },
    {
      title: "Quality Level",
      body:
        "AI-assisted translation, human review, professional translation, independent review, and regulated QA each represent different workflow and quality requirements.",
    },
    {
      title: "Turnaround Time",
      body:
        "Rush deadlines may require parallel teams, expedited coordination, and after-hours production, all of which can affect project cost.",
    },
    {
      title: "File Format and Engineering",
      body:
        "Word, PDF, InDesign, HTML, XML, JSON, software strings, and multimedia files involve different preparation, extraction, and engineering effort.",
    },
    {
      title: "Formatting and DTP",
      body:
        "Layout-intensive content can require reflow, resizing, typography adjustments, and multilingual desktop publishing after translation.",
    },
    {
      title: "Translation Memory and Terminology",
      body:
        "Approved translations, glossaries, and style guides improve consistency and can lower future costs by reducing repeated work.",
    },
    {
      title: "Review and Approval Workflow",
      body:
        "Enterprise projects may include in-country review, stakeholder approvals, compliance checks, and structured revision cycles.",
    },
    {
      title: "Security and Compliance Requirements",
      body:
        "Sensitive content may require secure workflows, controlled access, NDAs, and documented quality processes for regulated or confidential materials.",
    },
  ];

  const pricingModels = [
    {
      title: "Per-Word Pricing",
      label: "Most common",
      bestFor:
        "Standard document translation, technical manuals, business content, and scalable multilingual projects.",
      body:
        "Per-word pricing remains a common model for professional translation because it offers a straightforward way to estimate cost for source content with a clear word count. It works especially well for ongoing document translation and multilingual programs where volume, language pairs, and review levels can be scoped consistently.",
    },
    {
      title: "Hourly Pricing",
      label: "Specialized work",
      bestFor:
        "Review, consulting, localization engineering, linguistic QA, terminology work, multimedia review, and complex formatting.",
      body:
        "Hourly pricing is often better for work that depends more on analysis, technical handling, or iterative review than on raw word count. It is commonly used when the scope includes consulting, file preparation, stakeholder review cycles, or specialized localization support.",
    },
    {
      title: "Per-Page Pricing",
      label: "Short official documents",
      bestFor:
        "Certificates, diplomas, forms, and short official documents with predictable page density.",
      body:
        "Per-page pricing can be useful for shorter official materials where buyers want a simple, predictable quote. It is less precise for content with variable layout density, extensive tables, or widely different amounts of text per page.",
    },
    {
      title: "Flat Project Pricing",
      label: "Bundled scope",
      bestFor:
        "Projects where translation, formatting, review, DTP, and project coordination need to be combined into one predictable budget.",
      body:
        "Flat project pricing works well when the full workflow matters more than a single pricing unit. It helps buyers budget for translation, engineering, quality review, and delivery as one defined scope rather than several separate line items.",
    },
    {
      title: "Enterprise Program Pricing",
      label: "Ongoing localization",
      bestFor:
        "Recurring localization programs with dedicated teams, translation memory, service levels, reporting, and cross-market coordination.",
      body:
        "Enterprise pricing is built for organizations managing multilingual content at scale. It reflects the value of reusable translation memory, workflow consistency, centralized terminology, predictable service coverage, and visibility across departments and markets.",
    },
    {
      title: "AI-Assisted Translation Pricing",
      label: "Efficiency with review",
      bestFor:
        "High-volume content where speed and cost efficiency matter, while human review, terminology control, and quality safeguards remain important.",
      body:
        "AI-assisted pricing can improve speed and efficiency for suitable content, but the right workflow still depends on content risk, brand sensitivity, accuracy needs, and review requirements. For customer-facing, regulated, or high-liability content, human oversight remains essential.",
    },
  ];

  const publicRateRanges = [
    {
      title: "Standard and technical translation",
      range: "$0.09 – $0.20",
      unit: "per word",
      body:
        "Often used for manuals, user guides, business documents, and other standard translation projects where pricing is primarily driven by language pair, complexity, and review level.",
    },
    {
      title: "Marketing translation and transcreation",
      range: "$0.12 – $0.24",
      unit: "per word",
      body:
        "Usually higher because the work often involves message adaptation, stronger brand review, and more revision cycles than standard technical content.",
    },
    {
      title: "Legal, medical, and regulated content",
      range: "$0.12 – $0.24",
      unit: "per word",
      body:
        "Often priced higher because the content carries greater accuracy, compliance, and liability risk and may require specialist linguists or additional review.",
    },
    {
      title: "Hourly work for DTP, engineering, and specialist support",
      range: "$30 – $55",
      unit: "per hour",
      body:
        "Common for work that is not best measured by source word count alone, such as file preparation, desktop publishing, localization engineering, review support, and complex formatting.",
    },
  ];

  const contentTypes = [
    {
      title: "Document Translation Cost",
      href: "https://www.stepes.com/document-translation-services/",
      body:
        "Business documents, reports, manuals, policies, and general communications are often priced around volume, file condition, review level, and turnaround. Clean editable files are usually easier to process than scanned PDFs or layout-heavy source material.",
      drivers: "Word count, file type, repetition, review level",
    },
    {
      title: "Technical Translation Cost",
      href: "https://www.stepes.com/technical-translation-services/",
      body:
        "Technical manuals, engineering documents, safety materials, and specifications tend to require specialized terminology handling, diagram awareness, and more rigorous quality review. Cost is shaped more by complexity and accuracy risk than by word count alone.",
      drivers: "Terminology density, diagrams, warnings, reviewer expertise",
    },
    {
      title: "Legal Translation Cost",
      href: "https://www.stepes.com/legal-translation-services/",
      body:
        "Contracts, agreements, patents, litigation documents, and compliance materials often require precision, confidentiality, and consistent legal phrasing across jurisdictions. The workflow may include specialist review, certification, or formal formatting requirements.",
      drivers: "Liability, confidentiality, certification, legal review",
    },
    {
      title: "Medical and Life Sciences Translation Cost",
      href: "https://www.stepes.com/medical-translation-services/",
      body:
        "IFUs, clinical trial documents, patient materials, labeling, and medical device content usually require life sciences expertise, regulated terminology, and stronger quality controls. Traceability, second review, and compliance expectations can materially affect budget.",
      drivers: "Regulatory risk, SME review, terminology control, traceability",
    },
    {
      title: "Website Translation Cost",
      href: "https://www.stepes.com/website-translation-services/",
      body:
        "Website localization includes landing pages, product pages, resource hubs, CMS content, SEO metadata, and multilingual publishing workflows. Cost depends on content volume, update frequency, CMS handling, and whether in-market review is required.",
      drivers: "CMS workflow, SEO fields, publishing, market review",
    },
    {
      title: "Software and App Localization Cost",
      href: "https://www.stepes.com/software-localization-services/",
      body:
        "UI strings, JSON or XML files, screenshots, in-context review, pseudo-localization, and linguistic testing introduce technical work that goes beyond straight translation. The budget depends on context availability, engineering complexity, and release workflow.",
      drivers: "String handling, screenshots, testing, engineering support",
    },
    {
      title: "Marketing Translation and Transcreation Cost",
      href: "https://www.stepes.com/marketing-translation-services/",
      body:
        "Campaigns, brand messaging, ads, brochures, and other high-visibility content often require transcreation, copy adaptation, and stronger brand review. Creative work is usually influenced more by message sensitivity and revision cycles than by volume alone.",
      drivers: "Brand voice, creative adaptation, approvals, market fit",
    },
    {
      title: "Multimedia and eLearning Translation Cost",
      href: "https://www.stepes.com/multimedia-translation-services/",
      secondaryHref: "https://www.stepes.com/elearning-training-translation-services/",
      secondaryLabel: "eLearning translation",
      body:
        "Subtitles, voice-over, scripts, captions, training modules, and interactive learning content require a blend of linguistic, production, and technical work. Timing, audio, authoring tools, and platform delivery can all influence cost.",
      drivers: "Transcription, time-coding, voice-over, LMS or media production",
    },
  ];

  const aiFactors = [
    {
      title: "AI Translation Is Changing Cost Models",
      body:
        "AI and large language models can accelerate multilingual workflows, especially for repetitive or high-volume content. But enterprise-ready translation still depends on human oversight, terminology control, and quality validation when the content affects compliance, brand reputation, or user safety.",
    },
    {
      title: "Translation Memory Reduces Repeated Work",
      body:
        "Translation memory helps teams reuse approved segments instead of translating similar content from scratch. Exact matches, in-context matches, and fuzzy matches can improve consistency and reduce effort across recurring releases, product updates, and document revisions.",
    },
    {
      title: "Terminology Management Improves Consistency",
      body:
        "Glossaries, approved product language, and regulated terminology help translators and reviewers make consistent decisions across teams and markets. Strong terminology management reduces rework and improves alignment across multilingual content programs.",
    },
    {
      title: "Human Review Protects Quality",
      body:
        "Human review remains essential for legal, medical, customer-facing, regulated, and high-risk content. It helps catch context issues, brand tone problems, terminology errors, and other quality risks that automated workflows alone may not resolve.",
    },
  ];

  const aiDecision = [
    {
      title: "When AI-Assisted Translation Makes Sense",
      body:
        "AI-assisted workflows are often a strong fit for high-volume, lower-risk, repetitive, internal, or support content where speed and cost efficiency matter. They are also useful when translation memory and terminology assets are already well established.",
    },
    {
      title: "When Professional Human Translation Is Better",
      body:
        "Professional human translation is usually the safer choice for regulated, legal, medical, brand-sensitive, creative, or high-liability content. It is also better when the text requires nuanced persuasion, market adaptation, or publication-ready polish.",
    },
  ];

  const qualityLevels = [
    {
      level: "AI Draft Translation",
      use: "Internal understanding, low-risk content, early review",
      workflow: "Fast machine-generated output with limited quality safeguards",
      planning: "Lowest cost, lowest confidence for external use",
    },
    {
      level: "AI Translation + Human Review",
      use: "Scalable business content where speed and efficiency matter",
      workflow: "AI-generated draft reviewed and corrected by a professional linguist",
      planning: "Balanced model for volume content with practical quality control",
    },
    {
      level: "Professional Human Translation",
      use: "Customer-facing, technical, legal, medical, or brand-sensitive content",
      workflow: "Specialist translation by qualified linguists with terminology support",
      planning: "Higher quality and stronger contextual control for important content",
    },
    {
      level: "Translation + Independent Review",
      use: "High-risk content, regulated industries, publication-ready deliverables",
      workflow: "Translation followed by separate review or revision in a structured workflow",
      planning: "Higher investment with stronger assurance and fewer downstream corrections",
    },
    {
      level: "Enterprise Localization QA",
      use: "Software, websites, multimedia, regulated content, ongoing programs",
      workflow: "Translation plus review, in-context QA, stakeholder checks, and release support",
      planning: "Best for teams managing multilingual content quality across systems and markets",
    },
  ];

  const scenarios = [
    {
      title: "5,000-word business document into Spanish",
      summary:
        "A straightforward business document is often scoped around word count, language pair, file condition, and review level. Repetition, clean source formatting, and existing translation memory can reduce effort.",
      drivers: "Word count, language pair, standard review, file type",
    },
    {
      title: "20-page technical manual into five languages",
      summary:
        "A multilingual technical manual usually requires terminology handling, layout support, and specialist review. Repeated content can improve efficiency, but diagrams, warnings, and formatting add complexity.",
      drivers: "Terminology, DTP, translation memory, engineering review",
    },
    {
      title: "Website update for 10 markets",
      summary:
        "Website updates often involve more than translation alone. CMS workflows, SEO metadata, publishing coordination, and country review can all influence budget and turnaround.",
      drivers: "SEO metadata, CMS workflow, multilingual publishing, in-country review",
    },
    {
      title: "Software UI localization project",
      summary:
        "Software localization budgets are shaped by string structure, context, screenshots, engineering handoff, and QA. The workflow may also include pseudo-localization and linguistic testing before release.",
      drivers: "Strings, screenshots, context, linguistic testing, JSON or XML handling",
    },
    {
      title: "Medical device IFU translation",
      summary:
        "An IFU translation usually requires regulated terminology, life sciences expertise, and stronger review controls. Traceability, formatting, and consistency across product documentation can materially affect effort.",
      drivers: "Regulated terminology, subject-matter expertise, second review, formatting, traceability",
    },
    {
      title: "Marketing campaign transcreation",
      summary:
        "Campaign adaptation often depends on creative rewriting, brand review, and local market fit rather than simple volume. Revision cycles and stakeholder input can be significant parts of the workflow.",
      drivers: "Creative adaptation, brand review, local market validation, copywriting",
    },
  ];

  const savingsTips = [
    {
      title: "Prepare editable source files",
      body:
        "Editable Word, InDesign, HTML, XML, or JSON source files are usually more efficient to localize than flattened PDFs, screenshots, or scanned documents.",
    },
    {
      title: "Use consistent terminology",
      body:
        "Approved glossaries and product terminology reduce rework, improve consistency, and help linguists make faster decisions across recurring projects.",
    },
    {
      title: "Provide reference materials",
      body:
        "Screenshots, previous translations, style guides, and audience context help translators and reviewers deliver accurate work with fewer clarification cycles.",
    },
    {
      title: "Centralize translation memory",
      body:
        "When approved translations are stored and reused across teams, the value compounds over time through exact matches, fuzzy matches, and content reuse.",
    },
    {
      title: "Avoid unnecessary rush deadlines",
      body:
        "Planning ahead reduces the need for parallel teams, after-hours production, and expedited project management that can increase cost.",
    },
    {
      title: "Group recurring content updates",
      body:
        "Bundling related updates can improve workflow efficiency, reduce setup overhead, and help teams apply reuse more effectively.",
    },
    {
      title: "Choose the right quality level by content risk",
      body:
        "Not every asset needs the same workflow. Matching review depth to content risk helps teams control spend without lowering standards where quality matters most.",
    },
    {
      title: "Use AI-assisted workflows where appropriate",
      body:
        "AI-assisted translation can be a practical option for repetitive, lower-risk, or high-volume content when paired with the right human review and terminology controls.",
    },
    {
      title: "Reuse approved translations",
      body:
        "Reusing approved segments across releases, product updates, and market variants can reduce unnecessary duplicate work.",
    },
    {
      title: "Plan multilingual releases earlier",
      body:
        "Including localization earlier in content and product planning usually leads to cleaner source content, better scheduling, and fewer expensive last-minute changes.",
    },
  ];

  const quoteChecklist = [
    "Source files",
    "Source and target languages",
    "Word count or file package",
    "Desired turnaround time",
    "Content type and subject matter",
    "Formatting or DTP requirements",
    "Review level",
    "Reference materials",
    "Glossary or terminology list",
    "Translation memory, if available",
    "Security or compliance requirements",
    "Publishing or delivery format",
  ];

  const enterprisePlanning = [
    {
      title: "From One-Time Projects to Ongoing Localization Programs",
      body:
        "Enterprise buyers usually gain more value when translation planning is managed as a recurring program rather than a series of disconnected one-off jobs. Program thinking makes it easier to improve reuse, consistency, turnaround, and reporting over time.",
    },
    {
      title: "Centralized Translation Memory",
      body:
        "A centralized translation memory helps approved content compound in value across business units, products, and markets. Instead of paying to recreate the same language repeatedly, teams can build on what has already been approved.",
    },
    {
      title: "Dedicated Linguist Teams",
      body:
        "Dedicated teams improve consistency because they become more familiar with the client’s domain, terminology, products, and preferred style. That knowledge often leads to fewer revisions and more predictable quality.",
    },
    {
      title: "Reporting and Spend Visibility",
      body:
        "Larger organizations benefit from clearer visibility into language spend, content types, turnaround patterns, and project history. Better reporting helps teams plan budgets more strategically and spot opportunities for reuse or workflow improvement.",
    },
    {
      title: "Procurement and Vendor Consolidation",
      body:
        "Consolidating workflows with a scalable language partner can reduce fragmentation, simplify governance, and improve consistency across departments and markets.",
    },
    {
      title: "Global Content Operations",
      body:
        "Enterprise translation planning works best when language is treated as part of broader content operations. That means aligning translation with source content creation, product releases, website updates, review workflows, and multilingual publishing.",
    },
  ];

  const faqs = [
    {
      q: "How much does translation cost per word?",
      a: "Per-word pricing is still common for document translation, but the real cost per word can vary a lot based on language pair, subject matter, file complexity, review level, turnaround time, and how much approved content can be reused from translation memory. Straightforward business content is usually priced differently from legal, medical, technical, or creative content because the risk, expertise, and review requirements are different.",
    },
    {
      q: "Why do some languages cost more than others?",
      a: "Some languages cost more because the labor market behind them is different. If there are fewer qualified professional translators for a language pair, or if the language requires specialized review resources, prices usually go up. Labor costs in the markets where those linguists are based also matter. In short, translation pricing is influenced by supply, demand, specialization, and underlying labor costs, not just by the language itself.",
    },
    {
      q: "Does AI translation reduce translation cost?",
      a: "Yes, AI translation can reduce translation cost. It is often most effective for repetitive, lower-risk, and high-volume content, especially when terminology and review workflows are already in place. For customer-facing, legal, medical, regulatory, and other critical content, human linguist review is still required to protect accuracy, compliance, and quality. Even in those cases, AI-assisted translation followed by professional post-editing can still reduce cost compared with translating everything manually from scratch.",
    },
    {
      q: "What is translation memory leverage?",
      a: "Translation memory leverage is the amount of previously approved content that can be reused instead of translated again from scratch. That includes exact matches, repetitions, and fuzzy matches that are close to earlier wording. Good translation memory leverage usually lowers effort, improves consistency, and helps large organizations reduce cost over time across recurring releases and content updates.",
    },
    {
      q: "Is human translation more expensive than AI translation?",
      a: "Usually yes in direct labor terms, because professional human translation involves more hands-on linguistic work. But for important content, the better question is value rather than sticker price. Human translation is often the better investment for legal, medical, regulated, customer-facing, and brand-sensitive content because the cost of errors, rework, delays, or reputational damage can be much higher than the translation fee itself.",
    },
    {
      q: "Do formatting and DTP cost extra?",
      a: "Often yes. Translation and desktop publishing are not the same task. If the project includes layout rework, multilingual typography, resized tables, reflowed graphics, or language expansion in design files, that usually adds production work beyond translation. The more layout-dependent the source files are, the more likely formatting and DTP should be scoped separately.",
    },
    {
      q: "How much does website translation cost?",
      a: "Website translation cost depends on more than page word count. It often includes CMS handling, SEO metadata, page templates, multilingual publishing, content updates, market review, and sometimes engineering support. A static five-page site is very different from an active multilingual site with frequent releases, resource content, product pages, and SEO workflows.",
    },
    {
      q: "How much does software localization cost?",
      a: "Software localization is usually priced around more than strings alone. Cost can be affected by file formats such as JSON or XML, screenshot context, character limits, pseudo-localization, build or release workflow, in-context review, and linguistic testing. A clean string file with good context is far easier and less expensive to localize than a fragmented UI with missing context and testing requirements.",
    },
    {
      q: "Is rush translation more expensive?",
      a: "It often is. Rush work may require parallel linguists, faster project coordination, after-hours production, or compressed review cycles. Even when the word rate stays similar, the overall workflow cost can increase because the schedule demands more operational effort and leaves less room for normal planning efficiency.",
    },
    {
      q: "What is the best way to get an accurate translation quote?",
      a: "Provide the actual source files, source and target languages, deadline, content type, review expectations, formatting needs, reference materials, and any compliance or security requirements. If you have translation memory, glossaries, or prior approved translations, include those too. The more complete the brief, the more accurate the pricing and delivery plan will be.",
    },
    {
      q: "Can Stepes support ongoing enterprise translation programs?",
      a: "Yes. Ongoing enterprise programs usually need more than one-off project quoting. They benefit from centralized translation memory, terminology management, dedicated linguists, reporting, workflow consistency, and support across websites, software, documents, and regulated content. That is where a platform-enabled language partner can create more long-term value than a simple transactional vendor model.",
    },
    {
      q: "How can I reduce translation costs over time?",
      a: "The most reliable way is to improve the process, not just pressure the rate. Use editable source files, centralize translation memory, maintain terminology, plan earlier, group related updates, reuse approved translations, and match the review workflow to the real risk of the content. Long-term savings usually come from better preparation and better reuse, not from cutting quality where it matters.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <section className="px-5 sm:px-6 lg:px-10 xl:px-14 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-18 lg:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[860px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C11D63]">
              Resources
            </div>
            <h1 className="mt-4 text-[38px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[42px] lg:text-[48px]">
              Translation Cost Guide
            </h1>
            <p className="mt-5 max-w-[760px] text-[18px] leading-8 text-[#4B5563]">
              Learn how professional translation pricing works, what affects project cost,
              and how to budget for multilingual content with the right mix of AI,
              human expertise, terminology control, translation memory, and review.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.stepes.com/online-translation-quote/"
                className="inline-flex items-center rounded-full bg-[#C11D63] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#A71954]"
              >
                Get an Instant Quote
              </a>
              <a
                href="https://www.stepes.com/contact-sales/"
                className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-[15px] font-semibold text-[#111827] transition hover:border-[#D1D5DB] hover:bg-[#FAFAFA]"
              >
                Talk to Stepes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8FB] border-t border-[#F3D7E3] border-b border-[#F3D7E3] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Typical Translation Pricing Ranges
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Buyers usually expect at least a directional pricing anchor. These typical public ranges help set expectations, while final pricing still depends on language pair, content risk, review depth, file condition, and turnaround.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-[28px] border border-[#F3D7E3] bg-white shadow-[0_10px_30px_rgba(193,29,99,0.04)]">
                <div className="hidden border-b border-[#F3D7E3] bg-[#FFF8FB] px-6 py-5 sm:px-8 xl:grid xl:grid-cols-[minmax(0,240px)_minmax(0,170px)_minmax(0,1fr)] xl:gap-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Service Type
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Typical Range
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    What Usually Drives It
                  </div>
                </div>

                <div className="divide-y divide-[#F3D7E3]">
                  {publicRateRanges.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,240px)_minmax(0,170px)_minmax(0,1fr)]"
                    >
                      <div>
                        <h3 className="text-[20px] leading-7 font-semibold tracking-[-0.02em] text-[#111827]">
                          {item.title}
                        </h3>
                      </div>
                      <div>
                        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55] xl:hidden">
                          Typical Range
                        </div>
                        <div className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#9F1D55]">
                          {item.range}
                        </div>
                        <div className="text-[14px] leading-6 text-[#6B7280]">{item.unit}</div>

                        <div className="mt-5 border-t border-[#F3D7E3] pt-5 xl:hidden">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                            What Usually Drives It
                          </div>
                          <p className="mt-3 max-w-[760px] text-[16px] leading-7 text-[#4B5563]">{item.body}</p>
                        </div>
                      </div>
                      <div className="hidden xl:block">
                        <p className="max-w-[760px] text-[16px] leading-7 text-[#4B5563]">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 max-w-[820px] text-[14px] leading-7 text-[#6B7280]">
                AI-assisted translation plus human post-editing can often reduce cost for suitable content, but customer-facing, legal, medical, regulatory, and other high-risk materials still require qualified human review. The most accurate quote always comes from the actual files, languages, and workflow requirements.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                How Much Does Translation Cost?
              </h2>
            </div>

            <div className="max-w-[820px]">
              <p className="text-[18px] leading-8 text-[#374151]">
                Professional translation costs are usually calculated based on word count,
                language pair, subject matter, turnaround time, file format, quality review,
                and workflow requirements. For enterprise localization, cost may also depend
                on translation memory leverage, terminology management, AI-assisted
                translation, desktop publishing, software engineering, and ongoing program
                management.
              </p>
              <p className="mt-6 text-[18px] leading-8 text-[#374151]">
                The most important point is that translation cost is not just the price per
                word. The right budget depends on what you are translating, how many markets
                you are targeting, how much approved content can be reused, and what quality,
                compliance, and publishing requirements the project must meet.
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                    Why Translation Pricing Varies
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">
                    Professional translation services are priced according to scope,
                    complexity, and workflow. A simple business document usually requires a
                    different model than a multilingual website update, a software
                    localization release, or a regulated medical document that needs
                    specialist review and documented quality checks.
                  </p>
                </div>

                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                    What Buyers Need for an Accurate Quote
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">
                    Accurate quotes depend on the source files, languages, content type,
                    timeline, review level, formatting needs, and any available translation
                    memory or terminology. The more complete the project inputs are, the more
                    precise the pricing and delivery plan can be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCFE] border-t border-[#F3D7E3] border-b border-[#F3D7E3] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[760px]">
            <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
              What Affects Translation Cost?
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-[#4B5563]">
              Translation pricing changes from project to project because multilingual content
              is shaped by language coverage, content risk, file preparation, review needs,
              and delivery expectations. These are the main factors that typically influence
              cost.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {costDrivers.map((item, index) => (
              <div
                key={item.title}
                className={`${index < 2 ? "border-t" : ""} border-[#E9D7E1] pt-6 pb-6 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C11D63]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-[#4B5563]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Common Translation Pricing Models
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Translation is priced in different ways depending on the content, workflow, review needs, and long-term localization goals.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
                <div className="hidden border-b border-[#E5E7EB] bg-[#FAFAFA] px-6 py-5 sm:px-8 xl:grid xl:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,240px)] xl:gap-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Pricing Model
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    How It Works
                  </div>
                  <div className="border-l border-[#E5E7EB] pl-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Best For
                  </div>
                </div>

                <div className="divide-y divide-[#E5E7EB]">
                  {pricingModels.map((model) => (
                    <div
                      key={model.title}
                      className="grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,240px)]"
                    >
                      <div>
                        <div className="inline-flex rounded-full bg-[#FDF2F7] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                          {model.label}
                        </div>
                        <h3 className="mt-4 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                          {model.title}
                        </h3>
                      </div>

                      <div>
                        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55] xl:hidden">
                          How It Works
                        </div>
                        <p className="text-[16px] leading-7 text-[#374151]">{model.body}</p>

                        <div className="mt-5 border-t border-[#E5E7EB] pt-5 xl:hidden">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                            Best For
                          </div>
                          <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">{model.bestFor}</p>
                        </div>
                      </div>

                      <div className="hidden xl:block xl:border-l xl:border-[#E5E7EB] xl:pl-6">
                        <p className="text-[15px] leading-7 text-[#4B5563]">{model.bestFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 max-w-[820px] text-[14px] leading-7 text-[#6B7280]">
                The best pricing model depends on the balance between volume, complexity, turnaround, review requirements, and ongoing program needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Translation Cost by Content Type
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Different content types follow different pricing logic because the workflow, risk level, and production effort are not the same.
              </p>
            </div>

            <div className="border-t border-[#E5E7EB]">
              {contentTypes.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-6 border-b border-[#E5E7EB] py-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,220px)] ${index % 2 === 1 ? "bg-[#FCFCFD]" : "bg-transparent"}`}
                >
                  <div className="lg:pr-4">
                    <a
                      href={item.href}
                      className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] transition hover:text-[#9F1D55] lg:text-[24px]"
                    >
                      {item.title}
                    </a>
                    {item.secondaryHref && (
                      <a
                        href={item.secondaryHref}
                        className="mt-3 block text-[14px] font-medium text-[#9F1D55] transition hover:text-[#7A1542]"
                      >
                        Explore {item.secondaryLabel} →
                      </a>
                    )}
                  </div>
                  <div className="max-w-[760px]">
                    <p className="text-[16px] leading-7 text-[#374151]">{item.body}</p>

                    <div className="mt-5 border-t border-[#E5E7EB] pt-5 xl:hidden">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                        Key Cost Drivers
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">{item.drivers}</p>
                    </div>
                  </div>
                  <div className="hidden xl:block xl:border-l xl:border-[#E5E7EB] xl:pl-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                      Key Cost Drivers
                    </div>
                    <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">{item.drivers}</p>
                  </div>
                </div>
              ))}
              <p className="pt-6 text-[14px] leading-7 text-[#6B7280]">
                Cost planning is usually most accurate when the service model matches the real workflow, file condition, review requirements, and publishing environment for each content type.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[860px]">
            <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-white lg:text-[36px]">
              How AI and Translation Memory Affect Translation Cost
            </h2>
            <p className="mt-5 max-w-[760px] text-[18px] leading-8 text-[#D1D5DB]">
              AI, translation memory, and terminology management are changing how multilingual content is planned and priced. They can improve speed, consistency, and reuse, but they do not remove the need for human judgment when the content is customer-facing, regulated, or high risk.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {aiFactors.map((item, index) => (
              <div
                key={item.title}
                className={`${index < 2 ? "border-t" : ""} border-white/10 pt-6 pb-6 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
              >
                <h3 className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-white lg:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-[#D1D5DB]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2 lg:gap-12">
            {aiDecision.map((item) => (
              <div key={item.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F1B6CB]">
                  Best Use Case
                </div>
                <h3 className="mt-3 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-white lg:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-[#D1D5DB]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Choosing the Right Translation Quality Level
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                The best budget plan starts with choosing the service level that matches your content risk, audience, and publishing requirements.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
                <div className="hidden border-b border-[#E5E7EB] bg-[#FAFAFA] px-6 py-5 sm:px-8 xl:grid xl:grid-cols-[minmax(0,220px)_minmax(0,220px)_minmax(0,1fr)] xl:gap-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Quality Level
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Best For
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    How It Is Usually Managed
                  </div>
                </div>

                <div className="divide-y divide-[#E5E7EB]">
                  {qualityLevels.map((item) => (
                    <div
                      key={item.level}
                      className="grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,220px)_minmax(0,220px)_minmax(0,1fr)]"
                    >
                      <div>
                        <h3 className="text-[20px] leading-7 font-semibold tracking-[-0.02em] text-[#111827]">
                          {item.level}
                        </h3>
                      </div>
                      <div>
                        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55] xl:hidden">
                          Best For
                        </div>
                        <p className="text-[15px] leading-7 text-[#4B5563]">{item.use}</p>

                        <div className="mt-5 border-t border-[#E5E7EB] pt-5 xl:hidden">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                            How It Is Usually Managed
                          </div>
                          <div className="mt-3 space-y-4">
                            <div>
                              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                                Workflow
                              </div>
                              <p className="mt-2 text-[16px] leading-7 text-[#374151]">{item.workflow}</p>
                            </div>
                            <div>
                              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                                Cost Impact
                              </div>
                              <p className="mt-2 text-[15px] leading-7 text-[#4B5563]">{item.planning}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden xl:block">
                        <div className="space-y-4">
                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                              Workflow
                            </div>
                            <p className="mt-2 text-[16px] leading-7 text-[#374151]">{item.workflow}</p>
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                              Cost Impact
                            </div>
                            <p className="mt-2 text-[15px] leading-7 text-[#4B5563]">{item.planning}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-[#E5E7EB] pt-6">
                <h3 className="text-[20px] leading-7 font-semibold tracking-[-0.02em] text-[#111827]">
                  Quality standards help buyers match cost to content risk.
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">
                  Structured translation workflows, full human post-editing, and multidimensional quality review become more important as content risk increases. Standards such as ISO 17100 for translation services, ISO 18587 for full post-editing of machine translation, and MQM-style quality evaluation frameworks are useful reference points when teams need stronger quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F7] border-t border-[#E5E7EB] border-b border-[#E5E7EB] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[820px]">
            <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
              Sample Translation Budget Scenarios
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-[#4B5563]">
              These examples are illustrative, not binding price quotes. They show how scope, content type, workflow, and review requirements shape translation budgets in different real-world situations.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {scenarios.map((item, index) => (
              <div
                key={item.title}
                className={`${index < 2 ? "border-t" : ""} border-[#DADDE2] pt-7 pb-7 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                  Example {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">{item.summary}</p>
                <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                  Cost Drivers
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#374151]">{item.drivers}</p>
                <a
                  href="https://www.stepes.com/online-translation-quote/"
                  className="mt-5 inline-flex items-center text-[15px] font-semibold text-[#9F1D55] transition hover:text-[#7A1542]"
                >
                  Get an accurate quote for your project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                How to Lower Translation Costs Without Sacrificing Quality
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Strong cost control usually comes from better process design, cleaner inputs, and the right workflow for the content rather than from cutting quality blindly.
              </p>
            </div>

            <div>
              <div className="grid gap-x-12 gap-y-0 lg:grid-cols-2">
                {savingsTips.map((item, index) => (
                  <div
                    key={item.title}
                    className={`${index < 2 ? "border-t" : ""} border-[#E5E7EB] pt-6 pb-6 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C11D63]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-7 text-[#4B5563]">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[820px] text-[14px] leading-7 text-[#6B7280]">
                The biggest long-term savings usually come from better reuse, earlier planning, cleaner source content, and stronger workflow alignment across recurring translation work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFCFE] border-t border-[#F3D7E3] border-b border-[#F3D7E3] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                What Information Do You Need for a Translation Quote?
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                A more complete brief usually leads to a faster, more accurate quote and a workflow recommendation that fits the real scope of the project.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#F3D7E3] bg-white shadow-[0_10px_30px_rgba(193,29,99,0.04)]">
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="p-6 lg:p-8">
                  <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {quoteChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#C11D63]" />
                        <p className="text-[16px] leading-7 text-[#374151]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#F3D7E3] bg-[#FFF8FB] p-6 lg:border-l lg:border-t-0 lg:p-8">
                  <h3 className="text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                    Upload your files for a translation quote.
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-[#4B5563]">
                    Share your source files, target languages, timeline, and review needs to get a more accurate estimate and delivery plan.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://www.stepes.com/online-translation-quote/"
                      className="inline-flex items-center rounded-full bg-[#C11D63] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#A71954]"
                    >
                      Get an Instant Quote
                    </a>
                    <a
                      href="https://www.stepes.com/contact-sales/"
                      className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-[15px] font-semibold text-[#111827] transition hover:border-[#D1D5DB] hover:bg-[#FAFAFA]"
                    >
                      Contact Stepes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Enterprise Translation Cost Planning
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Larger organizations usually benefit most when translation budgeting is tied to long-term multilingual operations rather than to isolated project quotes.
              </p>
            </div>

            <div>
              <p className="max-w-[820px] text-[18px] leading-8 text-[#374151]">
                Enterprise translation planning becomes more efficient when teams treat language as an operational system rather than a one-time purchase. That means improving reuse, governance, reporting, and cross-market consistency over time.
              </p>
              <div className="mt-8 border-t border-[#E5E7EB]">
                {enterprisePlanning.map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid gap-6 border-b border-[#E5E7EB] py-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-8 ${index % 2 === 1 ? "bg-[#FCFCFD]" : "bg-transparent"}`}
                  >
                    <div className="lg:pr-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-3 text-[22px] leading-8 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[24px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-[760px] text-[16px] leading-7 text-[#4B5563]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] bg-[#F6F6F7] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Translation Cost FAQ
              </h2>
              <p className="mt-5 max-w-[300px] text-[16px] leading-7 text-[#4B5563]">
                Clear answers to common pricing questions can help buyers choose the right workflow before requesting a quote.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)]">
              {faqs.map((item, index) => (
                <details
                  key={item.q}
                  className={`${index !== 0 ? "border-t border-[#E5E7EB]" : ""} group px-6 py-5 sm:px-8`}
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[18px] leading-7 font-semibold tracking-[-0.02em] text-[#111827] lg:text-[20px]">
                    <span>{item.q}</span>
                    <span className="mt-1 text-[#9F1D55] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[840px] text-[16px] leading-7 text-[#4B5563]">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 max-w-[820px] text-[14px] leading-7 text-[#6B7280]">
              These answers are meant to clarify how translation pricing works in practice. A complete quote still depends on the files, workflow, review level, and delivery needs of the specific project.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E7EB] bg-[#FFF8FB] px-5 sm:px-6 lg:px-10 xl:px-14 py-16 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[780px]">
              <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#111827] lg:text-[36px]">
                Get an Accurate Translation Quote
              </h2>
              <p className="mt-4 text-[18px] leading-8 text-[#4B5563]">
                Every translation project is different. Upload your files or tell us about your content, languages, timeline, and quality requirements, and Stepes will help you choose the most efficient translation workflow for your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.stepes.com/online-translation-quote/"
                className="inline-flex items-center rounded-full bg-[#C11D63] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#A71954]"
              >
                Get an Instant Quote
              </a>
              <a
                href="https://www.stepes.com/contact-sales/"
                className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-[15px] font-semibold text-[#111827] transition hover:border-[#D1D5DB] hover:bg-[#FAFAFA]"
              >
                Contact Stepes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
