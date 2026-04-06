import React, { useRef } from 'react';
import { Car, CarClass } from '../types';
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
    const amount = 440;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-12 border-b border-dark-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white/50 text-xl sm:text-2xl font-light italic tracking-wide">
            {category}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <button className="hidden sm:flex items-center gap-2 border border-white/15 px-6 py-2.5 text-white/50 text-xs uppercase tracking-[0.2em] hover:text-white hover:border-white/30 transition-colors ml-2">
              Все {category.toLowerCase()} <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-4"
        >
          {cars.map(car => (
            <CarCard key={car.id} car={car} onSelect={onSelectCar} />
          ))}
        </div>
      </div>
    </section>
  );
};
