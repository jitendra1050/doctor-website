import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do I schedule an appointment with Dr. Sam Merriaki?',
      answer: 'You can submit the appointment booking form on this website with your preferred date and time, call the clinic directly, or walk in during consultation hours. We will confirm your exact slot upon receiving the request.',
    },
    {
      question: 'What documents or reports should I bring?',
      answer: 'Please bring your previous medical records, past prescription slips, X-ray/MRI films (if available), and any recent relevant blood reports.',
    },
    {
      question: 'What conditions are treated at this clinic?',
      answer: 'Dr. Sam Merriaki treats bone fractures, joint pain (knee, shoulder, hip arthritis), sports injuries, ligament sprains, back stiffness, and pediatric musculoskeletal issues.',
    },
    {
      question: 'Are walk-in consultations accepted?',
      answer: 'Walk-ins are welcomed during active clinic hours, though prior appointments are recommended to avoid waiting times.',
    },
    {
      question: 'How do I reschedule or cancel my visit?',
      answer: 'Kindly call the clinic phone number at least a few hours in advance to reschedule your consultation slot.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-700 text-xs uppercase font-semibold tracking-wider bg-brand-50 border border-brand-100 px-3 py-1 rounded-full">
              Questions & Answers
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4 tracking-tighter">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Helpful answers regarding appointments, visits, and orthopedic consultations.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="surface-elevated rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-slate-50"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle
                      className={`flex-shrink-0 transition-colors ${
                        openIndex === index ? 'text-brand-600' : 'text-slate-400'
                      }`}
                      size={20}
                    />
                    <span className={`font-semibold text-base transition-colors ${
                      openIndex === index ? 'text-brand-800' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-brand-600' : ''
                    }`}
                    size={20}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-8 text-slate-600 text-sm leading-relaxed-plus border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
