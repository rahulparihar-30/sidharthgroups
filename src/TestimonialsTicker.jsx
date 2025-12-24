import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        author: "Real Estate Partner",
        role: "Strategic Investor",
        text: "Siddharth Group brings rare consistency and execution discipline. Their understanding of long-term value sets them apart."
    },
    {
        author: "Investment Associate",
        role: "Capital Ventures",
        text: "What stands out is their transparent approach and structured decision-making across multiple business verticals."
    },
    {
        author: "Project Consultant",
        role: "Infrastructure Lead",
        text: "With a strong 40-year construction legacy, the group demonstrates reliability, governance, and delivery confidence."
    },
    {
        author: "Business Advisor",
        role: "Corporate Strategy",
        text: "Siddharth Group balances growth with responsibility — a quality essential for sustainable partnerships."
    },
    {
        author: "Strategic Partner",
        role: "Global Operations",
        text: "Their diversified presence across infrastructure, finance, and education creates stability and reduces operational risk."
    },
    {
        author: "Finance Director",
        role: "Banking Partner",
        text: "A refreshing and imaginative agency that consistently delivers exceptional results."
    }
];

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);

const TestimonialCard = ({ item }) => {
    return (
        <div className="
            relative
            w-[350px]
            bg-brand-surface
            border border-white/10
            rounded-2xl
            p-8
            flex flex-col justify-between
            shrink-0
            hover:border-brand-gold/50
            hover:bg-brand-surface/80
            transition-all duration-300
            cursor-pointer
        ">
            <Quote className="absolute top-6 right-8 text-brand-gold/10 w-12 h-12" />
            <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                </div>
                <p className="text-brand-muted text-base leading-relaxed font-light mb-6">
                    "{item.text}"
                </p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                    {item.author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-medium text-sm">{item.author}</h4>
                    <p className="text-brand-muted text-xs">{item.role}</p>
                </div>
            </div>
        </div>
    );
};

const MarqueeRow = ({ items, direction = "left", speed = "40s" }) => {
    return (
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {/* 1. We use a simple div instead of motion.div 
               2. We apply a custom animation style inline or via class
               3. The `hover:[animation-play-state:paused]` class does the magic
            */}
            <div
                className="flex gap-6 w-max hover:[animation-play-state:paused]"
                style={{
                    animation: `scroll-${direction} ${speed} linear infinite`
                }}
            >
                {/* Duplicate list enough times to ensure seamless loop.
                    We use 4 sets to cover wide screens easily.
                */}
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <TestimonialCard key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

const TestimonialsTicker = () => {
    return (
        <section className="bg-brand-black py-24 overflow-hidden relative">

            {/* Inject Custom Keyframes for the CSS Animation */}
            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            <div className="text-center max-w-3xl mx-auto mb-20"> <span className="text-brand-gold font-bold uppercase tracking-widest text-sm"> Media Recognition </span> <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight"> What the <span className="italic text-brand-gold">Media Says</span> </h2> <p className="text-brand-muted mt-6 text-lg"> Our work and businesses have been featured across leading national and regional media platforms, reflecting our credibility and growing impact. </p> </div>

            <div className="flex flex-col gap-6">
                {/* Top Row - Scrolls Left */}
                <MarqueeRow items={firstRow} direction="left" speed="60s" />

                {/* Bottom Row - Scrolls Right */}
                <MarqueeRow items={secondRow} direction="right" speed="60s" />
            </div>

        </section>
    );
};

export default TestimonialsTicker;