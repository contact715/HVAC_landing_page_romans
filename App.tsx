
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatingsStrip } from './components/RatingsStrip';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white antialiased font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <RatingsStrip />
        <Features />
        <Services />
        
        {/* Minimal Flat Banner */}
        <section className="bg-brand-accent py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-6">Need Urgent Repair?</h2>
             <p className="text-white/80 mb-8 text-lg font-medium">Our technicians are on standby 24/7.</p>
             <a href={`tel:${COMPANY_INFO.phone}`} className="bg-white text-brand-accent px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors inline-flex items-center">
                Call {COMPANY_INFO.phone}
             </a>
          </div>
        </section>

        <Testimonials />
        <FAQ />
      </main>
      
      <Footer />
      <ChatWidget />

      {/* Floating Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-40">
        <a href={`tel:${COMPANY_INFO.phone}`} className="w-full flex items-center justify-center bg-green-600 text-white font-bold py-3 rounded-lg">
          Call Now
        </a>
      </div>
    </div>
  );
};

export default App;
