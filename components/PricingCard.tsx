import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const PricingCard: React.FC = () => {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-gold max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-300">
      {/* Ribbon */}
      <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-8 py-1 rotate-45 translate-x-8 translate-y-4 shadow-md z-10 animate-pulse">
        85% OFF
      </div>

      <div className="bg-brand-dark p-6 text-center text-white relative">
        <h3 className="text-xl font-heading font-bold mb-2 uppercase tracking-widest text-gray-400">Regular Price</h3>
        <p className="text-2xl line-through text-gray-500 decoration-red-500 decoration-2">₦100,000</p>
        
        <div className="mt-4 mb-2">
           <span className="bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-sm font-bold uppercase animate-pulse">
             Flash Sale
           </span>
        </div>

        <h2 className="text-5xl font-extrabold text-white mt-2">
          ₦15,000
          <span className="text-xl font-normal text-gray-400 block mt-1">one-time payment</span>
        </h2>
      </div>

      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {[
            "Full 1-Month Mentorship Access",
            "4 Live Coaching Calls",
            "Lifetime Access to Recordings",
            "Client Acquisition Templates",
            "Private Support Community",
            "Certificate of Completion"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        {/* Button is purely visual here, parent component handles the click event for the modal */}
        <div className="pointer-events-none">
            <Button variant="primary" fullWidth className="mb-4">
            ENROLL NOW FOR ₦15K
            </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
          <ShieldCheck size={16} />
          <span>30-Day Money Back Guarantee</span>
        </div>
      </div>
    </div>
  );
};