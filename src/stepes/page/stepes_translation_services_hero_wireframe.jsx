import {
  Sparkles,
  Database,
  BookOpenText,
  UserCheck,
  Workflow,
  PlugZap,
  Building2,
  Users,
  FolderKanban,
} from "lucide-react";

const supportPoints = [
  "100+ languages",
  "10,000+ professional linguists",
  "2,000+ enterprise clients",
  "AI-enabled translation workflows",
  "ISO-certified quality processes",
];

const serviceCards = [
  {
    title: "Document Translation Services",
    description:
      "Translate reports, manuals, presentations, policies, contracts, and business documents for global operations.",
    href: "https://www.stepes.com/document-translation-services/",
  },
  {
    title: "Certified Translation Services",
    description:
      "Certified translations for official, legal, immigration, HR, compliance, academic, and government use.",
    href: "https://www.stepes.com/certified-translation-services/",
  },
  {
    title: "Technical Translation Services",
    description:
      "Accurate translation of technical manuals, engineering specifications, product documentation, and scientific content.",
    href: "https://www.stepes.com/technical-translation-services/",
  },
  {
    title: "Legal Translation Services",
    description:
      "Translate contracts, agreements, policies, litigation materials, compliance content, and legal correspondence.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Medical Translation Services",
    description:
      "Specialized translation for healthcare, clinical, medical device, pharmaceutical, and life sciences content.",
    href: "https://www.stepes.com/medical-translation-services/",
  },
  {
    title: "Financial Translation Services",
    description:
      "Translation for banking, insurance, investment, audit, fintech, investor relations, and regulatory content.",
    href: "https://www.stepes.com/financial-translation-services/",
  },
  {
    title: "Business Translation Services",
    description:
      "Translate corporate communications, HR documents, training materials, internal policies, and global business content.",
    href: "https://www.stepes.com/business-translation-services/",
  },
  {
    title: "Marketing Translation Services",
    description:
      "Adapt brand messaging, campaigns, brochures, product content, and customer communications for international markets.",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Patent Translation Services",
    description:
      "Translate patents, IP filings, prior art documents, technical claims, and legal-technical materials.",
    href: "https://www.stepes.com/patent-translation-services/",
  },
  {
    title: "Government Translation Services",
    description:
      "Support public-sector communications, official documents, multilingual access programs, and international initiatives.",
    href: "https://www.stepes.com/government-translation-services/",
  },
];

const enterpriseFeatures = [
  {
    icon: "people",
    title: "Professional Translators by Subject Matter",
    description:
      "Stepes assigns experienced linguists with the domain knowledge needed for business, legal, technical, medical, financial, and regulated content.",
  },
  {
    icon: "memory-terms",
    title: "Translation Memory and Terminology Control",
    description:
      "Approved language assets help improve consistency, reduce repeated work, and keep multilingual content aligned across teams, markets, and content types.",
  },
  {
    icon: "workflow",
    title: "Workflow Automation and Project Visibility",
    description:
      "Streamline intake, routing, status tracking, stakeholder coordination, and multilingual production across teams and content streams.",
  },
  {
    icon: "oversight",
    title: "Centralized Project Oversight",
    description:
      "Give enterprise teams clearer control over files, deadlines, approvals, review cycles, and delivery across multilingual programs.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Project Intake",
    description:
      "Upload files, select languages, define requirements, and confirm the translation scope.",
  },
  {
    number: "02",
    title: "Content Analysis",
    description:
      "Stepes reviews file types, subject matter, word count, formatting needs, terminology, and delivery requirements.",
  },
  {
    number: "03",
    title: "Linguist Assignment",
    description:
      "Qualified translators and reviewers are matched based on language pair, subject matter, and content complexity.",
  },
  {
    number: "04",
    title: "Translation Memory and Terminology Setup",
    description:
      "Approved terminology, glossaries, style preferences, and prior translations are applied where available.",
  },
  {
    number: "05",
    title: "Translation and Review",
    description:
      "Professional linguists translate the content, with review workflows aligned to quality, risk, and use case.",
  },
  {
    number: "06",
    title: "QA and Delivery",
    description:
      "Final checks support accuracy, terminology consistency, formatting, and delivery readiness.",
  },
];

