import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Leaf, Lightbulb } from "lucide-react";

const stats = [
    { number: 40, label: "Years of Experience", suffix: "+" },
    { number: 6, label: "Business Verticals", suffix: "" },
    { number: 12, label: "Million Sq.Ft Delivered", suffix: "+" },
    { number: 40, label: "Cities Presence", suffix: "+" },
];

const values = [
    { icon: <ShieldCheck />, title: "Trust", desc: "Building relationships that last generations." },
    { icon: <Lightbulb />, title: "Innovation", desc: "Pioneering new ways to solve old problems." },
    { icon: <Leaf />, title: "Sustainability", desc: "Committed to a greener, better tomorrow." },
    { icon: <TrendingUp />, title: "Growth", desc: "Expanding horizons and creating value." },
];

const GroupOverview = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="bg-brand-black py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro Text */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        About Siddharth Group
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
                        A Diversified Conglomerate <br />
                        <span className="italic text-brand-muted">Building Value Across Industries</span>
                    </h2>
                    <p className="text-lg text-brand-muted leading-relaxed">
                        Siddharth Group is more than a business; it is an ecosystem of excellence.
                        From shaping skylines to empowering farmers, and from securing wealth to telling
                        stories that matter, we are driven by a singular vision: to create lasting impact
                        through trust, innovation, and sustainable growth.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {values.map((item, index) => (
                        <div key={index} className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors group">
                            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                            <p className="text-brand-muted text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats - Dynamic Graphs */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16 items-center">

                    {/* Graph Description */}
                    <div>
                        <h3 className="text-3xl font-serif text-white mb-4">Unstoppable Growth</h3>
                        <p className="text-brand-muted mb-6">
                            Our trajectory is defined by consistent expansion and diversified milestones.
                            From a single construction unit to a multi-vertical conglomerate.
                        </p>
                    </div>

                    {/* The Bars */}
                    <div className="space-y-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="relative">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">{stat.label}</span>
                                    <span className="text-white font-serif text-xl">
                                        {inView ? <CountUp end={stat.number} duration={2} separator="," /> : "0"}{stat.suffix}
                                    </span>
                                </div>

                                {/* Bar Background */}
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    {/* Animated Bar */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${(index + 1) * 20 + 20}%` } : { width: 0 }} // Staggered visual lengths for effect
                                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                        className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GroupOverview;
