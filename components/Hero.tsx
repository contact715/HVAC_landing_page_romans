
import React from 'react';
import { LeadForm } from './LeadForm';
import { Star, Tag, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-[#002855] overflow-hidden">
      {/* Background - Dark Navy with subtle image overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="HVAC Technician Working"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-br from-[#002855] via-[#002855]/95 to-[#001a36]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7 pt-4 lg:pt-10">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8 hover:bg-white/20 transition-colors cursor-default">
               <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
               <span>Sarasota's #1 Rated HVAC Team</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-xl">
              Expert AC Repair <br/>
              <span className="text-[#E31E24]">
                & Installation.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 font-medium max-w-xl leading-relaxed border-l-4 border-[#E31E24] pl-6">
              Don't let the Florida heat win. Get <span className="text-white font-bold">Same-Day Service</span> and <span className="text-white font-bold">{COMPANY_INFO.offer}</span> from Roman's Service.
            </p>

            {/* Value Props with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
               <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E31E24] flex items-center justify-center shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-lg">Fast Response</h4>
                     <p className="text-sm text-gray-400">On-site within hours</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E31E24] flex items-center justify-center shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                    <Tag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-lg">Upfront Pricing</h4>
                     <p className="text-sm text-gray-400">No hidden surprise fees</p>
                  </div>
               </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#002855] bg-gray-200 flex items-center justify-center overflow-hidden relative">
                           <img src={`https://i.pravatar.cc/100?img=${10 + i * 5}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex text-[#E31E24] gap-0.5">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-xs font-bold text-gray-400 mt-1">Trusted by 2,500+ Neighbors</p>
                </div>
            </div>
          </div>

          {/* Right Content - Prominent Form */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0" id="quote">
             {/* Decorative background glow behind form */}
             <div className="absolute -inset-1 bg-gradient-to-b from-[#E31E24] to-transparent opacity-20 blur-2xl rounded-3xl"></div>
             
             <div className="relative transform transition-transform hover:-translate-y-1 duration-300">
                <LeadForm className="shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] border-0 ring-1 ring-white/10" />
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve/Shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-12 md:h-20 fill-white rotate-180">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
      </div>
    </section>
  );
};
