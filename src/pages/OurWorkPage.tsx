import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  ExternalLink,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Snowflake,
  ArrowRight,
} from 'lucide-react';

export const OurWorkPage: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              PROVEN IN ACTIVE OPERATIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Our Work: Real Clients.{' '}
            <span className="text-cognac-500">Measurable Growth.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            We don't experiment with your money. Our software and marketing systems are built on
            strategies tested and proven in real-world day-to-day operations.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. FLAGSHIP CASE STUDY: THE BLINDS COMPANY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-sage-300 shadow-glass overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Client Branding & Logo Showcase */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cognac-500/10 border border-cognac-500/30 text-cognac-600 font-mono text-xs font-bold uppercase">
                  Flagship Case Study
                </div>

                {/* The Blinds Company Logo & Image Card */}
                <div className="rounded-2xl bg-white p-6 border-2 border-sage-300 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                  {!imageError ? (
                    <img
                      src="https://assets.cdn.filesafe.space/O6vWCkTve5l5krSS52Yy/media/691e4996e171b8714d47e32e.jpg"
                      alt="The Blinds Company Logo"
                      className="max-h-24 sm:max-h-32 object-contain mx-auto"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Fallback Stylized Logo */
                    <div className="py-4 text-center">
                      <div className="font-extrabold text-2xl sm:text-3xl tracking-tight text-navy-900 font-serif">
                        THE BLINDS COMPANY
                      </div>
                      <div className="text-xs font-mono tracking-widest text-cognac-500 uppercase mt-1">
                        Custom Window Coverings
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-sage-200 w-full text-center">
                    <span className="text-xs font-mono text-navy-800/70 font-semibold">
                      Canadian Window Treatment Specialists
                    </span>
                  </div>
                </div>

                {/* Live Link Button */}
                <a
                  href="https://theblindscompany.ca/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-cream-100 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <span>Visit theblindscompany.ca/home</span>
                  <ExternalLink size={16} className="text-cognac-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl bg-sage-300/40 border border-sage-300 text-xs text-navy-800 space-y-1">
                  <div className="font-bold">Deployed Infrastructure:</div>
                  <div className="text-navy-800/80">
                    • Strategically Designed Conversion Website<br />
                    • Centralized Inbound Lead System & Mobile App<br />
                    • Targeted Meta (Facebook & Instagram) Ad Campaigns<br />
                    • Sub-30s Automated SMS Speed-to-Lead Follow-up
                  </div>
                </div>
              </div>

              {/* Right Column: Key Results & Operational Story */}
              <div className="lg:col-span-7 space-y-6 text-navy-900">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    The Blinds Company
                  </h2>
                  <p className="text-cognac-600 font-mono text-sm font-bold mt-1">
                    Zero Cold Outreach • Up To 10X ROAS • Automated Consultations
                  </p>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-cream-100 border border-sage-300 shadow-sm text-center">
                    <div className="text-xl sm:text-2xl font-black font-mono text-navy-900">
                      10X
                    </div>
                    <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-0.5">
                      Peak Monthly ROAS
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream-100 border border-sage-300 shadow-sm text-center">
                    <div className="text-xl sm:text-2xl font-black font-mono text-cognac-600">
                      &lt; 30s
                    </div>
                    <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-0.5">
                      Speed to Lead
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream-100 border border-sage-300 shadow-sm text-center col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-black font-mono text-emerald-600">
                      0
                    </div>
                    <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-0.5">
                      Cold Door Knocks
                    </div>
                  </div>
                </div>

                {/* The Transformation Story */}
                <div className="space-y-4 text-sm sm:text-base text-navy-800/90 leading-relaxed">
                  <p>
                    Before implementing the Lead Kodiak ecosystem, generating consistent window covering clients meant unpredictable door-to-door canvassing in freezing Canadian winters and sweltering summer afternoons.
                  </p>
                  <p>
                    By constructing a high-converting conversion website and coupling it with geo-targeted Meta ad campaigns and our centralized lead management app, <strong>The Blinds Company completely eliminated cold outreach</strong>. Inquiries are captured 24/7, contacted automatically within 30 seconds, and booked straight onto installation calendars.
                  </p>
                </div>

                {/* Before & After Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                    <div className="font-bold text-red-900 mb-1 flex items-center gap-1.5">
                      <Snowflake size={14} className="text-red-700" />
                      <span>Before Lead Kodiak:</span>
                    </div>
                    <p className="text-red-900/80 leading-relaxed">
                      Freezing mornings door-knocking, lost leads slipping through phone logs, inconsistent monthly revenue.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                    <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-700" />
                      <span>With Lead Kodiak:</span>
                    </div>
                    <p className="text-emerald-900/80 leading-relaxed">
                      100% automated inbound lead flow, unified mobile inbox, up to 10X ad spend returns, booked year-round.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-14 border border-sage-300/20 shadow-2xl text-center text-cream-100 relative overflow-hidden">
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cognac-500/20 border border-cognac-500/40 text-cognac-400 text-xs font-bold font-mono tracking-widest uppercase">
                READY TO REPLICATE THESE RESULTS?
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Want To Build A High-Yield Pipeline For Your Business?
              </h2>

              <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
                Let's evaluate your service territory and implement the same battle-tested pipeline that powers The Blinds Company.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
                >
                  <Calendar size={18} />
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:18005550199"
                  className="w-full sm:w-auto px-8 py-4 glass-card text-navy-900 font-bold text-base rounded-xl hover:bg-cream-100 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall size={18} className="text-cognac-500" />
                  <span>Call (800) 555-LEAD</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
