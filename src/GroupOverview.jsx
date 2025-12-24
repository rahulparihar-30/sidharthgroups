import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Leaf, Lightbulb } from "lucide-react";

const stats = [
    { number: 40, label: "Years of Legacy", suffix: "+" },
    { number: 15, label: "Projects Executed & Ongoing", suffix: "+" },
    { number: 55, label: "Homes Delivered", suffix: "+" },
    { number: 2, label: "Key Cities (Mumbai & Pune)", suffix: "" },
];

const values = [
    {
        icon: <ShieldCheck />,
        title: "Trust",
        desc: "Built over four decades through consistent delivery, integrity, and long-term relationships."
    },
    {
        icon: <Lightbulb />,
        title: "Innovation",
        desc: "Evolving with time while improving construction quality, processes, and business models."
    },
    {
        icon: <Leaf />,
        title: "Sustainability",
        desc: "Responsible development focused on durability, efficiency, and long-term impact."
    },
    {
        icon: <TrendingUp />,
        title: "Growth",
        desc: "Expanding across sectors with a disciplined and future-ready approach."
    },
];

const GroupOverview = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about-us" className="bg-brand-black py-12 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro Section */}
                <div className="text-center max-w-4xl mx-auto mb-5">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        About Siddharth Group
                    </span>

                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-4 leading-tight">
                        A Diversified Conglomerate <br />
                        <span className="italic text-brand-muted">
                            Building Value Across Industries
                        </span>
                    </h2>

                    <p className="text-brand-gold uppercase tracking-widest text-xs mb-6">
                        A 40-Year Construction Legacy, Now a Diversified Growth Platform
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-5">

                    {/* Left: About Text */}
                    <div>
                        <p className="text-lg text-brand-muted leading-relaxed max-w-xl">
                            Siddharth Group is more than a business; it is a legacy built over four decades.
                            What began as a focused construction enterprise has evolved into a diversified group
                            with presence across infrastructure, education, finance, and media.
                            <br /><br />
                            With over 40 years of experience in construction, more than 15 completed and ongoing projects,
                            and 55 homes delivered across Mumbai and Pune, our foundation is rooted in trust,
                            execution excellence, and long-term value creation.
                            <br /><br />
                            Today, we continue to expand responsibly, guided by the same principles that have
                            defined our journey since inception — integrity, innovation, and sustainable growth.
                        </p>
                    </div>

                    {/* Right: Core Values */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="
          bg-brand-surface 
          p-4 
          rounded-xl 
          border border-white/5 
          hover:border-brand-gold/40 
          transition-all 
          duration-300 
          group
        "
                            >
                                <div className="
          w-11 h-11 
          bg-brand-gold/10 
          rounded-lg 
          flex items-center justify-center 
          text-brand-gold 
          mb-5 
          group-hover:scale-110 
          transition-transform
        ">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-serif text-white mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-brand-muted text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Stats Section */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-serif text-white mb-4">
                            A Legacy of Execution & Growth
                        </h3>
                        <p className="text-brand-muted mb-6">
                            From a single construction unit to a diversified group operating across
                            multiple industries, our journey reflects steady growth, operational discipline,
                            and long-term commitment.
                        </p>

                        <p className="text-brand-muted text-sm">
                            Operating across Mumbai (Parel) and Pune (Kothrud, Wakad, Camp),
                            with our corporate office located at Karve Road, Pune.
                        </p>
                    </div>

                    {/* Right Stats */}
                    <div className="space-y-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="relative">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
                                        {stat.label}
                                    </span>

                                    <span className="text-white font-serif text-xl">
                                        {inView ? (
                                            <CountUp end={stat.number} duration={2} separator="," />
                                        ) : (
                                            "0"
                                        )}
                                        {stat.suffix}
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${(index + 1) * 20 + 20}%` } : { width: 0 }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeOut",
                                            delay: index * 0.2,
                                        }}
                                        className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Compliance Note */}
                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <p className="text-brand-muted text-sm">
                        All group entities are duly registered and operate in compliance with applicable
                        statutory and regulatory frameworks. Certifications and licenses will be listed shortly.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default GroupOverview;
