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
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-14 border-b border-white/[0.03]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white/40 text-xl sm:text-2xl font-extralight italic tracking-wide">
            {category}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
            <button className="hidden sm:flex items-center gap-2 border border-white/[0.08] px-5 py-2 text-white/30 text-[11px] uppercase tracking-[0.2em] hover:text-white/50 hover:border-white/15 transition-all duration-300 ml-1">
              Все {category.toLowerCase()} <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto hide-scrollbar pb-4"
        >
          {cars.map(car => (
            <CarCard key={car.id} car={car} onSelect={onSelectCar} />
          ))}
        </div>
      </div>
    </section>
  );
};
