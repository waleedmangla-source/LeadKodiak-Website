import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  ShieldCheck,
  Zap,
  Target,
  ArrowRight,
  Globe2,
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">THE KODIAK THESIS & MISSION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Built By Operators Who Refused To{' '}
            <span className="text-cognac-500">Pay The Tool Tax.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Lead Kodiak was forged from frustration with fragile legacy CRMs, slow follow-up speeds,
            and software vendors that penalize your growth with arbitrary per-contact seat pricing.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE ORIGIN STORY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border border-sage-300 shadow-glass space-y-6 text-navy-900">
            <div className="flex items-center gap-3 border-b border-sage-300/60 pb-4">
              <KodiakBearIcon size={28} />
              <div className="font-mono text-xs font-bold text-cognac-500 tracking-widest uppercase">
                THE GENESIS OF LEAD KODIAK
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Why We Built An Apex Platform
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-navy-800/85">
              In 2021, our founding team was running a high-velocity digital agency managing hundreds
              of thousands of monthly leads for healthcare, legal, and local commercial brands.
              Every single client required a Frankenstein stack: ClickFunnels for the landing page,
              ActiveCampaign for the emails, Calendly for the bookings, Zapier to link them, and
              Podium for review requests.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-navy-800/85">
              The cost was astronomical—over $1,500/mo per client. But worse than the financial cost
              was the reliability failure: webhooks would silently drop leads during weekend traffic surges,
              sales reps took hours to respond to hot inquiries, and clients constantly questioned
              why they were paying our agency only to see third-party software logos everywhere.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-navy-800/85">
              We realized the industry didn’t need another lightweight dashboard. It needed a predatory,
              high-throughput operating system: one database, native sub-second speed-to-lead,
              autonomous conversational voice, and 100% white-label freedom.
              That is Lead Kodiak.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. CORE OPERATING PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              WHAT WE STAND FOR
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Our Non-Negotiable Core Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-sage-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <Zap size={24} className="text-cognac-500" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">Sub-Second Speed-To-Lead</h4>
              <p className="text-xs sm:text-sm text-navy-800/80 leading-relaxed">
                Leads decay by 391% after the first minute. Every engine in Lead Kodiak is architected
                to qualify, text, or voice-dispatch to incoming prospects in seconds, not hours.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-sage-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <Target size={24} className="text-cognac-500" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">Zero Contact Penalty Taxes</h4>
              <p className="text-xs sm:text-sm text-navy-800/80 leading-relaxed">
                Most CRMs double your monthly bill as soon as your contact list grows. We believe
                your database belongs to you. All our plans include unlimited contacts and team seats.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-sage-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <ShieldCheck size={24} className="text-cognac-500" />
              </div>
              <h4 className="text-xl font-bold text-navy-900">White-Label Empowerment</h4>
              <p className="text-xs sm:text-sm text-navy-800/80 leading-relaxed">
                Agencies shouldn’t be unpaid marketing evangelists for third-party SaaS vendors.
                We provide the raw engine; you brand it, price it, and build generational enterprise value.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. GLOBAL INFRASTRUCTURE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-12 border border-sage-300/20 shadow-glass-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 text-xs font-mono text-cognac-500 border border-sage-300/10">
                  <Globe2 size={14} />
                  <span>DISTRIBUTED ARCHITECTURE</span>
                </div>
                <h2 className="text-3xl font-extrabold text-cream-100">
                  Global Resilience & Enterprise Security
                </h2>
                <p className="text-sage-300 text-sm leading-relaxed">
                  Lead Kodiak operates across multi-region server clusters across the Americas,
                  Europe, and Asia-Pacific. With automated data redundancy, SOC-2 readiness, and
                  isolated sub-account multi-tenancy, your agency's operations are bulletproof.
                </p>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-cream-100 pt-2">
                  <div className="bg-navy-900 p-3 rounded-xl border border-sage-300/10">
                    <span className="text-sage-300/60 block">UPTIME RECORD:</span>
                    <strong className="text-emerald-400 text-base font-bold">99.992%</strong>
                  </div>
                  <div className="bg-navy-900 p-3 rounded-xl border border-sage-300/10">
                    <span className="text-sage-300/60 block">DAILY API REQS:</span>
                    <strong className="text-cognac-500 text-base font-bold">42M+</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-navy-900 rounded-2xl p-6 border border-sage-300/15 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-sage-300/10 pb-3">
                  <span className="text-cream-100 font-bold">CLUSTER STATUS MONITOR</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ALL SYSTEMS ONLINE
                  </span>
                </div>
                <div className="space-y-2 text-sage-300">
                  <div className="flex justify-between py-1 border-b border-sage-300/5">
                    <span>US-East (Virginia)</span>
                    <span className="text-emerald-400">Operational &bull; 14ms</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sage-300/5">
                    <span>US-West (Oregon)</span>
                    <span className="text-emerald-400">Operational &bull; 19ms</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sage-300/5">
                    <span>EU-Central (Frankfurt)</span>
                    <span className="text-emerald-400">Operational &bull; 26ms</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sage-300/5">
                    <span>Voice AI Dispatch Engine</span>
                    <span className="text-emerald-400">Operational &bull; sub-400ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-2xl p-10 border border-sage-300 shadow-glass space-y-5 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-navy-900">
              Ready To Partner With The Apex Engine?
            </h2>
            <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed">
              Explore our plans or start your 14-day free trial today.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                to="/plans-discounts"
                className="px-8 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>View Plans & Discounts</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
