import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Building2, Film, Tractor, HeartPulse, Wallet, Map, Check } from "lucide-react";

// --- THE DATA FOR YOUR BUSINESSES ---
const companies = [
  {
    id: "construction",
    name: "Sidharth Construction",
    industry: "Infrastructure & Development",
    tagline: "Building the Foundations of Tomorrow",
    description: "Our flagship entity responsible for over 12 Million Sq.Ft of premium residential and commercial infrastructure. We combine engineering precision with aesthetic mastery.",
    capabilities: ["Residential Townships", "Commercial Hubs", "Govt. Infrastructure"],
    icon: <Building2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "films",
    name: "Lalit Films",
    industry: "Media & Entertainment",
    tagline: "Stories That Resonate Globally",
    description: "A full-scale production house dedicated to cinematic excellence. From feature films to digital content, we craft narratives that inspire and entertain audiences worldwide.",
    capabilities: ["Feature Film Production", "Post-Production Services", "Talent Management"],
    icon: <Film className="w-8 h-8" />,
    image: "/lalitfilms/bolo.jpg"
  },
  {
    id: "realestate",
    name: "Sidharth Franchise",
    industry: "Brand Expansion",
    tagline: "Global Franchise Network",
    description: "Specializing in scaling successful business models across new territories. We ensure brand consistency and operational excellence for our franchise partners.",
    capabilities: ["Brand Licensing", "SOP Development", "Market Penetration"],
    icon: <Map className="w-8 h-8" />,
    image: "/lalitfilms/franchise-1.jpg"
  },
  {
    id: "agro",
    name: "Sidharth Agritech",
    industry: "Sustainable Agriculture",
    tagline: "Cultivating a Greener Future",
    description: "Bridging the gap between technology and tradition. We manage over 500 acres of sustainable farmland, producing organic, export-quality crops.",
    capabilities: ["Hydroponic Farming", "Organic Exports", "Agro-Forestry"],
    icon: <Tractor className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1625246333195-584054e29425?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "finance",
    name: "Sidharth Finance",
    industry: "Financial Services",
    tagline: "Secure Wealth Management",
    description: "A trusted NBFC providing tailored financial solutions. From home loans to corporate investment strategies, we secure your financial horizon.",
    capabilities: ["Wealth Management", "Corporate Lending", "Retail Finance"],
    icon: <Wallet className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1565514020176-dbf2277478f3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "pharma",
    name: "Sidharth Pharma",
    industry: "Healthcare Solutions",
    tagline: "Innovating for Better Health",
    description: "Committed to making quality healthcare accessible. We specialize in the distribution of life-saving medicines and the development of healthcare facilities.",
    capabilities: ["Pharma Distribution", "Healthcare Chains", "Medical Research Support"],
    icon: <HeartPulse className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=1200&auto=format&fit=crop"
  }
];

const GroupVerticals = () => {
  const [activeCompany, setActiveCompany] = useState(0);

  return (
    <section className="bg-brand-black relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="py-24 text-center max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mt-3">
            A Conglomerate of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
              Endless Possibilities
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 pb-32">

          {/* --- LEFT SIDE: STICKY INFO PANEL (The "Brain") --- */}
          <div className="lg:w-5/12 lg:h-[80vh] lg:sticky lg:top-32 flex flex-col justify-center order-2 lg:order-1 hidden sm:block">
            <div className="relative min-h-[500px] border-l border-brand-border pl-8 md:pl-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCompany}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Icon & Industry Tag */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold border border-brand-gold/20">
                      {companies[activeCompany].icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                      {companies[activeCompany].industry}
                    </span>
                  </div>

                  {/* Company Name */}
                  <div>
                    <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-2">
                      {companies[activeCompany].name}
                    </h3>
                    <p className="text-xl text-gray-400 font-serif italic">
                      "{companies[activeCompany].tagline}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-brand-muted text-lg leading-relaxed">
                    {companies[activeCompany].description}
                  </p>

                  {/* Capabilities List */}
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2 inline-block">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {companies[activeCompany].capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-3 text-brand-text/80">
                          <Check size={16} className="text-brand-gold" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <button className="flex items-center gap-2 text-white font-bold hover:text-brand-gold transition-colors group">
                      Visit Company Website
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>


          {/* --- RIGHT SIDE: SCROLLABLE VISUALS (The "Beauty") --- */}
          <div className="lg:w-7/12 flex flex-col gap-32 lg:gap-64 order-1 lg:order-2 py-10 lg:py-20">
            {companies.map((company, index) => (
              <CompanyImageCard
                key={company.id}
                data={company}
                index={index}
                setActiveCompany={setActiveCompany}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Helper Component for the Scroll Images ---
const CompanyImageCard = ({ data, index, setActiveCompany }) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% of the card is visible
    rootMargin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    if (inView) {
      setActiveCompany(index);
    }
  }, [inView, index, setActiveCompany]);

  return (
    <motion.div
      ref={ref}
      className={`relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden transition-all duration-700 ease-out 
        ${inView
          ? 'scale-100 opacity-100 ring-1 ring-brand-gold/30 shadow-2xl shadow-brand-gold/10'
          : 'scale-90 opacity-30 grayscale blur-[2px]'}`}
    >
      {/* Background Image */}
      <img
        src={data.image}
        alt={data.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
        style={{ transform: inView ? 'scale(1.0)' : 'scale(1.1)' }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      {/* Number Watermark */}
      <div className="absolute top-6 right-6 font-serif text-8xl font-bold text-white/10 select-none z-10">
        0{index + 1}
      </div>

      {/* Mobile-Only Title Overlay (Since sticky text might be hidden or stacked on small screens) */}
      <div className="absolute bottom-0 left-0 p-6 lg:hidden">
        <p className="text-brand-gold text-xs uppercase font-bold">{data.industry}</p>
        <h3 className="text-white font-serif text-2xl">{data.name}</h3>
      </div>
    </motion.div>
  );
};

export default GroupVerticals;