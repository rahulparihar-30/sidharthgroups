import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Phone, TrendingUp, PieChart as PieChartIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { financeData } from "../data";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";

// --- Chart Data ---
const growthData = [
    { year: "2019", aum: 120 },
    { year: "2020", aum: 250 },
    { year: "2021", aum: 480 },
    { year: "2022", aum: 650 },
    { year: "2023", aum: 780 },
    { year: "2024", aum: 850 },
];

const allocationData = [
    { name: "Equity", value: 45 },
    { name: "Debt", value: 30 },
    { name: "Real Estate", value: 15 },
    { name: "Gold/Commodities", value: 10 },
];

const COLORS = ["#FFD700", "#FFFFFF", "#808080", "#C0C0C0"]; // Gold, White, Grey, Silver

const Finance = () => {
    const data = financeData;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.video
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={"/finance.mp4"}
                    alt={data.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-black/30" />

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Sidharth Finance
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light italic">
                            <span className="bg-red-800 p-1">Secure</span> Wealth. Sustainable <span className="bg-green-800 p-1">Growth.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- STATS STRIP --- */}
            <div className="bg-brand-surface border-y border-brand-border relative z-20 -mt-16 mx-4 md:mx-12 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md bg-opacity-90">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="p-6 text-center group hover:bg-white/5 transition-colors">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-1 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-brand-muted">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- PARTNERSHIPS & DYNAMIC CHARTS --- */}
            <section className="max-w-7xl mx-auto px-6 py-24" ref={ref}>
                <div className="flex flex-col gap-24">

                    {/* Section 1: Mehta Equities + Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
                                Strategic Wealth Creation
                            </h2>
                            <h3 className="text-4xl font-serif text-white mb-6 leading-tight">
                                Partnering with <br /> <span className="text-brand-gold">Mehta Equities</span>
                            </h3>
                            <p className="text-brand-muted text-lg leading-relaxed mb-6">
                                Sidharth Finance is dedicated to securing your future through intelligent investment strategies. In alliance with M/s. Mehta Equities, we bring you world-class financial expertise, comprehensive market analysis, and a suite of investment products tailored to your growth goals.
                            </p>
                            <p className="text-brand-muted text-lg leading-relaxed mb-8 border-l-2 border-brand-gold/30 pl-6">
                                "{data.aboutText}"
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://mehtaequities.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-black font-bold rounded hover:bg-white transition-colors"
                                >
                                    Visit Mehta Equities <Globe size={18} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Charts Area */}
                        <motion.div
                            className="bg-brand-surface/50 p-6 rounded-xl border border-brand-border backdrop-blur-sm"
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* AUM Chart */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                        <TrendingUp size={20} className="text-brand-gold" /> AUM Growth (Cr)
                                    </h4>
                                </div>
                                <div className="h-64 w-full">
                                    {inView && (
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={growthData}>
                                                <defs>
                                                    <linearGradient id="colorAum" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                                <XAxis dataKey="year" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "4px" }}
                                                    itemStyle={{ color: "#FFD700" }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="aum"
                                                    stroke="#FFD700"
                                                    strokeWidth={2}
                                                    fillOpacity={1}
                                                    fill="url(#colorAum)"
                                                    animationDuration={2000}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    )}
                                </div>
                            </div>

                            {/* Pie Chart */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                        <PieChartIcon size={20} className="text-brand-gold" /> Portfolio Diversity
                                    </h4>
                                </div>
                                <div className="h-48 w-full flex justify-center">
                                    {inView && (
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={allocationData}
                                                    innerRadius={40}
                                                    outerRadius={60}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                    animationDuration={1500}
                                                    animationBegin={500}
                                                >
                                                    {allocationData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "4px" }}
                                                />
                                                <Legend verticalAlign="middle" align="right" layout="vertical" iconSize={8} wrapperStyle={{ fontSize: "12px", color: "#ccc" }} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 2: Finbridge */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Finbridge Text */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
                                Expert Financial Advisory
                            </h2>
                            <h3 className="text-4xl font-serif text-white mb-6 leading-tight">
                                Empowered by <br /> <span className="text-brand-gold">FinBridge</span>
                            </h3>
                            <p className="text-brand-muted text-lg leading-relaxed mb-6">
                                Navigating the complex world of finance requires a partner who understands both the market and your personal aspirations. FinBridge provides bespoke financial advisory services, ensuring your portfolio is robust, diverse, and primed for long-term success.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://finbridgeadvisor.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-3 border border-brand-gold text-brand-gold font-bold rounded hover:bg-brand-gold hover:text-black transition-all"
                                >
                                    Visit FinBridge <Globe size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Finbridge Visual/Card */}
                        <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl group-hover:bg-brand-gold/30 transition-all"></div>
                            <h4 className="text-2xl font-serif text-white mb-4 relative z-10">Why FinBridge?</h4>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <p className="text-brand-muted text-sm">Personalized Investment Strategies customized to your risk profile.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <p className="text-brand-muted text-sm">Data-driven insights for smarter asset allocation.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <p className="text-brand-muted text-sm">Dedicated advisory team for continuous portfolio monitoring.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* --- SERVICES GRID --- */}
            <section className="bg-brand-surface py-24 border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
                        Financial Services
                    </h2>
                    <h3 className="text-center text-3xl md:text-4xl font-serif text-white mb-12">
                        Comprehensive Wealth Solutions
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.services.map((service, index) => (
                            <div key={index} className="bg-brand-black p-8 rounded-xl border border-brand-border hover:border-brand-gold hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-[100px] transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bg-brand-gold/10"></div>
                                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-black transition-colors relative z-10">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-xl font-serif text-white mb-3 relative z-10">{service.title}</h4>
                                <p className="text-sm text-brand-muted leading-relaxed relative z-10">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- IMAGE SHOWCASE --- */}
            <section className="py-12 bg-black border-t border-brand-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-3xl font-serif text-white">Market Insights</h2>
                        {/* <a href="#" className="text-brand-gold text-sm font-bold uppercase flex items-center gap-1 hover:underline">View Details <ArrowUpRight size={14} /></a> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.gallery.map((img, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg h-64 cursor-pointer border border-white/10">
                                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Finance;