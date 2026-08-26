import React, { useState } from "react";

const Icon = ({ name, size = 24 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    crop: <><path d="M12 21V10"/><path d="M12 13c-4.5 0-7-2.3-7-6 4.5 0 7 2.2 7 6Z"/><path d="M12 9c4.5 0 7-2.3 7-6-4.5 0-7 2.2-7 6Z"/></>,
    flask: <><path d="M9 3h6"/><path d="M10 3v5l-5 9a2.5 2.5 0 0 0 2.2 4h9.6A2.5 2.5 0 0 0 19 17l-5-9V3"/><path d="M7.5 16h9"/></>,
    tractor: <><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="2"/><path d="M10 17h5"/><path d="M10 17V9h5l2 4h2"/><path d="M10 12H6l-1 2"/><path d="M13 9V5h3"/></>,
    robot: <><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M9 12h.01M15 12h.01"/><path d="M9 15h6"/><path d="M12 7V4"/><circle cx="12" cy="3" r="1"/></>,
    ai: <><path d="M15 3.5l1.25 4.25L20.5 9l-4.25 1.25L15 14.5l-1.25-4.25L9.5 9l4.25-1.25L15 3.5Z"/><path d="M6.5 6.5l.65 2.05 2.05.65-2.05.65-.65 2.05-.65-2.05-2.05-.65 2.05-.65.65-2.05Z"/><path d="M8.5 14.5l.85 2.65 2.65.85-2.65.85-.85 2.65-.85-2.65-2.65-.85 2.65-.85.85-2.65Z"/></>,
    livestock: <><path d="M4 14c0-4 3-7 7-7h3c3 0 5 2 5 5v5"/><path d="M7 17v3M16 17v3"/><path d="M19 10h2v3"/><path d="M4 14H2"/><path d="M9 7 7 4M15 7l2-3"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 0-5 5L3.5 17.5a2.1 2.1 0 1 0 3 3l6.2-6.2a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"/></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="m7 12 3-3 2 2 4-4"/></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></>,
    video: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16 9"/></>,
    translate: <><path d="M4 5h8M8 3v2"/><path d="M6 5c.4 4 2 6.5 5 8"/><path d="M10.5 5c-.5 3.2-2 5.4-4.8 7"/><path d="M13 18h7"/><path d="m14.5 18 2.5-7 2.5 7"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const ArrowLink = ({ href, children, light = false }) => (
  <a className={`editorial-link${light ? " light" : ""}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={17}/>
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, center = true, light = false, id }) => (
  <div className={`heading-group${center ? " centered" : ""}${light ? " light" : ""}`} id={id}>
    {eyebrow && <div className={`eyebrow${light ? " eyebrow-light" : ""}`}>{eyebrow}</div>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>
);

const agricultureLogos = [
  { name: "Wilbur-Ellis", src: "/images/agriculture-clients/wilbur-ellis.svg" },
  { name: "Brinly", src: "/images/agriculture-clients/brinly.svg" },
  { name: "Syngenta", src: "/images/agriculture-clients/syngenta.svg" },
  { name: "AGCO", src: "/images/agriculture-clients/agco.svg" },
  { name: "TechnoServe", src: "/images/agriculture-clients/technoserve.svg" },
  { name: "Taranis", src: "/images/agriculture-clients/taranis.svg" },
  { name: "AgriFORCE", src: "/images/agriculture-clients/agriforce.svg" },
  { name: "Oregon Farm Bureau", src: "/images/agriculture-clients/oregon-farm-bureau.svg" }
];

const ClientLogo = ({ logo }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="logo-card">
      {!failed && (
        <img
          className="client-logo"
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {failed && <span className="logo-fallback">{logo.name}</span>}
    </div>
  );
};

const LogoMarquee = () => (
  <div className="logo-marquee" aria-label="Representative agriculture and AgTech clients">
    <div className="logo-track">
      <div className="logo-set">
        {agricultureLogos.map((logo) => <ClientLogo logo={logo} key={logo.name}/>)}
      </div>
      <div className="logo-set duplicate" aria-hidden="true">
        {agricultureLogos.map((logo) => <ClientLogo logo={logo} key={`duplicate-${logo.name}`}/>)}
      </div>
    </div>
  </div>
);

const domainCards = [
  { icon:"crop", title:"Crop Science, Seeds & Agricultural Biotechnology", text:"Agronomy, plant breeding, seed technologies, genetics, agricultural biotechnology, field trials, soil science, crop performance, and technical research content." },
  { icon:"flask", title:"Agrochemicals, Fertilizers & Crop Protection", text:"Crop-protection products, fertilizers, biologicals, labels, application instructions, technical data, SDS, environmental information, and product training." },
  { icon:"tractor", title:"Farm Machinery & Agricultural Equipment", text:"Operator manuals, service documentation, safety content, parts information, diagnostics, interfaces, technical specifications, dealer materials, and training." },
  { icon:"ai", title:"Precision Agriculture, Robotics & AgTech", text:"Autonomous equipment, agricultural robots, drones, remote sensing, IoT sensors, smart irrigation, farm-management platforms, analytics, software, and mobile apps." },
  { icon:"livestock", title:"Livestock & Animal Agriculture", text:"Dairy, cattle, poultry, swine, feed, animal nutrition, breeding, husbandry, production equipment, farm operations, and technical training." },
  { icon:"globe", title:"Sustainable Agriculture, Research & Global Programs", text:"Soil health, regenerative practices, water management, climate-smart agriculture, conservation, agricultural research, education, development, and policy communications." }
];

const machineryItems = [
  ["Operator and Owner Documentation", "Setup, calibration, operation, adjustment, transport, cleaning, storage, and safe equipment use."],
  ["Maintenance and Field Service", "Preventive maintenance, inspection, repair, troubleshooting, and diagnostic information for global service teams."],
  ["Parts and Component Information", "Consistent component names across catalogs, service documentation, diagrams, ordering systems, and technical support."],
  ["Machine Interfaces and Controls", "Button labels, settings, status messages, alerts, operating modes, and terminology aligned with supporting documentation."],
  ["Safety Communication", "Warnings, cautions, hazard descriptions, protective measures, and emergency procedures translated with appropriate technical care."],
  ["Dealer and Technician Training", "Technical courses, certifications, product demonstrations, eLearning, and field-service training for global channel networks."]
];

const agtechItems = [
  ["Machine Interfaces", "Menus, controls, operating modes, warnings, diagnostics, configuration, and status messages."],
  ["Farm Management Platforms", "Dashboards, planning tools, field records, operational workflows, reporting, and analytics."],
  ["Mobile Applications", "Onboarding, notifications, field workflows, settings, alerts, data entry, support, and connected equipment controls."],
  ["Online Help & Knowledge Bases", "Setup guidance, troubleshooting, FAQs, feature information, and multilingual self-service support."],
  ["Technical Documentation", "Installation, configuration, operation, maintenance, integration, and product-support content."],
  ["Training & eLearning", "Operator training, dealer education, technician certification, customer onboarding, and product demonstrations."],
  ["Web & Marketing Experiences", "Product pages, campaigns, demonstrations, downloads, release information, and global launch content."]
];

const contentColumns = [
  {title:"Technical & Product", items:["Operator and user manuals","Installation instructions","Service and repair manuals","Maintenance documentation","Technical specifications","Parts catalogs","Troubleshooting guides","Equipment documentation"]},
  {title:"Scientific & Research", items:["Agronomic studies","Field-trial materials","Crop-science documentation","Seed and genetics content","Biotechnology materials","Laboratory documents","Scientific papers","Technical white papers"]},
  {title:"Safety & Regulatory Support", items:["Product labels","Safety Data Sheets","Handling instructions","Technical product information","Certifications","Market-access support documents","Environmental communications","Quality documentation"]},
  {title:"Software & Digital", items:["Agricultural software","Equipment interfaces","Mobile applications","Farm-management platforms","Websites","Online help","Knowledge bases","Dashboards and alerts"]},
  {title:"Training & Learning", items:["Operator training","Technician courses","Dealer training","eLearning programs","Safety courses","Product onboarding","Instructional videos","Certification materials"]},
  {title:"Marketing & Commercial", items:["Websites","Product brochures","Sales materials","Digital campaigns","Packaging","Distributor content","Trade-show materials","Product-launch content"]}
];

const workflow = [
  ["Content & Market Assessment", "Review subject matter, target languages, intended audience, markets, file formats, existing language assets, timeline, and review requirements."],
  ["Subject-Matter Linguist Matching", "Assign professional translators and reviewers with expertise appropriate to agricultural science, engineering, chemistry, biotechnology, software, training, or commercial content."],
  ["Terminology & Language-Asset Preparation", "Prepare approved glossaries, existing translations, translation memories, product terminology, style guidance, scientific references, and reviewer instructions."],
  ["Translation & Localization", "Translate the content using the professional workflow appropriate to its purpose, risk, technical complexity, and update model."],
  ["Professional Review", "When your selected quality level includes an additional review, validate meaning, fluency, technical terminology, consistency, completeness, and intended use."],
  ["Automated Quality Assurance", "Check terminology, numbers, units, omissions, repeated inconsistencies, formatting, tags, placeholders, and file integrity."],
  ["File & In-Context Validation", "Validate layouts, tables, diagrams, screens, text expansion, controls, warnings, cross-references, and final rendering where appropriate."],
  ["Delivery, Feedback & Reuse", "Deliver the required files and preserve approved terminology, translation memory, and reviewer decisions for future releases."]
];

const faqs = [
  ["What types of agricultural content does Stepes translate?", "Stepes translates agricultural machinery manuals, operator and service documentation, crop-science materials, seed and biotechnology content, agrochemical documentation, Safety Data Sheets, product labels, scientific reports, training courses, farm-management software, mobile apps, websites, marketing materials, agricultural research, livestock content, sustainability materials, and other specialized agribusiness content. Our workflows support both individual translation projects and ongoing multilingual programs."],
  ["Do you translate agricultural machinery manuals and technical documentation?", "Yes. Stepes provides farm machinery and agricultural equipment translation for operator manuals, owner manuals, service and repair documentation, maintenance procedures, installation guides, technical specifications, parts catalogs, safety information, dealer materials, machine interfaces, diagnostic content, and technician training. Terminology management, translation memory, QA, and multilingual file production help keep equipment language consistent across documents and product updates."],
  ["Can Stepes localize AgTech software, apps, and machine interfaces?", "Yes. Stepes localizes agricultural software platforms, machine interfaces, mobile applications, dashboards, farm-management systems, embedded product experiences, notifications, online help, knowledge bases, and related digital content. Localization workflows can also address resource files, variables, placeholders, terminology, locale conventions, in-context review, and multilingual product testing where required."],
  ["Do you support agrochemical labels and Safety Data Sheets?", "Yes. Stepes translates agrochemical and crop-protection content including product labels, Safety Data Sheets, technical data sheets, application instructions, safety documentation, training, product literature, and related technical information. Workflows can apply terminology controls and QA to chemical names, numbers, units, concentrations, application rates, hazard terminology, and other important data. Translation supports the customer's regulatory and safety communication processes but does not replace regulatory authoring or product-classification responsibilities."],
  ["How does Stepes maintain consistent agricultural terminology across languages?", "Stepes uses terminology management, translation memory, client reference materials, approved glossaries, reviewer feedback, and automated consistency checks. Approved terms for crops, machinery components, active ingredients, agronomic processes, seed traits, software features, safety language, and product names can be reused across manuals, labels, applications, training, websites, and future product updates."],
  ["Can Stepes translate crop science, seed, and agricultural biotechnology content?", "Yes. Stepes supports crop-science research, agronomy content, seed technologies, plant-breeding materials, agricultural biotechnology documents, field-trial content, laboratory information, technical reports, scientific presentations, product-development materials, and related agricultural research. Projects are matched with linguists whose expertise is appropriate for the subject matter and intended audience."],
  ["Does Stepes use AI for agriculture translation?", "Stepes can use AI-assisted translation and automation where they improve efficiency, consistency, terminology extraction, translation-memory leverage, changed-content detection, quality checking, and large-volume processing. The workflow is matched to the content. Professional linguists and subject-matter resources remain important for technical interpretation, scientific meaning, terminology decisions, safety-sensitive content, complex agricultural concepts, and final professional validation."],
  ["Which languages and agricultural markets does Stepes support?", "Stepes supports agriculture translation in more than 100 languages and regional variants, including major European, Latin American, Asian, Middle Eastern, and African languages. Multi-language programs can be coordinated through a single Stepes workflow for international product launches, research programs, technical documentation, training, and commercial content."]
];

function HeroArt(){
  return (
    <div className="hero-art" aria-label="Illustration representing agriculture, agricultural technology, and multilingual communication">
      <svg viewBox="0 0 620 470" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="blush" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FDF2F7"/><stop offset="1" stopColor="#F7E6EE"/></linearGradient>
        </defs>
        <circle cx="325" cy="228" r="194" fill="url(#blush)"/>
        <path d="M75 362c74-59 150-80 228-61 70 17 136 14 238-37" stroke="#B9BEC7" strokeWidth="2" fill="none"/>
        <path d="M86 388c88-55 166-70 233-49 78 25 151 19 225-19" stroke="#D2D5DB" strokeWidth="2" fill="none"/>
        <g stroke="#505762" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="213" cy="307" r="48"/><circle cx="384" cy="321" r="28"/>
          <path d="M255 312h92l25-92h-98l-19 92Z"/><path d="M287 220v-61h68l36 61"/><path d="M300 159v-34h52"/>
          <path d="M210 259h53l16-38"/><path d="M407 312h56"/>
          <path d="M142 254c2-37 30-66 66-68"/><path d="M160 232c8-18 23-30 43-34"/>
          <path d="M118 294c-16 0-29-13-29-29 20 0 33 11 33 29"/><path d="M123 294c0-22 13-36 35-36 0 22-13 36-35 36Z"/>
          <path d="M507 137v68M481 158h52M491 147l16-15 16 15M492 169l15 15 15-15"/>
          <path d="M465 104h84l19 52-61 30-61-30 19-52Z"/>
          <path d="M281 101c31-25 70-34 107-23" strokeDasharray="6 8"/><path d="M403 86c16 8 31 19 43 33" strokeDasharray="6 8"/>
          <rect x="425" y="239" width="122" height="82" rx="12"/><path d="M444 299v-27l19-11 16 17 19-25 31 14"/><path d="M444 255h28"/>
          <path d="M152 112h95"/><path d="M170 94v18"/><path d="M169 112c4 38 19 63 48 78"/><path d="M231 112c-3 27-15 47-35 62"/>
          <path d="M179 213h72"/><path d="m191 213 23-67 23 67"/>
        </g>
        <g fill="#C11D63"><circle cx="507" cy="132" r="4"/><circle cx="430" cy="238" r="4"/><circle cx="123" cy="294" r="4"/></g>
      </svg>
    </div>
  );
}

function AgricultureTranslationWireframe(){
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main className="ag-page">
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0} .ag-page{--ink:#15171A;--body:#444A52;--muted:#68707B;--border:#E2E4E8;--soft:#F7F8FA;--blush:#FDF2F7;--magenta:#C11D63;--burgundy:#7A1542;--dark:#17191D;--dark2:#22252B;font-family:Inter,Arial,sans-serif;color:var(--ink);background:#fff;overflow-x:clip}.ag-page a{text-decoration:none}.shell{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section.dense{padding:80px 0}.soft{background:var(--soft)}.blush{background:var(--blush)}.dark{background:var(--dark);color:#fff}.eyebrow{font-size:11px!important;line-height:1.3!important;font-weight:600!important;letter-spacing:.16em;text-transform:uppercase;color:#C11D63!important;margin:0 0 16px}.eyebrow-light{color:#F2A7C6!important}.heading-group{max-width:820px;margin-bottom:48px}.heading-group.centered{margin-left:auto;margin-right:auto;text-align:center}.heading-group.light h2,.heading-group.light .section-intro{color:#fff}.heading-group h2{font-size:36px;line-height:1.12;letter-spacing:-.025em;font-weight:600;margin:0}.section-intro{font-size:18px;line-height:1.65;color:var(--body);margin:18px auto 0;max-width:800px}.heading-group:not(.centered) .section-intro{margin-left:0}.body-lg{font-size:18px;line-height:1.7;color:var(--body)}.ag-page p{font-size:16px;line-height:1.72;color:var(--body)}.ag-page h1,.ag-page h2,.ag-page h3{font-family:"Inter Tight",Inter,Arial,sans-serif;font-weight:600}.hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#fff 70%,#FCFCFD 100%)}.hero-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:66px;align-items:center}.hero h1{font-size:48px;line-height:1.05;letter-spacing:-.035em;margin:0;max-width:720px}.hero-copy{font-size:18px;line-height:1.68;color:var(--body);max-width:700px;margin:24px 0 0}.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:50px;padding:13px 24px;border-radius:999px;font-size:16px;font-weight:600;transition:.2s ease}.btn.primary,.btn.primary:visited,.btn.primary:hover,.btn.primary:active,.btn.primary:focus{background:#C11D63!important;color:#fff!important}.btn.primary svg,.btn.primary span{color:#fff!important;stroke:#fff!important}.btn.primary:hover{background:#A71954!important;transform:translateY(-1px)}.btn.secondary,.btn.secondary:visited,.btn.secondary:active,.btn.secondary:focus{border:1px solid #CFD2D8;color:#181B20;background:#fff}.btn.secondary:hover{border-color:#A7ABB3;background:#FAFAFB}.hero-art{min-height:430px;display:flex;align-items:center;justify-content:center}.hero-art svg{width:100%;height:auto;max-width:620px}.proof{background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}.proof-item{padding:28px 26px;border-right:1px solid var(--border)}.proof-item:last-child{border-right:0}.proof-title{font-size:18px;line-height:1.3;font-weight:600;margin-bottom:6px}.proof-text{font-size:16px;line-height:1.5;color:var(--muted)}.ecosystem{display:grid;grid-template-columns:.78fr 1.22fr;gap:72px;align-items:start}.ecosystem .heading-group{position:sticky;top:40px;margin-bottom:0}.ecosystem-flow{border-top:1px solid var(--border)}.eco-row{display:grid;grid-template-columns:52px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid var(--border);align-items:start}.icon-box{width:44px;height:44px;border-radius:14px;background:#FDF2F7;color:#C11D63;display:flex;align-items:center;justify-content:center;border:1px solid #F2DCE6}.eco-row h3{font-size:20px;line-height:1.3;margin:1px 0 6px}.eco-row p{margin:0}.domain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.domain-card{padding:28px 26px;border:1px solid var(--border);border-radius:24px;background:#fff;min-height:250px}.domain-card .icon-box{margin-bottom:22px}.domain-card h3{font-size:22px;line-height:1.3;margin:0 0 12px}.domain-card p{margin:0}.related-inline{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:30px;padding-top:24px;border-top:1px solid var(--border)}.related-inline>span{font-size:16px;line-height:1.55;color:var(--muted)}.split{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:start}.split-copy{max-width:500px}.split-copy h2{font-size:36px;line-height:1.12;letter-spacing:-.025em;margin:0 0 20px}.split-copy .editorial-link{margin-top:26px}.editorial-list{border-top:1px solid var(--border)}.editorial-row{display:grid;grid-template-columns:44px 1fr;gap:18px;padding:24px 0;border-bottom:1px solid var(--border)}.editorial-row .mini-icon{color:#C11D63;margin-top:2px}.editorial-row h3{font-size:20px;line-height:1.3;margin:0 0 7px}.editorial-row p{margin:0}.editorial-link{display:inline-flex;align-items:center;gap:8px;color:#A71954;font-size:16px;font-weight:600;min-height:44px}.editorial-link:hover{color:#7A1542}.editorial-link:focus-visible,.btn:focus-visible,.faq-button:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:4px;border-radius:10px}.editorial-link:hover svg{transform:translateX(2px)}.editorial-link svg{transition:.2s ease}.editorial-link.light{color:#F2A7C6}.dark .body-lg,.dark p{color:#D2D5DA}.dark-grid{display:grid;grid-template-columns:.93fr 1.07fr;gap:66px;align-items:start}.agtech-list{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid #3A3E45}.agtech-item{padding:24px 24px 24px 0;border-bottom:1px solid #3A3E45}.agtech-item:nth-child(odd){padding-right:28px;border-right:1px solid #3A3E45}.agtech-item:nth-child(even){padding-left:28px}.agtech-item h3{font-size:19px;margin:0 0 7px;color:#fff}.agtech-item p{margin:0;color:#C7CBD1}.link-row{display:flex;gap:28px;flex-wrap:wrap;margin-top:28px}.feature-duo{display:grid;grid-template-columns:1fr 1fr;gap:22px}.feature-panel{border:1px solid var(--border);border-radius:28px;padding:34px;background:#fff}.feature-panel.blush-panel{background:#FFF9FB;border-color:#F2DCE6}.feature-panel h2{font-size:36px;line-height:1.17;letter-spacing:-.02em;margin:0 0 18px}.feature-panel p{margin-top:0}.bullet-columns{columns:2;column-gap:26px;margin:20px 0 0;padding:0;list-style:none}.bullet-columns li{break-inside:avoid;position:relative;padding:7px 0 7px 18px;font-size:16px;line-height:1.55;color:var(--body)}.bullet-columns li:before{content:"";position:absolute;width:5px;height:5px;border-radius:50%;background:#C11D63;left:1px;top:17px}.channel-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--border);border-radius:28px;overflow:hidden;background:#fff}.channel{padding:30px;border-right:1px solid var(--border);border-bottom:1px solid var(--border)}.channel:nth-child(3n){border-right:0}.channel:nth-child(n+4){border-bottom:0}.channel h3{font-size:20px;margin:0 0 14px}.channel ul{list-style:none;margin:0;padding:0}.channel li{font-size:16px;line-height:1.55;color:var(--body);padding:5px 0}.term-wrap{display:grid;grid-template-columns:.82fr 1.18fr;gap:64px;align-items:center}.term-visual{background:#fff;border:1px solid #EEDCE5;border-radius:30px;padding:34px;min-height:430px;display:grid;place-items:center}.term-core{width:190px;height:190px;border-radius:50%;border:1px solid #E7CAD7;background:#FDF2F7;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-size:18px;line-height:1.35;font-weight:600;color:#5B213B;position:relative}.term-nodes{position:relative;width:440px;height:360px;display:grid;place-items:center}.term-node{position:absolute;background:#fff;border:1px solid var(--border);border-radius:14px;padding:10px 14px;font-size:16px;line-height:1.35;color:#4F5660;box-shadow:0 8px 26px rgba(20,20,25,.05)}.n1{top:8px;left:155px}.n2{top:74px;right:0}.n3{bottom:82px;right:4px}.n4{bottom:6px;left:150px}.n5{bottom:81px;left:0}.n6{top:74px;left:2px}.term-copy h2{font-size:36px;line-height:1.12;letter-spacing:-.025em;margin:0 0 20px}.term-benefits{display:grid;grid-template-columns:1fr 1fr;gap:10px 28px;margin-top:22px}.term-benefit{display:flex;gap:10px;align-items:flex-start;font-size:16px;line-height:1.55;color:var(--body);padding:8px 0}.term-benefit svg{color:#C11D63;flex:0 0 auto;margin-top:2px}.workflow-list{max-width:1020px;margin:0 auto;border-top:1px solid var(--border)}.workflow-row{display:grid;grid-template-columns:76px 300px 1fr;gap:22px;padding:28px 0;border-bottom:1px solid var(--border);align-items:start}.workflow-num{font-size:14px;font-weight:600;letter-spacing:.12em;color:#A71954}.workflow-row h3{font-size:20px;line-height:1.35;margin:0}.workflow-row p{margin:0}.ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:42px}.ai-panel{border:1px solid #3A3E45;border-radius:24px;padding:30px;background:#1E2126}.ai-panel h3{font-size:22px;margin:0 0 18px}.ai-list{list-style:none;margin:0;padding:0}.ai-list li{display:flex;gap:10px;padding:8px 0;color:#D4D7DC;font-size:16px;line-height:1.55}.ai-list svg{color:#F2A7C6;flex:0 0 auto;margin-top:2px}.reg-band{border:1px solid var(--border);border-radius:30px;padding:44px 48px;display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}.reg-band h2{font-size:36px;line-height:1.15;margin:0}.reg-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 26px;margin-top:18px}.reg-item{font-size:16px;color:var(--body);padding:6px 0}.notice{margin-top:22px;padding:18px 20px;border-left:3px solid #C11D63;background:#FDF2F7;border-radius:0 14px 14px 0;font-size:16px;line-height:1.65;color:#4A4045}.files-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px}.format-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.format-group{border:1px solid var(--border);border-radius:20px;padding:24px;background:#fff}.format-group h3{font-size:19px;margin:0 0 12px}.format-group p{margin:0;color:var(--muted)}.logo-marquee{position:relative;overflow:hidden;margin-top:40px;padding:16px 0 18px;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 7%,#000 93%,transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 7%,#000 93%,transparent 100%)}.logo-track{display:flex;width:max-content;will-change:transform;animation:agLogoMarquee 34s linear infinite}.logo-set{display:flex;align-items:center;gap:54px;padding-right:54px;flex:none}.logo-card{width:180px;height:74px;display:flex;align-items:center;justify-content:center;padding:8px 4px;transition:transform .28s ease,opacity .28s ease}.logo-card:hover{transform:translateY(-2px)}.client-logo{display:block;max-width:160px;max-height:54px;width:auto;height:auto;object-fit:contain;filter:grayscale(1);opacity:.68;transition:filter .28s ease,opacity .28s ease,transform .28s ease}.logo-card:hover .client-logo{filter:grayscale(0);opacity:1;transform:scale(1.035)}.logo-fallback{font-family:"Inter Tight",Inter,Arial,sans-serif;font-size:17px;line-height:1.25;font-weight:600;color:#59606A;text-align:center;opacity:.78;transition:color .28s ease,opacity .28s ease}.logo-card:hover .logo-fallback{color:#7A1542;opacity:1}.logo-marquee:hover .logo-track{animation-play-state:paused}@keyframes agLogoMarquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}.trust-note{text-align:center;max-width:760px;margin:24px auto 0;color:var(--muted)}.section-title{font-size:36px;line-height:1.12;letter-spacing:-.025em;margin:0 0 20px}.language-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:62px;align-items:start}.region-list{border-top:1px solid var(--border)}.region{padding:18px 0;border-bottom:1px solid var(--border)}.region h3{font-size:18px;margin:0 0 5px}.region p{margin:0}.language-chips{display:flex;gap:9px;flex-wrap:wrap;margin:22px 0 28px}.chip{padding:9px 13px;border-radius:999px;background:#F3F4F6;color:#4E555E;font-size:14px}.why-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--border);border-left:1px solid var(--border)}.why{padding:28px;border-right:1px solid var(--border);border-bottom:1px solid var(--border);min-height:210px}.why h3{font-size:20px;margin:0 0 10px}.why p{margin:0}.faq-wrap{max-width:960px;margin:0 auto;border-top:1px solid var(--border)}.faq-item{border-bottom:1px solid var(--border)}.faq-button{width:100%;border:0;background:transparent;text-align:left;padding:24px 0;display:grid;grid-template-columns:1fr 32px;gap:20px;align-items:center;cursor:pointer;color:var(--ink)}.faq-button span:first-child{font-size:18px;line-height:1.4;font-weight:600}.faq-plus{width:30px;height:30px;border-radius:50%;border:1px solid #D5D8DD;display:grid;place-items:center;font-size:20px;font-weight:400;transition:.2s ease}.faq-item.open .faq-plus{transform:rotate(45deg)}.faq-answer{max-width:840px;padding:0 56px 22px 0}.faq-answer p{margin:0}.final-cta{padding:80px 0;background:#7A1542;color:#fff}.cta-inner{max-width:880px;margin:0 auto;text-align:center}.cta-inner h2{font-size:38px;line-height:1.12;letter-spacing:-.025em;margin:0}.cta-inner p{font-size:18px;line-height:1.65;color:#F5E7ED;max-width:760px;margin:20px auto 0}.cta-actions{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:30px}.final-cta .btn.primary,.final-cta .btn.primary:visited,.final-cta .btn.primary:hover{background:#C11D63!important;color:#fff!important}.final-cta .btn.secondary{background:#fff;color:#4A1630;border-color:#fff}.footer-separation{height:16px;background:#fff}
        @media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid,.ecosystem,.split,.dark-grid,.term-wrap,.language-grid,.files-grid{gap:44px}.domain-grid{grid-template-columns:repeat(2,1fr)}.channel-grid{grid-template-columns:repeat(2,1fr)}.channel:nth-child(3n){border-right:1px solid var(--border)}.channel:nth-child(2n){border-right:0}.channel:nth-child(n+4){border-bottom:1px solid var(--border)}.channel:nth-child(n+5){border-bottom:0}.why-grid{grid-template-columns:repeat(2,1fr)}.logo-card{width:166px}.workflow-row{grid-template-columns:64px 250px 1fr}}
        @media(max-width:768px){.shell{padding-left:24px;padding-right:24px}.section{padding:72px 0}.section.dense{padding:64px 0}.hero{padding:80px 0 72px}.hero-grid{grid-template-columns:1fr;gap:34px}.hero-copy-area{text-align:center}.hero h1{font-size:42px;max-width:760px;margin:0 auto}.hero-copy{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-art{min-height:330px;max-width:600px;margin:0 auto}.proof-grid{grid-template-columns:repeat(2,1fr)}.proof-item:nth-child(2){border-right:0}.proof-item:nth-child(-n+2){border-bottom:1px solid var(--border)}.heading-group h2,.split-copy h2,.term-copy h2,.section-title{font-size:32px}.ecosystem,.split,.dark-grid,.term-wrap,.language-grid,.files-grid{grid-template-columns:1fr}.ecosystem .heading-group{position:static;text-align:center;margin-left:auto;margin-right:auto;margin-bottom:42px}.split-copy{text-align:center;max-width:760px;margin:0 auto}.split-copy .body-lg{text-align:left}.split-copy .editorial-link{justify-content:center}.dark-grid>.heading-group{text-align:center;margin-left:auto;margin-right:auto}.dark-grid>.heading-group .section-intro{text-align:center}.domain-grid{grid-template-columns:repeat(2,1fr)}.agtech-list{grid-template-columns:1fr}.agtech-item,.agtech-item:nth-child(odd),.agtech-item:nth-child(even){padding:22px 0;border-right:0}.feature-duo{grid-template-columns:1fr}.channel-grid{grid-template-columns:1fr}.channel,.channel:nth-child(n){border-right:0;border-bottom:1px solid var(--border)}.channel:last-child{border-bottom:0}.term-copy{text-align:center}.term-copy>p{text-align:left}.term-benefits{text-align:left}.workflow-row{grid-template-columns:58px 1fr;gap:16px}.workflow-row p{grid-column:2}.ai-grid{grid-template-columns:1fr}.reg-band{grid-template-columns:1fr;gap:28px;padding:36px}.reg-band>div:first-child{text-align:center}.reg-band h2{text-align:center;font-size:32px}.format-groups{grid-template-columns:1fr 1fr}.files-grid>.heading-group{text-align:center;margin-left:auto;margin-right:auto}.files-grid>.heading-group .section-intro{text-align:center}.files-grid>.heading-group .link-row{justify-content:center}.language-grid>div:first-child{text-align:center}.language-grid>div:first-child .body-lg{text-align:left}.language-grid>div:first-child .language-chips{justify-content:center}.language-grid>div:first-child .editorial-link{justify-content:center}.term-copy .link-row{justify-content:center}.logo-card{width:166px}.why-grid{grid-template-columns:repeat(2,1fr)}.cta-inner h2{font-size:34px}}
        @media(max-width:520px){.shell{padding-left:20px;padding-right:20px}.section{padding:66px 0}.section.dense{padding:64px 0}.hero{padding:70px 0 64px}.hero h1{font-size:38px}.hero-copy{font-size:18px}.hero-actions{flex-direction:column}.hero-actions .btn{width:100%}.hero-art{min-height:270px}.proof-grid{grid-template-columns:1fr}.proof-item,.proof-item:nth-child(n){border-right:0;border-bottom:1px solid var(--border);padding:22px 4px}.proof-item:last-child{border-bottom:0}.heading-group{margin-bottom:38px}.heading-group h2,.split-copy h2,.term-copy h2,.reg-band h2,.section-title{font-size:30px}.heading-group.centered,.ecosystem .heading-group,.dark-grid>.heading-group{text-align:center}.section-intro{font-size:18px}.domain-grid{grid-template-columns:1fr}.domain-card{min-height:0}.eco-row{grid-template-columns:44px 1fr;gap:14px}.editorial-row{grid-template-columns:36px 1fr;gap:13px}.link-row{gap:12px;flex-direction:column;align-items:flex-start}.files-grid>.heading-group .link-row,.term-copy .link-row{align-items:center}.feature-panel{padding:28px 22px}.feature-panel h2{font-size:30px}.bullet-columns{columns:1}.channel{padding:26px 22px}.term-visual{padding:22px;min-height:0}.term-nodes{width:100%;max-width:none;height:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;place-items:stretch}.term-core{position:static;grid-column:1/-1;width:164px;height:164px;font-size:17px;margin:0 auto 8px}.term-node,.n1,.n2,.n3,.n4,.n5,.n6{position:static;transform:none!important;inset:auto;padding:12px 10px;font-size:16px;line-height:1.35;text-align:center;display:flex;align-items:center;justify-content:center;min-height:62px;box-shadow:none}.term-benefits{grid-template-columns:1fr}.workflow-row{grid-template-columns:46px 1fr;padding:24px 0}.workflow-num{font-size:13px}.ai-panel{padding:24px 20px}.dark>.shell>p.body-lg{text-align:left!important}.reg-band{padding:28px 22px}.reg-list{grid-template-columns:1fr}.format-groups{grid-template-columns:1fr}.logo-marquee{margin-left:-20px;margin-right:-20px;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 11%,#000 89%,transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 11%,#000 89%,transparent 100%)}.logo-track{animation-duration:28s}.logo-set{gap:34px;padding-right:34px}.logo-card{width:142px;height:64px;padding:4px}.client-logo{max-width:138px;max-height:48px}.logo-fallback{font-size:16px}.why-grid{grid-template-columns:1fr}.why{min-height:0}.faq-button{padding:22px 0}.faq-answer{padding-right:0}.final-cta{padding:70px 0}.cta-inner h2{font-size:32px}.cta-actions{flex-direction:column}.cta-actions .btn{width:100%}}
        @media(max-width:340px){.term-nodes{grid-template-columns:1fr}.term-core{width:150px;height:150px}.term-node{font-size:16px;min-height:56px}.logo-card{width:132px;height:60px}.client-logo{max-width:128px;max-height:44px}}@media(prefers-reduced-motion:reduce){.logo-marquee{overflow-x:auto;-webkit-mask-image:none;mask-image:none}.logo-track{animation:none;transform:none}.logo-set.duplicate{display:none}.logo-card,.client-logo,.editorial-link svg,.btn,.faq-plus{transition:none!important}}
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy-area">
            <div className="eyebrow">Agriculture & AgTech</div>
            <h1>Agriculture Translation Services for Global Agribusiness</h1>
            <p className="hero-copy">Stepes provides professional agriculture translation services for global agribusiness, agricultural equipment, crop science, seeds and biotechnology, crop protection, precision farming, AgTech, livestock operations, training, and digital agricultural products. We combine specialized linguists, controlled terminology, translation technology, and scalable multilingual workflows to help agricultural organizations communicate accurately across markets.</p>
            <div className="hero-actions">
              <a className="btn primary" href="https://www.stepes.com/contact-sales/"><span>Get a Translation Quote</span><Icon name="arrow" size={17}/></a>
              <a className="btn secondary" href="https://www.stepes.com/contact-us/">Contact Our Agriculture Team</a>
            </div>
          </div>
          <HeroArt/>
        </div>
      </section>

      <section className="proof" aria-label="Agriculture translation proof points">
        <div className="shell proof-grid">
          <div className="proof-item"><div className="proof-title">100+ Languages</div><div className="proof-text">Global and regional agricultural market coverage</div></div>
          <div className="proof-item"><div className="proof-title">Subject-Matter Linguists</div><div className="proof-text">Agriculture, engineering, science, chemical, and technology expertise</div></div>
          <div className="proof-item"><div className="proof-title">Terminology + Translation Memory</div><div className="proof-text">Consistent language across products, documents, and updates</div></div>
          <div className="proof-item"><div className="proof-title">ISO-Certified Processes</div><div className="proof-text">Structured professional translation and quality workflows</div></div>
        </div>
      </section>

      <section className="section">
        <div className="shell ecosystem">
          <div className="heading-group">
            <div className="eyebrow">Connected Agriculture</div>
            <h2>Agriculture Is Now a Connected Global Technology Ecosystem</h2>
            <p className="section-intro">Agriculture increasingly connects biology, chemistry, mechanical engineering, automation, software, data, sustainability, and global commerce. As agricultural products become more connected, multilingual content becomes more connected too.</p>
          </div>
          <div className="ecosystem-flow">
            {[
              ["crop","Crop Science & Genetics","Research, agronomy, breeding, seed technology, biotechnology, and field studies"],
              ["flask","Crop Inputs & Protection","Fertilizers, biologicals, pesticides, application information, labels, and safety content"],
              ["tractor","Machinery & Equipment","Operator documentation, service content, safety instructions, interfaces, and training"],
              ["ai","Precision Agriculture & AgTech","Robotics, sensors, remote sensing, farm software, mobile apps, analytics, and connected systems"],
              ["livestock","Agricultural Operations","Livestock, irrigation, farm management, technical training, and operational communication"],
              ["globe","Global Markets","Websites, marketing, distribution, technical support, research collaboration, and market-access content"]
            ].map(([icon,title,text])=><div className="eco-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHeading title="Translation Expertise Across the Agricultural Value Chain" intro="Agricultural translation requires different kinds of expertise depending on whether the content concerns plant science, a chemical formulation, a combine harvester, an autonomous field robot, livestock production, or a software platform. Stepes matches professional linguists and quality workflows to the subject matter and intended use of the content."/>
          <div className="domain-grid">
            {domainCards.map((d)=><article className="domain-card" key={d.title}><div className="icon-box"><Icon name={d.icon}/></div><h3>{d.title}</h3><p>{d.text}</p></article>)}
          </div>
          <div className="related-inline">
            <span>For downstream processing, packaging, and consumer food content:</span>
            <ArrowLink href="https://www.stepes.com/food-beverage-translation-services/">Food & Beverage Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="split-copy">
            <div className="eyebrow">Agricultural Equipment</div>
            <h2>Farm Machinery Translation That Works in the Field</h2>
            <p className="body-lg">An agricultural machine is supported by an entire information ecosystem. Engineering terminology established during product development may later appear in an operator manual, service procedure, diagnostic interface, parts catalog, safety warning, dealer course, website, and support article.</p>
            <p>Stepes connects technical translation with terminology management and translation memory so agricultural equipment language can remain aligned across the complete product lifecycle.</p>
            <div className="link-row">
              <ArrowLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/engineering-translation-services/">Engineering Translation Services</ArrowLink>
            </div>
          </div>
          <div className="editorial-list">
            {machineryItems.map(([title,text],i)=><div className="editorial-row" key={title}><div className="mini-icon"><Icon name={i===0?"book":i===1?"wrench":i===2?"layers":i===3?"monitor":i===4?"shield":"video"}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell dark-grid">
          <div className="heading-group light">
            <h2>Precision Agriculture Requires Connected Localization</h2>
            <p className="section-intro">A connected agricultural platform can combine mechanical hardware, embedded software, cloud applications, mobile interfaces, sensors, data analytics, digital documentation, and continuous product updates. Each layer communicates with the same user—and often uses the same underlying agricultural terminology.</p>
            <div className="link-row">
              <ArrowLink light href="https://www.stepes.com/robotics-translation-services/">Robotics Translation Services</ArrowLink>
              <ArrowLink light href="https://www.stepes.com/software-localization-services/">Software Localization Services</ArrowLink>
              <ArrowLink light href="https://www.stepes.com/app-localization-services/">App Localization Services</ArrowLink>
            </div>
          </div>
          <div className="agtech-list">
            {agtechItems.map(([title,text])=><div className="agtech-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="feature-duo">
            <article className="feature-panel">
              <h2>Scientific Translation for Crop Science, Seeds & Agricultural Biotechnology</h2>
              <p>Agricultural science communicates complex concepts that can influence research, product development, field use, intellectual property, and commercial decisions. Stepes provides scientific and technical translation for organizations working in crop science, seed technologies, agricultural biotechnology, agronomy, plant breeding, biological products, and related disciplines.</p>
              <ul className="bullet-columns">
                {["Agronomic research","Research protocols","Field-trial documentation","Laboratory documentation","Crop-performance data","Seed and trait documentation","Biotechnology materials","Scientific presentations","Technical white papers","Intellectual-property documents"].map(x=><li key={x}>{x}</li>)}
              </ul>
              <ArrowLink href="https://www.stepes.com/patent-translation-services/">Patent Translation Services</ArrowLink>
            </article>
            <article className="feature-panel blush-panel">
              <h2>Accurate Multilingual Content for Crop Protection and Agricultural Chemicals</h2>
              <p>Crop-protection products generate information for regulatory teams, distributors, applicators, agronomists, retailers, farmers, safety professionals, and customers. Stepes helps keep recurring chemical, product, safety, and application terminology aligned across documents and channels.</p>
              <ul className="bullet-columns">
                {["Agricultural chemical labels","Safety Data Sheets","Technical data sheets","Application guides","Handling and storage information","Environmental information","Training materials","Distributor documentation","Websites and digital content","Product literature"].map(x=><li key={x}>{x}</li>)}
              </ul>
              <div className="link-row">
                <ArrowLink href="https://www.stepes.com/chemical-translation-services/">Chemical Translation Services</ArrowLink>
                <ArrowLink href="https://www.stepes.com/sds-translation-services/">SDS Translation Services</ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHeading title="Translate Agricultural Content Across Every Channel" intro="Global agricultural organizations create far more than traditional documents. Stepes supports multilingual content across technical, scientific, regulatory, digital, instructional, and commercial environments."/>
          <div className="channel-grid">
            {contentColumns.map(col=><article className="channel" key={col.title}><h3>{col.title}</h3><ul>{col.items.map(x=><li key={x}>{x}</li>)}</ul></article>)}
          </div>
          <div className="link-row" style={{justifyContent:"center"}}>
            <ArrowLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation & Localization</ArrowLink>
            <ArrowLink href="https://www.stepes.com/website-translation-services/">Website Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell term-wrap">
          <div className="term-visual">
            <div className="term-nodes" aria-hidden="true">
              <div className="term-core">Approved Agricultural Terminology</div>
              <div className="term-node n1">Product Label</div><div className="term-node n2">Safety Data Sheet</div><div className="term-node n3">Operator Manual</div><div className="term-node n4">Machine Interface</div><div className="term-node n5">Training</div><div className="term-node n6">Website & Support</div>
            </div>
          </div>
          <div className="term-copy">
            <div className="eyebrow">Terminology Governance</div>
            <h2>One Agricultural Vocabulary Across Every Content Type</h2>
            <p className="body-lg">A multilingual agricultural product should not speak a different language depending on where the customer encounters it. The same component, crop disease, seed trait, application method, active ingredient, or software function may appear across a label, SDS, manual, interface, app, training course, website, and support content.</p>
            <p>Stepes helps clients establish reusable multilingual language assets that make terminology more consistent over time.</p>
            <div className="term-benefits">
              {["Approved multilingual glossaries","Translation memory reuse","Client and reviewer decisions","Automated consistency QA","Cross-content alignment","Faster future updates"].map(x=><div className="term-benefit" key={x}><Icon name="check" size={19}/><span>{x}</span></div>)}
            </div>
            <div className="link-row">
              <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
              <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="A Translation Workflow Built for Agricultural Content" intro="Agricultural content varies widely in complexity and risk. Stepes configures translation workflows around the subject matter, audience, intended use, file format, languages, update frequency, and quality requirements of each project."/>
          <div className="workflow-list">
            {workflow.map(([title,text],i)=><div className="workflow-row" key={title}><div className="workflow-num">{String(i+1).padStart(2,"0")}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell">
          <SectionHeading eyebrow="Hybrid Translation" title="Professional Expertise + Smarter AI Workflows" intro="AI can improve speed, consistency, reuse, and scale—but agricultural content does not all carry the same risk. Stepes matches technology and professional oversight to the complexity, visibility, and intended use of the content." light/>
          <div className="ai-grid">
            <article className="ai-panel"><h3>Technology Can Accelerate</h3><ul className="ai-list">{["Terminology extraction","Translation-memory leverage","Repetitive-content processing","Version comparison","Changed-content detection","Large-volume translation","Consistency checks","Automated QA","Workflow routing","Project analysis"].map(x=><li key={x}><Icon name="check" size={18}/><span>{x}</span></li>)}</ul></article>
            <article className="ai-panel"><h3>Professional Expertise Protects</h3><ul className="ai-list">{["Technical interpretation","Scientific meaning","Terminology decisions","Agronomic context","Safety-sensitive content","Novel technical concepts","Readability","Cultural and market context","High-visibility customer content","Final professional validation"].map(x=><li key={x}><Icon name="check" size={18}/><span>{x}</span></li>)}</ul></article>
          </div>
          <p className="body-lg" style={{maxWidth:900,margin:"32px auto 0",textAlign:"center",color:"#D6D9DE"}}>This hybrid approach allows agriculture and AgTech organizations to take advantage of modern translation technology without treating automation as a substitute for subject-matter judgment.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reg-band">
            <div><div className="eyebrow">Global Market Readiness</div><h2>Support Global Agricultural Regulatory and Market Requirements</h2></div>
            <div>
              <p className="body-lg">Agricultural products enter markets with different rules, languages, distribution models, technical expectations, and communication requirements. Stepes helps customers preserve technical meaning, terminology, numerical data, instructions, warnings, and document integrity as approved source information moves into additional languages.</p>
              <div className="reg-list">{["Safety information","Labels and packaging","Product instructions","Technical documentation","Chemical information","Certificates","Quality documentation","Environmental materials","Import/export documentation","Distributor materials"].map(x=><div className="reg-item" key={x}>{x}</div>)}</div>
              <div className="notice">Our role is professional translation and localization support for your regulatory and market-access processes. Product classification, regulatory strategy, scientific assessment, labeling decisions, and final legal responsibility remain with your organization and its designated regulatory specialists.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell files-grid">
          <div className="heading-group">
            <h2>Multilingual File Engineering for Complex Agricultural Content</h2>
            <p className="section-intro">Agricultural translation often involves complex files—not just plain text. Stepes supports multilingual production for technical manuals, structured content, software resources, graphics, tables, diagrams, labels, and training materials.</p>
            <div className="link-row"><ArrowLink href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</ArrowLink><ArrowLink href="https://www.stepes.com/resources/file-format-support/">File Format Support</ArrowLink></div>
          </div>
          <div className="format-groups">
            <div className="format-group"><h3>Technical Documentation</h3><p>Adobe InDesign, FrameMaker, PDF, Microsoft Word, PowerPoint, and Excel.</p></div>
            <div className="format-group"><h3>Structured & Digital Content</h3><p>XML, HTML, JSON, XLIFF, CSV, structured exports, and software resource files.</p></div>
            <div className="format-group"><h3>Graphics & Production</h3><p>Tables, diagrams, embedded graphics, screenshots, labels, technical illustrations, and marketing layouts.</p></div>
            <div className="format-group"><h3>Integrated Production</h3><p>Translation combined with multilingual DTP and file engineering for review, publishing, integration, or production.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Trusted Across Agriculture and AgTech" intro="Agricultural organizations need translation partners that can work across scientific, technical, digital, operational, and commercial content without losing control of terminology as programs expand."/>
          <LogoMarquee/>
          <p className="trust-note">Whether the requirement is one specialized document or an ongoing multilingual content program, Stepes provides professional linguistic expertise and scalable translation workflows designed for global business.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="shell language-grid">
          <div>
            <h2 className="section-title">Agriculture Translation in 100+ Languages</h2>
            <p className="body-lg">Agriculture is global, but agricultural language is local. Stepes supports international product launches, research programs, agricultural equipment, crop inputs, digital products, field operations, training, and customer communications across major global and regional languages.</p>
            <div className="language-chips">{['Spanish','Portuguese','French','German','Italian','Dutch','Polish','Chinese','Japanese','Korean','Vietnamese','Thai','Indonesian','Hindi','Arabic','Turkish'].map(x=><span className="chip" key={x}>{x}</span>)}</div>
            <ArrowLink href="https://www.stepes.com/translation-languages/">Explore All Languages</ArrowLink>
          </div>
          <div className="region-list">
            {[
              ["Europe","German, French, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Nordic languages, Romanian, and additional European languages."],
              ["Latin America","Latin American Spanish, Brazilian Portuguese, and multilingual programs for agriculture, crop protection, machinery, food production, and commercial markets."],
              ["East Asia","Simplified Chinese, Traditional Chinese, Japanese, Korean, and other regional languages for agricultural technology, equipment, science, and business communications."],
              ["Southeast & South Asia","Vietnamese, Thai, Indonesian, Malay, Filipino, Hindi, and additional languages supporting agricultural, technical, research, and development programs."],
              ["Middle East & Africa","Arabic, Turkish, Swahili, and regional languages for agricultural development, food systems, technical products, research, government programs, and international organizations."]
            ].map(([title,text])=><div className="region" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Why Agriculture Companies Choose Stepes" intro="Modern agricultural organizations need more than translation capacity. They need multilingual workflows capable of handling specialized content, multiple technologies, recurring updates, and terminology that remains consistent as products evolve."/>
          <div className="why-grid">
            {[
              ["Agricultural Subject-Matter Expertise","Professional linguists selected for the scientific, technical, chemical, software, instructional, or commercial subject matter behind your content."],
              ["Technical Translation Strength","Support for machinery, operating instructions, engineering information, safety content, maintenance procedures, and technical training."],
              ["AgTech Localization Expertise","Connect software, apps, robotics, interfaces, digital documentation, and support content through coordinated multilingual product localization."],
              ["Terminology Governance","Use glossaries, translation memory, product terminology, and reviewer feedback to create a consistent multilingual language foundation."],
              ["Professional Quality + Smart Technology","Combine professional linguists with AI, automation, translation memory, terminology tools, and QA according to content risk and business requirements."],
              ["Global Program Scalability","Support a single agricultural document, a multi-language product launch, a large documentation library, or an ongoing enterprise localization program."]
            ].map(([title,text])=><article className="why" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHeading title="Agriculture Translation Services FAQs" intro="Answers to common questions about agricultural documents, machinery, AgTech localization, terminology, AI workflows, safety content, and global language coverage."/>
          <div className="faq-wrap">
            {faqs.map(([q,a],i)=><div className={`faq-item${openFaq===i?" open":""}`} key={q}>
              <button className="faq-button" aria-expanded={openFaq===i} aria-controls={`ag-faq-${i}`} onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></button>
              {openFaq===i&&<div className="faq-answer" id={`ag-faq-${i}`}><p>{a}</p></div>}
            </div>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-inner">
            <h2>Take Your Agricultural Content to Global Markets</h2>
            <p>From crop science and agricultural machinery to AgTech software, crop protection, training, safety content, and global marketing, Stepes provides the specialized linguistic expertise and multilingual workflows agricultural organizations need to communicate across markets.</p>
            <div className="cta-actions">
              <a className="btn primary" href="https://www.stepes.com/contact-sales/"><span>Get a Translation Quote</span><Icon name="arrow" size={17}/></a>
              <a className="btn secondary" href="https://www.stepes.com/contact-us/">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-separation" aria-hidden="true"/>
    </main>
  );
}

export default AgricultureTranslationWireframe;
