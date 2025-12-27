import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "What happens at the in-home consultation?", a: "Our expert technician arrives to measure your home, perform a heat load calculation, and inspect your current ductwork. We then provide 3 custom options ranging from basic repair to high-efficiency replacement." },
  { q: "How long does an AC installation take?", a: "Most residential installations are completed in a single day. Our team arrives at 8 AM and typically finishes by 5 PM, ensuring you have cool air before we leave." },
  { q: "Will a new system decrease my electric bill?", a: "Yes. Modern high-SEER systems are significantly more efficient than units from 10 years ago. Many customers see a 20-40% reduction in cooling costs." },
  { q: "Do I need a permit for HVAC replacement?", a: "Yes, permits are required by Florida law. Roman's Service handles all permitting and inspections for you, so you don't have to worry about the paperwork." },
  { q: "Do you offer financing?", a: "Absolutely. We partner with major lenders to offer flexible plans, including 0% APR for up to 18 months for qualified buyers." },
  { q: "Do you have a showroom?", a: "Yes! Come visit us in Sarasota to see the latest thermostats, filtration systems, and unit models in person." },
  { q: "Why choose Roman's Service?", a: "We are family-owned, NATE-certified, and obsessively focused on quality. We don't use subcontractors, and we offer a 100% satisfaction guarantee." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-light">Quick answers to help you plan your comfort with confidence.</p>
        </div>
        
        <div className="bg-white border-t border-b border-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button 
                className="w-full py-8 text-left flex justify-between items-center group hover:bg-gray-50 transition-colors px-4"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-black">{faq.q}</span>
                <span className={`ml-4 text-black transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <div 
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
           <p className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Still have questions?</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:9412082008" className="text-4xl font-serif font-bold text-black hover:text-[#E31E24] transition-colors">
                 (941) 208-2008
              </a>
           </div>
           <div className="mt-6">
             <a href="#quote" className="text-[#E31E24] font-bold uppercase tracking-widest text-xs underline hover:text-black">
                Get My Free Estimate
             </a>
           </div>
        </div>
      </div>
    </section>
  );
};