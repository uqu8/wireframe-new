import React from "react";
import { ArrowRight, Check } from "lucide-react";

const reasons = [
  {
    title: "Simpler Vendor Approval",
    body: "Supports supplier review, procurement evaluation, and onboarding requirements for global translation programs.",
  },
  {
    title: "Clear Quality Standards",
    body: "Shows that translation services are supported by formal quality and service delivery standards rather than improvised workflows.",
  },
  {
    title: "More Consistent Global Delivery",
    body: "Helps teams maintain translation quality across languages, content types, regions, and ongoing content updates.",
  },
  {
    title: "Confidence for Regulated Content",
    body: "Gives life sciences, medical device, financial, legal, and technical teams greater confidence in process control and documentation.",
  },
];

const certifications = [
  {
    name: "ISO 17100",
    subtitle: "Translation Services",
    description:
      "ISO 17100 defines requirements for professional translation service delivery, including translator qualifications, project management, revision, review, and client communication.",
    support:
      "Supports professional translation workflows for multilingual business, technical, legal, marketing, and regulated content.",
  },
  {
    name: "ISO 9001",
    subtitle: "Quality Management",
    description:
      "ISO 9001 supports a structured quality management system focused on process consistency, customer requirements, service performance, and continual improvement.",
    support:
      "Helps enterprise teams work with a translation provider that uses documented quality practices and repeatable service controls.",
  },
  {
    name: "ISO 13485",
    subtitle: "Medical Device Quality Management",
    description:
      "ISO 13485 supports quality management expectations for medical device and life sciences organizations where controlled processes, documentation, and supplier quality are important.",
    support:
      "Provides added confidence for translating IFUs, product documentation, labeling, clinical content, and regulatory materials.",
  },
];

const practicalBenefits = [
  {
    title: "Qualified Linguist Workflows",
    body: "Projects are supported by professional linguists selected according to language, subject matter, and project requirements.",
  },
  {
    title: "Translation and Review Controls",
    body: "Translation, editing, review, and QA steps can be aligned with content risk, regulatory needs, and client instructions.",
  },
  {
    title: "Terminology and Consistency",
    body: "Glossaries, translation memory, and linguistic assets help maintain consistent terminology across projects and markets.",
  },
  {
    title: "Secure Project Handling",
    body: "Enterprise translation workflows support controlled file handling, access management, and secure multilingual delivery.",
  },
  {
    title: "Traceable Delivery",
    body: "Project records, instructions, files, and review steps can support client documentation and supplier oversight.",
  },
];

const useCases = [
  {
    title: "Medical Device Translation",
    body: "IFUs, labeling, product documentation, software UI, packaging, and training materials.",
  },
  {
    title: "Life Sciences Translation",
    body: "Clinical, regulatory, patient-facing, safety, and scientific content.",
  },
  {
    title: "Legal and Compliance Translation",
    body: "Contracts, policies, filings, compliance documents, and cross-border business records.",
  },
  {
    title: "Financial Translation",
    body: "Banking, insurance, investor, fintech, and regulatory communications.",
  },
  {
    title: "Technical Translation",
    body: "Product manuals, engineering documentation, software strings, support content, and knowledge bases.",
  },
  {
    title: "Enterprise Content Translation",
    body: "Marketing, HR, training, internal communications, and global customer experience content.",
  },
];

