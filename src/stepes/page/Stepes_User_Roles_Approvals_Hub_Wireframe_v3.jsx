import React, { useState } from "react";

/**
 * Stepes User Roles & Approvals Hub/Pillar Page Wireframe — Final Polish
 * Canonical URL: https://www.stepes.com/translation-approval-workflows/
 * Body-only React wireframe. Global navigation and footer intentionally omitted.
 */

const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Chevron = ({ open }) => (
  <svg className={`chevron ${open ? "is-open" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, size = 22 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const props = { stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    users: <><path {...props} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle {...props} cx="9" cy="7" r="4"/><path {...props} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    shield: <><path {...props} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path {...props} d="m9 12 2 2 4-4"/></>,
    workflow: <><rect {...props} x="3" y="3" width="6" height="6" rx="1.5"/><rect {...props} x="15" y="15" width="6" height="6" rx="1.5"/><path {...props} d="M9 6h3a3 3 0 0 1 3 3v6M15 18h-3a3 3 0 0 1-3-3V9"/></>,
    history: <><path {...props} d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path {...props} d="M3 3v5h5M12 7v5l3 2"/></>,
    spark: <><path {...props} d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z"/><path {...props} d="m18.5 14 .8 2.7L22 17.5l-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z"/></>,
    key: <><circle {...props} cx="8" cy="15" r="4"/><path {...props} d="m11 12 8-8M15 8l2 2M18 5l2 2"/></>,
    lock: <><rect {...props} x="4" y="10" width="16" height="11" rx="2"/><path {...props} d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    globe: <><circle {...props} cx="12" cy="12" r="9"/><path {...props} d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    briefcase: <><rect {...props} x="3" y="7" width="18" height="13" rx="2"/><path {...props} d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>,
    file: <><path {...props} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path {...props} d="M14 2v6h6M8 13h8M8 17h6"/></>,
    message: <><path {...props} d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.6V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z"/><path {...props} d="M7 8h10M7 12h7"/></>,
    layers: <><path {...props} d="m12 2 9 5-9 5-9-5 9-5Z"/><path {...props} d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    refresh: <><path {...props} d="M20 6v5h-5M4 18v-5h5"/><path {...props} d="M6.1 9a7 7 0 0 1 11.3-2.4L20 9M4 15l2.6 2.4A7 7 0 0 0 17.9 15"/></>,
    clipboard: <><rect {...props} x="5" y="4" width="14" height="18" rx="2"/><path {...props} d="M9 4V2h6v2M9 9h6M9 13h6M9 17h4"/></>,
    identity: <><circle {...props} cx="12" cy="8" r="4"/><path {...props} d="M4 21a8 8 0 0 1 16 0"/><path {...props} d="m18 5 2 2 3-3"/></>,
    chart: <><path {...props} d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    megaphone: <><path {...props} d="m3 11 14-6v14L3 13v-2Z"/><path {...props} d="m7 14 2 6h4l-2-5"/></>,
    code: <><path {...props} d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    scales: <><path {...props} d="M12 3v18M5 6h14M5 6l-3 7h6L5 6ZM19 6l-3 7h6l-3-7ZM8 21h8"/></>,
    heart: <><path {...props} d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></>,
    dollar: <><circle {...props} cx="12" cy="12" r="9"/><path {...props} d="M16 8.5c-.8-1-2-1.5-4-1.5-2.2 0-3.5 1-3.5 2.5s1.2 2.2 3.5 2.7c2.6.5 3.8 1.2 3.8 2.8s-1.5 2.8-3.8 2.8c-2 0-3.5-.6-4.4-1.8M12 4.5v15"/></>,
    support: <><path {...props} d="M4 13a8 8 0 0 1 16 0"/><path {...props} d="M4 13v4a2 2 0 0 0 2 2h2v-6H4ZM20 13v4a2 2 0 0 1-2 2h-2v-6h4ZM16 20c-1 1-2.3 1.5-4 1.5"/></>,
    link: <><path {...props} d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path {...props} d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></>,
  };
  return <svg {...common}>{paths[name] || paths.shield}</svg>;
};

const roleGroups = [
  {
    label: "Program Leadership",
    icon: "briefcase",
    roles: [
      ["Organization Administrator", "Manage enterprise settings, users, roles, access policies, and platform-wide controls."],
      ["Localization Program Manager", "Oversee multilingual programs, establish workflows, coordinate teams, and manage delivery across markets."],
      ["Project Manager", "Create projects, assign work, monitor progress, coordinate reviews, and resolve operational issues."],
    ],
  },
  {
    label: "Content Production",
    icon: "file",
    roles: [
      ["Content Requester", "Submit source content, provide business context, specify requirements, and track authorized requests."],
      ["Translator and Editor", "Complete assigned language work, address feedback, and submit translations for review."],
      ["Linguistic Reviewer", "Evaluate accuracy, fluency, terminology, style, consistency, and completeness."],
    ],
  },
  {
    label: "Expert Approval",
    icon: "shield",
    roles: [
      ["Subject-Matter Expert", "Validate technical, medical, legal, financial, scientific, or product-specific content."],
      ["Market or Regional Reviewer", "Confirm local relevance for the intended country, audience, and commercial environment."],
      ["Legal or Regulatory Approver", "Provide authorized sign-off where legal, risk, regulatory, or compliance review is required."],
    ],
  },
  {
    label: "Release and Oversight",
    icon: "key",
    roles: [
      ["Publisher or Release Manager", "Authorize approved content for delivery, integration, deployment, or publication."],
      ["Procurement or Financial Approver", "Review spending thresholds, cost centers, budgets, and purchasing requirements."],
      ["External Partner or Read-Only Stakeholder", "Participate in designated work without unnecessary access to unrelated content or controls."],
    ],
  },
];

const permissionRows = [
  { action: "Submit translation requests", requester: true, manager: true, reviewer: false, approver: false, admin: true },
  { action: "Assign translation and review work", requester: false, manager: true, reviewer: false, approver: false, admin: true },
  { action: "Edit translated content", requester: false, manager: true, reviewer: true, approver: false, admin: true },
  { action: "Approve terminology", requester: false, manager: true, reviewer: true, approver: true, admin: true },
  { action: "Approve or reject content", requester: false, manager: false, reviewer: true, approver: true, admin: true },
  { action: "Release or publish content", requester: false, manager: false, reviewer: false, approver: true, admin: true },
  { action: "Manage roles and policies", requester: false, manager: false, reviewer: false, approver: false, admin: true },
];

const workflowStages = [
  ["01", "Request", "Authorized users submit content, languages, deadlines, and business requirements."],
  ["02", "Translation", "Work is assigned to approved human linguists, AI workflows, or a governed combination of both."],
  ["03", "Linguistic Review", "Qualified reviewers evaluate accuracy, fluency, terminology, style, and completeness."],
  ["04", "Market or Expert Review", "Regional and subject-matter stakeholders validate local and domain-specific requirements."],
  ["05", "Final Approval", "Authorized approvers confirm that all required conditions have been satisfied."],
  ["06", "Release", "Only designated release owners can deliver, integrate, deploy, or publish approved content."],
];

const policyExamples = [
  ["Internal Knowledge", "AI translation and automated checks can support a streamlined release path for lower-risk internal content.", "Streamlined"],
  ["Marketing Content", "Linguistic review can be followed by local-market and brand approval before publication.", "Market + Brand"],
  ["Product and Technical", "Terminology validation, technical review, and product-owner approval protect product accuracy.", "Technical"],
  ["Legal and Financial", "Authorized legal, risk, or compliance stakeholders can provide required sign-off.", "Controlled"],
  ["Medical and Regulatory", "Qualified linguistic, subject-matter, quality, and final authorization stages support rigorous governance.", "High Oversight"],
];

const approvalTypes = [
  ["Linguistic Approval", "Confirm accuracy, fluency, grammar, terminology, style, consistency, and completeness."],
  ["Market Approval", "Validate that content is appropriate for the intended country, audience, culture, and commercial context."],
  ["Subject-Matter Approval", "Confirm technical, medical, scientific, legal, financial, or product-specific accuracy."],
  ["Brand Approval", "Protect approved voice, positioning, product naming, campaign requirements, and brand terminology."],
  ["Regulatory and Compliance Approval", "Route governed content to designated stakeholders for policy, legal, regulatory, or quality review."],
  ["Release Approval", "Provide final authorization for delivery, download, integration, deployment, or publication."],
];

const teamUseCases = [
  ["Localization Teams", "globe", "Coordinate internal stakeholders, language specialists, regional teams, and release owners across global programs."],
  ["Marketing Teams", "megaphone", "Require linguistic, regional, and brand approval before multilingual campaigns go live."],
  ["Product and Engineering", "code", "Align software strings, documentation, and release content with technical and publication approvals."],
  ["Legal Teams", "scales", "Limit access to sensitive materials and route content to authorized legal reviewers."],
  ["Life Sciences and Medical", "heart", "Apply structured linguistic, subject-matter, quality, and regulatory approval processes."],
  ["Procurement and Finance", "dollar", "Authorize translation requests, apply spending thresholds, and assign budget responsibility."],
  ["Customer Support", "support", "Accelerate multilingual support content while preserving additional oversight for sensitive communications."],
];

const lifecycle = [
  ["Submit the Request", "Capture source content, languages, deadlines, business purpose, and supporting information."],
  ["Verify Authority", "Apply the requester’s role and permissions before work begins."],
  ["Select the Policy", "Choose the workflow based on content, department, risk, language, market, or business rules."],
  ["Assign Participants", "Route tasks to users with the required roles, expertise, and access."],
  ["Complete Review", "Coordinate linguistic, market, subject-matter, quality, or compliance review."],
  ["Record Decisions", "Approvers accept, reject, or request changes with clear comments and ownership."],
  ["Authorize Release", "Only content that meets every required condition can proceed to delivery or publication."],
  ["Preserve Evidence", "Keep role assignments, version changes, review actions, and release decisions available for reporting."],
];

const relatedCapabilities = [
  ["Workflow Automation", "Automate content intake, task routing, reminders, escalation, and delivery.", "https://www.stepes.com/translation-workflow-automation/"],
  ["Enterprise Translation Management", "Manage translation programs, teams, projects, budgets, and language assets centrally.", "https://www.stepes.com/enterprise-translation-management/"],
  ["AI + Human Translation Workflow", "Combine AI translation speed with qualified review, subject-matter expertise, and human approval.", "https://www.stepes.com/ai-human-translation-workflow/"],
  ["Translation Quality Assurance", "Apply automated and human quality controls before multilingual content is approved and released.", "https://www.stepes.com/translation-quality-assurance/"],
  ["Terminology Management", "Control who can propose, review, approve, modify, and publish multilingual terminology.", "https://www.stepes.com/terminology-management/"],
  ["Translation Memory", "Reuse approved translations while maintaining control over access, validation, and version history.", "https://www.stepes.com/translation-memory/"],
  ["Reporting & Analytics", "Measure approval performance, reviewer workloads, exceptions, bottlenecks, and program outcomes.", "https://www.stepes.com/translation-reporting-analytics/"],
  ["Enterprise Security", "Connect translation permissions with enterprise identity, authentication, access, and data protection.", "https://www.stepes.com/enterprise-security/"],
  ["Integrations", "Connect approval workflows with enterprise content, development, collaboration, and business systems.", "https://www.stepes.com/integrations/"],
];

const faqs = [
  ["What are translation approval workflows?", "Translation approval workflows are structured processes that determine how multilingual content is reviewed, revised, authorized, and released. A workflow may include translation, linguistic review, regional review, subject-matter validation, legal or regulatory approval, and final publication authorization."],
  ["How do user roles differ from permissions?", "A role represents a participant’s general responsibility, such as project manager, translator, reviewer, approver, or administrator. Permissions define the specific actions that person is authorized to perform, including viewing projects, editing translations, assigning work, approving content, exporting files, or managing users."],
  ["Can Stepes support custom enterprise roles?", "Yes. Organizations can configure roles that reflect their operating model, governance structure, departments, and approval responsibilities. Custom roles can combine permissions and be applied across workspaces, projects, content types, languages, markets, or business units."],
  ["Can permissions be limited by project, language, market, or business unit?", "Yes. A regional reviewer can be limited to a designated market, while an external linguist can access only assigned projects and target languages. Administrators can prevent participants from viewing or changing content outside their responsibilities."],
  ["Can different content types follow different approval workflows?", "Yes. Approval requirements can vary according to content type, audience, risk, department, regulatory status, translation method, market, product, budget, or quality findings."],
  ["Does Stepes support sequential and parallel approvals?", "Yes. Sequential workflows move content through required stages in a defined order. Parallel workflows allow multiple stakeholders to review content simultaneously. Organizations can combine both approaches within the same workflow."],
  ["Can more than one person be required to approve a translation?", "Yes. Approval policies can require every assigned reviewer, any one authorized reviewer, a minimum number of reviewers, or approval from designated roles or groups. A named final approver can also be required after earlier reviews are complete."],
  ["Can external reviewers participate without accessing unrelated projects?", "Yes. External agencies, linguists, consultants, and market reviewers can be granted access only to designated projects, tasks, languages, or workflow stages without visibility into unrelated content, pricing, or administrative controls."],
  ["Can Stepes require human approval for AI-generated translations?", "Yes. Enterprises can define when AI-generated translations require linguistic review, subject-matter validation, compliance approval, or named human authorization. Policies can vary by content type, risk, language, department, quality indicator, and intended audience."],
  ["What happens when an approver requests changes?", "The content returns to the appropriate workflow participant with the reviewer’s comments and requested revisions. Once changes are complete, the content can be resubmitted to the required review or approval stage, while the full decision history remains connected."],
  ["What happens when approved source content is modified?", "Stepes can associate approvals with specific content versions and identify when approved source material changes. Affected translations can be reopened or returned to review so an earlier approval does not automatically authorize materially revised content."],
  ["Can approval decisions be exported for audit purposes?", "Authorized users can access and export approval records containing the reviewer, role, date, language, content version, workflow stage, comments, decision, and release status to support internal quality, governance, compliance, or audit processes."],
  ["Can translation requests require budget or procurement approval?", "Yes. Requests can be routed for authorization according to project value, department, requester, cost center, budget threshold, content type, or purchasing requirements."],
  ["How do roles and approvals integrate with enterprise identity systems?", "Enterprise identity systems verify who a user is, while Stepes roles and permissions determine what that user is authorized to view, change, approve, and release. The platform can align access with single sign-on, centralized provisioning, group-to-role mapping, and user lifecycle controls."],
  ["Can Stepes report on overdue approvals and workflow bottlenecks?", "Yes. Reporting can provide visibility into pending and overdue approvals, average approval times, reviewer workloads, rework, escalation activity, policy exceptions, and content awaiting final release."],
];

function ButtonLink({ href, children, primary = false }) {
  return (
    <a className={`button ${primary ? "button-primary" : "button-secondary"}`} href={href}>
      <span>{children}</span><ArrowRight size={17} />
    </a>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="editorial-link" href={href}>
      <span>{children}</span><ArrowRight size={16} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false, dark = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""} ${dark ? "on-dark" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function ApprovalFlowMockup() {
  const mockStages = [
    ["Translation", "Completed", "AK"],
    ["Linguistic Review", "Approved", "MS"],
    ["Market Review", "In progress", "JL"],
    ["Final Approval", "Waiting", "RP"],
  ];
  return (
    <div className="hero-mockup" aria-label="Illustrative translation approval workflow">
      <div className="mockup-topbar">
        <div>
          <div className="mockup-kicker">GLOBAL PRODUCT RELEASE</div>
          <div className="mockup-title">French · Canada</div>
        </div>
        <span className="status-chip active">Approval in progress</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-rail" aria-hidden="true" />
        {mockStages.map(([label, status, initials], index) => (
          <div className={`mockup-stage ${status === "In progress" ? "selected" : ""}`} key={label}>
            <div className={`stage-dot ${status === "Completed" || status === "Approved" ? "done" : status === "In progress" ? "current" : ""}`}>
              {status === "Completed" || status === "Approved" ? <Check size={14} /> : index + 1}
            </div>
            <div className="mockup-stage-copy">
              <strong>{label}</strong>
              <span>{status}</span>
            </div>
            <div className="avatar" aria-label={`Assigned reviewer ${initials}`}>{initials}</div>
          </div>
        ))}
      </div>
      <div className="mockup-footer">
        <div>
          <span className="mockup-label">Required approvals</span>
          <strong>3 of 4 complete</strong>
        </div>
        <div className="progress-track" aria-hidden="true"><div className="progress-bar" /></div>
      </div>
    </div>
  );
}

function PermissionMark({ enabled }) {
  return enabled ? <span className="permission-yes"><Check size={16} /></span> : <span className="permission-no">—</span>;
}

function FAQItem({ question, answer, open, onToggle, id }) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button id={`faq-button-${id}`} className="faq-question" type="button" aria-expanded={open} aria-controls={`faq-panel-${id}`} onClick={onToggle}>
        <span>{question}</span>
        <Chevron open={open} />
      </button>
      <div className="faq-answer" id={`faq-panel-${id}`} role="region" aria-labelledby={`faq-button-${id}`} hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function StepesUserRolesApprovalsHubWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --ink: #111827;
          --ink-2: #283244;
          --muted: #5f6b7c;
          --line: #e3e7ed;
          --line-strong: #d4dbe4;
          --soft: #f7f8fa;
          --blush: #fdf2f7;
          --magenta: #c11d63;
          --magenta-dark: #9f1d55;
          --magenta-deep: #7a1542;
          --magenta-light: #f2a7c6;
          --dark: #161b27;
          --dark-2: #202736;
          --white: #ffffff;
          --radius-lg: 30px;
          --radius-md: 22px;
          --shadow: 0 18px 45px rgba(17, 24, 39, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          min-width: 0;
          overflow: hidden;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-page a { color: inherit; }
        .stepes-page p, .stepes-page li { font-size: 16px; line-height: 1.72; font-weight: 400; }
        .stepes-page h1, .stepes-page h2, .stepes-page h3 { margin: 0; font-weight: 600; letter-spacing: -0.028em; }
        .stepes-page h1 { font-size: 48px; line-height: 1.08; }
        .stepes-page h2 { font-size: 36px; line-height: 1.16; }
        .stepes-page h3 { font-size: 24px; line-height: 1.26; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section-soft { background: var(--soft); }
        .section-dark { background: var(--dark); color: var(--white); }
        .section-blush { background: var(--blush); }
        .eyebrow {
          margin-bottom: 16px;
          color: var(--magenta-dark);
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.35 !important;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .on-dark .eyebrow, .section-dark .eyebrow { color: var(--magenta-light); }
        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading h2 { max-width: 760px; }
        .section-heading.centered h2 { margin-left: auto; margin-right: auto; }
        .section-heading p { max-width: 800px; margin: 20px 0 0; color: var(--muted); font-size: 18px; line-height: 1.67; }
        .section-heading.centered p { margin-left: auto; margin-right: auto; }
        .section-heading.on-dark p { color: #cbd3df; }

        .button-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 13px 22px;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }
        .button-primary, .button-primary:visited, .button-primary:hover, .button-primary:active, .button-primary:focus-visible { color: #fff !important; }
        .button-primary { background: var(--magenta); border: 1px solid var(--magenta); box-shadow: 0 10px 24px rgba(193, 29, 99, .18); }
        .button-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
        .button-secondary { background: var(--white); border: 1px solid var(--line-strong); color: var(--ink); }
        .button-secondary:hover { border-color: #aeb7c4; transform: translateY(-1px); }
        .button:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193, 29, 99, .25); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          max-width: 100%;
          align-items: flex-start;
          gap: 7px;
          color: var(--magenta-dark) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          text-decoration: none;
        }
        .editorial-link span { min-width: 0; }
        .editorial-link svg { flex: 0 0 auto; margin-top: 3px; transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }

        /* Hero */
        .hero { padding: 104px 0 92px; background: linear-gradient(180deg, #fff 0%, #fff 74%, #fafbfc 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(460px, .98fr); gap: 64px; align-items: center; }
        .hero-copy { max-width: 650px; }
        .hero h1 { max-width: 720px; }
        .hero-lead { margin: 24px 0 30px; max-width: 660px; color: var(--muted); font-size: 18px !important; line-height: 1.68 !important; }
        .hero-note { margin: 22px 0 0; display: flex; gap: 10px; align-items: flex-start; color: var(--ink-2); }
        .hero-note svg { flex: 0 0 auto; margin-top: 4px; color: var(--magenta); }
        .hero-note span { font-size: 16px; line-height: 1.55; }
        .hero-mockup { position: relative; border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; box-shadow: var(--shadow); overflow: hidden; }
        .hero-mockup::before { content: ""; position: absolute; inset: 0 0 auto; height: 3px; background: var(--magenta); }
        .mockup-topbar { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; padding: 26px 28px 22px; border-bottom: 1px solid var(--line); }
        .mockup-kicker { color: #7b8798; font-size: 14px; line-height: 1.3; font-weight: 600; letter-spacing: .08em; }
        .mockup-title { margin-top: 5px; font-size: 19px; font-weight: 600; }
        .status-chip { display: inline-flex; align-items: center; min-height: 32px; padding: 7px 11px; border-radius: 999px; font-size: 14px; line-height: 1.2; font-weight: 600; white-space: nowrap; }
        .status-chip.active { background: var(--blush); color: var(--magenta-dark); }
        .mockup-body { position: relative; padding: 13px 28px; }
        .mockup-rail { position: absolute; top: 41px; bottom: 41px; left: 44px; width: 1px; background: var(--line-strong); }
        .mockup-stage { position: relative; display: grid; grid-template-columns: 34px minmax(0, 1fr) 38px; gap: 14px; align-items: center; padding: 14px 10px 14px 0; border-radius: 14px; }
        .mockup-stage.selected { background: #fbf3f7; }
        .stage-dot { z-index: 1; width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid var(--line-strong); border-radius: 50%; background: #fff; color: #7a8595; font-size: 14px; font-weight: 600; }
        .stage-dot.done { background: #f1f6f3; border-color: #bcd6c6; color: #36714c; }
        .stage-dot.current { background: var(--magenta); border-color: var(--magenta); color: #fff; }
        .mockup-stage-copy { min-width: 0; }
        .mockup-stage-copy strong { display: block; font-size: 16px; font-weight: 600; line-height: 1.3; }
        .mockup-stage-copy span { display: block; margin-top: 3px; color: var(--muted); font-size: 14px; line-height: 1.35; }
        .avatar { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: #eef1f5; color: #455164; font-size: 14px; font-weight: 600; }
        .mockup-footer { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 22px; padding: 20px 28px 26px; border-top: 1px solid var(--line); }
        .mockup-label { display: block; color: var(--muted); font-size: 14px; line-height: 1.3; }
        .mockup-footer strong { display: block; margin-top: 4px; font-size: 16px; }
        .progress-track { height: 7px; border-radius: 999px; background: #eceff3; overflow: hidden; }
        .progress-bar { width: 75%; height: 100%; border-radius: inherit; background: var(--magenta); }

        /* Trust strip */
        .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .trust-item { padding: 24px 20px; text-align: center; }
        .trust-item strong { display: block; font-size: 15px; line-height: 1.4; font-weight: 600; }
        .trust-item span { display: block; margin-top: 5px; color: var(--muted); font-size: 16px; line-height: 1.5; }

        /* Governance overview */
        .governance-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; align-items: start; }
        .governance-intro p { margin: 22px 0 0; color: var(--muted); font-size: 18px; }
        .governance-panel { border-top: 1px solid var(--line-strong); }
        .governance-row { display: grid; grid-template-columns: 56px 150px minmax(0, 1fr); gap: 22px; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .icon-box { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta-dark); }
        .governance-row h3 { padding-top: 8px; font-size: 22px; }
        .governance-row p { margin: 4px 0 0; color: var(--muted); }

        /* Roles */
        .roles-stack { border-top: 1px solid var(--line-strong); }
        .role-group { display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 50px; padding: 34px 0; border-bottom: 1px solid var(--line); }
        .role-group-label { display: flex; align-items: flex-start; gap: 14px; }
        .role-group-label .icon-box { width: 42px; height: 42px; flex: 0 0 auto; }
        .role-group-label h3 { padding-top: 7px; font-size: 21px; }
        .role-items { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
        .role-item strong { display: block; font-size: 16px; line-height: 1.45; font-weight: 600; }
        .role-item p { margin: 8px 0 0; color: var(--muted); }
        .roles-note { margin-top: 32px; padding: 22px 24px; border-radius: 18px; background: var(--blush); color: var(--ink-2); font-size: 16px; line-height: 1.65; }

        /* Permission matrix */
        .permission-layout { display: grid; grid-template-columns: 320px minmax(0, 1fr); gap: 54px; align-items: start; }
        .permission-copy p { margin: 20px 0 0; color: var(--muted); }
        .permission-principles { margin-top: 28px; }
        .principle { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 12px; padding: 17px 0; border-top: 1px solid var(--line); }
        .principle svg { margin-top: 3px; color: var(--magenta); }
        .principle strong { display: block; font-size: 16px; font-weight: 600; }
        .principle p { margin: 5px 0 0; color: var(--muted); }
        .matrix-wrap { overflow: hidden; border: 1px solid var(--line); border-radius: var(--radius-md); background: #fff; }
        .permission-matrix { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .permission-matrix th, .permission-matrix td { padding: 16px 12px; border-bottom: 1px solid var(--line); text-align: center; vertical-align: middle; }
        .permission-matrix tr:last-child td { border-bottom: 0; }
        .permission-matrix th { background: #f8f9fb; color: #596577; font-size: 14px; line-height: 1.35; font-weight: 600; }
        .permission-matrix th:first-child, .permission-matrix td:first-child { width: 34%; padding-left: 20px; text-align: left; }
        .permission-matrix td:first-child { color: var(--ink-2); font-size: 16px; line-height: 1.45; font-weight: 500; }
        .permission-yes { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: #f2f7f3; color: #34704a; }
        .permission-no { color: #b8c0cb; }
        .matrix-caption { padding: 16px 20px 18px; border-top: 1px solid var(--line); color: var(--muted); font-size: 16px; line-height: 1.55; }

        /* Workflow */
        .workflow-track { position: relative; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 0; margin-top: 56px; }
        .workflow-track::before { content: ""; position: absolute; left: 7%; right: 7%; top: 23px; height: 1px; background: #4a5364; }
        .workflow-stage { position: relative; z-index: 1; padding: 0 15px; text-align: center; }
        .workflow-number { width: 46px; height: 46px; display: grid; place-items: center; margin: 0 auto 18px; border: 1px solid #586174; border-radius: 50%; background: var(--dark); color: var(--magenta-light); font-size: 14px; font-weight: 600; }
        .workflow-stage h3 { font-size: 18px; letter-spacing: -.015em; }
        .workflow-stage p { margin: 10px 0 0; color: #bdc6d4; font-size: 16px; line-height: 1.58; }
        .workflow-rules { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 58px; border-top: 1px solid #3a4251; border-bottom: 1px solid #3a4251; }
        .workflow-rule { padding: 24px 24px 24px 0; }
        .workflow-rule + .workflow-rule { padding-left: 24px; border-left: 1px solid #3a4251; }
        .workflow-rule strong { display: block; font-size: 16px; font-weight: 600; }
        .workflow-rule span { display: block; margin-top: 7px; color: #bdc6d4; font-size: 16px; line-height: 1.55; }

        /* Risk policy */
        .policy-intro { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: end; margin-bottom: 48px; }
        .policy-intro p { margin: 0; color: var(--muted); font-size: 18px; }
        .policy-list { border-top: 1px solid var(--line-strong); }
        .policy-row { display: grid; grid-template-columns: 210px minmax(0, 1fr) 150px; gap: 28px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .policy-row h3 { font-size: 20px; }
        .policy-row p { margin: 0; color: var(--muted); }
        .policy-level { justify-self: end; padding: 8px 11px; border-radius: 999px; background: #f2f4f7; color: #4e596b; font-size: 14px; line-height: 1.2; font-weight: 600; white-space: nowrap; }
        .policy-factors { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; margin-top: 36px; }
        .factor { padding: 18px; border: 1px solid var(--line); border-radius: 16px; background: #fff; color: var(--ink-2); font-size: 16px; line-height: 1.45; text-align: center; }

        /* Request approvals */
        .request-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 64px; align-items: center; }
        .request-copy p { margin: 21px 0 0; color: var(--muted); }
        .request-benefits { margin: 26px 0 28px; display: grid; gap: 11px; }
        .check-row { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: start; }
        .check-row svg { margin-top: 4px; color: var(--magenta); }
        .check-row span { font-size: 16px; line-height: 1.6; }
        .request-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; box-shadow: var(--shadow); overflow: hidden; }
        .request-panel-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 24px 26px; border-bottom: 1px solid var(--line); }
        .request-panel-head strong { font-size: 18px; }
        .request-form { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding: 24px 26px; }
        .field { min-width: 0; }
        .field.full { grid-column: 1 / -1; }
        .field-label { display: block; margin-bottom: 7px; color: #667284; font-size: 14px; line-height: 1.3; font-weight: 600; }
        .field-value { min-height: 48px; display: flex; align-items: center; padding: 12px 14px; border: 1px solid var(--line); border-radius: 11px; background: #fafbfc; color: var(--ink-2); font-size: 16px; line-height: 1.45; }
        .request-route { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; padding: 20px 26px 26px; border-top: 1px solid var(--line); }
        .request-route span { color: var(--muted); font-size: 16px; line-height: 1.5; }
        .route-owner { display: inline-flex; align-items: center; gap: 9px; color: var(--ink) !important; font-size: 16px !important; font-weight: 600; }

        /* Approval types */
        .approval-dashboard { display: grid; grid-template-columns: 1.15fr .85fr; gap: 44px; align-items: start; }
        .language-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; overflow: hidden; }
        .panel-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 23px 26px; border-bottom: 1px solid var(--line); }
        .panel-head h3 { font-size: 20px; }
        .panel-head span { color: var(--muted); font-size: 14px; }
        .language-row { display: grid; grid-template-columns: minmax(0, 1fr) 155px 115px; gap: 18px; align-items: center; padding: 20px 26px; border-bottom: 1px solid var(--line); }
        .language-row:last-child { border-bottom: 0; }
        .language-name strong { display: block; font-size: 16px; font-weight: 600; }
        .language-name span { display: block; margin-top: 4px; color: var(--muted); font-size: 16px; line-height: 1.45; }
        .approval-step { color: var(--ink-2); font-size: 16px; line-height: 1.4; }
        .approval-status { justify-self: end; min-width: 96px; text-align: center; padding: 7px 9px; border-radius: 999px; font-size: 14px; line-height: 1.2; font-weight: 600; }
        .approval-status.ready { background: #f1f7f3; color: #37714b; }
        .approval-status.progress { background: var(--blush); color: var(--magenta-dark); }
        .approval-status.waiting { background: #f2f4f7; color: #647083; }
        .approval-types { border-top: 1px solid var(--line-strong); }
        .approval-type { padding: 17px 0; border-bottom: 1px solid var(--line); }
        .approval-type strong { display: block; font-size: 16px; font-weight: 600; }
        .approval-type p { margin: 5px 0 0; color: var(--muted); }

        /* AI governance */
        .ai-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: center; }
        .ai-copy p { margin: 22px 0 0; color: #cbd3df; font-size: 18px; }
        .ai-copy .editorial-link { margin-top: 26px; color: var(--magenta-light) !important; }
        .ai-policy-panel { border: 1px solid #3a4352; border-radius: var(--radius-lg); background: var(--dark-2); overflow: hidden; }
        .ai-policy-head { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 24px; border-bottom: 1px solid #3a4352; }
        .ai-policy-head strong { font-size: 18px; }
        .ai-policy-row { display: grid; grid-template-columns: 190px minmax(0, 1fr) 116px; gap: 20px; align-items: center; padding: 19px 24px; border-bottom: 1px solid #343c4a; }
        .ai-policy-row:last-child { border-bottom: 0; }
        .ai-policy-row strong { font-size: 16px; line-height: 1.4; }
        .ai-policy-row span { color: #c1cad7; font-size: 16px; line-height: 1.5; }
        .ai-route { justify-self: end; color: var(--magenta-light) !important; font-size: 16px !important; line-height: 1.4; font-weight: 600; text-align: right; }

        /* Reviews */
        .revision-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; }
        .revision-copy p { margin: 22px 0 0; color: var(--muted); }
        .revision-actions { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .revision-action { padding: 8px 11px; border: 1px solid var(--line); border-radius: 999px; background: #fff; color: var(--ink-2); font-size: 14px; line-height: 1.25; font-weight: 600; }
        .revision-timeline { position: relative; padding-left: 34px; }
        .revision-timeline::before { content: ""; position: absolute; top: 12px; bottom: 12px; left: 9px; width: 1px; background: var(--line-strong); }
        .revision-event { position: relative; padding: 0 0 30px 20px; }
        .revision-event:last-child { padding-bottom: 0; }
        .revision-event::before { content: ""; position: absolute; left: -30px; top: 7px; width: 12px; height: 12px; border: 3px solid #fff; border-radius: 50%; background: var(--magenta); box-shadow: 0 0 0 1px var(--magenta); }
        .revision-event strong { display: block; font-size: 17px; font-weight: 600; }
        .revision-event p { margin: 6px 0 0; color: var(--muted); }
        .revision-meta { margin-top: 8px; color: #7b8798; font-size: 14px; line-height: 1.35; }

        /* Version integrity */
        .version-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 62px; align-items: center; }
        .version-copy p { margin: 21px 0 0; color: var(--muted); }
        .version-list { margin-top: 25px; display: grid; gap: 13px; }
        .version-card { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; box-shadow: var(--shadow); overflow: hidden; }
        .version-card-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 22px 24px; border-bottom: 1px solid var(--line); }
        .version-card-head strong { font-size: 17px; }
        .version-compare { display: grid; grid-template-columns: 1fr 1fr; }
        .version-column { padding: 22px 24px; }
        .version-column + .version-column { border-left: 1px solid var(--line); }
        .version-label { color: #718093; font-size: 14px; line-height: 1.3; font-weight: 600; }
        .version-column h3 { margin-top: 9px; font-size: 18px; }
        .version-column p { margin: 8px 0 0; color: var(--muted); }
        .version-change { margin-top: 15px; padding: 11px 12px; border-radius: 10px; background: #fff7e8; color: #6f5120; font-size: 16px; line-height: 1.5; }
        .version-alert { display: flex; gap: 12px; align-items: flex-start; padding: 19px 24px 23px; border-top: 1px solid var(--line); background: var(--blush); }
        .version-alert svg { flex: 0 0 auto; margin-top: 2px; color: var(--magenta); }
        .version-alert span { font-size: 16px; line-height: 1.55; }

        /* Audit */
        .audit-grid { display: grid; grid-template-columns: 1.12fr .88fr; gap: 60px; align-items: center; }
        .audit-log { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; overflow: hidden; }
        .audit-head { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 24px; border-bottom: 1px solid var(--line); }
        .audit-head strong { font-size: 18px; }
        .audit-event { display: grid; grid-template-columns: 68px 36px minmax(0, 1fr) 112px; gap: 14px; align-items: center; padding: 18px 24px; border-bottom: 1px solid var(--line); }
        .audit-event:last-child { border-bottom: 0; }
        .audit-time { color: #7b8798; font-size: 14px; line-height: 1.35; }
        .audit-copy strong { display: block; font-size: 16px; font-weight: 600; }
        .audit-copy span { display: block; margin-top: 3px; color: var(--muted); font-size: 16px; line-height: 1.45; }
        .audit-state { justify-self: end; font-size: 14px; line-height: 1.35; font-weight: 600; color: #526072; }
        .audit-copy-side p { margin: 21px 0 0; color: var(--muted); }
        .audit-filters { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .audit-filter { padding: 8px 11px; border-radius: 999px; background: #eef1f5; color: #4f5b6d; font-size: 14px; line-height: 1.2; font-weight: 600; }

        /* Identity */
        .identity-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 68px; align-items: center; }
        .identity-copy p { margin: 21px 0 0; color: var(--muted); }
        .identity-copy .editorial-link { margin-top: 24px; }
        .identity-flow { position: relative; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; }
        .identity-flow::before { content: ""; position: absolute; left: 16%; right: 16%; top: 44px; height: 1px; background: var(--line-strong); }
        .identity-node { position: relative; z-index: 1; text-align: center; }
        .identity-node .icon-box { width: 88px; height: 88px; margin: 0 auto 17px; border-radius: 24px; background: #fff; border: 1px solid var(--line); color: var(--magenta-dark); box-shadow: 0 12px 28px rgba(17, 24, 39, .06); }
        .identity-node h3 { font-size: 19px; }
        .identity-node p { margin: 8px 0 0; color: var(--muted); }

        /* Analytics */
        .analytics-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; align-items: center; }
        .analytics-copy p { margin: 21px 0 0; color: var(--muted); }
        .analytics-copy .editorial-link { margin-top: 24px; }
        .analytics-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; box-shadow: var(--shadow); overflow: hidden; }
        .analytics-panel-head { display: flex; justify-content: space-between; align-items: center; gap: 18px; padding: 20px 24px; border-bottom: 1px solid var(--line); }
        .analytics-panel-head strong { font-size: 17px; font-weight: 600; }
        .analytics-panel-head span { color: var(--muted); font-size: 14px; line-height: 1.3; font-weight: 600; }
        .analytics-panel-body { padding: 24px; }
        .metric-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .metric { padding: 18px; border: 1px solid var(--line); border-radius: 16px; }
        .metric span { display: block; color: var(--muted); font-size: 14px; line-height: 1.35; }
        .metric strong { display: block; margin-top: 9px; font-size: 26px; line-height: 1.1; font-weight: 600; }
        .metric em { display: block; margin-top: 6px; color: #4b7a5c; font-size: 14px; line-height: 1.35; font-style: normal; font-weight: 600; }
        .analytics-chart { margin-top: 20px; padding: 20px; border: 1px solid var(--line); border-radius: 16px; }
        .chart-head { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 22px; }
        .chart-head strong { font-size: 16px; }
        .chart-head span { color: var(--muted); font-size: 14px; }
        .bars { height: 170px; display: grid; grid-template-columns: repeat(7, 1fr); gap: 13px; align-items: end; border-bottom: 1px solid var(--line-strong); }
        .bar { position: relative; min-height: 22px; border-radius: 7px 7px 0 0; background: #d9dee6; }
        .bar.highlight { background: var(--magenta); }
        .bar-label { position: absolute; left: 50%; top: calc(100% + 9px); transform: translateX(-50%); color: #6d798b; font-size: 14px; line-height: 1.2; font-weight: 600; white-space: nowrap; }
        .bar-label-full { display: none; }

        /* Use cases */
        .use-case-list { border-top: 1px solid var(--line-strong); }
        .use-case-row { display: grid; grid-template-columns: 58px 235px minmax(0, 1fr); gap: 24px; align-items: start; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .use-case-row .icon-box { width: 44px; height: 44px; }
        .use-case-row h3 { padding-top: 8px; font-size: 20px; }
        .use-case-row p { margin: 4px 0 0; color: var(--muted); }

        /* Lifecycle */
        .lifecycle-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid #3a4251; border-left: 1px solid #3a4251; }
        .lifecycle-step { min-height: 230px; padding: 28px; border-right: 1px solid #3a4251; border-bottom: 1px solid #3a4251; }
        .lifecycle-number { color: var(--magenta-light); font-size: 14px; line-height: 1.3; font-weight: 600; letter-spacing: .08em; }
        .lifecycle-step h3 { margin-top: 22px; font-size: 20px; }
        .lifecycle-step p { margin: 10px 0 0; color: #bdc6d4; }

        /* Related */
        .related-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 34px; border-top: 1px solid var(--line-strong); }
        .related-item { display: grid; grid-template-columns: 1fr; align-content: start; gap: 14px; min-height: 176px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .related-item h3 { font-size: 20px; }
        .related-item p { margin: 7px 0 0; color: var(--muted); }
        .related-item .editorial-link { align-self: end; justify-self: start; }

        /* FAQ */
        .faq-wrap { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line-strong); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; min-height: 76px; display: grid; grid-template-columns: minmax(0, 1fr) 24px; gap: 22px; align-items: center; padding: 20px 0; border: 0; background: transparent; color: var(--ink); text-align: left; cursor: pointer; }
        .faq-question span { font-size: 18px; line-height: 1.45; font-weight: 600; }
        .chevron { color: var(--muted); transition: transform .2s ease; }
        .chevron.is-open { transform: rotate(180deg); }
        .faq-answer { padding: 0 60px 24px 0; }
        .faq-answer p { max-width: 840px; margin: 0; color: var(--muted); }

        /* Final CTA */
        .final-cta { padding: 88px 0 96px; background: #fff; }
        .cta-panel { position: relative; overflow: hidden; padding: 62px 64px; border: 1px solid #eed3df; border-radius: var(--radius-lg); background: var(--blush); }
        .cta-panel::after { content: ""; position: absolute; right: -80px; bottom: -115px; width: 300px; height: 300px; border-radius: 50%; border: 1px solid rgba(193, 29, 99, .13); pointer-events: none; }
        .cta-content { position: relative; z-index: 1; max-width: 820px; }
        .cta-content h2 { max-width: 760px; }
        .cta-content p { max-width: 760px; margin: 20px 0 28px; color: var(--muted); font-size: 18px; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(420px, .95fr); gap: 42px; }
          .role-items { grid-template-columns: 1fr 1fr; }
          .workflow-track { grid-template-columns: repeat(3, 1fr); row-gap: 38px; }
          .workflow-track::before { display: none; }
          .workflow-rule { padding-right: 18px; }
          .permission-layout { grid-template-columns: 290px minmax(0, 1fr); gap: 38px; }
          .permission-matrix th, .permission-matrix td { padding: 15px 8px; }
          .permission-matrix th:first-child, .permission-matrix td:first-child { padding-left: 14px; }
          .ai-policy-row { grid-template-columns: 160px minmax(0, 1fr) 104px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          .stepes-page h1 { font-size: 42px; }
          .stepes-page h2 { font-size: 32px; }
          .stepes-page h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-grid, .governance-grid, .permission-layout, .policy-intro, .request-grid, .approval-dashboard, .ai-grid, .revision-grid, .version-grid, .audit-grid, .identity-layout, .analytics-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-copy { max-width: 760px; }
          .hero-mockup { max-width: 680px; }
          .trust-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .trust-item { grid-column: span 2; }
          .trust-item:nth-child(n+4) { grid-column: span 3; border-top: 1px solid var(--line); }
          .governance-row { grid-template-columns: 50px 135px minmax(0, 1fr); }
          .role-group { grid-template-columns: 210px minmax(0, 1fr); gap: 30px; }
          .role-items { grid-template-columns: 1fr 1fr; }
          .permission-copy { max-width: 760px; }
          .matrix-wrap { overflow: hidden; }
          .permission-matrix, .permission-matrix tbody { display: block; width: 100%; }
          .permission-matrix thead { display: none; }
          .permission-matrix tr { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); padding: 15px; border-bottom: 1px solid var(--line); }
          .permission-matrix tr:last-child { border-bottom: 0; }
          .permission-matrix td { display: block; padding: 8px !important; border-bottom: 0 !important; text-align: center !important; }
          .permission-matrix td:first-child { grid-column: 1 / -1; width: auto; margin-bottom: 7px; padding: 0 4px 13px !important; border-bottom: 1px solid var(--line) !important; text-align: left !important; }
          .permission-matrix td:not(:first-child)::before { content: attr(data-label); display: block; margin-bottom: 7px; color: #718093; font-size: 14px; line-height: 1.3; font-weight: 600; }
          .workflow-track { grid-template-columns: 1fr 1fr; }
          .workflow-rules { grid-template-columns: 1fr 1fr; }
          .workflow-rule:nth-child(3) { border-left: 0; border-top: 1px solid #3a4251; }
          .workflow-rule:nth-child(4) { border-top: 1px solid #3a4251; }
          .policy-factors { grid-template-columns: 1fr 1fr; }
          .approval-dashboard { gap: 48px; }
          .ai-copy { max-width: 760px; }
          .identity-flow { max-width: 720px; }
          .related-list { grid-template-columns: 1fr 1fr; column-gap: 30px; }
          .lifecycle-grid { grid-template-columns: 1fr 1fr; }
          .cta-panel { padding: 52px 44px; }
        }

        @media (max-width: 680px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          .stepes-page h1 { font-size: 38px; line-height: 1.1; }
          .stepes-page h2 { font-size: 30px; }
          .stepes-page h3 { font-size: 20px; }
          .section-heading { margin-bottom: 36px; }
          .section-heading p, .hero-lead, .cta-content p, .policy-intro p, .ai-copy p { font-size: 18px !important; }
          .hero { padding: 72px 0 68px; }
          .hero-grid { gap: 38px; }
          .button-row { display: grid; grid-template-columns: 1fr; width: 100%; }
          .button { width: 100%; min-height: 50px; }
          .mockup-topbar { flex-direction: column; padding: 23px 21px 18px; }
          .mockup-body { padding: 10px 18px; }
          .mockup-rail { left: 34px; }
          .mockup-stage { grid-template-columns: 32px minmax(0, 1fr) 34px; gap: 11px; padding-right: 4px; }
          .mockup-footer { grid-template-columns: 1fr; gap: 12px; padding: 18px 21px 23px; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item { grid-column: auto !important; padding: 19px 10px; border-top: 1px solid var(--line); }
          .trust-item:first-child { border-top: 0; }
          .governance-row { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .governance-row h3 { padding-top: 8px; }
          .governance-row p { grid-column: 2; margin-top: -4px; }
          .role-group { grid-template-columns: 1fr; gap: 22px; padding: 30px 0; }
          .role-items { grid-template-columns: 1fr; gap: 22px; }
          .roles-note { padding: 19px 20px; }
          .permission-layout { gap: 34px; }
          .matrix-wrap { border-radius: 18px; }
          .permission-matrix tr { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px 12px; }
          .permission-matrix td:first-child { flex: 0 0 100%; width: 100%; margin-bottom: 5px; }
          .permission-matrix td.permission-cell { flex: 0 0 auto; width: auto; min-width: 0; display: inline-flex; align-items: center; gap: 7px; padding: 8px 10px !important; border: 1px solid var(--line) !important; border-radius: 999px; background: #f8fafb; }
          .permission-matrix td.permission-cell::before { display: inline; margin: 0; }
          .permission-matrix td.permission-cell.disabled { display: none; }
          .permission-matrix td.permission-cell .permission-yes { width: 22px; height: 22px; }
          .workflow-track { grid-template-columns: 1fr; gap: 0; margin-top: 36px; }
          .workflow-stage { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 16px; text-align: left; padding: 0 0 28px; }
          .workflow-stage:last-child { padding-bottom: 0; }
          .workflow-number { margin: 0; }
          .workflow-stage h3 { padding-top: 3px; }
          .workflow-stage p { grid-column: 2; margin-top: -16px; }
          .workflow-rules { grid-template-columns: 1fr; }
          .workflow-rule, .workflow-rule + .workflow-rule { padding: 19px 0; border-left: 0; border-top: 1px solid #3a4251; }
          .workflow-rule:first-child { border-top: 0; }
          .policy-row { grid-template-columns: 1fr; gap: 9px; padding: 22px 0; }
          .policy-level { justify-self: start; margin-top: 3px; }
          .policy-factors { grid-template-columns: 1fr; }
          .request-form { grid-template-columns: 1fr; padding: 22px 20px; }
          .request-panel-head, .request-route { padding-left: 20px; padding-right: 20px; }
          .request-route { grid-template-columns: 1fr; }
          .language-row { grid-template-columns: minmax(0, 1fr) auto; gap: 10px 16px; padding: 18px 20px; }
          .approval-step { grid-column: 1 / -1; grid-row: 2; }
          .approval-status { grid-column: 2; grid-row: 1; }
          .ai-policy-head { flex-direction: column; align-items: flex-start; }
          .ai-policy-row { grid-template-columns: 1fr; gap: 7px; padding: 18px 20px; }
          .ai-route { justify-self: start; text-align: left; }
          .revision-actions { gap: 7px; }
          .version-compare { grid-template-columns: 1fr; }
          .version-column + .version-column { border-left: 0; border-top: 1px solid var(--line); }
          .audit-event { grid-template-columns: 48px 32px minmax(0, 1fr); gap: 10px; padding: 17px 18px; }
          .audit-state { grid-column: 3; justify-self: start; }
          .identity-flow { grid-template-columns: 1fr; gap: 26px; }
          .identity-flow::before { left: 43px; right: auto; top: 42px; bottom: 42px; width: 1px; height: auto; }
          .identity-node { display: grid; grid-template-columns: 70px minmax(0, 1fr); gap: 16px; text-align: left; align-items: center; }
          .identity-node .icon-box { width: 70px; height: 70px; margin: 0; border-radius: 20px; }
          .identity-node h3 { align-self: end; }
          .identity-node p { grid-column: 2; margin-top: -10px; align-self: start; }
          .analytics-panel-head { flex-direction: column; align-items: flex-start; }
          .metric-row { grid-template-columns: 1fr; }
          .analytics-chart { padding: 18px; }
          .bars { height: auto; display: grid; grid-template-columns: 1fr; gap: 10px; align-items: stretch; border-bottom: 0; }
          .bar { height: 34px !important; width: 100%; min-height: 34px; border-radius: 8px; background: #eef1f5; overflow: hidden; }
          .bar::before { content: ""; position: absolute; inset: 0 auto 0 0; width: var(--bar-size); border-radius: inherit; background: #d3d9e2; }
          .bar.highlight::before { background: var(--magenta); }
          .bar-label { left: 10px; top: 50%; transform: translateY(-50%); color: var(--ink-2); z-index: 1; padding: 3px 6px; border-radius: 5px; background: rgba(255, 255, 255, .88); }
          .bar-label-short { display: none; }
          .bar-label-full { display: block; }
          .use-case-row { grid-template-columns: 50px minmax(0, 1fr); gap: 14px; }
          .use-case-row h3 { padding-top: 7px; }
          .use-case-row p { grid-column: 2; margin-top: -4px; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .lifecycle-step { min-height: 0; padding: 24px; }
          .related-list { grid-template-columns: 1fr; column-gap: 0; }
          .related-item { min-height: 0; padding: 24px 0; }
          .faq-question { min-height: 70px; gap: 15px; }
          .faq-question span { font-size: 17px; }
          .faq-answer { padding-right: 30px; }
          .final-cta { padding: 64px 0 72px; }
          .cta-panel { padding: 42px 24px; border-radius: 24px; }
        }

        @media (max-width: 360px) {
          .stepes-page h1 { font-size: 36px; }
          .avatar { display: none; }
          .mockup-stage { grid-template-columns: 32px minmax(0, 1fr); }
          .policy-level { white-space: normal; }
          .language-row { grid-template-columns: 1fr; }
          .approval-status { grid-column: 1; grid-row: auto; justify-self: start; }
          .approval-step { grid-column: 1; grid-row: auto; }
          .chart-head { flex-direction: column; align-items: flex-start; gap: 4px; }
          .request-panel-head, .panel-head, .version-card-head, .audit-head { flex-direction: column; align-items: flex-start; }
          .bars { gap: 8px; }
        }
      `}</style>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Enterprise Translation Governance</div>
            <h1>User Roles and Translation Approval Workflows</h1>
            <p className="hero-lead">Control who can request, translate, review, approve, and release multilingual content. Stepes brings role-based access, granular permissions, and configurable approval workflows together in one enterprise translation platform.</p>
            <div className="button-row">
              <ButtonLink href="https://www.stepes.com/contact-us/" primary>Talk to an Expert</ButtonLink>
              <ButtonLink href="https://www.stepes.com/translation-workflow-automation/">Explore Workflow Automation</ButtonLink>
            </div>
            <div className="hero-note"><Check size={18} /><span>Maintain clearly assigned authority and a documented decision trail from the initial request through final publication.</span></div>
          </div>
          <ApprovalFlowMockup />
        </div>
      </section>

      <section className="trust-strip" aria-label="Platform governance capabilities">
        <div className="shell trust-grid">
          {[
            ["Role-Based Access", "Responsibilities aligned to users and teams"],
            ["Configurable Approvals", "Single-stage and multistage workflows"],
            ["Decision History", "Time-stamped review and release records"],
            ["AI + Human Oversight", "Policies based on content and risk"],
            ["Identity Integration", "Access aligned with enterprise identity"],
          ].map(([title, desc]) => <div className="trust-item" key={title}><strong>{title}</strong><span>{desc}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="shell governance-grid">
          <div className="governance-intro">
            <h2>Bring Roles, Permissions, and Approvals Into One Governance System</h2>
            <p>Enterprise translation requires more than assigning files and tracking deadlines. Organizations need to control access, decision authority, required reviews, and the evidence retained after every action.</p>
          </div>
          <div className="governance-panel">
            {[
              ["users", "Roles", "Define the responsibilities of requesters, localization managers, translators, reviewers, experts, and final approvers."],
              ["key", "Permissions", "Control what each participant can view, create, edit, assign, approve, export, publish, or administer."],
              ["workflow", "Approval Policies", "Determine which content requires review, who must approve it, and what conditions must be satisfied before release."],
            ].map(([icon, title, copy]) => (
              <div className="governance-row" key={title}>
                <div className="icon-box"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading title="Assign the Right Role to Every Participant" intro="Organize internal teams, language specialists, regional stakeholders, and external partners according to their responsibilities and decision authority. Use standardized roles, create custom roles, or combine permissions to match your operating model." />
          <div className="roles-stack">
            {roleGroups.map((group) => (
              <div className="role-group" key={group.label}>
                <div className="role-group-label"><div className="icon-box"><Icon name={group.icon} /></div><h3>{group.label}</h3></div>
                <div className="role-items">
                  {group.roles.map(([title, copy]) => <div className="role-item" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
                </div>
              </div>
            ))}
          </div>
          <div className="roles-note"><strong>Flexible by design:</strong> A single person can hold different roles across projects, departments, languages, or business units. A regional reviewer may approve one market while participating as a read-only stakeholder in another program.</div>
        </div>
      </section>

      <section className="section">
        <div className="shell permission-layout">
          <div className="permission-copy">
            <h2>Apply Fine-Grained Permissions Across the Enterprise</h2>
            <p>Limit access by organization, business unit, workspace, project, brand, product, content type, language, market, translation asset, workflow stage, or specific action.</p>
            <div className="permission-principles">
              {[
                ["Least-Privilege Access", "Give every user only the access required to perform their responsibilities."],
                ["Separation of Duties", "Prevent incompatible actions from being concentrated in one role for sensitive workflows."],
                ["Controlled External Collaboration", "Limit agencies and language partners to the exact projects, languages, and tasks assigned to them."],
              ].map(([title, copy]) => <div className="principle" key={title}><Check size={18} /><div><strong>{title}</strong><p>{copy}</p></div></div>)}
            </div>
          </div>
          <div className="matrix-wrap">
            <table className="permission-matrix" aria-label="Illustrative user role permission matrix">
              <thead><tr><th>Representative Action</th><th>Requester</th><th>Manager</th><th>Reviewer</th><th>Approver</th><th>Admin</th></tr></thead>
              <tbody>{permissionRows.map(row => <tr key={row.action}><td>{row.action}</td><td className={`permission-cell ${row.requester ? "enabled" : "disabled"}`} data-label="Requester"><PermissionMark enabled={row.requester} /></td><td className={`permission-cell ${row.manager ? "enabled" : "disabled"}`} data-label="Manager"><PermissionMark enabled={row.manager} /></td><td className={`permission-cell ${row.reviewer ? "enabled" : "disabled"}`} data-label="Reviewer"><PermissionMark enabled={row.reviewer} /></td><td className={`permission-cell ${row.approver ? "enabled" : "disabled"}`} data-label="Approver"><PermissionMark enabled={row.approver} /></td><td className={`permission-cell ${row.admin ? "enabled" : "disabled"}`} data-label="Admin"><PermissionMark enabled={row.admin} /></td></tr>)}</tbody>
            </table>
            <div className="matrix-caption">Example role matrix. Permissions can be configured to reflect your organization’s policies and operating structure.</div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading title="Configure Approval Workflows Around Your Organization" intro="Create single-stage or multistage workflows that reflect how your teams actually operate. Combine sequential and parallel review, individual and group assignments, deadlines, escalation, delegation, and final release authorization." centered dark />
          <div className="workflow-track">
            {workflowStages.map(([num, title, copy]) => <div className="workflow-stage" key={num}><div className="workflow-number">{num}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="workflow-rules">
            {[
              ["Flexible Approval Logic", "Require any one reviewer, every reviewer, a minimum number, or a designated final approver."],
              ["Language and Market Routing", "Assign different reviewers and approval paths by language, region, product, or business unit."],
              ["Deadlines and Escalation", "Notify reviewers, track due dates, and route overdue decisions to the right backup or manager."],
              ["Controlled Release", "Separate content approval from publication authority so only designated users can release approved content."],
            ].map(([title, copy]) => <div className="workflow-rule" key={title}><strong>{title}</strong><span>{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="policy-intro">
            <div><div className="eyebrow">Risk-Based Governance</div><h2>Apply the Right Approval Policy to Every Content Type</h2></div>
            <p>Not all multilingual content carries the same business risk. Stepes helps you accelerate lower-risk content while preserving additional oversight for customer-facing, sensitive, or regulated material.</p>
          </div>
          <div className="policy-list">
            {policyExamples.map(([title, copy, level]) => <div className="policy-row" key={title}><h3>{title}</h3><p>{copy}</p><span className="policy-level">{level}</span></div>)}
          </div>
          <div className="policy-factors">
            {["Content Type and Audience", "Business and Regulatory Risk", "Translation Method and Quality Signals", "Market, Product, Budget, and Source Changes"].map(item => <div className="factor" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell request-grid">
          <div className="request-copy">
            <h2>Control Translation Requests, Budgets, and Project Initiation</h2>
            <p>Begin governance before work is assigned. Standardize multilingual content intake and ensure each request receives the appropriate authorization before time and budget are committed.</p>
            <div className="request-benefits">
              {["Prevent unauthorized translation spending and duplicate requests.", "Capture business purpose, languages, audience, deadlines, and compliance needs.", "Route requests by department, project value, cost center, content category, or risk.", "Maintain a complete record of project authorization and requested information."].map(item => <div className="check-row" key={item}><Check size={18} /><span>{item}</span></div>)}
            </div>
            <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</EditorialLink>
          </div>
          <div className="request-panel" aria-label="Illustrative translation request approval">
            <div className="request-panel-head"><strong>Translation Request</strong><span className="status-chip active">Approval required</span></div>
            <div className="request-form">
              <div className="field full"><span className="field-label">Business Purpose</span><div className="field-value">Global product launch documentation</div></div>
              <div className="field"><span className="field-label">Target Markets</span><div className="field-value">France, Germany, Japan</div></div>
              <div className="field"><span className="field-label">Content Type</span><div className="field-value">Product and technical</div></div>
              <div className="field"><span className="field-label">Budget Owner</span><div className="field-value">Product Operations</div></div>
              <div className="field"><span className="field-label">Required Delivery</span><div className="field-value">September 28</div></div>
            </div>
            <div className="request-route"><span>Automatically routed according to department, content type, and budget threshold</span><span className="route-owner"><div className="avatar" aria-hidden="true">LM</div>Program Approver</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Coordinate Linguistic, Market, and Subject-Matter Approval" intro="Assign each decision to the people with the right expertise and authority. Approval can be tracked independently for every language and market, allowing approved content to move forward while other markets remain in review." />
          <div className="approval-dashboard">
            <div className="language-panel">
              <div className="panel-head"><h3>Global Campaign Approval</h3><span>5 target markets</span></div>
              {[
                ["French · France", "Final release approval", "Ready", "ready"],
                ["German · Germany", "Market review", "In review", "progress"],
                ["Japanese · Japan", "Subject-matter approval", "In review", "progress"],
                ["Spanish · Mexico", "Linguistic review", "Waiting", "waiting"],
                ["Portuguese · Brazil", "Final release approval", "Ready", "ready"],
              ].map(([name, step, state, cls]) => <div className="language-row" key={name}><div className="language-name"><strong>{name}</strong><span>Customer-facing product content</span></div><div className="approval-step">{step}</div><span className={`approval-status ${cls}`}>{state}</span></div>)}
            </div>
            <div className="approval-types">
              {approvalTypes.map(([title, copy]) => <div className="approval-type" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell ai-grid">
          <div className="ai-copy">
            <h2>Govern AI Translation With Defined Human Oversight</h2>
            <p>Apply the right level of review to each content type. Determine which AI translations can move forward after automated checks and which require linguistic, subject-matter, compliance, or named human approval.</p>
            <EditorialLink href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflow</EditorialLink>
          </div>
          <div className="ai-policy-panel">
            <div className="ai-policy-head"><strong>Approval Policy by Content Risk</strong><span className="status-chip active">Policy active</span></div>
            {[
              ["Internal Knowledge", "AI translation + automated quality checks", "Streamlined release"],
              ["Customer Marketing", "AI translation + linguistic and market review", "Human approval"],
              ["Technical Content", "AI translation + terminology and expert review", "Expert approval"],
              ["Regulated Content", "Qualified linguistic, subject-matter, compliance, and final review", "Named authorization"],
            ].map(([title, path, route]) => <div className="ai-policy-row" key={title}><strong>{title}</strong><span>{path}</span><span className="ai-route">{route}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell revision-grid">
          <div className="revision-copy">
            <h2>Keep Reviews, Feedback, and Revisions Moving</h2>
            <p>Approval is rarely a simple yes-or-no decision. Keep comments, requested changes, ownership, resubmission, and the final decision connected to the content and the people responsible for it.</p>
            <div className="revision-actions">{["Approve", "Reject", "Request Changes", "Comment", "Reassign", "Reopen", "Compare Versions"].map(item => <span className="revision-action" key={item}>{item}</span>)}</div>
          </div>
          <div className="revision-timeline">
            {[
              ["Changes Requested", "The market reviewer identifies a terminology issue and adds a contextual comment.", "10:24 AM · Market Review"],
              ["Translation Revised", "The assigned linguist updates the affected content and resolves the open review item.", "11:08 AM · Translation"],
              ["Resubmitted for Approval", "The revised translation returns to the required market reviewer with version history preserved.", "11:15 AM · Review Queue"],
              ["Approved", "The authorized reviewer confirms the revision and releases the content to the next required stage.", "12:02 PM · Approved"],
            ].map(([title, copy, meta]) => <div className="revision-event" key={title}><strong>{title}</strong><p>{copy}</p><div className="revision-meta">{meta}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell version-grid">
          <div className="version-copy">
            <h2>Preserve Approval Integrity Across Content Versions</h2>
            <p>An approval should apply to the exact source and translation that were reviewed. When content changes, Stepes can identify affected translations and return them to the appropriate review stage.</p>
            <div className="version-list">
              {["Associate approval with a specific source and translation version.", "Detect changes to approved source material and affected translated segments.", "Reopen or invalidate approval after material revisions.", "Prevent outdated approval from authorizing changed content."].map(item => <div className="check-row" key={item}><Check size={18} /><span>{item}</span></div>)}
            </div>
          </div>
          <div className="version-card">
            <div className="version-card-head"><strong>Approved Content Comparison</strong><span className="status-chip active">Review reopened</span></div>
            <div className="version-compare">
              <div className="version-column"><span className="version-label">APPROVED VERSION 3</span><h3>Safety Instructions</h3><p>Store the device between 5°C and 30°C.</p><div className="version-change">Approved by Regulatory Review · July 18</div></div>
              <div className="version-column"><span className="version-label">CURRENT VERSION 4</span><h3>Safety Instructions</h3><p>Store the device between 2°C and 30°C.</p><div className="version-change">Source range changed · Translation approval required</div></div>
            </div>
            <div className="version-alert"><Icon name="refresh" size={20} /><span>The material source change has reopened the affected translation and returned it to linguistic and regulatory review.</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell audit-grid">
          <div className="audit-log">
            <div className="audit-head"><strong>Approval History</strong><span className="status-chip active">Export available</span></div>
            {[
              ["09:14", "AK", "Translation submitted", "French · Version 4", "Completed"],
              ["10:02", "MS", "Linguistic review approved", "Comment resolved", "Approved"],
              ["10:24", "JL", "Market changes requested", "Terminology clarification", "Returned"],
              ["11:15", "AK", "Revision resubmitted", "French · Version 5", "Pending"],
              ["12:02", "JL", "Market approval completed", "Version 5 authorized", "Approved"],
            ].map(([time, initials, title, detail, state]) => <div className="audit-event" key={`${time}-${title}`}><span className="audit-time">{time}</span><div className="avatar" aria-hidden="true">{initials}</div><div className="audit-copy"><strong>{title}</strong><span>{detail}</span></div><span className="audit-state">{state}</span></div>)}
          </div>
          <div className="audit-copy-side">
            <div className="eyebrow">Complete Traceability</div>
            <h2>Maintain a Complete Record of Every Decision</h2>
            <p>Track who acted, which role they held, what content version they reviewed, when the decision occurred, and how the content moved from request to final release.</p>
            <div className="audit-filters">{["User", "Role", "Language", "Market", "Version", "Decision", "Workflow", "Release Status"].map(item => <span className="audit-filter" key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell identity-layout">
          <div className="identity-copy">
            <h2>Connect Translation Governance With Enterprise Identity</h2>
            <p>Align translation roles and approval authority with single sign-on, centralized identity management, directory-based provisioning, group-to-role mapping, user lifecycle controls, and external-user policies.</p>
            <EditorialLink href="https://www.stepes.com/enterprise-security/">Enterprise Security</EditorialLink>
          </div>
          <div className="identity-flow">
            {[
              ["identity", "Identity Provider", "Authenticate users and maintain enterprise identity."],
              ["users", "Roles and Groups", "Map teams and responsibilities to governed platform roles."],
              ["shield", "Permissions and Approvals", "Control what authenticated users can view, change, approve, and release."],
            ].map(([icon, title, copy]) => <div className="identity-node" key={title}><div className="icon-box"><Icon name={icon} size={28} /></div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell analytics-grid">
          <div className="analytics-copy">
            <h2>Monitor Approvals, Bottlenecks, and Governance Performance</h2>
            <p>Understand where decisions are moving smoothly and where delay, rework, reviewer workload, escalation, or policy exceptions require attention.</p>
            <EditorialLink href="https://www.stepes.com/translation-reporting-analytics/">Reporting & Analytics</EditorialLink>
          </div>
          <div className="analytics-panel" aria-label="Illustrative approval analytics dashboard">
            <div className="analytics-panel-head"><strong>Approval Operations Dashboard</strong><span>Example dashboard data</span></div>
            <div className="analytics-panel-body">
              <div className="metric-row">
                <div className="metric"><span>Pending Approvals</span><strong>28</strong><em>6 due today</em></div>
                <div className="metric"><span>Average Approval Time</span><strong>7.4h</strong><em>Current period</em></div>
                <div className="metric"><span>On-Time Completion</span><strong>94%</strong><em>Within target</em></div>
              </div>
              <div className="analytics-chart"><div className="chart-head"><strong>Approval Time by Workflow Stage</strong><span>Average hours</span></div><div className="bars">{[[44,"Req","Request"],[60,"Trans","Translation"],[82,"Ling","Linguistic"],[68,"Market","Market"],[52,"Expert","Expert"],[36,"Final","Final"],[27,"Release","Release"]].map(([height,shortLabel,fullLabel],index)=><div key={fullLabel} className={`bar ${index===2 ? "highlight" : ""}`} style={{height: `${height}%`, "--bar-size": `${height}%`}}><span className="bar-label bar-label-short">{shortLabel}</span><span className="bar-label bar-label-full">{fullLabel}</span></div>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading title="Support Governance Across Teams and Industries" intro="Adapt roles and approval workflows to the people, content, and risks involved in each translation program without forcing every department or content type into the same process." />
          <div className="use-case-list">
            {teamUseCases.map(([title, icon, copy]) => <div className="use-case-row" key={title}><div className="icon-box"><Icon name={icon} /></div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading title="One Governance Model From Request to Release" intro="Connect access, workflow, review, decision authority, release control, and evidence across the complete multilingual content lifecycle." centered dark />
          <div className="lifecycle-grid">
            {lifecycle.map(([title, copy], index) => <div className="lifecycle-step" key={title}><div className="lifecycle-number">{String(index + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Extend Governance Across Your Translation Operations" intro="User Roles & Approvals works with the broader Stepes platform to connect access, workflow, quality, automation, enterprise identity, and performance." />
          <div className="related-list">
            {relatedCapabilities.map(([title, copy, href]) => <div className="related-item" key={title}><div><h3>{title}</h3><p>{copy}</p></div><EditorialLink href={href}>Explore {title}</EditorialLink></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading title="User Roles and Translation Approval Workflows FAQ" intro="Explore common questions about enterprise roles, permissions, multilingual review, AI oversight, audit history, and release governance." centered />
          <div className="faq-wrap">
            {faqs.map(([question, answer], index) => <FAQItem key={question} id={index} question={question} answer={answer} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div className="cta-content">
              <div className="eyebrow">Build Accountable Global Workflows</div>
              <h2>Bring Every Multilingual Content Decision Under Control</h2>
              <p>Connect users, permissions, translation reviews, AI oversight, and final release approvals in one enterprise governance system with clear ownership and complete visibility from request to publication.</p>
              <div className="button-row">
                <ButtonLink href="https://www.stepes.com/contact-us/" primary>Talk to an Expert</ButtonLink>
                <ButtonLink href="https://www.stepes.com/enterprise-translation-management/">Explore Enterprise Translation Management</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
