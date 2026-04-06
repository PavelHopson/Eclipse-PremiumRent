import React from 'react';
import { useStore } from '../store';
import { LOCATIONS } from '../types';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';

export const SearchForm: React.FC = () => {
  const { booking, setBooking, nextStep } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-6 relative z-30 -mt-20 mb-8">
      <div className="bg-dark-card border border-dark-border rounded-sm">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Location */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.02] transition-colors border-b lg:border-b-0 lg:border-r border-dark-border group cursor-pointer">
            <label className="flex items-center gap-2 text-[11px] text-white/30 uppercase tracking-wider mb-2">
              <MapPin size={13} className="text-brand-gold/60" />
              Где заберёте?
            </label>
            <div className="relative">
              <select
                value={booking.pickupLocation}
                onChange={(e) => setBooking({ pickupLocation: e.target.value })}
                className="w-full bg-transparent text-white/90 text-[15px] appearance-none cursor-pointer outline-none pr-8"
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-dark text-white">{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.02] transition-colors border-b lg:border-b-0 lg:border-r border-dark-border group cursor-pointer">
            <label className="flex items-center gap-2 text-[11px] text-white/30 uppercase tracking-wider mb-2">
              <Calendar size={13} className="text-brand-gold/60" />
              Дата получения
            </label>
            <input
              type="date"
              value={booking.pickupDate}
              onChange={(e) => setBooking({ pickupDate: e.target.value })}
              className="w-full bg-transparent text-white/90 text-[15px] outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          {/* Return Date */}
          <div className="flex-1 p-5 lg:p-6 hover:bg-white/[0.02] transition-colors border-b lg:border-b-0 lg:border-r border-dark-border group cursor-pointer">
            <label className="flex items-center gap-2 text-[11px] text-white/30 uppercase tracking-wider mb-2">
              <Calendar size={13} className="text-brand-gold/60" />
              Дата возврата
            </label>
            <input
              type="date"
              value={booking.returnDate}
              onChange={(e) => setBooking({ returnDate: e.target.value })}
              className="w-full bg-transparent text-white/90 text-[15px] outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          {/* Search Button */}
          <div className="p-3 flex items-center">
            <button
              onClick={nextStep}
              className="w-full lg:w-auto px-10 py-4 bg-brand-primary text-white text-sm uppercase tracking-[0.2em] hover:brightness-110 transition-all"
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
