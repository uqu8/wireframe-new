import React, { useMemo, useState } from "react";

const NEWSROOM_URL = "https://www.stepes.com/news/";

const newsroomTopics = [
  {
    id: "platform-product",
    category: "Platform & Product",
    title: "AI Translation, Workflow, and Platform Updates",
    description:
      "Follow developments in AI translation, human review, terminology, translation memory, workflow automation, APIs, and enterprise localization technology.",
  },
  {
    id: "company-news",
    category: "Company News",
    title: "Company Milestones and Market Developments",
    description:
      "Explore meaningful updates about Stepes capabilities, leadership, operational investments, service expansion, and progress in global markets.",
  },
  {
    id: "partnerships",
    category: "Partnerships",
    title: "Strategic Partnerships and Ecosystem News",
    description:
      "Read about collaborations that extend Stepes technology, language, industry, and delivery capabilities for global organizations.",
  },
  {
    id: "customer-announcements",
    category: "Customer Announcements",
    title: "Customer and Market Announcements",
    description:
      "Explore customer and market developments showing how organizations are modernizing translation and multilingual content operations.",
  },
  {
    id: "awards-recognition",
    category: "Awards & Recognition",
    title: "Awards, Certifications, and Industry Recognition",
    description:
      "Explore recognition related to translation quality, technology, information security, customer service, and global growth.",
  },
  {
    id: "events-speaking",
    category: "Events & Speaking",
    title: "Conferences, Panels, Webinars, and Expert Perspectives",
    description:
      "See where Stepes leaders and language-industry experts are sharing practical perspectives on AI, localization, quality, and global content strategy.",
  },
  {
    id: "media-coverage",
    category: "Media Coverage",
    title: "Interviews, Features, Commentary, and Podcasts",
    description:
      "Explore independent coverage and expert commentary on Stepes and the changing enterprise translation technology landscape.",
  },
];

const filters = [
  "All News",
  "Platform & Product",
  "Company News",
  "Partnerships",
  "Customer Announcements",
  "Awards & Recognition",
  "Events & Speaking",
  "Media Coverage",
];

const innovationUpdates = [
  {
    icon: "sparkles",
    title: "AI Translation",
    description:
      "Follow developments in machine translation, generative AI, model evaluation, confidence scoring, human validation, and quality-controlled AI translation.",
    linkLabel: "AI Translation Insights",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    icon: "workflow",
    title: "Enterprise Translation Workflows",
    description:
      "Explore capabilities for managing translation requests, connecting global content systems, coordinating review, and improving visibility across languages and markets.",
    linkLabel: "AI-Powered Workflows",
    href: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  },
  {
    icon: "shield",
    title: "Quality, Security, and Governance",
    description:
      "Discover advances in terminology governance, translation quality assurance, data protection, access controls, and enterprise oversight.",
    linkLabel: "Translation Quality & Governance",
    href: "https://www.stepes.com/resources/translation-quality/",
  },
];

const companyUpdateGroups = [
  {
    label: "Company Milestones",
    title: "Progress That Strengthens Global Delivery",
    description:
      "Explore meaningful developments across Stepes, including new capabilities, leadership updates, operational investments, service expansion, and progress in key markets.",
    linkLabel: "View Company News",
    href: `${NEWSROOM_URL}?category=company-news#latest-news`,
  },
  {
    label: "Partnerships & Ecosystem",
    title: "Collaboration That Extends Customer Value",
    description:
      "Read about collaborations that expand Stepes technology, language, industry, and delivery capabilities for global organizations.",
    linkLabel: "View Partnership News",
    href: `${NEWSROOM_URL}?category=partnerships#latest-news`,
  },
  {
    label: "Customer & Market Updates",
    title: "Customer Stories and Market Progress",
    description:
      "Discover customer and market announcements showing how organizations are modernizing translation, localization, and global content operations.",
    linkLabel: "View Customer Announcements",
    href: `${NEWSROOM_URL}?category=customer-announcements#latest-news`,
  },
];

const mediaFormats = [
  {
    icon: "article",
    title: "Features and Expert Commentary",
    description:
      "Read independent articles and contributed perspectives on AI translation, localization operations, quality governance, and multilingual customer experience.",
  },
  {
    icon: "microphone",
    title: "Interviews and Podcasts",
    description:
      "Hear Stepes leaders and subject-matter experts discuss the technologies and operating models shaping enterprise translation.",
  },
  {
    icon: "play",
    title: "Broadcast and Event Coverage",
    description:
      "Explore coverage connected to conference appearances, panels, webinars, and other industry conversations.",
  },
];

const recognitionGroups = [
  {
    label: "Awards & Rankings",
    title: "Independent Recognition",
    description:
      "Explore awards and rankings related to technology, service, growth, customer experience, and translation innovation.",
  },
  {
    label: "Certifications & Milestones",
    title: "Quality and Trust Progress",
    description:
      "Explore certification and operational milestones that strengthen quality, trust, and global delivery.",
  },
  {
    label: "Industry & Partner Recognition",
    title: "Acknowledgment Across the Ecosystem",
    description:
      "See recognition from credible industry organizations, technology partners, associations, and other relevant institutions.",
  },
];


const perspectiveTracks = [
  {
    icon: "calendar",
    label: "Conferences & Speaking Engagements",
    title: "Join the Industry Conversation",
    description:
      "See where Stepes experts are participating in translation, technology, life sciences, business, and global content events.",
    linkLabel: "View Event Updates",
    href: `${NEWSROOM_URL}?category=events-speaking#latest-news`,
  },
  {
    icon: "microphone",
    label: "Interviews & Expert Commentary",
    title: "Perspectives From Stepes Leaders",
    description:
      "Read and hear practical viewpoints on AI translation, localization operations, quality governance, and multilingual growth.",
    linkLabel: "Explore Interviews",
    href: `${NEWSROOM_URL}?category=media-coverage#latest-news`,
  },
  {
    icon: "play",
    label: "Webinars & Educational Sessions",
    title: "Practical Learning for Global Teams",
    description:
      "Access live and on-demand sessions covering translation, localization, AI, quality, and global content strategy.",
    linkLabel: "Explore Webinars",
    href: "https://www.stepes.com/resources/webinars/",
  },
];

const aboutHighlights = [
  {
    label: "AI + Human Workflows",
    description:
      "AI automation, translation memory, terminology controls, and professional linguistic review work together in one connected delivery model.",
  },
  {
    label: "100+ Languages",
    description:
      "Global language coverage supports enterprise, technical, legal, medical, digital, and customer-facing content across major markets.",
  },
  {
    label: "Enterprise Content Coverage",
    description:
      "Stepes supports documents, software, mobile applications, websites, regulated content, multimedia, training, and customer communications.",
  },
];

const mediaResources = [
  {
    icon: "building",
    title: "Company Facts",
    description:
      "Review current information about Stepes, our technology, language capabilities, services, industries, and enterprise solutions.",
    linkLabel: "View Company Facts",
    href: "https://www.stepes.com/news/media-kit/#company-facts",
  },
  {
    icon: "download",
    title: "Logos and Brand Assets",
    description:
      "Download Stepes logos and brand materials for editorial, event, and partnership use.",
    linkLabel: "Access Brand Assets",
    href: "https://www.stepes.com/news/media-kit/#brand-assets",
  },
  {
    icon: "user",
    title: "Leadership Biographies",
    description:
      "Read leadership biographies and access available photography for Stepes executives and subject-matter experts.",
    linkLabel: "Meet Our Leadership",
    href: "https://www.stepes.com/our-team/",
  },
  {
    icon: "image",
    title: "Platform and Product Images",
    description:
      "View images representing the Stepes translation platform, enterprise workflows, and customer experience.",
    linkLabel: "View Platform Assets",
    href: "https://www.stepes.com/news/media-kit/#platform-assets",
  },
  {
    icon: "article",
    title: "Company Boilerplate",
    description:
      "Use the current Stepes company description for press releases, event programs, partner announcements, and editorial references.",
    linkLabel: "View Company Boilerplate",
    href: "https://www.stepes.com/news/media-kit/#company-boilerplate",
  },
  {
    icon: "mail",
    title: "Media Inquiries",
    description:
      "Contact Stepes for interviews, expert commentary, speaking requests, company information, and media assets.",
    linkLabel: "Contact Media Relations",
    href: "https://www.stepes.com/contact-us/",
  },
];


