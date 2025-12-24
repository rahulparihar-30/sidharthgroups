import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Chat = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show only if scrolled past 1 viewport height (approx the "first one")
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/919876543210?text=Hello%20Siddharth%20Group,%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-8 right-8 bg-brand-gold p-4 rounded-full shadow-2xl z-50 cursor-pointer transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
        >
            <FaWhatsapp size={32} className="text-brand-black" />
        </a>
    );
};
export default Chat;