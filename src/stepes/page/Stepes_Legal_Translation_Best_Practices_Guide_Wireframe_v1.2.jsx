import React, { useEffect, useState } from "react";

const canonicalUrl = "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const keyTakeaways = [
  "Define the document’s intended use, recipient, jurisdiction, and legal effect before selecting a translation workflow.",
  "Establish one approved source package and control amendments, redlines, exhibits, and reviewer comments throughout the project.",
  "Use professional translators and reviewers with appropriate legal subject-matter knowledge, language expertise, and document-type experience.",
  "Maintain approved legal terminology, defined terms, entity names, recurring clauses, and cross-document references through terminology management and translation memory.",
  "Protect confidential information across intake, translation, review, storage, AI processing, and final delivery—not only while files are being translated.",
  "Route AI-assisted translation by content risk and require qualified human review before legal, external, or official use.",
  "Separate linguistic review, legal review, formatting verification, and final quality assurance so each responsibility is clear.",
  "Confirm certification and submission requirements with the receiving authority instead of assuming one format will be accepted everywhere."
];
const frameworkControls = [
  {
    "Control": "1. Purpose",
    "Question to Resolve": "Why is the document being translated, and how will it be used?",
    "Primary Output": "Intended-use statement and risk level"
  },
  {
    "Control": "2. Authority",
    "Question to Resolve": "Who will receive or rely on the translation, and what rules apply?",
    "Primary Output": "Recipient and requirement record"
  },
  {
    "Control": "3. Source",
    "Question to Resolve": "Which files, exhibits, and versions are authoritative?",
    "Primary Output": "Approved source package"
  },
  {
    "Control": "4. Expertise",
    "Question to Resolve": "Which linguistic, legal, technical, and review competencies are required?",
    "Primary Output": "Qualified project team and review plan"
  },
  {
    "Control": "5. Language Assets",
    "Question to Resolve": "Which terms, defined words, names, clauses, and prior translations must remain consistent?",
    "Primary Output": "Glossary, termbase, style notes, and translation memory"
  },
  {
    "Control": "6. Security",
    "Question to Resolve": "What confidentiality, access, retention, and technology controls apply?",
    "Primary Output": "Secure workflow and access plan"
  },
  {
    "Control": "7. Review",
    "Question to Resolve": "Which translation, revision, legal review, and QA steps are required?",
    "Primary Output": "Documented review and escalation workflow"
  },
  {
    "Control": "8. Delivery",
    "Question to Resolve": "What format, certification, naming, and supporting materials are needed?",
    "Primary Output": "Delivery-ready translation package"
  }
];
const workflowRows = [
  {
    "Intended Use": "Internal understanding or document triage",
    "Typical Risk Level": "Lower to moderate",
    "Recommended Translation Workflow": "Professional translation or controlled AI-assisted draft with human validation, depending on sensitivity and purpose",
    "Certification or Formalities": "Usually not required unless the organization specifies otherwise"
  },
  {
    "Intended Use": "Due diligence or multilingual discovery review",
    "Typical Risk Level": "Moderate to high",
    "Recommended Translation Workflow": "Risk-based prioritization, qualified legal linguists, terminology controls, documented review, secure handling",
    "Certification or Formalities": "Depends on later use of selected documents"
  },
  {
    "Intended Use": "Contract negotiation or business review",
    "Typical Risk Level": "High",
    "Recommended Translation Workflow": "Legal translator, terminology and defined-term controls, independent revision, bilingual legal review where appropriate",
    "Certification or Formalities": "Usually determined by the parties and intended legal use"
  },
  {
    "Intended Use": "Contract execution or governing-language use",
    "Typical Risk Level": "High",
    "Recommended Translation Workflow": "Full professional translation, independent revision, counsel review, strict version control, confirmation of authoritative language",
    "Certification or Formalities": "Confirm contractual and jurisdictional requirements"
  },
  {
    "Intended Use": "Court, arbitration, or regulatory submission",
    "Typical Risk Level": "High",
    "Recommended Translation Workflow": "Specialized legal translation, independent review, formatting and citation verification, counsel or filing-team review",
    "Certification or Formalities": "Confirm the tribunal’s, regulator’s, or authority’s current rules"
  },
  {
    "Intended Use": "Immigration, academic, licensing, or official submission",
    "Typical Risk Level": "High",
    "Recommended Translation Workflow": "Complete professional translation with recipient-aligned certification and document presentation",
    "Certification or Formalities": "Often requires a certificate of translation; requirements vary"
  },
  {
    "Intended Use": "Public-facing policies, terms, privacy notices, or disclosures",
    "Typical Risk Level": "High",
    "Recommended Translation Workflow": "Legal translation plus target-market legal review, terminology control, and publishing QA",
    "Certification or Formalities": "Depends on applicable law, market, and publishing requirements"
  }
];
const chapterData = [
  {
    "id": "define-intended-use",
    "title": "1. Define the Intended Use and Legal Effect",
    "html": "<p>Begin by documenting why the translation is needed and how people will rely on it. The same source document may require different workflows depending on whether it is being translated for internal understanding, negotiation, execution, litigation, due diligence, regulatory review, public disclosure, or official submission.</p>\n<p>At kickoff, confirm:</p>\n<ul>\n<li>the business or legal purpose of the translation;</li>\n<li>the people who will read, review, sign, file, or rely on it;</li>\n<li>the source and target languages, including the correct locale;</li>\n<li>the relevant country, jurisdiction, court, regulator, agency, or institution;</li>\n<li>whether the translation is for information, negotiation, execution, evidence, compliance, or submission;</li>\n<li>whether one language version will govern in the event of inconsistency;</li>\n<li>whether multiple language versions are intended to be equally authoritative;</li>\n<li>the required turnaround, delivery format, and review process.</li>\n</ul>\n<h3>Governing, Authentic, and Convenience Translations</h3>\n<p>Legal teams should determine how the translated version relates to the source document.</p>\n<ul>\n<li>A <strong>governing-language version</strong> is the language version designated to control if versions conflict.</li>\n<li>An <strong>equally authoritative or authentic version</strong> is intended to carry the same legal standing as another language version.</li>\n<li>A <strong>convenience translation</strong> supports understanding but is not intended to replace or control the governing text.</li>\n</ul>\n<p>These distinctions affect how closely the target language must mirror source structure, how ambiguities are handled, how counsel reviews the translation, and what explanatory labels may be required. The translation provider should follow the legal team’s instructions rather than determine legal effect independently.</p>\n<h3>Recommended Project Instruction</h3>\n<p>Create a one-sentence intended-use statement before translation begins. For example:</p>\n<blockquote>\n<p>“Translate the final English agreement into German for negotiation and bilingual legal review; the English version will remain the governing version.”</p>\n</blockquote>\n<p>A clear statement helps translators and reviewers make consistent decisions throughout the project.</p>\n<hr/>\n"
  },
  {
    "id": "confirm-recipient-jurisdiction",
    "title": "2. Confirm the Recipient, Jurisdiction, and Submission Requirements",
    "html": "<p>Do not assume that a generally accepted certification format will satisfy every court, agency, university, regulator, licensing board, or counterparty. Requirements can differ by recipient and may cover certification wording, translator information, notarization, sworn or authorized translators, page formatting, seals, signatures, source-document attachment, delivery method, and acceptable file formats.</p>\n<p>Before work begins, record:</p>\n<ul>\n<li>the full name of the receiving organization;</li>\n<li>the country and jurisdiction;</li>\n<li>the applicable filing or submission instructions;</li>\n<li>whether a complete translation is required;</li>\n<li>whether the source must accompany the translation;</li>\n<li>whether certification, notarization, sworn translation, authentication, or legalization is required;</li>\n<li>whether the translator must meet a particular qualification or registration requirement;</li>\n<li>whether digital signatures and electronic delivery are accepted;</li>\n<li>whether the document must follow a prescribed template or page layout;</li>\n<li>the filing deadline and any time-zone considerations.</li>\n</ul>\n<p>In the United States, a “certified translation” commonly means a translation accompanied by a signed statement addressing completeness, accuracy, and the signer’s competence; it does not necessarily mean the translator holds a particular certification. The American Translators Association recommends that a certification statement identify the document and languages, affirm completeness and accuracy, state the signer’s qualifications, and include the signer’s name, signature, and date.[1]</p>\n<p>Requirements remain recipient-specific. For example, U.S. Citizenship and Immigration Services requires a full English translation of foreign-language documents submitted in support of a benefit request, together with the translator’s certification of competence and of the translation’s completeness and accuracy.[2] The Executive Office for Immigration Review publishes separate requirements for immigration-court filings, including specific information in the certificate of translation.[3]</p>\n<p>For a deeper treatment of official-use requirements, see:</p>\n<ul>\n<li><a href=\"https://www.stepes.com/resources/legal-translation/when-legal-documents-need-certified-translation/\">When Legal Documents Need Certified Translation</a></li>\n<li><a href=\"https://www.stepes.com/resources/legal-translation/legal-translation-vs-certified-translation/\">Legal Translation vs. Certified Translation</a></li>\n<li><a href=\"https://www.stepes.com/certified-translation-services/\">Certified Translation Services</a></li>\n</ul>\n<blockquote>\n<p><strong>Best Practice</strong><br/>\nAsk the receiving authority for its current written requirements whenever possible. Save those instructions with the project record so translators, reviewers, and delivery teams work from the same standard.</p>\n</blockquote>\n<hr/>\n"
  },
  {
    "id": "approved-source-of-truth",
    "title": "3. Establish the Approved Source of Truth",
    "html": "<p>Legal translation quality depends on source control. A project can be translated accurately and still fail operationally if the team translates an outdated draft, omits an exhibit, overlooks handwritten text, or applies reviewer changes to the wrong version.</p>\n<p>Build an approved source package that includes:</p>\n<ul>\n<li>the final or currently authorized source document;</li>\n<li>all schedules, exhibits, annexes, appendices, attachments, and incorporated materials in scope;</li>\n<li>clear scans of stamps, seals, signatures, marginal notes, handwritten entries, and reverse-side content;</li>\n<li>prior approved translations and bilingual reference documents;</li>\n<li>relevant glossaries, defined-term lists, style guidance, and entity-name instructions;</li>\n<li>filing or submission requirements;</li>\n<li>a document inventory showing file names, versions, dates, language pairs, and status;</li>\n<li>a named contact authorized to answer source questions.</li>\n</ul>\n<h3>Separate Authoritative and Reference Materials</h3>\n<p>Label every file as one of the following:</p>\n<ul>\n<li><strong>Translate:</strong> authoritative source content included in scope;</li>\n<li><strong>Reference:</strong> material supplied to guide terminology or context but not to be translated;</li>\n<li><strong>Exclude:</strong> content intentionally outside scope;</li>\n<li><strong>Pending:</strong> content awaiting confirmation.</li>\n</ul>\n<p>This simple classification helps prevent both omissions and accidental translation of internal notes, tracked comments, template instructions, or obsolete drafts.</p>\n<h3>Handle Poor-Quality or Incomplete Sources Explicitly</h3>\n<p>Scanned, handwritten, damaged, partially illegible, or low-resolution legal documents should not be treated as clean source text. The project team should identify unclear segments, document assumptions, and route questions for resolution. When text cannot be read reliably, the translation should use an agreed notation rather than guessing.</p>\n<p>For a complete intake checklist, see <a href=\"https://www.stepes.com/resources/legal-translation/how-to-prepare-legal-documents-for-translation/\">How to Prepare Legal Documents for Translation</a>.</p>\n<hr/>\n"
  },
  {
    "id": "select-translation-review-team",
    "title": "4. Select the Right Translation and Review Team",
    "html": "<p>Legal translation should be assigned according to language direction, jurisdiction, document type, legal subject matter, and intended use—not language fluency alone.</p>\n<h3>Translator Competencies</h3>\n<p>Depending on the project, the translator should have:</p>\n<ul>\n<li>professional fluency in the source and target languages;</li>\n<li>strong target-language legal writing skills;</li>\n<li>experience with the relevant document type;</li>\n<li>familiarity with applicable legal concepts and terminology;</li>\n<li>the ability to research and document terminology decisions;</li>\n<li>experience preserving legal structure, defined terms, and cross-references;</li>\n<li>the judgment to escalate ambiguity rather than invent a solution;</li>\n<li>appropriate confidentiality and technology practices.</li>\n</ul>\n<h3>Independent Revision</h3>\n<p>For high-risk legal content, use a second qualified linguist to compare the complete target text against the source. Independent revision should evaluate meaning, omissions, additions, terminology, internal consistency, and suitability for the intended use.</p>\n<p>ISO 17100 describes requirements for the core processes, resources, and other aspects of professional translation services, including process controls that support delivery against agreed specifications.[4] A standard can provide a useful process framework, but it does not replace recipient-specific legal, filing, or certification requirements.</p>\n<h3>Legal Review and Linguistic Review Are Different</h3>\n<p>A qualified translator or reviser assesses cross-language accuracy and target-language quality. Counsel or an authorized legal reviewer assesses legal strategy, legal effect, local-law suitability, and whether the translated text should be adopted, filed, executed, or published.</p>\n<p>One reviewer may possess both capabilities, but the responsibilities should still be defined separately. Do not assume that a lawyer who speaks the target language has the time or translation expertise to conduct a complete linguistic revision, or that a legal translator is authorized to provide legal advice.</p>\n<hr/>\n"
  },
  {
    "id": "preserve-legal-meaning",
    "title": "5. Preserve Legal Meaning Across Languages and Legal Systems",
    "html": "<p>Legal concepts do not always map cleanly between languages or legal systems. A target-language term may look equivalent while carrying a different scope, procedure, or institutional meaning. The goal is not simply to replace words; it is to preserve the source meaning and make the target text usable for its intended purpose without silently changing legal content.</p>\n<h3>Use Context Before Choosing an Equivalent</h3>\n<p>Translators should consider:</p>\n<ul>\n<li>the governing law or legal system referenced in the source;</li>\n<li>the target reader and jurisdiction;</li>\n<li>the document type and procedural setting;</li>\n<li>definitions elsewhere in the document;</li>\n<li>how the term functions within the clause;</li>\n<li>prior approved translations;</li>\n<li>whether the source intentionally uses broad, narrow, ambiguous, or negotiated wording.</li>\n</ul>\n<h3>Do Not “Improve” the Source Without Authorization</h3>\n<p>Legal translation is not an opportunity to repair an ambiguous contract, modernize legal drafting, add missing protections, or harmonize inconsistent source clauses unless the client specifically requests a separate drafting or legal-review service.</p>\n<p>When the source contains an ambiguity, inconsistency, error, or culturally specific legal concept, the translator should:</p>\n<ol>\n<li>preserve the issue where a faithful translation is possible;</li>\n<li>raise a documented query when the issue materially affects the target text;</li>\n<li>provide clearly labeled options when requested;</li>\n<li>avoid resolving legal uncertainty through an undocumented assumption.</li>\n</ol>\n<h3>Use Translator Notes Sparingly</h3>\n<p>A translator’s note may be useful when:</p>\n<ul>\n<li>a legal institution or concept has no direct target-language equivalent;</li>\n<li>a source error or illegible segment must be disclosed;</li>\n<li>a transliteration choice requires explanation;</li>\n<li>a seal, stamp, signature, or handwritten annotation must be described;</li>\n<li>an untranslatable wordplay, abbreviation, or document feature affects understanding.</li>\n</ul>\n<p>Notes should be concise, neutral, and clearly distinguished from source content. The legal team or receiving institution should confirm whether notes are acceptable in the final document.</p>\n<hr/>\n"
  },
  {
    "id": "control-legal-terminology",
    "title": "6. Control Legal Terminology and Defined Terms",
    "html": "<p>Terminology consistency is central to legal document usability. Defined terms, party names, corporate entities, agencies, document titles, recurring clauses, statutory references, remedies, obligations, and procedural terms should remain consistent unless the source context requires a deliberate difference.</p>\n<h3>Build the Language Assets Before Translation</h3>\n<p>For substantial or recurring projects, prepare:</p>\n<ul>\n<li>a bilingual legal glossary or termbase;</li>\n<li>a register of source and target defined terms;</li>\n<li>approved treatments for personal, corporate, and institutional names;</li>\n<li>abbreviation and acronym rules;</li>\n<li>transliteration rules;</li>\n<li>style guidance for capitalization, punctuation, dates, numbers, and citations;</li>\n<li>prior approved translations;</li>\n<li>translation memory containing validated recurring content.</li>\n</ul>\n<p><a href=\"https://www.stepes.com/terminology-management/\">Terminology Management</a> provides a controlled source of approved multilingual terms, while <a href=\"https://www.stepes.com/translation-memory/\">Translation Memory</a> helps reuse validated segments and recurring clauses across related documents.</p>\n<h3>Treat Defined Terms as Controlled Data</h3>\n<p>Create a defined-term register for contracts, policies, corporate documents, and other materials that rely heavily on capitalized definitions. The register should show:</p>\n<div class=\"table-shell\"><table>\n<thead>\n<tr>\n<th>Source Defined Term</th>\n<th>Approved Target Term</th>\n<th>First Definition Location</th>\n<th>Notes or Restrictions</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td data-label=\"Source Defined Term\">“Agreement”</td>\n<td data-label=\"Approved Target Term\">Approved equivalent</td>\n<td data-label=\"First Definition Location\">Preamble</td>\n<td data-label=\"Notes or Restrictions\">Capitalize consistently</td>\n</tr>\n<tr>\n<td data-label=\"Source Defined Term\">“Effective Date”</td>\n<td data-label=\"Approved Target Term\">Approved equivalent</td>\n<td data-label=\"First Definition Location\">Section 1.1</td>\n<td data-label=\"Notes or Restrictions\">Do not substitute “commencement date”</td>\n</tr>\n<tr>\n<td data-label=\"Source Defined Term\">“Confidential Information”</td>\n<td data-label=\"Approved Target Term\">Approved equivalent</td>\n<td data-label=\"First Definition Location\">Section 4.1</td>\n<td data-label=\"Notes or Restrictions\">Match NDA and related exhibits</td>\n</tr>\n</tbody>\n</table></div>\n<p>Run a final consistency check for every defined term, including plural forms, grammatical variants, and occurrences in exhibits or amendments.</p>\n<h3>Preserve Names and Identifiers Carefully</h3>\n<p>Confirm how to handle:</p>\n<ul>\n<li>personal names;</li>\n<li>corporate and subsidiary names;</li>\n<li>agency and court names;</li>\n<li>addresses;</li>\n<li>registration numbers;</li>\n<li>case numbers;</li>\n<li>trademarked names;</li>\n<li>bilingual or previously registered entity names.</li>\n</ul>\n<p>The right approach may be translation, transliteration, preservation in the original script, use of an official registered name, or a bilingual presentation. Apply the approved treatment consistently.</p>\n<hr/>\n"
  },
  {
    "id": "preserve-formatting-reference-integrity",
    "title": "7. Preserve Formatting, Numbering, and Reference Integrity",
    "html": "<p>Formatting can carry operational and legal significance. Contracts, pleadings, court orders, certificates, corporate records, patents, and regulatory filings often depend on clause numbering, table structure, page references, signatures, stamps, exhibits, footnotes, tracked changes, and citation formats.</p>\n<h3>Preserve Traceability</h3>\n<p>The translated document should allow reviewers to locate corresponding source content efficiently. Depending on the project, this may require:</p>\n<ul>\n<li>matching headings and numbering hierarchies;</li>\n<li>preserving paragraph and clause identifiers;</li>\n<li>maintaining table and schedule structure;</li>\n<li>aligning exhibit, annex, and appendix references;</li>\n<li>preserving footnote and endnote numbering;</li>\n<li>reproducing or describing stamps, seals, signatures, and handwritten notes;</li>\n<li>retaining source page references where required;</li>\n<li>using a bilingual or side-by-side layout for legal review;</li>\n<li>clearly labeling text that appears in images or non-editable graphics.</li>\n</ul>\n<h3>Verify Cross-References Programmatically and Manually</h3>\n<p>Automated checks can help flag numbers, dates, missing text, and inconsistent references, but human review is still required to confirm that “Section 7.3,” “Schedule B,” “Exhibit 2,” and similar references point to the correct target-language content.</p>\n<h3>Distinguish Translation from Desktop Publishing</h3>\n<p>For complex PDFs, scanned records, forms, certificates, or heavily formatted agreements, linguistic translation and document formatting may be separate workstreams. Define whether the deliverable must:</p>\n<ul>\n<li>mirror the source layout;</li>\n<li>support line-by-line comparison;</li>\n<li>fit an official form;</li>\n<li>preserve editable structure;</li>\n<li>present source and target together;</li>\n<li>include certification pages or source attachments.</li>\n</ul>\n<p>Confirm these expectations before pricing and scheduling the project.</p>\n<hr/>\n"
  },
  {
    "id": "protect-confidential-information",
    "title": "8. Protect Confidential and Sensitive Information",
    "html": "<p>Legal translation may involve privileged communications, personally identifiable information, financial records, intellectual property, litigation strategy, employment information, investigation materials, trade secrets, and transaction data. Security controls should cover the entire content lifecycle.</p>\n<h3>Security Questions to Resolve Before Kickoff</h3>\n<ul>\n<li>Which data classifications apply?</li>\n<li>Is the content subject to an NDA, protective order, client policy, or regulatory requirement?</li>\n<li>Which people and systems may access the files?</li>\n<li>Where will files be stored and processed?</li>\n<li>May subcontractors or external linguists be used?</li>\n<li>Are AI or machine translation tools permitted?</li>\n<li>May project data be retained in translation memory or terminology systems?</li>\n<li>What retention and deletion rules apply?</li>\n<li>How will reviewer comments and temporary working files be protected?</li>\n<li>Which delivery and authentication methods are required?</li>\n</ul>\n<h3>Apply Least-Access Principles</h3>\n<p>Give project access only to people who need it for assigned tasks. Use role-based permissions, secure file exchange, controlled reviewer access, and documented offboarding or access removal when a project is complete.</p>\n<h3>Confirm Technology Terms Before Using AI</h3>\n<p>Do not paste confidential legal content into consumer AI or translation tools without reviewing data-use terms, retention behavior, training policies, access controls, hosting location, and contractual protections. The legal and security teams should approve the tools and use cases appropriate for the matter.</p>\n<p>Confidentiality obligations and questions of legal privilege are fact- and jurisdiction-specific. A translation provider should support the client’s required controls but should not make blanket assurances that a particular workflow preserves privilege in every circumstance.</p>\n<p>For broader planning guidance, see the <a href=\"https://www.stepes.com/resources/security-and-compliance/\">Security and Compliance Resources</a>.</p>\n<hr/>\n"
  },
  {
    "id": "use-ai-by-risk",
    "title": "9. Use AI According to Legal and Information Risk",
    "html": "<p>AI can support legal translation, but it should be introduced through a controlled workflow rather than used as an automatic default for every document. The appropriate approach depends on intended use, legal sensitivity, confidentiality, language pair, source quality, repetition, terminology maturity, and review capacity.</p>\n<h3>AI Risk-Routing Matrix</h3>\n<div class=\"table-shell\"><table>\n<thead>\n<tr>\n<th>Content Profile</th>\n<th>AI Use</th>\n<th>Human Review</th>\n<th>Typical Examples</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td data-label=\"Content Profile\"><strong>Low-risk, non-confidential, informational content</strong></td>\n<td data-label=\"AI Use\">May support draft translation</td>\n<td data-label=\"Human Review\">Professional validation based on intended use</td>\n<td data-label=\"Typical Examples\">Public background materials, nonbinding summaries</td>\n</tr>\n<tr>\n<td data-label=\"Content Profile\"><strong>Repetitive legal operations content with approved terminology</strong></td>\n<td data-label=\"AI Use\">May support controlled drafting and consistency checks</td>\n<td data-label=\"Human Review\">Full review by a qualified legal linguist</td>\n<td data-label=\"Typical Examples\">Standardized policies, recurring forms, established clauses</td>\n</tr>\n<tr>\n<td data-label=\"Content Profile\"><strong>Confidential or commercially sensitive documents</strong></td>\n<td data-label=\"AI Use\">Only in approved, contractually governed systems</td>\n<td data-label=\"Human Review\">Full legal-linguistic review and security controls</td>\n<td data-label=\"Typical Examples\">Commercial agreements, internal investigations, due diligence</td>\n</tr>\n<tr>\n<td data-label=\"Content Profile\"><strong>Rights-, obligation-, or deadline-sensitive content</strong></td>\n<td data-label=\"AI Use\">Use cautiously and only within an approved workflow</td>\n<td data-label=\"Human Review\">Independent revision and legal review where appropriate</td>\n<td data-label=\"Typical Examples\">Contracts, employment terms, compliance obligations</td>\n</tr>\n<tr>\n<td data-label=\"Content Profile\"><strong>Court, regulatory, immigration, or official submissions</strong></td>\n<td data-label=\"AI Use\">May assist controlled production, but raw output should not be relied on</td>\n<td data-label=\"Human Review\">Complete professional review, formatting QA, recipient-aligned certification</td>\n<td data-label=\"Typical Examples\">Pleadings, evidence, filings, official records</td>\n</tr>\n<tr>\n<td data-label=\"Content Profile\"><strong>Highly novel, ambiguous, or jurisdiction-specific content</strong></td>\n<td data-label=\"AI Use\">Limited support for research or consistency only</td>\n<td data-label=\"Human Review\">Translator-led production with subject-matter and legal escalation</td>\n<td data-label=\"Typical Examples\">Complex litigation, novel legislation, bespoke transaction language</td>\n</tr>\n</tbody>\n</table></div>\n<h3>What AI Can Support</h3>\n<p>Within an approved environment, AI and language technology may assist with:</p>\n<ul>\n<li>first-pass translation for suitable content;</li>\n<li>terminology extraction and term consistency;</li>\n<li>translation memory matching;</li>\n<li>repeated-clause identification;</li>\n<li>number, date, tag, and omission checks;</li>\n<li>bilingual alignment;</li>\n<li>reviewer routing and workflow tracking.</li>\n</ul>\n<h3>What Human Review Must Confirm</h3>\n<p>Qualified reviewers should confirm:</p>\n<ul>\n<li>complete and accurate transfer of meaning;</li>\n<li>defined terms and clause relationships;</li>\n<li>rights, duties, conditions, exceptions, remedies, and deadlines;</li>\n<li>jurisdiction-specific concepts;</li>\n<li>names, numbers, dates, currencies, and identifiers;</li>\n<li>omissions, additions, or unsupported inferences;</li>\n<li>target-language legal style and readability;</li>\n<li>suitability for the document’s intended use;</li>\n<li>compliance with confidentiality and recipient requirements.</li>\n</ul>\n<p>ISO 18587 provides process and competency requirements for full human post-editing of machine translation output.[5] It is a useful reference for post-editing processes, but legal projects may require additional translation, revision, legal review, security, and submission controls beyond general machine-translation post-editing.</p>\n<p>For a deeper risk discussion, see <a href=\"https://www.stepes.com/resources/legal-translation/ai-in-legal-translation/\">AI in Legal Translation</a>.</p>\n<hr/>\n"
  },
  {
    "id": "manage-versions-redlines",
    "title": "10. Manage Versions, Redlines, and Source Changes",
    "html": "<p>Legal documents often change during negotiation, litigation, regulatory review, internal approval, or transaction work. Version control should be designed into the translation process rather than handled informally after changes appear.</p>\n<h3>Establish a Version Protocol</h3>\n<p>Each file name should communicate:</p>\n<ul>\n<li>matter or project name;</li>\n<li>document title;</li>\n<li>source or target language;</li>\n<li>version number or date;</li>\n<li>draft, review, approved, or final status;</li>\n<li>whether the file is clean, redlined, bilingual, or certified.</li>\n</ul>\n<h3>Use a Change-Based Translation Workflow</h3>\n<p>When the source changes:</p>\n<ol>\n<li>confirm the new source is authorized;</li>\n<li>compare it with the previously translated version;</li>\n<li>identify additions, deletions, and modified language;</li>\n<li>translate only the confirmed changes where appropriate;</li>\n<li>propagate terminology decisions consistently;</li>\n<li>recheck affected cross-references, numbering, and exhibits;</li>\n<li>route revised content through the required review steps;</li>\n<li>archive superseded versions without confusing them with active files.</li>\n</ol>\n<h3>Consolidate Legal Feedback</h3>\n<p>Ask the client to provide one coordinated set of comments per review cycle whenever possible. Conflicting edits from attorneys, business stakeholders, regional teams, and external counsel should be resolved before they are applied across languages.</p>\n<p>Record approved changes in the glossary, defined-term register, style guidance, and translation memory so later documents do not reintroduce rejected wording.</p>\n<hr/>\n"
  },
  {
    "id": "independent-review-final-qa",
    "title": "11. Complete Independent Review and Final Quality Assurance",
    "html": "<p>Quality assurance should confirm both linguistic accuracy and delivery readiness. It is the final control that brings together the intended use, recipient requirements, terminology, structure, security, version status, and required supporting documents.</p>\n<h3>Recommended Review Sequence</h3>\n<ol>\n<li><strong>Translator self-check:</strong> The translator reviews the complete target text against the source and resolves obvious errors or omissions.</li>\n<li><strong>Independent revision:</strong> A second qualified linguist compares source and target for meaning, completeness, terminology, and target-language quality.</li>\n<li><strong>Subject-matter or legal review:</strong> An authorized reviewer addresses legal suitability, market-specific legal language, business intent, and unresolved legal questions where required.</li>\n<li><strong>Formatting and technical QA:</strong> The team checks numbering, references, tables, links, tags, seals, signatures, headers, footers, and file behavior.</li>\n<li><strong>Final verification:</strong> A responsible project owner confirms that approved changes were applied and that the delivery package matches the project specification.</li>\n</ol>\n"
  },
  {
    "id": "roles-responsibilities",
    "title": "12. Legal Translation Roles and Responsibilities",
    "html": "<p>A clear responsibility model prevents duplicated review, conflicting feedback, and unowned decisions.</p>\n<div class=\"table-shell\"><table>\n<thead>\n<tr>\n<th>Responsibility</th>\n<th>Client Legal or Business Owner</th>\n<th>Translation Project Manager</th>\n<th>Legal Translator</th>\n<th>Independent Reviser</th>\n<th>Counsel or Authorized Legal Reviewer</th>\n<th>Formatting / QA Specialist</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td data-label=\"Responsibility\">Define intended use and recipient</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns</strong></td>\n<td data-label=\"Translation Project Manager\">Supports</td>\n<td data-label=\"Legal Translator\">Informed</td>\n<td data-label=\"Independent Reviser\">Informed</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Advises</td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Confirm filing and certification requirements</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns</strong></td>\n<td data-label=\"Translation Project Manager\">Records and implements</td>\n<td data-label=\"Legal Translator\">Informed</td>\n<td data-label=\"Independent Reviser\">Informed</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Advises or approves</td>\n<td data-label=\"Formatting / QA Specialist\">Implements presentation requirements</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Approve source package and scope</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns</strong></td>\n<td data-label=\"Translation Project Manager\">Controls</td>\n<td data-label=\"Legal Translator\">Confirms receipt</td>\n<td data-label=\"Independent Reviser\">Informed</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">May advise</td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Translate source content</td>\n<td data-label=\"Client Legal or Business Owner\">Informed</td>\n<td data-label=\"Translation Project Manager\">Coordinates</td>\n<td data-label=\"Legal Translator\"><strong>Owns</strong></td>\n<td data-label=\"Independent Reviser\">Reviews</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Consulted as needed</td>\n<td data-label=\"Formatting / QA Specialist\">Supports file handling</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Maintain glossary and defined terms</td>\n<td data-label=\"Client Legal or Business Owner\">Approves business/legal preferences</td>\n<td data-label=\"Translation Project Manager\">Coordinates</td>\n<td data-label=\"Legal Translator\">Proposes and applies</td>\n<td data-label=\"Independent Reviser\">Verifies</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Approves legal choices where needed</td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Resolve source ambiguity</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns response</strong></td>\n<td data-label=\"Translation Project Manager\">Routes questions</td>\n<td data-label=\"Legal Translator\">Raises queries</td>\n<td data-label=\"Independent Reviser\">May raise queries</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Advises</td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Conduct independent linguistic revision</td>\n<td data-label=\"Client Legal or Business Owner\">Informed</td>\n<td data-label=\"Translation Project Manager\">Coordinates</td>\n<td data-label=\"Legal Translator\">Responds</td>\n<td data-label=\"Independent Reviser\"><strong>Owns</strong></td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Informed</td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Assess local legal suitability</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns decision</strong></td>\n<td data-label=\"Translation Project Manager\">Coordinates</td>\n<td data-label=\"Legal Translator\">Provides linguistic context</td>\n<td data-label=\"Independent Reviser\">Provides linguistic context</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\"><strong>Owns legal review</strong></td>\n<td data-label=\"Formatting / QA Specialist\">Informed</td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Verify formatting and references</td>\n<td data-label=\"Client Legal or Business Owner\">Reviews key requirements</td>\n<td data-label=\"Translation Project Manager\">Coordinates</td>\n<td data-label=\"Legal Translator\">Checks during translation</td>\n<td data-label=\"Independent Reviser\">Checks during revision</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">Reviews where legally relevant</td>\n<td data-label=\"Formatting / QA Specialist\"><strong>Owns technical QA</strong></td>\n</tr>\n<tr>\n<td data-label=\"Responsibility\">Approve final delivery</td>\n<td data-label=\"Client Legal or Business Owner\"><strong>Owns acceptance</strong></td>\n<td data-label=\"Translation Project Manager\"><strong>Owns package verification</strong></td>\n<td data-label=\"Legal Translator\">Informed</td>\n<td data-label=\"Independent Reviser\">Informed</td>\n<td data-label=\"Counsel or Authorized Legal Reviewer\">May approve</td>\n<td data-label=\"Formatting / QA Specialist\">Confirms technical readiness</td>\n</tr>\n</tbody>\n</table></div>\n<p>The exact model can be adapted, but every high-impact decision should have one clearly accountable owner.</p>\n<hr/>\n"
  },
  {
    "id": "common-practices-to-avoid",
    "title": "13. Common Practices to Avoid",
    "html": "<p>Avoid these recurring causes of translation risk:</p>\n<ul>\n<li>beginning translation before the intended use and recipient are known;</li>\n<li>using a general-purpose translator without relevant legal or document-type experience;</li>\n<li>relying on raw AI or machine translation for external or official legal use;</li>\n<li>translating an outdated draft or incomplete document package;</li>\n<li>allowing defined terms to vary across clauses, exhibits, and amendments;</li>\n<li>treating counsel review as a substitute for full linguistic revision without agreeing on scope;</li>\n<li>sending sensitive files through unapproved tools or accounts;</li>\n<li>assuming certification, notarization, or sworn-translation requirements are universal;</li>\n<li>changing legal meaning to make the target text sound smoother;</li>\n<li>accepting reviewer edits without checking their effect across the full document set;</li>\n<li>completing language review without checking numbering, references, seals, signatures, and final files.</li>\n</ul>\n<p>For a more detailed risk analysis, read <a href=\"https://www.stepes.com/resources/legal-translation/common-legal-translation-risks/\">Common Legal Translation Risks and How to Reduce Them</a>.</p>\n<hr/>\n"
  }
];
const qaGroups = [
  {
    "title": "Completeness",
    "items": [
      "All source text in scope has been translated.",
      "Headers, footers, tables, footnotes, text boxes, image text, stamps, seals, signatures, and handwritten annotations have been handled as instructed.",
      "Exhibits, schedules, annexes, appendices, and certification pages are present.",
      "No translator comments, internal notes, tracked changes, or hidden text remain unintentionally."
    ]
  },
  {
    "title": "Meaning and Terminology",
    "items": [
      "Rights, obligations, conditions, exceptions, remedies, and deadlines match the source.",
      "Defined terms are complete and consistent.",
      "Party names, entity names, court names, agency names, and document titles follow the approved treatment.",
      "Jurisdiction-specific terms and concepts have been reviewed appropriately.",
      "No unsupported additions, omissions, or assumptions were introduced."
    ]
  },
  {
    "title": "Data Accuracy",
    "items": [
      "Dates, times, numbers, percentages, currencies, addresses, registration numbers, case numbers, citations, and identifiers have been verified.",
      "Decimal, date, and number conventions are appropriate for the intended use without altering substantive values.",
      "Tables and financial figures reconcile with the source."
    ]
  },
  {
    "title": "Structure and Presentation",
    "items": [
      "Headings, clause numbering, bullets, schedules, exhibits, and cross-references align correctly.",
      "Signature blocks, seals, stamps, notations, and page labels are complete.",
      "Bilingual or side-by-side layouts align source and target content accurately.",
      "The requested file format opens and functions correctly."
    ]
  },
  {
    "title": "Approval and Delivery",
    "items": [
      "All authorized reviewer comments have been resolved or documented.",
      "The correct final source and target versions are being delivered.",
      "Required certification, notarization, sworn-translation, or supporting materials are included.",
      "File names, packaging, encryption, access permissions, and delivery instructions are correct.",
      "Retention, deletion, and language-asset instructions have been followed."
    ]
  }
];
const faqs = [
  {
    "question": "What Is Legal Translation?",
    "answerHtml": "<p>Legal translation is the professional translation of legal or law-related content from one language into another while preserving meaning, terminology, document structure, and suitability for the intended use. Common materials include contracts, court documents, corporate records, compliance policies, patents, immigration records, official certificates, and regulatory submissions.</p>\n"
  },
  {
    "question": "Why Does Legal Translation Require Specialized Expertise?",
    "answerHtml": "<p>Legal language contains defined terms, procedural expressions, jurisdiction-specific concepts, rights, obligations, exceptions, deadlines, and cross-references. A fluent translation can still be unsuitable if it changes legal meaning, uses inconsistent terminology, or fails to meet the document’s practical review or submission needs.</p>\n"
  },
  {
    "question": "Who Should Translate Legal Documents?",
    "answerHtml": "<p>Legal documents should be handled by professional translators with the appropriate source- and target-language competence, legal subject-matter knowledge, document-type experience, research ability, and confidentiality practices. High-risk work should normally include independent revision by a second qualified linguist and legal review where the intended use requires it.</p>\n"
  },
  {
    "question": "Does Every Legal Document Need a Certified Translation?",
    "answerHtml": "<p>No. Certification is commonly required for certain official submissions, but the requirement depends on the receiving authority, jurisdiction, and purpose. Confirm whether the recipient requires certification, notarization, sworn translation, an authorized translator, authentication, or another specific form before translation begins.</p>\n"
  },
  {
    "question": "What Is the Difference Between a Certified Translator and a Certified Translation?",
    "answerHtml": "<p>The distinction varies by country. In the United States, a certified translation generally refers to a translation accompanied by a signed certification statement; the signer does not necessarily need to hold a particular translator credential. Other jurisdictions may require sworn, authorized, court-appointed, or registered translators. Always follow the receiving authority’s rules.</p>\n"
  },
  {
    "question": "Can AI Be Used to Translate Legal Documents?",
    "answerHtml": "<p>AI may support approved legal translation workflows through draft translation, terminology extraction, translation memory, consistency checks, and automated QA. Its use should be based on intended use, confidentiality, content risk, and the availability of qualified human review. Raw AI output should not be relied on for legal, external, or official use without appropriate professional validation.</p>\n"
  },
  {
    "question": "How Can Organizations Improve Legal Translation Consistency?",
    "answerHtml": "<p>Use a controlled glossary, defined-term register, translation memory, prior approved translations, style guidance, and a centralized review process. Record approved terminology changes so they are applied consistently to related contracts, policies, exhibits, amendments, and future projects.</p>\n"
  },
  {
    "question": "Should a Lawyer Review the Translation?",
    "answerHtml": "<p>Legal review may be appropriate when the target text will be executed, filed, published, or relied on in a specific jurisdiction. Legal review and linguistic revision serve different purposes. The workflow should define whether counsel is reviewing legal effect, local-law suitability, business intent, language accuracy, or some combination of these areas.</p>\n"
  },
  {
    "question": "How Should Legal Teams Handle Source Changes After Translation Starts?",
    "answerHtml": "<p>Confirm the new source version, identify the exact changes, translate and review affected content, recheck cross-references and defined terms, and archive superseded files clearly. Do not overwrite versions without maintaining a reliable record of what changed and which version was approved.</p>\n"
  },
  {
    "question": "What Should Be Checked Before Final Delivery?",
    "answerHtml": "<p>Verify completeness, meaning, defined terms, names, dates, numbers, currencies, cross-references, exhibits, formatting, signatures, stamps, certification, file names, version status, access controls, and recipient instructions. Confirm that all authorized comments have been resolved and that the delivered package uses the correct final files.</p>\n<hr/>\n"
  }
];
const relatedGuides = [
  {
    "title": "When Legal Documents Need Certified Translation",
    "url": "https://www.stepes.com/resources/legal-translation/when-legal-documents-need-certified-translation/",
    "description": "Understand when courts, immigration authorities, government agencies, universities, licensing boards, and other institutions may require a certified translation."
  },
  {
    "title": "Legal Translation vs. Certified Translation",
    "url": "https://www.stepes.com/resources/legal-translation/legal-translation-vs-certified-translation/",
    "description": "Compare legal translation expertise with the certification formalities used for official submission."
  },
  {
    "title": "How to Prepare Legal Documents for Translation",
    "url": "https://www.stepes.com/resources/legal-translation/how-to-prepare-legal-documents-for-translation/",
    "description": "Organize source files, exhibits, reference materials, terminology, formatting instructions, deadlines, and review responsibilities before kickoff."
  },
  {
    "title": "Common Legal Translation Risks and How to Reduce Them",
    "url": "https://www.stepes.com/resources/legal-translation/common-legal-translation-risks/",
    "description": "Review common risks involving terminology, jurisdictional nuance, omissions, formatting, confidentiality, certification, and final review."
  },
  {
    "title": "AI in Legal Translation",
    "url": "https://www.stepes.com/resources/legal-translation/ai-in-legal-translation/",
    "description": "Learn how controlled AI-assisted workflows, translation memory, terminology tools, and professional human review can support legal translation."
  }
];
const sources = [
  {
    "label": "American Translators Association, “What Is a Certified Translation?”",
    "url": "https://www.atanet.org/client-assistance/what-is-a-certified-translation/"
  },
  {
    "label": "U.S. Citizenship and Immigration Services, Policy Manual, Volume 1, Part E, Chapter 6, “Evidence.”",
    "url": "https://www.uscis.gov/policy-manual/volume-1-part-e-chapter-6"
  },
  {
    "label": "U.S. Department of Justice, Executive Office for Immigration Review, Policy Manual, Part II, Chapter 2.3, “Documents.”",
    "url": "https://www.justice.gov/eoir/policy-manual-eoir/part-II/icpm/chapter-2-3"
  },
  {
    "label": "International Organization for Standardization, ISO 17100:2015, “Translation services — Requirements for translation services.”",
    "url": "https://www.iso.org/standard/59149.html"
  },
  {
    "label": "International Organization for Standardization, ISO 18587:2017, “Translation services — Post-editing of machine translation output — Requirements.”",
    "url": "https://www.iso.org/standard/62970.html"
  }
];

