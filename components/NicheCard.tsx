import React from 'react';
import { NicheItem } from '../types';
import { Briefcase, Instagram, Monitor, PenTool, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase size={32} />,
  instagram: <Instagram size={32} />,
  monitor: <Monitor size={32} />,
  "pen-tool": <PenTool size={32} />
};

export const NicheCard: React.FC<{ niche: NicheItem }> = ({ niche }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-gold hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-goldDark flex items-center justify-center mb-6">
        {iconMap[niche.icon] || <Briefcase size={32} />}
      </div>
      
      <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{niche.title}</h3>
      <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{niche.description}</p>
      
      <div className="bg-gray-50 p-3 rounded-lg mb-4">
        <p className="text-xs text-gray-500 uppercase font-bold">Potential Earnings</p>
        <p className="text-green-600 font-bold text-lg">{niche.avgEarnings}</p>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-2 font-semibold">Typical Tasks:</p>
        <ul className="space-y-2">
          {niche.tasks.map((task, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle size={14} className="text-brand-green shrink-0" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};