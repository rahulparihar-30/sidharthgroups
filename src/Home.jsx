import { useEffect, useState } from "react";

// Components
import GroupOverview from "./GroupOverview";
import BusinessVerticals from "./BusinessVerticals";
import WhyChooseUs from "./WhyChooseUs";
import OurApproach from "./OurApproach";
import FeaturedWork from "./FeaturedWork";
import LeadershipTeam from "./LeadershipTeam";
import VisionMission from "./VisionMission";
import MediaSection from "./MediaSection";
import ContactSection from "./ContactSection";
import Chat from "./Chat";

/* ===============================
   HERO SLIDES (OUTSIDE COMPONENT)
   =============================== */
const heroSlides = [
  {
    image: "/construction-2.png",
    title: "Building Value Across Industries",
    subtitle: "From infrastructure to innovation, we are crafting the future."
  },
  {
    image: "/Agriculture-4.png",
    title: "Sustainable Growth",
    subtitle: "Empowering communities through agritech and green solutions."
  },
  {
    image: "/franchise-1.png",
    title: "Global Franchise Network",
    subtitle: "Scaling success stories beyond borders."
  },
  {
    image: "/rupee-4395462_1280.jpg",
    title: "Strategic Investments",
    subtitle: "Growing wealth through trusted business foundations."
  },
  {
    image: "/lalitfilms/raeesjada.jpg",
    title: "Stories That Inspire",
    subtitle: "Producing cinema with vision and purpose."
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ===============================
     AUTO SLIDER (REACT 18 SAFE)
     =============================== */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ===============================
     PRELOAD HERO IMAGES
     =============================== */
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <>
      {/* ===============================
          1. HERO SECTION
         =============================== */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
          <span className="text-brand-gold font-bold uppercase tracking-[0.25em] mb-4 animate-fadeIn">
            Siddharth Group
          </span>

          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl animate-slideUp">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl animate-fadeIn delay-200">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn delay-300">
            <button className="px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm">
              Explore Our Businesses
            </button>

            <button className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm">
              Contact Us
            </button>
          </div>
        </div>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === idx
                ? "bg-brand-gold w-8"
                : "bg-white/30 w-3 hover:bg-white/60"
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ===============================
          PAGE SECTIONS
         =============================== */}
      <GroupOverview />
      <BusinessVerticals />
      <WhyChooseUs />
      <OurApproach />
      <FeaturedWork />
      <LeadershipTeam />
      {/* 8. Vision Mission */}
      <VisionMission />

      {/* 9. Media Section */}
      <MediaSection />

      {/* 10. Contact Section */}
      <ContactSection />

      <Chat />
    </>
  );
};

export default Home;
