import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onActionClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo mark */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 border border-brand-gold/30 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-light text-brand-gold tracking-[0.3em]">E</span>
            </div>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-light uppercase tracking-[0.15em] leading-tight mb-8">
            Аренда премиальных
            <br />
            автомобилей
          </h1>

          <p className="text-white/50 text-lg sm:text-xl tracking-[0.3em] font-light mb-16">
            Калининград · Зеленоградск · Светлогорск · Куршская коса
          </p>

          <button
            onClick={onActionClick}
            className="border border-white/25 text-white/90 px-14 py-5 text-sm uppercase tracking-[0.3em] hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-500"
          >
            Выбрать автомобиль
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 cursor-pointer"
        onClick={onActionClick}
      >
        <ChevronDown size={28} />
      </motion.div>
    </div>
  );
};
