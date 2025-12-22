import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Film, Tractor, HeartPulse, Wallet, Building2, Home, ArrowUpRight } from "lucide-react";

const sectors = [
  {
    id: "construction",
    title: "Siddharth Construction",
    category: "Infrastructure",
    description: "Delivering world-class residential and commercial landmarks with over 12 Million Sq.Ft of developed space. We build the foundations of tomorrow.",
    stat: "12M+ Sq.Ft",
    icon: <Building2 />,
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "films",
    title: "Lalit Films",
    category: "Media & Entertainment",
    description: "A premier production house crafting cinematic experiences that resonate with audiences globally. Telling stories that matter.",
    stat: "5+ Blockbusters",
    icon: <Film />,
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "finance",
    title: "Siddharth Finance",
    category: "Financial Services",
    description: "Empowering growth through secure investment strategies and wealth management. Your trusted partner in financial prosperity.",
    stat: "₹850Cr AUM",
    icon: <Wallet />,
    img: "https://images.unsplash.com/photo-1565514020176-dbf2277478f3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "agro",
    title: "Siddharth Agritech",
    category: "Sustainable Farming",
    description: "Revolutionizing agriculture with sustainable farming practices and high-yield organic produce. Nurturing nature for a better future.",
    stat: "500+ Acres",
    icon: <Tractor />,
    img: "https://images.unsplash.com/photo-1625246333195-584054e29425?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pharma",
    title: "Siddharth Pharma",
    category: "Healthcare",
    description: "Providing accessible, high-quality healthcare solutions and pharmaceuticals. Committed to the well-being of our community.",
    stat: "24/7 Care",
    icon: <HeartPulse />,
    img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "realestate",
    title: "Franchise",
    category: "Franchise Network",
    description: "Expanding our proven business models to new cities, empowering local entrepreneurs with our brand equity.",
    stat: "Global Presence",
    icon: <Home />,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
  }
];

const BusinessEcosystem = () => {
  const [activeSector, setActiveSector] = useState(sectors[0]);

  return (
    <section className="bg-brand-black py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Our Ecosystem
          </span>
          <h2 className="text-4xl font-serif text-brand-text mt-2">
            Diversified Excellence
          </h2>
        </div>

        {/* --- MAIN LAYOUT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[850px] lg:h-[600px]">

          {/* --- LEFT SIDE: The Big "Active" Display (Span 8) --- */}
          <div className="lg:col-span-8 h-full relative rounded-2xl overflow-hidden border border-brand-border bg-brand-surface group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeSector.img}
                  alt={activeSector.title}
                  className="w-full h-full object-cover"
                />
                {/* Heavy Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Active Content Text */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4 z-10">
              <motion.div
                key={activeSector.id + "text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-gold text-brand-black rounded-lg">
                    {activeSector.icon}
                  </div>
                  <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                    {activeSector.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  {activeSector.title}
                </h3>

                <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                  {activeSector.description}
                </p>

                <button className="flex items-center gap-2 text-white font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
                  Explore Vertical <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          </div>


          {/* --- RIGHT SIDE: The Grid of Options (Span 4) --- */}
          <div className="lg:col-span-4 h-full grid grid-cols-2 gap-4 content-start overflow-y-auto pr-2 custom-scrollbar">
            {sectors.map((sector) => (
              <div
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`
                  relative h-40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border
                  ${activeSector.id === sector.id
                    ? "border-brand-gold ring-1 ring-brand-gold/50 scale-[0.98]"
                    : "border-brand-border hover:border-brand-gold/50 hover:scale-[1.02]"
                  }
                `}
              >
                {/* Thumbnail Image */}
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent ${activeSector.id === sector.id ? 'opacity-90' : 'opacity-70'}`} />

                {/* Text */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  {/* Show Icon only if active? or always? Let's show Title */}
                  <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeSector.id === sector.id ? 'text-brand-gold' : 'text-gray-400'}`}>
                    {sector.category}
                  </span>
                  <h4 className={`font-serif font-bold leading-tight ${activeSector.id === sector.id ? 'text-white' : 'text-gray-300'}`}>
                    {sector.title}
                  </h4>

                  {/* Indicator Arrow for Active State */}
                  {activeSector.id === sector.id && (
                    <div className="absolute top-3 right-3 text-brand-gold">
                      <ArrowUpRight size={16} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessEcosystem;