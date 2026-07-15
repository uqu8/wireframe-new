import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Understand Your Program",
    body:
      "Stepes begins by understanding your content types, language requirements, review needs, business priorities, compliance expectations, and delivery timelines. This upfront translation onboarding work helps align the right enterprise localization support before projects move into production.",
  },
  {
    number: "02",
    title: "Configure the Right Workflow",
    body:
      "We help shape the right workflow for your multilingual content program, including AI-powered translation, professional linguist review, translation memory, terminology management, approvals, formatting needs, and quality assurance checkpoints. The result is a translation workflow built for the way your teams actually operate.",
  },
  {
    number: "03",
    title: "Manage Delivery With Visibility",
    body:
      "Customers receive coordinated project support, status visibility, secure file handling, reviewer alignment, issue resolution, and delivery oversight across teams and languages. This structured translation program management approach helps reduce manual coordination while improving control.",
  },
  {
    number: "04",
    title: "Improve Over Time",
    body:
      "Stepes helps customers strengthen multilingual operations over time by building reusable language assets, capturing reviewer feedback, improving consistency, reducing repeated work, and making ongoing enterprise translation programs easier to scale.",
  },
];

const introHighlights = [
  "Reliable onboarding and intake alignment",
  "Secure file handling and project visibility",
  "Terminology consistency, review control, and quality checkpoints",
];

const successPillars = [
  {
    title: "Dedicated Project Coordination",
    body:
      "A Stepes project team helps coordinate scope, languages, files, timelines, linguists, reviews, and delivery requirements so enterprise translation work stays organized across teams and markets.",
  },
  {
    title: "Enterprise Onboarding",
    body:
      "Stepes supports account setup, workflow alignment, stakeholder coordination, preferred instructions, translation memory, terminology, and review expectations to help customers start with stronger structure.",
  },
  {
    title: "Quality Governance",
    body:
      "Professional linguists, QA checks, terminology controls, review workflows, and delivery checks help support reliable multilingual outcomes for business-critical content.",
  },
  {
    title: "Transparent Communication",
    body:
      "Customers receive clear updates, questions, clarifications, and escalation support so translation projects continue moving forward with fewer surprises.",
  },
  {
    title: "Secure Collaboration",
    body:
      "Stepes supports controlled file handling, secure workflows, access management, and structured collaboration for confidential, technical, legal, financial, and regulated content.",
  },
  {
    title: "Continuous Improvement",
    body:
      "Translation memory, terminology, feedback, reporting, and process refinement help improve consistency, reduce repeated work, and strengthen future projects over time.",
  },
];

const enterpriseTeams = [
  {
    title: "Localization Teams",
    body:
      "Coordinate multilingual programs, language assets, reviewers, and recurring translation workflows with more consistency and operational control.",
  },
  {
    title: "Marketing Teams",
    body:
      "Support brand consistency, campaign localization, website content, product messaging, and multilingual customer engagement across regions.",
  },
  {
    title: "Product and Software Teams",
    body:
      "Manage UI strings, release content, documentation, help content, and ongoing localization updates across product cycles.",
  },
  {
    title: "Legal and Compliance Teams",
    body:
      "Support sensitive content, confidentiality, approval workflows, terminology control, and jurisdiction-specific requirements with clearer process discipline.",
  },
  {
    title: "Technical and Operations Teams",
    body:
      "Translate manuals, training materials, support content, SOPs, knowledge bases, and operational documentation used across global teams.",
  },
  {
    title: "Life Sciences and Regulated Teams",
    body:
      "Support quality-focused workflows for high-accuracy content that requires specialist linguists, documented review, and careful multilingual handling.",
  },
];

