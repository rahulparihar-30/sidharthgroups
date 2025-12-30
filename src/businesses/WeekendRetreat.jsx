import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Palmtree, PartyPopper, Music, Utensils, CalendarHeart, MapPin, X, ArrowUpRight, Phone } from "lucide-react";
import { weekendRetreatData } from "../data";
import { useInView } from "react-intersection-observer";

const WeekendRetreat = () => {
    const data = weekendRetreatData;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.video
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={"/bonfire-2.mp4"}
                    autoPlay
                    loop
                    muted
                    alt={data.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/30" />

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            {data.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light italic">
                            "{data.tagline}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- STATS STRIP --- */}
            <div className="bg-brand-surface border-y border-brand-border relative z-20 -mt-16 mx-4 md:mx-12 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-90">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="p-6 text-center group hover:bg-white/5 transition-colors">
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

            {/* --- ABOUT SECTION --- */}
            <section className="max-w-7xl mx-auto px-6 py-24" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
                            Exclusive Getaways
                        </h2>
                        <h3 className="text-4xl font-serif text-white mb-6 leading-tight">
                            Experience The <br /> <span className="text-brand-gold">Extraordinary</span>
                        </h3>
                        <p className="text-brand-muted text-lg leading-relaxed mb-6">
                            {data.aboutText}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="tel:+918080012133"
                                className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-black font-bold rounded hover:bg-white transition-colors"
                            >
                                Book Your Escape <Phone size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Feature */}
                    <motion.div
                        className="bg-brand-surface/50 p-8 rounded-xl border border-brand-border backdrop-blur-sm relative overflow-hidden group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all"></div>
                        <h4 className="text-2xl font-serif text-white mb-6 relative z-10">Premium Amenities</h4>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <Palmtree size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                <p className="text-brand-muted text-sm">Lush green landscapes perfect for outdoor relaxation.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <PartyPopper size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                <p className="text-brand-muted text-sm">Event-ready spaces for parties and celebrations.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Music size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                <p className="text-brand-muted text-sm">Acoustic setups for bonfire nights and music events.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Utensils size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                <p className="text-brand-muted text-sm">Gourmet dining experiences with personalized menus.</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section className="bg-brand-surface py-24 border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
                        Our Offerings
                    </h2>
                    <h3 className="text-center text-3xl md:text-4xl font-serif text-white mb-12">
                        Curated Experiences
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.services.map((service, index) => (
                            <div key={index} className="bg-brand-black p-8 rounded-xl border border-brand-border hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-[100px] transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bg-brand-gold/10"></div>
                                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-black transition-colors relative z-10">
                                    {index === 0 ? <PartyPopper size={24} /> :
                                        index === 1 ? <Music size={24} /> :
                                            index === 2 ? <MapPin size={24} /> : <Utensils size={24} />}
                                </div>
                                <h4 className="text-xl font-serif text-white mb-3 relative z-10">{service.title}</h4>
                                <p className="text-sm text-brand-muted leading-relaxed relative z-10">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VISUAL SHOWCASE (Interactive Bento Grid) --- */}
            <section className="py-24 bg-black border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Visual Tour</h2>
                            <h3 className="text-3xl md:text-5xl font-serif text-white">Vibes & Views</h3>
                        </motion.div>

                        <motion.button
                            onClick={() => setIsGalleryOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 border-b border-brand-gold text-brand-gold font-bold uppercase tracking-wider text-sm pb-1 hover:text-white hover:border-white transition-colors"
                        >
                            View All Photos <ArrowUpRight size={16} />
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
                        {/* Large Featured Image (Left) */}
                        <motion.div
                            className="md:col-span-2 relative group overflow-hidden rounded-2xl cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            onClick={() => setIsGalleryOpen(true)}
                        >
                            <motion.img
                                src={data.gallery[0]}
                                alt="Main View"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Signature Experience</p>
                                <h4 className="text-3xl font-serif text-white">The Royal Villa & Pool</h4>
                            </div>
                        </motion.div>

                        {/* Side Stack (Right) */}
                        <div className="flex flex-col gap-6">
                            {/* Top Small Image */}
                            <motion.div
                                className="flex-1 relative group overflow-hidden rounded-2xl cursor-pointer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                onClick={() => setIsGalleryOpen(true)}
                            >
                                <motion.img
                                    src={data.gallery[1]}
                                    alt="Detail View 1"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-block border border-white/30 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                        Night Life
                                    </span>
                                </div>
                            </motion.div>

                            {/* Bottom Small Image */}
                            <motion.div
                                className="flex-1 relative group overflow-hidden rounded-2xl cursor-pointer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                onClick={() => setIsGalleryOpen(true)}
                            >
                                <motion.img
                                    src={data.gallery[2]}
                                    alt="Detail View 2"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-block border border-white/30 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                        Gourmet Dining
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FULL SCREEN GALLERY MODAL --- */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="fixed top-6 right-6 z-50 p-2 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
                        >
                            <X size={32} />
                        </button>

                        <div className="max-w-7xl mx-auto px-6 py-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Complete Collection</h2>
                                <h3 className="text-4xl md:text-5xl font-serif text-white">Experience Every Moment</h3>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...data.gallery, ...(data.extendedGallery || []).map(item => item.src || item)].map((src, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative group rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery ${index}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default WeekendRetreat;
