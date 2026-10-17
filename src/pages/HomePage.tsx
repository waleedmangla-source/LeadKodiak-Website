import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  PhoneCall,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Flame,
  Snowflake,
  Inbox,
  FlaskConical,
  TrendingUp,
  Headphones,
  ArrowRight,
} from 'lucide-react';

// Google Reviews Dataset for the Interactive Slider
const customerReviews = [
  {
    id: 1,
    name: 'David Tremblay',
    role: 'Founder, The Blinds Company',
    company: 'theblindscompany.ca',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Lead Kodiak completely transformed how we get clients. We went from freezing mornings knocking on doors to having a steady flow of high-value blinds inquiries booked directly onto our calendar. Our response time dropped to under 30 seconds, and our ad spend has yielded up to 10X returns.',
    highlight: 'Up to 10X ROAS & Zero Door Knocking',
  },
  {
    id: 2,
    name: 'Mark Henderson',
    role: 'Owner, Apex Custom Window Coverings',
    company: 'Window & Shade Specialist',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Before Lead Kodiak, marketing agencies would waste thousands of my dollars running random experiments and draining my budget. Lead Kodiak only uses strategies they already tested and perfected in real operations. The centralized mobile app lets me reply to Facebook, Instagram, and SMS leads from my truck between jobs.',
    highlight: 'No More Wasted Ad Spend',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Managing Partner, Premier Home Finishes',
    company: 'Residential Contractor',
    rating: 5,
    date: 'Verified Google Review',
    text: 'Having all our inquiries in one centralized inbox is a game-changer. We used to miss inquiries on weekends or let leads slip through the cracks. Now, leads get an automatic text within 30 seconds and our booking rate doubled. Best business decision we made this year.',
    highlight: 'Centralized Inbox & Instant Response',
  },
  {
    id: 4,
    name: 'Robert C. Martinez',
    role: 'Owner & U.S. Army Veteran, Vanguard Installations',
    company: 'Contracting Services',
    rating: 5,
    date: 'Verified Google Review',
    text: 'As a veteran-owned business, finding partners with integrity who do what they say is rare. Lead Kodiak honored my military service with an awesome discount, set up our complete pipeline in days, and has our back 24/7. Zero hidden fees, just real profitable results.',
    highlight: 'Honest, Transparent & Veteran Friendly',
  },
];

