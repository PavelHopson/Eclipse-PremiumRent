import React from 'react';
import { CAR_CLASSES } from '../types';
import type { CarClass } from '../types';

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

const CATEGORY_IMAGES: Record<string, string> = {
  'Внедорожники': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop',
  'Премиум': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=400&auto=format&fit=crop',
  'Бизнес': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop',
  'Спорткары': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop',
  'Минивэны': 'https://images.unsplash.com/photo-1517672685839-01c907727376?q=80&w=400&auto=format&fit=crop',
  'Комфорт': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop',
  'Электромобили': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400&auto=format&fit=crop',
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  return (
    <section className="py-16 bg-dark border-y border-dark-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <h2 className="text-center text-white/40 text-lg sm:text-xl font-light italic tracking-wide mb-14">
          Категории автомобилей
        </h2>
        <div className="flex justify-between items-end gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {CAR_CLASSES.map((cat) => (
            <div
              key={cat}
              onClick={() => onSelect?.(cat)}
              className="flex flex-col items-center group cursor-pointer min-w-[140px] flex-1"
            >
              <div className="w-40 h-20 mb-4 relative flex items-center justify-center">
                <img
                  src={CATEGORY_IMAGES[cat]}
                  className="w-full h-full object-contain brightness-[0.25] grayscale group-hover:brightness-[0.6] group-hover:grayscale-0 transition-all duration-700"
                  alt={cat}
                />
              </div>
              <span className="text-sm text-white/35 group-hover:text-brand-gold transition-colors duration-500 tracking-wide">
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
