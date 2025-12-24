import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Target, Heart, ArrowRight } from "lucide-react";

const items = [
    {
        id: "vision",
        title: "Our Vision",
        subtitle: "Empowering Tomorrow",
        desc: "To be a global leader in diverse industries, setting benchmarks for quality, innovation, and sustainability while empowering communities and stakeholders.",
        icon: <Send className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "mission",
        title: "Our Mission",
        subtitle: "Excellence in Action",
        desc: "To deliver world-class solutions across construction, education, finance, and media by leveraging cutting-edge technology and ethical business practices.",
        icon: <Target className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "values",
        title: "Core Values",
        subtitle: "Integrity First",
        desc: "Guided by unwavering integrity, we champion sustainable growth, customer centricity, and innovation in every endeavor.",
        list: ["Integrity", "Sustainability", "Customer Focus", "Innovation"],
        icon: <Heart className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
    }
];

const VisionMission = () => {
    const [active, setActive] = useState("mission");

    return (
        <section id="vision-mission" className="bg-brand-black py-24 relative border-t border-brand-border/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                    Our Philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 leading-tight">
                    The <span className="italic text-brand-gold">Foundation</span> of Success
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 h-auto md:h-[600px] flex flex-col md:flex-row gap-4">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        onClick={() => setActive(item.id)}
                        onHoverStart={() => setActive(item.id)} // Desktop hover interaction
                        className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-white/5 ${active === item.id ? "flex-[3]" : "flex-1"
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-transform duration-700 hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent ${active === item.id ? 'opacity-90' : 'opacity-80'}`} />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${active === item.id ? "bg-brand-gold text-black" : "bg-white/10 text-brand-gold"
                                    }`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-1">
                                        {item.title}
                                    </span>
                                    {/* If inactive, show title only. If active, title is also prominent below. */}
                                    <h3 className={`text-xl font-serif text-white transition-opacity ${active === item.id ? 'opacity-0 h-0 hidden' : 'opacity-100'}`}>
                                        {item.subtitle}
                                    </h3>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <motion.div
                                initial={false}
                                animate={{ opacity: active === item.id ? 1 : 0, height: active === item.id ? "auto" : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                <h3 className="text-4xl font-serif text-white mb-4 leading-tight">
                                    {item.subtitle}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
                                    {item.desc}
                                </p>

                                {item.list && (
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {item.list.map((val, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-brand-gold font-medium border border-white/5">
                                                {val}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider text-xs group">
                                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VisionMission;
