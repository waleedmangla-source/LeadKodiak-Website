import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import { BookingCalendar } from '../components/BookingCalendar';
import {
  PhoneCall,
  Clock,
  MapPin,
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-20 md:space-y-28">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              INSTANT STRATEGY CALL BOOKING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Schedule Your Free{' '}
            <span className="text-cognac-500">Consultation</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Pick a date and time that works best for your schedule. Our strategy specialists will evaluate your service area, analyze local competition, and map out your automated lead pipeline.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THEME-ADAPTIVE CALENDAR BOOKING TOOL */}
      <section id="book" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={150}>
          <BookingCalendar />
        </ScrollReveal>
      </section>

      {/* 3. CONTACT DETAILS & DIRECT TELEMETRY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Prefer Direct Contact?
          </h2>
          <p className="text-xs sm:text-sm text-navy-800/80 mt-1">
            Reach our leadership team directly via phone or 24/7 client dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <ScrollReveal direction="up" delay={100}>
            <a
              href="tel:18005550199"
              className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all group block h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-cognac-500/10 text-cognac-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall size={26} />
              </div>
              <div className="text-xs font-mono font-bold text-cognac-600 uppercase tracking-widest mb-1">
                Direct Line
              </div>
              <div className="text-xl font-extrabold text-navy-900 group-hover:text-cognac-600 transition-colors">
                (800) 555-LEAD
              </div>
              <div className="text-xs text-navy-800/70 mt-1 font-mono">
                Click to call directly
              </div>
            </a>
          </ScrollReveal>

          {/* Card 2: Time Available */}
          <ScrollReveal direction="up" delay={200}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass text-center flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-navy-900/10 text-navy-900 flex items-center justify-center mb-4">
                <Clock size={26} />
              </div>
              <div className="text-xs font-mono font-bold text-cognac-600 uppercase tracking-widest mb-1">
                Hours & Support
              </div>
              <div className="text-xl font-extrabold text-navy-900">
                Available 24/7
              </div>
              <div className="text-xs text-navy-800/70 mt-1 font-mono">
                Round-the-clock client support
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Locations */}
          <ScrollReveal direction="up" delay={300}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass text-center flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <MapPin size={26} />
              </div>
              <div className="text-xs font-mono font-bold text-cognac-600 uppercase tracking-widest mb-1">
                Coverage
              </div>
              <div className="text-xl font-extrabold text-navy-900 flex items-center justify-center gap-1.5">
                <span>Operating in all 50 states</span>
                <span>🇺🇸</span>
              </div>
              <div className="text-xs text-navy-800/70 mt-1 font-mono">
                United States Nationwide
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