const contentTypes = [
  "Business documents",
  "Technical manuals",
  "Contracts and legal documents",
  "Clinical and medical documents",
  "Financial reports",
  "Training and HR materials",
  "Marketing and sales content",
  "Product documentation",
  "Policies and compliance documents",
  "Government and public-sector materials",
  "Academic and education content",
  "Customer support content",
];

const industryCards = [
  {
    title: "Life Sciences and Healthcare",
    description:
      "Clinical, regulatory, medical device, pharmaceutical, patient-facing, and healthcare communications.",
    href: "https://www.stepes.com/life-sciences-translations/",
  },
  {
    title: "Legal and Compliance",
    description:
      "Contracts, agreements, policies, investigations, compliance materials, and legal correspondence.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Financial Services",
    description:
      "Banking, insurance, investment, fintech, audit, regulatory, and investor communications.",
    href: "https://www.stepes.com/financial-translation-services/",
  },
  {
    title: "Technology and Software",
    description:
      "Product documentation, support content, technical manuals, UI strings, and release materials.",
    href: "https://www.stepes.com/technology-translation-services/",
  },
  {
    title: "Manufacturing and Engineering",
    description:
      "Technical documentation, safety materials, specifications, training, and operations content.",
    href: "https://www.stepes.com/manufacturing-translation-services/",
  },
  {
    title: "Retail and Ecommerce",
    description:
      "Product descriptions, marketplace content, customer support, merchandising, and global commerce materials.",
    href: "https://www.stepes.com/ecommerce-translations/",
  },
  {
    title: "Education and eLearning",
    description:
      "Course materials, training content, academic documents, and student-facing communications.",
    href: "https://www.stepes.com/elearning-training-translation-services/",
  },
  {
    title: "Government and Public Sector",
    description:
      "Official documents, public information, community outreach, and multilingual access content.",
    href: "https://www.stepes.com/government-translation-services/",
  },
];

const qualityPillars = [
  {
    title: "AI for Workflow Speed",
    description:
      "Automate intake, analysis, routing, reuse, and production steps to reduce manual coordination.",
    icon: "ai",
  },
  {
    title: "Translation Memory for Consistency",
    description:
      "Reuse approved translations to improve consistency and efficiency across recurring content.",
    icon: "database",
  },
  {
    title: "Terminology Control for Accuracy",
    description:
      "Keep product names, technical terms, brand language, and regulated terminology aligned across languages.",
    icon: "dictionary",
  },
  {
    title: "Human Review for Business-Critical Content",
    description:
      "Use professional translators and reviewers where accuracy, nuance, compliance, and customer impact matter most.",
    icon: "review",
  },
];

const languageLinks = [
  { title: "Spanish Translation Services", href: "https://www.stepes.com/spanish-translation-services/" },
  { title: "French Translation Services", href: "https://www.stepes.com/french-translation-services/" },
  { title: "German Translation Services", href: "https://www.stepes.com/german-translation-services/" },
  { title: "Chinese Translation Services", href: "https://www.stepes.com/chinese-translation-services/" },
  { title: "Japanese Translation Services", href: "https://www.stepes.com/japanese-translation-services/" },
  { title: "Korean Translation Services", href: "https://www.stepes.com/korean-translation-services/" },
  { title: "Portuguese Translation Services", href: "https://www.stepes.com/portuguese-translation-services/" },
  { title: "Italian Translation Services", href: "https://www.stepes.com/italian-translation-services/" },
  { title: "Dutch Translation Services", href: "https://www.stepes.com/dutch-translation-services/" },
  { title: "Arabic Translation Services", href: "https://www.stepes.com/arabic-translation-services/" },
  { title: "Vietnamese Translation Services", href: "https://www.stepes.com/vietnamese-translation-services/" },
  { title: "Thai Translation Services", href: "https://www.stepes.com/thai-translation-services/" },
];

