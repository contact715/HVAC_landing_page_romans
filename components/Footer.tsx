import React from 'react';
import { COMPANY_INFO, SERVICE_AREAS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1118] text-gray-400 py-16 border-t-4 border-[#E31E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div>
            <h3 className="text-2xl font-black text-white uppercase italic mb-6">
              Roman's <span className="text-[#E31E24]">Service</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Delivering honest, high-quality air conditioning and heating services to Florida homeowners.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-[#E31E24] transition-colors cursor-pointer text-white font-bold">fb</div>
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-[#E31E24] transition-colors cursor-pointer text-white font-bold">in</div>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Areas Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map(area => (
                <span key={area} className="bg-gray-800 text-xs px-3 py-1 rounded hover:bg-gray-700 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* License Col */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Credentials</h4>
             <p className="text-sm mb-2 font-mono text-gray-500">{COMPANY_INFO.license}</p>
             <p className="text-sm mb-4 text-gray-500">Bonded & Insured</p>
             <div className="p-4 bg-white/5 rounded border border-white/10">
                <p className="text-xs text-center">"Excellent service and fair prices. Highly recommended!"</p>
                <div className="flex justify-center mt-2 text-[#E31E24]">★★★★★</div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};