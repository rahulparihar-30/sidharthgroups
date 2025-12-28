import { motion } from "framer-motion";
import { Mail, Film, Users } from "lucide-react";

const WorkWithUs = () => {
  return (
    <section className="relative py-28 px-6 bg-brand-black overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-black to-black" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-gold/10 blur-[180px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Work With <span className="text-brand-gold">Lalit Films</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-brand-muted leading-relaxed mb-12"
        >
          We collaborate with writers, directors, actors, co-producers, 
          and distributors who believe in powerful storytelling and 
          cinematic excellence.
        </motion.p>

        {/* Collaboration Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          <div className="border border-brand-border rounded-xl p-6 bg-brand-surface hover:border-brand-gold/60 transition">
            <Film className="mx-auto mb-3 text-brand-gold" />
            <p className="text-sm uppercase tracking-widest text-brand-muted">
              Submit Script
            </p>
          </div>

          <div className="border border-brand-border rounded-xl p-6 bg-brand-surface hover:border-brand-gold/60 transition">
            <Users className="mx-auto mb-3 text-brand-gold" />
            <p className="text-sm uppercase tracking-widest text-brand-muted">
              Co-Produce
            </p>
          </div>

          <div className="border border-brand-border rounded-xl p-6 bg-brand-surface hover:border-brand-gold/60 transition">
            <Mail className="mx-auto mb-3 text-brand-gold" />
            <p className="text-sm uppercase tracking-widest text-brand-muted">
              Collaborate
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:connect@sidharthgroup.in"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4
                     bg-brand-gold text-black font-semibold rounded-full
                     hover:bg-white transition-all duration-300"
        >
          Get in Touch
        </motion.a>

      </div>
    </section>
  );
};

export default WorkWithUs;
