import React from 'react';
import { Eye, Shield, FileText } from 'lucide-react';

export const LegalFooter: React.FC = () => {
  return (
    <>
      {/* Floating Accessibility Widget (Simulated) */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
        <button 
          className="bg-blue-600 text-white p-3 rounded-r-lg shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="תפריט נגישות"
        >
          <Eye size={24} />
        </button>
      </div>

      {/* Floating Legal Links (Bottom Left) */}
      <div className="fixed bottom-24 left-4 z-40 flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <div className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm cursor-pointer border border-gray-200" title="מדיניות פרטיות">
          <Shield size={16} className="text-slate-600" />
        </div>
        <div className="bg-white/80 backdrop-blur p-2 rounded-full shadow-sm cursor-pointer border border-gray-200" title="תנאי שימוש">
          <FileText size={16} className="text-slate-600" />
        </div>
      </div>
    </>
  );
};