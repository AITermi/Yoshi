export enum Tab {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services'
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatSession {
  sessionId: string;
  messages: Message[];
  isTyping: boolean;
}

export interface WebhookPayload {
  sessionId: string;
  action: string;
  chatInput: string;
}

export interface WebhookResponse {
  output?: string;
  text?: string;
  message?: string;
  // Dynamic handling for various agent responses
  [key: string]: any; 
}