const tocItems = [
  { id: "eight-control-framework", label: "Eight-Control Legal Translation Framework" },
  { id: "define-intended-use", label: "Define the Intended Use and Legal Effect" },
  { id: "confirm-recipient-jurisdiction", label: "Confirm the Recipient and Requirements" },
  { id: "approved-source-of-truth", label: "Establish the Approved Source of Truth" },
  { id: "select-translation-review-team", label: "Select the Translation and Review Team" },
  { id: "preserve-legal-meaning", label: "Preserve Legal Meaning Across Systems" },
  { id: "control-legal-terminology", label: "Control Terminology and Defined Terms" },
  { id: "preserve-formatting-reference-integrity", label: "Preserve Formatting and References" },
  { id: "protect-confidential-information", label: "Protect Confidential Information" },
  { id: "use-ai-by-risk", label: "Use AI According to Risk" },
  { id: "manage-versions-redlines", label: "Manage Versions and Redlines" },
  { id: "independent-review-final-qa", label: "Complete Review and Final QA" },
  { id: "final-legal-translation-qa-checklist", label: "Final Delivery-Readiness Checklist" },
  { id: "roles-responsibilities", label: "Clarify Roles and Responsibilities" },
  { id: "common-practices-to-avoid", label: "Common Practices to Avoid" },
  { id: "legal-translation-faqs", label: "Legal Translation FAQs" },
];

