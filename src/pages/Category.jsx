import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, ArrowLeft, Filter, ChevronDown } from 'lucide-react';
import { products } from '../components/ProductGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Category = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const filteredProducts = useMemo(() => {
        return products.filter(p => p.category === id);
    }, [id]);

    const categoryTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-500">
            <Navbar />
            
            <main className="pt-40 pb-24">
                <div className="section-container">
                    {/* Breadcrumbs & Title */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors mb-6 group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white leading-none mb-4">
                                {categoryTitle}
                            </h1>
                            <p className="text-zinc-400 dark:text-zinc-500 text-sm font-medium tracking-wide max-w-lg italic">
                                Exploring our curated selection of {categoryTitle.toLowerCase()}. Heirloom quality, toxin-free, and built to last generations.
                            </p>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-3 px-6 py-4 border border-zinc-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-white/5 dark:text-white transition-colors">
                                <Filter className="w-4 h-4" />
                                Filter
                            </button>
                            <button className="flex items-center gap-3 px-6 py-4 border border-zinc-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-white/5 dark:text-white transition-colors">
                                Popularity
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    {filteredProducts.length > 0 ? (
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20"
                        >
                            {filteredProducts.map((product) => (
                                <motion.div 
                                    key={product.id}
                                    variants={itemVariants}
                                    className="bg-white dark:bg-transparent group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F8] dark:bg-zinc-900/50 mb-8 flex items-center justify-center p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                                        <img 
                                            src={product.img} 
                                            alt={product.name} 
                                            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-[0.16, 1, 0.3, 1] dark:brightness-90"
                                        />
                                        {product.tag && (
                                            <span className="absolute top-0 left-0 bg-black dark:bg-[#A67C52] text-white text-[9px] font-black px-5 py-3 uppercase tracking-widest z-10">
                                                {product.tag}
                                            </span>
                                        )}
                                        <button className="absolute top-5 right-5 p-4 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full text-zinc-300 dark:text-zinc-500 hover:text-black dark:hover:text-[#A67C52] hover:bg-white dark:hover:bg-black transition-all shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-500 z-10 border border-black/5 dark:border-white/5">
                                            <Heart className="w-4 h-4" />
                                        </button>
                                        
                                        <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('/cart');
                                                }}
                                                className="w-full bg-black dark:bg-[#A67C52] text-white py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#A67C52] transition-all duration-500 shadow-2xl relative overflow-hidden group/btn"
                                            >
                                                <span className="relative z-10">Quick Add</span>
                                                <div className="absolute inset-0 bg-[#A67C52] dark:bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-4 px-2">
                                        <div className="flex items-center justify-between text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">
                                            <span className="flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800"></span>
                                                Toxin Free
                                            </span>
                                            <div className="flex items-center gap-1.5 text-black dark:text-white">
                                                <Star className="w-3 h-3 fill-black dark:fill-[#A67C52] dark:text-[#A67C52]" />
                                                <span>{product.rating}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-black text-black dark:text-white text-lg group-hover:text-[#A67C52] transition-colors uppercase leading-[1.2] tracking-tighter">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-5 pt-2">
                                            <span className="text-xl font-black text-black dark:text-white">{product.price}</span>
                                            {product.oldPrice && (
                                                <span className="text-base text-zinc-300 dark:text-zinc-700 line-through font-bold">{product.oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="py-40 text-center">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-zinc-300 dark:text-zinc-700">New Arrivals Coming Soon</h3>
                            <p className="text-zinc-400 dark:text-zinc-600 max-w-sm mx-auto mb-10 font-medium italic">We're currently hand-crafting new pieces for this collection. Sign up for early access.</p>
                            <Link to="/" className="inline-block bg-black dark:bg-[#A67C52] text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-[#A67C52] dark:hover:bg-black transition-colors shadow-2xl">Return Home</Link>
                        </div>
                    )}
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Category;