export const HomePage: React.FC = () => {
  // Review Slider State
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance reviews every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % customerReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prev) => (prev + 1) % customerReviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prev) =>
      prev === 0 ? customerReviews.length - 1 : prev - 1
    );
  };

  const currentReview = customerReviews[currentReviewIndex];

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[550px] h-96 bg-cognac-500/10 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal direction="up">
          {/* Status Pill & Subtitle */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              Lead Kodiak • Software & Marketing Firm
            </span>
          </div>

          {/* Main User Catchphrase */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.08] max-w-5xl mx-auto">
            🚀 Your Success Starts With{' '}
            <span className="relative inline-block text-cognac-500 underline decoration-sage-400 decoration-wavy decoration-2">
              More Leads
            </span>{' '}
            🐻🇺🇸
          </h1>
        </ScrollReveal>

        {/* Google 5-Star Social Proof Badge */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2.5 px-5 py-2 rounded-full glass-card border border-sage-300 shadow-sm text-navy-900">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="font-bold text-sm text-navy-900">
              Rated 5 Stars on Google
            </span>
            <span className="text-sage-400 text-xs">•</span>
            <span className="text-xs font-mono text-navy-800/80">
              100% Verified Home Service Results
            </span>
          </div>
        </ScrollReveal>


        {/* Hero Action Buttons */}
        <ScrollReveal direction="up" delay={350}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            {/* Button: Call Now */}
            <a
              href="tel:18005550199"
              className="w-full sm:w-auto px-8 py-4 bg-navy-900 hover:bg-navy-800 text-cream-100 font-bold text-base rounded-xl active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <PhoneCall size={18} className="text-cognac-500 group-hover:scale-110 transition-transform" />
              <span>Call Now: (800) 555-LEAD</span>
            </a>

            {/* Button: Book Now */}
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 2. APP SHOWCASE / APP STORE & PLAY STORE BADGES */}
        <ScrollReveal direction="up" delay={450}>
          <div className="mt-16 max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-sage-300 shadow-glass text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* App Icon & Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Lead Kodiak App Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 p-2.5 shadow-md flex items-center justify-center border-2 border-sage-300">
                    <img
                      src="/LeadKodiak-Branding.svg"
                      alt="Lead Kodiak App Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sage-300 text-navy-900 font-mono text-[11px] font-bold uppercase">
                      Centralized Mobile App
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                      Lead Kodiak Command Center
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-navy-800/80 leading-relaxed">
                  Manage your entire business on the go. Receive instant notifications when high-intent leads submit inquiries, reply via two-way SMS, view incoming calls, and confirm booked appointments directly from your pocket.
                </p>

                {/* Official Store Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {/* App Store Badge */}
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-navy-900 text-cream-100 hover:bg-navy-800 transition-all border border-sage-300/30 cursor-pointer shadow-sm">
                    <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.4c.59-.72 1-1.72.89-2.72-.88.04-1.95.59-2.57 1.32-.55.63-.99 1.66-.86 2.63 1 .08 1.98-.51 2.54-1.23z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-mono tracking-wider opacity-75 leading-none">
                        Download on the
                      </div>
                      <div className="text-xs sm:text-sm font-bold leading-tight">
                        Apple App Store
                      </div>
                    </div>
                  </div>

                  {/* Google Play Store Badge */}
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-navy-900 text-cream-100 hover:bg-navy-800 transition-all border border-sage-300/30 cursor-pointer shadow-sm">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.597 1.597 0 0 1-.61-.986V2.8a1.6 1.6 0 0 1 .609-.986zm11.234 11.237l2.607-2.608-11.83-6.83 9.223 9.438zm0 1.898L5.62 24.387l11.83-6.83-2.607-2.608zm3.676-2.128l2.95 1.703a1.18 1.18 0 0 1 0 2.046l-2.95 1.703-2.177-2.176 2.177-2.176z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-mono tracking-wider opacity-75 leading-none">
                        Get it on
                      </div>
                      <div className="text-xs sm:text-sm font-bold leading-tight">
                        Google Play Store
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App UI Visual Preview */}
              <div className="md:col-span-5 bg-navy-900 rounded-2xl p-4 text-cream-100 border border-sage-300/20 shadow-inner space-y-3">
                <div className="flex items-center justify-between border-b border-navy-700 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-sage-300">Live Inbound Leads</span>
                  </div>
                  <span className="text-[10px] font-mono bg-navy-800 px-2 py-0.5 rounded text-cognac-400 font-bold">
                    Sub-30s Response
                  </span>
                </div>

                {/* Sample Lead Notifications */}
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-navy-800/80 border border-sage-300/10">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-cream-100">David M. (Custom Motorized Shades)</span>
                      <span className="text-[10px] text-sage-400">Just now</span>
                    </div>
                    <p className="text-sage-300/90 text-[11px] mt-1">
                      "Looking to measure 12 windows for motorized zebra blinds next Tuesday."
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                      <CheckCircle2 size={12} /> Auto-SMS Sent: Consultation booked for 2:00 PM
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-navy-800/50 border border-sage-300/10">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-cream-100">Amanda K. (Living Room Shutters)</span>
                      <span className="text-[10px] text-sage-400">4m ago</span>
                    </div>
                    <p className="text-sage-300/90 text-[11px] mt-1">
                      Submitted through Website Quote Form. Assigned to field estimator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY CHOOSE US (6 CORE PILLARS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-300 text-navy-800 text-xs font-bold font-mono tracking-widest uppercase mb-3">
              BUILT FOR CONTRACTORS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Why Choose Lead Kodiak
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-800/80">
              We eliminated the headaches, trial-and-error, and physical fatigue that plague home service businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1: No More Door Knocking */}
          <ScrollReveal direction="up" delay={100}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cognac-500/10 flex items-center justify-center text-cognac-500 mb-6 group-hover:scale-110 transition-transform">
                  <div className="flex items-center gap-1">
                    <Snowflake size={22} className="text-sky-600" />
                    <Flame size={22} className="text-cognac-500" />
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  No More Door Knocking
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  Zero cold outreach. Stop stressing over where your next job is coming from or knocking on doors in the freezing winter and scorching summer heat. We build automated lead pipelines that keep you busy year-round.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>100% Inbound Qualified Pipeline</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: All Leads in One Centralized Inbox */}
          <ScrollReveal direction="up" delay={200}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900/10 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
                  <Inbox size={26} className="text-navy-900" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  All Your Leads in One Centralized Inbox
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  Never let a high-value client slip through the cracks. Manage every lead from Facebook, Instagram, your website, and SMS text messages directly from a single, easy-to-use dashboard.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>SMS + Social + Web Forms Unified</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 3: Continuous Testing */}
          <ScrollReveal direction="up" delay={300}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                  <FlaskConical size={26} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Continuous Rigorous Testing
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  We've done countless A/B tests with our campaigns. Many marketing companies often run ads, conducting different experiments using your ad spend, ultimately draining your budget. At Lead Kodiak, we only remove or implement strategies if proven successful with our blinds company.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>Tested First on Live Operations</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 4: Real ROI */}
          <ScrollReveal direction="up" delay={400}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp size={26} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Real ROI
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  Real, Profitable Results. Backed by proof. We measure success by booked sales appointments and bottom-line revenue added to your business, not meaningless clicks or vanity metrics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>Up to 10X ROAS Client Data</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 5: Zero Hidden Fees */}
          <ScrollReveal direction="up" delay={500}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900/10 flex items-center justify-center text-navy-900 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={26} className="text-navy-900" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Zero Hidden Fees
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  No surprise charges. 100% upfront transparency on all setup, management, and software services. You always know exactly what you are investing and what returns to expect.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>Transparent Month-to-Month</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 6: Support Team */}
          <ScrollReveal direction="up" delay={600}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cognac-500/10 flex items-center justify-center text-cognac-500 mb-6 group-hover:scale-110 transition-transform">
                  <Headphones size={26} className="text-cognac-500" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Dedicated Support Team
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  Rest assured, we handle any questions or technical issues promptly. When you partner with Lead Kodiak, you have direct access to our responsive US-based engineering and support specialists.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 flex items-center gap-2 text-xs font-mono font-bold text-navy-800">
                <CheckCircle2 size={16} className="text-cognac-500" />
                <span>24/7 Rapid Incident Resolution</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. WHAT OUR CUSTOMERS SAY (INTERACTIVE REVIEW SLIDER) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-300 text-navy-800 text-xs font-bold font-mono tracking-widest uppercase mb-3">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-base sm:text-lg text-navy-800/80">
              Real reviews from real home service and window covering operators.
            </p>
          </div>

          {/* Review Slider Card */}
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 border-2 border-sage-300 shadow-glass overflow-hidden">
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-4 right-8 text-sage-300/40 text-9xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10 space-y-6">
              {/* Star Rating & Highlight Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} size={22} className="fill-amber-400 text-amber-500" />
                  ))}
                  <span className="ml-2 font-mono text-xs font-bold text-navy-900">
                    5.0 / 5.0 Rating
                  </span>
                </div>

                <div className="px-3.5 py-1 rounded-full bg-cognac-500/10 text-cognac-600 font-mono text-xs font-bold border border-cognac-500/30">
                  {currentReview.highlight}
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl font-medium text-navy-900 leading-relaxed italic">
                "{currentReview.text}"
              </blockquote>

              {/* Author Info & Navigation Controls */}
              <div className="pt-6 border-t border-sage-300/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-navy-900">
                    {currentReview.name}
                  </h4>
                  <div className="text-xs sm:text-sm text-navy-800/80">
                    {currentReview.role} •{' '}
                    <span className="font-mono text-cognac-600 font-bold">
                      {currentReview.company}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-sage-500 mt-0.5">
                    {currentReview.date}
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevReview}
                    aria-label="Previous review"
                    className="p-3 rounded-full bg-navy-900 text-cream-100 hover:bg-navy-800 active:scale-95 transition-all shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5 px-2">
                    {customerReviews.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setCurrentReviewIndex(idx);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          currentReviewIndex === idx
                            ? 'w-8 bg-cognac-500'
                            : 'w-2.5 bg-sage-400 hover:bg-navy-800'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextReview}
                    aria-label="Next review"
                    className="p-3 rounded-full bg-navy-900 text-cream-100 hover:bg-navy-800 active:scale-95 transition-all shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. WANT TO LAUNCH WITH US? JUST 3 STEPS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-300 text-navy-800 text-xs font-bold font-mono tracking-widest uppercase mb-3">
              SIMPLE ONBOARDING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Want To Launch With Us? Just 3 Steps!
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-800/80">
              From our first conversation to your first booked job, we make setup effortless.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1: Online Consultation */}
          <ScrollReveal direction="up" delay={150}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass relative h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-cream-100 font-mono text-xl font-extrabold flex items-center justify-center mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Online Consultation
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  We will evaluate your company’s needs, review your current lead flow and target service radius, and settle on a tailored agreement.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 text-xs font-mono font-bold text-cognac-600">
                15-Minute Discovery Call
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2: Onboarding Form */}
          <ScrollReveal direction="up" delay={300}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass relative h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cognac-500 text-white font-mono text-xl font-extrabold flex items-center justify-center mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Onboarding Form
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  Mainly questions about your company to help our team put together a more effective campaign and high-converting website for you.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 text-xs font-mono font-bold text-cognac-600">
                Quick 10-Minute Intake Questionnaire
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3: Build Phase Begins */}
          <ScrollReveal direction="up" delay={450}>
            <div className="glass-card rounded-3xl p-8 border border-sage-300 shadow-glass relative h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-mono text-xl font-extrabold flex items-center justify-center mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3">
                  Build Phase Begins
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  We will keep you updated on the progress as our engineers build your website, configure your ad campaigns, and launch your centralized lead app.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sage-300/50 text-xs font-mono font-bold text-cognac-600">
                Fast Turnaround & Live Milestone Updates
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. BOTTOM CTA: WANT TO OBTAIN MORE LEADS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-3xl p-8 sm:p-14 border border-sage-300/20 shadow-2xl text-center text-cream-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cognac-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cognac-500/20 border border-cognac-500/40 text-cognac-400 text-xs font-bold font-mono tracking-widest uppercase">
                🚀 START GENERATING HIGH-INTENT LEADS
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cream-100 leading-tight">
                Want To Obtain More Leads?
              </h2>

              <p className="text-base sm:text-lg text-sage-300/90 max-w-2xl mx-auto leading-relaxed">
                Book your free consultation now. Let’s evaluate your service area, eliminate cold outreach, and build a predictable pipeline for your business.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center justify-center gap-2 group"
                >
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:18005550199"
                  className="w-full sm:w-auto px-8 py-4 glass-card text-navy-900 font-bold text-base rounded-xl hover:bg-cream-100 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall size={18} className="text-cognac-500" />
                  <span>Call (800) 555-LEAD</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-sage-300/80 font-mono">
                <span>✓ Flexible Month-to-Month</span>
                <span>✓ No Long-Term Contracts</span>
                <span>✓ Tested on Real Operations</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
