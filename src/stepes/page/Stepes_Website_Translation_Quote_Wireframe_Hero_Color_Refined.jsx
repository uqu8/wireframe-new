import React, { useMemo, useState } from "react";

export const pageMeta = {
  title: "Website Translation Quote & Cost Estimate | Stepes",
  description:
    "Request a human-reviewed website translation quote from Stepes. Share your website, languages, CMS, SEO, testing, and launch needs for a tailored estimate.",
  canonical:
    "https://www.stepes.com/website-translation-services/get-a-quote/",
};

const PAGE_URL =
  "https://www.stepes.com/website-translation-services/get-a-quote/";

const steps = [
  "Website",
  "Languages",
  "Requirements",
  "Workflow",
  "Timing",
  "Contact",
];

const commonLanguages = [
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Portuguese",
  "Italian",
  "Dutch",
  "Arabic",
  "Polish",
  "Swedish",
];

const initialForm = {
  websiteUrl: "",
  websiteScope: "",
  selectedPages: "",
  websiteType: "",
  accessType: "",
  updateFrequency: "",
  sourceLanguage: "",
  otherSourceLanguage: "",
  targetLanguages: [],
  targetUnknown: false,
  otherLanguages: "",
  targetMarkets: "",
  localizedContent: "",
  localizedUrls: "",
  goals: [],
  contentTypes: [],
  journeys: [],
  industry: "",
  workflowNeed: "",
  platform: "",
  storage: [],
  publisher: "",
  currentProcess: "",
  services: [],
  timing: "",
  launchDate: "",
  assets: [],
  budget: "",
  currency: "US Dollar",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  jobTitle: "",
  phone: "",
  country: "",
  notes: "",
  consent: false,
};

function Icon({ name, size = 24, strokeWidth = 1.7 }) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.7 2.7L16.5 9" />
      </>
    ),
    checkmark: <path d="m7 12 3 3 7-7" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
    review: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="m8 16 1.7 1.7L13 14.5" />
      </>
    ),
    estimate: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8" />
        <path d="M8 13h3" />
        <path d="M15 13h1" />
        <path d="M8 16h8" />
      </>
    ),
    content: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </>
    ),
    seo: (
      <>
        <circle cx="10" cy="10" r="5.5" />
        <path d="m14 14 5 5" />
        <path d="M7.5 10h5" />
        <path d="M10 7.5v5" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="4" width="6" height="5" rx="1" />
        <rect x="15" y="15" width="6" height="5" rx="1" />
        <path d="M9 6.5h4a3 3 0 0 1 3 3V15" />
        <path d="m13 12 3 3 3-3" />
      </>
    ),
    qa: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.9 8.2 7 10 4.1-1.8 7-5.4 7-10V6z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M6.1 8a7 7 0 0 1 11.7-1L20 9" />
        <path d="m4 15 2.2 2a7 7 0 0 0 11.7-1" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    minus: <path d="M5 12h14" />,
  };

  return <svg {...shared}>{paths[name] || paths.check}</svg>;
}

function FieldLabel({ children, required = false, htmlFor }) {
  return (
    <label className="wtq-field-label" htmlFor={htmlFor}>
      {children}
      {required ? <span aria-hidden="true"> *</span> : null}
    </label>
  );
}

