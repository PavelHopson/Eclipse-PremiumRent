import React from 'react';
import { CarClass } from '../types';
import { CARS } from '../data';
import { CarCard } from './CarCard';

interface CarCarouselProps {
  category: CarClass;
  onSelectCar: (id: string) => void;
}

export const CarCarousel: React.FC<CarCarouselProps> = ({ category, onSelectCar }) => {
  const cars = CARS.filter(c => c.class === category);

  if (cars.length === 0) return null;

  return (
    <section className="rent-carousel py-8 sm:py-12 lg:py-14 border-b border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-light tracking-wide">
            {category}
          </h2>
        </div>

        <div className="rent-car-grid">
          {cars.map(car => (
            <CarCard key={car.id} car={car} onSelect={onSelectCar} />
          ))}
        </div>
      </div>
    </section>
  );
};
