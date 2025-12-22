import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Globe, Phone } from "lucide-react";

// --- 1. EXAMPLE DATA (You would pass this as a prop) ---
const constructionData = {
  name: "Siddharth Construction",
  tagline: "Building The Skylines of Tomorrow",
  heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
  aboutText: "With over 4 decades of engineering excellence, Siddharth Construction has established itself as a leader in high-rise residential and Grade-A commercial developments. We don't just build structures; we engineer lifestyles.",
  stats: [
    { label: "Sq.Ft Delivered", value: "12M+" },
    { label: "Ongoing Projects", value: "19" },
    { label: "City Locations", value: "Pune & Mumbai" },
    { label: "Team Strength", value: "450+" },
  ],
  services: [
    { title: "Residential Townships", desc: "Integrated smart cities with 360-degree living ecosystems." },
    { title: "Commercial Hubs", desc: "LEED Platinum certified office spaces for global MNCs." },
    { title: "Urban Redevelopment", desc: "Transforming old city landscapes into modern marvels." },
    { title: "Industrial Parks", desc: "Logistics and warehousing solutions for the supply chain." },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
  ]
};

// --- 2. THE REUSABLE COMPONENT ---
const BusinessLandingPage = ({ data = constructionData }) => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like scale */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={data.heroImage}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
              Our Verticals
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light italic">
              "{data.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="bg-brand-surface border-y border-brand-border relative z-20 -mt-16 mx-4 md:mx-12 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-90">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
          {data.stats.map((stat, index) => (
            <div key={index} className="p-6 text-center group hover:bg-white/5 transition-colors">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-widest text-brand-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- ABOUT & SERVICES --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: About Text (Span 5) */}
          <div className="lg:col-span-5">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
              Overview
            </h2>
            <h3 className="text-4xl font-serif text-white mb-6 leading-tight">
              Engineering <br /> Excellence
            </h3>
            <p className="text-brand-muted text-lg leading-relaxed mb-8 border-l-2 border-brand-gold/30 pl-6">
              {data.aboutText}
            </p>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-black font-bold rounded hover:bg-white transition-colors">
                Visit Website <Globe size={18} />
              </button>
              <button className="flex items-center gap-2 px-8 py-3 border border-brand-border text-white font-bold rounded hover:border-brand-gold hover:text-brand-gold transition-colors">
                Contact Sales <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Right: Services Grid (Span 7) */}
          <div className="lg:col-span-7">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-8">
              Key Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <div key={index} className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-gold/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="text-xl font-serif text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- IMAGE SHOWCASE --- */}
      <section className="py-12 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-serif text-white">Project Highlights</h2>
            <a href="#" className="text-brand-gold text-sm font-bold uppercase flex items-center gap-1 hover:underline">View Gallery <ArrowUpRight size={14} /></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BusinessLandingPage;