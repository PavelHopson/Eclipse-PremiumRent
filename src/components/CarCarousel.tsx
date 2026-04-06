import React, { useRef } from 'react';
import { CarClass } from '../types';
import { CARS } from '../data';
import { CarCard } from './CarCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CarCarouselProps {
  category: CarClass;
  onSelectCar: (id: string) => void;
}

export const CarCarousel: React.FC<CarCarouselProps> = ({ category, onSelectCar }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cars = CARS.filter(c => c.class === category);

  if (cars.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-12 lg:py-14 border-b border-white/[0.03]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="text-white/40 text-lg sm:text-xl lg:text-2xl font-extralight italic tracking-wide">
            {category}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300">
              <ChevronRight size={16} />
            </button>
            <button className="hidden sm:flex items-center gap-2 border border-white/[0.08] px-4 sm:px-5 py-2 text-white/30 text-[11px] uppercase tracking-[0.2em] hover:text-white/50 hover:border-white/15 transition-all duration-300 ml-1">
              Все {category.toLowerCase()} <ArrowRight size={12} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 sm:gap-6 lg:gap-7 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {cars.map(car => (
            <CarCard key={car.id} car={car} onSelect={onSelectCar} />
          ))}
        </div>
      </div>
    </section>
  );
};
