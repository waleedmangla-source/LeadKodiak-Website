import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Zap,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Calendar,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Check,
} from 'lucide-react';

const softwareItems = [
  { id: 'funnels', name: 'Funnel & Website Builder', replaces: 'ClickFunnels', cost: 297, checked: true },
  { id: 'crm', name: 'Email Marketing & CRM', replaces: 'ActiveCampaign', cost: 149, checked: true },
  { id: 'calendar', name: 'Appointment Booking', replaces: 'Calendly', cost: 36, checked: true },
  { id: 'zapier', name: 'Webhook & Automation Bridge', replaces: 'Zapier Pro', cost: 89, checked: true },
  { id: 'sms', name: 'Review & SMS Reputation', replaces: 'Podium', cost: 289, checked: true },
  { id: 'social', name: 'Social Media Planner', replaces: 'Loomly / Hootsuite', cost: 79, checked: true },
  { id: 'tracking', name: 'Call Tracking & Analytics', replaces: 'CallRail', cost: 95, checked: false },
  { id: 'courses', name: 'Membership & Course Portal', replaces: 'Kajabi', cost: 199, checked: false },
];

export const HomePage: React.FC = () => {
  // Calculator state
  const [selectedTools, setSelectedTools] = useState<string[]>(
    softwareItems.filter((i) => i.checked).map((i) => i.id)
  );

  // Feature console tab state
  const [activeConsoleTab, setActiveConsoleTab] = useState<'inbox' | 'voice' | 'workflow' | 'saas'>('inbox');

  const toggleTool = (id: string) => {
    if (selectedTools.includes(id)) {
      setSelectedTools(selectedTools.filter((t) => t !== id));
    } else {
      setSelectedTools([...selectedTools, id]);
    }
  };

  const currentTotal = softwareItems
    .filter((item) => selectedTools.includes(item.id))
    .reduce((acc, curr) => acc + curr.cost, 0);

  const kodiakMonthly = 297;
  const monthlySavings = Math.max(0, currentTotal - kodiakMonthly);
  const annualSavings = monthlySavings * 12;

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">

        <ScrollReveal direction="up" delay={150}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.08] max-w-5xl mx-auto">
            The Revenue Operating System Built For{' '}
            <span className="relative inline-block text-cognac-500 underline decoration-sage-400 decoration-wavy decoration-2">
              Apex Agencies
            </span>
            .
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={250}>
          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Consolidate your entire stack. Capture high-intent leads, qualify them in seconds with
            autonomous voice and SMS agents, and close deals into automated pipelines.
            White-label the entire ecosystem as your agency’s proprietary software.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={350}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/plans-discounts"
              className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
            >
              <span>Explore Plans & Scaled Pricing</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 glass-card border border-sage-300 text-navy-800 font-bold text-base rounded-xl hover:bg-sage-300/40 transition-all flex items-center justify-center gap-2"
            >
              <Cpu size={18} className="text-cognac-500" />
              <span>Inspect Platform Capabilities</span>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-navy-800/70 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-700" /> 14-Day Unrestricted Access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-700" /> Free 1-Click GoHighLevel Migration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-700" /> Unlimited Contacts & Team Seats
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TELEMETRY TERMINAL PANEL (Space Grotesk & Terminal Panels per DESIGN.md) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-2xl p-6 sm:p-8 shadow-glass-dark border border-sage-300/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-sage-300/15">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-navy-900 border border-sage-300/20 text-cognac-500">
                  <KodiakBearIcon size={24} inverted={true} />
                </div>
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-widest text-cognac-500 font-bold">
                    KODIAK REAL-TIME TELEMETRY GRID
                  </h2>
                  <p className="text-xs text-sage-300/70 font-mono mt-0.5">
                    Live operational metrics aggregated across active agency clusters
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY ACTIVE
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/10">
                <div className="text-xs font-mono text-sage-300/70 mb-1">AGENCY PARTNERS</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cream-100">14,820+</div>
                <div className="text-[11px] text-emerald-400 mt-2 font-mono flex items-center gap-1">
                  <TrendingUp size={12} /> +28% MoM Growth
                </div>
              </div>

              <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/10">
                <div className="text-xs font-mono text-sage-300/70 mb-1">QUALIFIED LEADS</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cream-100">1.84B+</div>
                <div className="text-[11px] text-sage-300/60 mt-2 font-mono">Real-time routing</div>
              </div>

              <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/10">
                <div className="text-xs font-mono text-sage-300/70 mb-1">BOOKED APPOINTMENTS</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cream-100">84.2M</div>
                <div className="text-[11px] text-emerald-400 mt-2 font-mono flex items-center gap-1">
                  <TrendingUp size={12} /> 18.2s Avg Speed-to-Lead
                </div>
              </div>

              <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/10">
                <div className="text-xs font-mono text-sage-300/70 mb-1">CLIENT REVENUE LOGGED</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cognac-500">$5.42B+</div>
                <div className="text-[11px] text-sage-300/60 mt-2 font-mono">Facilitated via Stripe/APIs</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. "KILL THE TOOL BLOAT" INTERACTIVE STACK CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              STACK CONSOLIDATION CALCULATOR
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Stop Paying The "Fragmented Software" Tax
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              Agencies typically juggle 7+ subscriptions, duct-taped together with fragile Zapiers.
              Toggle what you currently use and calculate your real savings.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10 shadow-glass border border-sage-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Tool checklist */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-navy-800 font-bold mb-4">
                  Select your current subscriptions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {softwareItems.map((tool) => {
                    const isChecked = selectedTools.includes(tool.id);
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => toggleTool(tool.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all ${
                          isChecked
                            ? 'bg-navy-800 text-cream-100 border-navy-900 shadow-sm'
                            : 'bg-cream-100/60 text-navy-800 border-sage-300/80 hover:bg-cream-200/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                              isChecked
                                ? 'bg-cognac-500 border-cognac-500 text-white'
                                : 'border-sage-400 bg-white/50 text-transparent'
                            }`}
                          >
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <div>
                            <div className="font-semibold text-xs sm:text-sm">{tool.name}</div>
                            <div className="text-[11px] opacity-75 font-mono">Replaces {tool.replaces}</div>
                          </div>
                        </div>
                        <div className="font-mono text-xs font-bold shrink-0 ml-2">
                          ${tool.cost}/mo
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculator Outcome Box */}
              <div className="lg:col-span-5 bg-navy-900 rounded-2xl p-6 sm:p-8 text-cream-100 border border-sage-300/20 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <KodiakBearIcon size={120} inverted={true} />
                </div>

                <div className="relative z-10 space-y-5">
                  <div className="flex justify-between items-center text-sm border-b border-sage-300/15 pb-3">
                    <span className="text-sage-300 font-mono text-xs">Current Disjointed Stack</span>
                    <span className="font-mono text-lg font-bold text-red-400">${currentTotal} /mo</span>
                  </div>

                  <div className="flex justify-between items-center text-sm border-b border-sage-300/15 pb-3">
                    <span className="text-sage-300 font-mono text-xs">Lead Kodiak Unlimited</span>
                    <span className="font-mono text-lg font-bold text-cream-100">${kodiakMonthly} /mo</span>
                  </div>

                  <div className="bg-navy-800/90 rounded-xl p-4 border border-cognac-500/30">
                    <div className="text-xs font-mono uppercase tracking-wider text-cognac-500 font-bold mb-1">
                      ESTIMATED AGENCY SAVINGS
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
                      ${monthlySavings}{' '}
                      <span className="text-sm font-sans font-normal text-sage-300">/ month</span>
                    </div>
                    <div className="text-xs text-sage-300 mt-1 font-mono">
                      or <strong className="text-cream-100 font-bold">${annualSavings.toLocaleString()}</strong> every single year
                    </div>
                  </div>

                  <Link
                    to="/plans-discounts"
                    className="w-full py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Consolidate Your Stack Now</span>
                    <ArrowRight size={16} />
                  </Link>

                  <div className="text-[11px] text-center text-sage-300/70 font-mono">
                    *Plus zero limits on team seats, client accounts, or contacts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. THE KODIAK TRIAD: CAPTURE, NURTURE, CLOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              THE THREE ENGINES OF REVENUE
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Capture. Nurture. Close.
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              Every feature in Lead Kodiak is precision-tuned to push cold prospects into booked,
              high-ticket clients without manual friction.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Capture */}
          <ScrollReveal direction="up" delay={100}>
            <div className="glass-card rounded-2xl p-8 border border-sage-300 hover:border-cognac-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={24} className="text-cognac-500" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                  STAGE 01
                </div>
                <h4 className="text-2xl font-bold text-navy-900 mb-3">Capture Engine</h4>
                <p className="text-navy-800/80 text-sm leading-relaxed mb-6">
                  Build responsive funnels and conversion websites with our zero-bloat visual builder.
                  Integrate intelligent survey forms, two-step checkout flows, and automated SMS capture widgets.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Drag-and-drop landing pages & funnels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Conditional logic survey & quote forms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> High-speed Google PageSpeed 98+ templates
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-sage-300/40">
                <span className="text-xs font-bold text-navy-900 flex items-center gap-1 group-hover:text-cognac-500 transition-colors">
                  Learn about Capture tools <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Nurture */}
          <ScrollReveal direction="up" delay={200}>
            <div className="glass-card rounded-2xl p-8 border border-sage-300 hover:border-cognac-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot size={24} className="text-cognac-500" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                  STAGE 02
                </div>
                <h4 className="text-2xl font-bold text-navy-900 mb-3">Nurture Engine</h4>
                <p className="text-navy-800/80 text-sm leading-relaxed mb-6">
                  Never lose a lead to delay. Kodiak Voice AI calls incoming prospects in under 20 seconds,
                  while automated multi-channel sequences engage via SMS, Email, WhatsApp, and Instagram.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Kodiak Voice AI autonomous callers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Unified inbox for all client messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Multi-touch automated email & SMS drips
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-sage-300/40">
                <span className="text-xs font-bold text-navy-900 flex items-center gap-1 group-hover:text-cognac-500 transition-colors">
                  Inspect Autonomous Nurture <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Close */}
          <ScrollReveal direction="up" delay={300}>
            <div className="glass-card rounded-2xl p-8 border border-sage-300 hover:border-cognac-500/50 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar size={24} className="text-cognac-500" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                  STAGE 03
                </div>
                <h4 className="text-2xl font-bold text-navy-900 mb-3">Close Engine</h4>
                <p className="text-navy-800/80 text-sm leading-relaxed mb-6">
                  Turn conversations into booked meetings and collected revenue. Manage deal stages on visual
                  kanban boards, accept payments via Stripe, and trigger post-sale review loops.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-800 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Multi-calendar team booking with round-robin
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Integrated Stripe invoicing & contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-cognac-500" /> Automated 5-star Google review triggers
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-sage-300/40">
                <span className="text-xs font-bold text-navy-900 flex items-center gap-1 group-hover:text-cognac-500 transition-colors">
                  Review Closing Workflows <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. INTERACTIVE PLATFORM CONSOLE & TABBED PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              LIVE SYSTEM EXPLORER
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              A Unified Operating Interface
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              Switch through key command centers inside the Lead Kodiak workspace.
            </p>
          </div>

          {/* Console Tab Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setActiveConsoleTab('inbox')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeConsoleTab === 'inbox'
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'glass-card text-navy-800 hover:bg-sage-300/40'
              }`}
            >
              <MessageSquare size={16} className={activeConsoleTab === 'inbox' ? 'text-cognac-500' : ''} />
              <span>Omnichannel Inbox</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('voice')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeConsoleTab === 'voice'
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'glass-card text-navy-800 hover:bg-sage-300/40'
              }`}
            >
              <PhoneCall size={16} className={activeConsoleTab === 'voice' ? 'text-cognac-500' : ''} />
              <span>Kodiak Voice AI</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('workflow')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeConsoleTab === 'workflow'
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'glass-card text-navy-800 hover:bg-sage-300/40'
              }`}
            >
              <Layers size={16} className={activeConsoleTab === 'workflow' ? 'text-cognac-500' : ''} />
              <span>Automation Canvas</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('saas')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeConsoleTab === 'saas'
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'glass-card text-navy-800 hover:bg-sage-300/40'
              }`}
            >
              <ShieldCheck size={16} className={activeConsoleTab === 'saas' ? 'text-cognac-500' : ''} />
              <span>White-Label SaaS Mode</span>
            </button>
          </div>

          {/* Interactive Screen Display */}
          <div className="glass-card-dark rounded-2xl border border-sage-300/20 p-4 sm:p-8 shadow-glass-dark overflow-hidden">
            {activeConsoleTab === 'inbox' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-sm font-bold text-cream-100">
                      LIVE CONVERSATIONS STREAM // 4 UNREAD INBOUNDS
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sage-300/70">SYNCED CHANNELS: SMS, EMAIL, IG, WHATSAPP</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-navy-900/90 rounded-xl p-4 border border-sage-300/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-sage-300">
                      <span>SMS &bull; (415) 890-2341</span>
                      <span className="text-emerald-400">12s ago</span>
                    </div>
                    <div className="text-sm font-semibold text-cream-100">Sarah Jenkins (Dental Clinic Lead)</div>
                    <p className="text-xs text-sage-300/80">
                      "Yes, we'd like to book the Friday demo at 2:00 PM for our 3 clinic locations."
                    </p>
                    <div className="pt-2 flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-cognac-500/20 text-cognac-500 font-mono text-[10px]">
                        AI Replied: Confirmed
                      </span>
                    </div>
                  </div>

                  <div className="bg-navy-900/90 rounded-xl p-4 border border-sage-300/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-sage-300">
                      <span>Instagram DM &bull; @realtor_mike</span>
                      <span className="text-emerald-400">1m ago</span>
                    </div>
                    <div className="text-sm font-semibold text-cream-100">Michael Torres</div>
                    <p className="text-xs text-sage-300/80">
                      "How quickly can we migrate our 2,400 past buyers into the Kodiak nurture flow?"
                    </p>
                    <div className="pt-2 flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-sage-300/20 text-sage-300 font-mono text-[10px]">
                        Assigned: Onboarding Team
                      </span>
                    </div>
                  </div>

                  <div className="bg-navy-900/90 rounded-xl p-4 border border-sage-300/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-sage-300">
                      <span>Webchat &bull; Organic Visitor</span>
                      <span className="text-emerald-400">4m ago</span>
                    </div>
                    <div className="text-sm font-semibold text-cream-100">Apex HVAC Services</div>
                    <p className="text-xs text-sage-300/80">
                      "Looking to white-label your software for 14 commercial sub-contractors."
                    </p>
                    <div className="pt-2 flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                        High Value: Enterprise
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeConsoleTab === 'voice' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cognac-500 animate-ping" />
                    <span className="font-mono text-sm font-bold text-cream-100">
                      KODIAK VOICE DISPATCH // SPEED-TO-LEAD LOG
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sage-300/70">LATENCY: 420ms &bull; MODEL: KODIAK-V4</span>
                </div>

                <div className="bg-navy-900 rounded-xl p-6 border border-sage-300/10 font-mono space-y-4">
                  <div className="flex items-center justify-between text-xs text-sage-300 border-b border-sage-300/10 pb-2">
                    <span>CALL ID: #KD-98124</span>
                    <span className="text-emerald-400">OUTBOUND STATUS: CONNECTED (00:48s)</span>
                  </div>
                  <div className="text-xs space-y-2 leading-relaxed">
                    <p className="text-cognac-500">
                      [00:04] AI Agent: "Hey David, saw you just requested our Commercial Solar savings analysis. Did you want to review the incentives for Q4?"
                    </p>
                    <p className="text-cream-100">
                      [00:14] Prospect David: "Yeah, does this cover our two warehouse rooftops in Dallas?"
                    </p>
                    <p className="text-cognac-500">
                      [00:23] AI Agent: "Absolutely. I have our commercial specialist Brian open tomorrow at 11 AM or 3 PM CT. Which works best for your schedule?"
                    </p>
                    <p className="text-cream-100">
                      [00:32] Prospect David: "11 AM is perfect, book that."
                    </p>
                    <p className="text-emerald-400 font-bold">
                      [00:38] SYSTEM ACTION: Calendar booked & SMS confirmation dispatched automatically.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeConsoleTab === 'workflow' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-mono text-sm font-bold text-cream-100">
                      VISUAL WORKFLOW ENGINE // ACTIVE AUTOMATION PIPELINE
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sage-300/70">NODE COUNT: 6 &bull; SUCCESS RATE: 99.8%</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
                  <div className="bg-navy-900 p-4 rounded-xl border border-sage-300/20 w-full text-center">
                    <div className="text-cognac-500 font-bold mb-1">TRIGGER</div>
                    <div className="text-cream-100">Facebook Lead Ad Submitted</div>
                  </div>
                  <ArrowRight size={18} className="text-sage-300/60 hidden md:block shrink-0" />
                  <div className="bg-navy-900 p-4 rounded-xl border border-sage-300/20 w-full text-center">
                    <div className="text-emerald-400 font-bold mb-1">IMMEDIATE ACTION</div>
                    <div className="text-cream-100">Trigger Kodiak AI Voice Call</div>
                  </div>
                  <ArrowRight size={18} className="text-sage-300/60 hidden md:block shrink-0" />
                  <div className="bg-navy-900 p-4 rounded-xl border border-sage-300/20 w-full text-center">
                    <div className="text-cognac-500 font-bold mb-1">IF NO ANSWER</div>
                    <div className="text-cream-100">Send Personalized 2-Way SMS</div>
                  </div>
                  <ArrowRight size={18} className="text-sage-300/60 hidden md:block shrink-0" />
                  <div className="bg-navy-900 p-4 rounded-xl border border-sage-300/20 w-full text-center">
                    <div className="text-emerald-400 font-bold mb-1">UPDATE CRM</div>
                    <div className="text-cream-100">Move to "Engaged Prospect" Stage</div>
                  </div>
                </div>
              </div>
            )}

            {activeConsoleTab === 'saas' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cognac-500" />
                    <span className="font-mono text-sm font-bold text-cream-100">
                      AGENCY SAAS CONFIGURATOR // CUSTOM RESELLER MARGINS
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sage-300/70">DOMAIN: app.youragency.com</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/20 space-y-3">
                    <div className="text-sage-300">CUSTOM BRANDING</div>
                    <div className="text-base font-bold text-cream-100">Your Logo & Colors</div>
                    <p className="text-sage-300/70 text-[11px]">
                      Zero mention of Lead Kodiak anywhere. Completely white-labeled desktop portal and mobile app.
                    </p>
                  </div>

                  <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/20 space-y-3">
                    <div className="text-sage-300">AUTOMATED REBILLING</div>
                    <div className="text-base font-bold text-emerald-400">2x to 5x AI / SMS Markup</div>
                    <p className="text-sage-300/70 text-[11px]">
                      Rebill clients for SMS, phone minutes, and voice AI at wholesale cost + your chosen markup percentage.
                    </p>
                  </div>

                  <div className="bg-navy-900 p-5 rounded-xl border border-sage-300/20 space-y-3">
                    <div className="text-sage-300">SUB-ACCOUNT SNAPSHOTS</div>
                    <div className="text-base font-bold text-cognac-500">1-Click Client Provisioning</div>
                    <p className="text-sage-300/70 text-[11px]">
                      Deploy pre-built funnels, workflows, and pipelines instantly as soon as a client signs up.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-14 border border-sage-300/20 shadow-glass-dark text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cognac-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-navy-900 border border-cognac-500/30 text-cognac-500 mb-2">
                <KodiakBearIcon size={36} inverted={true} />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cream-100 tracking-tight leading-tight">
                Ready To Scale Your Agency With Predatory Efficiency?
              </h2>

              <p className="text-sage-300 text-base sm:text-lg leading-relaxed">
                Join thousands of operators consolidating their tools, supercharging their speed-to-lead,
                and building recurring SaaS revenue with Lead Kodiak.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/plans-discounts"
                  className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
                >
                  <Sparkles size={18} />
                  <span>Choose Your Plan & Scale</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/our-work"
                  className="w-full sm:w-auto px-8 py-4 bg-navy-900 border border-sage-300/30 text-cream-100 font-bold text-base rounded-xl hover:bg-navy-800 transition-all flex items-center justify-center gap-2"
                >
                  <span>Read Agency Case Studies</span>
                </Link>
              </div>

              <p className="text-xs text-sage-300/60 font-mono">
                No credit card lock-in &bull; Cancel anytime &bull; Concierge migration support
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
