import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-brand-black text-white pt-12 md:pt-20 overflow-hidden relative border-t border-brand-border">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- TOP SECTION: CTA & BRAND --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-10 md:mb-20 border-b border-brand-border pb-12">

          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              Building the Future, <br />
              <span className="text-brand-gold italic">Preserving Values.</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-lg">
              Partner with Siddharth Groups and place your capital within a diversified ecosystem of infrastructure, education, healthcare, finance, and media—managed with discipline, transparency, and a long-term growth vision.
            </p>
          </div>

          <div>
            <button className="group bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300">
              Enquire Now
            </button>
          </div>
        </div>


        {/* --- MIDDLE SECTION: LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Col 1: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>

            <div className="flex items-start gap-3 text-brand-muted hover:text-white transition-colors cursor-pointer group">
              <MapPin size={20} className="mt-1 group-hover:text-brand-gold" />
              <span className="text-sm leading-relaxed">
                Sidharth Group,<br />
                Karve Nagar, Pune,<br />
                Maharashtra, India - 411052
              </span>
            </div>

            <div className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors cursor-pointer group">
              <Phone size={20} className="group-hover:text-brand-gold" />
              <a target="_blank" rel="noopener noreferrer" href="tel:+918080012133" className="text-sm">+91 8080012133</a>
            </div>

            <div className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors cursor-pointer group">
              <Mail size={20} className="group-hover:text-brand-gold" />
              <a target="_blank" rel="noopener noreferrer" href="mailto:connect@sidharthgroup.in" className="text-sm">connect@sidharthgroup.in</a>
            </div>
          </div>


          {/* Col 2: Our Businesses */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Our Ecosystem</h4>
            <ul className="space-y-4">
              <FooterLink text="Siddharth Creation" to="/sid-construction" />
              <FooterLink text="Adhya" to="adhya.sidharthgroup.in" /> {/* Wait, 'agri' was used for Education in Navbar?? I need to check Navbar line 112. */}
              <FooterLink text="Lalit Films Production" to="/lalitfilms" />
              {/* Agritech Removed */}
              <FooterLink text="Vcare Education" to="https://vcareeducation.org/" />
              <FooterLink text="Vcare Pharma" to="/coming-soon" />
              <FooterLink text="FinBridge" to="https://finbridgeadvisor.com/" />
              <FooterLink text="Sidharth Finance" to="https://mehtagroup.in/" />
              <FooterLink text="Weekend Retreat" to="/coming-soon" />
            </ul>
          </div>


          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink text="About Us" to="/#about-us" />
              <FooterLink text="Vision & Mission" to="/#vision-mission" />
              <FooterLink text="Contact" to="/#contact" />
            </ul>
          </div>


          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Stay Updated</h4>
            <p className="text-brand-muted text-sm mb-4">
              Subscribe to receive updates on new project launches and investment opportunities.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-brand-surface border border-brand-border text-white text-sm p-3 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="text-left text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                Subscribe <ArrowUp className="rotate-45" size={14} />
              </button>
            </form>
          </div>

        </div>


        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-brand-border gap-4">
          <p className="text-brand-muted text-xs">
            © 2025 Siddharth Groups. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a>
          </p>

          <div className="flex gap-6">
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors"
          >
            Back to Top
            <div className="p-2 border border-brand-border rounded-full group-hover:border-brand-gold transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>

      {/* --- GIANT TEXT WATERMARK --- */}
      {/* This creates that high-end "Architectural" feel at the very bottom */}
      <div className="w-full overflow-hidden leading-none select-none opacity-[0.05] pointer-events-none border-t border-brand-border mt-10">
        <h1 className="text-[18vw] font-serif font-bold text-center text-white tracking-tight -mb-10 lg:-mb-24">
          SIDHARTH
        </h1>
      </div>

    </footer>
  );
};

// --- Helper Components ---

const FooterLink = ({ text, to = "#", badge }) => (
  <li className="group flex items-center justify-between cursor-pointer">
    <Link to={to} className="text-brand-muted text-sm group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300">
      {text}
    </Link>
    {badge && (
      <span className="text-[10px] bg-brand-gold text-brand-black font-bold px-1.5 py-0.5 rounded">
        {badge}
      </span>
    )}
  </li>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="text-brand-muted hover:text-brand-gold hover:-translate-y-1 transition-all duration-300">
    {icon}
  </a>
);

export default Footer;