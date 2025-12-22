import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
    const [selectedDivision, setSelectedDivision] = useState("Corporate Head Office");

    const divisions = [
        "Corporate Head Office",
        "Siddharth Construction",
        "Siddharth Franchise",
        "Siddharth Agritech",
        "Lalit Films",
        "Siddharth Finance"
    ];

    return (
        <section className="bg-brand-black py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left: Contact Info */}
                <div>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8 leading-tight">
                        Let's build something <br />
                        <span className="text-brand-gold">Great Together</span>
                    </h2>
                    <p className="text-brand-muted text-lg mb-12">
                        Have a query? Select the relevant business division and send us a message.
                        Our team will get back to you within 24 hours.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg">Visit Us</h4>
                                <p className="text-brand-muted">Siddharth Towers, Baner Road,<br />Pune, Maharashtra - 411045</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg">Email Us</h4>
                                <p className="text-brand-muted">contact@siddharthgroup.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-lg">Call Us</h4>
                                <p className="text-brand-muted">+91 20 1234 5678</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-brand-surface p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">First Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Last Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Email Address</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Department / Division</label>
                            <div className="relative">
                                <select
                                    value={selectedDivision}
                                    onChange={(e) => setSelectedDivision(e.target.value)}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold outline-none appearance-none cursor-pointer"
                                >
                                    {divisions.map((div) => (
                                        <option key={div} value={div}>{div}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-gold outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                            Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
