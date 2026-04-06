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
      className="group cursor-pointer flex-shrink-0 w-[360px] lg:w-[400px] card-lift"
      onClick={() => onSelect(car.id)}
    >
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden mb-4">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-[1.06]"
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/20 pointer-events-none"></div>

        {/* Heart */}
        <button
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-white/30 hover:text-brand-gold transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <Heart size={18} />
        </button>

        {/* New badge */}
        {car.isNew && (
          <span className="absolute top-4 left-5 text-brand-gold/70 text-[11px] font-medium italic tracking-wide">
            New
          </span>
        )}

        {/* Sale badge */}
        {car.isHotDeal && (
          <span className="absolute top-4 left-5 bg-brand-secondary/90 text-white text-[10px] font-semibold px-3 py-1 uppercase tracking-wider">
            Sale
          </span>
        )}

        {/* Bottom overlay info — visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-2">
            {car.features.slice(0, 2).map((f, i) => (
              <span key={i} className="text-[10px] text-white/50 bg-white/10 backdrop-blur-sm px-2.5 py-1 tracking-wide">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div className="space-y-0.5">
          <h3 className="text-white/85 text-[14px] font-medium group-hover:text-brand-gold transition-colors duration-500 tracking-tight">
            {car.name}
          </h3>
          <p className="text-white/25 text-[11px] tracking-wide">{car.year} · {car.transmission} · {car.seats} мест</p>
        </div>
        <div className="text-right">
          {car.oldPrice && (
            <span className="text-white/20 text-[11px] line-through block leading-none mb-0.5">
              {car.oldPrice.toLocaleString()} ₽
            </span>
          )}
          <span className="text-brand-gold/70 text-[13px] font-medium tracking-tight">
            {car.pricePerDay.toLocaleString()} <span className="text-white/20 text-[10px]">₽/сут.</span>
          </span>
        </div>
      </div>
    </div>
  );
};
