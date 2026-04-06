import React from 'react';
import { Car } from '../types';
import { Heart } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (id: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  return (
    <div
      className="group cursor-pointer flex-shrink-0 w-[380px] lg:w-[420px]"
      onClick={() => onSelect(car.id)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Heart */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/40 hover:text-brand-gold transition-colors"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <Heart size={20} />
        </button>

        {/* New badge */}
        {car.isNew && (
          <span className="absolute top-4 left-4 text-brand-secondary text-xs font-semibold italic">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-white/90 text-[15px] font-medium group-hover:text-brand-gold transition-colors">
          {car.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-white/50 text-sm">
            {car.pricePerDay.toLocaleString()} ₽/сут.
          </span>
          {car.oldPrice && (
            <span className="text-brand-secondary/60 text-xs line-through">
              {car.oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
