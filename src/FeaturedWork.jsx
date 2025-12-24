import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

import { filmsProduced } from "./data";

const filmProjects = filmsProduced.map((film, index) => ({
    id: `film-${index}`,
    category: "Lalit Films",
    title: film.title,
    tagline: film.genre,
    stat: "Blockbuster", // Placeholder as per request to remove specific stats
    description: film.description,
    features: [film.cast.split(',')[0], "Cinematic"], // Simplified features
    image: film.image,
    isFilm: true // Flag to identify film projects for custom card rendering if needed
}));

const constructionsAndOthers = [
    // --- Construction ---
    {
        id: 1,
        category: "Construction",
        title: "Skyline Towers",
        tagline: "Ultra-Luxury Residential Complex",
        stat: "1.2M Sq.Ft",
        description: "A landmark residential project redefining luxury living with state-of-the-art amenities and sustainable architecture.",
        features: ["LEED Gold Certified", "Smart Home Automation", "Infinity Pool"],
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 11,
        category: "Construction",
        title: "Siddharth Business Bay",
        tagline: "Premier Commercial Hub",
        stat: "800k Sq.Ft",
        description: "A nice-gen IT park designed for global enterprises, featuring ergonomic workspaces and green zones.",
        features: ["Grade A Office Space", "IGBC Platinum", "High-Speed Elevators"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 12,
        category: "Construction",
        title: "The Riverfront",
        tagline: "Gated Villa Community",
        stat: "40 Acres",
        description: "Exclusive river-facing villas offering a blend of modern design and serene natural surroundings.",
        features: ["Private Jetties", "Clubhouse", "Eco-friendly Design"],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    },

    // --- Finance ---
    {
        id: 4,
        category: "Finance",
        title: "Siddharth Capital",
        tagline: "SME Growth Fund",
        stat: "₹500Cr Fund",
        description: "Empowering over 200 small businesses with timely capital and strategic mentorship for exponential growth.",
        features: ["High ROI", "Risk Mitigated", "Sector Agnostic"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: 41,
        category: "Finance",
        title: "WealthSecure",
        tagline: "Family Office Services",
        stat: "Premium Advisory",
        description: "Bespoke wealth management solutions for ultra-high-net-worth individuals and families.",
        features: ["Legacy Planning", "Global Assets", "Tax Optimization"],
        image: "https://images.unsplash.com/photo-1565514020176-dbf2277478f3?q=80&w=1200&auto=format&fit=crop"
    }
];

const projects = [...constructionsAndOthers, ...filmProjects];

const FeaturedWork = () => {
    const [filter, setFilter] = useState("All");
    const containerRef = useRef(null);

    const categories = ["All", "Construction", "Lalit Films", "Finance"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    // Reset scroll when filter changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
        }
    }, [filter]);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-brand-black relative py-24 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-7xl mx-auto gap-8">
                    <div>
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                            Our Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
                            Selected <span className="italic text-brand-gold">Masterpieces</span>
                        </h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${filter === cat
                                    ? "bg-brand-gold text-black border-brand-gold scale-105"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative group">

                    {/* Scroll Buttons (Desktop) */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-xl"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <motion.div
                        ref={containerRef}
                        layout
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-[10vw]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} data={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

const ProjectCard = ({ data }) => {
    // Custom Card for Films
    if (data.isFilm) {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-center group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-xl"
            >
                {/* Poster Image - Full Bleed */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                {/* Film Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-center">
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {data.tagline}
                    </span>
                    <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-lg">{data.title}</h3>
                </div>
            </motion.div>
        );
    }

    // Default Card for Other Projects
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
        >
            {/* Background Image */}
            <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-brand-gold text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                        {data.category}
                    </span>
                    <h3 className="text-3xl font-serif text-white mb-2">{data.title}</h3>
                    <p className="text-brand-gold font-medium mb-2">{data.tagline}</p>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-2 max-w-sm">
                        {data.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {data.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                                <CheckCircle2 size={12} className="text-brand-gold" />
                                {feat}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs border-b border-brand-gold pb-1 w-fit group-hover:text-brand-gold transition-colors">
                        View Case Study <ArrowUpRight size={14} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedWork;
