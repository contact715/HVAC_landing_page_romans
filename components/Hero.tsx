
import React from 'react';
import { Check, Star } from 'lucide-react';
import { LeadForm } from './LeadForm';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-[#0b1118] text-white overflow-hidden" id="quote">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1631615076578-f58bb05e89c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern HVAC System"
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#00152e] via-[#00152e]/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy & Value Props */}
          <div className="max-w-2xl">
            
            {/* Review Mini-Badge */}
            <div className="flex items-center gap-2 mb-6 text-yellow-400 font-bold text-sm uppercase tracking-wider">
               <div className="flex">
                 <Star className="w-4 h-4 fill-current" />
                 <Star className="w-4 h-4 fill-current" />
                 <Star className="w-4 h-4 fill-current" />
                 <Star className="w-4 h-4 fill-current" />
                 <Star className="w-4 h-4 fill-current" />
               </div>
               <span className="text-white">921 Verified 5-Star Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Your Dream Comfort, <br/>
              Delivered On Time and On Budget
            </h1>

            {/* Offer Subhead (Red) */}
            <div className="bg-[#E31E24] inline-block px-6 py-3 mb-8 rounded-sm transform -skew-x-6">
               <p className="text-white font-bold text-lg md:text-xl transform skew-x-6">
                 November Only: FREE System Estimate + $1,500 Off New Install
               </p>
            </div>

            {/* Trust Bullets */}
            <div className="grid grid-cols-1 gap-4 text-sm font-medium text-gray-300">
               {[
                 "Local, Family-Owned & Trusted | A+ BBB Rating",
                 "Full-Service: Design, Equipment, Permits & Installation",
                 "Dedicated Site Supervisors for Every Project",
                 "Hassle-Free Process with No Surprise Costs",
                 "Interactive Showroom in Sarasota"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                       <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-base">{item}</span>
                 </div>
               ))}
            </div>

          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto relative">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};
