import React from "react";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";

const proofItems = [
  "Less Fragmentation",
  "More Control",
  "Faster Delivery",
  "Stronger Consistency",
  "Secure Execution",
];

const differentiators = [
  {
    number: "01",
    title: "AI-Powered Workflows With Human Oversight",
    description:
      "Accelerate intake, routing, terminology checks, and quality review while keeping experienced linguists and reviewers involved where quality matters most.",
  },
  {
    number: "02",
    title: "Professional Linguists for Business-Critical Content",
    description:
      "Work with qualified translators and reviewers who understand language, context, subject matter, and real-world business requirements.",
  },
  {
    number: "03",
    title: "Enterprise Quality Controls",
    description:
      "Support consistent multilingual output with structured workflows, terminology management, review steps, and translation quality assurance.",
  },
  {
    number: "04",
    title: "Operational Flexibility at Global Scale",
    description:
      "Support urgent requests, recurring programs, and multilingual rollouts across regions, teams, and content types with one connected delivery model.",
  },
  {
    number: "05",
    title: "Secure, Enterprise-Ready Delivery",
    description:
      "Protect business-critical content with controlled workflows, secure handling, and operational processes designed for professional use.",
  },
  {
    number: "06",
    title: "One Partner for Complex Multilingual Programs",
    description:
      "Manage documents, websites, software, training, regulated content, and ongoing localization programs with one responsive language partner.",
  },
];

const stayBenefits = [
  {
    title: "AI-Accelerated Delivery",
    description:
      "Use AI to reduce repetitive work, accelerate throughput, and shorten turnaround times across multilingual content programs.",
  },
  {
    title: "Human Review Where Risk Matters",
    description:
      "Apply professional linguists and reviewers where accuracy, clarity, compliance, and brand voice matter most.",
  },
  {
    title: "Smarter Consistency at Scale",
    description:
      "Use translation memory, terminology controls, and AI-assisted workflows to improve consistency across teams, regions, and content types.",
  },
  {
    title: "Less Vendor Fragmentation",
    description:
      "Replace scattered vendors, email-based coordination, and disconnected handoffs with one accountable operating model.",
  },
  {
    title: "Better Visibility for Enterprise Teams",
    description:
      "Give stakeholders clearer oversight into requests, workflows, files, reviews, and delivery across ongoing multilingual programs.",
  },
  {
    title: "More Scalable Global Execution",
    description:
      "Support urgent projects, recurring programs, and multilingual expansion with a model that scales more cleanly than traditional agency workflows.",
  },
];

const trustItems = [
  {
    title: "ISO-Certified Workflows",
    description: "Professional processes aligned with recognized quality standards.",
    href: "https://www.stepes.com/iso-certifications/",
  },
  {
    title: "Quality Assurance Controls",
    description: "Structured review, terminology management, and QA before delivery.",
    href: "https://www.stepes.com/translation-qa-services/",
  },
  {
    title: "Secure Delivery",
    description: "Enterprise-ready content handling and controlled operational workflows.",
    href: "https://www.stepes.com/security/",
  },
  {
    title: "Enterprise Support",
    description: "Responsive partnership for onboarding, planning, and ongoing programs.",
    href: "https://www.stepes.com/enterprise-support/",
  },
];

const controlLinks = [
  {
    label: "Translation Management System",
    href: "https://www.stepes.com/translation-management-system/",
  },
  {
    label: "Translation API",
    href: "https://www.stepes.com/translation-api/",
  },
  {
    label: "Translation Automation",
    href: "https://www.stepes.com/translation-service-automation/",
  },
];

const controlFeatures = [
  "One place for requests, files, and delivery",
  "Better visibility across multilingual work",
  "Stronger terminology and workflow consistency",
  "Less vendor fragmentation and email coordination",
  "Easier oversight for recurring translation programs",
  "Connected project communication and approvals",
];

const controlOutcomes = [
  {
    title: "Less coordination",
    description: "Reduce handoffs, follow-ups, and vendor sprawl across multilingual work.",
  },
  {
    title: "Better oversight",
    description: "Give teams clearer visibility into requests, approvals, and delivery.",
  },
  {
    title: "One accountable partner",
    description: "Run complex multilingual programs through one connected operating model.",
  },
];

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#C11D63] px-7 text-[15px] font-semibold text-white transition hover:bg-[#A71954]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-[15px] font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
    >
      {children}
    </a>
  );
}