const portalHighlights = [
  {
    title: "Structured Request Intake",
    body:
      "Submit requests, share files, define languages, and keep project requirements organized from the start.",
    href: "https://www.stepes.com/customer-translation-portal/",
    label: "Customer Translation Portal",
  },
  {
    title: "Workflow Visibility",
    body:
      "Track project status, review deliverables, and connect recurring translation work to broader enterprise workflows.",
    href: "https://www.stepes.com/enterprise-translation-management/",
    label: "Enterprise Translation Management",
  },
  {
    title: "Operational Control",
    body:
      "Support workflow automation, reporting, analytics, and role-based approvals for teams that need stronger governance.",
    href: "https://www.stepes.com/workflow-automation/",
    label: "Workflow Automation",
  },
];

const portalLinks = [
  {
    href: "https://www.stepes.com/customer-translation-portal/",
    label: "Customer Translation Portal",
  },
  {
    href: "https://www.stepes.com/enterprise-translation-management/",
    label: "Enterprise Translation Management",
  },
  {
    href: "https://www.stepes.com/workflow-automation/",
    label: "Workflow Automation",
  },
  {
    href: "https://www.stepes.com/reporting-analytics/",
    label: "Reporting & Analytics",
  },
  {
    href: "https://www.stepes.com/user-roles-approvals/",
    label: "User Roles & Approvals",
  },
];

const changeRows = [
  {
    title: "File Revisions and Scope Changes",
    body:
      "When source files change, timelines move, or requirements shift, Stepes helps document updates, confirm the new scope, and keep multilingual work aligned.",
  },
  {
    title: "Reviewer Questions and Terminology Decisions",
    body:
      "Questions about approved wording, terminology, or in-country review feedback are handled through clear communication so teams can make decisions without losing momentum.",
  },
  {
    title: "Escalation Support for Delivery Risks",
    body:
      "If deadlines tighten, review cycles expand, or delivery issues appear, Stepes helps coordinate escalation support while protecting quality, consistency, and expectations.",
  },
];

const assetItems = [
  {
    title: "Translation Memory",
    body:
      "Capture approved translations and reuse them across future projects to improve consistency, speed, and operational efficiency.",
  },
  {
    title: "Terminology Management",
    body:
      "Maintain approved terms, naming conventions, and multilingual glossaries so technical and brand-critical language stays aligned.",
  },
  {
    title: "Style Preferences",
    body:
      "Document voice, tone, formatting, and market-specific preferences to help future translation work stay on brand and easier to review.",
  },
  {
    title: "Reviewer Feedback",
    body:
      "Capture in-country comments, linguistic decisions, and stakeholder preferences so each new project starts from a stronger baseline.",
  },
  {
    title: "Program Reporting",
    body:
      "Use reporting and analytics to understand project activity, recurring issues, review patterns, and opportunities for process improvement.",
  },
  {
    title: "Reusable Workflows",
    body:
      "Standardize repeatable translation steps, review paths, and approval structures to make recurring multilingual work easier to manage at scale.",
  },
];

const assetLinks = [
  {
    href: "https://www.stepes.com/translation-memory/",
    label: "Translation Memory",
  },
  {
    href: "https://www.stepes.com/terminology-management/",
    label: "Terminology Management",
  },
  {
    href: "https://www.stepes.com/translation-quality-assurance/",
    label: "Translation Quality Assurance",
  },
  {
    href: "https://www.stepes.com/ai-human-translation-workflow/",
    label: "AI + Human Translation Workflow",
  },
];

const confidencePoints = [
  "Professional linguists paired with AI-powered workflows",
  "Quality controls, review structure, and terminology governance",
  "Secure collaboration for business-critical multilingual content",
  "Enterprise project coordination across files, teams, and languages",
  "Language asset management that improves future work over time",
  "Support for regulated, technical, legal, financial, software, and digital content",
  "Scalable workflows for recurring translation needs across global operations",
];

