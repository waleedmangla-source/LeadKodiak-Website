import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  PhoneCall,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: 'Window Coverings (Blinds & Shades)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              REACH OUR TEAM 24/7
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            We Would Love To{' '}
            <span className="text-cognac-500">Hear From You!</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Whether you have questions, want to schedule a free consultation, or need help scaling your pipeline—your satisfaction is our priority. We’re here to help!
          </p>
        </ScrollReveal>
      </section>

      {/* 2. CONTACT DETAILS & DIRECT TELEMETRY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {/* 3. INTERACTIVE CONSULTATION FORM */}
        <ScrollReveal direction="up" delay={400}>
          <div className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-sage-300 shadow-glass max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Thank You! We Received Your Request.
                </h3>
                <p className="text-navy-800/80 text-base max-w-lg mx-auto leading-relaxed">
                  Our team is reviewing your company details and will reach out promptly to confirm your free strategy consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold text-sm hover:bg-navy-800 transition-all"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-navy-900">
                <div className="border-b border-sage-300/60 pb-4 mb-6">
                  <h3 className="text-2xl font-extrabold text-navy-900">
                    Schedule Your Free Consultation
                  </h3>
                  <p className="text-navy-800/80 text-sm mt-1">
                    Fill out the form below and we’ll reach out to evaluate your market and discuss your tailored month-to-month plan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                      Company / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Miller Custom Blinds"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                    Industry / Vertical
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm"
                  >
                    <option value="Window Coverings (Blinds & Shades)">
                      Window Coverings (Blinds, Shades, Shutters)
                    </option>
                    <option value="Other Home Services / Contracting">
                      Other Home Services / Contracting Trades
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-2">
                    How Can We Help You? (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your target service area, current lead volume, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sage-300 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-navy-900 text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    <span>Book Your Free Consultation Now</span>
                  </button>
                </div>

                <div className="text-center text-xs text-navy-800/70 font-mono">
                  🔒 We respect your privacy. Zero spam, zero shared data.
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
