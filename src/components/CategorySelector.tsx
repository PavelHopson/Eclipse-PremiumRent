
import React from 'react';
import { motion } from 'framer-motion';

interface CategorySelectorProps {
  onSelect?: () => void;
}

const CATEGORIES = [
  { name: 'Внедорожники', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop' },
  { name: 'Премиум', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop' },
  { name: 'Бизнес', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Спорткары', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop' },
  { name: 'Минивэны', img: 'https://images.unsplash.com/photo-1517672685839-01c907727376?q=80&w=400&auto=format&fit=crop' },
  { name: 'Электро', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=400&auto=format&fit=crop' },
];

export const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-center text-[10px] font-black tracking-[0.6em] mb-20 text-white/30 uppercase">Категории транспорта</h2>
        <div className="flex justify-between items-center gap-12 overflow-x-auto pb-12 hide-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onClick={onSelect}
              className="flex flex-col items-center group cursor-pointer min-w-[180px]"
            >
              <div className="w-48 h-28 mb-8 relative">
                <img 
                  src={cat.img} 
                  className="w-full h-full object-contain grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  alt={cat.name}
                />
              </div>
              <span className="text-[14px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-brand-primary transition-all duration-500">{cat.name}</span>
              <div className="w-0 group-hover:w-12 h-1 bg-brand-primary mt-4 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
