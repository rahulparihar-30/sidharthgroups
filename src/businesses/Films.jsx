import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Film, Calendar } from "lucide-react";
import { filmsData, filmsProduced } from "../data";
import WorkWithUs from "./films/WorkWithUs";

const Films = () => {
  const data = filmsData;

  /* ================= HERO SLIDESHOW ================= */
  const posters = ["/lalitfilms/raeesjada.jpg","/lalitfilms/bala.jpg","/lalitfilms/maan.jpg","/lalitfilmss/nayabakra.jpg"];
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center">
        {posters.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Movie Poster"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentPoster ? 1 : 0,
              scale: index === currentPoster ? 1 : 1.1
            }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/70 to-black/30" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            {data.name}
          </h1>
          <p className="text-xl italic text-gray-300">
            “{data.tagline}”
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <div className="-mt-16 mx-4 md:mx-12 bg-brand-surface border border-brand-border rounded-xl shadow-2xl relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border">
          {data.stats.map((stat, i) => (
            <div key={i} className="p-6 text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-brand-gold">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">
          About Lalit Films
        </h2>
        <p className="text-lg text-brand-muted leading-relaxed max-w-3xl mx-auto">
          {data.aboutText}
        </p>
      </section>

      {/* ================= FILMS (HORIZONTAL SCROLL) ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto mb-10 flex justify-between items-end">
          <h2 className="text-4xl font-serif">Films Produced</h2>
          <span className="text-brand-gold text-sm uppercase tracking-widest">
            Scroll →
          </span>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {filmsProduced.map((film, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]
                           snap-start relative group rounded-xl overflow-hidden
                           bg-brand-surface border border-brand-border
                           hover:border-brand-gold/60 transition-all duration-500"
              >
                {/* Poster */}
                <div className="relative h-120 overflow-hidden">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-colors duration-500" />

                  {/* IMDb Badge */}
                  {film.imdb && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 px-3 py-1 rounded">
                      <img
                        src="/IMDB.svg"
                        alt="IMDb"
                        className="h-4"
                      />
                      <span className="text-yellow-400 font-bold text-sm">
                        {film.imdb}
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6
                                translate-y-24 group-hover:translate-y-0
                                transition-transform duration-500
                                backdrop-blur-md bg-black/70">
                  <h3 className="text-2xl font-serif mb-1">
                    {film.title}
                  </h3>

                  <div className="flex gap-4 text-xs text-gray-300 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {film.releaseDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Film size={14} /> {film.genre}
                    </span>
                  </div>

                  <p className="text-sm text-gray-200 mb-3 line-clamp-3">
                    {film.description}
                  </p>

                  <p className="text-xs text-gray-400">
                    <span className="text-white">Director:</span> {film.director}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="text-white">Cast:</span> {film.cast}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <WorkWithUs/>
      </section>

    </div>
  );
};

export default Films;
