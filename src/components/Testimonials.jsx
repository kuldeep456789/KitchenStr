import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Home Chef",
        text: "The Enameled Dutch Oven is a game changer. My curries have never tasted so authentic. It retains heat exactly how it should!",
        rating: 5
    },
    {
        name: "Chef Rahul Kapoor",
        role: "Executive Chef",
        text: "I use the Omi Chef Kadai for my professional kitchen testing. The quality of cast iron is top-notch. Highly recommended for heavy users.",
        rating: 5
    },
    {
        name: "Ananya Iyer",
        role: "Food Blogger",
        text: "Beautiful design and even better performance. It looks stunning on the dining table making it perfect for direct serving.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-zinc-50 overflow-hidden">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-zinc-200"></span>
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#A67C52]">The Voice of India</span>
                        <span className="w-12 h-[1px] bg-zinc-200"></span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                        TRUSTED BY <br/>
                        <span className="text-[#A67C52] italic font-serif lowercase tracking-normal font-light">thousands of kitchens</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-none border border-zinc-100 relative group hover:shadow-2xl transition-all duration-700"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-zinc-50 group-hover:text-[#A67C52]/10 transition-colors" />
                             <div className="flex gap-1 text-[#A67C52] mb-10">
                                 {[...Array(5)].map((_, idx) => (
                                     <Star key={idx} className="w-4 h-4 fill-current" />
                                 ))}
                             </div>
                            <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-medium italic">"{t.text}"</p>
                            <div className="flex items-center gap-4 border-t border-zinc-100 pt-8">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-black">{t.name.split(" ").map(n => n[0]).join("")}</div>
                                <div>
                                    <h4 className="font-black text-black uppercase tracking-widest text-[10px]">{t.name}</h4>
                                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Testimonials;

