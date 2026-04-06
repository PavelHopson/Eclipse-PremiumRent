import React from 'react';
import { CAR_CLASSES } from '../types';
import type { CarClass } from '../types';
import { CATEGORY_COUNTS } from '../data';

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

const CATEGORY_IMAGES: Record<string, string> = {
  'Внедорожники': 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?q=80&w=400&auto=format&fit=crop',
  'Премиум': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=400&auto=format&fit=crop',
  'Бизнес': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop',
  'Спорткары': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop',
  'Минивэны': 'https://images.unsplash.com/photo-1559038465-e0ca2910b298?q=80&w=400&auto=format&fit=crop',
  'Комфорт': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop',
  'Электромобили': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400&auto=format&fit=crop',
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  return (
    <section className="py-20 bg-dark-card border-y border-white/[0.03] grain relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        <h2 className="text-center ornament text-white/25 text-lg font-extralight italic tracking-[0.15em] mb-16">
          Категории автомобилей
        </h2>
        <div className="flex justify-between items-end gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {CAR_CLASSES.map((cat) => (
            <div
              key={cat}
              onClick={() => onSelect?.(cat)}
              className="flex flex-col items-center group cursor-pointer min-w-[130px] flex-1"
            >
              <div className="w-36 h-20 mb-5 relative flex items-center justify-center overflow-hidden">
                <img
                  src={CATEGORY_IMAGES[cat]}
                  className="w-full h-full object-contain brightness-[0.15] saturate-0 group-hover:brightness-[0.5] group-hover:saturate-100 transition-all duration-1000"
                  alt={cat}
                />
              </div>
              <span className="text-[12px] text-white/25 group-hover:text-brand-gold/70 transition-colors duration-700 tracking-[0.1em]">
                {cat}
              </span>
              {/* Subtle underline on hover */}
              <div className="w-0 group-hover:w-8 h-px bg-brand-gold/30 mt-3 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
