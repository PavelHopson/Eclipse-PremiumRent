import { create } from 'zustand';
import { BookingState, CarClass } from './types';

const dateAfterDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
};

interface AppStore {
  booking: BookingState;
  setBooking: (update: Partial<BookingState>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetBooking: () => void;
  goToStep: (step: number) => void;
  activeCategory: CarClass | null;
  setActiveCategory: (cat: CarClass | null) => void;
}

export const useStore = create<AppStore>((set) => ({
  booking: {
    step: 1,
    pickupLocation: 'Аэропорт Храброво',
    pickupDate: dateAfterDays(0),
    returnDate: dateAfterDays(3),
    selectedCarId: null,
    extras: [],
    customer: { name: '', phone: '', email: '' }
  },
  setBooking: (update) => set((state) => ({
    booking: { ...state.booking, ...update }
  })),
  nextStep: () => set((state) => ({
    booking: { ...state.booking, step: state.booking.step + 1 }
  })),
  prevStep: () => set((state) => ({
    booking: { ...state.booking, step: Math.max(1, state.booking.step - 1) }
  })),
  goToStep: (step) => set((state) => ({
    booking: { ...state.booking, step }
  })),
  resetBooking: () => set({
    booking: {
      step: 1,
      pickupLocation: 'Аэропорт Храброво',
      pickupDate: dateAfterDays(0),
      returnDate: dateAfterDays(3),
      selectedCarId: null,
      extras: [],
      customer: { name: '', phone: '', email: '' }
    }
  }),
  activeCategory: null,
  setActiveCategory: (cat) => set({ activeCategory: cat }),
}));
