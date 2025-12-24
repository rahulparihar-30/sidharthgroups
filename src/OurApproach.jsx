import React from "react";
import {
    Lightbulb,
    Settings,
    ShieldCheck,
    BarChart3
} from "lucide-react";

const steps = [
    {
        icon: <Lightbulb />,
        step: "01",
        title: "Strategic Ideation",
        desc: "We begin with deep market analysis, risk assessment, and feasibility studies to identify opportunities with long-term potential."
    },
    {
        icon: <Settings />,
        step: "02",
        title: "Disciplined Execution",
        desc: "Projects are executed through structured SOPs, experienced teams, and technology-driven processes to ensure consistency and control."
    },
    {
        icon: <ShieldCheck />,
        step: "03",
        title: "Quality & Governance",
        desc: "We maintain uncompromising standards for quality, safety, and regulatory compliance across every business vertical."
    },
    {
        icon: <BarChart3 />,
        step: "04",
        title: "Sustainable Value Creation",
        desc: "Our focus extends beyond delivery — we build assets and businesses that generate enduring value for stakeholders and communities."
    }
];

const OurApproach = () => {
    return (
        <section className="bg-brand-black py-16 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight">
                        A Proven Framework for <br />
                        <span className="italic text-brand-gold">Sustainable Growth</span>
                    </h2>
                    <p className="text-brand-muted mt-6 text-lg">
                        Our methodology combines strategic thinking, execution discipline,
                        and governance to deliver consistent results across industries.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[3.25rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Icon Wrapper */}
                            <div className="relative w-24 h-24 bg-brand-surface border border-white/10 rounded-full flex items-center justify-center text-brand-gold text-3xl mb-6 transition-all duration-500 group-hover:border-brand-gold group-hover:scale-110 shadow-xl shadow-black">
                                {step.icon}

                                {/* Step Number */}
                                <span className="absolute -bottom-3 bg-brand-black px-3 py-1 text-xs tracking-widest font-bold text-brand-gold border border-brand-gold/30 rounded-full">
                                    {step.step}
                                </span>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-serif text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <div className="mt-24 text-center max-w-2xl mx-auto">
                    <p className="text-brand-muted text-sm">
                        This structured approach enables Siddharth Group to manage complexity,
                        reduce risk, and scale responsibly across diverse business verticals.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default OurApproach;
