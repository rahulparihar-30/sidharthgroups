import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What industries does Siddharth Groups operate in?",
        answer:
            "Siddharth Groups is a diversified conglomerate with a strong presence in Real Estate & Infrastructure (Siddharth Creation), Education (Aadhya & Vcare), Pharmaceuticals (Vcare Pharma), Film Production (Lalit Films), and Financial Services (FinBridge & Mehta Equities).",
    },
    {
        question: "How long has the group been established?",
        answer:
            "Our journey began over 40 years ago in 1983. Founded by Mr. Lalit Kumar, the group has grown from a construction enterprise into a multi-vertical organization serving thousands of customers across India.",
    },
    {
        question: "Where are your key projects located?",
        answer:
            "Our primary operations are based in Mumbai and Pune. Key real estate projects are located in prime areas like Kothrud, Wakad, and Baner in Pune, as well as Parel in Mumbai.",
    },
    {
        question: "How can I invest with Siddharth Groups?",
        answer:
            "We offer various investment avenues through our Finance division, including SME growth funds and portfolio management services. For specific opportunities, please reach out to our team at FinBridge.",
    },
    {
        question: "Is the group committed to sustainable practices?",
        answer:
            "Yes, sustainability is a core value. From eco-friendly construction materials in our real estate projects to green initiatives across all our verticals, we prioritize long-term environmental responsibility.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-brand-black py-16 md:py-24 relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Common Queries
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">
                        Frequently Asked <span className="italic text-brand-gold">Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index ? "bg-white/5 border-brand-gold/30" : "bg-transparent hover:bg-white/5"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-serif text-lg md:text-xl transition-colors ${activeIndex === index ? "text-brand-gold" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 p-2 rounded-full border border-white/10 transition-colors ${activeIndex === index ? "text-brand-gold bg-brand-gold/10 border-brand-gold" : "text-gray-400"}`}>
                                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-brand-muted leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
