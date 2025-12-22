import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Map, Tractor, HeartPulse, Film, Wallet, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const businesses = [
    {
        id: "construction",
        category: "Construction",
        name: "Siddharth Construction",
        tagline: "Building Icons",
        desc: "Delivering premium residential and commercial landmarks that redefine skylines. From high-rise luxury to sustainable townships, we build for the future.",
        icon: <Building2 className="w-6 h-6" />,
        color: "bg-blue-900",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        link: "/sid-construction"
    },
    {
        id: "franchise",
        category: "Franchise",
        name: "Siddharth Franchise",
        tagline: "Empowering Growth",
        desc: "A robust network empowering entrepreneurs with scalable business models. We provide end-to-end support from brand licensing to operational excellence.",
        icon: <Map className="w-6 h-6" />,
        color: "bg-emerald-900",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
        link: "/franchise"
    },
    {
        id: "agritech",
        category: "Agritech",
        name: "Siddharth Agritech",
        tagline: "Cultivating Future",
        desc: "Revolutionizing agriculture with hydroponics and AI-driven farming. We export residue-free, premium produce to global markets.",
        icon: <Tractor className="w-6 h-6" />,
        color: "bg-green-900",
        image: "/agritech.jpg",
        link: "/agri"
    },
    {
        id: "pharma",
        category: "Healthcare",
        name: "Siddharth Pharma",
        tagline: "Heal & Care",
        desc: "Ensuring accessible healthcare through a vast distribution network of life-saving medicines and wellness products.",
        icon: <HeartPulse className="w-6 h-6" />,
        color: "bg-teal-900",
        image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=1200&auto=format&fit=crop",
        link: "/pharma"
    },
    {
        id: "films",
        category: "Entertainment",
        name: "Lalit Films",
        tagline: "Visual Poetry",
        desc: "Producing cinematic masterpieces that resonate globally. We tell stories that inspire, entertain, and leave a lasting impact.",
        icon: <Film className="w-6 h-6" />,
        color: "bg-rose-900",
        image: "/lalitfilms/bala.jpg",
        link: "/lalit-films"
    },
    {
        id: "finance",
        category: "Finance",
        name: "Siddharth Finance",
        tagline: "Secure Wealth",
        desc: "Strategic wealth management and corporate lending solutions designed to maximize returns and ensure financial security.",
        icon: <Wallet className="w-6 h-6" />,
        color: "bg-amber-900",
        image: "/rupee-4395462_1280.jpg",
        link: "/finance"
    }
];

const BusinessVerticals = () => {
    return (
        <section className="bg-brand-black py-24 relative">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                    Our Ecosystem
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
                    Diversified <span className="italic text-brand-gold">Excellence</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                {businesses.map((item, index) => (
                    <Card key={item.id} item={item} index={index} range={[index * 0.15, 1]} targetScale={1 - (businesses.length - index) * 0.05} />
                ))}
            </div>
        </section>
    );
};

const Card = ({ item, index, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    // Sticky offset calculation to create the "Stacking" look
    const top = index * 40 + 120;

    return (
        <div ref={container} className="h-[80vh] flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `${top}px` }}
                className="relative w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl origin-top"
            >
                {/* Background Image */}
                <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/70`} />

                {/* Content */}
                <div className="absolute inset-0 p-12 flex flex-col md:flex-row gap-12 items-center">

                    {/* Left: Text Info */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-black">
                                {item.icon}
                            </div>
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                                {item.category}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            {item.name}
                        </h3>
                        <p className="text-xl text-gray-300 font-light">
                            {item.tagline}
                        </p>
                        <p className="text-brand-muted leading-relaxed">
                            {item.desc}
                        </p>

                        <Link to={item.link} className="flex items-center gap-2 text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors font-bold uppercase tracking-wider text-sm mt-4 w-fit">
                            Explore {item.category} <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Right: Visual or Abstract Graphic (Optional) */}
                    <div className="hidden md:block w-1/3 h-full border-l border-white/10 pl-12 flex flex-col justify-between py-4">
                        <span className="text-6xl font-serif text-white/5 font-bold">0{index + 1}</span>
                        <div className="w-full h-full rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center">
                            {/* Just an abstract decorative box for now */}
                            <div className="text-brand-gold opacity-20">
                                {item.icon}
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};

export default BusinessVerticals;