function ChoiceGrid({
  name,
  options,
  value,
  onChange,
  multiple = false,
  columns = 2,
}) {
  const selected = multiple ? value : [value];

  const handleSelect = (option) => {
    if (!multiple) {
      onChange(option);
      return;
    }
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div
      className={`wtq-choice-grid wtq-choice-grid--${columns} ${multiple ? "is-multiple" : "is-single"}`}
      role={multiple ? "group" : "radiogroup"}
      aria-label={name}
    >
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            className={`wtq-choice ${isSelected ? "is-selected" : ""}`}
            onClick={() => handleSelect(option)}
            role={multiple ? "checkbox" : "radio"}
            aria-checked={isSelected}
          >
            <span className="wtq-choice-control" aria-hidden="true">
              {isSelected ? (
                multiple ? <Icon name="checkmark" size={17} strokeWidth={2.2} /> : <span className="wtq-choice-dot" />
              ) : null}
            </span>
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
}

function FormField({ children, className = "" }) {
  return <div className={`wtq-form-field ${className}`}>{children}</div>;
}

function SectionIntro({ eyebrow, title, copy, align = "left", dark = false }) {
  return (
    <div className={`wtq-section-intro wtq-section-intro--${align}`}>
      {eyebrow ? (
        <p className={`wtq-eyebrow ${dark ? "wtq-eyebrow--dark" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2>{title}</h2>
      {copy ? <p className="wtq-section-lead">{copy}</p> : null}
    </div>
  );
}

function StepProgress({ activeStep, furthestStep, setActiveStep }) {
  return (
    <nav className="wtq-step-nav" aria-label="Quote form progress">
      <ol>
        {steps.map((step, index) => {
          const complete = index < activeStep;
          const active = index === activeStep;
          const available = index <= furthestStep;
          return (
            <li
              key={step}
              className={active ? "is-active" : complete ? "is-complete" : available ? "is-available" : "is-locked"}
            >
              <button
                type="button"
                onClick={() => available && setActiveStep(index)}
                disabled={!available}
                aria-current={active ? "step" : undefined}
                aria-label={`${step}, step ${index + 1} of ${steps.length}${active ? ", current step" : complete ? ", completed" : available ? "" : ", not yet available"}`}
              >
                <span className="wtq-step-number" aria-hidden="true">
                  {complete ? <Icon name="checkmark" size={18} strokeWidth={2.2} /> : index + 1}
                </span>
                <span className="wtq-step-label">{step}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function StepHeader({ step, title, copy }) {
  return (
    <div className="wtq-form-step-header">
      <p className="wtq-form-step-kicker">
        Step {step + 1} of {steps.length}
      </p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function FormActions({
  activeStep,
  onBack,
  onNext,
  onSubmit,
  isLast,
}) {
  return (
    <div className="wtq-form-actions">
      {activeStep > 0 ? (
        <button type="button" className="wtq-button wtq-button--secondary" onClick={onBack}>
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        className="wtq-button wtq-button--primary"
        onClick={isLast ? onSubmit : onNext}
      >
        <span>{isLast ? "Request My Website Translation Estimate" : `Continue to ${steps[activeStep + 1]}`}</span>
        <Icon name="arrow" size={19} strokeWidth={2} />
      </button>
    </div>
  );
}

function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [activeStep, setActiveStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [requestReference, setRequestReference] = useState("");

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors([]);
  };

  const validateStep = (step) => {
    const nextErrors = [];
    if (step === 0) {
      let validWebsiteUrl = false;
      try {
        const parsedUrl = new URL(form.websiteUrl.trim());
        validWebsiteUrl = parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
      } catch {
        validWebsiteUrl = false;
      }
      if (!validWebsiteUrl) nextErrors.push("Please enter a valid website URL beginning with http:// or https://.");
      if (!form.websiteScope) nextErrors.push("Please tell us what you would like translated.");
    }
    if (step === 1) {
      if (!form.sourceLanguage) nextErrors.push("Please select the current language of your website.");
      if (form.sourceLanguage === "Other" && !form.otherSourceLanguage.trim()) {
        nextErrors.push("Please enter the current language of your website.");
      }
      if (!form.targetUnknown && form.targetLanguages.length === 0 && !form.otherLanguages.trim()) {
        nextErrors.push(
          "Please select at least one target language or choose “I have not finalized the target languages.”"
        );
      }
    }
    if (step === 2 && form.goals.length === 0) {
      nextErrors.push("Please select at least one project goal.");
    }
    if (step === 3 && !form.workflowNeed) {
      nextErrors.push("Please tell us how you expect the translation to be managed.");
    }
    if (step === 4) {
      if (!form.timing) nextErrors.push("Please select your expected timing.");
      if (form.timing === "We have a specific launch date" && !form.launchDate) {
        nextErrors.push("Please select your target launch date.");
      }
    }
    if (step === 5) {
      if (!form.firstName.trim()) nextErrors.push("Please enter your first name.");
      if (!form.lastName.trim()) nextErrors.push("Please enter your last name.");
      if (!form.company.trim()) nextErrors.push("Please enter your company name.");
      if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.push("Please enter a valid business email address.");
      if (!form.consent) nextErrors.push("Please confirm that Stepes may contact you about this request.");
    }
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const scrollToForm = () => {
    window.setTimeout(() => {
      const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      document.getElementById("website-quote-form")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    }, 40);
  };

  const goToStep = (step) => {
    if (step > furthestStep) return;
    setErrors([]);
    setActiveStep(step);
    scrollToForm();
  };

  const next = () => {
    if (!validateStep(activeStep)) return;
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setFurthestStep((current) => Math.max(current, nextStep));
    setActiveStep(nextStep);
    scrollToForm();
  };

  const back = () => {
    setErrors([]);
    setActiveStep((current) => Math.max(current - 1, 0));
    scrollToForm();
  };

  const submit = () => {
    if (!validateStep(5)) return;
    const now = new Date();
    const datePart = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("");
    const timePart = [String(now.getHours()).padStart(2, "0"), String(now.getMinutes()).padStart(2, "0"), String(now.getSeconds()).padStart(2, "0")].join("");
    setRequestReference(`WTQ-${datePart}-${timePart}`);
    setSubmitted(true);
    window.setTimeout(() => {
      document.getElementById("website-quote-form")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const projectSummary = useMemo(() => {
    const languages = form.targetUnknown
      ? "To be confirmed"
      : [...form.targetLanguages, form.otherLanguages].filter(Boolean).join(", ") || "To be confirmed";
    const sourceLanguage = form.sourceLanguage === "Other"
      ? form.otherSourceLanguage || "To be confirmed"
      : form.sourceLanguage || "To be confirmed";
    return [
      ["Website", form.websiteUrl || "To be confirmed"],
      ["Scope", form.websiteScope || "To be confirmed"],
      ["Source Language", sourceLanguage],
      ["Target Languages", languages],
      ["Expected Timing", form.timing || "To be confirmed"],
      ["Requested Services", form.services.join(", ") || "To be recommended"],
    ];
  }, [form]);

  if (submitted) {
    return (
      <section className="wtq-form-shell wtq-confirmation" id="website-quote-form" aria-live="polite">
        <div className="wtq-confirmation-icon">
          <Icon name="check" size={34} strokeWidth={1.8} />
        </div>
        <p className="wtq-eyebrow">Request Received</p>
        <h2>Thank You—We’ve Received Your Website Translation Request</h2>
        <p className="wtq-confirmation-lead">
          A Stepes specialist will review your project information and assess the publicly accessible website content. Most requests receive an initial response within one business day.
        </p>
        <p>
          We may contact you if we need clarification about private content, target markets, CMS requirements, SEO, testing, publishing, or other elements that could affect the scope. A confirmation has also been sent to your email address.
        </p>

        <div className="wtq-reference">
          <span>Website Quote Request</span>
          <strong>{requestReference}</strong>
        </div>

        <div className="wtq-summary-panel">
          <h3>Your Project Summary</h3>
          <dl>
            {projectSummary.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="wtq-confirmation-next">
          <h3>What Happens Next?</h3>
          <ol>
            <li>We review your website and submitted requirements.</li>
            <li>We identify any information needed to complete the scope.</li>
            <li>A Stepes specialist contacts you with an estimate or recommended next step.</li>
          </ol>
        </div>

        <div className="wtq-confirmation-actions">
          <a className="wtq-button wtq-button--primary" href="https://www.stepes.com/contact-us/">
            <span>Talk to a Website Translation Expert</span>
            <Icon name="arrow" size={19} strokeWidth={2} />
          </a>
          <a className="wtq-editorial-link" href="https://www.stepes.com/website-translation-services/">
            Return to Website Translation Services <Icon name="arrow" size={18} strokeWidth={2} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="wtq-form-shell" id="website-quote-form">
      <StepProgress activeStep={activeStep} furthestStep={furthestStep} setActiveStep={goToStep} />

      <div className="wtq-form-content">
        {errors.length > 0 ? (
          <div className="wtq-error-summary" role="alert">
            <strong>Please review the following:</strong>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {activeStep === 0 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="Tell Us About Your Website"
              copy="Start with the public website you would like us to assess. You do not need to calculate the word count yourself."
            />

            <FormField>
              <FieldLabel required htmlFor="website-url">Website URL</FieldLabel>
              <input
                id="website-url"
                type="url"
                value={form.websiteUrl}
                onChange={(event) => update("websiteUrl", event.target.value)}
                placeholder="https://www.yourwebsite.com"
              />
              <p className="wtq-field-help">
                We review publicly accessible content only and will not attempt to access pages protected by a login.
              </p>
            </FormField>

            <FormField>
              <FieldLabel required>What Would You Like Translated?</FieldLabel>
              <ChoiceGrid
                name="Website scope"
                value={form.websiteScope}
                onChange={(value) => update("websiteScope", value)}
                options={[
                  "The entire website",
                  "Selected pages or sections",
                  "Newly created or recently updated content",
                  "Ongoing website updates",
                  "I am not sure yet",
                ]}
              />
            </FormField>

            {form.websiteScope === "Selected pages or sections" ? (
              <FormField>
                <FieldLabel htmlFor="selected-pages">Pages or Sections to Include</FieldLabel>
                <textarea
                  id="selected-pages"
                  rows="5"
                  value={form.selectedPages}
                  onChange={(event) => update("selectedPages", event.target.value)}
                  placeholder="Paste one or more page URLs, separated by a new line."
                />
                <p className="wtq-field-help">
                  You may also upload a sitemap, page list, or content inventory later in the form.
                </p>
              </FormField>
            ) : null}

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel htmlFor="website-type">What Type of Website or Digital Experience Is This?</FieldLabel>
                <select
                  id="website-type"
                  value={form.websiteType}
                  onChange={(event) => update("websiteType", event.target.value)}
                >
                  <option value="">Select an option</option>
                  <option>Corporate or marketing website</option>
                  <option>Ecommerce website or online store</option>
                  <option>SaaS platform or web application</option>
                  <option>Customer or employee portal</option>
                  <option>Knowledge base or help center</option>
                  <option>Healthcare, financial, legal, or regulated website</option>
                  <option>Educational or training website</option>
                  <option>Other</option>
                  <option>I am not sure</option>
                </select>
              </FormField>

              <FormField>
                <FieldLabel htmlFor="update-frequency">How Frequently Does the Source Website Change?</FieldLabel>
                <select
                  id="update-frequency"
                  value={form.updateFrequency}
                  onChange={(event) => update("updateFrequency", event.target.value)}
                >
                  <option value="">Select an option</option>
                  <option>Rarely</option>
                  <option>A few times each year</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily or continuously</option>
                  <option>I am not sure</option>
                </select>
              </FormField>
            </div>

            <FormField>
              <FieldLabel>Does the Project Include Content That Is Not Publicly Accessible?</FieldLabel>
              <ChoiceGrid
                name="Access requirements"
                value={form.accessType}
                onChange={(value) => update("accessType", value)}
                options={[
                  "No, all relevant content is publicly accessible",
                  "Yes, some content is behind a login",
                  "Yes, the website includes dynamic or application content",
                  "Yes, some content is unpublished or stored in another system",
                  "I am not sure",
                ]}
              />
              <p className="wtq-field-help">
                Private or unpublished content can be assessed using secure exports, structured files, screenshots, controlled access, or other agreed methods.
              </p>
            </FormField>

            <FormActions activeStep={activeStep} onNext={next} />
          </div>
        ) : null}

        {activeStep === 1 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="Choose Your Languages and Target Markets"
              copy="Select the languages you are considering. Our team can help determine the appropriate regional variants for your target markets."
            />

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel required htmlFor="source-language">Source Language</FieldLabel>
                <select
                  id="source-language"
                  value={form.sourceLanguage}
                  onChange={(event) => update("sourceLanguage", event.target.value)}
                >
                  <option value="">Select the language currently used on your website</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                  <option>Portuguese</option>
                  <option>Italian</option>
                  <option>Other</option>
                </select>
                {form.sourceLanguage === "Other" ? (
                  <div className="wtq-inline-field wtq-inline-field--nested">
                    <input
                      value={form.otherSourceLanguage}
                      onChange={(event) => update("otherSourceLanguage", event.target.value)}
                      placeholder="Enter the current website language"
                      aria-label="Other source language"
                    />
                  </div>
                ) : null}
              </FormField>

              <FormField>
                <FieldLabel htmlFor="target-markets">Target Countries or Markets</FieldLabel>
                <input
                  id="target-markets"
                  value={form.targetMarkets}
                  onChange={(event) => update("targetMarkets", event.target.value)}
                  placeholder="Enter countries or regions"
                />
                <p className="wtq-field-help">
                  Language and market are not always the same decision. We can help determine the right regional approach.
                </p>
              </FormField>
            </div>

            <FormField>
              <FieldLabel required>Target Languages</FieldLabel>
              <div className="wtq-language-grid" role="group" aria-label="Common target languages">
                {commonLanguages.map((language) => {
                  const selected = form.targetLanguages.includes(language);
                  return (
                    <button
                      type="button"
                      key={language}
                      className={`wtq-language-chip ${selected ? "is-selected" : ""}`}
                      aria-pressed={selected}
                      disabled={form.targetUnknown}
                      onClick={() => {
                        const nextLanguages = selected
                          ? form.targetLanguages.filter((item) => item !== language)
                          : [...form.targetLanguages, language];
                        update("targetLanguages", nextLanguages);
                      }}
                    >
                      {selected ? <Icon name="checkmark" size={17} strokeWidth={2.2} /> : null}
                      <span>{language}</span>
                    </button>
                  );
                })}
              </div>
              <div className="wtq-inline-field">
                <input
                  value={form.otherLanguages}
                  onChange={(event) => update("otherLanguages", event.target.value)}
                  placeholder="Other language(s)"
                  aria-label="Other target languages"
                  disabled={form.targetUnknown}
                />
              </div>
              <label className="wtq-checkbox-row">
                <input
                  type="checkbox"
                  checked={form.targetUnknown}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setForm((current) => ({
                      ...current,
                      targetUnknown: checked,
                      targetLanguages: checked ? [] : current.targetLanguages,
                      otherLanguages: checked ? "" : current.otherLanguages,
                    }));
                    setErrors([]);
                  }}
                />
                <span>I have not finalized the target languages</span>
              </label>
            </FormField>

            <FormField>
              <FieldLabel>Do You Already Have Localized Website Content?</FieldLabel>
              <ChoiceGrid
                name="Existing localized content"
                value={form.localizedContent}
                onChange={(value) => update("localizedContent", value)}
                options={[
                  "No",
                  "Yes, for some languages",
                  "Yes, but it needs to be reviewed or updated",
                  "Yes, and we want to migrate or reuse it",
                  "I am not sure",
                ]}
              />
            </FormField>

            {form.localizedContent.startsWith("Yes") ? (
              <FormField>
                <FieldLabel htmlFor="localized-urls">Existing Language Versions</FieldLabel>
                <textarea
                  id="localized-urls"
                  rows="4"
                  value={form.localizedUrls}
                  onChange={(event) => update("localizedUrls", event.target.value)}
                  placeholder="Add URLs or briefly describe the existing localized websites."
                />
              </FormField>
            ) : null}

            <FormActions activeStep={activeStep} onBack={back} onNext={next} />
          </div>
        ) : null}

        {activeStep === 2 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="What Are You Looking to Achieve?"
              copy="Tell us which business goals, content types, and customer journeys are most important to your website localization program."
            />

            <FormField>
              <FieldLabel required>What Are the Main Goals of This Project?</FieldLabel>
              <ChoiceGrid
                name="Project goals"
                multiple
                value={form.goals}
                onChange={(value) => update("goals", value)}
                options={[
                  "Launch in new international markets",
                  "Translate an existing website",
                  "Improve or replace existing localized pages",
                  "Increase international search visibility",
                  "Localize an ecommerce customer journey",
                  "Translate a SaaS platform or customer portal",
                  "Keep multilingual websites continuously updated",
                  "Support a product, service, or campaign launch",
                  "Meet legal, accessibility, or regulatory requirements",
                  "Consolidate website translation across teams or brands",
                  "I am not sure—please recommend an approach",
                ]}
              />
            </FormField>

            <FormField>
              <FieldLabel>What Types of Content Are Included?</FieldLabel>
              <ChoiceGrid
                name="Content types"
                multiple
                value={form.contentTypes}
                onChange={(value) => update("contentTypes", value)}
                options={[
                  "Corporate and brand pages",
                  "Product or service pages",
                  "Marketing landing pages",
                  "Ecommerce catalogs and product information",
                  "Checkout, account, and transactional content",
                  "Software or web application interfaces",
                  "Knowledge base and support content",
                  "Blog posts and resource libraries",
                  "Forms, notifications, and customer emails",
                  "Privacy, legal, or compliance content",
                  "Downloadable documents",
                  "Images, video, audio, captions, or transcripts",
                  "Other",
                  "I am not sure",
                ]}
              />
            </FormField>

            <FormField>
              <FieldLabel>Which Pages or Journeys Are Most Important?</FieldLabel>
              <ChoiceGrid
                name="Priority journeys"
                multiple
                value={form.journeys}
                onChange={(value) => update("journeys", value)}
                options={[
                  "Homepage and primary navigation",
                  "Product or service discovery",
                  "Lead-generation and contact forms",
                  "Registration or onboarding",
                  "Ecommerce search and checkout",
                  "Customer account experience",
                  "Support and knowledge content",
                  "Legal or regulatory information",
                  "The complete website experience",
                  "Priorities have not yet been defined",
                ]}
              />
            </FormField>

            <FormField className="wtq-form-field--short">
              <FieldLabel htmlFor="industry">Industry or Subject Matter</FieldLabel>
              <select
                id="industry"
                value={form.industry}
                onChange={(event) => update("industry", event.target.value)}
              >
                <option value="">Select an industry</option>
                <option>General business</option>
                <option>Technology and SaaS</option>
                <option>Manufacturing and engineering</option>
                <option>Retail and ecommerce</option>
                <option>Healthcare or life sciences</option>
                <option>Medical devices</option>
                <option>Financial services</option>
                <option>Insurance</option>
                <option>Legal</option>
                <option>Government and public sector</option>
                <option>Education and eLearning</option>
                <option>Travel and hospitality</option>
                <option>Automotive and mobility</option>
                <option>Other</option>
              </select>
              <p className="wtq-field-help">
                This helps us determine whether your website requires technical, legal, medical, financial, regulated, creative, or other subject-matter expertise.
              </p>
            </FormField>

            <FormActions activeStep={activeStep} onBack={back} onNext={next} />
          </div>
        ) : null}

        {activeStep === 3 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="How Would You Like the Translation Managed?"
              copy="You do not need to select a technical solution. Tell us how your organization expects to work, and Stepes will recommend the most practical delivery model."
            />

            <FormField>
              <FieldLabel required>Which Statement Best Describes Your Needs?</FieldLabel>
              <ChoiceGrid
                name="Workflow needs"
                value={form.workflowNeed}
                onChange={(value) => update("workflowNeed", value)}
                options={[
                  "Our team will publish the translated content",
                  "We need translated files or structured content",
                  "We need help connecting our CMS or ecommerce platform",
                  "We want Stepes to manage multilingual publishing",
                  "We need an ongoing workflow for website updates",
                  "We are replacing an existing localization process",
                  "We are not sure—please recommend the best approach",
                ]}
              />
            </FormField>

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel htmlFor="platform">Website or Content Platform</FieldLabel>
                <select
                  id="platform"
                  value={form.platform}
                  onChange={(event) => update("platform", event.target.value)}
                >
                  <option value="">Select a platform</option>
                  <option>WordPress</option>
                  <option>Drupal</option>
                  <option>Adobe Experience Manager</option>
                  <option>Sitecore</option>
                  <option>Contentful or another headless CMS</option>
                  <option>Shopify</option>
                  <option>Magento or Adobe Commerce</option>
                  <option>Salesforce</option>
                  <option>Webflow</option>
                  <option>Custom CMS or web application</option>
                  <option>Multiple platforms</option>
                  <option>Other</option>
                  <option>I am not sure</option>
                </select>
              </FormField>

              <FormField>
                <FieldLabel htmlFor="publisher">Who Will Publish the Localized Content?</FieldLabel>
                <select
                  id="publisher"
                  value={form.publisher}
                  onChange={(event) => update("publisher", event.target.value)}
                >
                  <option value="">Select an option</option>
                  <option>Our internal website or development team</option>
                  <option>Our marketing or content team</option>
                  <option>A web agency or implementation partner</option>
                  <option>Regional or in-country teams</option>
                  <option>We would like Stepes to support publishing</option>
                  <option>This has not yet been decided</option>
                </select>
              </FormField>
            </div>

            <FormField>
              <FieldLabel>How Is the Website Content Stored or Published?</FieldLabel>
              <ChoiceGrid
                name="Content storage"
                multiple
                value={form.storage}
                onChange={(value) => update("storage", value)}
                options={[
                  "Directly in the CMS",
                  "Structured exports or content files",
                  "Software resource files or repositories",
                  "API",
                  "Database",
                  "Product information management system",
                  "Digital asset management system",
                  "Marketing automation or support platform",
                  "Multiple connected systems",
                  "I am not sure",
                ]}
              />
            </FormField>

            <FormField>
              <FieldLabel htmlFor="current-process">Current Website Translation Process</FieldLabel>
              <textarea
                id="current-process"
                rows="5"
                value={form.currentProcess}
                onChange={(event) => update("currentProcess", event.target.value)}
                placeholder="Briefly describe how website content is currently translated, reviewed, and published."
              />
              <p className="wtq-field-help">
                Optional. Include any current vendors, reviewers, CMS processes, or recurring challenges that would help us understand your requirements.
              </p>
            </FormField>

            <FormActions activeStep={activeStep} onBack={back} onNext={next} />
          </div>
        ) : null}

        {activeStep === 4 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="Tell Us About Your Launch and Service Requirements"
              copy="Select the services you are considering and share your expected timing. We can recommend the appropriate combination after reviewing the project."
            />

            <FormField>
              <FieldLabel>Which Services Would You Like Included?</FieldLabel>
              <ChoiceGrid
                name="Requested services"
                multiple
                value={form.services}
                onChange={(value) => update("services", value)}
                options={[
                  "Professional human translation",
                  "AI translation with professional human review",
                  "Specialist translation for technical or regulated content",
                  "Marketing transcreation and creative adaptation",
                  "Multilingual keyword research",
                  "Search-intent and SEO content localization",
                  "Page titles, metadata, alt text, and URL localization",
                  "Terminology and glossary development",
                  "Translation memory creation or migration",
                  "In-country or stakeholder review",
                  "In-context linguistic review",
                  "Visual and responsive website QA",
                  "Functional localization testing",
                  "CMS integration or localization engineering",
                  "Multilingual publishing and launch support",
                  "Continuous website translation and updates",
                  "I am not sure—please recommend the appropriate services",
                ]}
              />
            </FormField>

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel required htmlFor="timing">When Do You Need the Website or Translated Content?</FieldLabel>
                <select
                  id="timing"
                  value={form.timing}
                  onChange={(event) => update("timing", event.target.value)}
                >
                  <option value="">Select your expected timing</option>
                  <option>As soon as possible</option>
                  <option>Within one month</option>
                  <option>Within one to three months</option>
                  <option>More than three months from now</option>
                  <option>We are still planning</option>
                  <option>We have a specific launch date</option>
                </select>
              </FormField>

              {form.timing === "We have a specific launch date" ? (
                <FormField>
                  <FieldLabel required htmlFor="launch-date">Target Launch Date</FieldLabel>
                  <input
                    id="launch-date"
                    type="date"
                    value={form.launchDate}
                    onChange={(event) => update("launchDate", event.target.value)}
                  />
                </FormField>
              ) : <div aria-hidden="true" />}
            </div>

            <FormField>
              <FieldLabel>Do You Have Existing Language Assets?</FieldLabel>
              <ChoiceGrid
                name="Existing language assets"
                multiple
                value={form.assets}
                onChange={(value) => update("assets", value)}
                options={[
                  "Previous website translations",
                  "Translation memory",
                  "Approved terminology or glossary",
                  "Multilingual style guide",
                  "Target-language keyword research",
                  "Existing localized website",
                  "In-country reviewers",
                  "None",
                  "I am not sure",
                ]}
              />
            </FormField>

            <FormField>
              <FieldLabel htmlFor="supporting-files">Supporting Files</FieldLabel>
              <label className="wtq-upload" htmlFor="supporting-files">
                <Icon name="upload" size={26} />
                <span>
                  <strong>Upload Supporting Materials</strong>
                  <small>Choose a file or drag it here</small>
                </span>
                <input id="supporting-files" type="file" multiple />
              </label>
              <p className="wtq-field-help">
                Optional. You may upload a sitemap, page inventory, requirements document, CMS export, existing translation, glossary, translation memory, keyword plan, screenshot, or wireframe.
              </p>
            </FormField>

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel htmlFor="budget">Do You Have a Planned Budget Range?</FieldLabel>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(event) => update("budget", event.target.value)}
                >
                  <option value="">Select an option</option>
                  <option>Budget has not yet been established</option>
                  <option>Under $5,000</option>
                  <option>$5,000–$15,000</option>
                  <option>$15,000–$50,000</option>
                  <option>$50,000–$100,000</option>
                  <option>More than $100,000</option>
                  <option>Prefer not to say</option>
                </select>
                <p className="wtq-field-help">
                  Optional. This helps us recommend a practical scope and rollout strategy.
                </p>
              </FormField>

              <FormField>
                <FieldLabel htmlFor="currency">Preferred Currency</FieldLabel>
                <select
                  id="currency"
                  value={form.currency}
                  onChange={(event) => update("currency", event.target.value)}
                >
                  <option>US Dollar</option>
                  <option>Euro</option>
                  <option>British Pound</option>
                  <option>Canadian Dollar</option>
                  <option>Australian Dollar</option>
                  <option>Other</option>
                </select>
              </FormField>
            </div>

            <FormActions activeStep={activeStep} onBack={back} onNext={next} />
          </div>
        ) : null}

        {activeStep === 5 ? (
          <div className="wtq-form-step">
            <StepHeader
              step={activeStep}
              title="Where Should We Send Your Estimate?"
              copy="Provide your business contact details so a Stepes specialist can review the request and follow up with the estimate or any necessary questions."
            />

            <div className="wtq-two-column-fields">
              <FormField>
                <FieldLabel required htmlFor="first-name">First Name</FieldLabel>
                <input
                  id="first-name"
                  value={form.firstName}
                  onChange={(event) => update("firstName", event.target.value)}
                  placeholder="First name"
                />
              </FormField>
              <FormField>
                <FieldLabel required htmlFor="last-name">Last Name</FieldLabel>
                <input
                  id="last-name"
                  value={form.lastName}
                  onChange={(event) => update("lastName", event.target.value)}
                  placeholder="Last name"
                />
              </FormField>
              <FormField>
                <FieldLabel required htmlFor="company">Company</FieldLabel>
                <input
                  id="company"
                  value={form.company}
                  onChange={(event) => update("company", event.target.value)}
                  placeholder="Company name"
                />
              </FormField>
              <FormField>
                <FieldLabel required htmlFor="email">Business Email</FieldLabel>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  placeholder="name@company.com"
                />
              </FormField>
              <FormField>
                <FieldLabel htmlFor="job-title">Job Title or Role</FieldLabel>
                <input
                  id="job-title"
                  value={form.jobTitle}
                  onChange={(event) => update("jobTitle", event.target.value)}
                  placeholder="Job title"
                />
              </FormField>
              <FormField>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="Phone number"
                />
              </FormField>
            </div>

            <FormField className="wtq-form-field--short">
              <FieldLabel htmlFor="country">Country or Region</FieldLabel>
              <input
                id="country"
                value={form.country}
                onChange={(event) => update("country", event.target.value)}
                placeholder="Select or enter your country or region"
              />
            </FormField>

            <FormField>
              <FieldLabel htmlFor="notes">Is There Anything Else We Should Know?</FieldLabel>
              <textarea
                id="notes"
                rows="6"
                value={form.notes}
                onChange={(event) => update("notes", event.target.value)}
                placeholder="Tell us about your website, scope, languages, technical requirements, procurement process, or any questions you would like us to address."
              />
            </FormField>

            <label className="wtq-consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => update("consent", event.target.checked)}
              />
              <span>
                I agree that Stepes may contact me regarding this website translation request. My information will be handled in accordance with the{" "}
                <a href="https://www.stepes.com/privacy-policy/">Stepes Privacy Policy</a>.
              </span>
            </label>

            <p className="wtq-submit-note">
              No obligation. A Stepes specialist will review your request and contact you if additional information is required.
            </p>

            <FormActions
              activeStep={activeStep}
              onBack={back}
              onSubmit={submit}
              isLast
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FAQItem({ question, children, open, onToggle }) {
  return (
    <div className={`wtq-faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button type="button" onClick={onToggle} aria-expanded={open}>
          <span>{question}</span>
          <span className="wtq-faq-icon" aria-hidden="true">
            <Icon name={open ? "minus" : "plus"} size={20} strokeWidth={1.8} />
          </span>
        </button>
      </h3>
      <div className="wtq-faq-answer" hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export default function StepesWebsiteTranslationQuoteWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      question: "How Is a Website Translation Quote Calculated?",
      answer: (
        <p>
          A website translation quote may consider content volume, repetition, languages, regional markets, subject matter, translation quality, CMS or integration requirements, multilingual SEO, testing, publishing, and ongoing updates. Stepes assesses the public website and combines those findings with the project information you provide, producing a more meaningful estimate than page count or an automatically extracted word total alone.
        </p>
      ),
    },
    {
      question: "Can Stepes Quote My Entire Website or Only Selected Pages?",
      answer: (
        <p>
          Yes. We can assess a complete website, selected pages, a priority customer journey, a content section, or a phased international rollout. Many organizations begin with high-value pages such as the homepage, product or service content, lead-generation pages, ecommerce journeys, support information, and required legal content, then add pages and markets as the program expands.
        </p>
      ),
    },
    {
      question: "Do I Need to Know My Website’s Word Count?",
      answer: (
        <p>
          No. Enter the website URL and describe the scope as clearly as possible. Stepes can assess publicly accessible content and identify additional information that may be needed. Private pages, application strings, structured CMS content, documents, multimedia, and unpublished material may need to be provided separately.
        </p>
      ),
    },
    {
      question: "What Happens if Part of the Website Is Behind a Login?",
      answer: (
        <p>
          We will not attempt to enter protected areas during the public website assessment. Authenticated content can be scoped through secure CMS exports, structured files, resource files, screenshots, test environments, controlled access, or another method agreed with your team. You can indicate in the form that the project includes private or dynamic content.
        </p>
      ),
    },
    {
      question: "How Quickly Will I Receive an Estimate?",
      answer: (
        <p>
          Most requests receive an initial response within one business day. Straightforward projects with clearly defined public content may be quoted at that stage. Complex websites involving integrations, authenticated content, multiple systems, SEO strategy, regional review, or continuous localization may require a brief discovery conversation before a formal quotation is completed.
        </p>
      ),
    },
    {
      question: "Can the Estimate Include Multilingual SEO?",
      answer: (
        <p>
          Yes. Your estimate can include target-market keyword research, search-intent localization, titles, meta descriptions, headings, body copy, alt text, internal links, language-specific URL recommendations, hreflang coordination, and multilingual SEO review. Keywords should be validated against the language and search behavior of each target market rather than translated literally.
        </p>
      ),
    },
    {
      question: "Can Website Testing and Quality Assurance Be Included?",
      answer: (
        <p>
          Yes. Stepes can include linguistic QA, in-context review, visual and responsive testing, form and navigation checks, functional localization testing, right-to-left review, and prelaunch validation. The testing scope can be matched to the importance, complexity, customer journeys, languages, and risk profile of the website.
        </p>
      ),
    },
    {
      question: "Can Stepes Use Our Existing Translations or Translation Memory?",
      answer: (
        <p>
          Yes. Existing website translations, translation memories, glossaries, style guides, keyword research, and reviewer decisions can be evaluated for reuse. Approved language assets can improve consistency, reduce duplicated translation, and help align the website with software, documentation, marketing, support, and other customer-facing content.
        </p>
      ),
    },
    {
      question: "What if We Do Not Know Which CMS Workflow or Localization Model We Need?",
      answer: (
        <p>
          You do not need to select a technical approach before requesting a quote. Stepes will review where the content is stored, how it is published, how frequently it changes, who reviews it, and how much technical and publishing support your team needs. We can then recommend file-based delivery, a CMS-connected workflow, API integration, proxy technology, managed publishing, or a combination of approaches.
        </p>
      ),
    },
    {
      question: "Is the Initial Estimate a Final Binding Quote?",
      answer: (
        <p>
          That depends on how completely the scope can be confirmed. Straightforward projects may receive a formal quote immediately. For more complex programs, the first estimate may be based on the public website and submitted project information. Pricing can then be finalized after inaccessible content, integrations, review requirements, testing, publishing, and other dependencies have been confirmed.
        </p>
      ),
    },
    {
      question: "Can Stepes Quote Ongoing Website Updates?",
      answer: (
        <p>
          Yes. Stepes can design a recurring or continuous website translation workflow for newly created and revised content. The workflow may include change detection, translation memory, terminology controls, priority-based routing, regional review, multilingual publishing, quality monitoring, and reporting.
        </p>
      ),
    },
  ];

  return (
    <main className="wtq-page">
      <style>{`
        :root {
          --wtq-magenta: #C11D63;
          --wtq-magenta-dark: #A71954;
          --wtq-magenta-deep: #7A1542;
          --wtq-blush: #FDF2F7;
          --wtq-pink-light: #F2A7C6;
          --wtq-ink: #19171C;
          --wtq-body: #4E4952;
          --wtq-muted: #706A74;
          --wtq-border: #E6E1E7;
          --wtq-border-strong: #D5CFD7;
          --wtq-surface: #F7F5F7;
          --wtq-dark: #1C1920;
          --wtq-white: #FFFFFF;
          --wtq-shadow: 0 20px 55px rgba(40, 24, 34, 0.09);
        }

        .wtq-page,
        .wtq-page * {
          box-sizing: border-box;
        }

        .wtq-page {
          margin: 0;
          color: var(--wtq-ink);
          background: var(--wtq-white);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: hidden;
        }

        .wtq-page h1,
        .wtq-page h2,
        .wtq-page h3,
        .wtq-page p,
        .wtq-page ol,
        .wtq-page ul,
        .wtq-page dl,
        .wtq-page dd {
          margin-top: 0;
        }

        .wtq-page h1,
        .wtq-page h2,
        .wtq-page h3 {
          color: var(--wtq-ink);
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.16;
        }

        .wtq-page h1 {
          margin-bottom: 24px;
          font-size: 48px;
        }

        .wtq-page h2 {
          margin-bottom: 22px;
          font-size: 36px;
        }

        .wtq-page h3 {
          margin-bottom: 12px;
          font-size: 24px;
        }

        .wtq-page p,
        .wtq-page li,
        .wtq-page dd,
        .wtq-page label,
        .wtq-page input,
        .wtq-page select,
        .wtq-page textarea,
        .wtq-page button,
        .wtq-page a {
          font-size: 16px;
        }

        .wtq-container {
          width: min(100%, 1280px);
          margin-inline: auto;
          padding-inline: 56px;
        }

        .wtq-eyebrow {
          margin-bottom: 14px;
          color: var(--wtq-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          letter-spacing: 0.14em !important;
          line-height: 1.3 !important;
          text-transform: uppercase;
        }

        .wtq-eyebrow--dark {
          color: var(--wtq-pink-light) !important;
        }

        .wtq-section-intro {
          max-width: 820px;
          margin-bottom: 54px;
        }

        .wtq-section-intro--center {
          margin-inline: auto;
          text-align: center;
        }

        .wtq-section-lead {
          max-width: 780px;
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 18px !important;
          line-height: 1.7;
        }

        .wtq-section-intro--center .wtq-section-lead {
          margin-inline: auto;
        }

        .wtq-button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 13px 24px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-weight: 600;
          line-height: 1.2;
          max-width: 100%;
          white-space: normal;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .wtq-button--primary,
        .wtq-button--primary:link,
        .wtq-button--primary:visited,
        .wtq-button--primary:hover,
        .wtq-button--primary:active,
        .wtq-button--primary:focus,
        .wtq-button--primary:focus-visible,
        .wtq-button--primary:disabled,
        .wtq-button--primary span,
        .wtq-button--primary svg,
        .wtq-button--primary svg * {
          color: #FFFFFF !important;
          fill: none;
          stroke: #FFFFFF !important;
        }

        .wtq-button--primary {
          border-color: var(--wtq-magenta);
          background: var(--wtq-magenta);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.18);
        }

        .wtq-button--primary:hover {
          background: var(--wtq-magenta-dark);
          border-color: var(--wtq-magenta-dark);
          box-shadow: 0 13px 28px rgba(193, 29, 99, 0.24);
          transform: translateY(-1px);
        }

        .wtq-button--secondary {
          color: var(--wtq-ink);
          background: var(--wtq-white);
          border-color: var(--wtq-border-strong);
        }

        .wtq-button--secondary:hover {
          border-color: #B9B1BC;
          background: #FBFAFB;
        }

        .wtq-button:focus-visible,
        .wtq-choice:focus-visible,
        .wtq-language-chip:focus-visible,
        .wtq-step-nav button:focus-visible,
        .wtq-faq-item button:focus-visible,
        .wtq-page input:focus-visible,
        .wtq-page select:focus-visible,
        .wtq-page textarea:focus-visible,
        .wtq-page a:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 3px;
        }

        .wtq-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--wtq-magenta);
          font-weight: 600;
          max-width: 100%;
          flex-wrap: wrap;
          line-height: 1.45;
          overflow-wrap: anywhere;
          text-decoration: none;
        }

        .wtq-editorial-link:hover {
          color: var(--wtq-magenta-deep);
        }

        .wtq-hero {
          padding: 102px 0 84px;
          background:
            radial-gradient(ellipse at 50% -12%, rgba(193, 29, 99, 0.07) 0%, rgba(193, 29, 99, 0) 48%),
            #FFFFFF;
          text-align: center;
        }

        .wtq-hero-copy {
          max-width: 900px;
          margin-inline: auto;
        }

        .wtq-hero h1 {
          max-width: 850px;
          margin-inline: auto;
        }

        .wtq-hero h1::after {
          content: "";
          display: block;
          width: 68px;
          height: 3px;
          margin: 22px auto 0;
          border-radius: 999px;
          background: var(--wtq-magenta);
        }

        .wtq-hero-lead {
          max-width: 820px;
          margin: 0 auto 20px;
          color: var(--wtq-body);
          font-size: 18px !important;
          line-height: 1.72;
        }

        .wtq-hero-timing {
          max-width: 760px;
          margin: 0 auto;
          color: var(--wtq-muted);
          font-size: 16px;
        }

        .wtq-reassurance {
          margin-top: 48px;
          border-top: 1px solid var(--wtq-border);
          border-bottom: 1px solid var(--wtq-border);
          background: var(--wtq-white);
        }

        .wtq-reassurance-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .wtq-reassurance-item {
          min-height: 112px;
          display: flex;
          align-items: flex-start;
          padding: 28px 30px 24px 0;
          text-align: left;
        }

        .wtq-reassurance-item:not(:first-child) {
          padding-left: 30px;
        }

        .wtq-reassurance-item strong {
          display: block;
          margin-bottom: 3px;
          font-weight: 600;
        }

        .wtq-reassurance-item span {
          display: block;
          color: var(--wtq-body);
          font-size: 16px;
          line-height: 1.5;
        }

        .wtq-form-section {
          padding: 80px 0 96px;
          background: var(--wtq-surface);
        }

        .wtq-form-intro {
          max-width: 790px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .wtq-form-intro h2 {
          margin-bottom: 16px;
        }

        .wtq-form-intro p {
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 18px;
        }

        .wtq-required-note {
          margin-top: 12px !important;
          color: var(--wtq-muted) !important;
          font-size: 14px !important;
        }

        .wtq-form-shell {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          min-height: 720px;
          overflow: hidden;
          border: 1px solid var(--wtq-border);
          border-radius: 30px;
          background: var(--wtq-white);
          box-shadow: var(--wtq-shadow);
          scroll-margin-top: 28px;
        }

        .wtq-step-nav {
          padding: 42px 28px;
          background: #F8F6F8;
          border-right: 1px solid var(--wtq-border);
        }

        .wtq-step-nav ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .wtq-step-nav li {
          position: relative;
        }

        .wtq-step-nav li:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 43px;
          left: 18px;
          width: 1px;
          height: 27px;
          background: var(--wtq-border-strong);
        }

        .wtq-step-nav li.is-complete:not(:last-child)::after {
          background: rgba(193, 29, 99, 0.45);
        }

        .wtq-step-nav button {
          width: 100%;
          display: grid;
          grid-template-columns: 38px 1fr;
          align-items: center;
          gap: 13px;
          padding: 11px 10px;
          border: 0;
          border-radius: 12px;
          color: var(--wtq-muted);
          background: transparent;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }

        .wtq-step-nav button:disabled {
          cursor: not-allowed;
          opacity: 0.58;
        }

        .wtq-step-nav li.is-active button {
          color: var(--wtq-ink);
          background: var(--wtq-white);
          box-shadow: 0 8px 20px rgba(39, 25, 34, 0.07);
        }

        .wtq-step-nav li.is-complete button {
          color: var(--wtq-ink);
        }

        .wtq-step-number {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--wtq-border-strong);
          border-radius: 50%;
          background: var(--wtq-white);
          color: var(--wtq-muted);
          font-size: 14px;
          font-weight: 600;
        }

        .wtq-step-nav li.is-active .wtq-step-number,
        .wtq-step-nav li.is-complete .wtq-step-number {
          color: var(--wtq-magenta);
          border-color: rgba(193, 29, 99, 0.35);
          background: var(--wtq-blush);
        }

        .wtq-form-content {
          min-width: 0;
          padding: 48px 54px 52px;
        }

        .wtq-form-step {
          animation: wtqFadeIn 180ms ease;
        }

        @keyframes wtqFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .wtq-form-step-header {
          max-width: 780px;
          margin-bottom: 38px;
        }

        .wtq-form-step-kicker {
          margin-bottom: 9px;
          color: var(--wtq-magenta);
          font-size: 11px !important;
          font-weight: 600;
          letter-spacing: 0.13em;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .wtq-form-step-header h2 {
          margin-bottom: 13px;
          font-size: 32px;
        }

        .wtq-form-step-header > p:last-child {
          max-width: 760px;
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 17px;
        }

        .wtq-form-field {
          margin-bottom: 34px;
        }

        .wtq-form-field--short {
          max-width: 620px;
        }

        .wtq-field-label {
          display: block;
          margin-bottom: 12px;
          color: var(--wtq-ink);
          font-weight: 600;
          line-height: 1.45;
        }

        .wtq-field-label span {
          color: var(--wtq-magenta);
        }

        .wtq-page input,
        .wtq-page select,
        .wtq-page textarea {
          width: 100%;
          min-height: 52px;
          padding: 13px 15px;
          border: 1px solid var(--wtq-border-strong);
          border-radius: 12px;
          color: var(--wtq-ink);
          background: var(--wtq-white);
          font-family: inherit;
          line-height: 1.45;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .wtq-page textarea {
          min-height: 130px;
          resize: vertical;
        }

        .wtq-page input:hover,
        .wtq-page select:hover,
        .wtq-page textarea:hover,
        .wtq-page input:focus,
        .wtq-page select:focus,
        .wtq-page textarea:focus {
          border-color: #B5ADB8;
        }

        .wtq-page input:focus,
        .wtq-page select:focus,
        .wtq-page textarea:focus {
          box-shadow: 0 0 0 4px rgba(193, 29, 99, 0.08);
          outline: none;
        }

        .wtq-page input::placeholder,
        .wtq-page textarea::placeholder {
          color: #918A94;
        }

        .wtq-field-help {
          margin: 9px 0 0;
          color: var(--wtq-muted);
          font-size: 16px !important;
          line-height: 1.55;
        }

        .wtq-two-column-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .wtq-choice-grid {
          display: grid;
          gap: 10px;
        }

        .wtq-choice-grid--2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .wtq-choice-grid--1 {
          grid-template-columns: 1fr;
        }

        .wtq-choice {
          width: 100%;
          min-height: 54px;
          display: grid;
          grid-template-columns: 22px 1fr;
          align-items: start;
          gap: 10px;
          padding: 13px 14px;
          border: 1px solid var(--wtq-border);
          border-radius: 12px;
          color: var(--wtq-ink);
          background: var(--wtq-white);
          font-family: inherit;
          line-height: 1.45;
          text-align: left;
          cursor: pointer;
          transition: border-color 150ms ease, background 150ms ease, box-shadow 150ms ease;
        }

        .wtq-choice:hover {
          border-color: #C5BEC8;
          background: #FCFBFC;
        }

        .wtq-choice.is-selected {
          border-color: rgba(193, 29, 99, 0.55);
          background: var(--wtq-blush);
          box-shadow: inset 0 0 0 1px rgba(193, 29, 99, 0.08);
        }

        .wtq-choice-control {
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          border: 1px solid var(--wtq-border-strong);
          border-radius: 50%;
          background: var(--wtq-white);
        }

        .wtq-choice-grid.is-multiple .wtq-choice-control {
          border-radius: 5px;
        }

        .wtq-choice-grid.is-multiple .wtq-choice.is-selected .wtq-choice-control {
          color: var(--wtq-magenta);
        }

        .wtq-choice.is-selected .wtq-choice-control {
          border-color: var(--wtq-magenta);
        }

        .wtq-choice-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--wtq-magenta);
        }

        .wtq-language-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .wtq-language-chip {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 14px;
          border: 1px solid var(--wtq-border);
          border-radius: 999px;
          color: var(--wtq-ink);
          background: var(--wtq-white);
          font-weight: 600;
          cursor: pointer;
        }

        .wtq-language-chip.is-selected {
          color: var(--wtq-magenta-deep);
          border-color: rgba(193, 29, 99, 0.5);
          background: var(--wtq-blush);
        }

        .wtq-language-chip:disabled,
        .wtq-page input:disabled {
          cursor: not-allowed;
          opacity: 0.52;
          background: #F5F3F5;
        }

        .wtq-inline-field {
          max-width: 430px;
          margin-bottom: 12px;
        }

        .wtq-inline-field--nested {
          max-width: none;
          margin: 12px 0 0;
        }

        .wtq-checkbox-row,
        .wtq-consent {
          display: grid;
          grid-template-columns: 22px 1fr;
          align-items: start;
          gap: 11px;
          color: var(--wtq-body);
          line-height: 1.55;
        }

        .wtq-checkbox-row input,
        .wtq-consent input {
          width: 20px;
          min-height: 20px;
          height: 20px;
          margin: 2px 0 0;
          accent-color: var(--wtq-magenta);
        }

        .wtq-consent {
          padding: 18px;
          border: 1px solid var(--wtq-border);
          border-radius: 14px;
          background: #FAF9FA;
        }

        .wtq-consent a {
          color: var(--wtq-magenta);
          font-weight: 600;
          text-decoration: none;
        }

        .wtq-upload {
          min-height: 132px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          border: 1px dashed #BFB7C2;
          border-radius: 18px;
          color: var(--wtq-body);
          background: #FCFBFC;
          cursor: pointer;
        }

        .wtq-upload svg {
          flex: 0 0 auto;
          color: var(--wtq-magenta);
        }

        .wtq-upload strong,
        .wtq-upload small {
          display: block;
        }

        .wtq-upload strong {
          color: var(--wtq-ink);
          font-weight: 600;
        }

        .wtq-upload small {
          color: var(--wtq-muted);
          font-size: 14px;
        }

        .wtq-upload input {
          position: absolute;
          width: 1px;
          height: 1px;
          min-height: 1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .wtq-submit-note {
          margin: 16px 0 0;
          color: var(--wtq-muted);
          font-size: 16px !important;
        }

        .wtq-error-summary {
          margin-bottom: 28px;
          padding: 17px 20px;
          border: 1px solid #E9A8B7;
          border-radius: 14px;
          color: #6C2537;
          background: #FFF6F8;
        }

        .wtq-error-summary strong {
          font-weight: 600;
        }

        .wtq-error-summary ul {
          margin: 8px 0 0;
          padding-left: 22px;
        }

        .wtq-error-summary li {
          font-size: 16px;
        }

        .wtq-form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 46px;
          padding-top: 26px;
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-confirmation {
          display: block;
          min-height: auto;
          padding: 64px;
          text-align: center;
        }

        .wtq-confirmation-icon {
          width: 70px;
          height: 70px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 50%;
          color: var(--wtq-magenta);
          background: var(--wtq-blush);
        }

        .wtq-confirmation h2 {
          max-width: 860px;
          margin-inline: auto;
        }

        .wtq-confirmation-lead,
        .wtq-confirmation > p:not(.wtq-eyebrow) {
          max-width: 820px;
          margin-inline: auto;
          color: var(--wtq-body);
          font-size: 17px;
        }

        .wtq-reference {
          max-width: 760px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin: 34px auto 0;
          padding: 18px 22px;
          border: 1px solid var(--wtq-border);
          border-radius: 14px;
          background: #FAF9FA;
          text-align: left;
        }

        .wtq-reference span {
          color: var(--wtq-muted);
        }

        .wtq-reference strong {
          font-weight: 600;
        }

        .wtq-summary-panel,
        .wtq-confirmation-next {
          max-width: 900px;
          margin: 34px auto 0;
          padding: 32px;
          border: 1px solid var(--wtq-border);
          border-radius: 22px;
          text-align: left;
        }

        .wtq-summary-panel dl {
          margin-bottom: 0;
        }

        .wtq-summary-panel dl > div {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 24px;
          padding: 15px 0;
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-summary-panel dt {
          color: var(--wtq-muted);
          font-weight: 600;
        }

        .wtq-summary-panel dd {
          margin-bottom: 0;
          overflow-wrap: anywhere;
        }

        .wtq-confirmation-next ol {
          margin: 0;
          padding-left: 24px;
        }

        .wtq-confirmation-next li + li {
          margin-top: 10px;
        }

        .wtq-confirmation-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 36px;
        }

        .wtq-process {
          padding: 96px 0;
        }

        .wtq-process-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--wtq-border);
          border-bottom: 1px solid var(--wtq-border);
        }

        .wtq-process-step {
          padding: 38px 34px 42px;
        }

        .wtq-process-step + .wtq-process-step {
          border-left: 1px solid var(--wtq-border);
        }

        .wtq-process-number {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 50%;
          color: var(--wtq-magenta);
          background: var(--wtq-blush);
          font-size: 14px;
          font-weight: 600;
        }

        .wtq-process-step h3 {
          font-size: 22px;
        }

        .wtq-process-step p {
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 16px;
        }

        .wtq-inclusions {
          padding: 96px 0;
          background: #FAF9FA;
        }

        .wtq-inclusion-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--wtq-border);
          border-radius: 28px;
          overflow: hidden;
          background: var(--wtq-white);
        }

        .wtq-inclusion-item {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 20px;
          padding: 34px 36px;
          min-height: 220px;
        }

        .wtq-inclusion-item:nth-child(odd) {
          border-right: 1px solid var(--wtq-border);
        }

        .wtq-inclusion-item:nth-child(n + 3) {
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-inclusion-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--wtq-ink);
          background: #F2EFF2;
        }

        .wtq-inclusion-item h3 {
          font-size: 22px;
        }

        .wtq-inclusion-item p {
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 16px;
        }

        .wtq-section-link-row {
          display: flex;
          justify-content: flex-start;
          margin-top: 30px;
        }

        .wtq-costs {
          padding: 96px 0;
        }

        .wtq-cost-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.4fr);
          gap: 80px;
          align-items: start;
        }

        .wtq-cost-sticky {
          position: sticky;
          top: 32px;
        }

        .wtq-cost-sticky .wtq-section-intro {
          margin-bottom: 30px;
        }

        .wtq-cost-list {
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-cost-item {
          padding: 28px 0;
          border-bottom: 1px solid var(--wtq-border);
        }

        .wtq-cost-item h3 {
          margin-bottom: 9px;
          font-size: 21px;
        }

        .wtq-cost-item p {
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 16px;
        }

        .wtq-assessment {
          padding: 96px 0;
          color: #F7F3F6;
          background: var(--wtq-dark);
        }

        .wtq-assessment h2,
        .wtq-assessment h3 {
          color: #FFFFFF;
        }

        .wtq-assessment .wtq-section-lead {
          color: #D8D2D8;
        }

        .wtq-assessment-summary {
          max-width: 860px;
          margin-bottom: 54px;
          color: #D8D2D8;
          font-size: 17px;
        }

        .wtq-assessment-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }

        .wtq-assessment-item {
          min-height: 280px;
          padding: 36px 28px;
        }

        .wtq-assessment-item + .wtq-assessment-item {
          border-left: 1px solid rgba(255,255,255,0.14);
        }

        .wtq-assessment-item h3 {
          font-size: 21px;
        }

        .wtq-assessment-item p {
          margin-bottom: 0;
          color: #CEC7CF;
          font-size: 16px;
        }

        .wtq-assessment-rule {
          width: 32px;
          height: 2px;
          margin-bottom: 24px;
          background: var(--wtq-pink-light);
        }

        .wtq-websites {
          padding: 96px 0;
        }

        .wtq-website-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-website-item {
          padding: 30px 32px 32px 0;
          border-bottom: 1px solid var(--wtq-border);
        }

        .wtq-website-item:nth-child(even) {
          padding-left: 42px;
          border-left: 1px solid var(--wtq-border);
        }

        .wtq-website-item h3 {
          font-size: 21px;
        }

        .wtq-website-item p {
          max-width: 520px;
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 16px;
        }

        .wtq-faq {
          padding: 96px 0;
          background: #FAF9FA;
        }

        .wtq-faq-panel {
          border: 1px solid var(--wtq-border);
          border-radius: 28px;
          overflow: hidden;
          background: var(--wtq-white);
        }

        .wtq-faq-item + .wtq-faq-item {
          border-top: 1px solid var(--wtq-border);
        }

        .wtq-faq-item h3 {
          margin: 0;
        }

        .wtq-faq-item h3 button {
          width: 100%;
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 23px 30px;
          border: 0;
          color: var(--wtq-ink);
          background: var(--wtq-white);
          font-family: inherit;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.4;
          text-align: left;
          cursor: pointer;
        }

        .wtq-faq-item h3 button:hover {
          background: #FCFBFC;
        }

        .wtq-faq-icon {
          flex: 0 0 auto;
          color: var(--wtq-magenta);
        }

        .wtq-faq-answer {
          max-width: 880px;
          padding: 0 30px 28px;
        }

        .wtq-faq-answer p {
          margin-bottom: 0;
          color: var(--wtq-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .wtq-resources {
          padding: 96px 0;
        }

        .wtq-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid var(--wtq-border);
          border-radius: 28px;
          overflow: hidden;
        }

        .wtq-resource-item {
          min-height: 310px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 36px;
        }

        .wtq-resource-item + .wtq-resource-item {
          border-left: 1px solid var(--wtq-border);
        }

        .wtq-resource-label {
          margin-bottom: 24px;
          color: var(--wtq-magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .wtq-resource-item h3 {
          font-size: 22px;
        }

        .wtq-resource-item p {
          margin-bottom: 26px;
          color: var(--wtq-body);
          font-size: 16px;
        }

        .wtq-resource-item .wtq-editorial-link {
          margin-top: auto;
        }

        .wtq-final-cta {
          padding: 0 0 96px;
        }

        .wtq-final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          justify-items: center;
          gap: 30px;
          padding: 64px 72px;
          border-radius: 30px;
          background: var(--wtq-blush);
          text-align: center;
        }

        .wtq-final-cta-panel > div:first-child {
          width: 100%;
          max-width: 860px;
        }

        .wtq-final-cta-panel h2 {
          max-width: 760px;
          margin: 0 auto 16px;
        }

        .wtq-final-cta-panel p {
          max-width: 820px;
          margin: 0 auto;
          color: var(--wtq-body);
          font-size: 17px;
        }

        .wtq-final-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        .wtq-page input,
        .wtq-page select,
        .wtq-page textarea,
        .wtq-choice,
        .wtq-upload,
        .wtq-consent,
        .wtq-summary-panel dd {
          min-width: 0;
          max-width: 100%;
        }

        .wtq-choice > span:last-child,
        .wtq-upload span,
        .wtq-consent span,
        .wtq-summary-panel dd,
        .wtq-reference strong {
          overflow-wrap: anywhere;
        }

        @media (max-width: 1180px) {
          .wtq-container { padding-inline: 40px; }
          .wtq-reassurance-item { padding-inline: 18px; }
          .wtq-form-shell { grid-template-columns: 240px minmax(0, 1fr); }
          .wtq-step-nav { padding-inline: 20px; }
          .wtq-form-content { padding-inline: 40px; }
          .wtq-cost-layout { gap: 52px; }
          .wtq-assessment-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .wtq-assessment-item:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,0.14); }
          .wtq-assessment-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.14); }
        }

        @media (max-width: 900px) {
          .wtq-container { padding-inline: 24px; }
          .wtq-page h1 { font-size: 42px; }
          .wtq-page h2 { font-size: 32px; }
          .wtq-page h3 { font-size: 22px; }
          .wtq-hero { padding: 88px 0 72px; }
          .wtq-reassurance-grid { grid-template-columns: repeat(2, 1fr); }
          .wtq-reassurance-item { padding-right: 22px; }
          .wtq-reassurance-item:not(:first-child) { padding-left: 22px; }
          .wtq-reassurance-item:nth-child(odd) { padding-left: 0; }
          .wtq-form-shell { display: block; min-height: 0; }
          .wtq-step-nav { padding: 22px 24px; border-right: 0; border-bottom: 1px solid var(--wtq-border); overflow: hidden; }
          .wtq-step-nav ol { min-width: 0; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .wtq-step-nav li:not(:last-child)::after { top: 26px; left: calc(50% + 20px); width: calc(100% - 40px); height: 1px; }
          .wtq-step-nav button { display: flex; flex-direction: column; gap: 7px; padding: 7px 4px; text-align: center; }
          .wtq-step-label { font-size: 14px; }
          .wtq-form-content { padding: 42px 36px 46px; }
          .wtq-process-grid { grid-template-columns: 1fr; }
          .wtq-process-step + .wtq-process-step { border-left: 0; border-top: 1px solid var(--wtq-border); }
          .wtq-inclusion-grid { grid-template-columns: 1fr; }
          .wtq-inclusion-item:nth-child(odd) { border-right: 0; }
          .wtq-inclusion-item + .wtq-inclusion-item { border-top: 1px solid var(--wtq-border); }
          .wtq-cost-layout { grid-template-columns: 1fr; }
          .wtq-cost-sticky { position: static; }
          .wtq-website-list { grid-template-columns: 1fr; }
          .wtq-website-item,
          .wtq-website-item:nth-child(even) { padding: 28px 0; border-left: 0; }
          .wtq-resource-grid { grid-template-columns: 1fr; }
          .wtq-resource-item + .wtq-resource-item { border-left: 0; border-top: 1px solid var(--wtq-border); }
          .wtq-resource-item { min-height: auto; }
          .wtq-final-cta-panel { padding: 52px 44px; }
        }

        @media (max-width: 768px) {
          .wtq-section-intro { margin-bottom: 42px; }
          .wtq-hero,
          .wtq-process,
          .wtq-inclusions,
          .wtq-costs,
          .wtq-assessment,
          .wtq-websites,
          .wtq-faq,
          .wtq-resources { padding-top: 72px; padding-bottom: 72px; }
          .wtq-form-section { padding: 64px 0 72px; }
          .wtq-final-cta { padding-bottom: 72px; }
          .wtq-two-column-fields,
          .wtq-choice-grid--2 { grid-template-columns: 1fr; }
          .wtq-form-step-header h2 { font-size: 30px; }
          .wtq-inclusion-item { min-height: auto; }
          .wtq-assessment-grid { grid-template-columns: 1fr; }
          .wtq-assessment-item + .wtq-assessment-item,
          .wtq-assessment-item:nth-child(3),
          .wtq-assessment-item:nth-child(4) { border-left: 0; border-top: 1px solid rgba(255,255,255,0.14); }
          .wtq-assessment-item { min-height: auto; }
          .wtq-summary-panel dl > div { grid-template-columns: 1fr; gap: 5px; }
        }

        @media (max-width: 640px) {
          .wtq-container { padding-inline: 20px; }
          .wtq-page h1 { font-size: 38px; }
          .wtq-page h2 { font-size: 30px; }
          .wtq-page h3 { font-size: 20px; }
          .wtq-hero { padding: 72px 0 64px; }
          .wtq-hero-lead { font-size: 18px !important; }
          .wtq-reassurance { margin-top: 36px; }
          .wtq-reassurance-grid { grid-template-columns: 1fr; }
          .wtq-reassurance-item,
          .wtq-reassurance-item:not(:first-child),
          .wtq-reassurance-item:nth-child(odd) { min-height: 0; padding: 18px 4px; }
          .wtq-form-intro { text-align: left; }
          .wtq-form-shell { border-radius: 22px; }
          .wtq-step-nav { padding: 16px; }
          .wtq-step-nav ol { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
          .wtq-step-nav li:not(:last-child)::after { display: none; }
          .wtq-step-nav button {
            min-height: 76px;
            justify-content: center;
            gap: 5px;
            padding: 8px 4px;
          }
          .wtq-step-number { width: 32px; height: 32px; font-size: 14px; }
          .wtq-step-label {
            display: block;
            max-width: 100%;
            font-size: 12px;
            line-height: 1.25;
            overflow-wrap: anywhere;
          }
          .wtq-form-content { padding: 34px 20px 36px; }
          .wtq-form-step-header { margin-bottom: 30px; }
          .wtq-form-field { margin-bottom: 28px; }
          .wtq-choice { min-height: 58px; }
          .wtq-form-actions { align-items: stretch; flex-direction: column-reverse; }
          .wtq-form-actions > span { display: none; }
          .wtq-form-actions .wtq-button { width: 100%; min-height: 54px; }
          .wtq-upload { align-items: flex-start; justify-content: flex-start; }
          .wtq-confirmation { padding: 42px 20px; }
          .wtq-reference { flex-direction: column; gap: 4px; }
          .wtq-summary-panel,
          .wtq-confirmation-next { padding: 24px 20px; }
          .wtq-confirmation-actions { align-items: stretch; flex-direction: column; }
          .wtq-confirmation-actions .wtq-button { width: 100%; }
          .wtq-process-step { padding: 32px 0; }
          .wtq-process-grid { border-radius: 22px; }
          .wtq-inclusion-grid { border-radius: 22px; }
          .wtq-inclusion-item { grid-template-columns: 44px 1fr; gap: 16px; padding: 28px 22px; }
          .wtq-inclusion-icon { width: 44px; height: 44px; }
          .wtq-assessment-item { padding: 30px 0; }
          .wtq-faq-panel { border-radius: 22px; }
          .wtq-faq-item h3 button { min-height: 72px; padding: 20px; font-size: 18px; }
          .wtq-faq-answer { padding: 0 20px 24px; }
          .wtq-resource-grid { border-radius: 22px; }
          .wtq-resource-item { padding: 28px 22px; }
          .wtq-final-cta-panel { gap: 26px; padding: 40px 24px; border-radius: 22px; }
          .wtq-final-actions { align-items: stretch; flex-direction: column; }
          .wtq-final-actions .wtq-button { width: 100%; }
          .wtq-final-actions .wtq-editorial-link { min-height: 48px; justify-content: center; }
        }

        @media (max-width: 390px) {
          .wtq-page h1 { font-size: 38px; letter-spacing: -0.035em; }
          .wtq-hero { padding-top: 64px; }
          .wtq-form-content { padding-inline: 18px; }
          .wtq-choice { padding-inline: 12px; overflow-wrap: anywhere; }
          .wtq-language-chip { max-width: 100%; justify-content: center; overflow-wrap: anywhere; }
          .wtq-inclusion-item { grid-template-columns: 1fr; }
        }

        @media (max-width: 320px) {
          .wtq-container { padding-inline: 20px; }
          .wtq-form-content { padding-inline: 16px; }
          .wtq-choice { grid-template-columns: 20px minmax(0, 1fr); }
          .wtq-button { padding-inline: 16px; }
          .wtq-step-nav { padding-inline: 12px; }
          .wtq-step-nav ol { gap: 6px; }
          .wtq-step-nav button { min-height: 78px; padding-inline: 2px; }
          .wtq-step-label { font-size: 11px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wtq-page *,
          .wtq-page *::before,
          .wtq-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <section className="wtq-hero">
        <div className="wtq-container">
          <div className="wtq-hero-copy">
            <h1>Request a Website Translation Quote</h1>
            <p className="wtq-hero-lead">
              Tell us about your website, target markets, and localization requirements. A Stepes specialist will assess your public website, review the information you provide, and prepare a tailored estimate with a recommended translation workflow.
            </p>
            <p className="wtq-hero-timing">
              Most requests receive an initial response within one business day. Complex websites may require a short discovery conversation before a formal quotation can be completed.
            </p>
          </div>

          <div className="wtq-reassurance">
            <div className="wtq-reassurance-grid">
              {[
                ["Human-Reviewed Estimate", "Your project is assessed by a website localization specialist—not priced by an automated crawl alone."],
                ["No Obligation", "Request an estimate without committing to a project."],
                ["100+ Languages", "Reach customers across major global and regional markets."],
                ["Enterprise Website Expertise", "Support for corporate websites, ecommerce, SaaS, portals, knowledge bases, and regulated content."],
              ].map(([title, copy]) => (
                <div className="wtq-reassurance-item" key={title}>
                  <div>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wtq-form-section">
        <div className="wtq-container">
          <div className="wtq-form-intro">
            <h2>Tell Us About Your Website Translation Project</h2>
            <p>
              Complete the guided form so we can understand your website, languages, technical environment, launch plans, and service requirements. You do not need to know your website’s word count or which localization technology you should use.
            </p>
            <p className="wtq-required-note">Only fields marked with an asterisk are required.</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="wtq-process">
        <div className="wtq-container">
          <SectionIntro
            title="What Happens After You Request a Quote?"
            copy="Stepes combines website discovery technology with specialist scope validation so your estimate reflects the real multilingual program—not merely the text visible to an automated crawler."
          />
          <div className="wtq-process-grid">
            <article className="wtq-process-step">
              <span className="wtq-process-number">01</span>
              <h3>We Assess Your Website</h3>
              <p>
                We review the publicly accessible website to identify relevant pages, content types, metadata, downloadable resources, and other visible elements that may require translation. This initial assessment creates a more useful content inventory without requiring you to calculate the word count yourself.
              </p>
            </article>
            <article className="wtq-process-step">
              <span className="wtq-process-number">02</span>
              <h3>A Specialist Validates the Scope</h3>
              <p>
                Our team combines the website assessment with your languages, target markets, CMS, business goals, content priorities, quality requirements, SEO needs, testing, publishing, and future updates. Private, dynamic, unpublished, or externally stored content is reviewed separately when relevant.
              </p>
            </article>
            <article className="wtq-process-step">
              <span className="wtq-process-number">03</span>
              <h3>You Receive a Tailored Estimate</h3>
              <p>
                Your estimate may include the project scope, target languages, translation and review model, content-delivery workflow, multilingual SEO, website testing, publishing support, timeline, pricing, assumptions, and recommended next steps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="wtq-inclusions">
        <div className="wtq-container">
          <SectionIntro
            title="A Complete Estimate for Your Multilingual Website"
            copy="A meaningful website translation estimate should reflect the complete customer experience—not only the visible paragraphs on a webpage."
          />
          <div className="wtq-inclusion-grid">
            {[
              ["content", "Website Content Translation", "Translate page copy, navigation, product and service information, calls to action, forms, customer communications, support content, legal information, and other customer-facing text."],
              ["globe", "Website Localization and Transcreation", "Adapt brand language, messaging, terminology, creative content, formats, regional conventions, and conversion elements for the expectations of each market."],
              ["seo", "Multilingual SEO", "Support local keyword research, search-intent localization, page titles, meta descriptions, headings, internal links, alt text, language-specific URLs, and international search requirements."],
              ["workflow", "CMS and Technical Workflows", "Move content through structured files, CMS connections, translation APIs, repositories, proxy delivery, scheduled exports, or a workflow designed around your website environment."],
              ["qa", "Website Quality Assurance and Testing", "Review linguistic quality, terminology, context, layouts, responsive behavior, forms, navigation, links, search, ecommerce journeys, and right-to-left presentation where required."],
              ["refresh", "Continuous Website Translation", "Keep localized websites aligned with new and revised source content through repeatable update workflows, translation memory, terminology controls, approvals, and multilingual release coordination."],
            ].map(([icon, title, copy]) => (
              <article className="wtq-inclusion-item" key={title}>
                <div className="wtq-inclusion-icon"><Icon name={icon} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="wtq-section-link-row">
            <a className="wtq-editorial-link" href="https://www.stepes.com/website-translation-services/">
              Explore Website Translation Services <Icon name="arrow" size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <section className="wtq-costs">
        <div className="wtq-container wtq-cost-layout">
          <div className="wtq-cost-sticky">
            <SectionIntro
              title="What Affects a Website Translation Quote?"
              copy="Website translation cost is shaped by more than the number of pages or words. Languages, content complexity, technology, quality requirements, search optimization, testing, publishing, and future updates can all affect the final scope."
            />
            <a className="wtq-editorial-link" href="https://www.stepes.com/resources/translation-cost-guide/">
              Explore the Translation Cost Guide <Icon name="arrow" size={18} strokeWidth={2} />
            </a>
          </div>

          <div className="wtq-cost-list">
            {[
              ["Translatable Content Volume and Reuse", "The estimate considers new text, repeated content, shared templates, navigation, metadata, and material that may already exist in translation memory. Reusable translations and well-structured source content can improve consistency and reduce unnecessary work."],
              ["Languages and Regional Markets", "Pricing is influenced by the number of languages, regional variants, market-specific adaptation, linguist availability, and whether separate versions are required for different countries."],
              ["Content Type and Subject-Matter Complexity", "General corporate copy, creative marketing, technical specifications, legal terms, medical information, financial disclosures, product catalogs, and software interfaces may require different expertise and review processes."],
              ["Translation and Review Model", "The appropriate workflow may include AI translation, professional post-editing, human translation, independent review, specialist translation, transcreation, or in-country approval. Different quality levels can be applied to different website sections based on audience, visibility, risk, shelf life, and business value."],
              ["Website Technology and Publishing", "CMS integration, structured content, APIs, repositories, proxy delivery, engineering, content reintegration, and multilingual publishing can affect implementation effort."],
              ["SEO, Testing, and Ongoing Updates", "Local keyword research, metadata localization, in-context QA, responsive review, functional testing, launch support, and continuous localization should be included when they form part of the required website experience."],
            ].map(([title, copy]) => (
              <article className="wtq-cost-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wtq-assessment">
        <div className="wtq-container">
          <SectionIntro
            eyebrow="Human-Reviewed Assessment"
            title="A More Reliable Website Translation Estimate"
            copy="Technology can make website discovery faster, but a public website crawl does not define the complete localization project."
            dark
          />
          <p className="wtq-assessment-summary">
            A crawl may identify accessible pages and visible text, but it cannot independently confirm your business priorities, target markets, publishing process, desired quality level, approval process, launch dependencies, or ongoing operating requirements. It may also be unable to evaluate content behind a login, unpublished CMS fields, application strings, databases, transactional communications, or connected content systems.
          </p>
          <div className="wtq-assessment-grid">
            {[
              ["Automated Website Assessment", "Helps identify publicly accessible pages, visible content, repeated elements, metadata, and downloadable resources."],
              ["Specialist Scope Validation", "Determines which content is relevant, what should be excluded, where additional source material is stored, and which pages require deeper localization or review."],
              ["Tailored Workflow Recommendation", "Matches the project with the appropriate combination of AI, professional linguists, subject-matter expertise, multilingual SEO, technical integration, testing, and publishing support."],
              ["Clear Commercial Assumptions", "Explains what the estimate includes, what remains to be confirmed, and which requirements could affect the final price or schedule."],
            ].map(([title, copy]) => (
              <article className="wtq-assessment-item" key={title}>
                <div className="wtq-assessment-rule" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wtq-websites">
        <div className="wtq-container">
          <SectionIntro
            title="Website Translation Quotes for Every Digital Experience"
            copy="Stepes can assess conventional public websites as well as complex digital experiences that span marketing, software, customer support, ecommerce, and regulated content."
          />
          <div className="wtq-website-list">
            {[
              ["Corporate and Marketing Websites", "Translate company, solution, campaign, thought-leadership, investor, recruitment, and brand content for global audiences."],
              ["Ecommerce Websites", "Localize product catalogs, categories, promotions, search, checkout, customer accounts, delivery information, returns, and transactional messaging."],
              ["SaaS Platforms and Web Applications", "Coordinate marketing pages with onboarding, interfaces, dashboards, notifications, subscriptions, billing, help content, and product releases."],
              ["Customer and Employee Portals", "Translate authenticated information, forms, account content, resources, policies, training, and support experiences."],
              ["Knowledge Bases and Resource Centers", "Manage frequently updated help articles, documentation, FAQs, downloads, videos, release notes, and educational content."],
              ["Regulated and High-Risk Websites", "Support healthcare, life sciences, medical device, financial, insurance, legal, government, and other content where terminology, review, clarity, and accountability are especially important."],
            ].map(([title, copy]) => (
              <article className="wtq-website-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wtq-faq">
        <div className="wtq-container">
          <SectionIntro
            title="Website Translation Quote FAQs"
            copy="Find practical answers about website assessment, pricing, languages, CMS workflows, SEO, testing, existing translations, and ongoing content updates."
          />
          <div className="wtq-faq-panel">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                {item.answer}
              </FAQItem>
            ))}
          </div>
        </div>
      </section>

      <section className="wtq-resources">
        <div className="wtq-container">
          <SectionIntro
            title="Plan Your Website Translation Project"
            copy="Use these practical guides to evaluate website scope, localization technology, multilingual SEO, quality, launch planning, and ongoing updates before or after requesting your estimate."
          />
          <div className="wtq-resource-grid">
            <article className="wtq-resource-item">
              <span className="wtq-resource-label">Localization Guide</span>
              <h3>How to Translate a Website</h3>
              <p>
                Use a practical framework to plan your markets, content scope, technology, translation quality, multilingual SEO, testing, launch, and ongoing updates.
              </p>
              <a className="wtq-editorial-link" href="https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/">
                Read the Website Translation Guide <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </article>
            <article className="wtq-resource-item">
              <span className="wtq-resource-label">Workflow Guide</span>
              <h3>Website Translation Workflows</h3>
              <p>
                Compare file-based delivery, CMS-connected translation, APIs, proxy technology, and fully managed approaches for translating and publishing website content.
              </p>
              <a className="wtq-editorial-link" href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">
                Compare Website Translation Workflows <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </article>
            <article className="wtq-resource-item">
              <span className="wtq-resource-label">SEO Guide</span>
              <h3>Multilingual SEO Guide</h3>
              <p>
                Learn how local keyword research, search intent, website architecture, content localization, technical signals, internal links, and ongoing optimization work together across markets.
              </p>
              <a className="wtq-editorial-link" href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">
                Explore the Multilingual SEO Guide <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="wtq-final-cta">
        <div className="wtq-container">
          <div className="wtq-final-cta-panel">
            <div>
              <h2>Need Help Defining the Right Website Translation Scope?</h2>
              <p>
                Every website has a different combination of content, technology, markets, customer journeys, review requirements, and update cycles. Share the information you already have, and Stepes will help determine the most practical next step.
              </p>
            </div>
            <div className="wtq-final-actions">
              <a className="wtq-button wtq-button--primary" href={`${PAGE_URL}#website-quote-form`}>
                <span>Start My Website Quote</span>
                <Icon name="arrow" size={19} strokeWidth={2} />
              </a>
              <a className="wtq-editorial-link" href="https://www.stepes.com/contact-us/">
                Talk to a Website Translation Expert <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
