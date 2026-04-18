import React from 'react';
import { motion } from 'framer-motion';

// Import Category Assets
import fryingPanImg from '../assets/triply_nav.png';
import castIronImg from '../assets/cast_iron_nav.png';
import kadaiImg from '../assets/kadai.png';
import cookerImg from '../assets/cookers_nav.png';
import biryaniImg from '../assets/dutch_oven.png';
import bakewareImg from '../assets/bakeware_nav.png';
import drinkwareImg from '../assets/drinkware_nav.png';
import toolsImg from '../assets/tools_nav.png';

const categories = [
    { name: 'Frying Pans', img: fryingPanImg, slug: 'frying-pans' },
    { name: 'Tawa & Griddles', img: castIronImg, slug: 'tawa-griddles' },
    { name: 'Kadai & Woks', img: kadaiImg, slug: 'kadai-woks' },
    { name: 'Pressure Cookers', img: cookerImg, slug: 'pressure-cookers' },
    { name: 'Biryani Pots', img: biryaniImg, slug: 'biryani-pots' },
    { name: 'Bakeware', img: bakewareImg, slug: 'bakeware' },
    { name: 'Drinkware', img: drinkwareImg, slug: 'drinkware' },
    { name: 'Kitchen Tools', img: toolsImg, slug: 'kitchen-tools' },
];



import { Link } from 'react-router-dom';

const CategoryGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="py-24 bg-zinc-50/50 dark:bg-transparent transition-colors duration-500">
            <div className="section-container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-black dark:text-white">Discovery <span className="italic font-serif font-light text-zinc-400 dark:text-zinc-600 lowercase">by category</span></h2>
                    <div className="w-16 h-[2px] bg-[#A67C52] mx-auto"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <Link 
                                to={`/category/${cat.slug}`}
                                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#F8F8F7] dark:bg-[#0D0D0D] flex items-center justify-center overflow-hidden mb-5 transition-all duration-700 border border-zinc-100 dark:border-white/5 group-hover:border-[#A67C52] shadow-sm group-hover:shadow-[0_20px_40px_rgba(166,124,82,0.15)] relative"
                            >
                                <img 
                                    src={cat.img} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 dark:brightness-90" 
                                />
                                <div className="absolute inset-0 bg-[#A67C52]/5 dark:bg-[#A67C52]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors px-2 leading-tight">
                                {cat.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

    );
};



export default CategoryGrid;

