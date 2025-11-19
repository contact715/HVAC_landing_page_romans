
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, Shield, MapPin, Tag } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Top Trust Bar - Dark Navy */}
      <div className="bg-[#002855] text-white py-2.5 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-bold tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-yellow-400">
              <Tag className="w-3.5 h-3.5" />
              {COMPANY_INFO.offer}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Shield className="w-3.5 h-3.5" />
              {COMPANY_INFO.license}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E31E24]" />
              24/7 Emergency Service
            </span>
             <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
              Sarasota & Manatee Counties
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation - White */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
               <div className="flex items-center gap-2">
                  {/* Simulated Logo Icon */}
                  <div className="w-10 h-10 bg-[#002855] rounded flex items-center justify-center text-white font-black text-xl italic border-b-4 border-[#E31E24]">
                    R
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-2xl font-black text-[#002855] uppercase tracking-tighter">Roman's</span>
                    <span className="text-sm font-bold text-[#E31E24] uppercase tracking-widest">Service</span>
                  </div>
               </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-800 hover:text-[#E31E24] font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
                <div className="text-right hidden xl:block">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us Anytime</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-black text-[#002855] hover:text-[#E31E24] transition-colors block leading-none">
                        {COMPANY_INFO.phone}
                    </a>
                </div>
                <a 
                    href="#quote"
                    className="bg-[#E31E24] text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    Book Online
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <a href={`tel:${COMPANY_INFO.phone}`} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#002855]">
                 <Phone className="w-5 h-5" />
               </a>
               <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#002855] focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 pt-28 px-6 overflow-y-auto border-t border-gray-100">
           <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-[#002855] py-3 border-b border-gray-100 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <div className="pt-6 space-y-4">
                <div className="bg-red-50 p-3 rounded text-center border border-red-100">
                  <span className="block text-[#E31E24] font-black uppercase text-sm">Limited Time Offer</span>
                  <span className="block text-[#002855] font-bold">{COMPANY_INFO.offer}</span>
                </div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="block w-full bg-[#002855] text-white py-4 rounded font-bold text-center uppercase tracking-wide">
                    Call {COMPANY_INFO.phone}
                </a>
                <a href="#quote" onClick={() => setIsOpen(false)} className="block w-full bg-[#E31E24] text-white py-4 rounded font-bold text-center uppercase tracking-wide">
                    Schedule Service
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};
