import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

// Import Megamenu Assets
import triplyImg from '../assets/triply_nav.png';
import castIronImg from '../assets/cast_iron_nav.png';
import cookersImg from '../assets/cookers_nav.png';
import bakewareImg from '../assets/bakeware_nav.png';
import drinkwareImg from '../assets/drinkware_nav.png';
import toolsImg from '../assets/tools_nav.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [expandedMobileLink, setExpandedMobileLink] = useState(null);
    const [theme, toggleTheme] = useDarkMode();
    const location = useLocation();

    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setHoveredLink(null);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        { 
            name: 'Triply', 
            href: '/category/frying-pans',
            subLinks: ['Toxin-Free Kadhai', 'Professional Fry Pans', 'Deep Casseroles', 'Saucepans', 'Woks & Stir Fry'],
            featured: {
                title: 'Professional Series',
                image: triplyImg
            }
        },
        { 
            name: 'Cast Iron', 
            href: '/category/kadai-woks',
            subLinks: ['Heirloom Dutch Ovens', 'Seasoned Skillets', 'Traditional Tawa', 'Grill Pans', 'Mini Ramekins'],
            featured: {
                title: 'Heirloom Classics',
                image: castIronImg
            }
        },
        { 
            name: 'Pressure Cookers', 
            href: '/category/pressure-cookers',
            subLinks: ['Stainless Steel Series', 'Hard Anodized Series', 'Outer Lid Series', 'Inner Lid Series', 'Combo Sets'],
            featured: {
                title: 'Safety First',
                image: cookersImg
            }
        },
        { 
            name: 'Bakeware', 
            href: '/category/bakeware',
            subLinks: ['Cake Tins', 'Baking Trays', 'Muffin Pans', 'Cooling Racks', 'Silicon Tools'],
            featured: {
                title: 'Baker\'s Paradise',
                image: bakewareImg
            }
        },
        { 
            name: 'Drinkware', 
            href: '/category/drinkware',
            subLinks: ['Insulated Bottles', 'Glass Tumblers', 'Copper Bottles', 'Flask Sets', 'Beer Mugs'],
            featured: {
                title: 'Hydration Style',
                image: drinkwareImg
            }
        },
        { 
            name: 'Kitchen Tools', 
            href: '/category/kitchen-tools',
            subLinks: ['Silicon Spatulas', 'Precision Knives', 'Wooden Boards', 'Measuring Cups', 'Graters & Peelers'],
            featured: {
                title: 'Master Chef Kit',
                image: toolsImg
            }
        },
    ];


    return (
        <div className="fixed top-0 w-full z-50" onMouseLeave={() => setHoveredLink(null)}>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#A67C52] origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Top Announcement Bar */}
            <div className="bg-[#2563EB] text-white py-2 overflow-hidden whitespace-nowrap flex relative z-[60] shadow-sm">
                <div className="animate-marquee flex min-w-full">
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">Summer Sale is Live - Up to 40% Off!</span>
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">Free Pan with orders above ₹5000</span>
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">100% Toxin Free Cookware</span>
                </div>
                <div className="animate-marquee flex min-w-full">
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">Summer Sale is Live - Up to 40% Off!</span>
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">Free Pan with orders above ₹5000</span>
                    <span className="mx-10 text-[10px] font-black uppercase tracking-[0.3em] flex-shrink-0">100% Toxin Free Cookware</span>
                </div>
            </div>
            <header className={`transition-all duration-500 relative z-50 ${isScrolled ? 'bg-white/90 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl py-3 shadow-[0_4px_40px_rgba(0,0,0,0.05)]' : 'bg-white dark:bg-[#0A0A0A] py-5'}`}>
                <div className="max-w-[1500px] mx-auto px-6 flex items-center justify-between">
                    
                    {/* Logo Section */}
                    <div className="flex items-center gap-6">
                        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6 text-black dark:text-white" />
                        </button>
                        <Link to="/" className="flex flex-col items-start cursor-pointer group">
                             <span className="text-2xl font-black tracking-tighter text-black dark:text-white uppercase leading-none transition-all duration-300 group-hover:tracking-normal">
                                OMI CHEF
                            </span>
                            <span className="text-[8px] font-bold tracking-[0.3em] text-[#A67C52] uppercase ml-1">Heirloom Quality</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div 
                                key={link.name} 
                                onMouseEnter={() => setHoveredLink(link.name)}
                                className="relative py-4"
                            >
                                <Link 
                                    to={link.href} 
                                    className="text-[11px] font-black text-black dark:text-white/70 dark:hover:text-white relative group uppercase tracking-[0.15em] flex items-center gap-1"
                                >
                                    {link.name}
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-[#A67C52]' : ''}`} />
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#A67C52] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Icons Section */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-zinc-100 dark:bg-zinc-900 rounded-none px-4 py-2 gap-3 group border border-transparent focus-within:border-black/10 dark:focus-within:border-white/10 transition-all duration-500">
                            <Search className="w-4 h-4 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white" />
                            <input 
                                type="text" 
                                placeholder="SEARCH..." 
                                className="bg-transparent text-[10px] font-bold uppercase tracking-widest w-24 focus:w-40 transition-all focus:outline-none placeholder:text-zinc-400 text-black dark:text-white"
                            />
                        </div>
                        <Link 
                            to="/login" 
                            className={`hover:text-[#A67C52] transition-all relative hidden sm:block ${location.pathname === '/login' ? 'text-[#A67C52]' : 'text-black dark:text-white'}`}
                        >
                            <User className="w-5 h-5" />
                        </Link>
                        
                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme}
                            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all text-black dark:text-white"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>

                        <Link 
                            to="/cart" 
                            className="hover:scale-110 transition-all duration-300 relative group"
                        >
                            <ShoppingBag className={`w-5 h-5 group-hover:text-[#A67C52] ${location.pathname === '/cart' ? 'text-[#A67C52]' : 'text-black dark:text-white'}`} />
                            <span className={`absolute -top-2 -right-2 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center transition-colors ${location.pathname === '/cart' ? 'bg-[#A67C52]' : 'bg-black dark:bg-[#A67C52] group-hover:bg-[#A67C52]'}`}>
                                1
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Desktop Megamenu */}
                <AnimatePresence>
                    {hoveredLink && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-0 right-0 top-full bg-white/95 dark:bg-[#121212]/95 backdrop-blur-3xl border-b border-zinc-100 dark:border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.05)] pt-12 pb-16 px-12 z-40"
                        >
                            <div className="max-w-[1500px] mx-auto grid grid-cols-4 gap-20">
                                {navLinks.find(l => l.name === hoveredLink)?.subLinks && (
                                    <div className="col-span-3 grid grid-cols-3 gap-10">
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-white/30 border-b border-zinc-100 dark:border-white/10 pb-4">Collections</h4>
                                            <div className="flex flex-col gap-4">
                                                {navLinks.find(l => l.name === hoveredLink).subLinks.map((sub, i) => (
                                                    <motion.a 
                                                        key={sub}
                                                        href="#"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] dark:hover:text-[#A67C52] transition-colors uppercase tracking-tight flex items-center justify-between group"
                                                    >
                                                        {sub}
                                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-white/30 border-b border-zinc-100 dark:border-white/10 pb-4">Specialties</h4>
                                            <div className="flex flex-col gap-4">
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Best Sellers</a>
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">New Arrivals</a>
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Toxin-Free Series</a>
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Gifting Sets</a>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-white/30 border-b border-zinc-100 dark:border-white/10 pb-4">Support</h4>
                                            <div className="flex flex-col gap-4">
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Care Instructions</a>
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Warranty Info</a>
                                                <a href="#" className="text-[13px] font-black text-black dark:text-white/80 hover:text-[#A67C52] transition-colors uppercase tracking-tight">Recipe Blog</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="col-span-1 border-l border-zinc-100 dark:border-white/10 pl-20">
                                    <div className="relative group/feat aspect-[4/5] overflow-hidden bg-zinc-50 dark:bg-zinc-900 mb-6 font-black uppercase">
                                        <img 
                                            src={navLinks.find(l => l.name === hoveredLink)?.featured?.image} 
                                            alt="Featured" 
                                            className="w-full h-full object-cover group-hover/feat:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover/feat:bg-black/0 transition-colors"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <p className="text-[9px] font-bold text-white uppercase tracking-[0.3em] mb-2 opacity-70">Curated Pick</p>
                                            <h5 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">
                                                {navLinks.find(l => l.name === hoveredLink)?.featured?.title}
                                            </h5>
                                        </div>
                                    </div>
                                    <Link 
                                        to={navLinks.find(l => l.name === hoveredLink)?.href || '/'}
                                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black dark:text-white hover:text-[#A67C52] transition-colors group"
                                    >
                                        Show All {hoveredLink} Products
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                        />
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[400px] bg-white dark:bg-[#0A0A0A] z-[70] shadow-2xl p-8 flex flex-col border-r border-black/5 dark:border-white/5"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <Link to="/" className="flex flex-col">
                                    <span className="text-2xl font-black text-black dark:text-white tracking-tighter">OMI CHEF</span>
                                    <span className="text-[8px] font-bold tracking-[0.3em] text-[#A67C52] uppercase ml-1">Collections</span>
                                </Link>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-black dark:text-white" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8 overflow-y-auto pr-4 scrollbar-hide">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="flex flex-col">
                                        <div 
                                            onClick={() => setExpandedMobileLink(expandedMobileLink === link.name ? null : link.name)}
                                            className="flex items-center justify-between group cursor-pointer"
                                        >
                                            <span className="text-xl font-black text-black dark:text-white uppercase tracking-tighter">{link.name}</span>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMobileLink === link.name ? 'rotate-180 text-[#A67C52]' : 'opacity-30 dark:text-white'}`} />
                                        </div>
                                        <AnimatePresence>
                                            {expandedMobileLink === link.name && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-zinc-50/50 dark:bg-white/[0.02] px-4 mt-4 flex flex-col gap-4 border-l-2 border-[#A67C52]"
                                                >
                                                    <div className="py-6 flex flex-col gap-6">
                                                        {link.subLinks.map(sub => (
                                                            <a key={sub} href="#" className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors">{sub}</a>
                                                        ))}
                                                        <a href="#" className="text-[12px] font-black text-[#A67C52] uppercase tracking-widest flex items-center gap-2">
                                                            View All <ArrowRight className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-auto pt-10 border-t border-zinc-100 dark:border-white/5">
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Account</p>
                                <div className="flex items-center gap-4">
                                    <Link to="/login" className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 text-[10px] font-black uppercase tracking-widest text-center">Login</Link>
                                    <Link to="/cart" className="flex-1 border border-black dark:border-white/20 dark:text-white py-4 text-[10px] font-black uppercase tracking-widest text-center">My Bag</Link>
                                </div>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
