import React from "react";

const WhyChooseUs = () => {
    return (
        <section className="bg-brand-surface py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: CONTENT */}
                <div>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Why Partner With Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
                        A Legacy Built on <br />
                        <span className="text-brand-gold">Trust & Excellence</span>
                    </h2>

                    <p className="text-brand-muted text-lg leading-relaxed max-w-xl">
                        Backed by a 40-year construction legacy, Siddharth Group operates as a
                        diversified platform across infrastructure, education, finance, and media.
                        We focus on disciplined execution, transparent governance, and long-term
                        value creation for our partners.
                    </p>

                    {/* CTA */}
                    <button className="
            mt-10 
            px-8 py-4 
            bg-brand-gold 
            text-brand-black 
            font-bold 
            uppercase 
            tracking-wider 
            hover:bg-white 
            hover:text-black 
            transition-colors 
            rounded-sm
          ">
                        Explore Partnership Opportunities
                    </button>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="relative h-[520px] rounded-2xl overflow-hidden border border-white/5 group">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                        alt="Corporate Infrastructure"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/35" />

                    {/* Minimal Caption */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-lg border border-white/10">
                        <p className="text-white text-sm">
                            Four decades of execution. Built for long-term partnerships.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
