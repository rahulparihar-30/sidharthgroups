import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Media Data
const mediaItems = [
    {
        id: 1,
        title: "Siddharth Group announces massive expansion in Agritech sector",
        date: "Dec 12, 2024",
        source: "Economic Times",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 2,
        title: "Lalit Films' 'The Last Dynasty' breaks box office records",
        date: "Nov 28, 2024",
        source: "Variety",
        image: "/lalitfilms/raeesjada.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Revolutionizing Real Estate: The new Skyline Towers project",
        date: "Oct 15, 2024",
        source: "Construction Week",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 4,
        title: "Siddharth Franchise wins 'Best Business Model' award",
        date: "Sep 05, 2024",
        source: "Business Standard",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 5,
        title: "Giving Back: Group's new initiative for rural healthcare",
        date: "Aug 20, 2024",
        source: "The Hindu",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 6,
        title: "Interview with Chairman Mr. Lalit Kumar on future goals",
        date: "Jul 10, 2024",
        source: "Forbes India",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
        link: "#"
    }
];

const MediaSection = () => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-brand-black py-24 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                            In The News
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mt-3">
                            Media & <span className="text-brand-gold italic">Press</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={scrollLeft}
                            className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Scrolling List */}
                <div
                    ref={containerRef}
                    className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
                >
                    {mediaItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => window.open(item.link, "_blank")}
                            className="flex-shrink-0 w-[350px] md:w-[400px] snap-start group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                                {/* Read Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex items-center gap-3 text-xs text-brand-gold font-bold uppercase tracking-wider mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {item.date}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-500" />
                                <span>{item.source}</span>
                            </div>

                            <h3 className="text-2xl font-serif text-white leading-snug group-hover:text-brand-gold transition-colors">
                                {item.title}
                            </h3>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                                Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MediaSection;
