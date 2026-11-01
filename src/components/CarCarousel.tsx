import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CarClass } from '../types';
import { CARS } from '../data';
import { CarCard } from './CarCard';

interface CarCarouselProps {
  category: CarClass;
  onSelectCar: (id: string) => void;
}

export const CarCarousel: React.FC<CarCarouselProps> = ({ category, onSelectCar }) => {
  const reduced = useReducedMotion();
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
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <CarCard car={car} onSelect={onSelectCar} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