const resourceLinks = [
  {
    href: "https://www.stepes.com/enterprise-translation-management/",
    label: "Enterprise Translation Management",
    body: "Centralize requests, workflows, quality, terminology, and project visibility for multilingual operations.",
  },
  {
    href: "https://www.stepes.com/customer-translation-portal/",
    label: "Customer Translation Portal",
    body: "Give teams a structured way to submit requests, share files, track status, and review deliverables.",
  },
  {
    href: "https://www.stepes.com/translation-quality-assurance/",
    label: "Translation Quality Assurance",
    body: "Learn how Stepes supports multilingual quality through review workflows, QA checks, and process control.",
  },
  {
    href: "https://www.stepes.com/ai-human-translation-workflow/",
    label: "AI + Human Translation Workflow",
    body: "See how automation and professional linguist review work together in enterprise translation programs.",
  },
  {
    href: "https://www.stepes.com/translation-memory/",
    label: "Translation Memory",
    body: "Improve consistency and reduce repeated work by reusing approved multilingual content.",
  },
  {
    href: "https://www.stepes.com/terminology-management/",
    label: "Terminology Management",
    body: "Maintain approved technical and brand terminology across languages and projects.",
  },
  {
    href: "https://www.stepes.com/security-compliance/",
    label: "Security & Compliance",
    body: "Explore secure workflows and enterprise controls for confidential and regulated content.",
  },
  {
    href: "https://www.stepes.com/enterprise-support/",
    label: "Enterprise Support",
    body: "Understand how Stepes supports customers with communication, issue handling, and operational assistance.",
  },
];

const heroPoints = [
  "Dedicated project support",
  "Transparent enterprise workflows",
  "Professional linguists and quality controls",
];

const capabilityLinks = [
  {
    href: "https://www.stepes.com/translation-quality-assurance/",
    label: "Translation Quality Assurance",
  },
  {
    href: "https://www.stepes.com/translation-memory/",
    label: "Translation Memory",
  },
  {
    href: "https://www.stepes.com/terminology-management/",
    label: "Terminology Management",
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
      {children}
    </div>
  );
}

