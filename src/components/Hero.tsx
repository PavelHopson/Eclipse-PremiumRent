import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onActionClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <div className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden grain">
      {/* Background with parallax feel */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
          alt="Eclipse Premium"
          className="w-full h-full object-cover scale-[1.05]"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/50 to-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-12 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent hidden xl:block"></div>
      <div className="absolute right-12 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent hidden xl:block"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Ornamental top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-brand-gold/40 mx-auto mb-12"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-gold/60 text-[11px] uppercase tracking-[0.6em] mb-8"
          >
            Eclipse Premium Club
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[clamp(2rem,6vw,5rem)] font-extralight uppercase tracking-[0.12em] leading-[1.1] mb-10"
          >
            Аренда премиальных
            <br />
            <span className="text-gold-gradient">автомобилей</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4 text-white/35 text-sm tracking-[0.25em] font-light mb-16"
          >
            <span>Калининград</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40"></span>
            <span>Зеленоградск</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40"></span>
            <span>Светлогорск</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40"></span>
            <span>Куршская коса</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={onActionClick}
              className="relative border border-white/20 text-white/85 px-16 py-5 text-[13px] uppercase tracking-[0.35em] hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-700 group overflow-hidden"
            >
              <span className="relative z-10">Выбрать автомобиль</span>
              <div className="absolute inset-0 bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent"></div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={onActionClick}
      >
        <span className="text-[9px] text-white/15 uppercase tracking-[0.5em]">Scroll</span>
        <ChevronDown size={16} className="text-white/15" />
      </motion.div>
    </div>
  );
};
