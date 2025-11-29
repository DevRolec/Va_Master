import React from 'react';
import { Testimonial } from '../types';
import { Star, CheckCircle } from 'lucide-react';

export const TestimonialCard: React.FC<{ data: Testimonial }> = ({ data }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between relative overflow-hidden">
      {/* Platform Badge */}
      {data.platform && (
        <div className="absolute top-0 right-0 bg-brand-green/10 text-brand-green text-xs font-bold px-3 py-1 rounded-bl-xl">
          Verified {data.platform}
        </div>
      )}
      
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={data.image} 
            alt={data.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
          />
          <div>
            <h4 className="font-bold text-gray-900 leading-tight">{data.name}</h4>
            <p className="text-sm text-gray-500">{data.role}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3 text-yellow-400">
          {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
        </div>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed italic">
          "{data.content}"
        </p>
      </div>

      {data.earnings && (
        <div className="mt-auto bg-green-50 p-3 rounded-lg border border-green-100 flex items-center justify-between">
          <span className="text-green-800 text-xs font-bold uppercase tracking-wider">Earnings Proof</span>
          <span className="text-brand-green font-extrabold flex items-center gap-1">
            <CheckCircle size={14} />
            {data.earnings}
          </span>
        </div>
      )}
    </div>
  );
};