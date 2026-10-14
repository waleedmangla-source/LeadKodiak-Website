import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  ArrowRight,
  Quote,
  CheckCircle2,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  category: 'agency' | 'health' | 'homeservices' | 'b2b';
  title: string;
  client: string;
  badge: string;
  highlightMetric: string;
  metricLabel: string;
  summary: string;
  before: string;
  after: string;
  quote: string;
  author: string;
  role: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'apex',
    category: 'agency',
    client: 'Apex Scale Media',
    title: 'From $24k/mo Service Agency To $180k/mo White-Label Software Powerhouse',
    badge: 'Marketing Agency',
    highlightMetric: '+$156k MRR',
    metricLabel: 'Net Recurring Software Revenue',
    summary:
      'Apex Scale Media was stuck trading hours for dollars managing local dentist campaigns. By white-labeling Lead Kodiak as "DentalFlow OS", they packaged missed-call text-back and automated review generation into an irresistible $497/mo SaaS offer.',
    before: 'Managing 6 fragile software logins per client, enduring 3-month average client churn.',
    after: 'Deployed 48 white-labeled sub-accounts with 98% client retention and zero manual Zapier maintenance.',
    quote:
      'Lead Kodiak allowed us to pivot from a stressed service agency to an autonomous software partner. Our clients love having their own branded app, and our churn plummeted to under 2%.',
    author: 'Marcus Vance',
    role: 'Founder & CEO, Apex Scale Media',
  },
  {
    id: 'vanguard',
    category: 'b2b',
    client: 'Vanguard Growth Labs',
    title: 'Cutting Cost-Per-Acquisition by 46% with Sub-20s Kodiak Voice AI',
    badge: 'B2B Enterprise',
    highlightMetric: '18.2s',
    metricLabel: 'Average Autonomous Speed-To-Lead',
    summary:
      'Vanguard handles high-volume inbound commercial solar leads. Their sales reps previously took 4 hours to follow up with leads, causing an 80% drop-off. Kodiak Voice AI immediately calls inbound leads, pre-qualifies their property specs, and locks them into calendars.',
    before: '4.2-hour average response time, 11% lead-to-appointment conversion rate.',
    after: '18-second autonomous voice outreach, 39.4% booking conversion rate, 46% reduced CPA.',
    quote:
      'Speed to lead is everything in B2B. Kodiak Voice sounds astonishingly human, answers technical questions, and books qualified meetings on our calendars before competitors even read the email notification.',
    author: 'Elena Rostova',
    role: 'Head of Growth, Vanguard Solar',
  },
  {
    id: 'titan',
    category: 'homeservices',
    client: 'Titan HVAC & Plumbing',
    title: '18,400+ Emergency Jobs Booked Across 12 Metro Territories',
    badge: 'Home Services',
    highlightMetric: '$2.4M',
    metricLabel: 'Additional Revenue Captured',
    summary:
      'When homeowners have a burst pipe or broken AC unit, they call until someone answers. Titan was missing 35% of inbound calls during peak hours and weekends. Lead Kodiak’s Missed-Call Text-Back and 2-way AI SMS triage immediately engaged callers and secured appointments.',
    before: 'Hundreds of weekly missed calls bouncing directly to competitors down the street.',
    after: '100% of missed calls responded to within 4 seconds via conversational SMS, securing immediate bookings.',
    quote:
      'The missed-call text-back feature alone paid for our Lead Kodiak subscription for the next 10 years in our first weekend.',
    author: 'Derek Miller',
    role: 'Operations Director, Titan Home Services',
  },
  {
    id: 'optima',
    category: 'health',
    client: 'Optima Aesthetics & Medspa',
    title: 'Reactivating $184,000 In Stale Patient Bookings Without Ad Spend',
    badge: 'Medical & Aesthetics',
    highlightMetric: '3,200',
    metricLabel: 'Dormant Contacts Successfully Reactivated',
    summary:
      'Optima had thousands of past patient inquiries sitting idle in spreadsheets. Using Kodiak’s smart segmentation and automated 2-way conversational SMS campaigns, they deployed a personalized VIP offer that generated 142 booked treatments in under 72 hours.',
    before: 'Dead contact database collecting dust; reliant solely on expensive Meta ads for new foot traffic.',
    after: 'Systematic database reactivation campaigns yielding predictable 5-figure appointment spikes every quarter.',
    quote:
      'We literally woke up to 80+ appointment confirmations in our calendar. Kodiak turns our existing patient database into an instant revenue faucet.',
    author: 'Dr. Chloe Aris',
    role: 'Clinical Director, Optima Aesthetics',
  },
];

