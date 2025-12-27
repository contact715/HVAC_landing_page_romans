import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    "Full AC System Replacement",
    "Emergency Repairs",
    "Ductwork & Insulation",
    "Smart Thermostats",
    "Air Purification Systems",
    "Preventative Maintenance",
    "Commercial HVAC",
    "Heat Pumps & Furnaces"
  ];

  return (
    <section className="py-24 bg-[#111111] text-white border-t border-white/10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           
           <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white leading-tight">
                Everything You Need <br/> for Perfect Climate Control
              </h2>
              <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                No need to juggle multiple contractors or stress over logistics. Roman's Service manages every step of your comfort with precision.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                 {services.map((item, idx) => (
                   <div key={idx} className="bg-[#111111] p-5 hover:bg-[#1a1a1a] transition-colors cursor-default">
                      <span className="font-bold text-sm tracking-widest uppercase text-white">{item}</span>
                   </div>
                 ))}
              </div>

              <div className="mt-12">
                 <a href="#quote" className="inline-flex items-center bg-[#E31E24] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
                    Get My Free Design Consultation <ArrowRight className="ml-3 w-4 h-4" />
                 </a>
                 <p className="mt-6 text-xs text-gray-500 font-medium tracking-wide">
                    Schedule now and receive a FREE design consultation + $1,500 off your project this November
                 </p>
              </div>
           </div>

           <div className="relative h-[600px] bg-gray-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="HVAC Technician" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                 <div className="border-l-4 border-[#E31E24] pl-6">
                    <p className="font-serif font-bold text-2xl text-white italic mb-3">"Roman's Service made it so easy. They handled everything from design to installation."</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white">Margaret W. • Sarasota, FL</p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};