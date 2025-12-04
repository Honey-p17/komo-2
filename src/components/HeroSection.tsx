import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Komo by Kaffa luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-background/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Gujarat's Largest Culinary Sanctuary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary tracking-tight mb-8"
        >
          KOMO
          <span className="block text-2xl sm:text-3xl md:text-4xl text-background/90 font-light tracking-[0.2em] mt-2">
            by Kaffa
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a href="#contact" className="btn-gold">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-outline-glass">
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-background/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
