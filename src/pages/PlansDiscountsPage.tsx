import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Check,
  Calendar,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const PlansDiscountsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              PLANS & DISCOUNTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            One Flexible Plan.{' '}
            <span className="text-cognac-500">Tailored For Your Needs.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            With Lead Kodiak, we do not have bronze, silver, or gold packages. It is all one plan
            consisting of the complete services mentioned on our services page. A flexible month-to-month
            agreement tailored specifically for your company’s needs.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE ONE UNIFIED PLAN CARD (Featured Elevation per DESIGN.md) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="rounded-3xl p-8 sm:p-14 bg-navy-900 text-cream-100 border-2 border-cognac-500 shadow-2xl relative overflow-hidden -translate-y-2">
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cognac-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Card Header & Status */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-700 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cognac-500/20 text-cognac-400 font-mono text-xs font-bold uppercase mb-2 border border-cognac-500/30">
                    <Sparkles size={14} /> All-Inclusive Growth Partnership
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-cream-100 tracking-tight">
                    The Complete Kodiak Plan
                  </h2>
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cognac-400">
                    Month-To-Month
                  </div>
                  <div className="text-xs font-mono text-sage-300">
                    Tailored To Your Market & Scale
                  </div>
                </div>
              </div>

              {/* Explanatory Description */}
              <p className="text-sage-300 text-base sm:text-lg leading-relaxed">
                Rather than nickel-and-diming you with arbitrary feature restrictions or bronze/silver tiers, our partnership provides our complete software and marketing infrastructure to power your pipeline.
              </p>

              {/* Comprehensive Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Strategically Designed Website</strong> (custom, responsive, local SEO optimized)
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Lead System + Mobile App</strong> (unified inbox for iOS & Android)
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Sub-30-Second Speed-to-Lead</strong> automated SMS & email engagement
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Meta Ads Setup & Management</strong> (targeted Facebook & Instagram campaigns)
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Continuous A/B Testing</strong> (only deploying strategies tested on real blinds operations)
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Missed-Call Text-Back</strong> and 24/7 calendar appointment booking
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Zero Hidden Fees</strong> & 100% upfront pricing transparency
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cognac-500/20 text-cognac-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-cream-100/90 font-medium">
                      <strong>Dedicated Support Team</strong> standing by 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-xs font-mono text-sage-300">
                  <span className="text-emerald-400 font-bold">✓</span> Flexible month-to-month agreement • Cancel anytime
                </div>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
                >
                  <Calendar size={18} />
                  <span>Book Consultation To Tailor Your Plan</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. HONORING THOSE WHO SERVE (EAGLE & AMERICAN FLAG) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-sage-300 shadow-glass relative overflow-hidden text-center sm:text-left">
            {/* American Flag & Patriotic Accents */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Badge Emblems: Eagle & Flag */}
              <div className="w-20 h-20 rounded-2xl bg-navy-900 border-2 border-sage-300 flex flex-col items-center justify-center text-3xl shadow-md shrink-0">
                <span role="img" aria-label="American Flag and Eagle">
                  🇺🇸 🦅
                </span>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-700 font-mono text-xs font-bold uppercase">
                  MILITARY & VETERAN APPRECIATION
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                  <span>Honoring Those Who Serve</span>
                  <span>🇺🇸 🦅</span>
                </h3>

                <p className="text-navy-800/85 text-base sm:text-lg leading-relaxed">
                  Lead Kodiak proudly offers special discounted rates to active-duty service members and military veterans. Talk to our team during your discovery call to apply your discount. 🙂
                </p>

                <div className="p-4 rounded-xl bg-sage-300/40 border border-sage-300 text-xs font-mono text-navy-800">
                  <span className="font-bold text-cognac-600">Note:</span> Proof of service is required to redeem the discount. Thank you for your service and sacrifice for our country!
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-cognac-600 hover:text-cognac-700 font-mono transition-colors"
                  >
                    <span>Mention your military or veteran status when scheduling</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up">
          <div className="p-8 rounded-2xl glass-card border border-sage-300 space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
              Questions About What We Include?
            </h3>
            <p className="text-navy-800/80 text-sm max-w-xl mx-auto">
              We customize our exact campaign setup to match your company size and territory. Schedule a call or phone our line anytime.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-navy-900 text-cream-100 hover:bg-navy-800 font-bold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book Free Discovery Call</span>
              </Link>
              <a
                href="tel:18005550199"
                className="px-6 py-3 rounded-xl bg-sage-300 hover:bg-sage-400/80 text-navy-900 font-bold text-sm transition-all flex items-center gap-2"
              >
                <PhoneCall size={16} className="text-cognac-600" />
                <span>Call (800) 555-LEAD</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
