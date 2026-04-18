import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import dutchOven from '../assets/dutch_oven.png';
import kadai from '../assets/kadai.png';
import frypanTriply from '../assets/frypan_triply.png';
import frypanCastIron from '../assets/frypan_castiron.png';
import frypanNav from '../assets/triply_nav.png';

export const products = [
    {
        id: 1,
        name: "Enameled Cast Iron Dutch Oven",
        price: "₹4,999",
        oldPrice: "₹6,999",
        rating: 4.9,
        reviews: 245,
        img: dutchOven,
        tag: "Best Seller",
        category: "biryani-pots"
    },
    {
        id: 2,
        name: "Superior Cast Iron Kadai",
        price: "₹3,499",
        oldPrice: "₹4,499",
        rating: 4.8,
        reviews: 189,
        img: kadai,
        tag: "Popular",
        category: "kadai-woks"
    },
    {
        id: 4,
        name: "Cast Iron Dosa Tawa",
        price: "₹2,199",
        oldPrice: "₹2,999",
        rating: 4.9,
        reviews: 312,
        img: kadai, 
        tag: "New",
        category: "tawa-griddles"
    },
    {
        id: 5,
        name: "Tri-Ply Stainless Steel Fry Pan",
        price: "₹3,999",
        oldPrice: "₹5,499",
        rating: 4.9,
        reviews: 420,
        img: frypanTriply,
        tag: "Chef's Choice",
        category: "frying-pans"
    },
    {
        id: 6,
        name: "Heritage Cast Iron Skillet",
        price: "₹2,799",
        oldPrice: "₹3,999",
        rating: 4.8,
        reviews: 312,
        img: frypanCastIron,
        tag: "Heirloom",
        category: "frying-pans"
    },
    {
        id: 7,
        name: "Pro-Series Non-Stick Pan",
        price: "₹3,299",
        oldPrice: "₹4,299",
        rating: 4.7,
        reviews: 156,
        img: frypanNav,
        tag: "Daily Driver",
        category: "frying-pans"
    },
    {
        id: 8,
        name: "Hard Anodized deep Fry Pan",
        price: "₹2,499",
        oldPrice: "₹3,199",
        rating: 4.6,
        reviews: 98,
        img: frypanTriply, 
        tag: "Robust",
        category: "frying-pans"
    }
];



const ProductGrid = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="py-32 bg-white dark:bg-[#0A0A0A] border-b border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-[#A67C52]"></span>
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#A67C52]">The Bestsellers</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white leading-none">
                            SUMMER SALE <br/>
                            <span className="text-[#A67C52] italic font-serif lowercase tracking-normal font-light">curated picks</span>
                        </h2>
                    </motion.div>
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="text-black dark:text-white font-black flex items-center gap-3 border-b-2 border-black dark:border-white pb-2 hover:text-[#A67C52] hover:border-[#A67C52] dark:hover:border-[#A67C52] transition-all uppercase tracking-widest text-[10px]"
                    >
                        Explore Catalog
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20"
                >
                    {products.map((product) => (
                        <motion.div 
                            key={product.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-transparent group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F8] dark:bg-[#0D0D0D] mb-8 flex items-center justify-center p-12 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-transparent dark:border-white/5">
                                <motion.img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] dark:brightness-90"
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
            </div>
        </section>

    );
};


export default ProductGrid;

