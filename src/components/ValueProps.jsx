import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Flame, Award } from 'lucide-react';

const props = [
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: 'Premium Quality',
        desc: 'Heirloom products designed for generations.'
    },
    {
        icon: <Leaf className="w-10 h-10" />,
        title: '100% Healthy',
        desc: 'Toxin-free surfaces for safe cooking.'
    },
    {
        icon: <Flame className="w-10 h-10" />,
        title: 'Superior Heat Control',
        desc: 'Perfect retention and even distribution.'
    },
    {
        icon: <Award className="w-10 h-10" />,
        title: '10-Year Warranty',
        desc: 'Confidence in every piece we craft.'
    }
];

const ValueProps = () => {
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
        hidden: { opacity: 0, y: 20 },
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
        <section className="py-32 bg-white">
            <div className="section-container">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
                >
                    {props.map((prop, i) => (
                        <motion.div 
                            key={i} 
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="mb-10 text-zinc-300 group-hover:text-[#A67C52] transition-colors duration-500 relative">
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.8, ease: "anticipate" }}
                                    className="relative z-10"
                                >
                                    {prop.icon}
                                </motion.div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#A67C52]/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                            </div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-black mb-4">{prop.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] font-medium">{prop.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


export default ValueProps;

