import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dutchOven from '../assets/dutch_oven.png';

const Cart = () => {
    // Mock cart data
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1,
            name: "Enameled Cast Iron Dutch Oven",
            price: 4999,
            color: "Terracotta",
            img: dutchOven,
            quantity: 1
        }
    ]);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 250;
    const total = subtotal + shipping;

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <main className="pt-40 pb-32">
                <div className="section-container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-zinc-200"></span>
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#A67C52]">Shopping Experience</span>
                            <span className="w-12 h-[1px] bg-zinc-200"></span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                            YOUR KITCHEN <br/>
                            <span className="text-[#A67C52] italic font-serif lowercase tracking-normal font-light">essentials</span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col xl:flex-row gap-20">
                        {/* Cart Items List */}
                        <div className="flex-[2]">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-black border-b border-black pb-4 mb-10 flex justify-between">
                                SHOPPING BAG 
                                <span className="text-zinc-400">({cartItems.length} ITEMS)</span>
                            </h2>

                            <div className="space-y-12">
                                <AnimatePresence mode='popLayout'>
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item) => (
                                            <motion.div 
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex flex-col sm:flex-row items-center gap-10 bg-zinc-50/50 p-8 border border-zinc-100 group hover:border-[#A67C52] transition-colors"
                                            >
                                                <div className="w-40 h-40 bg-white flex items-center justify-center p-4">
                                                    <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                                </div>
                                                
                                                <div className="flex-1 space-y-4">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-black text-xl uppercase tracking-tighter text-black mb-1">{item.name}</h3>
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Color: {item.color}</p>
                                                        </div>
                                                        <p className="text-xl font-black text-black">₹{item.price}</p>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-6">
                                                        <div className="flex items-center gap-6 border border-zinc-200 px-4 py-2 bg-white">
                                                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[#A67C52] transition-colors"><Minus className="w-4 h-4" /></button>
                                                            <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[#A67C52] transition-colors"><Plus className="w-4 h-4" /></button>
                                                        </div>
                                                        <button 
                                                            onClick={() => removeItem(item.id)}
                                                            className="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Remove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="text-center py-20 bg-zinc-50 border-2 border-dashed border-zinc-100">
                                            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-zinc-200" />
                                            <p className="font-black text-zinc-400 uppercase tracking-widest text-sm mb-8">Your bag is currently empty</p>
                                            <button className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-[#A67C52] transition-colors shadow-2xl">
                                                Continue Shopping
                                            </button>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="flex-[1]">
                            <div className="bg-black text-white p-12 sticky top-40 shadow-2xl">
                                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#A67C52] border-b border-white/10 pb-6 mb-10">ORDER SUMMARY</h2>
                                
                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between items-center text-sm font-bold opacity-60">
                                        <span>SUBTOTAL</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-bold opacity-60">
                                        <span>SHIPPING</span>
                                        <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-white/10 pt-6 text-2xl font-black">
                                        <span>TOTAL</span>
                                        <span className="text-[#A67C52]">₹{total}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-white text-black py-6 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#A67C52] hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
                                    PREMIUM CHECKOUT
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <div className="pt-10 flex flex-col gap-4">
                                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-loose">
                                        PRE-SEASONED & TOXIN FREE • 10 YEAR WARRANTY • FREE RETURNS ABOVE ₹5000
                                    </p>
                                    <div className="flex gap-4 opacity-30 grayscale hover:opacity-100 transition-opacity">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
