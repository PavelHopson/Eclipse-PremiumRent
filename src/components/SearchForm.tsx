
import React from 'react';
import { useStore } from '../store';
import { LOCATIONS } from '../types';
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const SearchForm: React.FC = () => {
  const { booking, setBooking, nextStep } = useStore();

  return (
    <div className="max-w-6xl mx-auto px-6 relative z-30 -mt-24">
      <div className="bg-white rounded-[40px] p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Location Select */}
          <div className="flex-1 p-6 lg:p-8 hover:bg-brand-bg rounded-[32px] transition-colors group cursor-pointer border-b lg:border-b-0 lg:border-r border-gray-50">
            <label className="flex items-center gap-2 text-[11px] font-bold text-brand-muted uppercase tracking-wider mb-2">
              <MapPin size={14} className="text-brand-primary" />
              Где заберете?
            </label>
            <div className="relative">
              <select 
                value={booking.pickupLocation}
                onChange={(e) => setBooking({ pickupLocation: e.target.value })}
                className="w-full bg-transparent text-xl font-bold text-brand-text appearance-none cursor-pointer outline-none pr-8"
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none group-hover:text-brand-primary transition-colors" size={20} />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex-1 p-6 lg:p-8 hover:bg-brand-bg rounded-[32px] transition-colors group cursor-pointer border-b lg:border-b-0 lg:border-r border-gray-50">
            <label className="flex items-center gap-2 text-[11px] font-bold text-brand-muted uppercase tracking-wider mb-2">
              <Calendar size={14} className="text-brand-primary" />
              Дата получения
            </label>
            <input 
              type="date"
              value={booking.pickupDate}
              onChange={(e) => setBooking({ pickupDate: e.target.value })}
              className="w-full bg-transparent text-xl font-bold text-brand-text outline-none cursor-pointer"
            />
          </div>

          {/* Return Date */}
          <div className="flex-1 p-6 lg:p-8 hover:bg-brand-bg rounded-[32px] transition-colors group cursor-pointer">
            <label className="flex items-center gap-2 text-[11px] font-bold text-brand-muted uppercase tracking-wider mb-2">
              <Calendar size={14} className="text-brand-primary" />
              Дата возврата
            </label>
            <input 
              type="date"
              value={booking.returnDate}
              onChange={(e) => setBooking({ returnDate: e.target.value })}
              className="w-full bg-transparent text-xl font-bold text-brand-text outline-none cursor-pointer"
            />
          </div>

          {/* Search Button */}
          <div className="p-4 lg:p-4 flex items-center">
            <Button onClick={nextStep} className="h-full w-full lg:w-20 lg:h-20 !rounded-[28px] !px-0 lg:aspect-square group">
              <Search size={28} className="group-hover:scale-110 transition-transform" />
              <span className="lg:hidden ml-2">Найти автомобиль</span>
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
