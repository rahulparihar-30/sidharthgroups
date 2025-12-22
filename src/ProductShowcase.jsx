import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Calendar, User, Clapperboard, CheckCircle2 } from "lucide-react";

// Movie Data
const products = [
  {
    id: 1,
    category: "Sci-Fi Thriller",
    title: "Neon Horizon",
    location: "2025 • Dir. Sarah Jenkins",
    description: "In a future where memories are currency, one detective must solve the ultimate heist: the theft of a collective consciousness. A visual masterpiece that questions reality.",
    features: ["Best Visual Effects", "IMDb 9.2", "Global Release"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Historical Drama",
    title: "The Last Dynasty",
    location: "2024 • Dir. Chen Wei",
    description: "An epic saga of power, betrayal, and forbidden love set against the backdrop of the fall of an ancient empire. Experience the grandeur of a lost era.",
    features: ["Academy Award Winner", "Best Costume Design", "Epic Scale"],
    image: "https://images.unsplash.com/photo-1614726365342-c11451dc082e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Psychological Horror",
    title: "Whispers in the Static",
    location: "2023 • Dir. Marcus Thorne",
    description: "A radio host discovers that the static frequencies between stations are broadcasting messages from the future. A chilling tale of fate and paranoia.",
    features: ["Critics Choice", "Best Sound Design", "Cult Classic"],
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Documentary",
    title: "Earth: Reborn",
    location: "2024 • Dir. Elena Rossi",
    description: "A hopeful look at how nature is reclaiming abandoned urban spaces around the world. Stunning cinematography meets profound environmental storytelling.",
    features: ["Sundance Selection", "4K HDR", "Impactful"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
  }
];

const ProductShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="py-20 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Filmography
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mt-3">
            Media <span className="italic text-brand-gold">Spotlight</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 pb-24">

          {/* --- LEFT SIDE: STICKY INFO PANEL --- */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-24 flex flex-col justify-center mb-10 lg:mb-0">
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Category Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/30 rounded-full bg-brand-gold/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                      {products[activeFeature].category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                    {products[activeFeature].title}
                  </h3>

                  {/* Location/Director */}
                  <div className="flex items-center gap-2 text-brand-muted">
                    <Calendar size={18} className="text-brand-gold" />
                    <span className="text-sm tracking-wide">{products[activeFeature].location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-brand-muted text-lg leading-relaxed max-w-md border-l-2 border-brand-border pl-6">
                    {products[activeFeature].description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {products[activeFeature].features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-brand-gold" />
                        <span className="text-brand-text/80 text-sm font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <button className="group flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300">
                      View Film Details
                      <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>


          {/* --- RIGHT SIDE: SCROLLABLE IMAGE FEED --- */}
          <div className="lg:w-1/2 flex flex-col gap-24 lg:gap-40 py-10 lg:py-0">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                data={product}
                index={index}
                setActiveFeature={setActiveFeature}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Helper Component to Detect Scroll ---
const ProductCard = ({ data, index, setActiveFeature }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the card is visible
    rootMargin: "-10% 0px -10% 0px" // Adds a little buffer
  });

  useEffect(() => {
    if (inView) {
      setActiveFeature(index);
    }
  }, [inView, index, setActiveFeature]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative rounded-xl overflow-hidden group cursor-pointer h-[500px] lg:h-[600px] shadow-2xl ${inView ? 'ring-1 ring-brand-gold/50' : 'opacity-40 grayscale'}`}
    >
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Overlay - Shows stronger when active */}
      <div className={`absolute inset-0 bg-black/20 transition-all duration-500 ${inView ? 'bg-black/0' : 'bg-black/60'}`} />

      {/* Decorative Number */}
      <div className="absolute top-6 right-6 font-serif text-8xl font-bold text-white/5 select-none z-10">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export default ProductShowcase;