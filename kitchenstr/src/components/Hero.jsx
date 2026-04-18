import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero_omi.png';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <section ref={containerRef} className="relative h-[100vh] w-full overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0 scale-110"
            >
                <img 
                    src={heroImage} 
                    alt="Omi Chef Premium Cookware" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
                <div className="max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <span className="w-16 h-[1px] bg-[#A67C52]"></span>
                        <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#A67C52]">The Gold Standard of Cooking</span>
                    </motion.div>
                    
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block"
                        >
                            THE ART OF
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#A67C52]/50 italic font-serif lowercase tracking-normal"
                        >
                            cooking
                        </motion.span>
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-2xl text-zinc-400 mb-14 max-w-xl leading-relaxed font-medium"
                    >
                        Experience India's first 100% toxin-free cookware. From heirloom cast iron to professional triply steel.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap gap-8"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: '#A67C52' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-10 md:px-14 py-5 md:py-6 font-black uppercase tracking-widest text-[10px] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            Shop Summer Sale
                        </motion.button>
                        <button className="group flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:text-[#A67C52] transition-all whitespace-nowrap">
                            Explore Collections
                            <span className="w-8 md:w-10 h-[1px] bg-white group-hover:bg-[#A67C52] group-hover:w-16 transition-all duration-500"></span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Hotspots */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute top-[40%] right-[30%] hidden lg:block z-20"
            >
                <div className="relative group">
                    <div className="w-6 h-6 bg-white/20 rounded-full animate-ping absolute -inset-1"></div>
                    <div className="w-4 h-4 bg-white rounded-full relative cursor-pointer border-2 border-black transition-transform group-hover:scale-125"></div>
                    <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#A67C52]">Triply Kadai</p>
                        <p className="text-white font-black">₹3,499</p>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Credit Grid */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-16 left-12 right-12 hidden md:flex justify-between items-end border-t border-white/10 pt-10"
            >
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Endorsed By</p>
                    <p className="text-sm font-black italic text-zinc-300">Architectural Digest • Vogue • Mint</p>
                </div>
                <div className="flex gap-12">
                    <div className="text-right">
                        <p className="text-2xl font-black text-white leading-none">50K+</p>
                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Happy Cooks</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-black text-white leading-none">4.9/5</p>
                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Average Rating</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};


export default Hero;

