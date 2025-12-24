import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Building2,
    GraduationCap,
    HeartPulse,
    Film,
    Wallet,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================
   BUSINESS DATA (FINAL)
========================= */

const businesses = [
    {
        id: "creation",
        category: "Creation & Infrastructure",
        name: "Siddharth Creation",
        tagline: "Built on Legacy. Designed for the Future.",
        desc: "Backed by a 40-year construction legacy, Siddharth Creation develops residential and commercial projects focused on quality, durability, and long-term value across Mumbai and Pune.",
        icon: <Building2 className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
        link: "/siddharth-creation"
    },
    {
        id: "education",
        category: "Education",
        name: "Adhya & Vcare Education",
        tagline: "Shaping Minds for Tomorrow.",
        desc: "Our education initiatives span early learning and institutional education, delivering structured, nurturing environments focused on long-term academic and personal development.",
        icon: <GraduationCap className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
        link: "/education"
    },
    {
        id: "pharma",
        category: "Pharma & Healthcare",
        name: "Vcare Pharma",
        tagline: "Committed to Care.",
        desc: "Vcare Pharma operates in pharmaceutical services with a focus on quality, compliance, and accessibility, supporting healthcare ecosystems with reliability and responsibility.",
        icon: <HeartPulse className="w-6 h-6" />,
        image: "/pharma.jpg",
        link: "/vcare-pharma"
    },
    {
        id: "films",
        category: "Films & Media",
        name: "Lalit Films",
        tagline: "Stories with Purpose.",
        desc: "Lalit Films produces cinematic and digital content rooted in strong narratives, cultural depth, and commercial viability across regional and national platforms.",
        icon: <Film className="w-6 h-6" />,
        image: "/lalitfilms/bala.jpg",
        link: "/lalit-films"
    },
    {
        id: "finance",
        category: "Finance & Accounting",
        name: "FinBridge & Mehta Equities",
        tagline: "Capital Managed with Clarity.",
        desc: "Through FinBridge and Mehta Equities, we provide investment services, accounting, and financial advisory with transparency, discipline, and long-term value focus.",
        icon: <Wallet className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
        link: "/finance-accounting"
    }
];

/* =========================
   MAIN COMPONENT
========================= */

const BusinessVerticals = () => {
    return (
        <section className="bg-brand-black py-24 relative" id="business">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                    Our Businesses
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
                    A Diversified <span className="italic text-brand-gold">Business Portfolio</span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                {businesses.map((item, index) => (
                    <Card
                        key={item.id}
                        item={item}
                        index={index}
                        targetScale={1 - (businesses.length - index) * 0.05}
                    />
                ))}
            </div>
        </section>
    );
};

/* =========================
   STACK CARD COMPONENT
========================= */

const Card = ({ item, index, targetScale }) => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    const topOffset = index * 30;

    return (
        <div ref={container} className="h-[85vh] flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `${topOffset}px` }}
                className="relative w-full max-w-5xl h-auto min-h-[550px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl origin-top"
            >
                {/* Background */}
                <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />

                {/* Content */}
                <div className="absolute inset-0 p-12 flex flex-col md:flex-row gap-12 items-center">

                    {/* Left */}
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

                        <p className="text-brand-muted leading-relaxed max-w-xl">
                            {item.desc}
                        </p>

                        <Link
                            to={item.link}
                            className="flex items-center gap-2 text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors font-bold uppercase tracking-wider text-sm w-fit"
                        >
                            Explore More <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Right Decorative */}
                    <div className="hidden md:flex w-1/3 h-full border-l border-white/10 pl-12 flex-col justify-between py-4">
                        <span className="text-6xl font-serif text-white/5 font-bold">
                            0{index + 1}
                        </span>
                        <div className="w-full h-full rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center">
                            <div className="text-brand-gold opacity-20 scale-150">
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
