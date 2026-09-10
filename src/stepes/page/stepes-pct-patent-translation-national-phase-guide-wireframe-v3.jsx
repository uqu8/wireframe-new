import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl = "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const COLORS = {
  text: "#242424",
  textSoft: "#55565A",
  textQuiet: "#6F7074",
  line: "#E6E6E8",
  soft: "#F7F7F8",
  blush: "#FFF3F7",
  blushStrong: "#FDE8F1",
  magenta: "#D51B63",
  magentaDark: "#B51553",
  dark: "#232326",
  white: "#FFFFFF",
};

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  { label: "Translation Guides", href: "https://www.stepes.com/resources/translation-guides/" },
  { label: "PCT Patent Translation and National Phase Entry Guide", current: true },
];

const tocItems = [
  { id: "overview", label: "PCT Overview" },
  { id: "translation-requirements", label: "Translation Requirements" },
  { id: "deadlines", label: "National Phase Deadlines" },
  { id: "major-markets", label: "Major Filing Markets" },
  { id: "claims-amendments", label: "Claims & Amendments" },
  { id: "multilingual-workflow", label: "Multilingual Workflow" },
  { id: "translation-planning", label: "Translation Planning" },
  { id: "quality-checklist", label: "Quality Checklist" },
  { id: "ai-human-review", label: "AI & Human Review" },
  { id: "planning-checklist", label: "Planning Checklist" },
  { id: "faqs", label: "FAQs" },
  { id: "sources", label: "Official Sources" },
];

const summaryItems = [
  {
    title: "Confirm the filing plan before translation starts",
    text: "Work from the target jurisdictions, accepted languages, and deadlines confirmed by patent counsel or the filing representative.",
  },
  {
    title: "Lock the controlling source and amendment history",
    text: "Identify the application version, claim set, Article 19 amendments, Article 34 amendments, and other materials that apply to each target office.",
  },
  {
    title: "Treat claims and terminology as controlled content",
    text: "Preserve claim relationships, defined terms, numbers, units, figure references, and patent-family terminology across every target language.",
  },
  {
    title: "Coordinate related national phases as one program",
    text: "Centralized source control, terminology, QA, and reviewer coordination can reduce divergence when one PCT application enters several markets.",
  },
  {
    title: "Verify office-specific requirements at the point of filing",
    text: "Use current WIPO and patent-office guidance rather than relying on a universal deadline or document checklist.",
  },
];

const jurisdictions = [
  {
    office: "China / CNIPA",
    deadline: "30 months",
    language: "Chinese",
    scope: "May include the request, description, claims, drawing text, abstract, and relevant amendments.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=CN&doc-lang=en",
    service: "https://www.stepes.com/chinese-patent-translation-services/",
    serviceLabel: "Explore Chinese Patent Translation",
  },
  {
    office: "Japan / JPO",
    deadline: "30 months",
    language: "Japanese",
    scope: "Description, claims, drawing text, abstract, and applicable amendments.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=JP&doc-lang=EN",
    service: "https://www.stepes.com/japanese-patent-translation-services/",
    serviceLabel: "Explore Japanese Patent Translation",
  },
  {
    office: "Republic of Korea / MOIP",
    deadline: "31 months",
    language: "Korean",
    scope: "Application content, description, claims, drawing text, abstract, and applicable amendments; national-phase form use can affect request translation requirements.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=KR&doc-lang=en",
    service: "https://www.stepes.com/korean-patent-translation-services/",
    serviceLabel: "Explore Korean Patent Translation",
  },
  {
    office: "European Patent Office / EPO",
    deadline: "31 months",
    language: "English, French, or German",
    scope: "Translation into an EPO official language when required, including application content and applicable amendments.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=EP&doc-lang=en",
  },
  {
    office: "United States / USPTO",
    deadline: "30 months",
    language: "English",
    scope: "English translation required when applicable; amendments can require corresponding translated material.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=US&doc-lang=en",
  },
  {
    office: "Germany / DPMA",
    deadline: "31 months",
    language: "German",
    scope: "Description, claims, drawing text, abstract, and applicable amendments.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=DE&doc-lang=en",
    service: "https://www.stepes.com/german-patent-translation-services/",
    serviceLabel: "Explore German Patent Translation",
  },
  {
    office: "India / Indian Patent Office",
    deadline: "31 months",
    language: "English",
    scope: "Description, claims, drawing text, abstract, and applicable amendments when translation is required.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=IN&doc-lang=EN",
  },
  {
    office: "Brazil / INPI",
    deadline: "30 months",
    language: "Portuguese",
    scope: "Portuguese translation requirements can include description, claims, drawing text, abstract, and relevant amendments.",
    source: "https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=BR&doc-lang=en",
  },
];

const faqItems = [
  {
    q: "What is PCT patent translation?",
    a: "PCT patent translation refers to translating an international patent application and related materials for use in national or regional phases, international-phase processing, attorney review, or other PCT-related requirements. For national-phase entry, translation may be required when the international application is not in a language accepted by the relevant patent office.",
  },
  {
    q: "When is translation required for PCT national phase entry?",
    a: "Translation may be required when the language of the international application is not accepted by the national or regional office where protection is being pursued. Requirements vary by office, so applicants should confirm the accepted language, translated content, deadline, and other requirements for each filing.",
  },
  {
    q: "What parts of a PCT application need to be translated?",
    a: "Depending on the office and filing circumstances, translations may include the description, claims, abstract, text matter in drawings, request, Article 19 amendments, Article 34 amendments, and other application materials. Not every office requires exactly the same content.",
  },
  {
    q: "Is the PCT national phase deadline always 30 months?",
    a: "No. Many national and regional phase deadlines are 30 or 31 months from the priority date, but WIPO's current time-limit information includes other timetables as well. Applicants should verify the deadline applicable to the particular office and filing route rather than applying a universal 30-month rule.",
  },
  {
    q: "Do Article 19 amendments need to be translated?",
    a: "They may. The requirement and consequences of not supplying an Article 19 amendment translation vary by national or regional office and by how the applicant wishes the amended claims to be treated. Provide all Article 19 materials to your translation and filing teams and follow the instructions of patent counsel for each jurisdiction.",
  },
  {
    q: "Do Article 34 amendments need to be translated?",
    a: "Translations of Article 34 amendments or related international preliminary examination annexes may be required depending on the national or regional office and the application. The translation team should receive both the original application and relevant amended materials so that the correct versions can be prepared.",
  },
  {
    q: "Do priority documents need translation?",
    a: "Not in every national-phase filing. Priority-document translation requirements vary by jurisdiction and circumstance. Patent counsel or the filing representative should determine whether a priority document or translation is required for the particular application.",
  },
  {
    q: "Can the same patent translation be reused across different national-phase filings?",
    a: "Sometimes, but reuse should be controlled. An approved translation may provide valuable terminology or reusable content for related applications, but different jurisdictions, amendments, claim versions, filing languages, or legal requirements can affect whether previous translated text remains appropriate. Translation memory and patent-family references are most effective when paired with professional review.",
  },
  {
    q: "How early should PCT translation begin before national phase entry?",
    a: "There is no single lead time appropriate for every application. The schedule depends on document length, technical complexity, target languages, number of jurisdictions, amendments, source-file condition, required review level, translator availability, and client or counsel review. Starting early provides more time for terminology preparation, amendment reconciliation, professional review, questions, and final QA.",
  },
];

const relatedGuides = [
  {
    eyebrow: "FLAGSHIP GUIDE",
    title: "Patent Translation Guide",
    text: "A broader guide to patent applications, claims, specifications, prosecution, terminology, quality, technology, and multilingual patent portfolios.",
    href: "https://www.stepes.com/resources/translation-guides/patent-translation-guide/",
  },
  {
    eyebrow: "QUALITY CHECKLIST",
    title: "Patent Claims Translation Quality Checklist",
    text: "A practical review framework for defined terms, claim dependencies, references, terminology, numbers, units, drawings, completeness, and file consistency.",
    href: "https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/",
  },
  {
    eyebrow: "SPECIALIST GUIDE",
    title: "Prior Art Translation for Patentability, FTO, and Invalidity",
    text: "Guidance on selecting the right translation depth for patent research, freedom-to-operate work, validity analysis, and evidence-oriented review.",
    href: "https://www.stepes.com/resources/translation-guides/prior-art-translation-patentability-fto-invalidity/",
  },
  {
    eyebrow: "AI & QUALITY",
    title: "AI Patent Translation: Research Use vs. Filing-Grade Translation",
    text: "Where AI-assisted translation improves speed and scale, and where professional human translation and structured review remain essential.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/",
  },
];

const serviceLinks = [
  {
    title: "Chinese Patent Translation",
    text: "English and Chinese patent translation for CNIPA-facing work, PCT national-phase applications, claims, specifications, amendments, prior art, and coordinated patent families.",
    href: "https://www.stepes.com/chinese-patent-translation-services/",
  },
  {
    title: "Japanese Patent Translation",
    text: "English and Japanese patent translation for JPO-related applications, PCT national-phase content, technical disclosures, prior art, amendments, and prosecution documentation.",
    href: "https://www.stepes.com/japanese-patent-translation-services/",
  },
  {
    title: "Korean Patent Translation",
    text: "English and Korean patent translation for Republic of Korea patent applications, PCT national-phase materials, claims, research, prior art, and multilingual portfolio workflows.",
    href: "https://www.stepes.com/korean-patent-translation-services/",
  },
  {
    title: "German Patent Translation",
    text: "English and German patent translation for DPMA-related filings, European patent work, prosecution materials, technical review, prior art, and patent-family management.",
    href: "https://www.stepes.com/german-patent-translation-services/",
  },
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true" className="ext-mark">↗</span>
    </a>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      <span>{children}</span><span aria-hidden="true">→</span>
    </a>
  );
}

