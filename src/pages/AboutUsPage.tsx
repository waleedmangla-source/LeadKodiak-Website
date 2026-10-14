import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Snowflake,
  Flame,
  CheckCircle2,
  Calendar,
  PhoneCall,
} from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              WHO WE ARE & WHY WE BUILT LEAD KODIAK
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Who Are We?{' '}
            <span className="text-cognac-500">We’ve Walked in Your Boots.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            We didn't learn home services from a textbook. We built Lead Kodiak because
            we’ve lived the grind, knocked on the doors, and engineered the solution we wished we had.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE FOUNDER NARRATIVE CARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-sage-300 shadow-glass space-y-8 text-navy-900">
            <div className="flex items-center gap-3 border-b border-sage-300/60 pb-4">
              <KodiakBearIcon size={28} />
              <div className="font-mono text-xs font-bold text-cognac-600 tracking-widest uppercase">
                OUR STORY & MISSION
              </div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-navy-800/90 leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                We didn't learn home services from a textbook. We built Lead Kodiak because we’ve been in your boots.
              </p>

              <p>
                We know what it’s like to knock on doors in freezing sub-zero winters, sweat through blistering summer afternoons, and deal with the stress of unpredictable revenue.
              </p>

              <p>
                Having spent <strong>over 10 years in the home service industry</strong>, we engineered our automated marketing systems to give you back your time and comfort, so you can scale your business without the grueling physical grind.
              </p>

              <div className="p-6 rounded-2xl bg-navy-900 text-cream-100 border border-sage-300/20 shadow-md">
                <p className="text-lg sm:text-xl font-bold italic text-cream-100">
                  "With Lead Kodiak, growing your business isn’t just our goal; it’s our priority."
                </p>
              </div>
            </div>

            {/* Key Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-sage-300/60">
              <div className="text-center p-3 rounded-xl bg-sage-300/40">
                <div className="text-2xl sm:text-3xl font-black font-mono text-navy-900">10+</div>
                <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-1">Years in Industry</div>
              </div>

              <div className="text-center p-3 rounded-xl bg-sage-300/40">
                <div className="text-2xl sm:text-3xl font-black font-mono text-cognac-600">0</div>
                <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-1">Cold Door Knocks</div>
              </div>

              <div className="text-center p-3 rounded-xl bg-sage-300/40">
                <div className="text-2xl sm:text-3xl font-black font-mono text-navy-900">&lt; 30s</div>
                <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-1">Speed-to-Lead</div>
              </div>

              <div className="text-center p-3 rounded-xl bg-sage-300/40">
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">5.0 ★</div>
                <div className="text-[11px] font-mono text-navy-800/80 font-bold uppercase mt-1">Google Rating</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. THE CONTRAST: OLD PHYSICAL GRIND VS. THE KODIAK SYSTEM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Why We Engineered The Kodiak Pipeline
            </h2>
            <p className="text-navy-800/80 text-sm sm:text-base mt-2">
              Transforming how home service operators generate work and live their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Grind */}
            <div className="p-8 rounded-3xl bg-red-500/10 border-2 border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-red-900 font-extrabold text-lg">
                <div className="flex items-center gap-1">
                  <Snowflake size={20} className="text-sky-600" />
                  <Flame size={20} className="text-red-600" />
                </div>
                <span>The Exhausting Physical Grind</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-red-950/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Freezing winter mornings and sweltering summer afternoons knocking on cold doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Unpredictable income swings causing constant stress about next month's payroll</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Marketing agencies running random experiments using your hard-earned ad spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Lost leads because you were on a ladder or measuring windows when the phone rang</span>
                </li>
              </ul>
            </div>

            {/* The Kodiak System */}
            <div className="p-8 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-2 text-emerald-950 font-extrabold text-lg">
                <CheckCircle2 size={22} className="text-emerald-600" />
                <span>The Automated Kodiak Pipeline</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950/80">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Steady, predictable inbound consultations booked directly onto your calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>All customer communications (SMS, FB, IG, Web forms) in one centralized mobile app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Zero guesswork: campaigns tested and proven in real-world blinds operations first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reclaim your physical comfort, time with family, and financial peace of mind</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-12 border border-sage-300/20 text-cream-100 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Ready To Put An End To The Door-Knocking Grind?
            </h2>
            <p className="text-sage-300 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a free consultation. Let us show you how we automated our own pipelines and how we can do the exact same for you.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm sm:text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center gap-2"
              >
                <Calendar size={18} />
                <span>Book Free Consultation</span>
              </Link>
              <a
                href="tel:18005550199"
                className="px-8 py-4 glass-card text-navy-900 font-bold text-sm sm:text-base rounded-xl hover:bg-cream-100 transition-all flex items-center gap-2"
              >
                <PhoneCall size={18} className="text-cognac-500" />
                <span>Call (800) 555-LEAD</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
