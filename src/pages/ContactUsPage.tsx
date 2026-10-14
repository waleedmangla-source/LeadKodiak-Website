import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    leadVolume: '1000-5000',
    currentPlatform: 'GoHighLevel',
    message: '',
  });

  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow, 2:00 PM EST');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">STRATEGY & ENTERPRISE CONCIERGE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Speak Directly With An{' '}
            <span className="text-cognac-500">Agency Architect.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Whether you want a private walkthrough, have questions about migrating from GoHighLevel,
            or need high-volume API specifications, we respond in minutes.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. CONTACT FORM & LIVE CALENDAR SCHEDULER MOCKUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-sage-300 shadow-glass">
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Strategy Session Request Dispatched
                  </h3>
                  <p className="text-sm text-navy-800/80 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Operator'}. One of our senior solutions architects has been
                    assigned to your agency profile and will contact you at {formData.email || 'your email'} in under 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-navy-900 text-cream-100 text-xs font-mono font-bold"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-sage-300/40 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-navy-900">Dispatch Your Inquiry</h2>
                    <p className="text-xs text-navy-800/70 mt-1">
                      Fill out your details to connect with our solutions engineering team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="elena@vanguardlabs.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                        Agency / Company Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Vanguard Growth Labs"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                        Current Platform
                      </label>
                      <select
                        value={formData.currentPlatform}
                        onChange={(e) => setFormData({ ...formData, currentPlatform: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                      >
                        <option value="GoHighLevel">GoHighLevel</option>
                        <option value="HubSpot">HubSpot</option>
                        <option value="ActiveCampaign">ActiveCampaign</option>
                        <option value="ClickFunnels">ClickFunnels</option>
                        <option value="Other">Custom / Multiple Tools</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                      Monthly Lead Volume
                    </label>
                    <select
                      value={formData.leadVolume}
                      onChange={(e) => setFormData({ ...formData, leadVolume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                    >
                      <option value="Under 1,000">Under 1,000 leads / month</option>
                      <option value="1000-5000">1,000 – 5,000 leads / month</option>
                      <option value="5000-25000">5,000 – 25,000 leads / month</option>
                      <option value="25000+">25,000+ leads / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy-900 font-bold mb-1.5">
                      How Can We Help Your Agency?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your team size, migration timeline, or custom white-label requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100/70 border border-sage-300 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-cognac-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>Submit Strategic Consultation Request</span>
                  </button>

                  <p className="text-[11px] text-center text-navy-800/60 font-mono">
                    Protected by strict NDA protocols. Zero spam or third-party data sharing.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Built-in Kodiak Calendar Booking Preview & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Box */}
              <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-sage-300/20 shadow-glass-dark space-y-5">
                <div className="flex items-center gap-3 border-b border-sage-300/15 pb-4">
                  <KodiakBearIcon size={24} inverted={true} />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold">
                      CONCIERGE CHANNELS
                    </div>
                    <div className="text-sm font-bold text-cream-100">Live Support Desks</div>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-start gap-3 bg-navy-900 p-3.5 rounded-xl border border-sage-300/10">
                    <MessageSquare size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-cream-100 font-bold">24/7 Priority Live Chat</div>
                      <div className="text-sage-300/70 mt-0.5">Average live response: &lt; 3 minutes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-navy-900 p-3.5 rounded-xl border border-sage-300/10">
                    <Mail size={16} className="text-cognac-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-cream-100 font-bold">Direct Architecture Desk</div>
                      <div className="text-sage-300/70 mt-0.5">architects@leadkodiak.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-navy-900 p-3.5 rounded-xl border border-sage-300/10">
                    <Clock size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-cream-100 font-bold">Concierge Migration Desk</div>
                      <div className="text-sage-300/70 mt-0.5">migration@leadkodiak.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Built-in Calendar Booking Interactive Mockup */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sage-300 shadow-glass space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cognac-500 uppercase tracking-wider">
                  <Calendar size={15} />
                  <span>KODIAK CALENDAR PREVIEW</span>
                </div>

                <h3 className="text-lg font-bold text-navy-900">
                  Instant 1-on-1 Strategy Call
                </h3>

                <p className="text-xs text-navy-800/80 leading-relaxed">
                  Select an open slot to experience how Kodiak’s integrated booking engine syncs with Google Calendar, Zoom, and Outlook.
                </p>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  {[
                    'Tomorrow, 11:00 AM EST',
                    'Tomorrow, 2:00 PM EST',
                    'Thursday, 10:30 AM EST',
                    'Thursday, 4:00 PM EST',
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full py-2.5 px-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedSlot === slot
                          ? 'bg-navy-900 text-cream-100 border-navy-900 font-bold shadow-sm'
                          : 'bg-cream-100/70 text-navy-800 border-sage-300 hover:bg-cream-200/50'
                      }`}
                    >
                      <span>{slot}</span>
                      {selectedSlot === slot && (
                        <CheckCircle2 size={14} className="text-cognac-500" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="w-full py-3 bg-navy-800 hover:bg-navy-900 text-cream-100 font-bold text-xs rounded-xl active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Confirm Booking for {selectedSlot.split(',')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
