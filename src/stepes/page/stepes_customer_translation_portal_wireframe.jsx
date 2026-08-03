import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileStack,
  FolderOpen,
  Globe2,
  LayoutGrid,
  Lock,
  MessageSquare,
  Receipt,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const QUOTE_URL = "https://customer.stepes.com/instant-translation-quote/";
const PORTAL_LOGIN_URL = "https://app.stepes.com/sign-in/";

type Capability = {
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  support: string[];
};

type WorkflowStep = {
  title: string;
  text: string;
};

type UseCase = {
  title: string;
  text: string;
};

type SecurityItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

type RelatedLink = {
  title: string;
  href: string;
  text: string;
};

type Faq = {
  q: string;
  a: string;
};

const capabilities: Capability[] = [
  {
    title: "Submit Translation Requests",
    tag: "Project Intake",
    icon: ClipboardList,
    text: "Start new translation projects through a structured request workflow built for enterprise teams.",
    support: [
      "Upload source files and reference materials",
      "Select languages, services, deadlines, and project instructions",
    ],
  },
  {
    title: "Request and Approve Quotes",
    tag: "Quote Workflow",
    icon: Receipt,
    text: "Review pricing, turnaround, and scope in one place so approved work can move into production faster.",
    support: [
      "Receive clear online estimates for multilingual projects",
      "Approve quotes and keep project history organized",
    ],
  },
  {
    title: "Track Active Projects",
    tag: "Project Visibility",
    icon: Workflow,
    text: "Follow languages, milestones, delivery timing, and project status from a single customer dashboard.",
    support: [
      "See active work across teams and content types",
      "Monitor progress without relying on scattered email updates",
    ],
  },
  {
    title: "Manage Files and Deliverables",
    tag: "File Management",
    icon: FolderOpen,
    text: "Keep source files, reference materials, translated assets, and final deliveries connected to each project.",
    support: [
      "Upload project files and supporting materials",
      "Download completed translations and delivery packages",
    ],
  },
  {
    title: "Collaborate With Stepes Teams",
    tag: "Team Collaboration",
    icon: MessageSquare,
    text: "Share instructions, answer clarification questions, and keep project communication tied to the right record.",
    support: [
      "Coordinate with Stepes teams through organized project history",
      "Keep comments, updates, and approvals easier to follow",
    ],
  },
  {
    title: "View Project and Billing History",
    tag: "Account Visibility",
    icon: FileStack,
    text: "Access completed projects, quote records, invoices, statements, and account activity from one workspace.",
    support: [
      "Review project history for planning and reporting",
      "Keep billing records easier to access across stakeholders",
    ],
  },
];

const workflow: WorkflowStep[] = [
  {
    title: "Submit Your Request",
    text: "Upload files, select languages and services, and add project instructions through a structured intake flow.",
  },
  {
    title: "Review Your Quote",
    text: "Receive a clear online quote with pricing, turnaround, and project scope for review and approval.",
  },
  {
    title: "Approve and Launch",
    text: "Approve the project online so Stepes can move translation and review work into production without extra back-and-forth.",
  },
  {
    title: "Track Project Progress",
    text: "Follow status, milestones, files, and delivery timing from one organized customer dashboard.",
  },
  {
    title: "Download Deliverables",
    text: "Access completed translations, delivery packages, and project records as soon as work is finished.",
  },
];

const useCases: UseCase[] = [
  {
    title: "Corporate and Operations Teams",
    text: "Standardize translation requests across departments, regions, vendors, and internal stakeholders.",
  },
  {
    title: "Marketing and Communications Teams",
    text: "Coordinate multilingual campaigns, website updates, launches, presentations, and customer communications.",
  },
  {
    title: "Legal and Compliance Teams",
    text: "Manage contracts, policies, business records, and sensitive compliance content with clearer project oversight.",
  },
  {
    title: "Product and Localization Teams",
    text: "Keep software strings, documentation, release content, and multilingual product updates aligned across teams.",
  },
  {
    title: "Life Sciences and Regulated Teams",
    text: "Support clinical, medical, regulatory, labeling, quality, and patient-facing content workflows with clearer coordination.",
  },
];

