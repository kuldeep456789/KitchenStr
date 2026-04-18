import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="pt-40 pb-20">
                <div className="section-container max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                                JOIN THE <br/>
                                <span className="text-[#A67C52] italic font-serif lowercase tracking-normal font-light">culinary circle</span>
                            </h1>
                            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">
                                Access exclusive recipes, member-only deals, and track your heirloom collection from the Omi Chef dashboard.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-md bg-zinc-50 p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-zinc-100"
                        >
                            <form className="space-y-8">
                                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-black border-b border-black pb-4 mb-10">Member Login</h2>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-black transition-all"
                                            placeholder="cook@omichef.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">Password</label>
                                        <input 
                                            type="password" 
                                            className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-black transition-all"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="accent-black w-3 h-3" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Remember me</span>
                                    </label>
                                    <a href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-[#A67C52] transition-colors underline underline-offset-4">Forgot?</a>
                                </div>

                                <button className="w-full bg-black text-white py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#A67C52] transition-all duration-500 shadow-2xl">
                                    Sign In
                                </button>
                                
                                <div className="text-center pt-8">
                                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Or sign in with</p>
                                    <div className="flex gap-4 justify-center">
                                        <button className="flex-1 border border-zinc-200 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Google</button>
                                        <button className="flex-1 border border-zinc-200 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Instagram</button>
                                    </div>
                                </div>

                                <p className="text-center pt-10 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                    New to the kitchen? <Link to="#" className="text-black font-black underline underline-offset-4 hover:text-[#A67C52]">Create Account</Link>
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