export const OurWorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agency' | 'b2b' | 'homeservices' | 'health'>('all');

  const filteredStudies =
    activeFilter === 'all'
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.category === activeFilter);

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">VERIFIED CASE STUDIES & METRICS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Real Proof. Real Scale.{' '}
            <span className="text-cognac-500">Predatory Results.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            See how top-performing marketing agencies, home service giants, and enterprise operators
            leverage Lead Kodiak to replace fragile tools and build dominant revenue engines.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. CASE STUDY FILTER & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'all', label: 'All Industries' },
              { id: 'agency', label: 'Marketing Agencies' },
              { id: 'b2b', label: 'B2B & Enterprise' },
              { id: 'homeservices', label: 'Home Services' },
              { id: 'health', label: 'Healthcare & Medspa' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-navy-900 text-cream-100 shadow-md font-bold'
                    : 'glass-card text-navy-800 hover:bg-sage-300/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Case Studies Display */}
          <div className="space-y-10">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="glass-card rounded-2xl p-6 sm:p-10 border border-sage-300 shadow-glass hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Story details */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-navy-800 text-cream-100 font-mono text-xs font-bold">
                        {study.badge}
                      </span>
                      <span className="text-xs font-mono text-navy-800/70 font-bold">
                        CLIENT: {study.client}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
                      {study.title}
                    </h2>

                    <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Before vs After pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                      <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20 text-navy-900">
                        <span className="text-red-700 font-bold block mb-1">BEFORE KODIAK:</span>
                        <span>{study.before}</span>
                      </div>
                      <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 text-navy-900">
                        <span className="text-emerald-700 font-bold block mb-1">AFTER KODIAK:</span>
                        <span>{study.after}</span>
                      </div>
                    </div>

                    {/* Quote block */}
                    <div className="bg-cream-100/60 p-4 rounded-xl border border-sage-300/70 relative">
                      <Quote size={20} className="text-cognac-500 mb-2 opacity-60" />
                      <p className="text-xs italic text-navy-900/90 leading-relaxed mb-3">
                        "{study.quote}"
                      </p>
                      <div className="text-xs font-bold text-navy-900">
                        {study.author}{' '}
                        <span className="font-normal text-navy-800/60">&bull; {study.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Metric Trophy Box */}
                  <div className="lg:col-span-4 bg-navy-900 text-cream-100 rounded-2xl p-6 sm:p-8 border border-sage-300/20 shadow-xl flex flex-col justify-between text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <KodiakBearIcon size={100} inverted={true} />
                    </div>

                    <div className="relative z-10 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold">
                        VERIFIED BENCHMARK
                      </div>
                      <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400">
                        {study.highlightMetric}
                      </div>
                      <div className="text-xs font-mono text-sage-300">{study.metricLabel}</div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-sage-300/15">
                      <Link
                        to="/plans-discounts"
                        className="w-full py-3 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Achieve These Results</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. BEFORE VS AFTER COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-3">
              HEAD-TO-HEAD COMPARISON
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              The Fragile Legacy Stack vs. Lead Kodiak
            </h3>
            <p className="mt-3 text-navy-800/70 text-base">
              See what happens when you swap 7 fragmented tools for one predatory system.
            </p>
          </div>

          <div className="glass-card-dark rounded-2xl border border-sage-300/20 overflow-hidden shadow-glass-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-sage-300/15">
              {/* Legacy Stack */}
              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="text-base font-bold text-red-400 font-mono">
                    THE FRAGMENTED LEGACY STACK
                  </div>
                  <span className="text-xs font-mono text-sage-300/60">OLD WAY</span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-sage-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>$1,200 – $1,800/mo in tool costs</strong> split across ClickFunnels, ActiveCampaign, Calendly, and Zapier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>Fragile Zapier glue</strong> breaks silently, causing leads to disappear into the void without notification.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>2 to 4-hour lead response delay</strong> while sales reps manually read incoming notification emails.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>Zero white-label reselling margin.</strong> You pay SaaS fees while looking like every other ordinary agency.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Lead Kodiak Engine */}
              <div className="p-6 sm:p-10 space-y-6 bg-navy-900/60">
                <div className="flex items-center justify-between border-b border-sage-300/15 pb-4">
                  <div className="flex items-center gap-2 text-base font-bold text-cream-100 font-mono">
                    <KodiakBearIcon size={18} inverted={true} />
                    <span>LEAD KODIAK REVENUE OS</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">THE APEX WAY</span>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-cream-100">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Flat, predictable $297/mo</strong> for unlimited team seats, unlimited contacts, and unlimited sub-accounts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Native database execution.</strong> Workflows, funnels, calendars, and CRM share one synchronized source of truth.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Sub-20s autonomous AI voice dispatch</strong> that answers questions and books prospects directly into calendars.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>100% white-label agency branding.</strong> Rebill clients with custom software markups and retain 80%+ gross margins.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BOTTOM ACTION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-2xl p-8 sm:p-12 border border-sage-300/20 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream-100">
              Ready To Put These Metrics Into Your Agency?
            </h2>
            <p className="text-sage-300 text-sm sm:text-base max-w-2xl mx-auto">
              Start your 14-day free trial now or explore our transparent plan tiers with zero contact caps.
            </p>
            <div className="pt-2">
              <Link
                to="/plans-discounts"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>View Plans & Pricing Options</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
