import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatBar } from './components/ChatBar';
import { TabHome } from './components/TabHome';
import { TabAbout } from './components/TabAbout';
import { TabServices } from './components/TabServices';
import { ChatOverlay } from './components/ChatOverlay';
import { LegalFooter } from './components/LegalFooter';
import { generateSessionId, sendMessageToAgent } from './services/chatService';
import { Tab, Message } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [sessionId] = useState<string>(generateSessionId());
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (isChatOpen) {
      setIsChatOpen(false);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

    if (touchStart - touchEnd > 100) {
      if (activeTab === Tab.HOME) setActiveTab(Tab.ABOUT);
      if (activeTab === Tab.ABOUT) setActiveTab(Tab.SERVICES);
    }

    if (touchStart - touchEnd < -100) {
      if (activeTab === Tab.SERVICES) setActiveTab(Tab.ABOUT);
      if (activeTab === Tab.ABOUT) setActiveTab(Tab.HOME);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-200 font-sans">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content Area - Constrained Max Width */}
      <main 
        className="flex-1 overflow-y-auto no-scrollbar pt-[130px] relative bg-slate-50 max-w-screen-md mx-auto w-full shadow-2xl border-x border-slate-200"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={isChatOpen ? 'hidden' : 'block animate-fade-in'}>
          {activeTab === Tab.HOME && <TabHome />}
          {activeTab === Tab.ABOUT && <TabAbout />}
          {activeTab === Tab.SERVICES && <TabServices />}
        </div>

        {isChatOpen && (
          <ChatOverlay 
            messages={messages} 
            isTyping={isTyping} 
            onClose={handleCloseChat}
          />
        )}
      </main>

      <LegalFooter />

      <ChatBar 
        onSendMessage={handleSendMessage} 
        isChatOpen={isChatOpen} 
        isLoading={isTyping}
      />
    </div>
  );
};

export default App;