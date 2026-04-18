import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import ValueProps from '../components/ValueProps';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

// Import Section Assets
import triplyImg from '../assets/triply_nav.png';

const Home = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="font-sans text-black dark:text-white overflow-x-hidden pt-12 transition-colors duration-500">
            <Navbar />
            
            <main>
                <Hero />
                
                {/* Category Navigation */}
                <motion.div {...fadeInUp}>
                    <CategoryGrid />
                </motion.div>
                
                {/* Best Sellers Section */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2, ...fadeInUp.transition }}>
                    <ProductGrid />
                </motion.div>
                
                {/* Brand Experience Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="py-32 bg-stone-50 dark:bg-zinc-900/50 relative overflow-hidden"
                >
                    <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 order-2 lg:order-1">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A67C52]/5 rounded-full blur-3xl"></div>
                                <img 
                                    src={triplyImg} 
                                    alt="Product Detail" 
                                    className="relative z-10 w-full max-w-lg mx-auto shadow-2xl rounded-none group-hover:scale-105 transition-all duration-1000 dark:brightness-90" 
                                />
                                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-black/5 dark:bg-white/5 rounded-full blur-2xl"></div>

                            </motion.div>
                        </div>
                        
                        <div className="flex-1 order-1 lg:order-2">
                             <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <span className="w-12 h-[1px] bg-[#A67C52]"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#A67C52]">Built for Life</span>
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-black dark:text-white"
                            >
                                100% TOXIN-FREE <br/>
                                <span className="text-[#A67C52] italic font-serif lowercase tracking-normal">heirloom quality</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-12 max-w-xl leading-relaxed"
                            >
                                Our cookware is crafted with the highest grade triply stainless steel and pre-seasoned cast iron. No PFOA, No Lead, No Cadmium. Just pure, healthy cooking.
                            </motion.p>
                            <div className="grid grid-cols-2 gap-10 mb-14">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <h4 className="font-black uppercase text-[11px] tracking-widest mb-3 text-black dark:text-white">Fast Heating</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">Aluminum core for even, lightning-fast heat distribution.</p>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <h4 className="font-black uppercase text-[11px] tracking-widest mb-3 text-black dark:text-white">Non-Stick</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">Natural seasoning process for chemical-free release.</p>
                                </motion.div>
                            </div>
                            <motion.button 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-black dark:bg-white text-white dark:text-black px-12 py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#A67C52] dark:hover:bg-[#A67C52] dark:hover:text-white transition-all duration-500 shadow-xl"
                            >
                                Our Material Story
                            </motion.button>
                        </div>
                    </div>
                </motion.section>


                <motion.div {...fadeInUp}>
                    <ValueProps />
                </motion.div>
                
                <motion.div {...fadeInUp}>
                    <Testimonials />
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};


export default Home;

