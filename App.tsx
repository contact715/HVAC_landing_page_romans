import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatingsStrip } from './components/RatingsStrip';
import { Features } from './components/Features'; // Now acts as "Value Props" + "Process"
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { COMPANY_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white antialiased font-sans text-gray-900 selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* The detailed review strip */}
        <RatingsStrip />
        
        {/* "Your Forever Comfort" (3 Cols) and "Process" (4 Steps) */}
        <Features />
        
        {/* "Everything You Need" List */}
        <Services />

        {/* "Beautiful Remodels" / Reviews Grid */}
        <Testimonials />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Bottom CTA matching GVD */}
        <section className="bg-black py-24 text-center px-4">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
             Love Your Home Comfort <br/> for Years to Come
           </h2>
           <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light">
             From first calculation to final install—done right, every step.
           </p>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#quote" className="bg-[#E31E24] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Get My Free System Estimate
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="bg-transparent border border-white text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Or Speak with an Expert
              </a>
           </div>
        </section>

      </main>
      
      <Footer />
      <ChatWidget />

      {/* Floating Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href={`tel:${COMPANY_INFO.phone}`} className="w-full flex items-center justify-center bg-[#E31E24] text-white font-bold py-4 rounded-none uppercase tracking-widest text-sm shadow-lg">
          Call (941) 208-2008
        </a>
      </div>
    </div>
  );
};

export default App;