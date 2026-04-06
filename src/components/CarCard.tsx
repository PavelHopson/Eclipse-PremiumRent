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
      className="group cursor-pointer flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[400px] card-lift"
      onClick={() => onSelect(car.id)}
    >
      <div className="relative aspect-[16/11] overflow-hidden mb-3 sm:mb-4">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/20 pointer-events-none" />

        <button
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-white/30 hover:text-brand-gold transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <Heart size={18} />
        </button>

        {car.isNew && (
          <span className="absolute top-3 left-4 text-brand-gold/70 text-xs font-medium italic tracking-wide">New</span>
        )}
        {car.isHotDeal && (
          <span className="absolute top-3 left-4 bg-brand-secondary/90 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 uppercase tracking-wider">Sale</span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-1.5 sm:gap-2">
            {car.features.slice(0, 2).map((f, i) => (
              <span key={i} className="text-[10px] sm:text-[11px] text-white/50 bg-white/10 backdrop-blur-sm px-2 py-0.5 sm:py-1 tracking-wide">{f}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="text-white/85 text-sm sm:text-[15px] font-medium group-hover:text-brand-gold transition-colors duration-500 tracking-tight truncate">
            {car.name}
          </h3>
          <p className="text-white/25 text-xs sm:text-[12px] tracking-wide">{car.year} · {car.transmission} · {car.seats} мест</p>
        </div>
        <div className="text-right shrink-0">
          {car.oldPrice && (
            <span className="text-white/20 text-[10px] sm:text-xs line-through block leading-none mb-0.5">{car.oldPrice.toLocaleString()} ₽</span>
          )}
          <span className="text-brand-gold/70 text-sm sm:text-[14px] font-medium tracking-tight">
            {car.pricePerDay.toLocaleString()} <span className="text-white/20 text-[9px] sm:text-[10px]">₽/сут.</span>
          </span>
        </div>
      </div>
    </div>
  );
};
