import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black opacity-50"></div>

            <div className="relative z-10 max-w-3xl text-center">
                <div className="mb-8 flex justify-center">
                    <div className="p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 animate-pulse">
                        <Clock size={48} className="text-yellow-500" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                    Coming <span className="text-yellow-500">Soon</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light tracking-wide">
                    We're building something <span className="text-white font-medium">extraordinary</span>.
                </p>

                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10 opacity-50"></div>

                <p className="text-gray-500 max-w-lg mx-auto mb-12">
                    Our team is working hard to bring you a premium experience. Stay tuned for updates on our latest ventures.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-yellow-500 hover:text-white transition-colors duration-300 border-b border-yellow-500 hover:border-white pb-1"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent"></div>
        </div>
    );
};

export default ComingSoon;
