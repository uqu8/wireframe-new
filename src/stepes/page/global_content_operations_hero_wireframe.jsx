export default function GlobalContentOperationsHeroWireframe() {
  const trustPoints = [
    "Centralized multilingual intake",
    "AI-powered translation workflows",
    "Human review by subject-matter experts",
    "Translation memory and terminology governance",
    "Visibility across spend, quality, deadlines, and delivery",
  ];

  const sources = [
    "Marketing Campaigns",
    "Product Content",
    "Legal Documents",
    "Training Materials",
    "Websites",
    "Support Content",
  ];

  const workflowSteps = [
    { title: "Intake", description: "Structured request intake", tag: "Capture" },
    { title: "AI Analysis", description: "File and scope analysis", tag: "Analyze" },
    { title: "Workflow Routing", description: "Right workflow, team, and SLA", tag: "Route" },
    { title: "Translation & Review", description: "AI-assisted translation with expert review", tag: "Translate" },
    { title: "QA", description: "Terminology and quality controls", tag: "Validate" },
    { title: "Delivery", description: "Publish-ready multilingual output", tag: "Deliver" },
    { title: "Reporting", description: "Spend, status, and performance visibility", tag: "Measure" },
  ];

  const controlRows = [
    {
      title: "Enterprise Control",
      description:
        "Standardize multilingual workflows without forcing teams into disconnected local processes.",
    },
    {
      title: "Smarter Automation",
      description:
        "Use AI where it improves speed, and apply human review where quality and subject expertise matter.",
    },
    {
      title: "Operational Visibility",
      description:
        "Give stakeholders clearer visibility into deadlines, cost, quality, delivery readiness, and program scale.",
    },
  ];

  const enterpriseChallenges = [
    "Content requests arrive from different departments with inconsistent requirements.",
    "Teams struggle to track project status, deadlines, costs, and ownership.",
    "Terminology and brand language vary across markets.",
    "Review cycles slow down product launches, campaigns, and regulatory submissions.",
    "Translation memory, glossaries, and approved language assets are not reused consistently.",
    "Business leaders lack visibility into multilingual content performance.",
  ];

  const operatingPillars = [
    {
      title: "Centralized Intake",
      description:
        "Give every team a consistent way to submit multilingual content, define requirements, upload files, choose languages, and set deadlines.",
    },
    {
      title: "Workflow Orchestration",
      description:
        "Route content by content type, language, subject matter, risk level, reviewer requirements, and delivery timeline.",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Use AI, translation memory, terminology tools, and workflow automation to accelerate analysis, quoting, routing, translation, and QA.",
    },
    {
      title: "Human Review",
      description:
        "Apply professional human review where accuracy, brand voice, regulatory requirements, or subject-matter expertise matter most.",
    },
    {
      title: "Language Asset Governance",
      description:
        "Manage approved terminology, translation memory, style preferences, and language rules across teams and markets.",
    },
    {
      title: "Visibility and Reporting",
      description:
        "Track project status, quality, spend, turnaround, deadlines, and multilingual content activity across the enterprise.",
    },
  ];

  const lifecycleStages = [
    {
      title: "Create",
      description:
        "Content is created across marketing, product, legal, training, support, and regional teams.",
    },
    {
      title: "Submit",
      description:
        "Teams submit translation requests through a structured intake process with files, languages, content type, deadlines, and instructions.",
    },
    {
      title: "Analyze",
      description:
        "Stepes analyzes files, word counts, repetitions, translation memory leverage, terminology requirements, and workflow needs.",
    },
    {
      title: "Route",
      description:
        "Projects are routed to the right AI workflows, linguists, reviewers, project managers, and subject-matter experts.",
    },
    {
      title: "Translate",
      description:
        "Content is translated using the right combination of AI translation, translation memory, professional linguists, and domain-specific resources.",
    },
    {
      title: "Review",
      description:
        "Internal reviewers, client stakeholders, and Stepes experts can review content through structured workflows.",
    },
    {
      title: "QA",
      description:
        "Multilingual QA checks support consistency, completeness, terminology, formatting, and final delivery readiness.",
    },
    {
      title: "Deliver",
      description:
        "Final content is delivered in the required format for websites, documents, software, training systems, media, or enterprise repositories.",
    },
    {
      title: "Report",
      description:
        "Teams gain visibility into content volume, languages, cost, turnaround, quality, and operational performance.",
    },
  ];

  const teams = [
    {
      title: "Localization Teams",
      description:
        "Manage multilingual programs, language assets, vendors, reviewers, and project workflows in one coordinated environment.",
    },
    {
      title: "Marketing Teams",
      description:
        "Translate campaigns, websites, product launches, brand content, social content, and regional marketing assets with consistent messaging.",
    },
    {
      title: "Product & Engineering Teams",
      description:
        "Localize software strings, product content, release notes, help centers, UI content, and agile development updates.",
    },
    {
      title: "Legal Teams",
      description:
        "Translate contracts, policies, compliance documents, legal notices, and regulated content with appropriate review and confidentiality.",
    },
    {
      title: "Life Sciences Teams",
      description:
        "Support medical, clinical, regulatory, labeling, training, and patient-facing content with specialized language workflows.",
    },
    {
      title: "Procurement Teams",
      description:
        "Centralize supplier coordination, spend visibility, project tracking, and multilingual service governance across the enterprise.",
    },
    {
      title: "Customer Support Teams",
      description:
        "Translate knowledge bases, support articles, chatbot content, help center content, and customer communications.",
    },
    {
      title: "Regional Teams",
      description:
        "Coordinate local-market review, feedback, terminology preferences, and country-specific content requirements.",
    },
  ];

  const contentTypes = [
    {
      title: "Documents",
      description:
        "Business documents, reports, presentations, contracts, manuals, policies, and enterprise communications.",
    },
    {
      title: "Websites",
      description:
        "Corporate websites, landing pages, product pages, SEO content, CMS content, and regional web experiences.",
    },
    {
      title: "Software Strings",
      description:
        "UI strings, app content, release notes, developer documentation, and agile software localization.",
    },
    {
      title: "Videos & Subtitles",
      description:
        "Training videos, marketing videos, webinars, subtitles, captions, voiceover scripts, and multimedia localization.",
    },
    {
      title: "Training Content",
      description:
        "eLearning modules, onboarding materials, compliance training, LMS content, SCORM packages, and employee learning resources.",
    },
    {
      title: "Legal & Compliance Content",
      description:
        "Contracts, policies, regulatory documents, compliance content, privacy notices, and risk-sensitive communications.",
    },
    {
      title: "Technical Manuals",
      description:
        "Product manuals, IFUs, engineering documents, technical instructions, safety content, and manufacturing documentation.",
    },
    {
      title: "Customer Support Content",
      description:
        "Help center articles, FAQs, chatbot content, knowledge bases, ticket macros, and multilingual support resources.",
    },
  ];

  const governanceItems = [
    {
      title: "Use AI Where It Adds Speed",
      description:
        "Automate file analysis, translation memory matching, draft translation, routing, quoting, and quality checks.",
    },
    {
      title: "Apply Human Review Where It Matters",
      description:
        "Use professional linguists and subject-matter experts for brand content, legal content, life sciences content, financial content, technical documentation, and high-risk communications.",
    },
    {
      title: "Govern Language Assets",
      description:
        "Maintain translation memory, terminology, style preferences, and approved language across projects and markets.",
    },
    {
      title: "Scale With Confidence",
      description:
        "Support large multilingual programs while keeping quality, consistency, and review workflows aligned.",
    },
  ];

  const governanceLinks = [
    "AI Translation & Human Review",
    "AI-Powered Translation Workflows",
    "Translation Memory",
    "Terminology Management",
    "Translation Quality Assurance",
  ];

  const platformCapabilities = [
    {
      title: "Translation Portal",
      description:
        "Centralize project requests, files, languages, instructions, approvals, communication, and delivery.",
    },
    {
      title: "APIs",
      description:
        "Connect translation workflows to websites, CMS platforms, software systems, support platforms, and enterprise applications.",
    },
    {
      title: "Translation Memory",
      description:
        "Reuse approved translations to improve consistency, reduce duplicated work, and support cost control.",
    },
    {
      title: "Terminology Management",
      description:
        "Govern product names, brand language, industry terms, regulatory terminology, and market-specific language preferences.",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routing, assignments, status updates, project milestones, reviews, and delivery notifications.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Track spend, project volume, turnaround time, languages, content types, and operational performance.",
    },
  ];

  const benefits = [
    {
      title: "Faster Global Delivery",
      description:
        "Move multilingual content through intake, translation, review, QA, and delivery with less manual coordination.",
    },
    {
      title: "More Consistent Language",
      description:
        "Use shared translation memory, terminology, and style preferences across teams, brands, regions, and content types.",
    },
    {
      title: "Better Operational Control",
      description:
        "Give stakeholders visibility into deadlines, status, costs, responsibilities, and project outcomes.",
    },
    {
      title: "Scalable AI + Human Workflows",
      description:
        "Match each content type with the right workflow, from AI-assisted translation to expert human review.",
    },
    {
      title: "Stronger Governance",
      description:
        "Support enterprise requirements for approvals, auditability, confidentiality, terminology, and quality management.",
    },
    {
      title: "Lower Content Friction",
      description:
        "Reduce duplicated work, disconnected handoffs, unclear ownership, and inconsistent regional translation practices.",
    },
  ];

  const industries = [
    {
      title: "Life Sciences",
      description:
        "Clinical, regulatory, labeling, medical, patient-facing, and training content.",
    },
    {
      title: "Financial Services",
      description:
        "Banking, insurance, investment, compliance, customer communication, and financial reporting content.",
    },
    {
      title: "Legal",
      description:
        "Contracts, policies, compliance documents, litigation materials, and legal communications.",
    },
    {
      title: "Software & SaaS",
      description:
        "UI strings, product documentation, release notes, support content, and developer materials.",
    },
    {
      title: "Manufacturing",
      description:
        "Technical manuals, safety content, product documentation, training materials, and supplier communications.",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Product content, marketplace listings, customer support, marketing campaigns, and regional commerce content.",
    },
    {
      title: "Media & Entertainment",
      description:
        "Subtitles, scripts, metadata, campaign content, platform content, and audience-facing communications.",
    },
    {
      title: "Education & Training",
      description:
        "eLearning, LMS content, employee training, certification materials, and instructional content.",
    },
  ];

  const languageStats = [
    {
      title: "100+ Languages",
      description:
        "Support for major world languages, regional language coverage, and multilingual enterprise programs.",
    },
    {
      title: "Regional Variants",
      description:
        "Locale-specific coverage for country, region, and audience requirements across global markets.",
    },
    {
      title: "Market-Specific Delivery",
      description:
        "Programs built for global rollouts, regional launches, and localized customer experiences.",
    },
  ];

  const featuredLanguages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Portuguese",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Italian",
    "Dutch",
    "Swedish",
  ];

  const relatedSolutions = [
    {
      title: "Enterprise Translation Management",
      description:
        "Centralize translation requests, workflows, reviewers, terminology, quality, delivery, and reporting.",
      href: "https://www.stepes.com/enterprise-translation-management/",
    },
    {
      title: "AI Translation & Human Review",
      description:
        "Combine AI translation speed with professional human review for quality-sensitive multilingual content.",
      href: "https://www.stepes.com/ai-translation-review/",
    },
    {
      title: "AI-Powered Translation Workflows",
      description:
        "Automate multilingual content routing, translation, review, QA, and delivery across enterprise teams.",
      href: "https://www.stepes.com/ai-powered-translation-workflows/",
    },
    {
      title: "Website Localization",
      description:
        "Translate and manage multilingual web content for global markets and regional SEO.",
      href: "https://www.stepes.com/website-translation-services/",
    },
    {
      title: "Software & App Localization",
      description:
        "Localize software strings, apps, UI content, product documentation, and release cycles.",
      href: "https://www.stepes.com/software-localization-services/",
    },
    {
      title: "Multimedia Localization",
      description:
        "Translate and localize videos, subtitles, captions, scripts, voiceovers, and digital media.",
      href: "https://www.stepes.com/multimedia-translation-services/",
    },
    {
      title: "Multilingual Customer Support",
      description:
        "Translate help centers, support articles, chatbot content, and customer service communications.",
      href: "https://www.stepes.com/customer-support-translation-service/",
    },
  ];

  const faqs = [
    {
      question: "What is global content operations?",
      answer:
        "Global content operations is the process of managing multilingual content across teams, systems, workflows, languages, reviewers, and markets. It connects content creation, translation, localization, review, QA, delivery, and reporting into one coordinated operating model.",
    },
    {
      question: "How is global content operations different from translation management?",
      answer:
        "Translation management focuses on managing translation requests, projects, linguists, assets, and delivery. Global content operations is broader. It connects translation management with content strategy, enterprise workflows, team collaboration, localization governance, system integrations, and multilingual reporting.",
    },
    {
      question: "Can Stepes support multilingual content across multiple departments?",
      answer:
        "Yes. Stepes supports multilingual workflows for localization, marketing, product, engineering, legal, life sciences, procurement, customer support, and regional teams.",
    },
    {
      question: "What types of content can Stepes manage?",
      answer:
        "Stepes supports documents, websites, software strings, videos, subtitles, training content, legal and compliance content, technical manuals, customer support content, and other enterprise content types.",
    },
    {
      question: "Does Stepes use AI for global content operations?",
      answer:
        "Yes. Stepes uses AI-powered workflows to support translation analysis, automation, routing, translation memory, terminology, and quality checks, with human review applied based on content type, quality requirements, and subject matter.",
    },
    {
      question: "Can Stepes integrate with our content systems?",
      answer:
        "Yes. Stepes supports API-powered translation workflows for websites, CMS platforms, software systems, and enterprise applications. Stepes APIs can send content for translation, retrieve quotes, check project progress, and receive translated results automatically.",
    },
    {
      question: "Does Stepes support regulated or technical content?",
      answer:
        "Yes. Stepes supports regulated, legal, technical, financial, software, manufacturing, healthcare, and life sciences content with workflows designed for terminology consistency, review, QA, and multilingual delivery.",
    },
    {
      question: "How many languages does Stepes support?",
      answer:
        "Stepes supports more than 100 languages and regional variants for global, regional, and market-specific translation programs.",
    },
  ];

  const operatingRows = [
    operatingPillars.slice(0, 2),
    operatingPillars.slice(2, 4),
    operatingPillars.slice(4, 6),
  ];

  const teamRows = [
    teams.slice(0, 2),
    teams.slice(2, 4),
    teams.slice(4, 6),
    teams.slice(6, 8),
  ];

  const platformRows = [
    platformCapabilities.slice(0, 2),
    platformCapabilities.slice(2, 4),
    platformCapabilities.slice(4, 6),
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-28 xl:px-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="px-2 md:px-0">
            <div className="px-0 pb-8 pt-2 md:pb-10 lg:pb-12">
              <div className="mx-auto max-w-[920px] text-center">
                <h1 className="mx-auto max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950 md:text-[42px] lg:text-[48px]">
                  Global Content Operations for Enterprise Translation
                </h1>
                <p className="mx-auto mt-6 max-w-[820px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                  Centralize multilingual content requests, automate translation workflows, govern terminology, and deliver global content across teams, markets, and channels with Stepes.
                </p>
                <p className="mx-auto mt-5 max-w-[800px] text-[16px] leading-7 text-slate-600">
                  From marketing campaigns and product content to legal documents, training materials, software strings, websites, and support content, Stepes helps enterprises manage multilingual content as a connected global operation.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="https://www.stepes.com/contact-sales/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C11D63] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(193,29,99,0.22)] transition hover:bg-[#A71954]"
                  >
                    Talk to an Expert
                    <span className="ml-2">→</span>
                  </a>
                  <a
                    href="https://www.stepes.com/enterprise-translation-management/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D8DCE3] bg-white px-7 text-[16px] font-semibold text-slate-800 transition hover:border-[#C11D63] hover:text-[#9F1D55]"
                  >
                    Enterprise Translation Management
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-8 flex max-w-[1120px] flex-wrap items-center justify-center gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E7E8EC] bg-[#FAFAFB] px-4 py-2.5 text-[14px] font-medium text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FDF2F7] text-[12px] font-bold text-[#C11D63]">
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E4E6EB] pt-8 md:pt-9 lg:pt-10">
              <div className="rounded-[28px] border border-[#E6E7EB] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.045)] md:p-6 lg:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                      Global Content Operations at Work
                    </div>
                    <p className="mt-2 max-w-[760px] text-[15px] leading-6 text-slate-600">
                      A premium enterprise model that connects intake, automation, review, quality, delivery, and reporting in one coordinated workflow.
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full border border-[#E3E5EA] bg-[#FAFAFB] px-4 py-2 text-[13px] font-medium text-slate-600">
                    AI + Human + Governance
                  </div>
                </div>

                <div className="mt-7 grid gap-5 lg:grid-cols-[240px_minmax(0,1.05fr)_320px] xl:grid-cols-[250px_minmax(0,1.15fr)_340px]">
                  <div className="rounded-[24px] border border-[#ECECF0] bg-[#FBFBFC] p-5 lg:p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                      Across Your Content Sources
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {sources.map((item) => (
                        <div
                          key={item}
                          className="rounded-[20px] border border-[#E8E9ED] bg-white px-4 py-4 text-center text-[14px] font-medium leading-5 text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[20px] border border-dashed border-[#E1C7D3] bg-[#FDF7FA] px-4 py-4 text-[14px] leading-6 text-slate-600">
                      One connected operating layer for multilingual content across teams, markets, and delivery channels.
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[24px] border border-[#E8E9ED] bg-[#FBFBFC]">
                    <div className="border-b border-[#E8E9ED] px-5 py-4 lg:px-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        Step-by-Step Workflow
                      </div>
                      <p className="mt-2 text-[14px] leading-6 text-slate-600">
                        A structured enterprise flow that keeps multilingual work visible, governed, and scalable from request to reporting.
                      </p>
                    </div>
                    <div className="relative px-5 py-2 lg:px-6">
                      <div className="pointer-events-none absolute bottom-8 left-[26px] top-8 border-l border-dashed border-[#D6D9E0] lg:left-[30px]" />
                      {workflowSteps.map((step, index) => (
                        <div
                          key={step.title}
                          className={`relative flex gap-4 py-4 ${index < workflowSteps.length - 1 ? "border-b border-[#E8E9ED]" : ""}`}
                        >
                          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2D0D9] bg-[#FDF2F7] text-[13px] font-semibold text-[#9F1D55] shadow-[0_6px_16px_rgba(193,29,99,0.08)]">
                            {index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <h3 className="text-[15px] font-semibold leading-6 text-slate-900">
                                {step.title}
                              </h3>
                              <span className="inline-flex w-fit items-center rounded-full border border-[#E3E5EA] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                                {step.tag}
                              </span>
                            </div>
                            <p className="mt-1 max-w-[520px] text-[14px] leading-6 text-slate-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[24px] border border-[#E8E9ED] bg-white">
                    <div className="border-b border-[#E8E9ED] px-5 py-4 lg:px-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        Designed for Enterprise Control
                      </div>
                      <p className="mt-2 text-[14px] leading-6 text-slate-600">
                        Stepes gives enterprise teams one connected operating model for multilingual content, quality, and workflow governance.
                      </p>
                    </div>
                    <div className="divide-y divide-[#E8E9ED]">
                      {controlRows.map((row) => (
                        <div key={row.title} className="px-5 py-5 lg:px-6">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                            {row.title}
                          </div>
                          <p className="mt-2 text-[14px] leading-6 text-slate-600">
                            {row.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-px border-t border-[#E8E9ED] bg-[#E8E9ED]">
                      <div className="bg-[#FBFBFC] px-5 py-4 lg:px-6">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                          Terminology & Translation Memory
                        </div>
                        <p className="mt-2 text-[13px] leading-6 text-slate-600">
                          Translation memory, terminology, and review controls.
                        </p>
                      </div>
                      <div className="bg-[#FBFBFC] px-5 py-4 lg:px-6">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                          Visibility & Reporting
                        </div>
                        <p className="mt-2 text-[13px] leading-6 text-slate-600">
                          Clear status, spend, deadlines, and delivery readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#E9D7E1] bg-[#FDF2F7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                Enterprise Problem
              </div>
              <h2 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Global Content Is Too Complex for Disconnected Workflows
              </h2>
              <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                Global companies create multilingual content across many teams, systems, regions, and channels. Without a connected operating model, translation work becomes scattered across emails, spreadsheets, portals, regional vendors, and manual approval chains.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E6E7EB] bg-[#FBFBFC] shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
              <div className="border-b border-[#E8E9ED] px-6 py-5 lg:px-8 lg:py-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                  Common Operational Challenges
                </div>
                <p className="mt-2 max-w-[760px] text-[15px] leading-7 text-slate-600">
                  As multilingual content volume grows, disconnected workflows create avoidable friction across teams, markets, and business priorities.
                </p>
              </div>
              <div className="divide-y divide-[#E8E9ED]">
                {enterpriseChallenges.map((challenge, index) => (
                  <div key={challenge} className="flex gap-4 px-6 py-5 lg:px-8">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2D0D9] bg-white text-[12px] font-semibold text-[#9F1D55]">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-[16px] leading-7 text-slate-700">{challenge}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E8E9ED] bg-white px-6 py-6 lg:px-8">
                <p className="max-w-[840px] text-[17px] leading-8 text-slate-800">
                  Stepes helps enterprises replace fragmented translation activity with structured global content operations designed for speed, quality, consistency, and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[920px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              A Connected Operating Model for Multilingual Content
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
              Stepes brings global content, translation technology, professional linguists, reviewers, and enterprise workflows into one coordinated operating model.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div>
              <div className="h-px w-16 bg-[#C11D63]" />
              <p className="mt-6 text-[18px] leading-8 text-slate-800">
                Global content operations with Stepes means centralizing multilingual intake, routing work intelligently, combining AI with human expertise, governing language assets, and giving stakeholders clearer visibility across the enterprise.
              </p>
              <p className="mt-6 max-w-[280px] text-[16px] leading-7 text-slate-600 lg:max-w-none">
                This operating model helps enterprises replace fragmented language work with one scalable framework for multilingual content planning, execution, and oversight.
              </p>
            </div>

            <div className="border-t border-[#E2E5EA]">
              {operatingRows.map((row, rowIndex) => (
                <div
                  key={`operating-row-${rowIndex}`}
                  className="grid gap-4 border-b border-[#E2E5EA] py-7 lg:grid-cols-2 lg:gap-8 lg:py-8"
                >
                  {row.map((pillar) => (
                    <div key={pillar.title}>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        {pillar.title}
                      </div>
                      <p className="mt-4 max-w-[460px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[960px] text-center">
            <div className="inline-flex items-center rounded-full border border-[#E9D7E1] bg-[#FDF2F7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
              Lifecycle Workflow
            </div>
            <h2 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Manage the Full Multilingual Content Lifecycle
            </h2>
            <p className="mx-auto mt-5 max-w-[840px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
              Stepes helps enterprises manage multilingual content from creation through delivery and reporting with one coordinated lifecycle built for speed, consistency, and operational control.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="border-b border-[#E8E9ED] px-6 py-5 lg:px-8 lg:py-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                Full Content Lifecycle
              </div>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">
                Create → Submit → Analyze → Route → Translate → Review → QA → Deliver → Report
              </p>
            </div>

            <div className="overflow-x-auto px-6 py-6 lg:px-8">
              <div className="grid min-w-[1080px] grid-cols-9 gap-4 lg:min-w-0">
                {lifecycleStages.map((stage, index) => (
                  <div key={stage.title} className="relative">
                    {index < lifecycleStages.length - 1 && (
                      <div className="pointer-events-none absolute left-[calc(100%-6px)] top-5 hidden h-px w-6 border-t border-dashed border-[#D6D9E0] lg:block" />
                    )}
                    <div className="rounded-[22px] border border-[#E8E9ED] bg-[#FBFBFC] px-3 py-4 text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#E2D0D9] bg-white text-[12px] font-semibold text-[#9F1D55]">
                        {index + 1}
                      </div>
                      <div className="mt-3 text-[14px] font-semibold leading-5 text-slate-900">
                        {stage.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E8E9ED]">
              <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-[#E8E9ED]">
                {lifecycleStages.map((stage, index) => (
                  <div
                    key={`${stage.title}-detail`}
                    className={`px-6 py-6 lg:px-7 lg:py-7 ${index < 6 ? "border-b border-[#E8E9ED]" : ""}`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                      {stage.title}
                    </div>
                    <p className="mt-3 text-[16px] leading-7 text-slate-700">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Built for Every Global Content Team
              </h2>
              <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                Global content operations require collaboration across departments. Stepes gives each team the workflows, visibility, and language support they need while keeping multilingual content centralized and consistent.
              </p>
              <p className="mt-6 max-w-[280px] text-[16px] leading-7 text-slate-600 lg:max-w-none">
                A stronger multilingual operating model helps each function move faster while staying aligned on language quality, governance, and delivery.
              </p>
            </div>

            <div className="border-t border-[#E2E5EA]">
              {teamRows.map((row, rowIndex) => (
                <div
                  key={`team-row-${rowIndex}`}
                  className="grid gap-4 border-b border-[#E2E5EA] py-7 lg:grid-cols-2 lg:gap-8 lg:py-8"
                >
                  {row.map((team) => (
                    <div key={team.title}>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        {team.title}
                      </div>
                      <p className="mt-4 max-w-[460px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                        {team.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[940px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Support Every Type of Global Content
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
              Stepes helps enterprises manage multilingual content across digital, operational, regulated, and customer-facing channels.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="border-b border-[#E8E9ED] px-6 py-5 lg:px-8 lg:py-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                Content Types We Support
              </div>
              <p className="mt-2 max-w-[860px] text-[15px] leading-7 text-slate-600">
                Stepes supports multilingual content across the formats enterprises rely on for communication, product delivery, compliance, training, and customer experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 lg:divide-x lg:divide-[#E8E9ED]">
              {contentTypes.map((contentType, index) => (
                <div
                  key={contentType.title}
                  className={`px-6 py-6 lg:px-6 lg:py-7 ${index < 4 ? "border-b border-[#E8E9ED]" : ""}`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    {contentType.title}
                  </div>
                  <p className="mt-3 text-[16px] leading-7 text-slate-700">
                    {contentType.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E8E9ED] bg-[#FBFBFC] px-6 py-5 lg:px-8">
              <p className="max-w-[980px] text-[16px] leading-7 text-slate-700">
                Stepes helps enterprises coordinate multilingual content across websites, software, documents, regulated materials, training assets, technical documentation, and customer support channels through one connected workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-[rgba(193,29,99,0.28)] bg-[rgba(193,29,99,0.14)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6B7D0]">
                AI + Human Governance
              </div>
              <h2 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                AI-Powered Operations. Human-Governed Quality.
              </h2>
              <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-slate-300 md:text-[18px]">
                AI can accelerate multilingual content operations, but enterprise translation still requires the right controls, reviewers, terminology, and subject-matter expertise. Stepes combines AI-powered workflows with professional linguists and structured review so global teams can move faster without losing control.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)]">
              <div className="divide-y divide-[rgba(255,255,255,0.1)]">
                {governanceItems.map((item) => (
                  <div key={item.title} className="px-6 py-6 lg:px-8 lg:py-7">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F6B7D0]">
                      {item.title}
                    </div>
                    <p className="mt-3 max-w-[860px] text-[16px] leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-6 py-5 lg:px-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F6B7D0]">
                  Explore More Stepes Capabilities
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {governanceLinks.map((link) => (
                    <div
                      key={link}
                      className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[14px] font-medium text-white"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Connect Global Content Operations to Your Enterprise Systems
              </h2>
              <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                Global content does not live in one place. Stepes supports translation workflows across business systems, content repositories, websites, software platforms, and digital channels.
              </p>
              <p className="mt-6 max-w-[280px] text-[16px] leading-7 text-slate-600 lg:max-w-none">
                A connected enterprise workflow helps teams move multilingual content across systems with greater consistency, automation, and operational visibility.
              </p>
            </div>

            <div>
              <div className="border-t border-[#E2E5EA]">
                <div className="py-7 lg:py-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    Integrated Platform Capabilities
                  </div>
                  <p className="mt-4 max-w-[860px] text-[18px] leading-8 text-slate-700">
                    Stepes connects global content operations to the systems enterprises use for content creation, management, product delivery, support, and reporting.
                  </p>
                </div>

                {platformRows.map((row, rowIndex) => (
                  <div
                    key={`platform-row-${rowIndex}`}
                    className="grid gap-4 border-t border-[#E2E5EA] py-7 lg:grid-cols-2 lg:gap-8 lg:py-8"
                  >
                    {row.map((capability) => (
                      <div key={capability.title}>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                          {capability.title}
                        </div>
                        <p className="mt-4 max-w-[460px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}

                <div className="border-t border-[#E2E5EA] py-7 lg:py-8">
                  <p className="max-w-[980px] text-[16px] leading-7 text-slate-700">
                    Stepes helps enterprises centralize requests in a translation portal, connect systems through APIs, reuse approved language assets, automate workflow steps, and report on multilingual program performance through one connected operating layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[960px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Why Global Companies Choose Stepes for Content Operations
            </h2>
            <p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
              Stepes gives enterprise teams a more scalable way to manage multilingual content with stronger operational control, language consistency, and workflow efficiency.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-[#E8E9ED]">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`px-6 py-6 lg:px-7 lg:py-7 ${index < 3 ? "border-b border-[#E8E9ED]" : ""}`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    {benefit.title}
                  </div>
                  <p className="mt-3 text-[16px] leading-7 text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E8E9ED] bg-[#FBFBFC] px-6 py-5 lg:px-8">
              <p className="max-w-[980px] text-[16px] leading-7 text-slate-700">
                Stepes is built for enterprise teams that need multilingual operations to move faster, stay more consistent, and scale with clearer ownership, stronger governance, and better visibility across the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Global Content Operations Across Industries
              </h2>
              <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                Stepes supports multilingual content operations for regulated, technical, digital, and global business sectors.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
              <div className="border-b border-[#E8E9ED] px-6 py-5 lg:px-8 lg:py-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                  Industries We Support
                </div>
                <p className="mt-2 max-w-[860px] text-[15px] leading-7 text-slate-600">
                  From regulated documentation to digital customer experiences, Stepes supports multilingual operations across high-value enterprise industries.
                </p>
              </div>
              <div className="grid lg:grid-cols-4 lg:divide-x lg:divide-[#E8E9ED]">
                {industries.map((industry, index) => (
                  <div
                    key={industry.title}
                    className={`px-6 py-6 lg:px-6 lg:py-7 ${index < 4 ? "border-b border-[#E8E9ED]" : ""}`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                      {industry.title}
                    </div>
                    <p className="mt-3 text-[16px] leading-7 text-slate-700">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E8E9ED] bg-[#FBFBFC] px-6 py-5 lg:px-8">
                <p className="max-w-[980px] text-[16px] leading-7 text-slate-700">
                  Stepes supports multilingual programs across regulated, technical, customer-facing, and digital environments where consistency, review, speed, and operational visibility matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="grid gap-0 lg:grid-cols-[420px_minmax(0,1fr)] lg:divide-x lg:divide-[#E8E9ED]">
              <div className="px-6 py-8 lg:px-8 lg:py-9">
                <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  Multilingual Operations in 100+ Languages
                </h2>
                <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                  Global content operations require more than one-off translation. Stepes supports multilingual programs across major world languages, regional variants, and market-specific locale requirements.
                </p>
                <p className="mt-5 max-w-[760px] text-[16px] leading-7 text-slate-700">
                  Stepes supports translation in more than 100 languages and regional variants, helping enterprises coordinate multilingual content for global, regional, and market-specific audiences.
                </p>
                <div className="mt-8">
                  <a
                    href="https://www.stepes.com/translation-languages/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C11D63] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(193,29,99,0.22)] transition hover:bg-[#A71954]"
                  >
                    View All Languages
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-[#E8E9ED]">
                  {languageStats.map((stat) => (
                    <div key={stat.title} className="px-6 py-8 lg:px-7 lg:py-9">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        {stat.title}
                      </div>
                      <p className="mt-3 text-[16px] leading-7 text-slate-700">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E8E9ED] bg-[#FBFBFC] px-6 py-6 lg:px-8 lg:py-7">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    Popular Languages and Locales
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {featuredLanguages.map((language) => (
                      <div
                        key={language}
                        className="inline-flex items-center rounded-full border border-[#E3E5EA] bg-white px-4 py-2 text-[14px] font-medium text-slate-700"
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[960px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Related Solutions for Enterprise Multilingual Content
            </h2>
            <p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
              Explore the broader Stepes solutions cluster to connect global content operations with platform capabilities, specialized workflows, and multilingual delivery programs.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="border-b border-[#E8E9ED] px-6 py-5 lg:px-8 lg:py-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                Related Stepes Solutions
              </div>
              <p className="mt-2 max-w-[860px] text-[15px] leading-7 text-slate-600">
                Move deeper into the Stepes enterprise solution ecosystem with pages focused on workflow automation, content types, and multilingual operating models.
              </p>
            </div>

            <div className="divide-y divide-[#E8E9ED]">
              {relatedSolutions.map((solution, index) => (
                <a
                  key={solution.title}
                  href={solution.href}
                  className="grid gap-4 px-6 py-5 transition hover:bg-[#FCF8FA] lg:grid-cols-[40px_minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:px-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2D0D9] bg-[#FDF2F7] text-[12px] font-semibold text-[#9F1D55]">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-[16px] font-semibold leading-7 text-slate-900">
                    {solution.title}
                  </div>
                  <div className="flex items-start justify-between gap-4 pt-1">
                    <p className="text-[16px] leading-7 text-slate-700">
                      {solution.description}
                    </p>
                    <span className="shrink-0 text-[18px] font-semibold text-[#9F1D55]">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Frequently Asked Questions
              </h2>
              <p className="mt-5 max-w-[720px] text-[18px] leading-8 text-slate-700">
                Learn how Stepes helps enterprises structure multilingual content operations across teams, systems, workflows, and markets.
              </p>
              <p className="mt-6 text-[16px] leading-7 text-slate-600">
                These questions cover how global content operations works, how it differs from translation management, and how Stepes supports enterprise multilingual programs.
              </p>
            </div>

            <div className="border-t border-[#E2E5EA]">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`py-7 lg:py-8 ${index < faqs.length - 1 ? "border-b border-[#E2E5EA]" : ""}`}
                >
                  <h3 className="max-w-[860px] text-[24px] font-semibold leading-8 text-slate-950">
                    {faq.question}
                  </h3>
                  <p className="mt-4 max-w-[860px] text-[16px] leading-7 text-slate-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E9ED] px-5 py-20 md:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="overflow-hidden rounded-[30px] border border-[#E6E7EB] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.045)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:divide-x lg:divide-[#E8E9ED]">
              <div className="px-6 py-9 lg:px-8 lg:py-10">
                <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  Turn Multilingual Content Into a Connected Global Operation
                </h2>
                <p className="mt-5 max-w-[820px] text-[17px] leading-8 text-slate-700 md:text-[18px]">
                  Stepes helps enterprise teams centralize translation requests, automate multilingual workflows, govern terminology, apply the right level of human review, and deliver global content with greater speed, consistency, and visibility.
                </p>
              </div>

              <div className="flex flex-col justify-center bg-[#FBFBFC] px-6 py-9 lg:px-8 lg:py-10">
                <p className="max-w-[420px] text-[16px] leading-7 text-slate-700">
                  Connect with Stepes to build a more scalable multilingual operating model for enterprise content, quality, and global delivery.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href="https://www.stepes.com/contact-sales/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C11D63] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(193,29,99,0.22)] transition hover:bg-[#A71954]"
                  >
                    Talk to an Expert
                  </a>
                  <a
                    href="https://www.stepes.com/enterprise-translation-management/"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D8DCE3] bg-white px-7 text-[16px] font-semibold text-slate-800 transition hover:border-[#C11D63] hover:text-[#9F1D55]"
                  >
                    Enterprise Translation Management
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