const faqItems = [
  {
    question: "What types of announcements does Stepes publish?",
    answer:
      "Stepes publishes updates about its AI translation platform, enterprise localization capabilities, company developments, partnerships, customer and market announcements, awards, certifications, events, and media coverage.",
  },
  {
    question: "How often is the Stepes News & Press page updated?",
    answer:
      "New announcements are published as important company, platform, partnership, customer, and industry developments occur. Each item includes a clear publication date and topic category.",
  },
  {
    question: "Where can journalists find current information about Stepes?",
    answer:
      "The Stepes media resources provide company facts, corporate boilerplate, leadership biographies, logos, platform images, and media contact information. Journalists and analysts can contact Stepes for additional information or interview requests.",
  },
  {
    question: "How can I request an interview with a Stepes expert?",
    answer:
      "Journalists, conference organizers, podcast producers, analysts, and industry associations can submit an interview or speaking request through the Stepes contact page. Include the topic, publication or organization, preferred format, relevant deadline, and any spokesperson requirements.",
  },
  {
    question: "Can I use Stepes logos or company images?",
    answer:
      "Stepes logos and media assets are available for editorial, event, and partnership use. For commercial campaigns, co-branded materials, or modified artwork, please contact the Stepes team for guidance.",
  },
  {
    question: "Where can I find Stepes thought leadership rather than company announcements?",
    answer:
      "Visit AI Translation Insights, Translation Quality & Governance, Localization Guides, Translation Guides, Global Content Strategy, Research & Reports, and the Stepes webinar library for educational content and expert guidance.",
  },
  {
    question: "How can I stay informed about new Stepes announcements?",
    answer:
      "Subscribe to Stepes updates to receive selected company news, platform developments, AI translation insights, webinars, guides, and global content resources.",
  },
];

const relatedResources = [
  {
    label: "AI Translation",
    title: "AI Translation Insights",
    description:
      "Explore practical guidance on AI translation quality, model selection, human validation, terminology, governance, and enterprise deployment.",
    linkLabel: "Explore AI Translation Insights",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    label: "Research",
    title: "Research & Reports",
    description:
      "Access research, industry analysis, benchmarks, and reports addressing translation technology, localization operations, quality, and global content strategy.",
    linkLabel: "Explore Research & Reports",
    href: "https://www.stepes.com/resources/research-and-reports/",
  },
  {
    label: "Customer Proof",
    title: "Case Studies",
    description:
      "See how organizations use Stepes to improve translation speed, quality, consistency, scalability, and global content performance.",
    linkLabel: "View Case Studies",
    href: "https://www.stepes.com/resources/case-studies/",
  },
  {
    label: "Live and On-Demand",
    title: "Webinars",
    description:
      "Watch educational sessions covering AI translation, localization best practices, multilingual content operations, and enterprise language strategy.",
    linkLabel: "Explore Webinars",
    href: "https://www.stepes.com/resources/webinars/",
  },
  {
    label: "Practical Guidance",
    title: "All Guides",
    description:
      "Browse the complete collection of Stepes translation, localization, AI, quality, technology, and global content guides.",
    linkLabel: "Browse All Guides",
    href: "https://www.stepes.com/resources/guides/",
  },
  {
    label: "Resource Library",
    title: "Resource Center",
    description:
      "Explore Stepes guides, reference tools, case studies, research, webinars, and educational resources in one connected hub.",
    linkLabel: "Visit the Resource Center",
    href: "https://www.stepes.com/resources/",
  },
];

function ArrowRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ open = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 5v14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        style={{
          transformOrigin: "12px 12px",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          opacity: open ? 0 : 1,
          transition: "transform 180ms ease, opacity 180ms ease",
        }}
      />
    </svg>
  );
}

