import { WebhookPayload, WebhookResponse } from '../types';

const WEBHOOK_URL = 'https://clients.aitermi-agents.com/webhook/a337cbbc-cc54-4f71-9fbd-961fef29f669/chat';

export const generateSessionId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
};

export const sendMessageToAgent = async (text: string, sessionId: string): Promise<string> => {
  const payload: WebhookPayload = {
    sessionId: sessionId,
    action: 'sendMessage',
    chatInput: text
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    
    // Handle JSON response
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data: any = await response.json();
      
      // Aggressive extraction strategy to avoid showing JSON strings
      if (typeof data === 'string') return data;
      if (data.output) return data.output;
      if (data.text) return data.text;
      if (data.message) return data.message;
      if (data.response) return data.response;
      if (data.answer) return data.answer;
      
      // If object but no known key, try to find the first long string value
      const values = Object.values(data);
      const stringValue = values.find((v): v is string => typeof v === 'string' && v.length > 0);
      if (stringValue) return stringValue;

      return "התקבלה תשובה אך לא ניתן היה לפענח אותה.";
    } else {
      // Handle Plain Text
      return await response.text();
    }

  } catch (error) {
    console.error('Chat Error:', error);
    return 'סליחה, ישנה תקלה בתקשורת כרגע. אנא נסו שנית מאוחר יותר.';
  }
};