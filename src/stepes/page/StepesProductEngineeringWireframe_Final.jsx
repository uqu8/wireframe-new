export default function StepesProductEngineeringWireframe() {
  const proofItems = [
    {
      title: "Software, Apps & Digital Products",
      text: "UI strings, product content, documentation, and customer experiences localized as part of the product lifecycle.",
    },
    {
      title: "AI + Expert Human Review",
      text: "AI-powered workflows combined with professional validation for customer-facing, technical, and high-visibility content.",
    },
    {
      title: "Connected Enterprise Workflows",
      text: "APIs, structured files, recurring releases, and managed multilingual delivery without disconnected handoffs.",
    },
    {
      title: "Global Product Quality",
      text: "Terminology, context, linguistic QA, and localization testing that protect the localized experience.",
    },
  ];

  const challengeRows = [
    {
      number: "01",
      title: "Late Localization Handoffs",
      text: "Localization begins too late, compressing translation, review, and QA into the final release window.",
    },
    {
      number: "02",
      title: "Manual Content Coordination",
      text: "Exports, imports, and spreadsheets create unnecessary work across product and engineering teams.",
    },
    {
      number: "03",
      title: "Missing Context and Consistency",
      text: "Without screenshots, UI location, and controlled terminology, strings are translated without enough product context.",
    },
    {
      number: "04",
      title: "Late-Stage Quality Risk",
      text: "Variables, formatting, and UX issues are discovered too late, when the product is almost ready to ship.",
    },
  ];

  const localizationColumns = [
    {
      title: "Software and Application Interfaces",
      intro:
        "Stepes supports the multilingual content product and engineering teams manage directly inside digital experiences.",
      items: [
        "Web and SaaS applications",
        "Mobile applications",
        "Enterprise software",
        "User-interface strings",
        "Navigation and menus",
        "Dialog boxes",
        "Forms and field labels",
        "Error messages",
        "System notifications",
        "Embedded and connected-product interfaces",
      ],
    },
    {
      title: "Product Experience Content",
      intro:
        "The product experience extends beyond strings. Stepes helps localize the content that supports adoption, retention, and customer use.",
      items: [
        "Product onboarding",
        "In-app guidance",
        "Tooltips",
        "Feature descriptions",
        "Customer portals",
        "User dashboards",
        "Release communications",
        "Product websites",
        "Subscription and account content",
      ],
    },
    {
      title: "Technical and Support Content",
      intro:
        "Product localization also includes the documentation, training, and support content users depend on before and after release.",
      items: [
        "Help centers",
        "Knowledge bases",
        "User documentation",
        "Developer documentation",
        "API documentation",
        "Release notes",
        "Troubleshooting content",
        "Product training",
        "Technical manuals",
        "Customer-support content",
      ],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Product Content Intake",
      text: "Receive software strings, application resources, structured files, documentation, screenshots, or content submitted through connected workflows.",
    },
    {
      step: "02",
      title: "Content Analysis and Preparation",
      text: "Identify new and changed content, preserve non-translatable elements, analyze available translation memory, and prepare content for the correct workflow.",
    },
    {
      step: "03",
      title: "AI and Language-Asset Application",
      text: "Apply approved terminology, translation memory, existing product language, and appropriate AI translation resources.",
    },
    {
      step: "04",
      title: "Expert Linguistic Validation",
      text: "Route content to qualified linguists and reviewers with product context, instructions, screenshots, and terminology guidance.",
    },
    {
      step: "05",
      title: "Localization Quality Assurance",
      text: "Check linguistic quality, consistency, variables, tags, formatting, length constraints, locale conventions, and other product-specific requirements.",
    },
    {
      step: "06",
      title: "Approval and Delivery",
      text: "Complete required reviews and return approved multilingual content through the agreed delivery process.",
    },
  ];

  const processRows = [
    {
      title: "API-Enabled Translation Workflows",
      text: "Programmatically submit content, monitor translation progress, and retrieve completed language content through supported APIs.",
      linkLabel: "Translation API",
      href: "https://www.stepes.com/translation-api/",
    },
    {
      title: "Structured Software File Workflows",
      text: "Process recurring software-resource files while preserving keys, variables, tags, and other non-translatable elements.",
      linkLabel: "File format support",
      href: "https://www.stepes.com/resources/file-formats/",
    },
    {
      title: "Continuous Localization Workflows",
      text: "Move frequently changing product content through translation and review in coordination with ongoing development and releases.",
      linkLabel: "Workflow automation",
      href: "https://www.stepes.com/translation-service-automation/",
    },
    {
      title: "Managed Product Localization",
      text: "Let Stepes coordinate professional linguists, reviewers, terminology, quality assurance, approvals, and delivery.",
      linkLabel: "Enterprise translation management",
      href: "https://www.stepes.com/enterprise-translation-management/",
    },
    {
      title: "Custom Workflow Design",
      text: "Develop an appropriate operating model around your products, content sources, internal reviewers, release processes, and quality requirements.",
      linkLabel: "Talk to Stepes",
      href: "https://www.stepes.com/contact-sales/",
    },
  ];

  const aiQualityPillars = [
    {
      title: "Reuse Approved Product Language",
      text: "Apply translation memory and previously approved content to support consistency across releases.",
    },
    {
      title: "Control Product Terminology",
      text: "Maintain preferred names for features, commands, products, services, and technical concepts.",
    },
    {
      title: "Accelerate Suitable Content With AI",
      text: "Use AI-assisted translation where it provides meaningful speed and scale for the right content type.",
    },
    {
      title: "Apply Expert Review Where It Matters",
      text: "Route customer-facing, technical, sensitive, or high-impact content to professional linguists and reviewers.",
    },
  ];

  const qaColumns = [
    {
      title: "Protect String and Code Integrity",
      items: [
        "Variables and placeholders",
        "HTML and XML tags",
        "Resource keys",
        "Escape characters",
        "Markup",
        "Non-translatable product names",
        "Character encoding",
        "String concatenation risks",
      ],
    },
    {
      title: "Translate With Product Context",
      items: [
        "Screenshots",
        "UI location",
        "Character constraints",
        "User action or intent",
        "Product terminology",
        "Adjacent strings",
        "In-context review",
        "Design references",
      ],
    },
    {
      title: "Adapt to Local User Expectations",
      items: [
        "Number formats",
        "Date and time formats",
        "Currency",
        "Units of measurement",
        "Address conventions",
        "Sorting and alphabetical behavior",
        "Bidirectional and right-to-left languages",
        "Locale-specific interface conventions",
      ],
    },
    {
      title: "Validate the Localized Experience",
      items: [
        "Linguistic review",
        "Cosmetic UI review",
        "Text expansion",
        "Truncation",
        "Line breaks",
        "Layout conflicts",
        "Incorrect context",
        "Functional localization issues",
      ],
    },
  ];

  const ecosystem = [
    {
      title: "Product Interface",
      text: "Software strings, applications, dashboards, and embedded interfaces.",
    },
    {
      title: "Documentation",
      text: "User guides, developer documentation, technical manuals, and release notes.",
    },
    {
      title: "Adoption and Training",
      text: "Onboarding, tutorials, learning content, and product education.",
    },
    {
      title: "Help and Support",
      text: "Knowledge bases, troubleshooting, customer portals, and support content.",
    },
    {
      title: "Product Communications",
      text: "Feature announcements, release communications, and product websites.",
    },
  ];

  const deliveryModels = [
    {
      title: "New Product or Market Launch",
      intro:
        "For teams localizing a new product, application, major release, or international-market launch.",
      items: [
        "Initial terminology development",
        "Product-content inventory",
        "Translation memory setup",
        "UI and documentation localization",
        "Localization testing",
        "Launch coordination",
      ],
    },
    {
      title: "Continuous Product Localization",
      intro:
        "For teams shipping recurring releases, adding features, or updating high-volume product content.",
      items: [
        "Recurring content intake",
        "Changed-content identification",
        "Reuse of approved translations",
        "Ongoing linguistic review",
        "Release-aligned delivery",
        "Continuous terminology updates",
      ],
    },
    {
      title: "Managed Enterprise Product Program",
      intro:
        "For organizations with multiple products, business units, repositories, internal reviewers, and international markets.",
      items: [
        "Standardized workflows",
        "Central language assets",
        "Multiple review paths",
        "Program governance",
        "Reporting and visibility",
        "Enterprise support",
      ],
    },
  ];



  const governanceRows = [
    {
      title: "Defined Roles and Review Stages",
      text: "Establish who submits, reviews, approves, and receives multilingual product content across teams and markets.",
    },
    {
      title: "Central Language Assets",
      text: "Manage translation memory, approved terminology, product instructions, and reusable language across releases.",
    },
    {
      title: "Status and Delivery Visibility",
      text: "Track work in progress, review readiness, approvals, and delivery milestones without relying on separate spreadsheets.",
    },
    {
      title: "Version and Project History",
      text: "Maintain a clear record of source updates, translated content, reviewer decisions, and delivered versions.",
    },
    {
      title: "Quality and Security Controls",
      text: "Apply documented QA steps and secure content handling appropriate to the product, audience, and business risk.",
    },
    {
      title: "Enterprise Program Support",
      text: "Coordinate multiple products, languages, business units, and release cadences through one operating model.",
    },
  ];

  const whyStepes = [
    {
      title: "Connected Technology and Language Services",
      text: "Bring workflow automation, AI translation, professional linguists, project management, review, and QA together with one partner.",
    },
    {
      title: "Product and Technical Expertise",
      text: "Support software interfaces, apps, developer content, technical documentation, training, and customer support experiences.",
    },
    {
      title: "Flexible Quality Models",
      text: "Match the level of human validation to the content type, audience, visibility, and business impact.",
    },
    {
      title: "Consistency Across Releases",
      text: "Use translation memory and terminology management to preserve approved product language as features and content evolve.",
    },
    {
      title: "Global Delivery at Enterprise Scale",
      text: "Coordinate recurring multilingual requirements across products, teams, content types, and international markets.",
    },
  ];

  const practiceStreams = [
    {
      label: "Product UI",
      text: "New and changed strings from recurring product releases.",
    },
    {
      label: "Documentation",
      text: "Help-center articles, developer content, and release notes.",
    },
    {
      label: "Language Assets",
      text: "Approved terminology, translation memory, and product instructions.",
    },
  ];

  const practiceOutcomes = [
    "Fewer manual handoffs between product, engineering, reviewers, and linguists",
    "More consistent product language across UI, documentation, and support content",
    "Clearer review status and release readiness across target languages",
    "A localization model that can expand as products, markets, and content volumes grow",
  ];

  const faqs = [
    {
      question: "What is product localization?",
      answer: "Product localization adapts the complete product experience for users in different languages and markets. It can include software interfaces, apps, onboarding, documentation, help content, locale conventions, review, testing, and ongoing multilingual delivery.",
    },
    {
      question: "How is product localization different from software translation?",
      answer: "Software translation focuses primarily on the language inside an application. Product localization is broader and can also include workflow integration, terminology governance, documentation, locale adaptation, in-context review, localization QA, testing, and release coordination.",
    },
    {
      question: "How does localization fit into software development?",
      answer: "Localization can be connected to product delivery through structured content intake, recurring file or API workflows, change analysis, translation memory, terminology, expert review, QA, approvals, and release-aligned delivery.",
    },
    {
      question: "Which software and product file formats can Stepes translate?",
      answer: "Stepes supports a wide range of structured software resources, documents, web content, and technical files. The appropriate workflow depends on the format, content structure, update frequency, and delivery requirements.",
    },
    {
      question: "Can Stepes support continuous localization?",
      answer: "Yes. Stepes can support recurring product updates through structured file handling, supported APIs, translation automation, language-asset reuse, professional review, and managed delivery aligned with ongoing releases.",
    },
    {
      question: "How are variables, placeholders, and tags protected during translation?",
      answer: "Workflows can identify and preserve non-translatable elements such as variables, placeholders, keys, markup, and tags. Automated checks and linguistic QA help confirm that protected elements remain intact before delivery.",
    },
    {
      question: "Does Stepes provide in-context review and localization testing?",
      answer: "Stepes can support screenshots, UI location, character constraints, contextual guidance, linguistic review, cosmetic UI review, text-expansion checks, and applicable functional localization testing.",
    },
    {
      question: "How does AI translation work with professional human review?",
      answer: "AI translation can accelerate suitable content, while translation memory and approved terminology support consistency. Professional linguists and reviewers validate customer-facing, technical, sensitive, or high-impact content according to the required quality level.",
    },
    {
      question: "Can one program cover UI strings, documentation, help content, and release notes?",
      answer: "Yes. A coordinated product-localization program can manage multiple content streams while sharing approved terminology, translation memory, review guidance, quality controls, and delivery governance across the product experience.",
    },
  ];

  const relatedSolutions = [
    {
      title: "Software Translation Services",
      text: "Localize software interfaces, applications, help content, and digital product experiences.",
      href: "https://www.stepes.com/software-translation-services/",
    },
    {
      title: "Translation API",
      text: "Connect supported applications and content workflows to Stepes translation services.",
      href: "https://www.stepes.com/translation-api/",
    },
    {
      title: "Workflow Automation",
      text: "Reduce repetitive localization coordination and streamline multilingual delivery.",
      href: "https://www.stepes.com/translation-service-automation/",
    },
    {
      title: "Technical Translation Services",
      text: "Translate product documentation, manuals, specifications, and engineering content.",
      href: "https://www.stepes.com/technical-translation-services/",
    },
    {
      title: "Translation Memory",
      text: "Reuse approved translations across product releases, documentation, and content types.",
      href: "https://www.stepes.com/translation-memory-management/",
    },
    {
      title: "Terminology Management",
      text: "Maintain consistent feature names, commands, product terms, and technical language.",
      href: "https://www.stepes.com/terminology-management/",
    },
    {
      title: "Enterprise Translation Management",
      text: "Centralize requests, reviews, language assets, quality, delivery, and visibility.",
      href: "https://www.stepes.com/enterprise-translation-management/",
    },
    {
      title: "Security and Compliance",
      text: "Learn how Stepes supports secure enterprise translation and content handling.",
      href: "https://www.stepes.com/security-compliance/",
    },
  ];

  const linkClass =
    "inline-flex items-center gap-2 text-[15px] font-semibold text-[#C11D63] hover:text-[#A71954] transition-colors";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-5 md:px-6 lg:px-10 xl:px-14">
        <section className="pb-20 pt-[96px] sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-[104px]">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Product &amp; Engineering Teams
            </div>
            <h1 className="mx-auto max-w-[860px] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[48px]">
              Product Localization Built for Engineering Teams
            </h1>
            <p className="mx-auto mt-6 max-w-[780px] text-[18px] leading-8 text-slate-600">
              Connect software, app, UI, and technical content to AI-powered translation, expert human validation, terminology control, and localization QA so multilingual releases stay aligned with product development.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.stepes.com/contact-sales/"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C11D63] px-6 py-3 text-center text-[16px] font-semibold text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition-colors hover:bg-[#A71954] sm:w-auto"
              >
                Talk to a Product Localization Expert
              </a>
              <a
                href="https://www.stepes.com/software-translation-services/"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-[16px] font-semibold text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              >
                Explore Software Localization
              </a>
            </div>
            <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-6 text-slate-500">
              For SaaS platforms, mobile apps, enterprise software, connected products, and technical content.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
            <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#faf7f9_100%)] px-5 py-4 sm:px-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[15px] font-semibold text-slate-950">Product Localization Workspace</div>
                  <div className="mt-1 text-[14px] text-slate-500">
                    Product release · English to Spanish · Continuous localization workflow
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FDF2F7] px-3 py-1 text-[12px] font-medium text-[#9F1D55]">
                    Expert review in progress
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-700">
                    QA checks active
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.35fr_0.85fr]">
              <div className="border-b border-slate-200 p-4 lg:border-b-0 lg:border-r lg:p-5">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-3">
                  <div className="grid grid-cols-[1.1fr_1.1fr_0.7fr] gap-3 border-b border-slate-200 pb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:hidden">
                    <div>Source String</div>
                    <div>Localized String</div>
                    <div>Status</div>
                  </div>
                  <div className="space-y-3 pt-3">
                    {[
                      {
                        key: "account.available_balance",
                        source: "Available balance",
                        localized: "Saldo disponible",
                        status: "Expert review",
                      },
                      {
                        key: "payment.confirm_transfer",
                        source: "Confirm transfer",
                        localized: "Confirmar transferencia",
                        status: "QA passed",
                      },
                      {
                        key: "billing.amount_due",
                        source: "Amount due: {amount}",
                        localized: "Importe pendiente: {amount}",
                        status: "Variable protected",
                      },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="grid gap-3 rounded-[20px] border border-slate-200 bg-white p-4 sm:grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_0.7fr]"
                      >
                        <div>
                          <div className="mb-2 text-[12px] font-medium text-[#9F1D55]">{item.key}</div>
                          <div className="text-[15px] font-medium leading-6 text-slate-950">{item.source}</div>
                        </div>
                        <div>
                          <div className="mb-2 text-[12px] font-medium text-slate-500">Localized</div>
                          <div className="text-[15px] font-medium leading-6 text-slate-950">{item.localized}</div>
                        </div>
                        <div className="flex items-start">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-700">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-4 lg:p-5">
                <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Approved Terminology
                  </div>
                  <div className="mt-4 space-y-3 text-[15px] leading-6 text-slate-900">
                    <div className="flex flex-col items-start gap-2 rounded-[18px] bg-[#FDF2F7] px-3 py-3 sm:flex-row sm:justify-between sm:gap-4">
                      <span>Available balance</span>
                      <span className="font-medium text-[#9F1D55]">Saldo disponible</span>
                    </div>
                    <div className="flex flex-col items-start gap-2 rounded-[18px] bg-slate-50 px-3 py-3 sm:flex-row sm:justify-between sm:gap-4">
                      <span>Confirm transfer</span>
                      <span className="font-medium text-slate-900">Confirmar transferencia</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    QA Indicators
                  </div>
                  <div className="mt-4 space-y-2 text-[15px] text-slate-900">
                    <div className="flex flex-col items-start gap-2 rounded-[18px] bg-slate-50 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
                      <span>Variables and placeholders</span>
                      <span className="font-medium text-emerald-700">Protected</span>
                    </div>
                    <div className="flex flex-col items-start gap-2 rounded-[18px] bg-slate-50 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
                      <span>Terminology alignment</span>
                      <span className="font-medium text-emerald-700">Passed</span>
                    </div>
                    <div className="flex flex-col items-start gap-2 rounded-[18px] bg-slate-50 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
                      <span>Length and layout review</span>
                      <span className="font-medium text-slate-900">Ready for UI check</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Localized Product Preview
                      </div>
                      <div className="mt-1 text-[14px] text-slate-500">Customer account dashboard</div>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[12px] font-medium text-slate-700">es-ES</span>
                  </div>
                  <div className="mt-4 rounded-[20px] border border-white bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                    <div className="h-2.5 w-28 rounded-full bg-slate-200" />
                    <div className="mt-5 rounded-[16px] bg-[#FDF2F7] p-4">
                      <div className="text-[14px] text-slate-500">Saldo disponible</div>
                      <div className="mt-1 text-[28px] font-semibold tracking-[-0.02em] text-slate-950">€12,480</div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-[14px] bg-slate-50 p-3 text-[14px] text-slate-700">Transferencias</div>
                      <div className="rounded-[14px] bg-slate-50 p-3 text-[14px] text-slate-700">Pagos</div>
                    </div>
                    <div className="mt-4 inline-flex rounded-full bg-[#C11D63] px-4 py-2 text-[14px] font-medium text-white">
                      Confirmar transferencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-14 lg:pb-20">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
            <div className="grid sm:grid-cols-1 lg:grid-cols-4">
              {proofItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-6 py-7 ${index !== proofItems.length - 1 ? "lg:border-r lg:border-slate-200" : ""} ${index < proofItems.length - 1 ? "border-b border-slate-200 sm:last:border-b-0 lg:border-b-0" : ""}`}
                >
                  <div className="mb-4 h-2 w-12 rounded-full bg-[#C11D63]" />
                  <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="pt-1">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Localization That Moves With Your Product
              </div>
              <h2 className="max-w-[620px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
                Ship Global Products Without Slowing Development
              </h2>
              <p className="mt-6 max-w-[700px] text-[18px] leading-8 text-slate-600">
                Product localization often becomes disconnected from development. Strings are exported late, context is missing, translations are exchanged manually, reviewers work in separate systems, and localization testing begins only after the product is nearly ready to ship.
              </p>
              <p className="mt-5 max-w-[700px] text-[18px] leading-8 text-slate-600">
                Stepes helps product and engineering teams bring translation, terminology, review, and localization QA earlier into the delivery process. This reduces manual coordination and helps multilingual content remain aligned with product updates, documentation, and release schedules.
              </p>
              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <div className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  A More Connected Flow
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-1 lg:grid-cols-4">
                  {[
                    "Source updates",
                    "AI, terminology, and reuse",
                    "Expert validation",
                    "Product QA and release",
                  ].map((item, index) => (
                    <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9F1D55]">
                        Step {index + 1}
                      </div>
                      <div className="mt-2 text-[15px] font-medium leading-6 text-slate-950">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <a className={linkClass} href="https://www.stepes.com/software-translation-services/">
                    Explore software localization
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-200 px-6 py-5 sm:px-5">
                <div className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  What Slows Multilingual Releases
                </div>
                <p className="mt-3 max-w-[760px] text-[16px] leading-7 text-slate-600">
                  Common breakdowns appear when localization is treated as a final handoff instead of a connected product workflow.
                </p>
              </div>
              <div className="divide-y divide-slate-200">
                {challengeRows.map((row) => (
                  <div key={row.title} className="grid gap-4 px-6 py-6 sm:px-5 lg:grid-cols-[76px_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF2F7] text-[13px] font-semibold tracking-[0.08em] text-[#9F1D55]">
                      {row.number}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 md:text-[22px] lg:text-[24px]">
                        {row.title}
                      </h3>
                      <p className="mt-3 max-w-[640px] text-[16px] leading-7 text-slate-600">{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Product Content Scope
              </div>
              <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
                What Product and Engineering Teams Localize
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-slate-600">
                Product localization covers more than UI strings. Stepes supports the multilingual content that shapes software experiences, technical enablement, product adoption, and customer support.
              </p>
              <div className="mt-7 space-y-3">
                <a className={linkClass} href="https://www.stepes.com/software-translation-services/">
                  Software and application localization
                  <span aria-hidden="true">→</span>
                </a>
                <a className={linkClass} href="https://www.stepes.com/technical-translation-services/">
                  Technical manuals and documentation
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
              <div className="grid lg:grid-cols-3">
                {localizationColumns.map((column, index) => (
                  <div
                    key={column.title}
                    className={`px-6 py-6 ${index !== localizationColumns.length - 1 ? "lg:border-r lg:border-slate-200" : ""} ${index < localizationColumns.length - 1 ? "border-b border-slate-200 lg:border-b-0" : ""}`}
                  >
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                      {column.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-7 text-slate-600">{column.intro}</p>
                    <ul className="mt-5 space-y-3 text-[15px] leading-6 text-slate-700">
                      {column.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C11D63]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="overflow-hidden rounded-[32px] bg-slate-950 px-6 py-8 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)] sm:px-5 lg:px-8 lg:py-10">
            <div className="max-w-[820px]">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F2A8C9]">
                Coordinated Workflow
              </div>
              <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[30px] md:text-[32px] lg:text-[36px]">
                A Connected Product Localization Workflow
              </h2>
              <p className="mt-6 max-w-[820px] text-[18px] leading-8 text-slate-300">
                Stepes brings product content, language technology, professional linguists, reviewers, and localization QA into one coordinated workflow. The process can be configured around the content, release cadence, target markets, and required level of human validation.
              </p>
            </div>

            <div className="mt-10 hidden lg:block">
              <div className="relative">
                <div className="absolute left-[3%] right-[3%] top-7 h-px bg-slate-700" />
                <div className="grid grid-cols-6 gap-5">
                  {workflowSteps.map((item) => (
                    <div key={item.step} className="relative">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C11D63]/40 bg-[#C11D63]/15 text-[13px] font-semibold tracking-[0.12em] text-[#F7C1D7]">
                        {item.step}
                      </div>
                      <div className="mt-5 text-center">
                        <div className="text-[18px] font-semibold leading-7 text-white">{item.title}</div>
                        <div className="mt-3 text-[14px] leading-6 text-slate-300">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:hidden">
              {workflowSteps.map((item) => (
                <div key={item.step} className="rounded-[22px] border border-slate-800 bg-slate-900/80 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C11D63]/15 text-[12px] font-semibold tracking-[0.12em] text-[#F7C1D7]">
                      {item.step}
                    </div>
                    <div className="text-[18px] font-semibold text-white">{item.title}</div>
                  </div>
                  <p className="mt-3 text-[15px] leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr]">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Operational Fit
              </div>
              <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
                Localization That Fits Your Development Process
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-slate-600">
                Product teams do not all localize the same way. Stepes supports API-enabled operations, structured file workflows, continuous release models, managed multilingual delivery, and workflow design aligned with your development process.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="divide-y divide-slate-200">
                {processRows.map((row) => (
                  <div key={row.title} className="grid gap-4 px-6 py-6 sm:px-5 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-8">
                    <div>
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                        {row.title}
                      </h3>
                      <p className="mt-3 max-w-[660px] text-[16px] leading-7 text-slate-600">{row.text}</p>
                    </div>
                    <div className="pt-1 lg:text-right">
                      <a className={linkClass} href={row.href}>
                        {row.linkLabel}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Quality Model
              </div>
              <h2 className="max-w-[580px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
                AI-Powered Translation. Expert-Verified Product Quality.
              </h2>
              <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-slate-600">
                Different product content carries different levels of risk. A high-volume knowledge base may require a different workflow from customer-facing UI text, safety instructions, or business-critical product documentation.
              </p>
              <p className="mt-5 max-w-[620px] text-[18px] leading-8 text-slate-600">
                Stepes combines AI translation, translation memory, approved terminology, professional linguists, review workflows, and quality assurance so each content stream can receive the appropriate level of validation.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <a className={linkClass} href="https://www.stepes.com/translation-memory-management/">
                  Translation memory
                  <span aria-hidden="true">→</span>
                </a>
                <a className={linkClass} href="https://www.stepes.com/terminology-management/">
                  Terminology management
                  <span aria-hidden="true">→</span>
                </a>
                <a className={linkClass} href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/">
                  AI + human translation workflow
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {aiQualityPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 h-2 w-12 rounded-full bg-[#C11D63]" />
                  <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="mb-10 max-w-[860px]">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Technical Quality Controls
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
              Quality Controls for Software and Digital Products
            </h2>
            <p className="mt-6 text-[18px] leading-8 text-slate-600">
              Product localization quality goes beyond linguistic accuracy. Stepes helps protect strings, context, locale behavior, and the final user experience across software and digital content.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="grid lg:grid-cols-2">
              {qaColumns.map((column, index) => (
                <div
                  key={column.title}
                  className={`px-5 py-6 sm:px-6 ${index < qaColumns.length - 1 ? "border-b border-slate-200 lg:border-b-0" : ""} ${index < 2 ? "lg:border-b lg:border-slate-200" : ""} ${index % 2 === 0 ? "lg:border-r lg:border-slate-200" : ""}`}
                >
                  <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                    {column.title}
                  </h3>
                  <ul className="mt-5 grid gap-3 text-[15px] leading-6 text-slate-700 sm:grid-cols-1 lg:grid-cols-2">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 rounded-[16px] bg-slate-50 px-3 py-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C11D63]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Product Content Ecosystem
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
              One Localization Program Across the Product Experience
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-8 text-slate-600">
              Users experience a product across more than the interface. They move between onboarding, software screens, documentation, help content, release communications, training, and customer support.
            </p>
            <p className="mx-auto mt-5 max-w-[820px] text-[18px] leading-8 text-slate-600">
              Stepes helps organizations coordinate these content streams so approved terminology and product language remain consistent across the complete customer experience.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
            <div className="grid sm:grid-cols-1 xl:grid-cols-5">
              {ecosystem.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-5 py-6 ${index !== ecosystem.length - 1 ? "xl:border-r xl:border-slate-200" : ""} ${index < ecosystem.length - 1 ? "border-b border-slate-200 xl:border-b-0" : ""}`}
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#C11D63]" />
                  <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="mb-10 max-w-[860px]">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Engagement Models
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[30px] md:text-[32px] lg:text-[36px]">
              Built for Product Launches and Continuous Delivery
            </h2>
            <p className="mt-6 text-[18px] leading-8 text-slate-600">
              Product organizations localize in different operating modes. Stepes supports launch-focused, continuous, and managed enterprise models without forcing every team into the same workflow.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {deliveryModels.map((model) => (
              <div key={model.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                <div className="mb-4 h-2 w-12 rounded-full bg-[#C11D63]" />
                <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                  {model.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-slate-600">{model.intro}</p>
                <div className="mt-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Typical needs
                </div>
                <ul className="mt-4 space-y-3 text-[15px] leading-6 text-slate-700">
                  {model.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#C11D63]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
            <div className="grid xl:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-slate-800 px-6 py-8 sm:px-5 lg:px-8 lg:py-10 xl:border-b-0 xl:border-r">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F2A8C9]">
                  Enterprise Governance
                </div>
                <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                  Enterprise Governance Without Engineering Overhead
                </h2>
                <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-slate-300">
                  Product localization requires operational control, but engineers should not have to manage translators, chase reviews, reconcile terminology, or manually track every language.
                </p>
                <p className="mt-5 max-w-[620px] text-[18px] leading-8 text-slate-300">
                  Stepes provides the workflow, language resources, and managed services needed to coordinate multilingual delivery across product teams, reviewers, content owners, and markets.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.stepes.com/enterprise-translation-management/"
                    className="inline-flex items-center justify-center rounded-full bg-[#C11D63] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#A71954]"
                  >
                    Explore Enterprise Translation Management
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2">
                {governanceRows.map((row, index) => (
                  <div
                    key={row.title}
                    className={`px-5 py-6 sm:px-6 ${index < governanceRows.length - 1 ? "border-b border-slate-800 md:border-b-0" : ""} ${index < governanceRows.length - 2 ? "md:border-b md:border-slate-800" : ""} ${index % 2 === 0 ? "md:border-r md:border-slate-800" : ""}`}
                  >
                    <div className="mb-4 h-2 w-11 rounded-full bg-[#C11D63]" />
                    <h3 className="text-[21px] font-semibold leading-8 tracking-[-0.02em] text-white">
                      {row.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-300">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="mb-10 grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Why Stepes
              </div>
              <h2 className="max-w-[540px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Why Product Teams Choose Stepes
              </h2>
            </div>
            <p className="max-w-[760px] text-[18px] leading-8 text-slate-600 xl:justify-self-end">
              Stepes combines localization technology with professional language services, giving product organizations one operating model for software, documentation, ongoing releases, expert validation, and enterprise delivery.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="divide-y divide-slate-200">
              {whyStepes.map((item, index) => (
                <div key={item.title} className="grid gap-4 px-6 py-6 sm:px-5 lg:grid-cols-[72px_0.72fr_1.28fr] lg:items-start lg:gap-8">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    0{index + 1}
                  </div>
                  <h3 className="text-[21px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr]">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Product Localization in Practice
              </div>
              <h2 className="max-w-[580px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                How a Continuous SaaS Localization Program Can Work
              </h2>
              <p className="mt-6 max-w-[640px] text-[18px] leading-8 text-slate-600">
                For a SaaS team releasing new features every week, UI strings, help-center updates, developer content, and release notes can move through one coordinated multilingual workflow instead of separate manual processes.
              </p>
              <p className="mt-5 max-w-[640px] text-[18px] leading-8 text-slate-600">
                Stepes can coordinate structured intake, approved language assets, AI-assisted translation, expert validation, product-focused QA, approvals, and delivery through one release-aligned operating model.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 px-6 py-5 sm:px-5">
                <div className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Illustrative Program Model
                </div>
              </div>
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-slate-200 px-6 py-6 sm:px-5 lg:border-b-0 lg:border-r">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#9F1D55]">
                    Content Streams
                  </div>
                  <div className="mt-5 space-y-4">
                    {practiceStreams.map((stream) => (
                      <div key={stream.label} className="rounded-[20px] border border-slate-200 bg-white px-4 py-4">
                        <div className="text-[16px] font-semibold text-slate-950">{stream.label}</div>
                        <div className="mt-2 text-[15px] leading-6 text-slate-600">{stream.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-6 sm:px-5">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#9F1D55]">
                    What the Program Supports
                  </div>
                  <ul className="mt-5 space-y-4 text-[16px] leading-7 text-slate-700">
                    {practiceOutcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-[#C11D63]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 rounded-[22px] bg-[#FDF2F7] px-5 py-5">
                    <div className="text-[15px] font-semibold text-[#7A1542]">Designed around your release model</div>
                    <p className="mt-2 text-[15px] leading-7 text-slate-700">
                      The workflow can be adjusted for launch schedules, review responsibilities, target languages, content risk, and the level of human validation each content stream requires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Product Localization FAQ
              </div>
              <h2 className="max-w-[520px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Frequently Asked Questions About Product Localization
              </h2>
              <p className="mt-6 max-w-[560px] text-[18px] leading-8 text-slate-600">
                Explore practical answers about product-localization workflows, software content, AI and human review, quality controls, and continuous multilingual delivery.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="divide-y divide-slate-200">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group px-6 py-5 sm:px-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-[18px] font-semibold leading-7 text-slate-950">
                      <span>{faq.question}</span>
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#FDF2F7] text-[#9F1D55] transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[820px] pr-10 text-[16px] leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Related Product Localization Solutions
            </div>
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Connect the Capabilities Behind Global Product Delivery
            </h2>
            <p className="mx-auto mt-6 max-w-[780px] text-[18px] leading-8 text-slate-600">
              Explore the Stepes services, platform capabilities, and language assets that support software, technical content, recurring releases, and enterprise localization operations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedSolutions.map((solution) => (
              <a
                key={solution.title}
                href={solution.href}
                className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#C11D63]" />
                <h3 className="text-[19px] font-semibold leading-7 tracking-[-0.02em] text-slate-950">
                  {solution.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{solution.text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C11D63] group-hover:text-[#A71954]">
                  Explore
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-20 sm:pb-16 lg:pb-[112px]">
          <div className="relative overflow-hidden rounded-[32px] bg-[#7A1542] px-6 py-10 text-white shadow-[0_30px_80px_rgba(122,21,66,0.24)] sm:px-5 lg:px-10 lg:py-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div aria-hidden="true" className="absolute -bottom-28 right-32 h-72 w-72 rounded-full bg-[#C11D63]/30" />
            <div className="relative grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
              <div>
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F7C1D7]">
                  Product Localization for Global Growth
                </div>
                <h2 className="max-w-[760px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                  Build a Localization Workflow That Keeps Pace With Your Product
                </h2>
                <p className="mt-6 max-w-[800px] text-[18px] leading-8 text-pink-50/90">
                  Whether you are launching a new application, supporting recurring releases, or connecting multilingual content to an established product workflow, Stepes can help combine automation, AI translation, professional review, terminology control, and localization QA.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-end">
                <a
                  href="https://www.stepes.com/contact-sales/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-center text-[16px] font-semibold text-[#7A1542] transition-colors hover:bg-[#FDF2F7] sm:w-auto"
                >
                  Talk to a Product Localization Expert
                </a>
                <a
                  href="https://customer.stepes.com/instant-translation-quote/"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-[16px] font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
                >
                  Get a Translation Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
