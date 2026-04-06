
import React from 'react';
import { Car } from '../types';
import { Gauge, Users, Fuel, ArrowRight, Shield } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (id: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  return (
    <div 
      className="group bg-white rounded-[50px] overflow-hidden border border-gray-100 hover:border-brand-primary/20 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col"
      onClick={() => onSelect(car.id)}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden cursor-pointer shrink-0">
        <img 
          src={car.images[0]} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Badges - Floating glass effect */}
        <div className="absolute top-8 left-8 flex flex-col gap-3">
          {car.isPopular && (
            <span className="bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-2xl shadow-xl">
              Popular
            </span>
          )}
          {car.isHotDeal && (
            <span className="bg-brand-secondary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-2xl shadow-xl animate-pulse">
              Sale -15%
            </span>
          )}
        </div>

        {/* Exclusive Badge */}
        <div className="absolute top-8 right-8">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white/60 group-hover:text-brand-primary transition-colors duration-500">
            <Shield size={24} />
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      
      {/* Content */}
      <div className="p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-1">
            <p className="text-[11px] font-black text-brand-primary uppercase tracking-[0.3em]">{car.class}</p>
            <h3 className="text-3xl font-black text-brand-text tracking-tighter leading-none group-hover:text-brand-primary transition-colors">{car.name}</h3>
          </div>
          <div className="text-right">
            {car.oldPrice && (
              <p className="text-sm font-bold text-brand-secondary line-through mb-1">{car.oldPrice.toLocaleString()} ₽</p>
            )}
            <p className="text-4xl font-black text-brand-text leading-none tracking-tighter">
              {car.pricePerDay.toLocaleString()} 
              <span className="text-[10px] font-black text-brand-muted uppercase tracking-[0.3em] block mt-1">₽/день</span>
            </p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-gray-50">
          <div className="flex flex-col items-center gap-2">
            <Gauge size={18} className="text-brand-muted" />
            <span className="text-[10px] font-black text-brand-text uppercase tracking-widest">{car.transmission === 'Автомат' ? 'АТ' : 'МТ'}</span>
          </div>
          <div className="flex flex-col items-center gap-2 border-x border-gray-50">
            <Users size={18} className="text-brand-muted" />
            <span className="text-[10px] font-black text-brand-text uppercase tracking-widest">{car.seats} мест</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Fuel size={18} className="text-brand-muted" />
            <span className="text-[10px] font-black text-brand-text uppercase tracking-widest">{car.fuel}</span>
          </div>
        </div>

        {/* Footer Interaction */}
        <div className="mt-auto flex items-center justify-between group/btn cursor-pointer">
          <div className="flex items-center gap-3">
            <span className="font-black text-xs uppercase tracking-[0.2em] text-brand-text group-hover:text-brand-primary transition-colors">Забронировать</span>
            <div className="w-8 h-[2px] bg-brand-text group-hover:bg-brand-primary group-hover:w-16 transition-all duration-700"></div>
          </div>
          <div className="w-14 h-14 bg-brand-bg rounded-[20px] flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-700 group-hover:scale-110 shadow-sm">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