const relatedServices = [
  {
    title: "Enterprise Translation Services",
    href: "https://www.stepes.com/enterprise-translation-services/",
    body: "See how Stepes supports global enterprise translation programs across teams, regions, and content types.",
  },
  {
    title: "Translation Services",
    href: "https://www.stepes.com/translation-services/",
    body: "Review Stepes translation solutions for business, technical, regulated, and customer-facing content.",
  },
  {
    title: "Quality System",
    href: "https://www.stepes.com/translation-quality-system/",
    body: "Understand how Stepes manages translation quality across linguists, workflows, review steps, and technology.",
  },
  {
    title: "Medical Translation Services",
    href: "https://www.stepes.com/medical-translation-services/",
    body: "Support multilingual medical content with professional workflows built for accuracy, clarity, and compliance.",
  },
  {
    title: "Life Sciences Translation Services",
    href: "https://www.stepes.com/life-sciences-translation-services/",
    body: "Translate clinical, regulatory, patient, and scientific content for global life sciences organizations.",
  },
  {
    title: "Technical Translation Services",
    href: "https://www.stepes.com/technical-translation-services/",
    body: "Localize manuals, product documentation, knowledge bases, and engineering content across markets.",
  },
  {
    title: "Financial Translation Services",
    href: "https://www.stepes.com/financial-translation-services/",
    body: "Support banking, insurance, fintech, and investor communications with professional multilingual delivery.",
  },
  {
    title: "Legal Translation Services",
    href: "https://www.stepes.com/legal-translation-services/",
    body: "Translate contracts, policies, filings, and compliance materials with strong process control and consistency.",
  },
  {
    title: "Security",
    href: "https://www.stepes.com/security/",
    body: "See how Stepes supports secure file handling, controlled access, and enterprise-ready multilingual operations.",
  },
  {
    title: "Contact Us",
    href: "https://www.stepes.com/contact-us/",
    body: "Speak with the Stepes team about enterprise translation requirements, onboarding, or supplier review.",
  },
];

const faqs = [
  {
    question: "What are ISO certified translation services?",
    answer:
      "ISO certified translation services are translation services delivered under internationally recognized standards for translation workflows, quality management, and process control.",
  },
  {
    question: "Is Stepes ISO certified?",
    answer:
      "Stepes supports enterprise translation programs through an ISO-aligned quality framework associated with ISO 17100, ISO 9001, and ISO 13485. Relevant certification documentation can be provided upon request during vendor onboarding or supplier review.",
  },
  {
    question: "Why does ISO 17100 matter for translation?",
    answer:
      "ISO 17100 is specific to translation service delivery and supports requirements related to translator qualifications, project management, revision, review, and client communication.",
  },
  {
    question: "Why does ISO 9001 matter for enterprise translation?",
    answer:
      "ISO 9001 supports a structured quality management system, helping clients work with a translation provider that uses documented processes and consistent service controls.",
  },
  {
    question: "Why is ISO 13485 important for medical device translation?",
    answer:
      "ISO 13485 is important for medical device and life sciences organizations because it supports quality management expectations for controlled processes, documentation, and supplier oversight.",
  },
  {
    question: "Can Stepes provide ISO certification documents for vendor onboarding?",
    answer:
      "Yes. Stepes can provide relevant certification documentation and quality information upon request as part of supplier qualification, procurement review, or client onboarding.",
  },
];

