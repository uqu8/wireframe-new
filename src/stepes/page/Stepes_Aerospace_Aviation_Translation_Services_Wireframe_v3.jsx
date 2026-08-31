import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#111827",
  text: "#263244",
  muted: "#667085",
  border: "#D9DEE7",
  soft: "#F6F7F9",
  dark: "#171922",
};

const ExternalArrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h13M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.8 9h16.4M3.8 15h16.4M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12S9.8 18.6 12 21" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.5 6.2a5 5 0 0 0-6.7 6.7L3 17.7 6.3 21l4.8-4.8a5 5 0 0 0 6.7-6.7l-3 3-3.3-.8-.8-3.3 3-3Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5.2 5.8v5.1c0 4.5 2.8 8 6.8 10.1 4-2.1 6.8-5.6 6.8-10.1V5.8L12 3Z" />
          <path d="m8.8 12 2.1 2.1 4.4-4.4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 8 4.3-8 4.3-8-4.3L12 3Z" />
          <path d="m4 12 8 4.3 8-4.3M4 16.7 12 21l8-4.3" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path d="m2.8 13.3 7.5 1.1 2.3 6 1.7.2-.3-6.4 5.3 1.2 1.4-1.2-6.8-3.7-.4-6.8-1.7-.2-1.3 6.3-7.7 2.1-1 1.5Z" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common}>
          <path d="M3 21V9l6 3V9l6 3V5h6v16H3Z" />
          <path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.2c2.6-.7 5.2-.3 8 1.2v13c-2.8-1.5-5.4-1.9-8-1.2v-13ZM20 5.2c-2.6-.7-5.2-.3-8 1.2v13c2.8-1.5 5.4-1.9 8-1.2v-13Z" />
        </svg>
      );
    case "training":
      return (
        <svg {...common}>
          <path d="m3 8.2 9-4.2 9 4.2-9 4.2-9-4.2Z" />
          <path d="M7 10.3v4.4c2.7 2.1 7.3 2.1 10 0v-4.4M21 8.2v6.2" />
        </svg>
      );
    case "drone":
      return (
        <svg {...common}>
          <rect x="9" y="9" width="6" height="6" rx="1.5" />
          <path d="M9 10 6.2 7.2M15 10l2.8-2.8M9 14l-2.8 2.8M15 14l2.8 2.8M3 6h6M15 6h6M3 18h6M15 18h6" />
          <circle cx="4" cy="6" r="1.4" /><circle cx="20" cy="6" r="1.4" /><circle cx="4" cy="18" r="1.4" /><circle cx="20" cy="18" r="1.4" />
        </svg>
      );
    case "satellite":
      return (
        <svg {...common}>
          <path d="m10 10 4 4M7.2 5.5l2.6 2.6-4.3 4.3-2.6-2.6 4.3-4.3ZM16.8 12l4.3 4.3-2.6 2.6-4.3-4.3 2.6-2.6Z" />
          <path d="M13.5 7.1c2 0 3.7 1.7 3.7 3.7M13.7 3.5c3.9 0 7 3.1 7 7" />
        </svg>
      );
    case "airport":
      return (
        <svg {...common}>
          <path d="M4 21h16M6 21V9h12v12M9 9V5h6v4M9 13h2M13 13h2M9 17h2M13 17h2" />
        </svg>
      );
    case "signal":
      return (
        <svg {...common}>
          <path d="M5 19h2v-4H5v4ZM11 19h2V9h-2v10ZM17 19h2V4h-2v15Z" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6V3Z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path d="M20 7v5h-5M4 17v-5h5" />
          <path d="M6.1 8.2A7 7 0 0 1 18.7 9M5.3 15a7 7 0 0 0 12.6.8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.7 2.7L16.5 9" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c.7-3.1 2.6-4.7 5.5-4.7s4.8 1.6 5.5 4.7" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M15.7 14.4c2.7-.4 4.3.8 4.8 3.6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

const trustItems = [
  {
    icon: "globe",
    title: "100+ Languages",
    text: "Global coverage for engineering, operations, training, software, and customer content.",
  },
  {
    icon: "plane",
    title: "Aerospace Expertise",
    text: "Linguists matched to aviation, engineering, manufacturing, software, and technical content.",
  },
  {
    icon: "layers",
    title: "AI + Human Workflows",
    text: "Risk-matched automation, terminology control, and professional review for different aerospace content types.",
  },
  {
    icon: "shield",
    title: "ISO-Certified Quality",
    text: "ISO 17100 and ISO 9001 processes support consistent translation and quality management.",
  },
];

const expertiseItems = [
  {
    title: "Aircraft & Aerospace Manufacturing",
    text: "Airframes, engines, aerostructures, propulsion, components, advanced materials, production engineering, and global supplier documentation.",
  },
  {
    title: "Avionics & Aircraft Systems",
    text: "Navigation, communications, flight controls, cockpit systems, sensors, embedded electronics, diagnostics, and connected aircraft technologies.",
  },
  {
    title: "MRO & Aviation Aftermarket",
    text: "Aircraft and component maintenance, repair and overhaul, inspection, service bulletins, spare parts, modifications, and technician support.",
  },
  {
    title: "Airlines & Flight Operations",
    text: "Flight operations documentation, cabin crew content, safety information, passenger communications, digital experiences, and airline customer support.",
  },
  {
    title: "Airports, ATC & Air Navigation",
    text: "Airport operations, ground handling, emergency procedures, air-navigation technologies, workforce training, and passenger-facing information.",
  },
  {
    title: "Business Aviation, Rotorcraft & Specialized Aviation",
    text: "Business jets, helicopters, charter operations, cargo aviation, air ambulance services, and other specialized operational environments.",
  },
  {
    title: "UAS, Drones & Advanced Air Mobility",
    text: "Commercial drones, unmanned aircraft systems, autonomy, BVLOS operations, eVTOL, fleet-management software, and vertiport technologies.",
  },
  {
    title: "Space & Satellite Systems",
    text: "Spacecraft, launch systems, satellites, payloads, propulsion, ground systems, mission technologies, testing, software, and technical training.",
  },
];

const documentationGroups = [
  {
    title: "Aircraft & Component Manuals",
    items: ["Aircraft Maintenance Manuals (AMM)", "Component Maintenance Manuals (CMM)", "Structural Repair Manuals (SRM)", "Illustrated Parts Catalogs (IPC)", "Aircraft Flight Manuals (AFM) & Flight Crew Operating Manuals (FCOM)"],
  },
  {
    title: "Maintenance & Engineering",
    items: ["Task cards and job cards", "Service bulletins", "Repair and overhaul procedures", "Inspection and NDT documentation", "Engineering reports, drawings, and specifications"],
  },
  {
    title: "Operational & Safety Content",
    items: ["Standard operating procedures", "Work instructions", "Safety and emergency procedures", "Operational checklists", "Safety Management System content"],
  },
  {
    title: "Certification & Regulatory Content",
    items: ["Technical submissions", "Certification-related materials", "Quality and audit documentation", "Conformity documentation", "Regulatory and authority communications"],
  },
];

const mroItems = [
  ["Airframe Maintenance", "Line and base maintenance procedures, structural inspection, repairs, modifications, and technical support documentation."],
  ["Engine & Component MRO", "Overhaul manuals, repair procedures, inspection criteria, parts information, technician instructions, and training."],
  ["Modifications & Upgrades", "Cabin modifications, avionics upgrades, retrofits, conversions, and other lifecycle improvement documentation."],
  ["Inspection & NDT", "Multilingual instructions for visual inspection, nondestructive testing, measurement, evaluation, and maintenance decision support."],
  ["Parts & Aftermarket Support", "Illustrated parts information, catalogs, service documentation, technical bulletins, and digital aftermarket platforms."],
  ["Technician Training", "Maintenance courseware, recurrent instruction, simulation materials, multimedia, and workforce training for global teams."],
];

const safetyControls = [
  ["Subject-Matter Linguists", "Technical aerospace content is matched with professionals experienced in engineering, aviation, technology, and specialized documentation."],
  ["Controlled Terminology", "Approved system names, component terminology, abbreviations, warnings, and procedural language can be managed centrally across languages."],
  ["Technical Quality Assurance", "Checks can address terminology, numbers, units, missing content, warnings, references, formatting, and cross-file consistency."],
  ["Independent Review", "Higher-risk or high-value content can receive additional review by a second qualified linguist or subject-matter specialist."],
  ["Customer Validation", "Your approved terminology, engineering reviewers, and formal approval steps can be integrated into the multilingual workflow."],
];

const aiTiers = [
  {
    label: "Business & Support Content",
    title: "Automation Where It Creates Practical Value",
    text: "AI-assisted translation can accelerate internal communications, knowledge content, supplier materials, and other high-volume information when paired with approved terminology and appropriate linguistic review.",
  },
  {
    label: "Product & Training Content",
    title: "AI + Human Review for Repeatable Global Content",
    text: "Training, product information, and customer-facing technical content can combine translation memory, terminology, AI assistance, professional linguistic review, and automated QA.",
  },
  {
    label: "Specialized Technical Documentation",
    title: "Domain Expertise and Controlled Review",
    text: "Aircraft manuals, engineering documentation, and complex technical publications benefit from specialist linguists, controlled terminology, structured review, and careful source-to-target validation.",
  },
  {
    label: "Safety-Critical & Regulatory Content",
    title: "Stronger Human Oversight for Higher-Consequence Content",
    text: "Safety procedures, critical maintenance information, certification-related materials, and other high-consequence documentation receive stronger specialist review and customer validation where required.",
  },
];

const faqs = [
  {
    q: "What types of aerospace and aviation documents can Stepes translate?",
    a: "Stepes translates aircraft manuals, engineering specifications, maintenance documentation, service bulletins, component manuals, illustrated parts content, SOPs, work instructions, safety procedures, training materials, software interfaces, supplier documentation, certification-related content, and customer-facing aviation communications.",
  },
  {
    q: "Can Stepes translate aircraft maintenance manuals such as AMMs and CMMs?",
    a: "Yes. We support multilingual aircraft and component maintenance documentation, including AMMs, CMMs, structural repair content, illustrated parts information, maintenance procedures, task cards, service documentation, and related technical publications. Translation memory, terminology management, subject-matter linguists, and technical QA help maintain consistency across large documentation sets.",
  },
  {
    q: "Does Stepes support S1000D and ATA iSpec 2200 technical publications?",
    a: "Yes. Stepes supports translation workflows for technical content developed within S1000D and ATA iSpec 2200 documentation environments. We help preserve terminology, structure, references, metadata, and reusable information while supporting multilingual publishing workflows. Translation does not itself constitute certification of compliance with either specification.",
  },
  {
    q: "Can Stepes work with ASD-STE100 Simplified Technical English?",
    a: "Yes. Stepes can support multilingual workflows for source content written using ASD-STE100 Simplified Technical English and align terminology and review processes with the controlled nature of the source. The current Issue 9 standard reinforces the importance of clear, consistent technical communication.",
  },
  {
    q: "How does Stepes maintain aerospace terminology across large programs?",
    a: "We use customer-approved glossaries, multilingual terminology databases, translation memory, reviewer feedback, and project instructions to maintain consistent terminology across documents, languages, revisions, and product generations. These language assets can be updated as programs evolve.",
  },
  {
    q: "Does Stepes use AI for aerospace translation?",
    a: "Yes, but we do not force every aerospace document through the same workflow. Stepes combines AI, translation memory, terminology, professional translation, specialist review, and quality assurance according to the content type, purpose, complexity, and risk. Higher-consequence technical and safety content receives stronger human oversight.",
  },
  {
    q: "Can Stepes localize avionics and aviation software?",
    a: "Yes. We localize avionics interfaces, electronic flight bag applications, maintenance software, fleet-management platforms, diagnostic systems, training applications, mobile apps, online help, and supporting documentation. We also support common resource formats, in-context review, and recurring release cycles.",
  },
  {
    q: "Does Stepes provide aviation MRO translation services?",
    a: "Yes. Stepes translates maintenance manuals, repair and overhaul procedures, service bulletins, inspection documentation, work instructions, technician training, component information, and aftermarket content for aviation MRO organizations. For broader maintenance programs, our dedicated MRO Translation Services support aviation and other maintenance-intensive industries.",
  },
];

export default function AerospaceAviationTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-aerospace-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --blush-text: ${COLORS.blushText};
          --ink: ${COLORS.ink};
          --text: ${COLORS.text};
          --muted: ${COLORS.muted};
          --border: ${COLORS.border};
          --soft: ${COLORS.soft};
          --dark: ${COLORS.dark};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-aerospace-page {
          width: 100%;
          overflow-x: hidden;
          background: #fff;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-aerospace-page a { color: inherit; text-decoration: none; }
        .section-pad { padding-left: 56px; padding-right: 56px; }
        .shell { width: 100%; max-width: 1280px; margin: 0 auto; }
        .section { padding-top: 96px; padding-bottom: 96px; }
        .section.dense { padding-top: 80px; padding-bottom: 80px; }
        .soft-section { background: var(--soft); }
        .blush-section { background: var(--blush); }
        .dark-section { background: var(--dark); color: #fff; }
        .eyebrow {
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .dark-section .eyebrow { color: var(--blush-text); }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -.025em; color: var(--ink); overflow-wrap: break-word; }
        .dark-section h1, .dark-section h2, .dark-section h3 { color: #fff; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.14; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        .body-large { font-size: 18px; line-height: 1.72; color: #46556a; }
        .dark-section .body-large { color: #D8DDE6; }
        .body { font-size: 16px; color: var(--text); line-height: 1.72; }
        .muted { color: var(--muted); }
        .intro { max-width: 800px; }
        .heading-group { margin-bottom: 48px; }
        .heading-group.center { text-align: center; margin-left: auto; margin-right: auto; }
        .heading-group.center .intro { margin-left: auto; margin-right: auto; }
        .heading-group.center p:last-child { margin-bottom: 0; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          transition: gap .18s ease, color .18s ease;
          max-width: 100%;
          white-space: normal;
          overflow-wrap: break-word;
        }
        .editorial-link svg { flex: 0 0 auto; }
        .editorial-link:hover, .editorial-link:focus-visible { gap: 12px; color: var(--magenta-dark) !important; }
        .editorial-link:focus-visible,
        .btn:focus-visible,
        .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          padding: 12px 22px;
          font-size: 16px;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible,
        .btn-primary span,
        .btn-primary svg,
        .btn-primary path { color: #fff !important; stroke: currentColor; }
        .btn-primary { background: var(--magenta); color: #fff !important; box-shadow: 0 8px 22px rgba(193,29,99,.16); }
        .btn-primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 26px rgba(167,25,84,.2); }
        .btn-secondary { background: #fff; color: var(--ink) !important; border-color: #C8CED8; }
        .btn-secondary:hover { border-color: #9FA8B6; background: #FAFBFC; }

        /* Hero */
        .hero { padding-top: 104px; padding-bottom: 104px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: 1.08fr .92fr; align-items: center; gap: 72px; }
        .hero-copy { max-width: 700px; }
        .hero-copy .body-large { max-width: 660px; margin-bottom: 0; }
        .hero-art {
          position: relative;
          min-height: 500px;
          border: 1px solid #E2E6ED;
          border-radius: 30px;
          background: linear-gradient(145deg, #F8F9FB 0%, #F0F2F6 100%);
          overflow: hidden;
          box-shadow: 0 18px 50px rgba(17,24,39,.07);
        }
        .hero-art svg { width: 100%; height: 100%; min-height: 500px; display: block; }
        .hero-art::after {
          content: "";
          position: absolute;
          inset: auto -70px -80px auto;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(193,29,99,.06);
          pointer-events: none;
        }

        /* Trust */
        .trust-band { background: #fff; }
        .trust-shell { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 32px; padding: 30px 0; }
        .trust-item { display: grid; grid-template-columns: 28px 1fr; gap: 14px; align-items: start; }
        .trust-item .icon { color: var(--magenta); margin-top: 2px; }
        .trust-item h3 { font-size: 18px; margin-bottom: 5px; letter-spacing: -.01em; }
        .trust-item p { margin: 0; font-size: 16px; line-height: 1.55; color: var(--muted); }

        /* Overview */
        .overview-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 96px; align-items: start; }
        .overview-copy p { margin-bottom: 22px; }
        .overview-copy p:last-of-type { margin-bottom: 24px; }

        /* Expertise */
        .expertise-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--border); }
        .expertise-item { padding: 30px 30px 32px 0; border-bottom: 1px solid var(--border); }
        .expertise-item:nth-child(even) { padding-left: 30px; padding-right: 0; border-left: 1px solid var(--border); }
        .expertise-item h3 { font-size: 21px; margin-bottom: 8px; }
        .expertise-item p { margin: 0; font-size: 16px; color: var(--muted); line-height: 1.65; max-width: 520px; }
        .expertise-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 28px; }

        /* Documentation dark */
        .doc-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.16); border-bottom: 1px solid rgba(255,255,255,.16); }
        .doc-group { padding: 30px 24px; min-width: 0; }
        .doc-group + .doc-group { border-left: 1px solid rgba(255,255,255,.16); }
        .doc-group h3 { font-size: 20px; margin-bottom: 18px; }
        .doc-list { list-style: none; padding: 0; margin: 0; }
        .doc-list li { position: relative; padding-left: 18px; color: #D8DDE6; font-size: 16px; line-height: 1.62; margin: 0 0 12px; }
        .doc-list li:last-child { margin-bottom: 0; }
        .doc-list li::before { content: ""; position: absolute; left: 0; top: .73em; width: 6px; height: 2px; background: var(--blush-text); }
        .dark-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 28px; }
        .dark-links .editorial-link { color: #fff !important; }
        .dark-links .editorial-link:hover { color: var(--blush-text) !important; }

        /* Standards */
        .standards-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .standard { padding: 34px 30px; }
        .standard + .standard { border-left: 1px solid var(--border); }
        .standard .kicker { color: var(--magenta); font-size: 16px; font-weight: 600; margin-bottom: 10px; }
        .standard h3 { margin-bottom: 14px; }
        .standard p { font-size: 16px; color: var(--text); margin-bottom: 0; }
        .standards-note { margin: 26px 0 0; font-size: 16px; color: var(--muted); max-width: 930px; }

        /* Manufacturing */
        .split-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .feature-panel { border: 1px solid #E6D8DF; border-radius: 28px; background: var(--blush); padding: 34px; }
        .feature-panel h3 { margin-bottom: 18px; }
        .system-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 28px; }
        .system-list { list-style: none; padding: 0; margin: 0; }
        .system-list li { padding: 11px 0; border-bottom: 1px solid rgba(122,21,66,.12); font-size: 16px; color: #3D2E36; }
        .system-list li:last-child { border-bottom: 0; }

        /* Avionics */
        .avionics-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: stretch; }
        .avionics-stack { border: 1px solid var(--border); border-radius: 28px; background: #fff; overflow: hidden; }
        .stack-row { display: grid; grid-template-columns: 44px 1fr; gap: 16px; padding: 24px 28px; align-items: start; }
        .stack-row + .stack-row { border-top: 1px solid var(--border); }
        .stack-icon { color: var(--magenta); padding-top: 2px; }
        .stack-row h3 { font-size: 19px; margin-bottom: 5px; }
        .stack-row p { margin: 0; font-size: 16px; color: var(--muted); line-height: 1.6; }

        /* MRO */
        .mro-header { display: grid; grid-template-columns: .82fr 1.18fr; gap: 80px; margin-bottom: 38px; align-items: start; }
        .mro-header .body-large { margin-bottom: 0; }
        .mro-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--border); }
        .mro-item { padding: 26px 28px 28px 0; border-bottom: 1px solid var(--border); }
        .mro-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--border); }
        .mro-item h3 { font-size: 20px; margin-bottom: 7px; }
        .mro-item p { font-size: 16px; color: var(--muted); margin: 0; }

        /* Operations */
        .ops-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .ops-column { padding: 30px 28px; }
        .ops-column + .ops-column { border-left: 1px solid var(--border); }
        .ops-icon { color: var(--magenta); margin-bottom: 16px; }
        .ops-column h3 { font-size: 21px; }
        .ops-column p { font-size: 16px; color: var(--muted); }
        .ops-column ul { margin: 16px 0 0; padding-left: 18px; color: var(--text); }
        .ops-column li { font-size: 16px; margin-bottom: 7px; }

        /* Training */
        .training-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .training-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; border-top: 1px solid var(--border); }
        .training-item { padding: 18px 0; border-bottom: 1px solid var(--border); font-size: 16px; color: var(--text); }
        .training-callout { margin-top: 24px; padding: 20px 22px; border-left: 3px solid var(--magenta); background: #fff; }
        .training-callout p { margin: 0; font-size: 16px; color: var(--text); }

        /* Advanced aerospace */
        .emerging-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 28px; }
        .emerging-panel { border: 1px solid var(--border); border-radius: 28px; padding: 34px; background: #fff; }
        .emerging-panel .icon-wrap { color: var(--magenta); margin-bottom: 20px; }
        .emerging-panel p { font-size: 16px; color: var(--text); }
        .emerging-panel ul { columns: 2; column-gap: 28px; margin: 22px 0 0; padding-left: 18px; }
        .emerging-panel li { break-inside: avoid; font-size: 16px; margin-bottom: 8px; color: var(--text); }

        /* Safety */
        .safety-lead { display: grid; grid-template-columns: .88fr 1.12fr; gap: 80px; margin-bottom: 38px; }
        .safety-lead p { margin-bottom: 0; }
        .safety-list { border-top: 1px solid rgba(255,255,255,.16); }
        .safety-row { display: grid; grid-template-columns: 46px .78fr 1.22fr; gap: 22px; align-items: start; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.16); }
        .safety-row .icon-wrap { color: var(--blush-text); padding-top: 2px; }
        .safety-row h3 { font-size: 19px; margin: 0; }
        .safety-row p { margin: 0; color: #D8DDE6; font-size: 16px; }
        .regulatory-note { margin-top: 26px; padding: 20px 22px; border: 1px solid rgba(255,255,255,.16); border-radius: 20px; color: #E5E8EE; font-size: 16px; }

        /* AI tiers */
        .ai-list { border-top: 1px solid var(--border); }
        .ai-row { display: grid; grid-template-columns: .68fr 1fr 1.45fr; gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--border); align-items: start; }
        .ai-label { color: var(--magenta); font-size: 16px; font-weight: 600; }
        .ai-row h3 { font-size: 20px; margin: 0; }
        .ai-row p { margin: 0; font-size: 16px; color: var(--muted); }

        /* Language assets */
        .assets-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 72px; align-items: start; }
        .asset-rows { border-top: 1px solid var(--border); }
        .asset-row { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--border); align-items: start; }
        .asset-row .icon-wrap { color: var(--magenta); padding-top: 2px; }
        .asset-row h3 { font-size: 19px; margin-bottom: 5px; }
        .asset-row p { margin: 0; font-size: 16px; color: var(--muted); }

        /* Formats */
        .format-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .format-col { padding: 28px 24px; }
        .format-col + .format-col { border-left: 1px solid var(--border); }
        .format-col .icon-wrap { color: var(--magenta); margin-bottom: 14px; }
        .format-col h3 { font-size: 20px; }
        .format-col p { font-size: 16px; color: var(--muted); margin-bottom: 0; }

        /* Languages */
        .language-band { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; align-items: center; }
        .language-band h2 { margin-bottom: 14px; }
        .language-band .body { margin-bottom: 22px; }
        .language-list { display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center; justify-content: flex-start; }
        .language-list span { font-size: 17px; color: #49313C; font-weight: 600; }
        .language-list span:not(:last-child)::after { content: "·"; margin-left: 18px; color: #B27790; }

        /* Why */
        .why-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--border); }
        .why-item { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 26px 28px 28px 0; border-bottom: 1px solid var(--border); }
        .why-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--border); }
        .why-item .icon-wrap { color: var(--magenta); padding-top: 2px; }
        .why-item h3 { font-size: 20px; margin-bottom: 6px; }
        .why-item p { margin: 0; font-size: 16px; color: var(--muted); }

        /* FAQ */
        .faq-wrap { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--border); }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-button {
          width: 100%;
          appearance: none;
          background: transparent;
          border: 0;
          min-height: 68px;
          padding: 20px 0;
          display: grid;
          grid-template-columns: 1fr 28px;
          gap: 24px;
          align-items: center;
          text-align: left;
          color: var(--ink);
          font: inherit;
          cursor: pointer;
        }
        .faq-question { font-size: 18px; line-height: 1.45; font-weight: 600; }
        .faq-toggle { width: 28px; height: 28px; border-radius: 50%; border: 1px solid #CBD1DA; display: grid; place-items: center; color: var(--magenta); font-weight: 600; }
        .faq-answer { padding: 0 58px 22px 0; font-size: 16px; color: var(--text); line-height: 1.72; }
        .faq-answer p { margin: 0; }

        /* CTA */
        .final-cta { padding-top: 88px; padding-bottom: 88px; background: var(--blush); }
        .final-cta-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .final-cta h2 { font-size: 40px; margin-bottom: 18px; }
        .final-cta p { max-width: 760px; margin: 0 auto; font-size: 18px; color: #55424B; }
        .final-cta .cta-row { justify-content: center; }

        @media (max-width: 1180px) {
          .section-pad { padding-left: 40px; padding-right: 40px; }
          .hero-grid { gap: 48px; }
          .hero-art { min-height: 440px; }
          .hero-art svg { min-height: 440px; }
          .doc-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .doc-group:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.16); }
          .doc-group:nth-child(4) { border-top: 1px solid rgba(255,255,255,.16); }
          .format-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .format-col:nth-child(3) { border-left: 0; border-top: 1px solid var(--border); }
          .format-col:nth-child(4) { border-top: 1px solid var(--border); }
        }

        @media (max-width: 900px) {
          .section-pad { padding-left: 24px; padding-right: 24px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .section.dense { padding-top: 72px; padding-bottom: 72px; }
          .hero { padding-top: 88px; padding-bottom: 88px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero-grid,
          .overview-grid,
          .split-grid,
          .avionics-grid,
          .mro-header,
          .training-grid,
          .safety-lead,
          .assets-grid,
          .language-band { grid-template-columns: 1fr; gap: 42px; }
          .hero-copy { max-width: 760px; }
          .hero-art { min-height: 400px; }
          .hero-art svg { min-height: 400px; }
          .trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 36px; }
          .expertise-item, .mro-item, .why-item, .standard, .ops-column, .format-col, .emerging-panel { min-width: 0; }
          .standards-grid,
          .ops-grid { grid-template-columns: 1fr; }
          .standard + .standard,
          .ops-column + .ops-column { border-left: 0; border-top: 1px solid var(--border); }
          .emerging-grid { grid-template-columns: 1fr; }
          .safety-row { grid-template-columns: 42px 1fr; }
          .safety-row p { grid-column: 2; }
          .ai-row { grid-template-columns: .7fr 1.3fr; }
          .ai-row p { grid-column: 2; }
        }

        @media (max-width: 620px) {
          .section-pad { padding-left: 20px; padding-right: 20px; }
          .section { padding-top: 68px; padding-bottom: 68px; }
          .section.dense { padding-top: 64px; padding-bottom: 64px; }
          .hero { padding-top: 72px; padding-bottom: 72px; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large { font-size: 18px; }
          .heading-group { margin-bottom: 36px; }
          .heading-group.center-mobile { text-align: center; }
          .heading-group.center-mobile .intro { margin-left: auto; margin-right: auto; }
          .cta-row { flex-direction: column; }
          .btn { width: 100%; min-height: 50px; }
          .hero-grid { gap: 38px; }
          .hero-art { min-height: 330px; border-radius: 24px; }
          .hero-art svg { min-height: 330px; }
          .trust-grid { grid-template-columns: 1fr; padding: 26px 0; }
          .expertise-grid,
          .mro-grid,
          .why-grid { grid-template-columns: 1fr; }
          .expertise-item,
          .expertise-item:nth-child(even),
          .mro-item,
          .mro-item:nth-child(even),
          .why-item,
          .why-item:nth-child(even) {
            padding: 24px 0;
            border-left: 0;
          }
          .expertise-links { display: block; }
          .expertise-links .editorial-link { display: flex; width: 100%; }
          .doc-grid { grid-template-columns: 1fr; }
          .doc-group,
          .doc-group + .doc-group,
          .doc-group:nth-child(3),
          .doc-group:nth-child(4) { border-left: 0; border-top: 1px solid rgba(255,255,255,.16); padding: 26px 0; }
          .doc-group:first-child { border-top: 0; }
          .dark-links { display: block; }
          .dark-links .editorial-link { display: flex; width: 100%; }
          .standard { padding: 28px 0; }
          .feature-panel { padding: 26px 22px; border-radius: 24px; }
          .system-grid,
          .training-list { grid-template-columns: 1fr; }
          .avionics-stack { border-radius: 24px; }
          .stack-row { padding: 22px 20px; grid-template-columns: 38px 1fr; }
          .ops-column { padding: 28px 0; }
          .emerging-panel { padding: 28px 22px; border-radius: 24px; }
          .emerging-panel ul { columns: 1; }
          .safety-row { grid-template-columns: 38px 1fr; gap: 14px; }
          .ai-row { grid-template-columns: 1fr; gap: 8px; }
          .ai-row p { grid-column: 1; }
          .asset-row { grid-template-columns: 38px 1fr; }
          .format-grid { grid-template-columns: 1fr; }
          .format-col,
          .format-col + .format-col,
          .format-col:nth-child(3),
          .format-col:nth-child(4) { border-left: 0; border-top: 1px solid var(--border); padding: 24px 0; }
          .format-col:first-child { border-top: 0; }
          .language-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px 18px; width: 100%; }
          .language-list span { font-size: 16px; min-width: 0; }
          .language-list span:not(:last-child)::after { display: none; }
          .language-band > div:first-child h2 { text-align: center; }
          .language-band > div:first-child .body { text-align: left; }
          .faq-button { grid-template-columns: 1fr 28px; gap: 16px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding-top: 72px; padding-bottom: 72px; }
          .final-cta h2 { font-size: 32px; }
        }

        @media (max-width: 340px) {
          h1 { font-size: 36px; }
          .hero-art { min-height: 300px; }
          .hero-art svg { min-height: 300px; }
          .stack-row { grid-template-columns: 34px 1fr; padding-left: 16px; padding-right: 16px; }
          .feature-panel, .emerging-panel { padding-left: 18px; padding-right: 18px; }
          .language-list { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <main>
        <section className="hero section-pad">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Aerospace &amp; Aviation Translation Services</h1>
              <p className="body-large">
                Stepes delivers professional aerospace and aviation translation services for aircraft manufacturers, aerospace suppliers, airlines, MRO providers, avionics companies, airports, training organizations, UAS developers, and space technology companies worldwide.
              </p>
              <p className="body-large" style={{ marginTop: 16 }}>
                From engineering specifications and aircraft maintenance manuals to avionics software, technical publications, flight operations content, and multilingual training, we combine aerospace subject-matter expertise with advanced translation technology and professional human review.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="https://www.stepes.com/online-translation-quote/">
                  <span>Get a Translation Quote</span><ExternalArrow />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">
                  <span>Talk to an Expert</span>
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <svg viewBox="0 0 620 500" role="img" focusable="false">
                <defs>
                  <linearGradient id="magentaFade" x1="0" x2="1">
                    <stop offset="0" stopColor="#C11D63" stopOpacity=".14" />
                    <stop offset="1" stopColor="#C11D63" stopOpacity=".02" />
                  </linearGradient>
                </defs>
                <g stroke="#697382" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M88 277c92-44 183-70 271-78 41-4 84-5 126-1l37 4-33 19-118 18-62 97-21 3 23-92-105 16-68 82-18 2 29-75-50 5-31-14 18-6Z" />
                  <path d="m320 199 9-72 18-2 18 70" />
                  <path d="M149 288 86 333" />
                  <path d="M142 296 94 353" />
                  <path d="M470 197c-6-30-4-62 7-96" />
                  <path d="M470 101c24 18 37 39 39 63" />
                  <circle cx="482" cy="92" r="6" stroke="#C11D63" />
                  <path d="M488 84c19-16 40-25 64-26" stroke="#C11D63" />
                  <path d="M495 95c20 1 38 8 52 21" stroke="#C11D63" />
                  <rect x="462" y="56" width="42" height="20" rx="4" transform="rotate(-18 483 66)" />
                  <rect x="525" y="40" width="40" height="22" rx="3" transform="rotate(-18 545 51)" />
                  <path d="M508 59 526 53" />
                  <circle cx="118" cy="112" r="46" />
                  <path d="M73 112h90M118 66c12 13 18 28 18 46s-6 33-18 46M118 66c-12 13-18 28-18 46s6 33 18 46" />
                  <path d="M73 98h90M73 126h90" />
                  <path d="M181 105h59" stroke="#C11D63" />
                  <circle cx="250" cy="105" r="7" stroke="#C11D63" />
                  <path d="M257 105h65" stroke="#C11D63" />
                  <rect x="339" y="84" width="98" height="42" rx="10" />
                  <path d="M354 98h48M354 110h66" />
                  <path d="M386 126v28" stroke="#C11D63" />
                  <circle cx="386" cy="164" r="6" stroke="#C11D63" />
                  <path d="M386 170v24" stroke="#C11D63" />
                  <path d="M70 405h468" stroke="#A7AFBB" strokeDasharray="6 10" />
                  <path d="M115 405v-31M220 405v-22M327 405v-35M435 405v-24" stroke="#C11D63" />
                  <circle cx="115" cy="366" r="5" stroke="#C11D63" />
                  <circle cx="220" cy="375" r="5" stroke="#C11D63" />
                  <circle cx="327" cy="362" r="5" stroke="#C11D63" />
                  <circle cx="435" cy="373" r="5" stroke="#C11D63" />
                </g>
                <path d="M55 390c99-54 204-78 315-70 72 5 135 22 194 53v70H55v-53Z" fill="url(#magentaFade)" />
              </svg>
            </div>
          </div>
        </section>

        <section className="trust-band section-pad" aria-label="Aerospace translation capabilities">
          <div className="shell trust-shell">
            <div className="trust-grid">
              {trustItems.map((item) => (
                <div className="trust-item" key={item.title}>
                  <div className="icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pad">
          <div className="shell overview-grid">
            <div>
              <h2>Translation Expertise Across the Aerospace &amp; Aviation Lifecycle</h2>
            </div>
            <div className="overview-copy body">
              <p>
                Aerospace content moves through a long and highly interconnected lifecycle. Aircraft and systems progress from research and engineering through manufacturing, certification, operation, maintenance, training, modification, and aftermarket support. Each stage creates specialized information that must remain clear and consistent across global engineering teams, suppliers, operators, technicians, authorities, and end users.
              </p>
              <p>
                Stepes provides end-to-end aerospace translation and localization across this lifecycle. We translate engineering specifications for global suppliers, technical publications for maintenance teams, software interfaces for connected aviation systems, training content for multinational workforces, and operational communications for airlines and airports.
              </p>
              <p>
                Translation memory, terminology management, professional linguists, automated quality controls, and enterprise workflows work together to maintain approved language across content types and successive revisions. This is especially valuable for aerospace programs where system names, component terminology, warnings, abbreviations, and procedures may recur across thousands of pages and multiple product generations.
              </p>
              <a className="editorial-link" href="https://www.stepes.com/technical-translation-services/">
                Technical Translation Services <ExternalArrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section section-pad soft-section" id="industry-expertise">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Aerospace &amp; Aviation Expertise From Aircraft to Space Systems</h2>
              <p className="body-large intro">
                Stepes supports specialized multilingual requirements across aircraft engineering, aviation operations, advanced flight technologies, and the expanding commercial space ecosystem.
              </p>
            </div>
            <div className="expertise-grid">
              {expertiseItems.map((item) => (
                <article className="expertise-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pad dark-section" id="technical-documentation">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Technical Translation for Aerospace Documentation</h2>
              <p className="body-large intro">
                Aerospace documentation must preserve more than general meaning. Component terminology, numerical values, units, procedural sequence, warnings, cautions, cross-references, and document structure all affect how technical information is understood and used.
              </p>
            </div>
            <div className="doc-grid">
              {documentationGroups.map((group) => (
                <article className="doc-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="doc-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="dark-links">
              <a className="editorial-link" href="https://www.stepes.com/user-manual-translation-services/">User Manual Translation Services <ExternalArrow /></a>
              <a className="editorial-link" href="https://www.stepes.com/sop-translation-services/">SOP Translation Services <ExternalArrow /></a>
              <a className="editorial-link" href="https://www.stepes.com/work-instruction-translation-services/">Work Instruction Translation Services <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section className="section section-pad" id="technical-publications">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Aerospace Technical Publications Built for Complex Standards</h2>
              <p className="body-large intro">
                Stepes supports multilingual technical publications produced in structured aerospace documentation environments, including S1000D, ATA iSpec 2200, and ASD-STE100 Simplified Technical English.
              </p>
            </div>
            <div className="standards-grid">
              <article className="standard">
                <div className="kicker">S1000D</div>
                <h3>Structured Technical Publication Translation</h3>
                <p>
                  Support structured data modules, reusable technical information, common-source publishing, references, metadata, and terminology while maintaining multilingual content relationships throughout the documentation lifecycle.
                </p>
              </article>
              <article className="standard">
                <div className="kicker">ATA iSpec 2200</div>
                <h3>Aircraft Engineering &amp; Maintenance Information</h3>
                <p>
                  Translate content produced within ATA-based documentation environments while maintaining consistent aircraft, system, component, maintenance, and numbering terminology across manuals and successive revisions.
                </p>
              </article>
              <article className="standard">
                <div className="kicker">ASD-STE100 · ISSUE 9</div>
                <h3>Simplified Technical English Workflows</h3>
                <p>
                  Align multilingual terminology, translation instructions, and review workflows with source content written using the current ASD-STE100 standard, designed to improve clarity and reduce ambiguity in technical information.
                </p>
              </article>
            </div>
            <p className="standards-note">
              Stepes supports translation and multilingual publishing workflows for content developed within these technical environments. Translation itself does not constitute certification of compliance with S1000D, ATA iSpec 2200, ASD-STE100, or any aviation regulatory standard.
            </p>
            <div style={{ marginTop: 22 }}>
              <a className="editorial-link" href="https://www.stepes.com/technical-translation-services/aerospace-aviation/">
                Aerospace Technical Translation Services <ExternalArrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section section-pad soft-section" id="manufacturing">
          <div className="shell split-grid">
            <div>
              <h2>Aerospace Manufacturing Translation From Engineering to Production</h2>
              <p className="body-large">
                Aerospace manufacturing connects OEMs with global networks of engineering teams, production facilities, component manufacturers, technology companies, and specialist suppliers. Multilingual information must remain consistent as technical content moves between organizations and across borders.
              </p>
              <p className="body">
                Stepes translates engineering specifications, supplier requirements, production documentation, quality procedures, bills of materials, assembly instructions, inspection documentation, SOPs, work instructions, and technical training. Translation memory and approved terminology help maintain component names, product nomenclature, safety language, and engineering concepts across programs and product revisions.
              </p>
              <div className="expertise-links">
                <a className="editorial-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services <ExternalArrow /></a>
                <a className="editorial-link" href="https://www.stepes.com/electronics-translation-services/">Electronics Translation Services <ExternalArrow /></a>
              </div>
            </div>
            <aside className="feature-panel">
              <h3>Aerospace Manufacturing Content</h3>
              <div className="system-grid">
                <ul className="system-list">
                  <li>Airframes &amp; aerostructures</li>
                  <li>Aircraft engines &amp; propulsion</li>
                  <li>Landing gear</li>
                  <li>Hydraulic &amp; pneumatic systems</li>
                  <li>Flight-control components</li>
                  <li>Aircraft interiors</li>
                </ul>
                <ul className="system-list">
                  <li>Composites &amp; advanced materials</li>
                  <li>Electrical &amp; electronic systems</li>
                  <li>Sensors &amp; instrumentation</li>
                  <li>Tooling &amp; production equipment</li>
                  <li>Inspection &amp; testing</li>
                  <li>Supplier &amp; procurement content</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-pad" id="avionics">
          <div className="shell avionics-grid">
            <div>
              <h2>Avionics and Digital Aviation Localization</h2>
              <p className="body-large">
                Aircraft and aviation operations are increasingly software-enabled, connected, and data-driven. Digital platforms now support navigation, aircraft health monitoring, predictive maintenance, fleet operations, training, and passenger experience.
              </p>
              <p className="body">
                Stepes localizes interfaces, resource files, help systems, technical documentation, and recurring software releases while keeping terminology aligned across the digital product and related manuals, training, and support content.
              </p>
              <div className="expertise-links">
                <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services <ExternalArrow /></a>
                <a className="editorial-link" href="https://www.stepes.com/app-localization-services/">App Localization Services <ExternalArrow /></a>
              </div>
            </div>
            <div className="avionics-stack">
              <div className="stack-row">
                <div className="stack-icon"><Icon name="chip" /></div>
                <div><h3>Cockpit &amp; Avionics Systems</h3><p>Navigation, communications, flight-control, onboard, and embedded software interfaces.</p></div>
              </div>
              <div className="stack-row">
                <div className="stack-icon"><Icon name="code" /></div>
                <div><h3>Electronic Flight Bag &amp; Operations Apps</h3><p>Flight planning, crew applications, operational software, and mobile aviation experiences.</p></div>
              </div>
              <div className="stack-row">
                <div className="stack-icon"><Icon name="signal" /></div>
                <div><h3>Aircraft Health &amp; Predictive Maintenance</h3><p>Diagnostics, aircraft health monitoring, maintenance analytics, and service platforms.</p></div>
              </div>
              <div className="stack-row">
                <div className="stack-icon"><Icon name="training" /></div>
                <div><h3>Simulation &amp; Technical Training Software</h3><p>Flight, maintenance, ground-operations, and technical learning applications.</p></div>
              </div>
              <div className="stack-row">
                <div className="stack-icon"><Icon name="layers" /></div>
                <div><h3>Fleet, Airport &amp; Ground Systems</h3><p>Fleet-management platforms, airport systems, support portals, and connected operational tools.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-pad blush-section" id="mro">
          <div className="shell">
            <div className="mro-header">
              <div>
                <h2>Translation for Aviation MRO &amp; Aftermarket Operations</h2>
              </div>
              <p className="body-large">
                Aircraft remain in service for decades, creating a continuous need for maintenance, inspection, repair, overhaul, modifications, spare parts, technical support, software, and workforce training. Stepes helps global MRO organizations keep multilingual content aligned as fleets, maintenance programs, and service requirements evolve.
              </p>
            </div>
            <div className="mro-grid">
              {mroItems.map(([title, text]) => (
                <article className="mro-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <a className="editorial-link" href="https://www.stepes.com/mro-translation-services/">Explore MRO Translation Services <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section className="section section-pad" id="operations">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Multilingual Content for Airlines, Airports &amp; Flight Operations</h2>
              <p className="body-large intro">
                Global aviation depends on clear communication not only inside the aircraft, but throughout the operational network surrounding every flight.
              </p>
            </div>
            <div className="ops-grid">
              <article className="ops-column">
                <div className="ops-icon"><Icon name="plane" /></div>
                <h3>Airlines &amp; Flight Operations</h3>
                <p>Support international flight, cabin, customer, and digital operations with consistent multilingual content.</p>
                <ul>
                  <li>Flight operations documentation</li>
                  <li>Cabin crew manuals &amp; training</li>
                  <li>Safety communications</li>
                  <li>Passenger information</li>
                  <li>Airline websites &amp; apps</li>
                  <li>Loyalty, service &amp; marketing content</li>
                </ul>
                <a className="editorial-link" href="https://www.stepes.com/airline-translation-services/">Airline Translation Services <ExternalArrow /></a>
              </article>
              <article className="ops-column">
                <div className="ops-icon"><Icon name="airport" /></div>
                <h3>Airports &amp; Ground Operations</h3>
                <p>Translate operational and passenger-facing information for airport authorities, operators, contractors, and service organizations.</p>
                <ul>
                  <li>Airport operating procedures</li>
                  <li>Ground handling &amp; ramp operations</li>
                  <li>Emergency response information</li>
                  <li>Workforce safety content</li>
                  <li>Passenger communications</li>
                  <li>Signage &amp; wayfinding</li>
                </ul>
              </article>
              <article className="ops-column">
                <div className="ops-icon"><Icon name="signal" /></div>
                <h3>Air Traffic &amp; Air Navigation</h3>
                <p>Support air-navigation technologies and operational environments with specialized technical and training translation.</p>
                <ul>
                  <li>System manuals</li>
                  <li>Operational procedures</li>
                  <li>Technical training</li>
                  <li>Software interfaces</li>
                  <li>Engineering documentation</li>
                  <li>Safety information</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-pad soft-section" id="training">
          <div className="shell training-grid">
            <div>
              <h2>Training Localization for a Global Aviation Workforce</h2>
              <p className="body-large">
                Aviation depends on highly trained pilots, maintenance technicians, cabin crew, engineers, ground personnel, and operational teams. As the industry grows and technologies change, organizations need scalable multilingual training that keeps instruction clear and consistent across locations.
              </p>
              <p className="body">
                Stepes localizes instructor-led, digital, simulation, multimedia, and LMS-based aviation learning while aligning terminology with the manuals, software, procedures, and equipment employees use in real operations.
              </p>
              <a className="editorial-link" href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services <ExternalArrow /></a>
            </div>
            <div>
              <div className="training-list">
                {[
                  "Pilot training",
                  "Maintenance technician training",
                  "Cabin crew training",
                  "Safety & recurrent training",
                  "Flight & maintenance simulation",
                  "Instructor materials",
                  "Technical courseware",
                  "Learning assessments",
                  "LMS content",
                  "Video & animation",
                  "Subtitles & captions",
                  "Multilingual voice-over",
                ].map((item) => <div className="training-item" key={item}>{item}</div>)}
              </div>
              <div className="training-callout">
                <p><strong>One terminology system across learning and operations.</strong> Translation memory and terminology management help keep training language aligned with the technical content employees encounter on the job.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-pad" id="advanced-aerospace">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Localization for Advanced Flight &amp; Space Systems</h2>
              <p className="body-large intro">
                Aerospace innovation increasingly brings together hardware engineering, electronics, software, autonomy, cloud platforms, technical documentation, and new operational models. Stepes supports multilingual content across these connected environments.
              </p>
            </div>
            <div className="emerging-grid">
              <article className="emerging-panel">
                <div className="icon-wrap"><Icon name="drone" size={26} /></div>
                <h3>UAS, Drones &amp; Advanced Air Mobility</h3>
                <p>
                  Translate technical, software, training, operational, and product content for unmanned aircraft systems, commercial drones, autonomous technologies, and emerging Advanced Air Mobility ecosystems.
                </p>
                <ul>
                  <li>Commercial drones</li>
                  <li>Remote-pilot systems</li>
                  <li>Ground-control stations</li>
                  <li>Fleet-management platforms</li>
                  <li>BVLOS operations content</li>
                  <li>Autonomous-flight technologies</li>
                  <li>eVTOL aircraft</li>
                  <li>Vertiport technologies</li>
                </ul>
              </article>
              <article className="emerging-panel">
                <div className="icon-wrap"><Icon name="satellite" size={26} /></div>
                <h3>Space &amp; Satellite Systems</h3>
                <p>
                  Extend multilingual aerospace communications beyond atmospheric flight with translation for spacecraft engineering, launch systems, satellites, payloads, ground systems, mission technologies, software, testing, and technical training.
                </p>
                <ul>
                  <li>Spacecraft engineering</li>
                  <li>Launch vehicles</li>
                  <li>Propulsion systems</li>
                  <li>Satellites &amp; payloads</li>
                  <li>Ground stations</li>
                  <li>Mission-control systems</li>
                  <li>Technical manuals</li>
                  <li>Commercial space content</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-pad dark-section" id="quality">
          <div className="shell">
            <div className="safety-lead">
              <div>
                <p className="eyebrow">SAFETY &amp; QUALITY</p>
                <h2>Translation Workflows Designed for Safety-Critical Content</h2>
              </div>
              <p className="body-large">
                Aerospace and aviation operate within complex quality, safety, airworthiness, and regulatory environments. The appropriate translation workflow depends on what the content does, who will use it, and the consequences of misunderstanding.
              </p>
            </div>
            <div className="safety-list">
              {safetyControls.map(([title, text], index) => (
                <div className="safety-row" key={title}>
                  <div className="icon-wrap"><Icon name={index === 0 ? "users" : index === 1 ? "book" : index === 2 ? "check" : index === 3 ? "shield" : "layers"} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="regulatory-note">
              Stepes supports multilingual documentation used in aviation environments shaped by FAA, EASA, ICAO, national civil aviation authority, OEM, and operator requirements. Our role is to support the linguistic and technical integrity of translated information; final regulatory, certification, or airworthiness acceptance remains subject to the applicable authority, program, organization, and jurisdiction.
            </div>
          </div>
        </section>

        <section className="section section-pad" id="ai-human-workflow">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>The Right Level of AI and Human Review for Every Aerospace Content Type</h2>
              <p className="body-large intro">
                AI can increase translation speed and reuse, but aerospace content should not be treated as one undifferentiated risk category. Stepes matches automation, terminology, specialist review, and customer validation to the purpose and impact of the content.
              </p>
            </div>
            <div className="ai-list">
              {aiTiers.map((tier) => (
                <article className="ai-row" key={tier.label}>
                  <div className="ai-label">{tier.label}</div>
                  <h3>{tier.title}</h3>
                  <p>{tier.text}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <a className="editorial-link" href="https://www.stepes.com/ai-human-translation-workflow/">Explore the AI + Human Translation Workflow <ExternalArrow /></a>
            </div>
          </div>
        </section>

        <section className="section section-pad soft-section" id="terminology">
          <div className="shell assets-grid">
            <div>
              <p className="eyebrow">LANGUAGE ASSETS</p>
              <h2>Keep Aerospace Terminology Consistent Across Every Revision</h2>
              <p className="body-large">
                Aerospace documentation is rarely translated once and forgotten. Aircraft, systems, manuals, software, and training continue to evolve through revisions, service bulletins, modifications, new configurations, and recurring releases.
              </p>
              <p className="body">
                Stepes builds reusable multilingual language assets so approved terminology and translations become more valuable as your program matures—reducing duplicated effort while improving continuity across years of content updates.
              </p>
              <div className="expertise-links">
                <a className="editorial-link" href="https://www.stepes.com/translation-memory/">Translation Memory Management <ExternalArrow /></a>
                <a className="editorial-link" href="https://www.stepes.com/terminology-management/">Terminology Management <ExternalArrow /></a>
              </div>
            </div>
            <div className="asset-rows">
              <div className="asset-row">
                <div className="icon-wrap"><Icon name="layers" /></div>
                <div><h3>Translation Memory</h3><p>Reuse approved identical and similar translations to improve consistency, speed, and efficiency across new documents and revisions.</p></div>
              </div>
              <div className="asset-row">
                <div className="icon-wrap"><Icon name="book" /></div>
                <div><h3>Terminology Management</h3><p>Manage approved translations for aircraft systems, component names, abbreviations, warnings, software labels, and company-specific terminology.</p></div>
              </div>
              <div className="asset-row">
                <div className="icon-wrap"><Icon name="refresh" /></div>
                <div><h3>Revision-Based Translation</h3><p>Leverage existing multilingual content so teams can focus on changed information instead of retranslating unchanged material.</p></div>
              </div>
              <div className="asset-row">
                <div className="icon-wrap"><Icon name="users" /></div>
                <div><h3>Reviewer Feedback</h3><p>Capture approved customer edits and program preferences so future translation work better reflects established terminology and style.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-pad" id="formats">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <p className="eyebrow">PRODUCTION-READY DELIVERY</p>
              <h2>Aerospace Content in the Formats Your Teams Already Use</h2>
              <p className="body-large intro">
                Stepes supports technical, business, design, software, structured-content, and multimedia formats so multilingual deliverables can move efficiently into review, publishing, training, and product-release workflows.
              </p>
            </div>
            <div className="format-grid">
              <article className="format-col">
                <div className="icon-wrap"><Icon name="code" /></div>
                <h3>Technical Publishing</h3>
                <p>XML, SGML, HTML, structured documentation, exported CMS content, and other technical-publication formats.</p>
              </article>
              <article className="format-col">
                <div className="icon-wrap"><Icon name="file" /></div>
                <h3>Engineering &amp; Business</h3>
                <p>Microsoft Word, Excel, PowerPoint, PDFs, reports, specifications, tables, and engineering content exports.</p>
              </article>
              <article className="format-col">
                <div className="icon-wrap"><Icon name="layers" /></div>
                <h3>Design &amp; Publishing</h3>
                <p>Adobe InDesign and other publishing files containing multilingual text, graphics, callouts, tables, and technical illustrations.</p>
              </article>
              <article className="format-col">
                <div className="icon-wrap"><Icon name="training" /></div>
                <h3>Software &amp; Training</h3>
                <p>JSON, XML, PO, properties and resource files, online help, LMS courseware, video, audio, subtitles, and voice-over.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section dense section-pad blush-section" id="languages">
          <div className="shell language-band">
            <div>
              <h2>Aerospace Translation Services in 100+ Languages</h2>
              <p className="body">
                Support engineering centers, manufacturing facilities, suppliers, airlines, MRO locations, training programs, and customer markets through one coordinated multilingual workflow.
              </p>
              <a className="editorial-link" href="https://www.stepes.com/translation-languages/">Explore Translation Languages <ExternalArrow /></a>
            </div>
            <div className="language-list" aria-label="Common aerospace translation languages">
              {[
                "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Arabic", "Dutch", "Polish", "Vietnamese"
              ].map((lang) => <span key={lang}>{lang}</span>)}
            </div>
          </div>
        </section>

        <section className="section section-pad" id="why-stepes">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <p className="eyebrow">WHY STEPES</p>
              <h2>Built for Complex Global Aerospace Programs</h2>
              <p className="body-large intro">
                Bring technical expertise, professional human review, enterprise language assets, and modern localization technology together in one connected multilingual workflow.
              </p>
            </div>
            <div className="why-grid">
              {[
                ["plane", "Aerospace & Engineering Expertise", "Technical content is matched with linguists experienced in engineering, manufacturing, electronics, software, aviation, and related subject areas."],
                ["layers", "AI + Human Quality", "Use AI and automation where they improve efficiency while preserving professional human expertise for content that requires technical judgment and stronger assurance."],
                ["book", "Enterprise Terminology Control", "Translation memory, terminology databases, approved glossaries, and reviewer feedback help keep language consistent across products, teams, and revisions."],
                ["check", "Structured Quality Assurance", "Combine linguistic review, terminology checks, automated QA, technical validation, and optional independent review according to project needs."],
                ["refresh", "Continuous Localization", "Support recurring documentation, software releases, training updates, product revisions, and multilingual content that changes continuously."],
                ["shield", "Secure Enterprise Workflows", "Support proprietary engineering, operational, supplier, and technical content through controlled project access and enterprise translation workflows."],
              ].map(([icon, title, text]) => (
                <article className="why-item" key={title}>
                  <div className="icon-wrap"><Icon name={icon} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pad soft-section" id="faq">
          <div className="shell">
            <div className="heading-group center center-mobile">
              <h2>Aerospace &amp; Aviation Translation FAQs</h2>
              <p className="body-large intro">
                Answers to common questions about aircraft documentation, technical-publication standards, aviation software, MRO, terminology, and AI-assisted translation workflows.
              </p>
            </div>
            <div className="faq-wrap">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={faq.q}>
                    <button
                      type="button"
                      className="faq-button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="faq-question">{faq.q}</span>
                      <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${index}`} className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="shell final-cta-inner">
            <h2>Take Your Aerospace Content Global With Confidence</h2>
            <p>
              From aircraft engineering and manufacturing to technical publications, MRO, avionics, flight operations, training, Advanced Air Mobility, and space systems, Stepes helps aerospace organizations communicate clearly across languages with technical expertise, AI-powered efficiency, and professional human review.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://www.stepes.com/online-translation-quote/">
                <span>Get a Translation Quote</span><ExternalArrow />
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
