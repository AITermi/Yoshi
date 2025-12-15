import React from 'react';
import { Home, Info, Ship } from 'lucide-react';
import { Tab } from '../types';

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-md z-30 bg-white text-slate-900 shadow-sm transition-all duration-300 border-x border-slate-200">
      <div className="w-full">
        {/* Top Row: Brand - Fixed Height 76px */}
        <div className="h-[76px] px-6 flex items-center justify-center border-b border-slate-50 relative z-20 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-900 flex items-center justify-center shadow-sm">
              <span className="font-serif font-black text-white text-xl">Y</span>
            </div>
            <div>
              <h1 className="font-light text-2xl tracking-[0.2em] uppercase leading-none text-blue-900">YOSHI</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] leading-none mt-1">Import Solutions</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Tabs - Fixed Height ~54px */}
        <nav className="h-[54px] flex items-center justify-center gap-8 px-6 bg-white/95 backdrop-blur-sm">
          <button
            onClick={() => onTabChange(Tab.HOME)}
            className={`group flex flex-col items-center justify-center h-full relative px-2 transition-all duration-300 ${
              activeTab === Tab.HOME ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <Home size={16} strokeWidth={2} />
              <span className="text-xs font-bold tracking-widest uppercase">בית</span>
            </div>
            <span className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 ${activeTab === Tab.HOME ? 'bg-blue-900' : 'bg-transparent'}`} />
          </button>

          <button
            onClick={() => onTabChange(Tab.ABOUT)}
            className={`group flex flex-col items-center justify-center h-full relative px-2 transition-all duration-300 ${
              activeTab === Tab.ABOUT ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
             <div className="flex items-center gap-2">
              <Info size={16} strokeWidth={2} />
              <span className="text-xs font-bold tracking-widest uppercase">אודות</span>
            </div>
            <span className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 ${activeTab === Tab.ABOUT ? 'bg-blue-900' : 'bg-transparent'}`} />
          </button>

          <button
            onClick={() => onTabChange(Tab.SERVICES)}
            className={`group flex flex-col items-center justify-center h-full relative px-2 transition-all duration-300 ${
              activeTab === Tab.SERVICES ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className="flex items-center gap-2">
              <Ship size={16} strokeWidth={2} />
              <span className="text-xs font-bold tracking-widest uppercase">שירותים</span>
            </div>
            <span className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 ${activeTab === Tab.SERVICES ? 'bg-blue-900' : 'bg-transparent'}`} />
          </button>
        </nav>
      </div>
    </header>
  );
};