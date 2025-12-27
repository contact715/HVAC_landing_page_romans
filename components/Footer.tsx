import React from 'react';
import { COMPANY_INFO, SERVICE_AREAS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div>
            <h3 className="text-3xl font-black text-white uppercase italic mb-8 tracking-tighter">
              Roman's <span className="text-[#E31E24]">Service</span>
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Delivering honest, high-quality air conditioning and heating services to Florida homeowners since 2005.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#E31E24] transition-colors cursor-pointer text-white font-bold text-xs">FB</div>
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#E31E24] transition-colors cursor-pointer text-white font-bold text-xs">IG</div>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Areas Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map(area => (
                <span key={area} className="bg-white/5 text-[10px] uppercase font-bold tracking-wide px-3 py-2 text-gray-400 hover:bg-white/10 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* License Col */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Credentials</h4>
             <p className="text-sm mb-2 font-mono text-gray-400">{COMPANY_INFO.license}</p>
             <p className="text-sm mb-6 text-gray-400">Bonded & Insured</p>
             <div className="p-6 bg-white/5 border border-white/5">
                <p className="text-xs text-center italic text-gray-300">"Excellent service and fair prices. Highly recommended!"</p>
                <div className="flex justify-center mt-3 text-[#E31E24] gap-1">★★★★★</div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};