export default function IsoCertifiedTranslationServicesWireframe() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section className="px-5 pb-16 pt-24 sm:px-6 lg:px-10 lg:pb-20 lg:pt-28 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[900px] text-center">
              <h1 className="text-[38px] font-semibold leading-[1.06] tracking-[-0.035em] text-slate-950 md:text-[42px] lg:text-[48px]">
                ISO Certified Translation Services
              </h1>
              <p className="mx-auto mt-6 max-w-[780px] text-[18px] leading-8 text-slate-600">
                Enterprise translation services backed by internationally recognized quality standards.
              </p>
              <p className="mx-auto mt-5 max-w-[820px] text-base leading-8 text-slate-600 sm:text-[17px] lg:text-[18px]">
                Stepes helps global companies translate business-critical, technical, regulated, and multilingual content with ISO-certified processes designed to support accuracy, consistency, security, and enterprise-scale delivery.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://customer.stepes.com/instant-translation-quote/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#C11D63] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A71954] sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </a>
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D8DDE5] hover:bg-slate-50 sm:w-auto"
                >
                  Contact Enterprise Sales
                </a>
              </div>

              <div className="mx-auto mt-10 flex max-w-[520px] flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[#E5E7EB] pt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[13px]">
                <span>ISO 17100</span>
                <span className="text-[#C11D63]">•</span>
                <span>ISO 9001</span>
                <span className="text-[#C11D63]">•</span>
                <span>ISO 13485</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.92fr_1.48fr] lg:gap-14">
            <div className="lg:pr-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F1D55]">
                Why Choose an ISO-Certified Partner
              </div>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Why ISO Certification Matters When Choosing a Translation Partner
              </h2>
              <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-slate-600">
                Choosing a translation partner is about more than language coverage. Enterprise teams need confidence that multilingual work is supported by recognized standards, qualified professionals, controlled processes, and repeatable quality practices.
              </p>
              <p className="mt-5 max-w-[720px] text-base leading-8 text-slate-600">
                Stepes’ ISO certifications help buyers assess translation services with greater confidence across procurement, compliance, technical, and regulated-content requirements.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
              <div className="grid md:grid-cols-2">
                {reasons.map((item, index) => (
                  <div
                    key={item.title}
                    className={`px-6 py-8 sm:px-8 ${
                      index % 2 === 0 ? "md:border-r md:border-[#E5E7EB]" : ""
                    } ${index < 2 ? "border-b border-[#E5E7EB]" : ""}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FDF2F7] text-[#C11D63]">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-semibold leading-7 text-slate-950 lg:text-[24px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-[860px] text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F1D55]">
                Stepes ISO Certifications
              </div>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                ISO Standards That Support Professional Translation Quality
              </h2>
              <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-8 text-slate-600">
                Stepes supports enterprise translation programs with internationally recognized ISO standards that strengthen translation quality, process consistency, and confidence for regulated and high-stakes content.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
              {certifications.map((item) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                    Certification
                  </div>
                  <h3 className="mt-3 text-[24px] font-semibold leading-8 text-slate-950">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium leading-7 text-slate-500">
                    {item.subtitle}
                  </p>
                  <p className="mt-6 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-6 rounded-[22px] bg-[#FCFCFD] p-5 lg:p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Why it matters
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-700">{item.support}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-[980px] rounded-[24px] border border-dashed border-[#D8DDE5] bg-white/70 px-6 py-5 text-sm leading-7 text-slate-600 sm:px-8">
              Certification details and supporting documentation can be shared during supplier qualification, vendor onboarding, or enterprise procurement review.
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div className="lg:pr-4">
                <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  What ISO Standards Mean in Practice
                </h2>
                <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-slate-600">
                  ISO certification matters because it supports how translation work is staffed, managed, reviewed, and delivered across real enterprise programs.
                </p>
                <p className="mt-5 max-w-[720px] text-base leading-8 text-slate-600">
                  For clients, that means greater consistency, clearer controls, and stronger support for multilingual content across teams, markets, and regulated environments.
                </p>
              </div>

              <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
                {practicalBenefits.map((item) => (
                  <article key={item.title} className="border-t border-[#E5E7EB] pt-6">
                    <h3 className="text-[20px] font-semibold leading-7 text-slate-950 lg:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[620px] text-base leading-8 text-slate-600">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-[980px] text-sm leading-7 text-slate-600">
              For a deeper view of how Stepes manages translation quality across people, process, technology, and review workflows, visit our {" "}
              <a
                href="https://www.stepes.com/translation-quality-system/"
                className="font-semibold text-[#9F1D55] hover:text-[#C11D63]"
              >
                Quality System page
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Built for High-Stakes Multilingual Content
              </h2>
              <p className="mt-6 text-[18px] leading-8 text-slate-600">
                Stepes’ ISO-certified translation services support companies that need reliable multilingual communication across departments, markets, and regulated environments.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
              {useCases.map((item) => (
                <article key={item.title} className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-[22px] font-semibold leading-8 text-slate-950 lg:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[620px] text-base leading-8 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
              <div>
                <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                  Support for Supplier Qualification and Procurement
                </h2>
                <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-slate-600">
                  Enterprise clients often need certification documentation during vendor onboarding, supplier qualification, quality review, or procurement approval.
                </p>
                <p className="mt-5 max-w-[760px] text-base leading-8 text-slate-600">
                  Stepes can provide relevant certification documentation and quality information upon request as part of client onboarding, NDA review, or supplier evaluation.
                </p>
              </div>

              <div className="border-t border-[#E5E7EB] pt-6 lg:pt-2">
                <p className="text-[20px] font-semibold leading-8 text-slate-950">
                  Need certification documentation for vendor onboarding?
                </p>
                <p className="mt-3 max-w-[520px] text-base leading-8 text-slate-600">
                  Contact our enterprise team to request supporting materials and next steps.
                </p>
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C11D63] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A71954]"
                >
                  Contact Enterprise Sales
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                ISO Certifications and the Stepes Quality System
              </h2>
            </div>

            <div>
              <p className="text-[18px] leading-8 text-slate-600">
                ISO certification is one part of Stepes’ broader approach to translation quality. The Stepes Quality System brings together professional linguist qualification, project management, terminology control, translation memory, QA checks, secure workflows, and continuous improvement to support reliable multilingual delivery.
              </p>
              <a
                href="https://www.stepes.com/translation-quality-system/"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#9F1D55] transition hover:text-[#C11D63]"
              >
                Learn more about the Stepes Quality System
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                Explore More Stepes Translation Solutions
              </h2>
              <p className="mt-6 text-[18px] leading-8 text-slate-600">
                Explore related Stepes service pages and quality resources to evaluate multilingual capabilities, quality expectations, and enterprise translation needs.
              </p>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-12">
              {relatedServices.map((item) => (
                <article key={item.href} className="border-t border-[#E5E7EB] pt-6">
                  <a
                    href={item.href}
                    className="inline-flex items-center text-[20px] font-semibold leading-7 text-slate-950 transition hover:text-[#9F1D55] lg:text-[22px]"
                  >
                    {item.title}
                    <ArrowRight className="ml-2 h-4 w-4 shrink-0 text-[#C11D63]" />
                  </a>
                  <p className="mt-3 max-w-[360px] text-base leading-8 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 py-16 sm:px-6 lg:px-10 lg:py-20 xl:px-14">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
                ISO Certified Translation Services FAQ
              </h2>
              <p className="mt-6 text-[18px] leading-8 text-slate-600">
                Common questions about ISO-certified translation services, enterprise supplier review, and regulated multilingual content.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white">
              {faqs.map((item, index) => (
                <article
                  key={item.question}
                  className={`px-6 py-7 sm:px-8 lg:px-10 ${index < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <h3 className="text-[20px] font-semibold leading-8 text-slate-950 lg:text-[22px]">
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-[980px] text-base leading-8 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#F1F3F5] px-5 pb-24 pt-16 sm:px-6 lg:px-10 lg:pb-28 lg:pt-20 xl:px-14">
          <div className="mx-auto max-w-[920px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 md:text-[32px] lg:text-[36px]">
              Work With an ISO Certified Translation Partner
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[18px] leading-8 text-slate-600">
              Whether you need enterprise translation, regulated content localization, multilingual product documentation, or ongoing global content support, Stepes combines recognized quality standards, professional linguists, and secure workflows to help your organization translate with confidence.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://customer.stepes.com/instant-translation-quote/"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C11D63] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A71954] sm:w-auto"
              >
                Request a Translation Quote
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </a>
              <a
                href="https://www.stepes.com/contact-us/"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D8DDE5] hover:bg-slate-50 sm:w-auto"
              >
                Contact Enterprise Sales
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
