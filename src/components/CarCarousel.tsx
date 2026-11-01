import React, { useRef } from 'react';
import { CarClass } from '../types';
import { CARS } from '../data';
import { CarCard } from './CarCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="rent-carousel py-8 sm:py-12 lg:py-14 border-b border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide">
            {category}
          </h2>
          <div className="flex items-center gap-2">
            <button aria-label={`${category}: прокрутить влево`} onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300">
              <ChevronLeft size={16} />
            </button>
            <button aria-label={`${category}: прокрутить вправо`} onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-9 sm:h-9 border border-white/[0.08] flex items-center justify-center text-white/25 hover:text-white/50 hover:border-white/15 transition-all duration-300">
              <ChevronRight size={16} />
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
