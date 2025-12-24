import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white border-b border-white/10 ${scrolled ? "bg-black/95 shadow-xl" : "bg-gradient-to-b from-black/90 to-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex-shrink-0 cursor-pointer z-50" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-serif font-bold tracking-wider text-yellow-500">
            SIDDHARTH <span className="text-white">GROUPS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 h-full">
          {/* --- 1. ABOUT GROUP --- */}
          <NavItem title="About Group" isMegaMenu>
            <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
              {/* Col 1: Brand Story */}
              <div className="col-span-3 border-r border-white/10 pr-6">
                <h3 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider text-xs">Brand Story</h3>
                <div className="flex flex-col gap-4">
                  <LinkItem to="/#about-us" title="About Us" />
                  <LinkItem to="/#vision-mission" title="Vision, Mission & Values" />
                </div>
              </div>

              {/* Col 2: Growth Timeline */}
              <div className="col-span-3 border-r border-white/10 pr-6">
                <h3 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider text-xs">Growth Timeline</h3>
                <div className="relative pl-4 border-l border-gray-700">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white block">1983-2025</span>
                    <p className="text-gray-400 text-sm mt-1">40+ Years of Excellence in building the skyline.</p>
                  </div>
                </div>
              </div>

              {/* Col 3: Leadership (With Image) */}
              <div className="col-span-6 pl-4">
                <h3 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider text-xs">Our Leaders</h3>
                <div className="flex gap-6">
                  <div className="flex-1 group/leader cursor-pointer">
                    <div className="h-32 w-full overflow-hidden rounded-md mb-3 bg-gray-800 relative">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/leader:scale-110 opacity-80 group-hover/leader:opacity-100"
                        alt="Chairman"
                      />
                    </div>
                    <h4 className="font-bold text-white text-sm group-hover/leader:text-yellow-500 transition-colors">Mr. Lalit Kumar</h4>
                    <p className="text-xs text-gray-500">Chairman & Founder</p>
                  </div>
                  <div className="flex-1 group/leader cursor-pointer">
                    <div className="h-32 w-full overflow-hidden rounded-md mb-3 bg-gray-800 relative">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/leader:scale-110 opacity-80 group-hover/leader:opacity-100"
                        alt="MD"
                      />
                    </div>
                    <h4 className="font-bold text-white text-sm group-hover/leader:text-yellow-500 transition-colors">Siddharth Kumar</h4>
                    <p className="text-xs text-gray-500">Managing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </NavItem>

          {/* --- 2. BUSINESSES --- */}
          <NavItem title="Our Businesses" isMegaMenu>
            <div className="grid grid-cols-3 gap-12 w-full max-w-6xl mx-auto">
              <div>
                <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2">Creation & Infra</h3>
                <div className="flex flex-col gap-3">
                  <LinkItem to="/sid-construction" title="Siddharth Creation" subtitle="Residential & Commercial" />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2">Education & Healthcare</h3>
                <div className="flex flex-col gap-3">
                  <LinkItem to="/agri" title="Aadhya Education" subtitle="Educational Institution" />
                  <LinkItem to="/pharma" title="Vcare Education" subtitle="Day Care & Nursery" />
                  <LinkItem to="/pharma" title="Vcare Pharma" subtitle="Pharmaceutical Services" />
                </div>
              </div>
              <div>
                <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2">Films & Finance</h3>
                <div className="flex flex-col gap-3">
                  <LinkItem to="/lalitfilms" title="Lalit Films" subtitle="Film Production" />
                  <LinkItem to="/finbridge" title="FinBridge" subtitle="Investment Services" />
                  <LinkItem to="/mehta" title="Mehta Equities" subtitle="Accounting Services" />
                </div>
              </div>
            </div>
          </NavItem>

          {/* --- 3. PROJECTS --- */}
          <NavItem title="Projects" isMegaMenu>
            <div className="grid grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
              <div className="col-span-1">
                <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-xs">Ongoing Projects</h3>
                <div className="flex flex-col gap-3">
                  <LinkItem to="#" title="Commercial Towers" />
                  <LinkItem to="#" title="Residential Towers" />
                </div>
              </div>
              <div className="col-span-2 relative h-56 rounded-lg overflow-hidden group/img cursor-pointer shadow-lg border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
                  alt="Featured"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Featured Project</p>
                    <p className="text-white font-bold text-2xl font-serif">The Grand Palace, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </NavItem>

          <li className="cursor-pointer hover:text-yellow-500 transition-colors uppercase text-sm font-semibold tracking-wide">Media</li>
          <li className="cursor-pointer hover:text-yellow-500 transition-colors uppercase text-sm font-semibold tracking-wide">Contact</li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-yellow-500 transition-colors z-50 relative"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-6">
          {/* Mobile Accordion 1: About Group */}
          <MobileAccordion
            title="About Group"
            isOpen={activeAccordion === 0}
            onToggle={() => toggleAccordion(0)}
          >
            <div className="pl-4 flex flex-col gap-4 border-l border-white/10 ml-2 mt-2">
              <LinkItem to="#" title="About Us" />
              <LinkItem to="#" title="Vision, Mission & Values" />
              <LinkItem to="#" title="Our Product Brands" />
              <LinkItem to="#" title="Leadership" />
            </div>
          </MobileAccordion>

          {/* Mobile Accordion 2: Our Businesses */}
          <MobileAccordion
            title="Our Businesses"
            isOpen={activeAccordion === 1}
            onToggle={() => toggleAccordion(1)}
          >
            <div className="flex flex-col gap-6 mt-2 ml-2">
              <div>
                <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">Creation & Infra</h4>
                <div className="pl-4 border-l border-white/10 flex flex-col gap-3">
                  <LinkItem to="/sid-construction" title="Siddharth Creation" />
                </div>
              </div>
              <div>
                <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">Education & Healthcare</h4>
                <div className="pl-4 border-l border-white/10 flex flex-col gap-3">
                  <LinkItem to="/agri" title="Aadhya Education" />
                  <LinkItem to="/pharma" title="Vcare Education" />
                  <LinkItem to="/pharma" title="Vcare Pharma" />
                </div>
              </div>
              <div>
                <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">Films & Finance</h4>
                <div className="pl-4 border-l border-white/10 flex flex-col gap-3">
                  <LinkItem to="/lalitfilms" title="Lalit Films" />
                  <LinkItem to="/finbridge" title="FinBridge" />
                  <LinkItem to="/mehta" title="Mehta Equities" />
                </div>
              </div>
            </div>
          </MobileAccordion>

          {/* Mobile Accordion 3: Projects */}
          <MobileAccordion
            title="Projects"
            isOpen={activeAccordion === 2}
            onToggle={() => toggleAccordion(2)}
          >
            <div className="flex flex-col gap-6 mt-2 ml-2">
              <div>
                <h4 className="text-yellow-500 text-xs font-bold uppercase mb-2">Ongoing Projects</h4>
                <div className="pl-4 border-l border-white/10 flex flex-col gap-3">
                  <LinkItem to="#" title="Commercial Towers" />
                  <LinkItem to="#" title="Residential Towers" />
                </div>
              </div>
            </div>
          </MobileAccordion>

          {/* Simple Links */}
          <Link
            to="/#media"
            className="text-xl font-medium text-white hover:text-yellow-500 transition-colors border-b border-white/5 pb-4"
            onClick={() => setIsOpen(false)}
          >
            Media
          </Link>
          <Link
            to="/#contact"
            className="text-xl font-medium text-white hover:text-yellow-500 transition-colors border-b border-white/5 pb-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- Helper Components ---

const MobileAccordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-white/5 pb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-xl font-medium text-white hover:text-yellow-500 transition-colors py-2"
      >
        {title}
        {isOpen ? <ChevronUp size={20} className="text-yellow-500" /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[800px] opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
      >
        {children}
      </div>
    </div>
  );
};

const NavItem = ({ title, children, isMegaMenu = false }) => {
  return (
    <li className="group h-full flex items-center cursor-pointer">
      <span className="uppercase text-sm font-semibold tracking-wide text-gray-200 group-hover:text-yellow-500 transition-colors py-2 relative">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
      </span>

      <div
        className={`fixed left-0 top-20 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 ease-in-out
        invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        ${isMegaMenu ? "py-12" : "p-6"}`}
      >
        <div className={isMegaMenu ? "container mx-auto px-6" : ""}>{children}</div>
      </div>
    </li>
  );
};

const LinkItem = ({ title, subtitle, to = "#" }) => {
  const handleClick = (e) => {
    if (to.startsWith("/#") || to.startsWith("#")) {
      const id = to.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", to);
      }
    }
  };

  return (
    <Link to={to} onClick={handleClick} className="group/link block">
      <div className="text-gray-400 font-medium text-sm group-hover/link:text-white transition-colors flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-yellow-500 opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
        {title}
      </div>
      {subtitle && <div className="text-gray-600 text-xs mt-0.5 ml-3 group-hover/link:text-gray-500">{subtitle}</div>}
    </Link>
  );
};

export default Navbar;