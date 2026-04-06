import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onActionClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <div className="relative h-[100svh] min-h-[600px] sm:min-h-[750px] flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop" alt="Eclipse Premium" className="w-full h-full object-cover scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="absolute left-6 sm:left-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent hidden xl:block" />
      <div className="absolute right-6 sm:right-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent hidden xl:block" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 sm:w-16 h-px bg-brand-gold/40 mx-auto mb-8 sm:mb-12" />

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-gold/60 text-[10px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] mb-6 sm:mb-8">
            Eclipse Premium Club
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[clamp(1.8rem,5vw,5rem)] font-extralight uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-[1.1] mb-6 sm:mb-10">
            Аренда премиальных
            <br />
            <span className="text-gold-gradient">автомобилей</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-2 sm:gap-4 text-white/35 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] font-light mb-10 sm:mb-16 flex-wrap">
            <span>Калининград</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40 hidden sm:block" />
            <span>Зеленоградск</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/40 hidden sm:block" />
            <span>Светлогорск</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
            <button onClick={onActionClick}
              className="relative border border-white/20 text-white/85 px-8 sm:px-16 py-4 sm:py-5 text-xs sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.35em] hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-700 group overflow-hidden">
              <span className="relative z-10">Выбрать автомобиль</span>
              <div className="absolute inset-0 bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-dark to-transparent" />

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer" onClick={onActionClick}>
        <span className="text-[8px] sm:text-[9px] text-white/15 uppercase tracking-[0.5em]">Scroll</span>
        <ChevronDown size={14} className="text-white/15" />
      </motion.div>
    </div>
  );
};