const styles = "\n:root {\n  --stepes-magenta: #C11D63;\n  --stepes-magenta-dark: #9F1D55;\n  --stepes-magenta-deep: #7A1542;\n  --stepes-blush: #FDF2F7;\n  --stepes-pink-light: #F2A7C6;\n  --ink: #1F2530;\n  --ink-soft: #4D5665;\n  --muted: #687181;\n  --line: #E1E4EA;\n  --line-dark: rgba(255,255,255,.16);\n  --surface: #F7F8FA;\n  --dark: #222735;\n  --white: #FFFFFF;\n  --shadow: 0 22px 55px rgba(35, 27, 42, .10);\n}\n.stepes-legal-guide, .stepes-legal-guide * { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; }\nbody { margin: 0; }\n.stepes-legal-guide {\n  color: var(--ink);\n  background: var(--white);\n  font-family: Inter, Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 1.68;\n  overflow-x: hidden;\n  overflow-x: clip;\n}\n.stepes-legal-guide a { color: var(--stepes-magenta); text-decoration: none; font-weight: 600; }\n.stepes-legal-guide a:hover { color: var(--stepes-magenta-dark); text-decoration: underline; text-underline-offset: 4px; }\n.article-copy, .workflow-card, .source-list a, .related-card, .cta-panel { overflow-wrap: anywhere; }\n.source-list a { min-width: 0; }\n.stepes-legal-guide a:focus-visible, .stepes-legal-guide button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 4px; }\n.stepes-legal-guide .button:focus-visible { border-radius: 999px; }\n.stepes-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }\n.eyebrow { margin: 0 0 18px; color: var(--stepes-magenta); font-size: 11px; line-height: 1.3; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; }\n.eyebrow-dark { color: var(--stepes-pink-light); }\n.guide-hero { padding: 104px 0 88px; background: linear-gradient(180deg, #fff 0%, #fff 73%, #fbf7f9 100%); border-bottom: 1px solid var(--line); }\n.hero-inner { text-align: center; }\n.guide-hero h1 { max-width: 980px; margin: 0 auto; font-size: 48px; line-height: 1.08; letter-spacing: -.035em; font-weight: 600; }\n.hero-deck { max-width: 840px; margin: 28px auto 0; color: var(--ink-soft); font-size: 19px; line-height: 1.7; }\n.hero-deck + .hero-deck { margin-top: 10px; }\n.hero-meta { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px 24px; margin-top: 28px; color: var(--muted); font-size: 14px; }\n.hero-meta span { position: relative; white-space: nowrap; }\n.hero-meta span:not(:last-child)::after { content: ''; position: absolute; right: -13px; top: 50%; width: 3px; height: 3px; border-radius: 50%; background: #B7BDC7; }\n.hero-actions { display: flex; justify-content: center; gap: 12px; margin-top: 34px; flex-wrap: wrap; }\n.button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 9px; padding: 12px 24px; border-radius: 999px; font-size: 16px; line-height: 1.2; font-weight: 600; border: 1px solid transparent; transition: .2s ease; }\n.button-primary, .button-primary:link, .button-primary:visited, .button-primary:hover, .button-primary:active, .button-primary:focus, .button-primary:focus-visible { color: #fff !important; }\n.button-primary { background: var(--stepes-magenta); box-shadow: 0 10px 24px rgba(193,29,99,.20); }\n.button-primary:hover { background: var(--stepes-magenta-dark); text-decoration: none !important; transform: translateY(-1px); }\n.button-secondary { background: #fff; color: var(--ink) !important; border-color: #C9CED7; }\n.button-secondary:hover { border-color: var(--stepes-magenta); color: var(--stepes-magenta) !important; text-decoration: none !important; }\n.button svg { width: 18px; height: 18px; stroke: currentColor; fill: none; }\n.hero-art { width: min(100%, 830px); margin: 54px auto 0; padding: 30px 34px; border: 1px solid var(--line); border-radius: 30px; background: rgba(255,255,255,.92); box-shadow: var(--shadow); }\n.hero-art svg { display: block; width: 100%; height: auto; }\n.editorial-note { width: min(100%, 840px); margin: 28px auto 0; padding: 18px 22px; border-left: 3px solid var(--stepes-magenta); background: var(--stepes-blush); text-align: left; font-size: 16px; line-height: 1.65; border-radius: 0 18px 18px 0; }\n.editorial-note strong { color: var(--stepes-magenta-deep); }\n.article-note { margin: 0 auto 64px; }\n.takeaways { padding: 80px 0; background: var(--stepes-blush); }\n.takeaways-head { display: grid; grid-template-columns: minmax(220px, .75fr) minmax(0, 1.75fr); gap: 80px; align-items: start; }\n.takeaways h2 { margin: 0; font-size: 36px; line-height: 1.15; font-weight: 600; letter-spacing: -.025em; }\n.takeaways-intro { margin: 22px 0 0; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.takeaway-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 44px; border-top: 1px solid rgba(122,21,66,.18); }\n.takeaway-item { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 13px; padding: 20px 0; border-bottom: 1px solid rgba(122,21,66,.18); font-size: 16px; line-height: 1.55; }\n.takeaway-item svg { width: 21px; height: 21px; margin-top: 2px; stroke: var(--stepes-magenta); fill: none; stroke-width: 1.8; }\n.article-zone { padding: 96px 0 0; }\n.article-grid { display: grid; grid-template-columns: 260px minmax(0,760px); gap: 68px; max-width: 1088px; margin: 0 auto; align-items: start; }\n.toc-desktop { position: sticky; top: 96px; padding: 4px 0 24px; max-height: calc(100vh - 120px); overflow: auto; }\n.toc-desktop h2 { margin: 0 0 18px; font-size: 16px; font-weight: 600; }\n.toc-list { list-style: none; margin: 0; padding: 0 0 0 16px; border-left: 1px solid var(--line); }\n.toc-list li { margin: 0; }\n.toc-list a { position: relative; display: block; padding: 7px 0 7px 13px; color: #596272; font-size: 14px; line-height: 1.35; font-weight: 400; text-decoration: none; }\n.toc-list a::before { content: ''; position: absolute; left: -17px; top: 8px; bottom: 8px; width: 2px; background: transparent; }\n.toc-list a.active { color: var(--stepes-magenta); font-weight: 600; }\n.toc-list a.active::before { background: var(--stepes-magenta); }\n.toc-mobile { display: none; margin-bottom: 44px; border: 1px solid var(--line); border-radius: 20px; overflow: hidden; background: #fff; }\n.toc-mobile button { width: 100%; min-height: 54px; display: flex; justify-content: space-between; align-items: center; padding: 13px 18px; border: 0; background: #fff; color: var(--ink); font-size: 16px; font-weight: 600; text-align: left; cursor: pointer; }\n.toc-mobile button svg { width: 20px; height: 20px; transition: transform .2s ease; }\n.toc-mobile button[aria-expanded='true'] svg { transform: rotate(180deg); }\n.toc-mobile .toc-list { border-left: 0; padding: 0 18px 16px; border-top: 1px solid var(--line); }\n.toc-mobile .toc-list a { min-height: 44px; display: flex; align-items: center; padding: 8px 0; font-size: 16px; }\n.article-main { min-width: 0; }\n.guide-section { scroll-margin-top: 112px; margin: 0 0 88px; padding: 0; }\n.guide-section::after { content: ''; display: block; width: 100%; height: 1px; margin-top: 64px; background: var(--line); }\n.guide-section + .guide-section { padding-top: 0; }\n.guide-section h2 { margin: 0 0 24px; font-size: 36px; line-height: 1.18; letter-spacing: -.025em; font-weight: 600; }\n.article-copy { color: var(--ink-soft); }\n.article-copy > p:first-child { color: #3D4654; font-size: 19px; line-height: 1.68; }\n.article-copy p { margin: 0 0 22px; }\n.article-copy h3 { margin: 42px 0 15px; color: var(--ink); font-size: 24px; line-height: 1.28; font-weight: 600; letter-spacing: -.015em; }\n.article-copy ul, .article-copy ol { margin: 18px 0 26px; padding: 0; list-style: none; }\n.article-copy li { position: relative; margin: 11px 0; padding-left: 25px; font-size: 17px; line-height: 1.62; }\n.article-copy ul > li::before { content: ''; position: absolute; left: 1px; top: .77em; width: 8px; height: 2px; background: var(--stepes-magenta); border-radius: 2px; }\n.article-copy ol { counter-reset: item; }\n.article-copy ol > li { counter-increment: item; padding-left: 38px; }\n.article-copy ol > li::before { content: counter(item); position: absolute; left: 0; top: 1px; width: 26px; height: 26px; border-radius: 50%; background: var(--stepes-blush); color: var(--stepes-magenta); display: grid; place-items: center; font-size: 14px; font-weight: 600; }\n.article-copy blockquote { margin: 30px 0; padding: 22px 24px; border-left: 3px solid var(--stepes-magenta); background: var(--stepes-blush); color: #3E4653; border-radius: 0 18px 18px 0; }\n.article-copy blockquote p { margin: 0; font-size: 16px; }\n.article-copy strong { color: var(--ink); font-weight: 600; }\n.article-copy hr { display: none; }\n.citation-ref { display: inline-block; margin-left: 2px; font-size: .72em; line-height: 1; vertical-align: super; }\n.section-rule { width: 100%; height: 1px; margin-top: 6px; background: var(--line); }\n.framework-section { scroll-margin-top: 112px; margin: 0 0 96px; padding: 72px 68px; color: #fff; background: var(--dark); border-radius: 30px; box-shadow: 0 28px 60px rgba(28,31,41,.15); }\n.framework-section h2 { max-width: 720px; margin: 0; font-size: 36px; line-height: 1.17; font-weight: 600; letter-spacing: -.025em; }\n.framework-lead { max-width: 740px; margin: 20px 0 0; color: #D6DBE4; font-size: 18px; line-height: 1.65; }\n.framework-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 18px; margin-top: 42px; }\n.framework-card { min-height: 220px; padding: 24px 22px; border: 1px solid var(--line-dark); border-radius: 20px; background: rgba(255,255,255,.045); }\n.framework-number { display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center; border: 1px solid rgba(242,167,198,.52); border-radius: 50%; color: var(--stepes-pink-light); font-size: 14px; font-weight: 600; }\n.framework-card h3 { margin: 19px 0 9px; color: #fff; font-size: 20px; line-height: 1.25; font-weight: 600; }\n.framework-card p { margin: 0; color: #C9CFDA; font-size: 16px; line-height: 1.55; }\n.framework-output { margin-top: 15px !important; padding-top: 13px; border-top: 1px solid var(--line-dark); color: #fff !important; }\n.framework-note { margin: 34px 0 0; padding-top: 28px; border-top: 1px solid var(--line-dark); color: #D6DBE4; font-size: 16px; }\n.workflow-selector { margin: 0 0 96px; padding: 52px 54px; border: 1px solid var(--line); border-radius: 28px; background: var(--surface); }\n.workflow-selector h3 { margin: 0 0 12px; color: var(--ink); font-size: 28px; line-height: 1.25; font-weight: 600; }\n.workflow-selector > p:not(.eyebrow) { max-width: 760px; margin: 0 0 28px; color: var(--ink-soft); font-size: 17px; }\n.workflow-cards { display: grid; gap: 12px; }\n.workflow-card { display: grid; grid-template-columns: 1.2fr .55fr 1.8fr 1.2fr; gap: 20px; padding: 19px 20px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }\n.workflow-card > div { min-width: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.48; }\n.workflow-card strong { color: var(--ink); font-weight: 600; }\n.workflow-label { display: block; margin-bottom: 5px; color: var(--stepes-magenta-deep); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; font-weight: 600; }\n.table-shell { width: 920px; max-width: none; margin: 30px 0 30px -80px; overflow-x: auto; border: 1px solid var(--line); border-radius: 20px; background: #fff; }\n.table-shell table { width: 100%; border-collapse: collapse; min-width: 760px; }\n.table-shell th, .table-shell td { padding: 16px 18px; border-bottom: 1px solid var(--line); border-right: 1px solid var(--line); text-align: left; vertical-align: top; font-size: 16px; line-height: 1.5; }\n.table-shell th { color: var(--ink); background: #F6F7F9; font-weight: 600; }\n.table-shell td { color: var(--ink-soft); }\n.table-shell th:last-child, .table-shell td:last-child { border-right: 0; }\n.table-shell tr:last-child td { border-bottom: 0; }\n.qa-tool { scroll-margin-top: 112px; margin: 8px 0 0; padding: 54px; border: 1px solid #E7CFDA; border-radius: 28px; background: linear-gradient(145deg,#fff 0%,#fdf4f8 100%); }\n.qa-tool-head { max-width: 760px; }\n.qa-tool-head h3 { margin: 0; color: var(--ink); font-size: 28px; line-height: 1.25; font-weight: 600; }\n.qa-tool-head p { margin: 14px 0 0; color: var(--ink-soft); font-size: 17px; }\n.qa-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 42px; margin-top: 36px; }\n.qa-group { padding-top: 20px; border-top: 1px solid rgba(122,21,66,.18); }\n.qa-group h4 { margin: 0 0 15px; color: var(--ink); font-size: 18px; font-weight: 600; }\n.qa-item { display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 11px; margin: 11px 0; color: var(--ink-soft); font-size: 16px; line-height: 1.52; }\n.qa-item svg { width: 20px; height: 20px; margin-top: 2px; stroke: var(--stepes-magenta); fill: none; }\n.delivery-standard { margin-top: 34px; padding: 22px 24px; border-left: 3px solid var(--stepes-magenta); border-radius: 0 17px 17px 0; background: #fff; color: #3D4654; font-size: 16px; }\n.delivery-standard strong { color: var(--stepes-magenta-deep); }\n.risk-panel { scroll-margin-top: 112px; margin: 0 0 88px; padding: 52px 54px; border: 1px solid var(--line); border-radius: 28px; background: #F8F9FB; }\n.risk-panel h2 { margin: 0 0 14px; font-size: 36px; line-height: 1.18; font-weight: 600; }\n.risk-panel .article-copy > p:first-child { font-size: 18px; }\n.risk-panel .article-copy ul { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 40px; margin: 28px 0 24px; border-top: 1px solid var(--line); }\n.risk-panel .article-copy ul > li { margin: 0; padding-top: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.5; }\n.faq-section { scroll-margin-top: 112px; padding: 0 0 96px; }\n.faq-section h2 { margin: 0 0 26px; font-size: 36px; line-height: 1.18; font-weight: 600; }\n.faq-panel { border-top: 1px solid var(--line); }\n.faq-item { border-bottom: 1px solid var(--line); }\n.faq-button { width: 100%; min-height: 70px; display: grid; grid-template-columns: minmax(0,1fr) 28px; gap: 20px; align-items: center; padding: 20px 0; border: 0; background: transparent; color: var(--ink); text-align: left; font-size: 18px; line-height: 1.4; font-weight: 600; cursor: pointer; }\n.faq-button svg { width: 22px; height: 22px; justify-self: end; stroke: var(--stepes-magenta); transition: transform .2s ease; }\n.faq-button[aria-expanded='true'] svg { transform: rotate(45deg); }\n.faq-answer { padding: 0 54px 24px 0; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.faq-answer p { margin: 0; }\n.sources-section { padding: 76px 0; background: #F7F8FA; border-block: 1px solid var(--line); }\n.sources-inner { max-width: 1040px; margin: 0 auto; }\n.sources-section h2 { margin: 0 0 28px; font-size: 30px; font-weight: 600; }\n.source-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }\n.source-list li { scroll-margin-top: 112px; display: grid; grid-template-columns: 36px minmax(0,1fr) 20px; gap: 14px; align-items: start; padding: 18px 0; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.5; }\n.source-index { color: var(--stepes-magenta); font-weight: 600; }\n.related-section { padding: 96px 0; }\n.related-head { max-width: 760px; }\n.related-head h2 { margin: 0; font-size: 36px; line-height: 1.18; font-weight: 600; }\n.related-head p { margin: 16px 0 0; color: var(--ink-soft); font-size: 18px; }\n.related-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 42px; border-top: 1px solid var(--line); }\n.related-card { min-height: 210px; padding: 28px 28px 26px 0; border-bottom: 1px solid var(--line); }\n.related-card:not(:nth-child(3n+1)) { padding-left: 28px; border-left: 1px solid var(--line); }\n.related-card h3 { margin: 0; font-size: 20px; line-height: 1.35; font-weight: 600; }\n.related-card p { margin: 13px 0 19px; color: var(--ink-soft); font-size: 16px; line-height: 1.55; }\n.final-cta { padding: 96px 0; background: var(--stepes-blush); border-top: 1px solid #E8D3DD; }\n.cta-panel { display: grid; grid-template-columns: minmax(0,1.6fr) auto; gap: 54px; align-items: center; padding: 54px 58px; border: 1px solid #E6C9D6; border-radius: 30px; background: #fff; box-shadow: 0 20px 48px rgba(80,32,55,.08); }\n.cta-panel h2 { max-width: 690px; margin: 0; font-size: 36px; line-height: 1.17; font-weight: 600; letter-spacing: -.025em; }\n.cta-panel p:not(.eyebrow) { max-width: 720px; margin: 18px 0 0; color: var(--ink-soft); font-size: 18px; }\n.cta-actions { display: flex; flex-direction: column; gap: 12px; min-width: 260px; }\n@media (min-width: 1200px) {\n  .framework-section, .workflow-selector { width: 920px; margin-left: -80px; }\n  .framework-section { padding-inline: 60px; }\n}\n@media (max-width: 1199px) and (min-width: 1100px) {\n  .framework-section, .workflow-selector { width: 820px; margin-left: -60px; }\n  .table-shell { width: 820px; margin-left: -60px; }\n}\n@media (max-width: 1120px) {\n  .stepes-shell { padding-inline: 40px; }\n  .article-grid { grid-template-columns: 240px minmax(0,700px); gap: 52px; }\n  .framework-section { padding: 64px 48px; }\n  .workflow-selector { padding: 48px; }\n  .workflow-card { grid-template-columns: 1.2fr .55fr 1.65fr 1.1fr; gap: 16px; }\n}\n@media (max-width: 1199px) {\n  .stepes-shell { padding-inline: 24px; }\n  .guide-hero { padding: 88px 0 76px; }\n  .guide-hero h1 { font-size: 42px; }\n  .takeaways-head { grid-template-columns: 1fr; gap: 34px; }\n  .article-grid { display: block; max-width: 820px; }\n  .toc-desktop { display: none; }\n  .toc-mobile { display: block; }\n  .framework-section, .workflow-selector { width: auto; margin-left: 0; }\n  .table-shell { width: 100%; margin-left: 0; }\n  .framework-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .workflow-card { grid-template-columns: 1fr 1fr; align-items: start; }\n  .related-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .related-card:not(:nth-child(3n+1)) { padding-left: 0; border-left: 0; }\n  .related-card:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }\n  .cta-panel { grid-template-columns: 1fr; }\n  .cta-actions { flex-direction: row; min-width: 0; }\n}\n@media (max-width: 860px) {\n  .table-shell { width: 100%; overflow: visible; border: 0; background: transparent; }\n  .table-shell table, .table-shell tbody, .table-shell tr, .table-shell td { display: block; width: 100%; min-width: 0; }\n  .table-shell thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; }\n  .table-shell tr { margin-bottom: 16px; padding: 6px 18px; border: 1px solid var(--line); border-radius: 18px; background: #fff; break-inside: avoid; }\n  .table-shell td { display: grid; grid-template-columns: minmax(135px,.8fr) minmax(0,1.2fr); gap: 18px; padding: 13px 0; border-right: 0; border-bottom: 1px solid var(--line); }\n  .table-shell td:last-child { border-bottom: 0; }\n  .table-shell td::before { content: attr(data-label); color: var(--ink); font-weight: 600; }\n}\n@media (max-width: 700px) {\n  .stepes-shell { padding-inline: 20px; }\n  .guide-hero { padding: 72px 0 64px; }\n  .guide-hero h1 { font-size: 38px; }\n  .hero-deck { font-size: 17px; }\n  .hero-meta { gap: 8px 16px; }\n  .hero-meta span::after { display: none; }\n  .hero-art { margin-top: 38px; padding: 20px; border-radius: 22px; }\n  .hero-actions { flex-direction: column; }\n  .hero-actions .button { width: 100%; }\n  .article-note { margin: 0 auto 48px; }\n  .takeaways { padding: 64px 0; }\n  .takeaways h2, .guide-section h2, .faq-section h2, .related-head h2, .cta-panel h2, .risk-panel h2 { font-size: 30px; }\n  .takeaway-list { grid-template-columns: 1fr; }\n  .article-zone { padding-top: 64px; }\n  .guide-section { margin-bottom: 68px; }\n  .guide-section::after { margin-top: 48px; }\n  .article-copy, .article-copy li { font-size: 17px; }\n  .article-copy > p:first-child { font-size: 18px; }\n  .article-copy h3 { margin-top: 34px; font-size: 20px; }\n  .framework-section { margin-bottom: 56px; padding: 48px 22px; border-radius: 24px; }\n  .framework-section h2 { font-size: 30px; }\n  .workflow-selector { margin-bottom: 72px; padding: 38px 22px; border-radius: 24px; }\n  .workflow-selector h3 { font-size: 24px; }\n  .framework-grid { grid-template-columns: 1fr; }\n  .framework-card { min-height: 0; }\n  .workflow-card { grid-template-columns: 1fr; gap: 13px; padding: 18px; }\n  .workflow-card > div { padding-bottom: 12px; border-bottom: 1px solid var(--line); }\n  .workflow-card > div:last-child { padding-bottom: 0; border-bottom: 0; }\n  .table-shell td { grid-template-columns: 1fr; gap: 5px; font-size: 16px; }\n  .qa-tool { padding: 38px 22px; border-radius: 24px; }\n  .qa-grid { grid-template-columns: 1fr; gap: 12px; }\n  .risk-panel { padding: 40px 22px; border-radius: 24px; }\n  .risk-panel .article-copy ul { grid-template-columns: 1fr; }\n  .faq-button { font-size: 17px; }\n  .faq-answer { padding-right: 0; }\n  .sources-section { padding: 64px 0; }\n  .source-list li { grid-template-columns: 28px minmax(0,1fr) 18px; gap: 10px; }\n  .related-section { padding: 72px 0; }\n  .related-grid { grid-template-columns: 1fr; }\n  .related-card, .related-card:nth-child(even), .related-card:not(:nth-child(3n+1)) { min-height: 0; padding: 24px 0; border-left: 0; }\n  .final-cta { padding: 72px 0; }\n  .cta-panel { padding: 38px 22px; border-radius: 24px; }\n  .cta-panel p:not(.eyebrow) { font-size: 17px; }\n  .cta-actions { flex-direction: column; }\n  .cta-actions .button { width: 100%; }\n  .hero-actions .button, .cta-actions .button { padding-inline: 18px; white-space: normal; }\n}\n@media (max-width: 480px) {\n  .hero-art { padding: 16px; }\n  .framework-section, .workflow-selector, .qa-tool, .risk-panel, .cta-panel { padding-inline: 18px; }\n  .toc-mobile { margin-bottom: 36px; }\n  .source-list li { grid-template-columns: 24px minmax(0,1fr) 18px; }\n}\n@media (max-width: 360px) {\n  .guide-hero h1 { font-size: 35px; }\n  .hero-meta span::after { display: none !important; }\n  .hero-meta { flex-direction: column; }\n}\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n  *, *::before, *::after { transition: none !important; }\n}\n";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function PlusIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}
function ChevronIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M17 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function HeroIllustration() {
  return (
    <div className="hero-art" role="img" aria-label="Bilingual legal document moving through controlled translation, terminology, security, review, and delivery stages.">
      <svg viewBox="0 0 800 255" aria-hidden="true">
        <defs>
          <linearGradient id="docFill" x1="0" x2="1"><stop offset="0" stopColor="#FDF2F7"/><stop offset="1" stopColor="#FFFFFF"/></linearGradient>
        </defs>
        <g fill="none" stroke="#323946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="38" y="33" width="174" height="188" rx="14" fill="url(#docFill)"/>
          <path d="M71 76h108M71 99h87M71 122h108M71 145h72M71 183h50" opacity=".58"/>
          <circle cx="165" cy="184" r="21" stroke="#C11D63"/>
          <path d="m156 184 7 7 13-15" stroke="#C11D63"/>
          <path d="M225 127h50" stroke="#C11D63"/>
          <path d="m267 119 8 8-8 8" stroke="#C11D63"/>
          <rect x="292" y="73" width="216" height="110" rx="18" fill="#FFFFFF" stroke="#D8DCE3"/>
          <path d="M330 110h140M330 133h94M330 156h126" opacity=".55"/>
          <rect x="322" y="43" width="62" height="30" rx="15" fill="#FDF2F7" stroke="#C11D63"/>
          <path d="M342 58h22" stroke="#C11D63"/>
          <rect x="404" y="43" width="76" height="30" rx="15" fill="#FDF2F7" stroke="#C11D63"/>
          <path d="M426 58h32" stroke="#C11D63"/>
          <path d="M520 127h48" stroke="#C11D63"/>
          <path d="m560 119 8 8-8 8" stroke="#C11D63"/>
          <rect x="586" y="33" width="174" height="188" rx="14" fill="url(#docFill)"/>
          <path d="M619 76h108M619 99h76M619 122h108M619 145h86M619 183h62" opacity=".58"/>
          <rect x="692" y="170" width="34" height="29" rx="7" stroke="#C11D63"/>
          <path d="M700 170v-8a9 9 0 0 1 18 0v8" stroke="#C11D63"/>
          <circle cx="400" cy="221" r="5" fill="#C11D63" stroke="none"/>
          <path d="M238 221h144M418 221h144" stroke="#D3D7DF"/>
        </g>
      </svg>
    </div>
  );
}

function TocLinks({ activeId, onNavigate }) {
  return (
    <ul className="toc-list">
      {tocItems.map((item) => (
        <li key={item.id}>
          <a className={activeId === item.id ? "active" : ""} aria-current={activeId === item.id ? "location" : undefined} href={sectionUrl(item.id)} onClick={(event) => onNavigate(event, item.id)}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ArticleCopy({ html }) {
  const normalizedHtml = html
    .replace(/<hr\s*\/?>/gi, "")
    .replace(/\[(\d+)\]/g, (_, sourceNumber) =>
      `<a class="citation-ref" href="${sectionUrl("source-" + sourceNumber)}" aria-label="View source ${sourceNumber}">[${sourceNumber}]</a>`
    );

  return <div className="article-copy" dangerouslySetInnerHTML={{ __html: normalizedHtml }} />;
}

function LegalTranslationBestPracticesGuide() {
  const [activeId, setActiveId] = useState("eight-control-framework");
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (tocItems.some((item) => item.id === initialHash)) setActiveId(initialHash);

    const nodes = tocItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: [0, .1, .35] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (event, id) => {
    const target = document.getElementById(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
      setTocOpen(false);
    }
  };

  return (
    <main className="stepes-legal-guide">
      <style>{styles}</style>

      <section className="guide-hero">
        <div className="stepes-shell hero-inner">
          <p className="eyebrow">Legal Translation Resources</p>
          <h1>Legal Translation Best Practices for Accurate and Secure Documents</h1>
          <p className="hero-deck">Legal translation requires more than fluent language. Contracts, court filings, corporate records, compliance materials, intellectual property documents, immigration records, and official certificates must preserve meaning, terminology, structure, and usability across languages.</p>
          <div className="hero-meta" aria-label="Guide details">
            <span>Best Practices Guide</span><span>22-Minute Read</span><span>End-to-End Workflow</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={sectionUrl("eight-control-framework")} onClick={(e) => navigateTo(e,"eight-control-framework")}>Explore the Guide <ArrowIcon /></a>
            <a className="button button-secondary" href={sectionUrl("final-legal-translation-qa-checklist")} onClick={(e) => navigateTo(e,"final-legal-translation-qa-checklist")}>Jump to the QA Checklist</a>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="takeaways" aria-labelledby="takeaways-title">
        <div className="stepes-shell takeaways-head">
          <div><h2 id="takeaways-title">Eight Practices That Reduce Legal Translation Risk</h2><p className="takeaways-intro">This guide provides a practical framework for planning legal translation projects from initial scoping through final delivery. It is designed for law firms, corporate legal departments, compliance teams, legal operations professionals, and organizations that need multilingual legal documents to support review, negotiation, filing, due diligence, or official submission.</p></div>
          <div className="takeaway-list">
            {keyTakeaways.map((item) => <div className="takeaway-item" key={item}><CheckIcon /><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="article-zone">
        <div className="stepes-shell">
          <div className="editorial-note article-note"><strong>Important:</strong> This guide provides practical information for legal translation planning and quality management. It does not provide legal advice. Translation, certification, notarization, sworn-translation, authentication, filing, and document-acceptance requirements vary by court, agency, institution, country, and jurisdiction. Confirm current requirements with the receiving authority and qualified counsel when appropriate.</div>
          <div className="article-grid">
            <aside className="toc-desktop" aria-label="In this guide">
              <h2>In This Guide</h2>
              <TocLinks activeId={activeId} onNavigate={navigateTo} />
            </aside>
            <article className="article-main">
              <div className="toc-mobile">
                <button type="button" aria-expanded={tocOpen} aria-controls="mobile-guide-toc" onClick={() => setTocOpen((open) => !open)}>
                  <span>In This Guide</span><ChevronIcon />
                </button>
                <div id="mobile-guide-toc" hidden={!tocOpen}><TocLinks activeId={activeId} onNavigate={navigateTo} /></div>
              </div>

              <section id="eight-control-framework" className="framework-section">
                <p className="eyebrow eyebrow-dark">Planning Framework</p>
                <h2>The Eight-Control Legal Translation Framework</h2>
                <p className="framework-lead">Strong legal translation begins before the first sentence is translated. The most reliable projects control eight connected areas from intake through delivery.</p>
                <div className="framework-grid">
                  {frameworkControls.map((control, index) => (
                    <div className="framework-card" key={control.Control}>
                      <span className="framework-number">{index + 1}</span>
                      <h3>{control.Control.replace(/^\d+\.\s*/, "")}</h3>
                      <p>{control["Question to Resolve"]}</p>
                      <p className="framework-output"><strong>Output:</strong> {control["Primary Output"]}</p>
                    </div>
                  ))}
                </div>
                <p className="framework-note">The controls are interdependent. For example, the intended use affects the level of review; the recipient may determine certification requirements; the source package affects completeness; and confidentiality requirements affect whether particular AI or cloud tools may be used.</p>
              </section>

              <div className="workflow-selector" aria-labelledby="workflow-selector-title">
                <p className="eyebrow">Workflow Selector</p>
                <h3 id="workflow-selector-title">Route the Project by Intended Use and Risk</h3>
                <p>Use the following matrix as an initial planning tool. It does not replace recipient-specific instructions or legal advice.</p>
                <div className="workflow-cards">
                  {workflowRows.map((row) => (
                    <div className="workflow-card" key={row["Intended Use"]}>
                      <div><span className="workflow-label">Intended Use</span><strong>{row["Intended Use"]}</strong></div>
                      <div><span className="workflow-label">Risk Level</span>{row["Typical Risk Level"]}</div>
                      <div><span className="workflow-label">Recommended Workflow</span>{row["Recommended Translation Workflow"]}</div>
                      <div><span className="workflow-label">Formalities</span>{row["Certification or Formalities"]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {chapterData.map((section) => (
                <React.Fragment key={section.id}>
                  {section.id === "common-practices-to-avoid" ? (
                    <section id={section.id} className="risk-panel">
                      <p className="eyebrow">Risk Reduction</p>
                      <h2>{section.title}</h2>
                      <ArticleCopy html={section.html} />
                    </section>
                  ) : (
                    <section id={section.id} className="guide-section">
                      <h2>{section.title}</h2>
                      <ArticleCopy html={section.html} />
                      {section.id === "independent-review-final-qa" && (
                        <div id="final-legal-translation-qa-checklist" className="qa-tool">
                          <div className="qa-tool-head"><h3>Final Delivery-Readiness Checklist</h3><p>Use this final verification tool before a legal translation package is approved for delivery, filing, execution, or publication.</p></div>
                          <div className="qa-grid">
                            {qaGroups.map((group) => <div className="qa-group" key={group.title}><h4>{group.title}</h4>{group.items.map((item) => <div className="qa-item" key={item}><CheckIcon/><span>{item}</span></div>)}</div>)}
                          </div>
                          <div className="delivery-standard"><strong>Delivery Standard:</strong> A legal translation is ready for delivery only when the language, document structure, supporting formalities, version status, and intended-use requirements have all been verified—not merely when the translated sentences read well.</div>
                        </div>
                      )}
                    </section>
                  )}
                </React.Fragment>
              ))}

              <section id="legal-translation-faqs" className="faq-section">
                <h2>Legal Translation Best Practices FAQs</h2>
                <div className="faq-panel">
                  {faqs.map((faq,index) => {
                    const isOpen = openFaq === index;
                    return <div className="faq-item" key={faq.question}>
                      <button id={`faq-button-${index}`} className="faq-button" type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><PlusIcon /></button>
                      <div id={`faq-answer-${index}`} className="faq-answer" role="region" aria-labelledby={`faq-button-${index}`} hidden={!isOpen} dangerouslySetInnerHTML={{__html: faq.answerHtml.replace(/<hr\s*\/?>/gi, "")}} />
                    </div>;
                  })}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section className="sources-section" aria-labelledby="sources-title">
        <div className="stepes-shell sources-inner"><h2 id="sources-title">Authoritative References Used in This Guide</h2>
          <ol className="source-list">{sources.map((source,index) => <li id={`source-${index+1}`} key={source.url}><span className="source-index">{String(index+1).padStart(2,"0")}</span><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a><ExternalIcon/></li>)}</ol>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="stepes-shell">
          <div className="related-head"><p className="eyebrow">Continue Your Planning</p><h2 id="related-title">Related Legal Translation Guides</h2><p>Explore focused resources for certification, source preparation, legal translation risk, and controlled AI-assisted workflows.</p></div>
          <div className="related-grid">
            {relatedGuides.map((guide) => <div className="related-card" key={guide.url}><h3><a href={guide.url}>{guide.title}</a></h3><p>{guide.description}</p><a href={guide.url}>Read the Guide →</a></div>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="stepes-shell">
          <div className="cta-panel">
            <div><h2>Plan a Legal Translation Workflow Around Your Documents and Intended Use</h2><p>Legal translation requirements depend on the document, language pair, receiving party, confidentiality needs, and review process. Stepes supports law firms, corporate legal departments, compliance teams, government organizations, and global businesses with professional <a href="https://www.stepes.com/legal-translation-services/">Legal Translation Services</a>.</p></div>
            <div className="cta-actions"><a className="button button-primary" href="https://www.stepes.com/contact-us/">Talk to a Legal Translation Expert <ArrowIcon/></a><a className="button button-secondary" href="https://app.stepes.com/quote/">Request a Translation Quote</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LegalTranslationBestPracticesGuide;
