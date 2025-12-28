import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, MapPin, Check } from "lucide-react";

/* =======================
   PROJECTS DATA
======================= */
const projects = [
    {
        id: "skyline",
        title: "Skyline Towers",
        tagline: "Ultra-Luxury Residential Complex",
        city: "Pune",
        stat: "1.2M Sq.Ft",
        description:
            "A landmark residential development redefining luxury living with sustainable architecture and world-class amenities.",
        features: ["LEED Gold Certified", "Smart Home Automation", "Infinity Pool"],
        image:
            "/construction/society-2.png"
    },
    {
        id: "metro",
        title: "Metro Heights",
        tagline: "Modern Urban Living",
        city: "Delhi NCR",
        stat: "900K Sq.Ft",
        description:
            "Contemporary urban residences offering panoramic city views and premium lifestyle infrastructure.",
        features: ["Rooftop Garden", "Jogging Track"],
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "seaside",
        title: "Seaside Residences",
        tagline: "Luxury Waterfront Living",
        city: "Mumbai",
        stat: "1.5M Sq.Ft",
        description:
            "Waterfront luxury apartments with private decks and resort-style living experiences.",
        features: ["Sky Lounge", "Infinity Pool"],
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "green",
        title: "Green Horizon",
        tagline: "Eco-Friendly Smart Homes",
        city: "Bengaluru",
        stat: "850K Sq.Ft",
        description:
            "A sustainable residential community integrating smart technology and green living.",
        features: ["Solar Panels", "Smart Security"],
        image:
            "/construction/society-1.png"
    }
];

/* =======================
   MAIN COMPONENT
======================= */
const ProjectVerticals = () => {
    const [activeProject, setActiveProject] = useState(0);

    return (
        <section className="bg-brand-black border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="py-24 text-center max-w-3xl mx-auto">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Our Developments
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-3">
                        Projects That <span className="text-brand-gold">Redefine Excellence</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 pb-32">

                    {/* LEFT: STICKY DETAILS */}
                    <div className="lg:w-4/12 lg:h-[75vh] lg:sticky lg:top-28 hidden sm:flex items-center">
                        <div className="relative min-h-[500px] border-l border-brand-border pl-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h3 className="text-4xl font-serif text-white mb-2">
                                            {projects[activeProject].title}
                                        </h3>
                                        <p className="text-lg italic text-gray-400">
                                            "{projects[activeProject].tagline}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {projects[activeProject].city}
                                        </span>
                                        <span className="text-brand-gold font-bold">
                                            {projects[activeProject].stat}
                                        </span>
                                    </div>

                                    <p className="text-brand-muted text-lg leading-relaxed">
                                        {projects[activeProject].description}
                                    </p>

                                    <div>
                                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2 inline-block">
                                            Highlights
                                        </h4>
                                        <ul className="space-y-3">
                                            {projects[activeProject].features.map((f, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-3 text-brand-text/80"
                                                >
                                                    <Check size={16} className="text-brand-gold" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT: VISUALS */}
                    <div className="lg:w-8/12 flex flex-col gap-16 lg:gap-24 py-10 lg:py-20">
                        {projects.map((project, index) => (
                            <ProjectImageCard
                                key={project.id}
                                data={project}
                                index={index}
                                setActiveProject={setActiveProject}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

/* =======================
   IMAGE CARD
======================= */
const ProjectImageCard = ({ data, index, setActiveProject }) => {
    const { ref, inView } = useInView({
        threshold: 0.55,
        rootMargin: "-15% 0px -15% 0px"
    });

    useEffect(() => {
        if (inView) setActiveProject(index);
    }, [inView, index, setActiveProject]);

    return (
        <motion.div
            ref={ref}
            className={`relative w-full h-[60vh] md:h-[68vh] xl:h-[72vh]
        rounded-2xl overflow-hidden transition-all duration-700
        ${inView
                    ? "scale-100 opacity-100 ring-1 ring-brand-gold/30 shadow-xl shadow-brand-gold/10"
                    : "scale-[0.97] opacity-70 grayscale-[30%]"}`}
        >
            <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                style={{ transform: inView ? "scale(1)" : "scale(1.04)" }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* INDEX */}
            <div className="absolute top-6 right-6 font-serif text-[8rem] text-white/10 select-none">
                0{index + 1}
            </div>

            {/* MOBILE OVERLAY */}
            <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                <p className="text-brand-gold text-xs uppercase">{data.city}</p>
                <h3 className="text-white font-serif text-2xl">{data.title}</h3>
            </div>
        </motion.div>
    );
};

export default ProjectVerticals;
