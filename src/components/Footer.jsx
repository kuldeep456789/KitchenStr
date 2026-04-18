import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, Video, ArrowRight, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerLinks = {
        SHOP: [
            { name: 'Triply Cookware', slug: 'frying-pans' },
            { name: 'Cast Iron', slug: 'kadai-woks' },
            { name: 'Pressure Cookers', slug: 'pressure-cookers' },
            { name: 'Bakeware', slug: 'bakeware' },
            { name: 'Drinkware', slug: 'drinkware' },
            { name: 'Kitchen Tools', slug: 'kitchen-tools' }
        ],
        ABOUT: [
            { name: 'Our Story', slug: '#' },
            { name: 'Why Omi Chef', slug: '#' },
            { name: 'Sustainability', slug: '#' },
            { name: 'Blogs', slug: '#' },
            { name: 'Careers', slug: '#' }
        ],
        SUPPORT: [
            { name: 'Contact Us', slug: '#' },
            { name: 'Returns & Exchange', slug: '#' },
            { name: 'Shipping Policy', slug: '#' },
            { name: 'Track Order', slug: '#' },
            { name: 'Warranty Registration', slug: '#' }
        ],
        LEGAL: [
            { name: 'Terms of Service', slug: '#' },
            { name: 'Privacy Policy', slug: '#' },
            { name: 'Cookie Policy', slug: '#' }
        ]
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <footer className="bg-[#0A0A0A] text-white pt-16 pb-12 px-6 md:px-12 relative overflow-hidden transition-all duration-700">

            <div className="max-w-[1500px] mx-auto relative z-10">
                {/* Middle Row - Newsletter & Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20 border-t border-white/5 pt-12">
                    {/* Newsletter */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 bg-white/[0.03] backdrop-blur-3xl p-8 border border-white/5 relative group"
                    >

                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67C52]/5 rounded-full blur-[80px] group-hover:bg-[#A67C52]/10 transition-colors duration-1000"></div>
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-[#A67C52] relative z-10">THE INSIDER LIST</h4>
                        <p className="text-zinc-500 text-sm mb-10 max-w-xs leading-relaxed relative z-10 font-medium italic">Join 50,000+ chefs receiving weekly heirloom care tips and exclusive early access.</p>
                        <div className="relative max-w-sm group/input z-10">
                            <input 
                                type="email" 
                                placeholder="YOUR E-MAIL" 
                                className="w-full bg-transparent border-b border-white/10 py-5 px-0 focus:outline-none focus:border-[#A67C52] transition-all placeholder:text-white/5 text-[10px] font-black tracking-widest uppercase"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover/input:translate-x-3 transition-all duration-500 text-[#A67C52]">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Columns */}
                    {Object.entries(footerLinks).map(([title, links], colIdx) => (
                        <motion.div 
                            key={title} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: colIdx * 0.1 }}
                            className="lg:col-span-1"
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-white/30">{title}</h4>
                            <ul className="space-y-6">
                                {links.map(link => (
                                    <li key={link.name}>
                                        {title === 'SHOP' ? (
                                            <Link 
                                                to={`/category/${link.slug}`} 
                                                className="font-black text-[10px] text-zinc-500 hover:text-[#A67C52] hover:translate-x-2 transition-all uppercase tracking-[0.2em] block"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a 
                                                href={link.slug} 
                                                className="font-black text-[10px] text-zinc-500 hover:text-[#A67C52] hover:translate-x-2 transition-all uppercase tracking-[0.2em] block"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar - Huge Text & Socials */}
                <div className="relative pt-12 flex flex-col items-center">
                    {/* Giant Watermark */}
                    <div className="w-full flex justify-center mb-[-2vw] opacity-[0.03] overflow-hidden pointer-events-none">
                        <motion.span 
                            initial={{ y: "100%", filter: "blur(20px)" }}
                            whileInView={{ y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="text-[12vw] font-black text-white select-none whitespace-nowrap tracking-tighter uppercase leading-none bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent"
                        >
                            OMI CHEF
                        </motion.span>
                    </div>

                    {/* Left Socials & Right Copyright */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between mt-[-1vw] relative z-20 border-t border-white/5 pt-12 pb-10">

                        {/* Social Icons */}
                        <div className="flex gap-6 mb-10 md:mb-0 items-center">
                            {[
                                { icon: Instagram, href: 'https://instagram.com/_kuldeep023' },
                                { icon: Youtube, href: '#' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/kuldeep-prajapati-005080257/' },
                                { icon: Mail, href: 'mailto:kuldeeppraj2002@gmail.com' }
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    whileHover={{ scale: 1.15, color: '#A67C52', backgroundColor: 'rgba(255,255,255,0.05)' }} 
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-white/5 rounded-full transition-all text-zinc-500 hover:border-[#A67C52]/30 group"
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>


                        {/* Copyright */}
                        <div className="flex flex-col items-center md:items-end gap-6 text-zinc-600">
                             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-center md:text-right text-white/20">
                                © 2026, OMI CHEF KITCHENWARE PVT LTD. ALL RIGHTS RESERVED.
                            </p>
                            <div className="flex gap-10 grayscale opacity-20 hover:opacity-100 transition-all duration-700 cursor-help">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-2.5" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 md:bottom-12 right-6 md:right-12 flex flex-col gap-4 md:gap-5 z-[100]">
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-zinc-800 text-[#A67C52] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border border-zinc-100 dark:border-white/5 group transition-all"
                >
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-chat'))}
                    className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center cursor-pointer"
                >
                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
                </motion.button>
            </div>


        </footer>
    );
};



export default Footer;

