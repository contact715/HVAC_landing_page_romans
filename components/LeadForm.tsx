
import React, { useState } from 'react';
import { Button } from './Button';
import { SERVICE_ZIP_CODES, COMPANY_INFO } from '../constants';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface LeadFormProps {
  className?: string;
  title?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ className = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    service: 'repair'
  });
  const [zipError, setZipError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (id === 'zip') setZipError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZipError(null);
    const cleanZip = formData.zip.trim();
    
    // Basic zip validation simulation
    if (cleanZip.length === 5 && !SERVICE_ZIP_CODES.includes(cleanZip)) {
      setZipError("Currently serving Sarasota/Manatee only.");
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-xl shadow-2xl border-t-4 border-[#002855] p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-[#002855] mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-6">
          We'll call you at <span className="font-bold text-black">{formData.phone}</span> within 15 minutes to confirm your appointment.
        </p>
        <button onClick={() => setSubmitted(false)} className="text-[#E31E24] font-bold underline text-sm uppercase">
          Start New Request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200/50 ${className}`}>
      {/* Header - Optimized for High Conversion with Offer */}
      <div className="bg-[#E31E24] p-6 text-center relative overflow-hidden">
          {/* Subtle diagonal shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
              $1,500 OFF
            </h3>
            <p className="text-white/90 text-xs font-bold uppercase tracking-widest mb-3">
              New System Installations
            </p>
            <div className="inline-block border-t border-white/30 pt-2 w-full">
                <p className="text-white text-sm font-semibold">
                    Or Schedule Fast Repair Below
                </p>
            </div>
          </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        <div>
            <label htmlFor="service" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Service Type</label>
            <div className="relative">
                <select 
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 font-bold focus:border-[#002855] focus:ring-1 focus:ring-[#002855] outline-none appearance-none transition-all"
                >
                  <option value="install">Claim $1,500 OFF New System</option>
                  <option value="repair">AC Repair / Diagnostics</option>
                  <option value="maintenance">Routine Maintenance</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-500"></div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
            <div>
                <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 font-semibold focus:border-[#002855] focus:ring-1 focus:ring-[#002855] outline-none transition-all"
                    placeholder="Full Name"
                />
            </div>
            <div>
                <input 
                    type="tel" 
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 font-semibold focus:border-[#002855] focus:ring-1 focus:ring-[#002855] outline-none transition-all"
                    placeholder="Phone Number"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    id="zip"
                    required
                    maxLength={5}
                    value={formData.zip}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-900 placeholder-gray-400 font-semibold focus:border-[#002855] focus:ring-1 focus:ring-[#002855] outline-none transition-all ${zipError ? 'bg-red-50 border-red-300' : ''}`}
                    placeholder="Zip Code"
                />
            </div>
        </div>

        {zipError && (
          <div className="flex items-center text-red-600 text-xs font-bold bg-red-50 p-3 rounded">
             <AlertCircle className="w-4 h-4 mr-2" /> {zipError}
          </div>
        )}

        <Button type="submit" fullWidth disabled={loading} className="bg-[#002855] hover:bg-[#001f40] text-white h-14 shadow-xl">
          {loading ? 'Sending...' : (
             <span className="flex items-center justify-center">
               Check Availability <ArrowRight className="ml-2 w-5 h-5" />
             </span>
          )}
        </Button>
        
        <p className="text-center text-xs text-gray-400 font-medium">
            No spam. Your data is safe with us.
        </p>
      </form>
    </div>
  );
};
