import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { KodiakBearIcon } from '../components/KodiakLogo';
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  Calendar,
  MessageCircle,
} from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    id: 'what-we-do',
    question: 'What exactly does Lead Kodiak do for my business?',
    answer:
      'Lead Kodiak provides an all-in-one growth platform built specifically for home service contractors. We handle lead generation, automated follow-ups, and appointment scheduling, so you can focus on job sites while we keep your pipeline full.',
  },
  {
    id: 'pay-for-itself',
    question: 'How fast does Lead Kodiak pay for itself?',
    answer:
      'Based on data collected from our clients over a full year, we have never seen a single month where the investment didn’t pay for itself. In fact, it’s usually the complete opposite—our clients routinely see months where they generate up to 10X return on their ad spend thanks to instant lead follow-ups and automated conversions.',
  },
  {
    id: 'response-time',
    question: 'How quickly do leads hear from us after submitting an inquiry?',
    answer:
      'Instantly. Our automated system engages prospects within 30 seconds of form submission via SMS and email. Fast response times drastically increase contact rates and conversion before competitors can even reply.',
  },
  {
    id: 'centralized-inbox',
    question: 'Can I manage all client communications in one place?',
    answer:
      'Absolutely. Lead Kodiak unifies your SMS, emails, Facebook messages, Instagram DMs, and phone calls into a single unified inbox accessible on both desktop and mobile.',
  },
  {
    id: 'contract-terms',
    question: 'What are your contract terms and agreement details?',
    answer:
      'With Lead Kodiak, we do not lock you into rigid annual contracts or bronze/silver/gold package traps. We operate on a flexible month-to-month agreement tailored specifically to your company’s needs, with zero hidden fees or surprise charges.',
  },
];

export const FaqPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([
    'what-we-do',
    'pay-for-itself',
  ]);

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((i) => i !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="pt-28 pb-16 space-y-24 md:space-y-32">
      {/* 1. HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 md:pt-14">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-300 text-navy-800 text-xs sm:text-sm font-semibold shadow-sm mb-6 border border-sage-400/50">
            <KodiakBearIcon size={15} />
            <span className="font-mono tracking-wider uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Frequently Asked <span className="text-cognac-500">Questions</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our lead pipelines, mobile app, response times,
            and month-to-month partnership.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. FAQ ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="space-y-4">
            {faqsData.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-cognac-500/60 shadow-md'
                      : 'border-sage-300 hover:border-sage-400'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-navy-900 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={20} className="text-cognac-500 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-cognac-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-navy-800/85 leading-relaxed border-t border-sage-300/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. STILL HAVE QUESTIONS CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl glass-card border-2 border-sage-300 shadow-glass space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 text-cream-100 flex items-center justify-center mx-auto shadow-sm">
              <MessageCircle size={26} className="text-cognac-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Have A Specific Question About Your Service Area?
            </h3>

            <p className="text-navy-800/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We’re happy to evaluate your market, review existing campaigns, or answer any technical questions. Reach out 24/7.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-cognac-500 hover:bg-cognac-600 text-white font-bold text-sm sm:text-base rounded-xl active:scale-95 transition-all shadow-cognac-glow flex items-center gap-2"
              >
                <Calendar size={18} />
                <span>Book Free Consultation</span>
              </Link>
              <a
                href="tel:18005550199"
                className="px-8 py-3.5 glass-card text-navy-900 font-bold text-sm sm:text-base rounded-xl hover:bg-cream-100 transition-all flex items-center gap-2"
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
