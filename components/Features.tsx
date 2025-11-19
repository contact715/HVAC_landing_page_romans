import React from 'react';
import { Shield, Clock, Banknote, Wrench, BadgeCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#002855] uppercase tracking-tight mb-4">Why Choose Roman's?</h2>
          <div className="h-1 w-24 bg-[#E31E24] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Licensed & Insured", text: "Fully CAC1816336 certified professionals." },
            { icon: Clock, title: "24/7 Availability", text: "Emergency service when you need it most." },
            { icon: Banknote, title: "Upfront Pricing", text: "No hidden fees. You approve the price first." },
            { icon: BadgeCheck, title: "Satisfaction Guarantee", text: "We don't stop until the job is done right." }
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-xl transition-shadow group">
               <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#002855] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#002855] group-hover:text-white transition-colors duration-300" />
               </div>
               <h3 className="text-lg font-black text-[#002855] mb-2 uppercase">{feature.title}</h3>
               <p className="text-gray-500 font-medium text-sm leading-relaxed">
                 {feature.text}
               </p>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-16 bg-[#002855] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Need a Repair?</h3>
                    <p className="text-gray-300 font-medium">We service all major brands including Carrier, Trane, and Lennox.</p>
                </div>
            </div>
            <a href="#quote" className="bg-[#E31E24] text-white px-10 py-4 rounded font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg">
                Schedule Now
            </a>
        </div>
      </div>
    </section>
  );
};