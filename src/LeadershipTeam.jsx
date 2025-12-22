import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Quote } from "lucide-react";

const leaders = [
  {
    id: 1,
    name: "Lalit Kumar",
    role: "Chairman & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    quote: "We don't just build structures; we build trust that spans generations.",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Siddharth Kumar",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    quote: "Innovation is the heartbeat of our legacy. We evolve, yet our values remain timeless.",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "CEO, Siddharth Finance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "Financial security is the bedrock of a happy family. We ensure your future is safe.",
    linkedin: "#"
  }
];

const LeadershipTeam = () => {
  return (
    <section className="bg-brand-black py-24 relative overflow-hidden">
      {/* Decorative background text (Very subtle) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.03]">
         <span className="text-[20vw] font-serif font-bold text-white whitespace-nowrap">LEADERSHIP</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              The Visionaries
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mt-4">
              Guiding the Legacy
            </h2>
          </div>
          
          <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-brand-border rounded-full text-sm font-medium text-brand-text hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
            View Full Board <ArrowRight size={16} />
          </button>
        </div>

        {/* --- LEADERSHIP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden rounded-sm border-b-4 border-transparent group-hover:border-brand-gold transition-all duration-500">
                {/* Image: Grayscale by default, Color on Hover */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Social Icons (Appear on Hover) */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex flex-col gap-3">
                    <a href={leader.linkedin} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-brand-gold hover:text-black transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-6 relative">
                 {/* Quote Icon Background */}
                 <Quote className="absolute top-4 right-0 text-brand-gold/10 w-12 h-12 rotate-180" />
                 
                 <h3 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors duration-300">
                   {leader.name}
                 </h3>
                 <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1 mb-4">
                   {leader.role}
                 </p>
                 <p className="text-brand-muted text-sm leading-relaxed border-l border-brand-border pl-4 group-hover:border-brand-gold transition-colors duration-500">
                   "{leader.quote}"
                 </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View More Button (Centered at bottom) */}
        <div className="md:hidden mt-12 flex justify-center">
            <button className="flex items-center gap-2 px-8 py-3 bg-brand-surface border border-brand-border rounded-full text-sm font-medium text-brand-text hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                View All Leaders <ArrowRight size={16} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;