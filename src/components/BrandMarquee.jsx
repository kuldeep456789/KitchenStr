import React from 'react';

const brands = [
    { name: 'The Economic Times', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/The_Economic_Times_logo.svg' },
    { name: 'Mint', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Mint_logo.svg' },
    { name: 'CNBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg' },
    { name: 'Times of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/The_Times_of_India.png' },
    { name: 'YourStory', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/YourStory_Logo.svg' },
];

const BrandMarquee = () => {
    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="section-container mb-6 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">As Featured In</span>
            </div>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4">
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                             {/* Small logo text as fallback if image fails */}
                            <img 
                                src={brand.logo} 
                                alt={brand.name} 
                                className="h-6 md:h-8 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden font-bold text-slate-400 text-lg uppercase tracking-widest">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;
