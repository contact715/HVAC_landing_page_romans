
import React from 'react';
import { Star } from 'lucide-react';

export const RatingsStrip: React.FC = () => {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20 mb-12">
      <div className="bg-white rounded-2xl md:rounded-full shadow-2xl border border-gray-100 py-5 px-6 md:px-10 flex flex-nowrap overflow-x-auto md:justify-around items-center gap-8 no-scrollbar">
        
        {/* Total Rating A+ */}
        <div className="flex items-center gap-3 flex-shrink-0">
             <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-xl shadow-sm">
                 A+
             </div>
             <div>
                 <p className="text-xs font-bold text-gray-900">Total Rating</p>
                 <div className="flex items-center gap-1">
                     <span className="font-black text-lg text-gray-900">5.0</span>
                     <div className="flex text-green-600">
                         <Star className="w-3.5 h-3.5 fill-current" />
                         <Star className="w-3.5 h-3.5 fill-current" />
                         <Star className="w-3.5 h-3.5 fill-current" />
                         <Star className="w-3.5 h-3.5 fill-current" />
                         <Star className="w-3.5 h-3.5 fill-current" />
                     </div>
                 </div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Based on 1264+ reviews</p>
             </div>
        </div>

        <div className="h-10 w-px bg-gray-200 hidden xl:block flex-shrink-0"></div>

        {/* Google */}
        <div className="flex items-center gap-3 flex-shrink-0">
             <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100">
                 {/* Simple G representation */}
                 <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
             </div>
             <div>
                 <p className="text-[10px] font-bold text-gray-500">Google Rating</p>
                 <div className="flex items-center gap-1">
                     <span className="font-black text-gray-900">4.9</span>
                     <div className="flex text-yellow-400">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                     </div>
                 </div>
                 <p className="text-[10px] text-gray-400">1908+ reviews</p>
             </div>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-3 flex-shrink-0">
             <div className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-full text-white font-bold text-2xl shadow-sm">
                 f
             </div>
             <div>
                 <p className="text-[10px] font-bold text-gray-500">Facebook Rating</p>
                 <div className="flex items-center gap-1">
                     <span className="font-black text-gray-900">4.9</span>
                     <div className="flex text-[#1877F2]">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                     </div>
                 </div>
                 <p className="text-[10px] text-gray-400">274+ reviews</p>
             </div>
        </div>

        {/* Yelp */}
        <div className="flex items-center gap-3 flex-shrink-0">
             <div className="w-10 h-10 flex items-center justify-center bg-[#FF1A1A] rounded-full text-white font-bold text-lg shadow-sm italic font-serif">
                 Y!
             </div>
             <div>
                 <p className="text-[10px] font-bold text-gray-500">Yelp Rating</p>
                 <div className="flex items-center gap-1">
                     <span className="font-black text-gray-900">4.9</span>
                     <div className="flex text-[#FF1A1A]">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                     </div>
                 </div>
                 <p className="text-[10px] text-gray-400">137+ reviews</p>
             </div>
        </div>

         {/* Angi */}
        <div className="flex items-center gap-3 flex-shrink-0">
             <div className="w-10 h-10 flex items-center justify-center text-[#28BB44] font-black text-xl bg-green-50 rounded-full border border-green-100 shadow-sm">
                 A
             </div>
             <div>
                 <p className="text-[10px] font-bold text-gray-500">Angi Rating</p>
                 <div className="flex items-center gap-1">
                     <span className="font-black text-gray-900">4.9</span>
                     <div className="flex text-[#28BB44]">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                     </div>
                 </div>
                 <p className="text-[10px] text-gray-400">450+ reviews</p>
             </div>
        </div>

      </div>
    </div>
  );
};