const securityItems: SecurityItem[] = [
  {
    title: "Secure Customer Login",
    icon: Lock,
    text: "Authorized users can sign in to access translation activity, project files, and account records for their organization.",
  },
  {
    title: "Organized Project Records",
    icon: LayoutGrid,
    text: "Requests, quotes, files, approvals, messages, and deliverables stay connected to each project in one workspace.",
  },
  {
    title: "Customer Team Collaboration",
    icon: MessageSquare,
    text: "Enterprise users can coordinate translation needs across departments while keeping communication tied to the right project.",
  },
  {
    title: "Compliance-Aware Translation Workflows",
    icon: ShieldCheck,
    text: "Stepes supports translation requirements for business, legal, financial, technical, life sciences, and regulated content.",
  },
];

const relatedLinks: RelatedLink[] = [
  {
    title: "AI Translation Platform",
    href: "https://www.stepes.com/ai-translation-platform/",
    text: "Explore Stepes AI-powered translation technology for enterprise language operations.",
  },
  {
    title: "Enterprise Translation Management",
    href: "https://www.stepes.com/enterprise-translation-management/",
    text: "Manage multilingual programs across teams, markets, content types, and workflows.",
  },
  {
    title: "AI + Human Translation Workflow",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
    text: "Combine automation with professional human review for quality, consistency, and scale.",
  },
  {
    title: "Translation Quality Assurance",
    href: "https://www.stepes.com/translation-quality-assurance/",
    text: "Apply structured QA workflows to improve multilingual accuracy, consistency, and readiness.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is the Stepes Customer Translation Portal?",
    a: "The Stepes Customer Translation Portal is an online workspace where customers can request quotes, submit translation projects, manage files, track progress, communicate with Stepes teams, and access completed translations.",
  },
  {
    q: "Can I request translation quotes through the portal?",
    a: "Yes. Customers can submit project details, upload files, select languages and services, and receive translation quotes for review and approval online.",
  },
  {
    q: "Can I track project status online?",
    a: "Yes. The portal gives customers visibility into active translation projects, including project status, due dates, language progress, files, and deliverables.",
  },
  {
    q: "Can multiple people from my company use the portal?",
    a: "Yes. Enterprise customers can coordinate translation work across departments and stakeholders while keeping requests, approvals, files, and deliveries organized in one place.",
  },
  {
    q: "Is the portal connected to Stepes translation services and technology?",
    a: "Yes. The portal connects customer-facing project workflows with Stepes translation services, AI-enabled language technology, project management, quality assurance, and enterprise language operations.",
  },
];

function PillButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
        primary
          ? "bg-[#C11D63] text-white shadow-[0_10px_30px_rgba(193,29,99,0.22)] hover:bg-[#A71954]"
          : "border border-[#E5E7EB] bg-white text-[#111827] hover:border-[#D1D5DB] hover:bg-[#F9FAFB]"
      }`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div
          className={`mb-4 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            isDark
              ? "border border-[#8A355B] bg-[#7A1542]/30 text-[#F2A9C6]"
              : "border border-[#F3D4E1] bg-[#FDF2F7] text-[#9F1D55]"
          }`}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-[-0.03em] md:text-4xl ${
          isDark ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-base leading-7 md:text-lg ${
            isDark ? "text-[#D1D5DB]" : "text-[#4B5563]"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PortalValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_16px_40px_rgba(17,24,39,0.04)]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF2F7]">
        <CheckCircle2 className="h-5 w-5 text-[#C11D63]" />
      </div>
      <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#4B5563]">{text}</p>
    </div>
  );
}

function DashboardPreview() {
  const navItems = [
    { label: "Dashboard", active: false },
    { label: "Requests", active: false },
    { label: "Projects", active: true },
    { label: "Files", active: false },
    { label: "Billing", active: false },
  ];

  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-[#FDF2F7] blur-2xl lg:block" />

      <div className="relative overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white shadow-[0_28px_70px_rgba(17,24,39,0.08)]">
        <div className="flex items-center gap-2 border-b border-[#F0F1F3] bg-[#FCFCFD] px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F0B3CB]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F7D9A3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#B7E4C7]" />
          <div className="ml-3 rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-medium text-[#6B7280]">
            Stepes Customer Portal
          </div>
        </div>

        <div className="grid min-h-[500px] lg:grid-cols-[200px_minmax(0,1fr)]">
          <div className="border-b border-[#F0F1F3] bg-[#FAFAFB] p-5 lg:border-b-0 lg:border-r">
            <div className="rounded-[22px] border border-[#F0F1F3] bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                Customer Workspace
              </div>
              <div className="mt-2 text-lg font-semibold text-[#111827]">Enterprise Portal</div>
              <div className="mt-2 text-sm leading-6 text-[#6B7280]">
                Requests, files, and deliveries in one place.
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    item.active
                      ? "bg-[#FDF2F7] font-semibold text-[#9F1D55]"
                      : "text-[#4B5563]"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                  Project Overview
                </div>
                <div className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-[#111827]">
                  Website Localization Program
                </div>
                <div className="mt-2 max-w-[34ch] text-sm leading-7 text-[#6B7280]">
                  English into French, German, Japanese, and Spanish
                </div>
              </div>
              <div className="rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-semibold text-[#067647]">
                On Track
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Languages", "4"],
                ["Files", "14"],
                ["Due Date", "June 28"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[22px] bg-[#F9FAFB] p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9CA3AF]">
                    {label}
                  </div>
                  <div className="mt-3 text-[32px] font-semibold leading-none text-[#111827]">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[26px] border border-[#F0F1F3] bg-[#FCFCFD] p-5">
              <div className="flex items-center justify-between text-sm text-[#4B5563]">
                <span>Overall progress</span>
                <span className="font-semibold text-[#111827]">72%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-[#ECEEF1]">
                <div className="h-2 w-[72%] rounded-full bg-[#C11D63]" />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[22px] bg-white p-4 ring-1 ring-[#EEF0F2]">
                  <div className="text-sm font-semibold text-[#111827]">Recent Activity</div>
                  <div className="mt-4 space-y-3">
                    {[
                      "French quote approved",
                      "German files uploaded",
                      "Japanese delivery package posted",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#FCFCFD] px-4 py-3 text-sm text-[#374151]">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#C11D63]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[22px] bg-white p-4 ring-1 ring-[#EEF0F2]">
                    <div className="text-sm font-semibold text-[#111827]">Project Files</div>
                    <div className="mt-4 space-y-3">
                      {[
                        "Website copy brief.pdf",
                        "Approved terminology list.xlsx",
                        "French delivery package.zip",
                      ].map((item) => (
                        <div key={item} className="flex items-center justify-between gap-3 rounded-2xl bg-[#FCFCFD] px-4 py-3 text-sm text-[#374151]">
                          <span className="min-w-0 flex-1 truncate">{item}</span>
                          <FolderOpen className="h-4 w-4 shrink-0 text-[#9CA3AF]" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[22px] bg-[#F9FAFB] p-4">
                      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9CA3AF]">
                        Active Projects
                      </div>
                      <div className="mt-3 text-[28px] font-semibold leading-none text-[#111827]">12</div>
                    </div>
                    <div className="rounded-[22px] bg-[#F9FAFB] p-4">
                      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9CA3AF]">
                        Deliveries
                      </div>
                      <div className="mt-3 text-[28px] font-semibold leading-none text-[#111827]">29</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StepesCustomerTranslationPortalWireframe() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto max-w-[1440px] px-6 pt-6 lg:px-10 lg:pt-8 xl:px-14 xl:pt-10">
            <div className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:py-20 xl:gap-12 xl:py-24">
              <div className="lg:col-span-6">
                <div className="inline-flex rounded-full border border-[#F3D4E1] bg-[#FDF2F7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                  Stepes Customer Portal
                </div>
                <h1 className="mt-6 max-w-[14ch] text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#111827] md:text-[48px]">
                  Customer Translation Portal for Enterprise Translation Management
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563]">
                  Request quotes, launch translation projects, manage files, track progress, approve work, and access completed deliverables in one secure online workspace. The Stepes Customer Translation Portal gives enterprise teams a faster, clearer way to manage multilingual content with Stepes.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PillButton href={QUOTE_URL} primary>
                    Request a Quote
                  </PillButton>
                  <PillButton href={PORTAL_LOGIN_URL}>Sign In to Customer Portal</PillButton>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                  Already working with Stepes? Sign in to access active projects, quotes, files, and completed translations.
                </p>

                <div className="mt-8 overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white/85 shadow-[0_16px_40px_rgba(17,24,39,0.04)] backdrop-blur">
                  <div className="grid sm:grid-cols-3">
                    {[
                      ["Centralized requests", "Submit projects, quotes, and files through one connected workspace."],
                      ["Real-time visibility", "Track progress, delivery status, and project activity more clearly."],
                      ["Organized workspace", "Keep project records easier to manage across teams and stakeholders."],
                    ].map(([title, text], index) => (
                      <div
                        key={title}
                        className={`p-5 ${index < 2 ? "sm:border-r sm:border-[#EEF0F2]" : ""}`}
                      >
                        <div className="text-sm font-semibold text-[#111827]">{title}</div>
                        <div className="mt-2 text-sm leading-6 text-[#6B7280]">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pl-2 xl:pl-4">
                <div className="mx-auto min-h-[560px] max-w-[660px] lg:ml-auto lg:mr-0">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="Customer Translation Management"
                  title="One Portal for Customer Translation Management"
                  text="Enterprise translation projects often involve multiple teams, languages, files, deadlines, reviews, and approvals. The Stepes Customer Translation Portal brings these activities together in one centralized workspace so customers can manage translation requests from quote to delivery with less email coordination and clearer project visibility."
                />
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_18px_45px_rgba(17,24,39,0.04)] lg:p-8">
                  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    <div>
                      <div className="inline-flex rounded-full border border-[#F3D4E1] bg-[#FDF2F7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        Connected customer workspace
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
                        Keep requests, quotes, projects, and files connected from start to finish
                      </h3>
                      <p className="mt-4 text-base leading-8 text-[#4B5563]">
                        From quote intake and approvals to active work, file delivery, and billing history, the portal gives enterprise teams a shared workspace for managing multilingual content with Stepes.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                      <div className="text-sm font-semibold text-[#111827]">What the portal helps reduce</div>
                      <div className="mt-4 space-y-3">
                        {[
                          "Scattered email threads",
                          "Manual status follow-ups",
                          "Disconnected project files and approvals",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl bg-[#F9FAFB] px-4 py-3 text-sm text-[#374151]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#C11D63]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.04)] md:grid-cols-3">
                  {[
                    ["Centralized Requests", "Submit translation, localization, and multilingual service requests through a structured online workflow."],
                    ["Clear Project Visibility", "Track active projects, language progress, due dates, and delivery status from one dashboard."],
                    ["Organized File Access", "Upload source files, provide reference materials, and download completed translations in one place."],
                  ].map(([title, text], index) => (
                    <div
                      key={title}
                      className={`p-6 ${index < 2 ? "md:border-r md:border-[#EEF0F2]" : ""}`}
                    >
                      <div className="text-lg font-semibold text-[#111827]">{title}</div>
                      <p className="mt-3 text-sm leading-7 text-[#4B5563]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <SectionHeading
              eyebrow="Customer Portal Capabilities"
              title="What You Can Do in the Stepes Customer Portal"
              text="The portal gives customers a practical way to coordinate translation work with Stepes across departments, content types, and markets."
              align="center"
            />
            <div className="mt-12 grid gap-x-10 gap-y-0 xl:grid-cols-2">
              {capabilities.map((item, index) => {
                const bottomBorder = index < capabilities.length - 2 ? "border-b border-[#E5E7EB]" : "";
                return (
                  <div key={item.title} className={`py-8 ${bottomBorder}`}>
                    <div className="min-w-0">
                      <div className="inline-flex rounded-full border border-[#F3D4E1] bg-[#FDF2F7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                        {item.tag}
                      </div>
                      <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.text}</p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {item.support.map((point) => (
                          <div key={point} className="flex items-start gap-3 text-sm leading-6 text-[#374151]">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="Connected Workflow"
                  title="From Request to Delivery in a Connected Workflow"
                  text="The Stepes Customer Translation Portal creates a clear path from intake to final delivery, helping enterprise teams move projects forward with better visibility, fewer handoff gaps, and easier access to files and project records."
                />

                <div className="mt-8 rounded-[26px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_16px_40px_rgba(17,24,39,0.04)]">
                  <div className="text-sm font-semibold text-[#111827]">Why this workflow matters</div>
                  <div className="mt-4 space-y-3">
                    {[
                      "Reduce friction between request, quote, and production",
                      "Give stakeholders clearer visibility from kickoff through delivery",
                      "Keep files, milestones, and completed work easier to track",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-[#374151] ring-1 ring-[#EEF0F2]"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD] p-6 shadow-[0_18px_45px_rgba(17,24,39,0.04)] lg:p-8">
                  <div className="relative pl-0 md:pl-6">
                    <div className="absolute left-[21px] top-2 hidden h-[calc(100%-8px)] w-px bg-[#E5E7EB] md:block" />
                    <div className="space-y-6">
                      {workflow.map((item, index) => (
                        <div key={item.title} className="relative grid gap-4 md:grid-cols-[44px_minmax(0,1fr)] md:gap-6">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111827] text-sm font-semibold text-white">
                            {index + 1}
                          </div>
                          <div className={`pb-6 ${index < workflow.length - 1 ? "border-b border-[#EEF0F2]" : ""}`}>
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                                {item.title}
                              </h3>
                              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                                Step {index + 1}
                              </div>
                            </div>
                            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4B5563]">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[28px] bg-[#111827] p-6 text-white shadow-[0_20px_60px_rgba(17,24,39,0.16)]">
                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      ["Consistent intake", "Capture languages, files, deadlines, and services more consistently from the start."],
                      ["Shared visibility", "Give stakeholders clearer visibility into active work, milestones, and deliveries."],
                      ["Connected records", "Keep quotes, files, project activity, and completed deliverables tied together."],
                    ].map(([title, text], index) => (
                      <div
                        key={title}
                        className={`p-1 ${index < 2 ? "md:border-r md:border-white/10 md:pr-6" : ""}`}
                      >
                        <div className="text-sm font-semibold text-white">{title}</div>
                        <p className="mt-3 text-sm leading-7 text-[#D1D5DB]">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="teams" className="bg-[#F9FAFB] py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <SectionHeading
              eyebrow="Enterprise Teams"
              title="Built for Enterprise Teams That Translate at Scale"
              text="The Stepes Customer Translation Portal is designed for organizations that manage recurring multilingual content across teams, markets, and business functions. It gives enterprise stakeholders a more consistent way to request work, track progress, manage files, and retrieve completed deliverables across the content they manage every day."
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-12">
              <div className="xl:col-span-7 rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                  <div>
                    <div className="inline-flex rounded-full border border-[#F3D4E1] bg-[#FDF2F7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9F1D55]">
                      Multiteam translation management
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#111827]">
                      One customer workspace for recurring multilingual programs
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#4B5563]">
                      Whether teams are managing website updates, legal reviews, product releases, operational documents, or regulated content, the portal helps standardize how translation work is requested, tracked, and delivered across stakeholders.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-[#E5E7EB] bg-[#FCFCFD] p-5">
                    <div className="text-sm font-semibold text-[#111827]">Common content handled through the portal</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Website content",
                        "Marketing campaigns",
                        "Contracts and policies",
                        "Software strings",
                        "Product documentation",
                        "Training materials",
                        "Clinical and regulatory content",
                        "Quality documentation",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-medium text-[#4B5563]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-5 rounded-[28px] bg-[#111827] p-8 text-white shadow-[0_20px_60px_rgba(17,24,39,0.16)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Enterprise fit
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Designed for teams that need clearer visibility across languages, files, and approvals
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Support multiple stakeholders without losing project visibility",
                    "Keep recurring translation work organized across departments and regions",
                    "Maintain easier access to project files, deliverables, and history",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-[#D1D5DB]"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-white" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.04)]">
              {useCases.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-5 px-6 py-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-start lg:px-8 ${
                    index < useCases.length - 1 ? "border-b border-[#EEF0F2]" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F6F7]">
                      <Globe2 className="h-5 w-5 text-[#6B7280]" />
                    </div>
                    <div className="text-lg font-semibold text-[#111827]">{item.title}</div>
                  </div>
                  <p className="text-sm leading-7 text-[#4B5563]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="Secure Access"
                  title="Secure Access for Translation Projects"
                  text="Stepes gives customers secure access to translation files, project communications, approvals, and delivery records through organized project workspaces. The portal helps enterprise teams coordinate translation activity while keeping requests, files, and completed work tied to each project."
                />
              </div>

              <div className="lg:col-span-8 overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD] shadow-[0_18px_45px_rgba(17,24,39,0.04)]">
                <div className="grid md:grid-cols-2">
                  {securityItems.map((item, index) => {
                    const Icon = item.icon;
                    const rightBorder = index % 2 === 0 ? "md:border-r md:border-[#EEF0F2]" : "";
                    const bottomBorder = index < 2 ? "border-b border-[#EEF0F2]" : "";
                    return (
                      <div key={item.title} className={`p-7 ${rightBorder} ${bottomBorder}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF2F7]">
                            <Icon className="h-5 w-5 text-[#C11D63]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#111827]">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111827] py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <SectionHeading
              eyebrow="Connected Platform"
              title="Connected to the Stepes AI Translation Platform"
              text="The Customer Translation Portal is part of the broader Stepes language technology ecosystem, connecting customer-facing project management with Stepes translation automation, professional linguist workflows, quality assurance, terminology management, and enterprise reporting."
              tone="dark"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {relatedLinks.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`${index < 3 ? "xl:border-r xl:border-white/10 xl:pr-6" : ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8A355B] bg-white/5 text-[#F2A9C6]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#D1D5DB]">{item.text}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F7C6DA]">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="FAQs"
                  title="Customer Translation Portal FAQs"
                  text="Answers to common questions about requesting quotes, managing projects, and working with Stepes through the customer portal."
                />
              </div>
              <div className="lg:col-span-8 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_16px_40px_rgba(17,24,39,0.04)]">
                {faqs.map((item, index) => (
                  <div
                    key={item.q}
                    className={`px-6 py-6 lg:px-8 ${index < faqs.length - 1 ? "border-b border-[#EEF0F2]" : ""}`}
                  >
                    <h3 className="text-lg font-semibold text-[#111827]">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4B5563]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F6F7] py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10 xl:px-14">
            <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-8 text-center shadow-[0_24px_60px_rgba(17,24,39,0.05)] md:p-12">
              <div className="mx-auto inline-flex rounded-full border border-[#F3D4E1] bg-[#FDF2F7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                Ready to Get Started
              </div>
              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-4xl">
                Ready to Manage Translation Projects More Efficiently?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#4B5563] md:text-lg">
                Use the Stepes Customer Translation Portal to request quotes, launch projects, track progress, manage files, and access completed translations from one organized customer workspace.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PillButton href={QUOTE_URL} primary>
                  Request a Quote
                </PillButton>
                <PillButton href={PORTAL_LOGIN_URL}>Sign In to Customer Portal</PillButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
