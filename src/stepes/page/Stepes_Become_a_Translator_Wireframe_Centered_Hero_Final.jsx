import React, { useState } from "react";

const URLS = {
  page: "https://www.stepes.com/become-a-translator/",
  apply: "https://www.stepes.com/become-a-translator/apply/",
  translatorLogin: "https://www.stepes.com/translator-login/",
  contact: "https://www.stepes.com/contact-us/",
  ourLinguists: "https://www.stepes.com/our-linguists/",
  translationQualityAssurance: "https://www.stepes.com/translation-quality-assurance/",
  security: "https://www.stepes.com/security/",
  qualitySystem: "https://www.stepes.com/quality-system/",
  isoCertifications: "https://www.stepes.com/iso-certifications/"
};

const roles = [
  {
    icon: "translate",
    title: "Translation, Editing, and Review",
    text: "Support professional translation, editing, revision, proofreading, machine translation post-editing, AI-output review, terminology validation, and transcreation."
  },
  {
    icon: "localize",
    title: "Localization and Linguistic QA",
    text: "Work on websites, software, SaaS platforms, mobile apps, user interfaces, help centers, in-context review, localization testing, and linguistic quality assurance."
  },
  {
    icon: "headset",
    title: "Interpreting and Spoken Language",
    text: "Provide remote, consecutive, conference, business, medical, or community interpreting, along with transcription, voice-over, and audio review."
  },
  {
    icon: "media",
    title: "Multimedia and Production",
    text: "Contribute to subtitling, captioning, time coding, voice-over, multilingual desktop publishing, eLearning localization, and multimedia QA."
  },
  {
    icon: "spark",
    title: "Multilingual AI and Language Data",
    text: "Evaluate AI translations, review generated content, classify linguistic errors, test multilingual models, annotate language data, and validate cultural suitability."
  }
];

const industries = [
  {
    title: "Life Sciences and Healthcare",
    text: "Pharmaceuticals, clinical research, medical devices, healthcare services, patient communications, regulatory documentation, medical education, and product labeling."
  },
  {
    title: "Legal, Financial, and Regulated Business",
    text: "Contracts, litigation support, compliance documentation, banking and financial communications, insurance, corporate governance, policies, and risk materials."
  },
  {
    title: "Technology and Digital Products",
    text: "Software, SaaS, mobile applications, user interfaces, product documentation, help centers, technical support, AI, cybersecurity, cloud services, and developer content."
  },
  {
    title: "Manufacturing and Engineering",
    text: "User manuals, installation guides, product specifications, safety documentation, standard operating procedures, engineering content, training, automotive, and electronics."
  },
  {
    title: "Marketing and Global Communications",
    text: "Corporate websites, campaigns, advertising, brand messaging, e-commerce, product launches, social media, customer communications, travel, and eLearning."
  }
];

const qualifications = [
  {
    icon: "language",
    title: "Language Proficiency",
    text: "Native or near-native command of the target language, strong source-language comprehension, excellent writing, and awareness of regional and cultural conventions."
  },
  {
    icon: "briefcase",
    title: "Professional Experience",
    text: "Relevant experience in translation, editing, localization, interpreting, linguistic QA, multimedia, terminology, technical content, or multilingual AI evaluation."
  },
  {
    icon: "award",
    title: "Education and Credentials",
    text: "Appropriate education, certifications, specialized training, professional memberships, documented work history, or subject-matter expertise for the work you select."
  },
  {
    icon: "tools",
    title: "Technology Readiness",
    text: "Comfort with translation platforms, CAT tools, translation memories, terminology databases, style guides, structured file formats, and secure online workflows."
  },
  {
    icon: "shield",
    title: "Professional Conduct",
    text: "A commitment to accuracy, confidentiality, reliable delivery, timely communication, approved tools, project instructions, and constructive quality feedback."
  }
];

const applicationSteps = [
  {
    title: "Create Your Professional Profile",
    text: "Tell us about your native language, language combinations, services, subject expertise, experience, location, tools, and availability."
  },
  {
    title: "Submit Your Qualifications",
    text: "Provide a résumé, education, credentials, certifications, work history, references, and other relevant professional information when requested."
  },
  {
    title: "Complete Qualification Review",
    text: "Stepes evaluates your profile against language needs, subject expertise, service capabilities, customer requirements, and current or anticipated demand."
  },
  {
    title: "Finish Onboarding and Compliance",
    text: "Approved applicants may complete service agreements, confidentiality requirements, payment setup, verification, security guidance, and platform onboarding."
  },
  {
    title: "Be Considered for Project Matching",
    text: "Suitable opportunities may be matched according to approved languages, expertise, availability, quality performance, customer requirements, and business demand."
  }
];

const workflowItems = [
  {
    icon: "document",
    title: "Clear Project Scope",
    text: "Review the languages, content type, service requirements, subject matter, schedule, file format, quality expectations, and compensation terms before accepting work."
  },
  {
    icon: "database",
    title: "Approved Language Resources",
    text: "Use applicable translation memories, terminology, style guides, reference translations, product information, and customer instructions."
  },
  {
    icon: "people",
    title: "Professional Project Support",
    text: "Coordinate with project managers, editors, reviewers, terminology specialists, localization engineers, and customer teams when the workflow requires it."
  },
  {
    icon: "check",
    title: "Quality and Delivery Controls",
    text: "Complete required self-review, automated checks, terminology validation, in-context review, and delivery steps within the approved working environment."
  }
];

