import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";

const chairman = {
  name: "Bharat Vora",
  role: "Chairman & Founder, Siddharth Groups",
  image:
    "/bharat.jpg",
  quote:
    "Capital deserves responsibility. At Siddharth Groups, every investment is guided by discipline, transparency, and long-term value creation.",
  linkedin: "https://www.linkedin.com/in/bharat-vora-66358461",
};

const LeadershipTeam = () => {
  return (
    <section className="bg-brand-black py-24 relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold text-white whitespace-nowrap">
          LEADERSHIP
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mt-4">
            Chairman’s Vision
          </h2>
        </div>

        {/* Chairman Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col md:flex-row gap-10 items-center bg-brand-surface border border-brand-border rounded-sm overflow-hidden"
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[420px] overflow-hidden">
            <img
              src={chairman.image}
              alt={chairman.name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative w-full md:w-1/2 p-10">
            <Quote className="absolute top-6 right-6 text-brand-gold/10 w-14 h-14 rotate-180" />

            <h3 className="text-3xl font-serif text-white">
              {chairman.name}
            </h3>
            <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-2 mb-6">
              {chairman.role}
            </p>

            <p className="text-brand-muted text-base leading-relaxed border-l border-brand-border pl-6 mb-8">
              “{chairman.quote}”
            </p>

            <a
              href={chairman.linkedin}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-gold transition-colors"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
