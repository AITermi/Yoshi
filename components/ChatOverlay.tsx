import React, { useEffect, useRef, useState } from 'react';
import { Message } from '../types';
import { Bot, User, ArrowRight, X } from 'lucide-react';

interface ChatOverlayProps {
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
}

const TypewriterMessage: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => text.substring(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, 15);

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export const ChatOverlay: React.FC<ChatOverlayProps> = ({ messages, isTyping, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, messages.length]);

  return (
    // Fixed position, starting from top-[76px] to allow Logo (76px height) to be visible.
    // Centered horizontally with max-width to match main app layout.
    <div className="fixed top-[76px] bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-md z-40 bg-slate-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 duration-300 border-x border-slate-200 shadow-2xl">
      
      {/* Back Button / Header for Chat */}
      <div className="w-full h-[54px] px-6 flex items-center justify-between bg-white border-b border-slate-100 shadow-sm shrink-0">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-900 transition-colors group"
        >
          <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
            <ArrowRight size={18} className="text-slate-600 group-hover:text-blue-900" />
          </div>
          <span className="text-sm font-bold tracking-wide">חזרה לאתר</span>
        </button>

        <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">AI Assistant</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4 pb-20 bg-slate-50/50">
        <div className="w-full flex flex-col justify-end min-h-full pb-4">
          <div className="space-y-6">
            {messages.map((msg, idx) => {
              const isLatestBotMessage = msg.sender === 'bot' && idx === messages.length - 1;

              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-3 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 flex items-center justify-center shrink-0 border shadow-sm rounded-none ${
                      msg.sender === 'user' 
                        ? 'bg-blue-900 border-blue-900 text-white' 
                        : 'bg-white border-slate-200 text-blue-900'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  
                  <div 
                    className={`max-w-[85%] px-5 py-4 text-sm font-light leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-white border border-slate-200 text-slate-900 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl' 
                        : 'bg-blue-50 border border-blue-100 text-slate-800 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl'
                    }`}
                  >
                    {isLatestBotMessage ? (
                       <TypewriterMessage text={msg.text} />
                    ) : (
                      msg.text
                    )}
                    <div className="mt-2 text-[9px] uppercase tracking-wider opacity-40 text-left">
                      {msg.timestamp.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-end gap-3">
                <div className="w-8 h-8 bg-white border border-slate-200 text-blue-900 flex items-center justify-center shrink-0 shadow-sm">
                  <Bot size={14} />
                </div>
                <div className="bg-white border border-slate-100 px-4 py-3 shadow-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-900/40 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-blue-900/40 animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-900/40 animate-pulse [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>
        </div>
      </div>
    </div>
  );
};