const benefits = [
  {
    title: "Opportunities Aligned With Your Expertise",
    text: "Your approved profile helps Stepes identify assignments that match your languages, services, subject areas, and professional experience."
  },
  {
    title: "Enterprise and Specialized Content",
    text: "Support global organizations across technology, healthcare, life sciences, legal, financial services, manufacturing, retail, travel, education, and other industries."
  },
  {
    title: "Structured Project Support",
    text: "Project managers coordinate requirements, schedules, questions, reference materials, reviews, and delivery expectations."
  },
  {
    title: "Professional Translation Technology",
    text: "Work with translation memories, terminology resources, automated quality tools, online translation environments, and integrated localization workflows as applicable."
  },
  {
    title: "Opportunities Beyond Traditional Translation",
    text: "Your work may include editing, linguistic review, interpreting, localization testing, multimedia, terminology, multilingual AI evaluation, and related services."
  },
  {
    title: "Potential for Ongoing Programs",
    text: "When qualifications, performance, availability, and customer needs align, linguists may be considered for recurring programs or dedicated customer teams."
  }
];

const faqs = [
  {
    q: "Who can apply to join Stepes?",
    a: "Professional translators and other qualified language specialists may apply. Stepes may work with translators, editors, reviewers, interpreters, localization QA specialists, subtitlers, transcribers, voice-over professionals, terminology specialists, desktop publishing specialists, and multilingual AI language experts. Opportunities depend on language demand, qualifications, specialization, location, and customer requirements."
  },
  {
    q: "What qualifications does Stepes require?",
    a: "Requirements vary by language, service, industry, and assignment. Applicants are generally evaluated according to language proficiency, professional experience, subject-matter knowledge, education, credentials, service capabilities, technology experience, and their ability to meet quality, security, and confidentiality standards."
  },
  {
    q: "Do I need a translation degree or professional certification?",
    a: "Not every opportunity requires the same degree or certification. Stepes considers the applicant’s complete professional profile, including education, credentials, experience, subject expertise, and demonstrated competence. Regulated, technical, interpreting, or customer-specific assignments may require formal qualifications."
  },
  {
    q: "Which languages does Stepes support?",
    a: "Stepes supports translation and localization across more than 100 languages. Demand varies by language combination, service, region, and customer program. Completing an application allows Stepes to consider your profile when a suitable need arises."
  },
  {
    q: "Can editors, reviewers, and other language professionals apply?",
    a: "Yes. Stepes works with professionals across translation, editing, review, interpreting, localization QA, terminology, multimedia, transcription, voice-over, multilingual production, and AI language evaluation. Applicants should select only the services they are qualified to provide."
  },
  {
    q: "Does creating a profile guarantee acceptance?",
    a: "No. Creating a profile or submitting an application does not guarantee approval for the Stepes linguist team. Applications are reviewed according to qualifications, language needs, specialization, customer requirements, and current or anticipated business demand."
  },
  {
    q: "Does approval guarantee project assignments?",
    a: "No. Approval does not guarantee a specific assignment, workload, income level, or frequency of work. Opportunities depend on customer demand, language combinations, expertise, availability, quality performance, project history, and program requirements."
  },
  {
    q: "How long does the application review take?",
    a: "Review times vary. Stepes may review an application when the applicant’s languages, services, and qualifications align with current or anticipated needs. Due to differences in language demand and application volume, not every applicant will receive an immediate response."
  },
  {
    q: "Will I need to complete a translation test?",
    a: "Some applicants may be asked to complete a qualification assessment, interview, credential review, reference check, or another evaluation. The process depends on the language, service, subject matter, and customer requirements. Completing an assessment does not guarantee acceptance or future assignments."
  },
  {
    q: "What information should I prepare before applying?",
    a: "Prepare your native language, source and target languages, professional services, subject expertise, location, time zone, years of experience, education, credentials, résumé, certifications, translation technology experience, and availability. Additional documentation may be requested for specialized work."
  },
  {
    q: "What types of content does Stepes translate?",
    a: "Stepes supports enterprise, regulated, technical, digital, marketing, software, multimedia, and customer-facing content. Projects may involve websites, apps, software interfaces, technical manuals, clinical and medical content, legal documents, financial communications, training materials, e-commerce, customer support, and multilingual AI programs."
  },
  {
    q: "Does Stepes use machine translation or artificial intelligence?",
    a: "Yes. Stepes uses AI, machine translation, translation memory, terminology management, automation, and professional human expertise according to customer requirements. The appropriate workflow depends on the content, risk level, quality objectives, and customer-approved process."
  },
  {
    q: "Can I use my own AI tools for Stepes projects?",
    a: "Only when the tool and its use have been explicitly authorized for the assignment. Customer content must not be uploaded to unapproved public AI systems, machine translation engines, file-sharing services, or third-party tools."
  },
  {
    q: "How are linguists matched with projects?",
    a: "Project matching may consider language combination, native language, location, subject expertise, approved services, professional credentials, availability, quality performance, project history, customer preferences, and security or regulatory requirements."
  },
  {
    q: "How are rates determined?",
    a: "Compensation varies according to language combination, service type, content complexity, subject specialization, project scope, file format, schedule, quality requirements, customer program, and relevant market considerations. Applicable scope and compensation terms are provided before an assignment is accepted."
  },
  {
    q: "How are Stepes linguists paid?",
    a: "Payment methods, currencies, documentation requirements, and payment terms may vary according to the linguist’s country, contractual arrangement, and assignment. Applicable terms are provided during onboarding or before work begins."
  },
  {
    q: "Can translation companies or agencies apply?",
    a: "The Stepes linguist application is primarily intended for individual language professionals. Organizations interested in a broader language-service or supplier relationship should contact Stepes with information about their capabilities, languages, locations, and areas of specialization."
  },
  {
    q: "How does Stepes protect confidential customer information?",
    a: "Stepes uses secure workflows, access controls, confidentiality requirements, and project-specific data-handling procedures. Linguists are expected to use authorized systems, protect their credentials and devices, prevent unauthorized access, and follow all applicable security instructions."
  },
  {
    q: "Where do existing Stepes translators log in?",
    a: "Existing Stepes linguists can access their accounts through the Stepes Translator Login."
  }
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const icons = {
    translate: (
      <svg {...common}><path d="M4 5h8"/><path d="M8 3v2"/><path d="M5.5 9.5c2.2-1.2 3.8-3.1 4.7-5.5"/><path d="M4.5 7.5c1.3 1.5 3 2.7 5 3.5"/><path d="M13 19l4-10 4 10"/><path d="M14.5 15h5"/></svg>
    ),
    localize: (
      <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg>
    ),
    headset: (
      <svg {...common}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Z"/><path d="M20 14h-3v6h2a1 1 0 0 0 1-1v-5Z"/><path d="M17 20c-1 1-2.7 1.5-5 1.5"/></svg>
    ),
    media: (
      <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/></svg>
    ),
    spark: (
      <svg {...common}><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"/><path d="m5 15 .7 1.8 1.8.7-1.8.7L5 20l-.7-1.8-1.8-.7 1.8-.7L5 15Z"/></svg>
    ),
    language: (
      <svg {...common}><path d="M4 5h9"/><path d="M8.5 3v2"/><path d="M5 10c2.3-1.1 4.2-3.1 5.3-6"/><path d="M4.8 7.4c1.3 1.6 3.1 2.9 5.4 3.8"/><path d="M13 19l4-9 4 9"/><path d="M14.5 15.5h5"/></svg>
    ),
    briefcase: (
      <svg {...common}><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></svg>
    ),
    award: (
      <svg {...common}><circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9"/><path d="m10 8 1.3 1.3L14 6.5"/></svg>
    ),
    tools: (
      <svg {...common}><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2.8-2.8 2.3-2.7Z"/><path d="m5.5 18.5 1-1"/></svg>
    ),
    shield: (
      <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    document: (
      <svg {...common}><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
    ),
    database: (
      <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
    ),
    people: (
      <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3 19c.5-4 2.5-6 6-6s5.5 2 6 6"/><circle cx="17" cy="9" r="2"/><path d="M16 14c2.8.2 4.4 1.8 5 5"/></svg>
    ),
    check: (
      <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></svg>
    ),
    arrow: (
      <svg {...common}><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></svg>
    ),
    lock: (
      <svg {...common}><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></svg>
    ),
    message: (
      <svg {...common}><path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8"/><path d="M8 12h5"/></svg>
    )
  };

  return icons[name] || icons.check;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function FAQItem({ item, index, open, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.a}</p>
        {item.q === "Can translation companies or agencies apply?" && (
          <ArrowLink href={URLS.contact}>Contact Our Team</ArrowLink>
        )}
        {item.q === "Where do existing Stepes translators log in?" && (
          <ArrowLink href={URLS.translatorLogin}>Translator Login</ArrowLink>
        )}
      </div>
    </div>
  );
}

export default function StepesBecomeATranslatorWireframe() {
  const [openFaqs, setOpenFaqs] = useState(new Set([0]));

  const toggleFaq = (index) => {
    setOpenFaqs((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-shell">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Become a Stepes Translator</h1>
            <p className="hero-lead">
              Stepes recruits, evaluates, and qualifies expert translators and language specialists to join our professional linguist team. Apply your language and subject-matter expertise to enterprise translation, localization, editing, interpreting, linguistic quality assurance, multimedia, and multilingual AI programs across more than 100 languages.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={URLS.apply}>Apply to Join</a>
              <a className="button button-secondary" href={URLS.translatorLogin}>Translator Login</a>
            </div>
            <div className="hero-customer-path">
              <span>Looking for professional translation services?</span>
              <ArrowLink href={URLS.contact}>Talk to an Expert</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Stepes professional linguist team highlights">
        <div className="container trust-grid">
          <div className="trust-item"><strong>100+ Languages</strong><span>Professional coverage for global markets</span></div>
          <div className="trust-item"><strong>Enterprise and Regulated Content</strong><span>Structured workflows for complex communications</span></div>
          <div className="trust-item"><strong>Professional Human Expertise</strong><span>Qualified translators, editors, reviewers, and specialists</span></div>
          <div className="trust-item"><strong>AI-Enabled, Secure Workflows</strong><span>Advanced technology supported by human judgment</span></div>
        </div>
      </section>

      <nav className="page-nav" aria-label="Page sections">
        <div className="container page-nav-inner">
          <a href={`${URLS.page}#opportunities`}>Opportunities</a>
          <a href={`${URLS.page}#qualifications`}>Qualifications</a>
          <a href={`${URLS.page}#application-process`}>Application Process</a>
          <a href={`${URLS.page}#quality-and-security`}>Quality and Security</a>
          <a href={`${URLS.page}#frequently-asked-questions`}>FAQs</a>
        </div>
      </nav>

      <section className="section section-shell intro-section">
        <div className="container split-editorial">
          <div className="section-heading-block">
            <p className="eyebrow">PROFESSIONAL LINGUIST TEAM</p>
            <h2>Put Your Language Expertise to Work</h2>
          </div>
          <div className="section-prose">
            <p className="body-large">
              Stepes is a professional translation company that recruits, evaluates, qualifies, and manages expert linguists for global customer programs. Our professional linguist team supports projects ranging from websites and software to technical documentation, regulated content, multimedia, customer communications, and multilingual AI programs.
            </p>
            <p>
              We work with experienced professionals who understand that effective translation requires more than replacing words from one language with another. It requires subject-matter knowledge, cultural awareness, sound judgment, careful research, consistent terminology, and an understanding of how translated content will be used.
            </p>
            <p>
              As a member of the Stepes linguist team, you may collaborate with project managers, editors, reviewers, terminology specialists, localization engineers, and customer teams. Opportunities are matched according to approved languages, expertise, qualifications, availability, quality performance, and current customer requirements.
            </p>
            <ArrowLink href={URLS.ourLinguists}>Learn About Our Linguists</ArrowLink>
          </div>
        </div>
      </section>

      <section id="opportunities" className="section section-shell tinted-section">
        <div className="container">
          <div className="section-header centered-header">
            <p className="eyebrow">PROFESSIONAL OPPORTUNITIES</p>
            <h2>More Than Translation</h2>
            <p className="section-intro">
              Stepes works with professionals across a broad range of linguistic, localization, and multilingual content disciplines. Available opportunities vary by language, location, specialization, customer demand, and project requirements.
            </p>
          </div>
          <div className="role-panel">
            {roles.map((role) => (
              <article className="role-row" key={role.title}>
                <span className="role-icon"><Icon name={role.icon} /></span>
                <div className="role-content">
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell industries-section">
        <div className="container industries-grid">
          <div className="industries-intro">
            <p className="eyebrow dark-eyebrow">INDUSTRY EXPERTISE</p>
            <h2>Apply Your Expertise Where It Matters</h2>
            <p>
              Global organizations need language professionals who understand both the language and the subject. Specialized projects may require demonstrated experience, relevant education, professional credentials, regulatory knowledge, or documented industry expertise.
            </p>
            <div className="dark-note">
              Applicants should accurately represent their experience and accept only assignments they are qualified and available to complete.
            </div>
          </div>
          <div className="industry-list">
            {industries.map((industry) => (
              <article className="industry-row" key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="qualifications" className="section section-shell">
        <div className="container">
          <div className="section-header left-header">
            <p className="eyebrow">APPLICANT STANDARDS</p>
            <h2>Professional Qualifications and Expectations</h2>
            <p className="section-intro">
              Stepes evaluates applicants according to the requirements of each language, service, industry, and customer program. Successful applicants generally demonstrate strong language ability, relevant experience, professional reliability, and a commitment to quality.
            </p>
          </div>
          <div className="qualification-grid">
            {qualifications.map((item) => (
              <article className="qualification-item" key={item.title}>
                <span className="qualification-icon"><Icon name={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="qualification-notice">
            Qualification requirements and available opportunities vary by language, service, subject matter, location, and customer demand.
          </div>
        </div>
      </section>

      <section id="application-process" className="section section-shell process-section">
        <div className="container">
          <div className="section-header centered-header">
            <h2>How to Join the Stepes Linguist Team</h2>
            <p className="section-intro">
              Our application process helps us understand your professional background and identify opportunities that align with your qualifications.
            </p>
          </div>
          <div className="process-timeline">
            {applicationSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="step-marker" aria-hidden="true">{index + 1}</div>
                <div className="step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="process-disclaimer">
            <Icon name="message" />
            <p>
              Submitting an application or creating a profile does not guarantee acceptance, immediate review, or project assignments. Stepes contacts applicants when their qualifications align with current or anticipated business needs.
            </p>
          </div>
          <div className="centered-action">
            <a className="button button-primary" href={URLS.apply}>Apply to Join</a>
          </div>
        </div>
      </section>

      <section className="section section-shell workflow-section">
        <div className="container workflow-layout">
          <div className="workflow-copy">
            <p className="eyebrow">PROFESSIONAL DELIVERY</p>
            <h2>Work Within Structured Enterprise Workflows</h2>
            <p className="body-large">
              Stepes brings qualified linguists into structured enterprise workflows supported by professional project management, translation technology, and quality controls.
            </p>
            <p>
              Depending on the project, work may be completed within the Stepes translation platform, an approved CAT tool, a customer system, or another secure working environment. Some customer programs may require dedicated teams, additional onboarding, program-specific training, or recurring quality reviews.
            </p>
            <ArrowLink href={URLS.translationQualityAssurance}>Translation Quality Assurance</ArrowLink>
          </div>
          <div className="workflow-panel">
            {workflowItems.map((item) => (
              <article className="workflow-row" key={item.title}>
                <span className="workflow-icon"><Icon name={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell ai-section">
        <div className="container ai-grid">
          <div className="ai-main">
            <p className="eyebrow">AI + HUMAN WORKFLOWS</p>
            <h2>Language Expertise in an AI-Enabled World</h2>
            <p className="body-large">
              AI is changing how multilingual content is created, translated, reviewed, and managed. At Stepes, technology supports professional linguists rather than replacing the judgment required for accurate and effective communication.
            </p>
            <p>
              AI and automation can accelerate repetitive tasks, improve content routing, support terminology consistency, and help process multilingual content at scale. Professional linguists remain essential for evaluating meaning, intent, context, terminology, tone, cultural relevance, technical accuracy, regulatory suitability, readability, and final usability.
            </p>
            <p>
              Linguists may support AI-enabled projects through translation, post-editing, linguistic review, error classification, terminology validation, quality evaluation, and multilingual model testing.
            </p>
          </div>
          <aside className="ai-support">
            <h3>Technology May Include</h3>
            <ul className="check-list">
              <li>Artificial intelligence and machine translation</li>
              <li>Translation memory and terminology management</li>
              <li>Workflow automation and automated quality checks</li>
              <li>Professional translation, editing, and review</li>
              <li>Subject-matter validation and linguistic QA</li>
            </ul>
            <div className="ai-policy">
              <Icon name="lock" />
              <p>Customer information must never be entered into unauthorized public AI systems or third-party tools.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="quality-and-security" className="section section-shell quality-section">
        <div className="container">
          <div className="section-header centered-header quality-header">
            <p className="eyebrow dark-eyebrow">QUALITY AND SECURITY</p>
            <h2>Protecting Quality and Customer Trust</h2>
            <p className="section-intro">
              Global organizations trust Stepes with valuable, sensitive, and sometimes regulated information. Every professional working as part of the Stepes linguist team shares responsibility for protecting that trust.
            </p>
          </div>
          <div className="quality-matrix">
            <article>
              <Icon name="lock" />
              <h3>Confidentiality</h3>
              <p>Protect customer information and comply with applicable confidentiality agreements, service terms, and project-specific requirements.</p>
            </article>
            <article>
              <Icon name="shield" />
              <h3>Secure Technology Use</h3>
              <p>Use authorized platforms, protect credentials and devices, avoid unapproved file sharing, and report suspected security issues promptly.</p>
            </article>
            <article>
              <Icon name="database" />
              <h3>Terminology and Instructions</h3>
              <p>Follow approved terminology, style guides, reference materials, customer preferences, and all project-specific instructions.</p>
            </article>
            <article>
              <Icon name="check" />
              <h3>Quality Accountability</h3>
              <p>Review work carefully and support linguistic review, terminology checks, automated QA, in-context review, error analysis, and valid feedback.</p>
            </article>
            <article>
              <Icon name="message" />
              <h3>Professional Communication</h3>
              <p>Raise questions early, disclose uncertainties, identify content risks, and communicate schedule or delivery concerns promptly.</p>
            </article>
            <article>
              <Icon name="spark" />
              <h3>Responsible AI Use</h3>
              <p>Use machine translation, generative AI, or automated tools only when authorized and within the approved security and confidentiality framework.</p>
            </article>
          </div>
          <div className="quality-links">
            <ArrowLink href={URLS.security}>Stepes Security</ArrowLink>
            <ArrowLink href={URLS.qualitySystem}>Quality System</ArrowLink>
            <ArrowLink href={URLS.isoCertifications}>ISO Certifications</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-shell benefits-section">
        <div className="container">
          <div className="section-header left-header">
            <p className="eyebrow">WORKING WITH STEPES</p>
            <h2>Build Professional Relationships Through Stepes</h2>
            <p className="section-intro">
              Stepes brings together global customer needs, professional language expertise, modern translation technology, and structured program support.
            </p>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <article className="benefit-row" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
          <p className="benefit-note">Project availability is not guaranteed and varies according to business demand.</p>
        </div>
      </section>

      <section className="section-shell customer-path-section">
        <div className="container customer-path-panel">
          <div>
            <p className="eyebrow">FOR ORGANIZATIONS</p>
            <h2>Looking for Professional Translation Services?</h2>
            <p>
              Stepes helps companies manage translation, localization, multilingual content, and global communication programs with professional linguists, AI-enabled technology, secure workflows, and structured quality processes.
            </p>
          </div>
          <div className="customer-path-actions">
            <a className="button button-primary" href={URLS.contact}>Talk to an Expert</a>
            <ArrowLink href={URLS.ourLinguists}>Learn About Our Linguists</ArrowLink>
          </div>
        </div>
      </section>

      <section id="frequently-asked-questions" className="section section-shell faq-section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>
              Learn more about applicant qualifications, review timing, project matching, AI use, confidentiality, compensation, and the Stepes linguist experience.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                open={openFaqs.has(index)}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="container final-cta-panel">
          <div className="final-cta-copy">
            <h2>Bring Your Language Expertise to Stepes</h2>
            <p>
              Apply to join the Stepes professional linguist team and support enterprise translation, localization, editing, interpreting, linguistic quality assurance, multimedia, and multilingual AI programs.
            </p>
            <p>
              Create your professional profile and tell us about your languages, services, experience, subject-matter expertise, and qualifications. Stepes will contact you when your background aligns with current or anticipated business needs.
            </p>
            <p className="final-cta-note">
              Submitting an application does not guarantee acceptance, immediate review, or project assignments.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="button button-primary" href={URLS.apply}>Apply to Join</a>
            <a className="button button-secondary" href={URLS.translatorLogin}>Translator Login</a>
            <ArrowLink href={URLS.contact}>Looking for translation services?</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --magenta-deep: #7A1542;
    --magenta-soft: #FDF2F7;
    --magenta-light: #F2A7C6;
    --ink: #17171A;
    --ink-soft: #42434A;
    --muted: #686A73;
    --line: #E3E4E8;
    --line-dark: rgba(255,255,255,.15);
    --surface: #F7F7F9;
    --white: #FFFFFF;
    --dark: #171218;
    --dark-soft: #211721;
    --shadow: 0 20px 60px rgba(25, 17, 23, .08);
  }

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body { margin: 0; }

  .stepes-page {
    width: 100%;
    overflow-x: hidden;
    background: var(--white);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
  }

  .stepes-page a { color: inherit; }

  .stepes-page :where(h1, h2, h3, p, li, a, button, div, span) {
    overflow-wrap: break-word;
  }

  .stepes-page :where(.container, .hero-copy, .section-prose, .role-content, .step-copy, .ai-main, .faq-panel, .final-cta-copy) {
    min-width: 0;
  }

  .container {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section-shell { width: 100%; }

  .section { padding: 96px 0; }

  .hero {
    position: relative;
    padding: 104px 0 96px;
    background:
      radial-gradient(circle at 50% 0%, rgba(193, 29, 99, .075), transparent 34%),
      var(--white);
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: var(--line);
  }

  .hero-inner {
    display: flex;
    justify-content: center;
  }

  .hero-copy {
    width: 100%;
    max-width: 920px;
    text-align: center;
  }

  h1, h2, h3, p { margin-top: 0; }

  h1, h2, h3 {
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -.025em;
  }

  h1 {
    max-width: 840px;
    margin: 0 auto 28px;
    font-size: 48px;
    line-height: 1.08;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 1.16;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.28;
  }

  p, li { font-size: 16px; }

  p {
    color: var(--ink-soft);
    line-height: 1.72;
  }

  .body-large,
  .hero-lead {
    font-size: 18px;
    line-height: 1.68;
  }

  .hero-lead {
    max-width: 820px;
    margin: 0 auto 30px;
    color: #303137;
  }

  .eyebrow {
    display: block;
    margin: 0 0 18px;
    color: var(--magenta);
    font-size: 11px !important;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: .16em;
  }

  .dark-eyebrow {
    color: var(--magenta-light) !important;
  }

  .hero-actions,
  .final-cta-actions,
  .customer-path-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    padding: 13px 24px;
    text-align: center;
    white-space: normal;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }

  .button-primary,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus-visible {
    color: #FFFFFF !important;
  }

  .button-primary {
    border: 1px solid var(--magenta);
    background: var(--magenta);
    box-shadow: 0 12px 26px rgba(193,29,99,.18);
  }

  .button-primary:hover {
    transform: translateY(-2px);
    border-color: var(--magenta-dark);
    background: var(--magenta-dark);
    box-shadow: 0 16px 32px rgba(193,29,99,.24);
  }

  .button-secondary {
    border: 1px solid #CFCFD5;
    background: var(--white);
    color: var(--ink) !important;
  }

  .button-secondary:hover {
    transform: translateY(-2px);
    border-color: #AEB0B8;
    background: #FAFAFB;
  }

  .button:focus-visible,
  .editorial-link:focus-visible,
  .faq-question:focus-visible,
  .page-nav a:focus-visible {
    outline: 3px solid rgba(193,29,99,.24);
    outline-offset: 3px;
  }

  .hero-customer-path {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 16px;
    align-items: center;
    margin-top: 26px;
    color: var(--muted);
    font-size: 16px;
  }

  .editorial-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    gap: 7px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }

  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link:hover { color: var(--magenta-dark) !important; }
  .editorial-link:hover svg { transform: translateX(4px); }

  .role-icon,
  .qualification-icon,
  .workflow-icon {
    display: inline-flex;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: var(--magenta-soft);
    color: var(--magenta);
  }

  .qualification-notice,
  .benefit-note,
  .final-cta-note {
    font-size: 16px;
    line-height: 1.6;
  }

  .trust-band {
    padding: 26px 0;
    background: var(--white);
    border-bottom: 1px solid var(--line);
  }

  .trust-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .trust-item {
    padding: 3px 26px;
    border-right: 1px solid var(--line);
  }

  .trust-item:first-child { padding-left: 0; }
  .trust-item:last-child { padding-right: 0; border-right: 0; }

  .trust-item strong,
  .trust-item span { display: block; }

  .trust-item strong {
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 600;
    color: var(--ink);
  }

  .trust-item span {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.5;
  }

  .page-nav {
    background: #FCFCFD;
    border-bottom: 1px solid var(--line);
  }

  .page-nav-inner {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 30px;
    align-items: center;
    justify-content: center;
    min-height: 62px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .page-nav a {
    display: inline-flex;
    min-height: 44px;
    flex: 0 0 auto;
    align-items: center;
    color: var(--ink-soft);
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
  }

  .page-nav a:hover { color: var(--magenta); }

  .split-editorial {
    display: grid;
    grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr);
    gap: 96px;
    align-items: start;
  }

  .section-heading-block { position: sticky; top: 36px; }

  .section-prose { max-width: 760px; }
  .section-prose p { margin-bottom: 22px; }

  .tinted-section { background: #F8F7F8; }

  .section-header { margin-bottom: 52px; }
  .centered-header { max-width: 840px; margin-left: auto; margin-right: auto; text-align: center; }
  .left-header { max-width: 820px; }
  .section-intro { font-size: 18px; line-height: 1.68; }

  .role-panel {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid var(--line);
    border-radius: 28px;
    overflow: hidden;
    background: var(--white);
  }

  .role-row {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    padding: 30px;
    border-bottom: 1px solid var(--line);
  }

  .role-row:nth-child(odd) { border-right: 1px solid var(--line); }
  .role-row:nth-last-child(-n+2) { border-bottom: 0; }
  .role-row:last-child {
    grid-column: 1 / -1;
    border-right: 0;
    border-top: 0;
  }

  .role-content p,
  .qualification-item p,
  .workflow-row p,
  .benefit-row p,
  .quality-matrix p,
  .industry-row p {
    margin-bottom: 0;
    font-size: 16px;
  }

  .industries-section {
    padding: 96px 0;
    background: var(--dark);
    color: var(--white);
  }

  .industries-grid {
    display: grid;
    grid-template-columns: minmax(280px, .82fr) minmax(0, 1.18fr);
    gap: 90px;
    align-items: start;
  }

  .industries-section h2,
  .industries-section h3 { color: var(--white); }
  .industries-section p { color: #DDD7DC; }

  .industries-intro { position: sticky; top: 36px; }

  .dark-note {
    margin-top: 30px;
    padding: 20px 22px;
    border: 1px solid var(--line-dark);
    border-radius: 20px;
    color: #F1EBEF;
    font-size: 16px;
    line-height: 1.6;
  }

  .industry-list { border-top: 1px solid var(--line-dark); }

  .industry-row {
    display: grid;
    grid-template-columns: minmax(210px, .72fr) minmax(0, 1.28fr);
    gap: 30px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line-dark);
  }

  .industry-row h3 { margin: 0; font-size: 21px; }

  .qualification-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 54px;
    border-top: 1px solid var(--line);
  }

  .qualification-item {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }

  .qualification-notice {
    margin-top: 34px;
    padding: 22px 26px;
    border-left: 3px solid var(--magenta);
    background: #FAF7F9;
    color: var(--ink-soft);
  }

  .process-section { background: var(--magenta-soft); }

  .process-timeline {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 22px;
  }

  .process-timeline::before {
    content: "";
    position: absolute;
    top: 23px;
    left: 9%;
    right: 9%;
    height: 2px;
    background: #D8B8C7;
  }

  .process-step { position: relative; z-index: 1; }

  .step-marker {
    display: inline-flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 2px solid var(--magenta);
    border-radius: 50%;
    background: var(--white);
    color: var(--magenta);
    font-size: 16px;
    font-weight: 600;
  }

  .step-copy h3 { font-size: 20px; }
  .step-copy p { margin-bottom: 0; }

  .process-disclaimer {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 15px;
    max-width: 920px;
    margin: 48px auto 0;
    padding: 22px 26px;
    border: 1px solid #E4CCD7;
    border-radius: 22px;
    background: rgba(255,255,255,.72);
    color: var(--magenta-deep);
  }

  .process-disclaimer p { margin: 0; color: #553F49; }
  .centered-action { margin-top: 30px; text-align: center; }

  .workflow-section { background: var(--white); }

  .workflow-layout {
    display: grid;
    grid-template-columns: minmax(300px, .78fr) minmax(0, 1.22fr);
    gap: 82px;
    align-items: start;
  }

  .workflow-copy { position: sticky; top: 36px; }

  .workflow-panel {
    border-top: 1px solid var(--line);
  }

  .workflow-row {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 20px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .ai-section { background: #F6F6F8; }

  .ai-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(360px, .85fr);
    gap: 76px;
    align-items: center;
  }

  .ai-main { max-width: 760px; }

  .ai-support {
    border: 1px solid var(--line);
    border-radius: 28px;
    background: var(--white);
    padding: 34px;
  }

  .ai-support h3 { font-size: 22px; }

  .check-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .check-list li {
    position: relative;
    padding: 13px 0 13px 30px;
    border-bottom: 1px solid var(--line);
    color: var(--ink-soft);
  }

  .check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 13px;
    color: var(--magenta);
    font-weight: 600;
  }

  .ai-policy {
    display: grid;
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 12px;
    margin-top: 22px;
    padding: 18px;
    border-radius: 18px;
    background: var(--magenta-soft);
    color: var(--magenta-deep);
  }

  .ai-policy p { margin: 0; color: #5C3A49; }

  .quality-section {
    background: var(--dark-soft);
    color: var(--white);
  }

  .quality-header h2 { color: var(--white); }
  .quality-header p { color: #DDD7DC; }

  .quality-matrix {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border: 1px solid var(--line-dark);
    border-radius: 28px;
    overflow: hidden;
  }

  .quality-matrix article {
    padding: 30px;
    border-right: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
  }

  .quality-matrix article:nth-child(3n) { border-right: 0; }
  .quality-matrix article:nth-last-child(-n+3) { border-bottom: 0; }

  .quality-matrix svg {
    margin-bottom: 18px;
    color: var(--magenta-light);
  }

  .quality-matrix h3 { color: var(--white); font-size: 21px; }
  .quality-matrix p { color: #D8D1D6; }

  .quality-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px 34px;
    margin-top: 34px;
  }

  .quality-links .editorial-link { color: var(--magenta-light) !important; }
  .quality-links .editorial-link:hover { color: #FFD5E7 !important; }

  .benefits-section { background: var(--white); }

  .benefit-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--line);
  }

  .benefit-row {
    display: grid;
    grid-template-columns: minmax(210px, .78fr) minmax(0, 1.22fr);
    gap: 28px;
    padding: 28px 28px 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .benefit-row:nth-child(odd) {
    padding-right: 36px;
    border-right: 1px solid var(--line);
  }

  .benefit-row:nth-child(even) { padding-left: 36px; }
  .benefit-row h3 { margin: 0; font-size: 20px; }

  .benefit-note { margin-top: 24px; color: var(--muted); }

  .customer-path-section { padding: 0 0 96px; }

  .customer-path-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
    gap: 54px;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 44px;
    border: 1px solid #E6D5DD;
    border-radius: 30px;
    background: #FFF9FC;
  }

  .customer-path-panel h2 { font-size: 32px; }
  .customer-path-panel p { max-width: 760px; margin-bottom: 0; }
  .customer-path-actions { justify-content: flex-end; }

  .faq-section { background: #F8F8FA; }

  .faq-layout {
    display: grid;
    grid-template-columns: minmax(260px, .72fr) minmax(0, 1.28fr);
    gap: 82px;
    align-items: start;
  }

  .faq-intro { position: sticky; top: 36px; }

  .faq-panel {
    border: 1px solid var(--line);
    border-radius: 28px;
    overflow: hidden;
    background: var(--white);
  }

  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item:last-child { border-bottom: 0; }

  .faq-question {
    display: grid;
    width: 100%;
    grid-template-columns: minmax(0, 1fr) 36px;
    gap: 20px;
    align-items: center;
    min-height: 76px;
    padding: 20px 26px;
    border: 0;
    background: transparent;
    color: var(--ink);
    font: inherit;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    text-align: left;
    cursor: pointer;
  }

  .faq-question:hover { background: #FCFAFB; }

  .faq-toggle {
    display: inline-flex;
    width: 34px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--magenta-soft);
    color: var(--magenta);
    font-size: 22px;
    font-weight: 400;
  }

  .faq-answer { padding: 0 26px 24px; }
  .faq-answer p { max-width: 840px; margin-bottom: 10px; font-size: 16px; }

  .final-cta {
    padding: 96px 0;
    background: var(--white);
  }

  .final-cta-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(300px, .75fr);
    gap: 60px;
    align-items: center;
    padding-top: 58px;
    padding-bottom: 58px;
    border-radius: 30px;
    background: var(--magenta-soft);
  }

  .final-cta-copy { max-width: 760px; }
  .final-cta-copy p { margin-bottom: 16px; }
  .final-cta-note { color: #6A4A58; }
  .final-cta-actions { justify-content: flex-start; }
  .final-cta-actions .editorial-link { width: 100%; }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .split-editorial, .industries-grid, .workflow-layout, .faq-layout { gap: 58px; }
    .ai-grid { gap: 48px; }
    .benefit-row { grid-template-columns: 1fr; gap: 8px; }
  }

  @media (max-width: 980px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .hero { padding: 88px 0 80px; }
    h1 { font-size: 42px; line-height: 1.1; }
    h2 { font-size: 32px; line-height: 1.18; }
    h3 { font-size: 22px; }
    .page-nav-inner {
      justify-content: flex-start;
      gap: 6px 24px;
      min-height: auto;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .split-editorial,
    .industries-grid,
    .workflow-layout,
    .ai-grid,
    .faq-layout,
    .customer-path-panel,
    .final-cta-panel {
      grid-template-columns: 1fr;
    }
    .hero-copy { max-width: 920px; }
    .section-heading-block,
    .industries-intro,
    .workflow-copy,
    .faq-intro { position: static; }
    .split-editorial,
    .industries-grid,
    .workflow-layout,
    .faq-layout { gap: 42px; }
    .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .trust-item { padding: 16px 24px; border-bottom: 1px solid var(--line); }
    .trust-item:nth-child(2) { border-right: 0; }
    .trust-item:nth-last-child(-n+2) { border-bottom: 0; }
    .trust-item:first-child { padding-left: 24px; }
    .trust-item:last-child { padding-right: 24px; }
    .process-timeline { grid-template-columns: 1fr; gap: 0; }
    .process-timeline::before {
      top: 24px;
      bottom: 28px;
      left: 22px;
      right: auto;
      width: 2px;
      height: auto;
    }
    .process-step {
      display: grid;
      grid-template-columns: 46px minmax(0, 1fr);
      gap: 20px;
      padding-bottom: 28px;
    }
    .step-marker { margin-bottom: 0; }
    .quality-matrix { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .quality-matrix article:nth-child(3n) { border-right: 1px solid var(--line-dark); }
    .quality-matrix article:nth-child(2n) { border-right: 0; }
    .quality-matrix article:nth-last-child(-n+3) { border-bottom: 1px solid var(--line-dark); }
    .quality-matrix article:nth-last-child(-n+2) { border-bottom: 0; }
    .customer-path-actions { justify-content: flex-start; }
    .final-cta-panel { gap: 30px; }
  }

  @media (max-width: 760px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .hero { padding: 72px 0 68px; }
    h1 { font-size: 38px; line-height: 1.12; }
    h2 { font-size: 30px; line-height: 1.2; }
    h3 { font-size: 20px; }
    .hero-lead, .body-large, .section-intro { font-size: 17px; }
    .section-header { margin-bottom: 40px; }
    .hero-actions,
    .final-cta-actions { align-items: stretch; }
    .hero-actions .button,
    .final-cta-actions .button { width: 100%; }
    .hero-customer-path {
      flex-direction: column;
      gap: 4px;
      align-items: center;
    }
    .page-nav-inner { gap: 4px 18px; }
    .page-nav a { min-height: 42px; }
    .role-panel,
    .qualification-grid,
    .benefit-list,
    .quality-matrix { grid-template-columns: 1fr; }
    .role-row,
    .role-row:nth-child(odd),
    .role-row:nth-last-child(-n+2),
    .role-row:last-child {
      grid-column: auto;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }
    .role-row:last-child { border-bottom: 0; }
    .role-row { padding: 25px 22px; }
    .industry-row { grid-template-columns: 1fr; gap: 8px; }
    .industry-row h3 { font-size: 20px; }
    .qualification-grid { gap: 0; }
    .qualification-item { padding: 25px 0; }
    .quality-matrix article,
    .quality-matrix article:nth-child(2n),
    .quality-matrix article:nth-child(3n),
    .quality-matrix article:nth-last-child(-n+2),
    .quality-matrix article:nth-last-child(-n+3) {
      border-right: 0;
      border-bottom: 1px solid var(--line-dark);
    }
    .quality-matrix article:last-child { border-bottom: 0; }
    .benefit-row,
    .benefit-row:nth-child(odd),
    .benefit-row:nth-child(even) {
      padding: 25px 0;
      border-right: 0;
    }
    .customer-path-section { padding-bottom: 68px; }
    .customer-path-panel,
    .final-cta-panel { padding-top: 38px; padding-bottom: 38px; border-radius: 24px; }
    .customer-path-panel h2 { font-size: 28px; }
    .customer-path-actions { align-items: flex-start; }
    .customer-path-actions .button,
    .customer-path-actions .editorial-link { width: 100%; }
    .quality-links {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
    .faq-question { min-height: 72px; padding: 18px 20px; font-size: 17px; }
    .faq-answer { padding: 0 20px 22px; }
    .final-cta { padding: 68px 0; }
  }

  @media (max-width: 480px) {
    .trust-grid { grid-template-columns: 1fr; }
    .trust-item,
    .trust-item:first-child,
    .trust-item:last-child,
    .trust-item:nth-child(2),
    .trust-item:nth-last-child(-n+2) {
      padding: 18px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }
    .trust-item:last-child { border-bottom: 0; }
    .role-row,
    .qualification-item,
    .workflow-row {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 14px;
    }
    .process-disclaimer { grid-template-columns: 1fr; padding: 20px; }
    .ai-support { padding: 26px 20px; }
    .quality-matrix article { padding: 25px 22px; }
    .page-nav-inner { gap: 2px 16px; }
    .page-nav a { font-size: 14px; }
    .faq-question { grid-template-columns: minmax(0, 1fr) 32px; gap: 12px; }
  }
`;
