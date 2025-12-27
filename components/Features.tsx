import React from 'react';
import { ShieldCheck, PenTool, Ruler, CalendarClock, Users, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <>
      {/* SECTION 1: Value Props (3 Columns) - "Your Forever Comfort" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Your Forever Comfort Designed <br className="hidden md:block"/> and Built to Last
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Join Sarasota homeowners who trusted Roman's for HVAC systems that combine efficiency, power, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Column 1 */}
            <div className="space-y-6">
               <div className="h-72 bg-gray-100 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Design" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Custom Design</h3>
               <p className="text-black font-medium text-sm border-l-2 border-[#E31E24] pl-4">See your savings before we install it — no surprises, just confidence.</p>
               <ul className="space-y-3 text-sm text-gray-500">
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Comprehensive Load Calculation</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Personalized zoning layouts</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Full energy analysis</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Efficiency options</li>
               </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
               <div className="h-72 bg-gray-100 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Installation" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Superior Efficiency</h3>
               <p className="text-black font-medium text-sm border-l-2 border-[#E31E24] pl-4">High-quality units, ductwork, and finishes installed with precision.</p>
               <ul className="space-y-3 text-sm text-gray-500">
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Trane, Carrier & Lennox units</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Whisper-quiet operation</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Florida-grade durability</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> 10-year warranties</li>
               </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
               <div className="h-72 bg-gray-100 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                 <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lifestyle" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Designed Around You</h3>
               <p className="text-black font-medium text-sm border-l-2 border-[#E31E24] pl-4">We create comfort solutions that fit your lifestyle — not the other way around.</p>
               <ul className="space-y-3 text-sm text-gray-500">
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Smart thermostat integration</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Energy-efficient upgrades</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Easy-change filters</li>
                 <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-black" /> Air purification</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Process (4 Steps) - Minimalist */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
                  How Your New HVAC Project Gets Done
                </h2>
                <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
                  From the first consultation to the final walkthrough, our proven process ensures your project is completed on time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {/* Step 1 */}
               <div className="relative group">
                  <div className="text-gray-200 font-black text-8xl absolute -top-12 -left-6 z-0 select-none group-hover:text-black/5 transition-colors">1</div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-4">
                        <PenTool className="w-5 h-5 text-black" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Assessment</span>
                     </div>
                     <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3">Free Estimate</h3>
                     <p className="text-sm text-gray-600 leading-relaxed font-medium">
                       Our expert team visits your home to perform a load calculation and help you find the perfect efficiency rating.
                     </p>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative group">
                  <div className="text-gray-200 font-black text-8xl absolute -top-12 -left-6 z-0 select-none group-hover:text-black/5 transition-colors">2</div>
                   <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-4">
                        <Ruler className="w-5 h-5 text-black" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Planning</span>
                     </div>
                     <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3">Custom Solution</h3>
                     <p className="text-sm text-gray-600 leading-relaxed font-medium">
                       See your potential energy savings. We present options for repair vs. replacement so you can decide with confidence.
                     </p>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative group">
                  <div className="text-gray-200 font-black text-8xl absolute -top-12 -left-6 z-0 select-none group-hover:text-black/5 transition-colors">3</div>
                   <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-4">
                        <CalendarClock className="w-5 h-5 text-black" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Management</span>
                     </div>
                     <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3">Expert Management</h3>
                     <p className="text-sm text-gray-600 leading-relaxed font-medium">
                       Your dedicated site supervisor keeps everything on schedule, pulls permits, and communicates with you at every step.
                     </p>
                  </div>
               </div>

               {/* Step 4 */}
               <div className="relative group">
                  <div className="text-gray-200 font-black text-8xl absolute -top-12 -left-6 z-0 select-none group-hover:text-black/5 transition-colors">4</div>
                   <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="w-5 h-5 text-black" />
                        <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Install</span>
                     </div>
                     <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3">Quality Installation</h3>
                     <p className="text-sm text-gray-600 leading-relaxed font-medium">
                       Our NATE-certified craftsmen deliver exceptional quality. Every install comes backed by a satisfaction guarantee.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};