const technologyLinks = [
  {
    icon: "workflow",
    title: "Translation Management System",
    description: "Centralize projects, teams, files, language assets, and delivery workflows.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    icon: "api",
    title: "Translation API",
    description:
      "Connect translation workflows to websites, applications, product content, and enterprise systems.",
    href: "https://www.stepes.com/translation-api/",
  },
  {
    icon: "enterprise",
    title: "Enterprise Translation Services",
    description:
      "Support large-scale multilingual programs with managed services, language technology, and global delivery.",
    href: "https://www.stepes.com/enterprise-translation-services/",
  },
];

const localizationLinks = [
  { title: "Website Localization", href: "https://www.stepes.com/website-translation-services/" },
  { title: "Software Localization", href: "https://www.stepes.com/software-localization-services/" },
  { title: "App Localization", href: "https://www.stepes.com/app-localization-services/" },
  { title: "Game Localization", href: "https://www.stepes.com/game-localization-services/" },
  { title: "eLearning Localization", href: "https://www.stepes.com/elearning-training-translation-services/" },
  { title: "Multimedia Localization", href: "https://www.stepes.com/multimedia-localization-services/" },
  { title: "SEO Translation", href: "https://www.stepes.com/seo-translation-services/" },
  { title: "Multilingual Content Localization", href: "https://www.stepes.com/multilingual-content-localization/" },
];

const resourceArticles = [
  {
    category: "Legal Translation",
    title: "Legal Translation Best Practices",
    description:
      "Learn practical ways to improve clarity, consistency, and review discipline for legal translation projects.",
    href: "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/",
  },
  {
    category: "Financial Translation",
    title: "Ensuring Numeric Accuracy in Financial Translation",
    description:
      "See how terminology control, numeric verification, and structured review help protect financial translation quality.",
    href: "https://www.stepes.com/resources/blog-insights/ensuring-numeric-accuracy-in-financial-translation/",
  },
  {
    category: "Disclosure Translation",
    title: "Translating Financial Disclosure Documents",
    description:
      "Explore best practices for multilingual disclosure content, regulatory reporting, and investor-facing communications.",
    href: "https://www.stepes.com/resources/blog-insights/translating-financial-disclosure-documents/",
  },
  {
    category: "ESG Reporting",
    title: "CSRD & ESG Reporting Across Languages",
    description:
      "Understand how multilingual consistency and terminology governance support global ESG and CSRD reporting.",
    href: "https://www.stepes.com/resources/blog-insights/csrd-esg-reporting-across-languages/",
  },
];

const faqItems = [
  {
    question: "What are professional translation services?",
    answer:
      "Professional translation services help businesses convert written content from one language into another with linguistic accuracy, subject-matter expertise, terminology consistency, and quality review.",
  },
  {
    question: "What types of documents can Stepes translate?",
    answer:
      "Stepes translates business documents, technical manuals, legal materials, medical and life sciences content, financial reports, training content, marketing materials, product documentation, and more.",
  },
  {
    question: "How much do translation services cost?",
    answer:
      "Pricing depends on language pair, word count, subject matter, turnaround time, formatting requirements, and the level of review required.",
  },
  {
    question: "How fast can Stepes deliver translations?",
    answer:
      "Turnaround depends on content volume, language pair, complexity, formatting, and review requirements. Stepes supports both standard and expedited workflows.",
  },
  {
    question: "Does Stepes provide certified translation services?",
    answer:
      "Yes. Stepes provides certified translations for official, legal, HR, compliance, immigration, academic, and government-related use cases.",
  },
  {
    question: "Does Stepes use human translators or AI translation?",
    answer:
      "Stepes uses the right combination of professional human translation, AI workflow automation, machine translation, translation memory, terminology management, and human review based on the project requirements.",
  },
  {
    question: "Can Stepes support enterprise translation programs?",
    answer:
      "Yes. Stepes supports enterprise translation programs with managed workflows, language assets, project visibility, APIs, translation memory, terminology control, and professional review.",
  },
  {
    question: "What languages does Stepes support?",
    answer:
      "Stepes supports translation in 100+ languages, including Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Arabic, and many others.",
  },
];