function EditorialIcon({ name }) {
  const commonProps = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: "false",
  };

  if (name === "sparkles") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.5 13.2 7a5.4 5.4 0 0 0 3.4 3.4l3.5 1.2-3.5 1.2a5.4 5.4 0 0 0-3.4 3.4L12 19.7l-1.2-3.5a5.4 5.4 0 0 0-3.4-3.4l-3.5-1.2 3.5-1.2A5.4 5.4 0 0 0 10.8 7L12 3.5Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
        <path d="m18.5 3 .45 1.3a2 2 0 0 0 1.25 1.25l1.3.45-1.3.45a2 2 0 0 0-1.25 1.25L18.5 9l-.45-1.3a2 2 0 0 0-1.25-1.25L15.5 6l1.3-.45a2 2 0 0 0 1.25-1.25L18.5 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="6" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="15" width="6" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 6.5h3.2a3 3 0 0 1 3 3V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m12.7 10.3 2.5 2.5 2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 17.5h-3.2a3 3 0 0 1-3-3V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.3 19 6v5.1c0 4.3-2.7 7.8-7 9.6-4.3-1.8-7-5.3-7-9.6V6l7-2.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m8.7 12.1 2.1 2.1 4.5-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "microphone") {
    return (
      <svg {...commonProps}>
        <rect x="8" y="3" width="8" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="m10.3 8.8 5.1 3.2-5.1 3.2V8.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }


  if (name === "calendar") {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.5 3v4M16.5 3v4M3.5 9.2h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 13h3M13 13h3M8 16.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...commonProps}>
        <path d="M5 21V5.5L12 3l7 2.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 21h18M8 8h2M14 8h2M8 11.5h2M14 11.5h2M8 15h2M14 15h2M10 21v-3h4v3" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...commonProps}>
        <path d="M12 3v11M7.8 10.2 12 14.4l4.2-4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18v2h14v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 20c.5-4 3.2-6 7-6s6.5 2 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "image") {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.2" cy="9" r="1.7" stroke="currentColor" strokeWidth="1.5" />
        <path d="m5.5 17 4.2-4.2 3 3 2.1-2.1 3.7 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M6 3.5h9l3 3V20.5H6V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 3.5v3h3M9 10h6M9 13.5h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function StepesNewsPressWireframe() {
  const [activeFilter, setActiveFilter] = useState("All News");
  const [query, setQuery] = useState("");
  const [archiveYear, setArchiveYear] = useState("All Archived News");
  const [openFaq, setOpenFaq] = useState(0);

  const archiveHref =
    archiveYear === "All Archived News"
      ? `${NEWSROOM_URL}?archive=all#news-archive`
      : archiveYear === "Earlier Years"
        ? `${NEWSROOM_URL}?archive=earlier#news-archive`
        : `${NEWSROOM_URL}?year=${encodeURIComponent(archiveYear)}#news-archive`;

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return newsroomTopics.filter((topic) => {
      const matchesCategory =
        activeFilter === "All News" || topic.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${topic.category} ${topic.title} ${topic.description}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <main className="stepes-news-page">
      <style>{`
        :root {
          --stepes-magenta: #c11d63;
          --stepes-magenta-dark: #9f1d55;
          --stepes-magenta-deep: #7a1542;
          --stepes-blush: #fdf2f7;
          --ink: #141827;
          --muted: #5f687b;
          --subtle: #7a8498;
          --border: #e4e7ee;
          --border-strong: #d9dee8;
          --surface: #ffffff;
          --surface-soft: #f7f8fb;
          --shadow-soft: 0 18px 44px rgba(29, 37, 55, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .stepes-news-page {
          width: 100%;
          overflow-x: hidden;
          overflow-x: clip;
          color: var(--ink);
          background: var(--surface);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .stepes-news-page a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-news-page a:visited {
          color: inherit;
        }

        .stepes-news-page h1,
        .stepes-news-page h2,
        .stepes-news-page h3,
        .stepes-news-page p,
        .stepes-news-page strong,
        .stepes-news-page span,
        .stepes-news-page a,
        .stepes-news-page label {
          overflow-wrap: break-word;
        }

        .featured-layout > *,
        .latest-heading > *,
        .innovation-layout > *,
        .section-heading-split > *,
        .media-layout > *,
        .recognition-heading > *,
        .about-layout > *,
        .media-resources-layout > *,
        .archive-layout > *,
        .faq-layout > *,
        .resources-heading > *,
        .subscribe-panel > *,
        .final-cta-panel > * {
          min-width: 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .hero {
          position: relative;
          padding: 104px 0 96px;
          background:
            linear-gradient(180deg, rgba(253, 242, 247, 0.84) 0%, rgba(255, 255, 255, 0) 72%),
            #ffffff;
        }

        .hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--border);
        }

        .hero-inner {
          text-align: center;
        }

        .hero h1 {
          max-width: 920px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.034em;
          font-weight: 600;
        }

        .hero-copy {
          max-width: 790px;
          margin: 24px auto 0;
          font-size: 19px;
          line-height: 1.7;
          color: var(--muted);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 24px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          text-align: center;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease,
            border-color 180ms ease, color 180ms ease;
        }

        /* Protect primary CTA foreground color from global anchor and visited-link rules. */
        .stepes-news-page .button.primary-button {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff;
        }

        .stepes-news-page .button.primary-button svg,
        .stepes-news-page .button.primary-button svg * {
          color: #ffffff !important;
        }

        .stepes-news-page button.button.primary-button,
        .stepes-news-page button.button.primary-button:hover,
        .stepes-news-page button.button.primary-button:active,
        .stepes-news-page button.button.primary-button:focus,
        .stepes-news-page button.button.primary-button:focus-visible {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff;
        }

        .stepes-news-page a.button.primary-button,
        .stepes-news-page a.button.primary-button:link,
        .stepes-news-page a.button.primary-button:visited,
        .stepes-news-page a.button.primary-button:hover,
        .stepes-news-page a.button.primary-button:active,
        .stepes-news-page a.button.primary-button:focus,
        .stepes-news-page a.button.primary-button:focus-visible {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff;
        }

        .stepes-news-page a.button.primary-button svg,
        .stepes-news-page a.button.primary-button svg * {
          color: #ffffff !important;
        }

        .primary-button {
          background: var(--stepes-magenta);
          border-color: var(--stepes-magenta);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.22);
        }

        .primary-button:hover {
          background: var(--stepes-magenta-dark);
          border-color: var(--stepes-magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 14px 28px rgba(193, 29, 99, 0.25);
        }

        .primary-button:active {
          background: var(--stepes-magenta-deep);
          border-color: var(--stepes-magenta-deep);
          transform: translateY(0);
          box-shadow: 0 8px 18px rgba(122, 21, 66, 0.22);
        }

        .stepes-news-page a.button.secondary-button,
        .stepes-news-page a.button.secondary-button:link,
        .stepes-news-page a.button.secondary-button:visited,
        .stepes-news-page a.button.secondary-button:hover,
        .stepes-news-page a.button.secondary-button:active,
        .stepes-news-page a.button.secondary-button:focus-visible {
          color: var(--ink);
        }

        .secondary-button {
          background: #ffffff;
          border-color: var(--border-strong);
          box-shadow: 0 4px 12px rgba(29, 37, 55, 0.04);
        }

        .secondary-button:hover {
          background: #ffffff;
          border-color: #bcc3d0;
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(29, 37, 55, 0.07);
        }

        .secondary-button:active {
          transform: translateY(0);
          box-shadow: 0 3px 9px rgba(29, 37, 55, 0.05);
        }

        .button:focus-visible,
        .editorial-link:focus-visible,
        .filter-button:focus-visible,
        .search-field input:focus-visible,
        .archive-year-select select:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .hero-index {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          max-width: 1080px;
          margin: 64px auto 0;
          text-align: left;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border);
          border-radius: 28px;
          box-shadow: var(--shadow-soft);
          overflow: hidden;
        }

        .hero-index-item {
          min-height: 152px;
          padding: 28px 30px;
        }

        .hero-index-item + .hero-index-item {
          border-left: 1px solid var(--border);
        }

        .hero-index-label,
        .eyebrow,
        .topic-category {
          display: block;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .hero-index-label,
        .eyebrow,
        .topic-category {
          color: var(--stepes-magenta-dark);
        }

        .hero-index-title {
          margin: 13px 0 0;
          font-size: 19px;
          line-height: 1.35;
          font-weight: 600;
        }

        .hero-index-copy {
          margin: 9px 0 0;
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
        }

        .section {
          padding: 96px 0;
        }

        .featured-section {
          background: #ffffff;
        }

        .featured-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
          align-items: stretch;
          gap: 72px;
        }

        .featured-visual {
          position: relative;
          min-height: 540px;
          padding: 38px;
          overflow: hidden;
          border: 1px solid #f0dbe4;
          border-radius: 30px;
          background: var(--stepes-blush);
        }

        .featured-visual::before {
          content: "";
          position: absolute;
          top: 104px;
          left: 38px;
          right: 38px;
          height: 1px;
          background: rgba(159, 29, 85, 0.18);
        }

        .visual-kicker {
          position: relative;
          z-index: 1;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--stepes-magenta-dark);
          font-weight: 600;
        }

        .visual-title {
          position: relative;
          z-index: 1;
          max-width: 420px;
          margin: 50px 0 0;
          font-size: clamp(34px, 3.3vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.032em;
          font-weight: 600;
        }

        .visual-index {
          position: absolute;
          left: 38px;
          right: 38px;
          bottom: 38px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .visual-index-item {
          padding-top: 17px;
          border-top: 2px solid rgba(122, 21, 66, 0.32);
        }

        .visual-index-item strong {
          display: block;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
        }

        .visual-index-item span {
          display: block;
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.45;
          color: var(--muted);
        }

        .featured-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;
        }

        .featured-copy h2,
        .latest-heading h2 {
          margin: 15px 0 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .featured-copy p {
          max-width: 680px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .featured-topics {
          display: grid;
          grid-template-columns: 1fr;
          margin-top: 34px;
          border-top: 1px solid var(--border);
        }

        .featured-topic {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }

        .featured-topic strong {
          display: block;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
        }

        .featured-topic span {
          display: block;
          margin-top: 5px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
        }

        .stepes-news-page a.editorial-link,
        .stepes-news-page a.editorial-link:link,
        .stepes-news-page a.editorial-link:visited,
        .stepes-news-page a.editorial-link:hover,
        .stepes-news-page a.editorial-link:active,
        .stepes-news-page a.editorial-link:focus-visible {
          color: var(--stepes-magenta-dark);
        }

        .editorial-link {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--stepes-magenta-dark);
          font-size: 15px;
          line-height: 1.3;
          font-weight: 600;
          white-space: nowrap;
        }

        .editorial-link svg {
          transition: transform 180ms ease;
        }

        .editorial-link:hover svg {
          transform: translateX(3px);
        }

        .featured-cta {
          margin-top: 32px;
          align-self: flex-start;
        }

        .latest-section {
          background: var(--surface-soft);
        }

        .latest-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1fr);
          gap: 80px;
          align-items: end;
        }

        .latest-heading h2 {
          margin: 0;
        }

        .latest-intro {
          margin: 0;
          max-width: 760px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
        }

        .news-controls {
          max-width: 660px;
          margin-top: 42px;
        }

        .search-field {
          position: relative;
        }

        .search-field svg {
          position: absolute;
          left: 18px;
          top: 50%;
          color: var(--subtle);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .search-field input {
          width: 100%;
          height: 54px;
          color: var(--ink);
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          font: inherit;
          font-size: 15px;
          line-height: 1;
        }

        .search-field input {
          padding: 0 20px 0 50px;
        }

        .search-field input::placeholder {
          color: #8a93a5;
        }


        .filter-strip {
          display: flex;
          gap: 9px;
          margin-top: 18px;
          padding-bottom: 4px;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .filter-button {
          min-height: 44px;
          flex: 0 0 auto;
          padding: 0 17px;
          color: #4f586a;
          background: transparent;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          font: inherit;
          font-size: 14px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
        }

        .filter-button:hover {
          border-color: #bfc6d3;
          background: #ffffff;
        }

        .filter-button.is-active,
        .filter-button.is-active:hover,
        .filter-button.is-active:active,
        .filter-button.is-active:focus-visible {
          color: #ffffff;
          background: var(--stepes-magenta);
          border-color: var(--stepes-magenta);
        }

        .topic-panel {
          margin-top: 28px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 30px;
          overflow: hidden;
        }

        .topic-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: var(--border);
        }

        .topic-item {
          min-height: 270px;
          display: flex;
          flex-direction: column;
          padding: 34px;
          background: #ffffff;
        }

        .topic-item:nth-child(odd):last-child {
          grid-column: 1 / -1;
        }

        .topic-item h3 {
          margin: 15px 0 0;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .topic-item p {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.65;
          color: var(--muted);
        }

        .topic-item .editorial-link {
          margin-top: auto;
          padding-top: 24px;
          align-self: flex-start;
          white-space: normal;
        }

        .empty-state {
          padding: 54px 34px;
          text-align: center;
        }

        .empty-state h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
        }

        .empty-state p {
          max-width: 560px;
          margin: 12px auto 0;
          font-size: 16px;
          line-height: 1.65;
          color: var(--muted);
        }


        .innovation-section {
          position: relative;
          color: #ffffff;
          background: linear-gradient(135deg, #17141d 0%, #21151d 58%, #28131e 100%);
        }

        .innovation-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 88px;
          align-items: start;
        }

        .eyebrow-on-dark {
          display: block;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: #f5b4d0;
        }

        .innovation-intro h2,
        .section-heading-split h2,
        .media-copy h2,
        .recognition-heading h2 {
          margin: 15px 0 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .innovation-intro > h2,
        .media-copy > h2 {
          margin-top: 0;
        }

        .innovation-intro p {
          max-width: 560px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.72);
        }

        .innovation-cta {
          margin-top: 32px;
        }

        .innovation-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .innovation-row {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .innovation-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f5b4d0;
          border: 1px solid rgba(245, 180, 208, 0.34);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
        }

        .innovation-row h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .innovation-row p {
          max-width: 700px;
          margin: 10px 0 0;
          font-size: 16px;
          line-height: 1.66;
          color: rgba(255, 255, 255, 0.68);
        }

        .stepes-news-page a.dark-editorial-link,
        .stepes-news-page a.dark-editorial-link:link,
        .stepes-news-page a.dark-editorial-link:visited,
        .stepes-news-page a.dark-editorial-link:hover,
        .stepes-news-page a.dark-editorial-link:active,
        .stepes-news-page a.dark-editorial-link:focus-visible {
          color: #f6c0d7;
        }

        .dark-editorial-link {
          align-self: center;
        }

        .company-section,
        .recognition-section {
          background: #ffffff;
        }

        .section-heading-split,
        .recognition-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.74fr) minmax(0, 1fr);
          gap: 80px;
          align-items: end;
        }

        .section-heading-split h2,
        .recognition-heading h2 {
          margin-top: 0;
        }

        .section-heading-split > p,
        .recognition-heading > p {
          max-width: 760px;
          margin: 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .company-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .company-item {
          min-width: 0;
          padding: 34px 34px 36px;
        }

        .company-item + .company-item {
          border-left: 1px solid var(--border);
        }

        .company-label,
        .recognition-label {
          display: block;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--stepes-magenta-dark);
        }

        .company-item h3,
        .recognition-item h3 {
          margin: 16px 0 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .company-item p,
        .recognition-item p {
          margin: 16px 0 0;
          font-size: 16px;
          line-height: 1.66;
          color: var(--muted);
        }

        .company-item .editorial-link {
          margin-top: 25px;
          white-space: normal;
        }

        .media-section {
          background: var(--surface-soft);
        }

        .media-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 76px;
          align-items: center;
        }

        .media-copy p {
          max-width: 630px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .media-copy .editorial-link {
          margin-top: 30px;
        }

        .media-panel {
          padding: 12px 34px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 30px;
          box-shadow: 0 18px 42px rgba(29, 37, 55, 0.055);
        }

        .media-row {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 20px;
          padding: 28px 0;
          align-items: start;
        }

        .media-row + .media-row {
          border-top: 1px solid var(--border);
        }

        .media-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          border-radius: 15px;
          background: var(--stepes-blush);
        }

        .media-row h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.32;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .media-row p {
          margin: 9px 0 0;
          font-size: 15px;
          line-height: 1.66;
          color: var(--muted);
        }

        .recognition-matrix {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--border);
        }

        .recognition-item {
          min-width: 0;
          padding: 34px 34px 38px 0;
          border-bottom: 1px solid var(--border);
        }

        .recognition-item + .recognition-item {
          padding-left: 34px;
          border-left: 1px solid var(--border);
        }

        .recognition-cta {
          display: flex;
          justify-content: flex-start;
          margin-top: 32px;
        }


        .perspectives-section {
          background: var(--surface-soft);
        }

        .perspectives-heading {
          max-width: 820px;
        }

        .perspectives-heading h2,
        .about-copy h2,
        .media-resources-copy h2,
        .archive-copy h2 {
          margin: 15px 0 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .perspectives-heading > h2 {
          margin-top: 0;
        }

        .perspectives-heading p {
          max-width: 790px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .perspective-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: #ffffff;
        }

        .perspective-item {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 34px;
        }

        .perspective-item + .perspective-item {
          border-left: 1px solid var(--border);
        }

        .perspective-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          border-radius: 15px;
          background: var(--stepes-blush);
        }

        .perspective-label {
          display: block;
          margin-top: 24px;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--stepes-magenta-dark);
        }

        .perspective-item h3 {
          margin: 14px 0 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .perspective-item p {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.66;
          color: var(--muted);
        }

        .perspective-item .editorial-link {
          margin-top: auto;
          padding-top: 24px;
          align-self: flex-start;
          white-space: normal;
        }

        .about-section {
          background: #ffffff;
        }

        .about-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 84px;
          align-items: start;
        }

        .about-copy p {
          max-width: 650px;
          margin: 22px 0 0;
          font-size: 17px;
          line-height: 1.72;
          color: var(--muted);
        }

        .about-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .about-facts {
          border-top: 1px solid var(--border);
        }

        .about-fact {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: 28px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .about-fact strong {
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          color: var(--ink);
        }

        .about-fact p {
          margin: 0;
          font-size: 16px;
          line-height: 1.66;
          color: var(--muted);
        }

        .media-resources-section {
          color: #ffffff;
          background: linear-gradient(135deg, #17141d 0%, #21151d 58%, #28131e 100%);
        }

        .media-resources-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.67fr) minmax(0, 1.33fr);
          gap: 80px;
          align-items: start;
        }

        .media-resources-copy p {
          max-width: 560px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.72);
        }

        .media-resources-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .media-resource-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .media-resource-item {
          min-width: 0;
          padding: 28px 28px 30px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .media-resource-item:nth-child(even) {
          padding-left: 28px;
          border-left: 1px solid rgba(255, 255, 255, 0.16);
        }

        .media-resource-item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .media-resource-header {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 16px;
          align-items: center;
        }

        .media-resource-icon {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f5b4d0;
          border: 1px solid rgba(245, 180, 208, 0.3);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .media-resource-item h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.32;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .media-resource-item p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.66;
          color: rgba(255, 255, 255, 0.68);
        }

        .media-resource-item .editorial-link {
          margin-top: 20px;
          white-space: normal;
        }

        .archive-section {
          background: var(--surface-soft);
        }

        .archive-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
          gap: 76px;
          align-items: start;
        }

        .archive-copy p {
          max-width: 590px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .archive-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .archive-panel {
          padding: 34px;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 18px 42px rgba(29, 37, 55, 0.055);
        }

        .archive-control {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 220px;
          gap: 24px;
          align-items: center;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border);
        }

        .archive-control-copy strong {
          display: block;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .archive-control-copy span {
          display: block;
          margin-top: 7px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
        }

        .archive-select-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-start;
        }

        .archive-year-select {
          position: relative;
          width: 100%;
        }

        .archive-year-action {
          min-height: 34px;
          font-size: 14px;
          white-space: normal;
        }

        .archive-year-select select {
          width: 100%;
          height: 50px;
          appearance: none;
          padding: 0 44px 0 18px;
          color: var(--ink);
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .archive-year-select svg {
          position: absolute;
          right: 17px;
          top: 50%;
          color: var(--subtle);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .archive-context {
          padding-top: 28px;
        }

        .archive-context strong {
          display: block;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .archive-context p {
          max-width: 620px;
          margin: 9px 0 0;
          font-size: 15px;
          line-height: 1.65;
          color: var(--muted);
        }

        .faq-section {
          background: #ffffff;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.64fr) minmax(0, 1.36fr);
          gap: 80px;
          align-items: start;
        }

        .faq-copy {
          position: sticky;
          top: 32px;
        }

        .faq-copy h2,
        .resources-heading h2,
        .subscribe-copy h2,
        .final-cta-copy h2 {
          margin: 15px 0 0;
          font-size: 36px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        .faq-copy p {
          max-width: 560px;
          margin: 24px 0 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .faq-copy .editorial-link {
          margin-top: 28px;
          white-space: normal;
        }

        .faq-panel {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .faq-item + .faq-item {
          border-top: 1px solid var(--border);
        }

        .faq-question {
          width: 100%;
          min-height: 82px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 42px;
          gap: 24px;
          align-items: center;
          padding: 22px 0;
          color: var(--ink);
          background: transparent;
          border: 0;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        .faq-question span:first-child {
          font-size: 19px;
          line-height: 1.45;
          font-weight: 600;
        }

        .faq-toggle {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          justify-self: end;
          color: var(--stepes-magenta-dark);
          border: 1px solid #efcfdd;
          border-radius: 50%;
          background: var(--stepes-blush);
        }

        .faq-question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 5px;
        }

        .faq-answer {
          max-width: 820px;
          padding: 0 66px 26px 0;
        }

        .faq-answer p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
        }

        .resources-section {
          background: var(--surface-soft);
        }

        .resources-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1fr);
          gap: 80px;
          align-items: end;
        }

        .resources-heading h2 {
          margin-top: 0;
        }

        .resources-heading p {
          max-width: 760px;
          margin: 0;
          font-size: 18px;
          line-height: 1.72;
          color: var(--muted);
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: #ffffff;
        }

        .resource-item {
          min-width: 0;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          padding: 32px;
          border-bottom: 1px solid var(--border);
        }

        .resource-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid var(--border);
        }

        .resource-item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .resource-label {
          display: block;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--stepes-magenta-dark);
        }

        .resource-item h3 {
          margin: 15px 0 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .resource-item p {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.66;
          color: var(--muted);
        }

        .resource-item .editorial-link {
          margin-top: auto;
          padding-top: 24px;
          align-self: flex-start;
          white-space: normal;
        }

        .subscribe-section {
          background: #ffffff;
        }

        .subscribe-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 70px;
          align-items: center;
          padding: 58px 60px;
          overflow: hidden;
          border: 1px solid #f0dbe4;
          border-radius: 30px;
          background: var(--stepes-blush);
        }

        .subscribe-copy > h2 {
          margin-top: 0;
        }

        .subscribe-copy p {
          max-width: 590px;
          margin: 22px 0 0;
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
        }

        .subscribe-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 30px;
          border: 1px solid rgba(159, 29, 85, 0.14);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 16px 38px rgba(64, 30, 46, 0.07);
        }

        .subscribe-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .subscribe-field.full-field {
          grid-column: 1 / -1;
        }

        .subscribe-field span {
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
          color: var(--ink);
        }

        .subscribe-field input {
          width: 100%;
          height: 50px;
          padding: 0 16px;
          color: var(--ink);
          background: #ffffff;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          font: inherit;
          font-size: 15px;
        }

        .subscribe-field input::placeholder {
          color: #8a93a5;
        }

        .subscribe-field input:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 2px;
          border-color: rgba(193, 29, 99, 0.45);
        }

        .subscribe-consent {
          grid-column: 1 / -1;
          margin: 2px 0 0;
          font-size: 13px;
          line-height: 1.58;
          color: var(--muted);
        }

        .subscribe-consent a,
        .subscribe-consent a:visited {
          color: var(--stepes-magenta-dark);
          font-weight: 600;
        }

        .subscribe-submit {
          grid-column: 1 / -1;
          justify-self: start;
          margin-top: 4px;
        }


        .final-cta-section {
          padding: 0 0 96px;
          background: #ffffff;
        }

        .final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 56px;
          align-items: center;
          padding: 56px 60px;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: linear-gradient(135deg, #ffffff 0%, #fff8fb 100%);
          box-shadow: 0 18px 44px rgba(29, 37, 55, 0.055);
        }

        .final-cta-copy p {
          max-width: 780px;
          margin: 22px 0 0;
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
        }

        .final-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 220px;
        }

        .final-cta-actions .button {
          width: 100%;
        }

        @media (max-width: 1100px) {
          .shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .featured-layout {
            gap: 48px;
          }

          .latest-heading {
            gap: 48px;
          }

          .innovation-layout {
            gap: 56px;
          }

          .section-heading-split,
          .recognition-heading {
            gap: 48px;
          }

          .media-layout {
            gap: 52px;
          }

          .about-layout {
            gap: 56px;
          }

          .media-resources-layout {
            gap: 56px;
          }

          .archive-layout {
            gap: 52px;
          }

          .faq-layout,
          .resources-heading {
            gap: 52px;
          }

          .subscribe-panel {
            gap: 48px;
            padding: 52px 48px;
          }

          .final-cta-panel {
            padding: 50px 48px;
          }
        }

        @media (max-width: 900px) {
          .shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .section {
            padding: 80px 0;
          }

          .hero {
            padding: 92px 0 72px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero-index-item {
            padding: 26px 22px;
          }

          .featured-layout,
          .latest-heading {
            grid-template-columns: 1fr;
          }

          .featured-layout {
            gap: 42px;
          }

          .featured-visual {
            min-height: 500px;
          }

          .featured-copy {
            padding: 0;
          }

          .latest-heading {
            gap: 20px;
          }

          .latest-heading h2,
          .featured-copy h2 {
            font-size: 32px;
          }

          .topic-grid {
            grid-template-columns: 1fr;
          }

          .topic-item,
          .topic-item:nth-child(odd):last-child {
            min-height: 0;
            grid-column: auto;
          }

          .innovation-layout,
          .section-heading-split,
          .media-layout,
          .recognition-heading,
          .about-layout,
          .media-resources-layout,
          .archive-layout,
          .faq-layout,
          .resources-heading,
          .subscribe-panel,
          .final-cta-panel {
            grid-template-columns: 1fr;
          }

          .innovation-layout {
            gap: 46px;
          }

          .innovation-intro h2,
          .section-heading-split h2,
          .media-copy h2,
          .recognition-heading h2,
          .perspectives-heading h2,
          .about-copy h2,
          .media-resources-copy h2,
          .archive-copy h2,
          .faq-copy h2,
          .resources-heading h2,
          .subscribe-copy h2,
          .final-cta-copy h2 {
            font-size: 32px;
          }

          .topic-item h3,
          .innovation-row h3,
          .company-item h3,
          .recognition-item h3,
          .media-row h3,
          .perspective-item h3,
          .media-resource-item h3,
          .resource-item h3 {
            font-size: 22px;
          }

          .section-heading-split,
          .recognition-heading {
            gap: 20px;
          }

          .company-grid,
          .recognition-matrix {
            grid-template-columns: 1fr;
          }

          .company-item,
          .recognition-item,
          .recognition-item + .recognition-item {
            padding: 30px 0;
            border-left: 0;
          }

          .company-item + .company-item {
            border-top: 1px solid var(--border);
            border-left: 0;
          }

          .perspective-grid {
            grid-template-columns: 1fr;
          }

          .perspective-item + .perspective-item {
            border-left: 0;
            border-top: 1px solid var(--border);
          }

          .about-layout,
          .media-resources-layout,
          .archive-layout,
          .faq-layout {
            gap: 46px;
          }

          .faq-copy {
            position: static;
          }

          .resources-heading {
            gap: 20px;
          }

          .resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .resource-item:not(:nth-child(3n + 1)) {
            border-left: 0;
          }

          .resource-item:nth-child(even) {
            border-left: 1px solid var(--border);
          }

          .resource-item:nth-last-child(-n + 3) {
            border-bottom: 1px solid var(--border);
          }

          .resource-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .subscribe-panel {
            gap: 38px;
          }

          .final-cta-actions {
            flex-direction: row;
            min-width: 0;
          }

          .final-cta-actions .button {
            width: auto;
          }

          .about-fact {
            grid-template-columns: 170px minmax(0, 1fr);
          }
        }

        @media (max-width: 640px) {
          .shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero {
            padding: 72px 0 64px;
          }

          .hero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .hero-copy {
            margin-top: 20px;
            font-size: 18px;
            line-height: 1.62;
          }

          .hero-actions {
            flex-direction: column;
            margin-top: 28px;
          }

          .button {
            width: 100%;
            min-height: 52px;
            padding: 12px 20px;
            line-height: 1.25;
            white-space: normal;
          }

          .hero-index {
            grid-template-columns: 1fr;
            margin-top: 44px;
            border-radius: 24px;
          }

          .hero-index-item {
            min-height: 0;
            padding: 24px;
          }

          .hero-index-item + .hero-index-item {
            border-left: 0;
            border-top: 1px solid var(--border);
          }

          .section {
            padding: 68px 0;
          }

          .featured-visual {
            min-height: 480px;
            padding: 28px;
            border-radius: 24px;
          }

          .featured-visual::before {
            top: 88px;
            left: 28px;
            right: 28px;
          }

          .visual-title {
            margin-top: 42px;
            font-size: 36px;
          }

          .visual-index {
            left: 28px;
            right: 28px;
            bottom: 28px;
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .visual-index-item {
            display: grid;
            grid-template-columns: minmax(0, 0.44fr) minmax(0, 1fr);
            gap: 12px;
            padding-top: 10px;
          }

          .visual-index-item span {
            margin-top: 0;
          }

          .featured-copy h2,
          .latest-heading h2 {
            font-size: 30px;
          }

          .featured-copy p,
          .latest-intro {
            font-size: 17px;
            line-height: 1.68;
          }

          .featured-topic {
            grid-template-columns: 1fr;
            gap: 12px;
            align-items: start;
          }

          .featured-topic .editorial-link {
            white-space: normal;
          }

          .featured-cta {
            width: 100%;
          }

          .filter-strip {
            margin-right: -20px;
            padding-right: 20px;
          }

          .topic-panel {
            border-radius: 24px;
          }

          .topic-item {
            padding: 28px 24px;
          }

          .topic-item h3 {
            font-size: 20px;
          }

          .innovation-intro h2,
          .section-heading-split h2,
          .media-copy h2,
          .recognition-heading h2,
          .perspectives-heading h2,
          .about-copy h2,
          .media-resources-copy h2,
          .archive-copy h2,
          .faq-copy h2,
          .resources-heading h2,
          .subscribe-copy h2,
          .final-cta-copy h2 {
            font-size: 30px;
          }

          .innovation-intro p,
          .section-heading-split > p,
          .media-copy p,
          .recognition-heading > p,
          .perspectives-heading p,
          .media-resources-copy p,
          .archive-copy p,
          .faq-copy p,
          .resources-heading p,
          .subscribe-copy p,
          .final-cta-copy p {
            font-size: 17px;
            line-height: 1.68;
          }

          .innovation-row {
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 16px;
            align-items: start;
            padding: 26px 0;
          }

          .innovation-icon {
            width: 44px;
            height: 44px;
            border-radius: 15px;
          }

          .innovation-row h3,
          .company-item h3,
          .recognition-item h3 {
            font-size: 20px;
          }

          .innovation-row .dark-editorial-link {
            grid-column: 2;
            justify-self: start;
            margin-top: 2px;
            white-space: normal;
          }

          .innovation-cta {
            width: 100%;
          }

          .company-grid,
          .recognition-matrix {
            margin-top: 36px;
          }

          .media-layout {
            gap: 40px;
          }

          .media-panel {
            padding: 8px 24px;
            border-radius: 24px;
          }

          .media-row {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 16px;
            padding: 24px 0;
          }

          .media-row h3 {
            font-size: 20px;
          }

          .perspective-grid {
            margin-top: 36px;
          }

          .perspective-item {
            padding: 28px 24px;
          }

          .perspective-item h3,
          .media-resource-item h3 {
            font-size: 20px;
          }

          .about-actions,
          .media-resources-actions,
          .archive-actions {
            flex-direction: column;
          }

          .about-fact {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .media-resource-grid {
            grid-template-columns: 1fr;
          }

          .media-resource-item,
          .media-resource-item:nth-child(even),
          .media-resource-item:nth-last-child(-n + 2) {
            padding: 26px 0;
            border-left: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }

          .media-resource-item:last-child {
            border-bottom: 0;
          }

          .archive-panel {
            padding: 26px 24px;
            border-radius: 24px;
          }

          .archive-control {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .faq-layout {
            gap: 38px;
          }

          .faq-question {
            grid-template-columns: minmax(0, 1fr) 38px;
            gap: 16px;
            min-height: 76px;
          }

          .faq-question span:first-child {
            font-size: 17px;
          }

          .faq-answer {
            padding-right: 0;
          }

          .resource-grid {
            grid-template-columns: 1fr;
            margin-top: 36px;
          }

          .resource-item,
          .resource-item:nth-child(even),
          .resource-item:nth-last-child(-n + 2),
          .resource-item:nth-last-child(-n + 3) {
            min-height: 0;
            padding: 28px 24px;
            border-left: 0;
            border-bottom: 1px solid var(--border);
          }

          .resource-item:last-child {
            border-bottom: 0;
          }

          .resource-item h3 {
            font-size: 20px;
          }

          .subscribe-panel {
            padding: 36px 24px;
            border-radius: 24px;
          }

          .subscribe-form {
            grid-template-columns: 1fr;
            padding: 24px;
            border-radius: 20px;
          }

          .subscribe-field,
          .subscribe-field.full-field,
          .subscribe-consent,
          .subscribe-submit {
            grid-column: 1;
          }

          .subscribe-submit {
            width: 100%;
          }

          .final-cta-section {
            padding-bottom: 68px;
          }

          .final-cta-panel {
            gap: 30px;
            padding: 38px 24px;
            border-radius: 24px;
          }

          .final-cta-actions {
            flex-direction: column;
          }

          .final-cta-actions .button {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .hero h1 {
            letter-spacing: -0.025em;
          }

          .subscribe-form {
            padding: 20px;
          }

          .featured-visual {
            min-height: 500px;
          }

          .visual-title {
            font-size: 32px;
          }

          .visual-index-item {
            grid-template-columns: 1fr;
            gap: 2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .stepes-news-page *,
          .stepes-news-page *::before,
          .stepes-news-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="news-hero-title">
        <div className="shell hero-inner">
          <h1 id="news-hero-title">Stepes News &amp; Press</h1>
          <p className="hero-copy">
            Follow the latest Stepes announcements, AI translation platform
            updates, partnerships, company milestones, industry recognition,
            events, and media coverage. Discover how Stepes is advancing secure,
            quality-controlled translation and multilingual content operations
            for global enterprises.
          </p>

          <div className="hero-actions">
            <a
              className="button primary-button"
              href={`${NEWSROOM_URL}#latest-news`}
            >
              Browse News &amp; Press
              <ArrowRight />
            </a>
            <a
              className="button secondary-button"
              href={`${NEWSROOM_URL}#media-resources`}
            >
              Media Inquiries
              <ArrowRight />
            </a>
          </div>

          <div className="hero-index" aria-label="Newsroom coverage">
            <div className="hero-index-item">
              <span className="hero-index-label">Platform &amp; Product</span>
              <h3 className="hero-index-title">
                Enterprise translation innovation
              </h3>
              <p className="hero-index-copy">
                AI translation, workflow automation, APIs, terminology, and
                quality controls.
              </p>
            </div>
            <div className="hero-index-item">
              <span className="hero-index-label">
                Company &amp; Partnerships
              </span>
              <h3 className="hero-index-title">
                Growth, collaboration, and market progress
              </h3>
              <p className="hero-index-copy">
                Company milestones, ecosystem news, customer and market
                announcements, and more.
              </p>
            </div>
            <div className="hero-index-item">
              <span className="hero-index-label">Media &amp; Events</span>
              <h3 className="hero-index-title">
                Expert perspectives and industry presence
              </h3>
              <p className="hero-index-copy">
                Interviews, speaking engagements, webinars, recognition, and
                independent coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section featured-section"
        aria-labelledby="featured-news-title"
      >
        <div className="shell featured-layout">
          <div className="featured-visual" aria-hidden="true">
            <span className="visual-kicker">News &amp; Press</span>
            <div className="visual-title">
              Technology, expertise, and company momentum.
            </div>
            <div className="visual-index">
              <div className="visual-index-item">
                <strong>Platform</strong>
                <span>Technology and workflow updates</span>
              </div>
              <div className="visual-index-item">
                <strong>Company</strong>
                <span>Milestones and partnerships</span>
              </div>
              <div className="visual-index-item">
                <strong>Industry</strong>
                <span>Events, media, and recognition</span>
              </div>
            </div>
          </div>

          <div className="featured-copy">
            <span className="eyebrow">Newsroom Highlights</span>
            <h2 id="featured-news-title">
              Follow the Developments Shaping Enterprise Translation
            </h2>
            <p>
              Explore Stepes platform innovation, company progress, strategic
              partnerships, media coverage, events, and expert perspectives in
              one connected newsroom.
            </p>

            <div className="featured-topics">
              <div className="featured-topic">
                <div>
                  <strong>AI Translation and Platform Innovation</strong>
                  <span>
                    Technology, workflow, quality, security, and governance
                    developments.
                  </span>
                </div>
                <a
                  className="editorial-link"
                  href={`${NEWSROOM_URL}#platform-innovation`}
                >
                  Platform News <ArrowRight size={17} />
                </a>
              </div>

              <div className="featured-topic">
                <div>
                  <strong>Company and Partnership Updates</strong>
                  <span>
                    Meaningful milestones, collaborations, and global market
                    progress.
                  </span>
                </div>
                <a
                  className="editorial-link"
                  href={`${NEWSROOM_URL}#company-partnership-updates`}
                >
                  Company News <ArrowRight size={17} />
                </a>
              </div>

              <div className="featured-topic">
                <div>
                  <strong>Media, Events, and Industry Recognition</strong>
                  <span>
                    Coverage, expert commentary, speaking engagements, and
                    industry recognition.
                  </span>
                </div>
                <a
                  className="editorial-link"
                  href={`${NEWSROOM_URL}#stepes-in-the-media`}
                >
                  Media Coverage <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <a
              className="button primary-button featured-cta"
              href={`${NEWSROOM_URL}#latest-news`}
            >
              Browse News &amp; Press
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section
        id="latest-news"
        className="section latest-section"
        aria-labelledby="latest-news-title"
      >
        <div className="shell">
          <div className="latest-heading">
            <h2 id="latest-news-title">Browse News &amp; Press</h2>
            <p className="latest-intro">
              Explore Stepes announcements and coverage by topic, including AI
              translation technology, enterprise localization, partnerships,
              company milestones, awards, events, and media appearances.
            </p>
          </div>

          <div className="news-controls" aria-label="Newsroom controls">
            <label className="search-field">
              <span className="sr-only">Search Stepes newsroom topics</span>
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search newsroom topics"
              />
            </label>
          </div>

          <div className="filter-strip" aria-label="Filter newsroom topics">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${activeFilter === filter ? "is-active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="topic-panel" aria-live="polite">
            {filteredTopics.length > 0 ? (
              <div className="topic-grid">
                {filteredTopics.map((topic) => (
                  <article className="topic-item" id={topic.id} key={topic.id}>
                    <span className="topic-category">{topic.category}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <a
                      className="editorial-link"
                      href={`${NEWSROOM_URL}?category=${topic.id}#latest-news`}
                    >
                      Browse {topic.category}
                      <ArrowRight size={17} />
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No matching newsroom topics</h3>
                <p>
                  Try a broader search or select All News to explore the full
                  Stepes newsroom.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        id="platform-innovation"
        className="section innovation-section"
        aria-labelledby="platform-innovation-title"
      >
        <div className="shell innovation-layout">
          <div className="innovation-intro">
            <h2 id="platform-innovation-title">
              AI Translation and Platform Innovation
            </h2>
            <p>
              Stepes continues to advance the technology, workflows, and quality
              controls organizations need to translate global content efficiently
              and responsibly.
            </p>
            <a
              className="button primary-button innovation-cta"
              href={`${NEWSROOM_URL}?category=platform-product#latest-news`}
            >
              Explore Platform News
              <ArrowRight />
            </a>
          </div>

          <div className="innovation-list">
            {innovationUpdates.map((item) => (
              <article className="innovation-row" key={item.title}>
                <span className="innovation-icon">
                  <EditorialIcon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <a className="editorial-link dark-editorial-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="company-partnership-updates"
        className="section company-section"
        aria-labelledby="company-partnership-title"
      >
        <div className="shell">
          <div className="section-heading-split">
            <h2 id="company-partnership-title">
              Company, Partnership, and Market Updates
            </h2>
            <p>
              Learn how Stepes is expanding its capabilities, strengthening its
              partner ecosystem, and supporting the evolving multilingual content
              needs of global organizations.
            </p>
          </div>

          <div className="company-grid">
            {companyUpdateGroups.map((item) => (
              <article className="company-item" key={item.label}>
                <span className="company-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="editorial-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stepes-in-the-media"
        className="section media-section"
        aria-labelledby="stepes-media-title"
      >
        <div className="shell media-layout">
          <div className="media-copy">
            <h2 id="stepes-media-title">Stepes in the Media</h2>
            <p>
              Explore interviews, features, expert commentary, podcasts, and
              other independent coverage of Stepes and the changing translation
              technology landscape.
            </p>
            <p>
              Stepes experts contribute practical perspectives on AI translation,
              localization operations, quality governance, multilingual customer
              experience, and enterprise content strategy.
            </p>
            <a
              className="editorial-link"
              href={`${NEWSROOM_URL}?category=media-coverage#latest-news`}
            >
              View All Media Coverage
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="media-panel">
            {mediaFormats.map((item) => (
              <article className="media-row" key={item.title}>
                <span className="media-icon">
                  <EditorialIcon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="industry-recognition"
        className="section recognition-section"
        aria-labelledby="industry-recognition-title"
      >
        <div className="shell">
          <div className="recognition-heading">
            <h2 id="industry-recognition-title">
              Awards and Industry Recognition
            </h2>
            <p>
              Explore awards, certifications, rankings, and industry
              acknowledgments reflecting Stepes&apos; commitment to translation
              quality, technology innovation, information security, customer
              service, and global growth.
            </p>
          </div>

          <div className="recognition-matrix">
            {recognitionGroups.map((item) => (
              <article className="recognition-item" key={item.label}>
                <span className="recognition-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="recognition-cta">
            <a
              className="editorial-link"
              href={`${NEWSROOM_URL}?category=awards-recognition#latest-news`}
            >
              Explore Awards &amp; Recognition News
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="events-perspectives"
        className="section perspectives-section"
        aria-labelledby="events-perspectives-title"
      >
        <div className="shell">
          <div className="perspectives-heading">
            <h2 id="events-perspectives-title">
              Events, Interviews, and Executive Perspectives
            </h2>
            <p>
              Follow Stepes leaders and language-industry experts as they share
              practical perspectives on AI translation, localization technology,
              global content operations, quality governance, multilingual customer
              experience, and international business.
            </p>
          </div>

          <div className="perspective-grid">
            {perspectiveTracks.map((item) => (
              <article className="perspective-item" key={item.label}>
                <span className="perspective-icon">
                  <EditorialIcon name={item.icon} />
                </span>
                <span className="perspective-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="editorial-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about-stepes"
        className="section about-section"
        aria-labelledby="about-stepes-title"
      >
        <div className="shell about-layout">
          <div className="about-copy">
            <span className="eyebrow">About Stepes</span>
            <h2 id="about-stepes-title">
              Enterprise Translation for Global Content Operations
            </h2>
            <p>
              Stepes helps global organizations translate, localize, and manage
              multilingual content through AI-powered technology, professional
              linguistic expertise, and secure enterprise workflows.
            </p>
            <p>
              Our cloud-based translation platform brings together AI translation,
              professional human review, translation memory, terminology management,
              quality assurance, workflow automation, and centralized program
              visibility. This integrated approach helps businesses move multilingual
              content faster while maintaining consistency, control, and measurable
              translation quality.
            </p>
            <div className="about-actions">
              <a
                className="button primary-button"
                href="https://www.stepes.com/about/"
              >
                Learn About Stepes
                <ArrowRight />
              </a>
              <a
                className="button secondary-button"
                href="https://www.stepes.com/why-stepes/"
              >
                Explore Why Stepes
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="about-facts" aria-label="Stepes enterprise capabilities">
            {aboutHighlights.map((item) => (
              <div className="about-fact" key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="media-resources"
        className="section media-resources-section"
        aria-labelledby="media-resources-title"
      >
        <div className="shell media-resources-layout">
          <div className="media-resources-copy">
            <span className="eyebrow-on-dark">For Media and Analysts</span>
            <h2 id="media-resources-title">Media Resources</h2>
            <p>
              Access company information and brand materials for editorial,
              analyst, event, partnership, and media use.
            </p>
            <p>
              Journalists, analysts, event organizers, and industry partners can
              also contact Stepes for interviews, expert commentary, company
              information, and speaking requests.
            </p>
            <div className="media-resources-actions">
              <a
                className="button primary-button"
                href="https://www.stepes.com/contact-us/"
              >
                Contact Media Relations
                <ArrowRight />
              </a>
              <a
                className="button secondary-button"
                href="https://www.stepes.com/news/media-kit/"
              >
                Visit the Media Kit
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="media-resource-grid">
            {mediaResources.map((item) => (
              <article className="media-resource-item" key={item.title}>
                <div className="media-resource-header">
                  <span className="media-resource-icon">
                    <EditorialIcon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <a
                  className="editorial-link dark-editorial-link"
                  href={item.href}
                >
                  {item.linkLabel}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="news-archive"
        className="section archive-section"
        aria-labelledby="news-archive-title"
      >
        <div className="shell archive-layout">
          <div className="archive-copy">
            <span className="eyebrow">News Archive</span>
            <h2 id="news-archive-title">
              Explore Earlier Stepes Announcements
            </h2>
            <p>
              Browse earlier announcements across Stepes technology, services,
              partnerships, and global operations. Explore the archive by year
              to see how the company has evolved over time.
            </p>
            <div className="archive-actions">
              <a
                className="button primary-button"
                href={`${NEWSROOM_URL}?archive=all#news-archive`}
              >
                Browse the News Archive
                <ArrowRight />
              </a>
              <a
                className="editorial-link"
                href="https://www.stepes.com/about/"
              >
                Explore Current Stepes Information
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="archive-panel">
            <div className="archive-control">
              <div className="archive-control-copy">
                <strong>Browse Archived News by Year</strong>
                <span>
                  Select a year or view the complete historical announcement archive.
                </span>
              </div>
              <div className="archive-select-group">
                <label className="archive-year-select">
                  <span className="sr-only">Select an archive year</span>
                  <select
                    value={archiveYear}
                    onChange={(event) => setArchiveYear(event.target.value)}
                  >
                    <option>All Archived News</option>
                    <option>2026</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>Earlier Years</option>
                  </select>
                  <ChevronDown />
                </label>
                <a className="editorial-link archive-year-action" href={archiveHref}>
                  View Selected Archive
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="archive-context">
              <strong>Explore Stepes Over Time</strong>
              <p>
                Earlier announcements show how Stepes technology, services,
                partnerships, and global presence have developed across the years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="frequently-asked-questions"
        className="section faq-section"
        aria-labelledby="faq-title"
      >
        <div className="shell faq-layout">
          <div className="faq-copy">
            <span className="eyebrow">Newsroom Information</span>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>
              Find answers about Stepes announcements, media resources,
              interview requests, brand assets, thought leadership, and newsroom
              updates.
            </p>
            <a
              className="editorial-link"
              href="https://www.stepes.com/contact-us/"
            >
              Contact the Stepes Team
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="faq-panel">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `news-faq-answer-${index}`;

              return (
                <div className="faq-item" key={item.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle">
                      <PlusIcon open={isOpen} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer" id={answerId}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="more-resources"
        className="section resources-section"
        aria-labelledby="more-resources-title"
      >
        <div className="shell">
          <div className="resources-heading">
            <h2 id="more-resources-title">Explore More Stepes Resources</h2>
            <p>
              Continue exploring practical guidance, research, customer results,
              and educational content for building more effective multilingual
              content operations.
            </p>
          </div>

          <div className="resource-grid">
            {relatedResources.map((item) => (
              <article className="resource-item" key={item.title}>
                <span className="resource-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="editorial-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="subscribe"
        className="section subscribe-section"
        aria-labelledby="subscribe-title"
      >
        <div className="shell">
          <div className="subscribe-panel">
            <div className="subscribe-copy">
              <h2 id="subscribe-title">Get the Latest From Stepes</h2>
              <p>
                Receive selected Stepes news, platform announcements, AI
                translation insights, webinars, guides, and global content
                resources.
              </p>
              <p>
                Stay informed about the technologies, quality practices, and
                enterprise strategies shaping the future of translation and
                localization.
              </p>
            </div>

            <form
              className="subscribe-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="subscribe-field full-field">
                <span>Work Email Address</span>
                <input
                  type="email"
                  name="workEmail"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="subscribe-field">
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="First name"
                />
              </label>
              <label className="subscribe-field">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                />
              </label>
              <p className="subscribe-consent">
                By subscribing, you agree to receive news and educational
                communications from Stepes. You may unsubscribe at any time. Read
                our <a href="https://www.stepes.com/privacy-policy/">Privacy Policy</a>.
              </p>
              <button
                className="button primary-button subscribe-submit"
                type="submit"
              >
                Subscribe to Updates
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        className="final-cta-section"
        aria-labelledby="final-cta-title"
      >
        <div className="shell">
          <div className="final-cta-panel">
            <div className="final-cta-copy">
              <span className="eyebrow">Enterprise Translation</span>
              <h2 id="final-cta-title">Learn More About Stepes</h2>
              <p>
                Discover how Stepes combines AI-powered translation technology,
                professional linguistic expertise, and secure enterprise workflows
                to help organizations translate and manage multilingual content
                with greater speed, quality, and control.
              </p>
            </div>
            <div className="final-cta-actions">
              <a
                className="button primary-button"
                href="https://www.stepes.com/why-stepes/"
              >
                Explore Why Stepes
                <ArrowRight />
              </a>
              <a
                className="button secondary-button"
                href="https://www.stepes.com/contact-us/"
              >
                Contact Our Team
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
