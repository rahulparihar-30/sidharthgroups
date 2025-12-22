import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CompanyShowcase = () => {
  // Trigger animations when the section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start slightly earlier
  });

  // Updated Stats based on your Sectors
  const stats = [
    { number: 40, label: "Years of Legacy", suffix: "+" }, // Brand trust
    { number: 12, label: "Sq.Ft Delivered", suffix: "M+" }, // Construction
    { number: 500, label: "Acres Sustainable Farming", suffix: "+" }, // Agro
    { number: 25, label: "Films Produced", suffix: "+" }, // Lalit Films
    { number: 15000, label: "Franchise Partners", suffix: "+" }, // Franchise
    { number: 500, label: "Investors Managed", suffix: "Cr+" }, // Finance (Example Value)
  ];

  return (
    <section ref={ref} className="bg-brand-black py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT SIDE: Expanded Bento Grid (4 Images) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[600px] w-full grid grid-cols-12 grid-rows-12 gap-4"
          >
            {/* 1. Main Construction Image (Tall - Left) */}
            <div className="col-span-6 row-span-12 rounded-xl overflow-hidden relative group border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Siddharth Construction"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-serif font-bold text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Construction & Infra</p>
              </div>
            </div>

            {/* 2. Media/Films Image (Wide - Top Right) */}
            <div className="col-span-6 row-span-5 rounded-xl overflow-hidden relative group border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800"
                alt="Lalit Films"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-3 left-4">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md px-2 py-1 rounded">Media</p>
              </div>
            </div>

            {/* 3. Happy Family (Square - Mid Right) */}
            <div className="col-span-3 row-span-4 rounded-xl overflow-hidden relative group border border-white/5">
              <img
                src="/villa.jpg"
                alt="Happy Family"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* 4. Agro/Farming (Square - Mid Right Next) */}
            <div className="col-span-3 row-span-4 rounded-xl overflow-hidden relative group border border-white/5">
              <img
                src="/agritech.jpg"
                alt="Siddharth Agritech"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* 5. Finance/Chart (Wide - Bottom Right) */}
            <div className="col-span-6 row-span-3 rounded-xl overflow-hidden relative group border border-white/5 bg-brand-surface flex items-center justify-center">
              <div className="text-center">
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Financial Strength</p>
                <p className="text-brand-gold font-serif text-2xl font-bold">AAA Rated</p>
              </div>
              {/* Subtle background pattern or chart image could go here */}
              <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-xl m-2"></div>
            </div>
          </motion.div>


          {/* --- RIGHT SIDE: Content & Counting Stats --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center pl-0 lg:pl-10"
          >
            {/* Heading Section */}
            <div className="mb-12">
              <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                Diversified Excellence
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6 leading-tight">
                Building Futures Across <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">
                  Multiple Dimensions
                </span>
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed border-l-2 border-brand-gold/20 pl-6">
                Siddharth Groups isn't just an <span className="text-brand-gold font-medium ">Investment Company</span>. We are an ecosystem.
                From <span className="text-gray-200 font-medium">Sustainable Farming</span> to <span className="text-gray-200 font-medium">Cinematic Storytelling</span>,
                and from <span className="text-gray-200 font-medium">Construction</span> to <span className="text-gray-200 font-medium">Healthcare Solutions</span>,
                we excel in delivering value across every sector we touch.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col group/stat cursor-default">
                  <div className="text-4xl lg:text-5xl font-serif text-brand-text mb-2 flex items-baseline group-hover/stat:text-brand-gold transition-colors duration-300">

                    {/* The Counter */}
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={3}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}

                    {/* The Suffix */}
                    <span className="text-brand-gold text-2xl ml-1 font-sans font-bold">{stat.suffix}</span>
                  </div>

                  {/* Label with animated underline */}
                  <div className="relative pt-2">
                    <p className="text-brand-muted text-xs font-bold uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <span className="absolute top-0 left-0 w-8 h-[1px] bg-brand-border group-hover/stat:w-full group-hover/stat:bg-brand-gold transition-all duration-500"></span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;