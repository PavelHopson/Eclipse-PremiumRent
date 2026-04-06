import React from 'react';
import { useStore } from '../store';
import { LOCATIONS } from '../types';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

export const SearchForm: React.FC = () => {
  const { booking, setBooking, nextStep } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-6 relative z-30 -mt-16 mb-4">
      <div className="bg-dark-card/80 backdrop-blur-2xl border border-white/[0.04] shadow-premium">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Location */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-[0.25em] mb-2">
              <MapPin size={12} className="text-brand-gold/30" />
              Где заберёте
            </label>
            <div className="relative">
              <select
                value={booking.pickupLocation}
                onChange={(e) => setBooking({ pickupLocation: e.target.value })}
                className="w-full bg-transparent text-white/75 text-[14px] appearance-none cursor-pointer outline-none pr-8 font-light"
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-dark text-white">{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/15 pointer-events-none" size={14} />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-[0.25em] mb-2">
              <Calendar size={12} className="text-brand-gold/30" />
              Дата получения
            </label>
            <input
              type="date"
              value={booking.pickupDate}
              onChange={(e) => setBooking({ pickupDate: e.target.value })}
              className="w-full bg-transparent text-white/75 text-[14px] outline-none cursor-pointer font-light [color-scheme:dark]"
            />
          </div>

          {/* Return Date */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.015] transition-colors border-b lg:border-b-0 lg:border-r border-white/[0.04] cursor-pointer">
            <label className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-[0.25em] mb-2">
              <Calendar size={12} className="text-brand-gold/30" />
              Дата возврата
            </label>
            <input
              type="date"
              value={booking.returnDate}
              onChange={(e) => setBooking({ returnDate: e.target.value })}
              className="w-full bg-transparent text-white/75 text-[14px] outline-none cursor-pointer font-light [color-scheme:dark]"
            />
          </div>

          {/* Search */}
          <div className="p-3 flex items-center">
            <button
              onClick={nextStep}
              className="w-full lg:w-auto px-10 py-4 bg-brand-gold/90 text-dark text-[11px] font-semibold uppercase tracking-[0.25em] hover:bg-brand-gold transition-all duration-300"
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
