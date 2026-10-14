import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Layout,
  Smartphone,
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Calendar,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              LEAD KODIAK • CORE SERVICES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            In Short, Our{' '}
            <span className="text-cognac-500">Main Services</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Everything your company needs to capture, nurture, and close leads without
            juggling five different tools or knocking on doors in extreme weather.
            A detailed breakdown is provided in your free consultation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
            >
              <Calendar size={18} />
              <span>Book Your Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:18005550199"
              className="px-8 py-4 glass-card text-navy-900 font-bold text-base rounded-xl hover:bg-sage-300/40 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} className="text-cognac-500" />
              <span>Call (800) 555-LEAD</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. THE 4 MAIN SERVICES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Strategically Designed Website */}
          <ScrollReveal direction="up" delay={100}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sage-300 shadow-glass flex flex-col justify-between h-full group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-cream-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Layout size={26} />
                  </div>
                  <span className="font-mono text-xs font-bold text-cognac-600 px-3 py-1 rounded-full bg-cognac-500/10 border border-cognac-500/20">
                    SERVICE 01
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900 mb-4">
                  1. Strategically Designed Website
                </h3>

                <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed mb-6">
                  We don't build generic brochure templates. We engineer high-converting, mobile-first websites tailored for homeowners and residential buyers looking for quality craftmanship.
                </p>

                <ul className="space-y-3 text-sm text-navy-900 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Conversion-optimized page layout engineered for consultation bookings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Blazing-fast mobile loading speed (sub-second performance)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Local Google SEO optimization with structured schema tags</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Instant estimate and contact forms tied directly into your pipeline</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sage-300/60 flex items-center justify-between text-xs font-mono text-navy-800 font-bold">
                <span>Fully Managed & Hosted</span>
                <span className="text-cognac-600">Zero Maintenance Headache</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 2: Lead System + App & Management */}
          <ScrollReveal direction="up" delay={200}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sage-300 shadow-glass flex flex-col justify-between h-full group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cognac-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Smartphone size={26} />
                  </div>
                  <span className="font-mono text-xs font-bold text-cognac-600 px-3 py-1 rounded-full bg-cognac-500/10 border border-cognac-500/20">
                    SERVICE 02
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900 mb-4">
                  2. Lead System + App & Management
                </h3>

                <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed mb-6">
                  A centralized mobile command center in your pocket. Capture every inquiry from your ads, website, and social channels into one unified inbox.
                </p>

                <ul className="space-y-3 text-sm text-navy-900 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Centralized mobile inbox app for iOS and Android</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Sub-30-second automated SMS follow-up when new inquiries arrive</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Missed-call automatic text-back so prospects don't call competitors</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Automated calendar appointment scheduling & SMS reminders</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sage-300/60 flex items-center justify-between text-xs font-mono text-navy-800 font-bold">
                <span>Speed-To-Lead</span>
                <span className="text-cognac-600">&lt; 30 Seconds Automated</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 3: Meta Ads Setup & Management */}
          <ScrollReveal direction="up" delay={300}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sage-300 shadow-glass flex flex-col justify-between h-full group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-cream-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Megaphone size={26} />
                  </div>
                  <span className="font-mono text-xs font-bold text-cognac-600 px-3 py-1 rounded-full bg-cognac-500/10 border border-cognac-500/20">
                    SERVICE 03
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900 mb-4">
                  3. Meta Ads Setup & Management
                </h3>

                <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed mb-6">
                  Targeted Facebook & Instagram ad campaigns designed to generate high-intent consultations, not window-shoppers. We handle setup, ad copy, creative, and ongoing budget management.
                </p>

                <ul className="space-y-3 text-sm text-navy-900 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Geo-targeted campaigns focused strictly within your service radius</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Battle-tested creative hooks proven with our own blinds company</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Continuous A/B split-testing without burning your ad budget</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Clear weekly and monthly ROI reporting on appointments booked</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sage-300/60 flex items-center justify-between text-xs font-mono text-navy-800 font-bold">
                <span>Proven Campaign Templates</span>
                <span className="text-cognac-600">Zero Guesswork</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 4: & More */}
          <ScrollReveal direction="up" delay={400}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sage-300 shadow-glass flex flex-col justify-between h-full group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Sparkles size={26} />
                  </div>
                  <span className="font-mono text-xs font-bold text-cognac-600 px-3 py-1 rounded-full bg-cognac-500/10 border border-cognac-500/20">
                    SERVICE 04
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900 mb-4">
                  4. & More
                </h3>

                <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed mb-6">
                  Full-funnel automated systems designed to maximize the lifetime value of every customer and protect your local brand reputation.
                </p>

                <ul className="space-y-3 text-sm text-navy-900 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Automated Google Review generation requests after job completion</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Re-engagement campaigns for past leads and seasonal promos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Dedicated 24/7 technical support and rapid troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-cognac-500 shrink-0 mt-0.5" />
                    <span>Custom operational automations tailored to your workflow</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-sage-300/60 flex items-center justify-between text-xs font-mono text-navy-800 font-bold">
                <span>Tailored Setup</span>
                <span className="text-cognac-600">Discussed in Consultation</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Note: Detailed Breakdown Provided in Consultation */}
        <ScrollReveal direction="up" delay={450}>
          <div className="mt-8 p-6 rounded-2xl glass-card border border-sage-300 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-semibold text-navy-900">
              📌 <span className="font-bold text-cognac-600">Please Note:</span> A detailed, customized breakdown of all deliverables, tech integrations, and campaign projections is provided during your free strategy consultation.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INDUSTRIES WE SERVE CURRENTLY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-sage-300 shadow-glass text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs font-bold font-mono tracking-widest uppercase mb-4">
              SPECIALIZED NICHE EXPERTISE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Industries We Serve Currently
            </h2>

            <p className="mt-3 text-base sm:text-lg text-navy-800/80 max-w-2xl mx-auto">
              We focus on niches where we have direct operational proof and verified sales track records.
            </p>

            <div className="mt-8 max-w-xl mx-auto p-6 rounded-2xl bg-navy-900 text-cream-100 border border-sage-300/20 shadow-md text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cognac-500 text-white flex items-center justify-center font-mono font-extrabold text-xl shrink-0 mt-1">
                1
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-cream-100">
                    Window Coverings
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase font-bold border border-emerald-500/30">
                    Active & Proven
                  </span>
                </div>
                <p className="text-sage-300 text-sm leading-relaxed">
                  Specialized in generating high-ticket residential and commercial blind, shade, and shutter appointments. Tested and proven in our own Canadian operations at <span className="text-cognac-400 font-semibold">The Blinds Company</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 text-xs text-navy-800/70 font-mono">
              *Expanding into allied home service and contractor trades. Inquire during consultation.
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. READY TO ELEVATE CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-12 border border-sage-300/20 shadow-2xl text-center text-cream-100 relative overflow-hidden">
            <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Get Your Customized Campaign Breakdown
              </h2>
              <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
                Schedule a 15-minute online consultation with our team. We’ll show you our active campaigns, discuss your target service area, and tailor the exact services for your business.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  <span>Book Consultation</span>
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
