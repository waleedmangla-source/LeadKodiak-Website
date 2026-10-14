import React from 'react';
import { Link } from 'react-router-dom';
import { KodiakLogo, KodiakBearIcon } from './KodiakLogo';
import { ArrowUpRight, Activity, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-card-dark text-cream-100 mt-24 border-t border-sage-300/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cognac-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-sage-300/15">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <KodiakLogo iconSize={44} inverted={true} />
            <p className="text-sage-300/80 text-sm leading-relaxed max-w-sm mt-3">
              Lead Kodiak is a Software & Marketing Firm built specifically for home service contractors and window covering specialists. We engineer automated lead pipelines, high-converting websites, and centralized mobile inboxes that keep your business booked year-round.
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available 24/7 • Operating in all 50 states 🇺🇸</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:18005550199"
                className="inline-flex items-center gap-2 text-xs font-mono text-cream-100 hover:text-cognac-400 transition-colors bg-navy-900/80 px-3 py-1.5 rounded-lg border border-sage-300/20"
              >
                <PhoneCall size={14} className="text-cognac-500" />
                <span>Call Us: (800) 555-LEAD</span>
              </a>
            </div>
          </div>

          {/* Primary Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/our-work"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-block"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/plans-discounts"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-block"
                >
                  Plans & Discounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support - Specific Footer-Only Pages */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-4">
              Company & Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                >
                  <span>About Us</span>
                  <ArrowUpRight size={13} className="text-sage-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                >
                  <span>FAQ</span>
                  <ArrowUpRight size={13} className="text-sage-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cream-100/80 hover:text-cream-100 hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight size={13} className="text-sage-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Metrics Snapshot */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-4">
              Operational Proof
            </h3>
            <div className="bg-navy-900/90 rounded-xl p-3.5 border border-sage-300/15 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-sage-300/70">
                <span>Speed-To-Lead</span>
                <span className="text-cognac-500 font-bold">&lt; 30 Seconds</span>
              </div>
              <div className="flex justify-between text-sage-300/70">
                <span>Google Rating</span>
                <span className="text-amber-400 font-bold">5.0 ★★★★★</span>
              </div>
              <div className="flex justify-between text-sage-300/70">
                <span>Contracts</span>
                <span className="text-emerald-400 font-bold">Month-to-Month</span>
              </div>
              <div className="pt-2 border-t border-sage-300/10 flex items-center justify-between text-[11px] text-sage-300/60">
                <span className="flex items-center gap-1">
                  <Activity size={12} className="text-emerald-400" /> Sister Brand
                </span>
                <span className="text-cream-100/80">The Blinds Co.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-300/70">
          <div className="flex items-center gap-2">
            <KodiakBearIcon size={18} inverted={true} />
            <span>&copy; {new Date().getFullYear()} Lead Kodiak. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-cream-100">About Our Story</Link>
            <Link to="/faq" className="hover:text-cream-100">FAQ</Link>
            <Link to="/contact" className="hover:text-cream-100">Book Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
