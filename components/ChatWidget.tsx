import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { generateHvacAdvice } from '../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi. How can we help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateHvacAdvice(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = { id: (Date.now() + 1).toString(), text: "Please call us at (941) 208-2008.", sender: 'bot' };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white w-[90vw] md:w-80 h-[450px] rounded-xl shadow-2xl flex flex-col mb-4 overflow-hidden border border-gray-100">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <span className="font-bold text-sm text-gray-900">Support</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-900">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-white space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:bg-gray-100 transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="text-gray-900 hover:text-brand-accent p-2 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};