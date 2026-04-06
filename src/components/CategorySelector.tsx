import React from 'react';
import { CAR_CLASSES } from '../types';
import type { CarClass } from '../types';
import { CATEGORY_COUNTS } from '../data';

interface CategorySelectorProps {
  onSelect?: (category: CarClass) => void;
}

const CATEGORY_IMAGES: Record<string, string> = {
  'Внедорожники': 'https://carloson.ru/uploads/images/1305c8bd676f3da9d1d81a28396bd81c-179x139.png',
  'Премиум': 'https://carloson.ru/uploads/images/bf92c039ee2d828b9e71c0dc1d468ce4-179x139.png',
  'Бизнес': 'https://carloson.ru/uploads/images/5655e0f3747fc23ca85fdd54bf157662-179x139.png',
  'Спорткары': 'https://carloson.ru/uploads/images/3d1c7e44c67672183b3e716fa56e32e7-179x139.png',
  'Минивэны': 'https://carloson.ru/uploads/images/1305c8bd676f3da9d1d81a28396bd81c-179x139.png',
  'Комфорт': 'https://carloson.ru/uploads/images/61a41967152d358192bb2c3a8009770f-179x139.png',
  'Электромобили': 'https://carloson.ru/uploads/images/5655e0f3747fc23ca85fdd54bf157662-179x139.png',
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
