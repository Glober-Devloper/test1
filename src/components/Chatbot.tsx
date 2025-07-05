import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Filter, Search } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm John's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickFilters = [
    { label: 'Skills', query: 'What are John\'s technical skills?' },
    { label: 'Experience', query: 'Tell me about John\'s work experience' },
    { label: 'Projects', query: 'What projects has John worked on?' },
    { label: 'Education', query: 'What is John\'s educational background?' },
    { label: 'Contact', query: 'How can I contact John?' },
    { label: 'Certifications', query: 'What certifications does John have?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return "John is proficient in a wide range of technologies including React, TypeScript, Node.js, Python, AWS, Docker, and many more. He has 5+ years of experience with modern web development frameworks and cloud technologies. Would you like to know about any specific technology?";
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "John has 5+ years of professional experience, currently working as a Senior Full Stack Developer at TechCorp Solutions. He has previously worked at StartupXYZ and Digital Agency Pro, leading development teams and delivering scalable solutions. He's completed 50+ projects and mentored junior developers.";
    }
    
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return "John has worked on diverse projects including e-commerce platforms, task management apps, AI-powered analytics dashboards, and mobile applications. His projects showcase expertise in full-stack development, UI/UX design, and modern deployment practices. Check out the Projects section for detailed case studies!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "John holds a Master's degree in Computer Science from Stanford University (2017-2019) with specialization in AI/ML, and a Bachelor's degree from UC Berkeley (2013-2017). He graduated Summa Cum Laude and has been continuously learning through various certification programs.";
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('reach')) {
      return "You can contact John through the contact form on this website, email him at hello@johndeveloper.com, or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities and interesting projects!";
    }
    
    if (message.includes('certification') || message.includes('certificate')) {
      return "John holds multiple professional certifications including AWS Certified Solutions Architect, Google Cloud Professional, Certified Kubernetes Administrator, and Meta React Developer Certificate. He believes in continuous learning and regularly updates his certifications.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about John's background, skills, and experience. Feel free to ask me anything about his work, projects, or how to get in touch with him.";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about John's background, skills, or experience? I'm here to help!";
    }
    
    return "That's an interesting question! While I can provide information about John's skills, experience, projects, education, and contact details, I might not have specific details about that topic. Could you try asking about his technical skills, work experience, or recent projects?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickFilter = (query: string) => {
    setInputValue(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-96 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs opacity-90">Ask me about John's background</p>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="p-3 border-b border-slate-700">
            <div className="flex items-center space-x-2 mb-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400">Quick topics:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {quickFilters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => handleQuickFilter(filter.query)}
                  className="px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-xs text-slate-300 rounded transition-colors"
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                      : 'bg-slate-700'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-3 h-3 text-white" />
                    ) : (
                      <Bot className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about John..."
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;