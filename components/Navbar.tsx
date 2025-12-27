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
      {/* Top Trust Bar - Matte Black */}
      <div className="bg-black text-white py-3 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/90">
              <Tag className="w-3 h-3 text-[#E31E24]" />
              {COMPANY_INFO.offer}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <Shield className="w-3 h-3" />
              {COMPANY_INFO.license}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-[#E31E24]" />
              24/7 Emergency Service
            </span>
             <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#E31E24]" />
              Sarasota & Manatee Counties
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation - White */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-lg py-3' : 'py-5 border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
               <div className="flex items-center gap-3">
                  {/* Minimalist Logo Icon */}
                  <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-black text-xl italic">
                    R
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-2xl font-black text-black uppercase tracking-tighter">Roman's</span>
                    <span className="text-sm font-bold text-[#E31E24] uppercase tracking-[0.2em] ml-0.5">Service</span>
                  </div>
               </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-black hover:text-[#E31E24] font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-8">
                <div className="text-right hidden xl:block">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Anytime</p>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-black text-black hover:text-[#E31E24] transition-colors block leading-none">
                        {COMPANY_INFO.phone}
                    </a>
                </div>
                <a 
                    href="#quote"
                    className="bg-[#E31E24] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
                >
                    Book Online
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <a href={`tel:${COMPANY_INFO.phone}`} className="w-10 h-10 bg-gray-100 flex items-center justify-center text-black">
                 <Phone className="w-5 h-5" />
               </a>
               <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 pt-28 px-6 overflow-y-auto">
           <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-black pb-4 border-b border-gray-100 uppercase tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <div className="pt-6 space-y-4">
                <div className="bg-gray-50 p-4 border border-gray-100 text-center">
                  <span className="block text-[#E31E24] font-black uppercase text-xs tracking-widest mb-1">Limited Time Offer</span>
                  <span className="block text-black font-bold text-lg">{COMPANY_INFO.offer}</span>
                </div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="block w-full bg-black text-white py-4 font-bold text-center uppercase tracking-widest text-sm">
                    Call {COMPANY_INFO.phone}
                </a>
                <a href="#quote" onClick={() => setIsOpen(false)} className="block w-full bg-[#E31E24] text-white py-4 font-bold text-center uppercase tracking-widest text-sm">
                    Schedule Service
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};