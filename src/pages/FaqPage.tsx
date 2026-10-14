import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  ChevronDown,
  Search,
  HelpCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'general' | 'pricing' | 'whitelabel' | 'voice' | 'security';
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    id: 'ghl-diff',
    category: 'general',
    question: 'How does Lead Kodiak compare to platforms like GoHighLevel?',
    answer:
      'While GoHighLevel provided a foundational blueprint for agency tool consolidation, Lead Kodiak takes performance, speed, and modern UX to the apex level. Lead Kodiak features a completely overhauled, sub-second responsive interface, native Kodiak Voice AI that executes inbound calls in under 20 seconds, modern API architecture, and higher-converting, mobile-optimized funnel templates.',
  },
  {
    id: 'migration',
    category: 'general',
    question: 'Can I migrate my existing contacts, funnels, and workflows from GoHighLevel or HubSpot?',
    answer:
      'Yes! We offer a 1-click snapshot and database migration engine. Plus, all new agencies qualify for our $500 Concierge Migration Credit, where our senior engineers personally verify your field mappings, active workflows, and contact tags with zero campaign downtime.',
  },
  {
    id: 'unlimited-contacts',
    category: 'pricing',
    question: 'Are contacts and team seats really unlimited on all plans?',
    answer:
      'Yes. Unlike traditional CRMs like ActiveCampaign or HubSpot that penalize your growth by doubling your monthly subscription every time you add 5,000 contacts, Lead Kodiak NEVER charges for contact count, contact storage, or additional employee logins.',
  },
  {
    id: 'usage-costs',
    category: 'pricing',
    question: 'How do usage costs work for phone minutes, SMS messages, and AI calls?',
    answer:
      'Core software features are 100% included in your flat monthly subscription. Direct carrier usage (sending SMS texts, placing outbound phone minutes, and voice AI transcription) operates on a transparent, pay-as-you-go wholesale model drawn from an internal account wallet at wholesale carrier rates (e.g. ~$0.0079 per SMS). On Pro and Apex tiers, you can rebill these costs to your clients with a custom 2x–5x markup that you keep as pure profit.',
  },
  {
    id: 'whitelabel-setup',
    category: 'whitelabel',
    question: 'How does white-labeling work? Will clients see Lead Kodiak anywhere?',
    answer:
      'On Kodiak Pro and Agency SaaS Apex, the platform is 100% white-labeled. You point your custom subdomain (e.g. app.youragency.com), upload your custom logo and brand colors, and configure your own welcome emails. There is zero mention of Lead Kodiak anywhere in the client-facing UI, documentation, or notifications.',
  },
  {
    id: 'rebilling-markup',
    category: 'whitelabel',
    question: 'How does client rebilling work in SaaS Mode?',
    answer:
      'In SaaS Mode (Agency SaaS Apex), when a client registers on your agency landing page, their sub-account is provisioned automatically via Stripe. You set the retail price (e.g., $297/mo, $497/mo). Furthermore, any phone, SMS, or AI voice usage incurred by their sub-account can be automatically billed to their credit card with your chosen markup percentage (e.g. 3x markup), directly deposited into your connected Stripe account.',
  },
  {
    id: 'voice-latency',
    category: 'voice',
    question: 'How fast is Kodiak Voice AI, and does it sound robotic?',
    answer:
      'Kodiak Voice runs on low-latency neural speech models with an average response time of under 450ms—fast enough to carry natural, human-like dialogue without awkward pauses. You can upload custom agency knowledge documents, define business hours, program objection handling scripts, and instruct the AI to schedule meetings or warm-transfer hot prospects directly to a live phone number.',
  },
  {
    id: 'hipaa-soc2',
    category: 'security',
    question: 'Is Lead Kodiak compliant with HIPAA and SOC-2 standards?',
    answer:
      'Yes. We maintain strict security protocols, including database encryption at rest (AES-256) and in transit (TLS 1.3). For healthcare agencies and medical practices, we offer dedicated HIPAA-compliant BAA agreements on request to ensure full patient data safeguarding.',
  },
  {
    id: 'trial-cancellation',
    category: 'pricing',
    question: 'Is there a free trial, and can I cancel anytime?',
    answer:
      'Every plan includes a 14-day free trial with full feature access. You can test funnels, connect your domain, run test voice calls, and onboard team members. If you decide it is not the right fit, you can cancel directly inside your dashboard with one click before the trial ends, and you will not be billed.',
  },
];

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('ghl-diff');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-12">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={14} />
            <span className="font-mono tracking-wider">KODIAK KNOWLEDGE BASE & FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Clear Answers.{' '}
            <span className="text-cognac-500">Zero Ambiguity.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Lead Kodiak’s architecture, pricing tiers,
            white-labeling capabilities, and migration pathways.
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-800/50 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search questions (e.g. GoHighLevel, white-label, pricing, Voice AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-card border border-sage-300 text-navy-900 placeholder:text-navy-800/50 focus:outline-none focus:ring-2 focus:ring-cognac-500 text-sm shadow-sm"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 2. CATEGORY PILLS & ACCORDION FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'general', label: 'General & Migration' },
              { id: 'pricing', label: 'Pricing & Limits' },
              { id: 'whitelabel', label: 'White-Label & SaaS' },
              { id: 'voice', label: 'Voice AI & Tech' },
              { id: 'security', label: 'Security & HIPAA' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-cream-100 shadow-sm font-bold'
                    : 'glass-card text-navy-800 hover:bg-sage-300/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="glass-card rounded-2xl border border-sage-300 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-navy-900 text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-cognac-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-navy-800/85 leading-relaxed border-t border-sage-300/40 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 glass-card rounded-2xl border border-sage-300 text-navy-800">
                <HelpCircle size={32} className="mx-auto text-cognac-500 mb-2 opacity-60" />
                <p className="font-semibold">No questions matched your search query.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-xs font-mono text-cognac-500 underline font-bold"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. STILL HAVE QUESTIONS? DIRECT CONTACT CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-card-dark rounded-2xl p-8 sm:p-12 border border-sage-300/20 text-center space-y-5 shadow-glass-dark">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-cream-100">
              Have Specific Architecture Or Agency Migration Questions?
            </h2>
            <p className="text-sage-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our enterprise support engineers are on standby 24/7 to review your tech stack and walk you through the platform.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Message Our Strategy Team</span>
              </Link>
              <Link
                to="/plans-discounts"
                className="w-full sm:w-auto px-6 py-3.5 bg-navy-900 border border-sage-300/20 text-cream-100 font-bold text-sm rounded-xl hover:bg-navy-800 transition-all flex items-center justify-center gap-2"
              >
                <span>Inspect Plan Tiers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
