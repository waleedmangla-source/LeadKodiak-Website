import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Users,
  PhoneCall,
  Layout,
  MessageSquare,
  GitBranch,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Repeat,
  Radio,
  FileCheck,
} from 'lucide-react';

const servicesList = [
  {
    id: 'crm',
    title: 'Omnichannel CRM & Pipeline Intelligence',
    icon: Users,
    tagline: 'Track every lead from first touch to closed contract.',
    description:
      'Replace bloated enterprise CRMs with a streamlined, lightning-fast deal board. Visualize sales pipelines, track contact interaction timelines, create custom attributes, and assign opportunities to team members automatically.',
    features: [
      'Visual drag-and-drop Kanban deal pipelines',
      'Unified activity timeline (calls, emails, texts, page visits)',
      'Smart contact segmentation & automated lead scoring',
      'Custom fields, tags, and automated opportunity value tracking',
      'Bulk action filters and smart contact lists',
    ],
    telemetry: 'Sync Latency: <120ms',
  },
  {
    id: 'voice',
    title: 'Kodiak Voice & Autonomous AI Agents',
    icon: PhoneCall,
    tagline: '18-second speed-to-lead with human-grade conversational voice.',
    description:
      'Never allow an inbound lead to go cold. When a form is submitted or an ad is clicked, Kodiak Voice AI immediately calls the prospect, answers specific questions, handles objections, and schedules them directly into your calendar.',
    features: [
      'Sub-450ms voice conversational latency',
      'Context-aware objection handling and customized company knowledge base',
      'Autonomous live calendar appointment booking',
      'Seamless warm-transfer to live human sales reps',
      'Call recording, full sentiment analysis, and transcript storage',
    ],
    telemetry: 'Average Booking Conversion: 41.8%',
  },
  {
    id: 'funnels',
    title: 'High-Velocity Funnels & Website Builder',
    icon: Layout,
    tagline: 'Engineered for conversion, speed, and clean code.',
    description:
      'Construct high-converting landing pages, full corporate websites, and multi-step sales funnels in minutes. Includes built-in A/B split testing, dynamic URL parameters, and frictionless checkout integrations.',
    features: [
      'Intuitive visual drag-and-drop page editor',
      'Pre-built industry snapshots (HVAC, Medspa, Real Estate, Legal, SaaS)',
      'Native 2-step checkout with Stripe, Apple Pay & Google Pay',
      'Built-in A/B split testing with traffic distribution controls',
      'Optimized Core Web Vitals (98+ Google PageSpeed score)',
    ],
    telemetry: 'Avg Page Load Time: 0.6s',
  },
  {
    id: 'inbox',
    title: 'Unified Conversational Inbox',
    icon: MessageSquare,
    tagline: 'All customer channels streaming into one collaborative workspace.',
    description:
      'Eliminate tab fatigue. Manage SMS, MMS, 2-way email, WhatsApp, Instagram Direct, Facebook Messenger, and live webchat from a single consolidated screen.',
    features: [
      'Two-way SMS/MMS with local number provisioning',
      'Centralized WhatsApp, Instagram DMs & Facebook Messenger streams',
      'Live website chat widget with automated AI triage',
      'Internal team notes, mentions, and conversation reassignment',
      'Pre-written canned replies and snippet templates',
    ],
    telemetry: 'Channels Consolidated: 7+',
  },
  {
    id: 'workflows',
    title: 'Visual Workflow Automations & Event Triggers',
    icon: GitBranch,
    tagline: 'Build complex if/then sequences without writing a single line of code.',
    description:
      'Connect every system action into automated workflows. When a prospect books a call, automatically trigger confirmation texts, calendar reminders, CRM stage updates, internal Slack alerts, and invoice generation.',
    features: [
      'Visual flowchart automation builder with conditional branching',
      'Pre-built trigger templates (Missed-Call Text-Back, Review Requests)',
      'Time delays, window gating, and appointment-relative timing',
      'Inbound/outbound webhook support for custom web apps and Zapier',
      'Automatic internal team notifications via SMS, push, or email',
    ],
    telemetry: 'Reliability: 99.99% Event Execution',
  },
  {
    id: 'saas',
    title: 'White-Label Agency Reselling (SaaS Mode)',
    icon: ShieldAlert,
    tagline: 'Package and resell Lead Kodiak as your agency’s proprietary software.',
    description:
      'Transform your agency into a software company with recurring SaaS margins. Put your domain, your logo, your colors, and your pricing on the entire platform. Keep 100% of your software subscription revenues and profit on client usage.',
    features: [
      'Full custom domain mapping (app.youragency.com)',
      'Custom branding, logo, favicon, and login screen',
      'Automated client sub-account creation via Stripe checkout',
      'Rebill client SMS, voice, and AI usage with customizable markups (2x-5x)',
      'Deploy turnkey agency "snapshots" into client accounts with 1 click',
    ],
    telemetry: 'Typical Agency Margin: 78-85%',
  },
];

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('crm');

  const currentActive = servicesList.find((s) => s.id === selectedService) || servicesList[0];

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">PLATFORM ARCHITECTURE & CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Everything Your Revenue Team Needs.{' '}
            <span className="text-cognac-500">Zero Arbitrary Bloat.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Lead Kodiak is engineered from first principles as an integrated operating system.
            Explore the 6 core pillars powering over 14,800 agencies and commercial enterprises.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. INTERACTIVE SERVICE NAVIGATOR & DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Pillar Selector */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3 px-2">
                CORE SYSTEM PILLARS
              </div>
              {servicesList.map((service, index) => {
                const isSelected = selectedService === service.id;
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-navy-900 text-cream-100 border-navy-900 shadow-md translate-x-1'
                        : 'glass-card text-navy-800 border-sage-300 hover:bg-sage-300/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? 'bg-navy-800 text-cognac-500' : 'bg-sage-300/60 text-navy-800'
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono opacity-70">MOD 0{index + 1}</div>
                        <div className="font-bold text-sm leading-tight">{service.title}</div>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-transform ${
                        isSelected ? 'text-cognac-500 translate-x-1' : 'opacity-40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Pillar Spotlight */}
            <div className="lg:col-span-8">
              <div className="glass-card-dark rounded-2xl p-6 sm:p-10 border border-sage-300/20 shadow-glass-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <KodiakBearIcon size={160} inverted={true} />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sage-300/15 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 text-xs font-mono text-cognac-500 border border-sage-300/10">
                      <Radio size={14} className="text-emerald-400 animate-pulse" />
                      <span>{currentActive.telemetry}</span>
                    </div>
                    <span className="text-xs font-mono text-sage-300/70">
                      ENTERPRISE READY &bull; HIGH THROUGHPUT
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-cream-100 mb-2">
                      {currentActive.title}
                    </h2>
                    <p className="text-cognac-500 text-base font-semibold font-mono">
                      {currentActive.tagline}
                    </p>
                  </div>

                  <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
                    {currentActive.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-cream-100 font-bold mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentActive.features.map((feat, i) => (
                        <div
                          key={i}
                          className="bg-navy-900/80 p-3 rounded-xl border border-sage-300/10 flex items-start gap-2.5 text-xs text-cream-100/90"
                        >
                          <CheckCircle2 size={16} className="text-cognac-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      to="/plans-discounts"
                      className="w-full sm:w-auto px-6 py-3 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Unlock This In Your Plan</span>
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      to="/our-work"
                      className="w-full sm:w-auto px-6 py-3 bg-navy-900 border border-sage-300/30 text-cream-100 font-bold text-sm rounded-xl hover:bg-navy-800 transition-all flex items-center justify-center gap-2"
                    >
                      <span>View Real Case Results</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. HOW THE KODIAK PIPELINE FLOWS (Dataflow diagram) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              END-TO-END AUTOMATION FLOW
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              From Anonymous Traffic To Retained Client
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              See how the 6 engines harmonize to automate client acquisition 24/7 without dropped balls.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-sage-300 shadow-glass">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Step 1 */}
              <div className="bg-cream-100/80 p-5 rounded-xl border border-sage-300 relative space-y-3">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-cream-100 font-mono font-bold flex items-center justify-center text-xs">
                  01
                </div>
                <div className="font-bold text-navy-900 text-sm">Traffic Ingestion</div>
                <p className="text-xs text-navy-800/70 leading-relaxed">
                  Paid ads, organic SEO, or local search directs prospects into high-converting Kodiak funnels.
                </p>
                <div className="text-[11px] font-mono text-cognac-500 font-bold">
                  Conversion: 8-14%
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-cream-100/80 p-5 rounded-xl border border-sage-300 relative space-y-3">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-cream-100 font-mono font-bold flex items-center justify-center text-xs">
                  02
                </div>
                <div className="font-bold text-navy-900 text-sm">Sub-30s AI Voice Dispatch</div>
                <p className="text-xs text-navy-800/70 leading-relaxed">
                  Kodiak Voice calls the prospect within 20 seconds. Pre-qualifies budget, timeline, and location.
                </p>
                <div className="text-[11px] font-mono text-emerald-700 font-bold">
                  Speed: 18.2s Avg
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-cream-100/80 p-5 rounded-xl border border-sage-300 relative space-y-3">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-cream-100 font-mono font-bold flex items-center justify-center text-xs">
                  03
                </div>
                <div className="font-bold text-navy-900 text-sm">Calendar & Closing</div>
                <p className="text-xs text-navy-800/70 leading-relaxed">
                  Meeting scheduled on team round-robin calendar. Automated SMS reminders prevent no-shows.
                </p>
                <div className="text-[11px] font-mono text-cognac-500 font-bold">
                  Show-up Rate: 84%
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-cream-100/80 p-5 rounded-xl border border-sage-300 relative space-y-3">
                <div className="w-8 h-8 rounded-lg bg-navy-800 text-cream-100 font-mono font-bold flex items-center justify-center text-xs">
                  04
                </div>
                <div className="font-bold text-navy-900 text-sm">Billing & Review Loop</div>
                <p className="text-xs text-navy-800/70 leading-relaxed">
                  Stripe e-contract signed, automated onboarding triggered, and automated 5-star Google review sent.
                </p>
                <div className="text-[11px] font-mono text-emerald-700 font-bold">
                  Retention: +32% MoM
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. SEAMLESS MIGRATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-2xl p-8 sm:p-12 border border-sage-300/20 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sage-300/20 text-xs font-mono text-sage-300">
                <Repeat size={14} className="text-cognac-500" />
                <span>SWITCHING FROM GOHIGHLEVEL, HUBSPOT, OR ACTIVECAMPAIGN?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-cream-100">
                Concierge 1-Click Data Migration
              </h2>

              <p className="text-sage-300 text-sm sm:text-base leading-relaxed">
                Migrate your contacts, pipeline history, email templates, and active workflows with zero downtime.
                Our migration team handles data cleansing and field mapping for you free of charge.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cream-100 bg-navy-900 px-3.5 py-2 rounded-xl border border-sage-300/20">
                  <FileCheck size={14} className="text-emerald-400" /> Complete Contact & Tag Preserved
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cream-100 bg-navy-900 px-3.5 py-2 rounded-xl border border-sage-300/20">
                  <FileCheck size={14} className="text-emerald-400" /> Workflow & Trigger Replication
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cream-100 bg-navy-900 px-3.5 py-2 rounded-xl border border-sage-300/20">
                  <FileCheck size={14} className="text-emerald-400" /> Zero Interruption to Active Campaigns
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/plans-discounts"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Claim $500 Migration Credit</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
