import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    title: "AC Replacement - Sarasota, FL",
    source: "Google Review",
    rating: "4.9/5",
    text: "I was nervous about such a big project, but Roman's Service made it so easy. They handled everything from design to installation, and kept me updated every step of the way. My house is finally cool!",
    author: "Patricia M.",
    location: "Sarasota, FL",
    service: "Full System Install",
    date: "October 2023"
  },
  {
    title: "Emergency Repair - Bradenton, FL",
    source: "Yelp Review",
    rating: "4.6/5",
    text: "The attention to detail was impressive. The team was always on time, respectful, and cleaned up perfectly each day. The price was exactly what they quoted.",
    author: "Susan & John",
    location: "Bradenton, FL",
    service: "Compressor Repair",
    date: "September 2023"
  },
  {
    title: "Maintenance - Venice, FL",
    source: "Facebook Review",
    rating: "5/5",
    text: "As a retired homeowner, I appreciated how Roman's took care of everything. They helped me choose the perfect unit for my budget, and their warranty gives me peace of mind.",
    author: "Margaret W.",
    location: "Venice, FL",
    service: "Routine Maintenance",
    date: "July 2023"
  },
  {
    title: "Full Ductwork - Lakewood Ranch, FL",
    source: "Angie's List",
    rating: "5/5",
    text: "From the very first consultation, the process was seamless. The load calculation helped me visualize exactly what my home needed. Couldn't be happier!",
    author: "David L.",
    location: "Lakewood Ranch",
    service: "Duct Replacement",
    date: "June 2023"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
             Beautiful Installs, <br/> Loved by Homeowners
           </h2>
           <p className="text-gray-500 text-lg font-light">
             Don't just take our word for it – see why your neighbors chose Roman's for their most important investment.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
               <div className="mb-6 border-b border-gray-100 pb-6">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">{review.source}</p>
                  <div className="flex justify-between items-center">
                     <span className="font-bold text-black text-sm uppercase">{review.title}</span>
                  </div>
               </div>
               
               <div className="flex text-[#E31E24] mb-4 gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
               </div>

               <p className="text-gray-600 text-sm leading-relaxed italic mb-8 flex-grow">
                 “{review.text}”
               </p>

               <div className="mt-auto">
                  <p className="font-black text-black">{review.author}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{review.location}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                     <span>{review.service}</span>
                     <span>{review.date}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};