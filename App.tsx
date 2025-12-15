import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { Header } from './components/Header';
import { ChatBar } from './components/ChatBar';
import { LegalFooter, PrivacyPolicyModal, TermsOfUseModal } from './components/LegalFooter';
import { generateSessionId, sendMessageToAgent } from './services/chatService';
import { Tab, Message } from './types';
import { Loader2 } from 'lucide-react';

// Lazy Load Components with Named Export handling
const TabHome = lazy(() => import('./components/TabHome').then(module => ({ default: module.TabHome })));
const TabAbout = lazy(() => import('./components/TabAbout').then(module => ({ default: module.TabAbout })));
const TabServices = lazy(() => import('./components/TabServices').then(module => ({ default: module.TabServices })));
const ChatOverlay = lazy(() => import('./components/ChatOverlay').then(module => ({ default: module.ChatOverlay })));

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [sessionId] = useState<string>(generateSessionId());
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // Modal States
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Scroll Container Ref
  const mainRef = useRef<HTMLElement>(null);

  const handleTabChange = (tab: Tab) => {
    if (isChatOpen) {
      setIsChatOpen(false);
    }
    setActiveTab(tab);
    // Scroll the main container to top, not the window
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleSendMessage = async (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsChatOpen(true);
    setIsTyping(true);

    const responseText = await sendMessageToAgent(text, sessionId);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  // Mobile swipe gesture simulation
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isChatOpen) return;

    // INVERTED SWIPE LOGIC
    // Previous: Left Swipe (> 100) -> Next.
    // New: Right Swipe (< -100) -> Next (Home -> About -> Services).
    
    const swipeDistance = touchStart - touchEnd;

    // Swipe Right (Move Forward)
    if (swipeDistance < -100) { 
      if (activeTab === Tab.HOME) handleTabChange(Tab.ABOUT);
      else if (activeTab === Tab.ABOUT) handleTabChange(Tab.SERVICES);
    }

    // Swipe Left (Move Backward)
    if (swipeDistance > 100) { 
      if (activeTab === Tab.SERVICES) handleTabChange(Tab.ABOUT);
      else if (activeTab === Tab.ABOUT) handleTabChange(Tab.HOME);
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-slate-200 font-sans overflow-hidden">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content Area - Constrained Max Width 1200px */}
      <main 
        ref={mainRef}
        className="flex-1 overflow-y-auto no-scrollbar pt-[130px] md:pt-[80px] relative bg-slate-50 max-w-[1200px] mx-auto w-full shadow-2xl border-x border-slate-200"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Suspense fallback={
          <div className="flex items-center justify-center h-full w-full bg-slate-50">
             <Loader2 className="animate-spin text-blue-900 opacity-30" size={48} strokeWidth={1} />
          </div>
        }>
            <div className={isChatOpen ? 'hidden' : 'block'}>
              <div key={activeTab} className="animate-tab-fade">
                {activeTab === Tab.HOME && <TabHome />}
                {activeTab === Tab.ABOUT && <TabAbout />}
                {activeTab === Tab.SERVICES && <TabServices />}
              </div>
            </div>

            {isChatOpen && (
              <ChatOverlay 
                messages={messages} 
                isTyping={isTyping} 
                onClose={handleCloseChat}
              />
            )}
        </Suspense>
      </main>

      <LegalFooter 
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
      />
      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfUseModal onClose={() => setShowTerms(false)} />}

      <ChatBar 
        onSendMessage={handleSendMessage} 
        isChatOpen={isChatOpen} 
        isLoading={isTyping}
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
      />
    </div>
  );
};

export default App;