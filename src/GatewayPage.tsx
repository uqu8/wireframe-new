import React from 'react';

// ===== Icons =====
function ArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function CheckBadge({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GlobeIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// ===== Components =====
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#FCEAF2] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C11D63]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#C11D63]" />
      {children}
    </span>
  );
}

function BrandCard({ 
  href, 
  brand, 
  tag, 
  tagColor,
  description, 
  detail,
  hoverColor,
  ctaText,
  gradientFrom,
  gradientTo,
  iconBg,
}: { 
  href: string; 
  brand: string; 
  tag: string;
  tagColor: string;
  description: string; 
  detail: string;
  hoverColor: string;
  ctaText: string;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="group relative overflow-hidden rounded-3xl border border-[#EEEEF2] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ 
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Gradient background on hover */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ 
          background: `linear-gradient(145deg, ${gradientFrom}, ${gradientTo})`,
          borderRadius: 'inherit',
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
            style={{ backgroundColor: iconBg }}
          >
            {brand === 'Stepes' ? (
              <span className="text-lg font-bold" style={{ color: hoverColor }}>S</span>
            ) : (
              <span className="text-lg font-bold" style={{ color: hoverColor }}>S</span>
            )}
          </div>
          <span className="text-lg font-bold text-slate-900">{brand}</span>
          <span 
            className="ml-auto rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ backgroundColor: `${hoverColor}15`, color: hoverColor }}
          >
            {tag}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
          {brand}
        </h3>
        <p className="mt-2.5 text-[15px] leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: hoverColor }}>
          {ctaText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-400">
          <CheckBadge className="h-3.5 w-3.5" style={{ color: hoverColor }} />
          <span>{detail}</span>
        </div>
      </div>
    </a>
  );
}

// ===== Main Component =====
export default function GatewayPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-950">
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .btn-stepes {
          background: linear-gradient(145deg, #C11D63, #A0164E);
        }
        .btn-stepes:hover {
          background: linear-gradient(145deg, #A0164E, #7A1542);
        }
        .btn-sesen {
          background: linear-gradient(145deg, #437eeb, #2a5fc7);
        }
        .btn-sesen:hover {
          background: linear-gradient(145deg, #2a5fc7, #1a4a9e);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative elements */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#FCEAF2] opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E8EFFB] opacity-20 blur-3xl" />
        
        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-14 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Left: Content */}
            <div className="relative z-10">
              <Eyebrow>Global Language · Gateway</Eyebrow>
              
              <h1 className="mt-6 max-w-[600px] text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
                Translation &amp; Localization
                <br />
                <span className="bg-gradient-to-r from-[#C11D63] to-[#437eeb] bg-clip-text text-transparent">
                  Professional Gateway
                </span>
              </h1>
              
              <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-500">
                Stepes and Sesen deliver premium language services for global organizations.
                Choose your brand below to begin your multilingual journey.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['100+ languages', 'AI + Human workflows', 'Enterprise security'].map((item) => (
                  <span 
                    key={item}
                    className="flex items-center gap-1.5 rounded-full bg-[#F5F5F8] px-3.5 py-1.5 text-sm font-medium text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C11D63]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/stepes/"
                  target="_blank"
                  rel="noopener"
                  className="btn-stepes inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#C11D63]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#C11D63]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Visit Stepes
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/sesen/"
                  target="_blank"
                  rel="noopener"
                  className="btn-sesen inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#437eeb]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#437eeb]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#437eeb] focus-visible:ring-offset-4"
                >
                  Visit Sesen
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Brand Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Stepes Card */}
                <BrandCard
                  href="/stepes/"
                  brand="Stepes"
                  tag="Translation"
                  tagColor="#C11D63"
                  description="Enterprise translation platform for websites, apps, and multimedia in 100+ languages."
                  detail="AI + expert review · Travel & hospitality specialists"
                  hoverColor="#C11D63"
                  ctaText="Explore Stepes"
                  gradientFrom="#FCEAF2"
                  gradientTo="#FDF2F7"
                  iconBg="#FCEAF2"
                />

                {/* Sesen Card */}
                <BrandCard
                  href="/sesen/"
                  brand="Sesen"
                  tag="Language"
                  tagColor="#437eeb"
                  description="Professional translation, interpreting, and localization solutions for global communication."
                  detail="Conference interpreting · Document translation · Multimedia"
                  hoverColor="#437eeb"
                  ctaText="Visit Sesen"
                  gradientFrom="#E8EFFB"
                  gradientTo="#F0F5FF"
                  iconBg="#E8EFFB"
                />
              </div>

              {/* Trust indicator */}
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400 sm:justify-start">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C11D63]">✦</span> Trusted by 500+ enterprises
                </span>
                <span className="h-4 w-px bg-slate-200" />
                <span className="flex items-center gap-1.5">
                  <span className="text-[#437eeb]">✦</span> 98% client retention
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}