function Section({ id, children, className = "", wide = false }) {
  return (
    <section id={id} className={`chapter ${wide ? "chapter-wide" : ""} ${className}`.trim()}>
      {children}
    </section>
  );
}

function OnThisPage({ activeId }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="toc-rail" aria-label="In this guide">
        <div className="toc-label">IN THIS GUIDE</div>
        <nav>
          {tocItems.map((item) => (
            <a
              key={item.id}
              className={activeId === item.id ? "toc-link active" : "toc-link"}
              href={sectionUrl(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="toc-mobile">
        <button
          className="toc-mobile-button"
          type="button"
          aria-expanded={open}
          aria-controls="toc-mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span>In This Guide</span>
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <nav id="toc-mobile-panel" className="toc-mobile-panel" aria-label="In this guide">
            {tocItems.map((item) => (
              <a key={item.id} href={sectionUrl(item.id)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

function FaqPanel() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-panel">
      {faqItems.map((item, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div className="faq-item" key={item.q}>
            <button
              id={buttonId}
              className="faq-question"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="faq-symbol" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={open ? "faq-answer open" : "faq-answer"}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PctPatentTranslationGuide() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  const sectionIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.01, 0.2] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="stepes-guide">
      <style>{styles}</style>

      <nav className="breadcrumb-shell" aria-label="Breadcrumb">
        <ol className="breadcrumbs">
          {breadcrumbs.map((item, index) => (
            <li key={item.label}>
              {index > 0 && <span className="crumb-separator" aria-hidden="true">/</span>}
              {item.current ? (
                <span className="crumb-current" aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <header className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">PCT PATENT TRANSLATION GUIDE</div>
          <h1>PCT Patent Translation and National Phase Entry Guide</h1>
          <p className="hero-deck">
            Understand when PCT applications may require translation, what application content can be involved,
            how major national and regional filing markets differ, and how to coordinate multilingual patent
            translation with stronger terminology, version control, and quality assurance.
          </p>
          <div className="hero-actions" aria-label="Guide shortcuts">
            <a className="btn btn-primary" href={sectionUrl("overview")}>Explore the Guide</a>
            <a className="btn btn-secondary" href={sectionUrl("planning-checklist")}>Jump to the Checklist</a>
          </div>
          <div className="hero-meta">For patent counsel, IP teams, filing coordinators, and global patent portfolios</div>
        </div>
      </header>

      <section className="summary-band">
        <div className="shell summary-inner">
          <div className="summary-lead">
            <div className="eyebrow">KEY TAKEAWAYS</div>
            <h2>Five practices that make PCT translation easier to plan and control.</h2>
            <p>
              Use these recommendations as the operating framework for the guide, then verify the requirements that apply to each actual national or regional phase filing.
            </p>
          </div>
          <div className="summary-list">
            {summaryItems.map((item) => (
              <div className="summary-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="article shell">
        <OnThisPage activeId={activeId} />

        <div className="article-content">
          <Section id="overview">
            <h2>PCT National Phase Translation at a Glance</h2>
            <p className="section-lead">
              A single PCT application can lead to multiple national or regional patent applications, each governed by the requirements of the relevant patent office. Translation planning should therefore begin with the target jurisdictions, accepted languages, current application version, applicable amendments, and filing instructions provided by patent counsel or a filing representative.
            </p>

            <div className="glance-grid">
              <article>
                <span className="glance-no">01</span>
                <h3>When Translation Is Needed</h3>
                <p>A national or regional office may require a translation when the international application is not in a language accepted for that national or regional phase.</p>
              </article>
              <article>
                <span className="glance-no">02</span>
                <h3>What May Need Translation</h3>
                <p>Depending on the office and the application, translated content may include the description, claims, abstract, text in drawings, request, Article 19 amendments, Article 34 amendments, and other office-specific materials.</p>
              </article>
              <article>
                <span className="glance-no">03</span>
                <h3>When Translation Is Due</h3>
                <p>Many national and regional phase deadlines fall around 30 or 31 months from the priority date, but the applicable deadline is not universal.</p>
              </article>
              <article>
                <span className="glance-no">04</span>
                <h3>Why Translation Planning Matters</h3>
                <p>National-phase projects can involve overlapping deadlines, several target languages, amended claim sets, patent-family terminology, specialized technical content, and filing-specific review requirements.</p>
              </article>
            </div>

            <div className="callout">
              <div className="callout-label">IMPORTANT CONSIDERATION</div>
              <p>
                Patent-office requirements and filing deadlines vary by jurisdiction and can change. Stepes provides patent translation and multilingual workflow support, not patent filing or legal advice. Applicants should confirm current requirements and deadlines with WIPO, the relevant patent office, and their patent counsel or filing representative.
              </p>
            </div>
          </Section>

          <Section id="translation-requirements">
            <h2>How PCT Patent Translation Fits Into the International Filing Process</h2>
            <p className="section-lead">
              The PCT provides a unified international filing framework before applicants proceed into national or regional phases. Translation becomes particularly important when the application moves into patent offices with their own accepted languages and procedural requirements.
            </p>

            <div className="timeline" aria-label="PCT filing and translation workflow">
              {["Priority Application", "PCT Filing", "International Search & Publication", "International-Phase Amendments", "National or Regional Phase", "Local Examination"].map((label, i) => (
                <div className="timeline-stage" key={label}>
                  <span className="timeline-no">{String(i + 1).padStart(2, "0")}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <h3>The International Phase</h3>
            <p>
              A PCT application may move through international search, international publication, possible Article 19 amendments to the claims, optional international preliminary examination, possible Article 34 amendments, and issuance of international search or preliminary examination materials. Not every application follows exactly the same path, and the translation scope later depends in part on which documents and amendments exist when the applicant proceeds into selected national and regional phases.
            </p>

            <h3>The National and Regional Phases</h3>
            <p>
              During the national or regional phase, the application proceeds before individual designated or elected patent offices. Those offices apply their own requirements concerning accepted filing languages, translation content, fees, forms, representation, examination, and other procedural matters.
            </p>

            <div className="pull-question">
              <span>The central translation question</span>
              <strong>Is the international application already in a language accepted by the target office, and if not, what application content must be translated?</strong>
            </div>

            <h3>Where Translation Enters the Workflow</h3>
            <p>Depending on the filing route and office requirements, the translation package can involve several parts of the international application and its amendment history.</p>
            <ul className="scope-list">
              <li>Description or specification</li>
              <li>Claims</li>
              <li>Abstract</li>
              <li>Text matter appearing in drawings</li>
              <li>Article 19 and Article 34 amendments</li>
              <li>Statements, request-related information, and other materials identified by patent counsel or the filing representative</li>
            </ul>

            <h2 className="subchapter-title">When Does a PCT Application Need Translation for National Phase Entry?</h2>
            <p>
              Translation requirements generally arise when the international application is not in a language accepted by the office where national or regional phase protection is being pursued. For example, an English-language PCT application entering China generally requires Chinese translation, while the same English-language application may not require translation simply because it enters the United States.
            </p>
            <p>The requirement therefore depends on both sides of the equation:</p>
            <div className="formula-band">
              <span>Language of the international application</span>
              <b>+</b>
              <span>Language accepted by the target patent office</span>
            </div>

            <h3>The Same PCT Application Can Create Different Translation Requirements</h3>
            <p>
              An English-language PCT application may require Chinese for China, Japanese for Japan, Korean for the Republic of Korea, Portuguese for Brazil, German for a German national-phase filing, or an English, French, or German translation for the European phase when required.
            </p>
            <p>
              Shared terminology, source files, amendment histories, related patents, and reviewer instructions can be managed centrally while each target-language translation is prepared according to its own requirements.
            </p>

            <h2 className="subchapter-title">What Parts of a PCT Application May Need Translation?</h2>
            <p>The precise translation scope depends on the patent office, application language, amendments, and filing instructions. Common components include the following.</p>

            <div className="document-anatomy">
              <div className="patent-page" aria-hidden="true">
                <div className="paper-title" />
                <div className="paper-line full" />
                <div className="paper-line" />
                <div className="paper-line short" />
                <div className="paper-figure"><span>FIG. 1</span></div>
                <div className="paper-line full" />
                <div className="paper-line" />
                <div className="paper-claim">1. A system comprising…</div>
              </div>
              <div className="anatomy-list">
                <div><h3>Description or Specification</h3><p>Technical background, embodiments, examples, operating principles, and other detailed implementation information.</p></div>
                <div><h3>Claims</h3><p>Independent and dependent claims, dependencies, antecedent references, defined terms, limitations, ranges, units, and component relationships.</p></div>
                <div><h3>Abstract</h3><p>Short but terminology-sensitive content that should remain aligned with the claims and description.</p></div>
                <div><h3>Text Matter in Drawings</h3><p>Labels, legends, flowchart text, graph labels, callouts, and other language-dependent content.</p></div>
                <div><h3>Request or National-Phase Information</h3><p>Request-related content may be treated differently by office and filing form.</p></div>
                <div><h3>Article 19 and Article 34 Amendments</h3><p>Amended claims, description, drawings, replacement pages, statements, and related materials where applicable.</p></div>
              </div>
            </div>
          </Section>

          <Section id="deadlines">
            <h2>PCT National Phase Deadlines and Translation Planning</h2>
            <p className="section-lead">
              Many PCT national and regional phase deadlines are calculated at 30 or 31 months from the priority date, but those periods are not universal. Translation providers should work from deadlines supplied or confirmed by the applicant's patent counsel or filing representative rather than independently calculating filing deadlines.
            </p>

            <div className="deadline-band">
              <div>
                <span className="deadline-big">30</span>
                <span className="deadline-unit">months</span>
                <p>A common national-phase reference point in several major markets.</p>
              </div>
              <div>
                <span className="deadline-big">31</span>
                <span className="deadline-unit">months</span>
                <p>Another common timetable used by several national and regional offices.</p>
              </div>
              <div className="deadline-note">
                <strong>Other timetables exist.</strong>
                <p>Always confirm the office-specific deadline and any available remedies using current official guidance.</p>
                <ExternalLink href="https://www.wipo.int/en/web/pct-system/texts/time_limits">Check WIPO time limits</ExternalLink>
              </div>
            </div>

            <h3>Why Translation Should Start Before the Filing Deadline</h3>
            <div className="editorial-steps">
              {[
                ["Technical subject-matter assignment", "Select translators and reviewers with the appropriate patent, technical, and language expertise."],
                ["Terminology preparation", "Review patent-family documents, approved terminology, previous translations, product documentation, and technical references."],
                ["Amendment reconciliation", "Determine which claim sets and amendments are current and which versions require translation."],
                ["Professional translation", "Preserve technical meaning, patent structure, references, numbers, units, formulas, drawings, and recurring terminology."],
                ["Independent review", "Review accuracy, completeness, claim relationships, terminology, and project instructions."],
                ["Automated and final-file QA", "Check numbers, references, claim numbering, formatting, missing content, terminology variation, and file integrity."],
                ["Client or counsel review", "Support technical or legal review by the client's patent professionals when the project requires it."],
              ].map(([title, text], i) => (
                <div className="editorial-step" key={title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="major-markets" wide>
            <h2>PCT Translation Requirements in Major National and Regional Filing Markets</h2>
            <p className="section-lead wide-lead">
              The overview below illustrates why national-phase patent translation should be planned office by office rather than through one universal checklist.
            </p>

            <div className="callout planning-reference">
              <div className="callout-label">PLANNING REFERENCE</div>
              <p>
                This information supports translation planning, not filing strategy or legal compliance. Patent-office requirements can change and may depend on the specific application and filing route. Always verify current requirements with WIPO, the relevant patent office, and your patent counsel or filing representative.
              </p>
            </div>

            <div className="jurisdiction-table-wrap">
              <table className="jurisdiction-table">
                <caption className="sr-only">PCT translation planning reference for selected national and regional filing markets</caption>
                <thead>
                  <tr>
                    <th scope="col">Office / Market</th>
                    <th scope="col">National-Phase Timing*</th>
                    <th scope="col">Translation Language</th>
                    <th scope="col">Translation Scope at a Glance</th>
                    <th scope="col">Official Source</th>
                  </tr>
                </thead>
                <tbody>
                  {jurisdictions.map((item) => (
                    <tr key={item.office}>
                      <th scope="row">{item.office}</th>
                      <td>{item.deadline}</td>
                      <td>{item.language}</td>
                      <td>{item.scope}</td>
                      <td><ExternalLink href={item.source}>WIPO National Chapter</ExternalLink></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="table-note">*Months are measured from the priority date under the current WIPO National Chapters referenced for this guide. Requirements and available remedies can change.</p>
            </div>

            <div className="jurisdiction-cards" aria-label="PCT translation planning reference by filing market">
              {jurisdictions.map((item) => (
                <article className="jurisdiction-card" key={item.office}>
                  <div className="jurisdiction-card-head">
                    <h3>{item.office}</h3>
                    <span>{item.deadline}</span>
                  </div>
                  <dl>
                    <div><dt>Translation language</dt><dd>{item.language}</dd></div>
                    <div><dt>Scope at a glance</dt><dd>{item.scope}</dd></div>
                  </dl>
                  <ExternalLink href={item.source}>Check current WIPO requirements</ExternalLink>
                  {item.service && <ArrowLink href={item.service}>{item.serviceLabel}</ArrowLink>}
                </article>
              ))}
            </div>

            <div className="market-notes">
              <article>
                <h3>China / CNIPA</h3>
                <p>China currently uses a 30-month national-phase timetable and requires Chinese translation where applicable. Current WIPO guidance identifies the request, description, claims, text matter in drawings, and abstract as relevant translated content, with additional treatment for Article 19-amended claims when those amendments are to form the basis of proceedings.</p>
                <ArrowLink href="https://www.stepes.com/chinese-patent-translation-services/">Explore Chinese Patent Translation</ArrowLink>
              </article>
              <article>
                <h3>Japan / JPO</h3>
                <p>Japan currently uses a 30-month national-phase timetable and requires Japanese translation where applicable. Current WIPO guidance identifies the description, claims, text matter of drawings, and abstract, with specific rules for translated amendments.</p>
                <ArrowLink href="https://www.stepes.com/japanese-patent-translation-services/">Explore Japanese Patent Translation</ArrowLink>
              </article>
              <article>
                <h3>Republic of Korea / MOIP</h3>
                <p>The Republic of Korea currently uses a 31-month national-phase timetable and requires Korean translation where applicable. The WIPO National Chapter identifies the office as the Ministry of Intellectual Property of the Republic of Korea (MOIP), and use of the designated national-phase form can affect whether the request itself requires translation.</p>
                <ArrowLink href="https://www.stepes.com/korean-patent-translation-services/">Explore Korean Patent Translation</ArrowLink>
              </article>
              <article>
                <h3>European Patent Office / EPO</h3>
                <p>The EPO currently uses a 31-month period for entry into the European phase. Its official languages are English, French, and German. Where the international application was not published in an EPO official language, an appropriate translation into an EPO official language may be required.</p>
              </article>
              <article>
                <h3>United States / USPTO</h3>
                <p>The United States currently uses a 30-month national-phase timetable and requires an English translation where the international application is not already available in English as required. Amendment translations can also affect whether amended material remains part of the national-phase application.</p>
              </article>
              <article>
                <h3>Germany / DPMA</h3>
                <p>Germany currently uses a 31-month national-phase timetable and requires German translation where applicable. Current WIPO guidance identifies the description, claims, drawing text, abstract, and relevant treatment of amended claims and other amendments.</p>
                <ArrowLink href="https://www.stepes.com/german-patent-translation-services/">Explore German Patent Translation</ArrowLink>
              </article>
              <article>
                <h3>India / Indian Patent Office</h3>
                <p>India currently uses a 31-month national-phase timetable and requires English translation where applicable. Current WIPO guidance identifies the description, claims, text matter in drawings, abstract, and relevant amendments under the applicable circumstances.</p>
              </article>
              <article>
                <h3>Brazil / INPI</h3>
                <p>Brazil currently uses a 30-month national-phase timetable and requires Portuguese translation where applicable. Current WIPO guidance includes particular rules concerning when translations must be furnished and how missing translated portions may subsequently be addressed.</p>
              </article>
            </div>
          </Section>

          <Section id="claims-amendments">
            <div className="eyebrow">VERSION CONTROL</div>
            <h2>Claims, Article 19 Amendments, and Article 34 Amendments</h2>
            <p className="section-lead">
              Amendments are one of the areas where national-phase patent translation becomes substantially more complex than straightforward document translation. Clear version instructions are essential before translation begins.
            </p>

            <h3>Original and Amended Claim Sets</h3>
            <p>A project may include claims as originally filed, Article 19-amended claims, later Article 34 amendments, replacement pages, accompanying statements, international preliminary examination annexes, and further attorney-created versions prepared for national phase entry.</p>

            <div className="version-flow" aria-label="Source and amendment version control flow">
              <div className="version-card"><span>01</span><strong>Original application</strong><p>Establish the complete source baseline.</p></div>
              <div className="version-arrow" aria-hidden="true">→</div>
              <div className="version-card"><span>02</span><strong>Article 19</strong><p>Identify amended claims and accompanying statements.</p></div>
              <div className="version-arrow" aria-hidden="true">→</div>
              <div className="version-card"><span>03</span><strong>Article 34</strong><p>Reconcile later amendments and preliminary-examination materials.</p></div>
              <div className="version-arrow" aria-hidden="true">→</div>
              <div className="version-card selected"><span>04</span><strong>Jurisdiction package</strong><p>Translate the version specified for each target office.</p></div>
            </div>

            <h3>Article 19 Amendments</h3>
            <p>Article 19 amendments concern the claims during the international phase. One jurisdiction may require both original and amended versions under certain circumstances, another may permit a particular choice, and another may disregard an amendment when its required translation is not furnished. Office-specific instructions are therefore essential.</p>

            <h3>Article 34 Amendments</h3>
            <p>Article 34 amendments can arise during international preliminary examination and may affect the description, claims, drawings, or other application content. Where such amendments exist, provide the originally filed application, all relevant amendment pages, international preliminary report materials when applicable, clear identification of the version to be translated, and instructions concerning whether original, amended, or both versions are required.</p>

            <h3>Why Version Control Matters</h3>
            <ul className="detail-list">
              <li>Translating an obsolete claim set</li>
              <li>Omitting a relevant amendment</li>
              <li>Translating the same amendment twice</li>
              <li>Mixing original and amended language</li>
              <li>Creating inconsistent terminology between versions</li>
              <li>Mismatching claim numbers</li>
              <li>Delivering the wrong version to a filing team</li>
            </ul>
            <p>A controlled PCT translation workflow should therefore treat <strong>version identification as a quality requirement</strong>, not merely a project-management task.</p>
            <ArrowLink href="https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/">Patent Claims Translation Quality Checklist</ArrowLink>

            <h2 className="subchapter-title">Priority Documents and Other Office-Specific Translation Requirements</h2>
            <p>Priority documents are another area where applicants should avoid assuming that one rule applies everywhere. A certified priority document, translation of a priority document, declaration, or related supporting material may be required in particular circumstances, but such requirements vary by office and application.</p>
            <p>Other translation support may also be needed for declarations, assignments, inventor-related documentation, certificates, amendments, sequence-related language-dependent content, attorney or applicant statements, office correspondence, and national-phase supporting documentation.</p>
            <p className="legal-note">Stepes prepares these translations according to the requirements and instructions supplied for the project. Patent counsel and filing representatives remain responsible for determining which documents are legally required.</p>
          </Section>

          <section id="multilingual-workflow" className="dark-framework" aria-labelledby="multi-market-title">
            <div className="dark-framework-inner">
              <div className="dark-copy">
                <h2 id="multi-market-title">One PCT Application, Multiple Languages and Filing Markets</h2>
                <p>
                  A PCT application entering several national and regional phases should not have to become several disconnected translation projects. A centralized multilingual workflow can help maintain consistency across the patent family while still supporting the different requirements of each target jurisdiction.
                </p>
                <div className="dark-points">
                  <div><strong>Coordinate the source before translation begins</strong><span>Use one controlled package for the application, amendments, drawings, family references, and counsel instructions.</span></div>
                  <div><strong>Use one terminology framework across languages</strong><span>Capture defined terms, preferred translations, technical context, family references, and reviewer decisions.</span></div>
                  <div><strong>Manage shared deadlines through one workflow</strong><span>Coordinate source readiness, language schedules, reviewer availability, terminology decisions, and delivery.</span></div>
                  <div><strong>Keep counsel and linguistic review aligned</strong><span>Separate filing strategy from linguistic production while supporting structured feedback and final approval.</span></div>
                </div>
              </div>
              <div className="hub-visual" role="img" aria-label="One central PCT application connected to multiple language and filing-market outputs">
                <div className="hub-center">PCT</div>
                <div className="hub-node node-1"><b>CN</b><span>Chinese</span></div>
                <div className="hub-node node-2"><b>JP</b><span>Japanese</span></div>
                <div className="hub-node node-3"><b>KR</b><span>Korean</span></div>
                <div className="hub-node node-4"><b>EP</b><span>EN · FR · DE</span></div>
                <div className="hub-node node-5"><b>BR</b><span>Portuguese</span></div>
                <span className="hub-line line-1" aria-hidden="true" />
                <span className="hub-line line-2" aria-hidden="true" />
                <span className="hub-line line-3" aria-hidden="true" />
                <span className="hub-line line-4" aria-hidden="true" />
                <span className="hub-line line-5" aria-hidden="true" />
              </div>
            </div>
          </section>

          <Section id="translation-planning">
            <h2>How to Prepare a PCT Application for National Phase Translation</h2>
            <p className="section-lead">Good preparation can improve both translation quality and production efficiency.</p>

            <div className="prep-list">
              {[
                ["Identify the target jurisdictions", "Provide the countries and regional offices where translation support is needed. This helps determine the target languages, appropriate translators, project scale, and delivery schedule."],
                ["Confirm applicable deadlines with counsel", "Provide the filing deadlines confirmed by patent counsel or the filing representative, including jurisdiction-specific delivery dates when they differ."],
                ["Confirm the target languages", "Do not assume the target language solely from the country name. Regional offices can accept multiple official languages and filing routes may differ."],
                ["Establish the controlling source application", "Identify the exact application version that should serve as the translation source and provide clean editable files when available."],
                ["Collect Article 19 and Article 34 amendments", "Include all applicable amendments and clearly identify which jurisdictions require which versions."],
                ["Provide patent-family reference materials", "Related applications, granted patents, earlier translations, priority applications, technical disclosures, and approved family terminology can help translators maintain context and consistency."],
                ["Identify drawings containing text", "Provide editable artwork where possible and explain whether translated drawing text must be recreated, supplied separately, or handled another way."],
                ["Supply approved terminology", "Client glossaries, product terminology, technical nomenclature, inventor preferences, and attorney-approved translations can be incorporated into the workflow."],
                ["Confirm required file formats", "Identify whether final files are needed in Word, PDF, structured XML, editable drawing formats, bilingual review files, or another format."],
                ["Define the review process", "Identify who will review or approve the translations and whether feedback should be incorporated across related languages or patent-family materials."],
              ].map(([title, text], i) => (
                <div className="prep-item" key={title}>
                  <span className="prep-no">{String(i + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="quality-checklist">
            <h2>A Filing-Oriented PCT Patent Translation Quality Checklist</h2>
            <p className="section-lead">Patent translation quality is not determined by fluency alone. Filing-oriented work requires systematic checks across language, technology, document structure, and file integrity.</p>

            <div className="quality-grid">
              {[
                ["Completeness", ["Every required source section is translated", "Paragraphs and claims are complete", "Drawing text is accounted for", "Applicable amendments are included", "The correct source version was used"]],
                ["Claims", ["Claim numbering and dependencies", "Independent/dependent relationships", "Antecedent references", "Defined and repeated terminology", "Alternatives, limitations, ranges, units, and figure references"]],
                ["Technical Content", ["Scientific and engineering terminology", "Chemical and biological terminology", "Mathematical notation and variables", "Units, values, ranges, symbols, and abbreviations", "Technical relationships"]],
                ["Drawings and References", ["Figure numbers and drawing labels", "Reference numerals", "Figure citations in the description", "Translated callouts and flowchart text", "Tables and legends"]],
                ["Terminology Consistency", ["Claims and specification", "Abstract and drawings", "Amendments", "Related family documents", "Context-sensitive review of TM and glossary reuse"]],
                ["File Integrity", ["Section order and headings", "Paragraph and claim numbering", "Cross-references", "Tracked changes when applicable", "Tables, formulas, special characters, and required formatting"]],
              ].map(([title, items]) => (
                <article className="quality-group" key={title}>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <ArrowLink href="https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/">View the Patent Claims Translation Quality Checklist</ArrowLink>

            <h2 className="subchapter-title">Maintain Patent Terminology Across Languages and Patent Families</h2>
            <p>Patent terminology may recur across priority filings, PCT applications, national-phase applications, continuation filings, prosecution documents, related patents, product documentation, technical publications, licensing materials, and litigation records.</p>
            <div className="term-layout">
              <div>
                <h3>Claims and Defined Terms</h3>
                <p>Record defined terms together with enough context for translators and reviewers to understand how they function across independent claims, dependent claims, specifications, figures, and amendments.</p>
              </div>
              <div>
                <h3>Patent-Family Reference Translations</h3>
                <p>Use previous translations as references rather than automatically accepting them as correct. Review their approval status, filing purpose, claim changes, terminology history, and jurisdiction.</p>
              </div>
              <div>
                <h3>Multilingual Patent Glossaries</h3>
                <p>Capture source terms, approved target terms, definitions, context, patent-family references, technical disciplines, preferred abbreviations, prohibited variants, and reviewer comments.</p>
              </div>
              <div>
                <h3>Translation Memory and Approved Language</h3>
                <p>Translation memory can identify repeated or similar content across related patents, but high-context claims and amendments should be reviewed carefully before previous wording is reused.</p>
              </div>
            </div>
            <ArrowLink href="https://www.stepes.com/patent-translation-services/">Explore Patent Translation Services</ArrowLink>
          </Section>

          <Section id="ai-human-review">
            <div className="eyebrow">AI & HUMAN REVIEW</div>
            <h2>Where AI and Translation Technology Fit Into PCT Patent Translation</h2>
            <p className="section-lead">Modern patent translation workflows increasingly combine professional linguists with translation memory, terminology management, automated QA, and controlled artificial intelligence. The objective is to use technology according to the purpose, confidentiality, complexity, and risk of the content.</p>

            <div className="ai-columns">
              <div className="ai-column">
                <h3>Technology Can Help With</h3>
                <ul>
                  <li><strong>Terminology extraction</strong><span>Identify recurring technical and patent terms before translation begins.</span></li>
                  <li><strong>Translation-memory matching</strong><span>Surface previously translated content from related applications and patent families.</span></li>
                  <li><strong>Version comparison</strong><span>Help identify changes between original and amended application versions.</span></li>
                  <li><strong>Repetitive-content analysis</strong><span>Recognize shared material across related patents.</span></li>
                  <li><strong>Automated QA</strong><span>Flag numbers, units, missing text, terminology variation, references, and formatting issues.</span></li>
                  <li><strong>Workflow routing</strong><span>Coordinate multilingual projects and direct higher-risk content to appropriate human review.</span></li>
                </ul>
              </div>
              <div className="ai-column human">
                <h3>Human Expertise Remains Critical For</h3>
                <ul>
                  <li><strong>Filing-grade claims</strong><span>Claim structure, dependencies, technical limitations, and defined terminology require careful professional interpretation.</span></li>
                  <li><strong>Specifications and descriptions</strong><span>Technical meaning must remain consistent across large, highly structured documents.</span></li>
                  <li><strong>Novel subject matter</strong><span>New technologies often contain terminology that cannot be resolved through simple database matching.</span></li>
                  <li><strong>Ambiguous source language</strong><span>Human judgment is needed when technical or linguistic ambiguity could materially affect meaning.</span></li>
                  <li><strong>Amendments</strong><span>Reviewers need to understand how new language relates to original content.</span></li>
                  <li><strong>Final validation</strong><span>High-consequence patent translations should receive the professional review appropriate to their intended use.</span></li>
                </ul>
              </div>
            </div>

            <div className="callout">
              <div className="callout-label">QUALITY NOTE</div>
              <p>AI can be valuable for patent research, terminology analysis, source comparison, repetitive content, and quality automation. For filing-grade PCT applications, AI should operate within a controlled workflow that maintains professional human expertise where technical and legal precision are most consequential. Sensitive unpublished inventions also require appropriate information-security controls.</p>
            </div>
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/">AI Patent Translation: Research Use vs. Filing-Grade Translation</ArrowLink>
          </Section>

          <Section id="planning-checklist" wide className="planning-panel-section">
            <div className="planning-panel">
              <div className="planning-panel-intro">
                <div className="eyebrow">PCT PLANNING TOOL</div>
                <h2>PCT National Phase Translation Planning Checklist</h2>
                <p>Before starting translation, assemble a complete project package so each language team works from the right source, amendments, terminology, requirements, and review instructions.</p>
              </div>

              <div className="checklist-groups">
                {[
                  ["Application", ["PCT application or publication number", "Current international application", "Source language", "Priority information", "Clean editable source files when available"]],
                  ["Filing Markets", ["National and regional offices", "Target languages", "Counsel-confirmed deadlines", "Filing instructions for each jurisdiction", "Required certification or supporting documentation, where applicable"]],
                  ["Versions and Amendments", ["Original claim set", "Article 19 amendments", "Article 19 statement, where applicable", "Article 34 amendments", "International preliminary examination materials, where relevant", "Version required for each jurisdiction"]],
                  ["Reference Materials", ["Priority application", "Related patent-family documents", "Earlier approved translations", "Client glossaries", "Product terminology", "Technical documentation", "Inventor or subject-matter references"]],
                  ["Drawings and Specialized Content", ["Drawings containing text", "Editable artwork where available", "Tables and formulas", "Chemical or biological content", "Sequence-related material", "Specialized formatting instructions"]],
                  ["Production Requirements", ["Target file formats", "Required layout or formatting", "Delivery schedule", "Phased-delivery requirements", "Certification instructions", "Secure file-transfer requirements"]],
                  ["Review and Approval", ["Technical reviewer", "Patent counsel or filing reviewer", "Client terminology approver", "Instructions for incorporating reviewer feedback", "Final approval process"]],
                ].map(([title, items]) => (
                  <section className="check-group" key={title}>
                    <h3>{title}</h3>
                    <ul>{items.map((item) => <li key={item}><span aria-hidden="true" className="check-marker" />{item}</li>)}</ul>
                  </section>
                ))}
              </div>

              <div className="mid-cta">
                <div>
                  <h3>Have a PCT application entering several national or regional phases?</h3>
                  <p>Stepes can help coordinate the languages, files, terminology, amendments, and translation workflow through one managed project.</p>
                </div>
                <a className="btn btn-primary" href="https://app.stepes.com/quote/">Plan Your Patent Translations</a>
              </div>
            </div>
          </Section>

          <Section id="faqs">
            <h2>PCT Patent Translation FAQs</h2>
            <FaqPanel />
          </Section>

          <Section id="sources">
            <div className="eyebrow">OFFICIAL SOURCES</div>
            <h2>Verify Current National Phase Requirements</h2>
            <p className="section-lead">
              PCT procedures and national patent-office requirements change over time. WIPO notes that its PCT Applicant's Guide is updated virtually every week based on information received from PCT Contracting States and Offices. The Applicant's Guide and office-specific National Chapters should therefore be treated as primary current references when confirming national and regional phase requirements.
            </p>
            <div className="sources-list">
              <div className="source-row">
                <div><strong>WIPO PCT Applicant's Guide</strong><span>World Intellectual Property Organization</span></div>
                <p>International-phase and national-phase guidance, including National Chapters for individual countries and regional offices.</p>
                <ExternalLink href="https://www.wipo.int/en/web/pct-system/guide/index">Open official guide</ExternalLink>
              </div>
              <div className="source-row">
                <div><strong>WIPO National / Regional Phase Time Limits</strong><span>World Intellectual Property Organization</span></div>
                <p>Current time-limit reference by designated or elected office.</p>
                <ExternalLink href="https://www.wipo.int/en/web/pct-system/texts/time_limits">Open time-limit table</ExternalLink>
              </div>
              <div className="source-row">
                <div><strong>WIPO National Phase Chapters</strong><span>World Intellectual Property Organization</span></div>
                <p>Office-specific language requirements, translation content, amendments, special requirements, and procedural information.</p>
                <ExternalLink href="https://pctlegal.wipo.int/eGuide/view-doc.xhtml?doc-code=pctnp&doc-lang=en&doc-type=guide">Open national-phase guide</ExternalLink>
              </div>
            </div>
            <p className="source-note">Where necessary, review current instructions published directly by the relevant patent office. Patent counsel or the filing representative should determine how those requirements apply to the specific application.</p>
          </Section>

          <section className="related-block" aria-labelledby="related-title">
            <h2 id="related-title">More Patent Translation Guidance</h2>
            <div className="related-grid">
              {relatedGuides.map((item) => (
                <article key={item.title}>
                  <span className="related-eyebrow">{item.eyebrow}</span>
                  <h3><a href={item.href}>{item.title}</a></h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <h2 className="services-title">Patent Translation Support for Major Filing Languages</h2>
            <div className="service-links">
              {serviceLinks.map((item) => (
                <article key={item.title}>
                  <h3><a href={item.href}>{item.title}</a></h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <div className="eyebrow">PATENT TRANSLATION SUPPORT</div>
            <h2>Plan National Phase Patent Translations With Confidence</h2>
            <p>
              Coordinate PCT applications, claims, amendments, terminology, and multiple target languages through a secure translation workflow aligned with the requirements and instructions supplied by your IP team and filing counsel.
            </p>
            <p className="final-note">
              Stepes provides translation and multilingual workflow support. Patent counsel and filing representatives remain responsible for jurisdiction-specific legal interpretation, filing deadlines, claim strategy, national-phase requirements, and final submission decisions.
            </p>
          </div>
          <div className="final-actions">
            <a className="btn btn-primary" href="https://app.stepes.com/quote/">Request a Patent Translation Quote</a>
            <a className="btn btn-secondary" href="https://www.stepes.com/patent-translation-services/">Explore Patent Translation Services</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = `
  :root {
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-guide {
    --text: ${COLORS.text};
    --text-soft: ${COLORS.textSoft};
    --text-quiet: ${COLORS.textQuiet};
    --line: ${COLORS.line};
    --soft: ${COLORS.soft};
    --blush: ${COLORS.blush};
    --blush-strong: ${COLORS.blushStrong};
    --magenta: ${COLORS.magenta};
    --magenta-dark: ${COLORS.magentaDark};
    --dark: ${COLORS.dark};
    --white: ${COLORS.white};
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text);
    background: #fff;
    line-height: 1.68;
    font-size: 18px;
    overflow-x: clip;
  }
  .stepes-guide a { color: inherit; overflow-wrap: anywhere; }
  .stepes-guide a:focus-visible,
  .stepes-guide button:focus-visible { outline: 3px solid rgba(213,27,99,.3); outline-offset: 3px; }
  .shell { width: min(1280px, calc(100% - 64px)); margin-inline: auto; }
  .eyebrow { font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--magenta); }
  h1, h2, h3, h4 { font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; margin: 0; letter-spacing: -.025em; color: var(--text); }
  h1 { font-size: clamp(42px, 4.1vw, 58px); line-height: 1.04; font-weight: 500; max-width: 850px; }
  h2 { font-size: clamp(32px, 3vw, 42px); line-height: 1.12; font-weight: 500; }
  h3 { font-size: 23px; line-height: 1.28; font-weight: 600; }
  h4 { font-size: 18px; line-height: 1.35; font-weight: 600; }
  p { margin: 0; color: var(--text-soft); }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

  .breadcrumb-shell { width: min(1280px, calc(100% - 64px)); margin: 0 auto; padding-top: 30px; }
  .breadcrumbs { margin: 0; padding: 0; display: flex; flex-wrap: wrap; list-style: none; gap: 4px 0; font-size: 14px; line-height: 1.5; color: #76777C; }
  .breadcrumbs li { display: inline-flex; align-items: baseline; min-width: 0; }
  .breadcrumbs a { text-decoration: none; color: #6D6E73; }
  .breadcrumbs a:hover { color: var(--magenta); }
  .crumb-separator { padding: 0 9px; color: #B4B5B8; }
  .crumb-current { color: #44454A; font-weight: 500; overflow-wrap: anywhere; }
  .breadcrumbs a { overflow-wrap: anywhere; }

  .hero { padding: 66px 0 74px; display: block; }
  .hero-copy { max-width: 980px; }
  .hero-copy .eyebrow { margin-bottom: 18px; }
  .hero-deck { margin-top: 26px; max-width: 840px; font-size: 20px; line-height: 1.65; color: #45464A; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; padding: 12px 23px; border-radius: 999px; text-decoration: none; font-size: 16px; font-weight: 600; transition: background .2s ease, color .2s ease, border-color .2s ease; }
  .btn-primary { background: var(--magenta); color: #fff !important; border: 1px solid var(--magenta); }
  .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); color: #fff !important; }
  .btn-secondary { background: #fff; color: #242424 !important; border: 1px solid #CFCFD3; }
  .btn-secondary:hover { border-color: #8C8D91; color: #111 !important; }
  .hero-meta { margin-top: 22px; color: #707176; font-size: 14px; line-height: 1.5; }

  .summary-band { background: var(--blush); border-top: 1px solid #F6DCE7; border-bottom: 1px solid #F6DCE7; }
  .summary-inner { display: grid; grid-template-columns: .78fr 1.22fr; gap: 78px; padding-top: 70px; padding-bottom: 70px; }
  .summary-lead .eyebrow { margin-bottom: 16px; }
  .summary-lead h2 { font-size: 34px; max-width: 470px; }
  .summary-lead p { margin-top: 18px; max-width: 480px; font-size: 17px; }
  .summary-list { border-top: 1px solid rgba(36,36,36,.12); }
  .summary-row { display: grid; grid-template-columns: 220px 1fr; gap: 28px; padding: 20px 0; border-bottom: 1px solid rgba(36,36,36,.12); }
  .summary-row h3 { font-size: 18px; }
  .summary-row p { font-size: 16px; color: #505155; }

  .article { display: grid; grid-template-columns: 240px minmax(0, 760px); gap: 84px; justify-content: center; padding-top: 86px; padding-bottom: 20px; }
  .article-content { min-width: 0; }
  .toc-rail { position: sticky; top: 112px; align-self: start; max-height: calc(100vh - 144px); overflow: auto; padding-right: 10px; }
  .toc-label { font-size: 11px; letter-spacing: .13em; font-weight: 700; color: #8A8B90; margin-bottom: 13px; }
  .toc-rail nav { border-left: 1px solid #DADADD; }
  .toc-link { display: block; text-decoration: none; padding: 8px 0 8px 17px; color: #66676C; font-size: 16px; line-height: 1.35; border-left: 2px solid transparent; margin-left: -1px; }
  .toc-link:hover { color: var(--magenta); }
  .toc-link.active { color: var(--magenta); border-left-color: var(--magenta); font-weight: 600; }
  .toc-mobile { display: none; }

  .chapter { scroll-margin-top: 112px; padding: 0 0 94px; }
  .chapter + .chapter { border-top: 1px solid var(--line); padding-top: 92px; }
  .chapter > .eyebrow { margin-bottom: 15px; }
  .chapter h2 + p,
  .chapter .section-lead { margin-top: 22px; }
  .section-lead { font-size: 19px; line-height: 1.72; color: #46474C; }
  .chapter p + p { margin-top: 18px; }
  .chapter h3 { margin-top: 42px; margin-bottom: 13px; }
  .chapter h2.subchapter-title { font-size: 31px; margin-top: 72px; }
  .chapter h2.subchapter-title + p { margin-top: 18px; }

  .glance-grid { margin-top: 38px; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1fr 1fr; }
  .glance-grid article { padding: 30px 30px 32px 0; border-bottom: 1px solid var(--line); }
  .glance-grid article:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
  .glance-grid article:nth-child(even) { padding-left: 34px; }
  .glance-no { display: block; font-size: 12px; font-weight: 700; color: var(--magenta); margin-bottom: 12px; }
  .glance-grid h3 { margin: 0; font-size: 20px; }
  .glance-grid p { margin-top: 11px; font-size: 16px; }

  .callout { margin-top: 36px; padding: 26px 28px; background: var(--soft); border-left: 3px solid var(--magenta); border-radius: 0 14px 14px 0; }
  .callout-label { font-size: 11px; letter-spacing: .12em; font-weight: 700; color: var(--magenta); margin-bottom: 9px; }
  .callout p { font-size: 16px; color: #47484C; }

  .timeline { margin: 38px 0 46px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; position: relative; }
  .timeline::before { content: ""; position: absolute; height: 2px; left: 4%; right: 4%; top: 21px; background: #D6D7DA; z-index: 0; }
  .timeline-stage { position: relative; z-index: 1; text-align: center; font-size: 16px; line-height: 1.4; color: #4B4C50; }
  .timeline-no { width: 44px; height: 44px; margin: 0 auto 12px; display: grid; place-items: center; border-radius: 50%; background: #fff; border: 2px solid #737479; font-size: 12px; font-weight: 700; color: #55565A; }
  .timeline-stage:nth-child(5) .timeline-no { background: var(--magenta); color: #fff; border-color: var(--magenta); }

  .pull-question { margin: 32px 0; padding: 28px 30px; background: #F7F7F8; border-radius: 18px; }
  .pull-question span { display: block; font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--magenta); }
  .pull-question strong { display: block; margin-top: 8px; font-size: 23px; line-height: 1.4; font-family: "Inter Tight", Inter, sans-serif; font-weight: 500; }
  .formula-band { margin: 28px 0 6px; display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: center; padding: 22px 26px; background: #F7F7F8; border-radius: 16px; }
  .formula-band span { font-size: 16px; font-weight: 600; color: #3D3E42; }
  .formula-band b { color: var(--magenta); font-size: 26px; }
  .scope-list { margin: 20px 0 8px; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; }
  .scope-list li { position: relative; padding-left: 18px; font-size: 16px; color: #4F5055; }
  .scope-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }

  .document-anatomy { margin-top: 34px; display: grid; grid-template-columns: 245px 1fr; gap: 42px; align-items: start; }
  .patent-page { min-height: 350px; background: #F7F7F8; border: 1px solid #D4D5D8; border-radius: 16px; padding: 26px 24px; position: sticky; top: 110px; }
  .paper-title { width: 66%; height: 13px; background: #4D4E52; border-radius: 6px; margin-bottom: 28px; }
  .paper-line { height: 6px; background: #B0B1B4; border-radius: 6px; margin: 12px 0; width: 78%; }
  .paper-line.full { width: 100%; }
  .paper-line.short { width: 55%; }
  .paper-figure { margin: 28px auto; width: 125px; height: 85px; border: 2px solid #6B6C70; display: grid; place-items: center; font-size: 11px; color: #5A5B5F; }
  .paper-claim { margin-top: 24px; padding-top: 18px; border-top: 1px solid #D2D3D6; font-size: 13px; color: var(--magenta); font-weight: 600; }
  .anatomy-list { border-top: 1px solid var(--line); }
  .anatomy-list > div { padding: 22px 0; border-bottom: 1px solid var(--line); }
  .anatomy-list h3 { margin: 0; font-size: 19px; }
  .anatomy-list p { margin-top: 7px; font-size: 16px; }

  .deadline-band { margin: 38px 0 44px; display: grid; grid-template-columns: 1fr 1fr 1.3fr; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .deadline-band > div { padding: 28px; min-height: 210px; }
  .deadline-band > div + div { border-left: 1px solid var(--line); }
  .deadline-big { font-family: "Inter Tight", Inter, sans-serif; font-size: 58px; line-height: 1; font-weight: 500; }
  .deadline-unit { display: block; margin-top: 4px; font-size: 14px; color: #727378; }
  .deadline-band p { margin-top: 20px; font-size: 16px; }
  .deadline-note { background: var(--blush); }
  .deadline-note strong { display: block; font-size: 20px; font-family: "Inter Tight", Inter, sans-serif; }
  .deadline-note a { display: inline-flex; margin-top: 16px; font-size: 16px; font-weight: 600; color: var(--magenta); text-decoration: none; }

  .editorial-steps { margin-top: 24px; border-top: 1px solid var(--line); }
  .editorial-step { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--line); }
  .editorial-step > span { color: var(--magenta); font-weight: 700; font-size: 12px; padding-top: 4px; }
  .editorial-step h4 { font-size: 18px; margin: 0; }
  .editorial-step p { margin-top: 7px; font-size: 16px; }

  .chapter-wide { width: min(870px, calc(100vw - 448px)); margin-left: 0; transform: none; }
  .chapter-wide > h2, .chapter-wide > .eyebrow, .chapter-wide > .wide-lead { width: min(760px, 100%); margin-left: 0; margin-right: 0; }
  .chapter-wide > .eyebrow { margin-bottom: 15px; }
  .wide-lead { font-size: 19px; }
  .planning-reference { width: min(880px, 100%); margin: 36px auto; }
  .jurisdiction-table-wrap { margin-top: 32px; overflow-x: auto; }
  .jurisdiction-table { width: 100%; border-collapse: collapse; min-width: 840px; background: #fff; }
  .jurisdiction-table th, .jurisdiction-table td { padding: 18px 16px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.55; }
  .jurisdiction-table thead th { font-weight: 600; color: #343539; background: #F8F8F9; }
  .jurisdiction-table tbody th { width: 18%; font-weight: 600; }
  .jurisdiction-table a { color: var(--magenta); text-decoration: none; font-weight: 600; }
  .table-note { margin-top: 12px; font-size: 14px; color: #75767B; }
  .jurisdiction-cards { display: none; }

  .market-notes { width: min(760px, 100%); margin: 60px auto 0; border-top: 1px solid var(--line); }
  .market-notes article { padding: 30px 0; border-bottom: 1px solid var(--line); }
  .market-notes h3 { margin: 0; }
  .market-notes p { margin-top: 12px; }
  .arrow-link { display: inline-flex; gap: 9px; align-items: center; margin-top: 16px; color: var(--magenta) !important; font-size: 16px; font-weight: 600; text-decoration: none; }
  .arrow-link:hover span:first-child { text-decoration: underline; }
  .ext-mark { margin-left: 5px; font-size: .9em; }

  .version-flow { margin: 38px 0 46px; display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 12px; align-items: center; }
  .version-card { min-height: 165px; padding: 22px 18px; border: 1px solid var(--line); border-radius: 14px; background: #fff; }
  .version-card span { font-size: 11px; color: var(--magenta); font-weight: 700; }
  .version-card strong { display: block; margin-top: 9px; font-size: 17px; }
  .version-card p { margin-top: 8px; font-size: 16px; }
  .version-card.selected { background: #FAFAFB; border-color: #D8D8DB; box-shadow: inset 0 3px 0 var(--magenta); }
  .version-arrow { color: #A2A3A7; }
  .detail-list { margin: 20px 0 22px; padding-left: 24px; }
  .detail-list li { margin: 8px 0; font-size: 17px; color: #4E4F54; }
  .legal-note { margin-top: 26px !important; padding-top: 22px; border-top: 1px solid var(--line); font-size: 16px; color: #636469; }

  .dark-framework { width: min(870px, calc(100vw - 448px)); margin: 0 0 98px; border-radius: 26px; background: var(--dark); color: #fff; overflow: hidden; scroll-margin-top: 112px; }
  .dark-framework-inner { display: grid; grid-template-columns: 1.04fr .96fr; gap: 48px; padding: 60px 58px; align-items: center; }
  .dark-framework h2 { color: #fff; margin-top: 14px; }
  .dark-framework p { color: #C9C9CD; margin-top: 22px; }
  .dark-points { margin-top: 34px; }
  .dark-points > div { padding: 18px 0; border-top: 1px solid rgba(255,255,255,.12); }
  .dark-points strong { display: block; color: #fff; font-size: 17px; }
  .dark-points span { display: block; color: #BDBDC2; font-size: 16px; margin-top: 5px; }
  .hub-visual { position: relative; min-height: 430px; }
  .hub-center { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 118px; height: 118px; border-radius: 50%; display: grid; place-items: center; background: var(--magenta); color: #fff; font-family: "Inter Tight", Inter, sans-serif; font-size: 30px; font-weight: 600; z-index: 3; }
  .hub-node { position: absolute; width: 142px; min-height: 86px; padding: 13px 14px; border: 1px solid rgba(255,255,255,.18); border-radius: 14px; background: #303034; color: #fff; z-index: 3; }
  .hub-node b { display: block; font-size: 16px; }
  .hub-node span { display: block; font-size: 16px; color: #BABAC0; margin-top: 3px; }
  .node-1 { left: 4%; top: 9%; }
  .node-2 { right: 1%; top: 6%; }
  .node-3 { right: 0; bottom: 14%; }
  .node-4 { left: 5%; bottom: 8%; }
  .node-5 { right: 7%; top: 41%; }
  .hub-line { position: absolute; height: 1px; background: rgba(255,255,255,.22); left: 50%; top: 50%; transform-origin: left center; width: 155px; }
  .line-1 { transform: rotate(-145deg); }
  .line-2 { transform: rotate(-36deg); }
  .line-3 { transform: rotate(38deg); }
  .line-4 { transform: rotate(142deg); }
  .line-5 { transform: rotate(0deg); width: 138px; }

  .prep-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .prep-item { display: grid; grid-template-columns: 58px 1fr; gap: 22px; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .prep-no { font-size: 12px; font-weight: 700; color: var(--magenta); padding-top: 5px; }
  .prep-item h3 { margin: 0; font-size: 21px; }
  .prep-item p { margin-top: 8px; font-size: 16px; }

  .quality-grid { margin-top: 36px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
  .quality-group { padding: 28px 30px 30px 0; border-bottom: 1px solid var(--line); }
  .quality-group:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
  .quality-group:nth-child(even) { padding-left: 34px; }
  .quality-group h3 { margin: 0; font-size: 20px; }
  .quality-group ul { margin: 16px 0 0; padding-left: 20px; }
  .quality-group li { margin: 7px 0; font-size: 16px; color: #515257; }
  .term-layout { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px 38px; }
  .term-layout > div { padding-top: 22px; border-top: 1px solid var(--line); }
  .term-layout h3 { margin: 0; font-size: 19px; }
  .term-layout p { margin-top: 9px; font-size: 16px; }

  .ai-columns { margin-top: 38px; display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .ai-column { padding: 30px; background: #F8F8F9; }
  .ai-column.human { background: #fff; border-left: 1px solid var(--line); }
  .ai-column h3 { margin: 0 0 8px; }
  .ai-column ul { list-style: none; margin: 0; padding: 0; }
  .ai-column li { padding: 17px 0; border-top: 1px solid var(--line); }
  .ai-column li:first-child { border-top: 0; }
  .ai-column strong { display: block; font-size: 16px; }
  .ai-column span { display: block; margin-top: 4px; color: #5A5B60; font-size: 16px; }

  .planning-panel-section { padding-bottom: 94px; }
  .planning-panel { background: var(--blush); border: 1px solid #F4D6E2; border-radius: 26px; padding: 54px; }
  .planning-panel-intro { width: min(760px, 100%); margin: 0 auto; }
  .planning-panel-intro h2 { margin-top: 14px; }
  .planning-panel-intro p { margin-top: 20px; font-size: 18px; }
  .checklist-groups { margin-top: 42px; display: grid; grid-template-columns: 1fr 1fr; gap: 22px 36px; }
  .check-group { padding: 24px 0; border-top: 1px solid rgba(36,36,36,.14); }
  .check-group h3 { margin: 0; font-size: 19px; }
  .check-group ul { margin: 14px 0 0; padding: 0; list-style: none; }
  .check-group li { display: grid; grid-template-columns: 18px 1fr; gap: 10px; align-items: start; margin: 9px 0; font-size: 16px; color: #4A4B50; }
  .check-marker { width: 14px; height: 14px; border: 1.5px solid #77787D; border-radius: 3px; margin-top: 6px; }
  .mid-cta { margin-top: 38px; padding-top: 32px; border-top: 1px solid rgba(36,36,36,.14); display: flex; justify-content: space-between; align-items: center; gap: 28px; }
  .mid-cta h3 { margin: 0; font-size: 22px; }
  .mid-cta p { margin-top: 7px; font-size: 16px; max-width: 650px; }
  .mid-cta .btn { flex: 0 0 auto; }

  .faq-panel { margin-top: 34px; border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-question { width: 100%; border: 0; background: transparent; display: flex; justify-content: space-between; gap: 24px; align-items: center; text-align: left; padding: 23px 0; color: var(--text); font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; font-weight: 600; cursor: pointer; }
  .faq-symbol { font-size: 24px; font-weight: 400; color: var(--magenta); }
  .faq-answer { display: none; }
  .faq-answer.open { display: block; padding: 0 46px 22px 0; }
  .faq-answer p { font-size: 16px; }

  .sources-list { margin-top: 34px; border-top: 1px solid var(--line); }
  .source-row { display: grid; grid-template-columns: 220px 1fr 170px; gap: 26px; align-items: start; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .source-row strong { display: block; font-size: 16px; }
  .source-row span { display: block; margin-top: 4px; font-size: 14px; color: #7A7B80; }
  .source-row p { font-size: 16px; }
  .source-row a { font-size: 16px; color: var(--magenta); font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .source-note { margin-top: 24px !important; font-size: 16px; }

  .related-block { padding: 8px 0 96px; }
  .related-block .eyebrow { margin-bottom: 15px; }
  .related-grid { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; border-top: 1px solid var(--line); }
  .related-grid article { padding: 26px 0; border-bottom: 1px solid var(--line); }
  .related-eyebrow { font-size: 11px; letter-spacing: .11em; font-weight: 700; color: #85868B; }
  .related-grid h3 { margin-top: 7px; font-size: 20px; }
  .related-grid h3 a { text-decoration: none; }
  .related-grid h3 a:hover { color: var(--magenta); }
  .related-grid p { margin-top: 8px; font-size: 16px; }
  .services-title { margin-top: 74px; font-size: 31px; }
  .service-links { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; border-top: 1px solid var(--line); }
  .service-links article { padding: 24px 0; border-bottom: 1px solid var(--line); }
  .service-links h3 { margin: 0; font-size: 19px; }
  .service-links h3 a { text-decoration: none; }
  .service-links h3 a:hover { color: var(--magenta); }
  .service-links p { margin-top: 8px; font-size: 16px; }

  .final-cta { background: #FFF9FB; border-top: 1px solid #F2DDE6; }
  .final-cta-inner { padding-top: 76px; padding-bottom: 82px; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 68px; align-items: end; }
  .final-cta h2 { margin-top: 14px; max-width: 720px; }
  .final-cta p { margin-top: 18px; max-width: 780px; font-size: 18px; }
  .final-note { font-size: 16px !important; color: #6D6E73 !important; }
  .final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 290px; }

  @media (max-width: 1180px) {
    .article { display: block; width: min(100% - 64px, 780px); padding-top: 64px; }
    .toc-rail { display: none; }
    .toc-mobile { display: block; margin-bottom: 42px; }
    .toc-mobile-button { width: 100%; min-height: 50px; display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #D8D9DC; border-radius: 12px; background: #fff; color: #333438; font-size: 16px; font-weight: 600; cursor: pointer; }
    .toc-mobile-panel { margin-top: 8px; padding: 8px; border: 1px solid #E1E1E3; border-radius: 12px; background: #fff; }
    .toc-mobile-panel a { display: flex; align-items: center; min-height: 44px; padding: 7px 9px; text-decoration: none; color: #56575C; font-size: 16px; }
    .toc-mobile-panel a:hover { color: var(--magenta); }
    .chapter { scroll-margin-top: 92px; }
    .chapter-wide { width: 100%; margin-left: 0; transform: none; }
    .dark-framework { width: 100%; margin-left: 0; margin-right: 0; scroll-margin-top: 92px; }
  }

  @media (max-width: 1100px) {
    .dark-framework-inner { padding: 56px 50px; gap: 38px; }
  }

  @media (max-width: 900px) {
    .shell, .breadcrumb-shell { width: min(100% - 48px, 1280px); }
    .hero { padding-top: 52px; }
    .hero-copy { max-width: 820px; }
    .summary-inner { grid-template-columns: 1fr; gap: 38px; }
    .summary-lead h2, .summary-lead p { max-width: 720px; }
    .summary-row { grid-template-columns: 1fr; gap: 6px; }
    .article { width: min(100% - 48px, 780px); padding-top: 58px; }
    .timeline { display: block; margin: 34px 0 42px; }
    .timeline::before { left: 21px; top: 18px; bottom: 18px; width: 2px; height: auto; right: auto; }
    .timeline-stage { display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 16px; align-items: center; text-align: left; margin: 0 0 18px; }
    .timeline-no { margin: 0; }
    .version-flow { grid-template-columns: 1fr; gap: 10px; }
    .version-card { min-height: 0; }
    .version-arrow { transform: rotate(90deg); justify-self: center; line-height: 1; }
    .deadline-band { grid-template-columns: 1fr 1fr; }
    .deadline-note { grid-column: 1 / -1; }
    .deadline-band > .deadline-note { border-left: 0; border-top: 1px solid var(--line); }
    .jurisdiction-table-wrap { display: none; }
    .jurisdiction-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
    .jurisdiction-card { border: 1px solid var(--line); border-radius: 16px; padding: 20px; }
    .jurisdiction-card-head { display: flex; justify-content: space-between; gap: 14px; align-items: start; }
    .jurisdiction-card-head h3 { margin: 0; font-size: 19px; }
    .jurisdiction-card-head > span { flex: 0 0 auto; font-size: 14px; font-weight: 700; color: var(--magenta); }
    .jurisdiction-card dl { margin: 18px 0 0; }
    .jurisdiction-card dl > div { padding: 12px 0; border-top: 1px solid var(--line); }
    .jurisdiction-card dt { font-size: 12px; font-weight: 700; color: #73747A; text-transform: uppercase; letter-spacing: .06em; }
    .jurisdiction-card dd { margin: 5px 0 0; font-size: 16px; color: #4F5055; }
    .jurisdiction-card a { display: inline-flex; margin-top: 12px; color: var(--magenta); text-decoration: none; font-size: 16px; font-weight: 600; }
    .market-notes { margin-top: 44px; }
    .dark-framework { width: 100%; }
    .dark-framework-inner { grid-template-columns: 1fr; }
    .hub-visual { min-height: 390px; }
    .source-row { grid-template-columns: 1fr; gap: 8px; }
    .final-cta-inner { grid-template-columns: 1fr; align-items: start; }
    .final-actions { min-width: 0; flex-direction: row; flex-wrap: wrap; }
  }

  @media (max-width: 680px) {
    .stepes-guide { font-size: 17px; line-height: 1.7; }
    .shell, .breadcrumb-shell, .article { width: min(100% - 36px, 1280px); }
    .breadcrumb-shell { padding-top: 20px; }
    .breadcrumbs { font-size: 14px; row-gap: 6px; }
    .breadcrumbs li { max-width: 100%; }
    .crumb-current { max-width: 100%; }
    .crumb-separator { padding: 0 6px; }
    .hero { padding: 42px 0 56px; }
    .hero-copy { text-align: center; }
    .hero-copy .eyebrow { text-align: center; }
    h1 { font-size: 40px; }
    h2 { font-size: 32px; }
    .hero-deck { font-size: 18px; }
    .hero-actions { justify-content: center; }
    .hero-meta { text-align: center; }
    .summary-inner { padding-top: 54px; padding-bottom: 54px; }
    .summary-lead h2 { font-size: 30px; }
    .article { padding-top: 44px; }
    .chapter { padding-bottom: 70px; }
    .chapter + .chapter { padding-top: 70px; }
    .glance-grid { grid-template-columns: 1fr; }
    .glance-grid article, .glance-grid article:nth-child(odd), .glance-grid article:nth-child(even) { padding: 24px 0; border-right: 0; }
    .formula-band { grid-template-columns: 1fr; text-align: center; }
    .formula-band b { transform: rotate(90deg); }
    .scope-list { grid-template-columns: 1fr; gap: 9px; }
    .document-anatomy { grid-template-columns: 1fr; }
    .patent-page { position: static; max-width: 250px; }
    .deadline-band { grid-template-columns: 1fr; }
    .deadline-note { grid-column: auto; }
    .deadline-band > div + div, .deadline-band > .deadline-note { border-left: 0; border-top: 1px solid var(--line); }
    .editorial-step { grid-template-columns: 42px 1fr; }
    .jurisdiction-cards { grid-template-columns: 1fr; }
    .dark-framework { width: 100%; border-radius: 22px; }
    .dark-framework-inner { padding: 44px 26px; }
    .hub-visual { min-height: 430px; }
    .hub-center { width: 96px; height: 96px; font-size: 25px; }
    .hub-node { width: 138px; }
    .node-1 { left: 0; }
    .node-2 { right: 0; }
    .node-3 { right: 0; }
    .node-4 { left: 0; }
    .node-5 { right: 1%; top: 45%; }
    .quality-grid, .term-layout, .ai-columns, .checklist-groups, .related-grid, .service-links { grid-template-columns: 1fr; }
    .quality-group, .quality-group:nth-child(odd), .quality-group:nth-child(even) { padding: 24px 0; border-right: 0; }
    .ai-column.human { border-left: 0; border-top: 1px solid var(--line); }
    .planning-panel { padding: 34px 22px; border-radius: 20px; }
    .mid-cta { align-items: stretch; flex-direction: column; }
    .mid-cta .btn { width: 100%; }
    .faq-question { font-size: 17px; }
    .faq-answer.open { padding-right: 0; }
    .final-cta-inner { padding-top: 62px; padding-bottom: 66px; gap: 32px; }
    .final-actions { flex-direction: column; }
    .final-actions .btn { width: 100%; }
  }

  @media (max-width: 560px) {
    .hub-visual { min-height: 0; display: flex; flex-direction: column; gap: 10px; }
    .hub-line { display: none; }
    .hub-center { position: relative; left: auto; top: auto; transform: none; width: 96px; height: 96px; margin: 0 auto 14px; }
    .hub-node { position: relative; left: auto !important; right: auto !important; top: auto !important; bottom: auto !important; width: 100%; min-height: 0; }
  }

  @media (max-width: 390px) {
    .shell, .breadcrumb-shell, .article { width: min(100% - 28px, 1280px); }
    .hero { padding-top: 34px; }
    h1 { font-size: 36px; }
    h2 { font-size: 30px; }
    h3 { font-size: 21px; }
    .hero-actions .btn { width: 100%; }
    .btn { max-width: 100%; white-space: normal; text-align: center; }
    .dark-framework { width: 100%; }
  }
`;
