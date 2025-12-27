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
      <div className={`bg-white shadow-2xl p-10 text-center border border-gray-100 ${className}`}>
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-black mb-4">Request Received</h3>
        <p className="text-gray-500 mb-8 font-light">
          We'll call you at <span className="font-bold text-black">{formData.phone}</span> within 15 minutes.
        </p>
        <button onClick={() => setSubmitted(false)} className="text-[#E31E24] font-bold underline text-xs uppercase tracking-widest">
          Start New Request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white shadow-2xl border border-gray-100 ${className}`}>
      {/* Header - Optimized for High Conversion with Offer */}
      <div className="bg-[#E31E24] p-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-serif font-bold text-white mb-2">
              $1,500 OFF
            </h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              New System Installations
            </p>
            <div className="inline-block border-t border-white/20 pt-3 w-full max-w-[200px]">
                <p className="text-white text-sm font-medium">
                    Or Schedule Fast Repair Below
                </p>
            </div>
          </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div>
            <label htmlFor="service" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Service Type</label>
            <div className="relative">
                <select 
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-4 bg-gray-50 border-0 text-black font-bold focus:ring-2 focus:ring-black outline-none appearance-none transition-all"
                >
                  <option value="install">Claim $1,500 OFF New System</option>
                  <option value="repair">AC Repair / Diagnostics</option>
                  <option value="maintenance">Routine Maintenance</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-black"></div>
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
                    className="block w-full px-4 py-4 bg-gray-50 border-0 text-black placeholder-gray-400 font-medium focus:ring-2 focus:ring-black outline-none transition-all"
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
                    className="block w-full px-4 py-4 bg-gray-50 border-0 text-black placeholder-gray-400 font-medium focus:ring-2 focus:ring-black outline-none transition-all"
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
                    className={`block w-full px-4 py-4 bg-gray-50 border-0 text-black placeholder-gray-400 font-medium focus:ring-2 focus:ring-black outline-none transition-all ${zipError ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Zip Code"
                />
            </div>
        </div>

        {zipError && (
          <div className="flex items-center text-red-600 text-xs font-bold bg-red-50 p-3">
             <AlertCircle className="w-4 h-4 mr-2" /> {zipError}
          </div>
        )}

        <Button type="submit" fullWidth disabled={loading} className="bg-black hover:bg-gray-800 text-white h-16 shadow-none rounded-none">
          {loading ? 'Sending...' : (
             <span className="flex items-center justify-center">
               Check Availability <ArrowRight className="ml-2 w-5 h-5" />
             </span>
          )}
        </Button>
        
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            No spam. Your data is safe.
        </p>
      </form>
    </div>
  );
};