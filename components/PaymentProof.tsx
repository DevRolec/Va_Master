import React from 'react';
import { Bell } from 'lucide-react';

export const PaymentProof: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl max-w-sm mx-auto shadow-inner">
      <div className="bg-white rounded-lg p-3 shadow-sm mb-3 flex items-center gap-3 animate-pulse">
        <div className="bg-green-100 p-2 rounded-full text-green-600">
          <Bell size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500">Just now • Payoneer</p>
          <p className="text-sm font-bold text-gray-800">You received a payment of $450.00</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3 opacity-75">
         <div className="bg-blue-100 p-2 rounded-full text-blue-600">
          <Bell size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500">2h ago • Upwork</p>
          <p className="text-sm font-bold text-gray-800">Contract started: $25.00/hr</p>
        </div>
      </div>
    </div>
  );
};