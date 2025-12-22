import React from "react";
import { CheckCircle, Users, Scale, Zap, Globe } from "lucide-react";

const reasons = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Diversified Expertise",
        desc: "A powerhouse of knowledge spanning construction, finance, agritech, and media. We bring cross-industry insights to every project."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Experienced Leadership",
        desc: "Guided by visionaries with decades of experience in navigating complex markets and driving sustainable growth."
    },
    {
        icon: <Scale className="w-8 h-8" />,
        title: "Ethical Practices",
        desc: "Integrity is our currency. We adhere to the substantial standards of corporate governance and transparency."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Scalable Solutions",
        desc: "Future-ready business models designed for rapid expansion without compromising on quality or operational efficiency."
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-brand-surface py-24 relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-black/5 clip-path-polygon opacity-20" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Why Partner With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8 leading-tight">
                        A Legacy Built on <br />
                        <span className="text-brand-gold">Trust & Excellence</span>
                    </h2>
                    <p className="text-brand-muted text-lg mb-10 leading-relaxed">
                        In a rapidly changing world, you need a partner who offers stability, innovation, and integrity.
                        Siddharth Group combines the agility of a modern enterprise with the wisdom of a traditional conglomerate,
                        offering you the best of both worlds.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="text-brand-gold flex-shrink-0 mt-1">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg mb-2">{reason.title}</h4>
                                    <p className="text-sm text-brand-muted leading-relaxed">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm">
                        Get in Touch
                    </button>
                </div>

                {/* Right: Abstract Visual or Image */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/5 group">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                        alt="Corporate HQ"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-gold/20 mix-blend-overlay" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl">
                        <p className="text-brand-gold text-4xl font-bold font-serif">AAA+</p>
                        <p className="text-white text-xs uppercase tracking-widest mt-1">Credit Rating</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
