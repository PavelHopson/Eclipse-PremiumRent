
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onActionClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <div className="relative h-[95vh] min-h-[800px] overflow-hidden flex items-center">
      {/* Premium Video/Image Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop" 
          alt="Premium Baltic Travel" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-[24px] mb-12 shadow-2xl">
            <span className="w-3 h-3 bg-brand-primary rounded-full animate-pulse shadow-[0_0_20px_rgba(43,182,115,0.8)]"></span>
            <span className="text-white font-black tracking-[0.4em] text-[11px] uppercase">LiteRent Premium Kaliningrad</span>
          </div>
          
          <h1 className="text-white text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-14">
            Твоя Балтика. <br /> Твои правила.
          </h1>
          
          <p className="text-white/80 text-2xl lg:text-3xl max-w-2xl font-medium leading-relaxed mb-20 tracking-tight border-l-4 border-brand-primary pl-8">
            Эксклюзивный автопарк 2024 года <br /> для тех, кто ценит эстетику и абсолютный комфорт.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <button 
              onClick={onActionClick}
              className="w-full sm:w-auto bg-brand-primary text-white px-16 py-8 rounded-[32px] font-black text-xl hover:brightness-110 transition-all flex items-center justify-center gap-5 shadow-2xl shadow-brand-primary/30 group active:scale-95"
            >
              Выбрать автомобиль
              <ArrowRight className="group-hover:translate-x-3 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-black text-lg group">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:bg-white group-hover:text-black transition-all">
                <PlayCircle size={24} />
              </div>
              Смотреть видео
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-10 bottom-0 top-0 w-px bg-white/10 hidden xl:block"></div>
      <div className="absolute right-20 bottom-0 top-0 w-px bg-white/5 hidden xl:block"></div>

      {/* Subtle indicator scroll down */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.6em] [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </div>
  );
};
