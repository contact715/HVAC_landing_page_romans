import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "AC Installation",
    desc: "Energy-efficient system replacements tailored to your home's needs.",
    image: "https://images.unsplash.com/photo-1521207418485-fe9c3345d487?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rapid Repair",
    desc: "Diagnostic and repair services for all makes and models.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Preventative Maintenance",
    desc: "Routine tune-ups to extend the life of your HVAC system.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#E31E24] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
          <h2 className="text-4xl font-black text-[#002855] mt-2 mb-4">Complete Home Comfort</h2>
          <div className="h-1 w-20 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-[#002855]/0 group-hover:bg-[#002855]/20 transition-colors"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-[#002855] mb-3 uppercase">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">
                  {service.desc}
                </p>
                <a href="#quote" className="inline-flex items-center text-[#E31E24] font-bold text-sm uppercase hover:text-[#002855] transition-colors">
                  Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};