function PillButton({ href, children, primary = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 ${
        primary
          ? "bg-[#C11D63] text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] hover:bg-[#A71954]"
          : "border border-[#E5E7EB] bg-white text-slate-900 hover:border-[#D7DCE2] hover:bg-slate-50"
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function TrustRow({ text }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#C11D63]" />
      <p className="text-[15px] leading-7 text-slate-700">{text}</p>
    </div>
  );
}

export default function StepesCustomerSuccessSectionsWireframe() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-6 lg:px-10 xl:px-14">
        <section className="py-24 md:py-24 lg:py-[104px]">
          <div className="grid gap-10 border-b border-[#ECEEF2] pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14 lg:pb-20">
            <div>
              <SectionEyebrow>Customer Success</SectionEyebrow>
              <h1 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950 md:text-[42px] lg:text-[48px]">
                Customer Success for Enterprise Translation Programs
              </h1>
              <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-slate-600">
                Stepes helps global companies launch, manage, and scale multilingual content
                programs with dedicated project support, transparent workflows,
                professional linguists, and enterprise quality controls.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PillButton primary href="https://www.stepes.com/contact-sales/">
                  Talk to Our Team
                </PillButton>
                <PillButton href="https://www.stepes.com/enterprise-translation-management/">
                  Explore Enterprise Workflows
                </PillButton>
              </div>
              <div className="mt-10 grid max-w-[760px] gap-5 border-t border-[#ECEEF2] pt-7 sm:grid-cols-3 sm:gap-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Onboarding
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">
                    Align content, languages, timelines, and review requirements before work begins.
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Visibility
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">
                    Improve control across teams, files, approvals, and multilingual delivery.
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Governance
                  </div>
                  <p className="mt-2 text-[15px] leading-7 text-slate-600">
                    Support quality assurance, terminology consistency, and secure collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:border-l lg:border-[#ECEEF2] lg:pl-10 xl:pl-12">
              <div className="rounded-[28px] border border-[#F0D8E3] bg-[#FFF7FA] p-6 shadow-[0_12px_30px_rgba(193,29,99,0.06)] md:p-7">
                <SectionEyebrow>Enterprise Partnership</SectionEyebrow>
                <h2 className="mt-4 max-w-[420px] text-[28px] font-semibold leading-[1.12] tracking-[-0.025em] text-slate-950">
                  Built to support ongoing multilingual operations, not just one-off translation requests.
                </h2>
                <p className="mt-4 max-w-[430px] text-[16px] leading-7 text-slate-600">
                  From onboarding through delivery and continuous improvement, Stepes helps enterprise teams manage translation with stronger structure, clearer communication, and operational confidence.
                </p>
                <div className="mt-6 divide-y divide-[#F1E6EB] border-y border-[#F1E6EB]">
                  {heroPoints.map((point) => (
                    <TrustRow key={point} text={point} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionEyebrow>Why Customer Success Matters</SectionEyebrow>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Translation Success Requires More Than Delivery
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-8 text-slate-700">
              For enterprise teams, translation success depends on more than completing
              individual projects. Companies need reliable onboarding, clear communication,
              secure file handling, quality checkpoints, consistent terminology, and a
              partner who understands how multilingual content moves across departments,
              markets, and regulatory environments.
            </p>
            <p className="mx-auto mt-6 max-w-[820px] text-[16px] leading-8 text-slate-600">
              That is why Stepes approaches customer success as an operational discipline.
              We help organizations connect translation intake, reviewer alignment, project
              visibility, workflow design, and quality governance so multilingual content can
              move faster without losing control. This creates a stronger foundation for
              recurring translation programs, enterprise localization support, and long-term
              multilingual growth.
            </p>
          </div>

          <div className="mt-12 border-t border-[#ECEEF2] pt-8 md:mt-14 md:pt-10">
            <div className="grid gap-0 md:grid-cols-3">
              {introHighlights.map((item, index) => (
                <div
                  key={item}
                  className={`py-5 md:px-6 ${index > 0 ? "border-t border-[#ECEEF2] md:border-l md:border-t-0" : ""}`}
                >
                  <p className="text-[15px] leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:gap-10">
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-[30px] border border-[#E7E7EC] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] md:p-8">
                <SectionEyebrow>Customer Success Journey</SectionEyebrow>
                <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  A Customer Success Model Built for Enterprise Translation
                </h2>
                <p className="mt-5 text-[16px] leading-8 text-slate-600">
                  Stepes supports enterprise translation programs through a clear four-step model that connects onboarding, workflow design, managed delivery, and continuous improvement.
                </p>
                <div className="mt-7 rounded-[24px] border border-[#E7D2DD] bg-white p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Related Capability
                  </div>
                  <p className="mt-3 text-[16px] leading-7 text-slate-700">
                    Explore how Stepes connects customer portals, workflow automation, structured file handling, and multilingual operations across enterprise teams.
                  </p>
                  <a
                    href="https://www.stepes.com/enterprise-translation-management/"
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
                  >
                    Explore Enterprise Translation Management
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E7E7EC] bg-white shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
              {journeySteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid gap-5 px-6 py-7 md:grid-cols-[88px_minmax(0,1fr)] md:px-8 md:py-8 ${
                    index > 0 ? "border-t border-[#ECEEF2]" : ""
                  }`}
                >
                  <div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#EDD2DF] bg-[#FDF2F7] text-[14px] font-semibold tracking-[0.2em] text-[#9F1D55]">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[24px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[760px] text-[16px] leading-8 text-slate-600">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="text-center">
            <SectionEyebrow>Core Success Pillars</SectionEyebrow>
            <h2 className="mx-auto mt-4 max-w-[760px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              How Stepes Helps Customers Succeed
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[16px] leading-8 text-slate-600">
              Stepes supports enterprise translation programs with a structured operating model built around coordination, onboarding, quality governance, communication, secure collaboration, and continuous improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {successPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[28px] border border-[#E7E7EC] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] md:p-7"
              >
                <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[24px]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#ECEEF2] pt-6">
            {capabilityLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
            <div>
              <SectionEyebrow>Enterprise Teams</SectionEyebrow>
              <h2 className="mt-4 max-w-[440px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Supporting the Teams Behind Global Content
              </h2>
              <p className="mt-6 max-w-[420px] text-[16px] leading-8 text-slate-600">
                Stepes helps different enterprise teams manage multilingual work with stronger alignment across requests, language assets, review workflows, reporting, and operational control.
              </p>
              <a
                href="https://www.stepes.com/enterprise-translation-management/"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
              >
                Explore Enterprise Translation Management
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E7E7EC] bg-white shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
              {enterpriseTeams.map((team, index) => (
                <div
                  key={team.title}
                  className={`grid gap-4 px-6 py-6 md:grid-cols-[220px_minmax(0,1fr)] md:px-8 ${index > 0 ? "border-t border-[#ECEEF2]" : ""}`}
                >
                  <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[22px]">
                    {team.title}
                  </h3>
                  <p className="text-[16px] leading-8 text-slate-600">{team.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="overflow-hidden rounded-[30px] border border-[#E7E7EC] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8FB_100%)] shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <SectionEyebrow>Customer Portal and Workflow Visibility</SectionEyebrow>
                <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  Visibility Across Requests, Projects, Files, and Reviews
                </h2>
                <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-slate-700">
                  Stepes gives enterprise customers a structured way to submit requests, share files, track project status, communicate with project teams, review deliverables, and manage recurring translation needs.
                </p>
                <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-slate-600">
                  For organizations with multiple departments, content types, and language requirements, this visibility helps reduce manual coordination and improve control across multilingual workflows.
                </p>
                <div className="mt-8">
                  <PillButton primary href="https://www.stepes.com/customer-translation-portal/">
                    Explore the Customer Portal
                  </PillButton>
                </div>
              </div>

              <div className="border-t border-[#F0E3E9] bg-white px-6 py-8 md:px-8 md:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                <div className="space-y-6">
                  {portalHighlights.map((item) => (
                    <div key={item.title} className="border-b border-[#ECEEF2] pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[24px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.body}</p>
                      <a
                        href={item.href}
                        className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] border border-[#ECEEF2] bg-[#FCFCFD] p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Explore More Visibility Tools
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                    {portalLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
            <div>
              <SectionEyebrow>Managing Change</SectionEyebrow>
              <h2 className="mt-4 max-w-[470px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Responsive Support When Translation Projects Change
              </h2>
              <p className="mt-6 max-w-[430px] text-[16px] leading-8 text-slate-600">
                Enterprise translation programs rarely stay static. Files get revised, deadlines move, reviewers raise questions, terminology changes, and source content can shift during production.
              </p>
              <p className="mt-5 max-w-[430px] text-[16px] leading-8 text-slate-600">
                Stepes helps customers manage these changes with clear communication, documented decisions, and escalation support designed to protect quality, consistency, and delivery expectations.
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E7E7EC] bg-white shadow-[0_16px_38px_rgba(15,23,42,0.05)]">
              {changeRows.map((row, index) => (
                <div
                  key={row.title}
                  className={`px-6 py-7 md:px-8 md:py-8 ${index > 0 ? "border-t border-[#ECEEF2]" : ""}`}
                >
                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[24px]">
                    {row.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-8 text-slate-600">{row.body}</p>
                </div>
              ))}

              <div className="border-t border-[#ECEEF2] bg-[#FCFCFD] px-6 py-6 md:px-8">
                <a
                  href="https://www.stepes.com/enterprise-support/"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
                >
                  Learn About Enterprise Support
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="language-assets" className="py-20 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
            <div>
              <SectionEyebrow>Language Assets</SectionEyebrow>
              <h2 className="mt-4 max-w-[500px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Building Translation Assets That Improve Over Time
              </h2>
              <p className="mt-6 max-w-[470px] text-[18px] leading-8 text-slate-700">
                Customer success at Stepes includes helping customers build and maintain the language assets that make future translation work faster, more consistent, and easier to manage.
              </p>
              <p className="mt-5 max-w-[470px] text-[16px] leading-8 text-slate-600">
                Translation memory, terminology, style guidance, approved translations, reviewer feedback, reporting, and reusable workflows help create a stronger foundation for every new project and make recurring enterprise translation programs easier to manage over time.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#ECEEF2] pt-6">
                {assetLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {assetItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#E7E7EC] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="enterprise-confidence" className="py-20 md:py-20 lg:py-24">
          <div className="overflow-hidden rounded-[30px] bg-[#111827] text-white shadow-[0_18px_42px_rgba(15,23,42,0.18)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <SectionEyebrow>A Safe Choice for Enterprise Teams</SectionEyebrow>
                <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                  A Translation Partner for Ongoing Global Operations
                </h2>
                <p className="mt-6 max-w-[560px] text-[18px] leading-8 text-slate-200">
                  Whether your organization translates product content, legal documents, technical manuals, training materials, websites, software strings, marketing campaigns, or regulated content, Stepes helps your teams manage multilingual work with structure, visibility, and confidence.
                </p>
              </div>

              <div className="border-t border-white/10 px-6 py-8 md:px-8 md:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
                <div className="grid gap-0 sm:grid-cols-2">
                  {confidencePoints.map((point, index) => (
                    <div
                      key={point}
                      className={`flex items-start gap-3 py-4 sm:pr-6 ${index % 2 === 1 ? "sm:border-l sm:border-white/10 sm:pl-6 sm:pr-0" : ""} ${index >= 2 ? "border-t border-white/10" : ""}`}
                    >
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#F472B6]" />
                      <p className="text-[15px] leading-7 text-slate-200">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="related-resources" className="py-20 md:py-20 lg:py-24">
          <div className="text-center">
            <SectionEyebrow>Related Resources</SectionEyebrow>
            <h2 className="mx-auto mt-4 max-w-[760px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Explore More Enterprise Translation Resources
            </h2>
            <p className="mx-auto mt-6 max-w-[840px] text-[16px] leading-8 text-slate-600">
              Explore connected Stepes capabilities for enterprise translation management, customer visibility, language quality, automation, security, and operational support across global teams.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resourceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group rounded-[28px] border border-[#E7E7EC] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
              >
                <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 md:text-[22px]">
                  {item.label}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{item.body}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#A71954]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="customer-success-cta"
          className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-visible border-t border-[#F0D8E3] bg-[#FDF2F7] pt-20 md:pt-20 lg:pt-24"
        >
          <div className="relative mx-auto w-full max-w-[1280px] px-5 md:px-6 lg:px-10 xl:px-14">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14">
              <div className="max-w-[760px] pb-16 md:pb-20 lg:pb-24">
                <SectionEyebrow>Customer Success CTA</SectionEyebrow>
                <h2 className="mt-4 max-w-[720px] text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  Build a More Reliable Enterprise Translation Program
                </h2>
                <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-slate-700">
                  Stepes helps global teams manage multilingual content with dedicated support, clear workflows, quality controls, secure collaboration, and continuous improvement across projects, languages, and markets.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <PillButton primary href="https://www.stepes.com/contact-sales/">
                    Talk to Our Team
                  </PillButton>
                  <PillButton href="https://www.stepes.com/enterprise-translation-management/">
                    Explore Enterprise Translation Management
                  </PillButton>
                </div>
              </div>

              <div className="relative lg:translate-y-10">
                <div className="overflow-hidden rounded-[30px] border border-[#E7D2DD] bg-white shadow-[0_20px_46px_rgba(15,23,42,0.12)]">
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#F6F6F7]">
                    <div className="px-6 text-center">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                        Image Placeholder
                      </div>
                      <p className="mt-3 text-[16px] leading-7 text-slate-600">
                        Team Stepes photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}