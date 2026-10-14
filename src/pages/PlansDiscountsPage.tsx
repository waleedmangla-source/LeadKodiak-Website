import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Check,
  Sparkles,
  Shield,
  Zap,
  Gift,
  Percent,
} from 'lucide-react';

export const PlansDiscountsPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [clientCount, setClientCount] = useState<number>(15);

  // Dynamic pricing values
  const starterPrice = isAnnual ? 78 : 97;
  const proPrice = isAnnual ? 237 : 297;
  const apexPrice = isAnnual ? 397 : 497;

  // Reseller revenue calculator estimates
  const estimatedClientRetainer = 297; // avg agency software markup fee per client
  const projectedGrossMrr = clientCount * estimatedClientRetainer;
  const monthlyCost = proPrice;
  const netAgencyProfit = projectedGrossMrr - monthlyCost;

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          {/* Status Pill per DESIGN.md */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">TRANSPARENT APEX TIERS // ZERO CONTACT CAPS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Unlimited Scale.{' '}
            <span className="text-cognac-500">Zero Arbitrary Per-Seat Taxes.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Every plan includes unlimited contacts, unlimited users, and unlimited pipelines.
            Choose the tier tailored to your current agency size and scale on your terms.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-2xl glass-card border border-sage-300 shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                !isAnnual
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'text-navy-800 hover:text-navy-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-navy-900 text-cream-100 shadow-md'
                  : 'text-navy-800 hover:text-navy-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-cognac-500 text-white font-mono text-[10px] tracking-wider font-extrabold uppercase animate-pulse">
                Save 20% + 2 Months Free
              </span>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. THE 3 PRICING TIERS (Including Featured Pricing Card per DESIGN.md) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {/* TIER 1: Starter */}
            <div className="glass-card rounded-2xl p-8 border border-sage-300 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                    FOR SOLOPRENEURS & LOCAL BUSINESSES
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900">Starter Plan</h2>
                  <p className="text-xs text-navy-800/70 mt-1">
                    Up to 3 sub-accounts. Perfect for a single company and testing clients.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-900">${starterPrice}</span>
                  <span className="text-sm font-sans text-navy-800/70">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs font-mono text-emerald-700 font-semibold">
                    Billed annually ($936/yr) &bull; Save $228/yr
                  </p>
                )}

                <div className="pt-4 border-t border-sage-300/60 space-y-3 text-xs sm:text-sm text-navy-900">
                  <div className="font-bold text-xs uppercase font-mono text-navy-800">INCLUDES:</div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>3 Sub-Accounts</strong> (1 Main + 2 Clients)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>Unlimited Contacts</strong> & Team Members</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Drag-and-Drop Landing Pages & Funnels</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Unified Email, SMS & Social Inbox</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Automated Appointment Booking Calendars</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Visual Workflow Automation Builder</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-300/40">
                <button
                  type="button"
                  className="w-full py-3.5 glass-card border border-sage-300 hover:bg-sage-300/40 text-navy-800 font-bold text-sm rounded-xl transition-all"
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            </div>

            {/* TIER 2: Featured Kodiak Pro (FEATURED PRICING CARD per DESIGN.md) */}
            {/* Spec: Solid #0A2947 background, 2px border in #8B5E3C, elevated by -8px on desktop */}
            <div className="bg-[#0A2947] text-cream-100 rounded-2xl p-8 border-2 border-[#8B5E3C] flex flex-col justify-between shadow-2xl relative lg:-translate-y-2 z-10 transition-all">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cognac-500 text-white font-mono text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <KodiakBearIcon size={14} inverted={true} />
                <span>MOST POPULAR &bull; APEX CHOICE</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                    FOR SCALING AGENCIES & GROWING BRANDS
                  </div>
                  <h2 className="text-2xl font-bold text-cream-100">Kodiak Pro Plan</h2>
                  <p className="text-xs text-sage-300 mt-1">
                    Unlimited sub-accounts. White-label desktop portal with full API access.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-4xl sm:text-5xl font-extrabold text-cream-100">${proPrice}</span>
                  <span className="text-sm font-sans text-sage-300">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs font-mono text-emerald-400 font-semibold">
                    Billed annually ($2,844/yr) &bull; Save $720/yr
                  </p>
                )}

                <div className="pt-4 border-t border-sage-300/20 space-y-3 text-xs sm:text-sm text-cream-100">
                  <div className="font-bold text-xs uppercase font-mono text-cognac-500">
                    EVERYTHING IN STARTER PLUS:
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>UNLIMITED Sub-Accounts</strong> for All Clients</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>White-Label Desktop App</strong> (Your Logo & Domain)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Comprehensive REST API & Webhook Webhooks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Rebill Clients For Phone & SMS At Cost</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Kodiak Voice AI Autonomous Calling Engine</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Turnkey Industry Snapshots Deployment</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-300/20">
                {/* Primary CTA per DESIGN.md: Background #8B5E3C, hover #734C2E, text white, rounded-xl, active:scale-95 */}
                <button
                  type="button"
                  className="w-full py-4 bg-[#8B5E3C] hover:bg-[#734C2E] text-white font-extrabold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  <span>Start 14-Day Free Trial</span>
                </button>
              </div>
            </div>

            {/* TIER 3: Agency SaaS Apex */}
            <div className="glass-card rounded-2xl p-8 border border-sage-300 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-1">
                    FOR HIGH-VELOCITY SAAS OPERATORS
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900">Agency SaaS Apex</h2>
                  <p className="text-xs text-navy-800/70 mt-1">
                    Automatic sub-account provisioning with customized software markup rebilling.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-4xl sm:text-5xl font-extrabold text-navy-900">${apexPrice}</span>
                  <span className="text-sm font-sans text-navy-800/70">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs font-mono text-emerald-700 font-semibold">
                    Billed annually ($4,764/yr) &bull; Save $1,200/yr
                  </p>
                )}

                <div className="pt-4 border-t border-sage-300/60 space-y-3 text-xs sm:text-sm text-navy-900">
                  <div className="font-bold text-xs uppercase font-mono text-navy-800">
                    EVERYTHING IN PRO PLUS:
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>Full SaaS Mode:</strong> Automatic Client Provisioning</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span><strong>2x to 5x Rebill Markup:</strong> Keep 100% of profit margin</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Advanced Custom API & Event Streams</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Dedicated Engineering Account Manager</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check size={16} className="text-cognac-500 shrink-0" />
                    <span>Priority 15-Minute SLA Support Hotline</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-300/40">
                <button
                  type="button"
                  className="w-full py-3.5 glass-card border border-sage-300 hover:bg-sage-300/40 text-navy-800 font-bold text-sm rounded-xl transition-all"
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTERACTIVE RESELLER PROFIT CALCULATOR (Interactive Sliders per DESIGN.md: accent-color: #8B5E3C) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-2xl p-6 sm:p-10 border border-sage-300/20 shadow-glass-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 border border-sage-300/10 text-xs font-mono text-cognac-500">
                  <Percent size={14} />
                  <span>AGENCY SAAS MARGIN CALCULATOR</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-cream-100">
                  Calculate Your White-Label Software Revenue
                </h2>

                <p className="text-sage-300 text-sm leading-relaxed">
                  With Kodiak Pro ($297/mo), you can provision unlimited sub-accounts. If you charge your clients
                  a modest $297/mo for your branded software portal, how much recurring revenue will you generate?
                </p>

                {/* Interactive range slider with accent-color #8B5E3C */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-sm font-mono text-cream-100">
                    <span>Active Sub-Accounts Provisioned:</span>
                    <span className="text-cognac-500 font-extrabold text-xl">{clientCount} Clients</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={clientCount}
                    onChange={(e) => setClientCount(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-navy-900 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-sage-300/60">
                    <span>1 client</span>
                    <span>50 clients</span>
                    <span>100 clients</span>
                  </div>
                </div>
              </div>

              {/* Profit Output Panel */}
              <div className="lg:col-span-5 bg-navy-900 rounded-2xl p-6 border border-sage-300/20 space-y-4 font-mono text-xs">
                <div className="flex justify-between text-sage-300 border-b border-sage-300/10 pb-2">
                  <span>Gross Client Retainers</span>
                  <span className="font-bold text-cream-100 text-sm">${projectedGrossMrr.toLocaleString()} /mo</span>
                </div>
                <div className="flex justify-between text-sage-300 border-b border-sage-300/10 pb-2">
                  <span>Lead Kodiak Unlimited Cost</span>
                  <span className="font-bold text-cream-100 text-sm">-${monthlyCost} /mo</span>
                </div>
                <div className="bg-navy-800/80 p-4 rounded-xl border border-cognac-500/30 space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-cognac-500 font-bold">
                    ESTIMATED NET AGENCY PROFIT
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-400">
                    ${netAgencyProfit.toLocaleString()}{' '}
                    <span className="text-xs font-sans text-sage-300">/ month</span>
                  </div>
                  <div className="text-[11px] text-sage-300">
                    or <strong>${(netAgencyProfit * 12).toLocaleString()}</strong> in annual pure recurring margin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. EXCLUSIVE DISCOUNTS & PARTNER PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              CURRENT DISCOUNTS & SWITCHING BONUSES
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Exclusive Partner Incentives
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              We make graduating to Lead Kodiak risk-free with guaranteed credits and onboarding perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-sage-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <Gift size={20} className="text-cognac-500" />
              </div>
              <h4 className="font-bold text-navy-900 text-lg">$500 Concierge Migration Credit</h4>
              <p className="text-xs text-navy-800/80 leading-relaxed">
                Switching from GoHighLevel, HubSpot, or ActiveCampaign? We credit your account $500 towards
                white-glove database migration, funnel transfer, and workflow validation.
              </p>
              <div className="text-[11px] font-mono text-cognac-500 font-bold">
                PROMO CODE: SWITCH-KODIAK
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-sage-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <Zap size={20} className="text-cognac-500" />
              </div>
              <h4 className="font-bold text-navy-900 text-lg">2 Months Free on Annual Pre-Pay</h4>
              <p className="text-xs text-navy-800/80 leading-relaxed">
                Save 20% on any tier when paying annually. Includes immediate unlock of all premium industry
                snapshots and priority deployment queue.
              </p>
              <div className="text-[11px] font-mono text-cognac-500 font-bold">
                AUTOMATIC 20% SAVINGS APPLIED
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-sage-300 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center">
                <Shield size={20} className="text-cognac-500" />
              </div>
              <h4 className="font-bold text-navy-900 text-lg">14-Day Zero-Risk Guarantee</h4>
              <p className="text-xs text-navy-800/80 leading-relaxed">
                Test the platform with your real team and clients. If it doesn’t exceed your expectations,
                cancel with one click in your settings panel. No cancellation fees.
              </p>
              <div className="text-[11px] font-mono text-cognac-500 font-bold">
                100% UNRESTRICTED ACCESS
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. FULL FEATURE COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              FEATURE BY FEATURE MATRIX
            </h2>
            <h3 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Compare Platform Capabilities
            </h3>
          </div>

          <div className="glass-card rounded-2xl border border-sage-300 overflow-hidden shadow-glass">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-900 text-cream-100 border-b border-sage-300/20">
                    <th className="py-4 px-6 font-bold font-mono">Core Capability</th>
                    <th className="py-4 px-6 font-bold font-mono text-center">Starter ($97/mo)</th>
                    <th className="py-4 px-6 font-bold font-mono text-center text-cognac-500 bg-navy-800/80">
                      Kodiak Pro ($297/mo)
                    </th>
                    <th className="py-4 px-6 font-bold font-mono text-center">SaaS Apex ($497/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-300/40 text-navy-900 font-medium">
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Sub-Accounts Allowed</td>
                    <td className="py-3.5 px-6 text-center font-mono">3</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold bg-sage-300/20 text-cognac-600">
                      UNLIMITED
                    </td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold">UNLIMITED</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Contact Storage & Users</td>
                    <td className="py-3.5 px-6 text-center text-emerald-700 font-bold">Unlimited</td>
                    <td className="py-3.5 px-6 text-center text-emerald-700 font-bold bg-sage-300/20">
                      Unlimited
                    </td>
                    <td className="py-3.5 px-6 text-center text-emerald-700 font-bold">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Visual Funnels & Website Builder</td>
                    <td className="py-3.5 px-6 text-center">Included</td>
                    <td className="py-3.5 px-6 text-center bg-sage-300/20">Included</td>
                    <td className="py-3.5 px-6 text-center">Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Omnichannel Unified Inbox</td>
                    <td className="py-3.5 px-6 text-center">Included</td>
                    <td className="py-3.5 px-6 text-center bg-sage-300/20">Included</td>
                    <td className="py-3.5 px-6 text-center">Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">White-Label Desktop App Branding</td>
                    <td className="py-3.5 px-6 text-center text-navy-800/40">&mdash;</td>
                    <td className="py-3.5 px-6 text-center font-bold text-emerald-700 bg-sage-300/20">
                      Yes (Full Custom Domain)
                    </td>
                    <td className="py-3.5 px-6 text-center font-bold text-emerald-700">
                      Yes (Full Custom Domain)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Full REST API & Custom Webhooks</td>
                    <td className="py-3.5 px-6 text-center text-navy-800/40">&mdash;</td>
                    <td className="py-3.5 px-6 text-center font-bold text-emerald-700 bg-sage-300/20">
                      Full Access
                    </td>
                    <td className="py-3.5 px-6 text-center font-bold text-emerald-700">Advanced Dedicated</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Automatic SaaS Client Provisioning</td>
                    <td className="py-3.5 px-6 text-center text-navy-800/40">&mdash;</td>
                    <td className="py-3.5 px-6 text-center text-navy-800/40 bg-sage-300/20">&mdash;</td>
                    <td className="py-3.5 px-6 text-center font-bold text-cognac-600 font-mono">
                      Full SaaS Mode
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold">Custom Usage Markup Rebilling</td>
                    <td className="py-3.5 px-6 text-center text-navy-800/40">&mdash;</td>
                    <td className="py-3.5 px-6 text-center font-mono bg-sage-300/20">At Cost</td>
                    <td className="py-3.5 px-6 text-center font-mono font-bold text-emerald-700">
                      Custom Markup (2x-5x)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
