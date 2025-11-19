import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    location: "Sarasota, FL",
    content: "The team was incredible. They replaced our entire AC unit in one day, cleaned up perfectly, and the house has never been cooler.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    location: "Bradenton, FL",
    content: "Fair pricing and honest advice. Another company tried to sell me a new system, but Roman's Service fixed my existing one for a fraction of the cost.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Venice, FL",
    content: "Process was smooth. The new energy-efficient furnace lowered our utility bill immediately. Highly recommend this crew.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="flex items-center justify-center gap-2 mb-4">
                 <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                 </div>
                 <span className="text-lg font-bold text-gray-900">4.9/5 Average</span>
             </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Sarasota Loves Us.</h2>
            <p className="text-gray-500 font-medium">Join over 2,500 happy homeowners in the Florida Suncoast area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex mb-4 space-x-1 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">"{review.content}"</p>
              <div className="flex items-center justify-between">
                   <div>
                       <h4 className="font-bold text-gray-900">{review.name}</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mt-1">{review.location}</p>
                   </div>
                   <CheckCircle className="w-5 h-5 text-green-500 opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};