import React from 'react';
import { useStore } from '../store';
import { LOCATIONS } from '../types';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

export const SearchForm: React.FC = () => {
  const { booking, setBooking, nextStep } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-30 -mt-12 sm:-mt-16 mb-4">
      <div className="bg-dark-card/80 backdrop-blur-2xl border border-white/[0.04] shadow-premium">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 p-4 sm:p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/20 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1.5 sm:mb-2">
              <MapPin size={12} className="text-brand-gold/30" /> Где заберёте
            </label>
            <div className="relative">
              <select value={booking.pickupLocation} onChange={(e) => setBooking({ pickupLocation: e.target.value })}
                className="w-full bg-transparent text-white/75 text-sm sm:text-[15px] appearance-none cursor-pointer outline-none pr-8 font-light">
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-dark text-white">{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/15 pointer-events-none" size={14} />
            </div>
          </div>

          <div className="flex-1 p-4 sm:p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/20 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1.5 sm:mb-2">
              <Calendar size={12} className="text-brand-gold/30" /> Дата получения
            </label>
            <input type="date" value={booking.pickupDate} onChange={(e) => setBooking({ pickupDate: e.target.value })}
              className="w-full bg-transparent text-white/75 text-sm sm:text-[15px] outline-none cursor-pointer font-light [color-scheme:dark]" />
          </div>

          <div className="flex-1 p-4 sm:p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/20 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1.5 sm:mb-2">
              <Calendar size={12} className="text-brand-gold/30" /> Дата возврата
            </label>
            <input type="date" value={booking.returnDate} onChange={(e) => setBooking({ returnDate: e.target.value })}
              className="w-full bg-transparent text-white/75 text-sm sm:text-[15px] outline-none cursor-pointer font-light [color-scheme:dark]" />
          </div>

          <div className="p-3 flex items-center">
            <button onClick={nextStep}
              className="w-full lg:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-gold/90 text-dark text-xs sm:text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-brand-gold transition-all duration-300">
              Найти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
