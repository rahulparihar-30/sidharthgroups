import React from "react";
import { Lightbulb, Settings, Shield, BarChart, RefreshCw } from "lucide-react";

const steps = [
    {
        icon: <Lightbulb />,
        title: "Ideation & Planning",
        desc: "Rigorous market research and strategic planning to identify high-potential opportunities."
    },
    {
        icon: <Settings />,
        title: "Execution Excellence",
        desc: "Deploying state-of-the-art technology and SOPs to ensure flawless project delivery."
    },
    {
        icon: <Shield />,
        title: "Quality & Compliance",
        desc: "Zero-tolerance policy on quality, adhering to the strictest industry regulations."
    },
    {
        icon: <BarChart />,
        title: "Sustainable Growth",
        desc: "Focusing on long-term value creation for stakeholders and community impact."
    },
];

const OurApproach = () => {
    return (
        <section className="bg-brand-black py-24 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
                        The Siddharth Methodology
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-brand-surface border border-white/10 rounded-full flex items-center justify-center text-brand-gold text-3xl mb-8 group-hover:border-brand-gold group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurApproach;
