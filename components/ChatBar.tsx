import React, { useState, useRef } from 'react';
import { Send, Facebook, Instagram, CheckSquare, Square } from 'lucide-react';

interface ChatBarProps {
  onSendMessage: (text: string) => void;
  isChatOpen: boolean;
  isLoading: boolean;
}

export const ChatBar: React.FC<ChatBarProps> = ({ onSendMessage, isChatOpen, isLoading }) => {
  const [inputText, setInputText] = useState('');
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!inputText.trim() || !hasAgreed || isLoading) return;
    onSendMessage(inputText);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const showTerms = isFocused || inputText.length > 0 || isChatOpen;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-md z-50 bg-white border-t border-x border-slate-200 shadow-none pb-safe">
      <div className="w-full">
        
        {/* Terms Checkbox Row */}
        {showTerms && !isChatOpen && (
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <button 
              onClick={() => setHasAgreed(!hasAgreed)}
              className="flex items-center gap-2 focus:outline-none hover:text-blue-900 transition-colors"
            >
              {hasAgreed ? 
                <CheckSquare size={14} className="text-blue-900" /> : 
                <Square size={14} className="text-slate-400" />
              }
              <span className="tracking-wide">אני מאשר/ת את תנאי השימוש</span>
            </button>
          </div>
        )}

        {/* Input Row - RTL Order: [Send] [Input] [Icons] */}
        <div className="flex items-stretch h-14">
          
          {/* Send Button - Right Side (First in RTL) */}
          <button
            onClick={handleSend}
            disabled={!hasAgreed || !inputText.trim() || isLoading}
            className={`px-6 h-full transition-all duration-300 flex items-center justify-center border-l border-slate-100 ${
              hasAgreed && inputText.trim() && !isLoading
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-white text-slate-300 cursor-not-allowed'
            }`}
          >
            <Send size={20} strokeWidth={1.5} className={isLoading ? 'animate-pulse' : ''} />
          </button>

          {/* Text Input - Middle */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                if (inputText.length === 0) setIsFocused(false);
              }}
              onKeyDown={handleKeyPress}
              placeholder="כתוב הודעה..."
              className="w-full h-full bg-white text-slate-900 px-4 focus:outline-none placeholder-slate-400 font-light text-right"
              dir="rtl"
            />
          </div>

          {/* Social Icons - Left Side (Last in RTL) */}
          <div className="flex items-center gap-4 px-4 bg-white border-r border-slate-100">
            <a 
              href="https://wa.me/972585119298?text=היי%20אשמח%20לקבל%20פרטים%20נוספים" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#25D366] transition-colors"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
          </div>

        </div>
      </div>
    </div>
  );
};