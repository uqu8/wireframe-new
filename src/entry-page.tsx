import React from 'react';

function ArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#9F1D55]">
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold text-[#A71954] transition hover:text-[#7A1542] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform" />
    </a>
  );
}

export default function GatewayPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-white font-sans text-slate-950">
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .stepes-primary,
        .stepes-primary:visited,
        .stepes-primary:hover,
        .stepes-primary:active,
        .stepes-primary:focus { color: #ffffff !important; }
      `}</style>

      {/* Hero / Gateway Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-[72px] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-[104px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div className="relative z-10 max-w-[660px]">
              <Eyebrow>Global Language · Gateway</Eyebrow>
              <h1 className="mt-5 max-w-[650px] text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[48px]">
                Translation &amp; Localization<br />Professional Gateway
              </h1>
              <p className="mt-7 max-w-[640px] text-[18px] leading-8 text-slate-600">
                Stepes and Sesen deliver premium language services for global organizations.
                Choose your brand below to begin your multilingual journey.
              </p>
              <div className="mt-5 max-w-[620px] rounded-[12px] border-l-4 border-[#C11D63] bg-[#FAF8FC] px-5 py-4 text-[16px] leading-7 text-slate-600">
                <strong className="text-slate-800">🌐 100+ languages</strong> · AI + human workflows · enterprise security
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.stepes.com/"
                  target="_blank"
                  rel="noopener"
                  className="stepes-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:-translate-y-0.5 hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Visit Stepes
                  <ArrowUpRight />
                </a>
                <a
                  href="http://www.sesen.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9DEE5] bg-white px-6 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:border-[#C11D63]/40 hover:bg-[#FDF2F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Visit Sesen
                  <ArrowRight />
                </a>
              </div>
            </div>

            {/* Right side: two brand cards */}
            <div className="relative -mx-3 sm:mx-0 lg:pl-2">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Stepes card */}
                <a
                  href="https://www.stepes.com/"
                  target="_blank"
                  rel="noopener"
                  className="group rounded-[32px] border border-[#F0E3EA] bg-[#FCFAFD] p-6 transition hover:-translate-y-1 hover:border-[#C11D63] hover:bg-[#FDF2F7] hover:shadow-[0_16px_40px_rgba(193,29,99,0.06)] sm:p-7"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-[#C11D63]"></span>
                    <span className="text-lg font-semibold text-slate-900">Stepes</span>
                    <span className="ml-auto rounded-full bg-[#FCEAF2] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#9F1D55]">
                      Translation
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Stepes</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    Enterprise translation platform · websites, apps, multimedia · 100+ languages
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-[#C11D63] transition group-hover:border-b-2 group-hover:border-[#C11D63]">
                    Explore Stepes
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-sm text-slate-500">AI + expert review · travel &amp; hospitality specialists</div>
                </a>

                {/* Sesen card */}
                <a
                  href="http://www.sesen.com/"
                  target="_blank"
                  rel="noopener"
                  className="group rounded-[32px] border border-[#E4E4F0] bg-[#FAFAFF] p-6 transition hover:-translate-y-1 hover:border-[#7C3AED] hover:bg-[#F4F2FF] hover:shadow-[0_16px_40px_rgba(124,58,237,0.06)] sm:p-7"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-[#7C3AED]"></span>
                    <span className="text-lg font-semibold text-slate-900">Sesen</span>
                    <span className="ml-auto rounded-full bg-[#E9E4FC] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#5B21B6]">
                      Language
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Sesen</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    Professional translation, interpreting, and localization solutions for global communication.
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-[#6D28D9] transition group-hover:border-b-2 group-hover:border-[#7C3AED]">
                    Visit Sesen
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-sm text-slate-500">Conference interpreting · document translation · multimedia</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-y border-[#E8EAF0] bg-[#FCFCFD]">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 px-5 sm:px-6 md:px-10 lg:grid-cols-4 lg:px-14">
            {["100+ Languages", "AI + Human Workflows", "Enterprise Localization", "Secure Content Handling"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`flex min-h-[86px] items-center py-5 text-[16px] font-semibold text-slate-800 ${
                    index % 2 === 1 ? "border-l border-[#E8EAF0] pl-5 sm:pl-7" : "pr-5 sm:pr-7"
                  } ${
                    index >= 2 ? "border-t border-[#E8EAF0] lg:border-t-0" : ""
                  } ${index === 2 ? "lg:border-l lg:pl-7" : ""}`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Related / Footer section */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-20">
          <div className="flex flex-col gap-6 border-b border-[#E0E4EA] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Related Solutions</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Continue Exploring
              </h2>
            </div>
            <p className="max-w-[520px] text-[16px] leading-8 text-slate-600">
              Connect with industry expertise and localization capabilities for your global content program.
            </p>
          </div>

          <div className="grid gap-10 pt-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Industry Solutions",
                links: [
                  ["Travel Translation Services", "https://www.stepes.com/travel-translation-services/"],
                  ["Hospitality Translation Services", "https://www.stepes.com/hospitality-translation-services/"],
                  ["Hotel Translation Services", "https://www.stepes.com/hotel-translation-services/"],
                ],
              },
              {
                title: "Localization Services",
                links: [
                  ["Website Translation Services", "https://www.stepes.com/website-translation-services/"],
                  ["App Localization Services", "https://www.stepes.com/app-localization-services/"],
                  ["Software Localization Services", "https://www.stepes.com/software-localization-services/"],
                  ["Multimedia Translation Services", "https://www.stepes.com/multimedia-translation-services/"],
                ],
              },
              {
                title: "Global Content Operations",
                links: [
                  ["Multilingual Customer Support", "https://www.stepes.com/customer-support-translation-service/"],
                  ["Translation Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
                  ["Enterprise Translation Management", "https://www.stepes.com/enterprise-translation-management/"],
                  ["Translation Quality Assurance", "https://www.stepes.com/translation-quality-assurance/"],
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{group.title}</h3>
                <div className="mt-5 divide-y divide-[#E0E4EA] border-y border-[#E0E4EA]">
                  {group.links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className="flex min-h-[54px] items-center justify-between gap-4 py-3 text-[16px] font-semibold text-slate-700 transition hover:text-[#9F1D55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-2"
                    >
                      <span>{label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#C11D63]" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-10 lg:px-14">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E8CDD9] bg-[#FDF2F7] px-7 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="relative z-10 max-w-[820px]">
              <Eyebrow>Global Customer Experiences</Eyebrow>
              <h2 className="mt-4 max-w-[760px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[38px]">
                Build a Better Multilingual Experience
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                Connect with global audiences in their preferred languages across every channel — websites, apps, booking journeys, customer service, and more.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://www.stepes.com/contact-us/"
                  target="_blank"
                  rel="noopener"
                  className="stepes-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(193,29,99,0.18)] transition hover:-translate-y-0.5 hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Talk to an Expert
                  <ArrowUpRight />
                </a>
                <a
                  href="https://www.stepes.com/translation-quote/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9C4CE] bg-white px-6 py-3 text-[16px] font-semibold text-slate-900 shadow-sm transition hover:border-[#C11D63]/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Get a Translation Quote
                  <ArrowRight />
                </a>
              </div>
            </div>

            <svg
              className="pointer-events-none absolute -bottom-12 -right-16 hidden h-[300px] w-[420px] text-[#C11D63]/10 lg:block"
              viewBox="0 0 420 300"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="250" cy="150" r="116" stroke="currentColor" strokeWidth="2" />
              <circle cx="250" cy="150" r="78" stroke="currentColor" strokeWidth="2" />
              <path d="M134 150h232M250 34c38 34 60 72 60 116s-22 82-60 116M250 34c-38 34-60 72-60 116s22 82 60 116" stroke="currentColor" strokeWidth="2" />
              <path d="M75 234c60-96 152-145 275-150" stroke="currentColor" strokeWidth="2" strokeDasharray="7 10" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}