function StructuredRows({ items, numbered }) {
  const rows = [items.slice(0, 2), items.slice(2, 4), items.slice(4, 6)];

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={rowIndex < rows.length - 1 ? "grid border-b border-slate-200 lg:grid-cols-2" : "grid lg:grid-cols-2"}
        >
          {row.map((item, itemIndex) => (
            <div
              key={item.title}
              className={itemIndex === 0 ? "border-b border-slate-200 lg:border-b-0 lg:border-r" : ""}
            >
              <div className={itemIndex === 0 ? "px-0 py-7 pr-0 sm:pr-0 lg:pr-8" : "px-0 py-7 pl-0 lg:pl-8"}>
                {numbered ? (
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                    {item.number}
                  </div>
                ) : null}
                <h3 className={numbered ? "mt-4 text-[24px] font-semibold tracking-[-0.02em] text-slate-950" : "text-[24px] font-semibold tracking-[-0.02em] text-slate-950"}>
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function WhyStepesHeroLiveCanvas() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="px-5 py-16 sm:px-6 md:px-10 lg:px-14 lg:py-[104px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="text-[38px] font-semibold tracking-[-0.04em] text-slate-950 sm:text-[42px] lg:text-[48px] lg:leading-[1.05]">
              Why Enterprises Choose Stepes
            </h1>

            <p className="mx-auto mt-6 max-w-[780px] text-[17px] leading-8 text-slate-600 md:text-[18px]">
              Stepes helps global teams replace fragmented translation workflows with a faster,
              more controlled, AI-enabled operating model for multilingual content.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton href="https://www.stepes.com/request-a-quote/">
                Request a Quote
              </PrimaryButton>
              <SecondaryButton href="https://www.stepes.com/translation-management-system/">
                Explore Platform
              </SecondaryButton>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[1120px] border-t border-slate-200 pt-5 lg:mt-16 lg:pt-7">
            <div className="flex flex-wrap items-center justify-center gap-y-2 text-center">
              {proofItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  {index > 0 ? (
                    <span className="mx-3 hidden h-4 w-px bg-slate-200 sm:block" aria-hidden="true" />
                  ) : null}
                  <span className="rounded-full px-3 py-1 text-[14px] font-medium text-slate-700 sm:px-0 sm:py-0">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#F6F6F7] px-5 py-16 sm:px-6 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-14">
          <div className="lg:pt-3">
            <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px] lg:text-[36px] lg:leading-[1.08]">
              Built for Enterprises That Have Outgrown Fragmented Translation
            </h2>
            <p className="mt-5 max-w-[520px] text-[18px] leading-8 text-slate-600">
              Many enterprise teams still manage multilingual content through disconnected vendors,
              scattered emails, and workflows that are difficult to scale. Stepes replaces that
              fragmentation with one accountable model built for speed, quality, and operational
              control.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_16px_36px_rgba(15,23,42,0.04)]">
            <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                Why This Model Works
              </div>
              <p className="mt-3 max-w-[760px] text-[16px] leading-7 text-slate-600">
                A stronger operating model for multilingual content across business-critical
                workflows, regulated materials, and ongoing global programs.
              </p>
            </div>
            <div className="px-6 sm:px-8">
              <StructuredRows items={differentiators} numbered={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[860px] text-center">
            <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px] lg:text-[36px] lg:leading-[1.08]">
              Why Enterprise Teams Stay with Stepes
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-8 text-slate-600">
              AI is reshaping translation operations, and Stepes gives enterprise teams a more
              practical way to adapt. We combine AI-powered efficiency, professional human review,
              and connected enterprise workflows to help teams move faster, reduce fragmentation,
              and manage multilingual content with greater consistency and control.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[1120px] border-y border-slate-200 py-6">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
              Built for Modern Enterprise Teams
            </div>
            <p className="mt-3 max-w-[760px] text-[16px] leading-7 text-slate-600">
              A translation model built for teams that need AI-enabled speed, stronger oversight,
              and a more scalable way to run multilingual content operations.
            </p>
          </div>

          <div className="mx-auto max-w-[1120px]">
            <StructuredRows items={stayBenefits} numbered={false} />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-10">
            <div>
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[30px] lg:text-[32px] lg:leading-[1.08]">
                Quality Standards. Secure Delivery. Enterprise Confidence.
              </h2>
              <p className="mt-4 max-w-[480px] text-[17px] leading-8 text-slate-300">
                Stepes combines professional quality standards, secure delivery, and responsive
                enterprise support to help teams manage multilingual content with greater
                confidence, accountability, and control.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
                >
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-300">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div className="lg:pt-3">
            <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px] lg:text-[36px] lg:leading-[1.08]">
              Replace Fragmentation With Control
            </h2>
            <p className="mt-6 max-w-[540px] text-[18px] leading-8 text-slate-600">
              Stepes helps enterprise teams move beyond scattered vendors, disconnected tools, and
              manual coordination by bringing multilingual requests, workflows, files, and delivery
              into one connected operating model.
            </p>

            <div className="mt-8 flex max-w-[560px] flex-wrap gap-3">
              {controlLinks.map((link) => (
                <SecondaryButton key={link.label} href={link.href}>
                  <span className="inline-flex items-center gap-2">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </SecondaryButton>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-[#F6F6F7] p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)] sm:p-8 lg:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDF2F7] text-[#C11D63]">
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-slate-950">
                  One accountable system for multilingual operations
                </h3>
                <p className="mt-3 max-w-[640px] text-[16px] leading-7 text-slate-600">
                  Centralize multilingual work so teams can manage translation more efficiently,
                  reduce handoff friction, and maintain better control over ongoing global content.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {controlFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C11D63]" />
                  <span className="text-[15px] font-medium leading-6 text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {controlOutcomes.map((item) => (
                <div key={item.title}>
                  <div className="text-[14px] font-medium text-slate-500">{item.title}</div>
                  <div className="mt-1 text-[16px] font-semibold leading-7 text-slate-900">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-5 pt-16 sm:px-6 md:px-10 lg:px-14 lg:pt-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end lg:gap-12">
            <div className="pb-10 text-center lg:pb-14 lg:text-left">
              <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-slate-950 sm:text-[32px] lg:text-[36px] lg:leading-[1.08]">
                Talk to the Stepes Team About Your Global Content Workflow
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-slate-600 lg:mx-0 lg:max-w-[560px]">
                Stepes helps global teams bring more speed, consistency, and control to multilingual
                content with AI-powered workflows and professional language expertise.
              </p>

              <div className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55] lg:text-[11px]">
                Designed in San Francisco. Developed globally.
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <PrimaryButton href="https://www.stepes.com/request-a-quote/">
                  Request a Quote
                </PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/contact-sales/">
                  Talk to Stepes
                </SecondaryButton>
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-visible bg-white sm:min-h-[300px] lg:min-h-[420px]">
              <div className="absolute inset-x-0 bottom-0 flex justify-center lg:justify-end">
                <div className="h-[200px] w-full max-w-[660px] sm:h-[280px] lg:h-[400px]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12 bg-slate-950" />
    </div>
  );
}
