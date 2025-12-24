import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Media Data
const mediaItems = [
    {
        id: 1,
        title: "Pune’s 101-Year-Old Tea Stall Continues to Brew Tradition and Taste",
        date: "Punekar News",
        source: "Punekar News",
        image: "/aadhya/adhya-1.webp",
        link: "https://www.punekarnews.in/aadya-amruttulya-punes-101-year-old-tea-stall-still-brewing-strong-with-tradition-and-taste/"
    },
    {
        id: 2,
        title: "This Is the Oldest Tea Shop of Pune With a Bollywood Connection",
        date: "Times of India",
        source: "Times of India",
        image: "/aadhya/adhya-2.webp",
        link: "https://timesofindia.indiatimes.com/life-style/food-news/this-is-the-oldest-tea-shop-of-pune-which-has-a-bollywood-connection-too/photostory/88977890.cms"
    },
    {
        id: 3,
        title: "International Tea Day: Inside Pune’s Amruttulya Tea Culture",
        date: "Indian Express",
        source: "Indian Express",
        image: "/aadhya/adhya-3.webp",
        link: "https://indianexpress.com/article/lifestyle/food-wine/international-tea-day-dipping-into-punes-amruttulya-tea-drinking-culture-6420853/"
    },
    {
        id: 4,
        title: "What Links Pune, Rajasthan & Shammi Kapoor? A Chai That's 'Amruttulya'",
        date: "ScoopWhoop Hindi",
        source: "ScoopWhoop Hindi",
        image: "/aadhya/adhya-4.webp",
        link: "https://hindi.scoopwhoop.com/lifestyle/established-in-1924-head-to-adhya-amruttulya-pune-oldest-tea-shop/"
    },
    {
        id: 5,
        title: "Amruttulya and Pune’s Enduring Tea Culture",
        date: "LiveMint",
        source: "LiveMint",
        image: "/aadhya/adhya-5.webp",
        link: "https://www.livemint.com/mint-lounge/food/amruttulya-pune-culture-tea-city-111691151912291.html"
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
        <section id="media" className="bg-brand-black py-24 border-t border-white/10 relative overflow-hidden">
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
