import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Globe, Phone } from "lucide-react";
import ProjectVerticals from "./ProjectVerticals";

const Construction = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/construction-1.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/30" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4 block">
              Construction Vertical
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Sidharth Creation
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-light italic">
              "Building The Skylines of Tomorrow"
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <div className="bg-brand-surface border-y border-brand-border relative z-20 -mt-16 mx-4 md:mx-12 rounded-lg shadow-2xl backdrop-blur-md bg-opacity-90">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
          {[
            { label: "Sq.Ft Delivered", value: "12M+" },
            { label: "Ongoing Projects", value: "19" },
            { label: "City Presence", value: "4" },
            { label: "Team Strength", value: "450+" }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 text-center group hover:bg-white/5 transition"
            >
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

      {/* ================= ABOUT + SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* ABOUT */}
          <div className="lg:col-span-5">
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">
              Overview
            </h2>

            <h3 className="text-4xl font-serif mb-6 leading-tight">
              Engineering <br /> Excellence
            </h3>

            <p className="text-brand-muted text-lg leading-relaxed mb-8 border-l-2 border-brand-gold/30 pl-6">
              With over four decades of engineering excellence, Sidharth Creation
              stands at the forefront of high-rise residential and commercial
              development. We don’t just construct buildings — we create lasting assets
              that define city skylines.
            </p>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-black font-bold rounded hover:bg-white transition">
                Contact Sales <Phone size={18} />
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-7">
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-8">
              Key Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Residential Townships",
                  desc: "Integrated smart communities with world-class living ecosystems."
                },
                {
                  title: "Commercial Developments",
                  desc: "Grade-A office and retail spaces designed for modern enterprises."
                },
                {
                  title: "Urban Redevelopment",
                  desc: "Transforming aging cityscapes into modern architectural landmarks."
                },
                {
                  title: "Industrial & Logistics Parks",
                  desc: "Future-ready warehousing and supply chain infrastructure."
                }
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-gold/50 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-black transition">
                    <CheckCircle2 size={20} />
                  </div>

                  <h4 className="text-xl font-serif mb-2">
                    {service.title}
                  </h4>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <ProjectVerticals />
    </div>
  );
};

export default Construction;
