
import React from 'react';
import { Star } from 'lucide-react';

interface RatingBlockProps {
  name: string;
  score: string;
  reviews: string;
  color?: string;
}

const RatingBlock: React.FC<RatingBlockProps> = ({ name, score, reviews, color = "text-yellow-400" }) => (
  <div className="text-center px-2 min-w-[140px]">
    <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-1">{name} Reviews</h4>
    <div className="flex justify-center items-center gap-1 mb-1">
        <span className="font-black text-xl text-gray-900">{score}/5</span>
    </div>
    <div className={`flex justify-center ${color} mb-1`}>
        {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
    </div>
    <p className="text-xs text-gray-400 font-medium">{reviews} Reviews</p>
  </div>
);

export const RatingsStrip: React.FC = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:divide-x divide-gray-100">
          
          <RatingBlock name="Yelp" score="4.6" reviews="102" color="text-red-600" />
          <RatingBlock name="Google" score="4.9" reviews="283" color="text-yellow-400" />
          <RatingBlock name="Facebook" score="5.0" reviews="65" color="text-[#1877F2]" />
          <RatingBlock name="Angie's List" score="5.0" reviews="95" color="text-green-500" />
          <RatingBlock name="Houzz" score="5.0" reviews="72" color="text-green-600" />
          <RatingBlock name="GuildQuality" score="4.8" reviews="331" color="text-orange-400" />

        </div>
      </div>
    </div>
  );
};
