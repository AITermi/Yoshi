import React, { useState } from 'react';
import { Send, Facebook, CheckSquare, Square, Sparkles } from 'lucide-react';

interface ChatBarProps {
  onSendMessage: (text: string) => void;
  isChatOpen: boolean;
  isLoading: boolean;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const QUICK_REPLIES = [
  "מעוניין במעטפת ליווי מלאה",
  "מעוניין בליווי חלקי",
  "יש לי ספק",
  "איך מאשרים מוצרים ליבוא ?",
  "איך מתחילים ?"
];

export const ChatBar: React.FC<ChatBarProps> = ({ onSendMessage, isChatOpen, isLoading, onOpenPrivacy, onOpenTerms }) => {
  const [inputText, setInputText] = useState('');
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleSend = () => {
    if (!inputText.trim() || !hasAgreed || isLoading) return;
    onSendMessage(inputText);
    setInputText('');
  };

  const handleQuickReply = (text: string) => {
    if (!hasAgreed || isLoading) return;
    onSendMessage(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] z-50 bg-slate-100 border-t border-slate-200 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="w-full flex flex-col">
        
        {/* Terms Checkbox - Visible only if chat is not open */}
        {!isChatOpen && (
          <div className="px-4 py-2 bg-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 animate-in fade-in duration-300 border-b border-slate-200/50">
            <div 
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => setHasAgreed(!hasAgreed)}
            >
              <button 
                type="button"
                className="focus:outline-none hover:text-blue-900 transition-colors"
                aria-label="Toggle agreement"
              >
                {hasAgreed ? 
                  <CheckSquare size={16} className="text-blue-900" /> : 
                  <Square size={16} className="text-slate-400 group-hover:text-slate-600" />
                }
              </button>
              <span className={`tracking-wide transition-colors ${hasAgreed ? 'text-blue-900 font-medium' : ''}`}>
                אני מאשר שקראתי את{' '}
                <span 
                    onClick={(e) => { e.stopPropagation(); onOpenTerms(); }} 
                    className="underline cursor-pointer hover:text-blue-900 hover:font-bold"
                >
                    תקנון השימוש
                </span>{' '}
                ו-
                <span 
                    onClick={(e) => { e.stopPropagation(); onOpenPrivacy(); }} 
                    className="underline cursor-pointer hover:text-blue-900 hover:font-bold"
                >
                    הפרטיות
                </span>
              </span>
            </div>
          </div>
        )}

        {/* Quick Replies - Visible only if Agreed AND Chat NOT open */}
        {!isChatOpen && hasAgreed && (
            <div className="w-full overflow-x-auto no-scrollbar py-3 px-3 flex gap-2 items-center bg-slate-50/50">
                {QUICK_REPLIES.map((reply, index) => (
                    <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        disabled={isLoading}
                        className="shrink-0 bg-white border border-blue-100 text-blue-900 text-xs px-4 py-2 rounded-full shadow-sm hover:bg-blue-900 hover:text-white hover:border-blue-900 hover:shadow-md transition-all duration-300 animate-in zoom-in-50 slide-in-from-bottom-2 fill-mode-forwards flex items-center gap-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <Sparkles size={12} className="opacity-50" />
                        {reply}
                    </button>
                ))}
            </div>
        )}

        {/* Input Row */}
        <div className="flex items-end gap-2 px-3 pb-3 pt-2 bg-slate-100">
          
          {/* Send Button - Right Side (First in RTL DOM) */}
          <button
            onClick={handleSend}
            disabled={!hasAgreed || !inputText.trim() || isLoading}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 mb-0.5 ${
              hasAgreed && inputText.trim() && !isLoading
                ? 'bg-blue-900 text-white hover:bg-blue-800 hover:scale-105 active:scale-95' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Send size={20} className={isLoading ? 'animate-pulse' : '-ml-0.5 mt-0.5'} strokeWidth={2} />
          </button>

          {/* Input Field - Middle */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={!hasAgreed}
              placeholder={hasAgreed ? "שאל את ה-AI שלנו..." : "יש לאשר את התקנון כדי להתחיל"}
              className={`w-full bg-white text-slate-900 px-5 py-3 rounded-[24px] focus:outline-none font-light text-right shadow-sm border transition-all ${
                  hasAgreed 
                  ? 'placeholder-slate-400 border-transparent focus:border-blue-200' 
                  : 'placeholder-slate-300 border-slate-100 bg-slate-50 cursor-not-allowed'
              }`}
              dir="rtl"
            />
          </div>

          {/* Social Icons - Left Side (Last in RTL DOM) */}
          <div className="flex items-center gap-3 pr-1 mb-3">
            <a 
              href="https://wa.me/972585119298?text=היי%20אשמח%20לקבל%20פרטים%20נוספים" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#25D366] transition-colors"
              title="WhatsApp"
            >
               <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61576446814400" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};