import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, User, Bot, Sparkles, Loader2 } from 'lucide-react';

const ChatBot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to CUSIN. I'm your culinary concierge. How can I assist you with your cookware journey today?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const apiKey = 'AIzaSyBl3KQxpP0np72Ol-QCyD_KSmi2ERROTXk';
        const userMsg = {
            id: Date.now(),
            text: input,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `You are CUSIN Concierge, a luxury kitchenware specialist. Assist the user with their cookware queries professionally and warmly. User: ${input}` }] }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'API request failed');
            }

            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0]) {
                throw new Error('No response from AI');
            }

            const aiText = data.candidates[0].content.parts[0].text;

            const botResponse = {
                id: Date.now() + 1,
                text: aiText,
                sender: 'bot',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error('Chat Error:', error);

            setTimeout(() => {
                const botResponse = {
                    id: Date.now() + 1,
                    text: getAutomatedResponse(input),
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, botResponse]);
            }, 1000);
        } finally {
            setIsTyping(false);
        }
    };


    const getAutomatedResponse = (query) => {
        const q = query.toLowerCase();
        if (q.includes('shipping')) return "We offer complimentary express shipping on all orders over ₹5,000. Typical delivery time is 3-5 business days.";
        if (q.includes('return') || q.includes('exchange')) return "Our 'Culinary Confidence' guarantee allows for returns within 30 days of purchase. The items must be in their original packaging.";
        if (q.includes('material') || q.includes('cookware')) return "We specialize in professional-grade tri-ply stainless steel and seasoned cast iron. Both are 100% toxin-free and designed for heirloom longevity.";
        if (q.includes('price') || q.includes('cost')) return "Our premium collections start from ₹2,199. You can explore the full range in our Shop section.";
        return "That's a great question about our cookware. Let me find more details for you, or would you like to speak with a human specialist?";
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                    className="fixed bottom-[110px] md:bottom-32 right-4 md:right-8 w-[92vw] sm:w-[400px] h-[70vh] md:h-[600px] bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/20 dark:border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.2)] rounded-[32px] z-[1000] flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-gradient-to-r from-[#A67C52]/10 to-transparent">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center relative">
                                <Bot className="w-6 h-6 text-white dark:text-black" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-black dark:text-white">CUSIN Concierge</h3>
                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-[#A67C52]" /> AI powered assistant
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-zinc-400" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div 
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide relative"
                    >
                        {messages.map((msg) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] ${msg.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
                                    <div className={`p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                                        msg.sender === 'user' 
                                        ? 'bg-black dark:bg-white text-white dark:text-black rounded-tr-none' 
                                        : 'bg-zinc-100 dark:bg-zinc-900 text-black dark:text-zinc-300 rounded-tl-none border border-black/5 dark:border-white/5'
                                    }`}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest px-1">
                                        {msg.time}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5">
                                    <Loader2 className="w-4 h-4 animate-spin text-[#A67C52]" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form 
                        onSubmit={handleSend}
                        className="p-6 border-t border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50"
                    >
                        <div className="relative flex items-center gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="ASK ANYTHING ABOUT CUSIN..."
                                className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-2xl py-5 px-6 text-[10px] font-black tracking-widest uppercase focus:ring-2 focus:ring-[#A67C52]/20 transition-all placeholder:text-zinc-400 dark:text-white"
                            />
                            <button 
                                type="submit"
                                className="p-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:bg-[#A67C52] dark:hover:bg-[#A67C52] dark:hover:text-white transition-all shadow-xl group"
                            >
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChatBot;
