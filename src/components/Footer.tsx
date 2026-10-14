import React from 'react';
import { Link } from 'react-router-dom';
import { KodiakLogo, KodiakBearIcon } from './KodiakLogo';
import { Shield, ArrowUpRight, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-card-dark text-cream-100 mt-24 border-t border-sage-300/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cognac-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-sage-300/15">
          {/* Brand Info with Bear Logo Placeholder */}
          <div className="lg:col-span-2 space-y-4">
            <KodiakLogo iconSize={44} inverted={true} />
            <p className="text-sage-300/80 text-sm leading-relaxed max-w-sm mt-3">
              The apex business operating system engineered for growth-driven marketing agencies,
              scaling enterprises, and modern revenue teams. Automate lead capture, qualification,
              and closing with ruthless efficiency.
            </p>

            {/* Status Pill per DESIGN.md */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Kodiak Cluster: 99.99% Uptime</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-sage-300/70 bg-navy-900/80 px-3 py-1.5 rounded-lg border border-sage-300/20">
                <Shield size={14} className="text-cognac-500" />
                <span>SOC-2 & HIPAA Ready Architecture</span>
              </div>
            </div>
          </div>

          {/* Primary Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-4">
              Platform
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

          {/* Infrastructure & Telemetry Snapshot */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-cognac-500 font-bold mb-4">
              Telemetry
            </h3>
            <div className="bg-navy-900/90 rounded-xl p-3.5 border border-sage-300/15 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-sage-300/70">
                <span>Avg Speed-To-Lead</span>
                <span className="text-cognac-500 font-bold">18.4s</span>
              </div>
              <div className="flex justify-between text-sage-300/70">
                <span>Daily API Calls</span>
                <span className="text-cream-100 font-bold">42.8M</span>
              </div>
              <div className="flex justify-between text-sage-300/70">
                <span>Reseller Margins</span>
                <span className="text-emerald-400 font-bold">+82% Avg</span>
              </div>
              <div className="pt-2 border-t border-sage-300/10 flex items-center justify-between text-[11px] text-sage-300/60">
                <span className="flex items-center gap-1">
                  <Activity size={12} className="text-emerald-400" /> Core Cluster
                </span>
                <span className="text-cream-100/80">v4.8.2-prod</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-300/70">
          <div className="flex items-center gap-2">
            <KodiakBearIcon size={18} inverted={true} />
            <span>&copy; {new Date().getFullYear()} Lead Kodiak Technologies Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-cream-100 cursor-pointer">Security Safeguards</span>
            <span className="hover:text-cream-100 cursor-pointer">Privacy Framework</span>
            <span className="hover:text-cream-100 cursor-pointer">Platform Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