function QualityIcon({ icon }: { icon: string }) {
  const commonClassName = "h-5 w-5 text-[#C11D63]";

  switch (icon) {
    case "ai":
      return <Sparkles className={commonClassName} strokeWidth={2} />;
    case "database":
      return <Database className={commonClassName} strokeWidth={2} />;
    case "dictionary":
      return <BookOpenText className={commonClassName} strokeWidth={2} />;
    case "review":
      return <UserCheck className={commonClassName} strokeWidth={2} />;
    default:
      return <Sparkles className={commonClassName} strokeWidth={2} />;
  }
}

function TechnologyIcon({ icon }: { icon: string }) {
  const commonClassName = "h-5 w-5 text-[#C11D63]";

  switch (icon) {
    case "workflow":
      return <Workflow className={commonClassName} strokeWidth={2} />;
    case "api":
      return <PlugZap className={commonClassName} strokeWidth={2} />;
    case "enterprise":
      return <Building2 className={commonClassName} strokeWidth={2} />;
    default:
      return <Workflow className={commonClassName} strokeWidth={2} />;
  }
}

function EnterpriseIcon({ icon }: { icon: string }) {
  const commonClassName = "h-5 w-5 text-[#C11D63]";

  switch (icon) {
    case "people":
      return <Users className={commonClassName} strokeWidth={2} />;
    case "memory-terms":
      return <BookOpenText className={commonClassName} strokeWidth={2} />;
    case "workflow":
      return <Workflow className={commonClassName} strokeWidth={2} />;
    case "oversight":
      return <FolderKanban className={commonClassName} strokeWidth={2} />;
    default:
      return <Users className={commonClassName} strokeWidth={2} />;
  }
}

