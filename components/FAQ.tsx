import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Do you offer free estimates?", a: "Yes! We provide 100% free, no-obligation estimates for all new system installations." },
  { q: "Do you offer financing?", a: "Absolutely. We partner with major lenders to offer flexible plans, including 0% APR for up to 18 months for qualified buyers." },
  { q: "How quickly can you install a new AC?", a: "In most cases, we can schedule next-day installation to get your home comfortable as soon as possible." },
  { q: "Are your technicians certified?", a: "Yes, all our technicians are NATE-certified, background-checked, and drug-tested." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">FAQ</h2>
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button 
                className="w-full py-6 text-left flex justify-between items-start group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-gray-900 group-hover:text-brand-blue transition-colors">{faq.q}</span>
                <span className="mt-1 ml-4 text-gray-400">
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              {openIndex === idx && (
                <div className="pb-6 text-gray-500 leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};