export default function StepesTranslationServicesWireframe() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-[#E5E7EB] bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(193,29,99,0.06)_0%,rgba(193,29,99,0.025)_34%,rgba(193,29,99,0)_72%)]" />
          <div className="absolute right-[8%] top-[22%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(193,29,99,0.045)_0%,rgba(193,29,99,0.018)_36%,rgba(193,29,99,0)_74%)]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#C11D63] shadow-sm">
              Translation Services
            </div>

            <h1 className="mx-auto mt-6 max-w-[980px] text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-[44px] lg:text-[48px]">
              Professional Translation Services for Global Business
            </h1>

            <p className="mx-auto mt-6 max-w-[860px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
              Stepes helps global companies translate business documents, technical content, legal materials, medical and life sciences content, financial communications, websites, training, and enterprise content with professional linguists, AI-enabled workflows, terminology control, and managed quality review.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://customer.stepes.com/instant-translation-quote/"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#C11D63] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954]"
              >
                Get an Instant Quote
              </a>
              <a
                href="https://www.stepes.com/contact-sales/"
                className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#D8DCE3] bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[1160px]">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {supportPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#E5E7EB] bg-white px-5 py-4 text-center text-[14px] font-medium text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.035)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="translation-services-overview" className="border-b border-[#E5E7EB] bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              Translation Services for Every Global Content Need
            </h2>
            <p className="mx-auto mt-5 max-w-[780px] text-[17px] leading-8 text-slate-600">
              From business documents and technical manuals to regulated content and customer-facing communications, Stepes delivers professional translation services that help organizations communicate clearly and consistently across languages.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex min-h-[220px] flex-col rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#D8DCE3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[240px] text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-950">
                    {card.title}
                  </h3>
                  <span className="mt-1 text-[18px] text-[#C11D63] transition group-hover:translate-x-0.5">→</span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{card.description}</p>
                <div className="mt-auto pt-6 text-[14px] font-semibold text-slate-900">Explore Service</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-translation-at-scale" className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-8">
              <h2 className="max-w-[560px] text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
                Built for Enterprise Translation at Scale
              </h2>
              <p className="mt-5 max-w-[580px] text-[17px] leading-8 text-slate-600">
                Stepes combines professional translation, reusable language assets, workflow automation, and project visibility to help global teams manage multilingual content with greater consistency, governance, and operational control across languages, teams, and content types.
              </p>

              <div className="mt-8 rounded-[28px] border border-[#E5E7EB] bg-[#FBF7F9] p-6">
                <div className="text-[14px] font-semibold text-slate-900">A modern translation operating model</div>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  Professional linguists, terminology control, translation memory, and centralized workflows help enterprises scale multilingual operations without losing accuracy, consistency, or delivery control.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {enterpriseFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3C6DA] bg-[#FDF2F7] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                    <EnterpriseIcon icon={feature.icon} />
                  </div>
                  <h3 className="mt-5 text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-stepes-delivers" className="bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#C11D63]">Delivery Process</div>
            <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              How Stepes Delivers Professional Translation
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600">
              Every project follows a structured workflow designed to support accuracy, terminology alignment, and dependable delivery across languages, formats, and business use cases.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="lg:pt-2">
              <div className="max-w-[440px] border-t border-[#E5E7EB] pt-6">
                <p className="text-[17px] leading-8 text-slate-600">
                  From project intake through final delivery, Stepes applies a disciplined translation process that helps global teams maintain quality, consistency, and multilingual readiness across business-critical content.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-2 left-[23px] top-2 w-px bg-[#E7EAF0]" />
              {workflowSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative grid grid-cols-[46px_1fr] gap-6 sm:grid-cols-[56px_1fr] sm:gap-7 ${index !== workflowSteps.length - 1 ? "pb-12" : "pb-0"}`}
                >
                  <div className="relative z-10 flex items-start justify-center pt-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C11D63] bg-white text-[13px] font-semibold text-[#C11D63] shadow-[0_10px_24px_rgba(15,23,42,0.06)] sm:h-12 sm:w-12 sm:text-[14px]">
                      {step.number}
                    </div>
                  </div>
                  <div className="border-t border-[#E5E7EB] pt-6">
                    <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="translation-by-content-type" className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <h2 className="max-w-[560px] text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
                Translation Services by Content Type
              </h2>
              <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-slate-600">
                Different content types require different levels of subject expertise, formatting control, review, and delivery coordination. Stepes supports a wide range of business-critical translation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {contentTypes.map((item) => (
                <div key={item} className="border-b border-[#E8EBF0] pb-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-[#C11D63]" />
                    <p className="text-[16px] font-medium leading-7 text-slate-800">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industry-translation-expertise" className="border-t border-[#E5E7EB] bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              Industry-Specialized Translation Expertise
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600">
              Stepes supports translation programs for regulated, technical, and customer-facing industries where accuracy, terminology, and review discipline are essential.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industryCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex min-h-[220px] flex-col rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#D8DCE3] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[240px] text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-950">
                    {card.title}
                  </h3>
                  <span className="mt-1 text-[18px] text-[#C11D63] transition group-hover:translate-x-0.5">→</span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{card.description}</p>
                <div className="mt-auto pt-6 text-[14px] font-semibold text-slate-900">Explore Industry Expertise</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-human-translation-quality" className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <div>
              <h2 className="max-w-[600px] text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
                AI-Accelerated Translation with Professional Human Review
              </h2>
              <p className="mt-5 max-w-[600px] text-[17px] leading-8 text-slate-600">
                Stepes applies the right combination of AI automation, machine translation, translation memory, terminology management, professional translation, and human review based on content type, quality requirements, and business risk.
              </p>

              <div className="mt-8 rounded-[32px] border border-[#E5E7EB] bg-[linear-gradient(180deg,#ffffff_0%,#fbf7f9_100%)] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.035)]">
                <div className="text-[14px] font-semibold uppercase tracking-[0.1em] text-[#C11D63]">AI + Human Quality</div>
                <p className="mt-4 text-[16px] leading-8 text-slate-600">
                  The result is a more modern translation model that supports speed, consistency, and operational control while keeping professional human judgment where it matters most.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {qualityPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.035)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3C6DA] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                    <QualityIcon icon={pillar.icon} />
                  </div>
                  <h3 className="mt-5 text-[21px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="languages-supported" className="border-t border-[#E5E7EB] bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <h2 className="max-w-[560px] text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
                Professional Translation Services in 100+ Languages
              </h2>
              <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-slate-600">
                Stepes supports translation across major global languages and regional variants, helping businesses communicate with customers, employees, partners, and regulators worldwide.
              </p>
              <a
                href="https://www.stepes.com/translation-languages/"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#D8DCE3] bg-white px-6 py-3 text-[15px] font-semibold text-slate-900 transition hover:border-slate-400"
              >
                View All Languages
              </a>
            </div>

            <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.035)] sm:p-7">
              <div className="flex flex-wrap gap-3">
                {languageLinks.map((language) => (
                  <a
                    key={language.title}
                    href={language.href}
                    className="inline-flex items-center rounded-full border border-[#EBC7D8] bg-[#FDF2F7] px-4 py-2.5 text-[14px] font-medium text-slate-800 transition hover:border-[#D8A9BF] hover:bg-white"
                  >
                    {language.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enterprise-translation-technology" className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              Translation Technology for Modern Global Teams
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600">
              Stepes gives enterprise teams the tools to manage multilingual content more efficiently, from online ordering and project tracking to translation memory, terminology management, APIs, and continuous translation workflows.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {technologyLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex min-h-[220px] flex-col rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#D8DCE3] hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3C6DA] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                  <TechnologyIcon icon={item.icon} />
                </div>
                <h3 className="mt-6 text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{item.description}</p>
                <div className="mt-auto pt-6 text-[14px] font-semibold text-slate-900">Explore Solution</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="need-localization-services" className="border-t border-[#E5E7EB] bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="rounded-[36px] border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.035)] sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <h2 className="max-w-[600px] text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
                  Need Localization Services for Digital Products and Global Experiences?
                </h2>
                <p className="mt-5 max-w-[580px] text-[17px] leading-8 text-slate-600">
                  For websites, software, apps, games, training, multimedia, and digital product experiences, Stepes also provides localization services that adapt content, interfaces, and user experiences for international markets.
                </p>
                <a
                  href="https://www.stepes.com/localization-services/"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C11D63] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954]"
                >
                  Explore Localization Services
                </a>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {localizationLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 border-b border-[#E8EBF0] py-3 text-[16px] font-medium text-slate-800 transition hover:text-slate-950"
                  >
                    <span>{item.title}</span>
                    <span className="text-[#C11D63] transition group-hover:translate-x-0.5">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="translation-guidance" className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#C11D63]">
              Related Resources
            </div>
            <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              Translation Guidance and Best Practices
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600">
              Explore practical guidance on translation quality, terminology control, multilingual reporting, and specialized content workflows.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resourceArticles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                className="group flex min-h-[250px] flex-col rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#D8DCE3] hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex w-fit items-center rounded-full border border-[#EBC7D8] bg-[#FDF2F7] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#C11D63]">
                  {article.category}
                </div>
                <h3 className="mt-5 text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-950">
                  {article.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{article.description}</p>
                <div className="mt-auto pt-6 text-[14px] font-semibold text-slate-900">Read Guide</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="translation-services-faq" className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[36px] lg:text-[40px]">
              Translation Services FAQ
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-8 text-slate-600">
              Find answers to common questions about Stepes translation services, delivery timelines, pricing, language coverage, and enterprise support.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.035)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-[22px] font-semibold leading-[1.3] tracking-[-0.02em] text-slate-950">
                  <span>{item.question}</span>
                  <span className="mt-1 text-[#C11D63]">+</span>
                </summary>
                <p className="mt-5 pr-6 text-[15px] leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="final-cta" className="border-t border-[#E5E7EB] bg-[#FCFCFD]">
        <div className="mx-auto max-w-[1280px] px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="rounded-[40px] border border-[#E5E7EB] bg-white px-8 py-12 text-center shadow-[0_12px_34px_rgba(15,23,42,0.04)] sm:px-10 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-[840px]">
              <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[40px] lg:text-[44px]">
                Start Your Next Translation Project with Stepes
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                Whether you need a single document translated or an enterprise translation program across languages, teams, and content types, Stepes helps you move faster with professional linguists, AI-enabled workflows, and managed quality review.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://customer.stepes.com/instant-translation-quote/"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#C11D63] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954]"
                >
                  Get an Instant Quote
                </a>
                <a
                  href="https://www.stepes.com/contact-sales/"
                  className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#D8DCE3] bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
